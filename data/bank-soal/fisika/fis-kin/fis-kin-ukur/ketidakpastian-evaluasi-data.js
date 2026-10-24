/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Pengukuran (fis-kin-ukur)
 * Sub-Bab: Ketidakpastian & Evaluasi Data (fis-kin-ukur-ketidakpastian)
 * Slug: ketidakpastian-evaluasi-data
 * Indikator: Ketidakpastian mutlak (1/2 skala terkecil), ketidakpastian relatif, dan pelaporan hasil ukur berulang.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-ukur-ketidakpastian";
  const subTopicSlug = "ketidakpastian-evaluasi-data";
  const questions = [
  {
    "id": "fis-kin-ukur-ketidakpastian-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-ketidakpastian",
    "category": "Ketidakpastian & Evaluasi Data",
    "difficulty": "mudah",
    "statement": "Seorang siswa mengukur panjang sebatang pensil kayu menggunakan mistar berskala terkecil $1\\text{ mm}$. Ujung awal pensil diletakkan tepat pada garis $0\\text{ cm}$ dan ujung akhir pensil terbaca berada tepat di angka $14{,}3\\text{ cm}$. Nilai ketidakpastian mutlak pengukuran tunggal $(\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil})$ dan format pelaporan hasil pengukuran yang benar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENGUKURAN TUNGGAL PANJANG PENSIL MENGGUNAKAN MISTAR",
    "options": [
      "$0{,}05\\text{ cm}$ dan $(14{,}30 \\pm 0{,}05)\\text{ cm}$",
      "$0{,}1\\text{ cm}$ dan $(14{,}3 \\pm 0{,}1)\\text{ cm}$",
      "$0{,}5\\text{ cm}$ dan $(14{,}3 \\pm 0{,}5)\\text{ cm}$",
      "$0{,}01\\text{ cm}$ dan $(14{,}30 \\pm 0{,}01)\\text{ cm}$",
      "$0{,}05\\text{ cm}$ dan $(14{,}3 \\pm 0{,}05)\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada pengukuran tunggal, ketidakpastian mutlak ditetapkan sebesar setengah nilai skala terkecil (NST) alat ukur: $\\Delta x = \\frac{1}{2} \\times \\text{NST}$. Jumlah tempat desimal pada nilai terbaik $x$ harus sama dengan jumlah tempat desimal pada ketidakpastian mutlak $\\Delta x$.",
      "steps": "1) Menentukan nilai skala terkecil mistar:<br>$$\\text{NST} = 1\\text{ mm} = 0{,}1\\text{ cm}$$<br>2) Menghitung ketidakpastian mutlak ($\\Delta x$):<br>$$\\Delta x = \\frac{1}{2} \\times 0{,}1\\text{ cm} = 0{,}05\\text{ cm}$$<br>3) Menyesuaikan format pelaporan:<br>Karena $\\Delta x$ memiliki 2 tempat desimal ($0{,}05$), nilai $x$ harus ditulis dengan 2 tempat desimal ($14{,}30\\text{ cm}$).<br>Format pelaporan baku: $(x \\pm \\Delta x) = (14{,}30 \\pm 0{,}05)\\text{ cm}$.",
      "pitfalls": "Memilih $\\pm 0{,}1\\text{ cm}$ (opsi B) karena mengabaikan pembagian setengah pada nilai skala terkecil, atau menuliskan $14{,}3 \\pm 0{,}05\\text{ cm}$ (opsi E) yang tidak selaras jumlah desimalnya."
    },
    "subTopicSlug": "ketidakpastian-evaluasi-data",
    "bab": "Kinematika",
    "subBab": "Ketidakpastian & Evaluasi Data",
    "subTopic": "Ketidakpastian & Evaluasi Data",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-ukur-ketidakpastian-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-ketidakpastian",
    "category": "Ketidakpastian & Evaluasi Data",
    "difficulty": "mudah",
    "statement": "Hasil pengukuran panjang gelombang bunyi dalam tabung resonansi dilaporkan sebagai $L = (4{,}000 \\pm 0{,}040)\\text{ m}$. Persentase ketidakpastian relatif dari pengukuran tersebut dan jumlah angka penting yang berhak dilaporkan berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "KETIDAKPASTIAN RELATIF DAN HAK ANGKA PENTING",
    "options": [
      "$1{,}0\\%$ dan 3 angka penting",
      "$0{,}1\\%$ dan 4 angka penting",
      "$10\\%$ dan 2 angka penting",
      "$1{,}0\\%$ dan 4 angka penting",
      "$0{,}01\\%$ dan 5 angka penting"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Ketidakpastian relatif fraksional dirumuskan sebagai $KR = \\frac{\\Delta x}{x} \\times 100\\%$. Aturan hak angka penting menyatakan: jika $KR \\approx 10\\%$, berhak atas 2 angka penting; jika $KR \\approx 1\\%$, berhak atas 3 angka penting; jika $KR \\approx 0{,}1\\%$, berhak atas 4 angka penting.",
      "steps": "1) Menghitung ketidakpastian relatif ($KR$):<br>$$KR = \\frac{\\Delta L}{L} \\times 100\\% = \\frac{0{,}040\\text{ m}}{4{,}000\\text{ m}} \\times 100\\% = 0{,}010 \\times 100\\% = 1{,}0\\%$$<br>2) Menentukan jumlah angka penting:<br>Karena nilai ketidakpastian relatif mendekati $1\\%$, maka hasil pengukuran berhak dilaporkan dengan 3 angka penting.<br>Jadi, ketidakpastian relatif adalah $1{,}0\\%$ dan berhak atas 3 angka penting.",
      "pitfalls": "Siswa sering menganggap bahwa karena pada pelaporan tertulis 4 digit ($4{,}000$) maka otomatis memiliki 4 angka penting, mengabaikan kaidah evaluasi metrologi bahwa ketidakpastian $1\\%$ membatasi hak pelaporan menjadi 3 angka penting."
    },
    "subTopicSlug": "ketidakpastian-evaluasi-data",
    "bab": "Kinematika",
    "subBab": "Ketidakpastian & Evaluasi Data",
    "subTopic": "Ketidakpastian & Evaluasi Data",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-ukur-ketidakpastian-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-ketidakpastian",
    "category": "Ketidakpastian & Evaluasi Data",
    "difficulty": "mudah",
    "statement": "Lima orang siswa dalam satu kelompok praktikum masing-masing melakukan satu kali pengukuran diameter kawat kuningan yang sama menggunakan mikrometer sekrup. Hasil pengukuran kelima siswa tercatat berturut-turut: $2{,}42\\text{ mm}$, $2{,}44\\text{ mm}$, $2{,}40\\text{ mm}$, $2{,}43\\text{ mm}$, dan $2{,}41\\text{ mm}$. Nilai rata-rata terbaik (mean) diameter kawat kuningan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PERHITUNGAN NILAI RATA-RATA PADA PENGUKURAN BERULANG",
    "options": [
      "$2{,}42\\text{ mm}$",
      "$2{,}41\\text{ mm}$",
      "$2{,}40\\text{ mm}$",
      "$2{,}43\\text{ mm}$",
      "$2{,}44\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Nilai terbaik dari suatu besaran yang diukur berulang sebanyak $N$ kali adalah rata-rata hitung (mean aritmatika): $\\bar{x} = \\frac{\\sum_{i=1}^N x_i}{N}$.",
      "steps": "1) Menjumlahkan seluruh hasil pengukuran:<br>$$\\sum x_i = 2{,}42 + 2{,}44 + 2{,}40 + 2{,}43 + 2{,}41 = 12{,}10\\text{ mm}$$<br>2) Menghitung nilai rata-rata:<br>$$\\bar{x} = \\frac{\\sum x_i}{N} = \\frac{12{,}10\\text{ mm}}{5} = 2{,}42\\text{ mm}$$.",
      "pitfalls": "Kesalahan aritmatika pembagian atau salah mengambil nilai median/modus tanpa menjumlahkan seluruh data."
    },
    "subTopicSlug": "ketidakpastian-evaluasi-data",
    "bab": "Kinematika",
    "subBab": "Ketidakpastian & Evaluasi Data",
    "subTopic": "Ketidakpastian & Evaluasi Data",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-ukur-ketidakpastian-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-ketidakpastian",
    "category": "Ketidakpastian & Evaluasi Data",
    "difficulty": "mudah",
    "statement": "Saat melakukan eksperimen di laboratorium, pengamat menemukan adanya fluktuasi kecil pada tegangan listrik PLN, hembusan angin acak di sekitar neraca analitik, serta getaran mekanik akibat kendaraan yang melintas di jalan raya. Gangguan-gangguan tersebut digolongkan ke dalam jenis kesalahan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "KLASIFIKASI SUMBER KESALAHAN PENGUKURAN FISIKA",
    "options": [
      "Kesalahan acak (random error)",
      "Kesalahan sistematik (systematic error)",
      "Kesalahan kalibrasi alat ukur",
      "Keteledoran pengamat (blunder)",
      "Kesalahan titik nol (zero error)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kesalahan dalam pengukuran dikelompokkan menjadi: 1) Kesalahan acak (random error): disebabkan oleh fluktuasi tak terkontrol dan lingkungan yang berubah secara acak. 2) Kesalahan sistematik (systematic error): disebabkan oleh alat ukur (kalibrasi, titik nol) atau metode yang cacat konstan. 3) Keteledoran (blunder): kesalahan pembacaan/pencatatan oleh manusia.",
      "steps": "1) Fluktuasi listrik, angin, dan getaran mekanik tanah terjadi secara acak dan tidak terprediksi arah penyimpangannya.<br>2) Kesalahan jenis ini tidak dapat dihilangkan secara permanen oleh kalibrasi alat, tetapi dampaknya dapat diperkecil melalui pengukuran berulang berkali-kali.<br>3) Oleh karena itu, gangguan tersebut termasuk kategori kesalahan acak (random error).",
      "pitfalls": "Siswa sering menganggap kesalahan acak sebagai keteledoran manusia (opsi D) atau mengira masalah tegangan PLN sebagai kesalahan sistematik alat."
    },
    "subTopicSlug": "ketidakpastian-evaluasi-data",
    "bab": "Kinematika",
    "subBab": "Ketidakpastian & Evaluasi Data",
    "subTopic": "Ketidakpastian & Evaluasi Data",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-ukur-ketidakpastian-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-ketidakpastian",
    "category": "Ketidakpastian & Evaluasi Data",
    "difficulty": "mudah",
    "statement": "Dalam eksperimen pengukuran berulang sebanyak $N$ kali, ketidakpastian mutlak nilai rata-rata dihitung menggunakan rumus deviasi standar nilai rata-rata sampel: $$S_{\\bar{x}} = \\frac{1}{N} \\sqrt{\\frac{N \\sum x_i^2 - (\\sum x_i)^2}{N - 1}}$$ Alasan digunakannya faktor pembagi $(N - 1)$ sebagai pengganti $N$ pada penyebut di dalam tanda akar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "FORMULASI DEVIASI STANDAR RATA-RATA SAMPEL DAN DERAJAT KEBEBASAN",
    "options": [
      "Memberikan koreksi Bessel untuk derajat kebebasan agar penduga varians sampel tidak bias terhadap varians populasi",
      "Membuat nilai ketidakpastian selalu bernilai bulat",
      "Mengompensasi kesalahan akibat paralaks mata pengamat",
      "Menjamin nilai rata-rata hitung selalu sama dengan nilai median data",
      "Memperkecil nilai ketidakpastian agar hasil terlihat lebih teliti"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Koreksi Bessel (Bessel's correction): pada sampel berukuran terbatas ($N$), pembagian dengan $(N - 1)$ yang merupakan derajat kebebasan (degrees of freedom) digunakan agar varians sampel menjadi estimator tak bias (unbiased estimator) bagi varians populasi.",
      "steps": "1) Karena rata-rata populasi $\\mu$ yang sebenarnya tidak diketahui dan digantikan oleh rata-rata sampel $\\bar{x}$, satu derajat kebebasan telah terpakai untuk memperkirakan rata-rata.<br>2) Pembagian dengan $N$ akan cenderung meremehkan (underestimate) variabilitas populasi.<br>3) Oleh sebab itu, digunakan faktor koreksi Bessel dengan pembagi $(N - 1)$ sehingga diperoleh estimasi ketidakpastian yang tidak bias.",
      "pitfalls": "Banyak siswa mengira $N - 1$ dibuat untuk memperkecil ketidakpastian (opsi E), padahal membagi dengan $N - 1$ justru menghasilkan nilai yang sedikit lebih besar daripada pembagi $N$ untuk memperhitungkan ketidaktahuan kita terhadap parameter populasi sesungguhnya."
    },
    "subTopicSlug": "ketidakpastian-evaluasi-data",
    "bab": "Kinematika",
    "subBab": "Ketidakpastian & Evaluasi Data",
    "subTopic": "Ketidakpastian & Evaluasi Data",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-ukur-ketidakpastian-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-ketidakpastian",
    "category": "Ketidakpastian & Evaluasi Data",
    "difficulty": "sedang",
    "statement": "Pengukuran periode ayunan bandul sederhana dilakukan berulang sebanyak $N = 5$ kali dan diperoleh data waktu ayunan: $T = [2{,}0\\text{ s},\\ 2{,}1\\text{ s},\\ 1{,}9\\text{ s},\\ 2{,}0\\text{ s},\\ 2{,}0\\text{ s}]$. Berdasarkan rumus deviasi standar rata-rata sampel: $$S_{\\bar{T}} = \\frac{1}{N} \\sqrt{\\frac{N \\sum T_i^2 - (\\sum T_i)^2}{N - 1}}$$ Nilai rata-rata $\\bar{T}$ dan ketidakpastian mutlak $S_{\\bar{T}}$ dari data tersebut berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PERHITUNGAN DEVIASI STANDAR RATA-RATA PADA PENGUKURAN BERULANG",
    "options": [
      "$2{,}00\\text{ s}$ dan $0{,}032\\text{ s}$",
      "$2{,}00\\text{ s}$ dan $0{,}100\\text{ s}$",
      "$2{,}00\\text{ s}$ dan $0{,}071\\text{ s}$",
      "$2{,}02\\text{ s}$ dan $0{,}032\\text{ s}$",
      "$1{,}98\\text{ s}$ dan $0{,}050\\text{ s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada pengukuran berulang, nilai terbaik adalah nilai rata-rata hitung $\\bar{x} = \\frac{\\sum x_i}{N}$ dan ketidakpastian mutlak dinyatakan oleh deviasi standar rata-rata $S_{\\bar{x}} = \\frac{1}{N}\\sqrt{\\frac{N \\sum x_i^2 - (\\sum x_i)^2}{N - 1}}$.",
      "steps": "1) Menghitung $\\sum T_i$ dan $\\bar{T}$:<br>$$\\sum T_i = 2{,}0 + 2{,}1 + 1{,}9 + 2{,}0 + 2{,}0 = 10{,}0\\text{ s} \\implies \\bar{T} = \\frac{10{,}0}{5} = 2{,}00\\text{ s}$$<br>2) Menghitung $\\sum T_i^2$:<br>$$\\sum T_i^2 = (2{,}0)^2 + (2{,}1)^2 + (1{,}9)^2 + (2{,}0)^2 + (2{,}0)^2 = 4{,}00 + 4{,}41 + 3{,}61 + 4{,}00 + 4{,}00 = 20{,}02\\text{ s}^2$$<br>3) Menghitung pembilang dalam tanda akar:<br>$$N \\sum T_i^2 - (\\sum T_i)^2 = 5(20{,}02) - (10{,}0)^2 = 100{,}10 - 100{,}00 = 0{,}10\\text{ s}^2$$<br>4) Menghitung deviasi standar rata-rata ($S_{\\bar{T}}$):<br>$$S_{\\bar{T}} = \\frac{1}{5} \\sqrt{\\frac{0{,}10}{5 - 1}} = \\frac{1}{5} \\sqrt{\\frac{0{,}10}{4}} = \\frac{1}{5} \\sqrt{0{,}025} = \\frac{0{,}1581}{5} \\approx 0{,}0316\\text{ s} \\approx 0{,}032\\text{ s}$$.",
      "pitfalls": "Lupa membagi dengan faktor $\\frac{1}{N}$ di luar akar menghasilkan deviasi standar data tunggal $S = 0{,}158\\text{ s}$ bukan deviasi standar rata-rata $S_{\\bar{x}} = 0{,}032\\text{ s}$."
    },
    "subTopicSlug": "ketidakpastian-evaluasi-data",
    "bab": "Kinematika",
    "subBab": "Ketidakpastian & Evaluasi Data",
    "subTopic": "Ketidakpastian & Evaluasi Data",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-ukur-ketidakpastian-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-ketidakpastian",
    "category": "Ketidakpastian & Evaluasi Data",
    "difficulty": "sedang",
    "statement": "Dua buah resistor dirangkai secara seri pada sebuah papan rangkaian. Hambatan resistor pertama terukur $R_1 = (100 \\pm 3)\\text{ }\\Omega$ dan resistor kedua terukur $R_2 = (200 \\pm 4)\\text{ }\\Omega$. Berdasarkan kaidah perambatan ketidakpastian untuk variabel-variabel acak yang saling bebas (independen), nilai hambatan pengganti seri total beserta ketidakpastian mutlak gabungannya $(R_s \\pm \\Delta R_s)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PROPAGASI KETIDAKPASTIAN KUADRATIK PADA RANGKAIAN RESISTOR SERI",
    "options": [
      "$(300 \\pm 5)\\text{ }\\Omega$",
      "$(300 \\pm 7)\\text{ }\\Omega$",
      "$(300 \\pm 1)\\text{ }\\Omega$",
      "$(300 \\pm 12)\\text{ }\\Omega$",
      "$(300 \\pm 25)\\text{ }\\Omega$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada operasi penjumlahan $y = x_1 + x_2$ untuk kesalahan acak independen, ketidakpastian mutlak gabungan ditentukan melalui penjumlahan kuadratur Gauss: $\\Delta y = \\sqrt{(\\Delta x_1)^2 + (\\Delta x_2)^2}$.",
      "steps": "1) Menghitung nilai terbaik hambatan seri pengganti:<br>$$R_s = R_1 + R_2 = 100\\text{ }\\Omega + 200\\text{ }\\Omega = 300\\text{ }\\Omega$$<br>2) Menghitung ketidakpastian mutlak kuadratur ($\\Delta R_s$):<br>$$\\Delta R_s = \\sqrt{(\\Delta R_1)^2 + (\\Delta R_2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{ }\\Omega$$<br>3) Format pelaporan gabungan baku: $(R_s \\pm \\Delta R_s) = (300 \\pm 5)\\text{ }\\Omega$.",
      "pitfalls": "Banyak siswa menjumlahkan ketidakpastian secara linier biasa: $3 + 4 = 7\\text{ }\\Omega$ (opsi B). Penjumlahan linier hanya berlaku untuk batas kesalahan terburuk (worst-case scenario), sedangkan metode standar metrologi modern menggunakan kuadratur Gauss."
    },
    "subTopicSlug": "ketidakpastian-evaluasi-data",
    "bab": "Kinematika",
    "subBab": "Ketidakpastian & Evaluasi Data",
    "subTopic": "Ketidakpastian & Evaluasi Data",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-ukur-ketidakpastian-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-ketidakpastian",
    "category": "Ketidakpastian & Evaluasi Data",
    "difficulty": "sedang",
    "statement": "Dalam percobaan penentuan percepatan gravitasi bumi menggunakan bandul matematis, hubungan fisis dinyatakan oleh persamaan $g = 4\\pi^2 \\frac{L}{T^2}$. Data panjang tali terukur $L = (1{,}000 \\pm 0{,}002)\\text{ m}$ dan periode ayunan terukur $T = (2{,}000 \\pm 0{,}010)\\text{ s}$. Persentase ketidakpastian relatif dari nilai percepatan gravitasi $g$ yang diperoleh adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PERAMBATAN KETIDAKPASTIAN RELATIF PADA PERCEPATAN GRAVITASI BANDUL",
    "options": [
      "$1{,}2\\%$",
      "$0{,}7\\%$",
      "$0{,}9\\%$",
      "$1{,}4\\%$",
      "$0{,}5\\%$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada hubungan fungsi berpangkat $g = k \\cdot L^1 \\cdot T^{-2}$, ketidakpastian relatif fraksional adalah jumlah dari ketidakpastian relatif tiap besaran dikalikan nilai mutlak pangkatnya: $\\frac{\\Delta g}{g} = \\left|1\\right| \\left(\\frac{\\Delta L}{L}\\right) + \\left|-2\\right| \\left(\\frac{\\Delta T}{T}\\right)$.",
      "steps": "1) Menghitung ketidakpastian relatif panjang tali ($\\frac{\\Delta L}{L}$):<br>$$\\frac{\\Delta L}{L} = \\frac{0{,}002\\text{ m}}{1{,}000\\text{ m}} \\times 100\\% = 0{,}2\\%$$<br>2) Menghitung ketidakpastian relatif periode ayunan ($\\frac{\\Delta T}{T}$):<br>$$\\frac{\\Delta T}{T} = \\frac{0{,}010\\text{ s}}{2{,}000\\text{ s}} \\times 100\\% = 0{,}5\\%$$<br>3) Menghitung ketidakpastian relatif percepatan gravitasi:<br>$$\\frac{\\Delta g}{g} = \\frac{\\Delta L}{L} + 2 \\times \\left(\\frac{\\Delta T}{T}\\right) = 0{,}2\\% + 2(0{,}5\\%) = 0{,}2\\% + 1{,}0\\% = 1{,}2\\%$$.",
      "pitfalls": "Siswa sering lupa mengalikan ketidakpastian periode dengan faktor 2 dari eksponen kuadrat ($T^2$), sehingga salah menghitung $0{,}2\\% + 0{,}5\\% = 0{,}7\\%$ (opsi B)."
    },
    "subTopicSlug": "ketidakpastian-evaluasi-data",
    "bab": "Kinematika",
    "subBab": "Ketidakpastian & Evaluasi Data",
    "subTopic": "Ketidakpastian & Evaluasi Data",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-ukur-ketidakpastian-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-ketidakpastian",
    "category": "Ketidakpastian & Evaluasi Data",
    "difficulty": "sedang",
    "statement": "Dalam suatu eksperimen verifikasi hukum Ohm, seorang siswa mengukur kuat arus $I$ yang melalui sebuah kawat penghantar terhadap perubahan beda potensial $V$. Data pengamatan diplot pada grafik dengan beda potensial $V$ pada sumbu vertikal (Y) dan kuat arus $I$ pada sumbu horizontal (X). Garis regresi linier terbaik melewati dua titik acuan $(0{,}20\\text{ A},\\ 3{,}0\\text{ V})$ dan $(0{,}60\\text{ A},\\ 9{,}0\\text{ V})$. Makna fisis dan nilai dari gradien garis grafik tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "ANALISIS REGRESI GRAFIK HUKUM OHM DAN INTERPRETASI FISIS GRADIEN",
    "options": [
      "Hambatan listrik kawat sebesar $15{,}0\\text{ }\\Omega$",
      "Konduktansi kawat sebesar $0{,}067\\text{ }\\Omega^{-1}$",
      "Hambatan listrik kawat sebesar $6{,}0\\text{ }\\Omega$",
      "Daya listrik kawat sebesar $12{,}0\\text{ W}$",
      "Hambatan jenis kawat sebesar $15{,}0\\text{ }\\Omega\\cdot\\text{m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Berdasarkan persamaan hukum Ohm $V = I \\cdot R$, jika $V$ diplot pada sumbu-Y dan $I$ pada sumbu-X, persamaan grafik berbentuk linier $y = m \\cdot x$ di mana gradien kemiringan garis $m = \\frac{\\Delta V}{\\Delta I} = R$ merepresentasikan nilai hambatan listrik.",
      "steps": "1) Menghitung perubahan pada sumbu vertikal ($\\Delta V$):<br>$$\\Delta V = 9{,}0\\text{ V} - 3{,}0\\text{ V} = 6{,}0\\text{ V}$$<br>2) Menghitung perubahan pada sumbu horizontal ($\\Delta I$):<br>$$\\Delta I = 0{,}60\\text{ A} - 0{,}20\\text{ A} = 0{,}40\\text{ A}$$<br>3) Menghitung gradien kemiringan garis:<br>$$\\text{Gradien} = \\frac{\\Delta V}{\\Delta I} = \\frac{6{,}0\\text{ V}}{0{,}40\\text{ A}} = 15{,}0\\text{ }\\Omega$$<br>Makna fisis dari gradien grafik $V-I$ tersebut adalah hambatan listrik kawat ($R = 15{,}0\\text{ }\\Omega$).",
      "pitfalls": "Tertukar antara grafik $V-I$ (gradien $= R$) dengan grafik $I-V$ (gradien $= \\frac{1}{R}$ / konduktansi, opsi B)."
    },
    "subTopicSlug": "ketidakpastian-evaluasi-data",
    "bab": "Kinematika",
    "subBab": "Ketidakpastian & Evaluasi Data",
    "subTopic": "Ketidakpastian & Evaluasi Data",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-ukur-ketidakpastian-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-ketidakpastian",
    "category": "Ketidakpastian & Evaluasi Data",
    "difficulty": "sedang",
    "statement": "Empat kelompok siswa melakukan pengukuran berulang terhadap massa standar kalibrasi yang bernilai eksak $10{,}00\\text{ g}$. Masing-masing kelompok memperoleh hasil pengukuran sebagai berikut:<br>• Kelompok 1: $10{,}01\\text{ g},\\ 9{,}99\\text{ g},\\ 10{,}00\\text{ g}$<br>• Kelompok 2: $8{,}50\\text{ g},\\ 8{,}51\\text{ g},\\ 8{,}49\\text{ g}$<br>• Kelompok 3: $8{,}20\\text{ g},\\ 11{,}80\\text{ g},\\ 10{,}00\\text{ g}$<br>• Kelompok 4: $6{,}50\\text{ g},\\ 13{,}50\\text{ g},\\ 8{,}00\\text{ g}$<br>Kelompok yang hasil pengukurannya memiliki tingkat presisi tinggi namun memiliki akurasi rendah akibat adanya kesalahan sistematik pada alat ukur adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "EVALUASI AKURASI DAN PRESISI DATA PENGUKURAN FISIKA",
    "options": [
      "Kelompok 2",
      "Kelompok 1",
      "Kelompok 3",
      "Kelompok 4",
      "Kelompok 1 dan Kelompok 2"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Akurasi mengukur kedekatan nilai rata-rata hasil ukur terhadap nilai sebenarnya (true value). Presisi mengukur kedekatan pengulangan data satu sama lain (reproducibility/varians kecil). Kesalahan sistematik menyebabkan pergeseran konstan (presisi tinggi tetapi akurasi rendah).",
      "steps": "1) Menganalisis Kelompok 1: Nilai rata-rata $\\bar{m} = 10{,}00\\text{ g}$ (sangat dekat nilai sebenarnya $\\to$ akurasi tinggi), penyebaran sangat rapat $\\pm 0{,}01\\text{ g}$ (presisi tinggi).<br>2) Menganalisis Kelompok 2: Nilai rata-rata $\\bar{m} = 8{,}50\\text{ g}$ (sangat jauh dari $10{,}00\\text{ g} \\to$ akurasi rendah), namun data sangat rapat $\\pm 0{,}01\\text{ g}$ (presisi sangat tinggi). Ini merupakan ciri khas kesalahan sistematik (seperti kesalahan nol/tara).<br>3) Menganalisis Kelompok 3: Nilai rata-rata $= 10{,}00\\text{ g}$ (akurat), tetapi penyebaran sangat lebar (presisi rendah).<br>4) Menganalisis Kelompok 4: Rata-rata $= 9{,}33\\text{ g}$ dan penyebaran sangat lebar (tidak akurat dan tidak presisi).<br>5) Kesimpulan: Kelompok 2 memiliki presisi tinggi namun akurasi rendah.",
      "pitfalls": "Siswa sering menyamakan pengertian antara presisi dan akurasi, mengira bahwa data yang rapat satu sama lain (seperti kelompok 2) pasti selalu benar/akurat."
    },
    "subTopicSlug": "ketidakpastian-evaluasi-data",
    "bab": "Kinematika",
    "subBab": "Ketidakpastian & Evaluasi Data",
    "subTopic": "Ketidakpastian & Evaluasi Data",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
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
