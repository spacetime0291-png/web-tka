/**
 * Batch Task: TASK_fis-gel-bunyi-doppler_MEDIUM
 * SubTopic: Efek Doppler (fis-gel-bunyi-doppler)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-gel-bunyi-doppler-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-doppler",
    category: "Efek Doppler",
    difficulty: "sedang",
    statement: "Sebuah mobil patroli polisi bergerak dengan kelajuan $30\\text{ m/s}$ ke arah timur sambil membunyikan sirine dengan frekuensi $930\\text{ Hz}$. Dari arah berlawanan, sebuah mobil sedan melaju ke barat dengan kelajuan $20\\text{ m/s}$ saling mendekati mobil polisi tersebut. Jika cepat rambat bunyi di udara adalah $340\\text{ m/s}$, frekuensi sirine yang didengar oleh pengemudi mobil sedan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$930\\text{ Hz}$",
      "$980\\text{ Hz}$",
      "$1040\\text{ Hz}$",
      "$1080\\text{ Hz}$",
      "$1120\\text{ Hz}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Ketika sumber bunyi dan pendengar saling mendekati di sepanjang garis lurus yang sama, konvensi tanda Efek Doppler adalah pendengar bernilai positif ($+v_p$) dan sumber bernilai negatif ($-v_s$):<br>$$f_p = \\left(\\frac{v + v_p}{v - v_s}\\right) f_s$$",
      steps: "1. Identifikasi parameter gerak: $v = 340\\text{ m/s}$, $v_p = 20\\text{ m/s}$ (mendekat $\\implies +$), $v_s = 30\\text{ m/s}$ (mendekat $\\implies -$), dan $f_s = 930\\text{ Hz}$.<br>2. Substitusikan ke rumus efek Doppler:<br>$$f_p = \\left(\\frac{340 + 20}{340 - 30}\\right) \\times 930 = \\left(\\frac{360}{310}\\right) \\times 930$$<br>3. Sederhanakan perhitungan:<br>$$f_p = 360 \\times \\frac{930}{310} = 360 \\times 3 = 1080\\text{ Hz}$$<br>4. Jawaban yang benar adalah pilihan D.",
      pitfalls: "Perhatikan bahwa kedua pihak saling mendekati, sehingga pembilang bertambah besar ($340 + 20 = 360$) dan penyebut berkurang ($340 - 30 = 310$), melipatgandakan efek peningkatan frekuensi."
    }
  },
  {
    id: "fis-gel-bunyi-doppler-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-doppler",
    category: "Efek Doppler",
    difficulty: "sedang",
    statement: "Dua mobil A dan B mula-mula berpapasan di jalan lurus kemudian bergerak saling menjauhi. Mobil A (sumber bunyi) melaju dengan kelajuan $20\\text{ m/s}$ sambil membunyikan klakson $720\\text{ Hz}$, sedangkan mobil B (pendengar) melaju dengan kelajuan $20\\text{ m/s}$. Jika laju rambat bunyi di udara saat itu $340\\text{ m/s}$, frekuensi klakson yang didengar oleh pengendara di mobil B adalah ....",
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
    correctIndex: 1,
    solution: {
      concept: "Ketika sumber bunyi dan pendengar saling menjauhi, tanda kecepatan adalah pendengar negatif ($-v_p$) dan sumber bunyi positif ($+v_s$):<br>$$f_p = \\left(\\frac{v - v_p}{v + v_s}\\right) f_s$$",
      steps: "1. Identifikasi parameter: $v = 340\\text{ m/s}$, $v_p = 20\\text{ m/s}$ (menjauh $\\implies -$), $v_s = 20\\text{ m/s}$ (menjauh $\\implies +$), dan $f_s = 720\\text{ Hz}$.<br>2. Masukkan ke rumus efek Doppler:<br>$$f_p = \\left(\\frac{340 - 20}{340 + 20}\\right) \\times 720 = \\left(\\frac{320}{360}\\right) \\times 720$$<br>3. Sederhanakan pecahan:<br>$$f_p = 320 \\times \\frac{720}{360} = 320 \\times 2 = 640\\text{ Hz}$$<br>4. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Karena kedua pihak bergerak menjauhi satu sama lain, pembilang mengecil dan penyebut membesar, menghasilkan frekuensi penerimaan yang jauh lebih rendah daripada frekuensi sumber aslinya."
    }
  },
  {
    id: "fis-gel-bunyi-doppler-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-doppler",
    category: "Efek Doppler",
    difficulty: "sedang",
    statement: "Sebuah mobil ambulans bergerak dengan kelajuan $20\\text{ m/s}$ mendekati seorang pengamat yang diam di tepi jalan sambil membunyikan sirine berfrekuensi $640\\text{ Hz}$. Pada saat itu, angin bertiup searah dengan arah gerak ambulans (menuju pengamat) dengan kelajuan $10\\text{ m/s}$. Jika cepat rambat bunyi di udara tenang adalah $330\\text{ m/s}$, frekuensi sirine yang didengar oleh pengamat adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$640\\text{ Hz}$",
      "$660\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$700\\text{ Hz}$",
      "$720\\text{ Hz}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pengaruh angin dengan kecepatan $v_w$ yang bertiup searah dengan perambatan gelombang bunyi menuju pendengar menyebabkan kecepatan efektif bunyi di udara menjadi $(v + v_w)$:<br>$$f_p = \\left(\\frac{(v + v_w) \\pm v_p}{(v + v_w) \\mp v_s}\\right) f_s$$",
      steps: "1. Kecepatan bunyi efektif terhadap tanah: $v' = v + v_w = 330 + 10 = 340\\text{ m/s}$.<br>2. Pendengar diam: $v_p = 0$.<br>3. Sumber bergerak mendekati pendengar: tanda penyebut bertanda minus ($-v_s = -20\\text{ m/s}$).<br>4. Masukkan ke rumus efek Doppler dengan angin:<br>$$f_p = \\left(\\frac{340}{340 - 20}\\right) \\times 640 = \\frac{340}{320} \\times 640 = 340 \\times 2 = 680\\text{ Hz}$$<br>5. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Jika angin bertiup searah perambatan gelombang bunyi, kecepatan angin ditambahkan ke kecepatan gelombang bunyi ($v + v_w$). Hati-hati jangan mengurangi jika arah angin membantu perambatan bunyi menuju pendengar."
    }
  },
  {
    id: "fis-gel-bunyi-doppler-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-doppler",
    category: "Efek Doppler",
    difficulty: "sedang",
    statement: "Sebuah mobil melaju dengan kecepatan tetap $10\\text{ m/s}$ lurus mendekati dinding tebing tegak sambil membunyikan klakson dengan frekuensi $660\\text{ Hz}$. Gelombang bunyi tersebut dipantulkan oleh tebing dan didengar kembali oleh pengemudi mobil. Jika cepat rambat bunyi di udara adalah $340\\text{ m/s}$, frekuensi pantulan bunyi yang didengar oleh pengemudi mobil adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$660\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$700\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$740\\text{ Hz}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Peristiwa pantulan pada dinding diam diselesaikan dalam dua tahap:<br>Tahap 1: Dinding bertindak sebagai pendengar diam menerima bunyi dari sumber yang mendekat ($v_p = 0, v_s = 10\\text{ m/s}$):<br>$$f_{\\text{tebing}} = \\left(\\frac{v}{v - v_s}\\right) f_s$$<br>Tahap 2: Dinding memantulkan kembali bunyi ($f_{\\text{pantul}} = f_{\\text{tebing}}$) dan bertindak sebagai sumber diam. Pengemudi bertindak sebagai pendengar yang mendekat ($v_p = 10\\text{ m/s}, v_s = 0$):<br>$$f_p = \\left(\\frac{v + v_p}{v}\\right) f_{\\text{tebing}} = \\left(\\frac{v + v_{\\text{mobil}}}{v - v_{\\text{mobil}}}\\right) f_s$$",
      steps: "1. Substitusikan nilai $v = 340\\text{ m/s}$, $v_{\\text{mobil}} = 10\\text{ m/s}$, dan $f_s = 660\\text{ Hz}$:<br>$$f_p = \\left(\\frac{340 + 10}{340 - 10}\\right) \\times 660 = \\left(\\frac{350}{330}\\right) \\times 660$$<br>2. Sederhanakan perhitungan:<br>$$f_p = 350 \\times \\frac{660}{330} = 350 \\times 2 = 700\\text{ Hz}$$<br>3. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Banyak siswa hanya menghitung frekuensi yang sampai di dinding tebing ($680\\text{ Hz}$, opsi B) dan lupa bahwa pengemudi bergerak mendekati tebing sehingga mengalami pergeseran Doppler kedua saat menyongsong gelombang pantulan."
    }
  },
  {
    id: "fis-gel-bunyi-doppler-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-doppler",
    category: "Efek Doppler",
    difficulty: "sedang",
    statement: "Sebuah kereta api melaju dengan kelajuan konstan $v_s$ melewati stasiun. Seorang pengamat yang berdiri diam di peron stasiun mendengarkan frekuensi peluit kereta sebesar $360\\text{ Hz}$ saat kereta mendekat. Setelah kereta melewati peron dan menjauh dengan kelajuan yang sama, frekuensi peluit yang didengar pengamat turun menjadi $320\\text{ Hz}$. Jika kelajuan rambat bunyi di udara adalah $340\\text{ m/s}$, besar kelajuan kereta api ($v_s$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$30\\text{ m/s}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Perbandingan frekuensi saat sumber mendekati pendengar diam ($f_{\\text{dekat}}$) dan saat sumber menjauhi pendengar diam ($f_{\\text{jauh}}$):<br>$$f_{\\text{dekat}} = \\left(\\frac{v}{v - v_s}\\right) f_0, \\quad f_{\\text{jauh}} = \\left(\\frac{v}{v + v_s}\\right) f_0 \\implies \\frac{f_{\\text{dekat}}}{f_{\\text{jauh}}} = \\frac{v + v_s}{v - v_s}$$",
      steps: "1. Substitusikan frekuensi yang terukur: $\\frac{360}{320} = \\frac{9}{8}$.<br>2. Bentuk persamaan rasio kecepatan:<br>$$\\frac{v + v_s}{v - v_s} = \\frac{9}{8}$$<br>3. Lakukan perkalian silang:<br>$$8(v + v_s) = 9(v - v_s) \\implies 8v + 8v_s = 9v - 9v_s$$<br>$$17v_s = v \\implies v_s = \\frac{v}{17}$$<br>4. Masukkan $v = 340\\text{ m/s}$:<br>$$v_s = \\frac{340}{17} = 20\\text{ m/s}$$<br>5. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Pastikan rasio yang dibentuk adalah $\\frac{v + v_s}{v - v_s}$ (kebalikan dari posisi penyebutnya). Jangan sampai salah dalam aljabar perkalian silang."
    }
  }
];
