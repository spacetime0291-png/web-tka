/**
 * Batch Task: TASK_mat-alj-matriks-persamaan_MEDIUM
 * SubTopic: Persamaan Matriks (mat-alj-matriks-persamaan)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-matriks-persamaan-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-persamaan",
    category: "Penyelesaian Persamaan Matriks AXB = C",
    difficulty: "sedang",
    statement: "Jika $A$, $B$, $C$, dan $X$ adalah matriks persegi berordo sama dengan $A$ dan $B$ tak-singular yang memenuhi persamaan $A \\cdot X \\cdot B = C$, maka rumus untuk matriks $X$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$X = A^{-1} \\cdot C \\cdot B^{-1}$",
      "$X = B^{-1} \\cdot C \\cdot A^{-1}$",
      "$X = C \\cdot A^{-1} \\cdot B^{-1}$",
      "$X = (AB)^{-1} \\cdot C$",
      "$X = C \\cdot (AB)^{-1}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Untuk menyelesaikan persamaan $AXB = C$, kalikan dengan invers $A^{-1}$ dari arah kiri dan invers $B^{-1}$ dari arah kanan:<br>$$A^{-1}(AXB)B^{-1} = A^{-1} C B^{-1} \\implies (A^{-1}A) X (B B^{-1}) = A^{-1} C B^{-1} \\implies I X I = A^{-1} C B^{-1} \\implies X = A^{-1} C B^{-1}$$",
      steps: "1. Tuliskan persamaan awal: $A \\cdot X \\cdot B = C$.<br>2. Kalikan kedua ruas dengan $A^{-1}$ dari sebelah kiri:<br>$$A^{-1} \\cdot (A \\cdot X \\cdot B) = A^{-1} \\cdot C \\implies (A^{-1} A) \\cdot X \\cdot B = A^{-1} C \\implies X \\cdot B = A^{-1} C$$<br>3. Kalikan kedua ruas dengan $B^{-1}$ dari sebelah kanan:<br>$$(X \\cdot B) \\cdot B^{-1} = (A^{-1} C) \\cdot B^{-1} \\implies X \\cdot (B B^{-1}) = A^{-1} C B^{-1} \\implies X = A^{-1} C B^{-1}$$<br>4. Jadi rumus matriks $X$ yang tepat adalah $X = A^{-1} \\cdot C \\cdot B^{-1}$ (pilihan A).",
      pitfalls: "Menukar posisi pengali invers menjadi $B^{-1} C A^{-1}$ atau mengelompokkan $(AB)^{-1} C$ padahal $A$ dan $B$ mengapit matriks $X$."
    }
  },
  {
    id: "mat-alj-matriks-persamaan-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-persamaan",
    category: "Perhitungan Elemen Matriks XA = B",
    difficulty: "sedang",
    statement: "Diketahui matriks $A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 10 & 0 \\\\ 5 & 10 \\end{pmatrix}$. Jika matriks $X$ memenuhi $X \\cdot A = B$, maka jumlah seluruh elemen dari matriks $X$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    correctIndex: 2,
    solution: {
      concept: "Persamaan $XA = B$ diselesaikan melalui hubungan $X = B \\cdot A^{-1}$ dengan $A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$.",
      steps: "1. Hitung determinan matriks $A$:<br>$$\\det(A) = (3)(4) - (2)(1) = 12 - 2 = 10$$<br>2. Tentukan invers matriks $A$:<br>$$A^{-1} = \\frac{1}{10} \\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$$<br>3. Hitung matriks $X = B \\cdot A^{-1}$:<br>$$X = \\begin{pmatrix} 10 & 0 \\\\ 5 & 10 \\end{pmatrix} \\left[\\frac{1}{10} \\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}\\right] = \\begin{pmatrix} 1 & 0 \\\\ \\frac{1}{2} & 1 \\end{pmatrix} \\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$$<br>- Baris 1: $[(1)(4) + 0, (1)(-2) + 0] = [4, -2]$<br>- Baris 2: $[(\\frac{1}{2})(4) + (1)(-1), (\\frac{1}{2})(-2) + (1)(3)] = [2 - 1, -1 + 3] = [1, 2]$<br>Jadi $X = \\begin{pmatrix} 4 & -2 \\\\ 1 & 2 \\end{pmatrix}$.<br>4. Jumlahkan seluruh elemen matriks $X$:<br>$$\\text{Jumlah} = 4 + (-2) + 1 + 2 = 5$$<br>5. Jadi jumlah seluruh elemennya adalah 5 (pilihan C).",
      pitfalls: "Mengalikan $A^{-1} B$ dari sebelah kiri yang menghasilkan matriks yang salah karena perkalian matriks tidak komutatif."
    }
  },
  {
    id: "mat-alj-matriks-persamaan-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-persamaan",
    category: "Persamaan Matriks Komposisi Penjumlahan AX + B = C",
    difficulty: "sedang",
    statement: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 2 \\end{pmatrix}$, $B = \\begin{pmatrix} 1 & -2 \\\\ 4 & 1 \\end{pmatrix}$, dan $C = \\begin{pmatrix} 3 & 0 \\\\ 7 & 5 \\end{pmatrix}$. Jika matriks $X$ memenuhi persamaan $A \\cdot X + B = C$, maka nilai determinan matriks $X$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-2",
      "1",
      "2",
      "4",
      "6"
    ],
    correctIndex: 2,
    solution: {
      concept: "Persamaan $AX + B = C$ disederhanakan menjadi $AX = C - B$. Nilai determinan matriks $X$ kemudian dihitung memanfaatkan sifat $\\det(A) \\cdot \\det(X) = \\det(C - B)$.",
      steps: "1. Kurangkan kedua ruas dengan matriks $B$:<br>$$AX = C - B = \\begin{pmatrix} 3 & 0 \\\\ 7 & 5 \\end{pmatrix} - \\begin{pmatrix} 1 & -2 \\\\ 4 & 1 \\end{pmatrix} = \\begin{pmatrix} 2 & 2 \\\\ 3 & 4 \\end{pmatrix}$$<br>2. Hitung nilai determinan dari matriks $A$:<br>$$\\det(A) = (2)(2) - (1)(3) = 4 - 3 = 1$$<br>3. Hitung determinan matriks $(C - B)$:<br>$$\\det(C - B) = (2)(4) - (2)(3) = 8 - 6 = 2$$<br>4. Berdasarkan sifat determinan perkalian:<br>$$\\det(A) \\cdot \\det(X) = \\det(C - B) \\implies 1 \\cdot \\det(X) = 2 \\implies \\det(X) = 2$$<br>5. Jadi determinan matriks $X$ bernilai 2 (pilihan C).",
      pitfalls: "Lupa mengurangkan matriks $C - B$ terlebih dahulu atau langsung membagi elemen tanpa menghitung determinan."
    }
  },
  {
    id: "mat-alj-matriks-persamaan-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-persamaan",
    category: "Persamaan Matriks Bentuk Invers",
    difficulty: "sedang",
    statement: "Jika $(A + X)^{-1} = B$ dengan $B$ merupakan matriks tak-singular berordo sama dengan matriks $A$, maka matriks $X$ dapat dinyatakan sebagai ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$X = B^{-1} - A$",
      "$X = A - B^{-1}$",
      "$X = (B - A)^{-1}$",
      "$X = B - A^{-1}$",
      "$X = A^{-1} - B$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gunakan sifat invers ganda: $((M)^{-1})^{-1} = M$. Jika $(A + X)^{-1} = B$, lakukan inversi pada kedua ruas untuk mengisolasi suku $(A + X)$.",
      steps: "1. Ambil invers pada kedua ruas:<br>$$((A + X)^{-1})^{-1} = B^{-1}$$<br>2. Sederhanakan ruas kiri:<br>$$A + X = B^{-1}$$<br>3. Kurangkan matriks $A$ dari kedua ruas untuk mendapatkan matriks $X$:<br>$$X = B^{-1} - A$$<br>4. Jadi matriks $X$ dinyatakan dengan $X = B^{-1} - A$ (pilihan A).",
      pitfalls: "Mengasumsikan $(A + X)^{-1} = A^{-1} + X^{-1}$, padahal invers tidak bersifat distributif terhadap penjumlahan matriks."
    }
  },
  {
    id: "mat-alj-matriks-persamaan-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-persamaan",
    category: "Persamaan Matriks dengan Transpose",
    difficulty: "sedang",
    statement: "Diketahui matriks $A = \\begin{pmatrix} 1 & 3 \\\\ 2 & 5 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 4 \\\\ 11 \\end{pmatrix}$. Jika vektor kolom $X = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$ memenuhi $A^T \\cdot X = B$, maka nilai dari $x + y$ adalah ....",
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
      concept: "Persamaan $A^T X = B$ diselesaikan dengan $X = (A^T)^{-1} B$. Transpose matriks diperoleh dengan menukar baris menjadi kolom.",
      steps: "1. Tentukan transpose matriks $A$:<br>$$A^T = \\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}$$<br>2. Hitung determinan $A^T$: $\\det(A^T) = (1)(5) - (2)(3) = 5 - 6 = -1$.<br>3. Tentukan invers $(A^T)^{-1}$:<br>$$(A^T)^{-1} = \\frac{1}{-1} \\begin{pmatrix} 5 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix}$$<br>4. Hitung vektor kolom $X = (A^T)^{-1} B$:<br>$$X = \\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix} \\begin{pmatrix} 4 \\\\ 11 \\end{pmatrix} = \\begin{pmatrix} (-5)(4) + (2)(11) \\\\ (3)(4) + (-1)(11) \\end{pmatrix} = \\begin{pmatrix} -20 + 22 \\\\ 12 - 11 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$$<br>Diperoleh $x = 2$ dan $y = 1$.<br>5. Hitung nilai $x + y = 2 + 1 = 3$.<br>6. Jadi nilai $x + y$ adalah 3 (pilihan C).",
      pitfalls: "Lupa melakukan transpose pada matriks $A$ terlebih dahulu sebelum mencari invers dan mengalikan vektor."
    }
  }
];
