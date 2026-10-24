module.exports = [
  {
    "id": "fis-din-gaya-gesek-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah balok bermassa $m = 10\\text{ kg}$ ditarik oleh gaya konstan $F = 50\\text{ N}$ yang membentuk sudut elevasi $\\theta = 37^\\circ$ terhadap bidang horizontal (diketahui $\\sin 37^\\circ = 0,6$ dan $\\cos 37^\\circ = 0,8$). Balok bergerak di atas lantai datar dengan koefisien gesekan kinetis $\\mu_k = 0,20$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, percepatan gerak balok tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2,0\\text{ m/s}^2$",
      "$2,6\\text{ m/s}^2$",
      "$3,0\\text{ m/s}^2$",
      "$3,4\\text{ m/s}^2$",
      "$4,0\\text{ m/s}^2$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gaya tarik miring ke atas memiliki dua komponen: komponen horizontal $F_x = F \\cos\\theta$ yang mempercepat balok dan komponen vertikal $F_y = F \\sin\\theta$ yang mengurangi gaya normal lantai: $N = m g - F \\sin\\theta$. Gaya gesekan kinetis yang menghambat adalah $f_k = \\mu_k N$.",
      "steps": "1. Uraikan gaya pada sumbu vertikal ($y$) untuk mencari gaya normal $N$:\\n$$\\sum F_y = 0 \\implies N + F \\sin 37^\\circ - m g = 0$$\\n$$N = m g - F \\sin 37^\\circ = (10)(10) - 50(0,6) = 100 - 30 = 70\\text{ N}$$\\n2. Hitung gaya gesekan kinetis penghambat:\\n$$f_k = \\mu_k N = 0,20 \\times 70 = 14\\text{ N}$$\\n3. Terapkan Hukum II Newton pada sumbu horizontal ($x$):\\n$$\\sum F_x = F \\cos 37^\\circ - f_k = m a$$\\n$$(50)(0,8) - 14 = 10 a$$\\n$$40 - 14 = 10 a \\implies 26 = 10 a \\implies a = 2,6\\text{ m/s}^2$$\\nJadi, percepatan balok adalah $2,6\\text{ m/s}^2$.",
      "pitfalls": "Kerap lupa memperhitungkan komponen vertikal gaya tarik $F \\sin\\theta$, sehingga keliru menganggap gaya normal tetap $N = m g = 100\\text{ N}$ yang menghasilkan $f_k = 20\\text{ N}$ dan $a = 2,0\\text{ m/s}^2$."
    }
  },
  {
    "id": "fis-din-gaya-gesek-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Dua balok bertumpuk di atas lantai horizontal licin (tanpa gesekan). Balok atas $A$ bermassa $m_A = 2\\text{ kg}$ diletakkan di atas balok bawah $B$ bermassa $m_B = 3\\text{ kg}$. Antara permukaan balok $A$ dan balok $B$ terdapat gesekan dengan koefisien gesekan statis $\\mu_s = 0,4$. Sebuah gaya horizontal $F$ menarik balok bawah $B$. Nilai maksimum gaya tarik $F$ agar balok $A$ tidak tergelincir (bergerak bersama-sama dengan balok $B$) adalah... ($g = 10\\text{ m/s}^2$)",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$8\\text{ N}$",
      "$12\\text{ N}$",
      "$16\\text{ N}$",
      "$20\\text{ N}$",
      "$25\\text{ N}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Balok $A$ ikut bergerak dipercepat semata-mata karena gaya gesek statis yang dikerjakan oleh permukaan atas balok $B$. Nilai batas percepatan bersama dicapai saat gaya gesek mencapai nilai statis maksimum: $f_{s,\\text{maks}} = \\mu_s m_A g$.",
      "steps": "1. Tinjau balok atas $A$:\\nGaya horizontal satu-satunya pada balok $A$ adalah gaya gesek statis $f_s$ dari balok $B$:\\n$$f_{s,\\text{maks}} = m_A a_{\\text{maks}}$$\\n$$\\mu_s m_A g = m_A a_{\\text{maks}} \\implies a_{\\text{maks}} = \\mu_s g = 0,4 \\times 10 = 4\\text{ m/s}^2$$\\n2. Tinjau sistem gabungan $(A + B)$:\\nKarena lantai licin, total gaya luar horizontal penggerak kedua balok adalah $F$:\\n$$F_{\\text{maks}} = (m_A + m_B) a_{\\text{maks}}$$\\n$$F_{\\text{maks}} = (2 + 3) \\times 4 = 5 \\times 4 = 20\\text{ N}$$\\nJadi, gaya penarik maksimum agar tidak selip adalah $20\\text{ N}$.",
      "pitfalls": "Jangan menggunakan massa total untuk menghitung gaya gesek statis antara $A$ dan $B$. Gaya normal antara $A$ dan $B$ hanya bersumber dari berat balok $A$ ($N_{AB} = m_A g$)."
    }
  },
  {
    "id": "fis-din-gaya-gesek-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah balok meluncur menuruni bidang miring kasar yang bersudut $\\theta_1 = 37^\\circ$ terhadap horizontal dengan kelajuan konstan. Jika kemiringan bidang miring tersebut diperbesar menjadi $\\theta_2 = 53^\\circ$, percepatan meluncur balok menuruni bidang menjadi... (Gunakan $\\sin 37^\\circ = \\cos 53^\\circ = 0,6$; $\\cos 37^\\circ = \\sin 53^\\circ = 0,8$; dan $g = 10\\text{ m/s}^2$)",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2,5\\text{ m/s}^2$",
      "$3,0\\text{ m/s}^2$",
      "$3,5\\text{ m/s}^2$",
      "$4,0\\text{ m/s}^2$",
      "$4,5\\text{ m/s}^2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada kelajuan konstan ($a = 0$), komponen gaya luncur gravitasi tepat diimbangi oleh gaya gesekan kinetis: $m g \\sin\\theta_1 = \\mu_k m g \\cos\\theta_1 \\implies \\mu_k = \\tan\\theta_1$. Koefisien gesekan bernilai tetap saat sudut diubah.",
      "steps": "1. Cari koefisien gesekan kinetis $\\mu_k$ dari kondisi awal laju tetap:\\n$$\\mu_k = \\tan 37^\\circ = \\frac{\\sin 37^\\circ}{\\cos 37^\\circ} = \\frac{0,6}{0,8} = 0,75$$\\n2. Tentukan persamaan percepatan pada sudut baru $\\theta_2 = 53^\\circ$:\\n$$\\sum F_\\parallel = m g \\sin 53^\\circ - f_k = m a$$\\n$$m g \\sin 53^\\circ - \\mu_k m g \\cos 53^\\circ = m a$$\\n$$a = g (\\sin 53^\\circ - \\mu_k \\cos 53^\\circ)$$\\n3. Hitung nilainya:\\n$$a = 10 [0,8 - (0,75 \\times 0,6)] = 10 [0,8 - 0,45] = 10 \\times 0,35 = 3,5\\text{ m/s}^2$$\\nJadi, percepatan balok adalah $3,5\\text{ m/s}^2$.",
      "pitfalls": "Kerap keliru menganggap koefisien gesekan berubah seiring perubahan sudut. Sifat material permukaan tetap sama, yang berubah hanyalah gaya normal dan komponen gaya sejajar bidang miring."
    }
  },
  {
    "id": "fis-din-gaya-gesek-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah balok bermassa $m = 5\\text{ kg}$ ditekan secara mendatar pada dinding vertikal kasar. Koefisien gesekan statis antara balok dan dinding adalah $\\mu_s = 0,50$ dan percepatan gravitasi $g = 10\\text{ m/s}^2$. Besar gaya tekan mendatar minimum $F$ yang harus diberikan pada balok agar balok tidak melorot jatuh ke bawah adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$25\\text{ N}$",
      "$50\\text{ N}$",
      "$75\\text{ N}$",
      "$100\\text{ N}$",
      "$125\\text{ N}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Gaya tekan mendatar $F$ membangkitkan gaya normal kontak dari dinding: $N = F$. Gaya penahan gerak jatuh ke bawah adalah gaya gesek statis vertikal ke atas: $f_s \\le \\mu_s N = \\mu_s F$. Kondisi tepat akan melorot mensyaratkan $f_{s,\\text{maks}} = W$.",
      "steps": "1. Tuliskan syarat kesetimbangan gaya vertikal agar balok diam:\\n$$\\sum F_y = 0 \\implies f_s - W = 0 \\implies f_s = m g = 5 \\times 10 = 50\\text{ N}$$\\n2. Hubungkan dengan batas gaya gesek statis maksimum:\\n$$f_s \\le f_{s,\\text{maks}} = \\mu_s N$$\\nKarena pada sumbu horizontal $N = F$, maka:\\n$$50 \\le \\mu_s F$$\\n$$F \\ge \\frac{50}{\\mu_s} = \\frac{50}{0,50} = 100\\text{ N}$$\\nJadi, gaya tekan mendatar minimum adalah $100\\text{ N}$.",
      "pitfalls": "Jangan keliru mengalikan berat dengan koefisien gesek ($50 \\times 0,5 = 25\\text{ N}$). Gaya gesek statis dibangkitkan oleh gaya normal horizontal, bukan oleh berat vertikal."
    }
  },
  {
    "id": "fis-din-gaya-gesek-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah balok bermassa $m = 2\\text{ kg}$ dilontarkan dengan kecepatan awal $v_0 = 15\\text{ m/s}$ ke atas menaiki bidang miring kasar bersudut $\\theta = 30^\\circ$ terhadap horizontal. Koefisien gesekan kinetis antara balok dan bidang miring adalah $\\mu_k = \\frac{\\sqrt{3}}{6}$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, jarak maksimum yang ditempuh balok sepanjang bidang miring sebelum berhenti sesaat adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ m}$",
      "$12\\text{ m}$",
      "$15\\text{ m}$",
      "$18\\text{ m}$",
      "$20\\text{ m}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Ketika benda bergerak menaiki bidang miring, gaya gesekan kinetis berarah menuruni bidang miring (searah dengan komponen gaya gravitasi sejajar bidang). Keduanya bersama-sama menghasilkan perlambatan: $a_{\\text{naik}} = g(\\sin\\theta + \\mu_k \\cos\\theta)$.",
      "steps": "1. Tentukan perlambatan gerak saat menaiki bidang miring:\\n$$a_{\\text{naik}} = g (\\sin 30^\\circ + \\mu_k \\cos 30^\\circ)$$\\n$$a_{\\text{naik}} = 10 \\left(\\frac{1}{2} + \\frac{\\sqrt{3}}{6} \\times \\frac{\\sqrt{3}}{2}\\right) = 10 \\left(\\frac{1}{2} + \\frac{3}{12}\\right) = 10 \\left(\\frac{1}{2} + \\frac{1}{4}\\right) = 10 \\left(\\frac{3}{4}\\right) = 7,5\\text{ m/s}^2$$\\n2. Gunakan persamaan GLBB untuk mencari jarak henti ($v_t = 0$):\\n$$v_t^2 = v_0^2 - 2 a_{\\text{naik}} s$$\\n$$0 = 15^2 - 2 (7,5) s$$\\n$$0 = 225 - 15 s \\implies 15 s = 225 \\implies s = 15\\text{ m}$$\\nJadi, jarak maksimum yang ditempuh balok adalah $15\\text{ m}$.",
      "pitfalls": "Kekeliruan fatal yang sering terjadi adalah mengurangkan gaya gesek dari komponen berat ($g(\\sin\\theta - \\mu_k\\cos\\theta)$). Pengurangan hanya berlaku saat benda meluncur turun. Saat benda bergerak naik, gesekan menahan laju ke arah bawah sehingga perlambatannya bertambah besar."
    }
  }
];
