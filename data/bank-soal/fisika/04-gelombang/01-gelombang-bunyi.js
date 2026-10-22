/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang
 * Sub-topik: Gelombang Bunyi (fis-gel-1)
 * Indikator: Karakteristik rambatan gelombang mekanik bunyi; sumber bunyi (dawai & pipa organa); intensitas & taraf intensitas bunyi; efek Doppler.
 * 
 * Total Butir Soal: 19 Soal (Mudah: 11, Sedang: 8, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-1";
  const questions = [
  {
    "id": "mudah-fis-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
    "category": "Cepat Rambat Bunyi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu sumber bunyi menghasilkan gelombang bunyi dengan frekuensi $680\\text{ Hz}$. Jika cepat rambat bunyi di udara pada saat itu adalah $340\\text{ m/s}$, maka panjang gelombang bunyi tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}25\\text{ meter}$",
      "$0{,}50\\text{ meter}$",
      "$1{,}00\\text{ meter}$",
      "$2{,}00\\text{ meter}$",
      "$4{,}00\\text{ meter}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Persamaan Dasar Cepat Rambat Gelombang:</strong><br>\n          $$v = \\lambda f \\implies \\lambda = \\frac{v}{f}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$\\lambda = \\frac{340\\text{ m/s}}{680\\text{ Hz}} = 0{,}5\\text{ meter}$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Jangan membalik pembagian menjadi $f/v = 2\\text{ m}$. Rumus yang benar adalah $v/f$.\n        </div>\n      "
    },
    "bab": "Gelombang",
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "sup-fis-gel-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
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
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
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
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
    "category": "Pengaruh Suhu terhadap Kelajuan Bunyi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Kelajuan rambat bunyi di dalam suatu gas ideal pada suhu mutlak $T_1 = 300\\text{ K}$ adalah $v_1 = 320\\text{ m/s}$. Jika gas tersebut dipanaskan hingga suhu mutlaknya naik menjadi $T_2 = 1200\\text{ K}$, kelajuan rambat bunyi di dalam gas tersebut menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$640\\text{ m/s}$",
      "$480\\text{ m/s}$",
      "$1280\\text{ m/s}$",
      "$960\\text{ m/s}$",
      "$320\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kelajuan Bunyi pada Gas Ideal:</strong><br>$$v = \\sqrt{\\frac{\\gamma R T}{M_r}} \\implies v \\propto \\sqrt{T}$$<br>Kelajuan bunyi berbanding lurus dengan <strong>akar suhu mutlak</strong> (Kelvin).</div>",
      "steps": "<ol><li>Perbandingan suhu: $\\frac{T_2}{T_1} = \\frac{1200}{300} = 4$.</li><li>Perbandingan kelajuan: $\\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}} = \\sqrt{4} = 2$.</li><li>Kelajuan akhir: $v_2 = 2 \\times v_1 = 2 \\times 320 = 640\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menganggap hubungan linear $v \\propto T$ sehingga mengalikan 4 kali lipat ($1280\\text{ m/s}$). Yang benar adalah sebanding dengan akar kuadrat $\\sqrt{T}$.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
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
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
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
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
    "category": "Fenomena Pelayangan Bunyi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah garpu tala $A$ dan $B$ dibunyikan secara bersamaan. Garpu tala $A$ memiliki frekuensi $440\\text{ Hz}$. Jika terdengar $4$ layangan bunyi setiap detiknya, maka frekuensi yang mungkin dari garpu tala $B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$436\\text{ Hz}$ atau $444\\text{ Hz}$",
      "$440\\text{ Hz}$ atau $448\\text{ Hz}$",
      "$220\\text{ Hz}$ atau $880\\text{ Hz}$",
      "$110\\text{ Hz}$ atau $444\\text{ Hz}$",
      "$438\\text{ Hz}$ atau $442\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Frekuensi Pelayangan Bunyi (Beats):</strong><br>Frekuensi pelayangan adalah selisih mutlak dari dua frekuensi gelombang bunyi yang berinterferensi:<br>$$f_{\\text{layang}} = |f_A - f_B|$$</div>",
      "steps": "<ol><li>Diketahui $f_{\\text{layang}} = 4\\text{ Hz}$ dan $f_A = 440\\text{ Hz}$.</li><li>Kemungkinan 1: $f_B = f_A + f_{\\text{layang}} = 440 + 4 = 444\\text{ Hz}$.</li><li>Kemungkinan 2: $f_B = f_A - f_{\\text{layang}} = 440 - 4 = 436\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Pelayangan bunyi selalu berupa selisih sederhana ($|f_1 - f_2|$), bukan rata-rata atau rasio.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-bun-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
    "category": "Cepat Rambat Bunyi pada Zat Padat (Modulus Young)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Kelajuan rambat gelombang bunyi longitudinal di dalam sebuah rel baja bergantung pada Modulus Elastisitas Young ($E$) dan massa jenis bajanya ($\\rho$). Jika Modulus Young baja adalah $E = 2 \\times 10^{11}\\text{ N/m}^2$ dan massa jenisnya $\\rho = 8000\\text{ kg/m}^3$, kelajuan rambat bunyi di dalam rel baja tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5000\\text{ m/s}$",
      "$2500\\text{ m/s}$",
      "$4000\\text{ m/s}$",
      "$1000\\text{ m/s}$",
      "$25000\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kelajuan Gelombang Bunyi pada Zat Padat:</strong><br>$$v = \\sqrt{\\frac{E}{\\rho}}$$</div>",
      "steps": "<ol><li>Hitung pembagian di bawah akar: $\\frac{E}{\\rho} = \\frac{2 \\times 10^{11}}{8 \\times 10^3} = \\frac{2}{8} \\times 10^8 = 0{,}25 \\times 10^8 = 25 \\times 10^6$.</li><li>Tarik akar kuadrat: $v = \\sqrt{25 \\times 10^6} = 5 \\times 10^3 = 5000\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Karakteristik Gelombang Mekanik:</strong> Bunyi merambat paling cepat pada zat padat ($v \\approx 5000\\text{ m/s}$), lebih lambat pada zat cair ($v \\approx 1500\\text{ m/s}$), dan paling lambat pada gas/udara ($v \\approx 340\\text{ m/s}$).</div>"
    },
    "bab": "Gelombang",
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-bun-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
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
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-bun-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
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
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-bun-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
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
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "sedang-fis-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
    "category": "Efek Doppler Gelombang Bunyi",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah mobil ambulans bergerak dengan kelajuan $20\\text{ m/s}$ sambil membunyikan sirine berfrekuensi $720\\text{ Hz}$ mendekati seorang pengamat yang berdiri diam di tepi jalan. Jika cepat rambat bunyi di udara adalah $340\\text{ m/s}$, frekuensi sirine yang didengar oleh pengamat tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$680\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$765\\text{ Hz}$",
      "$810\\text{ Hz}$",
      "$850\\text{ Hz}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Persamaan Efek Doppler:</strong><br>\n          $$f_p = \\left( \\frac{v \\pm v_p}{v \\mp v_s} \\right) f_s$$\n          • Pengamat diam: $v_p = 0$<br>\n          • Sumber mendekati pengamat: tanda pada penyebut bernilai negatif ($-v_s$), sehingga frekuensi terdengar lebih tinggi ($f_p > f_s$).\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Identifikasi variabel: $v = 340\\text{ m/s}$, $v_s = 20\\text{ m/s}$, $v_p = 0$, $f_s = 720\\text{ Hz}$.</li>\n          <li>Substitusikan ke rumus Efek Doppler:\n            $$f_p = \\left( \\frac{340}{340 - 20} \\right) \\times 720 = \\left( \\frac{340}{320} \\right) \\times 720$$\n          </li>\n          <li>Hitung nilai akhir:\n            $$f_p = \\frac{17}{16} \\times 720 = 17 \\times 45 = 765\\text{ Hz}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan aturan tanda: sumber mendekat selalu memperkecil penyebut ($v - v_s$), bukan memperbesar ($v + v_s$).\n        </div>\n      "
    },
    "bab": "Gelombang",
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "sup-fis-gel-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
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
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
    "category": "Resonansi Kolom Udara Tabung",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dalam percobaan resonansi tabung kolom udara menggunakan garpu tala berfrekuensi $f = 500\\text{ Hz}$, terjadi resonansi pertama pada panjang kolom udara $L_1 = 18\\text{ cm}$ dan resonansi kedua terjadi pada $L_2 = 54\\text{ cm}$. Kelajuan rambat bunyi di udara berdasarkan percobaan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$360\\text{ m/s}$",
      "$340\\text{ m/s}$",
      "$320\\text{ m/s}$",
      "$300\\text{ m/s}$",
      "$270\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Selisih Resonansi Berurutan Tabung Bunyi:</strong><br>Jarak antara dua resonansi berurutan selalu tepat sama dengan <strong>setengah panjang gelombang</strong>:<br>$$\\Delta L = L_2 - L_1 = \\frac{1}{2}\\lambda \\implies \\lambda = 2(L_2 - L_1)$$<br>$$v = f \\cdot \\lambda$$</div>",
      "steps": "<ol><li>Hitung selisih panjang kolom udara: $\\Delta L = 54\\text{ cm} - 18\\text{ cm} = 36\\text{ cm} = 0{,}36\\text{ m}$.</li><li>Panjang gelombang bunyi: $\\lambda = 2 \\times 0{,}36\\text{ m} = 0{,}72\\text{ m}$.</li><li>Kelajuan bunyi: $v = f \\cdot \\lambda = 500\\text{ Hz} \\times 0{,}72\\text{ m} = 360\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Trik Cepat:</strong> Selisih dua resonansi berturutan $\\Delta L = \\frac{1}{2}\\lambda$, sehingga $\\lambda = 2\\Delta L$. Tidak perlu mengkhawatirkan koreksi ujung tabung.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
    "category": "Efek Doppler Sumber & Pendengar Saling Mendekat",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah kereta api bergerak mendekati stasiun dengan kelajuan $v_s = 20\\text{ m/s}$ sambil membunyikan peluit berfrekuensi $640\\text{ Hz}$. Pada saat bersamaan, seorang penumpang di peron bergerak berjalan mendekati kereta api dengan kelajuan $v_p = 10\\text{ m/s}$. Jika kelajuan rambat bunyi di udara adalah $v = 340\\text{ m/s}$, frekuensi peluit yang didengar oleh penumpang tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$700\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$660\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$600\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kaidah Tanda Efek Doppler:</strong><br>$$f_p = \\left( \\frac{v \\pm v_p}{v \\mp v_s} \\right) f_s$$<br>• Pendengar mendekati sumber $\\implies (+v_p)$ pada pembilang.<br>• Sumber mendekati pendengar $\\implies (-v_s)$ pada penyebut.<br>• Efek keduanya saling mendekat membuat frekuensi yang didengar semakin tinggi ($f_p > f_s$).</div>",
      "steps": "<ol><li>Substitusi nilai: $v = 340$, $v_p = 10$, $v_s = 20$, $f_s = 640$.</li><li>Pembilang: $v + v_p = 340 + 10 = 350\\text{ m/s}$.</li><li>Penyebut: $v - v_s = 340 - 20 = 320\\text{ m/s}$.</li><li>Hitung frekuensi: $f_p = \\frac{350}{320} \\times 640 = 350 \\times 2 = 700\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Mnemonic Tanda Doppler:</strong> \"Mendekat = Lebih Tinggi\" (pembilang ditambah, penyebut dikurang). \"Menjauh = Lebih Rendah\" (pembilang dikurang, penyebut ditambah).</div>"
    },
    "bab": "Gelombang",
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
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
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-bun-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
    "category": "Efek Doppler Sumber Menjauhi Pendengar Diam",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah mobil pemadam kebakaran membunyikan sirene berfrekuensi $f_s = 600\\text{ Hz}$ sambil bergerak menjauhi seorang pejalan kaki yang berdiri diam di tepi jalan dengan kelajuan $v_s = 20\\text{ m/s}$. Jika kelajuan rambat bunyi di udara saat itu adalah $v = 340\\text{ m/s}$, maka frekuensi bunyi yang didengar oleh pejalan kaki tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$566{,}7\\text{ Hz}$",
      "$637{,}5\\text{ Hz}$",
      "$600\\text{ Hz}$",
      "$540\\text{ Hz}$",
      "$580\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Efek Doppler Sumber Menjauh:</strong><br>Karena sumber menjauh ($+v_s$ pada penyebut), panjang gelombang merenggang sehingga frekuensi yang terdengar lebih rendah ($f_p < f_s$):<br>$$f_p = \\left( \\frac{v}{v + v_s} \\right) f_s$$</div>",
      "steps": "<ol><li>$v = 340\\text{ m/s}$, $v_s = 20\\text{ m/s}$, $v_p = 0$, $f_s = 600\\text{ Hz}$.</li><li>Penyebut: $v + v_s = 340 + 20 = 360\\text{ m/s}$.</li><li>$f_p = \\frac{340}{360} \\times 600 = \\frac{17}{18} \\times 600 = \\frac{17 \\times 100}{3} \\approx 566{,}67\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Logika Akal Sehat:</strong> Sumber menjauh pasti menghasilkan nada yang lebih rendah dari frekuensi asli ($< 600\\text{ Hz}$). Opsi di atas $600\\text{ Hz}$ langsung gugur!</div>"
    },
    "bab": "Gelombang",
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-bun-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
    "category": "Efek Doppler Pendengar Bergerak Menjauhi Sumber Diam",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah peluit stasiun diam membunyikan frekuensi $f_s = 680\\text{ Hz}$. Seorang penumpang menaiki sepeda motor bergerak menjauhi stasiun dengan kelajuan $v_p = 10\\text{ m/s}$. Jika kelajuan rambat bunyi di udara adalah $v = 340\\text{ m/s}$, frekuensi bunyi peluit yang didengar oleh pengendara motor tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$660\\text{ Hz}$",
      "$700\\text{ Hz}$",
      "$640\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$620\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Efek Doppler Pendengar Menjauh:</strong><br>$$f_p = \\left( \\frac{v - v_p}{v} \\right) f_s$$</div>",
      "steps": "<ol><li>$v = 340\\text{ m/s}$, $v_p = 10\\text{ m/s}$, $f_s = 680\\text{ Hz}$.</li><li>Pembilang: $v - v_p = 340 - 10 = 330\\text{ m/s}$.</li><li>Hitung frekuensi: $f_p = \\frac{330}{340} \\times 680 = 330 \\times 2 = 660\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Perhatikan Posisi Variabel:</strong> Kecepatan pendengar ($v_p$) selalu berada di <strong>pembilang</strong>, sedangkan kecepatan sumber ($v_s$) selalu berada di <strong>penyebut</strong>.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-bun-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
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
    "subBab": "Gelombang Bunyi",
    "subTopic": "Gelombang Bunyi",
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
