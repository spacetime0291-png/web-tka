module.exports = [
  {
    id: "fis-kin-lengkung-sentripetal-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-sentripetal",
    category: "Percepatan Sentripetal",
    difficulty: "mudah",
    statement: "Pernyataan yang paling tepat mengenai arah vektor percepatan sentripetal pada sebuah partikel yang melakukan gerak melingkar beraturan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Selalu tegak lurus vektor kecepatan linier dan mengarah tepat menuju pusat lingkaran",
      "Selalu sejajar searah dengan vektor kecepatan linier (garis singgung)",
      "Selalu berlawanan arah dengan vektor kecepatan linier",
      "Mengarah menjauh meninggalkan pusat lingkaran ke arah luar lintasan",
      "Arahnya tetap dan tidak pernah berubah di setiap titik lintasan"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kata 'sentripetal' berasal dari bahasa Latin yang berarti 'mencari pusat' (center-seeking). Vektor percepatan sentripetal ($\\vec{a}_s$) selalu berarah radial menuju ke titik pusat lingkaran dan tegak lurus terhadap vektor kecepatan linier ($\\vec{v} \\perp \\vec{a}_s$).",
      steps: "1. Vektor kecepatan linier $\\vec{v}$ selalu berarah tangensial (menyinggung lintasan).<br>2. Perubahan arah gerak ini disebabkan oleh percepatan yang berarah tegak lurus menuju pusat lingkaran, yaitu percepatan sentripetal $\\vec{a}_s$.",
      pitfalls: "Terkecoh dengan gaya sentrifugal fiktif yang mengarah ke luar lintasan, padahal percepatan fisis sejatinya selalu mengarah ke pusat lingkaran."
    }
  },
  {
    id: "fis-kin-lengkung-sentripetal-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-sentripetal",
    category: "Percepatan Sentripetal",
    difficulty: "mudah",
    statement: "Sebuah partikel bergerak menelusuri lintasan lingkaran dengan jari-jari $r = 0{,}5\\text{ meter}$ pada kelajuan linier tetap $v = 4\\text{ m/s}$. Besar percepatan sentripetal yang dialami partikel tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$32\\text{ m/s}^2$",
      "$16\\text{ m/s}^2$",
      "$8\\text{ m/s}^2$",
      "$64\\text{ m/s}^2$",
      "$4\\text{ m/s}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Besar percepatan sentripetal ($a_s$) dinyatakan oleh hubungan:<br>$$a_s = \\frac{v^2}{r}$$",
      steps: "1. Substitusikan $v = 4\\text{ m/s}$ dan $r = 0{,}5\\text{ m}$:<br>$$a_s = \\frac{4^2}{0{,}5} = \\frac{16}{0{,}5} = 32\\text{ m/s}^2$$",
      pitfalls: "Lupa menguadratkan kelajuan sehingga menghitung $\\frac{v}{r} = \\frac{4}{0{,}5} = 8\\text{ m/s}^2$ (yang merupakan kecepatan sudut $\\omega$, bukan percepatan sentripetal)."
    }
  },
  {
    id: "fis-kin-lengkung-sentripetal-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-sentripetal",
    category: "Percepatan Sentripetal",
    difficulty: "mudah",
    statement: "Sebuah batu diikat pada seutas tali ringan dengan panjang $R = 2\\text{ meter}$ kemudian diputar mendatar sehingga bergerak melingkar beraturan dengan kecepatan sudut tetap $\\omega = 5\\text{ rad/s}$. Besar percepatan sentripetal batu tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$50\\text{ m/s}^2$",
      "$20\\text{ m/s}^2$",
      "$10\\text{ m/s}^2$",
      "$25\\text{ m/s}^2$",
      "$100\\text{ m/s}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hubungan percepatan sentripetal dengan kecepatan sudut ($\\omega$) dan jari-jari ($R$) adalah:<br>$$a_s = \\omega^2 R$$",
      steps: "1. Substitusikan $\\omega = 5\\text{ rad/s}$ dan $R = 2\\text{ m}$:<br>$$a_s = (5)^2 \\times 2 = 25 \\times 2 = 50\\text{ m/s}^2$$",
      pitfalls: "Hanya mengalikan $\\omega \\times R = 5 \\times 2 = 10\\text{ m/s}$, yang merupakan kelajuan linier ($v$), bukan percepatan sentripetal."
    }
  },
  {
    id: "fis-kin-lengkung-sentripetal-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-sentripetal",
    category: "Percepatan Sentripetal",
    difficulty: "mudah",
    statement: "Jika kelajuan linier suatu objek yang bergerak melingkar beraturan digandakan menjadi 2 kali semula sementara jari-jari lintasan lingkarannya tetap, maka besar percepatan sentripetal objek tersebut menjadi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ kali}$ nilai semula",
      "$2\\text{ kali}$ nilai semula",
      "Tetap sama tidak berubah",
      "$\\frac{1}{2}\\text{ kali}$ nilai semula",
      "$\\frac{1}{4}\\text{ kali}$ nilai semula"
    ],
    correctIndex: 0,
    solution: {
      concept: "Percepatan sentripetal berbanding lurus dengan kuadrat kelajuan linier jika jari-jari lintasan konstan:<br>$$a_s = \\frac{v^2}{r} \\implies a_s \\propto v^2$$",
      steps: "1. Kecepatan linier baru: $v' = 2v$.<br>2. Percepatan sentripetal baru:<br>$$a_s' = \\frac{(2v)^2}{r} = \\frac{4v^2}{r} = 4 a_s$$",
      pitfalls: "Mengabaikan kuadrat kecepatan sehingga mengira percepatan hanya meningkat 2 kali lipat."
    }
  },
  {
    id: "fis-kin-lengkung-sentripetal-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-sentripetal",
    category: "Percepatan Sentripetal",
    difficulty: "mudah",
    statement: "Sebuah mobil sedan melaju melintasi tikungan jalan datar berbentuk busur lingkaran dengan jari-jari kelengkungan $R = 40\\text{ meter}$ pada kelajuan konstan $72\\text{ km/jam}$. Besar percepatan sentripetal yang dialami oleh mobil tersebut saat menikung adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ m/s}^2$",
      "$20\\text{ m/s}^2$",
      "$5\\text{ m/s}^2$",
      "$129{,}6\\text{ m/s}^2$",
      "$2{,}5\\text{ m/s}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Mobil yang berbelok pada tikungan melingkar mengalami percepatan sentripetal sebesar $a_s = \\frac{v^2}{R}$. Satuan kelajuan harus dikonversi terlebih dahulu ke satuan SI ($\text{m/s}$).",
      steps: "1. Konversikan kelajuan ke $\\text{m/s}$:<br>$$v = 72 \\times \\frac{5}{18} = 20\\text{ m/s}$$<br>2. Hitung percepatan sentripetal:<br>$$a_s = \\frac{v^2}{R} = \\frac{20^2}{40} = \\frac{400}{40} = 10\\text{ m/s}^2$$",
      pitfalls: "Langsung memasukkan nilai $72\\text{ km/jam}$ ke dalam rumus ($72^2 / 40 = 129{,}6$) tanpa konversi satuan ke $\\text{m/s}$."
    }
  }
];
