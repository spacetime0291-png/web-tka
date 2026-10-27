/**
 * Batch Task: TASK_fun-eks-dasar-basis_MEDIUM
 * SubTopic: Eksponen & Logaritma Dasar: Perubahan Basis Logaritma (fun-eks-dasar-basis)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-eks-dasar-basis-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-basis",
    category: "Menyatakan Logaritma dengan Dua Variabel Basis Berbeda",
    difficulty: "sedang",
    statement: "Diketahui $^2\\log 3 = a$ dan $^3\\log 5 = b$. Nilai dari $^2\\log 15$ jika dinyatakan dalam $a$ dan $b$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$a + b$",
      "$a + ab$",
      "$b + ab$",
      "$\\frac{a}{b}$",
      "$1 + ab$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gunakan sifat rantai logaritma untuk mencari nilai $^2\\log 5$: $^2\\log 5 = \\,^2\\log 3 \\times \\,^3\\log 5 = a \\cdot b$.",
      steps: "1. Uraikan numerus 15 menjadi perkalian faktor $3 \\times 5$:\n$$^2\\log 15 = \\,^2\\log(3 \\times 5) = \\,^2\\log 3 + \\,^2\\log 5$$\n2. Tentukan nilai $^2\\log 5$ menggunakan rumus rantai perkalian basis:\n$$^2\\log 5 = \\,^2\\log 3 \\times \\,^3\\log 5 = a \\cdot b = ab$$\n3. Substitusikan kembali ke bentuk penjumlahan:\n$$^2\\log 15 = a + ab$$\n4. Jadi, nilai $^2\\log 15$ adalah $a + ab$ (pilihan B).",
      pitfalls: "Langsung menjumlahkan $a + b$ tanpa memperhatikan bahwa basis pada logaritma kedua adalah 3, bukan 2."
    }
  },
  {
    id: "fun-eks-dasar-basis-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-basis",
    category: "Perubahan Basis Baru pada Logaritma Majemuk",
    difficulty: "sedang",
    statement: "Diketahui $^2\\log 3 = a$ dan $^3\\log 5 = b$. Nilai dari $^6\\log 15$ dalam $a$ dan $b$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{a + b}{1 + a}$",
      "$\\frac{a + ab}{1 + a}$",
      "$\\frac{1 + ab}{a + b}$",
      "$\\frac{a + ab}{a + b}$",
      "$\\frac{b + ab}{1 + a}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Ubah basis logaritma $^6\\log 15$ ke basis yang diketahui (basis 2): $^6\\log 15 = \\frac{^2\\log 15}{^2\\log 6}$.",
      steps: "1. Terapkan rumus perubahan basis ke basis 2:\n$$^6\\log 15 = \\frac{^2\\log 15}{^2\\log 6}$$\n2. Uraikan bagian pembilang:\n$$^2\\log 15 = \\,^2\\log(3 \\times 5) = \\,^2\\log 3 + \\,^2\\log 5 = a + ab$$\n3. Uraikan bagian penyebut:\n$$^2\\log 6 = \\,^2\\log(2 \\times 3) = \\,^2\\log 2 + \\,^2\\log 3 = 1 + a$$\n4. Satukan pembilang dan penyebut:\n$$^6\\log 15 = \\frac{a + ab}{1 + a}$$\n5. Jadi, nilai $^6\\log 15$ adalah $\\frac{a + ab}{1 + a}$ (pilihan B).",
      pitfalls: "Lupa mengubah penyebut basis 6 menjadi $1 + a$ dan malah membiarkannya bernilai $a$."
    }
  },
  {
    id: "fun-eks-dasar-basis-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-basis",
    category: "Perkalian Logaritma Berbasis dan Numerus Pangkat Tingkat Lanjut",
    difficulty: "sedang",
    statement: "Nilai dari ekspresi $^{16}\\log 27 \\times \\,^9\\log 32$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{5}{4}$",
      "$\\frac{3}{2}$",
      "$\\frac{15}{8}$",
      "$2$",
      "$\\frac{45}{16}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Ubah setiap basis dan numerus ke dalam bentuk bilangan prima berpangkat, lalu gunakan $^{a^m}\\log(b^n) = \\frac{n}{m} \\,^a\\log b$ dan $^a\\log b \\times \\,^b\\log a = 1$.",
      steps: "1. Nyatakan suku pertama dalam basis 2 dan numerus 3:\n$$16 = 2^4, \\quad 27 = 3^3 \\implies \\,^{16}\\log 27 = \\,^{2^4}\\log(3^3) = \\frac{3}{4} \\,^2\\log 3$$\n2. Nyatakan suku kedua dalam basis 3 dan numerus 2:\n$$9 = 3^2, \\quad 32 = 2^5 \\implies \\,^9\\log 32 = \\,^{3^2}\\log(2^5) = \\frac{5}{2} \\,^3\\log 2$$\n3. Kalikan kedua bentuk suku tersebut:\n$$\\left(\\frac{3}{4} \\,^2\\log 3\\right) \\times \\left(\\frac{5}{2} \\,^3\\log 2\\right) = \\left(\\frac{3}{4} \\times \\frac{5}{2}\\right) \\times (^2\\log 3 \\times \\,^3\\log 2)$$\n4. Karena $^2\\log 3 \\times \\,^3\\log 2 = 1$, maka diperoleh:\n$$= \\frac{15}{8} \\times 1 = \\frac{15}{8}$$\n5. Jadi, nilai ekspresi tersebut adalah $\\frac{15}{8}$ (pilihan C).",
      pitfalls: "Terbalik dalam pembagian rasio pangkat $\\frac{m}{n}$ alih-alih $\\frac{n}{m}$."
    }
  },
  {
    id: "fun-eks-dasar-basis-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-basis",
    category: "Pembalikan Basis Gabungan Perkalian",
    difficulty: "sedang",
    statement: "Jika $^a\\log b = 3$ dan $^b\\log c = 2$, maka nilai dari $^{ac}\\log b$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{6}$",
      "$\\frac{3}{7}$",
      "$\\frac{1}{2}$",
      "$\\frac{5}{6}$",
      "$\\frac{7}{3}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gunakan sifat resiprokal $^{ac}\\log b = \\frac{1}{^b\\log(ac)}$ dan uraikan penyebut menjadi $^b\\log a + \\,^b\\log c$.",
      steps: "1. Terapkan sifat resiprokal:\n$$^{ac}\\log b = \\frac{1}{^b\\log(ac)} = \\frac{1}{^b\\log a + \\,^b\\log c}$$\n2. Tentukan nilai $^b\\log a$ dari yang diketahui $^a\\log b = 3$:\n$$^b\\log a = \\frac{1}{^a\\log b} = \\frac{1}{3}$$\n3. Substitusikan nilai $^b\\log a = \\frac{1}{3}$ dan $^b\\log c = 2$ ke dalam penyebut:\n$$^b\\log a + \\,^b\\log c = \\frac{1}{3} + 2 = \\frac{1 + 6}{3} = \\frac{7}{3}$$\n4. Hitung hasil bagi akhir:\n$$^{ac}\\log b = \\frac{1}{\\frac{7}{3}} = \\frac{3}{7}$$\n5. Jadi, nilai dari $^{ac}\\log b$ adalah $\\frac{3}{7}$ (pilihan B).",
      pitfalls: "Lupa membalik hasil akhir penyebut $\\frac{7}{3}$ sehingga memilih $\\frac{7}{3}$."
    }
  },
  {
    id: "fun-eks-dasar-basis-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-basis",
    category: "Persamaan Logaritma dengan Perubahan Basis",
    difficulty: "sedang",
    statement: "Nilai $x$ yang memenuhi persamaan logaritma $^2\\log x = \\,^4\\log(3x + 4)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-1$",
      "$2$",
      "$3$",
      "$4$",
      "$-1 \\text{ atau } 4$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Samakan basis kedua ruas dengan sifat $^{a^m}\\log b = \\frac{1}{m} \\,^a\\log b = \\,^a\\log (b^{\\frac{1}{m}})$, serta perhatikan syarat numerus $x > 0$.",
      steps: "1. Syarat numerus: $x > 0$ dan $3x + 4 > 0$.\n2. Ubah basis 4 pada ruas kanan menjadi basis 2:\n$$^4\\log(3x + 4) = \\,^{2^2}\\log(3x + 4) = \\frac{1}{2} \\,^2\\log(3x + 4) = \\,^2\\log\\sqrt{3x + 4}$$\n3. Samakan kedua numerus logaritma basis 2:\n$$x = \\sqrt{3x + 4}$$\n4. Kuadratkan kedua ruas:\n$$x^2 = 3x + 4$$\n$$x^2 - 3x - 4 = 0$$\n$$(x - 4)(x + 1) = 0$$\nDiperoleh $x = 4$ atau $x = -1$.\n5. Karena syarat numerus mengharuskan $x > 0$, maka $x = -1$ tidak memenuhi.\n6. Jadi, nilai $x$ yang memenuhi adalah $4$ (pilihan D).",
      pitfalls: "Menyertakan nilai $x = -1$ sebagai solusi padahal nilai negatif melanggar syarat numerus logaritma."
    }
  }
];
