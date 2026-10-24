/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Gaya dan Gerak (fis-din-gaya)
 * Sub-Bab: Gaya Gesek Statis dan Kinetis (fis-din-gaya-gesek)
 * Slug: gaya-gesek
 * Indikator: Gaya gesek statis maksimum (f_s = mu_s * N), gesek kinetis (f_k = mu_k * N), dan penentuan kondisi gerak.
 * 
 * Total Butir Soal: 23 (Mudah: 12, Sedang: 11, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-gaya-gesek";
  const subTopicSlug = "gaya-gesek";
  const questions = [
  {
    "id": "fis-din-gaya-gesek-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah balok bermassa $m = 5\\text{ kg}$ diletakkan pada permukaan lantai datar kasar dengan koefisien gesekan statis $\\mu_s = 0,4$ dan koefisien gesekan kinetis $\\mu_k = 0,2$. Balok ditarik dengan gaya horizontal $F = 15\\text{ N}$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar gaya gesekan yang bekerja pada balok adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ N}$",
      "$15\\text{ N}$",
      "$20\\text{ N}$",
      "$35\\text{ N}$",
      "$50\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gaya gesek statis ($f_s$) bersifat responsif terhadap gaya luar yang berusaha menggerakkan benda, dengan nilai maksimum $f_{s,\\text{maks}} = \\mu_s N$. Jika gaya penarik $F \\le f_{s,\\text{maks}}$, maka benda tetap diam dan besar gaya gesek statis tepat sama dengan gaya penarik ($f_s = F$).",
      "steps": "1. Hitung gaya normal balok di lantai datar horizontal:\\n$$N = m g = 5 \\times 10 = 50\\text{ N}$$\\n2. Hitung gaya gesek statis maksimum:\\n$$f_{s,\\text{maks}} = \\mu_s N = 0,4 \\times 50 = 20\\text{ N}$$\\n3. Bandingkan gaya penarik $F = 15\\text{ N}$ dengan $f_{s,\\text{maks}}$:\\nKarena $F = 15\\text{ N} < f_{s,\\text{maks}} = 20\\text{ N}$, balok belum bergerak (tetap diam).\\n4. Berdasarkan Hukum I Newton pada sumbu horizontal:\\n$$\\sum F_x = 0 \\implies F - f_s = 0 \\implies f_s = F = 15\\text{ N}$$\\nJadi, gaya gesek yang bekerja bernilai $15\\text{ N}$.",
      "pitfalls": "Banyak siswa langsung mengalikan $\\mu_s N = 20\\text{ N}$ atau $\\mu_k N = 10\\text{ N}$. Rumus $\\mu_s N$ hanya menghasilkan nilai AMBANG BATAS maksimum, bukan gaya gesek aktual saat benda diam."
    },
    "subTopicSlug": "gaya-gesek",
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-gesek-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Balok bermassa $m = 4\\text{ kg}$ berada di atas lantai mendatar kasar dengan koefisien gesekan kinetis $\\mu_k = 0,25$. Balok ditarik dengan gaya mendatar konstan $F = 22\\text{ N}$ sehingga balok bergerak meluncur di atas lantai. Jika $g = 10\\text{ m/s}^2$, besar gaya gesekan kinetis yang menghambat gerak balok adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ N}$",
      "$10\\text{ N}$",
      "$12\\text{ N}$",
      "$22\\text{ N}$",
      "$40\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Saat benda meluncur relatif terhadap permukaan bidang, gaya hambat yang bekerja adalah gaya gesekan kinetis dengan besar konstan: $f_k = \\mu_k N$, di mana $N$ adalah gaya normal tegak lurus bidang.",
      "steps": "1. Hitung gaya normal balok di lantai mendatar:\\n$$N = m g = 4 \\times 10 = 40\\text{ N}$$\\n2. Hitung gaya gesekan kinetis:\\n$$f_k = \\mu_k N = 0,25 \\times 40 = 10\\text{ N}$$\\nJadi, gaya gesekan kinetis penghambat adalah $10\\text{ N}$.",
      "pitfalls": "Jangan mengurangkan gaya penarik dengan gaya gesek untuk mencari $f_k$. Selisih $F - f_k$ adalah resultan gaya penyumbang percepatan ($F_{\\text{net}} = 12\\text{ N}$), sedangkan gaya geseknya sendiri tepat bernilai $10\\text{ N}$."
    },
    "subTopicSlug": "gaya-gesek",
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-gesek-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Perhatikan pernyataan-pernyataan mengenai gaya gesekan berikut:\\n1. Arah gaya gesekan selalu berlawanan dengan kecenderungan arah gerak relatif benda.\\n2. Koefisien gesekan statis umumnya lebih besar atau sama dengan koefisien gesekan kinetis ($\\mu_s \\ge \\mu_k$).\\n3. Gaya gesekan kinetis nilainya bergantung linier terhadap luas permukaan sentuh benda.\\nPernyataan yang BENAR adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1 dan 2 saja",
      "1 dan 3 saja",
      "2 dan 3 saja",
      "1 saja",
      "1, 2, dan 3"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hukum Amontons tentang gesekan menyatakan bahwa gaya gesekan berbanding lurus dengan gaya normal dan pada pendekatan makroskopis standar tidak bergantung pada luas bidang sentuh semu benda.",
      "steps": "1. Analisis pernyataan 1: Benar, gaya gesekan selalu melawan kecenderungan pergeseran relatif antara dua permukaan yang bersentuhan.\\n2. Analisis pernyataan 2: Benar, diperlukan gaya yang lebih besar untuk memulai pergerakan daripada mempertahankannya (ikatan mikroskopis adhesi saat diam lebih kuat), sehingga $\\mu_s \\ge \\mu_k$.\\n3. Analisis pernyataan 3: Salah, pada model gesekan Coulomb/Amontons, gaya gesek tidak bergantung pada luas permukaan bidang sentuh selama gaya normalnya tetap konstan.\\nSehingga pernyataan yang benar adalah 1 dan 2.",
      "pitfalls": "Kerap dianggap bahwa semakin lebar penampang balok, semakin besar gaya geseknya. Secara mikroskopis, luas kontak riil per satuan tekanan akan terdistribusi sebanding sehingga total gaya gesek tidak dipengaruhi luas semu permukaan."
    },
    "subTopicSlug": "gaya-gesek",
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-gesek-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah balok bermassa $m = 2\\text{ kg}$ diluncurkan di atas lantai kasar dengan kecepatan awal $v_0 = 8\\text{ m/s}$. Balok tersebut mengalami perlambatan akibat gesekan lantai hingga akhirnya berhenti setelah menempuh jarak $s = 16\\text{ m}$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, koefisien gesekan kinetis $\\mu_k$ antara balok dan lantai adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0,10$",
      "$0,20$",
      "$0,25$",
      "$0,40$",
      "$0,50$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Perpaduan kinematika gerak lurus berubah beraturan (GLBB diperlambat) dan dinamika Hukum II Newton: $v_t^2 = v_0^2 - 2 a s$ dan $\\sum F = f_k = m a$, dengan $f_k = \\mu_k m g$.",
      "steps": "1. Tentukan besar perlambatan $a$ dari persamaan GLBB:\\n$$v_t^2 = v_0^2 - 2 a s$$\\n$$0 = 8^2 - 2 a (16)$$\\n$$32 a = 64 \\implies a = 2\\text{ m/s}^2$$\\n2. Hubungkan perlambatan dengan gaya gesek kinetis:\\n$$\\sum F_x = f_k = m a$$\\n$$\\mu_k m g = m a \\implies \\mu_k = \\frac{a}{g}$$\\n3. Substitusi nilai percepatan:\\n$$\\mu_k = \\frac{2}{10} = 0,20$$\\nJadi, koefisien gesekan kinetis adalah $0,20$.",
      "pitfalls": "Perhatikan bahwa koefisien gesekan merupakan besaran tak berdimensi yang tidak bergantung pada massa benda yang meluncur."
    },
    "subTopicSlug": "gaya-gesek",
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-gesek-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah balok bermassa $m = 10\\text{ kg}$ diletakkan pada bidang miring kasar yang membentuk sudut kemiringan $\\theta = 37^\\circ$ terhadap horizontal (diketahui $\\sin 37^\\circ = 0,6$ dan $\\cos 37^\\circ = 0,8$). Koefisien gesekan statis antara balok dan bidang miring adalah $\\mu_s = 0,5$. Jika $g = 10\\text{ m/s}^2$, besar gaya gesekan statis maksimum yang mampu dikerjakan oleh bidang miring pada balok adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ N}$",
      "$40\\text{ N}$",
      "$50\\text{ N}$",
      "$60\\text{ N}$",
      "$80\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gaya gesek statis maksimum pada bidang miring ditentukan oleh gaya normal tegak lurus bidang: $f_{s,\\text{maks}} = \\mu_s N = \\mu_s m g \\cos\\theta$.",
      "steps": "1. Hitung gaya normal tegak lurus bidang miring:\\n$$N = m g \\cos 37^\\circ = 10 \\times 10 \\times 0,8 = 80\\text{ N}$$\\n2. Hitung gaya gesek statis maksimum:\\n$$f_{s,\\text{maks}} = \\mu_s N = 0,5 \\times 80 = 40\\text{ N}$$\\nJadi, gaya gesek statis maksimum adalah $40\\text{ N}$.",
      "pitfalls": "Jangan keliru menggunakan $m g \\sin\\theta$ untuk mencari gaya normal. Komponen yang tegak lurus bidang miring adalah $m g \\cos\\theta$, sedangkan $m g \\sin\\theta$ adalah komponen gaya luncur sejajar bidang."
    },
    "subTopicSlug": "gaya-gesek",
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
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
    },
    "subTopicSlug": "gaya-gesek",
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
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
    },
    "subTopicSlug": "gaya-gesek",
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
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
    },
    "subTopicSlug": "gaya-gesek",
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
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
    },
    "subTopicSlug": "gaya-gesek",
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
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
    },
    "subTopicSlug": "gaya-gesek",
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mudah-fis-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Hukum II Newton",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah balok bermassa $4\\text{ kg}$ terletak di atas lantai horizontal licin tanpa gesekan. Jika balok ditarik oleh gaya konstan $F = 20\\text{ N}$ searah bidang lantai, besar percepatan gerak balok tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ m/s}^2$",
      "$4\\text{ m/s}^2$",
      "$5\\text{ m/s}^2$",
      "$8\\text{ m/s}^2$",
      "$10\\text{ m/s}^2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Hukum II Newton:</strong><br>\n          $$\\Sigma F = m a \\implies a = \\frac{\\Sigma F}{m}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Karena lantai licin sempurna ($f_k = 0$), gaya penggerak total $\\Sigma F = 20\\text{ N}$.</li>\n          <li>$$a = \\frac{20\\text{ N}}{4\\text{ kg}} = 5\\text{ m/s}^2$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan apakah ada koefisien gesekan atau lantai dinyatakan licin sempurna.\n        </div>\n      "
    },
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-gesek"
  },
  {
    "id": "fis-din-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah peti kargo $A$ ($m_A = 6\\text{ kg}$) dan $B$ ($m_B = 4\\text{ kg}$) diletakkan berdampingan saling bersentuhan di atas lantai gudang yang licin tanpa gesekan. Sebuah gaya dorong horizontal tetap $F = 30\\text{ N}$ diberikan secara langsung pada balok $A$ ke arah balok $B$. Besar gaya kontak antar-permukaan yang dikerjakan oleh balok $A$ pada balok $B$ adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "12 N",
      "18 N",
      "20 N",
      "24 N",
      "30 N"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton sistem multi-benda kontak: $a = \\frac{\\Sigma F}{\\Sigma m}$ dan gaya aksi-reaksi kontak.</div>",
      "steps": "<ol><li>1) Percepatan bersama kedua balok: $a = \\frac{F}{m_A + m_B} = \\frac{30}{6 + 4} = 3\\text{ m/s}^2$.<br>2) Tinjau balok $B$ secara horizontal: satu-satunya gaya horizontal yang bekerja pada $B$ adalah gaya kontak dari $A$ ($N_{AB}$): $N_{AB} = m_B \\cdot a = 4\\text{ kg} \\times 3\\text{ m/s}^2 = 12\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Sebagian siswa mengira gaya kontak sama dengan gaya dorong luar $F = 30\\text{ N}$, atau menghitung gaya resultan yang tersisa pada balok $A$ ($F - N_{AB} = 18\\text{ N}$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-gesek"
  },
  {
    "id": "fis-din-26",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Tiga buah balok $m_1 = 2\\text{ kg}$, $m_2 = 3\\text{ kg}$, dan $m_3 = 5\\text{ kg}$ diletakkan berderet saling bersentuhan di atas lantai horizontal yang licin tanpa gesekan. Sebuah gaya dorong horizontal $F = 50\\text{ N}$ bekerja mendorong balok pertama ($m_1$) ke arah deretan balok lainnya. Besar gaya kontak antara balok kedua ($m_2$) dan balok ketiga ($m_3$) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "10 N",
      "15 N",
      "25 N",
      "35 N",
      "50 N"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Percepatan bersama sistem gabungan $a = \\frac{F}{\\Sigma m}$ dan gaya desak aksi-reaksi kontak.</div>",
      "steps": "<ol><li>1) Percepatan ketiga balok: $a = \\frac{50}{2 + 3 + 5} = \\frac{50}{10} = 5\\text{ m/s}^2$.<br>2) Gaya kontak antara balok 2 dan 3 ($N_{23}$) adalah gaya yang bertanggung jawab mempercepat balok 3 saja: $N_{23} = m_3 \\cdot a = 5\\text{ kg} \\times 5\\text{ m/s}^2 = 25\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering keliru menghitung gaya kontak antara balok 1 dan balok 2 ($N_{12} = (m_2 + m_3)a = 40\\text{ N}$) atau menjawab gaya luar $50\\text{ N}$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-gesek"
  },
  {
    "id": "fis-din-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Gaya Gesek (Statis vs Kinetis)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah truk ekspedisi membawa sebuah peti mesin bermassa $80\\text{ kg}$ di atas bak terbuka yang mendatar. Koefisien gesekan statis antara peti dan permukaan bak truk adalah $\\mu_s = 0{,}35$, sedangkan koefisien gesekan kinetisnya $\\mu_k = 0{,}25$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, deselerasi (perlambatan) maksimum yang diperbolehkan saat truk direm agar peti tidak tergelincir adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1,5 m/s²",
      "2,5 m/s²",
      "3,0 m/s²",
      "3,5 m/s²",
      "4,0 m/s²"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Syarat benda tidak bertranslasi relatif: gaya inersia maksimum diimbangi oleh gaya gesek statis maksimum ($f_{s,\\max} = \\mu_s N$).</div>",
      "steps": "<ol><li>Pada bak mendatar, $N = mg$. Gaya perlambatan maksimum: $m \\cdot a_{\\max} = f_{s,\\max} = \\mu_s mg \\Rightarrow a_{\\max} = \\mu_s g = 0{,}35 \\times 10 = 3{,}5\\text{ m/s}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering keliru menggunakan koefisien gesek kinetis $\\mu_k$ sehingga menjawab $a = 2{,}5\\text{ m/s}^2$. Koefisien kinetis hanya berlaku jika peti sudah tergelincir.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-gesek"
  },
  {
    "id": "fis-din-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Gaya Gesek (Statis vs Kinetis)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang pekerja menahan sebuah papan pajangan bermassa $m = 0{,}6\\text{ kg}$ dengan cara menekannya secara tegak lurus ke dinding vertikal yang kasar. Koefisien gesekan statis antara papan dan dinding adalah $\\mu_s = 0{,}40$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar gaya tekan horizontal minimum $F$ yang harus diberikan agar papan tidak merosot ke bawah adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "6 N",
      "10 N",
      "15 N",
      "20 N",
      "24 N"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kesetimbangan statis benda pada bidang vertikal: $\\Sigma F_y = 0$ dan $\\Sigma F_x = 0$ dengan $f_s \\le \\mu_s N$.</div>",
      "steps": "<ol><li>1) Sumbu vertikal: $f_s = W = mg = 0{,}6 \\times 10 = 6\\text{ N}$.<br>2) Sumbu horizontal: $N = F$.<br>3) Syarat tidak merosot: $f_s \\le \\mu_s N \\Rightarrow mg \\le \\mu_s F \\Rightarrow F \\ge \\frac{mg}{\\mu_s} = \\frac{6}{0{,}40} = 15\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Terkecoh mengalikan gaya berat dengan $\\mu_s$ bukannya membaginya, atau mengira gaya normal selalu bernilai $mg$ seperti pada bidang datar.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-gesek"
  },
  {
    "id": "fis-din-29",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Gaya Gesek (Statis vs Kinetis)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah balok besi bermassa $m = 8\\text{ kg}$ diletakkan di atas lantai mendatar kasar. Koefisien gesekan statis antara balok dan lantai adalah $\\mu_s = 0{,}40$, sedangkan koefisien gesekan kinetisnya $\\mu_k = 0{,}25$. Jika balok ditarik oleh gaya horizontal sebesar $F = 24\\text{ N}$ ($g = 10\\text{ m/s}^2$), besar gaya gesekan yang bekerja pada balok tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "16 N",
      "20 N",
      "32 N",
      "40 N",
      "24 N"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Sifat adaptif gaya gesek statis: selama gaya luar horizontal $F \\le f_{s,\\max}$, benda tetap diam dan besar gaya gesek statis tepat sama dengan gaya luar ($f_s = F$).</div>",
      "steps": "<ol><li>1) Gaya gesek statis maksimum: $f_{s,\\max} = \\mu_s mg = 0{,}40 \\times 80 = 32\\text{ N}$.<br>2) Bandingkan gaya tarik dengan $f_{s,\\max}$: $F = 24\\text{ N} < 32\\text{ N}$, artinya balok masih diam.<br>3) Karena balok diam, resultan gaya horizontal nol: $F - f_s = 0 \\Rightarrow f_s = F = 24\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Salah satu jebakan terpopuler UTBK: siswa langsung menghitung $\\mu_s N = 32\\text{ N}$ atau $\\mu_k N = 20\\text{ N}$ tanpa mengecek apakah gaya penarik melampaui ambang gesek statis maksimum.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-gesek"
  },
  {
    "id": "fis-din-30",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Gaya Gesek (Statis vs Kinetis)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah balok es meluncur menuruni bidang miring kasar yang membentuk sudut kemiringan $\\theta = 37^\\circ$ terhadap bidang datar ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$). Jika balok meluncur dengan kelajuan konstan (tanpa percepatan), besar koefisien gesekan kinetis $\\mu_k$ antara balok dan bidang miring adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "0,25",
      "0,60",
      "0,75",
      "0,80",
      "1,33"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kondisi kelajuan konstan pada bidang miring ($a = 0$): $\\Sigma F = 0 \\Rightarrow mg \\sin\\theta = \\mu_k mg \\cos\\theta \\Rightarrow \\mu_k = \\tan\\theta$.</div>",
      "steps": "<ol><li>$$\\mu_k = \\tan 37^\\circ = \\frac{\\sin 37^\\circ}{\\cos 37^\\circ} = \\frac{0{,}6}{0{,}8} = 0{,}75$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering terkecoh langsung memilih nilai $\\sin 37^\\circ = 0{,}60$ atau $\\cos 37^\\circ = 0{,}80$ bukannya menghitung rasio tangen kemiringan.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-gesek"
  },
  {
    "id": "sedang-fis-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Dinamika Bidang Miring Kasar",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah balok bermassa $m = 5\\text{ kg}$ meluncur menuruni bidang miring kasar dengan sudut kemiringan $\\theta = 37^\\circ$ ($\\sin 37^\\circ = 0{,}6$ dan $\\cos 37^\\circ = 0{,}8$). Koefisien gesekan kinetis antara balok dan permukaan bidang adalah $\\mu_k = 0{,}25$. Jika $g = 10\\text{ m/s}^2$, percepatan meluncur balok menuruni bidang miring tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}0\\text{ m/s}^2$",
      "$4{,}0\\text{ m/s}^2$",
      "$6{,}0\\text{ m/s}^2$",
      "$3{,}5\\text{ m/s}^2$",
      "$5{,}0\\text{ m/s}^2$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Hukum II Newton pada Bidang Miring Kasar:</strong><br>\n          1. Gaya normal tegak lurus bidang: $N = mg\\cos\\theta$<br>\n          2. Gaya gesek kinetis: $f_k = \\mu_k N = \\mu_k mg\\cos\\theta$<br>\n          3. Gaya penarik sejajar bidang menuruni kemiringan: $F_g = mg\\sin\\theta$<br>\n          4. Persamaan gerak: $\\Sigma F = ma \\implies mg\\sin\\theta - f_k = ma \\implies a = g(\\sin\\theta - \\mu_k\\cos\\theta)$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li><strong>Hitung Komponen Gaya:</strong><br>\n            Komponen berat sejajar bidang: $mg\\sin 37^\\circ = 5(10)(0{,}6) = 30\\text{ N}$.<br>\n            Gaya normal: $N = mg\\cos 37^\\circ = 5(10)(0{,}8) = 40\\text{ N}$.\n          </li>\n          <li><strong>Hitung Gaya Gesek Kinetis $(f_k)$:</strong><br>\n            $$f_k = \\mu_k N = 0{,}25 \\times 40 = 10\\text{ N}$$\n          </li>\n          <li><strong>Hitung Percepatan $(a)$:</strong><br>\n            $$a = \\frac{mg\\sin\\theta - f_k}{m} = \\frac{30 - 10}{5} = \\frac{20}{5} = 4{,}0\\text{ m/s}^2$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Jangan tertukar antara sinus dan kosinus pada bidang miring. Sudut kemiringan terhadap horizontal menggunakan $\\sin$ untuk gaya penarik sejajar bidang dan $\\cos$ untuk gaya normal tegak lurus bidang.\n        </div>\n      "
    },
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-gesek"
  },
  {
    "id": "fis-din-28",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah balok kayu $A$ bermassa $m_A = 2\\text{ kg}$ diletakkan di atas balok baja $B$ bermassa $m_B = 4\\text{ kg}$. Permukaan lantai horizontal tempat balok $B$ bertumpu licin sempurna, namun koefisien gesekan statis antara balok $A$ dan balok $B$ adalah $\\mu_s = 0{,}4$. Jika $g = 10\\text{ m/s}^2$, besar gaya dorong horizontal maksimum $F$ yang boleh diberikan pada balok bawah $B$ agar balok atas $A$ tidak tergelincir adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "8 N",
      "16 N",
      "20 N",
      "24 N",
      "32 N"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Sistem balok bertumpuk: percepatan maksimum balok atas dibatasi oleh gaya gesek statis maksimum ($f_{s,\\max} = \\mu_s m_A g$).</div>",
      "steps": "<ol><li>1) Percepatan maksimum balok $A$ tanpa selip: $a_{\\max} = \\frac{f_{s,\\max}}{m_A} = \\frac{\\mu_s m_A g}{m_A} = \\mu_s g = 0{,}4 \\times 10 = 4\\text{ m/s}^2$.<br>2) Menghitung gaya dorong luar maksimum pada kedua balok: $F_{\\max} = (m_A + m_B) a_{\\max} = (2 + 4) \\times 4 = 24\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering mengalikan $a_{\\max}$ hanya dengan massa balok bawah sehingga mendapatkan $F = 4 \\times 4 = 16\\text{ N}$ atau hanya menghitung gaya gesek $f_s = 8\\text{ N}$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-gesek"
  },
  {
    "id": "fis-din-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Gaya Gesek (Statis vs Kinetis)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah peti kemas mini bermassa $m = 5\\text{ kg}$ ditarik ke atas menaiki bidang miring kasar bersudut kemiringan $\\theta = 37^\\circ$ terhadap horizontal ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\text{ m/s}^2$). Gaya tarik sebesar $F = 50\\text{ N}$ bekerja sejajar bidang miring. Jika koefisien gesekan kinetis antara peti dan bidang miring adalah $\\mu_k = 0{,}25$, besar percepatan yang dialami peti saat bergerak menaiki bidang miring adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1 m/s²",
      "2 m/s²",
      "3 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton pada bidang miring dengan gesekan: $\\Sigma F_x = m \\cdot a$, di mana $W_x = mg \\sin\\theta$ dan $f_k = \\mu_k mg \\cos\\theta$.</div>",
      "steps": "<ol><li>1) Komponen berat tegak lurus bidang: $N = mg \\cos 37^\\circ = 5(10)(0{,}8) = 40\\text{ N}$.<br>2) Gaya gesek kinetis (menentang arah gerak ke atas): $f_k = \\mu_k N = 0{,}25 \\times 40 = 10\\text{ N}$.<br>3) Komponen berat sejajar bidang: $W_x = mg \\sin 37^\\circ = 5(10)(0{,}6) = 30\\text{ N}$.<br>4) Hukum II Newton sejajar bidang: $F - W_x - f_k = m \\cdot a \\Rightarrow 50 - 30 - 10 = 5a \\Rightarrow 10 = 5a \\Rightarrow a = 2\\text{ m/s}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa memperhitungkan gaya gesek kinetis sehingga memperoleh $a = \\frac{50 - 30}{5} = 4\\text{ m/s}^2$, atau salah menukar fungsi sinus dan kosinus pada komponen kemiringan.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-gesek"
  },
  {
    "id": "fis-din-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Gaya Gesek (Statis vs Kinetis)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah kotak peralatan bermassa $m = 10\\text{ kg}$ berada di atas lantai bengkel mendatar kasar dengan koefisien gesekan statis $\\mu_s = 0{,}5$ dan kinetis $\\mu_k = 0{,}3$. Kotak ditarik oleh seutas kawat dengan gaya $F = 50\\text{ N}$ yang membentuk sudut elevasi $\\theta = 37^\\circ$ terhadap garis horizontal ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\text{ m/s}^2$). Keadaan gerak dan percepatan balok tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Diam karena gaya tarik horizontal lebih kecil dari berat kotak",
      "Bergerak dengan percepatan 0,5 m/s²",
      "Bergerak dengan percepatan 1,0 m/s²",
      "Bergerak dengan percepatan 1,5 m/s²",
      "Bergerak dengan percepatan 1,9 m/s²"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Analisis ambang gerak ($F_x$ vs $f_{s,\\max}$) dengan modifikasi gaya normal akibat gaya tarik bersudut.</div>",
      "steps": "<ol><li>1) Penguraian gaya tarik: $F_x = F \\cos 37^\\circ = 40\\text{ N}$, $F_y = F \\sin 37^\\circ = 30\\text{ N}$.<br>2) Gaya normal: $N = mg - F_y = 10(10) - 30 = 70\\text{ N}$.<br>3) Gaya gesek statis maksimum: $f_{s,\\max} = \\mu_s N = 0{,}5 \\times 70 = 35\\text{ N}$. Karena $F_x = 40\\text{ N} > 35\\text{ N}$, kotak bergerak!<br>4) Gaya gesek kinetis saat bergerak: $f_k = \\mu_k N = 0{,}3 \\times 70 = 21\\text{ N}$.<br>5) Percepatan: $a = \\frac{F_x - f_k}{m} = \\frac{40 - 21}{10} = 1{,}9\\text{ m/s}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengabaikan $F_y$ dalam menghitung gaya normal (menganggap $N = mg = 100\\text{ N}$), sehingga menghasilkan $f_k = 30\\text{ N}$ dan $a = 1{,}0\\text{ m/s}^2$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-gesek"
  },
  {
    "id": "fis-din-31",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Gaya Gesek (Statis vs Kinetis)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah balok bermassa $m = 4\\text{ kg}$ ditekan merapat ke langit-langit atap datar oleh gaya dorong vertikal ke atas sebesar $F_v = 70\\text{ N}$. Koefisien gesekan kinetis antara balok dan permukaan langit-langit atap adalah $\\mu_k = 0{,}20$. Jika balok kemudian ditarik secara horizontal dengan gaya tetap $F_h = 20\\text{ N}$ ($g = 10\\text{ m/s}^2$), besar percepatan horizontal balok adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "3,5 m/s²",
      "4,0 m/s²",
      "4,5 m/s²",
      "5,0 m/s²",
      "5,5 m/s²"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Gaya normal pada langit-langit atap: $N = F_v - mg$ dan Hukum II Newton horizontal: $F_h - f_k = m \\cdot a$.</div>",
      "steps": "<ol><li>1) Gaya vertikal: $\\Sigma F_y = 0 \\Rightarrow F_v - mg - N = 0 \\Rightarrow N = 70 - 4(10) = 30\\text{ N}$.<br>2) Gaya gesek kinetis langit-langit: $f_k = \\mu_k N = 0{,}20 \\times 30 = 6\\text{ N}$.<br>3) Percepatan horizontal: $a = \\frac{F_h - f_k}{m} = \\frac{20 - 6}{4} = \\frac{14}{4} = 3{,}5\\text{ m/s}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengira $N = mg = 40\\text{ N}$ atau salah menghitung $N = F_v + mg = 110\\text{ N}$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-gesek"
  },
  {
    "id": "fis-din-32",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-gesek",
    "category": "Gaya Gesek (Statis vs Kinetis)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah balok bermassa $m = 6\\text{ kg}$ berada pada bidang miring kasar dengan sudut kemiringan $\\theta = 37^\\circ$ terhadap horizontal ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\text{ m/s}^2$). Koefisien gesekan kinetis antara balok dan bidang miring adalah $\\mu_k = 0{,}50$. Balok didorong ke bawah sejajar bidang miring dengan gaya luar $F = 18\\text{ N}$. Besar percepatan gerak balok menuruni bidang miring adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2 m/s²",
      "3 m/s²",
      "4 m/s²",
      "5 m/s²",
      "6 m/s²"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton balok didorong menuruni bidang miring kasar: $\\Sigma F_x = F + mg \\sin\\theta - f_k = m \\cdot a$.</div>",
      "steps": "<ol><li>1) Komponen berat tegak lurus bidang: $N = mg \\cos 37^\\circ = 6(10)(0{,}8) = 48\\text{ N}$.<br>2) Gaya gesek kinetis (menentang arah gerak turun): $f_k = \\mu_k N = 0{,}50 \\times 48 = 24\\text{ N}$.<br>3) Komponen berat sejajar bidang: $W_x = mg \\sin 37^\\circ = 6(10)(0{,}6) = 36\\text{ N}$.<br>4) Resultan gaya searah kemiringan: $\\Sigma F = F + W_x - f_k = 18 + 36 - 24 = 30\\text{ N}$.<br>5) Percepatan: $a = \\frac{30}{6} = 5\\text{ m/s}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Keliru menentukan arah gaya gesek (menambahkan gaya gesek ke arah bawah), atau salah menghitung $W_x$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Gesek Statis dan Kinetis",
    "subTopic": "Gaya Gesek Statis dan Kinetis",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-gesek"
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
