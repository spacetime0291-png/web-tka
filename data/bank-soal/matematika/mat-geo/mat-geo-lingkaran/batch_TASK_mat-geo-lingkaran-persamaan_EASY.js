/**
 * Batch Task: TASK_mat-geo-lingkaran-persamaan_EASY
 * SubTopic: Persamaan Lingkaran (mat-geo-lingkaran-persamaan)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-lingkaran-persamaan-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-persamaan",
    category: "Persamaan Lingkaran Berpusat di Titik Asal",
    difficulty: "mudah",
    statement: "Persamaan lingkaran yang berpusat di titik asal $O(0, 0)$ dan memiliki jari-jari $r = 5$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x^2 + y^2 = 25$",
      "$x^2 + y^2 = 5$",
      "$x^2 + y^2 = 10$",
      "$(x - 5)^2 + (y - 5)^2 = 25$",
      "$x^2 + y^2 = 50$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Bentuk baku persamaan lingkaran yang berpusat di titik asal $O(0, 0)$ dengan jari-jari $r$ adalah $x^2 + y^2 = r^2$.",
      steps: "1. Identifikasi titik pusat: $(a, b) = (0, 0)$.\n2. Identifikasi jari-jari: $r = 5$.\n3. Kuadratkan nilai jari-jari:\n$$r^2 = 5^2 = 25$$\n4. Masukkan ke rumus persamaan lingkaran berpusat di $(0, 0)$:\n$$x^2 + y^2 = 25$$\n5. Jadi, persamaan lingkarannya adalah $x^2 + y^2 = 25$ (pilihan A).",
      pitfalls: "Lupa menguadratkan jari-jari pada ruas kanan persamaan sehingga memilih $x^2 + y^2 = 5$."
    }
  },
  {
    id: "mat-geo-lingkaran-persamaan-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-persamaan",
    category: "Persamaan Lingkaran Bentuk Baku Pusat (a, b)",
    difficulty: "mudah",
    statement: "Persamaan lingkaran yang berpusat di titik $(3, -2)$ dan memiliki panjang jari-jari $r = 4$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(x - 3)^2 + (y + 2)^2 = 16$",
      "$(x + 3)^2 + (y - 2)^2 = 16$",
      "$(x - 3)^2 + (y - 2)^2 = 16$",
      "$(x - 3)^2 + (y + 2)^2 = 4$",
      "$(x + 3)^2 + (y + 2)^2 = 8$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Persamaan lingkaran dengan pusat $(a, b)$ dan jari-jari $r$ dirumuskan dalam bentuk baku $(x - a)^2 + (y - b)^2 = r^2$.",
      steps: "1. Identifikasi koordinat pusat: $a = 3$ dan $b = -2$.\n2. Masukkan ke dalam bentuk kuadrat sempurna:\n$$(x - 3)^2 + (y - (-2))^2 = r^2$$\n$$(x - 3)^2 + (y + 2)^2 = r^2$$\n3. Kuadratkan nilai jari-jari $r = 4$:\n$$r^2 = 4^2 = 16$$\n4. Susun persamaan lengkapnya:\n$$(x - 3)^2 + (y + 2)^2 = 16$$\n5. Jadi, persamaan lingkarannya adalah $(x - 3)^2 + (y + 2)^2 = 16$ (pilihan A).",
      pitfalls: "Kekeliruan tanda pada suku ordinat $(y - (-2))$ yang sering salah ditulis menjadi $(y - 2)$."
    }
  },
  {
    id: "mat-geo-lingkaran-persamaan-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-persamaan",
    category: "Pusat dan Jari-Jari Bentuk Umum Lingkaran",
    difficulty: "mudah",
    statement: "Titik pusat dan panjang jari-jari dari lingkaran dengan persamaan umum $x^2 + y^2 - 6x + 8y - 11 = 0$ berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Pusat $(3, -4)$ dan jari-jari $6$",
      "Pusat $(-3, 4)$ dan jari-jari $6$",
      "Pusat $(3, -4)$ dan jari-jari $\\sqrt{11}$",
      "Pusat $(6, -8)$ dan jari-jari $6$",
      "Pusat $(3, -4)$ dan jari-jari $36$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Bentuk umum lingkaran $x^2 + y^2 + Ax + By + C = 0$ memiliki pusat pada titik $\\left(-\\frac{A}{2}, -\\frac{B}{2}\\right)$ dan jari-jari $r = \\sqrt{\\left(-\\frac{A}{2}\\right)^2 + \\left(-\\frac{B}{2}\\right)^2 - C}$.",
      steps: "1. Identifikasi koefisien persamaan: $A = -6$, $B = 8$, dan $C = -11$.\n2. Tentukan koordinat titik pusat:\n$$\\text{Pusat } (a, b) = \\left(-\\frac{-6}{2}, -\\frac{8}{2}\\right) = (3, -4)$$\n3. Hitung panjang jari-jari $r$:\n$$r = \\sqrt{3^2 + (-4)^2 - (-11)}$$\n$$r = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$$\n4. Jadi, pusat lingkaran berada pada titik $(3, -4)$ dan panjang jari-jarinya adalah 6 (pilihan A).",
      pitfalls: "Lupa membagi dua koefisien linier saat menentukan pusat atau keliru tanda minus pada $-C$, yaitu $-(-11) = +11$."
    }
  },
  {
    id: "mat-geo-lingkaran-persamaan-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-persamaan",
    category: "Persamaan Lingkaran Pusat Asal Melalui Titik",
    difficulty: "mudah",
    statement: "Persamaan lingkaran yang berpusat di titik asal $O(0, 0)$ dan melalui titik koordinat $P(3, -4)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x^2 + y^2 = 25$",
      "$x^2 + y^2 = 5$",
      "$x^2 + y^2 = 7$",
      "$(x - 3)^2 + (y + 4)^2 = 25$",
      "$x^2 + y^2 = 49$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jari-jari lingkaran berpusat di $O(0, 0)$ yang melalui titik $(x_1, y_1)$ sama dengan jarak titik tersebut ke titik asal, dengan $r^2 = x_1^2 + y_1^2$.",
      steps: "1. Substitusikan titik $P(3, -4)$ ke dalam bentuk $r^2 = x^2 + y^2$:\n$$r^2 = 3^2 + (-4)^2$$\n$$r^2 = 9 + 16 = 25$$\n2. Masukkan nilai $r^2 = 25$ ke bentuk persamaan lingkaran pusat $(0, 0)$:\n$$x^2 + y^2 = 25$$\n3. Jadi, persamaan lingkarannya adalah $x^2 + y^2 = 25$ (pilihan A).",
      pitfalls: "Menuliskan persamaan dengan pusat di titik $P$ alih-alih di titik asal $O(0,0)$."
    }
  },
  {
    id: "mat-geo-lingkaran-persamaan-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-persamaan",
    category: "Lingkaran Menyinggung Sumbu Koordinat",
    difficulty: "mudah",
    statement: "Persamaan lingkaran yang berpusat di titik $(2, 5)$ dan menyinggung sumbu-$X$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(x - 2)^2 + (y - 5)^2 = 25$",
      "$(x - 2)^2 + (y - 5)^2 = 4$",
      "$(x + 2)^2 + (y + 5)^2 = 25$",
      "$(x - 2)^2 + (y - 5)^2 = 5$",
      "$(x - 2)^2 + (y - 5)^2 = 29$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Sebuah lingkaran dengan pusat $(a, b)$ yang menyinggung sumbu-$X$ memiliki panjang jari-jari yang sama dengan nilai mutlak dari ordinat pusatnya: $r = |b|$.",
      steps: "1. Pusat lingkaran adalah $(a, b) = (2, 5)$.\n2. Karena lingkaran menyinggung sumbu-$X$, maka jarak tegak lurus ke sumbu-$X$ adalah nilai ordinat pusat: $r = |5| = 5$.\n3. Kuadratkan nilai jari-jari:\n$$r^2 = 5^2 = 25$$\n4. Susun persamaan lingkaran dalam bentuk baku:\n$$(x - 2)^2 + (y - 5)^2 = 25$$\n5. Jadi, persamaan lingkarannya adalah $(x - 2)^2 + (y - 5)^2 = 25$ (pilihan A).",
      pitfalls: "Tertukar mengambil nilai absis sebagai jari-jari ($r = |a| = 2$ yang seharusnya untuk kondisi menyinggung sumbu-$Y$)."
    }
  }
];
