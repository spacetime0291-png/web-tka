/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lurus (fis-kin-gl)
 * Sub-Bab: Kelajuan dan Kecepatan (fis-kin-gl-kelajuan)
 * Slug: kelajuan-kecepatan
 * Indikator: Kelajuan rata-rata, kecepatan rata-rata, dan kecepatan sesaat.
 * 
 * Total Butir Soal: 5 (Mudah: 3, Sedang: 2, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-gl-kelajuan";
  const subTopicSlug = "kelajuan-kecepatan";
  const questions = [
  {
    "id": "sedang-fis-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Kinematika Gerak Lurus Pengejaran",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Mobil patroli kepolisian $A$ yang semula diam mulai bergerak dengan percepatan konstan $a = 2\\text{ m/s}^2$ untuk mengejar mobil pelanggar $B$. Pada saat yang bersamaan, mobil $B$ melintas melewati mobil $A$ dengan kelajuan tetap $v = 10\\text{ m/s}$ pada lintasan lurus yang sama. Waktu yang diperlukan mobil $A$ untuk tepat menyusul mobil $B$ sejak awal gerak adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ detik}$",
      "$8\\text{ detik}$",
      "$10\\text{ detik}$",
      "$12\\text{ detik}$",
      "$15\\text{ detik}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Kondisi Pertemuan/Pengejaran Dua Benda:</strong><br>\n          Dua benda yang berangkat dari titik awal yang sama akan bertemu saat jarak tempuh keduanya sama:<br>\n          $$s_A(t) = s_B(t)$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Persamaan jarak mobil $A$ (GLBB dari diam): $s_A = \\frac{1}{2} a t^2 = \\frac{1}{2}(2) t^2 = t^2$.</li>\n          <li>Persamaan jarak mobil $B$ (GLB): $s_B = v t = 10t$.</li>\n          <li>Samakan jarak tempuh keduanya:\n            $$t^2 = 10t \\implies t(t - 10) = 0$$\n          </li>\n          <li>Karena $t > 0$, maka mobil $A$ menyusul mobil $B$ pada saat $t = 10\\text{ detik}$.</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Hati-hati: saat $t = 5\\text{ detik}$, kecepatan kedua mobil memang sama ($v_A = a t = 10\\text{ m/s}$), namun mobil $A$ belum menyusul mobil $B$ (jarak $A$ baru $25\\text{ m}$ sedangkan $B$ sudah $50\\text{ m}$).\n        </div>\n      "
    },
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "kelajuan-kecepatan"
  },
  {
    "id": "fis-din-13",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah mobil sedan bermassa $1200\\text{ kg}$ melintasi puncak jembatan layang yang memiliki kelengkungan cembung dengan jari-jari $R = 40\\text{ meter}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan maksimum mobil di puncak jembatan agar roda tetap mempertahankan kontak dengan jalan (tidak terangkat ke udara) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "10 m/s",
      "12 m/s",
      "15 m/s",
      "18 m/s",
      "20 m/s"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Dinamika gerak melingkar vertikal di puncak bukit/jembatan cembung: $mg - N = \\frac{m v^2}{R}$.</div>",
      "steps": "<ol><li>Kondisi batas mobil tepat tidak terlempar/terangkat adalah gaya normal bernilai nol ($N = 0$).<br>$$mg = \\frac{m v_{\\max}^2}{R} \\Rightarrow v_{\\max} = \\sqrt{g R} = \\sqrt{10 \\times 40} = \\sqrt{400} = 20\\text{ m/s}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering mengira massa mobil ($1200\\text{ kg}$) berpengaruh pada kecepatan lepas, padahal variabel massa tereliminasi dari persamaan.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "kelajuan-kecepatan"
  },
  {
    "id": "fis-din-37",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah mobil sedan melintasi tikungan jalan datar beraspal dengan jari-jari kelengkungan $R = 25\\text{ meter}$. Koefisien gesekan statis antara ban mobil dan permukaan aspal adalah $\\mu_s = 0{,}40$. Jika $g = 10\\text{ m/s}^2$, kelajuan maksimum yang diperbolehkan agar mobil dapat berbelok dengan aman tanpa selip keluar jalur adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "5 m/s",
      "10 m/s",
      "15 m/s",
      "20 m/s",
      "25 m/s"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Tikungan datar kasar: gaya gesek statis bertindak sebagai gaya sentripetal ($f_s \\le \\mu_s mg = \\frac{m v^2}{R}$).</div>",
      "steps": "<ol><li>$$v_{\\max} = \\sqrt{\\mu_s g R} = \\sqrt{0{,}40 \\times 10 \\times 25} = \\sqrt{100} = 10\\text{ m/s}$$. (Setara dengan $36\\text{ km/jam}$).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa menarik akar kuadrat sehingga menjawab $100\\text{ m/s}$ atau mengira kelajuan maksimum bergantung pada massa mobil.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "kelajuan-kecepatan"
  },
  {
    "id": "fis-din-38",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah kereta *roller coaster* membawa seorang penumpang bermassa $60\\text{ kg}$ melintasi titik terbawah lintasan lembah cekung dengan kelajuan $v = 20\\text{ m/s}$. Jari-jari kelengkungan lembah cekung tersebut adalah $R = 20\\text{ meter}$. Jika $g = 10\\text{ m/s}^2$, besar gaya normal yang dikerjakan kursi terhadap badan penumpang di titik terendah tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "600 N",
      "1200 N",
      "1500 N",
      "1800 N",
      "2400 N"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Dinamika gerak melingkar di titik terendah lembah cekung: $N - mg = \\frac{m v^2}{R}$.</div>",
      "steps": "<ol><li>1) Berat penumpang: $W = mg = 60(10) = 600\\text{ N}$.<br>2) Gaya sentripetal: $F_s = \\frac{m v^2}{R} = \\frac{60 \\times 20^2}{20} = 1200\\text{ N}$.<br>3) Gaya normal: $N = W + F_s = 600 + 1200 = 1800\\text{ N}$ (penumpang merasakan sensasi $3g$).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering mengurangkan gaya sentripetal dengan gaya berat ($N = 1200 - 600 = 600\\text{ N}$) karena tertukar dengan kasus bukit cembung.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "kelajuan-kecepatan"
  },
  {
    "id": "fis-din-15",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah jalan tikungan sirkuit balap dirancang dengan kemiringan sudut $\\theta = 37^\\circ$ terhadap bidang datar horizontal ($\\tan 37^\\circ = 0{,}75$) dan memiliki jari-jari kelengkungan $R = 120\\text{ meter}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan rancangan aman (*design banking speed*) mobil balap agar dapat melintasi tikungan tanpa bergantung sama sekali pada gaya gesekan ban adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "15 m/s",
      "20 m/s",
      "25 m/s",
      "30 m/s",
      "40 m/s"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Tikungan miring licin (design banking angle): komponen horizontal gaya normal bertindak sebagai gaya sentripetal ($N \\sin\\theta = \\frac{m v^2}{R}$ dan $N \\cos\\theta = mg$).</div>",
      "steps": "<ol><li>1) Dari perbandingan kedua sumbu: $\\tan\\theta = \\frac{v^2}{g R}$.<br>2) Menghitung kelajuan aman: $v = \\sqrt{g R \\tan\\theta} = \\sqrt{10 \\times 120 \\times 0{,}75} = \\sqrt{900} = 30\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering membalik fungsi trigonometri menjadi $\\frac{g R}{\\tan\\theta}$ atau lupa menarik akar kuadrat dari 900.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "kelajuan-kecepatan"
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
