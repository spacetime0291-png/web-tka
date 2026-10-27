/**
 * Batch Task: TASK_fun-eks-dasar-basis_EASY
 * SubTopic: Eksponen & Logaritma Dasar: Perubahan Basis Logaritma (fun-eks-dasar-basis)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-eks-dasar-basis-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-basis",
    category: "Sifat Perkalian Rantai Basis Logaritma",
    difficulty: "mudah",
    statement: "Nilai dari perkalian berantai logaritma $^2\\log 3 \\times \\,^3\\log 4 \\times \\,^4\\log 8$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$8$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Sifat perkalian rantai basis logaritma menyatakan bahwa $^a\\log b \\times \\,^b\\log c = \\,^a\\log c$, dengan syarat basis dan numerus perantara bernilai positif dan tidak sama dengan 1.",
      steps: "1. Terapkan sifat rantai secara berurutan:\n$$^2\\log 3 \\times \\,^3\\log 4 = \\,^2\\log 4$$\n2. Lanjutkan perkalian dengan suku ketiga:\n$$^2\\log 4 \\times \\,^4\\log 8 = \\,^2\\log 8$$\n3. Hitung nilai logaritma akhir:\n$$^2\\log 8 = \\,^2\\log(2^3) = 3$$\n4. Jadi, nilai perkalian tersebut adalah $3$ (pilihan C).",
      pitfalls: "Mengalikan seluruh numerusnya $(3 \\times 4 \\times 8 = 96)$ alih-alih menyederhanakan rantai basis."
    }
  },
  {
    id: "fun-eks-dasar-basis-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-basis",
    category: "Sifat Pertukaran Basis dan Numerus",
    difficulty: "mudah",
    statement: "Jika diketahui $^3\\log 5 = p$, maka nilai dari $^5\\log 3$ dinyatakan dalam $p$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-p$",
      "$\\frac{1}{p}$",
      "$p^2$",
      "$\\frac{p}{5}$",
      "$5p$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Membalik posisi antara basis dan numerus menghasilkan nilai kebalikan (resiprokal): $^a\\log b = \\frac{1}{^b\\log a}$.",
      steps: "1. Gunakan sifat pertukaran basis dan numerus:\n$$^5\\log 3 = \\frac{1}{^3\\log 5}$$\n2. Substitusikan nilai $^3\\log 5 = p$:\n$$= \\frac{1}{p}$$\n3. Jadi, nilai dari $^5\\log 3$ adalah $\\frac{1}{p}$ (pilihan B).",
      pitfalls: "Memberikan tanda negatif $-p$ karena tertukar dengan sifat perpangkatan eksponen."
    }
  },
  {
    id: "fun-eks-dasar-basis-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-basis",
    category: "Rumus Perubahan Basis Sembarang",
    difficulty: "mudah",
    statement: "Bentuk logaritma $^2\\log 7$ jika dinyatakan dalam logaritma berbasis 10 adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{\\log 2}{\\log 7}$",
      "$\\frac{\\log 7}{\\log 2}$",
      "$\\log 7 - \\log 2$",
      "$\\log 14$",
      "$\\frac{1}{\\log 14}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Rumus perubahan basis logaritma menyatakan bahwa $^a\\log b = \\frac{^p\\log b}{^p\\log a}$ untuk setiap basis $p > 0$ dan $p \\neq 1$.",
      steps: "1. Terapkan rumus perubahan basis dengan memilih basis baru $p = 10$:\n$$^2\\log 7 = \\frac{^{10}\\log 7}{^{10}\\log 2}$$\n2. Pada basis 10, angka basis tidak perlu dituliskan:\n$$= \\frac{\\log 7}{\\log 2}$$\n3. Jadi, bentuk yang ekuivalen adalah $\\frac{\\log 7}{\\log 2}$ (pilihan B).",
      pitfalls: "Terbalik menempatkan basis di bagian pembilang dan numerus di bagian penyebut ($\\frac{\\log 2}{\\log 7}$)."
    }
  },
  {
    id: "fun-eks-dasar-basis-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-basis",
    category: "Perkalian Dua Logaritma Berantai",
    difficulty: "mudah",
    statement: "Nilai dari perkalian logaritma $^3\\log 7 \\times \\,^7\\log 81$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2$",
      "$3$",
      "$4$",
      "$9$",
      "$27$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Perkalian rantai dua suku logaritma menyederhanakan basis dan numerus perantara yang sama: $^a\\log b \\times \\,^b\\log c = \\,^a\\log c$.",
      steps: "1. Sederhanakan perkalian rantai dengan basis perantara 7:\n$$^3\\log 7 \\times \\,^7\\log 81 = \\,^3\\log 81$$\n2. Nyatakan 81 sebagai perpangkatan basis 3:\n$$81 = 3^4$$\n3. Hitung nilai logaritmanya:\n$$^3\\log (3^4) = 4$$\n4. Jadi, nilai perkalian tersebut adalah $4$ (pilihan C).",
      pitfalls: "Menghitung akar pangkat empat atau salah mengingat $3^3 = 27$ sehingga memilih jawaban 3."
    }
  },
  {
    id: "fun-eks-dasar-basis-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-basis",
    category: "Sifat Logaritma Basis dan Numerus Berpangkat",
    difficulty: "mudah",
    statement: "Nilai dari $^{2^3}\\log (2^6)$ menggunakan sifat pangkat basis dan numerus adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{2}$",
      "$1$",
      "$2$",
      "$3$",
      "$18$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Sifat logaritma dengan basis dan numerus berpangkat menyatakan bahwa $^{a^m}\\log (b^n) = \\frac{n}{m} \\cdot \\,^a\\log b$.",
      steps: "1. Identifikasi pangkat pada basis ($m = 3$) dan pangkat pada numerus ($n = 6$):\n$$^{2^3}\\log (2^6)$$\n2. Terapkan rumus eksponen basis-numerus:\n$$= \\frac{6}{3} \\cdot \\,^2\\log 2$$\n3. Karena $^2\\log 2 = 1$, maka diperoleh:\n$$= 2 \\times 1 = 2$$\n4. Jadi, nilainya adalah $2$ (pilihan C).",
      pitfalls: "Terbalik membagi pangkat basis dengan pangkat numerus $\\frac{3}{6} = \\frac{1}{2}$."
    }
  }
];
