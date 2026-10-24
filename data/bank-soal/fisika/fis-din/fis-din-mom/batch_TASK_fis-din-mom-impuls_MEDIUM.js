module.exports = [
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
