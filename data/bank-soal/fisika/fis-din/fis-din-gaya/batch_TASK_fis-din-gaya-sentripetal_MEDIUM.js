module.exports = [
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
