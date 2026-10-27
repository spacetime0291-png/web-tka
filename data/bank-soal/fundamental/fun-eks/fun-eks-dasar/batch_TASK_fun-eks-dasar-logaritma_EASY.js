/**
 * Batch Task: TASK_fun-eks-dasar-logaritma_EASY
 * SubTopic: Eksponen & Logaritma Dasar: Sifat Operasi Logaritma (fun-eks-dasar-logaritma)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-eks-dasar-logaritma-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-logaritma",
    category: "Sifat Penjumlahan Logaritma Basis Sama",
    difficulty: "mudah",
    statement: "Nilai dari ekspresi logaritma $^2\\log 8 + \\,^2\\log 4$ adalah ....",
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
    correctIndex: 1,
    solution: {
      concept: "Sifat penjumlahan logaritma menyatakan bahwa $^a\\log b + \\,^a\\log c = \\,^a\\log (b \\times c)$.",
      steps: "1. Kalikan kedua numerus karena basis logaritma sama ($2$):\n$$^2\\log 8 + \\,^2\\log 4 = \\,^2\\log(8 \\times 4)$$\n2. Hitung hasil perkalian:\n$$= \\,^2\\log 32$$\n3. Nyatakan 32 dalam bentuk pangkat basis 2:\n$$32 = 2^5 \\implies \\,^2\\log (2^5) = 5$$\n4. (Cara alternatif) Hitung langsung:\n$$^2\\log 8 = 3, \\quad \\,^2\\log 4 = 2 \\implies 3 + 2 = 5$$\n5. Jadi, nilai ekspresi tersebut adalah $5$ (pilihan B).",
      pitfalls: "Menjumlahkan numerusnya ($8 + 4 = 12$) alih-alih mengalikannya."
    }
  },
  {
    id: "fun-eks-dasar-logaritma-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-logaritma",
    category: "Sifat Pengurangan Logaritma",
    difficulty: "mudah",
    statement: "Nilai dari $^3\\log 81 - \\,^3\\log 9$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$9$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Sifat pengurangan logaritma menyatakan bahwa $^a\\log b - \\,^a\\log c = \\,^a\\log \\left(\\frac{b}{c}\\right)$.",
      steps: "1. Bagikan numerus karena basis logaritmanya sama ($3$):\n$$^3\\log 81 - \\,^3\\log 9 = \\,^3\\log\\left(\\frac{81}{9}\\right)$$\n2. Selesaikan pembagian numerus:\n$$= \\,^3\\log 9$$\n3. Hitung nilai logaritmanya:\n$$^3\\log 9 = \\,^3\\log (3^2) = 2$$\n4. Jadi, hasilnya adalah $2$ (pilihan B).",
      pitfalls: "Mengurangkan numerusnya ($81 - 9 = 72$) bukannya membaginya."
    }
  },
  {
    id: "fun-eks-dasar-logaritma-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-logaritma",
    category: "Pengurangan Logaritma Basis 5",
    difficulty: "mudah",
    statement: "Nilai dari $^5\\log 100 - \\,^5\\log 4$ adalah ....",
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
      concept: "Gunakan rumus pembagian numerus pada pengurangan logaritma: $^a\\log b - \\,^a\\log c = \\,^a\\log\\left(\\frac{b}{c}\\right)$.",
      steps: "1. Gabungkan kedua suku logaritma:\n$$^5\\log 100 - \\,^5\\log 4 = \\,^5\\log\\left(\\frac{100}{4}\\right)$$\n2. Hitung hasil bagi:\n$$= \\,^5\\log 25$$\n3. Ubah 25 menjadi bilangan berpangkat basis 5:\n$$25 = 5^2 \\implies \\,^5\\log (5^2) = 2$$\n4. Jadi, nilai dari ekspresi tersebut adalah $2$ (pilihan B).",
      pitfalls: "Membagi basis dengan numerus atau salah menghitung pembagian $\\frac{100}{4}$."
    }
  },
  {
    id: "fun-eks-dasar-logaritma-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-logaritma",
    category: "Penerapan Sifat Logaritma Perkalian Desimal",
    difficulty: "mudah",
    statement: "Diketahui $\\log 2 = 0{,}301$ dan $\\log 3 = 0{,}477$. Nilai dari $\\log 6$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}176$",
      "$0{,}602$",
      "$0{,}778$",
      "$0{,}954$",
      "$1{,}435$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Faktorkan numerus menjadi perkalian faktor-faktor yang diketahui: $\\log(ab) = \\log a + \\log b$.",
      steps: "1. Nyatakan 6 sebagai hasil kali $2 \\times 3$:\n$$\\log 6 = \\log (2 \\times 3)$$\n2. Terapkan sifat penjumlahan logaritma:\n$$= \\log 2 + \\log 3$$\n3. Masukkan nilai yang diketahui:\n$$= 0{,}301 + 0{,}477 = 0{,}778$$\n4. Jadi, nilai dari $\\log 6$ adalah $0{,}778$ (pilihan C).",
      pitfalls: "Mengalikan kedua nilai desimal ($0{,}301 \\times 0{,}477$) bukannya menjumlahkannya."
    }
  },
  {
    id: "fun-eks-dasar-logaritma-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-logaritma",
    category: "Sifat Eksponen pada Numerus Logaritma",
    difficulty: "mudah",
    statement: "Nilai dari ekspresi logaritma $^2\\log (16^3)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4$",
      "$7$",
      "$8$",
      "$12$",
      "$16$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Gunakan sifat pangkat pada numerus logaritma: $^a\\log (b^n) = n \\cdot \\,^a\\log b$.",
      steps: "1. Tarik eksponen 3 ke depan sebagai pengali:\n$$^2\\log (16^3) = 3 \\cdot \\,^2\\log 16$$\n2. Hitung nilai $^2\\log 16$:\n$$16 = 2^4 \\implies \\,^2\\log 16 = 4$$\n3. Kalikan dengan 3:\n$$= 3 \\times 4 = 12$$\n4. (Cara alternatif) Ubah numerus ke basis 2:\n$$16^3 = (2^4)^3 = 2^{12} \\implies \\,^2\\log(2^{12}) = 12$$\n5. Jadi, nilai ekspresi tersebut adalah $12$ (pilihan D).",
      pitfalls: "Menjumlahkan eksponen $4 + 3 = 7$ bukannya mengalikannya."
    }
  }
];
