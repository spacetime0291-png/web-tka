/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lurus (fis-kin-gl)
 * Sub-Bab: Analisis Grafik Gerak Lurus (fis-kin-gl-grafik)
 * Slug: analisis-grafik
 * Indikator: Interpretasi grafik s-t, v-t, dan a-t, gradien kecepatan/percepatan, serta luas area grafik.
 * 
 * Total Butir Soal: 1 (Mudah: 0, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-gl-grafik";
  const subTopicSlug = "analisis-grafik";
  const questions = [
  {
    "id": "sup-fis-kin-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-grafik",
    "category": "Analisis Grafik Kecepatan-Waktu (v-t)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah partikel bergerak lurus dengan grafik kecepatan ($v$) terhadap waktu ($t$) berbentuk trapesium: bergerak dari keadaan diam hingga mencapai $v = 20\\text{ m/s}$ dalam waktu $4\\text{ s}$, kemudian melaju dengan kecepatan konstan selama $6\\text{ s}$, lalu direm beraturan hingga berhenti dalam selang waktu $2\\text{ s}$. Jarak total yang ditempuh partikel selama $12\\text{ detik}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$180\\text{ meter}$",
      "$200\\text{ meter}$",
      "$220\\text{ meter}$",
      "$240\\text{ meter}$",
      "$160\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Geometri Luas Kurva Grafik $v-t$:</strong><br>Jarak tempuh total partikel pada gerak satu dimensi sama dengan luas daerah di bawah kurva grafik kecepatan terhadap waktu ($s = \\int v\\,dt = \\text{Luas Bidang}$).</div>",
      "steps": "<ol><li>Bangun di bawah kurva berbentuk trapesium dengan alas bawah $a = 12\\text{ s}$ (dari $t = 0$ hingga $t = 12\\text{ s}$).</li><li>Sisi sejajar atas: selang saat kecepatan konstan $b = 6\\text{ s}$ (dari $t = 4$ hingga $t = 10\\text{ s}$).</li><li>Tinggi trapesium: $h = v_{\\max} = 20\\text{ m/s}$.</li><li>Luas trapesium: $s = \\frac{a + b}{2} \\times h = \\frac{12 + 6}{2} \\times 20 = 9 \\times 20 = 180\\text{ meter}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menghitung sisi sejajar atas $10\\text{ s}$ bukannya durasi kecepatan konstan ($10 - 4 = 6\\text{ s}$).</div>"
    },
    "bab": "Kinematika",
    "subBab": "Analisis Grafik Gerak Lurus",
    "subTopic": "Analisis Grafik Gerak Lurus",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "analisis-grafik"
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
