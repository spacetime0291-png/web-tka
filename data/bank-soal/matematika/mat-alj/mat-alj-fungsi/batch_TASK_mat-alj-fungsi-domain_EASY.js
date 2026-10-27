/**
 * Batch Task: TASK_mat-alj-fungsi-domain_EASY
 * SubTopic: Domain, Kodomain, dan Range (mat-alj-fungsi-domain)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-fungsi-domain-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-domain",
    category: "Domain Alami Fungsi Rasional",
    difficulty: "mudah",
    statement: "Daerah asal alami ($D_f$) dari fungsi real $f(x) = \\frac{2x + 1}{x - 3}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -\\frac{1}{2}\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi pecahan aljabar $f(x) = \\frac{g(x)}{h(x)}$ terdefinisi pada himpunan bilangan real jika dan hanya jika penyebutnya tidak bernilai nol, yaitu $h(x) \\neq 0$.",
      steps: "1. Identifikasi bagian penyebut fungsi: $h(x) = x - 3$.<br>2. Terapkan syarat eksistensi nilai real: penyebut tidak boleh nol.<br>$$x - 3 \\neq 0 \\implies x \\neq 3$$<br>3. Nilai pembilang $2x + 1$ terdefinisi untuk seluruh bilangan real.<br>4. Jadi daerah asal alami fungsi adalah $\\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$ (pilihan A).",
      pitfalls: "Menyamakan pembilang dengan nol alih-alih penyebut, sehingga salah memilih $x \\neq -\\frac{1}{2}$."
    }
  },
  {
    id: "mat-alj-fungsi-domain-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-domain",
    category: "Domain Alami Fungsi Bentuk Akar",
    difficulty: "mudah",
    statement: "Daerah asal alami ($D_f$) dari fungsi $f(x) = \\sqrt{2x - 6}$ pada himpunan bilangan real adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 6\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi irasional dalam bentuk akar berpangkat genap $f(x) = \\sqrt{g(x)}$ terdefinisi pada bilangan real jika dan hanya jika ekspresi di dalam tanda akar (radikan) bernilai non-negatif: $g(x) \\geq 0$.",
      steps: "1. Terapkan syarat radikan di dalam tanda akar:<br>$$2x - 6 \\geq 0$$<br>2. Selesaikan pertidaksamaan linear:<br>$$2x \\geq 6 \\implies x \\geq 3$$<br>3. Jadi daerah asal alami fungsi tersebut adalah $\\{x \\in \\mathbb{R} \\mid x \\geq 3\\}$ (pilihan A).",
      pitfalls: "Lupa menyertakan tanda sama dengan ($\geq$ menjadi $>$) atau salah memindahkan suku $-6$."
    }
  },
  {
    id: "mat-alj-fungsi-domain-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-domain",
    category: "Daerah Hasil (Range) Fungsi Kuadrat",
    difficulty: "mudah",
    statement: "Daerah hasil ($R_f$) dari fungsi kuadrat $f(x) = x^2 - 4x + 7$ dengan daerah asal $x \\in \\mathbb{R}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{y \\in \\mathbb{R} \\mid y \\geq 3\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\leq 3\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\geq 2\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\geq 7\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\in \\mathbb{R}\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Untuk fungsi kuadrat $f(x) = ax^2 + bx + c$ dengan $a > 0$, parabola terbuka ke atas sehingga memiliki nilai minimum di titik puncak $y_p = f\\left(-\\frac{b}{2a}\\right)$. Daerah hasilnya adalah $R_f = \\{y \\in \\mathbb{R} \\mid y \\geq y_p\\}$.",
      steps: "1. Tentukan sumbu simetri titik puncak:<br>$$x_p = -\\frac{b}{2a} = -\\frac{-4}{2(1)} = 2$$<br>2. Hitung nilai minimum fungsi di titik puncak:<br>$$y_p = f(2) = (2)^2 - 4(2) + 7 = 4 - 8 + 7 = 3$$<br>3. Karena $a = 1 > 0$, nilai fungsi selalu lebih besar atau sama dengan nilai minimum $y_p = 3$.<br>4. Jadi daerah hasil fungsi adalah $\\{y \\in \\mathbb{R} \\mid y \\geq 3\\}$ (pilihan A).",
      pitfalls: "Mengira nilai absis puncak $x_p = 2$ sebagai batas range atau menganggap batasnya adalah konstanta $c = 7$."
    }
  },
  {
    id: "mat-alj-fungsi-domain-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-domain",
    category: "Range Fungsi Linear Domain Terbatas",
    difficulty: "mudah",
    statement: "Diberikan fungsi linear $f(x) = 3x - 2$ dengan daerah asal $D_f = \\{x \\mid -1 \\leq x \\leq 4, x \\in \\mathbb{R}\\}$. Daerah hasil ($R_f$) dari fungsi tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{y \\mid -5 \\leq y \\leq 10, y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid -5 < y < 10, y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid -1 \\leq y \\leq 10, y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid -5 \\leq y \\leq 12, y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid 1 \\leq y \\leq 10, y \\in \\mathbb{R}\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi linear $f(x) = mx + c$ dengan gradien positif ($m > 0$) bersifat monoton naik, sehingga nilai minimum dan maksimum pada interval tertutup $[a, b]$ dicapai berturut-turut pada ujung-ujung interval: $f(a)$ dan $f(b)$.",
      steps: "1. Evaluasi nilai fungsi pada ujung bawah $x = -1$:<br>$$f(-1) = 3(-1) - 2 = -3 - 2 = -5$$<br>2. Evaluasi nilai fungsi pada ujung atas $x = 4$:<br>$$f(4) = 3(4) - 2 = 12 - 2 = 10$$<br>3. Karena fungsi linear kontinu dan monoton naik, seluruh nilai di antara $-5$ dan $10$ tercakup.<br>4. Jadi daerah hasilnya adalah $\\{y \\mid -5 \\leq y \\leq 10, y \\in \\mathbb{R}\\}$ (pilihan A).",
      pitfalls: "Salah hitung saat mengalikan $3(-1) - 2 = -1$ alih-alih $-5$."
    }
  },
  {
    id: "mat-alj-fungsi-domain-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-domain",
    category: "Domain Fungsi Akar di Bagian Penyebut",
    difficulty: "mudah",
    statement: "Daerah asal alami ($D_f$) dari fungsi $f(x) = \\frac{1}{\\sqrt{5 - x}}$ agar terdefinisi pada himpunan bilangan real adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x < 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 5\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jika bentuk akar berada di penyebut suatu pecahan, ekspresi di dalam akar harus positif murni (strictly greater than zero) karena radikan tidak boleh negatif dan penyebut tidak boleh nol: $g(x) > 0$.",
      steps: "1. Syarat bentuk akar real: $5 - x \\geq 0$.<br>2. Syarat penyebut tidak sama dengan nol: $\\sqrt{5 - x} \\neq 0 \\implies 5 - x \\neq 0$.<br>3. Gabungkan kedua syarat menjadi pertidaksamaan tegas:<br>$$5 - x > 0 \\implies 5 > x \\implies x < 5$$<br>4. Jadi daerah asal alaminya adalah $\\{x \\in \\mathbb{R} \\mid x < 5\\}$ (pilihan A).",
      pitfalls: "Menyertakan tanda sama dengan ($x \\leq 5$) yang akan menyebabkan pembagian dengan nol saat $x = 5$."
    }
  }
];
