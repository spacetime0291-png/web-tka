/**
 * Batch Task: TASK_mat-alj-matriks-det_EASY
 * SubTopic: Determinan Matriks 2x2 dan 3x3 (mat-alj-matriks-det)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-matriks-det-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-det",
    category: "Determinan Matriks Ordo 2x2",
    difficulty: "mudah",
    statement: "Nilai determinan dari matriks $A = \\begin{pmatrix} 4 & -2 \\\\ 3 & 5 \\end{pmatrix}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "26",
      "14",
      "-14",
      "-26",
      "20"
    ],
    correctIndex: 0,
    solution: {
      concept: "Determinan dari matriks ordo $2 \\times 2$, yaitu $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, didefinisikan sebagai selisih hasil kali elemen diagonal utama dengan elemen diagonal sekunder:<br>$$\\det(M) = ad - bc$$",
      steps: "1. Tentukan elemen-elemen matriks $A$: $a = 4$, $b = -2$, $c = 3$, $d = 5$.<br>2. Hitung hasil kali diagonal utama: $ad = 4 \\times 5 = 20$.<br>3. Hitung hasil kali diagonal sekunder: $bc = (-2) \\times 3 = -6$.<br>4. Lakukan pengurangan: $\\det(A) = ad - bc = 20 - (-6) = 20 + 6 = 26$.<br>5. Jadi nilai determinan matriks $A$ adalah 26 (pilihan A).",
      pitfalls: "Sering salah tanda saat mengurangkan bilangan negatif: $20 - (-6)$ menjadi $20 - 6 = 14$."
    }
  },
  {
    id: "mat-alj-matriks-det-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-det",
    category: "Matriks Singular",
    difficulty: "mudah",
    statement: "Diketahui matriks $B = \\begin{pmatrix} x+1 & 4 \\\\ 3 & 2 \\end{pmatrix}$. Jika matriks $B$ merupakan matriks singular, maka nilai $x$ yang memenuhi adalah ....",
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
      concept: "Matriks singular adalah matriks persegi yang tidak memiliki invers, yang terjadi jika dan hanya jika nilai determinannya sama dengan nol: $\\det(B) = 0$.",
      steps: "1. Syarat matriks singular: $\\det(B) = 0$.<br>2. Hitung rumus determinan matriks $B$:<br>$$\\det(B) = (x + 1)(2) - (4)(3) = 0$$<br>3. Sederhanakan persamaan aljabar:<br>$$2x + 2 - 12 = 0 \\implies 2x - 10 = 0 \\implies 2x = 10 \\implies x = 5$$<br>4. Jadi nilai $x$ adalah 5 (pilihan C).",
      pitfalls: "Lupa mengalikan 2 ke kedua suku $(x + 1)$ atau terbalik mendefinisikan matriks singular sebagai $\\det(B) \\neq 0$."
    }
  },
  {
    id: "mat-alj-matriks-det-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-det",
    category: "Sifat Determinan Perkalian Matriks",
    difficulty: "mudah",
    statement: "Diketahui matriks $P$ dan $Q$ keduanya berordo $2 \\times 2$. Jika $\\det(P) = 6$ dan $\\det(Q) = -2$, maka nilai dari $\\det(P \\cdot Q)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-12",
      "-3",
      "4",
      "8",
      "12"
    ],
    correctIndex: 0,
    solution: {
      concept: "Sifat perkalian determinan menyatakan bahwa determinan dari hasil perkalian dua matriks persegi berordo sama sama dengan hasil perkalian masing-masing determinannya:<br>$$\\det(AB) = \\det(A) \\cdot \\det(B)$$",
      steps: "1. Gunakan sifat determinan: $\\det(P \\cdot Q) = \\det(P) \\cdot \\det(Q)$.<br>2. Masukkan nilai yang diketahui: $\\det(P) = 6$ dan $\\det(Q) = -2$.<br>3. Hitung perkaliannya: $\\det(P \\cdot Q) = 6 \\times (-2) = -12$.<br>4. Jadi determinan matriks $P \\cdot Q$ bernilai -12 (pilihan A).",
      pitfalls: "Mengira $\\det(P \\cdot Q) = \\det(P) + \\det(Q)$ atau keliru dalam aturan tanda perkalian bilangan negatif."
    }
  },
  {
    id: "mat-alj-matriks-det-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-det",
    category: "Sifat Determinan Skalar dan Transpose",
    difficulty: "mudah",
    statement: "Matriks $A$ berordo $2 \\times 2$ memiliki determinan bernilai 4. Nilai determinan dari matriks $3A^T$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "12",
      "24",
      "36",
      "48",
      "72"
    ],
    correctIndex: 2,
    solution: {
      concept: "Untuk matriks persegi $A$ berordo $n \\times n$ dan konstanta $k$, berlaku sifat determinan:<br>1. $\\det(A^T) = \\det(A)$<br>2. $\\det(kA) = k^n \\cdot \\det(A)$",
      steps: "1. Identifikasi ordo matriks: $n = 2$ dan skalar pengali $k = 3$.<br>2. Terapkan sifat transpose: $\\det(A^T) = \\det(A) = 4$.<br>3. Terapkan sifat perkalian skalar matriks ordo $2 \\times 2$:<br>$$\\det(3A^T) = 3^2 \\cdot \\det(A^T) = 9 \\cdot 4 = 36$$<br>4. Jadi nilai determinan $3A^T$ adalah 36 (pilihan C).",
      pitfalls: "Sering lupa memangkatkan skalar dengan ordo matriks, sehingga hanya menghitung $3 \\times 4 = 12$."
    }
  },
  {
    id: "mat-alj-matriks-det-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-det",
    category: "Determinan Matriks Segitiga Ordo 3x3",
    difficulty: "mudah",
    statement: "Nilai determinan dari matriks segitiga atas $T = \\begin{pmatrix} 2 & 5 & -1 \\\\ 0 & 3 & 7 \\\\ 0 & 0 & 4 \\end{pmatrix}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "12",
      "18",
      "24",
      "32",
      "48"
    ],
    correctIndex: 2,
    solution: {
      concept: "Determinan dari matriks segitiga (baik segitiga atas maupun segitiga bawah) dan matriks diagonal sama dengan hasil kali seluruh elemen pada diagonal utamanya.",
      steps: "1. Perhatikan bahwa $T$ adalah matriks segitiga atas karena semua elemen di bawah diagonal utama bernilai nol.<br>2. Elemen diagonal utamanya adalah $t_{11} = 2$, $t_{22} = 3$, dan $t_{33} = 4$.<br>3. Hitung hasil kali elemen diagonal utama:<br>$$\\det(T) = 2 \\times 3 \\times 4 = 24$$<br>4. Jadi nilai determinan matriks $T$ adalah 24 (pilihan C).",
      pitfalls: "Menghitung secara manual menggunakan aturan Sarrus yang panjang padahal cukup mengalikan elemen diagonal utama."
    }
  }
];
