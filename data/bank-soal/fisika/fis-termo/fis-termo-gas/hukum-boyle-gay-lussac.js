/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Teori Gas Ideal (fis-termo-gas)
 * Sub-Bab: Hukum Boyle & Gay-Lussac (fis-termo-gas-boyle)
 * Slug: hukum-boyle-gay-lussac
 * Indikator: Hukum Boyle isotermal (P * V = konstan) dan Gay-Lussac isokhorik (P / T = konstan).
 * 
 * Total Butir Soal: 12 (Mudah: 6, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-gas-boyle";
  const subTopicSlug = "hukum-boyle-gay-lussac";
  const questions = [
  {
    "id": "fis-termo-gas-boyle-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-boyle",
    "category": "Hukum Boyle (Proses Isotermal)",
    "difficulty": "mudah",
    "statement": "Sejumlah gas ideal berada di dalam ruang tertutup berpenghisap dengan volume mula-mula $4\\text{ liter}$ pada tekanan $2\\text{ atm}$. Jika gas tersebut ditekan secara perlahan pada suhu tetap (proses isotermal) hingga volumenya menyusut menjadi $1\\text{ liter}$, besar tekanan gas ideal tersebut sekarang adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}5\\text{ atm}$",
      "$2{,}0\\text{ atm}$",
      "$4{,}0\\text{ atm}$",
      "$6{,}0\\text{ atm}$",
      "$8{,}0\\text{ atm}$"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Hukum Boyle menyatakan bahwa untuk massa gas ideal tertentu pada suhu mutlak konstan (isotermal), hasil kali antara tekanan ($P$) dan volume ($V$) selalu bernilai tetap:<br>$$P_1 \\times V_1 = P_2 \\times V_2$$",
      "steps": "1. Tuliskan data yang diketahui:<br>$P_1 = 2\\text{ atm}$<br>$V_1 = 4\\text{ liter}$<br>$V_2 = 1\\text{ liter}$<br>2. Masukkan ke rumus Hukum Boyle:<br>$$2 \\times 4 = P_2 \\times 1$$<br>$$P_2 = 8\\text{ atm}$$<br>3. Jawaban yang tepat adalah pilihan E.",
      "pitfalls": "Tekanan dan volume berbanding terbalik: jika volume berkurang menjadi $1/4$ kali semula, maka tekanannya justru meningkat $4$ kali lipat menjadi $8\\text{ atm}$. Jangan sampai terbalik mengalikan atau membagi."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle & Gay-Lussac",
    "subTopic": "Hukum Boyle & Gay-Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-gas-boyle-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-boyle",
    "category": "Hukum Gay-Lussac (Proses Isokhorik)",
    "difficulty": "mudah",
    "statement": "Gas ideal berada di dalam sebuah tangki baja kaku bervolume tetap dengan tekanan $1{,}5\\text{ atm}$ pada suhu $27^\\circ\\text{C}$. Jika tangki tersebut dipanaskan hingga suhunya mencapai $127^\\circ\\text{C}$, besar tekanan gas di dalam tangki menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}8\\text{ atm}$",
      "$2{,}0\\text{ atm}$",
      "$2{,}4\\text{ atm}$",
      "$3{,}0\\text{ atm}$",
      "$7{,}0\\text{ atm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hukum Gay-Lussac menyatakan bahwa pada volume gas konstan (isokhorik), tekanan gas berbanding lurus dengan suhu mutlaknya (Kelvin):<br>$$\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$$<br>Suhu wajib dikonversikan ke skala mutlak Kelvin ($T = ^\\circ\\text{C} + 273$).",
      "steps": "1. Konversikan suhu Celsius ke Kelvin:<br>$T_1 = 27 + 273 = 300\\text{ K}$<br>$T_2 = 127 + 273 = 400\\text{ K}$<br>2. Masukkan nilai ke rumus Gay-Lussac:<br>$$\\frac{1{,}5}{300} = \\frac{P_2}{400}$$<br>$$P_2 = \\frac{1{,}5 \\times 400}{300} = 1{,}5 \\times \\frac{4}{3} = 2{,}0\\text{ atm}$$<br>3. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Kesalahan fatal yang sering terjadi adalah menggunakan suhu langsung dalam derajat Celsius tanpa konversi ke Kelvin: $P_2 = 1{,}5 \\times (127 / 27) \\approx 7{,}0\\text{ atm}$ (opsi E). Persamaan gas ideal hanya sah dalam skala temperatur mutlak Kelvin."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle & Gay-Lussac",
    "subTopic": "Hukum Boyle & Gay-Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-gas-boyle-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-boyle",
    "category": "Hukum Charles (Proses Isobarik)",
    "difficulty": "mudah",
    "statement": "Sejumlah gas ideal berada di dalam silinder yang dilengkapi piston bebas tanpa gesekan sehingga tekanannya selalu konstan (proses isobarik). Pada suhu $300\\text{ K}$, volume gas adalah $2\\text{ liter}$. Jika gas tersebut dipanaskan hingga suhunya mencapai $450\\text{ K}$, volume gas sekarang adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}5\\text{ liter}$",
      "$2{,}5\\text{ liter}$",
      "$3{,}0\\text{ liter}$",
      "$3{,}5\\text{ liter}$",
      "$4{,}0\\text{ liter}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Hukum Charles menyatakan bahwa untuk massa gas tertentu pada tekanan konstan (isobarik), volume gas berbanding lurus dengan suhu mutlaknya:<br>$$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$$",
      "steps": "1. Identifikasi besaran:<br>$V_1 = 2\\text{ liter}$<br>$T_1 = 300\\text{ K}$<br>$T_2 = 450\\text{ K}$<br>2. Masukkan ke perbandingan Charles:<br>$$\\frac{2}{300} = \\frac{V_2}{450} \\implies V_2 = \\frac{2 \\times 450}{300} = 2 \\times 1{,}5 = 3{,}0\\text{ liter}$$<br>3. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Perhatikan bahwa proses isobarik ditandai oleh tekanan tetap (misalnya piston bebas bergerak). Karena suhu naik sebesar faktor $450/300 = 1{,}5$, maka volumenya juga memuai sebesar $1{,}5$ kali lipat."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle & Gay-Lussac",
    "subTopic": "Hukum Boyle & Gay-Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-gas-boyle-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-boyle",
    "category": "Representasi Grafik P-V Proses Isotermal",
    "difficulty": "mudah",
    "statement": "Pada diagram tekanan terhadap volume ($P-V$), kurva yang menggambarkan proses pemuaian gas ideal yang berlangsung pada suhu tetap (proses isotermal sesuai Hukum Boyle) memiliki bentuk berupa ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Garis lurus horizontal sejajar sumbu volume",
      "Garis lurus vertikal sejajar sumbu tekanan",
      "Garis lurus miring dengan gradien positif melewati titik asal $(0,0)$",
      "Kurva lengkung hiperbola sama sisi (isoterm)",
      "Kurva parabola menghadap ke atas"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Berdasarkan Hukum Boyle, hubungan antara tekanan dan volume pada suhu konstan adalah $P \\times V = C \\implies P = \\frac{C}{V}$.<br>Dalam matematika analitik, persamaan berbentuk $y = \\frac{c}{x}$ dengan $c > 0$ merepresentasikan grafik hiperbola sama sisi di kuadran pertama, yang dalam termodinamika disebut sebagai kurva isoterm.",
      "steps": "1. Analisis persamaan matematis $P(V)$ untuk proses isotermal: $P \\propto 1/V$.<br>2. Garis horizontal adalah proses isobarik ($P = \\text{konstan}$).<br>3. Garis vertikal adalah proses isokhorik ($V = \\text{konstan}$).<br>4. Grafik $P = C/V$ adalah kurva lengkung hiperbolik yang menurun mulus seiring membesarnya volume.<br>5. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jangan tertukar dengan proses adiabatik yang juga melengkung ke bawah namun memiliki kelengkungan lebih curam ($P \\propto V^{-\\gamma}$ dengan $\\gamma > 1$)."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle & Gay-Lussac",
    "subTopic": "Hukum Boyle & Gay-Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-gas-boyle-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-boyle",
    "category": "Aplikasi Hukum Gay-Lussac pada Tekanan Ban",
    "difficulty": "mudah",
    "statement": "Tekanan udara di dalam ban sepeda motor terukur sebesar $240\\text{ kPa}$ saat pagi hari pada suhu $27^\\circ\\text{C}$. Setelah motor dikendarai menempuh jarak jauh di aspal terik siang hari, suhu udara di dalam ban meningkat menjadi $57^\\circ\\text{C}$. Dengan menganggap ban kaku sehingga volumenya tidak berubah, besar tekanan udara di dalam ban tersebut sekarang adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$248\\text{ kPa}$",
      "$256\\text{ kPa}$",
      "$264\\text{ kPa}$",
      "$272\\text{ kPa}$",
      "$507\\text{ kPa}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Karena volume ban diasumsikan konstan ($V_1 = V_2$), berlaku Hukum Gay-Lussac:<br>$$\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies P_2 = P_1 \\times \\frac{T_2}{T_1}$$",
      "steps": "1. Konversikan suhu Celsius ke skala mutlak Kelvin:<br>$T_1 = 27 + 273 = 300\\text{ K}$<br>$T_2 = 57 + 273 = 330\\text{ K}$<br>2. Masukkan ke rumus:<br>$$P_2 = 240\\text{ kPa} \\times \\frac{330\\text{ K}}{300\\text{ K}} = 240 \\times 1{,}10 = 264\\text{ kPa}$$<br>3. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Menggunakan perbandingan suhu Celsius secara langsung akan menghasilkan $P_2 = 240 \\times (57/27) \\approx 507\\text{ kPa}$ (opsi E), yang keliru besar karena skala Celsius bukan skala termodinamika mutlak."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle & Gay-Lussac",
    "subTopic": "Hukum Boyle & Gay-Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-gas-boyle-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-boyle",
    "category": "Gelembung Udara Dasar Danau (Boyle + Hidrostatis)",
    "difficulty": "sedang",
    "statement": "Sebuah gelembung udara bervolume $1{,}0\\text{ cm}^3$ terbentuk di dasar sebuah danau pada kedalaman $20\\text{ meter}$. Gelembung tersebut perlahan naik ke atas hingga mencapai tepat di bawah permukaan air. Diketahui tekanan atmosfer di permukaan danau adalah $P_0 = 1{,}0 \\times 10^5\\text{ Pa}$, massa jenis air danau $\\rho = 1000\\text{ kg/m}^3$, dan percepatan gravitasi $g = 10\\text{ m/s}^2$. Jika suhu air danau dianggap seragam dari dasar hingga permukaan (proses isotermal), volume gelembung udara tepat sebelum menyentuh permukaan air adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}5\\text{ cm}^3$",
      "$2{,}0\\text{ cm}^3$",
      "$2{,}5\\text{ cm}^3$",
      "$3{,}0\\text{ cm}^3$",
      "$4{,}0\\text{ cm}^3$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Tekanan mutlak di kedalaman danau merupakan penjumlahan tekanan atmosfer dan tekanan hidrostatis:<br>$$P_1 = P_0 + \\rho \\times g \\times h$$<br>Di permukaan danau, tekanannya adalah tekanan atmosfer murni: $P_2 = P_0$.<br>Karena suhu konstan (isotermal), berlaku Hukum Boyle: $P_1 \\times V_1 = P_2 \\times V_2$.",
      "steps": "1. Hitung tekanan di dasar danau ($h = 20\\text{ m}$):<br>$$P_1 = 1{,}0 \\times 10^5 + (1000 \\times 10 \\times 20) = 1{,}0 \\times 10^5 + 2{,}0 \\times 10^5 = 3{,}0 \\times 10^5\\text{ Pa}$$<br>2. Tekanan di permukaan danau: $P_2 = 1{,}0 \\times 10^5\\text{ Pa}$.<br>3. Terapkan Hukum Boyle:<br>$$P_1 \\times V_1 = P_2 \\times V_2 \\implies (3{,}0 \\times 10^5) \\times 1{,}0\\text{ cm}^3 = (1{,}0 \\times 10^5) \\times V_2$$<br>$$V_2 = \\frac{3{,}0 \\times 10^5 \\times 1{,}0}{1{,}0 \\times 10^5} = 3{,}0\\text{ cm}^3$$<br>4. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Lupa menjumlahkan tekanan atmosfer $P_0$ (hanya memperhitungkan tekanan hidrostatis $\\rho gh = 2\\text{ atm}$) akan menghasilkan volume akhir $2{,}0\\text{ cm}^3$ (opsi B). Tekanan total mutlak di kedalaman $20\\text{ m}$ adalah $3\\text{ atm}$."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle & Gay-Lussac",
    "subTopic": "Hukum Boyle & Gay-Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-gas-boyle-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-boyle",
    "category": "Piston Silinder dengan Beban Tambahan",
    "difficulty": "sedang",
    "statement": "Sebuah silinder vertikal berisi gas ideal ditutup oleh piston bermassa $M = 10\\text{ kg}$ dengan luas penampang $A = 50\\text{ cm}^2$ yang dapat bergerak tanpa gesekan. Tekanan udara luar adalah $P_0 = 1{,}0 \\times 10^5\\text{ Pa}$ dan percepatan gravitasi $g = 10\\text{ m/s}^2$. Mula-mula tinggi kolom gas di bawah piston adalah $h_1 = 20\\text{ cm}$. Kemudian, sebuah beban bermassa $m = 15\\text{ kg}$ diletakkan perlahan di atas piston. Jika suhu gas di dalam silinder dijaga tetap konstan, penurunan posisi piston adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ cm}$",
      "$4\\text{ cm}$",
      "$5\\text{ cm}$",
      "$8\\text{ cm}$",
      "$16\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Tekanan total gas di bawah piston adalah jumlah tekanan atmosfer dan tekanan akibat berat piston beserta beban:<br>$$P = P_0 + \\frac{m_{\\text{total}} \\times g}{A}$$<br>Volume gas dalam silinder berpenampang $A$ adalah $V = A \\times h$. Karena proses berlangsung isotermal, berlaku Hukum Boyle: $P_1 \\times h_1 = P_2 \\times h_2$.",
      "steps": "1. Konversi satuan luas: $A = 50\\text{ cm}^2 = 50 \\times 10^{-4}\\text{ m}^2 = 5 \\times 10^{-3}\\text{ m}^2$.<br>2. Hitung tekanan awal $P_1$ (hanya piston $M = 10\\text{ kg}$):<br>$$P_1 = 100.000 + \\frac{10 \\times 10}{5 \\times 10^{-3}} = 100.000 + 20.000 = 120.000\\text{ Pa}$$<br>3. Hitung tekanan akhir $P_2$ setelah ditambah beban $15\\text{ kg}$ ($m_{\\text{tot}} = 25\\text{ kg}$):<br>$$P_2 = 100.000 + \\frac{25 \\times 10}{5 \\times 10^{-3}} = 100.000 + 50.000 = 150.000\\text{ Pa}$$<br>4. Gunakan Hukum Boyle untuk mencari tinggi akhir kolom gas $h_2$:<br>$$P_1 \\times h_1 = P_2 \\times h_2 \\implies 120.000 \\times 20\\text{ cm} = 150.000 \\times h_2$$<br>$$h_2 = \\frac{120.000 \\times 20}{150.000} = 16\\text{ cm}$$<br>5. Hitung penurunan posisi piston (selisih tinggi):<br>$$\\Delta h = h_1 - h_2 = 20\\text{ cm} - 16\\text{ cm} = 4\\text{ cm}$$<br>6. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Pertanyaan meminta penurunan posisi piston ($\\\\Delta h = 4\\text{ cm}$), bukan tinggi akhir kolom gas ($h_2 = 16\\text{ cm}$, opsi E). Bacalah pertanyaan akhir dengan saksama."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle & Gay-Lussac",
    "subTopic": "Hukum Boyle & Gay-Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-gas-boyle-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-boyle",
    "category": "Katup Pengaman Tabung Gas (Gay-Lussac)",
    "difficulty": "sedang",
    "statement": "Sebuah tabung gas berkonstruksi kaku dilengkapi dengan katup pengaman (safety valve) yang akan otomatis terbuka membuang gas jika tekanan di dalam tabung mencapai atau melebihi $4{,}0\\text{ atm}$. Pada suhu $27^\\circ\\text{C}$, tabung tersebut diisi dengan gas ideal hingga tekanannya tercatat $2{,}5\\text{ atm}$. Suhu ruangan maksimum tempat penyimpanan tabung tersebut agar katup pengaman tidak sampai terbuka adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$43{,}2^\\circ\\text{C}$",
      "$127^\\circ\\text{C}$",
      "$180^\\circ\\text{C}$",
      "$207^\\circ\\text{C}$",
      "$480^\\circ\\text{C}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Karena volume tabung gas kaku bernilai konstan (proses isokhorik), hubungan tekanan dan suhu gas ideal memenuhi Hukum Gay-Lussac:<br>$$\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$$<br>dengan $T$ adalah suhu mutlak dalam skala Kelvin.",
      "steps": "1. Konversikan suhu awal ke Kelvin: $T_1 = 27 + 273 = 300\\text{ K}$.<br>2. Tentukan tekanan awal dan tekanan batas maksimum: $P_1 = 2{,}5\\text{ atm}$, $P_2 = 4{,}0\\text{ atm}$.<br>3. Hitung suhu batas mutlak $T_2$:<br>$$\\frac{2{,}5}{300} = \\frac{4{,}0}{T_2} \\implies T_2 = \\frac{4{,}0 \\times 300}{2{,}5} = 480\\text{ K}$$<br>4. Konversikan kembali ke derajat Celsius:<br>$$T_2 = 480 - 273 = 207^\\circ\\text{C}$$<br>5. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jebakan konversi satuan: $480\\text{ K}$ (opsi E) adalah nilai dalam Kelvin, bukan dalam Celsius. Untuk menyatakan dalam derajat Celsius, harus dikurangi 273."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle & Gay-Lussac",
    "subTopic": "Hukum Boyle & Gay-Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-gas-boyle-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-boyle",
    "category": "Manometer Pipa U Tertutup Sebelah",
    "difficulty": "sedang",
    "statement": "Sebuah pipa kaca berbentuk U memiliki salah satu kaki tertutup dan kaki lainnya terbuka ke atmosfer ($P_0 = 76\\text{ cmHg}$). Pada kaki tertutup terperangkap kolom udara sepanjang $20\\text{ cm}$. Mula-mula permukaan raksa pada kedua kaki pipa tepat sejajar sama tinggi. Selanjutnya, raksa dituangkan ke dalam kaki terbuka hingga permukaan raksa di kaki terbuka berada $24\\text{ cm}$ lebih tinggi daripada permukaan raksa di kaki tertutup. Jika suhu udara terperangkap dijaga konstan, panjang kolom udara di kaki tertutup sekarang adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10{,}0\\text{ cm}$",
      "$12{,}4\\text{ cm}$",
      "$15{,}2\\text{ cm}$",
      "$16{,}0\\text{ cm}$",
      "$18{,}0\\text{ cm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Keadaan awal saat kedua permukaan raksa sejajar: tekanan udara terperangkap sama dengan tekanan atmosfer luar ($P_1 = P_0 = 76\\text{ cmHg}$).<br>Keadaan akhir saat kaki terbuka lebih tinggi $\\Delta h = 24\\text{ cmHg}$: tekanan udara terperangkap meningkat menjadi $P_2 = P_0 + \\Delta h = 76 + 24 = 100\\text{ cmHg}$.<br>Karena suhu konstan (isotermal), volume sebanding dengan panjang kolom ($V = A \\times L$), sehingga berlaku Hukum Boyle: $P_1 \\times L_1 = P_2 \\times L_2$.",
      "steps": "1. Data keadaan awal: $P_1 = 76\\text{ cmHg}$, $L_1 = 20\\text{ cm}$.<br>2. Data keadaan akhir: $P_2 = 76 + 24 = 100\\text{ cmHg}$.<br>3. Terapkan Hukum Boyle:<br>$$P_1 \\times L_1 = P_2 \\times L_2 \\implies 76 \\times 20 = 100 \\times L_2$$<br>$$1520 = 100 \\times L_2 \\implies L_2 = \\frac{1520}{100} = 15{,}2\\text{ cm}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Pastikan tekanan akhir dihitung sebagai tekanan mutlak ($76 + 24 = 100\\text{ cmHg}$), bukan hanya tekanan terukur $\\Delta h = 24\\text{ cmHg}$."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle & Gay-Lussac",
    "subTopic": "Hukum Boyle & Gay-Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-gas-boyle-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-boyle",
    "category": "Massa Jenis Gas Ideal pada Kompresi Isotermal",
    "difficulty": "sedang",
    "statement": "Sebuah sampel gas ideal monoatomik memiliki massa jenis $\\rho_1 = 1{,}2\\text{ kg/m}^3$ pada tekanan $1{,}0\\text{ atm}$ dan suhu tertentu. Gas tersebut kemudian dikompresi di dalam ruang tertutup secara isotermal sehingga tekanannya naik menjadi $2{,}5\\text{ atm}$. Besar massa jenis gas ideal tersebut setelah proses kompresi isotermal adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}48\\text{ kg/m}^3$",
      "$1{,}8\\text{ kg/m}^3$",
      "$2{,}4\\text{ kg/m}^3$",
      "$3{,}0\\text{ kg/m}^3$",
      "$3{,}6\\text{ kg/m}^3$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Massa jenis gas didefinisikan sebagai rasio massa terhadap volume ($\\rho = m/V$). Dari persamaan gas ideal $P V = n R T = \\frac{m}{M_r} R T$, diperoleh relasi massa jenis:<br>$$P = \\frac{\\rho}{M_r} R T \\implies \\rho = \\frac{P \\times M_r}{R T}$$<br>Pada proses isotermal dengan jenis gas dan massa tetap, massa jenis gas berbanding lurus secara linier dengan tekanannya: $\\frac{\\rho_2}{\\rho_1} = \\frac{P_2}{P_1}$.",
      "steps": "1. Identifikasi perbandingan keadaan:<br>$P_1 = 1{,}0\\text{ atm}$<br>$P_2 = 2{,}5\\text{ atm}$<br>$\\rho_1 = 1{,}2\\text{ kg/m}^3$<br>2. Hubungkan massa jenis dan tekanan pada suhu konstan:<br>$$\\frac{\\rho_2}{\\rho_1} = \\frac{P_2}{P_1} \\implies \\rho_2 = \\rho_1 \\times \\frac{P_2}{P_1}$$<br>3. Hitung $\\rho_2$:<br>$$\\rho_2 = 1{,}2\\text{ kg/m}^3 \\times \\frac{2{,}5}{1{,}0} = 1{,}2 \\times 2{,}5 = 3{,}0\\text{ kg/m}^3$$<br>4. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jangan mengira massa jenis berkurang saat tekanan naik. Karena gas ditekan menjadi lebih mampat (volume menyusut), molekul gas menjadi lebih padat sehingga kerapatan massanya bertambah besar."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle & Gay-Lussac",
    "subTopic": "Hukum Boyle & Gay-Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "drill-gas-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-gas-boyle",
    "category": "Hukum Boyle (Proses Isotermal)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu gas ideal berada di dalam silinder berpenghisap dengan volume awal $V_1 = 2\\text{ liter}$ dan tekanan awal $P_1 = 3\\text{ atm}$. Jika penghisap ditekan perlahan pada suhu tetap (isotermal) sehingga volumenya menyusut menjadi $V_2 = 0{,}5\\text{ liter}$, tekanan gas sekarang ($P_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$12\\text{ atm}$",
      "$6\\text{ atm}$",
      "$1{,}5\\text{ atm}$",
      "$9\\text{ atm}$",
      "$0{,}75\\text{ atm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Boyle (Suhu Konstan):</strong><br>Hasil kali tekanan dan volume gas dalam ruang tertutup bernilai konstan:<br>$$P_1 \\cdot V_1 = P_2 \\cdot V_2 \\implies P_2 = \\frac{P_1 V_1}{V_2}$$</div>",
      "steps": "<ol><li>Identifikasi data: $P_1 = 3\\text{ atm}$, $V_1 = 2\\text{ L}$, $V_2 = 0{,}5\\text{ L}$.</li><li>Hitung tekanan akhir: $P_2 = \\frac{3 \\times 2}{0{,}5} = \\frac{6}{0{,}5} = 12\\text{ atm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Volume mengecil $4\\times$ (dari $2\\text{ L} \\to 0{,}5\\text{ L}$) $implies$ tekanan otomatis melonjak naik $4\\times$ (dari $3\\text{ atm} \\to 12\\text{ atm}$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle & Gay-Lussac",
    "subTopic": "Hukum Boyle & Gay-Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-gas",
    "subTopicSlug": "hukum-boyle-gay-lussac"
  },
  {
    "id": "sup-fis-ter-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-gas-boyle",
    "category": "Hukum Boyle-Gay Lussac Ruang Tertutup",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu gas ideal di dalam bejana tertutup awalnya berada pada tekanan $P_1 = 2\\text{ atm}$, volume $V_1 = 4\\text{ liter}$, dan suhu mutlak $T_1 = 300\\text{ K}$. Jika gas dipanaskan hingga suhunya menjadi $T_2 = 450\\text{ K}$ dan volumenya dibiarkan memuai menjadi $V_2 = 6\\text{ liter}$, tekanan gas sekarang ($P_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ atm}$",
      "$1{,}5\\text{ atm}$",
      "$2{,}5\\text{ atm}$",
      "$3\\text{ atm}$",
      "$1\\text{ atm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Persamaan Keadaan Boyle-Gay Lussac:</strong><br>Untuk jumlah mol gas tetap pada ruang tertutup: $\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$. Pastikan suhu selalu dalam skala Kelvin mutlak!</div>",
      "steps": "<ol><li>$\\frac{2 \\times 4}{300} = \\frac{P_2 \\times 6}{450}$.</li><li>$\\frac{8}{300} = \\frac{6 P_2}{450} \\implies \\frac{8}{2} = \\frac{6 P_2}{3} = 2 P_2$.</li><li>$4 = 2 P_2 \\implies P_2 = 2\\text{ atm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengabaikan faktor suhu atau lupa bahwa suhu gas ideal wajib bersatuan Kelvin.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle & Gay-Lussac",
    "subTopic": "Hukum Boyle & Gay-Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-gas",
    "subTopicSlug": "hukum-boyle-gay-lussac"
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
