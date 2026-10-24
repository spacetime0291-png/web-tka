/**
 * Batch Task: TASK_fis-gel-optik-cermin_EASY
 * SubTopic: Cermin Datar, Cekung, dan Cembung (fis-gel-optik-cermin)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-gel-optik-cermin-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-cermin",
    category: "Cermin Cekung dan Cembung",
    difficulty: "mudah",
    statement: "Sebuah cermin cekung memiliki jari-jari kelengkungan $R = 40\\text{ cm}$. Jarak fokus cermin cekung tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ cm}$",
      "$20\\text{ cm}$",
      "$40\\text{ cm}$",
      "$60\\text{ cm}$",
      "$80\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Jarak fokus cermin sferis ($f$) merupakan setengah dari panjang jari-jari kelengkungannya ($R$):<br>$$f = \\frac{R}{2}$$<br>Untuk cermin cekung, jarak fokus bernilai positif ($f > 0$).",
      steps: "1. Diketahui jari-jari kelengkungan $R = 40\\text{ cm}$.<br>2. Hitung jarak fokus:<br>$$f = \\frac{40\\text{ cm}}{2} = +20\\text{ cm}$$<br>3. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Jangan mengalikan jari-jari dengan 2 yang menghasilkan 80 cm. Titik fokus terletak di tengah-tengah antara puncak cermin dan pusat kelengkungan."
    }
  },
  {
    id: "fis-gel-optik-cermin-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-cermin",
    category: "Cermin Cekung dan Cembung",
    difficulty: "mudah",
    statement: "Sebuah benda diletakkan pada jarak $20\\text{ cm}$ di depan cermin cekung dan menghasilkan bayangan nyata pada jarak $60\\text{ cm}$ di depan cermin. Perbesaran linier bayangan yang terbentuk adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}33\\text{ kali}$",
      "$1{,}5\\text{ kali}$",
      "$2\\text{ kali}$",
      "$3\\text{ kali}$",
      "$4\\text{ kali}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Perbesaran linier bayangan ($M$) pada cermin lengkung didefinisikan sebagai perbandingan nilai mutlak jarak bayangan ($s'$) terhadap jarak benda ($s$):<br>$$M = \\left|\\frac{s'}{s}\\right|$$",
      steps: "1. Diketahui $s = 20\\text{ cm}$ dan $s' = 60\\text{ cm}$.<br>2. Hitung perbesaran linier:<br>$$M = \\left|\\frac{60}{20}\\right| = 3\\text{ kali}$$<br>3. Jawaban yang benar adalah pilihan D.",
      pitfalls: "Pastikan pembilang adalah jarak bayangan ($s'$) dan penyebut adalah jarak benda ($s$). Jika terbalik akan memperoleh nilai $20/60 = 0{,}33$ (opsi A)."
    }
  },
  {
    id: "fis-gel-optik-cermin-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-cermin",
    category: "Cermin Cekung dan Cembung",
    difficulty: "mudah",
    statement: "Berdasarkan prinsip sinar-sinar istimewa pada cermin cekung, seberkas sinar datang yang merambat sejajar dengan sumbu utama cermin akan dipantulkan ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Melalui titik fokus cermin",
      "Seolah-olah berasal dari titik fokus di belakang cermin",
      "Melalui titik pusat kelengkungan cermin",
      "Sejajar kembali dengan sumbu utama cermin",
      "Tegak lurus terhadap sumbu utama cermin"
    ],
    correctIndex: 0,
    solution: {
      concept: "Tiga sinar istimewa pada cermin cekung:<br>1. Sinar datang sejajar sumbu utama dipantulkan <strong>melalui titik fokus ($F$)</strong>.<br>2. Sinar datang melalui titik fokus dipantulkan sejajar sumbu utama.<br>3. Sinar datang melalui titik pusat kelengkungan ($M$) dipantulkan kembali melalui jalur yang sama.",
      steps: "1. Analisis sifat sinar datang sejajar sumbu utama: Cermin cekung bersifat mengumpulkan sinar (konvergen).<br>2. Berkas sinar pantul diarahkan memotong sumbu utama tepat di titik fokus ($F$).<br>3. Pilihan yang tepat adalah opsi A.",
      pitfalls: "Opsi B adalah karakteristik sinar istimewa pada cermin cembung (menyebarkan sinar seolah berasal dari fokus di belakang cermin)."
    }
  },
  {
    id: "fis-gel-optik-cermin-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-cermin",
    category: "Cermin Cekung dan Cembung",
    difficulty: "mudah",
    statement: "Sebuah lilin berada pada jarak $12\\text{ cm}$ di depan sebuah cermin cekung yang memiliki jarak fokus $8\\text{ cm}$. Jarak bayangan yang terbentuk dari permukaan cermin adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$16\\text{ cm}$",
      "$20\\text{ cm}$",
      "$24\\text{ cm}$",
      "$28\\text{ cm}$",
      "$32\\text{ cm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Hubungan jarak benda ($s$), jarak bayangan ($s'$), dan jarak fokus cermin ($f$) memenuhi persamaan Gauss:<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$$",
      steps: "1. Diketahui $s = 12\\text{ cm}$ dan $f = +8\\text{ cm}$.<br>2. Masukkan ke rumus cermin:<br>$$\\frac{1}{s'} = \\frac{1}{8} - \\frac{1}{12}$$<br>3. Samakan penyebut KPK 24:<br>$$\\frac{1}{s'} = \\frac{3 - 2}{24} = \\frac{1}{24} \\implies s' = +24\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Hati-hati saat menyamakan penyebut pecahan. Pastikan tidak menjumlahkan penyebut secara langsung."
    }
  },
  {
    id: "fis-gel-optik-cermin-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-cermin",
    category: "Cermin Cekung dan Cembung",
    difficulty: "mudah",
    statement: "Sebuah cermin cembung memiliki jari-jari kelengkungan $30\\text{ cm}$. Berdasarkan konvensi tanda optik geometris, nilai jarak fokus cermin cembung tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$+30\\text{ cm}$",
      "$+15\\text{ cm}$",
      "$0\\text{ cm}$",
      "$-15\\text{ cm}$",
      "$-30\\text{ cm}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Cermin cembung memiliki titik fokus di belakang permukaan pemantul (bersifat maya/divergen). Oleh karena itu, jarak fokusnya selalu bernilai negatif:<br>$$f = -\\frac{R}{2}$$",
      steps: "1. Diketahui $R = 30\\text{ cm}$.<br>2. Hitung jarak fokus bertanda negatif:<br>$$f = -\\frac{30\\text{ cm}}{2} = -15\\text{ cm}$$<br>3. Jawaban yang benar adalah pilihan D.",
      pitfalls: "Lupa menyertakan tanda negatif pada fokus cermin cembung adalah kesalahan yang paling sering terjadi saat menyelesaikan soal optik geometris."
    }
  }
];
