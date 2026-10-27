/**
 * Batch Task: TASK_fun-alj-dasar-pecahan_EASY
 * SubTopic: Aljabar Dasar: Pecahan Bentuk Aljabar (fun-alj-dasar-pecahan)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-alj-dasar-pecahan-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-pecahan",
    category: "Penyederhanaan Suku Tunggal Aljabar",
    difficulty: "mudah",
    statement: "Bentuk sederhana dari pecahan aljabar $\\frac{6x^3 y^2}{2x y^4}$ untuk $x \\neq 0$ dan $y \\neq 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{3x^2}{y^2}$",
      "$\\frac{3x^4}{y^6}$",
      "$\\frac{3x^2}{y^3}$",
      "$\\frac{4x^2}{y^2}$",
      "$3x^2 y^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Penyederhanaan monomial aljabar dilakukan dengan membagi koefisien numerik dan mengurangkan pangkat variabel sejenis: $\\frac{a^m}{a^n} = a^{m-n}$.",
      steps: "1. Bagi bagian koefisien numerik:\n$$\\frac{6}{2} = 3$$\n2. Sederhanakan variabel $x$:\n$$\\frac{x^3}{x^1} = x^{3 - 1} = x^2$$\n3. Sederhanakan variabel $y$:\n$$\\frac{y^2}{y^4} = \\frac{1}{y^{4 - 2}} = \\frac{1}{y^2}$$\n4. Gabungkan ketiga komponen:\n$$= \\frac{3x^2}{y^2}$$\n5. Jadi, bentuk sederhananya adalah $\\frac{3x^2}{y^2}$ (pilihan A).",
      pitfalls: "Menjumlahkan eksponen variabel (menjadi $y^6$) alih-alih mengurangkannya pada operasi pembagian."
    }
  },
  {
    id: "fun-alj-dasar-pecahan-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-pecahan",
    category: "Penyederhanaan Selisih Kuadrat dengan Penyebut Binomial",
    difficulty: "mudah",
    statement: "Bentuk sederhana dari pecahan aljabar $\\frac{x^2 - 9}{x + 3}$ untuk $x \\neq -3$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x + 3$",
      "$x - 3$",
      "$x - 9$",
      "$x - 1$",
      "$\\frac{x - 3}{x + 3}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Faktorkan bagian pembilang dengan aturan selisih dua kuadrat $a^2 - b^2 = (a - b)(a + b)$ sebelum membaginya dengan penyebut.",
      steps: "1. Uraikan pembilang $x^2 - 9$ menjadi bentuk selisih kuadrat:\n$$x^2 - 9 = (x - 3)(x + 3)$$\n2. Tuliskan kembali bentuk pecahannya:\n$$\\frac{(x - 3)(x + 3)}{x + 3}$$\n3. Coret faktor persekutuan $(x + 3)$:\n$$= x - 3$$\n4. Jadi, bentuk sederhananya adalah $x - 3$ (pilihan B).",
      pitfalls: "Membagi suku per suku secara langsung (seperti $\\frac{x^2}{x} - \\frac{9}{3}$) yang melanggar kaidah aljabar dasar."
    }
  },
  {
    id: "fun-alj-dasar-pecahan-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-pecahan",
    category: "Penjumlahan Pecahan Aljabar Beda Penyebut",
    difficulty: "mudah",
    statement: "Hasil penjumlahan dari $\\frac{2}{x} + \\frac{3}{y}$ untuk $x \\neq 0$ dan $y \\neq 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{5}{x + y}$",
      "$\\frac{5}{xy}$",
      "$\\frac{3x + 2y}{xy}$",
      "$\\frac{2x + 3y}{xy}$",
      "$\\frac{6}{xy}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Untuk menjumlahkan pecahan dengan penyebut berbeda, samakan penyebutnya ke KPK penyebut, yaitu $xy$.",
      steps: "1. Tentukan penyebut persekutuan, yaitu $xy$.\n2. Sesuaikan masing-masing pembilang:\n$$\\frac{2}{x} = \\frac{2y}{xy}$$\n$$\\frac{3}{y} = \\frac{3x}{xy}$$\n3. Jumlahkan kedua pembilang:\n$$\\frac{2y}{xy} + \\frac{3x}{xy} = \\frac{3x + 2y}{xy}$$\n4. Jadi, hasil penjumlahan pecahan tersebut adalah $\\frac{3x + 2y}{xy}$ (pilihan C).",
      pitfalls: "Menjumlahkan langsung pembilang dan penyebut menjadi $\\frac{2 + 3}{x + y} = \\frac{5}{x + y}$."
    }
  },
  {
    id: "fun-alj-dasar-pecahan-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-pecahan",
    category: "Perkalian Pecahan Aljabar Rasional",
    difficulty: "mudah",
    statement: "Hasil perkalian pecahan aljabar $\\frac{x}{x - 2} \\times \\frac{x^2 - 4}{x}$ untuk $x \\neq 0$ dan $x \\neq 2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x - 2$",
      "$x + 2$",
      "$x(x + 2)$",
      "$\\frac{x + 2}{x - 2}$",
      "$1$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pada perkalian pecahan aljabar, faktorkan suku-suku yang dapat difaktorkan terlebih dahulu, lalu hilangkan faktor pembagi yang sama.",
      steps: "1. Faktorkan $x^2 - 4$ menjadi $(x - 2)(x + 2)$:\n$$\\frac{x}{x - 2} \\times \\frac{(x - 2)(x + 2)}{x}$$\n2. Tuliskan dalam satu kesatuan pecahan:\n$$= \\frac{x(x - 2)(x + 2)}{x(x - 2)}$$\n3. Lakukan penyederhanaan dengan mencoret faktor $x$ dan $(x - 2)$:\n$$= x + 2$$\n4. Jadi, hasil akhirnya adalah $x + 2$ (pilihan B).",
      pitfalls: "Mengalikan suku secara langsung sehingga menjadi $\\frac{x^3 - 4x}{x^2 - 2x}$ tanpa menyederhanakannya."
    }
  },
  {
    id: "fun-alj-dasar-pecahan-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-pecahan",
    category: "Pengurangan Pecahan Aljabar Penyebut Sama",
    difficulty: "mudah",
    statement: "Hasil pengurangan pecahan aljabar $\\frac{5}{2x} - \\frac{1}{2x}$ untuk $x \\neq 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{2}{x}$",
      "$\\frac{4}{x}$",
      "$\\frac{1}{x}$",
      "$\\frac{2}{x^2}$",
      "$\\frac{4}{2x^2}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pecahan aljabar dengan penyebut yang sama dapat langsung dikurangkan pembilangnya, kemudian disederhanakan bila terdapat faktor persekutuan.",
      steps: "1. Kurangkan langsung bagian pembilangnya karena penyebut sudah sama ($2x$):\n$$\\frac{5}{2x} - \\frac{1}{2x} = \\frac{5 - 1}{2x} = \\frac{4}{2x}$$\n2. Sederhanakan koefisien numerik dengan membagi pembilang dan penyebut dengan $2$:\n$$\\frac{4}{2x} = \\frac{2}{x}$$\n3. Jadi, hasil pengurangan dalam bentuk paling sederhana adalah $\\frac{2}{x}$ (pilihan A).",
      pitfalls: "Lupa menyederhanakan pecahan $\\frac{4}{2x}$ menjadi $\\frac{2}{x}$ atau mengurangkan penyebutnya sehingga menghasilkan penyebut 0."
    }
  }
];
