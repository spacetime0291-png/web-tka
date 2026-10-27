/**
 * Batch Task: TASK_fun-trig-dasar-kuadran_MEDIUM
 * SubTopic: Trigonometri Dasar: Sudut Berelasi di Berbagai Kuadran (fun-trig-dasar-kuadran)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-trig-dasar-kuadran-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-kuadran",
    category: "Menentukan Nilai Trigonometri di Kuadran II",
    difficulty: "sedang",
    statement: "Diketahui $\\sin A = \\frac{5}{13}$ dengan sudut $A$ merupakan sudut tumpul ($90^\\circ < A < 180^\\circ$). Nilai dari $\\cos A - \\tan A$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-\\frac{119}{156}$",
      "$-\\frac{79}{156}$",
      "$\\frac{79}{156}$",
      "$-\\frac{25}{156}$",
      "$\\frac{119}{156}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Sudut tumpul berada di Kuadran II, sehingga nilai cosinus dan tangen keduanya bertanda negatif: $\\cos A < 0$ dan $\\tan A < 0$.",
      steps: "1. Diketahui $\\sin A = \\frac{5}{13}$. Sisi samping segitiga siku-siku acuan adalah:\n$$\\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$$\n2. Karena $A$ di Kuadran II, tentukan tanda nilai perbandingannya:\n$$\\cos A = -\\frac{12}{13}$$\n$$\\tan A = \\frac{\\sin A}{\\cos A} = \\frac{\\frac{5}{13}}{-\\frac{12}{13}} = -\\frac{5}{12}$$\n3. Hitung nilai $\\cos A - \\tan A$:\n$$\\cos A - \\tan A = -\\frac{12}{13} - \\left(-\\frac{5}{12}\\right) = -\\frac{12}{13} + \\frac{5}{12}$$\n4. Samakan penyebut ($13 \\times 12 = 156$):\n$$= \\frac{-144 + 65}{156} = -\\frac{79}{156}$$\n5. Jadi, nilai dari $\\cos A - \\tan A$ adalah $-\\frac{79}{156}$ (pilihan B).",
      pitfalls: "Lupa bahwa $\\cos A$ dan $\\tan A$ bertanda negatif di Kuadran II, sehingga keliru menghitung nilai tanda operasi."
    }
  },
  {
    id: "fun-trig-dasar-kuadran-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-kuadran",
    category: "Periodisitas Sudut Lebih dari 360 Derajat",
    difficulty: "sedang",
    statement: "Nilai dari ekspresi $\\cos 750^\\circ + \\sin 420^\\circ$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{2}$",
      "$1$",
      "$\\sqrt{2}$",
      "$\\sqrt{3}$",
      "$2\\sqrt{3}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Fungsi sinus dan cosinus memiliki periode sebesar $360^\\circ$ ($2\\pi$), sehingga berlaku sifat $\\cos(k \\cdot 360^\\circ + \\alpha) = \\cos \\alpha$ dan $\\sin(k \\cdot 360^\\circ + \\alpha) = \\sin \\alpha$ untuk setiap bilangan bulat $k$.",
      steps: "1. Sederhanakan sudut $750^\\circ$:\n$$750^\\circ = 2 \\times 360^\\circ + 30^\\circ = 720^\\circ + 30^\\circ$$\n$$\\cos 750^\\circ = \\cos 30^\\circ = \\frac{1}{2}\\sqrt{3}$$\n2. Sederhanakan sudut $420^\\circ$:\n$$420^\\circ = 1 \\times 360^\\circ + 60^\\circ = 360^\\circ + 60^\\circ$$\n$$\\sin 420^\\circ = \\sin 60^\\circ = \\frac{1}{2}\\sqrt{3}$$\n3. Jumlahkan kedua nilai tersebut:\n$$\\cos 750^\\circ + \\sin 420^\\circ = \\frac{1}{2}\\sqrt{3} + \\frac{1}{2}\\sqrt{3} = \\sqrt{3}$$\n4. Jadi, nilai hasil penjumlahannya adalah $\\sqrt{3}$ (pilihan D).",
      pitfalls: "Keliru saat membagi sudut dengan $360^\\circ$ sehingga menghasilkan sisa sudut yang salah."
    }
  },
  {
    id: "fun-trig-dasar-kuadran-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-kuadran",
    category: "Relasi Sudut Kofungsi dan Kuadran",
    difficulty: "sedang",
    statement: "Bentuk sederhana dari pecahan trigonometri $\\frac{\\sin(90^\\circ + \\alpha) \\cdot \\cos(180^\\circ - \\alpha)}{\\tan(270^\\circ - \\alpha)}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-\\sin^2 \\alpha$",
      "$-\\cos^2 \\alpha$",
      "$-\\sin \\alpha \\cos \\alpha$",
      "$\\sin \\alpha \\cos \\alpha$",
      "$\\cos^2 \\alpha$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan kaidah sudut berelasi dan kofungsi:\n- $\\sin(90^\\circ + \\alpha) = \\cos \\alpha$ (Kuadran II, sinus positif dan kofungsi berubah).\n- $\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$ (Kuadran II, cosinus negatif).\n- $\\tan(270^\\circ - \\alpha) = \\cot \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha}$ (Kuadran III, tangen positif dan kofungsi berubah).",
      steps: "1. Substitusikan masing-masing relasi sudut ke dalam persamaan:\n$$\\frac{(\\cos \\alpha) \\cdot (-\\cos \\alpha)}{\\cot \\alpha}$$\n2. Sederhanakan pembilang:\n$$= \\frac{-\\cos^2 \\alpha}{\\cot \\alpha}$$\n3. Nyatakan $\\cot \\alpha$ sebagai $\\frac{\\cos \\alpha}{\\sin \\alpha}$:\n$$= \\frac{-\\cos^2 \\alpha}{\\frac{\\cos \\alpha}{\\sin \\alpha}} = -\\cos^2 \\alpha \\times \\frac{\\sin \\alpha}{\\cos \\alpha}$$\n4. Sederhanakan faktor $\\cos \\alpha$:\n$$= -\\cos \\alpha \\sin \\alpha = -\\sin \\alpha \\cos \\alpha$$\n5. Jadi, bentuk sederhananya adalah $-\\sin \\alpha \\cos \\alpha$ (pilihan C).",
      pitfalls: "Lupa mengubah fungsi trigonometri menjadi kofungsinya saat berelasi dengan sudut ganjil $90^\\circ$ atau $270^\\circ$."
    }
  },
  {
    id: "fun-trig-dasar-kuadran-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-kuadran",
    category: "Persamaan Trigonometri Sederhana di Kuadran IV",
    difficulty: "sedang",
    statement: "Jika $\\tan x = -\\sqrt{3}$ dan diketahui interval $180^\\circ \\le x \\le 360^\\circ$, maka besar sudut $x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$210^\\circ$",
      "$240^\\circ$",
      "$300^\\circ$",
      "$315^\\circ$",
      "$330^\\circ$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Fungsi tangen bernilai negatif pada Kuadran II dan Kuadran IV. Dalam rentang $180^\\circ \\le x \\le 360^\\circ$, daerah yang memenuhi adalah Kuadran IV ($270^\\circ < x < 360^\\circ$).",
      steps: "1. Cari sudut lancip acuan $\\alpha$ di mana $\\tan \\alpha = \\sqrt{3}$:\n$$\\alpha = 60^\\circ$$\n2. Karena $\\tan x$ bernilai negatif dan $180^\\circ \\le x \\le 360^\\circ$, maka $x$ harus berada di Kuadran IV:\n$$x = 360^\\circ - \\alpha$$\n3. Hitung nilai sudut $x$:\n$$x = 360^\\circ - 60^\\circ = 300^\\circ$$\n4. Jadi, besar sudut $x$ adalah $300^\\circ$ (pilihan C).",
      pitfalls: "Memilih sudut Kuadran II ($120^\\circ$) yang berada di luar batas interval soal atau keliru memilih sudut acuan $30^\\circ$."
    }
  },
  {
    id: "fun-trig-dasar-kuadran-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-kuadran",
    category: "Menentukan Nilai Bentuk Aljabar dari Sudut Kuadran III",
    difficulty: "sedang",
    statement: "Diketahui $\\tan \\theta = \\frac{4}{3}$ dan $180^\\circ < \\theta < 270^\\circ$. Nilai dari $5\\sin \\theta + 10\\cos \\theta$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-14$",
      "$-10$",
      "$-2$",
      "$2$",
      "$10$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Sudut $\\theta$ dengan interval $180^\\circ < \\theta < 270^\\circ$ berada di Kuadran III. Di Kuadran III, nilai sinus dan cosinus keduanya bertanda negatif: $\\sin \\theta < 0$ dan $\\cos \\theta < 0$.",
      steps: "1. Dari $\\tan \\theta = \\frac{\\text{depan}}{\\text{samping}} = \\frac{4}{3}$, hitung sisi miring:\n$$\\text{miring} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$$\n2. Karena $\\theta$ di Kuadran III:\n$$\\sin \\theta = -\\frac{4}{5}$$\n$$\\cos \\theta = -\\frac{3}{5}$$\n3. Hitung nilai ekspresi yang ditanyakan:\n$$5\\sin \\theta + 10\\cos \\theta = 5\\left(-\\frac{4}{5}\\right) + 10\\left(-\\frac{3}{5}\\right)$$\n$$= -4 + (-6) = -10$$\n4. Jadi, nilai ekspresi tersebut adalah $-10$ (pilihan B).",
      pitfalls: "Lupa memberi tanda negatif pada sinus dan cosinus di Kuadran III sehingga mendapatkan jawaban positif $+10$."
    }
  }
];
