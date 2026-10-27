/**
 * Batch Task: TASK_mat-geo-trans-luas_MEDIUM
 * SubTopic: Transformasi Geometri: Luas Daerah Hasil Transformasi (mat-geo-trans-luas)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-geo-trans-luas-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-luas",
    category: "Luas Segitiga Berkoordinat Ditransformasikan oleh Matriks",
    difficulty: "sedang",
    statement: "Diketahui segitiga $ABC$ memiliki titik-titik sudut $A(0, 0)$, $B(4, 1)$, dan $C(2, 5)$. Segitiga tersebut ditransformasikan oleh matriks $M = \\begin{pmatrix} 3 & 1 \\\\ -2 & 4 \\end{pmatrix}$. Luas daerah segitiga bayangannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$98\\text{ satuan luas}$",
      "$112\\text{ satuan luas}$",
      "$126\\text{ satuan luas}$",
      "$144\\text{ satuan luas}$",
      "$252\\text{ satuan luas}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Luas segitiga dengan salah satu titik sudut di titik asal $(0, 0)$ dan dua titik lainnya $(x_1, y_1)$ serta $(x_2, y_2)$ adalah $L = \\frac{1}{2}|x_1 y_2 - x_2 y_1|$. Luas bayangannya setelah transformasi matriks $M$ adalah $L' = |\\det(M)| \\times L$.",
      steps: "1. Hitung luas segitiga $ABC$ awal dengan $B(4, 1)$ dan $C(2, 5)$:\n$$L = \\frac{1}{2}|4(5) - 2(1)| = \\frac{1}{2}|20 - 2| = \\frac{1}{2}(18) = 9\\text{ satuan luas}$$\n2. Hitung determinan matriks $M$:\n$$\\det(M) = 3(4) - 1(-2) = 12 + 2 = 14$$\n3. Hitung luas segitiga bayangan:\n$$L' = |\\det(M)| \\times L = 14 \\times 9 = 126\\text{ satuan luas}$$\n4. Jadi, luas segitiga bayangannya adalah $126\\text{ satuan luas}$ (pilihan C).",
      pitfalls: "Lupa membagi 2 pada luas segitiga awal sehingga memperoleh hasil dua kali lipat yaitu $252\\text{ satuan luas}$."
    }
  },
  {
    id: "mat-geo-trans-luas-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-luas",
    category: "Luas Bayangan Komposisi Dua Matriks Transformasi",
    difficulty: "sedang",
    statement: "Sebuah bangun datar dengan luas $8\\text{ satuan luas}$ ditransformasikan berturut-turut oleh matriks $M_1 = \\begin{pmatrix} 2 & -1 \\\\ 3 & 1 \\end{pmatrix}$ dan $M_2 = \\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}$. Luas daerah bayangan akhir bangun tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$120\\text{ satuan luas}$",
      "$200\\text{ satuan luas}$",
      "$320\\text{ satuan luas}$",
      "$400\\text{ satuan luas}$",
      "$480\\text{ satuan luas}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Pada komposisi dua transformasi matriks berurutan $M_1$ dan $M_2$, determinan matriks total adalah perkalian determinan masing-masing: $\\det(M_2 M_1) = \\det(M_2) \\times \\det(M_1)$. Luas bayangan akhir adalah $L' = |\\det(M_2)| \\times |\\det(M_1)| \\times L$.",
      steps: "1. Hitung determinan matriks pertama $M_1$:\n$$\\det(M_1) = 2(1) - (-1)(3) = 2 + 3 = 5$$\n2. Hitung determinan matriks kedua $M_2$:\n$$\\det(M_2) = 4(3) - 2(1) = 12 - 2 = 10$$\n3. Hitung luas bayangan akhir:\n$$L' = |\\det(M_2)| \\times |\\det(M_1)| \\times L = 10 \\times 5 \\times 8 = 400\\text{ satuan luas}$$\n4. Jadi, luas bayangan akhirnya adalah $400\\text{ satuan luas}$ (pilihan D).",
      pitfalls: "Menjumlahkan nilai determinan matriks $(10 + 5) \\times 8 = 120$ alih-alih mengalikannya."
    }
  },
  {
    id: "mat-geo-trans-luas-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-luas",
    category: "Luas Bayangan Elips oleh Matriks Transformasi",
    difficulty: "sedang",
    statement: "Daerah yang dibatasi oleh elips $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ ditransformasikan oleh matriks $M = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$. Luas daerah kurva bayangannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$12\\pi\\text{ satuan luas}$",
      "$18\\pi\\text{ satuan luas}$",
      "$24\\pi\\text{ satuan luas}$",
      "$36\\pi\\text{ satuan luas}$",
      "$72\\pi\\text{ satuan luas}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Luas daerah elips $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ adalah $L = \\pi a b$. Luas daerah setelah transformasi matriks $M$ menjadi $L' = |\\det(M)| \\times L$.",
      steps: "1. Tentukan semi-sumbu panjang dan pendek dari elips awal:\n$$a^2 = 9 \\implies a = 3$$\n$$b^2 = 4 \\implies b = 2$$\n2. Hitung luas elips awal:\n$$L = \\pi \\times a \\times b = \\pi \\times 3 \\times 2 = 6\\pi\\text{ satuan luas}$$\n3. Hitung determinan matriks $M$:\n$$\\det(M) = 2(3) - 1(0) = 6$$\n4. Hitung luas daerah elips bayangan:\n$$L' = |\\det(M)| \\times L = 6 \\times 6\\pi = 36\\pi\\text{ satuan luas}$$\n5. Jadi, luas daerah elips bayangan adalah $36\\pi\\text{ satuan luas}$ (pilihan D).",
      pitfalls: "Menggunakan $a^2$ dan $b^2$ langsung dalam rumus luas elips sehingga menghitung $\\pi \\times 9 \\times 4 = 36\\pi$ sebagai luas awal."
    }
  },
  {
    id: "mat-geo-trans-luas-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-luas",
    category: "Menentukan Nilai Parameter dari Perubahan Luas Daerah",
    difficulty: "sedang",
    statement: "Suatu bangun datar dengan luas $10\\text{ satuan luas}$ ditransformasikan oleh matriks $M = \\begin{pmatrix} x & 3 \\\\ 2 & x \\end{pmatrix}$ dengan $x > 0$. Jika luas daerah bayangannya adalah $30\\text{ satuan luas}$, maka nilai $x$ adalah ....",
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
    correctIndex: 2,
    solution: {
      concept: "Hubungan perubahan luas dinyatakan oleh $|\\det(M)| = \\frac{L'}{L}$. Selesaikan nilai mutlak determinan matriks untuk memperoleh nilai parameter $x$.",
      steps: "1. Gunakan rasio luas:\n$$|\\det(M)| = \\frac{L'}{L} = \\frac{30}{10} = 3$$\n2. Hitung ekspresi determinan matriks $M$:\n$$\\det(M) = (x)(x) - (3)(2) = x^2 - 6$$\n3. Selesaikan persamaan nilai mutlak $|x^2 - 6| = 3$:\n$$x^2 - 6 = 3 \\implies x^2 = 9 \\implies x = 3 \\text{ (karena } x > 0)$$\n(Untuk kasus $x^2 - 6 = -3 \\implies x^2 = 3 \\implies x = \\sqrt{3}$)\n4. Dari pilihan jawaban yang tersedia, nilai $x$ yang memenuhi adalah $3$ (pilihan C).",
      pitfalls: "Lupa bahwa determinan matriks dapat bernilai negatif di dalam tanda mutlak atau salah mengurangkan suku determinan."
    }
  },
  {
    id: "mat-geo-trans-luas-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-luas",
    category: "Luas Segitiga oleh Komposisi Refleksi dan Dilatasi",
    difficulty: "sedang",
    statement: "Segitiga $PQR$ dengan koordinat $P(1, 2)$, $Q(5, 2)$, dan $R(3, 8)$ dicerminkan terhadap garis $y = -x$ kemudian didilatasikan dengan pusat $O(0, 0)$ dan faktor skala $k = -2$. Luas daerah segitiga bayangan akhirnya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$24\\text{ satuan luas}$",
      "$36\\text{ satuan luas}$",
      "$48\\text{ satuan luas}$",
      "$72\\text{ satuan luas}$",
      "$96\\text{ satuan luas}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Refleksi merupakan transformasi isometri yang mempertahankan luas awal bangun datar (pengali luas = 1). Dilatasi dengan faktor skala $k$ melipatgandakan luas sebesar kuadrat faktor skalanya ($k^2$).",
      steps: "1. Hitung luas segitiga mula-mula $PQR$:\nAlas $PQ$ horizontal pada garis $y = 2$, dengan panjang $a = 5 - 1 = 4$.\nTinggi segitiga diukur dari garis $y = 2$ ke puncak $R(3, 8)$ adalah $t = 8 - 2 = 6$.\n$$L = \\frac{1}{2} \\times a \\times t = \\frac{1}{2} \\times 4 \\times 6 = 12\\text{ satuan luas}$$\n2. Pengaruh transformasi terhadap luas:\n- Refleksi terhadap garis $y = -x$: pengali luas $= 1$.\n- Dilatasi $k = -2$: pengali luas $= k^2 = (-2)^2 = 4$.\n3. Hitung luas bayangan akhir:\n$$L' = 1 \\times 4 \\times 12 = 48\\text{ satuan luas}$$\n4. Jadi, luas segitiga bayangan akhir adalah $48\\text{ satuan luas}$ (pilihan C).",
      pitfalls: "Memasukkan nilai faktor skala secara linear ($|-2| \\times 12 = 24$) bukannya mengkuadratkan faktor skala dilatasi."
    }
  }
];
