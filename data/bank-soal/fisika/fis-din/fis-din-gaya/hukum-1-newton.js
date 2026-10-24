/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Gaya dan Gerak (fis-din-gaya)
 * Sub-Bab: Hukum I Newton (fis-din-gaya-newton1)
 * Slug: hukum-1-newton
 * Indikator: Prinsip kelembaman (inersia) dan syarat kesetimbangan translasi (resultan gaya nol).
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-gaya-newton1";
  const subTopicSlug = "hukum-1-newton";
  const questions = [
  {
    "id": "fis-din-gaya-newton1-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton1",
    "category": "Hukum I Newton",
    "difficulty": "mudah",
    "statement": "Hukum I Newton menyatakan bahwa apabila resultan seluruh gaya luar yang bekerja pada suatu benda bernilai sama dengan nol ($\\Sigma \\vec{F} = 0$), maka kondisi gerak benda tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Benda yang mula-mula diam akan tetap diam, dan benda yang sedang bergerak akan tetap bergerak lurus beraturan dengan kecepatan konstan",
      "Benda pasti selalu berada dalam keadaan diam mutlak",
      "Benda akan mengalami percepatan konstan yang searah dengan gaya mula-mula",
      "Kecepatan benda akan terus berkurang secara perlahan hingga akhirnya berhenti",
      "Benda akan bergerak melingkar beraturan dengan kelajuan konstan"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hukum I Newton (Hukum Kelembaman/Inersia): 'Jika resultan gaya pada suatu benda sama dengan nol, benda yang diam akan tetap diam dan benda yang bergerak akan tetap bergerak dengan kecepatan konstan pada garis lurus (GLB)'.",
      "steps": "1. Tinjau syarat kesetimbangan translasi: $\\Sigma \\vec{F} = 0$.<br>2. Berdasarkan Hukum II Newton: $\\Sigma \\vec{F} = m\\vec{a} \\implies \\vec{a} = 0$.<br>3. Karena percepatan nol ($\\vec{a} = \\frac{d\\vec{v}}{dt} = 0$), vektor kecepatan tidak berubah ($\\vec{v} = \\text{konstan}$), baik saat $\\vec{v} = 0$ (diam) maupun $\\vec{v} \\ne 0$ (GLB).",
      "pitfalls": "Miskonsepsi Aristoteles yang menyatakan bahwa gaya diperlukan untuk mempertahankan gerak sehingga mengira benda tanpa gaya luar akan berhenti dengan sendirinya."
    },
    "subTopicSlug": "hukum-1-newton",
    "bab": "Dinamika",
    "subBab": "Hukum I Newton",
    "subTopic": "Hukum I Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-newton1-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton1",
    "category": "Hukum I Newton",
    "difficulty": "mudah",
    "statement": "Ketika sebuah bus antarkota yang sedang melaju kencang direm mendadak oleh sopir, tubuh para penumpang seketika terdorong ke arah depan. Fenomena fisis tersebut merupakan manifestasi langsung dari ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Sifat kelembaman (inersia) tubuh penumpang yang cenderung mempertahankan keadaan gerak majunya sesuai Hukum I Newton",
      "Adanya gaya dorong misterius dari belakang yang bekerja pada penumpang",
      "Gaya gesekan ban bus dengan aspal jalan yang langsung bekerja mendorong tubuh penumpang",
      "Gaya aksi-reaksi antara tubuh penumpang dengan kursi bus sesuai Hukum III Newton",
      "Gaya gravitasi bumi yang tiba-tiba bertambah besar saat bus direm"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kelembaman (inersia) adalah kecenderungan alami setiap benda materi untuk menolak perubahan keadaan geraknya. Sebelum direm, tubuh penumpang melaju bersama bus. Saat rem memperlambat bus, tubuh penumpang cenderung terus bergerak maju dengan kecepatan semula.",
      "steps": "1. Tubuh penumpang memiliki kecepatan awal maju ke depan bersama bus.<br>2. Ketika gaya rem memperlambat bus, belum ada gaya luar yang cukup yang bekerja pada tubuh atas penumpang untuk menghentikannya secara bersamaan.<br>3. Berdasarkan Hukum I Newton, tubuh mempertahankan gerak majunya sehingga terasa terdorong ke depan.",
      "pitfalls": "Menganggap adanya 'gaya dorong nyata' ke depan, padahal itu hanyalah efek kelembaman tubuh dalam kerangka acuan yang diperlambat."
    },
    "subTopicSlug": "hukum-1-newton",
    "bab": "Dinamika",
    "subBab": "Hukum I Newton",
    "subTopic": "Hukum I Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-newton1-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton1",
    "category": "Hukum I Newton",
    "difficulty": "mudah",
    "statement": "Sebuah balok bermassa $m = 10\\text{ kg}$ berada di atas lantai mendatar yang licin sempurna. Balok ditarik oleh dua buah gaya mendatar yang berlawanan arah secara bersamaan: $F_1 = 25\\text{ N}$ ke kanan dan $F_2 = 25\\text{ N}$ ke kiri. Pernyataan yang benar mengenai keadaan gerak balok tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Resultan gaya bernilai nol sehingga percepatan balok sama dengan nol",
      "Balok bergerak dipercepat ke kanan dengan percepatan $2{,}5\\text{ m/s}^2$",
      "Balok bergerak dipercepat ke kiri dengan percepatan $2{,}5\\text{ m/s}^2$",
      "Balok mengalami percepatan total sebesar $5\\text{ m/s}^2$",
      "Balok akan terangkat melayang ke atas"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Resultan gaya searah sumbu horizontal adalah selisih aljabar vektor gaya:<br>$$\\Sigma F_x = F_1 - F_2$$",
      "steps": "1. Hitung resultan gaya:<br>$$\\Sigma F_x = 25\\text{ N} - 25\\text{ N} = 0$$<br>2. Berdasarkan Hukum I Newton (atau $\\Sigma F = ma$):<br>$$a = \\frac{\\Sigma F}{m} = \\frac{0}{10} = 0\\text{ m/s}^2$$<br>Balok berada dalam kesetimbangan translasi tanpa percepatan.",
      "pitfalls": "Menjumlahkan nilai kedua gaya tanpa memperhatikan arahnya ($25 + 25 = 50\\text{ N}$)."
    },
    "subTopicSlug": "hukum-1-newton",
    "bab": "Dinamika",
    "subBab": "Hukum I Newton",
    "subTopic": "Hukum I Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-newton1-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton1",
    "category": "Hukum I Newton",
    "difficulty": "mudah",
    "statement": "Besaran fisika yang menjadi ukuran kuantitatif dari derajat kelembaman (inersia) suatu benda dalam gerak translasi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Massa benda",
      "Berat benda",
      "Volume benda",
      "Kecepatan benda",
      "Massa jenis benda"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Massa inersial adalah sifat intrinsik materi yang mengukur ketahanan benda terhadap perubahan kecepatan (percepatan). Semakin besar massa suatu benda, semakin sulit benda tersebut diubah keadaan geraknya.",
      "steps": "1. Kelembaman adalah sifat alami benda mempertahankan keadaan geraknya.<br>2. Ukuran kuantitatif kelembaman translasi adalah massa ($m$), yang nilainya skalar dan konstan di mana pun benda berada.<br>3. Berat ($w = mg$) bergantung pada percepatan gravitasi lokal, sedangkan kelembaman adalah sifat mutlak materi.",
      "pitfalls": "Tertukar antara massa dan berat. Berat adalah gaya gravitasi, sedangkan massa adalah ukuran inersia intrinsik benda."
    },
    "subTopicSlug": "hukum-1-newton",
    "bab": "Dinamika",
    "subBab": "Hukum I Newton",
    "subTopic": "Hukum I Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-newton1-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton1",
    "category": "Hukum I Newton",
    "difficulty": "mudah",
    "statement": "Sebuah partikel di bidang datar dipengaruhi oleh tiga gaya horizontal: $F_1 = 12\\text{ N}$ ke arah timur, $F_2 = 8\\text{ N}$ ke arah barat, dan gaya ketiga $F_3$. Agar partikel tersebut tetap bergerak lurus dengan kelajuan konstan pada arah timur-barat, besar dan arah gaya $F_3$ haruslah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ N}$ ke arah barat",
      "$4\\text{ N}$ ke arah timur",
      "$20\\text{ N}$ ke arah barat",
      "$20\\text{ N}$ ke arah timur",
      "$0\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Syarat benda bergerak lurus dengan kelajuan konstan (GLB) menurut Hukum I Newton adalah resultan gaya total harus nol:<br>$$\\Sigma F = 0$$",
      "steps": "1. Tetapkan arah timur sebagai positif (+):<br>$$F_1 = +12\\text{ N}$$<br>$$F_2 = -8\\text{ N}$$<br>2. Terapkan syarat kesetimbangan translasi:<br>$$\\Sigma F = F_1 + F_2 + F_3 = 0$$<br>$$12 - 8 + F_3 = 0 \\implies 4 + F_3 = 0 \\implies F_3 = -4\\text{ N}$$<br>Tanda minus menunjukkan gaya $F_3$ bernilai $4\\text{ N}$ berarah ke barat.",
      "pitfalls": "Menambahkan gaya ke arah timur sehingga resultan gayanya justru menjadi lebih besar dan benda dipercepat."
    },
    "subTopicSlug": "hukum-1-newton",
    "bab": "Dinamika",
    "subBab": "Hukum I Newton",
    "subTopic": "Hukum I Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-newton1-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton1",
    "category": "Hukum I Newton",
    "difficulty": "sedang",
    "statement": "Sebuah lampu gantung antik bermassa $m = 6\\text{ kg}$ digantungkan pada langit-langit gedung menggunakan dua utas tali simetris $T_1$ dan $T_2$. Kedua tali masing-masing membentuk sudut $\\theta = 30^\\circ$ terhadap garis horizontal langit-langit (diketahui $\\sin 30^\\circ = 0{,}5$). Jika sistem berada dalam kesetimbangan statis dan $g = 10\\text{ m/s}^2$, besar gaya tegangan pada masing-masing tali adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$60\\text{ N}$",
      "$30\\text{ N}$",
      "$120\\text{ N}$",
      "$30\\sqrt{3}\\text{ N}$",
      "$60\\sqrt{3}\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Syarat kesetimbangan translasi statis menurut Hukum I Newton adalah $\\Sigma F_x = 0$ dan $\\Sigma F_y = 0$. Pada sumbu vertikal, komponen tegangan kedua tali menopang gaya berat lampu.",
      "steps": "1. Berat lampu gantung:<br>$$w = m \\cdot g = 6\\text{ kg} \\times 10\\text{ m/s}^2 = 60\\text{ N}$$<br>2. Karena sistem simetris, besar tegangan tali sama ($T_1 = T_2 = T$).<br>3. Terapkan kesetimbangan gaya vertikal ($\\Sigma F_y = 0$):<br>$$T_1 \\sin 30^\\circ + T_2 \\sin 30^\\circ - w = 0$$<br>$$2 T \\sin 30^\\circ = w \\implies 2 T (0{,}5) = 60 \\implies T = 60\\text{ N}$$",
      "pitfalls": "Lupa bahwa ada dua tali yang menopang sehingga membagi dua gaya berat tanpa memperhitungkan faktor $\\sin 30^\\circ = 0{,}5$."
    },
    "subTopicSlug": "hukum-1-newton",
    "bab": "Dinamika",
    "subBab": "Hukum I Newton",
    "subTopic": "Hukum I Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-newton1-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton1",
    "category": "Hukum I Newton",
    "difficulty": "sedang",
    "statement": "Sebuah balok bermassa $m = 5\\text{ kg}$ berada di atas bidang miring licin yang memiliki sudut kemiringan $\\theta = 37^\\circ$ terhadap garis horizontal (diketahui $\\sin 37^\\circ = 0{,}6$ dan $\\cos 37^\\circ = 0{,}8$). Agar balok tersebut tetap tertahan diam dalam keadaan setimbang, besar gaya dorong horizontal $F$ yang harus diberikan pada balok adalah .... ($g = 10\\text{ m/s}^2$)",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$37{,}5\\text{ N}$",
      "$30\\text{ N}$",
      "$40\\text{ N}$",
      "$50\\text{ N}$",
      "$24\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gaya dorong $F$ berarah horizontal mendatar. Proyeksikan gaya-gaya yang bekerja sejajar dengan permukaan bidang miring untuk memenuhi syarat kesetimbangan $\\Sigma F_{\\parallel} = 0$.",
      "steps": "1. Berat balok: $w = m \\cdot g = 5 \\times 10 = 50\\text{ N}$.<br>2. Komponen gaya berat menuruni bidang miring:<br>$$w_x = w \\sin 37^\\circ = 50 \\times 0{,}6 = 30\\text{ N}$$<br>3. Komponen gaya dorong $F$ menaiki bidang miring:<br>$$F_x = F \\cos 37^\\circ = 0{,}8 F$$<br>4. Kesetimbangan sejajar bidang ($\\Sigma F_{\\parallel} = 0$):<br>$$F \\cos 37^\\circ = w \\sin 37^\\circ \\implies 0{,}8 F = 30 \\implies F = \\frac{30}{0{,}8} = 37{,}5\\text{ N}$$",
      "pitfalls": "Mengabaikan arah horizontal dari gaya dorong $F$ dan mengasumsikan $F$ sudah sejajar bidang miring sehingga menjawab $30\\text{ N}$."
    },
    "subTopicSlug": "hukum-1-newton",
    "bab": "Dinamika",
    "subBab": "Hukum I Newton",
    "subTopic": "Hukum I Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-newton1-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton1",
    "category": "Hukum I Newton",
    "difficulty": "sedang",
    "statement": "Sebuah partikel titik berada dalam keadaan setimbang translasi di bawah pengaruh tiga gaya vektor sebidang: $\\vec{F}_1 = (6\\hat{i} + 8\\hat{j})\\text{ N}$, $\\vec{F}_2 = (-2\\hat{i} - 5\\hat{j})\\text{ N}$, dan gaya ketiga $\\vec{F}_3$. Besar magnitudo (nilai mutlak) dari vektor gaya $\\vec{F}_3$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ N}$",
      "$7\\text{ N}$",
      "$\\sqrt{65}\\text{ N}$",
      "$25\\text{ N}$",
      "$1\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Syarat kesetimbangan partikel adalah resultan jumlahan vektor seluruh gaya bernilai nol:<br>$$\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0}$$",
      "steps": "1. Jumlahkan komponen vektor $\\vec{F}_1$ dan $\\vec{F}_2$:<br>$$\\vec{F}_{12} = (6 - 2)\\hat{i} + (8 - 5)\\hat{j} = 4\\hat{i} + 3\\hat{j}\\text{ (N)}$$<br>2. Tentukan vektor gaya $\\vec{F}_3$ penyeimbang:<br>$$\\vec{F}_3 = -\\vec{F}_{12} = -4\\hat{i} - 3\\hat{j}\\text{ (N)}$$<br>3. Hitung besar (norma) vektor gaya $\\vec{F}_3$:<br>$$|\\vec{F}_3| = \\sqrt{(-4)^2 + (-3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\text{ N}$$",
      "pitfalls": "Lupa menarik akar kuadrat setelah menjumlahkan kuadrat komponen ($16 + 9 = 25$)."
    },
    "subTopicSlug": "hukum-1-newton",
    "bab": "Dinamika",
    "subBab": "Hukum I Newton",
    "subTopic": "Hukum I Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-newton1-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton1",
    "category": "Hukum I Newton",
    "difficulty": "sedang",
    "statement": "Sebuah balok kayu bermassa $m = 8\\text{ kg}$ ditarik oleh gaya luar konstan $F = 40\\text{ N}$ yang membentuk sudut elevasi $60^\\circ$ terhadap lantai horizontal kasar ($\\cos 60^\\circ = 0{,}5$). Jika balok teramati bergerak lurus dengan kelajuan tetap $v = 2\\text{ m/s}$, besar gaya gesekan kinetis yang bekerja pada balok dari lantai adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20\\text{ N}$",
      "$40\\text{ N}$",
      "$20\\sqrt{3}\\text{ N}$",
      "$80\\text{ N}$",
      "$10\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gerak dengan kelajuan tetap pada lintasan lurus merupakan Gerak Lurus Beraturan (GLB). Berdasarkan Hukum I Newton, resultan gaya pada arah mendatar harus sama dengan nol ($\\Sigma F_x = 0$).",
      "steps": "1. Komponen gaya tarik mendatar searah gerak:<br>$$F_x = F \\cos 60^\\circ = 40\\text{ N} \\times 0{,}5 = 20\\text{ N}$$<br>2. Terapkan kesetimbangan horizontal ($\\Sigma F_x = 0$):<br>$$F_x - f_k = 0 \\implies f_k = F_x = 20\\text{ N}$$",
      "pitfalls": "Mencoba menghitung koefisien gesek dan gaya normal yang rumit, padahal informasi 'bergerak dengan kelajuan tetap' secara langsung memastikan $f_k = F_x$."
    },
    "subTopicSlug": "hukum-1-newton",
    "bab": "Dinamika",
    "subBab": "Hukum I Newton",
    "subTopic": "Hukum I Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-newton1-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton1",
    "category": "Hukum I Newton",
    "difficulty": "sedang",
    "statement": "Sebuah simpul tali dalam keadaan setimbang menahan beban bermassa $M = 4\\text{ kg}$ melalui seutas tali vertikal. Simpul tersebut dihubungkan ke dinding oleh tali $A$ yang mendatar horizontal dan ke langit-langit oleh tali $B$ yang membentuk sudut $53^\\circ$ terhadap garis horizontal (diketahui $\\sin 53^\\circ = 0{,}8$ dan $\\cos 53^\\circ = 0{,}6$, $g = 10\\text{ m/s}^2$). Besar gaya tegangan tali $A$ ($T_A$) dan tali $B$ ($T_B$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ N}$ dan $50\\text{ N}$",
      "$50\\text{ N}$ dan $30\\text{ N}$",
      "$40\\text{ N}$ dan $50\\text{ N}$",
      "$30\\text{ N}$ dan $40\\text{ N}$",
      "$24\\text{ N}$ dan $32\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kesetimbangan titik simpul tiga gaya:<br>• Sumbu vertikal: $\\Sigma F_y = 0 \\implies T_B \\sin\\theta - w = 0$<br>• Sumbu horizontal: $\\Sigma F_x = 0 \\implies T_B \\cos\\theta - T_A = 0$",
      "steps": "1. Berat beban: $w = M \\cdot g = 4 \\times 10 = 40\\text{ N}$.<br>2. Dari kesetimbangan vertikal:<br>$$T_B \\sin 53^\\circ = w \\implies T_B (0{,}8) = 40 \\implies T_B = \\frac{40}{0{,}8} = 50\\text{ N}$$<br>3. Dari kesetimbangan horizontal:<br>$$T_A = T_B \\cos 53^\\circ = 50 \\times 0{,}6 = 30\\text{ N}$$",
      "pitfalls": "Tertukar antara tegangan tali $A$ dan tali $B$ saat membaca urutan pertanyaan."
    },
    "subTopicSlug": "hukum-1-newton",
    "bab": "Dinamika",
    "subBab": "Hukum I Newton",
    "subTopic": "Hukum I Newton",
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
