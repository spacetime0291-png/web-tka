/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lurus (fis-kin-gl)
 * Sub-Bab: Gerak Vertikal & Jatuh Bebas (fis-kin-gl-vertikal)
 * Slug: gerak-vertikal-jatuh-bebas
 * Indikator: Gerak jatuh bebas tanpa kecepatan awal, gerak vertikal ke atas, waktu puncak, dan kecepatan tumbuk tanah.
 * 
 * Total Butir Soal: 13 (Mudah: 6, Sedang: 7, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-gl-vertikal";
  const subTopicSlug = "gerak-vertikal-jatuh-bebas";
  const questions = [
  {
    "id": "fis-kin-gl-vertikal-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-vertikal",
    "category": "Gerak Vertikal & Jatuh Bebas",
    "difficulty": "mudah",
    "statement": "Sebuah buah kelapa terlepas dari tangkai pohonnya dan jatuh bebas dari ketinggian $h = 20\\text{ meter}$ di atas permukaan tanah. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$ dan hambatan udara diabaikan, waktu yang diperlukan buah kelapa untuk mencapai tanah dan kecepatannya saat menyentuh tanah berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ sekon}$ dan $20\\text{ m/s}$",
      "$2\\text{ sekon}$ dan $10\\text{ m/s}$",
      "$4\\text{ sekon}$ dan $20\\text{ m/s}$",
      "$1\\text{ sekon}$ dan $20\\text{ m/s}$",
      "$2\\text{ sekon}$ dan $40\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gerak Jatuh Bebas (GJB) adalah gerak lurus berubah beraturan vertikal ke bawah dengan kecepatan awal nol ($v_0 = 0$) dan percepatan $a = g$:<br>$$t = \\sqrt{\\frac{2h}{g}}$$<br>$$v_t = \\sqrt{2gh} = g \\cdot t$$",
      "steps": "1. Hitung waktu jatuh bebas:<br>$$t = \\sqrt{\\frac{2(20\\text{ m})}{10\\text{ m/s}^2}} = \\sqrt{4} = 2\\text{ sekon}$$<br>2. Hitung kecepatan saat menyentuh tanah:<br>$$v_t = g \\cdot t = 10\\text{ m/s}^2 \\times 2\\text{ s} = 20\\text{ m/s}$$",
      "pitfalls": "Lupa mengalikan angka 2 pada $\\frac{2h}{g}$ saat menghitung waktu jatuh sehingga mendapatkan $t = \\sqrt{20/10} = \\sqrt{2}$."
    },
    "subTopicSlug": "gerak-vertikal-jatuh-bebas",
    "bab": "Kinematika",
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-gl-vertikal-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-vertikal",
    "category": "Gerak Vertikal & Jatuh Bebas",
    "difficulty": "mudah",
    "statement": "Sebuah bola kasti dilemparkan vertikal ke atas dengan kecepatan awal $v_0 = 30\\text{ m/s}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, ketinggian maksimum yang dapat dicapai bola dan waktu tempuh untuk mencapai titik puncak tersebut berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$45\\text{ meter}$ dan $3\\text{ sekon}$",
      "$90\\text{ meter}$ dan $3\\text{ sekon}$",
      "$45\\text{ meter}$ dan $6\\text{ sekon}$",
      "$30\\text{ meter}$ dan $3\\text{ sekon}$",
      "$60\\text{ meter}$ dan $2\\text{ sekon}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada gerak vertikal ke atas, kecepatan di titik puncak adalah nol ($v_t = 0$):<br>$$t_{\\text{puncak}} = \\frac{v_0}{g}$$<br>$$h_{\\max} = \\frac{v_0^2}{2g}$$",
      "steps": "1. Hitung waktu mencapai puncak:<br>$$t_{\\text{puncak}} = \\frac{30\\text{ m/s}}{10\\text{ m/s}^2} = 3\\text{ sekon}$$<br>2. Hitung tinggi maksimum:<br>$$h_{\\max} = \\frac{(30\\text{ m/s})^2}{2(10\\text{ m/s}^2)} = \\frac{900}{20} = 45\\text{ meter}$$",
      "pitfalls": "Nilai $6\\text{ sekon}$ adalah waktu total bolak-balik di udara ($2 \\times t_{\\text{puncak}}$), bukan waktu mencapai titik puncak."
    },
    "subTopicSlug": "gerak-vertikal-jatuh-bebas",
    "bab": "Kinematika",
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-gl-vertikal-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-vertikal",
    "category": "Gerak Vertikal & Jatuh Bebas",
    "difficulty": "mudah",
    "statement": "Perbedaan mendasar antara Gerak Jatuh Bebas (GJB) dan Gerak Vertikal ke Bawah (GVB) terletak pada ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "GJB memiliki kecepatan awal sama dengan nol ($v_0 = 0$), sedangkan GVB memiliki kecepatan awal positif ($v_0 > 0$)",
      "GJB dipengaruhi percepatan gravitasi bumi sedangkan GVB tidak dipengaruhi gravitasi",
      "Percepatan pada GJB selalu lebih besar daripada percepatan pada GVB",
      "GJB hanya terjadi di ruang hampa sedangkan GVB hanya terjadi di udara terbuka",
      "Lintasan GJB berbentuk parabola sedangkan GVB berbentuk garis lurus"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Keduanya merupakan gerak lurus berubah beraturan dengan percepatan yang sama yaitu percepatan gravitasi bumi ($a = g$). Pembeda utamanya adalah kondisi awal: GJB dilepaskan tanpa kecepatan awal ($v_0 = 0$), sedangkan GVB dilemparkan ke bawah dengan kecepatan awal ($v_0 > 0$).",
      "steps": "Analisis pilihan:<br>• Opsi A: Tepat, membedakan secara spesifik nilai kecepatan awal $v_0$.<br>• Opsi B: Salah, keduanya dipengaruhi gravitasi.<br>• Opsi C: Salah, nilai percepatannya sama-sama $g$.<br>• Opsi D: Salah, bukan syarat ruang.<br>• Opsi E: Keduanya gerak lurus satu dimensi vertikal.",
      "pitfalls": "Terkadang siswa mengira gaya gravitasi pada gerak jatuh bebas berbeda dari gerak vertikal yang dilempar."
    },
    "subTopicSlug": "gerak-vertikal-jatuh-bebas",
    "bab": "Kinematika",
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-gl-vertikal-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-vertikal",
    "category": "Gerak Vertikal & Jatuh Bebas",
    "difficulty": "mudah",
    "statement": "Sebuah batu dilemparkan vertikal ke bawah dari balkon sebuah gedung dengan kecepatan awal $v_0 = 5\\text{ m/s}$. Jika batu tersebut membentur tanah setelah bergerak selama $2\\text{ sekon}$ dan $g = 10\\text{ m/s}^2$, ketinggian balkon tersebut dari permukaan tanah adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ meter}$",
      "$20\\text{ meter}$",
      "$25\\text{ meter}$",
      "$40\\text{ meter}$",
      "$15\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Persamaan perpindahan vertikal ke bawah (GVB) dengan kecepatan awal $v_0$ adalah:<br>$$h = v_0 t + \\frac{1}{2} g t^2$$",
      "steps": "1. Substitusikan $v_0 = 5\\text{ m/s}$, $t = 2\\text{ s}$, dan $g = 10\\text{ m/s}^2$:<br>$$h = (5\\text{ m/s})(2\\text{ s}) + \\frac{1}{2}(10\\text{ m/s}^2)(2\\text{ s})^2$$<br>$$h = 10 + \\frac{1}{2}(10)(4) = 10 + 20 = 30\\text{ meter}$$",
      "pitfalls": "Lupa menjumlahkan suku $v_0 t$ sehingga hanya menghitung $\\frac{1}{2} g t^2 = 20\\text{ m}$ (seolah-olah jatuh bebas tanpa kecepatan awal)."
    },
    "subTopicSlug": "gerak-vertikal-jatuh-bebas",
    "bab": "Kinematika",
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-gl-vertikal-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-vertikal",
    "category": "Gerak Vertikal & Jatuh Bebas",
    "difficulty": "mudah",
    "statement": "Dua benda padat dengan massa berbeda, yaitu bola besi ($m_1 = 5\\text{ kg}$) dan kelereng ($m_2 = 50\\text{ gram}$), dijatuhkan bebas secara bersamaan dari ketinggian yang sama di dalam tabung hampa udara. Pernyataan yang benar mengenai waktu jatuh kedua benda hingga menyentuh dasar tabung adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Kedua benda mencapai dasar pada saat yang bersamaan karena percepatan gravitasi tidak bergantung pada massa benda",
      "Bola besi mencapai dasar lebih cepat karena memiliki gaya berat yang lebih besar",
      "Kelereng mencapai dasar lebih cepat karena massanya lebih ringan sehingga lebih lincah",
      "Bola besi memerlukan waktu dua kali lipat lebih lama",
      "Kedua benda melayang di dalam tabung hampa dan tidak jatuh ke dasar"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Berdasarkan Hukum II Newton dan Hukum Gravitasi Universal: $F = m a \\implies m g = m a \\implies a = g$. Percepatan jatuh bebas tidak bergantung pada massa benda ($m$). Karena percepatan $g$ dan ketinggian awal $h$ identik, waktu tempuh $t = \\sqrt{\\frac{2h}{g}}$ kedua benda bernilai tepat sama.",
      "steps": "1. Tinjau persamaan waktu jatuh bebas: $t = \\sqrt{\\frac{2h}{g}}$.<br>2. Persamaan ini tidak memuat variabel massa ($m$).<br>3. Karena berada di ruang hampa (tanpa gesekan udara), kedua benda jatuh bebas murni dan tiba di dasar secara bersamaan.",
      "pitfalls": "Miskonsepsi intuitif Aristoteles yang menganggap benda yang lebih berat selalu jatuh lebih cepat daripada benda yang lebih ringan di ruang hampa."
    },
    "subTopicSlug": "gerak-vertikal-jatuh-bebas",
    "bab": "Kinematika",
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-gl-vertikal-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-vertikal",
    "category": "Gerak Vertikal & Jatuh Bebas",
    "difficulty": "sedang",
    "statement": "Bola $A$ dijatuhkan bebas dari puncak gedung bertingkat setinggi $H = 80\\text{ meter}$. Pada saat yang bersamaan, bola $B$ dilemparkan vertikal ke atas dari permukaan tanah tepat di bawah bola $A$ dengan kelajuan awal $v_0 = 40\\text{ m/s}$. Jika gesekan udara diabaikan dan $g = 10\\text{ m/s}^2$, waktu saat kedua bola bertumbukan di udara dan ketinggian posisi tabrakan dari permukaan tanah berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ sekon}$ dan $60\\text{ meter}$",
      "$2\\text{ sekon}$ dan $20\\text{ meter}$",
      "$1\\text{ sekon}$ dan $75\\text{ meter}$",
      "$4\\text{ sekon}$ dan $60\\text{ meter}$",
      "$2\\text{ sekon}$ dan $40\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kedua bola bergerak pada garis vertikal yang sama. Pertemuan terjadi saat ketinggian posisi kedua bola terhadap acuan tanah bernilai sama ($y_A(t) = y_B(t)$).",
      "steps": "1. Susun fungsi posisi kedua bola terhadap tanah:<br>$$y_A(t) = H - \\frac{1}{2} g t^2 = 80 - 5t^2$$<br>$$y_B(t) = v_0 t - \\frac{1}{2} g t^2 = 40t - 5t^2$$<br>2. Samakan kedudukan untuk mencari waktu tabrakan:<br>$$80 - 5t^2 = 40t - 5t^2 \\implies 40t = 80 \\implies t = 2\\text{ sekon}$$<br>3. Hitung ketinggian posisi tabrakan dari permukaan tanah:<br>$$y = y_B(2) = 40(2) - 5(2)^2 = 80 - 20 = 60\\text{ meter}$$",
      "pitfalls": "Nilai $20\\text{ meter}$ adalah jarak yang ditempuh bola $A$ dari puncak gedung, bukan ketinggian tempat tabrakan dari permukaan tanah."
    },
    "subTopicSlug": "gerak-vertikal-jatuh-bebas",
    "bab": "Kinematika",
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-gl-vertikal-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-vertikal",
    "category": "Gerak Vertikal & Jatuh Bebas",
    "difficulty": "sedang",
    "statement": "Sebuah balon udara bergerak naik vertikal ke atas dengan kecepatan konstan $v_b = 5\\text{ m/s}$. Ketika balon berada pada ketinggian $h = 30\\text{ meter}$ di atas tanah, sebuah karung pasir pemberat terlepas dari keranjang balon. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, waktu yang dibutuhkan karung pasir tersebut untuk membentur tanah sejak terlepas adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3\\text{ sekon}$",
      "$\\sqrt{6}\\text{ sekon}$",
      "$2\\text{ sekon}$",
      "$4\\text{ sekon}$",
      "$2{,}5\\text{ sekon}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Karena terlepas dari wahana yang sedang bergerak naik, karung pasir mewarisi kecepatan awal balon ke arah atas ($v_0 = +5\\text{ m/s}$). Gerak karung pasir merupakan gerak vertikal ke atas dari ketinggian $h = 30\\text{ m}$ sebelum akhirnya jatuh bebas ke tanah.",
      "steps": "1. Ambil acuan posisi tanah $y = 0$, dengan arah ke atas positif:<br>$$y_0 = +30\\text{ m},\\quad v_0 = +5\\text{ m/s},\\quad a = -g = -10\\text{ m/s}^2$$<br>2. Persamaan kedudukan saat menyentuh tanah ($y = 0$):<br>$$y(t) = y_0 + v_0 t - \\frac{1}{2} g t^2$$<br>$$0 = 30 + 5t - 5t^2$$<br>3. Bagi seluruh persamaan dengan $-5$:<br>$$t^2 - t - 6 = 0 \\implies (t - 3)(t + 2) = 0$$<br>Karena waktu tidak boleh negatif, maka $t = 3\\text{ sekon}$.",
      "pitfalls": "Mengabaikan kecepatan awal balon ($v_0 = 0$) sehingga menghitung waktu jatuh bebas biasa: $t = \\sqrt{2h/g} = \\sqrt{60/10} = \\sqrt{6}\\text{ s}$."
    },
    "subTopicSlug": "gerak-vertikal-jatuh-bebas",
    "bab": "Kinematika",
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-gl-vertikal-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-vertikal",
    "category": "Gerak Vertikal & Jatuh Bebas",
    "difficulty": "sedang",
    "statement": "Sebuah bongkahan es dijatuhkan bebas tanpa kecepatan awal dari tebing curam. Jika pada detik terakhir sebelum menyentuh dasar jurang bongkahan es tersebut menempuh jarak sejauh $35\\text{ meter}$, dan percepatan gravitasi $g = 10\\text{ m/s}^2$, tinggi tebing curam tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$80\\text{ meter}$",
      "$70\\text{ meter}$",
      "$125\\text{ meter}$",
      "$45\\text{ meter}$",
      "$100\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jarak yang ditempuh pada detik terakhir dari gerak jatuh bebas berdurasi total $t$ sekon adalah selisih jarak tempuh total dengan jarak tempuh hingga detik ke-$(t-1)$:<br>$$\\Delta h = h(t) - h(t-1) = \\frac{1}{2} g (2t - 1)$$",
      "steps": "1. Masukkan nilai $\\Delta h = 35\\text{ m}$ dan $g = 10\\text{ m/s}^2$:<br>$$35 = \\frac{1}{2}(10)(2t - 1) = 5(2t - 1)$$<br>$$2t - 1 = 7 \\implies 2t = 8 \\implies t = 4\\text{ sekon}$$<br>2. Hitung ketinggian total tebing:<br>$$H = \\frac{1}{2} g t^2 = \\frac{1}{2}(10)(4)^2 = 5 \\times 16 = 80\\text{ meter}$$",
      "pitfalls": "Mengalikan $35 \\times 2 = 70\\text{ m}$ tanpa menyelesaikan persamaan selang waktu kuadratik."
    },
    "subTopicSlug": "gerak-vertikal-jatuh-bebas",
    "bab": "Kinematika",
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-gl-vertikal-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-vertikal",
    "category": "Gerak Vertikal & Jatuh Bebas",
    "difficulty": "sedang",
    "statement": "Sebuah bola tenis dilemparkan vertikal ke atas dari tanah melintasi sebuah jendela setinggi $2\\text{ meter}$ di lantai dua gedung. Bola memerlukan waktu $\\Delta t = 0{,}2\\text{ sekon}$ untuk melintasi tinggi jendela dari bingkai bawah ke bingkai atas. Jika $g = 10\\text{ m/s}^2$, kelajuan bola saat tepat melewati bingkai bawah jendela adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$11\\text{ m/s}$",
      "$10\\text{ m/s}$",
      "$12\\text{ m/s}$",
      "$9\\text{ m/s}$",
      "$15\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gerak bola saat melintasi jendela dapat dianalisis sebagai gerak vertikal ke atas dengan kecepatan awal $v_b$ (di bingkai bawah) dan ketinggian $h = 2\\text{ m}$ dalam selang waktu $\\Delta t = 0{,}2\\text{ s}$:<br>$$h = v_b \\Delta t - \\frac{1}{2} g (\\Delta t)^2$$",
      "steps": "1. Substitusikan nilai $h = 2\\text{ m}$, $\\Delta t = 0{,}2\\text{ s}$, dan $g = 10\\text{ m/s}^2$:<br>$$2 = v_b(0{,}2) - \\frac{1}{2}(10)(0{,}2)^2$$<br>$$2 = 0{,}2 v_b - 5(0{,}04) = 0{,}2 v_b - 0{,}2$$<br>2. Selesaikan nilai $v_b$:<br>$$0{,}2 v_b = 2 + 0{,}2 = 2{,}2$$<br>$$v_b = \\frac{2{,}2}{0{,}2} = 11\\text{ m/s}$$",
      "pitfalls": "Lupa mengurangkan perlambatan gravitasi $\\frac{1}{2} g t^2$ dan hanya menghitung kecepatan rata-rata $2 / 0{,}2 = 10\\text{ m/s}$."
    },
    "subTopicSlug": "gerak-vertikal-jatuh-bebas",
    "bab": "Kinematika",
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-gl-vertikal-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-vertikal",
    "category": "Gerak Vertikal & Jatuh Bebas",
    "difficulty": "sedang",
    "statement": "Sebuah batu dilempar vertikal ke atas dari permukaan tanah dengan kelajuan awal $v_0$. Batu tersebut teramati melintasi ketinggian $h = 25\\text{ meter}$ sebanyak dua kali (saat naik dan saat turun) dengan selang waktu antara kedua kejadian tersebut adalah $4\\text{ sekon}$. Jika $g = 10\\text{ m/s}^2$, besar kelajuan awal $v_0$ lemparan batu tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$35\\text{ m/s}$",
      "$40\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Ketinggian pada gerak vertikal ke atas memenuhi persamaan kuadrat $h = v_0 t - \\frac{1}{2} g t^2$. Selisih antara kedua akar waktu ($t_2 - t_1$) berkaitan dengan diskriminan persamaan kuadrat tersebut.",
      "steps": "1. Tulis persamaan kuadrat waktu di ketinggian $h = 25\\text{ m}$:<br>$$5t^2 - v_0 t + 25 = 0 \\implies t^2 - \\left(\\frac{v_0}{5}\\right) t + 5 = 0$$<br>2. Berdasarkan sifat akar persamaan kuadrat:<br>$$t_1 + t_2 = \\frac{v_0}{5},\\quad t_1 t_2 = 5$$<br>3. Gunakan selisih waktu $\\Delta t = t_2 - t_1 = 4\\text{ s}$:<br>$$(t_2 - t_1)^2 = (t_1 + t_2)^2 - 4 t_1 t_2$$<br>$$4^2 = \\left(\\frac{v_0}{5}\\right)^2 - 4(5)$$<br>$$16 = \\frac{v_0^2}{25} - 20 \\implies \\frac{v_0^2}{25} = 36$$<br>$$v_0^2 = 900 \\implies v_0 = 30\\text{ m/s}$$",
      "pitfalls": "Lupa bahwa selang waktu $4\\text{ s}$ adalah $\\Delta t = t_2 - t_1$, bukan waktu mencapai titik puncak."
    },
    "subTopicSlug": "gerak-vertikal-jatuh-bebas",
    "bab": "Kinematika",
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-14",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-vertikal",
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
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "gerak-vertikal-jatuh-bebas"
  },
  {
    "id": "fis-din-39",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-vertikal",
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
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "gerak-vertikal-jatuh-bebas"
  },
  {
    "id": "fis-din-40",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-vertikal",
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
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "gerak-vertikal-jatuh-bebas"
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
