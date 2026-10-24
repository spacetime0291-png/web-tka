/**
 * Batch Task: TASK_fis-kin-ukur-ketidakpastian_EASY
 * SubTopic: Ketidakpastian & Evaluasi Data (fis-kin-ukur-ketidakpastian)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
