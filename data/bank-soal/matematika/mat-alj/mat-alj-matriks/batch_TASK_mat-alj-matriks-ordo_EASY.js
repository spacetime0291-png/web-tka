/**
 * Batch Task: TASK_mat-alj-matriks-ordo_EASY
 * SubTopic: Notasi, Ordo, dan Jenis-Jenis Matriks (mat-alj-matriks-ordo)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-matriks-ordo-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-ordo",
    category: "Definisi Ordo Matriks",
    difficulty: "mudah",
    statement: "Suatu matriks $A$ memiliki $3$ baris horizontal dan $4$ kolom vertikal. Ordo dari matriks $A$ dan banyak elemen (anggota) di dalam matriks tersebut berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3 \\times 4$ dan $12$ elemen",
      "$4 \\times 3$ dan $12$ elemen",
      "$3 \\times 4$ dan $7$ elemen",
      "$4 \\times 3$ dan $7$ elemen",
      "$12 \\times 1$ dan $12$ elemen"
    ],
    correctIndex: 0,
    solution: {
      concept: "Ordo suatu matriks dinyatakan dalam bentuk $m \\times n$, di mana $m$ melambangkan banyak baris horizontal dan $n$ melambangkan banyak kolom vertikal. Banyak seluruh elemen di dalam matriks tersebut sama dengan hasil kali $m \\times n$.",
      steps: "1. Tentukan banyak baris ($m$): $m = 3$.<br>2. Tentukan banyak kolom ($n$): $n = 4$.<br>3. Tuliskan ordo matriks dalam format $(\\text{baris} \\times \\text{kolom})$: ordo matriks $A$ adalah $3 \\times 4$.<br>4. Hitung banyak total elemen di dalam matriks: $3 \\times 4 = 12$ elemen.<br>5. Jadi jawabannya adalah $3 \\times 4$ dan $12$ elemen (pilihan A).",
      pitfalls: "Tertukar urutan antara baris dan kolom menjadi $4 \\times 3$, atau menjumlahkan baris dan kolom ($3 + 4 = 7$) alih-alih mengalikannya."
    }
  },
  {
    id: "mat-alj-matriks-ordo-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-ordo",
    category: "Penentuan Nilai Elemen Matriks Berindeks a_ij",
    difficulty: "mudah",
    statement: "Diketahui matriks $B = \\begin{pmatrix} 2 & -3 & 5 \\\\ 4 & 1 & -7 \\\\ -1 & 6 & 0 \\end{pmatrix}$. Nilai dari $b_{23} + b_{31} - b_{12}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-11$",
      "$-5$",
      "$-3$",
      "$1$",
      "$5$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Notasi $b_{ij}$ menyatakan elemen matriks $B$ yang terletak pada baris ke-$i$ dan kolom ke-$j$.",
      steps: "1. Cari elemen $b_{23}$ (baris ke-2, kolom ke-3):<br>$$b_{23} = -7$$<br>2. Cari elemen $b_{31}$ (baris ke-3, kolom ke-1):<br>$$b_{31} = -1$$<br>3. Cari elemen $b_{12}$ (baris ke-1, kolom ke-2):<br>$$b_{12} = -3$$<br>4. Hitung operasi aljabar yang diminta:<br>$$b_{23} + b_{31} - b_{12} = (-7) + (-1) - (-3) = -8 + 3 = -5$$<br>5. Jadi nilai hasil operasi tersebut adalah $-5$ (pilihan B).",
      pitfalls: "Salah membaca posisi indeks baris dan kolom (misal tertukar antara $b_{23}$ dan $b_{32}$), atau salah dalam operasi tanda minus negatif $-(-3) = +3$."
    }
  },
  {
    id: "mat-alj-matriks-ordo-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-ordo",
    category: "Karakteristik Jenis-Jenis Matriks Khusus",
    difficulty: "mudah",
    statement: "Matriks persegi yang seluruh elemen di luar diagonal utamanya bernilai nol, sedangkan elemen-elemen pada diagonal utamanya semuanya bernilai $1$, dinamakan matriks ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Identitas",
      "Nol",
      "Diagonal umum",
      "Skalar bukan satu",
      "Segitiga atas"
    ],
    correctIndex: 0,
    solution: {
      concept: "Matriks identitas ($I$) adalah matriks persegi khusus yang elemen diagonal utamanya bernilai 1 ($a_{ii} = 1$) dan semua elemen lainnya bernilai 0 ($a_{ij} = 0$ untuk $i \\neq j$).",
      steps: "1. Perhatikan ciri-ciri yang disebutkan:<br>- Merupakan matriks persegi ($n \\times n$).<br>- Elemen di luar diagonal utama bernilai 0.<br>- Seluruh elemen pada diagonal utama bernilai 1.<br>2. Contoh untuk ordo $3 \\times 3$:<br>$$I = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$<br>3. Matriks dengan sifat ini secara baku didefinisikan sebagai matriks identitas.<br>4. Jadi jawaban yang tepat adalah pilihan A.",
      pitfalls: "Tertukar dengan matriks skalar umum (diagonal utamanya berupa bilangan konstan sembarang $k$) atau matriks diagonal (diagonal utamanya berupa sembarang angka)."
    }
  },
  {
    id: "mat-alj-matriks-ordo-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-ordo",
    category: "Konsep Transpos Matriks Dasar",
    difficulty: "mudah",
    statement: "Diketahui matriks $C = \\begin{pmatrix} 5 & 2 & -1 \\\\ 3 & 0 & 4 \\end{pmatrix}$. Transpos dari matriks $C$, yaitu $C^T$, adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 5 & 3 \\\\ 2 & 0 \\\\ -1 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 5 \\\\ 0 & 2 \\\\ 4 & -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 2 & 5 \\\\ 4 & 0 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} -5 & -2 & 1 \\\\ -3 & 0 & -4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 5 \\\\ 0 & 3 \\\\ 4 & -1 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Transpos matriks ($C^T$) diperoleh dengan menukar baris menjadi kolom dan kolom menjadi baris. Jika matriks $C$ berordo $m \\times n$, maka matriks transposnya $C^T$ berordo $n \\times m$.",
      steps: "1. Matriks $C$ berordo $2 \\times 3$:<br>- Baris 1: $\\begin{pmatrix} 5 & 2 & -1 \\end{pmatrix}$ menjadi Kolom 1 pada $C^T$.<br>- Baris 2: $\\begin{pmatrix} 3 & 0 & 4 \\end{pmatrix}$ menjadi Kolom 2 pada $C^T$.<br>2. Susun matriks baru berordo $3 \\times 2$:<br>$$C^T = \\begin{pmatrix} 5 & 3 \\\\ 2 & 0 \\\\ -1 & 4 \\end{pmatrix}$$<br>3. Jadi matriks transpos yang tepat adalah pilihan A.",
      pitfalls: "Siswa terkadang hanya membalik tanda negatif elemen (invers aditif) atau membalik urutan kolom tanpa mengubah baris menjadi kolom."
    }
  },
  {
    id: "mat-alj-matriks-ordo-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-ordo",
    category: "Matriks Simetris dan Sifat Elemen Reflektif",
    difficulty: "mudah",
    statement: "Suatu matriks persegi $M$ dikatakan sebagai matriks simetris jika memenuhi sifat $M^T = M$. Jika matriks $M = \\begin{pmatrix} 2 & x + 1 \\\\ 5 & 4 \\end{pmatrix}$ merupakan matriks simetris, maka nilai $x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2$",
      "$3$",
      "$4$",
      "$5$",
      "$6$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada matriks simetris, elemen yang simetris terhadap diagonal utama harus bernilai sama, yaitu $a_{ij} = a_{ji}$ untuk setiap $i$ dan $j$.",
      steps: "1. Tinjau elemen di luar diagonal utama pada matriks $M = \\begin{pmatrix} 2 & x + 1 \\\\ 5 & 4 \\end{pmatrix}$:<br>- Elemen baris 1 kolom 2: $m_{12} = x + 1$<br>- Elemen baris 2 kolom 1: $m_{21} = 5$<br>2. Berdasarkan syarat matriks simetris ($m_{12} = m_{21}$):<br>$$x + 1 = 5$$<br>3. Selesaikan persamaan linier:<br>$$x = 5 - 1 = 4$$<br>4. Jadi nilai $x$ adalah $4$ (pilihan C).",
      pitfalls: "Menyamakan elemen dengan diagonal utama ($x + 1 = 2$ atau $x + 1 = 4$), padahal yang harus sama adalah pasangan elemen simetris $m_{12}$ dan $m_{21}$."
    }
  }
];
