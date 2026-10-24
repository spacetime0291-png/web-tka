/**
 * Batch Task: TASK_fis-gel-bunyi-doppler_EASY
 * SubTopic: Efek Doppler (fis-gel-bunyi-doppler)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-gel-bunyi-doppler-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-doppler",
    category: "Efek Doppler",
    difficulty: "mudah",
    statement: "Berdasarkan prinsip efek Doppler pada gelombang bunyi di udara, frekuensi gelombang bunyi yang didengar oleh seorang pengamat ($f_p$) akan terukur lebih tinggi daripada frekuensi asli sumber bunyi ($f_s$) apabila ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Jarak antara sumber bunyi dan pengamat semakin berkurang (saling mendekati)",
      "Jarak antara sumber bunyi dan pengamat semakin bertambah (saling menjauhi)",
      "Sumber bunyi bergerak menjauhi pengamat yang diam di tempat",
      "Pengamat bergerak menjauhi sumber bunyi yang diam di tempat",
      "Sumber bunyi dan pengamat bergerak searah dengan kelajuan yang persis sama"
    ],
    correctIndex: 0,
    solution: {
      concept: "Efek Doppler adalah gejala perubahan frekuensi yang terdeteksi akibat gerak relatif antara sumber bunyi dan pengamat:<br>$$f_p = \\frac{v \\pm v_p}{v \\mp v_s} f_s$$<br>Jika jarak relatif berkurang (saling mendekati), muka gelombang yang diterima per satuan waktu semakin rapat $\\implies f_p > f_s$.",
      steps: "1. Analisis kondisi fisis: Saat sumber dan pendengar saling mendekati, panjang gelombang efektif memendek atau laju relatif penerimaan muka gelombang meningkat.<br>2. Hal ini menyebabkan frekuensi yang diterima ($f_p$) lebih tinggi daripada frekuensi sumber ($f_s$).<br>3. Jawaban yang tepat adalah pilihan A.",
      pitfalls: "Jika keduanya bergerak searah dengan kelajuan sama, jarak relatif konstan sehingga tidak terjadi efek Doppler ($f_p = f_s$). Jika saling menjauhi, frekuensi akan terdengar lebih rendah ($f_p < f_s$)."
    }
  },
  {
    id: "fis-gel-bunyi-doppler-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-doppler",
    category: "Efek Doppler",
    difficulty: "mudah",
    statement: "Sebuah mobil ambulans melaju dengan kelajuan $20\\text{ m/s}$ sambil membunyikan sirine dengan frekuensi $640\\text{ Hz}$ mendekati seorang pejalan kaki yang berdiri diam di trotoar. Jika cepat rambat bunyi di udara saat itu adalah $340\\text{ m/s}$, frekuensi sirine yang didengar oleh pejalan kaki tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$600\\text{ Hz}$",
      "$640\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$760\\text{ Hz}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Persamaan efek Doppler ketika sumber bunyi bergerak mendekati pendengar yang diam ($v_p = 0$) adalah:<br>$$f_p = \\frac{v}{v - v_s} f_s$$",
      steps: "1. Identifikasi parameter: $v = 340\\text{ m/s}$, $v_s = 20\\text{ m/s}$ (tanda negatif karena sumber mendekat), $v_p = 0$, dan $f_s = 640\\text{ Hz}$.<br>2. Masukkan ke dalam rumus efek Doppler:<br>$$f_p = \\frac{340}{340 - 20} \\times 640 = \\frac{340}{320} \\times 640$$<br>3. Sederhanakan perhitungan:<br>$$f_p = 340 \\times \\frac{640}{320} = 340 \\times 2 = 680\\text{ Hz}$$<br>4. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Hati-hati dengan tanda pada penyebut: sumber mendekati pendengar menggunakan tanda minus ($v - v_s$), bukan plus. Jika menggunakan tanda plus akan menghasilkan $604\\text{ Hz}$."
    }
  },
  {
    id: "fis-gel-bunyi-doppler-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-doppler",
    category: "Efek Doppler",
    difficulty: "mudah",
    statement: "Sebuah sirine pos penjagaan yang diam memancarkan gelombang bunyi berfrekuensi $680\\text{ Hz}$. Seorang pengendara sepeda motor melaju mendekati pos penjagaan tersebut dengan kelajuan $10\\text{ m/s}$. Jika kelajuan rambat bunyi di udara adalah $340\\text{ m/s}$, frekuensi sirine yang didengar oleh pengendara motor adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$660\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$700\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$750\\text{ Hz}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Persamaan efek Doppler ketika pendengar bergerak mendekati sumber bunyi yang diam ($v_s = 0$) adalah:<br>$$f_p = \\frac{v + v_p}{v} f_s$$",
      steps: "1. Identifikasi parameter: $v = 340\\text{ m/s}$, $v_p = +10\\text{ m/s}$ (tanda positif karena pendengar mendekat), $v_s = 0$, dan $f_s = 680\\text{ Hz}$.<br>2. Substitusikan nilai ke persamaan:<br>$$f_p = \\frac{340 + 10}{340} \\times 680 = \\frac{350}{340} \\times 680$$<br>3. Sederhanakan perhitungan:<br>$$f_p = 350 \\times \\frac{680}{340} = 350 \\times 2 = 700\\text{ Hz}$$<br>4. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Pendengar mendekati sumber menggunakan tanda tambah ($+$) di pembilang. Jika salah menggunakan tanda minus, akan diperoleh $660\\text{ Hz}$ (opsi A)."
    }
  },
  {
    id: "fis-gel-bunyi-doppler-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-doppler",
    category: "Efek Doppler",
    difficulty: "mudah",
    statement: "Sebuah lokomotif kereta api bergerak menjauhi stasiun dengan kelajuan tetap $20\\text{ m/s}$ sambil membunyikan peluit berfrekuensi $720\\text{ Hz}$. Seorang petugas stasiun yang berdiri diam mendengarkan bunyi peluit tersebut dengan frekuensi sebesar .... (Cepat rambat bunyi di udara $340\\text{ m/s}$).",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$640\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$740\\text{ Hz}$",
      "$760\\text{ Hz}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Ketika sumber bunyi bergerak menjauhi pendengar yang diam ($v_p = 0$), frekuensi yang didengar memenuhi persamaan:<br>$$f_p = \\frac{v}{v + v_s} f_s$$",
      steps: "1. Identifikasi nilai yang diketahui: $v = 340\\text{ m/s}$, $v_s = 20\\text{ m/s}$ (tanda positif karena sumber menjauh), $v_p = 0$, dan $f_s = 720\\text{ Hz}$.<br>2. Masukkan ke rumus efek Doppler:<br>$$f_p = \\frac{340}{340 + 20} \\times 720 = \\frac{340}{360} \\times 720$$<br>3. Sederhanakan pecahan:<br>$$f_p = 340 \\times \\frac{720}{360} = 340 \\times 2 = 680\\text{ Hz}$$<br>4. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Sumber menjauh $\\implies$ tanda di penyebut adalah plus ($v + v_s$) sehingga nilai penyebut membesar dan frekuensi $f_p$ menjadi lebih kecil dari $f_s$."
    }
  },
  {
    id: "fis-gel-bunyi-doppler-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-doppler",
    category: "Efek Doppler",
    difficulty: "mudah",
    statement: "Seorang pengendara sepeda motor melaju menjauhi sebuah pengeras suara masjid yang diam dengan kecepatan $15\\text{ m/s}$. Pengeras suara memancarkan bunyi azan dengan frekuensi $680\\text{ Hz}$. Jika laju rambat bunyi di udara adalah $340\\text{ m/s}$, frekuensi bunyi yang didengar oleh pengendara motor tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$630\\text{ Hz}$",
      "$650\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$710\\text{ Hz}$",
      "$725\\text{ Hz}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Ketika pendengar bergerak menjauhi sumber bunyi yang diam ($v_s = 0$), frekuensi yang didengar berkurang dan memenuhi persamaan:<br>$$f_p = \\frac{v - v_p}{v} f_s$$",
      steps: "1. Identifikasi variabel: $v = 340\\text{ m/s}$, $v_p = 15\\text{ m/s}$ (tanda minus karena pendengar menjauh), $v_s = 0$, dan $f_s = 680\\text{ Hz}$.<br>2. Masukkan ke rumus efek Doppler:<br>$$f_p = \\frac{340 - 15}{340} \\times 680 = \\frac{325}{340} \\times 680$$<br>3. Sederhanakan:<br>$$f_p = 325 \\times \\frac{680}{340} = 325 \\times 2 = 650\\text{ Hz}$$<br>4. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Pendengar menjauh menyebabkan pembilang berkurang ($v - v_p$). Pastikan tidak terbalik menempatkan kecepatan pendengar di penyebut."
    }
  }
];
