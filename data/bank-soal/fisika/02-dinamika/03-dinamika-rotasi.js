/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Sub-topik: Dinamika Rotasi (fis-din-3)
 * Indikator: Momen gaya (torsi); momen inersia benda tegar; Hukum Newton gerak rotasi (\Sigma \tau = I\alpha).
 * 
 * Total Butir Soal: 22 Soal (Mudah: 9, Sedang: 12, HOTS: 1)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-3";
  const questions = [
  {
    "id": "fis-din-21",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Dinamika Rotasi & Benda Menggelinding",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang teknisi mesin menggunakan kunci pas bergagang panjang $L = 40\\text{ cm}$ ($0{,}4\\text{ m}$) untuk mengencangkan sebuah mur poros roda. Teknisi tersebut menarik ujung gagang kunci dengan gaya sebesar $F = 50\\text{ N}$ yang membentuk sudut $30^\\circ$ terhadap arah memanjang gagang kunci pas. Besar momen gaya (torsi) yang dihasilkan terhadap titik pusat mur adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "10 N·m",
      "15 N·m",
      "17,3 N·m",
      "20 N·m",
      "25 N·m"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Definisi torsi (momen gaya): $\\tau = F \\cdot r \\cdot \\sin\\theta$.</div>",
      "steps": "<ol><li>Lengan gaya $r = 0{,}4\\text{ m}$, $F = 50\\text{ N}$, dan sudut $\\theta = 30^\\circ$.<br>$$\\tau = F \\cdot r \\cdot \\sin 30^\\circ = 50 \\times 0{,}4 \\times 0{,}5 = 10\\text{ N}\\cdot\\text{m}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengabaikan sudut kemiringan (menganggap tegak lurus $\\tau = 50 \\times 0{,}4 = 20\\text{ N}\\cdot\\text{m}$) atau keliru menggunakan fungsi $\\cos 30^\\circ$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "fis-din-22",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Dinamika Rotasi & Benda Menggelinding",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah roda gila berbentuk silinder pejal homogen bermassa $M = 10\\text{ kg}$ dan jari-jari $R = 0{,}2\\text{ meter}$ dipasang pada poros putar licin di pusatnya ($I = \\frac{1}{2} M R^2$). Sebuah tali ringan dililitkan pada sekeliling tepi silinder dan ditarik dengan gaya tangensial tetap sebesar $F = 30\\text{ N}$. Besar percepatan sudut rotasi yang timbul pada silinder pejal tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "15 rad/s²",
      "20 rad/s²",
      "25 rad/s²",
      "30 rad/s²",
      "60 rad/s²"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton untuk gerak rotasi: $\\Sigma \\tau = I \\cdot \\alpha$.</div>",
      "steps": "<ol><li>1) Torsi dari gaya tangensial: $\\tau = F \\cdot R = 30 \\times 0{,}2 = 6\\text{ N}\\cdot\\text{m}$.<br>2) Momen inersia silinder pejal: $I = \\frac{1}{2} M R^2 = \\frac{1}{2}(10)(0{,}2^2) = 5(0{,}04) = 0{,}2\\text{ kg}\\cdot\\text{m}^2$.<br>3) Percepatan sudut: $\\alpha = \\frac{\\tau}{I} = \\frac{6}{0{,}2} = 30\\text{ rad/s}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa menyertakan faktor $1/2$ pada momen inersia silinder pejal sehingga menghasilkan $\\alpha = 15\\text{ rad/s}^2$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "fis-din-45",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Dinamika Rotasi & Benda Menggelinding",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua bola logam kecil bermassa $m_1 = 2\\text{ kg}$ dan $m_2 = 3\\text{ kg}$ disambungkan pada kedua ujung sebuah batang penghubung ringan tak bermassa dengan panjang total $L = 1\\text{ meter}$. Sistem diputar terhadap poros vertikal yang tegak lurus batang dan berjarak $0{,}4\\text{ m}$ dari bola pertama $m_1$. Momen inersia sistem partikel tersebut terhadap poros putar adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "0,72 kg·m²",
      "1,08 kg·m²",
      "1,40 kg·m²",
      "1,76 kg·m²",
      "2,00 kg·m²"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Momen inersia sistem partikel titik diskrit: $I = \\Sigma m_i r_i^2 = m_1 r_1^2 + m_2 r_2^2$.</div>",
      "steps": "<ol><li>1) Jarak $m_1$: $r_1 = 0{,}4\\text{ m}$.<br>2) Jarak $m_2$: $r_2 = 1 - 0{,}4 = 0{,}6\\text{ m}$.<br>3) Momen inersia total: $I = 2(0{,}4)^2 + 3(0{,}6)^2 = 2(0{,}16) + 3(0{,}36) = 0{,}32 + 1{,}08 = 1{,}40\\text{ kg}\\cdot\\text{m}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa mengkuadratkan jarak lengan ($r$), atau salah menentukan jarak bola kedua terhadap poros.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "fis-din-46",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Dinamika Rotasi & Benda Menggelinding",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah bola pejal homogen ($I = \\frac{2}{5} M R^2$) menggelinding murni tanpa selip pada permukaan datar dengan kelajuan linier $v$. Perbandingan antara energi kinetik rotasi ($EK_{\\text{rot}}$) terhadap energi kinetik translasi ($EK_{\\text{trans}}$) bola pejal tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1/5",
      "2/5",
      "1/2",
      "2/7",
      "5/7"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Energi kinetik gerak menggelinding murni: $EK_{\\text{rot}} = \\frac{1}{2} I \\omega^2$ dan $EK_{\\text{trans}} = \\frac{1}{2} M v^2$ dengan $v = \\omega R$.</div>",
      "steps": "<ol><li>$$EK_{\\text{rot}} = \\frac{1}{2}\\left(\\frac{2}{5} M R^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{5} M v^2$$<br>$$\\frac{EK_{\\text{rot}}}{EK_{\\text{trans}}} = \\frac{\\frac{1}{5} M v^2}{\\frac{1}{2} M v^2} = \\frac{2}{5} = 0{,}40$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Sering tertukar membandingkan dengan energi kinetik total ($EK_{\\text{rot}} / EK_{\\text{tot}} = 2/7$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "drill-rot-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Momen Gaya (Torsi) Gaya Bersudut",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah batang homogen dengan panjang $r = 2\\text{ meter}$ dapat berputar bebas pada poros di salah satu ujungnya. Sebuah gaya $F = 30\\text{ N}$ ditarik pada ujung bebas batang dengan membentuk sudut $\\theta = 30^\\circ$ terhadap batang ($\\sin 30^\\circ = 0{,}5$). Besar momen gaya (torsi) yang bekerja pada batang tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ N}\\cdot\\text{m}$",
      "$60\\text{ N}\\cdot\\text{m}$",
      "$15\\text{ N}\\cdot\\text{m}$",
      "$30\\sqrt{3}\\text{ N}\\cdot\\text{m}$",
      "$45\\text{ N}\\cdot\\text{m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Definisi Momen Gaya (Torsi):</strong><br>Momen gaya adalah hasil kali silang antara lengan gaya dan komponen gaya yang tegak lurus terhadap lengan:<br>$$\\tau = r \\cdot F \\sin \\theta$$</div>",
      "steps": "<ol><li>Identifikasi nilai: $r = 2\\text{ m}$, $F = 30\\text{ N}$, $\\theta = 30^\\circ$.</li><li>Komponen gaya tegak lurus: $F_{\\perp} = F \\sin 30^\\circ = 30 \\times 0{,}5 = 15\\text{ N}$.</li><li>Torsi: $\\tau = r \\times F_{\\perp} = 2 \\times 15 = 30\\text{ N}\\cdot\\text{m}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengabaikan faktor sudut $\\sin\\theta$ sehingga menghitung langsung $2 \\times 30 = 60\\text{ N}\\cdot\\text{m}$. Komponen gaya yang sejajar batang tidak menghasilkan torsi!</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "drill-rot-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Perbandingan Momen Inersia Silinder vs Bola Pejal",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah silinder pejal dan sebuah bola pejal memiliki massa ($M$) dan jari-jari ($R$) yang sama persis. Perbandingan momen inersia silinder pejal terhadap momen inersia bola pejal ($I_{\\text{silinder}} : I_{\\text{bola}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5 : 4$",
      "$4 : 5$",
      "$2 : 5$",
      "$1 : 2$",
      "$3 : 2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konstanta Momen Inersia Benda Pejal Baku:</strong><br>• Silinder pejal homogen: $I_{\\text{silinder}} = \\frac{1}{2} M R^2 = 0{,}5 M R^2$<br>• Bola pejal homogen: $I_{\\text{bola}} = \\frac{2}{5} M R^2 = 0{,}4 M R^2$</div>",
      "steps": "<ol><li>Bandingkan koefisien bentuknya:<br>$$\\frac{I_{\\text{silinder}}}{I_{\\text{bola}}} = \\frac{\\frac{1}{2}}{\\frac{2}{5}} = \\frac{1}{2} \\times \\frac{5}{2} = \\frac{5}{4}$$</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Ingat fraksi bentuk benda berotasi:<br>• Cincin/Silinder Berongga: $k = 1$<br>• Silinder Pejal: $k = 1/2 = 0{,}5$<br>• Bola Berongga: $k = 2/3 \\approx 0{,}67$<br>• Bola Pejal: $k = 2/5 = 0{,}4$</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "drill2-rot-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Momen Inersia Sistem Tiga Partikel",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Tiga buah partikel bermassa $m_1 = 1\\text{ kg}$, $m_2 = 2\\text{ kg}$, dan $m_3 = 3\\text{ kg}$ disusun pada sumbu-X berturut-turut pada posisi $x_1 = 0\\text{ m}$, $x_2 = 1\\text{ m}$, dan $x_3 = 2\\text{ m}$. Jika sumbu putar berada di titik $x = 0$ (tegak lurus sumbu-X), maka momen inersia total sistem partikel tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$14\\text{ kg}\\cdot\\text{m}^2$",
      "$12\\text{ kg}\\cdot\\text{m}^2$",
      "$8\\text{ kg}\\cdot\\text{m}^2$",
      "$6\\text{ kg}\\cdot\\text{m}^2$",
      "$18\\text{ kg}\\cdot\\text{m}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Momen Inersia Sistem Partikel Diskrit:</strong><br>$$I = \\sum m_i r_i^2 = m_1 r_1^2 + m_2 r_2^2 + m_3 r_3^2$$<br>dengan $r_i$ adalah jarak tegak lurus partikel ke sumbu putar.</div>",
      "steps": "<ol><li>Jarak ke sumbu $x=0$: $r_1 = 0\\text{ m}$, $r_2 = 1\\text{ m}$, $r_3 = 2\\text{ m}$.</li><li>Hitung kontribusi masing-masing partikel:<br>• $I_1 = 1 \\times (0)^2 = 0$<br>• $I_2 = 2 \\times (1)^2 = 2\\text{ kg}\\cdot\\text{m}^2$<br>• $I_3 = 3 \\times (2)^2 = 3 \\times 4 = 12\\text{ kg}\\cdot\\text{m}^2$</li><li>Jumlahkan: $I = 0 + 2 + 12 = 14\\text{ kg}\\cdot\\text{m}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Kuadratkan Jarak:</strong> Partikel yang tepat berada di sumbu putar ($r=0$) memiliki momen inersia nol. Jarak selalu dikuadratkan ($r^2$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "drill2-rot-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Momen Inersia Bola Berongga Tipis",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah bola sepak dianggap sebagai bola berongga kulit tipis dengan massa $M = 3\\text{ kg}$ dan jari-jari $R = 0{,}2\\text{ meter}$. Jika rumus momen inersia bola berongga adalah $I = \\frac{2}{3} M R^2$, besar momen inersia bola tersebut terhadap sumbu yang melalui pusatnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}08\\text{ kg}\\cdot\\text{m}^2$",
      "$0{,}12\\text{ kg}\\cdot\\text{m}^2$",
      "$0{,}04\\text{ kg}\\cdot\\text{m}^2$",
      "$0{,}16\\text{ kg}\\cdot\\text{m}^2$",
      "$0{,}24\\text{ kg}\\cdot\\text{m}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Momen Inersia Kulit Bola Berongga:</strong><br>$$I = \\frac{2}{3} M R^2$$</div>",
      "steps": "<ol><li>Hitung $R^2$: $(0{,}2)^2 = 0{,}04\\text{ m}^2$.</li><li>Hitung $I$: $I = \\frac{2}{3} \\times 3\\text{ kg} \\times 0{,}04\\text{ m}^2 = 2 \\times 0{,}04 = 0{,}08\\text{ kg}\\cdot\\text{m}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Bedakan Bola Pejal vs Berongga:</strong><br>• Bola pejal: $I = \\frac{2}{5}MR^2 = 0{,}4MR^2$<br>• Bola berongga: $I = \\frac{2}{3}MR^2 \\approx 0{,}67MR^2$</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "drill2-rot-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Hubungan Percepatan Linier dan Percepatan Sudut",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah katrol silinder berputar pada porosnya dengan percepatan sudut tetap $\\alpha = 5\\text{ rad/s}^2$. Jika seutas tali dililitkan pada tepi katrol yang berdiameter $d = 80\\text{ cm}$ (jari-jari $R = 0{,}4\\text{ m}$), maka percepatan tangensial ($a$) tali tersebut saat terulur adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ m/s}^2$",
      "$4\\text{ m/s}^2$",
      "$1\\text{ m/s}^2$",
      "$12{,}5\\text{ m/s}^2$",
      "$0{,}8\\text{ m/s}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Besaran Sudut dan Linier Rotasi:</strong><br>• Kecepatan linier tangensial: $v = \\omega \\cdot R$<br>• Percepatan linier tangensial: $a = \\alpha \\cdot R$</div>",
      "steps": "<ol><li>Identifikasi jari-jari: $R = \\frac{d}{2} = \\frac{80\\text{ cm}}{2} = 40\\text{ cm} = 0{,}4\\text{ m}$.</li><li>Hitung percepatan tangensial: $a = \\alpha \\times R = 5\\text{ rad/s}^2 \\times 0{,}4\\text{ m} = 2\\text{ m/s}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Diameter vs Jari-Jari:</strong> Selalu bagi diameter dengan 2 untuk mendapatkan jari-jari $R$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "fis-din-23",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Dinamika Rotasi & Benda Menggelinding",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah silinder pejal roda gigi ($I = \\frac{1}{2} M R^2$, konstanta inersia $k = 0{,}5$) bermassa $M = 4\\text{ kg}$ dilepaskan dari keadaan diam di puncak bidang miring kasar bersudut $\\theta = 37^\\circ$ terhadap horizontal ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\text{ m/s}^2$). Silinder menggelinding murni menuruni bidang miring tanpa slip. Besar percepatan linier pusat massa silinder dan gaya gesekan statis yang bekerja pada silinder adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "a = 4 m/s² dan fs = 8 N",
      "a = 6 m/s² dan fs = 0 N",
      "a = 4 m/s² dan fs = 16 N",
      "a = 3 m/s² dan fs = 12 N",
      "a = 2 m/s² dan fs = 6 N"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Dinamika gerak menggelinding murni tanpa slip: translasi ($Mg \\sin\\theta - f_s = Ma$) dan rotasi ($f_s R = I \\alpha$). Formula percepatan: $a = \\frac{g \\sin\\theta}{1 + k}$.</div>",
      "steps": "<ol><li>1) Percepatan linier pusat massa silinder ($k = 0{,}5$):<br>$$a = \\frac{g \\sin 37^\\circ}{1 + k} = \\frac{10 \\times 0{,}6}{1 + 0{,}5} = \\frac{6}{1{,}5} = 4\\text{ m/s}^2$$.<br>2) Menghitung gaya gesek statis penopang rotasi:<br>$$f_s = \\frac{I \\alpha}{R} = \\frac{1}{2} M a = \\frac{1}{2}(4)(4) = 8\\text{ N}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengira benda meluncur bebas tanpa rotasi ($a = g \\sin\\theta = 6\\text{ m/s}^2$ dan $f_s = 0\\text{ N}$), atau menggunakan koefisien inersia bola pejal ($k = 2/5$) bukannya silinder pejal ($k = 1/2$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "fis-din-24",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Dinamika Rotasi & Benda Menggelinding",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah tangga homogen dengan panjang $L = 5\\text{ meter}$ dan berat $W = 300\\text{ N}$ bersandar pada dinding vertikal yang licin sempurna dan bertumpu pada lantai horizontal kasar. Sudut kemiringan antara tangga dan lantai adalah $\\theta = 53^\\circ$ ($\\sin 53^\\circ = 0{,}8$; $\\cos 53^\\circ = 0{,}6$; $\\tan 53^\\circ = \\frac{4}{3}$). Jika tangga berada dalam keadaan tepat akan tergelincir, besar koefisien gesekan statis minimum $\\mu_s$ antara ujung bawah tangga dan lantai adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "0,250",
      "0,375",
      "0,500",
      "0,625",
      "0,750"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kesetimbangan statis benda tegar (tangga homogen bersandar): $\\Sigma F_x = 0$, $\\Sigma F_y = 0$, dan $\\Sigma \\tau = 0$.</div>",
      "steps": "<ol><li>1) Kesetimbangan gaya vertikal: $N_{\\text{lantai}} = W = 300\\text{ N}$.<br>2) Kesetimbangan gaya horizontal: $f_s = N_{\\text{dinding}}$.<br>3) Torsi terhadap ujung bawah di lantai: $N_{\\text{dinding}} (L \\sin 53^\\circ) - W (\\frac{L}{2} \\cos 53^\\circ) = 0 \\Rightarrow N_{\\text{dinding}} = \\frac{W}{2 \\tan 53^\\circ}$.<br>4) Syarat tepat akan tergelincir ($f_s = \\mu_s N_{\\text{lantai}}$):<br>$$\\mu_s W = \\frac{W}{2 \\tan 53^\\circ} \\Rightarrow \\mu_s = \\frac{1}{2 \\tan 53^\\circ} = \\frac{1}{2 \\times (4/3)} = \\frac{3}{8} = 0{,}375$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa bahwa letak titik berat tangga homogen berada di tengah batang ($L/2$), sehingga lupa membagi 2 dan mendapatkan hasil $\\mu_s = 0{,}750$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "fis-din-47",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Dinamika Rotasi & Benda Menggelinding",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah bola pejal ($I = \\frac{2}{5} M R^2$) dan sebuah silinder berongga tipis ($I = M R^2$) dilepaskan secara bersamaan dari keadaan diam di puncak bidang miring kasar yang sama. Keduanya menggelinding murni menuruni bidang miring tanpa slip. Perbandingan percepatan linier bola pejal ($a_{\\text{bola}}$) terhadap percepatan linier silinder berongga ($a_{\\text{silinder}}$) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "5 : 7",
      "7 : 5",
      "7 : 10",
      "10 : 7",
      "14 : 5"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Percepatan linier gerak menggelinding murni: $a = \\frac{g \\sin\\theta}{1 + k}$.</div>",
      "steps": "<ol><li>1) Bola pejal ($k = 2/5$): $a_{\\text{bola}} = \\frac{g \\sin\\theta}{1 + 2/5} = \\frac{5}{7} g \\sin\\theta$.<br>2) Silinder berongga ($k = 1$): $a_{\\text{silinder}} = \\frac{g \\sin\\theta}{1 + 1} = \\frac{1}{2} g \\sin\\theta$.<br>3) Perbandingan: $\\frac{a_{\\text{bola}}}{a_{\\text{silinder}}} = \\frac{5/7}{1/2} = \\frac{10}{7}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering membalik perbandingan menjadi $7 : 10$ atau salah memasukkan konstanta momen inersia silinder berongga tipis.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "fis-din-48",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Dinamika Rotasi & Benda Menggelinding",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah batang homogen bermassa $M = 6\\text{ kg}$ dan panjang $L = 4\\text{ meter}$ dihubungkan dengan engsel di dinding pada salah satu ujungnya dan ditahan tetap mendatar oleh seutas kawat baja yang diikatkan pada ujung bebas batang dengan membentuk sudut $\\theta = 30^\\circ$ terhadap batang ($\\sin 30^\\circ = 0{,}5$; $g = 10\\text{ m/s}^2$). Sebuah beban tambahan bermassa $m = 4\\text{ kg}$ digantungkan tepat di ujung bebas batang tersebut. Besar gaya tegangan kawat baja penahan batang adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "70 N",
      "100 N",
      "110 N",
      "120 N",
      "140 N"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kesetimbangan rotasi benda tegar terhadap poros engsel: $\\Sigma \\tau = 0$.</div>",
      "steps": "<ol><li>1) Titik poros pada engsel dinding.<br>2) Torsi searah jarum jam oleh berat batang (di tengah batang $L/2$): $\\tau_1 = W_{\\text{batang}} \\times \\frac{L}{2} = 60 \\times 2 = 120\\text{ N}\\cdot\\text{m}$.<br>3) Torsi searah jarum jam oleh beban gantung (di ujung batang $L$): $\\tau_2 = W_{\\text{beban}} \\times L = 40 \\times 4 = 160\\text{ N}\\cdot\\text{m}$.<br>4) Torsi berlawanan jarum jam oleh kawat baja: $\\tau_3 = T \\sin 30^\\circ \\times L = T(0{,}5)(4) = 2T$.<br>5) Kesetimbangan rotasi: $2T = 120 + 160 = 280 \\Rightarrow T = \\frac{280}{2} = 140\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengira letak titik berat batang berada di ujungnya ($L$) bukannya di tengah batang ($L/2$), sehingga menghasilkan $T = 200\\text{ N}$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "drill-rot-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Teorema Sumbu Sejajar Momen Inersia",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah batang silinder homogen bermassa $M$ dan panjang $L$ memiliki momen inersia terhadap poros yang melalui pusat massanya sebesar $I_{\\text{pm}} = \\frac{1}{12} M L^2$. Berdasarkan teorema sumbu sejajar, momen inersia batang jika diputar pada salah satu ujungnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{3} M L^2$",
      "$\\frac{1}{4} M L^2$",
      "$\\frac{1}{6} M L^2$",
      "$\\frac{5}{12} M L^2$",
      "$\\frac{2}{3} M L^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Teorema Sumbu Sejajar (Steiner):</strong><br>Momen inersia terhadap sumbu sejajar yang berjarak $d$ dari pusat massa adalah:<br>$$I = I_{\\text{pm}} + M d^2$$</div>",
      "steps": "<ol><li>Jarak dari pusat massa (tengah batang) ke ujung batang: $d = \\frac{1}{2}L$.</li><li>Terapkan teorema sumbu sejajar:<br>$$I = \\frac{1}{12}ML^2 + M\\left(\\frac{1}{2}L\\right)^2 = \\frac{1}{12}ML^2 + \\frac{1}{4}ML^2$$</li><li>Samakan penyebut:<br>$$I = \\left(\\frac{1}{12} + \\frac{3}{12}\\right)ML^2 = \\frac{4}{12}ML^2 = \\frac{1}{3}ML^2$$</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Pasangan Rumus Batang:</strong> Poros di tengah $\\implies \\frac{1}{12}ML^2$. Poros di ujung $\\implies \\frac{1}{3}ML^2$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "drill-rot-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Hukum II Newton Rotasi dan Percepatan Sudut",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah roda gila berbentuk silinder pejal homogen bermassa $M = 4\\text{ kg}$ dan jari-jari $R = 0{,}5\\text{ m}$ ($I = \\frac{1}{2}MR^2$). Roda tersebut mula-mula diam, kemudian diberi momen gaya konstan sebesar $\\tau = 6\\text{ N}\\cdot\\text{m}$. Percepatan sudut ($\\alpha$) yang dialami roda gila tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$12\\text{ rad/s}^2$",
      "$6\\text{ rad/s}^2$",
      "$24\\text{ rad/s}^2$",
      "$3\\text{ rad/s}^2$",
      "$8\\text{ rad/s}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum II Newton untuk Rotasi:</strong><br>$$\\Sigma \\tau = I \\cdot \\alpha \\implies \\alpha = \\frac{\\Sigma \\tau}{I}$$</div>",
      "steps": "<ol><li>Hitung momen inersia silinder pejal:<br>$$I = \\frac{1}{2} M R^2 = \\frac{1}{2} \\times 4 \\times (0{,}5)^2 = 2 \\times 0{,}25 = 0{,}5\\text{ kg}\\cdot\\text{m}^2$$</li><li>Hitung percepatan sudut:<br>$$\\alpha = \\frac{\\tau}{I} = \\frac{6\\text{ N}\\cdot\\text{m}}{0{,}5\\text{ kg}\\cdot\\text{m}^2} = 12\\text{ rad/s}^2$$</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Analogi Gerak:</strong> Torsi $\\tau$ analog dengan gaya $F$, momen inersia $I$ analog dengan massa $m$, dan percepatan sudut $\\alpha$ analog dengan percepatan linier $a$ ($F = ma \\leftrightarrow \\tau = I\\alpha$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "drill-rot-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Percepatan Menggelinding Silinder Pejal pada Bidang Miring",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah silinder pejal ($I = \\frac{1}{2}mR^2$) dilepaskan dari keadaan diam di puncak bidang miring kasar bersudut kemiringan $\\theta$ terhadap horizontal. Jika silinder menggelinding murni tanpa slip dan percepatan gravitasi adalah $g$, maka percepatan linier ($a$) silinder pejal tersebut menuruni bidang miring adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{2}{3} g \\sin \\theta$",
      "$\\frac{1}{2} g \\sin \\theta$",
      "$\\frac{5}{7} g \\sin \\theta$",
      "$g \\sin \\theta$",
      "$\\frac{3}{4} g \\sin \\theta$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Percepatan Benda Menggelinding Murni pada Bidang Miring:</strong><br>$$a = \\frac{g \\sin \\theta}{1 + k}$$<br>dengan $k$ konstanta bentuk momen inersia ($I = k m R^2$).</div>",
      "steps": "<ol><li>Untuk silinder pejal: $I = \\frac{1}{2} m R^2 \\implies k = \\frac{1}{2} = 0{,}5$.</li><li>Substitusi nilai $k$ ke rumus umum:<br>$$a = \\frac{g \\sin \\theta}{1 + \\frac{1}{2}} = \\frac{g \\sin \\theta}{\\frac{3}{2}} = \\frac{2}{3} g \\sin \\theta$$</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Perbedaan Luncur vs Gelinding:</strong> Jika bidang licin (meluncur tanpa rotasi), $a = g \\sin\\theta$. Jika menggelinding, inersia rotasi menahan laju sehingga $a = \\frac{g \\sin\\theta}{1 + k} < g \\sin\\theta$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "drill-rot-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Hukum Kekekalan Momentum Sudut",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seorang atlet seluncur es berputar dengan kecepatan sudut $\\omega_1 = 3\\text{ rad/s}$ saat merentangkan kedua tangannya, di mana momen inersia tubuhnya saat itu adalah $I_1 = 4\\text{ kg}\\cdot\\text{m}^2$. Ketika atlet tersebut melipat kedua tangannya merapat ke dada, momen inersianya berkurang menjadi $I_2 = 1{,}5\\text{ kg}\\cdot\\text{m}^2$. Jika gesekan es diabaikan, kecepatan sudut putaran atlet sekarang ($\\omega_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$8\\text{ rad/s}$",
      "$6\\text{ rad/s}$",
      "$4\\text{ rad/s}$",
      "$12\\text{ rad/s}$",
      "$2\\text{ rad/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Kekekalan Momentum Sudut:</strong><br>Jika tidak ada torsi luar yang bekerja pada sistem ($\\Sigma \\tau_{\\text{eksternal}} = 0$), maka momentum sudut sistem kekal:<br>$$L_1 = L_2 \\implies I_1 \\omega_1 = I_2 \\omega_2$$</div>",
      "steps": "<ol><li>Momentum sudut awal: $L_1 = I_1 \\omega_1 = 4 \\times 3 = 12\\text{ kg}\\cdot\\text{m}^2\\text{/s}$.</li><li>Karena momentum sudut kekal: $I_2 \\omega_2 = 12$.</li><li>Kecepatan sudut baru: $\\omega_2 = \\frac{12}{1{,}5} = 8\\text{ rad/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Prinsip Fisika Riil:</strong> Saat atlet melipat tangan, jari-jari massa terhadap sumbu putar mengecil $\\implies$ momen inersia $I$ mengecil $\\implies$ kecepatan putar $\\omega$ melonjak naik drastis!</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "drill2-rot-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Energi Kinetik Total Bola Pejal Menggelinding",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah bola pejal homogen ($I = \\frac{2}{5}mv^2$) bermassa $m = 2\\text{ kg}$ menggelinding murni di atas lantai mendatar tanpa slip dengan kelajuan linier $v = 10\\text{ m/s}$. Besar energi kinetik total (gabungan translasi dan rotasi) bola pejal tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$140\\text{ Joule}$",
      "$100\\text{ Joule}$",
      "$40\\text{ Joule}$",
      "$70\\text{ Joule}$",
      "$200\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Energi Kinetik Menggelinding Murni:</strong><br>$$E_k = E_{k,\\text{translasi}} + E_{k,\\text{rotasi}} = \\frac{1}{2}mv^2(1 + k)$$<br>Untuk bola pejal, nilai $k = \\frac{2}{5} = 0{,}4$.</div>",
      "steps": "<ol><li>Energi kinetik translasi: $E_{k,\\text{trans}} = \\frac{1}{2} m v^2 = \\frac{1}{2} \\times 2 \\times (10)^2 = 100\\text{ Joule}$.</li><li>Energi kinetik rotasi: $E_{k,\\text{rot}} = k \\times E_{k,\\text{trans}} = 0{,}4 \\times 100 = 40\\text{ Joule}$.</li><li>Energi kinetik total: $E_k = 100 + 40 = 140\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Rumus Singkat Bola Pejal:</strong> $E_k = \\frac{7}{10} m v^2$. Langsung hitung $0{,}7 \\times 2 \\times 100 = 140\\text{ J}$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "drill2-rot-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Fraksi Energi Rotasi Silinder Pejal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah silinder pejal ($I = \\frac{1}{2}mR^2$) menggelinding murni tanpa slip pada permukaan mendatar. Persentase energi kinetik rotasi terhadap energi kinetik total silinder pejal tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$33{,}3\\%$ (sepertiga bagian)",
      "$50\\%$ (setengah bagian)",
      "$66{,}7\\%$ (dua pertiga bagian)",
      "$25\\%$ (seperempat bagian)",
      "$20\\%$ (seperlima bagian)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Rasio Fraksi Energi Kinetik Benda Menggelinding:</strong><br>$$\\frac{E_{k,\\text{rotasi}}}{E_{k,\\text{total}}} = \\frac{k}{1 + k}$$</div>",
      "steps": "<ol><li>Untuk silinder pejal, $k = \\frac{1}{2}$.</li><li>Rasio rotasi terhadap total: $\\frac{\\frac{1}{2}}{1 + \\frac{1}{2}} = \\frac{\\frac{1}{2}}{\\frac{3}{2}} = \\frac{1}{3}$.</li><li>Dalam persen: $\\frac{1}{3} \\times 100\\% \\approx 33{,}3\\%$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Perbandingan Energi:</strong> Pada silinder pejal menggelinding, $\\frac{2}{3}$ energinya adalah translasi ($66{,}7\\%$) dan $\\frac{1}{3}$ energinya adalah rotasi ($33{,}3\\%$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "drill2-rot-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Kelajuan Benda Menggelinding di Dasar Bidang Miring",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah silinder pejal ($k = 0{,}5$) dan sebuah bola pejal ($k = 0{,}4$) dilepaskan bersamaan dari puncak bidang miring kasar yang sama setinggi $h = 7\\text{ meter}$ tanpa kecepatan awal ($g = 10\\text{ m/s}^2$). Kelajuan bola pejal saat mencapai dasar bidang miring adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ m/s}$",
      "$\\sqrt{140}\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$12\\text{ m/s}$",
      "$7\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kelajuan Benda Menggelinding di Dasar Bidang Miring:</strong><br>Berdasarkan Hukum Kekekalan Energi Mekanik ($mgh = \\frac{1}{2}mv^2(1 + k)$):<br>$$v = \\sqrt{\\frac{2gh}{1 + k}}$$</div>",
      "steps": "<ol><li>Untuk bola pejal: $k = 0{,}4 = \\frac{2}{5}$.</li><li>Hitung pembilang: $2gh = 2 \\times 10 \\times 7 = 140$.</li><li>Hitung penyebut: $1 + k = 1 + 0{,}4 = 1{,}4$.</li><li>Kelajuan: $v = \\sqrt{\\frac{140}{1{,}4}} = \\sqrt{100} = 10\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Siapa Lebih Cepat?:</strong> Benda dengan nilai $k$ lebih kecil (seperti bola pejal $k=0{,}4$) selalu tiba di dasar lebih cepat dan dengan kelajuan lebih tinggi dibandingkan benda dengan $k$ besar (seperti silinder pejal $k=0{,}5$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "drill2-rot-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Percepatan Katrol Silinder Pejal Menahan Beban",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah katrol silinder pejal bermassa $M = 2\\text{ kg}$ dan jari-jari $R$ dapat berputar tanpa gesekan poros. Seutas tali tak bermassa dililitkan pada katrol dan di ujung tali digantungkan beban bermassa $m = 1\\text{ kg}$. Jika percepatan gravitasi adalah $g = 10\\text{ m/s}^2$, percepatan linier turunnya beban ($a$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ m/s}^2$",
      "$10\\text{ m/s}^2$",
      "$3{,}33\\text{ m/s}^2$",
      "$6{,}67\\text{ m/s}^2$",
      "$2{,}5\\text{ m/s}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Percepatan Sistem Katrol Bermassa:</strong><br>Inersia katrol silinder pejal ($I = \\frac{1}{2}MR^2$) menambah massa efektif sistem sebesar $\\frac{1}{2}M$:<br>$$a = \\frac{m \\cdot g}{m + \\frac{1}{2}M}$$</div>",
      "steps": "<ol><li>Pembilang gaya penggerak: $w = m \\cdot g = 1 \\times 10 = 10\\text{ N}$.</li><li>Penyebut massa total sistem: $m + \\frac{1}{2}M = 1 + \\frac{1}{2}(2) = 1 + 1 = 2\\text{ kg}$.</li><li>Percepatan: $a = \\frac{10}{2} = 5\\text{ m/s}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Trik Kilat Katrol:</strong> Katrol silinder pejal menyumbang $\\frac{1}{2}M$ ke penyebut. Jangan masukkan massa penuh $M$!</div>"
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "hots-fis-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-3",
    "category": "Dinamika Rotasi & Torsi",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Sebuah silinder pejal homogen bermassa $M = 2\\text{ kg}$ dan jari-jari $R = 20\\text{ cm}$ dapat berputar bebas tanpa gesekan terhadap poros horizontal tetap yang melalui pusat massanya (momen inersia $I = \\frac{1}{2}MR^2$). Dua buah balok bermassa $m_1 = 3\\text{ kg}$ dan $m_2 = 1\\text{ kg}$ dihubungkan oleh seutas tali ringan tak elastis yang melilit katrol tersebut tanpa selip. Jika sistem dilepaskan dari keadaan diam dan percepatan gravitasi $g = 10\\text{ m/s}^2$, tentukan percepatan sudut putaran katrol $(\\alpha)$ serta besar selisih tegangan tali pada kedua sisi katrol $(T_1 - T_2)$!",
    "hasDiagram": true,
    "diagramSvg": "\n      <svg class=\"diagram-svg\" viewBox=\"0 0 360 270\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\">\n        <!-- Blueprint Grid Ceiling Bracket -->\n        <line x1=\"80\" y1=\"25\" x2=\"280\" y2=\"25\" stroke=\"#38BDF8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n        <line x1=\"100\" y1=\"25\" x2=\"115\" y2=\"10\" stroke=\"#38BDF8\" stroke-width=\"1.5\"/>\n        <line x1=\"130\" y1=\"25\" x2=\"145\" y2=\"10\" stroke=\"#38BDF8\" stroke-width=\"1.5\"/>\n        <line x1=\"160\" y1=\"25\" x2=\"175\" y2=\"10\" stroke=\"#38BDF8\" stroke-width=\"1.5\"/>\n        <line x1=\"190\" y1=\"25\" x2=\"205\" y2=\"10\" stroke=\"#38BDF8\" stroke-width=\"1.5\"/>\n        <line x1=\"220\" y1=\"25\" x2=\"235\" y2=\"10\" stroke=\"#38BDF8\" stroke-width=\"1.5\"/>\n        <line x1=\"250\" y1=\"25\" x2=\"265\" y2=\"10\" stroke=\"#38BDF8\" stroke-width=\"1.5\"/>\n        \n        <!-- Pulley Mounting Hanger -->\n        <polygon points=\"175,25 185,25 182,75 178,75\" fill=\"#38BDF8\" opacity=\"0.4\"/>\n        <line x1=\"180\" y1=\"25\" x2=\"180\" y2=\"75\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        \n        <!-- Pulley Disk -->\n        <circle cx=\"180\" cy=\"75\" r=\"50\" fill=\"#0A192F\" stroke=\"#38BDF8\" stroke-width=\"2.5\"/>\n        <circle cx=\"180\" cy=\"75\" r=\"44\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"1\" stroke-dasharray=\"3 3\" opacity=\"0.6\"/>\n        <circle cx=\"180\" cy=\"75\" r=\"7\" fill=\"#38BDF8\"/>\n        \n        <!-- Radius & Label -->\n        <line x1=\"180\" y1=\"75\" x2=\"225\" y2=\"50\" stroke=\"#FACC15\" stroke-width=\"1.5\" stroke-dasharray=\"2 2\"/>\n        <text x=\"205\" y=\"55\" fill=\"#FACC15\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">R=20cm</text>\n        <text x=\"145\" y=\"98\" fill=\"#E0F2FE\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\">M=2kg</text>\n        \n        <!-- Rotation Alpha Vector Arrow -->\n        <path d=\"M 160 40 A 30 30 0 0 0 145 75\" fill=\"none\" stroke=\"#FF5A26\" stroke-width=\"2\" marker-end=\"url(#arrow-orange)\"/>\n        <text x=\"130\" y=\"50\" fill=\"#FF5A26\" font-family=\"'JetBrains Mono', monospace\" font-size=\"13\" font-weight=\"bold\">α</text>\n        \n        <!-- Left Rope & Mass m1 -->\n        <line x1=\"130\" y1=\"75\" x2=\"130\" y2=\"160\" stroke=\"#E0F2FE\" stroke-width=\"2.5\"/>\n        <rect x=\"108\" y=\"160\" width=\"44\" height=\"44\" rx=\"4\" fill=\"#1E293B\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <text x=\"116\" y=\"186\" fill=\"#FFFFFF\" font-family=\"'JetBrains Mono', monospace\" font-size=\"12\" font-weight=\"bold\">m₁=3kg</text>\n        \n        <!-- Forces on m1 -->\n        <line x1=\"130\" y1=\"160\" x2=\"130\" y2=\"130\" stroke=\"#22C55E\" stroke-width=\"2\"/>\n        <polygon points=\"127,133 130,125 133,133\" fill=\"#22C55E\"/>\n        <text x=\"136\" y=\"138\" fill=\"#22C55E\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">T₁</text>\n        \n        <line x1=\"130\" y1=\"204\" x2=\"130\" y2=\"238\" stroke=\"#EF4444\" stroke-width=\"2\"/>\n        <polygon points=\"127,235 130,243 133,235\" fill=\"#EF4444\"/>\n        <text x=\"136\" y=\"235\" fill=\"#EF4444\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">m₁g</text>\n        \n        <text x=\"82\" y=\"188\" fill=\"#FF5A26\" font-family=\"'JetBrains Mono', monospace\" font-size=\"12\" font-weight=\"bold\">a ↓</text>\n        \n        <!-- Right Rope & Mass m2 -->\n        <line x1=\"230\" y1=\"75\" x2=\"230\" y2=\"140\" stroke=\"#E0F2FE\" stroke-width=\"2.5\"/>\n        <rect x=\"210\" y=\"140\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#1E293B\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <text x=\"217\" y=\"165\" fill=\"#FFFFFF\" font-family=\"'JetBrains Mono', monospace\" font-size=\"12\" font-weight=\"bold\">m₂=1kg</text>\n        \n        <!-- Forces on m2 -->\n        <line x1=\"230\" y1=\"140\" x2=\"230\" y2=\"110\" stroke=\"#22C55E\" stroke-width=\"2\"/>\n        <polygon points=\"227,113 230,105 233,113\" fill=\"#22C55E\"/>\n        <text x=\"236\" y=\"118\" fill=\"#22C55E\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">T₂</text>\n        \n        <line x1=\"230\" y1=\"180\" x2=\"230\" y2=\"210\" stroke=\"#EF4444\" stroke-width=\"2\"/>\n        <polygon points=\"227,207 230,215 233,207\" fill=\"#EF4444\"/>\n        <text x=\"236\" y=\"208\" fill=\"#EF4444\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">m₂g</text>\n        \n        <text x=\"258\" y=\"165\" fill=\"#FF5A26\" font-family=\"'JetBrains Mono', monospace\" font-size=\"12\" font-weight=\"bold\">a ↑</text>\n      </svg>\n    ",
    "diagramCaption": "SKEMA FREE-BODY DIAGRAM: KATROL BERMASSA & BEBAN GANTUNG",
    "options": [
      "$\\alpha = 15\\text{ rad/s}^2$ dan $T_1 - T_2 = 3\\text{ N}$",
      "$\\alpha = 20\\text{ rad/s}^2$ dan $T_1 - T_2 = 4\\text{ N}$",
      "$\\alpha = 25\\text{ rad/s}^2$ dan $T_1 - T_2 = 5\\text{ N}$",
      "$\\alpha = 10\\text{ rad/s}^2$ dan $T_1 - T_2 = 2\\text{ N}$",
      "$\\alpha = 20\\text{ rad/s}^2$ dan $T_1 - T_2 = 8\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Prinsip Dinamika Sistem Translasi & Rotasi Terkopel:</strong><br>\n          1. Hukum II Newton Translasi: $\\Sigma F = m a$<br>\n          2. Hukum II Newton Rotasi: $\\Sigma \\tau = I \\alpha$<br>\n          3. Syarat Tali Tidak Selip (No-slip): $a = \\alpha R \\iff \\alpha = \\frac{a}{R}$<br>\n          4. Momen Inersia Silinder Pejal Homogen: $I = \\frac{1}{2} M R^2$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>\n            <strong>Persamaan Gerak Translasi Beban $m_1$ (turun):</strong>\n            $$m_1 g - T_1 = m_1 a \\implies T_1 = m_1(g - a)$$\n          </li>\n          <li>\n            <strong>Persamaan Gerak Translasi Beban $m_2$ (naik):</strong>\n            $$T_2 - m_2 g = m_2 a \\implies T_2 = m_2(g + a)$$\n          </li>\n          <li>\n            <strong>Persamaan Dinamika Rotasi Katrol:</strong>\n            Katrol berputar searah jarum jam karena ditarik oleh selisih torsi:\n            $$\\Sigma \\tau = I \\alpha \\implies (T_1 - T_2) R = \\left(\\frac{1}{2} M R^2\\right) \\left(\\frac{a}{R}\\right)$$\n            $$T_1 - T_2 = \\frac{1}{2} M a$$\n          </li>\n          <li>\n            <strong>Substitusi untuk Mencari Percepatan Tangensial $a$:</strong>\n            $$m_1(g - a) - m_2(g + a) = \\frac{1}{2} M a$$\n            $$a = \\frac{(m_1 - m_2)g}{m_1 + m_2 + \\frac{1}{2} M}$$\n          </li>\n          <li>\n            <strong>Perhitungan Numerik $a$:</strong>\n            $$a = \\frac{(3 - 1)(10)}{3 + 1 + \\frac{1}{2}(2)} = \\frac{20}{5} = 4\\text{ m/s}^2$$\n          </li>\n          <li>\n            <strong>Perhitungan Percepatan Sudut $(\\alpha)$:</strong>\n            Karena $R = 20\\text{ cm} = 0{,}2\\text{ m}$:\n            $$\\alpha = \\frac{a}{R} = \\frac{4}{0{,}2} = 20\\text{ rad/s}^2$$\n          </li>\n          <li>\n            <strong>Perhitungan Selisih Tegangan Tali $(T_1 - T_2)$:</strong>\n            $$T_1 - T_2 = \\frac{1}{2} M a = \\frac{1}{2}(2)(4) = 4\\text{ N}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          <strong>⚠️ Jebakan Katrol Ideal:</strong> Pada sistem di mana katrol memiliki massa, tegangan tali pada kedua sisi katrol TIDAK sama ($T_1 \\neq T_2$). Anggapan katrol tanpa massa akan membuat torsi nol dan katrol tidak berakselerasi.\n        </div>\n      "
    },
    "bab": "Dinamika",
    "subBab": "Dinamika Rotasi",
    "subTopic": "Dinamika Rotasi",
    "chapterTitle": "Dinamika"
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
