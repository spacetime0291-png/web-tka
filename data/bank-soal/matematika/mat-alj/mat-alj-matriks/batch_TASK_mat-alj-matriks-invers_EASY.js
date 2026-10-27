/**
 * Batch Task: TASK_mat-alj-matriks-invers_EASY
 * SubTopic: Invers Matriks 2x2 dan 3x3 (mat-alj-matriks-invers)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-matriks-invers-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-invers",
    category: "Invers Matriks Ordo 2x2 Dasar",
    difficulty: "mudah",
    statement: "Diketahui matriks $A = \\begin{pmatrix} 3 & 5 \\\\ 1 & 2 \\end{pmatrix}$. Invers dari matriks $A$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} -2 & 5 \\\\ 1 & -3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} -3 & 5 \\\\ 1 & -2 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Invers dari matriks ordo $2 \\times 2$, $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, dirumuskan sebagai:<br>$$M^{-1} = \\frac{1}{\\det(M)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$<br>dengan syarat $\\det(M) = ad - bc \\neq 0$.",
      steps: "1. Hitung determinan matriks $A$: $\\det(A) = (3)(2) - (5)(1) = 6 - 5 = 1$.<br>2. Tentukan adjoin matriks $A$ dengan menukar elemen diagonal utama dan mengubah tanda diagonal sekunder:<br>$$\\text{adj}(A) = \\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$$<br>3. Hitung $A^{-1}$:<br>$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix} = \\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$$<br>4. Jadi invers matriks $A$ adalah $\\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$ (pilihan A).",
      pitfalls: "Sering lupa mengubah tanda elemen diagonal sekunder atau tertukar antara menukar posisi dan mengubah tanda."
    }
  },
  {
    id: "mat-alj-matriks-invers-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-invers",
    category: "Syarat Keberadaan Invers Matriks",
    difficulty: "mudah",
    statement: "Matriks $M = \\begin{pmatrix} 2 & k \\\\ 4 & 6 \\end{pmatrix}$ memiliki invers jika dan hanya jika nilai $k$ memenuhi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$k \\neq 2$",
      "$k \\neq 3$",
      "$k \\neq 4$",
      "$k = 3$",
      "$k = 6$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Suatu matriks persegi memiliki invers (non-singular) jika dan hanya jika nilai determinannya tidak sama dengan nol ($\\det(M) \\neq 0$).",
      steps: "1. Syarat invers ada: $\\det(M) \\neq 0$.<br>2. Hitung rumus determinan $M$:<br>$$\\det(M) = (2)(6) - (k)(4) = 12 - 4k$$<br>3. Susun pertidaksamaan aljabar:<br>$$12 - 4k \\neq 0 \\implies 4k \\neq 12 \\implies k \\neq 3$$<br>4. Jadi matriks $M$ memiliki invers jika $k \\neq 3$ (pilihan B).",
      pitfalls: "Terkecoh antara syarat 'memiliki invers' ($k \\neq 3$) dan 'tidak memiliki invers / singular' ($k = 3$)."
    }
  },
  {
    id: "mat-alj-matriks-invers-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-invers",
    category: "Sifat Perkalian Matriks dengan Inversnya",
    difficulty: "mudah",
    statement: "Jika $P$ adalah matriks persegi tak-singular dan $I$ adalah matriks identitas yang berordo sama dengan $P$, maka hasil penyederhanaan bentuk $P \\cdot P^{-1} + 2I$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$I$",
      "$2I$",
      "$3I$",
      "$O$",
      "$P$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Definisi invers matriks menyatakan bahwa perkalian matriks tak-singular dengan inversnya selalu menghasilkan matriks identitas: $P \\cdot P^{-1} = P^{-1} \\cdot P = I$.",
      steps: "1. Gunakan identitas perkalian invers: $P \\cdot P^{-1} = I$.<br>2. Substitusikan ke ekspresi yang ditanyakan:<br>$$P \\cdot P^{-1} + 2I = I + 2I$$<br>3. Jumlahkan koefisien matriks identitas yang sejenis: $1I + 2I = 3I$.<br>4. Jadi hasil penyederhanaannya adalah $3I$ (pilihan C).",
      pitfalls: "Mengira $P \\cdot P^{-1} = 1$ (skalar) dan bukan matriks identitas $I$."
    }
  },
  {
    id: "mat-alj-matriks-invers-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-invers",
    category: "Invers Matriks Diagonal",
    difficulty: "mudah",
    statement: "Invers dari matriks diagonal $D = \\begin{pmatrix} 4 & 0 \\\\ 0 & -2 \\end{pmatrix}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} \\frac{1}{4} & 0 \\\\ 0 & -\\frac{1}{2} \\end{pmatrix}$",
      "$\\begin{pmatrix} -\\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{4} \\end{pmatrix}$",
      "$\\begin{pmatrix} -4 & 0 \\\\ 0 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} \\frac{1}{4} & 0 \\\\ 0 & \\frac{1}{2} \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Invers dari matriks diagonal tak-singular $D = \\text{diag}(d_1, d_2, \\dots, d_n)$ adalah matriks diagonal dengan elemen-elemen kebalikan dari masing-masing diagonal utamanya: $D^{-1} = \\text{diag}\\left(\\frac{1}{d_1}, \\frac{1}{d_2}, \\dots, \\frac{1}{d_n}\\right)$.",
      steps: "1. Hitung determinan matriks $D$: $\\det(D) = (4)(-2) - (0)(0) = -8$.<br>2. Tentukan adjoin matriks $D$: $\\text{adj}(D) = \\begin{pmatrix} -2 & 0 \\\\ 0 & 4 \\end{pmatrix}$.<br>3. Kalikan dengan skalar $\\frac{1}{\\det(D)} = -\\frac{1}{8}$:<br>$$D^{-1} = -\\frac{1}{8} \\begin{pmatrix} -2 & 0 \\\\ 0 & 4 \\end{pmatrix} = \\begin{pmatrix} \\frac{-2}{-8} & 0 \\\\ 0 & \\frac{4}{-8} \\end{pmatrix} = \\begin{pmatrix} \\frac{1}{4} & 0 \\\\ 0 & -\\frac{1}{2} \\end{pmatrix}$$<br>4. Jadi invers matriks $D$ adalah $\\begin{pmatrix} \\frac{1}{4} & 0 \\\\ 0 & -\\frac{1}{2} \\end{pmatrix}$ (pilihan A).",
      pitfalls: "Menukar letak diagonal tanpa membagi dengan determinan, atau salah tanda minus pada $-\\frac{1}{2}$."
    }
  },
  {
    id: "mat-alj-matriks-invers-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-invers",
    category: "Invers Matriks Pecahan Aljabar",
    difficulty: "mudah",
    statement: "Diketahui matriks $B = \\begin{pmatrix} 4 & 2 \\\\ 3 & 2 \\end{pmatrix}$. Invers dari matriks $B$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 1 & -1 \\\\ -\\frac{3}{2} & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -2 \\\\ -3 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 1 \\\\ \\frac{3}{2} & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 1 \\\\ \\frac{3}{2} & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -1 \\\\ -\\frac{3}{2} & 1 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Invers matriks $B = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ diperoleh dengan rumus $B^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.",
      steps: "1. Hitung nilai determinan matriks $B$:<br>$$\\det(B) = (4)(2) - (2)(3) = 8 - 6 = 2$$<br>2. Susun adjoin matriks $B$:<br>$$\\text{adj}(B) = \\begin{pmatrix} 2 & -2 \\\\ -3 & 4 \\end{pmatrix}$$<br>3. Kalikan adjoin dengan skalar $\\frac{1}{\\det(B)} = \\frac{1}{2}$:<br>$$B^{-1} = \\frac{1}{2} \\begin{pmatrix} 2 & -2 \\\\ -3 & 4 \\end{pmatrix} = \\begin{pmatrix} \\frac{2}{2} & \\frac{-2}{2} \\\\ \\frac{-3}{2} & \\frac{4}{2} \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ -\\frac{3}{2} & 2 \\end{pmatrix}$$<br>4. Jadi invers dari matriks $B$ adalah $\\begin{pmatrix} 1 & -1 \\\\ -\\frac{3}{2} & 2 \\end{pmatrix}$ (pilihan A).",
      pitfalls: "Hanya menyusun adjoin tanpa membaginya dengan nilai determinan (2)."
    }
  }
];
