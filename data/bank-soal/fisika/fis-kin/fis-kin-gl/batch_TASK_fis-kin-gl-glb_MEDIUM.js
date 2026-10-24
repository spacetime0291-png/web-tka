module.exports = [
  {
    id: "fis-kin-gl-glb-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glb",
    category: "Gerak Lurus Beraturan (GLB)",
    difficulty: "sedang",
    statement: "Sebuah rangkaian kereta api penumpang dengan panjang $200\\text{ m}$ melaju dengan kecepatan konstan $72\\text{ km/jam}$. Kereta tersebut melintasi sebuah terowongan rel yang memiliki panjang $600\\text{ m}$. Waktu yang diperlukan kereta sejak ujung kepala lokomotif tepat memasuki pintu terowongan hingga gerbong paling belakang tepat keluar meninggalkan ujung akhir terowongan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$40\\text{ sekon}$",
      "$30\\text{ sekon}$",
      "$10\\text{ sekon}$",
      "$50\\text{ sekon}$",
      "$20\\text{ sekon}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Agar seluruh badan kereta melintasi terowongan secara utuh, jarak yang harus ditempuh oleh kereta adalah jumlahan panjang terowongan ($L_T$) dan panjang rangkaian kereta ($L_K$):<br>$$s = L_T + L_K$$",
      steps: "1. Konversikan kecepatan kereta ke satuan SI ($\\text{m/s}$):<br>$$v = 72 \\times \\frac{5}{18} = 20\\text{ m/s}$$<br>2. Hitung jarak tempuh total hingga gerbong terakhir keluar terowongan:<br>$$s = 600\\text{ m} + 200\\text{ m} = 800\\text{ m}$$<br>3. Hitung waktu tempuh yang dibutuhkan:<br>$$t = \\frac{s}{v} = \\frac{800\\text{ m}}{20\\text{ m/s}} = 40\\text{ sekon}$$",
      pitfalls: "Hanya memperhitungkan panjang terowongan saja ($600/20 = 30\\text{ s}$), yang baru merupakan waktu saat lokomotif depan keluar, bukan seluruh gerbong keluar."
    }
  },
  {
    id: "fis-kin-gl-glb-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glb",
    category: "Gerak Lurus Beraturan (GLB)",
    difficulty: "sedang",
    statement: "Dua mobil $A$ dan $B$ bergerak pada lintasan lurus searah dari titik tolak yang sama. Mobil $A$ berangkat terlebih dahulu pada $t = 0$ dengan kelajuan tetap $15\\text{ m/s}$. Tepat $10\\text{ sekon}$ kemudian, mobil $B$ berangkat menyusul dari titik tolak yang sama dengan kelajuan tetap $20\\text{ m/s}$. Jarak yang telah ditempuh oleh mobil $B$ ketika tepat menyusul mobil $A$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$600\\text{ meter}$",
      "$450\\text{ meter}$",
      "$300\\text{ meter}$",
      "$750\\text{ meter}$",
      "$200\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kondisi menyusul tercapai ketika jarak tempuh kedua kendaraan dari titik tolak awal bernilai sama ($s_A = s_B$). Perhatikan perbedaan selang waktu tempuh antara mobil $A$ dan $B$.",
      steps: "1. Misal waktu tempuh mobil $B$ adalah $t_B$. Karena mobil $A$ berangkat $10\\text{ s}$ lebih awal, waktu tempuh mobil $A$ adalah $t_A = t_B + 10$.<br>2. Samakan jarak tempuh kedua mobil:<br>$$s_A = s_B \\implies v_A (t_B + 10) = v_B \\cdot t_B$$<br>$$15(t_B + 10) = 20 t_B \\implies 15 t_B + 150 = 20 t_B$$<br>$$5 t_B = 150 \\implies t_B = 30\\text{ sekon}$$<br>3. Hitung jarak yang ditempuh mobil $B$:<br>$$s_B = v_B \\cdot t_B = 20\\text{ m/s} \\times 30\\text{ s} = 600\\text{ meter}$$",
      pitfalls: "Menghitung jarak tempuh mobil $A$ hanya selama 10 sekon pertama ($150\\text{ m}$) atau lupa mengalikan dengan kecepatan mobil $B$."
    }
  },
  {
    id: "fis-kin-gl-glb-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glb",
    category: "Gerak Lurus Beraturan (GLB)",
    difficulty: "sedang",
    statement: "Sebuah ledakan terjadi pada suatu titik di jalur rel kereta api. Gelombang bunyi merambat melalui batang rel baja dengan kelajuan $v_{\\text{baja}} = 5100\\text{ m/s}$ dan melalui udara dengan kelajuan $v_{\\text{udara}} = 340\\text{ m/s}$. Seorang teknisi rel di kejauhan mencatat bahwa bunyi yang merambat melalui rel baja terdengar $2{,}8\\text{ sekon}$ lebih cepat daripada bunyi yang merambat melalui udara. Jarak antara teknisi tersebut dengan lokasi ledakan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1020\\text{ meter}$",
      "$952\\text{ meter}$",
      "$1360\\text{ meter}$",
      "$2040\\text{ meter}$",
      "$680\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Bunyi merambat secara GLB pada masing-masing medium. Selisih waktu kedatangan bunyi pada jarak yang sama ($d$) adalah:<br>$$\\Delta t = t_{\\text{udara}} - t_{\\text{baja}} = \\frac{d}{v_{\\text{udara}}} - \\frac{d}{v_{\\text{baja}}}$$",
      steps: "1. Faktorkan persamaan selisih waktu:<br>$$\\Delta t = d \\left( \\frac{1}{v_{\\text{udara}}} - \\frac{1}{v_{\\text{baja}}} \\right)$$<br>$$2{,}8 = d \\left( \\frac{1}{340} - \\frac{1}{5100} \\right)$$<br>2. Samakan penyebut pecahan:<br>$$\\frac{1}{340} - \\frac{1}{5100} = \\frac{15 - 1}{5100} = \\frac{14}{5100}$$<br>3. Hitung jarak $d$:<br>$$d = \\frac{2{,}8 \\times 5100}{14} = 0{,}2 \\times 5100 = 1020\\text{ meter}$$",
      pitfalls: "Lupa menyamakan penyebut atau mengalikan $2{,}8$ hanya dengan kecepatan bunyi di udara ($340 \\times 2{,}8 = 952\\text{ m}$)."
    }
  },
  {
    id: "fis-kin-gl-glb-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glb",
    category: "Gerak Lurus Beraturan (GLB)",
    difficulty: "sedang",
    statement: "Dua partikel $A$ dan $B$ bergerak pada sumbu-$x$ dengan posisi dinyatakan oleh $x_A(t) = 4t + 10$ dan $x_B(t) = 10t - 20$ (dengan $x$ dalam meter dan $t$ dalam sekon). Jarak pisah antara kedua partikel saat $t = 2\\text{ s}$ serta waktu saat kedua partikel bertemu berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$18\\text{ m}$ dan $5\\text{ s}$",
      "$18\\text{ m}$ dan $3\\text{ s}$",
      "$28\\text{ m}$ dan $5\\text{ s}$",
      "$10\\text{ m}$ dan $6\\text{ s}$",
      "$12\\text{ m}$ dan $4\\text{ s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jarak pisah dua partikel adalah harga mutlak selisih kedudukan $|x_A(t) - x_B(t)|$. Kedua partikel bertemu ketika kedudukan keduanya sama persis ($x_A(t) = x_B(t)$).",
      steps: "1. Hitung posisi masing-masing pada $t = 2\\text{ s}$:<br>$$x_A(2) = 4(2) + 10 = 18\\text{ m}$$<br>$$x_B(2) = 10(2) - 20 = 0\\text{ m}$$<br>Jarak pisah pada $t = 2\\text{ s}$ adalah $|18 - 0| = 18\\text{ meter}$.<br>2. Tentukan waktu pertemuan:<br>$$x_A(t) = x_B(t) \\implies 4t + 10 = 10t - 20$$<br>$$10 + 20 = 10t - 4t \\implies 30 = 6t \\implies t = 5\\text{ sekon}$$",
      pitfalls: "Perhatikan tanda minus pada $-20$ saat memindahkan ruas aljabar agar tidak keliru menghitung waktu pertemuan."
    }
  },
  {
    id: "fis-kin-gl-glb-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-glb",
    category: "Gerak Lurus Beraturan (GLB)",
    difficulty: "sedang",
    statement: "Sebuah jalan konveyor datar di bandara memiliki panjang $60\\text{ meter}$ dan bergerak otomatis dengan kelajuan konstan $1\\text{ m/s}$. Seorang calon penumpang yang terburu-buru berjalan di atas konveyor searah dengan arah gerak konveyor dan berhasil mencapai ujung seberang dalam waktu $20\\text{ sekon}$. Jika calon penumpang tersebut berjalan dengan kecepatan jalan yang sama tetapi berlawanan arah dengan arah gerak konveyor, waktu yang ia perlukan untuk mencapai ujung seberang adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$60\\text{ sekon}$",
      "$40\\text{ sekon}$",
      "$30\\text{ sekon}$",
      "$80\\text{ sekon}$",
      "$50\\text{ sekon}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kecepatan efektif orang terhadap lantai diam adalah $v_{\\text{searah}} = v_{\\text{orang}} + v_{\\text{konveyor}}$ saat bergerak searah, dan $v_{\\text{lawan}} = v_{\\text{orang}} - v_{\\text{konveyor}}$ saat bergerak berlawanan arah.",
      steps: "1. Kecepatan relatif saat searah gerak konveyor:<br>$$v_{\\text{searah}} = \\frac{L}{t_1} = \\frac{60\\text{ m}}{20\\text{ s}} = 3\\text{ m/s}$$<br>2. Hitung laju jalan kaki orang:<br>$$v_{\\text{orang}} + v_{\\text{konveyor}} = 3 \\implies v_{\\text{orang}} + 1 = 3 \\implies v_{\\text{orang}} = 2\\text{ m/s}$$<br>3. Hitung kecepatan efektif saat berjalan berlawanan arah:<br>$$v_{\\text{lawan}} = v_{\\text{orang}} - v_{\\text{konveyor}} = 2\\text{ m/s} - 1\\text{ m/s} = 1\\text{ m/s}$$<br>4. Waktu yang dibutuhkan saat melawan arah:<br>$$t_2 = \\frac{L}{v_{\\text{lawan}}} = \\frac{60\\text{ m}}{1\\text{ m/s}} = 60\\text{ sekon}$$",
      pitfalls: "Mengabaikan fakta bahwa kecepatan konveyor mengurangi laju gerak orang saat berjalan berlawanan arah."
    }
  }
];
