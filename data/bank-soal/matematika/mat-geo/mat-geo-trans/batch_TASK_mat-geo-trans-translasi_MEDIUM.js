/**
 * Batch Task: TASK_mat-geo-trans-translasi_MEDIUM
 * SubTopic: Transformasi Geometri: Translasi (mat-geo-trans-translasi)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-geo-trans-translasi-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-translasi",
    category: "Translasi Garis Lurus Berparameter",
    difficulty: "sedang",
    statement: "Persamaan garis $g: 3x - 4y + 12 = 0$ ditranslasikan oleh $T = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$. Jika persamaan bayangan garis tersebut dinyatakan dalam bentuk $g': 3x - 4y + c = 0$, maka nilai konstanta $c$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$22$",
      "$2$",
      "$-2$",
      "$-10$",
      "$10$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Jika sebuah kurva $F(x, y) = 0$ ditranslasikan oleh $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$, maka koordinat baru memenuhi $x' = x + a \\iff x = x' - a$ dan $y' = y + b \\iff y = y' - b$. Persamaan bayangannya diperoleh dengan mensubstitusikan $x$ dan $y$ ke persamaan asal: $F(x' - a, y' - b) = 0$.",
      steps: "1. Vektor translasi diberikan oleh $a = 2$ dan $b = -1$.\n2. Hubungan koordinat titik asal dan bayangan:\n$$x = x' - 2$$\n$$y = y' - (-1) = y' + 1$$\n3. Substitusikan $x$ dan $y$ ke dalam persamaan garis $g$:\n$$3(x' - 2) - 4(y' + 1) + 12 = 0$$\n4. Uraikan suku-sukunya:\n$$3x' - 6 - 4y' - 4 + 12 = 0$$\n$$3x' - 4y' + 2 = 0$$\n5. Persamaan bayangan garis adalah $3x - 4y + 2 = 0$, sehingga nilai $c = 2$ (pilihan B).",
      pitfalls: "Salah memasukkan substitusi translasi menjadi $x = x' + 2$ dan $y = y' - 1$, yang menghasilkan konstanta $c = 22$."
    }
  },
  {
    id: "mat-geo-trans-translasi-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-translasi",
    category: "Translasi Parabola / Fungsi Kuadrat",
    difficulty: "sedang",
    statement: "Kurva parabola $y = x^2 - 4x + 7$ digeser oleh vektor translasi $T = \\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$. Persamaan kurva bayangannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$y = x^2 - 10x + 26$",
      "$y = x^2 + 2x + 2$",
      "$y = x^2 + 2x + 6$",
      "$y = x^2 - 2x + 6$",
      "$y = x^2 + 6x + 8$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Translasi parabola oleh $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$ mengubah variabel $(x, y)$ menjadi $(x' - a, y' - b)$. Substitusikan bentuk ini ke persamaan parabola untuk mendapatkan kurva bayangan.",
      steps: "1. Tentukan relasi koordinat:\n$$x' = x - 3 \\iff x = x' + 3$$\n$$y' = y + 2 \\iff y = y' - 2$$\n2. Substitusikan ke persamaan parabola $y = x^2 - 4x + 7$:\n$$y' - 2 = (x' + 3)^2 - 4(x' + 3) + 7$$\n3. Ekspansi aljabar pada ruas kanan:\n$$y' - 2 = (x'^2 + 6x' + 9) - 4x' - 12 + 7$$\n$$y' - 2 = x'^2 + 2x' + 4$$\n4. Pindahkan konstanta $-2$ ke ruas kanan:\n$$y' = x'^2 + 2x' + 6$$\n5. Dengan demikian, persamaan bayangannya adalah $y = x^2 + 2x + 6$ (pilihan C).",
      pitfalls: "Keliru saat melakukan substitusi variabel, seperti memasukkan $(x - 3)$ ke fungsi kuadrat padahal $x = x' + 3$."
    }
  },
  {
    id: "mat-geo-trans-translasi-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-translasi",
    category: "Translasi Lingkaran",
    difficulty: "sedang",
    statement: "Lingkaran $L: x^2 + y^2 - 6x + 8y = 0$ ditranslasikan oleh $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$ sehingga persamaan lingkaran bayangannya berpusat tepat di titik asal $(0, 0)$. Vektor translasi $T$ tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$",
      "$\\begin{pmatrix} -3 \\\\ -4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 6 \\\\ -8 \\end{pmatrix}$",
      "$\\begin{pmatrix} -3 \\\\ 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} -6 \\\\ 8 \\end{pmatrix}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Translasi lingkaran cukup ditinjau melalui pergeseran titik pusatnya. Jika pusat lingkaran awal adalah $P(x_p, y_p)$ dan pusat bayangan adalah $P'(x_p', y_p')$, maka vektor translasi berlaku $T = \\begin{pmatrix} x_p' - x_p \\\\ y_p' - y_p \\end{pmatrix}$.",
      steps: "1. Tentukan titik pusat lingkaran $L: x^2 + y^2 - 6x + 8y = 0$:\n$$x_p = -\\frac{A}{2} = -\\frac{-6}{2} = 3$$\n$$y_p = -\\frac{B}{2} = -\\frac{8}{2} = -4$$\nJadi titik pusat awal adalah $P(3, -4)$.\n2. Diketahui pusat lingkaran bayangan adalah $P'(0, 0)$.\n3. Hitung komponen translasi:\n$$a = x_p' - x_p = 0 - 3 = -3$$\n$$b = y_p' - y_p = 0 - (-4) = 4$$\n4. Diperoleh vektor translasi $T = \\begin{pmatrix} -3 \\\\ 4 \\end{pmatrix}$ (pilihan D).",
      pitfalls: "Lupa tanda negatif saat menentukan pusat lingkaran dari bentuk umum $x^2 + y^2 + Ax + By + C = 0$, atau membalik urutan pengurangan pusat bayangan dengan pusat awal."
    }
  },
  {
    id: "mat-geo-trans-translasi-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-translasi",
    category: "Komposisi Translasi dengan Titik Puncak Parabola",
    difficulty: "sedang",
    statement: "Parabola dengan persamaan $y = 2x^2 + 8x + 3$ ditranslasikan berturut-turut oleh pergeseran $T_1 = \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$ dan $T_2 = \\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix}$. Koordinat titik puncak dari parabola bayangannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-4, -2)$",
      "$(-4, 1)$",
      "$(0, -2)$",
      "$(-2, -4)$",
      "$(2, -8)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Komposisi translasi berturut-turut $T_1$ dan $T_2$ setara dengan translasi tunggal $T = T_1 + T_2$. Titik puncak bayangan parabola diperoleh dari mentranslasikan titik puncak parabola mula-mula.",
      steps: "1. Tentukan titik puncak awal $P(x_p, y_p)$ dari $y = 2x^2 + 8x + 3$:\n$$x_p = -\\frac{b}{2a} = -\\frac{8}{2(2)} = -2$$\n$$y_p = 2(-2)^2 + 8(-2) + 3 = 8 - 16 + 3 = -5$$\nTitik puncak awal adalah $P(-2, -5)$.\n2. Jumlahkan kedua vektor translasi:\n$$T = T_1 + T_2 = \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix} + \\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$$\n3. Hitung koordinat puncak bayangan $P'(x_p', y_p')$:\n$$x_p' = -2 + (-2) = -4$$\n$$y_p' = -5 + 3 = -2$$\n4. Diperoleh koordinat titik puncak bayangannya adalah $(-4, -2)$ (pilihan A).",
      pitfalls: "Menguraikan persamaan parabola baru yang panjang terlebih dahulu padahal mencari bayangan titik puncak cukup mentranslasikan koordinat titik puncak awalnya langsung."
    }
  },
  {
    id: "mat-geo-trans-translasi-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-translasi",
    category: "Translasi Luas Bidang Segitiga",
    difficulty: "sedang",
    statement: "Segitiga $ABC$ memiliki titik-titik sudut $A(1, 1)$, $B(5, 1)$, dan $C(3, 7)$. Segitiga tersebut ditranslasikan oleh $T = \\begin{pmatrix} -4 \\\\ 5 \\end{pmatrix}$ menghasilkan segitiga bayangan $A'B'C'$. Jika koordinat titik berat segitiga $A'B'C'$ adalah $Z'(x_0, y_0)$ dan luas daerah segitiga $A'B'C'$ adalah $L$, maka nilai dari $x_0 + y_0 + L$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$15$",
      "$17$",
      "$19$",
      "$21$",
      "$23$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Translasi merupakan transformasi isometri (mempertahankan jarak dan sudut), sehingga luas bangun geometri bayangan tidak berubah ($L' = L$). Titik berat segitiga dengan titik-titik sudut $(x_i, y_i)$ adalah $Z\\left(\\frac{x_1+x_2+x_3}{3}, \\frac{y_1+y_2+y_3}{3}\\right)$ dan titik berat bayangan memenuhi $Z' = Z + T$.",
      steps: "1. Hitung luas segitiga $ABC$ mula-mula:\nAlas $AB$ terletak horizontal pada garis $y = 1$, dengan panjang $a = 5 - 1 = 4$.\nTinggi segitiga dari garis $y = 1$ menuju puncak $C(3, 7)$ adalah $t = 7 - 1 = 6$.\n$$L = \\frac{1}{2} \\times a \\times t = \\frac{1}{2} \\times 4 \\times 6 = 12$$\nKarena translasi bersifat isometri, maka luas bayangan segitiga tetap $L = 12$.\n2. Hitung titik berat segitiga asal $Z(x_z, y_z)$:\n$$x_z = \\frac{1 + 5 + 3}{3} = \\frac{9}{3} = 3$$\n$$y_z = \\frac{1 + 1 + 7}{3} = \\frac{9}{3} = 3$$\n3. Hitung koordinat titik berat bayangan $Z'(x_0, y_0)$ setelah translasi $T = \\begin{pmatrix} -4 \\\\ 5 \\end{pmatrix}$:\n$$x_0 = 3 + (-4) = -1$$\n$$y_0 = 3 + 5 = 8$$\n4. Hitung nilai yang ditanyakan:\n$$x_0 + y_0 + L = -1 + 8 + 12 = 19$$\n5. Jadi, nilai $x_0 + y_0 + L$ adalah $19$ (pilihan C).",
      pitfalls: "Beranggapan bahwa luas bangun geometri ikut membesar atau mengecil akibat translasi, padahal translasi tidak mengubah ukuran maupun bentuk bangun."
    }
  }
];
