/**
 * Batch Task: TASK_fis-lis-statis-coulomb_EASY
 * SubTopic: Hukum Coulomb (fis-lis-statis-coulomb)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-lis-statis-coulomb-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-coulomb",
    category: "Karakteristik Interaksi Gaya Coulomb",
    difficulty: "mudah",
    statement: "Berdasarkan Hukum Coulomb, besar gaya interaksi elektrostatik antara dua partikel bermuatan listrik berbanding lurus dengan ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Jarak pemisah antara kedua muatan",
      "Kuadrat jarak pemisah antara kedua muatan",
      "Perkalian besar kedua muatan listrik",
      "Akar kuadrat dari perkalian kedua muatan",
      "Jumlah aljabar kedua muatan listrik"
    ],
    correctIndex: 2,
    solution: {
      concept: "Hukum Coulomb menyatakan bahwa gaya tarik-menarik atau tolak-menolak antara dua muatan listrik titik ($q_1$ dan $q_2$) yang terpisah sejauh $r$ dirumuskan sebagai:<br>$$F = k \\frac{|q_1 q_2|}{r^2}$$<br>dengan $k$ adalah konstanta elektrostatik.",
      steps: "1. Tinjau persamaan Hukum Coulomb:<br>$$F = k \\frac{|q_1 q_2|}{r^2}$$<br>2. Dari persamaan tersebut terlihat jelas bahwa:<br>- Gaya $F$ berbanding lurus dengan hasil kali kedua nilai mutlak muatan ($|q_1 q_2|$).<br>- Gaya $F$ berbanding terbalik dengan kuadrat jarak pemisah ($r^2$).<br>3. Oleh karena itu, pernyataan yang benar adalah pilihan C.",
      pitfalls: "Sering tertukar antara berbanding lurus dengan hasil kali muatan ($q_1 q_2$) dan berbanding terbalik dengan kuadrat jarak ($r^2$), atau mengira gayanya berbanding lurus dengan jumlah muatan ($q_1 + q_2$)."
    }
  },
  {
    id: "fis-lis-statis-coulomb-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-coulomb",
    category: "Hukum Kuadrat Terbalik Gaya Coulomb",
    difficulty: "mudah",
    statement: "Dua muatan listrik titik yang berjarak $r$ satu sama lain saling tolak-menolak dengan gaya sebesar $F$. Jika jarak antara kedua muatan tersebut dijauhkan menjadi $3r$ sementara besar kedua muatan tidak diubah, gaya tolak-menolak antara kedua muatan akan menjadi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{9}F$",
      "$\\frac{1}{3}F$",
      "$F$",
      "$3F$",
      "$9F$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hukum Coulomb mematuhi prinsip kuadrat terbalik terhadap jarak pemisah:<br>$$F \\propto \\frac{1}{r^2} \\implies \\frac{F'}{F} = \\left(\\frac{r}{r'}\\right)^2$$",
      steps: "1. Kondisi awal: jarak $r_1 = r$, gaya $F_1 = F$.<br>2. Kondisi baru: jarak $r_2 = 3r$, muatan konstan.<br>3. Gunakan perbandingan gaya dan jarak:<br>$$\\frac{F_2}{F_1} = \\left(\\frac{r_1}{r_2}\\right)^2 = \\left(\\frac{r}{3r}\\right)^2 = \\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$$<br>4. Maka gaya yang baru adalah $F_2 = \\frac{1}{9}F$ (pilihan A).",
      pitfalls: "Lupa mengkuadratkan perbandingan jarak sehingga keliru menjawab $\\frac{1}{3}F$, padahal ketergantungan jarak adalah kuadratik ($r^2$)."
    }
  },
  {
    id: "fis-lis-statis-coulomb-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-coulomb",
    category: "Perhitungan Gaya Coulomb Dua Muatan Titik",
    difficulty: "mudah",
    statement: "Dua buah partikel bermuatan listrik masing-masing $q_1 = +2\\,\\mu\\text{C}$ dan $q_2 = -4\\,\\mu\\text{C}$ terpisah pada jarak $20\\text{ cm}$ di udara. Jika konstanta Coulomb $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$, besar dan sifat gaya elektrostatik yang dialami kedua muatan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}18\\text{ N}$, tarik-menarik",
      "$1{,}8\\text{ N}$, tarik-menarik",
      "$1{,}8\\text{ N}$, tolak-menolak",
      "$18\\text{ N}$, tarik-menarik",
      "$18\\text{ N}$, tolak-menolak"
    ],
    correctIndex: 1,
    solution: {
      concept: "Besar gaya Coulomb dirumuskan dengan $F = k \\frac{|q_1 q_2|}{r^2}$. Dua muatan yang berlawanan jenis tanda (+ dan -) akan saling tarik-menarik.",
      steps: "1. Konversikan satuan ke SI standar:<br>$$q_1 = 2\\,\\mu\\text{C} = 2 \\times 10^{-6}\\text{ C}$$<br>$$q_2 = -4\\,\\mu\\text{C} \\implies |q_2| = 4 \\times 10^{-6}\\text{ C}$$<br>$$r = 20\\text{ cm} = 0{,}2\\text{ m} = 2 \\times 10^{-1}\\text{ m}$$<br>2. Kuadrat jarak:<br>$$r^2 = (2 \\times 10^{-1}\\text{ m})^2 = 4 \\times 10^{-2}\\text{ m}^2$$<br>3. Hitung besar gaya elektrostatik:<br>$$F = (9 \\times 10^9) \\times \\frac{(2 \\times 10^{-6}) \\times (4 \\times 10^{-6})}{4 \\times 10^{-2}} = 9 \\times 10^9 \\times \\frac{8 \\times 10^{-12}}{4 \\times 10^{-2}}$$<br>$$F = 9 \\times 10^9 \\times 2 \\times 10^{-10} = 18 \\times 10^{-1} = 1{,}8\\text{ N}$$<br>4. Karena muatan berlainan tanda ($+q$ dan $-q$), gaya bersifat tarik-menarik.<br>5. Jadi jawabannya adalah $1{,}8\\text{ N}$, tarik-menarik (pilihan B).",
      pitfalls: "Lupa mengubah satuan jarak dari $\\text{cm}$ ke $\\text{meter}$ ($20\\text{ cm} = 0{,}2\\text{ m}$) yang menyebabkan galat pangkat sepuluh sebesar $10^4$ kali lipat."
    }
  },
  {
    id: "fis-lis-statis-coulomb-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-coulomb",
    category: "Gaya Coulomb dalam Medium Dielektrik",
    difficulty: "mudah",
    statement: "Dua muatan listrik titik terpisah pada jarak tertentu di udara saling tolak-menolak dengan gaya elektrostatik sebesar $80\\text{ N}$. Jika kedua muatan beserta jarak pemisahnya dimasukkan ke dalam suatu medium zat cair yang memiliki permitivitas relatif (konstanta dielektrik) $\\varepsilon_r = 4$, gaya tolak-menolak antara kedua muatan tersebut menjadi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5\\text{ N}$",
      "$20\\text{ N}$",
      "$80\\text{ N}$",
      "$160\\text{ N}$",
      "$320\\text{ N}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gaya Coulomb di dalam medium dengan permitivitas relatif $\\varepsilon_r$ melemah dibandingkan dengan gayanya di ruang hampa/udara menurut hubungan:<br>$$F_{\\text{medium}} = \\frac{F_{\\text{udara}}}{\\varepsilon_r}$$",
      steps: "1. Identifikasi data: gaya di udara $F_{\\text{udara}} = 80\\text{ N}$ dan konstanta dielektrik medium $\\varepsilon_r = 4$.<br>2. Hitung gaya elektrostatik di dalam medium:<br>$$F_{\\text{medium}} = \\frac{F_{\\text{udara}}}{\\varepsilon_r} = \\frac{80\\text{ N}}{4} = 20\\text{ N}$$<br>3. Jadi gaya tolak-menolak antara kedua muatan di dalam medium tersebut adalah $20\\text{ N}$ (pilihan B).",
      pitfalls: "Alih-alih membagi gaya udara dengan $\\varepsilon_r$, sebagian siswa keliru mengalikannya ($80 \\times 4 = 320\\text{ N}$). Ingat bahwa kehadiran medium dielektrik selalu memperlemah interaksi medan elektrostatik antar muatan."
    }
  },
  {
    id: "fis-lis-statis-coulomb-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-coulomb",
    category: "Redistribusi Muatan Konduktor Identik",
    difficulty: "mudah",
    statement: "Dua bola konduktor identik berukuran sama mula-mula bermuatan $q_A = +6\\,\\mu\\text{C}$ dan $q_B = -2\\,\\mu\\text{C}$ terpisah pada jarak $r$ sehingga saling tarik-menarik dengan gaya sebesar $F_1$. Kedua bola kemudian disentuhkan satu sama lain lalu dikembalikan ke posisi semula pada jarak pemisah $r$ yang sama. Gaya elektrostatik baru yang terjadi ($F_2$) dibandingkan dengan $F_1$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{3}F_1$, tolak-menolak",
      "$\\frac{1}{3}F_1$, tarik-menarik",
      "$\\frac{2}{3}F_1$, tolak-menolak",
      "$3F_1$, tolak-menolak",
      "$0$ (kedua bola menjadi netral)"
    ],
    correctIndex: 0,
    solution: {
      concept: "Ketika dua konduktor identik disentuhkan, muatan total akan terdistribusi sama rata ke kedua bola:<br>$$q' = \\frac{q_A + q_B}{2}$$<br>Gaya elektrostatik sebanding dengan hasil kali nilai mutlak muatan ($F \\propto |q_1 q_2|$).",
      steps: "1. Keadaan mula-mula:<br>$$|q_A q_B| = |(+6) \\times (-2)| = 12\\,(\\mu\\text{C})^2$$<br>Gaya $F_1 \\propto 12$, bertanda beda jenis sehingga tarik-menarik.<br>2. Kedua bola disentuhkan dan muatan dibagi rata:<br>$$q'_A = q'_B = \\frac{+6\\,\\mu\\text{C} + (-2\\,\\mu\\text{C})}{2} = \\frac{+4\\,\\mu\\text{C}}{2} = +2\\,\\mu\\text{C}$$<br>3. Keadaan akhir setelah dipisahkan pada jarak yang sama:<br>$$|q'_A q'_B| = |(+2) \\times (+2)| = 4\\,(\\mu\\text{C})^2$$<br>Karena keduanya bertanda positif (sejenis), gayanya menjadi tolak-menolak.<br>4. Bandingkan besar gaya kedua keadaan:<br>$$\\frac{F_2}{F_1} = \\frac{|q'_A q'_B|}{|q_A q_B|} = \\frac{4}{12} = \\frac{1}{3} \\implies F_2 = \\frac{1}{3}F_1$$<br>5. Jadi besar gayanya adalah $\\frac{1}{3}F_1$ dengan sifat tolak-menolak (pilihan A).",
      pitfalls: "Siswa sering mengira muatannya saling meniadakan secara mutlak ($|6| - |-2| = 4$) tanpa membagi dua untuk kedua bola, atau lupa bahwa tanda muatan akhir menjadi sama jenis (+ dan +) sehingga sifat interaksi berubah dari tarik-menarik menjadi tolak-menolak."
    }
  }
];
