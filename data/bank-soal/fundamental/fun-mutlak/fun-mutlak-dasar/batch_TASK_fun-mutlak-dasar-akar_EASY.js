/**
 * Batch Task: TASK_fun-mutlak-dasar-akar_EASY
 * SubTopic: Pertidaksamaan & Nilai Mutlak: Syarat Fungsi Bentuk Akar (fun-mutlak-dasar-akar)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-mutlak-dasar-akar-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-akar",
    category: "Syarat Terdefinisi Bentuk Akar Sederhana",
    difficulty: "mudah",
    statement: "Fungsi $f(x) = \\sqrt{x - 4}$ terdefinisi pada himpunan bilangan real jika nilai $x$ memenuhi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x > 4$",
      "$x \\ge 4$",
      "$x \\le 4$",
      "$x < 4$",
      "$x \\neq 4$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Fungsi irasional bentuk akar kuadrat $\\sqrt{g(x)}$ terdefinisi pada himpunan bilangan real jika bilangan di bawah tanda akar (radikan) bernilai non-negatif ($g(x) \\ge 0$).",
      steps: "1. Ambil bilangan di dalam tanda akar:\n$$x - 4$$\n2. Terapkan syarat non-negatif:\n$$x - 4 \\ge 0$$\n3. Pindahkan konstanta 4 ke ruas kanan:\n$$x \\ge 4$$\n4. Jadi, fungsi terdefinisi jika $x \\ge 4$ (pilihan B).",
      pitfalls: "Memilih pertidaksamaan ketat $x > 4$ dan lupa bahwa $\\sqrt{0} = 0$ merupakan bilangan real yang sah."
    }
  },
  {
    id: "fun-mutlak-dasar-akar-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-akar",
    category: "Daerah Asal Alami dengan Koefisien Variabel Negatif",
    difficulty: "mudah",
    statement: "Daerah asal alami (domain) dari fungsi $g(x) = \\sqrt{6 - 2x}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x \\ge 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\ge -3\\}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Saat membagi atau mengalikan kedua ruas pertidaksamaan dengan bilangan negatif, tanda arah pertidaksamaan wajib dibalik.",
      steps: "1. Terapkan syarat radikan non-negatif:\n$$6 - 2x \\ge 0$$\n2. Pindahkan konstanta 6 ke ruas kanan:\n$$-2x \\ge -6$$\n3. Bagi kedua ruas dengan $-2$ dan balikkan tanda pertidaksamaan:\n$$x \\le \\frac{-6}{-2}$$\n$$x \\le 3$$\n4. Daerah asalnya adalah $D_g = \\{x \\in \\mathbb{R} \\mid x \\le 3\\}$.\n5. Jadi, jawaban yang benar adalah pilihan B.",
      pitfalls: "Lupa membalikkan tanda pertidaksamaan saat membagi dengan $-2$ sehingga menghasilkan $x \\ge 3$."
    }
  },
  {
    id: "fun-mutlak-dasar-akar-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-akar",
    category: "Syarat Bentuk Akar Bernilai Nyata",
    difficulty: "mudah",
    statement: "Nilai $x$ yang memenuhi agar bentuk akar $\\sqrt{3x + 9}$ bernilai riil adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x \\ge -3$",
      "$x \\le -3$",
      "$x \\ge 3$",
      "$x > -3$",
      "$x \\neq -3$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Bentuk akar berindeks genap bernilai riil jika ekspresi di dalam akar tidak bernilai negatif.",
      steps: "1. Terapkan syarat numerus akar:\n$$3x + 9 \\ge 0$$\n2. Kurangkan kedua ruas dengan 9:\n$$3x \\ge -9$$\n3. Bagi kedua ruas dengan 3:\n$$x \\ge -3$$\n4. Jadi, nilai $x$ yang memenuhi adalah $x \\ge -3$ (pilihan A).",
      pitfalls: "Kesalahan tanda operasi saat memindahkan konstanta 9 menjadi $+9$ sehingga memilih $x \\ge 3$."
    }
  },
  {
    id: "fun-mutlak-dasar-akar-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-akar",
    category: "Domain Fungsi Irasional Monomial Negatif",
    difficulty: "mudah",
    statement: "Daerah asal dari fungsi $h(x) = \\sqrt{5 - x}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x \\ge 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\ge -5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 5\\}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Syarat agar fungsi terdefinisi adalah nilai di bawah tanda akar lebih besar dari atau sama dengan nol.",
      steps: "1. Tuliskan syarat terdefinisi fungsi irasional:\n$$5 - x \\ge 0$$\n2. Pindahkan suku $-x$ ke ruas kanan:\n$$5 \\ge x$$\n3. Bentuk ini ekuivalen dengan:\n$$x \\le 5$$\n4. Daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid x \\le 5\\}$.\n5. Jadi, jawaban yang tepat adalah pilihan B.",
      pitfalls: "Menulis $x \\ge 5$ karena mengira tanda pertidaksamaan selalu mengarah ke nilai lebih besar."
    }
  },
  {
    id: "fun-mutlak-dasar-akar-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-akar",
    category: "Syarat Terdefinisi Bentuk Akar Kuadratik Linier",
    difficulty: "mudah",
    statement: "Bentuk $\\sqrt{2x - 8}$ terdefinisi pada himpunan bilangan real dengan syarat ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x \\ge 4$",
      "$x > 4$",
      "$x \\le 4$",
      "$x \\ge -4$",
      "$x \\neq 4$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Radikan di dalam akar kuadrat harus bernilai lebih besar atau sama dengan nol ($2x - 8 \\ge 0$).",
      steps: "1. Terapkan syarat radikan non-negatif:\n$$2x - 8 \\ge 0$$\n2. Tambahkan kedua ruas dengan 8:\n$$2x \\ge 8$$\n3. Bagi kedua ruas dengan 2:\n$$x \\ge 4$$\n4. Jadi, syarat terdefinisinya adalah $x \\ge 4$ (pilihan A).",
      pitfalls: "Lupa membagi dengan 2 sehingga menyimpulkan $x \\ge 8$."
    }
  }
];
