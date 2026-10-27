/**
 * Batch Task: TASK_fun-eks-dasar-akar_EASY
 * SubTopic: Eksponen & Logaritma Dasar: Bentuk Akar & Rasionalisasi (fun-eks-dasar-akar)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-eks-dasar-akar-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-akar",
    category: "Penyederhanaan Bentuk Akar Dasar",
    difficulty: "mudah",
    statement: "Bentuk sederhana dari bentuk akar $\\sqrt{72}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3\\sqrt{8}$",
      "$4\\sqrt{3}$",
      "$6\\sqrt{2}$",
      "$8\\sqrt{3}$",
      "$12\\sqrt{2}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Penyederhanaan bentuk akar dilakukan dengan memfaktorkan radikan menjadi perkalian faktor kuadrat terbesar: $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$.",
      steps: "1. Cari faktor kuadrat sempurna terbesar dari 72:\n$$72 = 36 \\times 2$$\n2. Uraikan bentuk akarnya:\n$$\\sqrt{72} = \\sqrt{36 \\times 2} = \\sqrt{36} \\times \\sqrt{2}$$\n3. Tarik nilai akar kuadrat dari 36:\n$$= 6\\sqrt{2}$$\n4. Jadi, bentuk sederhananya adalah $6\\sqrt{2}$ (pilihan C).",
      pitfalls: "Memfaktorkan dengan kuadrat yang lebih kecil seperti $9 \\times 8 = 3\\sqrt{8}$ tanpa menyederhanakan $\\sqrt{8}$ lebih lanjut."
    }
  },
  {
    id: "fun-eks-dasar-akar-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-akar",
    category: "Operasi Penjumlahan dan Pengurangan Bentuk Akar Sejenis",
    difficulty: "mudah",
    statement: "Hasil dari operasi aljabar $3\\sqrt{5} + 7\\sqrt{5} - 4\\sqrt{5}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\sqrt{5}$",
      "$5\\sqrt{5}$",
      "$6\\sqrt{5}$",
      "$7\\sqrt{5}$",
      "$14\\sqrt{5}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Bentuk akar sejenis dapat dijumlahkan atau dikurangkan koefisiennya menggunakan sifat distributif: $a\\sqrt{c} + b\\sqrt{c} = (a + b)\\sqrt{c}$.",
      steps: "1. Perhatikan bahwa seluruh suku memiliki radikan yang sama, yaitu $\\sqrt{5}$.\n2. Kelompokkan seluruh koefisien di depan tanda akar:\n$$(3 + 7 - 4)\\sqrt{5}$$\n3. Hitung hasil aritmetika koefisien:\n$$3 + 7 - 4 = 10 - 4 = 6$$\n4. Gabungkan kembali dengan bentuk akar:\n$$= 6\\sqrt{5}$$\n5. Jadi, hasil akhirnya adalah $6\\sqrt{5}$ (pilihan C).",
      pitfalls: "Melakukan operasi pada bilangan di dalam akar sehingga menghasilkan nilai yang salah."
    }
  },
  {
    id: "fun-eks-dasar-akar-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-akar",
    category: "Rasionalisasi Penyebut Tunggal Sederhana",
    difficulty: "mudah",
    statement: "Bentuk rasional dari pecahan $\\frac{6}{\\sqrt{3}}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\sqrt{3}$",
      "$2\\sqrt{3}$",
      "$3\\sqrt{3}$",
      "$6\\sqrt{3}$",
      "$\\frac{1}{2}\\sqrt{3}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Rasionalisasi penyebut tunggal dilakukan dengan mengalikan pembilang dan penyebut dengan bentuk akar penyebutnya: $\\frac{a}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}$.",
      steps: "1. Kalikan pecahan dengan $\\frac{\\sqrt{3}}{\\sqrt{3}}$:\n$$\\frac{6}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}}$$\n2. Kalikan pembilang dan penyebut:\n$$= \\frac{6\\sqrt{3}}{3}$$\n3. Sederhanakan koefisien numerik:\n$$= 2\\sqrt{3}$$\n4. Jadi, bentuk rasionalnya adalah $2\\sqrt{3}$ (pilihan B).",
      pitfalls: "Lupa membagi dengan 3 pada penyebut sehingga mengira jawabannya adalah $6\\sqrt{3}$."
    }
  },
  {
    id: "fun-eks-dasar-akar-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-akar",
    category: "Perkalian Dua Bentuk Akar Kuadrat",
    difficulty: "mudah",
    statement: "Hasil perkalian $\\sqrt{6} \\times \\sqrt{8}$ dalam bentuk paling sederhana adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\sqrt{6}$",
      "$3\\sqrt{4}$",
      "$4\\sqrt{3}$",
      "$6\\sqrt{2}$",
      "$48$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan sifat perkalian bentuk akar $\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$, lalu sederhanakan radikan hasilnya.",
      steps: "1. Kalikan bilangan di dalam akar:\n$$\\sqrt{6} \\times \\sqrt{8} = \\sqrt{6 \\times 8} = \\sqrt{48}$$\n2. Faktorkan 48 dengan faktor kuadrat terbesar:\n$$48 = 16 \\times 3$$\n3. Tarik akar dari 16:\n$$\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$$\n4. Jadi, hasil perkalian dalam bentuk paling sederhana adalah $4\\sqrt{3}$ (pilihan C).",
      pitfalls: "Menjawab $\\sqrt{48}$ tanpa menyederhanakannya menjadi bentuk akar paling sederhana."
    }
  },
  {
    id: "fun-eks-dasar-akar-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-akar",
    category: "Rasionalisasi Pecahan Berkoefisien di Penyebut",
    difficulty: "mudah",
    statement: "Bentuk sederhana dari pecahan $\\frac{10}{3\\sqrt{5}}$ setelah dirasionalkan penyebutnya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{3}\\sqrt{5}$",
      "$\\frac{2}{3}\\sqrt{5}$",
      "$\\frac{5}{3}\\sqrt{5}$",
      "$2\\sqrt{5}$",
      "$\\frac{10}{3}\\sqrt{5}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Rasionalisasi pecahan dengan penyebut $c\\sqrt{b}$ cukup dilakukan dengan mengalikan pembilang dan penyebut dengan $\\sqrt{b}$.",
      steps: "1. Kalikan pembilang dan penyebut dengan $\\sqrt{5}$:\n$$\\frac{10}{3\\sqrt{5}} \\times \\frac{\\sqrt{5}}{\\sqrt{5}}$$\n2. Sederhanakan penyebut:\n$$= \\frac{10\\sqrt{5}}{3 \\times 5} = \\frac{10\\sqrt{5}}{15}$$\n3. Bagi pembilang dan penyebut dengan faktor 5:\n$$= \\frac{2}{3}\\sqrt{5}$$\n4. Jadi, bentuk sederhananya adalah $\\frac{2}{3}\\sqrt{5}$ (pilihan B).",
      pitfalls: "Lupa mengalikan 3 dengan 5 pada penyebut sehingga menyisakan penyebut bernilai 3 tanpa mengalikan $\\sqrt{5} \\times \\sqrt{5} = 5$."
    }
  }
];
