/**
 * Batch Task: TASK_mat-geo-trans-dilatasi_EASY
 * SubTopic: Transformasi Geometri: Dilatasi (mat-geo-trans-dilatasi)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-trans-dilatasi-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-dilatasi",
    category: "Dilatasi Titik terhadap Pusat O(0, 0)",
    difficulty: "mudah",
    statement: "Bayangan titik $A(-3, 5)$ oleh dilatasi dengan pusat titik asal $O(0, 0)$ dan faktor skala $k = 4$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-12, 20)$",
      "$(12, -20)$",
      "$(-12, -20)$",
      "$(1, 9)$",
      "$(-7, 9)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Dilatasi titik $P(x, y)$ terhadap titik pusat $O(0, 0)$ dengan faktor skala $k$, ditulis $[O, k]$, menghasilkan bayangan $P'(x', y')$ dengan rumus perkalian langsung: $x' = kx$ dan $y' = ky$.",
      steps: "1. Titik asal adalah $A(-3, 5)$, dengan $x = -3$ dan $y = 5$.\n2. Faktor skala dilatasi $k = 4$.\n3. Hitung koordinat titik bayangan:\n$$x' = 4 \\times (-3) = -12$$\n$$y' = 4 \\times 5 = 20$$\n4. Diperoleh bayangan $A'(-12, 20)$.\n5. Jadi, koordinat bayangan titik $A$ adalah $(-12, 20)$ (pilihan A).",
      pitfalls: "Melakukan penjumlahan alih-alih perkalian dengan faktor skala (misalnya menghitung $-3 + 4 = 1$)."
    }
  },
  {
    id: "mat-geo-trans-dilatasi-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-dilatasi",
    category: "Dilatasi Titik dengan Faktor Skala Negatif",
    difficulty: "mudah",
    statement: "Titik $B(6, -8)$ didilatasikan terhadap pusat titik asal $O(0, 0)$ dengan faktor skala $k = -\\frac{1}{2}$. Koordinat bayangan titik $B'$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(3, -4)$",
      "$(-3, 4)$",
      "$(-3, -4)$",
      "$(3, 4)$",
      "$(-12, 16)$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Faktor skala negatif pada dilatasi $[O, k]$ membalik arah posisi titik bayangan terhadap titik pusat selain mengubah perbandingannya: $x' = kx$ dan $y' = ky$.",
      steps: "1. Titik asal adalah $B(6, -8)$ dan faktor skala $k = -\\frac{1}{2}$.\n2. Kalikan masing-masing koordinat dengan $k$:\n$$x' = -\\frac{1}{2} \\times 6 = -3$$\n$$y' = -\\frac{1}{2} \\times (-8) = 4$$\n3. Titik bayangan adalah $B'(-3, 4)$.\n4. Jadi, jawabannya adalah $(-3, 4)$ (pilihan B).",
      pitfalls: "Lupa bahwa perkalian dua bilangan negatif menghasilkan nilai positif: $-\\frac{1}{2} \\times (-8) = +4$."
    }
  },
  {
    id: "mat-geo-trans-dilatasi-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-dilatasi",
    category: "Menentukan Faktor Skala Dilatasi",
    difficulty: "mudah",
    statement: "Titik $C(4, -6)$ didilatasikan dengan pusat $O(0, 0)$ menghasilkan bayangan $C'(10, -15)$. Faktor skala dilatasi $k$ tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{2}{5}$",
      "$-\\frac{5}{2}$",
      "$2$",
      "$\\frac{5}{2}$",
      "$3$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Faktor skala dilatasi $k$ dengan pusat $O(0, 0)$ dihitung dari perbandingan koordinat bayangan dengan koordinat asal: $k = \\frac{x'}{x} = \\frac{y'}{y}$.",
      steps: "1. Diberikan titik asal $(x, y) = (4, -6)$ dan bayangan $(x', y') = (10, -15)$.\n2. Hitung nilai $k$ dari perbandingan absis:\n$$k = \\frac{x'}{x} = \\frac{10}{4} = \\frac{5}{2}$$\n3. Cek konsistensi pada ordinat:\n$$k = \\frac{y'}{y} = \\frac{-15}{-6} = \\frac{5}{2}$$\n4. Jadi, faktor skala dilatasi $k$ adalah $\\frac{5}{2}$ (pilihan D).",
      pitfalls: "Membalik perbandingan menjadi $\\frac{x}{x'} = \\frac{4}{10} = \\frac{2}{5}$."
    }
  },
  {
    id: "mat-geo-trans-dilatasi-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-dilatasi",
    category: "Dilatasi Titik terhadap Pusat P(a, b)",
    difficulty: "mudah",
    statement: "Titik $D(5, 1)$ didilatasikan dengan pusat $P(2, 3)$ dan faktor skala $k = 3$. Koordinat bayangan titik $D$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(15, 3)$",
      "$(11, -3)$",
      "$(11, 3)$",
      "$(9, -3)$",
      "$(7, -1)$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Dilatasi suatu titik $(x, y)$ terhadap pusat $(a, b)$ dengan faktor skala $k$ memiliki rumus koordinat: $x' = a + k(x - a)$ dan $y' = b + k(y - b)$.",
      steps: "1. Identifikasi koordinat: titik asal $(x, y) = (5, 1)$, pusat $(a, b) = (2, 3)$, dan $k = 3$.\n2. Hitung absis bayangan:\n$$x' = 2 + 3(5 - 2) = 2 + 3(3) = 2 + 9 = 11$$\n3. Hitung ordinat bayangan:\n$$y' = 3 + 3(1 - 3) = 3 + 3(-2) = 3 - 6 = -3$$\n4. Diperoleh titik bayangan $D'(11, -3)$.\n5. Jadi, koordinat bayangan titik $D$ adalah $(11, -3)$ (pilihan B).",
      pitfalls: "Langsung mengalikan titik asal dengan faktor skala $(3 \\times 5, 3 \\times 1) = (15, 3)$ tanpa memperhitungkan titik pusat $P(2, 3)$."
    }
  },
  {
    id: "mat-geo-trans-dilatasi-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-dilatasi",
    category: "Dilatasi Garis Lurus terhadap Pusat O(0, 0)",
    difficulty: "mudah",
    statement: "Persamaan bayangan garis $g: 2x - 3y + 6 = 0$ oleh dilatasi dengan pusat $O(0, 0)$ dan faktor skala $k = 2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2x - 3y + 3 = 0$",
      "$4x - 6y + 6 = 0$",
      "$2x - 3y + 12 = 0$",
      "$x - 3y + 12 = 0$",
      "$2x - 3y + 24 = 0$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Dilatasi $[O, k]$ pada kurva $F(x, y) = 0$ dilakukan dengan mensubstitusi variabel lama $x = \\frac{x'}{k}$ dan $y = \\frac{y'}{k}$. Untuk garis $Ax + By + C = 0$, garis bayangannya sejajar dengan konstanta yang diskalakan: $Ax + By + kC = 0$.",
      steps: "1. Hubungan koordinat asal dan bayangan dengan $k = 2$:\n$$x = \\frac{x'}{2}$$\n$$y = \\frac{y'}{2}$$\n2. Substitusikan ke persamaan garis $2x - 3y + 6 = 0$:\n$$2\\left(\\frac{x'}{2}\\right) - 3\\left(\\frac{y'}{2}\\right) + 6 = 0$$\n$$x' - \\frac{3}{2}y' + 6 = 0$$\n3. Kalikan seluruh suku dengan $2$:\n$$2x' - 3y' + 12 = 0$$\n4. Diperoleh persamaan garis bayangan $2x - 3y + 12 = 0$ (pilihan C).",
      pitfalls: "Membagi konstanta $C$ dengan 2 menjadi $2x - 3y + 3 = 0$ bukannya mengalikan $C$ dengan $k$."
    }
  }
];
