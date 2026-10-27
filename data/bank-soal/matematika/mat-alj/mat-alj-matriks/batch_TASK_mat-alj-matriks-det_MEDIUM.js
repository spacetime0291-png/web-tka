/**
 * Batch Task: TASK_mat-alj-matriks-det_MEDIUM
 * SubTopic: Determinan Matriks 2x2 dan 3x3 (mat-alj-matriks-det)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-matriks-det-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-det",
    category: "Determinan Matriks Ordo 3x3",
    difficulty: "sedang",
    statement: "Nilai determinan dari matriks $M = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 1 & 4 \\\\ 1 & 0 & 2 \\end{pmatrix}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-2",
      "-1",
      "0",
      "1",
      "3"
    ],
    correctIndex: 1,
    solution: {
      concept: "Determinan matriks $3 \\times 3$ dapat dihitung menggunakan aturan Sarrus atau ekspansi kofaktor baris/kolom. Menggunakan ekspansi kofaktor pada baris yang memuat elemen 0 akan mempermudah perhitungan aljabar.",
      steps: "1. Gunakan ekspansi kofaktor sepanjang baris ke-3 ($a_{31} = 1, a_{32} = 0, a_{33} = 2$):<br>$$\\det(M) = 1 \\cdot \\det\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix} - 0 + 2 \\cdot \\det\\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$$<br>2. Hitung sub-determinan $2 \\times 2$:<br>$$\\det\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix} = (2)(4) - (3)(1) = 8 - 3 = 5$$<br>$$\\det\\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix} = (1)(1) - (2)(2) = 1 - 4 = -3$$<br>3. Substitusikan kembali:<br>$$\\det(M) = 1(5) + 2(-3) = 5 - 6 = -1$$<br>4. Jadi nilai determinan matriks $M$ adalah -1 (pilihan B).",
      pitfalls: "Kesalahan tanda selang-seling $+ - +$ pada kofaktor atau salah mengalikan diagonal pada aturan Sarrus."
    }
  },
  {
    id: "mat-alj-matriks-det-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-det",
    category: "Komposisi Sifat Determinan Matriks",
    difficulty: "sedang",
    statement: "Diketahui matriks $A$ dan $B$ berordo $2 \\times 2$ tak-singular dengan $\\det(A) = 3$ dan $\\det(B) = -4$. Nilai dari $\\det(2 A^{-1} B^T)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-\\frac{16}{3}$",
      "$-\\frac{8}{3}$",
      "$-\\frac{4}{3}$",
      "$\\frac{8}{3}$",
      "$\\frac{16}{3}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Untuk matriks berordo $n \\times n$ berlaku sifat-sifat determinan aljabar linier:<br>1. $\\det(k M) = k^n \\det(M)$<br>2. $\\det(M_1 M_2) = \\det(M_1) \\cdot \\det(M_2)$<br>3. $\\det(M^{-1}) = \\frac{1}{\\det(M)}$<br>4. $\\det(M^T) = \\det(M)$",
      steps: "1. Karena matriks berordo $2 \\times 2$, maka pemangkatan skalar $k = 2$ bernilai $2^2 = 4$.<br>2. Uraikan determinan menurut sifat perkalian:<br>$$\\det(2 A^{-1} B^T) = 2^2 \\cdot \\det(A^{-1}) \\cdot \\det(B^T)$$<br>3. Masukkan nilai determinan yang telah diketahui:<br>$$\\det(2 A^{-1} B^T) = 4 \\cdot \\left(\\frac{1}{3}\\right) \\cdot (-4) = -\\frac{16}{3}$$<br>4. Jadi nilai yang diperoleh adalah $-\\frac{16}{3}$ (pilihan A).",
      pitfalls: "Lupa memangkatkan skalar $2$ dengan ordo matriks $n = 2$ sehingga hanya memperoleh $-8/3$."
    }
  },
  {
    id: "mat-alj-matriks-det-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-det",
    category: "Persamaan Determinan Aljabar",
    difficulty: "sedang",
    statement: "Diketahui matriks $C = \\begin{pmatrix} x & 1 \\\\ 11 & x \\end{pmatrix}$ dan $D = \\begin{pmatrix} 5 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Jika $\\det(C) = \\det(D)$, maka nilai positif $x$ yang memenuhi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    correctIndex: 3,
    solution: {
      concept: "Dua matriks memiliki determinan yang sama jika nilai numerik hasil ekspansi masing-masing determinan memenuhi kesamaan aljabar: $\\det(C) = \\det(D)$.",
      steps: "1. Hitung determinan matriks $C$:<br>$$\\det(C) = (x)(x) - (1)(11) = x^2 - 11$$<br>2. Hitung determinan matriks $D$:<br>$$\\det(D) = (5)(4) - (2)(3) = 20 - 6 = 14$$<br>3. Samakan kedua determinan:<br>$$x^2 - 11 = 14 \\implies x^2 = 25 \\implies x = \\pm 5$$<br>4. Karena diminta nilai positif $x$, maka $x = 5$ (pilihan D).",
      pitfalls: "Mengabaikan syarat nilai positif atau salah hitung determinan $D$ menjadi $20 + 6 = 26$."
    }
  },
  {
    id: "mat-alj-matriks-det-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-det",
    category: "Nilai Parameter Matriks Singular Ordo 3x3",
    difficulty: "sedang",
    statement: "Matriks $K = \\begin{pmatrix} 2 & 1 & 0 \\\\ 4 & x & 3 \\\\ -2 & 3 & 1 \\end{pmatrix}$ merupakan matriks singular. Nilai $x$ yang memenuhi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "8",
      "10",
      "12",
      "14",
      "16"
    ],
    correctIndex: 3,
    solution: {
      concept: "Syarat perlu dan cukup agar suatu matriks persegi berordo $3 \\times 3$ berstatus singular adalah nilai determinannya bernilai nol ($\det(K) = 0$).",
      steps: "1. Hitung $\\det(K)$ dengan ekspansi baris pertama ($2, 1, 0$):<br>$$\\det(K) = 2 \\cdot \\det\\begin{pmatrix} x & 3 \\\\ 3 & 1 \\end{pmatrix} - 1 \\cdot \\det\\begin{pmatrix} 4 & 3 \\\\ -2 & 1 \\end{pmatrix} + 0$$<br>2. Selesaikan masing-masing determinan minor $2 \\times 2$:<br>$$\\det\\begin{pmatrix} x & 3 \\\\ 3 & 1 \\end{pmatrix} = x(1) - 3(3) = x - 9$$<br>$$\\det\\begin{pmatrix} 4 & 3 \\\\ -2 & 1 \\end{pmatrix} = 4(1) - 3(-2) = 4 + 6 = 10$$<br>3. Susun persamaan determinan bernilai nol:<br>$$2(x - 9) - 1(10) = 0 \\implies 2x - 18 - 10 = 0 \\implies 2x = 28 \\implies x = 14$$<br>4. Jadi nilai $x$ adalah 14 (pilihan D).",
      pitfalls: "Kesalahan tanda minus pada kofaktor elemen tengah baris pertama atau salah menjumlahkan $4 - (-6) = 10$."
    }
  },
  {
    id: "mat-alj-matriks-det-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-det",
    category: "Persamaan Karakteristik Determinan Matriks",
    difficulty: "sedang",
    statement: "Diketahui matriks $A = \\begin{pmatrix} 5 & 2 \\\\ 2 & 2 \\end{pmatrix}$ dan $I$ adalah matriks identitas ordo $2 \\times 2$. Jika nilai determinan dari matriks $(A - \\lambda I)$ sama dengan nol, maka jumlah seluruh nilai $\\lambda$ yang memenuhi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    correctIndex: 3,
    solution: {
      concept: "Persamaan $\\det(A - \\lambda I) = 0$ disebut persamaan karakteristik matriks. Untuk matriks $2 \\times 2$, jumlah akar-akar karakteristik $\\lambda_1 + \\lambda_2$ sama dengan nilai jejak (*trace*) dari matriks $A$, yaitu jumlah elemen-elemen diagonal utamanya.",
      steps: "1. Bentuk matriks $(A - \\lambda I)$:<br>$$A - \\lambda I = \\begin{pmatrix} 5 - \\lambda & 2 \\\\ 2 & 2 - \\lambda \\end{pmatrix}$$<br>2. Hitung nilai determinannya dan samakan dengan nol:<br>$$\\det(A - \\lambda I) = (5 - \\lambda)(2 - \\lambda) - (2)(2) = 0$$<br>3. Jabarkan bentuk kuadrat:<br>$$\\lambda^2 - 7\\lambda + 10 - 4 = 0 \\implies \\lambda^2 - 7\\lambda + 6 = 0$$<br>4. Berdasarkan teorema Vieta, jumlah akar-akar persamaan kuadrat $a\\lambda^2 + b\\lambda + c = 0$ adalah $-\\frac{b}{a} = -\\frac{-7}{1} = 7$.<br>(Dapat diverifikasi bahwa akarnya adalah $\\lambda = 6$ dan $\\lambda = 1$, dengan $6 + 1 = 7$).<br>5. Jadi jumlah seluruh nilai $\\lambda$ adalah 7 (pilihan D).",
      pitfalls: "Salah menjabarkan perkalian suku aljabar $(5 - \\lambda)(2 - \\lambda)$ atau salah tanda pada rumus Vieta."
    }
  }
];
