/**
 * Batch Task: TASK_fun-geo-dasar-garis_EASY
 * SubTopic: Geometri Dasar: Persamaan Garis Lurus (fun-geo-dasar-garis)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-geo-dasar-garis-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-garis",
    category: "Persamaan Garis dari Gradien dan Titik Potong Sumbu-Y",
    difficulty: "mudah",
    statement: "Persamaan garis lurus yang memiliki gradien $m = 3$ dan memotong sumbu-$Y$ di titik $(0, 4)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$y = 3x - 4$",
      "$y = 3x + 4$",
      "$y = 4x + 3$",
      "$y = -3x + 4$",
      "$y = \\frac{1}{3}x + 4$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Bentuk persamaan eksplisit garis lurus dengan gradien $m$ dan titik potong sumbu-$Y$ di $(0, c)$ adalah $y = mx + c$.",
      steps: "1. Diketahui nilai gradien garis $m = 3$.\n2. Titik potong terhadap sumbu-$Y$ di $(0, 4)$ menunjukkan nilai konstanta $c = 4$.\n3. Substitusikan nilai $m$ dan $c$ ke dalam bentuk $y = mx + c$:\n$$y = 3x + 4$$\n4. Jadi, persamaan garis lurus tersebut adalah $y = 3x + 4$ (pilihan B).",
      pitfalls: "Tertukar antara nilai gradien $m$ dan konstanta titik potong sumbu $c$ sehingga memilih $y = 4x + 3$."
    }
  },
  {
    id: "fun-geo-dasar-garis-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-garis",
    category: "Mengubah Bentuk Implisit ke Eksplisit",
    difficulty: "mudah",
    statement: "Bentuk eksplisit $y = mx + c$ dari persamaan garis $2x - y + 5 = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$y = 2x - 5$",
      "$y = 2x + 5$",
      "$y = -2x + 5$",
      "$y = -2x - 5$",
      "$y = \\frac{1}{2}x + 5$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Bentuk implisit garis $Ax + By + C = 0$ diubah ke bentuk eksplisit dengan mengisolasi variabel $y$ pada salah satu ruas persamaan.",
      steps: "1. Tuliskan persamaan implisit yang diberikan:\n$$2x - y + 5 = 0$$\n2. Pindahkan suku $-y$ ke ruas kanan agar bertanda positif:\n$$2x + 5 = y$$\n3. Tuliskan dalam bentuk standar $y = mx + c$:\n$$y = 2x + 5$$\n4. Jadi, bentuk eksplisit persamaan garis tersebut adalah $y = 2x + 5$ (pilihan B).",
      pitfalls: "Kesalahan tanda saat memindahkan suku konstanta 5 sehingga menghasilkan $y = 2x - 5$."
    }
  },
  {
    id: "fun-geo-dasar-garis-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-garis",
    category: "Persamaan Garis Melalui Satu Titik Bergradien Tertentu",
    difficulty: "mudah",
    statement: "Persamaan garis lurus yang melalui titik $A(1, 3)$ dengan gradien $m = 2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$y = 2x + 1$",
      "$y = 2x - 1$",
      "$y = 2x + 5$",
      "$y = 2x - 5$",
      "$y = x + 2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Persamaan garis lurus yang melalui titik $(x_1, y_1)$ dengan gradien $m$ dirumuskan sebagai $y - y_1 = m(x - x_1)$.",
      steps: "1. Substitusikan $x_1 = 1$, $y_1 = 3$, dan $m = 2$ ke dalam rumus titik-gradien:\n$$y - 3 = 2(x - 1)$$\n2. Jabarkan perkalian pada ruas kanan:\n$$y - 3 = 2x - 2$$\n3. Tambahkan kedua ruas dengan 3:\n$$y = 2x - 2 + 3$$\n$$y = 2x + 1$$\n4. Jadi, persamaan garis lurus tersebut adalah $y = 2x + 1$ (pilihan A).",
      pitfalls: "Lupa mendistribusikan gradien 2 ke $-1$ sehingga menulis $y - 3 = 2x - 1$."
    }
  },
  {
    id: "fun-geo-dasar-garis-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-garis",
    category: "Menentukan Titik Potong dengan Sumbu Koordinat",
    difficulty: "mudah",
    statement: "Titik potong garis $3x + 4y = 12$ dengan sumbu-$X$ dan sumbu-$Y$ berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(4, 0)$ dan $(0, 3)$",
      "$(3, 0)$ dan $(0, 4)$",
      "$(4, 0)$ dan $(3, 0)$",
      "$(0, 4)$ dan $(3, 0)$",
      "$(0, 3)$ dan $(4, 0)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik potong sumbu-$X$ terjadi saat $y = 0$, dan titik potong sumbu-$Y$ terjadi saat $x = 0$.",
      steps: "1. Titik potong sumbu-$X$ ($y = 0$):\n$$3x + 4(0) = 12 \\implies 3x = 12 \\implies x = 4$$\nKoordinat titik potong sumbu-$X$ adalah $(4, 0)$.\n2. Titik potong sumbu-$Y$ ($x = 0$):\n$$3(0) + 4y = 12 \\implies 4y = 12 \\implies y = 3$$\nKoordinat titik potong sumbu-$Y$ adalah $(0, 3)$.\n3. Urutan berturut-turut adalah $(4, 0)$ dan $(0, 3)$.\n4. Jadi, jawabannya adalah pilihan A.",
      pitfalls: "Tertukar antara koordinat titik potong sumbu-$X$ dan sumbu-$Y$ sehingga memilih $(3, 0)$ dan $(0, 4)$."
    }
  },
  {
    id: "fun-geo-dasar-garis-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-garis",
    category: "Persamaan Garis Melalui Titik Asal dan Titik Sembarang",
    difficulty: "mudah",
    statement: "Persamaan garis lurus yang melalui titik pusat $O(0, 0)$ dan titik $B(3, 6)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$y = \\frac{1}{2}x$",
      "$y = 2x$",
      "$y = 3x$",
      "$y = 6x$",
      "$y = 2x + 3$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Garis yang melalui titik asal $(0, 0)$ memiliki persamaan bentuk $y = mx$, di mana $m = \\frac{y}{x}$.",
      steps: "1. Hitung gradien garis dari titik $(0, 0)$ ke titik $(3, 6)$:\n$$m = \\frac{6 - 0}{3 - 0} = \\frac{6}{3} = 2$$\n2. Karena garis melalui titik asal $(0, 0)$, maka konstanta $c = 0$.\n3. Bentuk persamaan garisnya adalah:\n$$y = 2x$$\n4. Jadi, persamaan garis lurus tersebut adalah $y = 2x$ (pilihan B).",
      pitfalls: "Terbalik dalam pembagian gradien $\\frac{\\Delta x}{\\Delta y} = \\frac{3}{6} = \\frac{1}{2}$ sehingga memilih $y = \\frac{1}{2}x$."
    }
  }
];
