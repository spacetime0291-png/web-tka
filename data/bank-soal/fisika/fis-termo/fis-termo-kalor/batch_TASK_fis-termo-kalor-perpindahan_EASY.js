/**
 * Batch Task: TASK_fis-termo-kalor-perpindahan_EASY
 * SubTopic: Konduksi, Konveksi, dan Radiasi (fis-termo-kalor-perpindahan)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-termo-kalor-perpindahan-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-perpindahan",
    category: "Laju Konduksi Kalor Batang Logam",
    difficulty: "mudah",
    statement: "Sebuah batang tembaga memiliki panjang $2\\text{ meter}$ dan luas penampang $0{,}01\\text{ m}^2$. Perbedaan suhu antara kedua ujung batang tersebut dijaga konstan sebesar $50^\\circ\\text{C}$. Jika konduktivitas termal tembaga adalah $400\\text{ W}/(\\text{m}\\cdot\\text{K})$, laju perpindahan kalor secara konduksi melalui batang tembaga tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$50\\text{ Watt}$",
      "$100\\text{ Watt}$",
      "$200\\text{ Watt}$",
      "$400\\text{ Watt}$",
      "$800\\text{ Watt}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Laju aliran kalor konduksi menurut hukum Fourier dirumuskan sebagai:<br>$$H = \\frac{Q}{t} = \\frac{k \\times A \\times \\Delta T}{L}$$<br>dengan $k$ adalah konduktivitas termal, $A$ luas penampang, $\\Delta T$ beda suhu, dan $L$ panjang batang.",
      steps: "1. Tulis besaran yang diketahui:<br>$k = 400\\text{ W}/(\\text{m}\\cdot\\text{K})$<br>$A = 0{,}01\\text{ m}^2$<br>$\\Delta T = 50^\\circ\\text{C} = 50\\text{ K}$<br>$L = 2\\text{ m}$<br>2. Hitung laju konduksi $H$:<br>$$H = \\frac{400 \\times 0{,}01 \\times 50}{2} = \\frac{200}{2} = 100\\text{ Watt}$$<br>3. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Perhatikan bahwa panjang batang berada di posisi penyebut ($L$ membagi hasil kali $k A \\Delta T$). Kesalahan menempatkan $L$ sebagai pengali akan menghasilkan nilai $400\\text{ Watt}$ (opsi D)."
    }
  },
  {
    id: "fis-termo-kalor-perpindahan-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-perpindahan",
    category: "Konsep Tiga Mekanisme Perpindahan Kalor",
    difficulty: "mudah",
    statement: "Energi panas matahari dapat merambat melintasi ruang hampa udara antariksa sejauh lebih dari 149 juta kilometer hingga akhirnya menghangatkan permukaan bumi. Mekanisme perpindahan kalor yang memungkinkan energi merambat melalui ruang hampa tanpa memerlukan partikel zat perantara adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Konduksi termal",
      "Konveksi alami",
      "Konveksi paksa",
      "Radiasi elektromagnetik",
      "Evaporasi latent"
    ],
    correctIndex: 3,
    solution: {
      concept: "Tiga mekanisme perpindahan kalor memiliki karakteristik media perantara yang berbeda:<br>1. Konduksi: perpindahan kalor melalui partikel zat tanpa disertai perpindahan massa zat perantara (butuh medium padat/kontak).<br>2. Konveksi: perpindahan kalor yang disertai aliran materi perantara (butuh medium fluida cair/gas).<br>3. Radiasi: perpindahan kalor dalam bentuk gelombang elektromagnetik (foton) yang tidak memerlukan medium perantara dan dapat merambat dalam ruang hampa.",
      steps: "1. Antariksa antara matahari dan lapisan atas atmosfer bumi berupa ruang hampa udara (vakum).<br>2. Konduksi dan konveksi mensyaratkan adanya atom/molekul materi perantara sehingga tidak mungkin terjadi di ruang hampa.<br>3. Radiasi merambat dalam bentuk gelombang elektromagnetik berkecepatan cahaya, sehingga mampu menembus ruang hampa.<br>4. Jadi, mekanisme yang dimaksud adalah radiasi.<br>5. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jangan terkecoh dengan konveksi atau konduksi yang hanya dapat berlangsung jika terdapat medium partikel materi (padat, cair, atau gas)."
    }
  },
  {
    id: "fis-termo-kalor-perpindahan-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-perpindahan",
    category: "Laju Perpindahan Kalor secara Konveksi",
    difficulty: "mudah",
    statement: "Sebuah pelat pemanas vertikal memiliki luas permukaan $0{,}5\\text{ m}^2$ dan berada pada suhu konstan $60^\\circ\\text{C}$. Pelat tersebut mendingin akibat aliran udara bebas di sekitarnya yang bersuhu $30^\\circ\\text{C}$. Jika koefisien perpindahan kalor konveksi udara adalah $h = 20\\text{ W}/(\\text{m}^2\\cdot^\\circ\\text{C})$, besar laju kalor yang dilepaskan pelat secara konveksi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$150\\text{ Watt}$",
      "$300\\text{ Watt}$",
      "$450\\text{ Watt}$",
      "$600\\text{ Watt}$",
      "$900\\text{ Watt}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Laju perpindahan kalor secara konveksi memenuhi hukum pendinginan Newton:<br>$$H = h \\times A \\times \\Delta T$$<br>dengan $h$ koefisien konveksi, $A$ luas permukaan yang bersentuhan dengan fluida, dan $\\Delta T = T_{\\text{permukaan}} - T_{\\text{fluida}}$.",
      steps: "1. Identifikasi parameter:<br>$h = 20\\text{ W}/(\\text{m}^2\\cdot^\\circ\\text{C})$<br>$A = 0{,}5\\text{ m}^2$<br>$\\Delta T = 60^\\circ\\text{C} - 30^\\circ\\text{C} = 30^\\circ\\text{C}$<br>2. Hitung laju kalor konveksi $H$:<br>$$H = 20 \\times 0{,}5 \\times 30 = 10 \\times 30 = 300\\text{ Watt}$$<br>3. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Pastikan menggunakan $\\Delta T = 60 - 30 = 30^\\circ\\text{C}$, bukan suhu pelat $60^\\circ\\text{C}$. Menggunakan $60^\\circ\\text{C}$ menghasilkan $600\\text{ Watt}$ (opsi D)."
    }
  },
  {
    id: "fis-termo-kalor-perpindahan-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-perpindahan",
    category: "Daya Radiasi Termal Benda Hitam",
    difficulty: "mudah",
    statement: "Sebuah benda hitam sempurna ($e = 1$) memiliki luas permukaan $2\\text{ m}^2$ dan berada pada suhu mutlak $1000\\text{ Kelvin}$. Jika konstanta Stefan-Boltzmann adalah $\\sigma = 5{,}67 \\times 10^{-8}\\text{ W}/(\\text{m}^2\\cdot\\text{K}^4)$, daya radiasi kalor total yang dipancarkan oleh seluruh permukaan benda tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$56{,}7\\text{ kW}$",
      "$113{,}4\\text{ kW}$",
      "$226{,}8\\text{ kW}$",
      "$567{,}0\\text{ kW}$",
      "$1134\\text{ kW}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Hukum Stefan-Boltzmann menyatakan bahwa daya radiasi kalor total ($P$) yang dipancarkan oleh permukaan benda sebanding dengan pangkat empat suhu mutlaknya:<br>$$P = e \\times \\sigma \\times A \\times T^4$$",
      steps: "1. Data soal: $e = 1$, $A = 2\\text{ m}^2$, $T = 1000\\text{ K} = 10^3\\text{ K}$, $\\sigma = 5{,}67 \\times 10^{-8}\\text{ W}/(\\text{m}^2\\cdot\\text{K}^4)$.<br>2. Hitung $T^4$:<br>$$T^4 = (10^3)^4 = 10^{12}\\text{ K}^4$$<br>3. Hitung daya radiasi $P$:<br>$$P = 1 \\times (5{,}67 \\times 10^{-8}) \\times 2 \\times 10^{12} = 11{,}34 \\times 10^4\\text{ Watt} = 113.400\\text{ Watt}$$<br>4. Konversi ke kilowatt:<br>$$P = \\frac{113.400}{1000} = 113{,}4\\text{ kW}$$<br>5. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Perhatikan pangkat suhu. Suhu harus dipangkatkan 4 ($T^4$), bukan dipangkatkan 2 ($T^2$). Jika hanya memangkatkan 2, hasilnya akan salah sebesar beberapa orde magnitudo."
    }
  },
  {
    id: "fis-termo-kalor-perpindahan-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-perpindahan",
    category: "Pengaruh Perubahan Suhu terhadap Laju Radiasi",
    difficulty: "mudah",
    statement: "Suatu filament lampu pijar memancarkan daya radiasi kalor sebesar $P_0$ saat suhunya $300\\text{ K}$. Jika suhu filament tersebut dinaikkan menjadi $600\\text{ K}$ dengan luas permukaan dan emisivitas yang dianggap tetap, besar daya radiasi yang dipancarkan sekarang adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\,P_0$",
      "$4\\,P_0$",
      "$8\\,P_0$",
      "$16\\,P_0$",
      "$32\\,P_0$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Berdasarkan Hukum Stefan-Boltzmann, daya radiasi berbanding lurus dengan pangkat empat suhu termodinamika ($P \\propto T^4$):<br>$$\\frac{P_2}{P_1} = \\left(\\frac{T_2}{T_1}\\right)^4$$",
      steps: "1. Diketahui rasio suhu mutlak:<br>$$\\frac{T_2}{T_1} = \\frac{600\\text{ K}}{300\\text{ K}} = 2$$<br>2. Masukkan ke perbandingan daya radiasi:<br>$$\\frac{P_2}{P_1} = (2)^4 = 16 \\implies P_2 = 16\\,P_0$$<br>3. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jebakan kelipatan linear: jika suhu naik 2 kali lipat, daya TIDAK naik 2 kali lipat (opsi A) ataupun 4 kali lipat ($2^2$, opsi B), melainkan $2^4 = 16$ kali lipat."
    }
  }
];
