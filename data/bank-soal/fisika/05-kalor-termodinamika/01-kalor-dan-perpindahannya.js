/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Sub-topik: Kalor dan Perpindahannya (fis-ter-1)
 * Indikator: Perubahan suhu zat; perubahan wujud zat (kalor laten); pemuaian (panjang, luas, volume); konduksi, konveksi, radiasi; Asas Black.
 * 
 * Total Butir Soal: 19 Soal (Mudah: 10, Sedang: 9, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-ter-1";
  const questions = [
  {
    "id": "mudah-fis-09",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Kalor Pemanasan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebanyak $2\\text{ kg}$ air bersuhu $20^\\circ\\text{C}$ dipanaskan hingga suhunya mencapai $70^\\circ\\text{C}$. Jika kalor jenis air $c = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$, jumlah kalor yang diserap air tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$105\\text{ kJ}$",
      "$210\\text{ kJ}$",
      "$420\\text{ kJ}$",
      "$588\\text{ kJ}$",
      "$840\\text{ kJ}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Rumus Kalor Perubahan Suhu:</strong><br>\n          $$Q = m c \\Delta T$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung perubahan suhu: $\\Delta T = 70 - 20 = 50^\\circ\\text{C}$.</li>\n          <li>$$Q = (2\\text{ kg})(4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}))(50^\\circ\\text{C}) = 420.000\\text{ J} = 420\\text{ kJ}$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan $\\Delta T$ adalah selisih suhu akhir dikurang suhu awal ($50$), bukan suhu akhir ($70$).\n        </div>\n      "
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "sup-fis-ter-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Pemuaian Panjang Benda Padat",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebatang rel baja memiliki panjang awal $10\\text{ meter}$ pada suhu $20^\\circ\\text{C}$. Koefisien muai panjang baja tersebut adalah $\\alpha = 1{,}2 \\times 10^{-5}/^\\circ\\text{C}$. Jika pada siang hari terik suhu rel meningkat menjadi $50^\\circ\\text{C}$, maka pertambahan panjang rel baja tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3{,}6\\text{ mm}$",
      "$1{,}8\\text{ mm}$",
      "$2{,}4\\text{ mm}$",
      "$4{,}8\\text{ mm}$",
      "$0{,}36\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Pemuaian Panjang Benda Padat:</strong><br>Pertambahan panjang zat padat sebanding dengan panjang mula-mula, koefisien muai panjang, dan kenaikan suhu: $\\Delta L = L_0 \\alpha \\Delta T$.</div>",
      "steps": "<ol><li>Panjang mula-mula: $L_0 = 10\\text{ m}$.</li><li>Perubahan suhu: $\\Delta T = 50 - 20 = 30^\\circ\\text{C}$.</li><li>Pertambahan panjang: $\\Delta L = 10 \\times (1{,}2 \\times 10^{-5}) \\times 30 = 3{,}6 \\times 10^{-3}\\text{ m} = 3{,}6\\text{ mm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengalikan dengan suhu akhir $50^\\circ\\text{C}$ tanpa mengurangkan suhu awal $20^\\circ\\text{C}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-kal-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Kalor Pemanasan dan Kenaikan Suhu",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebanyak $m = 3\\text{ kg}$ air bersuhu $25^\\circ\\text{C}$ dipanaskan hingga suhunya mencapai $75^\\circ\\text{C}$. Jika kalor jenis air adalah $c = 4200\\text{ J/kg}^\\circ\\text{C}$, jumlah kalor yang diserap oleh air tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$630\\text{ kJ}$",
      "$315\\text{ kJ}$",
      "$420\\text{ kJ}$",
      "$540\\text{ kJ}$",
      "$63\\text{ kJ}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Persamaan Kalor Sensibel:</strong><br>Kalor yang dibutuhkan untuk menaikkan suhu zat tanpa mengubah wujud:<br>$$Q = m \\cdot c \\cdot \\Delta T$$</div>",
      "steps": "<ol><li>Perubahan suhu: $\\Delta T = 75^\\circ\\text{C} - 25^\\circ\\text{C} = 50^\\circ\\text{C}$.</li><li>Hitung kalor: $Q = 3\\text{ kg} \\times 4200\\text{ J/kg}^\\circ\\text{C} \\times 50^\\circ\\text{C} = 630.000\\text{ J}$.</li><li>Konversi ke kilojoule: $Q = 630\\text{ kJ}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Perhatikan Satuan:</strong> Periksa apakah opsi meminta Joule atau kilojoule ($1\\text{ kJ} = 1000\\text{ J}$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-kal-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Kalor Laten Peleburan Zat",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebongkah es bermassa $m = 500\\text{ gram}$ pada suhu titik leburnya $0^\\circ\\text{C}$ hendak dicairkan seluruhnya menjadi air bersuhu $0^\\circ\\text{C}$. Jika kalor lebur es adalah $L_f = 336.000\\text{ J/kg}$, banyak kalor yang diperlukan dalam proses peleburan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$168\\text{ kJ}$",
      "$336\\text{ kJ}$",
      "$84\\text{ kJ}$",
      "$168.000\\text{ kJ}$",
      "$672\\text{ kJ}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kalor Laten Perubahan Wujud:</strong><br>Saat zat melebur atau membeku pada suhu tetap, kalor yang diserap/dilepas tidak menaikkan suhu:<br>$$Q = m \\cdot L_f$$</div>",
      "steps": "<ol><li>Konversi massa ke kg: $m = 500\\text{ g} = 0{,}5\\text{ kg}$.</li><li>Hitung kalor lebur: $Q = 0{,}5\\text{ kg} \\times 336.000\\text{ J/kg} = 168.000\\text{ J} = 168\\text{ kJ}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Konsep Kunci:</strong> Pada peristiwa perubahan wujud zat, suhu zat selalu konstan (tidak ada $\\Delta T$). Jangan masukkan kalor jenis $c$ saat zat sedang melebur!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-kal-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Pemuaian Luas Keping Logam",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pelat kuningan memiliki luas mula-mula $A_0 = 2\\text{ m}^2$ pada suhu $20^\\circ\\text{C}$. Koefisien muai panjang kuningan adalah $\\alpha = 2 \\times 10^{-5}/^\\circ\\text{C}$. Jika pelat tersebut dipanaskan hingga suhunya menjadi $70^\\circ\\text{C}$, pertambahan luas pelat kuningan tersebut ($\\Delta A$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4 \\times 10^{-3}\\text{ m}^2$",
      "$2 \\times 10^{-3}\\text{ m}^2$",
      "$8 \\times 10^{-3}\\text{ m}^2$",
      "$4 \\times 10^{-4}\\text{ m}^2$",
      "$1 \\times 10^{-3}\\text{ m}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Koefisien Pemuaian:</strong><br>• Koefisien muai luas adalah dua kali koefisien muai panjang: $\\beta = 2\\alpha$<br>• Pertambahan luas: $\\Delta A = A_0 \\cdot \\beta \\cdot \\Delta T = A_0 \\cdot (2\\alpha) \\cdot \\Delta T$</div>",
      "steps": "<ol><li>Koefisien muai luas: $\\beta = 2 \\times (2 \\times 10^{-5}) = 4 \\times 10^{-5}/^\\circ\\text{C}$.</li><li>Kenaikan suhu: $\\Delta T = 70 - 20 = 50^\\circ\\text{C}$.</li><li>Pertambahan luas: $\\Delta A = 2 \\times (4 \\times 10^{-5}) \\times 50 = 400 \\times 10^{-5} = 4 \\times 10^{-3}\\text{ m}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Hubungan 1-2-3 Dimensi:</strong><br>Panjang $\\implies \\alpha$<br>Luas $\\implies \\beta = 2\\alpha$<br>Volume $\\implies \\gamma = 3\\alpha$</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-kal-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Pemuaian Volume Kubus Logam",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah kubus tembaga memiliki volume awal $V_0 = 1000\\text{ cm}^3$ pada suhu $0^\\circ\\text{C}$. Jika koefisien muai panjang tembaga adalah $\\alpha = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$, maka koefisien muai volume ($\\gamma$) dan pertambahan volume kubus ($\\Delta V$) saat dipanaskan hingga $100^\\circ\\text{C}$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\gamma = 5{,}1 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 5{,}1\\text{ cm}^3$",
      "$\\gamma = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 1{,}7\\text{ cm}^3$",
      "$\\gamma = 3{,}4 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 3{,}4\\text{ cm}^3$",
      "$\\gamma = 5{,}1 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 51\\text{ cm}^3$",
      "$\\gamma = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 5{,}1\\text{ cm}^3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Pemuaian Volume Zat Padat:</strong><br>$$\\gamma = 3\\alpha$$<br>$$\\Delta V = V_0 \\cdot \\gamma \\cdot \\Delta T$$</div>",
      "steps": "<ol><li>Hitung $\\gamma$: $\\gamma = 3 \\times 1{,}7 \\times 10^{-5} = 5{,}1 \\times 10^{-5}/^\\circ\\text{C}$.</li><li>Hitung $\\Delta V$: $\\Delta V = 1000 \\times (5{,}1 \\times 10^{-5}) \\times 100 = 5{,}1\\text{ cm}^3$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menggunakan nilai $\\alpha$ langsung untuk menghitung pemuaian ruang/volume tanpa mengalikan dengan 3.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-kal-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Kapasitas Kalor Benda",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu balok logam memiliki kapasitas kalor $C = 250\\text{ J/}^circ\\text{C}$. Berapakah jumlah kalor yang dibutuhkan untuk memanaskan balok logam tersebut dari suhu $20^\\circ\\text{C}$ hingga menjadi $60^\\circ\\text{C}$?",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10.000\\text{ Joule}$",
      "$5.000\\text{ Joule}$",
      "$15.000\\text{ Joule}$",
      "$2.500\\text{ Joule}$",
      "$25.000\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Kapasitas Kalor ($C$) dan Kalor ($Q$):</strong><br>Kapasitas kalor adalah kemampuan seluruh benda menyerap kalor per derajat kenaikan suhu ($C = m \\cdot c$):<br>$$Q = C \\cdot \\Delta T$$</div>",
      "steps": "<ol><li>Kenaikan suhu: $\\Delta T = 60^\\circ\\text{C} - 20^\\circ\\text{C} = 40^\\circ\\text{C}$.</li><li>Hitung kalor: $Q = C \\cdot \\Delta T = 250\\text{ J/}^circ\\text{C} \\times 40^\\circ\\text{C} = 10.000\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Bedakan $c$ dan $C$:</strong> Kalor jenis ($c$) memiliki satuan $\\text{J/kg}^\\circ\\text{C}$ (tergantung massa). Kapasitas kalor ($C$) bersatuan $\\text{J/}^circ\\text{C}$ (sudah mencakup massa benda).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill2-kal-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Kalor Penguapan Air",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Banyaknya kalor yang diperlukan untuk menguapkan seluruhnya $m = 200\\text{ gram}$ air pada titik didihnya $100^\\circ\\text{C}$ menjadi uap air bersuhu $100^\\circ\\text{C}$ (kalor uap air $L_v = 2{,}26 \\times 10^6\\text{ J/kg}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$452\\text{ kJ}$",
      "$226\\text{ kJ}$",
      "$904\\text{ kJ}$",
      "$45{,}2\\text{ kJ}$",
      "$113\\text{ kJ}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kalor Laten Penguapan:</strong><br>$$Q = m \\cdot L_v$$</div>",
      "steps": "<ol><li>Konversi massa: $m = 200\\text{ g} = 0{,}2\\text{ kg}$.</li><li>Kalor: $Q = 0{,}2\\text{ kg} \\times (2{,}26 \\times 10^6\\text{ J/kg}) = 0{,}452 \\times 10^6\\text{ J} = 452.000\\text{ J}$.</li><li>Konversi ke kilojoule: $Q = 452\\text{ kJ}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Fakta Fisika Menarik:</strong> Kalor penguapan air ($2{,}26 \\times 10^6\\text{ J/kg}$) hampir 7 kali lebih besar daripada kalor leburnya ($3{,}36 \\times 10^5\\text{ J/kg}$) karena memutus ikatan antarmolekul cair sepenuhnya menjadi gas.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill2-kal-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Penyusutan Panjang Akibat Pendinginan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seutas kawat tembaga dengan panjang $L_0 = 5\\text{ meter}$ mula-mula bersuhu $80^\\circ\\text{C}$. Kawat tersebut didinginkan hingga suhunya turun menjadi $30^\\circ\\text{C}$. Jika koefisien muai panjang tembaga adalah $\\alpha = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$, maka pengurangan panjang (penyusutan) kawat tembaga tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4{,}25\\text{ mm}$",
      "$2{,}55\\text{ mm}$",
      "$8{,}50\\text{ mm}$",
      "$1{,}70\\text{ mm}$",
      "$0{,}425\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Penyusutan Termal:</strong><br>$$\\Delta L = L_0 \\cdot \\alpha \\cdot |\\Delta T|$$</div>",
      "steps": "<ol><li>Penurunan suhu: $|\\Delta T| = 80 - 30 = 50^\\circ\\text{C}$.</li><li>Hitung penyusutan: $\\Delta L = 5 \\times (1{,}7 \\times 10^{-5}) \\times 50 = 425 \\times 10^{-5}\\text{ m} = 4{,}25 \\times 10^{-3}\\text{ m} = 4{,}25\\text{ mm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Simetri Pemuaian:</strong> Rumus pemuaian berlaku dua arah: bertambah panjang saat dipanaskan ($Delta T > 0$) dan menyusut sama besarnya saat didinginkan ($Delta T < 0$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill2-kal-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Laju Perpindahan Kalor secara Konveksi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pelat pemanas dengan luas penampang $A = 0{,}5\\text{ m}^2$ melepaskan kalor ke udara sekitarnya secara konveksi alami. Koefisien konveksi udara adalah $h = 20\\text{ W/m}^2\\cdot\\text{K}$. Jika perbedaan suhu antara pelat pemanas dan udara ruangan adalah $\\Delta T = 30^\\circ\\text{C}$, maka laju aliran kalor konveksi ($H$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$300\\text{ Watt}$",
      "$150\\text{ Watt}$",
      "$600\\text{ Watt}$",
      "$100\\text{ Watt}$",
      "$50\\text{ Watt}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Pendinginan Newton (Konveksi):</strong><br>$$H = \\frac{Q}{t} = h \\cdot A \\cdot \\Delta T$$</div>",
      "steps": "<ol><li>Identifikasi data: $h = 20\\text{ W/m}^2\\cdot\\text{K}$, $A = 0{,}5\\text{ m}^2$, $\\Delta T = 30\\text{ K}$.</li><li>Laju kalor: $H = 20 \\times 0{,}5 \\times 30 = 10 \\times 30 = 300\\text{ Watt}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Selisih Suhu:</strong> Nilai selisih suhu dalam Celcius sebanding tepat dengan selisih suhu dalam Kelvin ($Delta T\\text{ }^\\circ\\text{C} = \\Delta T\\text{ K}$). Jadi tidak perlu ditambah 273 saat menghitung selisih $Delta T$!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "sedang-fis-12",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Termofisika - Asas Black Campuran Air dan Es",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebanyak $200\\text{ gram}$ air bersuhu $60^\\circ\\text{C}$ dicampurkan dengan $50\\text{ gram}$ es bersuhu $0^\\circ\\text{C}$ di dalam wadah kalorimeter ideal terisolasi sempurna. Diketahui kalor jenis air $c = 1\\text{ kal/g}^\\circ\\text{C}$ dan kalor lebur es $L = 80\\text{ kal/g}$. Suhu akhir campuran saat mencapai kesetimbangan termal adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20^\\circ\\text{C}$",
      "$24^\\circ\\text{C}$",
      "$28^\\circ\\text{C}$",
      "$32^\\circ\\text{C}$",
      "$36^\\circ\\text{C}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Asas Black ($Q_{\\text{lepas}} = Q_{\\text{terima}}$):</strong><br>\n          Kalor yang dilepas oleh air panas digunakan untuk meleburkan es menjadi air $0^\\circ\\text{C}$, kemudian menaikkan suhu air leburan es ke suhu campuran $T_c$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Kalor yang dibutuhkan untuk meleburkan seluruh es $0^\\circ\\text{C}$:\n            $$Q_{\\text{lebur}} = m_{\\text{es}} \\cdot L = 50 \\times 80 = 4000\\text{ kal}$$\n          </li>\n          <li>Kalor maksimum yang dapat dilepas air panas hingga $0^\\circ\\text{C}$:\n            $$Q_{\\max} = 200 \\times 1 \\times 60 = 12000\\text{ kal}$$\n            Karena $12000 > 4000$, seluruh es mencair dan suhu akhir $T_c > 0^\\circ\\text{C}$.\n          </li>\n          <li>Persamaan Asas Black:\n            $$m_{\\text{air}} c (60 - T_c) = Q_{\\text{lebur}} + m_{\\text{es}} c (T_c - 0)$$\n            $$200(1)(60 - T_c) = 4000 + 50(1)(T_c)$$\n            $$12000 - 200 T_c = 4000 + 50 T_c$$\n            $$8000 = 250 T_c \\implies T_c = \\frac{8000}{250} = 32^\\circ\\text{C}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Siswa sering lupa memperhitungkan kalor lebur es ($m_{\\text{es}} L$) dan hanya menghitung $m_1 c \\Delta T_1 = m_2 c \\Delta T_2$.\n        </div>\n      "
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "sup-fis-ter-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Konduksi Termal Batang Logam",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua batang logam $P$ dan $Q$ dengan luas penampang dan panjang yang sama disambungkan ujungnya. Konduktivitas termal logam $P$ adalah dua kali konduktivitas termal logam $Q$ ($k_P = 2k_Q$). Jika ujung bebas logam $P$ bersuhu $90^\\circ\\text{C}$ dan ujung bebas logam $Q$ bersuhu $30^\\circ\\text{C}$, maka suhu sambungan kedua logam pada keadaan tunak (stasioner) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$70^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$65^\\circ\\text{C}$",
      "$75^\\circ\\text{C}$",
      "$50^\\circ\\text{C}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Laju Konduksi Kalor Keadaan Stasioner:</strong><br>Pada sambungan batang, laju aliran kalor melalui batang $P$ sama dengan laju aliran kalor melalui batang $Q$: $H_P = H_Q \\implies k_P A \\frac{\\Delta T_P}{L} = k_Q A \\frac{\\Delta T_Q}{L}$.</div>",
      "steps": "<ol><li>Karena $A$ dan $L$ sama: $k_P (90 - T) = k_Q (T - 30)$.</li><li>Substitusi $k_P = 2k_Q$: $2(90 - T) = T - 30$.</li><li>$180 - 2T = T - 30 \\implies 3T = 210 \\implies T = 70^\\circ\\text{C}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengambil rata-rata aritmetika biasa $\\frac{90 + 30}{2} = 60^\\circ\\text{C}$ tanpa memperhitungkan perbedaan nilai konduktivitas kedua bahan.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-kal-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Asas Black Campuran Cairan Sejenis",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebanyak $100\\text{ gram}$ air bersuhu $90^\\circ\\text{C}$ dicampurkan dengan $200\\text{ gram}$ air bersuhu $30^\\circ\\text{C}$ di dalam sebuah wadah terisolasi termal ideal (wadah tidak menyerap kalor). Suhu akhir kesetimbangan termal campuran ($T_c$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$45^\\circ\\text{C}$",
      "$55^\\circ\\text{C}$",
      "$40^\\circ\\text{C}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Asas Black:</strong><br>Kalor yang dilepas oleh zat bersuhu lebih tinggi sama dengan kalor yang diserap oleh zat bersuhu lebih rendah:<br>$$Q_{\\text{lepas}} = Q_{\\text{terima}}$$</div>",
      "steps": "<ol><li>Zat sejenis (air) memiliki kalor jenis $c$ yang sama sehingga $c$ dapat dieliminasi.</li><li>Persamaan Asas Black: $m_1 (T_1 - T_c) = m_2 (T_c - T_2)$.</li><li>Substitusi data: $100(90 - T_c) = 200(T_c - 30)$.</li><li>Bagi kedua ruas dengan 100: $90 - T_c = 2(T_c - 30) = 2T_c - 60$.</li><li>Pindahkan suku: $90 + 60 = 2T_c + T_c \\implies 150 = 3T_c \\implies T_c = 50^\\circ\\text{C}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Rumus Cepat Cairan Sejenis:</strong> Rata-rata tertimbang massa: $T_c = \\frac{m_1 T_1 + m_2 T_2}{m_1 + m_2} = \\frac{100(90) + 200(30)}{300} = \\frac{15000}{300} = 50^\\circ\\text{C}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-kal-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Laju Konduksi Kalor Batang Logam",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah batang tembaga memiliki panjang $L = 50\\text{ cm} = 0{,}5\\text{ m}$ dan luas penampang $A = 4\\text{ cm}^2 = 4 \\times 10^{-4}\\text{ m}^2$. Konduktivitas termal tembaga adalah $k = 400\\text{ W/m}\\cdot\\text{K}$. Jika perbedaan suhu antara kedua ujung batang dipertahankan sebesar $\\Delta T = 100^\\circ\\text{C}$, maka laju perpindahan kalor secara konduksi ($H$) melalui batang tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$32\\text{ Watt}$",
      "$16\\text{ Watt}$",
      "$64\\text{ Watt}$",
      "$8\\text{ Watt}$",
      "$320\\text{ Watt}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Laju Konduksi Termal Fourier:</strong><br>Laju rambatan kalor per detik berbanding lurus dengan konduktivitas termal, luas penampang, dan gradien suhu:<br>$$H = \\frac{Q}{t} = \\frac{k \\cdot A \\cdot \\Delta T}{L}$$</div>",
      "steps": "<ol><li>Pembilang: $k \\cdot A \\cdot \\Delta T = 400 \\times (4 \\times 10^{-4}) \\times 100 = 16\\text{ W}\\cdot\\text{m}$.</li><li>Penyebut: $L = 0{,}5\\text{ m}$.</li><li>Laju kalor: $H = \\frac{16}{0{,}5} = 32\\text{ Watt}$ (Joule/detik).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Konversi Luas $A$:</strong> $1\\text{ cm}^2 = 10^{-4}\\text{ m}^2$, bukan $10^{-2}$. Kesalahan umum lupa mengkuadratkan faktor $10^{-2}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-kal-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Daya Radiasi Termal Stefan-Boltzmann",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah filamen pemanas berbentuk silinder memancarkan daya radiasi sebesar $P_1 = 50\\text{ Watt}$ ketika suhunya berada pada $T_1 = 300\\text{ K}$. Jika suhu filamen tersebut dinaikkan menjadi $T_2 = 600\\text{ K}$, dengan luas permukaan dan emisivitas tetap, maka daya radiasi yang dipancarkan filamen sekarang ($P_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$800\\text{ Watt}$",
      "$200\\text{ Watt}$",
      "$400\\text{ Watt}$",
      "$1600\\text{ Watt}$",
      "$100\\text{ Watt}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Radiasi Stefan-Boltzmann:</strong><br>Daya radiasi kalor sebanding dengan <strong>pangkat empat</strong> dari suhu mutlaknya:<br>$$P = e \\cdot \\sigma \\cdot A \\cdot T^4 \\implies \\frac{P_2}{P_1} = \\left( \\frac{T_2}{T_1} \\right)^4$$</div>",
      "steps": "<ol><li>Perbandingan suhu: $\\frac{T_2}{T_1} = \\frac{600}{300} = 2$.</li><li>Pangkat empatkan perbandingan: $2^4 = 16$.</li><li>Daya baru: $P_2 = 16 \\times P_1 = 16 \\times 50\\text{ W} = 800\\text{ Watt}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Pangkat Empat Wajib Diingat:</strong> Kenaikan suhu $2\\times \\implies$ daya radiasi naik $2^4 = 16\\times$. Kenaikan suhu $3\\times \\implies$ daya radiasi naik $3^4 = 81\\times$!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill2-kal-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Suhu Sambungan Dua Logam Berbeda Konduktivitas",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua batang logam $A$ dan $B$ dengan panjang dan luas penampang yang sama disambungkan ujungnya. Konduktivitas termal logam $A$ adalah tiga kali konduktivitas termal logam $B$ ($k_A = 3k_B$). Ujung bebas logam $A$ bersuhu $100^\\circ\\text{C}$ dan ujung bebas logam $B$ bersuhu $20^\\circ\\text{C}$. Suhu sambungan antara kedua logam ($T_s$) pada keadaan stasioner adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$80^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$75^\\circ\\text{C}$",
      "$50^\\circ\\text{C}$",
      "$85^\\circ\\text{C}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Keseimbangan Sambungan Konduksi:</strong><br>Laju aliran kalor pada kedua batang adalah sama:<br>$$H_A = H_B \\implies k_A (T_A - T_s) = k_B (T_s - T_B)$$</div>",
      "steps": "<ol><li>Substitusi $k_A = 3k_B$: $3(100 - T_s) = T_s - 20$.</li><li>Jabarkan: $300 - 3T_s = T_s - 20$.</li><li>$300 + 20 = 4T_s \\implies 320 = 4T_s \\implies T_s = 80^\\circ\\text{C}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Logika Cepat:</strong> Logam $A$ menghantar panas 3 kali lebih cepat $implies$ suhu sambungan ditarik sangat dekat ke suhu ujung $A$ ($80^\\circ\\text{C}$, bukan rata-rata $60^\\circ\\text{C}$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill2-kal-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Hubungan Daya Radiasi dan Luas Permukaan",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah pelat logam memancarkan energi radiasi termal sebesar $P_1 = 40\\text{ Watt}$. Jika pelat tersebut diganti dengan pelat sejenis dengan luas permukaan dua kali lipat semula ($A_2 = 2A_1$) dan dipanaskan pada suhu mutlak yang sama, maka daya radiasi yang dipancarkannya sekarang ($P_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$80\\text{ Watt}$",
      "$160\\text{ Watt}$",
      "$40\\text{ Watt}$",
      "$20\\text{ Watt}$",
      "$640\\text{ Watt}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Ketergantungan Radiasi terhadap Luas:</strong><br>$$P = e \\sigma A T^4 \\implies P \\propto A$$<br>Pada suhu tetap, daya radiasi berbanding lurus linear dengan luas permukaan pemancar.</div>",
      "steps": "<ol><li>Karena suhu $T$ tetap: $\\frac{P_2}{P_1} = \\frac{A_2}{A_1} = 2$.</li><li>Daya baru: $P_2 = 2 \\times P_1 = 2 \\times 40\\text{ W} = 80\\text{ Watt}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Hati-hati Tertukar:</strong> Daya sebanding dengan pangkat empat terhadap <strong>suhu</strong> ($T^4$), tetapi sebanding linear dengan <strong>luas permukaan</strong> ($A^1$). Jangan memangkat-empatkan luas!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill2-kal-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Penentuan Kalor Jenis Zat Asas Black",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebongkah logam bermassa $m_L = 200\\text{ gram}$ bersuhu $100^\\circ\\text{C}$ dimasukkan ke dalam bejana berisi $100\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$ ($c_{\\text{air}} = 1\\text{ kal/g}^\\circ\\text{C}$). Jika suhu akhir campuran adalah $40^\\circ\\text{C}$ dan bejana tidak menyerap kalor, maka kalor jenis logam ($c_L$) tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}167\\text{ kal/g}^\\circ\\text{C}$ (sekitar $\\frac{1}{6}$)",
      "$0{,}50\\text{ kal/g}^\\circ\\text{C}$",
      "$0{,}25\\text{ kal/g}^\\circ\\text{C}$",
      "$1{,}00\\text{ kal/g}^\\circ\\text{C}$",
      "$0{,}083\\text{ kal/g}^\\circ\\text{C}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Asas Black Menentukan Kalor Jenis:</strong><br>$$m_L \\cdot c_L \\cdot (T_L - T_c) = m_{\\text{air}} \\cdot c_{\\text{air}} \\cdot (T_c - T_{\\text{air}})$$</div>",
      "steps": "<ol><li>Kalor diterima air: $Q_{\\text{terima}} = 100 \\times 1 \\times (40 - 20) = 2000\\text{ kal}$.</li><li>Kalor dilepas logam: $Q_{\\text{lepas}} = 200 \\times c_L \\times (100 - 40) = 200 \\times c_L \\times 60 = 12.000 \\cdot c_L$.</li><li>Asas Black: $12.000 \\cdot c_L = 2000 \\implies c_L = \\frac{2000}{12000} = \\frac{1}{6} \\approx 0{,}167\\text{ kal/g}^\\circ\\text{C}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Cek Satuan Kalor:</strong> Jika menggunakan gram dan $\\text{kal/g}^\\circ\\text{C}$, kalor jenis air adalah $1$. Jika menggunakan kg dan Joule, kalor jenis air adalah $4200\\text{ J/kg}\\cdot\\text{K}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill2-kal-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-1",
    "category": "Pemanas Listrik Air (Daya dan Kalor)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah ketel listrik berdaya $P = 420\\text{ Watt}$ digunakan untuk memanaskan $m = 1\\text{ kg}$ air bersuhu $20^\\circ\\text{C}$ hingga mencapai suhu $40^\\circ\\text{C}$ ($c = 4200\\text{ J/kg}^\\circ\\text{C}$). Jika seluruh energi listrik diubah sempurna menjadi kalor tanpa ada yang hilang, waktu ($t$) yang dibutuhkan ketel tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$200\\text{ detik}$ ($3\\text{ menit } 20\\text{ detik}$)",
      "$100\\text{ detik}$",
      "$420\\text{ detik}$",
      "$50\\text{ detik}$",
      "$300\\text{ detik}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kesetaraan Energi Listrik dan Kalor:</strong><br>$$W_{\\text{listrik}} = Q_{\\text{kalor}} \\implies P \\cdot t = m \\cdot c \\cdot \\Delta T$$</div>",
      "steps": "<ol><li>Kalor yang diperlukan: $Q = 1 \\times 4200 \\times (40 - 20) = 1 \\times 4200 \\times 20 = 84.000\\text{ Joule}$.</li><li>Waktu pemanasan: $t = \\frac{Q}{P} = \\frac{84.000\\text{ J}}{420\\text{ W}} = 200\\text{ detik}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Hubungan Joule dan Watt:</strong> $1\\text{ Watt} = 1\\text{ Joule/detik}$. Waktu selalu dihasilkan dalam satuan detik.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor dan Perpindahannya",
    "subTopic": "Kalor dan Perpindahannya",
    "chapterTitle": "Kalor dan Termodinamika"
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
