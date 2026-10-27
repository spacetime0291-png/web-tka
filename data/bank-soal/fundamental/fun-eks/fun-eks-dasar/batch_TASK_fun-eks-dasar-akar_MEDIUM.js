/**
 * Batch Task: TASK_fun-eks-dasar-akar_MEDIUM
 * SubTopic: Eksponen & Logaritma Dasar: Bentuk Akar & Rasionalisasi (fun-eks-dasar-akar)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-eks-dasar-akar-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-akar",
    category: "Rasionalisasi Pecahan Bentuk Sekawan Binomial",
    difficulty: "sedang",
    statement: "Bentuk rasional dari pecahan $\\frac{4}{\\sqrt{5} - 1}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\sqrt{5} - 1$",
      "$\\sqrt{5} + 1$",
      "$2(\\sqrt{5} + 1)$",
      "$4(\\sqrt{5} + 1)$",
      "$\\frac{\\sqrt{5} + 1}{4}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Rasionalisasi penyebut berbentuk $\\sqrt{a} - b$ dilakukan dengan mengalikan pembilang dan penyebut dengan bentuk sekawannya, yaitu $\\sqrt{a} + b$.",
      steps: "1. Kalikan pecahan dengan bentuk sekawan $\\frac{\\sqrt{5} + 1}{\\sqrt{5} + 1}$:\n$$\\frac{4}{\\sqrt{5} - 1} \\times \\frac{\\sqrt{5} + 1}{\\sqrt{5} + 1}$$\n2. Uraikan bagian penyebut menggunakan selisih dua kuadrat $(a - b)(a + b) = a^2 - b^2$:\n$$(\\sqrt{5})^2 - 1^2 = 5 - 1 = 4$$\n3. Tuliskan pecahan secara lengkap:\n$$= \\frac{4(\\sqrt{5} + 1)}{4}$$\n4. Sederhanakan dengan membagi angka 4:\n$$= \\sqrt{5} + 1$$\n5. Jadi, bentuk rasionalnya adalah $\\sqrt{5} + 1$ (pilihan B).",
      pitfalls: "Lupa menguadratkan angka 1 pada penyebut $(5 - 1 = 4)$ dan keliru menulis $5 - 1 = 5$."
    }
  },
  {
    id: "fun-eks-dasar-akar-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-akar",
    category: "Rasionalisasi Penyebut Jumlah Dua Bentuk Akar",
    difficulty: "sedang",
    statement: "Bentuk rasional dari pecahan $\\frac{\\sqrt{3}}{\\sqrt{3} + \\sqrt{2}}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3 + \\sqrt{6}$",
      "$3 - \\sqrt{6}$",
      "$\\sqrt{6} - 3$",
      "$1 - \\sqrt{6}$",
      "$\\frac{3 - \\sqrt{6}}{5}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kalikan pembilang dan penyebut dengan bentuk sekawan $(\\sqrt{3} - \\sqrt{2})$ agar penyebut berubah menjadi selisih kuadrat rasional.",
      steps: "1. Kalikan dengan pecahan sekawan:\n$$\\frac{\\sqrt{3}}{\\sqrt{3} + \\sqrt{2}} \\times \\frac{\\sqrt{3} - \\sqrt{2}}{\\sqrt{3} - \\sqrt{2}}$$\n2. Hitung bagian penyebut:\n$$(\\sqrt{3})^2 - (\\sqrt{2})^2 = 3 - 2 = 1$$\n3. Jabarkan bagian pembilang:\n$$\\sqrt{3}(\\sqrt{3} - \\sqrt{2}) = \\sqrt{3} \\times \\sqrt{3} - \\sqrt{3} \\times \\sqrt{2} = 3 - \\sqrt{6}$$\n4. Gabungkan hasil pembagian dengan 1:\n$$= 3 - \\sqrt{6}$$\n5. Jadi, bentuk rasionalnya adalah $3 - \\sqrt{6}$ (pilihan B).",
      pitfalls: "Menjumlahkan kuadrat penyebut $(3 + 2 = 5)$ alih-alih mengurangkannya."
    }
  },
  {
    id: "fun-eks-dasar-akar-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-akar",
    category: "Menyederhanakan Bentuk Akar di Dalam Akar",
    difficulty: "sedang",
    statement: "Bentuk sederhana dari ekspresi akar bertingkat $\\sqrt{8 + 2\\sqrt{15}}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\sqrt{5} + \\sqrt{3}$",
      "$\\sqrt{6} + \\sqrt{2}$",
      "$\\sqrt{5} - \\sqrt{3}$",
      "$2\\sqrt{2} + \\sqrt{3}$",
      "$\\sqrt{10} + \\sqrt{3}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Bentuk $\\sqrt{(a + b) \\pm 2\\sqrt{ab}}$ ekuivalen dengan $\\sqrt{a} \\pm \\sqrt{b}$ dengan $a > b > 0$.",
      steps: "1. Identifikasi bentuk umum $\\sqrt{p + 2\\sqrt{q}}$:\n$$p = 8, \\quad q = 15$$\n2. Cari dua bilangan positif $a$ dan $b$ yang memenuhi sistem:\n$$a + b = 8$$\n$$a \\cdot b = 15$$\n3. Dua bilangan yang memenuhi adalah $a = 5$ dan $b = 3$.\n4. Bentuk akarnya dapat disederhanakan menjadi:\n$$\\sqrt{8 + 2\\sqrt{15}} = \\sqrt{5} + \\sqrt{3}$$\n5. Jadi, bentuk sederhananya adalah $\\sqrt{5} + \\sqrt{3}$ (pilihan A).",
      pitfalls: "Memilih pasangan bilangan lain seperti 6 dan 2 yang jumlahnya 8 tetapi hasil kalinya 12, bukan 15."
    }
  },
  {
    id: "fun-eks-dasar-akar-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-akar",
    category: "Operasi Selisih Dua Pecahan Bentuk Akar Sekawan",
    difficulty: "sedang",
    statement: "Hasil dari operasi $\\frac{1}{\\sqrt{7} - \\sqrt{6}} - \\frac{1}{\\sqrt{6} - \\sqrt{5}}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\sqrt{7} + \\sqrt{5}$",
      "$\\sqrt{7} - \\sqrt{5}$",
      "$2\\sqrt{6}$",
      "$-\\sqrt{7} - \\sqrt{5}$",
      "$0$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Rasionalkan masing-masing pecahan terlebih dahulu sebelum melakukan operasi pengurangan aljabar.",
      steps: "1. Rasionalkan pecahan pertama:\n$$\\frac{1}{\\sqrt{7} - \\sqrt{6}} = \\frac{\\sqrt{7} + \\sqrt{6}}{7 - 6} = \\sqrt{7} + \\sqrt{6}$$\n2. Rasionalkan pecahan kedua:\n$$\\frac{1}{\\sqrt{6} - \\sqrt{5}} = \\frac{\\sqrt{6} + \\sqrt{5}}{6 - 5} = \\sqrt{6} + \\sqrt{5}$$\n3. Kurangkan kedua hasil rasionalisasi:\n$$(\\sqrt{7} + \\sqrt{6}) - (\\sqrt{6} + \\sqrt{5})$$\n$$= \\sqrt{7} + \\sqrt{6} - \\sqrt{6} - \\sqrt{5}$$\n$$= \\sqrt{7} - \\sqrt{5}$$\n4. Jadi, hasilnya adalah $\\sqrt{7} - \\sqrt{5}$ (pilihan B).",
      pitfalls: "Lupa mendistribusikan tanda minus ke suku $\\sqrt{5}$ sehingga keliru menjawab $\\sqrt{7} + \\sqrt{5}$."
    }
  },
  {
    id: "fun-eks-dasar-akar-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-akar",
    category: "Perkalian Binomial Bentuk Akar Sekawan",
    difficulty: "sedang",
    statement: "Nilai dari ekspresi perkalian $(2\\sqrt{3} - 3\\sqrt{2})(2\\sqrt{3} + 3\\sqrt{2})$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-6$",
      "$-3$",
      "$0$",
      "$6$",
      "$30$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gunakan identitas selisih dua kuadrat $(a - b)(a + b) = a^2 - b^2$.",
      steps: "1. Identifikasi suku-suku binomial:\n$$a = 2\\sqrt{3}, \\quad b = 3\\sqrt{2}$$\n2. Terapkan rumus selisih dua kuadrat:\n$$(2\\sqrt{3} - 3\\sqrt{2})(2\\sqrt{3} + 3\\sqrt{2}) = (2\\sqrt{3})^2 - (3\\sqrt{2})^2$$\n3. Kuadratkan masing-masing suku secara teliti:\n$$(2\\sqrt{3})^2 = 2^2 \\times 3 = 4 \\times 3 = 12$$\n$$(3\\sqrt{2})^2 = 3^2 \\times 2 = 9 \\times 2 = 18$$\n4. Hitung hasil pengurangannya:\n$$12 - 18 = -6$$\n5. Jadi, nilai ekspresi tersebut adalah $-6$ (pilihan A).",
      pitfalls: "Hanya menguadratkan radikan tanpa menguadratkan koefisien luarnya sehingga menghitung $3 - 2 = 1$."
    }
  }
];
