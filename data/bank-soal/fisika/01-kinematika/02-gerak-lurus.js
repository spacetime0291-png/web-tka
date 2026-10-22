/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Sub-topik: Gerak Lurus (fis-kin-2)
 * Indikator: Jarak & perpindahan (skalar & vektor); kelajuan & kecepatan; karakteristik & grafik GLB; karakteristik, rumus, & grafik GLBB.
 * 
 * Total Butir Soal: 4 Soal (Mudah: 2, Sedang: 2, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-2";
  const questions = [
  {
    "id": "mudah-fis-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-2",
    "category": "Gerak Lurus Beraturan (GLB/GLBB)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah mobil bergerak lurus dengan kecepatan awal $10\\text{ m/s}$ kemudian dipercepat secara konstan sebesar $2\\text{ m/s}^2$ selama $5\\text{ detik}$. Jarak total yang ditempuh mobil selama selang waktu tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\text{ meter}$",
      "$65\\text{ meter}$",
      "$75\\text{ meter}$",
      "$85\\text{ meter}$",
      "$100\\text{ meter}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Rumus Kinematika GLBB Dipercepat:</strong><br>\n          $$s = v_0 t + \\frac{1}{2} a t^2$$\n          dengan $v_0$ kecepatan awal, $a$ percepatan, dan $t$ selang waktu.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li><strong>Identifikasi Variabel:</strong><br>\n            $v_0 = 10\\text{ m/s}$, $a = 2\\text{ m/s}^2$, $t = 5\\text{ s}$.\n          </li>\n          <li><strong>Substitusi ke Persamaan Jarak GLBB:</strong><br>\n            $$s = (10)(5) + \\frac{1}{2}(2)(5^2) = 50 + 25 = 75\\text{ meter}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          <strong>⚠️ Kesalahan Umum:</strong> Lupa memangkatkan waktu $t^2 = 25$ atau lupa mengalikan dengan $\\frac{1}{2}$.\n        </div>\n      "
    },
    "bab": "Kinematika",
    "subBab": "Gerak Lurus",
    "subTopic": "Gerak Lurus",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "sup-fis-kin-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-2",
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
    "subBab": "Gerak Lurus",
    "subTopic": "Gerak Lurus",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "sedang-fis-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-2",
    "category": "Kinematika Gerak Lurus Pengejaran",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Mobil patroli kepolisian $A$ yang semula diam mulai bergerak dengan percepatan konstan $a = 2\\text{ m/s}^2$ untuk mengejar mobil pelanggar $B$. Pada saat yang bersamaan, mobil $B$ melintas melewati mobil $A$ dengan kelajuan tetap $v = 10\\text{ m/s}$ pada lintasan lurus yang sama. Waktu yang diperlukan mobil $A$ untuk tepat menyusul mobil $B$ sejak awal gerak adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ detik}$",
      "$8\\text{ detik}$",
      "$10\\text{ detik}$",
      "$12\\text{ detik}$",
      "$15\\text{ detik}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Kondisi Pertemuan/Pengejaran Dua Benda:</strong><br>\n          Dua benda yang berangkat dari titik awal yang sama akan bertemu saat jarak tempuh keduanya sama:<br>\n          $$s_A(t) = s_B(t)$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Persamaan jarak mobil $A$ (GLBB dari diam): $s_A = \\frac{1}{2} a t^2 = \\frac{1}{2}(2) t^2 = t^2$.</li>\n          <li>Persamaan jarak mobil $B$ (GLB): $s_B = v t = 10t$.</li>\n          <li>Samakan jarak tempuh keduanya:\n            $$t^2 = 10t \\implies t(t - 10) = 0$$\n          </li>\n          <li>Karena $t > 0$, maka mobil $A$ menyusul mobil $B$ pada saat $t = 10\\text{ detik}$.</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Hati-hati: saat $t = 5\\text{ detik}$, kecepatan kedua mobil memang sama ($v_A = a t = 10\\text{ m/s}$), namun mobil $A$ belum menyusul mobil $B$ (jarak $A$ baru $25\\text{ m}$ sedangkan $B$ sudah $50\\text{ m}$).\n        </div>\n      "
    },
    "bab": "Kinematika",
    "subBab": "Gerak Lurus",
    "subTopic": "Gerak Lurus",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "sup-fis-kin-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-2",
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
    "subBab": "Gerak Lurus",
    "subTopic": "Gerak Lurus",
    "chapterTitle": "Kinematika"
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
