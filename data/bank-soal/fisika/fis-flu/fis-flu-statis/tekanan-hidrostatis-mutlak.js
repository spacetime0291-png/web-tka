/**
 * Bank Soal TKA: Fisika (TKA) - Fluida
 * Bab Kecil: Fluida Statis (fis-flu-statis)
 * Sub-Bab: Tekanan Hidrostatis & Mutlak (fis-flu-statis-tekanan)
 * Slug: tekanan-hidrostatis-mutlak
 * Indikator: Tekanan fluida cair (P_h = rho * g * h) dan tekanan mutlak total (P = P_0 + rho * g * h).
 * 
 * Total Butir Soal: 12 (Mudah: 6, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-flu-statis-tekanan";
  const subTopicSlug = "tekanan-hidrostatis-mutlak";
  const questions = [
  {
    "id": "fis-flu-statis-tekanan-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-tekanan",
    "category": "Tekanan Hidrostatis & Mutlak",
    "difficulty": "mudah",
    "statement": "Seekor ikan berenang pada kedalaman $4\\text{ meter}$ di bawah permukaan air sebuah danau air tawar (massa jenis air $\\rho = 1000\\text{ kg/m}^3$). Jika percepatan gravitasi bumi setempat adalah $g = 10\\text{ m/s}^2$, besar tekanan hidrostatis murni yang dialami oleh ikan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4 \\times 10^4\\text{ Pa}$",
      "$4 \\times 10^3\\text{ Pa}$",
      "$1{,}4 \\times 10^5\\text{ Pa}$",
      "$4 \\times 10^5\\text{ Pa}$",
      "$2 \\times 10^4\\text{ Pa}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Tekanan hidrostatis adalah tekanan yang diakibatkan oleh berat zat cair itu sendiri pada kedalaman tertentu, dirumuskan dengan:<br>$$P_h = \\rho \\cdot g \\cdot h$$",
      "steps": "1. Identifikasi besaran yang diketahui:<br>• Massa jenis air $\\rho = 1000\\text{ kg/m}^3$<br>• Percepatan gravitasi $g = 10\\text{ m/s}^2$<br>• Kedalaman $h = 4\\text{ m}$<br>2. Hitung tekanan hidrostatis murni:<br>$$P_h = \\rho \\cdot g \\cdot h = 1000\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 4\\text{ m} = 40.000\\text{ Pa} = 4 \\times 10^4\\text{ Pa}$$",
      "pitfalls": "Jangan menjumlahkan tekanan atmosfer $P_0$ karena yang ditanyakan secara spesifik adalah tekanan hidrostatis murni zat cair, bukan tekanan mutlak (total)."
    },
    "subTopicSlug": "tekanan-hidrostatis-mutlak",
    "bab": "Fluida",
    "subBab": "Tekanan Hidrostatis & Mutlak",
    "subTopic": "Tekanan Hidrostatis & Mutlak",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Tekanan hidrostatis adalah tekanan yang diakibatkan oleh berat zat cair itu sendiri pada kedalaman tertentu, dirumuskan dengan: $$P_h = \\rho \\cdot g \\cdot h$$."
  },
  {
    "id": "fis-flu-statis-tekanan-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-tekanan",
    "category": "Tekanan Hidrostatis & Mutlak",
    "difficulty": "mudah",
    "statement": "Sebuah kapal selam penelitian berada pada kedalaman $25\\text{ meter}$ di bawah permukaan laut. Massa jenis air laut diketahui sebesar $1020\\text{ kg/m}^3$, percepatan gravitasi $g = 10\\text{ m/s}^2$, dan tekanan atmosfer di permukaan laut adalah $P_0 = 1{,}01 \\times 10^5\\text{ Pa}$. Tekanan mutlak (total) yang dialami dinding luar kapal selam tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}55 \\times 10^5\\text{ Pa}$",
      "$3{,}56 \\times 10^5\\text{ Pa}$",
      "$3{,}56 \\times 10^4\\text{ Pa}$",
      "$1{,}54 \\times 10^5\\text{ Pa}$",
      "$4{,}57 \\times 10^5\\text{ Pa}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Tekanan mutlak (total) pada kedalaman $h$ fluida terbuka adalah jumlah dari tekanan atmosfer di permukaan dan tekanan hidrostatis zat cair:<br>$$P_{\\text{total}} = P_0 + P_h = P_0 + \\rho \\cdot g \\cdot h$$",
      "steps": "1. Hitung tekanan hidrostatis air laut:<br>$$P_h = \\rho \\cdot g \\cdot h = 1020\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 25\\text{ m} = 255.000\\text{ Pa} = 2{,}55 \\times 10^5\\text{ Pa}$$<br>2. Hitung tekanan mutlak total:<br>$$P_{\\text{total}} = P_0 + P_h = 1{,}01 \\times 10^5\\text{ Pa} + 2{,}55 \\times 10^5\\text{ Pa} = 3{,}56 \\times 10^5\\text{ Pa}$$",
      "pitfalls": "Lupa menjumlahkan tekanan atmosfer $P_0$ sehingga hanya memilih $2{,}55 \\times 10^5\\text{ Pa}$ (opsi A), padahal soal secara spesifik menanyakan tekanan mutlak (total)."
    },
    "subTopicSlug": "tekanan-hidrostatis-mutlak",
    "bab": "Fluida",
    "subBab": "Tekanan Hidrostatis & Mutlak",
    "subTopic": "Tekanan Hidrostatis & Mutlak",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Tekanan mutlak (total) pada kedalaman $h$ fluida terbuka adalah jumlah dari tekanan atmosfer di permukaan dan tekanan hidrostatis zat cair: $$P_{\\text{total}} = P_0 + P_h = P_0 + \\rho \\cdot g \\cdot h$$."
  },
  {
    "id": "fis-flu-statis-tekanan-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-tekanan",
    "category": "Tekanan Hidrostatis & Mutlak",
    "difficulty": "mudah",
    "statement": "Tiga buah wadah A, B, dan C memiliki bentuk penampang yang berbeda: wadah A berbentuk tabung silinder tegak lurus, wadah B mengerucut ke atas, dan wadah C melebar ke atas. Luas penampang alas ketiga wadah sama besar. Ketiga wadah tersebut diisi dengan jenis zat cair yang sama (massa jenis $\\rho$) hingga mencapai tinggi permukaan zat cair ($h$) yang sama diukur dari dasar wadah. Perbandingan besar tekanan hidrostatis pada dasar wadah A, B, dan C ($P_A : P_B : P_C$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 1 : 1$",
      "$1 : 2 : 3$",
      "$3 : 2 : 1$",
      "$2 : 1 : 3$",
      "$1 : 3 : 2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Berdasarkan prinsip Paradoks Hidrostatis, tekanan hidrostatis zat cair pada dasar wadah hanya bergantung pada massa jenis zat cair ($\\rho$), percepatan gravitasi ($g$), dan kedalaman vertikal zat cair ($h$), serta sama sekali tidak dipengaruhi oleh bentuk wadah maupun volume total zat cair:<br>$$P_h = \\rho \\cdot g \\cdot h$$",
      "steps": "1. Analisis parameter untuk ketiga wadah:<br>• Massa jenis cairan sama ($\\rho_A = \\rho_B = \\rho_C = \\rho$)<br>• Percepatan gravitasi sama ($g_A = g_B = g_C = g$)<br>• Ketinggian zat cair dari dasar sama ($h_A = h_B = h_C = h$)<br>2. Karena seluruh variabel pembentuk tekanan hidrostatis bernilai sama, maka:<br>$$P_A = P_B = P_C = \\rho \\cdot g \\cdot h$$<br>3. Perbandingan tekanan hidrostatis ketiga dasar wadah adalah $1 : 1 : 1$.",
      "pitfalls": "Terkecoh oleh berat total atau volume fluida di dalam wadah yang berbeda-beda. Volume atau berat fluida hanya mempengaruhi gaya total yang menopang wadah di atas meja, tetapi tekanan hidrostatis pada titik dasar hanya bergantung pada tinggi kolom vertikal zat cair."
    },
    "subTopicSlug": "tekanan-hidrostatis-mutlak",
    "bab": "Fluida",
    "subBab": "Tekanan Hidrostatis & Mutlak",
    "subTopic": "Tekanan Hidrostatis & Mutlak",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Berdasarkan prinsip Paradoks Hidrostatis, tekanan hidrostatis zat cair pada dasar wadah hanya bergantung pada massa jenis zat cair ($\\rho$), percepatan gravitasi ($g$), dan kedalaman vertikal zat cair ($h$), serta sama sekali tidak dipengaruhi oleh bentuk wadah maupun volume total zat cair: $$P_h = \\rho \\cdot g \\cdot h$$. **Tips:** Terkecoh oleh berat total atau volume fluida di dalam wadah yang berbeda-beda."
  },
  {
    "id": "fis-flu-statis-tekanan-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-tekanan",
    "category": "Tekanan Hidrostatis & Mutlak",
    "difficulty": "mudah",
    "statement": "Tekanan atmosfer standar mampu menopang kolom air raksa (massa jenis $\\rho_{\\text{raksa}} = 13.600\\text{ kg/m}^3$) setinggi $76\\text{ cmHg}$. Jika percobaan barometer Torricelli tersebut dilakukan menggunakan air tawar (massa jenis $\\rho_{\\text{air}} = 1000\\text{ kg/m}^3$) pada percepatan gravitasi $g = 10\\text{ m/s}^2$, tinggi kolom air yang diperlukan agar menghasilkan tekanan hidrostatis yang setara adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5{,}60\\text{ meter}$",
      "$7{,}60\\text{ meter}$",
      "$10{,}34\\text{ meter}$",
      "$13{,}60\\text{ meter}$",
      "$76{,}00\\text{ meter}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Dua kolom zat cair yang menghasilkan tekanan hidrostatis yang sama memenuhi hubungan kesetaraan tekanan:<br>$$P_{h,\\text{air}} = P_{h,\\text{raksa}} \\iff \\rho_{\\text{air}} \\cdot g \\cdot h_{\\text{air}} = \\rho_{\\text{raksa}} \\cdot g \\cdot h_{\\text{raksa}}$$Sehingga tinggi kolom berbanding terbalik dengan massa jenisnya:<br>$$h_{\\text{air}} = \\frac{\\rho_{\\text{raksa}}}{\\rho_{\\text{air}}} \\cdot h_{\\text{raksa}}$$",
      "steps": "1. Konversikan ketinggian kolom raksa ke satuan meter:<br>$$h_{\\text{raksa}} = 76\\text{ cm} = 0{,}76\\text{ m}$$<br>2. Substitusikan nilai-nilai yang diketahui:<br>$$h_{\\text{air}} = \\frac{13.600\\text{ kg/m}^3}{1000\\text{ kg/m}^3} \\times 0{,}76\\text{ m} = 13{,}6 \\times 0{,}76\\text{ m} = 10{,}336\\text{ m} \\approx 10{,}34\\text{ meter}$$",
      "pitfalls": "Lupa mengonversi satuan centimeter ke meter atau salah menempatkan rasio massa jenis (terbalik menjadi membagi 1000 dengan 13600)."
    },
    "subTopicSlug": "tekanan-hidrostatis-mutlak",
    "bab": "Fluida",
    "subBab": "Tekanan Hidrostatis & Mutlak",
    "subTopic": "Tekanan Hidrostatis & Mutlak",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Dua kolom zat cair yang menghasilkan tekanan hidrostatis yang sama memenuhi hubungan kesetaraan tekanan: $$P_{h,\\text{air}} = P_{h,\\text{raksa}} \\iff \\rho_{\\text{air}} \\cdot g \\cdot h_{\\text{air}} = \\rho_{\\text{raksa}} \\cdot g \\cdot h_{\\text{raksa}}$$Sehingga tinggi kolom berbanding terbalik dengan massa jenisnya: $$h_{\\text{air}} = \\frac{\\rho_{\\text{raksa}}}{\\rho_{\\text{air}}} \\cdot h_{\\text{raksa}}$$."
  },
  {
    "id": "fis-flu-statis-tekanan-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-tekanan",
    "category": "Tekanan Hidrostatis & Mutlak",
    "difficulty": "mudah",
    "statement": "Sebuah akuarium berbentuk balok memiliki ukuran alas $80\\text{ cm} \\times 50\\text{ cm}$ dan tinggi $60\\text{ cm}$. Akuarium tersebut diisi air tawar (massa jenis $\\rho = 1000\\text{ kg/m}^3$) hingga penuh. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya hidrostatis murni yang menekan seluruh permukaan dasar akuarium tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1.200\\text{ N}$",
      "$2.400\\text{ N}$",
      "$4.800\\text{ N}$",
      "$24.000\\text{ N}$",
      "$40.000\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gaya hidrostatis pada dasar bidang datar dihitung dari hasil kali tekanan hidrostatis pada kedalaman dasar dengan luas penampang alas wadah:<br>$$F = P_h \\cdot A = (\\rho \\cdot g \\cdot h) \\cdot A$$",
      "steps": "1. Konversikan ukuran ke satuan SI (meter):<br>• Tinggi kedalaman air $h = 60\\text{ cm} = 0{,}6\\text{ m}$<br>• Luas alas $A = 0{,}8\\text{ m} \\times 0{,}5\\text{ m} = 0{,}4\\text{ m}^2$<br>2. Hitung tekanan hidrostatis di dasar:<br>$$P_h = \\rho \\cdot g \\cdot h = 1000\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 0{,}6\\text{ m} = 6.000\\text{ N/m}^2$$<br>3. Hitung gaya hidrostatis total pada dasar:<br>$$F = P_h \\cdot A = 6.000\\text{ N/m}^2 \\times 0{,}4\\text{ m}^2 = 2.400\\text{ N}$$",
      "pitfalls": "Kesalahan konversi satuan luas dari $\\text{cm}^2$ ke $\\text{m}^2$ (sering dibagi 100 alih-alih 10.000) yang menyebabkan kesalahan orde besaran."
    },
    "subTopicSlug": "tekanan-hidrostatis-mutlak",
    "bab": "Fluida",
    "subBab": "Tekanan Hidrostatis & Mutlak",
    "subTopic": "Tekanan Hidrostatis & Mutlak",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Gaya hidrostatis pada dasar bidang datar dihitung dari hasil kali tekanan hidrostatis pada kedalaman dasar dengan luas penampang alas wadah: $$F = P_h \\cdot A = (\\rho \\cdot g \\cdot h) \\cdot A$$."
  },
  {
    "id": "fis-flu-statis-tekanan-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-tekanan",
    "category": "Tekanan Hidrostatis & Mutlak",
    "difficulty": "sedang",
    "statement": "Sebuah bejana silinder tegak berisi dua jenis zat cair yang tidak dapat bercampur. Lapisan atas berupa minyak dengan massa jenis $\\rho_{\\text{minyak}} = 800\\text{ kg/m}^3$ setinggi $30\\text{ cm}$, sedangkan lapisan bawah berupa air dengan massa jenis $\\rho_{\\text{air}} = 1000\\text{ kg/m}^3$ setinggi $50\\text{ cm}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$ dan tekanan udara luar di atas permukaan minyak adalah $P_0 = 1{,}0 \\times 10^5\\text{ Pa}$, maka besar tekanan hidrostatis murni pada dasar bejana dan tekanan mutlaknya berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$7{,}4 \\times 10^3\\text{ Pa}$ dan $1{,}074 \\times 10^5\\text{ Pa}$",
      "$5{,}0 \\times 10^3\\text{ Pa}$ dan $1{,}050 \\times 10^5\\text{ Pa}$",
      "$7{,}4 \\times 10^3\\text{ Pa}$ dan $1{,}740 \\times 10^5\\text{ Pa}$",
      "$2{,}4 \\times 10^3\\text{ Pa}$ dan $1{,}024 \\times 10^5\\text{ Pa}$",
      "$9{,}8 \\times 10^3\\text{ Pa}$ dan $1{,}098 \\times 10^5\\text{ Pa}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada fluida berlapis yang tidak saling bercampur, tekanan hidrostatis total pada dasar bejana merupakan penjumlahan tekanan hidrostatis masing-masing lapisan fluida:<br>$$P_h = \\sum_{i} \\rho_i \\cdot g \\cdot h_i = \\rho_{\\text{minyak}} g h_{\\text{minyak}} + \\rho_{\\text{air}} g h_{\\text{air}}$$Sedangkan tekanan mutlak diperoleh dengan menjumlahkan tekanan atmosfer permukaan:<br>$$P_{\\text{mutlak}} = P_0 + P_h$$",
      "steps": "1. Konversikan ketinggian tiap lapisan ke meter:<br>• $h_{\\text{minyak}} = 30\\text{ cm} = 0{,}3\\text{ m}$<br>• $h_{\\text{air}} = 50\\text{ cm} = 0{,}5\\text{ m}$<br>2. Hitung kontribusi tekanan hidrostatis masing-masing lapisan:<br>• Lapisan minyak: $P_{h1} = 800\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 0{,}3\\text{ m} = 2.400\\text{ Pa}$<br>• Lapisan air: $P_{h2} = 1000\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 0{,}5\\text{ m} = 5.000\\text{ Pa}$<br>3. Tekanan hidrostatis total pada dasar:<br>$$P_h = 2.400\\text{ Pa} + 5.000\\text{ Pa} = 7.400\\text{ Pa} = 7{,}4 \\times 10^3\\text{ Pa}$$<br>4. Tekanan mutlak pada dasar bejana:<br>$$P_{\\text{mutlak}} = 1{,}0 \\times 10^5\\text{ Pa} + 0{,}074 \\times 10^5\\text{ Pa} = 1{,}074 \\times 10^5\\text{ Pa}$$",
      "pitfalls": "Siswa sering hanya memperhitungkan tekanan dari lapisan air saja ($5{,}0 \\times 10^3\\text{ Pa}$) dan mengabaikan beban fluida minyak di atasnya yang turut menekan ke bawah."
    },
    "subTopicSlug": "tekanan-hidrostatis-mutlak",
    "bab": "Fluida",
    "subBab": "Tekanan Hidrostatis & Mutlak",
    "subTopic": "Tekanan Hidrostatis & Mutlak",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Pada fluida berlapis yang tidak saling bercampur, tekanan hidrostatis total pada dasar bejana merupakan penjumlahan tekanan hidrostatis masing-masing lapisan fluida: $$P_h = \\sum_{i} \\rho_i \\cdot g \\cdot h_i = \\rho_{\\text{minyak}} g h_{\\text{minyak}} + \\rho_{\\text{air}} g h_{\\text{air}}$$Sedangkan tekanan mutlak diperoleh dengan menjumlahkan tekanan atmosfer permukaan: $$P_{\\text{mutlak}} = P_0 + P_h$$."
  },
  {
    "id": "fis-flu-statis-tekanan-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-tekanan",
    "category": "Tekanan Hidrostatis & Mutlak",
    "difficulty": "sedang",
    "statement": "Sebuah pintu air bendungan berbentuk bidang persegi panjang vertikal dengan lebar $w = 2\\text{ meter}$ dan tinggi $H = 4\\text{ meter}$. Air waduk (massa jenis $\\rho = 1000\\text{ kg/m}^3$) terisi penuh hingga mencapai tepi atas pintu air. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya resultan yang dikerjakan oleh air pada dinding pintu air tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$8{,}0 \\times 10^4\\text{ N}$",
      "$1{,}6 \\times 10^5\\text{ N}$",
      "$3{,}2 \\times 10^5\\text{ N}$",
      "$4{,}0 \\times 10^4\\text{ N}$",
      "$6{,}4 \\times 10^5\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Karena tekanan hidrostatis bertambah secara linier terhadap kedalaman ($P(y) = \\rho g y$), maka gaya total pada dinding vertikal diperoleh dari integrasi atau perkalian antara tekanan rata-rata fluida (tekanan pada titik berat luasan, $\\bar{y} = H/2$) dengan luas penampang dinding:<br>$$F = \\bar{P} \\cdot A = \\left(\\frac{1}{2} \\rho \\cdot g \\cdot H\\right) \\cdot (w \\cdot H) = \\frac{1}{2} \\rho \\cdot g \\cdot w \\cdot H^2$$",
      "steps": "1. Menentukan tekanan rata-rata pada dinding vertikal:<br>• Tekanan di permukaan ($y = 0$): $P_0 = 0$<br>• Tekanan di dasar ($y = H$): $P_{\\text{dasar}} = 1000 \\times 10 \\times 4 = 40.000\\text{ N/m}^2$<br>• Tekanan rata-rata: $\\bar{P} = \\frac{0 + 40.000}{2} = 20.000\\text{ N/m}^2$<br>2. Menghitung luas dinding pintu air:<br>$$A = w \\cdot H = 2\\text{ m} \\times 4\\text{ m} = 8\\text{ m}^2$$<br>3. Menghitung gaya dorong total air:<br>$$F = \\bar{P} \\cdot A = 20.000\\text{ N/m}^2 \\times 8\\text{ m}^2 = 160.000\\text{ N} = 1{,}6 \\times 10^5\\text{ N}$$",
      "pitfalls": "Kesalahan paling fatal adalah langsung mengalikan tekanan hidrostatis maksimum di dasar ($40.000\\text{ Pa}$) dengan seluruh luas dinding ($8\\text{ m}^2$) sehingga menghasilkan $3{,}2 \\times 10^5\\text{ N}$ (opsi C). Tekanan bervariasi dari nol di atas hingga maksimum di dasar sehingga wajib menggunakan nilai rata-rata."
    },
    "subTopicSlug": "tekanan-hidrostatis-mutlak",
    "bab": "Fluida",
    "subBab": "Tekanan Hidrostatis & Mutlak",
    "subTopic": "Tekanan Hidrostatis & Mutlak",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Karena tekanan hidrostatis bertambah secara linier terhadap kedalaman ($P(y) = \\rho g y$), maka gaya total pada dinding vertikal diperoleh dari integrasi atau perkalian antara tekanan rata-rata fluida (tekanan pada titik berat luasan, $\\bar{y} = H/2$) dengan luas penampang dinding: $$F = \\bar{P} \\cdot A = \\left(\\frac{1}{2} \\rho \\cdot g \\cdot H\\right) \\cdot (w \\cdot H) = \\frac{1}{2} \\rho \\cdot g \\cdot w \\cdot H^2$$."
  },
  {
    "id": "fis-flu-statis-tekanan-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-tekanan",
    "category": "Tekanan Hidrostatis & Mutlak",
    "difficulty": "sedang",
    "statement": "Sebuah gelembung udara kecil terbentuk dan dilepaskan dari dasar sebuah danau berair tenang. Saat gelembung tersebut naik perlahan dan tepat mencapai permukaan danau, volumenya membesar menjadi $3$ kali volume semula. Jika suhu air danau dianggap seragam dari dasar hingga permukaan (proses isotermal), tekanan atmosfer di permukaan danau $P_0 = 10^5\\text{ Pa}$, massa jenis air $\\rho = 1000\\text{ kg/m}^3$, dan $g = 10\\text{ m/s}^2$, kedalaman danau tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ meter}$",
      "$15\\text{ meter}$",
      "$20\\text{ meter}$",
      "$30\\text{ meter}$",
      "$40\\text{ meter}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada kondisi suhu konstan (isotermal), gas di dalam gelembung mematuhi Hukum Boyle:<br>$$P_1 \\cdot V_1 = P_2 \\cdot V_2$$Di dasar danau, tekanan mutlak adalah $P_1 = P_0 + \\rho g h$. Di permukaan danau, tekanan adalah $P_2 = P_0$.",
      "steps": "1. Tuliskan persamaan Hukum Boyle:<br>$$(P_0 + \\rho \\cdot g \\cdot h) \\cdot V_1 = P_0 \\cdot (3V_1)$$<br>2. Sederhanakan dengan membagi kedua ruas dengan $V_1$:<br>$$P_0 + \\rho \\cdot g \\cdot h = 3P_0 \\iff \\rho \\cdot g \\cdot h = 2P_0$$<br>3. Hitung kedalaman $h$:<br>$$h = \\frac{2P_0}{\\rho \\cdot g} = \\frac{2 \\times 10^5\\text{ Pa}}{1000\\text{ kg/m}^3 \\times 10\\text{ m/s}^2} = \\frac{200.000}{10.000} = 20\\text{ meter}$$",
      "pitfalls": "Siswa sering lupa bahwa di permukaan air masih terdapat tekanan atmosfer $P_0$, sehingga secara keliru menuliskan $\\rho g h = 3 P_0$ yang menghasilkan kedalaman $30\\text{ meter}$ (opsi D)."
    },
    "subTopicSlug": "tekanan-hidrostatis-mutlak",
    "bab": "Fluida",
    "subBab": "Tekanan Hidrostatis & Mutlak",
    "subTopic": "Tekanan Hidrostatis & Mutlak",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Pada kondisi suhu konstan (isotermal), gas di dalam gelembung mematuhi Hukum Boyle: $$P_1 \\cdot V_1 = P_2 \\cdot V_2$$Di dasar danau, tekanan mutlak adalah $P_1 = P_0 + \\rho g h$. Di permukaan danau, tekanan adalah $P_2 = P_0$."
  },
  {
    "id": "fis-flu-statis-tekanan-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-tekanan",
    "category": "Tekanan Hidrostatis & Mutlak",
    "difficulty": "sedang",
    "statement": "Sebuah bejana silinder berisi air tawar (massa jenis $\\rho = 1000\\text{ kg/m}^3$) setinggi $60\\text{ cm}$ diletakkan di lantai sebuah lift. Tepat pada kedalaman $20\\text{ cm}$ di bawah permukaan air dipasang sebuah sensor tekanan hidrostatis. Jika lift bergerak vertikal ke atas dengan percepatan tetap $a = 2\\text{ m/s}^2$ (percepatan gravitasi bumi $g = 10\\text{ m/s}^2$), besar tekanan hidrostatis yang dideteksi oleh sensor tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1.600\\text{ Pa}$",
      "$2.000\\text{ Pa}$",
      "$2.400\\text{ Pa}$",
      "$4.800\\text{ Pa}$",
      "$7.200\\text{ Pa}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Dalam kerangka non-inersial lift yang dipercepat ke atas dengan percepatan $a$, fluida mengalami medan gravitasi efektif sebesar:<br>$$g_{\\text{eff}} = g + a$$Sehingga tekanan hidrostatis fluida pada kedalaman $h$ menjadi:<br>$$P_h = \\rho \\cdot g_{\\text{eff}} \\cdot h = \\rho (g + a) h$$",
      "steps": "1. Tentukan percepatan efektif fluida:<br>$$g_{\\text{eff}} = 10\\text{ m/s}^2 + 2\\text{ m/s}^2 = 12\\text{ m/s}^2$$<br>2. Konversikan kedalaman sensor: $h = 20\\text{ cm} = 0{,}2\\text{ m}$<br>3. Hitung tekanan hidrostatis pada sensor:<br>$$P_h = 1000\\text{ kg/m}^3 \\times 12\\text{ m/s}^2 \\times 0{,}2\\text{ m} = 2.400\\text{ Pa}$$",
      "pitfalls": "Menggunakan $g = 10\\text{ m/s}^2$ tanpa mempertimbangkan percepatan lift menghasilkan $2.000\\text{ Pa}$ (opsi B), atau mengurangkan gravitasi $g - a$ menghasilkan $1.600\\text{ Pa}$ (opsi A, yang merupakan kasus jika lift bergerak dipercepat ke bawah)."
    },
    "subTopicSlug": "tekanan-hidrostatis-mutlak",
    "bab": "Fluida",
    "subBab": "Tekanan Hidrostatis & Mutlak",
    "subTopic": "Tekanan Hidrostatis & Mutlak",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Dalam kerangka non-inersial lift yang dipercepat ke atas dengan percepatan $a$, fluida mengalami medan gravitasi efektif sebesar: $$g_{\\text{eff}} = g + a$$Sehingga tekanan hidrostatis fluida pada kedalaman $h$ menjadi: $$P_h = \\rho \\cdot g_{\\text{eff}} \\cdot h = \\rho (g + a) h$$."
  },
  {
    "id": "fis-flu-statis-tekanan-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-tekanan",
    "category": "Tekanan Hidrostatis & Mutlak",
    "difficulty": "sedang",
    "statement": "Sebuah wadah tabung gas tertutup dihubungkan dengan manometer pipa U terbuka yang berisi air raksa (massa jenis $\\rho_{\\text{raksa}} = 13.600\\text{ kg/m}^3$). Permukaan raksa pada kaki manometer yang terbuka ke udara luar berada $15\\text{ cm}$ lebih tinggi daripada permukaan raksa pada kaki yang tersambung ke tabung gas. Jika tekanan atmosfer terukur $P_{\\text{atm}} = 1{,}00 \\times 10^5\\text{ Pa}$ dan percepatan gravitasi $g = 10\\text{ m/s}^2$, besar tekanan mutlak gas di dalam tabung adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}204 \\times 10^5\\text{ Pa}$",
      "$0{,}796 \\times 10^5\\text{ Pa}$",
      "$2{,}040 \\times 10^4\\text{ Pa}$",
      "$1{,}020 \\times 10^5\\text{ Pa}$",
      "$2{,}204 \\times 10^5\\text{ Pa}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada manometer pipa U terbuka, selisih tinggi permukaan raksa $\\Delta h$ menunjukkan perbedaan antara tekanan gas di dalam wadah dan tekanan atmosfer luar:<br>$$P_{\\text{gas}} = P_{\\text{atm}} + \\rho_{\\text{raksa}} \\cdot g \\cdot \\Delta h$$Tanda positif digunakan karena permukaan raksa pada kaki terbuka lebih tinggi, menandakan tekanan gas lebih besar daripada tekanan atmosfer.",
      "steps": "1. Konversikan selisih tinggi raksa: $\\Delta h = 15\\text{ cm} = 0{,}15\\text{ m}$<br>2. Hitung tekanan ukur (gauge pressure) kolom raksa:<br>$$P_{\\text{gauge}} = \\rho_{\\text{raksa}} \\cdot g \\cdot \\Delta h = 13.600\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 0{,}15\\text{ m} = 20.400\\text{ Pa} = 0{,}204 \\times 10^5\\text{ Pa}$$<br>3. Hitung tekanan mutlak gas di dalam tabung:<br>$$P_{\\text{gas}} = P_{\\text{atm}} + P_{\\text{gauge}} = 1{,}00 \\times 10^5\\text{ Pa} + 0{,}204 \\times 10^5\\text{ Pa} = 1{,}204 \\times 10^5\\text{ Pa}$$",
      "pitfalls": "Siswa sering keliru mengurangkan tekanan atmosfer ($P_{\\text{atm}} - \\Delta P$) sehingga menghasilkan $0{,}796 \\times 10^5\\text{ Pa}$ (opsi B). Perhatikan baik-baik kaki mana yang lebih tinggi: jika kaki terbuka yang lebih tinggi, artinya tekanan gas mampu mendorong fluida lebih kuat daripada udara luar."
    },
    "subTopicSlug": "tekanan-hidrostatis-mutlak",
    "bab": "Fluida",
    "subBab": "Tekanan Hidrostatis & Mutlak",
    "subTopic": "Tekanan Hidrostatis & Mutlak",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Pada manometer pipa U terbuka, selisih tinggi permukaan raksa $\\Delta h$ menunjukkan perbedaan antara tekanan gas di dalam wadah dan tekanan atmosfer luar: $$P_{\\text{gas}} = P_{\\text{atm}} + \\rho_{\\text{raksa}} \\cdot g \\cdot \\Delta h$$Tanda positif digunakan karena permukaan raksa pada kaki terbuka lebih tinggi, menandakan tekanan gas lebih besar daripada tekanan atmosfer."
  },
  {
    "id": "mudah-fis-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-statis-tekanan",
    "category": "Tekanan Hidrostatis",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang penyelam berada pada kedalaman $8\\text{ meter}$ di bawah permukaan danau air tawar (massa jenis air $\\rho = 1000\\text{ kg/m}^3$). Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar tekanan hidrostatis yang dialami penyelam tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$8\\times 10^3\\text{ Pa}$",
      "$1{,}8\\times 10^4\\text{ Pa}$",
      "$8\\times 10^4\\text{ Pa}$",
      "$1{,}8\\times 10^5\\text{ Pa}$",
      "$8\\times 10^5\\text{ Pa}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Tekanan Hidrostatis Murni:</strong><br>\n          $$P_h = \\rho g h$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$P_h = (1000\\text{ kg/m}^3)(10\\text{ m/s}^2)(8\\text{ m}) = 80.000\\text{ Pa} = 8\\times 10^4\\text{ Pa}$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Soal menanyakan <em>tekanan hidrostatis</em>, bukan tekanan mutlak ($P_{\\text{mutlak}} = P_0 + P_h$). Jadi tekanan atmosfer $P_0$ tidak dijumlahkan.\n        </div>\n      "
    },
    "bab": "Fluida",
    "subBab": "Tekanan Hidrostatis & Mutlak",
    "subTopic": "Tekanan Hidrostatis & Mutlak",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-statis",
    "subTopicSlug": "tekanan-hidrostatis-mutlak",
    "hint": "Tekanan Hidrostatis Murni: $$P_h = \\rho g h$$. **Tips:** Soal menanyakan tekanan hidrostatis , bukan tekanan mutlak ($P_{\\text{mutlak}} = P_0 + P_h$)."
  },
  {
    "id": "sup-fis-flu-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-statis-tekanan",
    "category": "Tekanan Mutlak Fluida",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seorang penyelam berada di kedalaman $20\\text{ meter}$ di bawah permukaan danau air tawar (massa jenis air $\\rho = 1000\\text{ kg/m}^3$, percepatan gravitasi $g = 10\\text{ m/s}^2$). Jika tekanan atmosfer di atas permukaan danau adalah $P_{\\text{atm}} = 1{,}01 \\times 10^5\\text{ Pa}$, maka tekanan mutlak yang dialami penyelam tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3{,}01 \\times 10^5\\text{ Pa}$",
      "$2{,}00 \\times 10^5\\text{ Pa}$",
      "$2{,}01 \\times 10^5\\text{ Pa}$",
      "$1{,}21 \\times 10^5\\text{ Pa}$",
      "$3{,}21 \\times 10^5\\text{ Pa}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Tekanan Mutlak (Total):</strong><br>Tekanan total pada kedalaman $h$ merupakan jumlahan dari tekanan atmosfer luar dan tekanan hidrostatis zat cair: $P_{\\text{mutlak}} = P_{\\text{atm}} + \\rho g h$.</div>",
      "steps": "<ol><li>Tekanan hidrostatis: $P_h = \\rho g h = 1000 \\times 10 \\times 20 = 200.000\\text{ Pa} = 2{,}00 \\times 10^5\\text{ Pa}$.</li><li>Tekanan atmosfer: $P_{\\text{atm}} = 1{,}01 \\times 10^5\\text{ Pa}$.</li><li>Tekanan mutlak: $P = P_{\\text{atm}} + P_h = 1{,}01 \\times 10^5 + 2{,}00 \\times 10^5 = 3{,}01 \\times 10^5\\text{ Pa}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Hanya menghitung tekanan hidrostatis murni ($2{,}00 \\times 10^5\\text{ Pa}$) dan mengabaikan tekanan atmosfer di permukaan danau.</div>"
    },
    "bab": "Fluida",
    "subBab": "Tekanan Hidrostatis & Mutlak",
    "subTopic": "Tekanan Hidrostatis & Mutlak",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-statis",
    "subTopicSlug": "tekanan-hidrostatis-mutlak",
    "hint": "Tekanan Mutlak (Total): Tekanan total pada kedalaman $h$ merupakan jumlahan dari tekanan atmosfer luar dan tekanan hidrostatis zat cair: $P_{\\text{mutlak}} = P_{\\text{atm}} + \\rho g h$. **Tips:** Hanya menghitung tekanan hidrostatis murni ($2{,}00 \\times 10^5\\text{ Pa}$) dan mengabaikan tekanan atmosfer di permukaan danau."
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
