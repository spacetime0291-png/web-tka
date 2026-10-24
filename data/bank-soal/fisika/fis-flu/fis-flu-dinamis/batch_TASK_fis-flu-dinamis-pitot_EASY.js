/**
 * Batch Task: TASK_fis-flu-dinamis-pitot_EASY
 * SubTopic: Tabung Pitot & Penyemprot (fis-flu-dinamis-pitot)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-flu-dinamis-pitot-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-pitot",
    category: "Tabung Pitot & Penyemprot",
    difficulty: "mudah",
    statement: "Tabung Pitot adalah instrumen fluida yang umumnya dipasang pada bodi pesawat terbang atau pipa transmisi gas. Fungsi utama dan prinsip kerja instrumen ini adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Mengukur kelajuan aliran fluida gas berdasarkan selisih tekanan statis dan tekanan stagnasi",
      "Mengukur kekentalan (viskositas) fluida cair berdasarkan laju gesekan internal",
      "Mengukur tekanan mutlak atmosfer bumi berdasarkan penyusutan volume gas terperangkap",
      "Mengukur percepatan gravitasi bumi berdasarkan getaran kolom cairan manometer",
      "Mengatur debit aliran fluida agar bernilai tetap secara otomatis tanpa pompa"
    ],
    correctIndex: 0,
    solution: {
      concept: "Tabung Pitot bekerja dengan membandingkan dua jenis tekanan pada aliran fluida:<br>1) Tekanan statis ($P_{\\text{statis}}$) pada dinding saluran fluida.<br>2) Tekanan stagnasi/total ($P_{\\text{stagnasi}}$) di ujung depan tabung tempat fluida membentur dan berhenti ($v = 0$).<br>Berdasarkan Persamaan Bernoulli:<br>$$P_{\\text{stagnasi}} - P_{\\text{statis}} = \\frac{1}{2}\\rho v^2$$Selisih tekanan ini dibaca melalui perbedaan tinggi cairan manometer.",
      steps: "1. Tinjau fungsi alat: Tabung Pitot dirancang khusus untuk mengukur kelajuan fluida (seperti udara relatif terhadap pesawat atau laju gas di pipa).<br>2. Prinsip kerjanya bersandar pada konversi energi kinetik fluida menjadi tekanan stagnasi.<br>3. Jawaban yang paling tepat adalah opsi A.",
      pitfalls: "Siswa terkadang menyamakan tabung Pitot dengan barometer (pengukur tekanan atmosfer) atau viskometer (pengukur viskositas)."
    }
  },
  {
    id: "fis-flu-dinamis-pitot-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-pitot",
    category: "Tabung Pitot & Penyemprot",
    difficulty: "mudah",
    statement: "Sebuah tabung Pitot digunakan untuk mengukur laju aliran gas yang memiliki massa jenis $\\rho = 1{,}20\\text{ kg/m}^3$. Tabung manometer pada alat tersebut berisi cairan pengukur dengan massa jenis $\\rho' = 960\\text{ kg/m}^3$. Saat pengukuran berlangsung, teramati selisih ketinggian cairan pada manometer sebesar $h = 2{,}5\\text{ cm}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan aliran gas tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$40\\text{ m/s}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Kelajuan aliran fluida gas pada tabung Pitot yang dihubungkan dengan manometer zat cair dirumuskan dengan:<br>$$v = \\sqrt{\\frac{2 \\cdot \\rho' \\cdot g \\cdot h}{\\rho}}$$<br>Di mana $\\rho'$ adalah massa jenis cairan manometer dan $\\rho$ adalah massa jenis gas yang mengalir.",
      steps: "1. Konversikan selisih ketinggian ke meter:<br>$$h = 2{,}5\\text{ cm} = 0{,}025\\text{ m}$$<br>2. Substitusikan besaran yang diketahui:<br>• $\\rho' = 960\\text{ kg/m}^3$<br>• $\\rho = 1{,}20\\text{ kg/m}^3$<br>• $g = 10\\text{ m/s}^2$<br>3. Hitung kelajuan gas ($v$):<br>$$v = \\sqrt{\\frac{2 \\times 960 \\times 10 \\times 0{,}025}{1{,}20}} = \\sqrt{\\frac{480}{1{,}20}} = \\sqrt{400} = 20\\text{ m/s}$$",
      pitfalls: "Terkecoh membalik massa jenis gas ($\\rho$) dan cairan manometer ($\\rho'$), atau lupa mengonversi centimeter ke meter."
    }
  },
  {
    id: "fis-flu-dinamis-pitot-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-pitot",
    category: "Tabung Pitot & Penyemprot",
    difficulty: "mudah",
    statement: "Pada alat penyemprot obat nyamuk atau botol parfum konvensional, cairan di dalam tabung bawah dapat terhisap naik ke atas dan menyembur keluar sebagai partikel kabut halus. Alasan fisis yang mendasari terhisapnya cairan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Kelajuan udara tinggi di atas ujung pipa vertikal menurunkan tekanan udara setempat sehingga tekanan atmosfer di wadah mendesak cairan naik",
      "Udara yang ditiupkan menaikkan massa jenis cairan di dasar wadah sehingga cairan memuai ke atas",
      "Pipa vertikal mengalami gaya kapilaritas ekstrem akibat kenaikan suhu udara pompa",
      "Gaya gravitasi di dalam wadah cairan dinetralkan oleh tekanan fluida dinamis",
      "Volume cairan di dalam wadah mengecil secara mendadak akibat tekanan hidrostatis"
    ],
    correctIndex: 0,
    solution: {
      concept: "Prinsip kerja alat penyemprot berlandaskan Efek Bernoulli:<br>1) Saat pompa ditekan, udara dipaksa mengalir dengan kelajuan sangat tinggi ($v$ besar) melewati ujung atas pipa sedot sempit vertikal.<br>2) Berdasarkan Persamaan Bernoulli, kelajuan yang tinggi menyebabkan tekanan statis udara di ujung atas pipa menurun ($P_{\\text{atas}} < P_{\\text{atm}}$).<br>3) Tekanan atmosfer yang menekan permukaan cairan di wadah bawah ($P_{\\text{atm}}$) mendorong cairan naik melewati pipa hingga disemburkan dan dipecah oleh tiupan udara kencang menjadi kabut halus.",
      steps: "1. Identifikasi penerapan: Botol semprot/parfum adalah aplikasi klasik dari Persamaan Bernoulli.<br>2. Udara laju tinggi $\\implies$ tekanan lokal turun $\\implies$ cairan terhisap ke atas karena beda tekanan.<br>3. Opsi A secara tepat menjelaskan fenomena fisis tersebut.",
      pitfalls: "Siswa sering menduga cairan terhisap karena hisapan vakum atau pemanasan udara, padahal semata-mata karena perbedaan tekanan statis menurut Bernoulli."
    }
  },
  {
    id: "fis-flu-dinamis-pitot-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-pitot",
    category: "Tabung Pitot & Penyemprot",
    difficulty: "mudah",
    statement: "Sebuah venturimeter dilengkapi manometer air raksa (massa jenis $\\rho_r = 13.600\\text{ kg/m}^3$) untuk mengukur aliran air (massa jenis $\\rho_a = 1000\\text{ kg/m}^3$). Persamaan yang menghubungkan beda tinggi raksa pada manometer ($h$) dengan kelajuan air pada pipa utama ($v_1$) dan pipa leher ($v_2$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(\\rho_r - \\rho_a) \\cdot g \\cdot h = \\frac{1}{2} \\rho_a (v_2^2 - v_1^2)$",
      "$\\rho_r \\cdot g \\cdot h = \\frac{1}{2} \\rho_a (v_1^2 + v_2^2)$",
      "$(\\rho_r + \\rho_a) \\cdot g \\cdot h = \\rho_a (v_2^2 - v_1^2)$",
      "$\\rho_a \\cdot g \\cdot h = \\frac{1}{2} \\rho_r (v_2^2 - v_1^2)$",
      "$(\\rho_r - \\rho_a) \\cdot g \\cdot h = \\frac{1}{2} \\rho_r (v_1^2 - v_2^2)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada venturimeter dengan manometer zat cair pengukur:<br>1) Dari kesetimbangan manometer hidrostatika: $\\Delta P = P_1 - P_2 = (\\rho' - \\rho) g h$<br>2) Dari persamaan Bernoulli horisontal: $P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2)$<br>Menyamakan kedua ruas menghasilkan:<br>$$(\\rho_r - \\rho_a) \\cdot g \\cdot h = \\frac{1}{2}\\rho_a (v_2^2 - v_1^2)$$",
      steps: "1. Turunkan selisih tekanan manometer: $\\Delta P = (\\rho_r - \\rho_a) g h$.<br>2. Turunkan selisih tekanan Bernoulli: $\\Delta P = \\frac{1}{2}\\rho_a (v_2^2 - v_1^2)$.<br>3. Samakan kedua hubungan tersebut sehingga menghasilkan kesetaraan pada opsi A.",
      pitfalls: "Siswa sering lupa mengurangkan massa jenis cairan pengalir $\\rho_a$ dari cairan manometer $\\rho_r$, atau keliru menempatkan massa jenis pada suku energi kinetik."
    }
  },
  {
    id: "fis-flu-dinamis-pitot-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-pitot",
    category: "Tabung Pitot & Penyemprot",
    difficulty: "mudah",
    statement: "Pada leher venturi sebuah karburator mesin, udara mengalir cepat sehingga menghasilkan penurunan tekanan statis sebesar $\\Delta P = 250\\text{ Pa}$ untuk menghisap bahan bakar cair. Jika massa jenis udara luar adalah $\\rho_{\\text{udara}} = 1{,}25\\text{ kg/m}^3$ dan kelajuan udara sebelum masuk venturi dianggap mendekati nol, kelajuan aliran udara di leher venturi karburator tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$40\\text{ m/s}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Berdasarkan prinsip Bernoulli pada karburator, penurunan tekanan statis sebanding dengan penambahan tekanan dinamis aliran udara:<br>$$\\Delta P = \\frac{1}{2}\\rho_{\\text{udara}} \\cdot v^2 \\implies v = \\sqrt{\\frac{2 \\cdot \\Delta P}{\\rho_{\\text{udara}}}}$$",
      steps: "1. Masukkan data yang diketahui:<br>• $\\Delta P = 250\\text{ Pa}$<br>• $\\rho_{\\text{udara}} = 1{,}25\\text{ kg/m}^3$<br>2. Hitung kelajuan udara di leher venturi:<br>$$v = \\sqrt{\\frac{2 \\times 250\\text{ Pa}}{1{,}25\\text{ kg/m}^3}} = \\sqrt{\\frac{500}{1{,}25}} = \\sqrt{400} = 20\\text{ m/s}$$",
      pitfalls: "Lupa mengalikan faktor 2 dari $\\frac{1}{2}\\rho v^2$ sebelum menarik akar sehingga memperoleh kelajuan yang keliru $\\sqrt{200} \\approx 14{,}1\\text{ m/s}$."
    }
  }
];
