/**
 * Batch Task: TASK_fis-termo-hukum-carnot_EASY
 * SubTopic: Siklus & Mesin Carnot (fis-termo-hukum-carnot)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-termo-hukum-carnot-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-carnot",
    category: "Urutan Empat Proses Siklus Carnot",
    difficulty: "mudah",
    statement: "Siklus Carnot merupakan siklus termodinamika ideal yang terdiri atas empat tahapan proses reversibel secara berturut-turut, yaitu ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Ekspansi isotermal, ekspansi adiabatik, kompresi isotermal, kompresi adiabatik",
      "Ekspansi adiabatik, ekspansi isokhorik, kompresi adiabatik, kompresi isobarik",
      "Ekspansi isobarik, ekspansi isotermal, kompresi isobarik, kompresi isotermal",
      "Kompresi isotermal, kompresi adiabatik, ekspansi isotermal, ekspansi adiabatik",
      "Ekspansi isokhorik, kompresi isobarik, ekspansi adiabatik, kompresi isotermal"
    ],
    correctIndex: 0,
    solution: {
      concept: "Siklus mesin Carnot bekerja melalui 4 proses kuasistatis yang reversibel secara siklis:<br>1. Ekspansi isotermal (penyerapan kalor $Q_H$ pada suhu konstan $T_H$)<br>2. Ekspansi adiabatik (penurunan suhu dari $T_H$ ke $T_L$ tanpa perpindahan kalor)<br>3. Kompresi isotermal (pembuangan kalor $Q_L$ pada suhu konstan $T_L$)<br>4. Kompresi adiabatik (kenaikan suhu dari $T_L$ kembali ke $T_H$ tanpa perpindahan kalor).",
      steps: "1. Tinjau siklus Carnot searah jarum jam (mesin kalor):<br>- Tahap 1: Gas memuai secara isotermal pada suhu tinggi $T_H$.<br>- Tahap 2: Gas memuai secara adiabatik sehingga suhunya turun menjadi $T_L$.<br>- Tahap 3: Gas dimampatkan secara isotermal pada suhu rendah $T_L$.<br>- Tahap 4: Gas dimampatkan secara adiabatik sehingga suhunya naik kembali ke $T_H$.<br>2. Jadi urutan yang benar adalah ekspansi isotermal, ekspansi adiabatik, kompresi isotermal, kompresi adiabatik (pilihan A).",
      pitfalls: "Sering tertukar antara urutan pemuaian (ekspansi) dan pemampatan (kompresi), atau menyertakan proses isobarik/isokhorik yang sesungguhnya bukan bagian dari siklus Carnot ideal."
    }
  },
  {
    id: "fis-termo-hukum-carnot-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-carnot",
    category: "Efisiensi Mesin Carnot dari Suhu Reservoir",
    difficulty: "mudah",
    statement: "Sebuah mesin Carnot bekerja di antara reservoir suhu tinggi $600\\text{ K}$ dan reservoir suhu rendah $450\\text{ K}$. Efisiensi termal mesin Carnot tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$15\\%$",
      "$20\\%$",
      "$25\\%$",
      "$33{,}3\\%$",
      "$75\\%$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Efisiensi termal maksimum dari suatu mesin Carnot ideal dirumuskan sebagai:<br>$$\\eta = 1 - \\frac{T_L}{T_H} = \\frac{T_H - T_L}{T_H}$$<br>dengan $T_H$ dan $T_L$ berturut-turut adalah suhu mutlak reservoir tinggi dan reservoir rendah dalam satuan Kelvin.",
      steps: "1. Identifikasi data yang diketahui:<br>$$T_H = 600\\text{ K}$$<br>$$T_L = 450\\text{ K}$$<br>2. Masukkan ke dalam rumus efisiensi Carnot:<br>$$\\eta = 1 - \\frac{450\\text{ K}}{600\\text{ K}} = 1 - 0{,}75 = 0{,}25$$<br>3. Konversikan ke bentuk persentase:<br>$$\\eta = 0{,}25 \\times 100\\% = 25\\%$$<br>4. Jadi efisiensi mesin adalah $25\\%$ (pilihan C).",
      pitfalls: "Jangan menggunakan rasio $\\frac{T_L}{T_H} = 0{,}75$ sebagai nilai efisiensi; nilai tersebut adalah rasio kalor yang dibuang, sehingga efisiensi adalah selisihnya dari satu ($1 - 0{,}75 = 0{,}25$)."
    }
  },
  {
    id: "fis-termo-hukum-carnot-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-carnot",
    category: "Perhitungan Usaha Mekanik Mesin Carnot",
    difficulty: "mudah",
    statement: "Suatu mesin Carnot menyerap kalor sebesar $4.000\\text{ J}$ dari reservoir bersuhu $800\\text{ K}$ dan melepaskan sebagian kalor ke reservoir bersuhu $600\\text{ K}$. Besar usaha mekanik yang dihasilkan oleh mesin dalam satu siklus adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$500\\text{ J}$",
      "$1.000\\text{ J}$",
      "$1.500\\text{ J}$",
      "$2.000\\text{ J}$",
      "$3.000\\text{ J}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Hubungan usaha ($W$), kalor yang diserap ($Q_H$), dan efisiensi Carnot ($\\eta$) adalah:<br>$$W = \\eta \\times Q_H = \\left(1 - \\frac{T_L}{T_H}\\right) Q_H$$",
      steps: "1. Hitung efisiensi mesin Carnot:<br>$$\\eta = 1 - \\frac{T_L}{T_H} = 1 - \\frac{600\\text{ K}}{800\\text{ K}} = 1 - \\frac{3}{4} = \\frac{1}{4} = 0{,}25$$<br>2. Hitung usaha mekanik $W$ yang dihasilkan:<br>$$W = \\eta \\times Q_H = 0{,}25 \\times 4.000\\text{ J} = 1.000\\text{ J}$$<br>3. Jadi usaha mekanik yang dihasilkan adalah $1.000\\text{ J}$ (pilihan B).",
      pitfalls: "Siswa terkadang salah menghitung $Q_L = 3.000\\text{ J}$ dan mengira nilai tersebut sebagai usaha yang dihasilkan, padahal usaha adalah selisih $W = Q_H - Q_L$."
    }
  },
  {
    id: "fis-termo-hukum-carnot-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-carnot",
    category: "Menentukan Suhu Reservoir Rendah",
    difficulty: "mudah",
    statement: "Sebuah mesin Carnot memiliki efisiensi termal sebesar $40\\%$. Jika suhu reservoir panas mesin tersebut adalah $500\\text{ K}$, suhu reservoir dinginnya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$100\\text{ K}$",
      "$200\\text{ K}$",
      "$250\\text{ K}$",
      "$300\\text{ K}$",
      "$350\\text{ K}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Dari rumus efisiensi Carnot $\\eta = 1 - \\frac{T_L}{T_H}$, suhu reservoir dingin dapat ditentukan melalui:<br>$$\\frac{T_L}{T_H} = 1 - \\eta \\implies T_L = (1 - \\eta) T_H$$",
      steps: "1. Diketahui efisiensi $\\eta = 40\\% = 0{,}40$ dan $T_H = 500\\text{ K}$.<br>2. Gunakan persamaan hubungan suhu:<br>$$\\frac{T_L}{500} = 1 - 0{,}40 = 0{,}60$$<br>3. Hitung $T_L$:<br>$$T_L = 0{,}60 \\times 500\\text{ K} = 300\\text{ K}$$<br>4. Jadi suhu reservoir dingin mesin adalah $300\\text{ K}$ (pilihan D).",
      pitfalls: "Hati-hati jangan langsung mengalikan $\\eta \\times T_H = 0{,}4 \\times 500 = 200\\text{ K}$; nilai $200\\text{ K}$ tersebut adalah selisih suhu $\\Delta T = T_H - T_L$, bukan suhu reservoir dingin $T_L$."
    }
  },
  {
    id: "fis-termo-hukum-carnot-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-carnot",
    category: "Kalor yang Dilepaskan ke Reservoir Dingin",
    difficulty: "mudah",
    statement: "Sebuah mesin Carnot bekerja dengan efisiensi $30\\%$. Jika mesin tersebut menyerap kalor sebesar $6.000\\text{ Joule}$ dari reservoir bersuhu tinggi, kalor yang dibuang oleh mesin ke reservoir dingin adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1.800\\text{ Joule}$",
      "$2.400\\text{ Joule}$",
      "$3.600\\text{ Joule}$",
      "$4.200\\text{ Joule}$",
      "$5.400\\text{ Joule}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Berdasarkan prinsip kekekalan energi pada siklus termal:<br>$$Q_H = W + Q_L \\implies Q_L = Q_H - W$$<br>Karena usaha yang dihasilkan adalah $W = \\eta Q_H$, maka kalor yang dibuang adalah:<br>$$Q_L = (1 - \\eta) Q_H$$",
      steps: "1. Diketahui $\\eta = 30\\% = 0{,}30$ dan $Q_H = 6.000\\text{ J}$.<br>2. Hitung kalor yang diubah menjadi usaha:<br>$$W = \\eta \\times Q_H = 0{,}30 \\times 6.000\\text{ J} = 1.800\\text{ J}$$<br>3. Hitung kalor yang dilepaskan ke reservoir dingin:<br>$$Q_L = Q_H - W = 6.000\\text{ J} - 1.800\\text{ J} = 4.200\\text{ J}$$<br>4. Jadi kalor yang dibuang adalah $4.200\\text{ Joule}$ (pilihan D).",
      pitfalls: "Siswa sering terkecoh menjawab $1.800\\text{ Joule}$, yang merupakan besar usaha yang dilakukan mesin ($W$), bukan kalor yang dibuang ($Q_L$)."
    }
  }
];
