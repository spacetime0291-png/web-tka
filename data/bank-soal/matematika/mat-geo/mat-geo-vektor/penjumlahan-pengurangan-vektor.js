/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Vektor (mat-geo-vektor)
 * Sub-Bab: Penjumlahan dan Pengurangan Vektor (mat-geo-vektor-operasi)
 * Slug: penjumlahan-pengurangan-vektor
 * Indikator: Operasi aljabar penjumlahan, pengurangan, dan perkalian skalar vektor.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-vektor-operasi";
  const subTopicSlug = "penjumlahan-pengurangan-vektor";
  const questions = [
  {
    "id": "mat-geo-vektor-operasi-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-operasi",
    "category": "Penjumlahan Dua Vektor Dua Dimensi",
    "difficulty": "mudah",
    "statement": "Diketahui vektor $\\vec{a} = 4\\hat{i} - 2\\hat{j}$ dan $\\vec{b} = -3\\hat{i} + 5\\hat{j}$. Hasil dari operasi penjumlahan vektor $\\vec{a} + \\vec{b}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\hat{i} + 3\\hat{j}$",
      "$7\\hat{i} + 3\\hat{j}$",
      "$\\hat{i} - 7\\hat{j}$",
      "$-\\hat{i} + 3\\hat{j}$",
      "$7\\hat{i} - 7\\hat{j}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Penjumlahan dua vektor dilakukan dengan menjumlahkan masing-masing komponen skalar yang bersesuaian dengan vektor basis: $(x_1\\hat{i} + y_1\\hat{j}) + (x_2\\hat{i} + y_2\\hat{j}) = (x_1 + x_2)\\hat{i} + (y_1 + y_2)\\hat{j}$.",
      "steps": "1. Jumlahkan komponen horizontal $\\hat{i}$:\n$$4 + (-3) = 1$$\n2. Jumlahkan komponen vertikal $\\hat{j}$:\n$$-2 + 5 = 3$$\n3. Gabungkan dalam bentuk vektor basis:\n$$\\vec{a} + \\vec{b} = 1\\hat{i} + 3\\hat{j} = \\hat{i} + 3\\hat{j}$$\n4. Jadi, hasil penjumlahannya adalah $\\hat{i} + 3\\hat{j}$ (pilihan A).",
      "pitfalls": "Keliru tanda saat mengoperasikan bilangan bulat $-2 + 5$ yang terkadang salah dihitung sebagai $-7$."
    },
    "subTopicSlug": "penjumlahan-pengurangan-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Penjumlahan dan Pengurangan Vektor",
    "subTopic": "Penjumlahan dan Pengurangan Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-vektor-operasi-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-operasi",
    "category": "Pengurangan Vektor Tiga Dimensi",
    "difficulty": "mudah",
    "statement": "Diketahui vektor kolom $\\vec{u} = \\begin{pmatrix} 5 \\\\ -1 \\\\ 4 \\end{pmatrix}$ dan $\\vec{v} = \\begin{pmatrix} 2 \\\\ 3 \\\\ -2 \\end{pmatrix}$. Hasil dari operasi pengurangan vektor $\\vec{u} - \\vec{v}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 3 \\\\ -4 \\\\ 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 \\\\ 2 \\\\ 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 7 \\\\ 2 \\\\ 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 \\\\ -4 \\\\ 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} -3 \\\\ 4 \\\\ -6 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pengurangan dua vektor kolom dihitung dengan mengurangkan entri-entri baris yang seletak: $\\begin{pmatrix} u_1 \\\\ u_2 \\\\ u_3 \\end{pmatrix} - \\begin{pmatrix} v_1 \\\\ v_2 \\\\ v_3 \\end{pmatrix} = \\begin{pmatrix} u_1 - v_1 \\\\ u_2 - v_2 \\\\ u_3 - v_3 \\end{pmatrix}$.",
      "steps": "1. Kurangkan baris pertama:\n$$5 - 2 = 3$$\n2. Kurangkan baris kedua:\n$$-1 - 3 = -4$$\n3. Kurangkan baris ketiga:\n$$4 - (-2) = 4 + 2 = 6$$\n4. Susun hasilnya dalam matriks kolom:\n$$\\vec{u} - \\vec{v} = \\begin{pmatrix} 3 \\\\ -4 \\\\ 6 \\end{pmatrix}$$\n5. Jadi, hasil pengurangannya adalah pilihan A.",
      "pitfalls": "Kesalahan tanda minus ganda pada baris ketiga $4 - (-2)$ yang sering salah dihitung menjadi $4 - 2 = 2$."
    },
    "subTopicSlug": "penjumlahan-pengurangan-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Penjumlahan dan Pengurangan Vektor",
    "subTopic": "Penjumlahan dan Pengurangan Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-vektor-operasi-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-operasi",
    "category": "Operasi Campuran Linier Vektor",
    "difficulty": "mudah",
    "statement": "Diketahui vektor $\\vec{p} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ dan $\\vec{q} = \\hat{i} - 2\\hat{j} + 4\\hat{k}$. Hasil operasi linier $3\\vec{p} - 2\\vec{q}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\hat{i} + 13\\hat{j} - 11\\hat{k}$",
      "$4\\hat{i} + 5\\hat{j} + 5\\hat{k}$",
      "$5\\hat{i} + 13\\hat{j} - 11\\hat{k}$",
      "$4\\hat{i} + 7\\hat{j} - 11\\hat{k}$",
      "$8\\hat{i} + 5\\hat{j} - 5\\hat{k}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Operasi kombinasi linier skalar dan vektor dilakukan dengan mendistribusikan masing-masing pengali skalar ke setiap komponen vektor terlebih dahulu sebelum dijumlahkan atau dikurangkan.",
      "steps": "1. Kalikan skalar 3 pada vektor $\\vec{p}$:\n$$3\\vec{p} = 3(2\\hat{i} + 3\\hat{j} - \\hat{k}) = 6\\hat{i} + 9\\hat{j} - 3\\hat{k}$$\n2. Kalikan skalar 2 pada vektor $\\vec{q}$:\n$$2\\vec{q} = 2(\\hat{i} - 2\\hat{j} + 4\\hat{k}) = 2\\hat{i} - 4\\hat{j} + 8\\hat{k}$$\n3. Kurangkan kedua vektor tersebut:\n$$3\\vec{p} - 2\\vec{q} = (6 - 2)\\hat{i} + (9 - (-4))\\hat{j} + (-3 - 8)\\hat{k}$$\n$$3\\vec{p} - 2\\vec{q} = 4\\hat{i} + 13\\hat{j} - 11\\hat{k}$$\n4. Jadi, hasilnya adalah $4\\hat{i} + 13\\hat{j} - 11\\hat{k}$ (pilihan A).",
      "pitfalls": "Lupa mendistribusikan tanda minus saat mengurangkan suku kedua $9 - (-4) = 13$, yang sering keliru menjadi $9 - 4 = 5$."
    },
    "subTopicSlug": "penjumlahan-pengurangan-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Penjumlahan dan Pengurangan Vektor",
    "subTopic": "Penjumlahan dan Pengurangan Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-vektor-operasi-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-operasi",
    "category": "Perkalian Skalar (Dot Product) Dasar",
    "difficulty": "mudah",
    "statement": "Hasil perkalian skalar (dot product) antara vektor $\\vec{a} = 3\\hat{i} + 4\\hat{j}$ dan vektor $\\vec{b} = 2\\hat{i} - 5\\hat{j}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-14",
      "14",
      "26",
      "-26",
      "6"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perkalian skalar (titik) dua buah vektor $\\vec{a} \\cdot \\vec{b}$ menghasilkan besaran skalar yang bernilai jumlah dari hasil kali masing-masing komponen seletak: $\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y$.",
      "steps": "1. Identifikasi komponen kedua vektor: $a_x = 3, a_y = 4$ dan $b_x = 2, b_y = -5$.\n2. Lakukan perkalian skalar:\n$$\\vec{a} \\cdot \\vec{b} = (3)(2) + (4)(-5)$$\n3. Selesaikan operasi perkalian dan penjumlahan:\n$$\\vec{a} \\cdot \\vec{b} = 6 + (-20) = -14$$\n4. Jadi, hasil perkalian skalarnya adalah -14 (pilihan A).",
      "pitfalls": "Menyertakan vektor basis $\\hat{i}$ dan $\\hat{j}$ pada hasil akhir, padahal perkalian skalar (dot product) selalu menghasilkan bilangan skalar murni."
    },
    "subTopicSlug": "penjumlahan-pengurangan-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Penjumlahan dan Pengurangan Vektor",
    "subTopic": "Penjumlahan dan Pengurangan Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-vektor-operasi-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-operasi",
    "category": "Vektor Lawan dan Vektor Nol",
    "difficulty": "mudah",
    "statement": "Jika $\\vec{r} = 4\\hat{i} - 6\\hat{j} + 2\\hat{k}$ dan $\\vec{s}$ merupakan sebuah vektor sedemikian rupa sehingga memenuhi hubungan $\\vec{r} + \\vec{s} = \\vec{0}$, maka komponen dari vektor $\\vec{s}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-4\\hat{i} + 6\\hat{j} - 2\\hat{k}$",
      "$4\\hat{i} + 6\\hat{j} + 2\\hat{k}$",
      "$-4\\hat{i} - 6\\hat{j} - 2\\hat{k}$",
      "$6\\hat{i} - 4\\hat{j} + 2\\hat{k}$",
      "$-4\\hat{i} + 6\\hat{j} + 2\\hat{k}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Vektor $\\vec{s}$ yang dijumlahkan dengan $\\vec{r}$ menghasilkan vektor nol $\\vec{0}$ adalah invers penjumlahan (vektor lawan) dari $\\vec{r}$, yaitu $\\vec{s} = -\\vec{r}$.",
      "steps": "1. Dari persamaan $\\vec{r} + \\vec{s} = \\vec{0}$, pindahkan $\\vec{r}$ ke ruas kanan:\n$$\\vec{s} = -\\vec{r}$$\n2. Substitusikan komponen vektor $\\vec{r}$:\n$$\\vec{s} = -(4\\hat{i} - 6\\hat{j} + 2\\hat{k})$$\n3. Ubah tanda setiap komponen:\n$$\\vec{s} = -4\\hat{i} + 6\\hat{j} - 2\\hat{k}$$\n4. Jadi, vektor $\\vec{s}$ adalah $-4\\hat{i} + 6\\hat{j} - 2\\hat{k}$ (pilihan A).",
      "pitfalls": "Lupa mengubah tanda negatif pada komponen $-6\\hat{j}$ menjadi positif saat mengalikan dengan $-1$."
    },
    "subTopicSlug": "penjumlahan-pengurangan-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Penjumlahan dan Pengurangan Vektor",
    "subTopic": "Penjumlahan dan Pengurangan Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-vektor-operasi-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-operasi",
    "category": "Sudut Antara Dua Vektor",
    "difficulty": "sedang",
    "statement": "Besar sudut yang dibentuk oleh vektor $\\vec{a} = 2\\hat{i} + 2\\hat{j} + \\hat{k}$ dan $\\vec{b} = \\hat{i} - 2\\hat{j} + 2\\hat{k}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$90^\\circ$",
      "$60^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$",
      "$0^\\circ$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kosinus sudut antara dua vektor $\\theta$ dihitung dengan membagi perkalian skalar terhadap hasil kali panjang kedua vektor: $\\cos(\\theta) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}||\\vec{b}|}$. Bila perkalian titik bernilai nol, kedua vektor saling tegak lurus ($\\theta = 90^\\circ$).",
      "steps": "1. Hitung perkalian skalar (dot product) $\\vec{a} \\cdot \\vec{b}$:\n$$\\vec{a} \\cdot \\vec{b} = (2)(1) + (2)(-2) + (1)(2) = 2 - 4 + 2 = 0$$\n2. Hitung panjang masing-masing vektor:\n$$|\\vec{a}| = \\sqrt{2^2 + 2^2 + 1^2} = \\sqrt{4 + 4 + 1} = 3$$\n$$|\\vec{b}| = \\sqrt{1^2 + (-2)^2 + 2^2} = \\sqrt{1 + 4 + 4} = 3$$\n3. Evaluasi nilai kosinus sudut:\n$$\\cos(\\theta) = \\frac{0}{3 \\times 3} = 0$$\n4. Karena $\\cos(\\theta) = 0$, maka besar sudut apitnya adalah $\\theta = 90^\\circ$.\n5. Jadi, sudut yang terbentuk adalah $90^\\circ$ (pilihan A).",
      "pitfalls": "Menyimpulkan sudut bernilai $0^\\circ$ karena melihat hasil perkalian skalar bernilai 0, padahal $\\cos(90^\\circ) = 0$ sedangkan $\\cos(0^\\circ) = 1$."
    },
    "subTopicSlug": "penjumlahan-pengurangan-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Penjumlahan dan Pengurangan Vektor",
    "subTopic": "Penjumlahan dan Pengurangan Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-vektor-operasi-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-operasi",
    "category": "Parameter Ortogonalitas Vektor",
    "difficulty": "sedang",
    "statement": "Diketahui vektor $\\vec{u} = 3\\hat{i} - 2\\hat{j} + k\\hat{k}$ dan $\\vec{v} = 2\\hat{i} + 4\\hat{j} + 2\\hat{k}$. Jika vektor $\\vec{u}$ tegak lurus (ortogonal) terhadap vektor $\\vec{v}$, maka nilai konstanta $k$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1",
      "-1",
      "2",
      "-2",
      "4"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Syarat perlu dan cukup agar dua buah vektor bukan nol saling tegak lurus (ortogonal) adalah hasil perkalian titik (dot product) keduanya sama dengan nol: $\\vec{u} \\cdot \\vec{v} = 0$.",
      "steps": "1. Terapkan syarat ortogonalitas $\\vec{u} \\cdot \\vec{v} = 0$:\n$$(3)(2) + (-2)(4) + (k)(2) = 0$$\n2. Selesaikan operasi aritmetika aljabar:\n$$6 - 8 + 2k = 0$$\n$$-2 + 2k = 0$$\n3. Pindahkan konstanta ke ruas kanan:\n$$2k = 2 \\implies k = 1$$\n4. Jadi, nilai $k$ adalah 1 (pilihan A).",
      "pitfalls": "Kekeliruan tanda saat mengoperasikan $-2(4) = -8$, misalnya salah menuliskan $+8$ yang berakibat menghasilkan $k = -7$."
    },
    "subTopicSlug": "penjumlahan-pengurangan-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Penjumlahan dan Pengurangan Vektor",
    "subTopic": "Penjumlahan dan Pengurangan Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-vektor-operasi-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-operasi",
    "category": "Distributif Perkalian Skalar Vektor",
    "difficulty": "sedang",
    "statement": "Dua buah vektor $\\vec{p}$ dan $\\vec{q}$ masing-masing memiliki panjang $|\\vec{p}| = 6$ dan $|\\vec{q}| = 10$. Jika sudut yang dibentuk oleh kedua vektor tersebut adalah $120^\\circ$, maka nilai dari $\\vec{p} \\cdot (\\vec{p} + \\vec{q})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "6",
      "-6",
      "66",
      "36",
      "-24"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perkalian skalar bersifat distributif terhadap penjumlahan vektor: $\\vec{p} \\cdot (\\vec{p} + \\vec{q}) = \\vec{p} \\cdot \\vec{p} + \\vec{p} \\cdot \\vec{q} = |\\vec{p}|^2 + |\\vec{p}||\\vec{q}|\\cos(\\theta)$.",
      "steps": "1. Uraikan operasi perkalian menggunakan sifat distributif:\n$$\\vec{p} \\cdot (\\vec{p} + \\vec{q}) = |\\vec{p}|^2 + \\vec{p} \\cdot \\vec{q}$$\n2. Hitung suku pertama:\n$$|\\vec{p}|^2 = 6^2 = 36$$\n3. Hitung suku kedua menggunakan sudut tumpul $\\theta = 120^\\circ$ di mana $\\cos(120^\\circ) = -\\frac{1}{2}$:\n$$\\vec{p} \\cdot \\vec{q} = |\\vec{p}||\\vec{q}|\\cos(120^\\circ) = (6)(10)\\left(-\\frac{1}{2}\\right) = -30$$\n4. Jumlahkan kedua suku:\n$$\\vec{p} \\cdot (\\vec{p} + \\vec{q}) = 36 + (-30) = 6$$\n5. Jadi, hasilnya adalah 6 (pilihan A).",
      "pitfalls": "Lupa bahwa $\\cos(120^\\circ) = -\\frac{1}{2}$ (bertanda negatif di kuadran II), sehingga salah memasukkan nilai positif $+30$ yang menghasilkan 66."
    },
    "subTopicSlug": "penjumlahan-pengurangan-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Penjumlahan dan Pengurangan Vektor",
    "subTopic": "Penjumlahan dan Pengurangan Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-vektor-operasi-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-operasi",
    "category": "Proyeksi Skalar Ortogonal",
    "difficulty": "sedang",
    "statement": "Diketahui vektor $\\vec{a} = 4\\hat{i} + 2\\hat{j} + 4\\hat{k}$ dan vektor $\\vec{b} = 2\\hat{i} + \\hat{j} + 2\\hat{k}$. Panjang proyeksi skalar ortogonal dari vektor $\\vec{a}$ pada arah vektor $\\vec{b}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "6",
      "3",
      "9",
      "18",
      "2"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Proyeksi skalar ortogonal dari vektor $\\vec{a}$ pada vektor $\\vec{b}$ dirumuskan sebagai pembagian hasil kali titik dengan panjang vektor landasan: $|\\vec{c}| = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$.",
      "steps": "1. Hitung perkalian skalar (dot product) $\\vec{a} \\cdot \\vec{b}$:\n$$\\vec{a} \\cdot \\vec{b} = (4)(2) + (2)(1) + (4)(2) = 8 + 2 + 8 = 18$$\n2. Hitung panjang vektor landasan $|\\vec{b}|$:\n$$|\\vec{b}| = \\sqrt{2^2 + 1^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$$\n3. Hitung proyeksi skalar ortogonal:\n$$|\\vec{c}| = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{18}{3} = 6$$\n4. Jadi, panjang proyeksi skalar ortogonalnya adalah 6 satuan (pilihan A).",
      "pitfalls": "Membagi perkalian skalar dengan panjang vektor $\\vec{a}$ alih-alih vektor tujuan proyeksi $\\vec{b}$."
    },
    "subTopicSlug": "penjumlahan-pengurangan-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Penjumlahan dan Pengurangan Vektor",
    "subTopic": "Penjumlahan dan Pengurangan Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-vektor-operasi-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-operasi",
    "category": "Perkalian Silang (Cross Product) Dua Vektor",
    "difficulty": "sedang",
    "statement": "Diketahui vektor $\\vec{u} = \\hat{i} + 2\\hat{j} + 3\\hat{k}$ dan vektor $\\vec{v} = 2\\hat{i} - \\hat{j} + \\hat{k}$. Vektor hasil perkalian silang (cross product) $\\vec{u} \\times \\vec{v}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\hat{i} + 5\\hat{j} - 5\\hat{k}$",
      "$5\\hat{i} - 5\\hat{j} - 5\\hat{k}$",
      "$-5\\hat{i} + 5\\hat{j} - 5\\hat{k}$",
      "$5\\hat{i} + 5\\hat{j} + 5\\hat{k}$",
      "$\\hat{i} + 7\\hat{j} - 5\\hat{k}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perkalian silang dua vektor di ruang $\\mathbb{R}^3$ menghasilkan vektor yang tegak lurus terhadap kedua vektor awal, dihitung menggunakan determinan matriks $3 \\times 3$ dengan basis satuan.",
      "steps": "1. Susun determinan matriks perkalian silang:\n$$\\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & 3 \\\\ 2 & -1 & 1 \\end{vmatrix}$$\n2. Ekspansi determinan berdasarkan baris pertama:\n$$\\vec{u} \\times \\vec{v} = \\hat{i}(2(1) - 3(-1)) - \\hat{j}(1(1) - 3(2)) + \\hat{k}(1(-1) - 2(2))$$\n3. Hitung masing-masing komponen:\n$$\\text{Komponen } \\hat{i}: 2 - (-3) = 5$$\n$$\\text{Komponen } \\hat{j}: -(1 - 6) = -(-5) = 5$$\n$$\\text{Komponen } \\hat{k}: -1 - 4 = -5$$\n4. Gabungkan ketiga komponen:\n$$\\vec{u} \\times \\vec{v} = 5\\hat{i} + 5\\hat{j} - 5\\hat{k}$$\n5. Jadi, hasil perkalian silangnya adalah $5\\hat{i} + 5\\hat{j} - 5\\hat{k}$ (pilihan A).",
      "pitfalls": "Lupa tanda minus di depan kofaktor basis $\\hat{j}$ pada ekspansi baris pertama determinan matriks."
    },
    "subTopicSlug": "penjumlahan-pengurangan-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Penjumlahan dan Pengurangan Vektor",
    "subTopic": "Penjumlahan dan Pengurangan Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
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
