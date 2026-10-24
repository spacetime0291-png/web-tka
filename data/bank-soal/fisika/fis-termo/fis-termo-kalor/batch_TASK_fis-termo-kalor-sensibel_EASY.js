/**
 * Batch Task: TASK_fis-termo-kalor-sensibel_EASY
 * SubTopic: Kalor Sensibel & Kalor Laten (fis-termo-kalor-sensibel)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-termo-kalor-sensibel-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-sensibel",
    category: "Kalor Sensibel & Kapasitas Kalor",
    difficulty: "mudah",
    statement: "Sebanyak $3\\text{ kg}$ air murni bersuhu $25^\\circ\\text{C}$ dipanaskan sampai suhunya mencapai $65^\\circ\\text{C}$. Jika kalor jenis air adalah $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$, banyak kalor yang diserap oleh air tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$252\\text{ kJ}$",
      "$378\\text{ kJ}$",
      "$504\\text{ kJ}$",
      "$630\\text{ kJ}$",
      "$756\\text{ kJ}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Kalor sensibel ($Q$) adalah energi kalor yang diserap atau dilepaskan suatu zat yang menyebabkan perubahan suhu tanpa mengalami perubahan wujud:<br>$$Q = m \\times c \\times \\Delta T$$",
      steps: "1. Hitung perubahan suhu air: $\\Delta T = 65^\\circ\\text{C} - 25^\\circ\\text{C} = 40^\\circ\\text{C}$.<br>2. Masukkan ke rumus kalor:<br>$$Q = 3\\text{ kg} \\times 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}) \\times 40^\\circ\\text{C} = 504.000\\text{ Joule}$$<br>3. Konversi ke kiloJoule: $Q = 504\\text{ kJ}$.<br>4. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Pastikan menggunakan $\\Delta T$ (selisih suhu akhir dan suhu awal yaitu $40^\\circ\\text{C}$), bukan suhu akhir $65^\\circ\\text{C}$ atau suhu awal $25^\\circ\\text{C}$."
    }
  },
  {
    id: "fis-termo-kalor-sensibel-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-sensibel",
    category: "Kalor Sensibel & Kapasitas Kalor",
    difficulty: "mudah",
    statement: "Suatu bejana logam membutuhkan kalor sebesar $12.000\\text{ Joule}$ untuk menaikkan suhunya dari $20^\\circ\\text{C}$ menjadi $60^\\circ\\text{C}$. Kapasitas kalor dari bejana logam tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$150\\text{ J}/^\\circ\\text{C}$",
      "$200\\text{ J}/^\\circ\\text{C}$",
      "$300\\text{ J}/^\\circ\\text{C}$",
      "$400\\text{ J}/^\\circ\\text{C}$",
      "$600\\text{ J}/^\\circ\\text{C}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Kapasitas kalor ($C$) menyatakan banyaknya kalor yang diperlukan suatu benda utuh untuk menaikkan suhunya sebesar $1^\\circ\\text{C}$:<br>$$C = \\frac{Q}{\\Delta T}$$",
      steps: "1. Hitung perubahan suhu: $\\Delta T = 60^\\circ\\text{C} - 20^\\circ\\text{C} = 40^\\circ\\text{C}$.<br>2. Masukkan nilai $Q = 12.000\\text{ J}$:<br>$$C = \\frac{12.000\\text{ J}}{40^\\circ\\text{C}} = 300\\text{ J}/^\\circ\\text{C}$$<br>3. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Perhatikan perbedaan antara kalor jenis ($c$, per satuan massa, satuan $\\text{J}/(\\text{kg}\\cdot^\\circ\\text{C})$) dan kapasitas kalor ($C$, untuk seluruh massa benda, satuan $\\text{J}/^\\circ\\text{C}$)."
    }
  },
  {
    id: "fis-termo-kalor-sensibel-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-sensibel",
    category: "Kalor Sensibel & Kapasitas Kalor",
    difficulty: "mudah",
    statement: "Sebanyak $500\\text{ gram}$ es bersuhu tepat $0^\\circ\\text{C}$ hendak dileburkan seluruhnya menjadi air pada suhu $0^\\circ\\text{C}$. Jika kalor lebur es adalah $L = 336.000\\text{ J/kg}$, jumlah kalor yang dibutuhkan untuk proses peleburan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$84\\text{ kJ}$",
      "$168\\text{ kJ}$",
      "$336\\text{ kJ}$",
      "$504\\text{ kJ}$",
      "$672\\text{ kJ}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kalor laten lebur ($Q$) adalah kalor yang dibutuhkan untuk mengubah wujud zat dari padat menjadi cair pada titik leburnya tanpa adanya kenaikan suhu:<br>$$Q = m \\times L$$",
      steps: "1. Konversikan massa ke satuan kilogram: $m = 500\\text{ g} = 0{,}5\\text{ kg}$.<br>2. Masukkan ke rumus kalor lebur:<br>$$Q = 0{,}5\\text{ kg} \\times 336.000\\text{ J/kg} = 168.000\\text{ Joule}$$<br>3. Ubah ke satuan kiloJoule: $Q = 168\\text{ kJ}$.<br>4. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Pastikan massa selalu dikonversikan ke satuan SI kilogram ($0{,}5\\text{ kg}$). Jika menggunakan $500$, nilai kalor akan salah sebesar faktor seribu."
    }
  },
  {
    id: "fis-termo-kalor-sensibel-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-sensibel",
    category: "Kalor Sensibel & Kapasitas Kalor",
    difficulty: "mudah",
    statement: "Sebanyak $200\\text{ gram}$ air bersuhu $100^\\circ\\text{C}$ diuapkan seluruhnya menjadi uap air pada suhu $100^\\circ\\text{C}$. Jika kalor uap air adalah $U = 2{,}26 \\times 10^6\\text{ J/kg}$, besar kalor yang diserap air untuk penguapan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$226\\text{ kJ}$",
      "$452\\text{ kJ}$",
      "$678\\text{ kJ}$",
      "$904\\text{ kJ}$",
      "$1130\\text{ kJ}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kalor laten penguapan ($Q$) adalah energi kalor yang diserap suatu zat untuk mengubah wujudnya dari cair menjadi gas pada titik didihnya:<br>$$Q = m \\times U$$",
      steps: "1. Konversi massa air ke kilogram: $m = 200\\text{ gram} = 0{,}2\\text{ kg}$.<br>2. Hitung kalor penguapan:<br>$$Q = 0{,}2\\text{ kg} \\times 2{,}26 \\times 10^6\\text{ J/kg} = 0{,}452 \\times 10^6\\text{ J} = 452.000\\text{ Joule}$$<br>3. Konversi ke satuan kiloJoule: $Q = 452\\text{ kJ}$.<br>4. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Pada saat terjadi perubahan wujud (melebur atau mendidih), suhu zat tetap konstan sehingga rumus yang digunakan adalah $Q = mL$ atau $Q = mU$, bukan $Q = mc\\Delta T$."
    }
  },
  {
    id: "fis-termo-kalor-sensibel-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-sensibel",
    category: "Kalor Sensibel & Kapasitas Kalor",
    difficulty: "mudah",
    statement: "Besaran fisika yang menyatakan banyaknya kalor yang dibutuhkan untuk menaikkan suhu $1\\text{ kg}$ suatu zat sebesar $1^\\circ\\text{C}$ tanpa mengubah wujud zat tersebut didefinisikan sebagai ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Kalor laten",
      "Kalor lebur",
      "Kalor jenis",
      "Kapasitas kalor",
      "Konduktivitas termal"
    ],
    correctIndex: 2,
    solution: {
      concept: "Kalor jenis ($c$) adalah karakteristik termal intrinsik suatu zat yang didefinisikan sebagai jumlah kalor yang diserap per satuan massa per kenaikan satu satuan suhu:<br>$$c = \\frac{Q}{m \\times \\Delta T}$$<br>Satuan standarnya dalam SI adalah $\\text{J}/(\\text{kg}\\cdot^\\circ\\text{C})$ atau $\\text{J}/(\\text{kg}\\cdot\\text{K})$.",
      steps: "1. Tinjau definisi besaran-besaran termal.<br>2. Besaran per satuan massa zat untuk kenaikan $1^\\circ\\text{C}$ adalah kalor jenis.<br>3. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Jangan tertukar dengan kapasitas kalor ($C = mc$) yang tidak memperhitungkan per satuan massa, atau kalor laten yang berhubungan dengan perubahan wujud pada suhu tetap."
    }
  }
];
