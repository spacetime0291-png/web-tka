/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Gaya dan Gerak (fis-din-gaya)
 * Sub-Bab: Gaya Berat dan Gaya Normal (fis-din-gaya-berat-normal)
 * Slug: gaya-berat-normal
 * Indikator: Gaya berat gravitasi (w = m * g) dan gaya normal pada bidang horizontal, bidang miring, dan dalam lift.
 * 
 * Total Butir Soal: 4 (Mudah: 3, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-gaya-berat-normal";
  const subTopicSlug = "gaya-berat-normal";
  const questions = [
  {
    "id": "fis-din-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang siswa bermassa $50\\text{ kg}$ berdiri di atas timbangan badan di dalam lift hotel yang sedang bergerak turun dengan perlambatan konstan $2\\text{ m/s}^2$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, angka gaya desak normal yang ditunjukkan oleh timbangan adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "400 N",
      "500 N",
      "600 N",
      "700 N",
      "800 N"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton pada kerangka acuan vertikal: $\\Sigma F_y = m \\cdot a$.</div>",
      "steps": "<ol><li>Lift bergerak turun dengan perlambatan, yang berarti vektor percepatan sistem mengarah ke atas ($a = +2\\text{ m/s}^2$). Persamaan gaya normal pada siswa: $N - W = m \\cdot a \\Rightarrow N = m(g + a) = 50(10 + 2) = 600\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering terkecoh menganggap gerakan turun selalu menghasilkan $N = m(g - a) = 400\\text{ N}$, tanpa memperhatikan kata 'perlambatan' yang membalik arah vektor percepatan ke atas.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-berat-normal"
  },
  {
    "id": "fis-din-25",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah paket kargo bermassa $10\\text{ kg}$ tergantung pada neraca pegas di langit-langit lift gudang. Jika kabel penggantung lift tiba-tiba putus sehingga lift jatuh bebas di bawah pengaruh gravitasi ($g = 10\\text{ m/s}^2$), angka skala yang terbaca pada neraca pegas selama lift jatuh bebas adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "0 N",
      "50 N",
      "100 N",
      "150 N",
      "200 N"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kondisi jatuh bebas dan bobot semu: saat percepatan sistem $a = g$ ke bawah, berat semu bernilai nol (keadaan tanpa bobot / weightlessness).</div>",
      "steps": "<ol><li>Persamaan gaya pada neraca pegas: $mg - T = ma$. Karena lift jatuh bebas ($a = g$), maka: $T = m(g - a) = m(g - g) = 0\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering mengira pegas tetap menunjukkan berat sejati benda $mg = 100\\text{ N}$ karena mengabaikan percepatan kerangka acuan lift.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-berat-normal"
  },
  {
    "id": "fis-din-42",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Gravitasi Universal Newton",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang astronot memiliki berat $W = 600\\text{ N}$ di permukaan bumi. Jika astronot tersebut mendarat di permukaan sebuah planet baru yang memiliki massa $3$ kali massa bumi ($M_P = 3 M_B$) dan jari-jari $2$ kali jari-jari bumi ($R_P = 2 R_B$), berat astronot tersebut di permukaan planet baru adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "300 N",
      "400 N",
      "450 N",
      "450 N",
      "900 N"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Perbandingan gaya berat benda pada dua planet: $W \\propto \\frac{M}{R^2}$.</div>",
      "steps": "<ol><li>$$\\frac{W_P}{W_B} = \\left(\\frac{M_P}{M_B}\\right) \\left(\\frac{R_B}{R_P}\\right)^2 = (3) \\left(\\frac{1}{2}\\right)^2 = \\frac{3}{4} \\Rightarrow W_P = \\frac{3}{4} \\times 600 = 450\\text{ N}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengabaikan pengkuadratan jari-jari sehingga menghitung $\\frac{3}{2} \\times 600 = 900\\text{ N}$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-berat-normal"
  },
  {
    "id": "fis-din-27",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seorang antariksawan bermassa $70\\text{ kg}$ berada di kursi kabin roket luar angkasa saat peluncuran vertikal ke atas. Roket mengalami percepatan konstan sebesar $a = 30\\text{ m/s}^2$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya tekan normal yang dialami antariksawan tersebut terhadap sandaran kursinya adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2100 N",
      "2800 N",
      "3500 N",
      "4200 N",
      "4900 N"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton pada kerangka acuan vertikal mengalami akselerasi tinggi ($g$-force): $N = m(g + a)$.</div>",
      "steps": "<ol><li>Persamaan gerak vertikal: $N - mg = ma \\Rightarrow N = m(g + a) = 70(10 + 30) = 70 \\times 40 = 2800\\text{ N}$. Antariksawan merasakan gaya 4 kali berat badannya ($4g$).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Hanya menghitung gaya inersia $ma = 2100\\text{ N}$ tanpa menambahkan gaya berat $mg = 700\\text{ N}$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-berat-normal"
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
