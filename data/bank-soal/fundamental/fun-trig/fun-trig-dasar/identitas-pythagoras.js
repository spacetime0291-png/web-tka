/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Trigonometri Dasar
 * Bab Kecil: Trigonometri Analitik Dasar (fun-trig-dasar)
 * Sub-Bab: Identitas Pythagoras (fun-trig-dasar-pythagoras)
 * Slug: identitas-pythagoras
 * Indikator: Identitas dasar sin^2(x) + cos^2(x) = 1, 1 + tan^2(x) = sec^2(x), dan 1 + cot^2(x) = csc^2(x).
 * 
 * Total Butir Soal: 11 (Mudah: 5, Sedang: 5, HOTS: 1)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-trig-dasar-pythagoras";
  const subTopicSlug = "identitas-pythagoras";
  const questions = [
  {
    "id": "fun-trig-dasar-pythagoras-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-pythagoras",
    "category": "Identitas Dasar Sinus dan Cosinus",
    "difficulty": "mudah",
    "statement": "Nilai dari ekspresi $\\sin^2 35^\\circ + \\cos^2 35^\\circ$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\sqrt{2}$",
      "$1$",
      "$\\sqrt{2}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Identitas pokok trigonometri menyatakan bahwa untuk setiap sudut real $\\alpha$, berlaku hubungan $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.",
      "steps": "1. Amati sudut pada kedua suku: keduanya memiliki besar sudut yang sama, yaitu $\\alpha = 35^\\circ$.\n2. Gunakan identitas Pythagoras trigonometri:\n$$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$$\n3. Substitusikan $\\alpha = 35^\\circ$:\n$$\\sin^2 35^\\circ + \\cos^2 35^\\circ = 1$$\n4. Dengan demikian, nilai yang diperoleh adalah $1$ (pilihan D).",
      "pitfalls": "Mencoba mencari nilai eksak $\\sin 35^\\circ$ dan $\\cos 35^\\circ$ secara manual tanpa menyadari berlakunya identitas dasar Pythagoras."
    },
    "subTopicSlug": "identitas-pythagoras",
    "bab": "Trigonometri Dasar",
    "subBab": "Identitas Pythagoras",
    "subTopic": "Identitas Pythagoras",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah",
    "hint": "Identitas pokok trigonometri menyatakan bahwa untuk setiap sudut real $\\alpha$, berlaku hubungan $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$."
  },
  {
    "id": "fun-trig-dasar-pythagoras-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-pythagoras",
    "category": "Menghitung Cosinus Kuadrat dari Sinus",
    "difficulty": "mudah",
    "statement": "Diketahui $\\sin x = \\frac{3}{5}$ dengan $x$ merupakan sudut lancip ($0^\\circ < x < 90^\\circ$). Nilai dari $\\cos^2 x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{9}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{16}{25}$",
      "$\\frac{4}{5}$",
      "$\\frac{21}{25}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Dari identitas $\\sin^2 x + \\cos^2 x = 1$, diperoleh rumus turunan $\\cos^2 x = 1 - \\sin^2 x$.",
      "steps": "1. Diketahui $\\sin x = \\frac{3}{5}$. Hitung nilai $\\sin^2 x$:\n$$\\sin^2 x = \\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$$\n2. Gunakan relasi identitas Pythagoras:\n$$\\cos^2 x = 1 - \\sin^2 x$$\n3. Lakukan pengurangan pecahan:\n$$\\cos^2 x = 1 - \\frac{9}{25} = \\frac{25 - 9}{25} = \\frac{16}{25}$$\n4. Jadi, nilai dari $\\cos^2 x$ adalah $\\frac{16}{25}$ (pilihan C).",
      "pitfalls": "Menjawab $\\frac{4}{5}$ karena terburu-buru menarik akar kuadrat padahal soal menanyakan $\\cos^2 x$ bukan $\\cos x$."
    },
    "subTopicSlug": "identitas-pythagoras",
    "bab": "Trigonometri Dasar",
    "subBab": "Identitas Pythagoras",
    "subTopic": "Identitas Pythagoras",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah",
    "hint": "Dari identitas $\\sin^2 x + \\cos^2 x = 1$, diperoleh rumus turunan $\\cos^2 x = 1 - \\sin^2 x$. **Tips:** Menjawab $\\frac{4}{5}$ karena terburu-buru menarik akar kuadrat padahal soal menanyakan $\\cos^2 x$ bukan $\\cos x$."
  },
  {
    "id": "fun-trig-dasar-pythagoras-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-pythagoras",
    "category": "Identitas Tangen dan Secan",
    "difficulty": "mudah",
    "statement": "Bentuk ekuivalen dari ekspresi $1 + \\tan^2 \\alpha$ untuk setiap $\\alpha \\neq 90^\\circ + k \\cdot 180^\\circ$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\sin^2 \\alpha$",
      "$\\cos^2 \\alpha$",
      "$\\sec^2 \\alpha$",
      "$\\csc^2 \\alpha$",
      "$\\cot^2 \\alpha$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Membagi kedua ruas identitas $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ dengan $\\cos^2 \\alpha$ menghasilkan identitas $1 + \\tan^2 \\alpha = \\sec^2 \\alpha$.",
      "steps": "1. Tuliskan bentuk tangen ke dalam definisi sinus dan cosinus:\n$$1 + \\tan^2 \\alpha = 1 + \\frac{\\sin^2 \\alpha}{\\cos^2 \\alpha}$$\n2. Samakan penyebut:\n$$= \\frac{\\cos^2 \\alpha + \\sin^2 \\alpha}{\\cos^2 \\alpha}$$\n3. Menggunakan identitas $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$:\n$$= \\frac{1}{\\cos^2 \\alpha} = \\sec^2 \\alpha$$\n4. Jadi, bentuk ekuivalennya adalah $\\sec^2 \\alpha$ (pilihan C).",
      "pitfalls": "Tertukar antara $\\sec^2 \\alpha$ dengan $\\csc^2 \\alpha$, di mana $\\csc^2 \\alpha = 1 + \\cot^2 \\alpha$."
    },
    "subTopicSlug": "identitas-pythagoras",
    "bab": "Trigonometri Dasar",
    "subBab": "Identitas Pythagoras",
    "subTopic": "Identitas Pythagoras",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah",
    "hint": "Membagi kedua ruas identitas $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ dengan $\\cos^2 \\alpha$ menghasilkan identitas $1 + \\tan^2 \\alpha = \\sec^2 \\alpha$."
  },
  {
    "id": "fun-trig-dasar-pythagoras-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-pythagoras",
    "category": "Penerapan Identitas Secan Kuadrat",
    "difficulty": "mudah",
    "statement": "Diketahui $\\tan x = \\frac{4}{3}$ dengan $x$ sudut lancip. Nilai dari $\\sec^2 x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{7}{9}$",
      "$\\frac{16}{9}$",
      "$\\frac{20}{9}$",
      "$\\frac{25}{9}$",
      "$\\frac{5}{3}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Identitas Pythagoras antara tangen dan secan adalah $\\sec^2 x = 1 + \\tan^2 x$.",
      "steps": "1. Kuadratkan nilai tangen yang diketahui:\n$$\\tan^2 x = \\left(\\frac{4}{3}\\right)^2 = \\frac{16}{9}$$\n2. Gunakan hubungan identitas Pythagoras:\n$$\\sec^2 x = 1 + \\tan^2 x$$\n3. Hitung penjumlahan pecahan:\n$$\\sec^2 x = 1 + \\frac{16}{9} = \\frac{9 + 16}{9} = \\frac{25}{9}$$\n4. Jadi, nilai dari $\\sec^2 x$ adalah $\\frac{25}{9}$ (pilihan D).",
      "pitfalls": "Menjawab $\\frac{16}{9}$ karena lupa menambahkan angka $1$ pada rumus identitas."
    },
    "subTopicSlug": "identitas-pythagoras",
    "bab": "Trigonometri Dasar",
    "subBab": "Identitas Pythagoras",
    "subTopic": "Identitas Pythagoras",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah",
    "hint": "Identitas Pythagoras antara tangen dan secan adalah $\\sec^2 x = 1 + \\tan^2 x$. **Tips:** Menjawab $\\frac{16}{9}$ karena lupa menambahkan angka $1$ pada rumus identitas."
  },
  {
    "id": "fun-trig-dasar-pythagoras-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-pythagoras",
    "category": "Penyederhanaan Pecahan Identitas Pythagoras",
    "difficulty": "mudah",
    "statement": "Bentuk sederhana dari $\\frac{1 - \\cos^2 \\theta}{\\sin \\theta}$ untuk $\\sin \\theta \\neq 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\cos \\theta$",
      "$\\sin \\theta$",
      "$\\tan \\theta$",
      "$\\sec \\theta$",
      "$1$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Berdasarkan identitas Pythagoras, pembilang $1 - \\cos^2 \\theta$ dapat diubah menjadi $\\sin^2 \\theta$.",
      "steps": "1. Ubah bagian pembilang menggunakan relasi $1 - \\cos^2 \\theta = \\sin^2 \\theta$:\n$$\\frac{1 - \\cos^2 \\theta}{\\sin \\theta} = \\frac{\\sin^2 \\theta}{\\sin \\theta}$$\n2. Lakukan pembagian suku aljabar:\n$$= \\sin \\theta$$\n3. Jadi, bentuk paling sederhana adalah $\\sin \\theta$ (pilihan B).",
      "pitfalls": "Membagi langsung $1$ dengan $\\sin \\theta$ dan $\\cos^2 \\theta$ dengan $\\sin \\theta$ sehingga bentuk pecahan menjadi semakin rumit alih-alih sederhana."
    },
    "subTopicSlug": "identitas-pythagoras",
    "bab": "Trigonometri Dasar",
    "subBab": "Identitas Pythagoras",
    "subTopic": "Identitas Pythagoras",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah",
    "hint": "Berdasarkan identitas Pythagoras, pembilang $1 - \\cos^2 \\theta$ dapat diubah menjadi $\\sin^2 \\theta$."
  },
  {
    "id": "fun-trig-dasar-pythagoras-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-pythagoras",
    "category": "Penyederhanaan Penjumlahan Pecahan Trigonometri",
    "difficulty": "sedang",
    "statement": "Bentuk sederhana dari ekspresi $\\frac{\\sin x}{1 + \\cos x} + \\frac{1 + \\cos x}{\\sin x}$ untuk $\\sin x(1 + \\cos x) \\neq 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\sin x$",
      "$2\\cos x$",
      "$2\\csc x$",
      "$2\\sec x$",
      "$\\tan x$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Penyederhanaan pecahan trigonometri dilakukan dengan menyamakan penyebut dan menerapkan identitas pokok $\\sin^2 x + \\cos^2 x = 1$ serta $\\csc x = \\frac{1}{\\sin x}$.",
      "steps": "1. Samakan penyebut kedua pecahan aljabar trigonometri:\n$$\\frac{\\sin^2 x + (1 + \\cos x)^2}{\\sin x (1 + \\cos x)}$$\n2. Jabarkan bentuk kuadrat pada pembilang:\n$$= \\frac{\\sin^2 x + 1 + 2\\cos x + \\cos^2 x}{\\sin x (1 + \\cos x)}$$\n3. Gabungkan suku $\\sin^2 x + \\cos^2 x = 1$:\n$$= \\frac{(1) + 1 + 2\\cos x}{\\sin x (1 + \\cos x)} = \\frac{2 + 2\\cos x}{\\sin x (1 + \\cos x)}$$\n4. Faktorkan pembilang dan lakukan pembatalan faktor persekutuan $(1 + \\cos x)$:\n$$= \\frac{2(1 + \\cos x)}{\\sin x (1 + \\cos x)} = \\frac{2}{\\sin x} = 2\\csc x$$\n5. Jadi, bentuk sederhananya adalah $2\\csc x$ (pilihan C).",
      "pitfalls": "Lupa menjabarkan suku tengah $2\\cos x$ pada penjabaran kuadrat $(1 + \\cos x)^2$ sehingga mengira pembilangnya menjadi $1 + 1 = 2$."
    },
    "subTopicSlug": "identitas-pythagoras",
    "bab": "Trigonometri Dasar",
    "subBab": "Identitas Pythagoras",
    "subTopic": "Identitas Pythagoras",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang",
    "hint": "Penyederhanaan pecahan trigonometri dilakukan dengan menyamakan penyebut dan menerapkan identitas pokok $\\sin^2 x + \\cos^2 x = 1$ serta $\\csc x = \\frac{1}{\\sin x}$."
  },
  {
    "id": "fun-trig-dasar-pythagoras-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-pythagoras",
    "category": "Perkalian Sinus dan Cosinus dari Jumlah Linier",
    "difficulty": "sedang",
    "statement": "Diketahui $\\sin x + \\cos x = \\frac{7}{5}$. Nilai dari $\\sin x \\cdot \\cos x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{7}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{24}{25}$",
      "$\\frac{16}{25}$",
      "$\\frac{9}{25}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Dengan menguadratkan kedua ruas persamaan $(\\sin x + \\cos x)^2$, identitas $\\sin^2 x + \\cos^2 x = 1$ memunculkan suku perkalian $2\\sin x \\cos x$.",
      "steps": "1. Kuadratkan kedua ruas persamaan yang diketahui:\n$$(\\sin x + \\cos x)^2 = \\left(\\frac{7}{5}\\right)^2$$\n2. Uraikan ruas kiri:\n$$\\sin^2 x + 2\\sin x \\cos x + \\cos^2 x = \\frac{49}{25}$$\n3. Karena $\\sin^2 x + \\cos^2 x = 1$, maka persamaan menjadi:\n$$1 + 2\\sin x \\cos x = \\frac{49}{25}$$\n4. Pindahkan konstanta $1$ ke ruas kanan:\n$$2\\sin x \\cos x = \\frac{49}{25} - 1 = \\frac{24}{25}$$\n5. Bagi kedua ruas dengan $2$:\n$$\\sin x \\cos x = \\frac{12}{25}$$\n6. Jadi, nilai $\\sin x \\cdot \\cos x$ adalah $\\frac{12}{25}$ (pilihan B).",
      "pitfalls": "Lupa membagi dengan 2 setelah mengurangkan 1 dari $\\frac{49}{25}$, sehingga memilih $\\frac{24}{25}$."
    },
    "subTopicSlug": "identitas-pythagoras",
    "bab": "Trigonometri Dasar",
    "subBab": "Identitas Pythagoras",
    "subTopic": "Identitas Pythagoras",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang",
    "hint": "Dengan menguadratkan kedua ruas persamaan $(\\sin x + \\cos x)^2$, identitas $\\sin^2 x + \\cos^2 x = 1$ memunculkan suku perkalian $2\\sin x \\cos x$. **Tips:** Lupa membagi dengan 2 setelah mengurangkan 1 dari $\\frac{49}{25}$, sehingga memilih $\\frac{24}{25}$."
  },
  {
    "id": "fun-trig-dasar-pythagoras-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-pythagoras",
    "category": "Kombinasi Identitas Pythagoras Lanjut",
    "difficulty": "sedang",
    "statement": "Nilai dari ekspresi $(\\sec \\theta - \\tan \\theta)(\\sec \\theta + \\tan \\theta) + (\\csc^2 \\theta - \\cot^2 \\theta)$ untuk sudut lancip $\\theta$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Bentuk selisih dua kuadrat trigonometri memanfaatkan identitas turunan Pythagoras $\\sec^2 \\theta - \\tan^2 \\theta = 1$ dan $\\csc^2 \\theta - \\cot^2 \\theta = 1$.",
      "steps": "1. Uraikan perkalian suku sekawan pertama menggunakan rumus selisih dua kuadrat $(a - b)(a + b) = a^2 - b^2$:\n$$(\\sec \\theta - \\tan \\theta)(\\sec \\theta + \\tan \\theta) = \\sec^2 \\theta - \\tan^2 \\theta$$\n2. Dari identitas $\\sec^2 \\theta = 1 + \\tan^2 \\theta$, diperoleh:\n$$\\sec^2 \\theta - \\tan^2 \\theta = 1$$\n3. Perhatikan suku kedua, dari identitas $\\csc^2 \\theta = 1 + \\cot^2 \\theta$, diperoleh:\n$$\\csc^2 \\theta - \\cot^2 \\theta = 1$$\n4. Jumlahkan kedua hasil:\n$$1 + 1 = 2$$\n5. Jadi, nilai ekspresi tersebut bernilai konstan $2$ (pilihan C).",
      "pitfalls": "Keliru mengingat tanda pada identitas sehingga mengira $\\sec^2 \\theta - \\tan^2 \\theta = -1$ atau menganggap nilainya saling menghilangkan bernilai 0."
    },
    "subTopicSlug": "identitas-pythagoras",
    "bab": "Trigonometri Dasar",
    "subBab": "Identitas Pythagoras",
    "subTopic": "Identitas Pythagoras",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang",
    "hint": "Bentuk selisih dua kuadrat trigonometri memanfaatkan identitas turunan Pythagoras $\\sec^2 \\theta - \\tan^2 \\theta = 1$ dan $\\csc^2 \\theta - \\cot^2 \\theta = 1$."
  },
  {
    "id": "fun-trig-dasar-pythagoras-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-pythagoras",
    "category": "Manipulasi Jumlah Kuadrat Tangen dan Kotangen",
    "difficulty": "sedang",
    "statement": "Jika diketahui $\\tan x + \\cot x = 3$, maka nilai dari $\\tan^2 x + \\cot^2 x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5$",
      "$7$",
      "$9$",
      "$11$",
      "$13$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Karena $\\cot x = \\frac{1}{\\tan x}$, maka hasil kali $\\tan x \\cdot \\cot x = 1$. Gunakan manipulasi kuadrat aljabar $a^2 + b^2 = (a + b)^2 - 2ab$.",
      "steps": "1. Kuadratkan kedua ruas persamaan $\\tan x + \\cot x = 3$:\n$$(\\tan x + \\cot x)^2 = 3^2$$\n2. Uraikan bentuk kuadrat binomial:\n$$\\tan^2 x + 2\\tan x \\cot x + \\cot^2 x = 9$$\n3. Mengingat $\\tan x \\cot x = 1$, substitusikan nilai tersebut:\n$$\\tan^2 x + 2(1) + \\cot^2 x = 9$$\n4. Kurangkan kedua ruas dengan $2$:\n$$\\tan^2 x + \\cot^2 x = 9 - 2 = 7$$\n5. Jadi, nilai dari $\\tan^2 x + \\cot^2 x$ adalah $7$ (pilihan B).",
      "pitfalls": "Langsung menguadratkan angka 3 menjadi 9 tanpa mengurangkan suku silang $2\\tan x\\cot x$."
    },
    "subTopicSlug": "identitas-pythagoras",
    "bab": "Trigonometri Dasar",
    "subBab": "Identitas Pythagoras",
    "subTopic": "Identitas Pythagoras",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang",
    "hint": "Karena $\\cot x = \\frac{1}{\\tan x}$, maka hasil kali $\\tan x \\cdot \\cot x = 1$. Gunakan manipulasi kuadrat aljabar $a^2 + b^2 = (a + b)^2 - 2ab$. **Tips:** Langsung menguadratkan angka 3 menjadi 9 tanpa mengurangkan suku silang $2\\tan x\\cot x$."
  },
  {
    "id": "fun-trig-dasar-pythagoras-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-pythagoras",
    "category": "Penyederhanaan Suku Rasional Trigonometri",
    "difficulty": "sedang",
    "statement": "Bentuk $\\frac{1}{1 - \\sin x} + \\frac{1}{1 + \\sin x}$ untuk $\\cos x \\neq 0$ dapat disederhanakan menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\sin^2 x$",
      "$2\\cos^2 x$",
      "$2\\tan^2 x$",
      "$2\\csc^2 x$",
      "$2\\sec^2 x$"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Perkalian penyebut sekawan $(1 - \\sin x)(1 + \\sin x) = 1 - \\sin^2 x = \\cos^2 x$ memungkinkan pecahan diubah menjadi bentuk secan kuadrat.",
      "steps": "1. Samakan penyebut kedua pecahan:\n$$\\frac{1}{1 - \\sin x} + \\frac{1}{1 + \\sin x} = \\frac{(1 + \\sin x) + (1 - \\sin x)}{(1 - \\sin x)(1 + \\sin x)}$$\n2. Sederhanakan bagian pembilang dan kalikan penyebutnya:\n$$= \\frac{2}{1 - \\sin^2 x}$$\n3. Gunakan identitas Pythagoras $1 - \\sin^2 x = \\cos^2 x$:\n$$= \\frac{2}{\\cos^2 x}$$\n4. Ubah ke dalam bentuk secan kuadrat mengingat $\\sec x = \\frac{1}{\\cos x}$:\n$$= 2\\sec^2 x$$\n5. Jadi, hasil penyederhanaannya adalah $2\\sec^2 x$ (pilihan E).",
      "pitfalls": "Keliru dalam operasi aljabar penyebut dengan menulis $1 + \\sin^2 x$ bukannya $1 - \\sin^2 x$."
    },
    "subTopicSlug": "identitas-pythagoras",
    "bab": "Trigonometri Dasar",
    "subBab": "Identitas Pythagoras",
    "subTopic": "Identitas Pythagoras",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang",
    "hint": "Perkalian penyebut sekawan $(1 - \\sin x)(1 + \\sin x) = 1 - \\sin^2 x = \\cos^2 x$ memungkinkan pecahan diubah menjadi bentuk secan kuadrat. **Tips:** Keliru dalam operasi aljabar penyebut dengan menulis $1 + \\sin^2 x$ bukannya $1 - \\sin^2 x$."
  },
  {
    "id": "hots-mtk-03",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subTopicId": "fun-trig-dasar-pythagoras",
    "category": "Sifat Simetri & Identitas Trigonometri Lanjut",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Jika nilai dari ekspresi berikut dihitung pada interval $[0, \\pi]$:\n$$I = \\int_{0}^{\\pi} \\frac{x \\sin x}{1 + \\cos^2 x} \\, dx$$\nmaka nilai pasti dari integral tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{\\pi^2}{8}$",
      "$\\frac{\\pi^2}{4}$",
      "$\\frac{\\pi^2}{2}$",
      "$\\frac{\\pi}{4}$",
      "$\\pi$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>King's Property Sifat Simetri Integral:</strong><br>\n          $$\\int_{a}^{b} f(x)\\,dx = \\int_{a}^{b} f(a+b-x)\\,dx$$\n          Khusus untuk batas $[0, \\pi]$ dengan $x \\cdot g(\\sin x)$:\n          $$\\int_{0}^{\\pi} x g(\\sin x)\\,dx = \\frac{\\pi}{2} \\int_{0}^{\\pi} g(\\sin x)\\,dx$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Terapkan substitusi $x \\to \\pi - x$:\n            $$I = \\int_{0}^{\\pi} \\frac{(\\pi - x)\\sin(\\pi - x)}{1 + \\cos^2(\\pi - x)} \\, dx = \\int_{0}^{\\pi} \\frac{(\\pi - x)\\sin x}{1 + \\cos^2 x} \\, dx$$\n          </li>\n          <li>Jumlahkan kedua bentuk $I$:\n            $$2I = \\pi \\int_{0}^{\\pi} \\frac{\\sin x}{1 + \\cos^2 x} \\, dx \\implies I = \\frac{\\pi}{2} \\int_{0}^{\\pi} \\frac{\\sin x}{1 + \\cos^2 x} \\, dx$$\n          </li>\n          <li>Substitusi $u = \\cos x \\implies du = -\\sin x \\, dx$.<br>\n            Saat $x = 0 \\implies u = 1$; saat $x = \\pi \\implies u = -1$:\n            $$I = \\frac{\\pi}{2} \\int_{1}^{-1} \\frac{-du}{1 + u^2} = \\frac{\\pi}{2} \\int_{-1}^{1} \\frac{du}{1 + u^2}$$\n          </li>\n          <li>Anti-turunan baku $\\arctan(u)$:\n            $$I = \\frac{\\pi}{2} [\\arctan(1) - \\arctan(-1)] = \\frac{\\pi}{2} \\left[ \\frac{\\pi}{4} - \\left(-\\frac{\\pi}{4}\\right) \\right] = \\frac{\\pi}{2} \\left( \\frac{\\pi}{2} \\right) = \\frac{\\pi^2}{4}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering lupa mengalikan $\\frac{\\pi}{2}$ dengan hasil integral $\\frac{\\pi}{2}$, sehingga mendapatkan $\\frac{\\pi}{2}$ atau salah tanda saat integrasi substitusi $u = \\cos x$.\n        </div>\n      "
    },
    "bab": "Trigonometri Dasar",
    "subBab": "Identitas Pythagoras",
    "subTopic": "Identitas Pythagoras",
    "chapterTitle": "Trigonometri Dasar",
    "subChapterId": "fun-trig-dasar",
    "subTopicSlug": "identitas-pythagoras",
    "hint": "King's Property Sifat Simetri Integral: $$\\int_{a}^{b} f(x)\\,dx = \\int_{a}^{b} f(a+b-x)\\,dx$$ Khusus untuk batas $[0, \\pi]$ dengan $x \\cdot g(\\sin x)$: $$\\int_{0}^{\\pi} x g(\\sin x)\\,dx = \\frac{\\pi}{2} \\int_{0}^{\\pi} g(\\sin x)\\,dx$$."
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
