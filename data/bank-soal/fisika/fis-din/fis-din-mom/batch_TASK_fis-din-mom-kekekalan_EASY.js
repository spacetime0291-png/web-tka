module.exports = [
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
