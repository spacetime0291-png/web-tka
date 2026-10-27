/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Polinomial (mat-alj-polinom)
 * Sub-Bab: Skema Horner (mat-alj-polinom-horner)
 * Slug: skema-horner
 * Indikator: Metode sintetik bagan Horner dan pembagian efisien suku banyak.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-polinom-horner";
  const subTopicSlug = "skema-horner";
  const questions = [
  {
    "id": "mat-alj-polinom-horner-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-horner",
    "category": "Konsep Dasar Pengali Bagan Horner",
    "difficulty": "mudah",
    "statement": "Pada metode pembagian sintetik Horner untuk membagi suatu polinomial $P(x)$ oleh pembagi $(x - 3)$, nilai konstanta pengali $k$ yang diletakkan pada bagian paling kiri bagan Horner adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-3",
      "$-\\frac{1}{3}$",
      "$\\frac{1}{3}$",
      "3",
      "0"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Skema sintetik bagan Horner menggunakan nilai pembuat nol dari pembagi linear. Untuk pembagi $(x - c)$, nilai pembuat nol diperoleh dari $x - c = 0 \\implies x = c$.",
      "steps": "1. Identifikasi bentuk pembagi: $(x - 3)$.<br>2. Cari nilai pembuat nol dari pembagi:<br>$$x - 3 = 0 \\implies x = 3$$<br>3. Nilai $k = 3$ inilah yang diletakkan pada kolom kiri sebagai faktor pengali baris sintetik Horner.<br>4. Jadi nilai pengalinya adalah 3 (pilihan D).",
      "pitfalls": "Sering salah tanda dengan langsung mengambil angka pembagi tanpa mencari pembuat nolnya, yaitu memilih $-3$."
    },
    "subTopicSlug": "skema-horner",
    "bab": "Aljabar",
    "subBab": "Skema Horner",
    "subTopic": "Skema Horner",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-polinom-horner-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-horner",
    "category": "Penyelesaian Pembagian dengan Bagan Horner",
    "difficulty": "mudah",
    "statement": "Pembagian suku banyak $P(x) = x^3 - 4x^2 + 2x + 5$ oleh $(x - 2)$ dilakukan menggunakan skema Horner. Hasil bagi dan sisa pembagian yang diperoleh berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Hasil bagi $x^2 - 2x - 2$ dan sisa 1",
      "Hasil bagi $x^2 + 2x - 2$ dan sisa 1",
      "Hasil bagi $x^2 - 2x + 2$ dan sisa -1",
      "Hasil bagi $x^2 - 4x - 2$ dan sisa 5",
      "Hasil bagi $x^2 - 2x - 2$ dan sisa -1"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bagan Horner untuk pembagi $(x - 2)$ menggunakan pengali $k = 2$. Koefisien baris bawah memberikan koefisien hasil bagi dan angka paling akhir adalah sisa pembagian.",
      "steps": "1. Tulis koefisien $P(x)$: $1, -4, 2, 5$ dengan pengali $k = 2$.<br>2. Turunkan angka 1.<br>3. Kalikan $1 \\times 2 = 2$. Tambahkan ke $-4$: $-4 + 2 = -2$.<br>4. Kalikan $-2 \\times 2 = -4$. Tambahkan ke 2: $2 + (-4) = -2$.<br>5. Kalikan $-2 \\times 2 = -4$. Tambahkan ke 5: $5 + (-4) = 1$.<br>6. Baris hasil: koefisien hasil bagi adalah $1, -2, -2$ (yaitu $x^2 - 2x - 2$) dan sisa pembagiannya adalah 1.<br>7. Jadi hasil bagi $x^2 - 2x - 2$ dan sisa 1 (pilihan A).",
      "pitfalls": "Mengurangkan baris pada bagan Horner alih-alih menjumlahkannya (Horner menggunakan operasi penjumlahan)."
    },
    "subTopicSlug": "skema-horner",
    "bab": "Aljabar",
    "subBab": "Skema Horner",
    "subTopic": "Skema Horner",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-polinom-horner-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-horner",
    "category": "Evaluasi Nilai Polinomial Menggunakan Horner",
    "difficulty": "mudah",
    "statement": "Nilai suku banyak $P(x) = 2x^3 - 5x^2 + 3x - 7$ untuk $x = 3$ jika dievaluasi dengan metode bagan Horner adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "7",
      "9",
      "11",
      "13",
      "15"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Berdasarkan Teorema Sisa dan algoritma sintetik Horner, nilai $P(k)$ sama persis dengan sisa pembagian $P(x)$ oleh $(x - k)$ pada kolom terakhir bagan Horner.",
      "steps": "1. Susun koefisien polinomial: $2, -5, 3, -7$ dengan pengali $k = 3$.<br>2. Turunkan suku pertama: 2.<br>3. Kalikan $2 \\times 3 = 6$. Jumlahkan: $-5 + 6 = 1$.<br>4. Kalikan $1 \\times 3 = 3$. Jumlahkan: $3 + 3 = 6$.<br>5. Kalikan $6 \\times 3 = 18$. Jumlahkan: $-7 + 18 = 11$.<br>6. Angka terakhir adalah 11, sehingga $P(3) = 11$.<br>7. Jadi nilai suku banyak tersebut adalah 11 (pilihan C).",
      "pitfalls": "Salah hitung aritmetika saat menjumlahkan $-7 + 18$."
    },
    "subTopicSlug": "skema-horner",
    "bab": "Aljabar",
    "subBab": "Skema Horner",
    "subTopic": "Skema Horner",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-polinom-horner-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-horner",
    "category": "Bagan Horner Pembagi Bentuk (ax - b)",
    "difficulty": "mudah",
    "statement": "Pembagian polinomial $P(x)$ oleh pembagi $(2x - 3)$ dengan bagan Horner menggunakan pengali $k = \\frac{3}{2}$ menghasilkan baris koefisien terbawah berturut-turut $[4, -6, 2]$ dan sisa 5. Bentuk hasil bagi $H(x)$ yang sebenarnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2x^2 - 3x + 1$",
      "$4x^2 - 6x + 2$",
      "$8x^2 - 12x + 4$",
      "$2x^2 + 3x + 1$",
      "$4x^2 - 3x + 2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jika polinomial $P(x)$ dibagi oleh $(ax - b)$ menggunakan bagan Horner dengan pengali $k = \\frac{b}{a}$, maka koefisien hasil bagi pada bagan harus dibagi lagi dengan koefisien $a$: $H(x) = \\frac{H^*(x)}{a}$.",
      "steps": "1. Pembagi adalah $(2x - 3)$, sehingga koefisien $a = 2$.<br>2. Baris koefisien terbawah dari bagan adalah $4, -6, 2$.<br>3. Bentuk hasil bagi sementara: $H^*(x) = 4x^2 - 6x + 2$.<br>4. Bagi seluruh koefisien $H^*(x)$ dengan $a = 2$:<br>$$H(x) = \\frac{4x^2 - 6x + 2}{2} = 2x^2 - 3x + 1$$<br>5. Jadi hasil bagi sebenarnya adalah $2x^2 - 3x + 1$ (pilihan A).",
      "pitfalls": "Lupa membagi koefisien dengan $a = 2$ sehingga langsung mengambil $4x^2 - 6x + 2$."
    },
    "subTopicSlug": "skema-horner",
    "bab": "Aljabar",
    "subBab": "Skema Horner",
    "subTopic": "Skema Horner",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-polinom-horner-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-horner",
    "category": "Penanganan Suku Nol pada Bagan Horner",
    "difficulty": "mudah",
    "statement": "Pada pembagian polinomial $P(x) = 3x^4 - 2x^2 + 5$ oleh $(x + 1)$ dengan bagan Horner, baris koefisien polinomial yang wajib dituliskan secara urut menurun derajatnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3, 0, -2, 0, 5$",
      "$3, -2, 5$",
      "$3, -2, 0, 5$",
      "$3, 0, -2, 5$",
      "$3, 1, -2, 1, 5$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada bagan Horner, semua derajat variabel mulai dari derajat tertinggi hingga konstanta derajat nol ($x^0$) harus disertakan. Jika suatu suku tidak tertulis dalam polinomial, koefisien suku tersebut bernilai 0.",
      "steps": "1. Tuliskan polinomial $P(x)$ secara lengkap dengan semua derajat pangkat:<br>$$P(x) = 3x^4 + 0x^3 - 2x^2 + 0x + 5$$<br>2. Catat koefisien masing-masing suku secara berurutan:<br>- Suku $x^4$: 3<br>- Suku $x^3$: 0<br>- Suku $x^2$: -2<br>- Suku $x^1$: 0<br>- Suku $x^0$ (konstanta): 5<br>3. Diperoleh barisan koefisien: $3, 0, -2, 0, 5$.<br>4. Jadi pilihan yang benar adalah A.",
      "pitfalls": "Melewatkan suku-suku yang tidak tertulis sehingga bagan Horner bergeser dan menghasilkan jawaban yang salah total."
    },
    "subTopicSlug": "skema-horner",
    "bab": "Aljabar",
    "subBab": "Skema Horner",
    "subTopic": "Skema Horner",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-polinom-horner-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-horner",
    "category": "Metode Horner Kino Pembagi Kuadrat",
    "difficulty": "sedang",
    "statement": "Pada pembagian polinomial oleh pembagi kuadrat $Q(x) = x^2 - x - 2$ menggunakan metode Horner Kino, dua nilai pengali yang diletakkan di sebelah kiri bagan berturut-turut dari baris atas (pengali konstanta) ke baris bawah (pengali linear) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2 dan 1",
      "-2 dan -1",
      "-2 dan 1",
      "2 dan -1",
      "1 dan 2"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada metode Horner Kino untuk pembagi berderajat dua $Q(x) = x^2 - c_1 x - c_0$, persamaan pembuat nol diubah menjadi $x^2 = c_1 x + c_0$. Nilai pengali pada bagan Horner Kino adalah $k_1 = -(-c_0) = c_0$ (pengali konstanta) dan $k_2 = -(-c_1) = c_1$ (pengali koefisien linear).",
      "steps": "1. Tuliskan pembagi dalam bentuk $x^2 + b x + c$: $x^2 - x - 2$.<br>2. Cari nilai pengali Horner Kino:<br>- Pengali baris atas (konstanta): $k_1 = -(-2) = 2$<br>- Pengali baris bawah (linear): $k_2 = -(-1) = 1$<br>3. Jadi dua nilai pengali berturut-turut adalah 2 dan 1 (pilihan A).",
      "pitfalls": "Lupa mengubah tanda negatif dari koefisien pembagi sehingga memilih $-2$ dan $-1$."
    },
    "subTopicSlug": "skema-horner",
    "bab": "Aljabar",
    "subBab": "Skema Horner",
    "subTopic": "Skema Horner",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-polinom-horner-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-horner",
    "category": "Horner Bertingkat dan Ekspansi Basis (x - c)",
    "difficulty": "sedang",
    "statement": "Suku banyak $P(x) = x^3 - 3x^2 + 4x - 1$ dinyatakan dalam basis $(x - 1)$ sebagai:\n$$P(x) = A(x - 1)^3 + B(x - 1)^2 + C(x - 1) + D$$\nNilai dari penjumlahan koefisien $A + B + C + D$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Koefisien $A, B, C, D$ dari ekspansi Taylor polinomial dalam pangkat $(x - c)$ dapat ditentukan melalui sisa-sisa pembagian bertingkat menggunakan bagan Horner berulang pada $x = c$.",
      "steps": "1. Lakukan pembagian pertama pada $k = 1$ dengan koefisien $[1, -3, 4, -1]$:\n- Turun 1; $1(1) = 1 \\implies -3 + 1 = -2$\n- $-2(1) = -2 \\implies 4 - 2 = 2$\n- $2(1) = 2 \\implies -1 + 2 = 1$\nDiperoleh sisa pertama $D = 1$, dengan hasil bagi $[1, -2, 2]$.<br>2. Lakukan pembagian kedua pada $k = 1$ terhadap $[1, -2, 2]$:\n- Turun 1; $1(1) = 1 \\implies -2 + 1 = -1$\n- $-1(1) = -1 \\implies 2 - 1 = 1$\nDiperoleh sisa kedua $C = 1$, dengan hasil bagi $[1, -1]$.<br>3. Lakukan pembagian ketiga pada $k = 1$ terhadap $[1, -1]$:\n- Turun 1; $1(1) = 1 \\implies -1 + 1 = 0$\nDiperoleh sisa ketiga $B = 0$ dan koefisien utama $A = 1$.<br>4. Jumlahkan seluruh koefisien:\n$$A + B + C + D = 1 + 0 + 1 + 1 = 3$$<br>5. Jadi nilai yang diperoleh adalah 3 (pilihan C).",
      "pitfalls": "Urutan penamaan koefisien terbalik dari $A$ ke $D$ atau salah mengalikan pada baris kedua."
    },
    "subTopicSlug": "skema-horner",
    "bab": "Aljabar",
    "subBab": "Skema Horner",
    "subTopic": "Skema Horner",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-polinom-horner-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-horner",
    "category": "Penentuan Parameter Berdasarkan Sisa Bagan Horner",
    "difficulty": "sedang",
    "statement": "Suku banyak $P(x) = 2x^4 + ax^3 - 3x^2 + 5x - 6$ jika dibagi oleh $(x - 2)$ menggunakan bagan Horner menghasilkan sisa 16. Nilai dari parameter $a$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-2",
      "-1",
      "0",
      "1",
      "2"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Sisa pembagian pada bagan Horner merupakan elemen terakhir yang diperoleh dari akumulasi operasi kali dan tambah berturut-turut.",
      "steps": "1. Susun baris koefisien: $[2, a, -3, 5, -6]$ dengan pengali $k = 2$.<br>2. Jalankan langkah Horner:\n- Kolom 1: 2\n- Kolom 2: $a + 2(2) = a + 4$\n- Kolom 3: $-3 + 2(a + 4) = 2a + 5$\n- Kolom 4: $5 + 2(2a + 5) = 4a + 15$\n- Kolom 5 (sisa): $-6 + 2(4a + 15) = 8a + 24$<br>3. Samakan sisa dengan nilai yang diketahui:\n$$8a + 24 = 16 \\implies 8a = 16 - 24 \\implies 8a = -8 \\implies a = -1$$<br>4. Jadi nilai parameter $a$ adalah $-1$ (pilihan B).",
      "pitfalls": "Lupa mengalikan 2 pada suku $(4a + 15)$ sebelum menambahkan ke konstanta $-6$."
    },
    "subTopicSlug": "skema-horner",
    "bab": "Aljabar",
    "subBab": "Skema Horner",
    "subTopic": "Skema Horner",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-polinom-horner-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-horner",
    "category": "Pembagian Berulang oleh Faktor Kuadrat (x - c)^2",
    "difficulty": "sedang",
    "statement": "Suku banyak $P(x) = x^3 - 2x^2 + 5x - 4$ dibagi oleh $(x - 2)^2$ menggunakan metode Horner bertingkat. Sisa pembagian $S(x)$ yang diperoleh adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$9x - 12$",
      "$9x + 6$",
      "$9x - 18$",
      "$5x - 4$",
      "$9x + 12$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jika suku banyak dibagi bertingkat oleh $(x - c)$ dua kali menghasilkan sisa pertama $S_1$ dan sisa kedua $S_2$, maka rumus sisa pembagian total oleh $(x - c)^2$ adalah $S(x) = S_2(x - c) + S_1$.",
      "steps": "1. Lakukan pembagian pertama pada koefisien $[1, -2, 5, -4]$ dengan $k = 2$:\n- 1 turun; $1(2) = 2 \\implies -2 + 2 = 0$\n- $0(2) = 0 \\implies 5 + 0 = 5$\n- $5(2) = 10 \\implies -4 + 10 = 6$\nDiperoleh sisa pertama $S_1 = 6$ dan koefisien hasil bagi sementara $[1, 0, 5]$.<br>2. Lakukan pembagian kedua pada koefisien $[1, 0, 5]$ dengan $k = 2$:\n- 1 turun; $1(2) = 2 \\implies 0 + 2 = 2$\n- $2(2) = 4 \\implies 5 + 4 = 9$\nDiperoleh sisa kedua $S_2 = 9$.<br>3. Susun rumus sisa total:\n$$S(x) = S_2(x - 2) + S_1 = 9(x - 2) + 6 = 9x - 18 + 6 = 9x - 12$$<br>4. Jadi sisa pembagiannya adalah $9x - 12$ (pilihan A).",
      "pitfalls": "Lupa mengalikan $S_2$ dengan $(x - 2)$ sehingga langsung menjumlahkan $S_2 + S_1 = 15$."
    },
    "subTopicSlug": "skema-horner",
    "bab": "Aljabar",
    "subBab": "Skema Horner",
    "subTopic": "Skema Horner",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-polinom-horner-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-horner",
    "category": "Bagan Horner dengan Pengali Pecahan Negatif",
    "difficulty": "sedang",
    "statement": "Suku banyak $P(x) = 6x^3 + 7x^2 - x + 4$ dibagi oleh $(3x + 2)$ dengan metode skema Horner. Hasil bagi dan sisa pembagian yang benar berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Hasil bagi $2x^2 + x - 1$ dan sisa 6",
      "Hasil bagi $6x^2 + 3x - 3$ dan sisa 6",
      "Hasil bagi $2x^2 - x + 1$ dan sisa 6",
      "Hasil bagi $2x^2 + x - 1$ dan sisa 2",
      "Hasil bagi $3x^2 + x - 1$ dan sisa 6"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk pembagi $(ax + b)$, nilai pembuat nol pada bagan adalah $k = -\\frac{b}{a}$. Hasil bagi sebenarnya diperoleh dengan membagi koefisien baris bawah dengan $a$, sedangkan nilai sisa pada kolom terakhir tidak dibagi dengan $a$.",
      "steps": "1. Pembuat nol dari $3x + 2 = 0$ adalah $k = -\\frac{2}{3}$.<br>2. Baris koefisien: $[6, 7, -1, 4]$. Jalankan bagan Horner:\n- Turunkan 6\n- $6 \\times \\left(-\\frac{2}{3}\\right) = -4 \\implies 7 + (-4) = 3$\n- $3 \\times \\left(-\\frac{2}{3}\\right) = -2 \\implies -1 + (-2) = -3$\n- $-3 \\times \\left(-\\frac{2}{3}\\right) = 2 \\implies 4 + 2 = 6$\n3. Diperoleh baris hasil bagi sementara $[6, 3, -3]$ dan sisa $= 6$.<br>4. Bagi koefisien hasil bagi dengan $a = 3$:\n$$H(x) = \\frac{6x^2 + 3x - 3}{3} = 2x^2 + x - 1$$<br>5. Jadi hasil bagi adalah $2x^2 + x - 1$ dan sisanya adalah 6 (pilihan A).",
      "pitfalls": "Ikut membagi sisa pembagian dengan 3 sehingga menjawab sisa 2, atau lupa membagi hasil bagi dengan 3."
    },
    "subTopicSlug": "skema-horner",
    "bab": "Aljabar",
    "subBab": "Skema Horner",
    "subTopic": "Skema Horner",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
    window.TKA_BANK_SOAL[subTopicSlug] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
