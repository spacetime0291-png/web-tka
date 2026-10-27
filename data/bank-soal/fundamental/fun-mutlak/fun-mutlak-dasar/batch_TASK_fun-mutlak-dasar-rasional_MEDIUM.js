/**
 * Batch Task: TASK_fun-mutlak-dasar-rasional_MEDIUM
 * SubTopic: Pertidaksamaan & Nilai Mutlak: Syarat Fungsi Rasional (fun-mutlak-dasar-rasional)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-mutlak-dasar-rasional-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-rasional",
    category: "Domain Fungsi Rasional Penyebut Kuadrat Trinomial",
    difficulty: "sedang",
    statement: "Daerah asal alami (domain) dari fungsi rasional $f(x) = \\frac{x + 2}{x^2 - 5x + 6}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 2 \\text{ dan } x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -2, x \\neq 2, \\text{ dan } x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -2 \\text{ dan } x \\neq -3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 2 < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 5\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi rasional mensyaratkan penyebut tidak sama dengan nol. Nilai pembuat nol pembilang tidak memengaruhi daerah asal alami kecuali fungsi tidak terdefinisi.",
      steps: "1. Ambil bagian penyebut dan terapkan syarat terdefinisi:\n$$x^2 - 5x + 6 \\neq 0$$\n2. Faktorkan bentuk kuadrat tersebut:\n$$(x - 2)(x - 3) \\neq 0$$\n3. Diperoleh batas nilai yang dilarang:\n$$x \\neq 2 \\quad \\text{dan} \\quad x \\neq 3$$\n4. Daerah asal alami mencakup seluruh bilangan real kecuali $2$ dan $3$:\n$$D_f = \\{x \\in \\mathbb{R} \\mid x \\neq 2 \\text{ dan } x \\neq 3\\}$$\n5. Jadi, jawaban yang tepat adalah pilihan A.",
      pitfalls: "Memasukkan pembuat nol pembilang $x + 2 = 0 \\implies x = -2$ sebagai nilai yang tidak termasuk domain."
    }
  },
  {
    id: "fun-mutlak-dasar-rasional-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-rasional",
    category: "Fungsi Rasional dengan Penyebut Definit Positif",
    difficulty: "sedang",
    statement: "Daerah asal alami dari fungsi rasional $g(x) = \\frac{3x}{x^2 + 4}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -2 \\text{ dan } x \\neq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 0\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > -2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -4\\}$",
      "Seluruh bilangan real $\\mathbb{R}$"
    ],
    correctIndex: 4,
    solution: {
      concept: "Bentuk kuadrat murni yang ditambah konstanta positif ($x^2 + c$, $c > 0$) bersifat definit positif dan tidak pernah bernilai nol untuk setiap $x \\in \\mathbb{R}$.",
      steps: "1. Tinjau penyebut fungsi $x^2 + 4$.\n2. Untuk setiap bilangan real $x$, kuadratnya selalu bernilai non-negatif ($x^2 \\ge 0$).\n3. Maka berlaku:\n$$x^2 + 4 \\ge 0 + 4 = 4 > 0$$\n4. Karena penyebut tidak pernah bernilai nol untuk bilangan real berapapun, fungsi terdefinisi di mana saja.\n5. Jadi, daerah asalnya adalah seluruh himpunan bilangan real $\\mathbb{R}$ (pilihan E).",
      pitfalls: "Menganggap $x^2 + 4$ dapat difaktorkan menjadi $(x - 2)(x + 2)$ di himpunan bilangan real sehingga memilih $x \\neq \\pm 2$."
    }
  },
  {
    id: "fun-mutlak-dasar-rasional-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-rasional",
    category: "Domain Fungsi Rasional Bertingkat Pecahan",
    difficulty: "sedang",
    statement: "Daerah asal alami dari fungsi pecahan bersusun $h(x) = \\frac{1}{1 - \\frac{2}{x}}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 0\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 0 \\text{ dan } x \\neq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 0 \\text{ dan } x \\neq -2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 2\\}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada pecahan bersusun, syarat penyebut tidak sama dengan nol harus diterapkan pada setiap penyebut yang muncul di semua tingkatan pecahan.",
      steps: "1. Syarat pada pecahan dalam $\\frac{2}{x}$:\n$$x \\neq 0$$\n2. Syarat pada penyebut utama $1 - \\frac{2}{x}$:\n$$1 - \\frac{2}{x} \\neq 0 \\implies \\frac{x - 2}{x} \\neq 0 \\implies x - 2 \\neq 0 \\implies x \\neq 2$$\n3. Gabungkan kedua syarat domain:\n$$D_h = \\{x \\in \\mathbb{R} \\mid x \\neq 0 \\text{ dan } x \\neq 2\\}$$\n4. Jadi, daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid x \\neq 0 \\text{ dan } x \\neq 2\\}$ (pilihan C).",
      pitfalls: "Hanya menyederhanakan menjadi $\\frac{x}{x - 2}$ lalu menyimpulkan syaratnya hanya $x \\neq 2$, melupakan syarat awal bahwa $x = 0$ membuat suku dalam tidak terdefinisi."
    }
  },
  {
    id: "fun-mutlak-dasar-rasional-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-rasional",
    category: "Batasan Parameter Agar Fungsi Rasional Terdefinisi di Seluruh Bilangan Real",
    difficulty: "sedang",
    statement: "Fungsi $f(x) = \\frac{2x - 1}{x^2 - px + 9}$ terdefinisi untuk seluruh bilangan real $x \\in \\mathbb{R}$. Batasan nilai parameter $p$ yang memenuhi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-3 < p < 3$",
      "$-6 < p < 6$",
      "$p < -6 \\text{ atau } p > 6$",
      "$p < -3 \\text{ atau } p > 3$",
      "$-6 \\le p \\le 6$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Penyebut kuadrat $ax^2 + bx + c$ tidak memiliki pembuat nol real jika diskriminannya bernilai negatif tegas ($D < 0$).",
      steps: "1. Syarat fungsi terdefinisi di seluruh $\\mathbb{R}$ adalah $x^2 - px + 9 \\neq 0$ untuk setiap $x \\in \\mathbb{R}$.\n2. Karena koefisien utama $a = 1 > 0$, maka parabola selalu berada di atas sumbu-$X$ (definit positif) jika diskriminan $D < 0$:\n$$D = b^2 - 4ac < 0$$\n3. Masukkan nilai koefisien $a = 1$, $b = -p$, $c = 9$:\n$$(-p)^2 - 4(1)(9) < 0$$\n$$p^2 - 36 < 0$$\n4. Selesaikan pertidaksamaan kuadrat:\n$$(p - 6)(p + 6) < 0 \\implies -6 < p < 6$$\n5. Jadi, batasan nilai $p$ adalah $-6 < p < 6$ (pilihan B).",
      pitfalls: "Memasukkan tanda sama dengan $(\\le)$ atau keliru dalam mengalikan $4ac = 4 \\times 9 = 36$ menjadi $4 \\times 3 = 12$."
    }
  },
  {
    id: "fun-mutlak-dasar-rasional-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-rasional",
    category: "Penyelesaian Pertidaksamaan Rasional Linier",
    difficulty: "sedang",
    statement: "Himpunan penyelesaian dari pertidaksamaan rasional $\\frac{x - 2}{x + 3} \\le 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid -3 \\le x \\le 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 < x \\le 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -3 \\text{ atau } x \\ge 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 < x < 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -3 \\text{ atau } x \\ge 2\\}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Penyelesaian pertidaksamaan rasional menggunakan pembuat nol pembilang dan penyebut, dengan catatan pembuat nol penyebut tidak pernah boleh masuk ke dalam himpunan penyelesaian ($Q(x) \\neq 0$).",
      steps: "1. Pembuat nol pembilang ($x - 2 = 0 \\implies x = 2$, tanda sama dengan berlaku karena $\\le 0$).\n2. Pembuat nol penyebut ($x + 3 = 0 \\implies x = -3$, tanda tidak sama dengan berlaku karena penyebut $\\neq 0$, sehingga $x \\neq -3$).\n3. Buat garis bilangan dengan titik uji:\n- Untuk $x < -3$ (misal $x = -4$): $\\frac{-6}{-1} = +6 > 0$\n- Untuk $-3 < x < 2$ (misal $x = 0$): $\\frac{-2}{3} < 0$\n- Untuk $x > 2$ (misal $x = 3$): $\\frac{1}{6} > 0$\n4. Daerah yang memenuhi nilai $\\le 0$ adalah $-3 < x \\le 2$.\n5. Jadi, himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid -3 < x \\le 2\\}$ (pilihan B).",
      pitfalls: "Memasukkan tanda sama dengan pada titik $-3$ sehingga memilih $-3 \\le x \\le 2$, yang melanggar syarat penyebut tidak sama dengan nol."
    }
  }
];
