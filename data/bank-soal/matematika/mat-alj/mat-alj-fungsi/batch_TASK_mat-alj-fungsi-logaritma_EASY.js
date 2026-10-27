/**
 * Batch Task: TASK_mat-alj-fungsi-logaritma_EASY
 * SubTopic: Fungsi Logaritma (mat-alj-fungsi-logaritma)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-fungsi-logaritma-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-logaritma",
    category: "Asimtot Tegak Fungsi Logaritma",
    difficulty: "mudah",
    statement: "Persamaan garis asimtot tegak dari grafik fungsi logaritma standar $f(x) = \\log(x)$ (dengan basis 10) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x = 0$",
      "$y = 0$",
      "$x = 1$",
      "$y = 1$",
      "$x = -1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi logaritma $f(x) = {}^a\\log(x)$ terdefinisi untuk $x > 0$. Saat nilai $x$ mendekati nol dari arah kanan ($x \\to 0^+$), nilai fungsi menuju $-\\infty$, sehingga garis vertikal $x = 0$ (sumbu-$Y$) merupakan asimtot tegak kurva.",
      steps: "1. Amati domain dari fungsi logaritma $f(x) = \\log(x)$, yaitu syarat numerus $x > 0$.\n2. Saat nilai $x$ mendekati nol dari sisi positif ($x \\to 0^+$), nilai $\\log(x)$ berkurang tanpa batas menuju $-\\infty$.\n3. Garis vertikal yang didekati oleh grafik tanpa pernah disentuh atau dipotong adalah sumbu-$Y$, yang memiliki persamaan garis $x = 0$.\n4. Jadi, persamaan asimtot tegaknya adalah $x = 0$ (pilihan A).",
      pitfalls: "Sering tertukar antara asimtot tegak ($x = 0$) pada kurva fungsi logaritma dengan asimtot datar ($y = 0$) pada kurva fungsi eksponensial."
    }
  },
  {
    id: "mat-alj-fungsi-logaritma-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-logaritma",
    category: "Titik Potong dengan Sumbu Koordinat",
    difficulty: "mudah",
    statement: "Titik potong kurva grafik fungsi $f(x) = {}^2\\log(x)$ dengan sumbu-$X$ berada pada koordinat ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(0, 1)$",
      "$(1, 0)$",
      "$(2, 0)$",
      "$(0, 2)$",
      "$(0, 0)$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Titik potong kurva dengan sumbu-$X$ terjadi saat nilai fungsi $y = f(x) = 0$. Berdasarkan definisi logaritma, ${}^a\\log(1) = 0$ untuk setiap basis $a > 0$ dan $a \\ne 1$.",
      steps: "1. Tetapkan nilai ordinat $y = 0$.\n2. Bentuk persamaan logaritma: ${}^2\\log(x) = 0$.\n3. Berdasarkan definisi bentuk eksponensial:\n$$x = 2^0 = 1$$\n4. Oleh karena itu, koordinat titik potong dengan sumbu-$X$ adalah $(1, 0)$ (pilihan B).",
      pitfalls: "Tertukar dengan titik potong kurva fungsi eksponensial dasar dengan sumbu-$Y$ yang berada di titik $(0, 1)$."
    }
  },
  {
    id: "mat-alj-fungsi-logaritma-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-logaritma",
    category: "Daerah Asal (Domain) Alami Logaritma",
    difficulty: "mudah",
    statement: "Daerah asal (domain) alami dari fungsi logaritma $f(x) = {}^3\\log(2x - 6)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\mid x > 3,\\; x \\in \\mathbb{R}\\}$",
      "$\\{x \\mid x \\ge 3,\\; x \\in \\mathbb{R}\\}$",
      "$\\{x \\mid x > 6,\\; x \\in \\mathbb{R}\\}$",
      "$\\{x \\mid x < 3,\\; x \\in \\mathbb{R}\\}$",
      "$\\{x \\mid x \\ne 3,\\; x \\in \\mathbb{R}\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Syarat numerus dari fungsi logaritma ${}^a\\log(g(x))$ mensyaratkan bahwa argumen numerus harus bernilai positif tegas, yaitu $g(x) > 0$.",
      steps: "1. Tentukan bentuk numerus dari fungsi $f(x) = {}^3\\log(2x - 6)$, yaitu $2x - 6$.\n2. Terapkan syarat numerus logaritma:\n$$2x - 6 > 0$$\n3. Selesaikan pertidaksamaan linier:\n$$2x > 6 \\implies x > 3$$\n4. Jadi, daerah asalnya adalah $D_f = \\{x \\mid x > 3,\\; x \\in \\mathbb{R}\\}$ (pilihan A).",
      pitfalls: "Menyertakan tanda sama dengan ($\ge$) padahal numerus tidak boleh bernilai nol karena nilai logaritma dari bilangan nol tidak terdefinisi pada bilangan riil."
    }
  },
  {
    id: "mat-alj-fungsi-logaritma-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-logaritma",
    category: "Evaluasi Nilai Fungsi Logaritma",
    difficulty: "mudah",
    statement: "Jika $f(x) = {}^2\\log(x + 4) - 1$, maka nilai dari $f(12)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    correctIndex: 2,
    solution: {
      concept: "Evaluasi nilai fungsi logaritma dilakukan dengan menyubstitusikan nilai variabel $x$ ke dalam fungsi kemudian menyederhanakannya menggunakan sifat ${}^a\\log(a^n) = n$.",
      steps: "1. Substitusikan nilai $x = 12$ ke dalam rumus fungsi:\n$$f(12) = {}^2\\log(12 + 4) - 1$$\n2. Hitung nilai numerus: $12 + 4 = 16$.\n3. Sederhanakan bentuk logaritma karena $16 = 2^4$:\n$${}^2\\log(16) = {}^2\\log(2^4) = 4$$\n4. Kurangkan dengan 1:\n$$f(12) = 4 - 1 = 3$$\n5. Jadi, diperoleh nilai $f(12) = 3$ (pilihan C).",
      pitfalls: "Keliru menyederhanakan ${}^2\\log(16)$ menjadi 8 akibat membagi 16 dengan 2, padahal seharusnya mencari eksponen sehingga $2^n = 16$."
    }
  },
  {
    id: "mat-alj-fungsi-logaritma-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-logaritma",
    category: "Karakteristik Kemonotonan Grafik Logaritma",
    difficulty: "mudah",
    statement: "Perhatikan fungsi logaritma $g(x) = {}^{\\frac{1}{2}}\\log(x)$. Karakteristik kemonotonan dari kurva grafik fungsi $g(x)$ untuk seluruh domain $x > 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Monoton naik pada seluruh domainnya",
      "Monoton turun pada seluruh domainnya",
      "Naik untuk $0 < x < 1$ dan turun untuk $x > 1$",
      "Turun untuk $0 < x < 1$ dan naik untuk $x > 1$",
      "Konstan pada seluruh interval $x > 0$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kemonotonan grafik fungsi logaritma $f(x) = {}^a\\log(x)$ ditentukan oleh basis $a$: jika $a > 1$ kurva bersifat monoton naik, sedangkan jika $0 < a < 1$ kurva bersifat monoton turun di seluruh domainnya.",
      steps: "1. Amati basis logaritma dari fungsi $g(x) = {}^{\\frac{1}{2}}\\log(x)$, yaitu $a = \\frac{1}{2}$.\n2. Karena basis $0 < \\frac{1}{2} < 1$, kurva bernilai positif untuk $0 < x < 1$ dan menurun menjadi negatif saat $x > 1$.\n3. Misalkan untuk $x_1 = 2$ dan $x_2 = 4$, diperoleh $g(2) = -1$ dan $g(4) = -2$, di mana $g(2) > g(4)$ padahal $2 < 4$.\n4. Karena untuk setiap $x_1 < x_2$ berlaku $g(x_1) > g(x_2)$, kurva grafik bersifat monoton turun pada seluruh domainnya (pilihan B).",
      pitfalls: "Menganggap semua kurva grafik logaritma selalu monoton naik tanpa memperhatikan bahwa bila basis $0 < a < 1$, fungsi logaritma justru monoton turun."
    }
  }
];
