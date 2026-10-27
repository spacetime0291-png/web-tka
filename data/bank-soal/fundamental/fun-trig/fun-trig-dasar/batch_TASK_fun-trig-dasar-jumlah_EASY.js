/**
 * Batch Task: TASK_fun-trig-dasar-jumlah_EASY
 * SubTopic: Trigonometri Dasar: Rumus Jumlah dan Selisih Sudut (fun-trig-dasar-jumlah)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-trig-dasar-jumlah-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-jumlah",
    category: "Nilai Sinus Jumlah Dua Sudut Istimewa",
    difficulty: "mudah",
    statement: "Nilai eksak dari $\\sin 75^\\circ$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{4}(\\sqrt{6} - \\sqrt{2})$",
      "$\\frac{1}{4}(\\sqrt{6} + \\sqrt{2})$",
      "$\\frac{1}{2}(\\sqrt{6} + \\sqrt{2})$",
      "$\\frac{1}{4}(\\sqrt{3} + 1)$",
      "$\\frac{1}{2}(\\sqrt{3} - 1)$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Rumus jumlah sudut untuk sinus adalah $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$. Sudut $75^\\circ$ dapat dinyatakan sebagai penjumlahan sudut istimewa $45^\\circ + 30^\\circ$.",
      steps: "1. Nyatakan sudut $75^\\circ$ sebagai jumlah dua sudut istimewa:\n$$\\sin 75^\\circ = \\sin(45^\\circ + 30^\\circ)$$\n2. Terapkan rumus penjumlahan sinus:\n$$\\sin(45^\\circ + 30^\\circ) = \\sin 45^\\circ \\cos 30^\\circ + \\cos 45^\\circ \\sin 30^\\circ$$\n3. Masukkan nilai trigonometri masing-masing sudut:\n$$= \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\sqrt{3}\\right) + \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\right)$$\n4. Sederhanakan hasil perkalian pecahan:\n$$= \\frac{1}{4}\\sqrt{6} + \\frac{1}{4}\\sqrt{2} = \\frac{1}{4}(\\sqrt{6} + \\sqrt{2})$$\n5. Jadi, nilai $\\sin 75^\\circ$ adalah $\\frac{1}{4}(\\sqrt{6} + \\sqrt{2})$ (pilihan B).",
      pitfalls: "Menjumlahkan langsung nilai trigonometrinya $\\sin 45^\\circ + \\sin 30^\\circ$ padahal $\\sin(A + B) \\neq \\sin A + \\sin B$."
    }
  },
  {
    id: "fun-trig-dasar-jumlah-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-jumlah",
    category: "Nilai Cosinus Jumlah Dua Sudut Istimewa",
    difficulty: "mudah",
    statement: "Nilai eksak dari $\\cos 75^\\circ$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{4}(\\sqrt{6} - \\sqrt{2})$",
      "$\\frac{1}{4}(\\sqrt{6} + \\sqrt{2})$",
      "$\\frac{1}{2}(\\sqrt{6} - \\sqrt{2})$",
      "$\\frac{1}{4}(\\sqrt{2} - \\sqrt{6})$",
      "$\\frac{1}{4}(\\sqrt{3} - 1)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Rumus jumlah sudut untuk cosinus adalah $\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B$.",
      steps: "1. Uraikan sudut $75^\\circ$ menjadi penjumlahan sudut $45^\\circ + 30^\\circ$:\n$$\\cos 75^\\circ = \\cos(45^\\circ + 30^\\circ)$$\n2. Terapkan rumus ekspansi cosinus:\n$$\\cos(45^\\circ + 30^\\circ) = \\cos 45^\\circ \\cos 30^\\circ - \\sin 45^\\circ \\sin 30^\\circ$$\n3. Substitusi nilai-nilai sudut istimewa:\n$$= \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\sqrt{3}\\right) - \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\right)$$\n4. Lakukan operasi perkalian dan pengurangan:\n$$= \\frac{1}{4}\\sqrt{6} - \\frac{1}{4}\\sqrt{2} = \\frac{1}{4}(\\sqrt{6} - \\sqrt{2})$$\n5. Jadi, nilai dari $\\cos 75^\\circ$ adalah $\\frac{1}{4}(\\sqrt{6} - \\sqrt{2})$ (pilihan A).",
      pitfalls: "Menggunakan tanda tambah pada rumus cosinus jumlah sudut, padahal tanda pada ekspansi cosinus berlawanan dengan tanda di dalam kurung."
    }
  },
  {
    id: "fun-trig-dasar-jumlah-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-jumlah",
    category: "Nilai Cosinus Selisih Dua Sudut",
    difficulty: "mudah",
    statement: "Nilai eksak dari $\\cos 15^\\circ$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{4}(\\sqrt{6} - \\sqrt{2})$",
      "$\\frac{1}{4}(\\sqrt{6} + \\sqrt{2})$",
      "$\\frac{1}{2}(\\sqrt{3} + 1)$",
      "$\\frac{1}{4}(\\sqrt{3} - \\sqrt{2})$",
      "$\\frac{1}{2}(\\sqrt{6} - 1)$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Rumus selisih dua sudut untuk cosinus adalah $\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B$.",
      steps: "1. Nyatakan sudut $15^\\circ$ sebagai selisih $45^\\circ - 30^\\circ$:\n$$\\cos 15^\\circ = \\cos(45^\\circ - 30^\\circ)$$\n2. Gunakan rumus cosinus selisih sudut:\n$$\\cos(45^\\circ - 30^\\circ) = \\cos 45^\\circ \\cos 30^\\circ + \\sin 45^\\circ \\sin 30^\\circ$$\n3. Masukkan nilai numerik perbandingan trigonometrinya:\n$$= \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\sqrt{3}\\right) + \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\right)$$\n4. Gabungkan kedua suku:\n$$= \\frac{1}{4}\\sqrt{6} + \\frac{1}{4}\\sqrt{2} = \\frac{1}{4}(\\sqrt{6} + \\sqrt{2})$$\n5. Jadi, nilai $\\cos 15^\\circ$ adalah $\\frac{1}{4}(\\sqrt{6} + \\sqrt{2})$ (pilihan B).",
      pitfalls: "Menulis tanda minus pada ekspansi $\\cos(A - B)$ sehingga tertukar dengan nilai $\\sin 15^\\circ$ atau $\\cos 75^\\circ$."
    }
  },
  {
    id: "fun-trig-dasar-jumlah-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-jumlah",
    category: "Nilai Sinus Selisih Dua Sudut",
    difficulty: "mudah",
    statement: "Nilai eksak dari $\\sin 15^\\circ$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{4}(\\sqrt{6} + \\sqrt{2})$",
      "$\\frac{1}{4}(\\sqrt{6} - \\sqrt{2})$",
      "$\\frac{1}{2}(\\sqrt{2} - 1)$",
      "$\\frac{1}{4}(\\sqrt{3} - 1)$",
      "$\\frac{1}{2}(\\sqrt{6} - \\sqrt{2})$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Rumus selisih dua sudut untuk fungsi sinus dirumuskan sebagai $\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B$.",
      steps: "1. Uraikan sudut $15^\\circ$ menjadi selisih sudut istimewa $45^\\circ - 30^\\circ$:\n$$\\sin 15^\\circ = \\sin(45^\\circ - 30^\\circ)$$\n2. Gunakan rumus selisih sudut sinus:\n$$\\sin(45^\\circ - 30^\\circ) = \\sin 45^\\circ \\cos 30^\\circ - \\cos 45^\\circ \\sin 30^\\circ$$\n3. Substitusikan nilai perbandingan trigonometri yang bersesuaian:\n$$= \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\sqrt{3}\\right) - \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\right)$$\n4. Hitung hasil kali dan kurangkan:\n$$= \\frac{1}{4}\\sqrt{6} - \\frac{1}{4}\\sqrt{2} = \\frac{1}{4}(\\sqrt{6} - \\sqrt{2})$$\n5. Jadi, nilai $\\sin 15^\\circ$ adalah $\\frac{1}{4}(\\sqrt{6} - \\sqrt{2})$ (pilihan B).",
      pitfalls: "Tertukar urutan suku atau tanda penghubung sehingga menghasilkan $-\\frac{1}{4}(\\sqrt{6} - \\sqrt{2})$ atau bentuk lainnya."
    }
  },
  {
    id: "fun-trig-dasar-jumlah-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-jumlah",
    category: "Penyederhanaan Bentuk Perkalian Cosinus dan Sinus",
    difficulty: "mudah",
    statement: "Bentuk $\\cos 50^\\circ \\cos 10^\\circ - \\sin 50^\\circ \\sin 10^\\circ$ memiliki nilai yang sama dengan ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\sqrt{2}$",
      "$\\frac{1}{2}\\sqrt{3}$",
      "$1$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Bentuk $\\cos A \\cos B - \\sin A \\sin B$ merupakan ekspansi dari rumus cosinus jumlah sudut: $\\cos(A + B)$.",
      steps: "1. Identifikasi bentuk rumus dengan memisalkan $A = 50^\\circ$ dan $B = 10^\\circ$:\n$$\\cos 50^\\circ \\cos 10^\\circ - \\sin 50^\\circ \\sin 10^\\circ = \\cos(50^\\circ + 10^\\circ)$$\n2. Jumlahkan besar sudutnya:\n$$= \\cos 60^\\circ$$\n3. Masukkan nilai cosinus sudut istimewa $60^\\circ$:\n$$\\cos 60^\\circ = \\frac{1}{2}$$\n4. Jadi, nilai dari bentuk tersebut adalah $\\frac{1}{2}$ (pilihan B).",
      pitfalls: "Mengurangkan sudut $(50^\\circ - 10^\\circ = 40^\\circ)$ karena melihat tanda kurang pada suku di soal."
    }
  }
];
