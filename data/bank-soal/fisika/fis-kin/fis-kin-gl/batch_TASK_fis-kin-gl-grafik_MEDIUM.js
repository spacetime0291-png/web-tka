module.exports = [
  {
    id: "fis-kin-gl-grafik-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-grafik",
    category: "Analisis Grafik Gerak Lurus",
    difficulty: "sedang",
    statement: "Sebuah partikel bergerak lurus sepanjang sumbu-$x$ dengan profil grafik kecepatan-waktu ($v-t$): dari $t = 0$ hingga $t = 4\\text{ s}$ kecepatan naik linier dari $0$ ke $+10\\text{ m/s}$; dari $t = 4\\text{ s}$ ke $t = 6\\text{ s}$ kecepatan turun linier dari $+10\\text{ m/s}$ hingga $0$; lalu dari $t = 6\\text{ s}$ ke $t = 8\\text{ s}$ kecepatan turun linier ke nilai negatif dari $0$ hingga $-6\\text{ m/s}$. Besar perpindahan total dan jarak total yang ditempuh partikel selama $8\\text{ sekon}$ tersebut berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$24\\text{ m}$ dan $36\\text{ m}$",
      "$30\\text{ m}$ dan $36\\text{ m}$",
      "$24\\text{ m}$ dan $30\\text{ m}$",
      "$36\\text{ m}$ dan $24\\text{ m}$",
      "$18\\text{ m}$ dan $36\\text{ m}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada grafik $v-t$:<br>• Perpindahan ($\\Delta x$) dihitung dari selisih luas area di atas sumbu-$t$ (positif) dikurangi luas area di bawah sumbu-$t$ (negatif): $\\Delta x = L_{\\text{atas}} - L_{\\text{bawah}}$.<br>• Jarak total ($s$) dihitung dari jumlahan mutlak seluruh luas area: $s = L_{\\text{atas}} + L_{\\text{bawah}}$.",
      steps: "1. Hitung luas area di atas sumbu-$t$ ($t = 0$ s.d. $6\\text{ s}$, segitiga):<br>$$L_{\\text{atas}} = \\frac{1}{2} \\times 6\\text{ s} \\times 10\\text{ m/s} = 30\\text{ meter}$$<br>2. Hitung luas area di bawah sumbu-$t$ ($t = 6$ s.d. $8\\text{ s}$, segitiga):<br>$$L_{\\text{bawah}} = \\frac{1}{2} \\times (8 - 6)\\text{ s} \\times 6\\text{ m/s} = \\frac{1}{2} \\times 2 \\times 6 = 6\\text{ meter}$$<br>3. Hitung perpindahan total dan jarak total:<br>$$\\Delta x = 30\\text{ m} - 6\\text{ m} = 24\\text{ meter}$$<br>$$s = 30\\text{ m} + 6\\text{ m} = 36\\text{ meter}$$",
      pitfalls: "Menyamakan nilai jarak dengan perpindahan atau tidak mengurangkan area di bawah sumbu waktu saat menghitung perpindahan."
    }
  },
  {
    id: "fis-kin-gl-grafik-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-grafik",
    category: "Analisis Grafik Gerak Lurus",
    difficulty: "sedang",
    statement: "Dua mobil $A$ dan $B$ berangkat dari garis start yang sama pada saat $t = 0$. Mobil $A$ bergerak dengan kelajuan tetap $v_A = 16\\text{ m/s}$, sedangkan mobil $B$ bergerak dari keadaan diam dengan percepatan tetap $a_B = 2\\text{ m/s}^2$. Dari grafik kecepatan terhadap waktu ($v-t$), waktu saat kelajuan kedua mobil sama besar ($t_1$) dan waktu saat mobil $B$ tepat menyusul posisi mobil $A$ ($t_2$) berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$8\\text{ sekon}$ dan $16\\text{ sekon}$",
      "$16\\text{ sekon}$ dan $8\\text{ sekon}$",
      "$8\\text{ sekon}$ dan $8\\text{ sekon}$",
      "$4\\text{ sekon}$ dan $8\\text{ sekon}$",
      "$8\\text{ sekon}$ dan $32\\text{ sekon}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada grafik $v-t$:<br>• Kelajuan sama terjadi pada titik potong kurva ($v_A(t) = v_B(t)$).<br>• Posisi menyusul terjadi saat luas di bawah kurva kedua grafik bernilai sama ($s_A(t) = s_B(t)$).",
      steps: "1. Kecepatan mobil $B$ memenuhi $v_B(t) = a_B t = 2t$.<br>Kelajuan sama:<br>$$v_A = v_B \\implies 16 = 2t_1 \\implies t_1 = 8\\text{ sekon}$$<br>2. Posisi menyusul (luas sama):<br>$$s_A = s_B \\implies v_A t_2 = \\frac{1}{2} a_B t_2^2$$<br>$$16 t_2 = \\frac{1}{2}(2) t_2^2 \\implies 16 t_2 = t_2^2 \\implies t_2 = 16\\text{ sekon}$$",
      pitfalls: "Terkecoh mengira kedua mobil bertemu/menyusul saat kelajuannya sama ($t = 8\\text{ s}$). Pada $t = 8\\text{ s}$, jarak pisah kedua mobil justru sedang mencapai titik maksimum, baru menyusul pada $t = 16\\text{ s}$."
    }
  },
  {
    id: "fis-kin-gl-grafik-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-grafik",
    category: "Analisis Grafik Gerak Lurus",
    difficulty: "sedang",
    statement: "Sebuah partikel bergerak lurus dengan grafik percepatan terhadap waktu ($a-t$): percepatan konstan sebesar $4\\text{ m/s}^2$ dari $t = 0$ hingga $t = 2\\text{ s}$, kemudian percepatan menurun secara linier hingga mencapai nilai $0$ pada $t = 5\\text{ s}$. Jika pada saat $t = 0$ partikel sudah memiliki kecepatan awal $v_0 = 5\\text{ m/s}$, besar kecepatan partikel pada saat $t = 5\\text{ sekon}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$19\\text{ m/s}$",
      "$14\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$17\\text{ m/s}$",
      "$21\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kecepatan akhir partikel adalah jumlahan kecepatan awal dengan integral luas kurva grafik $a-t$:<br>$$v_t = v_0 + \\Delta v = v_0 + \\text{Luas daerah bawah kurva } a-t$$",
      steps: "1. Hitung luas persegi panjang dari $t = 0$ s.d. $2\\text{ s}$:<br>$$L_1 = 2\\text{ s} \\times 4\\text{ m/s}^2 = 8\\text{ m/s}$$<br>2. Hitung luas segitiga dari $t = 2$ s.d. $5\\text{ s}$:<br>$$L_2 = \\frac{1}{2} \\times (5 - 2)\\text{ s} \\times 4\\text{ m/s}^2 = \\frac{1}{2} \\times 3 \\times 4 = 6\\text{ m/s}$$<br>3. Hitung perubahan kecepatan total:<br>$$\\Delta v = L_1 + L_2 = 8 + 6 = 14\\text{ m/s}$$<br>4. Kecepatan akhir pada $t = 5\\text{ s}$:<br>$$v(5) = v_0 + \\Delta v = 5 + 14 = 19\\text{ m/s}$$",
      pitfalls: "Hanya menghitung luas daerah $\\Delta v = 14\\text{ m/s}$ dan lupa menambahkan kecepatan awal $v_0 = 5\\text{ m/s}$."
    }
  },
  {
    id: "fis-kin-gl-grafik-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-grafik",
    category: "Analisis Grafik Gerak Lurus",
    difficulty: "sedang",
    statement: "Suatu kurva grafik posisi terhadap waktu ($s-t$) menunjukkan bahwa pada selang $0 \\le t \\le 3\\text{ s}$ kurva berbentuk lengkungan parabola yang membuka ke atas dengan kemiringan yang terus membesar, sedangkan pada selang $3 < t \\le 7\\text{ s}$ kurva berubah menjadi garis lurus miring ke atas dengan kemiringan tetap. Interpretasi fisis yang paling akurat mengenai gerak benda tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Pada selang $0 - 3\\text{ s}$ benda melakukan GLBB dipercepat, lalu pada $3 - 7\\text{ s}$ melakukan GLB dengan kecepatan konstan",
      "Pada selang $0 - 3\\text{ s}$ benda melakukan GLB, lalu pada $3 - 7\\text{ s}$ melakukan GLBB dipercepat",
      "Pada selang $0 - 3\\text{ s}$ benda melakukan GLBB diperlambat, lalu pada $3 - 7\\text{ s}$ benda berhenti diam",
      "Pada seluruh rentang waktu $0 - 7\\text{ s}$ benda selalu mengalami percepatan konstan yang sama besar",
      "Pada selang $3 - 7\\text{ s}$ kecepatan benda terus bertambah secara linier"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kemiringan garis singgung grafik posisi-waktu ($s-t$) menunjukkan kecepatan sesaat ($v = \\frac{ds}{dt}$):<br>• Parabola membuka ke atas: kemiringan terus bertambah besar $\\implies$ kecepatan bertambah $\\implies$ GLBB dipercepat ($a > 0$).<br>• Garis lurus miring dengan kemiringan tetap: kemiringan konstan $\\implies$ kecepatan tetap $\\implies$ GLB ($a = 0$).",
      steps: "1. Analisis kurva $0 \\le t \\le 3$: Fungsi kuadrat $s(t) \\propto t^2$ memiliki gradien $\\frac{ds}{dt}$ yang naik linier, menandakan GLBB dipercepat.<br>2. Analisis kurva $3 < t \\le 7$: Fungsi linier $s(t) \\propto t$ memiliki gradien tetap, menandakan GLB dengan kecepatan konstan.",
      pitfalls: "Terkecoh dengan grafik $v-t$. Pada grafik $v-t$, garis lurus miring adalah GLBB, sedangkan pada grafik $s-t$, garis lurus miring adalah GLB."
    }
  },
  {
    id: "fis-kin-gl-grafik-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-grafik",
    category: "Analisis Grafik Gerak Lurus",
    difficulty: "sedang",
    statement: "Sebuah lift pengangkut barang di gedung bertingkat bergerak naik dari lantai dasar dengan pola grafik kecepatan-waktu ($v-t$): lift dipercepat dari diam dengan percepatan tetap $2\\text{ m/s}^2$ selama $3\\text{ sekon}$ hingga mencapai kelajuan maksimum $v_{\\max}$; melaju dengan kelajuan konstan $v_{\\max}$ selama $8\\text{ sekon}$; kemudian diperlambat secara beraturan dengan perlambatan tetap $3\\text{ m/s}^2$ hingga berhenti di lantai tujuan. Ketinggian total yang dicapai lift tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$63\\text{ meter}$",
      "$57\\text{ meter}$",
      "$72\\text{ meter}$",
      "$48\\text{ meter}$",
      "$69\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Ketinggian total dihitung dari luas total grafik trapesium $v-t$. Waktu fase perlambatan dihitung dari perbandingan kecepatan puncak terhadap besar perlambatannya.",
      steps: "1. Kecepatan maksimum pada akhir fase 1:<br>$$v_{\\max} = a_1 \\cdot t_1 = 2\\text{ m/s}^2 \\times 3\\text{ s} = 6\\text{ m/s}$$<br>2. Waktu fase 3 (perlambatan hingga berhenti):<br>$$t_3 = \\frac{v_{\\max}}{a_3} = \\frac{6\\text{ m/s}}{3\\text{ m/s}^2} = 2\\text{ sekon}$$<br>3. Hitung luas tiap segmen pergerakan:<br>• Segmen 1 (percepatan): $L_1 = \\frac{1}{2} \\times 3 \\times 6 = 9\\text{ meter}$<br>• Segmen 2 (konstan): $L_2 = 8 \\times 6 = 48\\text{ meter}$<br>• Segmen 3 (perlambatan): $L_3 = \\frac{1}{2} \\times 2 \\times 6 = 6\\text{ meter}$<br>4. Ketinggian total:<br>$$h = L_1 + L_2 + L_3 = 9 + 48 + 6 = 63\\text{ meter}$$",
      pitfalls: "Lupa menghitung durasi waktu pengereman ($t_3 = 2\\text{ s}$) atau menyamakan durasi pengereman dengan waktu percepatan ($3\\text{ s}$)."
    }
  }
];
