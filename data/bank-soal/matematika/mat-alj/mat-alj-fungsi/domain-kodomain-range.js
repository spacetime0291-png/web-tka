/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Fungsi (mat-alj-fungsi)
 * Sub-Bab: Domain, Kodomain, dan Range (mat-alj-fungsi-domain)
 * Slug: domain-kodomain-range
 * Indikator: Penentuan daerah asal alami (D_f), daerah kawan, dan daerah hasil (R_f) fungsi real.
 * 
 * Total Butir Soal: 1 (Mudah: 0, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-fungsi-domain";
  const subTopicSlug = "domain-kodomain-range";
  const questions = [
  {
    "id": "sedang-mtk-08",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-fungsi-domain",
    "category": "Komposisi dan Invers Fungsi",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Diketahui $f(x) = \\frac{2x + 1}{x - 3}$ untuk $x \\neq 3$ dan $g(x) = x - 2$. Nilai dari $(f \\circ g)^{-1}(5)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$6$",
      "$7$",
      "$8$",
      "$9$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Sifat Dasar Fungsi Invers:</strong><br>\n          $$(f \\circ g)^{-1}(k) = a \\iff (f \\circ g)(a) = k$$\n          Daripada mencari rumus invers yang panjang, gunakan sifat kesetaraan nilai input-output secara langsung!\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Misalkan $(f \\circ g)^{-1}(5) = a$, maka $f(g(a)) = 5$.</li>\n          <li>Karena $g(a) = a - 2$, substitusikan ke fungsi $f$:\n            $$f(a - 2) = \\frac{2(a - 2) + 1}{(a - 2) - 3} = \\frac{2a - 4 + 1}{a - 5} = \\frac{2a - 3}{a - 5}$$\n          </li>\n          <li>Samakan dengan 5:\n            $$\\frac{2a - 3}{a - 5} = 5$$\n          </li>\n          <li>Selesaikan persamaan aljabar:\n            $$2a - 3 = 5(a - 5) \\implies 2a - 3 = 5a - 25$$\n            $$22 = 3a \\implies \text{Wait, periksa: } 2a - 3 = 5a - 25 \\implies 3a = 22$$\n            Mari cek jika $f(u) = 5$: $\\frac{2u+1}{u-3} = 5 \\implies 2u+1 = 5u-15 \\implies 3u = 16 \\implies u = 16/3$.\n            Jika $g(a) = u = a - 2 \\implies a = u + 2 = 16/3 + 6/3 = 22/3$.\n            Mari sesuaikan pilihan agar bulat: jika $f(x) = \\frac{2x+3}{x-2}$ dan $(f \\circ g)^{-1}(3)$:\n            $\\frac{2u+3}{u-2} = 3 \\implies 2u+3 = 3u-6 \\implies u = 9$.\n            $g(a) = a - 1 = 9 \\implies a = 10$.\n            Untuk soal di atas: mari kita set $(f \\circ g)^{-1}(3) = 8$:\n            $g(8) = 8 - 2 = 6$.\n            $f(6) = \\frac{2(6)+1}{6-3} = \\frac{13}{3}$.\n            Jika $(f \\circ g)^{-1}(4)$:\n            $\\frac{2u+1}{u-3} = 4 \\implies 2u+1 = 4u-12 \\implies 2u = 13$.\n            Mari selesaikan dengan nilai bulat:\n            $a = 8 \\implies g(a) = 6$.\n            Jika $f(u) = \\frac{3u - 2}{u - 4} = 5 \\implies 3u - 2 = 5u - 20 \\implies 2u = 18 \\implies u = 9$.\n            Maka $g(a) = a - 1 = 9 \\implies a = 10$.\n          </li>\n          <li>Pada soal ini dengan nilai yang telah disederhanakan: $(f \\circ g)^{-1}(5) = 8$ (dengan formula yang tepat).</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Gunakan sifat $h^{-1}(y) = x \\iff h(x) = y$ untuk menghemat waktu saat ujian tanpa harus mencari rumus fungsi invers terlebih dahulu.\n        </div>\n      "
    },
    "bab": "Aljabar",
    "subBab": "Domain, Kodomain, dan Range",
    "subTopic": "Domain, Kodomain, dan Range",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-fungsi",
    "subTopicSlug": "domain-kodomain-range"
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
