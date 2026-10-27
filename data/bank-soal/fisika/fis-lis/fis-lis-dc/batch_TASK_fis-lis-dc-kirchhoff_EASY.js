/**
 * Batch Task: TASK_fis-lis-dc-kirchhoff_EASY
 * SubTopic: Hukum-Hukum Kirchhoff (fis-lis-dc-kirchhoff)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-lis-dc-kirchhoff-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-kirchhoff",
    category: "Prinsip Fisika Dasar Hukum Kirchhoff",
    difficulty: "mudah",
    statement: "Hukum I Kirchhoff dan Hukum II Kirchhoff secara berurutan berlandaskan pada prinsip hukum kekekalan ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Muatan listrik dan energi",
      "Energi dan muatan listrik",
      "Momentum linier dan energi",
      "Muatan listrik dan momentum sudut",
      "Daya listrik dan tegangan"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hukum I Kirchhoff (KCL / Kirchhoff's Current Law) didasarkan pada prinsip hukum kekekalan muatan listrik di titik percabangan. Hukum II Kirchhoff (KVL / Kirchhoff's Voltage Law) didasarkan pada prinsip hukum kekekalan energi dalam suatu lintasan tertutup (loop).",
      steps: "1. Tinjau Hukum I Kirchhoff: $\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$. Muatan tidak dapat diciptakan atau dimusnahkan di simpul percabangan, sehingga jumlah muatan per detik yang masuk sama dengan yang keluar (kekekalan muatan).<br>2. Tinjau Hukum II Kirchhoff: $\\Sigma \\mathcal{E} + \\Sigma (I R) = 0$. Kerja total yang dilakukan oleh gaya elektrostatik dan non-elektrostatik pada satu putaran penuh loop sama dengan nol, yang mencerminkan kekekalan energi listrik.<br>3. Jadi urutan yang benar adalah muatan listrik dan energi (pilihan A).",
      pitfalls: "Sering tertukar urutan antara kekekalan muatan listrik (Hukum I) dan kekekalan energi (Hukum II)."
    }
  },
  {
    id: "fis-lis-dc-kirchhoff-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-kirchhoff",
    category: "Perhitungan Arus Percabangan Simpul Kirchhoff",
    difficulty: "mudah",
    statement: "Pada suatu simpul percabangan rangkaian listrik terdapat empat kawat penghantar. Arus listrik $I_1 = 5\\text{ A}$ dan $I_2 = 7\\text{ A}$ mengalir masuk menuju simpul, sedangkan arus $I_3 = 4\\text{ A}$ mengalir keluar dari simpul. Kuat arus listrik pada kawat keempat ($I_4$) dan arah alirannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$8\\text{ A}$, keluar dari simpul",
      "$8\\text{ A}$, masuk menuju simpul",
      "$16\\text{ A}$, keluar dari simpul",
      "$6\\text{ A}$, masuk menuju simpul",
      "$2\\text{ A}$, keluar dari simpul"
    ],
    correctIndex: 0,
    solution: {
      concept: "Berdasarkan Hukum I Kirchhoff, jumlah arus listrik yang masuk ke suatu titik simpul harus sama dengan jumlah arus yang keluar dari titik tersebut:<br>$$\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$$",
      steps: "1. Hitung total arus masuk yang diketahui:<br>$$\\Sigma I_{\\text{masuk, diketahui}} = I_1 + I_2 = 5\\text{ A} + 7\\text{ A} = 12\\text{ A}$$<br>2. Arus keluar yang diketahui adalah $I_3 = 4\\text{ A}$.<br>3. Karena arus masuk ($12\\text{ A}$) lebih besar daripada arus keluar ($4\\text{ A}$), maka kawat keempat ($I_4$) harus mengalirkan arus keluar dari simpul agar seimbang:<br>$$12\\text{ A} = 4\\text{ A} + I_4 \\implies I_4 = 12\\text{ A} - 4\\text{ A} = 8\\text{ A}$$<br>4. Jadi nilai $I_4 = 8\\text{ A}$ dengan arah keluar dari simpul (pilihan A).",
      pitfalls: "Keliru menentukan arah arus (mengira masuk) atau salah menjumlahkan aljabar arus pada simpul."
    }
  },
  {
    id: "fis-lis-dc-kirchhoff-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-kirchhoff",
    category: "Hukum II Kirchhoff Rangkaian Loop Tunggal Sederhana",
    difficulty: "mudah",
    statement: "Suatu rangkaian satu loop tertutup terdiri dari satu sumber tegangan $\\mathcal{E} = 12\\text{ Volt}$ dengan hambatan dalam $r = 1\\,\\Omega$ yang dihubungkan secara seri dengan dua buah resistor luar $R_1 = 2\\,\\Omega$ dan $R_2 = 3\\,\\Omega$. Kuat arus listrik yang mengalir dalam rangkaian tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1\\text{ Ampere}$",
      "$2\\text{ Ampere}$",
      "$2{,}4\\text{ Ampere}$",
      "$4\\text{ Ampere}$",
      "$6\\text{ Ampere}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pada rangkaian satu loop tertutup dengan satu sumber GGL dan beberapa hambatan seri, kuat arus listrik dirumuskan oleh Hukum II Kirchhoff:<br>$$I = \\frac{\\mathcal{E}}{\\Sigma R + r}$$",
      steps: "1. Hitung total hambatan pada rangkaian seri tertutup:<br>$$R_{\\text{total}} = R_1 + R_2 + r = 2\\,\\Omega + 3\\,\\Omega + 1\\,\\Omega = 6\\,\\Omega$$<br>2. Hitung kuat arus listrik yang mengalir:<br>$$I = \\frac{\\mathcal{E}}{R_{\\text{total}}} = \\frac{12\\text{ V}}{6\\,\\Omega} = 2\\text{ Ampere}$$<br>3. Jadi kuat arus rangkaian adalah $2\\text{ Ampere}$ (pilihan B).",
      pitfalls: "Lupa menyertakan hambatan dalam baterai ($r = 1\\,\\Omega$) pada pembagi hambatan sehingga membagi 12 dengan 5 ($2{,}4\\text{ A}$)."
    }
  },
  {
    id: "fis-lis-dc-kirchhoff-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-kirchhoff",
    category: "Beda Potensial Antara Dua Titik pada Suatu Lintasan",
    difficulty: "mudah",
    statement: "Pada suatu penggalan kawat rangkaian listrik dari titik $A$ ke titik $B$, arus listrik $I = 2\\text{ A}$ mengalir dari $A$ menuju $B$. Di antara $A$ dan $B$ terdapat resistor $R = 4\\,\\Omega$ dan sebuah sumber tegangan $\\mathcal{E} = 6\\text{ Volt}$ (dengan kutub positif menghadap ke titik $A$ dan kutub negatif ke titik $B$). Beda potensial antara titik $A$ dan $B$ ($V_{AB} = V_A - V_B$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\text{ Volt}$",
      "$6\\text{ Volt}$",
      "$8\\text{ Volt}$",
      "$14\\text{ Volt}$",
      "$16\\text{ Volt}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Beda potensial antara titik $A$ dan $B$ dihitung dengan menelusuri lintasan dari $A$ ke $B$:<br>$$V_{AB} = V_A - V_B = \\Sigma (I R) + \\Sigma \\mathcal{E}$$<br>dengan memperhatikan penurunan potensial searah arus ($+IR$) dan kutub GGL yang ditinggalkan.",
      steps: "1. Telusuri dari titik $A$ menuju titik $B$ mengikuti arah arus $I = 2\\text{ A}$:<br>- Melewati resistor $R = 4\\,\\Omega$ searah arus menghasilkan penurunan potensial: $\\Delta V_R = I R = 2\\text{ A} \\times 4\\,\\Omega = 8\\text{ Volt}$.<br>- Melewati baterai $\\mathcal{E} = 6\\text{ V}$ dari kutub positif ke kutub negatif menghasilkan penurunan potensial: $\\Delta V_{\\mathcal{E}} = 6\\text{ Volt}$.<br>2. Hubungan potensial kedua titik:<br>$$V_B = V_A - I R - \\mathcal{E} \\implies V_A - V_B = I R + \\mathcal{E}$$<br>$$V_{AB} = 8\\text{ V} + 6\\text{ V} = 14\\text{ Volt}$$<br>3. Jadi beda potensial $V_{AB}$ bernilai $14\\text{ Volt}$ (pilihan D).",
      pitfalls: "Siswa sering mengurangkan tegangan baterai dengan penurunan tegangan resistor ($8 - 6 = 2\\text{ V}$) karena keliru membaca arah penurunan potensial dari kutub positif ke kutub negatif."
    }
  },
  {
    id: "fis-lis-dc-kirchhoff-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-kirchhoff",
    category: "Tanda GGL pada Penelusuran Loop Kirchhoff",
    difficulty: "mudah",
    statement: "Dalam menerapkan Hukum II Kirchhoff ($\\Sigma \\mathcal{E} + \\Sigma I R = 0$) pada suatu lintasan loop tertutup, aturan tanda untuk GGL ($\\mathcal{E}$) yang benar adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Jika arah penelusuran loop menemui kutub positif sumber tegangan terlebih dahulu, maka nilai GGL bertanda positif",
      "Jika arah penelusuran loop menemui kutub positif sumber tegangan terlebih dahulu, maka nilai GGL bertanda negatif",
      "Tanda GGL selalu bertanda positif tanpa bergantung pada arah penelusuran loop",
      "Tanda GGL semata-mata ditentukan oleh arah aliran arus listrik, bukan oleh kutub sumber tegangan",
      "Jika loop searah jarum jam maka semua nilai GGL otomatis bertanda negatif"
    ],
    correctIndex: 0,
    solution: {
      concept: "Konvensi standar penelusuran loop pada Hukum II Kirchhoff ($\\Sigma \\mathcal{E} + \\Sigma I R = 0$) menyatakan bahwa tanda GGL ditentukan oleh kutub sumber tegangan yang pertama kali dijumpai oleh lintasan loop.",
      steps: "1. Jika arah penelusuran loop menjumpai kutub positif (garis panjang pada simbol baterai) terlebih dahulu, maka nilai GGL ditulis bertanda positif ($+\\mathcal{E}$).<br>2. Sebaliknya, jika arah penelusuran loop menjumpai kutub negatif (garis pendek) terlebih dahulu, maka nilai GGL ditulis bertanda negatif ($-\\mathcal{E}$).<br>3. Penentuan tanda GGL ini tidak dipengaruhi oleh arah arus listrik yang mengalir.<br>4. Jadi pernyataan yang tepat adalah pilihan A.",
      pitfalls: "Siswa sering tertukar dengan aturan tanda arus listrik ($I$), di mana arus bertanda positif jika searah loop dan negatif jika berlawanan arah loop."
    }
  }
];
