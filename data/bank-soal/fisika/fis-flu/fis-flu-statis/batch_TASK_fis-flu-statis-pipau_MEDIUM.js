/**
 * Batch Task: TASK_fis-flu-statis-pipau_MEDIUM
 * SubTopic: Hukum Utama Hidrostatis (Pipa U) (fis-flu-statis-pipau)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-flu-statis-pipau-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-pipau",
    category: "Hukum Utama Hidrostatis (Pipa U)",
    difficulty: "sedang",
    statement: "Sebuah pipa U mula-mula berisi air raksa dengan massa jenis $\\rho_r = 13{,}6\\text{ g/cm}^3$. Ke dalam kaki kiri pipa dituangkan air (massa jenis $\\rho_a = 1{,}0\\text{ g/cm}^3$) setinggi $20\\text{ cm}$, sedangkan ke dalam kaki kanan dituangkan minyak (massa jenis $\\rho_m = 0{,}8\\text{ g/cm}^3$) setinggi $8\\text{ cm}$. Ketiga zat cair tersebut tidak saling bercampur. Selisih ketinggian permukaan air raksa pada kedua kaki pipa U ($\\Delta h_r$) dalam kondisi setimbang statis adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}5\\text{ cm}$",
      "$1{,}0\\text{ cm}$",
      "$1{,}5\\text{ cm}$",
      "$2{,}0\\text{ cm}$",
      "$2{,}5\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Berdasarkan Hukum Utama Hidrostatis, kita buat bidang acuan horizontal yang melewati batas terendah antara raksa dan fluida lainnya (dalam hal ini bidang batas raksa di kaki kiri yang tertekan lebih dalam):<br>$$P_{\\text{kiri}} = P_{\\text{kanan}} \\iff P_0 + \\rho_a \\cdot g \\cdot h_a = P_0 + \\rho_m \\cdot g \\cdot h_m + \\rho_r \\cdot g \\cdot \\Delta h_r$$Sehingga selisih tinggi raksa dirumuskan:<br>$$\\Delta h_r = \\frac{\\rho_a \\cdot h_a - \\rho_m \\cdot h_m}{\\rho_r}$$",
      steps: "1. Bandingkan tekanan yang diberikan oleh kolom cairan di kaki kiri dan kanan:<br>• Tekanan air kaki kiri: $\\rho_a \\cdot h_a = 1{,}0 \\times 20 = 20\\text{ g/cm}^2$<br>• Tekanan minyak kaki kanan: $\\rho_m \\cdot h_m = 0{,}8 \\times 8 = 6{,}4\\text{ g/cm}^2$<br>2. Karena tekanan kolom air lebih besar dari minyak, raksa di kaki kiri tertekan lebih ke bawah, sehingga raksa di kaki kanan lebih tinggi sebesar $\\Delta h_r$:<br>$$\\Delta h_r = \\frac{20 - 6{,}4}{13{,}6} = \\frac{13{,}6}{13{,}6} = 1{,}0\\text{ cm}$$",
      pitfalls: "Siswa sering langsung menjumlahkan kedua ketinggian atau salah menentukan kaki mana yang raksanya lebih tinggi karena tidak menghitung hasil kali $\\rho \\cdot h$ masing-masing cairan terlebih dahulu."
    }
  },
  {
    id: "fis-flu-statis-pipau-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-pipau",
    category: "Hukum Utama Hidrostatis (Pipa U)",
    difficulty: "sedang",
    statement: "Sebuah pipa U yang memiliki dua kaki vertikal berjarak horizontal $L = 20\\text{ cm}$ satu sama lain berisi cairan homogen. Pipa U tersebut diletakkan di atas sebuah troli yang sedang bergerak di lintasan mendatar dengan percepatan horizontal tetap $a = 3\\text{ m/s}^2$ ke arah kanan. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, selisih ketinggian permukaan cairan antara kedua kaki pipa U ($\\Delta h$) saat cairan berada dalam keadaan setimbang relatif terhadap troli adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3\\text{ cm}$",
      "$4\\text{ cm}$",
      "$6\\text{ cm}$",
      "$8\\text{ cm}$",
      "$10\\text{ cm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Ketika bejana fluida mengalami percepatan horizontal $a$, permukaan bebas zat cair membentuk sudut kemiringan $\\theta$ terhadap bidang mendatar akibat resultan gaya berat dan gaya inersia (fiktif):<br>$$\\tan \\theta = \\frac{a}{g}$$Untuk pipa U dengan jarak antarkaki vertikal $L$, selisih tinggi cairan antara kedua kaki dirumuskan:<br>$$\\frac{\\Delta h}{L} = \\tan \\theta = \\frac{a}{g} \\implies \\Delta h = L \\cdot \\frac{a}{g}$$",
      steps: "1. Identifikasi parameter:<br>• Jarak horizontal kedua kaki: $L = 20\\text{ cm}$<br>• Percepatan horizontal ke kanan: $a = 3\\text{ m/s}^2$<br>• Percepatan gravitasi bumi: $g = 10\\text{ m/s}^2$<br>2. Hitung selisih tinggi permukaan zat cair:<br>$$\\Delta h = 20\\text{ cm} \\times \\frac{3\\text{ m/s}^2}{10\\text{ m/s}^2} = 6\\text{ cm}$$<br>(Permukaan zat cair di kaki kiri lebih tinggi daripada kaki kanan karena dorongan inersia ke arah berlawanan dari percepatan).",
      pitfalls: "Siswa sering membalik perbandingan menjadi $g/a$ yang menghasilkan nilai tidak fisis, atau lupa bahwa fluida akan menumpuk ke arah belakang (kiri) saat troli dipercepat ke kanan."
    }
  },
  {
    id: "fis-flu-statis-pipau-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-pipau",
    category: "Hukum Utama Hidrostatis (Pipa U)",
    difficulty: "sedang",
    statement: "Sebuah pipa U memiliki satu kaki tertutup rapat dan satu kaki terbuka ke udara luar (tekanan atmosfer $P_0 = 76\\text{ cmHg}$). Mula-mula permukaan air raksa pada kedua kaki sama tinggi, dan pada kaki yang tertutup terperangkap kolom udara sepanjang $L_1 = 20\\text{ cm}$. Kemudian sejumlah raksa ditambahkan secara perlahan ke dalam kaki yang terbuka hingga pada suhu konstan (isotermal) panjang kolom udara yang terperangkap menyusut menjadi $L_2 = 16\\text{ cm}$. Selisih ketinggian permukaan raksa antara kaki terbuka dan kaki tertutup ($\\Delta h$) sekarang adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$9{,}5\\text{ cm}$",
      "$14\\text{ cm}$",
      "$19\\text{ cm}$",
      "$24\\text{ cm}$",
      "$28\\text{ cm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Masalah ini memadukan Hukum Boyle pada gas terperangkap dengan kesetimbangan hidrostatis manometer:<br>1) Proses isotermal gas ideal:<br>$$P_1 \\cdot V_1 = P_2 \\cdot V_2 \\iff P_1 \\cdot L_1 = P_2 \\cdot L_2$$<br>2) Karena awalnya kedua permukaan raksa sama tinggi dan berhubungan dengan atmosfer, maka $P_1 = P_0 = 76\\text{ cmHg}$.<br>3) Hubungan manometer setelah penambahan raksa:<br>$$P_2 = P_0 + \\Delta h \\implies \\Delta h = P_2 - P_0$$",
      steps: "1. Hitung tekanan gas terperangkap kondisi akhir ($P_2$):<br>$$P_2 = P_1 \\cdot \\frac{L_1}{L_2} = 76\\text{ cmHg} \\times \\frac{20\\text{ cm}}{16\\text{ cm}} = 76 \\times 1{,}25 = 95\\text{ cmHg}$$<br>2. Hitung selisih tinggi kolom raksa $\\Delta h$:<br>$$\\Delta h = P_2 - P_0 = 95\\text{ cmHg} - 76\\text{ cmHg} = 19\\text{ cmHg} = 19\\text{ cm}$$",
      pitfalls: "Terkecoh menganggap $\\Delta h$ sama dengan selisih penyusutan kolom udara ($20 - 16 = 4\\text{ cm}$), atau mengabaikan tekanan atmosfer awal sehingga salah menghitung tekanan akhir gas."
    }
  },
  {
    id: "fis-flu-statis-pipau-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-pipau",
    category: "Hukum Utama Hidrostatis (Pipa U)",
    difficulty: "sedang",
    statement: "Sebuah pipa U simetris yang berisi zat cair diputar terhadap sumbu vertikal yang tepat berada di tengah antara kedua kakinya dengan kecepatan sudut tetap $\\omega = 10\\text{ rad/s}$. Jarak antara kedua kaki vertikal pipa U adalah $2R = 20\\text{ cm}$ (sehingga jarak masing-masing kaki ke sumbu putar adalah $R = 10\\text{ cm}$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, selisih ketinggian permukaan zat cair pada kaki vertikal terhadap permukaan zat cair di sumbu pusat putaran ($\\Delta y$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2{,}5\\text{ cm}$",
      "$5{,}0\\text{ cm}$",
      "$7{,}5\\text{ cm}$",
      "$10{,}0\\text{ cm}$",
      "$12{,}5\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Fluida yang berotasi dengan kecepatan sudut konstan $\\omega$ terhadap sumbu vertikal membentuk permukaan bebas berupa paraboloid revolusi yang memenuhi persamaan ketinggian:<br>$$y(r) = \\frac{\\omega^2 \\cdot r^2}{2g}$$Kenaikan permukaan pada jarak radial $r = R$ relatif terhadap titik terendah di sumbu putaran ($r = 0$) adalah:<br>$$\\Delta y = y(R) - y(0) = \\frac{\\omega^2 \\cdot R^2}{2g}$$",
      steps: "1. Konversikan jari-jari putar ke satuan meter:<br>• Jarak kaki vertikal dari sumbu putar: $R = 10\\text{ cm} = 0{,}1\\text{ m}$<br>• Kecepatan sudut: $\\omega = 10\\text{ rad/s}$<br>• Percepatan gravitasi: $g = 10\\text{ m/s}^2$<br>2. Hitung kenaikan tinggi permukaan zat cair:<br>$$\\Delta y = \\frac{(10\\text{ rad/s})^2 \\times (0{,}1\\text{ m})^2}{2 \\times 10\\text{ m/s}^2} = \\frac{100 \\times 0{,}01}{20} = \\frac{1}{20}\\text{ m} = 0{,}05\\text{ m} = 5{,}0\\text{ cm}$$",
      pitfalls: "Lupa membagi dengan faktor 2 pada penyebut $\\frac{\\omega^2 R^2}{2g}$ sehingga menghasilkan $10{,}0\\text{ cm}$ (opsi D), atau keliru menggunakan diameter $20\\text{ cm}$ alih-alih jari-jari radial $10\\text{ cm}$."
    }
  },
  {
    id: "fis-flu-statis-pipau-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-pipau",
    category: "Hukum Utama Hidrostatis (Pipa U)",
    difficulty: "sedang",
    statement: "Sebuah pipa U memiliki luas penampang kaki kiri $A_1 = 10\\text{ cm}^2$ dan penampang kaki kanan $A_2 = 20\\text{ cm}^2$. Pipa mula-mula berisi air raksa (massa jenis $\\rho_r = 13{,}6\\text{ g/cm}^3$) hingga kedua permukaan berada pada ketinggian yang sama. Kemudian ke dalam kaki kanan dituangkan air (massa jenis $\\rho_a = 1{,}0\\text{ g/cm}^3$) dengan massa total $m = 408\\text{ gram}$. Jika seluruh air tertampung di kaki kanan di atas raksa, kenaikan permukaan raksa pada kaki kiri diukur dari posisi semula adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}5\\text{ cm}$",
      "$1{,}0\\text{ cm}$",
      "$1{,}5\\text{ cm}$",
      "$2{,}0\\text{ cm}$",
      "$2{,}5\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "1) Volume air yang dituangkan: $V_a = \\frac{m}{\\rho_a}$, dan tinggi kolom air pada kaki kanan: $h_a = \\frac{V_a}{A_2}$.<br>2) Tekanan hidrostatis air pada batas pisah diimbangi oleh selisih total tinggi raksa $\\Delta h_r$:<br>$$\\rho_a \\cdot h_a = \\rho_r \\cdot \\Delta h_r \\implies \\Delta h_r = \\frac{\\rho_a \\cdot h_a}{\\rho_r}$$<br>3) Jika raksa di kaki kiri naik sebesar $y_1$ dan raksa di kaki kanan turun sebesar $y_2$, maka kekekalan volume raksa menyatakan $A_1 y_1 = A_2 y_2$, serta $\\Delta h_r = y_1 + y_2$.",
      steps: "1. Hitung volume dan tinggi kolom air di kaki kanan:<br>$$V_a = \\frac{408\\text{ g}}{1{,}0\\text{ g/cm}^3} = 408\\text{ cm}^3$$<br>$$h_a = \\frac{408\\text{ cm}^3}{20\\text{ cm}^2} = 20{,}4\\text{ cm}$$<br>2. Hitung selisih total ketinggian raksa ($\\Delta h_r$):<br>$$\\Delta h_r = \\frac{1{,}0 \\times 20{,}4}{13{,}6} = 1{,}5\\text{ cm}$$<br>3. Hubungkan kenaikan $y_1$ dan penurunan $y_2$:<br>$$10 \\cdot y_1 = 20 \\cdot y_2 \\implies y_2 = 0{,}5 y_1$$<br>$$\\Delta h_r = y_1 + y_2 = 1{,}5 y_1 = 1{,}5\\text{ cm} \\implies y_1 = 1{,}0\\text{ cm}$$",
      pitfalls: "Siswa sering mengira kenaikan raksa di kaki kiri sama dengan selisih total ketinggian $\\Delta h_r = 1{,}5\\text{ cm}$ (opsi C), atau membagi dua rata tanpa memperhatikan perbandingan luas penampang $A_1 : A_2 = 1 : 2$."
    }
  }
];
