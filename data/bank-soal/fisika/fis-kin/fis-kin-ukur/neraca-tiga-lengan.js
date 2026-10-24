/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Pengukuran (fis-kin-ukur)
 * Sub-Bab: Neraca Tiga Lengan (fis-kin-ukur-neraca)
 * Slug: neraca-tiga-lengan
 * Indikator: Pengukuran massa presisi, pembacaan posisi anting tiga lengan neraca Ohaus.
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-ukur-neraca";
  const subTopicSlug = "neraca-tiga-lengan";
  const questions = [
  {
    "id": "sup-fis-kin-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Pembacaan Neraca Tiga Lengan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dalam praktikum fisika dasar, penimbangan massa suatu sampel mineral menggunakan neraca tiga lengan Ohaus menunjukkan posisi anting geser sebagai berikut:<br>• Lengan belakang (skala ratusan): $300\\text{ gram}$<br>• Lengan tengah (skala puluhan): $40\\text{ gram}$<br>• Lengan depan (skala satuan & persepuluhan): $5{,}6\\text{ gram}$<br>Massa sampel mineral tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$345{,}6\\text{ gram}$",
      "$340{,}56\\text{ gram}$",
      "$305{,}6\\text{ gram}$",
      "$354{,}6\\text{ gram}$",
      "$395{,}6\\text{ gram}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Prinsip Kerja Neraca Tiga Lengan Ohaus:</strong><br>Massa benda merupakan hasil penjumlahan langsung dari penunjukan ketiga lengan penyeimbang: $M = M_{\\text{ratusan}} + M_{\\text{puluhan}} + M_{\\text{satuan/desimal}}$.</div>",
      "steps": "<ol><li>Massa lengan belakang: $300\\text{ g}$.</li><li>Massa lengan tengah: $40\\text{ g}$.</li><li>Massa lengan depan: $5{,}6\\text{ g}$.</li><li>Massa total: $M = 300 + 40 + 5{,}6 = 345{,}6\\text{ gram}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Tertukar antara posisi skala puluhan dan ratusan, atau salah membaca nilai skala nonius pada lengan depan.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Neraca Tiga Lengan",
    "subTopic": "Neraca Tiga Lengan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-ukur",
    "subTopicSlug": "neraca-tiga-lengan"
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
