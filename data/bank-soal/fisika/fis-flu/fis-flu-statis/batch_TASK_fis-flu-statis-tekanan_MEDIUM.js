/**
 * Batch Task: TASK_fis-flu-statis-tekanan_MEDIUM
 * SubTopic: Tekanan Hidrostatis & Mutlak (fis-flu-statis-tekanan)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-flu-statis-tekanan-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-tekanan",
    category: "Tekanan Hidrostatis & Mutlak",
    difficulty: "sedang",
    statement: "Sebuah bejana silinder tegak berisi dua jenis zat cair yang tidak dapat bercampur. Lapisan atas berupa minyak dengan massa jenis $\\rho_{\\text{minyak}} = 800\\text{ kg/m}^3$ setinggi $30\\text{ cm}$, sedangkan lapisan bawah berupa air dengan massa jenis $\\rho_{\\text{air}} = 1000\\text{ kg/m}^3$ setinggi $50\\text{ cm}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$ dan tekanan udara luar di atas permukaan minyak adalah $P_0 = 1{,}0 \\times 10^5\\text{ Pa}$, maka besar tekanan hidrostatis murni pada dasar bejana dan tekanan mutlaknya berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$7{,}4 \\times 10^3\\text{ Pa}$ dan $1{,}074 \\times 10^5\\text{ Pa}$",
      "$5{,}0 \\times 10^3\\text{ Pa}$ dan $1{,}050 \\times 10^5\\text{ Pa}$",
      "$7{,}4 \\times 10^3\\text{ Pa}$ dan $1{,}740 \\times 10^5\\text{ Pa}$",
      "$2{,}4 \\times 10^3\\text{ Pa}$ dan $1{,}024 \\times 10^5\\text{ Pa}$",
      "$9{,}8 \\times 10^3\\text{ Pa}$ dan $1{,}098 \\times 10^5\\text{ Pa}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada fluida berlapis yang tidak saling bercampur, tekanan hidrostatis total pada dasar bejana merupakan penjumlahan tekanan hidrostatis masing-masing lapisan fluida:<br>$$P_h = \\sum_{i} \\rho_i \\cdot g \\cdot h_i = \\rho_{\\text{minyak}} g h_{\\text{minyak}} + \\rho_{\\text{air}} g h_{\\text{air}}$$Sedangkan tekanan mutlak diperoleh dengan menjumlahkan tekanan atmosfer permukaan:<br>$$P_{\\text{mutlak}} = P_0 + P_h$$",
      steps: "1. Konversikan ketinggian tiap lapisan ke meter:<br>• $h_{\\text{minyak}} = 30\\text{ cm} = 0{,}3\\text{ m}$<br>• $h_{\\text{air}} = 50\\text{ cm} = 0{,}5\\text{ m}$<br>2. Hitung kontribusi tekanan hidrostatis masing-masing lapisan:<br>• Lapisan minyak: $P_{h1} = 800\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 0{,}3\\text{ m} = 2.400\\text{ Pa}$<br>• Lapisan air: $P_{h2} = 1000\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 0{,}5\\text{ m} = 5.000\\text{ Pa}$<br>3. Tekanan hidrostatis total pada dasar:<br>$$P_h = 2.400\\text{ Pa} + 5.000\\text{ Pa} = 7.400\\text{ Pa} = 7{,}4 \\times 10^3\\text{ Pa}$$<br>4. Tekanan mutlak pada dasar bejana:<br>$$P_{\\text{mutlak}} = 1{,}0 \\times 10^5\\text{ Pa} + 0{,}074 \\times 10^5\\text{ Pa} = 1{,}074 \\times 10^5\\text{ Pa}$$",
      pitfalls: "Siswa sering hanya memperhitungkan tekanan dari lapisan air saja ($5{,}0 \\times 10^3\\text{ Pa}$) dan mengabaikan beban fluida minyak di atasnya yang turut menekan ke bawah."
    }
  },
  {
    id: "fis-flu-statis-tekanan-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-tekanan",
    category: "Tekanan Hidrostatis & Mutlak",
    difficulty: "sedang",
    statement: "Sebuah pintu air bendungan berbentuk bidang persegi panjang vertikal dengan lebar $w = 2\\text{ meter}$ dan tinggi $H = 4\\text{ meter}$. Air waduk (massa jenis $\\rho = 1000\\text{ kg/m}^3$) terisi penuh hingga mencapai tepi atas pintu air. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya resultan yang dikerjakan oleh air pada dinding pintu air tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$8{,}0 \\times 10^4\\text{ N}$",
      "$1{,}6 \\times 10^5\\text{ N}$",
      "$3{,}2 \\times 10^5\\text{ N}$",
      "$4{,}0 \\times 10^4\\text{ N}$",
      "$6{,}4 \\times 10^5\\text{ N}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Karena tekanan hidrostatis bertambah secara linier terhadap kedalaman ($P(y) = \\rho g y$), maka gaya total pada dinding vertikal diperoleh dari integrasi atau perkalian antara tekanan rata-rata fluida (tekanan pada titik berat luasan, $\\bar{y} = H/2$) dengan luas penampang dinding:<br>$$F = \\bar{P} \\cdot A = \\left(\\frac{1}{2} \\rho \\cdot g \\cdot H\\right) \\cdot (w \\cdot H) = \\frac{1}{2} \\rho \\cdot g \\cdot w \\cdot H^2$$",
      steps: "1. Menentukan tekanan rata-rata pada dinding vertikal:<br>• Tekanan di permukaan ($y = 0$): $P_0 = 0$<br>• Tekanan di dasar ($y = H$): $P_{\\text{dasar}} = 1000 \\times 10 \\times 4 = 40.000\\text{ N/m}^2$<br>• Tekanan rata-rata: $\\bar{P} = \\frac{0 + 40.000}{2} = 20.000\\text{ N/m}^2$<br>2. Menghitung luas dinding pintu air:<br>$$A = w \\cdot H = 2\\text{ m} \\times 4\\text{ m} = 8\\text{ m}^2$$<br>3. Menghitung gaya dorong total air:<br>$$F = \\bar{P} \\cdot A = 20.000\\text{ N/m}^2 \\times 8\\text{ m}^2 = 160.000\\text{ N} = 1{,}6 \\times 10^5\\text{ N}$$",
      pitfalls: "Kesalahan paling fatal adalah langsung mengalikan tekanan hidrostatis maksimum di dasar ($40.000\\text{ Pa}$) dengan seluruh luas dinding ($8\\text{ m}^2$) sehingga menghasilkan $3{,}2 \\times 10^5\\text{ N}$ (opsi C). Tekanan bervariasi dari nol di atas hingga maksimum di dasar sehingga wajib menggunakan nilai rata-rata."
    }
  },
  {
    id: "fis-flu-statis-tekanan-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-tekanan",
    category: "Tekanan Hidrostatis & Mutlak",
    difficulty: "sedang",
    statement: "Sebuah gelembung udara kecil terbentuk dan dilepaskan dari dasar sebuah danau berair tenang. Saat gelembung tersebut naik perlahan dan tepat mencapai permukaan danau, volumenya membesar menjadi $3$ kali volume semula. Jika suhu air danau dianggap seragam dari dasar hingga permukaan (proses isotermal), tekanan atmosfer di permukaan danau $P_0 = 10^5\\text{ Pa}$, massa jenis air $\\rho = 1000\\text{ kg/m}^3$, dan $g = 10\\text{ m/s}^2$, kedalaman danau tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ meter}$",
      "$15\\text{ meter}$",
      "$20\\text{ meter}$",
      "$30\\text{ meter}$",
      "$40\\text{ meter}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada kondisi suhu konstan (isotermal), gas di dalam gelembung mematuhi Hukum Boyle:<br>$$P_1 \\cdot V_1 = P_2 \\cdot V_2$$Di dasar danau, tekanan mutlak adalah $P_1 = P_0 + \\rho g h$. Di permukaan danau, tekanan adalah $P_2 = P_0$.",
      steps: "1. Tuliskan persamaan Hukum Boyle:<br>$$(P_0 + \\rho \\cdot g \\cdot h) \\cdot V_1 = P_0 \\cdot (3V_1)$$<br>2. Sederhanakan dengan membagi kedua ruas dengan $V_1$:<br>$$P_0 + \\rho \\cdot g \\cdot h = 3P_0 \\iff \\rho \\cdot g \\cdot h = 2P_0$$<br>3. Hitung kedalaman $h$:<br>$$h = \\frac{2P_0}{\\rho \\cdot g} = \\frac{2 \\times 10^5\\text{ Pa}}{1000\\text{ kg/m}^3 \\times 10\\text{ m/s}^2} = \\frac{200.000}{10.000} = 20\\text{ meter}$$",
      pitfalls: "Siswa sering lupa bahwa di permukaan air masih terdapat tekanan atmosfer $P_0$, sehingga secara keliru menuliskan $\\rho g h = 3 P_0$ yang menghasilkan kedalaman $30\\text{ meter}$ (opsi D)."
    }
  },
  {
    id: "fis-flu-statis-tekanan-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-tekanan",
    category: "Tekanan Hidrostatis & Mutlak",
    difficulty: "sedang",
    statement: "Sebuah bejana silinder berisi air tawar (massa jenis $\\rho = 1000\\text{ kg/m}^3$) setinggi $60\\text{ cm}$ diletakkan di lantai sebuah lift. Tepat pada kedalaman $20\\text{ cm}$ di bawah permukaan air dipasang sebuah sensor tekanan hidrostatis. Jika lift bergerak vertikal ke atas dengan percepatan tetap $a = 2\\text{ m/s}^2$ (percepatan gravitasi bumi $g = 10\\text{ m/s}^2$), besar tekanan hidrostatis yang dideteksi oleh sensor tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1.600\\text{ Pa}$",
      "$2.000\\text{ Pa}$",
      "$2.400\\text{ Pa}$",
      "$4.800\\text{ Pa}$",
      "$7.200\\text{ Pa}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Dalam kerangka non-inersial lift yang dipercepat ke atas dengan percepatan $a$, fluida mengalami medan gravitasi efektif sebesar:<br>$$g_{\\text{eff}} = g + a$$Sehingga tekanan hidrostatis fluida pada kedalaman $h$ menjadi:<br>$$P_h = \\rho \\cdot g_{\\text{eff}} \\cdot h = \\rho (g + a) h$$",
      steps: "1. Tentukan percepatan efektif fluida:<br>$$g_{\\text{eff}} = 10\\text{ m/s}^2 + 2\\text{ m/s}^2 = 12\\text{ m/s}^2$$<br>2. Konversikan kedalaman sensor: $h = 20\\text{ cm} = 0{,}2\\text{ m}$<br>3. Hitung tekanan hidrostatis pada sensor:<br>$$P_h = 1000\\text{ kg/m}^3 \\times 12\\text{ m/s}^2 \\times 0{,}2\\text{ m} = 2.400\\text{ Pa}$$",
      pitfalls: "Menggunakan $g = 10\\text{ m/s}^2$ tanpa mempertimbangkan percepatan lift menghasilkan $2.000\\text{ Pa}$ (opsi B), atau mengurangkan gravitasi $g - a$ menghasilkan $1.600\\text{ Pa}$ (opsi A, yang merupakan kasus jika lift bergerak dipercepat ke bawah)."
    }
  },
  {
    id: "fis-flu-statis-tekanan-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-tekanan",
    category: "Tekanan Hidrostatis & Mutlak",
    difficulty: "sedang",
    statement: "Sebuah wadah tabung gas tertutup dihubungkan dengan manometer pipa U terbuka yang berisi air raksa (massa jenis $\\rho_{\\text{raksa}} = 13.600\\text{ kg/m}^3$). Permukaan raksa pada kaki manometer yang terbuka ke udara luar berada $15\\text{ cm}$ lebih tinggi daripada permukaan raksa pada kaki yang tersambung ke tabung gas. Jika tekanan atmosfer terukur $P_{\\text{atm}} = 1{,}00 \\times 10^5\\text{ Pa}$ dan percepatan gravitasi $g = 10\\text{ m/s}^2$, besar tekanan mutlak gas di dalam tabung adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}204 \\times 10^5\\text{ Pa}$",
      "$0{,}796 \\times 10^5\\text{ Pa}$",
      "$2{,}040 \\times 10^4\\text{ Pa}$",
      "$1{,}020 \\times 10^5\\text{ Pa}$",
      "$2{,}204 \\times 10^5\\text{ Pa}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada manometer pipa U terbuka, selisih tinggi permukaan raksa $\\Delta h$ menunjukkan perbedaan antara tekanan gas di dalam wadah dan tekanan atmosfer luar:<br>$$P_{\\text{gas}} = P_{\\text{atm}} + \\rho_{\\text{raksa}} \\cdot g \\cdot \\Delta h$$Tanda positif digunakan karena permukaan raksa pada kaki terbuka lebih tinggi, menandakan tekanan gas lebih besar daripada tekanan atmosfer.",
      steps: "1. Konversikan selisih tinggi raksa: $\\Delta h = 15\\text{ cm} = 0{,}15\\text{ m}$<br>2. Hitung tekanan ukur (gauge pressure) kolom raksa:<br>$$P_{\\text{gauge}} = \\rho_{\\text{raksa}} \\cdot g \\cdot \\Delta h = 13.600\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 0{,}15\\text{ m} = 20.400\\text{ Pa} = 0{,}204 \\times 10^5\\text{ Pa}$$<br>3. Hitung tekanan mutlak gas di dalam tabung:<br>$$P_{\\text{gas}} = P_{\\text{atm}} + P_{\\text{gauge}} = 1{,}00 \\times 10^5\\text{ Pa} + 0{,}204 \\times 10^5\\text{ Pa} = 1{,}204 \\times 10^5\\text{ Pa}$$",
      pitfalls: "Siswa sering keliru mengurangkan tekanan atmosfer ($P_{\\text{atm}} - \\Delta P$) sehingga menghasilkan $0{,}796 \\times 10^5\\text{ Pa}$ (opsi B). Perhatikan baik-baik kaki mana yang lebih tinggi: jika kaki terbuka yang lebih tinggi, artinya tekanan gas mampu mendorong fluida lebih kuat daripada udara luar."
    }
  }
];
