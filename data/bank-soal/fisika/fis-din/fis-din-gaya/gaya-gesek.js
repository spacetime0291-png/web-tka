/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Gaya dan Gerak (fis-din-gaya)
 * Sub-Bab: Gaya Gesek Statis dan Kinetis (fis-din-gaya-gesek)
 * Slug: gaya-gesek
 * Indikator: Gaya gesek statis maksimum (f_s = mu_s * N), gesek kinetis (f_k = mu_k * N), dan penentuan kondisi gerak.
 * 
 * Total Butir Soal: 13 (Mudah: 7, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-gaya-gesek";
  const subTopicSlug = "gaya-gesek";
  const questions = [
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
