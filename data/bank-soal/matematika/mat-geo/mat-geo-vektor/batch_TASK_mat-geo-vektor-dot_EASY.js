/**
 * Batch Task: TASK_mat-geo-vektor-dot_EASY
 * SubTopic: Perkalian Titik Vektor (mat-geo-vektor-dot)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-vektor-dot-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-dot",
    category: "Perkalian Titik Dua Dimensi",
    difficulty: "mudah",
    statement: "Nilai perkalian titik (dot product) antara vektor $\\vec{u} = 5\\hat{i} - 2\\hat{j}$ dan $\\vec{v} = 3\\hat{i} + 4\\hat{j}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "7",
      "23",
      "-7",
      "15",
      "-8"
    ],
    correctIndex: 0,
    solution: {
      concept: "Perkalian titik dua vektor dua dimensi $\\vec{u} = u_x\\hat{i} + u_y\\hat{j}$ dan $\\vec{v} = v_x\\hat{i} + v_y\\hat{j}$ menghasilkan bilangan skalar: $\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y$.",
      steps: "1. Kalikan komponen horizontal basis $\\hat{i}$:\n$$5 \\times 3 = 15$$\n2. Kalikan komponen vertikal basis $\\hat{j}$:\n$$-2 \\times 4 = -8$$\n3. Jumlahkan kedua hasil perkalian tersebut:\n$$\\vec{u} \\cdot \\vec{v} = 15 + (-8) = 7$$\n4. Jadi, nilai perkalian titiknya adalah 7 (pilihan A).",
      pitfalls: "Keliru tanda saat mengalikan bilangan negatif $-2 \\times 4 = -8$ yang sering dihitung sebagai $+8$."
    }
  },
  {
    id: "mat-geo-vektor-dot-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-dot",
    category: "Perkalian Titik Berdasarkan Panjang dan Sudut",
    difficulty: "mudah",
    statement: "Diketahui panjang vektor $|\\vec{a}| = 6$ dan $|\\vec{b}| = 8$. Jika sudut yang dibentuk oleh kedua vektor tersebut adalah $60^\\circ$, maka nilai perkalian titik $\\vec{a} \\cdot \\vec{b}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "24",
      "$24\\sqrt{3}$",
      "48",
      "12",
      "$12\\sqrt{3}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Definisi geometris perkalian titik dua vektor melibatkan besar kedua vektor dan kosinus sudut apitnya: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos(\\theta)$.",
      steps: "1. Tuliskan rumus perkalian titik geometris:\n$$\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos(60^\\circ)$$\n2. Masukkan nilai yang diketahui:\n$$\\vec{a} \\cdot \\vec{b} = 6 \\times 8 \\times \\frac{1}{2}$$\n3. Selesaikan perhitungan aritmetika:\n$$\\vec{a} \\cdot \\vec{b} = 48 \\times \\frac{1}{2} = 24$$\n4. Jadi, nilai perkalian titiknya adalah 24 (pilihan A).",
      pitfalls: "Tertukar antara nilai $\\cos(60^\\circ) = \\frac{1}{2}$ dengan $\\sin(60^\\circ) = \\frac{1}{2}\\sqrt{3}$."
    }
  },
  {
    id: "mat-geo-vektor-dot-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-dot",
    category: "Perkalian Titik Tiga Dimensi",
    difficulty: "mudah",
    statement: "Diketahui vektor $\\vec{p} = 2\\hat{i} - \\hat{j} + 3\\hat{k}$ dan $\\vec{q} = 4\\hat{i} + 2\\hat{j} - \\hat{k}$. Hasil perkalian titik $\\vec{p} \\cdot \\vec{q}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "3",
      "7",
      "-3",
      "13",
      "5"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada ruang dimensi tiga, perkalian skalar dihitung dari jumlah perkalian ketiga pasang komponen seletak: $\\vec{p} \\cdot \\vec{q} = p_x q_x + p_y q_y + p_z q_z$.",
      steps: "1. Kalikan masing-masing komponen seletak:\n- Sumbu-$X$: $2 \\times 4 = 8$\n- Sumbu-$Y$: $(-1) \\times 2 = -2$\n- Sumbu-$Z$: $3 \\times (-1) = -3$\n2. Jumlahkan seluruh hasil perkalian:\n$$\\vec{p} \\cdot \\vec{q} = 8 + (-2) + (-3) = 8 - 5 = 3$$\n3. Jadi, hasil perkalian titiknya adalah 3 (pilihan A).",
      pitfalls: "Kekeliruan tanda saat mengoperasikan suku-suku negatif, seperti mengabaikan tanda minus pada komponen ketiga."
    }
  },
  {
    id: "mat-geo-vektor-dot-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-dot",
    category: "Perkalian Titik Vektor dengan Diri Sendiri",
    difficulty: "mudah",
    statement: "Diketahui vektor $\\vec{v} = 3\\hat{i} - 4\\hat{j}$. Nilai dari hasil perkalian titik $\\vec{v} \\cdot \\vec{v}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "25",
      "5",
      "-7",
      "1",
      "0"
    ],
    correctIndex: 0,
    solution: {
      concept: "Perkalian titik suatu vektor dengan dirinya sendiri sama dengan kuadrat dari panjang (norma) vektor tersebut: $\\vec{v} \\cdot \\vec{v} = |\\vec{v}|^2 = v_x^2 + v_y^2$.",
      steps: "1. Kuadratkan masing-masing komponen vektor $\\vec{v}$:\n$$v_x^2 = 3^2 = 9$$\n$$v_y^2 = (-4)^2 = 16$$\n2. Jumlahkan hasil kuadrat tersebut:\n$$\\vec{v} \\cdot \\vec{v} = 9 + 16 = 25$$\n3. (Perhatikan bahwa $|\\vec{v}| = \\sqrt{25} = 5$, sehingga $|\\vec{v}|^2 = 25$).\n4. Jadi, nilai $\\vec{v} \\cdot \\vec{v}$ adalah 25 (pilihan A).",
      pitfalls: "Menjawab dengan panjang vektornya ($5$) alih-alih kuadrat panjangnya ($25$)."
    }
  },
  {
    id: "mat-geo-vektor-dot-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-dot",
    category: "Perkalian Titik Vektor Tegak Lurus",
    difficulty: "mudah",
    statement: "Dua buah vektor bukan nol $\\vec{a}$ dan $\\vec{b}$ saling tegak lurus (ortogonal) satu sama lain. Nilai perkalian titik $\\vec{a} \\cdot \\vec{b}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "0",
      "1",
      "$|\\vec{a}||\\vec{b}|$",
      "-1",
      "Tak terdefinisi"
    ],
    correctIndex: 0,
    solution: {
      concept: "Dua vektor yang saling tegak lurus membentuk sudut apit $\\theta = 90^\\circ$. Karena nilai $\\cos(90^\\circ) = 0$, maka hasil perkalian titik keduanya selalu nol.",
      steps: "1. Tinjau rumus perkalian titik geometris: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos(\\theta)$.\n2. Karena kedua vektor tegak lurus, maka besar sudut apit $\\theta = 90^\\circ$.\n3. Substitusikan nilai $\\cos(90^\\circ) = 0$:\n$$\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|(0) = 0$$\n4. Jadi, nilai perkalian titiknya adalah 0 (pilihan A).",
      pitfalls: "Terkecoh dengan nilai 1, yang merupakan nilai kosinus untuk sudut $0^\\circ$ (dua vektor sejajar dan searah)."
    }
  }
];
