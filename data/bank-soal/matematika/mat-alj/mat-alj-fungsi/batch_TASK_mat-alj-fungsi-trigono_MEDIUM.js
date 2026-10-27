/**
 * Batch Task: TASK_mat-alj-fungsi-trigono_MEDIUM
 * SubTopic: Fungsi Trigonometri (mat-alj-fungsi-trigono)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-fungsi-trigono-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-trigono",
    category: "Nilai Maksimum Kombinasi Linier Sinus dan Kosinus",
    difficulty: "sedang",
    statement: "Nilai maksimum dari fungsi $f(x) = 3\\cos(x) + 4\\sin(x) + 5$ untuk sembarang bilangan real $x \\in \\mathbb{R}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "10",
      "12",
      "8",
      "7",
      "5"
    ],
    correctIndex: 0,
    solution: {
      concept: "Bentuk kombinasi linier $A\\cos(x) + B\\sin(x)$ dapat diubah menjadi bentuk gelombang tunggal $R\\cos(x - \\alpha)$ dengan amplitudo $R = \\sqrt{A^2 + B^2}$. Nilai maksimum bentuk tersebut adalah $R + c$.",
      steps: "1. Ubah suku trigonometri $3\\cos(x) + 4\\sin(x)$ ke bentuk $R\\cos(x - \\alpha)$:\n$$R = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$\n2. Fungsi dapat ditulis sebagai:\n$$f(x) = 5\\cos(x - \\alpha) + 5$$\n3. Karena nilai maksimum dari $\\cos(x - \\alpha)$ adalah 1, maka:\n$$f_{\\text{maks}} = 5(1) + 5 = 10$$\n4. Jadi, nilai maksimum dari fungsi tersebut adalah 10 (pilihan A).",
      pitfalls: "Menjumlahkan koefisien secara langsung $3 + 4 + 5 = 12$ tanpa menghitung resultan amplitudo vektor trigonometri $R = \\sqrt{A^2 + B^2}$."
    }
  },
  {
    id: "mat-alj-fungsi-trigono-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-trigono",
    category: "Banyaknya Titik Potong dengan Sumbu-X",
    difficulty: "sedang",
    statement: "Banyaknya titik potong antara kurva grafik fungsi $f(x) = 2\\sin(2x) - 1$ dengan sumbu-$X$ pada interval $0 \\le x \\le \\pi$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "2",
      "3",
      "4",
      "1",
      "0"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik potong grafik dengan sumbu-$X$ dicari dengan menyelesaikan persamaan trigonometri $f(x) = 0$ dan menghitung jumlah solusi sudut yang berada dalam batasan interval domain yang ditentukan.",
      steps: "1. Tetapkan $f(x) = 0$:\n$$2\\sin(2x) - 1 = 0 \\implies \\sin(2x) = \\frac{1}{2}$$\n2. Tentukan batasan sudut untuk $2x$: Karena $0 \\le x \\le \\pi$, maka $0 \\le 2x \\le 2\\pi$.\n3. Cari solusi $2x$ pada kuadran I dan II yang bernilai $\\sin(2x) = \\frac{1}{2}$:\n$$2x_1 = \\frac{\\pi}{6} \\implies x_1 = \\frac{\\pi}{12}$$\n$$2x_2 = \\frac{5\\pi}{6} \\implies x_2 = \\frac{5\\pi}{12}$$\n4. Kedua nilai $x$ tersebut memenuhi interval $0 \\le x \\le \\pi$.\n5. Jadi, terdapat tepat 2 titik potong dengan sumbu-$X$ (pilihan A).",
      pitfalls: "Lupa menyesuaikan batasan interval sudut argumen $2x$ sehingga mencari solusi langsung untuk batasan $x$ tanpa membagi dua kembali sudutnya."
    }
  },
  {
    id: "mat-alj-fungsi-trigono-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-trigono",
    category: "Transformasi dan Pergeseran Fasa Grafik Sinus",
    difficulty: "sedang",
    statement: "Persamaan kurva fungsi sinus dengan amplitudo 3, periode $\\pi$, serta mengalami pergeseran fasa horizontal sejauh $\\frac{\\pi}{4}$ satuan ke arah kanan dan pergeseran vertikal ke atas sejauh 2 satuan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$y = 3\\sin\\left(2x - \\frac{\\pi}{2}\\right) + 2$",
      "$y = 3\\sin\\left(2x - \\frac{\\pi}{4}\\right) + 2$",
      "$y = 3\\sin\\left(x - \\frac{\\pi}{4}\\right) + 2$",
      "$y = 3\\sin\\left(2x + \\frac{\\pi}{2}\\right) + 2$",
      "$y = 3\\sin\\left(\\frac{1}{2}x - \\frac{\\pi}{4}\\right) + 2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Bentuk umum gelombang sinusoidal bertranslasi adalah $y = A\\sin(k(x - h)) + d$, dengan $A$ amplitudo, $k = \\frac{2\\pi}{T}$, $h$ pergeseran horizontal, dan $d$ pergeseran vertikal.",
      steps: "1. Tentukan frekuensi sudut dari periode $T = \\pi$:\n$$k = \\frac{2\\pi}{T} = \\frac{2\\pi}{\\pi} = 2$$\n2. Amplitudo $A = 3$, pergeseran horizontal ke kanan $h = \\frac{\\pi}{4}$, dan pergeseran vertikal $d = 2$.\n3. Susun persamaan fungsi:\n$$y = 3\\sin\\left(2\\left(x - \\frac{\\pi}{4}\\right)\\right) + 2$$\n4. Distribusikan faktor pengali 2 ke dalam tanda kurung:\n$$y = 3\\sin\\left(2x - \\frac{\\pi}{2}\\right) + 2$$\n5. Jadi, persamaan kurvanya adalah $y = 3\\sin\\left(2x - \\frac{\\pi}{2}\\right) + 2$ (pilihan A).",
      pitfalls: "Lupa mengalikan pergeseran fasa horizontal $h$ dengan konstanta frekuensi sudut $k=2$, sehingga salah memilih bentuk $2x - \\frac{\\pi}{4}$."
    }
  },
  {
    id: "mat-alj-fungsi-trigono-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-trigono",
    category: "Daerah Hasil (Range) Fungsi Kuadrat Trigonometri",
    difficulty: "sedang",
    statement: "Daerah hasil (range) dari fungsi $f(x) = 2\\sin^2(x) - 4\\sin(x) + 5$ untuk seluruh bilangan real $x \\in \\mathbb{R}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{y \\mid 3 \\le y \\le 11,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid 1 \\le y \\le 9,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid 5 \\le y \\le 11,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid 3 \\le y \\le 9,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid 0 \\le y \\le 11,\\; y \\in \\mathbb{R}\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi kuadrat dalam trigonometri $f(u) = au^2 + bu + c$ diselesaikan dengan pemisalan $u = \\sin(x)$ yang memiliki batas tertutup $-1 \\le u \\le 1$, lalu mencari nilai ekstrim pada interval tersebut.",
      steps: "1. Misalkan $u = \\sin(x)$ dengan interval batas $-1 \\le u \\le 1$.\n2. Bentuk kuadrat menjadi $g(u) = 2u^2 - 4u + 5 = 2(u - 1)^2 + 3$.\n3. Nilai minimum terjadi di titik puncak $u = 1$ (karena $u=1$ berada dalam interval domain):\n$$g(1) = 2(1 - 1)^2 + 3 = 3$$\n4. Nilai maksimum terjadi pada titik ujung yang paling jauh dari $u = 1$, yaitu saat $u = -1$:\n$$g(-1) = 2(-1 - 1)^2 + 3 = 2(-2)^2 + 3 = 2(4) + 3 = 11$$\n5. Oleh karena itu, daerah hasilnya adalah $\\{y \\mid 3 \\le y \\le 11,\\; y \\in \\mathbb{R}\\}$ (pilihan A).",
      pitfalls: "Hanya menguji batas ujung $u = -1$ dan $u = 1$ tanpa memeriksa keberadaan titik stasioner (puncak) kuadrat di dalam domain."
    }
  },
  {
    id: "mat-alj-fungsi-trigono-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-trigono",
    category: "Nilai Ekstrim Fungsi Tangen pada Interval Tertutup",
    difficulty: "sedang",
    statement: "Nilai minimum dan maksimum dari fungsi trigonometri $f(x) = 3\\tan^2(x) + 2$ pada interval tertutup $-\\frac{\\pi}{4} \\le x \\le \\frac{\\pi}{4}$ berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "2 dan 5",
      "2 dan 8",
      "-1 dan 5",
      "0 dan 5",
      "2 dan 11"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi tangen $\\tan(x)$ bersifat monoton naik pada interval $-\\frac{\\pi}{4} \\le x \\le \\frac{\\pi}{4}$ dengan rentang $-1 \\le \\tan(x) \\le 1$. Nilai kuadratnya memiliki rentang $0 \\le \\tan^2(x) \\le 1$.",
      steps: "1. Pada interval $-\\frac{\\pi}{4} \\le x \\le \\frac{\\pi}{4}$, nilai $\\tan(x)$ bergerak dari $\\tan\\left(-\\frac{\\pi}{4}\\right) = -1$ hingga $\\tan\\left(\\frac{\\pi}{4}\\right) = 1$.\n2. Oleh karena itu, nilai kuadrat suku tangen berada pada rentang non-negatif:\n$$0 \\le \\tan^2(x) \\le 1$$\n3. Nilai minimum tercapai saat $\\tan^2(x) = 0$ (pada $x = 0$):\n$$f_{\\text{min}} = 3(0) + 2 = 2$$\n4. Nilai maksimum tercapai saat $\\tan^2(x) = 1$ (pada $x = \\pm \\frac{\\pi}{4}$):\n$$f_{\\text{maks}} = 3(1) + 2 = 5$$\n5. Jadi, nilai minimum dan maksimum berturut-turut adalah 2 dan 5 (pilihan A).",
      pitfalls: "Mengabaikan sifat kuadrat dan langsung memasukkan $\\tan(x) = -1$ sebagai pembuat minimum yang keliru menganggap nilainya menjadi negatif."
    }
  }
];
