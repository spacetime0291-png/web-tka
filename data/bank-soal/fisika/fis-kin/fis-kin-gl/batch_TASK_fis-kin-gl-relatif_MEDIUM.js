module.exports = [
  {
    id: "fis-kin-gl-relatif-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-relatif",
    category: "Kecepatan Relatif",
    difficulty: "sedang",
    statement: "Dua buah kereta api $A$ dan $B$ bergerak pada dua jalur rel paralel yang saling mendekat (berlawanan arah). Kereta $A$ memiliki panjang $160\\text{ m}$ dan melaju dengan kecepatan konstan $54\\text{ km/jam}$. Kereta $B$ memiliki panjang $240\\text{ m}$ dan melaju dengan kecepatan konstan $90\\text{ km/jam}$. Waktu yang dibutuhkan sejak kedua ujung depan kereta mulai berpapasan hingga kedua ekor kereta tepat lepas berpisah adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ sekon}$",
      "$20\\text{ sekon}$",
      "$8\\text{ sekon}$",
      "$16\\text{ sekon}$",
      "$12\\text{ sekon}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Saat dua kereta saling berpapasan dengan arah berlawanan, kecepatan relatif kedua kereta adalah jumlahan kelajuannya:<br>$$v_{\\text{rel}} = v_A + v_B$$<br>Panjang lintasan relatif yang harus ditempuh agar keduanya berpisah penuh adalah jumlahan panjang kedua kereta:<br>$$L_{\\text{total}} = L_A + L_B$$",
      steps: "1. Konversi satuan kelajuan ke $\\text{m/s}$:<br>$$v_A = 54 \\times \\frac{5}{18} = 15\\text{ m/s}$$<br>$$v_B = 90 \\times \\frac{5}{18} = 25\\text{ m/s}$$<br>2. Hitung kecepatan relatif:<br>$$v_{\\text{rel}} = 15 + 25 = 40\\text{ m/s}$$<br>3. Hitung panjang total yang harus ditempuh:<br>$$L_{\\text{total}} = 160\\text{ m} + 240\\text{ m} = 400\\text{ m}$$<br>4. Waktu berpapasan penuh:<br>$$t = \\frac{L_{\\text{total}}}{v_{\\text{rel}}} = \\frac{400\\text{ m}}{40\\text{ m/s}} = 10\\text{ sekon}$$",
      pitfalls: "Hanya memperhitungkan panjang salah satu kereta saja (misalnya $160/40 = 4\\text{ s}$ atau $240/40 = 6\\text{ s}$), padahal kedua panjang gerbong harus saling melintasi sempurna."
    }
  },
  {
    id: "fis-kin-gl-relatif-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-relatif",
    category: "Kecepatan Relatif",
    difficulty: "sedang",
    statement: "Sebuah perahu motor bermaksud menyeberangi sungai dengan lebar $120\\text{ m}$. Laju perahu di air tenang adalah $4\\text{ m/s}$ diarahkan tegak lurus terhadap arah arus sungai. Kecepatan aliran arus sungai adalah $3\\text{ m/s}$. Jarak pergeseran perahu ke arah hilir (jarak hanyut searah arus sungai) ketika perahu tiba di tepi seberang adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$90\\text{ meter}$",
      "$150\\text{ meter}$",
      "$120\\text{ meter}$",
      "$160\\text{ meter}$",
      "$75\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gerak dua dimensi saling independen: waktu menyeberang sungai ($t$) hanya ditentukan oleh lebar sungai dan komponen kecepatan perahu yang tegak lurus arus. Pergeseran ke arah hilir ($x$) merupakan hasil kali kecepatan arus sungai dengan waktu tempuh tersebut.",
      steps: "1. Waktu tempuh menyeberang sungai:<br>$$t = \\frac{d}{v_{\\text{perahu}}} = \\frac{120\\text{ m}}{4\\text{ m/s}} = 30\\text{ sekon}$$<br>2. Jarak pergeseran ke arah hilir akibat arus:<br>$$x = v_{\\text{arus}} \\times t = 3\\text{ m/s} \\times 30\\text{ s} = 90\\text{ meter}$$",
      pitfalls: "Nilai $150\\text{ m}$ adalah panjang lintasan serong total (resultan perpindahan), bukan pergeseran ke arah hilir saja."
    }
  },
  {
    id: "fis-kin-gl-relatif-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-relatif",
    category: "Kecepatan Relatif",
    difficulty: "sedang",
    statement: "Dua mobil $A$ dan $B$ terpisah sejauh $600\\text{ m}$ pada lintasan lurus dan mulai bergerak saling mendekati secara bersamaan pada saat $t = 0$. Mobil $A$ bergerak dengan kelajuan konstan $20\\text{ m/s}$, sedangkan mobil $B$ bergerak dari keadaan diam dengan percepatan konstan $2\\text{ m/s}^2$. Saat kedua mobil berpapasan, jarak yang telah ditempuh oleh mobil $A$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$400\\text{ meter}$",
      "$200\\text{ meter}$",
      "$300\\text{ meter}$",
      "$450\\text{ meter}$",
      "$250\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kondisi berpapasan dua benda yang bergerak saling mendekat terjadi ketika jumlahan jarak tempuh kedua benda sama dengan jarak pisah mula-mula:<br>$$s_A(t) + s_B(t) = d$$",
      steps: "1. Susun persamaan jarak tempuh masing-masing mobil:<br>$$s_A(t) = v_A \\cdot t = 20t$$<br>$$s_B(t) = v_{0B} t + \\frac{1}{2} a_B t^2 = 0 + \\frac{1}{2}(2)t^2 = t^2$$<br>2. Selesaikan persamaan gerak pertemuan:<br>$$20t + t^2 = 600 \\implies t^2 + 20t - 600 = 0$$<br>$$(t + 30)(t - 20) = 0 \\implies t = 20\\text{ sekon}$$<br>3. Hitung jarak tempuh mobil $A$:<br>$$s_A = 20\\text{ m/s} \\times 20\\text{ s} = 400\\text{ meter}$$",
      pitfalls: "Nilai $200\\text{ meter}$ adalah jarak yang ditempuh mobil $B$. Pertanyaan menanyakan jarak tempuh mobil $A$."
    }
  },
  {
    id: "fis-kin-gl-relatif-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-relatif",
    category: "Kecepatan Relatif",
    difficulty: "sedang",
    statement: "Seorang atlet renang mampu berenang dengan kelajuan tetap $5\\text{ km/jam}$ di air tenang. Ia ingin menyeberangi sungai berarus deras dengan kelajuan aliran $3\\text{ km/jam}$ sehingga lintasan geraknya tepat tegak lurus terhadap tepi sungai (tidak hanyut ke hilir). Besar sinus sudut arah renang atlet terhadap garis tegak lurus tepi sungai mengarah ke hulu adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}60$",
      "$0{,}80$",
      "$0{,}75$",
      "$0{,}50$",
      "$0{,}40$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Agar resultan gerak tepat tegak lurus tepi sungai, komponen kecepatan perenang yang melawan aliran arus sungai harus tepat mengimbangi laju arus sungai:<br>$$v_{\\text{renang}} \\sin\\theta = v_{\\text{arus}}$$",
      steps: "1. Tentukan komponen kesetimbangan arah aliran arus sungai:<br>$$5 \\sin\\theta = 3$$<br>2. Selesaikan nilai sinus sudut $\\theta$:<br>$$\\sin\\theta = \\frac{3}{5} = 0{,}60$$",
      pitfalls: "Menggunakan tangen atau kosinus terbalik ($3/4 = 0{,}75$ atau $4/5 = 0{,}80$). Sisi miring vektor adalah kecepatan renang atlet ($5\\text{ km/jam}$) dan sisi depan sudut adalah kecepatan arus ($3\\text{ km/jam}$)."
    }
  },
  {
    id: "fis-kin-gl-relatif-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-relatif",
    category: "Kecepatan Relatif",
    difficulty: "sedang",
    statement: "Dua partikel $A$ dan $B$ bergerak pada bidang datar dengan fungsi posisi terhadap tanah dinyatakan oleh $\\vec{r}_A(t) = (4t)\\hat{i} + (3t)\\hat{j}$ dan $\\vec{r}_B(t) = (-2t)\\hat{i} + (11t)\\hat{j}$ (dalam satuan meter dan sekon). Besar kecepatan relatif partikel $A$ terhadap partikel $B$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ m/s}$",
      "$14\\text{ m/s}$",
      "$2\\sqrt{17}\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$6\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kecepatan masing-masing partikel diperoleh dari turunan posisi. Kecepatan relatif $\\vec{v}_{A/B} = \\vec{v}_A - \\vec{v}_B$. Besar kecepatan relatif merupakan norma Euclidean dari vektor kecepatan relatif tersebut.",
      steps: "1. Tentukan kecepatan masing-masing partikel:<br>$$\\vec{v}_A = \\frac{d\\vec{r}_A}{dt} = 4\\hat{i} + 3\\hat{j}\\text{ (m/s)}$$<br>$$\\vec{v}_B = \\frac{d\\vec{r}_B}{dt} = -2\\hat{i} + 11\\hat{j}\\text{ (m/s)}$$<br>2. Hitung vektor kecepatan relatif:<br>$$\\vec{v}_{A/B} = \\vec{v}_A - \\vec{v}_B = (4 - (-2))\\hat{i} + (3 - 11)\\hat{j} = 6\\hat{i} - 8\\hat{j}\\text{ (m/s)}$$<br>3. Hitung besar vektor kecepatan relatif:<br>$$|\\vec{v}_{A/B}| = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ m/s}$$",
      pitfalls: "Lupa bahwa $\\vec{v}_{A/B} = \\vec{v}_A - \\vec{v}_B$, jika menjumlahkan tanda $(-2)$ secara keliru akan menghasilkan resultan yang salah."
    }
  }
];
