/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Fungsi (mat-alj-fungsi)
 * Sub-Bab: Fungsi Nilai Mutlak & Piecewise (mat-alj-fungsi-mutlak)
 * Slug: fungsi-nilai-mutlak-piecewise
 * Indikator: Grafik fungsi sepotong-sepotong (piecewise) dan fungsi nilai mutlak f(x) = |g(x)|.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-fungsi-mutlak";
  const subTopicSlug = "fungsi-nilai-mutlak-piecewise";
  const questions = [
  {
    "id": "mat-alj-fungsi-mutlak-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-mutlak",
    "category": "Titik Puncak Grafik Nilai Mutlak",
    "difficulty": "mudah",
    "statement": "Koordinat titik puncak (titik balik minimum) dari kurva grafik fungsi $f(x) = |x - 4| + 2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(4, 2)$",
      "$(-4, 2)$",
      "$(4, -2)$",
      "$(2, 4)$",
      "$(0, 6)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi nilai mutlak berbentuk $f(x) = a|x - h| + k$ dengan $a > 0$ memiliki titik balik minimum pada $(h, k)$ karena nilai suku mutlak $|x - h| \\ge 0$ dan mencapai nilai terendah nol saat $x = h$.",
      "steps": "1. Amati bentuk fungsi $f(x) = |x - 4| + 2$.\n2. Suku nilai mutlak $|x - 4|$ bernilai minimum sama dengan $0$ ketika $x - 4 = 0$, yaitu $x = 4$.\n3. Substitusikan nilai $x = 4$ ke rumus fungsi:\n$$f(4) = |4 - 4| + 2 = 0 + 2 = 2$$\n4. Jadi, koordinat titik puncak minimum grafik tersebut adalah $(4, 2)$ (pilihan A).",
      "pitfalls": "Sering salah menentukan tanda absis puncak menjadi $x = -4$ akibat keliru membaca pergeseran horizontal fungsi."
    },
    "subTopicSlug": "fungsi-nilai-mutlak-piecewise",
    "bab": "Aljabar",
    "subBab": "Fungsi Nilai Mutlak & Piecewise",
    "subTopic": "Fungsi Nilai Mutlak & Piecewise",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Fungsi nilai mutlak berbentuk $f(x) = a|x - h| + k$ dengan $a > 0$ memiliki titik balik minimum pada $(h, k)$ karena nilai suku mutlak $|x - h| \\ge 0$ dan mencapai nilai terendah nol saat $x = h$. **Tips:** Sering salah menentukan tanda absis puncak menjadi $x = -4$ akibat keliru membaca pergeseran horizontal fungsi."
  },
  {
    "id": "mat-alj-fungsi-mutlak-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-mutlak",
    "category": "Titik Potong dengan Sumbu Koordinat",
    "difficulty": "mudah",
    "statement": "Titik potong grafik fungsi $f(x) = |2x - 6| - 4$ dengan sumbu-$Y$ berada pada koordinat ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(0, 2)$",
      "$(0, -4)$",
      "$(0, 6)$",
      "$(0, -2)$",
      "$(0, 10)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik potong grafik fungsi dengan sumbu-$Y$ ditentukan dengan menyubstitusikan nilai absis $x = 0$ ke dalam persamaan fungsi.",
      "steps": "1. Tetapkan nilai $x = 0$ pada fungsi $f(x) = |2x - 6| - 4$.\n2. Hitung nilai fungsi:\n$$f(0) = |2(0) - 6| - 4 = |-6| - 4$$\n3. Karena $|-6| = 6$, maka:\n$$f(0) = 6 - 4 = 2$$\n4. Jadi, grafik memotong sumbu-$Y$ di titik $(0, 2)$ (pilihan A).",
      "pitfalls": "Keliru menganggap nilai mutlak dari bilangan negatif tetap negatif (misalnya salah menghitung $|-6| = -6$ sehingga menghasilkan $-10$)."
    },
    "subTopicSlug": "fungsi-nilai-mutlak-piecewise",
    "bab": "Aljabar",
    "subBab": "Fungsi Nilai Mutlak & Piecewise",
    "subTopic": "Fungsi Nilai Mutlak & Piecewise",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Titik potong grafik fungsi dengan sumbu-$Y$ ditentukan dengan menyubstitusikan nilai absis $x = 0$ ke dalam persamaan fungsi."
  },
  {
    "id": "mat-alj-fungsi-mutlak-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-mutlak",
    "category": "Daerah Hasil (Range) Fungsi Mutlak",
    "difficulty": "mudah",
    "statement": "Daerah hasil (range) dari grafik fungsi $f(x) = 5 - |x + 3|$ untuk domain $x \\in \\mathbb{R}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{y \\mid y \\le 5,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid y \\ge 5,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid y < 5,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid y \\le -3,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid 0 \\le y \\le 5,\\; y \\in \\mathbb{R}\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Sifat nilai mutlak menyatakan bahwa $|g(x)| \\ge 0$ untuk setiap nilai riil. Mengalikan bentuk tersebut dengan tanda minus akan membalik arah tanda ketaksamaan menjadi $-|g(x)| \\le 0$.",
      "steps": "1. Berdasarkan sifat nilai mutlak, $|x + 3| \\ge 0$ untuk setiap $x \\in \\mathbb{R}$.\n2. Kalikan pertidaksamaan dengan $-1$:\n$$-|x + 3| \\le 0$$\n3. Tambahkan konstanta $5$ pada kedua ruas:\n$$5 - |x + 3| \\le 5$$\n4. Karena $y = f(x) = 5 - |x + 3|$, maka diperoleh hubungan $y \\le 5$.\n5. Daerah hasil fungsi adalah $R_f = \\{y \\mid y \\le 5,\\; y \\in \\mathbb{R}\\}$ (pilihan A).",
      "pitfalls": "Tertukar antara tanda $\\le$ dan $\\ge$ akibat lupa bahwa koefisien tanda negatif di depan nilai mutlak membalik arah ketidaksamaan."
    },
    "subTopicSlug": "fungsi-nilai-mutlak-piecewise",
    "bab": "Aljabar",
    "subBab": "Fungsi Nilai Mutlak & Piecewise",
    "subTopic": "Fungsi Nilai Mutlak & Piecewise",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Sifat nilai mutlak menyatakan bahwa $|g(x)| \\ge 0$ untuk setiap nilai riil. Mengalikan bentuk tersebut dengan tanda minus akan membalik arah tanda ketaksamaan menjadi $-|g(x)| \\le 0$."
  },
  {
    "id": "mat-alj-fungsi-mutlak-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-mutlak",
    "category": "Pembuat Nol Fungsi Nilai Mutlak",
    "difficulty": "mudah",
    "statement": "Grafik fungsi $f(x) = |3x - 9| - 6$ memotong sumbu-$X$ di dua titik berbeda, yaitu $x = x_1$ dan $x = x_2$. Nilai dari $x_1 + x_2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "6",
      "5",
      "4",
      "3",
      "2"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik potong grafik fungsi dengan sumbu-$X$ diperoleh dengan menyelesaikan persamaan $f(x) = 0$, yang mengarah pada bentuk persamaan nilai mutlak $|u| = c$ dengan solusi $u = c$ atau $u = -c$.",
      "steps": "1. Tetapkan nilai fungsi sama dengan nol: $|3x - 9| - 6 = 0$.\n2. Pindahkan konstanta: $|3x - 9| = 6$.\n3. Buka tanda nilai mutlak menjadi dua kasus:\n- Kasus 1: $3x - 9 = 6 \\implies 3x = 15 \\implies x_1 = 5$\n- Kasus 2: $3x - 9 = -6 \\implies 3x = 3 \\implies x_2 = 1$\n4. Hitung jumlah kedua akar:\n$$x_1 + x_2 = 5 + 1 = 6$$\n5. Jadi, nilai $x_1 + x_2$ adalah 6 (pilihan A).",
      "pitfalls": "Hanya menyelesaikan satu kasus positif ($3x - 9 = 6$) dan melupakan cabang solusi negatif dari persamaan nilai mutlak."
    },
    "subTopicSlug": "fungsi-nilai-mutlak-piecewise",
    "bab": "Aljabar",
    "subBab": "Fungsi Nilai Mutlak & Piecewise",
    "subTopic": "Fungsi Nilai Mutlak & Piecewise",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Titik potong grafik fungsi dengan sumbu-$X$ diperoleh dengan menyelesaikan persamaan $f(x) = 0$, yang mengarah pada bentuk persamaan nilai mutlak $|u| = c$ dengan solusi $u = c$ atau $u = -c$."
  },
  {
    "id": "mat-alj-fungsi-mutlak-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-mutlak",
    "category": "Evaluasi Nilai Fungsi Mutlak",
    "difficulty": "mudah",
    "statement": "Diketahui fungsi $f(x) = |x^2 - 10| + |2x - 7|$. Nilai dari $f(3)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Menentukan nilai fungsi dilakukan dengan menyubstitusikan nilai argumen ke dalam rumus fungsi dan menerapkan definisi $|a| = a$ untuk $a \\ge 0$ serta $|a| = -a$ untuk $a < 0$.",
      "steps": "1. Substitusikan $x = 3$ ke dalam rumus fungsi $f(x)$:\n$$f(3) = |3^2 - 10| + |2(3) - 7|$$\n2. Hitung nilai di dalam masing-masing tanda mutlak:\n$$3^2 - 10 = 9 - 10 = -1$$\n$$2(3) - 7 = 6 - 7 = -1$$\n3. Terapkan definisi nilai mutlak:\n$$|-1| = 1$$\n4. Jumlahkan kedua suku:\n$$f(3) = 1 + 1 = 2$$\n5. Jadi, nilai $f(3)$ adalah 2 (pilihan A).",
      "pitfalls": "Kecerobohan saat menjumlahkan nilai negatif di dalam mutlak sebelum menerapkan operasi nilai mutlak, misalnya salah menghitung $(-1) + (-1) = -2$."
    },
    "subTopicSlug": "fungsi-nilai-mutlak-piecewise",
    "bab": "Aljabar",
    "subBab": "Fungsi Nilai Mutlak & Piecewise",
    "subTopic": "Fungsi Nilai Mutlak & Piecewise",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Menentukan nilai fungsi dilakukan dengan menyubstitusikan nilai argumen ke dalam rumus fungsi dan menerapkan definisi $|a| = a$ untuk $a \\ge 0$ serta $|a| = -a$ untuk $a < 0$."
  },
  {
    "id": "mat-alj-fungsi-mutlak-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-mutlak",
    "category": "Perpotongan Grafik Mutlak dengan Garis",
    "difficulty": "sedang",
    "statement": "Kurva grafik fungsi $f(x) = |2x - 4| + 1$ berpotongan dengan garis mendatar $y = 7$ di titik $A(x_1, 7)$ dan titik $B(x_2, 7)$. Jarak antara titik $A$ dan titik $B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "4",
      "6",
      "8",
      "10",
      "12"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Titik potong kurva dengan garis horizontal dicari dengan menyamakan rumus fungsi dengan nilai ordinat garis. Jarak antara dua titik pada garis horizontal sama dengan selisih mutlak dari kedua absisnya, yaitu $|x_1 - x_2|$.",
      "steps": "1. Samakan persamaan fungsi dengan garis $y = 7$:\n$$|2x - 4| + 1 = 7 \\implies |2x - 4| = 6$$\n2. Selesaikan persamaan nilai mutlak untuk kedua cabang:\n- Cabang 1: $2x - 4 = 6 \\implies 2x = 10 \\implies x_1 = 5$\n- Cabang 2: $2x - 4 = -6 \\implies 2x = -2 \\implies x_2 = -1$\n3. Koordinat kedua titik potong adalah $A(5, 7)$ dan $B(-1, 7)$.\n4. Hitung jarak antara kedua titik:\n$$\\text{Jarak } AB = |x_1 - x_2| = |5 - (-1)| = 6$$\n5. Jadi, jarak antara titik $A$ dan $B$ adalah 6 (pilihan B).",
      "pitfalls": "Kekeliruan saat membuka tanda nilai mutlak sering menghasilkan nilai $x_2$ yang keliru jika lupa mengubah tanda ruas kanan menjadi negatif."
    },
    "subTopicSlug": "fungsi-nilai-mutlak-piecewise",
    "bab": "Aljabar",
    "subBab": "Fungsi Nilai Mutlak & Piecewise",
    "subTopic": "Fungsi Nilai Mutlak & Piecewise",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Titik potong kurva dengan garis horizontal dicari dengan menyamakan rumus fungsi dengan nilai ordinat garis. Jarak antara dua titik pada garis horizontal sama dengan selisih mutlak dari kedua absisnya, yaitu $|x_1 - x_2|$."
  },
  {
    "id": "mat-alj-fungsi-mutlak-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-mutlak",
    "category": "Nilai Ekstrim Fungsi Nilai Mutlak Majemuk",
    "difficulty": "sedang",
    "statement": "Nilai minimum dari fungsi $f(x) = |x - 2| + |x - 8|$ untuk sembarang bilangan real $x \\in \\mathbb{R}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Berdasarkan ketaksamaan segitiga $|a| + |b| \\ge |a + b|$, penjumlahan jarak $|x - a| + |x - b|$ bernilai minimum konstan sebesar $|b - a|$ untuk setiap $x$ yang terletak di antara $a$ dan $b$.",
      "steps": "1. Tuliskan ulang bentuk penjumlahan dengan sifat $|x - 8| = |8 - x|$:\n$$f(x) = |x - 2| + |8 - x|$$\n2. Terapkan ketaksamaan segitiga untuk nilai mutlak:\n$$|x - 2| + |8 - x| \\ge |(x - 2) + (8 - x)|$$\n3. Sederhanakan bentuk di dalam nilai mutlak:\n$$|(x - 2) + (8 - x)| = |6| = 6$$\n4. Nilai minimum tersebut tercapai ketika $(x - 2)(8 - x) \\ge 0$, yaitu untuk semua nilai $x$ pada interval tertutup $2 \\le x \\le 8$.\n5. Jadi, nilai minimum dari fungsi $f(x)$ adalah 6 (pilihan C).",
      "pitfalls": "Mencoba mencari turunan fungsi mutlak menggunakan kalkulus biasa tanpa membagi kasus daerah interval atau tanpa memanfaatkan sifat ketaksamaan segitiga."
    },
    "subTopicSlug": "fungsi-nilai-mutlak-piecewise",
    "bab": "Aljabar",
    "subBab": "Fungsi Nilai Mutlak & Piecewise",
    "subTopic": "Fungsi Nilai Mutlak & Piecewise",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Berdasarkan ketaksamaan segitiga $|a| + |b| \\ge |a + b|$, penjumlahan jarak $|x - a| + |x - b|$ bernilai minimum konstan sebesar $|b - a|$ untuk setiap $x$ yang terletak di antara $a$ dan $b$."
  },
  {
    "id": "mat-alj-fungsi-mutlak-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-mutlak",
    "category": "Luas Daerah Dibatasi Kurva Mutlak",
    "difficulty": "sedang",
    "statement": "Luas daerah tertutup yang dibatasi oleh grafik fungsi $f(x) = 6 - |2x|$ dan sumbu-$X$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "12",
      "16",
      "18",
      "24",
      "36"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Grafik fungsi simetris $f(x) = c - |ax|$ yang berada di atas sumbu-$X$ membentuk bangun datar segitiga sama kaki dengan titik puncak pada sumbu-$Y$ dan alas pada sumbu-$X$.",
      "steps": "1. Tentukan titik puncak grafik dengan menetapkan $x = 0$:\n$$f(0) = 6 - |0| = 6 \\implies \\text{Puncak } (0, 6)$$\nSehingga tinggi segitiga adalah $t = 6$.\n2. Tentukan titik potong kurva dengan sumbu-$X$ ($y = 0$):\n$$6 - |2x| = 0 \\implies |2x| = 6 \\implies 2x = \\pm 6 \\implies x = \\pm 3$$\nSehingga kurva memotong sumbu-$X$ di $(-3, 0)$ dan $(3, 0)$.\n3. Panjang alas segitiga adalah jarak antara kedua titik potong:\n$$a = 3 - (-3) = 6$$\n4. Hitung luas segitiga:\n$$L = \\frac{1}{2} \\times a \\times t = \\frac{1}{2} \\times 6 \\times 6 = 18$$\n5. Jadi, luas daerah tertutup tersebut adalah 18 satuan luas (pilihan C).",
      "pitfalls": "Lupa membagi dengan 2 pada rumus luas segitiga sehingga menghasilkan jawaban 36 yang merupakan luas persegi panjang."
    },
    "subTopicSlug": "fungsi-nilai-mutlak-piecewise",
    "bab": "Aljabar",
    "subBab": "Fungsi Nilai Mutlak & Piecewise",
    "subTopic": "Fungsi Nilai Mutlak & Piecewise",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Grafik fungsi simetris $f(x) = c - |ax|$ yang berada di atas sumbu-$X$ membentuk bangun datar segitiga sama kaki dengan titik puncak pada sumbu-$Y$ dan alas pada sumbu-$X$. **Tips:** Lupa membagi dengan 2 pada rumus luas segitiga sehingga menghasilkan jawaban 36 yang merupakan luas persegi panjang."
  },
  {
    "id": "mat-alj-fungsi-mutlak-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-mutlak",
    "category": "Komposisi Fungsi Melibatkan Nilai Mutlak",
    "difficulty": "sedang",
    "statement": "Diketahui fungsi $f(x) = |x - 1|$ dan $g(x) = x^2 - 2x - 2$. Himpunan semua nilai $x$ yang memenuhi persamaan komposisi $(f \\circ g)(x) = 5$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{-2, 4\\}$",
      "$\\{-4, 2\\}$",
      "$\\{-1, 3\\}$",
      "$\\{1, 5\\}$",
      "$\\{-3, 1\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Komposisi $(f \\circ g)(x) = f(g(x))$ diuraikan dengan menyubstitusikan $g(x)$ ke dalam fungsi nilai mutlak $f$, kemudian menyelesaikan persamaan nilai mutlak yang terbentuk.",
      "steps": "1. Tuliskan bentuk komposisi:\n$$(f \\circ g)(x) = f(g(x)) = |(x^2 - 2x - 2) - 1| = |x^2 - 2x - 3|$$\n2. Bentuk persamaan dengan nilai target 5:\n$$|x^2 - 2x - 3| = 5$$\n3. Pisahkan menjadi dua kasus persamaan kuadrat:\n- Kasus 1: $x^2 - 2x - 3 = 5 \\implies x^2 - 2x - 8 = 0$\nFaktorkan: $(x - 4)(x + 2) = 0 \\implies x = 4$ atau $x = -2$.\n- Kasus 2: $x^2 - 2x - 3 = -5 \\implies x^2 - 2x + 2 = 0$\nUji diskriminan: $D = (-2)^2 - 4(1)(2) = 4 - 8 = -4 < 0$ (tidak memiliki akar bilangan real).\n4. Gabungkan seluruh solusi real yang diperoleh:\n$$x \\in \\{-2, 4\\}$$\n5. Jadi, himpunan penyelesaiannya adalah $\\{-2, 4\\}$ (pilihan A).",
      "pitfalls": "Memaksakan mencari solusi pada kasus diskriminan negatif atau salah memfaktorkan persamaan kuadrat pada kasus pertama."
    },
    "subTopicSlug": "fungsi-nilai-mutlak-piecewise",
    "bab": "Aljabar",
    "subBab": "Fungsi Nilai Mutlak & Piecewise",
    "subTopic": "Fungsi Nilai Mutlak & Piecewise",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Komposisi $(f \\circ g)(x) = f(g(x))$ diuraikan dengan menyubstitusikan $g(x)$ ke dalam fungsi nilai mutlak $f$, kemudian menyelesaikan persamaan nilai mutlak yang terbentuk. **Tips:** Memaksakan mencari solusi pada kasus diskriminan negatif atau salah memfaktorkan persamaan kuadrat pada kasus pertama."
  },
  {
    "id": "mat-alj-fungsi-mutlak-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-mutlak",
    "category": "Pertidaksamaan Nilai Mutlak Dua Ruas",
    "difficulty": "sedang",
    "statement": "Himpunan penyelesaian dari pertidaksamaan $|2x - 1| < |x + 4|$ untuk $x \\in \\mathbb{R}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\mid -1 < x < 5\\}$",
      "$\\{x \\mid -5 < x < 1\\}$",
      "$\\{x \\mid x < -1 \\text{ atau } x > 5\\}$",
      "$\\{x \\mid 1 < x < 5\\}$",
      "$\\{x \\mid -1 \\le x \\le 5\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pertidaksamaan berbentuk $|A| < |B|$ dapat diselesaikan dengan menguadratkan kedua ruas, yang setara dengan pemfaktoran selisih kuadrat $(A + B)(A - B) < 0$.",
      "steps": "1. Kuadratkan kedua ruas pertidaksamaan karena kedua ruas non-negatif:\n$$(2x - 1)^2 < (x + 4)^2$$\n2. Pindahkan seluruh suku ke ruas kiri:\n$$(2x - 1)^2 - (x + 4)^2 < 0$$\n3. Terapkan identitas selisih dua kuadrat $P^2 - Q^2 = (P + Q)(P - Q)$:\n$$[(2x - 1) + (x + 4)][(2x - 1) - (x + 4)] < 0$$\n$$(3x + 3)(x - 5) < 0$$\n$$3(x + 1)(x - 5) < 0$$\n4. Tentukan pembuat nol: $x = -1$ dan $x = 5$.\n5. Karena tanda pertidaksamaan adalah kurang dari ($<0$), interval yang memenuhi adalah daerah antara kedua pembuat nol:\n$$-1 < x < 5$$\n6. Jadi, himpunan penyelesaiannya adalah $\\{x \\mid -1 < x < 5\\}$ (pilihan A).",
      "pitfalls": "Keliru saat mengurangkan bentuk aljabar $(2x - 1) - (x + 4)$ sehingga salah mendistribusikan tanda minus menjadi $x + 3$ alih-alih $x - 5$."
    },
    "subTopicSlug": "fungsi-nilai-mutlak-piecewise",
    "bab": "Aljabar",
    "subBab": "Fungsi Nilai Mutlak & Piecewise",
    "subTopic": "Fungsi Nilai Mutlak & Piecewise",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Pertidaksamaan berbentuk $|A| < |B|$ dapat diselesaikan dengan menguadratkan kedua ruas, yang setara dengan pemfaktoran selisih kuadrat $(A + B)(A - B) < 0$."
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
