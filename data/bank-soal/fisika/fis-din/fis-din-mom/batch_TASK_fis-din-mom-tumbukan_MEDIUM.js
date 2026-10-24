module.exports = [
  {
    "id": "fis-din-mom-tumbukan-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-tumbukan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Benda $A$ bermassa $m_A = 2\\text{ kg}$ melaju dengan kelajuan $v_A = 8\\text{ m/s}$ ke kanan di atas lantai horizontal licin. Benda $A$ menumbuk benda $B$ bermassa $m_B = 1\\text{ kg}$ yang bergerak searah di depannya dengan kelajuan $v_B = 2\\text{ m/s}$. Jika koefisien restitusi antara kedua benda adalah $e = 0,5$, kelajuan benda $A$ ($v_A'$) dan benda $B$ ($v_B'$) sesaat setelah tumbukan berturut-turut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$v_A' = 5\\text{ m/s}$ dan $v_B' = 8\\text{ m/s}$",
      "$v_A' = 4\\text{ m/s}$ dan $v_B' = 10\\text{ m/s}$",
      "$v_A' = 6\\text{ m/s}$ dan $v_B' = 6\\text{ m/s}$",
      "$v_A' = 3\\text{ m/s}$ dan $v_B' = 12\\text{ m/s}$",
      "$v_A' = 2\\text{ m/s}$ dan $v_B' = 8\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Selesaikan sistem persamaan yang melibatkan dua hukum: (1) Hukum Kekekalan Momentum Linier: $m_A v_A + m_B v_B = m_A v_A' + m_B v_B'$, dan (2) Persamaan Koefisien Restitusi: $e = -\\frac{v_B' - v_A'}{v_B - v_A}$.",
      "steps": "1. Susun persamaan kekekalan momentum:\\n$$m_A v_A + m_B v_B = m_A v_A' + m_B v_B'$$\\n$$(2)(8) + (1)(2) = 2 v_A' + v_B' \\implies 18 = 2 v_A' + v_B' \\quad \\text{...(Pers. 1)}$$\\n2. Susun persamaan koefisien restitusi ($e = 0,5$):\\n$$0,5 = -\\frac{v_B' - v_A'}{2 - 8} = -\\frac{v_B' - v_A'}{-6} = \\frac{v_B' - v_A'}{6}$$\\n$$v_B' - v_A' = 3 \\implies v_B' = v_A' + 3 \\quad \\text{...(Pers. 2)}$$\\n3. Substitusi Pers. 2 ke Pers. 1:\\n$$18 = 2 v_A' + (v_A' + 3)$$\\n$$3 v_A' = 15 \\implies v_A' = 5\\text{ m/s}$$\\n4. Hitung $v_B'$:\\n$$v_B' = 5 + 3 = 8\\text{ m/s}$$\\nJadi, $v_A' = 5\\text{ m/s}$ dan $v_B' = 8\\text{ m/s}$.",
      "pitfalls": "Kerap salah tanda minus pada rumus koefisien restitusi sehingga menghasilkan $v_B' - v_A' = -3$ yang mengakibatkan nilai kecepatan terbalik."
    }
  },
  {
    "id": "fis-din-mom-tumbukan-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-tumbukan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah peluru bermassa $m = 10\\text{ gram}$ ditembakkan mendatar ke sebuah balok kayu bermassa $M = 1,99\\text{ kg}$ yang digantung pada seutas tali ringan (ayunan balistik). Peluru bersarang di dalam balok dan keduanya berayun bersama hingga mencapai ketinggian vertikal maksimum $h = 20\\text{ cm}$ di atas posisi setimbang. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan awal peluru sesaat sebelum menembus balok adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$100\\text{ m/s}$",
      "$200\\text{ m/s}$",
      "$300\\text{ m/s}$",
      "$400\\text{ m/s}$",
      "$500\\text{ m/s}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Persoalan ayunan balistik dipecahkan dalam dua tahap: (1) Ayunan naik memenuhi Kekekalan Energi Mekanik: $V = \\sqrt{2 g h}$, dan (2) Tumbukan peluru dan balok memenuhi Kekekalan Momentum Linier: $m v_0 = (m + M) V$.",
      "steps": "1. Hitung kelajuan bersama balok dan peluru sesaat setelah tumbukan:\\n$$h = 20\\text{ cm} = 0,2\\text{ m}$$\\n$$V = \\sqrt{2 g h} = \\sqrt{2 \\times 10 \\times 0,2} = \\sqrt{4} = 2\\text{ m/s}$$\\n2. Terapkan hukum kekekalan momentum saat peluru menancap:\\n$$m = 10\\text{ gram} = 0,01\\text{ kg}, \\quad M + m = 1,99 + 0,01 = 2,00\\text{ kg}$$\\n$$m v_0 = (m + M) V$$\\n$$0,01 v_0 = (2,00)(2) = 4$$\\n$$v_0 = \\frac{4}{0,01} = 400\\text{ m/s}$$\\nJadi, kelajuan awal peluru adalah $400\\text{ m/s}$.",
      "pitfalls": "Kekeliruan fatal adalah menyamakan energi kinetik peluru langsung dengan energi potensial akhir balok ($\\frac{1}{2} m v_0^2 = (m+M)gh$). Tumbukan tidak lenting sama sekali mengalami kehilangan energi kinetik yang sangat masif menjadi kalor dan deformasi kayu."
    }
  },
  {
    "id": "fis-din-mom-tumbukan-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-tumbukan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah balok bermassa $m_1 = 3\\text{ kg}$ meluncur dengan kelajuan $v_1 = 8\\text{ m/s}$ di atas lantai datar licin menumbuk balok kedua bermassa $m_2 = 5\\text{ kg}$ yang awalnya diam ($v_2 = 0$). Kedua balok menyatu setelah tumbukan. Jumlah energi mekanik yang hilang (terdisipasi menjadi energi termal dan deformasi) akibat tumbukan tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$24\\text{ J}$",
      "$36\\text{ J}$",
      "$48\\text{ J}$",
      "$60\\text{ J}$",
      "$72\\text{ J}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Energi yang hilang adalah selisih energi kinetik sebelum dan sesudah tumbukan: $\\Delta E_k = E_{k,\\text{awal}} - E_{k,\\text{akhir}}$. Kecepatan akhir gabungan dicari melalui Hukum Kekekalan Momentum Linier.",
      "steps": "1. Hitung energi kinetik awal sistem:\\n$$E_{k,\\text{awal}} = \\frac{1}{2} m_1 v_1^2 = \\frac{1}{2} (3)(8^2) = \\frac{1}{2} \\times 3 \\times 64 = 96\\text{ J}$$\\n2. Cari kelajuan gabungan akhir dari kekekalan momentum:\\n$$v' = \\frac{m_1 v_1}{m_1 + m_2} = \\frac{(3)(8)}{3 + 5} = \\frac{24}{8} = 3\\text{ m/s}$$\\n3. Hitung energi kinetik akhir gabungan:\\n$$E_{k,\\text{akhir}} = \\frac{1}{2} (m_1 + m_2) (v')^2 = \\frac{1}{2} (8)(3^2) = 4 \\times 9 = 36\\text{ J}$$\\n4. Hitung energi kinetik yang terdisipasi:\\n$$\\Delta E_k = E_{k,\\text{awal}} - E_{k,\\text{akhir}} = 96 - 36 = 60\\text{ J}$$\\nJadi, energi mekanik yang hilang adalah $60\\text{ J}$.",
      "pitfalls": "Jangan keliru menganggap energi kinetik akhir adalah energi yang hilang. Nilai $36\\text{ J}$ adalah sisa energi gerak, sedangkan energi yang hilang adalah selisihnya ($60\\text{ J}$)."
    }
  },
  {
    "id": "fis-din-mom-tumbukan-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-tumbukan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah bola dijatuhkan bebas dari ketinggian $h_0 = 16\\text{ m}$ di atas permukaan lantai beton. Koefisien restitusi antara bola dan lantai adalah $e = 0,50$. Ketinggian maksimum yang dicapai bola pada pantulan kedua ($h_2$) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0,5\\text{ m}$",
      "$1,0\\text{ m}$",
      "$2,0\\text{ m}$",
      "$4,0\\text{ m}$",
      "$8,0\\text{ m}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Tinggi pantulan ke-$n$ pada tumbukan bola berulang dengan lantai mengikuti deret geometri: $h_n = e^{2n} h_0$, di mana rasio ketinggian setiap pantulan berurutan adalah $\\frac{h_k}{h_{k-1}} = e^2$.",
      "steps": "1. Hitung tinggi pantulan pertama ($n = 1$):\\n$$h_1 = e^2 h_0 = (0,50)^2 \\times 16 = 0,25 \\times 16 = 4\\text{ m}$$\\n2. Hitung tinggi pantulan kedua ($n = 2$):\\n$$h_2 = e^2 h_1 = (0,50)^2 \\times 4 = 0,25 \\times 4 = 1,0\\text{ m}$$\\n(Atau gunakan rumus langsung: $h_2 = e^4 h_0 = (0,5)^4 \\times 16 = \\frac{1}{16} \\times 16 = 1,0\\text{ m}$).\\nJadi, ketinggian pantulan kedua adalah $1,0\\text{ m}$.",
      "pitfalls": "Kerap keliru mengalikan dengan $e$ saja ($h_1 = 0,5 \\times 16 = 8\\text{ m}$ dan $h_2 = 4\\text{ m}$). Rasio ketinggian sebanding dengan kuadrat kelajuan, sehingga faktor pengalinya adalah $e^2$."
    }
  },
  {
    "id": "fis-din-mom-tumbukan-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-tumbukan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Dua buah keping hoki identik bermassa sama ($m_1 = m_2 = m$) berada di atas meja es licin tanpa gesekan. Keping 1 meluncur dengan kelajuan $v_0 = 10\\text{ m/s}$ menumbuk secara elastis sempurna ($e = 1$) keping 2 yang awalnya diam. Setelah tumbukan, keping 1 terhambur dengan sudut simpangan $\\theta_1 = 30^\\circ$ terhadap garis arah gerak semula. Kelajuan keping 1 ($v_1'$) dan sudut hamburan keping 2 ($\\theta_2$) sesaat setelah tumbukan adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$v_1' = 5\\sqrt{3}\\text{ m/s}$ dan keping 2 terhambur dengan sudut $\\theta_2 = 60^\\circ$",
      "$v_1' = 5\\text{ m/s}$ dan keping 2 terhambur dengan sudut $\\theta_2 = 60^\\circ$",
      "$v_1' = 5\\sqrt{3}\\text{ m/s}$ dan keping 2 terhambur dengan sudut $\\theta_2 = 30^\\circ$",
      "$v_1' = 10\\sqrt{3}\\text{ m/s}$ dan keping 2 terhambur dengan sudut $\\theta_2 = 45^\\circ$",
      "$v_1' = 5\\sqrt{2}\\text{ m/s}$ dan keping 2 terhambur dengan sudut $\\theta_2 = 45^\\circ$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada tumbukan lenting sempurna dua dimensi antara dua partikel bermassa identik di mana salah satu partikel awalnya diam, kedua vektor kecepatan akhir selalu saling tegak lurus: $\\theta_1 + \\theta_2 = 90^\\circ$. Hubungan komponen trigonometrinya adalah $v_1' = v_0 \\cos\\theta_1$ dan $v_2' = v_0 \\sin\\theta_1$.",
      "steps": "1. Sifat ortogonalitas sudut hamburan tumbukan elastis massa sama ($m_1 = m_2$):\\n$$\\theta_1 + \\theta_2 = 90^\\circ \\implies \\theta_2 = 90^\\circ - 30^\\circ = 60^\\circ$$\\n2. Tentukan kelajuan keping 1:\\n$$v_1' = v_0 \\cos 30^\\circ = 10 \\times \\frac{1}{2}\\sqrt{3} = 5\\sqrt{3}\\text{ m/s}$$\\n(Dapat diverifikasi bahwa $v_2' = v_0 \\sin 30^\\circ = 5\\text{ m/s}$, dan $(v_1')^2 + (v_2')^2 = 75 + 25 = 100 = v_0^2$, sehingga energi kinetik kekal).\\nJadi, $v_1' = 5\\sqrt{3}\\text{ m/s}$ dan $\\theta_2 = 60^\\circ$.",
      "pitfalls": "Kerap tidak menyadari teorema ortogonalitas bahwa pada massa identik dengan target diam, lintasan hamburan kedua partikel selalu membentuk sudut siku-siku ($90^\\circ$)."
    }
  }
];
