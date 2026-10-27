/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Matriks (mat-alj-matriks)
 * Sub-Bab: Matriks pada SPL & Program Linear (mat-alj-matriks-spl)
 * Slug: matriks-spl-program-linear
 * Indikator: Metode invers matriks dan aturan Cramer untuk penyelesaian SPL serta model program linear.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-matriks-spl";
  const subTopicSlug = "matriks-spl-program-linear";
  const questions = [
  {
    "id": "mat-alj-matriks-spl-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-spl",
    "category": "Representasi Matriks dari SPLDV",
    "difficulty": "mudah",
    "statement": "Bentuk persamaan matriks yang bersesuaian dengan sistem persamaan linear dua variabel $\\begin{cases} 2x + 3y = 8 \\\\ 5x - y = 3 \\end{cases}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 2 & 3 \\\\ 5 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 3 \\\\ 5 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 5 \\\\ 3 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -1 \\\\ 5 & 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 8 \\\\ 3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 2 & 3 \\\\ 5 & -1 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Sistem persamaan linear dapat dituliskan dalam bentuk persamaan matriks $A \\mathbf{x} = \\mathbf{b}$, di mana matriks $A$ adalah matriks koefisien variabel, $\\mathbf{x}$ adalah vektor kolom variabel, dan $\\mathbf{b}$ adalah vektor kolom konstanta hasil.",
      "steps": "1. Identifikasi koefisien persamaan 1 ($2x + 3y = 8$): koefisien $x = 2$, koefisien $y = 3$, konstanta $= 8$.<br>2. Identifikasi koefisien persamaan 2 ($5x - 1y = 3$): koefisien $x = 5$, koefisien $y = -1$, konstanta $= 3$.<br>3. Susun matriks koefisien $A = \\begin{pmatrix} 2 & 3 \\\\ 5 & -1 \\end{pmatrix}$, vektor variabel $\\mathbf{x} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$, dan vektor konstanta $\\mathbf{b} = \\begin{pmatrix} 8 \\\\ 3 \\end{pmatrix}$.<br>4. Diperoleh bentuk persamaan matriks: $\\begin{pmatrix} 2 & 3 \\\\ 5 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 3 \\end{pmatrix}$ (pilihan A).",
      "pitfalls": "Lupa menyertakan tanda negatif pada koefisien $y$ pada persamaan kedua ($-y$ memiliki koefisien $-1$)."
    },
    "subTopicSlug": "matriks-spl-program-linear",
    "bab": "Aljabar",
    "subBab": "Matriks pada SPL & Program Linear",
    "subTopic": "Matriks pada SPL & Program Linear",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-matriks-spl-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-spl",
    "category": "Formula Aturan Cramer",
    "difficulty": "mudah",
    "statement": "Diberikan sistem persamaan linear dua variabel $\\begin{cases} ax + by = p \\\\ cx + dy = q \\end{cases}$. Berdasarkan Aturan Cramer, nilai dari variabel $x$ dapat ditentukan melalui rumus ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{\\det \\begin{pmatrix} p & b \\\\ q & d \\end{pmatrix}}{\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}}$",
      "$\\frac{\\det \\begin{pmatrix} a & p \\\\ c & q \\end{pmatrix}}{\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}}$",
      "$\\frac{\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}}{\\det \\begin{pmatrix} p & b \\\\ q & d \\end{pmatrix}}$",
      "$\\frac{\\det \\begin{pmatrix} p & q \\\\ b & d \\end{pmatrix}}{\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}}$",
      "$\\frac{\\det \\begin{pmatrix} b & p \\\\ d & q \\end{pmatrix}}{\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Aturan Cramer menyatakan bahwa untuk sistem $A \\mathbf{x} = \\mathbf{b}$ dengan $\\det(A) \\neq 0$, nilai setiap variabel $x_i$ adalah perbandingan antara determinan matriks $A_i$ (matriks $A$ yang kolom ke-$i$ diganti vektor konstanta $\\mathbf{b}$) terhadap determinan matriks koefisien utama $D$: $x_i = \\frac{D_i}{D}$.",
      "steps": "1. Determinan utama sistem adalah $D = \\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$.<br>2. Untuk mencari variabel $x$ (kolom pertama), ganti kolom koefisien $x$ dengan vektor konstanta $\\begin{pmatrix} p \\\\ q \\end{pmatrix}$ sehingga menghasilkan $D_x = \\det \\begin{pmatrix} p & b \\\\ q & d \\end{pmatrix}$.<br>3. Nilai $x$ diperoleh melalui rasio: $x = \\frac{D_x}{D} = \\frac{\\det \\begin{pmatrix} p & b \\\\ q & d \\end{pmatrix}}{\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}}$.<br>4. Jadi rumus yang tepat adalah pilihan A.",
      "pitfalls": "Tertukar dengan rumus untuk variabel $y$ yang mengganti kolom kedua ($D_y$)."
    },
    "subTopicSlug": "matriks-spl-program-linear",
    "bab": "Aljabar",
    "subBab": "Matriks pada SPL & Program Linear",
    "subTopic": "Matriks pada SPL & Program Linear",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-matriks-spl-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-spl",
    "category": "Determinan Utama Sistem Persamaan Linear",
    "difficulty": "mudah",
    "statement": "Diketahui sistem persamaan linear dua variabel $\\begin{cases} 3x - 2y = 7 \\\\ 4x + y = 13 \\end{cases}$. Nilai dari determinan utama ($D$) matriks koefisien sistem tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "5",
      "7",
      "11",
      "-5",
      "-11"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Determinan utama ($D$) pada sistem persamaan linear adalah determinan dari matriks yang beranggotakan koefisien-koefisien variabel sistem persamaan linear tersebut.",
      "steps": "1. Bentuk matriks koefisien sistem: $A = \\begin{pmatrix} 3 & -2 \\\\ 4 & 1 \\end{pmatrix}$.<br>2. Hitung nilai determinan utama $D = \\det(A)$:<br>$$D = (3)(1) - (-2)(4)$$<br>3. Lakukan perhitungan aritmetika:<br>$$D = 3 - (-8) = 3 + 8 = 11$$<br>4. Jadi nilai determinan utama $D$ adalah 11 (pilihan C).",
      "pitfalls": "Salah tanda pada operasi pengurangan bilangan negatif: $3 - 8 = -5$ alih-alih $3 - (-8) = 11$."
    },
    "subTopicSlug": "matriks-spl-program-linear",
    "bab": "Aljabar",
    "subBab": "Matriks pada SPL & Program Linear",
    "subTopic": "Matriks pada SPL & Program Linear",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-matriks-spl-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-spl",
    "category": "Penyelesaian SPLDV dengan Metode Invers Matriks",
    "difficulty": "mudah",
    "statement": "Diketahui persamaan matriks $\\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}$. Nilai $x$ dan $y$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x = 2$ dan $y = 1$",
      "$x = 1$ dan $y = 2$",
      "$x = 3$ dan $y = -1$",
      "$x = -2$ dan $y = 7$",
      "$x = 4$ dan $y = 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk menyelesaikan $A \\mathbf{x} = \\mathbf{b}$, cari invers $A^{-1}$ lalu kalikan $\\mathbf{x} = A^{-1} \\mathbf{b}$.",
      "steps": "1. Hitung determinan matriks koefisien: $\\det(A) = (2)(1) - (1)(1) = 2 - 1 = 1$.<br>2. Tentukan invers matriks $A$:<br>$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$$<br>3. Hitung vektor variabel $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$:<br>$$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix} \\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} (1)(5) + (-1)(3) \\\\ (-1)(5) + (2)(3) \\end{pmatrix} = \\begin{pmatrix} 5 - 3 \\\\ -5 + 6 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$$<br>4. Jadi diperoleh nilai $x = 2$ dan $y = 1$ (pilihan A).",
      "pitfalls": "Tertukar nilai antara $x$ dan $y$ saat menuliskan jawaban akhir."
    },
    "subTopicSlug": "matriks-spl-program-linear",
    "bab": "Aljabar",
    "subBab": "Matriks pada SPL & Program Linear",
    "subTopic": "Matriks pada SPL & Program Linear",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-matriks-spl-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-spl",
    "category": "Syarat Keberadaan Solusi Tunggal SPLDV",
    "difficulty": "mudah",
    "statement": "Sistem persamaan linear dua variabel $\\begin{cases} 2x + ky = 6 \\\\ 3x + 6y = 10 \\end{cases}$ memiliki tepat satu pasangan penyelesaian jika dan hanya jika nilai $k$ memenuhi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$k \\neq 4$",
      "$k \\neq 2$",
      "$k \\neq 6$",
      "$k = 4$",
      "$k = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Suatu sistem persamaan linear persegi memiliki tepat satu solusi (konsisten dan independen) jika dan hanya jika determinan matriks koefisiennya tidak sama dengan nol ($D \\neq 0$).",
      "steps": "1. Susun matriks koefisien sistem: $A = \\begin{pmatrix} 2 & k \\\\ 3 & 6 \\end{pmatrix}$.<br>2. Hitung determinan matriks koefisien: $\\det(A) = (2)(6) - (k)(3) = 12 - 3k$.<br>3. Terapkan syarat solusi tunggal: $\\det(A) \\neq 0$.<br>$$12 - 3k \\neq 0 \\implies 3k \\neq 12 \\implies k \\neq 4$$<br>4. Jadi sistem memiliki tepat satu pasangan penyelesaian jika $k \\neq 4$ (pilihan A).",
      "pitfalls": "Terkecoh memilih $k = 4$ yang justru merupakan syarat agar sistem TIDAK memiliki solusi tunggal (garis sejajar atau berimpit)."
    },
    "subTopicSlug": "matriks-spl-program-linear",
    "bab": "Aljabar",
    "subBab": "Matriks pada SPL & Program Linear",
    "subTopic": "Matriks pada SPL & Program Linear",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-matriks-spl-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-spl",
    "category": "Aturan Cramer SPLTV Ordo 3x3",
    "difficulty": "sedang",
    "statement": "Diberikan sistem persamaan linear tiga variabel:\n$$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$\nNilai determinan utama ($D$) dari matriks koefisien sistem tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Determinan utama ($D$) dari SPLTV tiga variabel $3 \\times 3$ diperoleh dari matriks koefisien variabel $x, y, z$. Nilai determinan dapat dihitung menggunakan ekspansi kofaktor sepanjang baris pertama.",
      "steps": "1. Susun matriks koefisien sistem:\n$$A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\\\ 1 & 2 & -1 \\end{pmatrix}$$\n2. Lakukan ekspansi baris pertama ($a_{11}=1, a_{12}=1, a_{13}=1$):\n$$D = 1 \\cdot \\det\\begin{pmatrix} -1 & 1 \\\\ 2 & -1 \\end{pmatrix} - 1 \\cdot \\det\\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix} + 1 \\cdot \\det\\begin{pmatrix} 2 & -1 \\\\ 1 & 2 \\end{pmatrix}$$\n3. Hitung masing-masing minor $2 \\times 2$:\n- Minor 1: $(-1)(-1) - (1)(2) = 1 - 2 = -1$\n- Minor 2: $(2)(-1) - (1)(1) = -2 - 1 = -3$\n- Minor 3: $(2)(2) - (-1)(1) = 4 + 1 = 5$\n4. Gabungkan hasil ekspansi:\n$$D = 1(-1) - 1(-3) + 1(5) = -1 + 3 + 5 = 7$$\n5. Jadi nilai determinan utama $D$ adalah 7 (pilihan C).",
      "pitfalls": "Kesalahan tanda pada kofaktor elemen tengah baris pertama ($-a_{12}$) atau salah tanda saat mengurangkan bilangan negatif."
    },
    "subTopicSlug": "matriks-spl-program-linear",
    "bab": "Aljabar",
    "subBab": "Matriks pada SPL & Program Linear",
    "subTopic": "Matriks pada SPL & Program Linear",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-matriks-spl-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-spl",
    "category": "Penyelesaian Variabel Spesifik dengan Cramer",
    "difficulty": "sedang",
    "statement": "Diketahui sistem persamaan linear dua variabel:\n$$\\begin{cases} 3x + 2y = 12 \\\\ 5x + 4y = 22 \\end{cases}$$\nBerdasarkan Aturan Cramer, nilai determinan pengganti kolom kedua ($D_y$) dan nilai variabel $y$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$D_y = 6$ dan $y = 3$",
      "$D_y = 4$ dan $y = 2$",
      "$D_y = 8$ dan $y = 4$",
      "$D_y = 6$ dan $y = 2$",
      "$D_y = 12$ dan $y = 6$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Dalam Aturan Cramer, determinan $D_y$ diperoleh dengan mengganti kolom kedua (koefisien $y$) dengan vektor konstanta. Nilai variabel $y$ kemudian dihitung dari $y = \\frac{D_y}{D}$.",
      "steps": "1. Hitung determinan utama $D$:\n$$D = \\det \\begin{pmatrix} 3 & 2 \\\\ 5 & 4 \\end{pmatrix} = (3)(4) - (2)(5) = 12 - 10 = 2$$\n2. Hitung $D_y$ dengan mengganti kolom ke-2 dengan konstanta $\\begin{pmatrix} 12 \\\\ 22 \\end{pmatrix}$:\n$$D_y = \\det \\begin{pmatrix} 3 & 12 \\\\ 5 & 22 \\end{pmatrix} = (3)(22) - (12)(5) = 66 - 60 = 6$$\n3. Hitung nilai $y$:\n$$y = \\frac{D_y}{D} = \\frac{6}{2} = 3$$\n4. Jadi diperoleh $D_y = 6$ dan $y = 3$ (pilihan A).",
      "pitfalls": "Lupa membagi $D_y$ dengan determinan utama $D$ atau salah mengganti kolom $x$ alih-alih kolom $y$."
    },
    "subTopicSlug": "matriks-spl-program-linear",
    "bab": "Aljabar",
    "subBab": "Matriks pada SPL & Program Linear",
    "subTopic": "Matriks pada SPL & Program Linear",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-matriks-spl-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-spl",
    "category": "Sistem Linear Homogen dan Solusi Tak-Trivial",
    "difficulty": "sedang",
    "statement": "Sistem persamaan linear homogen:\n$$\\begin{cases} (a - 1)x + 2y = 0 \\\\ 4x + (a + 1)y = 0 \\end{cases}$$\nmemiliki solusi tak-trivial $(x, y) \\neq (0, 0)$ untuk nilai positif konstanta $a$ sebesar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "9"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Sistem persamaan linear homogen $A \\mathbf{x} = \\mathbf{0}$ selalu memiliki solusi trivial $\\mathbf{x} = \\mathbf{0}$. Sistem tersebut memiliki solusi tak-trivial (solusi selain nol) jika dan hanya jika matriks koefisiennya singular, yaitu $\\det(A) = 0$.",
      "steps": "1. Susun matriks koefisien: $A = \\begin{pmatrix} a - 1 & 2 \\\\ 4 & a + 1 \\end{pmatrix}$.\n2. Terapkan syarat solusi tak-trivial $\\det(A) = 0$:\n$$\\det(A) = (a - 1)(a + 1) - (2)(4) = 0$$\n3. Jabarkan bentuk selisih kuadrat:\n$$a^2 - 1 - 8 = 0 \\implies a^2 - 9 = 0 \\implies a^2 = 9 \\implies a = \\pm 3$$\n4. Karena disyaratkan nilai positif $a$, maka diambil $a = 3$.\n5. Jadi nilai positif $a$ adalah 3 (pilihan C).",
      "pitfalls": "Lupa bahwa solusi tak-trivial mensyaratkan determinan nol, atau salah memilih nilai negatif $-3$."
    },
    "subTopicSlug": "matriks-spl-program-linear",
    "bab": "Aljabar",
    "subBab": "Matriks pada SPL & Program Linear",
    "subTopic": "Matriks pada SPL & Program Linear",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-matriks-spl-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-spl",
    "category": "Aplikasi SPL pada Pemodelan Ekonomi",
    "difficulty": "sedang",
    "statement": "Sebuah toko alat tulis menjual dua jenis paket bundling. Paket A berisi 2 buku dan 3 pensil seharga Rp16.000, sedangkan Paket B berisi 4 buku dan 1 pensil seharga Rp22.000. Jika harga satuan sebuah buku adalah $x$ rupiah dan sebuah pensil adalah $y$ rupiah, maka formulasi matriks invers untuk menentukan $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = -\\frac{1}{10} \\begin{pmatrix} 1 & -3 \\\\ -4 & 2 \\end{pmatrix} \\begin{pmatrix} 16.000 \\\\ 22.000 \\end{pmatrix}$",
      "$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\frac{1}{10} \\begin{pmatrix} 1 & -3 \\\\ -4 & 2 \\end{pmatrix} \\begin{pmatrix} 16.000 \\\\ 22.000 \\end{pmatrix}$",
      "$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = -\\frac{1}{10} \\begin{pmatrix} 2 & -3 \\\\ -4 & 1 \\end{pmatrix} \\begin{pmatrix} 16.000 \\\\ 22.000 \\end{pmatrix}$",
      "$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 1 & -3 \\\\ -4 & 2 \\end{pmatrix} \\begin{pmatrix} 16.000 \\\\ 22.000 \\end{pmatrix}$",
      "$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = -\\frac{1}{10} \\begin{pmatrix} 1 & 4 \\\\ 3 & 2 \\end{pmatrix} \\begin{pmatrix} 16.000 \\\\ 22.000 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Model persamaan linear dari cerita diubah ke bentuk matriks $A \\mathbf{x} = \\mathbf{b}$, kemudian diselesaikan dengan $\\mathbf{x} = A^{-1} \\mathbf{b}$ dengan $A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$.",
      "steps": "1. Susun sistem persamaan aljabar:\n$$\\begin{cases} 2x + 3y = 16.000 \\\\ 4x + y = 22.000 \\end{cases}$$\n2. Tuliskan dalam bentuk matriks:\n$$\\begin{pmatrix} 2 & 3 \\\\ 4 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 16.000 \\\\ 22.000 \\end{pmatrix}$$\n3. Hitung determinan matriks koefisien $A$:\n$$\\det(A) = (2)(1) - (3)(4) = 2 - 12 = -10$$\n4. Tentukan adjoin matriks $A$:\n$$\\text{adj}(A) = \\begin{pmatrix} 1 & -3 \\\\ -4 & 2 \\end{pmatrix}$$\n5. Susun invers matriks $A^{-1}$:\n$$A^{-1} = \\frac{1}{-10} \\begin{pmatrix} 1 & -3 \\\\ -4 & 2 \\end{pmatrix} = -\\frac{1}{10} \\begin{pmatrix} 1 & -3 \\\\ -4 & 2 \\end{pmatrix}$$\n6. Maka penyelesaiannya adalah $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = -\\frac{1}{10} \\begin{pmatrix} 1 & -3 \\\\ -4 & 2 \\end{pmatrix} \\begin{pmatrix} 16.000 \\\\ 22.000 \\end{pmatrix}$ (pilihan A).",
      "pitfalls": "Lupa tanda minus pada determinan $-10$ sehingga tanda skala invers menjadi salah."
    },
    "subTopicSlug": "matriks-spl-program-linear",
    "bab": "Aljabar",
    "subBab": "Matriks pada SPL & Program Linear",
    "subTopic": "Matriks pada SPL & Program Linear",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-matriks-spl-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-spl",
    "category": "Kondisi Sistem Inkonsisten (Tanpa Solusi)",
    "difficulty": "sedang",
    "statement": "Diketahui sistem persamaan linear dua variabel:\n$$\\begin{cases} 4x - 6y = 5 \\\\ 2x - 3y = p \\end{cases}$$\nSistem persamaan tersebut tidak memiliki solusi sama sekali (inkonsisten) jika dan hanya jika nilai $p$ memenuhi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$p \\neq \\frac{5}{2}$",
      "$p = \\frac{5}{2}$",
      "$p = 5$",
      "$p \\neq 5$",
      "$p = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Sistem dua persamaan linear dua variabel tidak memiliki solusi (garis-garisnya sejajar dan tidak berpotongan) jika rasio koefisien variabelnya sama tetapi rasio konstanta hasilnya berbeda: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$.",
      "steps": "1. Perhatikan koefisien variabel $x$ dan $y$:\n$$\\frac{a_1}{a_2} = \\frac{4}{2} = 2, \\quad \\frac{b_1}{b_2} = \\frac{-6}{-3} = 2$$\nKedua rasio sama, sehingga gradien kedua garis identik ($D = 0$).\n2. Agar kedua garis sejajar dan tidak pernah berpotongan (tidak memiliki penyelesaian), rasio konstanta tidak boleh sama dengan 2:\n$$\\frac{c_1}{c_2} \\neq 2 \\implies \\frac{5}{p} \\neq 2 \\implies 2p \\neq 5 \\implies p \\neq \\frac{5}{2}$$\n3. (Catatan: jika $p = \\frac{5}{2}$, kedua garis berimpit dan memiliki tak berhingga banyak solusi).\n4. Jadi syarat agar sistem tidak memiliki solusi adalah $p \\neq \\frac{5}{2}$ (pilihan A).",
      "pitfalls": "Tertukar antara syarat tidak memiliki solusi ($p \\neq \\frac{5}{2}$) dengan syarat memiliki tak terhingga solusi ($p = \\frac{5}{2}$)."
    },
    "subTopicSlug": "matriks-spl-program-linear",
    "bab": "Aljabar",
    "subBab": "Matriks pada SPL & Program Linear",
    "subTopic": "Matriks pada SPL & Program Linear",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
    window.TKA_BANK_SOAL[subTopicSlug] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
