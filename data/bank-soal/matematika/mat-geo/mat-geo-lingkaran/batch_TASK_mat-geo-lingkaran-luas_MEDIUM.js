/**
 * Batch Task: TASK_mat-geo-lingkaran-luas_MEDIUM
 * SubTopic: Luas Juring dan Tembereng Lingkaran (mat-geo-lingkaran-luas)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-geo-lingkaran-luas-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-luas",
    category: "Luas Tembereng Sudut 60 Derajat",
    difficulty: "sedang",
    statement: "Pada sebuah lingkaran dengan jari-jari $12\\text{ cm}$, terdapat juring dengan sudut pusat $60^\\circ$. Luas tembereng lingkaran tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(24\\pi - 36\\sqrt{3})\\text{ cm}^2$",
      "$(24\\pi - 72\\sqrt{3})\\text{ cm}^2$",
      "$(12\\pi - 36\\sqrt{3})\\text{ cm}^2$",
      "$(24\\pi - 18\\sqrt{3})\\text{ cm}^2$",
      "$(36\\pi - 24\\sqrt{3})\\text{ cm}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Luas tembereng diperoleh dari selisih antara luas juring lingkaran dan luas segitiga sama sisi yang dibentuk oleh kedua jari-jari dan tali busur: $L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\triangle}$.",
      steps: "1. Hitung luas juring lingkaran dengan sudut pusat $60^\\circ$:\n$$L_{\\text{juring}} = \\frac{60^\\circ}{360^\\circ} \\times \\pi (12^2) = \\frac{1}{6} \\times 144\\pi = 24\\pi\\text{ cm}^2$$\n2. Hitung luas segitiga dengan rumus trigonometri dua sisi pengapit sudut $60^\\circ$:\n$$L_{\\triangle} = \\frac{1}{2} \\times r \\times r \\times \\sin(60^\\circ)$$\n$$L_{\\triangle} = \\frac{1}{2} \\times 12 \\times 12 \\times \\frac{\\sqrt{3}}{2} = 72 \\times \\frac{\\sqrt{3}}{2} = 36\\sqrt{3}\\text{ cm}^2$$\n3. Hitung luas tembereng:\n$$L_{\\text{tembereng}} = 24\\pi - 36\\sqrt{3}\\text{ cm}^2$$\n4. Jadi, luas temberengnya adalah $(24\\pi - 36\\sqrt{3})\\text{ cm}^2$ (pilihan A).",
      pitfalls: "Salah menghitung nilai $\\sin(60^\\circ) = \\frac{1}{2}\\sqrt{3}$ atau keliru mengurangkan luas segitiga dari luas juring."
    }
  },
  {
    id: "mat-geo-lingkaran-luas-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-luas",
    category: "Optimasi Keliling Juring terhadap Luas Maksimum",
    difficulty: "sedang",
    statement: "Seutas kawat dengan panjang $40\\text{ cm}$ dibentuk menjadi sebuah kerangka juring lingkaran (terdiri dari dua jari-jari dan satu busur lingkaran). Agar luas juring yang terbentuk mencapai nilai maksimum, panjang jari-jari lingkaran harus dibuat sebesar ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ cm}$",
      "$8\\text{ cm}$",
      "$12\\text{ cm}$",
      "$5\\text{ cm}$",
      "$15\\text{ cm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Keliling juring adalah $K = 2r + s$, dan luas juring adalah $L = \\frac{1}{2}rs$. Nilai maksimum luas dicapai pada titik puncak fungsi kuadrat $L(r)$.",
      steps: "1. Nyatakan panjang busur $s$ dalam jari-jari $r$ dari keliling kawat:\n$$2r + s = 40 \\implies s = 40 - 2r$$\n2. Tuliskan rumus luas juring dalam fungsi $r$:\n$$L(r) = \\frac{1}{2} r s = \\frac{1}{2} r (40 - 2r) = 20r - r^2$$\n3. Tentukan titik puncak fungsi kuadrat $L(r) = -r^2 + 20r$:\n$$r_{\\text{maks}} = -\\frac{b}{2a} = -\\frac{20}{2(-1)} = 10\\text{ cm}$$\n4. Jadi, jari-jari lingkaran agar luas juring maksimum adalah $10\\text{ cm}$ (pilihan A).",
      pitfalls: "Lupa bahwa keliling juring mencakup dua jari-jari ($2r$) sehingga salah merumuskan keliling sebagai $r + s = 40$."
    }
  },
  {
    id: "mat-geo-lingkaran-luas-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-luas",
    category: "Luas Tembereng Sudut Tumpul 120 Derajat",
    difficulty: "sedang",
    statement: "Sebuah lingkaran memiliki panjang jari-jari $6\\text{ cm}$. Luas tembereng lingkaran yang dihadapi oleh sudut pusat tumpul $120^\\circ$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(12\\pi - 9\\sqrt{3})\\text{ cm}^2$",
      "$(12\\pi - 18\\sqrt{3})\\text{ cm}^2$",
      "$(6\\pi - 9\\sqrt{3})\\text{ cm}^2$",
      "$(12\\pi - 9)\\text{ cm}^2$",
      "$(18\\pi - 9\\sqrt{3})\\text{ cm}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Luas tembereng untuk sembarang sudut pusat $\\theta$ dihitung dari $L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\triangle}$, dengan $L_{\\triangle} = \\frac{1}{2}r^2\\sin(\\theta)$.",
      steps: "1. Hitung luas juring lingkaran dengan sudut pusat $120^\\circ$:\n$$L_{\\text{juring}} = \\frac{120^\\circ}{360^\\circ} \\times \\pi (6^2) = \\frac{1}{3} \\times 36\\pi = 12\\pi\\text{ cm}^2$$\n2. Hitung luas segitiga sama kaki pembatas menggunakan sinus sudut tumpul $\\sin(120^\\circ) = \\frac{\\sqrt{3}}{2}$:\n$$L_{\\triangle} = \\frac{1}{2} \\times 6 \\times 6 \\times \\sin(120^\\circ) = 18 \\times \\frac{\\sqrt{3}}{2} = 9\\sqrt{3}\\text{ cm}^2$$\n3. Hitung luas tembereng:\n$$L_{\\text{tembereng}} = 12\\pi - 9\\sqrt{3}\\text{ cm}^2$$\n4. Jadi, luas tembereng lingkaran tersebut adalah $(12\\pi - 9\\sqrt{3})\\text{ cm}^2$ (pilihan A).",
      pitfalls: "Salah memasukkan tanda negatif pada nilai $\\sin(120^\\circ)$, padahal fungsi sinus tetap bertanda positif di kuadran II."
    }
  },
  {
    id: "mat-geo-lingkaran-luas-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-luas",
    category: "Rasio Perbandingan Luas Tembereng terhadap Juring",
    difficulty: "sedang",
    statement: "Pada suatu juring lingkaran yang memiliki sudut pusat siku-siku ($90^\\circ$) dan panjang jari-jari $r$, rasio perbandingan luas tembereng terhadap luas juring tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{\\pi - 2}{\\pi}$",
      "$\\frac{\\pi - 1}{\\pi}$",
      "$\\frac{2}{\\pi}$",
      "$\\frac{\\pi - 2}{4}$",
      "$\\frac{4 - \\pi}{\\pi}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Rasio luas tembereng terhadap juring dihitung dengan membagi formula aljabar luas tembereng terhadap luas juring pada sudut pusat yang sama.",
      steps: "1. Tuliskan luas juring dengan sudut pusat $90^\\circ$:\n$$L_{\\text{juring}} = \\frac{1}{4}\\pi r^2$$\n2. Tuliskan luas segitiga siku-siku pembatas:\n$$L_{\\triangle} = \\frac{1}{2} r^2 = \\frac{2}{4} r^2$$\n3. Hitung luas tembereng:\n$$L_{\\text{tembereng}} = \\frac{1}{4}\\pi r^2 - \\frac{2}{4}r^2 = \\frac{1}{4}r^2(\\pi - 2)$$\n4. Tentukan rasio perbandingannya:\n$$\\frac{L_{\\text{tembereng}}}{L_{\\text{juring}}} = \\frac{\\frac{1}{4}r^2(\\pi - 2)}{\\frac{1}{4}\\pi r^2} = \\frac{\\pi - 2}{\\pi}$$\n5. Jadi, rasio perbandingannya adalah $\\frac{\\pi - 2}{\\pi}$ (pilihan A).",
      pitfalls: "Lupa menyamakan penyebut saat mengurangkan luas segitiga dari luas juring sehingga menghasilkan bentuk pecahan yang tidak ekuivalen."
    }
  },
  {
    id: "mat-geo-lingkaran-luas-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-luas",
    category: "Luas Irisan Persekutuan Dua Lingkaran Identik",
    difficulty: "sedang",
    statement: "Dua buah lingkaran identik masing-masing berjari-jari $r$ diletakkan sedemikian rupa sehingga titik pusat lingkaran pertama terletak pada keliling lingkaran kedua, dan sebaliknya. Luas daerah irisan (daerah persekutuan) kedua lingkaran tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\left(\\frac{2}{3}\\pi - \\frac{\\sqrt{3}}{2}\\right)r^2$",
      "$\\left(\\frac{1}{3}\\pi - \\frac{\\sqrt{3}}{4}\\right)r^2$",
      "$\\left(\\frac{2}{3}\\pi - \\sqrt{3}\\right)r^2$",
      "$\\left(\\pi - \\frac{\\sqrt{3}}{2}\\right)r^2$",
      "$\\left(\\frac{1}{2}\\pi - \\frac{\\sqrt{3}}{3}\\right)r^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jika jarak antarpusat sama dengan jari-jari lingkaran ($d = r$), daerah irisan dibentuk oleh dua juring lingkaran bersudut pusat $120^\\circ$ yang saling bertumpukan pada layang-layang (dua segitiga sama sisi). Luas irisan = $2 \\times L_{\\text{juring}(120^\\circ)} - L_{\\text{belah ketupat}}$.",
      steps: "1. Jarak kedua pusat adalah $d = r$, sehingga titik-titik potong kedua lingkaran membentuk dua segitiga sama sisi bersisi $r$ dengan sudut pusat masing-masing $120^\\circ$.\n2. Hitung jumlah luas dua juring bersudut $120^\\circ$:\n$$2 \\times L_{\\text{juring}} = 2 \\times \\left(\\frac{120^\\circ}{360^\\circ} \\pi r^2\\right) = 2 \\times \\frac{1}{3}\\pi r^2 = \\frac{2}{3}\\pi r^2$$\n3. Hitung luas dua segitiga sama sisi pembatas:\n$$2 \\times L_{\\triangle} = 2 \\times \\left(\\frac{1}{4}\\sqrt{3}r^2\\right) = \\frac{\\sqrt{3}}{2}r^2$$\n4. Hitung luas daerah irisan:\n$$L_{\\text{irisan}} = 2 L_{\\text{juring}} - 2 L_{\\triangle} = \\left(\\frac{2}{3}\\pi - \\frac{\\sqrt{3}}{2}\\right)r^2$$\n5. Jadi, luas daerah irisannya adalah $\\left(\\frac{2}{3}\\pi - \\frac{\\sqrt{3}}{2}\\right)r^2$ (pilihan A).",
      pitfalls: "Hanya menghitung satu tembereng lingkaran dan lupa bahwa daerah irisan terdiri dari dua tembereng yang simetris dari kedua lingkaran."
    }
  }
];
