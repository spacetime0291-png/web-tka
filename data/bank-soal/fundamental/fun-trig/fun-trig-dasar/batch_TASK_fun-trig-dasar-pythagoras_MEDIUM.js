/**
 * Batch Task: TASK_fun-trig-dasar-pythagoras_MEDIUM
 * SubTopic: Trigonometri Dasar: Identitas Pythagoras (fun-trig-dasar-pythagoras)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-trig-dasar-pythagoras-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-pythagoras",
    category: "Penyederhanaan Penjumlahan Pecahan Trigonometri",
    difficulty: "sedang",
    statement: "Bentuk sederhana dari ekspresi $\\frac{\\sin x}{1 + \\cos x} + \\frac{1 + \\cos x}{\\sin x}$ untuk $\\sin x(1 + \\cos x) \\neq 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\sin x$",
      "$2\\cos x$",
      "$2\\csc x$",
      "$2\\sec x$",
      "$\\tan x$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Penyederhanaan pecahan trigonometri dilakukan dengan menyamakan penyebut dan menerapkan identitas pokok $\\sin^2 x + \\cos^2 x = 1$ serta $\\csc x = \\frac{1}{\\sin x}$.",
      steps: "1. Samakan penyebut kedua pecahan aljabar trigonometri:\n$$\\frac{\\sin^2 x + (1 + \\cos x)^2}{\\sin x (1 + \\cos x)}$$\n2. Jabarkan bentuk kuadrat pada pembilang:\n$$= \\frac{\\sin^2 x + 1 + 2\\cos x + \\cos^2 x}{\\sin x (1 + \\cos x)}$$\n3. Gabungkan suku $\\sin^2 x + \\cos^2 x = 1$:\n$$= \\frac{(1) + 1 + 2\\cos x}{\\sin x (1 + \\cos x)} = \\frac{2 + 2\\cos x}{\\sin x (1 + \\cos x)}$$\n4. Faktorkan pembilang dan lakukan pembatalan faktor persekutuan $(1 + \\cos x)$:\n$$= \\frac{2(1 + \\cos x)}{\\sin x (1 + \\cos x)} = \\frac{2}{\\sin x} = 2\\csc x$$\n5. Jadi, bentuk sederhananya adalah $2\\csc x$ (pilihan C).",
      pitfalls: "Lupa menjabarkan suku tengah $2\\cos x$ pada penjabaran kuadrat $(1 + \\cos x)^2$ sehingga mengira pembilangnya menjadi $1 + 1 = 2$."
    }
  },
  {
    id: "fun-trig-dasar-pythagoras-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-pythagoras",
    category: "Perkalian Sinus dan Cosinus dari Jumlah Linier",
    difficulty: "sedang",
    statement: "Diketahui $\\sin x + \\cos x = \\frac{7}{5}$. Nilai dari $\\sin x \\cdot \\cos x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{7}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{24}{25}$",
      "$\\frac{16}{25}$",
      "$\\frac{9}{25}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Dengan menguadratkan kedua ruas persamaan $(\\sin x + \\cos x)^2$, identitas $\\sin^2 x + \\cos^2 x = 1$ memunculkan suku perkalian $2\\sin x \\cos x$.",
      steps: "1. Kuadratkan kedua ruas persamaan yang diketahui:\n$$(\\sin x + \\cos x)^2 = \\left(\\frac{7}{5}\\right)^2$$\n2. Uraikan ruas kiri:\n$$\\sin^2 x + 2\\sin x \\cos x + \\cos^2 x = \\frac{49}{25}$$\n3. Karena $\\sin^2 x + \\cos^2 x = 1$, maka persamaan menjadi:\n$$1 + 2\\sin x \\cos x = \\frac{49}{25}$$\n4. Pindahkan konstanta $1$ ke ruas kanan:\n$$2\\sin x \\cos x = \\frac{49}{25} - 1 = \\frac{24}{25}$$\n5. Bagi kedua ruas dengan $2$:\n$$\\sin x \\cos x = \\frac{12}{25}$$\n6. Jadi, nilai $\\sin x \\cdot \\cos x$ adalah $\\frac{12}{25}$ (pilihan B).",
      pitfalls: "Lupa membagi dengan 2 setelah mengurangkan 1 dari $\\frac{49}{25}$, sehingga memilih $\\frac{24}{25}$."
    }
  },
  {
    id: "fun-trig-dasar-pythagoras-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-pythagoras",
    category: "Kombinasi Identitas Pythagoras Lanjut",
    difficulty: "sedang",
    statement: "Nilai dari ekspresi $(\\sec \\theta - \\tan \\theta)(\\sec \\theta + \\tan \\theta) + (\\csc^2 \\theta - \\cot^2 \\theta)$ untuk sudut lancip $\\theta$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0$",
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Bentuk selisih dua kuadrat trigonometri memanfaatkan identitas turunan Pythagoras $\\sec^2 \\theta - \\tan^2 \\theta = 1$ dan $\\csc^2 \\theta - \\cot^2 \\theta = 1$.",
      steps: "1. Uraikan perkalian suku sekawan pertama menggunakan rumus selisih dua kuadrat $(a - b)(a + b) = a^2 - b^2$:\n$$(\\sec \\theta - \\tan \\theta)(\\sec \\theta + \\tan \\theta) = \\sec^2 \\theta - \\tan^2 \\theta$$\n2. Dari identitas $\\sec^2 \\theta = 1 + \\tan^2 \\theta$, diperoleh:\n$$\\sec^2 \\theta - \\tan^2 \\theta = 1$$\n3. Perhatikan suku kedua, dari identitas $\\csc^2 \\theta = 1 + \\cot^2 \\theta$, diperoleh:\n$$\\csc^2 \\theta - \\cot^2 \\theta = 1$$\n4. Jumlahkan kedua hasil:\n$$1 + 1 = 2$$\n5. Jadi, nilai ekspresi tersebut bernilai konstan $2$ (pilihan C).",
      pitfalls: "Keliru mengingat tanda pada identitas sehingga mengira $\\sec^2 \\theta - \\tan^2 \\theta = -1$ atau menganggap nilainya saling menghilangkan bernilai 0."
    }
  },
  {
    id: "fun-trig-dasar-pythagoras-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-pythagoras",
    category: "Manipulasi Jumlah Kuadrat Tangen dan Kotangen",
    difficulty: "sedang",
    statement: "Jika diketahui $\\tan x + \\cot x = 3$, maka nilai dari $\\tan^2 x + \\cot^2 x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5$",
      "$7$",
      "$9$",
      "$11$",
      "$13$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Karena $\\cot x = \\frac{1}{\\tan x}$, maka hasil kali $\\tan x \\cdot \\cot x = 1$. Gunakan manipulasi kuadrat aljabar $a^2 + b^2 = (a + b)^2 - 2ab$.",
      steps: "1. Kuadratkan kedua ruas persamaan $\\tan x + \\cot x = 3$:\n$$(\\tan x + \\cot x)^2 = 3^2$$\n2. Uraikan bentuk kuadrat binomial:\n$$\\tan^2 x + 2\\tan x \\cot x + \\cot^2 x = 9$$\n3. Mengingat $\\tan x \\cot x = 1$, substitusikan nilai tersebut:\n$$\\tan^2 x + 2(1) + \\cot^2 x = 9$$\n4. Kurangkan kedua ruas dengan $2$:\n$$\\tan^2 x + \\cot^2 x = 9 - 2 = 7$$\n5. Jadi, nilai dari $\\tan^2 x + \\cot^2 x$ adalah $7$ (pilihan B).",
      pitfalls: "Langsung menguadratkan angka 3 menjadi 9 tanpa mengurangkan suku silang $2\\tan x\\cot x$."
    }
  },
  {
    id: "fun-trig-dasar-pythagoras-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-pythagoras",
    category: "Penyederhanaan Suku Rasional Trigonometri",
    difficulty: "sedang",
    statement: "Bentuk $\\frac{1}{1 - \\sin x} + \\frac{1}{1 + \\sin x}$ untuk $\\cos x \\neq 0$ dapat disederhanakan menjadi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\sin^2 x$",
      "$2\\cos^2 x$",
      "$2\\tan^2 x$",
      "$2\\csc^2 x$",
      "$2\\sec^2 x$"
    ],
    correctIndex: 4,
    solution: {
      concept: "Perkalian penyebut sekawan $(1 - \\sin x)(1 + \\sin x) = 1 - \\sin^2 x = \\cos^2 x$ memungkinkan pecahan diubah menjadi bentuk secan kuadrat.",
      steps: "1. Samakan penyebut kedua pecahan:\n$$\\frac{1}{1 - \\sin x} + \\frac{1}{1 + \\sin x} = \\frac{(1 + \\sin x) + (1 - \\sin x)}{(1 - \\sin x)(1 + \\sin x)}$$\n2. Sederhanakan bagian pembilang dan kalikan penyebutnya:\n$$= \\frac{2}{1 - \\sin^2 x}$$\n3. Gunakan identitas Pythagoras $1 - \\sin^2 x = \\cos^2 x$:\n$$= \\frac{2}{\\cos^2 x}$$\n4. Ubah ke dalam bentuk secan kuadrat mengingat $\\sec x = \\frac{1}{\\cos x}$:\n$$= 2\\sec^2 x$$\n5. Jadi, hasil penyederhanaannya adalah $2\\sec^2 x$ (pilihan E).",
      pitfalls: "Keliru dalam operasi aljabar penyebut dengan menulis $1 + \\sin^2 x$ bukannya $1 - \\sin^2 x$."
    }
  }
];
