module.exports = [
  {
    id: "fis-kin-lengkung-ekstrem-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-ekstrem",
    category: "Titik Ekstrem Gerak Parabola",
    difficulty: "mudah",
    statement: "Sebuah peluru ditembakkan dari permukaan tanah datar dengan kecepatan awal $v_0 = 40\\text{ m/s}$ pada sudut elevasi $30^\\circ$ terhadap tanah (diketahui $\\sin 30^\\circ = 0{,}5$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$ dan gesekan udara diabaikan, tinggi maksimum yang dicapai peluru tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$20\\text{ meter}$",
      "$40\\text{ meter}$",
      "$10\\text{ meter}$",
      "$80\\text{ meter}$",
      "$20\\sqrt{3}\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Tinggi maksimum ($h_{\\max}$) gerak parabola tercapai ketika komponen kecepatan vertikal nol ($v_y = 0$):<br>$$h_{\\max} = \\frac{v_0^2 \\sin^2\\theta}{2g}$$",
      steps: "1. Komponen kecepatan awal vertikal:<br>$$v_{0y} = v_0 \\sin 30^\\circ = 40 \\times 0{,}5 = 20\\text{ m/s}$$<br>2. Hitung ketinggian maksimum:<br>$$h_{\\max} = \\frac{v_{0y}^2}{2g} = \\frac{20^2}{2(10)} = \\frac{400}{20} = 20\\text{ meter}$$",
      pitfalls: "Lupa membagi dengan faktor 2 pada penyebut ($2g$) sehingga menghasilkan $40\\text{ m}$."
    }
  },
  {
    id: "fis-kin-lengkung-ekstrem-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-ekstrem",
    category: "Titik Ekstrem Gerak Parabola",
    difficulty: "mudah",
    statement: "Sebuah proyektil ditembakkan dengan kelajuan awal $v_0 = 60\\text{ m/s}$ pada sudut elevasi $\\theta$ dengan nilai $\\cos\\theta = 0{,}8$. Besar kelajuan proyektil pada saat tepat berada di titik puncak lintasannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$48\\text{ m/s}$",
      "$0\\text{ m/s}$",
      "$36\\text{ m/s}$",
      "$60\\text{ m/s}$",
      "$24\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Di titik puncak gerak parabola, kecepatan vertikal bernilai nol ($v_y = 0$). Namun, kecepatan horizontal tetap tidak nol dan konstan sepanjang lintasan ($v_x = v_{0x} = v_0 \\cos\\theta$). Maka kelajuan total di puncak sama dengan kelajuan horizontalnya.",
      steps: "1. Identifikasi kondisi di puncak: $v_y = 0$.<br>2. Hitung kelajuan horizontal yang konstan:<br>$$v_{\\text{puncak}} = v_x = v_0 \\cos\\theta = 60\\text{ m/s} \\times 0{,}8 = 48\\text{ m/s}$$",
      pitfalls: "Jebakan paling sering adalah menjawab $0\\text{ m/s}$ karena mengira seluruh kecepatan menjadi nol seperti pada gerak vertikal ke atas 1 dimensi."
    }
  },
  {
    id: "fis-kin-lengkung-ekstrem-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-ekstrem",
    category: "Titik Ekstrem Gerak Parabola",
    difficulty: "mudah",
    statement: "Sebuah bola kasti dilemparkan dari tanah datar dengan kecepatan awal $v_0 = 20\\text{ m/s}$ pada sudut elevasi $45^\\circ$ ($\\sin 90^\\circ = 1$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, jarak mendatar terjauh ($X_{\\max}$) yang dicapai bola saat mendarat kembali di tanah adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$40\\text{ meter}$",
      "$20\\text{ meter}$",
      "$80\\text{ meter}$",
      "$20\\sqrt{2}\\text{ meter}$",
      "$10\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jangkauan horizontal terjauh ($X_{\\max}$) pada tanah datar dirumuskan dengan:<br>$$X_{\\max} = \\frac{v_0^2 \\sin(2\\theta)}{g}$$",
      steps: "1. Sudut ganda untuk $\\theta = 45^\\circ$: $\\sin(2 \\times 45^\\circ) = \\sin 90^\\circ = 1$.<br>2. Hitung jangkauan maksimum:<br>$$X_{\\max} = \\frac{(20\\text{ m/s})^2 \\times 1}{10\\text{ m/s}^2} = \\frac{400}{10} = 40\\text{ meter}$$",
      pitfalls: "Lupa bahwa rumus jangkauan terjauh memuat sudut rangkap $\\sin(2\\theta)$, bukan $\\sin\\theta$ biasa."
    }
  },
  {
    id: "fis-kin-lengkung-ekstrem-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-ekstrem",
    category: "Titik Ekstrem Gerak Parabola",
    difficulty: "mudah",
    statement: "Agar suatu peluru yang ditembakkan dari tanah datar dengan laju awal tertentu dapat mencapai jangkauan mendatar terjauh ($X_{\\max}$), besar sudut elevasi penembakan yang harus dipilih adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$45^\\circ$",
      "$30^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$",
      "$0^\\circ$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jangkauan mendatar dirumuskan oleh $X = \\frac{v_0^2 \\sin(2\\theta)}{g}$. Jangkauan akan bernilai maksimum ketika fungsi trigonometri $\\sin(2\\theta)$ bernilai maksimum, yaitu sama dengan 1.",
      steps: "1. Nilai maksimum sinus: $\\sin(2\\theta) = 1$.<br>2. Selesaikan nilai sudut:<br>$$2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$$",
      pitfalls: "Memilih sudut $90^\\circ$ yang justru menghasilkan gerak vertikal ke atas murni dengan jangkauan mendatar nol ($X = 0$)."
    }
  },
  {
    id: "fis-kin-lengkung-ekstrem-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-ekstrem",
    category: "Titik Ekstrem Gerak Parabola",
    difficulty: "mudah",
    statement: "Sebuah peluru ditembakkan dari tanah datar dan membutuhkan waktu $t = 3\\text{ sekon}$ untuk mencapai titik tertinggi lintasannya. Waktu total yang dihabiskan peluru di udara sejak ditembakkan hingga mendarat kembali di permukaan tanah datar adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6\\text{ sekon}$",
      "$3\\text{ sekon}$",
      "$9\\text{ sekon}$",
      "$1{,}5\\text{ sekon}$",
      "$12\\text{ sekon}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada lintasan simetris di atas tanah datar tanpa hambatan udara, waktu naik menuju puncak ($t_p$) sama persis dengan waktu turun dari puncak ke tanah ($t_t$). Maka waktu total di udara adalah:<br>$$t_{\\text{total}} = 2 t_p$$",
      steps: "1. Waktu naik menuju titik tertinggi: $t_p = 3\\text{ sekon}$.<br>2. Waktu total perjalanan bolak-balik di udara:<br>$$t_{\\text{total}} = 2 \\times 3\\text{ s} = 6\\text{ sekon}$$",
      pitfalls: "Menganggap waktu total di udara sama dengan waktu mencapai titik tertinggi ($3\\text{ sekon}$)."
    }
  }
];
