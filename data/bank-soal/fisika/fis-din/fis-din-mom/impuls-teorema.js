/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Momentum dan Impuls (fis-din-mom)
 * Sub-Bab: Impuls & Teorema Impuls-Momentum (fis-din-mom-impuls)
 * Slug: impuls-teorema
 * Indikator: Gaya impulsif rata-rata, luas grafik gaya terhadap waktu (F-t), dan teorema I = Delta p.
 * 
 * Total Butir Soal: 2 (Mudah: 2, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-mom-impuls";
  const subTopicSlug = "impuls-teorema";
  const questions = [
  {
    "id": "mudah-fis-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-mom-impuls",
    "category": "Momentum Linier",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah bola sepak bermassa $0{,}5\\text{ kg}$ ditendang sehingga bergerak dengan kecepatan $20\\text{ m/s}$. Besar momentum linier bola tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ kg}\\cdot\\text{m/s}$",
      "$10\\text{ kg}\\cdot\\text{m/s}$",
      "$15\\text{ kg}\\cdot\\text{m/s}$",
      "$20\\text{ kg}\\cdot\\text{m/s}$",
      "$40\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Definisi Momentum Linier:</strong><br>\n          $$p = m \\cdot v$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$p = (0{,}5\\text{ kg})(20\\text{ m/s}) = 10\\text{ kg}\\cdot\\text{m/s}$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Pastikan satuan massa dalam kilogram (kg) dan kecepatan dalam meter per detik (m/s).\n        </div>\n      "
    },
    "bab": "Dinamika",
    "subBab": "Impuls & Teorema Impuls-Momentum",
    "subTopic": "Impuls & Teorema Impuls-Momentum",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-mom",
    "subTopicSlug": "impuls-teorema"
  },
  {
    "id": "sup-fis-din-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-mom-impuls",
    "category": "Teorema Impuls-Momentum",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah bola kasti bermassa $0{,}2\\text{ kg}$ dilempar mendatar ke arah kiri dengan kelajuan $10\\text{ m/s}$. Seorang pemukul memukul bola tersebut sehingga berbalik arah melaju ke kanan dengan kelajuan $15\\text{ m/s}$. Jika waktu kontak pemukul dan bola adalah $\\Delta t = 0{,}02\\text{ detik}$, besar gaya kontak rata-rata yang diberikan pemukul pada bola adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$250\\text{ N}$",
      "$50\\text{ N}$",
      "$100\\text{ N}$",
      "$150\\text{ N}$",
      "$200\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Teorema Impuls-Momentum (Vektor):</strong><br>Impuls gaya sama dengan perubahan momentum partikel: $\\vec{I} = \\vec{F} \\cdot \\Delta t = \\Delta \\vec{p} = m(\\vec{v}_2 - \\vec{v}_1)$. Perhatikan tanda positif dan negatif arah vektor kecepatan!</div>",
      "steps": "<ol><li>Tetapkan arah kanan sebagai positif ($+$) dan arah kiri sebagai negatif ($-$).</li><li>$v_1 = -10\\text{ m/s}$, $v_2 = +15\\text{ m/s}$.</li><li>Perubahan momentum: $\\Delta p = m(v_2 - v_1) = 0{,}2 \\cdot (15 - (-10)) = 0{,}2 \\cdot 25 = 5\\text{ N}\\cdot\\text{s}$.</li><li>Gaya rata-rata: $F = \\frac{\\Delta p}{\\Delta t} = \\frac{5}{0{,}02} = 250\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengurangkan kecepatan tanpa memperhatikan tanda arah: $15 - 10 = 5\\text{ m/s}$, sehingga menghasilkan $F = 50\\text{ N}$ yang salah fatal.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Impuls & Teorema Impuls-Momentum",
    "subTopic": "Impuls & Teorema Impuls-Momentum",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-mom",
    "subTopicSlug": "impuls-teorema"
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
