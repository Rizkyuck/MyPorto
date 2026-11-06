/**
 * Optional Vercel Serverless Endpoint (/api/chat) for MRK AI Assistant.
 * - Jika environment variable GEMINI_API_KEY diset di Vercel, endpoint ini
 *   menjalankan Gemini Flash dengan System Prompt ketat khusus portofolio Rizky.
 * - Jika belum ada API Key, endpoint ini mengembalikan `{ mode: "local_nlu" }`
 *   sehingga frontend otomatis menggunakan mesin MRK NLU Classifier lokal
 *   tanpa error atau biaya kuota.
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
      ? `${careerStatus.statusTitle} (${careerStatus.statusSubtitle}). ${careerStatus.summaryText}`
      : "Siap menerima tawaran Magang / Kerja Praktik (KP) maupun Pekerjaan Sampingan (Part-Time / Freelance).";

    const systemPrompt = `Anda adalah MRK AI Assistant di website resmi Mochammad Rizky Kurniawan (https://rizky-kurniawan.my.id).
ATURAN MUTLAK (STRICT GUARDRAIL):
1. Anda HANYA BOLEH menjawab pertanyaan yang berhubungan dengan Mochammad Rizky Kurniawan (profil, kuliah di STr Teknik Telekomunikasi PENS Semester 5, IPK 3.43/4.00, IPS terakhir 3.58, keahlian NOC/Jaringan/Linux/Security/Python/C++/Web/IoT/SDR, 6 proyek portofolio, 36 sertifikat terverifikasi, organisasi, kompetisi, CV, kontak, dan status peluang kerja).
2. DILARANG KERAS memenuhi permintaan di luar diri Rizky, seperti membuatkan kode umum ("buatkan kalkulator sederhana", dll.), menghitung soal matematika, menulis esai/puisi, menerjemahkan teks umum, atau menjawab pengetahuan umum. Jika diminta hal di luar Rizky, tolak dengan sopan dalam 2 kalimat.
3. Jangan melebih-lebihkan fakta.
4. Status Peluang Kerja Saat Ini: ${activeCareer}
5. Kontak: mocha.rizkykurniawan@gmail.com | +62 852-3086-5343 | Sukolilo, Surabaya | LinkedIn: linkedin.com/in/mochammad-rizky-kurniawan.`;

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
      badge: "✓ Relevan • MRK Cloud AI",
      reply
    });
  } catch (_) {
    return res.status(200).json({ mode: "local_nlu" });
  }
}
