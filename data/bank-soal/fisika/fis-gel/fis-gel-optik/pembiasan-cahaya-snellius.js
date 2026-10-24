/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Cahaya & Optik (fis-gel-optik)
 * Sub-Bab: Pembiasan Cahaya (Hukum Snellius) (fis-gel-optik-bias)
 * Slug: pembiasan-cahaya-snellius
 * Indikator: Indeks bias medium, hukum pembiasan (n_1 sin theta_1 = n_2 sin theta_2), dan sudut kritis.
 * 
 * Total Butir Soal: 13 (Mudah: 7, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-optik-bias";
  const subTopicSlug = "pembiasan-cahaya-snellius";
  const questions = [
  {
    "id": "fis-gel-optik-bias-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Pembiasan Cahaya",
    "difficulty": "mudah",
    "statement": "Seberkas sinar merambat dari udara ($n_1 = 1$) masuk ke dalam balok kaca yang berindeks bias $n_2 = \\sqrt{2}$ dengan sudut datang $45^\\circ$. Besar sudut bias sinar di dalam balok kaca tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$15^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hukum Snellius tentang pembiasan cahaya menyatakan perbandingan sudut datang dan sudut bias memenuhi persamaan:<br>$$n_1 \\sin(\\theta_1) = n_2 \\sin(\\theta_2)$$",
      "steps": "1. Substitusikan nilai $n_1 = 1$, $\\theta_1 = 45^\\circ$, dan $n_2 = \\sqrt{2}$:<br>$$1 \\times \\sin(45^\\circ) = \\sqrt{2} \\times \\sin(\\theta_2)$$<br>2. Karena $\\sin(45^\\circ) = \\frac{1}{2}\\sqrt{2}$, maka:<br>$$\\frac{1}{2}\\sqrt{2} = \\sqrt{2} \\sin(\\theta_2) \\implies \\sin(\\theta_2) = \\frac{1}{2}$$<br>3. Nilai sudut yang memenuhi adalah $\\theta_2 = 30^\\circ$.<br>4. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Karena cahaya masuk dari medium renggang ke rapat ($n_2 > n_1$), sinar selalu dibelokkan mendekati garis normal sehingga $\\theta_2 < \\theta_1$."
    },
    "subTopicSlug": "pembiasan-cahaya-snellius",
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-bias-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Pembiasan Cahaya",
    "difficulty": "mudah",
    "statement": "Cepat rambat cahaya di ruang hampa adalah $c = 3 \\times 10^8\\text{ m/s}$. Jika indeks bias suatu zat cair transparan adalah $n = 1{,}5$, kelajuan cahaya saat merambat di dalam zat cair tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}5 \\times 10^8\\text{ m/s}$",
      "$2{,}0 \\times 10^8\\text{ m/s}$",
      "$2{,}5 \\times 10^8\\text{ m/s}$",
      "$3{,}0 \\times 10^8\\text{ m/s}$",
      "$4{,}5 \\times 10^8\\text{ m/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Indeks bias mutlak suatu medium ($n$) didefinisikan sebagai perbandingan cepat rambat cahaya di ruang hampa ($c$) terhadap cepat rambat cahaya di dalam medium tersebut ($v$):<br>$$n = \\frac{c}{v} \\implies v = \\frac{c}{n}$$",
      "steps": "1. Masukkan $c = 3 \\times 10^8\\text{ m/s}$ dan $n = 1{,}5$:<br>$$v = \\frac{3 \\times 10^8\\text{ m/s}}{1{,}5} = 2{,}0 \\times 10^8\\text{ m/s}$$<br>2. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Jangan mengalikan $c$ dengan $n$ ($3 \\times 1{,}5 = 4{,}5 \\times 10^8\\text{ m/s}$, opsi E). Kelajuan cahaya di dalam medium selalu lebih lambat daripada kelajuannya di ruang hampa ($v < c$)."
    },
    "subTopicSlug": "pembiasan-cahaya-snellius",
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-bias-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Pembiasan Cahaya",
    "difficulty": "mudah",
    "statement": "Peristiwa pemantulan internal total (total internal reflection) pada antarmuka dua medium optik hanya dapat terjadi jika ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Sinar datang dari medium yang lebih rapat ke medium yang kurang rapat dengan sudut datang lebih besar daripada sudut kritis",
      "Sinar datang dari medium yang kurang rapat ke medium yang lebih rapat dengan sudut datang lebih besar daripada sudut kritis",
      "Sinar datang dari medium yang lebih rapat ke medium yang kurang rapat dengan sudut datang lebih kecil daripada sudut kritis",
      "Sinar datang tegak lurus dengan bidang batas kedua medium",
      "Sudut bias cahaya bernilai sama dengan $0^\\circ$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Syarat terjadinya pemantulan internal total (pemantulan sempurna):<br>1. Sinar merambat dari medium optik lebih rapat menuju medium optik kurang rapat ($n_1 > n_2$).<br>2. Sudut datang sinar ($i$) lebih besar daripada sudut kritis ($i > \\theta_k$). Pada kondisi ini, tidak ada sinar yang dibiaskan keluar melainkan seluruhnya dipantulkan kembali ke medium asal.",
      "steps": "1. Analisis opsi A: Memenuhi kedua syarat mutlak pemantulan sempurna secara lengkap dan tepat.<br>2. Opsi B salah karena sinar datang dari medium kurang rapat tidak akan pernah mengalami pemantulan total.<br>3. Pilihan yang benar adalah A.",
      "pitfalls": "Siswa sering melupakan syarat arah rambat medium: pemantulan total MUSTAHIL terjadi jika cahaya merambat dari medium renggang ke rapat (misalnya dari udara ke air)."
    },
    "subTopicSlug": "pembiasan-cahaya-snellius",
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-bias-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Pembiasan Cahaya",
    "difficulty": "mudah",
    "statement": "Seberkas sinar merambat dari sebuah medium transparan dengan indeks bias $n_1 = 2$ menuju udara ($n_2 = 1$). Besar sudut kritis pembiasan pada batas antarmuka medium tersebut dan udara adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$75^\\circ$",
      "$90^\\circ$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Sudut kritis ($\\theta_k$) adalah sudut datang yang menghasilkan sudut bias tepat $\\theta_2 = 90^\\circ$. Berdasarkan hukum Snellius:<br>$$n_1 \\sin(\\theta_k) = n_2 \\sin(90^\\circ) \\implies \\sin(\\theta_k) = \\frac{n_2}{n_1}$$",
      "steps": "1. Substitusikan $n_1 = 2$ dan $n_2 = 1$:<br>$$\\sin(\\theta_k) = \\frac{1}{2}$$<br>2. Nilai sudut yang memiliki $\\sin = \\frac{1}{2}$ pada kuadran I adalah $\\theta_k = 30^\\circ$.<br>3. Jawaban yang benar adalah pilihan A.",
      "pitfalls": "Pastikan pembilang adalah indeks bias medium tujuan ($n_2$) dan penyebut adalah indeks bias medium asal ($n_1$). Rasio sinus tidak boleh lebih besar dari 1."
    },
    "subTopicSlug": "pembiasan-cahaya-snellius",
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-bias-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Pembiasan Cahaya",
    "difficulty": "mudah",
    "statement": "Seekor ikan berenang di dasar kolam air jernih dengan kedalaman sebenarnya $2\\text{ meter}$. Seseorang melihat ikan tersebut dari atas permukaan air secara tegak lurus. Jika indeks bias air adalah $\\frac{4}{3}$ dan indeks bias udara adalah $1$, kedalaman semu ikan yang teramati oleh orang tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}2\\text{ m}$",
      "$1{,}5\\text{ m}$",
      "$1{,}8\\text{ m}$",
      "$2{,}4\\text{ m}$",
      "$2{,}67\\text{ m}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Kedalaman semu ($h'$) saat suatu benda di dalam zat cair dilihat secara tegak lurus dari medium pengamat dirumuskan:<br>$$h' = h \\times \\frac{n_{\\text{mata}}}{n_{\\text{benda}}}$$",
      "steps": "1. Identifikasi parameter: $h = 2\\text{ m}$, $n_{\\text{mata}} = n_{\\text{udara}} = 1$, dan $n_{\\text{benda}} = n_{\\text{air}} = \\frac{4}{3}$.<br>2. Hitung kedalaman semu:<br>$$h' = 2 \\times \\frac{1}{\\frac{4}{3}} = 2 \\times \\frac{3}{4} = 1{,}5\\text{ meter}$$<br>3. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Jika terbalik membagi indeks bias, diperoleh $2 \\times \\frac{4}{3} = 2{,}67\\text{ m}$ (opsi E). Benda di dalam air selalu tampak lebih dangkal daripada aslinya ($h' < h$)."
    },
    "subTopicSlug": "pembiasan-cahaya-snellius",
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-bias-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Pembiasan Cahaya",
    "difficulty": "sedang",
    "statement": "Sebuah prisma kaca yang berada di udara memiliki sudut pembias (sudut apeks) $\\beta = 60^\\circ$ dan indeks bias $n = \\sqrt{2}$. Besar sudut deviasi minimum ($\\delta_m$) yang dialami oleh seberkas sinar monokromatik saat melewati prisma tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$15^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$75^\\circ$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Sudut deviasi minimum ($\\delta_m$) pada prisma dengan sudut pembias besar memenuhi persamaan Snellius prisma:<br>$$\\sin\\left(\\frac{\\delta_m + \\beta}{2}\\right) = \\frac{n_{\\text{prisma}}}{n_{\\text{medium}}} \\sin\\left(\\frac{\\beta}{2}\\right)$$",
      "steps": "1. Diketahui $\\beta = 60^\\circ$, $n_{\\text{prisma}} = \\sqrt{2}$, dan $n_{\\text{medium}} = 1$ (udara).<br>2. Masukkan ke dalam rumus deviasi minimum:<br>$$\\sin\\left(\\frac{\\delta_m + 60^\\circ}{2}\\right) = \\sqrt{2} \\times \\sin(30^\\circ)$$<br>3. Karena $\\sin(30^\\circ) = \\frac{1}{2}$, maka:<br>$$\\sin\\left(\\frac{\\delta_m + 60^\\circ}{2}\\right) = \\sqrt{2} \\times \\frac{1}{2} = \\frac{1}{2}\\sqrt{2}$$<br>4. Diperoleh sudut:<br>$$\\frac{\\delta_m + 60^\\circ}{2} = 45^\\circ \\implies \\delta_m + 60^\\circ = 90^\\circ \\implies \\delta_m = 30^\\circ$$<br>5. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Jangan menggunakan rumus pendekatan sudut kecil $\\delta_m \\approx (n - 1)\\beta$ karena rumus tersebut hanya berlaku jika sudut pembias $\\beta \\le 15^\\circ$. Untuk $\\beta = 60^\\circ$ wajib menggunakan persamaan eksak sinus."
    },
    "subTopicSlug": "pembiasan-cahaya-snellius",
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-bias-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Pembiasan Cahaya",
    "difficulty": "sedang",
    "statement": "Seberkas sinar datang dari udara menuju sebuah keping kaca plan paralel yang memiliki ketebalan $d = 6\\text{ cm}$ dan indeks bias $n = \\sqrt{3}$ dengan sudut datang $i = 60^\\circ$. Besar pergeseran lateral sinar ($t$) setelah keluar kembali menembus keping kaca tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\sqrt{3}\\text{ cm}$",
      "$2\\sqrt{3}\\text{ cm}$",
      "$3\\sqrt{3}\\text{ cm}$",
      "$4\\sqrt{3}\\text{ cm}$",
      "$6\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Sinar yang melewati kaca plan paralel mengalami pergeseran lateral ($t$) sejajar sinar datang yang dirumuskan:<br>$$t = d \\times \\frac{\\sin(i - r)}{\\cos(r)}$$<br>dengan sudut bias $r$ ditentukan melalui hukum Snellius: $n_1 \\sin(i) = n_2 \\sin(r)$.",
      "steps": "1. Hitung sudut bias $r$ di dalam kaca:<br>$$1 \\times \\sin(60^\\circ) = \\sqrt{3} \\times \\sin(r) \\implies \\frac{1}{2}\\sqrt{3} = \\sqrt{3} \\sin(r) \\implies \\sin(r) = \\frac{1}{2} \\implies r = 30^\\circ$$<br>2. Hitung selisih sudut: $i - r = 60^\\circ - 30^\\circ = 30^\\circ$.<br>3. Hitung pergeseran lateral sinar:<br>$$t = 6 \\times \\frac{\\sin(30^\\circ)}{\\cos(30^\\circ)} = 6 \\times \\tan(30^\\circ) = 6 \\times \\frac{1}{\\sqrt{3}} = 2\\sqrt{3}\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Pastikan penyebutnya adalah $\\cos(r)$, bukan $\\cos(i)$. Menghubungkan $\\sin(30^\\circ)/\\cos(30^\\circ)$ menjadi $\\tan(30^\\circ)$ mempercepat perhitungan dengan rapi."
    },
    "subTopicSlug": "pembiasan-cahaya-snellius",
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-bias-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Pembiasan Cahaya",
    "difficulty": "sedang",
    "statement": "Sebuah kabel serat optik silinder terdiri dari inti (core) dengan indeks bias $n_1 = 1{,}5$ dan selubung (cladding) dengan indeks bias $n_2 = 1{,}2$. Agar sinyal cahaya dapat terpandu sempurna sepanjang kabel melalui pemantulan internal total, sudut datang sinar pada antarmuka inti-selubung harus lebih besar daripada sudut kritis $\\theta_k$ dengan nilai $\\sin(\\theta_k)$ sebesar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}60$",
      "$0{,}75$",
      "$0{,}80$",
      "$0{,}85$",
      "$0{,}90$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Kondisi transmisi serat optik bergantung pada pemantulan internal total di dinding batas antara inti ($n_1$) dan selubung ($n_2$). Nilai sinus sudut kritis pada antarmuka inti-selubung dirumuskan:<br>$$\\sin(\\theta_k) = \\frac{n_2}{n_1}$$",
      "steps": "1. Identifikasi indeks bias: inti $n_1 = 1{,}5$ dan selubung $n_2 = 1{,}2$.<br>2. Masukkan ke rumus sudut kritis:<br>$$\\sin(\\theta_k) = \\frac{1{,}2}{1{,}5} = \\frac{12}{15} = \\frac{4}{5} = 0{,}80$$<br>3. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Syarat serat optik selalu menuntut $n_{\\text{inti}} > n_{\\text{selubung}}$ agar pemantulan total dapat terjadi. Nilai $\\sin(\\theta_k)$ selalu bernilai $\\le 1$."
    },
    "subTopicSlug": "pembiasan-cahaya-snellius",
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-bias-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Pembiasan Cahaya",
    "difficulty": "sedang",
    "statement": "Sebuah benda diletakkan di udara ($n_1 = 1$) pada jarak $30\\text{ cm}$ di depan permukaan cembung sebuah balok kaca pejal ($n_2 = 1{,}5$) yang memiliki jari-jari kelengkungan $R = +10\\text{ cm}$. Jarak bayangan yang terbentuk di dalam kaca diukur dari puncak permukaan lengkung tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ cm}$",
      "$45\\text{ cm}$",
      "$60\\text{ cm}$",
      "$75\\text{ cm}$",
      "$90\\text{ cm}$"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Persamaan pembiasan pada permukaan lengkung tunggal (permukaan sferis):<br>$$\\frac{n_1}{s} + \\frac{n_2}{s'} = \\frac{n_2 - n_1}{R}$$",
      "steps": "1. Identifikasi variabel: $n_1 = 1$, $n_2 = 1{,}5$, $s = +30\\text{ cm}$, dan permukaan cembung menghadap benda $\\implies R = +10\\text{ cm}$.<br>2. Substitusikan ke persamaan pembiasan sferis:<br>$$\\frac{1}{30} + \\frac{1{,}5}{s'} = \\frac{1{,}5 - 1}{10} = \\frac{0{,}5}{10} = \\frac{1}{20}$$<br>3. Pindahkan suku ke ruas kanan:<br>$$\\frac{1{,}5}{s'} = \\frac{1}{20} - \\frac{1}{30} = \\frac{3 - 2}{60} = \\frac{1}{60}$$<br>4. Kalikan silang untuk mencari $s'$:<br>$$s' = 1{,}5 \\times 60 = 90\\text{ cm}$$<br>5. Jawaban yang benar adalah pilihan E.",
      "pitfalls": "Perhatikan koefisien indeks bias di atas pembilang: $n_1$ untuk jarak benda ($s$) dan $n_2$ untuk jarak bayangan ($s'$). Jangan sampai menyamakan dengan rumus cermin/lensa tipis $\\frac{1}{s} + \\frac{1}{s'} = \\frac{1}{f}$."
    },
    "subTopicSlug": "pembiasan-cahaya-snellius",
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-bias-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Pembiasan Cahaya",
    "difficulty": "sedang",
    "statement": "Sebuah bejana kaca diisi dengan dua lapisan cairan bening yang tidak saling bercampur. Lapisan bawah adalah cairan A dengan ketebalan $12\\text{ cm}$ dan indeks bias $n_A = 1{,}5$. Di atasnya terdapat lapisan cairan B dengan ketebalan $8\\text{ cm}$ dan indeks bias $n_B = \\frac{4}{3}$. Di dasar bejana terletak sebuah koin logam. Jika koin dilihat dari udara ($n_u = 1$) tepat tegak lurus dari atas permukaan, kedalaman koin tampak pada kedalaman semu sebesar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ cm}$",
      "$12\\text{ cm}$",
      "$14\\text{ cm}$",
      "$16\\text{ cm}$",
      "$18\\text{ cm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Kedalaman semu total ($h'$) untuk sistem multi-lapisan zat cair dilihat tegak lurus dari udara ($n_u = 1$) adalah penjumlahan kedalaman semu masing-masing lapisan:<br>$$h' = \\sum \\frac{h_i}{n_i} = \\frac{h_B}{n_B} + \\frac{h_A}{n_A}$$",
      "steps": "1. Hitung kontribusi lapisan atas (cairan B):<br>$$h_B' = \\frac{8\\text{ cm}}{\\frac{4}{3}} = 8 \\times \\frac{3}{4} = 6\\text{ cm}$$<br>2. Hitung kontribusi lapisan bawah (cairan A):<br>$$h_A' = \\frac{12\\text{ cm}}{1{,}5} = \\frac{12}{\\frac{3}{2}} = 12 \\times \\frac{2}{3} = 8\\text{ cm}$$<br>3. Jumlahkan kedalaman semu total dari permukaan atas cairan B:<br>$$h' = h_B' + h_A' = 6\\text{ cm} + 8\\text{ cm} = 14\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Kedalaman fisik sebenarnya dari koin adalah $12 + 8 = 20\\text{ cm}$. Kedalaman semu koin tampak terangkat menjadi $14\\text{ cm}$ dari permukaan."
    },
    "subTopicSlug": "pembiasan-cahaya-snellius",
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "sup-fis-gel-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Pembiasan Cahaya Hukum Snellius",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seberkas cahaya merambat dari udara ($n_1 = 1$) masuk ke dalam balok kaca yang mempunyai indeks bias $n_2 = 1{,}5$. Jika sudut datang sinar adalah $30^\\circ$, maka nilai sinus sudut bias ($\\sin r$) di dalam balok kaca tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{4}$",
      "$\\frac{1}{4}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Snellius Pembiasan Cahaya:</strong><br>$n_1 \\sin i = n_2 \\sin r$, dengan $i$ sudut datang dan $r$ sudut bias terhadap garis normal.</div>",
      "steps": "<ol><li>$n_1 = 1$, $i = 30^\\circ \\implies \\sin 30^\\circ = 0{,}5 = \\frac{1}{2}$.</li><li>$n_2 = 1{,}5 = \\frac{3}{2}$.</li><li>Persamaan: $1 \\cdot \\frac{1}{2} = \\frac{3}{2} \\cdot \\sin r$.</li><li>$\\sin r = \\frac{1}{2} \\times \\frac{2}{3} = \\frac{1}{3}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Membalik indeks bias medium sehingga menghasilkan $\\sin r = \\frac{3}{4}$.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "pembiasan-cahaya-snellius"
  },
  {
    "id": "drill-cah-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Kelajuan Cahaya dalam Medium Pembias",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Cahaya merambat dari ruang hampa ($c = 3 \\times 10^8\\text{ m/s}$) memasuki balok kaca yang mempunyai indeks bias $n = 1{,}5$. Kelajuan cahaya di dalam kaca tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}0 \\times 10^8\\text{ m/s}$",
      "$1{,}5 \\times 10^8\\text{ m/s}$",
      "$4{,}5 \\times 10^8\\text{ m/s}$",
      "$2{,}5 \\times 10^8\\text{ m/s}$",
      "$3{,}0 \\times 10^8\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Definisi Indeks Bias Mutlak:</strong><br>Indeks bias medium menyatakan perbandingan kelajuan cahaya di ruang hampa terhadap kelajuan cahaya di medium tersebut:<br>$$n = \\frac{c}{v} \\implies v = \\frac{c}{n}$$</div>",
      "steps": "<ol><li>Substitusi nilai: $c = 3 \\times 10^8\\text{ m/s}$ dan $n = 1{,}5$.</li><li>$v = \\frac{3 \\times 10^8}{1{,}5} = 2{,}0 \\times 10^8\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Konsep Kunci:</strong> Cahaya selalu merambat <em>lebih lambat</em> di dalam medium optik ($n > 1$) dibandingkan di ruang hampa. Nilai $v$ tidak mungkin melebihi $c$.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "pembiasan-cahaya-snellius"
  },
  {
    "id": "drill-cah-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Sudut Kritis dan Pemantulan Total Sempurna",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seberkas sinar merambat dari dalam air yang memiliki indeks bias $n_1 = \\frac{4}{3}$ menuju ke udara yang memiliki indeks bias $n_2 = 1$. Nilai sinus sudut kritis ($\\sin \\theta_k$) agar terjadi peristiwa pemantulan total sempurna adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{3}{4}$",
      "$\\frac{4}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{4}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Syarat Pemantulan Total Sempurna & Sudut Kritis:</strong><br>1. Cahaya harus merambat dari medium <strong>lebih rapat ke medium kurang rapat</strong> ($n_1 > n_2$).<br>2. Pada sudut kritis, sudut bias $r = 90^\\circ$ ($\\sin 90^\\circ = 1$):<br>$$\\sin \\theta_k = \\frac{n_2}{n_1}$$</div>",
      "steps": "<ol><li>Identifikasi: $n_1 = \\frac{4}{3}$ (medium rapat/air), $n_2 = 1$ (medium renggang/udara).</li><li>Rumus sudut kritis: $\\sin \\theta_k = \\frac{n_2}{n_1} = \\frac{1}{\\frac{4}{3}} = \\frac{3}{4}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Cek Masuk Akal:</strong> Nilai sinus suatu sudut nyata tidak pernah boleh lebih dari 1. Jadi pembagian selalu medium kecil dibagi medium besar ($n_{\\text{kecil}} / n_{\\text{besar}}$).</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "pembiasan-cahaya-snellius"
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
    window.TKA_BANK_SOAL[subTopicSlug] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
