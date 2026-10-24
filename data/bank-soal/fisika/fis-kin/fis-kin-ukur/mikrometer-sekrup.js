/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Pengukuran (fis-kin-ukur)
 * Sub-Bab: Mikrometer Sekrup (fis-kin-ukur-mikro)
 * Slug: mikrometer-sekrup
 * Indikator: Prinsip kerja, ketelitian 0,01 mm, pembacaan skala utama & skala putar silinder bidal.
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-ukur-mikro";
  const subTopicSlug = "mikrometer-sekrup";
  const questions = [
  {
    "id": "fis-kin-ukur-mikro-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Mikrometer Sekrup",
    "difficulty": "mudah",
    "statement": "Seorang siswa mengukur ketebalan koin logam menggunakan mikrometer sekrup dengan ketelitian $0{,}01\\text{ mm}$. Pada skala utama terbaca angka $5{,}5\\text{ mm}$ (skala setengah milimeter terbuka jelas), dan garis ke-28 pada silinder putar (bidal) berimpit tepat dengan garis horizontal skala utama. Hasil pelaporan pengukuran ketebalan koin beserta ketidakpastian mutlaknya $(\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil})$ yang benar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENGUKURAN TEBAL KOIN MENGGUNAKAN MIKROMETER SEKRUP",
    "options": [
      "$(5{,}780 \\pm 0{,}005)\\text{ mm}$",
      "$(5{,}780 \\pm 0{,}010)\\text{ mm}$",
      "$(5{,}280 \\pm 0{,}005)\\text{ mm}$",
      "$(5{,}528 \\pm 0{,}005)\\text{ mm}$",
      "$(5{,}820 \\pm 0{,}010)\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pembacaan mikrometer sekrup dirumuskan dengan $x = \\text{Skala Utama} + (\\text{Skala Putar} \\times \\text{Ketelitian})$. Format pelaporan pengukuran tunggal baku adalah $(x \\pm \\Delta x)$ dengan $\\Delta x = \\frac{1}{2} \\times \\text{ketelitian alat}$.",
      "steps": "1) Menentukan nilai skala utama: Skala utama menunjukkan $5{,}5\\text{ mm}$ ($SU = 5{,}5\\text{ mm}$).<br>2) Menentukan nilai skala putar (bidal): Garis ke-28 berimpit dengan ketelitian $0{,}01\\text{ mm}$:<br>$$SP = 28 \\times 0{,}01\\text{ mm} = 0{,}28\\text{ mm}$$<br>3) Menghitung hasil bacaan pengukuran ($x$):<br>$$x = 5{,}5\\text{ mm} + 0{,}28\\text{ mm} = 5{,}78\\text{ mm} = 5{,}780\\text{ mm}$$<br>4) Menghitung ketidakpastian mutlak ($\\Delta x$):<br>$$\\Delta x = \\frac{1}{2} \\times 0{,}01\\text{ mm} = 0{,}005\\text{ mm}$$<br>5) Format pelaporan hasil pengukuran: $(x \\pm \\Delta x) = (5{,}780 \\pm 0{,}005)\\text{ mm}$.",
      "pitfalls": "Jebakan umum: Siswa sering mengabaikan garis skala setengah ($0{,}5\\text{ mm}$) pada bagian bawah sumbu utama sehingga memperoleh $5{,}28\\text{ mm}$ (opsi C), atau lupa membagi skala terkecil dengan 2 untuk memperoleh ketidakpastian mutlak (opsi B)."
    },
    "subTopicSlug": "mikrometer-sekrup",
    "bab": "Kinematika",
    "subBab": "Mikrometer Sekrup",
    "subTopic": "Mikrometer Sekrup",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-ukur-mikro-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Mikrometer Sekrup",
    "difficulty": "mudah",
    "statement": "Pada sebuah mikrometer sekrup standar, satu putaran penuh ($360^\\circ$) silinder putar (bidal) memajukan atau memundurkan poros geser sejauh $0{,}5\\text{ mm}$ (kisar ulir / pitch). Keliling silinder putar tersebut terbagi rata menjadi $50$ garis skala bagian. Nilai skala terkecil (ketelitian) mikrometer sekrup tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PRINSIP KISAR ULIR DAN KETELITIAN MIKROMETER SEKRUP",
    "options": [
      "$0{,}01\\text{ mm}$",
      "$0{,}05\\text{ mm}$",
      "$0{,}02\\text{ mm}$",
      "$0{,}001\\text{ mm}$",
      "$0{,}1\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Ketelitian (nilai skala terkecil/NST) mikrometer sekrup didefinisikan sebagai pergeseran linier poros geser untuk satu bagian skala putar: $\\text{NST} = \\frac{\\text{Kisar Ulir (Pitch)}}{\\text{Jumlah Skala Putar}}$.",
      "steps": "1) Mengidentifikasi kisar ulir (jarak maju 1 putaran penuh bidal): $\\text{Pitch} = 0{,}5\\text{ mm}$.<br>2) Mengidentifikasi jumlah pembagian pada silinder putar: $N = 50$ skala.<br>3) Menghitung nilai skala terkecil:<br>$$\\text{NST} = \\frac{0{,}5\\text{ mm}}{50} = 0{,}01\\text{ mm}$$<br>Maka ketelitian mikrometer sekrup standar tersebut adalah $0{,}01\\text{ mm}$ (atau $10^{-5}\\text{ m}$ / $10\\text{ }\\mu\\text{m}$).",
      "pitfalls": "Siswa kadang tertukar dengan jangka sorong yang berketelitian $0{,}05\\text{ mm}$ atau $0{,}1\\text{ mm}$, atau mengasumsikan 1 putaran penuh bernilai $1\\text{ mm}$ bukan $0{,}5\\text{ mm}$."
    },
    "subTopicSlug": "mikrometer-sekrup",
    "bab": "Kinematika",
    "subBab": "Mikrometer Sekrup",
    "subTopic": "Mikrometer Sekrup",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-ukur-mikro-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Mikrometer Sekrup",
    "difficulty": "mudah",
    "statement": "Pengukuran tebal selembar kaca pelat menggunakan mikrometer sekrup menunjukkan skala utama pada angka $3\\text{ mm}$ tepat (garis bawah $0{,}5\\text{ mm}$ belum terlihat), dan garis skala putar ke-42 berimpit dengan garis mendatar skala utama. Tebal pelat kaca tersebut jika dinyatakan dalam satuan sentimeter ($\\text{cm}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PEMBACAAN TEBAL PELAT KACA DALAM SATUAN SENTIMETER",
    "options": [
      "$0{,}342\\text{ cm}$",
      "$3{,}42\\text{ cm}$",
      "$0{,}392\\text{ cm}$",
      "$0{,}0342\\text{ cm}$",
      "$0{,}3042\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hasil bacaan ukur mikrometer sekrup: $x = \\text{SU} + (\\text{SP} \\times 0{,}01\\text{ mm})$. Untuk mengubah milimeter ke sentimeter, bagi nilai dengan 10: $1\\text{ cm} = 10\\text{ mm}$.",
      "steps": "1) Skala utama: $SU = 3{,}0\\text{ mm}$ (karena garis paruh $0{,}5\\text{ mm}$ belum terlewati).<br>2) Skala putar: Garis ke-42 berimpit:<br>$$SP = 42 \\times 0{,}01\\text{ mm} = 0{,}42\\text{ mm}$$<br>3) Tebal terukur dalam milimeter:<br>$$x = 3{,}0\\text{ mm} + 0{,}42\\text{ mm} = 3{,}42\\text{ mm}$$<br>4) Konversi satuan ke sentimeter:<br>$$x = \\frac{3{,}42\\text{ mm}}{10} = 0{,}342\\text{ cm}$$.",
      "pitfalls": "Kesalahan konversi satuan adalah jebakan utama: memilih $3{,}42\\text{ cm}$ (opsi B) padahal satuan yang diminta adalah sentimeter. Distraktor C muncul bila siswa salah mengira garis $0{,}5\\text{ mm}$ sudah terbuka."
    },
    "subTopicSlug": "mikrometer-sekrup",
    "bab": "Kinematika",
    "subBab": "Mikrometer Sekrup",
    "subTopic": "Mikrometer Sekrup",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-ukur-mikro-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Mikrometer Sekrup",
    "difficulty": "mudah",
    "statement": "Pada saat menggunakan mikrometer sekrup, pengguna disarankan tidak memutar silinder bidal secara langsung ketika poros geser sudah mendekati permukaan objek ukur, melainkan memutar bagian roda bergigi (ratchet knob) di ujung belakang bidal hingga berbunyi 'klik'. Alasan penting dari perlakuan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "FUNGSI MEKANISME RATCHET KNOB PADA MIKROMETER SEKRUP",
    "options": [
      "Menjaga penekanan poros pada objek ukur tetap konstan serta mencegah kerusakan ulir dan deformasi benda",
      "Mempercepat perputaran silinder bidal agar pengukuran lebih efisien",
      "Mengunci skala utama agar tidak bergeser saat nilai dibaca",
      "Mengubah nilai ketelitian alat ukur dari $0{,}01\\text{ mm}$ menjadi $0{,}001\\text{ mm}$",
      "Menghilangkan kesalahan titik nol secara otomatis"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Roda bergigi pemutar halus (ratchet knob / rachet) adalah mekanisme pembatas torsi (torque limiter) pada mikrometer sekrup untuk memastikan gaya jepit selalu seragam pada setiap pengukuran.",
      "steps": "1) Memutar bidal secara paksa ketika poros telah menyentuh benda dapat menyebabkan benda ukur tertekan secara berlebihan (deformasi plastis/elastis) sehingga hasil ukur menjadi lebih kecil dari sebenarnya.<br>2) Penekanan berlebihan juga dapat merusak kepresisian ulir presisi di dalam selubung mikrometer.<br>3) Mekanisme ratchet knob akan tergelincir (berbunyi klik berulang) ketika torsi penekanan standar telah tercapai, memastikan gaya tekan konstan dan hasil ukur akurat objektif.",
      "pitfalls": "Siswa sering mengira fungsi pengunci berada pada ratchet knob, padahal fungsi mengunci dilakukan oleh tuas pengunci (lock nut / locking lever)."
    },
    "subTopicSlug": "mikrometer-sekrup",
    "bab": "Kinematika",
    "subBab": "Mikrometer Sekrup",
    "subTopic": "Mikrometer Sekrup",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-ukur-mikro-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Mikrometer Sekrup",
    "difficulty": "mudah",
    "statement": "Pengukuran diameter kawat tembaga menggunakan mikrometer sekrup menunjukkan garis skala utama $2{,}0\\text{ mm}$ dan garis paruh $0{,}5\\text{ mm}$ di bagian bawah telah terlihat jelas. Sementara itu, garis skala ke-17 pada silinder putar berimpit segaris dengan garis acuan horizontal. Diameter kawat tembaga tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENGUKURAN DIAMETER KAWAT TEMBAGA DENGAN MIKROMETER SEKRUP",
    "options": [
      "$2{,}67\\text{ mm}$",
      "$2{,}17\\text{ mm}$",
      "$2{,}57\\text{ mm}$",
      "$2{,}77\\text{ mm}$",
      "$3{,}17\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Ketika garis batas bawah ($0{,}5\\text{ mm}$) pada selubung tetap (sleeve) sudah tampak, nilai skala utama adalah penjumlahan angka milimeter bulat dengan $0{,}5\\text{ mm}$: $\\text{SU} = \\text{Angka Bulat} + 0{,}5\\text{ mm}$.",
      "steps": "1) Nilai skala utama: Angka $2\\text{ mm}$ ditambah garis paruh bawah $0{,}5\\text{ mm}$ yang sudah terbuka:<br>$$SU = 2{,}0\\text{ mm} + 0{,}5\\text{ mm} = 2{,}5\\text{ mm}$$<br>2) Nilai skala putar (bidal): Garis ke-17 dikalikan ketelitian $0{,}01\\text{ mm}$:<br>$$SP = 17 \\times 0{,}01\\text{ mm} = 0{,}17\\text{ mm}$$<br>3) Total diameter kawat tembaga:<br>$$x = 2{,}5\\text{ mm} + 0{,}17\\text{ mm} = 2{,}67\\text{ mm}$$.",
      "pitfalls": "Lupa menjumlahkan garis skala paruh $0{,}5\\text{ mm}$ merupakan kesalahan paling sering dilakukan siswa ($2{,}0 + 0{,}17 = 2{,}17\\text{ mm}$, opsi B)."
    },
    "subTopicSlug": "mikrometer-sekrup",
    "bab": "Kinematika",
    "subBab": "Mikrometer Sekrup",
    "subTopic": "Mikrometer Sekrup",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-ukur-mikro-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Mikrometer Sekrup",
    "difficulty": "sedang",
    "statement": "Sebelum digunakan untuk mengukur tebal kaca preparat, landasan dan poros geser sebuah mikrometer sekrup berketelitian $0{,}01\\text{ mm}$ dirapatkan tanpa benda. Teramati garis nol pada silinder putar berada 3 skala bagian di bawah garis acuan horizontal skala utama (kesalahan nol positif). Ketika kaca preparat dijepit, skala utama menunjukkan angka $1{,}5\\text{ mm}$ dan garis ke-34 pada silinder putar berimpit tepat dengan garis acuan horizontal. Ketebalan kaca preparat yang sebenarnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "KOREKSI KESALAHAN NOL POSITIF PADA MIKROMETER SEKRUP",
    "options": [
      "$1{,}81\\text{ mm}$",
      "$1{,}84\\text{ mm}$",
      "$1{,}87\\text{ mm}$",
      "$1{,}31\\text{ mm}$",
      "$1{,}53\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kesalahan titik nol positif ($Z > 0$) pada mikrometer sekrup terjadi ketika rahang tertutup rapat tetapi garis nol skala putar berada di bawah garis acuan horizontal. Nilai sebenarnya adalah hasil bacaan terukur dikurangi nilai kesalahan nol: $x_{\\text{sebenarnya}} = x_{\\text{terukur}} - Z$.",
      "steps": "1) Menentukan nilai kesalahan titik nol positif ($Z$):<br>Garis nol berada 3 skala di bawah garis acuan dengan ketelitian $0{,}01\\text{ mm}$:<br>$$Z = +(3 \\times 0{,}01\\text{ mm}) = +0{,}03\\text{ mm}$$<br>2) Menentukan nilai pembacaan terukur ($x_{\\text{terukur}}$):<br>$$x_{\\text{terukur}} = 1{,}5\\text{ mm} + (34 \\times 0{,}01\\text{ mm}) = 1{,}5\\text{ mm} + 0{,}34\\text{ mm} = 1{,}84\\text{ mm}$$<br>3) Menghitung ketebalan sebenarnya:<br>$$x_{\\text{sebenarnya}} = x_{\\text{terukur}} - Z = 1{,}84\\text{ mm} - 0{,}03\\text{ mm} = 1{,}81\\text{ mm}$$.",
      "pitfalls": "Siswa sering melakukan kesalahan dengan menambahkan nilai koreksi alih-alih mengurangkannya ($1{,}84 + 0{,}03 = 1{,}87\\text{ mm}$, opsi C), atau lupa mengoreksi pembacaan awal ($1{,}84\\text{ mm}$, opsi B)."
    },
    "subTopicSlug": "mikrometer-sekrup",
    "bab": "Kinematika",
    "subBab": "Mikrometer Sekrup",
    "subTopic": "Mikrometer Sekrup",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-ukur-mikro-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Mikrometer Sekrup",
    "difficulty": "sedang",
    "statement": "Pada saat landasan dan poros mikrometer sekrup (50 skala putar, ketelitian $0{,}01\\text{ mm}$) dirapatkan penuh, garis nol skala putar berada di atas garis acuan mendatar dan garis ke-46 skala putar berimpit segaris dengan garis acuan mendatar (kesalahan nol negatif). Jika mikrometer tersebut digunakan mengukur diameter bola bantalan baja dan menghasilkan pembacaan skala utama $4{,}0\\text{ mm}$ (garis bawah belum terbuka) serta skala putar pada angka $15$, diameter bola bantalan yang sebenarnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "KOREKSI KESALAHAN NOL NEGATIF PADA MIKROMETER SEKRUP",
    "options": [
      "$4{,}19\\text{ mm}$",
      "$4{,}15\\text{ mm}$",
      "$4{,}11\\text{ mm}$",
      "$3{,}69\\text{ mm}$",
      "$4{,}61\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kesalahan titik nol negatif ($Z < 0$) terjadi bila garis nol bidal berada di atas garis acuan saat rahang rapat. Besar kesalahan nol negatif dihitung dari selisih pembagian total skala putar: $Z = - (50 - n) \\times 0{,}01\\text{ mm}$. Nilai sebenarnya: $x_{\\text{sebenarnya}} = x_{\\text{terukur}} - Z$.",
      "steps": "1) Menghitung nilai kesalahan nol negatif ($Z$):<br>Garis ke-46 berimpit dari total 50 bagian:<br>$$Z = - (50 - 46) \\times 0{,}01\\text{ mm} = - (4 \\times 0{,}01\\text{ mm}) = -0{,}04\\text{ mm}$$<br>2) Menghitung hasil bacaan terukur ($x_{\\text{terukur}}$):<br>$$x_{\\text{terukur}} = 4{,}0\\text{ mm} + (15 \\times 0{,}01\\text{ mm}) = 4{,}15\\text{ mm}$$<br>3) Menghitung diameter sebenarnya:<br>$$x_{\\text{sebenarnya}} = x_{\\text{terukur}} - Z = 4{,}15\\text{ mm} - (-0{,}04\\text{ mm}) = 4{,}15\\text{ mm} + 0{,}04\\text{ mm} = 4{,}19\\text{ mm}$$.",
      "pitfalls": "Banyak siswa salah menganggap kesalahan negatif bernilai $-0{,}46\\text{ mm}$ secara langsung, atau mengurangkan nilai $0{,}04\\text{ mm}$ sehingga memperoleh $4{,}11\\text{ mm}$ (opsi C)."
    },
    "subTopicSlug": "mikrometer-sekrup",
    "bab": "Kinematika",
    "subBab": "Mikrometer Sekrup",
    "subTopic": "Mikrometer Sekrup",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-ukur-mikro-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Mikrometer Sekrup",
    "difficulty": "sedang",
    "statement": "Sebuah mikrometer sekrup vernier memiliki kisar ulir $0{,}5\\text{ mm}$ dan $50$ pembagian pada skala bidal putar. Selain itu, pada selubung tetap (sleeve) terdapat skala nonius vernier tambahan membujur sebanyak $10$ skala bagian yang membagi 9 bagian skala bidal secara merata. Jika pembacaan pengukuran ketebalan semikonduktor menunjukkan skala utama $6{,}5\\text{ mm}$, skala bidal putar melewati angka $24$, dan garis skala vernier ke-6 berimpit tepat dengan salah satu garis bidal, maka hasil pengukuran tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PEMBACAAN MIKROMETER SEKRUP DENGAN NONIUS VERNIER TAMBAHAN",
    "options": [
      "$6{,}746\\text{ mm}$",
      "$6{,}740\\text{ mm}$",
      "$6{,}764\\text{ mm}$",
      "$6{,}524\\text{ mm}$",
      "$6{,}806\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Mikrometer sekrup vernier memiliki tiga tingkat pembacaan: skala utama ($0{,}5\\text{ mm}$), skala bidal ($0{,}01\\text{ mm}$), dan skala vernier longitudinal ($0{,}001\\text{ mm}$). Rumus pembacaan: $x = \\text{SU} + (\\text{Bidal} \\times 0{,}01\\text{ mm}) + (\\text{Vernier} \\times 0{,}001\\text{ mm})$.",
      "steps": "1) Nilai skala utama: $SU = 6{,}5\\text{ mm}$.<br>2) Nilai skala bidal (thimble): Angka 24 dengan ketelitian $0{,}01\\text{ mm}$:<br>$$SP = 24 \\times 0{,}01\\text{ mm} = 0{,}24\\text{ mm}$$<br>3) Nilai skala vernier tambahan: Garis ke-6 dengan ketelitian $\\frac{0{,}01\\text{ mm}}{10} = 0{,}001\\text{ mm}$:<br>$$SV = 6 \\times 0{,}001\\text{ mm} = 0{,}006\\text{ mm}$$<br>4) Total hasil pengukuran presisi:<br>$$x = 6{,}5\\text{ mm} + 0{,}24\\text{ mm} + 0{,}006\\text{ mm} = 6{,}746\\text{ mm}$$.",
      "pitfalls": "Siswa sering mengabaikan ketelitian vernier 3 desimal milimeter ($0{,}001\\text{ mm}$) dan hanya membulatkan ke 2 desimal ($6{,}74\\text{ mm}$ atau $6{,}740\\text{ mm}$, opsi B)."
    },
    "subTopicSlug": "mikrometer-sekrup",
    "bab": "Kinematika",
    "subBab": "Mikrometer Sekrup",
    "subTopic": "Mikrometer Sekrup",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-ukur-mikro-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Mikrometer Sekrup",
    "difficulty": "sedang",
    "statement": "Sebuah kawat penghantar silinder homogen memiliki panjang $L = 10{,}0\\text{ meter}$ dan hambatan jenis bahan $\\rho = 1{,}57 \\times 10^{-7}\\text{ }\\Omega\\cdot\\text{m}$. Diameternya diukur menggunakan mikrometer sekrup berketelitian $0{,}01\\text{ mm}$, di mana skala utama menunjukkan angka $1{,}0\\text{ mm}$ (garis $0{,}5\\text{ mm}$ belum terlihat) dan garis angka $0$ pada skala putar berimpit tepat dengan garis acuan. Besar hambatan listrik kawat penghantar tersebut (gunakan $\\pi = 3{,}14$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENGUKURAN DIAMETER KAWAT UNTUK MENENTUKAN HAMBATAN LISTRIK",
    "options": [
      "$2{,}0\\text{ }\\Omega$",
      "$0{,}5\\text{ }\\Omega$",
      "$4{,}0\\text{ }\\Omega$",
      "$1{,}0\\text{ }\\Omega$",
      "$8{,}0\\text{ }\\Omega$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hambatan listrik kawat kawat silinder dihitung dengan rumus Pouillet $R = \\rho \\frac{L}{A}$. Dengan penampang lingkaran berdiameter $d$, luas penampang adalah $A = \\frac{1}{4} \\pi d^2$, sehingga $R = \\frac{4 \\rho L}{\\pi d^2}$.",
      "steps": "1) Menentukan diameter kawat terukur:<br>$$d = 1{,}0\\text{ mm} + (0 \\times 0{,}01\\text{ mm}) = 1{,}00\\text{ mm} = 1{,}00 \\times 10^{-3}\\text{ m}$$<br>2) Menghitung luas penampang kawat ($A$):<br>$$A = \\frac{1}{4} \\pi d^2 = \\frac{1}{4} \\times 3{,}14 \\times (1{,}00 \\times 10^{-3}\\text{ m})^2 = 0{,}785 \\times 10^{-6}\\text{ m}^2 = 7{,}85 \\times 10^{-7}\\text{ m}^2$$<br>3) Menghitung hambatan kawat ($R$):<br>$$R = \\frac{\\rho L}{A} = \\frac{(1{,}57 \\times 10^{-7}\\text{ }\\Omega\\cdot\\text{m}) \\times 10{,}0\\text{ m}}{7{,}85 \\times 10^{-7}\\text{ m}^2} = \\frac{15{,}7 \\times 10^{-7}}{7{,}85 \\times 10^{-7}} = 2{,}0\\text{ }\\Omega$$.",
      "pitfalls": "Kesalahan paling fatal adalah lupa mengonversi milimeter ke meter pada diameter ($10^{-3}\\text{ m}$), atau lupa membagi 4 pada rumus $\\pi d^2$ sehingga hambatan terhitung menjadi $0{,}5\\text{ }\\Omega$ (opsi B)."
    },
    "subTopicSlug": "mikrometer-sekrup",
    "bab": "Kinematika",
    "subBab": "Mikrometer Sekrup",
    "subTopic": "Mikrometer Sekrup",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-ukur-mikro-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Mikrometer Sekrup",
    "difficulty": "sedang",
    "statement": "Diameter sebuah kelereng kaca diukur dengan mikrometer sekrup berketelitian $0{,}01\\text{ mm}$ dan terukur sebesar $d = 10{,}00\\text{ mm}$. Berdasarkan teori propagasi ketidakpastian pengukuran tunggal dengan ketidakpastian mutlak diameter $\\Delta d = \\frac{1}{2} \\times \\text{skala terkecil}$, persentase ketidakpastian relatif dari penentuan volume kelereng tersebut $(\\frac{\\Delta V}{V} \\times 100\\%)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PROPAGASI KETIDAKPASTIAN PADA PENGUKURAN VOLUME BOLA",
    "options": [
      "$0{,}15\\%$",
      "$0{,}05\\%$",
      "$0{,}10\\%$",
      "$0{,}30\\%$",
      "$0{,}45\\%$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Volume bola dinyatakan dalam fungsi diameter: $V = \\frac{4}{3} \\pi \\left(\\frac{d}{2}\\right)^3 = \\frac{1}{6} \\pi d^3$. Berdasarkan aturan propagasi kesalahan untuk fungsi berpangkat $y = k x^n$, ketidakpastian relatif fraksionalnya adalah $\\frac{\\Delta y}{y} = n \\left(\\frac{\\Delta x}{x}\\right)$.",
      "steps": "1) Menghitung ketidakpastian mutlak pengukuran diameter ($\\Delta d$):<br>$$\\Delta d = \\frac{1}{2} \\times 0{,}01\\text{ mm} = 0{,}005\\text{ mm}$$<br>2) Menghitung ketidakpastian relatif diameter ($\\frac{\\Delta d}{d}$):<br>$$\\frac{\\Delta d}{d} = \\frac{0{,}005\\text{ mm}}{10{,}00\\text{ mm}} = 0{,}0005 = 0{,}05\\%$$<br>3) Menghitung ketidakpastian relatif volume (pangkat 3):<br>$$\\frac{\\Delta V}{V} = 3 \\times \\left(\\frac{\\Delta d}{d}\\right) = 3 \\times 0{,}05\\% = 0{,}15\\%$$.",
      "pitfalls": "Siswa sering menganggap ketidakpastian relatif volume sama dengan ketidakpastian relatif diameter ($0{,}05\\%$, opsi B), lupa mengalikan dengan faktor eksponen 3 dari rumus volume bola berdimensi tiga ($d^3$)."
    },
    "subTopicSlug": "mikrometer-sekrup",
    "bab": "Kinematika",
    "subBab": "Mikrometer Sekrup",
    "subTopic": "Mikrometer Sekrup",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "sup-fis-kin-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Pembacaan Mikrometer Sekrup",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang siswa mengukur diameter sebuah kawat tembaga menggunakan mikrometer sekrup. Skala utama menunjukkan angka $4{,}5\\text{ mm}$ dan garis skala nonius (putar) ke-38 berimpit tepat dengan garis mendatar skala utama. Jika ketelitian alat adalah $0{,}01\\text{ mm}$, maka penulisan hasil pengukuran diameter kawat beserta nilai ketidakpastian mutlaknya $(\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(4{,}88 \\pm 0{,}005)\\text{ mm}$",
      "$(4{,}88 \\pm 0{,}01)\\text{ mm}$",
      "$(4{,}38 \\pm 0{,}005)\\text{ mm}$",
      "$(4{,}80 \\pm 0{,}01)\\text{ mm}$",
      "$(5{,}38 \\pm 0{,}005)\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Pembacaan Mikrometer Sekrup:</strong><br>• $x = \\text{Skala Utama} + (\\text{Skala Nonius} \\times 0{,}01\\text{ mm})$<br>• Nilai ketidakpastian mutlak pengukuran tunggal: $\\Delta x = \\frac{1}{2} \\times 0{,}01\\text{ mm} = 0{,}005\\text{ mm}$.</div>",
      "steps": "<ol><li>Skala utama terlihat: $4{,}5\\text{ mm}$.</li><li>Skala putar nonius: $38 \\times 0{,}01\\text{ mm} = 0{,}38\\text{ mm}$.</li><li>Hasil pengukuran: $x = 4{,}5 + 0{,}38 = 4{,}88\\text{ mm}$.</li><li>Format pelaporan baku: $(4{,}88 \\pm 0{,}005)\\text{ mm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Siswa sering lupa menambahkan garis setengah milimeter ($0{,}5\\text{ mm}$) pada skala utama bawah, sehingga keliru membaca $4{,}38\\text{ mm}$.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Mikrometer Sekrup",
    "subTopic": "Mikrometer Sekrup",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-ukur",
    "subTopicSlug": "mikrometer-sekrup"
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
