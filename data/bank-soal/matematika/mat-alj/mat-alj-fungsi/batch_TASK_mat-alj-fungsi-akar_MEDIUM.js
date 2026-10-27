/**
 * Batch Task: TASK_mat-alj-fungsi-akar_MEDIUM
 * SubTopic: Fungsi Irasional (Bentuk Akar) (mat-alj-fungsi-akar)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-fungsi-akar-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-akar",
    category: "Domain Fungsi Akar Campuran Pecahan",
    difficulty: "sedang",
    statement: "Daerah asal alami ($D_f$) dari fungsi real $f(x) = \\frac{\\sqrt{x^2 - 4}}{x - 3}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid (x \\leq -2 \\text{ atau } x \\geq 2) \\text{ dan } x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -2 \\leq x \\leq 2 \\text{ dan } x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 2 \\text{ dan } x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq -2 \\text{ atau } x \\geq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Daerah asal fungsi pecahan yang memuat bentuk akar di pembilangnya harus memenuhi dua syarat serentak: ekspresi di dalam akar non-negatif ($x^2 - 4 \\geq 0$) dan penyebut tidak sama dengan nol ($x - 3 \\neq 0$).",
      steps: "1. Syarat bentuk akar real: $x^2 - 4 \\geq 0$.\nFaktorkan: $(x - 2)(x + 2) \\geq 0 \\implies x \\leq -2$ atau $x \\geq 2$.<br>2. Syarat penyebut tidak sama dengan nol:\n$$x - 3 \\neq 0 \\implies x \\neq 3$$<br>3. Gabungkan kedua syarat dalam irisan:\n$$(x \\leq -2 \\text{ atau } x \\geq 2) \\text{ serta } x \\neq 3$$<br>4. Jadi daerah asal alaminya adalah $\\{x \\in \\mathbb{R} \\mid (x \\leq -2 \\text{ atau } x \\geq 2) \\text{ dan } x \\neq 3\\}$ (pilihan A).",
      pitfalls: "Lupa mengecualikan $x = 3$ dari daerah penyelesaian atau salah menyelesaikan pertidaksamaan kuadrat menjadi $-2 \\leq x \\leq 2$."
    }
  },
  {
    id: "mat-alj-fungsi-akar-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-akar",
    category: "Range Fungsi Akar dengan Refleksi Vertikal",
    difficulty: "sedang",
    statement: "Daerah hasil ($R_f$) dari fungsi real $f(x) = 4 - \\sqrt{2x + 6}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{y \\in \\mathbb{R} \\mid y \\leq 4\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\geq 4\\}$",
      "$\\{y \\in \\mathbb{R} \\mid 0 \\leq y \\leq 4\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\leq 0\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\geq -3\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Bentuk akar utama selalu bernilai $\\sqrt{u} \\geq 0$. Pengali negatif pada suku akar membalik ketidaksamaan menjadi $-\\sqrt{u} \\leq 0$, sehingga fungsi memiliki nilai maksimum lokal pada titik pembuat nol radikan.",
      steps: "1. Tentukan batas nilai suku bentuk akar: $\\sqrt{2x + 6} \\geq 0$ untuk seluruh $x \\geq -3$.<br>2. Kalikan dengan $-1$:\n$$-\\sqrt{2x + 6} \\leq 0$$<br>3. Tambahkan 4 pada kedua ruas:\n$$4 - \\sqrt{2x + 6} \\leq 4$$\nNilai maksimum dicapai saat $x = -3$, yaitu $f(-3) = 4 - 0 = 4$.<br>4. Seiring membesarnya nilai $x$, nilai fungsi berkurang tanpa batas ke arah negatif ($-\\infty$).<br>5. Jadi daerah hasilnya adalah $\\{y \\in \\mathbb{R} \\mid y \\leq 4\\}$ (pilihan A).",
      pitfalls: "Mengabaikan tanda minus di depan akar sehingga keliru menyimpulkan $y \\geq 4$."
    }
  },
  {
    id: "mat-alj-fungsi-akar-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-akar",
    category: "Titik Potong Kurva Akar dengan Garis Lurus",
    difficulty: "sedang",
    statement: "Kurva fungsi bentuk akar $f(x) = \\sqrt{3x + 1}$ dan garis lurus $g(x) = x - 1$ berpotongan pada absis $x$ sebesar ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x = 5$",
      "$x = 0$",
      "$x = 0$ dan $x = 5$",
      "$x = 3$",
      "$x = 4$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Saat menyelesaikan persamaan irasional $\\sqrt{f(x)} = g(x)$, ruas kanan harus non-negatif ($g(x) \\geq 0$) sebelum kedua ruas dikuadratkan untuk menghindari akar semu (*extraneous solutions*).",
      steps: "1. Samakan kedua fungsi: $\\sqrt{3x + 1} = x - 1$.<br>2. Syarat eksistensi: $3x + 1 \\geq 0 \\implies x \\geq -\\frac{1}{3}$, dan syarat ruas kanan non-negatif: $x - 1 \\geq 0 \\implies x \\geq 1$.<br>3. Kuadratkan kedua ruas:\n$$3x + 1 = (x - 1)^2 = x^2 - 2x + 1$$\n4. Pindahkan semua suku ke satu ruas:\n$$x^2 - 5x = 0 \\implies x(x - 5) = 0$$\nDiperoleh calon penyelesaian $x = 0$ atau $x = 5$.<br>5. Uji terhadap syarat $x \\geq 1$:\n- Untuk $x = 0$: $0 < 1$ (tidak memenuhi, karena $\\sqrt{1} = 1 \\neq 0 - 1 = -1$)\n- Untuk $x = 5$: $5 \\geq 1$ (memenuhi, karena $\\sqrt{16} = 4 = 5 - 1 = 4$)<br>6. Jadi absis titik potong yang benar hanya $x = 5$ (pilihan A).",
      pitfalls: "Menyertakan akar semu $x = 0$ sebagai penyelesaian yang sah."
    }
  },
  {
    id: "mat-alj-fungsi-akar-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-akar",
    category: "Domain Fungsi Bentuk Akar Bertingkat",
    difficulty: "sedang",
    statement: "Daerah asal alami ($D_f$) dari fungsi akar bersarang $f(x) = \\sqrt{4 - \\sqrt{x}}$ pada himpunan bilangan real adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid 0 \\leq x \\leq 16\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 0 \\leq x \\leq 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq 16\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 0\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 4 \\leq x \\leq 16\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Untuk fungsi akar bersarang $f(x) = \\sqrt{g(\\sqrt{x})}$, syarat numerus harus dipenuhi pada setiap tingkatan akar: akar bagian dalam harus terdefinisi, dan radikan akar bagian luar harus non-negatif.",
      steps: "1. Syarat akar bagian dalam: $x \\geq 0$.<br>2. Syarat akar bagian luar:\n$$4 - \\sqrt{x} \\geq 0 \\implies \\sqrt{x} \\leq 4$$\n3. Kuadratkan kedua ruas (karena kedua ruas non-negatif):\n$$x \\leq 16$$<br>4. Iriskan kedua syarat:\n$$x \\geq 0 \\text{ dan } x \\leq 16 \\implies 0 \\leq x \\leq 16$$<br>5. Jadi daerah asal alaminya adalah $\\{x \\in \\mathbb{R} \\mid 0 \\leq x \\leq 16\\}$ (pilihan A).",
      pitfalls: "Lupa menguadratkan angka 4 sehingga menyimpulkan $x \\leq 4$, atau lupa syarat akar dalam $x \\geq 0$."
    }
  },
  {
    id: "mat-alj-fungsi-akar-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-akar",
    category: "Invers Fungsi Bentuk Akar",
    difficulty: "sedang",
    statement: "Diketahui fungsi $f(x) = \\sqrt{2x - 5} + 3$ yang terdefinisi untuk $x \\geq \\frac{5}{2}$. Rumus fungsi invers $f^{-1}(x)$ beserta daerah asalnya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$f^{-1}(x) = \\frac{(x - 3)^2 + 5}{2}$ untuk $x \\geq 3$",
      "$f^{-1}(x) = \\frac{(x + 3)^2 - 5}{2}$ untuk $x \\geq 3$",
      "$f^{-1}(x) = \\frac{(x - 3)^2 + 5}{2}$ untuk $x \\geq \\frac{5}{2}$",
      "$f^{-1}(x) = \\frac{(x - 5)^2 + 3}{2}$ untuk $x \\geq 5$",
      "$f^{-1}(x) = 2(x - 3)^2 + 5$ untuk $x \\geq 3$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi invers $f^{-1}(x)$ diperoleh dengan mengisolasi variabel $x$ sebagai fungsi dari $y$. Daerah asal dari fungsi invers ($D_{f^{-1}}$) sama dengan daerah hasil dari fungsi asalnya ($R_f$).",
      steps: "1. Nyatakan fungsi dalam $y$:\n$$y = \\sqrt{2x - 5} + 3$$\n2. Karena $\\sqrt{2x - 5} \\geq 0$, maka $y \\geq 3$. Rentang ini menjadi domain dari $f^{-1}(x)$, yaitu $x \\geq 3$.<br>3. Pindahkan konstanta 3:\n$$y - 3 = \\sqrt{2x - 5}$$\n4. Kuadratkan kedua ruas:\n$$(y - 3)^2 = 2x - 5$$\n5. Isolasi variabel $x$:\n$$2x = (y - 3)^2 + 5 \\implies x = \\frac{(y - 3)^2 + 5}{2}$$\n6. Ganti variabel ke $x$:\n$$f^{-1}(x) = \\frac{(x - 3)^2 + 5}{2} \\text{ untuk } x \\geq 3$$<br>7. Jadi pilihan yang tepat adalah A.",
      pitfalls: "Lupa mencantumkan pembatasan domain $x \\geq 3$ pada fungsi kuadrat hasil invers atau menggunakan batas domain $x \geq 5/2$."
    }
  }
];
