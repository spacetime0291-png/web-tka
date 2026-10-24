module.exports = [
  {
    id: "fis-kin-gl-kelajuan-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-kelajuan",
    category: "Kelajuan dan Kecepatan",
    difficulty: "mudah",
    statement: "Sebuah bus pariwisata menempuh jarak total $180\\text{ km}$ dalam selang waktu $2{,}5\\text{ jam}$. Nilai kelajuan rata-rata bus tersebut jika dinyatakan dalam satuan standar internasional ($\\text{m/s}$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$20\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$72\\text{ m/s}$",
      "$18\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kelajuan rata-rata ($v_{\\text{rata}}$) adalah rasio jarak tempuh total ($s$) terhadap waktu tempuh total ($t$):<br>$$v_{\\text{rata}} = \\frac{s}{t}$$<br>Konversi satuan dari $\\text{km/jam}$ ke $\\text{m/s}$ dilakukan dengan mengalikan $\\frac{1000}{3600} = \\frac{5}{18}$.",
      steps: "1. Hitung kelajuan rata-rata dalam $\\text{km/jam}$:<br>$$v_{\\text{rata}} = \\frac{180\\text{ km}}{2{,}5\\text{ jam}} = 72\\text{ km/jam}$$<br>2. Konversi ke satuan $\\text{m/s}$:<br>$$v = 72 \\times \\frac{5}{18}\\text{ m/s} = 4 \\times 5 = 20\\text{ m/s}$$",
      pitfalls: "Lupa mengonversi satuan ke SI ($\text{m/s}$) sehingga langsung menjawab $72$."
    }
  },
  {
    id: "fis-kin-gl-kelajuan-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-kelajuan",
    category: "Kelajuan dan Kecepatan",
    difficulty: "mudah",
    statement: "Seorang atlet berlari lurus ke arah timur menempuh jarak $100\\text{ m}$ dalam waktu $12\\text{ s}$, kemudian berbalik arah dan berjalan santai ke arah barat sejauh $20\\text{ m}$ selama $8\\text{ s}$. Besar kecepatan rata-rata atlet tersebut selama $20\\text{ s}$ perjalanan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$5\\text{ m/s}$",
      "$3\\text{ m/s}$",
      "$8\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kecepatan rata-rata ($\\bar{v}$) adalah besaran vektor yang dihitung dari perpindahan total ($\\Delta x$) dibagi total selang waktu ($\\Delta t$):<br>$$\\bar{v} = \\frac{\\Delta x}{\\Delta t}$$",
      steps: "1. Hitung perpindahan total atlet:<br>$$\\Delta x = 100\\text{ m} - 20\\text{ m} = +80\\text{ m}\\text{ (ke arah timur)}$$<br>2. Total waktu perjalanan:<br>$$\\Delta t = 12\\text{ s} + 8\\text{ s} = 20\\text{ s}$$<br>3. Hitung kecepatan rata-rata:<br>$$\\bar{v} = \\frac{80\\text{ m}}{20\\text{ s}} = 4\\text{ m/s}$$",
      pitfalls: "Nilai $6\\text{ m/s}$ didapatkan jika menghitung kelajuan rata-rata (jarak total $120\\text{ m}$ dibagi $20\\text{ s}$). Soal secara spesifik menanyakan 'kecepatan rata-rata' (berbasis perpindahan)."
    }
  },
  {
    id: "fis-kin-gl-kelajuan-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-kelajuan",
    category: "Kelajuan dan Kecepatan",
    difficulty: "mudah",
    statement: "Pernyataan yang paling tepat mengenai perbedaan mendasar antara konsep kelajuan rata-rata dan kecepatan rata-rata adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Kelajuan rata-rata adalah besaran skalar berbasis jarak total, sedangkan kecepatan rata-rata adalah besaran vektor berbasis perpindahan total.",
      "Kelajuan rata-rata selalu bernilai lebih kecil dibandingkan kecepatan rata-rata.",
      "Kecepatan rata-rata tidak memiliki arah gerak sedangkan kelajuan rata-rata memiliki arah gerak.",
      "Kelajuan rata-rata dihitung dari turunan posisi, sedangkan kecepatan rata-rata dihitung dari integral kelajuan.",
      "Kedua besaran selalu menghasilkan nilai numerik yang identik untuk segala jenis pola lintasan gerak."
    ],
    correctIndex: 0,
    solution: {
      concept: "Kelajuan adalah besaran skalar ($v = \\frac{s_{\\text{total}}}{t_{\\text{total}}}$) dan tidak bergantung pada arah gerak. Kecepatan adalah besaran vektor ($\\vec{v} = \\frac{\\Delta \\vec{r}}{\\Delta t}$) yang memiliki besar dan arah.",
      steps: "Evaluasi opsi jawaban:<br>• Opsi A: Sangat tepat sesuai definisi fisis kinematika.<br>• Opsi B: Salah, kelajuan selalu $\\ge$ kecepatan.<br>• Opsi C: Terbalik definisi besaran skalar dan vektor.<br>• Opsi D: Menjelaskan konsep diferensial yang salah konteks.<br>• Opsi E: Hanya identik jika benda bergerak lurus satu arah tanpa berbalik.",
      pitfalls: "Perhatikan definisi skalar (jarak) versus vektor (perpindahan)."
    }
  },
  {
    id: "fis-kin-gl-kelajuan-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-kelajuan",
    category: "Kelajuan dan Kecepatan",
    difficulty: "mudah",
    statement: "Sebuah partikel bergerak pada garis lurus dengan posisi dinyatakan oleh persamaan $x(t) = 3t^2 + 2t - 5$, dengan $x$ dalam meter dan $t$ dalam sekon. Kecepatan sesaat partikel pada saat $t = 4\\text{ s}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$26\\text{ m/s}$",
      "$51\\text{ m/s}$",
      "$24\\text{ m/s}$",
      "$14\\text{ m/s}$",
      "$28\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kecepatan sesaat ($v$) merupakan turunan pertama dari fungsi posisi $x(t)$ terhadap waktu $t$:<br>$$v(t) = \\frac{dx}{dt}$$",
      steps: "1. Turunkan persamaan $x(t)$ terhadap $t$:<br>$$v(t) = \\frac{d}{dt}(3t^2 + 2t - 5) = 6t + 2$$<br>2. Substitusi nilai waktu $t = 4\\text{ s}$:<br>$$v(4) = 6(4) + 2 = 24 + 2 = 26\\text{ m/s}$$",
      pitfalls: "Nilai $51\\text{ m}$ didapat jika langsung memasukkan $t = 4$ ke persamaan $x(t)$, yang merupakan kedudukan/posisi, bukan kecepatan."
    }
  },
  {
    id: "fis-kin-gl-kelajuan-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-kelajuan",
    category: "Kelajuan dan Kecepatan",
    difficulty: "mudah",
    statement: "Sebuah mobil menempuh jarak $60\\text{ km}$ pertama dengan kelajuan rata-rata $60\\text{ km/jam}$, kemudian menempuh $60\\text{ km}$ kedua dengan kelajuan rata-rata $40\\text{ km/jam}$. Kelajuan rata-rata mobil untuk seluruh perjalanan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$48\\text{ km/jam}$",
      "$50\\text{ km/jam}$",
      "$45\\text{ km/jam}$",
      "$52\\text{ km/jam}$",
      "$42\\text{ km/jam}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kelajuan rata-rata bukan merupakan rata-rata aritmetika biasa dari dua kelajuan, melainkan rata-rata harmonik (karena jarak tempuh tiap segmen sama):<br>$$v_{\\text{rata}} = \\frac{s_1 + s_2}{t_1 + t_2}$$",
      steps: "1. Waktu tempuh segmen pertama:<br>$$t_1 = \\frac{s_1}{v_1} = \\frac{60}{60} = 1\\text{ jam}$$<br>2. Waktu tempuh segmen kedua:<br>$$t_2 = \\frac{s_2}{v_2} = \\frac{60}{40} = 1{,}5\\text{ jam}$$<br>3. Waktu total dan jarak total:<br>$$s_{\\text{total}} = 60 + 60 = 120\\text{ km},\\quad t_{\\text{total}} = 1 + 1{,}5 = 2{,}5\\text{ jam}$$<br>4. Kelajuan rata-rata seluruh perjalanan:<br>$$v_{\\text{rata}} = \\frac{120}{2{,}5} = 48\\text{ km/jam}$$",
      pitfalls: "Jebakan paling sering adalah langsung merata-ratakan kelajuan: $\\frac{60 + 40}{2} = 50\\text{ km/jam}$. Rata-rata aritmetika hanya berlaku jika waktu tempuh kedua segmen sama, bukan jaraknya."
    }
  }
];
