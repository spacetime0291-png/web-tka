/**
 * Batch Task: TASK_fis-termo-kalor-asasblack_EASY
 * SubTopic: Asas Black (fis-termo-kalor-asasblack)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-termo-kalor-asasblack-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-asasblack",
    category: "Asas Black Campuran Cairan Sejenis",
    difficulty: "mudah",
    statement: "Sebanyak $100\\text{ gram}$ air bersuhu $80^\\circ\\text{C}$ dicampurkan dengan $100\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$ di dalam wadah yang terisolasi sempurna. Jika pertukaran kalor dengan wadah dan udara luar diabaikan, suhu akhir kesetimbangan campuran air tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$40^\\circ\\text{C}$",
      "$45^\\circ\\text{C}$",
      "$50^\\circ\\text{C}$",
      "$55^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Berdasarkan Asas Black, pada sistem terisolasi berlaku kekekalan energi kalor:<br>$$Q_{\\text{lepas}} = Q_{\\text{serap}}$$Jika dua zat cair sejenis bermassa sama ($m_1 = m_2$) dicampurkan tanpa perubahan wujud, suhu kesetimbangan akhir adalah rata-rata aritmetika dari kedua suhu:<br>$$T_c = \\frac{T_1 + T_2}{2}$$",
      steps: "1. Identifikasi data: $m_1 = m_2 = 100\\text{ g}$, $T_1 = 80^\\circ\\text{C}$, $T_2 = 20^\\circ\\text{C}$.<br>2. Karena kedua massa dan kalor jenis zat sama, substitusikan ke formula:<br>$$T_c = \\frac{80^\\circ\\text{C} + 20^\\circ\\text{C}}{2} = \\frac{100^\\circ\\text{C}}{2} = 50^\\circ\\text{C}$$<br>3. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Rumus rata-rata sederhana $\\frac{T_1+T_2}{2}$ hanya boleh digunakan jika massa kedua cairan sama dan jenis zatnya identik. Jika massanya berbeda, perhitungan harus menggunakan persamaan Asas Black lengkap."
    }
  },
  {
    id: "fis-termo-kalor-asasblack-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-asasblack",
    category: "Pencampuran Air Berbeda Massa",
    difficulty: "mudah",
    statement: "Air panas bermassa $200\\text{ gram}$ pada suhu $80^\\circ\\text{C}$ dicampurkan ke dalam $100\\text{ gram}$ air dingin pada suhu $20^\\circ\\text{C}$. Jika tidak ada kalor yang diserap oleh wadah maupun lingkungan sekitar, suhu akhir kesetimbangan termal adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$40^\\circ\\text{C}$",
      "$50^\\circ\\text{C}$",
      "$55^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$65^\\circ\\text{C}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Persamaan Asas Black untuk dua massa zat cair yang sama jenisnya ($c_1 = c_2 = c$):<br>$$Q_{\\text{lepas}} = Q_{\\text{serap}} \\implies m_1 \\times c \\times (T_1 - T_c) = m_2 \\times c \\times (T_c - T_2)$$<br>Kalor jenis $c$ dapat disederhanakan dari kedua ruas.",
      steps: "1. Tulis persamaan kesetimbangan:<br>$$200 \\times (80 - T_c) = 100 \\times (T_c - 20)$$<br>2. Sederhanakan dengan membagi kedua ruas dengan 100:<br>$$2(80 - T_c) = 1(T_c - 20)$$<br>3. Selesaikan operasi aljabar:<br>$$160 - 2T_c = T_c - 20 \\implies 3T_c = 180 \\implies T_c = 60^\\circ\\text{C}$$<br>4. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jangan menghitung suhu akhir sebagai rata-rata sederhana $(80 + 20)/2 = 50^\\circ\\text{C}$ (opsi B). Karena massa air panas dua kali lebih banyak daripada air dingin, suhu akhir akan lebih condong mendekati suhu air panas."
    }
  },
  {
    id: "fis-termo-kalor-asasblack-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-asasblack",
    category: "Penentuan Kalor Jenis Zat Padat",
    difficulty: "mudah",
    statement: "Sepotong logam bermassa $100\\text{ gram}$ dipanaskan hingga suhunya mencapai $100^\\circ\\text{C}$, kemudian dimasukkan ke dalam bejana berisi $200\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$. Suhu akhir kesetimbangan termal sistem tercapai pada $25^\\circ\\text{C}$. Jika kalor jenis air $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$ dan kalor yang diserap bejana diabaikan, besar kalor jenis logam tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$280\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$420\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$560\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$700\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$840\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Kalor yang dilepas oleh logam sama dengan kalor yang diserap oleh air:<br>$$Q_{\\text{lepas}} = Q_{\\text{serap}} \\implies m_L \\times c_L \\times (T_L - T_c) = m_A \\times c_A \\times (T_c - T_A)$$",
      steps: "1. Identifikasi nilai besaran:<br>$m_L = 100\\text{ g} = 0{,}1\\text{ kg}$<br>$T_L = 100^\\circ\\text{C}$<br>$m_A = 200\\text{ g} = 0{,}2\\text{ kg}$<br>$T_A = 20^\\circ\\text{C}$<br>$T_c = 25^\\circ\\text{C}$<br>$c_A = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$<br>2. Masukkan ke rumus kesetimbangan:<br>$$0{,}1 \\times c_L \\times (100 - 25) = 0{,}2 \\times 4200 \\times (25 - 20)$$<br>$$0{,}1 \\times c_L \\times 75 = 0{,}2 \\times 4200 \\times 5$$<br>$$7{,}5 \\times c_L = 4200 \\implies c_L = \\frac{4200}{7{,}5} = 560\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$$<br>3. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Perhatikan perubahan suhu masing-masing zat: untuk logam $\\Delta T_L = 100 - 25 = 75^\\circ\\text{C}$, sedangkan untuk air $\\Delta T_A = 25 - 20 = 5^\\circ\\text{C}$."
    }
  },
  {
    id: "fis-termo-kalor-asasblack-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-asasblack",
    category: "Konsep Dasar dan Syarat Asas Black",
    difficulty: "mudah",
    statement: "Hukum pertukaran kalor yang menyatakan bahwa jumlah kalor yang dilepaskan oleh benda bersuhu tinggi sama dengan jumlah kalor yang diserap oleh benda bersuhu rendah ($Q_{\\text{lepas}} = Q_{\\text{serap}}$) dirumuskan oleh Joseph Black. Syarat fisis utama agar persamaan tersebut berlaku secara presisi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Kedua benda yang dicampur harus memiliki massa dan kalor jenis yang persis sama",
      "Proses pertukaran kalor harus terjadi dalam sistem terisolasi tanpa aliran kalor ke atau dari lingkungan",
      "Suhu salah satu benda harus berada di atas titik didih normal air ($100^\\circ\\text{C}$)",
      "Zat yang dicampurkan wajib mengalami perubahan wujud dari padat menjadi cair",
      "Pertukaran kalor dilakukan di bawah kondisi tekanan atmosfer yang dinaikkan 2 kali lipat"
    ],
    correctIndex: 1,
    solution: {
      concept: "Asas Black merupakan manifestasi dari Hukum I Termodinamika (Hukum Kekekalan Energi) pada pertukaran kalor. Persamaan $Q_{\\text{lepas}} = Q_{\\text{serap}}$ berlaku tepat apabila sistem bersifat terisolasi sempurna (adiabatik terhadap lingkungan luar), sehingga tidak ada energi kalor yang bocor ke lingkungan atau diserap dari lingkungan.",
      steps: "1. Pahami prinsip kekekalan energi: energi tidak dapat diciptakan maupun dimusnahkan.<br>2. Pada pertukaran termal, kalor yang lepas dari zat panas harus sepenuhnya masuk ke zat dingin.<br>3. Jika wadah tidak terisolasi, sebagian kalor akan hilang ke lingkungan sekitar sehingga $Q_{\\text{lepas}} > Q_{\\text{serap}}$.<br>4. Jadi, syarat utama berlakunya Asas Black adalah proses berlangsung dalam sistem yang terisolasi sempurna.<br>5. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Asas Black berlaku untuk segala jenis benda dan massa yang berbeda, tidak memerlukan perubahan wujud zat, serta tidak mensyaratkan kondisi suhu atau tekanan ekstrem tertentu."
    }
  },
  {
    id: "fis-termo-kalor-asasblack-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-asasblack",
    category: "Peleburan Es dalam Air Hangat",
    difficulty: "mudah",
    statement: "Potongan es bersuhu $0^\\circ\\text{C}$ dimasukkan ke dalam sebuah bejana terisolasi yang berisi $500\\text{ gram}$ air bersuhu $40^\\circ\\text{C}$. Diketahui kalor jenis air adalah $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$ dan kalor lebur es adalah $336.000\\text{ J/kg}$. Jika seluruh es tepat melebur habis dan suhu akhir campuran air mencapai $0^\\circ\\text{C}$, massa es yang dimasukkan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$125\\text{ gram}$",
      "$200\\text{ gram}$",
      "$250\\text{ gram}$",
      "$300\\text{ gram}$",
      "$350\\text{ gram}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada suhu akhir kesetimbangan $0^\\circ\\text{C}$ dengan seluruh es melebur sempurna:<br>- Air hangat melepaskan kalor untuk mendingin dari $40^\\circ\\text{C}$ ke $0^\\circ\\text{C}$: $Q_{\\text{lepas}} = m_A \\times c_A \\times \\Delta T_A$.<br>- Es pada $0^\\circ\\text{C}$ menyerap kalor murni untuk melebur menjadi air pada $0^\\circ\\text{C}$: $Q_{\\text{serap}} = m_{\\text{es}} \\times L$.<br>- Berdasarkan Asas Black: $Q_{\\text{lepas}} = Q_{\\text{serap}}$.",
      steps: "1. Konversi massa air hangat: $m_A = 500\\text{ g} = 0{,}5\\text{ kg}$.<br>2. Hitung kalor yang dilepas air pendingin:<br>$$Q_{\\text{lepas}} = 0{,}5\\text{ kg} \\times 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}) \\times (40 - 0)^\\circ\\text{C} = 2100 \\times 40 = 84.000\\text{ J}$$<br>3. Samakan dengan kalor lebur es:<br>$$m_{\\text{es}} \\times 336.000 = 84.000 \\implies m_{\\text{es}} = \\frac{84.000}{336.000} = 0{,}25\\text{ kg} = 250\\text{ gram}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Karena suhu akhir tepat $0^\\circ\\text{C}$, es yang telah mencair tidak mengalami kenaikan suhu di atas $0^\\circ\\text{C}$ sehingga tidak ada komponen penyerapan kalor sensibel ($mc\\Delta T$) untuk air hasil leburan es."
    }
  }
];
