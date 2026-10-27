/**
 * Batch Task: TASK_mat-geo-trans-luas_EASY
 * SubTopic: Transformasi Geometri: Luas Daerah Hasil Transformasi (mat-geo-trans-luas)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-trans-luas-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-luas",
    category: "Luas Bayangan oleh Matriks Diagonal",
    difficulty: "mudah",
    statement: "Suatu segitiga memiliki luas $15\\text{ cm}^2$. Segitiga tersebut ditransformasikan oleh matriks $M = \\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$. Luas daerah segitiga bayangannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$45\\text{ cm}^2$",
      "$75\\text{ cm}^2$",
      "$90\\text{ cm}^2$",
      "$120\\text{ cm}^2$",
      "$180\\text{ cm}^2$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Luas bayangan suatu bangun datar oleh matriks transformasi $M$ berukuran $2 \\times 2$ berbanding lurus dengan nilai mutlak determinan matriks tersebut: $L' = |\\det(M)| \\times L$.",
      steps: "1. Hitung determinan matriks $M = \\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$:\n$$\\det(M) = (3)(2) - (0)(0) = 6$$\n2. Hitung luas bangun bayangan:\n$$L' = |\\det(M)| \\times L = 6 \\times 15 = 90\\text{ cm}^2$$\n3. Jadi, luas segitiga bayangannya adalah $90\\text{ cm}^2$ (pilihan C).",
      pitfalls: "Hanya mengalikan luas dengan jumlah elemen diagonal $3 + 2 = 5$ yang menghasilkan $75\\text{ cm}^2$."
    }
  },
  {
    id: "mat-geo-trans-luas-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-luas",
    category: "Luas Bangun Datar oleh Transformasi Isometri",
    difficulty: "mudah",
    statement: "Persegi panjang dengan panjang $8\\text{ cm}$ dan lebar $5\\text{ cm}$ diputar sebesar $90^\\circ$ terhadap pusat $O(0, 0)$ kemudian dicerminkan terhadap garis $y = x$. Luas bangun bayangan akhir tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$20\\text{ cm}^2$",
      "$40\\text{ cm}^2$",
      "$80\\text{ cm}^2$",
      "$160\\text{ cm}^2$",
      "$200\\text{ cm}^2$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Rotasi dan refleksi merupakan transformasi isometri (mempertahankan jarak dan sudut). Nilai mutlak determinan matriks transformasi isometri selalu bernilai 1 ($|\\det(M)| = 1$), sehingga luas bangun bayangan tidak berubah ($L' = L$).",
      steps: "1. Hitung luas persegi panjang mula-mula:\n$$L = p \\times l = 8 \\times 5 = 40\\text{ cm}^2$$\n2. Karena rotasi dan refleksi bersifat isometri:\n$$|\\det(R_{90^\\circ})| = 1$$\n$$|\\det(M_{y=x})| = |-1| = 1$$\n3. Luas bayangan akhir adalah:\n$$L' = 1 \\times 1 \\times 40 = 40\\text{ cm}^2$$\n4. Jadi, jawabannya adalah $40\\text{ cm}^2$ (pilihan B).",
      pitfalls: "Mengira bahwa perputaran atau pembalikan koordinat mengubah besaran ukuran luas bangun."
    }
  },
  {
    id: "mat-geo-trans-luas-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-luas",
    category: "Luas Segitiga oleh Dilatasi",
    difficulty: "mudah",
    statement: "Segitiga $ABC$ mempunyai luas awal $12\\text{ cm}^2$. Jika segitiga tersebut didilatasikan dengan faktor skala $k = 3$, maka luas segitiga bayangannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$36\\text{ cm}^2$",
      "$48\\text{ cm}^2$",
      "$72\\text{ cm}^2$",
      "$108\\text{ cm}^2$",
      "$144\\text{ cm}^2$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Pada dilatasi dengan faktor skala $k$, luas bangun bayangan bertambah sebanding dengan kuadrat faktor skalanya: $L' = k^2 \\times L$.",
      steps: "1. Identifikasi luas awal $L = 12\\text{ cm}^2$ dan faktor skala $k = 3$.\n2. Hitung luas bayangan:\n$$L' = k^2 \\times L = 3^2 \\times 12 = 9 \\times 12 = 108\\text{ cm}^2$$\n3. Jadi, luas segitiga bayangannya adalah $108\\text{ cm}^2$ (pilihan D).",
      pitfalls: "Hanya mengalikan luas dengan $k$ secara linear ($3 \\times 12 = 36\\text{ cm}^2$) tanpa mengkuadratkannya."
    }
  },
  {
    id: "mat-geo-trans-luas-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-luas",
    category: "Luas Jajaran Genjang oleh Matriks Transformasi",
    difficulty: "mudah",
    statement: "Jajaran genjang dengan luas $20\\text{ cm}^2$ ditransformasikan oleh matriks $M = \\begin{pmatrix} 2 & 1 \\\\ 4 & 5 \\end{pmatrix}$. Luas jajaran genjang bayangannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$60\\text{ cm}^2$",
      "$80\\text{ cm}^2$",
      "$100\\text{ cm}^2$",
      "$120\\text{ cm}^2$",
      "$200\\text{ cm}^2$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Faktor pengali luas bangun datar oleh transformasi matriks ditentukan oleh determinan matriksnya: $L' = |ad - bc| \\times L$.",
      steps: "1. Hitung determinan matriks $M$:\n$$\\det(M) = ad - bc = (2)(5) - (1)(4) = 10 - 4 = 6$$\n2. Hitung luas bayangan bangun:\n$$L' = |\\det(M)| \\times L = 6 \\times 20 = 120\\text{ cm}^2$$\n3. Jadi, luas jajaran genjang bayangannya adalah $120\\text{ cm}^2$ (pilihan D).",
      pitfalls: "Salah menghitung determinan matriks, misalnya menjumlahkan $10 + 4 = 14$ alih-alih mengurangkannya."
    }
  },
  {
    id: "mat-geo-trans-luas-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-luas",
    category: "Luas Lingkaran Akibat Dilatasi",
    difficulty: "mudah",
    statement: "Suatu lingkaran memiliki luas awal $16\\pi\\text{ cm}^2$. Lingkaran tersebut didilatasikan dengan pusat $O(0, 0)$ dan faktor skala $k = \\frac{1}{2}$. Luas lingkaran bayangannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\pi\\text{ cm}^2$",
      "$4\\pi\\text{ cm}^2$",
      "$8\\pi\\text{ cm}^2$",
      "$16\\pi\\text{ cm}^2$",
      "$32\\pi\\text{ cm}^2$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pada lingkaran yang mengalami dilatasi dengan faktor skala $k$, luas bayangannya memenuhi rumus $L' = k^2 \\times L$.",
      steps: "1. Luas awal lingkaran adalah $L = 16\\pi\\text{ cm}^2$.\n2. Faktor skala adalah $k = \\frac{1}{2}$.\n3. Hitung luas lingkaran bayangan:\n$$L' = \\left(\\frac{1}{2}\\right)^2 \\times 16\\pi = \\frac{1}{4} \\times 16\\pi = 4\\pi\\text{ cm}^2$$\n4. Jadi, luas bayangan lingkaran tersebut adalah $4\\pi\\text{ cm}^2$ (pilihan B).",
      pitfalls: "Membagi luas hanya dengan 2 sehingga memperoleh $8\\pi\\text{ cm}^2$ bukannya membagi dengan kuadrat faktor skala ($4$)."
    }
  }
];
