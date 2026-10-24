/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Cahaya & Optik (fis-gel-optik)
 * Sub-Bab: Cermin Datar, Cekung, dan Cembung (fis-gel-optik-cermin)
 * Slug: cermin-datar-cekung-cembung
 * Indikator: Pembentukan bayangan, titik fokus (f = R/2), persamaan Gauss (1/f = 1/s + 1/s'), dan perbesaran.
 * 
 * Total Butir Soal: 4 (Mudah: 4, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-optik-cermin";
  const subTopicSlug = "cermin-datar-cekung-cembung";
  const questions = [
  {
    "id": "mudah-fis-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Cermin Cekung",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah benda diletakkan pada jarak $15\\text{ cm}$ di depan cermin cekung yang memiliki jarak fokus $10\\text{ cm}$. Jarak bayangan yang terbentuk dari cermin adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$15\\text{ cm}$",
      "$25\\text{ cm}$",
      "$30\\text{ cm}$",
      "$45\\text{ cm}$",
      "$60\\text{ cm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Persamaan Cermin Cekung (Fokus Positif):</strong><br>\n          $$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$\\frac{1}{s'} = \\frac{1}{10} - \\frac{1}{15} = \\frac{3 - 2}{30} = \\frac{1}{30}$$</li>\n          <li>$$s' = 30\\text{ cm}$$ (bayangan nyata di depan cermin).</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Ingat cermin cekung memiliki fokus positif ($+10\\text{ cm}$), sedangkan cermin cembung memiliki fokus negatif.\n        </div>\n      "
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "cermin-datar-cekung-cembung"
  },
  {
    "id": "drill-cah-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Cermin Cembung Pembentukan Bayangan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah spion mobil berupa cermin cembung memiliki jarak fokus $|f| = 20\\text{ cm}$. Jika sebuah sepeda motor berada pada jarak $s = 20\\text{ cm}$ di depan cermin tersebut, maka letak bayangan sepeda motor ($s'$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-10\\text{ cm}$ (maya di belakang cermin)",
      "$+10\\text{ cm}$ (nyata di depan cermin)",
      "$-20\\text{ cm}$ (maya di belakang cermin)",
      "$-40\\text{ cm}$ (maya di belakang cermin)",
      "$+20\\text{ cm}$ (nyata di depan cermin)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Aturan Tanda Cermin Cembung:</strong><br>• Jarak fokus cermin cembung <strong>selalu bernilai negatif</strong> ($f = -20\\text{ cm}$).<br>• Persamaan cermin: $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$.<br>• Bayangan cermin cembung selalu maya ($s' < 0$), tegak, dan diperkecil.</div>",
      "steps": "<ol><li>$f = -20\\text{ cm}$, $s = +20\\text{ cm}$.</li><li>$\\frac{1}{s'} = -\\frac{1}{20} - \\frac{1}{20} = -\\frac{2}{20} = -\\frac{1}{10}$.</li><li>$s' = -10\\text{ cm}$ (tanda minus menandakan bayangan maya di belakang cermin).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Wajib Diingat:</strong> Selalu beri tanda minus pada fokus cermin cembung dan lensa cekung ($f < 0$).</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "cermin-datar-cekung-cembung"
  },
  {
    "id": "drill2-cah-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Jumlah Bayangan Dua Cermin Datar Bersudut",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah cermin datar disusun saling berhadapan membentuk sudut $\\alpha = 60^\\circ$. Sebuah lilin diletakkan di antara kedua cermin tersebut. Jumlah bayangan lilin yang terbentuk adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ bayangan}$",
      "$6\\text{ bayangan}$",
      "$4\\text{ bayangan}$",
      "$7\\text{ bayangan}$",
      "$3\\text{ bayangan}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Rumus Jumlah Bayangan Cermin Datar:</strong><br>$$n = \\frac{360^\\circ}{\\alpha} - 1$$</div>",
      "steps": "<ol><li>Sudut apit: $\\alpha = 60^\\circ$.</li><li>Bagi lingkaran penuh: $\\frac{360^\\circ}{60^\\circ} = 6$.</li><li>Kurangkan satu untuk benda asli: $n = 6 - 1 = 5\\text{ bayangan}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jangan Lupa $-1$:</strong> Nilai $360^\\circ / \\alpha$ harus selalu dikurangi 1 karena salah satu posisi ditempati oleh benda asli.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "cermin-datar-cekung-cembung"
  },
  {
    "id": "drill2-cah-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Pembentukan Bayangan Cermin Cekung",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah cermin cekung memiliki jari-jari kelengkungan $R = 40\\text{ cm}$. Sebuah benda diletakkan pada jarak $s = 30\\text{ cm}$ di depan cermin cekung tersebut. Jarak bayangan ($s'$) dan perbesaran bayangan ($M$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$s' = +60\\text{ cm}$ (nyata) dan $M = 2\\text{ kali}$",
      "$s' = -60\\text{ cm}$ (maya) dan $M = 2\\text{ kali}$",
      "$s' = +20\\text{ cm}$ (nyata) dan $M = 0{,}67\\text{ kali}$",
      "$s' = +12\\text{ cm}$ (nyata) dan $M = 0{,}4\\text{ kali}$",
      "$s' = +30\\text{ cm}$ (nyata) dan $M = 1\\text{ kali}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Fokus dan Jari-Jari Cermin Cekung:</strong><br>• $f = \\frac{1}{2}R$ (cermin cekung bertanda positif $f > 0$)<br>• $s' = \\frac{s \\cdot f}{s - f}$<br>• Perbesaran: $M = \\left| \\frac{s'}{s} \\right|$</div>",
      "steps": "<ol><li>Jarak fokus: $f = \\frac{1}{2} \\times 40 = +20\\text{ cm}$.</li><li>Jarak bayangan: $s' = \\frac{30 \\times 20}{30 - 20} = \\frac{600}{10} = +60\\text{ cm}$ (nyata di depan cermin).</li><li>Perbesaran: $M = \\frac{60}{30} = 2\\text{ kali}$ diperbesar.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal Jari-Jari:</strong> Jari-jari $R$ selalu dua kali jarak fokus ($R = 2f$). Jangan gunakan nilai $R$ langsung sebagai $f$.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "cermin-datar-cekung-cembung"
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
