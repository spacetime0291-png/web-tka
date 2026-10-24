/**
 * Batch Task: TASK_fis-kin-ukur-ketidakpastian_MEDIUM
 * SubTopic: Ketidakpastian & Evaluasi Data (fis-kin-ukur-ketidakpastian)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
