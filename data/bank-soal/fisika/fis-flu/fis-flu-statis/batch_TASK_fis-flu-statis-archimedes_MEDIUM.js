/**
 * Batch Task: TASK_fis-flu-statis-archimedes_MEDIUM
 * SubTopic: Hukum Archimedes (fis-flu-statis-archimedes)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-flu-statis-archimedes-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-archimedes",
    category: "Hukum Archimedes",
    difficulty: "sedang",
    statement: "Sebuah balok kubus kayu dengan tinggi rusuk $10\\text{ cm}$ terapung di perbatasan antara dua cairan yang tidak saling bercampur, yaitu minyak (massa jenis $\\rho_m = 800\\text{ kg/m}^3$) di lapisan atas dan air (massa jenis $\\rho_a = 1000\\text{ kg/m}^3$) di lapisan bawah. Jika bagian balok yang berada di dalam air memiliki ketinggian $4\\text{ cm}$ dan sisanya berada di dalam lapisan minyak, maka massa jenis balok kubus tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$840\\text{ kg/m}^3$",
      "$880\\text{ kg/m}^3$",
      "$900\\text{ kg/m}^3$",
      "$920\\text{ kg/m}^3$",
      "$960\\text{ kg/m}^3$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Ketika benda terapung di antara dua cairan yang tak bercampur, gaya apung total adalah jumlah gaya apung yang diberikan oleh masing-masing cairan:<br>$$F_{a,\\text{total}} = F_{a,\\text{air}} + F_{a,\\text{minyak}} = \\rho_a \\cdot g \\cdot V_{\\text{air}} + \\rho_m \\cdot g \\cdot V_{\\text{minyak}}$$Pada kesetimbangan statis, gaya apung total sama dengan berat benda:<br>$$\\rho_b \\cdot g \\cdot V_{\\text{total}} = \\rho_a \\cdot g \\cdot V_{\\text{air}} + \\rho_m \\cdot g \\cdot V_{\\text{minyak}}$$Karena penampang balok seragam, rasio volume setara dengan rasio ketinggian.",
      steps: "1. Tentukan ketinggian di masing-masing cairan:<br>• Tinggi balok di air: $h_{\\text{air}} = 4\\text{ cm}$<br>• Tinggi balok di minyak: $h_{\\text{minyak}} = 10\\text{ cm} - 4\\text{ cm} = 6\\text{ cm}$<br>2. Hitung massa jenis balok:<br>$$\\rho_b = \\rho_a \\cdot \\frac{h_{\\text{air}}}{h_{\\text{total}}} + \\rho_m \\cdot \\frac{h_{\\text{minyak}}}{h_{\\text{total}}}$$<br>$$\\rho_b = 1000 \\times \\frac{4}{10} + 800 \\times \\frac{6}{10} = 400 + 480 = 880\\text{ kg/m}^3$$",
      pitfalls: "Siswa sering merata-ratakan langsung $\\frac{1000 + 800}{2} = 900\\text{ kg/m}^3$ (opsi C) tanpa memperhitungkan proporsi volume yang terbenam pada masing-masing lapisan fluida."
    }
  },
  {
    id: "fis-flu-statis-archimedes-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-archimedes",
    category: "Hukum Archimedes",
    difficulty: "sedang",
    statement: "Sebuah mahkota logam emas yang dicurigai berongga di bagian dalamnya memiliki massa terukur di udara sebesar $m = 386\\text{ gram}$. Ketika mahkota tersebut dicelupkan dan ditimbang seluruhnya di dalam air murni (massa jenis $\\rho_a = 1{,}0\\text{ g/cm}^3$), massa semunya terukur sebesar $m' = 360\\text{ gram}$. Jika massa jenis emas murni diketahui $\\rho_{\\text{emas}} = 19{,}3\\text{ g/cm}^3$, besar volume rongga udara di dalam mahkota tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ cm}^3$",
      "$6\\text{ cm}^3$",
      "$8\\text{ cm}^3$",
      "$10\\text{ cm}^3$",
      "$20\\text{ cm}^3$"
    ],
    correctIndex: 1,
    solution: {
      concept: "1) Volume total luar mahkota diperoleh dari gaya apung (selisih massa semu dalam air):<br>$$V_{\\text{total}} = \\frac{m - m'}{\\rho_a}$$<br>2) Volume bahan emas murni diperoleh dari massa nyata dibagi massa jenis emas:<br>$$V_{\\text{emas}} = \\frac{m}{\\rho_{\\text{emas}}}$$<br>3) Volume rongga dihitung dari selisihnya:<br>$$V_{\\text{rongga}} = V_{\\text{total}} - V_{\\text{emas}}$$",
      steps: "1. Hitung volume luar total mahkota:<br>$$V_{\\text{total}} = \\frac{386\\text{ g} - 360\\text{ g}}{1{,}0\\text{ g/cm}^3} = \\frac{26\\text{ g}}{1{,}0\\text{ g/cm}^3} = 26\\text{ cm}^3$$<br>2. Hitung volume sesungguhnya dari material emas murni:<br>$$V_{\\text{emas}} = \\frac{386\\text{ g}}{19{,}3\\text{ g/cm}^3} = 20\\text{ cm}^3$$<br>3. Hitung volume rongga:<br>$$V_{\\text{rongga}} = 26\\text{ cm}^3 - 20\\text{ cm}^3 = 6\\text{ cm}^3$$",
      pitfalls: "Terkecoh menganggap volume emas murni adalah jawaban akhir ($20\\text{ cm}^3$, opsi E), atau salah mengurangkan massa semu sehingga salah menentukan volume luar."
    }
  },
  {
    id: "fis-flu-statis-archimedes-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-archimedes",
    category: "Hukum Archimedes",
    difficulty: "sedang",
    statement: "Sebuah balon udara memiliki volume gas $V = 100\\text{ m}^3$ dan diisi dengan gas helium (massa jenis $\\rho_{\\text{He}} = 0{,}18\\text{ kg/m}^3$). Massa total struktur balon (kulit balon, tali, dan keranjang kosong) adalah $m_0 = 32\\text{ kg}$. Jika massa jenis udara di sekitar lokasi peluncuran adalah $\\rho_{\\text{udara}} = 1{,}20\\text{ kg/m}^3$ dan percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, massa beban muatan maksimum ($m_{\\text{beban}}$) yang masih dapat diangkat oleh balon tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$50\\text{ kg}$",
      "$70\\text{ kg}$",
      "$88\\text{ kg}$",
      "$102\\text{ kg}$",
      "$120\\text{ kg}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kondisi batas balon dapat terangkat terjadi ketika gaya apung udara ($F_a$) setimbang dengan berat total sistem:<br>$$F_a = W_{\\text{He}} + W_0 + W_{\\text{beban}}$$Di mana:<br>• $F_a = \\rho_{\\text{udara}} \\cdot V \\cdot g$<br>• $W_{\\text{He}} = \\rho_{\\text{He}} \\cdot V \\cdot g$<br>• $W_0 = m_0 \\cdot g$",
      steps: "1. Hitung gaya apung udara ke atas:<br>$$F_a = 1{,}20\\text{ kg/m}^3 \\times 100\\text{ m}^3 \\times 10\\text{ m/s}^2 = 1.200\\text{ N}$$<br>2. Hitung berat gas helium di dalam balon:<br>$$W_{\\text{He}} = 0{,}18\\text{ kg/m}^3 \\times 100\\text{ m}^3 \\times 10\\text{ m/s}^2 = 180\\text{ N}$$<br>3. Hitung berat struktur balon:<br>$$W_0 = 32\\text{ kg} \\times 10\\text{ m/s}^2 = 320\\text{ N}$$<br>4. Hitung berat beban maksimum dan massanya:<br>$$W_{\\text{beban}} = 1.200\\text{ N} - (180\\text{ N} + 320\\text{ N}) = 1.200 - 500 = 700\\text{ N}$$<br>$$m_{\\text{beban}} = \\frac{700\\text{ N}}{10\\text{ m/s}^2} = 70\\text{ kg}$$",
      pitfalls: "Siswa sering mengabaikan berat dari gas helium di dalam balon dan hanya mengurangkan gaya apung dengan massa struktur ($120 - 32 = 88\\text{ kg}$, opsi C)."
    }
  },
  {
    id: "fis-flu-statis-archimedes-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-archimedes",
    category: "Hukum Archimedes",
    difficulty: "sedang",
    statement: "Sebuah balok kayu dengan volume $V = 2 \\times 10^{-3}\\text{ m}^3$ dan massa jenis $\\rho_b = 600\\text{ kg/m}^3$ diikat menggunakan seutas tali ringan ke dasar sebuah tangki berisi air (massa jenis air $\\rho_a = 1000\\text{ kg/m}^3$). Akibat ikatan tali tersebut, seluruh bagian balok kayu terbenam sepenuhnya di dalam air. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar tegangan tali penahan balok tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ N}$",
      "$8\\text{ N}$",
      "$12\\text{ N}$",
      "$16\\text{ N}$",
      "$20\\text{ N}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pada balok yang terbenam dan ditahan oleh tali di dasar wadah, bekerja tiga gaya vertikal:<br>• Gaya apung ke atas: $F_a = \\rho_a \\cdot V \\cdot g$<br>• Gaya berat balok ke bawah: $W = \\rho_b \\cdot V \\cdot g$<br>• Gaya tegangan tali ke bawah: $T$<br>Persamaan kesetimbangan gaya vertikal ($\\Sigma F_y = 0$):<br>$$F_a - W - T = 0 \\implies T = F_a - W = (\\rho_a - \\rho_b) \\cdot V \\cdot g$$",
      steps: "1. Hitung selisih massa jenis:<br>$$\\Delta \\rho = \\rho_a - \\rho_b = 1000\\text{ kg/m}^3 - 600\\text{ kg/m}^3 = 400\\text{ kg/m}^3$$<br>2. Hitung tegangan tali:<br>$$T = 400\\text{ kg/m}^3 \\times (2 \\times 10^{-3}\\text{ m}^3) \\times 10\\text{ m/s}^2 = 8\\text{ N}$$",
      pitfalls: "Terkecoh menganggap tegangan tali sama dengan gaya apung murni ($20\\text{ N}$, opsi E) atau berat balok murni ($12\\text{ N}$, opsi C). Tegangan tali adalah selisih antara gaya apung dan gaya berat."
    }
  },
  {
    id: "fis-flu-statis-archimedes-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-archimedes",
    category: "Hukum Archimedes",
    difficulty: "sedang",
    statement: "Sebuah balok kayu kubus dengan volume $V = 8 \\times 10^{-3}\\text{ m}^3$ dan massa jenis $\\rho_b = 700\\text{ kg/m}^3$ terapung di atas permukaan air (massa jenis air $\\rho_a = 1000\\text{ kg/m}^3$). Agar seluruh kubus kayu tersebut tepat terbenam sepenuhnya di dalam air tanpa ada beban yang menyentuh air, diletakkan sebuah pelat timbal di atas permukaan atas balok kayu tersebut. Besar massa minimal pelat timbal tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}6\\text{ kg}$",
      "$2{,}4\\text{ kg}$",
      "$3{,}2\\text{ kg}$",
      "$4{,}8\\text{ kg}$",
      "$5{,}6\\text{ kg}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Saat balok tepat terbenam seluruhnya di dalam air, volume air yang dipindahkan sama dengan volume total balok ($V_{bf} = V$). Kesetimbangan gaya vertikal mensyaratkan:<br>$$F_a = W_{\\text{kayu}} + W_{\\text{timbal}}$$Di mana $W_{\\text{timbal}} = m_{\\text{timbal}} \\cdot g$, sehingga:<br>$$m_{\\text{timbal}} = (\\rho_a - \\rho_b) \\cdot V$$",
      steps: "1. Tentukan gaya apung saat balok tercelup penuh:<br>$$F_a = 1000\\text{ kg/m}^3 \\times (8 \\times 10^{-3}\\text{ m}^3) \\times 10\\text{ m/s}^2 = 80\\text{ N}$$<br>2. Tentukan berat balok kayu:<br>$$W_{\\text{kayu}} = 700\\text{ kg/m}^3 \\times (8 \\times 10^{-3}\\text{ m}^3) \\times 10\\text{ m/s}^2 = 56\\text{ N}$$<br>3. Hitung berat dan massa timbal yang dibutuhkan:<br>$$W_{\\text{timbal}} = 80\\text{ N} - 56\\text{ N} = 24\\text{ N}$$<br>$$m_{\\text{timbal}} = \\frac{24\\text{ N}}{10\\text{ m/s}^2} = 2{,}4\\text{ kg}$$",
      pitfalls: "Siswa sering mengira massa timbal sama dengan massa balok kayu ($5{,}6\\text{ kg}$, opsi E) atau salah mengalikan selisih massa jenis dengan volume."
    }
  }
];
