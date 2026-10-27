/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Kalkulus Limit
 * Bab Kecil: Limit Fungsi (mat-lim-fungsi)
 * Sub-Bab: Limit Fungsi Trigonometri (mat-lim-fungsi-trigono)
 * Slug: limit-fungsi-trigonometri
 * Indikator: Teorema limit trigonometri dasar dan manipulasi identitas tanpa aturan L'Hopital.
 * 
 * Total Butir Soal: 12 (Mudah: 5, Sedang: 6, HOTS: 1)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-lim-fungsi-trigono";
  const subTopicSlug = "limit-fungsi-trigonometri";
  const questions = [
  {
    "id": "mat-lim-fungsi-trigono-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-trigono",
    "category": "Rumus Dasar Limit Trigonometri Sinus",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to 0} \\frac{\\sin 6x}{2x}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$6$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Berdasarkan teorema limit trigonometri dasar, untuk setiap konstanta real $a$ dan $b$ dengan $b \\ne 0$, berlaku $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$.",
      "steps": "1. Identifikasi koefisien pembilang dan penyebut: $a = 6$ dan $b = 2$.\n2. Terapkan rumus dasar limit trigonometri:\n$$\\lim_{x \\to 0} \\frac{\\sin 6x}{2x} = \\frac{6}{2} = 3$$\n3. Jadi, nilai limit tersebut adalah $3$ (pilihan C).",
      "pitfalls": "Mencoba mencoret nilai $x$ secara langsung dari dalam argumen sinus $\\sin(6x)$ tanpa menggunakan sifat limit trigonometri."
    },
    "subTopicSlug": "limit-fungsi-trigonometri",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Trigonometri",
    "subTopic": "Limit Fungsi Trigonometri",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-trigono-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-trigono",
    "category": "Rumus Dasar Limit Tangen dan Sinus",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to 0} \\frac{\\tan 4x}{\\sin 8x}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$1$",
      "$2$",
      "$4$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Untuk $x \\to 0$, perbandingan fungsi tangen dan sinus memenuhi $\\lim_{x \\to 0} \\frac{\\tan ax}{\\sin bx} = \\frac{a}{b}$.",
      "steps": "1. Tuliskan bentuk pecahan limit sebagai perkalian dua limit dasar:\n$$\\lim_{x \\to 0} \\left(\\frac{\\tan 4x}{4x} \\times \\frac{8x}{\\sin 8x} \\times \\frac{4x}{8x}\\right)$$\n2. Evaluasi masing-masing komponen:\n$$= 1 \\times 1 \\times \\frac{4}{8} = \\frac{1}{2}$$\n3. Jadi, nilai limit tersebut adalah $\\frac{1}{2}$ (pilihan B).",
      "pitfalls": "Membalik rasio koefisien menjadi $\\frac{8}{4} = 2$."
    },
    "subTopicSlug": "limit-fungsi-trigonometri",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Trigonometri",
    "subTopic": "Limit Fungsi Trigonometri",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-trigono-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-trigono",
    "category": "Limit Substitusi Langsung Trigonometri",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to \\frac{\\pi}{4}} \\frac{\\sin x + \\cos x}{\\tan x}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{2}$",
      "$1$",
      "$\\sqrt{2}$",
      "$2$",
      "$2\\sqrt{2}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Jika penyebut dari suatu fungsi rasional trigonometri tidak bernilai nol pada titik limit yang dituju, nilai limit dapat dihitung secara langsung menggunakan substitusi nilai variabel.",
      "steps": "1. Substitusikan $x = \\frac{\\pi}{4}$ ($45^\\circ$):\n$$\\sin \\frac{\\pi}{4} = \\frac{1}{2}\\sqrt{2}$$\n$$\\cos \\frac{\\pi}{4} = \\frac{1}{2}\\sqrt{2}$$\n$$\\tan \\frac{\\pi}{4} = 1$$\n2. Hitung nilai pecahan limit:\n$$\\frac{\\frac{1}{2}\\sqrt{2} + \\frac{1}{2}\\sqrt{2}}{1} = \\frac{\\sqrt{2}}{1} = \\sqrt{2}$$\n3. Jadi, nilai limit tersebut adalah $\\sqrt{2}$ (pilihan C).",
      "pitfalls": "Salah mengingat nilai trigonometri istimewa pada sudut $\\frac{\\pi}{4}$ atau menduga bahwa limit bernilai tak tentu $\\frac{0}{0}$."
    },
    "subTopicSlug": "limit-fungsi-trigonometri",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Trigonometri",
    "subTopic": "Limit Fungsi Trigonometri",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-trigono-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-trigono",
    "category": "Limit Trigonometri Bentuk 1 - cos ax",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos 2x}{x^2}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$4$",
      "Tidak terdefinisi"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan identitas trigonometri sudut rangkap: $\\cos 2x = 1 - 2\\sin^2 x \\iff 1 - \\cos 2x = 2\\sin^2 x$.",
      "steps": "1. Ubah bentuk pembilang menggunakan identitas sudut rangkap:\n$$1 - \\cos 2x = 2\\sin^2 x$$\n2. Masukkan ke dalam limit:\n$$\\lim_{x \\to 0} \\frac{2\\sin^2 x}{x^2} = 2 \\times \\left(\\lim_{x \\to 0} \\frac{\\sin x}{x}\\right)^2$$\n3. Karena $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, maka:\n$$= 2 \\times (1)^2 = 2$$\n4. Jadi, nilai limitnya adalah $2$ (pilihan C).",
      "pitfalls": "Lupa faktor 2 di depan $\\sin^2 x$ sehingga mengira hasilnya adalah $1$."
    },
    "subTopicSlug": "limit-fungsi-trigonometri",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Trigonometri",
    "subTopic": "Limit Fungsi Trigonometri",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-trigono-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-trigono",
    "category": "Perkalian Suku Aljabar dan Trigonometri",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to 0} \\frac{x \\tan 3x}{\\sin^2 2x}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$",
      "$\\frac{3}{2}$",
      "$3$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Uraikan penyebut kuadrat $\\sin^2 2x = (\\sin 2x)(\\sin 2x)$ dan pasangkan masing-masing dengan suku pembilang.",
      "steps": "1. Uraikan bentuk pecahan limit:\n$$\\lim_{x \\to 0} \\left(\\frac{x}{\\sin 2x} \\times \\frac{\\tan 3x}{\\sin 2x}\\right)$$\n2. Terapkan sifat limit trigonometri:\n$$\\lim_{x \\to 0} \\frac{x}{\\sin 2x} = \\frac{1}{2}$$\n$$\\lim_{x \\to 0} \\frac{\\tan 3x}{\\sin 2x} = \\frac{3}{2}$$\n3. Kalikan kedua hasil limit:\n$$= \\frac{1}{2} \\times \\frac{3}{2} = \\frac{3}{4}$$\n4. Jadi, nilai limit tersebut adalah $\\frac{3}{4}$ (pilihan C).",
      "pitfalls": "Tidak mengkuadratkan koefisien penyebut $\\sin^2 2x$ sehingga membaginya hanya dengan $2$ bukan $2 \\times 2 = 4$."
    },
    "subTopicSlug": "limit-fungsi-trigonometri",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Trigonometri",
    "subTopic": "Limit Fungsi Trigonometri",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-trigono-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-trigono",
    "category": "Limit Trigonometri Bentuk cos ax - cos bx",
    "difficulty": "sedang",
    "statement": "Nilai dari $\\lim_{x \\to 0} \\frac{\\cos 4x - \\cos 2x}{x^2}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-12$",
      "$-6$",
      "$-3$",
      "$3$",
      "$6$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gunakan rumus selisih dua fungsi cosinus: $\\cos A - \\cos B = -2\\sin\\left(\\frac{A + B}{2}\\right)\\sin\\left(\\frac{A - B}{2}\\right)$.",
      "steps": "1. Uraikan pembilang $\\cos 4x - \\cos 2x$:\n$$\\cos 4x - \\cos 2x = -2\\sin\\left(\\frac{4x + 2x}{2}\\right)\\sin\\left(\\frac{4x - 2x}{2}\\right) = -2\\sin 3x \\sin x$$\n2. Masukkan ke dalam bentuk limit:\n$$\\lim_{x \\to 0} \\frac{-2\\sin 3x \\sin x}{x^2} = -2 \\left(\\lim_{x \\to 0} \\frac{\\sin 3x}{x}\\right) \\left(\\lim_{x \\to 0} \\frac{\\sin x}{x}\\right)$$\n3. Terapkan nilai limit trigonometri dasar:\n$$= -2 \\times 3 \\times 1 = -6$$\n4. Jadi, nilai limit tersebut adalah $-6$ (pilihan B).",
      "pitfalls": "Lupa tanda minus di depan rumus selisih cosinus ($-2\\sin...\\sin...$) sehingga menghasilkan jawaban positif $+6$."
    },
    "subTopicSlug": "limit-fungsi-trigonometri",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Trigonometri",
    "subTopic": "Limit Fungsi Trigonometri",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-trigono-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-trigono",
    "category": "Limit Trigonometri Menuju Titik Bukan Nol",
    "difficulty": "sedang",
    "statement": "Nilai dari $\\lim_{x \\to 2} \\frac{\\sin(x - 2)}{x^2 - 4}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$1$",
      "$2$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Lakukan substitusi variabel $u = x - 2$. Ketika $x \\to 2$, maka $u \\to 0$. Faktorkan penyebut $x^2 - 4 = (x - 2)(x + 2)$ untuk memanfaatkan limit standar $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$.",
      "steps": "1. Faktorkan penyebut:\n$$x^2 - 4 = (x - 2)(x + 2)$$\n2. Tuliskan pecahan limit:\n$$\\lim_{x \\to 2} \\left(\\frac{\\sin(x - 2)}{x - 2} \\times \\frac{1}{x + 2}\\right)$$\n3. Misalkan $u = x - 2$, di mana $u \\to 0$ saat $x \\to 2$:\n$$\\left(\\lim_{u \\to 0} \\frac{\\sin u}{u}\\right) \\times \\left(\\lim_{x \\to 2} \\frac{1}{x + 2}\\right)$$\n4. Evaluasi masing-masing suku:\n$$= 1 \\times \\frac{1}{2 + 2} = \\frac{1}{4}$$\n5. Jadi, nilai limit tersebut adalah $\\frac{1}{4}$ (pilihan B).",
      "pitfalls": "Hanya menghitung bagian trigonometrinya menjadi 1 tanpa mengevaluasi faktor aljabar $(x + 2)$ di penyebut."
    },
    "subTopicSlug": "limit-fungsi-trigonometri",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Trigonometri",
    "subTopic": "Limit Fungsi Trigonometri",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-trigono-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-trigono",
    "category": "Limit Trigonometri Bentuk 1 - cos 4x / x tan 2x",
    "difficulty": "sedang",
    "statement": "Nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos 4x}{x \\tan 2x}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$4$",
      "$6$",
      "$8$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan identitas sudut ganda: $1 - \\cos 4x = 2\\sin^2 2x$. Selanjutnya pasangkan faktor-faktor sinus pada pembilang dengan variabel aljabar dan tangen pada penyebut.",
      "steps": "1. Ubah pembilang $1 - \\cos 4x = 2\\sin^2 2x$:\n$$\\lim_{x \\to 0} \\frac{2\\sin^2 2x}{x \\tan 2x}$$\n2. Uraikan menjadi perkalian dua limit:\n$$= 2 \\left(\\lim_{x \\to 0} \\frac{\\sin 2x}{x}\\right) \\left(\\lim_{x \\to 0} \\frac{\\sin 2x}{\\tan 2x}\\right)$$\n3. Hitung masing-masing nilai limit:\n$$\\lim_{x \\to 0} \\frac{\\sin 2x}{x} = 2$$\n$$\\lim_{x \\to 0} \\frac{\\sin 2x}{\\tan 2x} = \\frac{2}{2} = 1$$\n4. Kalikan seluruh hasil:\n$$= 2 \\times 2 \\times 1 = 4$$\n5. Jadi, nilai limit tersebut adalah $4$ (pilihan C).",
      "pitfalls": "Lupa mengalikan dengan angka 2 di depan rumus identitas sudut rangkap atau salah menghitung $\\lim_{x \\to 0} \\frac{\\sin 2x}{\\tan 2x}$."
    },
    "subTopicSlug": "limit-fungsi-trigonometri",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Trigonometri",
    "subTopic": "Limit Fungsi Trigonometri",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-trigono-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-trigono",
    "category": "Limit Trigonometri Menuju Tak Hingga",
    "difficulty": "sedang",
    "statement": "Nilai dari $\\lim_{x \\to \\infty} x \\sin\\left(\\frac{3}{x}\\right) \\cos\\left(\\frac{2}{x}\\right)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$\\frac{3}{2}$",
      "$2$",
      "$3$",
      "$6$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Gunakan substitusi variabel $y = \\frac{1}{x}$. Saat $x \\to \\infty$, maka $y \\to 0$. Ekspresi $x$ dapat ditulis sebagai $\\frac{1}{y}$, sehingga bentuk limit berubah menjadi limit trigonometri di sekitar nol.",
      "steps": "1. Misalkan $y = \\frac{1}{x}$, sehingga $x = \\frac{1}{y}$. Saat $x \\to \\infty$, maka $y \\to 0$.\n2. Substitusikan ke dalam bentuk limit:\n$$\\lim_{y \\to 0} \\frac{1}{y} \\sin(3y) \\cos(2y) = \\lim_{y \\to 0} \\left(\\frac{\\sin 3y}{y} \\times \\cos 2y\\right)$$\n3. Evaluasi masing-masing limit:\n$$\\lim_{y \\to 0} \\frac{\\sin 3y}{y} = 3$$\n$$\\lim_{y \\to 0} \\cos 2y = \\cos 0 = 1$$\n4. Kalikan kedua hasil limit:\n$$= 3 \\times 1 = 3$$\n5. Jadi, nilai limit tersebut adalah $3$ (pilihan D).",
      "pitfalls": "Menganggap bahwa $\\cos\\left(\\frac{2}{x}\\right)$ menuju $0$ saat $x \\to \\infty$, padahal $\\cos(0) = 1$."
    },
    "subTopicSlug": "limit-fungsi-trigonometri",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Trigonometri",
    "subTopic": "Limit Fungsi Trigonometri",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-trigono-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-trigono",
    "category": "Menentukan Parameter Limit Trigonometri",
    "difficulty": "sedang",
    "statement": "Jika diketahui $\\lim_{x \\to 0} \\frac{a x \\sin x}{1 - \\cos 2x} = 3$, maka nilai dari konstanta $a$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3$",
      "$4$",
      "$6$",
      "$8$",
      "$12$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan identitas $1 - \\cos 2x = 2\\sin^2 x$ untuk menyederhanakan penyebut, kemudian gunakan teorema limit trigonometri untuk menyelesaikan nilai konstanta $a$.",
      "steps": "1. Ubah penyebut menggunakan identitas sudut rangkap:\n$$1 - \\cos 2x = 2\\sin^2 x$$\n2. Tuliskan limit:\n$$\\lim_{x \\to 0} \\frac{a x \\sin x}{2\\sin^2 x} = \\lim_{x \\to 0} \\frac{a x \\sin x}{2(\\sin x)(\\sin x)}$$\n3. Sederhanakan faktor $\\sin x$:\n$$= \\lim_{x \\to 0} \\frac{a x}{2\\sin x} = \\frac{a}{2} \\lim_{x \\to 0} \\frac{x}{\\sin x} = \\frac{a}{2} \\times 1 = \\frac{a}{2}$$\n4. Samakan dengan nilai limit yang diketahui:\n$$\\frac{a}{2} = 3 \\implies a = 6$$\n5. Jadi, nilai konstanta $a$ adalah $6$ (pilihan C).",
      "pitfalls": "Lupa angka 2 di penyebut saat mengubah $1 - \\cos 2x$, sehingga mengira $a = 3$."
    },
    "subTopicSlug": "limit-fungsi-trigonometri",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Trigonometri",
    "subTopic": "Limit Fungsi Trigonometri",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "sedang-mtk-06",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subTopicId": "mat-lim-fungsi-trigono",
    "category": "Limit Trigonometri Dasar Tanpa L'Hôpital",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Nilai dari limit trigonometri $\\lim_{x \\to 0} \\frac{1 - \\cos 4x}{x \\sin 2x}$ yang dihitung menggunakan manipulasi identitas trigonometri murni (tanpa dalil L'Hôpital) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$4$",
      "$8$",
      "$0$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Identitas Sudut Rangkap & Teorema Limit Trigonometri Dasar:</strong><br>\n          • $1 - \\cos 2u = 2\\sin^2 u \\implies 1 - \\cos 4x = 2\\sin^2(2x)$<br>\n          • Teorema limit dasar: $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Ubah pembilang menggunakan identitas sudut rangkap:\n            $$1 - \\cos 4x = 2\\sin^2(2x)$$\n          </li>\n          <li>Tulis kembali ekspresi limit:\n            $$\\lim_{x \\to 0} \\frac{2\\sin^2(2x)}{x \\sin 2x} = \\lim_{x \\to 0} \\frac{2\\sin(2x)\\sin(2x)}{x \\sin 2x}$$\n          </li>\n          <li>Coret faktor bersama $\\sin 2x$ (karena $x \\neq 0$ saat proses limit):\n            $$\\lim_{x \\to 0} \\frac{2\\sin(2x)}{x} = 2 \\times \\lim_{x \\to 0} \\frac{\\sin(2x)}{x} = 2 \\times 2 = 4$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan pengali 2 dari rumus identitas: $2\\sin^2(2x)$ bukan $\\sin^2(2x)$. Kesalahan ini akan menghasilkan nilai limit 2 bukannya 4.\n        </div>\n      "
    },
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Trigonometri",
    "subTopic": "Limit Fungsi Trigonometri",
    "chapterTitle": "Kalkulus Limit",
    "subChapterId": "mat-lim-fungsi",
    "subTopicSlug": "limit-fungsi-trigonometri"
  },
  {
    "id": "hots-mtk-02",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subTopicId": "mat-lim-fungsi-trigono",
    "category": "Limit Fungsi Trigonometri Non-L'Hôpital",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Tentukan nilai dari limit trigonometri analitis berikut tanpa menerapkan dalil L'Hôpital:\n$$\\lim_{x \\to 0} \\frac{\\cos 5x - \\cos 3x}{x \\tan 2x}$$",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-4$",
      "$-2$",
      "$2$",
      "$4$",
      "$-8$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Rumus Selisih Kosinus & Teorema Limit:</strong><br>\n          • $\\cos A - \\cos B = -2\\sin\\left(\\frac{A+B}{2}\\right)\\sin\\left(\\frac{A-B}{2}\\right)$<br>\n          • $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$ dan $\\lim_{x \\to 0} \\frac{cx}{\\tan dx} = \\frac{c}{d}$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Dengan $A = 5x$ dan $B = 3x$:\n            $$\\frac{A+B}{2} = 4x \\quad \\text{dan} \\quad \\frac{A-B}{2} = x$$\n            $$\\cos 5x - \\cos 3x = -2\\sin(4x)\\sin(x)$$\n          </li>\n          <li>Substitusikan ke dalam ekspresi limit:\n            $$\\lim_{x \\to 0} \\frac{-2\\sin(4x)\\sin(x)}{x \\tan(2x)}$$\n          </li>\n          <li>Pisahkan menjadi perkalian limit dasar trigonometri:\n            $$-2 \\times \\left( \\lim_{x \\to 0} \\frac{\\sin(4x)}{\\tan(2x)} \\right) \\times \\left( \\lim_{x \\to 0} \\frac{\\sin(x)}{x} \\right)$$\n          </li>\n          <li>Hitung nilai masing-masing suku:\n            $$-2 \\times \\left(\\frac{4}{2}\\right) \\times (1) = -2 \\times 2 \\times 1 = -4$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Tanda minus pada rumus selisih kosinus $-2\\sin\\sin$ sangat vital. Lupa tanda minus akan membuat hasil menjadi $+4$, yang merupakan jebakan umum.\n        </div>\n      "
    },
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Trigonometri",
    "subTopic": "Limit Fungsi Trigonometri",
    "chapterTitle": "Kalkulus Limit",
    "subChapterId": "mat-lim-fungsi",
    "subTopicSlug": "limit-fungsi-trigonometri"
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
