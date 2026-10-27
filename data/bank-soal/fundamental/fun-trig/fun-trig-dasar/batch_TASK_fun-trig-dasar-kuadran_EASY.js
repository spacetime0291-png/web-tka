/**
 * Batch Task: TASK_fun-trig-dasar-kuadran_EASY
 * SubTopic: Trigonometri Dasar: Sudut Berelasi di Berbagai Kuadran (fun-trig-dasar-kuadran)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-trig-dasar-kuadran-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-kuadran",
    category: "Nilai Sinus di Kuadran II",
    difficulty: "mudah",
    statement: "Nilai dari $\\sin 150^\\circ$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-\\frac{1}{2}\\sqrt{3}$",
      "$-\\frac{1}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\sqrt{3}$",
      "$1$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Sudut $150^\\circ$ terletak di Kuadran II. Pada Kuadran II, nilai fungsi sinus bernilai positif dengan rumus relasi sudut: $\\sin(180^\\circ - \\alpha) = \\sin \\alpha$.",
      steps: "1. Nyatakan sudut $150^\\circ$ dalam bentuk $(180^\\circ - \\alpha)$:\n$$150^\\circ = 180^\\circ - 30^\\circ$$\n2. Terapkan rumus relasi kuadran II:\n$$\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ$$\n3. Karena $\\sin 30^\\circ = \\frac{1}{2}$, maka:\n$$\\sin 150^\\circ = \\frac{1}{2}$$\n4. Jadi, nilai dari $\\sin 150^\\circ$ adalah $\\frac{1}{2}$ (pilihan C).",
      pitfalls: "Memberikan tanda negatif $-\\frac{1}{2}$ karena mengira seluruh fungsi trigonometri selain sudut lancip bernilai negatif."
    }
  },
  {
    id: "fun-trig-dasar-kuadran-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-kuadran",
    category: "Nilai Cosinus di Kuadran II",
    difficulty: "mudah",
    statement: "Nilai dari $\\cos 120^\\circ$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-\\frac{1}{2}\\sqrt{3}$",
      "$-\\frac{1}{2}$",
      "$0$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\sqrt{3}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Sudut $120^\\circ$ berada di Kuadran II. Di Kuadran II, nilai cosinus bertanda negatif dengan relasi $\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$.",
      steps: "1. Ubah sudut $120^\\circ$ ke bentuk $(180^\\circ - \\alpha)$:\n$$120^\\circ = 180^\\circ - 60^\\circ$$\n2. Terapkan rumus sudut berelasi:\n$$\\cos 120^\\circ = -\\cos 60^\\circ$$\n3. Masukkan nilai $\\cos 60^\\circ = \\frac{1}{2}$:\n$$\\cos 120^\\circ = -\\frac{1}{2}$$\n4. Jadi, jawabannya adalah $-\\frac{1}{2}$ (pilihan B).",
      pitfalls: "Lupa menyematkan tanda minus untuk nilai cosinus di Kuadran II sehingga memilih $+\\frac{1}{2}$."
    }
  },
  {
    id: "fun-trig-dasar-kuadran-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-kuadran",
    category: "Nilai Tangen di Kuadran III",
    difficulty: "mudah",
    statement: "Nilai dari $\\tan 225^\\circ$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-\\sqrt{3}$",
      "$-1$",
      "$0$",
      "$1$",
      "$\\sqrt{3}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Sudut $225^\\circ$ terletak di Kuadran III ($180^\\circ < \\theta < 270^\\circ$). Pada Kuadran III, fungsi tangen bernilai positif dengan relasi $\\tan(180^\\circ + \\alpha) = \\tan \\alpha$.",
      steps: "1. Tuliskan sudut $225^\\circ$ dalam bentuk $(180^\\circ + \\alpha)$:\n$$225^\\circ = 180^\\circ + 45^\\circ$$\n2. Terapkan rumus relasi kuadran III:\n$$\\tan 225^\\circ = \\tan 45^\\circ$$\n3. Karena $\\tan 45^\\circ = 1$, maka:\n$$\\tan 225^\\circ = 1$$\n4. Jadi, nilai dari $\\tan 225^\\circ$ adalah $1$ (pilihan D).",
      pitfalls: "Memberikan nilai negatif $-1$ karena menyangka semua sudut di kuadran III bernilai negatif."
    }
  },
  {
    id: "fun-trig-dasar-kuadran-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-kuadran",
    category: "Tanda Perbandingan Trigonometri di Kuadran IV",
    difficulty: "mudah",
    statement: "Jika sudut $\\theta$ terletak di Kuadran IV ($270^\\circ < \\theta < 360^\\circ$), maka pasangan perbandingan trigonometri yang bernilai positif adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\sin \\theta$ dan $\\csc \\theta$",
      "$\\tan \\theta$ dan $\\cot \\theta$",
      "$\\cos \\theta$ dan $\\sec \\theta$",
      "$\\sin \\theta$ dan $\\cos \\theta$",
      "$\\tan \\theta$ dan $\\sec \\theta$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Kaidah tanda trigonometri pada keempat kuadran (ASTC: All, Sin, Tan, Cos):\n- Kuadran I ($0^\\circ - 90^\\circ$): Semua positif\n- Kuadran II ($90^\\circ - 180^\\circ$): Sinus dan Cosecan positif\n- Kuadran III ($180^\\circ - 270^\\circ$): Tangen dan Cotangen positif\n- Kuadran IV ($270^\\circ - 360^\\circ$): Cosinus dan Secan positif.",
      steps: "1. Pada Kuadran IV, absis bertanda positif ($x > 0$) dan ordinat bertanda negatif ($y < 0$).\n2. Sisi miring selalu positif ($r > 0$).\n3. Maka perbandingan trigonometri yang bernilai positif adalah:\n$$\\cos \\theta = \\frac{x}{r} > 0$$\n$$\\sec \\theta = \\frac{r}{x} > 0$$\n4. Jadi, pasangan yang bernilai positif adalah $\\cos \\theta$ dan $\\sec \\theta$ (pilihan C).",
      pitfalls: "Tertukar antara tanda kuadran III (tangen positif) dan kuadran IV (cosinus positif)."
    }
  },
  {
    id: "fun-trig-dasar-kuadran-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-kuadran",
    category: "Nilai Sinus Sudut Negatif",
    difficulty: "mudah",
    statement: "Nilai dari $\\sin(-60^\\circ)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-\\frac{1}{2}\\sqrt{3}$",
      "$-\\frac{1}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\sqrt{3}$",
      "$-\\sqrt{3}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi sinus merupakan fungsi ganjil, yaitu fungsi yang memenuhi sifat simetri rotasi terhadap titik asal: $\\sin(-\\alpha) = -\\sin \\alpha$.",
      steps: "1. Gunakan sifat sudut negatif pada fungsi sinus:\n$$\\sin(-\\alpha) = -\\sin \\alpha$$\n2. Masukkan $\\alpha = 60^\\circ$:\n$$\\sin(-60^\\circ) = -\\sin 60^\\circ$$\n3. Karena $\\sin 60^\\circ = \\frac{1}{2}\\sqrt{3}$, maka:\n$$\\sin(-60^\\circ) = -\\frac{1}{2}\\sqrt{3}$$\n4. Jadi, jawabannya adalah $-\\frac{1}{2}\\sqrt{3}$ (pilihan A).",
      pitfalls: "Menyamakan dengan fungsi cosinus yang merupakan fungsi genap di mana $\\cos(-\\alpha) = \\cos \\alpha$."
    }
  }
];
