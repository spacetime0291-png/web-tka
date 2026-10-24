/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Pemanasan Global (fis-termo-global)
 * Sub-Bab: Penyebab & Dampak Pemanasan Global (fis-termo-global-dampak)
 * Slug: penyebab-dampak-global
 * Indikator: Kenaikan suhu bumi, pencairan es kutub, kenaikan muka air laut, dan anomali iklim ekstrem.
 * 
 * Total Butir Soal: 10 (Mudah: 4, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-global-dampak";
  const subTopicSlug = "penyebab-dampak-global";
  const questions = [
  {
    "id": "drill-pem-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-global-dampak",
    "category": "Hukum Pergeseran Wien",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Permukaan sebuah bintang memancarkan radiasi benda hitam dengan suhu permukaan $T = 6000\\text{ K}$. Jika konstanta pergeseran Wien adalah $C = 2{,}9 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$, maka panjang gelombang di mana intensitas radiasi bernilai maksimum ($\\lambda_{\\max}$) adalah sekitar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$483\\text{ nm}$ ($4{,}83 \\times 10^{-7}\\text{ m}$)",
      "$580\\text{ nm}$ ($5{,}80 \\times 10^{-7}\\text{ m}$)",
      "$290\\text{ nm}$ ($2{,}90 \\times 10^{-7}\\text{ m}$)",
      "$600\\text{ nm}$ ($6{,}00 \\times 10^{-7}\\text{ m}$)",
      "$350\\text{ nm}$ ($3{,}50 \\times 10^{-7}\\text{ m}$)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Pergeseran Wien:</strong><br>Panjang gelombang intensitas maksimum berbanding terbalik dengan suhu mutlak benda:<br>$$\\lambda_{\\max} \\cdot T = C = 2{,}9 \\times 10^{-3}\\text{ m}\\cdot\\text{K} \\implies \\lambda_{\\max} = \\frac{C}{T}$$</div>",
      "steps": "<ol><li>Substitusi data: $\\lambda_{\\max} = \\frac{2{,}9 \\times 10^{-3}}{6000} = \\frac{2{,}9 \\times 10^{-3}}{6 \\times 10^3}$.</li><li>$\\lambda_{\\max} \\approx 0{,}4833 \\times 10^{-6}\\text{ m} = 483 \\times 10^{-9}\\text{ m} = 483\\text{ nm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Karakteristik Fisik:</strong> Makin panas suatu benda, warnanya bergeser dari merah $\\to$ kuning $\\to$ putih/biru (panjang gelombangnya semakin pendek!).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Penyebab & Dampak Pemanasan Global",
    "subTopic": "Penyebab & Dampak Pemanasan Global",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-global",
    "subTopicSlug": "penyebab-dampak-global"
  },
  {
    "id": "drill2-pem-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-global-dampak",
    "category": "Urutan Spektrum Radiasi Matahari",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Urutan spektrum gelombang elektromagnetik yang dipancarkan oleh radiasi matahari dari frekuensi paling tinggi (energi foton terbesar) ke frekuensi paling rendah adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Ultraviolet $\\to$ Cahaya Tampak $\\to$ Inframerah",
      "Inframerah $\\to$ Cahaya Tampak $\\to$ Ultraviolet",
      "Cahaya Tampak $\\to$ Ultraviolet $\\to$ Inframerah",
      "Inframerah $\\to$ Ultraviolet $\\to$ Cahaya Tampak",
      "Gelombang Mikro $\\to$ Inframerah $\\to$ Cahaya Tampak"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Spektrum Gelombang Elektromagnetik:</strong><br>Frekuensi Tinggi (Panjang Gelombang Pendek) $\\to$ Frekuensi Rendah:<br>Sinar Gamma $\\to$ Sinar-X $\\to$ <strong>Ultraviolet</strong> $\\to$ <strong>Cahaya Tampak</strong> $\\to$ <strong>Inframerah</strong> $\\to$ Gelombang Mikro $\\to$ Gelombang Radio.</div>",
      "steps": "<ol><li>Ultraviolet memiliki energi/frekuensi paling tinggi di antara ketiganya ($f \\sim 10^{15}\\text{ Hz}$).</li><li>Cahaya tampak di tengah ($f \\sim 10^{14}\\text{ Hz}$).</li><li>Inframerah memiliki frekuensi paling rendah ($f \\sim 10^{12}-10^{13}\\text{ Hz}$) namun membawa efek termal (panas).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Mnemonic Urutan Spektrum:</strong> GRUTAMUXI: <strong>G</strong>amma, <strong>R</strong>ontgen (X), <strong>U</strong>ltraviolet, <strong>TAm</strong>pak, <strong>M</strong>erah (Infra), <strong>U</strong>HF/Mikro, <strong>R</strong>ad<strong>i</strong>o.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Penyebab & Dampak Pemanasan Global",
    "subTopic": "Penyebab & Dampak Pemanasan Global",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-global",
    "subTopicSlug": "penyebab-dampak-global"
  },
  {
    "id": "drill2-pem-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-global-dampak",
    "category": "Peningkatan Suhu 3 Kali Lipat terhadap Radiasi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah tungku pemanas bersuhu $T$ memancarkan daya radiasi sebesar $P$. Jika suhu mutlak tungku tersebut dinaikkan menjadi $3$ kali lipat ($T' = 3T$), maka daya radiasi yang dipancarkannya melonjak menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$81 P$",
      "$27 P$",
      "$9 P$",
      "$3 P$",
      "$243 P$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Karakteristik Hukum Stefan-Boltzmann:</strong><br>$$P \\propto T^4$$</div>",
      "steps": "<ol><li>Faktor kenaikan suhu: $3$.</li><li>Pangkat empatkan faktor kenaikan: $3^4 = 3 \\times 3 \\times 3 \\times 3 = 81$.</li><li>Daya radiasi menjadi $81 P$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jangan Memangkatkan 2 atau 3:</strong> $3^2 = 9$ (salah), $3^3 = 27$ (salah). Ingat rumus radiasi berpangkat EMPAT ($3^4 = 81$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Penyebab & Dampak Pemanasan Global",
    "subTopic": "Penyebab & Dampak Pemanasan Global",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-global",
    "subTopicSlug": "penyebab-dampak-global"
  },
  {
    "id": "drill2-pem-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-global-dampak",
    "category": "Dampak Ganda Senyawa CFC",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Senyawa klorofluorokarbon (CFC) yang dahulunya banyak digunakan pada cairan pendingin kulkas dan AC memiliki dampak lingkungan ganda, yaitu ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Merusak lapisan ozon stratosfer dan bertindak sebagai gas rumah kaca kuat",
      "Menyebabkan eutrofikasi dan hujan asam nitrat",
      "Menurunkan kadar oksigen terlarut di air sungai secara langsung",
      "Menghasilkan partikel jelaga penyebab kabut asap fotokimia",
      "Mencegah terbentuknya awan hujan di troposfer"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Karakteristik Kimiawi CFC:</strong><br>1. Radikal klorin ($\\text{Cl}^\\bullet$) dari CFC mengkatalisis penguraian ozon ($O_3 \\to O_2$) di stratosfer.<br>2. Molekul CFC memiliki masa hidup sangat panjang di atmosfer dan menyerap radiasi inframerah termal (gas rumah kaca).</div>",
      "steps": "<ol><li>Di lapisan stratosfer: Mengikis lapisan pelindung ozon.</li><li>Di lapisan troposfer: Memerangkap radiasi panas bumi (efek rumah kaca).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Protokol Montreal:</strong> Protokol internasional yang berhasil melarang penggunaan gas CFC dan menggantikannya dengan senyawa HFC yang lebih aman bagi ozon.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Penyebab & Dampak Pemanasan Global",
    "subTopic": "Penyebab & Dampak Pemanasan Global",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-global",
    "subTopicSlug": "penyebab-dampak-global"
  },
  {
    "id": "sedang-fis-13",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-global-dampak",
    "category": "Radiasi Kalor Hukum Stefan-Boltzmann",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah permukaan benda hitam ideal memancarkan energi radiasi termal dengan laju daya $E$ ketika bersuhu mutlak $T = 300\\text{ K}$. Jika suhu mutlak permukaan benda tersebut dinaikkan menjadi $T' = 600\\text{ K}$, laju daya radiasi yang dipancarkannya sekarang menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2E$",
      "$4E$",
      "$8E$",
      "$16E$",
      "$32E$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Hukum Stefan-Boltzmann Radiasi Benda Hitam:</strong><br>\n          Daya radiasi kalor berbanding lurus dengan pangkat empat suhu mutlaknya ($T$ dalam Kelvin):<br>\n          $$P = e \\sigma A T^4 \\implies P \\propto T^4$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Bandingkan laju daya radiasi:\n            $$\\frac{E'}{E} = \\left(\\frac{T'}{T}\\right)^4$$\n          </li>\n          <li>Substitusi nilai suhu mutlak:\n            $$\\frac{E'}{E} = \\left(\\frac{600}{300}\\right)^4 = 2^4 = 16$$\n          </li>\n          <li>Maka daya radiasi baru menjadi $E' = 16E$.</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Seringkali keliru menganggap daya radiasi berbanding lurus dengan suhu kuadrat ($T^2 = 4E$) atau secara linier ($T = 2E$). Ingat hukum pangkat 4!\n        </div>\n      "
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Penyebab & Dampak Pemanasan Global",
    "subTopic": "Penyebab & Dampak Pemanasan Global",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-global",
    "subTopicSlug": "penyebab-dampak-global"
  },
  {
    "id": "drill-pem-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-global-dampak",
    "category": "Pergeseran Puncak Emisi Benda Memanas",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu benda hitam pada suhu $T_1$ memiliki panjang gelombang pancaran maksimum $\\lambda_1 = 800\\text{ nm}$. Ketika suhu mutlak benda tersebut dinaikkan menjadi dua kali lipat ($T_2 = 2T_1$), panjang gelombang pancaran maksimumnya ($\\lambda_2$) bergeser menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$400\\text{ nm}$",
      "$1600\\text{ nm}$",
      "$800\\text{ nm}$",
      "$200\\text{ nm}$",
      "$600\\text{ nm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Perbandingan Hukum Wien:</strong><br>$$\\lambda_1 T_1 = \\lambda_2 T_2 \\implies \\frac{\\lambda_2}{\\lambda_1} = \\frac{T_1}{T_2}$$</div>",
      "steps": "<ol><li>Suhu naik $2\\times$ lipat: $\\frac{T_1}{T_2} = \\frac{1}{2}$.</li><li>Maka panjang gelombang menjadi setengahnya: $\\lambda_2 = \\frac{1}{2} \\lambda_1 = \\frac{1}{2} \\times 800\\text{ nm} = 400\\text{ nm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Ingat Hubungan Terbalik:</strong> Suhu naik $\\implies$ panjang gelombang <em>mengecil/memendek</em>, bukan membesar.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Penyebab & Dampak Pemanasan Global",
    "subTopic": "Penyebab & Dampak Pemanasan Global",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-global",
    "subTopicSlug": "penyebab-dampak-global"
  },
  {
    "id": "drill-pem-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-global-dampak",
    "category": "Perbandingan Emisi Radiasi Bintang",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua buah bintang $A$ dan $B$ berbentuk bola memiliki ukuran jari-jari yang sama dan dianggap memancar sebagai benda hitam ideal. Jika suhu permukaan bintang $A$ adalah $T_A = 4000\\text{ K}$ dan suhu permukaan bintang $B$ adalah $T_B = 8000\\text{ K}$, perbandingan daya total radiasi bintang $B$ terhadap bintang $A$ ($P_B : P_A$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$16 : 1$",
      "$2 : 1$",
      "$4 : 1$",
      "$8 : 1$",
      "$32 : 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Perbandingan Daya Radiasi Termal:</strong><br>$$P = \\sigma \\cdot A \\cdot T^4 \\implies \\frac{P_B}{P_A} = \\left( \\frac{T_B}{T_A} \\right)^4$$ (karena jari-jari dan luas permukaan sama).</div>",
      "steps": "<ol><li>Rasio suhu: $\\frac{T_B}{T_A} = \\frac{8000}{4000} = 2$.</li><li>Pangkat empatkan rasio suhu: $2^4 = 16$.</li><li>Maka perbandingan daya pancar: $P_B : P_A = 16 : 1$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Waspada:</strong> Siswa sering hanya mengkuadratkan ($2^2 = 4$) karena terbiasa dengan rumus luas lingkaran. Ingat Hukum Stefan-Boltzmann berpangkat empat ($T^4$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Penyebab & Dampak Pemanasan Global",
    "subTopic": "Penyebab & Dampak Pemanasan Global",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-global",
    "subTopicSlug": "penyebab-dampak-global"
  },
  {
    "id": "drill2-pem-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-global-dampak",
    "category": "Menghitung Suhu Bintang dari Spektrum Wien",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Pengamatan spektroskopi terhadap sebuah bintang menunjukkan bahwa puncak pancaran radiasi gelombangnya berada pada panjang gelombang ultraviolet $\\lambda_{\\max} = 290\\text{ nm} = 2{,}9 \\times 10^{-7}\\text{ m}$. Jika konstanta pergeseran Wien adalah $C = 2{,}9 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$, maka perkiraan suhu permukaan bintang tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10.000\\text{ K}$",
      "$5.800\\text{ K}$",
      "$8.410\\text{ K}$",
      "$1.000\\text{ K}$",
      "$29.000\\text{ K}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Pergeseran Wien untuk Astrofisika:</strong><br>$$\\lambda_{\\max} \\cdot T = C \\implies T = \\frac{C}{\\lambda_{\\max}}$$</div>",
      "steps": "<ol><li>Substitusi nilai: $C = 2{,}9 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$, $\\lambda_{\\max} = 2{,}9 \\times 10^{-7}\\text{ m}$.</li><li>Hitung suhu: $T = \\frac{2{,}9 \\times 10^{-3}}{2{,}9 \\times 10^{-7}} = 10^{-3 - (-7)} = 10^4 = 10.000\\text{ K}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Perhitungan Pangkat Bersih:</strong> Angka $2{,}9$ saling membagi habis, menyisakan pembagian pangkat: $10^{-3} / 10^{-7} = 10^4 = 10.000\\text{ K}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Penyebab & Dampak Pemanasan Global",
    "subTopic": "Penyebab & Dampak Pemanasan Global",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-global",
    "subTopicSlug": "penyebab-dampak-global"
  },
  {
    "id": "drill2-pem-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-global-dampak",
    "category": "Konsep Albedo Permukaan Bumi",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Albedo adalah ukuran fraksi radiasi matahari yang dipantulkan kembali oleh suatu permukaan ke angkasa luar tanpa diserap. Mengapa mencairnya tudung es di kutub utara dapat mempercepat laju pemanasan global (efek umpan balik positif)?",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Permukaan es memiliki albedo tinggi (daya pantul besar), sedangkan laut terbuka memiliki albedo rendah sehingga menyerap lebih banyak panas matahari",
      "Mencairnya es melepaskan sejumlah besar kalor laten peleburan langsung ke atmosfer",
      "Air laut kutub membeku kembali dan mengeluarkan gas metana dalam jumlah masif",
      "Es yang mencair meningkatkan salinitas air laut sehingga menghambat konveksi udara",
      "Permukaan air laut kutub memantulkan lebih banyak sinar ultraviolet daripada es padat"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Mekanisme Umpan Balik Albedo Es (Ice-Albedo Feedback):</strong><br>• Lapisan es putih memiliki albedo tinggi ($70-80\\%$ radiasi dipantulkan).<br>• Permukaan laut gelap memiliki albedo rendah (hanya memantulkan $\\approx 10\\%$, menyerap $90\\%$ radiasi).<br>• Saat es mencair $\\to$ laut menyerap lebih banyak panas $\\to$ suhu laut naik $\\to$ es makin cepat mencair.</div>",
      "steps": "<ol><li>Reflektansi es putih sangat tinggi (albedo tinggi).</li><li>Permukaan laut terbuka berwarna gelap (albedo rendah).</li><li>Penggantian es dengan laut terbuka melipatgandakan absorpsi kalor matahari ke bumi.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Definisi Albedo:</strong> Permukaan putih/terang memiliki albedo tinggi (memantulkan). Permukaan gelap memiliki albedo rendah (menyerap).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Penyebab & Dampak Pemanasan Global",
    "subTopic": "Penyebab & Dampak Pemanasan Global",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-global",
    "subTopicSlug": "penyebab-dampak-global"
  },
  {
    "id": "drill2-pem-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-global-dampak",
    "category": "Intensitas Radiasi Benda Hitam Ideal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah permukaan benda hitam ideal ($e = 1$) dipanaskan hingga suhunya mencapai $T = 1000\\text{ K}$. Jika konstanta Stefan-Boltzmann adalah $\\sigma = 5{,}67 \\times 10^{-8}\\text{ W/m}^2\\text{K}^4$, maka besar intensitas radiasi termal yang dipancarkan per satuan luas permukaan ($I = P/A$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$56.700\\text{ W/m}^2$",
      "$5.670\\text{ W/m}^2$",
      "$567.000\\text{ W/m}^2$",
      "$567\\text{ W/m}^2$",
      "$5{,}67\\text{ W/m}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Intensitas Radiasi Benda Hitam:</strong><br>$$I = \\frac{P}{A} = e \\cdot \\sigma \\cdot T^4$$</div>",
      "steps": "<ol><li>$e = 1$, $T = 1000\\text{ K} = 10^3\\text{ K}$.</li><li>Pangkat empatkan suhu: $T^4 = (10^3)^4 = 10^{12}\\text{ K}^4$.</li><li>Hitung intensitas: $I = 1 \\times (5{,}67 \\times 10^{-8}) \\times 10^{12} = 5{,}67 \\times 10^4 = 56.700\\text{ W/m}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Perkalian Orde Pangkat:</strong> $10^{-8} \\times 10^{12} = 10^{-8 + 12} = 10^4$. Maka $5{,}67 \\times 10.000 = 56.700\\text{ W/m}^2$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Penyebab & Dampak Pemanasan Global",
    "subTopic": "Penyebab & Dampak Pemanasan Global",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-global",
    "subTopicSlug": "penyebab-dampak-global"
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
