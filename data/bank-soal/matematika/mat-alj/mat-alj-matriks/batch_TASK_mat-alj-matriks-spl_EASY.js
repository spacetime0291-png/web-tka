/**
 * Batch Task: TASK_mat-alj-matriks-spl_EASY
 * SubTopic: Matriks pada SPL & Program Linear (mat-alj-matriks-spl)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-matriks-spl-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-spl",
    category: "Representasi Matriks dari SPLDV",
    difficulty: "mudah",
    statement: "Bentuk persamaan matriks yang bersesuaian dengan sistem persamaan linear dua variabel $\\begin{cases} 2x + 3y = 8 \\\\ 5x - y = 3 \\end{cases}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 2 & 3 \\\\ 5 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 3 \\\\ 5 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 5 \\\\ 3 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -1 \\\\ 5 & 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 8 \\\\ 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 2 & 3 \\\\ 5 & -1 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Sistem persamaan linear dapat dituliskan dalam bentuk persamaan matriks $A \\mathbf{x} = \\mathbf{b}$, di mana matriks $A$ adalah matriks koefisien variabel, $\\mathbf{x}$ adalah vektor kolom variabel, dan $\\mathbf{b}$ adalah vektor kolom konstanta hasil.",
      steps: "1. Identifikasi koefisien persamaan 1 ($2x + 3y = 8$): koefisien $x = 2$, koefisien $y = 3$, konstanta $= 8$.<br>2. Identifikasi koefisien persamaan 2 ($5x - 1y = 3$): koefisien $x = 5$, koefisien $y = -1$, konstanta $= 3$.<br>3. Susun matriks koefisien $A = \\begin{pmatrix} 2 & 3 \\\\ 5 & -1 \\end{pmatrix}$, vektor variabel $\\mathbf{x} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$, dan vektor konstanta $\\mathbf{b} = \\begin{pmatrix} 8 \\\\ 3 \\end{pmatrix}$.<br>4. Diperoleh bentuk persamaan matriks: $\\begin{pmatrix} 2 & 3 \\\\ 5 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 3 \\end{pmatrix}$ (pilihan A).",
      pitfalls: "Lupa menyertakan tanda negatif pada koefisien $y$ pada persamaan kedua ($-y$ memiliki koefisien $-1$)."
    }
  },
  {
    id: "mat-alj-matriks-spl-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-spl",
    category: "Formula Aturan Cramer",
    difficulty: "mudah",
    statement: "Diberikan sistem persamaan linear dua variabel $\\begin{cases} ax + by = p \\\\ cx + dy = q \\end{cases}$. Berdasarkan Aturan Cramer, nilai dari variabel $x$ dapat ditentukan melalui rumus ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{\\det \\begin{pmatrix} p & b \\\\ q & d \\end{pmatrix}}{\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}}$",
      "$\\frac{\\det \\begin{pmatrix} a & p \\\\ c & q \\end{pmatrix}}{\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}}$",
      "$\\frac{\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}}{\\det \\begin{pmatrix} p & b \\\\ q & d \\end{pmatrix}}$",
      "$\\frac{\\det \\begin{pmatrix} p & q \\\\ b & d \\end{pmatrix}}{\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}}$",
      "$\\frac{\\det \\begin{pmatrix} b & p \\\\ d & q \\end{pmatrix}}{\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Aturan Cramer menyatakan bahwa untuk sistem $A \\mathbf{x} = \\mathbf{b}$ dengan $\\det(A) \\neq 0$, nilai setiap variabel $x_i$ adalah perbandingan antara determinan matriks $A_i$ (matriks $A$ yang kolom ke-$i$ diganti vektor konstanta $\\mathbf{b}$) terhadap determinan matriks koefisien utama $D$: $x_i = \\frac{D_i}{D}$.",
      steps: "1. Determinan utama sistem adalah $D = \\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$.<br>2. Untuk mencari variabel $x$ (kolom pertama), ganti kolom koefisien $x$ dengan vektor konstanta $\\begin{pmatrix} p \\\\ q \\end{pmatrix}$ sehingga menghasilkan $D_x = \\det \\begin{pmatrix} p & b \\\\ q & d \\end{pmatrix}$.<br>3. Nilai $x$ diperoleh melalui rasio: $x = \\frac{D_x}{D} = \\frac{\\det \\begin{pmatrix} p & b \\\\ q & d \\end{pmatrix}}{\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}}$.<br>4. Jadi rumus yang tepat adalah pilihan A.",
      pitfalls: "Tertukar dengan rumus untuk variabel $y$ yang mengganti kolom kedua ($D_y$)."
    }
  },
  {
    id: "mat-alj-matriks-spl-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-spl",
    category: "Determinan Utama Sistem Persamaan Linear",
    difficulty: "mudah",
    statement: "Diketahui sistem persamaan linear dua variabel $\\begin{cases} 3x - 2y = 7 \\\\ 4x + y = 13 \\end{cases}$. Nilai dari determinan utama ($D$) matriks koefisien sistem tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "5",
      "7",
      "11",
      "-5",
      "-11"
    ],
    correctIndex: 2,
    solution: {
      concept: "Determinan utama ($D$) pada sistem persamaan linear adalah determinan dari matriks yang beranggotakan koefisien-koefisien variabel sistem persamaan linear tersebut.",
      steps: "1. Bentuk matriks koefisien sistem: $A = \\begin{pmatrix} 3 & -2 \\\\ 4 & 1 \\end{pmatrix}$.<br>2. Hitung nilai determinan utama $D = \\det(A)$:<br>$$D = (3)(1) - (-2)(4)$$<br>3. Lakukan perhitungan aritmetika:<br>$$D = 3 - (-8) = 3 + 8 = 11$$<br>4. Jadi nilai determinan utama $D$ adalah 11 (pilihan C).",
      pitfalls: "Salah tanda pada operasi pengurangan bilangan negatif: $3 - 8 = -5$ alih-alih $3 - (-8) = 11$."
    }
  },
  {
    id: "mat-alj-matriks-spl-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-spl",
    category: "Penyelesaian SPLDV dengan Metode Invers Matriks",
    difficulty: "mudah",
    statement: "Diketahui persamaan matriks $\\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}$. Nilai $x$ dan $y$ berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x = 2$ dan $y = 1$",
      "$x = 1$ dan $y = 2$",
      "$x = 3$ dan $y = -1$",
      "$x = -2$ dan $y = 7$",
      "$x = 4$ dan $y = 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Untuk menyelesaikan $A \\mathbf{x} = \\mathbf{b}$, cari invers $A^{-1}$ lalu kalikan $\\mathbf{x} = A^{-1} \\mathbf{b}$.",
      steps: "1. Hitung determinan matriks koefisien: $\\det(A) = (2)(1) - (1)(1) = 2 - 1 = 1$.<br>2. Tentukan invers matriks $A$:<br>$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$$<br>3. Hitung vektor variabel $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$:<br>$$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix} \\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} (1)(5) + (-1)(3) \\\\ (-1)(5) + (2)(3) \\end{pmatrix} = \\begin{pmatrix} 5 - 3 \\\\ -5 + 6 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$$<br>4. Jadi diperoleh nilai $x = 2$ dan $y = 1$ (pilihan A).",
      pitfalls: "Tertukar nilai antara $x$ dan $y$ saat menuliskan jawaban akhir."
    }
  },
  {
    id: "mat-alj-matriks-spl-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-spl",
    category: "Syarat Keberadaan Solusi Tunggal SPLDV",
    difficulty: "mudah",
    statement: "Sistem persamaan linear dua variabel $\\begin{cases} 2x + ky = 6 \\\\ 3x + 6y = 10 \\end{cases}$ memiliki tepat satu pasangan penyelesaian jika dan hanya jika nilai $k$ memenuhi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$k \\neq 4$",
      "$k \\neq 2$",
      "$k \\neq 6$",
      "$k = 4$",
      "$k = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Suatu sistem persamaan linear persegi memiliki tepat satu solusi (konsisten dan independen) jika dan hanya jika determinan matriks koefisiennya tidak sama dengan nol ($D \\neq 0$).",
      steps: "1. Susun matriks koefisien sistem: $A = \\begin{pmatrix} 2 & k \\\\ 3 & 6 \\end{pmatrix}$.<br>2. Hitung determinan matriks koefisien: $\\det(A) = (2)(6) - (k)(3) = 12 - 3k$.<br>3. Terapkan syarat solusi tunggal: $\\det(A) \\neq 0$.<br>$$12 - 3k \\neq 0 \\implies 3k \\neq 12 \\implies k \\neq 4$$<br>4. Jadi sistem memiliki tepat satu pasangan penyelesaian jika $k \\neq 4$ (pilihan A).",
      pitfalls: "Terkecoh memilih $k = 4$ yang justru merupakan syarat agar sistem TIDAK memiliki solusi tunggal (garis sejajar atau berimpit)."
    }
  }
];
