/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang
 * Sub-topik: Dawai dan Pipa Organa (fis-gel-2)
 * Indikator: Sumber bunyi dawai & hukum Melde; pipa organa terbuka & tertutup; frekuensi nada dasar & nada atas.
 * 
 * Total Butir Soal: 6 Soal (Mudah: 6, Sedang: 0, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-2";
  const questions = [
  {
    "id": "sup-fis-gel-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-2",
    "category": "Frekuensi Pipa Organa Terbuka",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pipa organa terbuka memiliki panjang $60\\text{ cm}$. Jika cepat rambat bunyi di udara saat itu adalah $340\\text{ m/s}$, maka frekuensi nada atas pertama ($f_1$) yang dihasilkan pipa organa tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$566{,}7\\text{ Hz}$",
      "$283{,}3\\text{ Hz}$",
      "$850\\text{ Hz}$",
      "$1133{,}3\\text{ Hz}$",
      "$425\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Resonansi Pipa Organa Terbuka:</strong><br>Frekuensi nada ke-$n$ (dimulai dari $n=0$ nada dasar): $f_n = (n + 1) \\frac{v}{2L}$. Untuk nada atas pertama, $n = 1 \\implies f_1 = \\frac{v}{L}$.</div>",
      "steps": "<ol><li>Panjang pipa: $L = 60\\text{ cm} = 0{,}6\\text{ m}$.</li><li>Nada atas pertama ($n=1$): $f_1 = \\frac{v}{L} = \\frac{340}{0{,}6} \\approx 566{,}67\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Terkecoh menghitung nada dasar ($f_0 = \\frac{v}{2L} = 283{,}3\\text{ Hz}$) karena mengira nada atas pertama berindeks $n=0$.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Dawai dan Pipa Organa",
    "subTopic": "Dawai dan Pipa Organa",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-2",
    "category": "Cepat Rambat Gelombang Dawai Hukum Melde",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Pada percobaan Hukum Melde, seutas dawai senar gitar diberi gaya tegangan tali sebesar $F = 100\\text{ N}$. Jika massa per satuan panjang dawai tersebut adalah $\\mu = 0{,}04\\text{ kg/m}$, maka kelajuan rambat gelombang transversal pada dawai adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$40\\text{ m/s}$",
      "$100\\text{ m/s}$",
      "$200\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Rumus Hukum Melde:</strong><br>Kelajuan rambat gelombang pada dawai berbanding lurus dengan akar gaya tegangan dan berbanding terbalik dengan akar massa persatuan panjang:<br>$$v = \\sqrt{\\frac{F}{\\mu}}$$</div>",
      "steps": "<ol><li>Identifikasi nilai yang diketahui: $F = 100\\text{ N}$, $\\mu = 0{,}04\\text{ kg/m}$.</li><li>Hitung pembagian dalam akar: $\\frac{F}{\\mu} = \\frac{100}{0{,}04} = 2500$.</li><li>Tarik akar kuadrat: $v = \\sqrt{2500} = 50\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Ingat kata kunci <em>\"Melde = Gaya per mu\"</em> ($v = \\sqrt{F/\\mu}$). Jangan mengalikan $F \\times \\mu$.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Dawai dan Pipa Organa",
    "subTopic": "Dawai dan Pipa Organa",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-2",
    "category": "Frekuensi Nada Dasar Dawai Gitar",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seutas senar gitar memiliki panjang efektif $L = 80\\text{ cm}$. Jika gelombang transversal merambat pada senar tersebut dengan kelajuan $v = 400\\text{ m/s}$, maka frekuensi nada dasar ($f_0$) yang dihasilkan senar tersebut saat dipetik adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$250\\text{ Hz}$",
      "$500\\text{ Hz}$",
      "$125\\text{ Hz}$",
      "$300\\text{ Hz}$",
      "$400\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Frekuensi Nada Dasar Dawai (Kedua Ujung Terikat):</strong><br>Pada nada dasar, panjang dawai membentuk setengah gelombang ($L = \\frac{1}{2}\\lambda \\implies \\lambda = 2L$):<br>$$f_0 = \\frac{v}{2L}$$</div>",
      "steps": "<ol><li>Konversi satuan panjang ke meter: $L = 80\\text{ cm} = 0{,}8\\text{ m}$.</li><li>Hitung pembagi: $2L = 2 \\times 0{,}8 = 1{,}6\\text{ m}$.</li><li>Frekuensi nada dasar: $f_0 = \\frac{400\\text{ m/s}}{1{,}6\\text{ m}} = 250\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Rumus nada dasar dawai sama persis dengan pipa organa terbuka: $f_0 = \\frac{v}{2L}$. Ingat ada faktor angka 2 di penyebut!</div>"
    },
    "bab": "Gelombang",
    "subBab": "Dawai dan Pipa Organa",
    "subTopic": "Dawai dan Pipa Organa",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-2",
    "category": "Frekuensi Pipa Organa Tertutup",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pipa organa tertutup memiliki panjang $L = 50\\text{ cm}$. Jika kelajuan bunyi di udara saat itu adalah $v = 340\\text{ m/s}$, maka frekuensi nada dasar ($f_0$) dan frekuensi nada atas pertama ($f_1$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$170\\text{ Hz}$ dan $510\\text{ Hz}$",
      "$170\\text{ Hz}$ dan $340\\text{ Hz}$",
      "$340\\text{ Hz}$ dan $680\\text{ Hz}$",
      "$85\\text{ Hz}$ dan $255\\text{ Hz}$",
      "$170\\text{ Hz}$ dan $680\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Pipa Organa Tertutup (Harmonik Ganjil):</strong><br>• Nada dasar ($n=0$): $f_0 = \\frac{v}{4L}$<br>• Perbandingan frekuensi hanya bilangan ganjil: $f_0 : f_1 : f_2 = 1 : 3 : 5$<br>• Nada atas pertama ($n=1$): $f_1 = 3 f_0 = \\frac{3v}{4L}$</div>",
      "steps": "<ol><li>Konversi panjang: $L = 50\\text{ cm} = 0{,}5\\text{ m}$.</li><li>Nada dasar: $f_0 = \\frac{v}{4L} = \\frac{340}{4 \\times 0{,}5} = \\frac{340}{2} = 170\\text{ Hz}$.</li><li>Nada atas pertama: $f_1 = 3 \\times f_0 = 3 \\times 170 = 510\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Perbedaan Kunci:</strong> Pipa tertutup penyebutnya $4L$ dan bernada ganjil ($1 : 3 : 5$). Pipa terbuka penyebutnya $2L$ dan bernada bulat ($1 : 2 : 3$).</div>"
    },
    "bab": "Gelombang",
    "subBab": "Dawai dan Pipa Organa",
    "subTopic": "Dawai dan Pipa Organa",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-bun-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-2",
    "category": "Nada Atas Kedua Pipa Organa Terbuka",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pipa organa terbuka menghasilkan frekuensi nada dasar sebesar $f_0 = 150\\text{ Hz}$. Frekuensi nada atas kedua ($f_2$) yang dihasilkan pipa organa terbuka tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$450\\text{ Hz}$",
      "$300\\text{ Hz}$",
      "$600\\text{ Hz}$",
      "$750\\text{ Hz}$",
      "$225\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Deret Harmonik Pipa Organa Terbuka:</strong><br>Perbandingan frekuensi harmonik berurutan berupa bilangan bulat lengkap:<br>$$f_0 : f_1 : f_2 : f_3 = 1 : 2 : 3 : 4$$<br>• Nada dasar ($n=0$): $f_0$<br>• Nada atas ke-1 ($n=1$): $f_1 = 2f_0$<br>• Nada atas ke-2 ($n=2$): $f_2 = 3f_0$</div>",
      "steps": "<ol><li>Nada atas kedua memiliki indeks $n=2$, sehingga merupakan harmonik ke-3 ($3f_0$).</li><li>Hitung frekuensi: $f_2 = 3 \\times f_0 = 3 \\times 150\\text{ Hz} = 450\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Ingat Penamaan Nada:</strong> \"Nada atas ke-$n$\" setara dengan harmonik ke-$(n+1)$. Nada atas ke-2 $=$ harmonik ke-3 ($3f_0$).</div>"
    },
    "bab": "Gelombang",
    "subBab": "Dawai dan Pipa Organa",
    "subTopic": "Dawai dan Pipa Organa",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-bun-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-2",
    "category": "Nada Atas Kedua Pipa Organa Tertutup",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pipa organa tertutup menghasilkan frekuensi nada dasar sebesar $f_0 = 100\\text{ Hz}$. Frekuensi nada atas kedua ($f_2$) yang dihasilkan pipa organa tertutup tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$500\\text{ Hz}$",
      "$300\\text{ Hz}$",
      "$400\\text{ Hz}$",
      "$200\\text{ Hz}$",
      "$700\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Deret Harmonik Pipa Organa Tertutup (Hanya Ganjil):</strong><br>$$f_0 : f_1 : f_2 : f_3 = 1 : 3 : 5 : 7$$<br>• Nada dasar ($n=0$): $f_0 = 1 f_0$<br>• Nada atas ke-1 ($n=1$): $f_1 = 3 f_0$<br>• Nada atas ke-2 ($n=2$): $f_2 = 5 f_0$</div>",
      "steps": "<ol><li>Pipa tertutup hanya menghasilkan kelipatan bilangan ganjil.</li><li>Nada atas kedua bernilai $5 \\times$ nada dasar.</li><li>$f_2 = 5 \\times 100\\text{ Hz} = 500\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Bedakan Terbuka vs Tertutup:</strong><br>• Terbuka: $f_0 : f_1 : f_2 = 1 : 2 : 3$<br>• Tertutup: $f_0 : f_1 : f_2 = 1 : 3 : 5$</div>"
    },
    "bab": "Gelombang",
    "subBab": "Dawai dan Pipa Organa",
    "subTopic": "Dawai dan Pipa Organa",
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
