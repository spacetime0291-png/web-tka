module.exports = [
  {
    "id": "fis-din-mom-impuls-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-impuls",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah gaya konstan $F = 40\\text{ N}$ bekerja pada sebuah benda diam selama selang waktu $\\Delta t = 0,25\\text{ sekon}$. Besar impuls gaya yang dikerjakan pada benda tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ N}\\cdot\\text{s}$",
      "$10\\text{ N}\\cdot\\text{s}$",
      "$20\\text{ N}\\cdot\\text{s}$",
      "$40\\text{ N}\\cdot\\text{s}$",
      "$160\\text{ N}\\cdot\\text{s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Impuls ($I$) didefinisikan sebagai hasil kali antara gaya konstan $F$ dan selang waktu kerjanya $\\Delta t$: $I = F \\Delta t$. Satuan SI untuk impuls adalah newton-sekon ($\\text{N}\\cdot\\text{s}$).",
      "steps": "1. Identifikasi nilai besaran:\\n$F = 40\\text{ N}$ dan $\\Delta t = 0,25\\text{ s}$.\\n2. Hitung besar impuls:\\n$$I = F \\Delta t = 40\\text{ N} \\times 0,25\\text{ s} = 10\\text{ N}\\cdot\\text{s}$$\\nJadi, besar impuls gaya adalah $10\\text{ N}\\cdot\\text{s}$.",
      "pitfalls": "Kerap keliru membagi gaya dengan waktu ($40 / 0,25 = 160\\text{ N}\\cdot\\text{s}$), padahal impuls merupakan perkalian gaya dan waktu."
    }
  },
  {
    "id": "fis-din-mom-impuls-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-impuls",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah bola sepak bermassa $m = 0,5\\text{ kg}$ yang awalnya diam di atas rumput ditendang sehingga melesat lurus dengan kelajuan $v = 20\\text{ m/s}$. Jika sentuhan kaki pemain pada bola berlangsung selama selang waktu kontak $\\Delta t = 0,02\\text{ sekon}$, besar gaya rata-rata tendangan yang dialami bola adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$100\\text{ N}$",
      "$250\\text{ N}$",
      "$500\\text{ N}$",
      "$1.000\\text{ N}$",
      "$2.000\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Teorema impuls-momentum menyatakan bahwa impuls yang bekerja pada suatu benda sama dengan perubahan momentum benda tersebut: $I = \\bar{F} \\Delta t = \\Delta p = m(v_t - v_0)$.",
      "steps": "1. Hitung perubahan momentum bola dari diam ($v_0 = 0$):\\n$$\\Delta p = m v_t - m v_0 = (0,5)(20) - 0 = 10\\text{ kg}\\cdot\\text{m/s}$$\\n2. Hitung gaya rata-rata kontak:\\n$$\\bar{F} = \\frac{\\Delta p}{\\Delta t} = \\frac{10}{0,02} = \\frac{1.000}{2} = 500\\text{ N}$$\\nJadi, besar gaya rata-rata tendangan adalah $500\\text{ N}$.",
      "pitfalls": "Perhatikan bahwa waktu kontak $\\Delta t = 0,02\\text{ s}$ berada pada penyebut, sehingga gaya impulsif bernilai besar meskipun perubahan momentumnya relatif sedang."
    }
  },
  {
    "id": "fis-din-mom-impuls-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-impuls",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Dalam eksperimen mekanika, diperoleh kurva hubungan antara gaya yang bekerja terhadap waktu ($F - t$). Besaran fisis yang direpresentasikan secara geometris oleh luas daerah di bawah kurva grafik $F - t$ adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Usaha total yang dilakukan gaya",
      "Daya mekanik sesaat",
      "Impuls gaya (perubahan momentum)",
      "Percepatan rata-rata benda",
      "Energi potensial benda"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Secara integral matematis, impuls didefinisikan sebagai integral gaya terhadap waktu: $I = \\int_{t_1}^{t_2} F(t) dt$. Nilai integral tentu ini tepat sama dengan luas daerah di bawah kurva $F - t$.",
      "steps": "1. Tinjau definisi integral luas: $\\text{Luas} = \\int F dt$.\\n2. Definisi impuls: $I = \\int F dt = \\Delta p$.\\n3. Kesimpulan: Luas daerah di bawah kurva grafik gaya terhadap waktu ($F - t$) merepresentasikan impuls gaya yang setara dengan perubahan momentum linier benda.",
      "pitfalls": "Kerap tertukar dengan kurva grafik $F - s$ (gaya terhadap posisi). Luas di bawah kurva $F - s$ merepresentasikan Usaha ($W = \\int F ds$), sedangkan luas di bawah kurva $F - t$ merepresentasikan Impuls ($I = \\int F dt$)."
    }
  },
  {
    "id": "fis-din-mom-impuls-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-impuls",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah bola kasti bermassa $m = 0,15\\text{ kg}$ dilempar mendatar ke kiri menuju pemukul dengan kelajuan $v_1 = 20\\text{ m/s}$. Setelah dipukul dengan tongkat kasti, bola bergerak berbalik arah mendatar ke kanan dengan kelajuan $v_2 = 30\\text{ m/s}$. Besar impuls yang diberikan tongkat pemukul pada bola kasti adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1,5\\text{ N}\\cdot\\text{s}$",
      "$3,0\\text{ N}\\cdot\\text{s}$",
      "$4,5\\text{ N}\\cdot\\text{s}$",
      "$7,5\\text{ N}\\cdot\\text{s}$",
      "$15,0\\text{ N}\\cdot\\text{s}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Impuls sama dengan perubahan momentum: $I = \\Delta p = m(v_2 - v_1)$. Ingat bahwa kecepatan merupakan besaran vektor sehingga arah bolak-balik harus dihitung dengan tanda positif dan negatif.",
      "steps": "1. Tetapkan arah ke kanan positif dan ke kiri negatif:\\n- Kecepatan awal (ke kiri): $v_1 = -20\\text{ m/s}$.\\n- Kecepatan akhir (ke kanan): $v_2 = +30\\text{ m/s}$.\\n2. Hitung perubahan kecepatan:\\n$$\\Delta v = v_2 - v_1 = +30 - (-20) = 50\\text{ m/s}$$\\n3. Hitung besar impuls yang diterima bola:\\n$$I = m \\Delta v = 0,15\\text{ kg} \\times 50\\text{ m/s} = 7,5\\text{ N}\\cdot\\text{s}$$\\nJadi, besar impuls tongkat pemukul adalah $7,5\\text{ N}\\cdot\\text{s}$.",
      "pitfalls": "Kekeliruan paling umum adalah mengurangkan kelajuan bola ($30 - 20 = 10\\text{ m/s}$) sehingga menghasilkan impuls $0,15 \\times 10 = 1,5\\text{ N}\\cdot\\text{s}$. Ingat tanda minus pada vektor kecepatan arah berlawanan."
    }
  },
  {
    "id": "fis-din-mom-impuls-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-impuls",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Pada mobil modern dipasang fitur keselamatan berupa kantong udara (airbag) dan zona benturan terencana (crumple zone). Secara konsep fisika impuls dan momentum, alasan utama perancangan fitur-fitur tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Mengurangi total perubahan momentum pengemudi saat mobil berhenti mendadak",
      "Memperpanjang selang waktu kontak deselerasi sehingga memperkecil gaya impulsif rata-rata pada tubuh pengemudi",
      "Menghilangkan energi kinetik mobil sepenuhnya tanpa melepaskan kalor atau deformasi",
      "Mempercepat waktu penghentian tubuh pengemudi agar mobil lebih cepat stabil",
      "Mengubah gaya impulsif menjadi gaya gesekan statis pada ban mobil"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hubungan impuls dan gaya rata-rata: $\\bar{F} = \\frac{\\Delta p}{\\Delta t}$. Ketika mobil berhenti dari kelajuan tertentu, perubahan momentum penumpang ($\Delta p$) bernilai tetap. Dengan memperpanjang durasi tumbukan ($\Delta t$), gaya rata-rata impulsif ($\bar{F}$) yang dialami penumpang dapat diperkecil secara drastis.",
      "steps": "1. Perubahan momentum pengemudi ditentukan oleh massa dan kecepatan mobil sebelum tabrakan ($\Delta p = m \\Delta v$ adalah konstan).\\n2. Berdasarkan teorema impuls: $\\bar{F} \\Delta t = \\Delta p \\implies \\bar{F} = \\frac{\\Delta p}{\\Delta t}$.\\n3. Airbag dan crumple zone memperpanjang waktu penghentian $\\Delta t$.\\n4. Akibatnya, gaya impulsif $\\bar{F}$ yang menimpa organ vital tubuh menjadi jauh lebih kecil sehingga menurunkan risiko cedera mematikan.",
      "pitfalls": "Airbag tidak mengurangi perubahan momentum total (pengemudi tetap harus melambat dari kelajuan semula sampai nol). Airbag mereduksi gaya puncak dengan memperpanjang selang waktu benturan."
    }
  }
];
