/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Momentum dan Impuls (fis-din-mom)
 * Sub-Bab: Impuls & Teorema Impuls-Momentum (fis-din-mom-impuls)
 * Slug: impuls-teorema
 * Indikator: Gaya impulsif rata-rata, luas grafik gaya terhadap waktu (F-t), dan teorema I = Delta p.
 * 
 * Total Butir Soal: 12 (Mudah: 7, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-mom-impuls";
  const subTopicSlug = "impuls-teorema";
  const questions = [
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
    },
    "subTopicSlug": "impuls-teorema",
    "bab": "Dinamika",
    "subBab": "Impuls & Teorema Impuls-Momentum",
    "subTopic": "Impuls & Teorema Impuls-Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Impuls ($I$) didefinisikan sebagai hasil kali antara gaya konstan $F$ dan selang waktu kerjanya $\\Delta t$: $I = F \\Delta t$. Satuan SI untuk impuls adalah newton-sekon ($\\text{N}\\cdot\\text{s}$)."
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
    },
    "subTopicSlug": "impuls-teorema",
    "bab": "Dinamika",
    "subBab": "Impuls & Teorema Impuls-Momentum",
    "subTopic": "Impuls & Teorema Impuls-Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Teorema impuls-momentum menyatakan bahwa impuls yang bekerja pada suatu benda sama dengan perubahan momentum benda tersebut: $I = \\bar{F} \\Delta t = \\Delta p = m(v_t - v_0)$."
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
    },
    "subTopicSlug": "impuls-teorema",
    "bab": "Dinamika",
    "subBab": "Impuls & Teorema Impuls-Momentum",
    "subTopic": "Impuls & Teorema Impuls-Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Secara integral matematis, impuls didefinisikan sebagai integral gaya terhadap waktu: $I = \\int_{t_1}^{t_2} F(t) dt$. Nilai integral tentu ini tepat sama dengan luas daerah di bawah kurva $F - t$. **Tips:** Kerap tertukar dengan kurva grafik $F - s$ (gaya terhadap posisi)."
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
    },
    "subTopicSlug": "impuls-teorema",
    "bab": "Dinamika",
    "subBab": "Impuls & Teorema Impuls-Momentum",
    "subTopic": "Impuls & Teorema Impuls-Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Impuls sama dengan perubahan momentum: $I = \\Delta p = m(v_2 - v_1)$. Ingat bahwa kecepatan merupakan besaran vektor sehingga arah bolak-balik harus dihitung dengan tanda positif dan negatif."
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
      "concept": "Hubungan impuls dan gaya rata-rata: $\\bar{F} = \\frac{\\Delta p}{\\Delta t}$. Ketika mobil berhenti dari kelajuan tertentu, perubahan momentum penumpang ($Delta p$) bernilai tetap. Dengan memperpanjang durasi tumbukan ($Delta t$), gaya rata-rata impulsif ($\bar{F}$) yang dialami penumpang dapat diperkecil secara drastis.",
      "steps": "1. Perubahan momentum pengemudi ditentukan oleh massa dan kecepatan mobil sebelum tabrakan ($Delta p = m \\Delta v$ adalah konstan).\\n2. Berdasarkan teorema impuls: $\\bar{F} \\Delta t = \\Delta p \\implies \\bar{F} = \\frac{\\Delta p}{\\Delta t}$.\\n3. Airbag dan crumple zone memperpanjang waktu penghentian $\\Delta t$.\\n4. Akibatnya, gaya impulsif $\\bar{F}$ yang menimpa organ vital tubuh menjadi jauh lebih kecil sehingga menurunkan risiko cedera mematikan.",
      "pitfalls": "Airbag tidak mengurangi perubahan momentum total (pengemudi tetap harus melambat dari kelajuan semula sampai nol). Airbag mereduksi gaya puncak dengan memperpanjang selang waktu benturan."
    },
    "subTopicSlug": "impuls-teorema",
    "bab": "Dinamika",
    "subBab": "Impuls & Teorema Impuls-Momentum",
    "subTopic": "Impuls & Teorema Impuls-Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Hubungan impuls dan gaya rata-rata: $\\bar{F} = \\frac{\\Delta p}{\\Delta t}$. Ketika mobil berhenti dari kelajuan tertentu, perubahan momentum penumpang ($Delta p$) bernilai tetap. Dengan memperpanjang durasi tumbukan ($Delta t$), gaya rata-rata impulsif ($\bar{F}$) yang dialami penumpang dapat diperkecil secara drastis. **Tips:** Airbag tidak mengurangi perubahan momentum total (pengemudi tetap harus melambat dari kelajuan semula sampai nol)."
  },
  {
    "id": "fis-din-mom-impuls-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-impuls",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah benda bermassa $m = 2\\text{ kg}$ yang awalnya diam di atas lantai datar licin mengalami gaya horizontal yang berubah terhadap waktu sesuai kurva segitiga. Gaya mulai naik dari $F = 0$ pada $t = 0$ hingga mencapai nilai maksimum $F_{\\text{maks}} = 60\\text{ N}$ pada $t = 2\\text{ sekon}$, kemudian turun kembali secara linier hingga mencapai nol pada $t = 6\\text{ sekon}$. Kelajuan benda pada saat $t = 6\\text{ sekon}$ adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ m/s}$",
      "$45\\text{ m/s}$",
      "$60\\text{ m/s}$",
      "$90\\text{ m/s}$",
      "$180\\text{ m/s}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Impuls gaya sama dengan luas daerah di bawah grafik gaya terhadap waktu ($F - t$). Menurut teorema impuls-momentum, impuls total menghasilkan perubahan momentum linier benda: $I = \\text{Luas} = m(v_t - v_0)$.",
      "steps": "1. Hitung impuls dari luas kurva segitiga $F - t$:\\n$$\\text{Alas} = 6 - 0 = 6\\text{ s}, \\quad \\text{Tinggi} = 60\\text{ N}$$\\n$$I = \\frac{1}{2} \\times \\text{alas} \\times \\text{tinggi} = \\frac{1}{2} \\times 6 \\times 60 = 180\\text{ N}\\cdot\\text{s}$$\\n2. Terapkan teorema impuls-momentum untuk benda yang mula-mula diam ($v_0 = 0$):\\n$$I = m(v_t - 0)$$\\n$$180 = 2 v_t \\implies v_t = \\frac{180}{2} = 90\\text{ m/s}$$\\nJadi, kelajuan benda pada $t = 6\\text{ sekon}$ adalah $90\\text{ m/s}$.",
      "pitfalls": "Kekeliruan umum adalah lupa mengalikan $\\frac{1}{2}$ pada luas segitiga sehingga menganggap impuls bernilai $360\\text{ N}\\cdot\\text{s}$ dan menghasilkan kelajuan $180\\text{ m/s}$."
    },
    "subTopicSlug": "impuls-teorema",
    "bab": "Dinamika",
    "subBab": "Impuls & Teorema Impuls-Momentum",
    "subTopic": "Impuls & Teorema Impuls-Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Impuls gaya sama dengan luas daerah di bawah grafik gaya terhadap waktu ($F - t$). Menurut teorema impuls-momentum, impuls total menghasilkan perubahan momentum linier benda: $I = \\text{Luas} = m(v_t - v_0)$."
  },
  {
    "id": "fis-din-mom-impuls-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-impuls",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah bola tenis bermassa $m = 0,06\\text{ kg}$ bergerak mendatar ke kiri dengan laju $v_1 = 30\\text{ m/s}$. Setelah dipukul raket, bola bergerak vertikal ke atas dengan kelajuan $v_2 = 40\\text{ m/s}$. Jika waktu kontak bola dengan senar raket berlangsung selama $\\Delta t = 0,005\\text{ sekon}$, besar gaya rata-rata yang dikerjakan raket pada bola adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$120\\text{ N}$",
      "$240\\text{ N}$",
      "$480\\text{ N}$",
      "$600\\text{ N}$",
      "$840\\text{ N}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Perubahan kecepatan adalah besaran vektor dua dimensi ortogonal (tegak lurus): $|\\Delta \\vec{v}| = \\sqrt{v_x^2 + v_y^2}$. Gaya rata-rata impulsif dihitung melalui: $\\bar{F} = \\frac{m |\\Delta \\vec{v}|}{\\Delta t}$.",
      "steps": "1. Nyatakan vektor kecepatan awal dan akhir:\\n$$\\vec{v}_1 = -30\\hat{i}\\text{ m/s}, \\quad \\vec{v}_2 = +40\\hat{j}\\text{ m/s}$$\\n2. Hitung vektor perubahan kecepatan:\\n$$\\Delta \\vec{v} = \\vec{v}_2 - \\vec{v}_1 = 30\\hat{i} + 40\\hat{j}\\text{ m/s}$$\\n3. Hitung modulus besar perubahan kecepatan:\\n$$|\\Delta \\vec{v}| = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1.600} = \\sqrt{2.500} = 50\\text{ m/s}$$\\n4. Hitung besar gaya rata-rata impulsif:\\n$$\\bar{F} = \\frac{m |\\Delta \\vec{v}|}{\\Delta t} = \\frac{0,06 \\times 50}{0,005} = \\frac{3}{0,005} = 600\\text{ N}$$\\nJadi, gaya rata-rata yang dikerjakan raket adalah $600\\text{ N}$.",
      "pitfalls": "Kerap mengurangkan kelajuan secara skalar ($40 - 30 = 10\\text{ m/s}$) yang menghasilkan gaya $120\\text{ N}$, padahal arah datang dan pergi saling tegak lurus sehingga harus dihitung menggunakan kaidah Pythagoras vektor."
    },
    "subTopicSlug": "impuls-teorema",
    "bab": "Dinamika",
    "subBab": "Impuls & Teorema Impuls-Momentum",
    "subTopic": "Impuls & Teorema Impuls-Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Perubahan kecepatan adalah besaran vektor dua dimensi ortogonal (tegak lurus): $|\\Delta \\vec{v}| = \\sqrt{v_x^2 + v_y^2}$. Gaya rata-rata impulsif dihitung melalui: $\\bar{F} = \\frac{m |\\Delta \\vec{v}|}{\\Delta t}$."
  },
  {
    "id": "fis-din-mom-impuls-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-impuls",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah selang pemadam kebakaran menyemprotkan air secara mendatar ke dinding kokoh dengan debit massa konstan $\\frac{\\Delta m}{\\Delta t} = 20\\text{ kg/s}$ dan kelajuan semprotan $v = 15\\text{ m/s}$. Tepat setelah menabrak dinding, air jatuh ke bawah tanpa memantul kembali ke arah sumbernya. Besar gaya horizontal rata-rata yang dikerjakan aliran air pada dinding adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$75\\text{ N}$",
      "$150\\text{ N}$",
      "$300\\text{ N}$",
      "$450\\text{ N}$",
      "$600\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gaya pada aliran fluida kontinu yang momentumnya diserap dinding diturunkan dari Hukum II Newton bentuk massa laju alir: $F = \\frac{\\Delta p}{\\Delta t} = \\frac{\\Delta m}{\\Delta t} \\Delta v$.",
      "steps": "1. Identifikasi perubahan kecepatan horizontal air:\\nAir bergerak dari kelajuan $v = 15\\text{ m/s}$ menjadi diam secara horizontal ($v' = 0$), sehingga $\\Delta v = 15\\text{ m/s}$.\\n2. Terapkan rumus gaya aliran impulsif:\\n$$F = \\left(\\frac{\\Delta m}{\\Delta t}\\right) \\Delta v$$\\n3. Masukkan nilai yang diketahui:\\n$$F = 20\\text{ kg/s} \\times 15\\text{ m/s} = 300\\text{ N}$$\\nJadi, gaya horizontal yang dialami dinding adalah $300\\text{ N}$.",
      "pitfalls": "Jangan membagi dengan faktor 2 seolah-olah menghitung energi kinetik. Gaya kontak impulsif merupakan laju transfer momentum per satuan waktu ($p/t$)."
    },
    "subTopicSlug": "impuls-teorema",
    "bab": "Dinamika",
    "subBab": "Impuls & Teorema Impuls-Momentum",
    "subTopic": "Impuls & Teorema Impuls-Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Gaya pada aliran fluida kontinu yang momentumnya diserap dinding diturunkan dari Hukum II Newton bentuk massa laju alir: $F = \\frac{\\Delta p}{\\Delta t} = \\frac{\\Delta m}{\\Delta t} \\Delta v$. **Tips:** Jangan membagi dengan faktor 2 seolah-olah menghitung energi kinetik."
  },
  {
    "id": "fis-din-mom-impuls-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-impuls",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah bola bermassa $m = 0,2\\text{ kg}$ dijatuhkan bebas dari ketinggian $h_1 = 5\\text{ m}$ di atas lantai keras. Bola memantul kembali vertikal ke atas hingga mencapai ketinggian maksimum $h_2 = 3,2\\text{ m}$. Jika waktu sentuh antara bola dan lantai selama pemantulan adalah $\\Delta t = 0,02\\text{ sekon}$ dan $g = 10\\text{ m/s}^2$, besar gaya netto rata-rata yang bekerja pada bola selama kontak adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20\\text{ N}$",
      "$90\\text{ N}$",
      "$160\\text{ N}$",
      "$180\\text{ N}$",
      "$360\\text{ N}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Kecepatan sesaat sebelum dan sesudah tumbukan diperoleh dari prinsip kekekalan energi mekanik/GLBB jatuh bebas: $v_1 = \\sqrt{2 g h_1}$ dan $v_2 = \\sqrt{2 g h_2}$. Gaya netto rata-rata dihitung melalui perubahan momentum: $\\bar{F}_{\\text{net}} = \\frac{m \\Delta v}{\\Delta t}$.",
      "steps": "1. Hitung kelajuan sesaat sebelum membentur lantai (ke bawah, bertanda negatif):\\n$$v_1 = -\\sqrt{2 g h_1} = -\\sqrt{2(10)(5)} = -\\sqrt{100} = -10\\text{ m/s}$$\\n2. Hitung kelajuan sesaat setelah memantul (ke atas, bertanda positif):\\n$$v_2 = +\\sqrt{2 g h_2} = +\\sqrt{2(10)(3,2)} = +\\sqrt{64} = +8\\text{ m/s}$$\\n3. Hitung perubahan kecepatan:\\n$$\\Delta v = v_2 - v_1 = +8 - (-10) = 18\\text{ m/s}$$\\n4. Hitung gaya netto rata-rata:\\n$$\\bar{F}_{\\text{net}} = \\frac{m \\Delta v}{\\Delta t} = \\frac{0,2 \\times 18}{0,02} = \\frac{3,6}{0,02} = 180\\text{ N}$$\\nJadi, besar gaya netto rata-rata pada bola selama kontak adalah $180\\text{ N}$.",
      "pitfalls": "Kerap salah mengurangkan kelajuan ($10 - 8 = 2\\text{ m/s}$) yang menghasilkan $20\\text{ N}$. Karena bola berbalik arah dari ke bawah menjadi ke atas, vektor perubahannya adalah penjumlahan besar kedua kelajuan ($10 + 8 = 18\\text{ m/s}$)."
    },
    "subTopicSlug": "impuls-teorema",
    "bab": "Dinamika",
    "subBab": "Impuls & Teorema Impuls-Momentum",
    "subTopic": "Impuls & Teorema Impuls-Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Kecepatan sesaat sebelum dan sesudah tumbukan diperoleh dari prinsip kekekalan energi mekanik/GLBB jatuh bebas: $v_1 = \\sqrt{2 g h_1}$ dan $v_2 = \\sqrt{2 g h_2}$. Gaya netto rata-rata dihitung melalui perubahan momentum: $\\bar{F}_{\\text{net}} = \\frac{m \\Delta v}{\\Delta t}$."
  },
  {
    "id": "fis-din-mom-impuls-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-impuls",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah benda bermassa $m = 2\\text{ kg}$ awalnya diam di atas permukaan horizontal licin. Benda kemudian didorong oleh gaya satu dimensi yang berubah terhadap waktu sesuai persamaan $F(t) = 12t - 3t^2$ (dengan $F$ dalam newton dan $t$ dalam sekon) dari $t = 0$ hingga gaya tersebut kembali menjadi nol pada saat $t = 4\\text{ sekon}$. Kecepatan maksimum yang dicapai oleh benda tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$8\\text{ m/s}$",
      "$12\\text{ m/s}$",
      "$16\\text{ m/s}$",
      "$24\\text{ m/s}$",
      "$32\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Karena $F(t) \\ge 0$ untuk rentang $0 \\le t \\le 4$, arah gaya selalu searah dengan gerak benda sehingga benda mengalami percepatan positif sepanjang selang waktu tersebut. Kecepatan maksimum terjadi saat gaya berakhir ($t = 4\\text{ s}$). Impuls total diperoleh dari integral tentu: $I = \\int_0^4 F(t) dt$.",
      "steps": "1. Hitung impuls total dengan mengintegralkan fungsi gaya:\\n$$I = \\int_0^4 (12t - 3t^2) dt = \\left[ 6t^2 - t^3 \\right]_0^4$$\\n$$I = \\left(6(4^2) - 4^3\\right) - 0 = (6 \\times 16 - 64) = 96 - 64 = 32\\text{ N}\\cdot\\text{s}$$\\n2. Terapkan teorema impuls-momentum ($v_0 = 0$):\\n$$I = m(v_{\\text{maks}} - 0)$$\\n$$32 = 2 v_{\\text{maks}} \\implies v_{\\text{maks}} = \\frac{32}{2} = 16\\text{ m/s}$$\\nJadi, kecepatan maksimum yang dicapai benda adalah $16\\text{ m/s}$.",
      "pitfalls": "Kerap menyamakan waktu kecepatan maksimum dengan waktu saat gaya maksimum ($t = 2\\text{ s}$). Ingat bahwa selama gaya masih bernilai positif ($F > 0$), percepatan masih positif sehingga kecepatan benda justru masih terus bertambah."
    },
    "subTopicSlug": "impuls-teorema",
    "bab": "Dinamika",
    "subBab": "Impuls & Teorema Impuls-Momentum",
    "subTopic": "Impuls & Teorema Impuls-Momentum",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Karena $F(t) \\ge 0$ untuk rentang $0 \\le t \\le 4$, arah gaya selalu searah dengan gerak benda sehingga benda mengalami percepatan positif sepanjang selang waktu tersebut. Kecepatan maksimum terjadi saat gaya berakhir ($t = 4\\text{ s}$). Impuls total diperoleh dari integral tentu: $I = \\int_0^4 F(t) dt$."
  },
  {
    "id": "mudah-fis-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-mom-impuls",
    "category": "Momentum Linier",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah bola sepak bermassa $0{,}5\\text{ kg}$ ditendang sehingga bergerak dengan kecepatan $20\\text{ m/s}$. Besar momentum linier bola tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ kg}\\cdot\\text{m/s}$",
      "$10\\text{ kg}\\cdot\\text{m/s}$",
      "$15\\text{ kg}\\cdot\\text{m/s}$",
      "$20\\text{ kg}\\cdot\\text{m/s}$",
      "$40\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Definisi Momentum Linier:</strong><br>\n          $$p = m \\cdot v$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$p = (0{,}5\\text{ kg})(20\\text{ m/s}) = 10\\text{ kg}\\cdot\\text{m/s}$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Pastikan satuan massa dalam kilogram (kg) dan kecepatan dalam meter per detik (m/s).\n        </div>\n      "
    },
    "bab": "Dinamika",
    "subBab": "Impuls & Teorema Impuls-Momentum",
    "subTopic": "Impuls & Teorema Impuls-Momentum",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-mom",
    "subTopicSlug": "impuls-teorema",
    "hint": "Gunakan perumusan konsep fisis: $$p = m \\cdot v$$. **Tips:** Pastikan satuan massa dalam kilogram (kg) dan kecepatan dalam meter per detik (m/s)."
  },
  {
    "id": "sup-fis-din-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-mom-impuls",
    "category": "Teorema Impuls-Momentum",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah bola kasti bermassa $0{,}2\\text{ kg}$ dilempar mendatar ke arah kiri dengan kelajuan $10\\text{ m/s}$. Seorang pemukul memukul bola tersebut sehingga berbalik arah melaju ke kanan dengan kelajuan $15\\text{ m/s}$. Jika waktu kontak pemukul dan bola adalah $\\Delta t = 0{,}02\\text{ detik}$, besar gaya kontak rata-rata yang diberikan pemukul pada bola adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$250\\text{ N}$",
      "$50\\text{ N}$",
      "$100\\text{ N}$",
      "$150\\text{ N}$",
      "$200\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Teorema Impuls-Momentum (Vektor):</strong><br>Impuls gaya sama dengan perubahan momentum partikel: $\\vec{I} = \\vec{F} \\cdot \\Delta t = \\Delta \\vec{p} = m(\\vec{v}_2 - \\vec{v}_1)$. Perhatikan tanda positif dan negatif arah vektor kecepatan!</div>",
      "steps": "<ol><li>Tetapkan arah kanan sebagai positif ($+$) dan arah kiri sebagai negatif ($-$).</li><li>$v_1 = -10\\text{ m/s}$, $v_2 = +15\\text{ m/s}$.</li><li>Perubahan momentum: $\\Delta p = m(v_2 - v_1) = 0{,}2 \\cdot (15 - (-10)) = 0{,}2 \\cdot 25 = 5\\text{ N}\\cdot\\text{s}$.</li><li>Gaya rata-rata: $F = \\frac{\\Delta p}{\\Delta t} = \\frac{5}{0{,}02} = 250\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengurangkan kecepatan tanpa memperhatikan tanda arah: $15 - 10 = 5\\text{ m/s}$, sehingga menghasilkan $F = 50\\text{ N}$ yang salah fatal.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Impuls & Teorema Impuls-Momentum",
    "subTopic": "Impuls & Teorema Impuls-Momentum",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-mom",
    "subTopicSlug": "impuls-teorema",
    "hint": "Teorema Impuls-Momentum (Vektor): Impuls gaya sama dengan perubahan momentum partikel: $\\vec{I} = \\vec{F} \\cdot \\Delta t = \\Delta \\vec{p} = m(\\vec{v}_2 - \\vec{v}_1)$. Perhatikan tanda positif dan negatif arah vektor kecepatan!"
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
