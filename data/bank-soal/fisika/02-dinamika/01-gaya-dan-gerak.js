/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Sub-topik: Hubungan Gaya dan Gerak (fis-din-1)
 * Indikator: Hukum I Newton (kelembaman); Hukum II Newton; Hukum III Newton; penguraian diagram gaya (berat, normal, gesek statis/kinetis, tegangan tali).
 * 
 * Total Butir Soal: 34 Soal (Mudah: 17, Sedang: 17, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-1";
  const questions = [
  {
    "id": "mudah-fis-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
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
    }
  },
  {
    "id": "fis-din-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang siswa bermassa $50\\text{ kg}$ berdiri di atas timbangan badan di dalam lift hotel yang sedang bergerak turun dengan perlambatan konstan $2\\text{ m/s}^2$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, angka gaya desak normal yang ditunjukkan oleh timbangan adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "400 N",
      "500 N",
      "600 N",
      "700 N",
      "800 N"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton pada kerangka acuan vertikal: $\\Sigma F_y = m \\cdot a$.</div>",
      "steps": "<ol><li>Lift bergerak turun dengan perlambatan, yang berarti vektor percepatan sistem mengarah ke atas ($a = +2\\text{ m/s}^2$). Persamaan gaya normal pada siswa: $N - W = m \\cdot a \\Rightarrow N = m(g + a) = 50(10 + 2) = 600\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering terkecoh menganggap gerakan turun selalu menghasilkan $N = m(g - a) = 400\\text{ N}$, tanpa memperhatikan kata 'perlambatan' yang membalik arah vektor percepatan ke atas.</div>"
    }
  },
  {
    "id": "fis-din-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
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
    }
  },
  {
    "id": "fis-din-25",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah paket kargo bermassa $10\\text{ kg}$ tergantung pada neraca pegas di langit-langit lift gudang. Jika kabel penggantung lift tiba-tiba putus sehingga lift jatuh bebas di bawah pengaruh gravitasi ($g = 10\\text{ m/s}^2$), angka skala yang terbaca pada neraca pegas selama lift jatuh bebas adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "0 N",
      "50 N",
      "100 N",
      "150 N",
      "200 N"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kondisi jatuh bebas dan bobot semu: saat percepatan sistem $a = g$ ke bawah, berat semu bernilai nol (keadaan tanpa bobot / weightlessness).</div>",
      "steps": "<ol><li>Persamaan gaya pada neraca pegas: $mg - T = ma$. Karena lift jatuh bebas ($a = g$), maka: $T = m(g - a) = m(g - g) = 0\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering mengira pegas tetap menunjukkan berat sejati benda $mg = 100\\text{ N}$ karena mengabaikan percepatan kerangka acuan lift.</div>"
    }
  },
  {
    "id": "fis-din-26",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
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
    }
  },
  {
    "id": "fis-din-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
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
    }
  },
  {
    "id": "fis-din-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
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
    }
  },
  {
    "id": "fis-din-29",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
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
    }
  },
  {
    "id": "fis-din-30",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
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
    }
  },
  {
    "id": "fis-din-09",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Sistem Tali & Katrol",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah beban $m_1 = 3\\text{ kg}$ dan $m_2 = 2\\text{ kg}$ dihubungkan dengan tali ringan tak bermassa melalui sebuah katrol tetap yang licin (mesin Atwood vertikal). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar percepatan gerak kedua beban saat sistem dilepas dari keadaan diam adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1 m/s²",
      "2 m/s²",
      "3 m/s²",
      "4 m/s²",
      "5 m/s²"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton pada mesin Atwood vertikal: $a = \\frac{m_1 - m_2}{m_1 + m_2} g$.</div>",
      "steps": "<ol><li>Selisih gaya penggerak gravitasi dibagi massa total kedua benda:<br>$$a = \\frac{m_1 - m_2}{m_1 + m_2} g = \\frac{3 - 2}{3 + 2} \\times 10 = \\frac{1}{5} \\times 10 = 2\\text{ m/s}^2$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Seringkali siswa salah membagi dengan selisih massa atau hanya membagi dengan salah satu massa benda.</div>"
    }
  },
  {
    "id": "fis-din-10",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Sistem Tali & Katrol",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah balok $A$ bermassa $3\\text{ kg}$ berada di atas meja datar yang licin tanpa gesekan. Balok $A$ dihubungkan dengan tali ringan melalui katrol licin di tepi meja ke balok gantung $B$ bermassa $2\\text{ kg}$. Jika sistem dilepas dari keadaan diam dan $g = 10\\text{ m/s}^2$, besar gaya tegangan tali selama kedua balok bergerak adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "6 N",
      "8 N",
      "12 N",
      "16 N",
      "20 N"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Sistem balok meja horizontal licin terhubung katrol: $a = \\frac{m_B g}{m_A + m_B}$ dan $T = m_A \\cdot a$.</div>",
      "steps": "<ol><li>1) Percepatan sistem: $a = \\frac{m_B g}{m_A + m_B} = \\frac{2 \\times 10}{3 + 2} = \\frac{20}{5} = 4\\text{ m/s}^2$.<br>2) Menghitung tegangan tali melalui balok $A$: $T = m_A \\cdot a = 3\\text{ kg} \\times 4\\text{ m/s}^2 = 12\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengira tegangan tali sama dengan gaya berat balok gantung ($T = m_B g = 20\\text{ N}$), padahal saat balok bergerak dipercepat ke bawah, $T < W_B$.</div>"
    }
  },
  {
    "id": "fis-din-33",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Sistem Tali & Katrol",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah sangkar mini derek material proyek bermassa total $M = 250\\text{ kg}$ ditarik ke atas secara vertikal oleh kabel baja mesin kerek dengan percepatan konstan $a = 2\\text{ m/s}^2$. Jika $g = 10\\text{ m/s}^2$, besar gaya tegangan pada kabel baja penarik tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2000 N",
      "3000 N",
      "2500 N",
      "3500 N",
      "4000 N"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton pada kabel derek vertikal: $T - Mg = M \\cdot a \\Rightarrow T = M(g + a)$.</div>",
      "steps": "<ol><li>$$T = 250(10 + 2) = 250 \\times 12 = 3000\\text{ N}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Hanya menghitung berat sangkar $Mg = 2500\\text{ N}$ tanpa menambahkan gaya inersia pengangkatan.</div>"
    }
  },
  {
    "id": "fis-din-34",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Sistem Tali & Katrol",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua benda $m_1 = 4\\text{ kg}$ dan $m_2 = 1\\text{ kg}$ digantungkan pada ujung-ujung seutas tali ringan melalui katrol tetap licin tanpa massa. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya tegangan tali penghubung selama kedua benda bergerak dipercepat adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "8 N",
      "10 N",
      "12 N",
      "14 N",
      "16 N"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Tegangan tali mesin Atwood vertikal: $T = \\frac{2 m_1 m_2}{m_1 + m_2} g$.</div>",
      "steps": "<ol><li>1) Percepatan sistem: $a = \\frac{4 - 1}{4 + 1} \\times 10 = \\frac{3}{5} \\times 10 = 6\\text{ m/s}^2$.<br>2) Tegangan tali (tinjau $m_2$ yang bergerak naik): $T - m_2 g = m_2 a \\Rightarrow T = 1(10 + 6) = 16\\text{ N}$.<br>(Alternatif rumus langsung: $T = \\frac{2(4)(1)}{4 + 1} \\times 10 = \\frac{80}{5} = 16\\text{ N}$).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Seringkali siswa menjawab rata-rata berat kedua benda $\\frac{40 + 10}{2} = 25\\text{ N}$ atau salah menjumlahkan.</div>"
    }
  },
  {
    "id": "fis-din-17",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Gravitasi Universal Newton",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Percepatan gravitasi pada permukaan bumi yang berjari-jari $R$ adalah $g = 10\\text{ m/s}^2$. Sebuah satelit pengamat cuaca mengorbit bumi pada lintasan lingkaran pada ketinggian $h = R$ di atas permukaan bumi. Besar percepatan gravitasi yang dirasakan oleh satelit tersebut pada orbitnya adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1,25 m/s²",
      "2,5 m/s²",
      "5,0 m/s²",
      "7,5 m/s²",
      "10,0 m/s²"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum kuadrat terbalik kuat medan gravitasi: $g(r) = G \\frac{M}{r^2}$ dengan jarak diukur dari pusat massa bumi ($r = R + h$).</div>",
      "steps": "<ol><li>1) Jarak satelit dari pusat bumi: $r = R + h = R + R = 2R$.<br>2) Kuat medan gravitasi pada ketinggian tersebut:<br>$$g' = g \\left(\\frac{R}{r}\\right)^2 = 10 \\left(\\frac{R}{2R}\\right)^2 = 10 \\times \\frac{1}{4} = 2{,}5\\text{ m/s}^2$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering lupa mengkuadratkan perbandingan jarak ($10 / 2 = 5{,}0\\text{ m/s}^2$) atau lupa bahwa jarak harus dihitung dari pusat bumi.</div>"
    }
  },
  {
    "id": "fis-din-18",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Gravitasi Universal Newton",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah eksoplanet baru yang ditemukan oleh teleskop antariksa memiliki massa dua kali massa bumi ($M_P = 2 M_B$) dan jari-jari setengah dari jari-jari bumi ($R_P = 0{,}5 R_B$). Jika kuat medan gravitasi di permukaan bumi bernilai $g$, maka kuat medan gravitasi di permukaan eksoplanet tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "g",
      "2g",
      "4g",
      "8g",
      "16g"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Perbandingan kuat medan gravitasi permukaan planet: $g = G \\frac{M}{R^2}$.</div>",
      "steps": "<ol><li>$$\\frac{g_P}{g_B} = \\left(\\frac{M_P}{M_B}\\right) \\left(\\frac{R_B}{R_P}\\right)^2 = (2) \\left(\\frac{1}{0{,}5}\\right)^2 = 2 \\times 4 = 8 \\Rightarrow g_P = 8g$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa mengkuadratkan jari-jari sehingga menghitung $\\frac{2}{0{,}5} = 4g$.</div>"
    }
  },
  {
    "id": "fis-din-41",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Gravitasi Universal Newton",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah bola baja raksasa bermassa $m_1 = 4000\\text{ kg}$ dan $m_2 = 9000\\text{ kg}$ terpisah sejauh $r = 6\\text{ meter}$ antar-pusat massanya. Jika $G$ adalah konstanta gravitasi universal Newton, besar gaya gravitasi tarik-menarik antara kedua bola tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "10⁴ G N",
      "10⁵ G N",
      "10⁶ G N",
      "6 × 10⁶ G N",
      "36 × 10⁶ G N"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum Gravitasi Universal Newton: $F = G \\frac{m_1 m_2}{r^2}$.</div>",
      "steps": "<ol><li>$$F = G \\frac{(4000)(9000)}{6^2} = G \\frac{36 \\times 10^6}{36} = 10^6 G\\text{ N}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa mengkuadratkan jarak pemisah di penyebut ($r^2 = 36$ bukan $6$).</div>"
    }
  },
  {
    "id": "fis-din-42",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Gravitasi Universal Newton",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang astronot memiliki berat $W = 600\\text{ N}$ di permukaan bumi. Jika astronot tersebut mendarat di permukaan sebuah planet baru yang memiliki massa $3$ kali massa bumi ($M_P = 3 M_B$) dan jari-jari $2$ kali jari-jari bumi ($R_P = 2 R_B$), berat astronot tersebut di permukaan planet baru adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "300 N",
      "400 N",
      "450 N",
      "450 N",
      "900 N"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Perbandingan gaya berat benda pada dua planet: $W \\propto \\frac{M}{R^2}$.</div>",
      "steps": "<ol><li>$$\\frac{W_P}{W_B} = \\left(\\frac{M_P}{M_B}\\right) \\left(\\frac{R_B}{R_P}\\right)^2 = (3) \\left(\\frac{1}{2}\\right)^2 = \\frac{3}{4} \\Rightarrow W_P = \\frac{3}{4} \\times 600 = 450\\text{ N}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengabaikan pengkuadratan jari-jari sehingga menghitung $\\frac{3}{2} \\times 600 = 900\\text{ N}$.</div>"
    }
  },
  {
    "id": "sedang-fis-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
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
    }
  },
  {
    "id": "fis-din-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seorang teknisi bermassa $60\\text{ kg}$ berada di dalam sangkar lift konstruksi bermassa $140\\text{ kg}$ (massa total $200\\text{ kg}$). Sangkar ditarik ke atas oleh kabel baja crane dengan gaya tegangan tali $T = 2500\\text{ N}$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar gaya desak kaki teknisi terhadap lantai lift konstruksi tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "600 N",
      "650 N",
      "700 N",
      "750 N",
      "850 N"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Penggabungan Hukum II Newton sistem gabungan (lift + muatan) dan analisis gaya kontak internal.</div>",
      "steps": "<ol><li>1) Menghitung percepatan seluruh sistem ke atas:<br>$\\Sigma F_y = M_{\\text{total}} \\cdot a \\Rightarrow T - M_{\\text{total}} g = M_{\\text{total}} \\cdot a$<br>$2500 - 200(10) = 200 a \\Rightarrow 500 = 200 a \\Rightarrow a = 2{,}5\\text{ m/s}^2$.<br>2) Menghitung gaya desak kaki (gaya normal) pada teknisi ($m = 60\\text{ kg}$):<br>$N - mg = m \\cdot a \\Rightarrow N = m(g + a) = 60(10 + 2{,}5) = 750\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering langsung menjawab berat sejati $mg = 600\\text{ N}$ karena lupa menghitung percepatan sistem, atau salah memasukkan massa total saat meninjau gaya normal teknisi.</div>"
    }
  },
  {
    "id": "fis-din-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua balok ditumpuk secara vertikal di atas lantai mendatar yang licin tanpa gesekan. Balok bawah bermassa $M = 8\\text{ kg}$ dan balok atas bermassa $m = 2\\text{ kg}$. Balok atas ditarik oleh seutas tali dengan gaya $F = 50\\text{ N}$ yang membentuk sudut elevasi $\\theta = 37^\\circ$ terhadap horizontal ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$). Jika kedua balok tetap bergerak bersamaan secara horizontal tanpa terangkat dari lantai ($g = 10\\text{ m/s}^2$), besar gaya normal yang dikerjakan lantai terhadap balok bawah $M$ adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "50 N",
      "70 N",
      "80 N",
      "100 N",
      "130 N"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kesetimbangan gaya vertikal multi-benda dengan gaya eksternal bersudut: $\\Sigma F_y = 0$.</div>",
      "steps": "<ol><li>Tinjau sistem gabungan ($M + m$) pada sumbu vertikal ($y$):<br>$\\Sigma F_y = 0 \\Rightarrow N_{\\text{lantai}} + F \\sin 37^\\circ - (M + m)g = 0$<br>$N_{\\text{lantai}} + 50(0{,}6) - (8 + 2)(10) = 0$<br>$N_{\\text{lantai}} + 30 - 100 = 0 \\Rightarrow N_{\\text{lantai}} = 70\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa kerap lupa mengikutsertakan komponen vertikal gaya tarik luar ($F \\sin\\theta$) atau keliru hanya menghitung berat balok bawah ($N = Mg = 80\\text{ N}$).</div>"
    }
  },
  {
    "id": "fis-din-27",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seorang antariksawan bermassa $70\\text{ kg}$ berada di kursi kabin roket luar angkasa saat peluncuran vertikal ke atas. Roket mengalami percepatan konstan sebesar $a = 30\\text{ m/s}^2$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya tekan normal yang dialami antariksawan tersebut terhadap sandaran kursinya adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2100 N",
      "2800 N",
      "3500 N",
      "4200 N",
      "4900 N"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton pada kerangka acuan vertikal mengalami akselerasi tinggi ($g$-force): $N = m(g + a)$.</div>",
      "steps": "<ol><li>Persamaan gerak vertikal: $N - mg = ma \\Rightarrow N = m(g + a) = 70(10 + 30) = 70 \\times 40 = 2800\\text{ N}$. Antariksawan merasakan gaya 4 kali berat badannya ($4g$).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Hanya menghitung gaya inersia $ma = 2100\\text{ N}$ tanpa menambahkan gaya berat $mg = 700\\text{ N}$.</div>"
    }
  },
  {
    "id": "fis-din-28",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
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
    }
  },
  {
    "id": "fis-din-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
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
    }
  },
  {
    "id": "fis-din-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
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
    }
  },
  {
    "id": "fis-din-31",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
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
    }
  },
  {
    "id": "fis-din-32",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
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
    }
  },
  {
    "id": "fis-din-11",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Sistem Tali & Katrol",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah balok kayu $A$ bermassa $m_A = 4\\text{ kg}$ diletakkan pada permukaan meja horizontal kasar dengan koefisien gesekan kinetis $\\mu_k = 0{,}25$. Balok $A$ dihubungkan oleh seutas tali ringan melalui katrol licin tanpa gesekan di ujung meja dengan balok beban $B$ bermassa $m_B = 6\\text{ kg}$ yang tergantung bebas secara vertikal. Jika sistem dilepaskan dan $g = 10\\text{ m/s}^2$, besar gaya tegangan tali selama sistem bergerak adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "18 N",
      "24 N",
      "30 N",
      "40 N",
      "60 N"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Penggabungan gaya gesek kinetis permukaan horizontal dengan dinamika sistem katrol dua benda terhubung.</div>",
      "steps": "<ol><li>1) Gaya normal dan gaya gesek pada balok $A$: $N_A = m_A g = 40\\text{ N} \\Rightarrow f_k = \\mu_k N_A = 0{,}25 \\times 40 = 10\\text{ N}$.<br>2) Gaya berat beban $B$: $W_B = m_B g = 60\\text{ N}$.<br>3) Percepatan sistem: $a = \\frac{W_B - f_k}{m_A + m_B} = \\frac{60 - 10}{4 + 6} = \\frac{50}{10} = 5\\text{ m/s}^2$.<br>4) Tegangan tali (tinjau balok $B$): $W_B - T = m_B a \\Rightarrow T = 60 - 6(5) = 30\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa lupa mengurangkan gaya gesek kinetis pada gaya penarik sistem, atau keliru menghitung $T = f_k = 10\\text{ N}$ seolah sistem berada dalam kesetimbangan statis.</div>"
    }
  },
  {
    "id": "fis-din-12",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Sistem Tali & Katrol",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah balok $A$ bermassa $5\\text{ kg}$ terletak pada bidang miring licin yang memiliki sudut kemiringan $\\theta = 30^\\circ$ ($\\sin 30^\\circ = 0{,}5$). Balok $A$ dihubungkan oleh seutas tali melalui katrol licin di puncak bidang miring ke balok gantung $B$ yang juga bermassa $5\\text{ kg}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar percepatan gerak kedua balok tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2,5 m/s²",
      "3,5 m/s²",
      "5,0 m/s²",
      "7,5 m/s²",
      "10,0 m/s²"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Dinamika sistem katrol bidang miring licin terhubung beban vertikal: $a = \\frac{m_B g - m_A g \\sin\\theta}{m_A + m_B}$.</div>",
      "steps": "<ol><li>1) Komponen berat $A$ sejajar bidang miring: $W_{Ax} = m_A g \\sin 30^\\circ = 5(10)(0{,}5) = 25\\text{ N}$.<br>2) Berat beban gantung $B$: $W_B = m_B g = 50\\text{ N}$.<br>3) Karena $W_B > W_{Ax}$, balok $B$ bergerak turun dan $A$ bergerak naik.<br>4) Percepatan sistem: $a = \\frac{W_B - W_{Ax}}{m_A + m_B} = \\frac{50 - 25}{5 + 5} = \\frac{25}{10} = 2{,}5\\text{ m/s}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Hanya membagi resultan gaya dengan massa salah satu benda ($a = 25 / 5 = 5{,}0\\text{ m/s}^2$), atau mengira kedua massa yang sama ($5\\text{ kg}$ dan $5\\text{ kg}$) pasti berada dalam keadaan diam setimbang.</div>"
    }
  },
  {
    "id": "fis-din-35",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Sistem Tali & Katrol",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua buah balok $A$ ($m_A = 5\\text{ kg}$) dan $B$ ($m_B = 5\\text{ kg}$) diletakkan pada sistem bidang miring ganda yang licin tanpa gesekan. Balok $A$ berada pada kemiringan $\\theta_A = 53^\\circ$ ($\\sin 53^\\circ = 0{,}8$) dan balok $B$ berada pada kemiringan $\\theta_B = 37^\\circ$ ($\\sin 37^\\circ = 0{,}6$). Kedua balok dihubungkan oleh seutas tali ringan melalui katrol licin di puncak pertemuan kedua bidang miring. Jika $g = 10\\text{ m/s}^2$, besar percepatan dan tegangan tali penghubung kedua balok adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "a = 1 m/s² dan T = 35 N",
      "a = 1 m/s² dan T = 40 N",
      "a = 2 m/s² dan T = 30 N",
      "a = 2 m/s² dan T = 35 N",
      "a = 0 m/s² dan T = 30 N"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Sistem katrol bidang miring ganda: $a = \\frac{m_A g \\sin\\theta_A - m_B g \\sin\\theta_B}{m_A + m_B}$.</div>",
      "steps": "<ol><li>1) Gaya penggerak $A$: $W_{Ax} = 5(10)(0{,}8) = 40\\text{ N}$ menuruni bidang $A$.<br>2) Gaya penahan $B$: $W_{Bx} = 5(10)(0{,}6) = 30\\text{ N}$ menuruni bidang $B$.<br>3) Percepatan sistem: $a = \\frac{40 - 30}{5 + 5} = \\frac{10}{10} = 1\\text{ m/s}^2$.<br>4) Tegangan tali (tinjau balok $B$ yang tertarik naik): $T - W_{Bx} = m_B a \\Rightarrow T = 30 + 5(1) = 35\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa mengira karena massa kedua balok sama ($5\\text{ kg}$ dan $5\\text{ kg}$), sistem otomatis diam setimbang ($a = 0$).</div>"
    }
  },
  {
    "id": "fis-din-36",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Sistem Tali & Katrol",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah balok $A$ ($m_A = 3\\text{ kg}$) berada di atas meja mendatar kasar dengan koefisien gesekan kinetis $\\mu_k = 0{,}20$. Balok $A$ dihubungkan tali melalui katrol licin di ujung kanan meja ke beban gantung $B$ ($m_B = 2\\text{ kg}$). Balok $A$ ditarik ke arah kiri oleh gaya luar horizontal $F = 36\\text{ N}$ sehingga sistem bergerak ke kiri dan balok $B$ terangkat naik. Jika $g = 10\\text{ m/s}^2$, percepatan gerak sistem tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1 m/s²",
      "1,5 m/s²",
      "2 m/s²",
      "2,5 m/s²",
      "3 m/s²"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton pada sistem katrol dengan gaya tarik eksternal berlawanan arah gerak beban gantung.</div>",
      "steps": "<ol><li>1) Karena balok $A$ bergerak ke kiri, gaya gesek kinetis pada $A$ mengarah ke kanan: $f_k = \\mu_k m_A g = 0{,}20 \\times 30 = 6\\text{ N}$.<br>2) Gaya berat beban $B$ yang harus diangkat ke atas: $W_B = m_B g = 20\\text{ N}$.<br>3) Resultan gaya penggerak ke kiri: $\\Sigma F = F - f_k - W_B = 36 - 6 - 20 = 10\\text{ N}$.<br>4) Percepatan sistem: $a = \\frac{\\Sigma F}{m_A + m_B} = \\frac{10}{3 + 2} = \\frac{10}{5} = 2\\text{ m/s}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Salah menentukan arah gaya gesek kinetis (mengira gaya gesek mengarah ke kiri bersama $F$).</div>"
    }
  },
  {
    "id": "fis-din-19",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Gravitasi Universal Newton",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua buah benda angkasa $M_1$ dan $M_2$ berada pada posisi tetap dan terpisah sejauh $d$. Diketahui massa benda pertama adalah sembilan kali massa benda kedua ($M_1 = 9 M_2$). Sebuah wahana antariksa tak berawak melintas di sepanjang garis hubung kedua benda. Jarak wahana dari benda pertama $M_1$ agar resultan medan gravitasi total yang dialami wahana bernilai nol adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "0,25 d",
      "0,33 d",
      "0,50 d",
      "0,60 d",
      "0,75 d"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Titik netral gravitasi: kesetimbangan kuat medan gravitasi dua sumber massa segaris ($g_1 = g_2$).</div>",
      "steps": "<ol><li>Misalkan jarak dari $M_1$ adalah $x$, maka jarak dari $M_2$ adalah $d - x$.<br>$$G \\frac{M_1}{x^2} = G \\frac{M_2}{(d - x)^2} \\Rightarrow \\frac{9 M_2}{x^2} = \\frac{M_2}{(d - x)^2}$$<br>Tarik akar kedua ruas: $\\frac{3}{x} = \\frac{1}{d - x} \\Rightarrow 3(d - x) = x \\Rightarrow 3d = 4x \\Rightarrow x = \\frac{3}{4}d = 0{,}75 d$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering memilih opsi $0{,}25 d$ yang merupakan jarak titik netral dari benda kedua ($M_2$), bukan dari benda pertama ($M_1$).</div>"
    }
  },
  {
    "id": "fis-din-20",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Gravitasi Universal Newton",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah satelit komunikasi bermassa $m$ bergerak dalam lintasan orbit lingkaran stabil mengelilingi bumi pada ketinggian $h = 3R$ di atas permukaan bumi, dengan $R$ adalah jari-jari bumi. Jika percepatan gravitasi di permukaan bumi adalah $g$, kelajuan orbit satelit tersebut dinyatakan dalam variabel $g$ dan $R$ adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1/4 √(gR)",
      "1/3 √(gR)",
      "1/2 √(gR)",
      "√(gR)",
      "2 √(gR)"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kelajuan orbit satelit lingkaran: gaya gravitasi bumi bertindak sebagai gaya sentripetal ($\\frac{G M m}{r^2} = \\frac{m v^2}{r}$).</div>",
      "steps": "<ol><li>1) Jarak orbit dari pusat bumi: $r = R + h = R + 3R = 4R$.<br>2) Kelajuan orbit: $v = \\sqrt{\\frac{GM}{r}}$.<br>3) Hubungan konstanta permukaan: $g = \\frac{GM}{R^2} \\Rightarrow GM = g R^2$.<br>4) Substitusi: $v = \\sqrt{\\frac{g R^2}{4R}} = \\sqrt{\\frac{g R}{4}} = \\frac{1}{2}\\sqrt{g R}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengabaikan penambahan jari-jari bumi ($r = 3R$ bukan $4R$), atau lupa menarik akar kuadrat dari angka 4 di penyebut.</div>"
    }
  },
  {
    "id": "fis-din-43",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Gravitasi Universal Newton",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua buah satelit riset $A$ dan $B$ mengorbit bumi dalam lintasan lingkaran. Satelit $A$ mengorbit dengan jari-jari orbit $r_A = R$ dan memiliki periode revolusi $T_A = 8\\text{ hari}$. Jika satelit $B$ mengorbit dengan jari-jari orbit $r_B = 4R$, periode revolusi satelit $B$ mengelilingi bumi adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "32 hari",
      "64 hari",
      "96 hari",
      "128 hari",
      "256 hari"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum III Kepler: perbandingan kuadrat periode revolusi sama dengan perbandingan pangkat tiga jari-jari orbit ($\\frac{T_B^2}{T_A^2} = \\frac{r_B^3}{r_A^3}$).</div>",
      "steps": "<ol><li>$$\\left(\\frac{T_B}{T_A}\\right)^2 = \\left(\\frac{r_B}{r_A}\\right)^3 = \\left(\\frac{4R}{R}\\right)^3 = 64 \\Rightarrow \\frac{T_B}{T_A} = \\sqrt{64} = 8 \\Rightarrow T_B = 8 \\times T_A = 8 \\times 8 = 64\\text{ hari}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Hanya menggunakan perbandingan linear ($4 \\times 8 = 32\\text{ hari}$) tanpa menerapkan aturan pangkat $T^2 \\propto r^3$.</div>"
    }
  },
  {
    "id": "fis-din-44",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-1",
    "category": "Gravitasi Universal Newton",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Kelajuan lepas (*escape velocity*) sebuah pesawat antariksa dari permukaan bumi adalah $v_{\\text{lepas}} = \\sqrt{\\frac{2GM}{R}}$. Pada sebuah planet super yang memiliki massa $8$ kali massa bumi ($M_P = 8 M_B$) dan jari-jari $2$ kali jari-jari bumi ($R_P = 2 R_B$), kelajuan lepas roket dari permukaan planet tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2 v_lepas",
      "4 v_lepas",
      "√2 v_lepas",
      "2√2 v_lepas",
      "8 v_lepas"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kelajuan lepas medan gravitasi: $v_{\\text{lepas}} = \\sqrt{\\frac{2GM}{R}}$.</div>",
      "steps": "<ol><li>$$\\frac{v_{\\text{lepas}, P}}{v_{\\text{lepas}, B}} = \\sqrt{\\left(\\frac{M_P}{M_B}\\right) \\left(\\frac{R_B}{R_P}\\right)} = \\sqrt{\\frac{8}{2}} = \\sqrt{4} = 2 \\Rightarrow v_{\\text{lepas}, P} = 2 v_{\\text{lepas}, B}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa menarik tanda akar kuadrat dari rasio $\\frac{8}{2} = 4$, sehingga menjawab $4 v_{\\text{lepas}}$.</div>"
    }
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
