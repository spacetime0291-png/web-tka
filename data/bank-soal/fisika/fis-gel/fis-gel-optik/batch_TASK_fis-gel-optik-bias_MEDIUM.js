/**
 * Batch Task: TASK_fis-gel-optik-bias_MEDIUM
 * SubTopic: Pembiasan Cahaya (fis-gel-optik-bias)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-gel-optik-bias-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-bias",
    category: "Pembiasan Cahaya",
    difficulty: "sedang",
    statement: "Sebuah prisma kaca yang berada di udara memiliki sudut pembias (sudut apeks) $\\beta = 60^\\circ$ dan indeks bias $n = \\sqrt{2}$. Besar sudut deviasi minimum ($\\delta_m$) yang dialami oleh seberkas sinar monokromatik saat melewati prisma tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$15^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$75^\\circ$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Sudut deviasi minimum ($\\delta_m$) pada prisma dengan sudut pembias besar memenuhi persamaan Snellius prisma:<br>$$\\sin\\left(\\frac{\\delta_m + \\beta}{2}\\right) = \\frac{n_{\\text{prisma}}}{n_{\\text{medium}}} \\sin\\left(\\frac{\\beta}{2}\\right)$$",
      steps: "1. Diketahui $\\beta = 60^\\circ$, $n_{\\text{prisma}} = \\sqrt{2}$, dan $n_{\\text{medium}} = 1$ (udara).<br>2. Masukkan ke dalam rumus deviasi minimum:<br>$$\\sin\\left(\\frac{\\delta_m + 60^\\circ}{2}\\right) = \\sqrt{2} \\times \\sin(30^\\circ)$$<br>3. Karena $\\sin(30^\\circ) = \\frac{1}{2}$, maka:<br>$$\\sin\\left(\\frac{\\delta_m + 60^\\circ}{2}\\right) = \\sqrt{2} \\times \\frac{1}{2} = \\frac{1}{2}\\sqrt{2}$$<br>4. Diperoleh sudut:<br>$$\\frac{\\delta_m + 60^\\circ}{2} = 45^\\circ \\implies \\delta_m + 60^\\circ = 90^\\circ \\implies \\delta_m = 30^\\circ$$<br>5. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Jangan menggunakan rumus pendekatan sudut kecil $\\delta_m \\approx (n - 1)\\beta$ karena rumus tersebut hanya berlaku jika sudut pembias $\\beta \\le 15^\\circ$. Untuk $\\beta = 60^\\circ$ wajib menggunakan persamaan eksak sinus."
    }
  },
  {
    id: "fis-gel-optik-bias-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-bias",
    category: "Pembiasan Cahaya",
    difficulty: "sedang",
    statement: "Seberkas sinar datang dari udara menuju sebuah keping kaca plan paralel yang memiliki ketebalan $d = 6\\text{ cm}$ dan indeks bias $n = \\sqrt{3}$ dengan sudut datang $i = 60^\\circ$. Besar pergeseran lateral sinar ($t$) setelah keluar kembali menembus keping kaca tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\sqrt{3}\\text{ cm}$",
      "$2\\sqrt{3}\\text{ cm}$",
      "$3\\sqrt{3}\\text{ cm}$",
      "$4\\sqrt{3}\\text{ cm}$",
      "$6\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Sinar yang melewati kaca plan paralel mengalami pergeseran lateral ($t$) sejajar sinar datang yang dirumuskan:<br>$$t = d \\times \\frac{\\sin(i - r)}{\\cos(r)}$$<br>dengan sudut bias $r$ ditentukan melalui hukum Snellius: $n_1 \\sin(i) = n_2 \\sin(r)$.",
      steps: "1. Hitung sudut bias $r$ di dalam kaca:<br>$$1 \\times \\sin(60^\\circ) = \\sqrt{3} \\times \\sin(r) \\implies \\frac{1}{2}\\sqrt{3} = \\sqrt{3} \\sin(r) \\implies \\sin(r) = \\frac{1}{2} \\implies r = 30^\\circ$$<br>2. Hitung selisih sudut: $i - r = 60^\\circ - 30^\\circ = 30^\\circ$.<br>3. Hitung pergeseran lateral sinar:<br>$$t = 6 \\times \\frac{\\sin(30^\\circ)}{\\cos(30^\\circ)} = 6 \\times \\tan(30^\\circ) = 6 \\times \\frac{1}{\\sqrt{3}} = 2\\sqrt{3}\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Pastikan penyebutnya adalah $\\cos(r)$, bukan $\\cos(i)$. Menghubungkan $\\sin(30^\\circ)/\\cos(30^\\circ)$ menjadi $\\tan(30^\\circ)$ mempercepat perhitungan dengan rapi."
    }
  },
  {
    id: "fis-gel-optik-bias-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-bias",
    category: "Pembiasan Cahaya",
    difficulty: "sedang",
    statement: "Sebuah kabel serat optik silinder terdiri dari inti (core) dengan indeks bias $n_1 = 1{,}5$ dan selubung (cladding) dengan indeks bias $n_2 = 1{,}2$. Agar sinyal cahaya dapat terpandu sempurna sepanjang kabel melalui pemantulan internal total, sudut datang sinar pada antarmuka inti-selubung harus lebih besar daripada sudut kritis $\\theta_k$ dengan nilai $\\sin(\\theta_k)$ sebesar ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}60$",
      "$0{,}75$",
      "$0{,}80$",
      "$0{,}85$",
      "$0{,}90$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Kondisi transmisi serat optik bergantung pada pemantulan internal total di dinding batas antara inti ($n_1$) dan selubung ($n_2$). Nilai sinus sudut kritis pada antarmuka inti-selubung dirumuskan:<br>$$\\sin(\\theta_k) = \\frac{n_2}{n_1}$$",
      steps: "1. Identifikasi indeks bias: inti $n_1 = 1{,}5$ dan selubung $n_2 = 1{,}2$.<br>2. Masukkan ke rumus sudut kritis:<br>$$\\sin(\\theta_k) = \\frac{1{,}2}{1{,}5} = \\frac{12}{15} = \\frac{4}{5} = 0{,}80$$<br>3. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Syarat serat optik selalu menuntut $n_{\\text{inti}} > n_{\\text{selubung}}$ agar pemantulan total dapat terjadi. Nilai $\\sin(\\theta_k)$ selalu bernilai $\\le 1$."
    }
  },
  {
    id: "fis-gel-optik-bias-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-bias",
    category: "Pembiasan Cahaya",
    difficulty: "sedang",
    statement: "Sebuah benda diletakkan di udara ($n_1 = 1$) pada jarak $30\\text{ cm}$ di depan permukaan cembung sebuah balok kaca pejal ($n_2 = 1{,}5$) yang memiliki jari-jari kelengkungan $R = +10\\text{ cm}$. Jarak bayangan yang terbentuk di dalam kaca diukur dari puncak permukaan lengkung tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30\\text{ cm}$",
      "$45\\text{ cm}$",
      "$60\\text{ cm}$",
      "$75\\text{ cm}$",
      "$90\\text{ cm}$"
    ],
    correctIndex: 4,
    solution: {
      concept: "Persamaan pembiasan pada permukaan lengkung tunggal (permukaan sferis):<br>$$\\frac{n_1}{s} + \\frac{n_2}{s'} = \\frac{n_2 - n_1}{R}$$",
      steps: "1. Identifikasi variabel: $n_1 = 1$, $n_2 = 1{,}5$, $s = +30\\text{ cm}$, dan permukaan cembung menghadap benda $\\implies R = +10\\text{ cm}$.<br>2. Substitusikan ke persamaan pembiasan sferis:<br>$$\\frac{1}{30} + \\frac{1{,}5}{s'} = \\frac{1{,}5 - 1}{10} = \\frac{0{,}5}{10} = \\frac{1}{20}$$<br>3. Pindahkan suku ke ruas kanan:<br>$$\\frac{1{,}5}{s'} = \\frac{1}{20} - \\frac{1}{30} = \\frac{3 - 2}{60} = \\frac{1}{60}$$<br>4. Kalikan silang untuk mencari $s'$:<br>$$s' = 1{,}5 \\times 60 = 90\\text{ cm}$$<br>5. Jawaban yang benar adalah pilihan E.",
      pitfalls: "Perhatikan koefisien indeks bias di atas pembilang: $n_1$ untuk jarak benda ($s$) dan $n_2$ untuk jarak bayangan ($s'$). Jangan sampai menyamakan dengan rumus cermin/lensa tipis $\\frac{1}{s} + \\frac{1}{s'} = \\frac{1}{f}$."
    }
  },
  {
    id: "fis-gel-optik-bias-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-bias",
    category: "Pembiasan Cahaya",
    difficulty: "sedang",
    statement: "Sebuah bejana kaca diisi dengan dua lapisan cairan bening yang tidak saling bercampur. Lapisan bawah adalah cairan A dengan ketebalan $12\\text{ cm}$ dan indeks bias $n_A = 1{,}5$. Di atasnya terdapat lapisan cairan B dengan ketebalan $8\\text{ cm}$ dan indeks bias $n_B = \\frac{4}{3}$. Di dasar bejana terletak sebuah koin logam. Jika koin dilihat dari udara ($n_u = 1$) tepat tegak lurus dari atas permukaan, kedalaman koin tampak pada kedalaman semu sebesar ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ cm}$",
      "$12\\text{ cm}$",
      "$14\\text{ cm}$",
      "$16\\text{ cm}$",
      "$18\\text{ cm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Kedalaman semu total ($h'$) untuk sistem multi-lapisan zat cair dilihat tegak lurus dari udara ($n_u = 1$) adalah penjumlahan kedalaman semu masing-masing lapisan:<br>$$h' = \\sum \\frac{h_i}{n_i} = \\frac{h_B}{n_B} + \\frac{h_A}{n_A}$$",
      steps: "1. Hitung kontribusi lapisan atas (cairan B):<br>$$h_B' = \\frac{8\\text{ cm}}{\\frac{4}{3}} = 8 \\times \\frac{3}{4} = 6\\text{ cm}$$<br>2. Hitung kontribusi lapisan bawah (cairan A):<br>$$h_A' = \\frac{12\\text{ cm}}{1{,}5} = \\frac{12}{\\frac{3}{2}} = 12 \\times \\frac{2}{3} = 8\\text{ cm}$$<br>3. Jumlahkan kedalaman semu total dari permukaan atas cairan B:<br>$$h' = h_B' + h_A' = 6\\text{ cm} + 8\\text{ cm} = 14\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Kedalaman fisik sebenarnya dari koin adalah $12 + 8 = 20\\text{ cm}$. Kedalaman semu koin tampak terangkat menjadi $14\\text{ cm}$ dari permukaan."
    }
  }
];
