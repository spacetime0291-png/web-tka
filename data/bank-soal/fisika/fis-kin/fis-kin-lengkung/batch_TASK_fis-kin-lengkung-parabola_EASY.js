module.exports = [
  {
    id: "fis-kin-lengkung-parabola-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-parabola",
    category: "Vektor Gerak Parabola",
    difficulty: "mudah",
    statement: "Prinsip pemisahan komponen gerak pada lintasan gerak parabola dua dimensi menyatakan bahwa sifat gerak pada sumbu horizontal ($x$) dan sumbu vertikal ($y$) berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Gerak Lurus Beraturan (GLB) pada sumbu-$x$ dan Gerak Lurus Berubah Beraturan (GLBB) pada sumbu-$y$",
      "GLBB pada sumbu-$x$ dan GLB pada sumbu-$y$",
      "GLB pada kedua sumbu gerak",
      "GLBB dipercepat pada kedua sumbu gerak",
      "Gerak Melingkar Beraturan pada sumbu-$x$ dan GLB pada sumbu-$y$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gerak parabola adalah perpaduan dua gerak saling tegak lurus yang independen:<br>• Sumbu-$x$ (horizontal): tidak bekerja gaya luar ($F_x = 0 \\implies a_x = 0$), sehingga berlaku Gerak Lurus Beraturan (GLB).<br>• Sumbu-$y$ (vertikal): bekerja gaya gravitasi bumi konstan ($a_y = -g$), sehingga berlaku Gerak Lurus Berubah Beraturan (GLBB).",
      steps: "1. Tinjau gaya horizontal: Gesekan udara diabaikan $\\implies a_x = 0 \\implies$ kecepatan $v_x = \\text{konstan}$ (GLB).<br>2. Tinjau gaya vertikal: Gaya gravitasi bumi bekerja ke bawah $\\implies a_y = -g \\implies$ GLBB terpengaruh gravitasi.<br>3. Kesimpulan: Sumbu-$x$ GLB dan sumbu-$y$ GLBB.",
      pitfalls: "Terkecoh menganggap sumbu-$x$ juga mengalami perlambatan gravitasi, padahal gaya gravitasi bekerja eksklusif pada arah vertikal."
    }
  },
  {
    id: "fis-kin-lengkung-parabola-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-parabola",
    category: "Vektor Gerak Parabola",
    difficulty: "mudah",
    statement: "Sebuah peluru meriam ditembakkan dari tanah dengan kelajuan awal $v_0 = 50\\text{ m/s}$ pada sudut elevasi $37^\\circ$ terhadap bidang datar (diketahui $\\sin 37^\\circ = 0{,}6$ dan $\\cos 37^\\circ = 0{,}8$). Besar komponen kecepatan awal pada sumbu horizontal ($v_{0x}$) dan sumbu vertikal ($v_{0y}$) berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$40\\text{ m/s}$ dan $30\\text{ m/s}$",
      "$30\\text{ m/s}$ dan $40\\text{ m/s}$",
      "$50\\text{ m/s}$ dan $30\\text{ m/s}$",
      "$40\\text{ m/s}$ dan $50\\text{ m/s}$",
      "$25\\text{ m/s}$ dan $25\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Penguraian vektor kecepatan awal $v_0$ dengan sudut elevasi $\\theta$ terhadap garis horizontal:<br>$$v_{0x} = v_0 \\cos\\theta$$<br>$$v_{0y} = v_0 \\sin\\theta$$",
      steps: "1. Hitung komponen horizontal ($v_{0x}$):<br>$$v_{0x} = 50\\text{ m/s} \\times \\cos 37^\\circ = 50 \\times 0{,}8 = 40\\text{ m/s}$$<br>2. Hitung komponen vertikal ($v_{0y}$):<br>$$v_{0y} = 50\\text{ m/s} \\times \\sin 37^\\circ = 50 \\times 0{,}6 = 30\\text{ m/s}$$",
      pitfalls: "Tertukar fungsi sinus dan kosinus pada penguraian sumbu: $v_{0x}$ menggunakan kosinus terhadap sumbu horizontal, sedangkan $v_{0y}$ menggunakan sinus."
    }
  },
  {
    id: "fis-kin-lengkung-parabola-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-parabola",
    category: "Vektor Gerak Parabola",
    difficulty: "mudah",
    statement: "Sebuah bola sepak ditendang dengan kecepatan awal $v_0 = 20\\text{ m/s}$ pada sudut elevasi $30^\\circ$ terhadap tanah ($\\sin 30^\\circ = 0{,}5$ dan $\\cos 30^\\circ = 0{,}5\\sqrt{3}$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar kecepatan vertikal bola setelah melayang di udara selama $t = 0{,}5\\text{ sekon}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5\\text{ m/s}$",
      "$10\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$10\\sqrt{3}\\text{ m/s}$",
      "$0\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kecepatan vertikal sesaat pada gerak parabola mengalami perlambatan gravitasi bumi:<br>$$v_y(t) = v_{0y} - gt$$",
      steps: "1. Hitung kecepatan awal sumbu vertikal:<br>$$v_{0y} = v_0 \\sin 30^\\circ = 20 \\times 0{,}5 = 10\\text{ m/s}$$<br>2. Hitung kecepatan vertikal saat $t = 0{,}5\\text{ s}$:<br>$$v_y(0{,}5) = 10 - (10 \\times 0{,}5) = 10 - 5 = 5\\text{ m/s}$$",
      pitfalls: "Menghitung kecepatan resultan bukan kecepatan vertikal semata, atau lupa mengalikan waktu dengan percepatan gravitasi."
    }
  },
  {
    id: "fis-kin-lengkung-parabola-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-parabola",
    category: "Vektor Gerak Parabola",
    difficulty: "mudah",
    statement: "Sebuah pesawat bantuan logistik terbang mendatar pada ketinggian $500\\text{ meter}$ dengan kelajuan tetap $100\\text{ m/s}$. Pesawat tersebut menjatuhkan paket bantuan makanan. Jika $g = 10\\text{ m/s}^2$ dan gesekan udara diabaikan, waktu jatuh paket hingga menyentuh tanah dan jarak mendatar yang ditempuhnya sejak dilepaskan berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ sekon}$ dan $1000\\text{ meter}$",
      "$10\\text{ sekon}$ dan $500\\text{ meter}$",
      "$5\\text{ sekon}$ dan $500\\text{ meter}$",
      "$10\\text{ sekon}$ dan $2000\\text{ meter}$",
      "$50\\text{ sekon}$ dan $5000\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gerak setengah parabola (dilepas mendatar):<br>• Kecepatan awal vertikal nol ($v_{0y} = 0$), sehingga waktu jatuh sama dengan gerak jatuh bebas: $t = \\sqrt{\\frac{2h}{g}}$.<br>• Jarak horizontal GLB: $x = v_{0x} \\cdot t$.",
      steps: "1. Hitung waktu jatuh paket ke tanah:<br>$$t = \\sqrt{\\frac{2 \\times 500\\text{ m}}{10\\text{ m/s}^2}} = \\sqrt{100} = 10\\text{ sekon}$$<br>2. Hitung jangkauan mendatar:<br>$$x = v_{0x} \\cdot t = 100\\text{ m/s} \\times 10\\text{ s} = 1000\\text{ meter}$$",
      pitfalls: "Mengabaikan kecepatan mendatar pesawat sehingga mengira paket langsung jatuh tegak lurus di bawah titik lepas pesawat."
    }
  },
  {
    id: "fis-kin-lengkung-parabola-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-parabola",
    category: "Vektor Gerak Parabola",
    difficulty: "mudah",
    statement: "Pada suatu gerak parabola ideal tanpa gesekan udara, besaran vektor gerak yang nilainya selalu konstan di setiap titik sepanjang lintasan peluru adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Komponen kecepatan horizontal ($v_x$) dan vektor percepatan gerak ($\\vec{a}$)",
      "Komponen kecepatan vertikal ($v_y$) dan energi kinetik",
      "Vektor kecepatan total ($\\vec{v}$) dan momentum linier",
      "Ketinggian peluru ($y$) dan percepatan sentripetal",
      "Sudut arah gerak terhadap horizontal di setiap saat"
    ],
    correctIndex: 0,
    solution: {
      concept: "Dalam gerak parabola:<br>• Percepatan gerak adalah percepatan gravitasi bumi yang konstan berarah tegak ke bawah: $\\vec{a} = -g\\hat{j}$.<br>• Karena tidak ada komponen percepatan horizontal ($a_x = 0$), maka komponen kecepatan horizontal $v_x = v_0 \\cos\\theta$ selalu bernilai konstan sepanjang perjalanan.",
      steps: "1. Vektor percepatan $\\vec{a} = (0)\\hat{i} - g\\hat{j}$ adalah konstan baik besar maupun arahnya.<br>2. Komponen horizontal $v_x(t) = v_{0x}$ konstan setiap saat.<br>3. Komponen vertikal $v_y(t) = v_{0y} - gt$ berubah terus terhadap waktu, sehingga kecepatan total $\\vec{v}$ dan energi kinetik ikut berubah.",
      pitfalls: "Menyatakan bahwa kecepatan total $\\vec{v}$ bernilai konstan, padahal hanya komponen horizontalnya ($v_x$) yang konstan."
    }
  }
];
