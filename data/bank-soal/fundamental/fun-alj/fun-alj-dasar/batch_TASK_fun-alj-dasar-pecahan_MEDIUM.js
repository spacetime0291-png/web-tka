/**
 * Batch Task: TASK_fun-alj-dasar-pecahan_MEDIUM
 * SubTopic: Aljabar Dasar: Pecahan Bentuk Aljabar (fun-alj-dasar-pecahan)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-alj-dasar-pecahan-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-pecahan",
    category: "Penyederhanaan Pecahan Rasional Kuadratik",
    difficulty: "sedang",
    statement: "Bentuk sederhana dari pecahan aljabar $\\frac{x^2 - 4x + 3}{x^2 - 1}$ untuk $x \\neq \\pm 1$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{x - 3}{x - 1}$",
      "$\\frac{x - 3}{x + 1}$",
      "$\\frac{x + 3}{x + 1}$",
      "$\\frac{x - 1}{x + 1}$",
      "$\\frac{4x - 3}{1}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Faktorkan polinomial pembilang dan penyebut ke dalam faktor linier, kemudian lakukan penyederhanaan terhadap faktor yang sama.",
      steps: "1. Faktorkan pembilang $x^2 - 4x + 3$:\n$$x^2 - 4x + 3 = (x - 1)(x - 3)$$\n2. Faktorkan penyebut $x^2 - 1$ menggunakan selisih dua kuadrat:\n$$x^2 - 1 = (x - 1)(x + 1)$$\n3. Tuliskan pecahan secara utuh:\n$$\\frac{x^2 - 4x + 3}{x^2 - 1} = \\frac{(x - 1)(x - 3)}{(x - 1)(x + 1)}$$\n4. Coret faktor persekutuan $(x - 1)$:\n$$= \\frac{x - 3}{x + 1}$$\n5. Jadi, bentuk sederhananya adalah $\\frac{x - 3}{x + 1}$ (pilihan B).",
      pitfalls: "Membagi langsung suku-suku berderajat sama seperti membagi $x^2$ dengan $x^2$ sehingga menyisakan suku-suku yang tidak valid secara aljabar."
    }
  },
  {
    id: "fun-alj-dasar-pecahan-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-pecahan",
    category: "Pengurangan Pecahan Aljabar Penyebut Sekawan",
    difficulty: "sedang",
    statement: "Hasil dari operasi pengurangan pecahan $\\frac{1}{x - 1} - \\frac{1}{x + 1}$ untuk $x \\neq \\pm 1$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{2x}{x^2 - 1}$",
      "$\\frac{2}{x^2 - 1}$",
      "$0$",
      "$-\\frac{2}{x^2 - 1}$",
      "$\\frac{1}{x^2 - 1}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Operasi pengurangan dua pecahan aljabar dengan penyebut berbeda dilakukan dengan menyamakan penyebut ke KPK $(x - 1)(x + 1) = x^2 - 1$.",
      steps: "1. Samakan penyebut kedua pecahan aljabar:\n$$\\frac{1}{x - 1} - \\frac{1}{x + 1} = \\frac{(x + 1) - (x - 1)}{(x - 1)(x + 1)}$$\n2. Sederhanakan bagian pembilang dengan memperhatikan tanda negatif:\n$$(x + 1) - (x - 1) = x + 1 - x + 1 = 2$$\n3. Kalikan penyebut sekawan:\n$$(x - 1)(x + 1) = x^2 - 1$$\n4. Gabungkan hasil pembilang dan penyebut:\n$$= \\frac{2}{x^2 - 1}$$\n5. Jadi, hasilnya adalah $\\frac{2}{x^2 - 1}$ (pilihan B).",
      pitfalls: "Lupa mendistribusikan tanda minus ke $-1$ pada suku kedua pembilang sehingga salah menghitung $1 - 1 = 0$."
    }
  },
  {
    id: "fun-alj-dasar-pecahan-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-pecahan",
    category: "Penyederhanaan Pecahan Bersusun Kompleks",
    difficulty: "sedang",
    statement: "Bentuk sederhana dari pecahan bersusun $\\frac{1 - \\frac{1}{x}}{1 - \\frac{1}{x^2}}$ untuk $x \\neq 0$ dan $x \\neq \\pm 1$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{x + 1}$",
      "$\\frac{x}{x - 1}$",
      "$\\frac{x}{x + 1}$",
      "$\\frac{x + 1}{x}$",
      "$x$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pecahan kompleks dapat disederhanakan dengan mengalikan pembilang dan penyebut dengan penyebut persekutuan tertinggi (yaitu $x^2$) atau dengan menyederhanakan masing-masing tingkat.",
      steps: "1. Kalikan pembilang dan penyebut utama dengan $x^2$:\n$$\\frac{\\left(1 - \\frac{1}{x}\\right) \\cdot x^2}{\\left(1 - \\frac{1}{x^2}\\right) \\cdot x^2}$$\n2. Jabarkan hasil perkalian:\n$$\\text{Pembilang} = x^2 - x = x(x - 1)$$\n$$\\text{Penyebut} = x^2 - 1 = (x - 1)(x + 1)$$\n3. Tuliskan perbandingannya:\n$$= \\frac{x(x - 1)}{(x - 1)(x + 1)}$$\n4. Hilangkan faktor persekutuan $(x - 1)$:\n$$= \\frac{x}{x + 1}$$\n5. Jadi, bentuk sederhananya adalah $\\frac{x}{x + 1}$ (pilihan C).",
      pitfalls: "Membagi langsung suku demi suku tanpa menyamakan penyebut sehingga menghasilkan jawaban keliru seperti $\\frac{1}{x}$ atau $x$."
    }
  },
  {
    id: "fun-alj-dasar-pecahan-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-pecahan",
    category: "Pembagian Dua Pecahan Aljabar Rasional",
    difficulty: "sedang",
    statement: "Hasil pembagian pecahan aljabar $\\frac{x^2 - 4}{x^2 + 3x + 2} \\div \\frac{x - 2}{x + 1}$ untuk $x \\neq -2, -1, 2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$\\frac{x - 2}{x + 2}$",
      "$\\frac{x + 2}{x + 1}$",
      "$\\frac{(x - 2)^2}{(x + 1)^2}$",
      "$x + 2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pembagian pecahan diubah menjadi operasi perkalian dengan membalik pembilang dan penyebut pecahan pembagi: $\\frac{A}{B} \\div \\frac{C}{D} = \\frac{A}{B} \\times \\frac{D}{C}$.",
      steps: "1. Ubah operasi pembagian menjadi perkalian:\n$$\\frac{x^2 - 4}{x^2 + 3x + 2} \\times \\frac{x + 1}{x - 2}$$\n2. Faktorkan suku-suku kuadrat:\n$$x^2 - 4 = (x - 2)(x + 2)$$\n$$x^2 + 3x + 2 = (x + 1)(x + 2)$$\n3. Gabungkan seluruh faktor ke dalam satu bentuk pecahan:\n$$= \\frac{(x - 2)(x + 2)(x + 1)}{(x + 1)(x + 2)(x - 2)}$$\n4. Sederhanakan seluruh faktor yang identik:\n$$= 1$$\n5. Jadi, hasil pembagiannya adalah $1$ (pilihan A).",
      pitfalls: "Lupa membalik pecahan kedua saat mengubah operasi tanda bagi menjadi kali."
    }
  },
  {
    id: "fun-alj-dasar-pecahan-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-pecahan",
    category: "Penyederhanaan Pecahan Bersusun Dua Variabel",
    difficulty: "sedang",
    statement: "Bentuk sederhana dari pecahan aljabar $\\frac{\\frac{a}{b} - \\frac{b}{a}}{\\frac{1}{a} + \\frac{1}{b}}$ untuk $a, b \\neq 0$ dan $a + b \\neq 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$a + b$",
      "$a - b$",
      "$b - a$",
      "$\\frac{a - b}{ab}$",
      "$ab$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kalikan pembilang dan penyebut utama dengan faktor persekutuan $ab$ untuk mengubah pecahan bertingkat menjadi pecahan biasa.",
      steps: "1. Kalikan tingkat atas dan bawah dengan $ab$:\n$$\\frac{\\left(\\frac{a}{b} - \\frac{b}{a}\\right) \\cdot ab}{\\left(\\frac{1}{a} + \\frac{1}{b}\\right) \\cdot ab}$$\n2. Jabarkan masing-masing tingkat:\n$$\\text{Pembilang} = a^2 - b^2 = (a - b)(a + b)$$\n$$\\text{Penyebut} = b + a = a + b$$\n3. Tuliskan pecahannya:\n$$= \\frac{(a - b)(a + b)}{a + b}$$\n4. Batalkan faktor persekutuan $(a + b)$:\n$$= a - b$$\n5. Jadi, bentuk paling sederhananya adalah $a - b$ (pilihan B).",
      pitfalls: "Tertukar tanda selisih menjadi $b - a$ karena urutan suku pada penyebut adalah $b + a$."
    }
  }
];
