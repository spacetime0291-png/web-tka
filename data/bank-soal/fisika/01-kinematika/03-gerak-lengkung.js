/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Sub-topik: Gerak Lengkung (fis-kin-3)
 * Indikator: Komponen kecepatan & posisi gerak parabola horizontal; titik tertinggi & jarak tempuh maksimum gerak parabola; besaran sudut, kecepatan linier, & percepatan sentripetal GMB.
 * 
 * Total Butir Soal: 10 Soal (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-3";
  const questions = [
  {
    "id": "mudah-fis-12",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-3",
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
    "subBab": "Gerak Lengkung",
    "subTopic": "Gerak Lengkung",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "fis-din-13",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-3",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah mobil sedan bermassa $1200\\text{ kg}$ melintasi puncak jembatan layang yang memiliki kelengkungan cembung dengan jari-jari $R = 40\\text{ meter}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan maksimum mobil di puncak jembatan agar roda tetap mempertahankan kontak dengan jalan (tidak terangkat ke udara) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "10 m/s",
      "12 m/s",
      "15 m/s",
      "18 m/s",
      "20 m/s"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Dinamika gerak melingkar vertikal di puncak bukit/jembatan cembung: $mg - N = \\frac{m v^2}{R}$.</div>",
      "steps": "<ol><li>Kondisi batas mobil tepat tidak terlempar/terangkat adalah gaya normal bernilai nol ($N = 0$).<br>$$mg = \\frac{m v_{\\max}^2}{R} \\Rightarrow v_{\\max} = \\sqrt{g R} = \\sqrt{10 \\times 40} = \\sqrt{400} = 20\\text{ m/s}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering mengira massa mobil ($1200\\text{ kg}$) berpengaruh pada kecepatan lepas, padahal variabel massa tereliminasi dari persamaan.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Gerak Lengkung",
    "subTopic": "Gerak Lengkung",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "fis-din-14",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-3",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Pada sebuah atraksi sirkus, seorang akrobat memutar ember berisi air dalam bidang lingkaran vertikal dengan panjang tali $R = 0{,}9\\text{ meter}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan linear minimum putaran ember di titik tertinggi lintasannya agar air di dalamnya tidak tumpah adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "3 m/s",
      "4 m/s",
      "5 m/s",
      "6 m/s",
      "9 m/s"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kelajuan kritis pada titik tertinggi gerak melingkar vertikal: $N + mg = \\frac{m v^2}{R}$ dengan syarat $N \\ge 0$.</div>",
      "steps": "<ol><li>Agar air tepat tidak lepas dari dasar ember di titik puncak, gaya desak normal dasar ember $N = 0$:<br>$$mg = \\frac{m v_{\\min}^2}{R} \\Rightarrow v_{\\min} = \\sqrt{g R} = \\sqrt{10 \\times 0{,}9} = \\sqrt{9} = 3\\text{ m/s}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa menarik akar kuadrat dari hasil kali $g R = 9$ sehingga memilih opsi $9\\text{ m/s}$.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Gerak Lengkung",
    "subTopic": "Gerak Lengkung",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "fis-din-37",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-3",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah mobil sedan melintasi tikungan jalan datar beraspal dengan jari-jari kelengkungan $R = 25\\text{ meter}$. Koefisien gesekan statis antara ban mobil dan permukaan aspal adalah $\\mu_s = 0{,}40$. Jika $g = 10\\text{ m/s}^2$, kelajuan maksimum yang diperbolehkan agar mobil dapat berbelok dengan aman tanpa selip keluar jalur adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "5 m/s",
      "10 m/s",
      "15 m/s",
      "20 m/s",
      "25 m/s"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Tikungan datar kasar: gaya gesek statis bertindak sebagai gaya sentripetal ($f_s \\le \\mu_s mg = \\frac{m v^2}{R}$).</div>",
      "steps": "<ol><li>$$v_{\\max} = \\sqrt{\\mu_s g R} = \\sqrt{0{,}40 \\times 10 \\times 25} = \\sqrt{100} = 10\\text{ m/s}$$. (Setara dengan $36\\text{ km/jam}$).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa menarik akar kuadrat sehingga menjawab $100\\text{ m/s}$ atau mengira kelajuan maksimum bergantung pada massa mobil.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Gerak Lengkung",
    "subTopic": "Gerak Lengkung",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "fis-din-38",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-3",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah kereta *roller coaster* membawa seorang penumpang bermassa $60\\text{ kg}$ melintasi titik terbawah lintasan lembah cekung dengan kelajuan $v = 20\\text{ m/s}$. Jari-jari kelengkungan lembah cekung tersebut adalah $R = 20\\text{ meter}$. Jika $g = 10\\text{ m/s}^2$, besar gaya normal yang dikerjakan kursi terhadap badan penumpang di titik terendah tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "600 N",
      "1200 N",
      "1500 N",
      "1800 N",
      "2400 N"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Dinamika gerak melingkar di titik terendah lembah cekung: $N - mg = \\frac{m v^2}{R}$.</div>",
      "steps": "<ol><li>1) Berat penumpang: $W = mg = 60(10) = 600\\text{ N}$.<br>2) Gaya sentripetal: $F_s = \\frac{m v^2}{R} = \\frac{60 \\times 20^2}{20} = 1200\\text{ N}$.<br>3) Gaya normal: $N = W + F_s = 600 + 1200 = 1800\\text{ N}$ (penumpang merasakan sensasi $3g$).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering mengurangkan gaya sentripetal dengan gaya berat ($N = 1200 - 600 = 600\\text{ N}$) karena tertukar dengan kasus bukit cembung.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Gerak Lengkung",
    "subTopic": "Gerak Lengkung",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "sedang-fis-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-3",
    "category": "Gerak Parabola Dua Dimensi",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah peluru ditembakkan dari permukaan tanah datar dengan kecepatan awal $v_0 = 50\\text{ m/s}$ pada sudut elevasi $\\theta$ dengan $\\sin\\theta = 0{,}6$ (dan $\\cos\\theta = 0{,}8$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$ dan gesekan udara diabaikan, waktu total peluru di udara hingga mendarat kembali di tanah serta jarak mendatar terjauh ($X_{\\max}$) yang dicapai peluru berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6\\text{ s}$ dan $240\\text{ m}$",
      "$3\\text{ s}$ dan $120\\text{ m}$",
      "$6\\text{ s}$ dan $180\\text{ m}$",
      "$8\\text{ s}$ dan $320\\text{ m}$",
      "$5\\text{ s}$ dan $200\\text{ m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Analisis Komponen Gerak Parabola:</strong><br>\n          • Sumbu horizontal (GLB): $v_x = v_0\\cos\\theta$ (konstan), $X = v_x \\cdot t$<br>\n          • Sumbu vertikal (GLBB gravitasi): $v_{0y} = v_0\\sin\\theta$, $v_y = v_{0y} - gt$<br>\n          • Waktu mencapai titik puncak: $t_p = \\frac{v_0\\sin\\theta}{g}$<br>\n          • Waktu total di udara: $t_{\\text{udara}} = 2 t_p = \\frac{2v_0\\sin\\theta}{g}$<br>\n          • Jarak terjauh: $X_{\\max} = v_x \\cdot t_{\\text{udara}}$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li><strong>Hitung Komponen Kecepatan Awal:</strong><br>\n            $$v_x = 50 \\times 0{,}8 = 40\\text{ m/s}$$\n            $$v_{0y} = 50 \\times 0{,}6 = 30\\text{ m/s}$$\n          </li>\n          <li><strong>Hitung Waktu Total di Udara $(t_{\\text{udara}})$:</strong><br>\n            $$t_{\\text{udara}} = \\frac{2 v_{0y}}{g} = \\frac{2(30)}{10} = 6\\text{ detik}$$\n          </li>\n          <li><strong>Hitung Jarak Jangkauan Maksimum $(X_{\\max})$:</strong><br>\n            $$X_{\\max} = v_x \\times t_{\\text{udara}} = 40\\text{ m/s} \\times 6\\text{ s} = 240\\text{ meter}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          <strong>⚠️ Jebakan Waktu:</strong><br>\n          Waktu $t = 3\\text{ detik}$ hanyalah waktu saat peluru berada di titik puncak (tertinggi). Untuk jarak mendatar total di tanah, harus menggunakan waktu tempuh total bolak-balik ($2 \\times 3 = 6\\text{ s}$).\n        </div>\n      "
    },
    "bab": "Kinematika",
    "subBab": "Gerak Lengkung",
    "subTopic": "Gerak Lengkung",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "fis-din-15",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-3",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah jalan tikungan sirkuit balap dirancang dengan kemiringan sudut $\\theta = 37^\\circ$ terhadap bidang datar horizontal ($\\tan 37^\\circ = 0{,}75$) dan memiliki jari-jari kelengkungan $R = 120\\text{ meter}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan rancangan aman (*design banking speed*) mobil balap agar dapat melintasi tikungan tanpa bergantung sama sekali pada gaya gesekan ban adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "15 m/s",
      "20 m/s",
      "25 m/s",
      "30 m/s",
      "40 m/s"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Tikungan miring licin (design banking angle): komponen horizontal gaya normal bertindak sebagai gaya sentripetal ($N \\sin\\theta = \\frac{m v^2}{R}$ dan $N \\cos\\theta = mg$).</div>",
      "steps": "<ol><li>1) Dari perbandingan kedua sumbu: $\\tan\\theta = \\frac{v^2}{g R}$.<br>2) Menghitung kelajuan aman: $v = \\sqrt{g R \\tan\\theta} = \\sqrt{10 \\times 120 \\times 0{,}75} = \\sqrt{900} = 30\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering membalik fungsi trigonometri menjadi $\\frac{g R}{\\tan\\theta}$ atau lupa menarik akar kuadrat dari 900.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Gerak Lengkung",
    "subTopic": "Gerak Lengkung",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "fis-din-16",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-3",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah beban logam bermassa $m = 2\\text{ kg}$ diikatkan pada ujung seutas kawat ringan sepanjang $L = 0{,}8\\text{ meter}$ dan diputar pada bidang lingkaran vertikal. Pada saat beban melintasi titik terendah dari lintasannya, kelajuannya terukur sebesar $v = 4\\text{ m/s}$. Jika $g = 10\\text{ m/s}^2$, besar gaya tegangan kawat pada titik terendah tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "20 N",
      "30 N",
      "40 N",
      "50 N",
      "60 N"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton arah radial gerak melingkar vertikal di titik terendah: $T - mg = \\frac{m v^2}{R}$.</div>",
      "steps": "<ol><li>1) Gaya gravitasi: $W = mg = 2 \\times 10 = 20\\text{ N}$.<br>2) Gaya sentripetal yang dibutuhkan: $F_s = \\frac{m v^2}{L} = \\frac{2 \\times 4^2}{0{,}8} = \\frac{32}{0{,}8} = 40\\text{ N}$.<br>3) Tegangan kawat pada titik terendah: $T = W + F_s = 20 + 40 = 60\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Menjawab hanya gaya sentripetalnya saja ($40\\text{ N}$) atau hanya beratnya saja ($20\\text{ N}$), tanpa menggabungkan kedua komponen gaya searah radial.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Gerak Lengkung",
    "subTopic": "Gerak Lengkung",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "fis-din-39",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-3",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah bandul konis (ayunan kerucut) bermassa $m = 2\\text{ kg}$ diikatkan pada kawat ringan dengan panjang $L = 2\\text{ meter}$. Bandul diputar membentuk kerucut sehingga kawat membentuk sudut tetap $\\theta = 37^\\circ$ terhadap garis vertikal ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $\\tan 37^\\circ = 0{,}75$). Jika $g = 10\\text{ m/s}^2$, kelajuan linear putaran bandul tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "3 m/s",
      "4 m/s",
      "5 m/s",
      "6 m/s",
      "8 m/s"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Bandul konis: $T \\cos\\theta = mg$ dan $T \\sin\\theta = \\frac{m v^2}{R}$ dengan jari-jari lintasan $R = L \\sin\\theta$.</div>",
      "steps": "<ol><li>1) Jari-jari lingkaran horizontal: $R = L \\sin 37^\\circ = 2 \\times 0{,}6 = 1{,}2\\text{ m}$.<br>2) Hubungan kecepatan dan sudut: $\\tan 37^\\circ = \\frac{v^2}{g R}$.<br>3) Kelajuan linier: $v = \\sqrt{g R \\tan 37^\\circ} = \\sqrt{10 \\times 1{,}2 \\times 0{,}75} = \\sqrt{9} = 3\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Menggunakan panjang tali $L = 2\\text{ m}$ langsung sebagai jari-jari lingkaran $R$ tanpa mengalikan dengan $\\sin 37^\\circ$.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Gerak Lengkung",
    "subTopic": "Gerak Lengkung",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "fis-din-40",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-3",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Pada wahana taman hiburan silinder putar raksasa vertikal (*Rotor* / Dinding Maut) dengan jari-jari $R = 4\\text{ meter}$, seseorang bersandar merapat pada dinding silinder yang berputar terhadap poros vertikal. Koefisien gesekan statis antara pakaian orang tersebut dan dinding silinder adalah $\\mu_s = 0{,}40$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan linear putaran minimum $v_{\\min}$ dinding silinder agar orang tersebut tidak merosot ke bawah saat lantai di bawah kakinya diturunkan adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "4 m/s",
      "6 m/s",
      "8 m/s",
      "9 m/s",
      "10 m/s"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Silinder putar vertikal: gaya normal dinding menjadi gaya sentripetal ($N = \\frac{m v^2}{R}$) dan gaya gesek statis menahan berat badan ($f_s = mg \\le \\mu_s N$).</div>",
      "steps": "<ol><li>Kondisi batas tepat tidak merosot: $mg = \\mu_s N = \\mu_s \\left(\\frac{m v_{\\min}^2}{R}\\right) \\Rightarrow v_{\\min} = \\sqrt{\\frac{g R}{\\mu_s}} = \\sqrt{\\frac{10 \\times 4}{0{,}40}} = \\sqrt{100} = 10\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengalikan dengan $\\mu_s$ bukannya membagi, sehingga menghitung $\\sqrt{10 \\times 4 \\times 0{,}40} = 4\\text{ m/s}$.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Gerak Lengkung",
    "subTopic": "Gerak Lengkung",
    "chapterTitle": "Kinematika"
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
