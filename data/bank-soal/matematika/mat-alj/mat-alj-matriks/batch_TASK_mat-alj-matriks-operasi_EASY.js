/**
 * Batch Task: TASK_mat-alj-matriks-operasi_EASY
 * SubTopic: Penjumlahan, Pengurangan, dan Perkalian Skalar Matriks (mat-alj-matriks-operasi)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-matriks-operasi-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-operasi",
    category: "Syarat Penjumlahan dan Pengurangan Matriks",
    difficulty: "mudah",
    statement: "Dua buah matriks $A$ dan $B$ dapat dijumlahkan atau dikurangkan ($A + B$ atau $A - B$) jika dan hanya jika memenuhi syarat ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Keduanya memiliki ordo yang sama",
      "Jumlah kolom matriks A sama dengan jumlah baris matriks B",
      "Keduanya merupakan matriks persegi",
      "Keduanya memiliki nilai determinan yang sama",
      "Keduanya memiliki elemen-elemen bernilai positif"
    ],
    correctIndex: 0,
    solution: {
      concept: "Operasi penjumlahan dan pengurangan matriks dilakukan elemen demi elemen pada posisi yang bersesuaian ($c_{ij} = a_{ij} \\pm b_{ij}$). Oleh karena itu, syarat mutlaknya adalah kedua matriks harus memiliki dimensi (ordo) yang identik.",
      steps: "1. Tinjau operasi penjumlahan elemen per elemen: jika matriks $A$ berordo $m \\times n$ dan matriks $B$ berordo $p \\times q$, maka operasi $A \\pm B$ hanya terdefinisi jika banyak baris sama ($m = p$) dan banyak kolom sama ($n = q$).<br>2. Pilihan B adalah syarat untuk perkalian dua matriks ($A \\cdot B$), bukan penjumlahan/pengurangan.<br>3. Jadi syarat yang benar adalah keduanya memiliki ordo yang sama (pilihan A).",
      pitfalls: "Siswa sering tertukar dengan syarat perkalian matriks (jumlah kolom matriks pertama harus sama dengan jumlah baris matriks kedua)."
    }
  },
  {
    id: "mat-alj-matriks-operasi-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-operasi",
    category: "Penjumlahan Dua Matriks Ordo 2x2",
    difficulty: "mudah",
    statement: "Diketahui matriks $A = \\begin{pmatrix} 3 & -2 \\\\ 4 & 5 \\end{pmatrix}$ dan $B = \\begin{pmatrix} -1 & 7 \\\\ 2 & -3 \\end{pmatrix}$. Hasil dari operasi $A + B$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 2 & 5 \\\\ 6 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 9 \\\\ 2 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} -2 & -5 \\\\ -6 & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 9 \\\\ 6 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 5 \\\\ 6 & 2 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Penjumlahan dua matriks dilakukan dengan menjumlahkan setiap pasang elemen yang seletak:<br>$$\\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix} + \\begin{pmatrix} b_{11} & b_{12} \\\\ b_{21} & b_{22} \\end{pmatrix} = \\begin{pmatrix} a_{11}+b_{11} & a_{12}+b_{12} \\\\ a_{21}+b_{21} & a_{22}+b_{22} \\end{pmatrix}$$",
      steps: "1. Jumlahkan elemen baris 1:<br>- Kolom 1: $3 + (-1) = 2$<br>- Kolom 2: $-2 + 7 = 5$<br>2. Jumlahkan elemen baris 2:<br>- Kolom 1: $4 + 2 = 6$<br>- Kolom 2: $5 + (-3) = 2$<br>3. Susun matriks hasil:<br>$$A + B = \\begin{pmatrix} 2 & 5 \\\\ 6 & 2 \\end{pmatrix}$$<br>4. Jadi hasil penjumlahannya adalah pilihan A.",
      pitfalls: "Kesalahan perhitungan tanda negatif pada $-2 + 7$ atau $5 + (-3)$."
    }
  },
  {
    id: "mat-alj-matriks-operasi-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-operasi",
    category: "Perkalian Skalar pada Matriks",
    difficulty: "mudah",
    statement: "Diketahui matriks $P = \\begin{pmatrix} 4 & -6 \\\\ 8 & 2 \\end{pmatrix}$. Hasil dari perkalian skalar $\\frac{1}{2}P$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 2 & -3 \\\\ 4 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 8 & -12 \\\\ 16 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 3 \\\\ 4 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & -3 \\\\ 8 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -6 \\\\ 4 & 2 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Perkalian suatu matriks dengan skalar $k$ dilakukan dengan mengalikan setiap elemen matriks tersebut dengan bilangan skalar $k$:<br>$$k \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = \\begin{pmatrix} ka & kb \\\\ kc & kd \\end{pmatrix}$$",
      steps: "1. Kalikan setiap elemen matriks $P$ dengan $\\frac{1}{2}$:<br>- Baris 1: $\\frac{1}{2}(4) = 2$, $\\frac{1}{2}(-6) = -3$<br>- Baris 2: $\\frac{1}{2}(8) = 4$, $\\frac{1}{2}(2) = 1$<br>2. Susun matriks hasil:<br>$$\\frac{1}{2}P = \\begin{pmatrix} 2 & -3 \\\\ 4 & 1 \\end{pmatrix}$$<br>3. Jadi jawaban yang benar adalah pilihan A.",
      pitfalls: "Hanya mengalikan elemen baris pertama atau hanya elemen diagonal utama, melupakan bahwa skalar harus dikalikan ke seluruh elemen matriks."
    }
  },
  {
    id: "mat-alj-matriks-operasi-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-operasi",
    category: "Operasi Campuran Perkalian Skalar dan Pengurangan",
    difficulty: "mudah",
    statement: "Diketahui matriks $K = \\begin{pmatrix} 2 & 3 \\\\ -1 & 4 \\end{pmatrix}$ dan $L = \\begin{pmatrix} 1 & -2 \\\\ 3 & 0 \\end{pmatrix}$. Hasil operasi matriks $2K - L$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 3 & 8 \\\\ -5 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 4 \\\\ -5 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 8 \\\\ 1 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 8 \\\\ -1 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 5 \\\\ -4 & 4 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Operasi kombinasi $2K - L$ diselesaikan dengan mengalikan skalar 2 terlebih dahulu ke seluruh elemen matriks $K$, lalu mengurangkan hasilnya dengan elemen-elemen seletak dari matriks $L$.",
      steps: "1. Hitung matriks $2K$:<br>$$2K = 2 \\begin{pmatrix} 2 & 3 \\\\ -1 & 4 \\end{pmatrix} = \\begin{pmatrix} 4 & 6 \\\\ -2 & 8 \\end{pmatrix}$$<br>2. Kurangkan dengan matriks $L$:<br>$$2K - L = \\begin{pmatrix} 4 & 6 \\\\ -2 & 8 \\end{pmatrix} - \\begin{pmatrix} 1 & -2 \\\\ 3 & 0 \\end{pmatrix}$$<br>- Baris 1 Kolom 1: $4 - 1 = 3$<br>- Baris 1 Kolom 2: $6 - (-2) = 6 + 2 = 8$<br>- Baris 2 Kolom 1: $-2 - 3 = -5$<br>- Baris 2 Kolom 2: $8 - 0 = 8$<br>3. Susun matriks hasil:<br>$$2K - L = \\begin{pmatrix} 3 & 8 \\\\ -5 & 8 \\end{pmatrix}$$<br>4. Jadi jawabannya adalah pilihan A.",
      pitfalls: "Kesalahan tanda pada operasi pengurangan $6 - (-2)$ yang sering keliru dihitung sebagai $6 - 2 = 4$."
    }
  },
  {
    id: "mat-alj-matriks-operasi-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-operasi",
    category: "Kesamaan Matriks Melalui Penjumlahan Sederhana",
    difficulty: "mudah",
    statement: "Diketahui persamaan matriks $\\begin{pmatrix} x & 5 \\\\ 2 & y \\end{pmatrix} + \\begin{pmatrix} 3 & -1 \\\\ 4 & 2 \\end{pmatrix} = \\begin{pmatrix} 7 & 4 \\\\ 6 & 9 \\end{pmatrix}$. Nilai dari perkalian $x \\cdot y$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$14$",
      "$21$",
      "$24$",
      "$28$",
      "$32$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Gunakan konsep penjumlahan matriks dan kesamaan dua matriks untuk menyusun persamaan linier bagi masing-masing elemen yang memuat variabel.",
      steps: "1. Jumlahkan ruas kiri:<br>$$\\begin{pmatrix} x + 3 & 5 + (-1) \\\\ 2 + 4 & y + 2 \\end{pmatrix} = \\begin{pmatrix} x + 3 & 4 \\\\ 6 & y + 2 \\end{pmatrix}$$<br>2. Samakan dengan ruas kanan:<br>$$\\begin{pmatrix} x + 3 & 4 \\\\ 6 & y + 2 \\end{pmatrix} = \\begin{pmatrix} 7 & 4 \\\\ 6 & 9 \\end{pmatrix}$$<br>3. Selesaikan nilai variabel:<br>- Elemen baris 1 kolom 1: $x + 3 = 7 \\implies x = 7 - 3 = 4$<br>- Elemen baris 2 kolom 2: $y + 2 = 9 \\implies y = 9 - 2 = 7$<br>4. Hitung nilai $x \\cdot y$:<br>$$x \\cdot y = 4 \\times 7 = 28$$<br>5. Jadi nilai perkaliannya adalah $28$ (pilihan D).",
      pitfalls: "Menjumlahkan variabel alih-alih mengalikannya ($4 + 7 = 11$), atau salah memindahkan ruas."
    }
  }
];
