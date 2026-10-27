/**
 * Batch Task: TASK_mat-geo-vektor-operasi_EASY
 * SubTopic: Operasi Vektor (mat-geo-vektor-operasi)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-vektor-operasi-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-operasi",
    category: "Penjumlahan Dua Vektor Dua Dimensi",
    difficulty: "mudah",
    statement: "Diketahui vektor $\\vec{a} = 4\\hat{i} - 2\\hat{j}$ dan $\\vec{b} = -3\\hat{i} + 5\\hat{j}$. Hasil dari operasi penjumlahan vektor $\\vec{a} + \\vec{b}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\hat{i} + 3\\hat{j}$",
      "$7\\hat{i} + 3\\hat{j}$",
      "$\\hat{i} - 7\\hat{j}$",
      "$-\\hat{i} + 3\\hat{j}$",
      "$7\\hat{i} - 7\\hat{j}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Penjumlahan dua vektor dilakukan dengan menjumlahkan masing-masing komponen skalar yang bersesuaian dengan vektor basis: $(x_1\\hat{i} + y_1\\hat{j}) + (x_2\\hat{i} + y_2\\hat{j}) = (x_1 + x_2)\\hat{i} + (y_1 + y_2)\\hat{j}$.",
      steps: "1. Jumlahkan komponen horizontal $\\hat{i}$:\n$$4 + (-3) = 1$$\n2. Jumlahkan komponen vertikal $\\hat{j}$:\n$$-2 + 5 = 3$$\n3. Gabungkan dalam bentuk vektor basis:\n$$\\vec{a} + \\vec{b} = 1\\hat{i} + 3\\hat{j} = \\hat{i} + 3\\hat{j}$$\n4. Jadi, hasil penjumlahannya adalah $\\hat{i} + 3\\hat{j}$ (pilihan A).",
      pitfalls: "Keliru tanda saat mengoperasikan bilangan bulat $-2 + 5$ yang terkadang salah dihitung sebagai $-7$."
    }
  },
  {
    id: "mat-geo-vektor-operasi-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-operasi",
    category: "Pengurangan Vektor Tiga Dimensi",
    difficulty: "mudah",
    statement: "Diketahui vektor kolom $\\vec{u} = \\begin{pmatrix} 5 \\\\ -1 \\\\ 4 \\end{pmatrix}$ dan $\\vec{v} = \\begin{pmatrix} 2 \\\\ 3 \\\\ -2 \\end{pmatrix}$. Hasil dari operasi pengurangan vektor $\\vec{u} - \\vec{v}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 3 \\\\ -4 \\\\ 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 \\\\ 2 \\\\ 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 7 \\\\ 2 \\\\ 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 \\\\ -4 \\\\ 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} -3 \\\\ 4 \\\\ -6 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pengurangan dua vektor kolom dihitung dengan mengurangkan entri-entri baris yang seletak: $\\begin{pmatrix} u_1 \\\\ u_2 \\\\ u_3 \\end{pmatrix} - \\begin{pmatrix} v_1 \\\\ v_2 \\\\ v_3 \\end{pmatrix} = \\begin{pmatrix} u_1 - v_1 \\\\ u_2 - v_2 \\\\ u_3 - v_3 \\end{pmatrix}$.",
      steps: "1. Kurangkan baris pertama:\n$$5 - 2 = 3$$\n2. Kurangkan baris kedua:\n$$-1 - 3 = -4$$\n3. Kurangkan baris ketiga:\n$$4 - (-2) = 4 + 2 = 6$$\n4. Susun hasilnya dalam matriks kolom:\n$$\\vec{u} - \\vec{v} = \\begin{pmatrix} 3 \\\\ -4 \\\\ 6 \\end{pmatrix}$$\n5. Jadi, hasil pengurangannya adalah pilihan A.",
      pitfalls: "Kesalahan tanda minus ganda pada baris ketiga $4 - (-2)$ yang sering salah dihitung menjadi $4 - 2 = 2$."
    }
  },
  {
    id: "mat-geo-vektor-operasi-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-operasi",
    category: "Operasi Campuran Linier Vektor",
    difficulty: "mudah",
    statement: "Diketahui vektor $\\vec{p} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ dan $\\vec{q} = \\hat{i} - 2\\hat{j} + 4\\hat{k}$. Hasil operasi linier $3\\vec{p} - 2\\vec{q}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\hat{i} + 13\\hat{j} - 11\\hat{k}$",
      "$4\\hat{i} + 5\\hat{j} + 5\\hat{k}$",
      "$5\\hat{i} + 13\\hat{j} - 11\\hat{k}$",
      "$4\\hat{i} + 7\\hat{j} - 11\\hat{k}$",
      "$8\\hat{i} + 5\\hat{j} - 5\\hat{k}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Operasi kombinasi linier skalar dan vektor dilakukan dengan mendistribusikan masing-masing pengali skalar ke setiap komponen vektor terlebih dahulu sebelum dijumlahkan atau dikurangkan.",
      steps: "1. Kalikan skalar 3 pada vektor $\\vec{p}$:\n$$3\\vec{p} = 3(2\\hat{i} + 3\\hat{j} - \\hat{k}) = 6\\hat{i} + 9\\hat{j} - 3\\hat{k}$$\n2. Kalikan skalar 2 pada vektor $\\vec{q}$:\n$$2\\vec{q} = 2(\\hat{i} - 2\\hat{j} + 4\\hat{k}) = 2\\hat{i} - 4\\hat{j} + 8\\hat{k}$$\n3. Kurangkan kedua vektor tersebut:\n$$3\\vec{p} - 2\\vec{q} = (6 - 2)\\hat{i} + (9 - (-4))\\hat{j} + (-3 - 8)\\hat{k}$$\n$$3\\vec{p} - 2\\vec{q} = 4\\hat{i} + 13\\hat{j} - 11\\hat{k}$$\n4. Jadi, hasilnya adalah $4\\hat{i} + 13\\hat{j} - 11\\hat{k}$ (pilihan A).",
      pitfalls: "Lupa mendistribusikan tanda minus saat mengurangkan suku kedua $9 - (-4) = 13$, yang sering keliru menjadi $9 - 4 = 5$."
    }
  },
  {
    id: "mat-geo-vektor-operasi-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-operasi",
    category: "Perkalian Skalar (Dot Product) Dasar",
    difficulty: "mudah",
    statement: "Hasil perkalian skalar (dot product) antara vektor $\\vec{a} = 3\\hat{i} + 4\\hat{j}$ dan vektor $\\vec{b} = 2\\hat{i} - 5\\hat{j}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-14",
      "14",
      "26",
      "-26",
      "6"
    ],
    correctIndex: 0,
    solution: {
      concept: "Perkalian skalar (titik) dua buah vektor $\\vec{a} \\cdot \\vec{b}$ menghasilkan besaran skalar yang bernilai jumlah dari hasil kali masing-masing komponen seletak: $\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y$.",
      steps: "1. Identifikasi komponen kedua vektor: $a_x = 3, a_y = 4$ dan $b_x = 2, b_y = -5$.\n2. Lakukan perkalian skalar:\n$$\\vec{a} \\cdot \\vec{b} = (3)(2) + (4)(-5)$$\n3. Selesaikan operasi perkalian dan penjumlahan:\n$$\\vec{a} \\cdot \\vec{b} = 6 + (-20) = -14$$\n4. Jadi, hasil perkalian skalarnya adalah -14 (pilihan A).",
      pitfalls: "Menyertakan vektor basis $\\hat{i}$ dan $\\hat{j}$ pada hasil akhir, padahal perkalian skalar (dot product) selalu menghasilkan bilangan skalar murni."
    }
  },
  {
    id: "mat-geo-vektor-operasi-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-operasi",
    category: "Vektor Lawan dan Vektor Nol",
    difficulty: "mudah",
    statement: "Jika $\\vec{r} = 4\\hat{i} - 6\\hat{j} + 2\\hat{k}$ dan $\\vec{s}$ merupakan sebuah vektor sedemikian rupa sehingga memenuhi hubungan $\\vec{r} + \\vec{s} = \\vec{0}$, maka komponen dari vektor $\\vec{s}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-4\\hat{i} + 6\\hat{j} - 2\\hat{k}$",
      "$4\\hat{i} + 6\\hat{j} + 2\\hat{k}$",
      "$-4\\hat{i} - 6\\hat{j} - 2\\hat{k}$",
      "$6\\hat{i} - 4\\hat{j} + 2\\hat{k}$",
      "$-4\\hat{i} + 6\\hat{j} + 2\\hat{k}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Vektor $\\vec{s}$ yang dijumlahkan dengan $\\vec{r}$ menghasilkan vektor nol $\\vec{0}$ adalah invers penjumlahan (vektor lawan) dari $\\vec{r}$, yaitu $\\vec{s} = -\\vec{r}$.",
      steps: "1. Dari persamaan $\\vec{r} + \\vec{s} = \\vec{0}$, pindahkan $\\vec{r}$ ke ruas kanan:\n$$\\vec{s} = -\\vec{r}$$\n2. Substitusikan komponen vektor $\\vec{r}$:\n$$\\vec{s} = -(4\\hat{i} - 6\\hat{j} + 2\\hat{k})$$\n3. Ubah tanda setiap komponen:\n$$\\vec{s} = -4\\hat{i} + 6\\hat{j} - 2\\hat{k}$$\n4. Jadi, vektor $\\vec{s}$ adalah $-4\\hat{i} + 6\\hat{j} - 2\\hat{k}$ (pilihan A).",
      pitfalls: "Lupa mengubah tanda negatif pada komponen $-6\\hat{j}$ menjadi positif saat mengalikan dengan $-1$."
    }
  }
];
