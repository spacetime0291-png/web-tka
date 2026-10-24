/**
 * Batch Task: TASK_fis-flu-statis-archimedes_EASY
 * SubTopic: Hukum Archimedes (fis-flu-statis-archimedes)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-flu-statis-archimedes-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-archimedes",
    category: "Hukum Archimedes",
    difficulty: "mudah",
    statement: "Hukum Archimedes menyatakan bahwa sebuah benda yang dicelupkan sebagian atau seluruhnya ke dalam zat cair akan mengalami gaya ke atas (gaya apung) yang besarnya ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Sama dengan berat fluida yang dipindahkan oleh benda tersebut",
      "Sama dengan berat total benda di udara",
      "Berbanding terbalik dengan volume benda yang tercelup",
      "Sama dengan selisih antara volume benda dan massa jenis fluida",
      "Berbanding lurus dengan kedalaman posisi benda dari dasar wadah"
    ],
    correctIndex: 0,
    solution: {
      concept: "Bunyi Hukum Archimedes menyatakan bahwa gaya apung ke atas ($F_a$) yang dialami suatu benda tepat sama dengan berat fluida yang dipindahkan (didesak) oleh bagian benda yang tercelup:<br>$$F_a = W_{\\text{fluida}} = m_f \\cdot g = \\rho_f \\cdot V_{bf} \\cdot g$$Di mana $\\rho_f$ adalah massa jenis fluida dan $V_{bf}$ adalah volume benda yang tercelup.",
      steps: "1. Evaluasi konsep dasar Hukum Archimedes:<br>Gaya angkat ke atas muncul karena selisih tekanan hidrostatis antara permukaan bawah dan permukaan atas benda.<br>2. Nilai gaya ini secara eksak setara dengan berat fluida yang terusir ($F_a = \\rho_f \\cdot g \\cdot V_{bf}$).<br>3. Jawaban yang tepat dan baku adalah opsi A.",
      pitfalls: "Siswa sering mengira gaya apung Archimedes sebanding dengan massa jenis benda itu sendiri atau bertambah besar jika benda tenggelam semakin dalam, padahal saat seluruh volume benda sudah tercelup, $V_{bf}$ konstan sehingga gaya apung tidak berubah terhadap kedalaman."
    }
  },
  {
    id: "fis-flu-statis-archimedes-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-archimedes",
    category: "Hukum Archimedes",
    difficulty: "mudah",
    statement: "Sebuah balok padat bervolume $V = 4 \\times 10^{-3}\\text{ m}^3$ dan bermassa jenis $\\rho_b = 2500\\text{ kg/m}^3$ dicelupkan seluruhnya ke dalam bejana berisi air (massa jenis air $\\rho_a = 1000\\text{ kg/m}^3$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar berat semu balok tersebut di dalam air adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$40\\text{ N}$",
      "$60\\text{ N}$",
      "$100\\text{ N}$",
      "$140\\text{ N}$",
      "$160\\text{ N}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Berat semu benda di dalam fluida ($W'$) adalah berat benda di udara ($W$) dikurangi gaya apung Archimedes ($F_a$):<br>$$W' = W - F_a$$Di mana $W = \\rho_b \\cdot V \\cdot g$ dan $F_a = \\rho_a \\cdot V \\cdot g$.",
      steps: "1. Hitung berat balok di udara:<br>$$W = \\rho_b \\cdot V \\cdot g = 2500\\text{ kg/m}^3 \\times (4 \\times 10^{-3}\\text{ m}^3) \\times 10\\text{ m/s}^2 = 100\\text{ N}$$<br>2. Hitung gaya apung Archimedes:<br>$$F_a = \\rho_a \\cdot V \\cdot g = 1000\\text{ kg/m}^3 \\times (4 \\times 10^{-3}\\text{ m}^3) \\times 10\\text{ m/s}^2 = 40\\text{ N}$$<br>3. Hitung berat semu di dalam air:<br>$$W' = W - F_a = 100\\text{ N} - 40\\text{ N} = 60\\text{ N}$$",
      pitfalls: "Terkecoh memilih $40\\text{ N}$ (opsi A) yang merupakan nilai gaya apung Archimedes ($F_a$), padahal soal secara spesifik menanyakan berat semu balok di dalam air ($W'$)."
    }
  },
  {
    id: "fis-flu-statis-archimedes-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-archimedes",
    category: "Hukum Archimedes",
    difficulty: "mudah",
    statement: "Sebuah balok kayu terapung di atas permukaan air danau (massa jenis air $\\rho_a = 1000\\text{ kg/m}^3$). Jika $\\frac{3}{4}$ bagian dari volume total balok kayu tersebut berada terbenam di bawah permukaan air, maka massa jenis balok kayu tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$250\\text{ kg/m}^3$",
      "$500\\text{ kg/m}^3$",
      "$600\\text{ kg/m}^3$",
      "$750\\text{ kg/m}^3$",
      "$850\\text{ kg/m}^3$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Pada kondisi benda terapung seimbang, berat total benda sama dengan gaya apung Archimedes:<br>$$W = F_a \\iff \\rho_b \\cdot V_b \\cdot g = \\rho_a \\cdot V_{bf} \\cdot g$$Sehingga massa jenis benda terapung sebanding dengan fraksi volume yang tercelup:<br>$$\\rho_b = \\rho_a \\cdot \\frac{V_{bf}}{V_b}$$",
      steps: "1. Masukkan nilai fraksi volume tercelup $\\frac{V_{bf}}{V_b} = \\frac{3}{4}$:<br>$$\\rho_b = 1000\\text{ kg/m}^3 \\times \\frac{3}{4} = 750\\text{ kg/m}^3$$",
      pitfalls: "Siswa sering menggunakan fraksi bagian yang terapung di udara ($1 - \\frac{3}{4} = \\frac{1}{4}$) sehingga keliru menghitung $\\rho_b = 250\\text{ kg/m}^3$ (opsi A)."
    }
  },
  {
    id: "fis-flu-statis-archimedes-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-archimedes",
    category: "Hukum Archimedes",
    difficulty: "mudah",
    statement: "Sebongkah es batu dengan massa jenis $\\rho_{\\text{es}} = 900\\text{ kg/m}^3$ terapung di dalam gelas berisi air murni (massa jenis $\\rho_{\\text{air}} = 1000\\text{ kg/m}^3$). Persentase volume es batu yang menyembul (muncul) di atas permukaan air adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5\\%$",
      "$10\\%$",
      "$15\\%$",
      "$80\\%$",
      "$90\\%$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Fraksi volume benda terapung yang tercelup di dalam cairan adalah:<br>$$\\frac{V_{\\text{celup}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{es}}}{\\rho_{\\text{air}}}$$Sedangkan fraksi volume yang muncul di atas permukaan zat cair adalah:<br>$$\\frac{V_{\\text{muncul}}}{V_{\\text{total}}} = 1 - \\frac{V_{\\text{celup}}}{V_{\\text{total}}} = 1 - \\frac{\\rho_{\\text{es}}}{\\rho_{\\text{air}}}$$",
      steps: "1. Hitung fraksi volume es yang terbenam di dalam air:<br>$$\\frac{V_{\\text{celup}}}{V_{\\text{total}}} = \\frac{900\\text{ kg/m}^3}{1000\\text{ kg/m}^3} = 0{,}9 = 90\\%$$<br>2. Hitung persentase volume es yang muncul di atas permukaan:<br>$$\\text{Persentase muncul} = 100\\% - 90\\% = 10\\%$$",
      pitfalls: "Terkecoh langsung memilih $90\\%$ (opsi E), padahal $90\\%$ adalah volume es yang berada di bawah permukaan air, sedangkan yang ditanyakan adalah bagian yang muncul di atas permukaan air."
    }
  },
  {
    id: "fis-flu-statis-archimedes-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-archimedes",
    category: "Hukum Archimedes",
    difficulty: "mudah",
    statement: "Tiga buah benda padat P, Q, dan R dimasukkan ke dalam bejana besar berisi air ($\rho_a = 1000\\text{ kg/m}^3$). Benda P mengapung dengan sebagian volumenya berada di atas air, benda Q melayang diam tepat di tengah air, dan benda R tenggelam hingga menyentuh dasar bejana. Perbandingan massa jenis ketiga benda ($\\rho_P, \\rho_Q, \\rho_R$) terhadap massa jenis air yang benar adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\rho_P < \\rho_a$, $\\rho_Q = \\rho_a$, dan $\\rho_R > \\rho_a$",
      "$\\rho_P > \\rho_a$, $\\rho_Q = \\rho_a$, dan $\\rho_R < \\rho_a$",
      "$\\rho_P = \\rho_a$, $\\rho_Q < \\rho_a$, dan $\\rho_R > \\rho_a$",
      "$\\rho_P < \\rho_a$, $\\rho_Q > \\rho_a$, dan $\\rho_R = \\rho_a$",
      "$\\rho_P = \\rho_Q = \\rho_R = \\rho_a$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Syarat fisis kesetimbangan benda di dalam fluida statis ditentukan oleh perbandingan massa jenis rata-rata benda ($\\rho_b$) terhadap massa jenis fluida ($\\rho_f$):<br>1) Terapung: $\\rho_b < \\rho_f$ (gaya apung saat tercelup total melebihi berat benda).<br>2) Melayang: $\\rho_b = \\rho_f$ (gaya apung tepat sama dengan berat benda pada volume total).<br>3) Tenggelam: $\\rho_b > \\rho_f$ (gaya apung maksimum lebih kecil daripada berat benda).",
      steps: "1. Benda P mengapung $\\implies \\rho_P < \\rho_a$.<br>2. Benda Q melayang $\\implies \\rho_Q = \\rho_a$.<br>3. Benda R tenggelam $\\implies \\rho_R > \\rho_a$.<br>Pernyataan yang tepat ada pada opsi A.",
      pitfalls: "Siswa terkadang salah membedakan antara kondisi melayang ($\rho_b = \rho_f$) dengan terapung, atau menganggap benda melayang memiliki gaya apung lebih besar daripada beratnya."
    }
  }
];
