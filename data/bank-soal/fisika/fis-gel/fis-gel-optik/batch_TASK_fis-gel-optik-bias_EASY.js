/**
 * Batch Task: TASK_fis-gel-optik-bias_EASY
 * SubTopic: Pembiasan Cahaya (fis-gel-optik-bias)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-gel-optik-bias-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-bias",
    category: "Pembiasan Cahaya",
    difficulty: "mudah",
    statement: "Seberkas sinar merambat dari udara ($n_1 = 1$) masuk ke dalam balok kaca yang berindeks bias $n_2 = \\sqrt{2}$ dengan sudut datang $45^\\circ$. Besar sudut bias sinar di dalam balok kaca tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$15^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Hukum Snellius tentang pembiasan cahaya menyatakan perbandingan sudut datang dan sudut bias memenuhi persamaan:<br>$$n_1 \\sin(\\theta_1) = n_2 \\sin(\\theta_2)$$",
      steps: "1. Substitusikan nilai $n_1 = 1$, $\\theta_1 = 45^\\circ$, dan $n_2 = \\sqrt{2}$:<br>$$1 \\times \\sin(45^\\circ) = \\sqrt{2} \\times \\sin(\\theta_2)$$<br>2. Karena $\\sin(45^\\circ) = \\frac{1}{2}\\sqrt{2}$, maka:<br>$$\\frac{1}{2}\\sqrt{2} = \\sqrt{2} \\sin(\\theta_2) \\implies \\sin(\\theta_2) = \\frac{1}{2}$$<br>3. Nilai sudut yang memenuhi adalah $\\theta_2 = 30^\\circ$.<br>4. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Karena cahaya masuk dari medium renggang ke rapat ($n_2 > n_1$), sinar selalu dibelokkan mendekati garis normal sehingga $\\theta_2 < \\theta_1$."
    }
  },
  {
    id: "fis-gel-optik-bias-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-bias",
    category: "Pembiasan Cahaya",
    difficulty: "mudah",
    statement: "Cepat rambat cahaya di ruang hampa adalah $c = 3 \\times 10^8\\text{ m/s}$. Jika indeks bias suatu zat cair transparan adalah $n = 1{,}5$, kelajuan cahaya saat merambat di dalam zat cair tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}5 \\times 10^8\\text{ m/s}$",
      "$2{,}0 \\times 10^8\\text{ m/s}$",
      "$2{,}5 \\times 10^8\\text{ m/s}$",
      "$3{,}0 \\times 10^8\\text{ m/s}$",
      "$4{,}5 \\times 10^8\\text{ m/s}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Indeks bias mutlak suatu medium ($n$) didefinisikan sebagai perbandingan cepat rambat cahaya di ruang hampa ($c$) terhadap cepat rambat cahaya di dalam medium tersebut ($v$):<br>$$n = \\frac{c}{v} \\implies v = \\frac{c}{n}$$",
      steps: "1. Masukkan $c = 3 \\times 10^8\\text{ m/s}$ dan $n = 1{,}5$:<br>$$v = \\frac{3 \\times 10^8\\text{ m/s}}{1{,}5} = 2{,}0 \\times 10^8\\text{ m/s}$$<br>2. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Jangan mengalikan $c$ dengan $n$ ($3 \\times 1{,}5 = 4{,}5 \\times 10^8\\text{ m/s}$, opsi E). Kelajuan cahaya di dalam medium selalu lebih lambat daripada kelajuannya di ruang hampa ($v < c$)."
    }
  },
  {
    id: "fis-gel-optik-bias-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-bias",
    category: "Pembiasan Cahaya",
    difficulty: "mudah",
    statement: "Peristiwa pemantulan internal total (total internal reflection) pada antarmuka dua medium optik hanya dapat terjadi jika ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Sinar datang dari medium yang lebih rapat ke medium yang kurang rapat dengan sudut datang lebih besar daripada sudut kritis",
      "Sinar datang dari medium yang kurang rapat ke medium yang lebih rapat dengan sudut datang lebih besar daripada sudut kritis",
      "Sinar datang dari medium yang lebih rapat ke medium yang kurang rapat dengan sudut datang lebih kecil daripada sudut kritis",
      "Sinar datang tegak lurus dengan bidang batas kedua medium",
      "Sudut bias cahaya bernilai sama dengan $0^\\circ$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Syarat terjadinya pemantulan internal total (pemantulan sempurna):<br>1. Sinar merambat dari medium optik lebih rapat menuju medium optik kurang rapat ($n_1 > n_2$).<br>2. Sudut datang sinar ($i$) lebih besar daripada sudut kritis ($i > \\theta_k$). Pada kondisi ini, tidak ada sinar yang dibiaskan keluar melainkan seluruhnya dipantulkan kembali ke medium asal.",
      steps: "1. Analisis opsi A: Memenuhi kedua syarat mutlak pemantulan sempurna secara lengkap dan tepat.<br>2. Opsi B salah karena sinar datang dari medium kurang rapat tidak akan pernah mengalami pemantulan total.<br>3. Pilihan yang benar adalah A.",
      pitfalls: "Siswa sering melupakan syarat arah rambat medium: pemantulan total MUSTAHIL terjadi jika cahaya merambat dari medium renggang ke rapat (misalnya dari udara ke air)."
    }
  },
  {
    id: "fis-gel-optik-bias-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-bias",
    category: "Pembiasan Cahaya",
    difficulty: "mudah",
    statement: "Seberkas sinar merambat dari sebuah medium transparan dengan indeks bias $n_1 = 2$ menuju udara ($n_2 = 1$). Besar sudut kritis pembiasan pada batas antarmuka medium tersebut dan udara adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$75^\\circ$",
      "$90^\\circ$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Sudut kritis ($\\theta_k$) adalah sudut datang yang menghasilkan sudut bias tepat $\\theta_2 = 90^\\circ$. Berdasarkan hukum Snellius:<br>$$n_1 \\sin(\\theta_k) = n_2 \\sin(90^\\circ) \\implies \\sin(\\theta_k) = \\frac{n_2}{n_1}$$",
      steps: "1. Substitusikan $n_1 = 2$ dan $n_2 = 1$:<br>$$\\sin(\\theta_k) = \\frac{1}{2}$$<br>2. Nilai sudut yang memiliki $\\sin = \\frac{1}{2}$ pada kuadran I adalah $\\theta_k = 30^\\circ$.<br>3. Jawaban yang benar adalah pilihan A.",
      pitfalls: "Pastikan pembilang adalah indeks bias medium tujuan ($n_2$) dan penyebut adalah indeks bias medium asal ($n_1$). Rasio sinus tidak boleh lebih besar dari 1."
    }
  },
  {
    id: "fis-gel-optik-bias-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-bias",
    category: "Pembiasan Cahaya",
    difficulty: "mudah",
    statement: "Seekor ikan berenang di dasar kolam air jernih dengan kedalaman sebenarnya $2\\text{ meter}$. Seseorang melihat ikan tersebut dari atas permukaan air secara tegak lurus. Jika indeks bias air adalah $\\frac{4}{3}$ dan indeks bias udara adalah $1$, kedalaman semu ikan yang teramati oleh orang tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}2\\text{ m}$",
      "$1{,}5\\text{ m}$",
      "$1{,}8\\text{ m}$",
      "$2{,}4\\text{ m}$",
      "$2{,}67\\text{ m}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kedalaman semu ($h'$) saat suatu benda di dalam zat cair dilihat secara tegak lurus dari medium pengamat dirumuskan:<br>$$h' = h \\times \\frac{n_{\\text{mata}}}{n_{\\text{benda}}}$$",
      steps: "1. Identifikasi parameter: $h = 2\\text{ m}$, $n_{\\text{mata}} = n_{\\text{udara}} = 1$, dan $n_{\\text{benda}} = n_{\\text{air}} = \\frac{4}{3}$.<br>2. Hitung kedalaman semu:<br>$$h' = 2 \\times \\frac{1}{\\frac{4}{3}} = 2 \\times \\frac{3}{4} = 1{,}5\\text{ meter}$$<br>3. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Jika terbalik membagi indeks bias, diperoleh $2 \\times \\frac{4}{3} = 2{,}67\\text{ m}$ (opsi E). Benda di dalam air selalu tampak lebih dangkal daripada aslinya ($h' < h$)."
    }
  }
];
