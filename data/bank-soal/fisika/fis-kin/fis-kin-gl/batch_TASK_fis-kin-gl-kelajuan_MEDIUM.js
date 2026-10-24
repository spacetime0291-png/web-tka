module.exports = [
  {
    id: "fis-kin-gl-kelajuan-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-kelajuan",
    category: "Kelajuan dan Kecepatan",
    difficulty: "sedang",
    statement: "Sebuah mobil ekspedisi menempuh perjalanan antar-kota yang dibagi menjadi tiga segmen lintasan dengan panjang sama besar. Sepertiga jarak pertama ditempuh dengan kelajuan rata-rata $v_1 = 20\\text{ km/jam}$, sepertiga jarak kedua dengan $v_2 = 30\\text{ km/jam}$, dan sepertiga jarak terakhir dengan $v_3 = 60\\text{ km/jam}$. Kelajuan rata-rata mobil untuk seluruh perjalanan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30\\text{ km/jam}$",
      "$36{,}67\\text{ km/jam}$",
      "$25\\text{ km/jam}$",
      "$35\\text{ km/jam}$",
      "$28\\text{ km/jam}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jika suatu perjalanan dibagi menjadi beberapa bagian jarak yang sama besar ($s_1 = s_2 = s_3 = s$), kelajuan rata-rata dihitung menggunakan rata-rata harmonik:<br>$$\\frac{1}{v_{\\text{rata}}} = \\frac{1}{3} \\left( \\frac{1}{v_1} + \\frac{1}{v_2} + \\frac{1}{v_3} \\right)$$",
      steps: "1. Misal masing-masing sepertiga jarak adalah $s$. Waktu tempuh tiap bagian:<br>$$t_1 = \\frac{s}{20},\\quad t_2 = \\frac{s}{30},\\quad t_3 = \\frac{s}{60}$$<br>2. Waktu total perjalanan:<br>$$t_{\\text{total}} = s \\left( \\frac{1}{20} + \\frac{1}{30} + \\frac{1}{60} \\right) = s \\left( \\frac{3 + 2 + 1}{60} \\right) = s \\left( \\frac{6}{60} \\right) = \\frac{s}{10}$$<br>3. Jarak total = $3s$. Maka kelajuan rata-rata:<br>$$v_{\\text{rata}} = \\frac{s_{\\text{total}}}{t_{\\text{total}}} = \\frac{3s}{\\frac{s}{10}} = 3 \\times 10 = 30\\text{ km/jam}$$",
      pitfalls: "Jebakan paling sering adalah merata-ratakan aritmetika biasa: $\\frac{20 + 30 + 60}{3} = \\frac{110}{3} \\approx 36{,}67\\text{ km/jam}$, yang merupakan jawaban keliru."
    }
  },
  {
    id: "fis-kin-gl-kelajuan-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-kelajuan",
    category: "Kelajuan dan Kecepatan",
    difficulty: "sedang",
    statement: "Sebuah benda bergerak pada garis lurus dengan kecepatan sesaat yang bergantung pada waktu menurut persamaan $v(t) = 6t^2 - 18t + 12$ ($v$ dalam $\\text{m/s}$ dan $t$ dalam sekon). Besar perpindahan dan kecepatan rata-rata benda tersebut dalam selang waktu dari $t = 1\\text{ s}$ sampai $t = 3\\text{ s}$ berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ m}$ dan $2\\text{ m/s}$",
      "$8\\text{ m}$ dan $4\\text{ m/s}$",
      "$6\\text{ m}$ dan $3\\text{ m/s}$",
      "$4\\text{ m}$ dan $1\\text{ m/s}$",
      "$12\\text{ m}$ dan $6\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Perpindahan merupakan integral tentu dari fungsi kecepatan terhadap waktu:<br>$$\\Delta x = \\int_{t_1}^{t_2} v(t)\\,dt$$<br>Kecepatan rata-rata adalah perbandingan perpindahan terhadap selang waktu:<br>$$\\bar{v} = \\frac{\\Delta x}{t_2 - t_1}$$",
      steps: "1. Integrasikan fungsi kecepatan dari $t = 1\\text{ s}$ ke $t = 3\\text{ s}$:<br>$$\\Delta x = \\int_1^3 (6t^2 - 18t + 12)\\,dt = \\left[ 2t^3 - 9t^2 + 12t \\right]_1^3$$<br>2. Evaluasi batas integrasi:<br>Saat $t = 3$: $2(27) - 9(9) + 12(3) = 54 - 81 + 36 = 9\\text{ m}$<br>Saat $t = 1$: $2(1) - 9(1) + 12(1) = 5\\text{ m}$<br>$$\\Delta x = 9 - 5 = 4\\text{ m}$$<br>3. Hitung kecepatan rata-rata:<br>$$\\bar{v} = \\frac{\\Delta x}{\\Delta t} = \\frac{4\\text{ m}}{3 - 1\\text{ s}} = \\frac{4}{2} = 2\\text{ m/s}$$",
      pitfalls: "Jangan menghitung nilai kecepatan di titik awal dan titik akhir lalu membaginya dengan 2, karena $v(t)$ adalah fungsi nonlinear kuadrat."
    }
  },
  {
    id: "fis-kin-gl-kelajuan-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-kelajuan",
    category: "Kelajuan dan Kecepatan",
    difficulty: "sedang",
    statement: "Sebuah partikel bergerak menelusuri lintasan lingkaran berjari-jari $R = 10\\text{ m}$ dengan kelajuan konstan $v = 5\\text{ m/s}$. Besar kecepatan rata-rata partikel ketika telah menempuh tepat seperempat lingkaran adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{10\\sqrt{2}}{\\pi}\\text{ m/s}$",
      "$5\\text{ m/s}$",
      "$\\frac{5\\sqrt{2}}{\\pi}\\text{ m/s}$",
      "$\\frac{20}{\\pi}\\text{ m/s}$",
      "$5\\sqrt{2}\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kecepatan rata-rata adalah besar vektor perpindahan dibagi dengan waktu tempuh:<br>$$|\\bar{\\vec{v}}| = \\frac{|\\Delta \\vec{r}|}{\\Delta t}$$<br>Untuk seperempat lingkaran, vektor posisi awal dan akhir saling tegak lurus.",
      steps: "1. Hitung besar perpindahan (tali busur siku-siku):<br>$$|\\Delta \\vec{r}| = \\sqrt{R^2 + R^2} = R\\sqrt{2} = 10\\sqrt{2}\\text{ m}$$<br>2. Hitung jarak tempuh busur dan waktu tempuh:<br>$$s = \\frac{1}{4}(2\\pi R) = \\frac{1}{2}\\pi(10) = 5\\pi\\text{ m}$$<br>$$\\Delta t = \\frac{s}{v} = \\frac{5\\pi}{5} = \\pi\\text{ sekon}$$<br>3. Hitung besar kecepatan rata-rata:<br>$$|\\bar{\\vec{v}}| = \\frac{|\\Delta \\vec{r}|}{\\Delta t} = \\frac{10\\sqrt{2}}{\\pi}\\text{ m/s}$$",
      pitfalls: "Kelajuan konstan adalah $5\\text{ m/s}$, namun kecepatan rata-ratanya berbeda karena lintasan membelok sehingga besar perpindahan lebih kecil dari panjang busur lintasan."
    }
  },
  {
    id: "fis-kin-gl-kelajuan-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-kelajuan",
    category: "Kelajuan dan Kecepatan",
    difficulty: "sedang",
    statement: "Sebuah mobil menempuh perjalanan pergi dengan membagi waktu tempuhnya menjadi dua bagian sama besar: separuh waktu pertama dipacu dengan kelajuan $40\\text{ km/jam}$ dan separuh waktu kedua dengan $80\\text{ km/jam}$. Pada saat perjalanan pulang melalui lintasan yang sama, mobil membagi jaraknya menjadi dua bagian sama panjang: separuh jarak pertama ditempuh dengan kelajuan $40\\text{ km/jam}$ dan separuh jarak kedua dengan $80\\text{ km/jam}$. Perbandingan kelajuan rata-rata saat berangkat ($v_B$) terhadap kelajuan rata-rata saat pulang ($v_P$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$9 : 8$",
      "$8 : 9$",
      "$1 : 1$",
      "$3 : 2$",
      "$4 : 3$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Saat waktu tempuh dibagi sama besar, kelajuan rata-rata adalah rata-rata aritmetika: $v = \\frac{v_1 + v_2}{2}$. Saat jarak tempuh dibagi sama panjang, kelajuan rata-rata adalah rata-rata harmonik: $v = \\frac{2v_1 v_2}{v_1 + v_2}$.",
      steps: "1. Kelajuan rata-rata berangkat (waktu sama):<br>$$v_B = \\frac{40 + 80}{2} = 60\\text{ km/jam}$$<br>2. Kelajuan rata-rata pulang (jarak sama):<br>$$v_P = \\frac{2(40)(80)}{40 + 80} = \\frac{6400}{120} = \\frac{160}{3}\\text{ km/jam}$$<br>3. Perbandingan rasio:<br>$$\\frac{v_B}{v_P} = \\frac{60}{\\frac{160}{3}} = \\frac{180}{160} = \\frac{9}{8} = 9 : 8$$",
      pitfalls: "Jangan menganggap kelajuan rata-rata pergi dan pulang bernilai sama karena kondisi pembagian parameter waktu vs jarak memberikan bobot yang berbeda."
    }
  },
  {
    id: "fis-kin-gl-kelajuan-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-kelajuan",
    category: "Kelajuan dan Kecepatan",
    difficulty: "sedang",
    statement: "Sebuah partikel bergerak pada bidang datar dengan vektor posisi dinyatakan oleh $\\vec{r}(t) = (2t^2 - 4)\\hat{i} + (t^3 - 6t)\\hat{j}$, dengan $r$ dalam meter dan $t$ dalam sekon. Besar kecepatan sesaat partikel pada saat $t = 2\\text{ sekon}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ m/s}$",
      "$14\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$12\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Vektor kecepatan sesaat diperoleh dari turunan pertama vektor posisi terhadap waktu:<br>$$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = v_x\\hat{i} + v_y\\hat{j}$$<br>Besar kecepatan sesaat merupakan norma vektor kecepatan:<br>$$|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$$",
      steps: "1. Turunkan komponen posisi terhadap waktu:<br>$$v_x(t) = \\frac{d}{dt}(2t^2 - 4) = 4t$$<br>$$v_y(t) = \\frac{d}{dt}(t^3 - 6t) = 3t^2 - 6$$<br>2. Substitusi waktu $t = 2\\text{ s}$:<br>$$v_x(2) = 4(2) = 8\\text{ m/s}$$<br>$$v_y(2) = 3(2)^2 - 6 = 12 - 6 = 6\\text{ m/s}$$<br>3. Hitung besar resultan kecepatan sesaat:<br>$$|\\vec{v}| = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10\\text{ m/s}$$",
      pitfalls: "Lupa menjumlahkan secara vektor kuadrat (Pythagoras) dan langsung menjumlahkan komponen secara aljabar alih-alih $8 + 6 = 14$."
    }
  }
];
