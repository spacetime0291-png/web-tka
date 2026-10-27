/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Vektor (mat-geo-vektor)
 * Sub-Bab: Vektor Bidang (R2) dan Ruang (R3) (mat-geo-vektor-komponen)
 * Slug: vektor-bidang-ruang
 * Indikator: Komponen vektor basis i, j, k, vektor posisi titik, dan vektor kolom koordinat.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-vektor-komponen";
  const subTopicSlug = "vektor-bidang-ruang";
  const questions = [
  {
    "id": "mat-geo-vektor-komponen-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-komponen",
    "category": "Komponen Vektor Dua Dimensi",
    "difficulty": "mudah",
    "statement": "Jika titik pangkal suatu vektor berada pada koordinat $A(2, -3)$ dan titik ujungnya pada koordinat $B(5, 1)$, maka komponen vektor $\\vec{AB}$ dalam bentuk kombinasi linier vektor basis $\\hat{i}$ dan $\\hat{j}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3\\hat{i} + 4\\hat{j}$",
      "$3\\hat{i} - 2\\hat{j}$",
      "$7\\hat{i} - 2\\hat{j}$",
      "$-3\\hat{i} - 4\\hat{j}$",
      "$4\\hat{i} + 3\\hat{j}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Vektor perpindahan dari titik pangkal $A(x_1, y_1)$ menuju titik ujung $B(x_2, y_2)$ ditentukan dengan mengurangkan koordinat titik ujung terhadap titik pangkal: $\\vec{AB} = (x_2 - x_1)\\hat{i} + (y_2 - y_1)\\hat{j}$.",
      "steps": "1. Identifikasi koordinat titik pangkal $A(2, -3)$ dan titik ujung $B(5, 1)$.\n2. Hitung komponen horisontal $\\hat{i}$:\n$$x_B - x_A = 5 - 2 = 3$$\n3. Hitung komponen vertikal $\\hat{j}$:\n$$y_B - y_A = 1 - (-3) = 1 + 3 = 4$$\n4. Nyatakan dalam bentuk kombinasi linier vektor basis:\n$$\\vec{AB} = 3\\hat{i} + 4\\hat{j}$$\n5. Jadi, komponen vektor $\\vec{AB}$ adalah $3\\hat{i} + 4\\hat{j}$ (pilihan A).",
      "pitfalls": "Kesalahan tanda minus saat mengurangkan bilangan negatif $1 - (-3)$ yang sering keliru dihitung menjadi $1 - 3 = -2$."
    },
    "subTopicSlug": "vektor-bidang-ruang",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Vektor Bidang (R2) dan Ruang (R3)",
    "subTopic": "Vektor Bidang (R2) dan Ruang (R3)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Vektor perpindahan dari titik pangkal $A(x_1, y_1)$ menuju titik ujung $B(x_2, y_2)$ ditentukan dengan mengurangkan koordinat titik ujung terhadap titik pangkal: $\\vec{AB} = (x_2 - x_1)\\hat{i} + (y_2 - y_1)\\hat{j}$. **Tips:** Kesalahan tanda minus saat mengurangkan bilangan negatif $1 - (-3)$ yang sering keliru dihitung menjadi $1 - 3 = -2$."
  },
  {
    "id": "mat-geo-vektor-komponen-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-komponen",
    "category": "Komponen Vektor Tiga Dimensi",
    "difficulty": "mudah",
    "statement": "Diketahui titik $P(1, 4, -2)$ dan titik $Q(3, 1, 5)$ pada ruang tiga dimensi. Vektor kolom yang menyatakan vektor $\\vec{PQ}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 2 \\\\ -3 \\\\ 7 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 \\\\ 5 \\\\ 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} -2 \\\\ 3 \\\\ -7 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 \\\\ 3 \\\\ 7 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 \\\\ -3 \\\\ 7 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada ruang dimensi tiga ($\\mathbb{R}^3$), komponen vektor kolom $\\vec{PQ}$ diperoleh dari selisih koordinat titik ujung $Q$ dengan koordinat titik pangkal $P$: $\\vec{PQ} = \\begin{pmatrix} x_Q - x_P \\\\ y_Q - y_P \\\\ z_Q - z_P \\end{pmatrix}$.",
      "steps": "1. Tentukan komponen pertama sumbu-$X$:\n$$x_Q - x_P = 3 - 1 = 2$$\n2. Tentukan komponen kedua sumbu-$Y$:\n$$y_Q - y_P = 1 - 4 = -3$$\n3. Tentukan komponen ketiga sumbu-$Z$:\n$$z_Q - z_P = 5 - (-2) = 5 + 2 = 7$$\n4. Susun dalam bentuk matriks kolom:\n$$\\vec{PQ} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 7 \\end{pmatrix}$$\n5. Jadi, vektor kolom yang sesuai adalah pilihan A.",
      "pitfalls": "Tertukar urutan titik dengan menghitung koordinat pangkal dikurangi koordinat ujung ($P - Q$), yang menghasilkan lawan dari vektor tersebut."
    },
    "subTopicSlug": "vektor-bidang-ruang",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Vektor Bidang (R2) dan Ruang (R3)",
    "subTopic": "Vektor Bidang (R2) dan Ruang (R3)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Pada ruang dimensi tiga ($\\mathbb{R}^3$), komponen vektor kolom $\\vec{PQ}$ diperoleh dari selisih koordinat titik ujung $Q$ dengan koordinat titik pangkal $P$: $\\vec{PQ} = \\begin{pmatrix} x_Q - x_P \\\\ y_Q - y_P \\\\ z_Q - z_P \\end{pmatrix}$."
  },
  {
    "id": "mat-geo-vektor-komponen-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-komponen",
    "category": "Komponen Vektor dari Besar dan Sudut Arah",
    "difficulty": "mudah",
    "statement": "Sebuah vektor $\\vec{v}$ di bidang Cartesius memiliki panjang 10 satuan dan membentuk sudut $60^\\circ$ terhadap sumbu-$X$ positif. Komponen vektor horizontal $v_x$ dan vertikal $v_y$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "5 dan $5\\sqrt{3}$",
      "$5\\sqrt{3}$ dan 5",
      "$5\\sqrt{2}$ dan $5\\sqrt{2}$",
      "6 dan 8",
      "5 dan 5"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Proyeksi komponen vektor terhadap sumbu koordinat dengan sudut arah $\\theta$ terhadap sumbu-$X$ positif dihitung menggunakan perbandingan trigonometri: $v_x = |\\vec{v}|\\cos(\\theta)$ dan $v_y = |\\vec{v}|\\sin(\\theta)$.",
      "steps": "1. Hitung komponen horizontal $v_x$:\n$$v_x = |\\vec{v}| \\cos(60^\\circ) = 10 \\times \\frac{1}{2} = 5$$\n2. Hitung komponen vertikal $v_y$:\n$$v_y = |\\vec{v}| \\sin(60^\\circ) = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}$$\n3. Jadi, komponen vektor horizontal dan vertikal berturut-turut adalah 5 dan $5\\sqrt{3}$ (pilihan A).",
      "pitfalls": "Tertukar antara komponen sinus dan kosinus pada penguraian sudut sumbu-$X$, yang menyebabkan nilai $v_x$ dan $v_y$ saling bertukar."
    },
    "subTopicSlug": "vektor-bidang-ruang",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Vektor Bidang (R2) dan Ruang (R3)",
    "subTopic": "Vektor Bidang (R2) dan Ruang (R3)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Proyeksi komponen vektor terhadap sumbu koordinat dengan sudut arah $\\theta$ terhadap sumbu-$X$ positif dihitung menggunakan perbandingan trigonometri: $v_x = |\\vec{v}|\\cos(\\theta)$ dan $v_y = |\\vec{v}|\\sin(\\theta)$."
  },
  {
    "id": "mat-geo-vektor-komponen-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-komponen",
    "category": "Komponen Vektor Negatif (Invers)",
    "difficulty": "mudah",
    "statement": "Diketahui vektor $\\vec{u} = -3\\hat{i} + 7\\hat{j} - 4\\hat{k}$. Komponen dari vektor negatif $-\\vec{u}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3\\hat{i} - 7\\hat{j} + 4\\hat{k}$",
      "$-3\\hat{i} - 7\\hat{j} - 4\\hat{k}$",
      "$3\\hat{i} + 7\\hat{j} - 4\\hat{k}$",
      "$-3\\hat{i} + 7\\hat{j} + 4\\hat{k}$",
      "$4\\hat{i} - 7\\hat{j} + 3\\hat{k}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Vektor negatif atau invers aditif $-\\vec{u}$ memiliki besar yang sama persis namun arah yang berlawanan, diperoleh dengan mengalikan setiap komponen skalar dengan bilangan $-1$.",
      "steps": "1. Tuliskan operasi perkalian skalar $-1$ terhadap vektor $\\vec{u}$:\n$$-\\vec{u} = -1 \\cdot (-3\\hat{i} + 7\\hat{j} - 4\\hat{k})$$\n2. Kalikan tanda minus ke masing-masing suku:\n$$-\\vec{u} = -1(-3)\\hat{i} + -1(7)\\hat{j} + -1(-4)\\hat{k}$$\n$$-\\vec{u} = 3\\hat{i} - 7\\hat{j} + 4\\hat{k}$$\n3. Jadi, komponen vektor negatifnya adalah $3\\hat{i} - 7\\hat{j} + 4\\hat{k}$ (pilihan A).",
      "pitfalls": "Hanya mengubah tanda komponen pertama dan melupakan pengubahan tanda pada komponen kedua atau ketiga."
    },
    "subTopicSlug": "vektor-bidang-ruang",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Vektor Bidang (R2) dan Ruang (R3)",
    "subTopic": "Vektor Bidang (R2) dan Ruang (R3)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Vektor negatif atau invers aditif $-\\vec{u}$ memiliki besar yang sama persis namun arah yang berlawanan, diperoleh dengan mengalikan setiap komponen skalar dengan bilangan $-1$. **Tips:** Hanya mengubah tanda komponen pertama dan melupakan pengubahan tanda pada komponen kedua atau ketiga."
  },
  {
    "id": "mat-geo-vektor-komponen-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-komponen",
    "category": "Kesamaan Dua Vektor",
    "difficulty": "mudah",
    "statement": "Diketahui vektor $\\vec{a} = (2x - 1)\\hat{i} + 6\\hat{j}$ dan vektor $\\vec{b} = 7\\hat{i} + (3y + 3)\\hat{j}$. Jika kedua vektor bernilai sama ($\\vec{a} = \\vec{b}$), maka nilai dari $x + y$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "5",
      "4",
      "3",
      "6",
      "7"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Dua vektor dikatakan sama jika dan hanya jika komponen-komponen skalar yang seletak dan sejajar dengan vektor basis yang bersesuaian bernilai sama besar.",
      "steps": "1. Samakan komponen horizontal basis $\\hat{i}$:\n$$2x - 1 = 7 \\implies 2x = 8 \\implies x = 4$$\n2. Samakan komponen vertikal basis $\\hat{j}$:\n$$6 = 3y + 3 \\implies 3y = 3 \\implies y = 1$$\n3. Hitung penjumlahan nilai $x + y$:\n$$x + y = 4 + 1 = 5$$\n4. Jadi, nilai $x + y$ adalah 5 (pilihan A).",
      "pitfalls": "Keliru saat menyelesaikan aljabar linier $3y + 3 = 6$, misalnya salah memindahkan ruas menjadi $3y = 9$."
    },
    "subTopicSlug": "vektor-bidang-ruang",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Vektor Bidang (R2) dan Ruang (R3)",
    "subTopic": "Vektor Bidang (R2) dan Ruang (R3)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Dua vektor dikatakan sama jika dan hanya jika komponen-komponen skalar yang seletak dan sejajar dengan vektor basis yang bersesuaian bernilai sama besar."
  },
  {
    "id": "mat-geo-vektor-komponen-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-komponen",
    "category": "Pembagian Ruas Garis oleh Titik Vektor",
    "difficulty": "sedang",
    "statement": "Titik $P$ terletak pada ruas garis $AB$ sedemikian rupa sehingga perbandingan panjang ruas garis $AP : PB = 2 : 3$. Jika koordinat titik $A(1, 4, -2)$ dan titik $B(6, -1, 3)$, maka komponen vektor posisi titik $P$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3\\hat{i} + 2\\hat{j}$",
      "$3\\hat{i} + 2\\hat{j} + 2\\hat{k}$",
      "$4\\hat{i} + \\hat{j} + \\hat{k}$",
      "$2\\hat{i} + 3\\hat{j} - \\hat{k}$",
      "$5\\hat{i} + 2\\hat{j} + 2\\hat{k}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Vektor posisi titik pembagi ruas garis $P$ yang membagi $AB$ dengan rasio $m : n$ dirumuskan sebagai $\\vec{p} = \\frac{m\\vec{b} + n\\vec{a}}{m + n}$.",
      "steps": "1. Identifikasi rasio pembagian: $m = 2$ dan $n = 3$, sehingga $m + n = 5$.\n2. Hitung masing-masing komponen koordinat titik $P$:\n$$x_P = \\frac{2(6) + 3(1)}{5} = \\frac{12 + 3}{5} = \\frac{15}{5} = 3$$\n$$y_P = \\frac{2(-1) + 3(4)}{5} = \\frac{-2 + 12}{5} = \\frac{10}{5} = 2$$\n$$z_P = \\frac{2(3) + 3(-2)}{5} = \\frac{6 - 6}{5} = \\frac{0}{5} = 0$$\n3. Nyatakan ke dalam bentuk vektor kombinasi linier:\n$$\\vec{p} = 3\\hat{i} + 2\\hat{j} + 0\\hat{k} = 3\\hat{i} + 2\\hat{j}$$\n4. Jadi, vektor posisi titik $P$ adalah $3\\hat{i} + 2\\hat{j}$ (pilihan A).",
      "pitfalls": "Tertukar dalam memasangkan rasio pengali, yaitu mengalikan rasio $m$ dengan titik $A$ dan rasio $n$ dengan titik $B$."
    },
    "subTopicSlug": "vektor-bidang-ruang",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Vektor Bidang (R2) dan Ruang (R3)",
    "subTopic": "Vektor Bidang (R2) dan Ruang (R3)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Vektor posisi titik pembagi ruas garis $P$ yang membagi $AB$ dengan rasio $m : n$ dirumuskan sebagai $\\vec{p} = \\frac{m\\vec{b} + n\\vec{a}}{m + n}$. **Tips:** Tertukar dalam memasangkan rasio pengali, yaitu mengalikan rasio $m$ dengan titik $A$ dan rasio $n$ dengan titik $B$."
  },
  {
    "id": "mat-geo-vektor-komponen-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-komponen",
    "category": "Vektor Kolinier (Segaris)",
    "difficulty": "sedang",
    "statement": "Diketahui tiga buah titik pada ruang tiga dimensi, yaitu $A(2, 1, 3)$, $B(4, 5, 7)$, dan $C(x, y, 15)$. Jika titik $A$, $B$, dan $C$ terletak pada satu garis lurus (kolinier), maka nilai dari $x + y$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "21",
      "19",
      "17",
      "23",
      "25"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Tiga titik $A$, $B$, dan $C$ kolinier jika vektor $\\vec{AC}$ merupakan kelipatan skalar dari vektor $\\vec{AB}$, yaitu $\\vec{AC} = k \\cdot \\vec{AB}$.",
      "steps": "1. Tentukan komponen vektor $\\vec{AB}$:\n$$\\vec{AB} = \\begin{pmatrix} 4 - 2 \\\\ 5 - 1 \\\\ 7 - 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 4 \\\\ 4 \\end{pmatrix}$$\n2. Tentukan komponen vektor $\\vec{AC}$:\n$$\\vec{AC} = \\begin{pmatrix} x - 2 \\\\ y - 1 \\\\ 15 - 3 \\end{pmatrix} = \\begin{pmatrix} x - 2 \\\\ y - 1 \\\\ 12 \\end{pmatrix}$$\n3. Samakan komponen sumbu-$Z$ untuk mencari nilai konstanta pembanding $k$:\n$$12 = k(4) \\implies k = 3$$\n4. Cari nilai $x$ dan $y$ menggunakan nilai $k = 3$:\n$$x - 2 = 3(2) = 6 \\implies x = 8$$\n$$y - 1 = 3(4) = 12 \\implies y = 13$$\n5. Hitung nilai $x + y$:\n$$x + y = 8 + 13 = 21$$\n6. Jadi, nilai $x + y$ adalah 21 (pilihan A).",
      "pitfalls": "Lupa mengurangkan koordinat titik $A$ saat menyusun vektor $\\vec{AC}$, sehingga langsung menyamakan $x = 3(2)$ yang menghasilkan nilai yang keliru."
    },
    "subTopicSlug": "vektor-bidang-ruang",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Vektor Bidang (R2) dan Ruang (R3)",
    "subTopic": "Vektor Bidang (R2) dan Ruang (R3)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Tiga titik $A$, $B$, dan $C$ kolinier jika vektor $\\vec{AC}$ merupakan kelipatan skalar dari vektor $\\vec{AB}$, yaitu $\\vec{AC} = k \\cdot \\vec{AB}$."
  },
  {
    "id": "mat-geo-vektor-komponen-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-komponen",
    "category": "Vektor Satuan (Unit Vector)",
    "difficulty": "sedang",
    "statement": "Vektor satuan yang searah dengan vektor $\\vec{v} = 2\\hat{i} - 3\\hat{j} + 6\\hat{k}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{2}{7}\\hat{i} - \\frac{3}{7}\\hat{j} + \\frac{6}{7}\\hat{k}$",
      "$\\frac{2}{49}\\hat{i} - \\frac{3}{49}\\hat{j} + \\frac{6}{49}\\hat{k}$",
      "$\\frac{2}{\\sqrt{11}}\\hat{i} - \\frac{3}{\\sqrt{11}}\\hat{j} + \\frac{6}{\\sqrt{11}}\\hat{k}$",
      "$-\\frac{2}{7}\\hat{i} + \\frac{3}{7}\\hat{j} - \\frac{6}{7}\\hat{k}$",
      "$\\frac{1}{7}\\hat{i} - \\frac{3}{7}\\hat{j} + \\frac{2}{7}\\hat{k}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Vektor satuan yang searah dengan sembarang vektor $\\vec{v}$ diperoleh dengan membagi vektor tersebut dengan panjang (norma) mutlaknya: $\\hat{u} = \\frac{\\vec{v}}{|\\vec{v}|}$.",
      "steps": "1. Hitung panjang vektor $|\\vec{v}|$:\n$$|\\vec{v}| = \\sqrt{2^2 + (-3)^2 + 6^2}$$\n$$|\\vec{v}| = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$$\n2. Bagi masing-masing komponen vektor dengan panjang 7:\n$$\\hat{u} = \\frac{2\\hat{i} - 3\\hat{j} + 6\\hat{k}}{7}$$\n$$\\hat{u} = \\frac{2}{7}\\hat{i} - \\frac{3}{7}\\hat{j} + \\frac{6}{7}\\hat{k}$$\n3. Jadi, vektor satuan yang searah adalah $\\frac{2}{7}\\hat{i} - \\frac{3}{7}\\hat{j} + \\frac{6}{7}\\hat{k}$ (pilihan A).",
      "pitfalls": "Membagi komponen vektor dengan kuadrat panjangnya ($|\\vec{v}|^2 = 49$) alih-alih panjang aslinya ($7$)."
    },
    "subTopicSlug": "vektor-bidang-ruang",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Vektor Bidang (R2) dan Ruang (R3)",
    "subTopic": "Vektor Bidang (R2) dan Ruang (R3)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Vektor satuan yang searah dengan sembarang vektor $\\vec{v}$ diperoleh dengan membagi vektor tersebut dengan panjang (norma) mutlaknya: $\\hat{u} = \\frac{\\vec{v}}{|\\vec{v}|}$."
  },
  {
    "id": "mat-geo-vektor-komponen-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-komponen",
    "category": "Vektor Posisi Titik Berat Segitiga",
    "difficulty": "sedang",
    "statement": "Pada suatu segitiga $ABC$ di ruang dimensi tiga, koordinat titik-titik sudutnya adalah $A(2, -1, 4)$, $B(5, 4, -3)$, dan $C(-1, 3, 2)$. Vektor posisi dari titik berat segitiga $ABC$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\hat{i} + 2\\hat{j} + \\hat{k}$",
      "$3\\hat{i} + 2\\hat{j} + \\hat{k}$",
      "$2\\hat{i} + 3\\hat{j} + 2\\hat{k}$",
      "$\\hat{i} + 2\\hat{j} + 3\\hat{k}$",
      "$6\\hat{i} + 6\\hat{j} + 3\\hat{k}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik berat suatu segitiga $ABC$ memiliki vektor posisi yang merupakan rata-rata aritmetika dari ketiga vektor posisi titik sudutnya: $\\vec{z} = \\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3}$.",
      "steps": "1. Jumlahkan seluruh komponen pada masing-masing sumbu koordinat:\n- Sumbu-$X$: $x_Z = \\frac{2 + 5 + (-1)}{3} = \\frac{6}{3} = 2$\n- Sumbu-$Y$: $y_Z = \\frac{-1 + 4 + 3}{3} = \\frac{6}{3} = 2$\n- Sumbu-$Z$: $z_Z = \\frac{4 + (-3) + 2}{3} = \\frac{3}{3} = 1$\n2. Susun komponen ke dalam bentuk kombinasi linier vektor:\n$$\\vec{z} = 2\\hat{i} + 2\\hat{j} + 1\\hat{k} = 2\\hat{i} + 2\\hat{j} + \\hat{k}$$\n3. Jadi, vektor posisi titik beratnya adalah $2\\hat{i} + 2\\hat{j} + \\hat{k}$ (pilihan A).",
      "pitfalls": "Lupa membagi dengan 3 setelah menjumlahkan ketiga koordinat titik sudut segitiga."
    },
    "subTopicSlug": "vektor-bidang-ruang",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Vektor Bidang (R2) dan Ruang (R3)",
    "subTopic": "Vektor Bidang (R2) dan Ruang (R3)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Titik berat suatu segitiga $ABC$ memiliki vektor posisi yang merupakan rata-rata aritmetika dari ketiga vektor posisi titik sudutnya: $\\vec{z} = \\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3}$. **Tips:** Lupa membagi dengan 3 setelah menjumlahkan ketiga koordinat titik sudut segitiga."
  },
  {
    "id": "mat-geo-vektor-komponen-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-komponen",
    "category": "Dekomposisi Kombinasi Linier Vektor",
    "difficulty": "sedang",
    "statement": "Diketahui vektor kolom $\\vec{u} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$, $\\vec{v} = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$, dan $\\vec{w} = \\begin{pmatrix} 11 \\\\ 8 \\end{pmatrix}$. Jika vektor $\\vec{w}$ dapat dinyatakan sebagai kombinasi linier $\\vec{w} = p\\vec{u} + q\\vec{v}$, maka nilai dari perkalian skalar $p \\cdot q$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "10",
      "12",
      "8",
      "6",
      "15"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kombinasi linier $\\vec{w} = p\\vec{u} + q\\vec{v}$ diselesaikan dengan membentuk sistem persamaan linier dua variabel (SPLDV) dari kesamaan komponen vektor seletak.",
      "steps": "1. Tuliskan kesamaan komponen vektor:\n$$\\begin{pmatrix} 11 \\\\ 8 \\end{pmatrix} = p \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} + q \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$$\n2. Bentuk SPLDV:\n- Persamaan (1): $p + 3q = 11$\n- Persamaan (2): $2p - q = 8 \\implies q = 2p - 8$\n3. Substitusikan $q$ ke Persamaan (1):\n$$p + 3(2p - 8) = 11 \\implies p + 6p - 24 = 11$$\n$$7p = 35 \\implies p = 5$$\n4. Hitung nilai $q$:\n$$q = 2(5) - 8 = 10 - 8 = 2$$\n5. Hitung hasil perkalian $p \\cdot q$:\n$$p \\cdot q = 5 \\cdot 2 = 10$$\n6. Jadi, nilai dari $p \\cdot q$ adalah 10 (pilihan A).",
      "pitfalls": "Kesalahan saat melakukan substitusi aljabar tanda minus $3(-8) = -24$ yang sering keliru menjadi tanda positif."
    },
    "subTopicSlug": "vektor-bidang-ruang",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Vektor Bidang (R2) dan Ruang (R3)",
    "subTopic": "Vektor Bidang (R2) dan Ruang (R3)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Kombinasi linier $\\vec{w} = p\\vec{u} + q\\vec{v}$ diselesaikan dengan membentuk sistem persamaan linier dua variabel (SPLDV) dari kesamaan komponen vektor seletak. **Tips:** Kesalahan saat melakukan substitusi aljabar tanda minus $3(-8) = -24$ yang sering keliru menjadi tanda positif."
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
