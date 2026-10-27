/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Eksponen dan Logaritma
 * Bab Kecil: Sifat Eksponen & Logaritma (fun-eks-dasar)
 * Sub-Bab: Sifat Operasi Logaritma (fun-eks-dasar-logaritma)
 * Slug: sifat-operasi-logaritma
 * Indikator: Sifat dasar logaritma: log(ab) = log a + log b, log(a/b) = log a - log b, log(a^n) = n log a.
 * 
 * Total Butir Soal: 12 (Mudah: 6, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-eks-dasar-logaritma";
  const subTopicSlug = "sifat-operasi-logaritma";
  const questions = [
  {
    "id": "fun-eks-dasar-logaritma-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-logaritma",
    "category": "Sifat Penjumlahan Logaritma Basis Sama",
    "difficulty": "mudah",
    "statement": "Nilai dari ekspresi logaritma $^2\\log 8 + \\,^2\\log 4$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$5$",
      "$6$",
      "$7$",
      "$8$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Sifat penjumlahan logaritma menyatakan bahwa $^a\\log b + \\,^a\\log c = \\,^a\\log (b \\times c)$.",
      "steps": "1. Kalikan kedua numerus karena basis logaritma sama ($2$):\n$$^2\\log 8 + \\,^2\\log 4 = \\,^2\\log(8 \\times 4)$$\n2. Hitung hasil perkalian:\n$$= \\,^2\\log 32$$\n3. Nyatakan 32 dalam bentuk pangkat basis 2:\n$$32 = 2^5 \\implies \\,^2\\log (2^5) = 5$$\n4. (Cara alternatif) Hitung langsung:\n$$^2\\log 8 = 3, \\quad \\,^2\\log 4 = 2 \\implies 3 + 2 = 5$$\n5. Jadi, nilai ekspresi tersebut adalah $5$ (pilihan B).",
      "pitfalls": "Menjumlahkan numerusnya ($8 + 4 = 12$) alih-alih mengalikannya."
    },
    "subTopicSlug": "sifat-operasi-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Operasi Logaritma",
    "subTopic": "Sifat Operasi Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah",
    "hint": "Sifat penjumlahan logaritma menyatakan bahwa $^a\\log b + \\,^a\\log c = \\,^a\\log (b \\times c)$."
  },
  {
    "id": "fun-eks-dasar-logaritma-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-logaritma",
    "category": "Sifat Pengurangan Logaritma",
    "difficulty": "mudah",
    "statement": "Nilai dari $^3\\log 81 - \\,^3\\log 9$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$9$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Sifat pengurangan logaritma menyatakan bahwa $^a\\log b - \\,^a\\log c = \\,^a\\log \\left(\\frac{b}{c}\\right)$.",
      "steps": "1. Bagikan numerus karena basis logaritmanya sama ($3$):\n$$^3\\log 81 - \\,^3\\log 9 = \\,^3\\log\\left(\\frac{81}{9}\\right)$$\n2. Selesaikan pembagian numerus:\n$$= \\,^3\\log 9$$\n3. Hitung nilai logaritmanya:\n$$^3\\log 9 = \\,^3\\log (3^2) = 2$$\n4. Jadi, hasilnya adalah $2$ (pilihan B).",
      "pitfalls": "Mengurangkan numerusnya ($81 - 9 = 72$) bukannya membaginya."
    },
    "subTopicSlug": "sifat-operasi-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Operasi Logaritma",
    "subTopic": "Sifat Operasi Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah",
    "hint": "Sifat pengurangan logaritma menyatakan bahwa $^a\\log b - \\,^a\\log c = \\,^a\\log \\left(\\frac{b}{c}\\right)$."
  },
  {
    "id": "fun-eks-dasar-logaritma-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-logaritma",
    "category": "Pengurangan Logaritma Basis 5",
    "difficulty": "mudah",
    "statement": "Nilai dari $^5\\log 100 - \\,^5\\log 4$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gunakan rumus pembagian numerus pada pengurangan logaritma: $^a\\log b - \\,^a\\log c = \\,^a\\log\\left(\\frac{b}{c}\\right)$.",
      "steps": "1. Gabungkan kedua suku logaritma:\n$$^5\\log 100 - \\,^5\\log 4 = \\,^5\\log\\left(\\frac{100}{4}\\right)$$\n2. Hitung hasil bagi:\n$$= \\,^5\\log 25$$\n3. Ubah 25 menjadi bilangan berpangkat basis 5:\n$$25 = 5^2 \\implies \\,^5\\log (5^2) = 2$$\n4. Jadi, nilai dari ekspresi tersebut adalah $2$ (pilihan B).",
      "pitfalls": "Membagi basis dengan numerus atau salah menghitung pembagian $\\frac{100}{4}$."
    },
    "subTopicSlug": "sifat-operasi-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Operasi Logaritma",
    "subTopic": "Sifat Operasi Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan rumus pembagian numerus pada pengurangan logaritma: $^a\\log b - \\,^a\\log c = \\,^a\\log\\left(\\frac{b}{c}\\right)$. **Tips:** Membagi basis dengan numerus atau salah menghitung pembagian $\\frac{100}{4}$."
  },
  {
    "id": "fun-eks-dasar-logaritma-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-logaritma",
    "category": "Penerapan Sifat Logaritma Perkalian Desimal",
    "difficulty": "mudah",
    "statement": "Diketahui $\\log 2 = 0{,}301$ dan $\\log 3 = 0{,}477$. Nilai dari $\\log 6$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}176$",
      "$0{,}602$",
      "$0{,}778$",
      "$0{,}954$",
      "$1{,}435$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Faktorkan numerus menjadi perkalian faktor-faktor yang diketahui: $\\log(ab) = \\log a + \\log b$.",
      "steps": "1. Nyatakan 6 sebagai hasil kali $2 \\times 3$:\n$$\\log 6 = \\log (2 \\times 3)$$\n2. Terapkan sifat penjumlahan logaritma:\n$$= \\log 2 + \\log 3$$\n3. Masukkan nilai yang diketahui:\n$$= 0{,}301 + 0{,}477 = 0{,}778$$\n4. Jadi, nilai dari $\\log 6$ adalah $0{,}778$ (pilihan C).",
      "pitfalls": "Mengalikan kedua nilai desimal ($0{,}301 \\times 0{,}477$) bukannya menjumlahkannya."
    },
    "subTopicSlug": "sifat-operasi-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Operasi Logaritma",
    "subTopic": "Sifat Operasi Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah",
    "hint": "Faktorkan numerus menjadi perkalian faktor-faktor yang diketahui: $\\log(ab) = \\log a + \\log b$. **Tips:** Mengalikan kedua nilai desimal ($0{,}301 \\times 0{,}477$) bukannya menjumlahkannya."
  },
  {
    "id": "fun-eks-dasar-logaritma-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-logaritma",
    "category": "Sifat Eksponen pada Numerus Logaritma",
    "difficulty": "mudah",
    "statement": "Nilai dari ekspresi logaritma $^2\\log (16^3)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$7$",
      "$8$",
      "$12$",
      "$16$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Gunakan sifat pangkat pada numerus logaritma: $^a\\log (b^n) = n \\cdot \\,^a\\log b$.",
      "steps": "1. Tarik eksponen 3 ke depan sebagai pengali:\n$$^2\\log (16^3) = 3 \\cdot \\,^2\\log 16$$\n2. Hitung nilai $^2\\log 16$:\n$$16 = 2^4 \\implies \\,^2\\log 16 = 4$$\n3. Kalikan dengan 3:\n$$= 3 \\times 4 = 12$$\n4. (Cara alternatif) Ubah numerus ke basis 2:\n$$16^3 = (2^4)^3 = 2^{12} \\implies \\,^2\\log(2^{12}) = 12$$\n5. Jadi, nilai ekspresi tersebut adalah $12$ (pilihan D).",
      "pitfalls": "Menjumlahkan eksponen $4 + 3 = 7$ bukannya mengalikannya."
    },
    "subTopicSlug": "sifat-operasi-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Operasi Logaritma",
    "subTopic": "Sifat Operasi Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan sifat pangkat pada numerus logaritma: $^a\\log (b^n) = n \\cdot \\,^a\\log b$."
  },
  {
    "id": "fun-eks-dasar-logaritma-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-logaritma",
    "category": "Kombinasi Operasi Logaritma dengan Bentuk Akar",
    "difficulty": "sedang",
    "statement": "Nilai dari ekspresi $^2\\log 48 + \\,^2\\log \\sqrt{16} - \\,^2\\log 3$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$5$",
      "$6$",
      "$7$",
      "$8$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan penggabungan sifat perkalian dan pembagian logaritma: $^a\\log b + \\,^a\\log c - \\,^a\\log d = \\,^a\\log \\left(\\frac{b \\cdot c}{d}\\right)$.",
      "steps": "1. Sederhanakan bentuk akar pada numerus terlebih dahulu:\n$$\\sqrt{16} = 4$$\n2. Gabungkan ketiga suku logaritma:\n$$^2\\log 48 + \\,^2\\log 4 - \\,^2\\log 3 = \\,^2\\log\\left(\\frac{48 \\times 4}{3}\\right)$$\n3. Lakukan pembagian $48$ dengan $3$:\n$$\\frac{48}{3} = 16$$\n4. Hitung hasil perkalian numerus:\n$$16 \\times 4 = 64$$\n5. Hitung nilai logaritma basis 2:\n$$^2\\log 64 = \\,^2\\log(2^6) = 6$$\n6. Jadi, nilai ekspresi tersebut adalah $6$ (pilihan C).",
      "pitfalls": "Lupa menghitung nilai $\\sqrt{16} = 4$ dan langsung memasukkan 16 sehingga hasilnya berlipat ganda."
    },
    "subTopicSlug": "sifat-operasi-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Operasi Logaritma",
    "subTopic": "Sifat Operasi Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan penggabungan sifat perkalian dan pembagian logaritma: $^a\\log b + \\,^a\\log c - \\,^a\\log d = \\,^a\\log \\left(\\frac{b \\cdot c}{d}\\right)$."
  },
  {
    "id": "fun-eks-dasar-logaritma-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-logaritma",
    "category": "Menyatakan Logaritma dalam Variabel Tertentu",
    "difficulty": "sedang",
    "statement": "Jika $^2\\log 3 = a$ dan $^2\\log 5 = b$, maka nilai dari $^2\\log 60$ dinyatakan dalam $a$ dan $b$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 + a + b$",
      "$2 + a + b$",
      "$2ab$",
      "$2 + ab$",
      "$4 + a + b$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Faktorkan numerus ke dalam bentuk faktor prima, kemudian gunakan sifat penjumlahan logaritma.",
      "steps": "1. Faktorkan 60 ke faktor prima:\n$$60 = 4 \\times 15 = 2^2 \\times 3 \\times 5$$\n2. Jabarkan logaritma perkalian menjadi penjumlahan:\n$$^2\\log 60 = \\,^2\\log(2^2 \\times 3 \\times 5) = \\,^2\\log(2^2) + \\,^2\\log 3 + \\,^2\\log 5$$\n3. Hitung suku basis sama:\n$$^2\\log(2^2) = 2$$\n4. Substitusikan nilai $^2\\log 3 = a$ dan $^2\\log 5 = b$:\n$$= 2 + a + b$$\n5. Jadi, nilai $^2\\log 60$ adalah $2 + a + b$ (pilihan B).",
      "pitfalls": "Mengalikan variabel menjadi $2ab$ atau lupa bahwa $^2\\log 4 = 2$, bukan 1."
    },
    "subTopicSlug": "sifat-operasi-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Operasi Logaritma",
    "subTopic": "Sifat Operasi Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang",
    "hint": "Faktorkan numerus ke dalam bentuk faktor prima, kemudian gunakan sifat penjumlahan logaritma."
  },
  {
    "id": "fun-eks-dasar-logaritma-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-logaritma",
    "category": "Penyederhanaan Pecahan Logaritma Multi-Basis",
    "difficulty": "sedang",
    "statement": "Nilai dari ekspresi pecahan logaritma $\\frac{^3\\log 25 \\times \\,^5\\log 81}{^2\\log 8}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{4}{3}$",
      "$2$",
      "$\\frac{8}{3}$",
      "$4$",
      "$\\frac{16}{3}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan sifat pangkat numerus $^a\\log (b^n) = n \\cdot \\,^a\\log b$ dan rantai perkalian logaritma $^a\\log b \\times \\,^b\\log c = \\,^a\\log c$.",
      "steps": "1. Uraikan pembilang:\n$$^3\\log 25 = \\,^3\\log(5^2) = 2 \\cdot \\,^3\\log 5$$\n$$^5\\log 81 = \\,^5\\log(3^4) = 4 \\cdot \\,^5\\log 3$$\n2. Kalikan kedua bentuk pada pembilang:\n$$(2 \\cdot \\,^3\\log 5) \\times (4 \\cdot \\,^5\\log 3) = 8 \\times (^3\\log 5 \\times \\,^5\\log 3)$$\n3. Terapkan sifat rantai logaritma:\n$$^3\\log 5 \\times \\,^5\\log 3 = \\,^3\\log 3 = 1$$\nSehingga pembilang bernilai $8 \\times 1 = 8$.\n4. Hitung bagian penyebut:\n$$^2\\log 8 = \\,^2\\log(2^3) = 3$$\n5. Bagikan pembilang dengan penyebut:\n$$= \\frac{8}{3}$$\n6. Jadi, nilai ekspresi tersebut adalah $\\frac{8}{3}$ (pilihan C).",
      "pitfalls": "Lupa mengalikan koefisien eksponen $2 \\times 4 = 8$ sehingga menyisakan nilai pembilang bernilai 6."
    },
    "subTopicSlug": "sifat-operasi-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Operasi Logaritma",
    "subTopic": "Sifat Operasi Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan sifat pangkat numerus $^a\\log (b^n) = n \\cdot \\,^a\\log b$ dan rantai perkalian logaritma $^a\\log b \\times \\,^b\\log c = \\,^a\\log c$."
  },
  {
    "id": "fun-eks-dasar-logaritma-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-logaritma",
    "category": "Manipulasi Logaritma Berbasis 10 terhadap Faktor 5",
    "difficulty": "sedang",
    "statement": "Diketahui $\\log 2 = a$. Nilai dari $\\log 5$ jika dinyatakan dalam $a$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 - a$",
      "$1 + a$",
      "$\\frac{1}{a}$",
      "$2 - a$",
      "$\\frac{10}{a}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Angka 5 dapat dinyatakan sebagai hasil bagi $\\frac{10}{2}$ pada sistem logaritma berbasis 10.",
      "steps": "1. Tuliskan $\\log 5$ sebagai bentuk pembagian:\n$$\\log 5 = \\log\\left(\\frac{10}{2}\\right)$$\n2. Terapkan sifat pengurangan logaritma:\n$$= \\log 10 - \\log 2$$\n3. Karena logaritma tanpa basis tertulis merupakan basis 10, maka $\\log 10 = 1$:\n$$= 1 - \\log 2$$\n4. Substitusikan $\\log 2 = a$:\n$$= 1 - a$$\n5. Jadi, nilai $\\log 5$ dalam $a$ adalah $1 - a$ (pilihan A).",
      "pitfalls": "Membalik logaritma menjadi $\\frac{1}{a}$ yang merupakan nilai dari $^2\\log 10$, bukan $\\log 5$."
    },
    "subTopicSlug": "sifat-operasi-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Operasi Logaritma",
    "subTopic": "Sifat Operasi Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang",
    "hint": "Angka 5 dapat dinyatakan sebagai hasil bagi $\\frac{10}{2}$ pada sistem logaritma berbasis 10. **Tips:** Membalik logaritma menjadi $\\frac{1}{a}$ yang merupakan nilai dari $^2\\log 10$, bukan $\\log 5$."
  },
  {
    "id": "fun-eks-dasar-logaritma-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-logaritma",
    "category": "Selisih Dua Kuadrat pada Logaritma",
    "difficulty": "sedang",
    "statement": "Bentuk sederhana dari ekspresi aljabar $(^2\\log 6)^2 - (^2\\log 3)^2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$^2\\log 2$",
      "$^2\\log 3$",
      "$^2\\log 6$",
      "$^2\\log 9$",
      "$^2\\log 18$"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Terapkan pemfaktoran selisih dua kuadrat $x^2 - y^2 = (x - y)(x + y)$ terhadap suku-suku logaritma.",
      "steps": "1. Faktorkan bentuk selisih kuadrat:\n$$(^2\\log 6)^2 - (^2\\log 3)^2 = (^2\\log 6 - \\,^2\\log 3)(^2\\log 6 + \\,^2\\log 3)$$\n2. Sederhanakan faktor pertama (pengurangan logaritma):\n$$^2\\log 6 - \\,^2\\log 3 = \\,^2\\log\\left(\\frac{6}{3}\\right) = \\,^2\\log 2 = 1$$\n3. Sederhanakan faktor kedua (penjumlahan logaritma):\n$$^2\\log 6 + \\,^2\\log 3 = \\,^2\\log(6 \\times 3) = \\,^2\\log 18$$\n4. Kalikan kedua hasil faktor:\n$$1 \\times \\,^2\\log 18 = \\,^2\\log 18$$\n5. Jadi, bentuk sederhananya adalah $^2\\log 18$ (pilihan E).",
      "pitfalls": "Mengurangkan langsung numerus $(6^2 - 3^2 = 27)$ di dalam satu tanda logaritma."
    },
    "subTopicSlug": "sifat-operasi-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Operasi Logaritma",
    "subTopic": "Sifat Operasi Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang",
    "hint": "Terapkan pemfaktoran selisih dua kuadrat $x^2 - y^2 = (x - y)(x + y)$ terhadap suku-suku logaritma."
  },
  {
    "id": "mudah-mtk-04",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subTopicId": "fun-eks-dasar-logaritma",
    "category": "Sifat Dasar Logaritma (Fondasi)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Nilai dari ekspresi logaritma $^2\\log 24 + ^2\\log 6 - ^2\\log 9$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$5$",
      "$6$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Sifat Operasi Logaritma Basis Sama:</strong><br>\n          $$^a\\log b + ^a\\log c = ^a\\log(b \\cdot c)$$\n          $$^a\\log b - ^a\\log c = ^a\\log\\left(\\frac{b}{c}\\right)$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Gabungkan numerus dengan basis 2:\n            $$^2\\log\\left( \\frac{24 \\times 6}{9} \\right)$$\n          </li>\n          <li>Sederhanakan pecahan di dalam numerus:\n            $$\\frac{144}{9} = 16$$\n          </li>\n          <li>Hitung nilai logaritma:\n            $$^2\\log 16 = ^2\\log(2^4) = 4$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Pastikan basis logaritma sama sebelum menggabungkan numerus.\n        </div>\n      "
    },
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Operasi Logaritma",
    "subTopic": "Sifat Operasi Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "subChapterId": "fun-eks-dasar",
    "subTopicSlug": "sifat-operasi-logaritma",
    "hint": "Sifat Operasi Logaritma Basis Sama: $$^a\\log b + ^a\\log c = ^a\\log(b \\cdot c)$$ $$^a\\log b - ^a\\log c = ^a\\log\\left(\\frac{b}{c}\\right)$$. **Tips:** Pastikan basis logaritma sama sebelum menggabungkan numerus."
  },
  {
    "id": "sedang-mtk-02",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subTopicId": "fun-eks-dasar-logaritma",
    "category": "Persamaan Eksponensial Kuadrat (Fondasi)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Jika $x_1$ dan $x_2$ adalah akar-akar real yang memenuhi persamaan eksponen $3^{2x+1} - 28 \\cdot 3^x + 9 = 0$ dengan $x_1 < x_2$, maka nilai dari $2x_1 + x_2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-2$",
      "$-1$",
      "$0$",
      "$1$",
      "$2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Substitusi Persamaan Eksponen ke Bentuk Kuadrat:</strong><br>\n          Misalkan $u = 3^x$ dengan syarat $u > 0$.<br>\n          Maka $3^{2x+1} = 3^1 \\cdot (3^x)^2 = 3u^2$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Bentuk persamaan dalam variabel $u$:\n            $$3u^2 - 28u + 9 = 0$$\n          </li>\n          <li>Faktorkan persamaan kuadrat:\n            $$(3u - 1)(u - 9) = 0$$\n            Sehingga diperoleh $u = \\frac{1}{3}$ atau $u = 9$.\n          </li>\n          <li>Kembalikan ke variabel asli $x$:\n            $$3^x = \\frac{1}{3} = 3^{-1} \\implies x_1 = -1$$\n            $$3^x = 9 = 3^2 \\implies x_2 = 2$$\n          </li>\n          <li>Hitung nilai $2x_1 + x_2$:\n            $$2(-1) + 2 = -2 + 2 = 0$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering lupa memisahkan konstanta pangkat: $3^{2x+1} = 3 \\cdot (3^x)^2$. Jika ditulis langsung $u^2$ tanpa pengali 3, pemfaktoran tidak akan menghasilkan akar yang tepat.\n        </div>\n      "
    },
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Operasi Logaritma",
    "subTopic": "Sifat Operasi Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "subChapterId": "fun-eks-dasar",
    "subTopicSlug": "sifat-operasi-logaritma",
    "hint": "Substitusi Persamaan Eksponen ke Bentuk Kuadrat: Misalkan $u = 3^x$ dengan syarat $u > 0$. Maka $3^{2x+1} = 3^1 \\cdot (3^x)^2 = 3u^2$."
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
