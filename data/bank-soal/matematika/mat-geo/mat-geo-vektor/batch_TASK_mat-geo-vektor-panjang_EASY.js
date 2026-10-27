/**
 * Batch Task: TASK_mat-geo-vektor-panjang_EASY
 * SubTopic: Panjang Vektor (mat-geo-vektor-panjang)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-vektor-panjang-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-panjang",
    category: "Panjang Vektor Dua Dimensi",
    difficulty: "mudah",
    statement: "Panjang (norma) dari vektor $\\vec{u} = 6\\hat{i} - 8\\hat{j}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "10",
      "14",
      "12",
      "$\\sqrt{28}$",
      "2"
    ],
    correctIndex: 0,
    solution: {
      concept: "Panjang atau besar suatu vektor dua dimensi $\\vec{u} = x\\hat{i} + y\\hat{j}$ dihitung berdasarkan teorema Pythagoras: $|\\vec{u}| = \\sqrt{x^2 + y^2}$.",
      steps: "1. Identifikasi komponen skalar vektor: $x = 6$ dan $y = -8$.\n2. Masukkan ke rumus panjang vektor:\n$$|\\vec{u}| = \\sqrt{6^2 + (-8)^2}$$\n3. Kuadratkan masing-masing komponen:\n$$|\\vec{u}| = \\sqrt{36 + 64} = \\sqrt{100}$$\n4. Akarkan nilai tersebut:\n$$|\\vec{u}| = 10$$\n5. Jadi, panjang vektor $\\vec{u}$ adalah 10 satuan (pilihan A).",
      pitfalls: "Menjumlahkan komponen secara langsung $6 + (-8) = -2$ tanpa menguadratkan terlebih dahulu di dalam akar kuadrat."
    }
  },
  {
    id: "mat-geo-vektor-panjang-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-panjang",
    category: "Jarak Antartitik Menggunakan Vektor",
    difficulty: "mudah",
    statement: "Diketahui titik $A(1, 2)$ dan titik $B(4, 6)$ pada bidang Cartesius. Panjang vektor perpindahan $\\vec{AB}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "5",
      "7",
      "$\\sqrt{13}$",
      "25",
      "6"
    ],
    correctIndex: 0,
    solution: {
      concept: "Panjang vektor $\\vec{AB}$ dari titik $A(x_1, y_1)$ ke titik $B(x_2, y_2)$ adalah jarak Euclidean antara kedua titik tersebut: $|\\vec{AB}| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.",
      steps: "1. Tentukan komponen vektor $\\vec{AB}$:\n$$\\vec{AB} = (4 - 1)\\hat{i} + (6 - 2)\\hat{j} = 3\\hat{i} + 4\\hat{j}$$\n2. Hitung panjang vektor:\n$$|\\vec{AB}| = \\sqrt{3^2 + 4^2}$$\n$$|\\vec{AB}| = \\sqrt{9 + 16} = \\sqrt{25} = 5$$\n3. Jadi, panjang vektor perpindahan $\\vec{AB}$ adalah 5 satuan (pilihan A).",
      pitfalls: "Lupa menarik akar kuadrat setelah menjumlahkan kuadrat komponen ($9 + 16 = 25$ langsung dipilih)."
    }
  },
  {
    id: "mat-geo-vektor-panjang-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-panjang",
    category: "Panjang Vektor Tiga Dimensi",
    difficulty: "mudah",
    statement: "Panjang dari vektor kolom pada ruang tiga dimensi $\\vec{v} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 6 \\end{pmatrix}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "7",
      "$\\sqrt{11}$",
      "11",
      "5",
      "49"
    ],
    correctIndex: 0,
    solution: {
      concept: "Panjang vektor di ruang $\\mathbb{R}^3$ dengan komponen $\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}$ dirumuskan sebagai norma Euclidean: $|\\vec{v}| = \\sqrt{x^2 + y^2 + z^2}$.",
      steps: "1. Ambil nilai masing-masing komponen: $x = 2$, $y = -3$, $z = 6$.\n2. Masukkan ke rumus panjang vektor $\\mathbb{R}^3$:\n$$|\\vec{v}| = \\sqrt{2^2 + (-3)^2 + 6^2}$$\n3. Hitung hasil kuadrat dan jumlahkan:\n$$|\\vec{v}| = \\sqrt{4 + 9 + 36} = \\sqrt{49}$$\n4. Sederhanakan bentuk akar:\n$$|\\vec{v}| = 7$$\n5. Jadi, panjang vektor $\\vec{v}$ adalah 7 satuan (pilihan A).",
      pitfalls: "Kesalahan saat menguadratkan bilangan negatif $(-3)^2$ yang sering keliru dihitung sebagai $-9$."
    }
  },
  {
    id: "mat-geo-vektor-panjang-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-panjang",
    category: "Panjang Vektor Hasil Perkalian Skalar",
    difficulty: "mudah",
    statement: "Diketahui vektor $\\vec{a} = 3\\hat{i} - 4\\hat{j}$. Panjang dari vektor hasil perkalian skalar $2\\vec{a}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "10",
      "5",
      "20",
      "14",
      "7"
    ],
    correctIndex: 0,
    solution: {
      concept: "Panjang dari perkalian skalar suatu vektor memenuhi sifat homogenitas norma: $|k\\vec{a}| = |k| \\cdot |\\vec{a}|$.",
      steps: "1. Hitung panjang vektor dasar $\\vec{a}$:\n$$|\\vec{a}| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$\n2. Gunakan sifat perkalian skalar dengan $k = 2$:\n$$|2\\vec{a}| = |2| \\cdot |\\vec{a}| = 2 \\times 5 = 10$$\n3. (Atau secara langsung mencari $2\\vec{a} = 6\\hat{i} - 8\\hat{j}$, sehingga $\\sqrt{6^2 + (-8)^2} = \\sqrt{100} = 10$).\n4. Jadi, panjang vektor $2\\vec{a}$ adalah 10 satuan (pilihan A).",
      pitfalls: "Hanya menghitung panjang vektor awal $\\vec{a}$ bernilai 5 tanpa mengalikannya dengan faktor skala 2."
    }
  },
  {
    id: "mat-geo-vektor-panjang-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-panjang",
    category: "Komponen dari Panjang Vektor yang Diketahui",
    difficulty: "mudah",
    statement: "Diketahui vektor $\\vec{w} = k\\hat{i} + 12\\hat{j}$. Jika panjang vektor $|\\vec{w}| = 13$ dan konstanta $k > 0$, maka nilai $k$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "5",
      "4",
      "1",
      "25",
      "7"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jika panjang vektor diketahui, komponen yang belum diketahui dapat dicari dengan menyusun persamaan kuadrat dari rumus panjang vektor: $|\\vec{w}|^2 = x^2 + y^2$.",
      steps: "1. Terapkan rumus kuadrat panjang vektor:\n$$|\\vec{w}|^2 = k^2 + 12^2$$\n2. Substitusikan $|\\vec{w}| = 13$:\n$$13^2 = k^2 + 144$$\n$$169 = k^2 + 144$$\n3. Kurangkan kedua ruas dengan 144:\n$$k^2 = 169 - 144 = 25$$\n4. Karena disyaratkan $k > 0$, maka:\n$$k = \\sqrt{25} = 5$$\n5. Jadi, nilai $k$ adalah 5 (pilihan A).",
      pitfalls: "Mengurangkan langsung $13 - 12 = 1$ alih-alih mengurangkan bentuk kuadrat Pythagoras."
    }
  }
];
