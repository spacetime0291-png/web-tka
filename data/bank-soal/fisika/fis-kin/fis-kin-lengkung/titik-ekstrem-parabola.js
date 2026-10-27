/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lengkung (fis-kin-lengkung)
 * Sub-Bab: Titik Ekstrem Gerak Parabola (fis-kin-lengkung-ekstrem)
 * Slug: titik-ekstrem-parabola
 * Indikator: Penentuan waktu mencapai titik tertinggi (h_max), jangkauan horizontal terjauh (x_max), dan kecepatan di titik ekstrem.
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-lengkung-ekstrem";
  const subTopicSlug = "titik-ekstrem-parabola";
  const questions = [
  {
    "id": "fis-kin-lengkung-ekstrem-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-ekstrem",
    "category": "Titik Ekstrem Gerak Parabola",
    "difficulty": "mudah",
    "statement": "Sebuah peluru ditembakkan dari permukaan tanah datar dengan kecepatan awal $v_0 = 40\\text{ m/s}$ pada sudut elevasi $30^\\circ$ terhadap tanah (diketahui $\\sin 30^\\circ = 0{,}5$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$ dan gesekan udara diabaikan, tinggi maksimum yang dicapai peluru tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20\\text{ meter}$",
      "$40\\text{ meter}$",
      "$10\\text{ meter}$",
      "$80\\text{ meter}$",
      "$20\\sqrt{3}\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Tinggi maksimum ($h_{\\max}$) gerak parabola tercapai ketika komponen kecepatan vertikal nol ($v_y = 0$):<br>$$h_{\\max} = \\frac{v_0^2 \\sin^2\\theta}{2g}$$",
      "steps": "1. Komponen kecepatan awal vertikal:<br>$$v_{0y} = v_0 \\sin 30^\\circ = 40 \\times 0{,}5 = 20\\text{ m/s}$$<br>2. Hitung ketinggian maksimum:<br>$$h_{\\max} = \\frac{v_{0y}^2}{2g} = \\frac{20^2}{2(10)} = \\frac{400}{20} = 20\\text{ meter}$$",
      "pitfalls": "Lupa membagi dengan faktor 2 pada penyebut ($2g$) sehingga menghasilkan $40\\text{ m}$."
    },
    "subTopicSlug": "titik-ekstrem-parabola",
    "bab": "Kinematika",
    "subBab": "Titik Ekstrem Gerak Parabola",
    "subTopic": "Titik Ekstrem Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Tinggi maksimum ($h_{\\max}$) gerak parabola tercapai ketika komponen kecepatan vertikal nol ($v_y = 0$): $$h_{\\max} = \\frac{v_0^2 \\sin^2\\theta}{2g}$$. **Tips:** Lupa membagi dengan faktor 2 pada penyebut ($2g$) sehingga menghasilkan $40\\text{ m}$."
  },
  {
    "id": "fis-kin-lengkung-ekstrem-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-ekstrem",
    "category": "Titik Ekstrem Gerak Parabola",
    "difficulty": "mudah",
    "statement": "Sebuah proyektil ditembakkan dengan kelajuan awal $v_0 = 60\\text{ m/s}$ pada sudut elevasi $\\theta$ dengan nilai $\\cos\\theta = 0{,}8$. Besar kelajuan proyektil pada saat tepat berada di titik puncak lintasannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$48\\text{ m/s}$",
      "$0\\text{ m/s}$",
      "$36\\text{ m/s}$",
      "$60\\text{ m/s}$",
      "$24\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Di titik puncak gerak parabola, kecepatan vertikal bernilai nol ($v_y = 0$). Namun, kecepatan horizontal tetap tidak nol dan konstan sepanjang lintasan ($v_x = v_{0x} = v_0 \\cos\\theta$). Maka kelajuan total di puncak sama dengan kelajuan horizontalnya.",
      "steps": "1. Identifikasi kondisi di puncak: $v_y = 0$.<br>2. Hitung kelajuan horizontal yang konstan:<br>$$v_{\\text{puncak}} = v_x = v_0 \\cos\\theta = 60\\text{ m/s} \\times 0{,}8 = 48\\text{ m/s}$$",
      "pitfalls": "Jebakan paling sering adalah menjawab $0\\text{ m/s}$ karena mengira seluruh kecepatan menjadi nol seperti pada gerak vertikal ke atas 1 dimensi."
    },
    "subTopicSlug": "titik-ekstrem-parabola",
    "bab": "Kinematika",
    "subBab": "Titik Ekstrem Gerak Parabola",
    "subTopic": "Titik Ekstrem Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Di titik puncak gerak parabola, kecepatan vertikal bernilai nol ($v_y = 0$). Namun, kecepatan horizontal tetap tidak nol dan konstan sepanjang lintasan ($v_x = v_{0x} = v_0 \\cos\\theta$). Maka kelajuan total di puncak sama dengan kelajuan horizontalnya."
  },
  {
    "id": "fis-kin-lengkung-ekstrem-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-ekstrem",
    "category": "Titik Ekstrem Gerak Parabola",
    "difficulty": "mudah",
    "statement": "Sebuah bola kasti dilemparkan dari tanah datar dengan kecepatan awal $v_0 = 20\\text{ m/s}$ pada sudut elevasi $45^\\circ$ ($\\sin 90^\\circ = 1$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, jarak mendatar terjauh ($X_{\\max}$) yang dicapai bola saat mendarat kembali di tanah adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$40\\text{ meter}$",
      "$20\\text{ meter}$",
      "$80\\text{ meter}$",
      "$20\\sqrt{2}\\text{ meter}$",
      "$10\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jangkauan horizontal terjauh ($X_{\\max}$) pada tanah datar dirumuskan dengan:<br>$$X_{\\max} = \\frac{v_0^2 \\sin(2\\theta)}{g}$$",
      "steps": "1. Sudut ganda untuk $\\theta = 45^\\circ$: $\\sin(2 \\times 45^\\circ) = \\sin 90^\\circ = 1$.<br>2. Hitung jangkauan maksimum:<br>$$X_{\\max} = \\frac{(20\\text{ m/s})^2 \\times 1}{10\\text{ m/s}^2} = \\frac{400}{10} = 40\\text{ meter}$$",
      "pitfalls": "Lupa bahwa rumus jangkauan terjauh memuat sudut rangkap $\\sin(2\\theta)$, bukan $\\sin\\theta$ biasa."
    },
    "subTopicSlug": "titik-ekstrem-parabola",
    "bab": "Kinematika",
    "subBab": "Titik Ekstrem Gerak Parabola",
    "subTopic": "Titik Ekstrem Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Jangkauan horizontal terjauh ($X_{\\max}$) pada tanah datar dirumuskan dengan: $$X_{\\max} = \\frac{v_0^2 \\sin(2\\theta)}{g}$$. **Tips:** Lupa bahwa rumus jangkauan terjauh memuat sudut rangkap $\\sin(2\\theta)$, bukan $\\sin\\theta$ biasa."
  },
  {
    "id": "fis-kin-lengkung-ekstrem-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-ekstrem",
    "category": "Titik Ekstrem Gerak Parabola",
    "difficulty": "mudah",
    "statement": "Agar suatu peluru yang ditembakkan dari tanah datar dengan laju awal tertentu dapat mencapai jangkauan mendatar terjauh ($X_{\\max}$), besar sudut elevasi penembakan yang harus dipilih adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$45^\\circ$",
      "$30^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$",
      "$0^\\circ$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jangkauan mendatar dirumuskan oleh $X = \\frac{v_0^2 \\sin(2\\theta)}{g}$. Jangkauan akan bernilai maksimum ketika fungsi trigonometri $\\sin(2\\theta)$ bernilai maksimum, yaitu sama dengan 1.",
      "steps": "1. Nilai maksimum sinus: $\\sin(2\\theta) = 1$.<br>2. Selesaikan nilai sudut:<br>$$2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$$",
      "pitfalls": "Memilih sudut $90^\\circ$ yang justru menghasilkan gerak vertikal ke atas murni dengan jangkauan mendatar nol ($X = 0$)."
    },
    "subTopicSlug": "titik-ekstrem-parabola",
    "bab": "Kinematika",
    "subBab": "Titik Ekstrem Gerak Parabola",
    "subTopic": "Titik Ekstrem Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Jangkauan mendatar dirumuskan oleh $X = \\frac{v_0^2 \\sin(2\\theta)}{g}$. Jangkauan akan bernilai maksimum ketika fungsi trigonometri $\\sin(2\\theta)$ bernilai maksimum, yaitu sama dengan 1."
  },
  {
    "id": "fis-kin-lengkung-ekstrem-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-ekstrem",
    "category": "Titik Ekstrem Gerak Parabola",
    "difficulty": "mudah",
    "statement": "Sebuah peluru ditembakkan dari tanah datar dan membutuhkan waktu $t = 3\\text{ sekon}$ untuk mencapai titik tertinggi lintasannya. Waktu total yang dihabiskan peluru di udara sejak ditembakkan hingga mendarat kembali di permukaan tanah datar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6\\text{ sekon}$",
      "$3\\text{ sekon}$",
      "$9\\text{ sekon}$",
      "$1{,}5\\text{ sekon}$",
      "$12\\text{ sekon}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada lintasan simetris di atas tanah datar tanpa hambatan udara, waktu naik menuju puncak ($t_p$) sama persis dengan waktu turun dari puncak ke tanah ($t_t$). Maka waktu total di udara adalah:<br>$$t_{\\text{total}} = 2 t_p$$",
      "steps": "1. Waktu naik menuju titik tertinggi: $t_p = 3\\text{ sekon}$.<br>2. Waktu total perjalanan bolak-balik di udara:<br>$$t_{\\text{total}} = 2 \\times 3\\text{ s} = 6\\text{ sekon}$$",
      "pitfalls": "Menganggap waktu total di udara sama dengan waktu mencapai titik tertinggi ($3\\text{ sekon}$)."
    },
    "subTopicSlug": "titik-ekstrem-parabola",
    "bab": "Kinematika",
    "subBab": "Titik Ekstrem Gerak Parabola",
    "subTopic": "Titik Ekstrem Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Pada lintasan simetris di atas tanah datar tanpa hambatan udara, waktu naik menuju puncak ($t_p$) sama persis dengan waktu turun dari puncak ke tanah ($t_t$). Maka waktu total di udara adalah: $$t_{\\text{total}} = 2 t_p$$. **Tips:** Menganggap waktu total di udara sama dengan waktu mencapai titik tertinggi ($3\\text{ sekon}$)."
  },
  {
    "id": "fis-kin-lengkung-ekstrem-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-ekstrem",
    "category": "Titik Ekstrem Gerak Parabola",
    "difficulty": "sedang",
    "statement": "Sebuah peluru ditembakkan dari tanah datar dengan kelajuan awal $v_0$ dan sudut elevasi $\\theta$. Jika perbandingan antara tinggi maksimum ($h_{\\max}$) terhadap jangkauan horizontal terjauh ($X_{\\max}$) adalah $1 : 4$, maka nilai dari $\\tan\\theta$ dan besar sudut $\\theta$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\tan\\theta = 1$ dan $\\theta = 45^\\circ$",
      "$\\tan\\theta = 4$ dan $\\theta \\approx 76^\\circ$",
      "$\\tan\\theta = 0{,}25$ dan $\\theta \\approx 14^\\circ$",
      "$\\tan\\theta = \\sqrt{3}$ dan $\\theta = 60^\\circ$",
      "$\\tan\\theta = 0{,}5$ dan $\\theta \\approx 26{,}5^\\circ$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hubungan umum antara tinggi maksimum dan jarak mendatar terjauh pada tanah datar memenuhi:<br>$$\\frac{h_{\\max}}{X_{\\max}} = \\frac{1}{4} \\tan\\theta$$",
      "steps": "1. Tuliskan rumus kedua besaran:<br>$$h_{\\max} = \\frac{v_0^2 \\sin^2\\theta}{2g}$$<br>$$X_{\\max} = \\frac{2 v_0^2 \\sin\\theta \\cos\\theta}{g}$$<br>2. Bagi kedua persamaan:<br>$$\\frac{h_{\\max}}{X_{\\max}} = \\frac{\\sin^2\\theta}{4 \\sin\\theta \\cos\\theta} = \\frac{1}{4} \\tan\\theta$$<br>3. Masukkan rasio yang diketahui $\\frac{h_{\\max}}{X_{\\max}} = \\frac{1}{4}$:<br>$$\\frac{1}{4} = \\frac{1}{4} \\tan\\theta \\implies \\tan\\theta = 1 \\implies \\theta = 45^\\circ$$",
      "pitfalls": "Lupa faktor 4 pada perbandingan sehingga langsung mengira $\\tan\\theta = 1/4$ atau $\\tan\\theta = 4$."
    },
    "subTopicSlug": "titik-ekstrem-parabola",
    "bab": "Kinematika",
    "subBab": "Titik Ekstrem Gerak Parabola",
    "subTopic": "Titik Ekstrem Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Hubungan umum antara tinggi maksimum dan jarak mendatar terjauh pada tanah datar memenuhi: $$\\frac{h_{\\max}}{X_{\\max}} = \\frac{1}{4} \\tan\\theta$$."
  },
  {
    "id": "fis-kin-lengkung-ekstrem-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-ekstrem",
    "category": "Titik Ekstrem Gerak Parabola",
    "difficulty": "sedang",
    "statement": "Sebuah bola bermassa $m$ ditembakkan dengan kelajuan awal $v_0$ pada sudut elevasi $60^\\circ$ terhadap horizontal. Jika energi kinetik awal bola saat ditembakkan adalah $E_k$, besar energi kinetik bola pada saat berada di titik tertinggi lintasannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{4} E_k$",
      "$0$",
      "$\\frac{1}{2} E_k$",
      "$\\frac{3}{4} E_k$",
      "$\\frac{1}{8} E_k$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Di titik puncak, komponen kecepatan vertikal nol ($v_y = 0$). Kelajuan partikel hanya tersisa komponen horizontal konstan ($v_x = v_0 \\cos\\theta$). Maka energi kinetik di puncak adalah $E_{k,\\text{puncak}} = E_k \\cos^2\\theta$.",
      "steps": "1. Energi kinetik awal:<br>$$E_k = \\frac{1}{2} m v_0^2$$<br>2. Kelajuan di puncak lintasan:<br>$$v_{\\text{puncak}} = v_x = v_0 \\cos 60^\\circ = \\frac{1}{2} v_0$$<br>3. Energi kinetik di titik tertinggi:<br>$$E_{k,\\text{puncak}} = \\frac{1}{2} m v_{\\text{puncak}}^2 = \\frac{1}{2} m \\left(\\frac{1}{2} v_0\\right)^2 = \\frac{1}{4} \\left(\\frac{1}{2} m v_0^2\\right) = \\frac{1}{4} E_k$$",
      "pitfalls": "Menjawab $0$ karena mengira seluruh energi kinetik berubah menjadi energi potensial gravitasi, padahal benda masih memiliki kelajuan horizontal $v_x$."
    },
    "subTopicSlug": "titik-ekstrem-parabola",
    "bab": "Kinematika",
    "subBab": "Titik Ekstrem Gerak Parabola",
    "subTopic": "Titik Ekstrem Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Di titik puncak, komponen kecepatan vertikal nol ($v_y = 0$). Kelajuan partikel hanya tersisa komponen horizontal konstan ($v_x = v_0 \\cos\\theta$). Maka energi kinetik di puncak adalah $E_{k,\\text{puncak}} = E_k \\cos^2\\theta$."
  },
  {
    "id": "fis-kin-lengkung-ekstrem-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-ekstrem",
    "category": "Titik Ekstrem Gerak Parabola",
    "difficulty": "sedang",
    "statement": "Sebuah proyektil ditembakkan dari permukaan tanah datar. Di titik puncak lintasannya yang berada pada ketinggian $h_{\\max} = 45\\text{ meter}$, kelajuan proyektil terukur sebesar $20\\text{ m/s}$. Jika $g = 10\\text{ m/s}^2$, jarak mendatar terjauh ($X_{\\max}$) yang dicapai proyektil saat mendarat kembali di tanah adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$120\\text{ meter}$",
      "$60\\text{ meter}$",
      "$90\\text{ meter}$",
      "$180\\text{ meter}$",
      "$150\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kelajuan di puncak menyatakan komponen horizontal konstan ($v_x = 20\\text{ m/s}$). Waktu naik menuju puncak dapat dihitung dari ketinggian maksimum ($h_{\\max} = \\frac{1}{2} g t_p^2$). Jarak mendatar adalah hasil kali kelajuan horizontal dengan waktu total di udara ($t_{\\text{total}} = 2 t_p$).",
      "steps": "1. Hitung waktu mencapai puncak:<br>$$45 = \\frac{1}{2}(10) t_p^2 = 5 t_p^2 \\implies t_p^2 = 9 \\implies t_p = 3\\text{ sekon}$$<br>2. Waktu total di udara:<br>$$t_{\\text{total}} = 2 \\times 3\\text{ s} = 6\\text{ sekon}$$<br>3. Jarak jangkauan horizontal terjauh:<br>$$X_{\\max} = v_x \\cdot t_{\\text{total}} = 20\\text{ m/s} \\times 6\\text{ s} = 120\\text{ meter}$$",
      "pitfalls": "Mengalikan $v_x$ hanya dengan waktu naik $t_p$ ($20 \\times 3 = 60\\text{ m}$), yang baru merupakan setengah jangkauan mendatar."
    },
    "subTopicSlug": "titik-ekstrem-parabola",
    "bab": "Kinematika",
    "subBab": "Titik Ekstrem Gerak Parabola",
    "subTopic": "Titik Ekstrem Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Kelajuan di puncak menyatakan komponen horizontal konstan ($v_x = 20\\text{ m/s}$). Waktu naik menuju puncak dapat dihitung dari ketinggian maksimum ($h_{\\max} = \\frac{1}{2} g t_p^2$). Jarak mendatar adalah hasil kali kelajuan horizontal dengan waktu total di udara ($t_{\\text{total}} = 2 t_p$)."
  },
  {
    "id": "fis-kin-lengkung-ekstrem-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-ekstrem",
    "category": "Titik Ekstrem Gerak Parabola",
    "difficulty": "sedang",
    "statement": "Sebuah bola dilontarkan dari atap sebuah gedung bertingkat dengan ketinggian $H = 25\\text{ meter}$ di atas tanah. Kecepatan awal lontaran bola adalah $v_0 = 20\\text{ m/s}$ pada sudut elevasi $30^\\circ$ terhadap horizontal ($\\sin 30^\\circ = 0{,}5$). Ketinggian maksimum yang dicapai bola jika diukur dari permukaan tanah adalah .... ($g = 10\\text{ m/s}^2$)",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ meter}$",
      "$5\\text{ meter}$",
      "$35\\text{ meter}$",
      "$45\\text{ meter}$",
      "$20\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Ketinggian maksimum total diukur dari permukaan tanah ($H_{\\text{total}}$) adalah jumlahan ketinggian awal gedung ($H$) dengan pertambahan ketinggian maksimum gerak parabola ($\\Delta h_{\\max}$):<br>$$H_{\\text{total}} = H + \\frac{v_0^2 \\sin^2\\theta}{2g}$$",
      "steps": "1. Komponen vertikal awal:<br>$$v_{0y} = v_0 \\sin 30^\\circ = 20 \\times 0{,}5 = 10\\text{ m/s}$$<br>2. Pertambahan ketinggian maksimum dari atap:<br>$$\\Delta h_{\\max} = \\frac{v_{0y}^2}{2g} = \\frac{10^2}{2(10)} = \\frac{100}{20} = 5\\text{ meter}$$<br>3. Ketinggian maksimum total dari tanah:<br>$$H_{\\text{total}} = 25\\text{ m} + 5\\text{ m} = 30\\text{ meter}$$",
      "pitfalls": "Hanya menjawab pertambahan ketinggian dari atap gedung ($\\Delta h = 5\\text{ m}$) tanpa menambahkan ketinggian atap dari tanah ($25\\text{ m}$)."
    },
    "subTopicSlug": "titik-ekstrem-parabola",
    "bab": "Kinematika",
    "subBab": "Titik Ekstrem Gerak Parabola",
    "subTopic": "Titik Ekstrem Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Ketinggian maksimum total diukur dari permukaan tanah ($H_{\\text{total}}$) adalah jumlahan ketinggian awal gedung ($H$) dengan pertambahan ketinggian maksimum gerak parabola ($\\Delta h_{\\max}$): $$H_{\\text{total}} = H + \\frac{v_0^2 \\sin^2\\theta}{2g}$$."
  },
  {
    "id": "fis-kin-lengkung-ekstrem-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-ekstrem",
    "category": "Titik Ekstrem Gerak Parabola",
    "difficulty": "sedang",
    "statement": "Dua peluru $A$ dan $B$ ditembakkan dari tanah dengan kelajuan awal yang sama besar $v_0$. Peluru $A$ ditembakkan dengan sudut elevasi $\\alpha = 30^\\circ$, sedangkan peluru $B$ ditembakkan dengan sudut elevasi $\\beta = 60^\\circ$. Perbandingan tinggi maksimum yang dicapai peluru $A$ terhadap peluru $B$ ($h_A : h_B$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 3$",
      "$1 : \\sqrt{3}$",
      "$1 : 1$",
      "$3 : 1$",
      "$1 : 2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Tinggi maksimum berbanding lurus dengan kuadrat sinus sudut elevasinya:<br>$$h_{\\max} \\propto \\sin^2\\theta$$",
      "steps": "1. Hitung sinus sudut masing-masing:<br>$$\\sin 30^\\circ = \\frac{1}{2} \\implies \\sin^2 30^\\circ = \\frac{1}{4}$$<br>$$\\sin 60^\\circ = \\frac{1}{2}\\sqrt{3} \\implies \\sin^2 60^\\circ = \\frac{3}{4}$$<br>2. Hitung perbandingan tinggi maksimum:<br>$$\\frac{h_A}{h_B} = \\frac{\\sin^2 30^\\circ}{\\sin^2 60^\\circ} = \\frac{\\frac{1}{4}}{\\frac{3}{4}} = \\frac{1}{3} = 1 : 3$$",
      "pitfalls": "Mengabaikan kuadrat fungsi sinus sehingga menghitung $\\frac{\\sin 30^\\circ}{\\sin 60^\\circ} = \\frac{1/2}{\\sqrt{3}/2} = 1 : \\sqrt{3}$."
    },
    "subTopicSlug": "titik-ekstrem-parabola",
    "bab": "Kinematika",
    "subBab": "Titik Ekstrem Gerak Parabola",
    "subTopic": "Titik Ekstrem Gerak Parabola",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Tinggi maksimum berbanding lurus dengan kuadrat sinus sudut elevasinya: $$h_{\\max} \\propto \\sin^2\\theta$$."
  },
  {
    "id": "mudah-fis-12",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-lengkung-ekstrem",
    "category": "Gerak Parabola & Titik Tertinggi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah bola ditendang dari permukaan tanah dengan kecepatan awal $v_0 = 40\\text{ m/s}$ dan sudut elevasi $\\theta = 30^\\circ$ terhadap bidang datar ($\\sin 30^\\circ = 0{,}5$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, waktu yang dibutuhkan bola untuk mencapai titik tertinggi lintasannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}0\\text{ detik}$",
      "$2{,}0\\text{ detik}$",
      "$3{,}0\\text{ detik}$",
      "$4{,}0\\text{ detik}$",
      "$5{,}0\\text{ detik}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Waktu Mencapai Titik Tertinggi Gerak Parabola:</strong><br>\n          Pada titik puncak, komponen kecepatan vertikal bernilai nol ($v_y = 0$).<br>\n          $$t_h = \\frac{v_0 \\sin\\theta}{g}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Identifikasi besaran: $v_0 = 40\\text{ m/s}$, $\\sin 30^\\circ = 0{,}5$, $g = 10\\text{ m/s}^2$.</li>\n          <li>Substitusi ke rumus waktu puncak:\n            $$t_h = \\frac{40 \\times 0{,}5}{10} = \\frac{20}{10} = 2{,}0\\text{ detik}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Jangan tertukar dengan waktu total di udara ($t_{\\text{total}} = 2 t_h = 4{,}0\\text{ detik}$). Soal hanya menanyakan waktu menuju titik tertinggi.\n        </div>\n      "
    },
    "bab": "Kinematika",
    "subBab": "Titik Ekstrem Gerak Parabola",
    "subTopic": "Titik Ekstrem Gerak Parabola",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-lengkung",
    "subTopicSlug": "titik-ekstrem-parabola",
    "hint": "Waktu Mencapai Titik Tertinggi Gerak Parabola: Pada titik puncak, komponen kecepatan vertikal bernilai nol ($v_y = 0$). $$t_h = \\frac{v_0 \\sin\\theta}{g}$$."
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
