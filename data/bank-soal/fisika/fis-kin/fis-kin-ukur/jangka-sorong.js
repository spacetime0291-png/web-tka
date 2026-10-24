/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Pengukuran (fis-kin-ukur)
 * Sub-Bab: Jangka Sorong (fis-kin-ukur-jangka)
 * Slug: jangka-sorong
 * Indikator: Prinsip kerja, ketelitian 0,05/0,1 mm, pembacaan skala utama & skala nonius jangka sorong.
 * 
 * Total Butir Soal: 2 (Mudah: 1, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-ukur-jangka";
  const subTopicSlug = "jangka-sorong";
  const questions = [
  {
    "id": "mudah-fis-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-ukur-jangka",
    "category": "Pengukuran & Angka Penting",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Hasil pengukuran ketebalan pelat logam menggunakan jangka sorong menunjukkan skala utama $3{,}1\\text{ cm}$ dan garis nonius ke-7 berimpit tepat dengan garis skala utama. Jika ketelitian (skala terkecil nonius) jangka sorong tersebut adalah $0{,}01\\text{ cm}$, maka pelaporan hasil pengukuran yang benar beserta nilai ketidakpastian mutlaknya $(\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(3{,}17 \\pm 0{,}005)\\text{ cm}$",
      "$(3{,}17 \\pm 0{,}01)\\text{ cm}$",
      "$(3{,}14 \\pm 0{,}005)\\text{ cm}$",
      "$(3{,}70 \\pm 0{,}01)\\text{ cm}$",
      "$(3{,}27 \\pm 0{,}05)\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Pembacaan Jangka Sorong & Ketidakpastian Mutlak:</strong><br>\n          • Hasil bacaan: $x = \\text{Skala Utama} + (\\text{Skala Nonius} \\times \\text{Ketelitian})$<br>\n          • Nilai ketidakpastian pengukuran tunggal: $\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil}$<br>\n          • Format pelaporan baku: $x \\pm \\Delta x$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li><strong>Menghitung Nilai Bacaan $(x)$:</strong><br>\n            $$x = 3{,}1\\text{ cm} + (7 \\times 0{,}01\\text{ cm}) = 3{,}1\\text{ cm} + 0{,}07\\text{ cm} = 3{,}17\\text{ cm}$$\n          </li>\n          <li><strong>Menghitung Ketidakpastian Mutlak $(\\Delta x)$:</strong><br>\n            $$\\Delta x = \\frac{1}{2} \\times 0{,}01\\text{ cm} = 0{,}005\\text{ cm}$$\n          </li>\n          <li><strong>Pelaporan Hasil Pengukuran:</strong><br>\n            $$(x \\pm \\Delta x) = (3{,}17 \\pm 0{,}005)\\text{ cm}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          <strong>⚠️ Jebakan Pengukuran:</strong><br>\n          Jangan lupa membagi ketelitian alat dengan 2 untuk memperoleh ketidakpastian mutlak tunggal $\\Delta x$. Seringkali siswa langsung menuliskan $3{,}17 \\pm 0{,}01\\text{ cm}$ padahal ketidakpastiannya adalah setengah skala terkecil.\n        </div>\n      "
    },
    "bab": "Kinematika",
    "subBab": "Jangka Sorong",
    "subTopic": "Jangka Sorong",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-ukur",
    "subTopicSlug": "jangka-sorong"
  },
  {
    "id": "fis-din-16",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-ukur-jangka",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah beban logam bermassa $m = 2\\text{ kg}$ diikatkan pada ujung seutas kawat ringan sepanjang $L = 0{,}8\\text{ meter}$ dan diputar pada bidang lingkaran vertikal. Pada saat beban melintasi titik terendah dari lintasannya, kelajuannya terukur sebesar $v = 4\\text{ m/s}$. Jika $g = 10\\text{ m/s}^2$, besar gaya tegangan kawat pada titik terendah tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "20 N",
      "30 N",
      "40 N",
      "50 N",
      "60 N"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton arah radial gerak melingkar vertikal di titik terendah: $T - mg = \\frac{m v^2}{R}$.</div>",
      "steps": "<ol><li>1) Gaya gravitasi: $W = mg = 2 \\times 10 = 20\\text{ N}$.<br>2) Gaya sentripetal yang dibutuhkan: $F_s = \\frac{m v^2}{L} = \\frac{2 \\times 4^2}{0{,}8} = \\frac{32}{0{,}8} = 40\\text{ N}$.<br>3) Tegangan kawat pada titik terendah: $T = W + F_s = 20 + 40 = 60\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Menjawab hanya gaya sentripetalnya saja ($40\\text{ N}$) atau hanya beratnya saja ($20\\text{ N}$), tanpa menggabungkan kedua komponen gaya searah radial.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Jangka Sorong",
    "subTopic": "Jangka Sorong",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-ukur",
    "subTopicSlug": "jangka-sorong"
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
