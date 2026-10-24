module.exports = [
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
