/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lengkung (fis-kin-lengkung)
 * Sub-Bab: Vektor Gerak Parabola (fis-kin-lengkung-parabola)
 * Slug: vektor-gerak-parabola
 * Indikator: Pemisahan komponen gerak sumbu-x (GLB) dan sumbu-y (GLBB dengan percepatan gravitasi).
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-lengkung-parabola";
  const subTopicSlug = "vektor-gerak-parabola";
  const questions = [
  {
    "id": "fis-kin-lengkung-parabola-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-parabola",
    "category": "Vektor Gerak Parabola",
    "difficulty": "mudah",
    "statement": "Prinsip pemisahan komponen gerak pada lintasan gerak parabola dua dimensi menyatakan bahwa sifat gerak pada sumbu horizontal ($x$) dan sumbu vertikal ($y$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Gerak Lurus Beraturan (GLB) pada sumbu-$x$ dan Gerak Lurus Berubah Beraturan (GLBB) pada sumbu-$y$",
      "GLBB pada sumbu-$x$ dan GLB pada sumbu-$y$",
      "GLB pada kedua sumbu gerak",
      "GLBB dipercepat pada kedua sumbu gerak",
      "Gerak Melingkar Beraturan pada sumbu-$x$ dan GLB pada sumbu-$y$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gerak parabola adalah perpaduan dua gerak saling tegak lurus yang independen:<br>• Sumbu-$x$ (horizontal): tidak bekerja gaya luar ($F_x = 0 \\implies a_x = 0$), sehingga berlaku Gerak Lurus Beraturan (GLB).<br>• Sumbu-$y$ (vertikal): bekerja gaya gravitasi bumi konstan ($a_y = -g$), sehingga berlaku Gerak Lurus Berubah Beraturan (GLBB).",
      "steps": "1. Tinjau gaya horizontal: Gesekan udara diabaikan $\\implies a_x = 0 \\implies$ kecepatan $v_x = \\text{konstan}$ (GLB).<br>2. Tinjau gaya vertikal: Gaya gravitasi bumi bekerja ke bawah $\\implies a_y = -g \\implies$ GLBB terpengaruh gravitasi.<br>3. Kesimpulan: Sumbu-$x$ GLB dan sumbu-$y$ GLBB.",
      "pitfalls": "Terkecoh menganggap sumbu-$x$ juga mengalami perlambatan gravitasi, padahal gaya gravitasi bekerja eksklusif pada arah vertikal."
    },
    "subTopicSlug": "vektor-gerak-parabola",
    "bab": "Kinematika",
    "subBab": "Vektor Gerak Parabola",
    "subTopic": "Vektor Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-lengkung-parabola-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-parabola",
    "category": "Vektor Gerak Parabola",
    "difficulty": "mudah",
    "statement": "Sebuah peluru meriam ditembakkan dari tanah dengan kelajuan awal $v_0 = 50\\text{ m/s}$ pada sudut elevasi $37^\\circ$ terhadap bidang datar (diketahui $\\sin 37^\\circ = 0{,}6$ dan $\\cos 37^\\circ = 0{,}8$). Besar komponen kecepatan awal pada sumbu horizontal ($v_{0x}$) dan sumbu vertikal ($v_{0y}$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$40\\text{ m/s}$ dan $30\\text{ m/s}$",
      "$30\\text{ m/s}$ dan $40\\text{ m/s}$",
      "$50\\text{ m/s}$ dan $30\\text{ m/s}$",
      "$40\\text{ m/s}$ dan $50\\text{ m/s}$",
      "$25\\text{ m/s}$ dan $25\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Penguraian vektor kecepatan awal $v_0$ dengan sudut elevasi $\\theta$ terhadap garis horizontal:<br>$$v_{0x} = v_0 \\cos\\theta$$<br>$$v_{0y} = v_0 \\sin\\theta$$",
      "steps": "1. Hitung komponen horizontal ($v_{0x}$):<br>$$v_{0x} = 50\\text{ m/s} \\times \\cos 37^\\circ = 50 \\times 0{,}8 = 40\\text{ m/s}$$<br>2. Hitung komponen vertikal ($v_{0y}$):<br>$$v_{0y} = 50\\text{ m/s} \\times \\sin 37^\\circ = 50 \\times 0{,}6 = 30\\text{ m/s}$$",
      "pitfalls": "Tertukar fungsi sinus dan kosinus pada penguraian sumbu: $v_{0x}$ menggunakan kosinus terhadap sumbu horizontal, sedangkan $v_{0y}$ menggunakan sinus."
    },
    "subTopicSlug": "vektor-gerak-parabola",
    "bab": "Kinematika",
    "subBab": "Vektor Gerak Parabola",
    "subTopic": "Vektor Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-lengkung-parabola-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-parabola",
    "category": "Vektor Gerak Parabola",
    "difficulty": "mudah",
    "statement": "Sebuah bola sepak ditendang dengan kecepatan awal $v_0 = 20\\text{ m/s}$ pada sudut elevasi $30^\\circ$ terhadap tanah ($\\sin 30^\\circ = 0{,}5$ dan $\\cos 30^\\circ = 0{,}5\\sqrt{3}$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar kecepatan vertikal bola setelah melayang di udara selama $t = 0{,}5\\text{ sekon}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ m/s}$",
      "$10\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$10\\sqrt{3}\\text{ m/s}$",
      "$0\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kecepatan vertikal sesaat pada gerak parabola mengalami perlambatan gravitasi bumi:<br>$$v_y(t) = v_{0y} - gt$$",
      "steps": "1. Hitung kecepatan awal sumbu vertikal:<br>$$v_{0y} = v_0 \\sin 30^\\circ = 20 \\times 0{,}5 = 10\\text{ m/s}$$<br>2. Hitung kecepatan vertikal saat $t = 0{,}5\\text{ s}$:<br>$$v_y(0{,}5) = 10 - (10 \\times 0{,}5) = 10 - 5 = 5\\text{ m/s}$$",
      "pitfalls": "Menghitung kecepatan resultan bukan kecepatan vertikal semata, atau lupa mengalikan waktu dengan percepatan gravitasi."
    },
    "subTopicSlug": "vektor-gerak-parabola",
    "bab": "Kinematika",
    "subBab": "Vektor Gerak Parabola",
    "subTopic": "Vektor Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-lengkung-parabola-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-parabola",
    "category": "Vektor Gerak Parabola",
    "difficulty": "mudah",
    "statement": "Sebuah pesawat bantuan logistik terbang mendatar pada ketinggian $500\\text{ meter}$ dengan kelajuan tetap $100\\text{ m/s}$. Pesawat tersebut menjatuhkan paket bantuan makanan. Jika $g = 10\\text{ m/s}^2$ dan gesekan udara diabaikan, waktu jatuh paket hingga menyentuh tanah dan jarak mendatar yang ditempuhnya sejak dilepaskan berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ sekon}$ dan $1000\\text{ meter}$",
      "$10\\text{ sekon}$ dan $500\\text{ meter}$",
      "$5\\text{ sekon}$ dan $500\\text{ meter}$",
      "$10\\text{ sekon}$ dan $2000\\text{ meter}$",
      "$50\\text{ sekon}$ dan $5000\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gerak setengah parabola (dilepas mendatar):<br>• Kecepatan awal vertikal nol ($v_{0y} = 0$), sehingga waktu jatuh sama dengan gerak jatuh bebas: $t = \\sqrt{\\frac{2h}{g}}$.<br>• Jarak horizontal GLB: $x = v_{0x} \\cdot t$.",
      "steps": "1. Hitung waktu jatuh paket ke tanah:<br>$$t = \\sqrt{\\frac{2 \\times 500\\text{ m}}{10\\text{ m/s}^2}} = \\sqrt{100} = 10\\text{ sekon}$$<br>2. Hitung jangkauan mendatar:<br>$$x = v_{0x} \\cdot t = 100\\text{ m/s} \\times 10\\text{ s} = 1000\\text{ meter}$$",
      "pitfalls": "Mengabaikan kecepatan mendatar pesawat sehingga mengira paket langsung jatuh tegak lurus di bawah titik lepas pesawat."
    },
    "subTopicSlug": "vektor-gerak-parabola",
    "bab": "Kinematika",
    "subBab": "Vektor Gerak Parabola",
    "subTopic": "Vektor Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-lengkung-parabola-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-parabola",
    "category": "Vektor Gerak Parabola",
    "difficulty": "mudah",
    "statement": "Pada suatu gerak parabola ideal tanpa gesekan udara, besaran vektor gerak yang nilainya selalu konstan di setiap titik sepanjang lintasan peluru adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Komponen kecepatan horizontal ($v_x$) dan vektor percepatan gerak ($\\vec{a}$)",
      "Komponen kecepatan vertikal ($v_y$) dan energi kinetik",
      "Vektor kecepatan total ($\\vec{v}$) dan momentum linier",
      "Ketinggian peluru ($y$) dan percepatan sentripetal",
      "Sudut arah gerak terhadap horizontal di setiap saat"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Dalam gerak parabola:<br>• Percepatan gerak adalah percepatan gravitasi bumi yang konstan berarah tegak ke bawah: $\\vec{a} = -g\\hat{j}$.<br>• Karena tidak ada komponen percepatan horizontal ($a_x = 0$), maka komponen kecepatan horizontal $v_x = v_0 \\cos\\theta$ selalu bernilai konstan sepanjang perjalanan.",
      "steps": "1. Vektor percepatan $\\vec{a} = (0)\\hat{i} - g\\hat{j}$ adalah konstan baik besar maupun arahnya.<br>2. Komponen horizontal $v_x(t) = v_{0x}$ konstan setiap saat.<br>3. Komponen vertikal $v_y(t) = v_{0y} - gt$ berubah terus terhadap waktu, sehingga kecepatan total $\\vec{v}$ dan energi kinetik ikut berubah.",
      "pitfalls": "Menyatakan bahwa kecepatan total $\\vec{v}$ bernilai konstan, padahal hanya komponen horizontalnya ($v_x$) yang konstan."
    },
    "subTopicSlug": "vektor-gerak-parabola",
    "bab": "Kinematika",
    "subBab": "Vektor Gerak Parabola",
    "subTopic": "Vektor Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-lengkung-parabola-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-parabola",
    "category": "Vektor Gerak Parabola",
    "difficulty": "sedang",
    "statement": "Sebuah peluru ditembakkan dari tanah dengan kelajuan awal $v_0 = 50\\text{ m/s}$ pada sudut elevasi $\\theta$ dengan $\\tan\\theta = \\frac{4}{3}$ (sehingga $\\sin\\theta = 0{,}8$ dan $\\cos\\theta = 0{,}6$). Jika $g = 10\\text{ m/s}^2$, besar resultan kecepatan peluru dan sudut arah geraknya terhadap sumbu horizontal setelah melayang di udara selama $t = 1\\text{ sekon}$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\sqrt{2}\\text{ m/s}$ dan $45^\\circ$",
      "$30\\text{ m/s}$ dan $37^\\circ$",
      "$40\\text{ m/s}$ dan $53^\\circ$",
      "$30\\sqrt{2}\\text{ m/s}$ dan $30^\\circ$",
      "$50\\text{ m/s}$ dan $45^\\circ$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kecepatan sesaat pada gerak parabola merupakan resultan dari komponen horizontal konstan ($v_x$) dan komponen vertikal berubah beraturan ($v_y$):<br>$$|\\vec{v}| = \\sqrt{v_x^2 + v_y^2},\\quad \\tan\\alpha = \\frac{v_y}{v_x}$$",
      "steps": "1. Komponen kecepatan awal:<br>$$v_{0x} = v_0 \\cos\\theta = 50 \\times 0{,}6 = 30\\text{ m/s}$$<br>$$v_{0y} = v_0 \\sin\\theta = 50 \\times 0{,}8 = 40\\text{ m/s}$$<br>2. Komponen kecepatan pada $t = 1\\text{ s}$:<br>$$v_x(1) = v_{0x} = 30\\text{ m/s}$$<br>$$v_y(1) = v_{0y} - gt = 40 - 10(1) = 30\\text{ m/s}$$<br>3. Hitung resultan dan sudut elevasi sesaat:<br>$$|\\vec{v}| = \\sqrt{30^2 + 30^2} = 30\\sqrt{2}\\text{ m/s}$$<br>$$\\tan\\alpha = \\frac{v_y}{v_x} = \\frac{30}{30} = 1 \\implies \\alpha = 45^\\circ$$",
      "pitfalls": "Lupa bahwa komponen horizontal $v_x$ tetap bernilai $30\\text{ m/s}$ dan tidak terpengaruh gravitasi."
    },
    "subTopicSlug": "vektor-gerak-parabola",
    "bab": "Kinematika",
    "subBab": "Vektor Gerak Parabola",
    "subTopic": "Vektor Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-lengkung-parabola-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-parabola",
    "category": "Vektor Gerak Parabola",
    "difficulty": "sedang",
    "statement": "Sebuah batu dilempar secara mendatar (horizontal) dengan kelajuan awal $v_0 = 15\\text{ m/s}$ dari puncak tebing karang setinggi $H = 20\\text{ meter}$ di atas permukaan laut. Pada saat batu tepat menyentuh permukaan air laut di dasar tebing, besar kelajuan resultan batu tersebut adalah .... ($g = 10\\text{ m/s}^2$)",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$25\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$35\\text{ m/s}$",
      "$15\\sqrt{2}\\text{ m/s}$",
      "$\\sqrt{425}\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kecepatan tumbuk batu ke permukaan air laut diperoleh dari gabungan komponen horizontal konstan ($v_x = v_0$) dan komponen vertikal akibat jatuh bebas ($v_y = \\sqrt{2gH}$):<br>$$v = \\sqrt{v_x^2 + v_y^2}$$",
      "steps": "1. Komponen horizontal konstan:<br>$$v_x = 15\\text{ m/s}$$<br>2. Komponen vertikal saat mencapai dasar laut:<br>$$v_y = \\sqrt{2gH} = \\sqrt{2 \\times 10 \\times 20} = \\sqrt{400} = 20\\text{ m/s}$$<br>3. Hitung kelajuan total saat menyentuh air:<br>$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{15^2 + 20^2} = \\sqrt{225 + 400} = \\sqrt{625} = 25\\text{ m/s}$$",
      "pitfalls": "Menghitung hanya komponen vertikalnya saja ($20\\text{ m/s}$) dan melupakan kecepatan mendatar awal lemparan."
    },
    "subTopicSlug": "vektor-gerak-parabola",
    "bab": "Kinematika",
    "subBab": "Vektor Gerak Parabola",
    "subTopic": "Vektor Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-lengkung-parabola-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-parabola",
    "category": "Vektor Gerak Parabola",
    "difficulty": "sedang",
    "statement": "Lintasan sebuah proyektil dalam koordinat kartesius $(x, y)$ dinyatakan oleh persamaan trajektori $y = x - 0{,}05 x^2$, dengan $x$ dan $y$ dalam meter. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar sudut elevasi penembakan $\\theta$ dan kecepatan awal $v_0$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$45^\\circ$ dan $10\\sqrt{2}\\text{ m/s}$",
      "$45^\\circ$ dan $20\\text{ m/s}$",
      "$30^\\circ$ dan $10\\sqrt{2}\\text{ m/s}$",
      "$60^\\circ$ dan $10\\text{ m/s}$",
      "$45^\\circ$ dan $10\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bentuk baku persamaan trajektori gerak parabola adalah:<br>$$y = x\\tan\\theta - \\frac{g}{2 v_0^2 \\cos^2\\theta} x^2$$",
      "steps": "1. Samakan koefisien $x$:<br>$$\\tan\\theta = 1 \\implies \\theta = 45^\\circ$$<br>Maka $\\cos 45^\\circ = \\frac{1}{2}\\sqrt{2} \\implies \\cos^2 45^\\circ = \\frac{1}{2}$.<br>2. Samakan koefisien $x^2$:<br>$$\\frac{g}{2 v_0^2 \\cos^2 45^\\circ} = 0{,}05$$<br>$$\\frac{10}{2 v_0^2 \\left(\\frac{1}{2}\\right)} = 0{,}05 \\implies \\frac{10}{v_0^2} = 0{,}05$$<br>$$v_0^2 = \\frac{10}{0{,}05} = 200 \\implies v_0 = \\sqrt{200} = 10\\sqrt{2}\\text{ m/s}$$",
      "pitfalls": "Lupa mengkuadratkan nilai $\\cos 45^\\circ$ pada penyebut koefisien kuadratik."
    },
    "subTopicSlug": "vektor-gerak-parabola",
    "bab": "Kinematika",
    "subBab": "Vektor Gerak Parabola",
    "subTopic": "Vektor Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-lengkung-parabola-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-parabola",
    "category": "Vektor Gerak Parabola",
    "difficulty": "sedang",
    "statement": "Sebuah sasaran tembak berada di tanah mendatar pada jarak $X = 80\\sqrt{3}\\text{ meter}$ dari titik peluncuran. Meriam ditembakkan dengan kelajuan awal tetap $v_0 = 40\\text{ m/s}$. Jika $g = 10\\text{ m/s}^2$ dan tembakan berhasil mengenai sasaran, dua kemungkinan besar sudut elevasi penembakan $\\theta$ yang dapat digunakan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30^\\circ$ atau $60^\\circ$",
      "$37^\\circ$ atau $53^\\circ$",
      "$15^\\circ$ atau $75^\\circ$",
      "$45^\\circ$ saja",
      "$20^\\circ$ atau $70^\\circ$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jangkauan mendatar peluru dirumuskan oleh:<br>$$X_{\\max} = \\frac{v_0^2 \\sin(2\\theta)}{g}$$<br>Dua sudut komplementer ($\\theta_1 + \\theta_2 = 90^\\circ$) menghasilkan jangkauan mendatar yang sama karena $\\sin(2(90^\\circ - \\theta)) = \\sin(180^\\circ - 2\\theta) = \\sin(2\\theta)$.",
      "steps": "1. Masukkan data ke rumus jangkauan:<br>$$80\\sqrt{3} = \\frac{(40)^2 \\sin(2\\theta)}{10} = \\frac{1600 \\sin(2\\theta)}{10} = 160 \\sin(2\\theta)$$<br>2. Selesaikan nilai $\\sin(2\\theta)$:<br>$$\\sin(2\\theta) = \\frac{80\\sqrt{3}}{160} = \\frac{1}{2}\\sqrt{3}$$<br>3. Nilai sudut $2\\theta$ yang memenuhi pada kuadran I dan II:<br>$$2\\theta = 60^\\circ \\implies \\theta = 30^\\circ$$<br>$$2\\theta = 120^\\circ \\implies \\theta = 60^\\circ$$",
      "pitfalls": "Hanya mengambil satu sudut $\\theta = 30^\\circ$ dan melupakan sudut komplementernya ($60^\\circ$)."
    },
    "subTopicSlug": "vektor-gerak-parabola",
    "bab": "Kinematika",
    "subBab": "Vektor Gerak Parabola",
    "subTopic": "Vektor Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-lengkung-parabola-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-parabola",
    "category": "Vektor Gerak Parabola",
    "difficulty": "sedang",
    "statement": "Vektor posisi dari sebuah partikel peluru dinyatakan oleh $\\vec{r}(t) = (24t)\\hat{i} + (32t - 5t^2)\\hat{j}$ dalam satuan meter dan sekon. Vektor percepatan partikel dan besar kelajuan partikel ketika berada di titik tertinggi berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-10\\hat{j}\\text{ m/s}^2$ dan $24\\text{ m/s}$",
      "$-5\\hat{j}\\text{ m/s}^2$ dan $32\\text{ m/s}$",
      "$-10\\hat{j}\\text{ m/s}^2$ dan $0\\text{ m/s}$",
      "$24\\hat{i} - 10\\hat{j}\\text{ m/s}^2$ dan $24\\text{ m/s}$",
      "$-10\\hat{j}\\text{ m/s}^2$ dan $40\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Vektor kecepatan diperoleh dari turunan pertama $\\vec{v} = \\frac{d\\vec{r}}{dt}$ dan percepatan dari $\\vec{a} = \\frac{d\\vec{v}}{dt}$. Di titik tertinggi, komponen kecepatan vertikal nol ($v_y = 0$), sehingga kecepatan peluru murni merupakan komponen horizontal ($v_x$).",
      "steps": "1. Turunkan fungsi posisi untuk mencari vektor kecepatan:<br>$$\\vec{v}(t) = 24\\hat{i} + (32 - 10t)\\hat{j}\\text{ (m/s)}$$<br>2. Turunkan vektor kecepatan untuk mencari vektor percepatan:<br>$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = -10\\hat{j}\\text{ (m/s}^2)$$<br>3. Di titik tertinggi, $v_y = 32 - 10t = 0$. Maka kelajuan partikel:<br>$$|\\vec{v}_{\\text{puncak}}| = \\sqrt{v_x^2 + 0^2} = v_x = 24\\text{ m/s}$$",
      "pitfalls": "Menyatakan kelajuan di titik puncak adalah $0$, padahal hanya komponen vertikal $v_y$ yang nol, sedangkan komponen horizontal $v_x = 24\\text{ m/s}$ tetap ada."
    },
    "subTopicSlug": "vektor-gerak-parabola",
    "bab": "Kinematika",
    "subBab": "Vektor Gerak Parabola",
    "subTopic": "Vektor Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
    window.TKA_BANK_SOAL[subTopicSlug] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
