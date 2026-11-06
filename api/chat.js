/**
 * Optional Vercel Serverless Endpoint for MRK AI Assistant.
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(200).json({ mode: "local_nlu" });
  }

  try {
    const { message, careerStatus } = req.body || {};
    if (!message || typeof message !== "string" || message.length > 600) {
      return res.status(400).json({ mode: "local_nlu" });
    }

    const activeCareer = careerStatus?.statusTitle
      ? `${careerStatus.statusTitle}. ${careerStatus.summaryText}`
      : "Siap menerima tawaran Magang, Kerja Praktik, maupun pekerjaan sampingan paruh waktu dan proyek lepas.";

    const systemPrompt = `Anda adalah asisten di website resmi Mochammad Rizky Kurniawan, https://rizky-kurniawan.my.id.
Aturan wajib:
1. Jawab hanya pertanyaan yang berhubungan dengan Mochammad Rizky Kurniawan: kuliah STr Teknik Telekomunikasi PENS Surabaya semester 5, IPK 3.43 dari 4.00, IPS terakhir 3.58, keahlian NOC, jaringan, Linux, keamanan dasar, Python, C++, web, IoT, SDR, 6 proyek, 36 sertifikat asli, organisasi, kompetisi, CV, kontak, dan status peluang kerja.
2. Tolak dengan sopan dalam dua kalimat jika diminta hal di luar diri Rizky, seperti membuatkan kode umum, kalkulator, hitungan matematika, karangan, atau pengetahuan umum.
3. Gunakan bahasa Indonesia yang wajar dan manusiawi. Hindari pemakaian tanda kurung dan simbol titik tengah berlebih. Jangan melebih-lebihkan fakta.
4. Status peluang kerja saat ini: ${activeCareer}
5. Kontak resmi: mocha.rizkykurniawan@gmail.com, +62 852-3086-5343, Sukolilo Surabaya, linkedin.com/in/mochammad-rizky-kurniawan.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: "user", parts: [{ text: message }] }],
          generationConfig: { temperature: 0.25, maxOutputTokens: 450 }
        })
      }
    );

    if (!response.ok) {
      return res.status(200).json({ mode: "local_nlu" });
    }

    const json = await response.json();
    const reply = json?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!reply) {
      return res.status(200).json({ mode: "local_nlu" });
    }

    return res.status(200).json({
      mode: "cloud_llm",
      inScope: true,
      badge: "Topik Portofolio Rizky",
      reply
    });
  } catch (_) {
    return res.status(200).json({ mode: "local_nlu" });
  }
}
