/**
 * ============================================================================
 * MRK AI ASSISTANT — GUARDED PORTFOLIO NLU & SEMANTIC KNOWLEDGE ENGINE v2.0
 * ============================================================================
 * Dirancang khusus untuk portofolio resmi Mochammad Rizky Kurniawan.
 *
 * Fitur Inti:
 * 1. Two-Stage Strict Scope Classifier:
 *    - Menganalisis teks bebas apa pun dari pengunjung.
 *    - Menolak secara sopan & tegas jika prompt meminta pembuatan kode umum
 *      (contoh: "buatkan kalkulator sederhana"), hitungan matematika, PR/tugas,
 *      prompt injection, atau topik umum di luar profil Mochammad Rizky Kurniawan.
 * 2. Multi-Intent Portfolio Synthesis:
 *    - Menjawab pertanyaan gabungan (misal: IPK + Proyek + Ketersediaan Magang)
 *      secara natural dalam Bahasa Indonesia maupun Bahasa Inggris.
 * 3. Dynamic Career Config Binding:
 *    - Terhubung langsung ke `window.getActiveCareerStatus()` dari career-config.js
 *      sehingga saat tahun depan status diubah ke "Siap Kerja Full-Time", jawaban
 *      AI otomatis ikut berubah tanpa perlu mengedit mesin AI ini.
 * 4. Conversational Context Memory:
 *    - Memahami pertanyaan lanjutan ("kalau buktinya?", "pakai bahasa apa?", dll).
 * ============================================================================
 */

(function () {
  // --------------------------------------------------------------------------
  // 1. VERIFIED PORTFOLIO KNOWLEDGE BASE (100% FAKTUAL & TERVERIFIKASI)
  // --------------------------------------------------------------------------
  const MRK_KNOWLEDGE = {
    profile: {
      fullName: "Mochammad Rizky Kurniawan",
      shortName: "Rizky",
      nrp: "2224600064",
      degree: "Sarjana Terapan (D4 / STr) Teknik Telekomunikasi",
      campus: "Politeknik Elektronika Negeri Surabaya (PENS)",
      semester: "Semester 5 (Aktif, Angkatan 2024 – Sekarang)",
      gpa: "3.43 / 4.00",
      latestIps: "3.58",
      location: "Sukolilo, Surabaya, Jawa Timur, Indonesia",
      email: "mocha.rizkykurniawan@gmail.com",
      phone: "+62 852-3086-5343",
      whatsappUrl: "https://wa.me/6285230865343",
      linkedin: "https://www.linkedin.com/in/mochammad-rizky-kurniawan",
      website: "https://rizky-kurniawan.my.id",
      cvAtsPdf: "assets/CV_Mochammad_Rizky_Kurniawan_PENS.pdf",
      cvFlowEn: "https://flowcv.com/resume/sn5w3sufm60h",
      cvFlowId: "https://flowcv.com/resume/lqejif1s5q28",
      focusSummary:
        "Network Operations Center (NOC), Network & IT Infrastructure, Linux Server Administration, Cloud Support, Keamanan Jaringan Dasar (Web Pentest), serta Sistem Telemetri IoT & Telekomunikasi."
    },

    projects: [
      {
        id: "cloud-noc",
        title: "Cloud NOC, DNS-over-HTTPS Inspector & Satellite Link Simulator",
        badge: "Live Web App",
        category: "NOC, Cloud & Jaringan",
        year: "2026",
        image: "assets/cloud_noc_preview.svg",
        liveUrl: "noc.html",
        summary:
          "Aplikasi web utilitas NOC interaktif yang mengintegrasikan Cloudflare DNS-over-HTTPS (DoH) API secara real-time, pemantau latensi multi-node cloud, dan kalkulator Link Budget transmisi satelit.",
        highlights: [
          "Resolusi rekaman DNS (A, AAAA, MX, TXT, NS) langsung melalui protokol terenkripsi Cloudflare DoH Edge API.",
          "Pengukuran latensi HTTP/Edge multi-region secara real-time untuk simulasi observabilitas NOC.",
          "Simulator perhitungan Free Space Path Loss (FSPL), EIRP, dan margin sinyal downlink/uplink satelit.",
          "Antarmuka responsif bergaya konsol NOC yang dapat langsung dicoba pengunjung."
        ],
        stack: ["JavaScript ES6+", "Cloudflare DoH API", "HTML5 / Tailwind CSS", "RF Link Budget Math", "HTTP Telemetry"]
      },
      {
        id: "enterprise-wan",
        title: "Multi-Site Enterprise WAN & NOC Topology Simulation",
        badge: "Network Architecture",
        category: "NOC, Cloud & Jaringan",
        year: "2025 – 2026",
        image: "assets/cisco_multisite_network.png",
        liveUrl: null,
        summary:
          "Perancangan dan simulasi arsitektur jaringan skala enterprise yang menghubungkan Kantor Pusat (HQ), Kantor Cabang (Branch), jalur ISP Carrier, dan Data Center terpusat.",
        highlights: [
          "Perencanaan skema pengalamatan IPv4 dan subnetting hierarkis antar-site agar efisien dan bebas konflik.",
          "Konfigurasi routing antar-router, redundansi jalur WAN, serta sentralisasi layanan di blok Data Center.",
          "Pengujian konektivitas end-to-end menggunakan ICMP, traceroute, dan inspeksi tabel routing."
        ],
        stack: ["Cisco Packet Tracer", "GNS3", "IPv4 Subnetting", "WAN Routing", "Enterprise Topology"]
      },
      {
        id: "vlan-server",
        title: "VLAN Segmentation & Client-Server Infrastructure (20+ Lab Topologies)",
        badge: "20+ Lab Topologies",
        category: "NOC, Cloud & Jaringan",
        year: "2025 – 2026",
        image: "assets/cisco_vlan_clientserver.png",
        liveUrl: null,
        summary:
          "Implementasi lebih dari 20 skenario topologi praktikum jaringan meliputi segmentasi VLAN, Router-on-a-Stick (Inter-VLAN Routing), serta layanan terpusat Client-Server.",
        highlights: [
          "Isolasi broadcast domain antar-divisi menggunakan VLAN Access & Trunking (IEEE 802.1Q).",
          "Konfigurasi sub-interface router untuk komunikasi terkelola antar-VLAN.",
          "Integrasi layanan terpusat DHCP, DNS, HTTP Web Server, dan evaluasi paket menggunakan Wireshark."
        ],
        stack: ["VLAN 802.1Q", "Inter-VLAN Routing", "DHCP / DNS / Web Server", "Wireshark", "Linux CLI Basics"]
      },
      {
        id: "iot-water",
        title: "IoT Salt Pond Water-Level Telemetry System (ESP32)",
        badge: "IoT Prototype",
        category: "IoT & Sistem Embedded",
        year: "2025",
        image: "assets/iot_water_level_team.png",
        liveUrl: null,
        summary:
          "Purwarupa sistem pemantauan ketinggian air tambak garam otomatis berbasis mikrokontroler ESP32 dan sensor ultrasonik yang mengirimkan telemetri ke antarmuka web melalui Wi-Fi.",
        highlights: [
          "Akuisisi jarak permukaan air secara periodik menggunakan sensor ultrasonik dengan kalibrasi pembacaan.",
          "Penampilan status lokal secara langsung melalui layar LCD serta transmisi nirkabel via modul Wi-Fi ESP32.",
          "Kolaborasi tim dalam perakitan perangkat keras, pemrograman C++/Arduino IDE, dan pengujian lapangan."
        ],
        stack: ["ESP32", "C / C++", "Sensor Ultrasonik", "Wi-Fi Web Telemetry", "LCD Display"]
      },
      {
        id: "sdr-radio",
        title: "Dual-Channel FM Software Defined Radio (SDR) Receiver",
        badge: "DSP & Telecom Lab",
        category: "Telekomunikasi & RF",
        year: "2025",
        image: "assets/gnuradio_fm_2channel.png",
        liveUrl: null,
        summary:
          "Perancangan diagram alir pemrosesan sinyal digital (DSP) pada GNU Radio Companion menggunakan perangkat RTL-SDR untuk menangkap dan mendemodulasi 2 stasiun radio FM secara simultan.",
        highlights: [
          "Implementasi Digital Down Converter (DDC), Low-Pass Filtering, dan Wideband FM Demodulator paralel.",
          "Visualisasi spektrum frekuensi (FFT) dan waterfall plot secara real-time.",
          "Pemisahan dua kanal frekuensi berbeda dari satu lebar pita tangkapan perangkat RTL-SDR."
        ],
        stack: ["GNU Radio Companion", "RTL-SDR", "Digital Signal Processing", "RF Spectrum Analysis"]
      },
      {
        id: "robot-gripper",
        title: "Autonomous Line Follower Robot with Servo Gripper",
        badge: "Embedded Robotics",
        category: "IoT & Sistem Embedded",
        year: "2024 – 2025",
        image: "assets/line_follower_robot.jpg",
        liveUrl: null,
        summary:
          "Rancang bangun robot beroda pelacak garis otonom berbasis mikrokontroler yang dilengkapi lengan capit (servo gripper) untuk memindahkan objek pada lintasan.",
        highlights: [
          "Pembacaan array sensor optik inframerah (photodiode/IR) untuk deteksi kontras jalur secara responsif.",
          "Kendali kecepatan dan arah putaran motor DC melalui modul driver H-Bridge L298N (PWM).",
          "Sinkronisasi aktuator motor servo pada mekanisme gripper untuk pengambilan dan peletakan objek."
        ],
        stack: ["Arduino / C++", "Driver Motor L298N", "IR Sensor Array", "Servo Gripper", "PWM Control"]
      }
    ],

    extraLabNote:
      "Selain 6 proyek utama di atas, Rizky juga berpengalaman dalam praktikum **Fabrikasi & Karakterisasi Antena Mikrostrip / Pyramidal Horn Gelombang Mikro** di laboratorium telekomunikasi PENS.",

    skills: {
      nocNetwork: [
        "Routing & Switching (LAN/WAN), IPv4 Subnetting, VLAN & Inter-VLAN (802.1Q)",
        "Simulasi 20+ Topologi di Cisco Packet Tracer & GNS3",
        "Analisis Paket Jaringan (Wireshark), ICMP/TCP/UDP Troubleshooting, Cloudflare DoH",
        "Administrasi Dasar Linux CLI & Layanan Client-Server (DHCP, DNS, Web Server)"
      ],
      security: [
        "Dasar Keamanan Informasi & Cybersecurity (Cisco NetAcad x IDCamp, Cyber Academy)",
        "Fundamental Web Penetration Testing (Beasiswa Bootcamp 1 Bulan ID-Networkers)"
      ],
      codeWebData: [
        "Python, C/C++ (Embedded/Mikrokontroler), HTML5, CSS3/Tailwind, JavaScript Dasar",
        "Query Dasar SQL (SELECT/Filtering - DQLab), Dasar React.js & Flutter (Dicoding)",
        "Git/GitHub Workflow & Spec-Driven Development dengan Kiro"
      ],
      iotTelecom: [
        "ESP32, Arduino Uno, Sensor Ultrasonik & Inframerah, Driver L298N, Motor Servo",
        "Software Defined Radio (GNU Radio Companion & RTL-SDR)",
        "Transmisi Satelit (Link Budget), Gelombang Mikro, & Karakterisasi Antena Pyramidal Horn"
      ]
    },

    certificatesSummary: {
      total: 36,
      highlights: [
        "DEX Kementerian Komdigi RI (PENS) — Associate Network Administrator (Intermediate & Fundamental)",
        "DEX Kementerian Komdigi RI (PENS) — Associate Computer Network Technician (Intermediate & Fundamental)",
        "ID-Networkers (IDN.ID) — Beasiswa Bootcamp Web Penetration Testing (1 Bulan) & Jaringan Komputer Dasar",
        "Cisco Networking Academy x IDCamp — Introduction to Cybersecurity",
        "Cyber Academy Indonesia — Introduction to Information Security",
        "Dicoding Indonesia — Memulai Pemrograman dengan Python, Aplikasi Flutter Pemula, & Spec-Driven Development dengan Kiro",
        "PENS Workshop — Basic Intelligent Systems (Hardware & Software)",
        "DQLab — Python, R Fundamental for Data Science, & Fundamental SQL",
        "Binar Academy 101 Full-Stack Web, React.js Course, & LKMM-TD / Pra-TD PENS"
      ]
    },

    organizationsAndCompetitions: {
      organizations: [
        "UKM Dirgantara PENS — Anggota Aktif (2025 – 2026)",
        "KPU Suksesi HIMA Telkom PENS — Panitia Divisi PPU HUMAS (2025 – 2026)",
        "Koordinator Komunikasi Kelas STr Teknik Telekomunikasi PENS (2024 – Sekarang)"
      ],
      competitions: [
        "Peserta IT Networking Competition (2026)",
        "Peserta 3rd ASBN International Essay Competition (2026)",
        "Kontributor Green Jobs Academy Challenge #2 / GJAC #2 (2025)"
      ]
    }
  };

  window.MRK_PORTFOLIO_DATA = MRK_KNOWLEDGE;

  // --------------------------------------------------------------------------
  // 2. NORMALIZER & TYPO-TOLERANT TOKENIZER
  // --------------------------------------------------------------------------
  const SLANG_MAP = {
    gk: "tidak",
    ga: "tidak",
    gak: "tidak",
    nggak: "tidak",
    enggak: "tidak",
    yg: "yang",
    dmn: "dimana",
    dimn: "dimana",
    brp: "berapa",
    krj: "kerja",
    kerjaan: "kerja",
    nyambi: "sampingan",
    sidejob: "sampingan",
    parttime: "part-time",
    fulltime: "full-time",
    sertif: "sertifikat",
    sertifnya: "sertifikat",
    ipknya: "ipk",
    kampusnya: "kampus",
    kuliahnya: "kuliah",
    skillnya: "skill",
    keahliannya: "keahlian",
    proyeknya: "proyek",
    projectnya: "proyek",
    kontaknya: "kontak",
    nomer: "nomor",
    wa: "whatsapp",
    cvnya: "cv",
    rizki: "rizky",
    riski: "rizky",
    risky: "rizky",
    kurniawn: "kurniawan",
    magng: "magang",
    intership: "internship",
    jaringn: "jaringan",
    telekomnikasi: "telekomunikasi",
    telkom: "telekomunikasi"
  };

  function normalizeText(raw) {
    let text = String(raw || "").toLowerCase().trim();
    const cleaned = text
      .replace(/[^\w\s\-\+\.\/\?#@]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const tokens = cleaned.split(" ").map((tok) => SLANG_MAP[tok] || tok);
    return {
      raw: String(raw || "").trim(),
      normalized: tokens.join(" "),
      tokens
    };
  }

  // --------------------------------------------------------------------------
  // 3. STAGE 1: STRICT OUT-OF-SCOPE & ABUSE CLASSIFIER (HARD GUARDRAIL)
  // --------------------------------------------------------------------------
  function detectOutOfScope(parsed) {
    const { raw, normalized, tokens } = parsed;

    if (!normalized || normalized.length < 1) {
      return {
        blocked: true,
        badge: "🛡️ Input Kosong",
        reason: "empty",
        reply: "Silakan ketik pertanyaan seputar profil, keahlian jaringan/NOC/IoT, proyek, sertifikasi, atau status magang **Mochammad Rizky Kurniawan**."
      };
    }

    // 3A. Prompt Injection / Jailbreak Detection
    const injectionPatterns = [
      /abaikan (semua )?(instruksi|aturan|batasan|perintah)/i,
      /lupakan (semua )?(instruksi|aturan|batasan)/i,
      /ignore (all |previous )?(instructions|rules|prompts)/i,
      /you are now (a|an)/i,
      /kamu sekarang adalah/i,
      /act as (a|an)/i,
      /berpura[- ]?puralah menjadi/i,
      /system prompt/i,
      /jailbreak/i,
      /mode (developer|tanpa batas|bebas)/i
    ];
    for (const pat of injectionPatterns) {
      if (pat.test(raw) || pat.test(normalized)) {
        return {
          blocked: true,
          badge: "🛡️ Dibatasi • Proteksi Ruang Lingkup AI",
          reason: "prompt_injection",
          reply:
            "Maaf, saya memiliki batas penggunaan tetap (**Strict Portfolio Guardrail**). Saya hanya dapat menjawab pertanyaan faktual seputar **Mochammad Rizky Kurniawan** (profil, pendidikan PENS, keahlian, proyek, 36 sertifikat, dan peluang magang/kerja sampingan) serta tidak dapat mengubah peran menjadi asisten umum."
        };
      }
    }

    // 3B. Pure Math / Calculator Expression Detection
    const mathExprPattern = /^\s*(berapa\s+(hasil\s+)?(dari\s+)?)?[\d\s\+\-\*\/x÷\^\(\)\.,%]+\s*(berapa|=|\?)?\s*$/i;
    const mathWordPattern = /\b(hitung(lah|kan)?|akar kuadrat|integral|turunan|logaritma|sinus|cosinus|faktorial|rumus luas|rumus volume|kalkulator)\b/i;
    const mentionsRizky = /\b(rizky|mrk|portofolio|noc|link budget|proyek|project|pens)\b/i.test(normalized);

    if ((mathExprPattern.test(raw) && /\d/.test(raw) && /[\+\-\*\/x÷\^%]/.test(raw)) || (mathWordPattern.test(normalized) && !mentionsRizky)) {
      return {
        blocked: true,
        badge: "🛡️ Dibatasi • Di Luar Cakupan (Kalkulator / Tugas Umum)",
        reason: "calculator_or_math",
        reply:
          "Maaf, saya adalah **MRK AI Assistant** yang dikhususkan untuk menjelaskan profil dan portofolio **Mochammad Rizky Kurniawan**, sehingga tidak melayani pembuatan kalkulator maupun perhitungan matematika umum.\n\nNamun jika Anda ingin mencoba simulasi teknis karya Rizky (seperti **Kalkulator Link Budget Satelit & DNS Inspector**), Anda dapat membukanya langsung di aplikasi Cloud NOC!",
        actions: [
          { label: "🚀 Buka App Cloud NOC", type: "link", value: "noc.html" },
          { label: "💼 Cek Status Magang & Job", type: "prompt", value: "Bagaimana status ketersediaan Rizky untuk magang atau job sampingan?" }
        ]
      };
    }

    // 3C. Imperative Code / App / Essay / Homework Generation Detection
    // Contoh: "buatkan kalkulator sederhana", "bisa buatkan kode python?", "bikin script html", "buatkan puisi"
    const strongImperativeVerb = /\b(buatkan|bikinkan|bikinin|tuliskan|tulisin|codingin|kerjakan|selesaikan|pecahkan|terjemahkan|translate|rangkumkan|karang|buatlah|create|build me|generate|write code|write a|solve)\b/i;
    const softBuildVerb = /\b(buat|bikin|tulis|koding)\b/i;
    const generalTaskTarget = /\b(kalkulator|calculator|game|permainan|ular tangga|tic tac toe|todo list|toko online|aplikasi kasir|form login|landing page|script|kode|code|program|fungsi|function|algoritma|sorting|fibonacci|html|css|python|javascript|java|php|sql|c\+\+|puisi|pantun|cerpen|dongeng|esai|essay|makalah|skripsi|artikel|resep|surat|berita|lagu|lirik|soal|pr|tugas)\b/i;
    const rawCodeSnippet = /(```|function\s*\(|def\s+\w+\s*\(|#include\s*<|public\s+static\s+void|console\.log\(|SELECT\s+.+\s+FROM)/i;

    // Pengecualian jika pengunjung sedang menanyakan kerja sama / job sampingan untuk Rizky (misal: "bisa hire rizky buatkan jaringan/web?")
    const isHiringInquiry = /\b(hire|rekrut|tawaran|tawarkan|jasa rizky|order|kerjasama|kerja sama|sampingan|freelance|proyek ke rizky|hubungi rizky)\b/i.test(normalized);
    // Pengecualian untuk kata kerja lembut ("bisa buat" / "pernah buat") saat bertanya riwayat/skill Rizky
    const isHistoryOrSkillQuestion = /\b(pernah buat|pernah bikin|proyek yang dibuat|apa yang dibuat|rizky bisa|apakah rizky)\b/i.test(normalized);

    if (
      rawCodeSnippet.test(raw) ||
      (!isHiringInquiry && strongImperativeVerb.test(normalized) && generalTaskTarget.test(normalized)) ||
      (!isHiringInquiry && !isHistoryOrSkillQuestion && softBuildVerb.test(normalized) && /\b(kalkulator|calculator|kode|script|program|game|puisi|cerpen|makalah|resep|soal|pr)\b/i.test(normalized))
    ) {
      return {
        blocked: true,
        badge: "🛡️ Dibatasi • Permintaan Pembuatan Kode / Konten Umum",
        reason: "general_generation_task",
        reply:
          "Maaf, permintaan tersebut berada **di luar batas penggunaan MRK AI Assistant**. Saya diprogram secara ketat **hanya untuk menjawab informasi seputar Mochammad Rizky Kurniawan**—bukan sebagai AI pembuat kode atau konten umum (seperti membuat kalkulator, script, tugas, atau karangan bebas).\n\nJika Anda ingin mengetahui **kemampuan pemrograman Rizky** (Python, C++, Web, IoT) atau ingin **menawarkan job sampingan / magang**, silakan tanyakan langsung!",
        actions: [
          { label: "🛠️ Keahlian Coding & Jaringan Rizky", type: "prompt", value: "Apa saja bahasa pemrograman dan keahlian teknis yang dikuasai Rizky?" },
          { label: "💼 Tawaran Job Sampingan / Magang", type: "prompt", value: "Apakah Rizky menerima tawaran magang atau pekerjaan sampingan?" }
        ]
      };
    }

    // 3D. Explicit Off-Topic World Knowledge / Trivia / Daily Utility
    const offTopicKeywords = /\b(resep|masak|nasi goreng|presiden|menteri|partai|politik|pemilu|cuaca|ramalan|zodiak|shio|arti mimpi|harga saham|bitcoin|kripto|jadwal bola|liga inggris|timnas|artis|selebriti|gosip|film bioskop|anime|lirik lagu|ibu kota|ibukota|benua|planet mars|dinosaurus|obat sakit|gejala penyakit|diet)\b/i;
    if (offTopicKeywords.test(normalized) && !mentionsRizky) {
      return {
        blocked: true,
        badge: "🛡️ Dibatasi • Topik Umum di Luar Portofolio",
        reason: "off_topic_trivia",
        reply:
          "Maaf, topik tersebut tidak berkaitan dengan **Mochammad Rizky Kurniawan** sehingga tidak perlu saya jawab sesuai batas penggunaan asisten ini.\n\nAnda dapat menanyakan seputar **pendidikan di PENS, IPK, keahlian NOC/Linux/IoT, 6 proyek teknis, 36 sertifikat kompetensi, atau ketersediaan magang & job sampingan Rizky**."
      };
    }

    return { blocked: false };
  }

  // --------------------------------------------------------------------------
  // 4. STAGE 2: MULTI-INTENT PORTFOLIO SCORING & CLASSIFICATION
  // --------------------------------------------------------------------------
  const INTENT_DEFINITIONS = [
    {
      id: "CAREER_AVAILABILITY",
      label: "Peluang Magang & Job Sampingan",
      weight: 1.35,
      patterns: [
        /\b(magang|internship|intern|kerja praktik|kerja praktek|kp)\b/i,
        /\b(sampingan|part[- ]?time|paruh waktu|freelance|proyekan|lepasan|remote|wfh|wfo|hybrid|onsite)\b/i,
        /\b(siap kerja|open to work|lowongan|loker|rekrut|rekrutmen|hire|hiring|tawaran|offering|kontrak|full[- ]?time)\b/i,
        /\b(tersedia|ketersediaan|available|availability|peluang kerja|status kerja|bisa kerja|kapan bisa mulai|gaji|salary|fee)\b/i
      ]
    },
    {
      id: "PROJECT_CLOUD_NOC",
      label: "Proyek Cloud NOC & DoH",
      weight: 1.3,
      patterns: [
        /\b(cloud noc|doh|dns over https|dns inspector|link budget|noc\.html|cloudflare)\b/i
      ]
    },
    {
      id: "PROJECT_IOT_WATER",
      label: "Proyek IoT Telemetri Tambak",
      weight: 1.3,
      patterns: [
        /\b(tambak|ketinggian air|water level|ultrasonik|esp32.*air|monitoring air)\b/i
      ]
    },
    {
      id: "PROJECT_SDR_RADIO",
      label: "Proyek Software Defined Radio",
      weight: 1.3,
      patterns: [
        /\b(gnu radio|gnuradio|rtl[- ]?sdr|sdr|dual[- ]?channel|demodulasi|penerima fm)\b/i
      ]
    },
    {
      id: "PROJECT_ROBOT_GRIPPER",
      label: "Proyek Robot Line Follower",
      weight: 1.3,
      patterns: [
        /\b(line follower|gripper|l298n|robot|capit|servo)\b/i
      ]
    },
    {
      id: "PROJECT_ENTERPRISE_WAN",
      label: "Proyek Multi-Site Enterprise WAN",
      weight: 1.25,
      patterns: [
        /\b(multi[- ]?site|enterprise wan|hq|kantor cabang|data center|isp carrier)\b/i
      ]
    },
    {
      id: "PROJECT_VLAN_SERVER",
      label: "Proyek 20+ Topologi VLAN & Server",
      weight: 1.25,
      patterns: [
        /\b(20\+?\s*topologi|inter[- ]?vlan|802\.1q|router on a stick|client[- ]?server)\b/i
      ]
    },
    {
      id: "EDUCATION_GPA",
      label: "Pendidikan PENS & IPK",
      weight: 1.2,
      patterns: [
        /\b(kuliah|kampus|politeknik|universitas|pens|pendidikan|jurusan|prodi|studi|semester|angkatan|nrp)\b/i,
        /\b(ipk|gpa|ips|nilai|akademik|transkrip|sarjana terapan|d4|str|lulus)\b/i
      ]
    },
    {
      id: "CERTIFICATES",
      label: "Lisensi & 36 Sertifikat",
      weight: 1.2,
      patterns: [
        /\b(sertifikat|sertifikasi|lisensi|credential|credentials|piagam|bukti kompetensi|36)\b/i,
        /\b(komdigi|dex|dicoding|id[- ]?networkers|idn|dqlab|cyber academy|kiro|binar)\b/i
      ]
    },
    {
      id: "SKILLS_OVERVIEW",
      label: "Keahlian & Kompetensi Teknis",
      weight: 1.15,
      patterns: [
        /\b(skill|skills|keahlian|kemampuan|kompetensi|bisa apa|menguasai|kuasai|kelebihan|stack|tools|software|bahasa pemrograman|coding)\b/i,
        /\b(noc|jaringan|network|routing|switching|cisco|packet tracer|gns3|linux|server|wireshark|pentest|cyber|keamanan|python|c\+\+|flutter|sql|iot|esp32|antena|horn|satelit)\b/i
      ]
    },
    {
      id: "PROJECTS_ALL",
      label: "Daftar Proyek & Portofolio",
      weight: 1.15,
      patterns: [
        /\b(proyek|project|projects|karya|portofolio|pernah buat|praktikum|lab|studi kasus|pengalaman teknis)\b/i
      ]
    },
    {
      id: "ORGANIZATIONS_COMPETITIONS",
      label: "Organisasi & Kompetisi",
      weight: 1.15,
      patterns: [
        /\b(organisasi|ukm|dirgantara|hima|suksesi|kepanitiaan|panitia|koordinator|lkmm|kepemimpinan|soft skill)\b/i,
        /\b(lomba|kompetisi|competition|prestasi|essay|asbn|gjac|networking competition)\b/i
      ]
    },
    {
      id: "CV_RESUME",
      label: "Dokumen CV / Resume ATS",
      weight: 1.25,
      patterns: [
        /\b(cv|resume|curriculum vitae|unduh cv|download cv|flowcv|ats)\b/i
      ]
    },
    {
      id: "CONTACT_SOCIAL",
      label: "Kontak & Media Sosial",
      weight: 1.25,
      patterns: [
        /\b(kontak|hubungi|menghubungi|email|surel|whatsapp|telepon|nomor|hp|linkedin|alamat|domisili|lokasi|surabaya)\b/i
      ]
    },
    {
      id: "WHY_HIRE_HRD",
      label: "Evaluasi & Nilai Tambah Kandidat",
      weight: 1.2,
      patterns: [
        /\b(kenapa harus|mengapa harus|keunggulan|nilai tambah|cocok|motivasi|karakter|kelebihan rizky|alasan menerima|kekurangan|kelemahan|tantangan)\b/i
      ]
    },
    {
      id: "PROFILE_SUMMARY",
      label: "Profil Singkat Rizky",
      weight: 1.1,
      patterns: [
        /\b(siapa rizky|siapa mochammad|tentang rizky|profil|biodata|perkenalkan|ceritakan tentang diri|latar belakang|background|kenalan|asal mana|tinggal dimana|umur|usia|bahasa inggris)\b/i
      ]
    },
    {
      id: "WEBSITE_TECH",
      label: "Info Website & AI",
      weight: 1.05,
      patterns: [
        /\b(siapa kamu|kamu siapa|ai apa ini|cara kerja ai|batas penggunaan|web ini|website ini|fitur web)\b/i
      ]
    },
    {
      id: "GREETING",
      label: "Sapaan Pengunjung",
      weight: 0.9,
      patterns: [
        /^(halo|hai|hi|hello|hey|p|permisi|assalamualaikum|selamat (pagi|siang|sore|malam)|tes|test|ping)[\s\!\?\.]*$/i
      ]
    }
  ];

  let conversationContext = {
    lastIntentIds: [],
    turnCount: 0
  };

  // --------------------------------------------------------------------------
  // 5. RESPONSE COMPOSERS PER INTENT
  // --------------------------------------------------------------------------
  function buildIntentBlock(intentId, parsed) {
    const career = window.getActiveCareerStatus ? window.getActiveCareerStatus() : null;
    const p = MRK_KNOWLEDGE.profile;
    const norm = parsed.normalized;

    switch (intentId) {
      case "GREETING": {
        const statusBadge = career ? career.badgeShort : "Open: Magang / KP & Job Sampingan";
        return {
          text:
            `Halo! Selamat datang di portofolio resmi **${p.fullName}**. 👋\n\n` +
            `Saya **MRK AI Assistant**, asisten khusus yang siap menjawab segala hal seputar profil, studi di **PENS (IPK ${p.gpa})**, keahlian **NOC/Server/IoT**, **6 proyek lab**, **36 sertifikat**, serta status karier saat ini (**${statusBadge}**).\n\n` +
            `Silakan pilih tombol cepat atau ketik pertanyaan Anda sendiri!`,
          actions: [
            { label: "💼 Status Magang & Job Sampingan", type: "prompt", value: "Bagaimana status ketersediaan Rizky untuk magang atau job sampingan saat ini?" },
            { label: "📄 Buka CV ATS", type: "cv", value: "open" }
          ]
        };
      }

      case "CAREER_AVAILABILITY": {
        if (!career) {
          return {
            text: `Saat ini **${p.fullName}** terbuka untuk tawaran **Magang / Kerja Praktik (KP)** serta **Pekerjaan Sampingan (Part-Time / Freelance)** di bidang NOC, jaringan, server, dan IoT.`,
            actions: [{ label: "✉️ Kirim Tawaran Kontak", type: "scroll", value: "#contact" }]
          };
        }
        const asksFullTime = /\b(full[- ]?time|tetap|penuh waktu)\b/i.test(norm);
        let body = `${career.aiResponseLead}\n\n`;
        body += `• **Skema yang Diterima:** ${career.statusSubtitle}\n`;
        body += `• **Mode Kerja:** ${career.workModes.join(", ")}\n`;
        body += `• **Bidang Fokus:** ${career.targetRoles.join(" • ")}\n`;
        if (asksFullTime || career.key === "internship_sidejob") {
          body += `\n${career.aiFullTimeClarification}`;
        }
        return {
          text: body,
          actions: [
            { label: "✉️ Hubungi / Kirim Tawaran", type: "scroll", value: "#contact" },
            { label: "📄 Lihat CV ATS", type: "cv", value: "open" },
            { label: "💬 WhatsApp Langsung", type: "external", value: p.whatsappUrl }
          ]
        };
      }

      case "PROFILE_SUMMARY": {
        const statusShort = career ? career.statusTitle : "Siap Menerima Tawaran Magang & Pekerjaan Sampingan";
        return {
          text:
            `**${p.fullName}** adalah mahasiswa aktif **${p.semester}** program studi **${p.degree}** di **${p.campus}** (IPK **${p.gpa}**, IPS terakhir **${p.latestIps}**), berdomisili di **${p.location}**.\n\n` +
            `Minat utamanya berfokus pada **${p.focusSummary}** Saat ini status kariernya: **${statusShort}**.`,
          actions: [
            { label: "📊 Lihat Grafik Keahlian", type: "scroll", value: "#skills-telemetry" },
            { label: "📄 Buka CV / Resume", type: "cv", value: "open" }
          ]
        };
      }

      case "EDUCATION_GPA": {
        return {
          text:
            `Berikut detail akademik **${p.fullName}**:\n\n` +
            `• **Perguruan Tinggi:** ${p.campus}\n` +
            `• **Program Studi:** ${p.degree}\n` +
            `• **Status Studi:** Mahasiswa Aktif ${p.semester} (NRP \`${p.nrp}\`)\n` +
            `• **Capaian Akademik:** IPK **${p.gpa}** (IPS semester terakhir **${p.latestIps}**)\n\n` +
            `Perkuliahan mencakup praktikum intensif jaringan komputer, transmisi satelit & gelombang mikro, pengolahan sinyal digital (SDR), serta sistem embedded/IoT.`,
          actions: [
            { label: "🏅 Lihat 36 Sertifikat", type: "scroll", value: "#credentials" },
            { label: "🛠️ Lihat Proyek Lab", type: "scroll", value: "#work" }
          ]
        };
      }

      case "SKILLS_OVERVIEW": {
        const s = MRK_KNOWLEDGE.skills;
        return {
          text:
            `Kompetensi teknis **${p.fullName}** terbagi dalam 4 pilar utama:\n\n` +
            `1. **NOC & Jaringan:** ${s.nocNetwork[0]}; ${s.nocNetwork[1]}; ${s.nocNetwork[2]}.\n` +
            `2. **Server & Keamanan:** ${s.nocNetwork[3]}; ${s.security[1]}.\n` +
            `3. **Pemrograman, Web & Data:** ${s.codeWebData[0]}; ${s.codeWebData[1]}.\n` +
            `4. **IoT, Robotika & RF Telekomunikasi:** ${s.iotTelecom[0]}; ${s.iotTelecom[1]}.`,
          actions: [
            { label: "📊 Eksplorasi Grafik Radar", type: "scroll", value: "#skills-telemetry" },
            { label: "🚀 Coba App Cloud NOC", type: "link", value: "noc.html" }
          ]
        };
      }

      case "PROJECTS_ALL": {
        const list = MRK_KNOWLEDGE.projects
          .map((pr, idx) => `${idx + 1}. **${pr.title}** — *${pr.category}*`)
          .join("\n");
        return {
          text:
            `Berikut **6 proyek unggulan** yang telah dibangun dan didokumentasikan oleh Rizky:\n\n${list}\n\n` +
            `${MRK_KNOWLEDGE.extraLabNote}\n\nAnda dapat mengklik kartu proyek di halaman utama untuk membuka **Pop-up Detail Arsitektur**, atau tanyakan salah satu proyek di sini!`,
          actions: [
            { label: "🗂️ Buka Bagian Proyek", type: "scroll", value: "#work" },
            { label: "🚀 Buka Live Cloud NOC", type: "link", value: "noc.html" }
          ]
        };
      }

      case "PROJECT_CLOUD_NOC":
      case "PROJECT_ENTERPRISE_WAN":
      case "PROJECT_VLAN_SERVER":
      case "PROJECT_IOT_WATER":
      case "PROJECT_SDR_RADIO":
      case "PROJECT_ROBOT_GRIPPER": {
        const mapIdx = {
          PROJECT_CLOUD_NOC: "cloud-noc",
          PROJECT_ENTERPRISE_WAN: "enterprise-wan",
          PROJECT_VLAN_SERVER: "vlan-server",
          PROJECT_IOT_WATER: "iot-water",
          PROJECT_SDR_RADIO: "sdr-radio",
          PROJECT_ROBOT_GRIPPER: "robot-gripper"
        };
        const proj = MRK_KNOWLEDGE.projects.find((item) => item.id === mapIdx[intentId]);
        const bullets = proj.highlights.map((h) => `• ${h}`).join("\n");
        const acts = [
          { label: "🔍 Buka Pop-up Proyek", type: "project_modal", value: proj.id }
        ];
        if (proj.liveUrl) {
          acts.unshift({ label: "🚀 Coba Live Web App", type: "link", value: proj.liveUrl });
        }
        return {
          text:
            `**${proj.title}** (*${proj.category} — ${proj.year}*)\n\n` +
            `${proj.summary}\n\n` +
            `**Poin Teknis Utama:**\n${bullets}\n\n` +
            `**Tech Stack:** \`${proj.stack.join("` • `")}\``,
          actions: acts
        };
      }

      case "CERTIFICATES": {
        const c = MRK_KNOWLEDGE.certificatesSummary;
        const topList = c.highlights.slice(0, 6).map((item) => `• ${item}`).join("\n");
        return {
          text:
            `Rizky memiliki **${c.total} dokumen sertifikat terverifikasi** yang seluruh bukti PDF/PNG-nya dapat dilihat langsung di website ini tanpa klaim berlebihan:\n\n` +
            `${topList}\n\n` +
            `Seluruh 36 dokumen telah diarsipkan lengkap beserta fitur pencarian instan di bagian **Lisensi & Sertifikasi**.`,
          actions: [
            { label: "🏅 Buka 36 Arsip Sertifikat", type: "open_archive", value: "#credentials" },
            { label: "📄 Lihat Sertifikat Komdigi", type: "cert_pdf", value: "assets/certificates/cert_dex_network_admin_intermediate.pdf" }
          ]
        };
      }

      case "ORGANIZATIONS_COMPETITIONS": {
        const orgs = MRK_KNOWLEDGE.organizationsAndCompetitions.organizations.map((o) => `• ${o}`).join("\n");
        const comps = MRK_KNOWLEDGE.organizationsAndCompetitions.competitions.map((c) => `• ${c}`).join("\n");
        return {
          text:
            `Selain akademik dan laboratorium, Rizky aktif dalam organisasi kampus dan partisipasi kompetisi:\n\n` +
            `**Pengalaman Organisasi & Kepemimpinan:**\n${orgs}\n\n` +
            `**Partisipasi Kompetisi:**\n${comps}`,
          actions: [
            { label: "🏅 Lihat Bukti Sertifikat", type: "open_archive", value: "#credentials" }
          ]
        };
      }

      case "CV_RESUME": {
        return {
          text:
            `Dokumen **Curriculum Vitae (CV) ATS** resmi **${p.fullName}** tersedia dalam 3 pilihan siap periksa:\n\n` +
            `• **PDF ATS Murni 1 Halaman (37 KB):** Ringkas, rapi, tanpa foto, ramah mesin ATS perusahaan.\n` +
            `• **FlowCV Bahasa Inggris (EN):** Format standar internasional.\n` +
            `• **FlowCV Bahasa Indonesia (ID):** Format formal bahasa Indonesia.`,
          actions: [
            { label: "📄 Pilihan CV (Modal)", type: "cv", value: "open" },
            { label: "📑 Pratinjau CV ATS PDF", type: "cert_pdf", value: p.cvAtsPdf }
          ]
        };
      }

      case "CONTACT_SOCIAL": {
        return {
          text:
            `Anda dapat menghubungi **${p.fullName}** secara langsung melalui kanal resmi berikut:\n\n` +
            `• **Email:** \`${p.email}\`\n` +
            `• **Telepon / WhatsApp:** \`${p.phone}\`\n` +
            `• **Domisili:** ${p.location}\n` +
            `• **LinkedIn:** linkedin.com/in/mochammad-rizky-kurniawan`,
          actions: [
            { label: "✉️ Form Kontak Cepat", type: "scroll", value: "#contact" },
            { label: "💬 Chat WhatsApp", type: "external", value: p.whatsappUrl },
            { label: "🔗 Profil LinkedIn", type: "external", value: p.linkedin }
          ]
        };
      }

      case "WHY_HIRE_HRD": {
        const statusLine = career ? career.badgeShort : "Open: Magang & Job Sampingan";
        return {
          text:
            `Tiga alasan utama mengapa **${p.fullName}** siap memberikan kontribusi nyata bagi tim Anda (*${statusLine}*):\n\n` +
            `1. **Fondasi Praktik Kuat & Teruji:** Terbiasa merancang 20+ skenario topologi VLAN/WAN, analisis paket Wireshark, administrasi dasar Linux/Client-Server, hingga membangun aplikasi live **Cloud NOC & DoH Inspector**.\n` +
            `2. **Kompetensi Tersertifikasi Resmi:** Tersertifikasi tingkat *Intermediate* sebagai *Associate Network Administrator* & *Network Technician* oleh **DEX Kementerian Komdigi RI** serta lulusan Bootcamp *Web Pentest* ID-Networkers.\n` +
            `3. **Adaptif Lintas Layer (Software–Network–Hardware):** Sebagai mahasiswa STr Teknik Telekomunikasi PENS (IPK **${p.gpa}**), Rizky mampu menjembatani konektivitas fisik/IoT (ESP32, RF/SDR) hingga aplikasi jaringan & monitoring web.`,
          actions: [
            { label: "📄 Buka CV ATS", type: "cv", value: "open" },
            { label: "✉️ Hubungi Rizky", type: "scroll", value: "#contact" }
          ]
        };
      }

      case "WEBSITE_TECH": {
        return {
          text:
            `Website portofolio **` + p.website + `** dan **MRK AI Assistant** ini dirancang khusus untuk menampilkan karya **${p.fullName}** secara interaktif:\n\n` +
            `• **UI/UX Modern:** Mendukung *Dark/Light Mode*, *60fps Anti-Lag Scroll Reveal*, *Custom Spring Cursor*, *Mouse Parallax*, dan *Grafik Radar Kompetensi Interaktif*.\n` +
            `• **Guarded AI Engine:** Menganalisis setiap input teks bebas dari pengunjung dan mengklasifikasikan apakah topik relevan dengan diri Rizky atau harus dibatasi agar tidak disalahgunakan untuk prompt di luar portofolio.`,
          actions: [
            { label: "🚀 Coba Aplikasi Cloud NOC", type: "link", value: "noc.html" }
          ]
        };
      }

      default:
        return null;
    }
  }

  // --------------------------------------------------------------------------
  // 6. MAIN PUBLIC CLASSIFY & RESPOND FUNCTION
  // --------------------------------------------------------------------------
  async function processVisitorMessage(rawInput) {
    const parsed = normalizeText(rawInput);

    // STAGE 1: Hard Out-of-Scope / Abuse Guardrail
    const guardResult = detectOutOfScope(parsed);
    if (guardResult.blocked) {
      return {
        inScope: false,
        classificationBadge: guardResult.badge,
        replyMarkdown: guardResult.reply,
        actions: guardResult.actions || [
          { label: "💼 Status Magang & Job Sampingan", type: "prompt", value: "Bagaimana status ketersediaan Rizky untuk magang atau job sampingan saat ini?" },
          { label: "🛠️ Keahlian & Proyek Rizky", type: "prompt", value: "Apa saja keahlian utama serta proyek NOC dan IoT milik Rizky?" }
        ]
      };
    }

    // STAGE 2: Score Portfolio Intents
    const scored = [];
    for (const intent of INTENT_DEFINITIONS) {
      let matchCount = 0;
      for (const rx of intent.patterns) {
        if (rx.test(parsed.normalized) || rx.test(parsed.raw)) {
          matchCount += 1;
        }
      }
      if (matchCount > 0) {
        scored.push({
          id: intent.id,
          label: intent.label,
          score: matchCount * intent.weight
        });
      }
    }

    scored.sort((a, b) => b.score - a.score);

    // Conversational Follow-up Resolution (e.g., "kalau buktinya?", "linknya mana?", "detailnya?")
    if (scored.length === 0 && conversationContext.lastIntentIds.length > 0) {
      const followUpCue = /\b(itu|tadi|nya|detail|bukti|link|demo|lanjut|lebih lanjut|contohnya|dimana|kapan|berapa)\b/i;
      if (followUpCue.test(parsed.normalized) && parsed.tokens.length <= 7) {
        const prevId = conversationContext.lastIntentIds[0];
        scored.push({
          id: prevId,
          label: " Konteks Lanjutan",
          score: 1.0
        });
      }
    }

    // Jika tetap 0 skor relevansi namun menyebut nama "rizky" secara umum -> arahkan ke Profil + Karier
    if (scored.length === 0 && /\b(rizky|mochammad|kurniawan|mrk|kamu|anda)\b/i.test(parsed.normalized)) {
      scored.push({
        id: "PROFILE_SUMMARY",
        label: "Profil Mochammad Rizky Kurniawan",
        score: 1.0
      });
    }

    // STAGE 3: Jika sama sekali TIDAK ADA kaitan dengan Rizky / Portofolio -> Tolak Sopan (Out-of-Bounds)
    if (scored.length === 0) {
      return {
        inScope: false,
        classificationBadge: "🛡️ Dibatasi • Tidak Terkait Profil Rizky",
        replyMarkdown:
          `Maaf, setelah saya baca dan klasifikasikan, pesan **"${parsed.raw.slice(0, 70)}${parsed.raw.length > 70 ? "..." : ""}"** berada di luar cakupan informasi mengenai **Mochammad Rizky Kurniawan**.\n\n` +
          `Sesuai batas penggunaan, saya hanya menjawab pertanyaan yang menyangkut diri Rizky—seperti **status magang & job sampingan, pendidikan PENS (IPK 3.43), keahlian NOC/Linux/IoT, proyek, CV, maupun 36 sertifikatnya**.`,
        actions: [
          { label: "💼 Peluang Magang & Sampingan", type: "prompt", value: "Apakah Rizky siap menerima tawaran magang atau job sampingan?" },
          { label: "🛠️ Keahlian & Proyek", type: "prompt", value: "Apa saja keahlian dan proyek unggulan Rizky?" },
          { label: "🎓 Pendidikan & Sertifikat", type: "prompt", value: "Ceritakan pendidikan PENS, IPK, dan sertifikasi Rizky." }
        ]
      };
    }

    // Opsional: Cek endpoint Cloud LLM (/api/chat) bila diaktifkan, fallback mulus ke NLU lokal
    if (window.MRK_ENABLE_CLOUD_LLM === true) {
      try {
        const career = window.getActiveCareerStatus ? window.getActiveCareerStatus() : {};
        const resp = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: parsed.raw,
            careerStatus: career
          })
        });
        if (resp.ok) {
          const data = await resp.json();
          if (data && data.mode === "cloud_llm" && data.reply) {
            conversationContext.lastIntentIds = [scored[0].id];
            conversationContext.turnCount += 1;
            const localBlock = buildIntentBlock(scored[0].id, parsed);
            return {
              inScope: data.inScope !== false,
              classificationBadge: data.badge || `✓ Relevan • ${scored[0].label}`,
              replyMarkdown: data.reply,
              actions: localBlock ? localBlock.actions : []
            };
          }
        }
      } catch (_) {
        // Lanjut menggunakan mesin sintesis lokal secara instan tanpa error
      }
    }

    // Ambil maksimal 2 intent teratas agar jawaban gabungan (multi-pertanyaan) terjawab tuntas & ringkas
    const selectedIntents = [];
    for (const item of scored) {
      if (selectedIntents.length === 0) {
        selectedIntents.push(item);
      } else if (selectedIntents.length < 2 && item.score >= 1.15 && item.id !== "GREETING" && selectedIntents[0].id !== "GREETING") {
        // Hindari duplikasi antara PROJECTS_ALL dan proyek spesifik
        const isRedundantProject =
          (selectedIntents[0].id.startsWith("PROJECT_") && item.id === "PROJECTS_ALL") ||
          (selectedIntents[0].id === "PROJECTS_ALL" && item.id.startsWith("PROJECT_"));
        if (!isRedundantProject) {
          selectedIntents.push(item);
        }
      }
    }

    const blocks = selectedIntents
      .map((it) => buildIntentBlock(it.id, parsed))
      .filter(Boolean);

    const combinedMarkdown = blocks.map((b) => b.text).join("\n\n---\n\n");
    const combinedActions = [];
    const seenLabels = new Set();
    for (const b of blocks) {
      for (const act of b.actions || []) {
        if (!seenLabels.has(act.label) && combinedActions.length < 3) {
          seenLabels.add(act.label);
          combinedActions.push(act);
        }
      }
    }

    conversationContext.lastIntentIds = selectedIntents.map((i) => i.id);
    conversationContext.turnCount += 1;

    const badgeTitle = selectedIntents.map((i) => i.label).join(" + ");

    return {
      inScope: true,
      classificationBadge: `✓ Relevan • ${badgeTitle}`,
      replyMarkdown: combinedMarkdown,
      actions: combinedActions
    };
  }

  function resetConversation() {
    conversationContext = {
      lastIntentIds: [],
      turnCount: 0
    };
  }

  window.MRK_AI_ENGINE = {
    ask: processVisitorMessage,
    reset: resetConversation,
    knowledge: MRK_KNOWLEDGE
  };
})();
