/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Pemanasan Global (fis-termo-global)
 * Sub-Bab: Mitigasi Pemanasan Global (fis-termo-global-mitigasi)
 * Slug: mitigasi-pemanasan-global
 * Indikator: Transisi energi terbarukan, efisiensi energi, reboisasi, dan kebijakan reduksi jejak karbon.
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-global-mitigasi";
  const subTopicSlug = "mitigasi-pemanasan-global";
  const questions = [
  {
    "id": "drill-pem-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-global-mitigasi",
    "category": "Gas Rumah Kaca dengan GWP Tinggi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Meskipun konsentrasinya di atmosfer lebih kecil daripada gas karbon dioksida ($CO_2$), gas metana ($CH_4$) menjadi perhatian besar dalam mitigasi pemanasan global karena ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Memiliki potensi pemanasan global (GWP) per molekul yang jauh lebih tinggi daripada $CO_2$ dalam memerangkap panas",
      "Dapat merusak lapisan ozon stratosfer secara langsung",
      "Menyebabkan hujan asam sulfat pekat",
      "Menghalangi fotosintesis tanaman darat dan laut",
      "Dapat terbakar secara spontan di udara bebas pada suhu kamar"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Global Warming Potential (GWP):</strong><br>Metana ($CH_4$) memiliki indeks GWP sekitar 25–28 kali lebih kuat daripada $CO_2$ dalam kurun waktu 100 tahun dalam hal efektivitas penyerapan radiasi inframerah.</div>",
      "steps": "<ol><li>Molekul $CH_4$ memiliki ikatan kimia yang mampu bergetar dan mengabsorpsi spektrum gelombang inframerah termal secara sangat efektif.</li><li>Oleh sebab itu, penurunan emisi gas metana dari sektor limbah dan peternakan menjadi salah satu prioritas mitigasi iklim terpenting.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Catatan Konseptual:</strong> $CO_2$ adalah kontributor terbesar berdasarkan total volume emisi, tetapi $CH_4$ jauh lebih efektif memerangkap kalor per satu satuan molekul.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mitigasi Pemanasan Global",
    "subTopic": "Mitigasi Pemanasan Global",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-global",
    "subTopicSlug": "mitigasi-pemanasan-global"
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
