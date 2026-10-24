/**
 * Batch Task: TASK_fis-gel-bunyi-dawai_MEDIUM
 * SubTopic: Dawai (Senar) (fis-gel-bunyi-dawai)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-gel-bunyi-dawai-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-dawai",
    category: "Dawai (Senar)",
    difficulty: "sedang",
    statement: "Dua buah kawat dawai A dan B terbuat dari bahan logam paduan yang sama (massa jenis $\\rho_A = \\rho_B$) serta memiliki panjang kawat yang persis sama ($L_A = L_B$). Namun kawat dawai A memiliki diameter penampang dua kali diameter kawat dawai B ($d_A = 2 d_B$). Agar kedua dawai tersebut menghasilkan frekuensi nada dasar yang persis sama saat dipetik ($f_{0A} = f_{0B}$), maka perbandingan gaya tegangan yang harus diberikan pada kawat A dan kawat B ($F_A : F_B$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 : 4$",
      "$1 : 2$",
      "$2 : 1$",
      "$4 : 1$",
      "$16 : 1$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Massa linier dawai ($\\mu$) berkaitan dengan massa jenis logam ($\\rho$) dan diameter penampang ($d$):<br>$$\\mu = \\frac{m}{L} = \\rho \\cdot A = \\rho \\cdot \\left(\\frac{1}{4}\\pi d^2\\right)$$Frekuensi nada dasar dawai menurut Hukum Mersenne adalah:<br>$$f_0 = \\frac{1}{2L}\\sqrt{\\frac{F}{\\mu}} = \\frac{1}{2L}\\sqrt{\\frac{F}{\\rho \\cdot \\frac{1}{4}\\pi d^2}} = \\frac{1}{\\pi L d}\\sqrt{\\frac{F}{\\rho}}$$<br>Sehingga frekuensi nada dasar berbanding lurus dengan $\\frac{\\sqrt{F}}{d}$.",
      steps: "1. Syarat frekuensi nada dasar sama ($f_{0A} = f_{0B}$):<br>$$\\frac{\\sqrt{F_A}}{d_A} = \\frac{\\sqrt{F_B}}{d_B} \\implies \\frac{\\sqrt{F_A}}{\\sqrt{F_B}} = \\frac{d_A}{d_B}$$<br>2. Masukkan perbandingan diameter $d_A / d_B = 2$:<br>$$\\sqrt{\\frac{F_A}{F_B}} = 2 \\implies \\frac{F_A}{F_B} = 2^2 = 4$$<br>3. Maka perbandingan gaya tegangannya adalah $4 : 1$.",
      pitfalls: "Siswa sering mengira perbandingannya sebanding linier dengan diameter sehingga menjawab $2 : 1$ (opsi C), lupa bahwa luas penampang dan massa linier sebanding dengan kuadrat diameter."
    }
  },
  {
    id: "fis-gel-bunyi-dawai-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-dawai",
    category: "Dawai (Senar)",
    difficulty: "sedang",
    statement: "Sebuah dawai yang memiliki panjang $L_d = 75\\text{ cm}$ digetarkan sehingga menghasilkan nada atas kedua. Frekuensi nada atas kedua dawai tersebut beresonansi tepat sama dengan frekuensi nada dasar sebuah pipa organa terbuka yang memiliki panjang kolom udara $L_p = 50\\text{ cm}$. Jika cepat rambat gelombang bunyi di udara adalah $v_{\\text{udara}} = 340\\text{ m/s}$, maka besar cepat rambat gelombang transversal pada dawai tersebut ($v_d$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$85\\text{ m/s}$",
      "$113\\text{ m/s}$",
      "$170\\text{ m/s}$",
      "$255\\text{ m/s}$",
      "$340\\text{ m/s}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "1) Frekuensi nada dasar pipa organa terbuka:<br>$$f_{p0} = \\frac{v_{\\text{udara}}}{2 L_p}$$<br>2) Frekuensi nada atas kedua dawai ($n = 2$):<br>$$f_{d2} = 3 f_{d0} = 3 \\cdot \\frac{v_d}{2 L_d}$$<br>3) Kondisi resonansi: $f_{d2} = f_{p0}$.",
      steps: "1. Hitung frekuensi nada dasar pipa organa terbuka:<br>$$f_{p0} = \\frac{340\\text{ m/s}}{2 \\times 0{,}50\\text{ m}} = 340\\text{ Hz}$$<br>2. Samakan dengan frekuensi nada atas kedua dawai ($L_d = 0{,}75\\text{ m}$):<br>$$3 \\cdot \\frac{v_d}{2 \\times 0{,}75\\text{ m}} = 340\\text{ Hz}$$<br>$$3 \\cdot \\frac{v_d}{1{,}50\\text{ m}} = 340 \\implies 2 v_d = 340 \\implies v_d = 170\\text{ m/s}$$",
      pitfalls: "Terkecoh salah menentukan harmonik: nada atas kedua dawai adalah harmonik ketiga ($n = 2$, kelipatan 3), bukan kelipatan 2."
    }
  },
  {
    id: "fis-gel-bunyi-dawai-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-dawai",
    category: "Dawai (Senar)",
    difficulty: "sedang",
    statement: "Pada percobaan Melde, seutas dawai dengan panjang $L_1 = 120\\text{ cm}$ ditegangkan oleh beban gantung bermassa $M_1 = 400\\text{ gram}$. Ketika vibrator digetarkan dengan frekuensi tetap, pada dawai terbentuk $4$ gelombang penuh (8 simpul antara). Jika dawai tersebut dipendekkan menjadi $L_2 = 90\\text{ cm}$ dan digetarkan dengan vibrator yang sama, massa beban gantung ($M_2$) yang harus dipasang agar terbentuk $2$ gelombang penuh pada dawai adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$400\\text{ gram}$",
      "$600\\text{ gram}$",
      "$800\\text{ gram}$",
      "$900\\text{ gram}$",
      "$1.200\\text{ gram}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Panjang gelombang dinyatakan sebagai panjang kawat dibagi jumlah gelombang penuh yang terbentuk ($\\lambda = \\frac{L}{n}$). Karena frekuensi vibrator konstan ($f$), cepat rambat gelombang berbanding lurus dengan panjang gelombang:<br>$$v = \\lambda \\cdot f \\implies \\frac{v_2}{v_1} = \\frac{\\lambda_2}{\\lambda_1}$$Menurut Hukum Melde, $v = \\sqrt{\\frac{M g}{\\mu}}$, sehingga $\\frac{M_2}{M_1} = \\left(\\frac{\\lambda_2}{\\lambda_1}\\right)^2$.",
      steps: "1. Hitung panjang gelombang pada kondisi pertama ($L_1 = 120\\text{ cm}, n_1 = 4$):<br>$$\\lambda_1 = \\frac{120\\text{ cm}}{4} = 30\\text{ cm}$$<br>2. Hitung panjang gelombang pada kondisi kedua ($L_2 = 90\\text{ cm}, n_2 = 2$):<br>$$\\lambda_2 = \\frac{90\\text{ cm}}{2} = 45\\text{ cm}$$<br>3. Hitung rasio panjang gelombang:<br>$$\\frac{\\lambda_2}{\\lambda_1} = \\frac{45}{30} = 1{,}5$$<br>4. Hitung massa beban $M_2$:<br>$$M_2 = M_1 \\cdot (1{,}5)^2 = 400\\text{ g} \\times 2{,}25 = 900\\text{ gram}$$",
      pitfalls: "Siswa sering mengabaikan hubungan kuadrat massa terhadap cepat rambat gelombang dan hanya mengalikan secara linier ($400 \\times 1{,}5 = 600\\text{ gram}$, opsi B)."
    }
  },
  {
    id: "fis-gel-bunyi-dawai-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-dawai",
    category: "Dawai (Senar)",
    difficulty: "sedang",
    statement: "Sebuah dawai gitar dengan panjang bebas $L = 60\\text{ cm}$ menghasilkan nada dasar berfrekuensi $f_0 = 200\\text{ Hz}$ ketika dipetik bebas. Seorang gitaris ingin menaikkan nada getaran dawai tersebut menjadi $f_0' = 250\\text{ Hz}$ tanpa mengubah tegangan senar melalui penekanan fret. Jarak posisi penekanan fret diukur dari ujung atas batas dawai semula ($\\Delta L$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$8\\text{ cm}$",
      "$10\\text{ cm}$",
      "$12\\text{ cm}$",
      "$15\\text{ cm}$",
      "$48\\text{ cm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada tegangan dawai yang tetap, kelajuan gelombang konstan, sehingga frekuensi nada dasar berbanding terbalik dengan panjang dawai aktif yang bergetar:<br>$$f_0 \\propto \\frac{1}{L} \\implies f_0 \\cdot L = f_0' \\cdot L'$$Panjang pemendekan fret diukur dari ujung atas adalah $\\Delta L = L - L'$.",
      steps: "1. Hitung panjang dawai aktif yang baru ($L'$):<br>$$L' = L \\cdot \\frac{f_0}{f_0'} = 60\\text{ cm} \\times \\frac{200\\text{ Hz}}{250\\text{ Hz}} = 60 \\times 0{,}8 = 48\\text{ cm}$$<br>2. Hitung jarak titik penekanan jari dari ujung atas dawai:<br>$$\\Delta L = L - L' = 60\\text{ cm} - 48\\text{ cm} = 12\\text{ cm}$$",
      pitfalls: "Terkecoh langsung memilih $48\\text{ cm}$ (opsi E), padahal $48\\text{ cm}$ adalah sisa panjang dawai yang bergetar, sedangkan yang ditanyakan adalah jarak letak fret penekanan dari ujung atas dawai ($60 - 48 = 12\\text{ cm}$)."
    }
  },
  {
    id: "fis-gel-bunyi-dawai-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-dawai",
    category: "Dawai (Senar)",
    difficulty: "sedang",
    statement: "Sebuah gelombang stasioner transversal pada dawai yang terikat pada kedua ujungnya dinyatakan oleh persamaan matematis:<br>$$y = 0{,}08 \\sin(5\\pi x) \\cos(40\\pi t)$$di mana $x$ dan $y$ dalam meter dan $t$ dalam sekon. Cepat rambat gelombang transversal pembentuknya ($v$) dan jarak simpul ke-3 dari titik ujung pantul ($x = 0$) berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ m/s}$ dan $0{,}2\\text{ m}$",
      "$8\\text{ m/s}$ dan $0{,}2\\text{ m}$",
      "$8\\text{ m/s}$ dan $0{,}4\\text{ m}$",
      "$16\\text{ m/s}$ dan $0{,}4\\text{ m}$",
      "$8\\text{ m/s}$ dan $0{,}6\\text{ m}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Berdasarkan persamaan gelombang stasioner ujung terikat $y = 2A \\sin(kx) \\cos(\\omega t)$:<br>1) Bilangan gelombang $k = 5\\pi\\text{ rad/m}$, frekuensi sudut $\\omega = 40\\pi\\text{ rad/s}$.<br>2) Cepat rambat gelombang pembentuk: $v = \\frac{\\omega}{k}$.<br>3) Panjang gelombang: $\\lambda = \\frac{2\\pi}{k}$.<br>4) Letak simpul ke-$n$ dari ujung pantul ($x = 0$): $x_n = (n - 1) \\frac{\\lambda}{2}$ untuk $n = 1, 2, 3, \\dots$.",
      steps: "1. Hitung cepat rambat gelombang ($v$):<br>$$v = \\frac{\\omega}{k} = \\frac{40\\pi\\text{ rad/s}}{5\\pi\\text{ rad/m}} = 8\\text{ m/s}$$<br>2. Hitung panjang gelombang ($\\lambda$):<br>$$\\lambda = \\frac{2\\pi}{k} = \\frac{2\\pi}{5\\pi} = 0{,}4\\text{ meter}$$<br>3. Hitung letak simpul ke-3 ($n = 3$):<br>$$x_3 = (3 - 1) \\cdot \\frac{\\lambda}{2} = 2 \\times \\frac{0{,}4\\text{ m}}{2} = 0{,}4\\text{ meter}$$",
      pitfalls: "Terkecoh salah menghitung nomor simpul, misalnya menganggap simpul ke-3 berada pada $3 \\times \\frac{\\lambda}{2} = 0{,}6\\text{ m}$ (opsi E) karena lupa bahwa simpul ke-1 berada tepat di $x = 0$."
    }
  }
];
