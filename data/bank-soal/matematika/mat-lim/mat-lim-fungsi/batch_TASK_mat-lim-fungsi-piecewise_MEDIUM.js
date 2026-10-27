/**
 * Batch Task: TASK_mat-lim-fungsi-piecewise_MEDIUM
 * SubTopic: Limit: Limit Fungsi Piecewise (mat-lim-fungsi-piecewise)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-lim-fungsi-piecewise-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-piecewise",
    category: "Syarat Kekontinuan Fungsi Sepotong",
    difficulty: "sedang",
    statement: "Agar fungsi $f(x) = \\begin{cases} ax + 3, & \\text{untuk } x \\le 2 \\\\ 2x^2 - 1, & \\text{untuk } x > 2 \\end{cases}$ kontinu di titik $x = 2$, maka nilai konstanta $a$ haruslah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Fungsi $f(x)$ dikatakan kontinu di $x = c$ jika memenuhi tiga syarat: $f(c)$ terdefinisi, limit $\\lim_{x \\to c} f(x)$ ada (limit kiri sama dengan limit kanan), dan $\\lim_{x \\to c} f(x) = f(c)$.",
      steps: "1. Hitung limit kiri sekaligus nilai fungsi di $x = 2$:\n$$\\lim_{x \\to 2^-} f(x) = f(2) = a(2) + 3 = 2a + 3$$\n2. Hitung limit kanan di $x = 2$:\n$$\\lim_{x \\to 2^+} f(x) = 2(2^2) - 1 = 2(4) - 1 = 8 - 1 = 7$$\n3. Samakan limit kiri dan limit kanan agar fungsi kontinu:\n$$2a + 3 = 7$$\n$$2a = 4 \\implies a = 2$$\n4. Jadi, nilai konstanta $a$ adalah $2$ (pilihan B).",
      pitfalls: "Lupa mengalikan 2 dengan nilai $x$ pada suku kuadrat atau salah memindahkan suku konstanta $7 - 3$."
    }
  },
  {
    id: "mat-lim-fungsi-piecewise-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-piecewise",
    category: "Limit Dua Sisi dengan Nilai Mutlak",
    difficulty: "sedang",
    statement: "Nilai dari $\\lim_{x \\to 3} \\frac{x^2 - 9}{|x - 3|}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-6$",
      "$0$",
      "$6$",
      "$12$",
      "Tidak ada"
    ],
    correctIndex: 4,
    solution: {
      concept: "Untuk menguji keberadaan limit dua sisi fungsi yang memuat tanda mutlak di sekitar titik kritis pembuat nol, kita harus memeriksa kesamaan antara limit kiri dan limit kanannya.",
      steps: "1. Uji limit kanan ($x \\to 3^+$ di mana $x > 3 \\implies |x - 3| = x - 3$):\n$$\\lim_{x \\to 3^+} \\frac{(x - 3)(x + 3)}{x - 3} = \\lim_{x \\to 3^+} (x + 3) = 3 + 3 = 6$$\n2. Uji limit kiri ($x \\to 3^-$ di mana $x < 3 \\implies |x - 3| = -(x - 3)$):\n$$\\lim_{x \\to 3^-} \\frac{(x - 3)(x + 3)}{-(x - 3)} = \\lim_{x \\to 3^-} -(x + 3) = -(3 + 3) = -6$$\n3. Karena nilai limit kiri ($-6$) tidak sama dengan limit kanan ($6$), maka limit dua sisinya tidak ada.\n4. Jadi, nilai limit tersebut tidak ada (pilihan E).",
      pitfalls: "Hanya menghitung salah satu arah limit saja dan terburu-buru memilih jawaban $6$ atau $-6$."
    }
  },
  {
    id: "mat-lim-fungsi-piecewise-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-piecewise",
    category: "Kekontinuan dengan Dua Parameter Linear",
    difficulty: "sedang",
    statement: "Fungsi $g(x) = \\begin{cases} x + 2a, & \\text{untuk } x < -1 \\\\ ax + b, & \\text{untuk } -1 \\le x \\le 1 \\\\ 3x - 2, & \\text{untuk } x > 1 \\end{cases}$ kontinu untuk semua bilangan real $x$. Nilai dari $a + b$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-1$",
      "$0$",
      "$1$",
      "$2$",
      "$3$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Agar fungsi kontinu di seluruh domain bilangan real, fungsi harus kontinu pada setiap titik peralihan interval, yaitu di $x = -1$ dan $x = 1$.",
      steps: "1. Syarat kontinu di titik batas $x = 1$:\n$$\\lim_{x \\to 1^-} g(x) = \\lim_{x \\to 1^+} g(x)$$\n$$a(1) + b = 3(1) - 2$$\n$$a + b = 1$$\n2. Karena yang ditanyakan pada soal secara langsung adalah nilai dari $a + b$, maka kita langsung memperoleh $a + b = 1$.\n3. (Verifikasi di $x = -1$):\n$$-1 + 2a = a(-1) + b \\implies 3a - b = 1$$\nMenyelesaikan sistem persamaan menghasilkan $a = \\frac{1}{2}$ dan $b = \\frac{1}{2}$, sehingga $a + b = \\frac{1}{2} + \\frac{1}{2} = 1$.\n4. Jadi, nilai $a + b$ adalah $1$ (pilihan C).",
      pitfalls: "Menghabiskan waktu terlalu lama mencari nilai masing-masing variabel $a$ dan $b$ padahal nilai $a + b$ dapat langsung dibaca dari syarat kontinuitas di $x = 1$."
    }
  },
  {
    id: "mat-lim-fungsi-piecewise-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-piecewise",
    category: "Limit Pecahan Nilai Mutlak Kuadrat",
    difficulty: "sedang",
    statement: "Nilai dari $\\lim_{x \\to 1^-} \\frac{|x^2 - 1|}{x - 1}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-2$",
      "$-1$",
      "$0$",
      "$1$",
      "$2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Perhatikan tanda dari argumen di dalam nilai mutlak $(x^2 - 1)$ saat $x$ mendekati 1 dari arah kiri ($x < 1$). Jika $x < 1$ (misalkan $x = 0{,}9$), maka $x^2 < 1$, sehingga $x^2 - 1 < 0$ dan $|x^2 - 1| = -(x^2 - 1)$.",
      steps: "1. Karena $x \\to 1^-$, maka $x^2 < 1 \\implies x^2 - 1 < 0$.\n2. Uraikan bentuk nilai mutlak:\n$$|x^2 - 1| = -(x^2 - 1) = -(x - 1)(x + 1)$$\n3. Masukkan ke dalam ekspresi limit:\n$$\\lim_{x \\to 1^-} \\frac{-(x - 1)(x + 1)}{x - 1} = \\lim_{x \\to 1^-} -(x + 1)$$\n4. Substitusikan $x = 1$:\n$$-(1 + 1) = -2$$\n5. Jadi, nilai limit tersebut adalah $-2$ (pilihan A).",
      pitfalls: "Lupa menganalisis tanda aljabar di sekitar 1 dari arah kiri dan langsung membuka tanda mutlak sebagai $(x^2 - 1)$, yang menghasilkan jawaban salah $+2$."
    }
  },
  {
    id: "mat-lim-fungsi-piecewise-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-piecewise",
    category: "Diskontinuitas yang Dapat Dihilangkan",
    difficulty: "sedang",
    statement: "Diketahui fungsi $f(x) = \\begin{cases} \\frac{x^2 - 4x + 3}{x - 3}, & \\text{untuk } x \\ne 3 \\\\ k, & \\text{untuk } x = 3 \\end{cases}$. Agar fungsi $f(x)$ kontinu di seluruh daerah asalnya, maka nilai $k$ harus sama dengan ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0$",
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Titik diskontinuitas yang dapat dihilangkan (*removable discontinuity*) terjadi ketika limit $\\lim_{x \\to c} f(x)$ ada, dan kekontinuan dicapai dengan menetapkan nilai fungsi $f(c) = k = \\lim_{x \\to c} f(x)$.",
      steps: "1. Hitung nilai limit fungsi saat $x \\to 3$:\n$$\\lim_{x \\to 3} \\frac{x^2 - 4x + 3}{x - 3}$$\n2. Faktorkan pembilang:\n$$x^2 - 4x + 3 = (x - 3)(x - 1)$$\n3. Sederhanakan pecahan:\n$$\\lim_{x \\to 3} \\frac{(x - 3)(x - 1)}{x - 3} = \\lim_{x \\to 3} (x - 1)$$\n4. Substitusikan $x = 3$:\n$$3 - 1 = 2$$\n5. Agar kontinu di $x = 3$, nilai $f(3)$ harus sama dengan nilai limitnya:\n$$f(3) = k = 2$$\n6. Jadi, nilai $k$ yang tepat adalah $2$ (pilihan C).",
      pitfalls: "Salah memfaktorkan pembilang menjadi $(x + 3)(x - 1)$ yang menyebabkan salah perhitungan."
    }
  }
];
