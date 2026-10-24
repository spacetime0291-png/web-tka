/**
 * Batch Task: TASK_fis-termo-gas-ideal_MEDIUM
 * SubTopic: Persamaan Umum Gas Ideal (fis-termo-gas-ideal)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-termo-gas-ideal-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-ideal",
    category: "Kesamaan Kelajuan Efektif Dua Gas Berbeda Massa Molar",
    difficulty: "sedang",
    statement: "Gas hidrogen ($\\text{H}_2$, massa molar $M_r = 2\\text{ g/mol}$) berada pada suhu $27^\\circ\\text{C}$ ($300\\text{ K}$). Agar gas oksigen ($\\text{O}_2$, massa molar $M_r = 32\\text{ g/mol}$) memiliki kelajuan efektif molekul ($v_{\\text{rms}}$) yang sama persis dengan kelajuan efektif molekul gas hidrogen tersebut, suhu gas oksigen harus dinaikkan hingga mencapai ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$600\\text{ K}$",
      "$1200\\text{ K}$",
      "$2400\\text{ K}$",
      "$3600\\text{ K}$",
      "$4800\\text{ K}$"
    ],
    correctIndex: 4,
    solution: {
      concept: "Kelajuan efektif akar kuadrat rata-rata ($v_{\\text{rms}}$) molekul gas ideal dirumuskan oleh:<br>$$v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M_r}}$$<br>Agar dua jenis gas berbeda memiliki kelajuan efektif yang sama ($v_{\\text{rms}, 1} = v_{\\text{rms}, 2}$), maka rasio suhu mutlak terhadap massa molarnya harus sama:<br>$$\\frac{T_1}{M_{r1}} = \\frac{T_2}{M_{r2}} \\implies T_2 = T_1 \\times \\frac{M_{r2}}{M_{r1}}$$ ",
      steps: "1. Identifikasi data gas hidrogen: $T_1 = 300\\text{ K}$, $M_{r1} = 2\\text{ g/mol}$.<br>2. Data gas oksigen: $M_{r2} = 32\\text{ g/mol}$.<br>3. Samakan rumus kelajuan efektif kedua gas:<br>$$\\frac{300}{2} = \\frac{T_2}{32}$$<br>$$150 = \\frac{T_2}{32} \\implies T_2 = 150 \\times 32 = 4800\\text{ K}$$<br>4. Jawaban yang tepat adalah pilihan E.",
      pitfalls: "Lupa bahwa $v_{\\text{rms}}$ berbanding terbalik dengan akar massa molar. Karena oksigen 16 kali lebih berat daripada hidrogen, suhunya harus dinaikkan 16 kali lipat ($300 \\times 16 = 4800\\text{ K}$) agar kecepatan gerak acak termalnya setara."
    }
  },
  {
    id: "fis-termo-gas-ideal-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-ideal",
    category: "Tekanan Gas dari Kerapatan Energi Kinetik",
    difficulty: "sedang",
    statement: "Sebuah bejana tertutup bervolume $2\\text{ liter}$ berisi gas ideal monoatomik. Jika total energi kinetik translasi dari seluruh partikel gas yang berada di dalam bejana tersebut terukur sebesar $600\\text{ Joule}$, besar tekanan gas ideal di dalam bejana adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}0 \\times 10^5\\text{ Pa}$",
      "$1{,}5 \\times 10^5\\text{ Pa}$",
      "$2{,}0 \\times 10^5\\text{ Pa}$",
      "$3{,}0 \\times 10^5\\text{ Pa}$",
      "$4{,}5 \\times 10^5\\text{ Pa}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Berdasarkan teori kinetik gas, tekanan gas ideal ($P$) berhubungan langsung dengan kerapatan energi kinetik translasi total ($E_{k,\\text{tot}}$) per satuan volume ($V$):<br>$$P = \\frac{2}{3} \\frac{E_{k,\\text{tot}}}{V}$$",
      steps: "1. Konversikan volume ke satuan meter kubik: $V = 2\\text{ liter} = 2 \\times 10^{-3}\\text{ m}^3$.<br>2. Data energi kinetik total: $E_{k,\\text{tot}} = 600\\text{ J}$.<br>3. Hitung tekanan gas $P$:<br>$$P = \\frac{2}{3} \\times \\frac{600\\text{ J}}{2 \\times 10^{-3}\\text{ m}^3} = \\frac{400}{2 \\times 10^{-3}} = 200.000\\text{ Pa} = 2{,}0 \\times 10^5\\text{ Pa}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Faktor pengali adalah $2/3$, bukan $3/2$ atau $1/2$. Rumus $P = \\frac{2}{3} \\frac{E_k}{V}$ diturunkan langsung dari $P V = N k_B T$ dan $\\bar{E}_k = \\frac{3}{2} k_B T$."
    }
  },
  {
    id: "fis-termo-gas-ideal-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-ideal",
    category: "Energi Dalam Gas Diatomik Suhu Tinggi",
    difficulty: "sedang",
    statement: "Sebanyak $2\\text{ mol}$ gas diatomik (seperti gas nitrogen $\\text{N}_2$) dipanaskan hingga mencapai suhu tinggi $1000\\text{ K}$, di mana pada suhu tersebut mode vibrasi molekul telah teraktivasi secara penuh di samping mode translasi dan rotasi. Jika tetapan umum gas adalah $R$, besar energi dalam total ($U$) sistem gas tersebut dinyatakan dalam $R$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3000\\,R\\text{ Joule}$",
      "$5000\\,R\\text{ Joule}$",
      "$6000\\,R\\text{ Joule}$",
      "$7000\\,R\\text{ Joule}$",
      "$9000\\,R\\text{ Joule}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Teorema ekipartisi energi untuk gas diatomik memiliki derajat kebebasan ($f$) yang bergantung pada rentang suhu:<br>- Suhu rendah ($\\approx 100\\text{ K}$): 3 translasi ($f = 3$).<br>- Suhu kamar/sedang ($\\approx 300\\text{ K}$): 3 translasi + 2 rotasi ($f = 5$).<br>- Suhu tinggi ($T \\ge 1000\\text{ K}$): 3 translasi + 2 rotasi + 2 vibrasi ($f = 7$).<br>Energi dalam total dirumuskan sebagai: $U = \\frac{f}{2} n R T$.",
      steps: "1. Pada suhu tinggi $1000\\text{ K}$, derajat kebebasan molekul gas diatomik adalah $f = 7$.<br>2. Data: $n = 2\\text{ mol}$, $T = 1000\\text{ K}$.<br>3. Hitung energi dalam total $U$:<br>$$U = \\frac{7}{2} \\times 2\\text{ mol} \\times R \\times 1000\\text{ K} = 7 \\times 1000 \\times R = 7000\\,R\\text{ Joule}$$<br>4. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jika keliru menggunakan derajat kebebasan suhu kamar ($f = 5$), hasilnya adalah $5000\\,R\\text{ J}$ (opsi B). Pada suhu tinggi $\\ge 1000\\text{ K}$, energi getaran ikatan antaratom (vibrasi kinetik + potensial = 2 derajat kebebasan) aktif secara penuh."
    }
  },
  {
    id: "fis-termo-gas-ideal-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-ideal",
    category: "Perbandingan Kelajuan Efektif Gas Hidrogen dan Oksigen",
    difficulty: "sedang",
    statement: "Dua bejana identik A dan B berada pada temperatur yang sama. Bejana A berisi gas hidrogen ($\\text{H}_2$ dengan massa molekul $M_{rA} = 2\\text{ g/mol}$) dan bejana B berisi gas oksigen ($\\text{O}_2$ dengan massa molekul $M_{rB} = 32\\text{ g/mol}$). Perbandingan kelajuan efektif molekul gas hidrogen terhadap kelajuan efektif molekul gas oksigen ($\\frac{v_{\\text{rms}, A}}{v_{\\text{rms}, B}}$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 : 4$",
      "$1 : 2$",
      "$2 : 1$",
      "$4 : 1$",
      "$16 : 1$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Pada suhu mutlak yang sama ($T_A = T_B$), kelajuan efektif molekul gas ideal berbanding terbalik dengan akar kuadrat massa molar gas tersebut:<br>$$v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M_r}} \\implies \\frac{v_{\\text{rms}, A}}{v_{\\text{rms}, B}} = \\sqrt{\\frac{M_{rB}}{M_{rA}}}$$",
      steps: "1. Identifikasi massa molar kedua gas: $M_{rA} = 2\\text{ g/mol}$ dan $M_{rB} = 32\\text{ g/mol}$.<br>2. Masukkan ke perbandingan:<br>$$\\frac{v_{\\text{rms}, A}}{v_{\\text{rms}, B}} = \\sqrt{\\frac{32}{2}} = \\sqrt{16} = 4$$<br>3. Jadi, perbandingan kelajuan efektif molekul gas hidrogen terhadap oksigen adalah $4 : 1$.<br>4. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jangan lupa menarik akar kuadrat dari rasio massa molar ($32/2 = 16 \\implies \\sqrt{16} = 4$, bukan $16$, opsi E). Selain itu, gas yang lebih ringan (hidrogen) bergerak lebih cepat daripada gas yang lebih berat (oksigen)."
    }
  },
  {
    id: "fis-termo-gas-ideal-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-ideal",
    category: "Perubahan Energi Dalam Akibat Kenaikan Suhu",
    difficulty: "sedang",
    statement: "Sebanyak $0{,}50\\text{ mol}$ gas ideal monoatomik berada di dalam silinder tertutup. Gas tersebut dipanaskan sehingga suhunya naik dari $27^\\circ\\text{C}$ menjadi $227^\\circ\\text{C}$. Jika tetapan gas universal adalah $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$, besar perubahan energi dalam ($\\Delta U$) gas monoatomik tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$623{,}6\\text{ Joule}$",
      "$831{,}4\\text{ Joule}$",
      "$1247{,}1\\text{ Joule}$",
      "$1662{,}8\\text{ Joule}$",
      "$2494{,}2\\text{ Joule}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Perubahan energi dalam ($\\Delta U$) gas ideal hanya bergantung pada perubahan suhu mutlaknya (fungsi keadaan suhu):<br>$$\\Delta U = \\frac{3}{2} n R \\Delta T$$<br>dengan $\\Delta T = T_2 - T_1$ dalam skala Kelvin atau Celsius (karena rentang satu derajat Celsius sama dengan satu Kelvin).",
      steps: "1. Hitung perubahan suhu: $\\Delta T = 227^\\circ\\text{C} - 27^\\circ\\text{C} = 200^\\circ\\text{C} = 200\\text{ K}$.<br>2. Data: $n = 0{,}50\\text{ mol}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.<br>3. Hitung $\\Delta U$:<br>$$\\Delta U = \\frac{3}{2} \\times 0{,}50\\text{ mol} \\times 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 200\\text{ K}$$<br>$$\\Delta U = 1{,}5 \\times 0{,}50 \\times 8{,}314 \\times 200 = 1{,}5 \\times 100 \\times 8{,}314 = 150 \\times 8{,}314 = 1247{,}1\\text{ Joule}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Pastikan menghitung perubahan suhu $\\Delta T = 200\\text{ K}$, bukan memasukkan suhu akhir $T_2 = 500\\text{ K}$ langsung ke dalam rumus."
    }
  }
];
