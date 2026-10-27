/**
 * Batch Task: TASK_mat-alj-matriks-spl_MEDIUM
 * SubTopic: Matriks pada SPL & Program Linear (mat-alj-matriks-spl)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-matriks-spl-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-spl",
    category: "Aturan Cramer SPLTV Ordo 3x3",
    difficulty: "sedang",
    statement: "Diberikan sistem persamaan linear tiga variabel:\n$$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$\nNilai determinan utama ($D$) dari matriks koefisien sistem tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    correctIndex: 2,
    solution: {
      concept: "Determinan utama ($D$) dari SPLTV tiga variabel $3 \\times 3$ diperoleh dari matriks koefisien variabel $x, y, z$. Nilai determinan dapat dihitung menggunakan ekspansi kofaktor sepanjang baris pertama.",
      steps: "1. Susun matriks koefisien sistem:\n$$A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\\\ 1 & 2 & -1 \\end{pmatrix}$$\n2. Lakukan ekspansi baris pertama ($a_{11}=1, a_{12}=1, a_{13}=1$):\n$$D = 1 \\cdot \\det\\begin{pmatrix} -1 & 1 \\\\ 2 & -1 \\end{pmatrix} - 1 \\cdot \\det\\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix} + 1 \\cdot \\det\\begin{pmatrix} 2 & -1 \\\\ 1 & 2 \\end{pmatrix}$$\n3. Hitung masing-masing minor $2 \\times 2$:\n- Minor 1: $(-1)(-1) - (1)(2) = 1 - 2 = -1$\n- Minor 2: $(2)(-1) - (1)(1) = -2 - 1 = -3$\n- Minor 3: $(2)(2) - (-1)(1) = 4 + 1 = 5$\n4. Gabungkan hasil ekspansi:\n$$D = 1(-1) - 1(-3) + 1(5) = -1 + 3 + 5 = 7$$\n5. Jadi nilai determinan utama $D$ adalah 7 (pilihan C).",
      pitfalls: "Kesalahan tanda pada kofaktor elemen tengah baris pertama ($-a_{12}$) atau salah tanda saat mengurangkan bilangan negatif."
    }
  },
  {
    id: "mat-alj-matriks-spl-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-spl",
    category: "Penyelesaian Variabel Spesifik dengan Cramer",
    difficulty: "sedang",
    statement: "Diketahui sistem persamaan linear dua variabel:\n$$\\begin{cases} 3x + 2y = 12 \\\\ 5x + 4y = 22 \\end{cases}$$\nBerdasarkan Aturan Cramer, nilai determinan pengganti kolom kedua ($D_y$) dan nilai variabel $y$ berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$D_y = 6$ dan $y = 3$",
      "$D_y = 4$ dan $y = 2$",
      "$D_y = 8$ dan $y = 4$",
      "$D_y = 6$ dan $y = 2$",
      "$D_y = 12$ dan $y = 6$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Dalam Aturan Cramer, determinan $D_y$ diperoleh dengan mengganti kolom kedua (koefisien $y$) dengan vektor konstanta. Nilai variabel $y$ kemudian dihitung dari $y = \\frac{D_y}{D}$.",
      steps: "1. Hitung determinan utama $D$:\n$$D = \\det \\begin{pmatrix} 3 & 2 \\\\ 5 & 4 \\end{pmatrix} = (3)(4) - (2)(5) = 12 - 10 = 2$$\n2. Hitung $D_y$ dengan mengganti kolom ke-2 dengan konstanta $\\begin{pmatrix} 12 \\\\ 22 \\end{pmatrix}$:\n$$D_y = \\det \\begin{pmatrix} 3 & 12 \\\\ 5 & 22 \\end{pmatrix} = (3)(22) - (12)(5) = 66 - 60 = 6$$\n3. Hitung nilai $y$:\n$$y = \\frac{D_y}{D} = \\frac{6}{2} = 3$$\n4. Jadi diperoleh $D_y = 6$ dan $y = 3$ (pilihan A).",
      pitfalls: "Lupa membagi $D_y$ dengan determinan utama $D$ atau salah mengganti kolom $x$ alih-alih kolom $y$."
    }
  },
  {
    id: "mat-alj-matriks-spl-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-spl",
    category: "Sistem Linear Homogen dan Solusi Tak-Trivial",
    difficulty: "sedang",
    statement: "Sistem persamaan linear homogen:\n$$\\begin{cases} (a - 1)x + 2y = 0 \\\\ 4x + (a + 1)y = 0 \\end{cases}$$\nmemiliki solusi tak-trivial $(x, y) \\neq (0, 0)$ untuk nilai positif konstanta $a$ sebesar ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "1",
      "2",
      "3",
      "4",
      "9"
    ],
    correctIndex: 2,
    solution: {
      concept: "Sistem persamaan linear homogen $A \\mathbf{x} = \\mathbf{0}$ selalu memiliki solusi trivial $\\mathbf{x} = \\mathbf{0}$. Sistem tersebut memiliki solusi tak-trivial (solusi selain nol) jika dan hanya jika matriks koefisiennya singular, yaitu $\\det(A) = 0$.",
      steps: "1. Susun matriks koefisien: $A = \\begin{pmatrix} a - 1 & 2 \\\\ 4 & a + 1 \\end{pmatrix}$.\n2. Terapkan syarat solusi tak-trivial $\\det(A) = 0$:\n$$\\det(A) = (a - 1)(a + 1) - (2)(4) = 0$$\n3. Jabarkan bentuk selisih kuadrat:\n$$a^2 - 1 - 8 = 0 \\implies a^2 - 9 = 0 \\implies a^2 = 9 \\implies a = \\pm 3$$\n4. Karena disyaratkan nilai positif $a$, maka diambil $a = 3$.\n5. Jadi nilai positif $a$ adalah 3 (pilihan C).",
      pitfalls: "Lupa bahwa solusi tak-trivial mensyaratkan determinan nol, atau salah memilih nilai negatif $-3$."
    }
  },
  {
    id: "mat-alj-matriks-spl-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-spl",
    category: "Aplikasi SPL pada Pemodelan Ekonomi",
    difficulty: "sedang",
    statement: "Sebuah toko alat tulis menjual dua jenis paket bundling. Paket A berisi 2 buku dan 3 pensil seharga Rp16.000, sedangkan Paket B berisi 4 buku dan 1 pensil seharga Rp22.000. Jika harga satuan sebuah buku adalah $x$ rupiah dan sebuah pensil adalah $y$ rupiah, maka formulasi matriks invers untuk menentukan $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = -\\frac{1}{10} \\begin{pmatrix} 1 & -3 \\\\ -4 & 2 \\end{pmatrix} \\begin{pmatrix} 16.000 \\\\ 22.000 \\end{pmatrix}$",
      "$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\frac{1}{10} \\begin{pmatrix} 1 & -3 \\\\ -4 & 2 \\end{pmatrix} \\begin{pmatrix} 16.000 \\\\ 22.000 \\end{pmatrix}$",
      "$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = -\\frac{1}{10} \\begin{pmatrix} 2 & -3 \\\\ -4 & 1 \\end{pmatrix} \\begin{pmatrix} 16.000 \\\\ 22.000 \\end{pmatrix}$",
      "$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 1 & -3 \\\\ -4 & 2 \\end{pmatrix} \\begin{pmatrix} 16.000 \\\\ 22.000 \\end{pmatrix}$",
      "$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = -\\frac{1}{10} \\begin{pmatrix} 1 & 4 \\\\ 3 & 2 \\end{pmatrix} \\begin{pmatrix} 16.000 \\\\ 22.000 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Model persamaan linear dari cerita diubah ke bentuk matriks $A \\mathbf{x} = \\mathbf{b}$, kemudian diselesaikan dengan $\\mathbf{x} = A^{-1} \\mathbf{b}$ dengan $A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$.",
      steps: "1. Susun sistem persamaan aljabar:\n$$\\begin{cases} 2x + 3y = 16.000 \\\\ 4x + y = 22.000 \\end{cases}$$\n2. Tuliskan dalam bentuk matriks:\n$$\\begin{pmatrix} 2 & 3 \\\\ 4 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 16.000 \\\\ 22.000 \\end{pmatrix}$$\n3. Hitung determinan matriks koefisien $A$:\n$$\\det(A) = (2)(1) - (3)(4) = 2 - 12 = -10$$\n4. Tentukan adjoin matriks $A$:\n$$\\text{adj}(A) = \\begin{pmatrix} 1 & -3 \\\\ -4 & 2 \\end{pmatrix}$$\n5. Susun invers matriks $A^{-1}$:\n$$A^{-1} = \\frac{1}{-10} \\begin{pmatrix} 1 & -3 \\\\ -4 & 2 \\end{pmatrix} = -\\frac{1}{10} \\begin{pmatrix} 1 & -3 \\\\ -4 & 2 \\end{pmatrix}$$\n6. Maka penyelesaiannya adalah $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = -\\frac{1}{10} \\begin{pmatrix} 1 & -3 \\\\ -4 & 2 \\end{pmatrix} \\begin{pmatrix} 16.000 \\\\ 22.000 \\end{pmatrix}$ (pilihan A).",
      pitfalls: "Lupa tanda minus pada determinan $-10$ sehingga tanda skala invers menjadi salah."
    }
  },
  {
    id: "mat-alj-matriks-spl-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-matriks",
    subTopicId: "mat-alj-matriks-spl",
    category: "Kondisi Sistem Inkonsisten (Tanpa Solusi)",
    difficulty: "sedang",
    statement: "Diketahui sistem persamaan linear dua variabel:\n$$\\begin{cases} 4x - 6y = 5 \\\\ 2x - 3y = p \\end{cases}$$\nSistem persamaan tersebut tidak memiliki solusi sama sekali (inkonsisten) jika dan hanya jika nilai $p$ memenuhi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$p \\neq \\frac{5}{2}$",
      "$p = \\frac{5}{2}$",
      "$p = 5$",
      "$p \\neq 5$",
      "$p = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Sistem dua persamaan linear dua variabel tidak memiliki solusi (garis-garisnya sejajar dan tidak berpotongan) jika rasio koefisien variabelnya sama tetapi rasio konstanta hasilnya berbeda: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$.",
      steps: "1. Perhatikan koefisien variabel $x$ dan $y$:\n$$\\frac{a_1}{a_2} = \\frac{4}{2} = 2, \\quad \\frac{b_1}{b_2} = \\frac{-6}{-3} = 2$$\nKedua rasio sama, sehingga gradien kedua garis identik ($D = 0$).\n2. Agar kedua garis sejajar dan tidak pernah berpotongan (tidak memiliki penyelesaian), rasio konstanta tidak boleh sama dengan 2:\n$$\\frac{c_1}{c_2} \\neq 2 \\implies \\frac{5}{p} \\neq 2 \\implies 2p \\neq 5 \\implies p \\neq \\frac{5}{2}$$\n3. (Catatan: jika $p = \\frac{5}{2}$, kedua garis berimpit dan memiliki tak berhingga banyak solusi).\n4. Jadi syarat agar sistem tidak memiliki solusi adalah $p \\neq \\frac{5}{2}$ (pilihan A).",
      pitfalls: "Tertukar antara syarat tidak memiliki solusi ($p \\neq \\frac{5}{2}$) dengan syarat memiliki tak terhingga solusi ($p = \\frac{5}{2}$)."
    }
  }
];
