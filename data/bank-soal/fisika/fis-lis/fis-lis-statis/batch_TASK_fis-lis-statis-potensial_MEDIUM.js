/**
 * Batch Task: TASK_fis-lis-statis-potensial_MEDIUM
 * SubTopic: Energi Potensial & Potensial Listrik (fis-lis-statis-potensial)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-lis-statis-potensial-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-potensial",
    category: "Letak Titik dengan Potensial Listrik Nol",
    difficulty: "sedang",
    statement: "Dua buah muatan titik $q_A = +6\\,\\mu\\text{C}$ dan $q_B = -2\\,\\mu\\text{C}$ terpisah sejauh $16\\text{ cm}$ di udara. Titik $P$ terletak pada segmen garis hubung di antara kedua muatan tersebut. Jika potensial listrik total di titik $P$ bernilai nol ($V_P = 0$), jarak titik $P$ dari muatan $q_A$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ cm}$",
      "$8\\text{ cm}$",
      "$10\\text{ cm}$",
      "$12\\text{ cm}$",
      "$14\\text{ cm}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Potensial listrik adalah besaran skalar, sehingga potensial total di titik $P$ merupakan penjumlahan aljabar biasa dari potensial yang dihasilkan oleh masing-masing muatan:<br>$$V_P = V_A + V_B = k \\frac{q_A}{r_A} + k \\frac{q_B}{r_B} = 0$$",
      steps: "1. Misalkan jarak titik $P$ dari $q_A$ adalah $x$, maka jarak $P$ dari $q_B$ adalah $16 - x$.<br>2. Masukkan ke dalam persamaan potensial total bernilai nol:<br>$$k \\frac{+6}{x} + k \\frac{-2}{16 - x} = 0 \\implies \\frac{6}{x} = \\frac{2}{16 - x}$$<br>3. Sederhanakan dengan membagi kedua pembilang dengan 2:<br>$$\\frac{3}{x} = \\frac{1}{16 - x}$$<br>4. Lakukan perkalian silang:<br>$$3(16 - x) = x \\implies 48 - 3x = x \\implies 4x = 48 \\implies x = 12\\text{ cm}$$<br>5. Jadi jarak titik $P$ dari muatan $q_A$ adalah $12\\text{ cm}$ (pilihan D).",
      pitfalls: "Siswa sering mengkuadratkan jaraknya seperti pada perhitungan medan listrik ($E=0$). Ingat bahwa potensial berbanding lurus dengan $r$ pangkat satu, bukan $r^2$."
    }
  },
  {
    id: "fis-lis-statis-potensial-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-potensial",
    category: "Kekekalan Energi Mekanik Partikel Bermuatan",
    difficulty: "sedang",
    statement: "Sebuah proton bermassa $m = 1{,}6 \\times 10^{-27}\\text{ kg}$ dan bermuatan $+e = 1{,}6 \\times 10^{-19}\\text{ C}$ mula-mula diam, kemudian dipercepat melewati beda potensial listrik sebesar $\\Delta V = 800\\text{ Volt}$. Kelajuan akhir proton setelah melewati beda potensial tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2 \\times 10^5\\text{ m/s}$",
      "$4 \\times 10^5\\text{ m/s}$",
      "$8 \\times 10^5\\text{ m/s}$",
      "$1{,}6 \\times 10^6\\text{ m/s}$",
      "$4 \\times 10^6\\text{ m/s}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Berdasarkan hukum kekekalan energi mekanik, energi potensial listrik yang hilang diubah seluruhnya menjadi energi kinetik partikel:<br>$$q \\Delta V = \\Delta E_k = \\frac{1}{2} m v^2 \\implies v = \\sqrt{\\frac{2 q \\Delta V}{m}}$$",
      steps: "1. Identifikasi besaran partikel dan potensial:<br>$$q = 1{,}6 \\times 10^{-19}\\text{ C}$$<br>$$m = 1{,}6 \\times 10^{-27}\\text{ kg}$$<br>$$\\Delta V = 800\\text{ V}$$<br>2. Hitung energi kinetik yang diperoleh:<br>$$E_k = q \\Delta V = (1{,}6 \\times 10^{-19}\\text{ C}) \\times 800\\text{ V} = 1{,}28 \\times 10^{-16}\\text{ Joule}$$<br>3. Hitung kelajuan akhir proton:<br>$$v = \\sqrt{\\frac{2 \\times 1{,}28 \\times 10^{-16}\\text{ J}}{1{,}6 \\times 10^{-27}\\text{ kg}}} = \\sqrt{\\frac{2{,}56 \\times 10^{-16}}{1{,}6 \\times 10^{-27}}} = \\sqrt{1{,}6 \\times 10^{11}} = \\sqrt{16 \\times 10^{10}} = 4 \\times 10^5\\text{ m/s}$$<br>4. Jadi kelajuan akhir proton adalah $4 \\times 10^5\\text{ m/s}$ (pilihan B).",
      pitfalls: "Lupa menarik akar kuadrat setelah menghitung $v^2 = 16 \\times 10^{10}$, atau lupa mengalikan angka dua dari faktor $\\frac{1}{2}mv^2$ saat mencari $v$."
    }
  },
  {
    id: "fis-lis-statis-potensial-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-potensial",
    category: "Hubungan Kuat Medan Listrik dan Beda Potensial Homogen",
    difficulty: "sedang",
    statement: "Dua keping logam sejajar yang terpisah pada jarak $d = 4\\text{ cm}$ diberi beda potensial listrik sebesar $120\\text{ Volt}$. Jika medan listrik di antara kedua keping dianggap homogen, besar kuat medan listrik di antara keping dan usaha yang dilakukan medan listrik untuk memindahkan elektron ($q = -1{,}6 \\times 10^{-19}\\text{ C}$) sejauh $1\\text{ cm}$ searah medan listrik adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3.000\\text{ V/m}$ dan $-4{,}8 \\times 10^{-18}\\text{ J}$",
      "$3.000\\text{ V/m}$ dan $+4{,}8 \\times 10^{-18}\\text{ J}$",
      "$4.800\\text{ V/m}$ dan $-1{,}6 \\times 10^{-18}\\text{ J}$",
      "$4.800\\text{ V/m}$ dan $+1{,}6 \\times 10^{-18}\\text{ J}$",
      "$30\\text{ V/m}$ dan $-4{,}8 \\times 10^{-19}\\text{ J}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hubungan antara kuat medan listrik homogen $E$ dan beda potensial antar pelat $\\Delta V$ adalah $E = \\frac{\\Delta V}{d}$. Usaha oleh gaya medan listrik adalah $W = \\vec{F} \\cdot \\Delta \\vec{s} = q \\vec{E} \\cdot \\Delta \\vec{s}$.",
      steps: "1. Konversikan jarak pelat: $d = 4\\text{ cm} = 0{,}04\\text{ m}$.<br>2. Hitung kuat medan listrik homogen:<br>$$E = \\frac{\\Delta V}{d} = \\frac{120\\text{ V}}{0{,}04\\text{ m}} = 3.000\\text{ V/m}$$<br>3. Hitung gaya elektrostatik pada elektron ($q = -1{,}6 \\times 10^{-19}\\text{ C}$):<br>$$F = q E = (-1{,}6 \\times 10^{-19}\\text{ C}) \\times 3.000\\text{ N/C} = -4{,}8 \\times 10^{-16}\\text{ N}$$<br>(Tanda minus menunjukkan gaya elektrostatik berlawanan arah dengan arah medan listrik).<br>4. Elektron digerakkan sejauh $\\Delta s = 1\\text{ cm} = 0{,}01\\text{ m}$ searah medan listrik. Hitung usaha medan listrik:<br>$$W = F \\times \\Delta s = (-4{,}8 \\times 10^{-16}\\text{ N}) \\times 0{,}01\\text{ m} = -4{,}8 \\times 10^{-18}\\text{ Joule}$$<br>5. Jadi kuat medan adalah $3.000\\text{ V/m}$ dan usaha medan listrik bernilai $-4{,}8 \\times 10^{-18}\\text{ J}$ (pilihan A).",
      pitfalls: "Lupa memperhatikan tanda aljabar muatan elektron. Karena muatan elektron negatif, saat elektron dipaksa bergerak searah medan listrik, medan listrik melakukan usaha negatif ($W < 0$)."
    }
  },
  {
    id: "fis-lis-statis-potensial-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-potensial",
    category: "Energi Potensial Konfigurasi Tiga Muatan Segitiga",
    difficulty: "sedang",
    statement: "Tiga muatan titik $q_1 = +2\\,\\mu\\text{C}$, $q_2 = +2\\,\\mu\\text{C}$, dan $q_3 = -4\\,\\mu\\text{C}$ diletakkan pada titik-titik sudut sebuah segitiga sama sisi yang memiliki panjang sisi $a = 20\\text{ cm}$ di udara ($k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$). Energi potensial elektrostatik total dari sistem konfigurasi ketiga muatan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$+0{,}54\\text{ Joule}$",
      "$-0{,}54\\text{ Joule}$",
      "$-0{,}36\\text{ Joule}$",
      "$+0{,}18\\text{ Joule}$",
      "$-1{,}08\\text{ Joule}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Energi potensial elektrostatik total dari sistem多-muatan dihitung dari jumlahan energi potensial setiap pasangan muatan yang unik:<br>$$E_{p,\\text{total}} = k \\left(\\frac{q_1 q_2}{r_{12}} + \\frac{q_1 q_3}{r_{13}} + \\frac{q_2 q_3}{r_{23}}\\right)$$",
      steps: "1. Panjang sisi segitiga sama sisi adalah $r_{12} = r_{13} = r_{23} = a = 20\\text{ cm} = 0{,}2\\text{ m}$.<br>2. Hitung perkalian pasangan muatan:<br>$$q_1 q_2 = (+2) \\times (+2) \\times 10^{-12} = +4 \\times 10^{-12}\\text{ C}^2$$<br>$$q_1 q_3 = (+2) \\times (-4) \\times 10^{-12} = -8 \\times 10^{-12}\\text{ C}^2$$<br>$$q_2 q_3 = (+2) \\times (-4) \\times 10^{-12} = -8 \\times 10^{-12}\\text{ C}^2$$<br>3. Jumlah aljabar pasangan muatan:<br>$$\\Sigma(q_i q_j) = (+4 - 8 - 8) \\times 10^{-12} = -12 \\times 10^{-12}\\text{ C}^2$$<br>4. Hitung energi potensial total:<br>$$E_{p,\\text{total}} = \\frac{k}{a} \\Sigma(q_i q_j) = \\frac{9 \\times 10^9}{0{,}2} \\times (-12 \\times 10^{-12}) = 45 \\times 10^9 \\times (-12 \\times 10^{-12}) = -0{,}54\\text{ Joule}$$<br>5. Jadi energi potensial sistem bernilai $-0{,}54\\text{ Joule}$ (pilihan B).",
      pitfalls: "Hanya menghitung dua pasang interaksi dan melupakan pasangan ketiga, atau mengabaikan tanda minus pada muatan $q_3$."
    }
  },
  {
    id: "fis-lis-statis-potensial-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-potensial",
    category: "Beda Potensial Dua Kulit Bola Konduktor Konsentris",
    difficulty: "sedang",
    statement: "Dua kulit bola konduktor sepusat (konsentris) masing-masing memiliki jari-jari $R_1$ (kulit dalam) dan $R_2$ (kulit luar) dengan $R_1 < R_2$. Kulit dalam diberi muatan $+Q$ dan kulit luar diberi muatan $-Q$. Beda potensial listrik antara kulit dalam dan kulit luar ($V_1 - V_2$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$k Q \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$",
      "$k Q \\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right)$",
      "$k \\frac{Q}{R_1 - R_2}$",
      "$k \\frac{Q}{R_1}$",
      "$0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Potensial di setiap titik merupakan superposisi dari kontribusi kedua kulit bola bermuatan. Untuk kulit bermuatan $q$ dan jari-jari $R$, potensial di titik berjarak $r \\le R$ adalah $k\\frac{q}{R}$, sedangkan untuk $r \\ge R$ adalah $k\\frac{q}{r}$.",
      steps: "1. Potensial pada kulit dalam ($r = R_1$):<br>- Dari muatan $+Q$ sendiri: $V_{1,1} = k\\frac{+Q}{R_1}$<br>- Dari kulit luar $-Q$ (karena $R_1 < R_2$, berada di dalam): $V_{1,2} = k\\frac{-Q}{R_2}$<br>Maka: $V_1 = k Q \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$<br>2. Potensial pada kulit luar ($r = R_2$):<br>- Dari kulit dalam $+Q$ (karena $R_2 > R_1$, berada di luar): $V_{2,1} = k\\frac{+Q}{R_2}$<br>- Dari kulit luar sendiri: $V_{2,2} = k\\frac{-Q}{R_2}$<br>Maka: $V_2 = k\\frac{+Q}{R_2} + k\\frac{-Q}{R_2} = 0$<br>3. Hitung beda potensial ($V_1 - V_2$):<br>$$V_1 - V_2 = k Q \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right) - 0 = k Q \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$$<br>4. Jadi jawabannya adalah pilihan A.",
      pitfalls: "Sering mengabaikan pengaruh potensial dari kulit luar terhadap kulit dalam, atau mengira kedua kulit saling menetralkan secara total sehingga beda potensialnya nol."
    }
  }
];
