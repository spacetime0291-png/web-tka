/**
 * Batch Task: TASK_mat-geo-vektor-operasi_MEDIUM
 * SubTopic: Operasi Vektor (mat-geo-vektor-operasi)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-geo-vektor-operasi-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-operasi",
    category: "Sudut Antara Dua Vektor",
    difficulty: "sedang",
    statement: "Besar sudut yang dibentuk oleh vektor $\\vec{a} = 2\\hat{i} + 2\\hat{j} + \\hat{k}$ dan $\\vec{b} = \\hat{i} - 2\\hat{j} + 2\\hat{k}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$90^\\circ$",
      "$60^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$",
      "$0^\\circ$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kosinus sudut antara dua vektor $\\theta$ dihitung dengan membagi perkalian skalar terhadap hasil kali panjang kedua vektor: $\\cos(\\theta) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}||\\vec{b}|}$. Bila perkalian titik bernilai nol, kedua vektor saling tegak lurus ($\\theta = 90^\\circ$).",
      steps: "1. Hitung perkalian skalar (dot product) $\\vec{a} \\cdot \\vec{b}$:\n$$\\vec{a} \\cdot \\vec{b} = (2)(1) + (2)(-2) + (1)(2) = 2 - 4 + 2 = 0$$\n2. Hitung panjang masing-masing vektor:\n$$|\\vec{a}| = \\sqrt{2^2 + 2^2 + 1^2} = \\sqrt{4 + 4 + 1} = 3$$\n$$|\\vec{b}| = \\sqrt{1^2 + (-2)^2 + 2^2} = \\sqrt{1 + 4 + 4} = 3$$\n3. Evaluasi nilai kosinus sudut:\n$$\\cos(\\theta) = \\frac{0}{3 \\times 3} = 0$$\n4. Karena $\\cos(\\theta) = 0$, maka besar sudut apitnya adalah $\\theta = 90^\\circ$.\n5. Jadi, sudut yang terbentuk adalah $90^\\circ$ (pilihan A).",
      pitfalls: "Menyimpulkan sudut bernilai $0^\\circ$ karena melihat hasil perkalian skalar bernilai 0, padahal $\\cos(90^\\circ) = 0$ sedangkan $\\cos(0^\\circ) = 1$."
    }
  },
  {
    id: "mat-geo-vektor-operasi-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-operasi",
    category: "Parameter Ortogonalitas Vektor",
    difficulty: "sedang",
    statement: "Diketahui vektor $\\vec{u} = 3\\hat{i} - 2\\hat{j} + k\\hat{k}$ dan $\\vec{v} = 2\\hat{i} + 4\\hat{j} + 2\\hat{k}$. Jika vektor $\\vec{u}$ tegak lurus (ortogonal) terhadap vektor $\\vec{v}$, maka nilai konstanta $k$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "1",
      "-1",
      "2",
      "-2",
      "4"
    ],
    correctIndex: 0,
    solution: {
      concept: "Syarat perlu dan cukup agar dua buah vektor bukan nol saling tegak lurus (ortogonal) adalah hasil perkalian titik (dot product) keduanya sama dengan nol: $\\vec{u} \\cdot \\vec{v} = 0$.",
      steps: "1. Terapkan syarat ortogonalitas $\\vec{u} \\cdot \\vec{v} = 0$:\n$$(3)(2) + (-2)(4) + (k)(2) = 0$$\n2. Selesaikan operasi aritmetika aljabar:\n$$6 - 8 + 2k = 0$$\n$$-2 + 2k = 0$$\n3. Pindahkan konstanta ke ruas kanan:\n$$2k = 2 \\implies k = 1$$\n4. Jadi, nilai $k$ adalah 1 (pilihan A).",
      pitfalls: "Kekeliruan tanda saat mengoperasikan $-2(4) = -8$, misalnya salah menuliskan $+8$ yang berakibat menghasilkan $k = -7$."
    }
  },
  {
    id: "mat-geo-vektor-operasi-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-operasi",
    category: "Distributif Perkalian Skalar Vektor",
    difficulty: "sedang",
    statement: "Dua buah vektor $\\vec{p}$ dan $\\vec{q}$ masing-masing memiliki panjang $|\\vec{p}| = 6$ dan $|\\vec{q}| = 10$. Jika sudut yang dibentuk oleh kedua vektor tersebut adalah $120^\\circ$, maka nilai dari $\\vec{p} \\cdot (\\vec{p} + \\vec{q})$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "6",
      "-6",
      "66",
      "36",
      "-24"
    ],
    correctIndex: 0,
    solution: {
      concept: "Perkalian skalar bersifat distributif terhadap penjumlahan vektor: $\\vec{p} \\cdot (\\vec{p} + \\vec{q}) = \\vec{p} \\cdot \\vec{p} + \\vec{p} \\cdot \\vec{q} = |\\vec{p}|^2 + |\\vec{p}||\\vec{q}|\\cos(\\theta)$.",
      steps: "1. Uraikan operasi perkalian menggunakan sifat distributif:\n$$\\vec{p} \\cdot (\\vec{p} + \\vec{q}) = |\\vec{p}|^2 + \\vec{p} \\cdot \\vec{q}$$\n2. Hitung suku pertama:\n$$|\\vec{p}|^2 = 6^2 = 36$$\n3. Hitung suku kedua menggunakan sudut tumpul $\\theta = 120^\\circ$ di mana $\\cos(120^\\circ) = -\\frac{1}{2}$:\n$$\\vec{p} \\cdot \\vec{q} = |\\vec{p}||\\vec{q}|\\cos(120^\\circ) = (6)(10)\\left(-\\frac{1}{2}\\right) = -30$$\n4. Jumlahkan kedua suku:\n$$\\vec{p} \\cdot (\\vec{p} + \\vec{q}) = 36 + (-30) = 6$$\n5. Jadi, hasilnya adalah 6 (pilihan A).",
      pitfalls: "Lupa bahwa $\\cos(120^\\circ) = -\\frac{1}{2}$ (bertanda negatif di kuadran II), sehingga salah memasukkan nilai positif $+30$ yang menghasilkan 66."
    }
  },
  {
    id: "mat-geo-vektor-operasi-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-operasi",
    category: "Proyeksi Skalar Ortogonal",
    difficulty: "sedang",
    statement: "Diketahui vektor $\\vec{a} = 4\\hat{i} + 2\\hat{j} + 4\\hat{k}$ dan vektor $\\vec{b} = 2\\hat{i} + \\hat{j} + 2\\hat{k}$. Panjang proyeksi skalar ortogonal dari vektor $\\vec{a}$ pada arah vektor $\\vec{b}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "6",
      "3",
      "9",
      "18",
      "2"
    ],
    correctIndex: 0,
    solution: {
      concept: "Proyeksi skalar ortogonal dari vektor $\\vec{a}$ pada vektor $\\vec{b}$ dirumuskan sebagai pembagian hasil kali titik dengan panjang vektor landasan: $|\\vec{c}| = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$.",
      steps: "1. Hitung perkalian skalar (dot product) $\\vec{a} \\cdot \\vec{b}$:\n$$\\vec{a} \\cdot \\vec{b} = (4)(2) + (2)(1) + (4)(2) = 8 + 2 + 8 = 18$$\n2. Hitung panjang vektor landasan $|\\vec{b}|$:\n$$|\\vec{b}| = \\sqrt{2^2 + 1^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$$\n3. Hitung proyeksi skalar ortogonal:\n$$|\\vec{c}| = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{18}{3} = 6$$\n4. Jadi, panjang proyeksi skalar ortogonalnya adalah 6 satuan (pilihan A).",
      pitfalls: "Membagi perkalian skalar dengan panjang vektor $\\vec{a}$ alih-alih vektor tujuan proyeksi $\\vec{b}$."
    }
  },
  {
    id: "mat-geo-vektor-operasi-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-operasi",
    category: "Perkalian Silang (Cross Product) Dua Vektor",
    difficulty: "sedang",
    statement: "Diketahui vektor $\\vec{u} = \\hat{i} + 2\\hat{j} + 3\\hat{k}$ dan vektor $\\vec{v} = 2\\hat{i} - \\hat{j} + \\hat{k}$. Vektor hasil perkalian silang (cross product) $\\vec{u} \\times \\vec{v}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5\\hat{i} + 5\\hat{j} - 5\\hat{k}$",
      "$5\\hat{i} - 5\\hat{j} - 5\\hat{k}$",
      "$-5\\hat{i} + 5\\hat{j} - 5\\hat{k}$",
      "$5\\hat{i} + 5\\hat{j} + 5\\hat{k}$",
      "$\\hat{i} + 7\\hat{j} - 5\\hat{k}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Perkalian silang dua vektor di ruang $\\mathbb{R}^3$ menghasilkan vektor yang tegak lurus terhadap kedua vektor awal, dihitung menggunakan determinan matriks $3 \\times 3$ dengan basis satuan.",
      steps: "1. Susun determinan matriks perkalian silang:\n$$\\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & 3 \\\\ 2 & -1 & 1 \\end{vmatrix}$$\n2. Ekspansi determinan berdasarkan baris pertama:\n$$\\vec{u} \\times \\vec{v} = \\hat{i}(2(1) - 3(-1)) - \\hat{j}(1(1) - 3(2)) + \\hat{k}(1(-1) - 2(2))$$\n3. Hitung masing-masing komponen:\n$$\\text{Komponen } \\hat{i}: 2 - (-3) = 5$$\n$$\\text{Komponen } \\hat{j}: -(1 - 6) = -(-5) = 5$$\n$$\\text{Komponen } \\hat{k}: -1 - 4 = -5$$\n4. Gabungkan ketiga komponen:\n$$\\vec{u} \\times \\vec{v} = 5\\hat{i} + 5\\hat{j} - 5\\hat{k}$$\n5. Jadi, hasil perkalian silangnya adalah $5\\hat{i} + 5\\hat{j} - 5\\hat{k}$ (pilihan A).",
      pitfalls: "Lupa tanda minus di depan kofaktor basis $\\hat{j}$ pada ekspansi baris pertama determinan matriks."
    }
  }
];
