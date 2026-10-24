module.exports = [
  {
    id: "fis-kin-gl-glb-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glb",
    category: "Gerak Lurus Beraturan (GLB)",
    difficulty: "mudah",
    statement: "Suatu benda dikatakan melakukan Gerak Lurus Beraturan (GLB) jika memenuhi karakteristik fisis ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Lintasannya lurus dengan kecepatan konstan dan percepatan nol",
      "Lintasannya lurus dengan percepatan konstan tidak nol",
      "Kecepatannya berubah secara teratur setiap satuan waktu",
      "Resultan gaya total yang bekerja pada benda bernilai konstan tidak nol",
      "Jarak tempuh sebanding dengan kuadrat waktu tempuhnya"
    ],
    correctIndex: 0,
    solution: {
      concept: "Ciri esensial GLB adalah lintasan berupa garis lurus, vektor kecepatan bernilai tetap baik besar maupun arahnya ($v = \\text{konstan}$), sehingga percepatan $a = \\frac{dv}{dt} = 0$, dan resultan gaya $\\Sigma F = 0$ (Hukum I Newton).",
      steps: "Analisis pilihan jawaban:<br>• Opsi A: Tepat, kecepatan konstan dan percepatan nol.<br>• Opsi B: Karakteristik GLBB.<br>• Opsi C: Ciri kecepatan GLBB.<br>• Opsi D: Menghasilkan GLBB berdasarkan Hukum II Newton.<br>• Opsi E: Hubungan $s \\propto t^2$ adalah milik GLBB ($s \\propto t$ pada GLB).",
      pitfalls: "Jangan menyamakan antara percepatan bernilai tetap ($a = \\text{konstan} \\ne 0$, GLBB) dengan percepatan nol ($a = 0$, GLB)."
    }
  },
  {
    id: "fis-kin-gl-glb-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glb",
    category: "Gerak Lurus Beraturan (GLB)",
    difficulty: "mudah",
    statement: "Sebuah mobil bergerak dengan kecepatan tetap $72\\text{ km/jam}$ pada lintasan jalan tol yang lurus. Jarak yang ditempuh mobil tersebut dalam selang waktu $15\\text{ sekon}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$300\\text{ meter}$",
      "$1080\\text{ meter}$",
      "$150\\text{ meter}$",
      "$360\\text{ meter}$",
      "$450\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada GLB, hubungan antara jarak tempuh ($s$), kecepatan konstan ($v$), dan waktu tempuh ($t$) dirumuskan dengan:<br>$$s = v \\cdot t$$",
      steps: "1. Konversikan kecepatan dari $\\text{km/jam}$ ke satuan SI ($\\text{m/s}$):<br>$$v = 72 \\times \\frac{5}{18}\\text{ m/s} = 20\\text{ m/s}$$<br>2. Hitung jarak tempuh dalam waktu $15\\text{ s}$:<br>$$s = v \\cdot t = 20\\text{ m/s} \\times 15\\text{ s} = 300\\text{ meter}$$",
      pitfalls: "Lupa mengonversi satuan jam ke sekon dan langsung mengalikan $72 \\times 15 = 1080$."
    }
  },
  {
    id: "fis-kin-gl-glb-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glb",
    category: "Gerak Lurus Beraturan (GLB)",
    difficulty: "mudah",
    statement: "Sebuah stasiun radar memancarkan pulsa gelombang mikro ke arah sebuah pesawat terbang. Pulsa pantulan terdeteksi kembali di stasiun radar setelah selang waktu $\\Delta t = 4 \\times 10^{-4}\\text{ s}$. Jika cepat rambat gelombang elektromagnetik di udara adalah $c = 3 \\times 10^8\\text{ m/s}$, jarak pesawat tersebut dari stasiun radar adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$60\\text{ km}$",
      "$120\\text{ km}$",
      "$30\\text{ km}$",
      "$240\\text{ km}$",
      "$6\\text{ km}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gelombang merambat dengan kelajuan tetap GLB ($c = \\text{konstan}$). Karena gelombang menempuh perjalanan bolak-balik (pergi dan pulang), jarak satu arah ke objek dihitung dengan:<br>$$s = \\frac{c \\cdot \\Delta t}{2}$$",
      steps: "1. Substitusikan nilai $c$ dan $\\Delta t$:<br>$$s = \\frac{(3 \\times 10^8\\text{ m/s}) \\times (4 \\times 10^{-4}\\text{ s})}{2}$$<br>$$s = \\frac{12 \\times 10^4\\text{ m}}{2} = 6 \\times 10^4\\text{ m}$$<br>2. Konversi ke satuan kilometer:<br>$$s = 60\\text{ km}$$",
      pitfalls: "Lupa membagi dua waktu tempuh bolak-balik sehingga mendapatkan jawaban $120\\text{ km}$."
    }
  },
  {
    id: "fis-kin-gl-glb-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glb",
    category: "Gerak Lurus Beraturan (GLB)",
    difficulty: "mudah",
    statement: "Persamaan kedudukan sebuah benda yang melakukan gerak lurus beraturan dinyatakan oleh $x(t) = 50 - 4t$, dengan $x$ dalam meter dan $t$ dalam sekon. Pernyataan berikut yang benar mengenai karakteristik gerak benda tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Benda mulai bergerak dari posisi awal $50\\text{ m}$ dengan kecepatan $-4\\text{ m/s}$",
      "Benda bergerak dipercepat dengan percepatan $-4\\text{ m/s}^2$",
      "Benda akan berhenti dan berbalik arah saat $t = 12{,}5\\text{ s}$",
      "Kecepatan benda bertambah seiring berjalannya waktu",
      "Posisi awal benda berada di titik pusat koordinat $x = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Bentuk umum persamaan posisi GLB adalah $x(t) = x_0 + v t$, di mana $x_0$ adalah posisi awal dan $v = \\frac{dx}{dt}$ adalah kecepatan tetap.",
      steps: "1. Bandingkan persamaan $x(t) = 50 - 4t$ dengan bentuk baku $x(t) = x_0 + v t$:<br>$$x_0 = 50\\text{ m}$$<br>$$v = -4\\text{ m/s}$$<br>2. Karena nilai $v = -4\\text{ m/s}$ konstan, benda bergerak dengan laju tetap $4\\text{ m/s}$ ke arah sumbu-$x$ negatif tanpa percepatan ($a = 0$).",
      pitfalls: "Pada $t = 12{,}5\\text{ s}$, benda hanya melintasi titik asal $x = 0$, bukan berhenti atau berbalik arah."
    }
  },
  {
    id: "fis-kin-gl-glb-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glb",
    category: "Gerak Lurus Beraturan (GLB)",
    difficulty: "mudah",
    statement: "Dua mobil $A$ dan $B$ berangkat secara bersamaan dari dua kota yang terpisah sejauh $120\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus. Mobil $A$ melaju dengan kelajuan tetap $40\\text{ km/jam}$ dan mobil $B$ dengan kelajuan tetap $60\\text{ km/jam}$. Kedua mobil tersebut akan berpapasan setelah menempuh waktu perjalanan selama ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$72\\text{ menit}$",
      "$60\\text{ menit}$",
      "$80\\text{ menit}$",
      "$90\\text{ menit}$",
      "$50\\text{ menit}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Dua benda GLB yang bergerak saling mendekat menempuh jarak total bersama sebesar jarak pemisah kedua kota ($d$):<br>$$t = \\frac{d}{v_A + v_B}$$",
      steps: "1. Hitung waktu tempuh dalam satuan jam:<br>$$t = \\frac{120\\text{ km}}{40\\text{ km/jam} + 60\\text{ km/jam}} = \\frac{120}{100} = 1{,}2\\text{ jam}$$<br>2. Konversi ke menit:<br>$$t = 1{,}2 \\times 60\\text{ menit} = 72\\text{ menit}$$",
      pitfalls: "Menghitung $1{,}2\\text{ jam}$ sebagai $1\\text{ jam } 20\\text{ menit}$ ($80\\text{ menit}$). Pengali desimal waktu adalah 60 ($0{,}2 \\times 60 = 12\\text{ menit}$). Kesalahan konversi desimal sering menjadi jebakan."
    }
  }
];
