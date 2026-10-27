/**
 * Batch Task: TASK_mat-alj-fungsi-mutlak_EASY
 * SubTopic: Fungsi Nilai Mutlak (mat-alj-fungsi-mutlak)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-fungsi-mutlak-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-mutlak",
    category: "Titik Puncak Grafik Nilai Mutlak",
    difficulty: "mudah",
    statement: "Koordinat titik puncak (titik balik minimum) dari kurva grafik fungsi $f(x) = |x - 4| + 2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(4, 2)$",
      "$(-4, 2)$",
      "$(4, -2)$",
      "$(2, 4)$",
      "$(0, 6)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi nilai mutlak berbentuk $f(x) = a|x - h| + k$ dengan $a > 0$ memiliki titik balik minimum pada $(h, k)$ karena nilai suku mutlak $|x - h| \\ge 0$ dan mencapai nilai terendah nol saat $x = h$.",
      steps: "1. Amati bentuk fungsi $f(x) = |x - 4| + 2$.\n2. Suku nilai mutlak $|x - 4|$ bernilai minimum sama dengan $0$ ketika $x - 4 = 0$, yaitu $x = 4$.\n3. Substitusikan nilai $x = 4$ ke rumus fungsi:\n$$f(4) = |4 - 4| + 2 = 0 + 2 = 2$$\n4. Jadi, koordinat titik puncak minimum grafik tersebut adalah $(4, 2)$ (pilihan A).",
      pitfalls: "Sering salah menentukan tanda absis puncak menjadi $x = -4$ akibat keliru membaca pergeseran horizontal fungsi."
    }
  },
  {
    id: "mat-alj-fungsi-mutlak-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-mutlak",
    category: "Titik Potong dengan Sumbu Koordinat",
    difficulty: "mudah",
    statement: "Titik potong grafik fungsi $f(x) = |2x - 6| - 4$ dengan sumbu-$Y$ berada pada koordinat ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(0, 2)$",
      "$(0, -4)$",
      "$(0, 6)$",
      "$(0, -2)$",
      "$(0, 10)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik potong grafik fungsi dengan sumbu-$Y$ ditentukan dengan menyubstitusikan nilai absis $x = 0$ ke dalam persamaan fungsi.",
      steps: "1. Tetapkan nilai $x = 0$ pada fungsi $f(x) = |2x - 6| - 4$.\n2. Hitung nilai fungsi:\n$$f(0) = |2(0) - 6| - 4 = |-6| - 4$$\n3. Karena $|-6| = 6$, maka:\n$$f(0) = 6 - 4 = 2$$\n4. Jadi, grafik memotong sumbu-$Y$ di titik $(0, 2)$ (pilihan A).",
      pitfalls: "Keliru menganggap nilai mutlak dari bilangan negatif tetap negatif (misalnya salah menghitung $|-6| = -6$ sehingga menghasilkan $-10$)."
    }
  },
  {
    id: "mat-alj-fungsi-mutlak-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-mutlak",
    category: "Daerah Hasil (Range) Fungsi Mutlak",
    difficulty: "mudah",
    statement: "Daerah hasil (range) dari grafik fungsi $f(x) = 5 - |x + 3|$ untuk domain $x \\in \\mathbb{R}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{y \\mid y \\le 5,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid y \\ge 5,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid y < 5,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid y \\le -3,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid 0 \\le y \\le 5,\\; y \\in \\mathbb{R}\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Sifat nilai mutlak menyatakan bahwa $|g(x)| \\ge 0$ untuk setiap nilai riil. Mengalikan bentuk tersebut dengan tanda minus akan membalik arah tanda ketaksamaan menjadi $-|g(x)| \\le 0$.",
      steps: "1. Berdasarkan sifat nilai mutlak, $|x + 3| \\ge 0$ untuk setiap $x \\in \\mathbb{R}$.\n2. Kalikan pertidaksamaan dengan $-1$:\n$$-|x + 3| \\le 0$$\n3. Tambahkan konstanta $5$ pada kedua ruas:\n$$5 - |x + 3| \\le 5$$\n4. Karena $y = f(x) = 5 - |x + 3|$, maka diperoleh hubungan $y \\le 5$.\n5. Daerah hasil fungsi adalah $R_f = \\{y \\mid y \\le 5,\\; y \\in \\mathbb{R}\\}$ (pilihan A).",
      pitfalls: "Tertukar antara tanda $\\le$ dan $\\ge$ akibat lupa bahwa koefisien tanda negatif di depan nilai mutlak membalik arah ketidaksamaan."
    }
  },
  {
    id: "mat-alj-fungsi-mutlak-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-mutlak",
    category: "Pembuat Nol Fungsi Nilai Mutlak",
    difficulty: "mudah",
    statement: "Grafik fungsi $f(x) = |3x - 9| - 6$ memotong sumbu-$X$ di dua titik berbeda, yaitu $x = x_1$ dan $x = x_2$. Nilai dari $x_1 + x_2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "6",
      "5",
      "4",
      "3",
      "2"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik potong grafik fungsi dengan sumbu-$X$ diperoleh dengan menyelesaikan persamaan $f(x) = 0$, yang mengarah pada bentuk persamaan nilai mutlak $|u| = c$ dengan solusi $u = c$ atau $u = -c$.",
      steps: "1. Tetapkan nilai fungsi sama dengan nol: $|3x - 9| - 6 = 0$.\n2. Pindahkan konstanta: $|3x - 9| = 6$.\n3. Buka tanda nilai mutlak menjadi dua kasus:\n- Kasus 1: $3x - 9 = 6 \\implies 3x = 15 \\implies x_1 = 5$\n- Kasus 2: $3x - 9 = -6 \\implies 3x = 3 \\implies x_2 = 1$\n4. Hitung jumlah kedua akar:\n$$x_1 + x_2 = 5 + 1 = 6$$\n5. Jadi, nilai $x_1 + x_2$ adalah 6 (pilihan A).",
      pitfalls: "Hanya menyelesaikan satu kasus positif ($3x - 9 = 6$) dan melupakan cabang solusi negatif dari persamaan nilai mutlak."
    }
  },
  {
    id: "mat-alj-fungsi-mutlak-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-mutlak",
    category: "Evaluasi Nilai Fungsi Mutlak",
    difficulty: "mudah",
    statement: "Diketahui fungsi $f(x) = |x^2 - 10| + |2x - 7|$. Nilai dari $f(3)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    correctIndex: 0,
    solution: {
      concept: "Menentukan nilai fungsi dilakukan dengan menyubstitusikan nilai argumen ke dalam rumus fungsi dan menerapkan definisi $|a| = a$ untuk $a \\ge 0$ serta $|a| = -a$ untuk $a < 0$.",
      steps: "1. Substitusikan $x = 3$ ke dalam rumus fungsi $f(x)$:\n$$f(3) = |3^2 - 10| + |2(3) - 7|$$\n2. Hitung nilai di dalam masing-masing tanda mutlak:\n$$3^2 - 10 = 9 - 10 = -1$$\n$$2(3) - 7 = 6 - 7 = -1$$\n3. Terapkan definisi nilai mutlak:\n$$|-1| = 1$$\n4. Jumlahkan kedua suku:\n$$f(3) = 1 + 1 = 2$$\n5. Jadi, nilai $f(3)$ adalah 2 (pilihan A).",
      pitfalls: "Kecerobohan saat menjumlahkan nilai negatif di dalam mutlak sebelum menerapkan operasi nilai mutlak, misalnya salah menghitung $(-1) + (-1) = -2$."
    }
  }
];
