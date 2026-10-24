module.exports = [
  {
    id: "fis-kin-lengkung-ekstrem-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-ekstrem",
    category: "Titik Ekstrem Gerak Parabola",
    difficulty: "sedang",
    statement: "Sebuah peluru ditembakkan dari tanah datar dengan kelajuan awal $v_0$ dan sudut elevasi $\\theta$. Jika perbandingan antara tinggi maksimum ($h_{\\max}$) terhadap jangkauan horizontal terjauh ($X_{\\max}$) adalah $1 : 4$, maka nilai dari $\\tan\\theta$ dan besar sudut $\\theta$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\tan\\theta = 1$ dan $\\theta = 45^\\circ$",
      "$\\tan\\theta = 4$ dan $\\theta \\approx 76^\\circ$",
      "$\\tan\\theta = 0{,}25$ dan $\\theta \\approx 14^\\circ$",
      "$\\tan\\theta = \\sqrt{3}$ dan $\\theta = 60^\\circ$",
      "$\\tan\\theta = 0{,}5$ dan $\\theta \\approx 26{,}5^\\circ$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hubungan umum antara tinggi maksimum dan jarak mendatar terjauh pada tanah datar memenuhi:<br>$$\\frac{h_{\\max}}{X_{\\max}} = \\frac{1}{4} \\tan\\theta$$",
      steps: "1. Tuliskan rumus kedua besaran:<br>$$h_{\\max} = \\frac{v_0^2 \\sin^2\\theta}{2g}$$<br>$$X_{\\max} = \\frac{2 v_0^2 \\sin\\theta \\cos\\theta}{g}$$<br>2. Bagi kedua persamaan:<br>$$\\frac{h_{\\max}}{X_{\\max}} = \\frac{\\sin^2\\theta}{4 \\sin\\theta \\cos\\theta} = \\frac{1}{4} \\tan\\theta$$<br>3. Masukkan rasio yang diketahui $\\frac{h_{\\max}}{X_{\\max}} = \\frac{1}{4}$:<br>$$\\frac{1}{4} = \\frac{1}{4} \\tan\\theta \\implies \\tan\\theta = 1 \\implies \\theta = 45^\\circ$$",
      pitfalls: "Lupa faktor 4 pada perbandingan sehingga langsung mengira $\\tan\\theta = 1/4$ atau $\\tan\\theta = 4$."
    }
  },
  {
    id: "fis-kin-lengkung-ekstrem-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-ekstrem",
    category: "Titik Ekstrem Gerak Parabola",
    difficulty: "sedang",
    statement: "Sebuah bola bermassa $m$ ditembakkan dengan kelajuan awal $v_0$ pada sudut elevasi $60^\\circ$ terhadap horizontal. Jika energi kinetik awal bola saat ditembakkan adalah $E_k$, besar energi kinetik bola pada saat berada di titik tertinggi lintasannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{4} E_k$",
      "$0$",
      "$\\frac{1}{2} E_k$",
      "$\\frac{3}{4} E_k$",
      "$\\frac{1}{8} E_k$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Di titik puncak, komponen kecepatan vertikal nol ($v_y = 0$). Kelajuan partikel hanya tersisa komponen horizontal konstan ($v_x = v_0 \\cos\\theta$). Maka energi kinetik di puncak adalah $E_{k,\\text{puncak}} = E_k \\cos^2\\theta$.",
      steps: "1. Energi kinetik awal:<br>$$E_k = \\frac{1}{2} m v_0^2$$<br>2. Kelajuan di puncak lintasan:<br>$$v_{\\text{puncak}} = v_x = v_0 \\cos 60^\\circ = \\frac{1}{2} v_0$$<br>3. Energi kinetik di titik tertinggi:<br>$$E_{k,\\text{puncak}} = \\frac{1}{2} m v_{\\text{puncak}}^2 = \\frac{1}{2} m \\left(\\frac{1}{2} v_0\\right)^2 = \\frac{1}{4} \\left(\\frac{1}{2} m v_0^2\\right) = \\frac{1}{4} E_k$$",
      pitfalls: "Menjawab $0$ karena mengira seluruh energi kinetik berubah menjadi energi potensial gravitasi, padahal benda masih memiliki kelajuan horizontal $v_x$."
    }
  },
  {
    id: "fis-kin-lengkung-ekstrem-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-ekstrem",
    category: "Titik Ekstrem Gerak Parabola",
    difficulty: "sedang",
    statement: "Sebuah proyektil ditembakkan dari permukaan tanah datar. Di titik puncak lintasannya yang berada pada ketinggian $h_{\\max} = 45\\text{ meter}$, kelajuan proyektil terukur sebesar $20\\text{ m/s}$. Jika $g = 10\\text{ m/s}^2$, jarak mendatar terjauh ($X_{\\max}$) yang dicapai proyektil saat mendarat kembali di tanah adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$120\\text{ meter}$",
      "$60\\text{ meter}$",
      "$90\\text{ meter}$",
      "$180\\text{ meter}$",
      "$150\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kelajuan di puncak menyatakan komponen horizontal konstan ($v_x = 20\\text{ m/s}$). Waktu naik menuju puncak dapat dihitung dari ketinggian maksimum ($h_{\\max} = \\frac{1}{2} g t_p^2$). Jarak mendatar adalah hasil kali kelajuan horizontal dengan waktu total di udara ($t_{\\text{total}} = 2 t_p$).",
      steps: "1. Hitung waktu mencapai puncak:<br>$$45 = \\frac{1}{2}(10) t_p^2 = 5 t_p^2 \\implies t_p^2 = 9 \\implies t_p = 3\\text{ sekon}$$<br>2. Waktu total di udara:<br>$$t_{\\text{total}} = 2 \\times 3\\text{ s} = 6\\text{ sekon}$$<br>3. Jarak jangkauan horizontal terjauh:<br>$$X_{\\max} = v_x \\cdot t_{\\text{total}} = 20\\text{ m/s} \\times 6\\text{ s} = 120\\text{ meter}$$",
      pitfalls: "Mengalikan $v_x$ hanya dengan waktu naik $t_p$ ($20 \\times 3 = 60\\text{ m}$), yang baru merupakan setengah jangkauan mendatar."
    }
  },
  {
    id: "fis-kin-lengkung-ekstrem-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-ekstrem",
    category: "Titik Ekstrem Gerak Parabola",
    difficulty: "sedang",
    statement: "Sebuah bola dilontarkan dari atap sebuah gedung bertingkat dengan ketinggian $H = 25\\text{ meter}$ di atas tanah. Kecepatan awal lontaran bola adalah $v_0 = 20\\text{ m/s}$ pada sudut elevasi $30^\\circ$ terhadap horizontal ($\\sin 30^\\circ = 0{,}5$). Ketinggian maksimum yang dicapai bola jika diukur dari permukaan tanah adalah .... ($g = 10\\text{ m/s}^2$)",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30\\text{ meter}$",
      "$5\\text{ meter}$",
      "$35\\text{ meter}$",
      "$45\\text{ meter}$",
      "$20\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Ketinggian maksimum total diukur dari permukaan tanah ($H_{\\text{total}}$) adalah jumlahan ketinggian awal gedung ($H$) dengan pertambahan ketinggian maksimum gerak parabola ($\\Delta h_{\\max}$):<br>$$H_{\\text{total}} = H + \\frac{v_0^2 \\sin^2\\theta}{2g}$$",
      steps: "1. Komponen vertikal awal:<br>$$v_{0y} = v_0 \\sin 30^\\circ = 20 \\times 0{,}5 = 10\\text{ m/s}$$<br>2. Pertambahan ketinggian maksimum dari atap:<br>$$\\Delta h_{\\max} = \\frac{v_{0y}^2}{2g} = \\frac{10^2}{2(10)} = \\frac{100}{20} = 5\\text{ meter}$$<br>3. Ketinggian maksimum total dari tanah:<br>$$H_{\\text{total}} = 25\\text{ m} + 5\\text{ m} = 30\\text{ meter}$$",
      pitfalls: "Hanya menjawab pertambahan ketinggian dari atap gedung ($\\Delta h = 5\\text{ m}$) tanpa menambahkan ketinggian atap dari tanah ($25\\text{ m}$)."
    }
  },
  {
    id: "fis-kin-lengkung-ekstrem-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-ekstrem",
    category: "Titik Ekstrem Gerak Parabola",
    difficulty: "sedang",
    statement: "Dua peluru $A$ dan $B$ ditembakkan dari tanah dengan kelajuan awal yang sama besar $v_0$. Peluru $A$ ditembakkan dengan sudut elevasi $\\alpha = 30^\\circ$, sedangkan peluru $B$ ditembakkan dengan sudut elevasi $\\beta = 60^\\circ$. Perbandingan tinggi maksimum yang dicapai peluru $A$ terhadap peluru $B$ ($h_A : h_B$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 : 3$",
      "$1 : \\sqrt{3}$",
      "$1 : 1$",
      "$3 : 1$",
      "$1 : 2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Tinggi maksimum berbanding lurus dengan kuadrat sinus sudut elevasinya:<br>$$h_{\\max} \\propto \\sin^2\\theta$$",
      steps: "1. Hitung sinus sudut masing-masing:<br>$$\\sin 30^\\circ = \\frac{1}{2} \\implies \\sin^2 30^\\circ = \\frac{1}{4}$$<br>$$\\sin 60^\\circ = \\frac{1}{2}\\sqrt{3} \\implies \\sin^2 60^\\circ = \\frac{3}{4}$$<br>2. Hitung perbandingan tinggi maksimum:<br>$$\\frac{h_A}{h_B} = \\frac{\\sin^2 30^\\circ}{\\sin^2 60^\\circ} = \\frac{\\frac{1}{4}}{\\frac{3}{4}} = \\frac{1}{3} = 1 : 3$$",
      pitfalls: "Mengabaikan kuadrat fungsi sinus sehingga menghitung $\\frac{\\sin 30^\\circ}{\\sin 60^\\circ} = \\frac{1/2}{\\sqrt{3}/2} = 1 : \\sqrt{3}$."
    }
  }
];
