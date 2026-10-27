/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Pengukuran (fis-kin-ukur)
 * Sub-Bab: Jangka Sorong (fis-kin-ukur-jangka)
 * Slug: jangka-sorong
 * Indikator: Prinsip kerja, ketelitian 0,05/0,1 mm, pembacaan skala utama & skala nonius jangka sorong.
 * 
 * Total Butir Soal: 12 (Mudah: 6, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-ukur-jangka";
  const subTopicSlug = "jangka-sorong";
  const questions = [
  {
    "id": "fis-kin-ukur-jangka-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-jangka",
    "difficulty": "mudah",
    "statement": "Seorang siswa mengukur tebal sebuah pelat aluminium menggunakan jangka sorong dengan ketelitian $0{,}05\\text{ mm}$. Pada pengukuran tersebut, garis nol skala nonius berada di antara skala $2{,}8\\text{ cm}$ dan $2{,}9\\text{ cm}$ pada skala utama. Garis ke-6 pada skala nonius berimpit tepat dengan salah satu garis pada skala utama. Pelaporan hasil pengukuran tebal pelat aluminium tersebut yang benar beserta nilai ketidakpastian mutlaknya $(\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENGUKURAN TEBAL PELAT DENGAN JANGKA SORONG",
    "options": [
      "$(2{,}830 \\pm 0{,}0025)\\text{ cm}$",
      "$(2{,}860 \\pm 0{,}0050)\\text{ cm}$",
      "$(2{,}830 \\pm 0{,}0050)\\text{ cm}$",
      "$(2{,}860 \\pm 0{,}0025)\\text{ cm}$",
      "$(2{,}806 \\pm 0{,}0050)\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pembacaan jangka sorong dirumuskan dengan $x = \\text{Skala Utama} + (\\text{Skala Nonius} \\times \\text{Ketelitian})$. Pelaporan hasil pengukuran tunggal dituliskan dalam format baku $(x \\pm \\Delta x)$, di mana ketidakpastian mutlak adalah $\\Delta x = \\frac{1}{2} \\times \\text{nilai skala terkecil}$.",
      "steps": "1) Menentukan nilai skala utama: Garis nol nonius berada di antara $2{,}8\\text{ cm}$ dan $2{,}9\\text{ cm}$, maka skala utama terbaca $SU = 2{,}8\\text{ cm} = 28\\text{ mm}$.<br>2) Menentukan nilai skala nonius: Garis ke-6 berimpit dengan ketelitian $0{,}05\\text{ mm} = 0{,}005\\text{ cm}$:<br>$$SN = 6 \\times 0{,}005\\text{ cm} = 0{,}030\\text{ cm}$$<br>3) Hasil bacaan pengukuran:<br>$$x = 2{,}8\\text{ cm} + 0{,}030\\text{ cm} = 2{,}830\\text{ cm}$$<br>4) Menghitung ketidakpastian mutlak:<br>$$\\Delta x = \\frac{1}{2} \\times 0{,}005\\text{ cm} = 0{,}0025\\text{ cm}$$<br>5) Format pelaporan baku: $(x \\pm \\Delta x) = (2{,}830 \\pm 0{,}0025)\\text{ cm}$.",
      "pitfalls": "Jebakan umum: Siswa sering mengalikan garis nonius ke-6 langsung dengan $0{,}1$ sehingga menghasilkan $2{,}86\\text{ cm}$, padahal ketelitian alat adalah $0{,}05\\text{ mm}$ ($0{,}005\\text{ cm}$). Selain itu, siswa kerap lupa membagi ketelitian alat dengan 2 untuk mendapatkan ketidakpastian mutlak $\\Delta x$."
    },
    "subTopicSlug": "jangka-sorong",
    "bab": "Kinematika",
    "subBab": "Jangka Sorong",
    "subTopic": "Jangka Sorong",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "category": "Jangka Sorong",
    "hint": "Pembacaan jangka sorong dirumuskan dengan $x = \\text{Skala Utama} + (\\text{Skala Nonius} \\times \\text{Ketelitian})$. Pelaporan hasil pengukuran tunggal dituliskan dalam format baku $(x \\pm \\Delta x)$, di mana ketidakpastian mutlak adalah $\\Delta x = \\frac{1}{2} \\times \\text{nilai skala terkecil}$."
  },
  {
    "id": "fis-kin-ukur-jangka-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-jangka",
    "difficulty": "mudah",
    "statement": "Sebuah jangka sorong memiliki skala utama dengan nilai pembagian terkecil $1\\text{ mm}$. Pada rahang geser terdapat skala nonius dengan panjang total $9\\text{ mm}$ yang terbagi rata menjadi $10$ skala bagian. Nilai ketelitian (skala terkecil) dari jangka sorong tersebut dan pembacaan 1 bagian skala nonius berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PRINSIP PEMBAGIAN SKALA NONIUS JANGKA SORONG",
    "options": [
      "$0{,}1\\text{ mm}$ dan $0{,}9\\text{ mm}$",
      "$0{,}05\\text{ mm}$ dan $0{,}95\\text{ mm}$",
      "$0{,}1\\text{ mm}$ dan $1{,}0\\text{ mm}$",
      "$0{,}01\\text{ mm}$ dan $0{,}09\\text{ mm}$",
      "$0{,}05\\text{ mm}$ dan $0{,}9\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Prinsip skala nonius (Vernier) adalah memanfaatkan selisih panjang antara 1 bagian skala utama dan 1 bagian skala nonius. Ketelitian atau nilai skala terkecil (NST) alat dirumuskan sebagai $\\text{NST} = 1\\text{ SU} - 1\\text{ SN}$.",
      "steps": "1) Menentukan nilai 1 bagian skala utama: $1\\text{ SU} = 1\\text{ mm}$.<br>2) Menentukan nilai 1 bagian skala nonius: Panjang total skala nonius adalah $9\\text{ mm}$ yang dibagi menjadi 10 bagian sama rata:<br>$$1\\text{ SN} = \\frac{9\\text{ mm}}{10} = 0{,}9\\text{ mm}$$<br>3) Menghitung ketelitian jangka sorong:<br>$$\\text{NST} = 1\\text{ SU} - 1\\text{ SN} = 1\\text{ mm} - 0{,}9\\text{ mm} = 0{,}1\\text{ mm}$$<br>Maka nilai ketelitian adalah $0{,}1\\text{ mm}$ dan nilai 1 bagian skala nonius adalah $0{,}9\\text{ mm}$.",
      "pitfalls": "Siswa sering mengira nilai 1 bagian skala nonius sama dengan nilai ketelitian alat ($0{,}1\\text{ mm}$), padahal $0{,}1\\text{ mm}$ adalah selisih antara 1 skala utama ($1\\text{ mm}$) dan 1 skala nonius ($0{,}9\\text{ mm}$)."
    },
    "subTopicSlug": "jangka-sorong",
    "bab": "Kinematika",
    "subBab": "Jangka Sorong",
    "subTopic": "Jangka Sorong",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "category": "Jangka Sorong",
    "hint": "Prinsip skala nonius (Vernier) adalah memanfaatkan selisih panjang antara 1 bagian skala utama dan 1 bagian skala nonius. Ketelitian atau nilai skala terkecil (NST) alat dirumuskan sebagai $\\text{NST} = 1\\text{ SU} - 1\\text{ SN}$."
  },
  {
    "id": "fis-kin-ukur-jangka-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-jangka",
    "difficulty": "mudah",
    "statement": "Pengukuran diameter dalam sebuah pipa paralon menggunakan rahang atas (rahang dalam) jangka sorong menghasilkan pembacaan skala utama $3{,}5\\text{ cm}$ dan garis nonius ke-4 berimpit tepat dengan garis skala utama. Jika jangka sorong memiliki 10 skala nonius dengan nilai ketelitian $0{,}1\\text{ mm}$, maka luas penampang dalam pipa tersebut (gunakan $\\pi = 3{,}14$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENGUKURAN DIAMETER DALAM DENGAN RAHANG ATAS",
    "options": [
      "$9{,}84\\text{ cm}^2$",
      "$39{,}35\\text{ cm}^2$",
      "$11{,}12\\text{ cm}^2$",
      "$4{,}92\\text{ cm}^2$",
      "$7{,}85\\text{ cm}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Rahang atas jangka sorong digunakan khusus untuk mengukur diameter dalam suatu rongga pipa. Hasil pembacaan diameter $d = \\text{SU} + (\\text{SN} \\times \\text{Ketelitian})$, kemudian luas penampang lingkaran dihitung dengan $A = \\frac{1}{4} \\pi d^2 = \\pi r^2$.",
      "steps": "1) Menghitung diameter terukur:<br>$$\\text{Ketelitian} = 0{,}1\\text{ mm} = 0{,}01\\text{ cm}$$<br>$$d = 3{,}5\\text{ cm} + (4 \\times 0{,}01\\text{ cm}) = 3{,}5\\text{ cm} + 0{,}04\\text{ cm} = 3{,}54\\text{ cm}$$<br>2) Menghitung jari-jari dalam pipa:<br>$$r = \\frac{d}{2} = \\frac{3{,}54\\text{ cm}}{2} = 1{,}77\\text{ cm}$$<br>3) Menghitung luas penampang pipa:<br>$$A = \\pi r^2 = 3{,}14 \\times (1{,}77\\text{ cm})^2 = 3{,}14 \\times 3{,}1329\\text{ cm}^2 \\approx 9{,}84\\text{ cm}^2$$.",
      "pitfalls": "Siswa sering langsung mengalikan $\\pi d^2$ tanpa membagi 4 (atau lupa membagi diameter menjadi jari-jari), yang menghasilkan $39{,}35\\text{ cm}^2$ (opsi B). Jebakan lainnya adalah salah membaca konversi satuan $0{,}1\\text{ mm} = 0{,}01\\text{ cm}$."
    },
    "subTopicSlug": "jangka-sorong",
    "bab": "Kinematika",
    "subBab": "Jangka Sorong",
    "subTopic": "Jangka Sorong",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "category": "Jangka Sorong",
    "hint": "Rahang atas jangka sorong digunakan khusus untuk mengukur diameter dalam suatu rongga pipa. Hasil pembacaan diameter $d = \\text{SU} + (\\text{SN} \\times \\text{Ketelitian})$, kemudian luas penampang lingkaran dihitung dengan $A = \\frac{1}{4} \\pi d^2 = \\pi r^2$."
  },
  {
    "id": "fis-kin-ukur-jangka-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-jangka",
    "difficulty": "mudah",
    "statement": "Perhatikan fungsi dari komponen-komponen jangka sorong berikut:<br>(1) Rahang tetap dan rahang geser bawah<br>(2) Rahang tetap dan rahang geser atas<br>(3) Tangkai ukur kedalaman (depth probe)<br>(4) Baut pengunci (locking screw)<br>Pasangan komponen dan fungsinya yang tepat ketika seorang teknisi ingin mengukur kedalaman lubang tabung silinder dan mengunci skala agar tidak bergeser saat dibaca adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "ANATOMI DAN FUNGSI KOMPONEN JANGKA SORONG",
    "options": [
      "(3) dan (4)",
      "(1) dan (4)",
      "(2) dan (3)",
      "(2) dan (4)",
      "(1) dan (3)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jangka sorong memiliki tiga bagian pengukuran utama: rahang bawah untuk mengukur diameter luar atau ketebalan, rahang atas untuk mengukur diameter dalam, dan bilah tangkai ekor (depth probe) untuk mengukur kedalaman rongga. Baut pengunci berfungsi mempertahankan posisi rahang saat pembacaan hasil.",
      "steps": "1) Mengukur kedalaman rongga lubang dilakukan dengan menjulurkan bilah tangkai kedalaman (depth probe) yang terletak pada bagian ekor jangka sorong (komponen 3).<br>2) Mengunci posisi rahang geser agar nilai pembacaan tidak berubah saat dipindahkan dari objek ukur dilakukan menggunakan baut pengunci / locking screw (komponen 4).<br>3) Dengan demikian, pasangan komponen yang tepat adalah (3) dan (4).",
      "pitfalls": "Siswa terkadang tertukar antara fungsi rahang atas (diameter dalam) dan tangkai kedalaman, atau mengira rahang bawah dapat digunakan untuk mengukur kedalaman lubang tabung."
    },
    "subTopicSlug": "jangka-sorong",
    "bab": "Kinematika",
    "subBab": "Jangka Sorong",
    "subTopic": "Jangka Sorong",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "category": "Jangka Sorong",
    "hint": "Jangka sorong memiliki tiga bagian pengukuran utama: rahang bawah untuk mengukur diameter luar atau ketebalan, rahang atas untuk mengukur diameter dalam, dan bilah tangkai ekor (depth probe) untuk mengukur kedalaman rongga. Baut pengunci berfungsi mempertahankan posisi rahang saat pembacaan hasil."
  },
  {
    "id": "fis-kin-ukur-jangka-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-jangka",
    "difficulty": "mudah",
    "statement": "Pengukuran panjang balok kayu kecil menggunakan jangka sorong berketelitian $0{,}05\\text{ mm}$ menunjukkan skala utama pada angka $46\\text{ mm}$ lewat sedikit, dan garis nonius ke-7 berimpit dengan salah satu garis skala utama. Panjang balok tersebut bila dinyatakan dalam satuan standar internasional (SI) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PEMBACAAN PANJANG BALOK DALAM SATUAN SI",
    "options": [
      "$4{,}635 \\times 10^{-2}\\text{ m}$",
      "$4{,}670 \\times 10^{-2}\\text{ m}$",
      "$4{,}635 \\times 10^{-3}\\text{ m}$",
      "$4{,}670 \\times 10^{-1}\\text{ m}$",
      "$4{,}607 \\times 10^{-2}\\text{ m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pembacaan jangka sorong dalam satuan milimeter: $x = \\text{SU (mm)} + (\\text{SN} \\times \\text{Ketelitian (mm)})$. Konversi satuan dari milimeter ke satuan SI (meter) menggunakan faktor $1\\text{ mm} = 10^{-3}\\text{ m}$.",
      "steps": "1) Nilai skala utama: $SU = 46\\text{ mm}$.<br>2) Nilai skala nonius: Garis ke-7 dengan ketelitian $0{,}05\\text{ mm}$:<br>$$SN = 7 \\times 0{,}05\\text{ mm} = 0{,}35\\text{ mm}$$<br>3) Hasil pengukuran dalam satuan milimeter:<br>$$x = 46\\text{ mm} + 0{,}35\\text{ mm} = 46{,}35\\text{ mm}$$<br>4) Konversi ke satuan meter (SI):<br>$$x = 46{,}35 \\times 10^{-3}\\text{ m} = 4{,}635 \\times 10^{-2}\\text{ m}$$.",
      "pitfalls": "Distraktor B mengasumsikan garis ke-7 dikali $0{,}1\\text{ mm}$ menghasilkan $46{,}70\\text{ mm}$. Distraktor C salah dalam penulisan pangkat eksponen notasi ilmiah."
    },
    "subTopicSlug": "jangka-sorong",
    "bab": "Kinematika",
    "subBab": "Jangka Sorong",
    "subTopic": "Jangka Sorong",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "category": "Jangka Sorong",
    "hint": "Pembacaan jangka sorong dalam satuan milimeter: $x = \\text{SU (mm)} + (\\text{SN} \\times \\text{Ketelitian (mm)})$. Konversi satuan dari milimeter ke satuan SI (meter) menggunakan faktor $1\\text{ mm} = 10^{-3}\\text{ m}$. **Tips:** Distraktor B mengasumsikan garis ke-7 dikali $0{,}1\\text{ mm}$ menghasilkan $46{,}70\\text{ mm}$."
  },
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
    },
    "subTopicSlug": "jangka-sorong",
    "bab": "Kinematika",
    "subBab": "Jangka Sorong",
    "subTopic": "Jangka Sorong",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "category": "Jangka Sorong",
    "hint": "Kesalahan titik nol positif (positive zero error) terjadi ketika rahang tertutup rapat tetapi garis nol nonius berada di sebelah kanan garis nol skala utama ($Z > 0$). Nilai pembacaan yang sebenarnya diperoleh dengan mengurangkan nilai terukur dengan nilai kesalahan nol: $x_{\\text{sebenarnya}} = x_{\\text{terukur}} - Z$."
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
    },
    "subTopicSlug": "jangka-sorong",
    "bab": "Kinematika",
    "subBab": "Jangka Sorong",
    "subTopic": "Jangka Sorong",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "category": "Jangka Sorong",
    "hint": "Kesalahan titik nol negatif (negative zero error) terjadi bila garis nol nonius berada di sebelah kiri garis nol skala utama saat rahang rapat. Besar kesalahan negatif dihitung dari selisih jumlah total skala nonius dengan garis yang berimpit: $Z = - (N - n) \\times \\text{Ketelitian}$. Koreksi nilai terukur dirumuskan: $x_{\\text{sebenarnya}} = x_{\\text{terukur}} - Z$."
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
    },
    "subTopicSlug": "jangka-sorong",
    "bab": "Kinematika",
    "subBab": "Jangka Sorong",
    "subTopic": "Jangka Sorong",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "category": "Jangka Sorong",
    "hint": "Jangka sorong dengan 20 bagian skala nonius memiliki ketelitian $\\text{NST} = \\frac{1\\text{ mm}}{20} = 0{,}05\\text{ mm}$. Karena kedua koin homogen sejenis (massa jenis $\\rho$ sama) dan ketebalan $h$ sama, perbandingan massa sebanding dengan perbandingan kuadrat diameter koin: $\\frac{m_B}{m_A} = \\frac{V_B}{V_A} = \\left(\\frac{d_B}{d_A}\\right)^2$."
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
    },
    "subTopicSlug": "jangka-sorong",
    "bab": "Kinematika",
    "subBab": "Jangka Sorong",
    "subTopic": "Jangka Sorong",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "category": "Jangka Sorong",
    "hint": "Ketelitian (nilai skala terkecil) suatu jangka sorong non-standar ditentukan oleh selisih nilai 1 bagian skala utama dengan nilai 1 bagian skala nonius: $\\text{NST} = 1\\text{ SU} - 1\\text{ SN}$. **Tips:** Siswa sering mengasumsikan nilai skala utama selalu $1\\text{ mm}$ sehingga menghitung ketelitian secara keliru."
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
    },
    "subTopicSlug": "jangka-sorong",
    "bab": "Kinematika",
    "subBab": "Jangka Sorong",
    "subTopic": "Jangka Sorong",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "category": "Jangka Sorong",
    "hint": "Massa jenis balok dihitung dengan $\\rho = \\frac{m}{V} = \\frac{m}{p \\cdot l \\cdot t}$. Menurut teori perambatan kesalahan (propagation of uncertainty) untuk operasi perkalian dan pembagian, ketidakpastian relatif fraksional total adalah jumlah dari ketidakpastian relatif masing-masing variabel: $\\frac{\\Delta \\rho}{\\rho} = \\frac{\\Delta m}{m} + \\frac{\\Delta p}{p} + \\frac{\\Delta l}{l} + \\frac{\\Delta t}{t}$."
  },
  {
    "id": "mudah-fis-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-ukur-jangka",
    "category": "Pengukuran & Angka Penting",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Hasil pengukuran ketebalan pelat logam menggunakan jangka sorong menunjukkan skala utama $3{,}1\\text{ cm}$ dan garis nonius ke-7 berimpit tepat dengan garis skala utama. Jika ketelitian (skala terkecil nonius) jangka sorong tersebut adalah $0{,}01\\text{ cm}$, maka pelaporan hasil pengukuran yang benar beserta nilai ketidakpastian mutlaknya $(\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(3{,}17 \\pm 0{,}005)\\text{ cm}$",
      "$(3{,}17 \\pm 0{,}01)\\text{ cm}$",
      "$(3{,}14 \\pm 0{,}005)\\text{ cm}$",
      "$(3{,}70 \\pm 0{,}01)\\text{ cm}$",
      "$(3{,}27 \\pm 0{,}05)\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Pembacaan Jangka Sorong & Ketidakpastian Mutlak:</strong><br>\n          • Hasil bacaan: $x = \\text{Skala Utama} + (\\text{Skala Nonius} \\times \\text{Ketelitian})$<br>\n          • Nilai ketidakpastian pengukuran tunggal: $\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil}$<br>\n          • Format pelaporan baku: $x \\pm \\Delta x$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li><strong>Menghitung Nilai Bacaan $(x)$:</strong><br>\n            $$x = 3{,}1\\text{ cm} + (7 \\times 0{,}01\\text{ cm}) = 3{,}1\\text{ cm} + 0{,}07\\text{ cm} = 3{,}17\\text{ cm}$$\n          </li>\n          <li><strong>Menghitung Ketidakpastian Mutlak $(\\Delta x)$:</strong><br>\n            $$\\Delta x = \\frac{1}{2} \\times 0{,}01\\text{ cm} = 0{,}005\\text{ cm}$$\n          </li>\n          <li><strong>Pelaporan Hasil Pengukuran:</strong><br>\n            $$(x \\pm \\Delta x) = (3{,}17 \\pm 0{,}005)\\text{ cm}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          <strong>⚠️ Jebakan Pengukuran:</strong><br>\n          Jangan lupa membagi ketelitian alat dengan 2 untuk memperoleh ketidakpastian mutlak tunggal $\\Delta x$. Seringkali siswa langsung menuliskan $3{,}17 \\pm 0{,}01\\text{ cm}$ padahal ketidakpastiannya adalah setengah skala terkecil.\n        </div>\n      "
    },
    "bab": "Kinematika",
    "subBab": "Jangka Sorong",
    "subTopic": "Jangka Sorong",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-ukur",
    "subTopicSlug": "jangka-sorong",
    "hint": "Pembacaan Jangka Sorong & Ketidakpastian Mutlak: • Hasil bacaan: $x = \\text{Skala Utama} + (\\text{Skala Nonius} \\times \\text{Ketelitian})$ • Nilai ketidakpastian pengukuran tunggal: $\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil}$ • Format pelaporan baku: $x \\pm \\Delta x$. **Tips:** Jangan lupa membagi ketelitian alat dengan 2 untuk memperoleh ketidakpastian mutlak tunggal $\\Delta x$."
  },
  {
    "id": "fis-din-16",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-ukur-jangka",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah beban logam bermassa $m = 2\\text{ kg}$ diikatkan pada ujung seutas kawat ringan sepanjang $L = 0{,}8\\text{ meter}$ dan diputar pada bidang lingkaran vertikal. Pada saat beban melintasi titik terendah dari lintasannya, kelajuannya terukur sebesar $v = 4\\text{ m/s}$. Jika $g = 10\\text{ m/s}^2$, besar gaya tegangan kawat pada titik terendah tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "20 N",
      "30 N",
      "40 N",
      "50 N",
      "60 N"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton arah radial gerak melingkar vertikal di titik terendah: $T - mg = \\frac{m v^2}{R}$.</div>",
      "steps": "<ol><li>1) Gaya gravitasi: $W = mg = 2 \\times 10 = 20\\text{ N}$.<br>2) Gaya sentripetal yang dibutuhkan: $F_s = \\frac{m v^2}{L} = \\frac{2 \\times 4^2}{0{,}8} = \\frac{32}{0{,}8} = 40\\text{ N}$.<br>3) Tegangan kawat pada titik terendah: $T = W + F_s = 20 + 40 = 60\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Menjawab hanya gaya sentripetalnya saja ($40\\text{ N}$) atau hanya beratnya saja ($20\\text{ N}$), tanpa menggabungkan kedua komponen gaya searah radial.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Jangka Sorong",
    "subTopic": "Jangka Sorong",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-ukur",
    "subTopicSlug": "jangka-sorong",
    "hint": "Konsep: Hukum II Newton arah radial gerak melingkar vertikal di titik terendah: $T - mg = \\frac{m v^2}{R}$."
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
