/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang
 * Sub-topik: Intensitas dan Taraf Intensitas Bunyi (fis-gel-3)
 * Indikator: Intensitas bunyi sumber titik isotropis; taraf intensitas bunyi ($dB$); hubungan taraf intensitas dengan jarak dan pelipatan sumber bunyi.
 * 
 * Total Butir Soal: 4 Soal (Mudah: 1, Sedang: 3, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-3";
  const questions = [
  {
    "id": "drill2-bun-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-3",
    "category": "Intensitas Bunyi Sumber Titik Isotropis",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pengeras suara memancarkan daya akustik $P = 40\\pi\\text{ Watt}$ secara seragam ke segala arah (sumber titik bola). Besar intensitas bunyi ($I$) yang diterima pada jarak $r = 10\\text{ meter}$ dari pengeras suara tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}1\\text{ W/m}^2$",
      "$1{,}0\\text{ W/m}^2$",
      "$0{,}01\\text{ W/m}^2$",
      "$0{,}4\\text{ W/m}^2$",
      "$4{,}0\\text{ W/m}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Intensitas Bunyi Permukaan Bola:</strong><br>Gelombang bunyi dari sumber titik menyebar membentuk bola dengan luas muka gelombang $A = 4\\pi r^2$:<br>$$I = \\frac{P}{A} = \\frac{P}{4\\pi r^2}$$</div>",
      "steps": "<ol><li>Luas bola pada $r = 10\\text{ m}$: $A = 4\\pi (10)^2 = 400\\pi\\text{ m}^2$.</li><li>Hitung intensitas: $I = \\frac{40\\pi\\text{ W}}{400\\pi\\text{ m}^2} = \\frac{1}{10} = 0{,}1\\text{ W/m}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Pembagi intensitas bola adalah $4\\pi r^2$ (luas kulit bola), bukan $\\pi r^2$ (luas lingkaran).</div>"
    },
    "bab": "Gelombang",
    "subBab": "Intensitas dan Taraf Intensitas Bunyi",
    "subTopic": "Intensitas dan Taraf Intensitas Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "sup-fis-gel-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-3",
    "category": "Taraf Intensitas Bunyi Multi Sumber",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Taraf intensitas bunyi sebuah mesin bor listrik pada jarak tertentu adalah $70\\text{ dB}$. Jika terdapat $100$ mesin bor identik yang bekerja serentak pada jarak yang sama, taraf intensitas bunyi total yang terdengar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$90\\text{ dB}$",
      "$80\\text{ dB}$",
      "$170\\text{ dB}$",
      "$700\\text{ dB}$",
      "$85\\text{ dB}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Taraf Intensitas Multi Sumber Sejenis:</strong><br>Ketika $n$ sumber bunyi identik berbunyi bersamaan, intensitasnya berlipat ganda sebesar $n$, sehingga taraf intensitas totalnya: $TI_n = TI_1 + 10 \\log_{10}(n)$.</div>",
      "steps": "<ol><li>Jumlah sumber bunyi: $n = 100 = 10^2$.</li><li>Kenaikan taraf intensitas: $\\Delta TI = 10 \\log_{10}(100) = 10 \\times 2 = 20\\text{ dB}$.</li><li>Taraf intensitas total: $TI_{\\text{total}} = 70 + 20 = 90\\text{ dB}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengalikan langsung nilai dB ($70 \\times 100 = 7000\\text{ dB}$), padahal skala desibel merupakan skala logaritmik bukan linear.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Intensitas dan Taraf Intensitas Bunyi",
    "subTopic": "Intensitas dan Taraf Intensitas Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-3",
    "category": "Taraf Intensitas Bunyi terhadap Perubahan Jarak",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Taraf intensitas bunyi sebuah sirene pabrik pada jarak $r_1 = 2\\text{ meter}$ adalah $TI_1 = 80\\text{ dB}$. Taraf intensitas bunyi yang terdengar pada jarak $r_2 = 20\\text{ meter}$ dari sirene tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$60\\text{ dB}$",
      "$70\\text{ dB}$",
      "$40\\text{ dB}$",
      "$78\\text{ dB}$",
      "$50\\text{ dB}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Taraf Intensitas terhadap Jarak Titik:</strong><br>Karena intensitas mematuhi hukum kuadrat terbalik ($I \\propto 1/r^2$), taraf intensitas berkurang secara logaritmik:<br>$$TI_2 = TI_1 - 20 \\log_{10}\\left(\\frac{r_2}{r_1}\\right)$$</div>",
      "steps": "<ol><li>Rasio jarak: $\\frac{r_2}{r_1} = \\frac{20}{2} = 10$.</li><li>Hitung logaritma: $\\log_{10}(10) = 1$.</li><li>Pengurangan taraf intensitas: $\\Delta TI = 20 \\times 1 = 20\\text{ dB}$.</li><li>Taraf intensitas pada jarak 20 m: $TI_2 = 80 - 20 = 60\\text{ dB}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Rumus Sakti Jarak:</strong> Jarak naik $10\\times \\implies TI$ turun tepat $20\\text{ dB}$. Jarak naik $100\\times \\implies TI$ turun tepat $40\\text{ dB}$. Faktor pengalinya adalah 20, bukan 10!</div>"
    },
    "bab": "Gelombang",
    "subBab": "Intensitas dan Taraf Intensitas Bunyi",
    "subTopic": "Intensitas dan Taraf Intensitas Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-bun-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-3",
    "category": "Kenaikan Taraf Intensitas 10 Kali Sumber",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah sepeda motor menghasilkan taraf intensitas bunyi sebesar $TI_1 = 65\\text{ dB}$. Jika terdapat $10$ sepeda motor identik yang dibunyikan serentak, maka taraf intensitas bunyi gabungannya ($TI_{10}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$75\\text{ dB}$",
      "$650\\text{ dB}$",
      "$70\\text{ dB}$",
      "$85\\text{ dB}$",
      "$130\\text{ dB}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kaidah Cepat Multi Sumber Bunyi:</strong><br>Setiap pelipatgandaan jumlah sumber sebesar $10\\times$ akan menambah taraf intensitas tepat $+10\\text{ dB}$:<br>$$TI_n = TI_1 + 10 \\log_{10}(n)$$</div>",
      "steps": "<ol><li>Jumlah sumber: $n = 10 \\implies \\log_{10}(10) = 1$.</li><li>Kenaikan taraf intensitas: $10 \\times 1 = 10\\text{ dB}$.</li><li>Taraf intensitas total: $TI = 65 + 10 = 75\\text{ dB}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Pola Logaritmik:</strong><br>• $10\\times$ sumber $\\implies +10\\text{ dB}$<br>• $100\\times$ sumber $\\implies +20\\text{ dB}$<br>• $1000\\times$ sumber $\\implies +30\\text{ dB}$</div>"
    },
    "bab": "Gelombang",
    "subBab": "Intensitas dan Taraf Intensitas Bunyi",
    "subTopic": "Intensitas dan Taraf Intensitas Bunyi",
    "chapterTitle": "Gelombang"
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
