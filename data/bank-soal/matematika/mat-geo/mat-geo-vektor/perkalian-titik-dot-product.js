/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Vektor (mat-geo-vektor)
 * Sub-Bab: Perkalian Titik (Dot Product) (mat-geo-vektor-dot)
 * Slug: perkalian-titik-dot-product
 * Indikator: Perkalian skalar dot product, sudut antara dua vektor, dan sifat ortogonalitas.
 * 
 * Total Butir Soal: 12 (Mudah: 6, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-vektor-dot";
  const subTopicSlug = "perkalian-titik-dot-product";
  const questions = [
  {
    "id": "mat-geo-vektor-dot-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-dot",
    "category": "Perkalian Titik Dua Dimensi",
    "difficulty": "mudah",
    "statement": "Nilai perkalian titik (dot product) antara vektor $\\vec{u} = 5\\hat{i} - 2\\hat{j}$ dan $\\vec{v} = 3\\hat{i} + 4\\hat{j}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "7",
      "23",
      "-7",
      "15",
      "-8"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perkalian titik dua vektor dua dimensi $\\vec{u} = u_x\\hat{i} + u_y\\hat{j}$ dan $\\vec{v} = v_x\\hat{i} + v_y\\hat{j}$ menghasilkan bilangan skalar: $\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y$.",
      "steps": "1. Kalikan komponen horizontal basis $\\hat{i}$:\n$$5 \\times 3 = 15$$\n2. Kalikan komponen vertikal basis $\\hat{j}$:\n$$-2 \\times 4 = -8$$\n3. Jumlahkan kedua hasil perkalian tersebut:\n$$\\vec{u} \\cdot \\vec{v} = 15 + (-8) = 7$$\n4. Jadi, nilai perkalian titiknya adalah 7 (pilihan A).",
      "pitfalls": "Keliru tanda saat mengalikan bilangan negatif $-2 \\times 4 = -8$ yang sering dihitung sebagai $+8$."
    },
    "subTopicSlug": "perkalian-titik-dot-product",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perkalian Titik (Dot Product)",
    "subTopic": "Perkalian Titik (Dot Product)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-vektor-dot-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-dot",
    "category": "Perkalian Titik Berdasarkan Panjang dan Sudut",
    "difficulty": "mudah",
    "statement": "Diketahui panjang vektor $|\\vec{a}| = 6$ dan $|\\vec{b}| = 8$. Jika sudut yang dibentuk oleh kedua vektor tersebut adalah $60^\\circ$, maka nilai perkalian titik $\\vec{a} \\cdot \\vec{b}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "24",
      "$24\\sqrt{3}$",
      "48",
      "12",
      "$12\\sqrt{3}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Definisi geometris perkalian titik dua vektor melibatkan besar kedua vektor dan kosinus sudut apitnya: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos(\\theta)$.",
      "steps": "1. Tuliskan rumus perkalian titik geometris:\n$$\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos(60^\\circ)$$\n2. Masukkan nilai yang diketahui:\n$$\\vec{a} \\cdot \\vec{b} = 6 \\times 8 \\times \\frac{1}{2}$$\n3. Selesaikan perhitungan aritmetika:\n$$\\vec{a} \\cdot \\vec{b} = 48 \\times \\frac{1}{2} = 24$$\n4. Jadi, nilai perkalian titiknya adalah 24 (pilihan A).",
      "pitfalls": "Tertukar antara nilai $\\cos(60^\\circ) = \\frac{1}{2}$ dengan $\\sin(60^\\circ) = \\frac{1}{2}\\sqrt{3}$."
    },
    "subTopicSlug": "perkalian-titik-dot-product",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perkalian Titik (Dot Product)",
    "subTopic": "Perkalian Titik (Dot Product)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-vektor-dot-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-dot",
    "category": "Perkalian Titik Tiga Dimensi",
    "difficulty": "mudah",
    "statement": "Diketahui vektor $\\vec{p} = 2\\hat{i} - \\hat{j} + 3\\hat{k}$ dan $\\vec{q} = 4\\hat{i} + 2\\hat{j} - \\hat{k}$. Hasil perkalian titik $\\vec{p} \\cdot \\vec{q}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "3",
      "7",
      "-3",
      "13",
      "5"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada ruang dimensi tiga, perkalian skalar dihitung dari jumlah perkalian ketiga pasang komponen seletak: $\\vec{p} \\cdot \\vec{q} = p_x q_x + p_y q_y + p_z q_z$.",
      "steps": "1. Kalikan masing-masing komponen seletak:\n- Sumbu-$X$: $2 \\times 4 = 8$\n- Sumbu-$Y$: $(-1) \\times 2 = -2$\n- Sumbu-$Z$: $3 \\times (-1) = -3$\n2. Jumlahkan seluruh hasil perkalian:\n$$\\vec{p} \\cdot \\vec{q} = 8 + (-2) + (-3) = 8 - 5 = 3$$\n3. Jadi, hasil perkalian titiknya adalah 3 (pilihan A).",
      "pitfalls": "Kekeliruan tanda saat mengoperasikan suku-suku negatif, seperti mengabaikan tanda minus pada komponen ketiga."
    },
    "subTopicSlug": "perkalian-titik-dot-product",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perkalian Titik (Dot Product)",
    "subTopic": "Perkalian Titik (Dot Product)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-vektor-dot-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-dot",
    "category": "Perkalian Titik Vektor dengan Diri Sendiri",
    "difficulty": "mudah",
    "statement": "Diketahui vektor $\\vec{v} = 3\\hat{i} - 4\\hat{j}$. Nilai dari hasil perkalian titik $\\vec{v} \\cdot \\vec{v}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "25",
      "5",
      "-7",
      "1",
      "0"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perkalian titik suatu vektor dengan dirinya sendiri sama dengan kuadrat dari panjang (norma) vektor tersebut: $\\vec{v} \\cdot \\vec{v} = |\\vec{v}|^2 = v_x^2 + v_y^2$.",
      "steps": "1. Kuadratkan masing-masing komponen vektor $\\vec{v}$:\n$$v_x^2 = 3^2 = 9$$\n$$v_y^2 = (-4)^2 = 16$$\n2. Jumlahkan hasil kuadrat tersebut:\n$$\\vec{v} \\cdot \\vec{v} = 9 + 16 = 25$$\n3. (Perhatikan bahwa $|\\vec{v}| = \\sqrt{25} = 5$, sehingga $|\\vec{v}|^2 = 25$).\n4. Jadi, nilai $\\vec{v} \\cdot \\vec{v}$ adalah 25 (pilihan A).",
      "pitfalls": "Menjawab dengan panjang vektornya ($5$) alih-alih kuadrat panjangnya ($25$)."
    },
    "subTopicSlug": "perkalian-titik-dot-product",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perkalian Titik (Dot Product)",
    "subTopic": "Perkalian Titik (Dot Product)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-vektor-dot-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-dot",
    "category": "Perkalian Titik Vektor Tegak Lurus",
    "difficulty": "mudah",
    "statement": "Dua buah vektor bukan nol $\\vec{a}$ dan $\\vec{b}$ saling tegak lurus (ortogonal) satu sama lain. Nilai perkalian titik $\\vec{a} \\cdot \\vec{b}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "0",
      "1",
      "$|\\vec{a}||\\vec{b}|$",
      "-1",
      "Tak terdefinisi"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Dua vektor yang saling tegak lurus membentuk sudut apit $\\theta = 90^\\circ$. Karena nilai $\\cos(90^\\circ) = 0$, maka hasil perkalian titik keduanya selalu nol.",
      "steps": "1. Tinjau rumus perkalian titik geometris: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos(\\theta)$.\n2. Karena kedua vektor tegak lurus, maka besar sudut apit $\\theta = 90^\\circ$.\n3. Substitusikan nilai $\\cos(90^\\circ) = 0$:\n$$\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|(0) = 0$$\n4. Jadi, nilai perkalian titiknya adalah 0 (pilihan A).",
      "pitfalls": "Terkecoh dengan nilai 1, yang merupakan nilai kosinus untuk sudut $0^\\circ$ (dua vektor sejajar dan searah)."
    },
    "subTopicSlug": "perkalian-titik-dot-product",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perkalian Titik (Dot Product)",
    "subTopic": "Perkalian Titik (Dot Product)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-vektor-dot-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-dot",
    "category": "Kondisi Sudut Tumpul Antara Dua Vektor",
    "difficulty": "sedang",
    "statement": "Nilai batas konstanta $m$ agar sudut yang dibentuk oleh vektor $\\vec{a} = m\\hat{i} + 2\\hat{j} - \\hat{k}$ dan vektor $\\vec{b} = 2\\hat{i} - 3\\hat{j} + 4\\hat{k}$ merupakan sudut tumpul adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$m < 5$",
      "$m > 5$",
      "$m \\le 5$",
      "$m < -5$",
      "$-5 < m < 5$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Sudut antara dua vektor $\\theta$ merupakan sudut tumpul ($90^\\circ < \\theta \\le 180^\\circ$) jika dan hanya jika nilai kosinusnya negatif, yang berarti hasil perkalian skalar keduanya bernilai negatif tegas: $\\vec{a} \\cdot \\vec{b} < 0$.",
      "steps": "1. Hitung perkalian skalar $\\vec{a} \\cdot \\vec{b}$:\n$$\\vec{a} \\cdot \\vec{b} = (m)(2) + (2)(-3) + (-1)(4) = 2m - 6 - 4 = 2m - 10$$\n2. Terapkan syarat sudut tumpul:\n$$2m - 10 < 0$$\n3. Selesaikan pertidaksamaan linier:\n$$2m < 10 \\implies m < 5$$\n4. Jadi, nilai konstanta $m$ yang memenuhi adalah $m < 5$ (pilihan A).",
      "pitfalls": "Menyertakan tanda sama dengan ($m \\le 5$), padahal pada saat $m = 5$ perkalian titik bernilai nol yang membentuk sudut siku-siku ($90^\\circ$), bukan sudut tumpul."
    },
    "subTopicSlug": "perkalian-titik-dot-product",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perkalian Titik (Dot Product)",
    "subTopic": "Perkalian Titik (Dot Product)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-vektor-dot-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-dot",
    "category": "Kuadrat Panjang Kombinasi Vektor Linier",
    "difficulty": "sedang",
    "statement": "Diketahui dua buah vektor $\\vec{u}$ dan $\\vec{v}$ memiliki panjang $|\\vec{u}| = 4$ dan $|\\vec{v}| = 5$, serta hasil perkalian titik $\\vec{u} \\cdot \\vec{v} = 6$. Nilai dari $|2\\vec{u} - 3\\vec{v}|^2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "217",
      "289",
      "145",
      "361",
      "181"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kuadrat panjang kombinasi linier vektor diuraikan dengan sifat distributif perkalian titik: $|c_1\\vec{u} + c_2\\vec{v}|^2 = c_1^2|\\vec{u}|^2 + 2c_1 c_2(\\vec{u} \\cdot \\vec{v}) + c_2^2|\\vec{v}|^2$.",
      "steps": "1. Uraikan bentuk kuadrat norma:\n$$|2\\vec{u} - 3\\vec{v}|^2 = 4|\\vec{u}|^2 - 12(\\vec{u} \\cdot \\vec{v}) + 9|\\vec{v}|^2$$\n2. Masukkan nilai $|\\vec{u}| = 4$, $|\\vec{v}| = 5$, dan $\\vec{u} \\cdot \\vec{v} = 6$:\n$$|2\\vec{u} - 3\\vec{v}|^2 = 4(4^2) - 12(6) + 9(5^2)$$\n3. Hitung hasil perkalian masing-masing suku:\n$$= 4(16) - 72 + 9(25)$$\n$$= 64 - 72 + 225$$\n4. Selesaikan penjumlahan:\n$$= -8 + 225 = 217$$\n5. Jadi, nilai $|2\\vec{u} - 3\\vec{v}|^2$ adalah 217 (pilihan A).",
      "pitfalls": "Lupa menyertakan suku silang $-12(\\vec{u} \\cdot \\vec{v})$ dan hanya menguadratkan suku pertama dan terakhir $64 + 225 = 289$."
    },
    "subTopicSlug": "perkalian-titik-dot-product",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perkalian Titik (Dot Product)",
    "subTopic": "Perkalian Titik (Dot Product)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-vektor-dot-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-dot",
    "category": "Sudut Antara Dua Sisi Segitiga",
    "difficulty": "sedang",
    "statement": "Pada segitiga $ABC$ di ruang dimensi tiga, koordinat titik sudutnya adalah $A(1, 0, -1)$, $B(2, 1, 1)$, dan $C(1, 2, 1)$. Nilai dari $\\cos(\\angle BAC)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{2}\\sqrt{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\sqrt{2}$",
      "$\\frac{1}{3}\\sqrt{6}$",
      "$\\frac{2}{3}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Sudut $\\angle BAC$ dibentuk oleh dua vektor yang berpangkal di titik $A$, yaitu vektor $\\vec{AB}$ dan $\\vec{AC}$. Nilai kosinusnya dirumuskan sebagai $\\cos(\\angle BAC) = \\frac{\\vec{AB} \\cdot \\vec{AC}}{|\\vec{AB}||\\vec{AC}|}$.",
      "steps": "1. Tentukan komponen vektor $\\vec{AB}$ dan $\\vec{AC}$:\n$$\\vec{AB} = (2 - 1)\\hat{i} + (1 - 0)\\hat{j} + (1 - (-1))\\hat{k} = \\hat{i} + \\hat{j} + 2\\hat{k}$$\n$$\\vec{AC} = (1 - 1)\\hat{i} + (2 - 0)\\hat{j} + (1 - (-1))\\hat{k} = 0\\hat{i} + 2\\hat{j} + 2\\hat{k}$$\n2. Hitung perkalian skalar $\\vec{AB} \\cdot \\vec{AC}$:\n$$\\vec{AB} \\cdot \\vec{AC} = (1)(0) + (1)(2) + (2)(2) = 0 + 2 + 4 = 6$$\n3. Hitung panjang masing-masing vektor:\n$$|\\vec{AB}| = \\sqrt{1^2 + 1^2 + 2^2} = \\sqrt{6}$$\n$$|\\vec{AC}| = \\sqrt{0^2 + 2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$$\n4. Hitung nilai kosinus sudut:\n$$\\cos(\\angle BAC) = \\frac{6}{\\sqrt{6} \\cdot 2\\sqrt{2}} = \\frac{6}{2\\sqrt{12}} = \\frac{3}{2\\sqrt{3}} = \\frac{3\\sqrt{3}}{6} = \\frac{1}{2}\\sqrt{3}$$\n5. Jadi, nilai $\\cos(\\angle BAC)$ adalah $\\frac{1}{2}\\sqrt{3}$ (pilihan A).",
      "pitfalls": "Salah menentukan titik pangkal vektor, misalnya menggunakan $\\vec{BA}$ dan $\\vec{AC}$ yang arahnya tidak bersesuaian dengan sudut $\\angle BAC$."
    },
    "subTopicSlug": "perkalian-titik-dot-product",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perkalian Titik (Dot Product)",
    "subTopic": "Perkalian Titik (Dot Product)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-vektor-dot-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-dot",
    "category": "Proyeksi Vektor Ortogonal",
    "difficulty": "sedang",
    "statement": "Proyeksi vektor ortogonal dari vektor $\\vec{a} = 2\\hat{i} + 4\\hat{j}$ pada arah vektor $\\vec{b} = 3\\hat{i} - \\hat{j}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{3}{5}\\hat{i} - \\frac{1}{5}\\hat{j}$",
      "$\\frac{6}{5}\\hat{i} - \\frac{2}{5}\\hat{j}$",
      "$\\frac{3}{10}\\hat{i} - \\frac{1}{10}\\hat{j}$",
      "$\\frac{1}{5}\\hat{i} + \\frac{2}{5}\\hat{j}$",
      "$\\hat{i} - \\frac{1}{3}\\hat{j}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Proyeksi vektor ortogonal dari vektor $\\vec{a}$ pada vektor $\\vec{b}$ menghasilkan besaran vektor yang searah dengan vektor $\\vec{b}$, dirumuskan sebagai $\\vec{p} = \\left(\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2}\\right)\\vec{b}$.",
      "steps": "1. Hitung perkalian skalar $\\vec{a} \\cdot \\vec{b}$:\n$$\\vec{a} \\cdot \\vec{b} = (2)(3) + (4)(-1) = 6 - 4 = 2$$\n2. Hitung kuadrat panjang vektor landasan $|\\vec{b}|^2$:\n$$|\\vec{b}|^2 = 3^2 + (-1)^2 = 9 + 1 = 10$$\n3. Hitung faktor pengali skalar:\n$$\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} = \\frac{2}{10} = \\frac{1}{5}$$\n4. Kalikan faktor skalar tersebut ke vektor $\\vec{b}$:\n$$\\vec{p} = \\frac{1}{5}(3\\hat{i} - \\hat{j}) = \\frac{3}{5}\\hat{i} - \\frac{1}{5}\\hat{j}$$\n5. Jadi, proyeksi vektor ortogonalnya adalah $\\frac{3}{5}\\hat{i} - \\frac{1}{5}\\hat{j}$ (pilihan A).",
      "pitfalls": "Membagi dengan panjang vektor $|\\vec{b}|$ bukan kuadratnya $|\\vec{b}|^2$, sehingga menghasilkan vektor dengan panjang yang tidak sesuai rumus proyeksi vektor."
    },
    "subTopicSlug": "perkalian-titik-dot-product",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perkalian Titik (Dot Product)",
    "subTopic": "Perkalian Titik (Dot Product)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-vektor-dot-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-dot",
    "category": "Identitas Selisih Kuadrat Norma Vektor",
    "difficulty": "sedang",
    "statement": "Diketahui dua buah vektor $\\vec{a}$ dan $\\vec{b}$ memiliki panjang $|\\vec{a}| = 2$ dan $|\\vec{b}| = 3$, serta membentuk sudut $120^\\circ$. Nilai dari hasil kali titik $(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-5",
      "5",
      "-13",
      "13",
      "-7"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Berdasarkan sifat distributif perkalian titik, perkalian bentuk jumlah dan selisih dua vektor setara dengan selisih kuadrat panjang masing-masing vektor: $(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = |\\vec{a}|^2 - |\\vec{b}|^2$.",
      "steps": "1. Uraikan bentuk perkalian titik menggunakan sifat distributif:\n$$(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = \\vec{a} \\cdot \\vec{a} - \\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{a} - \\vec{b} \\cdot \\vec{b}$$\n2. Karena perkalian skalar bersifat komutatif ($\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{a}$), maka kedua suku silang saling menghilangkan:\n$$(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = |\\vec{a}|^2 - |\\vec{b}|^2$$\n3. Masukkan nilai panjang $|\\vec{a}| = 2$ dan $|\\vec{b}| = 3$:\n$$= 2^2 - 3^2 = 4 - 9 = -5$$\n4. (Perhatikan bahwa nilai ini sepenuhnya independen terhadap besar sudut antara kedua vektor).\n5. Jadi, hasilnya adalah -5 (pilihan A).",
      "pitfalls": "Terkecoh menghitung nilai sudut $120^\\circ$ secara rumit padahal suku silang saling meniadakan secara aljabar vektor."
    },
    "subTopicSlug": "perkalian-titik-dot-product",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perkalian Titik (Dot Product)",
    "subTopic": "Perkalian Titik (Dot Product)",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mudah-mtk-10",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-vektor-dot",
    "category": "Perkalian Skalar Dua Vektor (Dot Product)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Diketahui dua buah vektor pada bidang datar $\\vec{u} = 3\\hat{i} - 4\\hat{j}$ dan $\\vec{v} = 2\\hat{i} + 5\\hat{j}$. Nilai perkalian skalar $(\\vec{u} \\cdot \\vec{v})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-26$",
      "$-14$",
      "$-6$",
      "$14$",
      "$26$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Perkalian Skalar (Dot Product) Dua Vektor:</strong><br>\n          $$\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Identifikasi komponen: $u_x = 3, u_y = -4$ dan $v_x = 2, v_y = 5$.</li>\n          <li>Hitung perkalian skalar:\n            $$\\vec{u} \\cdot \\vec{v} = (3)(2) + (-4)(5) = 6 - 20 = -14$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Hasil kali skalar (dot product) berupa bilangan skalar real, bukan vektor. Perhatikan tanda negatif pada komponen $u_y = -4$.\n        </div>\n      "
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perkalian Titik (Dot Product)",
    "subTopic": "Perkalian Titik (Dot Product)",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-vektor",
    "subTopicSlug": "perkalian-titik-dot-product"
  },
  {
    "id": "sedang-mtk-04",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-vektor-dot",
    "category": "Perkalian Skalar & Sudut Vektor",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Diketahui vektor $\\vec{u} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$ dan vektor $\\vec{v} = \\hat{i} + \\hat{j}$. Besar sudut $\\theta$ yang dibentuk oleh vektor $\\vec{u}$ dan $\\vec{v}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$",
      "$\\arccos\\left(\\frac{1}{3\\sqrt{2}}\\right)$"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Rumus Kosinus Sudut Dua Vektor:</strong><br>\n          $$\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung dot product $\\vec{u} \\cdot \\vec{v}$:\n            $$\\vec{u} \\cdot \\vec{v} = (2)(1) + (-1)(1) + (2)(0) = 2 - 1 + 0 = 1$$\n          </li>\n          <li>Hitung panjang masing-masing vektor:\n            $$|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$$\n            $$|\\vec{v}| = \\sqrt{1^2 + 1^2 + 0^2} = \\sqrt{2}$$\n          </li>\n          <li>Hitung kosinus sudut $\\theta$:\n            $$\\cos\\theta = \\frac{1}{3\\sqrt{2}}$$\n            $$\\theta = \\arccos\\left(\\frac{1}{3\\sqrt{2}}\\right)$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan bahwa komponen $\\hat{k}$ pada vektor $\\vec{v}$ adalah nol karena hanya ditulis $\\hat{i} + \\hat{j}$.\n        </div>\n      "
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perkalian Titik (Dot Product)",
    "subTopic": "Perkalian Titik (Dot Product)",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-vektor",
    "subTopicSlug": "perkalian-titik-dot-product"
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
