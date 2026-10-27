/**
 * Bank Soal TKA: Fisika (TKA) - Fluida
 * Bab Kecil: Fluida Dinamis (fis-flu-dinamis)
 * Sub-Bab: Persamaan Bernoulli (fis-flu-dinamis-bernoulli)
 * Slug: persamaan-bernoulli
 * Indikator: Kekekalan energi mekanik fluida mengalir (P + 0.5 * rho * v^2 + rho * g * h = konstan).
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-flu-dinamis-bernoulli";
  const subTopicSlug = "persamaan-bernoulli";
  const questions = [
  {
    "id": "fis-flu-dinamis-bernoulli-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-bernoulli",
    "category": "Persamaan Bernoulli",
    "difficulty": "mudah",
    "statement": "Persamaan Bernoulli pada aliran fluida ideal diturunkan langsung dari penerapan hukum dasar fisika, yaitu ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Hukum Kekekalan Energi Mekanik per satuan volume fluida",
      "Hukum Kekekalan Momentum Linier pada tumbukan fluida",
      "Hukum I Termodinamika untuk proses adiabatik tak reversibel",
      "Hukum Gravitasi Universal Newton antara molekul fluida",
      "Hukum Hooke pada elastisitas fluida termampatkan"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Persamaan Bernoulli:<br>$$P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{konstan}$$Persamaan ini merupakan perwujudan dari teorema usaha-energi dan Hukum Kekekalan Energi Mekanik yang diterapkan pada aliran fluida ideal per satuan volume, yang terdiri dari energi tekanan ($P$), energi kinetik per satuan volume ($\\frac{1}{2}\\rho v^2$), dan energi potensial gravitasi per satuan volume ($\\rho g h$).",
      "steps": "1. Tinjau suku-suku dalam Persamaan Bernoulli:<br>• $P$ merepresentasikan kerja tekanan fluida.<br>• $\\frac{1}{2}\\rho v^2$ adalah energi kinetik per satuan volume.<br>• $\\rho gh$ adalah energi potensial gravitasi per satuan volume.<br>2. Jumlah total ketiga besaran ini bernilai kekal sepanjang garis alir fluida ideal.<br>3. Pilihan yang tepat adalah opsi A.",
      "pitfalls": "Siswa terkadang salah mengira Persamaan Bernoulli diturunkan dari kekekalan momentum (padahal kekekalan massa menghasilkan persamaan kontinuitas, dan kekekalan energi menghasilkan persamaan Bernoulli)."
    },
    "subTopicSlug": "persamaan-bernoulli",
    "bab": "Fluida",
    "subBab": "Persamaan Bernoulli",
    "subTopic": "Persamaan Bernoulli",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Persamaan Bernoulli: $$P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{konstan}$$Persamaan ini merupakan perwujudan dari teorema usaha-energi dan Hukum Kekekalan Energi Mekanik yang diterapkan pada aliran fluida ideal per satuan volume, yang terdiri dari energi tekanan ($P$), energi kinetik per satuan volume ($\\frac{1}{2}\\rho v^2$), dan energi potensial gravitasi per satuan volume ($\\rho g h$)."
  },
  {
    "id": "fis-flu-dinamis-bernoulli-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-bernoulli",
    "category": "Persamaan Bernoulli",
    "difficulty": "mudah",
    "statement": "Air mengalir melalui pipa horizontal dengan luas penampang yang menyempit. Pada bagian pipa berpenampang lebar, tekanan air terukur $P_1 = 2{,}00 \\times 10^5\\text{ Pa}$ dan kelajuannya $v_1 = 2\\text{ m/s}$. Air kemudian memasuki bagian pipa sempit dengan kelajuan meningkat menjadi $v_2 = 6\\text{ m/s}$. Jika massa jenis air $\\rho = 1000\\text{ kg/m}^3$, besar tekanan air pada bagian pipa sempit ($P_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}68 \\times 10^5\\text{ Pa}$",
      "$1{,}84 \\times 10^5\\text{ Pa}$",
      "$2{,}00 \\times 10^5\\text{ Pa}$",
      "$2{,}16 \\times 10^5\\text{ Pa}$",
      "$2{,}32 \\times 10^5\\text{ Pa}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Untuk pipa horizontal ($h_1 = h_2$), suku energi potensial saling meniadakan, sehingga Persamaan Bernoulli menjadi:<br>$$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2 \\implies P_2 = P_1 + \\frac{1}{2}\\rho (v_1^2 - v_2^2)$$",
      "steps": "1. Masukkan besaran yang diketahui:<br>• $P_1 = 2{,}00 \\times 10^5\\text{ Pa} = 200.000\\text{ Pa}$<br>• $v_1 = 2\\text{ m/s} \\implies v_1^2 = 4\\text{ m}^2\\text{/s}^2$<br>• $v_2 = 6\\text{ m/s} \\implies v_2^2 = 36\\text{ m}^2\\text{/s}^2$<br>• $\\rho = 1000\\text{ kg/m}^3$<br>2. Hitung perubahan tekanan dinamis:<br>$$\\Delta P_{\\text{kinetik}} = \\frac{1}{2} \\times 1000 \\times (4 - 36) = 500 \\times (-32) = -16.000\\text{ Pa}$$<br>3. Hitung tekanan di penampang sempit ($P_2$):<br>$$P_2 = 200.000\\text{ Pa} - 16.000\\text{ Pa} = 184.000\\text{ Pa} = 1{,}84 \\times 10^5\\text{ Pa}$$",
      "pitfalls": "Terkecoh menjumlahkan perubahan energi kinetik ($200.000 + 16.000 = 2{,}16 \\times 10^5\\text{ Pa}$, opsi D). Menurut Efek Bernoulli, di tempat fluida mengalir lebih cepat, tekanannya justru menurun."
    },
    "subTopicSlug": "persamaan-bernoulli",
    "bab": "Fluida",
    "subBab": "Persamaan Bernoulli",
    "subTopic": "Persamaan Bernoulli",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Untuk pipa horizontal ($h_1 = h_2$), suku energi potensial saling meniadakan, sehingga Persamaan Bernoulli menjadi: $$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2 \\implies P_2 = P_1 + \\frac{1}{2}\\rho (v_1^2 - v_2^2)$$."
  },
  {
    "id": "fis-flu-dinamis-bernoulli-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-bernoulli",
    "category": "Persamaan Bernoulli",
    "difficulty": "mudah",
    "statement": "Sebuah tangki air terbuka yang luas memiliki lubang kebocoran kecil pada dinding sampingnya. Jarak permukaan air di dalam tangki ke lubang kebocoran adalah $h = 3{,}2\\text{ meter}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan semburan air yang pertama kali keluar dari lubang kebocoran tersebut menurut Teorema Torricelli adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$16\\text{ m/s}$",
      "$64\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Teorema Torricelli merupakan bentuk khusus Persamaan Bernoulli untuk tangki terbuka dengan luas penampang tangki jauh lebih besar daripada luas lubang kebocoran:<br>$$v = \\sqrt{2 \\cdot g \\cdot h}$$Di mana $h$ adalah kedalaman lubang kebocoran diukur dari permukaan bebas zat cair.",
      "steps": "1. Masukkan nilai yang diketahui:<br>• $g = 10\\text{ m/s}^2$<br>• $h = 3{,}2\\text{ m}$<br>2. Hitung kelajuan pancaran air:<br>$$v = \\sqrt{2 \\times 10\\text{ m/s}^2 \\times 3{,}2\\text{ m}} = \\sqrt{64} = 8\\text{ m/s}$$",
      "pitfalls": "Lupa menarik akar kuadrat dari hasil perkalian $2gh = 64$ sehingga memilih opsi $64\\text{ m/s}$ (opsi E), atau salah mengukur kedalaman $h$ dari dasar tangki."
    },
    "subTopicSlug": "persamaan-bernoulli",
    "bab": "Fluida",
    "subBab": "Persamaan Bernoulli",
    "subTopic": "Persamaan Bernoulli",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Teorema Torricelli merupakan bentuk khusus Persamaan Bernoulli untuk tangki terbuka dengan luas penampang tangki jauh lebih besar daripada luas lubang kebocoran: $$v = \\sqrt{2 \\cdot g \\cdot h}$$Di mana $h$ adalah kedalaman lubang kebocoran diukur dari permukaan bebas zat cair."
  },
  {
    "id": "fis-flu-dinamis-bernoulli-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-bernoulli",
    "category": "Persamaan Bernoulli",
    "difficulty": "mudah",
    "statement": "Sebuah tangki air diletakkan di atas tanah mendatar. Pada dinding tangki terdapat sebuah lubang kebocoran kecil yang berada pada kedalaman $h = 1{,}8\\text{ meter}$ di bawah permukaan air. Ketinggian posisi lubang tersebut dari permukaan tanah adalah $y = 3{,}2\\text{ meter}$. Jika gesekan udara diabaikan dan $g = 10\\text{ m/s}^2$, jarak jangkauan mendatar jatuhnya air di tanah ($x$) diukur dari dasar dinding tangki adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}4\\text{ meter}$",
      "$3{,}6\\text{ meter}$",
      "$4{,}8\\text{ meter}$",
      "$5{,}0\\text{ meter}$",
      "$9{,}6\\text{ meter}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Jarak jangkauan mendatar semburan air tangki Torricelli dirumuskan dari perpaduan kelajuan horisontal $v = \\sqrt{2gh}$ dan waktu jatuh bebas vertikal $t = \\sqrt{\\frac{2y}{g}}$:<br>$$x = v \\cdot t = \\sqrt{2gh} \\cdot \\sqrt{\\frac{2y}{g}} = 2\\sqrt{h \\cdot y}$$",
      "steps": "1. Identifikasi besaran:<br>• Kedalaman lubang dari permukaan air: $h = 1{,}8\\text{ m}$<br>• Ketinggian lubang dari tanah: $y = 3{,}2\\text{ m}$<br>2. Hitung jarak jangkauan horizontal:<br>$$x = 2\\sqrt{1{,}8 \\times 3{,}2} = 2\\sqrt{5{,}76} = 2 \\times 2{,}4\\text{ m} = 4{,}8\\text{ meter}$$",
      "pitfalls": "Lupa mengalikan faktor 2 di depan tanda akar sehingga hanya mendapatkan $\\sqrt{5{,}76} = 2{,}4\\text{ m}$ (opsi A)."
    },
    "subTopicSlug": "persamaan-bernoulli",
    "bab": "Fluida",
    "subBab": "Persamaan Bernoulli",
    "subTopic": "Persamaan Bernoulli",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Jarak jangkauan mendatar semburan air tangki Torricelli dirumuskan dari perpaduan kelajuan horisontal $v = \\sqrt{2gh}$ dan waktu jatuh bebas vertikal $t = \\sqrt{\\frac{2y}{g}}$: $$x = v \\cdot t = \\sqrt{2gh} \\cdot \\sqrt{\\frac{2y}{g}} = 2\\sqrt{h \\cdot y}$$."
  },
  {
    "id": "fis-flu-dinamis-bernoulli-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-bernoulli",
    "category": "Persamaan Bernoulli",
    "difficulty": "mudah",
    "statement": "Air bersih dipompa dari lantai satu ke lantai dua gedung melalui pipa tegak vertikal yang memiliki luas penampang seragam. Ketinggian lantai dua adalah $h = 4\\text{ meter}$ di atas lantai satu. Jika tekanan air di lantai satu adalah $P_1 = 1{,}50 \\times 10^5\\text{ Pa}$, massa jenis air $\\rho = 1000\\text{ kg/m}^3$, dan $g = 10\\text{ m/s}^2$, besar tekanan air saat mencapai lantai dua ($P_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}40 \\times 10^5\\text{ Pa}$",
      "$1{,}10 \\times 10^5\\text{ Pa}$",
      "$1{,}50 \\times 10^5\\text{ Pa}$",
      "$1{,}90 \\times 10^5\\text{ Pa}$",
      "$2{,}10 \\times 10^5\\text{ Pa}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Karena luas penampang pipa seragam ($A_1 = A_2$), menurut persamaan kontinuitas kelajuan air di lantai satu dan lantai dua sama besar ($v_1 = v_2$). Persamaan Bernoulli menjadi:<br>$$P_1 + \\rho g h_1 = P_2 + \\rho g h_2 \\implies P_2 = P_1 - \\rho g (h_2 - h_1)$$",
      "steps": "1. Hitung penurunan tekanan akibat kenaikan elevasi potensial:<br>$$\\Delta P = \\rho \\cdot g \\cdot h = 1000\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 4\\text{ m} = 40.000\\text{ Pa} = 0{,}40 \\times 10^5\\text{ Pa}$$<br>2. Hitung tekanan di lantai dua:<br>$$P_2 = 1{,}50 \\times 10^5\\text{ Pa} - 0{,}40 \\times 10^5\\text{ Pa} = 1{,}10 \\times 10^5\\text{ Pa}$$",
      "pitfalls": "Terkecoh menjumlahkan tekanan $\\rho gh$ sehingga menghasilkan $1{,}90 \\times 10^5\\text{ Pa}$ (opsi D). Seiring bertambahnya ketinggian (elevasi), tekanan fluida akan menurun."
    },
    "subTopicSlug": "persamaan-bernoulli",
    "bab": "Fluida",
    "subBab": "Persamaan Bernoulli",
    "subTopic": "Persamaan Bernoulli",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Karena luas penampang pipa seragam ($A_1 = A_2$), menurut persamaan kontinuitas kelajuan air di lantai satu dan lantai dua sama besar ($v_1 = v_2$). Persamaan Bernoulli menjadi: $$P_1 + \\rho g h_1 = P_2 + \\rho g h_2 \\implies P_2 = P_1 - \\rho g (h_2 - h_1)$$. **Tips:** Terkecoh menjumlahkan tekanan $\\rho gh$ sehingga menghasilkan $1{,}90 \\times 10^5\\text{ Pa}$ ()."
  },
  {
    "id": "fis-flu-dinamis-bernoulli-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-bernoulli",
    "category": "Persamaan Bernoulli",
    "difficulty": "sedang",
    "statement": "Sebuah pipa saluran air menanjak dari lantai dasar gedung ($h_1 = 0$) ke lantai dua yang berada pada ketinggian $h_2 = 5\\text{ meter}$. Luas penampang pipa di lantai dasar adalah $A_1 = 50\\text{ cm}^2$, kemudian menyempit menjadi $A_2 = 25\\text{ cm}^2$ di lantai dua. Jika air dialirkan dengan kelajuan $v_1 = 2\\text{ m/s}$ dan tekanan $P_1 = 2{,}00 \\times 10^5\\text{ Pa}$ di lantai dasar, massa jenis air $\\rho = 1000\\text{ kg/m}^3$, dan $g = 10\\text{ m/s}^2$, besar tekanan air saat mencapai lantai dua ($P_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}24 \\times 10^5\\text{ Pa}$",
      "$1{,}38 \\times 10^5\\text{ Pa}$",
      "$1{,}44 \\times 10^5\\text{ Pa}$",
      "$1{,}56 \\times 10^5\\text{ Pa}$",
      "$1{,}62 \\times 10^5\\text{ Pa}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Penerapan Persamaan Bernoulli lengkap yang melibatkan perubahan kelajuan sekaligus perubahan elevasi ketinggian:<br>$$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2$$Kelajuan $v_2$ diperoleh melalui persamaan kontinuitas $A_1 v_1 = A_2 v_2$.",
      "steps": "1. Hitung kelajuan di lantai dua ($v_2$):<br>$$v_2 = v_1 \\cdot \\frac{A_1}{A_2} = 2\\text{ m/s} \\times \\frac{50\\text{ cm}^2}{25\\text{ cm}^2} = 4\\text{ m/s}$$<br>2. Hitung suku-suku energi di lantai dasar ($h_1 = 0$):<br>$$E_1 = P_1 + \\frac{1}{2}\\rho v_1^2 = 200.000\\text{ Pa} + \\frac{1}{2}(1000)(2^2) = 200.000 + 2.000 = 202.000\\text{ Pa}$$<br>3. Hitung suku energi kinetik dan potensial di lantai dua ($h_2 = 5\\text{ m}$):<br>$$\\frac{1}{2}\\rho v_2^2 + \\rho g h_2 = \\frac{1}{2}(1000)(4^2) + (1000)(10)(5) = 8.000 + 50.000 = 58.000\\text{ Pa}$$<br>4. Hitung tekanan $P_2$:<br>$$P_2 = 202.000\\text{ Pa} - 58.000\\text{ Pa} = 144.000\\text{ Pa} = 1{,}44 \\times 10^5\\text{ Pa}$$",
      "pitfalls": "Siswa sering lupa memperhitungkan salah satu efek, misalnya hanya memperhitungkan penurunan akibat ketinggian ($50.000\\text{ Pa}$) dan lupa memperhitungkan penurunan tekanan akibat peningkatan kelajuan ($6.000\\text{ Pa}$)."
    },
    "subTopicSlug": "persamaan-bernoulli",
    "bab": "Fluida",
    "subBab": "Persamaan Bernoulli",
    "subTopic": "Persamaan Bernoulli",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Penerapan Persamaan Bernoulli lengkap yang melibatkan perubahan kelajuan sekaligus perubahan elevasi ketinggian: $$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2$$Kelajuan $v_2$ diperoleh melalui persamaan kontinuitas $A_1 v_1 = A_2 v_2$."
  },
  {
    "id": "fis-flu-dinamis-bernoulli-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-bernoulli",
    "category": "Persamaan Bernoulli",
    "difficulty": "sedang",
    "statement": "Sebuah venturimeter horizontal tanpa manometer digunakan untuk mengukur debit aliran air (massa jenis $\\rho = 1000\\text{ kg/m}^3$). Luas penampang pipa utama adalah $A_1 = 12\\text{ cm}^2$ dan luas penampang leher adalah $A_2 = 6\\text{ cm}^2$. Ketika air mengalir, selisih ketinggian permukaan air pada kedua pipa vertikal (piezometer) teramati sebesar $h = 15\\text{ cm}$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar kelajuan aliran air pada pipa utama ($v_1$) dan debit alirannya ($Q$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}5\\text{ m/s}$ dan $0{,}6\\text{ liter/s}$",
      "$1{,}0\\text{ m/s}$ dan $1{,}2\\text{ liter/s}$",
      "$1{,}0\\text{ m/s}$ dan $2{,}4\\text{ liter/s}$",
      "$2{,}0\\text{ m/s}$ dan $1{,}2\\text{ liter/s}$",
      "$2{,}0\\text{ m/s}$ dan $2{,}4\\text{ liter/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada venturimeter tanpa manometer, selisih tekanan diukur langsung dari perbedaan tinggi kolom air pada pipa vertikal: $\\Delta P = \\rho g h$. Dikombinasikan dengan Persamaan Bernoulli dan Kontinuitas:<br>$$v_1 = \\sqrt{\\frac{2gh}{\\left(\\frac{A_1}{A_2}\\right)^2 - 1}}$$<br>Dan debit aliran dihitung dengan $Q = A_1 \\cdot v_1$.",
      "steps": "1. Tentukan perbandingan luas penampang: $\\frac{A_1}{A_2} = \\frac{12}{6} = 2$<br>2. Konversikan selisih tinggi: $h = 15\\text{ cm} = 0{,}15\\text{ m}$<br>3. Hitung kelajuan $v_1$:<br>$$v_1 = \\sqrt{\\frac{2 \\times 10\\text{ m/s}^2 \\times 0{,}15\\text{ m}}{2^2 - 1}} = \\sqrt{\\frac{3}{4 - 1}} = \\sqrt{\\frac{3}{3}} = 1{,}0\\text{ m/s}$$<br>4. Hitung debit aliran air:<br>$$Q = A_1 \\cdot v_1 = (12 \\times 10^{-4}\\text{ m}^2) \\times 1{,}0\\text{ m/s} = 1{,}2 \\times 10^{-3}\\text{ m}^3\\text{/s} = 1{,}2\\text{ liter/s}$$",
      "pitfalls": "Terkecoh menggunakan luas leher $A_2$ saat menghitung $v_1$, atau lupa mengonversi luas penampang ke meter persegi saat mencari debit."
    },
    "subTopicSlug": "persamaan-bernoulli",
    "bab": "Fluida",
    "subBab": "Persamaan Bernoulli",
    "subTopic": "Persamaan Bernoulli",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Pada venturimeter tanpa manometer, selisih tekanan diukur langsung dari perbedaan tinggi kolom air pada pipa vertikal: $\\Delta P = \\rho g h$. Dikombinasikan dengan Persamaan Bernoulli dan Kontinuitas: $$v_1 = \\sqrt{\\frac{2gh}{\\left(\\frac{A_1}{A_2}\\right)^2 - 1}}$$ Dan debit aliran dihitung dengan $Q = A_1 \\cdot v_1$."
  },
  {
    "id": "fis-flu-dinamis-bernoulli-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-bernoulli",
    "category": "Persamaan Bernoulli",
    "difficulty": "sedang",
    "statement": "Sebuah tangki silinder tertutup berisi air memiliki gas bertekanan tinggi di atas permukaan air sebesar $P = 2{,}50 \\times 10^5\\text{ Pa}$. Pada dinding tangki terdapat lubang kecil yang bocor ke udara luar (tekanan atmosfer $P_0 = 1{,}00 \\times 10^5\\text{ Pa}$) pada posisi kedalaman $h = 5\\text{ meter}$ di bawah permukaan air. Jika massa jenis air $\\rho = 1000\\text{ kg/m}^3$ dan $g = 10\\text{ m/s}^2$, kelajuan semburan air yang keluar dari lubang kebocoran tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$30\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada tangki tertutup bertekanan, Teorema Torricelli dimodifikasi dengan memasukkan selisih tekanan gas dalam tangki terhadap atmosfer luar:<br>$$P + \\rho g h = P_0 + \\frac{1}{2}\\rho v^2 \\implies v = \\sqrt{\\frac{2(P - P_0)}{\\rho} + 2gh}$$",
      "steps": "1. Hitung kontribusi selisih tekanan gas:<br>$$\\frac{2(P - P_0)}{\\rho} = \\frac{2(250.000\\text{ Pa} - 100.000\\text{ Pa})}{1000\\text{ kg/m}^3} = \\frac{300.000}{1000} = 300\\text{ m}^2\\text{/s}^2$$<br>2. Hitung kontribusi potensial hidrostatis:<br>$$2gh = 2 \\times 10\\text{ m/s}^2 \\times 5\\text{ m} = 100\\text{ m}^2\\text{/s}^2$$<br>3. Hitung kelajuan semburan air:<br>$$v = \\sqrt{300 + 100} = \\sqrt{400} = 20\\text{ m/s}$$",
      "pitfalls": "Siswa sering mengabaikan tekanan gas terkurung dan hanya menggunakan rumus Torricelli biasa $v = \\sqrt{2gh} = \\sqrt{100} = 10\\text{ m/s}$ (opsi A)."
    },
    "subTopicSlug": "persamaan-bernoulli",
    "bab": "Fluida",
    "subBab": "Persamaan Bernoulli",
    "subTopic": "Persamaan Bernoulli",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Pada tangki tertutup bertekanan, Teorema Torricelli dimodifikasi dengan memasukkan selisih tekanan gas dalam tangki terhadap atmosfer luar: $$P + \\rho g h = P_0 + \\frac{1}{2}\\rho v^2 \\implies v = \\sqrt{\\frac{2(P - P_0)}{\\rho} + 2gh}$$."
  },
  {
    "id": "fis-flu-dinamis-bernoulli-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-bernoulli",
    "category": "Persamaan Bernoulli",
    "difficulty": "sedang",
    "statement": "Saat terjadi badai angin kencang, udara berhembus mendatar di atas atap rumah yang memiliki luas penampang $A = 80\\text{ m}^2$ dengan kelajuan konstan $v = 40\\text{ m/s}$. Udara di dalam ruangan rumah berada dalam kondisi tenang dan tertutup rapat. Jika massa jenis udara di sekitar rumah adalah $\\rho_{\\text{udara}} = 1{,}25\\text{ kg/m}^3$, besar gaya angkat ke atas total yang bekerja pada atap rumah tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4 \\times 10^4\\text{ N}$",
      "$6 \\times 10^4\\text{ N}$",
      "$8 \\times 10^4\\text{ N}$",
      "$1{,}0 \\times 10^5\\text{ N}$",
      "$1{,}6 \\times 10^5\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Berdasarkan prinsip Bernoulli, kelajuan udara yang tinggi di atas atap menghasilkan penurunan tekanan statis dibanding udara di dalam rumah:<br>$$P_{\\text{bawah}} - P_{\\text{atas}} = \\Delta P = \\frac{1}{2}\\rho_{\\text{udara}} \\cdot v^2$$Gaya angkat total pada atap dirumuskan dengan:<br>$$F_{\\text{angkat}} = \\Delta P \\cdot A = \\left(\\frac{1}{2}\\rho_{\\text{udara}} \\cdot v^2\\right) \\cdot A$$",
      "steps": "1. Hitung selisih tekanan udara antara dalam dan luar rumah:<br>$$\\Delta P = \\frac{1}{2} \\times 1{,}25\\text{ kg/m}^3 \\times (40\\text{ m/s})^2 = 0{,}625 \\times 1600 = 1000\\text{ N/m}^2$$<br>2. Hitung gaya angkat total pada atap seluas $80\\text{ m}^2$:<br>$$F_{\\text{angkat}} = 1000\\text{ N/m}^2 \\times 80\\text{ m}^2 = 80.000\\text{ N} = 8 \\times 10^4\\text{ N}$$",
      "pitfalls": "Lupa mengalikan dengan faktor $\\frac{1}{2}$ pada energi kinetik udara yang menyebabkan nilai gaya menjadi dua kali lipat lebih besar ($1{,}6 \\times 10^5\\text{ N}$, opsi E)."
    },
    "subTopicSlug": "persamaan-bernoulli",
    "bab": "Fluida",
    "subBab": "Persamaan Bernoulli",
    "subTopic": "Persamaan Bernoulli",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Berdasarkan prinsip Bernoulli, kelajuan udara yang tinggi di atas atap menghasilkan penurunan tekanan statis dibanding udara di dalam rumah: $$P_{\\text{bawah}} - P_{\\text{atas}} = \\Delta P = \\frac{1}{2}\\rho_{\\text{udara}} \\cdot v^2$$Gaya angkat total pada atap dirumuskan dengan: $$F_{\\text{angkat}} = \\Delta P \\cdot A = \\left(\\frac{1}{2}\\rho_{\\text{udara}} \\cdot v^2\\right) \\cdot A$$."
  },
  {
    "id": "fis-flu-dinamis-bernoulli-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-bernoulli",
    "category": "Persamaan Bernoulli",
    "difficulty": "sedang",
    "statement": "Sebuah pipa sifon digunakan untuk mengalirkan air (massa jenis $\\rho = 1000\\text{ kg/m}^3$) dari sebuah tangki terbuka. Titik lengkungan tertinggi pipa sifon berada pada ketinggian $h_a = 1{,}5\\text{ meter}$ di atas permukaan air tangki, sedangkan ujung pipa pembuangan (outlet) berada pada ketinggian $h_b = 3{,}2\\text{ meter}$ di bawah permukaan air tangki. Jika tekanan atmosfer sekitar $P_0 = 1{,}00 \\times 10^5\\text{ Pa}$ dan $g = 10\\text{ m/s}^2$, besar tekanan mutlak air di titik puncak lengkungan pipa sifon saat air mengalir kontinu adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3{,}8 \\times 10^4\\text{ Pa}$",
      "$5{,}3 \\times 10^4\\text{ Pa}$",
      "$6{,}8 \\times 10^4\\text{ Pa}$",
      "$8{,}5 \\times 10^4\\text{ Pa}$",
      "$1{,}00 \\times 10^5\\text{ Pa}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "1) Kelajuan aliran di seluruh pipa berpenampang seragam ditentukan oleh perbedaan elevasi outlet dari permukaan air tangki:<br>$$v = \\sqrt{2 \\cdot g \\cdot h_b}$$<br>2) Tekanan di titik puncak sifon ($P_C$) dihitung dengan menerapkan persamaan Bernoulli antara permukaan air tangki ($P_0, v \\approx 0, y = 0$) dan titik puncak ($P_C, v, y = +h_a$):<br>$$P_0 = P_C + \\frac{1}{2}\\rho v^2 + \\rho g h_a \\implies P_C = P_0 - \\rho g h_a - \\frac{1}{2}\\rho v^2$$",
      "steps": "1. Hitung kelajuan aliran air di dalam sifon:<br>$$v = \\sqrt{2 \\times 10\\text{ m/s}^2 \\times 3{,}2\\text{ m}} = \\sqrt{64} = 8\\text{ m/s}$$<br>2. Hitung suku energi kinetik:<br>$$\\frac{1}{2}\\rho v^2 = \\frac{1}{2} \\times 1000 \\times (8)^2 = 32.000\\text{ Pa}$$<br>3. Hitung suku energi potensial di puncak sifon:<br>$$\\rho g h_a = 1000 \\times 10 \\times 1{,}5 = 15.000\\text{ Pa}$$<br>4. Hitung tekanan mutlak di puncak lengkungan sifon ($P_C$):<br>$$P_C = 100.000\\text{ Pa} - 15.000\\text{ Pa} - 32.000\\text{ Pa} = 53.000\\text{ Pa} = 5{,}3 \\times 10^4\\text{ Pa}$$",
      "pitfalls": "Siswa sering lupa memperhitungkan suku energi kinetik $\\frac{1}{2}\\rho v^2$ dan hanya mengurangkan tekanan hidrostatis $\\rho g h_a$ sehingga memperoleh $8{,}5 \\times 10^4\\text{ Pa}$ (opsi D)."
    },
    "subTopicSlug": "persamaan-bernoulli",
    "bab": "Fluida",
    "subBab": "Persamaan Bernoulli",
    "subTopic": "Persamaan Bernoulli",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "1) Kelajuan aliran di seluruh pipa berpenampang seragam ditentukan oleh perbedaan elevasi outlet dari permukaan air tangki: $$v = \\sqrt{2 \\cdot g \\cdot h_b}$$ 2) Tekanan di titik puncak sifon ($P_C$) dihitung dengan menerapkan persamaan Bernoulli antara permukaan air tangki ($P_0, v \\approx 0, y = 0$) dan titik puncak ($P_C, v, y = +h_a$): $$P_0 = P_C + \\frac{1}{2}\\rho v^2 + \\rho g h_a \\implies P_C = P_0 - \\rho g h_a - \\frac{1}{2}\\rho v^2$$."
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
