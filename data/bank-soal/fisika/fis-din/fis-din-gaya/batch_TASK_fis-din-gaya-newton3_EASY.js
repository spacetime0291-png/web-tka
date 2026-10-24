module.exports = [
  {
    id: "fis-din-gaya-newton3-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton3",
    category: "Hukum III Newton",
    difficulty: "mudah",
    statement: "Berdasarkan Hukum III Newton, karakteristik yang mutlak dipenuhi oleh sepasang gaya aksi-reaksi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Memiliki besar yang sama, berlawanan arah, dan bekerja pada dua benda yang berbeda",
      "Memiliki besar yang sama, searah, dan bekerja pada benda yang sama",
      "Memiliki besar yang berbeda dan bekerja pada satu benda yang sama",
      "Bekerja pada benda yang sama sehingga resultan gaya totalnya selalu nol",
      "Gaya reaksi muncul setelah jeda waktu tertentu setelah gaya aksi bekerja"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hukum III Newton (Aksi-Reaksi): $\\vec{F}_{\\text{aksi}} = -\\vec{F}_{\\text{reaksi}}$. Ciri utama pasangan aksi-reaksi:<br>1. Besarnya sama persis ($|F_{\\text{aksi}}| = |F_{\\text{reaksi}}|$)<br>2. Arahnya berlawanan<br>3. Bekerja secara simultan tanpa jeda waktu<br>4. Bekerja pada DUA benda yang berbeda (benda $A$ pada benda $B$, dan benda $B$ pada benda $A$).",
      steps: "Evaluasi pilihan:<br>• Opsi A: Tepat, memenuhi seluruh syarat aksi-reaksi.<br>• Opsi B: Salah, arahnya harus berlawanan.<br>• Opsi C & D: Salah, bekerja pada dua benda berbeda sehingga tidak saling meniadakan.<br>• Opsi E: Salah, terjadi seketika/simultan.",
      pitfalls: "Mengira aksi-reaksi bekerja pada benda yang sama sehingga saling membatalkan."
    }
  },
  {
    id: "fis-din-gaya-newton3-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton3",
    category: "Hukum III Newton",
    difficulty: "mudah",
    statement: "Sebuah buku diletakkan diam di atas meja datar. Bumi menarik buku tersebut dengan gaya gravitasi (gaya berat $w$) ke bawah. Pasangan gaya reaksi yang tepat terhadap gaya berat buku tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Gaya gravitasi tarik dari buku terhadap pusat bumi yang berarah ke atas",
      "Gaya normal dari permukaan meja yang menopang buku ke atas",
      "Gaya tekan buku pada permukaan meja ke arah bawah",
      "Gaya gesekan antara buku dan meja",
      "Gaya berat meja yang menekan lantai ke bawah"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pasangan aksi-reaksi harus melibatkan dua objek yang sama secara timbal balik dan sejenis gaya. Gaya berat ($w$) adalah gaya gravitasi bumi pada buku ($F_{\\text{Bumi}\\to\\text{buku}}$). Pasangan reaksinya adalah gaya gravitasi buku pada bumi ($F_{\\text{buku}\\to\\text{Bumi}}$).",
      steps: "1. Identifikasi pelaku dan penerima gaya aksi: Bumi menarik Buku ($F_{B\\to K}$ ke bawah).<br>2. Pasangan reaksinya adalah kebalikannya: Buku menarik Bumi ($F_{K\\to B}$ ke atas).<br>3. Gaya normal meja ($N$) adalah gaya kontak antara meja dan buku, bukan reaksi dari gaya gravitasi bumi.",
      pitfalls: "Miskonsepsi paling terkenal di fisika SMA: menganggap gaya normal ($N$) adalah reaksi dari gaya berat ($w$). Padahal $N$ dan $w$ bekerja pada benda yang sama (buku) dan jenis interaksinya berbeda (kontak elektromagnetik vs gravitasi)."
    }
  },
  {
    id: "fis-din-gaya-newton3-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton3",
    category: "Hukum III Newton",
    difficulty: "mudah",
    statement: "Alasan utama mengapa sepasang gaya aksi dan reaksi tidak pernah saling meniadakan (tidak menghasilkan resultan nol) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Kedua gaya bekerja pada dua objek benda yang berbeda",
      "Besar gaya aksi selalu lebih besar daripada gaya reaksi",
      "Kedua gaya memiliki garis kerja yang tidak pernah sejajar",
      "Gaya aksi bekerja lebih dulu sebelum gaya reaksi muncul",
      "Gaya reaksi diredam oleh gaya gesekan lingkungan"
    ],
    correctIndex: 0,
    solution: {
      concept: "Resultan gaya hanya dapat dihitung jika dua atau lebih gaya bekerja pada SATU benda yang sama. Karena gaya aksi bekerja pada benda $B$ dan gaya reaksi bekerja pada benda $A$, keduanya mempengaruhi percepatan dua benda yang berbeda secara terpisah.",
      steps: "1. Benda $A$ memberi gaya aksi pada benda $B$ $\\implies$ mempengaruhi gerak benda $B$.<br>2. Benda $B$ memberi gaya reaksi pada benda $A$ $\\implies$ mempengaruhi gerak benda $A$.<br>3. Karena titik tangkapnya berada pada benda yang berlainan, kedua gaya tidak pernah saling menghilangkan dalam diagram benda bebas masing-masing.",
      pitfalls: "Menyimpulkan benda tidak akan pernah bisa bergerak jika ada gaya aksi-reaksi."
    }
  },
  {
    id: "fis-din-gaya-newton3-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton3",
    category: "Hukum III Newton",
    difficulty: "mudah",
    statement: "Seorang anak berdiri di atas papan seluncur (skateboard) yang mula-mula diam di atas lantai licin. Ketika anak melompat ke arah depan (utara), papan seluncur seketika terdorong bergerak ke arah belakang (selatan). Peristiwa ini terjadi karena ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Kaki anak memberikan gaya aksi ke belakang pada papan seluncur, sehingga papan memberikan gaya reaksi ke depan pada anak",
      "Gaya gravitasi menarik skateboard ke belakang",
      "Skateboard kehilangan massa kelembaman saat anak melompat",
      "Lantai memberikan gaya dorong ke belakang pada skateboard",
      "Udara di depan anak mendorong skateboard ke belakang"
    ],
    correctIndex: 0,
    solution: {
      concept: "Berdasarkan Hukum III Newton, saat anak melompat ke depan, telapak kaki anak mendorong papan seluncur ke arah belakang (gaya aksi). Papan seluncur memberikan gaya reaksi yang sama besar ke arah depan pada tubuh anak sehingga anak terlontar ke depan sementara papan terpental ke belakang.",
      steps: "1. Gaya kaki pada papan = arah ke belakang (selatan).<br>2. Gaya papan pada kaki = arah ke depan (utara).<br>3. Keduanya merupakan pasangan aksi-reaksi Hukum III Newton.",
      pitfalls: "Mengira papan terdorong karena tarikan gravitasi atau hembusan udara."
    }
  },
  {
    id: "fis-din-gaya-newton3-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton3",
    category: "Hukum III Newton",
    difficulty: "mudah",
    statement: "Seekor kuda menarik sebuah gerobak beban dengan gaya tarik sebesar $400\\text{ N}$ ke arah timur. Berdasarkan Hukum III Newton, besar dan arah gaya yang dikerjakan oleh gerobak pada kuda adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$400\\text{ N}$ ke arah barat",
      "$400\\text{ N}$ ke arah timur",
      "Kurang dari $400\\text{ N}$ ke arah barat agar gerobak bisa bergerak",
      "Lebih dari $400\\text{ N}$ ke arah barat",
      "$0\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hukum III Newton menetapkan bahwa gaya aksi dan reaksi selalu sama besar di setiap keadaan, baik sistem dalam keadaan diam maupun sedang bergerak dipercepat:<br>$$|F_{\\text{gerobak pada kuda}}| = |F_{\\text{kuda pada gerobak}}| = 400\\text{ N}$$",
      steps: "1. Gaya kuda pada gerobak: $400\\text{ N}$ ke timur.<br>2. Gaya gerobak pada kuda: $400\\text{ N}$ ke arah sebaliknya (barat).<br>3. Gerobak tetap dapat melaju ke timur karena kuda juga mendorong tanah ke belakang dan tanah memberikan gaya dorong ke depan pada kuku kuda yang lebih besar dari gaya hambat gerobak.",
      pitfalls: "Paradoks kuda-gerobak: Mengira gaya gerobak harus lebih kecil dari $400\\text{ N}$ agar gerobak bisa bergerak."
    }
  }
];
