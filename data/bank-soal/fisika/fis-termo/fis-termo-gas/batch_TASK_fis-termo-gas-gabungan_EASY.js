/**
 * Batch Task: TASK_fis-termo-gas-gabungan_EASY
 * SubTopic: Hukum Boyle-Gay Lussac (fis-termo-gas-gabungan)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-termo-gas-gabungan-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-gabungan",
    category: "Persamaan Keadaan Gabungan Boyle-Gay Lussac",
    difficulty: "mudah",
    statement: "Sejumlah gas ideal dalam ruang tertutup memiliki volume $2\\text{ liter}$ pada tekanan $1\\text{ atm}$ dan suhu $300\\text{ K}$. Jika tekanan gas dinaikkan menjadi $2\\text{ atm}$ dan suhunya dinaikkan menjadi $600\\text{ K}$, volume gas ideal tersebut sekarang adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}5\\text{ liter}$",
      "$1{,}0\\text{ liter}$",
      "$2{,}0\\text{ liter}$",
      "$4{,}0\\text{ liter}$",
      "$8{,}0\\text{ liter}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Hukum gabungan Boyle-Gay Lussac menyatakan bahwa untuk sejumlah mol gas ideal dalam sistem tertutup, rasio $\\frac{P \\times V}{T}$ bernilai konstan:<br>$$\\frac{P_1 \\times V_1}{T_1} = \\frac{P_2 \\times V_2}{T_2}$$",
      steps: "1. Tulis data keadaan mula-mula dan akhir:<br>$P_1 = 1\\text{ atm}$, $V_1 = 2\\text{ liter}$, $T_1 = 300\\text{ K}$<br>$P_2 = 2\\text{ atm}$, $T_2 = 600\\text{ K}$<br>2. Masukkan ke rumus gabungan:<br>$$\\frac{1 \\times 2}{300} = \\frac{2 \\times V_2}{600}$$<br>$$\\frac{2}{300} = \\frac{V_2}{300} \\implies V_2 = 2\\text{ liter}$$<br>3. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Walaupun tekanan dilipatduakan (yang cenderung memperkecil volume menjadi separuhnya), suhu mutlak juga dilipatduakan (yang cenderung memperbesar volume dua kali lipat), sehingga kedua pengaruh tersebut saling meniadakan dan volume gas tetap $2\\text{ liter}$."
    }
  },
  {
    id: "fis-termo-gas-gabungan-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-gabungan",
    category: "Perbandingan Kelipatan Variabel Keadaan Gas",
    difficulty: "mudah",
    statement: "Suatu gas ideal di dalam wadah silinder tertutup memiliki tekanan awal $P_0$. Jika volume gas diekspansikan menjadi $2$ kali volume semula dan suhu mutlaknya dinaikkan menjadi $3$ kali suhu mutlak semula, besar tekanan gas yang baru adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}67\\,P_0$",
      "$1{,}0\\,P_0$",
      "$1{,}5\\,P_0$",
      "$3{,}0\\,P_0$",
      "$6{,}0\\,P_0$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Berdasarkan persamaan keadaan gas ideal:<br>$$\\frac{P_1 \\times V_1}{T_1} = \\frac{P_2 \\times V_2}{T_2} \\implies P_2 = P_1 \\times \\left(\\frac{V_1}{V_2}\\right) \\times \\left(\\frac{T_2}{T_1}\\right)$$",
      steps: "1. Diketahui rasio besaran:<br>$V_2 = 2V_1 \\implies \\frac{V_1}{V_2} = \\frac{1}{2}$<br>$T_2 = 3T_1 \\implies \\frac{T_2}{T_1} = 3$<br>2. Masukkan ke perbandingan tekanan:<br>$$P_2 = P_0 \\times \\left(\\frac{1}{2}\\right) \\times 3 = \\frac{3}{2}\\,P_0 = 1{,}5\\,P_0$$<br>3. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jebakan perkalian: jangan langsung mengalikan $2 \\times 3 = 6$ (opsi E). Volume berada di penyebut saat mencari tekanan ($P \\propto 1/V$), sedangkan suhu berada di pembilang ($P \\propto T$)."
    }
  },
  {
    id: "fis-termo-gas-gabungan-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-gabungan",
    category: "Perubahan Kondisi Gas dari Suhu Beku ke Suhu Kamar",
    difficulty: "mudah",
    statement: "Sebuah sampel gas ideal memiliki volume $5{,}46\\text{ liter}$ pada suhu $0^\\circ\\text{C}$ dan tekanan $1{,}0\\text{ atm}$. Sampel gas tersebut kemudian dipindahkan ke ruangan bersuhu $27^\\circ\\text{C}$ dan tekanannya diturunkan menjadi $0{,}50\\text{ atm}$. Volume sampel gas pada kondisi baru tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6{,}0\\text{ liter}$",
      "$9{,}0\\text{ liter}$",
      "$10{,}92\\text{ liter}$",
      "$12{,}0\\text{ liter}$",
      "$15{,}0\\text{ liter}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Gunakan persamaan Boyle-Gay Lussac dengan memastikan semua suhu dinyatakan dalam Kelvin:<br>$$T_1 = 0 + 273 = 273\\text{ K}$$<br>$$T_2 = 27 + 273 = 300\\text{ K}$$<br>$$\\frac{P_1 \\times V_1}{T_1} = \\frac{P_2 \\times V_2}{T_2}$$",
      steps: "1. Masukkan nilai yang diketahui ke dalam persamaan:<br>$$\\frac{1{,}0 \\times 5{,}46}{273} = \\frac{0{,}50 \\times V_2}{300}$$<br>2. Sederhanakan ruas kiri:<br>$$\\frac{5{,}46}{273} = 0{,}02$$<br>3. Hitung $V_2$:<br>$$0{,}02 = \\frac{0{,}50 \\times V_2}{300} \\implies 0{,}50 \\times V_2 = 0{,}02 \\times 300 = 6$$<br>$$V_2 = \\frac{6}{0{,}50} = 12{,}0\\text{ liter}$$<br>4. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jika lupa memperhitungkan perubahan suhu (menganggap hanya ada perubahan tekanan), hasilnya adalah $5{,}46 / 0{,}5 = 10{,}92\\text{ liter}$ (opsi C). Pemanasan dari $273\\text{ K}$ ke $300\\text{ K}$ memberikan ekspansi tambahan."
    }
  },
  {
    id: "fis-termo-gas-gabungan-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-gabungan",
    category: "Menghitung Suhu Akhir Proses Gas",
    difficulty: "mudah",
    statement: "Gas ideal di dalam tangki silinder semula memiliki tekanan $2\\text{ atm}$ dan volume $3\\text{ liter}$ pada suhu mutlak $300\\text{ K}$. Gas tersebut diekspansikan hingga volumenya menjadi $6\\text{ liter}$, sedangkan tekanannya turun menjadi $1{,}5\\text{ atm}$. Suhu akhir gas ideal tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$225\\text{ K}$",
      "$350\\text{ K}$",
      "$400\\text{ K}$",
      "$450\\text{ K}$",
      "$600\\text{ K}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Persamaan keadaan gabungan gas ideal dapat diselesaikan untuk mencari suhu akhir $T_2$:<br>$$T_2 = T_1 \\times \\left(\\frac{P_2 \\times V_2}{P_1 \\times V_1}\\right)$$",
      steps: "1. Identifikasi parameter:<br>$P_1 = 2\\text{ atm}$, $V_1 = 3\\text{ liter}$, $T_1 = 300\\text{ K}$<br>$P_2 = 1{,}5\\text{ atm}$, $V_2 = 6\\text{ liter}$<br>2. Masukkan ke rumus:<br>$$\\frac{2 \\times 3}{300} = \\frac{1{,}5 \\times 6}{T_2}$$<br>$$\\frac{6}{300} = \\frac{9}{T_2} \\implies \\frac{1}{50} = \\frac{9}{T_2}$$<br>$$T_2 = 9 \\times 50 = 450\\text{ K}$$<br>3. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Periksa apakah hasil kali $P \\times V$ bertambah atau berkurang: $P_1 V_1 = 6$ sedangkan $P_2 V_2 = 9$. Karena $P V$ membesar, maka suhu mutlak $T$ pasti meningkat di atas $300\\text{ K}$."
    }
  },
  {
    id: "fis-termo-gas-gabungan-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-gabungan",
    category: "Sifat Tetapan Boyle-Gay Lussac",
    difficulty: "mudah",
    statement: "Menurut Hukum Boyle-Gay Lussac, nilai perbandingan $\\frac{P \\times V}{T}$ untuk gas ideal selalu bernilai konstan dalam sistem tertutup. Nilai tetapan dari perbandingan $\\frac{P \\times V}{T}$ tersebut secara fisis berbanding lurus dengan ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Luas penampang dinding wadah penampung gas",
      "Jumlah mol atau banyaknya partikel molekul gas yang terkurung dalam sistem",
      "Kerapatan massa dinding luar bejana",
      "Percepatan gravitasi tempat percobaan dilakukan",
      "Koefisien muai panjang bahan penyusun wadah"
    ],
    correctIndex: 1,
    solution: {
      concept: "Dari persamaan umum gas ideal $P V = n R T = N k_B T$, jika kedua ruas dibagi dengan suhu mutlak $T$, diperoleh:<br>$$\\frac{P \\times V}{T} = n \\times R = N \\times k_B$$<br>dengan $R$ adalah tetapan gas universal dan $k_B$ tetapan Boltzmann (keduanya bernilai konstan). Jadi, nilai $\\frac{P V}{T}$ berbanding lurus secara linier dengan jumlah mol gas ($n$) atau jumlah partikel gas ($N$).",
      steps: "1. Analisis penurunan persamaan gas ideal.<br>2. Nilai tetapan $\\frac{P V}{T}$ tidak dipengaruhi oleh bentuk wadah, gravitasi, maupun bahan bejana.<br>3. Nilai tetapan hanya ditentukan oleh seberapa banyak zat gas (jumlah partikel/mol) yang berada di dalam sistem tertutup tersebut.<br>4. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Konstanta $\\frac{PV}{T}$ bernilai tetap HANYA JIKA sistem tertutup (tidak ada partikel gas yang bocor keluar atau ditambahkan ke dalam wadah)."
    }
  }
];
