/**
 * Batch Task: TASK_fun-trig-dasar-pythagoras_EASY
 * SubTopic: Trigonometri Dasar: Identitas Pythagoras (fun-trig-dasar-pythagoras)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-trig-dasar-pythagoras-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-pythagoras",
    category: "Identitas Dasar Sinus dan Cosinus",
    difficulty: "mudah",
    statement: "Nilai dari ekspresi $\\sin^2 35^\\circ + \\cos^2 35^\\circ$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\sqrt{2}$",
      "$1$",
      "$\\sqrt{2}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Identitas pokok trigonometri menyatakan bahwa untuk setiap sudut real $\\alpha$, berlaku hubungan $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.",
      steps: "1. Amati sudut pada kedua suku: keduanya memiliki besar sudut yang sama, yaitu $\\alpha = 35^\\circ$.\n2. Gunakan identitas Pythagoras trigonometri:\n$$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$$\n3. Substitusikan $\\alpha = 35^\\circ$:\n$$\\sin^2 35^\\circ + \\cos^2 35^\\circ = 1$$\n4. Dengan demikian, nilai yang diperoleh adalah $1$ (pilihan D).",
      pitfalls: "Mencoba mencari nilai eksak $\\sin 35^\\circ$ dan $\\cos 35^\\circ$ secara manual tanpa menyadari berlakunya identitas dasar Pythagoras."
    }
  },
  {
    id: "fun-trig-dasar-pythagoras-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-pythagoras",
    category: "Menghitung Cosinus Kuadrat dari Sinus",
    difficulty: "mudah",
    statement: "Diketahui $\\sin x = \\frac{3}{5}$ dengan $x$ merupakan sudut lancip ($0^\\circ < x < 90^\\circ$). Nilai dari $\\cos^2 x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{9}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{16}{25}$",
      "$\\frac{4}{5}$",
      "$\\frac{21}{25}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Dari identitas $\\sin^2 x + \\cos^2 x = 1$, diperoleh rumus turunan $\\cos^2 x = 1 - \\sin^2 x$.",
      steps: "1. Diketahui $\\sin x = \\frac{3}{5}$. Hitung nilai $\\sin^2 x$:\n$$\\sin^2 x = \\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$$\n2. Gunakan relasi identitas Pythagoras:\n$$\\cos^2 x = 1 - \\sin^2 x$$\n3. Lakukan pengurangan pecahan:\n$$\\cos^2 x = 1 - \\frac{9}{25} = \\frac{25 - 9}{25} = \\frac{16}{25}$$\n4. Jadi, nilai dari $\\cos^2 x$ adalah $\\frac{16}{25}$ (pilihan C).",
      pitfalls: "Menjawab $\\frac{4}{5}$ karena terburu-buru menarik akar kuadrat padahal soal menanyakan $\\cos^2 x$ bukan $\\cos x$."
    }
  },
  {
    id: "fun-trig-dasar-pythagoras-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-pythagoras",
    category: "Identitas Tangen dan Secan",
    difficulty: "mudah",
    statement: "Bentuk ekuivalen dari ekspresi $1 + \\tan^2 \\alpha$ untuk setiap $\\alpha \\neq 90^\\circ + k \\cdot 180^\\circ$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\sin^2 \\alpha$",
      "$\\cos^2 \\alpha$",
      "$\\sec^2 \\alpha$",
      "$\\csc^2 \\alpha$",
      "$\\cot^2 \\alpha$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Membagi kedua ruas identitas $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ dengan $\\cos^2 \\alpha$ menghasilkan identitas $1 + \\tan^2 \\alpha = \\sec^2 \\alpha$.",
      steps: "1. Tuliskan bentuk tangen ke dalam definisi sinus dan cosinus:\n$$1 + \\tan^2 \\alpha = 1 + \\frac{\\sin^2 \\alpha}{\\cos^2 \\alpha}$$\n2. Samakan penyebut:\n$$= \\frac{\\cos^2 \\alpha + \\sin^2 \\alpha}{\\cos^2 \\alpha}$$\n3. Menggunakan identitas $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$:\n$$= \\frac{1}{\\cos^2 \\alpha} = \\sec^2 \\alpha$$\n4. Jadi, bentuk ekuivalennya adalah $\\sec^2 \\alpha$ (pilihan C).",
      pitfalls: "Tertukar antara $\\sec^2 \\alpha$ dengan $\\csc^2 \\alpha$, di mana $\\csc^2 \\alpha = 1 + \\cot^2 \\alpha$."
    }
  },
  {
    id: "fun-trig-dasar-pythagoras-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-pythagoras",
    category: "Penerapan Identitas Secan Kuadrat",
    difficulty: "mudah",
    statement: "Diketahui $\\tan x = \\frac{4}{3}$ dengan $x$ sudut lancip. Nilai dari $\\sec^2 x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{7}{9}$",
      "$\\frac{16}{9}$",
      "$\\frac{20}{9}$",
      "$\\frac{25}{9}$",
      "$\\frac{5}{3}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Identitas Pythagoras antara tangen dan secan adalah $\\sec^2 x = 1 + \\tan^2 x$.",
      steps: "1. Kuadratkan nilai tangen yang diketahui:\n$$\\tan^2 x = \\left(\\frac{4}{3}\\right)^2 = \\frac{16}{9}$$\n2. Gunakan hubungan identitas Pythagoras:\n$$\\sec^2 x = 1 + \\tan^2 x$$\n3. Hitung penjumlahan pecahan:\n$$\\sec^2 x = 1 + \\frac{16}{9} = \\frac{9 + 16}{9} = \\frac{25}{9}$$\n4. Jadi, nilai dari $\\sec^2 x$ adalah $\\frac{25}{9}$ (pilihan D).",
      pitfalls: "Menjawab $\\frac{16}{9}$ karena lupa menambahkan angka $1$ pada rumus identitas."
    }
  },
  {
    id: "fun-trig-dasar-pythagoras-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-pythagoras",
    category: "Penyederhanaan Pecahan Identitas Pythagoras",
    difficulty: "mudah",
    statement: "Bentuk sederhana dari $\\frac{1 - \\cos^2 \\theta}{\\sin \\theta}$ untuk $\\sin \\theta \\neq 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\cos \\theta$",
      "$\\sin \\theta$",
      "$\\tan \\theta$",
      "$\\sec \\theta$",
      "$1$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Berdasarkan identitas Pythagoras, pembilang $1 - \\cos^2 \\theta$ dapat diubah menjadi $\\sin^2 \\theta$.",
      steps: "1. Ubah bagian pembilang menggunakan relasi $1 - \\cos^2 \\theta = \\sin^2 \\theta$:\n$$\\frac{1 - \\cos^2 \\theta}{\\sin \\theta} = \\frac{\\sin^2 \\theta}{\\sin \\theta}$$\n2. Lakukan pembagian suku aljabar:\n$$= \\sin \\theta$$\n3. Jadi, bentuk paling sederhana adalah $\\sin \\theta$ (pilihan B).",
      pitfalls: "Membagi langsung $1$ dengan $\\sin \\theta$ dan $\\cos^2 \\theta$ dengan $\\sin \\theta$ sehingga bentuk pecahan menjadi semakin rumit alih-alih sederhana."
    }
  }
];
