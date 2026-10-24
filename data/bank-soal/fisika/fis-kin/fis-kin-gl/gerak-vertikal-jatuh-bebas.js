/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lurus (fis-kin-gl)
 * Sub-Bab: Gerak Vertikal & Jatuh Bebas (fis-kin-gl-vertikal)
 * Slug: gerak-vertikal-jatuh-bebas
 * Indikator: Gerak jatuh bebas tanpa kecepatan awal, gerak vertikal ke atas, waktu puncak, dan kecepatan tumbuk tanah.
 * 
 * Total Butir Soal: 3 (Mudah: 1, Sedang: 2, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-gl-vertikal";
  const subTopicSlug = "gerak-vertikal-jatuh-bebas";
  const questions = [
  {
    "id": "fis-din-14",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-vertikal",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Pada sebuah atraksi sirkus, seorang akrobat memutar ember berisi air dalam bidang lingkaran vertikal dengan panjang tali $R = 0{,}9\\text{ meter}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan linear minimum putaran ember di titik tertinggi lintasannya agar air di dalamnya tidak tumpah adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "3 m/s",
      "4 m/s",
      "5 m/s",
      "6 m/s",
      "9 m/s"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kelajuan kritis pada titik tertinggi gerak melingkar vertikal: $N + mg = \\frac{m v^2}{R}$ dengan syarat $N \\ge 0$.</div>",
      "steps": "<ol><li>Agar air tepat tidak lepas dari dasar ember di titik puncak, gaya desak normal dasar ember $N = 0$:<br>$$mg = \\frac{m v_{\\min}^2}{R} \\Rightarrow v_{\\min} = \\sqrt{g R} = \\sqrt{10 \\times 0{,}9} = \\sqrt{9} = 3\\text{ m/s}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa menarik akar kuadrat dari hasil kali $g R = 9$ sehingga memilih opsi $9\\text{ m/s}$.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "gerak-vertikal-jatuh-bebas"
  },
  {
    "id": "fis-din-39",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-vertikal",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah bandul konis (ayunan kerucut) bermassa $m = 2\\text{ kg}$ diikatkan pada kawat ringan dengan panjang $L = 2\\text{ meter}$. Bandul diputar membentuk kerucut sehingga kawat membentuk sudut tetap $\\theta = 37^\\circ$ terhadap garis vertikal ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $\\tan 37^\\circ = 0{,}75$). Jika $g = 10\\text{ m/s}^2$, kelajuan linear putaran bandul tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "3 m/s",
      "4 m/s",
      "5 m/s",
      "6 m/s",
      "8 m/s"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Bandul konis: $T \\cos\\theta = mg$ dan $T \\sin\\theta = \\frac{m v^2}{R}$ dengan jari-jari lintasan $R = L \\sin\\theta$.</div>",
      "steps": "<ol><li>1) Jari-jari lingkaran horizontal: $R = L \\sin 37^\\circ = 2 \\times 0{,}6 = 1{,}2\\text{ m}$.<br>2) Hubungan kecepatan dan sudut: $\\tan 37^\\circ = \\frac{v^2}{g R}$.<br>3) Kelajuan linier: $v = \\sqrt{g R \\tan 37^\\circ} = \\sqrt{10 \\times 1{,}2 \\times 0{,}75} = \\sqrt{9} = 3\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Menggunakan panjang tali $L = 2\\text{ m}$ langsung sebagai jari-jari lingkaran $R$ tanpa mengalikan dengan $\\sin 37^\\circ$.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "gerak-vertikal-jatuh-bebas"
  },
  {
    "id": "fis-din-40",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-vertikal",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Pada wahana taman hiburan silinder putar raksasa vertikal (*Rotor* / Dinding Maut) dengan jari-jari $R = 4\\text{ meter}$, seseorang bersandar merapat pada dinding silinder yang berputar terhadap poros vertikal. Koefisien gesekan statis antara pakaian orang tersebut dan dinding silinder adalah $\\mu_s = 0{,}40$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan linear putaran minimum $v_{\\min}$ dinding silinder agar orang tersebut tidak merosot ke bawah saat lantai di bawah kakinya diturunkan adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "4 m/s",
      "6 m/s",
      "8 m/s",
      "9 m/s",
      "10 m/s"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Silinder putar vertikal: gaya normal dinding menjadi gaya sentripetal ($N = \\frac{m v^2}{R}$) dan gaya gesek statis menahan berat badan ($f_s = mg \\le \\mu_s N$).</div>",
      "steps": "<ol><li>Kondisi batas tepat tidak merosot: $mg = \\mu_s N = \\mu_s \\left(\\frac{m v_{\\min}^2}{R}\\right) \\Rightarrow v_{\\min} = \\sqrt{\\frac{g R}{\\mu_s}} = \\sqrt{\\frac{10 \\times 4}{0{,}40}} = \\sqrt{100} = 10\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengalikan dengan $\\mu_s$ bukannya membagi, sehingga menghitung $\\sqrt{10 \\times 4 \\times 0{,}40} = 4\\text{ m/s}$.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Gerak Vertikal & Jatuh Bebas",
    "subTopic": "Gerak Vertikal & Jatuh Bebas",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "gerak-vertikal-jatuh-bebas"
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
