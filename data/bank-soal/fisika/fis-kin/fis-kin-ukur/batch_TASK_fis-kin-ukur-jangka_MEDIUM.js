/**
 * Batch Task: TASK_fis-kin-ukur-jangka_MEDIUM
 * SubTopic: Jangka Sorong (fis-kin-ukur-jangka)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    "id": "fis-kin-ukur-jangka-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-jangka",
    "difficulty": "sedang",
    "statement": "Sebelum digunakan untuk mengukur kelereng, sebuah jangka sorong berketelitian $0{,}05\\text{ mm}$ ditutup rapat kedua rahangnya. Teramati bahwa garis angka 0 skala nonius berada di sebelah kanan garis angka 0 skala utama sejauh garis ke-3 skala nonius (kesalahan nol positif). Ketika kelereng dijepit pada rahang bawah, skala utama terbaca $17\\text{ mm}$ dan garis ke-8 skala nonius berimpit tepat dengan garis skala utama. Diameter kelereng yang sesungguhnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "KOREKSI KESALAHAN TITIK NOL POSITIF PADA JANGKA SORONG",
    "options": [
      "$17{,}25\\text{ mm}$",
      "$17{,}40\\text{ mm}$",
      "$17{,}55\\text{ mm}$",
      "$17{,}15\\text{ mm}$",
      "$16{,}85\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kesalahan titik nol positif (positive zero error) terjadi ketika rahang tertutup rapat tetapi garis nol nonius berada di sebelah kanan garis nol skala utama ($Z > 0$). Nilai pembacaan yang sebenarnya diperoleh dengan mengurangkan nilai terukur dengan nilai kesalahan nol: $x_{\\text{sebenarnya}} = x_{\\text{terukur}} - Z$.",
      "steps": "1) Menghitung nilai kesalahan titik nol positif ($Z$):<br>$$Z = + (3 \\times 0{,}05\\text{ mm}) = +0{,}15\\text{ mm}$$<br>2) Menghitung hasil pengukuran terukur kelereng ($x_{\\text{terukur}}$):<br>$$x_{\\text{terukur}} = 17\\text{ mm} + (8 \\times 0{,}05\\text{ mm}) = 17\\text{ mm} + 0{,}40\\text{ mm} = 17{,}40\\text{ mm}$$<br>3) Mengoreksi diameter sesungguhnya:<br>$$x_{\\text{sebenarnya}} = x_{\\text{terukur}} - Z = 17{,}40\\text{ mm} - 0{,}15\\text{ mm} = 17{,}25\\text{ mm}$$.",
      "pitfalls": "Jebakan paling umum adalah menjumlahkan kesalahan nol alih-alih mengurangkannya ($17{,}40 + 0{,}15 = 17{,}55\\text{ mm}$, opsi C), atau lupa mengoreksi sehingga memilih hasil bacaan mentah ($17{,}40\\text{ mm}$, opsi B)."
    }
  },
  {
    "id": "fis-kin-ukur-jangka-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-jangka",
    "difficulty": "sedang",
    "statement": "Ketika kedua rahang ukur jangka sorong berketelitian $0{,}1\\text{ mm}$ (10 skala nonius) dirapatkan tanpa benda, garis nol skala nonius berada sedikit di sebelah kiri garis nol skala utama, dan garis ke-7 skala nonius berimpit segaris dengan salah satu garis skala utama. Kemudian alat digunakan untuk mengukur sisi sebuah kubus kuningan dan terbaca skala utama $2{,}4\\text{ cm}$ serta garis nonius ke-5 berimpit. Panjang sisi kubus kuningan yang sebenarnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "KOREKSI KESALAHAN TITIK NOL NEGATIF PADA JANGKA SORONG",
    "options": [
      "$2{,}48\\text{ cm}$",
      "$2{,}45\\text{ cm}$",
      "$2{,}42\\text{ cm}$",
      "$2{,}38\\text{ cm}$",
      "$2{,}52\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kesalahan titik nol negatif (negative zero error) terjadi bila garis nol nonius berada di sebelah kiri garis nol skala utama saat rahang rapat. Besar kesalahan negatif dihitung dari selisih jumlah total skala nonius dengan garis yang berimpit: $Z = - (N - n) \\times \\text{Ketelitian}$. Koreksi nilai terukur dirumuskan: $x_{\\text{sebenarnya}} = x_{\\text{terukur}} - Z$.",
      "steps": "1) Menghitung nilai kesalahan nol negatif ($Z$):<br>Jumlah skala nonius $N = 10$, garis berimpit $n = 7$, ketelitian $= 0{,}1\\text{ mm} = 0{,}01\\text{ cm}$:<br>$$Z = - (10 - 7) \\times 0{,}01\\text{ cm} = - (3 \\times 0{,}01\\text{ cm}) = -0{,}03\\text{ cm}$$<br>2) Menghitung hasil bacaan terukur ($x_{\\text{terukur}}$):<br>$$x_{\\text{terukur}} = 2{,}4\\text{ cm} + (5 \\times 0{,}01\\text{ cm}) = 2{,}45\\text{ cm}$$<br>3) Menghitung panjang sisi sebenarnya:<br>$$x_{\\text{sebenarnya}} = x_{\\text{terukur}} - Z = 2{,}45\\text{ cm} - (-0{,}03\\text{ cm}) = 2{,}45\\text{ cm} + 0{,}03\\text{ cm} = 2{,}48\\text{ cm}$$.",
      "pitfalls": "Siswa sering menganggap kesalahan nol negatif adalah $-0{,}07\\text{ cm}$ (mengambil garis ke-7 langsung) sehingga mengurangkan $2{,}45 - 0{,}07 = 2{,}38\\text{ cm}$ (opsi D), padahal kesalahan negatif dihitung mundur dari pembagian skala maksimum: $-(10 - 7) = -3$ skala."
    }
  },
  {
    "id": "fis-kin-ukur-jangka-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-jangka",
    "difficulty": "sedang",
    "statement": "Dua keping koin logam homogen $A$ dan $B$ terbuat dari bahan yang sama dengan ketebalan identik $h = 2{,}0\\text{ mm}$. Diameter koin $A$ diukur sebesar $d_A = 20{,}0\\text{ mm}$. Diameter koin $B$ diukur menggunakan jangka sorong dengan skala utama menunjukkan $24\\text{ mm}$ dan garis nonius ke-16 berimpit tepat dengan skala utama (jangka sorong memiliki 20 pembagian skala nonius pada panjang $19\\text{ mm}$). Perbandingan massa koin $B$ terhadap koin $A$ $(\\frac{m_B}{m_A})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PERBANDINGAN MASSA DUA KOIN BERDASARKAN HASIL UKUR JANGKA SORONG",
    "options": [
      "$1{,}5376$",
      "$1{,}2400$",
      "$1{,}4400$",
      "$1{,}2000$",
      "$1{,}6900$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jangka sorong dengan 20 bagian skala nonius memiliki ketelitian $\\text{NST} = \\frac{1\\text{ mm}}{20} = 0{,}05\\text{ mm}$. Karena kedua koin homogen sejenis (massa jenis $\\rho$ sama) dan ketebalan $h$ sama, perbandingan massa sebanding dengan perbandingan kuadrat diameter koin: $\\frac{m_B}{m_A} = \\frac{V_B}{V_A} = \\left(\\frac{d_B}{d_A}\\right)^2$.",
      "steps": "1) Menentukan ketelitian jangka sorong:<br>$$\\text{Ketelitian} = \\frac{1\\text{ mm}}{20} = 0{,}05\\text{ mm}$$<br>2) Menghitung diameter koin $B$ ($d_B$):<br>$$d_B = 24\\text{ mm} + (16 \\times 0{,}05\\text{ mm}) = 24\\text{ mm} + 0{,}80\\text{ mm} = 24{,}8\\text{ mm}$$<br>3) Menghitung rasio diameter koin:<br>$$\\frac{d_B}{d_A} = \\frac{24{,}8\\text{ mm}}{20{,}0\\text{ mm}} = 1{,}24$$<br>4) Menghitung perbandingan massa koin:<br>$$\\frac{m_B}{m_A} = \\left(\\frac{d_B}{d_A}\\right)^2 = (1{,}24)^2 = 1{,}5376$$.",
      "pitfalls": "Siswa sering berhenti pada perbandingan linier diameter $\\frac{d_B}{d_A} = 1{,}24$ (opsi B) dan lupa bahwa massa sebanding dengan volume silinder ($V = \\frac{1}{4} \\pi d^2 h$), yang melibatkan kuadrat diameter."
    }
  },
  {
    "id": "fis-kin-ukur-jangka-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-jangka",
    "difficulty": "sedang",
    "statement": "Sebuah jangka sorong presisi khusus memiliki skala utama dengan nilai pembagian terkecil $0{,}5\\text{ mm}$. Skala nonius pada rahang geser memiliki panjang total $12\\text{ mm}$ yang terbagi rata menjadi $25$ skala bagian. Nilai skala terkecil (ketelitian) alat ukur tersebut dan hasil pembacaan ketika skala utama menunjukkan $14{,}5\\text{ mm}$ serta garis nonius ke-15 berimpit adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENENTUAN KETELITIAN PADA JANGKA SORONG NON-STANDAR",
    "options": [
      "$0{,}02\\text{ mm}$ dan $14{,}80\\text{ mm}$",
      "$0{,}05\\text{ mm}$ dan $15{,}25\\text{ mm}$",
      "$0{,}02\\text{ mm}$ dan $14{,}65\\text{ mm}$",
      "$0{,}01\\text{ mm}$ dan $14{,}65\\text{ mm}$",
      "$0{,}04\\text{ mm}$ dan $15{,}10\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Ketelitian (nilai skala terkecil) suatu jangka sorong non-standar ditentukan oleh selisih nilai 1 bagian skala utama dengan nilai 1 bagian skala nonius: $\\text{NST} = 1\\text{ SU} - 1\\text{ SN}$.",
      "steps": "1) Nilai 1 bagian skala utama: $1\\text{ SU} = 0{,}5\\text{ mm}$.<br>2) Nilai 1 bagian skala nonius: Panjang total nonius $12\\text{ mm}$ dibagi 25 bagian:<br>$$1\\text{ SN} = \\frac{12\\text{ mm}}{25} = 0{,}48\\text{ mm}$$<br>3) Menghitung nilai skala terkecil (ketelitian):<br>$$\\text{NST} = 1\\text{ SU} - 1\\text{ SN} = 0{,}5\\text{ mm} - 0{,}48\\text{ mm} = 0{,}02\\text{ mm}$$<br>4) Menghitung hasil pembacaan ukur:<br>$$x = \\text{SU} + (\\text{SN} \\times \\text{NST}) = 14{,}5\\text{ mm} + (15 \\times 0{,}02\\text{ mm}) = 14{,}5\\text{ mm} + 0{,}30\\text{ mm} = 14{,}80\\text{ mm}$$.",
      "pitfalls": "Siswa sering mengasumsikan nilai skala utama selalu $1\\text{ mm}$ sehingga menghitung ketelitian secara keliru. Perhatikan bahwa nilai terkecil skala utama di soal ini secara spesifik dinyatakan sebesar $0{,}5\\text{ mm}$."
    }
  },
  {
    "id": "fis-kin-ukur-jangka-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-jangka",
    "difficulty": "sedang",
    "statement": "Sebuah balok logam padat berukuran panjang $p$, lebar $l$, dan tinggi $t$ diukur menggunakan jangka sorong berketelitian $0{,}05\\text{ mm}$ dan neraca digital. Hasil pengukuran rusuk-rusuk balok menghasilkan $p = 4{,}00\\text{ cm}$, $l = 2{,}50\\text{ cm}$, dan $t = 1{,}00\\text{ cm}$. Jika massa balok ditimbang sebesar $m = 80{,}0\\text{ g}$ dan ketidakpastian mutlak pengukuran tiap rusuk adalah $\\Delta x = 0{,}0025\\text{ cm}$ sedangkan ketidakpastian massa $\\Delta m = 0{,}1\\text{ g}$, maka persentase ketidakpastian relatif dari penentuan massa jenis balok $(\\frac{\\Delta \\rho}{\\rho} \\times 100\\%)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PROPAGASI KETIDAKPASTIAN RELATIF PADA PERHITUNGAN MASSA JENIS",
    "options": [
      "$0{,}538\\%$",
      "$0{,}125\\%$",
      "$0{,}413\\%$",
      "$0{,}850\\%$",
      "$1{,}250\\%$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Massa jenis balok dihitung dengan $\\rho = \\frac{m}{V} = \\frac{m}{p \\cdot l \\cdot t}$. Menurut teori perambatan kesalahan (propagation of uncertainty) untuk operasi perkalian dan pembagian, ketidakpastian relatif fraksional total adalah jumlah dari ketidakpastian relatif masing-masing variabel: $\\frac{\\Delta \\rho}{\\rho} = \\frac{\\Delta m}{m} + \\frac{\\Delta p}{p} + \\frac{\\Delta l}{l} + \\frac{\\Delta t}{t}$.",
      "steps": "1) Menghitung ketidakpastian relatif pengukuran massa:<br>$$\\frac{\\Delta m}{m} = \\frac{0{,}1\\text{ g}}{80{,}0\\text{ g}} = 0{,}00125 = 0{,}125\\%$$<br>2) Menghitung ketidakpastian relatif masing-masing rusuk balok:<br>$$\\frac{\\Delta p}{p} = \\frac{0{,}0025\\text{ cm}}{4{,}00\\text{ cm}} = 0{,}000625 = 0{,}0625\\%$$<br>$$\\frac{\\Delta l}{l} = \\frac{0{,}0025\\text{ cm}}{2{,}50\\text{ cm}} = 0{,}001000 = 0{,}1000\\%$$<br>$$\\frac{\\Delta t}{t} = \\frac{0{,}0025\\text{ cm}}{1{,}00\\text{ cm}} = 0{,}002500 = 0{,}2500\\%$$<br>3) Menjumlahkan ketidakpastian relatif volume balok:<br>$$\\frac{\\Delta V}{V} = \\frac{\\Delta p}{p} + \\frac{\\Delta l}{l} + \\frac{\\Delta t}{t} = 0{,}0625\\% + 0{,}1000\\% + 0{,}2500\\% = 0{,}4125\\%$$<br>4) Menghitung ketidakpastian relatif massa jenis total:<br>$$\\frac{\\Delta \\rho}{\\rho} = \\frac{\\Delta m}{m} + \\frac{\\Delta V}{V} = 0{,}125\\% + 0{,}4125\\% = 0{,}5375\\% \\approx 0{,}538\\%$$.",
      "pitfalls": "Siswa kerap kali hanya memperhitungkan ketidakpastian massa saja ($0{,}125\\%$, opsi B) atau hanya ketidakpastian volume saja ($0{,}413\\%$, opsi C), tanpa menggabungkan perambatan kesalahan dari massa dan ketiga dimensi geometri balok."
    }
  }
];
