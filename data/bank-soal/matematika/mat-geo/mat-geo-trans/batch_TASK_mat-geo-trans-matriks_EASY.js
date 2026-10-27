/**
 * Batch Task: TASK_mat-geo-trans-matriks_EASY
 * SubTopic: Transformasi Geometri: Matriks Transformasi (mat-geo-trans-matriks)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-trans-matriks-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-matriks",
    category: "Bayangan Titik oleh Matriks Transformasi 2x2",
    difficulty: "mudah",
    statement: "Bayangan titik koordinat $A(3, -2)$ oleh transformasi yang bersesuaian dengan matriks $M = \\begin{pmatrix} 2 & 1 \\\\ -1 & 3 \\end{pmatrix}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(4, -9)$",
      "$(4, 9)$",
      "$(8, -9)$",
      "$(-4, -9)$",
      "$(7, -3)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Transformasi linear titik $P(x, y)$ oleh matriks $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ dirumuskan dengan perkalian matriks kolom: $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$, sehingga $x' = ax + by$ dan $y' = cx + dy$.",
      steps: "1. Tuliskan titik asal ke bentuk matriks kolom: $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$.\n2. Lakukan perkalian matriks:\n$$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 2 & 1 \\\\ -1 & 3 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$$\n$$x' = 2(3) + 1(-2) = 6 - 2 = 4$$\n$$y' = -1(3) + 3(-2) = -3 - 6 = -9$$\n3. Koordinat bayangannya adalah $A'(4, -9)$.\n4. Jadi, pilihan yang benar adalah A.",
      pitfalls: "Salah aturan perkalian baris kali kolom atau keliru pada tanda negatif $-1(3) + 3(-2)$."
    }
  },
  {
    id: "mat-geo-trans-matriks-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-matriks",
    category: "Matriks Pencerminan terhadap Sumbu-Y",
    difficulty: "mudah",
    statement: "Matriks transformasi $2 \\times 2$ yang bersesuaian dengan pencerminan terhadap sumbu-$Y$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pencerminan terhadap sumbu-$Y$ memetakan koordinat menurut aturan $x' = -x = -1(x) + 0(y)$ dan $y' = y = 0(x) + 1(y)$. Dengan demikian, matriks representasinya adalah $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.",
      steps: "1. Analisis pemetaan titik $(x, y)$ saat dicerminkan terhadap sumbu-$Y$:\n$$x' = -x$$\n$$y' = y$$\n2. Tuliskan dalam bentuk sistem persamaan linear:\n$$x' = -1 \\cdot x + 0 \\cdot y$$\n$$y' = 0 \\cdot x + 1 \\cdot y$$\n3. Susun koefisiennya ke dalam bentuk matriks:\n$$M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$$\n4. Jadi, matriks yang bersesuaian adalah $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ (pilihan B).",
      pitfalls: "Tertukar dengan matriks pencerminan terhadap sumbu-$X$, yaitu $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$."
    }
  },
  {
    id: "mat-geo-trans-matriks-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-matriks",
    category: "Menentukan Titik Asal dari Bayangan Matriks",
    difficulty: "mudah",
    statement: "Titik $B(x, y)$ ditransformasikan oleh matriks diagonal $M = \\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$ menghasilkan bayangan $B'(12, -8)$. Koordinat titik $B$ mula-mula adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(36, -16)$",
      "$(4, -4)$",
      "$(4, 4)$",
      "$(-4, 4)$",
      "$(9, -10)$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Dari hubungan $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} a & 0 \\\\ 0 & d \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$, diperoleh $x' = ax \\implies x = \\frac{x'}{a}$ dan $y' = dy \\implies y = \\frac{y'}{d}$.",
      steps: "1. Tulis hubungan hasil kali matriks:\n$$x' = 3x = 12 \\implies x = \\frac{12}{3} = 4$$\n$$y' = 2y = -8 \\implies y = \\frac{-8}{2} = -4$$\n2. Diperoleh koordinat titik asal $B(4, -4)$.\n3. Jadi, jawabannya adalah $(4, -4)$ (pilihan B).",
      pitfalls: "Mengalikan kembali titik bayangan dengan matriks $M$ alih-alih mengalikannya dengan matriks invers $M^{-1}$."
    }
  },
  {
    id: "mat-geo-trans-matriks-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-matriks",
    category: "Transformasi Titik oleh Matriks Geseran (Shear)",
    difficulty: "mudah",
    statement: "Bayangan titik $C(2, 5)$ oleh transformasi matriks geseran $M = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(17, 5)$",
      "$(7, 5)$",
      "$(15, 5)$",
      "$(17, 2)$",
      "$(2, 17)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Matriks shear horizontal $M = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$ menggeser absis sebanding dengan nilai ordinatnya: $x' = x + ky$ sementara ordinat tetap: $y' = y$.",
      steps: "1. Titik asal adalah $C(2, 5)$, dengan $x = 2$ dan $y = 5$.\n2. Lakukan perkalian matriks:\n$$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}$$\n$$x' = 1(2) + 3(5) = 2 + 15 = 17$$\n$$y' = 0(2) + 1(5) = 5$$\n3. Titik bayangannya adalah $C'(17, 5)$.\n4. Jadi, pilihan yang benar adalah A.",
      pitfalls: "Mengabaikan penambahan $3(5)$ pada absis atau salah menempatkan koordinat bayangan."
    }
  },
  {
    id: "mat-geo-trans-matriks-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-matriks",
    category: "Matriks Rotasi Sudut Istimewa 90 Derajat",
    difficulty: "mudah",
    statement: "Matriks yang bersesuaian dengan transformasi rotasi sebesar $90^\\circ$ berlawanan arah putaran jarum jam dengan pusat $O(0, 0)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Bentuk umum matriks rotasi berpusat di $O(0, 0)$ dengan sudut $\\theta$ adalah $R_\\theta = \\begin{pmatrix} \\cos \\theta & -\\sin \\theta \\\\ \\sin \\theta & \\cos \\theta \\end{pmatrix}$.",
      steps: "1. Masukkan sudut $\\theta = 90^\\circ$:\n$$\\cos 90^\\circ = 0$$\n$$\\sin 90^\\circ = 1$$\n2. Substitusikan nilai-nilai trigonometri tersebut ke dalam bentuk umum:\n$$R_{90^\\circ} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$$\n3. Jadi, matriks yang bersesuaian adalah $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ (pilihan C).",
      pitfalls: "Tertukar dengan rotasi searah jarum jam ($-90^\\circ$ atau $270^\\circ$) yang memiliki matriks $\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$."
    }
  }
];
