/**
 * Batch Task: TASK_mat-alj-matriks-invers_MEDIUM
 * SubTopic: Invers Matriks 2x2 dan 3x3 (mat-alj-matriks-invers)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-matriks-invers-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-invers",
    category: "Invers Hasil Kali Matriks",
    difficulty: "sedang",
    statement: "Diketahui matriks invers $A^{-1} = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B^{-1} = \\begin{pmatrix} -1 & 0 \\\\ 2 & 1 \\end{pmatrix}$. Matriks $(AB)^{-1}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} -1 & -2 \\\\ 5 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 2 \\\\ 5 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 5 \\\\ -2 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 8 \\\\ -1 & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 5 & 7 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Berdasarkan teorema pembalikan urutan invers pada perkalian matriks (*reversal property*), invers dari hasil perkalian dua matriks adalah:<br>$$(AB)^{-1} = B^{-1} \\cdot A^{-1}$$",
      steps: "1. Terapkan sifat invers perkalian: $(AB)^{-1} = B^{-1} \\cdot A^{-1}$.<br>2. Kalikan matriks $B^{-1}$ dengan matriks $A^{-1}$:<br>$$(AB)^{-1} = \\begin{pmatrix} -1 & 0 \\\\ 2 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$$<br>3. Hitung elemen-elemen hasil kali matriks:<br>- Baris 1 Kolom 1: $(-1)(1) + (0)(3) = -1$<br>- Baris 1 Kolom 2: $(-1)(2) + (0)(4) = -2$<br>- Baris 2 Kolom 1: $(2)(1) + (1)(3) = 2 + 3 = 5$<br>- Baris 2 Kolom 2: $(2)(2) + (1)(4) = 4 + 4 = 8$<br>4. Diperoleh $(AB)^{-1} = \\begin{pmatrix} -1 & -2 \\\\ 5 & 8 \\end{pmatrix}$ (pilihan A).",
      pitfalls: "Mengira urutan perkalian invers tidak berbalik, yaitu salah menghitung $A^{-1} B^{-1}$ alih-alih $B^{-1} A^{-1}$."
    }
  },
  {
    id: "mat-alj-matriks-invers-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-invers",
    category: "Perpangkatan Invers Matriks",
    difficulty: "sedang",
    statement: "Diketahui matriks $M = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$. Matriks $(M^{-1})^2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 14 & -5 \\\\ -25 & 9 \\end{pmatrix}$",
      "$\\begin{pmatrix} 9 & -1 \\\\ -25 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 14 & 5 \\\\ 25 & 9 \\end{pmatrix}$",
      "$\\begin{pmatrix} 19 & -5 \\\\ -25 & 14 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Matriks $(M^{-1})^2$ diperoleh dengan mencari invers $M^{-1}$ terlebih dahulu, kemudian mengalikan matriks invers tersebut dengan dirinya sendiri: $(M^{-1})^2 = M^{-1} \\cdot M^{-1}$.",
      steps: "1. Hitung determinan matriks $M$: $\\det(M) = (2)(3) - (1)(5) = 6 - 5 = 1$.<br>2. Tentukan invers matriks $M$:<br>$$M^{-1} = \\frac{1}{1} \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$$<br>3. Hitung perkalian kuadrat $(M^{-1})^2 = M^{-1} \\cdot M^{-1}$:<br>$$(M^{-1})^2 = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix} \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$$<br>- Elemen (1,1): $(3)(3) + (-1)(-5) = 9 + 5 = 14$<br>- Elemen (1,2): $(3)(-1) + (-1)(2) = -3 - 2 = -5$<br>- Elemen (2,1): $(-5)(3) + (2)(-5) = -15 - 10 = -25$<br>- Elemen (2,2): $(-5)(-1) + (2)(2) = 5 + 4 = 9$<br>4. Jadi diperoleh $(M^{-1})^2 = \\begin{pmatrix} 14 & -5 \\\\ -25 & 9 \\end{pmatrix}$ (pilihan A).",
      pitfalls: "Menguadratkan masing-masing elemen di dalam matriks invers alih-alih melakukan perkalian baris kali kolom."
    }
  },
  {
    id: "mat-alj-matriks-invers-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-invers",
    category: "Invers Matriks Diagonal Ordo 3x3",
    difficulty: "sedang",
    statement: "Diketahui matriks diagonal $C = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix}$. Jumlah seluruh elemen dari matriks $C^{-1}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-\\frac{3}{10}$",
      "$-\\frac{1}{10}$",
      "$\\frac{1}{10}$",
      "$\\frac{7}{10}$",
      "$6$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Untuk matriks diagonal tak-singular berordo $3 \\times 3$, invers matriksnya merupakan matriks diagonal yang elemen diagonalnya adalah resiprokal (kebalikan) dari elemen diagonal matriks semula.",
      steps: "1. Matriks $C$ adalah matriks diagonal dengan entri $c_{11} = 2$, $c_{22} = -1$, dan $c_{33} = 5$.<br>2. Tentukan invers masing-masing elemen diagonal:<br>$$\\frac{1}{2}, \\quad \\frac{1}{-1} = -1, \\quad \\frac{1}{5}$$<br>3. Matriks inversnya berbentuk:<br>$$C^{-1} = \\begin{pmatrix} \\frac{1}{2} & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & \\frac{1}{5} \\end{pmatrix}$$<br>4. Jumlahkan seluruh elemennya (karena elemen selain diagonal adalah 0):<br>$$\\text{Jumlah} = \\frac{1}{2} + (-1) + \\frac{1}{5} = \\frac{5 - 10 + 2}{10} = -\\frac{3}{10}$$<br>5. Jadi jumlah seluruh elemen $C^{-1}$ adalah $-\\frac{3}{10}$ (pilihan A).",
      pitfalls: "Salah menyamakan penyebut pecahan atau salah tanda pada $-1$."
    }
  },
  {
    id: "mat-alj-matriks-invers-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-invers",
    category: "Invers Berdasarkan Persamaan Matriks Polinomial",
    difficulty: "sedang",
    statement: "Diketahui matriks persegi $A$ memenuhi persamaan matriks $A^2 - 5A + 2I = O$, dengan $I$ matriks identitas dan $O$ matriks nol. Invers matriks $A$ dapat dinyatakan sebagai ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{2}(5I - A)$",
      "$\\frac{1}{2}(A - 5I)$",
      "$5I - A$",
      "$A - 5I$",
      "$\\frac{1}{5}(2I - A)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jika matriks $A$ memenuhi persamaan polinomial $A^2 + pA + qI = O$ dengan $q \\neq 0$, maka matriks tersebut memiliki invers yang dapat dicari dengan memfaktorkan perkalian matriks $A$ terhadap matriks identitas $I$.",
      steps: "1. Tuliskan persamaan: $A^2 - 5A + 2I = O$.<br>2. Pindahkan konstanta identitas ke ruas kanan:<br>$$A^2 - 5A = -2I$$<br>3. Faktorkan matriks $A$ di ruas kiri:<br>$$A(A - 5I) = -2I$$<br>4. Bagi kedua ruas dengan skalar $-2$:<br>$$A \\left(-\\frac{1}{2}(A - 5I)\\right) = I \\implies A \\left(\\frac{1}{2}(5I - A)\\right) = I$$<br>5. Berdasarkan definisi invers di mana $A \\cdot A^{-1} = I$, maka:<br>$$A^{-1} = \\frac{1}{2}(5I - A)$$<br>6. Jadi invers matriks $A$ adalah $\\frac{1}{2}(5I - A)$ (pilihan A).",
      pitfalls: "Salah tanda ketika membagi dengan $-2$ sehingga memilih $\\frac{1}{2}(A - 5I)$."
    }
  },
  {
    id: "mat-alj-matriks-invers-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-invers",
    category: "Elemen Invers Matriks Segitiga Ordo 3x3",
    difficulty: "sedang",
    statement: "Diketahui matriks unipotent segitiga atas $T = \\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 3 \\\\ 0 & 0 & 1 \\end{pmatrix}$. Elemen pada baris ke-1 kolom ke-3 dari matriks invers $T^{-1}$ bernilai ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-6",
      "-3",
      "0",
      "3",
      "6"
    ],
    correctIndex: 4,
    solution: {
      concept: "Invers matriks $T$ memenuhi relasi $T \\cdot T^{-1} = I$. Elemen kolom ke-3 dari $T^{-1}$, yaitu $\\mathbf{v}_3 = \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}$, dapat diselesaikan melalui sistem persamaan $T \\mathbf{v}_3 = \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$.",
      steps: "1. Tuliskan sistem persamaan matriks untuk kolom ke-3:<br>$$\\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 3 \\\\ 0 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$$<br>2. Selesaikan persamaan dari baris paling bawah secara substitusi mundur (*back substitution*):<br>- Baris 3: $z = 1$<br>- Baris 2: $y + 3z = 0 \\implies y + 3(1) = 0 \\implies y = -3$<br>- Baris 1: $x + 2y + 0z = 0 \\implies x + 2(-3) = 0 \\implies x - 6 = 0 \\implies x = 6$<br>3. Nilai $x$ adalah elemen pada baris ke-1 kolom ke-3 dari $T^{-1}$, yaitu bernilai 6.<br>4. Jadi nilai yang dicari adalah 6 (pilihan E).",
      pitfalls: "Sering mengira nilai elemen tetap 0 seperti matriks asalnya atau keliru tanda menjadi $-6$."
    }
  }
];
