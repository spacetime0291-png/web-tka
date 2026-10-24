module.exports = [
  {
    id: "fis-din-gaya-newton1-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton1",
    category: "Hukum I Newton",
    difficulty: "mudah",
    statement: "Hukum I Newton menyatakan bahwa apabila resultan seluruh gaya luar yang bekerja pada suatu benda bernilai sama dengan nol ($\\Sigma \\vec{F} = 0$), maka kondisi gerak benda tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Benda yang mula-mula diam akan tetap diam, dan benda yang sedang bergerak akan tetap bergerak lurus beraturan dengan kecepatan konstan",
      "Benda pasti selalu berada dalam keadaan diam mutlak",
      "Benda akan mengalami percepatan konstan yang searah dengan gaya mula-mula",
      "Kecepatan benda akan terus berkurang secara perlahan hingga akhirnya berhenti",
      "Benda akan bergerak melingkar beraturan dengan kelajuan konstan"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hukum I Newton (Hukum Kelembaman/Inersia): 'Jika resultan gaya pada suatu benda sama dengan nol, benda yang diam akan tetap diam dan benda yang bergerak akan tetap bergerak dengan kecepatan konstan pada garis lurus (GLB)'.",
      steps: "1. Tinjau syarat kesetimbangan translasi: $\\Sigma \\vec{F} = 0$.<br>2. Berdasarkan Hukum II Newton: $\\Sigma \\vec{F} = m\\vec{a} \\implies \\vec{a} = 0$.<br>3. Karena percepatan nol ($\\vec{a} = \\frac{d\\vec{v}}{dt} = 0$), vektor kecepatan tidak berubah ($\\vec{v} = \\text{konstan}$), baik saat $\\vec{v} = 0$ (diam) maupun $\\vec{v} \\ne 0$ (GLB).",
      pitfalls: "Miskonsepsi Aristoteles yang menyatakan bahwa gaya diperlukan untuk mempertahankan gerak sehingga mengira benda tanpa gaya luar akan berhenti dengan sendirinya."
    }
  },
  {
    id: "fis-din-gaya-newton1-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton1",
    category: "Hukum I Newton",
    difficulty: "mudah",
    statement: "Ketika sebuah bus antarkota yang sedang melaju kencang direm mendadak oleh sopir, tubuh para penumpang seketika terdorong ke arah depan. Fenomena fisis tersebut merupakan manifestasi langsung dari ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Sifat kelembaman (inersia) tubuh penumpang yang cenderung mempertahankan keadaan gerak majunya sesuai Hukum I Newton",
      "Adanya gaya dorong misterius dari belakang yang bekerja pada penumpang",
      "Gaya gesekan ban bus dengan aspal jalan yang langsung bekerja mendorong tubuh penumpang",
      "Gaya aksi-reaksi antara tubuh penumpang dengan kursi bus sesuai Hukum III Newton",
      "Gaya gravitasi bumi yang tiba-tiba bertambah besar saat bus direm"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kelembaman (inersia) adalah kecenderungan alami setiap benda materi untuk menolak perubahan keadaan geraknya. Sebelum direm, tubuh penumpang melaju bersama bus. Saat rem memperlambat bus, tubuh penumpang cenderung terus bergerak maju dengan kecepatan semula.",
      steps: "1. Tubuh penumpang memiliki kecepatan awal maju ke depan bersama bus.<br>2. Ketika gaya rem memperlambat bus, belum ada gaya luar yang cukup yang bekerja pada tubuh atas penumpang untuk menghentikannya secara bersamaan.<br>3. Berdasarkan Hukum I Newton, tubuh mempertahankan gerak majunya sehingga terasa terdorong ke depan.",
      pitfalls: "Menganggap adanya 'gaya dorong nyata' ke depan, padahal itu hanyalah efek kelembaman tubuh dalam kerangka acuan yang diperlambat."
    }
  },
  {
    id: "fis-din-gaya-newton1-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton1",
    category: "Hukum I Newton",
    difficulty: "mudah",
    statement: "Sebuah balok bermassa $m = 10\\text{ kg}$ berada di atas lantai mendatar yang licin sempurna. Balok ditarik oleh dua buah gaya mendatar yang berlawanan arah secara bersamaan: $F_1 = 25\\text{ N}$ ke kanan dan $F_2 = 25\\text{ N}$ ke kiri. Pernyataan yang benar mengenai keadaan gerak balok tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Resultan gaya bernilai nol sehingga percepatan balok sama dengan nol",
      "Balok bergerak dipercepat ke kanan dengan percepatan $2{,}5\\text{ m/s}^2$",
      "Balok bergerak dipercepat ke kiri dengan percepatan $2{,}5\\text{ m/s}^2$",
      "Balok mengalami percepatan total sebesar $5\\text{ m/s}^2$",
      "Balok akan terangkat melayang ke atas"
    ],
    correctIndex: 0,
    solution: {
      concept: "Resultan gaya searah sumbu horizontal adalah selisih aljabar vektor gaya:<br>$$\\Sigma F_x = F_1 - F_2$$",
      steps: "1. Hitung resultan gaya:<br>$$\\Sigma F_x = 25\\text{ N} - 25\\text{ N} = 0$$<br>2. Berdasarkan Hukum I Newton (atau $\\Sigma F = ma$):<br>$$a = \\frac{\\Sigma F}{m} = \\frac{0}{10} = 0\\text{ m/s}^2$$<br>Balok berada dalam kesetimbangan translasi tanpa percepatan.",
      pitfalls: "Menjumlahkan nilai kedua gaya tanpa memperhatikan arahnya ($25 + 25 = 50\\text{ N}$)."
    }
  },
  {
    id: "fis-din-gaya-newton1-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton1",
    category: "Hukum I Newton",
    difficulty: "mudah",
    statement: "Besaran fisika yang menjadi ukuran kuantitatif dari derajat kelembaman (inersia) suatu benda dalam gerak translasi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Massa benda",
      "Berat benda",
      "Volume benda",
      "Kecepatan benda",
      "Massa jenis benda"
    ],
    correctIndex: 0,
    solution: {
      concept: "Massa inersial adalah sifat intrinsik materi yang mengukur ketahanan benda terhadap perubahan kecepatan (percepatan). Semakin besar massa suatu benda, semakin sulit benda tersebut diubah keadaan geraknya.",
      steps: "1. Kelembaman adalah sifat alami benda mempertahankan keadaan geraknya.<br>2. Ukuran kuantitatif kelembaman translasi adalah massa ($m$), yang nilainya skalar dan konstan di mana pun benda berada.<br>3. Berat ($w = mg$) bergantung pada percepatan gravitasi lokal, sedangkan kelembaman adalah sifat mutlak materi.",
      pitfalls: "Tertukar antara massa dan berat. Berat adalah gaya gravitasi, sedangkan massa adalah ukuran inersia intrinsik benda."
    }
  },
  {
    id: "fis-din-gaya-newton1-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton1",
    category: "Hukum I Newton",
    difficulty: "mudah",
    statement: "Sebuah partikel di bidang datar dipengaruhi oleh tiga gaya horizontal: $F_1 = 12\\text{ N}$ ke arah timur, $F_2 = 8\\text{ N}$ ke arah barat, dan gaya ketiga $F_3$. Agar partikel tersebut tetap bergerak lurus dengan kelajuan konstan pada arah timur-barat, besar dan arah gaya $F_3$ haruslah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ N}$ ke arah barat",
      "$4\\text{ N}$ ke arah timur",
      "$20\\text{ N}$ ke arah barat",
      "$20\\text{ N}$ ke arah timur",
      "$0\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Syarat benda bergerak lurus dengan kelajuan konstan (GLB) menurut Hukum I Newton adalah resultan gaya total harus nol:<br>$$\\Sigma F = 0$$",
      steps: "1. Tetapkan arah timur sebagai positif (+):<br>$$F_1 = +12\\text{ N}$$<br>$$F_2 = -8\\text{ N}$$<br>2. Terapkan syarat kesetimbangan translasi:<br>$$\\Sigma F = F_1 + F_2 + F_3 = 0$$<br>$$12 - 8 + F_3 = 0 \\implies 4 + F_3 = 0 \\implies F_3 = -4\\text{ N}$$<br>Tanda minus menunjukkan gaya $F_3$ bernilai $4\\text{ N}$ berarah ke barat.",
      pitfalls: "Menambahkan gaya ke arah timur sehingga resultan gayanya justru menjadi lebih besar dan benda dipercepat."
    }
  }
];
