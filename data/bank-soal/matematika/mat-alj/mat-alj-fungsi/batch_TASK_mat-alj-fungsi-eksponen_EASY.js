/**
 * Batch Task: TASK_mat-alj-fungsi-eksponen_EASY
 * SubTopic: Fungsi Eksponensial (mat-alj-fungsi-eksponen)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-fungsi-eksponen-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-eksponen",
    category: "Asimtot Datar Fungsi Eksponensial Dasar",
    difficulty: "mudah",
    statement: "Persamaan garis asimtot datar dari kurva grafik fungsi eksponensial $f(x) = 3^x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$y = 0$",
      "$x = 0$",
      "$y = 1$",
      "$y = 3$",
      "$x = 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi eksponensial standar $f(x) = a^x$ dengan $a > 1$ mendekati nilai 0 saat $x$ menuju $-\\infty$ ($\\lim_{x \\to -\\infty} a^x = 0$), sehingga memiliki asimtot datar pada sumbu-$X$ yaitu garis horizontal $y = 0$.",
      steps: "1. Amati perilaku fungsi $f(x) = 3^x$ saat $x$ menuju nilai negatif yang sangat besar:\n$$\\lim_{x \\to -\\infty} 3^x = \\lim_{x \\to \\infty} \\frac{1}{3^x} = 0$$\n2. Kurva mendekati garis $y = 0$ tetapi tidak pernah menyentuh atau memotongnya untuk setiap bilangan real $x$.<br>3. Jadi persamaan asimtot datarnya adalah $y = 0$ (pilihan A).",
      pitfalls: "Tertukar antara garis horizontal ($y = 0$) dengan garis vertikal sumbu-$Y$ ($x = 0$)."
    }
  },
  {
    id: "mat-alj-fungsi-eksponen-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-eksponen",
    category: "Titik Potong Grafik Eksponen dengan Sumbu-Y",
    difficulty: "mudah",
    statement: "Grafik fungsi eksponensial $f(x) = 2^x$ memotong sumbu-$Y$ pada koordinat titik ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(0, 1)$",
      "$(1, 0)$",
      "$(0, 2)$",
      "$(0, 0)$",
      "$(2, 1)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik potong grafik dengan sumbu-$Y$ diperoleh saat $x = 0$. Untuk setiap bilangan real positif $a$, berlaku sifat pangkat nol: $a^0 = 1$.",
      steps: "1. Substitusikan $x = 0$ ke dalam rumus fungsi:\n$$f(0) = 2^0 = 1$$\n2. Maka titik potong kurva dengan sumbu-$Y$ adalah $(0, 1)$.<br>3. Jadi pilihan yang benar adalah $(0, 1)$ (pilihan A).",
      pitfalls: "Mengira $2^0 = 0$ sehingga memilih $(0, 0)$, atau $2^0 = 2$ sehingga memilih $(0, 2)$."
    }
  },
  {
    id: "mat-alj-fungsi-eksponen-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-eksponen",
    category: "Identifikasi Peluruhan Eksponensial",
    difficulty: "mudah",
    statement: "Di antara fungsi-fungsi eksponensial berikut, yang merupakan fungsi peluruhan eksponensial (grafiknya monoton turun) untuk seluruh $x \\in \\mathbb{R}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$f(x) = \\left(\\frac{1}{2}\\right)^x$",
      "$f(x) = 2^x$",
      "$f(x) = 3^x$",
      "$f(x) = e^x$",
      "$f(x) = 5^{x+1}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi eksponensial $f(x) = a^x$ merupakan fungsi pertumbuhan eksponensial (monoton naik) jika basis $a > 1$, dan merupakan fungsi peluruhan eksponensial (monoton turun) jika basis memenuhi interval $0 < a < 1$.",
      steps: "1. Tinjau nilai basis dari masing-masing pilihan:\n- $f(x) = \\left(\\frac{1}{2}\\right)^x$: basis $a = \\frac{1}{2}$, memenuhi $0 < a < 1$.\n- $f(x) = 2^x, 3^x, e^x, 5^{x+1}$: seluruhnya memiliki basis $a > 1$ (fungsi pertumbuhan naik).<br>2. Karena basis $\\frac{1}{2} < 1$, nilai fungsinya mengecil seiring bertambahnya nilai $x$.<br>3. Jadi fungsi peluruhan eksponensial adalah $f(x) = \\left(\\frac{1}{2}\\right)^x$ (pilihan A).",
      pitfalls: "Mengira fungsi peluruhan harus memiliki tanda minus di depan koefisien utama."
    }
  },
  {
    id: "mat-alj-fungsi-eksponen-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-eksponen",
    category: "Asimtot Datar Fungsi Eksponen Tertranslasi",
    difficulty: "mudah",
    statement: "Persamaan asimtot datar dari kurva grafik fungsi eksponensial $f(x) = 2^{x - 1} - 4$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$y = -4$",
      "$y = 4$",
      "$x = 1$",
      "$y = 0$",
      "$x = -4$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Grafik fungsi eksponensial berbentuk $f(x) = a^{x - h} + k$ memiliki asimtot datar pada garis horizontal $y = k$ yang ditentukan oleh pergeseran vertikal konstanta $k$.",
      steps: "1. Amati suku eksponen $2^{x - 1}$ saat $x \\to -\\infty$:\n$$\\lim_{x \\to -\\infty} 2^{x - 1} = 0$$\n2. Hitung nilai limit fungsi secara keseluruhan:\n$$\\lim_{x \\to -\\infty} f(x) = 0 - 4 = -4$$\n3. Garis horizontal yang didekati kurva tanpa pernah disentuh adalah garis $y = -4$.<br>4. Jadi persamaan asimtot datarnya adalah $y = -4$ (pilihan A).",
      pitfalls: "Mengabaikan konstanta $-4$ dan tetap menjawab $y = 0$."
    }
  },
  {
    id: "mat-alj-fungsi-eksponen-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-eksponen",
    category: "Penentuan Parameter Grafik Fungsi Eksponen",
    difficulty: "mudah",
    statement: "Jika kurva grafik fungsi eksponensial $f(x) = b \\cdot 2^{x + 1}$ melalui titik koordinat $(1, 12)$, maka nilai dari konstanta $b$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "3",
      "2",
      "4",
      "6",
      "1"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jika kurva melalui titik $(x_1, y_1)$, maka koordinat titik tersebut harus memenuhi persamaan fungsi: $y_1 = f(x_1)$.",
      steps: "1. Substitusikan $x = 1$ dan $f(x) = 12$ ke dalam rumus fungsi:\n$$12 = b \\cdot 2^{1 + 1}$$\n2. Sederhanakan bentuk perpangkatan:\n$$12 = b \\cdot 2^2 \\implies 12 = b \\cdot 4$$\n3. Selesaikan untuk mencari nilai $b$:\n$$b = \\frac{12}{4} = 3$$\n4. Jadi nilai konstanta $b$ adalah 3 (pilihan A).",
      pitfalls: "Menghitung $(b \\cdot 2)^{x+1}$ alih-alih $b \\cdot (2^{x+1})$ karena salah aturan prioritas operasi perpangkatan."
    }
  }
];
