/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Gaya dan Gerak (fis-din-gaya)
 * Sub-Bab: Gaya Sentripetal (fis-din-gaya-sentripetal)
 * Slug: gaya-sentripetal
 * Indikator: Resultan gaya sentripetal (F_s = m * v^2 / r) pada lintasan melingkar vertikal dan horizontal.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-gaya-sentripetal";
  const subTopicSlug = "gaya-sentripetal";
  const questions = [
  {
    "id": "fis-din-gaya-sentripetal-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-sentripetal",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah benda bermassa $m = 0,5\\text{ kg}$ diikatkan pada ujung seutas tali ringan sepanjang $R = 2\\text{ m}$ dan diputar pada bidang horizontal licin dengan kelajuan linier tetap $v = 4\\text{ m/s}$. Besar gaya sentripetal yang dialami benda tersebut (tegangan tali) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1\\text{ N}$",
      "$2\\text{ N}$",
      "$4\\text{ N}$",
      "$8\\text{ N}$",
      "$16\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gaya sentripetal adalah resultan gaya radial yang menjaga benda tetap bergerak pada lintasan melingkar: $F_s = m \\frac{v^2}{R}$. Pada bidang horizontal licin, gaya sentripetal disediakan sepenuhnya oleh gaya tegangan tali.",
      "steps": "1. Identifikasi parameter yang diketahui:\\n$m = 0,5\\text{ kg}$, $R = 2\\text{ m}$, $v = 4\\text{ m/s}$.\\n2. Hitung gaya sentripetal:\\n$$F_s = m \\frac{v^2}{R} = 0,5 \\times \\frac{4^2}{2} = 0,5 \\times \\frac{16}{2} = 0,5 \\times 8 = 4\\text{ N}$$\\nJadi, besar gaya sentripetal adalah $4\\text{ N}$.",
      "pitfalls": "Kerap lupa menguadratkan kecepatan ($v$) sehingga menghitung $F = \\frac{m v}{R} = \\frac{0,5 \\times 4}{2} = 1\\text{ N}$."
    },
    "subTopicSlug": "gaya-sentripetal",
    "bab": "Dinamika",
    "subBab": "Gaya Sentripetal",
    "subTopic": "Gaya Sentripetal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-sentripetal-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-sentripetal",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Manakah pernyataan yang BENAR mengenai konsep dan peranan gaya sentripetal pada gerak melingkar beraturan?",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Gaya sentripetal adalah gaya fisis baru yang berdiri sendiri dan berarah menjauhi pusat lingkaran.",
      "Gaya sentripetal selalu berarah menuju pusat lingkaran tegak lurus vektor kecepatan sesaat, dan berfungsi membelokkan arah gerak benda.",
      "Gaya sentripetal bekerja searah dengan vektor kecepatan linier untuk mempercepat kelajuan benda.",
      "Besar gaya sentripetal selalu sama dengan nol karena kelajuan gerak melingkar beraturan konstan.",
      "Gaya sentripetal melakukan usaha positif yang sebanding dengan jari-jari lintasan lingkaran."
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gaya sentripetal bukanlah jenis gaya fundamental tersendiri, melainkan penamaan untuk resultan gaya riil yang berarah radial ke pusat lingkaran. Karena selalu tegak lurus vektor kecepatan sesaat ($F_s \\perp v$), usaha oleh gaya sentripetal bernilai nol ($W = 0$) dan laju benda tetap konstan.",
      "steps": "1. Analisis arah: Gaya sentripetal selalu mengarah ke pusat rotasi/kelengkungan lintasan.\\n2. Analisis fungsi: Menghasilkan percepatan sentripetal yang bertugas mengubah arah vektor kecepatan secara kontinu, bukan mengubah besar kelajuannya.\\n3. Karakteristik fisis: Disediakan oleh interaksi gaya nyata seperti tegangan tali, gravitasi, gaya normal, atau gaya gesekan.\\nSehingga pernyataan yang tepat adalah bahwa gaya sentripetal berarah ke pusat dan membelokkan arah gerak.",
      "pitfalls": "Miskonsepsi umum adalah menganggap gaya sentripetal berarah ke luar (tertukar dengan konsep gaya sentrifugal semu pada kerangka non-inersial) atau menganggap gaya sentripetal melakukan usaha mempercepat kelajuan."
    },
    "subTopicSlug": "gaya-sentripetal",
    "bab": "Dinamika",
    "subBab": "Gaya Sentripetal",
    "subTopic": "Gaya Sentripetal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-sentripetal-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-sentripetal",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah mobil melintasi jalan datar horizontal yang menikung dengan jari-jari kelengkungan $R$. Gaya fisis yang bertindak sebagai gaya sentripetal sehingga mobil dapat berbelok aman tanpa tergelincir ke luar lintasan adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Gaya gravitasi bumi yang menarik mobil vertikal ke bawah",
      "Gaya normal dari permukaan aspal yang menekan mobil vertikal ke atas",
      "Gaya dorong mesin mobil yang searah dengan arah laju mobil",
      "Gaya gesekan statis antara permukaan ban mobil dan aspal jalan",
      "Gaya hambat udara yang berlawanan dengan arah gerak mobil"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Pada tikungan jalan datar tanpa kemiringan (flat curve), tidak ada komponen gaya normal maupun gravitasi pada arah radial horizontal. Satu-satunya gaya horizontal yang mengarah ke pusat lingkaran tikungan adalah gaya gesek statis samping antarmuka ban dan aspal: $F_s = f_s = m \\frac{v^2}{R}$.",
      "steps": "1. Tinjau gaya vertikal: Gaya normal $N$ mengimbangi berat $W$ ($N = m g$).\\n2. Tinjau gaya horizontal radial: Ketika mobil berbelok, ban memiliki kecenderungan tergelincir ke luar (menjauhi pusat). Gaya gesek statis melawan kecenderungan ini dengan mengarah ke dalam menuju pusat tikungan.\\n3. Kesimpulan: Gaya gesek statis berfungsi sebagai gaya sentripetal penahan belokan.",
      "pitfalls": "Banyak yang mengira gaya gesek kinetis yang bekerja saat mobil berbelok normal. Jika terjadi gaya gesek kinetis, berarti ban mobil sedang mengalami slip/tergelincir (skidding). Selama mobil melaju stabil terkontrol, gesekan yang bekerja adalah gesekan statis."
    },
    "subTopicSlug": "gaya-sentripetal",
    "bab": "Dinamika",
    "subBab": "Gaya Sentripetal",
    "subTopic": "Gaya Sentripetal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-sentripetal-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-sentripetal",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah benda bermassa $m$ bergerak melingkar beraturan dengan kecepatan sudut konstan $\\omega$ pada lintasan berjari-jari $r$. Jika jari-jari lintasan diperbesar menjadi $2r$ sedangkan kecepatan sudut putarnya tetap dipertahankan sebesar $\\omega$, besar gaya sentripetal yang dialami benda akan menjadi...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0,25$ kali semula",
      "$0,50$ kali semula",
      "Sama dengan semula",
      "$2$ kali semula",
      "$4$ kali semula"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Hubungan gaya sentripetal dinyatakan dalam kecepatan sudut adalah: $F_s = m \\omega^2 r$. Gaya sentripetal berbanding lurus secara linier dengan jari-jari $r$ bila kecepatan sudut $\\omega$ konstan.",
      "steps": "1. Tuliskan formula gaya sentripetal kondisi awal:\\n$$F_{s1} = m \\omega^2 r$$\\n2. Tuliskan formula kondisi baru dengan $r_2 = 2r$:\\n$$F_{s2} = m \\omega^2 (2r) = 2 (m \\omega^2 r) = 2 F_{s1}$$\\nJadi, besar gaya sentripetal menjadi $2$ kali semula.",
      "pitfalls": "Kerap tertukar menggunakan rumus $F_s = m \\frac{v^2}{r}$ dan menyimpulkan $F_s$ berbanding terbalik dengan $r$. Rumus tersebut hanya berlaku jika kelajuan linier $v$ yang dijaga konstan, bukan jika kecepatan sudut $\\omega$ yang konstan."
    },
    "subTopicSlug": "gaya-sentripetal",
    "bab": "Dinamika",
    "subBab": "Gaya Sentripetal",
    "subTopic": "Gaya Sentripetal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-sentripetal-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-sentripetal",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah batu bermassa $m = 2\\text{ kg}$ diputar dengan tali pada bidang datar licin sehingga bergerak melingkar beraturan dengan kecepatan sudut konstan $\\omega = 5\\text{ rad/s}$. Jika panjang tali yang menjadi jari-jari putaran adalah $R = 0,8\\text{ m}$, besar gaya sentripetal yang bekerja pada batu tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ N}$",
      "$20\\text{ N}$",
      "$40\\text{ N}$",
      "$50\\text{ N}$",
      "$80\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gaya sentripetal dihitung melalui rumus: $F_s = m \\omega^2 R$.",
      "steps": "1. Identifikasi besaran:\\n$m = 2\\text{ kg}$, $\\omega = 5\\text{ rad/s}$, $R = 0,8\\text{ m}$.\\n2. Hitung gaya sentripetal:\\n$$F_s = m \\omega^2 R = 2 \\times (5)^2 \\times 0,8$$\\n$$F_s = 2 \\times 25 \\times 0,8 = 50 \\times 0,8 = 40\\text{ N}$$\\nJadi, besar gaya sentripetal adalah $40\\text{ N}$.",
      "pitfalls": "Kekeliruan terjadi jika lupa menguadratkan $\\omega$ sehingga menghasilkan $2 \\times 5 \\times 0,8 = 8\\text{ N}$."
    },
    "subTopicSlug": "gaya-sentripetal",
    "bab": "Dinamika",
    "subBab": "Gaya Sentripetal",
    "subTopic": "Gaya Sentripetal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-sentripetal-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-sentripetal",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah mobil melintasi tikungan jalan datar horizontal dengan radius kelengkungan $R = 100\\text{ m}$. Koefisien gesekan statis antara permukaan ban mobil dan aspal jalan adalah $\\mu_s = 0,40$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, kelajuan linier maksimum mobil agar dapat menikung dengan aman tanpa tergelincir (selip ke luar lintasan) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$40\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gaya sentripetal penahan belokan pada jalan mendatar disediakan oleh gaya gesek statis: $F_s = f_s \\le f_{s,\\text{maks}} = \\mu_s N$. Pada batas kritis selip, $m \\frac{v_{\\text{maks}}^2}{R} = \\mu_s m g \\implies v_{\\text{maks}} = \\sqrt{\\mu_s g R}$.",
      "steps": "1. Identifikasi gaya vertikal:\\n$$N = m g$$\\n2. Samakan gaya sentripetal yang dibutuhkan dengan gaya gesek statis maksimum:\\n$$m \\frac{v_{\\text{maks}}^2}{R} = \\mu_s N = \\mu_s m g$$\\n3. Sederhanakan massa $m$ dan hitung $v_{\\text{maks}}$:\\n$$v_{\\text{maks}} = \\sqrt{\\mu_s g R} = \\sqrt{0,40 \\times 10 \\times 100} = \\sqrt{400} = 20\\text{ m/s}$$\\nJadi, kelajuan maksimum yang diperbolehkan adalah $20\\text{ m/s}$ (setara $72\\text{ km/jam}$).",
      "pitfalls": "Kerap salah membagi atau lupa mengakar kuadratkan hasil kali $\\mu_s g R$. Perhatikan pula bahwa kelajuan aman ini independen terhadap massa kendaraan."
    },
    "subTopicSlug": "gaya-sentripetal",
    "bab": "Dinamika",
    "subBab": "Gaya Sentripetal",
    "subTopic": "Gaya Sentripetal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-sentripetal-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-sentripetal",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah bola bermassa $m = 1\\text{ kg}$ diikatkan pada ujung seutas tali ringan dengan panjang $R = 0,5\\text{ m}$ dan diputar dalam bidang vertikal. Ketika bola tepat berada di titik terendah lintasannya, kelajuan bola tercatat sebesar $v = 4\\text{ m/s}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar tegangan tali di titik terendah tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ N}$",
      "$22\\text{ N}$",
      "$32\\text{ N}$",
      "$42\\text{ N}$",
      "$52\\text{ N}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Pada titik terendah gerak melingkar vertikal, resultan gaya radial mengarah ke atas menuju pusat lingkaran: $\\sum F_r = T - m g = m \\frac{v^2}{R}$. Sehingga tegangan tali merupakan penjumlahan gaya berat dan gaya sentripetal: $T = m g + m \\frac{v^2}{R}$.",
      "steps": "1. Identifikasi gaya-gaya radial pada titik terendah:\\n- Tegangan tali $T$ berarah ke atas (ke pusat lintasan).\\n- Gaya berat $W = m g$ berarah ke bawah (menjauhi pusat lintasan).\\n2. Terapkan Hukum II Newton arah radial:\\n$$T - m g = m \\frac{v^2}{R}$$\\n$$T = m g + m \\frac{v^2}{R}$$\\n3. Masukkan nilai yang diketahui ($m = 1\\text{ kg}$, $g = 10\\text{ m/s}^2$, $v = 4\\text{ m/s}$, $R = 0,5\\text{ m}$):\\n$$T = (1)(10) + (1) \\frac{4^2}{0,5} = 10 + \\frac{16}{0,5} = 10 + 32 = 42\\text{ N}$$\\nJadi, besar tegangan tali di titik terendah adalah $42\\text{ N}$.",
      "pitfalls": "Kekeliruan umum adalah mengurangkan gaya berat dari gaya sentripetal ($T = 32 - 10 = 22\\text{ N}$). Ingat bahwa di titik terbawah tali memikul beban ganda: menopang berat benda sekaligus menyediakan gaya ke pusat lintasan."
    },
    "subTopicSlug": "gaya-sentripetal",
    "bab": "Dinamika",
    "subBab": "Gaya Sentripetal",
    "subTopic": "Gaya Sentripetal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-sentripetal-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-sentripetal",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah jalan raya dirancang menikung dengan sudut kemiringan $\\theta$ terhadap bidang horizontal dan jari-jari kelengkungan $R = 30\\text{ m}$. Jika lintasan tersebut dirancang agar mobil dapat berbelok dengan aman pada kelajuan $v = 10\\sqrt{3}\\text{ m/s}$ tanpa mengandalkan gaya gesekan ban (asumsi jalan licin sempurna), besar sudut kemiringan jalan $\\theta$ adalah... ($g = 10\\text{ m/s}^2$)",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$15^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$53^\\circ$",
      "$60^\\circ$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada tikungan miring tanpa gesekan (banked curve), komponen horizontal dari gaya normal menyediakan gaya sentripetal: $N \\sin\\theta = m \\frac{v^2}{R}$, sedangkan komponen vertikalnya menahan berat kendaraan: $N \\cos\\theta = m g$. Rasio keduanya menghasilkan: $\\tan\\theta = \\frac{v^2}{g R}$.",
      "steps": "1. Uraikan gaya normal $N$ pada sumbu vertikal dan horizontal:\\n$$N \\cos\\theta = m g$$\\n$$N \\sin\\theta = m \\frac{v^2}{R}$$\\n2. Bagi kedua persamaan:\\n$$\\frac{N \\sin\\theta}{N \\cos\\theta} = \\frac{m v^2 / R}{m g} \\implies \\tan\\theta = \\frac{v^2}{g R}$$\\n3. Substitusi parameter yang diketahui:\\n$$\\tan\\theta = \\frac{(10\\sqrt{3})^2}{10 \\times 30} = \\frac{100 \\times 3}{300} = \\frac{300}{300} = 1$$\\n$$\\theta = \\arctan(1) = 45^\\circ$$\\nJadi, sudut kemiringan jalan tersebut adalah $45^\\circ$.",
      "pitfalls": "Kerap tertukar antara sinus dan cosinus gaya normal sehingga menuliskan $\\tan\\theta = \\frac{g R}{v^2}$ yang akan menghasilkan nilai terbalik."
    },
    "subTopicSlug": "gaya-sentripetal",
    "bab": "Dinamika",
    "subBab": "Gaya Sentripetal",
    "subTopic": "Gaya Sentripetal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-sentripetal-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-sentripetal",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah bola bermassa $m = 0,5\\text{ kg}$ diikatkan pada seutas tali ringan dan diputar sehingga membentuk bandul konis (ayunan kerucut) dengan tali membentuk sudut tetap $\\theta = 37^\\circ$ terhadap garis vertikal (diketahui $\\sin 37^\\circ = 0,6$ dan $\\cos 37^\\circ = 0,8$). Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar tegangan tali $T$ dan gaya sentripetal $F_s$ yang bekerja pada bola berturut-turut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$T = 6,25\\text{ N}$ dan $F_s = 3,75\\text{ N}$",
      "$T = 5,00\\text{ N}$ dan $F_s = 3,00\\text{ N}$",
      "$T = 6,25\\text{ N}$ dan $F_s = 5,00\\text{ N}$",
      "$T = 8,33\\text{ N}$ dan $F_s = 5,00\\text{ N}$",
      "$T = 4,00\\text{ N}$ dan $F_s = 2,40\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada ayunan konis, bola bergerak melingkar pada bidang horizontal. Komponen vertikal tegangan tali mengimbangi berat bola: $T \\cos\\theta = m g$. Komponen horizontal tegangan tali berperan sebagai gaya sentripetal: $F_s = T \\sin\\theta$.",
      "steps": "1. Analisis kesetimbangan arah vertikal ($y$):\\n$$\\sum F_y = T \\cos 37^\\circ - m g = 0$$\\n$$T (0,8) = 0,5 \\times 10 = 5\\text{ N}$$\\n$$T = \\frac{5}{0,8} = 6,25\\text{ N}$$\\n2. Hitung gaya sentripetal arah radial horizontal ($x$):\\n$$F_s = T \\sin 37^\\circ = 6,25 \\times 0,6 = 3,75\\text{ N}$$\\nJadi, $T = 6,25\\text{ N}$ dan $F_s = 3,75\\text{ N}$.",
      "pitfalls": "Kerap menganggap tegangan tali sama dengan berat bola ($T = 5\\text{ N}$). Karena tali berada dalam posisi miring, tegangan tali harus lebih besar dari berat beban agar proyeksi vertikalnya cukup menahan gravitasi."
    },
    "subTopicSlug": "gaya-sentripetal",
    "bab": "Dinamika",
    "subBab": "Gaya Sentripetal",
    "subTopic": "Gaya Sentripetal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-sentripetal-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-sentripetal",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah ember kecil berisi air diikatkan pada ujung tali dengan panjang $R = 0,9\\text{ m}$ lalu diputar dalam bidang lingkaran vertikal. Percepatan gravitasi bumi bernilai $g = 10\\text{ m/s}^2$. Kelajuan linier minimum di titik tertinggi lintasan agar air di dalam ember tidak tumpah dan tali tetap dalam kondisi tegang adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1,5\\text{ m/s}$",
      "$3,0\\text{ m/s}$",
      "$4,5\\text{ m/s}$",
      "$6,0\\text{ m/s}$",
      "$9,0\\text{ m/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Di titik tertinggi lintasan vertikal, baik gaya tegangan tali $T$ maupun gaya gravitasi $m g$ keduanya mengarah ke bawah menuju pusat lingkaran: $\\sum F_r = T + m g = m \\frac{v^2}{R}$. Batas kritis agar tali tidak kendur (air tidak tumpah) dicapai saat tegangan tali mendekati nol ($T \\ge 0$).",
      "steps": "1. Tuliskan persamaan dinamika di puncak lintasan:\\n$$T + m g = m \\frac{v^2}{R}$$\\n2. Terapkan kondisi batas kelajuan minimum ($T \\ge 0$):\\n$$m g \\le m \\frac{v^2}{R} \\implies v_{\\text{min}} = \\sqrt{g R}$$\\n3. Hitung nilainya:\\n$$v_{\\text{min}} = \\sqrt{10 \\times 0,9} = \\sqrt{9} = 3,0\\text{ m/s}$$\\nJadi, kelajuan minimum di titik tertinggi adalah $3,0\\text{ m/s}$.",
      "pitfalls": "Kerap menyamakan kelajuan di titik tertinggi dengan kelajuan di titik terendah. Di titik tertinggi, gravitasi sendiri bertindak sebagai penyedia gaya sentripetal sehingga tegangan tali berkurang hingga nol pada batas kelajuan kritis."
    },
    "subTopicSlug": "gaya-sentripetal",
    "bab": "Dinamika",
    "subBab": "Gaya Sentripetal",
    "subTopic": "Gaya Sentripetal",
    "chapterTitle": "Dinamika",
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
