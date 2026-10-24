/**
 * Batch Task: TASK_fis-termo-kalor-pemuaian_MEDIUM
 * SubTopic: Pemuaian Zat (fis-termo-kalor-pemuaian)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-termo-kalor-pemuaian-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-pemuaian",
    category: "Pemuaian Semu Zat Cair",
    difficulty: "sedang",
    statement: "Sebuah bejana kaca berkapasitas $1000\\text{ mL}$ diisi penuh dengan raksa pada suhu $20^\\circ\\text{C}$. Bejana beserta isinya dipanaskan bersamaan hingga suhunya mencapai $120^\\circ\\text{C}$. Diketahui koefisien muai panjang kaca adalah $\\alpha_{\\text{kaca}} = 9 \\times 10^{-6}/^\\circ\\text{C}$ dan koefisien muai volume raksa adalah $\\gamma_{\\text{raksa}} = 1{,}8 \\times 10^{-4}/^\\circ\\text{C}$. Volume raksa yang tumpah akibat pemanasan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2{,}7\\text{ mL}$",
      "$15{,}3\\text{ mL}$",
      "$17{,}1\\text{ mL}$",
      "$18{,}0\\text{ mL}$",
      "$20{,}7\\text{ mL}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Saat bejana dan zat cair di dalamnya dipanaskan bersama, keduanya mengalami pertambahan volume. Jika koefisien muai zat cair lebih besar daripada koefisien muai bejana, sebagian zat cair akan tumpah. Volume tumpah dihitung sebagai pemuaian semu:<br>$$\\Delta V_{\\text{tumpah}} = \\Delta V_{\\text{cair}} - \\Delta V_{\\text{bejana}} = V_0 (\\gamma_{\\text{cair}} - \\gamma_{\\text{bejana}}) \\Delta T$$<br>dengan $\\gamma_{\\text{bejana}} = 3\\alpha_{\\text{bejana}}$.",
      steps: "1. Tentukan nilai parameter:<br>$V_0 = 1000\\text{ mL}$<br>$\\Delta T = 120^\\circ\\text{C} - 20^\\circ\\text{C} = 100^\\circ\\text{C}$<br>$\\gamma_{\\text{raksa}} = 1{,}8 \\times 10^{-4}/^\\circ\\text{C} = 180 \\times 10^{-6}/^\\circ\\text{C}$<br>$\\gamma_{\\text{kaca}} = 3 \\times \\alpha_{\\text{kaca}} = 3 \\times (9 \\times 10^{-6}) = 27 \\times 10^{-6}/^\\circ\\text{C}$<br>2. Hitung selisih koefisien muai volume:<br>$$\\gamma_{\\text{efektif}} = \\gamma_{\\text{raksa}} - \\gamma_{\\text{kaca}} = (180 - 27) \\times 10^{-6} = 153 \\times 10^{-6}/^\\circ\\text{C}$$<br>3. Hitung volume tumpah:<br>$$\\Delta V_{\\text{tumpah}} = 1000 \\times (153 \\times 10^{-6}) \\times 100 = 15{,}3\\text{ mL}$$<br>4. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Lupa memperhitungkan pemuaian bejana kaca akan menghasilkan $\\Delta V = 1000 \\times 1{,}8 \\times 10^{-4} \\times 100 = 18\\text{ mL}$ (opsi D). Bejana kaca juga memuai sehingga ruang tampungnya bertambah sebesar $2{,}7\\text{ mL}$."
    }
  },
  {
    id: "fis-termo-kalor-pemuaian-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-pemuaian",
    category: "Pencegahan Lengkungan Rel Kereta Api",
    difficulty: "sedang",
    statement: "Batang rel kereta api terbuat dari baja dengan panjang masing-masing $20\\text{ meter}$ dipasang pada pagi hari saat suhu udara $20^\\circ\\text{C}$. Jika suhu maksimum di siang hari terik dapat mencapai $50^\\circ\\text{C}$ dan koefisien muai panjang baja $\\alpha = 1{,}2 \\times 10^{-5}/^\\circ\\text{C}$, celah minimum yang harus disediakan di antara dua ujung rel agar rel tidak saling bertumbukan dan melengkung adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2{,}4\\text{ mm}$",
      "$3{,}6\\text{ mm}$",
      "$4{,}8\\text{ mm}$",
      "$7{,}2\\text{ mm}$",
      "$12{,}0\\text{ mm}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Celah antarbatang rel berfungsi memberikan ruang bebas bagi pemuaian panjang baja saat suhu lingkungan naik. Besar celah minimum setara dengan pertambahan panjang satu batang rel pada rentang kenaikan suhu maksimum:<br>$$\\Delta L = L_0 \\times \\alpha \\times \\Delta T$$",
      steps: "1. Identifikasi data soal:<br>$L_0 = 20\\text{ m}$<br>$\\Delta T = 50^\\circ\\text{C} - 20^\\circ\\text{C} = 30^\\circ\\text{C}$<br>$\\alpha = 1{,}2 \\times 10^{-5}/^\\circ\\text{C}$<br>2. Hitung pemuaian panjang rel:<br>$$\\Delta L = 20\\text{ m} \\times (1{,}2 \\times 10^{-5}/^\\circ\\text{C}) \\times 30^\\circ\\text{C} = 7{,}2 \\times 10^{-3}\\text{ m} = 7{,}2\\text{ mm}$$<br>3. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Pastikan menggunakan $\\Delta T = 50 - 20 = 30^\\circ\\text{C}$, bukan suhu mutlak atau suhu akhir $50^\\circ\\text{C}$. Menggunakan $50^\\circ\\text{C}$ akan menghasilkan $12{,}0\\text{ mm}$ (opsi E)."
    }
  },
  {
    id: "fis-termo-kalor-pemuaian-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-pemuaian",
    category: "Pemasangan Cincin Logam (Shrink Fitting)",
    difficulty: "sedang",
    statement: "Sebuah cincin tembaga memiliki diameter dalam $5{,}000\\text{ cm}$ pada suhu $25^\\circ\\text{C}$. Cincin tersebut hendak dipasang pada poros roda yang berdiameter $5{,}010\\text{ cm}$. Jika koefisien muai panjang tembaga adalah $\\alpha = 2{,}0 \\times 10^{-5}/^\\circ\\text{C}$, suhu minimum cincin tembaga harus dipanaskan agar dapat tepat masuk ke poros roda adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$75^\\circ\\text{C}$",
      "$100^\\circ\\text{C}$",
      "$125^\\circ\\text{C}$",
      "$150^\\circ\\text{C}$",
      "$200^\\circ\\text{C}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pemuaian diameter lubang atau cincin mengikuti hukum pemuaian panjang linear pada dimensi diameternya:<br>$$\\Delta D = D_0 \\times \\alpha \\times \\Delta T \\implies \\Delta T = \\frac{\\Delta D}{D_0 \\times \\alpha}$$<br>Suhu akhir pemanasan cincin dihitung dari $T = T_0 + \\Delta T$.",
      steps: "1. Tentukan pertambahan diameter yang diperlukan:<br>$$\\Delta D = 5{,}010\\text{ cm} - 5{,}000\\text{ cm} = 0{,}010\\text{ cm}$$<br>2. Hitung kenaikan suhu $\\Delta T$:<br>$$\\Delta T = \\frac{0{,}010\\text{ cm}}{5{,}000\\text{ cm} \\times 2{,}0 \\times 10^{-5}/^\\circ\\text{C}} = \\frac{0{,}010}{1{,}0 \\times 10^{-4}} = 100^\\circ\\text{C}$$<br>3. Hitung suhu akhir cincin $T$:<br>$$T = T_0 + \\Delta T = 25^\\circ\\text{C} + 100^\\circ\\text{C} = 125^\\circ\\text{C}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Pertanyaan meminta suhu akhir pemanasan ($T$), bukan sekadar kenaikan suhunya ($\\Delta T = 100^\\circ\\text{C}$, opsi B). Jangan lupa menambahkan suhu awal $25^\\circ\\text{C}$."
    }
  },
  {
    id: "fis-termo-kalor-pemuaian-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-pemuaian",
    category: "Pengaruh Suhu terhadap Massa Jenis",
    difficulty: "sedang",
    statement: "Sebuah balok padat memiliki massa jenis $\\rho_0 = 8000\\text{ kg/m}^3$ pada suhu $20^\\circ\\text{C}$. Logam tersebut memiliki koefisien muai volume $\\gamma = 5{,}0 \\times 10^{-5}/^\\circ\\text{C}$. Ketika balok tersebut dipanaskan hingga suhunya menjadi $220^\\circ\\text{C}$, penurunan massa jenis balok logam tersebut adalah sekitar ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$40\\text{ kg/m}^3$",
      "$80\\text{ kg/m}^3$",
      "$120\\text{ kg/m}^3$",
      "$160\\text{ kg/m}^3$",
      "$200\\text{ kg/m}^3$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Massa benda konstan selama pemanasan ($m = \\rho \\times V$). Karena volume memuai ($V = V_0(1 + \\gamma \\Delta T)$), maka massa jenis benda berkurang:<br>$$\\rho = \\frac{m}{V_0(1 + \\gamma \\Delta T)} = \\frac{\\rho_0}{1 + \\gamma \\Delta T} \\approx \\rho_0 (1 - \\gamma \\Delta T)$$<br>Penurunan massa jenisnya adalah $\\Delta \\rho = \\rho_0 - \\rho \\approx \\rho_0 \\times \\gamma \\times \\Delta T$.",
      steps: "1. Hitung kenaikan suhu: $\\Delta T = 220^\\circ\\text{C} - 20^\\circ\\text{C} = 200^\\circ\\text{C}$.<br>2. Hitung perkiraan penurunan massa jenis $\\Delta \\rho$:<br>$$\\Delta \\rho \\approx \\rho_0 \\times \\gamma \\times \\Delta T = 8000\\text{ kg/m}^3 \\times (5{,}0 \\times 10^{-5}/^\\circ\\text{C}) \\times 200^\\circ\\text{C}$$<br>$$\\Delta \\rho \\approx 8000 \\times 1{,}0 \\times 10^{-2} = 80\\text{ kg/m}^3$$<br>3. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Hati-hati dengan tanda dan makna 'penurunan massa jenis'. Massa jenis akhir adalah sekitar $7920\\text{ kg/m}^3$, sehingga penurunannya adalah $80\\text{ kg/m}^3$."
    }
  },
  {
    id: "fis-termo-kalor-pemuaian-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-pemuaian",
    category: "Anomali Air dan Ekosistem Perairan",
    difficulty: "sedang",
    statement: "Pada musim dingin yang sangat dingin di daerah subtropis, permukaan danau membeku menjadi lapisan es padat, namun organisme air seperti ikan tetap dapat bertahan hidup di dasar danau. Fenomena fisika ini dapat dijelaskan berdasarkan sifat anomali air, yaitu ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Air memiliki kalor jenis paling rendah pada suhu $0^\\circ\\text{C}$ sehingga es cepat melepas kalor ke atmosfer",
      "Air memuai saat dipanaskan dari $0^\\circ\\text{C}$ ke $4^\\circ\\text{C}$ sehingga air hangat terapung di atas es",
      "Air memiliki massa jenis terbesar pada suhu $4^\\circ\\text{C}$, sehingga air bersuhu $4^\\circ\\text{C}$ tenggelam ke dasar danau dan tidak membeku",
      "Es memiliki kerapatan lebih besar daripada air cair sehingga es tenggelam ke dasar danau",
      "Air melepaskan kalor laten pembekuan ke arah dasar danau sehingga memanaskan dasar perairan"
    ],
    correctIndex: 2,
    solution: {
      concept: "Air mengalami fenomena anomali termal antara rentang suhu $0^\\circ\\text{C}$ sampai $4^\\circ\\text{C}$:<br>- Saat dipanaskan dari $0^\\circ\\text{C}$ ke $4^\\circ\\text{C}$, volumenya menyusut dan massa jenisnya bertambah.<br>- Pada suhu tepat $4^\\circ\\text{C}$, air mencapai volume minimum dan massa jenis maksimum ($\\rho_{\\text{maks}} \\approx 1000\\text{ kg/m}^3$).<br>- Air terpadat ini turun ke dasar danau, sedangkan air yang lebih dingin ($< 4^\\circ\\text{C}$) dan lapisan es terapung di permukaan karena massa jenis es lebih kecil dari air cair.",
      steps: "1. Analisis sifat air pada musim dingin:<br>Saat udara dingin mendinginkan permukaan danau hingga $4^\\circ\\text{C}$, air permukaan mencapai kerapatan maksimum dan turun ke dasar.<br>2. Ketika suhu air permukaan turun lagi dari $4^\\circ\\text{C}$ menuju $0^\\circ\\text{C}$, massa jenisnya justru mengecil sehingga air tetap berada di permukaan dan akhirnya membeku menjadi es.<br>3. Karena es terapung dan menjadi isolator termal, bagian dasar danau tetap berupa air cair bersuhu sekitar $4^\\circ\\text{C}$ yang memungkinkan biota air bertahan hidup.<br>4. Jadi, penjelasan yang tepat adalah pilihan C.",
      pitfalls: "Pernyataan pada opsi B keliru karena dari $0^\\circ\\text{C}$ ke $4^\\circ\\text{C}$ air menyusut (bukan memuai). Opsi D juga salah karena es memiliki massa jenis lebih kecil daripada air, bukan lebih besar."
    }
  }
];
