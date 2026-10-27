/**
 * Batch Task: TASK_mat-alj-matriks-kali_EASY
 * SubTopic: Perkalian Dua Matriks (mat-alj-matriks-kali)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-matriks-kali-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-kali",
    category: "Syarat Kelayakan Perkalian Dua Matriks",
    difficulty: "mudah",
    statement: "Perkalian antara dua buah matriks $A$ dan $B$ menghasilkan matriks $C = A \\cdot B$ hanya dapat dilakukan apabila ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Banyak kolom matriks A sama dengan banyak baris matriks B",
      "Banyak baris matriks A sama dengan banyak kolom matriks B",
      "Kedua matriks memiliki ordo yang sama persis",
      "Kedua matriks merupakan matriks identitas",
      "Nilai determinan dari kedua matriks bernilai tidak sama dengan nol"
    ],
    correctIndex: 0,
    solution: {
      concept: "Syarat perkalian dua matriks $A_{m \\times p} \\cdot B_{q \\times n}$ adalah banyak kolom pada matriks pengali pertama harus sama dengan banyak baris pada matriks pengali kedua ($p = q$). Matriks hasil perkaliannya akan berordo $m \\times n$.",
      steps: "1. Tinjau definisi aljabar perkalian matriks: elemen $c_{ij}$ diperoleh dari perkalian baris ke-$i$ matriks $A$ dengan kolom ke-$j$ matriks $B$.<br>2. Agar setiap elemen baris $A$ berpasangan secara tepat dengan elemen kolom $B$, panjang baris $A$ (banyak kolom $A$) harus sama dengan panjang kolom $B$ (banyak baris $B$).<br>3. Jadi syarat perkalian matriks adalah banyak kolom matriks $A$ sama dengan banyak baris matriks $B$ (pilihan A).",
      pitfalls: "Sering mengira kedua matriks harus memiliki ordo yang sama (seperti syarat penjumlahan matriks)."
    }
  },
  {
    id: "mat-alj-matriks-kali-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-kali",
    category: "Perkalian Matriks Baris dan Matriks Kolom",
    difficulty: "mudah",
    statement: "Hasil perkalian antara matriks baris $P = \\begin{pmatrix} 3 & -2 & 4 \\end{pmatrix}$ dan matriks kolom $Q = \\begin{pmatrix} 2 \\\\ 5 \\\\ 1 \\end{pmatrix}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(0)$",
      "$(4)$",
      "$(6)$",
      "$(10)$",
      "$(20)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Perkalian matriks baris berordo $1 \\times n$ dengan matriks kolom berordo $n \\times 1$ menghasilkan matriks skalar berordo $1 \\times 1$ melalui penjumlahan hasil kali elemen-elemen yang sepadan:<br>$$\\begin{pmatrix} p_1 & p_2 & p_3 \\end{pmatrix} \\begin{pmatrix} q_1 \\\\ q_2 \\\\ q_3 \\end{pmatrix} = (p_1 q_1 + p_2 q_2 + p_3 q_3)$$",
      steps: "1. Identifikasi ordo: $P$ berordo $1 \\times 3$ dan $Q$ berordo $3 \\times 1$, sehingga matriks hasil berordo $1 \\times 1$.<br>2. Kalikan elemen yang bersesuaian:<br>$$P \\cdot Q = (3 \\times 2) + (-2 \\times 5) + (4 \\times 1)$$<br>3. Hitung hasil perkalian:<br>$$P \\cdot Q = 6 - 10 + 4 = 0$$<br>4. Jadi hasil perkalian matriks adalah $(0)$ (pilihan A).",
      pitfalls: "Kesalahan tanda operasi pada $(-2 \\times 5) = -10$."
    }
  },
  {
    id: "mat-alj-matriks-kali-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-kali",
    category: "Perkalian Dua Matriks Ordo 2x2 Dasar",
    difficulty: "mudah",
    statement: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$ dan matriks $B = \\begin{pmatrix} 1 & 0 \\\\ 2 & 3 \\end{pmatrix}$. Hasil perkalian $A \\cdot B$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 4 & 3 \\\\ 11 & 12 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 0 \\\\ 6 & 12 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 1 \\\\ 5 & 7 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 11 \\\\ 3 & 12 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 4 \\\\ 11 & 12 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Perkalian dua matriks ordo $2 \\times 2$ dirumuskan sebagai:<br>$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} e & f \\\\ g & h \\end{pmatrix} = \\begin{pmatrix} ae + bg & af + bh \\\\ ce + dg & cf + dh \\end{pmatrix}$$",
      steps: "1. Hitung elemen baris 1:<br>- Kolom 1: $(2)(1) + (1)(2) = 2 + 2 = 4$<br>- Kolom 2: $(2)(0) + (1)(3) = 0 + 3 = 3$<br>2. Hitung elemen baris 2:<br>- Kolom 1: $(3)(1) + (4)(2) = 3 + 8 = 11$<br>- Kolom 2: $(3)(0) + (4)(3) = 0 + 12 = 12$<br>3. Susun matriks hasil:<br>$$A \\cdot B = \\begin{pmatrix} 4 & 3 \\\\ 11 & 12 \\end{pmatrix}$$<br>4. Jadi jawabannya adalah pilihan A.",
      pitfalls: "Mengalikan elemen seletak secara langsung seperti penjumlahan (misal $2 \\times 1 = 2, 1 \\times 0 = 0$ sehingga menghasilkan $\\begin{pmatrix} 2 & 0 \\\\ 6 & 12 \\end{pmatrix}$ pada pilihan B)."
    }
  },
  {
    id: "mat-alj-matriks-kali-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-kali",
    category: "Sifat Perkalian Matriks dan Matriks Identitas",
    difficulty: "mudah",
    statement: "Jika $A$ adalah suatu matriks persegi berordo $n \\times n$ dan $I$ adalah matriks identitas yang berordo sama, maka hasil dari operasi perkalian $A \\cdot I$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$A$",
      "$I$",
      "$A^2$",
      "$A^T$",
      "Matriks nol"
    ],
    correctIndex: 0,
    solution: {
      concept: "Matriks identitas $I$ bertindak sebagai elemen netral (unsur identitas) terhadap operasi perkalian matriks, sehingga berlaku sifat:<br>$$A \\cdot I = I \\cdot A = A$$",
      steps: "1. Dalam aljabar matriks, matriks identitas memiliki peran yang analog dengan bilangan $1$ pada perkalian bilangan real biasa.<br>2. Perkalian sembarang matriks $A$ dengan matriks identitas yang sesuai ukurannya akan menghasilkan kembali matriks $A$ itu sendiri tanpa perubahan elemen apa pun.<br>3. Jadi $A \\cdot I = A$ (pilihan A).",
      pitfalls: "Mengira perkalian dengan matriks identitas menghasilkan matriks identitas $I$ atau matriks kuadrat $A^2$."
    }
  },
  {
    id: "mat-alj-matriks-kali-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-kali",
    category: "Perpangkatan Matriks Kuadrat A^2",
    difficulty: "mudah",
    statement: "Diketahui matriks $M = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix}$. Hasil dari perpangkatan matriks $M^2$ ($M \\cdot M$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 3 & -5 \\\\ 5 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 1 \\\\ 1 & 9 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & -2 \\\\ 2 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 5 \\\\ -5 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & -5 \\\\ 3 & 8 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Perpangkatan matriks $M^2$ didefinisikan sebagai perkalian matriks $M$ dengan dirinya sendiri ($M \\cdot M$), bukan mengkuadratkan setiap elemennya.",
      steps: "1. Tuliskan perkalian matriks $M \\cdot M$:<br>$$M^2 = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix} \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix}$$<br>2. Hitung elemen baris 1:<br>- Kolom 1: $2(2) + (-1)(1) = 4 - 1 = 3$<br>- Kolom 2: $2(-1) + (-1)(3) = -2 - 3 = -5$<br>3. Hitung elemen baris 2:<br>- Kolom 1: $1(2) + 3(1) = 2 + 3 = 5$<br>- Kolom 2: $1(-1) + 3(3) = -1 + 9 = 8$<br>4. Susun matriks hasil:<br>$$M^2 = \\begin{pmatrix} 3 & -5 \\\\ 5 & 8 \\end{pmatrix}$$<br>5. Jadi hasil perpangkatan $M^2$ adalah pilihan A.",
      pitfalls: "Mengkuadratkan masing-masing elemen secara terpisah ($2^2 = 4, (-1)^2 = 1, 1^2 = 1, 3^2 = 9$ pada pilihan B)."
    }
  }
];
