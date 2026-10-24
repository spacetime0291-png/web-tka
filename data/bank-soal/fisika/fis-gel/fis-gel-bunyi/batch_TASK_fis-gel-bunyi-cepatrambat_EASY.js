/**
 * Batch Task: TASK_fis-gel-bunyi-cepatrambat_EASY
 * SubTopic: Cepat Rambat Bunyi (fis-gel-bunyi-cepatrambat)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-gel-bunyi-cepatrambat-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-cepatrambat",
    category: "Cepat Rambat Bunyi",
    difficulty: "mudah",
    statement: "Gelombang bunyi yang dipancarkan oleh sebuah pengeras suara merambat di udara dengan panjang gelombang $\\lambda = 85\\text{ cm}$. Jika frekuensi getaran sumber bunyi tersebut adalah $f = 400\\text{ Hz}$, besar cepat rambat gelombang bunyi di udara tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$170\\text{ m/s}$",
      "$340\\text{ m/s}$",
      "$470\\text{ m/s}$",
      "$680\\text{ m/s}$",
      "$3.400\\text{ m/s}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Cepat rambat gelombang bunyi ($v$) berkaitan langsung dengan panjang gelombang ($\\lambda$) dan frekuensi gelombang ($f$) melalui hubungan dasar:<br>$$v = \\lambda \\cdot f$$",
      steps: "1. Konversikan panjang gelombang ke satuan meter:<br>$$\\lambda = 85\\text{ cm} = 0{,}85\\text{ m}$$<br>2. Hitung cepat rambat gelombang:<br>$$v = 0{,}85\\text{ m} \\times 400\\text{ Hz} = 340\\text{ m/s}$$",
      pitfalls: "Lupa mengonversi satuan centimeter ke meter sehingga mengalikan langsung $85 \\times 400 = 34.000$."
    }
  },
  {
    id: "fis-gel-bunyi-cepatrambat-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-cepatrambat",
    category: "Cepat Rambat Bunyi",
    difficulty: "mudah",
    statement: "Sebuah batang rel baja memiliki modulus elastisitas Young $E = 2{,}0 \\times 10^{11}\\text{ N/m}^2$ dan massa jenis $\\rho = 8000\\text{ kg/m}^3$. Cepat rambat gelombang bunyi longitudinal di dalam batang baja tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2.500\\text{ m/s}$",
      "$4.000\\text{ m/s}$",
      "$5.000\\text{ m/s}$",
      "$6.250\\text{ m/s}$",
      "$25.000\\text{ m/s}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Cepat rambat gelombang longitudinal pada zat padat (batang logam) ditentukan oleh elastisitas Young ($E$) dan massa jenis bahannya ($\\rho$):<br>$$v = \\sqrt{\\frac{E}{\\rho}}$$",
      steps: "1. Masukkan nilai modulus Young dan massa jenis:<br>$$v = \\sqrt{\\frac{2{,}0 \\times 10^{11}\\text{ N/m}^2}{8000\\text{ kg/m}^3}} = \\sqrt{\\frac{2{,}0 \\times 10^{11}}{8 \\times 10^3}} = \\sqrt{0{,}25 \\times 10^8} = \\sqrt{25 \\times 10^6}$$<br>2. Tarik akar kuadrat:<br>$$v = 5 \\times 10^3\\text{ m/s} = 5.000\\text{ m/s}$$",
      pitfalls: "Siswa sering keliru menghitung pemangkatan $10^{11} / 10^3 = 10^8$, lalu menarik akar menjadi $10^3$ alih-alih $10^4$."
    }
  },
  {
    id: "fis-gel-bunyi-cepatrambat-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-cepatrambat",
    category: "Cepat Rambat Bunyi",
    difficulty: "mudah",
    statement: "Suatu zat cair di dalam tangki memiliki modulus Bulk $B = 2{,}25 \\times 10^9\\text{ N/m}^2$ dan massa jenis $\\rho = 1000\\text{ kg/m}^3$. Cepat rambat gelombang bunyi di dalam zat cair tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$750\\text{ m/s}$",
      "$1.250\\text{ m/s}$",
      "$1.500\\text{ m/s}$",
      "$2.250\\text{ m/s}$",
      "$3.000\\text{ m/s}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada zat cair, hambatan terhadap kompresi diukur oleh modulus Bulk ($B$). Cepat rambat gelombang bunyi pada zat cair dirumuskan:<br>$$v = \\sqrt{\\frac{B}{\\rho}}$$",
      steps: "1. Masukkan nilai modulus Bulk dan massa jenis zat cair:<br>$$v = \\sqrt{\\frac{2{,}25 \\times 10^9\\text{ N/m}^2}{1000\\text{ kg/m}^3}} = \\sqrt{2{,}25 \\times 10^6\\text{ m}^2\\text{/s}^2}$$<br>2. Tarik akar kuadrat:<br>$$v = 1{,}50 \\times 10^3\\text{ m/s} = 1.500\\text{ m/s}$$",
      pitfalls: "Terkecoh salah menarik akar dari $2{,}25 \\times 10^6$ menjadi $2250\\text{ m/s}$ (opsi D) karena lupa bahwa $\\sqrt{2{,}25} = 1{,}5$."
    }
  },
  {
    id: "fis-gel-bunyi-cepatrambat-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-cepatrambat",
    category: "Cepat Rambat Bunyi",
    difficulty: "mudah",
    statement: "Cepat rambat bunyi di dalam suatu gas ideal pada suhu mutlak $T_1 = 300\\text{ K}$ adalah $v_1$. Jika suhu gas tersebut dipanaskan secara perlahan hingga suhunya naik menjadi $T_2 = 1200\\text{ K}$, kelajuan perambatan bunyi di dalam gas tersebut akan menjadi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{2} v_1$",
      "$\\sqrt{2} v_1$",
      "$2 v_1$",
      "$4 v_1$",
      "$8 v_1$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Berdasarkan rumus Laplace untuk gas ideal, cepat rambat bunyi berbanding lurus dengan akar suhu mutlak Kelvin ($T$):<br>$$v = \\sqrt{\\frac{\\gamma \\cdot R \\cdot T}{M}} \\implies v \\propto \\sqrt{T}$$Sehingga perbandingan kelajuan pada dua suhu mutlak adalah:<br>$$\\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}}$$",
      steps: "1. Tuliskan rasio suhu mutlak:<br>$$\\frac{T_2}{T_1} = \\frac{1200\\text{ K}}{300\\text{ K}} = 4$$<br>2. Hitung rasio kelajuan bunyi:<br>$$\\frac{v_2}{v_1} = \\sqrt{4} = 2 \\implies v_2 = 2 v_1$$",
      pitfalls: "Siswa sering menganggap hubungan linier $v \\propto T$ sehingga menjawab $4 v_1$ (opsi D) karena suhu naik 4 kali lipat, padahal hubungannya berbanding lurus dengan akar kuadrat suhu mutlak."
    }
  },
  {
    id: "fis-gel-bunyi-cepatrambat-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-cepatrambat",
    category: "Cepat Rambat Bunyi",
    difficulty: "mudah",
    statement: "Urutan medium perambatan gelombang bunyi dari yang menghasilkan cepat rambat paling tinggi ke paling rendah pada kondisi suhu standar yang benar adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Zat padat > Zat cair > Zat gas",
      "Zat gas > Zat cair > Zat padat",
      "Zat cair > Zat padat > Zat gas",
      "Zat padat > Zat gas > Zat cair",
      "Zat gas > Zat padat > Zat cair"
    ],
    correctIndex: 0,
    solution: {
      concept: "Cepat rambat bunyi bergantung pada gaya ikat antarmolekul (modulus elastisitas) dan kerapatan medium. Pada zat padat, partikel tersusun sangat rapat dan memiliki gaya ikat sangat kuat (modulus elastisitas sangat tinggi), sehingga transfer getaran mekanik berlangsung paling cepat ($v_{\\text{padat}} \\approx 5000\\text{ m/s}$). Pada zat cair kerapatan dan elastisitasnya sedang ($v_{\\text{cair}} \\approx 1500\\text{ m/s}$), sedangkan pada gas ikatan antarmolekul sangat renggang ($v_{\\text{gas}} \\approx 340\\text{ m/s}$).",
      steps: "1. Urutan kekuatan ikatan dan cepat rambat: Padat > Cair > Gas.<br>2. Pilihan yang benar adalah opsi A.",
      pitfalls: "Terkecoh mengira massa jenis yang lebih besar membuat gelombang lebih lambat (seperti rumus $v = \\sqrt{E/\\rho}$), tanpa menyadari bahwa modulus elastisitas ($E$) zat padat bernilai jutaan kali lebih besar daripada modulus zat gas."
    }
  }
];
