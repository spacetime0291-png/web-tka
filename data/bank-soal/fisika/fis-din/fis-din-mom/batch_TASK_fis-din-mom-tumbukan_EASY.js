module.exports = [
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
