/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Aljabar Elementer
 * Bab Kecil: Aljabar Dasar (fun-alj-dasar)
 * Sub-Bab: Operasi Aljabar & Pemfaktoran (fun-alj-dasar-operasi)
 * Slug: operasi-aljabar-pemfaktoran
 * Indikator: Operasi distributif aljabar, pemfaktoran selisih kuadrat, dan bentuk kuadrat sempurna.
 * 
 * Total Butir Soal: 12 (Mudah: 6, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-alj-dasar-operasi";
  const subTopicSlug = "operasi-aljabar-pemfaktoran";
  const questions = [
  {
    "id": "fun-alj-dasar-operasi-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-operasi",
    "category": "Penjabaran Distributif Suku Dua",
    "difficulty": "mudah",
    "statement": "Hasil penjabaran dari perkalian bentuk aljabar $(2x - 3)(x + 4)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2x^2 + 5x - 12$",
      "$2x^2 - 5x - 12$",
      "$2x^2 + 11x - 12$",
      "$2x^2 + 5x + 12$",
      "$2x^2 - 11x - 12$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gunakan sifat distributif perkalian aljabar $(ax + b)(cx + d) = acx^2 + (ad + bc)x + bd$.",
      "steps": "1. Kalikan suku pertama dengan kedua suku pada kurung kedua:\n$$2x \\times x = 2x^2$$\n$$2x \\times 4 = 8x$$\n2. Kalikan suku kedua dengan kedua suku pada kurung kedua:\n$$-3 \\times x = -3x$$\n$$-3 \\times 4 = -12$$\n3. Gabungkan suku-suku yang sejenis:\n$$2x^2 + 8x - 3x - 12 = 2x^2 + 5x - 12$$\n4. Jadi, hasil penjabarannya adalah $2x^2 + 5x - 12$ (pilihan A).",
      "pitfalls": "Keliru dalam menjumlahkan suku sejenis $8x - 3x$ menjadi $-5x$ atau $11x$ karena kurang teliti pada tanda minus."
    },
    "subTopicSlug": "operasi-aljabar-pemfaktoran",
    "bab": "Aljabar Elementer",
    "subBab": "Operasi Aljabar & Pemfaktoran",
    "subTopic": "Operasi Aljabar & Pemfaktoran",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-alj-dasar-operasi-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-operasi",
    "category": "Pemfaktoran Selisih Dua Kuadrat",
    "difficulty": "mudah",
    "statement": "Bentuk pemfaktoran dari ekspresi selisih kuadrat $x^2 - 16$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(x - 2)(x + 8)$",
      "$(x - 4)^2$",
      "$(x + 4)^2$",
      "$(x - 4)(x + 4)$",
      "$(x - 16)(x + 1)$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Rumus dasar selisih dua kuadrat menyatakan bahwa $a^2 - b^2 = (a - b)(a + b)$.",
      "steps": "1. Identifikasi bentuk kuadrat masing-masing suku:\n$$x^2 - 16 = x^2 - 4^2$$\n2. Terapkan rumus selisih kuadrat dengan $a = x$ dan $b = 4$:\n$$a^2 - b^2 = (a - b)(a + b)$$\n$$x^2 - 4^2 = (x - 4)(x + 4)$$\n3. Jadi, bentuk pemfaktoran yang benar adalah $(x - 4)(x + 4)$ (pilihan D).",
      "pitfalls": "Memilih $(x - 4)^2$ yang merupakan bentuk kuadrat sempurna dari $x^2 - 8x + 16$ alih-alih selisih kuadrat."
    },
    "subTopicSlug": "operasi-aljabar-pemfaktoran",
    "bab": "Aljabar Elementer",
    "subBab": "Operasi Aljabar & Pemfaktoran",
    "subTopic": "Operasi Aljabar & Pemfaktoran",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-alj-dasar-operasi-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-operasi",
    "category": "Pemfaktoran Kuadrat Sempurna",
    "difficulty": "mudah",
    "statement": "Bentuk pemfaktoran kuadrat sempurna dari $x^2 + 10x + 25$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(x + 25)^2$",
      "$(x - 5)^2$",
      "$(x + 5)^2$",
      "$(x + 5)(x - 5)$",
      "$(x + 2)(x + 5)$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Bentuk kuadrat sempurna trinomial dirumuskan sebagai $a^2 + 2ab + b^2 = (a + b)^2$.",
      "steps": "1. Analisis suku-suku trinomial:\n$$\\text{Suku awal} = x^2 = (x)^2$$\n$$\\text{Suku akhir} = 25 = (5)^2$$\n$$\\text{Suku tengah} = 10x = 2(x)(5)$$\n2. Karena suku tengah memenuhi $2ab$, maka trinomial merupakan bentuk kuadrat sempurna:\n$$x^2 + 10x + 25 = (x + 5)^2$$\n3. Jadi, pemfaktoran yang benar adalah $(x + 5)^2$ (pilihan C).",
      "pitfalls": "Tertukar dengan bentuk kuadrat sempurna negatif $(x - 5)^2$ atau pemfaktoran selisih kuadrat $(x - 5)(x + 5)$."
    },
    "subTopicSlug": "operasi-aljabar-pemfaktoran",
    "bab": "Aljabar Elementer",
    "subBab": "Operasi Aljabar & Pemfaktoran",
    "subTopic": "Operasi Aljabar & Pemfaktoran",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-alj-dasar-operasi-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-operasi",
    "category": "Pengkuadratan Suku Dua Binomial",
    "difficulty": "mudah",
    "statement": "Hasil pengkuadratan bentuk aljabar $(3a - 2b)^2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$9a^2 - 4b^2$",
      "$9a^2 + 4b^2$",
      "$9a^2 - 6ab + 4b^2$",
      "$9a^2 - 12ab + 4b^2$",
      "$9a^2 - 12ab - 4b^2$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Rumus penjabaran kuadrat suku dua adalah $(x - y)^2 = x^2 - 2xy + y^2$.",
      "steps": "1. Terapkan rumus dengan $x = 3a$ dan $y = 2b$:\n$$(3a - 2b)^2 = (3a)^2 - 2(3a)(2b) + (2b)^2$$\n2. Hitung masing-masing suku secara teliti:\n$$(3a)^2 = 9a^2$$\n$$-2(3a)(2b) = -12ab$$\n$$(2b)^2 = 4b^2$$\n3. Gabungkan seluruh suku:\n$$= 9a^2 - 12ab + 4b^2$$\n4. Jadi, hasil pengkuadratannya adalah $9a^2 - 12ab + 4b^2$ (pilihan D).",
      "pitfalls": "Lupa menghitung suku tengah $-2xy$ sehingga hanya menguadratkan suku depan dan belakang menjadi $9a^2 - 4b^2$."
    },
    "subTopicSlug": "operasi-aljabar-pemfaktoran",
    "bab": "Aljabar Elementer",
    "subBab": "Operasi Aljabar & Pemfaktoran",
    "subTopic": "Operasi Aljabar & Pemfaktoran",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-alj-dasar-operasi-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-operasi",
    "category": "Pemfaktoran Persamaan Kuadrat Standar",
    "difficulty": "mudah",
    "statement": "Pemfaktoran yang benar dari bentuk aljabar $x^2 - 5x + 6$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(x - 1)(x - 6)$",
      "$(x + 1)(x - 6)$",
      "$(x - 2)(x - 3)$",
      "$(x + 2)(x + 3)$",
      "$(x + 2)(x - 3)$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Trinomial $x^2 + bx + c$ dapat difaktorkan menjadi $(x + p)(x + q)$ dengan syarat $p + q = b$ dan $p \\times q = c$.",
      "steps": "1. Nilai koefisien yang dicocokkan adalah $b = -5$ dan $c = +6$.\n2. Cari pasangan faktor dari $+6$ yang jika dijumlahkan bernilai $-5$:\n$$(-2) \\times (-3) = +6$$\n$$(-2) + (-3) = -5$$\n3. Bentuk pemfaktorannya adalah:\n$$x^2 - 5x + 6 = (x - 2)(x - 3)$$\n4. Jadi, pemfaktoran yang benar adalah $(x - 2)(x - 3)$ (pilihan C).",
      "pitfalls": "Memilih $(x + 1)(x - 6)$ karena $1 - 6 = -5$, namun perkaliannya $1 \\times (-6) = -6$, bukan $+6$."
    },
    "subTopicSlug": "operasi-aljabar-pemfaktoran",
    "bab": "Aljabar Elementer",
    "subBab": "Operasi Aljabar & Pemfaktoran",
    "subTopic": "Operasi Aljabar & Pemfaktoran",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-alj-dasar-operasi-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-operasi",
    "category": "Manipulasi Jumlah Kuadrat Simetris",
    "difficulty": "sedang",
    "statement": "Diketahui $a + b = 8$ dan $ab = 15$. Nilai dari $a^2 + b^2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$24$",
      "$30$",
      "$34$",
      "$49$",
      "$64$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan identitas aljabar kuadrat jumlah: $(a + b)^2 = a^2 + 2ab + b^2$, sehingga diperoleh rumus turunan $a^2 + b^2 = (a + b)^2 - 2ab$.",
      "steps": "1. Kuadratkan persamaan $a + b = 8$:\n$$(a + b)^2 = 8^2 = 64$$\n2. Tuliskan bentuk penjabarannya:\n$$a^2 + 2ab + b^2 = 64$$\n3. Substitusikan nilai $ab = 15$:\n$$a^2 + 2(15) + b^2 = 64$$\n$$a^2 + 30 + b^2 = 64$$\n4. Kurangkan kedua ruas dengan 30:\n$$a^2 + b^2 = 64 - 30 = 34$$\n5. Jadi, nilai dari $a^2 + b^2$ adalah $34$ (pilihan C).",
      "pitfalls": "Langsung menguadratkan nilai $(a + b)$ menjadi 64 tanpa mengurangkan suku $2ab$."
    },
    "subTopicSlug": "operasi-aljabar-pemfaktoran",
    "bab": "Aljabar Elementer",
    "subBab": "Operasi Aljabar & Pemfaktoran",
    "subTopic": "Operasi Aljabar & Pemfaktoran",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-alj-dasar-operasi-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-operasi",
    "category": "Pemfaktoran Persamaan Kuadrat Koefisien Utama Bukan Satu",
    "difficulty": "sedang",
    "statement": "Pemfaktoran penuh dari bentuk aljabar $2x^2 - 5x - 3$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(2x - 1)(x + 3)$",
      "$(2x + 1)(x - 3)$",
      "$(2x - 3)(x + 1)$",
      "$(2x + 3)(x - 1)$",
      "$(x - 3)(x + 1)$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pemfaktoran $ax^2 + bx + c$ dilakukan dengan mencari dua bilangan yang hasil kalinya sama dengan $a \\times c$ dan jumlahnya sama dengan $b$.",
      "steps": "1. Nilai $a = 2$, $b = -5$, $c = -3$. Hitung $a \\times c = 2 \\times (-3) = -6$.\n2. Cari dua bilangan yang hasil kalinya $-6$ dan jumlahnya $-5$, yaitu $-6$ dan $+1$.\n3. Pecah suku tengah $-5x$ menjadi $-6x + x$:\n$$2x^2 - 5x - 3 = 2x^2 - 6x + x - 3$$\n4. Lakukan pengelompokan (grouping):\n$$= 2x(x - 3) + 1(x - 3) = (2x + 1)(x - 3)$$\n5. Jadi, pemfaktoran yang benar adalah $(2x + 1)(x - 3)$ (pilihan B).",
      "pitfalls": "Tertukar tanda menjadi $(2x - 1)(x + 3)$ yang jika dijabarkan menghasilkan suku tengah $+5x$, bukan $-5x$."
    },
    "subTopicSlug": "operasi-aljabar-pemfaktoran",
    "bab": "Aljabar Elementer",
    "subBab": "Operasi Aljabar & Pemfaktoran",
    "subTopic": "Operasi Aljabar & Pemfaktoran",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-alj-dasar-operasi-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-operasi",
    "category": "Penjumlahan Kuadrat Variabel Resiprokal",
    "difficulty": "sedang",
    "statement": "Jika diketahui $x + \\frac{1}{x} = 5$, maka nilai dari $x^2 + \\frac{1}{x^2}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$21$",
      "$23$",
      "$25$",
      "$27$",
      "$29$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Kuadrat dari suku resiprokal menghasilkan suku tengah bernilai konstan $2$, yaitu $\\left(x + \\frac{1}{x}\\right)^2 = x^2 + 2 + \\frac{1}{x^2}$.",
      "steps": "1. Kuadratkan kedua ruas persamaan:\n$$\\left(x + \\frac{1}{x}\\right)^2 = 5^2$$\n2. Uraikan bentuk kuadrat binomial:\n$$x^2 + 2(x)\\left(\\frac{1}{x}\\right) + \\frac{1}{x^2} = 25$$\n3. Karena $x \\times \\frac{1}{x} = 1$, maka:\n$$x^2 + 2 + \\frac{1}{x^2} = 25$$\n4. Kurangkan kedua ruas dengan 2:\n$$x^2 + \\frac{1}{x^2} = 25 - 2 = 23$$\n5. Jadi, nilai dari $x^2 + \\frac{1}{x^2}$ adalah $23$ (pilihan B).",
      "pitfalls": "Mengabaikan suku konstan 2 sehingga menjawab $5^2 = 25$, atau menambahkan 2 sehingga menjawab 27."
    },
    "subTopicSlug": "operasi-aljabar-pemfaktoran",
    "bab": "Aljabar Elementer",
    "subBab": "Operasi Aljabar & Pemfaktoran",
    "subTopic": "Operasi Aljabar & Pemfaktoran",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-alj-dasar-operasi-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-operasi",
    "category": "Aplikasi Selisih Kuadrat pada Operasi Bilangan Besar",
    "difficulty": "sedang",
    "statement": "Nilai dari ekspresi $\\frac{2025^2 - 2024^2}{2025 + 2024}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$2024$",
      "$2025$",
      "$4049$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Faktorkan bagian pembilang dengan aturan selisih dua kuadrat $a^2 - b^2 = (a - b)(a + b)$.",
      "steps": "1. Misalkan $a = 2025$ dan $b = 2024$.\n2. Faktorkan pembilang pecahan:\n$$a^2 - b^2 = (a - b)(a + b)$$\n$$2025^2 - 2024^2 = (2025 - 2024)(2025 + 2024)$$\n3. Substitusikan kembali ke bentuk pecahan:\n$$\\frac{(2025 - 2024)(2025 + 2024)}{2025 + 2024}$$\n4. Lakukan penyederhanaan dengan membagi faktor yang sama $(2025 + 2024)$:\n$$= 2025 - 2024 = 1$$\n5. Jadi, nilai dari ekspresi tersebut adalah $1$ (pilihan A).",
      "pitfalls": "Mencoba menghitung nilai kuadrat bilangan secara manual yang memakan banyak waktu dan rentan kekeliruan perhitungan."
    },
    "subTopicSlug": "operasi-aljabar-pemfaktoran",
    "bab": "Aljabar Elementer",
    "subBab": "Operasi Aljabar & Pemfaktoran",
    "subTopic": "Operasi Aljabar & Pemfaktoran",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-alj-dasar-operasi-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-operasi",
    "category": "Sistem Persamaan Selisih Kuadrat",
    "difficulty": "sedang",
    "statement": "Diketahui dua bilangan real memenuhi sistem persamaan $x - y = 4$ dan $x^2 - y^2 = 28$. Nilai dari $x + y$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$6$",
      "$7$",
      "$8$",
      "$14$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Bentuk selisih kuadrat $x^2 - y^2$ dapat dinyatakan sebagai perkalian $(x - y)(x + y)$.",
      "steps": "1. Faktorkan persamaan kuadrat yang diketahui:\n$$x^2 - y^2 = (x - y)(x + y)$$\n2. Substitusikan nilai $x^2 - y^2 = 28$ dan $x - y = 4$:\n$$28 = 4(x + y)$$\n3. Bagi kedua ruas dengan 4:\n$$x + y = \\frac{28}{4} = 7$$\n4. Jadi, nilai dari $x + y$ adalah $7$ (pilihan C).",
      "pitfalls": "Mencari nilai $x$ dan $y$ satu per satu melalui eliminasi/substitusi rumit alih-alih langsung membagi nilai persamaan selisih kuadrat."
    },
    "subTopicSlug": "operasi-aljabar-pemfaktoran",
    "bab": "Aljabar Elementer",
    "subBab": "Operasi Aljabar & Pemfaktoran",
    "subTopic": "Operasi Aljabar & Pemfaktoran",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mudah-mtk-02",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subTopicId": "fun-alj-dasar-operasi",
    "category": "Pemfaktoran Kuadrat (Fondasi)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Akar-akar penyelesaian dari persamaan kuadrat $2x^2 - 7x + 3 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x = 3$ atau $x = \\frac{1}{2}$",
      "$x = -3$ atau $x = -\\frac{1}{2}$",
      "$x = 2$ atau $x = \\frac{3}{2}$",
      "$x = 1$ atau $x = \\frac{7}{2}$",
      "$x = 6$ atau $x = 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Pemfaktoran Persamaan Kuadrat $ax^2 + bx + c = 0$:</strong><br>\n          Cari dua bilangan yang hasil kalinya $a \\times c = 2 \\times 3 = 6$ dan jumlahnya $b = -7$. Bilangan tersebut adalah $-6$ dan $-1$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Uraikan suku tengah:\n            $$2x^2 - 6x - x + 3 = 0$$\n          </li>\n          <li>Faktorkan secara berpasangan:\n            $$2x(x - 3) - 1(x - 3) = 0 \\implies (2x - 1)(x - 3) = 0$$\n          </li>\n          <li>Maka akarnya:\n            $$2x - 1 = 0 \\implies x = \\frac{1}{2} \\quad \\text{atau} \\quad x - 3 = 0 \\implies x = 3$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan tanda negatif saat pemfaktoran agar tidak terbalik menjadi negatif pada hasil akhir.\n        </div>\n      "
    },
    "bab": "Aljabar Elementer",
    "subBab": "Operasi Aljabar & Pemfaktoran",
    "subTopic": "Operasi Aljabar & Pemfaktoran",
    "chapterTitle": "Aljabar Elementer",
    "subChapterId": "fun-alj-dasar",
    "subTopicSlug": "operasi-aljabar-pemfaktoran"
  },
  {
    "id": "sedang-mtk-07",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subTopicId": "fun-alj-dasar-operasi",
    "category": "Sistem Persamaan Linear (Fondasi)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Jika pasangan $(x, y)$ merupakan penyelesaian dari sistem persamaan linear:\n$$\\begin{cases} 3x + 2y = 12 \\\\ 5x - y = 7 \\end{cases}$$\nmaka nilai dari $x^2 + y^2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10$",
      "$13$",
      "$17$",
      "$25$",
      "$29$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Metode Eliminasi & Substitusi SPLDV:</strong><br>\n          Kalikan persamaan kedua dengan 2 lalu jumlahkan untuk mengeliminasi variabel $y$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Kalikan persamaan kedua dengan 2:\n            $$10x - 2y = 14$$\n          </li>\n          <li>Jumlahkan dengan persamaan pertama:\n            $$(3x + 2y) + (10x - 2y) = 12 + 14$$\n            $$13x = 26 \\implies x = 2$$\n          </li>\n          <li>Substitusi $x = 2$ ke persamaan kedua:\n            $$5(2) - y = 7 \\implies 10 - y = 7 \\implies y = 3$$\n          </li>\n          <li>Hitung nilai $x^2 + y^2$:\n            $$x^2 + y^2 = 2^2 + 3^2 = 4 + 9 = 13$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan tanda minus saat substitusi $10 - y = 7 \\implies y = 3$.\n        </div>\n      "
    },
    "bab": "Aljabar Elementer",
    "subBab": "Operasi Aljabar & Pemfaktoran",
    "subTopic": "Operasi Aljabar & Pemfaktoran",
    "chapterTitle": "Aljabar Elementer",
    "subChapterId": "fun-alj-dasar",
    "subTopicSlug": "operasi-aljabar-pemfaktoran"
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
