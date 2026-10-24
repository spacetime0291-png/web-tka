/**
 * Batch Task: TASK_fis-kin-ukur-neraca_EASY
 * SubTopic: Neraca Tiga Lengan (fis-kin-ukur-neraca)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
