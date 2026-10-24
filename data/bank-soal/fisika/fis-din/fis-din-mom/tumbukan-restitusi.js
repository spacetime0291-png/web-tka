/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Momentum dan Impuls (fis-din-mom)
 * Sub-Bab: Tumbukan & Koefisien Restitusi (fis-din-mom-tumbukan)
 * Slug: tumbukan-restitusi
 * Indikator: Tumbukan lenting sempurna (e=1), lenting sebagian (0 < e < 1), dan tidak lenting sama sekali (e=0).
 * 
 * Total Butir Soal: 12 (Mudah: 5, Sedang: 7, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-mom-tumbukan";
  const subTopicSlug = "tumbukan-restitusi";
  const questions = [
  {
    "id": "fis-din-mom-tumbukan-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-tumbukan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Dalam klasifikasi jenis-jenis tumbukan berdasarkan elastisitas mekanik, nilai koefisien restitusi ($e$) untuk peristiwa tumbukan tidak lenting sama sekali (completely inelastic collision) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$e = 0$",
      "$0 < e < 1$",
      "$e = 1$",
      "$e > 1$",
      "$e = -1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Koefisien restitusi didefinisikan sebagai rasio negatif selisih kecepatan relatif setelah tumbukan terhadap sebelum tumbukan: $e = -\\frac{v_2' - v_1'}{v_2 - v_1}$. Pada tumbukan tidak lenting sama sekali, kedua benda menempel dan bergerak bersama dengan kecepatan yang sama ($v_1' = v_2'$), sehingga selisih kecepatan akhirnya nol dan $e = 0$.",
      "steps": "1. Karakteristik tumbukan tidak lenting sama sekali: kedua benda menyatu setelah tumbukan.\\n2. Kecepatan akhir kedua benda identik: $v_1' = v_2' = v'$.\\n3. Hitung nilai $e$:\\n$$e = -\\frac{v_2' - v_1'}{v_2 - v_1} = -\\frac{v' - v'}{v_2 - v_1} = 0$$\\nJadi, nilai koefisien restitusi untuk tumbukan tidak lenting sama sekali adalah $e = 0$.",
      "pitfalls": "Jangan tertukar dengan tumbukan lenting sempurna ($e = 1$) atau tumbukan lenting sebagian ($0 < e < 1$)."
    },
    "subTopicSlug": "tumbukan-restitusi",
    "bab": "Dinamika",
    "subBab": "Tumbukan & Koefisien Restitusi",
    "subTopic": "Tumbukan & Koefisien Restitusi",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-mom-tumbukan-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-tumbukan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Dua buah balok $A$ ($m_A = 2\\text{ kg}$) dan $B$ ($m_B = 3\\text{ kg}$) berada di atas lantai horizontal licin. Balok $A$ meluncur ke arah kanan dengan kelajuan $v_A = 10\\text{ m/s}$ menumbuk balok $B$ yang sedang diam ($v_B = 0$). Jika terjadi tumbukan tidak lenting sama sekali (kedua balok menempel dan meluncur bersama-sama), kelajuan gabungan kedua balok setelah tumbukan adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ m/s}$",
      "$4\\text{ m/s}$",
      "$5\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$10\\text{ m/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada tumbukan tidak lenting sama sekali, berlaku hukum kekekalan momentum linier dengan massa gabungan setelah tumbukan: $m_A v_A + m_B v_B = (m_A + m_B) v'$.",
      "steps": "1. Identifikasi data yang diketahui:\\n$m_A = 2\\text{ kg}$, $v_A = 10\\text{ m/s}$, $m_B = 3\\text{ kg}$, $v_B = 0$.\\n2. Terapkan hukum kekekalan momentum:\\n$$m_A v_A + m_B v_B = (m_A + m_B) v'$$\\n$$(2)(10) + (3)(0) = (2 + 3) v'$$\\n$$20 = 5 v' \\implies v' = \\frac{20}{5} = 4\\text{ m/s}$$\\nJadi, kelajuan bersama kedua balok adalah $4\\text{ m/s}$.",
      "pitfalls": "Kekeliruan terjadi jika membagi momentum awal dengan hanya salah satu massa balok ($20 / 2 = 10\\text{ m/s}$ atau $20 / 3 = 6,7\\text{ m/s}$). Massa setelah tumbukan adalah massa total gabungan ($5\\text{ kg}$)."
    },
    "subTopicSlug": "tumbukan-restitusi",
    "bab": "Dinamika",
    "subBab": "Tumbukan & Koefisien Restitusi",
    "subTopic": "Tumbukan & Koefisien Restitusi",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-mom-tumbukan-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-tumbukan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah bola dijatuhkan bebas tanpa kecepatan awal dari ketinggian $h_1 = 100\\text{ cm}$ di atas lantai mendatar keras. Setelah memantul di lantai, bola mencapai tinggi pantulan maksimum pertama sebesar $h_2 = 64\\text{ cm}$. Besar koefisien restitusi antara bola dan lantai tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0,36$",
      "$0,64$",
      "$0,80$",
      "$0,89$",
      "$1,00$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada bola yang dijatuhkan dan memantul di permukaan lantai masif yang diam, koefisien restitusi dihubungkan secara langsung dengan rasio akar ketinggian: $e = \\sqrt{\\frac{h_2}{h_1}}$.",
      "steps": "1. Tuliskan rumus koefisien restitusi tinggi pantulan:\\n$$e = \\sqrt{\\frac{h_2}{h_1}}$$\\n2. Masukkan nilai ketinggian yang diberikan ($h_1 = 100\\text{ cm}$, $h_2 = 64\\text{ cm}$):\\n$$e = \\sqrt{\\frac{64}{100}} = \\frac{8}{10} = 0,80$$\\nJadi, koefisien restitusi tumbukan adalah $0,80$.",
      "pitfalls": "Kerap lupa menarik akar kuadrat dari rasio ketinggian sehingga langsung memilih $64/100 = 0,64$. Rasio $h_2/h_1$ adalah rasio energi kinetik, sedangkan koefisien restitusi merupakan rasio kelajuan (akar kuadrat dari rasio ketinggian)."
    },
    "subTopicSlug": "tumbukan-restitusi",
    "bab": "Dinamika",
    "subBab": "Tumbukan & Koefisien Restitusi",
    "subTopic": "Tumbukan & Koefisien Restitusi",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-mom-tumbukan-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-tumbukan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Manakah pernyataan yang BENAR mengenai hukum-hukum kekekalan yang berlaku pada peristiwa tumbukan lenting sempurna (elastic collision) satu dimensi?",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Hanya momentum linier total yang kekal, sedangkan energi kinetik total berkurang menjadi panas.",
      "Hanya energi kinetik total yang kekal, sedangkan momentum linier total berubah.",
      "Baik momentum linier total maupun energi kinetik total sistem selalu kekal, dengan koefisien restitusi $e = 1$.",
      "Kedua benda selalu bersatu setelah tumbukan dan bergerak bersama dengan laju tetap.",
      "Koefisien restitusi bernilai $0 < e < 1$ karena terjadi deformasi permanen pada permukaan benda."
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Tumbukan lenting sempurna ditandai oleh dua prinsip fundamental kekekalan: (1) Kekekalan momentum linier: $\\sum p_{\\text{awal}} = \\sum p_{\\text{akhir}}$, dan (2) Kekekalan energi kinetik: $\\sum E_{k,\\text{awal}} = \\sum E_{k,\\text{akhir}}$. Karakteristik elastisitasnya dinyatakan oleh $e = 1$.",
      "steps": "1. Pada tumbukan lenting sempurna tidak ada energi mekanik yang terdisipasi menjadi energi kalor, deformasi plastis, atau bunyi.\\n2. Oleh karena itu, energi kinetik total awal tepat sama dengan energi kinetik total akhir.\\n3. Karena sistem terisolasi, momentum total juga selalu kekal.\\nSehingga pernyataan yang tepat adalah kedua besaran tersebut kekal dan $e = 1$.",
      "pitfalls": "Miskonsepsi umum adalah mengira semua tumbukan mempertahankan energi kinetik. Hanya tumbukan lenting sempurna ($e = 1$) yang mempertahankan energi kinetik total."
    },
    "subTopicSlug": "tumbukan-restitusi",
    "bab": "Dinamika",
    "subBab": "Tumbukan & Koefisien Restitusi",
    "subTopic": "Tumbukan & Koefisien Restitusi",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-mom-tumbukan-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-tumbukan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Dua bola logam kecil dengan massa yang persis sama ($m_1 = m_2 = m$) berada di atas meja horizontal licin. Bola 1 bergerak dengan kelajuan $v$ menumbuk sentral lurus bola 2 yang sedang diam. Jika tumbukan bersifat lenting sempurna ($e = 1$), keadaan kedua bola sesaat setelah tumbukan adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Kedua bola menempel dan bergerak bersama dengan kelajuan $0,5v$",
      "Bola 1 memantul kembali dengan kelajuan $v$ dan bola 2 tetap diam",
      "Kedua bola memantul saling menjauh dengan kelajuan masing-masing $0,5v$",
      "Bola 1 berhenti diam ($v_1' = 0$) dan bola 2 bergerak maju dengan kelajuan $v$ ($v_2' = v$)",
      "Bola 1 dan bola 2 sama-sama berhenti diam di tempat tumbukan"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Pada tumbukan lenting sempurna satu dimensi antara dua benda yang bermassa identik ($m_1 = m_2$), terjadi pertukaran kecepatan secara sempurna di antara kedua benda: $v_1' = v_2$ dan $v_2' = v_1$.",
      "steps": "1. Kondisi awal: $v_1 = v$ dan $v_2 = 0$.\\n2. Rumus kecepatan setelah tumbukan lenting sempurna untuk massa sama ($m_1 = m_2$):\\n$$v_1' = \\frac{m_1 - m_2}{m_1 + m_2} v_1 + \\frac{2m_2}{m_1 + m_2} v_2 = 0 + 0 = 0$$\\n$$v_2' = \\frac{2m_1}{m_1 + m_2} v_1 + \\frac{m_2 - m_1}{m_1 + m_2} v_2 = \\frac{2m}{2m} v + 0 = v$$\\n3. Kesimpulan: Bola 1 mentransfer seluruh momentum dan energi kinetiknya ke bola 2 sehingga bola 1 berhenti diam dan bola 2 meluncur dengan laju $v$.",
      "pitfalls": "Kerap tertukar dengan tumbukan tidak lenting sama sekali ($v' = 0,5v$). Pada lenting sempurna dengan massa sama, energi tidak hilang melainkan dipindahkan 100% ke benda kedua."
    },
    "subTopicSlug": "tumbukan-restitusi",
    "bab": "Dinamika",
    "subBab": "Tumbukan & Koefisien Restitusi",
    "subTopic": "Tumbukan & Koefisien Restitusi",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
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
    },
    "subTopicSlug": "tumbukan-restitusi",
    "bab": "Dinamika",
    "subBab": "Tumbukan & Koefisien Restitusi",
    "subTopic": "Tumbukan & Koefisien Restitusi",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
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
    },
    "subTopicSlug": "tumbukan-restitusi",
    "bab": "Dinamika",
    "subBab": "Tumbukan & Koefisien Restitusi",
    "subTopic": "Tumbukan & Koefisien Restitusi",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
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
    },
    "subTopicSlug": "tumbukan-restitusi",
    "bab": "Dinamika",
    "subBab": "Tumbukan & Koefisien Restitusi",
    "subTopic": "Tumbukan & Koefisien Restitusi",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
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
    },
    "subTopicSlug": "tumbukan-restitusi",
    "bab": "Dinamika",
    "subBab": "Tumbukan & Koefisien Restitusi",
    "subTopic": "Tumbukan & Koefisien Restitusi",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
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
    },
    "subTopicSlug": "tumbukan-restitusi",
    "bab": "Dinamika",
    "subBab": "Tumbukan & Koefisien Restitusi",
    "subTopic": "Tumbukan & Koefisien Restitusi",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "sedang-fis-09",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-mom-tumbukan",
    "category": "Momentum - Tumbukan Lenting Sempurna Dua Massa Sama",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah bola biliar $A$ bermassa $m_A = 0{,}2\\text{ kg}$ meluncur dengan kecepatan $v_A = 4\\text{ m/s}$ ke arah kanan dan menumbuk bola biliar $B$ bermassa sama $m_B = 0{,}2\\text{ kg}$ yang sedang diam di atas meja licin ($v_B = 0$). Jika tumbukan berlangsung lenting sempurna ($e = 1$), kecepatan bola $A$ ($v_A'$) dan bola $B$ ($v_B'$) sesaat setelah tumbukan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$v_A' = 0\\text{ m/s}$ dan $v_B' = 4\\text{ m/s}$ ke kanan",
      "$v_A' = 2\\text{ m/s}$ dan $v_B' = 2\\text{ m/s}$ ke kanan",
      "$v_A' = -2\\text{ m/s}$ dan $v_B' = 2\\text{ m/s}$ ke kanan",
      "$v_A' = -4\\text{ m/s}$ dan $v_B' = 0\\text{ m/s}$",
      "$v_A' = 1\\text{ m/s}$ dan $v_B' = 3\\text{ m/s}$ ke kanan"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Karakteristik Tumbukan Lenting Sempurna Dua Massa Identik ($m_1 = m_2, e = 1$):</strong><br>\n          Kedua benda akan saling bertukar kecepatan secara utuh:<br>\n          $$v_1' = v_2 \\quad \\text{dan} \\quad v_2' = v_1$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hukum Kekekalan Momentum:\n            $$m(4) + m(0) = m v_A' + m v_B' \\implies v_A' + v_B' = 4$$\n          </li>\n          <li>Koefisien Restitusi ($e = 1$):\n            $$e = -\\frac{v_A' - v_B'}{v_A - v_B} = 1 \\implies -(v_A' - v_B') = 4 - 0 \\implies -v_A' + v_B' = 4$$\n          </li>\n          <li>Jumlahkan kedua persamaan:\n            $$2 v_B' = 8 \\implies v_B' = 4\\text{ m/s}$$\n            $$v_A' = 4 - 4 = 0\\text{ m/s}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Opsi $v_A' = 2\\text{ m/s}$ dan $v_B' = 2\\text{ m/s}$ terjadi pada kasus tumbukan tidak lenting sama sekali ($e = 0$), bukan lenting sempurna.\n        </div>\n      "
    },
    "bab": "Dinamika",
    "subBab": "Tumbukan & Koefisien Restitusi",
    "subTopic": "Tumbukan & Koefisien Restitusi",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-mom",
    "subTopicSlug": "tumbukan-restitusi"
  },
  {
    "id": "sup-fis-din-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-mom-tumbukan",
    "category": "Tumbukan Tidak Lenting Sama Sekali",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebutir peluru bermassa $20\\text{ gram}$ meluncur horizontal dengan kecepatan $300\\text{ m/s}$ menumbuk balok kayu bermassa $980\\text{ gram}$ yang diam di atas lantai licin. Peluru bersarang di dalam balok dan keduanya meluncur bersama. Kecepatan balok beserta peluru setelah tumbukan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6\\text{ m/s}$",
      "$3\\text{ m/s}$",
      "$9\\text{ m/s}$",
      "$12\\text{ m/s}$",
      "$15\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Kekekalan Momentum Linear:</strong><br>Pada tumbukan tidak lenting sama sekali ($e = 0$), kedua benda bergabung menjadi satu massa dengan kecepatan akhir bersama ($v'$): $m_1 v_1 + m_2 v_2 = (m_1 + m_2) v'$.</div>",
      "steps": "<ol><li>Konversi satuan ke kg: $m_p = 0{,}02\\text{ kg}$, $m_b = 0{,}98\\text{ kg}$.</li><li>Momentum sebelum: $p = 0{,}02 \\times 300 + 0 = 6\\text{ kg}\\cdot\\text{m/s}$.</li><li>Massa gabungan: $M = 0{,}02 + 0{,}98 = 1{,}0\\text{ kg}$.</li><li>Kecepatan bersama: $v' = \\frac{p}{M} = \\frac{6}{1{,}0} = 6\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Lupa mengonversi satuan gram ke kilogram atau salah menjumlahkan massa total peluru dan balok.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Tumbukan & Koefisien Restitusi",
    "subTopic": "Tumbukan & Koefisien Restitusi",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-mom",
    "subTopicSlug": "tumbukan-restitusi"
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
