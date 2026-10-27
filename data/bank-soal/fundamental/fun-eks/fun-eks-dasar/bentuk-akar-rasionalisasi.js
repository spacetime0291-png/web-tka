/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Eksponen dan Logaritma
 * Bab Kecil: Sifat Eksponen & Logaritma (fun-eks-dasar)
 * Sub-Bab: Bentuk Akar & Rasionalisasi (fun-eks-dasar-akar)
 * Slug: bentuk-akar-rasionalisasi
 * Indikator: Operasi aljabar bentuk akar dan rasionalisasi penyebut pecahan bentuk akar kuadrat.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-eks-dasar-akar";
  const subTopicSlug = "bentuk-akar-rasionalisasi";
  const questions = [
  {
    "id": "fun-eks-dasar-akar-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-akar",
    "category": "Penyederhanaan Bentuk Akar Dasar",
    "difficulty": "mudah",
    "statement": "Bentuk sederhana dari bentuk akar $\\sqrt{72}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3\\sqrt{8}$",
      "$4\\sqrt{3}$",
      "$6\\sqrt{2}$",
      "$8\\sqrt{3}$",
      "$12\\sqrt{2}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Penyederhanaan bentuk akar dilakukan dengan memfaktorkan radikan menjadi perkalian faktor kuadrat terbesar: $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$.",
      "steps": "1. Cari faktor kuadrat sempurna terbesar dari 72:\n$$72 = 36 \\times 2$$\n2. Uraikan bentuk akarnya:\n$$\\sqrt{72} = \\sqrt{36 \\times 2} = \\sqrt{36} \\times \\sqrt{2}$$\n3. Tarik nilai akar kuadrat dari 36:\n$$= 6\\sqrt{2}$$\n4. Jadi, bentuk sederhananya adalah $6\\sqrt{2}$ (pilihan C).",
      "pitfalls": "Memfaktorkan dengan kuadrat yang lebih kecil seperti $9 \\times 8 = 3\\sqrt{8}$ tanpa menyederhanakan $\\sqrt{8}$ lebih lanjut."
    },
    "subTopicSlug": "bentuk-akar-rasionalisasi",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Bentuk Akar & Rasionalisasi",
    "subTopic": "Bentuk Akar & Rasionalisasi",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah",
    "hint": "Penyederhanaan bentuk akar dilakukan dengan memfaktorkan radikan menjadi perkalian faktor kuadrat terbesar: $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$."
  },
  {
    "id": "fun-eks-dasar-akar-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-akar",
    "category": "Operasi Penjumlahan dan Pengurangan Bentuk Akar Sejenis",
    "difficulty": "mudah",
    "statement": "Hasil dari operasi aljabar $3\\sqrt{5} + 7\\sqrt{5} - 4\\sqrt{5}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\sqrt{5}$",
      "$5\\sqrt{5}$",
      "$6\\sqrt{5}$",
      "$7\\sqrt{5}$",
      "$14\\sqrt{5}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Bentuk akar sejenis dapat dijumlahkan atau dikurangkan koefisiennya menggunakan sifat distributif: $a\\sqrt{c} + b\\sqrt{c} = (a + b)\\sqrt{c}$.",
      "steps": "1. Perhatikan bahwa seluruh suku memiliki radikan yang sama, yaitu $\\sqrt{5}$.\n2. Kelompokkan seluruh koefisien di depan tanda akar:\n$$(3 + 7 - 4)\\sqrt{5}$$\n3. Hitung hasil aritmetika koefisien:\n$$3 + 7 - 4 = 10 - 4 = 6$$\n4. Gabungkan kembali dengan bentuk akar:\n$$= 6\\sqrt{5}$$\n5. Jadi, hasil akhirnya adalah $6\\sqrt{5}$ (pilihan C).",
      "pitfalls": "Melakukan operasi pada bilangan di dalam akar sehingga menghasilkan nilai yang salah."
    },
    "subTopicSlug": "bentuk-akar-rasionalisasi",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Bentuk Akar & Rasionalisasi",
    "subTopic": "Bentuk Akar & Rasionalisasi",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah",
    "hint": "Bentuk akar sejenis dapat dijumlahkan atau dikurangkan koefisiennya menggunakan sifat distributif: $a\\sqrt{c} + b\\sqrt{c} = (a + b)\\sqrt{c}$. **Tips:** Melakukan operasi pada bilangan di dalam akar sehingga menghasilkan nilai yang salah."
  },
  {
    "id": "fun-eks-dasar-akar-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-akar",
    "category": "Rasionalisasi Penyebut Tunggal Sederhana",
    "difficulty": "mudah",
    "statement": "Bentuk rasional dari pecahan $\\frac{6}{\\sqrt{3}}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\sqrt{3}$",
      "$2\\sqrt{3}$",
      "$3\\sqrt{3}$",
      "$6\\sqrt{3}$",
      "$\\frac{1}{2}\\sqrt{3}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Rasionalisasi penyebut tunggal dilakukan dengan mengalikan pembilang dan penyebut dengan bentuk akar penyebutnya: $\\frac{a}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}$.",
      "steps": "1. Kalikan pecahan dengan $\\frac{\\sqrt{3}}{\\sqrt{3}}$:\n$$\\frac{6}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}}$$\n2. Kalikan pembilang dan penyebut:\n$$= \\frac{6\\sqrt{3}}{3}$$\n3. Sederhanakan koefisien numerik:\n$$= 2\\sqrt{3}$$\n4. Jadi, bentuk rasionalnya adalah $2\\sqrt{3}$ (pilihan B).",
      "pitfalls": "Lupa membagi dengan 3 pada penyebut sehingga mengira jawabannya adalah $6\\sqrt{3}$."
    },
    "subTopicSlug": "bentuk-akar-rasionalisasi",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Bentuk Akar & Rasionalisasi",
    "subTopic": "Bentuk Akar & Rasionalisasi",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah",
    "hint": "Rasionalisasi penyebut tunggal dilakukan dengan mengalikan pembilang dan penyebut dengan bentuk akar penyebutnya: $\\frac{a}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}$. **Tips:** Lupa membagi dengan 3 pada penyebut sehingga mengira jawabannya adalah $6\\sqrt{3}$."
  },
  {
    "id": "fun-eks-dasar-akar-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-akar",
    "category": "Perkalian Dua Bentuk Akar Kuadrat",
    "difficulty": "mudah",
    "statement": "Hasil perkalian $\\sqrt{6} \\times \\sqrt{8}$ dalam bentuk paling sederhana adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\sqrt{6}$",
      "$3\\sqrt{4}$",
      "$4\\sqrt{3}$",
      "$6\\sqrt{2}$",
      "$48$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan sifat perkalian bentuk akar $\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$, lalu sederhanakan radikan hasilnya.",
      "steps": "1. Kalikan bilangan di dalam akar:\n$$\\sqrt{6} \\times \\sqrt{8} = \\sqrt{6 \\times 8} = \\sqrt{48}$$\n2. Faktorkan 48 dengan faktor kuadrat terbesar:\n$$48 = 16 \\times 3$$\n3. Tarik akar dari 16:\n$$\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$$\n4. Jadi, hasil perkalian dalam bentuk paling sederhana adalah $4\\sqrt{3}$ (pilihan C).",
      "pitfalls": "Menjawab $\\sqrt{48}$ tanpa menyederhanakannya menjadi bentuk akar paling sederhana."
    },
    "subTopicSlug": "bentuk-akar-rasionalisasi",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Bentuk Akar & Rasionalisasi",
    "subTopic": "Bentuk Akar & Rasionalisasi",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan sifat perkalian bentuk akar $\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$, lalu sederhanakan radikan hasilnya. **Tips:** Menjawab $\\sqrt{48}$ tanpa menyederhanakannya menjadi bentuk akar paling sederhana."
  },
  {
    "id": "fun-eks-dasar-akar-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-akar",
    "category": "Rasionalisasi Pecahan Berkoefisien di Penyebut",
    "difficulty": "mudah",
    "statement": "Bentuk sederhana dari pecahan $\\frac{10}{3\\sqrt{5}}$ setelah dirasionalkan penyebutnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{3}\\sqrt{5}$",
      "$\\frac{2}{3}\\sqrt{5}$",
      "$\\frac{5}{3}\\sqrt{5}$",
      "$2\\sqrt{5}$",
      "$\\frac{10}{3}\\sqrt{5}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Rasionalisasi pecahan dengan penyebut $c\\sqrt{b}$ cukup dilakukan dengan mengalikan pembilang dan penyebut dengan $\\sqrt{b}$.",
      "steps": "1. Kalikan pembilang dan penyebut dengan $\\sqrt{5}$:\n$$\\frac{10}{3\\sqrt{5}} \\times \\frac{\\sqrt{5}}{\\sqrt{5}}$$\n2. Sederhanakan penyebut:\n$$= \\frac{10\\sqrt{5}}{3 \\times 5} = \\frac{10\\sqrt{5}}{15}$$\n3. Bagi pembilang dan penyebut dengan faktor 5:\n$$= \\frac{2}{3}\\sqrt{5}$$\n4. Jadi, bentuk sederhananya adalah $\\frac{2}{3}\\sqrt{5}$ (pilihan B).",
      "pitfalls": "Lupa mengalikan 3 dengan 5 pada penyebut sehingga menyisakan penyebut bernilai 3 tanpa mengalikan $\\sqrt{5} \\times \\sqrt{5} = 5$."
    },
    "subTopicSlug": "bentuk-akar-rasionalisasi",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Bentuk Akar & Rasionalisasi",
    "subTopic": "Bentuk Akar & Rasionalisasi",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah",
    "hint": "Rasionalisasi pecahan dengan penyebut $c\\sqrt{b}$ cukup dilakukan dengan mengalikan pembilang dan penyebut dengan $\\sqrt{b}$."
  },
  {
    "id": "fun-eks-dasar-akar-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-akar",
    "category": "Rasionalisasi Pecahan Bentuk Sekawan Binomial",
    "difficulty": "sedang",
    "statement": "Bentuk rasional dari pecahan $\\frac{4}{\\sqrt{5} - 1}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\sqrt{5} - 1$",
      "$\\sqrt{5} + 1$",
      "$2(\\sqrt{5} + 1)$",
      "$4(\\sqrt{5} + 1)$",
      "$\\frac{\\sqrt{5} + 1}{4}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Rasionalisasi penyebut berbentuk $\\sqrt{a} - b$ dilakukan dengan mengalikan pembilang dan penyebut dengan bentuk sekawannya, yaitu $\\sqrt{a} + b$.",
      "steps": "1. Kalikan pecahan dengan bentuk sekawan $\\frac{\\sqrt{5} + 1}{\\sqrt{5} + 1}$:\n$$\\frac{4}{\\sqrt{5} - 1} \\times \\frac{\\sqrt{5} + 1}{\\sqrt{5} + 1}$$\n2. Uraikan bagian penyebut menggunakan selisih dua kuadrat $(a - b)(a + b) = a^2 - b^2$:\n$$(\\sqrt{5})^2 - 1^2 = 5 - 1 = 4$$\n3. Tuliskan pecahan secara lengkap:\n$$= \\frac{4(\\sqrt{5} + 1)}{4}$$\n4. Sederhanakan dengan membagi angka 4:\n$$= \\sqrt{5} + 1$$\n5. Jadi, bentuk rasionalnya adalah $\\sqrt{5} + 1$ (pilihan B).",
      "pitfalls": "Lupa menguadratkan angka 1 pada penyebut $(5 - 1 = 4)$ dan keliru menulis $5 - 1 = 5$."
    },
    "subTopicSlug": "bentuk-akar-rasionalisasi",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Bentuk Akar & Rasionalisasi",
    "subTopic": "Bentuk Akar & Rasionalisasi",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang",
    "hint": "Rasionalisasi penyebut berbentuk $\\sqrt{a} - b$ dilakukan dengan mengalikan pembilang dan penyebut dengan bentuk sekawannya, yaitu $\\sqrt{a} + b$."
  },
  {
    "id": "fun-eks-dasar-akar-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-akar",
    "category": "Rasionalisasi Penyebut Jumlah Dua Bentuk Akar",
    "difficulty": "sedang",
    "statement": "Bentuk rasional dari pecahan $\\frac{\\sqrt{3}}{\\sqrt{3} + \\sqrt{2}}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3 + \\sqrt{6}$",
      "$3 - \\sqrt{6}$",
      "$\\sqrt{6} - 3$",
      "$1 - \\sqrt{6}$",
      "$\\frac{3 - \\sqrt{6}}{5}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Kalikan pembilang dan penyebut dengan bentuk sekawan $(\\sqrt{3} - \\sqrt{2})$ agar penyebut berubah menjadi selisih kuadrat rasional.",
      "steps": "1. Kalikan dengan pecahan sekawan:\n$$\\frac{\\sqrt{3}}{\\sqrt{3} + \\sqrt{2}} \\times \\frac{\\sqrt{3} - \\sqrt{2}}{\\sqrt{3} - \\sqrt{2}}$$\n2. Hitung bagian penyebut:\n$$(\\sqrt{3})^2 - (\\sqrt{2})^2 = 3 - 2 = 1$$\n3. Jabarkan bagian pembilang:\n$$\\sqrt{3}(\\sqrt{3} - \\sqrt{2}) = \\sqrt{3} \\times \\sqrt{3} - \\sqrt{3} \\times \\sqrt{2} = 3 - \\sqrt{6}$$\n4. Gabungkan hasil pembagian dengan 1:\n$$= 3 - \\sqrt{6}$$\n5. Jadi, bentuk rasionalnya adalah $3 - \\sqrt{6}$ (pilihan B).",
      "pitfalls": "Menjumlahkan kuadrat penyebut $(3 + 2 = 5)$ alih-alih mengurangkannya."
    },
    "subTopicSlug": "bentuk-akar-rasionalisasi",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Bentuk Akar & Rasionalisasi",
    "subTopic": "Bentuk Akar & Rasionalisasi",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang",
    "hint": "Kalikan pembilang dan penyebut dengan bentuk sekawan $(\\sqrt{3} - \\sqrt{2})$ agar penyebut berubah menjadi selisih kuadrat rasional."
  },
  {
    "id": "fun-eks-dasar-akar-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-akar",
    "category": "Menyederhanakan Bentuk Akar di Dalam Akar",
    "difficulty": "sedang",
    "statement": "Bentuk sederhana dari ekspresi akar bertingkat $\\sqrt{8 + 2\\sqrt{15}}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\sqrt{5} + \\sqrt{3}$",
      "$\\sqrt{6} + \\sqrt{2}$",
      "$\\sqrt{5} - \\sqrt{3}$",
      "$2\\sqrt{2} + \\sqrt{3}$",
      "$\\sqrt{10} + \\sqrt{3}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bentuk $\\sqrt{(a + b) \\pm 2\\sqrt{ab}}$ ekuivalen dengan $\\sqrt{a} \\pm \\sqrt{b}$ dengan $a > b > 0$.",
      "steps": "1. Identifikasi bentuk umum $\\sqrt{p + 2\\sqrt{q}}$:\n$$p = 8, \\quad q = 15$$\n2. Cari dua bilangan positif $a$ dan $b$ yang memenuhi sistem:\n$$a + b = 8$$\n$$a \\cdot b = 15$$\n3. Dua bilangan yang memenuhi adalah $a = 5$ dan $b = 3$.\n4. Bentuk akarnya dapat disederhanakan menjadi:\n$$\\sqrt{8 + 2\\sqrt{15}} = \\sqrt{5} + \\sqrt{3}$$\n5. Jadi, bentuk sederhananya adalah $\\sqrt{5} + \\sqrt{3}$ (pilihan A).",
      "pitfalls": "Memilih pasangan bilangan lain seperti 6 dan 2 yang jumlahnya 8 tetapi hasil kalinya 12, bukan 15."
    },
    "subTopicSlug": "bentuk-akar-rasionalisasi",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Bentuk Akar & Rasionalisasi",
    "subTopic": "Bentuk Akar & Rasionalisasi",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang",
    "hint": "Bentuk $\\sqrt{(a + b) \\pm 2\\sqrt{ab}}$ ekuivalen dengan $\\sqrt{a} \\pm \\sqrt{b}$ dengan $a > b > 0$. **Tips:** Memilih pasangan bilangan lain seperti 6 dan 2 yang jumlahnya 8 tetapi hasil kalinya 12, bukan 15."
  },
  {
    "id": "fun-eks-dasar-akar-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-akar",
    "category": "Operasi Selisih Dua Pecahan Bentuk Akar Sekawan",
    "difficulty": "sedang",
    "statement": "Hasil dari operasi $\\frac{1}{\\sqrt{7} - \\sqrt{6}} - \\frac{1}{\\sqrt{6} - \\sqrt{5}}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\sqrt{7} + \\sqrt{5}$",
      "$\\sqrt{7} - \\sqrt{5}$",
      "$2\\sqrt{6}$",
      "$-\\sqrt{7} - \\sqrt{5}$",
      "$0$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Rasionalkan masing-masing pecahan terlebih dahulu sebelum melakukan operasi pengurangan aljabar.",
      "steps": "1. Rasionalkan pecahan pertama:\n$$\\frac{1}{\\sqrt{7} - \\sqrt{6}} = \\frac{\\sqrt{7} + \\sqrt{6}}{7 - 6} = \\sqrt{7} + \\sqrt{6}$$\n2. Rasionalkan pecahan kedua:\n$$\\frac{1}{\\sqrt{6} - \\sqrt{5}} = \\frac{\\sqrt{6} + \\sqrt{5}}{6 - 5} = \\sqrt{6} + \\sqrt{5}$$\n3. Kurangkan kedua hasil rasionalisasi:\n$$(\\sqrt{7} + \\sqrt{6}) - (\\sqrt{6} + \\sqrt{5})$$\n$$= \\sqrt{7} + \\sqrt{6} - \\sqrt{6} - \\sqrt{5}$$\n$$= \\sqrt{7} - \\sqrt{5}$$\n4. Jadi, hasilnya adalah $\\sqrt{7} - \\sqrt{5}$ (pilihan B).",
      "pitfalls": "Lupa mendistribusikan tanda minus ke suku $\\sqrt{5}$ sehingga keliru menjawab $\\sqrt{7} + \\sqrt{5}$."
    },
    "subTopicSlug": "bentuk-akar-rasionalisasi",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Bentuk Akar & Rasionalisasi",
    "subTopic": "Bentuk Akar & Rasionalisasi",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang",
    "hint": "Rasionalkan masing-masing pecahan terlebih dahulu sebelum melakukan operasi pengurangan aljabar. **Tips:** Lupa mendistribusikan tanda minus ke suku $\\sqrt{5}$ sehingga keliru menjawab $\\sqrt{7} + \\sqrt{5}$."
  },
  {
    "id": "fun-eks-dasar-akar-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-akar",
    "category": "Perkalian Binomial Bentuk Akar Sekawan",
    "difficulty": "sedang",
    "statement": "Nilai dari ekspresi perkalian $(2\\sqrt{3} - 3\\sqrt{2})(2\\sqrt{3} + 3\\sqrt{2})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-6$",
      "$-3$",
      "$0$",
      "$6$",
      "$30$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gunakan identitas selisih dua kuadrat $(a - b)(a + b) = a^2 - b^2$.",
      "steps": "1. Identifikasi suku-suku binomial:\n$$a = 2\\sqrt{3}, \\quad b = 3\\sqrt{2}$$\n2. Terapkan rumus selisih dua kuadrat:\n$$(2\\sqrt{3} - 3\\sqrt{2})(2\\sqrt{3} + 3\\sqrt{2}) = (2\\sqrt{3})^2 - (3\\sqrt{2})^2$$\n3. Kuadratkan masing-masing suku secara teliti:\n$$(2\\sqrt{3})^2 = 2^2 \\times 3 = 4 \\times 3 = 12$$\n$$(3\\sqrt{2})^2 = 3^2 \\times 2 = 9 \\times 2 = 18$$\n4. Hitung hasil pengurangannya:\n$$12 - 18 = -6$$\n5. Jadi, nilai ekspresi tersebut adalah $-6$ (pilihan A).",
      "pitfalls": "Hanya menguadratkan radikan tanpa menguadratkan koefisien luarnya sehingga menghitung $3 - 2 = 1$."
    },
    "subTopicSlug": "bentuk-akar-rasionalisasi",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Bentuk Akar & Rasionalisasi",
    "subTopic": "Bentuk Akar & Rasionalisasi",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan identitas selisih dua kuadrat $(a - b)(a + b) = a^2 - b^2$."
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
    window.TKA_BANK_SOAL[subTopicSlug] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
