module.exports = [
  {
    "id": "fis-din-mom-linier-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-linier",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah partikel bermassa $m = 2\\text{ kg}$ bergerak pada bidang datar dengan vektor kecepatan sesaat $\\vec{v} = (3\\hat{i} - 4\\hat{j})\\text{ m/s}$. Besar momentum linier ($|\\vec{p}|$) dan energi kinetik ($E_k$) partikel tersebut berturut-turut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$|\\vec{p}| = 10\\text{ kg}\\cdot\\text{m/s}$ dan $E_k = 25\\text{ J}$",
      "$|\\vec{p}| = 14\\text{ kg}\\cdot\\text{m/s}$ dan $E_k = 49\\text{ J}$",
      "$|\\vec{p}| = 10\\text{ kg}\\cdot\\text{m/s}$ dan $E_k = 50\\text{ J}$",
      "$|\\vec{p}| = 7\\text{ kg}\\cdot\\text{m/s}$ dan $E_k = 25\\text{ J}$",
      "$|\\vec{p}| = 5\\text{ kg}\\cdot\\text{m/s}$ dan $E_k = 12,5\\text{ J}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Besar vektor kecepatan adalah modulus Pythagoras: $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$. Besar momentum linier adalah $|\\vec{p}| = m |\\vec{v}|$, dan energi kinetik skalar adalah $E_k = \\frac{1}{2} m |\\vec{v}|^2 = \\frac{|\\vec{p}|^2}{2m}$.",
      "steps": "1. Hitung kelajuan (modulus kecepatan):\\n$$|\\vec{v}| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{ m/s}$$\\n2. Hitung besar momentum linier:\\n$$|\\vec{p}| = m |\\vec{v}| = 2\\text{ kg} \\times 5\\text{ m/s} = 10\\text{ kg}\\cdot\\text{m/s}$$\\n3. Hitung energi kinetik:\\n$$E_k = \\frac{1}{2} m v^2 = \\frac{1}{2} (2)(5^2) = 25\\text{ J}$$\\nJadi, $|\\vec{p}| = 10\\text{ kg}\\cdot\\text{m/s}$ dan $E_k = 25\\text{ J}$.",
      "pitfalls": "Kerap menjumlahkan aljabar biasa komponen vektor ($3 + (-4) = -1$ atau $3 + 4 = 7$) tanpa melakukan resultan kuadrat vektor ortogonal."
    }
  },
  {
    "id": "fis-din-mom-linier-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-linier",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah bola bermassa $m = 0,5\\text{ kg}$ meluncur di atas lantai licin dengan kelajuan $v = 10\\text{ m/s}$ dan menumbuk dinding tegak lurus dengan sudut datang $\\theta = 30^\\circ$ terhadap garis normal dinding. Bola memantul elastis sempurna dengan kelajuan yang sama dan sudut pantul $\\theta' = 30^\\circ$ terhadap garis normal. Besar perubahan momentum linier ($|\\Delta \\vec{p}|$) bola akibat tumbukan tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0\\text{ kg}\\cdot\\text{m/s}$",
      "$5\\text{ kg}\\cdot\\text{m/s}$",
      "$5\\sqrt{3}\\text{ kg}\\cdot\\text{m/s}$",
      "$10\\text{ kg}\\cdot\\text{m/s}$",
      "$10\\sqrt{3}\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Perubahan momentum dua dimensi dihitung dengan menguraikan vektor kecepatan pada sumbu tegak lurus (normal) dan sejajar permukaan dinding. Pada dinding licin, komponen kecepatan yang sejajar dinding tidak berubah ($\Delta v_\\parallel = 0$), sedangkan komponen tegak lurus berbalik arah.",
      "steps": "1. Uraikan komponen kecepatan tegak lurus dinding (sumbu normal $y$):\\n- Sebelum tumbukan (menuju dinding): $v_{1y} = -v \\cos 30^\\circ = -10 \\times \\frac{1}{2}\\sqrt{3} = -5\\sqrt{3}\\text{ m/s}$.\\n- Setelah pantulan (menjauhi dinding): $v_{2y} = +v \\cos 30^\\circ = +5\\sqrt{3}\\text{ m/s}$.\\n2. Komponen sejajar dinding (sumbu $x$):\\n$$v_{1x} = v_{2x} = v \\sin 30^\\circ = 5\\text{ m/s} \\implies \\Delta v_x = 0$$\\n3. Hitung perubahan kecepatan total:\\n$$\\Delta v_y = v_{2y} - v_{1y} = 5\\sqrt{3} - (-5\\sqrt{3}) = 10\\sqrt{3}\\text{ m/s}$$\\n4. Hitung besar perubahan momentum:\\n$$|\\Delta \\vec{p}| = m |\\Delta v_y| = 0,5 \\times 10\\sqrt{3} = 5\\sqrt{3}\\text{ kg}\\cdot\\text{m/s}$$\\nJadi, besar perubahan momentumnya adalah $5\\sqrt{3}\\text{ kg}\\cdot\\text{m/s}$.",
      "pitfalls": "Kerap tertukar antara proyeksi $\\cos$ dan $\\sin$, karena sudut diukur terhadap garis normal maka komponen tegak lurus dinding menggunakan $v \\cos\\theta$."
    }
  },
  {
    "id": "fis-din-mom-linier-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-linier",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Besar momentum linier sebuah benda bermassa konstan berubah terhadap waktu mengikuti fungsi matematis $p(t) = 3t^2 - 4t + 5$, dengan $p$ dalam $\\text{kg}\\cdot\\text{m/s}$ dan $t$ dalam sekon. Besar gaya total (gaya netto) yang bekerja pada benda tersebut pada saat $t = 3\\text{ sekon}$ adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$8\\text{ N}$",
      "$14\\text{ N}$",
      "$18\\text{ N}$",
      "$20\\text{ N}$",
      "$32\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hukum II Newton dalam formulasi kalkulus orisinal menyatakan bahwa gaya netto merupakan laju perubahan momentum terhadap waktu: $F_{\\text{net}} = \\frac{dp}{dt}$.",
      "steps": "1. Turunkan fungsi momentum $p(t)$ terhadap waktu $t$:\\n$$F(t) = \\frac{d}{dt}(3t^2 - 4t + 5) = 6t - 4$$\\n2. Evaluasi gaya pada saat $t = 3\\text{ sekon}$:\\n$$F(3) = 6(3) - 4 = 18 - 4 = 14\\text{ N}$$\\nJadi, besar gaya total pada $t = 3\\text{ s}$ adalah $14\\text{ N}$.",
      "pitfalls": "Kesalahan umum adalah langsung memasukkan $t = 3$ ke fungsi momentum ($p(3) = 20\\text{ kg}\\cdot\\text{m/s}$) dan membaginya dengan waktu ($20/3\\text{ N}$), padahal gaya sesaat ditentukan oleh turunan diferensial $\\frac{dp}{dt}$."
    }
  },
  {
    "id": "fis-din-mom-linier-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-linier",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Jika energi kinetik sebuah partikel yang sedang bergerak dinaikkan sebesar $300\\%$ dari nilai awalnya, maka persentase kenaikan momentum linier partikel tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\%$",
      "$100\\%$",
      "$150\\%$",
      "$200\\%$",
      "$300\\%$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hubungan energi kinetik dan momentum linier adalah $p = \\sqrt{2m E_k}$. Kenaikan sebesar $300\\%$ berarti nilai akhirnya menjadi $E_k' = E_k + 3,00 E_k = 4 E_k$.",
      "steps": "1. Nyatakan kondisi energi kinetik akhir:\\n$$E_k' = E_k + 3 E_k = 4 E_k$$\\n2. Tentukan perbandingan momentum akhir terhadap awal:\\n$$p' = \\sqrt{2m E_k'} = \\sqrt{2m(4 E_k)} = 2 \\sqrt{2m E_k} = 2p$$\\n3. Hitung pertambahan momentum:\\n$$\\Delta p = p' - p = 2p - p = p$$\\n4. Hitung persentase kenaikan momentum:\\n$$\\text{Kenaikan} = \\frac{\\Delta p}{p} \\times 100\\% = \\frac{p}{p} \\times 100\\% = 100\\%$$\\nJadi, momentum partikel naik sebesar $100\\%$.",
      "pitfalls": "Perhatikan frasa 'dinaikkan sebesar 300%' yang bermakna nilainya menjadi 4 kali lipat, bukan 3 kali lipat. Selain itu, momentum akhir menjadi $200\\%$ dari nilai awal yang berarti mengalami kenaikan sebesar $100\\%$."
    }
  },
  {
    "id": "fis-din-mom-linier-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-linier",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah proyektil bermassa $m = 0,4\\text{ kg}$ ditembakkan dari tanah datar dengan kecepatan awal $v_0 = 25\\text{ m/s}$ pada sudut elevasi $\\theta = 37^\\circ$ terhadap horizontal (diketahui $\\sin 37^\\circ = 0,6$ dan $\\cos 37^\\circ = 0,8$). Dengan mengabaikan gesekan udara dan menganggap $g = 10\\text{ m/s}^2$, besar momentum linier proyektil tepat pada titik tertinggi lintasannya adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0\\text{ kg}\\cdot\\text{m/s}$",
      "$6\\text{ kg}\\cdot\\text{m/s}$",
      "$8\\text{ kg}\\cdot\\text{m/s}$",
      "$10\\text{ kg}\\cdot\\text{m/s}$",
      "$12\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada gerak parabola, kecepatan horizontal bernilai konstan: $v_x = v_0 \\cos\\theta$. Di titik puncak lintasan, komponen kecepatan vertikal sesaat bernilai nol ($v_y = 0$), sehingga kecepatan total benda hanyalah kecepatan horizontalnya ($v_{\\text{puncak}} = v_x$).",
      "steps": "1. Hitung komponen kecepatan horizontal konstan:\\n$$v_x = v_0 \\cos 37^\\circ = 25 \\times 0,8 = 20\\text{ m/s}$$\\n2. Kecepatan pada titik tertinggi:\\n$$v_{\\text{puncak}} = v_x = 20\\text{ m/s}$$\\n3. Hitung momentum linier di titik tertinggi:\\n$$p = m v_{\\text{puncak}} = 0,4\\text{ kg} \\times 20\\text{ m/s} = 8\\text{ kg}\\cdot\\text{m/s}$$\\nJadi, momentum linier di titik tertinggi adalah $8\\text{ kg}\\cdot\\text{m/s}$.",
      "pitfalls": "Kerap terkecoh menganggap momentum di titik tertinggi bernilai nol karena benda 'berhenti sesaat'. Yang bernilai nol hanyalah komponen vertikal kecepatannya, sedangkan komponen horizontalnya tetap bergerak dengan laju $20\\text{ m/s}$."
    }
  }
];
