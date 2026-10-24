module.exports = [
  {
    id: "fis-kin-lengkung-parabola-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-parabola",
    category: "Vektor Gerak Parabola",
    difficulty: "sedang",
    statement: "Sebuah peluru ditembakkan dari tanah dengan kelajuan awal $v_0 = 50\\text{ m/s}$ pada sudut elevasi $\\theta$ dengan $\\tan\\theta = \\frac{4}{3}$ (sehingga $\\sin\\theta = 0{,}8$ dan $\\cos\\theta = 0{,}6$). Jika $g = 10\\text{ m/s}^2$, besar resultan kecepatan peluru dan sudut arah geraknya terhadap sumbu horizontal setelah melayang di udara selama $t = 1\\text{ sekon}$ berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30\\sqrt{2}\\text{ m/s}$ dan $45^\\circ$",
      "$30\\text{ m/s}$ dan $37^\\circ$",
      "$40\\text{ m/s}$ dan $53^\\circ$",
      "$30\\sqrt{2}\\text{ m/s}$ dan $30^\\circ$",
      "$50\\text{ m/s}$ dan $45^\\circ$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kecepatan sesaat pada gerak parabola merupakan resultan dari komponen horizontal konstan ($v_x$) dan komponen vertikal berubah beraturan ($v_y$):<br>$$|\\vec{v}| = \\sqrt{v_x^2 + v_y^2},\\quad \\tan\\alpha = \\frac{v_y}{v_x}$$",
      steps: "1. Komponen kecepatan awal:<br>$$v_{0x} = v_0 \\cos\\theta = 50 \\times 0{,}6 = 30\\text{ m/s}$$<br>$$v_{0y} = v_0 \\sin\\theta = 50 \\times 0{,}8 = 40\\text{ m/s}$$<br>2. Komponen kecepatan pada $t = 1\\text{ s}$:<br>$$v_x(1) = v_{0x} = 30\\text{ m/s}$$<br>$$v_y(1) = v_{0y} - gt = 40 - 10(1) = 30\\text{ m/s}$$<br>3. Hitung resultan dan sudut elevasi sesaat:<br>$$|\\vec{v}| = \\sqrt{30^2 + 30^2} = 30\\sqrt{2}\\text{ m/s}$$<br>$$\\tan\\alpha = \\frac{v_y}{v_x} = \\frac{30}{30} = 1 \\implies \\alpha = 45^\\circ$$",
      pitfalls: "Lupa bahwa komponen horizontal $v_x$ tetap bernilai $30\\text{ m/s}$ dan tidak terpengaruh gravitasi."
    }
  },
  {
    id: "fis-kin-lengkung-parabola-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-parabola",
    category: "Vektor Gerak Parabola",
    difficulty: "sedang",
    statement: "Sebuah batu dilempar secara mendatar (horizontal) dengan kelajuan awal $v_0 = 15\\text{ m/s}$ dari puncak tebing karang setinggi $H = 20\\text{ meter}$ di atas permukaan laut. Pada saat batu tepat menyentuh permukaan air laut di dasar tebing, besar kelajuan resultan batu tersebut adalah .... ($g = 10\\text{ m/s}^2$)",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$25\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$35\\text{ m/s}$",
      "$15\\sqrt{2}\\text{ m/s}$",
      "$\\sqrt{425}\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kecepatan tumbuk batu ke permukaan air laut diperoleh dari gabungan komponen horizontal konstan ($v_x = v_0$) dan komponen vertikal akibat jatuh bebas ($v_y = \\sqrt{2gH}$):<br>$$v = \\sqrt{v_x^2 + v_y^2}$$",
      steps: "1. Komponen horizontal konstan:<br>$$v_x = 15\\text{ m/s}$$<br>2. Komponen vertikal saat mencapai dasar laut:<br>$$v_y = \\sqrt{2gH} = \\sqrt{2 \\times 10 \\times 20} = \\sqrt{400} = 20\\text{ m/s}$$<br>3. Hitung kelajuan total saat menyentuh air:<br>$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{15^2 + 20^2} = \\sqrt{225 + 400} = \\sqrt{625} = 25\\text{ m/s}$$",
      pitfalls: "Menghitung hanya komponen vertikalnya saja ($20\\text{ m/s}$) dan melupakan kecepatan mendatar awal lemparan."
    }
  },
  {
    id: "fis-kin-lengkung-parabola-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-parabola",
    category: "Vektor Gerak Parabola",
    difficulty: "sedang",
    statement: "Lintasan sebuah proyektil dalam koordinat kartesius $(x, y)$ dinyatakan oleh persamaan trajektori $y = x - 0{,}05 x^2$, dengan $x$ dan $y$ dalam meter. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar sudut elevasi penembakan $\\theta$ dan kecepatan awal $v_0$ berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$45^\\circ$ dan $10\\sqrt{2}\\text{ m/s}$",
      "$45^\\circ$ dan $20\\text{ m/s}$",
      "$30^\\circ$ dan $10\\sqrt{2}\\text{ m/s}$",
      "$60^\\circ$ dan $10\\text{ m/s}$",
      "$45^\\circ$ dan $10\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Bentuk baku persamaan trajektori gerak parabola adalah:<br>$$y = x\\tan\\theta - \\frac{g}{2 v_0^2 \\cos^2\\theta} x^2$$",
      steps: "1. Samakan koefisien $x$:<br>$$\\tan\\theta = 1 \\implies \\theta = 45^\\circ$$<br>Maka $\\cos 45^\\circ = \\frac{1}{2}\\sqrt{2} \\implies \\cos^2 45^\\circ = \\frac{1}{2}$.<br>2. Samakan koefisien $x^2$:<br>$$\\frac{g}{2 v_0^2 \\cos^2 45^\\circ} = 0{,}05$$<br>$$\\frac{10}{2 v_0^2 \\left(\\frac{1}{2}\\right)} = 0{,}05 \\implies \\frac{10}{v_0^2} = 0{,}05$$<br>$$v_0^2 = \\frac{10}{0{,}05} = 200 \\implies v_0 = \\sqrt{200} = 10\\sqrt{2}\\text{ m/s}$$",
      pitfalls: "Lupa mengkuadratkan nilai $\\cos 45^\\circ$ pada penyebut koefisien kuadratik."
    }
  },
  {
    id: "fis-kin-lengkung-parabola-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-parabola",
    category: "Vektor Gerak Parabola",
    difficulty: "sedang",
    statement: "Sebuah sasaran tembak berada di tanah mendatar pada jarak $X = 80\\sqrt{3}\\text{ meter}$ dari titik peluncuran. Meriam ditembakkan dengan kelajuan awal tetap $v_0 = 40\\text{ m/s}$. Jika $g = 10\\text{ m/s}^2$ dan tembakan berhasil mengenai sasaran, dua kemungkinan besar sudut elevasi penembakan $\\theta$ yang dapat digunakan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30^\\circ$ atau $60^\\circ$",
      "$37^\\circ$ atau $53^\\circ$",
      "$15^\\circ$ atau $75^\\circ$",
      "$45^\\circ$ saja",
      "$20^\\circ$ atau $70^\\circ$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jangkauan mendatar peluru dirumuskan oleh:<br>$$X_{\\max} = \\frac{v_0^2 \\sin(2\\theta)}{g}$$<br>Dua sudut komplementer ($\\theta_1 + \\theta_2 = 90^\\circ$) menghasilkan jangkauan mendatar yang sama karena $\\sin(2(90^\\circ - \\theta)) = \\sin(180^\\circ - 2\\theta) = \\sin(2\\theta)$.",
      steps: "1. Masukkan data ke rumus jangkauan:<br>$$80\\sqrt{3} = \\frac{(40)^2 \\sin(2\\theta)}{10} = \\frac{1600 \\sin(2\\theta)}{10} = 160 \\sin(2\\theta)$$<br>2. Selesaikan nilai $\\sin(2\\theta)$:<br>$$\\sin(2\\theta) = \\frac{80\\sqrt{3}}{160} = \\frac{1}{2}\\sqrt{3}$$<br>3. Nilai sudut $2\\theta$ yang memenuhi pada kuadran I dan II:<br>$$2\\theta = 60^\\circ \\implies \\theta = 30^\\circ$$<br>$$2\\theta = 120^\\circ \\implies \\theta = 60^\\circ$$",
      pitfalls: "Hanya mengambil satu sudut $\\theta = 30^\\circ$ dan melupakan sudut komplementernya ($60^\\circ$)."
    }
  },
  {
    id: "fis-kin-lengkung-parabola-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-parabola",
    category: "Vektor Gerak Parabola",
    difficulty: "sedang",
    statement: "Vektor posisi dari sebuah partikel peluru dinyatakan oleh $\\vec{r}(t) = (24t)\\hat{i} + (32t - 5t^2)\\hat{j}$ dalam satuan meter dan sekon. Vektor percepatan partikel dan besar kelajuan partikel ketika berada di titik tertinggi berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-10\\hat{j}\\text{ m/s}^2$ dan $24\\text{ m/s}$",
      "$-5\\hat{j}\\text{ m/s}^2$ dan $32\\text{ m/s}$",
      "$-10\\hat{j}\\text{ m/s}^2$ dan $0\\text{ m/s}$",
      "$24\\hat{i} - 10\\hat{j}\\text{ m/s}^2$ dan $24\\text{ m/s}$",
      "$-10\\hat{j}\\text{ m/s}^2$ dan $40\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Vektor kecepatan diperoleh dari turunan pertama $\\vec{v} = \\frac{d\\vec{r}}{dt}$ dan percepatan dari $\\vec{a} = \\frac{d\\vec{v}}{dt}$. Di titik tertinggi, komponen kecepatan vertikal nol ($v_y = 0$), sehingga kecepatan peluru murni merupakan komponen horizontal ($v_x$).",
      steps: "1. Turunkan fungsi posisi untuk mencari vektor kecepatan:<br>$$\\vec{v}(t) = 24\\hat{i} + (32 - 10t)\\hat{j}\\text{ (m/s)}$$<br>2. Turunkan vektor kecepatan untuk mencari vektor percepatan:<br>$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = -10\\hat{j}\\text{ (m/s}^2)$$<br>3. Di titik tertinggi, $v_y = 32 - 10t = 0$. Maka kelajuan partikel:<br>$$|\\vec{v}_{\\text{puncak}}| = \\sqrt{v_x^2 + 0^2} = v_x = 24\\text{ m/s}$$",
      pitfalls: "Menyatakan kelajuan di titik puncak adalah $0$, padahal hanya komponen vertikal $v_y$ yang nol, sedangkan komponen horizontal $v_x = 24\\text{ m/s}$ tetap ada."
    }
  }
];
