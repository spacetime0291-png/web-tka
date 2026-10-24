/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Cahaya & Optik (fis-gel-optik)
 * Sub-Bab: Lensa Cekung dan Cembung (fis-gel-optik-lensa)
 * Slug: lensa-cekung-cembung
 * Indikator: Persamaan pembuat lensa, kekuatan lensa (P = 100/f dioptri), dan sifat bayangan nyata/maya.
 * 
 * Total Butir Soal: 4 (Mudah: 3, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-optik-lensa";
  const subTopicSlug = "lensa-cekung-cembung";
  const questions = [
  {
    "id": "drill-cah-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Kuat Lensa (Daya Dioptri)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah lensa cembung memiliki jarak fokus $f = +25\\text{ cm}$. Kuat lensa (daya lensa) tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+4\\text{ Dioptri}$",
      "$+2{,}5\\text{ Dioptri}$",
      "$+0{,}04\\text{ Dioptri}$",
      "$-4\\text{ Dioptri}$",
      "$+10\\text{ Dioptri}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Rumus Kuat Lensa (Dioptri):</strong><br>$$P = \\frac{1}{f\\text{ (meter)}} = \\frac{100}{f\\text{ (cm)}}$$</div>",
      "steps": "<ol><li>Jarak fokus dalam cm: $f = 25\\text{ cm}$.</li><li>Hitung kuat lensa: $P = \\frac{100}{25} = +4\\text{ Dioptri}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Jika fokus dalam cm, langsung bagi dengan 100 ($P = 100/f$). Jika fokus dalam meter, $P = 1/f$.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "lensa-cekung-cembung"
  },
  {
    "id": "drill2-cah-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Lensa Cekung (Divergen)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah benda diletakkan pada jarak $s = 30\\text{ cm}$ di depan sebuah lensa cekung yang memiliki jarak fokus $|f| = 15\\text{ cm}$. Jarak bayangan yang terbentuk ($s'$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-10\\text{ cm}$ (maya dan tegak)",
      "$+10\\text{ cm}$ (nyata dan terbalik)",
      "$-30\\text{ cm}$ (maya dan tegak)",
      "$+30\\text{ cm}$ (nyata dan terbalik)",
      "$-5\\text{ cm}$ (maya dan tegak)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Sifat Mutlak Lensa Cekung:</strong><br>Lensa cekung bersifat menyebarkan cahaya (divergen) dengan fokus <strong>negatif</strong> ($f = -15\\text{ cm}$). Bayangannya selalu bersifat <strong>maya, tegak, dan diperkecil</strong> ($s' < 0$).</div>",
      "steps": "<ol><li>$f = -15\\text{ cm}$, $s = +30\\text{ cm}$.</li><li>$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s} = -\\frac{1}{15} - \\frac{1}{30} = -\\frac{2}{30} - \\frac{1}{30} = -\\frac{3}{30} = -\\frac{1}{10}$.</li><li>$s' = -10\\text{ cm}$ (maya di depan lensa).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Karakteristik Tetap Lensa Cekung:</strong> Lensa cekung tidak pernah bisa menghasilkan bayangan nyata pada posisi benda real apa pun. Nilai $s'$ selalu negatif.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "lensa-cekung-cembung"
  },
  {
    "id": "drill2-cah-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Kuat Lensa Gabungan Bersentuhan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah lensa tipis ditempelkan berimpit (bersentuhan sumbu utama). Lensa pertama adalah lensa cembung dengan kuat lensa $P_1 = +5\\text{ Dioptri}$, dan lensa kedua adalah lensa cekung dengan kuat lensa $P_2 = -2\\text{ Dioptri}$. Kuat lensa total sistem gabungan tersebut ($P_{\\text{gab}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+3\\text{ Dioptri}$",
      "$+7\\text{ Dioptri}$",
      "$-10\\text{ Dioptri}$",
      "$+2{,}5\\text{ Dioptri}$",
      "$+1{,}5\\text{ Dioptri}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kuat Lensa Sistem Gabungan Berimpit:</strong><br>Kuat lensa gabungan merupakan penjumlahan aljabar langsung dari kuat masing-masing lensa:<br>$$P_{\\text{gab}} = P_1 + P_2$$</div>",
      "steps": "<ol><li>$P_1 = +5\\text{ D}$ (cembung).</li><li>$P_2 = -2\\text{ D}$ (cekung).</li><li>$P_{\\text{gab}} = (+5) + (-2) = +3\\text{ Dioptri}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Sifat Akhir Gabungan:</strong> Karena $P_{\\text{gab}} > 0$ ($+3\\text{ D}$), sistem gabungan kedua lensa tersebut berperilaku seperti sebuah lensa cembung dengan jarak fokus $f = 100/3 \\approx 33{,}3\\text{ cm}$.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "lensa-cekung-cembung"
  },
  {
    "id": "sup-fis-gel-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Pembentukan Bayangan Lensa Cembung",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah benda diletakkan pada jarak $12\\text{ cm}$ di depan sebuah lensa cembung yang memiliki panjang fokus $8\\text{ cm}$. Jarak bayangan dan sifat bayangan yang terbentuk berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$24\\text{ cm}$, nyata dan terbalik",
      "$24\\text{ cm}$, maya dan tegak",
      "$16\\text{ cm}$, nyata dan terbalik",
      "$18\\text{ cm}$, nyata dan tegak",
      "$4{,}8\\text{ cm}$, maya dan tegak"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Persamaan Lensa Tipis Gauss:</strong><br>$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}$. Tanda $s' > 0$ menandakan bayangan nyata di belakang lensa (selalu terbalik).</div>",
      "steps": "<ol><li>$f = +8\\text{ cm}$, $s = +12\\text{ cm}$.</li><li>$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s} = \\frac{1}{8} - \\frac{1}{12} = \\frac{3 - 2}{24} = \\frac{1}{24}$.</li><li>$s' = +24\\text{ cm}$. Karena bertanda positif, bayangannya bersifat <strong>nyata dan terbalik</strong>.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menganggap bayangan pada cermin dan lensa memiliki aturan tanda sama untuk letak maya/nyata.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "lensa-cekung-cembung"
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
