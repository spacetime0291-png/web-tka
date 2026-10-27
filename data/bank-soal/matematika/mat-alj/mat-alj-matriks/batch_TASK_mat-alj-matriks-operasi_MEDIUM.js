/**
 * Batch Task: TASK_mat-alj-matriks-operasi_MEDIUM
 * SubTopic: Penjumlahan, Pengurangan, dan Perkalian Skalar Matriks (mat-alj-matriks-operasi)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-matriks-operasi-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-operasi",
    category: "Penyelesaian Persamaan Matriks untuk Menemukan Matriks X",
    difficulty: "sedang",
    statement: "Diketahui matriks $A = \\begin{pmatrix} 3 & -3 \\\\ 6 & 0 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 4 & 1 \\\\ 5 & 2 \\end{pmatrix}$. Jika matriks $X$ memenuhi persamaan aljabar matriks $2X + A = 3B - X$, maka matriks $X$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 3 & 2 \\\\ 3 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 0 \\\\ 3 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 9 & 6 \\\\ 9 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 3 \\\\ 2 & 3 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Persamaan matriks linear diselesaikan menggunakan sifat aljabar penjumlahan dan perkalian skalar: kumpulkan suku yang memuat variabel matriks $X$ ke satu ruas:<br>$$2X + X = 3B - A \\implies 3X = 3B - A \\implies X = \\frac{1}{3}(3B - A)$$",
      steps: "1. Sederhanakan persamaan matriks:<br>$$2X + A = 3B - X \\implies 3X = 3B - A$$<br>2. Hitung matriks $3B$:<br>$$3B = 3 \\begin{pmatrix} 4 & 1 \\\\ 5 & 2 \\end{pmatrix} = \\begin{pmatrix} 12 & 3 \\\\ 15 & 6 \\end{pmatrix}$$<br>3. Kurangkan dengan matriks $A$:<br>$$3B - A = \\begin{pmatrix} 12 & 3 \\\\ 15 & 6 \\end{pmatrix} - \\begin{pmatrix} 3 & -3 \\\\ 6 & 0 \\end{pmatrix} = \\begin{pmatrix} 12 - 3 & 3 - (-3) \\\\ 15 - 6 & 6 - 0 \\end{pmatrix} = \\begin{pmatrix} 9 & 6 \\\\ 9 & 6 \\end{pmatrix}$$<br>4. Kalikan dengan skalar $\\frac{1}{3}$:<br>$$X = \\frac{1}{3} \\begin{pmatrix} 9 & 6 \\\\ 9 & 6 \\end{pmatrix} = \\begin{pmatrix} 3 & 2 \\\\ 3 & 2 \\end{pmatrix}$$<br>5. Jadi matriks $X$ adalah pilihan A.",
      pitfalls: "Lupa mengalikan dengan skalar $\\frac{1}{3}$ di langkah terakhir sehingga memilih $\\begin{pmatrix} 9 & 6 \\\\ 9 & 6 \\end{pmatrix}$."
    }
  },
  {
    id: "mat-alj-matriks-operasi-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-operasi",
    category: "Sistem Persamaan Linier pada Elemen Kesamaan Matriks",
    difficulty: "sedang",
    statement: "Diketahui kesamaan matriks:<br>$$3 \\begin{pmatrix} x & 2 \\\\ -1 & y \\end{pmatrix} - \\begin{pmatrix} y & 1 \\\\ -2 & 2x \\end{pmatrix} = \\begin{pmatrix} 5 & 5 \\\\ -1 & 6 \\end{pmatrix}$$<br>Nilai dari $x^2 + y^2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$13$",
      "$20$",
      "$25$",
      "$29$",
      "$34$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Lakukan operasi skalar dan pengurangan pada ruas kiri terlebih dahulu, lalu samakan elemen-elemen yang seletak untuk memperoleh sistem persamaan linear dua variabel (SPLDV) dalam $x$ dan $y$.",
      steps: "1. Operasikan ruas kiri:<br>$$\\begin{pmatrix} 3x & 6 \\\\ -3 & 3y \\end{pmatrix} - \\begin{pmatrix} y & 1 \\\\ -2 & 2x \\end{pmatrix} = \\begin{pmatrix} 3x - y & 5 \\\\ -1 & 3y - 2x \\end{pmatrix}$$<br>2. Samakan dengan ruas kanan $\\begin{pmatrix} 5 & 5 \\\\ -1 & 6 \\end{pmatrix}$:<br>- Dari elemen baris 1 kolom 1: $3x - y = 5 \\implies y = 3x - 5$<br>- Dari elemen baris 2 kolom 2: $3y - 2x = 6$<br>3. Substitusikan $y = 3x - 5$ ke persamaan kedua:<br>$$3(3x - 5) - 2x = 6 \\implies 9x - 15 - 2x = 6 \\implies 7x = 21 \\implies x = 3$$<br>4. Cari nilai $y$:<br>$$y = 3(3) - 5 = 9 - 5 = 4$$<br>5. Hitung nilai $x^2 + y^2$:<br>$$x^2 + y^2 = 3^2 + 4^2 = 9 + 16 = 25$$<br>6. Jadi nilai $x^2 + y^2$ adalah $25$ (pilihan C).",
      pitfalls: "Kesalahan tanda saat melakukan substitusi aljabar $3(3x - 5) = 9x - 15$."
    }
  },
  {
    id: "mat-alj-matriks-operasi-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-operasi",
    category: "Kombinasi Linier Dua Matriks",
    difficulty: "sedang",
    statement: "Diberikan matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}$, $B = \\begin{pmatrix} 2 & 1 \\\\ -1 & 1 \\end{pmatrix}$, dan $C = \\begin{pmatrix} 8 & 10 \\\\ -2 & 14 \\end{pmatrix}$. Jika matriks $C$ dapat dinyatakan sebagai kombinasi linier $C = p A + q B$, maka nilai dari $p - q$ adalah ....",
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
    correctIndex: 1,
    solution: {
      concept: "Kombinasi linier dua matriks $C = p A + q B$ berarti setiap elemen matriks $C$ merupakan jumlahan dari perkalian skalar elemen matriks $A$ dan $B$: $c_{ij} = p a_{ij} + q b_{ij}$.",
      steps: "1. Susun kombinasi linier $p A + q B$:<br>$$p \\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix} + q \\begin{pmatrix} 2 & 1 \\\\ -1 & 1 \\end{pmatrix} = \\begin{pmatrix} p + 2q & 2p + q \\\\ -q & 3p + q \\end{pmatrix}$$<br>2. Samakan dengan matriks $C = \\begin{pmatrix} 8 & 10 \\\\ -2 & 14 \\end{pmatrix}$:<br>- Dari elemen baris 2 kolom 1: $-q = -2 \\implies q = 2$<br>- Dari elemen baris 1 kolom 1: $p + 2q = 8 \\implies p + 2(2) = 8 \\implies p + 4 = 8 \\implies p = 4$<br>3. Uji konsistensi pada elemen lainnya:<br>- Elemen baris 1 kolom 2: $2(4) + 2 = 10$ (sesuai)<br>- Elemen baris 2 kolom 2: $3(4) + 2 = 14$ (sesuai)<br>4. Hitung nilai $p - q$:<br>$$p - q = 4 - 2 = 2$$<br>5. Jadi nilai $p - q$ adalah $2$ (pilihan B).",
      pitfalls: "Kesalahan membaca elemen baris 2 kolom 1 (lupa tanda minus pada $-q = -2$)."
    }
  },
  {
    id: "mat-alj-matriks-operasi-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-operasi",
    category: "Operasi Transpos pada Penjumlahan Matriks Berordo 3x3",
    difficulty: "sedang",
    statement: "Diketahui matriks $M = \\begin{pmatrix} 1 & 4 & -2 \\\\ 3 & 0 & 5 \\\\ 2 & -1 & 6 \\end{pmatrix}$ dan $N = \\begin{pmatrix} 2 & -1 & 3 \\\\ 0 & 4 & 1 \\\\ -3 & 2 & 5 \\end{pmatrix}$. Elemen pada baris ke-2 kolom ke-3 dari matriks $(2M - N^T)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4$",
      "$6$",
      "$8$",
      "$9$",
      "$11$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Elemen pada baris ke-$i$ dan kolom ke-$j$ dari matriks transpos $N^T$ adalah elemen baris ke-$j$ dan kolom ke-$i$ dari matriks asal $N$, yaitu $(N^T)_{ij} = n_{ji}$.",
      steps: "1. Elemen baris ke-2 kolom ke-3 dari $(2M - N^T)$ dirumuskan sebagai:<br>$$(2M - N^T)_{23} = 2 m_{23} - (N^T)_{23} = 2 m_{23} - n_{32}$$<br>2. Ambil elemen yang bersesuaian dari matriks $M$ dan $N$:<br>- $m_{23}$ (baris ke-2, kolom ke-3 matriks $M$) adalah $5$.<br>- $n_{32}$ (baris ke-3, kolom ke-2 matriks $N$) adalah $2$.<br>3. Hitung nilainya:<br>$$(2M - N^T)_{23} = 2(5) - 2 = 10 - 2 = 8$$<br>4. Jadi nilai elemen tersebut adalah $8$ (pilihan C).",
      pitfalls: "Mengambil elemen $n_{23} = 1$ alih-alih elemen transpos $n_{32} = 2$ sehingga keliru menghitung $2(5) - 1 = 9$."
    }
  },
  {
    id: "mat-alj-matriks-operasi-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-operasi",
    category: "Persamaan Matriks Melibatkan Transpos dan Identitas",
    difficulty: "sedang",
    statement: "Diketahui matriks $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ dan matriks identitas $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$. Jika matriks $A$ memenuhi sistem persamaan $A + A^T = 4I$ dan $A - A^T = \\begin{pmatrix} 0 & 6 \\\\ -6 & 0 \\end{pmatrix}$, maka nilai dari $a + d + b - c$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4$",
      "$6$",
      "$8$",
      "$10$",
      "$12$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Gunakan dekomposisi matriks menjadi bagian simetris $\\frac{1}{2}(A + A^T)$ dan bagian antisimetris $\\frac{1}{2}(A - A^T)$:<br>$$A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)$$",
      steps: "1. Jumlahkan kedua persamaan matriks yang diketahui:<br>$$(A + A^T) + (A - A^T) = 2A$$<br>$$2A = \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} + \\begin{pmatrix} 0 & 6 \\\\ -6 & 0 \\end{pmatrix} = \\begin{pmatrix} 4 & 6 \\\\ -6 & 4 \\end{pmatrix}$$<br>2. Peroleh matriks $A$:<br>$$A = \\frac{1}{2} \\begin{pmatrix} 4 & 6 \\\\ -6 & 4 \\end{pmatrix} = \\begin{pmatrix} 2 & 3 \\\\ -3 & 2 \\end{pmatrix}$$<br>3. Identifikasi masing-masing elemen matriks $A$:<br>$$a = 2, \\quad b = 3, \\quad c = -3, \\quad d = 2$$<br>4. Hitung ekspresi aljabar yang diminta:<br>$$a + d + b - c = 2 + 2 + 3 - (-3) = 4 + 3 + 3 = 10$$<br>5. Jadi nilai dari $a + d + b - c$ adalah $10$ (pilihan D).",
      pitfalls: "Kesalahan tanda minus negatif saat mengurangkan $b - c = 3 - (-3) = 6$."
    }
  }
];
