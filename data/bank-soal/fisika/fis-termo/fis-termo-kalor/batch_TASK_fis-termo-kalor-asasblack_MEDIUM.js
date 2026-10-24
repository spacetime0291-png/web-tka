/**
 * Batch Task: TASK_fis-termo-kalor-asasblack_MEDIUM
 * SubTopic: Asas Black (fis-termo-kalor-asasblack)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-termo-kalor-asasblack-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-asasblack",
    category: "Campuran Es Sub-Nol dan Air Hangat",
    difficulty: "sedang",
    statement: "Sebongkah es bermassa $100\\text{ gram}$ pada suhu $-10^\\circ\\text{C}$ dimasukkan ke dalam wadah terisolasi yang berisi $400\\text{ gram}$ air bersuhu $50^\\circ\\text{C}$. Diketahui kalor jenis es $c_{\\text{es}} = 2100\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$, kalor lebur es $L = 336.000\\text{ J/kg}$, dan kalor jenis air $c_{\\text{air}} = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$. Jika kapasitas kalor wadah diabaikan, suhu akhir campuran pada keadaan kesetimbangan termal adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$15^\\circ\\text{C}$",
      "$18^\\circ\\text{C}$",
      "$20^\\circ\\text{C}$",
      "$23^\\circ\\text{C}$",
      "$26^\\circ\\text{C}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Proses pencampuran es bersuhu di bawah nol dengan air hangat melibatkan tiga kemungkinan penyerapan kalor oleh es:<br>1. Pemanasan es dari $-10^\\circ\\text{C}$ ke $0^\\circ\\text{C}$: $Q_1 = m_{\\text{es}} c_{\\text{es}} \\Delta T_1$.<br>2. Peleburan es menjadi air pada $0^\\circ\\text{C}$: $Q_2 = m_{\\text{es}} L$.<br>3. Pemanasan air leburan dari $0^\\circ\\text{C}$ ke $T_c$: $Q_3 = m_{\\text{es}} c_{\\text{air}} T_c$.<br>Kalor dilepaskan oleh air hangat yang mendingin dari $50^\\circ\\text{C}$ ke $T_c$: $Q_{\\text{lepas}} = m_{\\text{air}} c_{\\text{air}} (50 - T_c)$.",
      steps: "1. Konversi data: $m_{\\text{es}} = 0{,}1\\text{ kg}$, $m_{\\text{air}} = 0{,}4\\text{ kg}$.<br>2. Hitung kalor untuk menaikkan suhu es ke $0^\\circ\\text{C}$ dan melebur seluruhnya:<br>$$Q_1 = 0{,}1 \\times 2100 \\times 10 = 2100\\text{ J}$$<br>$$Q_2 = 0{,}1 \\times 336.000 = 33.600\\text{ J}$$<br>$$Q_{\\text{serap, total}} = 2100 + 33.600 = 35.700\\text{ J}$$<br>3. Hitung kalor maksimum yang dapat dilepas air hangat jika suhunya turun hingga $0^\\circ\\text{C}$:<br>$$Q_{\\text{lepas, maks}} = 0{,}4 \\times 4200 \\times 50 = 84.000\\text{ J}$$<br>Karena $84.000\\text{ J} > 35.700\\text{ J}$, seluruh es mencair dan suhu akhir $T_c > 0^\\circ\\text{C}$.<br>4. Susun persamaan Asas Black:<br>$$Q_{\\text{lepas}} = Q_1 + Q_2 + Q_3$$<br>$$0{,}4 \\times 4200 \\times (50 - T_c) = 35.700 + 0{,}1 \\times 4200 \\times T_c$$<br>$$1680(50 - T_c) = 35.700 + 420 T_c$$<br>$$84.000 - 1680 T_c = 35.700 + 420 T_c$$<br>$$2100 T_c = 84.000 - 35.700 = 48.300 \\implies T_c = \\frac{48.300}{2100} = 23^\\circ\\text{C}$$<br>5. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Lupa memperhitungkan kalor jenis es ($c_{\\text{es}} = 2100\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$) saat es naik suhunya dari $-10^\\circ\\text{C}$ ke $0^\\circ\\text{C}$, atau keliru menggunakan kalor jenis air $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$ untuk fase es padat."
    }
  },
  {
    id: "fis-termo-kalor-asasblack-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-asasblack",
    category: "Kapasitas Kalor Kalorimeter Diperhitungkan",
    difficulty: "sedang",
    statement: "Sebuah kalorimeter dengan kapasitas kalor $C_{\\text{kal}} = 160\\text{ J}/^\\circ\\text{C}$ berisi $200\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$. Ke dalam kalorimeter tersebut dimasukkan potongan logam bermassa $400\\text{ gram}$ bersuhu $80^\\circ\\text{C}$. Jika kalor jenis air adalah $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$ dan suhu akhir kesetimbangan termal adalah $30^\\circ\\text{C}$, kalor jenis potongan logam tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$350\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$420\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$500\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$580\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$640\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Jika wadah (kalorimeter) ikut menyerap kalor, maka kalor yang dilepas oleh benda panas sama dengan jumlah kalor yang diserap oleh air ditambah kalor yang diserap oleh kalorimeter:<br>$$Q_{\\text{lepas}} = Q_{\\text{serap, air}} + Q_{\\text{serap, wadah}}$$<br>$$m_L \\times c_L \\times (T_L - T_c) = (m_{\\text{air}} c_{\\text{air}} + C_{\\text{kal}}) \\times (T_c - T_{\\text{awal}})$$",
      steps: "1. Data: $m_L = 0{,}4\\text{ kg}$, $T_L = 80^\\circ\\text{C}$, $T_c = 30^\\circ\\text{C}$, $T_{\\text{awal}} = 20^\\circ\\text{C}$, $m_{\\text{air}} = 0{,}2\\text{ kg}$, $c_{\\text{air}} = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$, $C_{\\text{kal}} = 160\\text{ J}/^\\circ\\text{C}$.<br>2. Hitung kalor yang diserap oleh air dan bejana kalorimeter:<br>$$Q_{\\text{serap}} = (0{,}2 \\times 4200 + 160) \\times (30 - 20) = (840 + 160) \\times 10 = 1000 \\times 10 = 10.000\\text{ J}$$<br>3. Hitung kalor yang dilepas logam:<br>$$Q_{\\text{lepas}} = 0{,}4 \\times c_L \\times (80 - 30) = 0{,}4 \\times c_L \\times 50 = 20 c_L$$<br>4. Samakan kedua nilai kalor:<br>$$20 c_L = 10.000 \\implies c_L = \\frac{10.000}{20} = 500\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}$$<br>5. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jika kapasitas kalor wadah ($C_{\\text{kal}}$) diabaikan, perhitungan hanya menghasilkan $Q_{\\text{serap}} = 840 \\times 10 = 8400\\text{ J}$, yang memberikan $c_L = 8400 / 20 = 420\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$ (opsi B). Wadah menyerap porsi kalor yang nyata."
    }
  },
  {
    id: "fis-termo-kalor-asasblack-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-asasblack",
    category: "Pencampuran Tiga Cairan Sejenis",
    difficulty: "sedang",
    statement: "Tiga buah sampel air dengan massa dan suhu yang berbeda dicampurkan dalam satu wadah kalorimeter ideal yang kedap kalor:<br>- Sampel 1: $100\\text{ gram}$ pada suhu $20^\\circ\\text{C}$<br>- Sampel 2: $200\\text{ gram}$ pada suhu $50^\\circ\\text{C}$<br>- Sampel 3: $300\\text{ gram}$ pada suhu $80^\\circ\\text{C}$<br>Suhu akhir kesetimbangan termal campuran ketiga sampel air tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$50^\\circ\\text{C}$",
      "$55^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$65^\\circ\\text{C}$",
      "$70^\\circ\\text{C}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Untuk pencampuran beberapa sampel zat yang sejenis tanpa perubahan wujud, persamaan Asas Black $\\sum Q = 0$ menghasilkan rumus rata-rata tertimbang (weighted average) terhadap massa:<br>$$T_c = \\frac{\\sum_{i=1}^n m_i T_i}{\\sum_{i=1}^n m_i}$$",
      steps: "1. Tulis pembilang (jumlah perkalian massa dan suhu):<br>$$\\sum m_i T_i = (100 \\times 20) + (200 \\times 50) + (300 \\times 80)$$<br>$$\\sum m_i T_i = 2000 + 10.000 + 24.000 = 36.000\\text{ g}\\cdot^\\circ\\text{C}$$<br>2. Tulis penyebut (massa total campuran):<br>$$\\sum m_i = 100 + 200 + 300 = 600\\text{ gram}$$<br>3. Hitung suhu campuran $T_c$:<br>$$T_c = \\frac{36.000}{600} = 60^\\circ\\text{C}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jangan menghitung suhu akhir sebagai rata-rata aritmetika biasa $\\frac{20 + 50 + 80}{3} = 50^\\circ\\text{C}$ (opsi A). Sampel air panas ($80^\\circ\\text{C}$) memiliki massa terbesar ($300\\text{ g}$) sehingga suhu akhir terdorong ke atas $50^\\circ\\text{C}$."
    }
  },
  {
    id: "fis-termo-kalor-asasblack-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-asasblack",
    category: "Kesetimbangan Campuran Dua Fase Es dan Air",
    difficulty: "sedang",
    statement: "Sebanyak $200\\text{ gram}$ es bersuhu $0^\\circ\\text{C}$ dimasukkan ke dalam wadah terisolasi yang berisi $300\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$. Diketahui kalor lebur es $L = 336.000\\text{ J/kg}$ dan kalor jenis air $c_{\\text{air}} = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$. Pada keadaan akhir kesetimbangan termal, massa es yang masih belum melebur di dalam wadah adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$50\\text{ gram}$",
      "$75\\text{ gram}$",
      "$100\\text{ gram}$",
      "$125\\text{ gram}$",
      "$150\\text{ gram}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Dalam interaksi termal es pada $0^\\circ\\text{C}$ dengan air cair, perlu diperiksa apakah kalor yang dilepaskan air cukup untuk meleburkan seluruh es:<br>- Kalor maksimum yang dilepas air saat turun ke $0^\\circ\\text{C}$: $Q_{\\text{lepas, maks}} = m_{\\text{air}} c_{\\text{air}} \\Delta T$.<br>- Kalor yang dibutuhkan untuk meleburkan seluruh es: $Q_{\\text{lebur, tot}} = m_{\\text{es}} L$.<br>- Jika $Q_{\\text{lepas, maks}} < Q_{\\text{lebur, tot}}$, hanya sebagian es yang melebur dan suhu akhir tetap $0^\\circ\\text{C}$.",
      steps: "1. Hitung kalor maksimum yang dilepaskan air:<br>$$Q_{\\text{lepas, maks}} = 0{,}3\\text{ kg} \\times 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}) \\times (20 - 0)^\\circ\\text{C} = 25.200\\text{ J}$$<br>2. Hitung kalor yang dibutuhkan untuk melebur seluruh es:<br>$$Q_{\\text{lebur, tot}} = 0{,}2\\text{ kg} \\times 336.000\\text{ J/kg} = 67.200\\text{ J}$$<br>3. Karena $25.200\\text{ J} < 67.200\\text{ J}$, kalor dari air tidak cukup melebur seluruh es. Suhu akhir adalah $0^\\circ\\text{C}$.<br>4. Hitung massa es yang melebur ($m_{\\text{lebur}}$):<br>$$m_{\\text{lebur}} \\times 336.000 = 25.200 \\implies m_{\\text{lebur}} = \\frac{25.200}{336.000} = 0{,}075\\text{ kg} = 75\\text{ gram}$$<br>5. Hitung massa es yang tersisa (belum melebur):<br>$$m_{\\text{sisa}} = 200\\text{ g} - 75\\text{ g} = 125\\text{ gram}$$<br>6. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jangan terkecoh antara massa es yang melebur ($75\\text{ gram}$, opsi B) dengan massa es yang masih tersisa tidak melebur ($125\\text{ gram}$, opsi D). Pertanyaan meminta massa es yang masih belum melebur."
    }
  },
  {
    id: "fis-termo-kalor-asasblack-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-asasblack",
    category: "Kondensasi Uap Air dalam Air Dingin",
    difficulty: "sedang",
    statement: "Uap air bersuhu $100^\\circ\\text{C}$ dialirkan ke dalam sebuah bejana terisolasi yang berisi $300\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$. Diketahui kalor penguapan air $U = 2{,}268 \\times 10^6\\text{ J/kg}$ dan kalor jenis air $c_{\\text{air}} = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$. Jika suhu akhir campuran air mencapai $40^\\circ\\text{C}$ dan kalor yang diserap wadah diabaikan, massa uap air yang telah mengembun adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5\\text{ gram}$",
      "$10\\text{ gram}$",
      "$15\\text{ gram}$",
      "$20\\text{ gram}$",
      "$25\\text{ gram}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Saat uap air pada $100^\\circ\\text{C}$ masuk ke dalam air dingin, uap mengalami dua tahap pelepasan kalor:<br>1. Mengembun menjadi air pada suhu $100^\\circ\\text{C}$: $Q_1 = m_u \\times U$.<br>2. Air hasil kondensasi mendingin dari $100^\\circ\\text{C}$ ke suhu akhir $T_c$: $Q_2 = m_u \\times c_{\\text{air}} \\times (100 - T_c)$.<br>Kalor ini sepenuhnya diserap oleh air dingin untuk naik suhunya dari $20^\\circ\\text{C}$ ke $T_c$: $Q_{\\text{serap}} = m_{\\text{air}} \\times c_{\\text{air}} \\times (T_c - 20)$.",
      steps: "1. Hitung kalor yang diserap air dingin ($m_{\\text{air}} = 0{,}3\\text{ kg}$):<br>$$Q_{\\text{serap}} = 0{,}3\\text{ kg} \\times 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}) \\times (40 - 20)^\\circ\\text{C} = 1260 \\times 20 = 25.200\\text{ J}$$<br>2. Hitung kalor yang dilepas oleh setiap kilogram uap saat mengembun dan mendingin ke $40^\\circ\\text{C}$:<br>$$q_{\\text{lepas/kg}} = U + c_{\\text{air}}(100 - 40) = 2{,}268 \\times 10^6 + 4200(60) = 2.268.000 + 252.000 = 2.520.000\\text{ J/kg}$$<br>3. Samakan kalor lepas dan serap:<br>$$m_u \\times 2.520.000 = 25.200 \\implies m_u = \\frac{25.200}{2.520.000} = 0{,}01\\text{ kg} = 10\\text{ gram}$$<br>4. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Jangan mengabaikan tahap kedua pelepasan kalor (pendinginan air hasil kondensasi dari $100^\\circ\\text{C}$ ke $40^\\circ\\text{C}$). Uap tidak hanya melepas kalor laten pengembunan, tetapi air panas hasil embunan juga terus melepas kalor hingga mencapai suhu kesetimbangan."
    }
  }
];
