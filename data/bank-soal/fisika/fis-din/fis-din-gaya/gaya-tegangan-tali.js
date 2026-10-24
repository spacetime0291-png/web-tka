/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Gaya dan Gerak (fis-din-gaya)
 * Sub-Bab: Gaya Tegangan Tali (fis-din-gaya-tegangan)
 * Slug: gaya-tegangan-tali
 * Indikator: Gaya tegangan tali pada sistem katrol Atwood, benda bergandeng, dan gerak vertikal bertali.
 * 
 * Total Butir Soal: 10 (Mudah: 4, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-gaya-tegangan";
  const subTopicSlug = "gaya-tegangan-tali";
  const questions = [
  {
    "id": "fis-din-09",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
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
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali"
  },
  {
    "id": "fis-din-10",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
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
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali"
  },
  {
    "id": "fis-din-33",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
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
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali"
  },
  {
    "id": "fis-din-34",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
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
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali"
  },
  {
    "id": "fis-din-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
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
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali"
  },
  {
    "id": "fis-din-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
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
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali"
  },
  {
    "id": "fis-din-11",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
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
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali"
  },
  {
    "id": "fis-din-12",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
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
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali"
  },
  {
    "id": "fis-din-35",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
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
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali"
  },
  {
    "id": "fis-din-36",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
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
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali"
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
