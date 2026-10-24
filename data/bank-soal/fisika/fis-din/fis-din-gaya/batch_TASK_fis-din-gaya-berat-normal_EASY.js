module.exports = [
  {
    id: "fis-din-gaya-berat-normal-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-berat-normal",
    category: "Gaya Berat dan Gaya Normal",
    difficulty: "mudah",
    statement: "Sebuah balok besi bermassa $m = 8\\text{ kg}$ diletakkan di atas lantai mendatar yang diam. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya normal yang diberikan lantai pada balok besi tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$80\\text{ N}$",
      "$8\\text{ N}$",
      "$40\\text{ N}$",
      "$0\\text{ N}$",
      "$160\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada bidang horizontal tanpa gaya vertikal luar tambahan, gaya normal ($N$) mengimbangi gaya berat ($w$):<br>$$N = w = m \\cdot g$$",
      steps: "1. Hitung berat balok:<br>$$w = 8\\text{ kg} \\times 10\\text{ m/s}^2 = 80\\text{ N}$$<br>2. Dari kesetimbangan sumbu vertikal ($\\Sigma F_y = 0$):<br>$$N - w = 0 \\implies N = 80\\text{ N}$$",
      pitfalls: "Menyamakan satuan gaya dengan massa ($8\\text{ N}$) atau lupa mengalikan dengan percepatan gravitasi $g$."
    }
  },
  {
    id: "fis-din-gaya-berat-normal-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-berat-normal",
    category: "Gaya Berat dan Gaya Normal",
    difficulty: "mudah",
    statement: "Sebuah balok bermassa $m = 5\\text{ kg}$ diletakkan di atas bidang miring dengan sudut kemiringan $\\theta = 60^\\circ$ terhadap horizontal (diketahui $\\cos 60^\\circ = 0{,}5$ dan $\\sin 60^\\circ = 0{,}5\\sqrt{3}$). Jika $g = 10\\text{ m/s}^2$, besar gaya normal yang dikerjakan bidang miring pada balok adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$25\\text{ N}$",
      "$50\\text{ N}$",
      "$25\\sqrt{3}\\text{ N}$",
      "$10\\text{ N}$",
      "$50\\sqrt{3}\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gaya normal pada bidang miring mengimbangi komponen gaya berat yang tegak lurus terhadap permukaan bidang miring:<br>$$N = w \\cos\\theta = m \\cdot g \\cdot \\cos\\theta$$",
      steps: "1. Hitung gaya normal tegak lurus bidang:<br>$$N = 5\\text{ kg} \\times 10\\text{ m/s}^2 \\times \\cos 60^\\circ = 50 \\times 0{,}5 = 25\\text{ N}$$",
      pitfalls: "Menggunakan fungsi sinus sehingga menghitung $w \\sin 60^\\circ = 25\\sqrt{3}\\text{ N}$, yang merupakan gaya berat sejajar bidang, bukan gaya normal."
    }
  },
  {
    id: "fis-din-gaya-berat-normal-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-berat-normal",
    category: "Gaya Berat dan Gaya Normal",
    difficulty: "mudah",
    statement: "Seseorang bermassa $m = 50\\text{ kg}$ berdiri di atas timbangan badan di dalam sebuah lift. Ketika lift bergerak dipercepat vertikal ke atas dengan percepatan $a = 2\\text{ m/s}^2$ ($g = 10\\text{ m/s}^2$), angka gaya normal desakan kaki yang terbaca pada timbangan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$600\\text{ N}$",
      "$500\\text{ N}$",
      "$400\\text{ N}$",
      "$100\\text{ N}$",
      "$550\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Timbangan badan mengukur gaya normal ($N$) desakan kaki. Saat lift dipercepat ke atas, berlaku Hukum II Newton:<br>$$\\Sigma F_y = m \\cdot a \\implies N - w = m \\cdot a \\implies N = m(g + a)$$",
      steps: "1. Substitusikan $m = 50\\text{ kg}$, $g = 10\\text{ m/s}^2$, dan $a = 2\\text{ m/s}^2$:<br>$$N = 50(10 + 2) = 50 \\times 12 = 600\\text{ N}$$",
      pitfalls: "Mengurangkan percepatan ($50(10 - 2) = 400\\text{ N}$), yang baru merupakan gaya normal jika lift dipercepat ke bawah."
    }
  },
  {
    id: "fis-din-gaya-berat-normal-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-berat-normal",
    category: "Gaya Berat dan Gaya Normal",
    difficulty: "mudah",
    statement: "Arah dari vektor gaya normal yang dialami oleh suatu benda padat yang bersentuhan dengan bidang kontak selalu ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Tegak lurus (perpendikular) terhadap bidang kontak dan mengarah menjauhi bidang kontak menuju ke benda",
      "Selalu tegak lurus mengarah ke pusat bumi",
      "Sejajar dengan garis permukaan bidang kontak",
      "Selalu berlawanan arah dengan arah gerak benda",
      "Membentuk sudut $45^\\circ$ terhadap bidang kontak"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kata 'normal' dalam geometri matematika berarti tegak lurus ($90^\\circ$). Gaya normal adalah gaya kontak tolak-menolak antar atom pada permukaan sentuh yang selalu tegak lurus bidang kontak.",
      steps: "1. Gaya normal timbul akibat deformasi mikro permukaan kontak.<br>2. Arahnya selalu tegak lurus permukaan bidang sentuh dan mendorong benda menjauh dari permukaan.",
      pitfalls: "Mengira gaya normal selalu berarah ke atas melawan gravitasi bumi, padahal pada dinding vertikal arah gaya normal adalah horizontal."
    }
  },
  {
    id: "fis-din-gaya-berat-normal-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-berat-normal",
    category: "Gaya Berat dan Gaya Normal",
    difficulty: "mudah",
    statement: "Sebuah balok bermassa $m = 10\\text{ kg}$ berada di atas lantai datar. Balok tersebut kemudian ditekan dari atas secara vertikal ke bawah dengan gaya tekan tambahan $F = 30\\text{ N}$. Jika $g = 10\\text{ m/s}^2$, besar gaya normal lantai pada balok adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$130\\text{ N}$",
      "$100\\text{ N}$",
      "$70\\text{ N}$",
      "$30\\text{ N}$",
      "$170\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gaya normal pada bidang horizontal dipengaruhi oleh seluruh gaya vertikal luar yang bekerja pada benda:<br>$$\\Sigma F_y = 0 \\implies N - w - F = 0 \\implies N = w + F$$",
      steps: "1. Berat balok: $w = m \\cdot g = 10 \\times 10 = 100\\text{ N}$.<br>2. Gaya tekan ke bawah: $F = 30\\text{ N}$.<br>3. Hitung gaya normal:<br>$$N = 100\\text{ N} + 30\\text{ N} = 130\\text{ N}$$",
      pitfalls: "Mengurangkan gaya tekan ($100 - 30 = 70\\text{ N}$), padahal gaya tekan diarahkan ke bawah sehingga menambah desakan lantai."
    }
  }
];
