/**
 * Batch Task: TASK_mat-geo-vektor-komponen_MEDIUM
 * SubTopic: Komponen Vektor (mat-geo-vektor-komponen)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-geo-vektor-komponen-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-komponen",
    category: "Pembagian Ruas Garis oleh Titik Vektor",
    difficulty: "sedang",
    statement: "Titik $P$ terletak pada ruas garis $AB$ sedemikian rupa sehingga perbandingan panjang ruas garis $AP : PB = 2 : 3$. Jika koordinat titik $A(1, 4, -2)$ dan titik $B(6, -1, 3)$, maka komponen vektor posisi titik $P$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3\\hat{i} + 2\\hat{j}$",
      "$3\\hat{i} + 2\\hat{j} + 2\\hat{k}$",
      "$4\\hat{i} + \\hat{j} + \\hat{k}$",
      "$2\\hat{i} + 3\\hat{j} - \\hat{k}$",
      "$5\\hat{i} + 2\\hat{j} + 2\\hat{k}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Vektor posisi titik pembagi ruas garis $P$ yang membagi $AB$ dengan rasio $m : n$ dirumuskan sebagai $\\vec{p} = \\frac{m\\vec{b} + n\\vec{a}}{m + n}$.",
      steps: "1. Identifikasi rasio pembagian: $m = 2$ dan $n = 3$, sehingga $m + n = 5$.\n2. Hitung masing-masing komponen koordinat titik $P$:\n$$x_P = \\frac{2(6) + 3(1)}{5} = \\frac{12 + 3}{5} = \\frac{15}{5} = 3$$\n$$y_P = \\frac{2(-1) + 3(4)}{5} = \\frac{-2 + 12}{5} = \\frac{10}{5} = 2$$\n$$z_P = \\frac{2(3) + 3(-2)}{5} = \\frac{6 - 6}{5} = \\frac{0}{5} = 0$$\n3. Nyatakan ke dalam bentuk vektor kombinasi linier:\n$$\\vec{p} = 3\\hat{i} + 2\\hat{j} + 0\\hat{k} = 3\\hat{i} + 2\\hat{j}$$\n4. Jadi, vektor posisi titik $P$ adalah $3\\hat{i} + 2\\hat{j}$ (pilihan A).",
      pitfalls: "Tertukar dalam memasangkan rasio pengali, yaitu mengalikan rasio $m$ dengan titik $A$ dan rasio $n$ dengan titik $B$."
    }
  },
  {
    id: "mat-geo-vektor-komponen-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-komponen",
    category: "Vektor Kolinier (Segaris)",
    difficulty: "sedang",
    statement: "Diketahui tiga buah titik pada ruang tiga dimensi, yaitu $A(2, 1, 3)$, $B(4, 5, 7)$, dan $C(x, y, 15)$. Jika titik $A$, $B$, dan $C$ terletak pada satu garis lurus (kolinier), maka nilai dari $x + y$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "21",
      "19",
      "17",
      "23",
      "25"
    ],
    correctIndex: 0,
    solution: {
      concept: "Tiga titik $A$, $B$, dan $C$ kolinier jika vektor $\\vec{AC}$ merupakan kelipatan skalar dari vektor $\\vec{AB}$, yaitu $\\vec{AC} = k \\cdot \\vec{AB}$.",
      steps: "1. Tentukan komponen vektor $\\vec{AB}$:\n$$\\vec{AB} = \\begin{pmatrix} 4 - 2 \\\\ 5 - 1 \\\\ 7 - 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 4 \\\\ 4 \\end{pmatrix}$$\n2. Tentukan komponen vektor $\\vec{AC}$:\n$$\\vec{AC} = \\begin{pmatrix} x - 2 \\\\ y - 1 \\\\ 15 - 3 \\end{pmatrix} = \\begin{pmatrix} x - 2 \\\\ y - 1 \\\\ 12 \\end{pmatrix}$$\n3. Samakan komponen sumbu-$Z$ untuk mencari nilai konstanta pembanding $k$:\n$$12 = k(4) \\implies k = 3$$\n4. Cari nilai $x$ dan $y$ menggunakan nilai $k = 3$:\n$$x - 2 = 3(2) = 6 \\implies x = 8$$\n$$y - 1 = 3(4) = 12 \\implies y = 13$$\n5. Hitung nilai $x + y$:\n$$x + y = 8 + 13 = 21$$\n6. Jadi, nilai $x + y$ adalah 21 (pilihan A).",
      pitfalls: "Lupa mengurangkan koordinat titik $A$ saat menyusun vektor $\\vec{AC}$, sehingga langsung menyamakan $x = 3(2)$ yang menghasilkan nilai yang keliru."
    }
  },
  {
    id: "mat-geo-vektor-komponen-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-komponen",
    category: "Vektor Satuan (Unit Vector)",
    difficulty: "sedang",
    statement: "Vektor satuan yang searah dengan vektor $\\vec{v} = 2\\hat{i} - 3\\hat{j} + 6\\hat{k}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{2}{7}\\hat{i} - \\frac{3}{7}\\hat{j} + \\frac{6}{7}\\hat{k}$",
      "$\\frac{2}{49}\\hat{i} - \\frac{3}{49}\\hat{j} + \\frac{6}{49}\\hat{k}$",
      "$\\frac{2}{\\sqrt{11}}\\hat{i} - \\frac{3}{\\sqrt{11}}\\hat{j} + \\frac{6}{\\sqrt{11}}\\hat{k}$",
      "$-\\frac{2}{7}\\hat{i} + \\frac{3}{7}\\hat{j} - \\frac{6}{7}\\hat{k}$",
      "$\\frac{1}{7}\\hat{i} - \\frac{3}{7}\\hat{j} + \\frac{2}{7}\\hat{k}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Vektor satuan yang searah dengan sembarang vektor $\\vec{v}$ diperoleh dengan membagi vektor tersebut dengan panjang (norma) mutlaknya: $\\hat{u} = \\frac{\\vec{v}}{|\\vec{v}|}$.",
      steps: "1. Hitung panjang vektor $|\\vec{v}|$:\n$$|\\vec{v}| = \\sqrt{2^2 + (-3)^2 + 6^2}$$\n$$|\\vec{v}| = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$$\n2. Bagi masing-masing komponen vektor dengan panjang 7:\n$$\\hat{u} = \\frac{2\\hat{i} - 3\\hat{j} + 6\\hat{k}}{7}$$\n$$\\hat{u} = \\frac{2}{7}\\hat{i} - \\frac{3}{7}\\hat{j} + \\frac{6}{7}\\hat{k}$$\n3. Jadi, vektor satuan yang searah adalah $\\frac{2}{7}\\hat{i} - \\frac{3}{7}\\hat{j} + \\frac{6}{7}\\hat{k}$ (pilihan A).",
      pitfalls: "Membagi komponen vektor dengan kuadrat panjangnya ($|\\vec{v}|^2 = 49$) alih-alih panjang aslinya ($7$)."
    }
  },
  {
    id: "mat-geo-vektor-komponen-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-komponen",
    category: "Vektor Posisi Titik Berat Segitiga",
    difficulty: "sedang",
    statement: "Pada suatu segitiga $ABC$ di ruang dimensi tiga, koordinat titik-titik sudutnya adalah $A(2, -1, 4)$, $B(5, 4, -3)$, dan $C(-1, 3, 2)$. Vektor posisi dari titik berat segitiga $ABC$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\hat{i} + 2\\hat{j} + \\hat{k}$",
      "$3\\hat{i} + 2\\hat{j} + \\hat{k}$",
      "$2\\hat{i} + 3\\hat{j} + 2\\hat{k}$",
      "$\\hat{i} + 2\\hat{j} + 3\\hat{k}$",
      "$6\\hat{i} + 6\\hat{j} + 3\\hat{k}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik berat suatu segitiga $ABC$ memiliki vektor posisi yang merupakan rata-rata aritmetika dari ketiga vektor posisi titik sudutnya: $\\vec{z} = \\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3}$.",
      steps: "1. Jumlahkan seluruh komponen pada masing-masing sumbu koordinat:\n- Sumbu-$X$: $x_Z = \\frac{2 + 5 + (-1)}{3} = \\frac{6}{3} = 2$\n- Sumbu-$Y$: $y_Z = \\frac{-1 + 4 + 3}{3} = \\frac{6}{3} = 2$\n- Sumbu-$Z$: $z_Z = \\frac{4 + (-3) + 2}{3} = \\frac{3}{3} = 1$\n2. Susun komponen ke dalam bentuk kombinasi linier vektor:\n$$\\vec{z} = 2\\hat{i} + 2\\hat{j} + 1\\hat{k} = 2\\hat{i} + 2\\hat{j} + \\hat{k}$$\n3. Jadi, vektor posisi titik beratnya adalah $2\\hat{i} + 2\\hat{j} + \\hat{k}$ (pilihan A).",
      pitfalls: "Lupa membagi dengan 3 setelah menjumlahkan ketiga koordinat titik sudut segitiga."
    }
  },
  {
    id: "mat-geo-vektor-komponen-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-komponen",
    category: "Dekomposisi Kombinasi Linier Vektor",
    difficulty: "sedang",
    statement: "Diketahui vektor kolom $\\vec{u} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$, $\\vec{v} = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$, dan $\\vec{w} = \\begin{pmatrix} 11 \\\\ 8 \\end{pmatrix}$. Jika vektor $\\vec{w}$ dapat dinyatakan sebagai kombinasi linier $\\vec{w} = p\\vec{u} + q\\vec{v}$, maka nilai dari perkalian skalar $p \\cdot q$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "10",
      "12",
      "8",
      "6",
      "15"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kombinasi linier $\\vec{w} = p\\vec{u} + q\\vec{v}$ diselesaikan dengan membentuk sistem persamaan linier dua variabel (SPLDV) dari kesamaan komponen vektor seletak.",
      steps: "1. Tuliskan kesamaan komponen vektor:\n$$\\begin{pmatrix} 11 \\\\ 8 \\end{pmatrix} = p \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} + q \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$$\n2. Bentuk SPLDV:\n- Persamaan (1): $p + 3q = 11$\n- Persamaan (2): $2p - q = 8 \\implies q = 2p - 8$\n3. Substitusikan $q$ ke Persamaan (1):\n$$p + 3(2p - 8) = 11 \\implies p + 6p - 24 = 11$$\n$$7p = 35 \\implies p = 5$$\n4. Hitung nilai $q$:\n$$q = 2(5) - 8 = 10 - 8 = 2$$\n5. Hitung hasil perkalian $p \\cdot q$:\n$$p \\cdot q = 5 \\cdot 2 = 10$$\n6. Jadi, nilai dari $p \\cdot q$ adalah 10 (pilihan A).",
      pitfalls: "Kesalahan saat melakukan substitusi aljabar tanda minus $3(-8) = -24$ yang sering keliru menjadi tanda positif."
    }
  }
];
