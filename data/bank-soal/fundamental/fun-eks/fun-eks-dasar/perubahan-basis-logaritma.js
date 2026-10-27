/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Eksponen dan Logaritma
 * Bab Kecil: Sifat Eksponen & Logaritma (fun-eks-dasar)
 * Sub-Bab: Perubahan Basis Logaritma (fun-eks-dasar-basis)
 * Slug: perubahan-basis-logaritma
 * Indikator: Rumus pengubahan basis logaritma dan sifat perkalian rantai basis logaritma.
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-eks-dasar-basis";
  const subTopicSlug = "perubahan-basis-logaritma";
  const questions = [
  {
    "id": "fun-eks-dasar-basis-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-basis",
    "category": "Sifat Perkalian Rantai Basis Logaritma",
    "difficulty": "mudah",
    "statement": "Nilai dari perkalian berantai logaritma $^2\\log 3 \\times \\,^3\\log 4 \\times \\,^4\\log 8$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$8$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Sifat perkalian rantai basis logaritma menyatakan bahwa $^a\\log b \\times \\,^b\\log c = \\,^a\\log c$, dengan syarat basis dan numerus perantara bernilai positif dan tidak sama dengan 1.",
      "steps": "1. Terapkan sifat rantai secara berurutan:\n$$^2\\log 3 \\times \\,^3\\log 4 = \\,^2\\log 4$$\n2. Lanjutkan perkalian dengan suku ketiga:\n$$^2\\log 4 \\times \\,^4\\log 8 = \\,^2\\log 8$$\n3. Hitung nilai logaritma akhir:\n$$^2\\log 8 = \\,^2\\log(2^3) = 3$$\n4. Jadi, nilai perkalian tersebut adalah $3$ (pilihan C).",
      "pitfalls": "Mengalikan seluruh numerusnya $(3 \\times 4 \\times 8 = 96)$ alih-alih menyederhanakan rantai basis."
    },
    "subTopicSlug": "perubahan-basis-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Perubahan Basis Logaritma",
    "subTopic": "Perubahan Basis Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah",
    "hint": "Sifat perkalian rantai basis logaritma menyatakan bahwa $^a\\log b \\times \\,^b\\log c = \\,^a\\log c$, dengan syarat basis dan numerus perantara bernilai positif dan tidak sama dengan 1."
  },
  {
    "id": "fun-eks-dasar-basis-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-basis",
    "category": "Sifat Pertukaran Basis dan Numerus",
    "difficulty": "mudah",
    "statement": "Jika diketahui $^3\\log 5 = p$, maka nilai dari $^5\\log 3$ dinyatakan dalam $p$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-p$",
      "$\\frac{1}{p}$",
      "$p^2$",
      "$\\frac{p}{5}$",
      "$5p$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Membalik posisi antara basis dan numerus menghasilkan nilai kebalikan (resiprokal): $^a\\log b = \\frac{1}{^b\\log a}$.",
      "steps": "1. Gunakan sifat pertukaran basis dan numerus:\n$$^5\\log 3 = \\frac{1}{^3\\log 5}$$\n2. Substitusikan nilai $^3\\log 5 = p$:\n$$= \\frac{1}{p}$$\n3. Jadi, nilai dari $^5\\log 3$ adalah $\\frac{1}{p}$ (pilihan B).",
      "pitfalls": "Memberikan tanda negatif $-p$ karena tertukar dengan sifat perpangkatan eksponen."
    },
    "subTopicSlug": "perubahan-basis-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Perubahan Basis Logaritma",
    "subTopic": "Perubahan Basis Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah",
    "hint": "Membalik posisi antara basis dan numerus menghasilkan nilai kebalikan (resiprokal): $^a\\log b = \\frac{1}{^b\\log a}$. **Tips:** Memberikan tanda negatif $-p$ karena tertukar dengan sifat perpangkatan eksponen."
  },
  {
    "id": "fun-eks-dasar-basis-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-basis",
    "category": "Rumus Perubahan Basis Sembarang",
    "difficulty": "mudah",
    "statement": "Bentuk logaritma $^2\\log 7$ jika dinyatakan dalam logaritma berbasis 10 adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{\\log 2}{\\log 7}$",
      "$\\frac{\\log 7}{\\log 2}$",
      "$\\log 7 - \\log 2$",
      "$\\log 14$",
      "$\\frac{1}{\\log 14}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Rumus perubahan basis logaritma menyatakan bahwa $^a\\log b = \\frac{^p\\log b}{^p\\log a}$ untuk setiap basis $p > 0$ dan $p \\neq 1$.",
      "steps": "1. Terapkan rumus perubahan basis dengan memilih basis baru $p = 10$:\n$$^2\\log 7 = \\frac{^{10}\\log 7}{^{10}\\log 2}$$\n2. Pada basis 10, angka basis tidak perlu dituliskan:\n$$= \\frac{\\log 7}{\\log 2}$$\n3. Jadi, bentuk yang ekuivalen adalah $\\frac{\\log 7}{\\log 2}$ (pilihan B).",
      "pitfalls": "Terbalik menempatkan basis di bagian pembilang dan numerus di bagian penyebut ($\\frac{\\log 2}{\\log 7}$)."
    },
    "subTopicSlug": "perubahan-basis-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Perubahan Basis Logaritma",
    "subTopic": "Perubahan Basis Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah",
    "hint": "Rumus perubahan basis logaritma menyatakan bahwa $^a\\log b = \\frac{^p\\log b}{^p\\log a}$ untuk setiap basis $p > 0$ dan $p \\neq 1$. **Tips:** Terbalik menempatkan basis di bagian pembilang dan numerus di bagian penyebut ($\\frac{\\log 2}{\\log 7}$)."
  },
  {
    "id": "fun-eks-dasar-basis-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-basis",
    "category": "Perkalian Dua Logaritma Berantai",
    "difficulty": "mudah",
    "statement": "Nilai dari perkalian logaritma $^3\\log 7 \\times \\,^7\\log 81$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$9$",
      "$27$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Perkalian rantai dua suku logaritma menyederhanakan basis dan numerus perantara yang sama: $^a\\log b \\times \\,^b\\log c = \\,^a\\log c$.",
      "steps": "1. Sederhanakan perkalian rantai dengan basis perantara 7:\n$$^3\\log 7 \\times \\,^7\\log 81 = \\,^3\\log 81$$\n2. Nyatakan 81 sebagai perpangkatan basis 3:\n$$81 = 3^4$$\n3. Hitung nilai logaritmanya:\n$$^3\\log (3^4) = 4$$\n4. Jadi, nilai perkalian tersebut adalah $4$ (pilihan C).",
      "pitfalls": "Menghitung akar pangkat empat atau salah mengingat $3^3 = 27$ sehingga memilih jawaban 3."
    },
    "subTopicSlug": "perubahan-basis-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Perubahan Basis Logaritma",
    "subTopic": "Perubahan Basis Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah",
    "hint": "Perkalian rantai dua suku logaritma menyederhanakan basis dan numerus perantara yang sama: $^a\\log b \\times \\,^b\\log c = \\,^a\\log c$."
  },
  {
    "id": "fun-eks-dasar-basis-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-basis",
    "category": "Sifat Logaritma Basis dan Numerus Berpangkat",
    "difficulty": "mudah",
    "statement": "Nilai dari $^{2^3}\\log (2^6)$ menggunakan sifat pangkat basis dan numerus adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{2}$",
      "$1$",
      "$2$",
      "$3$",
      "$18$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Sifat logaritma dengan basis dan numerus berpangkat menyatakan bahwa $^{a^m}\\log (b^n) = \\frac{n}{m} \\cdot \\,^a\\log b$.",
      "steps": "1. Identifikasi pangkat pada basis ($m = 3$) dan pangkat pada numerus ($n = 6$):\n$$^{2^3}\\log (2^6)$$\n2. Terapkan rumus eksponen basis-numerus:\n$$= \\frac{6}{3} \\cdot \\,^2\\log 2$$\n3. Karena $^2\\log 2 = 1$, maka diperoleh:\n$$= 2 \\times 1 = 2$$\n4. Jadi, nilainya adalah $2$ (pilihan C).",
      "pitfalls": "Terbalik membagi pangkat basis dengan pangkat numerus $\\frac{3}{6} = \\frac{1}{2}$."
    },
    "subTopicSlug": "perubahan-basis-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Perubahan Basis Logaritma",
    "subTopic": "Perubahan Basis Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah",
    "hint": "Sifat logaritma dengan basis dan numerus berpangkat menyatakan bahwa $^{a^m}\\log (b^n) = \\frac{n}{m} \\cdot \\,^a\\log b$. **Tips:** Terbalik membagi pangkat basis dengan pangkat numerus $\\frac{3}{6} = \\frac{1}{2}$."
  },
  {
    "id": "fun-eks-dasar-basis-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-basis",
    "category": "Menyatakan Logaritma dengan Dua Variabel Basis Berbeda",
    "difficulty": "sedang",
    "statement": "Diketahui $^2\\log 3 = a$ dan $^3\\log 5 = b$. Nilai dari $^2\\log 15$ jika dinyatakan dalam $a$ dan $b$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$a + b$",
      "$a + ab$",
      "$b + ab$",
      "$\\frac{a}{b}$",
      "$1 + ab$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gunakan sifat rantai logaritma untuk mencari nilai $^2\\log 5$: $^2\\log 5 = \\,^2\\log 3 \\times \\,^3\\log 5 = a \\cdot b$.",
      "steps": "1. Uraikan numerus 15 menjadi perkalian faktor $3 \\times 5$:\n$$^2\\log 15 = \\,^2\\log(3 \\times 5) = \\,^2\\log 3 + \\,^2\\log 5$$\n2. Tentukan nilai $^2\\log 5$ menggunakan rumus rantai perkalian basis:\n$$^2\\log 5 = \\,^2\\log 3 \\times \\,^3\\log 5 = a \\cdot b = ab$$\n3. Substitusikan kembali ke bentuk penjumlahan:\n$$^2\\log 15 = a + ab$$\n4. Jadi, nilai $^2\\log 15$ adalah $a + ab$ (pilihan B).",
      "pitfalls": "Langsung menjumlahkan $a + b$ tanpa memperhatikan bahwa basis pada logaritma kedua adalah 3, bukan 2."
    },
    "subTopicSlug": "perubahan-basis-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Perubahan Basis Logaritma",
    "subTopic": "Perubahan Basis Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan sifat rantai logaritma untuk mencari nilai $^2\\log 5$: $^2\\log 5 = \\,^2\\log 3 \\times \\,^3\\log 5 = a \\cdot b$. **Tips:** Langsung menjumlahkan $a + b$ tanpa memperhatikan bahwa basis pada logaritma kedua adalah 3, bukan 2."
  },
  {
    "id": "fun-eks-dasar-basis-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-basis",
    "category": "Perubahan Basis Baru pada Logaritma Majemuk",
    "difficulty": "sedang",
    "statement": "Diketahui $^2\\log 3 = a$ dan $^3\\log 5 = b$. Nilai dari $^6\\log 15$ dalam $a$ dan $b$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{a + b}{1 + a}$",
      "$\\frac{a + ab}{1 + a}$",
      "$\\frac{1 + ab}{a + b}$",
      "$\\frac{a + ab}{a + b}$",
      "$\\frac{b + ab}{1 + a}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Ubah basis logaritma $^6\\log 15$ ke basis yang diketahui (basis 2): $^6\\log 15 = \\frac{^2\\log 15}{^2\\log 6}$.",
      "steps": "1. Terapkan rumus perubahan basis ke basis 2:\n$$^6\\log 15 = \\frac{^2\\log 15}{^2\\log 6}$$\n2. Uraikan bagian pembilang:\n$$^2\\log 15 = \\,^2\\log(3 \\times 5) = \\,^2\\log 3 + \\,^2\\log 5 = a + ab$$\n3. Uraikan bagian penyebut:\n$$^2\\log 6 = \\,^2\\log(2 \\times 3) = \\,^2\\log 2 + \\,^2\\log 3 = 1 + a$$\n4. Satukan pembilang dan penyebut:\n$$^6\\log 15 = \\frac{a + ab}{1 + a}$$\n5. Jadi, nilai $^6\\log 15$ adalah $\\frac{a + ab}{1 + a}$ (pilihan B).",
      "pitfalls": "Lupa mengubah penyebut basis 6 menjadi $1 + a$ dan malah membiarkannya bernilai $a$."
    },
    "subTopicSlug": "perubahan-basis-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Perubahan Basis Logaritma",
    "subTopic": "Perubahan Basis Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang",
    "hint": "Ubah basis logaritma $^6\\log 15$ ke basis yang diketahui (basis 2): $^6\\log 15 = \\frac{^2\\log 15}{^2\\log 6}$. **Tips:** Lupa mengubah penyebut basis 6 menjadi $1 + a$ dan malah membiarkannya bernilai $a$."
  },
  {
    "id": "fun-eks-dasar-basis-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-basis",
    "category": "Perkalian Logaritma Berbasis dan Numerus Pangkat Tingkat Lanjut",
    "difficulty": "sedang",
    "statement": "Nilai dari ekspresi $^{16}\\log 27 \\times \\,^9\\log 32$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{5}{4}$",
      "$\\frac{3}{2}$",
      "$\\frac{15}{8}$",
      "$2$",
      "$\\frac{45}{16}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Ubah setiap basis dan numerus ke dalam bentuk bilangan prima berpangkat, lalu gunakan $^{a^m}\\log(b^n) = \\frac{n}{m} \\,^a\\log b$ dan $^a\\log b \\times \\,^b\\log a = 1$.",
      "steps": "1. Nyatakan suku pertama dalam basis 2 dan numerus 3:\n$$16 = 2^4, \\quad 27 = 3^3 \\implies \\,^{16}\\log 27 = \\,^{2^4}\\log(3^3) = \\frac{3}{4} \\,^2\\log 3$$\n2. Nyatakan suku kedua dalam basis 3 dan numerus 2:\n$$9 = 3^2, \\quad 32 = 2^5 \\implies \\,^9\\log 32 = \\,^{3^2}\\log(2^5) = \\frac{5}{2} \\,^3\\log 2$$\n3. Kalikan kedua bentuk suku tersebut:\n$$\\left(\\frac{3}{4} \\,^2\\log 3\\right) \\times \\left(\\frac{5}{2} \\,^3\\log 2\\right) = \\left(\\frac{3}{4} \\times \\frac{5}{2}\\right) \\times (^2\\log 3 \\times \\,^3\\log 2)$$\n4. Karena $^2\\log 3 \\times \\,^3\\log 2 = 1$, maka diperoleh:\n$$= \\frac{15}{8} \\times 1 = \\frac{15}{8}$$\n5. Jadi, nilai ekspresi tersebut adalah $\\frac{15}{8}$ (pilihan C).",
      "pitfalls": "Terbalik dalam pembagian rasio pangkat $\\frac{m}{n}$ alih-alih $\\frac{n}{m}$."
    },
    "subTopicSlug": "perubahan-basis-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Perubahan Basis Logaritma",
    "subTopic": "Perubahan Basis Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang",
    "hint": "Ubah setiap basis dan numerus ke dalam bentuk bilangan prima berpangkat, lalu gunakan $^{a^m}\\log(b^n) = \\frac{n}{m} \\,^a\\log b$ dan $^a\\log b \\times \\,^b\\log a = 1$. **Tips:** Terbalik dalam pembagian rasio pangkat $\\frac{m}{n}$ alih-alih $\\frac{n}{m}$."
  },
  {
    "id": "fun-eks-dasar-basis-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-basis",
    "category": "Pembalikan Basis Gabungan Perkalian",
    "difficulty": "sedang",
    "statement": "Jika $^a\\log b = 3$ dan $^b\\log c = 2$, maka nilai dari $^{ac}\\log b$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{6}$",
      "$\\frac{3}{7}$",
      "$\\frac{1}{2}$",
      "$\\frac{5}{6}$",
      "$\\frac{7}{3}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gunakan sifat resiprokal $^{ac}\\log b = \\frac{1}{^b\\log(ac)}$ dan uraikan penyebut menjadi $^b\\log a + \\,^b\\log c$.",
      "steps": "1. Terapkan sifat resiprokal:\n$$^{ac}\\log b = \\frac{1}{^b\\log(ac)} = \\frac{1}{^b\\log a + \\,^b\\log c}$$\n2. Tentukan nilai $^b\\log a$ dari yang diketahui $^a\\log b = 3$:\n$$^b\\log a = \\frac{1}{^a\\log b} = \\frac{1}{3}$$\n3. Substitusikan nilai $^b\\log a = \\frac{1}{3}$ dan $^b\\log c = 2$ ke dalam penyebut:\n$$^b\\log a + \\,^b\\log c = \\frac{1}{3} + 2 = \\frac{1 + 6}{3} = \\frac{7}{3}$$\n4. Hitung hasil bagi akhir:\n$$^{ac}\\log b = \\frac{1}{\\frac{7}{3}} = \\frac{3}{7}$$\n5. Jadi, nilai dari $^{ac}\\log b$ adalah $\\frac{3}{7}$ (pilihan B).",
      "pitfalls": "Lupa membalik hasil akhir penyebut $\\frac{7}{3}$ sehingga memilih $\\frac{7}{3}$."
    },
    "subTopicSlug": "perubahan-basis-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Perubahan Basis Logaritma",
    "subTopic": "Perubahan Basis Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan sifat resiprokal $^{ac}\\log b = \\frac{1}{^b\\log(ac)}$ dan uraikan penyebut menjadi $^b\\log a + \\,^b\\log c$. **Tips:** Lupa membalik hasil akhir penyebut $\\frac{7}{3}$ sehingga memilih $\\frac{7}{3}$."
  },
  {
    "id": "fun-eks-dasar-basis-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-basis",
    "category": "Persamaan Logaritma dengan Perubahan Basis",
    "difficulty": "sedang",
    "statement": "Nilai $x$ yang memenuhi persamaan logaritma $^2\\log x = \\,^4\\log(3x + 4)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-1$",
      "$2$",
      "$3$",
      "$4$",
      "$-1 \\text{ atau } 4$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Samakan basis kedua ruas dengan sifat $^{a^m}\\log b = \\frac{1}{m} \\,^a\\log b = \\,^a\\log (b^{\\frac{1}{m}})$, serta perhatikan syarat numerus $x > 0$.",
      "steps": "1. Syarat numerus: $x > 0$ dan $3x + 4 > 0$.\n2. Ubah basis 4 pada ruas kanan menjadi basis 2:\n$$^4\\log(3x + 4) = \\,^{2^2}\\log(3x + 4) = \\frac{1}{2} \\,^2\\log(3x + 4) = \\,^2\\log\\sqrt{3x + 4}$$\n3. Samakan kedua numerus logaritma basis 2:\n$$x = \\sqrt{3x + 4}$$\n4. Kuadratkan kedua ruas:\n$$x^2 = 3x + 4$$\n$$x^2 - 3x - 4 = 0$$\n$$(x - 4)(x + 1) = 0$$\nDiperoleh $x = 4$ atau $x = -1$.\n5. Karena syarat numerus mengharuskan $x > 0$, maka $x = -1$ tidak memenuhi.\n6. Jadi, nilai $x$ yang memenuhi adalah $4$ (pilihan D).",
      "pitfalls": "Menyertakan nilai $x = -1$ sebagai solusi padahal nilai negatif melanggar syarat numerus logaritma."
    },
    "subTopicSlug": "perubahan-basis-logaritma",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Perubahan Basis Logaritma",
    "subTopic": "Perubahan Basis Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang",
    "hint": "Samakan basis kedua ruas dengan sifat $^{a^m}\\log b = \\frac{1}{m} \\,^a\\log b = \\,^a\\log (b^{\\frac{1}{m}})$, serta perhatikan syarat numerus $x > 0$. **Tips:** Menyertakan nilai $x = -1$ sebagai solusi padahal nilai negatif melanggar syarat numerus logaritma."
  },
  {
    "id": "sup-mtk-fun-05",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subTopicId": "fun-eks-dasar-basis",
    "category": "Sifat Perubahan Basis Logaritma",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Jika diketahui $^2\\log 3 = a$ dan $^2\\log 5 = b$, maka nilai dari $^{10}\\log 15$ dinyatakan dalam variabel $a$ dan $b$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{a + b}{1 + b}$",
      "$\\frac{a + b}{a + 1}$",
      "$\\frac{a \\cdot b}{1 + b}$",
      "$\\frac{a + 1}{b + 1}$",
      "$\\frac{a + b}{2 + b}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Sifat Perubahan Basis Logaritma:</strong><br>$^c\\log d = \\frac{^p\\log d}{^p\\log c}$. Ubah ke basis referensi yang diketahui (basis 2).</div>",
      "steps": "<ol><li>Ubah basis 10 ke basis 2: $^{10}\\log 15 = \\frac{^2\\log 15}{^2\\log 10}$.</li><li>Faktorkan numerus prima: $^{10}\\log 15 = \\frac{^2\\log (3 \\times 5)}{^2\\log (2 \\times 5)}$.</li><li>Terapkan sifat perkalian: $\\frac{^2\\log 3 + ^2\\log 5}{^2\\log 2 + ^2\\log 5}$.</li><li>Substitusi: $\\frac{a + b}{1 + b}$ (karena $^2\\log 2 = 1$).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Salah menganggap $^2\\log 10 = 2 \\times ^2\\log 5$ bukannya $^2\\log 2 + ^2\\log 5 = 1 + b$.</div>"
    },
    "bab": "Eksponen dan Logaritma",
    "subBab": "Perubahan Basis Logaritma",
    "subTopic": "Perubahan Basis Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "subChapterId": "fun-eks-dasar",
    "subTopicSlug": "perubahan-basis-logaritma",
    "hint": "Sifat Perubahan Basis Logaritma: $^c\\log d = \\frac{^p\\log d}{^p\\log c}$. Ubah ke basis referensi yang diketahui (basis 2)."
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
