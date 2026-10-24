/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Teori Gas Ideal (fis-termo-gas)
 * Sub-Bab: Hukum Boyle & Gay-Lussac (fis-termo-gas-boyle)
 * Slug: hukum-boyle-gay-lussac
 * Indikator: Hukum Boyle isotermal (P * V = konstan) dan Gay-Lussac isokhorik (P / T = konstan).
 * 
 * Total Butir Soal: 2 (Mudah: 1, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-gas-boyle";
  const subTopicSlug = "hukum-boyle-gay-lussac";
  const questions = [
  {
    "id": "drill-gas-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-gas-boyle",
    "category": "Hukum Boyle (Proses Isotermal)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu gas ideal berada di dalam silinder berpenghisap dengan volume awal $V_1 = 2\\text{ liter}$ dan tekanan awal $P_1 = 3\\text{ atm}$. Jika penghisap ditekan perlahan pada suhu tetap (isotermal) sehingga volumenya menyusut menjadi $V_2 = 0{,}5\\text{ liter}$, tekanan gas sekarang ($P_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$12\\text{ atm}$",
      "$6\\text{ atm}$",
      "$1{,}5\\text{ atm}$",
      "$9\\text{ atm}$",
      "$0{,}75\\text{ atm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Boyle (Suhu Konstan):</strong><br>Hasil kali tekanan dan volume gas dalam ruang tertutup bernilai konstan:<br>$$P_1 \\cdot V_1 = P_2 \\cdot V_2 \\implies P_2 = \\frac{P_1 V_1}{V_2}$$</div>",
      "steps": "<ol><li>Identifikasi data: $P_1 = 3\\text{ atm}$, $V_1 = 2\\text{ L}$, $V_2 = 0{,}5\\text{ L}$.</li><li>Hitung tekanan akhir: $P_2 = \\frac{3 \\times 2}{0{,}5} = \\frac{6}{0{,}5} = 12\\text{ atm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Volume mengecil $4\\times$ (dari $2\\text{ L} \\to 0{,}5\\text{ L}$) $implies$ tekanan otomatis melonjak naik $4\\times$ (dari $3\\text{ atm} \\to 12\\text{ atm}$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle & Gay-Lussac",
    "subTopic": "Hukum Boyle & Gay-Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-gas",
    "subTopicSlug": "hukum-boyle-gay-lussac"
  },
  {
    "id": "sup-fis-ter-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-gas-boyle",
    "category": "Hukum Boyle-Gay Lussac Ruang Tertutup",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu gas ideal di dalam bejana tertutup awalnya berada pada tekanan $P_1 = 2\\text{ atm}$, volume $V_1 = 4\\text{ liter}$, dan suhu mutlak $T_1 = 300\\text{ K}$. Jika gas dipanaskan hingga suhunya menjadi $T_2 = 450\\text{ K}$ dan volumenya dibiarkan memuai menjadi $V_2 = 6\\text{ liter}$, tekanan gas sekarang ($P_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ atm}$",
      "$1{,}5\\text{ atm}$",
      "$2{,}5\\text{ atm}$",
      "$3\\text{ atm}$",
      "$1\\text{ atm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Persamaan Keadaan Boyle-Gay Lussac:</strong><br>Untuk jumlah mol gas tetap pada ruang tertutup: $\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$. Pastikan suhu selalu dalam skala Kelvin mutlak!</div>",
      "steps": "<ol><li>$\\frac{2 \\times 4}{300} = \\frac{P_2 \\times 6}{450}$.</li><li>$\\frac{8}{300} = \\frac{6 P_2}{450} \\implies \\frac{8}{2} = \\frac{6 P_2}{3} = 2 P_2$.</li><li>$4 = 2 P_2 \\implies P_2 = 2\\text{ atm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengabaikan faktor suhu atau lupa bahwa suhu gas ideal wajib bersatuan Kelvin.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle & Gay-Lussac",
    "subTopic": "Hukum Boyle & Gay-Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-gas",
    "subTopicSlug": "hukum-boyle-gay-lussac"
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
