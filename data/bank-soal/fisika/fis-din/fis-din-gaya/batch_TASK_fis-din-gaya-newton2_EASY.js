module.exports = [
  {
    id: "fis-din-gaya-newton2-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton2",
    category: "Hukum II Newton",
    difficulty: "mudah",
    statement: "Sebuah balok kayu bermassa $m = 4\\text{ kg}$ diletakkan di atas lantai mendatar yang licin sempurna tanpa gesekan. Balok kemudian ditarik oleh gaya horizontal konstan $F = 20\\text{ N}$. Besar percepatan yang dialami balok kayu tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5\\text{ m/s}^2$",
      "$80\\text{ m/s}^2$",
      "$0{,}2\\text{ m/s}^2$",
      "$16\\text{ m/s}^2$",
      "$10\\text{ m/s}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hukum II Newton menyatakan bahwa percepatan suatu benda sebanding dengan resultan gaya total yang bekerja dan berbanding terbalik dengan massanya:<br>$$a = \\frac{\\Sigma F}{m}$$",
      steps: "1. Identifikasi gaya horizontal: $\\Sigma F = F = 20\\text{ N}$.<br>2. Hitung percepatan balok:<br>$$a = \\frac{20\\text{ N}}{4\\text{ kg}} = 5\\text{ m/s}^2$$",
      pitfalls: "Mengalikan massa dengan gaya ($20 \\times 4 = 80$) alih-alih membaginya."
    }
  },
  {
    id: "fis-din-gaya-newton2-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton2",
    category: "Hukum II Newton",
    difficulty: "mudah",
    statement: "Sebuah kotak kardus bermassa $m = 6\\text{ kg}$ ditarik di atas lantai mendatar licin oleh dua gaya horizontal searah: $F_1 = 18\\text{ N}$ dan $F_2 = 12\\text{ N}$. Jika kotak mula-mula dalam keadaan diam, kecepatan kotak kardus tersebut setelah ditarik selama $t = 3\\text{ sekon}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$15\\text{ m/s}$",
      "$5\\text{ m/s}$",
      "$30\\text{ m/s}$",
      "$10\\text{ m/s}$",
      "$45\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Resultan gaya searah dijumlahkan untuk memperoleh percepatan benda. Kecepatan akhir dihitung menggunakan kinematika GLBB:<br>$$\\Sigma F = F_1 + F_2,\\quad a = \\frac{\\Sigma F}{m},\\quad v_t = v_0 + a t$$",
      steps: "1. Hitung resultan gaya total:<br>$$\\Sigma F = 18\\text{ N} + 12\\text{ N} = 30\\text{ N}$$<br>2. Hitung percepatan:<br>$$a = \\frac{30\\text{ N}}{6\\text{ kg}} = 5\\text{ m/s}^2$$<br>3. Hitung kecepatan akhir setelah $3\\text{ s}$ dari keadaan diam ($v_0 = 0$):<br>$$v_t = 0 + (5\\text{ m/s}^2 \\times 3\\text{ s}) = 15\\text{ m/s}$$",
      pitfalls: "Hanya menghitung nilai percepatan $a = 5\\text{ m/s}^2$ dan lupa mengalikan dengan waktu tempuh $t = 3\\text{ s}$ untuk mendapatkan kecepatan akhir."
    }
  },
  {
    id: "fis-din-gaya-newton2-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton2",
    category: "Hukum II Newton",
    difficulty: "mudah",
    statement: "Pernyataan yang paling tepat mengenai hubungan fisis antara resultan gaya total ($\\Sigma \\vec{F}$), massa inersial ($m$), dan percepatan ($\\vec{a}$) menurut Hukum II Newton adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Percepatan berbanding lurus dengan resultan gaya total dan berbanding terbalik dengan massa benda",
      "Percepatan berbanding terbalik dengan resultan gaya total dan berbanding lurus dengan massa benda",
      "Resultan gaya total berbanding terbalik dengan percepatan yang dihasilkan",
      "Massa benda berbanding lurus dengan percepatan pada gaya konstan",
      "Percepatan tidak bergantung pada resultan gaya luar yang bekerja"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hukum II Newton menyatakan hubungan matematis fundamental dinamika: $\\vec{a} = \\frac{\\Sigma \\vec{F}}{m}$. Secara fisis, percepatan bertambah jika gaya luar membesar, dan berkurang jika massa kelembaman membesar.",
      steps: "1. Tinjau persamaan $\\vec{a} = \\frac{\\Sigma \\vec{F}}{m}$.<br>2. $\\vec{a} \\propto \\Sigma \\vec{F}$ (sebanding/berbanding lurus dengan gaya).<br>3. $\\vec{a} \\propto \\frac{1}{m}$ (berbanding terbalik dengan massa).",
      pitfalls: "Tertukar antara konsep berbanding lurus (proporsional langsung) dan berbanding terbalik."
    }
  },
  {
    id: "fis-din-gaya-newton2-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton2",
    category: "Hukum II Newton",
    difficulty: "mudah",
    statement: "Sebuah mobil-mobilan bermassa $2\\text{ kg}$ bergerak pada lintasan lurus licin. Kecepatan mobil-mobilan bertambah secara teratur dari $4\\text{ m/s}$ menjadi $10\\text{ m/s}$ dalam selang waktu $3\\text{ sekon}$. Besar resultan gaya yang bekerja pada mobil-mobilan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ N}$",
      "$2\\text{ N}$",
      "$6\\text{ N}$",
      "$8\\text{ N}$",
      "$12\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gaya dihitung dari perkalian massa dengan percepatan ($\\Sigma F = m \\cdot a$), di mana percepatan diperoleh dari perubahan kecepatan per satuan waktu ($a = \\frac{\\Delta v}{\\Delta t}$).",
      steps: "1. Hitung percepatan mobil-mobilan:<br>$$a = \\frac{v_t - v_0}{\\Delta t} = \\frac{10\\text{ m/s} - 4\\text{ m/s}}{3\\text{ s}} = \\frac{6}{3} = 2\\text{ m/s}^2$$<br>2. Hitung resultan gaya:<br>$$\\Sigma F = m \\cdot a = 2\\text{ kg} \\times 2\\text{ m/s}^2 = 4\\text{ N}$$",
      pitfalls: "Lupa mengurangkan kecepatan awal sehingga menghitung $a = 10 / 3$."
    }
  },
  {
    id: "fis-din-gaya-newton2-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton2",
    category: "Hukum II Newton",
    difficulty: "mudah",
    statement: "Suatu gaya resultan $F$ mampu menghasilkan percepatan sebesar $a$ ketika bekerja pada balok $A$ bermassa $m_A$. Ketika gaya yang sama besar bekerja pada balok $B$ bermassa $m_B$, percepatan yang dihasilkan adalah $2a$. Perbandingan massa balok $A$ terhadap balok $B$ ($m_A : m_B$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2 : 1$",
      "$1 : 2$",
      "$4 : 1$",
      "$1 : 4$",
      "$1 : 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada gaya yang konstan ($F = \\text{konstan}$), massa berbanding terbalik dengan percepatan yang dialami benda:<br>$$F = m_A a_A = m_B a_B \\implies \\frac{m_A}{m_B} = \\frac{a_B}{a_A}$$",
      steps: "1. Substitusikan $a_A = a$ dan $a_B = 2a$:<br>$$\\frac{m_A}{m_B} = \\frac{2a}{a} = \\frac{2}{1} = 2 : 1$$",
      pitfalls: "Terkecoh menganggap massa berbanding lurus dengan percepatan sehingga menjawab $1 : 2$."
    }
  }
];
