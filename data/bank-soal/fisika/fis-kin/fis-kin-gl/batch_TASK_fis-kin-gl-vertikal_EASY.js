module.exports = [
  {
    id: "fis-kin-gl-vertikal-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-vertikal",
    category: "Gerak Vertikal & Jatuh Bebas",
    difficulty: "mudah",
    statement: "Sebuah buah kelapa terlepas dari tangkai pohonnya dan jatuh bebas dari ketinggian $h = 20\\text{ meter}$ di atas permukaan tanah. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$ dan hambatan udara diabaikan, waktu yang diperlukan buah kelapa untuk mencapai tanah dan kecepatannya saat menyentuh tanah berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\text{ sekon}$ dan $20\\text{ m/s}$",
      "$2\\text{ sekon}$ dan $10\\text{ m/s}$",
      "$4\\text{ sekon}$ dan $20\\text{ m/s}$",
      "$1\\text{ sekon}$ dan $20\\text{ m/s}$",
      "$2\\text{ sekon}$ dan $40\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gerak Jatuh Bebas (GJB) adalah gerak lurus berubah beraturan vertikal ke bawah dengan kecepatan awal nol ($v_0 = 0$) dan percepatan $a = g$:<br>$$t = \\sqrt{\\frac{2h}{g}}$$<br>$$v_t = \\sqrt{2gh} = g \\cdot t$$",
      steps: "1. Hitung waktu jatuh bebas:<br>$$t = \\sqrt{\\frac{2(20\\text{ m})}{10\\text{ m/s}^2}} = \\sqrt{4} = 2\\text{ sekon}$$<br>2. Hitung kecepatan saat menyentuh tanah:<br>$$v_t = g \\cdot t = 10\\text{ m/s}^2 \\times 2\\text{ s} = 20\\text{ m/s}$$",
      pitfalls: "Lupa mengalikan angka 2 pada $\\frac{2h}{g}$ saat menghitung waktu jatuh sehingga mendapatkan $t = \\sqrt{20/10} = \\sqrt{2}$."
    }
  },
  {
    id: "fis-kin-gl-vertikal-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-vertikal",
    category: "Gerak Vertikal & Jatuh Bebas",
    difficulty: "mudah",
    statement: "Sebuah bola kasti dilemparkan vertikal ke atas dengan kecepatan awal $v_0 = 30\\text{ m/s}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, ketinggian maksimum yang dapat dicapai bola dan waktu tempuh untuk mencapai titik puncak tersebut berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$45\\text{ meter}$ dan $3\\text{ sekon}$",
      "$90\\text{ meter}$ dan $3\\text{ sekon}$",
      "$45\\text{ meter}$ dan $6\\text{ sekon}$",
      "$30\\text{ meter}$ dan $3\\text{ sekon}$",
      "$60\\text{ meter}$ dan $2\\text{ sekon}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada gerak vertikal ke atas, kecepatan di titik puncak adalah nol ($v_t = 0$):<br>$$t_{\\text{puncak}} = \\frac{v_0}{g}$$<br>$$h_{\\max} = \\frac{v_0^2}{2g}$$",
      steps: "1. Hitung waktu mencapai puncak:<br>$$t_{\\text{puncak}} = \\frac{30\\text{ m/s}}{10\\text{ m/s}^2} = 3\\text{ sekon}$$<br>2. Hitung tinggi maksimum:<br>$$h_{\\max} = \\frac{(30\\text{ m/s})^2}{2(10\\text{ m/s}^2)} = \\frac{900}{20} = 45\\text{ meter}$$",
      pitfalls: "Nilai $6\\text{ sekon}$ adalah waktu total bolak-balik di udara ($2 \\times t_{\\text{puncak}}$), bukan waktu mencapai titik puncak."
    }
  },
  {
    id: "fis-kin-gl-vertikal-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-vertikal",
    category: "Gerak Vertikal & Jatuh Bebas",
    difficulty: "mudah",
    statement: "Perbedaan mendasar antara Gerak Jatuh Bebas (GJB) dan Gerak Vertikal ke Bawah (GVB) terletak pada ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "GJB memiliki kecepatan awal sama dengan nol ($v_0 = 0$), sedangkan GVB memiliki kecepatan awal positif ($v_0 > 0$)",
      "GJB dipengaruhi percepatan gravitasi bumi sedangkan GVB tidak dipengaruhi gravitasi",
      "Percepatan pada GJB selalu lebih besar daripada percepatan pada GVB",
      "GJB hanya terjadi di ruang hampa sedangkan GVB hanya terjadi di udara terbuka",
      "Lintasan GJB berbentuk parabola sedangkan GVB berbentuk garis lurus"
    ],
    correctIndex: 0,
    solution: {
      concept: "Keduanya merupakan gerak lurus berubah beraturan dengan percepatan yang sama yaitu percepatan gravitasi bumi ($a = g$). Pembeda utamanya adalah kondisi awal: GJB dilepaskan tanpa kecepatan awal ($v_0 = 0$), sedangkan GVB dilemparkan ke bawah dengan kecepatan awal ($v_0 > 0$).",
      steps: "Analisis pilihan:<br>• Opsi A: Tepat, membedakan secara spesifik nilai kecepatan awal $v_0$.<br>• Opsi B: Salah, keduanya dipengaruhi gravitasi.<br>• Opsi C: Salah, nilai percepatannya sama-sama $g$.<br>• Opsi D: Salah, bukan syarat ruang.<br>• Opsi E: Keduanya gerak lurus satu dimensi vertikal.",
      pitfalls: "Terkadang siswa mengira gaya gravitasi pada gerak jatuh bebas berbeda dari gerak vertikal yang dilempar."
    }
  },
  {
    id: "fis-kin-gl-vertikal-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-vertikal",
    category: "Gerak Vertikal & Jatuh Bebas",
    difficulty: "mudah",
    statement: "Sebuah batu dilemparkan vertikal ke bawah dari balkon sebuah gedung dengan kecepatan awal $v_0 = 5\\text{ m/s}$. Jika batu tersebut membentur tanah setelah bergerak selama $2\\text{ sekon}$ dan $g = 10\\text{ m/s}^2$, ketinggian balkon tersebut dari permukaan tanah adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30\\text{ meter}$",
      "$20\\text{ meter}$",
      "$25\\text{ meter}$",
      "$40\\text{ meter}$",
      "$15\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Persamaan perpindahan vertikal ke bawah (GVB) dengan kecepatan awal $v_0$ adalah:<br>$$h = v_0 t + \\frac{1}{2} g t^2$$",
      steps: "1. Substitusikan $v_0 = 5\\text{ m/s}$, $t = 2\\text{ s}$, dan $g = 10\\text{ m/s}^2$:<br>$$h = (5\\text{ m/s})(2\\text{ s}) + \\frac{1}{2}(10\\text{ m/s}^2)(2\\text{ s})^2$$<br>$$h = 10 + \\frac{1}{2}(10)(4) = 10 + 20 = 30\\text{ meter}$$",
      pitfalls: "Lupa menjumlahkan suku $v_0 t$ sehingga hanya menghitung $\\frac{1}{2} g t^2 = 20\\text{ m}$ (seolah-olah jatuh bebas tanpa kecepatan awal)."
    }
  },
  {
    id: "fis-kin-gl-vertikal-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-vertikal",
    category: "Gerak Vertikal & Jatuh Bebas",
    difficulty: "mudah",
    statement: "Dua benda padat dengan massa berbeda, yaitu bola besi ($m_1 = 5\\text{ kg}$) dan kelereng ($m_2 = 50\\text{ gram}$), dijatuhkan bebas secara bersamaan dari ketinggian yang sama di dalam tabung hampa udara. Pernyataan yang benar mengenai waktu jatuh kedua benda hingga menyentuh dasar tabung adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Kedua benda mencapai dasar pada saat yang bersamaan karena percepatan gravitasi tidak bergantung pada massa benda",
      "Bola besi mencapai dasar lebih cepat karena memiliki gaya berat yang lebih besar",
      "Kelereng mencapai dasar lebih cepat karena massanya lebih ringan sehingga lebih lincah",
      "Bola besi memerlukan waktu dua kali lipat lebih lama",
      "Kedua benda melayang di dalam tabung hampa dan tidak jatuh ke dasar"
    ],
    correctIndex: 0,
    solution: {
      concept: "Berdasarkan Hukum II Newton dan Hukum Gravitasi Universal: $F = m a \\implies m g = m a \\implies a = g$. Percepatan jatuh bebas tidak bergantung pada massa benda ($m$). Karena percepatan $g$ dan ketinggian awal $h$ identik, waktu tempuh $t = \\sqrt{\\frac{2h}{g}}$ kedua benda bernilai tepat sama.",
      steps: "1. Tinjau persamaan waktu jatuh bebas: $t = \\sqrt{\\frac{2h}{g}}$.<br>2. Persamaan ini tidak memuat variabel massa ($m$).<br>3. Karena berada di ruang hampa (tanpa gesekan udara), kedua benda jatuh bebas murni dan tiba di dasar secara bersamaan.",
      pitfalls: "Miskonsepsi intuitif Aristoteles yang menganggap benda yang lebih berat selalu jatuh lebih cepat daripada benda yang lebih ringan di ruang hampa."
    }
  }
];
