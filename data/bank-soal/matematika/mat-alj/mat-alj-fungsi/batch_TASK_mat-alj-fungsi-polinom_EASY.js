/**
 * Batch Task: TASK_mat-alj-fungsi-polinom_EASY
 * SubTopic: Fungsi Polinom (mat-alj-fungsi-polinom)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-fungsi-polinom-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-polinom",
    category: "Titik Balik Ekstrem Parabola",
    difficulty: "mudah",
    statement: "Koordinat titik balik (puncak) dari grafik fungsi kuadrat $f(x) = x^2 - 6x + 5$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(3, -4)$",
      "$(3, 4)$",
      "$(-3, -4)$",
      "$(6, 5)$",
      "$(3, -5)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik puncak parabola $f(x) = ax^2 + bx + c$ berada pada koordinat $(x_p, y_p)$ dengan $x_p = -\\frac{b}{2a}$ dan $y_p = f(x_p) = -\\frac{D}{4a}$.",
      steps: "1. Identifikasi koefisien: $a = 1, b = -6, c = 5$.<br>2. Hitung absis titik puncak:<br>$$x_p = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = 3$$<br>3. Hitung ordinat titik puncak dengan substitusi $x_p = 3$:<br>$$y_p = f(3) = (3)^2 - 6(3) + 5 = 9 - 18 + 5 = -4$$<br>4. Jadi koordinat titik balik parabola adalah $(3, -4)$ (pilihan A).",
      pitfalls: "Salah tanda pada rumus sumbu simetri sehingga menghitung $x_p = -3$ yang menghasilkan ordinat keliru."
    }
  },
  {
    id: "mat-alj-fungsi-polinom-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-polinom",
    category: "Titik Potong Grafik dengan Sumbu-X",
    difficulty: "mudah",
    statement: "Grafik fungsi kuadrat $f(x) = 2x^2 + 5x - 3$ memotong sumbu-$X$ di titik ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\left(\\frac{1}{2}, 0\\right)$ dan $(-3, 0)$",
      "$\\left(-\\frac{1}{2}, 0\\right)$ dan $(3, 0)$",
      "$(1, 0)$ dan $(-3, 0)$",
      "$\\left(\\frac{1}{2}, 0\\right)$ dan $(3, 0)$",
      "$(0, -3)$ dan $(0, 2)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik potong grafik dengan sumbu-$X$ diperoleh saat nilai fungsi sama dengan nol ($f(x) = 0$), yang menghasilkan persamaan kuadrat untuk mencari akar-akarnya.",
      steps: "1. Tentukan pembuat nol: $2x^2 + 5x - 3 = 0$.<br>2. Faktorkan persamaan kuadrat:<br>$$(2x - 1)(x + 3) = 0$$<br>3. Selesaikan nilai variabel $x$:<br>$$2x - 1 = 0 \\implies x = \\frac{1}{2}$$<br>$$x + 3 = 0 \\implies x = -3$$<br>4. Koordinat titik potong sumbu-$X$ adalah $\\left(\\frac{1}{2}, 0\\right)$ dan $(-3, 0)$.<br>5. Pilihan yang tepat adalah A.",
      pitfalls: "Tertukar tanda saat menentukan akar pemfaktoran sehingga memilih $-\\frac{1}{2}$ dan $3$."
    }
  },
  {
    id: "mat-alj-fungsi-polinom-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-polinom",
    category: "Analisis Keterbukaan dan Diskriminan Parabola",
    difficulty: "mudah",
    statement: "Karakteristik grafik fungsi kuadrat $f(x) = -x^2 + 4x - 5$ pada bidang Cartesius adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Terbuka ke bawah dan tidak memotong sumbu-X",
      "Terbuka ke atas dan memotong sumbu-X di dua titik",
      "Terbuka ke bawah dan menyinggung sumbu-X",
      "Terbuka ke atas dan tidak memotong sumbu-X",
      "Terbuka ke bawah dan memotong sumbu-X di dua titik"
    ],
    correctIndex: 0,
    solution: {
      concept: "Keterbukaan kurva parabola ditentukan oleh tanda koefisien $a$ ($a > 0$ terbuka ke atas, $a < 0$ terbuka ke bawah). Banyaknya titik potong dengan sumbu-$X$ ditentukan oleh diskriminan $D = b^2 - 4ac$ ($D > 0$ dua titik potong, $D = 0$ menyinggung, $D < 0$ tidak memotong).",
      steps: "1. Identifikasi nilai $a$: $a = -1 < 0$, maka parabola terbuka ke bawah.<br>2. Hitung nilai diskriminan $D$:<br>$$D = b^2 - 4ac = (4)^2 - 4(-1)(-5) = 16 - 20 = -4$$<br>3. Karena $D = -4 < 0$, grafik berada sepenuhnya di bawah sumbu-$X$ (definit negatif) dan tidak memotong sumbu-$X$.<br>4. Jadi grafik terbuka ke bawah dan tidak memotong sumbu-$X$ (pilihan A).",
      pitfalls: "Salah menghitung perkalian tanda negatif pada $-4(-1)(-5)$ sehingga mengira $D = 16 + 20 = 36$."
    }
  },
  {
    id: "mat-alj-fungsi-polinom-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-polinom",
    category: "Titik Potong Polinom dengan Sumbu-Y",
    difficulty: "mudah",
    statement: "Grafik fungsi polinom kubik $f(x) = 3x^3 - 5x^2 + 2x - 8$ memotong sumbu-$Y$ pada koordinat ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(0, -8)$",
      "$(0, 8)$",
      "$(-8, 0)$",
      "$(0, 3)$",
      "$(0, -5)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik potong grafik fungsi apa pun dengan sumbu-$Y$ diperoleh saat nilai absis sama dengan nol ($x = 0$).",
      steps: "1. Substitusikan $x = 0$ ke dalam fungsi $f(x)$:<br>$$f(0) = 3(0)^3 - 5(0)^2 + 2(0) - 8 = -8$$<br>2. Koordinat titik potongnya adalah $(0, f(0)) = (0, -8)$.<br>3. Jadi titik potong dengan sumbu-$Y$ adalah $(0, -8)$ (pilihan A).",
      pitfalls: "Tertukar antara koordinat absis dan ordinat, yaitu memilih $(-8, 0)$ alih-alih $(0, -8)$."
    }
  },
  {
    id: "mat-alj-fungsi-polinom-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-polinom",
    category: "Persamaan Sumbu Simetri Parabola",
    difficulty: "mudah",
    statement: "Persamaan garis sumbu simetri dari grafik fungsi kuadrat $f(x) = 3x^2 + 12x - 7$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x = -2$",
      "$x = 2$",
      "$x = -4$",
      "$x = 4$",
      "$y = -2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Garis sumbu simetri parabola adalah garis vertikal yang membagi parabola menjadi dua bagian yang simetris, dengan persamaan $x = -\\frac{b}{2a}$.",
      steps: "1. Dari fungsi $f(x) = 3x^2 + 12x - 7$, diperoleh $a = 3$ dan $b = 12$.<br>2. Hitung persamaan sumbu simetri:<br>$$x = -\\frac{b}{2a} = -\\frac{12}{2(3)} = -\\frac{12}{6} = -2$$<br>3. Jadi persamaan sumbu simetri adalah garis $x = -2$ (pilihan A).",
      pitfalls: "Memilih persamaan garis horizontal $y = -2$ atau keliru tanda menjadi $x = 2$."
    }
  }
];
