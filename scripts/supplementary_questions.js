/**
 * Supplementary Question Bank to guarantee 100% syllabus coverage.
 * Authors high-rigor, pedagogical questions for every indicator in the TKA syllabus.
 */

const supplementaryQuestions = [
  // --------------------------------------------------------------------------
  // FISIKA - KINEMATIKA (fis-kin-1: Pengukuran)
  // --------------------------------------------------------------------------
  {
    id: "sup-fis-kin-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subTopicId: "fis-kin-1",
    category: "Pembacaan Mikrometer Sekrup",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Seorang siswa mengukur diameter sebuah kawat tembaga menggunakan mikrometer sekrup. Skala utama menunjukkan angka $4{,}5\\text{ mm}$ dan garis skala nonius (putar) ke-38 berimpit tepat dengan garis mendatar skala utama. Jika ketelitian alat adalah $0{,}01\\text{ mm}$, maka penulisan hasil pengukuran diameter kawat beserta nilai ketidakpastian mutlaknya $(\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil})$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(4{,}88 \\pm 0{,}005)\\text{ mm}$",
      "$(4{,}88 \\pm 0{,}01)\\text{ mm}$",
      "$(4{,}38 \\pm 0{,}005)\\text{ mm}$",
      "$(4{,}80 \\pm 0{,}01)\\text{ mm}$",
      "$(5{,}38 \\pm 0{,}005)\\text{ mm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Pembacaan Mikrometer Sekrup:</strong><br>• $x = \\text{Skala Utama} + (\\text{Skala Nonius} \\times 0{,}01\\text{ mm})$<br>• Nilai ketidakpastian mutlak pengukuran tunggal: $\\Delta x = \\frac{1}{2} \\times 0{,}01\\text{ mm} = 0{,}005\\text{ mm}$.</div>`,
      steps: `<ol><li>Skala utama terlihat: $4{,}5\\text{ mm}$.</li><li>Skala putar nonius: $38 \\times 0{,}01\\text{ mm} = 0{,}38\\text{ mm}$.</li><li>Hasil pengukuran: $x = 4{,}5 + 0{,}38 = 4{,}88\\text{ mm}$.</li><li>Format pelaporan baku: $(4{,}88 \\pm 0{,}005)\\text{ mm}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Siswa sering lupa menambahkan garis setengah milimeter ($0{,}5\\text{ mm}$) pada skala utama bawah, sehingga keliru membaca $4{,}38\\text{ mm}$.</div>`
    }
  },
  {
    id: "sup-fis-kin-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subTopicId: "fis-kin-1",
    category: "Pembacaan Neraca Tiga Lengan",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Dalam praktikum fisika dasar, penimbangan massa suatu sampel mineral menggunakan neraca tiga lengan Ohaus menunjukkan posisi anting geser sebagai berikut:<br>• Lengan belakang (skala ratusan): $300\\text{ gram}$<br>• Lengan tengah (skala puluhan): $40\\text{ gram}$<br>• Lengan depan (skala satuan & persepuluhan): $5{,}6\\text{ gram}$<br>Massa sampel mineral tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$345{,}6\\text{ gram}$",
      "$340{,}56\\text{ gram}$",
      "$305{,}6\\text{ gram}$",
      "$354{,}6\\text{ gram}$",
      "$395{,}6\\text{ gram}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Prinsip Kerja Neraca Tiga Lengan Ohaus:</strong><br>Massa benda merupakan hasil penjumlahan langsung dari penunjukan ketiga lengan penyeimbang: $M = M_{\\text{ratusan}} + M_{\\text{puluhan}} + M_{\\text{satuan/desimal}}$.</div>`,
      steps: `<ol><li>Massa lengan belakang: $300\\text{ g}$.</li><li>Massa lengan tengah: $40\\text{ g}$.</li><li>Massa lengan depan: $5{,}6\\text{ g}$.</li><li>Massa total: $M = 300 + 40 + 5{,}6 = 345{,}6\\text{ gram}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Tertukar antara posisi skala puluhan dan ratusan, atau salah membaca nilai skala nonius pada lengan depan.</div>`
    }
  },
  {
    id: "sup-fis-kin-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subTopicId: "fis-kin-1",
    category: "Kaidah Angka Penting Penjumlahan",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Tiga buah paket ekspedisi ditimbang secara terpisah menghasilkan massa berturut-turut $m_1 = 12{,}34\\text{ kg}$, $m_2 = 5{,}6\\text{ kg}$, dan $m_3 = 0{,}123\\text{ kg}$. Berdasarkan kaidah pelaporan operasi angka penting, massa total ketiga paket tersebut harus dituliskan sebagai ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$18{,}1\\text{ kg}$",
      "$18{,}06\\text{ kg}$",
      "$18{,}063\\text{ kg}$",
      "$18{,}2\\text{ kg}$",
      "$18\\text{ kg}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Kaidah Angka Penting Penjumlahan & Pengurangan:</strong><br>Hasil penjumlahan atau pengurangan hanya boleh mengandung <strong>satu angka taksiran</strong>, yang ditentukan oleh suku dengan angka di belakang koma paling sedikit (paling tidak teliti).</div>`,
      steps: `<ol><li>$12{,}34$ memiliki 2 angka di belakang koma.</li><li>$5{,}6$ memiliki 1 angka di belakang koma (pembatas ketelitian).</li><li>$0{,}123$ memiliki 3 angka di belakang koma.</li><li>Jumlah aljabar murni: $12{,}34 + 5{,}6 + 0{,}123 = 18{,}063\\text{ kg}$.</li><li>Pembulatan ke 1 angka di belakang koma: karena setelah angka 0 adalah 6 ($>5$), dibulatkan ke atas menjadi $18{,}1\\text{ kg}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Menggunakan aturan perkalian (jumlah AP paling sedikit) bukannya aturan penjumlahan (angka di belakang koma paling sedikit).</div>`
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KINEMATIKA (fis-kin-2: Gerak Lurus)
  // --------------------------------------------------------------------------
  {
    id: "sup-fis-kin-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subTopicId: "fis-kin-2",
    category: "Jarak dan Perpindahan",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Seorang pelari bergerak lurus ke arah timur sejauh $80\\text{ meter}$, kemudian berbelok tepat ke arah utara dan berlari sejauh $60\\text{ meter}$. Nilai jarak tempuh total dan besar perpindahan yang dialami pelari tersebut berturut-turut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$140\\text{ meter}$ dan $100\\text{ meter}$",
      "$100\\text{ meter}$ dan $140\\text{ meter}$",
      "$140\\text{ meter}$ dan $20\\text{ meter}$",
      "$100\\text{ meter}$ dan $100\\text{ meter}$",
      "$140\\text{ meter}$ dan $140\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Jarak (Skalar) vs Perpindahan (Vektor):</strong><br>• Jarak ($s$): total panjang lintasan yang ditempuh tanpa memperhatikan arah.<br>• Perpindahan ($\\Delta \\vec{r}$): perubahan posisi terpendek dari titik awal ke titik akhir (vektor).</div>`,
      steps: `<ol><li>Jarak total: $s = 80 + 60 = 140\\text{ meter}$.</li><li>Perpindahan (resultan vektor siku-siku): $|\\Delta \\vec{r}| = \\sqrt{80^2 + 60^2} = \\sqrt{6400 + 3600} = \\sqrt{10000} = 100\\text{ meter}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Menyamakan nilai perpindahan dengan jarak total lintasan gerak.</div>`
    }
  },
  {
    id: "sup-fis-kin-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subTopicId: "fis-kin-2",
    category: "Analisis Grafik Kecepatan-Waktu (v-t)",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah partikel bergerak lurus dengan grafik kecepatan ($v$) terhadap waktu ($t$) berbentuk trapesium: bergerak dari keadaan diam hingga mencapai $v = 20\\text{ m/s}$ dalam waktu $4\\text{ s}$, kemudian melaju dengan kecepatan konstan selama $6\\text{ s}$, lalu direm beraturan hingga berhenti dalam selang waktu $2\\text{ s}$. Jarak total yang ditempuh partikel selama $12\\text{ detik}$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$180\\text{ meter}$",
      "$200\\text{ meter}$",
      "$220\\text{ meter}$",
      "$240\\text{ meter}$",
      "$160\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Geometri Luas Kurva Grafik $v-t$:</strong><br>Jarak tempuh total partikel pada gerak satu dimensi sama dengan luas daerah di bawah kurva grafik kecepatan terhadap waktu ($s = \\int v\\,dt = \\text{Luas Bidang}$).</div>`,
      steps: `<ol><li>Bangun di bawah kurva berbentuk trapesium dengan alas bawah $a = 12\\text{ s}$ (dari $t = 0$ hingga $t = 12\\text{ s}$).</li><li>Sisi sejajar atas: selang saat kecepatan konstan $b = 6\\text{ s}$ (dari $t = 4$ hingga $t = 10\\text{ s}$).</li><li>Tinggi trapesium: $h = v_{\\max} = 20\\text{ m/s}$.</li><li>Luas trapesium: $s = \\frac{a + b}{2} \\times h = \\frac{12 + 6}{2} \\times 20 = 9 \\times 20 = 180\\text{ meter}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Menghitung sisi sejajar atas $10\\text{ s}$ bukannya durasi kecepatan konstan ($10 - 4 = 6\\text{ s}$).</div>`
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - DINAMIKA (fis-din-2: Momentum dan Impuls)
  // --------------------------------------------------------------------------
  {
    id: "sup-fis-din-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-2",
    category: "Teorema Impuls-Momentum",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah bola kasti bermassa $0{,}2\\text{ kg}$ dilempar mendatar ke arah kiri dengan kelajuan $10\\text{ m/s}$. Seorang pemukul memukul bola tersebut sehingga berbalik arah melaju ke kanan dengan kelajuan $15\\text{ m/s}$. Jika waktu kontak pemukul dan bola adalah $\\Delta t = 0{,}02\\text{ detik}$, besar gaya kontak rata-rata yang diberikan pemukul pada bola adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$250\\text{ N}$",
      "$50\\text{ N}$",
      "$100\\text{ N}$",
      "$150\\text{ N}$",
      "$200\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Teorema Impuls-Momentum (Vektor):</strong><br>Impuls gaya sama dengan perubahan momentum partikel: $\\vec{I} = \\vec{F} \\cdot \\Delta t = \\Delta \\vec{p} = m(\\vec{v}_2 - \\vec{v}_1)$. Perhatikan tanda positif dan negatif arah vektor kecepatan!</div>`,
      steps: `<ol><li>Tetapkan arah kanan sebagai positif ($+$) dan arah kiri sebagai negatif ($-$).</li><li>$v_1 = -10\\text{ m/s}$, $v_2 = +15\\text{ m/s}$.</li><li>Perubahan momentum: $\\Delta p = m(v_2 - v_1) = 0{,}2 \\cdot (15 - (-10)) = 0{,}2 \\cdot 25 = 5\\text{ N}\\cdot\\text{s}$.</li><li>Gaya rata-rata: $F = \\frac{\\Delta p}{\\Delta t} = \\frac{5}{0{,}02} = 250\\text{ N}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Mengurangkan kecepatan tanpa memperhatikan tanda arah: $15 - 10 = 5\\text{ m/s}$, sehingga menghasilkan $F = 50\\text{ N}$ yang salah fatal.</div>`
    }
  },
  {
    id: "sup-fis-din-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-2",
    category: "Tumbukan Tidak Lenting Sama Sekali",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebutir peluru bermassa $20\\text{ gram}$ meluncur horizontal dengan kecepatan $300\\text{ m/s}$ menumbuk balok kayu bermassa $980\\text{ gram}$ yang diam di atas lantai licin. Peluru bersarang di dalam balok dan keduanya meluncur bersama. Kecepatan balok beserta peluru setelah tumbukan adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6\\text{ m/s}$",
      "$3\\text{ m/s}$",
      "$9\\text{ m/s}$",
      "$12\\text{ m/s}$",
      "$15\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hukum Kekekalan Momentum Linear:</strong><br>Pada tumbukan tidak lenting sama sekali ($e = 0$), kedua benda bergabung menjadi satu massa dengan kecepatan akhir bersama ($v'$): $m_1 v_1 + m_2 v_2 = (m_1 + m_2) v'$.</div>`,
      steps: `<ol><li>Konversi satuan ke kg: $m_p = 0{,}02\\text{ kg}$, $m_b = 0{,}98\\text{ kg}$.</li><li>Momentum sebelum: $p = 0{,}02 \\times 300 + 0 = 6\\text{ kg}\\cdot\\text{m/s}$.</li><li>Massa gabungan: $M = 0{,}02 + 0{,}98 = 1{,}0\\text{ kg}$.</li><li>Kecepatan bersama: $v' = \\frac{p}{M} = \\frac{6}{1{,}0} = 6\\text{ m/s}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Lupa mengonversi satuan gram ke kilogram atau salah menjumlahkan massa total peluru dan balok.</div>`
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - FLUIDA (fis-flu-1: Fluida Statis)
  // --------------------------------------------------------------------------
  {
    id: "sup-fis-flu-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subTopicId: "fis-flu-1",
    category: "Hukum Pascal Sistem Hidrolik",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah dongkrak hidrolik memiliki dua pengisap berbentuk silinder dengan luas penampang pengisap kecil $A_1 = 25\\text{ cm}^2$ dan pengisap besar $A_2 = 500\\text{ cm}^2$. Jika pada pengisap besar diletakkan mobil dengan berat $10.000\\text{ N}$, maka gaya tekan minimum yang harus diberikan pada pengisap kecil agar mobil terangkat seimbang adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$500\\text{ N}$",
      "$250\\text{ N}$",
      "$200\\text{ N}$",
      "$100\\text{ N}$",
      "$50\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hukum Pascal:</strong><br>Tekanan yang diberikan pada zat cair dalam ruang tertutup diteruskan sama besar ke segala arah: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_1 = \\frac{A_1}{A_2} F_2$.</div>`,
      steps: `<ol><li>Rasio penampang: $\\frac{A_1}{A_2} = \\frac{25}{500} = \\frac{1}{20}$.</li><li>Gaya input pada pengisap kecil: $F_1 = \\frac{1}{20} \\times 10.000 = 500\\text{ N}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Terbalik mengalikan rasio penampang sehingga menghasilkan nilai gaya yang tidak masuk akal ($200.000\\text{ N}$).</div>`
    }
  },
  {
    id: "sup-fis-flu-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subTopicId: "fis-flu-1",
    category: "Tekanan Mutlak Fluida",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Seorang penyelam berada di kedalaman $20\\text{ meter}$ di bawah permukaan danau air tawar (massa jenis air $\\rho = 1000\\text{ kg/m}^3$, percepatan gravitasi $g = 10\\text{ m/s}^2$). Jika tekanan atmosfer di atas permukaan danau adalah $P_{\\text{atm}} = 1{,}01 \\times 10^5\\text{ Pa}$, maka tekanan mutlak yang dialami penyelam tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3{,}01 \\times 10^5\\text{ Pa}$",
      "$2{,}00 \\times 10^5\\text{ Pa}$",
      "$2{,}01 \\times 10^5\\text{ Pa}$",
      "$1{,}21 \\times 10^5\\text{ Pa}$",
      "$3{,}21 \\times 10^5\\text{ Pa}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Tekanan Mutlak (Total):</strong><br>Tekanan total pada kedalaman $h$ merupakan jumlahan dari tekanan atmosfer luar dan tekanan hidrostatis zat cair: $P_{\\text{mutlak}} = P_{\\text{atm}} + \\rho g h$.</div>`,
      steps: `<ol><li>Tekanan hidrostatis: $P_h = \\rho g h = 1000 \\times 10 \\times 20 = 200.000\\text{ Pa} = 2{,}00 \\times 10^5\\text{ Pa}$.</li><li>Tekanan atmosfer: $P_{\\text{atm}} = 1{,}01 \\times 10^5\\text{ Pa}$.</li><li>Tekanan mutlak: $P = P_{\\text{atm}} + P_h = 1{,}01 \\times 10^5 + 2{,}00 \\times 10^5 = 3{,}01 \\times 10^5\\text{ Pa}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Hanya menghitung tekanan hidrostatis murni ($2{,}00 \\times 10^5\\text{ Pa}$) dan mengabaikan tekanan atmosfer di permukaan danau.</div>`
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - FLUIDA (fis-flu-2: Fluida Dinamis)
  // --------------------------------------------------------------------------
  {
    id: "sup-fis-flu-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subTopicId: "fis-flu-2",
    category: "Penerapan Persamaan Bernoulli",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Air mengalir secara horizontal melalui pipa venturimeter tanpa manometer. Luas penampang pipa utama $A_1 = 20\\text{ cm}^2$ dan luas penampang leher $A_2 = 10\\text{ cm}^2$. Perbedaan ketinggian kolom zat cair pada kedua tabung vertikal pengukur adalah $h = 15\\text{ cm}$ ($g = 10\\text{ m/s}^2$). Kelajuan aliran air pada penampang utama ($v_1$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1\\text{ m/s}$",
      "$2\\text{ m/s}$",
      "$1{,}5\\text{ m/s}$",
      "$3\\text{ m/s}$",
      "$0{,}5\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Venturimeter Tanpa Manometer:</strong><br>Kombinasi Persamaan Kontinuitas dan Persamaan Bernoulli menghasilkan kelajuan masuk:<br>$v_1 = \\sqrt{\\frac{2 g h}{\\left(\\frac{A_1}{A_2}\\right)^2 - 1}}$.</div>`,
      steps: `<ol><li>Rasio penampang: $\\frac{A_1}{A_2} = \\frac{20}{10} = 2 \\implies \\left(\\frac{A_1}{A_2}\\right)^2 = 4$.</li><li>Pembilang formula: $2 g h = 2 \\times 10 \\times 0{,}15 = 3$.</li><li>Penyebut formula: $4 - 1 = 3$.</li><li>Kelajuan: $v_1 = \\sqrt{\\frac{3}{3}} = 1\\text{ m/s}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Lupa mengonversi beda tinggi $h = 15\\text{ cm}$ ke meter ($0{,}15\\text{ m}$).</div>`
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - GELOMBANG (fis-gel-1: Gelombang Bunyi)
  // --------------------------------------------------------------------------
  {
    id: "sup-fis-gel-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Frekuensi Pipa Organa Terbuka",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah pipa organa terbuka memiliki panjang $60\\text{ cm}$. Jika cepat rambat bunyi di udara saat itu adalah $340\\text{ m/s}$, maka frekuensi nada atas pertama ($f_1$) yang dihasilkan pipa organa tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$566{,}7\\text{ Hz}$",
      "$283{,}3\\text{ Hz}$",
      "$850\\text{ Hz}$",
      "$1133{,}3\\text{ Hz}$",
      "$425\\text{ Hz}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Resonansi Pipa Organa Terbuka:</strong><br>Frekuensi nada ke-$n$ (dimulai dari $n=0$ nada dasar): $f_n = (n + 1) \\frac{v}{2L}$. Untuk nada atas pertama, $n = 1 \\implies f_1 = \\frac{v}{L}$.</div>`,
      steps: `<ol><li>Panjang pipa: $L = 60\\text{ cm} = 0{,}6\\text{ m}$.</li><li>Nada atas pertama ($n=1$): $f_1 = \\frac{v}{L} = \\frac{340}{0{,}6} \\approx 566{,}67\\text{ Hz}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Terkecoh menghitung nada dasar ($f_0 = \\frac{v}{2L} = 283{,}3\\text{ Hz}$) karena mengira nada atas pertama berindeks $n=0$.</div>`
    }
  },
  {
    id: "sup-fis-gel-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Taraf Intensitas Bunyi Multi Sumber",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Taraf intensitas bunyi sebuah mesin bor listrik pada jarak tertentu adalah $70\\text{ dB}$. Jika terdapat $100$ mesin bor identik yang bekerja serentak pada jarak yang sama, taraf intensitas bunyi total yang terdengar adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$90\\text{ dB}$",
      "$80\\text{ dB}$",
      "$170\\text{ dB}$",
      "$700\\text{ dB}$",
      "$85\\text{ dB}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Taraf Intensitas Multi Sumber Sejenis:</strong><br>Ketika $n$ sumber bunyi identik berbunyi bersamaan, intensitasnya berlipat ganda sebesar $n$, sehingga taraf intensitas totalnya: $TI_n = TI_1 + 10 \\log_{10}(n)$.</div>`,
      steps: `<ol><li>Jumlah sumber bunyi: $n = 100 = 10^2$.</li><li>Kenaikan taraf intensitas: $\\Delta TI = 10 \\log_{10}(100) = 10 \\times 2 = 20\\text{ dB}$.</li><li>Taraf intensitas total: $TI_{\\text{total}} = 70 + 20 = 90\\text{ dB}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Mengalikan langsung nilai dB ($70 \\times 100 = 7000\\text{ dB}$), padahal skala desibel merupakan skala logaritmik bukan linear.</div>`
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - GELOMBANG (fis-gel-2: Gelombang Cahaya)
  // --------------------------------------------------------------------------
  {
    id: "sup-fis-gel-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Pembiasan Cahaya Hukum Snellius",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Seberkas cahaya merambat dari udara ($n_1 = 1$) masuk ke dalam balok kaca yang mempunyai indeks bias $n_2 = 1{,}5$. Jika sudut datang sinar adalah $30^\\circ$, maka nilai sinus sudut bias ($\\sin r$) di dalam balok kaca tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{4}$",
      "$\\frac{1}{4}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hukum Snellius Pembiasan Cahaya:</strong><br>$n_1 \\sin i = n_2 \\sin r$, dengan $i$ sudut datang dan $r$ sudut bias terhadap garis normal.</div>`,
      steps: `<ol><li>$n_1 = 1$, $i = 30^\\circ \\implies \\sin 30^\\circ = 0{,}5 = \\frac{1}{2}$.</li><li>$n_2 = 1{,}5 = \\frac{3}{2}$.</li><li>Persamaan: $1 \\cdot \\frac{1}{2} = \\frac{3}{2} \\cdot \\sin r$.</li><li>$\\sin r = \\frac{1}{2} \\times \\frac{2}{3} = \\frac{1}{3}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Membalik indeks bias medium sehingga menghasilkan $\\sin r = \\frac{3}{4}$.</div>`
    }
  },
  {
    id: "sup-fis-gel-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Pembentukan Bayangan Lensa Cembung",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah benda diletakkan pada jarak $12\\text{ cm}$ di depan sebuah lensa cembung yang memiliki panjang fokus $8\\text{ cm}$. Jarak bayangan dan sifat bayangan yang terbentuk berturut-turut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$24\\text{ cm}$, nyata dan terbalik",
      "$24\\text{ cm}$, maya dan tegak",
      "$16\\text{ cm}$, nyata dan terbalik",
      "$18\\text{ cm}$, nyata dan tegak",
      "$4{,}8\\text{ cm}$, maya dan tegak"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Persamaan Lensa Tipis Gauss:</strong><br>$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}$. Tanda $s' > 0$ menandakan bayangan nyata di belakang lensa (selalu terbalik).</div>`,
      steps: `<ol><li>$f = +8\\text{ cm}$, $s = +12\\text{ cm}$.</li><li>$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s} = \\frac{1}{8} - \\frac{1}{12} = \\frac{3 - 2}{24} = \\frac{1}{24}$.</li><li>$s' = +24\\text{ cm}$. Karena bertanda positif, bayangannya bersifat <strong>nyata dan terbalik</strong>.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Menganggap bayangan pada cermin dan lensa memiliki aturan tanda sama untuk letak maya/nyata.</div>`
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KALOR & TERMODINAMIKA (fis-ter-1: Kalor dan Perpindahannya)
  // --------------------------------------------------------------------------
  {
    id: "sup-fis-ter-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Pemuaian Panjang Benda Padat",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebatang rel baja memiliki panjang awal $10\\text{ meter}$ pada suhu $20^\\circ\\text{C}$. Koefisien muai panjang baja tersebut adalah $\\alpha = 1{,}2 \\times 10^{-5}/^\\circ\\text{C}$. Jika pada siang hari terik suhu rel meningkat menjadi $50^\\circ\\text{C}$, maka pertambahan panjang rel baja tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3{,}6\\text{ mm}$",
      "$1{,}8\\text{ mm}$",
      "$2{,}4\\text{ mm}$",
      "$4{,}8\\text{ mm}$",
      "$0{,}36\\text{ mm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Pemuaian Panjang Benda Padat:</strong><br>Pertambahan panjang zat padat sebanding dengan panjang mula-mula, koefisien muai panjang, dan kenaikan suhu: $\\Delta L = L_0 \\alpha \\Delta T$.</div>`,
      steps: `<ol><li>Panjang mula-mula: $L_0 = 10\\text{ m}$.</li><li>Perubahan suhu: $\\Delta T = 50 - 20 = 30^\\circ\\text{C}$.</li><li>Pertambahan panjang: $\\Delta L = 10 \\times (1{,}2 \\times 10^{-5}) \\times 30 = 3{,}6 \\times 10^{-3}\\text{ m} = 3{,}6\\text{ mm}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Mengalikan dengan suhu akhir $50^\\circ\\text{C}$ tanpa mengurangkan suhu awal $20^\\circ\\text{C}$.</div>`
    }
  },
  {
    id: "sup-fis-ter-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Konduksi Termal Batang Logam",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Dua batang logam $P$ dan $Q$ dengan luas penampang dan panjang yang sama disambungkan ujungnya. Konduktivitas termal logam $P$ adalah dua kali konduktivitas termal logam $Q$ ($k_P = 2k_Q$). Jika ujung bebas logam $P$ bersuhu $90^\\circ\\text{C}$ dan ujung bebas logam $Q$ bersuhu $30^\\circ\\text{C}$, maka suhu sambungan kedua logam pada keadaan tunak (stasioner) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$70^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$65^\\circ\\text{C}$",
      "$75^\\circ\\text{C}$",
      "$50^\\circ\\text{C}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Laju Konduksi Kalor Keadaan Stasioner:</strong><br>Pada sambungan batang, laju aliran kalor melalui batang $P$ sama dengan laju aliran kalor melalui batang $Q$: $H_P = H_Q \\implies k_P A \\frac{\\Delta T_P}{L} = k_Q A \\frac{\\Delta T_Q}{L}$.</div>`,
      steps: `<ol><li>Karena $A$ dan $L$ sama: $k_P (90 - T) = k_Q (T - 30)$.</li><li>Substitusi $k_P = 2k_Q$: $2(90 - T) = T - 30$.</li><li>$180 - 2T = T - 30 \\implies 3T = 210 \\implies T = 70^\\circ\\text{C}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Mengambil rata-rata aritmetika biasa $\\frac{90 + 30}{2} = 60^\\circ\\text{C}$ tanpa memperhitungkan perbedaan nilai konduktivitas kedua bahan.</div>`
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KALOR & TERMODINAMIKA (fis-ter-3: Gas Ideal & fis-ter-4: Termodinamika)
  // --------------------------------------------------------------------------
  {
    id: "sup-fis-ter-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Hukum Boyle-Gay Lussac Ruang Tertutup",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Suatu gas ideal di dalam bejana tertutup awalnya berada pada tekanan $P_1 = 2\\text{ atm}$, volume $V_1 = 4\\text{ liter}$, dan suhu mutlak $T_1 = 300\\text{ K}$. Jika gas dipanaskan hingga suhunya menjadi $T_2 = 450\\text{ K}$ dan volumenya dibiarkan memuai menjadi $V_2 = 6\\text{ liter}$, tekanan gas sekarang ($P_2$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\text{ atm}$",
      "$1{,}5\\text{ atm}$",
      "$2{,}5\\text{ atm}$",
      "$3\\text{ atm}$",
      "$1\\text{ atm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Persamaan Keadaan Boyle-Gay Lussac:</strong><br>Untuk jumlah mol gas tetap pada ruang tertutup: $\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$. Pastikan suhu selalu dalam skala Kelvin mutlak!</div>`,
      steps: `<ol><li>$\\frac{2 \\times 4}{300} = \\frac{P_2 \\times 6}{450}$.</li><li>$\\frac{8}{300} = \\frac{6 P_2}{450} \\implies \\frac{8}{2} = \\frac{6 P_2}{3} = 2 P_2$.</li><li>$4 = 2 P_2 \\implies P_2 = 2\\text{ atm}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Mengabaikan faktor suhu atau lupa bahwa suhu gas ideal wajib bersatuan Kelvin.</div>`
    }
  },
  {
    id: "sup-fis-ter-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Hukum I Termodinamika",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Suatu sistem gas ideal mengalami proses ekspansi dengan menyerap kalor dari lingkungan sebesar $750\\text{ Joule}$. Pada saat yang bersamaan, gas memuai dan melakukan usaha luar ke lingkungan sebesar $450\\text{ Joule}$. Perubahan energi dalam ($\\Delta U$) yang dialami sistem gas tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$+300\\text{ Joule}$",
      "$-300\\text{ Joule}$",
      "$+1200\\text{ Joule}$",
      "$-1200\\text{ Joule}$",
      "$+450\\text{ Joule}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hukum I Termodinamika (Kekekalan Energi):</strong><br>$\\Delta U = Q - W$, dengan konvensi tanda:<br>• $Q > 0$ jika sistem menyerap kalor.<br>• $W > 0$ jika sistem melakukan usaha ke lingkungan.</div>`,
      steps: `<ol><li>Kalor yang diserap: $Q = +750\\text{ J}$.</li><li>Usaha yang dilakukan gas: $W = +450\\text{ J}$.</li><li>Perubahan energi dalam: $\\Delta U = Q - W = 750 - 450 = +300\\text{ Joule}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Tertukar tanda perjanjian usaha $W$ sehingga menjumlahkan $750 + 450 = 1200\\text{ J}$.</div>`
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KELISTRIKAN (fis-lis-1: Listrik Statis & fis-lis-2: Rangkaian Arus Searah)
  // --------------------------------------------------------------------------
  {
    id: "sup-fis-lis-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subTopicId: "fis-lis-1",
    category: "Potensial Listrik & Usaha Muatan",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Usaha luar yang diperlukan untuk memindahkan sebuah muatan uji positif $q = 5\\,\\mu\\text{C}$ dari titik $A$ yang berpotensial listrik $20\\text{ V}$ ke titik $B$ yang berpotensial listrik $80\\text{ V}$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3 \\times 10^{-4}\\text{ Joule}$",
      "$1 \\times 10^{-4}\\text{ Joule}$",
      "$4 \\times 10^{-4}\\text{ Joule}$",
      "$5 \\times 10^{-4}\\text{ Joule}$",
      "$6 \\times 10^{-4}\\text{ Joule}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hubungan Usaha dan Beda Potensial Listrik:</strong><br>Usaha untuk memindahkan muatan $q$ dari potensial $V_A$ ke $V_B$ adalah $W = q \\Delta V = q (V_B - V_A)$.</div>`,
      steps: `<ol><li>Muatan: $q = 5 \\times 10^{-6}\\text{ C}$.</li><li>Beda potensial: $\\Delta V = 80 - 20 = 60\\text{ V}$.</li><li>Usaha: $W = (5 \\times 10^{-6}) \\times 60 = 300 \\times 10^{-6} = 3 \\times 10^{-4}\\text{ Joule}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Mengalikan muatan dengan nilai potensial akhir saja ($5\\,\\mu\\text{C} \\times 80\\text{ V}$).</div>`
    }
  },
  {
    id: "sup-fis-lis-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subTopicId: "fis-lis-2",
    category: "Hukum Ohm & Daya Listrik",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah lampu pijar bertuliskan spesifikasi daya $100\\text{ W} / 220\\text{ V}$. Apabila lampu tersebut dihubungkan ke sumber tegangan jaringan yang turun menjadi $110\\text{ V}$, dan dengan menganggap nilai hambatan kawat lampu konstan, daya disipasi lampu tersebut sekarang adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$25\\text{ W}$",
      "$50\\text{ W}$",
      "$75\\text{ W}$",
      "$12{,}5\\text{ W}$",
      "$100\\text{ W}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Daya Listrik Kuadratik Terhadap Tegangan:</strong><br>$P = \\frac{V^2}{R}$. Karena hambatan filamen lampu $R$ tetap, perbandingan daya listrik adalah kuadrat perbandingan tegangan: $\\frac{P_2}{P_1} = \\left(\\frac{V_2}{V_1}\\right)^2$.</div>`,
      steps: `<ol><li>Rasio tegangan: $\\frac{V_2}{V_1} = \\frac{110}{220} = \\frac{1}{2}$.</li><li>Rasio daya: $\\frac{P_2}{P_1} = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.</li><li>Daya lampu: $P_2 = \\frac{1}{4} \\times 100 = 25\\text{ Watt}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Siswa sering keliru menganggap hubungan linier $P \\propto V$ sehingga menjawab setengahnya ($50\\text{ W}$).</div>`
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA LANJUT - ALJABAR (mtk-alj-1: Matriks, mtk-alj-2: Polinomial, mtk-alj-3: Fungsi)
  // --------------------------------------------------------------------------
  {
    id: "sup-mtk-alj-01",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-alj",
    subTopicId: "mtk-alj-1",
    category: "Invers Matriks Ordo 2x2",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Diberikan matriks $A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}$. Matriks invers $A^{-1}$ dari matriks tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{10}\\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$",
      "$\\frac{1}{10}\\begin{pmatrix} 3 & -2 \\\\ -1 & 4 \\end{pmatrix}$",
      "$\\frac{1}{14}\\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$",
      "$\\frac{1}{10}\\begin{pmatrix} -4 & 2 \\\\ 1 & -3 \\end{pmatrix}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Invers Matriks Ordo $2\\times2$:</strong><br>Untuk $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, inversnya adalah $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$ dengan $\\det(A) = ad - bc \\neq 0$.</div>`,
      steps: `<ol><li>Determinan: $\\det(A) = (3)(4) - (2)(1) = 12 - 2 = 10$.</li><li>Adjoin matriks: tukar elemen diagonal utama dan ubah tanda diagonal samping $\\to \\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$.</li><li>$A^{-1} = \\frac{1}{10} \\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Lupa menukar posisi elemen diagonal utama saat membentuk matriks adjoin.</div>`
    }
  },
  {
    id: "sup-mtk-alj-02",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-alj",
    subTopicId: "mtk-alj-1",
    category: "Determinan Matriks 3x3 Aturan Sarrus",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Nilai determinan dari matriks ordo $3\\times3$ berikut: $M = \\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 3 & 2 \\\\ 0 & -1 & 4 \\end{pmatrix}$ dihitung menggunakan aturan Sarrus adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$24$",
      "$20$",
      "$18$",
      "$28$",
      "$16$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Metode Sarrus Matriks $3\\times3$:</strong><br>Salin dua kolom pertama ke sebelah kanan matriks, jumlahkan hasil kali diagonal utama ke bawah, lalu kurangkan hasil kali diagonal sekunder ke atas.</div>`,
      steps: `<ol><li>Hasil kali diagonal turun: $(2 \\times 3 \\times 4) + (1 \\times 2 \\times 0) + (0 \\times 1 \\times (-1)) = 24 + 0 + 0 = 24$.</li><li>Hasil kali diagonal naik: $(0 \\times 3 \\times 0) + ((-1) \\times 2 \\times 2) + (4 \\times 1 \\times 1) = 0 - 4 + 4 = 0$.</li><li>Determinan: $\\det(M) = 24 - 0 = 24$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Kesalahan tanda minus pada suku $(-1)$ saat melakukan perkalian diagonal sekunder.</div>`
    }
  },
  {
    id: "sup-mtk-alj-03",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-alj",
    subTopicId: "mtk-alj-2",
    category: "Teorema Faktor Polinomial",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Jika suku banyak $P(x) = x^3 - 3x^2 + ax - 4$ habis dibagi oleh $(x - 2)$, maka nilai dari konstanta $a$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4$",
      "$2$",
      "$-2$",
      "$-4$",
      "$6$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Teorema Faktor:</strong><br>Bentuk $(x - k)$ merupakan faktor dari suku banyak $P(x)$ jika dan hanya jika $P(k) = 0$.</div>`,
      steps: `<ol><li>Karena habis dibagi $(x - 2)$, maka $P(2) = 0$.</li><li>Substitusi $x = 2$: $(2)^3 - 3(2)^2 + a(2) - 4 = 0$.</li><li>$8 - 12 + 2a - 4 = 0 \\implies 2a - 8 = 0 \\implies 2a = 8 \\implies a = 4$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Keliru mensubstitusikan nilai $x = -2$ bukannya pembuat nol pembagi $x = 2$.</div>`
    }
  },
  {
    id: "sup-mtk-alj-04",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-alj",
    subTopicId: "mtk-alj-3",
    category: "Domain Fungsi Rasional",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Daerah asal alami (*domain*) dari fungsi rasional $f(x) = \\frac{2x + 5}{x - 3}$ agar terdefinisi pada himpunan bilangan real adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -\\frac{5}{2}\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\ge 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -3\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Domain Fungsi Pecahan Rasional:</strong><br>Pecahan aljabar $\\frac{P(x)}{Q(x)}$ terdefinisi pada bilangan real jika dan hanya jika penyebutnya tidak sama dengan nol: $Q(x) \\neq 0$.</div>`,
      steps: `<ol><li>Penyebut pecahan: $x - 3$.</li><li>Syarat terdefinisi: $x - 3 \\neq 0 \\implies x \\neq 3$.</li><li>Domain fungsi: $D_f = \\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Membingungkan antara syarat penyebut tidak nol dengan syarat pembilang tidak nol.</div>`
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA LANJUT - GEOMETRI & PENGUKURAN (mtk-geo-1: Vektor, mtk-geo-2: Lingkaran)
  // --------------------------------------------------------------------------
  {
    id: "sup-mtk-geo-01",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-geo",
    subTopicId: "mtk-geo-1",
    category: "Panjang dan Vektor Satuan",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Diketahui sebuah vektor pada ruang tiga dimensi $\\mathbb{R}^3$ adalah $\\vec{v} = 3\\hat{i} - 4\\hat{j} + 12\\hat{k}$. Panjang (besar) dari vektor $\\vec{v}$ tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$13$",
      "$11$",
      "$15$",
      "$\\sqrt{17}$",
      "$19$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Panjang (Norm) Vektor Dimensi Tiga:</strong><br>Untuk $\\vec{v} = v_x \\hat{i} + v_y \\hat{j} + v_z \\hat{k}$, panjang vektor didefinisikan sebagai $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2 + v_z^2}$.</div>`,
      steps: `<ol><li>Komponen vektor: $v_x = 3$, $v_y = -4$, $v_z = 12$.</li><li>$|\\vec{v}| = \\sqrt{3^2 + (-4)^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Lupa mengkuadratkan tanda negatif sehingga keliru menghitung $9 - 16 + 144$.</div>`
    }
  },
  {
    id: "sup-mtk-geo-02",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-geo",
    subTopicId: "mtk-geo-2",
    category: "Garis Singgung Melalui Titik pada Lingkaran",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Persamaan garis singgung yang melalui titik $P(3, -4)$ pada lingkaran $x^2 + y^2 = 25$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3x - 4y = 25$",
      "$3x + 4y = 25$",
      "$-4x + 3y = 25$",
      "$3x - 4y = 5$",
      "$4x - 3y = 25$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Garis Singgung Titik Singgung Lingkaran Pusat $(0,0)$:</strong><br>Persamaan garis singgung lingkaran $x^2 + y^2 = r^2$ pada titik singgung $(x_1, y_1)$ adalah $x_1 x + y_1 y = r^2$.</div>`,
      steps: `<ol><li>Uji titik: $3^2 + (-4)^2 = 9 + 16 = 25$ (titik $P$ tepat terletak pada lingkaran).</li><li>Substitusi ke rumus: $(3)x + (-4)y = 25 \\implies 3x - 4y = 25$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Menggunakan jari-jari $r = 5$ bukannya $r^2 = 25$ pada ruas kanan persamaan garis singgung.</div>`
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA LANJUT - TRIGONOMETRI (mtk-tri-1: Limit Fungsi)
  // --------------------------------------------------------------------------
  {
    id: "sup-mtk-tri-01",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-tri",
    subTopicId: "mtk-tri-1",
    category: "Limit Aljabar Rasionalisasi Bentuk Akar",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Nilai dari limit aljabar bentuk akar $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$ dihitung secara analitis murni tanpa dalil L'Hôpital adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$0$",
      "$1$",
      "$\\frac{1}{8}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Metode Perkalian Sekawan Akar (Tanpa L'Hôpital):</strong><br>Bentuk tak tentu $\\frac{0}{0}$ diselesaikan dengan mengalikan faktor sekawan $(\\sqrt{x} + 2)$ pada pembilang dan penyebut sehingga faktor pembuat nol $(x - 4)$ dapat dieliminasi.</div>`,
      steps: `<ol><li>Kalikan sekawan: $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4} \\cdot \\frac{\\sqrt{x} + 2}{\\sqrt{x} + 2}$.</li><li>Pembilang menjadi: $(\\sqrt{x})^2 - 2^2 = x - 4$.</li><li>Sederhanakan: $\\lim_{x \\to 4} \\frac{x - 4}{(x - 4)(\\sqrt{x} + 2)} = \\lim_{x \\to 4} \\frac{1}{\\sqrt{x} + 2}$.</li><li>Substitusi nilai limit $x = 4$: $\\frac{1}{\\sqrt{4} + 2} = \\frac{1}{2 + 2} = \\frac{1}{4}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Mengabaikan instruksi tanpa L'Hôpital atau salah mengalikan faktor sekawan.</div>`
    }
  },

  // --------------------------------------------------------------------------
  // BAB FUNDAMENTAL (mtk-fun-1 s/d mtk-fun-5)
  // --------------------------------------------------------------------------
  {
    id: "sup-mtk-fun-01",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-fun",
    subTopicId: "mtk-fun-1",
    category: "Relasi Sudut Kuadran II, III, dan IV",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Nilai eksak dari ekspresi trigonometri $\\sin 150^\\circ + \\cos 240^\\circ - \\tan 315^\\circ$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$0$",
      "$\\frac{1}{2}$",
      "$-1$",
      "$2$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Relasi Sudut Antar Kuadran:</strong><br>• Kuadran II: $\\sin(180^\\circ - \\alpha) = +\\sin \\alpha$<br>• Kuadran III: $\\cos(180^\\circ + \\alpha) = -\\cos \\alpha$<br>• Kuadran IV: $\\tan(360^\\circ - \\alpha) = -\\tan \\alpha$</div>`,
      steps: `<ol><li>$\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = +\\frac{1}{2}$.</li><li>$\\cos 240^\\circ = \\cos(180^\\circ + 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$.</li><li>$\\tan 315^\\circ = \\tan(360^\\circ - 45^\\circ) = -\\tan 45^\\circ = -1$.</li><li>Hasil akhir: $\\left(+\\frac{1}{2}\\right) + \\left(-\\frac{1}{2}\\right) - (-1) = 0 + 1 = 1$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Salah menentukan tanda aljabar trigonometri pada kuadran III dan IV.</div>`
    }
  },
  {
    id: "sup-mtk-fun-02",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-fun",
    subTopicId: "mtk-fun-2",
    category: "Penyederhanaan Pecahan Aljabar",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Bentuk paling sederhana dari pecahan aljabar $\\frac{2x^2 - 8}{x^2 + 3x + 2}$ untuk $x \\neq -1$ dan $x \\neq -2$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{2(x - 2)}{x + 1}$",
      "$\\frac{2(x + 2)}{x + 1}$",
      "$\\frac{x - 2}{x + 1}$",
      "$\\frac{2(x - 4)}{x + 1}$",
      "$\\frac{2x - 4}{x + 2}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Penyederhanaan Pecahan Bentuk Aljabar:</strong><br>Faktorkan pembilang dan penyebut ke bentuk perkalian faktor-faktor linearnya, lalu bagi dengan faktor persekutuan terbesarnya.</div>`,
      steps: `<ol><li>Faktorkan pembilang: $2x^2 - 8 = 2(x^2 - 4) = 2(x - 2)(x + 2)$.</li><li>Faktorkan penyebut: $x^2 + 3x + 2 = (x + 1)(x + 2)$.</li><li>Bagi faktor persekutuan $(x + 2)$: $\\frac{2(x - 2)(x + 2)}{(x + 1)(x + 2)} = \\frac{2(x - 2)}{x + 1}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Mencoret suku $x^2$ secara langsung tanpa memfaktorkan bentuk penjumlahan aljabar terlebih dahulu.</div>`
    }
  },
  {
    id: "sup-mtk-fun-03",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-fun",
    subTopicId: "mtk-fun-3",
    category: "Jarak Antartitik Koordinat Kartesius",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Jarak Euclidean antara titik koordinat $A(-2, 3)$ dan titik $B(4, -5)$ pada bidang Kartesius adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10$",
      "$12$",
      "$8$",
      "$\\sqrt{74}$",
      "$14$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Rumus Jarak Dua Titik Bidang Kartesius:</strong><br>$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.</div>`,
      steps: `<ol><li>$\\Delta x = 4 - (-2) = 6$.</li><li>$\\Delta y = -5 - 3 = -8$.</li><li>$d = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Salah dalam operasi tanda negatif: $4 - (-2) \\neq 2$.</div>`
    }
  },
  {
    id: "sup-mtk-fun-04",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-fun",
    subTopicId: "mtk-fun-4",
    category: "Syarat Pecahan Aljabar Terdefinisi",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Himpunan semua nilai $x$ real agar fungsi aljabar $f(x) = \\frac{x + 4}{x^2 - 5x + 6}$ terdefinisi adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 2 \\text{ dan } x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -2 \\text{ dan } x \\neq -3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 2 < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 6\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Syarat Pecahan Terdefinisi:</strong><br>Penyebut dari suatu pecahan rasional tidak boleh sama dengan nol: $\\text{Penyebut} \\neq 0$.</div>`,
      steps: `<ol><li>Penyebut: $x^2 - 5x + 6 \\neq 0$.</li><li>Faktorkan: $(x - 2)(x - 3) \\neq 0$.</li><li>Maka $x \\neq 2$ dan $x \\neq 3$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Menganggap pembilang tidak boleh nol sehingga menyertakan $x \\neq -4$.</div>`
    }
  },
  {
    id: "sup-mtk-fun-05",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-fun",
    subTopicId: "mtk-fun-5",
    category: "Sifat Perubahan Basis Logaritma",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Jika diketahui $^2\\log 3 = a$ dan $^2\\log 5 = b$, maka nilai dari $^{10}\\log 15$ dinyatakan dalam variabel $a$ dan $b$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{a + b}{1 + b}$",
      "$\\frac{a + b}{a + 1}$",
      "$\\frac{a \\cdot b}{1 + b}$",
      "$\\frac{a + 1}{b + 1}$",
      "$\\frac{a + b}{2 + b}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Sifat Perubahan Basis Logaritma:</strong><br>$^c\\log d = \\frac{^p\\log d}{^p\\log c}$. Ubah ke basis referensi yang diketahui (basis 2).</div>`,
      steps: `<ol><li>Ubah basis 10 ke basis 2: $^{10}\\log 15 = \\frac{^2\\log 15}{^2\\log 10}$.</li><li>Faktorkan numerus prima: $^{10}\\log 15 = \\frac{^2\\log (3 \\times 5)}{^2\\log (2 \\times 5)}$.</li><li>Terapkan sifat perkalian: $\\frac{^2\\log 3 + ^2\\log 5}{^2\\log 2 + ^2\\log 5}$.</li><li>Substitusi: $\\frac{a + b}{1 + b}$ (karena $^2\\log 2 = 1$).</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Salah menganggap $^2\\log 10 = 2 \\times ^2\\log 5$ bukannya $^2\\log 2 + ^2\\log 5 = 1 + b$.</div>`
    }
  }
];

module.exports = { supplementaryQuestions };
