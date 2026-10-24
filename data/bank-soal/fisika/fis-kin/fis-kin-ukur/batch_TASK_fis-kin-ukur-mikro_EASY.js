/**
 * Batch Task: TASK_fis-kin-ukur-mikro_EASY
 * SubTopic: Mikrometer Sekrup (fis-kin-ukur-mikro)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
