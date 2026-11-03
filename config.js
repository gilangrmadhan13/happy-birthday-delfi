// =========================================================================
// 💖 KONFIGURASI WEBSITE ULANG TAHUN PACAR 💖
// =========================================================================
// Kamu cukup edit bagian di bawah ini sesuai keinginan kamu!
// Semua teks, foto, lagu, dan tanggal bisa kamu sesuaikan di file ini.
// =========================================================================

const CONFIG = {
  // 1. DATA UTAMA
  girlfriendName: "Delfi", // Nama pacar kamu
  birthdayDate: "2026-11-04", // Tanggal ulang tahunnya (Format: YYYY-MM-DD)
  
  // Tanggal jadian / awal kenal (untuk penghitung hari bersama)
  // Kalau mau dihitung dari tanggal tertentu, sesuaikan format YYYY-MM-DD ini:
  anniversaryDate: "2023-11-04", 

  // 2. MUSIK LATAR (BACKGROUND MUSIC)
  music: {
    title: "LANY - ILYSB (I Love You So Bad) 💕", // Judul lagu yang ditampilkan di player
    src: "assets/ilysb.mp3", // File lokal lagu ILYSB
  },

  // 3. LAYAR PEMBUKA (INTERAKTIF SAAT WEB PERTAMA KALI DIBUKA)
  intro: {
    greeting: "Hai Delfi Cantik ✨",
    message: "Ada kejutan spesial yang udah disiapin buat hari ulang tahunmu hari ini... (Coba putar kuenya dulu buat seru-seruan yaa! 🎂)",
    buttonText: "Buka Kejutan 🎁",
  },

  // 4. HEADER & UCAPAN UTAMA
  hero: {
    badge: "Special Day for Delfi ✨",
    title: "Happy Birthday,",
    subtitle: "Hari ini adalah tentang kamu, senyumanmu, dan semua kebahagiaan yang layak kamu dapatkan di dunia ini, Delfi. ❤️",
  },

  // 5. INTERAKTIF KUE ULANG TAHUN & TIUP LILIN
  cake: {
    title: "Make a Wish & Tiup Lilin! 🎂",
    subtitle: "Pikirkan satu atau beberapa doa terbaikmu di dalam hati, terus klik tombol di bawah untuk tiup lilinnya ya!",
    buttonText: "Tiup Lilinnya 🕯️",
    wishedMessage: "Yay! Lilinnya sudah ditiup! 🥳✨ Semoga di tahun ini kamu makin happy, makin dilancarkan rezekinya, sehat terus, kuliah makin semangat, dan main Valonya makin jago biar bisa di atas aku! Wish u all the best dann, I love you Delfi! ❤️",
  },

  // 6. SURAT CINTA UTAMA (Bisa kamu edit panjang dan bebas)
  letter: {
    title: "A Little Letter For You 💌",
    date: "Special Birthday Edition",
    salutation: "Happy Birthday Delfi Sayang 💖,",
    paragraphs: [
      "Happy birthday sayang! Semoga di tahun ini kamu makin happy, makin dilancarkan rezekinya, terus di hari ulang tahun ini sehat teruss.",
      "Semoga apa yang kamu harapkan di tahun ini sebelum nanti berganti tahun dikabulkan satu per satu.",
      "Makin semangat lagi kuliahnya yaa! Terus main Valo-nya makin jagooo biar bisa di atas aku! 🎮🔥",
      "Wish u all the best dann... I love you, aku sayang kamu Delfi! ❤️✨"
    ],
    closing: "Dengan segenap cinta,",
    sender: "Pacar & Duo Valo Kamu ✨"
  },

  // 7. SURAT SPESIAL "OPEN WHEN..." (AMPLOP INTERAKTIF)
  // Bisa diklik oleh pacar kamu untuk memunculkan pesan pop-up yang manis!
  openWhenCards: [
    {
      icon: "🥺",
      title: "Saat Kamu Kangen",
      preview: "Buka kalau lagi rindu...",
      message: "Kalau kamu lagi kangen, ingat ya kalau aku juga lagi mikirin kamu di sini. Jarak atau waktu nggak akan ngurangin rasa sayang aku ke kamu. Kamu selalu ada di hatiku tiap detik! Call me anytime yaa Delfi sayang 💕"
    },
    {
      icon: "☕",
      title: "Saat Kamu Ngerasa Lelah",
      preview: "Buka saat harimu berat...",
      message: "Tarik napas pelan-pelan ya cantik. Kamu udah berjuang hebat banget hari ini, dan aku bangga banget sama kamu. Sekarang saatnya istirahat, jangan dipaksa ya. Rehat sejenak, kamu berhak dapet ketenangan. 🤍"
    },
    {
      icon: "🍫",
      title: "Saat Kamu Bad Mood",
      preview: "Buka kalau lagi cemberut...",
      message: "Jangan sedih lama-lama yaa. Dunia ini jauh lebih indah kalau kamu senyum. Kalau ada hal yang bikin kamu kesal, ceritain ke aku ya. Aku siap dengerin atau sekadar nemenin kamu makan yang manis-manis! 🍦"
    },
    {
      icon: "🎉",
      title: "Hari Ulang Tahunmu",
      preview: "Buka khusus hari ini!",
      message: "Happy birthday Delfi sayang! Semoga di tahun ini kamu makin happy, makin dilancarkan rezekinya, sehat terus, kuliah makin semangat, dan main Valo makin jago biar bisa di atas aku! Wish u all the best dann, I love you, aku sayang kamu! 🎂❤️"
    }
  ],

  // 9. REASONS WHY I LOVE YOU (ALASAN KENAPA AKU SAYANG KAMU)
  reasons: [
    "Cara kamu tersenyum saat lagi bahagia",
    "Kebaikan hatimu yang tulus ke semua orang",
    "Suaramu yang selalu bisa nenangin pikiranku",
    "Tawa manismu waktu dengar lelucon garingku",
    "Cara kamu selalu percaya dan dukung aku",
    "Keberadaanmu yang bikin duniaku terasa jauh lebih hangat"
  ],

  // 10. FOOTER & PELUK VIRTUAL
  hugSection: {
    title: "Peluk Virtual Buat Kamu 🤗",
    subtitle: "Karena hari ini spesial, klik tombol hati di bawah sebanyak-banyaknya ya!",
    buttonLabel: "Kirim Peluk Virtual 💕"
  },

  // 11. MINI GAME (VALORANT DUO AIM CHALLENGE)
  minigame: {
    badge: "Special Mini Game 🎮",
    title: "Duo Valo Aim Lab 🎯",
    subtitle: "Katanya mau main Valo makin jago biar bisa di atas aku? Buktiin reflex aim kamu di sini! Tap target sebanyak-banyaknya dalam 20 detik! 🔥",
    duration: 20, // Durasi game dalam detik
    targets: [
      { emoji: "🎯", label: "Headshot!", points: 10 },
      { emoji: "💎", label: "Radiant!", points: 20 },
      { emoji: "🐣", label: "Wingman!", points: 15 },
      { emoji: "💖", label: "Love Boost!", points: 15 },
      { emoji: "🎂", label: "Birthday Cake!", points: 25 },
    ],
    rewards: [
      {
        badge: "🏆 RANK: RADIANT #1 IN MY HEART",
        minScore: 140,
        message: "GILA! Aim kamu beneran GG parah! Udah sah lebih jago dan di atas aku nih di Valo! 👑 Sesuai janji, ini reward spesial buat kamu:",
        voucher: "🎟️ VOUCHER: Bebas Minta Diturutin 3 Keinginan Hari Ini! ✨"
      },
      {
        badge: "💎 RANK: IMMORTAL DUO FAVORIT",
        minScore: 80,
        message: "Aim kamu keren bangeeet! Siap nge-carry aku nih pas kita mabar nanti! 🔥 Ini reward spesial buat kamu:",
        voucher: "🎟️ VOUCHER: Traktir Makanan / Kopi Favorit Kamu + Gendong Valo! ☕🎮"
      },
      {
        badge: "🌸 RANK: PLATINUM CUTIE",
        minScore: 0,
        message: "Aww tetep pemain favorit dan terlucu di hatiku! Nanti kita latihan aim bareng lagi yaa 🥰 Ini hadiah hiburan buat kamu:",
        voucher: "🎟️ VOUCHER: Peluk Erat + Dengerin Semua Cerita Kamu Seharian 💕"
      }
    ]
  }
};

