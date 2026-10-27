/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Aljabar Elementer
 * Bab Kecil: Aljabar Dasar (fun-alj-dasar)
 * Sub-Bab: Pecahan Bentuk Aljabar (fun-alj-dasar-pecahan)
 * Slug: pecahan-bentuk-aljabar
 * Indikator: Penyederhanaan, penjumlahan, pengurangan, dan perkalian pecahan bentuk aljabar.
 * 
 * Total Butir Soal: 12 (Mudah: 7, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-alj-dasar-pecahan";
  const subTopicSlug = "pecahan-bentuk-aljabar";
  const questions = [
  {
    "id": "fun-alj-dasar-pecahan-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-pecahan",
    "category": "Penyederhanaan Suku Tunggal Aljabar",
    "difficulty": "mudah",
    "statement": "Bentuk sederhana dari pecahan aljabar $\\frac{6x^3 y^2}{2x y^4}$ untuk $x \\neq 0$ dan $y \\neq 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{3x^2}{y^2}$",
      "$\\frac{3x^4}{y^6}$",
      "$\\frac{3x^2}{y^3}$",
      "$\\frac{4x^2}{y^2}$",
      "$3x^2 y^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Penyederhanaan monomial aljabar dilakukan dengan membagi koefisien numerik dan mengurangkan pangkat variabel sejenis: $\\frac{a^m}{a^n} = a^{m-n}$.",
      "steps": "1. Bagi bagian koefisien numerik:\n$$\\frac{6}{2} = 3$$\n2. Sederhanakan variabel $x$:\n$$\\frac{x^3}{x^1} = x^{3 - 1} = x^2$$\n3. Sederhanakan variabel $y$:\n$$\\frac{y^2}{y^4} = \\frac{1}{y^{4 - 2}} = \\frac{1}{y^2}$$\n4. Gabungkan ketiga komponen:\n$$= \\frac{3x^2}{y^2}$$\n5. Jadi, bentuk sederhananya adalah $\\frac{3x^2}{y^2}$ (pilihan A).",
      "pitfalls": "Menjumlahkan eksponen variabel (menjadi $y^6$) alih-alih mengurangkannya pada operasi pembagian."
    },
    "subTopicSlug": "pecahan-bentuk-aljabar",
    "bab": "Aljabar Elementer",
    "subBab": "Pecahan Bentuk Aljabar",
    "subTopic": "Pecahan Bentuk Aljabar",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Mudah",
    "hint": "Penyederhanaan monomial aljabar dilakukan dengan membagi koefisien numerik dan mengurangkan pangkat variabel sejenis: $\\frac{a^m}{a^n} = a^{m-n}$. **Tips:** Menjumlahkan eksponen variabel (menjadi $y^6$) alih-alih mengurangkannya pada operasi pembagian."
  },
  {
    "id": "fun-alj-dasar-pecahan-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-pecahan",
    "category": "Penyederhanaan Selisih Kuadrat dengan Penyebut Binomial",
    "difficulty": "mudah",
    "statement": "Bentuk sederhana dari pecahan aljabar $\\frac{x^2 - 9}{x + 3}$ untuk $x \\neq -3$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x + 3$",
      "$x - 3$",
      "$x - 9$",
      "$x - 1$",
      "$\\frac{x - 3}{x + 3}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Faktorkan bagian pembilang dengan aturan selisih dua kuadrat $a^2 - b^2 = (a - b)(a + b)$ sebelum membaginya dengan penyebut.",
      "steps": "1. Uraikan pembilang $x^2 - 9$ menjadi bentuk selisih kuadrat:\n$$x^2 - 9 = (x - 3)(x + 3)$$\n2. Tuliskan kembali bentuk pecahannya:\n$$\\frac{(x - 3)(x + 3)}{x + 3}$$\n3. Coret faktor persekutuan $(x + 3)$:\n$$= x - 3$$\n4. Jadi, bentuk sederhananya adalah $x - 3$ (pilihan B).",
      "pitfalls": "Membagi suku per suku secara langsung (seperti $\\frac{x^2}{x} - \\frac{9}{3}$) yang melanggar kaidah aljabar dasar."
    },
    "subTopicSlug": "pecahan-bentuk-aljabar",
    "bab": "Aljabar Elementer",
    "subBab": "Pecahan Bentuk Aljabar",
    "subTopic": "Pecahan Bentuk Aljabar",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Mudah",
    "hint": "Faktorkan bagian pembilang dengan aturan selisih dua kuadrat $a^2 - b^2 = (a - b)(a + b)$ sebelum membaginya dengan penyebut. **Tips:** Membagi suku per suku secara langsung (seperti $\\frac{x^2}{x} - \\frac{9}{3}$) yang melanggar kaidah aljabar dasar."
  },
  {
    "id": "fun-alj-dasar-pecahan-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-pecahan",
    "category": "Penjumlahan Pecahan Aljabar Beda Penyebut",
    "difficulty": "mudah",
    "statement": "Hasil penjumlahan dari $\\frac{2}{x} + \\frac{3}{y}$ untuk $x \\neq 0$ dan $y \\neq 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{5}{x + y}$",
      "$\\frac{5}{xy}$",
      "$\\frac{3x + 2y}{xy}$",
      "$\\frac{2x + 3y}{xy}$",
      "$\\frac{6}{xy}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Untuk menjumlahkan pecahan dengan penyebut berbeda, samakan penyebutnya ke KPK penyebut, yaitu $xy$.",
      "steps": "1. Tentukan penyebut persekutuan, yaitu $xy$.\n2. Sesuaikan masing-masing pembilang:\n$$\\frac{2}{x} = \\frac{2y}{xy}$$\n$$\\frac{3}{y} = \\frac{3x}{xy}$$\n3. Jumlahkan kedua pembilang:\n$$\\frac{2y}{xy} + \\frac{3x}{xy} = \\frac{3x + 2y}{xy}$$\n4. Jadi, hasil penjumlahan pecahan tersebut adalah $\\frac{3x + 2y}{xy}$ (pilihan C).",
      "pitfalls": "Menjumlahkan langsung pembilang dan penyebut menjadi $\\frac{2 + 3}{x + y} = \\frac{5}{x + y}$."
    },
    "subTopicSlug": "pecahan-bentuk-aljabar",
    "bab": "Aljabar Elementer",
    "subBab": "Pecahan Bentuk Aljabar",
    "subTopic": "Pecahan Bentuk Aljabar",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Mudah",
    "hint": "Untuk menjumlahkan pecahan dengan penyebut berbeda, samakan penyebutnya ke KPK penyebut, yaitu $xy$. **Tips:** Menjumlahkan langsung pembilang dan penyebut menjadi $\\frac{2 + 3}{x + y} = \\frac{5}{x + y}$."
  },
  {
    "id": "fun-alj-dasar-pecahan-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-pecahan",
    "category": "Perkalian Pecahan Aljabar Rasional",
    "difficulty": "mudah",
    "statement": "Hasil perkalian pecahan aljabar $\\frac{x}{x - 2} \\times \\frac{x^2 - 4}{x}$ untuk $x \\neq 0$ dan $x \\neq 2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x - 2$",
      "$x + 2$",
      "$x(x + 2)$",
      "$\\frac{x + 2}{x - 2}$",
      "$1$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada perkalian pecahan aljabar, faktorkan suku-suku yang dapat difaktorkan terlebih dahulu, lalu hilangkan faktor pembagi yang sama.",
      "steps": "1. Faktorkan $x^2 - 4$ menjadi $(x - 2)(x + 2)$:\n$$\\frac{x}{x - 2} \\times \\frac{(x - 2)(x + 2)}{x}$$\n2. Tuliskan dalam satu kesatuan pecahan:\n$$= \\frac{x(x - 2)(x + 2)}{x(x - 2)}$$\n3. Lakukan penyederhanaan dengan mencoret faktor $x$ dan $(x - 2)$:\n$$= x + 2$$\n4. Jadi, hasil akhirnya adalah $x + 2$ (pilihan B).",
      "pitfalls": "Mengalikan suku secara langsung sehingga menjadi $\\frac{x^3 - 4x}{x^2 - 2x}$ tanpa menyederhanakannya."
    },
    "subTopicSlug": "pecahan-bentuk-aljabar",
    "bab": "Aljabar Elementer",
    "subBab": "Pecahan Bentuk Aljabar",
    "subTopic": "Pecahan Bentuk Aljabar",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Mudah",
    "hint": "Pada perkalian pecahan aljabar, faktorkan suku-suku yang dapat difaktorkan terlebih dahulu, lalu hilangkan faktor pembagi yang sama. **Tips:** Mengalikan suku secara langsung sehingga menjadi $\\frac{x^3 - 4x}{x^2 - 2x}$ tanpa menyederhanakannya."
  },
  {
    "id": "fun-alj-dasar-pecahan-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-pecahan",
    "category": "Pengurangan Pecahan Aljabar Penyebut Sama",
    "difficulty": "mudah",
    "statement": "Hasil pengurangan pecahan aljabar $\\frac{5}{2x} - \\frac{1}{2x}$ untuk $x \\neq 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{2}{x}$",
      "$\\frac{4}{x}$",
      "$\\frac{1}{x}$",
      "$\\frac{2}{x^2}$",
      "$\\frac{4}{2x^2}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pecahan aljabar dengan penyebut yang sama dapat langsung dikurangkan pembilangnya, kemudian disederhanakan bila terdapat faktor persekutuan.",
      "steps": "1. Kurangkan langsung bagian pembilangnya karena penyebut sudah sama ($2x$):\n$$\\frac{5}{2x} - \\frac{1}{2x} = \\frac{5 - 1}{2x} = \\frac{4}{2x}$$\n2. Sederhanakan koefisien numerik dengan membagi pembilang dan penyebut dengan $2$:\n$$\\frac{4}{2x} = \\frac{2}{x}$$\n3. Jadi, hasil pengurangan dalam bentuk paling sederhana adalah $\\frac{2}{x}$ (pilihan A).",
      "pitfalls": "Lupa menyederhanakan pecahan $\\frac{4}{2x}$ menjadi $\\frac{2}{x}$ atau mengurangkan penyebutnya sehingga menghasilkan penyebut 0."
    },
    "subTopicSlug": "pecahan-bentuk-aljabar",
    "bab": "Aljabar Elementer",
    "subBab": "Pecahan Bentuk Aljabar",
    "subTopic": "Pecahan Bentuk Aljabar",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Mudah",
    "hint": "Pecahan aljabar dengan penyebut yang sama dapat langsung dikurangkan pembilangnya, kemudian disederhanakan bila terdapat faktor persekutuan. **Tips:** Lupa menyederhanakan pecahan $\\frac{4}{2x}$ menjadi $\\frac{2}{x}$ atau mengurangkan penyebutnya sehingga menghasilkan penyebut 0."
  },
  {
    "id": "fun-alj-dasar-pecahan-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-pecahan",
    "category": "Penyederhanaan Pecahan Rasional Kuadratik",
    "difficulty": "sedang",
    "statement": "Bentuk sederhana dari pecahan aljabar $\\frac{x^2 - 4x + 3}{x^2 - 1}$ untuk $x \\neq \\pm 1$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{x - 3}{x - 1}$",
      "$\\frac{x - 3}{x + 1}$",
      "$\\frac{x + 3}{x + 1}$",
      "$\\frac{x - 1}{x + 1}$",
      "$\\frac{4x - 3}{1}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Faktorkan polinomial pembilang dan penyebut ke dalam faktor linier, kemudian lakukan penyederhanaan terhadap faktor yang sama.",
      "steps": "1. Faktorkan pembilang $x^2 - 4x + 3$:\n$$x^2 - 4x + 3 = (x - 1)(x - 3)$$\n2. Faktorkan penyebut $x^2 - 1$ menggunakan selisih dua kuadrat:\n$$x^2 - 1 = (x - 1)(x + 1)$$\n3. Tuliskan pecahan secara utuh:\n$$\\frac{x^2 - 4x + 3}{x^2 - 1} = \\frac{(x - 1)(x - 3)}{(x - 1)(x + 1)}$$\n4. Coret faktor persekutuan $(x - 1)$:\n$$= \\frac{x - 3}{x + 1}$$\n5. Jadi, bentuk sederhananya adalah $\\frac{x - 3}{x + 1}$ (pilihan B).",
      "pitfalls": "Membagi langsung suku-suku berderajat sama seperti membagi $x^2$ dengan $x^2$ sehingga menyisakan suku-suku yang tidak valid secara aljabar."
    },
    "subTopicSlug": "pecahan-bentuk-aljabar",
    "bab": "Aljabar Elementer",
    "subBab": "Pecahan Bentuk Aljabar",
    "subTopic": "Pecahan Bentuk Aljabar",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Sedang",
    "hint": "Faktorkan polinomial pembilang dan penyebut ke dalam faktor linier, kemudian lakukan penyederhanaan terhadap faktor yang sama."
  },
  {
    "id": "fun-alj-dasar-pecahan-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-pecahan",
    "category": "Pengurangan Pecahan Aljabar Penyebut Sekawan",
    "difficulty": "sedang",
    "statement": "Hasil dari operasi pengurangan pecahan $\\frac{1}{x - 1} - \\frac{1}{x + 1}$ untuk $x \\neq \\pm 1$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{2x}{x^2 - 1}$",
      "$\\frac{2}{x^2 - 1}$",
      "$0$",
      "$-\\frac{2}{x^2 - 1}$",
      "$\\frac{1}{x^2 - 1}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Operasi pengurangan dua pecahan aljabar dengan penyebut berbeda dilakukan dengan menyamakan penyebut ke KPK $(x - 1)(x + 1) = x^2 - 1$.",
      "steps": "1. Samakan penyebut kedua pecahan aljabar:\n$$\\frac{1}{x - 1} - \\frac{1}{x + 1} = \\frac{(x + 1) - (x - 1)}{(x - 1)(x + 1)}$$\n2. Sederhanakan bagian pembilang dengan memperhatikan tanda negatif:\n$$(x + 1) - (x - 1) = x + 1 - x + 1 = 2$$\n3. Kalikan penyebut sekawan:\n$$(x - 1)(x + 1) = x^2 - 1$$\n4. Gabungkan hasil pembilang dan penyebut:\n$$= \\frac{2}{x^2 - 1}$$\n5. Jadi, hasilnya adalah $\\frac{2}{x^2 - 1}$ (pilihan B).",
      "pitfalls": "Lupa mendistribusikan tanda minus ke $-1$ pada suku kedua pembilang sehingga salah menghitung $1 - 1 = 0$."
    },
    "subTopicSlug": "pecahan-bentuk-aljabar",
    "bab": "Aljabar Elementer",
    "subBab": "Pecahan Bentuk Aljabar",
    "subTopic": "Pecahan Bentuk Aljabar",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Sedang",
    "hint": "Operasi pengurangan dua pecahan aljabar dengan penyebut berbeda dilakukan dengan menyamakan penyebut ke KPK $(x - 1)(x + 1) = x^2 - 1$."
  },
  {
    "id": "fun-alj-dasar-pecahan-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-pecahan",
    "category": "Penyederhanaan Pecahan Bersusun Kompleks",
    "difficulty": "sedang",
    "statement": "Bentuk sederhana dari pecahan bersusun $\\frac{1 - \\frac{1}{x}}{1 - \\frac{1}{x^2}}$ untuk $x \\neq 0$ dan $x \\neq \\pm 1$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{x + 1}$",
      "$\\frac{x}{x - 1}$",
      "$\\frac{x}{x + 1}$",
      "$\\frac{x + 1}{x}$",
      "$x$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pecahan kompleks dapat disederhanakan dengan mengalikan pembilang dan penyebut dengan penyebut persekutuan tertinggi (yaitu $x^2$) atau dengan menyederhanakan masing-masing tingkat.",
      "steps": "1. Kalikan pembilang dan penyebut utama dengan $x^2$:\n$$\\frac{\\left(1 - \\frac{1}{x}\\right) \\cdot x^2}{\\left(1 - \\frac{1}{x^2}\\right) \\cdot x^2}$$\n2. Jabarkan hasil perkalian:\n$$\\text{Pembilang} = x^2 - x = x(x - 1)$$\n$$\\text{Penyebut} = x^2 - 1 = (x - 1)(x + 1)$$\n3. Tuliskan perbandingannya:\n$$= \\frac{x(x - 1)}{(x - 1)(x + 1)}$$\n4. Hilangkan faktor persekutuan $(x - 1)$:\n$$= \\frac{x}{x + 1}$$\n5. Jadi, bentuk sederhananya adalah $\\frac{x}{x + 1}$ (pilihan C).",
      "pitfalls": "Membagi langsung suku demi suku tanpa menyamakan penyebut sehingga menghasilkan jawaban keliru seperti $\\frac{1}{x}$ atau $x$."
    },
    "subTopicSlug": "pecahan-bentuk-aljabar",
    "bab": "Aljabar Elementer",
    "subBab": "Pecahan Bentuk Aljabar",
    "subTopic": "Pecahan Bentuk Aljabar",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Sedang",
    "hint": "Pecahan kompleks dapat disederhanakan dengan mengalikan pembilang dan penyebut dengan penyebut persekutuan tertinggi (yaitu $x^2$) atau dengan menyederhanakan masing-masing tingkat. **Tips:** Membagi langsung suku demi suku tanpa menyamakan penyebut sehingga menghasilkan jawaban keliru seperti $\\frac{1}{x}$ atau $x$."
  },
  {
    "id": "fun-alj-dasar-pecahan-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-pecahan",
    "category": "Pembagian Dua Pecahan Aljabar Rasional",
    "difficulty": "sedang",
    "statement": "Hasil pembagian pecahan aljabar $\\frac{x^2 - 4}{x^2 + 3x + 2} \\div \\frac{x - 2}{x + 1}$ untuk $x \\neq -2, -1, 2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$\\frac{x - 2}{x + 2}$",
      "$\\frac{x + 2}{x + 1}$",
      "$\\frac{(x - 2)^2}{(x + 1)^2}$",
      "$x + 2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pembagian pecahan diubah menjadi operasi perkalian dengan membalik pembilang dan penyebut pecahan pembagi: $\\frac{A}{B} \\div \\frac{C}{D} = \\frac{A}{B} \\times \\frac{D}{C}$.",
      "steps": "1. Ubah operasi pembagian menjadi perkalian:\n$$\\frac{x^2 - 4}{x^2 + 3x + 2} \\times \\frac{x + 1}{x - 2}$$\n2. Faktorkan suku-suku kuadrat:\n$$x^2 - 4 = (x - 2)(x + 2)$$\n$$x^2 + 3x + 2 = (x + 1)(x + 2)$$\n3. Gabungkan seluruh faktor ke dalam satu bentuk pecahan:\n$$= \\frac{(x - 2)(x + 2)(x + 1)}{(x + 1)(x + 2)(x - 2)}$$\n4. Sederhanakan seluruh faktor yang identik:\n$$= 1$$\n5. Jadi, hasil pembagiannya adalah $1$ (pilihan A).",
      "pitfalls": "Lupa membalik pecahan kedua saat mengubah operasi tanda bagi menjadi kali."
    },
    "subTopicSlug": "pecahan-bentuk-aljabar",
    "bab": "Aljabar Elementer",
    "subBab": "Pecahan Bentuk Aljabar",
    "subTopic": "Pecahan Bentuk Aljabar",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Sedang",
    "hint": "Pembagian pecahan diubah menjadi operasi perkalian dengan membalik pembilang dan penyebut pecahan pembagi: $\\frac{A}{B} \\div \\frac{C}{D} = \\frac{A}{B} \\times \\frac{D}{C}$. **Tips:** Lupa membalik pecahan kedua saat mengubah operasi tanda bagi menjadi kali."
  },
  {
    "id": "fun-alj-dasar-pecahan-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-pecahan",
    "category": "Penyederhanaan Pecahan Bersusun Dua Variabel",
    "difficulty": "sedang",
    "statement": "Bentuk sederhana dari pecahan aljabar $\\frac{\\frac{a}{b} - \\frac{b}{a}}{\\frac{1}{a} + \\frac{1}{b}}$ untuk $a, b \\neq 0$ dan $a + b \\neq 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$a + b$",
      "$a - b$",
      "$b - a$",
      "$\\frac{a - b}{ab}$",
      "$ab$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Kalikan pembilang dan penyebut utama dengan faktor persekutuan $ab$ untuk mengubah pecahan bertingkat menjadi pecahan biasa.",
      "steps": "1. Kalikan tingkat atas dan bawah dengan $ab$:\n$$\\frac{\\left(\\frac{a}{b} - \\frac{b}{a}\\right) \\cdot ab}{\\left(\\frac{1}{a} + \\frac{1}{b}\\right) \\cdot ab}$$\n2. Jabarkan masing-masing tingkat:\n$$\\text{Pembilang} = a^2 - b^2 = (a - b)(a + b)$$\n$$\\text{Penyebut} = b + a = a + b$$\n3. Tuliskan pecahannya:\n$$= \\frac{(a - b)(a + b)}{a + b}$$\n4. Batalkan faktor persekutuan $(a + b)$:\n$$= a - b$$\n5. Jadi, bentuk paling sederhananya adalah $a - b$ (pilihan B).",
      "pitfalls": "Tertukar tanda selisih menjadi $b - a$ karena urutan suku pada penyebut adalah $b + a$."
    },
    "subTopicSlug": "pecahan-bentuk-aljabar",
    "bab": "Aljabar Elementer",
    "subBab": "Pecahan Bentuk Aljabar",
    "subTopic": "Pecahan Bentuk Aljabar",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Sedang",
    "hint": "Kalikan pembilang dan penyebut utama dengan faktor persekutuan $ab$ untuk mengubah pecahan bertingkat menjadi pecahan biasa. **Tips:** Tertukar tanda selisih menjadi $b - a$ karena urutan suku pada penyebut adalah $b + a$."
  },
  {
    "id": "sup-mtk-fun-02",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subTopicId": "fun-alj-dasar-pecahan",
    "category": "Penyederhanaan Pecahan Aljabar",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Bentuk paling sederhana dari pecahan aljabar $\\frac{2x^2 - 8}{x^2 + 3x + 2}$ untuk $x \\neq -1$ dan $x \\neq -2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{2(x - 2)}{x + 1}$",
      "$\\frac{2(x + 2)}{x + 1}$",
      "$\\frac{x - 2}{x + 1}$",
      "$\\frac{2(x - 4)}{x + 1}$",
      "$\\frac{2x - 4}{x + 2}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Penyederhanaan Pecahan Bentuk Aljabar:</strong><br>Faktorkan pembilang dan penyebut ke bentuk perkalian faktor-faktor linearnya, lalu bagi dengan faktor persekutuan terbesarnya.</div>",
      "steps": "<ol><li>Faktorkan pembilang: $2x^2 - 8 = 2(x^2 - 4) = 2(x - 2)(x + 2)$.</li><li>Faktorkan penyebut: $x^2 + 3x + 2 = (x + 1)(x + 2)$.</li><li>Bagi faktor persekutuan $(x + 2)$: $\\frac{2(x - 2)(x + 2)}{(x + 1)(x + 2)} = \\frac{2(x - 2)}{x + 1}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mencoret suku $x^2$ secara langsung tanpa memfaktorkan bentuk penjumlahan aljabar terlebih dahulu.</div>"
    },
    "bab": "Aljabar Elementer",
    "subBab": "Pecahan Bentuk Aljabar",
    "subTopic": "Pecahan Bentuk Aljabar",
    "chapterTitle": "Aljabar Elementer",
    "subChapterId": "fun-alj-dasar",
    "subTopicSlug": "pecahan-bentuk-aljabar",
    "hint": "Penyederhanaan Pecahan Bentuk Aljabar: Faktorkan pembilang dan penyebut ke bentuk perkalian faktor-faktor linearnya, lalu bagi dengan faktor persekutuan terbesarnya. **Tips:** Mencoret suku $x^2$ secara langsung tanpa memfaktorkan bentuk penjumlahan aljabar terlebih dahulu."
  },
  {
    "id": "sup-mtk-fun-04",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subTopicId": "fun-alj-dasar-pecahan",
    "category": "Syarat Pecahan Aljabar Terdefinisi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Himpunan semua nilai $x$ real agar fungsi aljabar $f(x) = \\frac{x + 4}{x^2 - 5x + 6}$ terdefinisi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 2 \\text{ dan } x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -2 \\text{ dan } x \\neq -3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 2 < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 6\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Syarat Pecahan Terdefinisi:</strong><br>Penyebut dari suatu pecahan rasional tidak boleh sama dengan nol: $\\text{Penyebut} \\neq 0$.</div>",
      "steps": "<ol><li>Penyebut: $x^2 - 5x + 6 \\neq 0$.</li><li>Faktorkan: $(x - 2)(x - 3) \\neq 0$.</li><li>Maka $x \\neq 2$ dan $x \\neq 3$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menganggap pembilang tidak boleh nol sehingga menyertakan $x \\neq -4$.</div>"
    },
    "bab": "Aljabar Elementer",
    "subBab": "Pecahan Bentuk Aljabar",
    "subTopic": "Pecahan Bentuk Aljabar",
    "chapterTitle": "Aljabar Elementer",
    "subChapterId": "fun-alj-dasar",
    "subTopicSlug": "pecahan-bentuk-aljabar",
    "hint": "Syarat Pecahan Terdefinisi: Penyebut dari suatu pecahan rasional tidak boleh sama dengan nol: $\\text{Penyebut} \\neq 0$. **Tips:** Menganggap pembilang tidak boleh nol sehingga menyertakan $x \\neq -4$."
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
