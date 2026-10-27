/**
 * Batch Task: TASK_fun-trig-dasar-rangkap_EASY
 * SubTopic: Trigonometri Dasar: Rumus Sudut Rangkap (fun-trig-dasar-rangkap)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-trig-dasar-rangkap-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-rangkap",
    category: "Menghitung Sinus Sudut Rangkap",
    difficulty: "mudah",
    statement: "Diketahui $\\sin \\alpha = \\frac{3}{5}$ dengan $\\alpha$ merupakan sudut lancip. Nilai dari $\\sin 2\\alpha$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{6}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{18}{25}$",
      "$\\frac{24}{25}$",
      "$\\frac{7}{25}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Rumus sudut rangkap untuk sinus adalah $\\sin 2\\alpha = 2\\sin \\alpha \\cos \\alpha$.",
      steps: "1. Tentukan $\\cos \\alpha$ dengan identitas Pythagoras pada sudut lancip:\n$$\\cos \\alpha = \\sqrt{1 - \\sin^2 \\alpha} = \\sqrt{1 - \\left(\\frac{3}{5}\\right)^2} = \\frac{4}{5}$$\n2. Terapkan rumus sinus sudut rangkap:\n$$\\sin 2\\alpha = 2\\sin \\alpha \\cos \\alpha$$\n3. Substitusikan nilai yang diperoleh:\n$$\\sin 2\\alpha = 2 \\times \\frac{3}{5} \\times \\frac{4}{5} = \\frac{24}{25}$$\n4. Jadi, nilai dari $\\sin 2\\alpha$ adalah $\\frac{24}{25}$ (pilihan D).",
      pitfalls: "Hanya mengalikan sinus dengan 2 (yaitu $2 \\times \\frac{3}{5} = \\frac{6}{5}$) tanpa menyadari berlakunya rumus perkalian dengan $\\cos \\alpha$."
    }
  },
  {
    id: "fun-trig-dasar-rangkap-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-rangkap",
    category: "Menghitung Cosinus Sudut Rangkap dari Cosinus",
    difficulty: "mudah",
    statement: "Diketahui $\\cos \\theta = \\frac{4}{5}$. Nilai dari $\\cos 2\\theta$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{7}{25}$",
      "$\\frac{9}{25}$",
      "$\\frac{14}{25}$",
      "$\\frac{16}{25}$",
      "$\\frac{24}{25}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Rumus sudut rangkap cosinus dalam bentuk cosinus kuadrat adalah $\\cos 2\\theta = 2\\cos^2 \\theta - 1$.",
      steps: "1. Kuadratkan nilai cosinus yang diketahui:\n$$\\cos^2 \\theta = \\left(\\frac{4}{5}\\right)^2 = \\frac{16}{25}$$\n2. Terapkan rumus $\\cos 2\\theta = 2\\cos^2 \\theta - 1$:\n$$\\cos 2\\theta = 2\\left(\\frac{16}{25}\\right) - 1$$\n3. Selesaikan operasi aritmetika:\n$$= \\frac{32}{25} - \\frac{25}{25} = \\frac{7}{25}$$\n4. Jadi, nilai dari $\\cos 2\\theta$ adalah $\\frac{7}{25}$ (pilihan A).",
      pitfalls: "Lupa mengurangkan dengan 1 atau lupa mengalikan dengan 2 sebelum mengurangkan."
    }
  },
  {
    id: "fun-trig-dasar-rangkap-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-rangkap",
    category: "Menghitung Tangen Sudut Rangkap",
    difficulty: "mudah",
    statement: "Diketahui $\\tan x = \\frac{1}{2}$. Nilai dari $\\tan 2x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{2}{3}$",
      "$1$",
      "$\\frac{4}{3}$",
      "$\\frac{5}{3}$",
      "$2$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Rumus sudut rangkap untuk tangen adalah $\\tan 2x = \\frac{2\\tan x}{1 - \\tan^2 x}$.",
      steps: "1. Substitusikan $\\tan x = \\frac{1}{2}$ ke dalam rumus sudut rangkap tangen:\n$$\\tan 2x = \\frac{2\\left(\\frac{1}{2}\\right)}{1 - \\left(\\frac{1}{2}\\right)^2}$$\n2. Sederhanakan bagian pembilang dan penyebut:\n$$\\text{Pembilang} = 2 \\times \\frac{1}{2} = 1$$\n$$\\text{Penyebut} = 1 - \\frac{1}{4} = \\frac{3}{4}$$\n3. Hitung hasil bagi:\n$$\\tan 2x = \\frac{1}{\\frac{3}{4}} = \\frac{4}{3}$$\n4. Jadi, nilai dari $\\tan 2x$ adalah $\\frac{4}{3}$ (pilihan C).",
      pitfalls: "Menulis tanda tambah pada penyebut $(1 + \\tan^2 x)$ yang merupakan rumus turunan secan kuadrat."
    }
  },
  {
    id: "fun-trig-dasar-rangkap-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-rangkap",
    category: "Sederhana Bentuk Perkalian Sinus Cosinus Sudut Sama",
    difficulty: "mudah",
    statement: "Nilai dari bentuk perkalian $2\\sin 15^\\circ \\cos 15^\\circ$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\sqrt{2}$",
      "$\\frac{1}{2}\\sqrt{3}$",
      "$1$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Bentuk $2\\sin A \\cos A$ merupakan bentuk terurai dari rumus sudut rangkap $\\sin 2A$.",
      steps: "1. Identifikasi bentuk rumus dengan memisalkan $A = 15^\\circ$:\n$$2\\sin 15^\\circ \\cos 15^\\circ = \\sin(2 \\times 15^\\circ)$$\n2. Lakukan perkalian sudut:\n$$= \\sin 30^\\circ$$\n3. Masukkan nilai sinus sudut istimewa $30^\\circ$:\n$$\\sin 30^\\circ = \\frac{1}{2}$$\n4. Jadi, nilai ekspresi tersebut adalah $\\frac{1}{2}$ (pilihan B).",
      pitfalls: "Mencari nilai $\\sin 15^\\circ$ dan $\\cos 15^\\circ$ terlebih dahulu sehingga perhitungan menjadi panjang dan berisiko salah hitung."
    }
  },
  {
    id: "fun-trig-dasar-rangkap-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-rangkap",
    category: "Sederhana Bentuk Cosinus Sudut Rangkap dari Sinus",
    difficulty: "mudah",
    statement: "Nilai dari ekspresi $1 - 2\\sin^2 15^\\circ$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\sqrt{2}$",
      "$\\frac{1}{2}\\sqrt{3}$",
      "$\\frac{\\sqrt{3}}{3}$",
      "$1$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Bentuk $1 - 2\\sin^2 A$ ekuivalen dengan rumus cosinus sudut rangkap $\\cos 2A$.",
      steps: "1. Identifikasi bentuk sudut rangkap dengan $A = 15^\\circ$:\n$$1 - 2\\sin^2 15^\\circ = \\cos(2 \\times 15^\\circ)$$\n2. Kalikan besar sudut:\n$$= \\cos 30^\\circ$$\n3. Ambil nilai cosinus sudut istimewa $30^\\circ$:\n$$\\cos 30^\\circ = \\frac{1}{2}\\sqrt{3}$$\n4. Jadi, nilai dari ekspresi tersebut adalah $\\frac{1}{2}\\sqrt{3}$ (pilihan C).",
      pitfalls: "Tertukar dengan fungsi sinus sehingga menjawab $\\sin 30^\\circ = \\frac{1}{2}$."
    }
  }
];
