/**
 * Batch Task: TASK_fis-flu-dinamis-kontinuitas_MEDIUM
 * SubTopic: Debit & Persamaan Kontinuitas (fis-flu-dinamis-kontinuitas)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-flu-dinamis-kontinuitas-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-kontinuitas",
    category: "Debit & Persamaan Kontinuitas",
    difficulty: "sedang",
    statement: "Sebuah pembuluh darah utama (aorta) berdiameter rata-rata $D = 1{,}2\\text{ cm}$ mengalirkan darah dengan kelajuan rata-rata $v_1 = 40\\text{ cm/s}$. Pembuluh darah aorta ini kemudian bercabang-cabang menjadi $N = 3 \\times 10^7$ pembuluh darah kapiler halus yang tersusun secara paralel, masing-masing dengan diameter rata-rata $d = 8 \\times 10^{-4}\\text{ cm}$. Kelajuan rata-rata aliran darah di dalam setiap pembuluh darah kapiler tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}5\\text{ cm/s}$",
      "$1{,}0\\text{ cm/s}$",
      "$2{,}0\\text{ cm/s}$",
      "$3{,}0\\text{ cm/s}$",
      "$6{,}0\\text{ cm/s}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Berdasarkan prinsip kontinuitas, debit aliran pada pembuluh utama sama dengan jumlah debit total pada seluruh cabang kapiler:<br>$$Q_{\\text{aorta}} = N \\cdot Q_{\\text{kapiler}} \\iff A_{\\text{aorta}} \\cdot v_1 = N \\cdot A_{\\text{kapiler}} \\cdot v_2$$Dengan mensubstitusikan luas penampang lingkaran $A = \\frac{1}{4}\\pi d^2$:<br>$$D^2 \\cdot v_1 = N \\cdot d^2 \\cdot v_2 \\implies v_2 = \\frac{D^2 \\cdot v_1}{N \\cdot d^2}$$",
      steps: "1. Hitung pembilang ($D^2 \\cdot v_1$):<br>$$D^2 \\cdot v_1 = (1{,}2\\text{ cm})^2 \\times 40\\text{ cm/s} = 1{,}44 \\times 40 = 57{,}6\\text{ cm}^3\\text{/s}$$<br>2. Hitung penyebut ($N \\cdot d^2$):<br>$$N \\cdot d^2 = (3 \\times 10^7) \\times (8 \\times 10^{-4}\\text{ cm})^2 = 3 \\times 10^7 \\times 64 \\times 10^{-8} = 19{,}2\\text{ cm}^2$$<br>3. Hitung kelajuan rata-rata di kapiler ($v_2$):<br>$$v_2 = \\frac{57{,}6}{19{,}2} = 3{,}0\\text{ cm/s}$$",
      pitfalls: "Siswa sering lupa memperhitungkan jumlah total cabang $N$, sehingga menghitung kelajuan yang luar biasa besar karena hanya membandingkan satu aorta dengan satu kapiler tunggal."
    }
  },
  {
    id: "fis-flu-dinamis-kontinuitas-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-kontinuitas",
    category: "Debit & Persamaan Kontinuitas",
    difficulty: "sedang",
    statement: "Sebuah tandon penampung air berkapasitas volume $V = 1800\\text{ liter}$ diisi secara bersamaan oleh dua pipa pengisi, yaitu pipa A dengan debit $Q_A = 2{,}5\\text{ liter/s}$ dan pipa B dengan debit $Q_B = 1{,}5\\text{ liter/s}$. Namun pada saat yang sama, lubang pembuangan di dasar tandon terbuka dan mengalirkan air keluar dengan kelajuan $v = 2\\text{ m/s}$ melalui penampang lubang $A_{\\text{bocor}} = 5\\text{ cm}^2$. Waktu yang diperlukan untuk mengisi tandon tersebut dari keadaan kosong hingga terisi penuh adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5\\text{ menit}$",
      "$7{,}5\\text{ menit}$",
      "$10\\text{ menit}$",
      "$12{,}5\\text{ menit}$",
      "$15\\text{ menit}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Laju pengisian netto tandon adalah selisih antara debit total air masuk dan debit air keluar:<br>$$Q_{\\text{netto}} = Q_{\\text{masuk}} - Q_{\\text{keluar}} = (Q_A + Q_B) - (A_{\\text{bocor}} \\cdot v)$$Waktu pengisian dihitung dengan:<br>$$t = \\frac{V}{Q_{\\text{netto}}}$$",
      steps: "1. Hitung total debit air masuk:<br>$$Q_{\\text{masuk}} = 2{,}5\\text{ liter/s} + 1{,}5\\text{ liter/s} = 4{,}0\\text{ liter/s}$$<br>2. Hitung debit air yang bocor keluar:<br>$$Q_{\\text{keluar}} = A_{\\text{bocor}} \\cdot v = (5 \\times 10^{-4}\\text{ m}^2) \\times 2\\text{ m/s} = 10^{-3}\\text{ m}^3\\text{/s} = 1{,}0\\text{ liter/s}$$<br>3. Hitung debit netto pengisian:<br>$$Q_{\\text{netto}} = 4{,}0\\text{ liter/s} - 1{,}0\\text{ liter/s} = 3{,}0\\text{ liter/s}$$<br>4. Hitung waktu pengisian total:<br>$$t = \\frac{1800\\text{ liter}}{3{,}0\\text{ liter/s}} = 600\\text{ sekon} = 10\\text{ menit}$$",
      pitfalls: "Lupa mengonversi satuan luas bocor dari $\\text{cm}^2$ ke $\\text{m}^2$ atau lupa memperhitungkan kebocoran keluar sehingga membagi $1800$ dengan $4{,}0$ yang menghasilkan $7{,}5\\text{ menit}$ (opsi B)."
    }
  },
  {
    id: "fis-flu-dinamis-kontinuitas-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-kontinuitas",
    category: "Debit & Persamaan Kontinuitas",
    difficulty: "sedang",
    statement: "Sebuah selang penyiram tanaman dialiri air dengan debit tetap $Q = 0{,}4\\text{ liter/s}$. Di ujung selang dipasang nozzle kepala semprotan yang memiliki $n = 25$ lubang sembur kecil yang identik. Luas penampang masing-masing lubang kecil tersebut adalah $a = 2\\text{ mm}^2$. Besar kelajuan semburan air yang keluar dari setiap lubang nozzle adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$10\\text{ m/s}$",
      "$16\\text{ m/s}$",
      "$20\\text{ m/s}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Debit total fluida terbagi rata melalui $n$ lubang kecil yang identik:<br>$$Q = n \\cdot a \\cdot v \\implies v = \\frac{Q}{n \\cdot a}$$Di mana $n \\cdot a$ adalah luas penampang total seluruh lubang sembur.",
      steps: "1. Konversikan besaran ke satuan SI:<br>• Debit: $Q = 0{,}4\\text{ liter/s} = 0{,}4 \\times 10^{-3}\\text{ m}^3\\text{/s} = 4 \\times 10^{-4}\\text{ m}^3\\text{/s}$<br>• Luas total lubang: $A_{\\text{total}} = 25 \\times (2\\text{ mm}^2) = 50\\text{ mm}^2 = 50 \\times 10^{-6}\\text{ m}^2 = 5 \\times 10^{-5}\\text{ m}^2$<br>2. Hitung kelajuan semburan air ($v$):<br>$$v = \\frac{4 \\times 10^{-4}\\text{ m}^3\\text{/s}}{5 \\times 10^{-5}\\text{ m}^2} = \\frac{40}{5} = 8\\text{ m/s}$$",
      pitfalls: "Siswa sering lupa mengalikan luas 1 lubang dengan jumlah total lubang ($n = 25$) sehingga memperoleh hasil kelajuan yang keliru sebesar $200\\text{ m/s}$."
    }
  },
  {
    id: "fis-flu-dinamis-kontinuitas-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-kontinuitas",
    category: "Debit & Persamaan Kontinuitas",
    difficulty: "sedang",
    statement: "Sebuah tangki silinder besar dengan luas penampang $A_1 = 1{,}5\\text{ m}^2$ diisi air hingga ketinggian tertentu. Pada dinding dekat dasar tangki terdapat keran pembuangan mendatar dengan luas penampang $A_2 = 3\\text{ cm}^2$. Ketika keran dibuka penuh, air mengalir keluar dari mulut keran dengan kelajuan rata-rata $v_2 = 5\\text{ m/s}$. Laju penurunan permukaan air di dalam tangki silinder tersebut ($v_1$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}5\\text{ mm/s}$",
      "$1{,}0\\text{ mm/s}$",
      "$2{,}0\\text{ mm/s}$",
      "$5{,}0\\text{ mm/s}$",
      "$10\\text{ mm/s}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Berdasarkan persamaan kontinuitas fluida inkompresibel, debit penurunan air di dalam tangki sama dengan debit air yang keluar melalui keran:<br>$$A_1 \\cdot v_1 = A_2 \\cdot v_2 \\implies v_1 = v_2 \\cdot \\frac{A_2}{A_1}$$",
      steps: "1. Konversikan luas penampang keran ke meter persegi:<br>$$A_2 = 3\\text{ cm}^2 = 3 \\times 10^{-4}\\text{ m}^2$$<br>2. Hitung laju penurunan permukaan air ($v_1$):<br>$$v_1 = 5\\text{ m/s} \\times \\frac{3 \\times 10^{-4}\\text{ m}^2}{1{,}5\\text{ m}^2} = 5 \\times (2 \\times 10^{-4}) = 10^{-3}\\text{ m/s} = 1{,}0\\text{ mm/s}$$",
      pitfalls: "Kesalahan konversi satuan kecepatan dari $\\text{m/s}$ ke $\\text{mm/s}$ atau kesalahan konversi satuan luas penampang dari $\\text{cm}^2$ ke $\\text{m}^2$."
    }
  },
  {
    id: "fis-flu-dinamis-kontinuitas-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-kontinuitas",
    category: "Debit & Persamaan Kontinuitas",
    difficulty: "sedang",
    statement: "Sebuah pipa saluran air konis horizontal memiliki penampang yang menyempit secara bertahap dari diameter inlet $d_1 = 12\\text{ cm}$ menjadi diameter outlet $d_2 = 4\\text{ cm}$. Jika massa jenis air adalah $\\rho = 1000\\text{ kg/m}^3$ dan kelajuan air saat keluar dari outlet adalah $v_2 = 9\\text{ m/s}$, besar debit massa aliran (laju aliran massa fluida per detik) yang melintasi pipa tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}8\\pi\\text{ kg/s}$",
      "$3{,}6\\pi\\text{ kg/s}$",
      "$7{,}2\\pi\\text{ kg/s}$",
      "$14{,}4\\pi\\text{ kg/s}$",
      "$36\\pi\\text{ kg/s}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Debit massa (laju aliran massa, $\\dot{m}$) adalah massa fluida yang melewati penampang pipa per satuan waktu:<br>$$\\dot{m} = \\rho \\cdot Q = \\rho \\cdot A_2 \\cdot v_2 = \\rho \\cdot \\left(\\frac{1}{4}\\pi d_2^2\\right) \\cdot v_2$$Prinsip kekekalan massa menjamin bahwa nilai debit massa konstan di setiap penampang pipa.",
      steps: "1. Konversikan diameter outlet ke meter:<br>$$d_2 = 4\\text{ cm} = 0{,}04\\text{ m}$$<br>2. Hitung luas penampang outlet ($A_2$):<br>$$A_2 = \\frac{1}{4}\\pi (0{,}04\\text{ m})^2 = \\frac{1}{4}\\pi (16 \\times 10^{-4}\\text{ m}^2) = 4\\pi \\times 10^{-4}\\text{ m}^2$$<br>3. Hitung debit volume ($Q$):<br>$$Q = A_2 \\cdot v_2 = (4\\pi \\times 10^{-4}\\text{ m}^2) \\times 9\\text{ m/s} = 36\\pi \\times 10^{-4}\\text{ m}^3\\text{/s} = 3{,}6\\pi \\times 10^{-3}\\text{ m}^3\\text{/s}$$<br>4. Hitung debit massa ($\\dot{m}$):<br>$$\\dot{m} = \\rho \\cdot Q = 1000\\text{ kg/m}^3 \\times (3{,}6\\pi \\times 10^{-3}\\text{ m}^3\\text{/s}) = 3{,}6\\pi\\text{ kg/s}$$",
      pitfalls: "Siswa sering mengira debit massa sama dengan debit volume tanpa mengalikan dengan massa jenis $\\rho$, atau salah menghitung luas lingkaran dari diameter."
    }
  }
];
