/**
 * Batch Task: TASK_mat-geo-lingkaran-singgung_EASY
 * SubTopic: Persamaan Garis Singgung Lingkaran (mat-geo-lingkaran-singgung)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-lingkaran-singgung-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-singgung",
    category: "Garis Singgung di Titik pada Lingkaran Pusat Asal",
    difficulty: "mudah",
    statement: "Persamaan garis singgung pada lingkaran $x^2 + y^2 = 25$ di titik $(3, 4)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3x + 4y = 25$",
      "$3x - 4y = 25$",
      "$4x + 3y = 25$",
      "$3x + 4y = 5$",
      "$4x - 3y = 25$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Persamaan garis singgung pada lingkaran $x^2 + y^2 = r^2$ di titik singgung $(x_1, y_1)$ yang terletak pada lingkaran ditentukan menggunakan rumus bagi adil: $x_1 x + y_1 y = r^2$.",
      steps: "1. Pastikan titik $(3, 4)$ terletak pada lingkaran: $3^2 + 4^2 = 9 + 16 = 25$ (terbukti terletak pada lingkaran).\n2. Terapkan rumus bagi adil dengan $x_1 = 3$, $y_1 = 4$, dan $r^2 = 25$:\n$$x_1 x + y_1 y = r^2$$\n$$3x + 4y = 25$$\n3. Jadi, persamaan garis singgungnya adalah $3x + 4y = 25$ (pilihan A).",
      pitfalls: "Tertukar antara koefisien $x$ dan $y$ menjadi $4x + 3y = 25$ atau keliru menggunakan jari-jari $r=5$ alih-alih $r^2=25$."
    }
  },
  {
    id: "mat-geo-lingkaran-singgung-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-singgung",
    category: "Garis Singgung di Titik pada Lingkaran Pusat (a, b)",
    difficulty: "mudah",
    statement: "Persamaan garis singgung pada lingkaran $(x - 1)^2 + (y + 3)^2 = 25$ di titik singgung $(4, 1)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3x + 4y - 16 = 0$",
      "$3x + 4y + 16 = 0$",
      "$4x + y - 17 = 0$",
      "$3x - 4y - 8 = 0$",
      "$3x + 4y - 25 = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Garis singgung lingkaran $(x - a)^2 + (y - b)^2 = r^2$ di titik $(x_1, y_1)$ dirumuskan dengan metode bagi adil: $(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$.",
      steps: "1. Identifikasi parameter pusat $(a, b) = (1, -3)$, jari-jari $r^2 = 25$, dan titik singgung $(x_1, y_1) = (4, 1)$.\n2. Masukkan ke rumus bagi adil:\n$$(4 - 1)(x - 1) + (1 - (-3))(y + 3) = 25$$\n$$3(x - 1) + 4(y + 3) = 25$$\n3. Uraikan perkalian aljabar:\n$$3x - 3 + 4y + 12 = 25$$\n$$3x + 4y + 9 = 25$$\n4. Pindahkan konstanta ke ruas kiri:\n$$3x + 4y - 16 = 0$$\n5. Jadi, persamaan garis singgungnya adalah $3x + 4y - 16 = 0$ (pilihan A).",
      pitfalls: "Kesalahan tanda pada substitusi ordinat $(1 - (-3))$ yang keliru dihitung sebagai $1 - 3 = -2$."
    }
  },
  {
    id: "mat-geo-lingkaran-singgung-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-singgung",
    category: "Garis Singgung dengan Gradien Tertentu",
    difficulty: "mudah",
    statement: "Salah satu persamaan garis singgung pada lingkaran $x^2 + y^2 = 9$ yang memiliki gradien garis $m = 2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$y = 2x + 3\\sqrt{5}$",
      "$y = 2x + 9$",
      "$y = 2x + 3\\sqrt{3}$",
      "$y = 2x + 6$",
      "$y = 2x + 15$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Persamaan garis singgung lingkaran $x^2 + y^2 = r^2$ dengan gradien $m$ dirumuskan sebagai $y = mx \\pm r\\sqrt{1 + m^2}$.",
      steps: "1. Identifikasi jari-jari $r = \\sqrt{9} = 3$ dan gradien $m = 2$.\n2. Masukkan ke rumus garis singgung bergradien:\n$$y = 2x \\pm 3\\sqrt{1 + 2^2}$$\n3. Hitung nilai di dalam akar:\n$$y = 2x \\pm 3\\sqrt{1 + 4} = 2x \\pm 3\\sqrt{5}$$\n4. Dua garis singgung yang terbentuk adalah $y = 2x + 3\\sqrt{5}$ dan $y = 2x - 3\\sqrt{5}$.\n5. Salah satunya yang terdapat pada opsi adalah $y = 2x + 3\\sqrt{5}$ (pilihan A).",
      pitfalls: "Lupa mengalikan akar $\\sqrt{1+m^2}$ dengan jari-jari $r = 3$, atau keliru menghitung $1 + 2^2 = 1 + 4 = 5$."
    }
  },
  {
    id: "mat-geo-lingkaran-singgung-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-singgung",
    category: "Garis Singgung Bentuk Umum Lingkaran",
    difficulty: "mudah",
    statement: "Persamaan garis singgung pada lingkaran $x^2 + y^2 - 4x + 6y - 12 = 0$ di titik $(5, 1)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3x + 4y - 19 = 0$",
      "$3x + 4y + 19 = 0$",
      "$5x + y - 12 = 0$",
      "$3x - 4y - 11 = 0$",
      "$4x + 3y - 23 = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Garis singgung lingkaran bentuk umum $x^2 + y^2 + Ax + By + C = 0$ di titik $(x_1, y_1)$ dirumuskan dengan rumus bagi adil: $x_1 x + y_1 y + \\frac{A}{2}(x + x_1) + \\frac{B}{2}(y + y_1) + C = 0$.",
      steps: "1. Identifikasi koefisien: $A = -4$, $B = 6$, $C = -12$, dan titik $(x_1, y_1) = (5, 1)$.\n2. Terapkan rumus bagi adil:\n$$5x + 1y + \\frac{-4}{2}(x + 5) + \\frac{6}{2}(y + 1) - 12 = 0$$\n$$5x + y - 2(x + 5) + 3(y + 1) - 12 = 0$$\n3. Jabarkan perkalian aljabar:\n$$5x + y - 2x - 10 + 3y + 3 - 12 = 0$$\n4. Satukan suku-suku sejenis:\n$$(5x - 2x) + (y + 3y) + (-10 + 3 - 12) = 0$$\n$$3x + 4y - 19 = 0$$\n5. Jadi, persamaan garis singgungnya adalah $3x + 4y - 19 = 0$ (pilihan A).",
      pitfalls: "Lupa membagi dua koefisien $A$ dan $B$ saat menerapkan rumus bagi adil bentuk umum."
    }
  },
  {
    id: "mat-geo-lingkaran-singgung-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-singgung",
    category: "Garis Singgung Sejajar Sumbu Koordinat",
    difficulty: "mudah",
    statement: "Persamaan garis singgung pada lingkaran $x^2 + y^2 = 16$ yang sejajar dengan sumbu-$X$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$y = 4$ atau $y = -4$",
      "$x = 4$ atau $x = -4$",
      "$y = 16$ atau $y = -16$",
      "$y = 2$ atau $y = -2$",
      "$x = 16$ atau $x = -16$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Garis yang sejajar dengan sumbu-$X$ memiliki gradien kemiringan $m = 0$. Garis singgung horizontal pada lingkaran berpusat di asal $(0, 0)$ memiliki persamaan garis mendatar $y = \\pm r$.",
      steps: "1. Identifikasi jari-jari lingkaran: $r = \\sqrt{16} = 4$.\n2. Karena garis sejajar sumbu-$X$, maka nilai kemiringannya $m = 0$.\n3. Masukkan ke rumus garis singgung bergradien:\n$$y = 0 \\cdot x \\pm r\\sqrt{1 + 0^2} \\implies y = \\pm r$$\n4. Masukkan nilai $r = 4$:\n$$y = 4 \\text{ atau } y = -4$$\n5. Jadi, garis singgung yang sejajar sumbu-$X$ adalah $y = 4$ atau $y = -4$ (pilihan A).",
      pitfalls: "Tertukar dengan garis yang sejajar sumbu-$Y$ (garis vertikal $x = \\pm 4$)."
    }
  }
];
