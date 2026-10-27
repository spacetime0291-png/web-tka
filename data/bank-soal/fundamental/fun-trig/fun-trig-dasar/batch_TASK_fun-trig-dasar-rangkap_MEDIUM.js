/**
 * Batch Task: TASK_fun-trig-dasar-rangkap_MEDIUM
 * SubTopic: Trigonometri Dasar: Rumus Sudut Rangkap (fun-trig-dasar-rangkap)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-trig-dasar-rangkap-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-rangkap",
    category: "Sinus Sudut Rangkap dari Selisih Linier",
    difficulty: "sedang",
    statement: "Diketahui $\\sin x - \\cos x = \\frac{1}{5}$. Nilai dari $\\sin 2x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{25}$",
      "$\\frac{7}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{24}{25}$",
      "$\\frac{26}{25}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Kuadrat dari selisih $(\\sin x - \\cos x)^2$ memuat identitas Pythagoras dan sudut rangkap: $(\\sin x - \\cos x)^2 = 1 - \\sin 2x$.",
      steps: "1. Kuadratkan kedua ruas persamaan:\n$$(\\sin x - \\cos x)^2 = \\left(\\frac{1}{5}\\right)^2$$\n2. Uraikan ruas kiri:\n$$\\sin^2 x - 2\\sin x \\cos x + \\cos^2 x = \\frac{1}{25}$$\n3. Gabungkan suku $\\sin^2 x + \\cos^2 x = 1$ dan gunakan $\\sin 2x = 2\\sin x \\cos x$:\n$$1 - \\sin 2x = \\frac{1}{25}$$\n4. Selesaikan untuk $\\sin 2x$:\n$$\\sin 2x = 1 - \\frac{1}{25} = \\frac{24}{25}$$\n5. Jadi, nilai $\\sin 2x$ adalah $\\frac{24}{25}$ (pilihan D).",
      pitfalls: "Lupa bahwa tanda suku silang bernilai negatif $(-2\\sin x \\cos x)$ sehingga malah menghitung $1 + \\frac{1}{25} = \\frac{26}{25}$."
    }
  },
  {
    id: "fun-trig-dasar-rangkap-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-rangkap",
    category: "Penyederhanaan Rasional Sudut Rangkap ke Tangen",
    difficulty: "sedang",
    statement: "Bentuk sederhana dari $\\frac{\\sin 2x}{1 + \\cos 2x}$ untuk $x \\neq \\frac{\\pi}{2} + k\\pi$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\sin x$",
      "$\\cos x$",
      "$\\tan x$",
      "$\\cot x$",
      "$\\sec x$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan rumus sudut rangkap $\\sin 2x = 2\\sin x \\cos x$ dan $1 + \\cos 2x = 2\\cos^2 x$.",
      steps: "1. Tuliskan pembilang dalam rumus sudut rangkap:\n$$\\sin 2x = 2\\sin x \\cos x$$\n2. Tuliskan penyebut menggunakan bentuk $\\cos 2x = 2\\cos^2 x - 1$:\n$$1 + \\cos 2x = 1 + (2\\cos^2 x - 1) = 2\\cos^2 x$$\n3. Bentuk pecahannya menjadi:\n$$\\frac{\\sin 2x}{1 + \\cos 2x} = \\frac{2\\sin x \\cos x}{2\\cos^2 x}$$\n4. Batalkan faktor persekutuan $2\\cos x$:\n$$= \\frac{\\sin x}{\\cos x} = \\tan x$$\n5. Jadi, bentuk sederhananya adalah $\\tan x$ (pilihan C).",
      pitfalls: "Memilih varian cosinus sudut rangkap yang salah pada penyebut sehingga tidak saling mengeliminasi dengan angka 1."
    }
  },
  {
    id: "fun-trig-dasar-rangkap-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-rangkap",
    category: "Menentukan Tangen Sudut Tunggal dari Sudut Rangkap",
    difficulty: "sedang",
    statement: "Jika $\\cos 2A = \\frac{7}{25}$ dengan $A$ merupakan sudut lancip ($0^\\circ < A < 90^\\circ$), maka nilai dari $\\tan A$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{3}{5}$",
      "$\\frac{4}{5}$",
      "$\\frac{3}{4}$",
      "$\\frac{4}{3}$",
      "$\\frac{7}{24}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Rumus setengah sudut atau reduksi kuadrat: $\\sin^2 A = \\frac{1 - \\cos 2A}{2}$ dan $\\cos^2 A = \\frac{1 + \\cos 2A}{2}$.",
      steps: "1. Hitung nilai $\\sin^2 A$:\n$$\\sin^2 A = \\frac{1 - \\frac{7}{25}}{2} = \\frac{\\frac{18}{25}}{2} = \\frac{9}{25} \\implies \\sin A = \\frac{3}{5}$$\n2. Hitung nilai $\\cos^2 A$:\n$$\\cos^2 A = \\frac{1 + \\frac{7}{25}}{2} = \\frac{\\frac{32}{25}}{2} = \\frac{16}{25} \\implies \\cos A = \\frac{4}{5}$$\n3. Hitung nilai $\\tan A$:\n$$\\tan A = \\frac{\\sin A}{\\cos A} = \\frac{\\frac{3}{5}}{\\frac{4}{5}} = \\frac{3}{4}$$\n4. Jadi, nilai dari $\\tan A$ adalah $\\frac{3}{4}$ (pilihan C).",
      pitfalls: "Terbalik dalam pembagian nilai $\\frac{\\sin A}{\\cos A}$ sehingga memilih $\\frac{4}{3}$."
    }
  },
  {
    id: "fun-trig-dasar-rangkap-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-rangkap",
    category: "Penyederhanaan Selisih Cosinus Rangkap",
    difficulty: "sedang",
    statement: "Bentuk $\\frac{1 - \\cos 2\\theta}{\\sin 2\\theta}$ untuk $\\sin 2\\theta \\neq 0$ ekuivalen dengan ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\cot \\theta$",
      "$\\tan \\theta$",
      "$\\sin \\theta$",
      "$\\cos \\theta$",
      "$\\sec \\theta$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gunakan identitas sudut rangkap $1 - \\cos 2\\theta = 2\\sin^2 \\theta$ dan $\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$.",
      steps: "1. Ubah pembilang dengan rumus $1 - \\cos 2\\theta = 2\\sin^2 \\theta$:\n$$\\text{Pembilang} = 2\\sin^2 \\theta$$\n2. Ubah penyebut dengan rumus $\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$:\n$$\\text{Penyebut} = 2\\sin \\theta \\cos \\theta$$\n3. Tuliskan pecahan secara lengkap:\n$$\\frac{1 - \\cos 2\\theta}{\\sin 2\\theta} = \\frac{2\\sin^2 \\theta}{2\\sin \\theta \\cos \\theta}$$\n4. Sederhanakan pecahan:\n$$= \\frac{\\sin \\theta}{\\cos \\theta} = \\tan \\theta$$\n5. Jadi, bentuk yang ekuivalen adalah $\\tan \\theta$ (pilihan B).",
      pitfalls: "Tertukar antara $\\tan \\theta$ dan $\\cot \\theta$ karena salah menempatkan sinus kuadrat pada penyebut."
    }
  },
  {
    id: "fun-trig-dasar-rangkap-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-rangkap",
    category: "Penerapan Berulang Rumus Sudut Rangkap",
    difficulty: "sedang",
    statement: "Nilai dari ekspresi $\\sin 22{,}5^\\circ \\cos 22{,}5^\\circ \\cos 45^\\circ$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{8}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{2}}{4}$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Identitas $\\sin \\alpha \\cos \\alpha = \\frac{1}{2}\\sin 2\\alpha$ dapat diterapkan secara beruntun pada sudut-sudut kelipatan dua.",
      steps: "1. Terapkan identitas sudut rangkap pada pasangan sudut pertama:\n$$\\sin 22{,}5^\\circ \\cos 22{,}5^\\circ = \\frac{1}{2}\\sin(2 \\times 22{,}5^\\circ) = \\frac{1}{2}\\sin 45^\\circ$$\n2. Substitusikan kembali ke bentuk perkalian awal:\n$$\\left(\\frac{1}{2}\\sin 45^\\circ\\right) \\cos 45^\\circ = \\frac{1}{2}(\\sin 45^\\circ \\cos 45^\\circ)$$\n3. Terapkan kembali identitas sudut rangkap untuk sudut $45^\\circ$:\n$$= \\frac{1}{2} \\times \\left(\\frac{1}{2}\\sin(2 \\times 45^\\circ)\\right) = \\frac{1}{4}\\sin 90^\\circ$$\n4. Karena $\\sin 90^\\circ = 1$, maka diperoleh:\n$$= \\frac{1}{4}(1) = \\frac{1}{4}$$\n5. Jadi, nilai ekspresi tersebut adalah $\\frac{1}{4}$ (pilihan B).",
      pitfalls: "Lupa faktor $\\frac{1}{2}$ pada setiap penerapan rumus sudut rangkap sehingga menghasilkan jawaban yang 2 atau 4 kali lebih besar."
    }
  }
];
