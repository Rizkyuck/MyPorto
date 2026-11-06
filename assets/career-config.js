/**
 * ============================================================================
 * KONFIGURASI STATUS PELUANG KERJA & KARIER — MOCHAMMAD RIZKY KURNIAWAN
 * ============================================================================
 * File ini mengontrol seluruh badge ketersediaan kerja di website (Hero, About,
 * Services, Contact) sekaligus menjadi sumber data dinamis untuk MRK AI Assistant.
 *
 * CARA MENGGANTI STATUS DI TAHUN SELANJUTNYA (CUKUP UBAH 1 BARIS DI BAWAH INI):
 * Pilihan nilai ACTIVE_STATUS_KEY yang tersedia:
 *   1. "internship_sidejob" -> (AKTIF SAAT INI) Siap Magang / KP & Job Sampingan
 *   2. "fulltime_ready"     -> Siap Kerja Full-Time / Fresh Graduate / Kontrak
 *   3. "open_all"           -> Terbuka untuk Full-Time, Magang, & Freelance
 *   4. "freelance_only"     -> Fokus Proyek Sampingan / Part-Time / Freelance
 *   5. "employed_closed"    -> Sedang Bekerja Aktif (Terbuka Kolaborasi/Jejaring)
 * ============================================================================
 */

window.MRK_CAREER_CONFIG = {
  ACTIVE_STATUS_KEY: "internship_sidejob",

  LAST_UPDATED: "2026",

  PRESETS: {
    internship_sidejob: {
      key: "internship_sidejob",
      isOpen: true,
      dotColor: "#10b981", // Emerald green
      badgeShort: "Open: Magang / KP & Job Sampingan",
      badgeHero: "TERBUKA UNTUK MAGANG / KP & JOB SAMPINGAN",
      statusTitle: "Siap Menerima Tawaran Magang & Pekerjaan Sampingan",
      statusSubtitle: "Internship / Kerja Praktik (KP) • Part-Time • Project-Based / Freelance",
      summaryText:
        "Saat ini saya merupakan mahasiswa aktif Semester 5 STr Teknik Telekomunikasi PENS (IPK 3.43/4.00) dan siap menerima tawaran Magang / Kerja Praktik (KP) maupun pekerjaan sampingan (Part-Time / Freelance / Project-Based) yang fleksibel dengan jadwal perkuliahan.",
      workModes: ["On-site (Surabaya)", "Hybrid", "Remote", "Penempatan Luar Kota (Program Magang/KP)"],
      targetRoles: [
        "NOC & Network Infrastructure Intern",
        "IT Support / Linux Server Administration",
        "Cloud & Web Utility / Dashboard Sampingan",
        "IoT & Embedded Prototyping Project"
      ],
      contactSubjectPlaceholder: "Subjek (misal: Tawaran Magang NOC / Job Sampingan IT)...",
      servicesFooterNote:
        "Saat ini terbuka untuk program Kerja Praktik / Magang Industri serta pekerjaan sampingan (Part-Time / Project-Based) di bidang NOC, infrastruktur IT, pengelolaan server, maupun pengembangan sistem IoT & web teknis.",
      aiResponseLead:
        "**Ya, saat ini Mochammad Rizky Kurniawan terbuka untuk tawaran Magang (Internship / Kerja Praktik) maupun Pekerjaan Sampingan (Part-Time / Freelance / Project-Based)!**",
      aiFullTimeClarification:
        "Karena saat ini Rizky masih berstatus **mahasiswa aktif Semester 5 di PENS Surabaya**, fokus utamanya tahun ini adalah **Magang / Kerja Praktik (KP)** serta **Job Sampingan (Part-Time / Freelance)** yang jadwalnya dapat disesuaikan. Untuk posisi *Full-Time* penuh akan dibuka setelah menyelesaikan masa studi."
    },

    fulltime_ready: {
      key: "fulltime_ready",
      isOpen: true,
      dotColor: "#10b981",
      badgeShort: "Open to Work: Siap Kerja Full-Time",
      badgeHero: "OPEN TO WORK • SIAP KERJA FULL-TIME & PROFESIONAL",
      statusTitle: "Siap Bekerja Penuh Waktu (Full-Time) & Peluang Profesional",
      statusSubtitle: "Full-Time • Contract • On-Site / Hybrid / Remote",
      summaryText:
        "Siap berkontribusi secara profesional dan penuh waktu (Full-Time) di bidang Network Operations Center (NOC), Network Infrastructure Engineer, Linux Server & Cloud Administration, serta Sistem Telekomunikasi.",
      workModes: ["Full-Time On-site", "Hybrid", "Remote", "Bersedia Relokasi"],
      targetRoles: [
        "Junior NOC / Network Engineer",
        "System & Linux Server Administrator",
        "Cloud & IT Infrastructure Engineer",
        "Telecommunications / IoT Engineer"
      ],
      contactSubjectPlaceholder: "Subjek (misal: Rekrutmen Full-Time NOC / Network Engineer)...",
      servicesFooterNote:
        "Siap berkontribusi secara penuh waktu (Full-Time) dalam tim operasional jaringan (NOC), infrastruktur IT, pengelolaan sistem server, dan telekomunikasi.",
      aiResponseLead:
        "**Ya! Saat ini Mochammad Rizky Kurniawan dalam status SIAP KERJA (Open to Work) untuk posisi Full-Time, Kontrak, maupun proyek profesional.**",
      aiFullTimeClarification:
        "Rizky siap mengikuti proses rekrutmen untuk posisi **Full-Time** (On-site, Hybrid, maupun Remote) serta bersedia ditempatkan sesuai kebutuhan perusahaan."
    },

    open_all: {
      key: "open_all",
      isOpen: true,
      dotColor: "#10b981",
      badgeShort: "Open: Full-Time, Magang & Proyek",
      badgeHero: "TERBUKA UNTUK PELUANG KERJA, MAGANG & KOLABORasi",
      statusTitle: "Terbuka untuk Tawaran Kerja, Magang & Proyek Teknis",
      statusSubtitle: "Full-Time • Internship • Freelance / Project-Based",
      summaryText:
        "Terbuka untuk berbagai skema kolaborasi profesional mulai dari rekrutmen kerja, program magang industri, hingga pengerjaan proyek jaringan, server, dan IoT.",
      workModes: ["On-site", "Hybrid", "Remote"],
      targetRoles: [
        "NOC & Network Engineer",
        "Linux Server & Cloud Support",
        "Technical Web & IoT Developer"
      ],
      contactSubjectPlaceholder: "Subjek (misal: Tawaran Kerja / Proyek Kolaborasi)...",
      servicesFooterNote:
        "Terbuka untuk kolaborasi kerja, magang, maupun proyek teknis di bidang jaringan (NOC), administrasi server, dan sistem telekomunikasi.",
      aiResponseLead:
        "**Ya, Mochammad Rizky Kurniawan saat ini terbuka untuk tawaran kerja, program magang, maupun proyek sampingan/kolaborasi teknis.**",
      aiFullTimeClarification:
        "Silakan hubungi langsung melalui email atau LinkedIn untuk mendiskusikan skema kerja dan ketersediaan waktu."
    },

    freelance_only: {
      key: "freelance_only",
      isOpen: true,
      dotColor: "#f59e0b",
      badgeShort: "Open: Proyek Sampingan / Freelance",
      badgeHero: "TERBUKA UNTUK PROYEK SAMPINGAN & FREELANCE",
      statusTitle: "Menerima Pekerjaan Sampingan & Proyek Teknis Terbatas",
      statusSubtitle: "Part-Time • Project-Based • Remote Freelance",
      summaryText:
        "Saat ini fokus menerima pekerjaan sampingan berbasis proyek (Freelance / Part-Time) untuk konfigurasi jaringan, simulasi topologi, setup Linux server, dan dashboard web teknis.",
      workModes: ["Remote", "Flexible Part-Time"],
      targetRoles: [
        "Freelance Network & Topology Consultant",
        "Server Setup & Web Utility Developer",
        "IoT Prototype Contributor"
      ],
      contactSubjectPlaceholder: "Subjek (misal: Diskusi Proyek Freelance / Sampingan)...",
      servicesFooterNote:
        "Saat ini menerima kolaborasi berbasis proyek sampingan (Freelance / Part-Time) yang fleksibel.",
      aiResponseLead:
        "**Saat ini Mochammad Rizky Kurniawan fokus menerima tawaran Proyek Sampingan (Freelance / Part-Time) secara fleksibel.**",
      aiFullTimeClarification:
        "Untuk komitmen penuh waktu saat ini sedang dibatasi, namun sangat terbuka untuk diskusi proyek lepas atau kerja paruh waktu."
    },

    employed_closed: {
      key: "employed_closed",
      isOpen: false,
      dotColor: "#94a3b8",
      badgeShort: "Aktif Berkarier • Open Networking",
      badgeHero: "AKTIF BERKARIER • TERBUKA UNTUK JEJARING PROFESIONAL",
      statusTitle: "Sedang Menjalani Peran Aktif • Terbuka untuk Diskusi & Jejaring",
      statusSubtitle: "Professional Networking • Knowledge Sharing",
      summaryText:
        "Saat ini sedang fokus pada tanggung jawab utama, namun tetap senang terhubung dengan rekan industri untuk diskusi seputar NOC, infrastruktur jaringan, dan teknologi telekomunikasi.",
      workModes: ["Networking & Diskusi"],
      targetRoles: ["Kolaborasi Komunitas & Diskusi Teknis"],
      contactSubjectPlaceholder: "Subjek (misal: Salam Kenal / Diskusi Teknis)...",
      servicesFooterNote:
        "Terbuka untuk jejaring profesional dan pertukaran wawasan di bidang jaringan komputer, server, dan telekomunikasi.",
      aiResponseLead:
        "**Saat ini Mochammad Rizky Kurniawan sedang menjalani komitmen utama sehingga belum aktif mencari lowongan baru, namun tetap terbuka untuk jejaring profesional.**",
      aiFullTimeClarification:
        "Anda tetap dapat mengirimkan pesan melalui formulir kontak atau LinkedIn untuk silaturahmi profesional maupun diskusi peluang masa depan."
    }
  }
};

window.getActiveCareerStatus = function () {
  const cfg = window.MRK_CAREER_CONFIG;
  return cfg.PRESETS[cfg.ACTIVE_STATUS_KEY] || cfg.PRESETS.internship_sidejob;
};
