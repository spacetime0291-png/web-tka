/**
 * Batch Task: TASK_fun-mutlak-dasar-pertidaksamaan_EASY
 * SubTopic: Pertidaksamaan & Nilai Mutlak: Pertidaksamaan Nilai Mutlak (fun-mutlak-dasar-pertidaksamaan)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-mutlak-dasar-pertidaksamaan-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-pertidaksamaan",
    category: "Pertidaksamaan Nilai Mutlak Dasar Kurang Dari",
    difficulty: "mudah",
    statement: "Himpunan penyelesaian dari pertidaksamaan nilai mutlak $|x| < 4$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid -4 < x < 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -4 \\text{ atau } x > 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -4 \\le x \\le 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 0 \\le x < 4\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Sifat dasar pertidaksamaan nilai mutlak menyatakan bahwa untuk $a > 0$, bentuk $|x| < a$ ekuivalen dengan rentang $-a < x < a$.",
      steps: "1. Terapkan sifat pertidaksamaan kurang dari dengan $a = 4$:\n$$|x| < 4 \\iff -4 < x < 4$$\n2. Himpunan penyelesaiannya dituliskan sebagai:\n$$HP = \\{x \\in \\mathbb{R} \\mid -4 < x < 4\\}$$\n3. Jadi, pilihan yang benar adalah pilihan A.",
      pitfalls: "Tertukar dengan sifat lebih dari ($x < -4$ atau $x > 4$) atau menyertakan tanda sama dengan."
    }
  },
  {
    id: "fun-mutlak-dasar-pertidaksamaan-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-pertidaksamaan",
    category: "Pertidaksamaan Nilai Mutlak Linier Kurang Dari Sama Dengan",
    difficulty: "mudah",
    statement: "Himpunan penyelesaian dari pertidaksamaan $|x - 2| \\le 3$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid -1 \\le x \\le 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -5 \\le x \\le 1\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -1 \\text{ atau } x \\ge 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 1 \\le x \\le 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 \\le x \\le 3\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Bentuk $|f(x)| \\le a$ ekuivalen dengan pertidaksamaan ganda $-a \\le f(x) \\le a$.",
      steps: "1. Buka tanda nilai mutlak menjadi pertidaksamaan ganda:\n$$-3 \\le x - 2 \\le 3$$\n2. Tambahkan semua ruas dengan 2:\n$$-3 + 2 \\le x \\le 3 + 2$$\n$$-1 \\le x \\le 5$$\n3. Himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid -1 \\le x \\le 5\\}$.\n4. Jadi, jawaban yang tepat adalah pilihan A.",
      pitfalls: "Lupa menambahkan 2 pada batas kiri sehingga menghasilkan $-3 \\le x \\le 5$."
    }
  },
  {
    id: "fun-mutlak-dasar-pertidaksamaan-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-pertidaksamaan",
    category: "Pertidaksamaan Nilai Mutlak Dasar Lebih Dari",
    difficulty: "mudah",
    statement: "Himpunan penyelesaian dari pertidaksamaan nilai mutlak $|x| > 5$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid -5 < x < 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -5 \\text{ atau } x > 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -5 \\text{ atau } x \\ge 5\\}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Untuk $a > 0$, bentuk $|x| > a$ ekuivalen dengan gabungan dua daerah terpisah: $x < -a$ atau $x > a$.",
      steps: "1. Terapkan sifat pertidaksamaan lebih dari dengan $a = 5$:\n$$|x| > 5 \\iff x < -5 \\quad \\text{atau} \\quad x > 5$$\n2. Himpunan penyelesaiannya dituliskan sebagai:\n$$HP = \\{x \\in \\mathbb{R} \\mid x < -5 \\text{ atau } x > 5\\}$$\n3. Jadi, pilihan yang benar adalah pilihan B.",
      pitfalls: "Tertukar dengan bentuk interval terbuka antara dua bilangan $-5 < x < 5$."
    }
  },
  {
    id: "fun-mutlak-dasar-pertidaksamaan-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-pertidaksamaan",
    category: "Pertidaksamaan Nilai Mutlak dengan Koefisien Variabel",
    difficulty: "mudah",
    statement: "Himpunan penyelesaian dari pertidaksamaan $|2x - 1| < 5$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid -2 < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 < x < 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -2 \\text{ atau } x > 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -2 \\le x \\le 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -4 < x < 6\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gunakan sifat $-a < 2x - 1 < a$, lalu tambahkan 1 dan bagi 2 pada setiap ruas.",
      steps: "1. Uraikan bentuk pertidaksamaan mutlak:\n$$-5 < 2x - 1 < 5$$\n2. Tambahkan 1 pada ketiga ruas:\n$$-5 + 1 < 2x < 5 + 1$$\n$$-4 < 2x < 6$$\n3. Bagi ketiga ruas dengan 2:\n$$-2 < x < 3$$\n4. Himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid -2 < x < 3\\}$.\n5. Jadi, jawaban yang benar adalah pilihan A.",
      pitfalls: "Lupa membagi dengan koefisien 2 sehingga berhenti di rentang $-4 < x < 6$."
    }
  },
  {
    id: "fun-mutlak-dasar-pertidaksamaan-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-pertidaksamaan",
    category: "Pertidaksamaan Nilai Mutlak Lebih Dari Sama Dengan",
    difficulty: "mudah",
    statement: "Himpunan penyelesaian dari pertidaksamaan $|x + 3| \\ge 4$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid -7 \\le x \\le 1\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -7 \\text{ atau } x \\ge 1\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -7 \\text{ atau } x > 1\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -1 \\text{ atau } x \\ge 7\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -1 \\le x \\le 7\\}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Bentuk $|f(x)| \\ge a$ ekuivalen dengan $f(x) \\le -a$ atau $f(x) \\ge a$.",
      steps: "1. Pecah menjadi dua cabang pertidaksamaan:\n- Cabang 1: $x + 3 \\le -4$\n$$x \\le -4 - 3 \\implies x \\le -7$$\n- Cabang 2: $x + 3 \\ge 4$\n$$x \\ge 4 - 3 \\implies x \\ge 1$$\n2. Gabungkan kedua daerah solusi:\n$$HP = \\{x \\in \\mathbb{R} \\mid x \\le -7 \\text{ atau } x \\ge 1\\}$$\n3. Jadi, pilihan yang benar adalah pilihan B.",
      pitfalls: "Tertukar tanda menjadi rentang tertutup $-7 \\le x \\le 1$."
    }
  }
];
