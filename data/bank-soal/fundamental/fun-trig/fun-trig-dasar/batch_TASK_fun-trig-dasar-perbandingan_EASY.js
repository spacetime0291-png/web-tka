/**
 * Batch Task: TASK_fun-trig-dasar-perbandingan_EASY
 * SubTopic: Trigonometri Dasar: Perbandingan Trigonometri Siku-Siku (fun-trig-dasar-perbandingan)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-trig-dasar-perbandingan-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-perbandingan",
    category: "Perbandingan Dasar Sinus pada Segitiga Siku-Siku",
    difficulty: "mudah",
    statement: "Diketahui segitiga siku-siku $ABC$ dengan siku-siku di titik $B$. Jika panjang sisi di depan sudut $A$ adalah $BC = 3\\text{ cm}$ dan panjang sisi miring (hipotenusa) $AC = 5\\text{ cm}$, maka nilai dari $\\sin A$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{3}{5}$",
      "$\\frac{4}{5}$",
      "$\\frac{3}{4}$",
      "$\\frac{4}{3}$",
      "$\\frac{5}{3}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada segitiga siku-siku, perbandingan sinus sudut didefinisikan sebagai perbandingan antara panjang sisi di depan sudut tersebut terhadap panjang sisi miring (hipotenusa): $\\sin \\theta = \\frac{\\text{sisi depan}}{\\text{sisi miring}}$.",
      steps: "1. Identifikasi sisi-sisi segitiga terhadap sudut $A$:\n- Sisi depan sudut $A$ adalah $BC = 3\\text{ cm}$.\n- Sisi miring adalah $AC = 5\\text{ cm}$.\n2. Hitung nilai sinus sudut $A$:\n$$\\sin A = \\frac{BC}{AC} = \\frac{3}{5}$$\n3. Jadi, nilai dari $\\sin A$ adalah $\\frac{3}{5}$ (pilihan A).",
      pitfalls: "Tertukar dengan perbandingan cosinus (samping per miring) yang bernilai $\\frac{4}{5}$ atau tangen yang bernilai $\\frac{3}{4}$."
    }
  },
  {
    id: "fun-trig-dasar-perbandingan-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-perbandingan",
    category: "Menentukan Tangen dari Nilai Cosinus",
    difficulty: "mudah",
    statement: "Jika $\\cos \\theta = \\frac{12}{13}$ dan $\\theta$ merupakan sudut lancip, maka nilai dari $\\tan \\theta$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{5}{13}$",
      "$\\frac{12}{5}$",
      "$\\frac{5}{12}$",
      "$\\frac{13}{12}$",
      "$\\frac{13}{5}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan teorema Pythagoras pada segitiga siku-siku: $\\text{sisi depan} = \\sqrt{\\text{miring}^2 - \\text{samping}^2}$. Perbandingan tangen didefinisikan sebagai $\\tan \\theta = \\frac{\\text{sisi depan}}{\\text{sisi samping}}$.",
      steps: "1. Dari $\\cos \\theta = \\frac{12}{13}$, diperoleh:\n$$\\text{sisi samping} = 12$$\n$$\\text{sisi miring} = 13$$\n2. Hitung panjang sisi depan dengan teorema Pythagoras:\n$$\\text{sisi depan} = \\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = \\sqrt{25} = 5$$\n3. Hitung nilai tangen sudut $\\theta$:\n$$\\tan \\theta = \\frac{\\text{sisi depan}}{\\text{sisi samping}} = \\frac{5}{12}$$\n4. Jadi, nilai dari $\\tan \\theta$ adalah $\\frac{5}{12}$ (pilihan C).",
      pitfalls: "Membalik perbandingan tangen menjadi $\\frac{\\text{samping}}{\\text{depan}} = \\frac{12}{5}$ yang merupakan nilai dari $\\cot \\theta$."
    }
  },
  {
    id: "fun-trig-dasar-perbandingan-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-perbandingan",
    category: "Perbandingan Trigonometri Cosecan",
    difficulty: "mudah",
    statement: "Pada segitiga siku-siku $PQR$ dengan sudut siku-siku di $Q$, diketahui panjang $PQ = 8\\text{ cm}$ dan $QR = 6\\text{ cm}$. Nilai dari $\\csc P$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{3}{5}$",
      "$\\frac{4}{5}$",
      "$\\frac{5}{4}$",
      "$\\frac{5}{3}$",
      "$\\frac{4}{3}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Cosecan merupakan kebalikan dari fungsi sinus: $\\csc \\theta = \\frac{1}{\\sin \\theta} = \\frac{\\text{sisi miring}}{\\text{sisi depan}}$.",
      steps: "1. Sisi siku-siku adalah $PQ = 8\\text{ cm}$ (sisi samping terhadap $P$) dan $QR = 6\\text{ cm}$ (sisi depan terhadap $P$).\n2. Cari panjang sisi miring $PR$:\n$$PR = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10\\text{ cm}$$\n3. Hitung nilai cosecan sudut $P$:\n$$\\csc P = \\frac{\\text{sisi miring}}{\\text{sisi depan}} = \\frac{PR}{QR} = \\frac{10}{6} = \\frac{5}{3}$$\n4. Jadi, nilai dari $\\csc P$ adalah $\\frac{5}{3}$ (pilihan D).",
      pitfalls: "Tertukar antara cosecan (kebalikan sinus) dengan secan (kebalikan cosinus yang bernilai $\\frac{10}{8} = \\frac{5}{4}$)."
    }
  },
  {
    id: "fun-trig-dasar-perbandingan-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-perbandingan",
    category: "Operasi Aritmetika Nilai Sudut Istimewa",
    difficulty: "mudah",
    statement: "Nilai dari ekspresi $\\sin 30^\\circ + \\cos 60^\\circ - \\tan 45^\\circ$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-1$",
      "$0$",
      "$\\frac{1}{2}$",
      "$1$",
      "$\\sqrt{3}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gunakan tabel nilai fungsi trigonometri untuk sudut-sudut istimewa: $\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 60^\\circ = \\frac{1}{2}$, dan $\\tan 45^\\circ = 1$.",
      steps: "1. Tuliskan nilai trigonometri masing-masing suku:\n$$\\sin 30^\\circ = \\frac{1}{2}$$\n$$\\cos 60^\\circ = \\frac{1}{2}$$\n$$\\tan 45^\\circ = 1$$\n2. Lakukan operasi penjumlahan dan pengurangan:\n$$\\frac{1}{2} + \\frac{1}{2} - 1 = 1 - 1 = 0$$\n3. Jadi, hasil nilai ekspresi tersebut adalah $0$ (pilihan B).",
      pitfalls: "Salah mengingat nilai $\\tan 45^\\circ$ sebagai $\\frac{1}{2}\\sqrt{2}$ atau salah menjumlahkan pecahan $\\frac{1}{2} + \\frac{1}{2} = 1$."
    }
  },
  {
    id: "fun-trig-dasar-perbandingan-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-perbandingan",
    category: "Aplikasi Tangen pada Sudut Elevasi",
    difficulty: "mudah",
    statement: "Seseorang berdiri pada jarak $12\\text{ meter}$ dari pangkal sebuah pohon tegak. Ia mengamati puncak pohon dengan sudut elevasi $30^\\circ$. Jika tinggi pengamat diabaikan, maka tinggi pohon tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\sqrt{3}\\text{ meter}$",
      "$6\\sqrt{3}\\text{ meter}$",
      "$12\\sqrt{3}\\text{ meter}$",
      "$4\\text{ meter}$",
      "$6\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Tinggi objek tegak $t$ dapat dihitung melalui hubungan tangen sudut elevasi: $\\tan \\alpha = \\frac{\\text{tinggi objek}}{\\text{jarak horizontal}} \\implies t = s \\times \\tan \\alpha$.",
      steps: "1. Diketahui jarak horizontal $s = 12\\text{ meter}$ dan sudut elevasi $\\alpha = 30^\\circ$.\n2. Nilai $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}} = \\frac{1}{3}\\sqrt{3}$.\n3. Hitung tinggi pohon $t$:\n$$t = 12 \\times \\tan 30^\\circ = 12 \\times \\frac{1}{3}\\sqrt{3} = 4\\sqrt{3}\\text{ meter}$$\n4. Jadi, tinggi pohon tersebut adalah $4\\sqrt{3}\\text{ meter}$ (pilihan A).",
      pitfalls: "Mengalikan $12$ dengan $\\sqrt{3}$ (nilai dari $\\tan 60^\\circ$) menghasilkan $12\\sqrt{3}$ alih-alih membaginya dengan 3."
    }
  }
];
