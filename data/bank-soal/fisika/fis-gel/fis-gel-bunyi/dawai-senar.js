/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Bunyi (fis-gel-bunyi)
 * Sub-Bab: Dawai (Senar) (fis-gel-bunyi-dawai)
 * Slug: dawai-senar
 * Indikator: Pola gelombang stasioner dawai, hukum Melde (v = sqrt(F / mu)), nada dasar, dan nada atas.
 * 
 * Total Butir Soal: 2 (Mudah: 2, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-bunyi-dawai";
  const subTopicSlug = "dawai-senar";
  const questions = [
  {
    "id": "drill-bun-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-dawai",
    "category": "Cepat Rambat Gelombang Dawai Hukum Melde",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Pada percobaan Hukum Melde, seutas dawai senar gitar diberi gaya tegangan tali sebesar $F = 100\\text{ N}$. Jika massa per satuan panjang dawai tersebut adalah $\\mu = 0{,}04\\text{ kg/m}$, maka kelajuan rambat gelombang transversal pada dawai adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$40\\text{ m/s}$",
      "$100\\text{ m/s}$",
      "$200\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Rumus Hukum Melde:</strong><br>Kelajuan rambat gelombang pada dawai berbanding lurus dengan akar gaya tegangan dan berbanding terbalik dengan akar massa persatuan panjang:<br>$$v = \\sqrt{\\frac{F}{\\mu}}$$</div>",
      "steps": "<ol><li>Identifikasi nilai yang diketahui: $F = 100\\text{ N}$, $\\mu = 0{,}04\\text{ kg/m}$.</li><li>Hitung pembagian dalam akar: $\\frac{F}{\\mu} = \\frac{100}{0{,}04} = 2500$.</li><li>Tarik akar kuadrat: $v = \\sqrt{2500} = 50\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Ingat kata kunci <em>\"Melde = Gaya per mu\"</em> ($v = \\sqrt{F/\\mu}$). Jangan mengalikan $F \\times \\mu$.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Dawai (Senar)",
    "subTopic": "Dawai (Senar)",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "dawai-senar"
  },
  {
    "id": "drill-bun-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-dawai",
    "category": "Frekuensi Nada Dasar Dawai Gitar",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seutas senar gitar memiliki panjang efektif $L = 80\\text{ cm}$. Jika gelombang transversal merambat pada senar tersebut dengan kelajuan $v = 400\\text{ m/s}$, maka frekuensi nada dasar ($f_0$) yang dihasilkan senar tersebut saat dipetik adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$250\\text{ Hz}$",
      "$500\\text{ Hz}$",
      "$125\\text{ Hz}$",
      "$300\\text{ Hz}$",
      "$400\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Frekuensi Nada Dasar Dawai (Kedua Ujung Terikat):</strong><br>Pada nada dasar, panjang dawai membentuk setengah gelombang ($L = \\frac{1}{2}\\lambda \\implies \\lambda = 2L$):<br>$$f_0 = \\frac{v}{2L}$$</div>",
      "steps": "<ol><li>Konversi satuan panjang ke meter: $L = 80\\text{ cm} = 0{,}8\\text{ m}$.</li><li>Hitung pembagi: $2L = 2 \\times 0{,}8 = 1{,}6\\text{ m}$.</li><li>Frekuensi nada dasar: $f_0 = \\frac{400\\text{ m/s}}{1{,}6\\text{ m}} = 250\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Rumus nada dasar dawai sama persis dengan pipa organa terbuka: $f_0 = \\frac{v}{2L}$. Ingat ada faktor angka 2 di penyebut!</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Dawai (Senar)",
    "subTopic": "Dawai (Senar)",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "dawai-senar"
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
