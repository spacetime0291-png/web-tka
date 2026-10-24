module.exports = [
  {
    id: "fis-kin-gl-glbb-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glbb",
    category: "Gerak Lurus Berubah Beraturan (GLBB)",
    difficulty: "mudah",
    statement: "Sebuah mobil balap mula-mula diam di garis start, kemudian dihidupkan dan bergerak lurus dipercepat beraturan dengan percepatan konstan $3\\text{ m/s}^2$ selama $6\\text{ sekon}$. Kecepatan akhir mobil dan jarak yang telah ditempuhnya berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$18\\text{ m/s}$ dan $54\\text{ m}$",
      "$18\\text{ m/s}$ dan $108\\text{ m}$",
      "$9\\text{ m/s}$ dan $54\\text{ m}$",
      "$18\\text{ m/s}$ dan $36\\text{ m}$",
      "$12\\text{ m/s}$ dan $72\\text{ m}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada GLBB dengan kecepatan awal nol ($v_0 = 0$):<br>$$v_t = a \\cdot t$$<br>$$s = \\frac{1}{2} a t^2$$",
      steps: "1. Hitung kecepatan akhir saat $t = 6\\text{ s}$:<br>$$v_t = 3\\text{ m/s}^2 \\times 6\\text{ s} = 18\\text{ m/s}$$<br>2. Hitung jarak tempuh:<br>$$s = \\frac{1}{2} (3\\text{ m/s}^2) \\times (6\\text{ s})^2 = \\frac{1}{2} \\times 3 \\times 36 = 54\\text{ meter}$$",
      pitfalls: "Lupa mengalikan faktor $\\frac{1}{2}$ pada rumus jarak sehingga memperoleh $108\\text{ m}$ ($3 \\times 36$)."
    }
  },
  {
    id: "fis-kin-gl-glbb-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glbb",
    category: "Gerak Lurus Berubah Beraturan (GLBB)",
    difficulty: "mudah",
    statement: "Sebuah sepeda motor melaju dengan kelajuan awal $20\\text{ m/s}$. Pengemudi mengerem sehingga motor mengalami perlambatan konstan sebesar $4\\text{ m/s}^2$ hingga berhenti. Waktu yang dibutuhkan sepeda motor sejak pengereman hingga berhenti sempurna adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5\\text{ sekon}$",
      "$4\\text{ sekon}$",
      "$6\\text{ sekon}$",
      "$8\\text{ sekon}$",
      "$2\\text{ sekon}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Persamaan GLBB diperlambat menuju keadaan diam ($v_t = 0$):<br>$$v_t = v_0 - a t$$",
      steps: "1. Substitusikan $v_t = 0$, $v_0 = 20\\text{ m/s}$, dan $a = 4\\text{ m/s}^2$:<br>$$0 = 20 - 4t$$<br>2. Selesaikan nilai $t$:<br>$$4t = 20 \\implies t = 5\\text{ sekon}$$",
      pitfalls: "Mengalikan $20 \\times 4 = 80\\text{ s}$ atau salah mengoperasikan tanda minus perlambatan."
    }
  },
  {
    id: "fis-kin-gl-glbb-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glbb",
    category: "Gerak Lurus Berubah Beraturan (GLBB)",
    difficulty: "mudah",
    statement: "Sebuah benda bergerak pada lintasan lurus dengan kecepatan awal $10\\text{ m/s}$ dan dipercepat dengan percepatan tetap $2\\text{ m/s}^2$. Jarak yang telah ditempuh benda ketika kecepatannya meningkat menjadi $30\\text{ m/s}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$200\\text{ meter}$",
      "$400\\text{ meter}$",
      "$150\\text{ meter}$",
      "$250\\text{ meter}$",
      "$100\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hubungan GLBB antara kecepatan awal ($v_0$), kecepatan akhir ($v_t$), percepatan ($a$), dan jarak tempuh ($s$) tanpa variabel waktu adalah:<br>$$v_t^2 = v_0^2 + 2 a s$$",
      steps: "1. Masukkan nilai yang diketahui:<br>$$30^2 = 10^2 + 2(2)s$$<br>$$900 = 100 + 4s$$<br>2. Selesaikan nilai $s$:<br>$$4s = 900 - 100 = 800$$<br>$$s = \\frac{800}{4} = 200\\text{ meter}$$",
      pitfalls: "Lupa menguadratkan kecepatan ($30 - 10 = 20$, lalu $20/4 = 5$), padahal rumus GLBB independen waktu menggunakan kuadrat kecepatan."
    }
  },
  {
    id: "fis-kin-gl-glbb-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glbb",
    category: "Gerak Lurus Berubah Beraturan (GLBB)",
    difficulty: "mudah",
    statement: "Karakteristik utama yang membedakan Gerak Lurus Berubah Beraturan (GLBB) dari Gerak Lurus Beraturan (GLB) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Percepatan gerak bernilai konstan bukan nol sehingga kecepatannya berubah secara linier terhadap waktu",
      "Percepatan gerak selalu bernilai nol sepanjang lintasan",
      "Kecepatan gerak bernilai konstan tidak bergantung pada waktu",
      "Grafik posisi terhadap waktu ($s-t$) berbentuk garis lurus dengan kemiringan tetap",
      "Resultan gaya total yang bekerja pada benda bernilai nol"
    ],
    correctIndex: 0,
    solution: {
      concept: "Karakteristik esensial GLBB adalah percepatan konstan ($a = \\text{konstan} \\ne 0$). Akibatnya, kecepatan berubah secara teratur/linier ($v(t) = v_0 + at$) dan grafik $s-t$ berbentuk parabola kuadrat.",
      steps: "Evaluasi setiap opsi:<br>• Opsi A: Sangat tepat sesuai definisi GLBB.<br>• Opsi B: Ini adalah ciri GLB ($a = 0$).<br>• Opsi C: Ciri GLB ($v = \\text{konstan}$).<br>• Opsi D: Grafik $s-t$ garis lurus adalah milik GLB.<br>• Opsi E: $\\Sigma F = 0$ menghasilkan percepatan nol (Hukum I Newton, GLB).",
      pitfalls: "Membedakan kata 'kecepatan konstan' (GLB) dengan 'percepatan konstan' (GLBB)."
    }
  },
  {
    id: "fis-kin-gl-glbb-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glbb",
    category: "Gerak Lurus Berubah Beraturan (GLBB)",
    difficulty: "mudah",
    statement: "Sebuah truk muatan melaju dengan kecepatan awal $72\\text{ km/jam}$. Sopir menginjak rem sehingga truk berhenti dalam jarak pengereman sejauh $50\\text{ meter}$. Besar perlambatan yang dialami truk tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ m/s}^2$",
      "$2\\text{ m/s}^2$",
      "$5\\text{ m/s}^2$",
      "$8\\text{ m/s}^2$",
      "$3{,}6\\text{ m/s}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada gerak diperlambat hingga berhenti ($v_t = 0$):<br>$$v_t^2 = v_0^2 - 2 a s$$",
      steps: "1. Konversi satuan kecepatan awal ke SI:<br>$$v_0 = 72 \\times \\frac{5}{18} = 20\\text{ m/s}$$<br>2. Masukkan ke rumus gerak diperlambat dengan $v_t = 0$ dan $s = 50\\text{ m}$:<br>$$0 = 20^2 - 2 a (50)$$<br>$$100 a = 400 \\implies a = 4\\text{ m/s}^2$$",
      pitfalls: "Memasukkan nilai $72\\text{ km/jam}$ langsung ke dalam rumus tanpa konversi ke satuan SI $\\text{m/s}$."
    }
  }
];
