module.exports = [
  {
    id: "fis-kin-gl-jarak-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-jarak",
    category: "Jarak dan Perpindahan",
    difficulty: "mudah",
    statement: "Seorang pejalan kaki bergerak lurus ke arah timur sejauh $12\\text{ m}$, kemudian berbalik arah dan berjalan lurus ke arah barat sejauh $5\\text{ m}$. Jarak total yang ditempuh dan besar perpindahan orang tersebut dari titik awal berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$17\\text{ m}$ dan $7\\text{ m}$",
      "$17\\text{ m}$ dan $13\\text{ m}$",
      "$7\\text{ m}$ dan $17\\text{ m}$",
      "$13\\text{ m}$ dan $7\\text{ m}$",
      "$17\\text{ m}$ dan $0\\text{ m}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jarak ($s$) adalah besaran skalar yang menyatakan total panjang seluruh lintasan yang dilalui tanpa memperhatikan arah. Perpindahan ($\\Delta \\vec{r}$) adalah besaran vektor yang menyatakan perubahan kedudukan/posisi dari posisi awal ke posisi akhir.",
      steps: "1. Jarak total dihitung dengan menjumlahkan seluruh panjang lintasan gerak:<br>$$s = 12\\text{ m} + 5\\text{ m} = 17\\text{ m}$$<br>2. Perpindahan merupakan resultan posisi arah timur (+) dan barat (-):<br>$$\\Delta r = 12\\text{ m} - 5\\text{ m} = 7\\text{ m}\\text{ (ke arah timur)}$$",
      pitfalls: "Jangan mengurangkan jarak tempuh ketika berbalik arah. Jarak selalu bernilai skalar positif akumulatif."
    }
  },
  {
    id: "fis-kin-gl-jarak-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-jarak",
    category: "Jarak dan Perpindahan",
    difficulty: "mudah",
    statement: "Sebuah partikel bergerak menelusuri lintasan setengah lingkaran dengan jari-jari $R = 7\\text{ m}$ dari titik $A$ ke titik $B$. Jika $\\pi = \\frac{22}{7}$, nilai jarak yang ditempuh dan besar perpindahan partikel tersebut berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$22\\text{ m}$ dan $14\\text{ m}$",
      "$14\\text{ m}$ dan $22\\text{ m}$",
      "$44\\text{ m}$ dan $14\\text{ m}$",
      "$22\\text{ m}$ dan $7\\text{ m}$",
      "$11\\text{ m}$ dan $14\\text{ m}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jarak pada lintasan lengkung merupakan panjang busur yang dilalui. Sedangkan perpindahan adalah garis lurus yang menghubungkan titik awal ke titik akhir (dalam setengah lingkaran, garis lurus tersebut adalah garis tengah/diameter lingkaran).",
      steps: "1. Jarak busur setengah lingkaran:<br>$$s = \\frac{1}{2} \\times (2\\pi R) = \\pi R = \\frac{22}{7} \\times 7\\text{ m} = 22\\text{ m}$$<br>2. Besar perpindahan (diameter titik $A$ ke titik $B$):<br>$$|\\Delta \\vec{r}| = 2R = 2 \\times 7\\text{ m} = 14\\text{ m}$$",
      pitfalls: "Kekeliruan umum adalah menganggap perpindahan sama dengan panjang busur lengkung, padahal perpindahan selalu merupakan garis lurus terpendek antara titik awal dan akhir."
    }
  },
  {
    id: "fis-kin-gl-jarak-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-jarak",
    category: "Jarak dan Perpindahan",
    difficulty: "mudah",
    statement: "Manakah pernyataan berikut yang paling tepat mengenai perbedaan karakteristik fisis antara jarak dan perpindahan pada suatu gerak benda?",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Jarak adalah besaran skalar yang nilainya selalu tak-negatif, sedangkan perpindahan adalah besaran vektor yang bernilai nol jika benda kembali ke posisi semula.",
      "Jarak selalu bernilai lebih kecil daripada besar perpindahannya.",
      "Perpindahan adalah besaran skalar, sedangkan jarak adalah besaran vektor yang memiliki arah.",
      "Jarak dan perpindahan selalu memiliki nilai yang identik pada semua jenis lintasan.",
      "Perpindahan tidak pernah bernilai nol selama benda melakukan gerakan."
    ],
    correctIndex: 0,
    solution: {
      concept: "Jarak merupakan besaran skalar (hanya memiliki nilai besar dan selalu positif/akumulatif). Perpindahan merupakan besaran vektor (memiliki nilai besar dan arah tertentu), di mana $\\Delta \\vec{r} = \\vec{r}_{\\text{akhir}} - \\vec{r}_{\\text{awal}}$. Bila posisi akhir berimpit dengan posisi awal, maka $|\\Delta \\vec{r}| = 0$.",
      steps: "Analisis setiap opsi:<br>• Opsi A: Tepat, jarak adalah besaran skalar positif akumulatif, sedangkan perpindahan bernilai nol jika kembali ke posisi semula.<br>• Opsi B: Salah, jarak selalu $\\ge$ perpindahan.<br>• Opsi C: Terbalik definisi skalar dan vektor.<br>• Opsi D: Nilainya hanya identik pada gerak lurus satu arah tanpa berbalik arah.<br>• Opsi E: Perpindahan nol terjadi saat lintasan tertutup.",
      pitfalls: "Hati-hati dengan kata mutlak seperti 'selalu identik' atau 'tidak pernah bernilai nol'."
    }
  },
  {
    id: "fis-kin-gl-jarak-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-jarak",
    category: "Jarak dan Perpindahan",
    difficulty: "mudah",
    statement: "Sebuah mobil mainan bergerak sepanjang sumbu-$x$. Mula-mula mobil berada pada koordinat $x_1 = -4\\text{ m}$, bergerak maju ke $x_2 = +8\\text{ m}$, kemudian mundur dan berhenti di $x_3 = +2\\text{ m}$. Perpindahan total mobil mainan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$+6\\text{ m}$",
      "$+18\\text{ m}$",
      "$-6\\text{ m}$",
      "$+14\\text{ m}$",
      "$+10\\text{ m}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Perpindahan pada satu dimensi (sumbu-$x$) didefinisikan secara langsung oleh selisih koordinat posisi akhir terhadap posisi awal:<br>$$\\Delta x = x_{\\text{akhir}} - x_{\\text{awal}}$$",
      steps: "1. Tentukan posisi awal dan akhir gerak:<br>$$x_{\\text{awal}} = x_1 = -4\\text{ m}$$<br>$$x_{\\text{akhir}} = x_3 = +2\\text{ m}$$<br>2. Hitung perpindahan total:<br>$$\\Delta x = x_{\\text{akhir}} - x_{\\text{awal}} = 2 - (-4) = 2 + 4 = +6\\text{ m}$$",
      pitfalls: "Jangan menghitung total langkah pergerakan ($12\\text{ m} + 6\\text{ m} = 18\\text{ m}$) karena itu adalah jarak tempuh, bukan perpindahan."
    }
  },
  {
    id: "fis-kin-gl-jarak-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-jarak",
    category: "Jarak dan Perpindahan",
    difficulty: "mudah",
    statement: "Seorang siswa berlari di lapangan sepak bola dari titik sudut $P$, menempuh lintasan lurus ke utara sejauh $30\\text{ m}$, lalu berbelok lurus ke timur sejauh $40\\text{ m}$ hingga tiba di titik $Q$. Jarak tempuh dan besar perpindahan siswa tersebut berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$70\\text{ m}$ dan $50\\text{ m}$",
      "$50\\text{ m}$ dan $70\\text{ m}$",
      "$70\\text{ m}$ dan $10\\text{ m}$",
      "$50\\text{ m}$ dan $50\\text{ m}$",
      "$70\\text{ m}$ dan $70\\text{ m}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jarak tempuh adalah jumlahan panjang lintasan skalar. Perpindahan dua dimensi yang saling tegak lurus (utara dan timur) dihitung menggunakan teorema Pythagoras.",
      steps: "1. Jarak skalar total:<br>$$s = 30\\text{ m} + 40\\text{ m} = 70\\text{ m}$$<br>2. Besar perpindahan (sisi miring segitiga siku-siku):<br>$$|\\Delta \\vec{r}| = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\text{ m}$$",
      pitfalls: "Perhatikan urutan yang ditanyakan pada soal: 'jarak tempuh dan besar perpindahan' (70 m dan 50 m), bukan terbalik."
    }
  }
];
