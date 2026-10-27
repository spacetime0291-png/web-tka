/**
 * Batch Task: TASK_mat-alj-polinom-horner_EASY
 * SubTopic: Skema Horner (mat-alj-polinom-horner)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-polinom-horner-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-horner",
    category: "Konsep Dasar Pengali Bagan Horner",
    difficulty: "mudah",
    statement: "Pada metode pembagian sintetik Horner untuk membagi suatu polinomial $P(x)$ oleh pembagi $(x - 3)$, nilai konstanta pengali $k$ yang diletakkan pada bagian paling kiri bagan Horner adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-3",
      "$-\\frac{1}{3}$",
      "$\\frac{1}{3}$",
      "3",
      "0"
    ],
    correctIndex: 3,
    solution: {
      concept: "Skema sintetik bagan Horner menggunakan nilai pembuat nol dari pembagi linear. Untuk pembagi $(x - c)$, nilai pembuat nol diperoleh dari $x - c = 0 \\implies x = c$.",
      steps: "1. Identifikasi bentuk pembagi: $(x - 3)$.<br>2. Cari nilai pembuat nol dari pembagi:<br>$$x - 3 = 0 \\implies x = 3$$<br>3. Nilai $k = 3$ inilah yang diletakkan pada kolom kiri sebagai faktor pengali baris sintetik Horner.<br>4. Jadi nilai pengalinya adalah 3 (pilihan D).",
      pitfalls: "Sering salah tanda dengan langsung mengambil angka pembagi tanpa mencari pembuat nolnya, yaitu memilih $-3$."
    }
  },
  {
    id: "mat-alj-polinom-horner-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-horner",
    category: "Penyelesaian Pembagian dengan Bagan Horner",
    difficulty: "mudah",
    statement: "Pembagian suku banyak $P(x) = x^3 - 4x^2 + 2x + 5$ oleh $(x - 2)$ dilakukan menggunakan skema Horner. Hasil bagi dan sisa pembagian yang diperoleh berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Hasil bagi $x^2 - 2x - 2$ dan sisa 1",
      "Hasil bagi $x^2 + 2x - 2$ dan sisa 1",
      "Hasil bagi $x^2 - 2x + 2$ dan sisa -1",
      "Hasil bagi $x^2 - 4x - 2$ dan sisa 5",
      "Hasil bagi $x^2 - 2x - 2$ dan sisa -1"
    ],
    correctIndex: 0,
    solution: {
      concept: "Bagan Horner untuk pembagi $(x - 2)$ menggunakan pengali $k = 2$. Koefisien baris bawah memberikan koefisien hasil bagi dan angka paling akhir adalah sisa pembagian.",
      steps: "1. Tulis koefisien $P(x)$: $1, -4, 2, 5$ dengan pengali $k = 2$.<br>2. Turunkan angka 1.<br>3. Kalikan $1 \\times 2 = 2$. Tambahkan ke $-4$: $-4 + 2 = -2$.<br>4. Kalikan $-2 \\times 2 = -4$. Tambahkan ke 2: $2 + (-4) = -2$.<br>5. Kalikan $-2 \\times 2 = -4$. Tambahkan ke 5: $5 + (-4) = 1$.<br>6. Baris hasil: koefisien hasil bagi adalah $1, -2, -2$ (yaitu $x^2 - 2x - 2$) dan sisa pembagiannya adalah 1.<br>7. Jadi hasil bagi $x^2 - 2x - 2$ dan sisa 1 (pilihan A).",
      pitfalls: "Mengurangkan baris pada bagan Horner alih-alih menjumlahkannya (Horner menggunakan operasi penjumlahan)."
    }
  },
  {
    id: "mat-alj-polinom-horner-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-horner",
    category: "Evaluasi Nilai Polinomial Menggunakan Horner",
    difficulty: "mudah",
    statement: "Nilai suku banyak $P(x) = 2x^3 - 5x^2 + 3x - 7$ untuk $x = 3$ jika dievaluasi dengan metode bagan Horner adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "7",
      "9",
      "11",
      "13",
      "15"
    ],
    correctIndex: 2,
    solution: {
      concept: "Berdasarkan Teorema Sisa dan algoritma sintetik Horner, nilai $P(k)$ sama persis dengan sisa pembagian $P(x)$ oleh $(x - k)$ pada kolom terakhir bagan Horner.",
      steps: "1. Susun koefisien polinomial: $2, -5, 3, -7$ dengan pengali $k = 3$.<br>2. Turunkan suku pertama: 2.<br>3. Kalikan $2 \\times 3 = 6$. Jumlahkan: $-5 + 6 = 1$.<br>4. Kalikan $1 \\times 3 = 3$. Jumlahkan: $3 + 3 = 6$.<br>5. Kalikan $6 \\times 3 = 18$. Jumlahkan: $-7 + 18 = 11$.<br>6. Angka terakhir adalah 11, sehingga $P(3) = 11$.<br>7. Jadi nilai suku banyak tersebut adalah 11 (pilihan C).",
      pitfalls: "Salah hitung aritmetika saat menjumlahkan $-7 + 18$."
    }
  },
  {
    id: "mat-alj-polinom-horner-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-horner",
    category: "Bagan Horner Pembagi Bentuk (ax - b)",
    difficulty: "mudah",
    statement: "Pembagian polinomial $P(x)$ oleh pembagi $(2x - 3)$ dengan bagan Horner menggunakan pengali $k = \\frac{3}{2}$ menghasilkan baris koefisien terbawah berturut-turut $[4, -6, 2]$ dan sisa 5. Bentuk hasil bagi $H(x)$ yang sebenarnya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2x^2 - 3x + 1$",
      "$4x^2 - 6x + 2$",
      "$8x^2 - 12x + 4$",
      "$2x^2 + 3x + 1$",
      "$4x^2 - 3x + 2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jika polinomial $P(x)$ dibagi oleh $(ax - b)$ menggunakan bagan Horner dengan pengali $k = \\frac{b}{a}$, maka koefisien hasil bagi pada bagan harus dibagi lagi dengan koefisien $a$: $H(x) = \\frac{H^*(x)}{a}$.",
      steps: "1. Pembagi adalah $(2x - 3)$, sehingga koefisien $a = 2$.<br>2. Baris koefisien terbawah dari bagan adalah $4, -6, 2$.<br>3. Bentuk hasil bagi sementara: $H^*(x) = 4x^2 - 6x + 2$.<br>4. Bagi seluruh koefisien $H^*(x)$ dengan $a = 2$:<br>$$H(x) = \\frac{4x^2 - 6x + 2}{2} = 2x^2 - 3x + 1$$<br>5. Jadi hasil bagi sebenarnya adalah $2x^2 - 3x + 1$ (pilihan A).",
      pitfalls: "Lupa membagi koefisien dengan $a = 2$ sehingga langsung mengambil $4x^2 - 6x + 2$."
    }
  },
  {
    id: "mat-alj-polinom-horner-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-horner",
    category: "Penanganan Suku Nol pada Bagan Horner",
    difficulty: "mudah",
    statement: "Pada pembagian polinomial $P(x) = 3x^4 - 2x^2 + 5$ oleh $(x + 1)$ dengan bagan Horner, baris koefisien polinomial yang wajib dituliskan secara urut menurun derajatnya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3, 0, -2, 0, 5$",
      "$3, -2, 5$",
      "$3, -2, 0, 5$",
      "$3, 0, -2, 5$",
      "$3, 1, -2, 1, 5$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada bagan Horner, semua derajat variabel mulai dari derajat tertinggi hingga konstanta derajat nol ($x^0$) harus disertakan. Jika suatu suku tidak tertulis dalam polinomial, koefisien suku tersebut bernilai 0.",
      steps: "1. Tuliskan polinomial $P(x)$ secara lengkap dengan semua derajat pangkat:<br>$$P(x) = 3x^4 + 0x^3 - 2x^2 + 0x + 5$$<br>2. Catat koefisien masing-masing suku secara berurutan:<br>- Suku $x^4$: 3<br>- Suku $x^3$: 0<br>- Suku $x^2$: -2<br>- Suku $x^1$: 0<br>- Suku $x^0$ (konstanta): 5<br>3. Diperoleh barisan koefisien: $3, 0, -2, 0, 5$.<br>4. Jadi pilihan yang benar adalah A.",
      pitfalls: "Melewatkan suku-suku yang tidak tertulis sehingga bagan Horner bergeser dan menghasilkan jawaban yang salah total."
    }
  }
];
