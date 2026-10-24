/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Dinamika Rotasi & Kesetimbangan (fis-din-rot)
 * Sub-Bab: Hukum II Newton Rotasi (fis-din-rot-newton)
 * Slug: hukum-2-newton-rotasi
 * Indikator: Dinamika gerak rotasi murni dan menggelinding tanpa selip (tau = I * alpha, a = alpha * r).
 * 
 * Total Butir Soal: 11 (Mudah: 3, Sedang: 8, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-rot-newton";
  const subTopicSlug = "hukum-2-newton-rotasi";
  const questions = [
  {
    "id": "fis-din-22",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-newton",
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
    "subBab": "Hukum II Newton Rotasi",
    "subTopic": "Hukum II Newton Rotasi",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "hukum-2-newton-rotasi"
  },
  {
    "id": "fis-din-46",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-newton",
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
    "subBab": "Hukum II Newton Rotasi",
    "subTopic": "Hukum II Newton Rotasi",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "hukum-2-newton-rotasi"
  },
  {
    "id": "drill2-rot-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-newton",
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
    "subBab": "Hukum II Newton Rotasi",
    "subTopic": "Hukum II Newton Rotasi",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "hukum-2-newton-rotasi"
  },
  {
    "id": "fis-din-24",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-newton",
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
    "subBab": "Hukum II Newton Rotasi",
    "subTopic": "Hukum II Newton Rotasi",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "hukum-2-newton-rotasi"
  },
  {
    "id": "fis-din-47",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-newton",
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
    "subBab": "Hukum II Newton Rotasi",
    "subTopic": "Hukum II Newton Rotasi",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "hukum-2-newton-rotasi"
  },
  {
    "id": "fis-din-48",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-newton",
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
    "subBab": "Hukum II Newton Rotasi",
    "subTopic": "Hukum II Newton Rotasi",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "hukum-2-newton-rotasi"
  },
  {
    "id": "drill-rot-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-newton",
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
    "subBab": "Hukum II Newton Rotasi",
    "subTopic": "Hukum II Newton Rotasi",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "hukum-2-newton-rotasi"
  },
  {
    "id": "drill2-rot-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-newton",
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
    "subBab": "Hukum II Newton Rotasi",
    "subTopic": "Hukum II Newton Rotasi",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "hukum-2-newton-rotasi"
  },
  {
    "id": "drill2-rot-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-newton",
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
    "subBab": "Hukum II Newton Rotasi",
    "subTopic": "Hukum II Newton Rotasi",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "hukum-2-newton-rotasi"
  },
  {
    "id": "drill2-rot-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-newton",
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
    "subBab": "Hukum II Newton Rotasi",
    "subTopic": "Hukum II Newton Rotasi",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "hukum-2-newton-rotasi"
  },
  {
    "id": "drill2-rot-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-newton",
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
    "subBab": "Hukum II Newton Rotasi",
    "subTopic": "Hukum II Newton Rotasi",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "hukum-2-newton-rotasi"
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
