/**
 * KONFIGURASI STATUS PELUANG KERJA - MOCHAMMAD RIZKY KURNIAWAN
 *
 * Cara mengganti status di tahun berikutnya, cukup ubah nilai ACTIVE_STATUS_KEY:
 *   1. "internship_sidejob" -> Siap Magang, KP, dan Pekerjaan Sampingan
 *   2. "fulltime_ready"     -> Siap Kerja Full-Time dan Kontrak Profesional
 *   3. "open_all"           -> Terbuka untuk Kerja Full-Time, Magang, dan Proyek
 *   4. "freelance_only"     -> Fokus Proyek Sampingan dan Freelance
 *   5. "employed_closed"    -> Sedang Bekerja Aktif, Terbuka Jejaring Profesional
 */

window.MRK_CAREER_CONFIG = {
  ACTIVE_STATUS_KEY: "internship_sidejob",

  LAST_UPDATED: "2026",

  PRESETS: {
    internship_sidejob: {
      key: "internship_sidejob",
      isOpen: true,
      dotColor: "#10b981",
      badgeShort: "Terbuka untuk Magang & Kerja Sampingan",
      badgeHero: "TERBUKA UNTUK MAGANG, KP & KERJA SAMPINGAN",
      statusTitle: "Siap Menerima Tawaran Magang & Pekerjaan Sampingan",
      statusSubtitle: "Magang Industri, Kerja Praktik, Part-Time & Freelance",
      summaryText:
        "Saat ini saya aktif menempuh semester 5 STr Teknik Telekomunikasi di PENS Surabaya dengan IPK 3.43 dari 4.00. Saya terbuka untuk program Magang atau Kerja Praktik serta pekerjaan sampingan paruh waktu dan proyek lepas yang dapat menyesuaikan jadwal kuliah.",
      workModes: ["On-site Surabaya", "Hybrid", "Remote", "Siap Luar Kota untuk Magang"],
      targetRoles: [
        "NOC & Network Infrastructure Intern",
        "IT Support & Linux Server Administration",
        "Web Teknis & Cloud Support Sampingan",
        "Proyek Purwarupa IoT & Embedded"
      ],
      contactSubjectPlaceholder: "Subjek pesan, misal Tawaran Magang NOC...",
      servicesFooterNote:
        "Terbuka untuk program Kerja Praktik, magang industri, serta pekerjaan sampingan paruh waktu di bidang NOC, infrastruktur jaringan, administrasi server, dan sistem IoT.",
      aiResponseLead:
        "**Ya, saat ini Rizky terbuka menerima tawaran Magang atau Kerja Praktik maupun pekerjaan sampingan berbasis paruh waktu dan proyek lepas.**",
      aiFullTimeClarification:
        "Karena Rizky masih menempuh semester 5 di PENS Surabaya, fokus utamanya saat ini adalah program magang industri serta pekerjaan sampingan yang fleksibel dengan jadwal perkuliahan. Untuk posisi kerja penuh waktu akan dibuka setelah masa studi selesai."
    },

    fulltime_ready: {
      key: "fulltime_ready",
      isOpen: true,
      dotColor: "#10b981",
      badgeShort: "Siap Kerja Full-Time",
      badgeHero: "SIAP KERJA FULL-TIME & PELUANG PROFESIONAL",
      statusTitle: "Siap Bekerja Penuh Waktu & Kontrak Profesional",
      statusSubtitle: "Full-Time, Kontrak, On-Site, Hybrid & Remote",
      summaryText:
        "Siap berkontribusi secara penuh waktu di bidang Network Operations Center, Network Infrastructure Engineer, administrasi server Linux dan Cloud, serta sistem telekomunikasi.",
      workModes: ["Full-Time On-site", "Hybrid", "Remote", "Siap Relokasi"],
      targetRoles: [
        "Junior NOC & Network Engineer",
        "System & Linux Server Administrator",
        "Cloud & IT Infrastructure Engineer",
        "Telecommunications & IoT Engineer"
      ],
      contactSubjectPlaceholder: "Subjek pesan, misal Rekrutmen NOC Engineer...",
      servicesFooterNote:
        "Siap berkontribusi penuh waktu dalam tim operasional jaringan NOC, infrastruktur IT, administrasi sistem server, dan telekomunikasi.",
      aiResponseLead:
        "**Ya, saat ini Rizky dalam status siap kerja penuh waktu untuk posisi Full-Time, kontrak, maupun proyek profesional.**",
      aiFullTimeClarification:
        "Rizky siap mengikuti proses rekrutmen untuk skema kerja On-site, Hybrid, maupun Remote dan bersedia ditempatkan sesuai kebutuhan perusahaan."
    },

    open_all: {
      key: "open_all",
      isOpen: true,
      dotColor: "#10b981",
      badgeShort: "Terbuka untuk Kerja, Magang & Proyek",
      badgeHero: "TERBUKA UNTUK PELUANG KERJA, MAGANG & KOLABORASI",
      statusTitle: "Terbuka untuk Tawaran Kerja, Magang & Proyek Teknis",
      statusSubtitle: "Full-Time, Magang Industri & Proyek Freelance",
      summaryText:
        "Terbuka untuk berbagai skema kerja sama mulai dari rekrutmen staf teknis, program magang industri, hingga pengerjaan proyek jaringan, server, dan IoT.",
      workModes: ["On-site", "Hybrid", "Remote"],
      targetRoles: [
        "NOC & Network Engineer",
        "Linux Server & Cloud Support",
        "Technical Web & IoT Developer"
      ],
      contactSubjectPlaceholder: "Subjek pesan, misal Tawaran Kerja atau Kolaborasi...",
      servicesFooterNote:
        "Terbuka untuk kerja sama profesional, magang, maupun proyek teknis di bidang jaringan NOC, administrasi server, dan sistem telekomunikasi.",
      aiResponseLead:
        "**Ya, saat ini Rizky terbuka untuk tawaran kerja, program magang, maupun proyek kolaborasi teknis.**",
      aiFullTimeClarification:
        "Silakan hubungi langsung melalui email atau WhatsApp untuk membicarakan skema kerja dan ketersediaan waktu."
    },

    freelance_only: {
      key: "freelance_only",
      isOpen: true,
      dotColor: "#f59e0b",
      badgeShort: "Terbuka untuk Proyek Freelance",
      badgeHero: "TERBUKA UNTUK PROYEK SAMPINGAN & FREELANCE",
      statusTitle: "Menerima Pekerjaan Sampingan & Proyek Teknis",
      statusSubtitle: "Part-Time, Berbasis Proyek & Remote Freelance",
      summaryText:
        "Saat ini fokus menerima pekerjaan sampingan berbasis proyek untuk perancangan topologi jaringan, konfigurasi dasar server Linux, serta pembuatan antarmuka web teknis.",
      workModes: ["Remote", "Part-Time Fleksibel"],
      targetRoles: [
        "Konsultan Topologi & Simulasi Jaringan",
        "Pengembang Web Utilitas & Setup Server",
        "Kontributor Purwarupa IoT"
      ],
      contactSubjectPlaceholder: "Subjek pesan, misal Diskusi Proyek Sampingan...",
      servicesFooterNote:
        "Saat ini menerima kolaborasi berbasis proyek lepas dan paruh waktu yang fleksibel.",
      aiResponseLead:
        "**Saat ini Rizky fokus menerima tawaran pekerjaan sampingan dan proyek lepas secara fleksibel.**",
      aiFullTimeClarification:
        "Untuk posisi penuh waktu sedang dibatasi sementara, namun tetap terbuka untuk diskusi proyek lepas atau paruh waktu."
    },

    employed_closed: {
      key: "employed_closed",
      isOpen: false,
      dotColor: "#94a3b8",
      badgeShort: "Aktif Berkarier, Terbuka Jejaring",
      badgeHero: "AKTIF BERKARIER & TERBUKA JEJARING PROFESIONAL",
      statusTitle: "Sedang Menjalani Peran Utama & Terbuka Berjejaring",
      statusSubtitle: "Jejaring Profesional & Diskusi Teknis",
      summaryText:
        "Saat ini sedang fokus pada peran kerja utama, namun tetap senang terhubung dengan rekan industri untuk berdiskusi seputar NOC, jaringan komputer, dan teknologi telekomunikasi.",
      workModes: ["Diskusi & Jejaring"],
      targetRoles: ["Kolaborasi Komunitas & Pertukaran Wawasan"],
      contactSubjectPlaceholder: "Subjek pesan, misal Salam Kenal atau Diskusi...",
      servicesFooterNote:
        "Terbuka untuk jejaring profesional dan diskusi seputar jaringan komputer, server, serta telekomunikasi.",
      aiResponseLead:
        "**Saat ini Rizky sedang fokus menjalani peran utamanya sehingga belum mencari lowongan baru, tetapi tetap terbuka untuk jejaring profesional.**",
      aiFullTimeClarification:
        "Anda tetap dapat mengirim pesan lewat formulir kontak atau LinkedIn untuk silaturahmi maupun komunikasi peluang ke depan."
    }
  }
};

window.getActiveCareerStatus = function () {
  const cfg = window.MRK_CAREER_CONFIG;
  return cfg.PRESETS[cfg.ACTIVE_STATUS_KEY] || cfg.PRESETS.internship_sidejob;
};
