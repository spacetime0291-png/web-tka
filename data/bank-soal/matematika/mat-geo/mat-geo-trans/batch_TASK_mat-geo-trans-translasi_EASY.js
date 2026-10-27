/**
 * Batch Task: TASK_mat-geo-trans-translasi_EASY
 * SubTopic: Transformasi Geometri: Translasi (mat-geo-trans-translasi)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-trans-translasi-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-translasi",
    category: "Bayangan Titik oleh Translasi Tunggal",
    difficulty: "mudah",
    statement: "Bayangan titik koordinat $A(3, -5)$ oleh pergeseran (translasi) $T = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(1, -1)$",
      "$(5, -1)$",
      "$(1, -9)$",
      "$(-6, -20)$",
      "$(5, -9)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Translasi titik $P(x, y)$ oleh matriks translasi $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$ menghasilkan titik bayangan $P'(x', y')$ dengan rumus penjumlahan koordinat: $x' = x + a$ dan $y' = y + b$.",
      steps: "1. Identifikasi koordinat titik asal: $x = 3$ dan $y = -5$.\n2. Identifikasi vektor translasi: $a = -2$ dan $b = 4$.\n3. Hitung absis dan ordinat bayangan:\n$$x' = 3 + (-2) = 1$$\n$$y' = -5 + 4 = -1$$\n4. Diperoleh titik bayangan $A'(1, -1)$.\n5. Jadi, koordinat bayangannya adalah $(1, -1)$ (pilihan A).",
      pitfalls: "Melakukan operasi perkalian koordinat alih-alih penjumlahan, atau salah mengoperasikan penjumlahan tanda negatif $-5 + 4$."
    }
  },
  {
    id: "mat-geo-trans-translasi-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-translasi",
    category: "Menentukan Vektor Translasi",
    difficulty: "mudah",
    statement: "Titik $B(4, 1)$ ditranslasikan oleh $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$ menghasilkan bayangan $B'(1, 7)$. Komponen vektor translasi $T$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} -3 \\\\ 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 \\\\ -6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 \\\\ 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} -3 \\\\ -6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Vektor translasi $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$ dihitung dari selisih koordinat titik bayangan dikurangi titik asal: $a = x' - x$ dan $b = y' - y$.",
      steps: "1. Tentukan komponen horizontal pergeseran $a$:\n$$a = x' - x = 1 - 4 = -3$$\n2. Tentukan komponen vertikal pergeseran $b$:\n$$b = y' - y = 7 - 1 = 6$$\n3. Susun komponen ke dalam vektor kolom:\n$$T = \\begin{pmatrix} -3 \\\\ 6 \\end{pmatrix}$$\n4. Jadi, vektor translasinya adalah $\\begin{pmatrix} -3 \\\\ 6 \\end{pmatrix}$ (pilihan A).",
      pitfalls: "Tertukar mengurangkan titik asal dengan titik bayangan ($x - x'$) sehingga menghasilkan tanda yang berlawanan."
    }
  },
  {
    id: "mat-geo-trans-translasi-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-translasi",
    category: "Komposisi Dua Translasi Berurutan",
    difficulty: "mudah",
    statement: "Titik $C(-2, 3)$ ditranslasikan berturut-turut oleh translasi $T_1 = \\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}$ kemudian dilanjutkan oleh $T_2 = \\begin{pmatrix} -1 \\\\ 5 \\end{pmatrix}$. Koordinat bayangan akhir titik $C$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(1, 7)$",
      "$(3, 7)$",
      "$(2, 2)$",
      "$(1, 4)$",
      "$(3, 4)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Komposisi translasi berturut-turut bersifat aditif: $T_{\\text{total}} = T_1 + T_2 = \\begin{pmatrix} a_1 + a_2 \\\\ b_1 + b_2 \\end{pmatrix}$.",
      steps: "1. Jumlahkan kedua vektor translasi:\n$$T_{\\text{total}} = \\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix} + \\begin{pmatrix} -1 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 4 + (-1) \\\\ -1 + 5 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$$\n2. Terapkan translasi total ke titik asal $C(-2, 3)$:\n$$x'' = -2 + 3 = 1$$\n$$y'' = 3 + 4 = 7$$\n3. Jadi, koordinat bayangan akhirnya adalah $(1, 7)$ (pilihan A).",
      pitfalls: "Salah menjumlahkan bilangan negatif $-2 + 3$ yang terkadang keliru dihitung menjadi $-1$ atau $5$."
    }
  },
  {
    id: "mat-geo-trans-translasi-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-translasi",
    category: "Bayangan Garis Linier oleh Translasi",
    difficulty: "mudah",
    statement: "Persamaan bayangan garis lurus $2x - 3y + 6 = 0$ oleh translasi $T = \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2x - 3y - 2 = 0$",
      "$2x - 3y + 2 = 0$",
      "$2x - 3y + 14 = 0$",
      "$2x - 3y - 14 = 0$",
      "$3x - 2y - 2 = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Untuk mentranslasikan persamaan garis $f(x, y) = 0$ oleh $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$, gantikan setiap variabel $x$ dengan $(x - a)$ dan setiap variabel $y$ dengan $(y - b)$.",
      steps: "1. Hubungan titik awal dan bayangan: $x' = x + 1 \\implies x = x' - 1$ dan $y' = y - 2 \\implies y = y' + 2$.\n2. Substitusikan ke persamaan garis semula:\n$$2(x - 1) - 3(y + 2) + 6 = 0$$\n3. Jabarkan perkalian aljabar:\n$$2x - 2 - 3y - 6 + 6 = 0$$\n$$2x - 3y - 2 = 0$$\n4. Jadi, persamaan bayangan garisnya adalah $2x - 3y - 2 = 0$ (pilihan A).",
      pitfalls: "Langsung mengganti $x$ dengan $(x + 1)$ dan $y$ dengan $(y - 2)$ tanpa membalik tanda transformasi variabel."
    }
  },
  {
    id: "mat-geo-trans-translasi-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-translasi",
    category: "Menentukan Titik Asal dari Bayangan Translasi",
    difficulty: "mudah",
    statement: "Diketahui vektor translasi $T = \\begin{pmatrix} 5 \\\\ -3 \\end{pmatrix}$. Jika titik $P'$ dengan koordinat $(2, 4)$ merupakan bayangan dari titik $P$ oleh translasi $T$, maka koordinat titik asal $P$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-3, 7)$",
      "$(7, 1)$",
      "$(3, -7)$",
      "$(-3, 1)$",
      "$(7, 7)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jika bayangan $P'(x', y')$ dan vektor translasi $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$ diketahui, maka koordinat titik asal $P(x, y)$ diperoleh dengan operasi pengurangan: $x = x' - a$ dan $y = y' - b$.",
      steps: "1. Hitung absis titik asal $x$:\n$$x = x' - a = 2 - 5 = -3$$\n2. Hitung ordinat titik asal $y$:\n$$y = y' - b = 4 - (-3) = 4 + 3 = 7$$\n3. Gabungkan koordinat titik asal $P$:\n$$P(-3, 7)$$\n4. Jadi, koordinat titik asal $P$ adalah $(-3, 7)$ (pilihan A).",
      pitfalls: "Menjumlahkan titik bayangan dengan translasi $(2 + 5, 4 - 3) = (7, 1)$, yang keliru mencari bayangan dari bayangan."
    }
  }
];
