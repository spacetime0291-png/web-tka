/**
 * Batch Task: TASK_mat-alj-fungsi-akar_EASY
 * SubTopic: Fungsi Irasional (Bentuk Akar) (mat-alj-fungsi-akar)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-fungsi-akar-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-akar",
    category: "Syarat Numerus Bentuk Akar",
    difficulty: "mudah",
    statement: "Agar fungsi $f(x) = \\sqrt{3x - 12}$ terdefinisi pada himpunan bilangan real, syarat nilai $x$ yang memenuhi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x \\geq 4$",
      "$x > 4$",
      "$x \\leq 4$",
      "$x \\geq 12$",
      "$x \\neq 4$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi irasional $f(x) = \\sqrt{g(x)}$ bernilai real jika dan hanya jika bentuk di dalam tanda akar (radikan) bernilai non-negatif, yaitu $g(x) \\geq 0$.",
      steps: "1. Terapkan syarat radikan non-negatif:\n$$3x - 12 \\geq 0$$\n2. Selesaikan pertidaksamaan linear:\n$$3x \\geq 12 \\implies x \\geq \\frac{12}{3} \\implies x \\geq 4$$\n3. Jadi syarat nilai $x$ adalah $x \\geq 4$ (pilihan A).",
      pitfalls: "Lupa menyertakan tanda sama dengan ($\geq$ menjadi $>$) atau salah operasi pembagian aljabar."
    }
  },
  {
    id: "mat-alj-fungsi-akar-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-akar",
    category: "Nilai Ekstrem Minimum Fungsi Bentuk Akar",
    difficulty: "mudah",
    statement: "Nilai minimum dari fungsi real $f(x) = \\sqrt{x - 2} + 5$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "5",
      "2",
      "0",
      "7",
      "3"
    ],
    correctIndex: 0,
    solution: {
      concept: "Nilai dari akar pangkat dua utama $\\sqrt{u}$ selalu bernilai lebih besar atau sama dengan nol ($\\sqrt{u} \\geq 0$), dengan nilai minimum sama dengan 0 yang tercapai saat $u = 0$.",
      steps: "1. Syarat daerah asal: $x - 2 \\geq 0 \\implies x \\geq 2$.<br>2. Nilai minimum dari suku bentuk akar $\\sqrt{x - 2}$ adalah 0, tercapai saat $x = 2$.<br>3. Substitusikan nilai minimum ke fungsi $f(x)$:\n$$f_{\\min} = 0 + 5 = 5$$\n4. Jadi nilai minimum fungsi tersebut adalah 5 (pilihan A).",
      pitfalls: "Terkecoh menjawab nilai absis pembuat nol $x = 2$ alih-alih nilai fungsi minimumnya ($y = 5$)."
    }
  },
  {
    id: "mat-alj-fungsi-akar-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-akar",
    category: "Titik Potong Fungsi Akar dengan Sumbu Koordinat",
    difficulty: "mudah",
    statement: "Titik potong kurva grafik fungsi $f(x) = \\sqrt{2x + 8}$ dengan sumbu-$X$ dan sumbu-$Y$ berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-4, 0)$ dan $(0, 2\\sqrt{2})$",
      "$(4, 0)$ dan $(0, 2\\sqrt{2})$",
      "$(-4, 0)$ dan $(0, 8)$",
      "$(-8, 0)$ dan $(0, 4)$",
      "$(-4, 0)$ dan $(0, 4)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik potong sumbu-$X$ diperoleh saat $f(x) = 0$, sedangkan titik potong sumbu-$Y$ diperoleh saat $x = 0$.",
      steps: "1. Titik potong sumbu-$X$ ($y = 0$):\n$$\\sqrt{2x + 8} = 0 \\implies 2x + 8 = 0 \\implies 2x = -8 \\implies x = -4$$\nKoordinat titik potong sumbu-$X$: $(-4, 0)$.<br>2. Titik potong sumbu-$Y$ ($x = 0$):\n$$f(0) = \\sqrt{2(0) + 8} = \\sqrt{8} = 2\\sqrt{2}$$\nKoordinat titik potong sumbu-$Y$: $(0, 2\\sqrt{2})$.<br>3. Jadi titik potong berturut-turut adalah $(-4, 0)$ dan $(0, 2\\sqrt{2})$ (pilihan A).",
      pitfalls: "Menyederhanakan $\\sqrt{8}$ menjadi $4$ alih-alih $2\\sqrt{2}$."
    }
  },
  {
    id: "mat-alj-fungsi-akar-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-akar",
    category: "Karakteristik Monotonik Fungsi Akar",
    difficulty: "mudah",
    statement: "Diberikan fungsi $f(x) = \\sqrt{x + 1}$ untuk $x \\geq -1$. Pernyataan berikut yang benar mengenai karakteristik fungsi tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Fungsi monoton naik pada interval $[-1, \\infty)$",
      "Fungsi monoton turun pada interval $[-1, \\infty)$",
      "Fungsi memiliki nilai maksimum di $x = -1$",
      "Grafik simetris terhadap sumbu-Y",
      "Grafik memotong sumbu-X di titik $(1, 0)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi $f(x) = \\sqrt{x - c}$ memiliki turunan pertama $f'(x) = \\frac{1}{2\\sqrt{x - c}} > 0$ untuk seluruh $x > c$, sehingga grafiknya selalu naik secara monoton (*strictly increasing*).",
      steps: "1. Amati bahwa seiring bertambahnya nilai $x$ dari $-1$ menuju tak hingga, nilai $\\sqrt{x + 1}$ juga terus membesar secara monoton.<br>2. Nilai di titik ujung $x = -1$ adalah $f(-1) = 0$ yang merupakan nilai minimum global (bukan maksimum).<br>3. Titik potong sumbu-$X$ berada pada $(-1, 0)$, bukan $(1, 0)$.<br>4. Jadi karakteristik yang benar adalah fungsi monoton naik pada interval $[-1, \\infty)$ (pilihan A).",
      pitfalls: "Mengira fungsi akar memiliki titik puncak maksimum."
    }
  },
  {
    id: "mat-alj-fungsi-akar-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-akar",
    category: "Domain Fungsi Akar Koefisien Negatif",
    difficulty: "mudah",
    statement: "Daerah asal alami ($D_f$) dari fungsi real $f(x) = \\sqrt{9 - 3x}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x \\leq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq -3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq -3\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Syarat fungsi akar real adalah radikan non-negatif. Perhatikan bahwa membagi atau mengalikan pertidaksamaan dengan bilangan negatif akan membalik arah tanda pertidaksamaan.",
      steps: "1. Terapkan syarat eksistensi akar real:\n$$9 - 3x \\geq 0$$\n2. Pindahkan suku konstanta atau variabel:\n$$-3x \\geq -9$$\n3. Bagi kedua ruas dengan $-3$ dan balik arah tanda pertidaksamaan:\n$$x \\leq \\frac{-9}{-3} \\implies x \\leq 3$$\n4. Jadi daerah asal alaminya adalah $\\{x \\in \\mathbb{R} \\mid x \\leq 3\\}$ (pilihan A).",
      pitfalls: "Lupa membalik tanda pertidaksamaan saat membagi dengan $-3$ sehingga keliru memilih $x \\geq 3$."
    }
  }
];
