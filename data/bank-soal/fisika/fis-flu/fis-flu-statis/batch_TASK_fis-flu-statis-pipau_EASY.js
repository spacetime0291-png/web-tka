/**
 * Batch Task: TASK_fis-flu-statis-pipau_EASY
 * SubTopic: Hukum Utama Hidrostatis (Pipa U) (fis-flu-statis-pipau)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-flu-statis-pipau-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-pipau",
    category: "Hukum Utama Hidrostatis (Pipa U)",
    difficulty: "mudah",
    statement: "Hukum Utama Hidrostatis menyatakan bahwa semua titik yang berada pada satu bidang datar horizontal di dalam fluida akan memiliki besar tekanan hidrostatis yang sama. Syarat fisis mutlak yang harus dipenuhi agar hukum tersebut berlaku adalah titik-titik tersebut harus berada dalam ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Jenis zat cair yang sama dan dalam keadaan diam (setimbang statis)",
      "Dua jenis zat cair yang berbeda massa jenisnya asalkan berada pada wadah terbuka",
      "Pipa kapiler yang memiliki luas penampang berbeda saat fluida mengalir tenang",
      "Fluida yang sedang mengalami percepatan sudut konstan di dalam bejana tertutup",
      "Zat cair kental yang mengalir laminer pada saluran pipa miring"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hukum Utama Hidrostatis dirumuskan dari persamaan dasar kesetimbangan statis fluida:<br>$$P_A = P_B \\iff \\rho_A \\cdot g \\cdot h_A = \\rho_B \\cdot g \\cdot h_B$$Hukum ini hanya berlaku jika titik A dan B berada pada fluida yang sejenis ($\\rho_A = \\rho_B$) dan fluida tidak mengalami percepatan (diam/statis).",
      steps: "1. Tinjau syarat fisis Hukum Utama Hidrostatis:<br>• Fluida harus homogen/sejenis (massa jenis $\\rho$ seragam)<br>• Fluida harus dalam kondisi diam (tidak ada percepatan translasi maupun rotasi)<br>• Terletak pada bidang horizontal yang sama ($h$ sama)<br>2. Evaluasi pilihan jawaban: Hanya opsi A yang memenuhi ketiga kriteria esensial tersebut secara sempurna.",
      pitfalls: "Siswa sering menganggap bahwa titik-titik pada kedalaman sama selalu memiliki tekanan sama meskipun berada pada dua jenis cairan yang berbeda massa jenisnya, padahal tekanan hidrostatis bergantung langsung pada massa jenis zat cair."
    }
  },
  {
    id: "fis-flu-statis-pipau-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-pipau",
    category: "Hukum Utama Hidrostatis (Pipa U)",
    difficulty: "mudah",
    statement: "Sebuah pipa U mula-mula diisi dengan air tawar (massa jenis $\\rho_{\\text{air}} = 1000\\text{ kg/m}^3$). Pada salah satu kaki pipa U dituangkan minyak (massa jenis $\\rho_{\\text{minyak}} = 800\\text{ kg/m}^3$) setinggi $10\\text{ cm}$. Selisih ketinggian permukaan air pada kedua kaki pipa U ($\Delta h_{\\text{air}}$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6\\text{ cm}$",
      "$8\\text{ cm}$",
      "$10\\text{ cm}$",
      "$12{,}5\\text{ cm}$",
      "$16\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Berdasarkan Hukum Utama Hidrostatis pada bidang batas antara minyak dan air:<br>$$P_{\\text{kiri}} = P_{\\text{kanan}} \\iff \\rho_{\\text{air}} \\cdot g \\cdot \\Delta h_{\\text{air}} = \\rho_{\\text{minyak}} \\cdot g \\cdot h_{\\text{minyak}}$$Sehingga:<br>$$\\Delta h_{\\text{air}} = \\frac{\\rho_{\\text{minyak}}}{\\rho_{\\text{air}}} \\cdot h_{\\text{minyak}}$$",
      steps: "1. Identifikasi data dari soal:<br>• $\\rho_{\\text{air}} = 1000\\text{ kg/m}^3$<br>• $\\rho_{\\text{minyak}} = 800\\text{ kg/m}^3$<br>• $h_{\\text{minyak}} = 10\\text{ cm}$<br>2. Hitung selisih tinggi permukaan air:<br>$$\\Delta h_{\\text{air}} = \\frac{800}{1000} \\times 10\\text{ cm} = 0{,}8 \\times 10\\text{ cm} = 8\\text{ cm}$$",
      pitfalls: "Terkecoh membalik rasio massa jenis (menghitung $\\frac{1000}{800} \\times 10 = 12{,}5\\text{ cm}$, opsi D). Karena massa jenis air lebih besar daripada minyak, maka tinggi kolom air penyeimbang harus lebih pendek daripada tinggi kolom minyak."
    }
  },
  {
    id: "fis-flu-statis-pipau-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-pipau",
    category: "Hukum Utama Hidrostatis (Pipa U)",
    difficulty: "mudah",
    statement: "Sebuah pipa U mula-mula berisi air raksa dengan massa jenis $\\rho_{\\text{raksa}} = 13{,}6\\text{ g/cm}^3$. Ke dalam kaki kiri dituangkan cairan zat X setinggi $27{,}2\\text{ cm}$. Akibatnya, permukaan raksa pada kaki kanan naik sehingga terdapat selisih ketinggian permukaan raksa sebesar $2{,}0\\text{ cm}$ diukur dari bidang batas pisah antara zat X dan raksa di kaki kiri. Besar massa jenis zat cair X tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}5\\text{ g/cm}^3$",
      "$0{,}8\\text{ g/cm}^3$",
      "$1{,}0\\text{ g/cm}^3$",
      "$1{,}2\\text{ g/cm}^3$",
      "$2{,}0\\text{ g/cm}^3$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Dengan menarik garis horizontal melalui bidang batas pisah fluida di kaki kiri (titik 1) ke titik setara di kaki kanan (titik 2):<br>$$P_1 = P_2 \\iff \\rho_X \\cdot g \\cdot h_X = \\rho_{\\text{raksa}} \\cdot g \\cdot h_{\\text{raksa}}$$Maka massa jenis zat X dapat ditentukan melalui:<br>$$\\rho_X = \\frac{\\rho_{\\text{raksa}} \\cdot h_{\\text{raksa}}}{h_X}$$",
      steps: "1. Substitusikan besaran yang diketahui dalam satuan CGS:<br>• $\\rho_{\\text{raksa}} = 13{,}6\\text{ g/cm}^3$<br>• $h_{\\text{raksa}} = 2{,}0\\text{ cm}$<br>• $h_X = 27{,}2\\text{ cm}$<br>2. Hitung massa jenis zat X:<br>$$\\rho_X = \\frac{13{,}6\\text{ g/cm}^3 \\times 2{,}0\\text{ cm}}{27{,}2\\text{ cm}} = \\frac{27{,}2}{27{,}2} = 1{,}0\\text{ g/cm}^3$$",
      pitfalls: "Siswa terkadang salah membaca satuan dan mencoba mengonversi ke $\\text{kg/m}^3$ di tengah jalan namun lupa mengonversi ketinggian, menyebabkan kekeliruan perhitungan desimal."
    }
  },
  {
    id: "fis-flu-statis-pipau-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-pipau",
    category: "Hukum Utama Hidrostatis (Pipa U)",
    difficulty: "mudah",
    statement: "Sebuah pipa U yang memiliki luas penampang kaki kiri $A_1 = 4\\text{ cm}^2$ dan kaki kanan $A_2 = 12\\text{ cm}^2$ mula-mula diisi air (massa jenis $\\rho_a = 1{,}0\\text{ g/cm}^3$). Kemudian ke dalam kaki kiri dituangkan minyak (massa jenis $\\rho_m = 0{,}75\\text{ g/cm}^3$) setinggi $h_m = 16\\text{ cm}$. Kenaikan permukaan air pada kaki kanan diukur dari posisi permukaan semula sebelum minyak dituangkan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\text{ cm}$",
      "$3\\text{ cm}$",
      "$4\\text{ cm}$",
      "$9\\text{ cm}$",
      "$12\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pada pipa U berpenampang tidak sama:<br>1) Kekekalan volume zat cair inkompresibel: Volume air yang tertekan turun pada kaki kiri sebesar $y_1$ sama dengan volume air yang naik pada kaki kanan sebesar $y_2$:<br>$$A_1 \\cdot y_1 = A_2 \\cdot y_2$$<br>2) Selisih tinggi permukaan air total adalah $\\Delta h_a = y_1 + y_2$.<br>3) Kesetimbangan hidrostatis pada bidang batas: $\\rho_m h_m = \\rho_a \\Delta h_a$.",
      steps: "1. Hitung selisih total ketinggian permukaan air ($\\Delta h_a$):<br>$$\\Delta h_a = \\frac{\\rho_m}{\\rho_a} \\cdot h_m = \\frac{0{,}75}{1{,}0} \\times 16\\text{ cm} = 12\\text{ cm}$$<br>2. Hubungkan penurunan $y_1$ dan kenaikan $y_2$ melalui kesamaan volume:<br>$$4 \\cdot y_1 = 12 \\cdot y_2 \\implies y_1 = 3 y_2$$<br>3. Substitusikan ke selisih total $\\Delta h_a$:<br>$$\\Delta h_a = y_1 + y_2 = 3 y_2 + y_2 = 4 y_2 = 12\\text{ cm} \\implies y_2 = 3\\text{ cm}$$",
      pitfalls: "Siswa sering mengira kenaikan di kaki kanan langsung sama dengan $\\Delta h_a = 12\\text{ cm}$ (opsi E) atau membagi dua rata $12 / 2 = 6\\text{ cm}$ tanpa memperhitungkan perbandingan luas penampang $A_1 : A_2 = 1 : 3$."
    }
  },
  {
    id: "fis-flu-statis-pipau-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-pipau",
    category: "Hukum Utama Hidrostatis (Pipa U)",
    difficulty: "mudah",
    statement: "Sebuah pipa U dengan kedua ujung terbuka ke atmosfer diisi air tawar (massa jenis $\\rho_a = 1000\\text{ kg/m}^3$). Pada kaki kanan dituangkan zat cair organik (massa jenis $\\rho_b = 800\\text{ kg/m}^3$) setinggi $15\\text{ cm}$ sehingga kedua cairan tidak bercampur. Selisih ketinggian antara puncak permukaan cairan organik di kaki kanan dan puncak permukaan air di kaki kiri ($\\Delta H$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\text{ cm}$",
      "$3\\text{ cm}$",
      "$5\\text{ cm}$",
      "$8\\text{ cm}$",
      "$12\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Hukum utama hidrostatis menghubungkan tinggi kolom di atas bidang pisah:<br>$$\\rho_a \\cdot h_a = \\rho_b \\cdot h_b$$Selisih ketinggian antara kedua permukaan atas zat cair adalah selisih antara tinggi kolom zat cair organik dan tinggi kolom air penyeimbang:<br>$$\\Delta H = h_b - h_a$$",
      steps: "1. Hitung tinggi kolom air ($h_a$) di atas bidang batas:<br>$$h_a = \\frac{\\rho_b}{\\rho_a} \\cdot h_b = \\frac{800\\text{ kg/m}^3}{1000\\text{ kg/m}^3} \\times 15\\text{ cm} = 0{,}8 \\times 15\\text{ cm} = 12\\text{ cm}$$<br>2. Hitung selisih ketinggian puncak permukaan kedua cairan:<br>$$\\Delta H = h_b - h_a = 15\\text{ cm} - 12\\text{ cm} = 3\\text{ cm}$$",
      pitfalls: "Siswa sering menganggap bahwa selisih ketinggian yang ditanyakan adalah tinggi kolom air $h_a = 12\\text{ cm}$ (opsi E), padahal yang diminta adalah selisih antara puncak permukaan cairan organik dan puncak permukaan air ($h_b - h_a$)."
    }
  }
];
