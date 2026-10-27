/**
 * Batch Task: TASK_mat-geo-trans-dilatasi_MEDIUM
 * SubTopic: Transformasi Geometri: Dilatasi (mat-geo-trans-dilatasi)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-geo-trans-dilatasi-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-dilatasi",
    category: "Dilatasi Parabola terhadap Titik Asal O(0, 0)",
    difficulty: "sedang",
    statement: "Kurva parabola dengan persamaan $y = x^2 - 2x + 3$ didilatasikan dengan pusat $O(0, 0)$ dan faktor skala $k = 2$. Persamaan kurva bayangannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$y = 2x^2 - 4x + 6$",
      "$y = \\frac{1}{2}x^2 - 2x + 6$",
      "$y = \\frac{1}{2}x^2 - x + 3$",
      "$y = \\frac{1}{4}x^2 - 2x + 6$",
      "$y = \\frac{1}{2}x^2 - 4x + 12$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Dilatasi kurva $[O, k]$ dilakukan dengan mensubstitusi variabel asal $x = \\frac{x'}{k}$ dan $y = \\frac{y'}{k}$ ke dalam persamaan kurva.",
      steps: "1. Tentukan hubungan koordinat untuk faktor skala $k = 2$:\n$$x = \\frac{x'}{2}$$\n$$y = \\frac{y'}{2}$$\n2. Substitusikan ke persamaan parabola $y = x^2 - 2x + 3$:\n$$\\frac{y'}{2} = \\left(\\frac{x'}{2}\\right)^2 - 2\\left(\\frac{x'}{2}\\right) + 3$$\n$$\\frac{y'}{2} = \\frac{x'^2}{4} - x' + 3$$\n3. Kalikan seluruh ruas dengan $2$ untuk memperoleh $y'$:\n$$y' = 2\\left(\\frac{x'^2}{4} - x' + 3\\right)$$\n$$y' = \\frac{1}{2}x'^2 - 2x' + 6$$\n4. Diperoleh persamaan bayangannya adalah $y = \\frac{1}{2}x^2 - 2x + 6$ (pilihan B).",
      pitfalls: "Langsung mengalikan fungsi kuadrat dengan $k=2$ sehingga mendapatkan $y = 2x^2 - 4x + 6$."
    }
  },
  {
    id: "mat-geo-trans-dilatasi-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-dilatasi",
    category: "Dilatasi Lingkaran terhadap Pusat P(a, b)",
    difficulty: "sedang",
    statement: "Lingkaran $L: (x - 1)^2 + (y + 3)^2 = 4$ didilatasikan terhadap pusat $P(-2, 1)$ dengan faktor skala $k = 3$. Persamaan lingkaran bayangannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(x - 7)^2 + (y + 11)^2 = 12$",
      "$(x - 7)^2 + (y + 11)^2 = 36$",
      "$(x + 7)^2 + (y - 11)^2 = 36$",
      "$(x - 3)^2 + (y + 9)^2 = 36$",
      "$(x - 7)^2 + (y + 11)^2 = 18$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Dilatasi lingkaran $[P(a, b), k]$ memperbesar jari-jari menurut $r' = |k| \\cdot r$ dan memetakan pusat lingkaran $(x_c, y_c)$ menurut rumus dilatasi terhadap titik pusat: $x_c' = a + k(x_c - a)$ dan $y_c' = b + k(y_c - b)$.",
      steps: "1. Dari persamaan awal, pusat lingkaran awal adalah $C(1, -3)$ dan jari-jari $r = 2$.\n2. Hitung jari-jari lingkaran bayangan dengan $k = 3$:\n$$r' = 3 \\times 2 = 6 \\implies (r')^2 = 36$$\n3. Hitung bayangan titik pusat lingkaran dengan pusat dilatasi $P(-2, 1)$:\n$$x_c' = -2 + 3(1 - (-2)) = -2 + 3(3) = 7$$\n$$y_c' = 1 + 3(-3 - 1) = 1 + 3(-4) = -11$$\nPusat baru adalah $C'(7, -11)$.\n4. Bentuk persamaan lingkaran bayangan:\n$$(x - 7)^2 + (y - (-11))^2 = 36$$\n$$(x - 7)^2 + (y + 11)^2 = 36$$\n5. Jadi, persamaan lingkaran bayangan adalah $(x - 7)^2 + (y + 11)^2 = 36$ (pilihan B).",
      pitfalls: "Hanya mengalikan $r^2$ dengan $k$ (menghasilkan $4 \\times 3 = 12$) bukannya mengalikan dengan $k^2$ ($4 \\times 9 = 36$)."
    }
  },
  {
    id: "mat-geo-trans-dilatasi-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-dilatasi",
    category: "Dilatasi Garis terhadap Titik Pusat Bukan Titik Asal",
    difficulty: "sedang",
    statement: "Garis $g: 3x - 2y + 4 = 0$ didilatasikan terhadap pusat $P(1, 2)$ dengan faktor skala $k = -2$. Persamaan garis bayangannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3x - 2y + 5 = 0$",
      "$3x - 2y - 8 = 0$",
      "$3x - 2y - 5 = 0$",
      "$3x + 2y - 5 = 0$",
      "$2x - 3y - 5 = 0$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Dilatasi garis menghasilkan garis baru yang sejajar dengan garis asal. Hubungan koordinat asal dan bayangan terhadap pusat $P(a, b)$ adalah $x = a + \\frac{x' - a}{k}$ dan $y = b + \\frac{y' - b}{k}$.",
      steps: "1. Nyatakan $x$ dan $y$ dalam koordinat bayangan dengan pusat $(1, 2)$ dan $k = -2$:\n$$x = 1 + \\frac{x' - 1}{-2} = 1 - \\frac{1}{2}(x' - 1) = \\frac{3 - x'}{2}$$\n$$y = 2 + \\frac{y' - 2}{-2} = 2 - \\frac{1}{2}(y' - 2) = \\frac{6 - y'}{2}$$\n2. Substitusikan ke dalam persamaan garis $3x - 2y + 4 = 0$:\n$$3\\left(\\frac{3 - x'}{2}\\right) - 2\\left(\\frac{6 - y'}{2}\\right) + 4 = 0$$\n3. Kalikan seluruh suku dengan $2$:\n$$3(3 - x') - 2(6 - y') + 8 = 0$$\n$$9 - 3x' - 12 + 2y' + 8 = 0$$\n$$-3x' + 2y' + 5 = 0$$\n4. Kalikan kedua ruas dengan $-1$:\n$$3x' - 2y' - 5 = 0$$\n5. Jadi, persamaan garis bayangannya adalah $3x - 2y - 5 = 0$ (pilihan C).",
      pitfalls: "Lupa bahwa pusat dilatasi bukan titik asal $(0,0)$, sehingga konstanta garis menjadi salah jika hanya mengalikan suku $C$ dengan $k$."
    }
  },
  {
    id: "mat-geo-trans-dilatasi-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-dilatasi",
    category: "Komposisi Dua Dilatasi Sepusat",
    difficulty: "sedang",
    statement: "Titik $Q(8, -4)$ didilatasikan berturut-turut oleh $[P(2, 0), k_1 = \\frac{1}{2}]$ kemudian $[P(2, 0), k_2 = -3]$. Koordinat bayangan akhir titik $Q$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-7, 6)$",
      "$(7, -6)$",
      "$(-7, -6)$",
      "$(-9, 6)$",
      "$(-5, 4)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Komposisi dua dilatasi berturut-turut dengan titik pusat yang sama ekuivalen dengan sebuah dilatasi tunggal berpusat di titik yang sama dengan faktor skala perkalian: $k_{\\text{total}} = k_1 \\times k_2$.",
      steps: "1. Hitung faktor skala gabungan:\n$$k_{\\text{total}} = \\frac{1}{2} \\times (-3) = -\\frac{3}{2}$$\n2. Terapkan dilatasi tunggal $[P(2, 0), -\\frac{3}{2}]$ pada titik $Q(8, -4)$:\n$$x'' = a + k_{\\text{total}}(x - a) = 2 + \\left(-\\frac{3}{2}\\right)(8 - 2) = 2 + \\left(-\\frac{3}{2}\\right)(6) = 2 - 9 = -7$$\n$$y'' = b + k_{\\text{total}}(y - b) = 0 + \\left(-\\frac{3}{2}\\right)(-4 - 0) = 0 + 6 = 6$$\n3. Koordinat bayangan akhir adalah $Q'(-7, 6)$.\n4. Jadi, jawabannya adalah $(-7, 6)$ (pilihan A).",
      pitfalls: "Menjumlahkan kedua faktor skala $k_1 + k_2$ layaknya komposisi translasi atau rotasi, padahal sifat faktor skala dilatasi adalah perkalian ($k_1 \\times k_2$)."
    }
  },
  {
    id: "mat-geo-trans-dilatasi-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-dilatasi",
    category: "Perubahan Keliling dan Luas Bangun Datar Akibat Dilatasi",
    difficulty: "sedang",
    statement: "Segitiga siku-siku memiliki titik-titik sudut $A(1, 1)$, $B(7, 1)$, dan $C(1, 9)$. Segitiga tersebut didilatasikan dengan faktor skala $k = -\\frac{3}{2}$. Jika keliling segitiga bayangannya adalah $K'$ dan luas bayangannya adalah $L'$, maka nilai dari $K' + L'$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$72$",
      "$84$",
      "$90$",
      "$96$",
      "$108$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Dilatasi dengan faktor skala $k$ mengubah besaran panjang dan keliling sebanding dengan $|k|$, sedangkan luas bangun datar berubah sebanding dengan kuadrat faktor skala ($k^2$).",
      steps: "1. Hitung panjang sisi-sisi segitiga siku-siku awal $ABC$:\nPanjang sisi alas $AB = 7 - 1 = 6$.\nPanjang sisi tinggi $AC = 9 - 1 = 8$.\nPanjang sisi miring $BC = \\sqrt{6^2 + 8^2} = 10$.\n2. Hitung keliling dan luas mula-mula:\n$$K = 6 + 8 + 10 = 24$$\n$$L = \\frac{1}{2} \\times 6 \\times 8 = 24$$\n3. Hitung keliling dan luas bayangan setelah dilatasi $k = -\\frac{3}{2}$:\n$$K' = |k| \\times K = \\left|-\\frac{3}{2}\\right| \\times 24 = \\frac{3}{2} \\times 24 = 36$$\n$$L' = k^2 \\times L = \\left(-\\frac{3}{2}\\right)^2 \\times 24 = \\frac{9}{4} \\times 24 = 54$$\n4. Hitung nilai $K' + L'$:\n$$K' + L' = 36 + 54 = 90$$\n5. Jadi, nilai $K' + L'$ adalah $90$ (pilihan C).",
      pitfalls: "Memasukkan nilai faktor skala negatif ke perhitungan keliling (menghasilkan keliling negatif) atau tidak mengkuadratkan faktor skala saat menghitung luas bayangan."
    }
  }
];
