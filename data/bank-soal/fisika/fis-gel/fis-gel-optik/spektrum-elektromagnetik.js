/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Cahaya & Optik (fis-gel-optik)
 * Sub-Bab: Spektrum Elektromagnetik (fis-gel-optik-spektrum)
 * Slug: spektrum-elektromagnetik
 * Indikator: Urutan spektrum gelombang elektromagnetik dari frekuensi terendah ke tertinggi dan peranannya.
 * 
 * Total Butir Soal: 14 (Mudah: 6, Sedang: 8, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-optik-spektrum";
  const subTopicSlug = "spektrum-elektromagnetik";
  const questions = [
  {
    "id": "fis-gel-optik-spektrum-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-spektrum",
    "category": "Spektrum Elektromagnetik",
    "difficulty": "mudah",
    "statement": "Urutan spektrum gelombang elektromagnetik dari frekuensi paling rendah ke frekuensi paling tinggi (panjang gelombang paling besar ke paling kecil) yang benar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Gelombang radio, gelombang mikro, sinar inframerah, cahaya tampak, sinar ultraviolet, sinar-X, sinar gamma",
      "Sinar gamma, sinar-X, sinar ultraviolet, cahaya tampak, sinar inframerah, gelombang mikro, gelombang radio",
      "Gelombang radio, sinar inframerah, gelombang mikro, cahaya tampak, sinar ultraviolet, sinar-X, sinar gamma",
      "Sinar ultraviolet, cahaya tampak, sinar inframerah, sinar-X, gelombang mikro, gelombang radio, sinar gamma",
      "Gelombang mikro, gelombang radio, sinar inframerah, cahaya tampak, sinar ultraviolet, sinar gamma, sinar-X"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Spektrum gelombang elektromagnetik dari frekuensi terendah (energi terendah, $\\lambda$ terpanjang) ke frekuensi tertinggi (energi tertinggi, $\\lambda$ terpendek):<br>Radio $\\to$ Mikro $\\to$ Inframerah $\\to$ Cahaya Tampak $\\to$ Ultraviolet $\\to$ Sinar-X $\\to$ Sinar Gamma.<br>Mnemonic yang populer: <strong>RA-MI-IN-TAM-UL-X-GA</strong>.",
      "steps": "1. Tinjau urutan frekuensi dari terendah ke tertinggi: Gelombang radio memiliki frekuensi terendah ($10^4 - 10^9\\text{ Hz}$) dan sinar gamma memiliki frekuensi tertinggi ($> 10^{20}\\text{ Hz}$).<br>2. Periksa pilihan: Urutan pada opsi A tepat sesuai dengan kaidah spektrum gelombang elektromagnetik.<br>3. Pilihan B adalah urutan terbalik (frekuensi tertinggi ke terendah).",
      "pitfalls": "Siswa sering tertukar antara posisi gelombang radio dan gelombang mikro, atau membaca terbalik antara urutan frekuensi dengan urutan panjang gelombang."
    },
    "subTopicSlug": "spektrum-elektromagnetik",
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-spektrum-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-spektrum",
    "category": "Spektrum Elektromagnetik",
    "difficulty": "mudah",
    "statement": "Perhatikan pernyataan-pernyataan mengenai sifat umum gelombang elektromagnetik berikut:\n(1) Merupakan gelombang transversal yang tersusun atas osilasi medan listrik dan medan magnet yang saling tegak lurus.\n(2) Dapat merambat melalui ruang hampa udara (vakum) tanpa memerlukan medium materi.\n(3) Dibelokkan oleh medan listrik statis dan medan magnet statis karena memiliki muatan.\n(4) Memiliki kelajuan konstan di ruang hampa sebesar $c = 3 \\times 10^8\\text{ m/s}$.\nPernyataan yang BENAR adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "(1), (2), dan (3)",
      "(1), (2), dan (4)",
      "(1) dan (3) saja",
      "(2) dan (4) saja",
      "(1), (2), (3), dan (4)"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Karakteristik dasar gelombang elektromagnetik:<br>1. Gelombang transversal (vektor $\\vec{E}$ tegak lurus $\\vec{B}$ dan tegak lurus arah rambat $\\vec{k}$).<br>2. Tidak memerlukan medium rambat (merambat di vakum).<br>3. Tidak bermuatan listrik (foton netral), sehingga <strong>TIDAK dibelokkan</strong> oleh medan listrik maupun medan magnet.<br>4. Kelajuan di ruang hampa adalah $c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3 \\times 10^8\\text{ m/s}$.",
      "steps": "1. Analisis pernyataan (1): Benar, medan listrik dan magnet saling tegak lurus dan transversal.<br>2. Analisis pernyataan (2): Benar, dapat merambat di ruang hampa.<br>3. Analisis pernyataan (3): Salah, gelombang elektromagnetik tidak bermuatan sehingga tidak dipengaruhi medan listrik/magnet.<br>4. Analisis pernyataan (4): Benar, kelajuan konstan $3 \\times 10^8\\text{ m/s}$ di vakum.<br>5. Pernyataan yang benar adalah (1), (2), dan (4), yaitu pilihan B.",
      "pitfalls": "Siswa sering mengira karena gelombang EM terdiri dari medan listrik dan magnet, maka gelombangnya dapat dibelokkan oleh medan listrik/magnet. Partikel foton tidak memiliki muatan listrik neto sehingga lintasannya lurus tak terbelokkan."
    },
    "subTopicSlug": "spektrum-elektromagnetik",
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-spektrum-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-spektrum",
    "category": "Spektrum Elektromagnetik",
    "difficulty": "mudah",
    "statement": "Sebuah stasiun radio FM memancarkan siaran pada frekuensi $f = 100\\text{ MHz}$ ($1\\text{ MHz} = 10^6\\text{ Hz}$). Jika cepat rambat gelombang elektromagnetik di udara adalah $c = 3 \\times 10^8\\text{ m/s}$, panjang gelombang dari siaran radio tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}3\\text{ m}$",
      "$3{,}0\\text{ m}$",
      "$30\\text{ m}$",
      "$300\\text{ m}$",
      "$3000\\text{ m}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hubungan mendasar antara cepat rambat ($c$), frekuensi ($f$), dan panjang gelombang ($\\lambda$) gelombang elektromagnetik dirumuskan:<br>$$c = \\lambda \\times f \\implies \\lambda = \\frac{c}{f}$$",
      "steps": "1. Konversikan frekuensi ke Hertz: $f = 100\\text{ MHz} = 100 \\times 10^6\\text{ Hz} = 10^8\\text{ Hz}$.<br>2. Hitung panjang gelombang:<br>$$\\lambda = \\frac{c}{f} = \\frac{3 \\times 10^8\\text{ m/s}}{10^8\\text{ Hz}} = 3{,}0\\text{ meter}$$<br>3. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Pastikan selalu mengonversi satuan megaHertz ($1\\text{ MHz} = 10^6\\text{ Hz}$) sebelum membagi dengan kelajuan cahaya."
    },
    "subTopicSlug": "spektrum-elektromagnetik",
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-spektrum-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-spektrum",
    "category": "Spektrum Elektromagnetik",
    "difficulty": "mudah",
    "statement": "Jenis gelombang elektromagnetik yang dimanfaatkan pada teknologi oven untuk memanaskan makanan serta digunakan pada sistem radar navigasi pemandu pesawat terbang adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Sinar inframerah",
      "Gelombang mikro",
      "Sinar ultraviolet",
      "Sinar-X",
      "Gelombang radio AM"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gelombang mikro (microwaves) memiliki rentang frekuensi sekitar $10^9 - 10^{11}\\text{ Hz}$. Gelombang mikro diserap dengan sangat efisien oleh molekul air dan lemak pada makanan sehingga menimbulkan efek resonansi rotasi termal (pemanasan oven microwave). Selain itu, panjang gelombangnya yang relatif pendek membuatnya ideal untuk pemetaan radar (Radio Detection and Ranging).",
      "steps": "1. Analisis pemanfaatan microwave: Microwave oven memanfaatkan frekuensi $\\approx 2{,}45\\text{ GHz}$ (gelombang mikro).<br>2. Analisis teknologi radar: Menggunakan gelombang mikro karena pemantulannya akurat untuk mendeteksi posisi target.<br>3. Pilihan yang tepat adalah opsi B.",
      "pitfalls": "Siswa sering tertukar antara gelombang mikro dan sinar inframerah. Sinar inframerah menghasilkan efek panas radiasi permukaan, tetapi pemanasan oven microwave dan radar secara spesifik menggunakan gelombang mikro."
    },
    "subTopicSlug": "spektrum-elektromagnetik",
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-spektrum-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-spektrum",
    "category": "Spektrum Elektromagnetik",
    "difficulty": "mudah",
    "statement": "Di antara spektrum warna cahaya tampak berikut, warna cahaya yang memiliki frekuensi paling tinggi (dan panjang gelombang paling pendek) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Merah",
      "Kuning",
      "Hijau",
      "Biru",
      "Ungu"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Spektrum cahaya tampak terbentang dari panjang gelombang $\\approx 700\\text{ nm}$ (merah) hingga $\\approx 400\\text{ nm}$ (ungu). Karena frekuensi berbanding terbalik dengan panjang gelombang ($f = c/\\lambda$):<br>Merah memiliki $\\lambda$ terpanjang dan $f$ terendah.<br>Ungu memiliki $\\lambda$ terpendek dan $f$ tertinggi.",
      "steps": "1. Urutan warna cahaya tampak dari frekuensi terendah ke tertinggi: Merah $\\to$ Jingga $\\to$ Kuning $\\to$ Hijau $\\to$ Biru $\\to$ Nila $\\to$ Ungu (MEJIKUHIBINIU).<br>2. Warna dengan frekuensi paling tinggi adalah Ungu.<br>3. Jawaban yang benar adalah pilihan E.",
      "pitfalls": "Jangan terbalik antara panjang gelombang dan frekuensi. Merah memiliki panjang gelombang terbesar, sedangkan ungu memiliki frekuensi terbesar dan energi foton terbesar."
    },
    "subTopicSlug": "spektrum-elektromagnetik",
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-spektrum-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-spektrum",
    "category": "Spektrum Elektromagnetik",
    "difficulty": "sedang",
    "statement": "Suatu sumber radiasi monokromatis memancarkan foton dengan panjang gelombang $\\lambda = 330\\text{ nm}$ ($1\\text{ nm} = 10^{-9}\\text{ m}$). Jika konstanta Planck dinyatakan sebagai $h = 6{,}6 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ dan cepat rambat cahaya di ruang hampa adalah $c = 3 \\times 10^8\\text{ m/s}$, besar energi dari setiap foton radiasi tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2 \\times 10^{-19}\\text{ J}$",
      "$4 \\times 10^{-19}\\text{ J}$",
      "$6 \\times 10^{-19}\\text{ J}$",
      "$8 \\times 10^{-19}\\text{ J}$",
      "$10 \\times 10^{-19}\\text{ J}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Energi foton ($E$) dari gelombang elektromagnetik berbanding lurus dengan frekuensi ($f$) dan berbanding terbalik dengan panjang gelombang ($\\lambda$):<br>$$E = h f = \\frac{h c}{\\lambda}$$",
      "steps": "1. Konversikan panjang gelombang ke satuan meter:<br>$$\\lambda = 330\\text{ nm} = 330 \\times 10^{-9}\\text{ m} = 3{,}3 \\times 10^{-7}\\text{ m}$$<br>2. Hitung energi foton:<br>$$E = \\frac{(6{,}6 \\times 10^{-34}\\text{ J}\\cdot\\text{s})(3 \\times 10^8\\text{ m/s})}{3{,}3 \\times 10^{-7}\\text{ m}}$$<br>3. Sederhanakan angka utama dan orde pangkat:<br>$$E = \\left(\\frac{6{,}6 \\times 3}{3{,}3}\\right) \\times 10^{-34 + 8 - (-7)} = (2 \\times 3) \\times 10^{-19} = 6 \\times 10^{-19}\\text{ Joule}$$<br>4. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Perhatikan eksponen penyebut saat dinaikkan ke pembilang: $10^{-34} \\times 10^8 / 10^{-7} = 10^{-34 + 8 + 7} = 10^{-19}$. Jangan sampai salah tanda menjadi $10^{-33}$."
    },
    "subTopicSlug": "spektrum-elektromagnetik",
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-spektrum-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-spektrum",
    "category": "Spektrum Elektromagnetik",
    "difficulty": "sedang",
    "statement": "Sebuah pemancar laser helium-neon menghasilkan daya radiasi sebesar $33\\text{ mW}$ pada panjang gelombang $\\lambda = 600\\text{ nm}$. Jika konstanta Planck $h = 6{,}6 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ dan kelajuan cahaya $c = 3 \\times 10^8\\text{ m/s}$, jumlah foton yang dipancarkan oleh laser tersebut setiap detiknya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}0 \\times 10^{16}\\text{ foton/s}$",
      "$1{,}0 \\times 10^{17}\\text{ foton/s}$",
      "$3{,}3 \\times 10^{17}\\text{ foton/s}$",
      "$1{,}0 \\times 10^{18}\\text{ foton/s}$",
      "$3{,}3 \\times 10^{18}\\text{ foton/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Daya radiasi ($P$) adalah energi total foton yang dipancarkan per satuan waktu. Jika $N$ adalah laju pemancaran foton per detik:<br>$$P = N \\times E_{\\text{foton}} = N \\times \\frac{h c}{\\lambda} \\implies N = \\frac{P \\lambda}{h c}$$",
      "steps": "1. Hitung energi 1 foton:<br>$$E = \\frac{h c}{\\lambda} = \\frac{(6{,}6 \\times 10^{-34})(3 \\times 10^8)}{600 \\times 10^{-9}} = \\frac{19{,}8 \\times 10^{-26}}{6 \\times 10^{-7}} = 3{,}3 \\times 10^{-19}\\text{ J}$$<br>2. Konversi daya laser ke Watt: $P = 33\\text{ mW} = 33 \\times 10^{-3}\\text{ W}$.<br>3. Hitung jumlah foton per detik ($N$):<br>$$N = \\frac{P}{E} = \\frac{33 \\times 10^{-3}\\text{ J/s}}{3{,}3 \\times 10^{-19}\\text{ J}} = 10 \\times 10^{16} = 1{,}0 \\times 10^{17}\\text{ foton/s}$$<br>4. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Lupa mengonversi miliWatt ($10^{-3}\\text{ W}$) ke Watt akan menghasilkan jawaban yang meleset sebesar faktor $10^3$ ($10^{20}\\text{ foton/s}$)."
    },
    "subTopicSlug": "spektrum-elektromagnetik",
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-spektrum-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-spektrum",
    "category": "Spektrum Elektromagnetik",
    "difficulty": "sedang",
    "statement": "Suatu gelombang elektromagnetik bidang merambat di ruang hampa searah sumbu-x positif. Pada suatu titik dan saat tertentu, amplitudo komponen medan listriknya bernilai $E_{\\max} = 600\\text{ N/C}$. Jika cepat rambat cahaya di ruang hampa adalah $c = 3 \\times 10^8\\text{ m/s}$, amplitudo komponen medan magnet ($B_{\\max}$) dari gelombang tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2 \\times 10^{-8}\\text{ T}$",
      "$2 \\times 10^{-6}\\text{ T}$",
      "$1{,}8 \\times 10^{-5}\\text{ T}$",
      "$2 \\times 10^{-4}\\text{ T}$",
      "$1{,}8 \\times 10^{11}\\text{ T}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada gelombang elektromagnetik, perbandingan antara amplitudo medan listrik ($E_{\\max}$) dan amplitudo medan magnet ($B_{\\max}$) selalu sebanding dengan kecepatan rambat gelombang ($c$):<br>$$c = \\frac{E_{\\max}}{B_{\\max}} \\implies B_{\\max} = \\frac{E_{\\max}}{c}$$",
      "steps": "1. Substitusikan nilai $E_{\\max} = 600\\text{ N/C}$ dan $c = 3 \\times 10^8\\text{ m/s}$:<br>$$B_{\\max} = \\frac{600}{3 \\times 10^8} = 200 \\times 10^{-8}\\text{ Tesla}$$<br>2. Ubah ke bentuk notasi ilmiah baku:<br>$$B_{\\max} = 2 \\times 10^{-6}\\text{ Tesla}$$<br>3. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Jangan mengalikan $E_{\\max}$ dengan $c$ yang akan menghasilkan nilai medan magnet luar biasa besar ($1{,}8 \\times 10^{11}\\text{ T}$, opsi E). Hubungan yang benar adalah membagi $E$ dengan $c$."
    },
    "subTopicSlug": "spektrum-elektromagnetik",
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-spektrum-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-spektrum",
    "category": "Spektrum Elektromagnetik",
    "difficulty": "sedang",
    "statement": "Berdasarkan tingkat energinya, radiasi elektromagnetik diklasifikasikan menjadi radiasi pengion (ionizing radiation) dan non-pengion. Kelompok spektrum berikut yang seluruh anggotanya termasuk ke dalam kategori radiasi pengion berbahaya karena energi fotonnya mampu memutus ikatan kimia dan mengionisasi molekul biologis adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Sinar ultraviolet frekuensi tinggi, sinar-X, dan sinar gamma",
      "Gelombang mikro, sinar inframerah, dan cahaya tampak",
      "Sinar inframerah, cahaya tampak, dan sinar ultraviolet gelombang panjang",
      "Gelombang radio, gelombang mikro, dan sinar inframerah",
      "Cahaya tampak, sinar ultraviolet gelombang panjang, dan gelombang mikro"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Radiasi pengion adalah radiasi elektromagnetik yang energi fotonnya melebihi energi ionisasi atom/molekul (biasanya $\\gtrsim 10 - 12\\text{ eV}$). Spektrum yang termasuk radiasi pengion adalah sinar ultraviolet ekstrem/jauh, sinar-X, dan sinar gamma. Spektrum berenergi lebih rendah (cahaya tampak, inframerah, gelombang mikro, dan gelombang radio) adalah radiasi non-pengion.",
      "steps": "1. Identifikasi sifat pengion: Foton berfrekuensi sangat tinggi membawa energi $E = hf$ yang sangat besar sehingga mampu melepaskan elektron dari atom/DNA (ionisasi).<br>2. Spektrum yang memenuhi syarat ini adalah UV berenergi tinggi, sinar-X, dan sinar gamma.<br>3. Pilihan yang tepat adalah opsi A.",
      "pitfalls": "Sinar inframerah dan gelombang mikro dapat menimbulkan efek pemanasan (termal), tetapi energinya tidak cukup besar untuk melepaskan elektron ikatan atomik (bukan radiasi pengion)."
    },
    "subTopicSlug": "spektrum-elektromagnetik",
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-spektrum-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-spektrum",
    "category": "Spektrum Elektromagnetik",
    "difficulty": "sedang",
    "statement": "Suatu gelombang elektromagnetik monokromatik dengan frekuensi $5 \\times 10^{14}\\text{ Hz}$ merambat dari ruang hampa memasuki suatu medium kaca optik bening yang memiliki indeks bias $n = 1{,}5$. Panjang gelombang elektromagnetik tersebut di dalam kaca adalah .... ($c = 3 \\times 10^8\\text{ m/s}$).",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3 \\times 10^{-7}\\text{ m}$",
      "$4 \\times 10^{-7}\\text{ m}$",
      "$6 \\times 10^{-7}\\text{ m}$",
      "$8 \\times 10^{-7}\\text{ m}$",
      "$9 \\times 10^{-7}\\text{ m}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Ketika gelombang elektromagnetik berpindah medium:<br>1. Frekuensi ($f$) selalu bernilai konstan karena ditentukan oleh sumber pemancar.<br>2. Kecepatan rambat berkurang sesuai indeks bias: $v = \\frac{c}{n}$.<br>3. Panjang gelombang di dalam medium memendek: $\\lambda = \\frac{v}{f} = \\frac{\\lambda_0}{n}$.",
      "steps": "1. Hitung panjang gelombang di ruang hampa ($\\lambda_0$):<br>$$\\lambda_0 = \\frac{c}{f} = \\frac{3 \\times 10^8\\text{ m/s}}{5 \\times 10^{14}\\text{ Hz}} = 0{,}6 \\times 10^{-6}\\text{ m} = 6 \\times 10^{-7}\\text{ m}$$<br>2. Hitung panjang gelombang di dalam medium ($n = 1{,}5$):<br>$$\\lambda = \\frac{\\lambda_0}{n} = \\frac{6 \\times 10^{-7}\\text{ m}}{1{,}5} = 4 \\times 10^{-7}\\text{ m}$$<br>3. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Siswa sering mengira frekuensi berubah di dalam medium, atau mengalikan panjang gelombang dengan indeks bias sehingga memperoleh $9 \\times 10^{-7}\\text{ m}$ (opsi E). Panjang gelombang selalu memendek ketika memasuki medium yang lebih rapat optik."
    },
    "subTopicSlug": "spektrum-elektromagnetik",
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "drill-cah-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-spektrum",
    "category": "Hubungan Frekuensi dan Panjang Gelombang Cahaya",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seberkas laser jingga memiliki panjang gelombang $\\lambda = 600\\text{ nm}$ di ruang hampa ($1\\text{ nm} = 10^{-9}\\text{ m}$). Jika kelajuan cahaya di ruang hampa adalah $c = 3 \\times 10^8\\text{ m/s}$, maka frekuensi gelombang laser tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5 \\times 10^{14}\\text{ Hz}$",
      "$5 \\times 10^{15}\\text{ Hz}$",
      "$2 \\times 10^{14}\\text{ Hz}$",
      "$1{,}8 \\times 10^{14}\\text{ Hz}$",
      "$5 \\times 10^{12}\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Persamaan Gelombang Elektromagnetik:</strong><br>$$c = \\lambda \\cdot f \\implies f = \\frac{c}{\\lambda}$$</div>",
      "steps": "<ol><li>Konversi panjang gelombang ke meter: $\\lambda = 600 \\times 10^{-9}\\text{ m} = 6 \\times 10^{-7}\\text{ m}$.</li><li>Hitung frekuensi: $f = \\frac{3 \\times 10^8}{6 \\times 10^{-7}} = 0{,}5 \\times 10^{15} = 5 \\times 10^{14}\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Perhatikan Orde Pangkat:</strong> Hati-hati saat menaikkan pangkat dari penyebut: $10^8 / 10^{-7} = 10^{8 - (-7)} = 10^{15}$.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "spektrum-elektromagnetik"
  },
  {
    "id": "sedang-fis-11",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-spektrum",
    "category": "Interferensi Celah Ganda Young",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Pada eksperimen interferensi celah ganda Young, jarak antarcelah adalah $d = 0{,}2\\text{ mm}$ ($2 \\times 10^{-4}\\text{ m}$) dan layar dipasang sejajar pada jarak $L = 1\\text{ meter}$ di belakang celah. Jika cahaya monokromatik dengan panjang gelombang $\\lambda = 500\\text{ nm}$ ($5 \\times 10^{-7}\\text{ m}$) dilewatkan pada celah, jarak antara garis terang pusat dengan garis terang orde ke-2 pada layar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}5\\text{ mm}$",
      "$5{,}0\\text{ mm}$",
      "$7{,}5\\text{ mm}$",
      "$10{,}0\\text{ mm}$",
      "$12{,}5\\text{ mm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Interferensi Maksimum (Garis Terang) Celah Ganda:</strong><br>\n          $$\\frac{d \\cdot y}{L} = n \\lambda \\implies y = \\frac{n \\lambda L}{d}$$\n          dengan $n$ adalah orde terang ($n = 1, 2, 3, \\dots$).\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Untuk garis terang ke-2, gunakan $n = 2$.</li>\n          <li>Substitusi besaran fisis ke persamaan:\n            $$y = \\frac{2 \\times (5 \\times 10^{-7}\\text{ m}) \\times (1\\text{ m})}{2 \\times 10^{-4}\\text{ m}}$$\n          </li>\n          <li>Sederhanakan pecahan:\n            $$y = \\frac{10 \\times 10^{-7}}{2 \\times 10^{-4}} = 5 \\times 10^{-3}\\text{ meter} = 5{,}0\\text{ mm}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Pastikan seluruh satuan dikonversi ke meter terlebih dahulu ($1\\text{ nm} = 10^{-9}\\text{ m}$ dan $1\\text{ mm} = 10^{-3}\\text{ m}$).\n        </div>\n      "
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "spektrum-elektromagnetik"
  },
  {
    "id": "drill-cah-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-spektrum",
    "category": "Interferensi Celah Ganda Young",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Pada eksperimen interferensi celah ganda Young, jarak antara kedua celah adalah $d = 0{,}2\\text{ mm}$ dan layar diletakkan pada jarak $L = 1\\text{ meter}$ di belakang celah. Jika cahaya monokromatik yang digunakan memiliki panjang gelombang $\\lambda = 500\\text{ nm}$ ($5 \\times 10^{-7}\\text{ m}$), maka jarak antara dua garis terang yang berdekatan ($\\Delta y$) pada layar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}5\\text{ mm}$",
      "$1{,}0\\text{ mm}$",
      "$5{,}0\\text{ mm}$",
      "$0{,}25\\text{ mm}$",
      "$25\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Jarak Antar-Garis Terang Celah Ganda:</strong><br>Jarak pisah antara dua pola terang berurutan ($Delta y$) memenuhi persamaan:<br>$$\\frac{d \\cdot \\Delta y}{L} = \\lambda \\implies \\Delta y = \\frac{\\lambda L}{d}$$</div>",
      "steps": "<ol><li>Samakan semua satuan ke meter:<br>• $d = 0{,}2\\text{ mm} = 2 \\times 10^{-4}\\text{ m}$<br>• $L = 1\\text{ m}$<br>• $\\lambda = 5 \\times 10^{-7}\\text{ m}$</li><li>Hitung $\\Delta y$:<br>$$\\Delta y = \\frac{(5 \\times 10^{-7}) \\times 1}{2 \\times 10^{-4}} = 2{,}5 \\times 10^{-3}\\text{ m} = 2{,}5\\text{ mm}$$</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Selalu konversikan semua data ($\text{mm}$, $\text{nm}$, $\text{cm}$) ke meter terlebih dahulu sebelum melakukan pembagian ordo pangkat.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "spektrum-elektromagnetik"
  },
  {
    "id": "drill2-cah-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-spektrum",
    "category": "Kisi Difraksi Spektrum Cahaya",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah kisi difraksi memiliki $N = 500\\text{ garis/mm}$. Seberkas cahaya monokromatik dilewatkan tegak lurus pada kisi tersebut sehingga menghasilkan garis terang orde pertama ($n = 1$) pada sudut deviasi dengan $\\sin \\theta = 0{,}25$. Panjang gelombang cahaya yang digunakan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$500\\text{ nm}$ ($5 \\times 10^{-7}\\text{ m}$)",
      "$250\\text{ nm}$ ($2{,}5 \\times 10^{-7}\\text{ m}$)",
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$1000\\text{ nm}$ ($10^{-6}\\text{ m}$)",
      "$400\\text{ nm}$ ($4 \\times 10^{-7}\\text{ m}$)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Persamaan Kisi Difraksi:</strong><br>$$d \\sin \\theta = n \\lambda$$<br>dengan tetapan jarak antar-kisi: $d = \\frac{1}{N}$.</div>",
      "steps": "<ol><li>Hitung jarak antar-celah $d$ dalam meter:<br>$$d = \\frac{1}{500\\text{ garis/mm}} = \\frac{1\\text{ mm}}{500} = \\frac{10^{-3}\\text{ m}}{500} = 2 \\times 10^{-6}\\text{ m}$$</li><li>Substitusi ke rumus difraksi orde $n = 1$:<br>$$d \\sin \\theta = 1 \\cdot \\lambda \\implies \\lambda = (2 \\times 10^{-6}) \\times 0{,}25 = 0{,}5 \\times 10^{-6}\\text{ m} = 500\\text{ nm}$$</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Konversi Celah Kisi:</strong> Jangan lupa mengonversi dari $\\text{mm}$ ke $\\text{meter}$ ($1\\text{ mm} = 10^{-3}\\text{ m}$).</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "spektrum-elektromagnetik"
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
