/**
 * Batch Task: TASK_mat-geo-trans-komposisi_EASY
 * SubTopic: Transformasi Geometri: Komposisi Transformasi (mat-geo-trans-komposisi)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-trans-komposisi-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-komposisi",
    category: "Komposisi Translasi Dilanjutkan Refleksi Sumbu-X",
    difficulty: "mudah",
    statement: "Titik $A(2, -3)$ ditranslasikan oleh $T = \\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$ kemudian dicerminkan terhadap sumbu-$X$. Koordinat bayangan akhir titik $A$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(5, -2)$",
      "$(5, 2)$",
      "$(-5, 2)$",
      "$(5, -8)$",
      "$(-5, -2)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada komposisi transformasi, hasil bayangan dari transformasi pertama menjadi titik asal bagi transformasi berikutnya secara bertahap.",
      steps: "1. Terapkan translasi pertama oleh $T = \\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$ pada titik awal $A(2, -3)$:\n$$x_1 = 2 + 3 = 5$$\n$$y_1 = -3 + 5 = 2$$\nDiperoleh bayangan sementara $A_1(5, 2)$.\n2. Terapkan pencerminan terhadap sumbu-$X$ pada $A_1(5, 2)$:\n$$x' = x_1 = 5$$\n$$y' = -y_1 = -2$$\n3. Diperoleh bayangan akhir $A'(5, -2)$.\n4. Jadi, jawabannya adalah $(5, -2)$ (pilihan A).",
      pitfalls: "Melakukan pencerminan terhadap sumbu-$X$ terlebih dahulu sebelum translasi, yang akan menghasilkan urutan yang salah jika pertanyaannya tidak komutatif."
    }
  },
  {
    id: "mat-geo-trans-komposisi-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-komposisi",
    category: "Komposisi Refleksi Garis y = x Dilanjutkan Rotasi +90 Derajat",
    difficulty: "mudah",
    statement: "Titik $B(4, 1)$ dicerminkan terhadap garis $y = x$ lalu dirotasikan $90^\\circ$ berlawanan arah putaran jarum jam terhadap pusat $O(0, 0)$. Koordinat bayangan akhir titik $B$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-4, 1)$",
      "$(4, -1)$",
      "$(-1, 4)$",
      "$(-4, -1)$",
      "$(1, -4)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Transformasi bertahap: refleksi $y = x$ memetakan $(x, y) \\to (y, x)$, kemudian rotasi $[O, 90^\\circ]$ memetakan $(x_1, y_1) \\to (-y_1, x_1)$. Gabungannya setara dengan pencerminan terhadap sumbu-$Y$: $(x, y) \\to (-x, y)$.",
      steps: "1. Refleksi titik $B(4, 1)$ terhadap garis $y = x$ menghasilkan $B_1(1, 4)$.\n2. Rotasi titik $B_1(1, 4)$ sebesar $90^\\circ$ berlawanan arah jarum jam:\n$$x' = -y_1 = -4$$\n$$y' = x_1 = 1$$\n3. Diperoleh koordinat bayangan akhir $B'(-4, 1)$.\n4. Jadi, pilihan yang benar adalah A.",
      pitfalls: "Tertukar saat menerapkan aturan rotasi $90^\\circ$ berlawanan arah jarum jam ($x' = -y$) dengan rotasi searah jarum jam ($x' = y$)."
    }
  },
  {
    id: "mat-geo-trans-komposisi-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-komposisi",
    category: "Komposisi Dilatasi Dilanjutkan Translasi",
    difficulty: "mudah",
    statement: "Titik $C(-2, 3)$ didilatasikan dengan faktor skala $k = 2$ terhadap pusat $O(0, 0)$, kemudian dilanjutkan pergeseran oleh vektor $T = \\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix}$. Bayangan akhir titik $C$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-5, 10)$",
      "$(-3, 10)$",
      "$(-6, 14)$",
      "$(-5, 7)$",
      "$(5, -10)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Lakukan dilatasi $[O, k]$ terlebih dahulu: $(x_1, y_1) = (kx, ky)$, kemudian jumlahkan dengan komponen translasi $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$: $(x', y') = (x_1 + a, y_1 + b)$.",
      steps: "1. Dilatasi titik $C(-2, 3)$ dengan $k = 2$:\n$$x_1 = 2 \\times (-2) = -4$$\n$$y_1 = 2 \\times 3 = 6$$\nDiperoleh titik $C_1(-4, 6)$.\n2. Translasi titik $C_1(-4, 6)$ oleh $T = \\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix}$:\n$$x' = -4 + (-1) = -5$$\n$$y' = 6 + 4 = 10$$\n3. Bayangan akhir yang diperoleh adalah $C'(-5, 10)$.\n4. Jadi, pilihan yang tepat adalah A.",
      pitfalls: "Menjumlahkan titik dengan translasi terlebih dahulu baru kemudian mengalikan dengan faktor skala, yang menghasilkan bayangan berbeda $(-6, 14)$."
    }
  },
  {
    id: "mat-geo-trans-komposisi-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-komposisi",
    category: "Komposisi Dua Matriks Transformasi Sederhana",
    difficulty: "mudah",
    statement: "Transformasi $T_1$ bersesuaian dengan matriks $M_1 = \\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix}$ dan transformasi $T_2$ bersesuaian dengan matriks $M_2 = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$. Bayangan titik $D(3, 4)$ oleh transformasi komposisi $T_2 \\circ T_1$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(6, 4)$",
      "$(8, 3)$",
      "$(4, 6)$",
      "$(3, 8)$",
      "$(4, 3)$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Komposisi transformasi $T_2 \\circ T_1$ berarti transformasi $T_1$ dikerjakan terlebih dahulu pada titik objek, kemudian hasilnya ditransformasikan oleh $T_2$. Dalam notasi matriks: $(T_2 \\circ T_1)(D) = M_2 \\times (M_1 \\times D) = (M_2 M_1) D$.",
      steps: "1. Transformasi pertama oleh $M_1$ pada titik $D(3, 4)$:\n$$\\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix} = \\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 4 \\end{pmatrix}$$\n2. Transformasi kedua oleh $M_2$ pada hasil $(6, 4)$:\n$$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 6 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}$$\n3. Titik bayangan akhir adalah $D'(4, 6)$.\n4. Jadi, jawabannya adalah $(4, 6)$ (pilihan C).",
      pitfalls: "Mengerjakan $T_2$ terlebih dahulu baru $T_1$ (yaitu $T_1 \\circ T_2$) yang menghasilkan koordinat $(8, 3)$."
    }
  },
  {
    id: "mat-geo-trans-komposisi-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-komposisi",
    category: "Komposisi Rotasi 180 Derajat Dilanjutkan Refleksi Garis y = -x",
    difficulty: "mudah",
    statement: "Bayangan titik $E(-3, -5)$ oleh rotasi $180^\\circ$ berpusat di titik asal $O(0, 0)$ kemudian dicerminkan terhadap garis $y = -x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(5, 3)$",
      "$(-3, -5)$",
      "$(-5, 3)$",
      "$(-5, -3)$",
      "$(3, 5)$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Rotasi $[O, 180^\\circ]$ memetakan $(x, y) \\to (-x, -y)$. Pencerminan terhadap garis $y = -x$ memetakan $(x_1, y_1) \\to (-y_1, -x_1)$.",
      steps: "1. Rotasi $180^\\circ$ pada titik awal $E(-3, -5)$:\n$$x_1 = -(-3) = 3$$\n$$y_1 = -(-5) = 5$$\nDiperoleh titik $E_1(3, 5)$.\n2. Pencerminan terhadap garis $y = -x$ pada $E_1(3, 5)$:\n$$x' = -y_1 = -5$$\n$$y' = -x_1 = -3$$\n3. Bayangan akhir titik adalah $E'(-5, -3)$.\n4. Jadi, pilihan yang tepat adalah D.",
      pitfalls: "Hanya menukar koordinat tanpa mengubah tanda negatif saat menerapkan refleksi terhadap garis $y = -x$."
    }
  }
];
