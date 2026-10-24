/**
 * Batch Task: TASK_fis-gel-optik-lensa_EASY
 * SubTopic: Lensa Cekung dan Cembung (fis-gel-optik-lensa)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-gel-optik-lensa-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-lensa",
    category: "Lensa Cekung dan Cembung",
    difficulty: "mudah",
    statement: "Sebuah lensa cembung memiliki jarak fokus $f = 25\\text{ cm}$. Kuat lensa (daya lensa) tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$+2\\text{ dioptri}$",
      "$+2{,}5\\text{ dioptri}$",
      "$+4\\text{ dioptri}$",
      "$+5\\text{ dioptri}$",
      "$+8\\text{ dioptri}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Kuat lensa atau daya lensa ($P$) dalam satuan dioptri didefinisikan sebagai kebalikan dari jarak fokus dalam meter ($f$), atau jika $f$ dalam sentimeter:<br>$$P = \\frac{100}{f\\text{ (cm)}}$$",
      steps: "1. Substitusikan nilai jarak fokus $f = +25\\text{ cm}$:<br>$$P = \\frac{100}{25} = +4\\text{ dioptri}$$<br>2. Kuat lensa cembung bernilai positif ($+4\\text{ D}$).<br>3. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Jangan membagi dengan 1 jika fokus masih dalam sentimeter ($1/25 = 0{,}04$). Pastikan mengonversi ke meter atau gunakan rumus $100/f$."
    }
  },
  {
    id: "fis-gel-optik-lensa-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-lensa",
    category: "Lensa Cekung dan Cembung",
    difficulty: "mudah",
    statement: "Sebuah benda diletakkan pada jarak $30\\text{ cm}$ di depan sebuah lensa cembung yang memiliki jarak fokus $20\\text{ cm}$. Jarak bayangan yang terbentuk di belakang lensa adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30\\text{ cm}$",
      "$40\\text{ cm}$",
      "$50\\text{ cm}$",
      "$60\\text{ cm}$",
      "$80\\text{ cm}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Persamaan lensa tipis menghubungkan jarak benda ($s$), jarak fokus ($f$), dan jarak bayangan ($s'$):<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$$",
      steps: "1. Substitusikan $f = +20\\text{ cm}$ dan $s = 30\\text{ cm}$:<br>$$\\frac{1}{s'} = \\frac{1}{20} - \\frac{1}{30}$$<br>2. Samakan penyebut KPK 60:<br>$$\\frac{1}{s'} = \\frac{3 - 2}{60} = \\frac{1}{60} \\implies s' = +60\\text{ cm}$$<br>3. Tanda positif menandakan bayangan nyata berada di belakang lensa.<br>4. Jawaban yang benar adalah pilihan D.",
      pitfalls: "Perhatikan bahwa pada lensa, bayangan nyata terletak di belakang lensa ($s' > 0$), berlawanan dengan cermin di mana bayangan nyata terletak di depan cermin."
    }
  },
  {
    id: "fis-gel-optik-lensa-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-lensa",
    category: "Lensa Cekung dan Cembung",
    difficulty: "mudah",
    statement: "Karakteristik utama dari lensa cekung (lensa negatif) ketika berkas sinar sejajar sumbu utama melaluinya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Mengumpulkan berkas sinar (konvergen) ke titik fokus nyata di belakang lensa",
      "Menyebarkan berkas sinar (divergen) seolah-olah berasal dari titik fokus maya di depan lensa",
      "Memantulkan seluruh berkas sinar kembali ke medium asal",
      "Meneruskan seluruh berkas sinar lurus tanpa pembiasan sama sekali",
      "Mengubah panjang gelombang dan warna cahaya menjadi monokromatik"
    ],
    correctIndex: 1,
    solution: {
      concept: "Lensa cekung memiliki bagian tengah yang lebih tipis dibandingkan bagian tepinya. Berkas sinar datang yang sejajar sumbu utama akan dibiaskan menyebar (divergen) sedemikian rupa sehingga perpanjangan sinar bias tersebut seolah-olah bersumber dari titik fokus maya ($F$) di depan lensa.",
      steps: "1. Analisis pembiasan lensa cekung: Sifat alaminya adalah divergen (menyebarkan sinar).<br>2. Berkas sinar dibiaskan menjauhi sumbu utama, dan garis perpanjangannya bertemu di titik fokus maya.<br>3. Pilihan yang tepat adalah opsi B.",
      pitfalls: "Opsi A adalah sifat lensa cembung (konvergen). Jangan tertukar antara lensa cembung yang bersifat konvergen dengan cermin cembung yang bersifat divergen."
    }
  },
  {
    id: "fis-gel-optik-lensa-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-lensa",
    category: "Lensa Cekung dan Cembung",
    difficulty: "mudah",
    statement: "Sebuah benda nyata diletakkan di depan lensa cekung pada jarak berapapun. Karakteristik bayangan yang SELALU dihasilkan oleh lensa cekung tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Maya, tegak, dan diperkecil",
      "Maya, tegak, dan diperbesar",
      "Nyata, terbalik, dan diperkecil",
      "Nyata, terbalik, dan diperbesar",
      "Nyata, tegak, dan sama besar"
    ],
    correctIndex: 0,
    solution: {
      concept: "Untuk setiap posisi benda nyata ($s > 0$) di depan lensa cekung ($f < 0$):<br>$$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s} < 0$$<br>Nilai $s'$ selalu negatif (maya, di depan lensa), bayangan selalu tegak ($M > 0$), dan $|s'| < s$ sehingga $|M| < 1$ (diperkecil).",
      steps: "1. Tinjau sifat pembentukan bayangan lensa divergen.<br>2. Untuk semua benda nyata di depan lensa cekung, bayangan yang terbentuk selalu berada di antara lensa dan titik fokus maya.<br>3. Sifat bayangan selalu maya, tegak, dan diperkecil.<br>4. Jawaban yang benar adalah pilihan A.",
      pitfalls: "Lensa cekung tidak pernah menghasilkan bayangan nyata dari sebuah benda nyata, sifatnya persis analog dengan cermin cembung."
    }
  },
  {
    id: "fis-gel-optik-lensa-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-lensa",
    category: "Lensa Cekung dan Cembung",
    difficulty: "mudah",
    statement: "Sebuah lensa cembung membentuk bayangan nyata pada jarak $40\\text{ cm}$ di belakang lensa dari sebuah benda yang diletakkan pada jarak $10\\text{ cm}$ di depan lensa. Perbesaran linier bayangan yang dialami benda tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}25\\text{ kali}$",
      "$2\\text{ kali}$",
      "$4\\text{ kali}$",
      "$5\\text{ kali}$",
      "$8\\text{ kali}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Perbesaran linier bayangan ($M$) pada lensa dihitung melalui perbandingan jarak bayangan terhadap jarak benda:<br>$$M = \\left|\\frac{s'}{s}\\right|$$",
      steps: "1. Substitusikan $s' = 40\\text{ cm}$ dan $s = 10\\text{ cm}$:<br>$$M = \\left|\\frac{40}{10}\\right| = 4\\text{ kali}$$<br>2. Bayangan berukuran 4 kali lebih besar daripada bendanya.<br>3. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Pastikan tidak membagi jarak benda dengan jarak bayangan ($10/40 = 0{,}25$). Nilai perbesaran adalah rasio $s'/s$."
    }
  }
];
