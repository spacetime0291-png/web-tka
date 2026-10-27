/**
 * Batch Task: TASK_mat-alj-fungsi-domain_MEDIUM
 * SubTopic: Domain, Kodomain, dan Range (mat-alj-fungsi-domain)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-fungsi-domain-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-domain",
    category: "Domain Fungsi Akar Pecahan Rasional",
    difficulty: "sedang",
    statement: "Daerah asal alami ($D_f$) dari fungsi $f(x) = \\sqrt{\\frac{x - 2}{x + 3}}$ pada himpunan bilangan real adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x < -3 \\text{ atau } x \\geq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq -3 \\text{ atau } x \\geq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 < x \\leq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 \\leq x \\leq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 2\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi $f(x) = \\sqrt{\\frac{g(x)}{h(x)}}$ terdefinisi pada himpunan bilangan real jika nilai pecahan di dalam akar non-negatif ($\\frac{g(x)}{h(x)} \\geq 0$) dan penyebutnya tidak sama dengan nol ($h(x) \\neq 0$).",
      steps: "1. Syarat bentuk akar: $\\frac{x - 2}{x + 3} \\geq 0$.<br>2. Syarat penyebut tidak sama dengan nol: $x + 3 \\neq 0 \\implies x \\neq -3$.<br>3. Tentukan titik pembuat nol:\n- Pembilang: $x - 2 = 0 \\implies x = 2$\n- Penyebut: $x + 3 = 0 \\implies x = -3$<br>4. Uji tanda pada garis bilangan:\n- Untuk $x < -3$ (misal $x = -4$): $\\frac{-6}{-1} = 6 > 0$ (positif / memenuhi)\n- Untuk $-3 < x < 2$ (misal $x = 0$): $\\frac{-2}{3} < 0$ (negatif / tidak memenuhi)\n- Untuk $x \\geq 2$ (misal $x = 3$): $\\frac{1}{6} > 0$ (positif / memenuhi)<br>5. Karena penyebut tidak boleh nol, pada $x = -3$ selang terbuka ($x < -3$). Sedangkan pada pembilang $x = 2$ selang tertutup ($x \\geq 2$).<br>6. Jadi daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid x < -3 \\text{ atau } x \\geq 2\\}$ (pilihan A).",
      pitfalls: "Menutup selang pada penyebut sehingga memilih $x \\leq -3$ yang mengakibatkan penyebut bernilai nol."
    }
  },
  {
    id: "mat-alj-fungsi-domain-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-domain",
    category: "Range Fungsi Rasional Linear (Homografik)",
    difficulty: "sedang",
    statement: "Daerah hasil ($R_f$) dari fungsi rasional homografik $f(x) = \\frac{3x - 1}{x + 2}$ untuk seluruh daerah asal alaminya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{y \\in \\mathbb{R} \\mid y \\neq 3\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\neq -2\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\neq -\\frac{1}{2}\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\neq \\frac{1}{3}\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\in \\mathbb{R}\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Daerah hasil fungsi homografik $f(x) = \\frac{ax + b}{cx + d}$ dapat ditentukan dengan mencari nilai asimtot datarnya $y = \\frac{a}{c}$, atau dengan menyatakan variabel $x$ sebagai fungsi dari $y$ ($x = f^{-1}(y)$) lalu menentukan syarat terdefinisinya $x$.",
      steps: "1. Nyatakan persamaan fungsi dalam $y$:\n$$y = \\frac{3x - 1}{x + 2}$$\n2. Kalikan silang dan kelompokkan variabel $x$:\n$$y(x + 2) = 3x - 1 \\implies yx + 2y = 3x - 1$$\n$$yx - 3x = -2y - 1 \\implies x(y - 3) = -(2y + 1)$$\n3. Isolasi variabel $x$:\n$$x = \\frac{-(2y + 1)}{y - 3} = \\frac{2y + 1}{3 - y}$$\n4. Agar $x$ terdefinisi sebagai bilangan real, penyebutnya tidak boleh bernilai nol:\n$$y - 3 \\neq 0 \\implies y \\neq 3$$\n5. Jadi daerah hasil fungsinya adalah $\\{y \\in \\mathbb{R} \\mid y \\neq 3\\}$ (pilihan A).",
      pitfalls: "Tertukar antara batas domain ($x \\neq -2$) dengan batas range ($y \\neq 3$)."
    }
  },
  {
    id: "mat-alj-fungsi-domain-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-domain",
    category: "Domain Fungsi Logaritma Berbentuk Kuadrat",
    difficulty: "sedang",
    statement: "Daerah asal alami ($D_f$) dari fungsi logaritma $f(x) = \\log(x^2 - 4x - 5)$ pada himpunan bilangan real adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x < -1 \\text{ atau } x > 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -1 < x < 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq -1 \\text{ atau } x \\geq 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -1 \\leq x \\leq 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 5\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi logaritma $f(x) = \\log(g(x))$ terdefinisi pada bilangan real jika dan hanya jika syarat numerusnya bernilai positif murni: $g(x) > 0$.",
      steps: "1. Terapkan syarat numerus logaritma:\n$$x^2 - 4x - 5 > 0$$\n2. Faktorkan persamaan kuadrat:\n$$(x - 5)(x + 1) > 0$$\n3. Pembuat nol pertidaksamaan adalah $x = 5$ dan $x = -1$.<br>4. Uji tanda pada garis bilangan:\n- Karena koefisien $x^2 > 0$ dan tanda pertidaksamaan adalah $> 0$, maka daerah penyelesaian berada di luar interval akar-akar pembuat nol.<br>5. Diperoleh himpunan penyelesaian: $x < -1$ atau $x > 5$.<br>6. Jadi daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid x < -1 \\text{ atau } x > 5\\}$ (pilihan A).",
      pitfalls: "Menyertakan tanda sama dengan ($\geq$) padahal numerus logaritma tidak boleh bernilai nol ($\log(0)$ tidak terdefinisi)."
    }
  },
  {
    id: "mat-alj-fungsi-domain-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-domain",
    category: "Domain Penjumlahan Dua Fungsi Irasional",
    difficulty: "sedang",
    statement: "Daerah asal alami ($D_f$) dari fungsi $f(x) = \\sqrt{x + 4} + \\sqrt{6 - 2x}$ pada himpunan bilangan real adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid -4 \\leq x \\leq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -4 < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq -4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq -4 \\text{ atau } x \\geq 3\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Daerah asal dari jumlah dua fungsi $(f_1 + f_2)(x)$ adalah irisan dari daerah asal masing-masing fungsi: $D_f = D_{f_1} \\cap D_{f_2}$.",
      steps: "1. Syarat eksistensi suku pertama $\\sqrt{x + 4}$:\n$$x + 4 \\geq 0 \\implies x \\geq -4$$\n2. Syarat eksistensi suku kedua $\\sqrt{6 - 2x}$:\n$$6 - 2x \\geq 0 \\implies 6 \\geq 2x \\implies x \\leq 3$$\n3. Lakukan irisan dari kedua pertidaksamaan:\n$$[-4, \\infty) \\cap (-\\infty, 3] = [-4, 3]$$\n4. Diperoleh pertidaksamaan $-4 \\leq x \\leq 3$.<br>5. Jadi daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid -4 \\leq x \\leq 3\\}$ (pilihan A).",
      pitfalls: "Lupa membalik tanda pertidaksamaan saat membagi dengan bilangan negatif pada $-2x \geq -6$."
    }
  },
  {
    id: "mat-alj-fungsi-domain-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-domain",
    category: "Range Fungsi Setengah Lingkaran",
    difficulty: "sedang",
    statement: "Daerah hasil ($R_f$) dari fungsi real $f(x) = \\sqrt{9 - x^2}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{y \\in \\mathbb{R} \\mid 0 \\leq y \\leq 3\\}$",
      "$\\{y \\in \\mathbb{R} \\mid -3 \\leq y \\leq 3\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\geq 0\\}$",
      "$\\{y \\in \\mathbb{R} \\mid 0 < y \\leq 3\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\leq 3\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi $f(x) = \\sqrt{r^2 - x^2}$ merepresentasikan persamaan setengah lingkaran atas dengan pusat $(0,0)$ dan jari-jari $r$. Nilai fungsi selalu non-negatif dan dibatasi oleh nilai jari-jarinya: $0 \\leq y \\leq r$.",
      steps: "1. Tentukan daerah asal fungsi:\n$$9 - x^2 \\geq 0 \\implies x^2 \\leq 9 \\implies -3 \\leq x \\leq 3$$\n2. Untuk nilai $x \\in [-3, 3]$, batas nilai $x^2$ adalah $0 \\leq x^2 \\leq 9$.<br>3. Tentukan interval nilai ekspresi di dalam akar:\n- Saat $x = \\pm 3$, $9 - x^2 = 0 \\implies y = \\sqrt{0} = 0$ (nilai minimum)\n- Saat $x = 0$, $9 - x^2 = 9 \\implies y = \\sqrt{9} = 3$ (nilai maksimum)<br>4. Jadi nilai fungsi $y$ berada pada selang $0 \\leq y \\leq 3$.<br>5. Daerah hasilnya adalah $\\{y \\in \\mathbb{R} \\mid 0 \\leq y \\leq 3\\}$ (pilihan A).",
      pitfalls: "Menyertakan nilai negatif $-3 \\leq y \\leq 3$ karena lupa bahwa akar pangkat dua utama ($\sqrt{\cdot}$) selalu menghasilkan nilai non-negatif."
    }
  }
];
