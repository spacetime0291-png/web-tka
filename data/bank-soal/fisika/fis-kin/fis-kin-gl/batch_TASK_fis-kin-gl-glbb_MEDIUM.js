module.exports = [
  {
    id: "fis-kin-gl-glbb-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glbb",
    category: "Gerak Lurus Berubah Beraturan (GLBB)",
    difficulty: "sedang",
    statement: "Sebuah partikel bergerak lurus dengan percepatan konstan dari keadaan diam ($v_0 = 0$). Perbandingan jarak yang ditempuh oleh partikel pada detik ke-5 saja terhadap jarak yang ditempuh pada detik ke-3 saja adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$9 : 5$",
      "$25 : 9$",
      "$5 : 3$",
      "$7 : 5$",
      "$16 : 9$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jarak yang ditempuh khusus pada detik ke-$n$ (selang dari $t = n-1$ sampai $t = n$) pada GLBB dari keadaan diam dirumuskan oleh deret Galileo:<br>$$\\Delta s_n = s(n) - s(n-1) = \\frac{1}{2} a (2n - 1)$$",
      steps: "1. Tentukan rumus jarak pada detik ke-$n$:<br>$$\\Delta s_n = \\frac{1}{2} a (2n - 1)$$<br>2. Hitung untuk detik ke-5 ($n = 5$):<br>$$\\Delta s_5 = \\frac{1}{2} a [2(5) - 1] = \\frac{9}{2} a$$<br>3. Hitung untuk detik ke-3 ($n = 3$):<br>$$\\Delta s_3 = \\frac{1}{2} a [2(3) - 1] = \\frac{5}{2} a$$<br>4. Hitung perbandingannya:<br>$$\\frac{\\Delta s_5}{\\Delta s_3} = \\frac{\\frac{9}{2}a}{\\frac{5}{2}a} = \\frac{9}{5} = 9 : 5$$",
      pitfalls: "Jebakan paling sering adalah membandingkan jarak akumulatif total selama 5 detik terhadap 3 detik: $\\frac{5^2}{3^2} = 25 : 9$. Kata kunci 'pada detik ke-5' mengacu pada selang waktu satu detik tersebut, bukan jarak akumulatif."
    }
  },
  {
    id: "fis-kin-gl-glbb-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glbb",
    category: "Gerak Lurus Berubah Beraturan (GLBB)",
    difficulty: "sedang",
    statement: "Sebuah mobil melaju dipercepat beraturan melewati dua tiang pancang $A$ dan $B$ yang terpisah sejauh $100\\text{ meter}$ dalam selang waktu $4\\text{ sekon}$. Jika kelajuan mobil saat melintasi tiang $B$ terukur sebesar $30\\text{ m/s}$, maka kelajuan mobil saat melintasi tiang $A$ dan percepatan mobil tersebut berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$20\\text{ m/s}$ dan $2{,}5\\text{ m/s}^2$",
      "$15\\text{ m/s}$ dan $3{,}75\\text{ m/s}^2$",
      "$25\\text{ m/s}$ dan $1{,}25\\text{ m/s}^2$",
      "$20\\text{ m/s}$ dan $5\\text{ m/s}^2$",
      "$10\\text{ m/s}$ dan $5\\text{ m/s}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jarak tempuh GLBB dapat dinyatakan dalam kelajuan rata-rata dikali waktu:<br>$$s = \\left( \\frac{v_A + v_B}{2} \\right) t$$<br>Percepatan konstan dihitung dari definisi laju perubahan kecepatan:<br>$$a = \\frac{v_B - v_A}{t}$$",
      steps: "1. Substitusikan $s = 100\\text{ m}$, $t = 4\\text{ s}$, dan $v_B = 30\\text{ m/s}$:<br>$$100 = \\left( \\frac{v_A + 30}{2} \\right) 4 = 2(v_A + 30)$$<br>$$50 = v_A + 30 \\implies v_A = 20\\text{ m/s}$$<br>2. Hitung besar percepatan mobil:<br>$$a = \\frac{30 - 20}{4} = \\frac{10}{4} = 2{,}5\\text{ m/s}^2$$",
      pitfalls: "Mengabaikan bahwa mobil telah memiliki kecepatan awal saat melewati tiang $A$ dan menganggap $v_A = 0$."
    }
  },
  {
    id: "fis-kin-gl-glbb-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glbb",
    category: "Gerak Lurus Berubah Beraturan (GLBB)",
    difficulty: "sedang",
    statement: "Sebuah partikel menempuh lintasan lurus sepanjang $3s$. Sepertiga jarak pertama ($s$) ditempuh dengan percepatan konstan dari keadaan diam hingga mencapai kelajuan puncak $v$. Dua pertiga jarak sisa ($2s$) ditempuh dengan kelajuan tetap $v$ hingga garis akhir. Jika waktu total perjalanan partikel dari awal hingga garis akhir adalah $t_{\\text{total}}$, porsi waktu yang dihabiskan partikel selama fase percepatan dinyatakan dalam $t_{\\text{total}}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{2} t_{\\text{total}}$",
      "$\\frac{1}{3} t_{\\text{total}}$",
      "$\\frac{1}{4} t_{\\text{total}}$",
      "$\\frac{2}{3} t_{\\text{total}}$",
      "$\\frac{2}{5} t_{\\text{total}}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fase 1 adalah GLBB dari 0 ke $v$ dengan kelajuan rata-rata $\\frac{v}{2}$. Fase 2 adalah GLB dengan kelajuan konstan $v$. Waktu tempuh masing-masing fase ditentukan oleh rasio jarak terhadap kelajuan rata-ratanya.",
      steps: "1. Waktu tempuh fase percepatan (GLBB):<br>$$s = \\frac{0 + v}{2} t_1 \\implies t_1 = \\frac{2s}{v}$$<br>2. Waktu tempuh fase kelajuan konstan (GLB):<br>$$2s = v \\cdot t_2 \\implies t_2 = \\frac{2s}{v}$$<br>3. Hubungkan dengan waktu total:<br>$$t_{\\text{total}} = t_1 + t_2 = \\frac{2s}{v} + \\frac{2s}{v} = 2 t_1$$<br>$$t_1 = \\frac{1}{2} t_{\\text{total}}$$",
      pitfalls: "Terkecoh dengan pembagian jarak sepertiga ($1/3$) sehingga langsung mengira porsi waktunya adalah sepertiga ($1/3$), padahal pada fase GLBB laju rata-rata lebih lambat sehingga memakan waktu lebih lama."
    }
  },
  {
    id: "fis-kin-gl-glbb-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glbb",
    category: "Gerak Lurus Berubah Beraturan (GLBB)",
    difficulty: "sedang",
    statement: "Sebuah mobil melaju dengan kecepatan awal konstan $20\\text{ m/s}$. Tiba-tiba pengemudi melihat pohon tumbang yang menghalangi jalan pada jarak $55\\text{ meter}$ di depannya. Waktu reaksi pengemudi dari melihat rintangan hingga menginjak pedal rem adalah $0{,}5\\text{ sekon}$. Jika sistem pengereman mampu menghasilkan perlambatan maksimum sebesar $4\\text{ m/s}^2$, jarak berhenti total mobil sejak pengemudi pertama kali melihat pohon dan keadaan gerak mobil adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$60\\text{ meter}$, mobil menabrak pohon tumbang",
      "$50\\text{ meter}$, mobil berhenti aman sebelum pohon",
      "$40\\text{ meter}$, mobil berhenti aman sebelum pohon",
      "$55\\text{ meter}$, mobil berhenti tepat menyentuh pohon",
      "$65\\text{ meter}$, mobil menabrak pohon tumbang"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jarak henti total terdiri dari dua fase: fase gerak lurus beraturan (GLB) selama waktu reaksi pengemudi, dilanjutkan fase gerak lurus berubah beraturan (GLBB) diperlambat hingga berhenti ($v_t = 0$).",
      steps: "1. Jarak tempuh selama waktu reaksi ($t_r = 0{,}5\\text{ s}$):<br>$$s_1 = v_0 \\cdot t_r = 20\\text{ m/s} \\times 0{,}5\\text{ s} = 10\\text{ meter}$$<br>2. Jarak pengereman hingga berhenti ($v_t = 0$):<br>$$v_t^2 = v_0^2 - 2as_2 \\implies 0 = 20^2 - 2(4)s_2$$<br>$$8 s_2 = 400 \\implies s_2 = 50\\text{ meter}$$<br>3. Jarak berhenti total:<br>$$s_{\\text{total}} = s_1 + s_2 = 10\\text{ m} + 50\\text{ m} = 60\\text{ meter}$$<br>Karena jarak pohon hanya $55\\text{ m}$ dan jarak henti $60\\text{ m}$, mobil menabrak pohon tumbang.",
      pitfalls: "Lupa menghitung jarak yang ditempuh mobil selama jeda waktu reaksi pengemudi ($10\\text{ m}$) sehingga menyimpulkan mobil berhenti aman di $50\\text{ m}$."
    }
  },
  {
    id: "fis-kin-gl-glbb-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glbb",
    category: "Gerak Lurus Berubah Beraturan (GLBB)",
    difficulty: "sedang",
    statement: "Sebuah peluru ditembakkan lurus ke dalam sebuah balok kayu penahan. Peluru masuk dengan kelajuan $v_0$ dan mengalami gaya hambat konstan sehingga mengalami perlambatan tetap. Setelah menembus kedalaman balok sejauh $15\\text{ cm}$, kelajuan peluru berkurang menjadi $\\frac{1}{2}v_0$. Kedalaman tambahan yang masih dapat ditembus oleh peluru tersebut di dalam balok kayu hingga akhirnya berhenti sempurna adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5\\text{ cm}$",
      "$15\\text{ cm}$",
      "$7{,}5\\text{ cm}$",
      "$10\\text{ cm}$",
      "$3{,}75\\text{ cm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada GLBB diperlambat konstan, perubahan kuadrat kecepatan sebanding dengan jarak penembusan lintasan ($v_t^2 - v_0^2 = -2as$).",
      steps: "1. Untuk fase pertama (penembusan $s_1 = 15\\text{ cm}$):<br>$$\\left(\\frac{1}{2}v_0\\right)^2 = v_0^2 - 2a(15)$$<br>$$\\frac{1}{4}v_0^2 = v_0^2 - 30a \\implies 30a = \\frac{3}{4}v_0^2 \\implies 2a = \\frac{v_0^2}{20}$$<br>2. Untuk fase kedua (kedalaman tambahan $\\Delta s$ dari $\\frac{1}{2}v_0$ hingga berhenti $v = 0$):<br>$$0^2 = \\left(\\frac{1}{2}v_0\\right)^2 - 2a(\\Delta s)$$<br>$$\\frac{1}{4}v_0^2 = 2a(\\Delta s) = \\left(\\frac{v_0^2}{20}\\right) \\Delta s$$<br>3. Selesaikan nilai $\\Delta s$:<br>$$\\Delta s = \\frac{20}{4} = 5\\text{ cm}$$",
      pitfalls: "Jebakan keliru: mengasumsikan karena kecepatannya berkurang setengah maka jaraknya juga setengah ($7{,}5\\text{ cm}$), padahal hubungan energi kinetik/perlambatan bergantung pada kuadrat kecepatan."
    }
  }
];
