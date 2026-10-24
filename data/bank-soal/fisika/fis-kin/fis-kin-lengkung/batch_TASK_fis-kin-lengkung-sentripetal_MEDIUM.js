module.exports = [
  {
    id: "fis-kin-lengkung-sentripetal-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-sentripetal",
    category: "Percepatan Sentripetal",
    difficulty: "sedang",
    statement: "Dua buah partikel $A$ dan $B$ melakukan gerak melingkar beraturan. Periode putaran partikel $A$ adalah dua kali periode partikel $B$ ($T_A = 2 T_B$), sedangkan jari-jari lintasan lingkaran partikel $A$ adalah empat kali jari-jari lintasan partikel $B$ ($R_A = 4 R_B$). Perbandingan besar percepatan sentripetal partikel $A$ terhadap partikel $B$ ($a_{sA} : a_{sB}$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 : 1$",
      "$2 : 1$",
      "$4 : 1$",
      "$1 : 2$",
      "$1 : 4$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Percepatan sentripetal dinyatakan dalam periode putaran ($T$) dan jari-jari ($R$) adalah:<br>$$a_s = \\omega^2 R = \\left(\\frac{2\\pi}{T}\\right)^2 R = \\frac{4\\pi^2 R}{T^2}$$",
      steps: "1. Tulis perbandingan percepatan sentripetal:<br>$$\\frac{a_{sA}}{a_{sB}} = \\left( \\frac{R_A}{R_B} \\right) \\times \\left( \\frac{T_B}{T_A} \\right)^2$$<br>2. Masukkan perbandingan $R_A = 4 R_B$ dan $T_A = 2 T_B$:<br>$$\\frac{a_{sA}}{a_{sB}} = 4 \\times \\left( \\frac{1}{2} \\right)^2 = 4 \\times \\frac{1}{4} = 1$$<br>Maka $a_{sA} : a_{sB} = 1 : 1$.",
      pitfalls: "Lupa mengkuadratkan periode putaran pada penyebut sehingga salah menyimpulkan $4 / 2 = 2 : 1$."
    }
  },
  {
    id: "fis-kin-lengkung-sentripetal-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-sentripetal",
    category: "Percepatan Sentripetal",
    difficulty: "sedang",
    statement: "Sebuah partikel bergerak menempuh lintasan lingkaran dengan jari-jari $R = 2\\text{ meter}$. Posisi sudut putaran partikel memenuhi fungsi waktu $\\theta(t) = 4t^2 + 2t$ (dengan $\\theta$ dalam radian dan $t$ dalam sekon). Besar percepatan sentripetal partikel pada saat $t = 1\\text{ sekon}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$200\\text{ m/s}^2$",
      "$100\\text{ m/s}^2$",
      "$20\\text{ m/s}^2$",
      "$400\\text{ m/s}^2$",
      "$50\\text{ m/s}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kecepatan sudut sesaat merupakan turunan pertama posisi sudut: $\\omega(t) = \\frac{d\\theta}{dt}$. Percepatan sentripetal sesaat dirumuskan oleh $a_s(t) = [\\omega(t)]^2 R$.",
      steps: "1. Turunkan fungsi posisi sudut terhadap waktu:<br>$$\\omega(t) = \\frac{d}{dt}(4t^2 + 2t) = 8t + 2\\text{ (rad/s)}$$<br>2. Hitung kecepatan sudut saat $t = 1\\text{ s}$:<br>$$\\omega(1) = 8(1) + 2 = 10\\text{ rad/s}$$<br>3. Hitung percepatan sentripetal saat $t = 1\\text{ s}$:<br>$$a_s = \\omega^2 R = (10\\text{ rad/s})^2 \\times 2\\text{ m} = 100 \\times 2 = 200\\text{ m/s}^2$$",
      pitfalls: "Hanya menghitung kelajuan linier $v = \\omega R = 20\\text{ m/s}$ atau lupa mengkuadratkan kecepatan sudut."
    }
  },
  {
    id: "fis-kin-lengkung-sentripetal-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-sentripetal",
    category: "Percepatan Sentripetal",
    difficulty: "sedang",
    statement: "Sebuah partikel bergerak melingkar pada lintasan dengan jari-jari $r = 3\\text{ meter}$. Pada suatu saat tertentu, kelajuan linier partikel adalah $v = 6\\text{ m/s}$ dan partikel mengalami percepatan tangensial tetap sebesar $a_t = 5\\text{ m/s}^2$. Besar resultan vektor percepatan total yang dialami partikel pada saat tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$13\\text{ m/s}^2$",
      "$17\\text{ m/s}^2$",
      "$12\\text{ m/s}^2$",
      "$7\\text{ m/s}^2$",
      "$\\sqrt{119}\\text{ m/s}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada gerak melingkar yang mengalami perubahan kelajuan (GMBB), terdapat dua komponen percepatan yang saling tegak lurus: percepatan sentripetal ($a_s$) yang mengarah ke pusat dan percepatan tangensial ($a_t$) yang menyinggung lintasan. Percepatan totalnya adalah:<br>$$a_{\\text{total}} = \\sqrt{a_s^2 + a_t^2}$$",
      steps: "1. Hitung percepatan sentripetal saat $v = 6\\text{ m/s}$:<br>$$a_s = \\frac{v^2}{r} = \\frac{6^2}{3} = \\frac{36}{3} = 12\\text{ m/s}^2$$<br>2. Hitung percepatan total resultan:<br>$$a_{\\text{total}} = \\sqrt{a_s^2 + a_t^2} = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13\\text{ m/s}^2$$",
      pitfalls: "Langsung menjumlahkan komponen secara aljabar skalar ($12 + 5 = 17\\text{ m/s}^2$), padahal kedua vektor saling tegak lurus tegak sehingga harus menggunakan teorema Pythagoras."
    }
  },
  {
    id: "fis-kin-lengkung-sentripetal-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-sentripetal",
    category: "Percepatan Sentripetal",
    difficulty: "sedang",
    statement: "Sebuah jalur rel kereta cepat memiliki tikungan mendatar dengan jari-jari kelengkungan $R = 800\\text{ meter}$. Demi keselamatan dan kenyamanan penumpang, batas percepatan sentripetal maksimum yang diperkenankan saat menikung adalah $2\\text{ m/s}^2$. Kelajuan maksimum kereta cepat yang diizinkan saat melintasi tikungan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$144\\text{ km/jam}$",
      "$100\\text{ km/jam}$",
      "$72\\text{ km/jam}$",
      "$180\\text{ km/jam}$",
      "$40\\text{ km/jam}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Batas kelajuan maksimum pada tikungan dihitung dari rumus percepatan sentripetal:<br>$$a_{s,\\max} = \\frac{v_{\\max}^2}{R} \\implies v_{\\max} = \\sqrt{a_{s,\\max} \\cdot R}$$",
      steps: "1. Hitung kelajuan maksimum dalam satuan SI ($\\text{m/s}$):<br>$$v_{\\max} = \\sqrt{2\\text{ m/s}^2 \\times 800\\text{ m}} = \\sqrt{1600} = 40\\text{ m/s}$$<br>2. Konversikan kelajuan maksimum ke satuan $\\text{km/jam}$:<br>$$v_{\\max} = 40 \\times \\frac{18}{5} = 8 \\times 18 = 144\\text{ km/jam}$$",
      pitfalls: "Lupa mengonversikan satuan dari $\\text{m/s}$ ke $\\text{km/jam}$ dan langsung memilih angka $40$."
    }
  },
  {
    id: "fis-kin-lengkung-sentripetal-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-sentripetal",
    category: "Percepatan Sentripetal",
    difficulty: "sedang",
    statement: "Sebuah piringan datar berputar dengan kecepatan sudut konstan $\\omega$. Dua koin logam $A$ dan $B$ diletakkan di atas piringan pada jarak masing-masing $r_A = 12\\text{ cm}$ dan $r_B = 27\\text{ cm}$ dari poros rotasi piringan. Jika percepatan sentripetal koin $A$ terukur sebesar $48\\text{ m/s}^2$, besar percepatan sentripetal koin $B$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$108\\text{ m/s}^2$",
      "$72\\text{ m/s}^2$",
      "$96\\text{ m/s}^2$",
      "$54\\text{ m/s}^2$",
      "$144\\text{ m/s}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Karena berada di atas satu piringan yang sama, kedua koin berputar dengan kecepatan sudut yang sama ($\\omega_A = \\omega_B = \\omega$). Hubungan percepatan sentripetal terhadap jari-jari adalah linear sebanding:<br>$$a_s = \\omega^2 r \\implies \\frac{a_{sB}}{a_{sA}} = \\frac{r_B}{r_A}$$",
      steps: "1. Susun perbandingan percepatan sentripetal:<br>$$a_{sB} = a_{sA} \\times \\left( \\frac{r_B}{r_A} \\right)$$<br>2. Substitusikan nilai parameter:<br>$$a_{sB} = 48\\text{ m/s}^2 \\times \\left( \\frac{27\\text{ cm}}{12\\text{ cm}} \\right) = 48 \\times \\frac{9}{4} = 12 \\times 9 = 108\\text{ m/s}^2$$",
      pitfalls: "Menggunakan perbandingan kuadrat terbalik ($a_s \\propto 1/r$), yang salah karena mengira kelajuan liniernya sama alih-alih kecepatan sudutnya."
    }
  }
];
