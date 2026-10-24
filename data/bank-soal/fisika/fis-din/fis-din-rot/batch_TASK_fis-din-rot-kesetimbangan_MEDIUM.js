module.exports = [
  {
    "id": "fis-din-rot-kesetimbangan-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-kesetimbangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah tangga homogen dengan panjang $L$ dan berat $W = 100\\text{ N}$ bersandar pada dinding vertikal yang licin (tanpa gesekan) dan bertumpu pada lantai horizontal yang kasar. Sudut kemiringan tangga terhadap lantai adalah $\\theta = 53^\\circ$ (diketahui $\\sin 53^\\circ = 0,8$ dan $\\cos 53^\\circ = 0,6$). Jika tangga tersebut berada dalam kondisi tepat akan tergelincir, nilai koefisien gesekan statis antara lantai dan tangga ($\\mu_s$) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0,250$",
      "$0,375$",
      "$0,500$",
      "$0,625$",
      "$0,750$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Terapkan syarat kesetimbangan statis: (1) $\\sum F_y = 0 \\implies N_L = W$, (2) $\\sum F_x = 0 \\implies f_s = N_D$, dan (3) $\\sum \\tau = 0$ terhadap titik tumpu lantai. Nilai batas tepat akan tergelincir mensyaratkan $f_s = \\mu_s N_L = \\mu_s W$, yang menghasilkan rumus umum $\\mu_s = \\frac{1}{2 \\tan\\theta}$.",
      "steps": "1. Kesetimbangan gaya vertikal:\\n$$N_L = W = 100\\text{ N}$$\\n2. Kesetimbangan momen gaya terhadap kaki tangga di lantai:\\n$$\\sum \\tau = N_D (L \\sin 53^\\circ) - W \\left(\\frac{L}{2} \\cos 53^\\circ\\right) = 0$$\\n$$N_D \\sin 53^\\circ = \\frac{1}{2} W \\cos 53^\\circ \\implies N_D = \\frac{W \\cos 53^\\circ}{2 \\sin 53^\\circ}$$\\n3. Kesetimbangan gaya horizontal pada kondisi tepat akan tergelincir ($f_s = \\mu_s N_L$):\\n$$f_s = N_D \\implies \\mu_s W = \\frac{W \\cos 53^\\circ}{2 \\sin 53^\\circ}$$\\n$$\\mu_s = \\frac{\\cos 53^\\circ}{2 \\sin 53^\\circ} = \\frac{0,6}{2 \\times 0,8} = \\frac{0,6}{1,6} = \\frac{3}{8} = 0,375$$\\nJadi, koefisien gesekan statis antara lantai dan tangga adalah $0,375$.",
      "pitfalls": "Kerap lupa faktor $\\frac{1}{2}$ dari titik berat tangga homogen sehingga menghitung $\\mu_s = \\frac{1}{\\tan 53^\\circ} = 0,750$."
    }
  },
  {
    "id": "fis-din-rot-kesetimbangan-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-kesetimbangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah batang homogen $AB$ bermassa $M = 10\\text{ kg}$ dan panjang $L = 2\\text{ m}$ dipasang engsel pada dinding vertikal di titik $A$. Batang dipertahankan pada posisi horizontal oleh seutas kawat ringan yang menghubungkan ujung $B$ ke dinding di atas titik $A$, membentuk sudut elevasi $\\theta = 30^\\circ$ terhadap batang. Sebuah beban bermassa $m = 20\\text{ kg}$ digantungkan tepat di ujung $B$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar tegangan kawat ($T$) penahan batang tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$250\\text{ N}$",
      "$300\\text{ N}$",
      "$400\\text{ N}$",
      "$500\\text{ N}$",
      "$600\\text{ N}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Gunakan titik engsel $A$ sebagai poros putar agar gaya reaksi engsel tidak masuk ke dalam perhitungan torsi (lengannya nol). Terapkan syarat kesetimbangan rotasi: $\\sum \\tau_A = 0$.",
      "steps": "1. Identifikasi gaya-gaya pemutar terhadap engsel $A$:\\n- Berat batang: $W_b = M g = 10 \\times 10 = 100\\text{ N}$, bekerja di titik tengah ($d_b = 1\\text{ m}$ dari $A$) memutar searah jarum jam (CW).\\n- Berat beban gantung: $W_m = m g = 20 \\times 10 = 200\\text{ N}$, bekerja di ujung $B$ ($d_m = 2\\text{ m}$ dari $A$) memutar CW.\\n- Komponen tegangan kawat tegak lurus batang: $T \\sin 30^\\circ$ di ujung $B$ ($L = 2\\text{ m}$) memutar berlawanan jarum jam (CCW).\\n2. Terapkan kesetimbangan torsi terhadap $A$:\\n$$\\sum \\tau_A = 0 \\implies (T \\sin 30^\\circ) L = W_b \\left(\\frac{L}{2}\\right) + W_m L$$\\n$$(T \\times 0,5)(2) = (100)(1) + (200)(2)$$\\n$$1,0 T = 100 + 400 = 500\\text{ N}$$\\nJadi, besar tegangan kawat adalah $500\\text{ N}$.",
      "pitfalls": "Kerap lupa memperhitungkan berat batang sendiri ($W_b = 100\\text{ N}$), atau salah mengalokasikan letak titik berat batang homogen yang berada di tengah batang ($1\\text{ m}$ dari poros)."
    }
  },
  {
    "id": "fis-din-rot-kesetimbangan-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-kesetimbangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah silinder pejal bermassa $M = 50\\text{ kg}$ dan berjari-jari $R = 25\\text{ cm}$ berada di lantai mendatar di depan sebuah undakan tangga vertikal setinggi $h = 5\\text{ cm}$. Sebuah gaya horizontal $F$ dikerjakan tepat pada sumbu poros pusat silinder untuk menariknya melewati undakan. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya horizontal minimum $F$ agar silinder tepat mulai terangkat menaiki undakan tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$250\\text{ N}$",
      "$300\\text{ N}$",
      "$375\\text{ N}$",
      "$500\\text{ N}$",
      "$625\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Saat silinder tepat akan terangkat menaiki undakan, titik tumpu rotasi sesaat berpindah ke tepi undakan ($P$). Gaya normal lantai menjadi nol ($N_{\\text{lantai}} = 0$). Syarat terangkat adalah torsi gaya penarik $F$ harus mengimbangi torsi gaya gravitasi $W$ terhadap titik tumpu $P$.",
      "steps": "1. Hitung berat silinder:\\n$$W = M g = 50\\text{ kg} \\times 10\\text{ m/s}^2 = 500\\text{ N}$$\\n2. Tentukan lengan momen masing-masing gaya terhadap titik sudut undakan $P$:\\n- Jarak vertikal dari poros pusat ke titik $P$:\\n$$d_F = R - h = 25\\text{ cm} - 5\\text{ cm} = 20\\text{ cm} = 0,20\\text{ m}$$\\n- Jarak horizontal dari pusat massa ke titik $P$ (menggunakan teorema Pythagoras):\\n$$d_W = \\sqrt{R^2 - (R - h)^2} = \\sqrt{25^2 - 20^2} = \\sqrt{625 - 400} = \\sqrt{225} = 15\\text{ cm} = 0,15\\text{ m}$$\\n3. Terapkan kesetimbangan momen gaya terhadap $P$:\\n$$\\sum \\tau_P = 0 \\implies F \\times d_F = W \\times d_W$$\\n$$F \\times 0,20\\text{ m} = 500\\text{ N} \\times 0,15\\text{ m}$$\\n$$0,20 F = 75 \\implies F = \\frac{75}{0,20} = 375\\text{ N}$$\\nJadi, gaya penarik horizontal minimum adalah $375\\text{ N}$.",
      "pitfalls": "Kekeliruan paling umum adalah menggunakan jari-jari $R$ sebagai lengan gaya penarik atau berat, bukan jarak tegak lurus terhadap garis kerja gaya ke titik tumpu undakan."
    }
  },
  {
    "id": "fis-din-rot-kesetimbangan-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-kesetimbangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah tangga homogen dengan panjang $L = 5\\text{ m}$ dan berat $W_t = 100\\text{ N}$ bersandar pada dinding vertikal licin dengan sudut kemiringan $\\theta = 53^\\circ$ terhadap lantai mendatar (diketahui $\\sin 53^\\circ = 0,8$ dan $\\cos 53^\\circ = 0,6$). Koefisien gesekan statis antara lantai dan tangga adalah $\\mu_s = 0,50$. Seorang pekerja dengan berat $W_p = 500\\text{ N}$ mulai menaiki tangga tersebut dari dasar. Jarak maksimum $x$ sepanjang tangga yang dapat dicapai pekerja sebelum tangga tepat akan tergelincir adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2,5\\text{ m}$",
      "$3,0\\text{ m}$",
      "$3,5\\text{ m}$",
      "$4,0\\text{ m}$",
      "$4,5\\text{ m}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Terapkan kesetimbangan statis lengkap. Pada ambang batas tergelincir, gaya gesek statis lantai mencapai nilai maksimum: $f_{s,\\text{maks}} = \\mu_s N_L$. Dari kesetimbangan horizontal, gaya reaksi dinding adalah $N_D = f_{s,\\text{maks}}$. Nilai $x$ dicari dari kesetimbangan momen gaya terhadap kaki tangga di lantai.",
      "steps": "1. Kesetimbangan gaya vertikal:\\n$$N_L = W_t + W_p = 100\\text{ N} + 500\\text{ N} = 600\\text{ N}$$\\n2. Gaya reaksi normal dinding pada kondisi batas tergelincir:\\n$$N_D = f_{s,\\text{maks}} = \\mu_s N_L = 0,50 \\times 600\\text{ N} = 300\\text{ N}$$\\n3. Terapkan kesetimbangan momen gaya terhadap dasar tangga di lantai (titik $A$):\\n$$\\sum \\tau_A = 0$$\\n$$N_D (L \\sin 53^\\circ) - W_t \\left(\\frac{L}{2} \\cos 53^\\circ\\right) - W_p (x \\cos 53^\\circ) = 0$$\\n$$(300)(5 \\times 0,8) - (100)(2,5 \\times 0,6) - (500)(x \\times 0,6) = 0$$\\n$$(300)(4,0) - (100)(1,5) - 300 x = 0$$\\n$$1.200 - 150 - 300 x = 0$$\\n$$1.050 = 300 x \\implies x = \\frac{1.050}{300} = 3,5\\text{ m}$$\\nJadi, jarak maksimum yang dapat dinaiki pekerja adalah $3,5\\text{ m}$.",
      "pitfalls": "Kerap lupa menjumlahkan berat pekerja ke dalam gaya normal lantai ($N_L = W_t + W_p$). Keberadaan pekerja di tangga justru menambah gaya tekan vertikal ke lantai sehingga gaya gesek maksimum lantai meningkat."
    }
  },
  {
    "id": "fis-din-rot-kesetimbangan-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-kesetimbangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah lampu gantung bermassa $m = 3\\text{ kg}$ ditahan oleh dua utas tali ringan $T_1$ dan $T_2$ dalam posisi setimbang statis. Tali 1 membentuk sudut elevasi $37^\\circ$ terhadap horizontal ke arah kiri atas, sedangkan tali 2 membentuk sudut elevasi $53^\\circ$ terhadap horizontal ke arah kanan atas (kedua tali saling tegak lurus). Jika $g = 10\\text{ m/s}^2$, besar gaya tegangan tali 1 ($T_1$) dan tali 2 ($T_2$) berturut-turut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$T_1 = 18\\text{ N}$ dan $T_2 = 24\\text{ N}$",
      "$T_1 = 24\\text{ N}$ dan $T_2 = 18\\text{ N}$",
      "$T_1 = 15\\text{ N}$ dan $T_2 = 20\\text{ N}$",
      "$T_1 = 12\\text{ N}$ dan $T_2 = 16\\text{ N}$",
      "$T_1 = 20\\text{ N}$ dan $T_2 = 25\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Karena sudut tali terhadap horizontal adalah $37^\\circ$ dan $53^\\circ$, sudut antara kedua tali adalah $180^\\circ - (37^\\circ + 53^\\circ) = 90^\\circ$ (tegak lurus). Kedua tegangan tali dapat diuraikan pada sumbu-$x$ dan sumbu-$y$ untuk memenuhi kesetimbangan partikel $\\sum F_x = 0$ dan $\\sum F_y = 0$.",
      "steps": "1. Berat beban gantung:\\n$$W = m g = 3\\text{ kg} \\times 10\\text{ m/s}^2 = 30\\text{ N}$$\\n2. Kesetimbangan sumbu horizontal ($x$):\\n$$\\sum F_x = 0 \\implies T_1 \\cos 37^\\circ = T_2 \\cos 53^\\circ$$\\n$$0,8 T_1 = 0,6 T_2 \\implies T_2 = \\frac{4}{3} T_1$$\\n3. Kesetimbangan sumbu vertikal ($y$):\\n$$\\sum F_y = 0 \\implies T_1 \\sin 37^\\circ + T_2 \\sin 53^\\circ = W$$\\n$$0,6 T_1 + 0,8 \\left(\\frac{4}{3} T_1\\right) = 30$$\\n$$0,6 T_1 + 1,067 T_1 = 30 \\implies \\frac{5}{3} T_1 = 30$$\\n$$T_1 = 30 \\times \\frac{3}{5} = 18\\text{ N}$$\\n4. Hitung tegangan tali kedua:\\n$$T_2 = \\frac{4}{3} (18\\text{ N}) = 24\\text{ N}$$\\n(Bisa diverifikasi dengan resultan ortogonal: $\\sqrt{18^2 + 24^2} = \\sqrt{324 + 576} = \\sqrt{900} = 30\\text{ N} = W$, konsisten).\\nJadi, $T_1 = 18\\text{ N}$ dan $T_2 = 24\\text{ N}$.",
      "pitfalls": "Kerap tertukar antara $T_1$ dan $T_2$. Tali dengan sudut lebih curam terhadap horizontal ($53^\\circ$) memikul komponen beban vertikal yang lebih besar sehingga nilai tegangannya lebih tinggi ($24\\text{ N} > 18\\text{ N}$)."
    }
  }
];
