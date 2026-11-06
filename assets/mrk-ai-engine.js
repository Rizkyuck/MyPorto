/**
 * MRK AI ASSISTANT - PORTFOLIO CLASSIFIER & KNOWLEDGE ENGINE
 * Dirancang khusus untuk portofolio resmi Mochammad Rizky Kurniawan.
 */

(function () {
  const MRK_KNOWLEDGE = {
    profile: {
      fullName: "Mochammad Rizky Kurniawan",
      shortName: "Rizky",
      nrp: "2224600064",
      degree: "Sarjana Terapan STr Teknik Telekomunikasi",
      campus: "Politeknik Elektronika Negeri Surabaya",
      semester: "Semester 5 aktif angkatan 2024",
      gpa: "3.43 dari 4.00",
      latestIps: "3.58",
      location: "Sukolilo, Surabaya, Jawa Timur",
      email: "mocha.rizkykurniawan@gmail.com",
      phone: "+62 852-3086-5343",
      whatsappUrl: "https://wa.me/6285230865343",
      linkedin: "https://www.linkedin.com/in/mochammad-rizky-kurniawan",
      website: "https://rizky-kurniawan.my.id",
      cvAtsPdf: "assets/CV_Mochammad_Rizky_Kurniawan_PENS.pdf",
      cvFlowEn: "https://flowcv.com/resume/sn5w3sufm60h",
      cvFlowId: "https://flowcv.com/resume/lqejif1s5q28",
      focusSummary:
        "Network Operations Center, infrastruktur jaringan, administrasi server Linux, dukungan Cloud, keamanan dasar jaringan, serta sistem telemetri IoT dan telekomunikasi."
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
          "Aplikasi web utilitas NOC interaktif yang menggabungkan Cloudflare DNS-over-HTTPS API secara langsung, pemantau latensi multi-node cloud, serta kalkulator Link Budget transmisi satelit.",
        highlights: [
          "Resolusi rekaman DNS tipe A, AAAA, MX, TXT, dan NS langsung melalui protokol terenkripsi Cloudflare DoH Edge API.",
          "Pengukuran latensi HTTP dan HTTPS ke beberapa gateway cloud secara langsung untuk simulasi pemantauan NOC.",
          "Perhitungan Free Space Path Loss, EIRP, dan margin daya sinyal pada tautan komunikasi satelit.",
          "Antarmuka responsif bergaya konsol operasional yang dapat langsung dicoba dari browser."
        ],
        stack: ["JavaScript ES6+", "Cloudflare DoH API", "HTML5 & Tailwind CSS", "RF Link Budget", "HTTP Telemetry"]
      },
      {
        id: "enterprise-wan",
        title: "Multi-Site Enterprise WAN & NOC Topology Simulation",
        badge: "Network Architecture",
        category: "NOC, Cloud & Jaringan",
        year: "2025 - 2026",
        image: "assets/cisco_multisite_network.png",
        liveUrl: null,
        summary:
          "Perancangan dan simulasi arsitektur jaringan skala perusahaan yang menghubungkan kantor pusat, kantor cabang, jalur ISP Carrier, dan Data Center terpusat.",
        highlights: [
          "Perencanaan pengalamatan IPv4 dan subnetting bertingkat antar lokasi agar rapi dan bebas tabrakan alamat.",
          "Konfigurasi routing antar router, jalur cadangan WAN, serta pemusatan layanan pada blok Data Center.",
          "Pengujian keterhubungan menyeluruh menggunakan paket ICMP, traceroute, dan pemeriksaan tabel routing."
        ],
        stack: ["Cisco Packet Tracer", "GNS3", "IPv4 Subnetting", "WAN Routing", "Enterprise Topology"]
      },
      {
        id: "vlan-server",
        title: "VLAN Segmentation & Client-Server Infrastructure",
        badge: "20+ Topologi Lab",
        category: "NOC, Cloud & Jaringan",
        year: "2025 - 2026",
        image: "assets/cisco_vlan_clientserver.png",
        liveUrl: null,
        summary:
          "Penerapan lebih dari 20 skenario topologi praktikum jaringan yang mencakup segmentasi VLAN, Inter-VLAN Routing, serta pengelolaan layanan terpusat Client-Server.",
        highlights: [
          "Pemisahan jalur trafik tiap divisi menggunakan mode Access dan Trunking standar IEEE 802.1Q.",
          "Konfigurasi sub-interface pada router agar komunikasi antar VLAN tetap terkendali.",
          "Pengaturan layanan terpusat DHCP, DNS, dan HTTP Web Server disertai analisis paket di Wireshark."
        ],
        stack: ["VLAN 802.1Q", "Inter-VLAN Routing", "DHCP, DNS & Web Server", "Wireshark", "Linux CLI"]
      },
      {
        id: "iot-water",
        title: "IoT Salt Pond Water-Level Telemetry System",
        badge: "IoT Prototype",
        category: "IoT & Sistem Embedded",
        year: "2025",
        image: "assets/iot_water_level_team.png",
        liveUrl: null,
        summary:
          "Purwarupa pemantau ketinggian air tambak garam otomatis berbasis mikrokontroler ESP32 dan sensor ultrasonik yang mengirim data ke antarmuka web melalui Wi-Fi.",
        highlights: [
          "Pembacaan jarak permukaan air secara berkala memakai sensor ultrasonik yang telah dikalibrasi.",
          "Penampilan status langsung di layar LCD fisik sekaligus pengiriman data nirkabel lewat Wi-Fi ESP32.",
          "Kerja tim mulai dari perakitan rangkaian, pemrograman C++ di Arduino IDE, hingga uji coba alat."
        ],
        stack: ["ESP32", "C / C++", "Sensor Ultrasonik", "Wi-Fi Web Telemetry", "LCD Display"]
      },
      {
        id: "sdr-radio",
        title: "Dual-Channel FM Software Defined Radio Receiver",
        badge: "DSP & Telecom Lab",
        category: "Telekomunikasi & RF",
        year: "2025",
        image: "assets/gnuradio_fm_2channel.png",
        liveUrl: null,
        summary:
          "Perancangan alur pemrosesan sinyal digital pada GNU Radio Companion bersama perangkat RTL-SDR untuk menangkap dan mendemodulasi dua stasiun radio FM secara bersamaan.",
        highlights: [
          "Penerapan Digital Down Converter, penyaringan Low-Pass Filter, dan demodulator Wideband FM paralel.",
          "Pengamatan spektrum frekuensi FFT dan grafik waterfall secara langsung.",
          "Pemisahan dua kanal frekuensi radio yang berbeda hanya dari satu perangkat penerima RTL-SDR."
        ],
        stack: ["GNU Radio Companion", "RTL-SDR", "Digital Signal Processing", "RF Spectrum Analysis"]
      },
      {
        id: "robot-gripper",
        title: "Autonomous Line Follower Robot with Servo Gripper",
        badge: "Embedded Robotics",
        category: "IoT & Sistem Embedded",
        year: "2024 - 2025",
        image: "assets/line_follower_robot.jpg",
        liveUrl: null,
        summary:
          "Rancang bangun robot beroda pelacak garis otonom berbasis mikrokontroler yang dilengkapi lengan capit servo untuk memindahkan objek di sepanjang lintasan.",
        highlights: [
          "Pembacaan deret sensor optik inframerah untuk mendeteksi kontras garis lintasan secara presisi.",
          "Pengaturan kecepatan dan arah putaran motor DC melalui modul driver L298N berbasis sinyal PWM.",
          "Koordinasi gerak motor servo pada mekanisme lengan capit untuk mengangkat dan meletakkan benda."
        ],
        stack: ["Arduino & C++", "Driver Motor L298N", "IR Sensor Array", "Servo Gripper", "PWM Control"]
      },
      {
        id: "horn-antenna",
        title: "Pyramidal Horn Antenna Fabrication & Microwave Testing",
        badge: "Lab Telekomunikasi PENS",
        category: "Telekomunikasi & RF",
        year: "2025",
        image: "assets/horn_antenna_lab.jpg",
        liveUrl: null,
        summary:
          "Praktikum fabrikasi dan pengujian antena Pyramidal Horn pada frekuensi gelombang mikro di laboratorium telekomunikasi PENS, dikerjakan secara berkelompok.",
        highlights: [
          "Pembuatan badan antena horn piramida sesuai dimensi hasil perhitungan.",
          "Pengujian karakteristik radiasi antena pada frekuensi gelombang mikro di laboratorium.",
          "Kerja tim dalam perakitan, pengukuran, dan penyusunan laporan praktikum."
        ],
        stack: ["Pyramidal Horn Antenna", "Gelombang Mikro", "Pengukuran RF", "Link Budget Satelit"]
      }
    ],

    extraLabNote:
      "Selain tujuh proyek di atas, Rizky juga mengikuti praktikum perhitungan Link Budget transmisi satelit di laboratorium telekomunikasi PENS.",

    skills: {
      nocNetwork: [
        "Routing dan Switching LAN maupun WAN, IPv4 Subnetting, serta segmentasi VLAN dan Inter-VLAN 802.1Q",
        "Simulasi lebih dari 20 skenario topologi di Cisco Packet Tracer dan GNS3",
        "Analisis paket jaringan dengan Wireshark, penelusuran gangguan ICMP/TCP/UDP, serta integrasi Cloudflare DoH",
        "Administrasi dasar Linux CLI dan pengelolaan layanan Client-Server meliputi DHCP, DNS, dan Web Server"
      ],
      security: [
        "Dasar keamanan informasi dan jaringan dari pelatihan Cisco NetAcad bersama IDCamp serta Cyber Academy",
        "Pengujian keamanan dasar aplikasi web melalui program Beasiswa Bootcamp satu bulan di ID-Networkers"
      ],
      codeWebData: [
        "Pemrograman Python, C dan C++ untuk sistem tertanam, serta pengembangan web dengan HTML5, Tailwind CSS, dan JavaScript",
        "Pengolahan kueri dasar SQL dari DQLab serta pengenalan antarmuka React.js dan Flutter dari Dicoding",
        "Pengelolaan repositori dengan Git dan GitHub serta alur pengembangan terstruktur menggunakan Kiro"
      ],
      iotTelecom: [
        "Perakitan ESP32, Arduino Uno, sensor ultrasonik, sensor inframerah, modul driver L298N, dan motor servo",
        "Pemrosesan sinyal radio berbasis perangkat lunak menggunakan GNU Radio Companion dan dongle RTL-SDR",
        "Perhitungan Link Budget transmisi satelit serta pengujian antena gelombang mikro Pyramidal Horn"
      ]
    },

    certificatesSummary: {
      total: 36,
      highlights: [
        "DEX Kementerian Komdigi RI di PENS untuk skema Associate Network Administrator tingkat Intermediate dan Fundamental",
        "DEX Kementerian Komdigi RI di PENS untuk skema Associate Computer Network Technician tingkat Intermediate dan Fundamental",
        "ID-Networkers untuk Beasiswa Bootcamp Web Penetration Testing selama satu bulan dan Jaringan Komputer Dasar",
        "Cisco Networking Academy bersama IDCamp untuk kelas Introduction to Cybersecurity",
        "Cyber Academy Indonesia untuk kelas Introduction to Information Security",
        "Dicoding Indonesia untuk kelas Python, Aplikasi Flutter Pemula, dan Spec-Driven Development dengan Kiro",
        "Workshop Basic Intelligent Systems bidang Hardware dan Software di PENS Surabaya",
        "DQLab untuk kelas Python, R Fundamental for Data Science, dan Fundamental SQL",
        "Binar Academy Full-Stack Web 101, kursus React.js, serta pelatihan kepemimpinan LKMM-TD dan Pra-TD PENS"
      ]
    },

    organizationsAndCompetitions: {
      organizations: [
        "Anggota aktif UKM Dirgantara PENS periode 2025 hingga 2026",
        "Panitia Divisi PPU HUMAS pada KPU Suksesi HIMA Telkom PENS periode 2025 hingga 2026",
        "Koordinator Komunikasi Kelas STr Teknik Telekomunikasi PENS sejak 2024 hingga sekarang"
      ],
      competitions: [
        "Peserta IT Networking Competition tahun 2026",
        "Peserta 3rd ASBN International Essay Competition tahun 2026",
        "Kontributor Green Jobs Academy Challenge #2 tahun 2025"
      ]
    }
  };

  window.MRK_PORTFOLIO_DATA = MRK_KNOWLEDGE;

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

  function detectOutOfScope(parsed) {
    const { raw, normalized } = parsed;

    if (!normalized || normalized.length < 1) {
      return {
        blocked: true,
        badge: "Pesan Kosong",
        reason: "empty",
        reply: "Silakan tulis pertanyaan mengenai latar belakang kuliah, keahlian jaringan, proyek, sertifikasi, atau status magang **Mochammad Rizky Kurniawan**."
      };
    }

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
          badge: "Batas Penggunaan Asisten",
          reason: "prompt_injection",
          reply:
            "Maaf, asisten ini hanya digunakan untuk menjawab hal yang berkaitan dengan profil, pendidikan PENS, keahlian teknis, proyek, sertifikat, dan ketersediaan kerja **Mochammad Rizky Kurniawan**."
        };
      }
    }

    const mathExprPattern = /^\s*(berapa\s+(hasil\s+)?(dari\s+)?)?[\d\s\+\-\*\/x÷\^\(\)\.,%]+\s*(berapa|=|\?)?\s*$/i;
    const mathWordPattern = /\b(hitung(lah|kan)?|akar kuadrat|integral|turunan|logaritma|sinus|cosinus|faktorial|rumus luas|rumus volume|kalkulator)\b/i;
    const mentionsRizky = /\b(rizky|mrk|portofolio|noc|link budget|proyek|project|pens)\b/i.test(normalized);

    if ((mathExprPattern.test(raw) && /\d/.test(raw) && /[\+\-\*\/x÷\^%]/.test(raw)) || (mathWordPattern.test(normalized) && !mentionsRizky)) {
      return {
        blocked: true,
        badge: "Di Luar Topik Portofolio",
        reason: "calculator_or_math",
        reply:
          "Maaf, asisten ini khusus membahas profil dan portofolio **Mochammad Rizky Kurniawan**, jadi tidak melayani pembuatan kalkulator maupun hitungan matematika umum.\n\nKalau Anda ingin mencoba langsung simulasi kalkulator Link Budget satelit dan pemeriksa DNS karya Rizky, silakan buka halaman Cloud NOC.",
        actions: [
          { label: "Buka Cloud NOC", type: "link", value: "noc.html" },
          { label: "Cek Status Magang", type: "prompt", value: "Bagaimana status ketersediaan Rizky untuk magang atau kerja sampingan?" }
        ]
      };
    }

    const strongImperativeVerb = /\b(buatkan|bikinkan|bikinin|tuliskan|tulisin|codingin|kerjakan|selesaikan|pecahkan|terjemahkan|translate|rangkumkan|karang|buatlah|create|build me|generate|write code|write a|solve)\b/i;
    const softBuildVerb = /\b(buat|bikin|tulis|koding)\b/i;
    const generalTaskTarget = /\b(kalkulator|calculator|game|permainan|ular tangga|tic tac toe|todo list|toko online|aplikasi kasir|form login|landing page|script|kode|code|program|fungsi|function|algoritma|sorting|fibonacci|html|css|python|javascript|java|php|sql|c\+\+|puisi|pantun|cerpen|dongeng|esai|essay|makalah|skripsi|artikel|resep|surat|berita|lagu|lirik|soal|pr|tugas)\b/i;
    const rawCodeSnippet = /(```|function\s*\(|def\s+\w+\s*\(|#include\s*<|public\s+static\s+void|console\.log\(|SELECT\s+.+\s+FROM)/i;

    const isHiringInquiry = /\b(hire|rekrut|tawaran|tawarkan|jasa rizky|order|kerjasama|kerja sama|sampingan|freelance|proyek ke rizky|hubungi rizky)\b/i.test(normalized);
    const isHistoryOrSkillQuestion = /\b(pernah buat|pernah bikin|proyek yang dibuat|apa yang dibuat|rizky bisa|apakah rizky)\b/i.test(normalized);

    if (
      rawCodeSnippet.test(raw) ||
      (!isHiringInquiry && strongImperativeVerb.test(normalized) && generalTaskTarget.test(normalized)) ||
      (!isHiringInquiry && !isHistoryOrSkillQuestion && softBuildVerb.test(normalized) && /\b(kalkulator|calculator|kode|script|program|game|puisi|cerpen|makalah|resep|soal|pr)\b/i.test(normalized))
    ) {
      return {
        blocked: true,
        badge: "Di Luar Topik Portofolio",
        reason: "general_generation_task",
        reply:
          "Maaf, permintaan tersebut berada di luar fungsi asisten ini. Saya hanya menjawab pertanyaan yang berkaitan dengan **Mochammad Rizky Kurniawan** dan tidak melayani pembuatan kode, aplikasi umum, maupun pengerjaan tugas.\n\nJika Anda ingin menanyakan kemampuan pemrograman Rizky atau mendiskusikan tawaran magang dan proyek sampingan, silakan tanyakan langsung.",
        actions: [
          { label: "Keahlian Teknis Rizky", type: "prompt", value: "Apa saja bahasa pemrograman dan keahlian teknis yang dikuasai Rizky?" },
          { label: "Tawaran Magang & Proyek", type: "prompt", value: "Apakah Rizky menerima tawaran magang atau pekerjaan sampingan?" }
        ]
      };
    }

    const offTopicKeywords = /\b(resep|masak|nasi goreng|presiden|menteri|partai|politik|pemilu|cuaca|ramalan|zodiak|shio|arti mimpi|harga saham|bitcoin|kripto|jadwal bola|liga inggris|timnas|artis|selebriti|gosip|film bioskop|anime|lirik lagu|ibu kota|ibukota|benua|planet mars|dinosaurus|obat sakit|gejala penyakit|diet)\b/i;
    if (offTopicKeywords.test(normalized) && !mentionsRizky) {
      return {
        blocked: true,
        badge: "Di Luar Topik Portofolio",
        reason: "off_topic_trivia",
        reply:
          "Maaf, pertanyaan tersebut berada di luar bahasan profil **Mochammad Rizky Kurniawan**.\n\nSilakan tanyakan seputar perkuliahan di PENS, capaian akademik, keahlian jaringan dan IoT, proyek praktikum, sertifikat kompetensi, atau ketersediaan magang Rizky."
      };
    }

    return { blocked: false };
  }

  const INTENT_DEFINITIONS = [
    {
      id: "CAREER_AVAILABILITY",
      label: "Peluang Magang & Kerja",
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
      label: "Proyek Cloud NOC",
      weight: 1.3,
      patterns: [
        /\b(cloud noc|doh|dns over https|dns inspector|link budget|noc\.html|cloudflare)\b/i
      ]
    },
    {
      id: "PROJECT_IOT_WATER",
      label: "Proyek IoT Tambak",
      weight: 1.3,
      patterns: [
        /\b(tambak|ketinggian air|water level|ultrasonik|esp32.*air|monitoring air)\b/i
      ]
    },
    {
      id: "PROJECT_SDR_RADIO",
      label: "Proyek Radio SDR",
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
      label: "Proyek Enterprise WAN",
      weight: 1.25,
      patterns: [
        /\b(multi[- ]?site|enterprise wan|hq|kantor cabang|data center|isp carrier)\b/i
      ]
    },
    {
      id: "PROJECT_VLAN_SERVER",
      label: "Proyek Topologi VLAN",
      weight: 1.25,
      patterns: [
        /\b(20\+?\s*topologi|inter[- ]?vlan|802\.1q|router on a stick|client[- ]?server)\b/i
      ]
    },
    {
      id: "EDUCATION_GPA",
      label: "Pendidikan & Akademik",
      weight: 1.2,
      patterns: [
        /\b(kuliah|kampus|politeknik|universitas|pens|pendidikan|jurusan|prodi|studi|semester|angkatan|nrp)\b/i,
        /\b(ipk|gpa|ips|nilai|akademik|transkrip|sarjana terapan|d4|str|lulus)\b/i
      ]
    },
    {
      id: "CERTIFICATES",
      label: "Sertifikasi Kompetensi",
      weight: 1.2,
      patterns: [
        /\b(sertifikat|sertifikasi|lisensi|credential|credentials|piagam|bukti kompetensi|36)\b/i,
        /\b(komdigi|dex|dicoding|id[- ]?networkers|idn|dqlab|cyber academy|kiro|binar)\b/i
      ]
    },
    {
      id: "SKILLS_OVERVIEW",
      label: "Keahlian Teknis",
      weight: 1.15,
      patterns: [
        /\b(skill|skills|keahlian|kemampuan|kompetensi|bisa apa|menguasai|kuasai|kelebihan|stack|tools|software|bahasa pemrograman|coding)\b/i,
        /\b(noc|jaringan|network|routing|switching|cisco|packet tracer|gns3|linux|server|wireshark|pentest|cyber|keamanan|python|c\+\+|flutter|sql|iot|esp32|antena|horn|satelit)\b/i
      ]
    },
    {
      id: "PROJECTS_ALL",
      label: "Daftar Proyek",
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
      label: "Dokumen CV",
      weight: 1.25,
      patterns: [
        /\b(cv|resume|curriculum vitae|unduh cv|download cv|flowcv|ats)\b/i
      ]
    },
    {
      id: "CONTACT_SOCIAL",
      label: "Kontak Resmi",
      weight: 1.25,
      patterns: [
        /\b(kontak|hubungi|menghubungi|email|surel|whatsapp|telepon|nomor|hp|linkedin|alamat|domisili|lokasi|surabaya)\b/i
      ]
    },
    {
      id: "WHY_HIRE_HRD",
      label: "Nilai Tambah Kandidat",
      weight: 1.2,
      patterns: [
        /\b(kenapa harus|mengapa harus|keunggulan|nilai tambah|cocok|motivasi|karakter|kelebihan rizky|alasan menerima|kekurangan|kelemahan|tantangan)\b/i
      ]
    },
    {
      id: "PROFILE_SUMMARY",
      label: "Profil Singkat",
      weight: 1.1,
      patterns: [
        /\b(siapa rizky|siapa mochammad|tentang rizky|profil|biodata|perkenalkan|ceritakan tentang diri|latar belakang|background|kenalan|asal mana|tinggal dimana|umur|usia|bahasa inggris)\b/i
      ]
    },
    {
      id: "WEBSITE_TECH",
      label: "Tentang Website",
      weight: 1.05,
      patterns: [
        /\b(siapa kamu|kamu siapa|ai apa ini|cara kerja ai|batas penggunaan|web ini|website ini|fitur web)\b/i
      ]
    },
    {
      id: "GREETING",
      label: "Sapaan",
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

  function buildIntentBlock(intentId, parsed) {
    const career = window.getActiveCareerStatus ? window.getActiveCareerStatus() : null;
    const p = MRK_KNOWLEDGE.profile;
    const norm = parsed.normalized;

    switch (intentId) {
      case "GREETING": {
        const statusBadge = career ? career.badgeShort : "Terbuka untuk Magang & Kerja Sampingan";
        return {
          text:
            `Halo, selamat datang di portofolio **${p.fullName}**.\n\n` +
            `Anda bisa menanyakan riwayat studi di PENS Surabaya, keahlian jaringan dan server, enam proyek praktikum, 36 sertifikat kompetensi, atau status ketersediaan kerja saat ini yaitu **${statusBadge}**.`,
          actions: [
            { label: "Status Magang & Kerja", type: "prompt", value: "Bagaimana status ketersediaan Rizky untuk magang atau kerja sampingan saat ini?" },
            { label: "Buka CV ATS", type: "cv", value: "open" }
          ]
        };
      }

      case "CAREER_AVAILABILITY": {
        if (!career) {
          return {
            text: `Saat ini **${p.fullName}** terbuka menerima tawaran magang, Kerja Praktik, serta pekerjaan sampingan paruh waktu di bidang NOC, jaringan komputer, server, dan IoT.`,
            actions: [{ label: "Kirim Tawaran Kontak", type: "scroll", value: "#contact" }]
          };
        }
        const asksFullTime = /\b(full[- ]?time|tetap|penuh waktu)\b/i.test(norm);
        let body = `${career.aiResponseLead}\n\n`;
        body += `- **Skema kerja:** ${career.statusSubtitle}\n`;
        body += `- **Mode kerja:** ${career.workModes.join(", ")}\n`;
        body += `- **Bidang fokus:** ${career.targetRoles.join(", ")}\n`;
        if (asksFullTime || career.key === "internship_sidejob") {
          body += `\n${career.aiFullTimeClarification}`;
        }
        return {
          text: body,
          actions: [
            { label: "Kirim Pesan Kontak", type: "scroll", value: "#contact" },
            { label: "Lihat CV ATS", type: "cv", value: "open" },
            { label: "Hubungi via WhatsApp", type: "external", value: p.whatsappUrl }
          ]
        };
      }

      case "PROFILE_SUMMARY": {
        const statusShort = career ? career.statusTitle : "Siap Menerima Tawaran Magang & Pekerjaan Sampingan";
        return {
          text:
            `**${p.fullName}** merupakan mahasiswa ${p.semester} program studi ${p.degree} di ${p.campus} dengan capaian IPK **${p.gpa}** dan IPS terakhir **${p.latestIps}**. Ia berdomisili di ${p.location}.\n\n` +
            `Minat utamanya mencakup ${p.focusSummary} Status ketersediaannya saat ini: **${statusShort}**.`,
          actions: [
            { label: "Lihat Peta Keahlian", type: "scroll", value: "#skills-telemetry" },
            { label: "Buka CV", type: "cv", value: "open" }
          ]
        };
      }

      case "EDUCATION_GPA": {
        return {
          text:
            `Berikut latar belakang akademik **${p.fullName}**:\n\n` +
            `- **Kampus:** ${p.campus}\n` +
            `- **Program Studi:** ${p.degree}\n` +
            `- **Status:** Mahasiswa ${p.semester}, NRP \`${p.nrp}\`\n` +
            `- **Capaian Nilai:** IPK **${p.gpa}** dengan IPS semester terakhir **${p.latestIps}**\n\n` +
            `Selama kuliah, porsi praktikum berfokus pada jaringan komputer, transmisi satelit dan gelombang mikro, pengolahan sinyal radio digital, serta sistem tertanam berbasis IoT.`,
          actions: [
            { label: "Lihat 36 Sertifikat", type: "scroll", value: "#credentials" },
            { label: "Lihat Proyek Lab", type: "scroll", value: "#work" }
          ]
        };
      }

      case "SKILLS_OVERVIEW": {
        const s = MRK_KNOWLEDGE.skills;
        return {
          text:
            `Keahlian teknis **${p.fullName}** terbagi ke dalam empat bidang utama:\n\n` +
            `1. **NOC & Jaringan:** ${s.nocNetwork[0]}, serta ${s.nocNetwork[1].toLowerCase()}.\n` +
            `2. **Server & Keamanan:** ${s.nocNetwork[3]}, ditambah ${s.security[1].toLowerCase()}.\n` +
            `3. **Pemrograman & Data:** ${s.codeWebData[0]}, serta ${s.codeWebData[1].toLowerCase()}.\n` +
            `4. **IoT & Telekomunikasi:** ${s.iotTelecom[0]}, serta ${s.iotTelecom[1].toLowerCase()}.`,
          actions: [
            { label: "Grafik Kompetensi", type: "scroll", value: "#skills-telemetry" },
            { label: "Coba Cloud NOC", type: "link", value: "noc.html" }
          ]
        };
      }

      case "PROJECTS_ALL": {
        const list = MRK_KNOWLEDGE.projects
          .map((pr, idx) => `${idx + 1}. **${pr.title}** di bidang ${pr.category}`)
          .join("\n");
        return {
          text:
            `Terdapat **6 proyek utama** yang telah dikerjakan dan didokumentasikan oleh Rizky:\n\n${list}\n\n` +
            `${MRK_KNOWLEDGE.extraLabNote}\n\nKlik kartu proyek di halaman utama untuk melihat rincian teknisnya, atau sebutkan nama proyek yang ingin Anda tanyakan.`,
          actions: [
            { label: "Ke Bagian Proyek", type: "scroll", value: "#work" },
            { label: "Buka Cloud NOC", type: "link", value: "noc.html" }
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
        const bullets = proj.highlights.map((h) => `- ${h}`).join("\n");
        const acts = [
          { label: "Detail Proyek", type: "project_modal", value: proj.id }
        ];
        if (proj.liveUrl) {
          acts.unshift({ label: "Buka Aplikasi Live", type: "link", value: proj.liveUrl });
        }
        return {
          text:
            `**${proj.title}**\nKategori ${proj.category}, tahun ${proj.year}\n\n` +
            `${proj.summary}\n\n` +
            `**Poin pengerjaan:**\n${bullets}\n\n` +
            `**Teknologi:** \`${proj.stack.join("`, `")}\``,
          actions: acts
        };
      }

      case "CERTIFICATES": {
        const c = MRK_KNOWLEDGE.certificatesSummary;
        const topList = c.highlights.slice(0, 6).map((item) => `- ${item}`).join("\n");
        return {
          text:
            `Rizky memiliki **${c.total} dokumen sertifikat asli** yang seluruh file buktinya dapat diperiksa langsung di halaman ini:\n\n` +
            `${topList}\n\n` +
            `Seluruh dokumen tersebut tersimpan rapi lengkap dengan kolom pencarian di bagian Lisensi dan Sertifikasi.`,
          actions: [
            { label: "Buka 36 Sertifikat", type: "open_archive", value: "#credentials" },
            { label: "Sertifikat Komdigi", type: "cert_pdf", value: "assets/certificates/cert_dex_network_admin_intermediate.pdf" }
          ]
        };
      }

      case "ORGANIZATIONS_COMPETITIONS": {
        const orgs = MRK_KNOWLEDGE.organizationsAndCompetitions.organizations.map((o) => `- ${o}`).join("\n");
        const comps = MRK_KNOWLEDGE.organizationsAndCompetitions.competitions.map((c) => `- ${c}`).join("\n");
        return {
          text:
            `Selain kegiatan perkuliahan dan praktikum laboratorium, Rizky aktif berorganisasi dan mengikuti sejumlah kompetisi:\n\n` +
            `**Organisasi & Kepanitiaan:**\n${orgs}\n\n` +
            `**Partisipasi Kompetisi:**\n${comps}`,
          actions: [
            { label: "Lihat Arsip Bukti", type: "open_archive", value: "#credentials" }
          ]
        };
      }

      case "CV_RESUME": {
        return {
          text:
            `Dokumen **Curriculum Vitae** resmi **${p.fullName}** tersedia dalam tiga versi yang siap diperiksa:\n\n` +
            `- **CV ATS Teks Murni 1 Halaman:** Ukuran ringan 37 KB tanpa foto, disusun rapi agar mudah dibaca sistem ATS perusahaan.\n` +
            `- **FlowCV Bahasa Inggris:** Format standar internasional.\n` +
            `- **FlowCV Bahasa Indonesia:** Format baku bahasa Indonesia.`,
          actions: [
            { label: "Pilih Versi CV", type: "cv", value: "open" },
            { label: "Pratinjau CV ATS", type: "cert_pdf", value: p.cvAtsPdf }
          ]
        };
      }

      case "CONTACT_SOCIAL": {
        return {
          text:
            `Anda dapat menghubungi **${p.fullName}** melalui kontak resmi berikut:\n\n` +
            `- **Email:** \`${p.email}\`\n` +
            `- **Telepon & WhatsApp:** \`${p.phone}\`\n` +
            `- **Domisili:** ${p.location}\n` +
            `- **LinkedIn:** linkedin.com/in/mochammad-rizky-kurniawan`,
          actions: [
            { label: "Form Kontak", type: "scroll", value: "#contact" },
            { label: "Chat WhatsApp", type: "external", value: p.whatsappUrl },
            { label: "Profil LinkedIn", type: "external", value: p.linkedin }
          ]
        };
      }

      case "WHY_HIRE_HRD": {
        return {
          text:
            `Tiga bekal utama yang ditawarkan **${p.fullName}** untuk mendukung tim teknis Anda:\n\n` +
            `1. **Terbiasa Praktik Langsung:** Sudah mengerjakan lebih dari 20 topologi VLAN dan WAN, analisis paket Wireshark, pengelolaan layanan dasar server Linux, hingga membangun aplikasi web Cloud NOC.\n` +
            `2. **Sertifikasi Teruji:** Mengantongi sertifikat tingkat Intermediate sebagai Associate Network Administrator dan Network Technician dari DEX Kementerian Komdigi RI serta lulus pelatihan Web Pentest ID-Networkers.\n` +
            `3. **Memahami Perangkat Keras hingga Jaringan:** Latar belakang STr Teknik Telekomunikasi PENS dengan IPK **${p.gpa}** membantunya menghubungkan perangkat fisik seperti ESP32 dan sinyal RF ke sistem jaringan dan antarmuka web.`,
          actions: [
            { label: "Buka CV ATS", type: "cv", value: "open" },
            { label: "Hubungi Rizky", type: "scroll", value: "#contact" }
          ]
        };
      }

      case "WEBSITE_TECH": {
        return {
          text:
            `Website **${p.website}** ini dibuat sebagai portofolio interaktif **${p.fullName}**. Halaman utamanya mendukung mode gelap dan terang, grafik peta kompetensi, pratinjau dokumen langsung, serta asisten tanya jawab khusus yang dibatasi hanya untuk topik seputar profil dan karya Rizky.`,
          actions: [
            { label: "Coba Aplikasi Cloud NOC", type: "link", value: "noc.html" }
          ]
        };
      }

      default:
        return null;
    }
  }

  async function processVisitorMessage(rawInput) {
    const parsed = normalizeText(rawInput);

    const guardResult = detectOutOfScope(parsed);
    if (guardResult.blocked) {
      return {
        inScope: false,
        classificationBadge: guardResult.badge,
        replyMarkdown: guardResult.reply,
        actions: guardResult.actions || [
          { label: "Status Magang & Kerja", type: "prompt", value: "Bagaimana status ketersediaan Rizky untuk magang atau kerja sampingan saat ini?" },
          { label: "Keahlian & Proyek", type: "prompt", value: "Apa saja keahlian utama serta proyek NOC dan IoT milik Rizky?" }
        ]
      };
    }

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

    if (scored.length === 0 && conversationContext.lastIntentIds.length > 0) {
      const followUpCue = /\b(itu|tadi|nya|detail|bukti|link|demo|lanjut|lebih lanjut|contohnya|dimana|kapan|berapa)\b/i;
      if (followUpCue.test(parsed.normalized) && parsed.tokens.length <= 7) {
        const prevId = conversationContext.lastIntentIds[0];
        scored.push({
          id: prevId,
          label: "Lanjutan Topik",
          score: 1.0
        });
      }
    }

    if (scored.length === 0 && /\b(rizky|mochammad|kurniawan|mrk|kamu|anda)\b/i.test(parsed.normalized)) {
      scored.push({
        id: "PROFILE_SUMMARY",
        label: "Profil Singkat",
        score: 1.0
      });
    }

    if (scored.length === 0) {
      return {
        inScope: false,
        classificationBadge: "Di Luar Topik Portofolio",
        replyMarkdown:
          `Maaf, pesan **"${parsed.raw.slice(0, 70)}${parsed.raw.length > 70 ? "..." : ""}"** belum berkaitan dengan informasi mengenai **Mochammad Rizky Kurniawan**.\n\n` +
          `Asisten ini khusus menjawab hal seputar ketersediaan magang dan kerja sampingan, studi di PENS, keahlian jaringan dan IoT, proyek, CV, serta sertifikat milik Rizky.`,
        actions: [
          { label: "Peluang Magang", type: "prompt", value: "Apakah Rizky siap menerima tawaran magang atau kerja sampingan?" },
          { label: "Keahlian & Proyek", type: "prompt", value: "Apa saja keahlian dan proyek unggulan Rizky?" },
          { label: "Kuliah & Sertifikat", type: "prompt", value: "Ceritakan pendidikan PENS, IPK, dan sertifikasi Rizky." }
        ]
      };
    }

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
              classificationBadge: data.badge || `Topik: ${scored[0].label}`,
              replyMarkdown: data.reply,
              actions: localBlock ? localBlock.actions : []
            };
          }
        }
      } catch (_) {}
    }

    const selectedIntents = [];
    for (const item of scored) {
      if (selectedIntents.length === 0) {
        selectedIntents.push(item);
      } else if (selectedIntents.length < 2 && item.score >= 1.15 && item.id !== "GREETING" && selectedIntents[0].id !== "GREETING") {
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

    const badgeTitle = selectedIntents.map((i) => i.label).join(" & ");

    return {
      inScope: true,
      classificationBadge: `Topik: ${badgeTitle}`,
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
