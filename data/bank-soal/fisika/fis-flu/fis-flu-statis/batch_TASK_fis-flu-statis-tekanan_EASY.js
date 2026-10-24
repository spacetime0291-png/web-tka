/**
 * Batch Task: TASK_fis-flu-statis-tekanan_EASY
 * SubTopic: Tekanan Hidrostatis & Mutlak (fis-flu-statis-tekanan)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-flu-statis-tekanan-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-tekanan",
    category: "Tekanan Hidrostatis & Mutlak",
    difficulty: "mudah",
    statement: "Seekor ikan berenang pada kedalaman $4\\text{ meter}$ di bawah permukaan air sebuah danau air tawar (massa jenis air $\\rho = 1000\\text{ kg/m}^3$). Jika percepatan gravitasi bumi setempat adalah $g = 10\\text{ m/s}^2$, besar tekanan hidrostatis murni yang dialami oleh ikan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4 \\times 10^4\\text{ Pa}$",
      "$4 \\times 10^3\\text{ Pa}$",
      "$1{,}4 \\times 10^5\\text{ Pa}$",
      "$4 \\times 10^5\\text{ Pa}$",
      "$2 \\times 10^4\\text{ Pa}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Tekanan hidrostatis adalah tekanan yang diakibatkan oleh berat zat cair itu sendiri pada kedalaman tertentu, dirumuskan dengan:<br>$$P_h = \\rho \\cdot g \\cdot h$$",
      steps: "1. Identifikasi besaran yang diketahui:<br>• Massa jenis air $\\rho = 1000\\text{ kg/m}^3$<br>• Percepatan gravitasi $g = 10\\text{ m/s}^2$<br>• Kedalaman $h = 4\\text{ m}$<br>2. Hitung tekanan hidrostatis murni:<br>$$P_h = \\rho \\cdot g \\cdot h = 1000\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 4\\text{ m} = 40.000\\text{ Pa} = 4 \\times 10^4\\text{ Pa}$$",
      pitfalls: "Jangan menjumlahkan tekanan atmosfer $P_0$ karena yang ditanyakan secara spesifik adalah tekanan hidrostatis murni zat cair, bukan tekanan mutlak (total)."
    }
  },
  {
    id: "fis-flu-statis-tekanan-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-tekanan",
    category: "Tekanan Hidrostatis & Mutlak",
    difficulty: "mudah",
    statement: "Sebuah kapal selam penelitian berada pada kedalaman $25\\text{ meter}$ di bawah permukaan laut. Massa jenis air laut diketahui sebesar $1020\\text{ kg/m}^3$, percepatan gravitasi $g = 10\\text{ m/s}^2$, dan tekanan atmosfer di permukaan laut adalah $P_0 = 1{,}01 \\times 10^5\\text{ Pa}$. Tekanan mutlak (total) yang dialami dinding luar kapal selam tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2{,}55 \\times 10^5\\text{ Pa}$",
      "$3{,}56 \\times 10^5\\text{ Pa}$",
      "$3{,}56 \\times 10^4\\text{ Pa}$",
      "$1{,}54 \\times 10^5\\text{ Pa}$",
      "$4{,}57 \\times 10^5\\text{ Pa}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Tekanan mutlak (total) pada kedalaman $h$ fluida terbuka adalah jumlah dari tekanan atmosfer di permukaan dan tekanan hidrostatis zat cair:<br>$$P_{\\text{total}} = P_0 + P_h = P_0 + \\rho \\cdot g \\cdot h$$",
      steps: "1. Hitung tekanan hidrostatis air laut:<br>$$P_h = \\rho \\cdot g \\cdot h = 1020\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 25\\text{ m} = 255.000\\text{ Pa} = 2{,}55 \\times 10^5\\text{ Pa}$$<br>2. Hitung tekanan mutlak total:<br>$$P_{\\text{total}} = P_0 + P_h = 1{,}01 \\times 10^5\\text{ Pa} + 2{,}55 \\times 10^5\\text{ Pa} = 3{,}56 \\times 10^5\\text{ Pa}$$",
      pitfalls: "Lupa menjumlahkan tekanan atmosfer $P_0$ sehingga hanya memilih $2{,}55 \\times 10^5\\text{ Pa}$ (opsi A), padahal soal secara spesifik menanyakan tekanan mutlak (total)."
    }
  },
  {
    id: "fis-flu-statis-tekanan-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-tekanan",
    category: "Tekanan Hidrostatis & Mutlak",
    difficulty: "mudah",
    statement: "Tiga buah wadah A, B, dan C memiliki bentuk penampang yang berbeda: wadah A berbentuk tabung silinder tegak lurus, wadah B mengerucut ke atas, dan wadah C melebar ke atas. Luas penampang alas ketiga wadah sama besar. Ketiga wadah tersebut diisi dengan jenis zat cair yang sama (massa jenis $\\rho$) hingga mencapai tinggi permukaan zat cair ($h$) yang sama diukur dari dasar wadah. Perbandingan besar tekanan hidrostatis pada dasar wadah A, B, dan C ($P_A : P_B : P_C$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 : 1 : 1$",
      "$1 : 2 : 3$",
      "$3 : 2 : 1$",
      "$2 : 1 : 3$",
      "$1 : 3 : 2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Berdasarkan prinsip Paradoks Hidrostatis, tekanan hidrostatis zat cair pada dasar wadah hanya bergantung pada massa jenis zat cair ($\\rho$), percepatan gravitasi ($g$), dan kedalaman vertikal zat cair ($h$), serta sama sekali tidak dipengaruhi oleh bentuk wadah maupun volume total zat cair:<br>$$P_h = \\rho \\cdot g \\cdot h$$",
      steps: "1. Analisis parameter untuk ketiga wadah:<br>• Massa jenis cairan sama ($\\rho_A = \\rho_B = \\rho_C = \\rho$)<br>• Percepatan gravitasi sama ($g_A = g_B = g_C = g$)<br>• Ketinggian zat cair dari dasar sama ($h_A = h_B = h_C = h$)<br>2. Karena seluruh variabel pembentuk tekanan hidrostatis bernilai sama, maka:<br>$$P_A = P_B = P_C = \\rho \\cdot g \\cdot h$$<br>3. Perbandingan tekanan hidrostatis ketiga dasar wadah adalah $1 : 1 : 1$.",
      pitfalls: "Terkecoh oleh berat total atau volume fluida di dalam wadah yang berbeda-beda. Volume atau berat fluida hanya mempengaruhi gaya total yang menopang wadah di atas meja, tetapi tekanan hidrostatis pada titik dasar hanya bergantung pada tinggi kolom vertikal zat cair."
    }
  },
  {
    id: "fis-flu-statis-tekanan-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-tekanan",
    category: "Tekanan Hidrostatis & Mutlak",
    difficulty: "mudah",
    statement: "Tekanan atmosfer standar mampu menopang kolom air raksa (massa jenis $\\rho_{\\text{raksa}} = 13.600\\text{ kg/m}^3$) setinggi $76\\text{ cmHg}$. Jika percobaan barometer Torricelli tersebut dilakukan menggunakan air tawar (massa jenis $\\rho_{\\text{air}} = 1000\\text{ kg/m}^3$) pada percepatan gravitasi $g = 10\\text{ m/s}^2$, tinggi kolom air yang diperlukan agar menghasilkan tekanan hidrostatis yang setara adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5{,}60\\text{ meter}$",
      "$7{,}60\\text{ meter}$",
      "$10{,}34\\text{ meter}$",
      "$13{,}60\\text{ meter}$",
      "$76{,}00\\text{ meter}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Dua kolom zat cair yang menghasilkan tekanan hidrostatis yang sama memenuhi hubungan kesetaraan tekanan:<br>$$P_{h,\\text{air}} = P_{h,\\text{raksa}} \\iff \\rho_{\\text{air}} \\cdot g \\cdot h_{\\text{air}} = \\rho_{\\text{raksa}} \\cdot g \\cdot h_{\\text{raksa}}$$Sehingga tinggi kolom berbanding terbalik dengan massa jenisnya:<br>$$h_{\\text{air}} = \\frac{\\rho_{\\text{raksa}}}{\\rho_{\\text{air}}} \\cdot h_{\\text{raksa}}$$",
      steps: "1. Konversikan ketinggian kolom raksa ke satuan meter:<br>$$h_{\\text{raksa}} = 76\\text{ cm} = 0{,}76\\text{ m}$$<br>2. Substitusikan nilai-nilai yang diketahui:<br>$$h_{\\text{air}} = \\frac{13.600\\text{ kg/m}^3}{1000\\text{ kg/m}^3} \\times 0{,}76\\text{ m} = 13{,}6 \\times 0{,}76\\text{ m} = 10{,}336\\text{ m} \\approx 10{,}34\\text{ meter}$$",
      pitfalls: "Lupa mengonversi satuan centimeter ke meter atau salah menempatkan rasio massa jenis (terbalik menjadi membagi 1000 dengan 13600)."
    }
  },
  {
    id: "fis-flu-statis-tekanan-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-tekanan",
    category: "Tekanan Hidrostatis & Mutlak",
    difficulty: "mudah",
    statement: "Sebuah akuarium berbentuk balok memiliki ukuran alas $80\\text{ cm} \\times 50\\text{ cm}$ dan tinggi $60\\text{ cm}$. Akuarium tersebut diisi air tawar (massa jenis $\\rho = 1000\\text{ kg/m}^3$) hingga penuh. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya hidrostatis murni yang menekan seluruh permukaan dasar akuarium tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1.200\\text{ N}$",
      "$2.400\\text{ N}$",
      "$4.800\\text{ N}$",
      "$24.000\\text{ N}$",
      "$40.000\\text{ N}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gaya hidrostatis pada dasar bidang datar dihitung dari hasil kali tekanan hidrostatis pada kedalaman dasar dengan luas penampang alas wadah:<br>$$F = P_h \\cdot A = (\\rho \\cdot g \\cdot h) \\cdot A$$",
      steps: "1. Konversikan ukuran ke satuan SI (meter):<br>• Tinggi kedalaman air $h = 60\\text{ cm} = 0{,}6\\text{ m}$<br>• Luas alas $A = 0{,}8\\text{ m} \\times 0{,}5\\text{ m} = 0{,}4\\text{ m}^2$<br>2. Hitung tekanan hidrostatis di dasar:<br>$$P_h = \\rho \\cdot g \\cdot h = 1000\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 0{,}6\\text{ m} = 6.000\\text{ N/m}^2$$<br>3. Hitung gaya hidrostatis total pada dasar:<br>$$F = P_h \\cdot A = 6.000\\text{ N/m}^2 \\times 0{,}4\\text{ m}^2 = 2.400\\text{ N}$$",
      pitfalls: "Kesalahan konversi satuan luas dari $\\text{cm}^2$ ke $\\text{m}^2$ (sering dibagi 100 alih-alih 10.000) yang menyebabkan kesalahan orde besaran."
    }
  }
];
