module.exports = [
  {
    id: "fis-kin-gl-jarak-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-jarak",
    category: "Jarak dan Perpindahan",
    difficulty: "sedang",
    statement: "Sebuah drone navigasi bergerak dalam ruang tiga dimensi dari titik pusat $(0, 0, 0)$. Mula-mula drone meluncur sejauh $6\\text{ m}$ searah sumbu-$x$ positif, lalu berbelok lurus $2\\text{ m}$ searah sumbu-$y$ positif, dan akhirnya bergerak tegak lurus ke atas sejauh $3\\text{ m}$ searah sumbu-$z$ positif. Jarak total yang dilalui dan besar vektor perpindahan drone dari titik awal adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$11\\text{ m}$ dan $7\\text{ m}$",
      "$11\\text{ m}$ dan $\\sqrt{40}\\text{ m}$",
      "$7\\text{ m}$ dan $11\\text{ m}$",
      "$11\\text{ m}$ dan $9\\text{ m}$",
      "$9\\text{ m}$ dan $7\\text{ m}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jarak skalar adalah penjumlahan seluruh panjang lintasan: $s = \\Delta x + \\Delta y + \\Delta z$. Perpindahan dalam vektor ruang 3 dimensi ditentukan dengan norma Euclidean:<br>$$|\\Delta \\vec{r}| = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2 + (\\Delta z)^2}$$",
      steps: "1. Jarak skalar total:<br>$$s = 6\\text{ m} + 2\\text{ m} + 3\\text{ m} = 11\\text{ m}$$<br>2. Besar perpindahan 3D:<br>$$|\\Delta \\vec{r}| = \\sqrt{6^2 + 2^2 + 3^2} = \\sqrt{36 + 4 + 9} = \\sqrt{49} = 7\\text{ m}$$",
      pitfalls: "Jangan hanya memproyeksikan pada dua sumbu mendatar. Sumbu-$z$ (vertikal) harus diperhitungkan dalam modulus vektor ruang."
    }
  },
  {
    id: "fis-kin-gl-jarak-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-jarak",
    category: "Jarak dan Perpindahan",
    difficulty: "sedang",
    statement: "Sebuah mobil robotik menelusuri lintasan berbentuk bujur sangkar $ABCD$ dengan panjang sisi masing-masing $20\\text{ m}$. Mobil mulai berjalan dari titik sudut $A$ melewati $B$ dan $C$ secara berurutan, lalu berhenti tepat di titik sudut $D$. Perbandingan nilai jarak total tempuh terhadap besar perpindahan mobil tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3 : 1$",
      "$4 : 1$",
      "$3 : \\sqrt{2}$",
      "$1 : 1$",
      "$60 : 20\\sqrt{2}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jarak tempuh adalah akumulasi ketiga sisi persegi yang dilewati ($AB + BC + CD$). Perpindahan adalah jarak langsung garis lurus dari posisi awal ($A$) ke posisi akhir ($D$).",
      steps: "1. Panjang sisi persegi: $s = 20\\text{ m}$.<br>2. Jarak tempuh total:<br>$$s_{\\text{total}} = AB + BC + CD = 20 + 20 + 20 = 60\\text{ m}$$<br>3. Posisi akhir mobil berada di titik $D$. Jarak langsung dari $A$ ke $D$ adalah satu sisi persegi:<br>$$|\\Delta \\vec{r}| = AD = 20\\text{ m}$$<br>4. Perbandingan jarak terhadap perpindahan:<br>$$\\frac{s_{\\text{total}}}{|\\Delta \\vec{r}|} = \\frac{60\\text{ m}}{20\\text{ m}} = \\frac{3}{1} = 3 : 1$$",
      pitfalls: "Sebagian siswa mengira posisi akhir berada di titik $C$ sehingga menggunakan diagonal $\\sqrt{20^2 + 20^2} = 20\\sqrt{2}$, padahal mobil berhenti di titik $D$ sehingga perpindahannya tepat panjang 1 sisi ($20\\text{ m}$)."
    }
  },
  {
    id: "fis-kin-gl-jarak-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-jarak",
    category: "Jarak dan Perpindahan",
    difficulty: "sedang",
    statement: "Sebuah partikel bergerak lurus sepanjang sumbu-$x$ dengan persamaan posisi terhadap waktu dinyatakan oleh $x(t) = 2t^2 - 8t + 5$, di mana $x$ dalam meter dan $t$ dalam sekon. Jarak total yang ditempuh partikel tersebut dari selang waktu $t = 0\\text{ s}$ sampai $t = 3\\text{ s}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ m}$",
      "$6\\text{ m}$",
      "$8\\text{ m}$",
      "$14\\text{ m}$",
      "$12\\text{ m}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Untuk mencari jarak total dari fungsi posisi yang mengalami pembalikan arah gerak, cari terlebih dahulu waktu saat partikel diam sesaat ($v(t) = \\frac{dx}{dt} = 0$), lalu jumlahkan harga mutlak perpindahan tiap segmen perjalanan.",
      steps: "1. Kecepatan sesaat partikel:<br>$$v(t) = \\frac{dx}{dt} = 4t - 8$$<br>Partikel berbalik arah saat $v(t) = 0 \\implies 4t - 8 = 0 \\implies t = 2\\text{ s}$.<br>Karena $t = 2\\text{ s}$ berada dalam selang $[0, 3]$, terjadi pembalikan arah gerak.<br>2. Hitung posisi pada titik-titik krusial:<br>$$x(0) = 2(0)^2 - 8(0) + 5 = 5\\text{ m}$$<br>$$x(2) = 2(2)^2 - 8(2) + 5 = 8 - 16 + 5 = -3\\text{ m}$$<br>$$x(3) = 2(3)^2 - 8(3) + 5 = 18 - 24 + 5 = -1\\text{ m}$$<br>3. Jarak total adalah jumlahan panjang pergerakan:<br>$$s = |x(2) - x(0)| + |x(3) - x(2)| = |-3 - 5| + |-1 - (-3)| = 8\\text{ m} + 2\\text{ m} = 10\\text{ m}$$",
      pitfalls: "Jebakan paling sering adalah menghitung $|x(3) - x(0)| = |-1 - 5| = 6\\text{ m}$. Nilai $6\\text{ m}$ adalah besar perpindahan, bukan jarak total yang ditempuh."
    }
  },
  {
    id: "fis-kin-gl-jarak-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-jarak",
    category: "Jarak dan Perpindahan",
    difficulty: "sedang",
    statement: "Sebuah kapal pesiar berlayar dari pelabuhan ke arah timur sejauh $80\\text{ km}$, kemudian mengubah haluan dan berlayar sejauh $60\\text{ km}$ dengan arah $60^\\circ$ terhadap arah timur. Besar perpindahan resultan kapal dari pelabuhan awal adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$20\\sqrt{37}\\text{ km}$",
      "$140\\text{ km}$",
      "$100\\text{ km}$",
      "$20\\sqrt{13}\\text{ km}$",
      "$120\\text{ km}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Resultan perpindahan dua vektor dengan sudut apit $\\theta$ dihitung menggunakan aturan kosinus penjumlahan vektor:<br>$$R = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}$$",
      steps: "1. Identifikasi parameter vektor:<br>$$A = 80\\text{ km},\\quad B = 60\\text{ km},\\quad \\theta = 60^\\circ,\\quad \\cos 60^\\circ = 0{,}5$$<br>2. Hitung resultan perpindahan:<br>$$R = \\sqrt{80^2 + 60^2 + 2(80)(60)\\cos 60^\\circ}$$<br>$$R = \\sqrt{6400 + 3600 + 2(4800)(0{,}5)} = \\sqrt{10000 + 4800} = \\sqrt{14800}$$<br>$$R = \\sqrt{400 \\times 37} = 20\\sqrt{37}\\text{ km}$$",
      pitfalls: "Jangan mengabaikan sudut $60^\\circ$ dan langsung menjumlahkan secara skalar ($140\\text{ km}$) atau menganggap tegak lurus ($100\\text{ km}$)."
    }
  },
  {
    id: "fis-kin-gl-jarak-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-jarak",
    category: "Jarak dan Perpindahan",
    difficulty: "sedang",
    statement: "Jarum menit sebuah jam dinding memiliki panjang $14\\text{ cm}$. Ketika jarum bergerak berputar dari posisi menunjuk angka 12 ke angka 4 (selama 20 menit), besar perpindahan ujung jarum menit tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$14\\sqrt{3}\\text{ cm}$",
      "$28\\text{ cm}$",
      "$14\\text{ cm}$",
      "$\\frac{44}{3}\\text{ cm}$",
      "$14\\sqrt{2}\\text{ cm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jarum jam yang berputar membentuk segitiga sama kaki dengan panjang kedua sisi sama dengan panjang jarum ($r$) dan sudut pusat $\\alpha$. Besar perpindahan ujung jarum adalah panjang tali busur yang menghubungkan posisi awal dan akhir:<br>$$|\\Delta \\vec{r}| = 2r\\sin\\left(\\frac{\\alpha}{2}\\right)$$",
      steps: "1. Hitung sudut pusat pergeseran dari angka 12 ke angka 4:<br>Satu lingkaran penuh ($360^\\circ$) dibagi 12 angka = $30^\\circ$ per angka.<br>$$\\alpha = 4 \\times 30^\\circ = 120^\\circ$$<br>2. Hitung panjang tali busur (perpindahan):<br>$$|\\Delta \\vec{r}| = 2r\\sin\\left(\\frac{120^\\circ}{2}\\right) = 2(14)\\sin(60^\\circ) = 28 \\times \\frac{1}{2}\\sqrt{3} = 14\\sqrt{3}\\text{ cm}$$",
      pitfalls: "Nilai $\\frac{44}{3}\\text{ cm}$ adalah panjang lintasan busur lingkaran (jarak tempuh), bukan perpindahan."
    }
  }
];
