/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Pengukuran (fis-kin-ukur)
 * Sub-Bab: Mikrometer Sekrup (fis-kin-ukur-mikro)
 * Slug: mikrometer-sekrup
 * Indikator: Prinsip kerja, ketelitian 0,01 mm, pembacaan skala utama & skala putar silinder bidal.
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-ukur-mikro";
  const subTopicSlug = "mikrometer-sekrup";
  const questions = [
  {
    "id": "sup-fis-kin-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Pembacaan Mikrometer Sekrup",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang siswa mengukur diameter sebuah kawat tembaga menggunakan mikrometer sekrup. Skala utama menunjukkan angka $4{,}5\\text{ mm}$ dan garis skala nonius (putar) ke-38 berimpit tepat dengan garis mendatar skala utama. Jika ketelitian alat adalah $0{,}01\\text{ mm}$, maka penulisan hasil pengukuran diameter kawat beserta nilai ketidakpastian mutlaknya $(\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(4{,}88 \\pm 0{,}005)\\text{ mm}$",
      "$(4{,}88 \\pm 0{,}01)\\text{ mm}$",
      "$(4{,}38 \\pm 0{,}005)\\text{ mm}$",
      "$(4{,}80 \\pm 0{,}01)\\text{ mm}$",
      "$(5{,}38 \\pm 0{,}005)\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Pembacaan Mikrometer Sekrup:</strong><br>• $x = \\text{Skala Utama} + (\\text{Skala Nonius} \\times 0{,}01\\text{ mm})$<br>• Nilai ketidakpastian mutlak pengukuran tunggal: $\\Delta x = \\frac{1}{2} \\times 0{,}01\\text{ mm} = 0{,}005\\text{ mm}$.</div>",
      "steps": "<ol><li>Skala utama terlihat: $4{,}5\\text{ mm}$.</li><li>Skala putar nonius: $38 \\times 0{,}01\\text{ mm} = 0{,}38\\text{ mm}$.</li><li>Hasil pengukuran: $x = 4{,}5 + 0{,}38 = 4{,}88\\text{ mm}$.</li><li>Format pelaporan baku: $(4{,}88 \\pm 0{,}005)\\text{ mm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Siswa sering lupa menambahkan garis setengah milimeter ($0{,}5\\text{ mm}$) pada skala utama bawah, sehingga keliru membaca $4{,}38\\text{ mm}$.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Mikrometer Sekrup",
    "subTopic": "Mikrometer Sekrup",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-ukur",
    "subTopicSlug": "mikrometer-sekrup"
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
