/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Fungsi (mat-alj-fungsi)
 * Sub-Bab: Grafik & Periode Fungsi Trigonometri (mat-alj-fungsi-trigono)
 * Slug: grafik-periode-trigonometri
 * Indikator: Amplitudo, periode gelombang, dan pergeseran fasa fungsi sinus, kosinus, tangen.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-fungsi-trigono";
  const subTopicSlug = "grafik-periode-trigonometri";
  const questions = [
  {
    "id": "mat-alj-fungsi-trigono-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-trigono",
    "category": "Nilai Maksimum Fungsi Sinus",
    "difficulty": "mudah",
    "statement": "Nilai maksimum dari fungsi trigonometri $f(x) = 3\\sin(2x) + 4$ untuk seluruh bilangan real $x \\in \\mathbb{R}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "7",
      "5",
      "4",
      "3",
      "1"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi sinus dasar $\\sin(\\theta)$ memiliki rentang nilai $-1 \\le \\sin(\\theta) \\le 1$. Nilai maksimum dari bentuk umum $f(x) = A\\sin(kx) + c$ dicapai saat nilai sinus sama dengan 1, yaitu bernilai $|A| + c$.",
      "steps": "1. Amati rentang nilai fungsi dasar sinus: $-1 \\le \\sin(2x) \\le 1$.\n2. Nilai maksimum suku sinus terjadi ketika $\\sin(2x) = 1$.\n3. Substitusikan nilai tersebut ke dalam fungsi $f(x)$:\n$$f_{\\text{maks}} = 3(1) + 4 = 3 + 4 = 7$$\n4. Jadi, nilai maksimum fungsi tersebut adalah 7 (pilihan A).",
      "pitfalls": "Terkecoh memasukkan koefisien sudut $2$ ke dalam perhitungan nilai maksimum, padahal koefisien sudut hanya memengaruhi periode gelombang dan bukan nilai puncaknya."
    },
    "subTopicSlug": "grafik-periode-trigonometri",
    "bab": "Aljabar",
    "subBab": "Grafik & Periode Fungsi Trigonometri",
    "subTopic": "Grafik & Periode Fungsi Trigonometri",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Fungsi sinus dasar $\\sin(\\theta)$ memiliki rentang nilai $-1 \\le \\sin(\\theta) \\le 1$. Nilai maksimum dari bentuk umum $f(x) = A\\sin(kx) + c$ dicapai saat nilai sinus sama dengan 1, yaitu bernilai $|A| + c$."
  },
  {
    "id": "mat-alj-fungsi-trigono-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-trigono",
    "category": "Periode Fungsi Trigonometri",
    "difficulty": "mudah",
    "statement": "Periode dari fungsi trigonometri $g(x) = 5\\cos(4x - \\pi)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{\\pi}{2}$",
      "$\\pi$",
      "$2\\pi$",
      "$4\\pi$",
      "$\\frac{\\pi}{4}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Periode gelombang fungsi kosinus $y = A\\cos(kx \\pm c) + d$ dirumuskan sebagai $T = \\frac{2\\pi}{|k|}$, dengan $k$ menyatakan frekuensi sudut atau koefisien dari variabel $x$.",
      "steps": "1. Identifikasi koefisien variabel $x$ pada fungsi $g(x) = 5\\cos(4x - \\pi)$, diperoleh $k = 4$.\n2. Gunakan rumus periode fungsi kosinus:\n$$T = \\frac{2\\pi}{|k|}$$\n3. Substitusikan $k = 4$:\n$$T = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$$\n4. Jadi, periode dari fungsi tersebut adalah $\\frac{\\pi}{2}$ (pilihan A).",
      "pitfalls": "Keliru mengalikan $2\\pi$ dengan $4$ alih-alih membaginya, atau salah menyertakan nilai fasa $-\\pi$ ke dalam perhitungan periode."
    },
    "subTopicSlug": "grafik-periode-trigonometri",
    "bab": "Aljabar",
    "subBab": "Grafik & Periode Fungsi Trigonometri",
    "subTopic": "Grafik & Periode Fungsi Trigonometri",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Periode gelombang fungsi kosinus $y = A\\cos(kx \\pm c) + d$ dirumuskan sebagai $T = \\frac{2\\pi}{|k|}$, dengan $k$ menyatakan frekuensi sudut atau koefisien dari variabel $x$. **Tips:** Keliru mengalikan $2\\pi$ dengan $4$ alih-alih membaginya, atau salah menyertakan nilai fasa $-\\pi$ ke dalam perhitungan periode."
  },
  {
    "id": "mat-alj-fungsi-trigono-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-trigono",
    "category": "Amplitudo Grafik Fungsi Trigonometri",
    "difficulty": "mudah",
    "statement": "Amplitudo dari kurva grafik fungsi trigonometri $f(x) = -4\\cos(3x) + 2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "4",
      "-4",
      "2",
      "6",
      "8"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Amplitudo adalah setengah dari selisih nilai maksimum dan nilai minimum, yang selalu bernilai non-negatif dan dirumuskan sebagai $|A|$ dari fungsi $y = A\\cos(kx) + c$.",
      "steps": "1. Identifikasi koefisien di depan fungsi kosinus: $A = -4$.\n2. Amplitudo didefinisikan sebagai nilai mutlak dari koefisien tersebut:\n$$\\text{Amplitudo} = |A| = |-4| = 4$$\n3. Secara alternatif, nilai maksimum $y_{\\text{maks}} = |-4| + 2 = 6$ dan nilai minimum $y_{\\text{min}} = -|-4| + 2 = -2$.\n$$\\text{Amplitudo} = \\frac{y_{\\text{maks}} - y_{\\text{min}}}{2} = \\frac{6 - (-2)}{2} = \\frac{8}{2} = 4$$\n4. Jadi, amplitudonya adalah 4 (pilihan A).",
      "pitfalls": "Menjawab dengan nilai negatif $-4$, padahal amplitudo merupakan besaran jarak skalar yang selalu bernilai positif."
    },
    "subTopicSlug": "grafik-periode-trigonometri",
    "bab": "Aljabar",
    "subBab": "Grafik & Periode Fungsi Trigonometri",
    "subTopic": "Grafik & Periode Fungsi Trigonometri",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Amplitudo adalah setengah dari selisih nilai maksimum dan nilai minimum, yang selalu bernilai non-negatif dan dirumuskan sebagai $|A|$ dari fungsi $y = A\\cos(kx) + c$. **Tips:** Menjawab dengan nilai negatif $-4$, padahal amplitudo merupakan besaran jarak skalar yang selalu bernilai positif."
  },
  {
    "id": "mat-alj-fungsi-trigono-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-trigono",
    "category": "Titik Potong dengan Sumbu Koordinat",
    "difficulty": "mudah",
    "statement": "Titik potong grafik fungsi trigonometri $f(x) = 2\\sin\\left(x + \\frac{\\pi}{6}\\right)$ dengan sumbu-$Y$ berada pada koordinat ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(0, 1)$",
      "$(0, 2)$",
      "$(0, \\sqrt{3})$",
      "$(0, 0)$",
      "$\\left(0, \\frac{1}{2}\\right)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik potong grafik fungsi trigonometri dengan sumbu-$Y$ diperoleh dengan menetapkan absis $x = 0$ dan mengevaluasi nilai fungsi sudut istimewa yang dihasilkan.",
      "steps": "1. Substitusikan $x = 0$ ke dalam fungsi $f(x)$:\n$$f(0) = 2\\sin\\left(0 + \\frac{\\pi}{6}\\right) = 2\\sin\\left(\\frac{\\pi}{6}\\right)$$\n2. Karena $\\frac{\\pi}{6} = 30^\\circ$, maka $\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$.\n3. Hitung hasil perkalian:\n$$f(0) = 2 \\times \\frac{1}{2} = 1$$\n4. Jadi, titik potong kurva dengan sumbu-$Y$ adalah $(0, 1)$ (pilihan A).",
      "pitfalls": "Salah mengingat nilai sudut istimewa trigonometri, misalnya tertukar antara $\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$ dengan $\\cos\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}\\sqrt{3}$."
    },
    "subTopicSlug": "grafik-periode-trigonometri",
    "bab": "Aljabar",
    "subBab": "Grafik & Periode Fungsi Trigonometri",
    "subTopic": "Grafik & Periode Fungsi Trigonometri",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Titik potong grafik fungsi trigonometri dengan sumbu-$Y$ diperoleh dengan menetapkan absis $x = 0$ dan mengevaluasi nilai fungsi sudut istimewa yang dihasilkan."
  },
  {
    "id": "mat-alj-fungsi-trigono-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-trigono",
    "category": "Nilai Minimum Fungsi Kosinus",
    "difficulty": "mudah",
    "statement": "Nilai minimum dari fungsi $h(x) = 2 - 5\\cos(x)$ untuk seluruh nilai $x \\in \\mathbb{R}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-3",
      "-7",
      "3",
      "7",
      "-5"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Nilai minimum dari bentuk $c - A\\cos(x)$ dengan $A > 0$ diperoleh saat $\\cos(x) = 1$, karena suku pengurang mencapai nilai terbesarnya.",
      "steps": "1. Tinjau batas-batas nilai fungsi kosinus: $-1 \\le \\cos(x) \\le 1$.\n2. Untuk meminimalkan nilai $h(x) = 2 - 5\\cos(x)$, kita harus mengurangkan dengan nilai $5\\cos(x)$ sebesar mungkin, yaitu saat $\\cos(x) = 1$.\n3. Substitusikan $\\cos(x) = 1$:\n$$h_{\\text{min}} = 2 - 5(1) = 2 - 5 = -3$$\n4. (Sebagai perbandingan, nilai maksimum terjadi saat $\\cos(x) = -1$, yaitu $h_{\\text{maks}} = 2 - 5(-1) = 7$).\n5. Jadi, nilai minimum fungsi adalah -3 (pilihan A).",
      "pitfalls": "Terkecoh langsung memasukkan $\\cos(x) = -1$ untuk mencari minimum, padahal tanda minus di depan koefisien membalik peran ekstrim fungsi."
    },
    "subTopicSlug": "grafik-periode-trigonometri",
    "bab": "Aljabar",
    "subBab": "Grafik & Periode Fungsi Trigonometri",
    "subTopic": "Grafik & Periode Fungsi Trigonometri",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Nilai minimum dari bentuk $c - A\\cos(x)$ dengan $A > 0$ diperoleh saat $\\cos(x) = 1$, karena suku pengurang mencapai nilai terbesarnya."
  },
  {
    "id": "mat-alj-fungsi-trigono-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-trigono",
    "category": "Nilai Maksimum Kombinasi Linier Sinus dan Kosinus",
    "difficulty": "sedang",
    "statement": "Nilai maksimum dari fungsi $f(x) = 3\\cos(x) + 4\\sin(x) + 5$ untuk sembarang bilangan real $x \\in \\mathbb{R}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "10",
      "12",
      "8",
      "7",
      "5"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bentuk kombinasi linier $A\\cos(x) + B\\sin(x)$ dapat diubah menjadi bentuk gelombang tunggal $R\\cos(x - \\alpha)$ dengan amplitudo $R = \\sqrt{A^2 + B^2}$. Nilai maksimum bentuk tersebut adalah $R + c$.",
      "steps": "1. Ubah suku trigonometri $3\\cos(x) + 4\\sin(x)$ ke bentuk $R\\cos(x - \\alpha)$:\n$$R = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$\n2. Fungsi dapat ditulis sebagai:\n$$f(x) = 5\\cos(x - \\alpha) + 5$$\n3. Karena nilai maksimum dari $\\cos(x - \\alpha)$ adalah 1, maka:\n$$f_{\\text{maks}} = 5(1) + 5 = 10$$\n4. Jadi, nilai maksimum dari fungsi tersebut adalah 10 (pilihan A).",
      "pitfalls": "Menjumlahkan koefisien secara langsung $3 + 4 + 5 = 12$ tanpa menghitung resultan amplitudo vektor trigonometri $R = \\sqrt{A^2 + B^2}$."
    },
    "subTopicSlug": "grafik-periode-trigonometri",
    "bab": "Aljabar",
    "subBab": "Grafik & Periode Fungsi Trigonometri",
    "subTopic": "Grafik & Periode Fungsi Trigonometri",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Bentuk kombinasi linier $A\\cos(x) + B\\sin(x)$ dapat diubah menjadi bentuk gelombang tunggal $R\\cos(x - \\alpha)$ dengan amplitudo $R = \\sqrt{A^2 + B^2}$. Nilai maksimum bentuk tersebut adalah $R + c$."
  },
  {
    "id": "mat-alj-fungsi-trigono-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-trigono",
    "category": "Banyaknya Titik Potong dengan Sumbu-X",
    "difficulty": "sedang",
    "statement": "Banyaknya titik potong antara kurva grafik fungsi $f(x) = 2\\sin(2x) - 1$ dengan sumbu-$X$ pada interval $0 \\le x \\le \\pi$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2",
      "3",
      "4",
      "1",
      "0"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik potong grafik dengan sumbu-$X$ dicari dengan menyelesaikan persamaan trigonometri $f(x) = 0$ dan menghitung jumlah solusi sudut yang berada dalam batasan interval domain yang ditentukan.",
      "steps": "1. Tetapkan $f(x) = 0$:\n$$2\\sin(2x) - 1 = 0 \\implies \\sin(2x) = \\frac{1}{2}$$\n2. Tentukan batasan sudut untuk $2x$: Karena $0 \\le x \\le \\pi$, maka $0 \\le 2x \\le 2\\pi$.\n3. Cari solusi $2x$ pada kuadran I dan II yang bernilai $\\sin(2x) = \\frac{1}{2}$:\n$$2x_1 = \\frac{\\pi}{6} \\implies x_1 = \\frac{\\pi}{12}$$\n$$2x_2 = \\frac{5\\pi}{6} \\implies x_2 = \\frac{5\\pi}{12}$$\n4. Kedua nilai $x$ tersebut memenuhi interval $0 \\le x \\le \\pi$.\n5. Jadi, terdapat tepat 2 titik potong dengan sumbu-$X$ (pilihan A).",
      "pitfalls": "Lupa menyesuaikan batasan interval sudut argumen $2x$ sehingga mencari solusi langsung untuk batasan $x$ tanpa membagi dua kembali sudutnya."
    },
    "subTopicSlug": "grafik-periode-trigonometri",
    "bab": "Aljabar",
    "subBab": "Grafik & Periode Fungsi Trigonometri",
    "subTopic": "Grafik & Periode Fungsi Trigonometri",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Titik potong grafik dengan sumbu-$X$ dicari dengan menyelesaikan persamaan trigonometri $f(x) = 0$ dan menghitung jumlah solusi sudut yang berada dalam batasan interval domain yang ditentukan."
  },
  {
    "id": "mat-alj-fungsi-trigono-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-trigono",
    "category": "Transformasi dan Pergeseran Fasa Grafik Sinus",
    "difficulty": "sedang",
    "statement": "Persamaan kurva fungsi sinus dengan amplitudo 3, periode $\\pi$, serta mengalami pergeseran fasa horizontal sejauh $\\frac{\\pi}{4}$ satuan ke arah kanan dan pergeseran vertikal ke atas sejauh 2 satuan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$y = 3\\sin\\left(2x - \\frac{\\pi}{2}\\right) + 2$",
      "$y = 3\\sin\\left(2x - \\frac{\\pi}{4}\\right) + 2$",
      "$y = 3\\sin\\left(x - \\frac{\\pi}{4}\\right) + 2$",
      "$y = 3\\sin\\left(2x + \\frac{\\pi}{2}\\right) + 2$",
      "$y = 3\\sin\\left(\\frac{1}{2}x - \\frac{\\pi}{4}\\right) + 2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bentuk umum gelombang sinusoidal bertranslasi adalah $y = A\\sin(k(x - h)) + d$, dengan $A$ amplitudo, $k = \\frac{2\\pi}{T}$, $h$ pergeseran horizontal, dan $d$ pergeseran vertikal.",
      "steps": "1. Tentukan frekuensi sudut dari periode $T = \\pi$:\n$$k = \\frac{2\\pi}{T} = \\frac{2\\pi}{\\pi} = 2$$\n2. Amplitudo $A = 3$, pergeseran horizontal ke kanan $h = \\frac{\\pi}{4}$, dan pergeseran vertikal $d = 2$.\n3. Susun persamaan fungsi:\n$$y = 3\\sin\\left(2\\left(x - \\frac{\\pi}{4}\\right)\\right) + 2$$\n4. Distribusikan faktor pengali 2 ke dalam tanda kurung:\n$$y = 3\\sin\\left(2x - \\frac{\\pi}{2}\\right) + 2$$\n5. Jadi, persamaan kurvanya adalah $y = 3\\sin\\left(2x - \\frac{\\pi}{2}\\right) + 2$ (pilihan A).",
      "pitfalls": "Lupa mengalikan pergeseran fasa horizontal $h$ dengan konstanta frekuensi sudut $k=2$, sehingga salah memilih bentuk $2x - \\frac{\\pi}{4}$."
    },
    "subTopicSlug": "grafik-periode-trigonometri",
    "bab": "Aljabar",
    "subBab": "Grafik & Periode Fungsi Trigonometri",
    "subTopic": "Grafik & Periode Fungsi Trigonometri",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Bentuk umum gelombang sinusoidal bertranslasi adalah $y = A\\sin(k(x - h)) + d$, dengan $A$ amplitudo, $k = \\frac{2\\pi}{T}$, $h$ pergeseran horizontal, dan $d$ pergeseran vertikal."
  },
  {
    "id": "mat-alj-fungsi-trigono-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-trigono",
    "category": "Daerah Hasil (Range) Fungsi Kuadrat Trigonometri",
    "difficulty": "sedang",
    "statement": "Daerah hasil (range) dari fungsi $f(x) = 2\\sin^2(x) - 4\\sin(x) + 5$ untuk seluruh bilangan real $x \\in \\mathbb{R}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{y \\mid 3 \\le y \\le 11,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid 1 \\le y \\le 9,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid 5 \\le y \\le 11,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid 3 \\le y \\le 9,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid 0 \\le y \\le 11,\\; y \\in \\mathbb{R}\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi kuadrat dalam trigonometri $f(u) = au^2 + bu + c$ diselesaikan dengan pemisalan $u = \\sin(x)$ yang memiliki batas tertutup $-1 \\le u \\le 1$, lalu mencari nilai ekstrim pada interval tersebut.",
      "steps": "1. Misalkan $u = \\sin(x)$ dengan interval batas $-1 \\le u \\le 1$.\n2. Bentuk kuadrat menjadi $g(u) = 2u^2 - 4u + 5 = 2(u - 1)^2 + 3$.\n3. Nilai minimum terjadi di titik puncak $u = 1$ (karena $u=1$ berada dalam interval domain):\n$$g(1) = 2(1 - 1)^2 + 3 = 3$$\n4. Nilai maksimum terjadi pada titik ujung yang paling jauh dari $u = 1$, yaitu saat $u = -1$:\n$$g(-1) = 2(-1 - 1)^2 + 3 = 2(-2)^2 + 3 = 2(4) + 3 = 11$$\n5. Oleh karena itu, daerah hasilnya adalah $\\{y \\mid 3 \\le y \\le 11,\\; y \\in \\mathbb{R}\\}$ (pilihan A).",
      "pitfalls": "Hanya menguji batas ujung $u = -1$ dan $u = 1$ tanpa memeriksa keberadaan titik stasioner (puncak) kuadrat di dalam domain."
    },
    "subTopicSlug": "grafik-periode-trigonometri",
    "bab": "Aljabar",
    "subBab": "Grafik & Periode Fungsi Trigonometri",
    "subTopic": "Grafik & Periode Fungsi Trigonometri",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Fungsi kuadrat dalam trigonometri $f(u) = au^2 + bu + c$ diselesaikan dengan pemisalan $u = \\sin(x)$ yang memiliki batas tertutup $-1 \\le u \\le 1$, lalu mencari nilai ekstrim pada interval tersebut."
  },
  {
    "id": "mat-alj-fungsi-trigono-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-trigono",
    "category": "Nilai Ekstrim Fungsi Tangen pada Interval Tertutup",
    "difficulty": "sedang",
    "statement": "Nilai minimum dan maksimum dari fungsi trigonometri $f(x) = 3\\tan^2(x) + 2$ pada interval tertutup $-\\frac{\\pi}{4} \\le x \\le \\frac{\\pi}{4}$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2 dan 5",
      "2 dan 8",
      "-1 dan 5",
      "0 dan 5",
      "2 dan 11"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi tangen $\\tan(x)$ bersifat monoton naik pada interval $-\\frac{\\pi}{4} \\le x \\le \\frac{\\pi}{4}$ dengan rentang $-1 \\le \\tan(x) \\le 1$. Nilai kuadratnya memiliki rentang $0 \\le \\tan^2(x) \\le 1$.",
      "steps": "1. Pada interval $-\\frac{\\pi}{4} \\le x \\le \\frac{\\pi}{4}$, nilai $\\tan(x)$ bergerak dari $\\tan\\left(-\\frac{\\pi}{4}\\right) = -1$ hingga $\\tan\\left(\\frac{\\pi}{4}\\right) = 1$.\n2. Oleh karena itu, nilai kuadrat suku tangen berada pada rentang non-negatif:\n$$0 \\le \\tan^2(x) \\le 1$$\n3. Nilai minimum tercapai saat $\\tan^2(x) = 0$ (pada $x = 0$):\n$$f_{\\text{min}} = 3(0) + 2 = 2$$\n4. Nilai maksimum tercapai saat $\\tan^2(x) = 1$ (pada $x = \\pm \\frac{\\pi}{4}$):\n$$f_{\\text{maks}} = 3(1) + 2 = 5$$\n5. Jadi, nilai minimum dan maksimum berturut-turut adalah 2 dan 5 (pilihan A).",
      "pitfalls": "Mengabaikan sifat kuadrat dan langsung memasukkan $\\tan(x) = -1$ sebagai pembuat minimum yang keliru menganggap nilainya menjadi negatif."
    },
    "subTopicSlug": "grafik-periode-trigonometri",
    "bab": "Aljabar",
    "subBab": "Grafik & Periode Fungsi Trigonometri",
    "subTopic": "Grafik & Periode Fungsi Trigonometri",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Fungsi tangen $\\tan(x)$ bersifat monoton naik pada interval $-\\frac{\\pi}{4} \\le x \\le \\frac{\\pi}{4}$ dengan rentang $-1 \\le \\tan(x) \\le 1$. Nilai kuadratnya memiliki rentang $0 \\le \\tan^2(x) \\le 1$."
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
