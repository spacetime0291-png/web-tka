/**
 * Batch Task: TASK_fis-flu-dinamis-bernoulli_MEDIUM
 * SubTopic: Persamaan Bernoulli (fis-flu-dinamis-bernoulli)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-flu-dinamis-bernoulli-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-bernoulli",
    category: "Persamaan Bernoulli",
    difficulty: "sedang",
    statement: "Sebuah pipa saluran air menanjak dari lantai dasar gedung ($h_1 = 0$) ke lantai dua yang berada pada ketinggian $h_2 = 5\\text{ meter}$. Luas penampang pipa di lantai dasar adalah $A_1 = 50\\text{ cm}^2$, kemudian menyempit menjadi $A_2 = 25\\text{ cm}^2$ di lantai dua. Jika air dialirkan dengan kelajuan $v_1 = 2\\text{ m/s}$ dan tekanan $P_1 = 2{,}00 \\times 10^5\\text{ Pa}$ di lantai dasar, massa jenis air $\\rho = 1000\\text{ kg/m}^3$, dan $g = 10\\text{ m/s}^2$, besar tekanan air saat mencapai lantai dua ($P_2$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}24 \\times 10^5\\text{ Pa}$",
      "$1{,}38 \\times 10^5\\text{ Pa}$",
      "$1{,}44 \\times 10^5\\text{ Pa}$",
      "$1{,}56 \\times 10^5\\text{ Pa}$",
      "$1{,}62 \\times 10^5\\text{ Pa}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Penerapan Persamaan Bernoulli lengkap yang melibatkan perubahan kelajuan sekaligus perubahan elevasi ketinggian:<br>$$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2$$Kelajuan $v_2$ diperoleh melalui persamaan kontinuitas $A_1 v_1 = A_2 v_2$.",
      steps: "1. Hitung kelajuan di lantai dua ($v_2$):<br>$$v_2 = v_1 \\cdot \\frac{A_1}{A_2} = 2\\text{ m/s} \\times \\frac{50\\text{ cm}^2}{25\\text{ cm}^2} = 4\\text{ m/s}$$<br>2. Hitung suku-suku energi di lantai dasar ($h_1 = 0$):<br>$$E_1 = P_1 + \\frac{1}{2}\\rho v_1^2 = 200.000\\text{ Pa} + \\frac{1}{2}(1000)(2^2) = 200.000 + 2.000 = 202.000\\text{ Pa}$$<br>3. Hitung suku energi kinetik dan potensial di lantai dua ($h_2 = 5\\text{ m}$):<br>$$\\frac{1}{2}\\rho v_2^2 + \\rho g h_2 = \\frac{1}{2}(1000)(4^2) + (1000)(10)(5) = 8.000 + 50.000 = 58.000\\text{ Pa}$$<br>4. Hitung tekanan $P_2$:<br>$$P_2 = 202.000\\text{ Pa} - 58.000\\text{ Pa} = 144.000\\text{ Pa} = 1{,}44 \\times 10^5\\text{ Pa}$$",
      pitfalls: "Siswa sering lupa memperhitungkan salah satu efek, misalnya hanya memperhitungkan penurunan akibat ketinggian ($50.000\\text{ Pa}$) dan lupa memperhitungkan penurunan tekanan akibat peningkatan kelajuan ($6.000\\text{ Pa}$)."
    }
  },
  {
    id: "fis-flu-dinamis-bernoulli-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-bernoulli",
    category: "Persamaan Bernoulli",
    difficulty: "sedang",
    statement: "Sebuah venturimeter horizontal tanpa manometer digunakan untuk mengukur debit aliran air (massa jenis $\\rho = 1000\\text{ kg/m}^3$). Luas penampang pipa utama adalah $A_1 = 12\\text{ cm}^2$ dan luas penampang leher adalah $A_2 = 6\\text{ cm}^2$. Ketika air mengalir, selisih ketinggian permukaan air pada kedua pipa vertikal (piezometer) teramati sebesar $h = 15\\text{ cm}$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar kelajuan aliran air pada pipa utama ($v_1$) dan debit alirannya ($Q$) berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}5\\text{ m/s}$ dan $0{,}6\\text{ liter/s}$",
      "$1{,}0\\text{ m/s}$ dan $1{,}2\\text{ liter/s}$",
      "$1{,}0\\text{ m/s}$ dan $2{,}4\\text{ liter/s}$",
      "$2{,}0\\text{ m/s}$ dan $1{,}2\\text{ liter/s}$",
      "$2{,}0\\text{ m/s}$ dan $2{,}4\\text{ liter/s}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pada venturimeter tanpa manometer, selisih tekanan diukur langsung dari perbedaan tinggi kolom air pada pipa vertikal: $\\Delta P = \\rho g h$. Dikombinasikan dengan Persamaan Bernoulli dan Kontinuitas:<br>$$v_1 = \\sqrt{\\frac{2gh}{\\left(\\frac{A_1}{A_2}\\right)^2 - 1}}$$<br>Dan debit aliran dihitung dengan $Q = A_1 \\cdot v_1$.",
      steps: "1. Tentukan perbandingan luas penampang: $\\frac{A_1}{A_2} = \\frac{12}{6} = 2$<br>2. Konversikan selisih tinggi: $h = 15\\text{ cm} = 0{,}15\\text{ m}$<br>3. Hitung kelajuan $v_1$:<br>$$v_1 = \\sqrt{\\frac{2 \\times 10\\text{ m/s}^2 \\times 0{,}15\\text{ m}}{2^2 - 1}} = \\sqrt{\\frac{3}{4 - 1}} = \\sqrt{\\frac{3}{3}} = 1{,}0\\text{ m/s}$$<br>4. Hitung debit aliran air:<br>$$Q = A_1 \\cdot v_1 = (12 \\times 10^{-4}\\text{ m}^2) \\times 1{,}0\\text{ m/s} = 1{,}2 \\times 10^{-3}\\text{ m}^3\\text{/s} = 1{,}2\\text{ liter/s}$$",
      pitfalls: "Terkecoh menggunakan luas leher $A_2$ saat menghitung $v_1$, atau lupa mengonversi luas penampang ke meter persegi saat mencari debit."
    }
  },
  {
    id: "fis-flu-dinamis-bernoulli-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-bernoulli",
    category: "Persamaan Bernoulli",
    difficulty: "sedang",
    statement: "Sebuah tangki silinder tertutup berisi air memiliki gas bertekanan tinggi di atas permukaan air sebesar $P = 2{,}50 \\times 10^5\\text{ Pa}$. Pada dinding tangki terdapat lubang kecil yang bocor ke udara luar (tekanan atmosfer $P_0 = 1{,}00 \\times 10^5\\text{ Pa}$) pada posisi kedalaman $h = 5\\text{ meter}$ di bawah permukaan air. Jika massa jenis air $\\rho = 1000\\text{ kg/m}^3$ dan $g = 10\\text{ m/s}^2$, kelajuan semburan air yang keluar dari lubang kebocoran tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$30\\text{ m/s}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada tangki tertutup bertekanan, Teorema Torricelli dimodifikasi dengan memasukkan selisih tekanan gas dalam tangki terhadap atmosfer luar:<br>$$P + \\rho g h = P_0 + \\frac{1}{2}\\rho v^2 \\implies v = \\sqrt{\\frac{2(P - P_0)}{\\rho} + 2gh}$$",
      steps: "1. Hitung kontribusi selisih tekanan gas:<br>$$\\frac{2(P - P_0)}{\\rho} = \\frac{2(250.000\\text{ Pa} - 100.000\\text{ Pa})}{1000\\text{ kg/m}^3} = \\frac{300.000}{1000} = 300\\text{ m}^2\\text{/s}^2$$<br>2. Hitung kontribusi potensial hidrostatis:<br>$$2gh = 2 \\times 10\\text{ m/s}^2 \\times 5\\text{ m} = 100\\text{ m}^2\\text{/s}^2$$<br>3. Hitung kelajuan semburan air:<br>$$v = \\sqrt{300 + 100} = \\sqrt{400} = 20\\text{ m/s}$$",
      pitfalls: "Siswa sering mengabaikan tekanan gas terkurung dan hanya menggunakan rumus Torricelli biasa $v = \\sqrt{2gh} = \\sqrt{100} = 10\\text{ m/s}$ (opsi A)."
    }
  },
  {
    id: "fis-flu-dinamis-bernoulli-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-bernoulli",
    category: "Persamaan Bernoulli",
    difficulty: "sedang",
    statement: "Saat terjadi badai angin kencang, udara berhembus mendatar di atas atap rumah yang memiliki luas penampang $A = 80\\text{ m}^2$ dengan kelajuan konstan $v = 40\\text{ m/s}$. Udara di dalam ruangan rumah berada dalam kondisi tenang dan tertutup rapat. Jika massa jenis udara di sekitar rumah adalah $\\rho_{\\text{udara}} = 1{,}25\\text{ kg/m}^3$, besar gaya angkat ke atas total yang bekerja pada atap rumah tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4 \\times 10^4\\text{ N}$",
      "$6 \\times 10^4\\text{ N}$",
      "$8 \\times 10^4\\text{ N}$",
      "$1{,}0 \\times 10^5\\text{ N}$",
      "$1{,}6 \\times 10^5\\text{ N}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Berdasarkan prinsip Bernoulli, kelajuan udara yang tinggi di atas atap menghasilkan penurunan tekanan statis dibanding udara di dalam rumah:<br>$$P_{\\text{bawah}} - P_{\\text{atas}} = \\Delta P = \\frac{1}{2}\\rho_{\\text{udara}} \\cdot v^2$$Gaya angkat total pada atap dirumuskan dengan:<br>$$F_{\\text{angkat}} = \\Delta P \\cdot A = \\left(\\frac{1}{2}\\rho_{\\text{udara}} \\cdot v^2\\right) \\cdot A$$",
      steps: "1. Hitung selisih tekanan udara antara dalam dan luar rumah:<br>$$\\Delta P = \\frac{1}{2} \\times 1{,}25\\text{ kg/m}^3 \\times (40\\text{ m/s})^2 = 0{,}625 \\times 1600 = 1000\\text{ N/m}^2$$<br>2. Hitung gaya angkat total pada atap seluas $80\\text{ m}^2$:<br>$$F_{\\text{angkat}} = 1000\\text{ N/m}^2 \\times 80\\text{ m}^2 = 80.000\\text{ N} = 8 \\times 10^4\\text{ N}$$",
      pitfalls: "Lupa mengalikan dengan faktor $\\frac{1}{2}$ pada energi kinetik udara yang menyebabkan nilai gaya menjadi dua kali lipat lebih besar ($1{,}6 \\times 10^5\\text{ N}$, opsi E)."
    }
  },
  {
    id: "fis-flu-dinamis-bernoulli-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-bernoulli",
    category: "Persamaan Bernoulli",
    difficulty: "sedang",
    statement: "Sebuah pipa sifon digunakan untuk mengalirkan air (massa jenis $\\rho = 1000\\text{ kg/m}^3$) dari sebuah tangki terbuka. Titik lengkungan tertinggi pipa sifon berada pada ketinggian $h_a = 1{,}5\\text{ meter}$ di atas permukaan air tangki, sedangkan ujung pipa pembuangan (outlet) berada pada ketinggian $h_b = 3{,}2\\text{ meter}$ di bawah permukaan air tangki. Jika tekanan atmosfer sekitar $P_0 = 1{,}00 \\times 10^5\\text{ Pa}$ dan $g = 10\\text{ m/s}^2$, besar tekanan mutlak air di titik puncak lengkungan pipa sifon saat air mengalir kontinu adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3{,}8 \\times 10^4\\text{ Pa}$",
      "$5{,}3 \\times 10^4\\text{ Pa}$",
      "$6{,}8 \\times 10^4\\text{ Pa}$",
      "$8{,}5 \\times 10^4\\text{ Pa}$",
      "$1{,}00 \\times 10^5\\text{ Pa}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "1) Kelajuan aliran di seluruh pipa berpenampang seragam ditentukan oleh perbedaan elevasi outlet dari permukaan air tangki:<br>$$v = \\sqrt{2 \\cdot g \\cdot h_b}$$<br>2) Tekanan di titik puncak sifon ($P_C$) dihitung dengan menerapkan persamaan Bernoulli antara permukaan air tangki ($P_0, v \\approx 0, y = 0$) dan titik puncak ($P_C, v, y = +h_a$):<br>$$P_0 = P_C + \\frac{1}{2}\\rho v^2 + \\rho g h_a \\implies P_C = P_0 - \\rho g h_a - \\frac{1}{2}\\rho v^2$$",
      steps: "1. Hitung kelajuan aliran air di dalam sifon:<br>$$v = \\sqrt{2 \\times 10\\text{ m/s}^2 \\times 3{,}2\\text{ m}} = \\sqrt{64} = 8\\text{ m/s}$$<br>2. Hitung suku energi kinetik:<br>$$\\frac{1}{2}\\rho v^2 = \\frac{1}{2} \\times 1000 \\times (8)^2 = 32.000\\text{ Pa}$$<br>3. Hitung suku energi potensial di puncak sifon:<br>$$\\rho g h_a = 1000 \\times 10 \\times 1{,}5 = 15.000\\text{ Pa}$$<br>4. Hitung tekanan mutlak di puncak lengkungan sifon ($P_C$):<br>$$P_C = 100.000\\text{ Pa} - 15.000\\text{ Pa} - 32.000\\text{ Pa} = 53.000\\text{ Pa} = 5{,}3 \\times 10^4\\text{ Pa}$$",
      pitfalls: "Siswa sering lupa memperhitungkan suku energi kinetik $\\frac{1}{2}\\rho v^2$ dan hanya mengurangkan tekanan hidrostatis $\\rho g h_a$ sehingga memperoleh $8{,}5 \\times 10^4\\text{ Pa}$ (opsi D)."
    }
  }
];
