/**
 * Batch Task: TASK_mat-lim-fungsi-aljabar_MEDIUM
 * SubTopic: Limit: Limit Fungsi Aljabar (mat-lim-fungsi-aljabar)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-lim-fungsi-aljabar-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-aljabar",
    category: "Limit Bentuk Tak Tentu dengan Perkalian Akar Sekawan Linear",
    difficulty: "sedang",
    statement: "Nilai dari $\\lim_{x \\to 2} \\frac{x - 2}{\\sqrt{2x + 5} - 3}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$\\frac{3}{2}$",
      "$2$",
      "$3$",
      "$6$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Bentuk tak tentu $\\frac{0}{0}$ yang memuat bentuk irasional di penyebut diatasi dengan mengalikan pembilang dan penyebut dengan bentuk sekawannya, yaitu $(\\sqrt{2x + 5} + 3)$, agar diperoleh selisih kuadrat $(a - b)(a + b) = a^2 - b^2$.",
      steps: "1. Substitusi $x = 2$ menghasilkan bentuk $\\frac{2 - 2}{\\sqrt{4 + 5} - 3} = \\frac{0}{3 - 3} = \\frac{0}{0}$.\n2. Kalikan pembilang dan penyebut dengan bentuk sekawan penyebut:\n$$\\lim_{x \\to 2} \\frac{(x - 2)(\\sqrt{2x + 5} + 3)}{(\\sqrt{2x + 5} - 3)(\\sqrt{2x + 5} + 3)}$$\n3. Sederhanakan bentuk penyebut:\n$$(\\sqrt{2x + 5})^2 - 3^2 = (2x + 5) - 9 = 2x - 4 = 2(x - 2)$$\n4. Sederhanakan faktor persekutuan $(x - 2)$:\n$$\\lim_{x \\to 2} \\frac{(x - 2)(\\sqrt{2x + 5} + 3)}{2(x - 2)} = \\lim_{x \\to 2} \\frac{\\sqrt{2x + 5} + 3}{2}$$\n5. Substitusikan $x = 2$:\n$$\\frac{\\sqrt{2(2) + 5} + 3}{2} = \\frac{\\sqrt{9} + 3}{2} = \\frac{3 + 3}{2} = 3$$\n6. Jadi, nilai limit tersebut adalah $3$ (pilihan D).",
      pitfalls: "Lupa memfaktorkan angka 2 dari $(2x - 4)$ sehingga keliru membagi penyebut secara langsung."
    }
  },
  {
    id: "mat-lim-fungsi-aljabar-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-aljabar",
    category: "Limit Menuju Tak Hingga Selisih Dua Bentuk Akar Kuadrat",
    difficulty: "sedang",
    statement: "Nilai dari $\\lim_{x \\to \\infty} \\left(\\sqrt{4x^2 + 8x - 1} - (2x - 3)\\right)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2$",
      "$4$",
      "$5$",
      "$7$",
      "$\\infty$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Ubah suku $(2x - 3)$ menjadi bentuk akar $\\sqrt{(2x - 3)^2} = \\sqrt{4x^2 - 12x + 9}$. Rumus cepat selisih akar kuadrat untuk koefisien $a$ yang sama pada $\\lim_{x \\to \\infty} (\\sqrt{ax^2 + bx + c} - \\sqrt{ax^2 + px + q})$ adalah $L = \\frac{b - p}{2\\sqrt{a}}$.",
      steps: "1. Tulis ulang bentuk aljabar ke dalam selisih dua akar:\n$$(2x - 3) = \\sqrt{(2x - 3)^2} = \\sqrt{4x^2 - 12x + 9}$$\n$$\\lim_{x \\to \\infty} \\left(\\sqrt{4x^2 + 8x - 1} - \\sqrt{4x^2 - 12x + 9}\\right)$$\n2. Identifikasi parameter:\n$$a = 4$$\n$$b = 8$$\n$$p = -12$$\n3. Gunakan rumus limit selisih bentuk akar:\n$$L = \\frac{b - p}{2\\sqrt{a}} = \\frac{8 - (-12)}{2\\sqrt{4}} = \\frac{8 + 12}{2(2)} = \\frac{20}{4} = 5$$\n4. Jadi, nilai limit tersebut adalah $5$ (pilihan C).",
      pitfalls: "Salah mengkuadratkan suku aljabar $(2x - 3)^2$ menjadi $4x^2 - 9$ (lupa suku tengah $-12x$) atau salah memasukkan tanda negatif pada $p = -12$."
    }
  },
  {
    id: "mat-lim-fungsi-aljabar-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-aljabar",
    category: "Menentukan Parameter Limit dari Nilai Limit Diketahui",
    difficulty: "sedang",
    statement: "Jika diketahui $\\lim_{x \\to 3} \\frac{x^2 + ax + b}{x - 3} = 7$, maka nilai dari $a - b$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$9$",
      "$11$",
      "$13$",
      "$15$",
      "$17$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Agar limit fungsi rasional dengan penyebut nol saat $x \\to c$ menghasilkan nilai berhingga, pembilang harus memiliki pembuat nol yang sama ($x = c$), sehingga substitusi $x = c$ ke pembilang harus bernilai 0. Kemudian gunakan dalil L'Hopital atau pemfaktoran aljabar.",
      steps: "1. Karena penyebut $3 - 3 = 0$ dan limit ada ($= 7$), maka pembilang saat $x = 3$ harus nol:\n$$3^2 + a(3) + b = 0 \\implies 9 + 3a + b = 0 \\implies b = -3a - 9$$\n2. Terapkan dalil L'Hopital pada bentuk $\\frac{0}{0}$:\n$$\\lim_{x \\to 3} \\frac{\\frac{d}{dx}(x^2 + ax + b)}{\\frac{d}{dx}(x - 3)} = \\lim_{x \\to 3} \\frac{2x + a}{1} = 2(3) + a = 6 + a$$\n3. Samakan dengan nilai limit yang diketahui:\n$$6 + a = 7 \\implies a = 1$$\n4. Tentukan nilai $b$:\n$$b = -3(1) - 9 = -12$$\n5. Hitung nilai $a - b$:\n$$a - b = 1 - (-12) = 1 + 12 = 13$$\n6. Jadi, nilai $a - b$ adalah $13$ (pilihan C).",
      pitfalls: "Lupa bahwa $b$ bernilai negatif, sehingga salah menghitung $1 - 12 = -11$ bukan $1 - (-12) = 13$."
    }
  },
  {
    id: "mat-lim-fungsi-aljabar-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-aljabar",
    category: "Limit Fungsi Rasional Bentuk Pemfaktoran Derajat Tiga",
    difficulty: "sedang",
    statement: "Nilai dari $\\lim_{x \\to 2} \\frac{x^3 - 8}{x^2 + x - 6}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2$",
      "$\\frac{12}{5}$",
      "$\\frac{8}{3}$",
      "$3$",
      "$\\frac{16}{5}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Faktorkan selisih dua kubik pada pembilang menggunakan rumus aljabar $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$ dan faktorkan bentuk kuadrat penyebut untuk mengeliminasi pembuat nol $(x - 2)$.",
      steps: "1. Uji substitusi langsung $x = 2$ menghasilkan bentuk $\\frac{8 - 8}{4 + 2 - 6} = \\frac{0}{0}$.\n2. Faktorkan pembilang:\n$$x^3 - 8 = x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)$$\n3. Faktorkan penyebut:\n$$x^2 + x - 6 = (x - 2)(x + 3)$$\n4. Sederhanakan faktor $(x - 2)$:\n$$\\lim_{x \\to 2} \\frac{(x - 2)(x^2 + 2x + 4)}{(x - 2)(x + 3)} = \\lim_{x \\to 2} \\frac{x^2 + 2x + 4}{x + 3}$$\n5. Substitusikan $x = 2$:\n$$\\frac{2^2 + 2(2) + 4}{2 + 3} = \\frac{4 + 4 + 4}{5} = \\frac{12}{5}$$\n6. Jadi, nilai limitnya adalah $\\frac{12}{5}$ (pilihan B).",
      pitfalls: "Salah menjabarkan rumus selisih kubik, misalnya menganggap $(x^3 - 8) = (x - 2)^3$ atau salah tanda pada suku tengah $(x^2 - 2x + 4)$."
    }
  },
  {
    id: "mat-lim-fungsi-aljabar-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-aljabar",
    category: "Limit Selisih Dua Bentuk Akar Kuadrat Rasional",
    difficulty: "sedang",
    statement: "Nilai dari $\\lim_{x \\to 0} \\frac{x}{\\sqrt{1 + 3x} - \\sqrt{1 - 2x}}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{5}$",
      "$\\frac{2}{5}$",
      "$\\frac{1}{2}$",
      "$1$",
      "$\\frac{5}{2}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Bentuk tak tentu $\\frac{0}{0}$ dengan selisih dua akar pada penyebut diselesaikan dengan mengalikan pembilang dan penyebut dengan bentuk sekawannya $(\\sqrt{1 + 3x} + \\sqrt{1 - 2x})$.",
      steps: "1. Substitusi langsung $x = 0$ menghasilkan $\\frac{0}{\\sqrt{1} - \\sqrt{1}} = \\frac{0}{0}$.\n2. Kalikan sekawan penyebut:\n$$\\lim_{x \\to 0} \\frac{x(\\sqrt{1 + 3x} + \\sqrt{1 - 2x})}{(\\sqrt{1 + 3x} - \\sqrt{1 - 2x})(\\sqrt{1 + 3x} + \\sqrt{1 - 2x})}$$\n3. Sederhanakan penyebut:\n$$(\\sqrt{1 + 3x})^2 - (\\sqrt{1 - 2x})^2 = (1 + 3x) - (1 - 2x) = 1 + 3x - 1 + 2x = 5x$$\n4. Sederhanakan variabel $x$ pada pembilang dan penyebut:\n$$\\lim_{x \\to 0} \\frac{x(\\sqrt{1 + 3x} + \\sqrt{1 - 2x})}{5x} = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x} + \\sqrt{1 - 2x}}{5}$$\n5. Substitusikan $x = 0$:\n$$\\frac{\\sqrt{1 + 0} + \\sqrt{1 - 0}}{5} = \\frac{1 + 1}{5} = \\frac{2}{5}$$\n6. Jadi, nilai limit tersebut adalah $\\frac{2}{5}$ (pilihan B).",
      pitfalls: "Keliru saat mengurangkan penyebut: $3x - (-2x) = 5x$, bukan $x$."
    }
  }
];
