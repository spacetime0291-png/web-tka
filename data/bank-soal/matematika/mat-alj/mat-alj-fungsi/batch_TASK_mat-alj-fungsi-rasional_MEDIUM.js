/**
 * Batch Task: TASK_mat-alj-fungsi-rasional_MEDIUM
 * SubTopic: Fungsi Rasional (mat-alj-fungsi-rasional)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-fungsi-rasional-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-rasional",
    category: "Asimtot Miring Fungsi Rasional",
    difficulty: "sedang",
    statement: "Persamaan garis asimtot miring (*oblique asymptote*) dari kurva grafik fungsi rasional $f(x) = \\frac{2x^2 + 3x - 1}{x - 1}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$y = 2x + 5$",
      "$y = 2x + 3$",
      "$y = 2x - 1$",
      "$y = x + 5$",
      "$y = 2x - 5$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Asimtot miring terjadi pada fungsi rasional ketika derajat pembilang tepat satu tingkat lebih tinggi daripada derajat penyebut. Persamaan asimtot miring diperoleh dari hasil bagi polinomial (tanpa sisa).",
      steps: "1. Lakukan pembagian bersusun panjang pada $\\frac{2x^2 + 3x - 1}{x - 1}$:\n- Bagi $2x^2$ dengan $x$ menghasilkan $2x$\n- Kalikan $2x(x - 1) = 2x^2 - 2x$\n- Kurangkan: $(2x^2 + 3x) - (2x^2 - 2x) = 5x$\n- Bagi $5x$ dengan $x$ menghasilkan $+5$\n- Kalikan $5(x - 1) = 5x - 5$\n- Kurangkan: $(5x - 1) - (5x - 5) = 4$ (sisa)<br>2. Tuliskan fungsi dalam bentuk hasil bagi dan sisa:\n$$f(x) = (2x + 5) + \\frac{4}{x - 1}$$\n3. Saat $x \\to \\pm\\infty$, nilai pecahan $\\frac{4}{x - 1} \\to 0$, sehingga kurva mendekati garis lurus $y = 2x + 5$.<br>4. Jadi persamaan asimtot miringnya adalah $y = 2x + 5$ (pilihan A).",
      pitfalls: "Salah tanda pada saat mengurangkan $3x - (-2x) = 5x$ menjadi $x$."
    }
  },
  {
    id: "mat-alj-fungsi-rasional-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-rasional",
    category: "Titik Lubang (Diskontinuitas Terhapuskan)",
    difficulty: "sedang",
    statement: "Grafik fungsi rasional $f(x) = \\frac{x^2 - 4}{x^2 - x - 2}$ memiliki satu garis asimtot tegak dan sebuah lubang (*hole*). Koordinat titik lubang pada grafik tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\left(2, \\frac{4}{3}\\right)$",
      "$(2, 0)$",
      "$(-1, 0)$",
      "$\\left(-2, \\frac{4}{3}\\right)$",
      "$(2, 4)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik lubang (*hole*) terjadi ketika pembilang dan penyebut memiliki faktor persekutuan yang bernilai nol pada absis yang sama. Ordinat lubang dicari dengan mensubstitusikan absis tersebut ke bentuk fungsi yang telah disederhanakan.",
      steps: "1. Faktorkan pembilang dan penyebut:\n$$f(x) = \\frac{(x - 2)(x + 2)}{(x - 2)(x + 1)}$$\n2. Faktor persekutuan adalah $(x - 2)$, sehingga lubang berada pada $x = 2$.<br>3. Sederhanakan fungsi untuk $x \\neq 2$:\n$$g(x) = \\frac{x + 2}{x + 1}$$\n4. Evaluasi nilai limit / ordinat lubang saat $x = 2$:\n$$y = g(2) = \\frac{2 + 2}{2 + 1} = \\frac{4}{3}$$\n5. Jadi koordinat lubang adalah $\\left(2, \\frac{4}{3}\\right)$ (pilihan A).",
      pitfalls: "Mengira $x = 2$ sebagai asimtot tegak padahal faktornya saling membatalkan."
    }
  },
  {
    id: "mat-alj-fungsi-rasional-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-rasional",
    category: "Titik Potong Kurva dengan Asimtot Datar",
    difficulty: "sedang",
    statement: "Kurva grafik fungsi rasional $f(x) = \\frac{2x^2 - 3x + 1}{x^2 + 4}$ berpotongan dengan garis asimtot datarnya pada koordinat titik ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\left(-\\frac{7}{3}, 2\\right)$",
      "$\\left(\\frac{7}{3}, 2\\right)$",
      "$(-2, 2)$",
      "$\\left(-\\frac{7}{3}, 0\\right)$",
      "Kurva tidak pernah memotong asimtot datarnya"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kurva fungsi rasional dapat memotong asimtot datarnya pada nilai $x$ berhingga. Titik potong dicari dengan menyamakan rumus fungsi dengan nilai asimtot datarnya: $f(x) = y_{\\text{asimtot}}$.",
      steps: "1. Tentukan asimtot datar kurva:\n$$y = \\lim_{x \\to \\pm\\infty} \\frac{2x^2 - 3x + 1}{x^2 + 4} = \\frac{2}{1} = 2$$\n2. Samakan nilai fungsi dengan $y = 2$:\n$$\\frac{2x^2 - 3x + 1}{x^2 + 4} = 2$$\n3. Kalikan silang:\n$$2x^2 - 3x + 1 = 2(x^2 + 4) \\implies 2x^2 - 3x + 1 = 2x^2 + 8$$\n4. Eliminasi suku $2x^2$:\n$$-3x + 1 = 8 \\implies -3x = 7 \\implies x = -\\frac{7}{3}$$\n5. Diperoleh koordinat titik potong: $\\left(-\\frac{7}{3}, 2\\right)$ (pilihan A).",
      pitfalls: "Mengasumsikan kurva tidak pernah boleh memotong asimtot (asimtot datar hanya didekati saat $x \\to \\pm\\infty$, tetapi boleh dipotong pada nilai $x$ lokal)."
    }
  },
  {
    id: "mat-alj-fungsi-rasional-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-rasional",
    category: "Rekonstruksi Parameter Fungsi Rasional",
    difficulty: "sedang",
    statement: "Suatu fungsi rasional $f(x) = \\frac{ax + b}{x + c}$ memiliki asimtot tegak $x = 3$, asimtot datar $y = 2$, dan grafiknya memotong sumbu-$Y$ di titik $(0, -1)$. Nilai dari $a + b + c$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "0",
      "1",
      "2",
      "3",
      "5"
    ],
    correctIndex: 2,
    solution: {
      concept: "Asimtot tegak $x = x_0$ diperoleh dari penyebut $x_0 + c = 0$. Asimtot datar $y = y_0$ diperoleh dari rasio koefisien $\\frac{a}{1} = y_0$. Titik potong sumbu-$Y$ diperoleh dari $f(0) = \\frac{b}{c}$.",
      steps: "1. Asimtot tegak pada $x = 3$:\n$$3 + c = 0 \\implies c = -3$$\n2. Asimtot datar pada $y = 2$:\n$$\\frac{a}{1} = 2 \\implies a = 2$$\n3. Memotong sumbu-$Y$ di $(0, -1)$:\n$$f(0) = \\frac{a(0) + b}{0 + c} = \\frac{b}{c} = -1$$\nSubstitusikan $c = -3$:\n$$\\frac{b}{-3} = -1 \\implies b = 3$$\n4. Hitung nilai $a + b + c$:\n$$a + b + c = 2 + 3 + (-3) = 2$$\n5. Jadi nilai $a + b + c$ adalah 2 (pilihan C).",
      pitfalls: "Salah tanda pada penyebut $c$: mengira $c = 3$ alih-alih $c = -3$."
    }
  },
  {
    id: "mat-alj-fungsi-rasional-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-rasional",
    category: "Total Jumlah Garis Asimtot",
    difficulty: "sedang",
    statement: "Jumlah total seluruh garis asimtot (baik asimtot tegak maupun asimtot datar) dari grafik fungsi rasional $f(x) = \\frac{3x - 1}{x^2 - 5x + 6}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    correctIndex: 2,
    solution: {
      concept: "Total garis asimtot diperoleh dengan menghitung banyaknya asimtot tegak (pembuat nol penyebut yang tidak dapat disederhanakan oleh pembilang) ditambah asimtot datar.",
      steps: "1. Faktorkan bagian penyebut:\n$$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$$\nPembuat nol penyebut adalah $x = 2$ dan $x = 3$.<br>2. Periksa nilai pembilang $3x - 1$:\n- Untuk $x = 2$: $3(2) - 1 = 5 \\neq 0$\n- Untuk $x = 3$: $3(3) - 1 = 8 \\neq 0$\nKarena keduanya bukan pembuat nol pembilang, maka terdapat 2 asimtot tegak ($x = 2$ dan $x = 3$).<br>3. Tinjau derajat fungsi untuk mencari asimtot datar:\n- Derajat pembilang $= 1$\n- Derajat penyebut $= 2$\nKarena derajat pembilang lebih kecil, limit $x \\to \\pm\\infty$ bernilai 0, sehingga ada 1 asimtot datar yaitu garis $y = 0$.<br>4. Hitung total asimtot: $2 + 1 = 3$ garis asimtot.<br>5. Jadi jumlah total garis asimtot adalah 3 (pilihan C).",
      pitfalls: "Lupa menghitung asimtot datar $y = 0$ sehingga hanya menjawab 2."
    }
  }
];
