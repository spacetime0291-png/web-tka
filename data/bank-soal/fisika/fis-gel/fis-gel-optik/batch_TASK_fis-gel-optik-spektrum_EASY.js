/**
 * Batch Task: TASK_fis-gel-optik-spektrum_EASY
 * SubTopic: Spektrum Elektromagnetik (fis-gel-optik-spektrum)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-gel-optik-spektrum-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-spektrum",
    category: "Spektrum Elektromagnetik",
    difficulty: "mudah",
    statement: "Urutan spektrum gelombang elektromagnetik dari frekuensi paling rendah ke frekuensi paling tinggi (panjang gelombang paling besar ke paling kecil) yang benar adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Gelombang radio, gelombang mikro, sinar inframerah, cahaya tampak, sinar ultraviolet, sinar-X, sinar gamma",
      "Sinar gamma, sinar-X, sinar ultraviolet, cahaya tampak, sinar inframerah, gelombang mikro, gelombang radio",
      "Gelombang radio, sinar inframerah, gelombang mikro, cahaya tampak, sinar ultraviolet, sinar-X, sinar gamma",
      "Sinar ultraviolet, cahaya tampak, sinar inframerah, sinar-X, gelombang mikro, gelombang radio, sinar gamma",
      "Gelombang mikro, gelombang radio, sinar inframerah, cahaya tampak, sinar ultraviolet, sinar gamma, sinar-X"
    ],
    correctIndex: 0,
    solution: {
      concept: "Spektrum gelombang elektromagnetik dari frekuensi terendah (energi terendah, $\\lambda$ terpanjang) ke frekuensi tertinggi (energi tertinggi, $\\lambda$ terpendek):<br>Radio $\\to$ Mikro $\\to$ Inframerah $\\to$ Cahaya Tampak $\\to$ Ultraviolet $\\to$ Sinar-X $\\to$ Sinar Gamma.<br>Mnemonic yang populer: <strong>RA-MI-IN-TAM-UL-X-GA</strong>.",
      steps: "1. Tinjau urutan frekuensi dari terendah ke tertinggi: Gelombang radio memiliki frekuensi terendah ($10^4 - 10^9\\text{ Hz}$) dan sinar gamma memiliki frekuensi tertinggi ($> 10^{20}\\text{ Hz}$).<br>2. Periksa pilihan: Urutan pada opsi A tepat sesuai dengan kaidah spektrum gelombang elektromagnetik.<br>3. Pilihan B adalah urutan terbalik (frekuensi tertinggi ke terendah).",
      pitfalls: "Siswa sering tertukar antara posisi gelombang radio dan gelombang mikro, atau membaca terbalik antara urutan frekuensi dengan urutan panjang gelombang."
    }
  },
  {
    id: "fis-gel-optik-spektrum-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-spektrum",
    category: "Spektrum Elektromagnetik",
    difficulty: "mudah",
    statement: "Perhatikan pernyataan-pernyataan mengenai sifat umum gelombang elektromagnetik berikut:\n(1) Merupakan gelombang transversal yang tersusun atas osilasi medan listrik dan medan magnet yang saling tegak lurus.\n(2) Dapat merambat melalui ruang hampa udara (vakum) tanpa memerlukan medium materi.\n(3) Dibelokkan oleh medan listrik statis dan medan magnet statis karena memiliki muatan.\n(4) Memiliki kelajuan konstan di ruang hampa sebesar $c = 3 \\times 10^8\\text{ m/s}$.\nPernyataan yang BENAR adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "(1), (2), dan (3)",
      "(1), (2), dan (4)",
      "(1) dan (3) saja",
      "(2) dan (4) saja",
      "(1), (2), (3), dan (4)"
    ],
    correctIndex: 1,
    solution: {
      concept: "Karakteristik dasar gelombang elektromagnetik:<br>1. Gelombang transversal (vektor $\\vec{E}$ tegak lurus $\\vec{B}$ dan tegak lurus arah rambat $\\vec{k}$).<br>2. Tidak memerlukan medium rambat (merambat di vakum).<br>3. Tidak bermuatan listrik (foton netral), sehingga <strong>TIDAK dibelokkan</strong> oleh medan listrik maupun medan magnet.<br>4. Kelajuan di ruang hampa adalah $c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3 \\times 10^8\\text{ m/s}$.",
      steps: "1. Analisis pernyataan (1): Benar, medan listrik dan magnet saling tegak lurus dan transversal.<br>2. Analisis pernyataan (2): Benar, dapat merambat di ruang hampa.<br>3. Analisis pernyataan (3): Salah, gelombang elektromagnetik tidak bermuatan sehingga tidak dipengaruhi medan listrik/magnet.<br>4. Analisis pernyataan (4): Benar, kelajuan konstan $3 \\times 10^8\\text{ m/s}$ di vakum.<br>5. Pernyataan yang benar adalah (1), (2), dan (4), yaitu pilihan B.",
      pitfalls: "Siswa sering mengira karena gelombang EM terdiri dari medan listrik dan magnet, maka gelombangnya dapat dibelokkan oleh medan listrik/magnet. Partikel foton tidak memiliki muatan listrik neto sehingga lintasannya lurus tak terbelokkan."
    }
  },
  {
    id: "fis-gel-optik-spektrum-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-spektrum",
    category: "Spektrum Elektromagnetik",
    difficulty: "mudah",
    statement: "Sebuah stasiun radio FM memancarkan siaran pada frekuensi $f = 100\\text{ MHz}$ ($1\\text{ MHz} = 10^6\\text{ Hz}$). Jika cepat rambat gelombang elektromagnetik di udara adalah $c = 3 \\times 10^8\\text{ m/s}$, panjang gelombang dari siaran radio tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}3\\text{ m}$",
      "$3{,}0\\text{ m}$",
      "$30\\text{ m}$",
      "$300\\text{ m}$",
      "$3000\\text{ m}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Hubungan mendasar antara cepat rambat ($c$), frekuensi ($f$), dan panjang gelombang ($\\lambda$) gelombang elektromagnetik dirumuskan:<br>$$c = \\lambda \\times f \\implies \\lambda = \\frac{c}{f}$$",
      steps: "1. Konversikan frekuensi ke Hertz: $f = 100\\text{ MHz} = 100 \\times 10^6\\text{ Hz} = 10^8\\text{ Hz}$.<br>2. Hitung panjang gelombang:<br>$$\\lambda = \\frac{c}{f} = \\frac{3 \\times 10^8\\text{ m/s}}{10^8\\text{ Hz}} = 3{,}0\\text{ meter}$$<br>3. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Pastikan selalu mengonversi satuan megaHertz ($1\\text{ MHz} = 10^6\\text{ Hz}$) sebelum membagi dengan kelajuan cahaya."
    }
  },
  {
    id: "fis-gel-optik-spektrum-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-spektrum",
    category: "Spektrum Elektromagnetik",
    difficulty: "mudah",
    statement: "Jenis gelombang elektromagnetik yang dimanfaatkan pada teknologi oven untuk memanaskan makanan serta digunakan pada sistem radar navigasi pemandu pesawat terbang adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Sinar inframerah",
      "Gelombang mikro",
      "Sinar ultraviolet",
      "Sinar-X",
      "Gelombang radio AM"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gelombang mikro (microwaves) memiliki rentang frekuensi sekitar $10^9 - 10^{11}\\text{ Hz}$. Gelombang mikro diserap dengan sangat efisien oleh molekul air dan lemak pada makanan sehingga menimbulkan efek resonansi rotasi termal (pemanasan oven microwave). Selain itu, panjang gelombangnya yang relatif pendek membuatnya ideal untuk pemetaan radar (Radio Detection and Ranging).",
      steps: "1. Analisis pemanfaatan microwave: Microwave oven memanfaatkan frekuensi $\\approx 2{,}45\\text{ GHz}$ (gelombang mikro).<br>2. Analisis teknologi radar: Menggunakan gelombang mikro karena pemantulannya akurat untuk mendeteksi posisi target.<br>3. Pilihan yang tepat adalah opsi B.",
      pitfalls: "Siswa sering tertukar antara gelombang mikro dan sinar inframerah. Sinar inframerah menghasilkan efek panas radiasi permukaan, tetapi pemanasan oven microwave dan radar secara spesifik menggunakan gelombang mikro."
    }
  },
  {
    id: "fis-gel-optik-spektrum-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-spektrum",
    category: "Spektrum Elektromagnetik",
    difficulty: "mudah",
    statement: "Di antara spektrum warna cahaya tampak berikut, warna cahaya yang memiliki frekuensi paling tinggi (dan panjang gelombang paling pendek) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Merah",
      "Kuning",
      "Hijau",
      "Biru",
      "Ungu"
    ],
    correctIndex: 4,
    solution: {
      concept: "Spektrum cahaya tampak terbentang dari panjang gelombang $\\approx 700\\text{ nm}$ (merah) hingga $\\approx 400\\text{ nm}$ (ungu). Karena frekuensi berbanding terbalik dengan panjang gelombang ($f = c/\\lambda$):<br>Merah memiliki $\\lambda$ terpanjang dan $f$ terendah.<br>Ungu memiliki $\\lambda$ terpendek dan $f$ tertinggi.",
      steps: "1. Urutan warna cahaya tampak dari frekuensi terendah ke tertinggi: Merah $\\to$ Jingga $\\to$ Kuning $\\to$ Hijau $\\to$ Biru $\\to$ Nila $\\to$ Ungu (MEJIKUHIBINIU).<br>2. Warna dengan frekuensi paling tinggi adalah Ungu.<br>3. Jawaban yang benar adalah pilihan E.",
      pitfalls: "Jangan terbalik antara panjang gelombang dan frekuensi. Merah memiliki panjang gelombang terbesar, sedangkan ungu memiliki frekuensi terbesar dan energi foton terbesar."
    }
  }
];
