/**
 * Batch Task: TASK_mat-geo-vektor-dot_MEDIUM
 * SubTopic: Perkalian Titik Vektor (mat-geo-vektor-dot)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-geo-vektor-dot-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-dot",
    category: "Kondisi Sudut Tumpul Antara Dua Vektor",
    difficulty: "sedang",
    statement: "Nilai batas konstanta $m$ agar sudut yang dibentuk oleh vektor $\\vec{a} = m\\hat{i} + 2\\hat{j} - \\hat{k}$ dan vektor $\\vec{b} = 2\\hat{i} - 3\\hat{j} + 4\\hat{k}$ merupakan sudut tumpul adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$m < 5$",
      "$m > 5$",
      "$m \\le 5$",
      "$m < -5$",
      "$-5 < m < 5$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Sudut antara dua vektor $\\theta$ merupakan sudut tumpul ($90^\\circ < \\theta \\le 180^\\circ$) jika dan hanya jika nilai kosinusnya negatif, yang berarti hasil perkalian skalar keduanya bernilai negatif tegas: $\\vec{a} \\cdot \\vec{b} < 0$.",
      steps: "1. Hitung perkalian skalar $\\vec{a} \\cdot \\vec{b}$:\n$$\\vec{a} \\cdot \\vec{b} = (m)(2) + (2)(-3) + (-1)(4) = 2m - 6 - 4 = 2m - 10$$\n2. Terapkan syarat sudut tumpul:\n$$2m - 10 < 0$$\n3. Selesaikan pertidaksamaan linier:\n$$2m < 10 \\implies m < 5$$\n4. Jadi, nilai konstanta $m$ yang memenuhi adalah $m < 5$ (pilihan A).",
      pitfalls: "Menyertakan tanda sama dengan ($m \\le 5$), padahal pada saat $m = 5$ perkalian titik bernilai nol yang membentuk sudut siku-siku ($90^\\circ$), bukan sudut tumpul."
    }
  },
  {
    id: "mat-geo-vektor-dot-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-dot",
    category: "Kuadrat Panjang Kombinasi Vektor Linier",
    difficulty: "sedang",
    statement: "Diketahui dua buah vektor $\\vec{u}$ dan $\\vec{v}$ memiliki panjang $|\\vec{u}| = 4$ dan $|\\vec{v}| = 5$, serta hasil perkalian titik $\\vec{u} \\cdot \\vec{v} = 6$. Nilai dari $|2\\vec{u} - 3\\vec{v}|^2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "217",
      "289",
      "145",
      "361",
      "181"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kuadrat panjang kombinasi linier vektor diuraikan dengan sifat distributif perkalian titik: $|c_1\\vec{u} + c_2\\vec{v}|^2 = c_1^2|\\vec{u}|^2 + 2c_1 c_2(\\vec{u} \\cdot \\vec{v}) + c_2^2|\\vec{v}|^2$.",
      steps: "1. Uraikan bentuk kuadrat norma:\n$$|2\\vec{u} - 3\\vec{v}|^2 = 4|\\vec{u}|^2 - 12(\\vec{u} \\cdot \\vec{v}) + 9|\\vec{v}|^2$$\n2. Masukkan nilai $|\\vec{u}| = 4$, $|\\vec{v}| = 5$, dan $\\vec{u} \\cdot \\vec{v} = 6$:\n$$|2\\vec{u} - 3\\vec{v}|^2 = 4(4^2) - 12(6) + 9(5^2)$$\n3. Hitung hasil perkalian masing-masing suku:\n$$= 4(16) - 72 + 9(25)$$\n$$= 64 - 72 + 225$$\n4. Selesaikan penjumlahan:\n$$= -8 + 225 = 217$$\n5. Jadi, nilai $|2\\vec{u} - 3\\vec{v}|^2$ adalah 217 (pilihan A).",
      pitfalls: "Lupa menyertakan suku silang $-12(\\vec{u} \\cdot \\vec{v})$ dan hanya menguadratkan suku pertama dan terakhir $64 + 225 = 289$."
    }
  },
  {
    id: "mat-geo-vektor-dot-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-dot",
    category: "Sudut Antara Dua Sisi Segitiga",
    difficulty: "sedang",
    statement: "Pada segitiga $ABC$ di ruang dimensi tiga, koordinat titik sudutnya adalah $A(1, 0, -1)$, $B(2, 1, 1)$, dan $C(1, 2, 1)$. Nilai dari $\\cos(\\angle BAC)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{2}\\sqrt{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\sqrt{2}$",
      "$\\frac{1}{3}\\sqrt{6}$",
      "$\\frac{2}{3}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Sudut $\\angle BAC$ dibentuk oleh dua vektor yang berpangkal di titik $A$, yaitu vektor $\\vec{AB}$ dan $\\vec{AC}$. Nilai kosinusnya dirumuskan sebagai $\\cos(\\angle BAC) = \\frac{\\vec{AB} \\cdot \\vec{AC}}{|\\vec{AB}||\\vec{AC}|}$.",
      steps: "1. Tentukan komponen vektor $\\vec{AB}$ dan $\\vec{AC}$:\n$$\\vec{AB} = (2 - 1)\\hat{i} + (1 - 0)\\hat{j} + (1 - (-1))\\hat{k} = \\hat{i} + \\hat{j} + 2\\hat{k}$$\n$$\\vec{AC} = (1 - 1)\\hat{i} + (2 - 0)\\hat{j} + (1 - (-1))\\hat{k} = 0\\hat{i} + 2\\hat{j} + 2\\hat{k}$$\n2. Hitung perkalian skalar $\\vec{AB} \\cdot \\vec{AC}$:\n$$\\vec{AB} \\cdot \\vec{AC} = (1)(0) + (1)(2) + (2)(2) = 0 + 2 + 4 = 6$$\n3. Hitung panjang masing-masing vektor:\n$$|\\vec{AB}| = \\sqrt{1^2 + 1^2 + 2^2} = \\sqrt{6}$$\n$$|\\vec{AC}| = \\sqrt{0^2 + 2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$$\n4. Hitung nilai kosinus sudut:\n$$\\cos(\\angle BAC) = \\frac{6}{\\sqrt{6} \\cdot 2\\sqrt{2}} = \\frac{6}{2\\sqrt{12}} = \\frac{3}{2\\sqrt{3}} = \\frac{3\\sqrt{3}}{6} = \\frac{1}{2}\\sqrt{3}$$\n5. Jadi, nilai $\\cos(\\angle BAC)$ adalah $\\frac{1}{2}\\sqrt{3}$ (pilihan A).",
      pitfalls: "Salah menentukan titik pangkal vektor, misalnya menggunakan $\\vec{BA}$ dan $\\vec{AC}$ yang arahnya tidak bersesuaian dengan sudut $\\angle BAC$."
    }
  },
  {
    id: "mat-geo-vektor-dot-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-dot",
    category: "Proyeksi Vektor Ortogonal",
    difficulty: "sedang",
    statement: "Proyeksi vektor ortogonal dari vektor $\\vec{a} = 2\\hat{i} + 4\\hat{j}$ pada arah vektor $\\vec{b} = 3\\hat{i} - \\hat{j}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{3}{5}\\hat{i} - \\frac{1}{5}\\hat{j}$",
      "$\\frac{6}{5}\\hat{i} - \\frac{2}{5}\\hat{j}$",
      "$\\frac{3}{10}\\hat{i} - \\frac{1}{10}\\hat{j}$",
      "$\\frac{1}{5}\\hat{i} + \\frac{2}{5}\\hat{j}$",
      "$\\hat{i} - \\frac{1}{3}\\hat{j}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Proyeksi vektor ortogonal dari vektor $\\vec{a}$ pada vektor $\\vec{b}$ menghasilkan besaran vektor yang searah dengan vektor $\\vec{b}$, dirumuskan sebagai $\\vec{p} = \\left(\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2}\\right)\\vec{b}$.",
      steps: "1. Hitung perkalian skalar $\\vec{a} \\cdot \\vec{b}$:\n$$\\vec{a} \\cdot \\vec{b} = (2)(3) + (4)(-1) = 6 - 4 = 2$$\n2. Hitung kuadrat panjang vektor landasan $|\\vec{b}|^2$:\n$$|\\vec{b}|^2 = 3^2 + (-1)^2 = 9 + 1 = 10$$\n3. Hitung faktor pengali skalar:\n$$\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} = \\frac{2}{10} = \\frac{1}{5}$$\n4. Kalikan faktor skalar tersebut ke vektor $\\vec{b}$:\n$$\\vec{p} = \\frac{1}{5}(3\\hat{i} - \\hat{j}) = \\frac{3}{5}\\hat{i} - \\frac{1}{5}\\hat{j}$$\n5. Jadi, proyeksi vektor ortogonalnya adalah $\\frac{3}{5}\\hat{i} - \\frac{1}{5}\\hat{j}$ (pilihan A).",
      pitfalls: "Membagi dengan panjang vektor $|\\vec{b}|$ bukan kuadratnya $|\\vec{b}|^2$, sehingga menghasilkan vektor dengan panjang yang tidak sesuai rumus proyeksi vektor."
    }
  },
  {
    id: "mat-geo-vektor-dot-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-dot",
    category: "Identitas Selisih Kuadrat Norma Vektor",
    difficulty: "sedang",
    statement: "Diketahui dua buah vektor $\\vec{a}$ dan $\\vec{b}$ memiliki panjang $|\\vec{a}| = 2$ dan $|\\vec{b}| = 3$, serta membentuk sudut $120^\\circ$. Nilai dari hasil kali titik $(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b})$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-5",
      "5",
      "-13",
      "13",
      "-7"
    ],
    correctIndex: 0,
    solution: {
      concept: "Berdasarkan sifat distributif perkalian titik, perkalian bentuk jumlah dan selisih dua vektor setara dengan selisih kuadrat panjang masing-masing vektor: $(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = |\\vec{a}|^2 - |\\vec{b}|^2$.",
      steps: "1. Uraikan bentuk perkalian titik menggunakan sifat distributif:\n$$(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = \\vec{a} \\cdot \\vec{a} - \\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{a} - \\vec{b} \\cdot \\vec{b}$$\n2. Karena perkalian skalar bersifat komutatif ($\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{a}$), maka kedua suku silang saling menghilangkan:\n$$(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = |\\vec{a}|^2 - |\\vec{b}|^2$$\n3. Masukkan nilai panjang $|\\vec{a}| = 2$ dan $|\\vec{b}| = 3$:\n$$= 2^2 - 3^2 = 4 - 9 = -5$$\n4. (Perhatikan bahwa nilai ini sepenuhnya independen terhadap besar sudut antara kedua vektor).\n5. Jadi, hasilnya adalah -5 (pilihan A).",
      pitfalls: "Terkecoh menghitung nilai sudut $120^\\circ$ secara rumit padahal suku silang saling meniadakan secara aljabar vektor."
    }
  }
];
