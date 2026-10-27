/**
 * Batch Task: TASK_fun-eks-dasar-logaritma_MEDIUM
 * SubTopic: Eksponen & Logaritma Dasar: Sifat Operasi Logaritma (fun-eks-dasar-logaritma)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-eks-dasar-logaritma-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-logaritma",
    category: "Kombinasi Operasi Logaritma dengan Bentuk Akar",
    difficulty: "sedang",
    statement: "Nilai dari ekspresi $^2\\log 48 + \\,^2\\log \\sqrt{16} - \\,^2\\log 3$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4$",
      "$5$",
      "$6$",
      "$7$",
      "$8$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan penggabungan sifat perkalian dan pembagian logaritma: $^a\\log b + \\,^a\\log c - \\,^a\\log d = \\,^a\\log \\left(\\frac{b \\cdot c}{d}\\right)$.",
      steps: "1. Sederhanakan bentuk akar pada numerus terlebih dahulu:\n$$\\sqrt{16} = 4$$\n2. Gabungkan ketiga suku logaritma:\n$$^2\\log 48 + \\,^2\\log 4 - \\,^2\\log 3 = \\,^2\\log\\left(\\frac{48 \\times 4}{3}\\right)$$\n3. Lakukan pembagian $48$ dengan $3$:\n$$\\frac{48}{3} = 16$$\n4. Hitung hasil perkalian numerus:\n$$16 \\times 4 = 64$$\n5. Hitung nilai logaritma basis 2:\n$$^2\\log 64 = \\,^2\\log(2^6) = 6$$\n6. Jadi, nilai ekspresi tersebut adalah $6$ (pilihan C).",
      pitfalls: "Lupa menghitung nilai $\\sqrt{16} = 4$ dan langsung memasukkan 16 sehingga hasilnya berlipat ganda."
    }
  },
  {
    id: "fun-eks-dasar-logaritma-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-logaritma",
    category: "Menyatakan Logaritma dalam Variabel Tertentu",
    difficulty: "sedang",
    statement: "Jika $^2\\log 3 = a$ dan $^2\\log 5 = b$, maka nilai dari $^2\\log 60$ dinyatakan dalam $a$ dan $b$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 + a + b$",
      "$2 + a + b$",
      "$2ab$",
      "$2 + ab$",
      "$4 + a + b$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Faktorkan numerus ke dalam bentuk faktor prima, kemudian gunakan sifat penjumlahan logaritma.",
      steps: "1. Faktorkan 60 ke faktor prima:\n$$60 = 4 \\times 15 = 2^2 \\times 3 \\times 5$$\n2. Jabarkan logaritma perkalian menjadi penjumlahan:\n$$^2\\log 60 = \\,^2\\log(2^2 \\times 3 \\times 5) = \\,^2\\log(2^2) + \\,^2\\log 3 + \\,^2\\log 5$$\n3. Hitung suku basis sama:\n$$^2\\log(2^2) = 2$$\n4. Substitusikan nilai $^2\\log 3 = a$ dan $^2\\log 5 = b$:\n$$= 2 + a + b$$\n5. Jadi, nilai $^2\\log 60$ adalah $2 + a + b$ (pilihan B).",
      pitfalls: "Mengalikan variabel menjadi $2ab$ atau lupa bahwa $^2\\log 4 = 2$, bukan 1."
    }
  },
  {
    id: "fun-eks-dasar-logaritma-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-logaritma",
    category: "Penyederhanaan Pecahan Logaritma Multi-Basis",
    difficulty: "sedang",
    statement: "Nilai dari ekspresi pecahan logaritma $\\frac{^3\\log 25 \\times \\,^5\\log 81}{^2\\log 8}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{4}{3}$",
      "$2$",
      "$\\frac{8}{3}$",
      "$4$",
      "$\\frac{16}{3}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan sifat pangkat numerus $^a\\log (b^n) = n \\cdot \\,^a\\log b$ dan rantai perkalian logaritma $^a\\log b \\times \\,^b\\log c = \\,^a\\log c$.",
      steps: "1. Uraikan pembilang:\n$$^3\\log 25 = \\,^3\\log(5^2) = 2 \\cdot \\,^3\\log 5$$\n$$^5\\log 81 = \\,^5\\log(3^4) = 4 \\cdot \\,^5\\log 3$$\n2. Kalikan kedua bentuk pada pembilang:\n$$(2 \\cdot \\,^3\\log 5) \\times (4 \\cdot \\,^5\\log 3) = 8 \\times (^3\\log 5 \\times \\,^5\\log 3)$$\n3. Terapkan sifat rantai logaritma:\n$$^3\\log 5 \\times \\,^5\\log 3 = \\,^3\\log 3 = 1$$\nSehingga pembilang bernilai $8 \\times 1 = 8$.\n4. Hitung bagian penyebut:\n$$^2\\log 8 = \\,^2\\log(2^3) = 3$$\n5. Bagikan pembilang dengan penyebut:\n$$= \\frac{8}{3}$$\n6. Jadi, nilai ekspresi tersebut adalah $\\frac{8}{3}$ (pilihan C).",
      pitfalls: "Lupa mengalikan koefisien eksponen $2 \\times 4 = 8$ sehingga menyisakan nilai pembilang bernilai 6."
    }
  },
  {
    id: "fun-eks-dasar-logaritma-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-logaritma",
    category: "Manipulasi Logaritma Berbasis 10 terhadap Faktor 5",
    difficulty: "sedang",
    statement: "Diketahui $\\log 2 = a$. Nilai dari $\\log 5$ jika dinyatakan dalam $a$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 - a$",
      "$1 + a$",
      "$\\frac{1}{a}$",
      "$2 - a$",
      "$\\frac{10}{a}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Angka 5 dapat dinyatakan sebagai hasil bagi $\\frac{10}{2}$ pada sistem logaritma berbasis 10.",
      steps: "1. Tuliskan $\\log 5$ sebagai bentuk pembagian:\n$$\\log 5 = \\log\\left(\\frac{10}{2}\\right)$$\n2. Terapkan sifat pengurangan logaritma:\n$$= \\log 10 - \\log 2$$\n3. Karena logaritma tanpa basis tertulis merupakan basis 10, maka $\\log 10 = 1$:\n$$= 1 - \\log 2$$\n4. Substitusikan $\\log 2 = a$:\n$$= 1 - a$$\n5. Jadi, nilai $\\log 5$ dalam $a$ adalah $1 - a$ (pilihan A).",
      pitfalls: "Membalik logaritma menjadi $\\frac{1}{a}$ yang merupakan nilai dari $^2\\log 10$, bukan $\\log 5$."
    }
  },
  {
    id: "fun-eks-dasar-logaritma-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-logaritma",
    category: "Selisih Dua Kuadrat pada Logaritma",
    difficulty: "sedang",
    statement: "Bentuk sederhana dari ekspresi aljabar $(^2\\log 6)^2 - (^2\\log 3)^2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$^2\\log 2$",
      "$^2\\log 3$",
      "$^2\\log 6$",
      "$^2\\log 9$",
      "$^2\\log 18$"
    ],
    correctIndex: 4,
    solution: {
      concept: "Terapkan pemfaktoran selisih dua kuadrat $x^2 - y^2 = (x - y)(x + y)$ terhadap suku-suku logaritma.",
      steps: "1. Faktorkan bentuk selisih kuadrat:\n$$(^2\\log 6)^2 - (^2\\log 3)^2 = (^2\\log 6 - \\,^2\\log 3)(^2\\log 6 + \\,^2\\log 3)$$\n2. Sederhanakan faktor pertama (pengurangan logaritma):\n$$^2\\log 6 - \\,^2\\log 3 = \\,^2\\log\\left(\\frac{6}{3}\\right) = \\,^2\\log 2 = 1$$\n3. Sederhanakan faktor kedua (penjumlahan logaritma):\n$$^2\\log 6 + \\,^2\\log 3 = \\,^2\\log(6 \\times 3) = \\,^2\\log 18$$\n4. Kalikan kedua hasil faktor:\n$$1 \\times \\,^2\\log 18 = \\,^2\\log 18$$\n5. Jadi, bentuk sederhananya adalah $^2\\log 18$ (pilihan E).",
      pitfalls: "Mengurangkan langsung numerus $(6^2 - 3^2 = 27)$ di dalam satu tanda logaritma."
    }
  }
];
