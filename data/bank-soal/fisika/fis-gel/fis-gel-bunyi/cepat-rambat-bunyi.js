/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Bunyi (fis-gel-bunyi)
 * Sub-Bab: Cepat Rambat Bunyi (fis-gel-bunyi-cepatrambat)
 * Slug: cepat-rambat-bunyi
 * Indikator: Kecepatan rambat bunyi pada zat padat, zat cair, dan gas ideal.
 * 
 * Total Butir Soal: 12 (Mudah: 7, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-bunyi-cepatrambat";
  const subTopicSlug = "cepat-rambat-bunyi";
  const questions = [
  {
    "id": "fis-gel-bunyi-cepatrambat-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-cepatrambat",
    "category": "Cepat Rambat Bunyi",
    "difficulty": "mudah",
    "statement": "Gelombang bunyi yang dipancarkan oleh sebuah pengeras suara merambat di udara dengan panjang gelombang $\\lambda = 85\\text{ cm}$. Jika frekuensi getaran sumber bunyi tersebut adalah $f = 400\\text{ Hz}$, besar cepat rambat gelombang bunyi di udara tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$170\\text{ m/s}$",
      "$340\\text{ m/s}$",
      "$470\\text{ m/s}$",
      "$680\\text{ m/s}$",
      "$3.400\\text{ m/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Cepat rambat gelombang bunyi ($v$) berkaitan langsung dengan panjang gelombang ($\\lambda$) dan frekuensi gelombang ($f$) melalui hubungan dasar:<br>$$v = \\lambda \\cdot f$$",
      "steps": "1. Konversikan panjang gelombang ke satuan meter:<br>$$\\lambda = 85\\text{ cm} = 0{,}85\\text{ m}$$<br>2. Hitung cepat rambat gelombang:<br>$$v = 0{,}85\\text{ m} \\times 400\\text{ Hz} = 340\\text{ m/s}$$",
      "pitfalls": "Lupa mengonversi satuan centimeter ke meter sehingga mengalikan langsung $85 \\times 400 = 34.000$."
    },
    "subTopicSlug": "cepat-rambat-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Cepat Rambat Bunyi",
    "subTopic": "Cepat Rambat Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-bunyi-cepatrambat-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-cepatrambat",
    "category": "Cepat Rambat Bunyi",
    "difficulty": "mudah",
    "statement": "Sebuah batang rel baja memiliki modulus elastisitas Young $E = 2{,}0 \\times 10^{11}\\text{ N/m}^2$ dan massa jenis $\\rho = 8000\\text{ kg/m}^3$. Cepat rambat gelombang bunyi longitudinal di dalam batang baja tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2.500\\text{ m/s}$",
      "$4.000\\text{ m/s}$",
      "$5.000\\text{ m/s}$",
      "$6.250\\text{ m/s}$",
      "$25.000\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Cepat rambat gelombang longitudinal pada zat padat (batang logam) ditentukan oleh elastisitas Young ($E$) dan massa jenis bahannya ($\\rho$):<br>$$v = \\sqrt{\\frac{E}{\\rho}}$$",
      "steps": "1. Masukkan nilai modulus Young dan massa jenis:<br>$$v = \\sqrt{\\frac{2{,}0 \\times 10^{11}\\text{ N/m}^2}{8000\\text{ kg/m}^3}} = \\sqrt{\\frac{2{,}0 \\times 10^{11}}{8 \\times 10^3}} = \\sqrt{0{,}25 \\times 10^8} = \\sqrt{25 \\times 10^6}$$<br>2. Tarik akar kuadrat:<br>$$v = 5 \\times 10^3\\text{ m/s} = 5.000\\text{ m/s}$$",
      "pitfalls": "Siswa sering keliru menghitung pemangkatan $10^{11} / 10^3 = 10^8$, lalu menarik akar menjadi $10^3$ alih-alih $10^4$."
    },
    "subTopicSlug": "cepat-rambat-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Cepat Rambat Bunyi",
    "subTopic": "Cepat Rambat Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-bunyi-cepatrambat-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-cepatrambat",
    "category": "Cepat Rambat Bunyi",
    "difficulty": "mudah",
    "statement": "Suatu zat cair di dalam tangki memiliki modulus Bulk $B = 2{,}25 \\times 10^9\\text{ N/m}^2$ dan massa jenis $\\rho = 1000\\text{ kg/m}^3$. Cepat rambat gelombang bunyi di dalam zat cair tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$750\\text{ m/s}$",
      "$1.250\\text{ m/s}$",
      "$1.500\\text{ m/s}$",
      "$2.250\\text{ m/s}$",
      "$3.000\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada zat cair, hambatan terhadap kompresi diukur oleh modulus Bulk ($B$). Cepat rambat gelombang bunyi pada zat cair dirumuskan:<br>$$v = \\sqrt{\\frac{B}{\\rho}}$$",
      "steps": "1. Masukkan nilai modulus Bulk dan massa jenis zat cair:<br>$$v = \\sqrt{\\frac{2{,}25 \\times 10^9\\text{ N/m}^2}{1000\\text{ kg/m}^3}} = \\sqrt{2{,}25 \\times 10^6\\text{ m}^2\\text{/s}^2}$$<br>2. Tarik akar kuadrat:<br>$$v = 1{,}50 \\times 10^3\\text{ m/s} = 1.500\\text{ m/s}$$",
      "pitfalls": "Terkecoh salah menarik akar dari $2{,}25 \\times 10^6$ menjadi $2250\\text{ m/s}$ (opsi D) karena lupa bahwa $\\sqrt{2{,}25} = 1{,}5$."
    },
    "subTopicSlug": "cepat-rambat-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Cepat Rambat Bunyi",
    "subTopic": "Cepat Rambat Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-bunyi-cepatrambat-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-cepatrambat",
    "category": "Cepat Rambat Bunyi",
    "difficulty": "mudah",
    "statement": "Cepat rambat bunyi di dalam suatu gas ideal pada suhu mutlak $T_1 = 300\\text{ K}$ adalah $v_1$. Jika suhu gas tersebut dipanaskan secara perlahan hingga suhunya naik menjadi $T_2 = 1200\\text{ K}$, kelajuan perambatan bunyi di dalam gas tersebut akan menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{2} v_1$",
      "$\\sqrt{2} v_1$",
      "$2 v_1$",
      "$4 v_1$",
      "$8 v_1$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Berdasarkan rumus Laplace untuk gas ideal, cepat rambat bunyi berbanding lurus dengan akar suhu mutlak Kelvin ($T$):<br>$$v = \\sqrt{\\frac{\\gamma \\cdot R \\cdot T}{M}} \\implies v \\propto \\sqrt{T}$$Sehingga perbandingan kelajuan pada dua suhu mutlak adalah:<br>$$\\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}}$$",
      "steps": "1. Tuliskan rasio suhu mutlak:<br>$$\\frac{T_2}{T_1} = \\frac{1200\\text{ K}}{300\\text{ K}} = 4$$<br>2. Hitung rasio kelajuan bunyi:<br>$$\\frac{v_2}{v_1} = \\sqrt{4} = 2 \\implies v_2 = 2 v_1$$",
      "pitfalls": "Siswa sering menganggap hubungan linier $v \\propto T$ sehingga menjawab $4 v_1$ (opsi D) karena suhu naik 4 kali lipat, padahal hubungannya berbanding lurus dengan akar kuadrat suhu mutlak."
    },
    "subTopicSlug": "cepat-rambat-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Cepat Rambat Bunyi",
    "subTopic": "Cepat Rambat Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-bunyi-cepatrambat-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-cepatrambat",
    "category": "Cepat Rambat Bunyi",
    "difficulty": "mudah",
    "statement": "Urutan medium perambatan gelombang bunyi dari yang menghasilkan cepat rambat paling tinggi ke paling rendah pada kondisi suhu standar yang benar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Zat padat > Zat cair > Zat gas",
      "Zat gas > Zat cair > Zat padat",
      "Zat cair > Zat padat > Zat gas",
      "Zat padat > Zat gas > Zat cair",
      "Zat gas > Zat padat > Zat cair"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Cepat rambat bunyi bergantung pada gaya ikat antarmolekul (modulus elastisitas) dan kerapatan medium. Pada zat padat, partikel tersusun sangat rapat dan memiliki gaya ikat sangat kuat (modulus elastisitas sangat tinggi), sehingga transfer getaran mekanik berlangsung paling cepat ($v_{\\text{padat}} \\approx 5000\\text{ m/s}$). Pada zat cair kerapatan dan elastisitasnya sedang ($v_{\\text{cair}} \\approx 1500\\text{ m/s}$), sedangkan pada gas ikatan antarmolekul sangat renggang ($v_{\\text{gas}} \\approx 340\\text{ m/s}$).",
      "steps": "1. Urutan kekuatan ikatan dan cepat rambat: Padat > Cair > Gas.<br>2. Pilihan yang benar adalah opsi A.",
      "pitfalls": "Terkecoh mengira massa jenis yang lebih besar membuat gelombang lebih lambat (seperti rumus $v = \\sqrt{E/\\rho}$), tanpa menyadari bahwa modulus elastisitas ($E$) zat padat bernilai jutaan kali lebih besar daripada modulus zat gas."
    },
    "subTopicSlug": "cepat-rambat-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Cepat Rambat Bunyi",
    "subTopic": "Cepat Rambat Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-bunyi-cepatrambat-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-cepatrambat",
    "category": "Cepat Rambat Bunyi",
    "difficulty": "sedang",
    "statement": "Dua buah tabung gas identik masing-masing berisi gas hidrogen ($\text{H}_2$, massa molar $M_1 = 2\\text{ g/mol}$) dan gas oksigen ($\text{O}_2$, massa molar $M_2 = 32\\text{ g/mol}$). Kedua gas merupakan gas diatomik dengan konstanta Laplace yang sama ($gamma_1 = gamma_2 = 1{,}4$) dan berada pada suhu mutlak yang sama. Perbandingan cepat rambat gelombang bunyi di dalam gas hidrogen terhadap cepat rambat gelombang bunyi di dalam gas oksigen ($v_{\\text{H}_2} : v_{\\text{O}_2}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 4$",
      "$1 : 16$",
      "$2 : 1$",
      "$4 : 1$",
      "$16 : 1$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Menurut persamaan Laplace untuk gas ideal, cepat rambat bunyi dirumuskan:<br>$$v = \\sqrt{\\frac{\\gamma \\cdot R \\cdot T}{M}}$$Pada suhu ($T$) dan tetapan Laplace ($\\gamma$) yang sama, cepat rambat bunyi berbanding terbalik dengan akar massa molar gas:<br>$$\\frac{v_1}{v_2} = \\sqrt{\\frac{M_2}{M_1}}$$",
      "steps": "1. Identifikasi perbandingan massa molar:<br>• $M_1 (\\text{H}_2) = 2\\text{ g/mol}$<br>• $M_2 (\\text{O}_2) = 32\\text{ g/mol}$<br>2. Hitung perbandingan kelajuan:<br>$$\\frac{v_{\\text{H}_2}}{v_{\\text{O}_2}} = \\sqrt{\\frac{32\\text{ g/mol}}{2\\text{ g/mol}}} = \\sqrt{16} = 4$$<br>3. Maka perbandingannya adalah $4 : 1$.",
      "pitfalls": "Siswa sering menganggap perbandingan berbanding lurus sehingga memilih $1 : 4$ (opsi A) atau lupa menarik akar kuadrat sehingga memilih $16 : 1$ (opsi E)."
    },
    "subTopicSlug": "cepat-rambat-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Cepat Rambat Bunyi",
    "subTopic": "Cepat Rambat Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-bunyi-cepatrambat-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-cepatrambat",
    "category": "Cepat Rambat Bunyi",
    "difficulty": "sedang",
    "statement": "Sebuah kapal survei oseanografi memancarkan pulsa gelombang ultrasonik secara vertikal ke dasar laut untuk mengukur kedalaman palung. Pulsa pantulan gema dari dasar laut terdeteksi kembali oleh hidrofon kapal setelah selang waktu $\\Delta t = 2{,}4\\text{ sekon}$. Jika air laut memiliki modulus Bulk $B = 2{,}304 \\times 10^9\\text{ N/m}^2$ dan massa jenis $\\rho = 1024\\text{ kg/m}^3$, kedalaman palung laut di bawah kapal tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$900\\text{ meter}$",
      "$1.500\\text{ meter}$",
      "$1.800\\text{ meter}$",
      "$2.400\\text{ meter}$",
      "$3.600\\text{ meter}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "1) Cepat rambat gelombang bunyi pada fluida cair dihitung dari modulus Bulk:<br>$$v = \\sqrt{\\frac{B}{\\rho}}$$<br>2) Jarak kedalaman palung laut dari pantulan gema (sonar):<br>$$d = \\frac{v \\cdot \\Delta t}{2}$$Faktor pembagi 2 mencerminkan perjalanan bolak-balik pulsa bunyi dari permukaan ke dasar lalu kembali ke permukaan.",
      "steps": "1. Hitung cepat rambat bunyi di air laut:<br>$$v = \\sqrt{\\frac{2{,}304 \\times 10^9\\text{ N/m}^2}{1024\\text{ kg/m}^3}} = \\sqrt{2{,}25 \\times 10^6\\text{ m}^2\\text{/s}^2} = 1500\\text{ m/s}$$<br>2. Hitung kedalaman laut:<br>$$d = \\frac{1500\\text{ m/s} \\times 2{,}4\\text{ s}}{2} = 1500 \\times 1{,}2 = 1.800\\text{ meter}$$",
      "pitfalls": "Lupa membagi dengan faktor 2 sehingga menghasilkan jarak bolak-balik $3.600\\text{ meter}$ (opsi E)."
    },
    "subTopicSlug": "cepat-rambat-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Cepat Rambat Bunyi",
    "subTopic": "Cepat Rambat Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-bunyi-cepatrambat-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-cepatrambat",
    "category": "Cepat Rambat Bunyi",
    "difficulty": "sedang",
    "statement": "Seorang teknisi memukul sebuah rel kereta api dari baja di suatu lokasi. Seorang pengamat yang berada sejauh $L$ di sepanjang rel tersebut mendengar dua bunyi dentuman secara terpisah dengan selang waktu $\\Delta t = 1{,}4\\text{ sekon}$. Bunyi pertama merambat melalui rel baja dan bunyi kedua merambat melalui udara. Jika cepat rambat bunyi di dalam rel baja adalah $v_b = 5100\\text{ m/s}$ dan cepat rambat bunyi di udara adalah $v_u = 340\\text{ m/s}$, jarak $L$ antara lokasi pemukulan rel dan pengamat adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$255\\text{ meter}$",
      "$340\\text{ meter}$",
      "$510\\text{ meter}$",
      "$680\\text{ meter}$",
      "$1.020\\text{ meter}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gelombang bunyi merambat pada jarak yang sama $L$ melalui dua medium berbeda. Karena $v_b > v_u$, waktu tempuh melalui baja lebih singkat daripada melalui udara. Selisih waktu kedatangan kedua bunyi adalah:<br>$$\\Delta t = t_u - t_b = \\frac{L}{v_u} - \\frac{L}{v_b} = L \\left(\\frac{1}{v_u} - \\frac{1}{v_b}\\right)$$",
      "steps": "1. Samakan penyebut persamaan selisih waktu:<br>$$\\frac{1}{v_u} - \\frac{1}{v_b} = \\frac{1}{340} - \\frac{1}{5100} = \\frac{15 - 1}{5100} = \\frac{14}{5100}\\text{ s/m}$$<br>2. Substitusikan $\\Delta t = 1{,}4\\text{ s}$ dan selesaikan untuk $L$:<br>$$1{,}4 = L \\cdot \\frac{14}{5100} \\implies L = 1{,}4 \\times \\frac{5100}{14} = 0{,}1 \\times 5100 = 510\\text{ meter}$$",
      "pitfalls": "Siswa sering mengabaikan waktu tempuh pada baja dan hanya mengalikan $340 \\times 1{,}4 = 476\\text{ m}$, mengasumsikan rambatan pada baja terjadi seketika tanpa jeda."
    },
    "subTopicSlug": "cepat-rambat-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Cepat Rambat Bunyi",
    "subTopic": "Cepat Rambat Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-bunyi-cepatrambat-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-cepatrambat",
    "category": "Cepat Rambat Bunyi",
    "difficulty": "sedang",
    "statement": "Pada suatu ruang uji akustik bertekanan atmosfer tetap, kelajuan gelombang bunyi di dalam gas ideal pada suhu $T_1 = -23^\\circ\\text{C}$ adalah $v_1$. Agar cepat rambat gelombang bunyi di dalam gas tersebut meningkat sebesar $20\\%$ ($v_2 = 1{,}20 v_1$), maka suhu gas di dalam ruangan tersebut harus dinaikkan menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$47^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$87^\\circ\\text{C}$",
      "$114^\\circ\\text{C}$",
      "$127^\\circ\\text{C}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Cepat rambat bunyi pada gas ideal berbanding lurus dengan akar kuadrat suhu mutlak Kelvin:<br>$$v \\propto \\sqrt{T} \\implies \\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}} \\iff T_2 = T_1 \\cdot \\left(\\frac{v_2}{v_1}\\right)^2$$Perhitungan termodinamika mutlak wajib menggunakan satuan Kelvin ($T = T_C + 273$).",
      "steps": "1. Konversikan suhu awal ke Kelvin:<br>$$T_1 = -23^\\circ\\text{C} + 273 = 250\\text{ K}$$<br>2. Rasio kenaikan kelajuan adalah $v_2 / v_1 = 1{,}20$:<br>$$\\left(\\frac{v_2}{v_1}\\right)^2 = (1{,}20)^2 = 1{,}44$$<br>3. Hitung suhu mutlak akhir ($T_2$):<br>$$T_2 = 250\\text{ K} \\times 1{,}44 = 360\\text{ K}$$<br>4. Konversikan kembali ke skala Celsius:<br>$$T_{C2} = 360 - 273 = 87^\\circ\\text{C}$$",
      "pitfalls": "Kesalahan fatal adalah menggunakan skala Celsius langsung tanpa mengonversi ke Kelvin: $-23 \\times 1{,}44 = -33{,}1^\\circ\\text{C}$."
    },
    "subTopicSlug": "cepat-rambat-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Cepat Rambat Bunyi",
    "subTopic": "Cepat Rambat Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-bunyi-cepatrambat-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-cepatrambat",
    "category": "Cepat Rambat Bunyi",
    "difficulty": "sedang",
    "statement": "Pada alat tabung Kundt, sebatang logam kuningan dengan panjang $L = 100\\text{ cm}$ dijepit tepat di titik tengahnya. Ketika batang digetarkan secara longitudinal pada nada dasarnya, gelombang bunyi merambat ke dalam tabung kaca berisi gas udara dan membentuk pola gelombang stasioner pada serbuk gabus ringan. Jarak antara dua simpul serbuk gabus yang berdekatan di dalam tabung terukur sebesar $\\Delta x = 8{,}5\\text{ cm}$. Jika cepat rambat bunyi di dalam gas udara adalah $v_{\\text{udara}} = 340\\text{ m/s}$, cepat rambat gelombang bunyi longitudinal di dalam batang logam kuningan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1.700\\text{ m/s}$",
      "$2.000\\text{ m/s}$",
      "$3.400\\text{ m/s}$",
      "$4.000\\text{ m/s}$",
      "$5.100\\text{ m/s}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "1) Batang logam yang dijepit di tengah berosilasi pada nada dasar dengan simpul di tengah dan perut di kedua ujungnya, sehingga panjang batang adalah setengah panjang gelombang:<br>$$L = \\frac{1}{2}\\lambda_{\\text{batang}} \\implies \\lambda_{\\text{batang}} = 2L$$<br>2) Di dalam tabung gas, jarak antara dua simpul serbuk gabus berurutan adalah setengah panjang gelombang udara:<br>$$\\Delta x = \\frac{1}{2}\\lambda_{\\text{udara}} \\implies \\lambda_{\\text{udara}} = 2\\Delta x$$<br>3) Karena frekuensi gelombang pada batang dan gas sama ($f_{\\text{batang}} = f_{\\text{udara}}$):<br>$$\\frac{v_{\\text{batang}}}{\\lambda_{\\text{batang}}} = \\frac{v_{\\text{udara}}}{\\lambda_{\\text{udara}}} \\implies v_{\\text{batang}} = v_{\\text{udara}} \\cdot \\frac{L}{\\Delta x}$$",
      "steps": "1. Masukkan nilai yang diketahui:<br>• $L = 100\\text{ cm}$<br>• $\\Delta x = 8{,}5\\text{ cm}$<br>• $v_{\\text{udara}} = 340\\text{ m/s}$<br>2. Hitung cepat rambat bunyi di batang kuningan:<br>$$v_{\\text{batang}} = 340\\text{ m/s} \\times \\frac{100\\text{ cm}}{8{,}5\\text{ cm}} = 340 \\times \\frac{1000}{85} = 40 \\times 100 = 4.000\\text{ m/s}$$",
      "pitfalls": "Siswa sering mengira $\\lambda_{\\text{batang}} = L$ sehingga menghasilkan nilai setengahnya ($2.000\\text{ m/s}$, opsi B)."
    },
    "subTopicSlug": "cepat-rambat-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Cepat Rambat Bunyi",
    "subTopic": "Cepat Rambat Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mudah-fis-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-cepatrambat",
    "category": "Cepat Rambat Bunyi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu sumber bunyi menghasilkan gelombang bunyi dengan frekuensi $680\\text{ Hz}$. Jika cepat rambat bunyi di udara pada saat itu adalah $340\\text{ m/s}$, maka panjang gelombang bunyi tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}25\\text{ meter}$",
      "$0{,}50\\text{ meter}$",
      "$1{,}00\\text{ meter}$",
      "$2{,}00\\text{ meter}$",
      "$4{,}00\\text{ meter}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Persamaan Dasar Cepat Rambat Gelombang:</strong><br>\n          $$v = \\lambda f \\implies \\lambda = \\frac{v}{f}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$\\lambda = \\frac{340\\text{ m/s}}{680\\text{ Hz}} = 0{,}5\\text{ meter}$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Jangan membalik pembagian menjadi $f/v = 2\\text{ m}$. Rumus yang benar adalah $v/f$.\n        </div>\n      "
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Cepat Rambat Bunyi",
    "subTopic": "Cepat Rambat Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "cepat-rambat-bunyi"
  },
  {
    "id": "drill2-bun-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-cepatrambat",
    "category": "Cepat Rambat Bunyi pada Zat Padat (Modulus Young)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Kelajuan rambat gelombang bunyi longitudinal di dalam sebuah rel baja bergantung pada Modulus Elastisitas Young ($E$) dan massa jenis bajanya ($\\rho$). Jika Modulus Young baja adalah $E = 2 \\times 10^{11}\\text{ N/m}^2$ dan massa jenisnya $\\rho = 8000\\text{ kg/m}^3$, kelajuan rambat bunyi di dalam rel baja tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5000\\text{ m/s}$",
      "$2500\\text{ m/s}$",
      "$4000\\text{ m/s}$",
      "$1000\\text{ m/s}$",
      "$25000\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kelajuan Gelombang Bunyi pada Zat Padat:</strong><br>$$v = \\sqrt{\\frac{E}{\\rho}}$$</div>",
      "steps": "<ol><li>Hitung pembagian di bawah akar: $\\frac{E}{\\rho} = \\frac{2 \\times 10^{11}}{8 \\times 10^3} = \\frac{2}{8} \\times 10^8 = 0{,}25 \\times 10^8 = 25 \\times 10^6$.</li><li>Tarik akar kuadrat: $v = \\sqrt{25 \\times 10^6} = 5 \\times 10^3 = 5000\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Karakteristik Gelombang Mekanik:</strong> Bunyi merambat paling cepat pada zat padat ($v \\approx 5000\\text{ m/s}$), lebih lambat pada zat cair ($v \\approx 1500\\text{ m/s}$), dan paling lambat pada gas/udara ($v \\approx 340\\text{ m/s}$).</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Cepat Rambat Bunyi",
    "subTopic": "Cepat Rambat Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "cepat-rambat-bunyi"
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
