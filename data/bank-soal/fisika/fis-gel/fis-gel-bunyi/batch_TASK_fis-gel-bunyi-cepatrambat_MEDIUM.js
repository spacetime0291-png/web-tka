/**
 * Batch Task: TASK_fis-gel-bunyi-cepatrambat_MEDIUM
 * SubTopic: Cepat Rambat Bunyi (fis-gel-bunyi-cepatrambat)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-gel-bunyi-cepatrambat-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-cepatrambat",
    category: "Cepat Rambat Bunyi",
    difficulty: "sedang",
    statement: "Dua buah tabung gas identik masing-masing berisi gas hidrogen ($\text{H}_2$, massa molar $M_1 = 2\\text{ g/mol}$) dan gas oksigen ($\text{O}_2$, massa molar $M_2 = 32\\text{ g/mol}$). Kedua gas merupakan gas diatomik dengan konstanta Laplace yang sama ($\gamma_1 = \gamma_2 = 1{,}4$) dan berada pada suhu mutlak yang sama. Perbandingan cepat rambat gelombang bunyi di dalam gas hidrogen terhadap cepat rambat gelombang bunyi di dalam gas oksigen ($v_{\\text{H}_2} : v_{\\text{O}_2}$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 : 4$",
      "$1 : 16$",
      "$2 : 1$",
      "$4 : 1$",
      "$16 : 1$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Menurut persamaan Laplace untuk gas ideal, cepat rambat bunyi dirumuskan:<br>$$v = \\sqrt{\\frac{\\gamma \\cdot R \\cdot T}{M}}$$Pada suhu ($T$) dan tetapan Laplace ($\\gamma$) yang sama, cepat rambat bunyi berbanding terbalik dengan akar massa molar gas:<br>$$\\frac{v_1}{v_2} = \\sqrt{\\frac{M_2}{M_1}}$$",
      steps: "1. Identifikasi perbandingan massa molar:<br>• $M_1 (\\text{H}_2) = 2\\text{ g/mol}$<br>• $M_2 (\\text{O}_2) = 32\\text{ g/mol}$<br>2. Hitung perbandingan kelajuan:<br>$$\\frac{v_{\\text{H}_2}}{v_{\\text{O}_2}} = \\sqrt{\\frac{32\\text{ g/mol}}{2\\text{ g/mol}}} = \\sqrt{16} = 4$$<br>3. Maka perbandingannya adalah $4 : 1$.",
      pitfalls: "Siswa sering menganggap perbandingan berbanding lurus sehingga memilih $1 : 4$ (opsi A) atau lupa menarik akar kuadrat sehingga memilih $16 : 1$ (opsi E)."
    }
  },
  {
    id: "fis-gel-bunyi-cepatrambat-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-cepatrambat",
    category: "Cepat Rambat Bunyi",
    difficulty: "sedang",
    statement: "Sebuah kapal survei oseanografi memancarkan pulsa gelombang ultrasonik secara vertikal ke dasar laut untuk mengukur kedalaman palung. Pulsa pantulan gema dari dasar laut terdeteksi kembali oleh hidrofon kapal setelah selang waktu $\\Delta t = 2{,}4\\text{ sekon}$. Jika air laut memiliki modulus Bulk $B = 2{,}304 \\times 10^9\\text{ N/m}^2$ dan massa jenis $\\rho = 1024\\text{ kg/m}^3$, kedalaman palung laut di bawah kapal tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$900\\text{ meter}$",
      "$1.500\\text{ meter}$",
      "$1.800\\text{ meter}$",
      "$2.400\\text{ meter}$",
      "$3.600\\text{ meter}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "1) Cepat rambat gelombang bunyi pada fluida cair dihitung dari modulus Bulk:<br>$$v = \\sqrt{\\frac{B}{\\rho}}$$<br>2) Jarak kedalaman palung laut dari pantulan gema (sonar):<br>$$d = \\frac{v \\cdot \\Delta t}{2}$$Faktor pembagi 2 mencerminkan perjalanan bolak-balik pulsa bunyi dari permukaan ke dasar lalu kembali ke permukaan.",
      steps: "1. Hitung cepat rambat bunyi di air laut:<br>$$v = \\sqrt{\\frac{2{,}304 \\times 10^9\\text{ N/m}^2}{1024\\text{ kg/m}^3}} = \\sqrt{2{,}25 \\times 10^6\\text{ m}^2\\text{/s}^2} = 1500\\text{ m/s}$$<br>2. Hitung kedalaman laut:<br>$$d = \\frac{1500\\text{ m/s} \\times 2{,}4\\text{ s}}{2} = 1500 \\times 1{,}2 = 1.800\\text{ meter}$$",
      pitfalls: "Lupa membagi dengan faktor 2 sehingga menghasilkan jarak bolak-balik $3.600\\text{ meter}$ (opsi E)."
    }
  },
  {
    id: "fis-gel-bunyi-cepatrambat-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-cepatrambat",
    category: "Cepat Rambat Bunyi",
    difficulty: "sedang",
    statement: "Seorang teknisi memukul sebuah rel kereta api dari baja di suatu lokasi. Seorang pengamat yang berada sejauh $L$ di sepanjang rel tersebut mendengar dua bunyi dentuman secara terpisah dengan selang waktu $\\Delta t = 1{,}4\\text{ sekon}$. Bunyi pertama merambat melalui rel baja dan bunyi kedua merambat melalui udara. Jika cepat rambat bunyi di dalam rel baja adalah $v_b = 5100\\text{ m/s}$ dan cepat rambat bunyi di udara adalah $v_u = 340\\text{ m/s}$, jarak $L$ antara lokasi pemukulan rel dan pengamat adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$255\\text{ meter}$",
      "$340\\text{ meter}$",
      "$510\\text{ meter}$",
      "$680\\text{ meter}$",
      "$1.020\\text{ meter}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gelombang bunyi merambat pada jarak yang sama $L$ melalui dua medium berbeda. Karena $v_b > v_u$, waktu tempuh melalui baja lebih singkat daripada melalui udara. Selisih waktu kedatangan kedua bunyi adalah:<br>$$\\Delta t = t_u - t_b = \\frac{L}{v_u} - \\frac{L}{v_b} = L \\left(\\frac{1}{v_u} - \\frac{1}{v_b}\\right)$$",
      steps: "1. Samakan penyebut persamaan selisih waktu:<br>$$\\frac{1}{v_u} - \\frac{1}{v_b} = \\frac{1}{340} - \\frac{1}{5100} = \\frac{15 - 1}{5100} = \\frac{14}{5100}\\text{ s/m}$$<br>2. Substitusikan $\\Delta t = 1{,}4\\text{ s}$ dan selesaikan untuk $L$:<br>$$1{,}4 = L \\cdot \\frac{14}{5100} \\implies L = 1{,}4 \\times \\frac{5100}{14} = 0{,}1 \\times 5100 = 510\\text{ meter}$$",
      pitfalls: "Siswa sering mengabaikan waktu tempuh pada baja dan hanya mengalikan $340 \\times 1{,}4 = 476\\text{ m}$, mengasumsikan rambatan pada baja terjadi seketika tanpa jeda."
    }
  },
  {
    id: "fis-gel-bunyi-cepatrambat-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-cepatrambat",
    category: "Cepat Rambat Bunyi",
    difficulty: "sedang",
    statement: "Pada suatu ruang uji akustik bertekanan atmosfer tetap, kelajuan gelombang bunyi di dalam gas ideal pada suhu $T_1 = -23^\\circ\\text{C}$ adalah $v_1$. Agar cepat rambat gelombang bunyi di dalam gas tersebut meningkat sebesar $20\\%$ ($v_2 = 1{,}20 v_1$), maka suhu gas di dalam ruangan tersebut harus dinaikkan menjadi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$47^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$87^\\circ\\text{C}$",
      "$114^\\circ\\text{C}$",
      "$127^\\circ\\text{C}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Cepat rambat bunyi pada gas ideal berbanding lurus dengan akar kuadrat suhu mutlak Kelvin:<br>$$v \\propto \\sqrt{T} \\implies \\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}} \\iff T_2 = T_1 \\cdot \\left(\\frac{v_2}{v_1}\\right)^2$$Perhitungan termodinamika mutlak wajib menggunakan satuan Kelvin ($T = T_C + 273$).",
      steps: "1. Konversikan suhu awal ke Kelvin:<br>$$T_1 = -23^\\circ\\text{C} + 273 = 250\\text{ K}$$<br>2. Rasio kenaikan kelajuan adalah $v_2 / v_1 = 1{,}20$:<br>$$\\left(\\frac{v_2}{v_1}\\right)^2 = (1{,}20)^2 = 1{,}44$$<br>3. Hitung suhu mutlak akhir ($T_2$):<br>$$T_2 = 250\\text{ K} \\times 1{,}44 = 360\\text{ K}$$<br>4. Konversikan kembali ke skala Celsius:<br>$$T_{C2} = 360 - 273 = 87^\\circ\\text{C}$$",
      pitfalls: "Kesalahan fatal adalah menggunakan skala Celsius langsung tanpa mengonversi ke Kelvin: $-23 \\times 1{,}44 = -33{,}1^\\circ\\text{C}$."
    }
  },
  {
    id: "fis-gel-bunyi-cepatrambat-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-cepatrambat",
    category: "Cepat Rambat Bunyi",
    difficulty: "sedang",
    statement: "Pada alat tabung Kundt, sebatang logam kuningan dengan panjang $L = 100\\text{ cm}$ dijepit tepat di titik tengahnya. Ketika batang digetarkan secara longitudinal pada nada dasarnya, gelombang bunyi merambat ke dalam tabung kaca berisi gas udara dan membentuk pola gelombang stasioner pada serbuk gabus ringan. Jarak antara dua simpul serbuk gabus yang berdekatan di dalam tabung terukur sebesar $\\Delta x = 8{,}5\\text{ cm}$. Jika cepat rambat bunyi di dalam gas udara adalah $v_{\\text{udara}} = 340\\text{ m/s}$, cepat rambat gelombang bunyi longitudinal di dalam batang logam kuningan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1.700\\text{ m/s}$",
      "$2.000\\text{ m/s}$",
      "$3.400\\text{ m/s}$",
      "$4.000\\text{ m/s}$",
      "$5.100\\text{ m/s}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "1) Batang logam yang dijepit di tengah berosilasi pada nada dasar dengan simpul di tengah dan perut di kedua ujungnya, sehingga panjang batang adalah setengah panjang gelombang:<br>$$L = \\frac{1}{2}\\lambda_{\\text{batang}} \\implies \\lambda_{\\text{batang}} = 2L$$<br>2) Di dalam tabung gas, jarak antara dua simpul serbuk gabus berurutan adalah setengah panjang gelombang udara:<br>$$\\Delta x = \\frac{1}{2}\\lambda_{\\text{udara}} \\implies \\lambda_{\\text{udara}} = 2\\Delta x$$<br>3) Karena frekuensi gelombang pada batang dan gas sama ($f_{\\text{batang}} = f_{\\text{udara}}$):<br>$$\\frac{v_{\\text{batang}}}{\\lambda_{\\text{batang}}} = \\frac{v_{\\text{udara}}}{\\lambda_{\\text{udara}}} \\implies v_{\\text{batang}} = v_{\\text{udara}} \\cdot \\frac{L}{\\Delta x}$$",
      steps: "1. Masukkan nilai yang diketahui:<br>• $L = 100\\text{ cm}$<br>• $\\Delta x = 8{,}5\\text{ cm}$<br>• $v_{\\text{udara}} = 340\\text{ m/s}$<br>2. Hitung cepat rambat bunyi di batang kuningan:<br>$$v_{\\text{batang}} = 340\\text{ m/s} \\times \\frac{100\\text{ cm}}{8{,}5\\text{ cm}} = 340 \\times \\frac{1000}{85} = 40 \\times 100 = 4.000\\text{ m/s}$$",
      pitfalls: "Siswa sering mengira $\\lambda_{\\text{batang}} = L$ sehingga menghasilkan nilai setengahnya ($2.000\\text{ m/s}$, opsi B)."
    }
  }
];
