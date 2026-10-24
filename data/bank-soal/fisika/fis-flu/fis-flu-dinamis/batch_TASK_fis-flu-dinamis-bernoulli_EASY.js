/**
 * Batch Task: TASK_fis-flu-dinamis-bernoulli_EASY
 * SubTopic: Persamaan Bernoulli (fis-flu-dinamis-bernoulli)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-flu-dinamis-bernoulli-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-bernoulli",
    category: "Persamaan Bernoulli",
    difficulty: "mudah",
    statement: "Persamaan Bernoulli pada aliran fluida ideal diturunkan langsung dari penerapan hukum dasar fisika, yaitu ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Hukum Kekekalan Energi Mekanik per satuan volume fluida",
      "Hukum Kekekalan Momentum Linier pada tumbukan fluida",
      "Hukum I Termodinamika untuk proses adiabatik tak reversibel",
      "Hukum Gravitasi Universal Newton antara molekul fluida",
      "Hukum Hooke pada elastisitas fluida termampatkan"
    ],
    correctIndex: 0,
    solution: {
      concept: "Persamaan Bernoulli:<br>$$P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{konstan}$$Persamaan ini merupakan perwujudan dari teorema usaha-energi dan Hukum Kekekalan Energi Mekanik yang diterapkan pada aliran fluida ideal per satuan volume, yang terdiri dari energi tekanan ($P$), energi kinetik per satuan volume ($\\frac{1}{2}\\rho v^2$), dan energi potensial gravitasi per satuan volume ($\\rho g h$).",
      steps: "1. Tinjau suku-suku dalam Persamaan Bernoulli:<br>• $P$ merepresentasikan kerja tekanan fluida.<br>• $\\frac{1}{2}\\rho v^2$ adalah energi kinetik per satuan volume.<br>• $\\rho gh$ adalah energi potensial gravitasi per satuan volume.<br>2. Jumlah total ketiga besaran ini bernilai kekal sepanjang garis alir fluida ideal.<br>3. Pilihan yang tepat adalah opsi A.",
      pitfalls: "Siswa terkadang salah mengira Persamaan Bernoulli diturunkan dari kekekalan momentum (padahal kekekalan massa menghasilkan persamaan kontinuitas, dan kekekalan energi menghasilkan persamaan Bernoulli)."
    }
  },
  {
    id: "fis-flu-dinamis-bernoulli-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-bernoulli",
    category: "Persamaan Bernoulli",
    difficulty: "mudah",
    statement: "Air mengalir melalui pipa horizontal dengan luas penampang yang menyempit. Pada bagian pipa berpenampang lebar, tekanan air terukur $P_1 = 2{,}00 \\times 10^5\\text{ Pa}$ dan kelajuannya $v_1 = 2\\text{ m/s}$. Air kemudian memasuki bagian pipa sempit dengan kelajuan meningkat menjadi $v_2 = 6\\text{ m/s}$. Jika massa jenis air $\\rho = 1000\\text{ kg/m}^3$, besar tekanan air pada bagian pipa sempit ($P_2$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}68 \\times 10^5\\text{ Pa}$",
      "$1{,}84 \\times 10^5\\text{ Pa}$",
      "$2{,}00 \\times 10^5\\text{ Pa}$",
      "$2{,}16 \\times 10^5\\text{ Pa}$",
      "$2{,}32 \\times 10^5\\text{ Pa}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Untuk pipa horizontal ($h_1 = h_2$), suku energi potensial saling meniadakan, sehingga Persamaan Bernoulli menjadi:<br>$$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2 \\implies P_2 = P_1 + \\frac{1}{2}\\rho (v_1^2 - v_2^2)$$",
      steps: "1. Masukkan besaran yang diketahui:<br>• $P_1 = 2{,}00 \\times 10^5\\text{ Pa} = 200.000\\text{ Pa}$<br>• $v_1 = 2\\text{ m/s} \\implies v_1^2 = 4\\text{ m}^2\\text{/s}^2$<br>• $v_2 = 6\\text{ m/s} \\implies v_2^2 = 36\\text{ m}^2\\text{/s}^2$<br>• $\\rho = 1000\\text{ kg/m}^3$<br>2. Hitung perubahan tekanan dinamis:<br>$$\\Delta P_{\\text{kinetik}} = \\frac{1}{2} \\times 1000 \\times (4 - 36) = 500 \\times (-32) = -16.000\\text{ Pa}$$<br>3. Hitung tekanan di penampang sempit ($P_2$):<br>$$P_2 = 200.000\\text{ Pa} - 16.000\\text{ Pa} = 184.000\\text{ Pa} = 1{,}84 \\times 10^5\\text{ Pa}$$",
      pitfalls: "Terkecoh menjumlahkan perubahan energi kinetik ($200.000 + 16.000 = 2{,}16 \\times 10^5\\text{ Pa}$, opsi D). Menurut Efek Bernoulli, di tempat fluida mengalir lebih cepat, tekanannya justru menurun."
    }
  },
  {
    id: "fis-flu-dinamis-bernoulli-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-bernoulli",
    category: "Persamaan Bernoulli",
    difficulty: "mudah",
    statement: "Sebuah tangki air terbuka yang luas memiliki lubang kebocoran kecil pada dinding sampingnya. Jarak permukaan air di dalam tangki ke lubang kebocoran adalah $h = 3{,}2\\text{ meter}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan semburan air yang pertama kali keluar dari lubang kebocoran tersebut menurut Teorema Torricelli adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$16\\text{ m/s}$",
      "$64\\text{ m/s}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Teorema Torricelli merupakan bentuk khusus Persamaan Bernoulli untuk tangki terbuka dengan luas penampang tangki jauh lebih besar daripada luas lubang kebocoran:<br>$$v = \\sqrt{2 \\cdot g \\cdot h}$$Di mana $h$ adalah kedalaman lubang kebocoran diukur dari permukaan bebas zat cair.",
      steps: "1. Masukkan nilai yang diketahui:<br>• $g = 10\\text{ m/s}^2$<br>• $h = 3{,}2\\text{ m}$<br>2. Hitung kelajuan pancaran air:<br>$$v = \\sqrt{2 \\times 10\\text{ m/s}^2 \\times 3{,}2\\text{ m}} = \\sqrt{64} = 8\\text{ m/s}$$",
      pitfalls: "Lupa menarik akar kuadrat dari hasil perkalian $2gh = 64$ sehingga memilih opsi $64\\text{ m/s}$ (opsi E), atau salah mengukur kedalaman $h$ dari dasar tangki."
    }
  },
  {
    id: "fis-flu-dinamis-bernoulli-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-bernoulli",
    category: "Persamaan Bernoulli",
    difficulty: "mudah",
    statement: "Sebuah tangki air diletakkan di atas tanah mendatar. Pada dinding tangki terdapat sebuah lubang kebocoran kecil yang berada pada kedalaman $h = 1{,}8\\text{ meter}$ di bawah permukaan air. Ketinggian posisi lubang tersebut dari permukaan tanah adalah $y = 3{,}2\\text{ meter}$. Jika gesekan udara diabaikan dan $g = 10\\text{ m/s}^2$, jarak jangkauan mendatar jatuhnya air di tanah ($x$) diukur dari dasar dinding tangki adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2{,}4\\text{ meter}$",
      "$3{,}6\\text{ meter}$",
      "$4{,}8\\text{ meter}$",
      "$5{,}0\\text{ meter}$",
      "$9{,}6\\text{ meter}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Jarak jangkauan mendatar semburan air tangki Torricelli dirumuskan dari perpaduan kelajuan horisontal $v = \\sqrt{2gh}$ dan waktu jatuh bebas vertikal $t = \\sqrt{\\frac{2y}{g}}$:<br>$$x = v \\cdot t = \\sqrt{2gh} \\cdot \\sqrt{\\frac{2y}{g}} = 2\\sqrt{h \\cdot y}$$",
      steps: "1. Identifikasi besaran:<br>• Kedalaman lubang dari permukaan air: $h = 1{,}8\\text{ m}$<br>• Ketinggian lubang dari tanah: $y = 3{,}2\\text{ m}$<br>2. Hitung jarak jangkauan horizontal:<br>$$x = 2\\sqrt{1{,}8 \\times 3{,}2} = 2\\sqrt{5{,}76} = 2 \\times 2{,}4\\text{ m} = 4{,}8\\text{ meter}$$",
      pitfalls: "Lupa mengalikan faktor 2 di depan tanda akar sehingga hanya mendapatkan $\\sqrt{5{,}76} = 2{,}4\\text{ m}$ (opsi A)."
    }
  },
  {
    id: "fis-flu-dinamis-bernoulli-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-bernoulli",
    category: "Persamaan Bernoulli",
    difficulty: "mudah",
    statement: "Air bersih dipompa dari lantai satu ke lantai dua gedung melalui pipa tegak vertikal yang memiliki luas penampang seragam. Ketinggian lantai dua adalah $h = 4\\text{ meter}$ di atas lantai satu. Jika tekanan air di lantai satu adalah $P_1 = 1{,}50 \\times 10^5\\text{ Pa}$, massa jenis air $\\rho = 1000\\text{ kg/m}^3$, dan $g = 10\\text{ m/s}^2$, besar tekanan air saat mencapai lantai dua ($P_2$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}40 \\times 10^5\\text{ Pa}$",
      "$1{,}10 \\times 10^5\\text{ Pa}$",
      "$1{,}50 \\times 10^5\\text{ Pa}$",
      "$1{,}90 \\times 10^5\\text{ Pa}$",
      "$2{,}10 \\times 10^5\\text{ Pa}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Karena luas penampang pipa seragam ($A_1 = A_2$), menurut persamaan kontinuitas kelajuan air di lantai satu dan lantai dua sama besar ($v_1 = v_2$). Persamaan Bernoulli menjadi:<br>$$P_1 + \\rho g h_1 = P_2 + \\rho g h_2 \\implies P_2 = P_1 - \\rho g (h_2 - h_1)$$",
      steps: "1. Hitung penurunan tekanan akibat kenaikan elevasi potensial:<br>$$\\Delta P = \\rho \\cdot g \\cdot h = 1000\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 4\\text{ m} = 40.000\\text{ Pa} = 0{,}40 \\times 10^5\\text{ Pa}$$<br>2. Hitung tekanan di lantai dua:<br>$$P_2 = 1{,}50 \\times 10^5\\text{ Pa} - 0{,}40 \\times 10^5\\text{ Pa} = 1{,}10 \\times 10^5\\text{ Pa}$$",
      pitfalls: "Terkecoh menjumlahkan tekanan $\\rho gh$ sehingga menghasilkan $1{,}90 \\times 10^5\\text{ Pa}$ (opsi D). Seiring bertambahnya ketinggian (elevasi), tekanan fluida akan menurun."
    }
  }
];
