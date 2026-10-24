/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Momentum dan Impuls (fis-din-mom)
 * Sub-Bab: Hukum Kekekalan Momentum (fis-din-mom-kekekalan)
 * Slug: kekekalan-momentum
 * Indikator: Kekekalan momentum total pada sistem terisolasi tanpa gaya luar.
 * 
 * Total Butir Soal: 11 (Mudah: 5, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-mom-kekekalan";
  const subTopicSlug = "kekekalan-momentum";
  const questions = [
  {
    "id": "fis-din-mom-kekekalan-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-kekekalan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah senapan bermassa $M = 4\\text{ kg}$ menembakkan sebutir peluru bermassa $m = 20\\text{ gram}$ secara mendatar dengan kelajuan laras $v_p = 400\\text{ m/s}$. Jika senapan bebas bergerak tanpa ditahan gaya luar mendatar, besar kelajuan sentakan (recoil) senapan ke belakang tepat setelah penembakan adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1\\text{ m/s}$",
      "$2\\text{ m/s}$",
      "$4\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$20\\text{ m/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada sistem senapan dan peluru yang terisolasi dari gaya luar horizontal, berlaku Hukum Kekekalan Momentum Linier: $p_{\\text{awal}} = p_{\\text{akhir}}$. Karena mula-mula sistem diam ($p_{\\text{awal}} = 0$), momentum peluru ke depan harus diimbangi oleh momentum senapan ke belakang.",
      "steps": "1. Konversikan massa peluru ke satuan SI:\\n$$m = 20\\text{ gram} = 0,02\\text{ kg}$$\\n2. Terapkan hukum kekekalan momentum:\\n$$p_{\\text{awal}} = p_{\\text{akhir}}$$\\n$$0 = M v_s + m v_p$$\\n$$v_s = -\\frac{m v_p}{M}$$\\n3. Substitusi nilai:\\n$$v_s = -\\frac{(0,02)(400)}{4} = -\\frac{8}{4} = -2\\text{ m/s}$$\\nBesar kelajuan sentakan senapan adalah $|v_s| = 2\\text{ m/s}$ ke arah belakang.",
      "pitfalls": "Kekeliruan sering terjadi jika massa peluru tidak dikonversi ke kilogram ($20 \\times 400 / 4 = 2.000\\text{ m/s}$) yang jelas tidak fisis untuk sentakan senapan."
    },
    "subTopicSlug": "kekekalan-momentum",
    "bab": "Dinamika",
    "subBab": "Hukum Kekekalan Momentum",
    "subTopic": "Hukum Kekekalan Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-mom-kekekalan-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-kekekalan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Seseorang bermassa $m_1 = 50\\text{ kg}$ berdiri di atas sebuah perahu kecil bermassa $m_2 = 150\\text{ kg}$ yang sedang terapung tenang di danau (gesekan air diabaikan). Orang tersebut melompat horizontal dari ujung perahu ke dermaga dengan kelajuan $v_1 = 3\\text{ m/s}$. Besar kelajuan perahu yang terdorong ke arah sebaliknya sesaat setelah orang melompat adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0,5\\text{ m/s}$",
      "$1,0\\text{ m/s}$",
      "$1,5\\text{ m/s}$",
      "$2,0\\text{ m/s}$",
      "$3,0\\text{ m/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Karena tidak ada gaya luar horizontal pada sistem orang-perahu, momentum total sistem kekal. Sebelum orang melompat, sistem dalam keadaan diam ($P_{\\text{total}} = 0$).",
      "steps": "1. Persamaan kekekalan momentum horizontal:\\n$$P_{\\text{awal}} = P_{\\text{akhir}}$$\\n$$0 = m_1 v_1 + m_2 v_2$$\\n$$v_2 = -\\frac{m_1 v_1}{m_2}$$\\n2. Masukkan angka yang diketahui:\\n$$v_2 = -\\frac{50 \\times 3}{150} = -\\frac{150}{150} = -1,0\\text{ m/s}$$\\nJadi, perahu terdorong ke arah berlawanan dengan kelajuan $1,0\\text{ m/s}$.",
      "pitfalls": "Jangan menjumlahkan massa orang dan perahu saat menghitung kecepatan akhir perahu. Setelah orang melompat terlepas, massa yang bergerak mundur hanyalah massa perahu ($150\\text{ kg}$)."
    },
    "subTopicSlug": "kekekalan-momentum",
    "bab": "Dinamika",
    "subBab": "Hukum Kekekalan Momentum",
    "subTopic": "Hukum Kekekalan Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-mom-kekekalan-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-kekekalan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Syarat mutlak agar Hukum Kekekalan Momentum Linier berlaku konstan pada suatu sistem mekanika adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Tidak terjadi gesekan internal di antara partikel-partikel di dalam sistem",
      "Resultan gaya eksternal (gaya luar) yang bekerja pada sistem bernilai nol",
      "Energi kinetik total sistem sebelum dan sesudah peristiwa harus kekal",
      "Semua benda di dalam sistem harus memiliki massa yang identik",
      "Sistem harus bergerak dengan kelajuan konstan mendekati kecepatan cahaya"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Berdasarkan Hukum II Newton untuk sistem banyak partikel: $\\sum \\vec{F}_{\\text{eksternal}} = \\frac{d\\vec{P}_{\\text{total}}}{dt}$. Momentum total kekal konstan jika dan hanya jika turunan terhadap waktunya nol, yaitu ketika $\\sum \\vec{F}_{\\text{eksternal}} = 0$.",
      "steps": "1. Analisis gaya dalam (internal): Pasangan aksi-reaksi internal selalu saling meniadakan menurut Hukum III Newton.\\n2. Analisis gaya luar (eksternal): Hanya gaya luar resultan yang dapat mengubah total momentum linier sistem.\\n3. Kesimpulan: Jika $\\sum \\vec{F}_{\\text{eksternal}} = 0$, maka $\\vec{P}_{\\text{total}} = \\text{konstan}$.",
      "pitfalls": "Kekekalan momentum TIDAK mensyaratkan kekekalan energi kinetik. Pada tumbukan tidak lentur sama sekali (di mana energi kinetik berkurang drastis), momentum tetap kekal asalkan tidak ada gaya eksternal netto."
    },
    "subTopicSlug": "kekekalan-momentum",
    "bab": "Dinamika",
    "subBab": "Hukum Kekekalan Momentum",
    "subTopic": "Hukum Kekekalan Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-mom-kekekalan-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-kekekalan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Dua gerobak laboratorium $A$ ($m_A = 1\\text{ kg}$) dan $B$ ($m_B = 3\\text{ kg}$) diletakkan pada lintasan horizontal licin tanpa gesekan. Di antara kedua gerobak terdapat sebuah pegas ringan yang sedang ditekan dan ditahan oleh seutas benang. Ketika benang dipotong, pegas mendorong kedua gerobak saling menjauh. Jika gerobak $A$ terpental ke kiri dengan kelajuan $v_A = 6\\text{ m/s}$, kelajuan gerobak $B$ yang terpental ke kanan adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1\\text{ m/s}$",
      "$2\\text{ m/s}$",
      "$3\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$18\\text{ m/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gaya dorong pegas merupakan gaya internal sistem. Karena tidak ada gaya horizontal eksternal pada lintasan licin, berlaku kekekalan momentum linier total dari keadaan diam.",
      "steps": "1. Tetapkan arah kanan positif dan kiri negatif:\\n$$P_{\\text{awal}} = 0$$\\n2. Terapkan hukum kekekalan momentum:\\n$$P_{\\text{awal}} = P_{\\text{akhir}} \\implies 0 = -m_A v_A + m_B v_B$$\\n$$m_B v_B = m_A v_A$$\\n3. Substitusi nilai numerik:\\n$$3 v_B = 1 \\times 6 \\implies v_B = \\frac{6}{3} = 2\\text{ m/s}$$\\nJadi, kelajuan gerobak $B$ adalah $2\\text{ m/s}$.",
      "pitfalls": "Perhatikan bahwa benda dengan massa lebih besar ($3\\text{ kg}$) akan bergerak dengan kelajuan yang lebih lambat ($2\\text{ m/s}$) dibandingkan benda bermassa kecil ($1\\text{ kg}$ dengan kelajuan $6\\text{ m/s}$)."
    },
    "subTopicSlug": "kekekalan-momentum",
    "bab": "Dinamika",
    "subBab": "Hukum Kekekalan Momentum",
    "subTopic": "Hukum Kekekalan Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-mom-kekekalan-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-kekekalan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Dua buah balok meluncur di atas lantai mendatar licin dan bergerak saling mendekati. Balok 1 bermassa $m_1 = 2\\text{ kg}$ bergerak ke kanan dengan laju $v_1 = 5\\text{ m/s}$, sedangkan balok 2 bermassa $m_2 = 3\\text{ kg}$ bergerak ke kiri dengan laju $v_2 = 2\\text{ m/s}$. Besar dan arah momentum linier total sistem kedua balok tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ kg}\\cdot\\text{m/s}$ berarah ke kanan",
      "$4\\text{ kg}\\cdot\\text{m/s}$ berarah ke kiri",
      "$16\\text{ kg}\\cdot\\text{m/s}$ berarah ke kanan",
      "$16\\text{ kg}\\cdot\\text{m/s}$ berarah ke kiri",
      "$0\\text{ kg}\\cdot\\text{m/s}$ (sistem saling meniadakan)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Momentum total adalah penjumlahan vektor dari setiap momentum partikel penyusun sistem: $\\vec{P}_{\\text{total}} = \\vec{p}_1 + \\vec{p}_2$.",
      "steps": "1. Tentukan tanda arah vektor (kanan positif, kiri negatif):\\n- Balok 1: $p_1 = m_1 v_1 = 2 \\times (+5) = +10\\text{ kg}\\cdot\\text{m/s}$.\\n- Balok 2: $p_2 = m_2 v_2 = 3 \\times (-2) = -6\\text{ kg}\\cdot\\text{m/s}$.\\n2. Jumlahkan momentum sistem:\\n$$P_{\\text{total}} = p_1 + p_2 = +10 + (-6) = +4\\text{ kg}\\cdot\\text{m/s}$$\\n3. Karena hasilnya bertanda positif, arah momentum total adalah ke kanan.\\nJadi, momentum total sistem adalah $4\\text{ kg}\\cdot\\text{m/s}$ ke kanan.",
      "pitfalls": "Kerap menjumlahkan besar kelajuan tanpa memperhatikan tanda arah ($10 + 6 = 16\\text{ kg}\\cdot\\text{m/s}$). Momentum adalah besaran vektor sehingga gerak yang saling berlawanan arah harus dikurangkan."
    },
    "subTopicSlug": "kekekalan-momentum",
    "bab": "Dinamika",
    "subBab": "Hukum Kekekalan Momentum",
    "subTopic": "Hukum Kekekalan Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-mom-kekekalan-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-kekekalan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah perahu bermassa $M = 120\\text{ kg}$ dan panjang $L = 4\\text{ m}$ terapung diam di atas air danau yang tenang (gesekan antara lambung perahu dan air diabaikan). Seseorang bermassa $m = 40\\text{ kg}$ yang awalnya berdiri di buritan (ujung belakang) perahu berjalan hingga mencapai haluan (ujung depan) perahu. Jarak pergeseran perahu relatif terhadap air danau selama orang tersebut berjalan adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0,5\\text{ m}$",
      "$1,0\\text{ m}$",
      "$1,5\\text{ m}$",
      "$2,0\\text{ m}$",
      "$3,0\\text{ m}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Karena tidak ada gaya luar eksternal pada arah horizontal (gesekan air diabaikan), pusat massa sistem orang dan perahu posisinya tetap tidak berpindah di danau: $\\Delta x_{\\text{pm}} = 0$. Perpindahan perahu dan orang memenuhi hubungan: $M \\Delta x_p + m \\Delta x_o = 0$.",
      "steps": "1. Misalkan perahu bergeser ke kiri sejauh $x$ terhadap air danau ($\\Delta x_p = -x$).\\n2. Maka perpindahan orang relatif terhadap air danau adalah $L - x$ ke arah kanan ($\\Delta x_o = L - x$).\\n3. Terapkan prinsip posisi pusat massa tetap:\\n$$m (L - x) - M x = 0$$\\n$$m L - m x - M x = 0 \\implies (M + m) x = m L$$\\n4. Substitusi nilai:\\n$$x = \\frac{m L}{M + m} = \\frac{40 \\times 4}{120 + 40} = \\frac{160}{160} = 1,0\\text{ m}$$\\nJadi, perahu bergeser sejauh $1,0\\text{ m}$ ke arah berlawanan.",
      "pitfalls": "Kerap salah membagi dengan massa perahu saja tanpa menjumlahkannya dengan massa orang ($40 \\times 4 / 120 = 1,33\\text{ m}$). Sistem adalah gabungan massa orang dan massa perahu ($M + m$)."
    },
    "subTopicSlug": "kekekalan-momentum",
    "bab": "Dinamika",
    "subBab": "Hukum Kekekalan Momentum",
    "subTopic": "Hukum Kekekalan Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-mom-kekekalan-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-kekekalan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah granat bermassa $M = 3\\text{ kg}$ meluncur mendatar dengan kelajuan $v_0 = 10\\text{ m/s}$ searah sumbu-$x$ positif. Tiba-tiba granat meledak menjadi dua bagian: bagian $A$ bermassa $m_A = 1\\text{ kg}$ terlempar searah sumbu-$y$ positif dengan kelajuan $v_A = 30\\text{ m/s}$. Besar kelajuan pecahan bagian $B$ ($m_B = 2\\text{ kg}$) sesaat setelah ledakan adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$15\\text{ m/s}$",
      "$15\\sqrt{2}\\text{ m/s}$",
      "$30\\text{ m/s}$",
      "$30\\sqrt{2}\\text{ m/s}$",
      "$45\\text{ m/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Ledakan terjadi akibat gaya internal sehingga vektor momentum total sistem kekal: $\\vec{P}_{\\text{awal}} = \\vec{P}_{\\text{akhir}} = \\vec{p}_A + \\vec{p}_B$. Uraikan komponen momentum pada sumbu-$x$ dan sumbu-$y$.",
      "steps": "1. Momentum awal granat (searah sumbu-$x$):\\n$$\\vec{P}_{\\text{awal}} = M v_0 \\hat{i} = 3 \\times 10 \\hat{i} = 30\\hat{i}\\text{ kg}\\cdot\\text{m/s}$$\\n2. Momentum pecahan $A$ (searah sumbu-$y$):\\n$$\\vec{p}_A = m_A v_A \\hat{j} = 1 \\times 30 \\hat{j} = 30\\hat{j}\\text{ kg}\\cdot\\text{m/s}$$\\n3. Tentukan vektor momentum pecahan $B$:\\n$$\\vec{P}_{\\text{awal}} = \\vec{p}_A + \\vec{p}_B \\implies \\vec{p}_B = 30\\hat{i} - 30\\hat{j}\\text{ kg}\\cdot\\text{m/s}$$\\n4. Hitung vektor kecepatan pecahan $B$ ($m_B = 2\\text{ kg}$):\\n$$\\vec{v}_B = \\frac{\\vec{p}_B}{m_B} = \\frac{30\\hat{i} - 30\\hat{j}}{2} = 15\\hat{i} - 15\\hat{j}\\text{ m/s}$$\\n5. Hitung besar kelajuan pecahan $B$:\\n$$|\\vec{v}_B| = \\sqrt{15^2 + (-15)^2} = \\sqrt{225 + 225} = \\sqrt{450} = 15\\sqrt{2}\\text{ m/s}$$\\nJadi, besar kelajuan pecahan $B$ adalah $15\\sqrt{2}\\text{ m/s}$.",
      "pitfalls": "Kerap lupa mengalokasikan massa pecahan $B$ saat mencari kecepatan ($p_B / m_B$) atau salah mengabaikan kekekalan pada salah satu sumbu ortogonal."
    },
    "subTopicSlug": "kekekalan-momentum",
    "bab": "Dinamika",
    "subBab": "Hukum Kekekalan Momentum",
    "subTopic": "Hukum Kekekalan Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-mom-kekekalan-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-kekekalan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah peluru bermassa $m = 20\\text{ gram}$ melesat secara mendatar dengan kelajuan $v_1 = 400\\text{ m/s}$ menembus sebuah balok kayu bermassa $M = 2\\text{ kg}$ yang awalnya diam di atas lantai horizontal licin. Setelah menembus balok, peluru melesat keluar dengan kelajuan yang berkurang menjadi $v_2 = 100\\text{ m/s}$. Kelajuan balok kayu tepat setelah ditembus peluru adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1\\text{ m/s}$",
      "$2\\text{ m/s}$",
      "$3\\text{ m/s}$",
      "$4\\text{ m/s}$",
      "$5\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada interaksi tumbukan di lantai licin tanpa gaya luar horizontal, berlaku Hukum Kekekalan Momentum Linier: $m v_1 + M V_0 = m v_2 + M V$.",
      "steps": "1. Konversikan massa peluru ke satuan kg:\\n$$m = 20\\text{ gram} = 0,02\\text{ kg}$$\\n2. Tuliskan momentum sebelum tumbukan ($V_0 = 0$):\\n$$P_{\\text{awal}} = m v_1 = 0,02 \\times 400 = 8\\text{ kg}\\cdot\\text{m/s}$$\\n3. Tuliskan momentum sesudah tumbukan:\\n$$P_{\\text{akhir}} = m v_2 + M V = (0,02 \\times 100) + 2 V = 2 + 2 V$$\\n4. Terapkan kekekalan momentum:\\n$$8 = 2 + 2 V \\implies 2 V = 6 \\implies V = 3\\text{ m/s}$$\\nJadi, kelajuan balok kayu setelah ditembus peluru adalah $3\\text{ m/s}$.",
      "pitfalls": "Kerap keliru menganggap peluru tertanam di dalam balok (tumbukan tidak lentur sama sekali). Pada soal ini peluru berhasil lolos keluar dengan sisa kecepatan $100\\text{ m/s}$."
    },
    "subTopicSlug": "kekekalan-momentum",
    "bab": "Dinamika",
    "subBab": "Hukum Kekekalan Momentum",
    "subTopic": "Hukum Kekekalan Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-mom-kekekalan-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-kekekalan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah troli bermassa $M = 80\\text{ kg}$ dinaiki seorang anak bermassa $m = 40\\text{ kg}$. Keduanya sedang bergerak bersama-sama menelusuri rel horizontal licin dengan kecepatan konstan $v_0 = 4\\text{ m/s}$. Tiba-tiba anak tersebut melompat horizontal ke depan dengan kelajuan $v_a = 7\\text{ m/s}$ relatif terhadap tanah. Kelajuan troli tepat sesaat setelah anak tersebut melompat adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1,5\\text{ m/s}$",
      "$2,0\\text{ m/s}$",
      "$2,5\\text{ m/s}$",
      "$3,0\\text{ m/s}$",
      "$3,5\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Kekekalan momentum linier pada sistem gerak bersama yang kemudian berpisah: $(M + m) v_0 = M v_t + m v_a$. Kecepatan anak diberikan relatif terhadap tanah sehingga langsung dimasukkan ke dalam persamaan.",
      "steps": "1. Hitung momentum total awal sistem:\\n$$P_{\\text{awal}} = (M + m) v_0 = (80 + 40) \\times 4 = 120 \\times 4 = 480\\text{ kg}\\cdot\\text{m/s}$$\\n2. Tuliskan momentum total akhir sistem:\\n$$P_{\\text{akhir}} = M v_t + m v_a = 80 v_t + (40 \\times 7) = 80 v_t + 280$$\\n3. Samakan momentum awal dan akhir:\\n$$480 = 80 v_t + 280$$\\n$$80 v_t = 200 \\implies v_t = \\frac{200}{80} = 2,5\\text{ m/s}$$\\nJadi, kelajuan troli setelah anak melompat adalah $2,5\\text{ m/s}$.",
      "pitfalls": "Perhatikan kerangka acuan kecepatan lompatan. Di sini dinyatakan relatif terhadap tanah ($7\\text{ m/s}$). Jika dinyatakan relatif terhadap troli, maka kecepatannya harus dirumuskan sebagai $(v_t + v_{\\text{rel}})$."
    },
    "subTopicSlug": "kekekalan-momentum",
    "bab": "Dinamika",
    "subBab": "Hukum Kekekalan Momentum",
    "subTopic": "Hukum Kekekalan Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-mom-kekekalan-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-kekekalan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah wahana antariksa bermassa total $M = 1.000\\text{ kg}$ sedang melayang diam di ruang hampa tanpa gravitasi. Untuk melakukan akselerasi maju, mesin wahana menyemburkan gas pendorong bermassa $m_{\\text{gas}} = 50\\text{ kg}$ ke arah belakang dengan kelajuan semburan efektif $u = 380\\text{ m/s}$ dalam waktu yang sangat singkat. Kelajuan maju wahana tepat setelah penyemburan gas tersebut selesai adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$19\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$25\\text{ m/s}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Propulsi roket di ruang hampa murni didasarkan pada Hukum Kekekalan Momentum Linier dan Hukum III Newton. Momentum gas yang disemburkan ke belakang menghasilkan momentum dorong wahana ke depan: $0 = M_{\\text{sisa}} v_w - m_{\\text{gas}} u$.",
      "steps": "1. Hitung massa sisa wahana antariksa setelah gas terbuang:\\n$$M_{\\text{sisa}} = M - m_{\\text{gas}} = 1.000 - 50 = 950\\text{ kg}$$\\n2. Terapkan hukum kekekalan momentum dari keadaan diam:\\n$$P_{\\text{awal}} = P_{\\text{akhir}}$$\\n$$0 = M_{\\text{sisa}} v_w - m_{\\text{gas}} u$$\\n$$950 v_w = 50 \\times 380 = 19.000$$\\n3. Hitung kelajuan wahana:\\n$$v_w = \\frac{19.000}{950} = 20\\text{ m/s}$$\\nJadi, kelajuan wahana adalah $20\\text{ m/s}$.",
      "pitfalls": "Kekeliruan paling umum adalah menggunakan massa awal $1.000\\text{ kg}$ untuk membagi ($19.000 / 1.000 = 19\\text{ m/s}$). Ingat bahwa gas yang telah terlempar ke luar tidak lagi menjadi bagian dari massa wahana yang dipercepat."
    },
    "subTopicSlug": "kekekalan-momentum",
    "bab": "Dinamika",
    "subBab": "Hukum Kekekalan Momentum",
    "subTopic": "Hukum Kekekalan Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "drill-rot-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-mom-kekekalan",
    "category": "Hukum Kekekalan Momentum Sudut",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seorang atlet seluncur es berputar dengan kecepatan sudut $\\omega_1 = 3\\text{ rad/s}$ saat merentangkan kedua tangannya, di mana momen inersia tubuhnya saat itu adalah $I_1 = 4\\text{ kg}\\cdot\\text{m}^2$. Ketika atlet tersebut melipat kedua tangannya merapat ke dada, momen inersianya berkurang menjadi $I_2 = 1{,}5\\text{ kg}\\cdot\\text{m}^2$. Jika gesekan es diabaikan, kecepatan sudut putaran atlet sekarang ($\\omega_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$8\\text{ rad/s}$",
      "$6\\text{ rad/s}$",
      "$4\\text{ rad/s}$",
      "$12\\text{ rad/s}$",
      "$2\\text{ rad/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Kekekalan Momentum Sudut:</strong><br>Jika tidak ada torsi luar yang bekerja pada sistem ($\\Sigma \\tau_{\\text{eksternal}} = 0$), maka momentum sudut sistem kekal:<br>$$L_1 = L_2 \\implies I_1 \\omega_1 = I_2 \\omega_2$$</div>",
      "steps": "<ol><li>Momentum sudut awal: $L_1 = I_1 \\omega_1 = 4 \\times 3 = 12\\text{ kg}\\cdot\\text{m}^2\\text{/s}$.</li><li>Karena momentum sudut kekal: $I_2 \\omega_2 = 12$.</li><li>Kecepatan sudut baru: $\\omega_2 = \\frac{12}{1{,}5} = 8\\text{ rad/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Prinsip Fisika Riil:</strong> Saat atlet melipat tangan, jari-jari massa terhadap sumbu putar mengecil $\\implies$ momen inersia $I$ mengecil $\\implies$ kecepatan putar $\\omega$ melonjak naik drastis!</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum Kekekalan Momentum",
    "subTopic": "Hukum Kekekalan Momentum",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-mom",
    "subTopicSlug": "kekekalan-momentum"
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
    window.TKA_BANK_SOAL[subTopicSlug] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
