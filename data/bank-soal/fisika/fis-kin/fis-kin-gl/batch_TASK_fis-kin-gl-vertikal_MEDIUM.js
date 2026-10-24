module.exports = [
  {
    id: "fis-kin-gl-vertikal-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-vertikal",
    category: "Gerak Vertikal & Jatuh Bebas",
    difficulty: "sedang",
    statement: "Bola $A$ dijatuhkan bebas dari puncak gedung bertingkat setinggi $H = 80\\text{ meter}$. Pada saat yang bersamaan, bola $B$ dilemparkan vertikal ke atas dari permukaan tanah tepat di bawah bola $A$ dengan kelajuan awal $v_0 = 40\\text{ m/s}$. Jika gesekan udara diabaikan dan $g = 10\\text{ m/s}^2$, waktu saat kedua bola bertumbukan di udara dan ketinggian posisi tabrakan dari permukaan tanah berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\text{ sekon}$ dan $60\\text{ meter}$",
      "$2\\text{ sekon}$ dan $20\\text{ meter}$",
      "$1\\text{ sekon}$ dan $75\\text{ meter}$",
      "$4\\text{ sekon}$ dan $60\\text{ meter}$",
      "$2\\text{ sekon}$ dan $40\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kedua bola bergerak pada garis vertikal yang sama. Pertemuan terjadi saat ketinggian posisi kedua bola terhadap acuan tanah bernilai sama ($y_A(t) = y_B(t)$).",
      steps: "1. Susun fungsi posisi kedua bola terhadap tanah:<br>$$y_A(t) = H - \\frac{1}{2} g t^2 = 80 - 5t^2$$<br>$$y_B(t) = v_0 t - \\frac{1}{2} g t^2 = 40t - 5t^2$$<br>2. Samakan kedudukan untuk mencari waktu tabrakan:<br>$$80 - 5t^2 = 40t - 5t^2 \\implies 40t = 80 \\implies t = 2\\text{ sekon}$$<br>3. Hitung ketinggian posisi tabrakan dari permukaan tanah:<br>$$y = y_B(2) = 40(2) - 5(2)^2 = 80 - 20 = 60\\text{ meter}$$",
      pitfalls: "Nilai $20\\text{ meter}$ adalah jarak yang ditempuh bola $A$ dari puncak gedung, bukan ketinggian tempat tabrakan dari permukaan tanah."
    }
  },
  {
    id: "fis-kin-gl-vertikal-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-vertikal",
    category: "Gerak Vertikal & Jatuh Bebas",
    difficulty: "sedang",
    statement: "Sebuah balon udara bergerak naik vertikal ke atas dengan kecepatan konstan $v_b = 5\\text{ m/s}$. Ketika balon berada pada ketinggian $h = 30\\text{ meter}$ di atas tanah, sebuah karung pasir pemberat terlepas dari keranjang balon. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, waktu yang dibutuhkan karung pasir tersebut untuk membentur tanah sejak terlepas adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3\\text{ sekon}$",
      "$\\sqrt{6}\\text{ sekon}$",
      "$2\\text{ sekon}$",
      "$4\\text{ sekon}$",
      "$2{,}5\\text{ sekon}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Karena terlepas dari wahana yang sedang bergerak naik, karung pasir mewarisi kecepatan awal balon ke arah atas ($v_0 = +5\\text{ m/s}$). Gerak karung pasir merupakan gerak vertikal ke atas dari ketinggian $h = 30\\text{ m}$ sebelum akhirnya jatuh bebas ke tanah.",
      steps: "1. Ambil acuan posisi tanah $y = 0$, dengan arah ke atas positif:<br>$$y_0 = +30\\text{ m},\\quad v_0 = +5\\text{ m/s},\\quad a = -g = -10\\text{ m/s}^2$$<br>2. Persamaan kedudukan saat menyentuh tanah ($y = 0$):<br>$$y(t) = y_0 + v_0 t - \\frac{1}{2} g t^2$$<br>$$0 = 30 + 5t - 5t^2$$<br>3. Bagi seluruh persamaan dengan $-5$:<br>$$t^2 - t - 6 = 0 \\implies (t - 3)(t + 2) = 0$$<br>Karena waktu tidak boleh negatif, maka $t = 3\\text{ sekon}$.",
      pitfalls: "Mengabaikan kecepatan awal balon ($v_0 = 0$) sehingga menghitung waktu jatuh bebas biasa: $t = \\sqrt{2h/g} = \\sqrt{60/10} = \\sqrt{6}\\text{ s}$."
    }
  },
  {
    id: "fis-kin-gl-vertikal-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-vertikal",
    category: "Gerak Vertikal & Jatuh Bebas",
    difficulty: "sedang",
    statement: "Sebuah bongkahan es dijatuhkan bebas tanpa kecepatan awal dari tebing curam. Jika pada detik terakhir sebelum menyentuh dasar jurang bongkahan es tersebut menempuh jarak sejauh $35\\text{ meter}$, dan percepatan gravitasi $g = 10\\text{ m/s}^2$, tinggi tebing curam tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$80\\text{ meter}$",
      "$70\\text{ meter}$",
      "$125\\text{ meter}$",
      "$45\\text{ meter}$",
      "$100\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jarak yang ditempuh pada detik terakhir dari gerak jatuh bebas berdurasi total $t$ sekon adalah selisih jarak tempuh total dengan jarak tempuh hingga detik ke-$(t-1)$:<br>$$\\Delta h = h(t) - h(t-1) = \\frac{1}{2} g (2t - 1)$$",
      steps: "1. Masukkan nilai $\\Delta h = 35\\text{ m}$ dan $g = 10\\text{ m/s}^2$:<br>$$35 = \\frac{1}{2}(10)(2t - 1) = 5(2t - 1)$$<br>$$2t - 1 = 7 \\implies 2t = 8 \\implies t = 4\\text{ sekon}$$<br>2. Hitung ketinggian total tebing:<br>$$H = \\frac{1}{2} g t^2 = \\frac{1}{2}(10)(4)^2 = 5 \\times 16 = 80\\text{ meter}$$",
      pitfalls: "Mengalikan $35 \\times 2 = 70\\text{ m}$ tanpa menyelesaikan persamaan selang waktu kuadratik."
    }
  },
  {
    id: "fis-kin-gl-vertikal-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-vertikal",
    category: "Gerak Vertikal & Jatuh Bebas",
    difficulty: "sedang",
    statement: "Sebuah bola tenis dilemparkan vertikal ke atas dari tanah melintasi sebuah jendela setinggi $2\\text{ meter}$ di lantai dua gedung. Bola memerlukan waktu $\\Delta t = 0{,}2\\text{ sekon}$ untuk melintasi tinggi jendela dari bingkai bawah ke bingkai atas. Jika $g = 10\\text{ m/s}^2$, kelajuan bola saat tepat melewati bingkai bawah jendela adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$11\\text{ m/s}$",
      "$10\\text{ m/s}$",
      "$12\\text{ m/s}$",
      "$9\\text{ m/s}$",
      "$15\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gerak bola saat melintasi jendela dapat dianalisis sebagai gerak vertikal ke atas dengan kecepatan awal $v_b$ (di bingkai bawah) dan ketinggian $h = 2\\text{ m}$ dalam selang waktu $\\Delta t = 0{,}2\\text{ s}$:<br>$$h = v_b \\Delta t - \\frac{1}{2} g (\\Delta t)^2$$",
      steps: "1. Substitusikan nilai $h = 2\\text{ m}$, $\\Delta t = 0{,}2\\text{ s}$, dan $g = 10\\text{ m/s}^2$:<br>$$2 = v_b(0{,}2) - \\frac{1}{2}(10)(0{,}2)^2$$<br>$$2 = 0{,}2 v_b - 5(0{,}04) = 0{,}2 v_b - 0{,}2$$<br>2. Selesaikan nilai $v_b$:<br>$$0{,}2 v_b = 2 + 0{,}2 = 2{,}2$$<br>$$v_b = \\frac{2{,}2}{0{,}2} = 11\\text{ m/s}$$",
      pitfalls: "Lupa mengurangkan perlambatan gravitasi $\\frac{1}{2} g t^2$ dan hanya menghitung kecepatan rata-rata $2 / 0{,}2 = 10\\text{ m/s}$."
    }
  },
  {
    id: "fis-kin-gl-vertikal-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-vertikal",
    category: "Gerak Vertikal & Jatuh Bebas",
    difficulty: "sedang",
    statement: "Sebuah batu dilempar vertikal ke atas dari permukaan tanah dengan kelajuan awal $v_0$. Batu tersebut teramati melintasi ketinggian $h = 25\\text{ meter}$ sebanyak dua kali (saat naik dan saat turun) dengan selang waktu antara kedua kejadian tersebut adalah $4\\text{ sekon}$. Jika $g = 10\\text{ m/s}^2$, besar kelajuan awal $v_0$ lemparan batu tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$35\\text{ m/s}$",
      "$40\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Ketinggian pada gerak vertikal ke atas memenuhi persamaan kuadrat $h = v_0 t - \\frac{1}{2} g t^2$. Selisih antara kedua akar waktu ($t_2 - t_1$) berkaitan dengan diskriminan persamaan kuadrat tersebut.",
      steps: "1. Tulis persamaan kuadrat waktu di ketinggian $h = 25\\text{ m}$:<br>$$5t^2 - v_0 t + 25 = 0 \\implies t^2 - \\left(\\frac{v_0}{5}\\right) t + 5 = 0$$<br>2. Berdasarkan sifat akar persamaan kuadrat:<br>$$t_1 + t_2 = \\frac{v_0}{5},\\quad t_1 t_2 = 5$$<br>3. Gunakan selisih waktu $\\Delta t = t_2 - t_1 = 4\\text{ s}$:<br>$$(t_2 - t_1)^2 = (t_1 + t_2)^2 - 4 t_1 t_2$$<br>$$4^2 = \\left(\\frac{v_0}{5}\\right)^2 - 4(5)$$<br>$$16 = \\frac{v_0^2}{25} - 20 \\implies \\frac{v_0^2}{25} = 36$$<br>$$v_0^2 = 900 \\implies v_0 = 30\\text{ m/s}$$",
      pitfalls: "Lupa bahwa selang waktu $4\\text{ s}$ adalah $\\Delta t = t_2 - t_1$, bukan waktu mencapai titik puncak."
    }
  }
];
