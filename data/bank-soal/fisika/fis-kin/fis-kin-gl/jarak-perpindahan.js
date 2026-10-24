/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lurus (fis-kin-gl)
 * Sub-Bab: Jarak dan Perpindahan (fis-kin-gl-jarak)
 * Slug: jarak-perpindahan
 * Indikator: Perbedaan besaran skalar (jarak) dan vektor (perpindahan) pada lintasan gerak lurus.
 * 
 * Total Butir Soal: 2 (Mudah: 1, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-gl-jarak";
  const subTopicSlug = "jarak-perpindahan";
  const questions = [
  {
    "id": "sup-fis-kin-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-jarak",
    "category": "Jarak dan Perpindahan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang pelari bergerak lurus ke arah timur sejauh $80\\text{ meter}$, kemudian berbelok tepat ke arah utara dan berlari sejauh $60\\text{ meter}$. Nilai jarak tempuh total dan besar perpindahan yang dialami pelari tersebut berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$140\\text{ meter}$ dan $100\\text{ meter}$",
      "$100\\text{ meter}$ dan $140\\text{ meter}$",
      "$140\\text{ meter}$ dan $20\\text{ meter}$",
      "$100\\text{ meter}$ dan $100\\text{ meter}$",
      "$140\\text{ meter}$ dan $140\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Jarak (Skalar) vs Perpindahan (Vektor):</strong><br>• Jarak ($s$): total panjang lintasan yang ditempuh tanpa memperhatikan arah.<br>• Perpindahan ($\\Delta \\vec{r}$): perubahan posisi terpendek dari titik awal ke titik akhir (vektor).</div>",
      "steps": "<ol><li>Jarak total: $s = 80 + 60 = 140\\text{ meter}$.</li><li>Perpindahan (resultan vektor siku-siku): $|\\Delta \\vec{r}| = \\sqrt{80^2 + 60^2} = \\sqrt{6400 + 3600} = \\sqrt{10000} = 100\\text{ meter}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menyamakan nilai perpindahan dengan jarak total lintasan gerak.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Jarak dan Perpindahan",
    "subTopic": "Jarak dan Perpindahan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "jarak-perpindahan"
  },
  {
    "id": "sedang-fis-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-jarak",
    "category": "Gerak Parabola Dua Dimensi",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah peluru ditembakkan dari permukaan tanah datar dengan kecepatan awal $v_0 = 50\\text{ m/s}$ pada sudut elevasi $\\theta$ dengan $\\sin\\theta = 0{,}6$ (dan $\\cos\\theta = 0{,}8$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$ dan gesekan udara diabaikan, waktu total peluru di udara hingga mendarat kembali di tanah serta jarak mendatar terjauh ($X_{\\max}$) yang dicapai peluru berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6\\text{ s}$ dan $240\\text{ m}$",
      "$3\\text{ s}$ dan $120\\text{ m}$",
      "$6\\text{ s}$ dan $180\\text{ m}$",
      "$8\\text{ s}$ dan $320\\text{ m}$",
      "$5\\text{ s}$ dan $200\\text{ m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Analisis Komponen Gerak Parabola:</strong><br>\n          • Sumbu horizontal (GLB): $v_x = v_0\\cos\\theta$ (konstan), $X = v_x \\cdot t$<br>\n          • Sumbu vertikal (GLBB gravitasi): $v_{0y} = v_0\\sin\\theta$, $v_y = v_{0y} - gt$<br>\n          • Waktu mencapai titik puncak: $t_p = \\frac{v_0\\sin\\theta}{g}$<br>\n          • Waktu total di udara: $t_{\\text{udara}} = 2 t_p = \\frac{2v_0\\sin\\theta}{g}$<br>\n          • Jarak terjauh: $X_{\\max} = v_x \\cdot t_{\\text{udara}}$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li><strong>Hitung Komponen Kecepatan Awal:</strong><br>\n            $$v_x = 50 \\times 0{,}8 = 40\\text{ m/s}$$\n            $$v_{0y} = 50 \\times 0{,}6 = 30\\text{ m/s}$$\n          </li>\n          <li><strong>Hitung Waktu Total di Udara $(t_{\\text{udara}})$:</strong><br>\n            $$t_{\\text{udara}} = \\frac{2 v_{0y}}{g} = \\frac{2(30)}{10} = 6\\text{ detik}$$\n          </li>\n          <li><strong>Hitung Jarak Jangkauan Maksimum $(X_{\\max})$:</strong><br>\n            $$X_{\\max} = v_x \\times t_{\\text{udara}} = 40\\text{ m/s} \\times 6\\text{ s} = 240\\text{ meter}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          <strong>⚠️ Jebakan Waktu:</strong><br>\n          Waktu $t = 3\\text{ detik}$ hanyalah waktu saat peluru berada di titik puncak (tertinggi). Untuk jarak mendatar total di tanah, harus menggunakan waktu tempuh total bolak-balik ($2 \\times 3 = 6\\text{ s}$).\n        </div>\n      "
    },
    "bab": "Kinematika",
    "subBab": "Jarak dan Perpindahan",
    "subTopic": "Jarak dan Perpindahan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "jarak-perpindahan"
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
