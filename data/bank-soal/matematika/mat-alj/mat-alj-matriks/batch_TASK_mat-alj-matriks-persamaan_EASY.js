/**
 * Batch Task: TASK_mat-alj-matriks-persamaan_EASY
 * SubTopic: Persamaan Matriks (mat-alj-matriks-persamaan)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-matriks-persamaan-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-persamaan",
    category: "Konsep Dasar Persamaan Matriks AX = B",
    difficulty: "mudah",
    statement: "Jika $A$ dan $B$ adalah matriks persegi berordo sama dan $A$ merupakan matriks tak-singular, maka bentuk penyelesaian untuk matriks $X$ dari persamaan matriks $A \\cdot X = B$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$X = A^{-1} \\cdot B$",
      "$X = B \\cdot A^{-1}$",
      "$X = \\frac{B}{A}$",
      "$X = A \\cdot B^{-1}$",
      "$X = B^{-1} \\cdot A$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Dalam aljabar matriks tidak didefinisikan operasi pembagian. Untuk mengeliminasi matriks pengali $A$ di sebelah kiri pada persamaan $AX = B$, kedua ruas dikalikan dengan invers $A^{-1}$ dari arah kiri:<br>$$A^{-1}(AX) = A^{-1}B \\implies IX = A^{-1}B \\implies X = A^{-1}B$$",
      steps: "1. Tinjau persamaan: $A \\cdot X = B$.<br>2. Kalikan kedua ruas dengan $A^{-1}$ dari sebelah kiri:<br>$$A^{-1} \\cdot (A \\cdot X) = A^{-1} \\cdot B$$<br>3. Terapkan sifat asosiatif dan identitas invers matriks $(A^{-1} A) X = I X = X$:<br>$$X = A^{-1} \\cdot B$$<br>4. Jadi penyelesaian untuk matriks $X$ adalah $X = A^{-1} \\cdot B$ (pilihan A).",
      pitfalls: "Menuliskan pembagian biasa seperti $\\frac{B}{A}$ atau mengalikan invers dari sebelah kanan ($B A^{-1}$), padahal perkalian matriks tidak bersifat komutatif."
    }
  },
  {
    id: "mat-alj-matriks-persamaan-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-persamaan",
    category: "Konsep Dasar Persamaan Matriks XA = B",
    difficulty: "mudah",
    statement: "Jika matriks $X$ memenuhi persamaan matriks $X \\cdot A = B$ dengan matriks $A$ merupakan matriks tak-singular, maka matriks $X$ diperoleh melalui penyelesaian ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$X = B \\cdot A^{-1}$",
      "$X = A^{-1} \\cdot B$",
      "$X = (AB)^{-1}$",
      "$X = A \\cdot B^{-1}$",
      "$X = \\frac{B}{A}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Untuk menyelesaikan persamaan matriks di mana variabel yang dicari berada di sebelah kiri matriks pengali ($XA = B$), kedua ruas harus dikalikan dengan invers $A^{-1}$ dari arah kanan:<br>$$(XA) A^{-1} = B A^{-1} \\implies X I = B A^{-1} \\implies X = B A^{-1}$$",
      steps: "1. Tuliskan persamaan matriks: $X \\cdot A = B$.<br>2. Kalikan kedua ruas dengan $A^{-1}$ dari sisi kanan:<br>$$(X \\cdot A) \\cdot A^{-1} = B \\cdot A^{-1}$$<br>3. Sederhanakan ruas kiri menggunakan sifat invers $A \\cdot A^{-1} = I$:<br>$$X \\cdot I = B \\cdot A^{-1} \\implies X = B \\cdot A^{-1}$$<br>4. Jadi matriks $X$ dapat dicari dengan $X = B \\cdot A^{-1}$ (pilihan A).",
      pitfalls: "Tertukar antara mengalikan dari kanan ($B A^{-1}$) dan dari kiri ($A^{-1} B$)."
    }
  },
  {
    id: "mat-alj-matriks-persamaan-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-persamaan",
    category: "Menyelesaikan Persamaan AX = B",
    difficulty: "mudah",
    statement: "Diketahui persamaan matriks $\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix} X = \\begin{pmatrix} 5 & 3 \\\\ 2 & 1 \\end{pmatrix}$. Matriks $X$ yang memenuhi persamaan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 1 & 1 \\\\ 2 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 3 \\\\ 1 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 9 & 5 \\\\ 2 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & -1 \\\\ 2 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 1 \\\\ 2 & 1 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Bentuk persamaan $AX = B$ diselesaikan dengan $X = A^{-1} B$, dengan $A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$.",
      steps: "1. Misalkan $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 5 & 3 \\\\ 2 & 1 \\end{pmatrix}$.<br>2. Hitung determinan $A$: $\\det(A) = (1)(1) - (2)(0) = 1$.<br>3. Tentukan invers $A$:<br>$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 1 & -2 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & -2 \\\\ 0 & 1 \\end{pmatrix}$$<br>4. Kalikan $A^{-1}$ dengan $B$ dari kiri:<br>$$X = A^{-1} B = \\begin{pmatrix} 1 & -2 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 5 & 3 \\\\ 2 & 1 \\end{pmatrix}$$<br>- Baris 1: $[(1)(5) + (-2)(2), (1)(3) + (-2)(1)] = [5 - 4, 3 - 2] = [1, 1]$<br>- Baris 2: $[(0)(5) + (1)(2), (0)(3) + (1)(1)] = [2, 1]$<br>5. Diperoleh $X = \\begin{pmatrix} 1 & 1 \\\\ 2 & 1 \\end{pmatrix}$ (pilihan A).",
      pitfalls: "Mengalikan $B$ dengan $A^{-1}$ dari kanan atau salah tanda pada invers matriks $A$."
    }
  },
  {
    id: "mat-alj-matriks-persamaan-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-persamaan",
    category: "Menyelesaikan Persamaan Matriks Baris XA = B",
    difficulty: "mudah",
    statement: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$ dan matriks baris $B = \\begin{pmatrix} 4 & 3 \\end{pmatrix}$. Jika matriks baris $X$ memenuhi $X \\cdot A = B$, maka matriks $X$ bernilai ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 1 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 7 & 10 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Persamaan matriks berbentuk $X \\cdot A = B$ memiliki penyelesaian $X = B \\cdot A^{-1}$.",
      steps: "1. Hitung nilai determinan matriks $A$: $\\det(A) = (2)(1) - (1)(1) = 2 - 1 = 1$.<br>2. Tentukan invers matriks $A$:<br>$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$$<br>3. Hitung hasil perkalian matriks baris $B$ dengan $A^{-1}$:<br>$$X = B \\cdot A^{-1} = \\begin{pmatrix} 4 & 3 \\end{pmatrix} \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$$<br>- Kolom 1: $(4)(1) + (3)(-1) = 4 - 3 = 1$<br>- Kolom 2: $(4)(-1) + (3)(2) = -4 + 6 = 2$<br>4. Jadi matriks baris $X$ adalah $\\begin{pmatrix} 1 & 2 \\end{pmatrix}$ (pilihan A).",
      pitfalls: "Mencoba mengalikan $A^{-1} B$ yang tidak kompatibel secara ordo ($(2 \\times 2) \\times (1 \\times 2)$)."
    }
  },
  {
    id: "mat-alj-matriks-persamaan-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-persamaan",
    category: "Determinan Solusi Persamaan Matriks",
    difficulty: "mudah",
    statement: "Diketahui matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 4 & 2 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 6 \\\\ 1 & 5 \\end{pmatrix}$. Jika matriks $X$ memenuhi persamaan $A \\cdot X = B$, maka nilai determinan matriks $X$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "1",
      "2",
      "4",
      "6",
      "8"
    ],
    correctIndex: 1,
    solution: {
      concept: "Berdasarkan sifat perkalian determinan, jika $AX = B$ maka berlaku hubungan determinan:<br>$$\\det(AX) = \\det(B) \\implies \\det(A) \\cdot \\det(X) = \\det(B) \\implies \\det(X) = \\frac{\\det(B)}{\\det(A)}$$",
      steps: "1. Hitung nilai determinan matriks $A$:<br>$$\\det(A) = (3)(2) - (1)(4) = 6 - 4 = 2$$<br>2. Hitung nilai determinan matriks $B$:<br>$$\\det(B) = (2)(5) - (6)(1) = 10 - 6 = 4$$<br>3. Gunakan relasi determinan:<br>$$\\det(X) = \\frac{\\det(B)}{\\det(A)} = \\frac{4}{2} = 2$$<br>4. Jadi nilai determinan matriks $X$ adalah 2 (pilihan B).",
      pitfalls: "Mencari seluruh elemen matriks $X$ secara manual terlebih dahulu yang membutuhkan waktu lama dan rawan kesalahan hitung."
    }
  }
];
