module.exports = [
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
