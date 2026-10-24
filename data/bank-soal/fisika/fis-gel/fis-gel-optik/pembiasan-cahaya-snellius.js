/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Cahaya & Optik (fis-gel-optik)
 * Sub-Bab: Pembiasan Cahaya (Hukum Snellius) (fis-gel-optik-bias)
 * Slug: pembiasan-cahaya-snellius
 * Indikator: Indeks bias medium, hukum pembiasan (n_1 sin theta_1 = n_2 sin theta_2), dan sudut kritis.
 * 
 * Total Butir Soal: 3 (Mudah: 2, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-optik-bias";
  const subTopicSlug = "pembiasan-cahaya-snellius";
  const questions = [
  {
    "id": "sup-fis-gel-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Pembiasan Cahaya Hukum Snellius",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seberkas cahaya merambat dari udara ($n_1 = 1$) masuk ke dalam balok kaca yang mempunyai indeks bias $n_2 = 1{,}5$. Jika sudut datang sinar adalah $30^\\circ$, maka nilai sinus sudut bias ($\\sin r$) di dalam balok kaca tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{4}$",
      "$\\frac{1}{4}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Snellius Pembiasan Cahaya:</strong><br>$n_1 \\sin i = n_2 \\sin r$, dengan $i$ sudut datang dan $r$ sudut bias terhadap garis normal.</div>",
      "steps": "<ol><li>$n_1 = 1$, $i = 30^\\circ \\implies \\sin 30^\\circ = 0{,}5 = \\frac{1}{2}$.</li><li>$n_2 = 1{,}5 = \\frac{3}{2}$.</li><li>Persamaan: $1 \\cdot \\frac{1}{2} = \\frac{3}{2} \\cdot \\sin r$.</li><li>$\\sin r = \\frac{1}{2} \\times \\frac{2}{3} = \\frac{1}{3}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Membalik indeks bias medium sehingga menghasilkan $\\sin r = \\frac{3}{4}$.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "pembiasan-cahaya-snellius"
  },
  {
    "id": "drill-cah-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Kelajuan Cahaya dalam Medium Pembias",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Cahaya merambat dari ruang hampa ($c = 3 \\times 10^8\\text{ m/s}$) memasuki balok kaca yang mempunyai indeks bias $n = 1{,}5$. Kelajuan cahaya di dalam kaca tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}0 \\times 10^8\\text{ m/s}$",
      "$1{,}5 \\times 10^8\\text{ m/s}$",
      "$4{,}5 \\times 10^8\\text{ m/s}$",
      "$2{,}5 \\times 10^8\\text{ m/s}$",
      "$3{,}0 \\times 10^8\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Definisi Indeks Bias Mutlak:</strong><br>Indeks bias medium menyatakan perbandingan kelajuan cahaya di ruang hampa terhadap kelajuan cahaya di medium tersebut:<br>$$n = \\frac{c}{v} \\implies v = \\frac{c}{n}$$</div>",
      "steps": "<ol><li>Substitusi nilai: $c = 3 \\times 10^8\\text{ m/s}$ dan $n = 1{,}5$.</li><li>$v = \\frac{3 \\times 10^8}{1{,}5} = 2{,}0 \\times 10^8\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Konsep Kunci:</strong> Cahaya selalu merambat <em>lebih lambat</em> di dalam medium optik ($n > 1$) dibandingkan di ruang hampa. Nilai $v$ tidak mungkin melebihi $c$.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "pembiasan-cahaya-snellius"
  },
  {
    "id": "drill-cah-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-bias",
    "category": "Sudut Kritis dan Pemantulan Total Sempurna",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seberkas sinar merambat dari dalam air yang memiliki indeks bias $n_1 = \\frac{4}{3}$ menuju ke udara yang memiliki indeks bias $n_2 = 1$. Nilai sinus sudut kritis ($\\sin \\theta_k$) agar terjadi peristiwa pemantulan total sempurna adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{3}{4}$",
      "$\\frac{4}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{4}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Syarat Pemantulan Total Sempurna & Sudut Kritis:</strong><br>1. Cahaya harus merambat dari medium <strong>lebih rapat ke medium kurang rapat</strong> ($n_1 > n_2$).<br>2. Pada sudut kritis, sudut bias $r = 90^\\circ$ ($\\sin 90^\\circ = 1$):<br>$$\\sin \\theta_k = \\frac{n_2}{n_1}$$</div>",
      "steps": "<ol><li>Identifikasi: $n_1 = \\frac{4}{3}$ (medium rapat/air), $n_2 = 1$ (medium renggang/udara).</li><li>Rumus sudut kritis: $\\sin \\theta_k = \\frac{n_2}{n_1} = \\frac{1}{\\frac{4}{3}} = \\frac{3}{4}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Cek Masuk Akal:</strong> Nilai sinus suatu sudut nyata tidak pernah boleh lebih dari 1. Jadi pembagian selalu medium kecil dibagi medium besar ($n_{\\text{kecil}} / n_{\\text{besar}}$).</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Pembiasan Cahaya (Hukum Snellius)",
    "subTopic": "Pembiasan Cahaya (Hukum Snellius)",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "pembiasan-cahaya-snellius"
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
