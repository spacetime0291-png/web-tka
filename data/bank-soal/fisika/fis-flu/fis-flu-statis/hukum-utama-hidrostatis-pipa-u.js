/**
 * Bank Soal TKA: Fisika (TKA) - Fluida
 * Bab Kecil: Fluida Statis (fis-flu-statis)
 * Sub-Bab: Hukum Utama Hidrostatis (Pipa U) (fis-flu-statis-pipau)
 * Slug: hukum-utama-hidrostatis-pipa-u
 * Indikator: Prinsip kesamaan tekanan pada bidang datar horizontal fluida sejenis (rho_1 * h_1 = rho_2 * h_2).
 * 
 * Total Butir Soal: 11 (Mudah: 5, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-flu-statis-pipau";
  const subTopicSlug = "hukum-utama-hidrostatis-pipa-u";
  const questions = [
  {
    "id": "fis-flu-statis-pipau-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pipau",
    "category": "Hukum Utama Hidrostatis (Pipa U)",
    "difficulty": "mudah",
    "statement": "Hukum Utama Hidrostatis menyatakan bahwa semua titik yang berada pada satu bidang datar horizontal di dalam fluida akan memiliki besar tekanan hidrostatis yang sama. Syarat fisis mutlak yang harus dipenuhi agar hukum tersebut berlaku adalah titik-titik tersebut harus berada dalam ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Jenis zat cair yang sama dan dalam keadaan diam (setimbang statis)",
      "Dua jenis zat cair yang berbeda massa jenisnya asalkan berada pada wadah terbuka",
      "Pipa kapiler yang memiliki luas penampang berbeda saat fluida mengalir tenang",
      "Fluida yang sedang mengalami percepatan sudut konstan di dalam bejana tertutup",
      "Zat cair kental yang mengalir laminer pada saluran pipa miring"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hukum Utama Hidrostatis dirumuskan dari persamaan dasar kesetimbangan statis fluida:<br>$$P_A = P_B \\iff \\rho_A \\cdot g \\cdot h_A = \\rho_B \\cdot g \\cdot h_B$$Hukum ini hanya berlaku jika titik A dan B berada pada fluida yang sejenis ($\\rho_A = \\rho_B$) dan fluida tidak mengalami percepatan (diam/statis).",
      "steps": "1. Tinjau syarat fisis Hukum Utama Hidrostatis:<br>• Fluida harus homogen/sejenis (massa jenis $\\rho$ seragam)<br>• Fluida harus dalam kondisi diam (tidak ada percepatan translasi maupun rotasi)<br>• Terletak pada bidang horizontal yang sama ($h$ sama)<br>2. Evaluasi pilihan jawaban: Hanya opsi A yang memenuhi ketiga kriteria esensial tersebut secara sempurna.",
      "pitfalls": "Siswa sering menganggap bahwa titik-titik pada kedalaman sama selalu memiliki tekanan sama meskipun berada pada dua jenis cairan yang berbeda massa jenisnya, padahal tekanan hidrostatis bergantung langsung pada massa jenis zat cair."
    },
    "subTopicSlug": "hukum-utama-hidrostatis-pipa-u",
    "bab": "Fluida",
    "subBab": "Hukum Utama Hidrostatis (Pipa U)",
    "subTopic": "Hukum Utama Hidrostatis (Pipa U)",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan perumusan konsep fisis: $$P_A = P_B \\iff \\rho_A \\cdot g \\cdot h_A = \\rho_B \\cdot g \\cdot h_B$$Hukum ini hanya berlaku jika titik A dan B berada pada fluida yang sejenis ($\\rho_A = \\rho_B$) dan fluida tidak mengalami percepatan (diam/statis)."
  },
  {
    "id": "fis-flu-statis-pipau-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pipau",
    "category": "Hukum Utama Hidrostatis (Pipa U)",
    "difficulty": "mudah",
    "statement": "Sebuah pipa U mula-mula diisi dengan air tawar (massa jenis $\\rho_{\\text{air}} = 1000\\text{ kg/m}^3$). Pada salah satu kaki pipa U dituangkan minyak (massa jenis $\\rho_{\\text{minyak}} = 800\\text{ kg/m}^3$) setinggi $10\\text{ cm}$. Selisih ketinggian permukaan air pada kedua kaki pipa U ($Delta h_{\\text{air}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6\\text{ cm}$",
      "$8\\text{ cm}$",
      "$10\\text{ cm}$",
      "$12{,}5\\text{ cm}$",
      "$16\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Berdasarkan Hukum Utama Hidrostatis pada bidang batas antara minyak dan air:<br>$$P_{\\text{kiri}} = P_{\\text{kanan}} \\iff \\rho_{\\text{air}} \\cdot g \\cdot \\Delta h_{\\text{air}} = \\rho_{\\text{minyak}} \\cdot g \\cdot h_{\\text{minyak}}$$Sehingga:<br>$$\\Delta h_{\\text{air}} = \\frac{\\rho_{\\text{minyak}}}{\\rho_{\\text{air}}} \\cdot h_{\\text{minyak}}$$",
      "steps": "1. Identifikasi data dari soal:<br>• $\\rho_{\\text{air}} = 1000\\text{ kg/m}^3$<br>• $\\rho_{\\text{minyak}} = 800\\text{ kg/m}^3$<br>• $h_{\\text{minyak}} = 10\\text{ cm}$<br>2. Hitung selisih tinggi permukaan air:<br>$$\\Delta h_{\\text{air}} = \\frac{800}{1000} \\times 10\\text{ cm} = 0{,}8 \\times 10\\text{ cm} = 8\\text{ cm}$$",
      "pitfalls": "Terkecoh membalik rasio massa jenis (menghitung $\\frac{1000}{800} \\times 10 = 12{,}5\\text{ cm}$, opsi D). Karena massa jenis air lebih besar daripada minyak, maka tinggi kolom air penyeimbang harus lebih pendek daripada tinggi kolom minyak."
    },
    "subTopicSlug": "hukum-utama-hidrostatis-pipa-u",
    "bab": "Fluida",
    "subBab": "Hukum Utama Hidrostatis (Pipa U)",
    "subTopic": "Hukum Utama Hidrostatis (Pipa U)",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Berdasarkan Hukum Utama Hidrostatis pada bidang batas antara minyak dan air: $$P_{\\text{kiri}} = P_{\\text{kanan}} \\iff \\rho_{\\text{air}} \\cdot g \\cdot \\Delta h_{\\text{air}} = \\rho_{\\text{minyak}} \\cdot g \\cdot h_{\\text{minyak}}$$Sehingga: $$\\Delta h_{\\text{air}} = \\frac{\\rho_{\\text{minyak}}}{\\rho_{\\text{air}}} \\cdot h_{\\text{minyak}}$$."
  },
  {
    "id": "fis-flu-statis-pipau-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pipau",
    "category": "Hukum Utama Hidrostatis (Pipa U)",
    "difficulty": "mudah",
    "statement": "Sebuah pipa U mula-mula berisi air raksa dengan massa jenis $\\rho_{\\text{raksa}} = 13{,}6\\text{ g/cm}^3$. Ke dalam kaki kiri dituangkan cairan zat X setinggi $27{,}2\\text{ cm}$. Akibatnya, permukaan raksa pada kaki kanan naik sehingga terdapat selisih ketinggian permukaan raksa sebesar $2{,}0\\text{ cm}$ diukur dari bidang batas pisah antara zat X dan raksa di kaki kiri. Besar massa jenis zat cair X tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}5\\text{ g/cm}^3$",
      "$0{,}8\\text{ g/cm}^3$",
      "$1{,}0\\text{ g/cm}^3$",
      "$1{,}2\\text{ g/cm}^3$",
      "$2{,}0\\text{ g/cm}^3$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Dengan menarik garis horizontal melalui bidang batas pisah fluida di kaki kiri (titik 1) ke titik setara di kaki kanan (titik 2):<br>$$P_1 = P_2 \\iff \\rho_X \\cdot g \\cdot h_X = \\rho_{\\text{raksa}} \\cdot g \\cdot h_{\\text{raksa}}$$Maka massa jenis zat X dapat ditentukan melalui:<br>$$\\rho_X = \\frac{\\rho_{\\text{raksa}} \\cdot h_{\\text{raksa}}}{h_X}$$",
      "steps": "1. Substitusikan besaran yang diketahui dalam satuan CGS:<br>• $\\rho_{\\text{raksa}} = 13{,}6\\text{ g/cm}^3$<br>• $h_{\\text{raksa}} = 2{,}0\\text{ cm}$<br>• $h_X = 27{,}2\\text{ cm}$<br>2. Hitung massa jenis zat X:<br>$$\\rho_X = \\frac{13{,}6\\text{ g/cm}^3 \\times 2{,}0\\text{ cm}}{27{,}2\\text{ cm}} = \\frac{27{,}2}{27{,}2} = 1{,}0\\text{ g/cm}^3$$",
      "pitfalls": "Siswa terkadang salah membaca satuan dan mencoba mengonversi ke $\\text{kg/m}^3$ di tengah jalan namun lupa mengonversi ketinggian, menyebabkan kekeliruan perhitungan desimal."
    },
    "subTopicSlug": "hukum-utama-hidrostatis-pipa-u",
    "bab": "Fluida",
    "subBab": "Hukum Utama Hidrostatis (Pipa U)",
    "subTopic": "Hukum Utama Hidrostatis (Pipa U)",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Dengan menarik garis horizontal melalui bidang batas pisah fluida di kaki kiri (titik 1) ke titik setara di kaki kanan (titik 2): $$P_1 = P_2 \\iff \\rho_X \\cdot g \\cdot h_X = \\rho_{\\text{raksa}} \\cdot g \\cdot h_{\\text{raksa}}$$Maka massa jenis zat X dapat ditentukan melalui: $$\\rho_X = \\frac{\\rho_{\\text{raksa}} \\cdot h_{\\text{raksa}}}{h_X}$$."
  },
  {
    "id": "fis-flu-statis-pipau-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pipau",
    "category": "Hukum Utama Hidrostatis (Pipa U)",
    "difficulty": "mudah",
    "statement": "Sebuah pipa U yang memiliki luas penampang kaki kiri $A_1 = 4\\text{ cm}^2$ dan kaki kanan $A_2 = 12\\text{ cm}^2$ mula-mula diisi air (massa jenis $\\rho_a = 1{,}0\\text{ g/cm}^3$). Kemudian ke dalam kaki kiri dituangkan minyak (massa jenis $\\rho_m = 0{,}75\\text{ g/cm}^3$) setinggi $h_m = 16\\text{ cm}$. Kenaikan permukaan air pada kaki kanan diukur dari posisi permukaan semula sebelum minyak dituangkan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ cm}$",
      "$3\\text{ cm}$",
      "$4\\text{ cm}$",
      "$9\\text{ cm}$",
      "$12\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada pipa U berpenampang tidak sama:<br>1) Kekekalan volume zat cair inkompresibel: Volume air yang tertekan turun pada kaki kiri sebesar $y_1$ sama dengan volume air yang naik pada kaki kanan sebesar $y_2$:<br>$$A_1 \\cdot y_1 = A_2 \\cdot y_2$$<br>2) Selisih tinggi permukaan air total adalah $\\Delta h_a = y_1 + y_2$.<br>3) Kesetimbangan hidrostatis pada bidang batas: $\\rho_m h_m = \\rho_a \\Delta h_a$.",
      "steps": "1. Hitung selisih total ketinggian permukaan air ($\\Delta h_a$):<br>$$\\Delta h_a = \\frac{\\rho_m}{\\rho_a} \\cdot h_m = \\frac{0{,}75}{1{,}0} \\times 16\\text{ cm} = 12\\text{ cm}$$<br>2. Hubungkan penurunan $y_1$ dan kenaikan $y_2$ melalui kesamaan volume:<br>$$4 \\cdot y_1 = 12 \\cdot y_2 \\implies y_1 = 3 y_2$$<br>3. Substitusikan ke selisih total $\\Delta h_a$:<br>$$\\Delta h_a = y_1 + y_2 = 3 y_2 + y_2 = 4 y_2 = 12\\text{ cm} \\implies y_2 = 3\\text{ cm}$$",
      "pitfalls": "Siswa sering mengira kenaikan di kaki kanan langsung sama dengan $\\Delta h_a = 12\\text{ cm}$ (opsi E) atau membagi dua rata $12 / 2 = 6\\text{ cm}$ tanpa memperhitungkan perbandingan luas penampang $A_1 : A_2 = 1 : 3$."
    },
    "subTopicSlug": "hukum-utama-hidrostatis-pipa-u",
    "bab": "Fluida",
    "subBab": "Hukum Utama Hidrostatis (Pipa U)",
    "subTopic": "Hukum Utama Hidrostatis (Pipa U)",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Pada pipa U berpenampang tidak sama: 1) Kekekalan volume zat cair inkompresibel: Volume air yang tertekan turun pada kaki kiri sebesar $y_1$ sama dengan volume air yang naik pada kaki kanan sebesar $y_2$: $$A_1 \\cdot y_1 = A_2 \\cdot y_2$$ 2) Selisih tinggi permukaan air total adalah $\\Delta h_a = y_1 + y_2$. 3) Kesetimbangan hidrostatis pada bidang batas: $\\rho_m h_m = \\rho_a \\Delta h_a$."
  },
  {
    "id": "fis-flu-statis-pipau-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pipau",
    "category": "Hukum Utama Hidrostatis (Pipa U)",
    "difficulty": "mudah",
    "statement": "Sebuah pipa U dengan kedua ujung terbuka ke atmosfer diisi air tawar (massa jenis $\\rho_a = 1000\\text{ kg/m}^3$). Pada kaki kanan dituangkan zat cair organik (massa jenis $\\rho_b = 800\\text{ kg/m}^3$) setinggi $15\\text{ cm}$ sehingga kedua cairan tidak bercampur. Selisih ketinggian antara puncak permukaan cairan organik di kaki kanan dan puncak permukaan air di kaki kiri ($\\Delta H$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ cm}$",
      "$3\\text{ cm}$",
      "$5\\text{ cm}$",
      "$8\\text{ cm}$",
      "$12\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hukum utama hidrostatis menghubungkan tinggi kolom di atas bidang pisah:<br>$$\\rho_a \\cdot h_a = \\rho_b \\cdot h_b$$Selisih ketinggian antara kedua permukaan atas zat cair adalah selisih antara tinggi kolom zat cair organik dan tinggi kolom air penyeimbang:<br>$$\\Delta H = h_b - h_a$$",
      "steps": "1. Hitung tinggi kolom air ($h_a$) di atas bidang batas:<br>$$h_a = \\frac{\\rho_b}{\\rho_a} \\cdot h_b = \\frac{800\\text{ kg/m}^3}{1000\\text{ kg/m}^3} \\times 15\\text{ cm} = 0{,}8 \\times 15\\text{ cm} = 12\\text{ cm}$$<br>2. Hitung selisih ketinggian puncak permukaan kedua cairan:<br>$$\\Delta H = h_b - h_a = 15\\text{ cm} - 12\\text{ cm} = 3\\text{ cm}$$",
      "pitfalls": "Siswa sering menganggap bahwa selisih ketinggian yang ditanyakan adalah tinggi kolom air $h_a = 12\\text{ cm}$ (opsi E), padahal yang diminta adalah selisih antara puncak permukaan cairan organik dan puncak permukaan air ($h_b - h_a$)."
    },
    "subTopicSlug": "hukum-utama-hidrostatis-pipa-u",
    "bab": "Fluida",
    "subBab": "Hukum Utama Hidrostatis (Pipa U)",
    "subTopic": "Hukum Utama Hidrostatis (Pipa U)",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan perumusan konsep fisis: $$\\rho_a \\cdot h_a = \\rho_b \\cdot h_b$$Selisih ketinggian antara kedua permukaan atas zat cair adalah selisih antara tinggi kolom zat cair organik dan tinggi kolom air penyeimbang: $$\\Delta H = h_b - h_a$$."
  },
  {
    "id": "fis-flu-statis-pipau-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pipau",
    "category": "Hukum Utama Hidrostatis (Pipa U)",
    "difficulty": "sedang",
    "statement": "Sebuah pipa U mula-mula berisi air raksa dengan massa jenis $\\rho_r = 13{,}6\\text{ g/cm}^3$. Ke dalam kaki kiri pipa dituangkan air (massa jenis $\\rho_a = 1{,}0\\text{ g/cm}^3$) setinggi $20\\text{ cm}$, sedangkan ke dalam kaki kanan dituangkan minyak (massa jenis $\\rho_m = 0{,}8\\text{ g/cm}^3$) setinggi $8\\text{ cm}$. Ketiga zat cair tersebut tidak saling bercampur. Selisih ketinggian permukaan air raksa pada kedua kaki pipa U ($\\Delta h_r$) dalam kondisi setimbang statis adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}5\\text{ cm}$",
      "$1{,}0\\text{ cm}$",
      "$1{,}5\\text{ cm}$",
      "$2{,}0\\text{ cm}$",
      "$2{,}5\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Berdasarkan Hukum Utama Hidrostatis, kita buat bidang acuan horizontal yang melewati batas terendah antara raksa dan fluida lainnya (dalam hal ini bidang batas raksa di kaki kiri yang tertekan lebih dalam):<br>$$P_{\\text{kiri}} = P_{\\text{kanan}} \\iff P_0 + \\rho_a \\cdot g \\cdot h_a = P_0 + \\rho_m \\cdot g \\cdot h_m + \\rho_r \\cdot g \\cdot \\Delta h_r$$Sehingga selisih tinggi raksa dirumuskan:<br>$$\\Delta h_r = \\frac{\\rho_a \\cdot h_a - \\rho_m \\cdot h_m}{\\rho_r}$$",
      "steps": "1. Bandingkan tekanan yang diberikan oleh kolom cairan di kaki kiri dan kanan:<br>• Tekanan air kaki kiri: $\\rho_a \\cdot h_a = 1{,}0 \\times 20 = 20\\text{ g/cm}^2$<br>• Tekanan minyak kaki kanan: $\\rho_m \\cdot h_m = 0{,}8 \\times 8 = 6{,}4\\text{ g/cm}^2$<br>2. Karena tekanan kolom air lebih besar dari minyak, raksa di kaki kiri tertekan lebih ke bawah, sehingga raksa di kaki kanan lebih tinggi sebesar $\\Delta h_r$:<br>$$\\Delta h_r = \\frac{20 - 6{,}4}{13{,}6} = \\frac{13{,}6}{13{,}6} = 1{,}0\\text{ cm}$$",
      "pitfalls": "Siswa sering langsung menjumlahkan kedua ketinggian atau salah menentukan kaki mana yang raksanya lebih tinggi karena tidak menghitung hasil kali $\\rho \\cdot h$ masing-masing cairan terlebih dahulu."
    },
    "subTopicSlug": "hukum-utama-hidrostatis-pipa-u",
    "bab": "Fluida",
    "subBab": "Hukum Utama Hidrostatis (Pipa U)",
    "subTopic": "Hukum Utama Hidrostatis (Pipa U)",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Berdasarkan Hukum Utama Hidrostatis, kita buat bidang acuan horizontal yang melewati batas terendah antara raksa dan fluida lainnya (dalam hal ini bidang batas raksa di kaki kiri yang tertekan lebih dalam): $$P_{\\text{kiri}} = P_{\\text{kanan}} \\iff P_0 + \\rho_a \\cdot g \\cdot h_a = P_0 + \\rho_m \\cdot g \\cdot h_m + \\rho_r \\cdot g \\cdot \\Delta h_r$$Sehingga selisih tinggi raksa dirumuskan: $$\\Delta h_r = \\frac{\\rho_a \\cdot h_a - \\rho_m \\cdot h_m}{\\rho_r}$$."
  },
  {
    "id": "fis-flu-statis-pipau-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pipau",
    "category": "Hukum Utama Hidrostatis (Pipa U)",
    "difficulty": "sedang",
    "statement": "Sebuah pipa U yang memiliki dua kaki vertikal berjarak horizontal $L = 20\\text{ cm}$ satu sama lain berisi cairan homogen. Pipa U tersebut diletakkan di atas sebuah troli yang sedang bergerak di lintasan mendatar dengan percepatan horizontal tetap $a = 3\\text{ m/s}^2$ ke arah kanan. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, selisih ketinggian permukaan cairan antara kedua kaki pipa U ($\\Delta h$) saat cairan berada dalam keadaan setimbang relatif terhadap troli adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3\\text{ cm}$",
      "$4\\text{ cm}$",
      "$6\\text{ cm}$",
      "$8\\text{ cm}$",
      "$10\\text{ cm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Ketika bejana fluida mengalami percepatan horizontal $a$, permukaan bebas zat cair membentuk sudut kemiringan $\\theta$ terhadap bidang mendatar akibat resultan gaya berat dan gaya inersia (fiktif):<br>$$\\tan \\theta = \\frac{a}{g}$$Untuk pipa U dengan jarak antarkaki vertikal $L$, selisih tinggi cairan antara kedua kaki dirumuskan:<br>$$\\frac{\\Delta h}{L} = \\tan \\theta = \\frac{a}{g} \\implies \\Delta h = L \\cdot \\frac{a}{g}$$",
      "steps": "1. Identifikasi parameter:<br>• Jarak horizontal kedua kaki: $L = 20\\text{ cm}$<br>• Percepatan horizontal ke kanan: $a = 3\\text{ m/s}^2$<br>• Percepatan gravitasi bumi: $g = 10\\text{ m/s}^2$<br>2. Hitung selisih tinggi permukaan zat cair:<br>$$\\Delta h = 20\\text{ cm} \\times \\frac{3\\text{ m/s}^2}{10\\text{ m/s}^2} = 6\\text{ cm}$$<br>(Permukaan zat cair di kaki kiri lebih tinggi daripada kaki kanan karena dorongan inersia ke arah berlawanan dari percepatan).",
      "pitfalls": "Siswa sering membalik perbandingan menjadi $g/a$ yang menghasilkan nilai tidak fisis, atau lupa bahwa fluida akan menumpuk ke arah belakang (kiri) saat troli dipercepat ke kanan."
    },
    "subTopicSlug": "hukum-utama-hidrostatis-pipa-u",
    "bab": "Fluida",
    "subBab": "Hukum Utama Hidrostatis (Pipa U)",
    "subTopic": "Hukum Utama Hidrostatis (Pipa U)",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Ketika bejana fluida mengalami percepatan horizontal $a$, permukaan bebas zat cair membentuk sudut kemiringan $\\theta$ terhadap bidang mendatar akibat resultan gaya berat dan gaya inersia (fiktif): $$\\tan \\theta = \\frac{a}{g}$$Untuk pipa U dengan jarak antarkaki vertikal $L$, selisih tinggi cairan antara kedua kaki dirumuskan: $$\\frac{\\Delta h}{L} = \\tan \\theta = \\frac{a}{g} \\implies \\Delta h = L \\cdot \\frac{a}{g}$$."
  },
  {
    "id": "fis-flu-statis-pipau-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pipau",
    "category": "Hukum Utama Hidrostatis (Pipa U)",
    "difficulty": "sedang",
    "statement": "Sebuah pipa U memiliki satu kaki tertutup rapat dan satu kaki terbuka ke udara luar (tekanan atmosfer $P_0 = 76\\text{ cmHg}$). Mula-mula permukaan air raksa pada kedua kaki sama tinggi, dan pada kaki yang tertutup terperangkap kolom udara sepanjang $L_1 = 20\\text{ cm}$. Kemudian sejumlah raksa ditambahkan secara perlahan ke dalam kaki yang terbuka hingga pada suhu konstan (isotermal) panjang kolom udara yang terperangkap menyusut menjadi $L_2 = 16\\text{ cm}$. Selisih ketinggian permukaan raksa antara kaki terbuka dan kaki tertutup ($\\Delta h$) sekarang adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$9{,}5\\text{ cm}$",
      "$14\\text{ cm}$",
      "$19\\text{ cm}$",
      "$24\\text{ cm}$",
      "$28\\text{ cm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Masalah ini memadukan Hukum Boyle pada gas terperangkap dengan kesetimbangan hidrostatis manometer:<br>1) Proses isotermal gas ideal:<br>$$P_1 \\cdot V_1 = P_2 \\cdot V_2 \\iff P_1 \\cdot L_1 = P_2 \\cdot L_2$$<br>2) Karena awalnya kedua permukaan raksa sama tinggi dan berhubungan dengan atmosfer, maka $P_1 = P_0 = 76\\text{ cmHg}$.<br>3) Hubungan manometer setelah penambahan raksa:<br>$$P_2 = P_0 + \\Delta h \\implies \\Delta h = P_2 - P_0$$",
      "steps": "1. Hitung tekanan gas terperangkap kondisi akhir ($P_2$):<br>$$P_2 = P_1 \\cdot \\frac{L_1}{L_2} = 76\\text{ cmHg} \\times \\frac{20\\text{ cm}}{16\\text{ cm}} = 76 \\times 1{,}25 = 95\\text{ cmHg}$$<br>2. Hitung selisih tinggi kolom raksa $\\Delta h$:<br>$$\\Delta h = P_2 - P_0 = 95\\text{ cmHg} - 76\\text{ cmHg} = 19\\text{ cmHg} = 19\\text{ cm}$$",
      "pitfalls": "Terkecoh menganggap $\\Delta h$ sama dengan selisih penyusutan kolom udara ($20 - 16 = 4\\text{ cm}$), atau mengabaikan tekanan atmosfer awal sehingga salah menghitung tekanan akhir gas."
    },
    "subTopicSlug": "hukum-utama-hidrostatis-pipa-u",
    "bab": "Fluida",
    "subBab": "Hukum Utama Hidrostatis (Pipa U)",
    "subTopic": "Hukum Utama Hidrostatis (Pipa U)",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Masalah ini memadukan Hukum Boyle pada gas terperangkap dengan kesetimbangan hidrostatis manometer: 1) Proses isotermal gas ideal: $$P_1 \\cdot V_1 = P_2 \\cdot V_2 \\iff P_1 \\cdot L_1 = P_2 \\cdot L_2$$ 2) Karena awalnya kedua permukaan raksa sama tinggi dan berhubungan dengan atmosfer, maka $P_1 = P_0 = 76\\text{ cmHg}$. 3) Hubungan manometer setelah penambahan raksa: $$P_2 = P_0 + \\Delta h \\implies \\Delta h = P_2 - P_0$$."
  },
  {
    "id": "fis-flu-statis-pipau-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pipau",
    "category": "Hukum Utama Hidrostatis (Pipa U)",
    "difficulty": "sedang",
    "statement": "Sebuah pipa U simetris yang berisi zat cair diputar terhadap sumbu vertikal yang tepat berada di tengah antara kedua kakinya dengan kecepatan sudut tetap $\\omega = 10\\text{ rad/s}$. Jarak antara kedua kaki vertikal pipa U adalah $2R = 20\\text{ cm}$ (sehingga jarak masing-masing kaki ke sumbu putar adalah $R = 10\\text{ cm}$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, selisih ketinggian permukaan zat cair pada kaki vertikal terhadap permukaan zat cair di sumbu pusat putaran ($\\Delta y$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}5\\text{ cm}$",
      "$5{,}0\\text{ cm}$",
      "$7{,}5\\text{ cm}$",
      "$10{,}0\\text{ cm}$",
      "$12{,}5\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Fluida yang berotasi dengan kecepatan sudut konstan $\\omega$ terhadap sumbu vertikal membentuk permukaan bebas berupa paraboloid revolusi yang memenuhi persamaan ketinggian:<br>$$y(r) = \\frac{\\omega^2 \\cdot r^2}{2g}$$Kenaikan permukaan pada jarak radial $r = R$ relatif terhadap titik terendah di sumbu putaran ($r = 0$) adalah:<br>$$\\Delta y = y(R) - y(0) = \\frac{\\omega^2 \\cdot R^2}{2g}$$",
      "steps": "1. Konversikan jari-jari putar ke satuan meter:<br>• Jarak kaki vertikal dari sumbu putar: $R = 10\\text{ cm} = 0{,}1\\text{ m}$<br>• Kecepatan sudut: $\\omega = 10\\text{ rad/s}$<br>• Percepatan gravitasi: $g = 10\\text{ m/s}^2$<br>2. Hitung kenaikan tinggi permukaan zat cair:<br>$$\\Delta y = \\frac{(10\\text{ rad/s})^2 \\times (0{,}1\\text{ m})^2}{2 \\times 10\\text{ m/s}^2} = \\frac{100 \\times 0{,}01}{20} = \\frac{1}{20}\\text{ m} = 0{,}05\\text{ m} = 5{,}0\\text{ cm}$$",
      "pitfalls": "Lupa membagi dengan faktor 2 pada penyebut $\\frac{\\omega^2 R^2}{2g}$ sehingga menghasilkan $10{,}0\\text{ cm}$ (opsi D), atau keliru menggunakan diameter $20\\text{ cm}$ alih-alih jari-jari radial $10\\text{ cm}$."
    },
    "subTopicSlug": "hukum-utama-hidrostatis-pipa-u",
    "bab": "Fluida",
    "subBab": "Hukum Utama Hidrostatis (Pipa U)",
    "subTopic": "Hukum Utama Hidrostatis (Pipa U)",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Fluida yang berotasi dengan kecepatan sudut konstan $\\omega$ terhadap sumbu vertikal membentuk permukaan bebas berupa paraboloid revolusi yang memenuhi persamaan ketinggian: $$y(r) = \\frac{\\omega^2 \\cdot r^2}{2g}$$Kenaikan permukaan pada jarak radial $r = R$ relatif terhadap titik terendah di sumbu putaran ($r = 0$) adalah: $$\\Delta y = y(R) - y(0) = \\frac{\\omega^2 \\cdot R^2}{2g}$$."
  },
  {
    "id": "fis-flu-statis-pipau-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pipau",
    "category": "Hukum Utama Hidrostatis (Pipa U)",
    "difficulty": "sedang",
    "statement": "Sebuah pipa U memiliki luas penampang kaki kiri $A_1 = 10\\text{ cm}^2$ dan penampang kaki kanan $A_2 = 20\\text{ cm}^2$. Pipa mula-mula berisi air raksa (massa jenis $\\rho_r = 13{,}6\\text{ g/cm}^3$) hingga kedua permukaan berada pada ketinggian yang sama. Kemudian ke dalam kaki kanan dituangkan air (massa jenis $\\rho_a = 1{,}0\\text{ g/cm}^3$) dengan massa total $m = 408\\text{ gram}$. Jika seluruh air tertampung di kaki kanan di atas raksa, kenaikan permukaan raksa pada kaki kiri diukur dari posisi semula adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}5\\text{ cm}$",
      "$1{,}0\\text{ cm}$",
      "$1{,}5\\text{ cm}$",
      "$2{,}0\\text{ cm}$",
      "$2{,}5\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "1) Volume air yang dituangkan: $V_a = \\frac{m}{\\rho_a}$, dan tinggi kolom air pada kaki kanan: $h_a = \\frac{V_a}{A_2}$.<br>2) Tekanan hidrostatis air pada batas pisah diimbangi oleh selisih total tinggi raksa $\\Delta h_r$:<br>$$\\rho_a \\cdot h_a = \\rho_r \\cdot \\Delta h_r \\implies \\Delta h_r = \\frac{\\rho_a \\cdot h_a}{\\rho_r}$$<br>3) Jika raksa di kaki kiri naik sebesar $y_1$ dan raksa di kaki kanan turun sebesar $y_2$, maka kekekalan volume raksa menyatakan $A_1 y_1 = A_2 y_2$, serta $\\Delta h_r = y_1 + y_2$.",
      "steps": "1. Hitung volume dan tinggi kolom air di kaki kanan:<br>$$V_a = \\frac{408\\text{ g}}{1{,}0\\text{ g/cm}^3} = 408\\text{ cm}^3$$<br>$$h_a = \\frac{408\\text{ cm}^3}{20\\text{ cm}^2} = 20{,}4\\text{ cm}$$<br>2. Hitung selisih total ketinggian raksa ($\\Delta h_r$):<br>$$\\Delta h_r = \\frac{1{,}0 \\times 20{,}4}{13{,}6} = 1{,}5\\text{ cm}$$<br>3. Hubungkan kenaikan $y_1$ dan penurunan $y_2$:<br>$$10 \\cdot y_1 = 20 \\cdot y_2 \\implies y_2 = 0{,}5 y_1$$<br>$$\\Delta h_r = y_1 + y_2 = 1{,}5 y_1 = 1{,}5\\text{ cm} \\implies y_1 = 1{,}0\\text{ cm}$$",
      "pitfalls": "Siswa sering mengira kenaikan raksa di kaki kiri sama dengan selisih total ketinggian $\\Delta h_r = 1{,}5\\text{ cm}$ (opsi C), atau membagi dua rata tanpa memperhatikan perbandingan luas penampang $A_1 : A_2 = 1 : 2$."
    },
    "subTopicSlug": "hukum-utama-hidrostatis-pipa-u",
    "bab": "Fluida",
    "subBab": "Hukum Utama Hidrostatis (Pipa U)",
    "subTopic": "Hukum Utama Hidrostatis (Pipa U)",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "1) Volume air yang dituangkan: $V_a = \\frac{m}{\\rho_a}$, dan tinggi kolom air pada kaki kanan: $h_a = \\frac{V_a}{A_2}$. 2) Tekanan hidrostatis air pada batas pisah diimbangi oleh selisih total tinggi raksa $\\Delta h_r$: $$\\rho_a \\cdot h_a = \\rho_r \\cdot \\Delta h_r \\implies \\Delta h_r = \\frac{\\rho_a \\cdot h_a}{\\rho_r}$$ 3) Jika raksa di kaki kiri naik sebesar $y_1$ dan raksa di kaki kanan turun sebesar $y_2$, maka kekekalan volume raksa menyatakan $A_1 y_1 = A_2 y_2$, serta $\\Delta h_r = y_1 + y_2$."
  },
  {
    "id": "sup-fis-flu-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-statis-pipau",
    "category": "Penerapan Persamaan Bernoulli",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Air mengalir secara horizontal melalui pipa venturimeter tanpa manometer. Luas penampang pipa utama $A_1 = 20\\text{ cm}^2$ dan luas penampang leher $A_2 = 10\\text{ cm}^2$. Perbedaan ketinggian kolom zat cair pada kedua tabung vertikal pengukur adalah $h = 15\\text{ cm}$ ($g = 10\\text{ m/s}^2$). Kelajuan aliran air pada penampang utama ($v_1$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1\\text{ m/s}$",
      "$2\\text{ m/s}$",
      "$1{,}5\\text{ m/s}$",
      "$3\\text{ m/s}$",
      "$0{,}5\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Venturimeter Tanpa Manometer:</strong><br>Kombinasi Persamaan Kontinuitas dan Persamaan Bernoulli menghasilkan kelajuan masuk:<br>$v_1 = \\sqrt{\\frac{2 g h}{\\left(\\frac{A_1}{A_2}\\right)^2 - 1}}$.</div>",
      "steps": "<ol><li>Rasio penampang: $\\frac{A_1}{A_2} = \\frac{20}{10} = 2 \\implies \\left(\\frac{A_1}{A_2}\\right)^2 = 4$.</li><li>Pembilang formula: $2 g h = 2 \\times 10 \\times 0{,}15 = 3$.</li><li>Penyebut formula: $4 - 1 = 3$.</li><li>Kelajuan: $v_1 = \\sqrt{\\frac{3}{3}} = 1\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Lupa mengonversi beda tinggi $h = 15\\text{ cm}$ ke meter ($0{,}15\\text{ m}$).</div>"
    },
    "bab": "Fluida",
    "subBab": "Hukum Utama Hidrostatis (Pipa U)",
    "subTopic": "Hukum Utama Hidrostatis (Pipa U)",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-statis",
    "subTopicSlug": "hukum-utama-hidrostatis-pipa-u",
    "hint": "Venturimeter Tanpa Manometer: Kombinasi Persamaan Kontinuitas dan Persamaan Bernoulli menghasilkan kelajuan masuk: $v_1 = \\sqrt{\\frac{2 g h}{\\left(\\frac{A_1}{A_2}\\right)^2 - 1}}$."
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
