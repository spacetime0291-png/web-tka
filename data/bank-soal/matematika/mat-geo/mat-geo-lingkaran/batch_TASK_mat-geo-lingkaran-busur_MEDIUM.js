/**
 * Batch Task: TASK_mat-geo-lingkaran-busur_MEDIUM
 * SubTopic: Panjang Busur dan Sudut Pusat / Keliling Lingkaran (mat-geo-lingkaran-busur)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-geo-lingkaran-busur-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-busur",
    category: "Sudut-Sudut Berhadapan Segi Empat Tali Busur",
    difficulty: "sedang",
    statement: "Pada suatu segi empat tali busur $ABCD$ yang seluruh titik sudutnya terletak pada keliling lingkaran, besar sudut $\\angle A = (2x + 10)^\\circ$ dan besar sudut $\\angle C = (3x + 20)^\\circ$. Besar sudut $\\angle C$ sebenarnya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$110^\\circ$",
      "$70^\\circ$",
      "$100^\\circ$",
      "$120^\\circ$",
      "$80^\\circ$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Sifat utama segi empat tali busur menyatakan bahwa jumlah dua sudut yang saling berhadapan selalu sama dengan sudut lurus ($180^\\circ$), yaitu $\\angle A + \\angle C = 180^\\circ$.",
      steps: "1. Terapkan sifat sudut berhadapan segi empat tali busur:\n$$\\angle A + \\angle C = 180^\\circ$$\n$$(2x + 10) + (3x + 20) = 180$$\n2. Selesaikan persamaan linier aljabar:\n$$5x + 30 = 180 \\implies 5x = 150 \\implies x = 30$$\n3. Hitung besar sudut $\\angle C$ dengan menyubstitusikan $x = 30$:\n$$\\angle C = 3(30) + 20 = 90 + 20 = 110^\\circ$$\n4. (Sebagai verifikasi: $\\angle A = 2(30) + 10 = 70^\\circ$, dan $70^\\circ + 110^\\circ = 180^\\circ$).\n5. Jadi, besar sudut $\\angle C$ adalah $110^\\circ$ (pilihan A).",
      pitfalls: "Terkecoh menyamakan kedua sudut (mengira $\\angle A = \\angle C$) alih-alih menjumlahkannya sama dengan $180^\\circ$, atau salah memilih nilai $\\angle A = 70^\\circ$."
    }
  },
  {
    id: "mat-geo-lingkaran-busur-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-busur",
    category: "Sudut Dua Tali Busur Berpotongan di Dalam",
    difficulty: "sedang",
    statement: "Dua buah tali busur $AC$ dan $BD$ berpotongan di dalam lingkaran pada titik $E$. Jika besar sudut pusat yang menghadap busur $AB$ adalah $\\angle AOB = 80^\\circ$ dan sudut pusat yang menghadap busur $CD$ adalah $\\angle COD = 40^\\circ$, maka besar sudut $\\angle AEB$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$60^\\circ$",
      "$40^\\circ$",
      "$120^\\circ$",
      "$30^\\circ$",
      "$50^\\circ$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Besar sudut antara dua tali busur yang berpotongan di dalam lingkaran sama dengan setengah dari jumlah sudut-sudut pusat busur yang dihadapi oleh sudut tersebut dan sudut bertolak belakangnya: $\\angle AEB = \\frac{1}{2}(\\angle AOB + \\angle COD)$.",
      steps: "1. Identifikasi besar sudut pusat kedua busur yang diapit: $\\angle AOB = 80^\\circ$ dan $\\angle COD = 40^\\circ$.\n2. Masukkan ke rumus sudut perpotongan tali busur di dalam lingkaran:\n$$\\angle AEB = \\frac{1}{2}(\\angle AOB + \\angle COD)$$\n3. Hitung hasil penjumlahan dan pembagiannya:\n$$\\angle AEB = \\frac{1}{2}(80^\\circ + 40^\\circ) = \\frac{1}{2}(120^\\circ) = 60^\\circ$$\n4. Jadi, besar sudut $\\angle AEB$ adalah $60^\\circ$ (pilihan A).",
      pitfalls: "Mengurangkan kedua sudut pusat (yang merupakan rumus untuk perpotongan di luar lingkaran) alih-alih menjumlahkannya."
    }
  },
  {
    id: "mat-geo-lingkaran-busur-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-busur",
    category: "Sudut Dua Tali Busur Berpotongan di Luar",
    difficulty: "sedang",
    statement: "Dua garis perpanjangan tali busur $AB$ dan $CD$ berpotongan di titik $P$ di luar lingkaran. Jika busur besar $AC$ menghadap sudut pusat $110^\\circ$ dan busur kecil $BD$ menghadap sudut pusat $30^\\circ$, maka besar sudut luar $\\angle APC$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$40^\\circ$",
      "$70^\\circ$",
      "$80^\\circ$",
      "$35^\\circ$",
      "$55^\\circ$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Besar sudut yang dibentuk oleh perpotongan dua tali busur di luar lingkaran sama dengan setengah dari selisih besar sudut pusat busur besar dan busur kecil yang diapitnya: $\\angle APC = \\frac{1}{2}(\\text{sudut busur besar} - \\text{sudut busur kecil})$.",
      steps: "1. Identifikasi besar kedua sudut pusat busur yang diapit: busur besar $= 110^\\circ$ dan busur kecil $= 30^\\circ$.\n2. Masukkan ke rumus sudut perpotongan di luar lingkaran:\n$$\\angle APC = \\frac{1}{2}(110^\\circ - 30^\\circ)$$\n3. Hitung selisih sudut:\n$$\\angle APC = \\frac{1}{2}(80^\\circ) = 40^\\circ$$\n4. Jadi, besar sudut $\\angle APC$ adalah $40^\\circ$ (pilihan A).",
      pitfalls: "Menjumlahkan kedua sudut alih-alih mengurangkannya sehingga menghasilkan $\\frac{1}{2}(140^\\circ) = 70^\\circ$."
    }
  },
  {
    id: "mat-geo-lingkaran-busur-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-busur",
    category: "Teorema Perpotongan Dua Tali Busur",
    difficulty: "sedang",
    statement: "Dua tali busur $AB$ dan $CD$ pada sebuah lingkaran saling berpotongan di titik $P$. Jika panjang segmen garis $AP = 4\\text{ cm}$, $PB = 6\\text{ cm}$, dan $CP = 3\\text{ cm}$, maka panjang segmen garis $PD$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$8\\text{ cm}$",
      "$6\\text{ cm}$",
      "$7\\text{ cm}$",
      "$9\\text{ cm}$",
      "$10\\text{ cm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Teorema perkalian segmen tali busur (Chord Theorem) menyatakan bahwa jika dua tali busur $AB$ dan $CD$ berpotongan di titik $P$, maka hasil kali panjang segmen pada satu tali busur sama dengan hasil kali panjang segmen pada tali busur lainnya: $AP \\times PB = CP \\times PD$.",
      steps: "1. Tuliskan rumus perpotongan tali busur:\n$$AP \\times PB = CP \\times PD$$\n2. Masukkan panjang segmen yang diketahui:\n$$4 \\times 6 = 3 \\times PD$$\n$$24 = 3 \\times PD$$\n3. Selesaikan untuk mencari panjang $PD$:\n$$PD = \\frac{24}{3} = 8\\text{ cm}$$\n4. Jadi, panjang ruas garis $PD$ adalah $8\\text{ cm}$ (pilihan A).",
      pitfalls: "Keliru menyamakan penjumlahan segmen $AP + PB = CP + PD$ alih-alih perkalian segmen garis."
    }
  },
  {
    id: "mat-geo-lingkaran-busur-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-busur",
    category: "Teorema Garis Singgung dan Garis Potong",
    difficulty: "sedang",
    statement: "Dari sebuah titik $P$ di luar lingkaran, ditarik garis singgung $PT$ yang menyentuh lingkaran di titik $T$, dan garis potong $PAB$ yang memotong lingkaran di titik $A$ dan $B$. Jika panjang $PA = 4\\text{ cm}$ dan panjang $AB = 5\\text{ cm}$, maka panjang ruas garis singgung $PT$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6\\text{ cm}$",
      "$4{,}5\\text{ cm}$",
      "$\\sqrt{20}\\text{ cm}$",
      "$8\\text{ cm}$",
      "$9\\text{ cm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Teorema garis singgung-potong (Tangent-Secant Theorem) menyatakan bahwa kuadrat panjang segmen garis singgung sama dengan hasil kali panjang segmen garis potong luar dengan panjang keseluruhan garis potong: $PT^2 = PA \\times PB$.",
      steps: "1. Hitung panjang segmen garis potong total $PB$:\n$$PB = PA + AB = 4 + 5 = 9\\text{ cm}$$\n2. Masukkan ke rumus teorema garis singgung-potong:\n$$PT^2 = PA \\times PB$$\n$$PT^2 = 4 \\times 9 = 36$$\n3. Tarik akar kuadrat:\n$$PT = \\sqrt{36} = 6\\text{ cm}$$\n4. Jadi, panjang ruas garis singgung $PT$ adalah $6\\text{ cm}$ (pilihan A).",
      pitfalls: "Langsung mengalikan $PA \\times AB = 4 \\times 5 = 20$ tanpa menjumlahkan segmen total $PB = PA + AB$."
    }
  }
];
