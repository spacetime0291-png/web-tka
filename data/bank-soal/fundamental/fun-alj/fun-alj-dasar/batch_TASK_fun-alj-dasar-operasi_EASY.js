/**
 * Batch Task: TASK_fun-alj-dasar-operasi_EASY
 * SubTopic: Aljabar Dasar: Operasi Aljabar & Pemfaktoran (fun-alj-dasar-operasi)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-alj-dasar-operasi-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-operasi",
    category: "Penjabaran Distributif Suku Dua",
    difficulty: "mudah",
    statement: "Hasil penjabaran dari perkalian bentuk aljabar $(2x - 3)(x + 4)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2x^2 + 5x - 12$",
      "$2x^2 - 5x - 12$",
      "$2x^2 + 11x - 12$",
      "$2x^2 + 5x + 12$",
      "$2x^2 - 11x - 12$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gunakan sifat distributif perkalian aljabar $(ax + b)(cx + d) = acx^2 + (ad + bc)x + bd$.",
      steps: "1. Kalikan suku pertama dengan kedua suku pada kurung kedua:\n$$2x \\times x = 2x^2$$\n$$2x \\times 4 = 8x$$\n2. Kalikan suku kedua dengan kedua suku pada kurung kedua:\n$$-3 \\times x = -3x$$\n$$-3 \\times 4 = -12$$\n3. Gabungkan suku-suku yang sejenis:\n$$2x^2 + 8x - 3x - 12 = 2x^2 + 5x - 12$$\n4. Jadi, hasil penjabarannya adalah $2x^2 + 5x - 12$ (pilihan A).",
      pitfalls: "Keliru dalam menjumlahkan suku sejenis $8x - 3x$ menjadi $-5x$ atau $11x$ karena kurang teliti pada tanda minus."
    }
  },
  {
    id: "fun-alj-dasar-operasi-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-operasi",
    category: "Pemfaktoran Selisih Dua Kuadrat",
    difficulty: "mudah",
    statement: "Bentuk pemfaktoran dari ekspresi selisih kuadrat $x^2 - 16$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(x - 2)(x + 8)$",
      "$(x - 4)^2$",
      "$(x + 4)^2$",
      "$(x - 4)(x + 4)$",
      "$(x - 16)(x + 1)$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Rumus dasar selisih dua kuadrat menyatakan bahwa $a^2 - b^2 = (a - b)(a + b)$.",
      steps: "1. Identifikasi bentuk kuadrat masing-masing suku:\n$$x^2 - 16 = x^2 - 4^2$$\n2. Terapkan rumus selisih kuadrat dengan $a = x$ dan $b = 4$:\n$$a^2 - b^2 = (a - b)(a + b)$$\n$$x^2 - 4^2 = (x - 4)(x + 4)$$\n3. Jadi, bentuk pemfaktoran yang benar adalah $(x - 4)(x + 4)$ (pilihan D).",
      pitfalls: "Memilih $(x - 4)^2$ yang merupakan bentuk kuadrat sempurna dari $x^2 - 8x + 16$ alih-alih selisih kuadrat."
    }
  },
  {
    id: "fun-alj-dasar-operasi-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-operasi",
    category: "Pemfaktoran Kuadrat Sempurna",
    difficulty: "mudah",
    statement: "Bentuk pemfaktoran kuadrat sempurna dari $x^2 + 10x + 25$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(x + 25)^2$",
      "$(x - 5)^2$",
      "$(x + 5)^2$",
      "$(x + 5)(x - 5)$",
      "$(x + 2)(x + 5)$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Bentuk kuadrat sempurna trinomial dirumuskan sebagai $a^2 + 2ab + b^2 = (a + b)^2$.",
      steps: "1. Analisis suku-suku trinomial:\n$$\\text{Suku awal} = x^2 = (x)^2$$\n$$\\text{Suku akhir} = 25 = (5)^2$$\n$$\\text{Suku tengah} = 10x = 2(x)(5)$$\n2. Karena suku tengah memenuhi $2ab$, maka trinomial merupakan bentuk kuadrat sempurna:\n$$x^2 + 10x + 25 = (x + 5)^2$$\n3. Jadi, pemfaktoran yang benar adalah $(x + 5)^2$ (pilihan C).",
      pitfalls: "Tertukar dengan bentuk kuadrat sempurna negatif $(x - 5)^2$ atau pemfaktoran selisih kuadrat $(x - 5)(x + 5)$."
    }
  },
  {
    id: "fun-alj-dasar-operasi-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-operasi",
    category: "Pengkuadratan Suku Dua Binomial",
    difficulty: "mudah",
    statement: "Hasil pengkuadratan bentuk aljabar $(3a - 2b)^2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$9a^2 - 4b^2$",
      "$9a^2 + 4b^2$",
      "$9a^2 - 6ab + 4b^2$",
      "$9a^2 - 12ab + 4b^2$",
      "$9a^2 - 12ab - 4b^2$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Rumus penjabaran kuadrat suku dua adalah $(x - y)^2 = x^2 - 2xy + y^2$.",
      steps: "1. Terapkan rumus dengan $x = 3a$ dan $y = 2b$:\n$$(3a - 2b)^2 = (3a)^2 - 2(3a)(2b) + (2b)^2$$\n2. Hitung masing-masing suku secara teliti:\n$$(3a)^2 = 9a^2$$\n$$-2(3a)(2b) = -12ab$$\n$$(2b)^2 = 4b^2$$\n3. Gabungkan seluruh suku:\n$$= 9a^2 - 12ab + 4b^2$$\n4. Jadi, hasil pengkuadratannya adalah $9a^2 - 12ab + 4b^2$ (pilihan D).",
      pitfalls: "Lupa menghitung suku tengah $-2xy$ sehingga hanya menguadratkan suku depan dan belakang menjadi $9a^2 - 4b^2$."
    }
  },
  {
    id: "fun-alj-dasar-operasi-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-operasi",
    category: "Pemfaktoran Persamaan Kuadrat Standar",
    difficulty: "mudah",
    statement: "Pemfaktoran yang benar dari bentuk aljabar $x^2 - 5x + 6$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(x - 1)(x - 6)$",
      "$(x + 1)(x - 6)$",
      "$(x - 2)(x - 3)$",
      "$(x + 2)(x + 3)$",
      "$(x + 2)(x - 3)$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Trinomial $x^2 + bx + c$ dapat difaktorkan menjadi $(x + p)(x + q)$ dengan syarat $p + q = b$ dan $p \\times q = c$.",
      steps: "1. Nilai koefisien yang dicocokkan adalah $b = -5$ dan $c = +6$.\n2. Cari pasangan faktor dari $+6$ yang jika dijumlahkan bernilai $-5$:\n$$(-2) \\times (-3) = +6$$\n$$(-2) + (-3) = -5$$\n3. Bentuk pemfaktorannya adalah:\n$$x^2 - 5x + 6 = (x - 2)(x - 3)$$\n4. Jadi, pemfaktoran yang benar adalah $(x - 2)(x - 3)$ (pilihan C).",
      pitfalls: "Memilih $(x + 1)(x - 6)$ karena $1 - 6 = -5$, namun perkaliannya $1 \\times (-6) = -6$, bukan $+6$."
    }
  }
];
