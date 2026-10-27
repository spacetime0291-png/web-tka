/**
 * Batch Task: TASK_fun-alj-dasar-operasi_MEDIUM
 * SubTopic: Aljabar Dasar: Operasi Aljabar & Pemfaktoran (fun-alj-dasar-operasi)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-alj-dasar-operasi-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-operasi",
    category: "Manipulasi Jumlah Kuadrat Simetris",
    difficulty: "sedang",
    statement: "Diketahui $a + b = 8$ dan $ab = 15$. Nilai dari $a^2 + b^2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$24$",
      "$30$",
      "$34$",
      "$49$",
      "$64$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan identitas aljabar kuadrat jumlah: $(a + b)^2 = a^2 + 2ab + b^2$, sehingga diperoleh rumus turunan $a^2 + b^2 = (a + b)^2 - 2ab$.",
      steps: "1. Kuadratkan persamaan $a + b = 8$:\n$$(a + b)^2 = 8^2 = 64$$\n2. Tuliskan bentuk penjabarannya:\n$$a^2 + 2ab + b^2 = 64$$\n3. Substitusikan nilai $ab = 15$:\n$$a^2 + 2(15) + b^2 = 64$$\n$$a^2 + 30 + b^2 = 64$$\n4. Kurangkan kedua ruas dengan 30:\n$$a^2 + b^2 = 64 - 30 = 34$$\n5. Jadi, nilai dari $a^2 + b^2$ adalah $34$ (pilihan C).",
      pitfalls: "Langsung menguadratkan nilai $(a + b)$ menjadi 64 tanpa mengurangkan suku $2ab$."
    }
  },
  {
    id: "fun-alj-dasar-operasi-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-operasi",
    category: "Pemfaktoran Persamaan Kuadrat Koefisien Utama Bukan Satu",
    difficulty: "sedang",
    statement: "Pemfaktoran penuh dari bentuk aljabar $2x^2 - 5x - 3$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(2x - 1)(x + 3)$",
      "$(2x + 1)(x - 3)$",
      "$(2x - 3)(x + 1)$",
      "$(2x + 3)(x - 1)$",
      "$(x - 3)(x + 1)$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pemfaktoran $ax^2 + bx + c$ dilakukan dengan mencari dua bilangan yang hasil kalinya sama dengan $a \\times c$ dan jumlahnya sama dengan $b$.",
      steps: "1. Nilai $a = 2$, $b = -5$, $c = -3$. Hitung $a \\times c = 2 \\times (-3) = -6$.\n2. Cari dua bilangan yang hasil kalinya $-6$ dan jumlahnya $-5$, yaitu $-6$ dan $+1$.\n3. Pecah suku tengah $-5x$ menjadi $-6x + x$:\n$$2x^2 - 5x - 3 = 2x^2 - 6x + x - 3$$\n4. Lakukan pengelompokan (grouping):\n$$= 2x(x - 3) + 1(x - 3) = (2x + 1)(x - 3)$$\n5. Jadi, pemfaktoran yang benar adalah $(2x + 1)(x - 3)$ (pilihan B).",
      pitfalls: "Tertukar tanda menjadi $(2x - 1)(x + 3)$ yang jika dijabarkan menghasilkan suku tengah $+5x$, bukan $-5x$."
    }
  },
  {
    id: "fun-alj-dasar-operasi-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-operasi",
    category: "Penjumlahan Kuadrat Variabel Resiprokal",
    difficulty: "sedang",
    statement: "Jika diketahui $x + \\frac{1}{x} = 5$, maka nilai dari $x^2 + \\frac{1}{x^2}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$21$",
      "$23$",
      "$25$",
      "$27$",
      "$29$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kuadrat dari suku resiprokal menghasilkan suku tengah bernilai konstan $2$, yaitu $\\left(x + \\frac{1}{x}\\right)^2 = x^2 + 2 + \\frac{1}{x^2}$.",
      steps: "1. Kuadratkan kedua ruas persamaan:\n$$\\left(x + \\frac{1}{x}\\right)^2 = 5^2$$\n2. Uraikan bentuk kuadrat binomial:\n$$x^2 + 2(x)\\left(\\frac{1}{x}\\right) + \\frac{1}{x^2} = 25$$\n3. Karena $x \\times \\frac{1}{x} = 1$, maka:\n$$x^2 + 2 + \\frac{1}{x^2} = 25$$\n4. Kurangkan kedua ruas dengan 2:\n$$x^2 + \\frac{1}{x^2} = 25 - 2 = 23$$\n5. Jadi, nilai dari $x^2 + \\frac{1}{x^2}$ adalah $23$ (pilihan B).",
      pitfalls: "Mengabaikan suku konstan 2 sehingga menjawab $5^2 = 25$, atau menambahkan 2 sehingga menjawab 27."
    }
  },
  {
    id: "fun-alj-dasar-operasi-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-operasi",
    category: "Aplikasi Selisih Kuadrat pada Operasi Bilangan Besar",
    difficulty: "sedang",
    statement: "Nilai dari ekspresi $\\frac{2025^2 - 2024^2}{2025 + 2024}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$2024$",
      "$2025$",
      "$4049$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Faktorkan bagian pembilang dengan aturan selisih dua kuadrat $a^2 - b^2 = (a - b)(a + b)$.",
      steps: "1. Misalkan $a = 2025$ dan $b = 2024$.\n2. Faktorkan pembilang pecahan:\n$$a^2 - b^2 = (a - b)(a + b)$$\n$$2025^2 - 2024^2 = (2025 - 2024)(2025 + 2024)$$\n3. Substitusikan kembali ke bentuk pecahan:\n$$\\frac{(2025 - 2024)(2025 + 2024)}{2025 + 2024}$$\n4. Lakukan penyederhanaan dengan membagi faktor yang sama $(2025 + 2024)$:\n$$= 2025 - 2024 = 1$$\n5. Jadi, nilai dari ekspresi tersebut adalah $1$ (pilihan A).",
      pitfalls: "Mencoba menghitung nilai kuadrat bilangan secara manual yang memakan banyak waktu dan rentan kekeliruan perhitungan."
    }
  },
  {
    id: "fun-alj-dasar-operasi-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-operasi",
    category: "Sistem Persamaan Selisih Kuadrat",
    difficulty: "sedang",
    statement: "Diketahui dua bilangan real memenuhi sistem persamaan $x - y = 4$ dan $x^2 - y^2 = 28$. Nilai dari $x + y$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4$",
      "$6$",
      "$7$",
      "$8$",
      "$14$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Bentuk selisih kuadrat $x^2 - y^2$ dapat dinyatakan sebagai perkalian $(x - y)(x + y)$.",
      steps: "1. Faktorkan persamaan kuadrat yang diketahui:\n$$x^2 - y^2 = (x - y)(x + y)$$\n2. Substitusikan nilai $x^2 - y^2 = 28$ dan $x - y = 4$:\n$$28 = 4(x + y)$$\n3. Bagi kedua ruas dengan 4:\n$$x + y = \\frac{28}{4} = 7$$\n4. Jadi, nilai dari $x + y$ adalah $7$ (pilihan C).",
      pitfalls: "Mencari nilai $x$ dan $y$ satu per satu melalui eliminasi/substitusi rumit alih-alih langsung membagi nilai persamaan selisih kuadrat."
    }
  }
];
