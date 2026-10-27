/**
 * Batch Task: TASK_fun-mutlak-dasar-pertidaksamaan_MEDIUM
 * SubTopic: Pertidaksamaan & Nilai Mutlak: Pertidaksamaan Nilai Mutlak (fun-mutlak-dasar-pertidaksamaan)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-mutlak-dasar-pertidaksamaan-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-pertidaksamaan",
    category: "Pertidaksamaan Nilai Mutlak Dua Ruas Kurang Dari Sama Dengan",
    difficulty: "sedang",
    statement: "Himpunan penyelesaian dari pertidaksamaan $|2x + 3| \\le |x + 6|$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid -3 \\le x \\le 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -9 \\le x \\le 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -3 \\text{ atau } x \\ge 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -9 \\text{ atau } x \\ge 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 0 \\le x \\le 3\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pertidaksamaan bentuk $|f(x)| \\le |g(x)|$ dapat diselesaikan dengan memfaktorkan selisih kuadrat: $(f(x) - g(x))(f(x) + g(x)) \\le 0$.",
      steps: "1. Kuadratkan kedua ruas persamaan:\n$$(2x + 3)^2 \\le (x + 6)^2$$\n$$(2x + 3)^2 - (x + 6)^2 \\le 0$$\n2. Terapkan identitas selisih kuadrat $a^2 - b^2 = (a - b)(a + b)$:\n$$[(2x + 3) - (x + 6)][(2x + 3) + (x + 6)] \\le 0$$\n$$(x - 3)(3x + 9) \\le 0$$\n$$3(x - 3)(x + 3) \\le 0$$\n3. Bagi kedua ruas dengan 3:\n$$(x - 3)(x + 3) \\le 0$$\n4. Daerah penyelesaian $\\le 0$ terletak di antara kedua akar pembuat nol:\n$$-3 \\le x \\le 3$$\n5. Jadi, himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid -3 \\le x \\le 3\\}$ (pilihan A).",
      pitfalls: "Lupa mendistribusikan tanda minus pada $(x + 6)$ sehingga salah menghitung faktor $(x - 3)$ menjadi $(x + 9)$."
    }
  },
  {
    id: "fun-mutlak-dasar-pertidaksamaan-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-pertidaksamaan",
    category: "Pertidaksamaan Nilai Mutlak Dua Ruas Lebih Dari",
    difficulty: "sedang",
    statement: "Himpunan penyelesaian dari pertidaksamaan $|3x - 2| > |x + 4|$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid -\\frac{1}{2} < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -\\frac{1}{2} \\text{ atau } x > 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -3 \\text{ atau } x > \\frac{1}{2}\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 < x < \\frac{1}{2}\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 3\\}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gunakan pengkuadratan kedua ruas dan faktorisasi selisih kuadrat: $(f(x) - g(x))(f(x) + g(x)) > 0$.",
      steps: "1. Ubah ke bentuk selisih kuadrat:\n$$(3x - 2)^2 - (x + 4)^2 > 0$$\n$$[(3x - 2) - (x + 4)][(3x - 2) + (x + 4)] > 0$$\n$$(2x - 6)(4x + 2) > 0$$\n2. Keluarkan faktor persekutuan numerik:\n$$2(x - 3) \\cdot 2(2x + 1) > 0$$\n$$4(x - 3)(2x + 1) > 0$$\n3. Bagi kedua ruas dengan 4:\n$$(x - 3)(2x + 1) > 0$$\n4. Pembuat nol: $x = 3$ dan $x = -\\frac{1}{2}$.\n5. Karena tanda pertidaksamaan adalah $> 0$, maka daerah penyelesaian berada di luar interval akar:\n$$x < -\\frac{1}{2} \\quad \\text{atau} \\quad x > 3$$\n6. Jadi, himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid x < -\\frac{1}{2} \\text{ atau } x > 3\\}$ (pilihan B).",
      pitfalls: "Memilih daerah di antara dua akar $-\\frac{1}{2} < x < 3$ yang merupakan penyelesaian jika tandanya adalah $< 0$."
    }
  },
  {
    id: "fun-mutlak-dasar-pertidaksamaan-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-pertidaksamaan",
    category: "Pertidaksamaan Nilai Mutlak Dua Batas (Double Bound)",
    difficulty: "sedang",
    statement: "Himpunan penyelesaian dari pertidaksamaan $1 < |x - 2| \\le 4$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid -2 \\le x < 1 \\text{ atau } 3 < x \\le 6\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -2 \\le x \\le 6\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 1 < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -2 < x < 1 \\text{ atau } 3 < x < 6\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < 1 \\text{ atau } x > 3\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pertidaksamaan $a < |u| \\le b$ dipecah menjadi sistem dua kondisi yang harus dipenuhi secara bersamaan: $|u| \\le b$ diiriskan dengan $|u| > a$.",
      steps: "1. Selesaikan batas atas $|x - 2| \\le 4$:\n$$-4 \\le x - 2 \\le 4$$\n$$-2 \\le x \\le 6$$\n2. Selesaikan batas bawah $|x - 2| > 1$:\n$$x - 2 < -1 \\implies x < 1$$\n$$x - 2 > 1 \\implies x > 3$$\n3. Iriskan kedua daerah penyelesaian:\n$$[-2, 6] \\cap ((-\\infty, 1) \\cup (3, \\infty))$$\n4. Diperoleh dua interval gabungan:\n$$-2 \\le x < 1 \\quad \\text{atau} \\quad 3 < x \\le 6$$\n5. Jadi, himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid -2 \\le x < 1 \\text{ atau } 3 < x \\le 6\\}$ (pilihan A).",
      pitfalls: "Hanya menyelesaikan batas atas $|x - 2| \\le 4$ dan mengabaikan pembatasan dari batas bawah."
    }
  },
  {
    id: "fun-mutlak-dasar-pertidaksamaan-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-pertidaksamaan",
    category: "Pertidaksamaan Kuadrat Nilai Mutlak",
    difficulty: "sedang",
    statement: "Himpunan penyelesaian dari pertidaksamaan $|x - 1|^2 - 2|x - 1| - 3 \\le 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid -2 \\le x \\le 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -1 \\le x \\le 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -2 \\text{ atau } x \\ge 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 0 \\le x \\le 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 \\le x \\le 3\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gunakan pemisalan $u = |x - 1| \\ge 0$. Selesaikan pertidaksamaan kuadrat dalam $u$, kemudian kembalikan ke variabel $x$.",
      steps: "1. Misalkan $u = |x - 1|$ dengan syarat $u \\ge 0$:\n$$u^2 - 2u - 3 \\le 0$$\n2. Faktorkan pertidaksamaan kuadrat:\n$$(u - 3)(u + 1) \\le 0$$\n$$-1 \\le u \\le 3$$\n3. Karena $u = |x - 1| \\ge 0$ selalu benar untuk batas bawah $-1$, maka kondisi menyusut menjadi:\n$$0 \\le |x - 1| \\le 3$$\n4. Selesaikan pertidaksamaan mutlak $|x - 1| \\le 3$:\n$$-3 \\le x - 1 \\le 3$$\n$$-2 \\le x \\le 4$$\n5. Jadi, himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid -2 \\le x \\le 4\\}$ (pilihan A).",
      pitfalls: "Membuka nilai mutlak sebelum menyelesaikan pertidaksamaan kuadrat yang membuat proses perhitungan sangat rumit."
    }
  },
  {
    id: "fun-mutlak-dasar-pertidaksamaan-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-pertidaksamaan",
    category: "Pertidaksamaan Pecahan Memuat Nilai Mutlak",
    difficulty: "sedang",
    statement: "Himpunan penyelesaian dari pertidaksamaan pecahan $\\frac{|x + 1|}{x - 2} < 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x < 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < 2 \\text{ dan } x \\neq -1\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -1 < x < 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -1 \\text{ atau } x > 2\\}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pembilang memuat nilai mutlak $|x + 1| \\ge 0$. Agar pecahan bernilai negatif tegas ($< 0$), penyebut harus bernilai negatif dan pembilang tidak boleh bernilai nol.",
      steps: "1. Perhatikan sifat nilai mutlak pada pembilang: $|x + 1| \\ge 0$.\n2. Jika $x = -1$, maka pembilang bernilai 0, sehingga $\\frac{0}{-3} = 0$, yang tidak memenuhi pertidaksamaan ketat $< 0$. Maka $x \\neq -1$.\n3. Untuk $x \\neq -1$, pembilang selalu bernilai positif tegas ($|x + 1| > 0$).\n4. Pecahan bernilai negatif jika pembilang positif dibagi penyebut negatif:\n$$x - 2 < 0 \\implies x < 2$$\n5. Gabungkan syarat penyebut negatif dan $x \\neq -1$:\n$$x < 2 \\quad \\text{dan} \\quad x \\neq -1$$\n6. Jadi, himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid x < 2 \\text{ dan } x \\neq -1\\}$ (pilihan B).",
      pitfalls: "Lupa mengecualikan $x = -1$ sehingga salah memilih $x < 2$ (pilihan A)."
    }
  }
];
