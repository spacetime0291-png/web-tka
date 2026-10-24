/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Pemanasan Global (fis-termo-global)
 * Sub-Bab: Efek Rumah Kaca (fis-termo-global-efek)
 * Slug: efek-rumah-kaca
 * Indikator: Mekanisme perangkap gelombang inframerah oleh gas rumah kaca (CO2, CH4, N2O, uap air).
 * 
 * Total Butir Soal: 2 (Mudah: 2, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-global-efek";
  const subTopicSlug = "efek-rumah-kaca";
  const questions = [
  {
    "id": "mudah-fis-10",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-global-efek",
    "category": "Efek Rumah Kaca",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Pemanasan global secara fisis terjadi karena gas-gas rumah kaca di atmosfer bumi menyerap dan memancarkan kembali sebagian radiasi elektromagnetik yang dipancarkan oleh permukaan bumi. Spektrum gelombang elektromagnetik yang diserap secara dominan oleh gas rumah kaca tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Sinar Gamma",
      "Sinar Ultraviolet",
      "Cahaya Tampak",
      "Radiasi Inframerah (Thermal)",
      "Sinar-X"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Fisika Efek Rumah Kaca:</strong><br>\n          Permukaan bumi menyerap cahaya tampak dari matahari dan meradiasikannya kembali sebagai radiasi termal bergelombang panjang yaitu <em>radiasi inframerah</em>, yang kemudian diserap oleh molekul gas rumah kaca ($CO_2, CH_4, H_2O$) sehingga memerangkap panas di troposfer.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Radiasi matahari yang masuk didominasi cahaya tampak dan UV dekat.</li>\n          <li>Radiasi bumi yang dipancarkan kembali adalah radiasi inframerah termal.</li>\n          <li>Gas rumah kaca memiliki pita serapan getaran molekul pada spektrum inframerah.</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Jangan tertukar dengan lapisan ozon di stratosfer yang menyerap radiasi ultraviolet (UV). Efek rumah kaca berkaitan dengan penyerapan radiasi inframerah.\n        </div>\n      "
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Efek Rumah Kaca",
    "subTopic": "Efek Rumah Kaca",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-global",
    "subTopicSlug": "efek-rumah-kaca"
  },
  {
    "id": "drill-pem-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-global-efek",
    "category": "Mekanisme Fisik Efek Rumah Kaca",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Secara fisis, gas rumah kaca (seperti $CO_2$ dan $CH_4$) memicu peningkatan suhu rata-rata atmosfer bumi karena molekul gas-gas tersebut memiliki sifat ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Meneruskan cahaya tampak matahari, namun menyerap dan memancarkan kembali radiasi inframerah dari bumi",
      "Menyerap seluruh radiasi ultraviolet matahari dan mengubahnya menjadi energi mekanik",
      "Memantulkan seluruh cahaya tampak matahari kembali ke ruang angkasa",
      "Mencegah pelepasan gas oksigen ke atmosfer luar angkasa",
      "Menghasilkan energi panas sendiri melalui reaksi fusi nuklir alami di stratosfer"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Proses Fisik Efek Rumah Kaca:</strong><br>Radiasi matahari yang masuk sebagian besar berupa gelombang pendek (cahaya tampak) yang lolos melewati atmosfer. Permukaan bumi menyerap energi ini lalu memancarkannya kembali sebagai <strong>gelombang panjang (inframerah termal)</strong> yang diserap oleh gas rumah kaca sehingga terperangkap di atmosfer.</div>",
      "steps": "<ol><li>Gelombang masuk: Gelombang pendek / cahaya tampak (transparan bagi gas rumah kaca).</li><li>Gelombang terpancar dari bumi: Gelombang panjang / inframerah.</li><li>Peran gas rumah kaca: Mengabsorpsi radiasi inframerah dan memancarkannya kembali ke permukaan bumi.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Bedakan:</strong> Lapisan ozon ($O_3$) menyerap sinar Ultraviolet (UV). Gas rumah kaca ($CO_2, CH_4$) menyerap sinar Inframerah (panas).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Efek Rumah Kaca",
    "subTopic": "Efek Rumah Kaca",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-global",
    "subTopicSlug": "efek-rumah-kaca"
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
