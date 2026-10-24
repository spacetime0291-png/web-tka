/**
 * Batch Task: TASK_fis-termo-gas-boyle_EASY
 * SubTopic: Hukum Boyle & Gay-Lussac (fis-termo-gas-boyle)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-termo-gas-boyle-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-boyle",
    category: "Hukum Boyle (Proses Isotermal)",
    difficulty: "mudah",
    statement: "Sejumlah gas ideal berada di dalam ruang tertutup berpenghisap dengan volume mula-mula $4\\text{ liter}$ pada tekanan $2\\text{ atm}$. Jika gas tersebut ditekan secara perlahan pada suhu tetap (proses isotermal) hingga volumenya menyusut menjadi $1\\text{ liter}$, besar tekanan gas ideal tersebut sekarang adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}5\\text{ atm}$",
      "$2{,}0\\text{ atm}$",
      "$4{,}0\\text{ atm}$",
      "$6{,}0\\text{ atm}$",
      "$8{,}0\\text{ atm}$"
    ],
    correctIndex: 4,
    solution: {
      concept: "Hukum Boyle menyatakan bahwa untuk massa gas ideal tertentu pada suhu mutlak konstan (isotermal), hasil kali antara tekanan ($P$) dan volume ($V$) selalu bernilai tetap:<br>$$P_1 \\times V_1 = P_2 \\times V_2$$",
      steps: "1. Tuliskan data yang diketahui:<br>$P_1 = 2\\text{ atm}$<br>$V_1 = 4\\text{ liter}$<br>$V_2 = 1\\text{ liter}$<br>2. Masukkan ke rumus Hukum Boyle:<br>$$2 \\times 4 = P_2 \\times 1$$<br>$$P_2 = 8\\text{ atm}$$<br>3. Jawaban yang tepat adalah pilihan E.",
      pitfalls: "Tekanan dan volume berbanding terbalik: jika volume berkurang menjadi $1/4$ kali semula, maka tekanannya justru meningkat $4$ kali lipat menjadi $8\\text{ atm}$. Jangan sampai terbalik mengalikan atau membagi."
    }
  },
  {
    id: "fis-termo-gas-boyle-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-boyle",
    category: "Hukum Gay-Lussac (Proses Isokhorik)",
    difficulty: "mudah",
    statement: "Gas ideal berada di dalam sebuah tangki baja kaku bervolume tetap dengan tekanan $1{,}5\\text{ atm}$ pada suhu $27^\\circ\\text{C}$. Jika tangki tersebut dipanaskan hingga suhunya mencapai $127^\\circ\\text{C}$, besar tekanan gas di dalam tangki menjadi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}8\\text{ atm}$",
      "$2{,}0\\text{ atm}$",
      "$2{,}4\\text{ atm}$",
      "$3{,}0\\text{ atm}$",
      "$7{,}0\\text{ atm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Hukum Gay-Lussac menyatakan bahwa pada volume gas konstan (isokhorik), tekanan gas berbanding lurus dengan suhu mutlaknya (Kelvin):<br>$$\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$$<br>Suhu wajib dikonversikan ke skala mutlak Kelvin ($T = ^\\circ\\text{C} + 273$).",
      steps: "1. Konversikan suhu Celsius ke Kelvin:<br>$T_1 = 27 + 273 = 300\\text{ K}$<br>$T_2 = 127 + 273 = 400\\text{ K}$<br>2. Masukkan nilai ke rumus Gay-Lussac:<br>$$\\frac{1{,}5}{300} = \\frac{P_2}{400}$$<br>$$P_2 = \\frac{1{,}5 \\times 400}{300} = 1{,}5 \\times \\frac{4}{3} = 2{,}0\\text{ atm}$$<br>3. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Kesalahan fatal yang sering terjadi adalah menggunakan suhu langsung dalam derajat Celsius tanpa konversi ke Kelvin: $P_2 = 1{,}5 \\times (127 / 27) \\approx 7{,}0\\text{ atm}$ (opsi E). Persamaan gas ideal hanya sah dalam skala temperatur mutlak Kelvin."
    }
  },
  {
    id: "fis-termo-gas-boyle-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-boyle",
    category: "Hukum Charles (Proses Isobarik)",
    difficulty: "mudah",
    statement: "Sejumlah gas ideal berada di dalam silinder yang dilengkapi piston bebas tanpa gesekan sehingga tekanannya selalu konstan (proses isobarik). Pada suhu $300\\text{ K}$, volume gas adalah $2\\text{ liter}$. Jika gas tersebut dipanaskan hingga suhunya mencapai $450\\text{ K}$, volume gas sekarang adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}5\\text{ liter}$",
      "$2{,}5\\text{ liter}$",
      "$3{,}0\\text{ liter}$",
      "$3{,}5\\text{ liter}$",
      "$4{,}0\\text{ liter}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Hukum Charles menyatakan bahwa untuk massa gas tertentu pada tekanan konstan (isobarik), volume gas berbanding lurus dengan suhu mutlaknya:<br>$$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$$",
      steps: "1. Identifikasi besaran:<br>$V_1 = 2\\text{ liter}$<br>$T_1 = 300\\text{ K}$<br>$T_2 = 450\\text{ K}$<br>2. Masukkan ke perbandingan Charles:<br>$$\\frac{2}{300} = \\frac{V_2}{450} \\implies V_2 = \\frac{2 \\times 450}{300} = 2 \\times 1{,}5 = 3{,}0\\text{ liter}$$<br>3. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Perhatikan bahwa proses isobarik ditandai oleh tekanan tetap (misalnya piston bebas bergerak). Karena suhu naik sebesar faktor $450/300 = 1{,}5$, maka volumenya juga memuai sebesar $1{,}5$ kali lipat."
    }
  },
  {
    id: "fis-termo-gas-boyle-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-boyle",
    category: "Representasi Grafik P-V Proses Isotermal",
    difficulty: "mudah",
    statement: "Pada diagram tekanan terhadap volume ($P-V$), kurva yang menggambarkan proses pemuaian gas ideal yang berlangsung pada suhu tetap (proses isotermal sesuai Hukum Boyle) memiliki bentuk berupa ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Garis lurus horizontal sejajar sumbu volume",
      "Garis lurus vertikal sejajar sumbu tekanan",
      "Garis lurus miring dengan gradien positif melewati titik asal $(0,0)$",
      "Kurva lengkung hiperbola sama sisi (isoterm)",
      "Kurva parabola menghadap ke atas"
    ],
    correctIndex: 3,
    solution: {
      concept: "Berdasarkan Hukum Boyle, hubungan antara tekanan dan volume pada suhu konstan adalah $P \\times V = C \\implies P = \\frac{C}{V}$.<br>Dalam matematika analitik, persamaan berbentuk $y = \\frac{c}{x}$ dengan $c > 0$ merepresentasikan grafik hiperbola sama sisi di kuadran pertama, yang dalam termodinamika disebut sebagai kurva isoterm.",
      steps: "1. Analisis persamaan matematis $P(V)$ untuk proses isotermal: $P \\propto 1/V$.<br>2. Garis horizontal adalah proses isobarik ($P = \\text{konstan}$).<br>3. Garis vertikal adalah proses isokhorik ($V = \\text{konstan}$).<br>4. Grafik $P = C/V$ adalah kurva lengkung hiperbolik yang menurun mulus seiring membesarnya volume.<br>5. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jangan tertukar dengan proses adiabatik yang juga melengkung ke bawah namun memiliki kelengkungan lebih curam ($P \\propto V^{-\\gamma}$ dengan $\\gamma > 1$)."
    }
  },
  {
    id: "fis-termo-gas-boyle-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-boyle",
    category: "Aplikasi Hukum Gay-Lussac pada Tekanan Ban",
    difficulty: "mudah",
    statement: "Tekanan udara di dalam ban sepeda motor terukur sebesar $240\\text{ kPa}$ saat pagi hari pada suhu $27^\\circ\\text{C}$. Setelah motor dikendarai menempuh jarak jauh di aspal terik siang hari, suhu udara di dalam ban meningkat menjadi $57^\\circ\\text{C}$. Dengan menganggap ban kaku sehingga volumenya tidak berubah, besar tekanan udara di dalam ban tersebut sekarang adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$248\\text{ kPa}$",
      "$256\\text{ kPa}$",
      "$264\\text{ kPa}$",
      "$272\\text{ kPa}$",
      "$507\\text{ kPa}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Karena volume ban diasumsikan konstan ($V_1 = V_2$), berlaku Hukum Gay-Lussac:<br>$$\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies P_2 = P_1 \\times \\frac{T_2}{T_1}$$",
      steps: "1. Konversikan suhu Celsius ke skala mutlak Kelvin:<br>$T_1 = 27 + 273 = 300\\text{ K}$<br>$T_2 = 57 + 273 = 330\\text{ K}$<br>2. Masukkan ke rumus:<br>$$P_2 = 240\\text{ kPa} \\times \\frac{330\\text{ K}}{300\\text{ K}} = 240 \\times 1{,}10 = 264\\text{ kPa}$$<br>3. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Menggunakan perbandingan suhu Celsius secara langsung akan menghasilkan $P_2 = 240 \\times (57/27) \\approx 507\\text{ kPa}$ (opsi E), yang keliru besar karena skala Celsius bukan skala termodinamika mutlak."
    }
  }
];
