/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Pengukuran (fis-kin-ukur)
 * Sub-Bab: Neraca Tiga Lengan (fis-kin-ukur-neraca)
 * Slug: neraca-tiga-lengan
 * Indikator: Pengukuran massa presisi, pembacaan posisi anting tiga lengan neraca Ohaus.
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-ukur-neraca";
  const subTopicSlug = "neraca-tiga-lengan";
  const questions = [
  {
    "id": "fis-kin-ukur-neraca-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Neraca Tiga Lengan",
    "difficulty": "mudah",
    "statement": "Dalam sebuah praktikum fisika dasar, seorang siswa menimbang sebuah balok kuningan menggunakan neraca Ohaus tiga lengan. Pada saat neraca berada dalam keadaan setimbang mendatar, posisi anting geser pada ketiga lengan menunjukkan:<br>• Lengan belakang (skala ratusan): $200\\text{ g}$<br>• Lengan tengah (skala puluhan): $40\\text{ g}$<br>• Lengan depan (skala satuan & desimal): $6{,}5\\text{ g}$<br>Jika ketelitian lengan depan adalah $0{,}1\\text{ g}$, maka penulisan hasil pengukuran massa balok kuningan beserta ketidakpastian mutlaknya $(\\Delta m = \\frac{1}{2} \\times \\text{skala terkecil})$ yang benar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PEMBACAAN POSISI ANTING TIGA LENGAN NERACA OHAUS",
    "options": [
      "$(246{,}50 \\pm 0{,}05)\\text{ g}$",
      "$(246{,}50 \\pm 0{,}10)\\text{ g}$",
      "$(264{,}50 \\pm 0{,}05)\\text{ g}$",
      "$(246{,}05 \\pm 0{,}05)\\text{ g}$",
      "$(240{,}65 \\pm 0{,}10)\\text{ g}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Massa total pada neraca tiga lengan adalah jumlah aljabar dari nilai skala pada ketiga lengan: $m = m_{\\text{belakang}} + m_{\\text{tengah}} + m_{\\text{depan}}$. Nilai ketidakpastian mutlak pengukuran tunggal adalah $\\Delta m = \\frac{1}{2} \\times \\text{skala terkecil}$.",
      "steps": "1) Menghitung massa terukur total:<br>$$m = 200\\text{ g} + 40\\text{ g} + 6{,}5\\text{ g} = 246{,}5\\text{ g} = 246{,}50\\text{ g}$$<br>2) Menghitung ketidakpastian mutlak ($\\Delta m$):<br>$$\\Delta m = \\frac{1}{2} \\times 0{,}1\\text{ g} = 0{,}05\\text{ g}$$<br>3) Format pelaporan baku pengukuran tunggal: $(m \\pm \\Delta m) = (246{,}50 \\pm 0{,}05)\\text{ g}$.",
      "pitfalls": "Siswa kerap lupa membagi skala terkecil dengan 2 sehingga langsung menuliskan $\\pm 0{,}10\\text{ g}$ (opsi B), atau tertukar membaca angka puluhan dan satuan."
    },
    "subTopicSlug": "neraca-tiga-lengan",
    "bab": "Kinematika",
    "subBab": "Neraca Tiga Lengan",
    "subTopic": "Neraca Tiga Lengan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-ukur-neraca-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Neraca Tiga Lengan",
    "difficulty": "mudah",
    "statement": "Sebuah neraca Ohaus tiga lengan yang sering digunakan di laboratorium sekolah memiliki tiga lengan beranting geser dengan pembagian skala: lengan pertama $0 - 500\\text{ g}$ (tiap takik $100\\text{ g}$), lengan kedua $0 - 100\\text{ g}$ (tiap takik $10\\text{ g}$), dan lengan ketiga $0 - 10\\text{ g}$ (terbagi menjadi 100 skala kecil). Kapasitas ukur maksimum dan nilai skala terkecil (ketelitian) dari neraca tersebut berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "KAPASITAS UKUR DAN KETELITIAN NERACA OHAUS 3 LENGAN",
    "options": [
      "$610\\text{ g}$ dan $0{,}1\\text{ g}$",
      "$500\\text{ g}$ dan $0{,}01\\text{ g}$",
      "$600\\text{ g}$ dan $0{,}1\\text{ g}$",
      "$610\\text{ g}$ dan $0{,}01\\text{ g}$",
      "$1000\\text{ g}$ dan $1{,}0\\text{ g}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kapasitas maksimum neraca tiga lengan tanpa beban gantung tambahan adalah penjumlahan nilai batas atas tiap lengan: $M_{\\text{maks}} = 500\\text{ g} + 100\\text{ g} + 10\\text{ g} = 610\\text{ g}$. Nilai skala terkecil ditentukan oleh pembagian skala terkecil pada lengan paling depan.",
      "steps": "1) Menghitung kapasitas maksimum:<br>$$M_{\\text{maks}} = 500\\text{ g} + 100\\text{ g} + 10\\text{ g} = 610\\text{ g}$$<br>2) Menentukan nilai skala terkecil pada lengan ketiga (depan):<br>Rentang $10\\text{ g}$ dibagi menjadi 100 skala bagian:<br>$$\\text{NST} = \\frac{10\\text{ g}}{100} = 0{,}1\\text{ g}$$<br>Maka kapasitas ukur maksimum adalah $610\\text{ g}$ dan ketelitiannya adalah $0{,}1\\text{ g}$.",
      "pitfalls": "Banyak siswa salah mengira kapasitas maksimum hanya $500\\text{ g}$ atau $600\\text{ g}$ karena mengabaikan lengan satuan $10\\text{ g}$."
    },
    "subTopicSlug": "neraca-tiga-lengan",
    "bab": "Kinematika",
    "subBab": "Neraca Tiga Lengan",
    "subTopic": "Neraca Tiga Lengan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-ukur-neraca-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Neraca Tiga Lengan",
    "difficulty": "mudah",
    "statement": "Hasil penimbangan sepotong paduan logam dengan neraca Ohaus tiga lengan menunjukkan lengan pertama pada $100\\text{ g}$, lengan kedua pada $70\\text{ g}$, dan lengan ketiga pada $3{,}4\\text{ g}$. Nilai massa paduan logam tersebut jika dinyatakan dalam satuan Standar Internasional (kilogram) dengan penulisan notasi ilmiah yang tepat adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENIMBANGAN MASSA LOGAM DAN KONVERSI KE SATUAN SI",
    "options": [
      "$1{,}734 \\times 10^{-1}\\text{ kg}$",
      "$1{,}734 \\times 10^{-2}\\text{ kg}$",
      "$1{,}734 \\times 10^{2}\\text{ kg}$",
      "$1{,}734 \\times 10^{-3}\\text{ kg}$",
      "$1{,}734 \\times 10^{0}\\text{ kg}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Massa total dihitung dengan menjumlahkan ketiga skala, kemudian dikonversikan ke satuan kilogram (SI) menggunakan faktor konversi $1\\text{ kg} = 1000\\text{ g} = 10^3\\text{ g}$.",
      "steps": "1) Menjumlahkan ketiga lengan:<br>$$m = 100\\text{ g} + 70\\text{ g} + 3{,}4\\text{ g} = 173{,}4\\text{ g}$$<br>2) Mengonversi ke satuan kilogram:<br>$$m = \\frac{173{,}4}{1000}\\text{ kg} = 0{,}1734\\text{ kg}$$<br>3) Menuliskan dalam format notasi ilmiah baku ($a \\times 10^n$ dengan $1 \\le a < 10$):<br>$$m = 1{,}734 \\times 10^{-1}\\text{ kg}$$.",
      "pitfalls": "Kesalahan konversi satuan gram ke kilogram sering kali salah pangkat, seperti memilih $10^{-2}$ atau $10^{-3}$."
    },
    "subTopicSlug": "neraca-tiga-lengan",
    "bab": "Kinematika",
    "subBab": "Neraca Tiga Lengan",
    "subTopic": "Neraca Tiga Lengan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-ukur-neraca-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Neraca Tiga Lengan",
    "difficulty": "mudah",
    "statement": "Sebelum meletakkan benda yang akan ditimbang ke atas piringan neraca Ohaus tiga lengan, pengamat melihat bahwa garis penunjuk kesetimbangan di ujung lengan neraca tidak berada tepat sejajar pada garis angka nol (garis acuan) statif. Langkah kalibrasi awal yang benar untuk mengatasi hal tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PROSEDUR KALIBRASI AWAL NERACA OHAUS",
    "options": [
      "Memutar sekrup pemutar kalibrasi (zero adjustment knob) di bawah piringan hingga jarum penunjuk tepat segaris dengan angka nol",
      "Menggeser anting lengan depan sedikit ke kanan hingga jarum tepat sejajar angka nol",
      "Membersihkan piringan neraca menggunakan larutan asam",
      "Menambah beban gantung kecil pada ujung lengan neraca",
      "Mengabaikan posisi jarum dan langsung menambahkan selisihnya pada hasil akhir pengukuran"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kalibrasi titik nol (zero adjustment) pada neraca Ohaus dilakukan saat semua anting geser berada tepat di posisi angka 0 tanpa beban di piringan, dengan memutar tombol penyeimbang / sekrup tara (zero adjustment knob).",
      "steps": "1) Pastikan seluruh anting geser pada ketiga lengan berada tepat pada takik/angka 0.<br>2) Periksa garis penunjuk di ujung lengan terhadap garis acuan tetap pada skala statif.<br>3) Jika jarum tidak segaris dengan angka nol, putar sekrup penyeimbang (zero adjust knob) yang terletak di bawah piringan secara perlahan searah atau berlawanan jarum jam hingga jarum penunjuk setimbang sempurna di angka nol.<br>4) Jangan menggeser anting geser untuk mengenolkan karena akan mengacaukan pembacaan skala.",
      "pitfalls": "Menggeser anting geser untuk mengenolkan adalah kesalahan fatal praktikum yang merusak akurasi pengukuran."
    },
    "subTopicSlug": "neraca-tiga-lengan",
    "bab": "Kinematika",
    "subBab": "Neraca Tiga Lengan",
    "subTopic": "Neraca Tiga Lengan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-ukur-neraca-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Neraca Tiga Lengan",
    "difficulty": "mudah",
    "statement": "Seorang praktikan ingin mengukur massa sejumlah zat cair menggunakan metode penimbangan wadah (tare). Gelas kimia kosong ditimbang menggunakan neraca tiga lengan dan diperoleh massa $m_1 = 58{,}5\\text{ g}$. Setelah zat cair dituangkan ke dalam gelas kimia tersebut, neraca menunjukkan massa total $m_2 = 142{,}5\\text{ g}$. Massa zat cair murni tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENGUKURAN MASSA ZAT CAIR DENGAN METODE TARA",
    "options": [
      "$84{,}0\\text{ g}$",
      "$201{,}0\\text{ g}$",
      "$84{,}5\\text{ g}$",
      "$94{,}0\\text{ g}$",
      "$74{,}0\\text{ g}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Massa zat cair yang ditampung dalam wadah dihitung melalui selisih massa wadah berisi cairan dengan massa wadah kosong: $m_{\\text{cairan}} = m_{\\text{total}} - m_{\\text{wadah kosong}}$.",
      "steps": "1) Massa gelas kimia kosong: $m_1 = 58{,}5\\text{ g}$.<br>2) Massa gelas kimia + zat cair: $m_2 = 142{,}5\\text{ g}$.<br>3) Massa zat cair murni:<br>$$m_{\\text{cairan}} = m_2 - m_1 = 142{,}5\\text{ g} - 58{,}5\\text{ g} = 84{,}0\\text{ g}$$.",
      "pitfalls": "Kesalahan aritmatika pengurangan atau salah menjumlahkan kedua massa ($142{,}5 + 58{,}5 = 201{,}0\\text{ g}$, opsi B) menjadi distraktor utama."
    },
    "subTopicSlug": "neraca-tiga-lengan",
    "bab": "Kinematika",
    "subBab": "Neraca Tiga Lengan",
    "subTopic": "Neraca Tiga Lengan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-ukur-neraca-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Neraca Tiga Lengan",
    "difficulty": "sedang",
    "statement": "Pada neraca Ohaus presisi empat lengan (tipe centigram 311), balok skala terdiri atas: lengan pertama ($0 - 200\\text{ g}$ per $100\\text{ g}$), lengan kedua ($0 - 100\\text{ g}$ per $10\\text{ g}$), lengan ketiga ($0 - 10\\text{ g}$ per $1\\text{ g}$), dan lengan keempat beranting geser halus ($0 - 1{,}00\\text{ g}$ dengan skala terkecil $0{,}01\\text{ g}$). Pada suatu penimbangan cuplikan mineral, anting lengan pertama di angka $100\\text{ g}$, lengan kedua di angka $30\\text{ g}$, lengan ketiga di angka $5\\text{ g}$, dan lengan keempat menunjukkan angka $0{,}47\\text{ g}$. Pelaporan hasil pengukuran massa mineral tersebut beserta ketidakpastian mutlaknya $(\\Delta m = \\frac{1}{2} \\times \\text{skala terkecil})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PEMBACAAN NERACA OHAUS PRESISI EMPAT LENGAN",
    "options": [
      "$(135{,}470 \\pm 0{,}005)\\text{ g}$",
      "$(135{,}470 \\pm 0{,}010)\\text{ g}$",
      "$(135{,}47 \\pm 0{,}05)\\text{ g}$",
      "$(135{,}047 \\pm 0{,}005)\\text{ g}$",
      "$(135{,}470 \\pm 0{,}001)\\text{ g}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada neraca presisi empat lengan berketelitian centigram ($0{,}01\\text{ g}$), massa total dihitung dengan menjumlahkan keempat lengan: $m = m_1 + m_2 + m_3 + m_4$. Ketidakpastian mutlak pengukuran tunggal adalah $\\Delta m = \\frac{1}{2} \\times \\text{skala terkecil} = \\frac{1}{2} \\times 0{,}01\\text{ g} = 0{,}005\\text{ g}$.",
      "steps": "1) Menjumlahkan keempat skala lengan:<br>$$m = 100\\text{ g} + 30\\text{ g} + 5\\text{ g} + 0{,}47\\text{ g} = 135{,}47\\text{ g} = 135{,}470\\text{ g}$$<br>2) Menghitung ketidakpastian mutlak ($\\Delta m$):<br>$$\\Delta m = \\frac{1}{2} \\times 0{,}01\\text{ g} = 0{,}005\\text{ g}$$<br>3) Format penulisan hasil pengukuran baku: $(m \\pm \\Delta m) = (135{,}470 \\pm 0{,}005)\\text{ g}$.",
      "pitfalls": "Banyak siswa mengabaikan ketelitian centigram ($0{,}01\\text{ g}$) dan menganggap ketelitiannya sama dengan neraca tiga lengan biasa ($0{,}1\\text{ g}$), sehingga salah memilih $\\pm 0{,}05\\text{ g}$ (opsi C)."
    },
    "subTopicSlug": "neraca-tiga-lengan",
    "bab": "Kinematika",
    "subBab": "Neraca Tiga Lengan",
    "subTopic": "Neraca Tiga Lengan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-ukur-neraca-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Neraca Tiga Lengan",
    "difficulty": "sedang",
    "statement": "Sebuah bongkahan batu padat tak beraturan ditimbang massanya menggunakan neraca tiga lengan dan diperoleh pembacaan: anting ratusan pada angka $100\\text{ g}$, anting puluhan pada angka $30\\text{ g}$, dan anting satuan pada angka $4{,}0\\text{ g}$. Kemudian batu tersebut dimasukkan ke dalam gelas ukur yang telah berisi air dengan volume awal $V_1 = 50\\text{ mL}$. Permukaan air dalam gelas ukur naik menunjukkan volume akhir $V_2 = 70\\text{ mL}$. Massa jenis bongkahan batu tersebut dalam satuan $\\text{kg/m}^3$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENENTUAN MASSA JENIS BATU DENGAN NERACA OHAUS DAN GELAS UKUR",
    "options": [
      "$6700\\text{ kg/m}^3$",
      "$6{,}7\\text{ kg/m}^3$",
      "$1340\\text{ kg/m}^3$",
      "$1914\\text{ kg/m}^3$",
      "$2680\\text{ kg/m}^3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Massa jenis benda padat dirumuskan sebagai $\\rho = \\frac{m}{V}$. Volume benda tak beraturan ditentukan melalui metode pemindahan zat cair: $V = V_2 - V_1$. Konversi satuan massa jenis: $1\\text{ g/cm}^3 = 1000\\text{ kg/m}^3$.",
      "steps": "1) Menghitung massa batu dari neraca Ohaus:<br>$$m = 100\\text{ g} + 30\\text{ g} + 4{,}0\\text{ g} = 134{,}0\\text{ g}$$<br>2) Menghitung volume batu dari selisih gelas ukur:<br>$$V = V_2 - V_1 = 70\\text{ mL} - 50\\text{ mL} = 20\\text{ mL} = 20\\text{ cm}^3$$<br>3) Menghitung massa jenis dalam $\\text{g/cm}^3$:<br>$$\\rho = \\frac{134{,}0\\text{ g}}{20\\text{ cm}^3} = 6{,}7\\text{ g/cm}^3$$<br>4) Mengonversi ke satuan $\\text{kg/m}^3$:<br>$$\\rho = 6{,}7 \\times 1000\\text{ kg/m}^3 = 6700\\text{ kg/m}^3$$.",
      "pitfalls": "Lupa mengalikan 1000 saat mengubah dari $\\text{g/cm}^3$ ke $\\text{kg/m}^3$ (opsi B), atau menggunakan volume total $70\\text{ mL}$ sebagai pembagi alih-alih selisih volume."
    },
    "subTopicSlug": "neraca-tiga-lengan",
    "bab": "Kinematika",
    "subBab": "Neraca Tiga Lengan",
    "subTopic": "Neraca Tiga Lengan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-ukur-neraca-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Neraca Tiga Lengan",
    "difficulty": "sedang",
    "statement": "Sebuah neraca geser laboratorium bekerja berdasarkan prinsip kesetimbangan momen gaya (torsi). Piringan tempat meletakkan benda tergantung pada lengan kiri pada jarak tetap $L_1 = 5{,}0\\text{ cm}$ dari titik tumpu utama. Di sebelah kanan titik tumpu terdapat lengan berskala panjang dengan anting geser bermassa $m_a = 50\\text{ g}$. Jika pada saat menimbang beban piringan neraca dalam keadaan seimbang mendatar sempurna, anting geser berada pada jarak $L_2 = 24{,}0\\text{ cm}$ dari titik tumpu, maka massa beban di atas piringan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "KESETIMBANGAN MOMEN GAYA PADA LENGAN NERACA GESER",
    "options": [
      "$240\\text{ g}$",
      "$120\\text{ g}$",
      "$480\\text{ g}$",
      "$100\\text{ g}$",
      "$60\\text{ g}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Syarat kesetimbangan rotasi adalah jumlah momen gaya terhadap titik tumpu sama dengan nol: $\\sum \\tau = 0$. Maka torsi searah jarum jam oleh anting geser sama dengan torsi berlawanan jarum jam oleh beban piringan: $m_b \\cdot g \\cdot L_1 = m_a \\cdot g \\cdot L_2$.",
      "steps": "1) Menuliskan persamaan kesetimbangan torsi:<br>$$\\tau_{\\text{beban}} = \\tau_{\\text{anting}}$$<br>$$(m_b \\cdot g) \\cdot L_1 = (m_a \\cdot g) \\cdot L_2$$<br>2) Mengeliminasi percepatan gravitasi $g$:<br>$$m_b \\cdot L_1 = m_a \\cdot L_2$$<br>3) Menghitung massa beban ($m_b$):<br>$$m_b = \\frac{m_a \\cdot L_2}{L_1} = \\frac{50\\text{ g} \\times 24{,}0\\text{ cm}}{5{,}0\\text{ cm}} = 50 \\times 4{,}8 = 240\\text{ g}$$.",
      "pitfalls": "Siswa sering membalik perbandingan lengan ($m_b = \\frac{50 \\times 5}{24} \\approx 10{,}4\\text{ g}$) atau mengalikan lengan tanpa membagi jarak titik tumpu piringan."
    },
    "subTopicSlug": "neraca-tiga-lengan",
    "bab": "Kinematika",
    "subBab": "Neraca Tiga Lengan",
    "subTopic": "Neraca Tiga Lengan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-ukur-neraca-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Neraca Tiga Lengan",
    "difficulty": "sedang",
    "statement": "Sebelum digunakan, jarum penunjuk neraca Ohaus tiga lengan tanpa beban tidak berada tepat pada garis acuan nol, melainkan berada 2 skala di bawah garis nol (setara dengan nilai kesalahan nol sebesar $-0{,}2\\text{ g}$). Tanpa mengalibrasi ulang sekrup tara, seorang siswa langsung meletakkan serbuk kimia di piringan dan menggeser anting-anting neraca hingga jarum penunjuk segaris tepat dengan garis acuan nol statif. Nilai pembacaan anting geser menunjukkan $45{,}6\\text{ g}$. Massa serbuk kimia yang sebenarnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "KOREKSI KESALAHAN NOL SISTEMATIK PADA NERACA OHAUS",
    "options": [
      "$45{,}8\\text{ g}$",
      "$45{,}4\\text{ g}$",
      "$45{,}6\\text{ g}$",
      "$46{,}0\\text{ g}$",
      "$45{,}2\\text{ g}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kesalahan nol sistematik pada penimbangan: jika posisi awal neraca tanpa beban berada di bawah nol ($Z = -0{,}2\\text{ g}$), maka piringan membutuhkan gaya beban ekstra sebesar $0{,}2\\text{ g}$ agar sistem mencapai kesetimbangan nol. Massa sebenarnya dirumuskan: $m_{\\text{sebenarnya}} = m_{\\text{terbaca}} - Z$.",
      "steps": "1) Menentukan nilai kesalahan titik nol awal:<br>$$Z = -0{,}2\\text{ g}$$<br>2) Menentukan nilai massa yang terbaca pada skala:<br>$$m_{\\text{terbaca}} = 45{,}6\\text{ g}$$<br>3) Mengoreksi massa sebenarnya serbuk kimia:<br>$$m_{\\text{sebenarnya}} = m_{\\text{terbaca}} - Z = 45{,}6\\text{ g} - (-0{,}2\\text{ g}) = 45{,}6\\text{ g} + 0{,}2\\text{ g} = 45{,}8\\text{ g}$$.",
      "pitfalls": "Jebakan paling sering adalah mengurangkan nilai kesalahan nol secara langsung ($45{,}6 - 0{,}2 = 45{,}4\\text{ g}$, opsi B) karena tidak menyadari tanda minus dari kesalahan nol negatif ($m - (-Z) = m + Z$)."
    },
    "subTopicSlug": "neraca-tiga-lengan",
    "bab": "Kinematika",
    "subBab": "Neraca Tiga Lengan",
    "subTopic": "Neraca Tiga Lengan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-ukur-neraca-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Neraca Tiga Lengan",
    "difficulty": "sedang",
    "statement": "Seorang siswa membuat larutan garam dengan menimbang kristal $\\text{NaCl}$ murni menggunakan neraca tiga lengan berketelitian $0{,}1\\text{ g}$ (ketidakpastian mutlak $\\Delta m = 0{,}05\\text{ g}$) dan diperoleh massa $m = 25{,}0\\text{ g}$. Kristal tersebut dilarutkan ke dalam labu ukur bervolume $V = 500\\text{ mL}$ (ketidakpastian mutlak $\\Delta V = 1{,}0\\text{ mL}$). Berdasarkan aturan perambatan ketidakpastian pengukuran, persentase ketidakpastian relatif dari konsentrasi massa larutan $(\\frac{\\Delta C}{C} \\times 100\\%)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PROPAGASI KETIDAKPASTIAN PADA PEMBUATAN LARUTAN KIMIA FISIKA",
    "options": [
      "$0{,}40\\%$",
      "$0{,}20\\%$",
      "$0{,}25\\%$",
      "$0{,}60\\%$",
      "$0{,}80\\%$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Konsentrasi massa larutan dirumuskan dengan $C = \\frac{m}{V}$. Menurut teori propagasi ketidakpastian untuk operasi pembagian, ketidakpastian relatif total adalah penjumlahan dari ketidakpastian relatif massa dan ketidakpastian relatif volume: $\\frac{\\Delta C}{C} = \\frac{\\Delta m}{m} + \\frac{\\Delta V}{V}$.",
      "steps": "1) Menghitung ketidakpastian relatif massa garam ($\\frac{\\Delta m}{m}$):<br>$$\\frac{\\Delta m}{m} = \\frac{0{,}05\\text{ g}}{25{,}0\\text{ g}} = 0{,}002 = 0{,}20\\%$$<br>2) Menghitung ketidakpastian relatif volume larutan ($\\frac{\\Delta V}{V}$):<br>$$\\frac{\\Delta V}{V} = \\frac{1{,}0\\text{ mL}}{500\\text{ mL}} = 0{,}002 = 0{,}20\\%$$<br>3) Menghitung ketidakpastian relatif konsentrasi total:<br>$$\\frac{\\Delta C}{C} = \\frac{\\Delta m}{m} + \\frac{\\Delta V}{V} = 0{,}20\\% + 0{,}20\\% = 0{,}40\\%$$.",
      "pitfalls": "Banyak siswa hanya menghitung ketidakpastian massa saja ($0{,}20\\%$, opsi B) atau ketidakpastian volume saja, tanpa menggabungkan kedua komponen perambatan kesalahan pengukuran."
    },
    "subTopicSlug": "neraca-tiga-lengan",
    "bab": "Kinematika",
    "subBab": "Neraca Tiga Lengan",
    "subTopic": "Neraca Tiga Lengan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "sup-fis-kin-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Pembacaan Neraca Tiga Lengan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dalam praktikum fisika dasar, penimbangan massa suatu sampel mineral menggunakan neraca tiga lengan Ohaus menunjukkan posisi anting geser sebagai berikut:<br>• Lengan belakang (skala ratusan): $300\\text{ gram}$<br>• Lengan tengah (skala puluhan): $40\\text{ gram}$<br>• Lengan depan (skala satuan & persepuluhan): $5{,}6\\text{ gram}$<br>Massa sampel mineral tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$345{,}6\\text{ gram}$",
      "$340{,}56\\text{ gram}$",
      "$305{,}6\\text{ gram}$",
      "$354{,}6\\text{ gram}$",
      "$395{,}6\\text{ gram}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Prinsip Kerja Neraca Tiga Lengan Ohaus:</strong><br>Massa benda merupakan hasil penjumlahan langsung dari penunjukan ketiga lengan penyeimbang: $M = M_{\\text{ratusan}} + M_{\\text{puluhan}} + M_{\\text{satuan/desimal}}$.</div>",
      "steps": "<ol><li>Massa lengan belakang: $300\\text{ g}$.</li><li>Massa lengan tengah: $40\\text{ g}$.</li><li>Massa lengan depan: $5{,}6\\text{ g}$.</li><li>Massa total: $M = 300 + 40 + 5{,}6 = 345{,}6\\text{ gram}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Tertukar antara posisi skala puluhan dan ratusan, atau salah membaca nilai skala nonius pada lengan depan.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Neraca Tiga Lengan",
    "subTopic": "Neraca Tiga Lengan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-ukur",
    "subTopicSlug": "neraca-tiga-lengan"
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
