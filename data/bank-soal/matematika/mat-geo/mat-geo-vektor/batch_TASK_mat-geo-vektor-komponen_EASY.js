/**
 * Batch Task: TASK_mat-geo-vektor-komponen_EASY
 * SubTopic: Komponen Vektor (mat-geo-vektor-komponen)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-vektor-komponen-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-komponen",
    category: "Komponen Vektor Dua Dimensi",
    difficulty: "mudah",
    statement: "Jika titik pangkal suatu vektor berada pada koordinat $A(2, -3)$ dan titik ujungnya pada koordinat $B(5, 1)$, maka komponen vektor $\\vec{AB}$ dalam bentuk kombinasi linier vektor basis $\\hat{i}$ dan $\\hat{j}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3\\hat{i} + 4\\hat{j}$",
      "$3\\hat{i} - 2\\hat{j}$",
      "$7\\hat{i} - 2\\hat{j}$",
      "$-3\\hat{i} - 4\\hat{j}$",
      "$4\\hat{i} + 3\\hat{j}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Vektor perpindahan dari titik pangkal $A(x_1, y_1)$ menuju titik ujung $B(x_2, y_2)$ ditentukan dengan mengurangkan koordinat titik ujung terhadap titik pangkal: $\\vec{AB} = (x_2 - x_1)\\hat{i} + (y_2 - y_1)\\hat{j}$.",
      steps: "1. Identifikasi koordinat titik pangkal $A(2, -3)$ dan titik ujung $B(5, 1)$.\n2. Hitung komponen horisontal $\\hat{i}$:\n$$x_B - x_A = 5 - 2 = 3$$\n3. Hitung komponen vertikal $\\hat{j}$:\n$$y_B - y_A = 1 - (-3) = 1 + 3 = 4$$\n4. Nyatakan dalam bentuk kombinasi linier vektor basis:\n$$\\vec{AB} = 3\\hat{i} + 4\\hat{j}$$\n5. Jadi, komponen vektor $\\vec{AB}$ adalah $3\\hat{i} + 4\\hat{j}$ (pilihan A).",
      pitfalls: "Kesalahan tanda minus saat mengurangkan bilangan negatif $1 - (-3)$ yang sering keliru dihitung menjadi $1 - 3 = -2$."
    }
  },
  {
    id: "mat-geo-vektor-komponen-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-komponen",
    category: "Komponen Vektor Tiga Dimensi",
    difficulty: "mudah",
    statement: "Diketahui titik $P(1, 4, -2)$ dan titik $Q(3, 1, 5)$ pada ruang tiga dimensi. Vektor kolom yang menyatakan vektor $\\vec{PQ}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 2 \\\\ -3 \\\\ 7 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 \\\\ 5 \\\\ 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} -2 \\\\ 3 \\\\ -7 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 \\\\ 3 \\\\ 7 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 \\\\ -3 \\\\ 7 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada ruang dimensi tiga ($\\mathbb{R}^3$), komponen vektor kolom $\\vec{PQ}$ diperoleh dari selisih koordinat titik ujung $Q$ dengan koordinat titik pangkal $P$: $\\vec{PQ} = \\begin{pmatrix} x_Q - x_P \\\\ y_Q - y_P \\\\ z_Q - z_P \\end{pmatrix}$.",
      steps: "1. Tentukan komponen pertama sumbu-$X$:\n$$x_Q - x_P = 3 - 1 = 2$$\n2. Tentukan komponen kedua sumbu-$Y$:\n$$y_Q - y_P = 1 - 4 = -3$$\n3. Tentukan komponen ketiga sumbu-$Z$:\n$$z_Q - z_P = 5 - (-2) = 5 + 2 = 7$$\n4. Susun dalam bentuk matriks kolom:\n$$\\vec{PQ} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 7 \\end{pmatrix}$$\n5. Jadi, vektor kolom yang sesuai adalah pilihan A.",
      pitfalls: "Tertukar urutan titik dengan menghitung koordinat pangkal dikurangi koordinat ujung ($P - Q$), yang menghasilkan lawan dari vektor tersebut."
    }
  },
  {
    id: "mat-geo-vektor-komponen-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-komponen",
    category: "Komponen Vektor dari Besar dan Sudut Arah",
    difficulty: "mudah",
    statement: "Sebuah vektor $\\vec{v}$ di bidang Cartesius memiliki panjang 10 satuan dan membentuk sudut $60^\\circ$ terhadap sumbu-$X$ positif. Komponen vektor horizontal $v_x$ dan vertikal $v_y$ berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "5 dan $5\\sqrt{3}$",
      "$5\\sqrt{3}$ dan 5",
      "$5\\sqrt{2}$ dan $5\\sqrt{2}$",
      "6 dan 8",
      "5 dan 5"
    ],
    correctIndex: 0,
    solution: {
      concept: "Proyeksi komponen vektor terhadap sumbu koordinat dengan sudut arah $\\theta$ terhadap sumbu-$X$ positif dihitung menggunakan perbandingan trigonometri: $v_x = |\\vec{v}|\\cos(\\theta)$ dan $v_y = |\\vec{v}|\\sin(\\theta)$.",
      steps: "1. Hitung komponen horizontal $v_x$:\n$$v_x = |\\vec{v}| \\cos(60^\\circ) = 10 \\times \\frac{1}{2} = 5$$\n2. Hitung komponen vertikal $v_y$:\n$$v_y = |\\vec{v}| \\sin(60^\\circ) = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}$$\n3. Jadi, komponen vektor horizontal dan vertikal berturut-turut adalah 5 dan $5\\sqrt{3}$ (pilihan A).",
      pitfalls: "Tertukar antara komponen sinus dan kosinus pada penguraian sudut sumbu-$X$, yang menyebabkan nilai $v_x$ dan $v_y$ saling bertukar."
    }
  },
  {
    id: "mat-geo-vektor-komponen-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-komponen",
    category: "Komponen Vektor Negatif (Invers)",
    difficulty: "mudah",
    statement: "Diketahui vektor $\\vec{u} = -3\\hat{i} + 7\\hat{j} - 4\\hat{k}$. Komponen dari vektor negatif $-\\vec{u}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3\\hat{i} - 7\\hat{j} + 4\\hat{k}$",
      "$-3\\hat{i} - 7\\hat{j} - 4\\hat{k}$",
      "$3\\hat{i} + 7\\hat{j} - 4\\hat{k}$",
      "$-3\\hat{i} + 7\\hat{j} + 4\\hat{k}$",
      "$4\\hat{i} - 7\\hat{j} + 3\\hat{k}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Vektor negatif atau invers aditif $-\\vec{u}$ memiliki besar yang sama persis namun arah yang berlawanan, diperoleh dengan mengalikan setiap komponen skalar dengan bilangan $-1$.",
      steps: "1. Tuliskan operasi perkalian skalar $-1$ terhadap vektor $\\vec{u}$:\n$$-\\vec{u} = -1 \\cdot (-3\\hat{i} + 7\\hat{j} - 4\\hat{k})$$\n2. Kalikan tanda minus ke masing-masing suku:\n$$-\\vec{u} = -1(-3)\\hat{i} + -1(7)\\hat{j} + -1(-4)\\hat{k}$$\n$$-\\vec{u} = 3\\hat{i} - 7\\hat{j} + 4\\hat{k}$$\n3. Jadi, komponen vektor negatifnya adalah $3\\hat{i} - 7\\hat{j} + 4\\hat{k}$ (pilihan A).",
      pitfalls: "Hanya mengubah tanda komponen pertama dan melupakan pengubahan tanda pada komponen kedua atau ketiga."
    }
  },
  {
    id: "mat-geo-vektor-komponen-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-komponen",
    category: "Kesamaan Dua Vektor",
    difficulty: "mudah",
    statement: "Diketahui vektor $\\vec{a} = (2x - 1)\\hat{i} + 6\\hat{j}$ dan vektor $\\vec{b} = 7\\hat{i} + (3y + 3)\\hat{j}$. Jika kedua vektor bernilai sama ($\\vec{a} = \\vec{b}$), maka nilai dari $x + y$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "5",
      "4",
      "3",
      "6",
      "7"
    ],
    correctIndex: 0,
    solution: {
      concept: "Dua vektor dikatakan sama jika dan hanya jika komponen-komponen skalar yang seletak dan sejajar dengan vektor basis yang bersesuaian bernilai sama besar.",
      steps: "1. Samakan komponen horizontal basis $\\hat{i}$:\n$$2x - 1 = 7 \\implies 2x = 8 \\implies x = 4$$\n2. Samakan komponen vertikal basis $\\hat{j}$:\n$$6 = 3y + 3 \\implies 3y = 3 \\implies y = 1$$\n3. Hitung penjumlahan nilai $x + y$:\n$$x + y = 4 + 1 = 5$$\n4. Jadi, nilai $x + y$ adalah 5 (pilihan A).",
      pitfalls: "Keliru saat menyelesaikan aljabar linier $3y + 3 = 6$, misalnya salah memindahkan ruas menjadi $3y = 9$."
    }
  }
];
