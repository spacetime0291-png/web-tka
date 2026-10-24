/**
 * Batch Task: TASK_fis-termo-hukum-hukum1_EASY
 * SubTopic: Hukum I Termodinamika (fis-termo-hukum-hukum1)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-termo-hukum-hukum1-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum1",
    category: "Formulasi Dasar Hukum I Termodinamika",
    difficulty: "mudah",
    statement: "Suatu sistem gas ideal menyerap kalor dari lingkungan sebesar $800\\text{ Joule}$. Pada saat yang bersamaan, gas tersebut berekspansi dan melakukan usaha luar sebesar $300\\text{ Joule}$. Besar perubahan energi dalam ($\\Delta U$) sistem gas tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$300\\text{ Joule}$",
      "$500\\text{ Joule}$",
      "$800\\text{ Joule}$",
      "$1100\\text{ Joule}$",
      "$2400\\text{ Joule}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Hukum I Termodinamika menyatakan prinsip kekekalan energi pada sistem termal:<br>$$\\Delta U = Q - W \\quad \\text{atau} \\quad Q = \\Delta U + W$$<br>dengan $Q$ adalah kalor yang diserap sistem dan $W$ usaha luar yang dilakukan oleh sistem.",
      steps: "1. Data besaran:<br>Kalor diserap sistem: $Q = +800\\text{ Joule}$<br>Usaha dilakukan sistem: $W = +300\\text{ Joule}$<br>2. Masukkan ke rumus Hukum I Termodinamika:<br>$$\\Delta U = Q - W = 800\\text{ J} - 300\\text{ J} = +500\\text{ Joule}$$<br>3. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Jika keliru menjumlahkan $Q$ dan $W$ ($800 + 300 = 1100\\text{ J}$, opsi D), perhatikan bahwa usaha yang dilakukan oleh gas mengurangi energi internal gas ($Q - W$)."
    }
  },
  {
    id: "fis-termo-hukum-hukum1-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum1",
    category: "Penerapan Aturan Tanda Kalor dan Usaha",
    difficulty: "mudah",
    statement: "Suatu sistem gas melepaskan kalor ke lingkungan sebesar $500\\text{ Joule}$. Pada saat yang bersamaan, lingkungan melakukan usaha pada gas sebesar $200\\text{ Joule}$. Perubahan energi dalam ($\\Delta U$) gas tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-700\\text{ Joule}$",
      "$-300\\text{ Joule}$",
      "$+300\\text{ Joule}$",
      "$+700\\text{ Joule}$",
      "$0\\text{ Joule}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Aturan konvensi tanda dalam Hukum I Termodinamika ($\\Delta U = Q - W$):<br>- Sistem melepaskan kalor ke lingkungan: $Q < 0$ (negatif)<br>- Lingkungan melakukan usaha pada sistem (kompresi): $W < 0$ (negatif)",
      steps: "1. Tentukan tanda masing-masing variabel:<br>$Q = -500\\text{ Joule}$ (kalor keluar/dilepas)<br>$W = -200\\text{ Joule}$ (usaha dilakukan pada sistem)<br>2. Hitung perubahan energi dalam $\\Delta U$:<br>$$\\Delta U = Q - W = (-500) - (-200) = -500 + 200 = -300\\text{ Joule}$$<br>3. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Hati-hati dengan tanda negatif ganda: $-(-200) = +200$. Jika salah mengartikan tanda usaha, hasilnya bisa menjadi $-700\\text{ Joule}$ (opsi A)."
    }
  },
  {
    id: "fis-termo-hukum-hukum1-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum1",
    category: "Hukum I pada Proses Isotermal",
    difficulty: "mudah",
    statement: "Sejumlah gas ideal mengalami pemuaian secara isotermal (suhu konstan) di dalam silinder. Selama proses ekspansi tersebut, gas menyerap kalor sebesar $1500\\text{ Joule}$ dari reservoir panas. Besar usaha luar yang dilakukan oleh gas adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0\\text{ Joule}$",
      "$750\\text{ Joule}$",
      "$1500\\text{ Joule}$",
      "$3000\\text{ Joule}$",
      "Tidak dapat ditentukan tanpa mengetahui volume awal"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada proses isotermal gas ideal, suhu gas bernilai konstan ($\\Delta T = 0$).<br>Karena energi dalam gas ideal murni fungsi suhu mutlak, maka perubahan energi dalam pada proses isotermal selalu bernilai nol:<br>$$\\Delta U = 0$$<br>Berdasarkan Hukum I Termodinamika: $\\Delta U = Q - W \\implies 0 = Q - W \\implies W = Q$.",
      steps: "1. Identifikasi karakteristik proses: isotermal $\\implies \\Delta T = 0 \\implies \\Delta U = 0$.<br>2. Hubungkan kalor dan usaha: $W = Q$.<br>3. Karena $Q = 1500\\text{ Joule}$, maka usaha luar $W = 1500\\text{ Joule}$.<br>4. Seluruh kalor yang diserap gas dikonversikan seutuhnya menjadi usaha luar mekanik pada proses isotermal.<br>5. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jangan mengira usaha luar bernilai nol (opsi A). Yang bernilai nol pada proses isotermal adalah perubahan energi dalamnya ($\\Delta U = 0$), bukan usahanya ($W = Q$)."
    }
  },
  {
    id: "fis-termo-hukum-hukum1-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum1",
    category: "Hukum I pada Proses Isokhorik",
    difficulty: "mudah",
    statement: "Sebuah tabung gas kaku bervolume tetap menyerap energi kalor sebesar $2400\\text{ Joule}$ saat dipanaskan. Besar perubahan energi dalam ($\\Delta U$) gas ideal di dalam tabung tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0\\text{ Joule}$",
      "$1200\\text{ Joule}$",
      "$2400\\text{ Joule}$",
      "$3600\\text{ Joule}$",
      "$4800\\text{ Joule}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada proses isokhorik (volume konstan), gas tidak mengalami perubahan volume ($\\Delta V = 0$) sehingga usaha luar bernilai nol:<br>$$W = 0$$<br>Berdasarkan Hukum I Termodinamika: $\\Delta U = Q - W \\implies \\Delta U = Q$. Seluruh kalor yang diserap semata-mata digunakan untuk meningkatkan energi dalam gas.",
      steps: "1. Karakteristik proses: volume tetap $\\implies W = 0$.<br>2. Terapkan Hukum I Termodinamika:<br>$$\\Delta U = Q - 0 = Q$$<br>3. Karena kalor yang diserap $Q = 2400\\text{ Joule}$, maka $\\Delta U = 2400\\text{ Joule}$.<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Pada proses volume tetap, tidak ada kerja mekanik yang dilakukan pada piston/lingkungan, sehingga $100\\%$ energi kalor masuk langsung menaikkan suhu dan energi dalam molekul gas."
    }
  },
  {
    id: "fis-termo-hukum-hukum1-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum1",
    category: "Hukum I pada Proses Adiabatik",
    difficulty: "mudah",
    statement: "Suatu gas ideal di dalam wadah berinsulasi termal mengalami ekspansi adiabatik dan melakukan usaha luar sebesar $650\\text{ Joule}$ pada lingkungan. Perubahan energi dalam ($\\Delta U$) gas tersebut selama proses ekspansi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-650\\text{ Joule}$",
      "$0\\text{ Joule}$",
      "$+325\\text{ Joule}$",
      "$+650\\text{ Joule}$",
      "$+1300\\text{ Joule}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada proses adiabatik, sistem tidak mengalami pertukaran kalor dengan lingkungan sekitarnya ($Q = 0$).<br>Persamaan Hukum I Termodinamika menjadi:<br>$$\\Delta U = Q - W = 0 - W = -W$$",
      steps: "1. Karakteristik adiabatik: $Q = 0$.<br>2. Data usaha: gas melakukan usaha $\\implies W = +650\\text{ Joule}$.<br>3. Hitung $\\Delta U$:<br>$$\\Delta U = -W = -650\\text{ Joule}$$<br>4. Energi dalam gas berkurang sebesar $650\\text{ Joule}$ yang ditandai dengan penurunan suhu gas.<br>5. Jawaban yang tepat adalah pilihan A.",
      pitfalls: "Perhatikan tanda negatif: karena tidak ada pasokan kalor dari luar, usaha yang dilakukan gas diambil langsung dari stok energi dalamnya sendiri, sehingga $\\Delta U$ bernilai negatif (suhu gas mendingin)."
    }
  }
];
