module.exports = [
  {
    id: "fis-kin-gl-grafik-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-grafik",
    category: "Analisis Grafik Gerak Lurus",
    difficulty: "mudah",
    statement: "Dalam analisis kinematika gerak lurus, kemiringan (gradien) dari kurva grafik posisi terhadap waktu ($s-t$) dan luas area di bawah kurva grafik kecepatan terhadap waktu ($v-t$) berturut-turut merepresentasikan besaran ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Kecepatan dan perpindahan",
      "Percepatan dan kecepatan",
      "Perpindahan dan percepatan",
      "Kecepatan dan percepatan",
      "Gaya dan usaha"
    ],
    correctIndex: 0,
    solution: {
      concept: "Operasi kalkulus grafik gerak:<br>• Gradien grafik posisi-waktu ($s-t$) adalah laju perubahan posisi terhadap waktu: $m = \\frac{\\Delta s}{\\Delta t} = v$ (kecepatan).<br>• Luas daerah di bawah grafik kecepatan-waktu ($v-t$) adalah integral kecepatan terhadap waktu: $L = \\int v\\,dt = \\Delta s$ (perpindahan).",
      steps: "1. Tinjau grafik $s-t$: Turunan pertama $\\frac{ds}{dt} = v$, sehingga gradien kurva adalah kecepatan.<br>2. Tinjau grafik $v-t$: Integral $\\int v\\,dt = \\Delta s$, sehingga luas area di bawah kurva adalah perpindahan.",
      pitfalls: "Terkecoh antara gradien grafik $v-t$ (yang menyatakan percepatan) dengan gradien grafik $s-t$ (yang menyatakan kecepatan)."
    }
  },
  {
    id: "fis-kin-gl-grafik-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-grafik",
    category: "Analisis Grafik Gerak Lurus",
    difficulty: "mudah",
    statement: "Sebuah partikel bergerak lurus dengan grafik kecepatan terhadap waktu ($v-t$) berbentuk garis lurus naik dari titik asal $(0, 0)$ hingga titik $(5, 20)$ (di mana $t$ dalam sekon dan $v$ dalam $\\text{m/s}$). Jarak yang ditempuh partikel tersebut selama $5\\text{ sekon}$ pertama adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$50\\text{ meter}$",
      "$100\\text{ meter}$",
      "$25\\text{ meter}$",
      "$20\\text{ meter}$",
      "$40\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jarak tempuh pada grafik $v-t$ dihitung secara langsung dari luas bangun geometri di bawah kurva terhadap sumbu waktu ($t$). Kurva dari $(0,0)$ ke $(5,20)$ membentuk bangun segitiga siku-siku.",
      steps: "1. Identifikasi dimensi bangun segitiga:<br>$$\\text{Alas} = 5\\text{ s}$$<br>$$\\text{Tinggi} = 20\\text{ m/s}$$<br>2. Hitung luas segitiga:<br>$$s = \\text{Luas} = \\frac{1}{2} \\times \\text{alas} \\times \\text{tinggi} = \\frac{1}{2} \\times 5 \\times 20 = 50\\text{ meter}$$",
      pitfalls: "Lupa mengalikan faktor $\\frac{1}{2}$ sehingga langsung mengalikan $5 \\times 20 = 100\\text{ m}$ (luas persegi panjang alih-alih segitiga)."
    }
  },
  {
    id: "fis-kin-gl-grafik-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-grafik",
    category: "Analisis Grafik Gerak Lurus",
    difficulty: "mudah",
    statement: "Jika kurva grafik kecepatan terhadap waktu ($v-t$) dari suatu benda berupa garis lurus mendatar horizontal sejajar sumbu-$t$ dengan nilai $v > 0$, maka kondisi gerak benda tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Gerak lurus beraturan (GLB) dengan percepatan bernilai nol",
      "Gerak lurus berubah beraturan (GLBB) dipercepat",
      "Benda dalam kondisi berhenti dan tidak berpindah posisi",
      "Benda bergerak dengan percepatan tetap yang bernilai positif",
      "Jarak tempuh benda tidak bertambah seiring berjalannya waktu"
    ],
    correctIndex: 0,
    solution: {
      concept: "Garis mendatar pada grafik $v-t$ menunjukkan bahwa nilai kecepatan konstan ($v(t) = C$). Karena kecepatannya tidak mengalami perubahan, maka percepatannya $a = \\frac{dv}{dt} = 0$, yang merupakan definisi dari GLB.",
      steps: "1. Garis horizontal pada kurva $v-t$ berarti gradien $\\frac{\\Delta v}{\\Delta t} = 0$.<br>2. Karena gradien grafik $v-t$ adalah percepatan, maka percepatan $a = 0$.<br>3. Gerak dengan $v = \\text{konstan}$ dan $a = 0$ disebut Gerak Lurus Beraturan (GLB).",
      pitfalls: "Jangan tertukar dengan garis horizontal pada grafik $s-t$ (posisi-waktu). Garis horizontal pada grafik $s-t$ berarti benda diam ($v = 0$), sedangkan pada grafik $v-t$ benda sedang melaju dengan kelajuan konstan."
    }
  },
  {
    id: "fis-kin-gl-grafik-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-grafik",
    category: "Analisis Grafik Gerak Lurus",
    difficulty: "mudah",
    statement: "Pada grafik percepatan terhadap waktu ($a-t$), luas daerah yang dibatasi oleh kurva grafik dengan sumbu waktu dalam selang waktu $\\Delta t$ menyatakan ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Perubahan kecepatan benda ($\\Delta v$)",
      "Kecepatan sesaat benda ($v$)",
      "Perpindahan total benda ($\\Delta s$)",
      "Posisi akhir benda ($s$)",
      "Gaya total yang bekerja"
    ],
    correctIndex: 0,
    solution: {
      concept: "Definisi percepatan adalah $a = \\frac{dv}{dt}$. Berdasarkan teorema dasar kalkulus:<br>$$\\Delta v = v_t - v_0 = \\int_{t_0}^t a(t)\\,dt$$<br>Integral tentu ini secara geometris diwakili oleh luas area di bawah kurva grafik $a-t$.",
      steps: "1. Luas area grafik $a-t$ berdimensi $[\\text{percepatan}] \\times [\\text{waktu}] = (\\text{m/s}^2) \\times \\text{s} = \\text{m/s}$.<br>2. Satuan $\\text{m/s}$ menyatakan satuan kecepatan.<br>3. Nilai luas ini secara tepat menyatakan perubahan kecepatan benda ($\\Delta v$), bukan kecepatan absolut jika kecepatan awalnya tidak nol.",
      pitfalls: "Menyebutkan sebagai perpindahan (perpindahan adalah luas grafik $v-t$, bukan $a-t$)."
    }
  },
  {
    id: "fis-kin-gl-grafik-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-grafik",
    category: "Analisis Grafik Gerak Lurus",
    difficulty: "mudah",
    statement: "Sebuah mobil mainan bergerak lurus dengan profil grafik kecepatan-waktu ($v-t$) sebagai berikut: mobil dipercepat secara beraturan dari keadaan diam hingga mencapai kelajuan $15\\text{ m/s}$ selama $4\\text{ s}$, kemudian melaju dengan kelajuan konstan $15\\text{ m/s}$ selama $6\\text{ s}$ berikutnya. Jarak total yang ditempuh mobil mainan tersebut selama $10\\text{ sekon}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$120\\text{ meter}$",
      "$150\\text{ meter}$",
      "$90\\text{ meter}$",
      "$105\\text{ meter}$",
      "$135\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jarak total dari grafik $v-t$ gabungan dihitung dari luas total bangun trapesium atau jumlahan luas segitiga (fase percepatan) dan persegi panjang (fase konstan).",
      steps: "1. Fase 1 ($0 - 4\\text{ s}$, segitiga):<br>$$L_1 = \\frac{1}{2} \\times 4\\text{ s} \\times 15\\text{ m/s} = 30\\text{ meter}$$<br>2. Fase 2 ($4 - 10\\text{ s}$, selang waktu $6\\text{ s}$, persegi panjang):<br>$$L_2 = 6\\text{ s} \\times 15\\text{ m/s} = 90\\text{ meter}$$<br>3. Jarak total:<br>$$s = L_1 + L_2 = 30\\text{ m} + 90\\text{ m} = 120\\text{ meter}$$",
      pitfalls: "Menghitung luas fase 2 dengan mengalikan $10 \\times 15 = 150\\text{ m}$, padahal durasi fase kedua hanyalah $10 - 4 = 6\\text{ sekon}$."
    }
  }
];
