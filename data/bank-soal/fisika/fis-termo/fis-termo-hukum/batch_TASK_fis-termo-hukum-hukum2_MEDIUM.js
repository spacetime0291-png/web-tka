/**
 * Batch Task: TASK_fis-termo-hukum-hukum2_MEDIUM
 * SubTopic: Hukum II Termodinamika & Entropi (fis-termo-hukum-hukum2)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-termo-hukum-hukum2-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum2",
    category: "Perubahan Entropi Semesta pada Aliran Kalor Konduksi",
    difficulty: "sedang",
    statement: "Kalor sebesar $1.200\\text{ J}$ mengalir secara spontan melalui batang logam dari reservoir panas bersuhu $600\\text{ K}$ ke reservoir dingin bersuhu $300\\text{ K}$. Total perubahan entropi alam semesta ($\\Delta S_{\\text{semesta}}$) akibat proses konduksi kalor tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0\\text{ J/K}$",
      "$+2\\text{ J/K}$",
      "$-2\\text{ J/K}$",
      "$+6\\text{ J/K}$",
      "$+4\\text{ J/K}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Entropi total semesta pada perpindahan kalor konduksi tak-reversibel di antara dua reservoir bersuhu tetap dirumuskan sebagai penjumlahan perubahan entropi reservoir panas dan reservoir dingin:<br>$$\\Delta S_{\\text{semesta}} = \\Delta S_H + \\Delta S_C = -\\frac{Q}{T_H} + \\frac{Q}{T_C}$$",
      steps: "1. Perubahan entropi reservoir panas ($T_H = 600\\text{ K}$ melepaskan kalor $Q = 1.200\\text{ J}$):<br>$$\\Delta S_H = -\\frac{1.200\\text{ J}}{600\\text{ K}} = -2\\text{ J/K}$$<br>2. Perubahan entropi reservoir dingin ($T_C = 300\\text{ K}$ menyerap kalor $Q = 1.200\\text{ J}$):<br>$$\\Delta S_C = +\\frac{1.200\\text{ J}}{300\\text{ K}} = +4\\text{ J/K}$$<br>3. Hitung perubahan total entropi semesta:<br>$$\\Delta S_{\\text{semesta}} = \\Delta S_H + \\Delta S_C = -2\\text{ J/K} + 4\\text{ J/K} = +2\\text{ J/K}$$<br>4. Jadi, pilihan yang tepat adalah B.",
      pitfalls: "Siswa sering menganggap bahwa karena kalor yang berpindah kekal ($Q_{\\text{lepas}} = Q_{\\text{serap}}$), maka entropi totalnya juga kekal bernilai nol. Padahal karena $T_C < T_H$, pertambahan entropi di sisi dingin selalu lebih besar daripada penurunan entropi di sisi panas."
    }
  },
  {
    id: "fis-termo-hukum-hukum2-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum2",
    category: "Perubahan Entropi Ekspansi Isotermal Gas Ideal",
    difficulty: "sedang",
    statement: "Sebanyak $1\\text{ mol}$ gas ideal mengalami pemuaian secara isotermal dan reversibel pada suhu $300\\text{ K}$ sehingga volumenya mengembang dari $V_1 = 2\\text{ liter}$ menjadi $V_2 = 4\\text{ liter}$. Jika konstanta gas universal $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$ dan $\\ln 2 \\approx 0{,}693$, besar perubahan entropi gas tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2{,}88\\text{ J/K}$",
      "$4{,}15\\text{ J/K}$",
      "$5{,}76\\text{ J/K}$",
      "$8{,}31\\text{ J/K}$",
      "$11{,}52\\text{ J/K}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada proses isotermal reversibel gas ideal, perubahan energi dalam $\\Delta U = 0$ sehingga $Q = W = nRT \\ln\\left(\\frac{V_2}{V_1}\\right)$. Maka perubahan entropi gas dirumuskan sebagai:<br>$$\\Delta S = \\frac{Q}{T} = n R \\ln\\left(\\frac{V_2}{V_1}\\right)$$",
      steps: "1. Identifikasi data: $n = 1\\text{ mol}$, $V_1 = 2\\text{ L}$, $V_2 = 4\\text{ L}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.<br>2. Rasio volume adalah $\\frac{V_2}{V_1} = \\frac{4}{2} = 2$.<br>3. Hitung perubahan entropi gas:<br>$$\\Delta S = n R \\ln 2 = 1 \\times 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 0{,}693 \\approx 5{,}76\\text{ J/K}$$<br>4. Dengan demikian, jawaban yang benar adalah pilihan C.",
      pitfalls: "Sering mengira bahwa karena suhunya tetap ($\\Delta T = 0$), perubahan entropi $\\Delta S = 0$. Pada pemuaian isotermal, gas menyerap kalor dari lingkungan untuk melakukan usaha, sehingga entropi gas bertambah ($\\Delta S > 0$)."
    }
  },
  {
    id: "fis-termo-hukum-hukum2-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum2",
    category: "Perubahan Entropi pada Pemanasan Suhu Variabel",
    difficulty: "sedang",
    statement: "Suatu zat cair bermassa $0{,}5\\text{ kg}$ dengan kalor jenis $c = 4.000\\text{ J}/(\\text{kg}\\cdot\\text{K})$ dipanaskan secara perlahan dari suhu $300\\text{ K}$ hingga mencapai $600\\text{ K}$ pada tekanan konstan. Jika diketahui $\\ln 2 \\approx 0{,}693$, perubahan entropi zat cair tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$693\\text{ J/K}$",
      "$1.000\\text{ J/K}$",
      "$1.386\\text{ J/K}$",
      "$2.000\\text{ J/K}$",
      "$2.772\\text{ J/K}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Jika suhu sistem berubah secara kontinu dari $T_1$ ke $T_2$, perubahan entropi dihitung melalui integrasi:<br>$$\\Delta S = \\int_{T_1}^{T_2} \\frac{dQ}{T} = \\int_{T_1}^{T_2} \\frac{m c\\, dT}{T} = m c \\ln\\left(\\frac{T_2}{T_1}\\right)$$",
      steps: "1. Kapasitas kalor zat cair:<br>$$C = m c = 0{,}5\\text{ kg} \\times 4.000\\text{ J}/(\\text{kg}\\cdot\\text{K}) = 2.000\\text{ J/K}$$<br>2. Rasio suhu mutlak:<br>$$\\frac{T_2}{T_1} = \\frac{600\\text{ K}}{300\\text{ K}} = 2$$<br>3. Hitung perubahan entropi zat cair:<br>$$\\Delta S = 2.000 \\times \\ln(2) = 2.000 \\times 0{,}693 = 1.386\\text{ J/K}$$<br>4. Jadi jawaban yang benar adalah pilihan C.",
      pitfalls: "Jangan menggunakan rumus suhu tetap $\\Delta S = \\frac{Q}{T_{\\text{rata-rata}}}$ atau membagi kalor total $Q$ dengan suhu awal/akhir secara langsung. Integrasi wajib dilakukan jika suhu berubah selama transfer kalor."
    }
  },
  {
    id: "fis-termo-hukum-hukum2-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum2",
    category: "Uji Validitas Mesin Kalor (Teorema Carnot)",
    difficulty: "sedang",
    statement: "Seorang perancang mengklaim telah menciptakan mesin kalor yang bekerja di antara reservoir panas $500^\\circ\\text{C}$ dan reservoir dingin $100^\\circ\\text{C}$. Mesin tersebut dilaporkan menyerap kalor sebesar $10.000\\text{ J}$ dari reservoir panas dan menghasilkan usaha luar sebesar $6.000\\text{ J}$. Berdasarkan Hukum II Termodinamika, klaim tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Benar, karena efisiensinya $60\\%$ masih berada di bawah $100\\%$ sehingga memenuhi Hukum I Termodinamika",
      "Mustahil (tidak benar), karena efisiensi teoritis maksimum mesin Carnot pada kedua suhu tersebut hanya sekitar $51{,}7\\%$",
      "Benar, karena efisiensi Carnot teoritisnya adalah $\\frac{500 - 100}{500} = 80\\%$",
      "Mustahil, karena mesin kalor sama sekali tidak boleh membuang kalor ke lingkungan dingin",
      "Benar, selama mesin beroperasi menggunakan siklus diesel bertahap ganda"
    ],
    correctIndex: 1,
    solution: {
      concept: "Teorema Carnot menyatakan bahwa tidak ada mesin kalor riil maupun reversibel yang dapat memiliki efisiensi lebih tinggi daripada efisiensi mesin Carnot ideal yang bekerja di antara dua batas reservoir suhu mutlak yang sama:<br>$$\\eta_{\\text{maks}} = \\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H}$$",
      steps: "1. Konversikan batas suhu kerja ke Kelvin mutlak:<br>$$T_H = 500 + 273 = 773\\text{ K}$$<br>$$T_C = 100 + 273 = 373\\text{ K}$$<br>2. Hitung efisiensi maksimum Carnot teoritis:<br>$$\\eta_{\\text{Carnot}} = 1 - \\frac{373}{773} = \\frac{400}{773} \\approx 0{,}5174 = 51{,}74\\%$$<br>3. Hitung efisiensi yang diklaim perancang:<br>$$\\eta_{\\text{klaim}} = \\frac{W}{Q_H} = \\frac{6.000\\text{ J}}{10.000\\text{ J}} = 0{,}60 = 60\\%$$<br>4. Karena $\\eta_{\\text{klaim}} (60\\%) > \\eta_{\\text{Carnot}} (51{,}7\\%)$, mesin tersebut melanggar Hukum II Termodinamika sehingga klaim tersebut mustahil terwujud.<br>5. Jadi pilihan B adalah jawaban yang benar.",
      pitfalls: "Sering menggunakan suhu Celsius secara langsung: $\\eta = 1 - \\frac{100}{500} = 80\\%$, yang menyesatkan dan menghasilkan kesimpulan keliru bahwa klaim $60\\%$ mungkin dicapai."
    }
  },
  {
    id: "fis-termo-hukum-hukum2-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum2",
    category: "Perubahan Entropi Pencampuran Air Terisolasi",
    difficulty: "sedang",
    statement: "Sebanyak $1\\text{ kg}$ air bersuhu $360\\text{ K}$ dicampurkan dengan $1\\text{ kg}$ air bersuhu $300\\text{ K}$ di dalam bejana kalorimeter terisolasi sempurna ($c_{\\text{air}} = 4.200\\text{ J}/(\\text{kg}\\cdot\\text{K})$). Setelah mencapai kesetimbangan termal pada suhu $330\\text{ K}$, perubahan total entropi semesta ($\\Delta S_{\\text{semesta}}$) bernilai positif karena .... (diketahui $\\ln(1{,}1) \\approx 0{,}0953$ dan $\\ln(11/12) \\approx -0{,}0870$)",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Penurunan entropi air panas persis meniadakan kenaikan entropi air dingin sehingga totalnya nol",
      "Penurunan entropi air panas bermagnitudo lebih besar daripada pertambahan entropi air dingin",
      "Pertambahan entropi air dingin bermagnitudo lebih besar daripada penurunan entropi air panas sehingga $\\Delta S_{\\text{semesta}} \\approx +34{,}9\\text{ J/K}$",
      "Kedua massa air sama-sama melepaskan kalor ke udara bebas di sekitar wadah",
      "Tidak terjadi perubahan fase zat sehingga entropi tidak dipengaruhi suhu"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada pencampuran tak-reversibel di dalam bejana adiabatik terisolasi, kalor diserap oleh fluida dingin dan dilepaskan oleh fluida panas ($Q_{\\text{lepas}} = Q_{\\text{terima}}$). Total perubahan entropi semesta adalah $\\Delta S_{\\text{semesta}} = \\Delta S_1 + \\Delta S_2$.",
      steps: "1. Perubahan entropi air panas ($360\\text{ K} \\to 330\\text{ K}$):<br>$$\\Delta S_1 = m c \\ln\\left(\\frac{330}{360}\\right) = 1 \\times 4.200 \\times \\ln\\left(\\frac{11}{12}\\right) = 4.200 \\times (-0{,}0870) = -365{,}4\\text{ J/K}$$<br>2. Perubahan entropi air dingin ($300\\text{ K} \\to 330\\text{ K}$):<br>$$\\Delta S_2 = m c \\ln\\left(\\frac{330}{300}\\right) = 1 \\times 4.200 \\times \\ln(1{,}1) = 4.200 \\times 0{,}0953 = +400{,}26\\text{ J/K}$$<br>3. Total perubahan entropi semesta:<br>$$\\Delta S_{\\text{semesta}} = \\Delta S_1 + \\Delta S_2 = -365{,}4 + 400{,}26 = +34{,}86\\text{ J/K} \\approx +34{,}9\\text{ J/K}$$<br>4. Karena pertambahan entropi air dingin lebih besar daripada penurunan entropi air panas, entropi total semesta meningkat ($\\Delta S > 0$), sesuai Hukum II Termodinamika.<br>5. Jadi pilihan yang benar adalah C.",
      pitfalls: "Terkadang mengira sistem tertutup terisolasi tidak mengalami perubahan entropi total. Meskipun kalor tidak bertukar dengan lingkungan luar wadah, proses transfer panas internal antara air panas dan dingin bersifat spontan dan ireversibel, menghasilkan entropi netto semesta $\\Delta S > 0$."
    }
  }
];
