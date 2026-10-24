/**
 * Batch Task: TASK_fis-kin-ukur-jangka_EASY
 * SubTopic: Jangka Sorong (fis-kin-ukur-jangka)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
