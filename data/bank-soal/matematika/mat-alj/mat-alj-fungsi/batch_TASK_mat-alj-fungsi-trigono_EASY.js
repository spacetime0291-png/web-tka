/**
 * Batch Task: TASK_mat-alj-fungsi-trigono_EASY
 * SubTopic: Fungsi Trigonometri (mat-alj-fungsi-trigono)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-fungsi-trigono-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-trigono",
    category: "Nilai Maksimum Fungsi Sinus",
    difficulty: "mudah",
    statement: "Nilai maksimum dari fungsi trigonometri $f(x) = 3\\sin(2x) + 4$ untuk seluruh bilangan real $x \\in \\mathbb{R}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "7",
      "5",
      "4",
      "3",
      "1"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi sinus dasar $\\sin(\\theta)$ memiliki rentang nilai $-1 \\le \\sin(\\theta) \\le 1$. Nilai maksimum dari bentuk umum $f(x) = A\\sin(kx) + c$ dicapai saat nilai sinus sama dengan 1, yaitu bernilai $|A| + c$.",
      steps: "1. Amati rentang nilai fungsi dasar sinus: $-1 \\le \\sin(2x) \\le 1$.\n2. Nilai maksimum suku sinus terjadi ketika $\\sin(2x) = 1$.\n3. Substitusikan nilai tersebut ke dalam fungsi $f(x)$:\n$$f_{\\text{maks}} = 3(1) + 4 = 3 + 4 = 7$$\n4. Jadi, nilai maksimum fungsi tersebut adalah 7 (pilihan A).",
      pitfalls: "Terkecoh memasukkan koefisien sudut $2$ ke dalam perhitungan nilai maksimum, padahal koefisien sudut hanya memengaruhi periode gelombang dan bukan nilai puncaknya."
    }
  },
  {
    id: "mat-alj-fungsi-trigono-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-trigono",
    category: "Periode Fungsi Trigonometri",
    difficulty: "mudah",
    statement: "Periode dari fungsi trigonometri $g(x) = 5\\cos(4x - \\pi)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{\\pi}{2}$",
      "$\\pi$",
      "$2\\pi$",
      "$4\\pi$",
      "$\\frac{\\pi}{4}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Periode gelombang fungsi kosinus $y = A\\cos(kx \\pm c) + d$ dirumuskan sebagai $T = \\frac{2\\pi}{|k|}$, dengan $k$ menyatakan frekuensi sudut atau koefisien dari variabel $x$.",
      steps: "1. Identifikasi koefisien variabel $x$ pada fungsi $g(x) = 5\\cos(4x - \\pi)$, diperoleh $k = 4$.\n2. Gunakan rumus periode fungsi kosinus:\n$$T = \\frac{2\\pi}{|k|}$$\n3. Substitusikan $k = 4$:\n$$T = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$$\n4. Jadi, periode dari fungsi tersebut adalah $\\frac{\\pi}{2}$ (pilihan A).",
      pitfalls: "Keliru mengalikan $2\\pi$ dengan $4$ alih-alih membaginya, atau salah menyertakan nilai fasa $-\\pi$ ke dalam perhitungan periode."
    }
  },
  {
    id: "mat-alj-fungsi-trigono-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-trigono",
    category: "Amplitudo Grafik Fungsi Trigonometri",
    difficulty: "mudah",
    statement: "Amplitudo dari kurva grafik fungsi trigonometri $f(x) = -4\\cos(3x) + 2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "4",
      "-4",
      "2",
      "6",
      "8"
    ],
    correctIndex: 0,
    solution: {
      concept: "Amplitudo adalah setengah dari selisih nilai maksimum dan nilai minimum, yang selalu bernilai non-negatif dan dirumuskan sebagai $|A|$ dari fungsi $y = A\\cos(kx) + c$.",
      steps: "1. Identifikasi koefisien di depan fungsi kosinus: $A = -4$.\n2. Amplitudo didefinisikan sebagai nilai mutlak dari koefisien tersebut:\n$$\\text{Amplitudo} = |A| = |-4| = 4$$\n3. Secara alternatif, nilai maksimum $y_{\\text{maks}} = |-4| + 2 = 6$ dan nilai minimum $y_{\\text{min}} = -|-4| + 2 = -2$.\n$$\\text{Amplitudo} = \\frac{y_{\\text{maks}} - y_{\\text{min}}}{2} = \\frac{6 - (-2)}{2} = \\frac{8}{2} = 4$$\n4. Jadi, amplitudonya adalah 4 (pilihan A).",
      pitfalls: "Menjawab dengan nilai negatif $-4$, padahal amplitudo merupakan besaran jarak skalar yang selalu bernilai positif."
    }
  },
  {
    id: "mat-alj-fungsi-trigono-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-trigono",
    category: "Titik Potong dengan Sumbu Koordinat",
    difficulty: "mudah",
    statement: "Titik potong grafik fungsi trigonometri $f(x) = 2\\sin\\left(x + \\frac{\\pi}{6}\\right)$ dengan sumbu-$Y$ berada pada koordinat ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(0, 1)$",
      "$(0, 2)$",
      "$(0, \\sqrt{3})$",
      "$(0, 0)$",
      "$\\left(0, \\frac{1}{2}\\right)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik potong grafik fungsi trigonometri dengan sumbu-$Y$ diperoleh dengan menetapkan absis $x = 0$ dan mengevaluasi nilai fungsi sudut istimewa yang dihasilkan.",
      steps: "1. Substitusikan $x = 0$ ke dalam fungsi $f(x)$:\n$$f(0) = 2\\sin\\left(0 + \\frac{\\pi}{6}\\right) = 2\\sin\\left(\\frac{\\pi}{6}\\right)$$\n2. Karena $\\frac{\\pi}{6} = 30^\\circ$, maka $\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$.\n3. Hitung hasil perkalian:\n$$f(0) = 2 \\times \\frac{1}{2} = 1$$\n4. Jadi, titik potong kurva dengan sumbu-$Y$ adalah $(0, 1)$ (pilihan A).",
      pitfalls: "Salah mengingat nilai sudut istimewa trigonometri, misalnya tertukar antara $\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$ dengan $\\cos\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}\\sqrt{3}$."
    }
  },
  {
    id: "mat-alj-fungsi-trigono-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-trigono",
    category: "Nilai Minimum Fungsi Kosinus",
    difficulty: "mudah",
    statement: "Nilai minimum dari fungsi $h(x) = 2 - 5\\cos(x)$ untuk seluruh nilai $x \\in \\mathbb{R}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-3",
      "-7",
      "3",
      "7",
      "-5"
    ],
    correctIndex: 0,
    solution: {
      concept: "Nilai minimum dari bentuk $c - A\\cos(x)$ dengan $A > 0$ diperoleh saat $\\cos(x) = 1$, karena suku pengurang mencapai nilai terbesarnya.",
      steps: "1. Tinjau batas-batas nilai fungsi kosinus: $-1 \\le \\cos(x) \\le 1$.\n2. Untuk meminimalkan nilai $h(x) = 2 - 5\\cos(x)$, kita harus mengurangkan dengan nilai $5\\cos(x)$ sebesar mungkin, yaitu saat $\\cos(x) = 1$.\n3. Substitusikan $\\cos(x) = 1$:\n$$h_{\\text{min}} = 2 - 5(1) = 2 - 5 = -3$$\n4. (Sebagai perbandingan, nilai maksimum terjadi saat $\\cos(x) = -1$, yaitu $h_{\\text{maks}} = 2 - 5(-1) = 7$).\n5. Jadi, nilai minimum fungsi adalah -3 (pilihan A).",
      pitfalls: "Terkecoh langsung memasukkan $\\cos(x) = -1$ untuk mencari minimum, padahal tanda minus di depan koefisien membalik peran ekstrim fungsi."
    }
  }
];
