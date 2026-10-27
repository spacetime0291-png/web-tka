/**
 * Batch Task: TASK_fun-alj-dasar-spldv_EASY
 * SubTopic: Aljabar Dasar: SPLDV dan SPLTV (fun-alj-dasar-spldv)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-alj-dasar-spldv-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-spldv",
    category: "Penyelesaian SPLDV Metode Eliminasi Sederhana",
    difficulty: "mudah",
    statement: "Diketahui sistem persamaan linear dua variabel $x + y = 7$ dan $x - y = 3$. Nilai dari $x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2$",
      "$3$",
      "$4$",
      "$5$",
      "$6$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Metode eliminasi menyelesaikan sistem persamaan linear dengan menjumlahkan atau mengurangkan kedua persamaan untuk mengeliminasi salah satu variabel.",
      steps: "1. Tuliskan kedua persamaan linear:\n$$x + y = 7$$\n$$x - y = 3$$\n2. Jumlahkan kedua persamaan untuk mengeliminasi variabel $y$:\n$$(x + y) + (x - y) = 7 + 3$$\n$$2x = 10$$\n3. Bagi kedua ruas dengan 2:\n$$x = 5$$\n4. Jadi, nilai $x$ adalah $5$ (pilihan D).",
      pitfalls: "Mengurangkan kedua persamaan sehingga memperoleh nilai $y = 2$ padahal yang ditanyakan adalah nilai $x$."
    }
  },
  {
    id: "fun-alj-dasar-spldv-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-spldv",
    category: "Penyelesaian SPLDV Mencari Variabel Kedua",
    difficulty: "mudah",
    statement: "Diberikan sistem persamaan $2x + y = 11$ dan $x - y = 1$. Nilai dari variabel $y$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan eliminasi variabel $y$ untuk menemukan $x$, kemudian substitusikan nilai $x$ ke salah satu persamaan untuk mencari $y$.",
      steps: "1. Jumlahkan kedua persamaan linear untuk mengeliminasi variabel $y$:\n$$(2x + y) + (x - y) = 11 + 1$$\n$$3x = 12 \\implies x = 4$$\n2. Substitusikan $x = 4$ ke persamaan kedua $x - y = 1$:\n$$4 - y = 1$$\n$$-y = 1 - 4$$\n$$-y = -3 \\implies y = 3$$\n3. Jadi, nilai dari $y$ adalah $3$ (pilihan C).",
      pitfalls: "Menjawab $4$ karena terburu-buru mengira nilai yang diperoleh pertama kali $(x)$ adalah jawaban akhir."
    }
  },
  {
    id: "fun-alj-dasar-spldv-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-spldv",
    category: "Penyelesaian SPLDV Metode Substitusi",
    difficulty: "mudah",
    statement: "Pasangan bilangan $(x, y)$ memenuhi sistem persamaan $3x + 2y = 12$ dan $y = 2x - 1$. Nilai dari $x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Metode substitusi dilakukan dengan mengganti suatu variabel dengan ekspresi variabel lain yang telah dinyatakan secara eksplisit.",
      steps: "1. Substitusikan bentuk $y = 2x - 1$ ke dalam persamaan pertama:\n$$3x + 2(2x - 1) = 12$$\n2. Jabarkan perkalian aljabar:\n$$3x + 4x - 2 = 12$$\n3. Gabungkan suku-suku sejenis:\n$$7x - 2 = 12$$\n$$7x = 14 \\implies x = 2$$\n4. Jadi, nilai $x$ adalah $2$ (pilihan B).",
      pitfalls: "Lupa mengalikan $-1$ dengan koefisien 2 di luar kurung sehingga menghasilkan $3x + 4x - 1 = 12$."
    }
  },
  {
    id: "fun-alj-dasar-spldv-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-spldv",
    category: "Pemodelan Matematika Sistem Persamaan Linear",
    difficulty: "mudah",
    statement: "Harga $2$ buku dan $3$ pensil adalah $\\text{Rp}17.000,00$, sedangkan harga $1$ buku dan $2$ pensil adalah $\\text{Rp}10.000,00$. Jika $b$ menyatakan harga satu buku dan $p$ menyatakan harga satu pensil, maka model matematika yang tepat adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{cases} 2b + 3p = 17.000 \\\\ b + 2p = 10.000 \\end{cases}$",
      "$\\begin{cases} 3b + 2p = 17.000 \\\\ 2b + p = 10.000 \\end{cases}$",
      "$\\begin{cases} 2b + 3p = 10.000 \\\\ b + 2p = 17.000 \\end{cases}$",
      "$\\begin{cases} 2b + p = 17.000 \\\\ b + 3p = 10.000 \\end{cases}$",
      "$\\begin{cases} b + p = 17.000 \\\\ 2b + 2p = 10.000 \\end{cases}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pemodelan aljabar menerjemahkan kalimat verbal menjadi persamaan matematika dengan memetakan besaran objek ke variabel linier.",
      steps: "1. Misalkan harga 1 buku $= b$ dan harga 1 pensil $= p$.\n2. Kalimat pertama: 2 buku dan 3 pensil berharga Rp17.000,00:\n$$2b + 3p = 17.000$$\n3. Kalimat kedua: 1 buku dan 2 pensil berharga Rp10.000,00:\n$$b + 2p = 10.000$$\n4. Satukan kedua persamaan menjadi sistem:\n$$\\begin{cases} 2b + 3p = 17.000 \\\\ b + 2p = 10.000 \\end{cases}$$\n5. Jadi, model matematika yang tepat adalah pilihan A.",
      pitfalls: "Tertukar koefisien antara variabel buku $b$ dan pensil $p$ pada persamaan."
    }
  },
  {
    id: "fun-alj-dasar-spldv-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-spldv",
    category: "Penyelesaian SPLTV Bentuk Reduksi Langsung",
    difficulty: "mudah",
    statement: "Diberikan sistem persamaan linear tiga variabel: $x + y + z = 10$, $x + y = 6$, dan $y + z = 7$. Nilai dari variabel $z$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2$",
      "$3$",
      "$4$",
      "$5$",
      "$6$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada SPLTV dengan kombinasi penjumlahan parsial, substitusi gabungan $(x + y)$ langsung menghasilkan nilai variabel ketiga $z$.",
      steps: "1. Perhatikan persamaan pertama: $x + y + z = 10$.\n2. Kelompokkan dua variabel pertama: $(x + y) + z = 10$.\n3. Substitusikan nilai persamaan kedua $(x + y = 6)$:\n$$6 + z = 10$$\n4. Kurangkan kedua ruas dengan 6:\n$$z = 10 - 6 = 4$$\n5. Jadi, nilai $z$ adalah $4$ (pilihan C).",
      pitfalls: "Melakukan proses eliminasi bertahap yang panjang dan rumit padahal suku $(x + y)$ sudah diketahui secara utuh."
    }
  }
];
