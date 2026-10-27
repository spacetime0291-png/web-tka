/**
 * Batch Task: TASK_mat-alj-matriks-ordo_MEDIUM
 * SubTopic: Notasi, Ordo, dan Jenis-Jenis Matriks (mat-alj-matriks-ordo)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-matriks-ordo-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-ordo",
    category: "Konstruksi Elemen Matriks dan Perhitungan Trace",
    difficulty: "sedang",
    statement: "Suatu matriks persegi $A = (a_{ij})$ berordo $3 \\times 3$ didefinisikan dengan aturan pembentukan elemen $a_{ij} = 2i^2 - 3j$. Nilai dari $\\text{Trace}(A)$ (jumlah elemen-elemen pada diagonal utama matriks $A$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6$",
      "$8$",
      "$10$",
      "$12$",
      "$15$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Trace dari suatu matriks persegi adalah jumlahan dari semua elemen yang berada pada diagonal utama, yaitu $\\text{Trace}(A) = \\sum_{i=1}^n a_{ii} = a_{11} + a_{22} + \\dots + a_{nn}$.",
      steps: "1. Diagonal utama matriks ordo $3 \\times 3$ terdiri atas elemen dengan indeks $i = j$ untuk $i \\in \\{1, 2, 3\\}$.<br>2. Hitung masing-masing elemen diagonal utama menggunakan rumus $a_{ij} = 2i^2 - 3j$:<br>- Untuk $i = 1, j = 1$:<br>$$a_{11} = 2(1)^2 - 3(1) = 2 - 3 = -1$$<br>- Untuk $i = 2, j = 2$:<br>$$a_{22} = 2(2)^2 - 3(2) = 2(4) - 6 = 8 - 6 = 2$$<br>- Untuk $i = 3, j = 3$:<br>$$a_{33} = 2(3)^2 - 3(3) = 2(9) - 9 = 18 - 9 = 9$$<br>3. Hitung $\\text{Trace}(A)$:<br>$$\\text{Trace}(A) = a_{11} + a_{22} + a_{33} = (-1) + 2 + 9 = 10$$<br>4. Jadi nilai trace matriks tersebut adalah $10$ (pilihan C).",
      pitfalls: "Menghitung seluruh elemen matriks yang tidak perlu; cukup hitung tiga elemen pada diagonal utama ($i=j$) untuk menghemat waktu."
    }
  },
  {
    id: "mat-alj-matriks-ordo-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-ordo",
    category: "Karakteristik Matriks Simetris Miring (Skew-Symmetric)",
    difficulty: "sedang",
    statement: "Suatu matriks persegi $K$ disebut matriks simetris miring (skew-symmetric) jika memenuhi $K^T = -K$. Diketahui matriks:<br>$$K = \\begin{pmatrix} 0 & 2x - 4 & 3 \\\\ 6 & 0 & y + 1 \\\\ z & -5 & 0 \\end{pmatrix}$$<br>Jika $K$ merupakan matriks simetris miring, maka nilai dari $x + y + z$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-4$",
      "$-2$",
      "$0$",
      "$2$",
      "$4$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada matriks simetris miring, berlaku $K^T = -K$, yang berarti elemen diagonal utama bernilai nol ($k_{ii} = 0$) dan pasangan elemen yang saling berkebalikan letaknya memenuhi relasi $k_{ij} = -k_{ji}$.",
      steps: "1. Tinjau pasangan elemen $k_{12}$ dan $k_{21}$:<br>$$k_{12} = -k_{21} \\implies 2x - 4 = -(6) \\implies 2x - 4 = -6 \\implies 2x = -2 \\implies x = -1$$<br>2. Tinjau pasangan elemen $k_{13}$ dan $k_{31}$:<br>$$k_{13} = -k_{31} \\implies 3 = -z \\implies z = -3$$<br>3. Tinjau pasangan elemen $k_{23}$ dan $k_{32}$:<br>$$k_{23} = -k_{32} \\implies y + 1 = -(-5) \\implies y + 1 = 5 \\implies y = 4$$<br>4. Hitung nilai $x + y + z$:<br>$$x + y + z = (-1) + 4 + (-3) = 0$$<br>5. Jadi nilai dari $x + y + z$ adalah $0$ (pilihan C).",
      pitfalls: "Siswa sering menganggap matriks simetris biasa ($k_{ij} = k_{ji}$) sehingga lupa menyertakan tanda negatif pada relasi elemen matriks simetris miring."
    }
  },
  {
    id: "mat-alj-matriks-ordo-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-ordo",
    category: "Analisis Ordo Hasil Operasi Matriks Bertingkat",
    difficulty: "sedang",
    statement: "Diketahui matriks $P$ berordo $2 \\times 3$, matriks $Q$ berordo $3 \\times 4$, dan matriks $R$ berordo $4 \\times 5$. Jika operasi matriks $(P \\cdot Q \\cdot R)^T$ terdefinisi, ordo dari matriks hasil operasi tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2 \\times 5$",
      "$5 \\times 2$",
      "$3 \\times 4$",
      "$4 \\times 3$",
      "$2 \\times 4$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Dua matriks $A_{m \\times k}$ dan $B_{k \\times n}$ dapat dikalikan dan menghasilkan matriks berordo $m \\times n$. Jika matriks $M$ berordo $m \\times n$, maka matriks transposnya $M^T$ memiliki ordo yang dibalik, yaitu $n \\times m$.",
      steps: "1. Perkalian matriks $P_{2 \\times 3} \\cdot Q_{3 \\times 4}$ menghasilkan matriks berordo $2 \\times 4$.<br>2. Perkalian hasil tersebut dengan $R_{4 \\times 5}$:<br>$$(P \\cdot Q)_{2 \\times 4} \\cdot R_{4 \\times 5} = (P \\cdot Q \\cdot R)_{2 \\times 5}$$<br>3. Operasikan operasi transpos pada matriks hasil berordo $2 \\times 5$:<br>$$\\text{Ordo dari } (P \\cdot Q \\cdot R)^T = 5 \\times 2$$<br>4. Jadi ordo matriks hasil akhir adalah $5 \\times 2$ (pilihan B).",
      pitfalls: "Lupa melakukan operasi transpos di akhir sehingga menjawab $2 \\times 5$ (pilihan A)."
    }
  },
  {
    id: "mat-alj-matriks-ordo-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-ordo",
    category: "Syarat Nilai Parameter pada Matriks Segitiga Atas",
    difficulty: "sedang",
    statement: "Diketahui matriks $S = \\begin{pmatrix} 4 & 7 & -2 \\\\ 2a - 6 & 5 & 8 \\\\ b + 1 & c - 3 & -1 \\end{pmatrix}$. Jika matriks $S$ merupakan matriks segitiga atas, maka nilai dari $a + 2b + 3c$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5$",
      "$7$",
      "$8$",
      "$10$",
      "$12$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Matriks segitiga atas adalah matriks persegi yang semua elemen di bawah diagonal utamanya bernilai nol ($s_{ij} = 0$ untuk $i > j$).",
      steps: "1. Identifikasi elemen-elemen di bawah diagonal utama matriks $S$:<br>- Elemen baris 2 kolom 1 ($s_{21}$): $2a - 6$<br>- Elemen baris 3 kolom 1 ($s_{31}$): $b + 1$<br>- Elemen baris 3 kolom 2 ($s_{32}$): $c - 3$<br>2. Samakan masing-masing elemen tersebut dengan nol:<br>$$2a - 6 = 0 \\implies 2a = 6 \\implies a = 3$$<br>$$b + 1 = 0 \\implies b = -1$$<br>$$c - 3 = 0 \\implies c = 3$$<br>3. Hitung nilai $a + 2b + 3c$:<br>$$a + 2b + 3c = 3 + 2(-1) + 3(3) = 3 - 2 + 9 = 10$$<br>4. Jadi nilai yang diminta adalah $10$ (pilihan D).",
      pitfalls: "Tertukar antara matriks segitiga atas (elemen di bawah diagonal bernilai nol) dengan matriks segitiga bawah (elemen di atas diagonal bernilai nol)."
    }
  },
  {
    id: "mat-alj-matriks-ordo-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-ordo",
    category: "Sifat Transpos pada Kesamaan Matriks Berordo Sama",
    difficulty: "sedang",
    statement: "Diketahui matriks $A = \\begin{pmatrix} 2x & 4 \\\\ 3y & -1 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 8 & -9 \\\\ 4 & z - 3 \\end{pmatrix}$. Jika berlaku kesamaan matriks $A = B^T$, maka nilai dari $x + y + z$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Dua matriks bernilai sama ($A = B^T$) jika dan hanya jika keduanya memiliki ordo yang sama dan setiap pasangan elemen yang bersesuaian nilainya tepat sama.",
      steps: "1. Tentukan transpos dari matriks $B$ ($B^T$):<br>$$B^T = \\begin{pmatrix} 8 & 4 \\\\ -9 & z - 3 \\end{pmatrix}$$<br>2. Samakan dengan matriks $A$:<br>$$\\begin{pmatrix} 2x & 4 \\\\ 3y & -1 \\end{pmatrix} = \\begin{pmatrix} 8 & 4 \\\\ -9 & z - 3 \\end{pmatrix}$$<br>3. Selesaikan nilai variabel dari elemen-elemen yang bersesuaian:<br>- Baris 1 Kolom 1: $2x = 8 \\implies x = 4$<br>- Baris 2 Kolom 1: $3y = -9 \\implies y = -3$<br>- Baris 2 Kolom 2: $-1 = z - 3 \\implies z = -1 + 3 = 2$<br>4. Hitung nilai $x + y + z$:<br>$$x + y + z = 4 + (-3) + 2 = 3$$<br>5. Jadi nilai dari $x + y + z$ adalah $3$ (pilihan C).",
      pitfalls: "Langsung menyamakan $A = B$ tanpa melakukan transpos terlebih dahulu pada matriks $B$."
    }
  }
];
