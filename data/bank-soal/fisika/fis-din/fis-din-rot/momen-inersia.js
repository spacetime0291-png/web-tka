/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Dinamika Rotasi & Kesetimbangan (fis-din-rot)
 * Sub-Bab: Momen Inersia (fis-din-rot-inersia)
 * Slug: momen-inersia
 * Indikator: Momen inersia partikel dan berbagai benda tegar simetris homogen (silinder, bola, batang tipis).
 * 
 * Total Butir Soal: 6 (Mudah: 4, Sedang: 2, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-rot-inersia";
  const subTopicSlug = "momen-inersia";
  const questions = [
  {
    "id": "fis-din-45",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-inersia",
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
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-inersia"
  },
  {
    "id": "drill-rot-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-inersia",
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
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-inersia"
  },
  {
    "id": "drill2-rot-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-inersia",
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
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-inersia"
  },
  {
    "id": "drill2-rot-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-inersia",
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
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-inersia"
  },
  {
    "id": "fis-din-23",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-inersia",
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
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-inersia"
  },
  {
    "id": "drill-rot-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-inersia",
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
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-inersia"
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
