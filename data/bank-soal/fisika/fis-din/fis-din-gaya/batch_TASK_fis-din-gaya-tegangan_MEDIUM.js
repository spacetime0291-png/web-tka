module.exports = [
  {
    "id": "fis-din-gaya-tegangan-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Dua beban bermassa $m_1 = 3\\text{ kg}$ dan $m_2 = 2\\text{ kg}$ dihubungkan dengan seutas tali tak bermassa melalui sebuah katrol licin ideal (massa dan gesekan katrol diabaikan). Ketika kedua benda dilepas dan bergerak bebas, percepatan gravitasi bumi $g = 10\\text{ m/s}^2$. Besar tegangan tali penghubung selama benda bergerak adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20\\text{ N}$",
      "$24\\text{ N}$",
      "$25\\text{ N}$",
      "$30\\text{ N}$",
      "$50\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada pesawat Atwood, tegangan tali selama bergerak bernilai: $T = \\frac{2 m_1 m_2}{m_1 + m_2} g$. Nilai tegangan ini berada di antara berat beban ringan ($m_2 g = 20\\text{ N}$) dan beban berat ($m_1 g = 30\\text{ N}$).",
      "steps": "1. Tentukan percepatan sistem:\\n$$a = \\frac{m_1 - m_2}{m_1 + m_2} g = \\frac{3 - 2}{3 + 2} \\times 10 = \\frac{1}{5} \\times 10 = 2\\text{ m/s}^2$$\\n2. Tinjau balok $m_2$ yang bergerak naik ($a = 2\\text{ m/s}^2$ ke atas):\\n$$\\sum F_y = T - m_2 g = m_2 a$$\\n$$T = m_2(g + a) = 2(10 + 2) = 2 \\times 12 = 24\\text{ N}$$\\n(Atau tinjau $m_1$ yang turun: $m_1 g - T = m_1 a \\implies T = 3(10 - 2) = 24\\text{ N}$).\\nJadi, besar tegangan tali adalah $24\\text{ N}$.",
      "pitfalls": "Kerap mengira tegangan tali adalah rata-rata aritmetika dari berat kedua beban ($\\frac{30 + 20}{2} = 25\\text{ N}$) atau sama dengan selisih beratnya ($10\\text{ N}$). Tegangan tali dinamika diturunkan dari Hukum II Newton."
    }
  },
  {
    "id": "fis-din-gaya-tegangan-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Balok $A$ ($m_A = 3\\text{ kg}$) diletakkan di atas meja horizontal kasar dengan koefisien gesekan kinetis $\\mu_k = 0,20$. Balok $A$ dihubungkan oleh seutas tali ringan melalui katrol licin di tepi meja ke balok $B$ ($m_B = 2\\text{ kg}$) yang tergantung bebas. Jika sistem dilepas dari keadaan diam dan $g = 10\\text{ m/s}^2$, percepatan sistem $a$ dan besar tegangan tali $T$ berturut-turut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$a = 2,8\\text{ m/s}^2$ dan $T = 14,4\\text{ N}$",
      "$a = 2,8\\text{ m/s}^2$ dan $T = 20,0\\text{ N}$",
      "$a = 4,0\\text{ m/s}^2$ dan $T = 12,0\\text{ N}$",
      "$a = 2,0\\text{ m/s}^2$ dan $T = 16,0\\text{ N}$",
      "$a = 3,5\\text{ m/s}^2$ dan $T = 10,5\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gaya penggerak sistem berasal dari berat balok gantung $B$ ($W_B = m_B g$), sedangkan gaya hambat berasal dari gesekan kinetis pada balok $A$ ($f_k = \\mu_k m_A g$). Percepatan: $a = \\frac{W_B - f_k}{m_A + m_B}$.",
      "steps": "1. Hitung gaya gesek kinetis pada balok $A$:\\n$$f_k = \\mu_k m_A g = 0,20 \\times 3 \\times 10 = 6\\text{ N}$$\\n2. Terapkan Hukum II Newton untuk sistem:\\n$$a = \\frac{m_B g - f_k}{m_A + m_B} = \\frac{(2)(10) - 6}{3 + 2} = \\frac{20 - 6}{5} = \\frac{14}{5} = 2,8\\text{ m/s}^2$$\\n3. Cari tegangan tali dari diagram balok gantung $B$:\\n$$\\sum F_{y,B} = m_B g - T = m_B a$$\\n$$T = m_B (g - a) = 2(10 - 2,8) = 2 \\times 7,2 = 14,4\\text{ N}$$\\nJadi, $a = 2,8\\text{ m/s}^2$ dan $T = 14,4\\text{ N}$.",
      "pitfalls": "Kekeliruan terjadi jika menganggap tegangan tali tepat sama dengan berat beban gantung ($20\\text{ N}$). Karena beban $B$ bergerak dipercepat ke bawah, tegangan tali pasti lebih kecil dari berat beban $B$ ($T < m_B g$)."
    }
  },
  {
    "id": "fis-din-gaya-tegangan-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah beban bermassa $m = 6\\text{ kg}$ digantung dalam kondisi setimbang pada simpul pertemuan tiga utas tali. Tali 1 terikat horizontal ke dinding di sebelah kiri, sedangkan tali 2 terikat ke langit-langit membentuk sudut kemiringan $\\theta = 53^\\circ$ terhadap arah horizontal (diketahui $\\sin 53^\\circ = 0,8$ dan $\\cos 53^\\circ = 0,6$). Jika $g = 10\\text{ m/s}^2$, besar tegangan tali 1 ($T_1$) dan tali 2 ($T_2$) berturut-turut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$T_1 = 45\\text{ N}$ dan $T_2 = 75\\text{ N}$",
      "$T_1 = 75\\text{ N}$ dan $T_2 = 45\\text{ N}$",
      "$T_1 = 60\\text{ N}$ dan $T_2 = 100\\text{ N}$",
      "$T_1 = 36\\text{ N}$ dan $T_2 = 48\\text{ N}$",
      "$T_1 = 45\\text{ N}$ dan $T_2 = 60\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Syarat kesetimbangan statis partikel pada simpul tali: $\\sum F_x = 0$ dan $\\sum F_y = 0$. Uraikan tegangan tali miring $T_2$ ke dalam komponen horizontal ($T_2 \\cos 53^\\circ$) dan vertikal ($T_2 \\sin 53^\\circ$).",
      "steps": "1. Berat beban yang digantung:\\n$$W = m g = 6 \\times 10 = 60\\text{ N}$$\\n2. Tinjau kesetimbangan sumbu vertikal ($y$) pada simpul:\\n$$\\sum F_y = T_2 \\sin 53^\\circ - W = 0$$\\n$$T_2 (0,8) = 60 \\implies T_2 = \\frac{60}{0,8} = 75\\text{ N}$$\\n3. Tinjau kesetimbangan sumbu horizontal ($x$):\\n$$\\sum F_x = T_2 \\cos 53^\\circ - T_1 = 0$$\\n$$T_1 = T_2 \\cos 53^\\circ = 75 \\times 0,6 = 45\\text{ N}$$\\nJadi, $T_1 = 45\\text{ N}$ dan $T_2 = 75\\text{ N}$.",
      "pitfalls": "Kerap tertukar menguraikan trigonometri sin dan cos, di mana $\\sin 53^\\circ$ adalah proyeksi sumbu vertikal dan $\\cos 53^\\circ$ adalah proyeksi sumbu horizontal."
    }
  },
  {
    "id": "fis-din-gaya-tegangan-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Tiga buah balok $A$ ($m_A = 1\\text{ kg}$), $B$ ($m_B = 2\\text{ kg}$), dan $C$ ($m_C = 3\\text{ kg}$) terletak berurutan pada lantai horizontal licin. Balok $A$ dan $B$ dihubungkan oleh tali 1, sedangkan balok $B$ dan $C$ dihubungkan oleh tali 2. Balok $C$ kemudian ditarik oleh gaya horizontal konstan $F = 24\\text{ N}$ menjauhi balok yang lain. Perbandingan besar tegangan tali 1 terhadap tali 2 ($T_1 : T_2$) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 2$",
      "$1 : 3$",
      "$2 : 3$",
      "$1 : 5$",
      "$1 : 6$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada sistem rangkaian balok mendatar, percepatan seluruh benda bernilai sama ($a$). Setiap tali hanya bertanggung jawab menarik massa total balok yang berada di belakangnya: $T_k = m_{\\text{belakang}} \\times a$.",
      "steps": "1. Hitung percepatan bersama ketiga balok:\\n$$a = \\frac{F}{m_A + m_B + m_C} = \\frac{24}{1 + 2 + 3} = \\frac{24}{6} = 4\\text{ m/s}^2$$\\n2. Tentukan besar tegangan tali 1 (hanya menarik balok $A$):\\n$$T_1 = m_A a = 1 \\times 4 = 4\\text{ N}$$\\n3. Tentukan besar tegangan tali 2 (menarik balok $A$ dan balok $B$):\\n$$T_2 = (m_A + m_B) a = (1 + 2) \\times 4 = 3 \\times 4 = 12\\text{ N}$$\\n4. Hitung perbandingan $T_1 : T_2$:\\n$$\\frac{T_1}{T_2} = \\frac{4}{12} = \\frac{1}{3}$$\\nJadi, perbandingan tegangan tali adalah $1 : 3$.",
      "pitfalls": "Kerap salah mengasumsikan tali 2 hanya menarik balok $B$ saja ($T_2 = m_B a = 8\\text{ N}$) sehingga mendapat perbandingan $1 : 2$. Tali 2 memikul beban gerak balok $A$ dan balok $B$ sekaligus."
    }
  },
  {
    "id": "fis-din-gaya-tegangan-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Balok $A$ ($m_A = 4\\text{ kg}$) diletakkan pada bidang miring licin dengan sudut kemiringan $\\theta = 30^\\circ$ terhadap bidang horizontal. Balok $A$ dihubungkan oleh seutas tali ringan melalui sebuah katrol licin di puncak bidang miring ke balok gantung $B$ ($m_B = 6\\text{ kg}$) yang tergantung bebas secara vertikal. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar percepatan gerak sistem balok tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ m/s}^2$",
      "$3\\text{ m/s}^2$",
      "$4\\text{ m/s}^2$",
      "$5\\text{ m/s}^2$",
      "$6\\text{ m/s}^2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gaya penggerak netto berasal dari selisih antara gaya berat balok gantung ($W_B = m_B g$) dan komponen gaya berat balok $A$ yang sejajar bidang miring ($W_{A,\\parallel} = m_A g \\sin\\theta$). Percepatan sistem: $a = \\frac{m_B g - m_A g \\sin\\theta}{m_A + m_B}$.",
      "steps": "1. Hitung gaya penarik dan gaya penahan:\\n- Gaya berat balok gantung $B$: $W_B = m_B g = 6 \\times 10 = 60\\text{ N}$.\\n- Komponen berat balok $A$ sejajar bidang miring: $W_{A,\\parallel} = m_A g \\sin 30^\\circ = 4 \\times 10 \\times 0,5 = 20\\text{ N}$.\\n2. Tentukan resultan gaya penggerak netto:\\n$$F_{\\text{net}} = W_B - W_{A,\\parallel} = 60 - 20 = 40\\text{ N}$$\\n3. Hitung percepatan sistem dengan membagi massa total:\\n$$a = \\frac{F_{\\text{net}}}{m_A + m_B} = \\frac{40}{4 + 6} = \\frac{40}{10} = 4\\text{ m/s}^2$$\\nJadi, besar percepatan gerak sistem balok adalah $4\\text{ m/s}^2$.",
      "pitfalls": "Kerap lupa mengalikan $\\sin 30^\\circ$ pada balok di bidang miring sehingga menghitung $F_{\\text{net}} = 60 - 40 = 20\\text{ N}$ yang menghasilkan $a = 2\\text{ m/s}^2$."
    }
  }
];
