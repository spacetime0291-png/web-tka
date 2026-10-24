module.exports = [
  {
    "id": "fis-din-gaya-gesek-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah balok bermassa $m = 5\\text{ kg}$ diletakkan pada permukaan lantai datar kasar dengan koefisien gesekan statis $\\mu_s = 0,4$ dan koefisien gesekan kinetis $\\mu_k = 0,2$. Balok ditarik dengan gaya horizontal $F = 15\\text{ N}$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar gaya gesekan yang bekerja pada balok adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ N}$",
      "$15\\text{ N}$",
      "$20\\text{ N}$",
      "$35\\text{ N}$",
      "$50\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gaya gesek statis ($f_s$) bersifat responsif terhadap gaya luar yang berusaha menggerakkan benda, dengan nilai maksimum $f_{s,\\text{maks}} = \\mu_s N$. Jika gaya penarik $F \\le f_{s,\\text{maks}}$, maka benda tetap diam dan besar gaya gesek statis tepat sama dengan gaya penarik ($f_s = F$).",
      "steps": "1. Hitung gaya normal balok di lantai datar horizontal:\\n$$N = m g = 5 \\times 10 = 50\\text{ N}$$\\n2. Hitung gaya gesek statis maksimum:\\n$$f_{s,\\text{maks}} = \\mu_s N = 0,4 \\times 50 = 20\\text{ N}$$\\n3. Bandingkan gaya penarik $F = 15\\text{ N}$ dengan $f_{s,\\text{maks}}$:\\nKarena $F = 15\\text{ N} < f_{s,\\text{maks}} = 20\\text{ N}$, balok belum bergerak (tetap diam).\\n4. Berdasarkan Hukum I Newton pada sumbu horizontal:\\n$$\\sum F_x = 0 \\implies F - f_s = 0 \\implies f_s = F = 15\\text{ N}$$\\nJadi, gaya gesek yang bekerja bernilai $15\\text{ N}$.",
      "pitfalls": "Banyak siswa langsung mengalikan $\\mu_s N = 20\\text{ N}$ atau $\\mu_k N = 10\\text{ N}$. Rumus $\\mu_s N$ hanya menghasilkan nilai AMBANG BATAS maksimum, bukan gaya gesek aktual saat benda diam."
    }
  },
  {
    "id": "fis-din-gaya-gesek-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Balok bermassa $m = 4\\text{ kg}$ berada di atas lantai mendatar kasar dengan koefisien gesekan kinetis $\\mu_k = 0,25$. Balok ditarik dengan gaya mendatar konstan $F = 22\\text{ N}$ sehingga balok bergerak meluncur di atas lantai. Jika $g = 10\\text{ m/s}^2$, besar gaya gesekan kinetis yang menghambat gerak balok adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ N}$",
      "$10\\text{ N}$",
      "$12\\text{ N}$",
      "$22\\text{ N}$",
      "$40\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Saat benda meluncur relatif terhadap permukaan bidang, gaya hambat yang bekerja adalah gaya gesekan kinetis dengan besar konstan: $f_k = \\mu_k N$, di mana $N$ adalah gaya normal tegak lurus bidang.",
      "steps": "1. Hitung gaya normal balok di lantai mendatar:\\n$$N = m g = 4 \\times 10 = 40\\text{ N}$$\\n2. Hitung gaya gesekan kinetis:\\n$$f_k = \\mu_k N = 0,25 \\times 40 = 10\\text{ N}$$\\nJadi, gaya gesekan kinetis penghambat adalah $10\\text{ N}$.",
      "pitfalls": "Jangan mengurangkan gaya penarik dengan gaya gesek untuk mencari $f_k$. Selisih $F - f_k$ adalah resultan gaya penyumbang percepatan ($F_{\\text{net}} = 12\\text{ N}$), sedangkan gaya geseknya sendiri tepat bernilai $10\\text{ N}$."
    }
  },
  {
    "id": "fis-din-gaya-gesek-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Perhatikan pernyataan-pernyataan mengenai gaya gesekan berikut:\\n1. Arah gaya gesekan selalu berlawanan dengan kecenderungan arah gerak relatif benda.\\n2. Koefisien gesekan statis umumnya lebih besar atau sama dengan koefisien gesekan kinetis ($\\mu_s \\ge \\mu_k$).\\n3. Gaya gesekan kinetis nilainya bergantung linier terhadap luas permukaan sentuh benda.\\nPernyataan yang BENAR adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1 dan 2 saja",
      "1 dan 3 saja",
      "2 dan 3 saja",
      "1 saja",
      "1, 2, dan 3"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hukum Amontons tentang gesekan menyatakan bahwa gaya gesekan berbanding lurus dengan gaya normal dan pada pendekatan makroskopis standar tidak bergantung pada luas bidang sentuh semu benda.",
      "steps": "1. Analisis pernyataan 1: Benar, gaya gesekan selalu melawan kecenderungan pergeseran relatif antara dua permukaan yang bersentuhan.\\n2. Analisis pernyataan 2: Benar, diperlukan gaya yang lebih besar untuk memulai pergerakan daripada mempertahankannya (ikatan mikroskopis adhesi saat diam lebih kuat), sehingga $\\mu_s \\ge \\mu_k$.\\n3. Analisis pernyataan 3: Salah, pada model gesekan Coulomb/Amontons, gaya gesek tidak bergantung pada luas permukaan bidang sentuh selama gaya normalnya tetap konstan.\\nSehingga pernyataan yang benar adalah 1 dan 2.",
      "pitfalls": "Kerap dianggap bahwa semakin lebar penampang balok, semakin besar gaya geseknya. Secara mikroskopis, luas kontak riil per satuan tekanan akan terdistribusi sebanding sehingga total gaya gesek tidak dipengaruhi luas semu permukaan."
    }
  },
  {
    "id": "fis-din-gaya-gesek-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah balok bermassa $m = 2\\text{ kg}$ diluncurkan di atas lantai kasar dengan kecepatan awal $v_0 = 8\\text{ m/s}$. Balok tersebut mengalami perlambatan akibat gesekan lantai hingga akhirnya berhenti setelah menempuh jarak $s = 16\\text{ m}$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, koefisien gesekan kinetis $\\mu_k$ antara balok dan lantai adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0,10$",
      "$0,20$",
      "$0,25$",
      "$0,40$",
      "$0,50$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Perpaduan kinematika gerak lurus berubah beraturan (GLBB diperlambat) dan dinamika Hukum II Newton: $v_t^2 = v_0^2 - 2 a s$ dan $\\sum F = f_k = m a$, dengan $f_k = \\mu_k m g$.",
      "steps": "1. Tentukan besar perlambatan $a$ dari persamaan GLBB:\\n$$v_t^2 = v_0^2 - 2 a s$$\\n$$0 = 8^2 - 2 a (16)$$\\n$$32 a = 64 \\implies a = 2\\text{ m/s}^2$$\\n2. Hubungkan perlambatan dengan gaya gesek kinetis:\\n$$\\sum F_x = f_k = m a$$\\n$$\\mu_k m g = m a \\implies \\mu_k = \\frac{a}{g}$$\\n3. Substitusi nilai percepatan:\\n$$\\mu_k = \\frac{2}{10} = 0,20$$\\nJadi, koefisien gesekan kinetis adalah $0,20$.",
      "pitfalls": "Perhatikan bahwa koefisien gesekan merupakan besaran tak berdimensi yang tidak bergantung pada massa benda yang meluncur."
    }
  },
  {
    "id": "fis-din-gaya-gesek-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah balok bermassa $m = 10\\text{ kg}$ diletakkan pada bidang miring kasar yang membentuk sudut kemiringan $\\theta = 37^\\circ$ terhadap horizontal (diketahui $\\sin 37^\\circ = 0,6$ dan $\\cos 37^\\circ = 0,8$). Koefisien gesekan statis antara balok dan bidang miring adalah $\\mu_s = 0,5$. Jika $g = 10\\text{ m/s}^2$, besar gaya gesekan statis maksimum yang mampu dikerjakan oleh bidang miring pada balok adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ N}$",
      "$40\\text{ N}$",
      "$50\\text{ N}$",
      "$60\\text{ N}$",
      "$80\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gaya gesek statis maksimum pada bidang miring ditentukan oleh gaya normal tegak lurus bidang: $f_{s,\\text{maks}} = \\mu_s N = \\mu_s m g \\cos\\theta$.",
      "steps": "1. Hitung gaya normal tegak lurus bidang miring:\\n$$N = m g \\cos 37^\\circ = 10 \\times 10 \\times 0,8 = 80\\text{ N}$$\\n2. Hitung gaya gesek statis maksimum:\\n$$f_{s,\\text{maks}} = \\mu_s N = 0,5 \\times 80 = 40\\text{ N}$$\\nJadi, gaya gesek statis maksimum adalah $40\\text{ N}$.",
      "pitfalls": "Jangan keliru menggunakan $m g \\sin\\theta$ untuk mencari gaya normal. Komponen yang tegak lurus bidang miring adalah $m g \\cos\\theta$, sedangkan $m g \\sin\\theta$ adalah komponen gaya luncur sejajar bidang."
    }
  }
];
