/**
 * Batch Task: TASK_mat-geo-trans-refleksi_EASY
 * SubTopic: Transformasi Geometri: Refleksi (mat-geo-trans-refleksi)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-trans-refleksi-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-refleksi",
    category: "Refleksi Titik terhadap Sumbu-X",
    difficulty: "mudah",
    statement: "Bayangan titik koordinat $A(-4, 7)$ jika dicerminkan terhadap sumbu-$X$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(4, 7)$",
      "$(-4, -7)$",
      "$(4, -7)$",
      "$(7, -4)$",
      "$(-7, 4)$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Refleksi titik $P(x, y)$ terhadap sumbu-$X$ tidak mengubah absis ($x$), tetapi mengubah tanda ordinat ($y$). Matriks transformasinya adalah $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, sehingga $x' = x$ dan $y' = -y$.",
      steps: "1. Identifikasi titik asal $A(x, y) = (-4, 7)$, dengan $x = -4$ dan $y = 7$.\n2. Gunakan rumus refleksi sumbu-$X$:\n$$x' = x = -4$$\n$$y' = -y = -(7) = -7$$\n3. Diperoleh koordinat bayangan $A'(-4, -7)$.\n4. Jadi, jawabannya adalah $(-4, -7)$ (pilihan B).",
      pitfalls: "Tertukar dengan refleksi terhadap sumbu-$Y$ yang mengubah tanda absis ($x$) bukannya ordinat ($y$)."
    }
  },
  {
    id: "mat-geo-trans-refleksi-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-refleksi",
    category: "Refleksi Titik terhadap Sumbu-Y",
    difficulty: "mudah",
    statement: "Titik $B(5, -9)$ dicerminkan terhadap sumbu-$Y$. Koordinat titik bayangannya $B'$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-5, -9)$",
      "$(-5, 9)$",
      "$(5, 9)$",
      "$(-9, 5)$",
      "$(9, -5)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Refleksi titik $P(x, y)$ terhadap sumbu-$Y$ membalikkan tanda absis ($x$) dan mempertahankan ordinat ($y$), yaitu $x' = -x$ dan $y' = y$.",
      steps: "1. Titik awal adalah $B(5, -9)$, dengan $x = 5$ dan $y = -9$.\n2. Lakukan pencerminan terhadap sumbu-$Y$:\n$$x' = -x = -(5) = -5$$\n$$y' = y = -9$$\n3. Maka bayangan titik $B$ adalah $B'(-5, -9)$.\n4. Jadi, pilihan yang benar adalah A.",
      pitfalls: "Mengubah kedua tanda koordinat seperti pada refleksi terhadap titik pusat $(0,0)$."
    }
  },
  {
    id: "mat-geo-trans-refleksi-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-refleksi",
    category: "Refleksi Titik terhadap Garis y = x",
    difficulty: "mudah",
    statement: "Bayangan titik $C(-3, 8)$ oleh pencerminan terhadap garis lurus $y = x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-8, 3)$",
      "$(3, -8)$",
      "$(-3, -8)$",
      "$(8, -3)$",
      "$(8, 3)$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Pencerminan suatu titik $P(x, y)$ terhadap garis $y = x$ menukarkan posisi absis dan ordinat tanpa mengubah tanda: $(x, y) \\to (y, x)$. Matriks transformasinya adalah $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$.",
      steps: "1. Dari titik $C(-3, 8)$, nilai $x = -3$ dan $y = 8$.\n2. Terapkan pemetaan pencerminan terhadap $y = x$:\n$$x' = y = 8$$\n$$y' = x = -3$$\n3. Diperoleh titik bayangan $C'(8, -3)$.\n4. Jadi, bayangan titik $C$ adalah $(8, -3)$ (pilihan D).",
      pitfalls: "Mengubah tanda koordinat menjadi $(-y, -x)$ yang merupakan aturan refleksi terhadap garis $y = -x$."
    }
  },
  {
    id: "mat-geo-trans-refleksi-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-refleksi",
    category: "Refleksi Titik terhadap Garis y = -x",
    difficulty: "mudah",
    statement: "Jika titik $P(2, -6)$ dicerminkan terhadap garis $y = -x$, maka koordinat bayangan titik $P$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-6, 2)$",
      "$(6, 2)$",
      "$(6, -2)$",
      "$(-2, 6)$",
      "$(-6, -2)$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pencerminan titik $P(x, y)$ terhadap garis $y = -x$ menghasilkan bayangan dengan menukar posisi serta membalikkan tanda kedua koordinat: $(x, y) \\to (-y, -x)$. Matriks transformasinya adalah $\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$.",
      steps: "1. Titik asal $P(2, -6)$, dengan $x = 2$ dan $y = -6$.\n2. Hitung koordinat bayangan:\n$$x' = -y = -(-6) = 6$$\n$$y' = -x = -(2) = -2$$\n3. Titik bayangan adalah $P'(6, -2)$.\n4. Jadi, hasil pencerminannya adalah $(6, -2)$ (pilihan C).",
      pitfalls: "Lupa mengubah tanda negatif saat menukar posisi koordinat, menghasilkan $(-6, 2)$."
    }
  },
  {
    id: "mat-geo-trans-refleksi-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-refleksi",
    category: "Refleksi Titik terhadap Titik Asal O(0, 0)",
    difficulty: "mudah",
    statement: "Titik $Q(-7, -4)$ dicerminkan terhadap titik pangkal koordinat $O(0, 0)$. Koordinat bayangan titik $Q'$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(7, -4)$",
      "$(-7, 4)$",
      "$(4, 7)$",
      "$(-4, -7)$",
      "$(7, 4)$"
    ],
    correctIndex: 4,
    solution: {
      concept: "Pencerminan titik $P(x, y)$ terhadap titik pangkal $O(0, 0)$ setara dengan rotasi $180^\\circ$, yang membalik tanda kedua koordinat: $(x, y) \\to (-x, -y)$. Matriks transformasinya adalah $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.",
      steps: "1. Diberikan koordinat $Q(-7, -4)$, maka $x = -7$ dan $y = -4$.\n2. Terapkan rumus pencerminan terhadap titik asal $O(0, 0)$:\n$$x' = -x = -(-7) = 7$$\n$$y' = -y = -(-4) = 4$$\n3. Koordinat bayangan yang terbentuk adalah $Q'(7, 4)$.\n4. Jadi, koordinat titik $Q'$ adalah $(7, 4)$ (pilihan E).",
      pitfalls: "Hanya mengubah salah satu tanda koordinat atau tidak teliti dengan tanda minus ganda $(-(-7) = +7)$."
    }
  }
];
