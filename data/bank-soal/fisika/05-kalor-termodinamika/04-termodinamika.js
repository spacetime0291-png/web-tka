/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Sub-topik: Termodinamika (fis-ter-4)
 * Indikator: Empat proses termodinamika (isobarik, isokhorik, isotermal, adiabatik); usaha luar dan perubahan energi dalam; Hukum I & II Termodinamika; siklus Carnot.
 * 
 * Total Butir Soal: 18 Soal (Mudah: 9, Sedang: 9, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-ter-4";
  const questions = [
  {
    "id": "mudah-fis-14",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Termodinamika - Usaha Gas Isobarik",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu gas ideal berada di dalam silinder berpenghisap pada tekanan tetap $P = 2 \\times 10^5\\text{ N/m}^2$. Gas tersebut memuai secara isobarik sehingga volumenya bertambah dari $V_1 = 1{,}5\\text{ m}^3$ menjadi $V_2 = 2{,}5\\text{ m}^3$. Besar usaha luar ($W$) yang dilakukan oleh gas tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$100\\text{ kJ}$",
      "$150\\text{ kJ}$",
      "$200\\text{ kJ}$",
      "$250\\text{ kJ}$",
      "$300\\text{ kJ}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Usaha Luar Gas pada Proses Isobarik (Tekanan Tetap):</strong><br>\n          $$W = P \\cdot \\Delta V = P(V_2 - V_1)$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung perubahan volume: $\\Delta V = 2{,}5\\text{ m}^3 - 1{,}5\\text{ m}^3 = 1{,}0\\text{ m}^3$.</li>\n          <li>Hitung usaha luar:\n            $$W = (2 \\times 10^5\\text{ N/m}^2)(1{,}0\\text{ m}^3) = 2 \\times 10^5\\text{ Joule} = 200\\text{ kJ}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan konversi satuan dari Joule ke kilojoule ($1\\text{ kJ} = 1000\\text{ J}$).\n        </div>\n      "
    }
  },
  {
    "id": "drill-ter-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Usaha Luar Gas pada Proses Isobarik",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu gas ideal dipanaskan pada tekanan tetap $P = 2 \\times 10^5\\text{ Pa}$ sehingga volumenya memuai dari $V_1 = 1{,}5\\text{ m}^3$ menjadi $V_2 = 3{,}0\\text{ m}^3$. Besar usaha luar ($W$) yang dilakukan oleh gas tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$300\\text{ kJ}$ ($3 \\times 10^5\\text{ J}$)",
      "$600\\text{ kJ}$ ($6 \\times 10^5\\text{ J}$)",
      "$150\\text{ kJ}$ ($1{,}5 \\times 10^5\\text{ J}$)",
      "$0\\text{ Joule}$",
      "$450\\text{ kJ}$ ($4{,}5 \\times 10^5\\text{ J}$)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Usaha pada Proses Isobarik (Tekanan Tetap):</strong><br>$$W = P \\cdot \\Delta V = P(V_2 - V_1)$$</div>",
      "steps": "<ol><li>Perubahan volume: $\\Delta V = 3{,}0 - 1{,}5 = 1{,}5\\text{ m}^3$.</li><li>Hitung usaha: $W = (2 \\times 10^5\\text{ Pa}) \\times 1{,}5\\text{ m}^3 = 3 \\times 10^5\\text{ Joule} = 300\\text{ kJ}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Rumus usaha isobarik $W = P \\Delta V$ adalah dasar termodinamika paling sering keluar. Pastikan $P$ dalam $\\text{Pa}$ ($\text{N/m}^2$) dan $V$ dalam $\\text{m}^3$.</div>"
    }
  },
  {
    "id": "drill-ter-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Karakteristik Usaha Proses Isokhorik",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sejumlah gas ideal dipanaskan di dalam bejana baja kaku bervolume tetap $V = 5\\text{ liter}$. Jika tekanan gas meningkat dari $1\\text{ atm}$ menjadi $3\\text{ atm}$, besar usaha luar ($W$) yang dilakukan gas pada proses isokhorik tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0\\text{ Joule}$",
      "$10\\text{ Joule}$",
      "$15\\text{ Joule}$",
      "$1000\\text{ Joule}$",
      "$1500\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kaidah Proses Isokhorik (Volume Tetap):</strong><br>Karena volume tidak mengalami perubahan sama sekali ($\\Delta V = 0$):<br>$$W = \\int P \\, dV = 0\\text{ Joule}$$</div>",
      "steps": "<ol><li>Bejana kaku bervolume tetap $\\implies \\Delta V = 0$.</li><li>Usaha gas: $W = 0\\text{ Joule}$.</li><li>Seluruh kalor yang masuk hanya digunakan untuk menaikkan energi dalam gas: $Q = \\Delta U$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Rumus Cepat Mutlak:</strong> Pada proses ISOKHORIK (volume tetap), usaha selalu NOL ($W = 0$). Jangan pernah buang waktu menghitung perkalian $P \\times V$!</div>"
    }
  },
  {
    "id": "drill-ter-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Proses Isotermal dan Hukum I Termodinamika",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu gas ideal mengalami ekspansi secara isotermal (pada suhu konstan) dengan menyerap kalor dari lingkungan sebesar $Q = 650\\text{ Joule}$. Besar usaha ($W$) yang dilakukan gas dan perubahan energi dalam ($\\Delta U$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$W = 650\\text{ J}$ dan $\\Delta U = 0$",
      "$W = 0$ dan $\\Delta U = 650\\text{ J}$",
      "$W = 325\\text{ J}$ dan $\\Delta U = 325\\text{ J}$",
      "$W = 650\\text{ J}$ dan $\\Delta U = 650\\text{ J}$",
      "$W = -650\\text{ J}$ dan $\\Delta U = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum I Termodinamika pada Proses Isotermal:</strong><br>Suhu konstan $\\implies \\Delta T = 0 \\implies \\Delta U = 0$.<br>Maka menurut Hukum I: $Q = W + \\Delta U \\implies W = Q$.</div>",
      "steps": "<ol><li>Proses isotermal memiliki $\\Delta U = 0$.</li><li>Seluruh kalor yang diserap diubah menjadi usaha luar: $W = Q = 650\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Kaidah Identitas 4 Proses:</strong><br>• Isokhorik: $W = 0 \\implies Q = \\Delta U$<br>• Isotermal: $\\Delta U = 0 \\implies Q = W$<br>• Adiabatik: $Q = 0 \\implies W = -\\Delta U$</div>"
    }
  },
  {
    "id": "drill-ter-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Proses Adiabatik",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Gas ideal di dalam silinder mengalami proses adiabatik (tidak ada pertukaran kalor antara sistem dan lingkungan, $Q = 0$). Jika gas tersebut melakukan usaha ke lingkungan sebesar $W = 400\\text{ Joule}$, maka perubahan energi dalam ($\\Delta U$) gas tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-400\\text{ Joule}$",
      "$+400\\text{ Joule}$",
      "$0\\text{ Joule}$",
      "$+800\\text{ Joule}$",
      "$-800\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Proses Adiabatik ($Q = 0$):</strong><br>$$\\Delta U = Q - W \\implies \\Delta U = -W$$<br>Jika gas berekspansi melakukan usaha ($W > 0$), maka energi dalamnya berkurang (suhu gas turun).</div>",
      "steps": "<ol><li>$Q = 0$, $W = +400\\text{ J}$.</li><li>$\\Delta U = -W = -400\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Fenomena Sehari-hari:</strong> Udara yang keluar dari tabung gas bertekanan tinggi saat disemprotkan terasa sangat dingin karena terjadi pemuaian adiabatik (usaha dilakukan dengan mengorbankan energi dalam gas).</div>"
    }
  },
  {
    "id": "drill-ter-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Efisiensi Mesin Kalor Carnot",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi $T_1 = 500\\text{ K}$ dan reservoir suhu rendah $T_2 = 300\\text{ K}$. Efisiensi termal maksimum ($\\eta$) dari mesin Carnot tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$40\\%$",
      "$60\\%$",
      "$20\\%$",
      "$30\\%$",
      "$50\\%$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Efisiensi Mesin Kalor Carnot:</strong><br>$$\\eta = \\left( 1 - \\frac{T_2}{T_1} \\right) \\times 100\\% = \\left( \\frac{T_1 - T_2}{T_1} \\right) \\times 100\\%$$<br>dengan $T_1$ reservoir suhu tinggi dan $T_2$ reservoir suhu rendah (wajib Kelvin!).</div>",
      "steps": "<ol><li>Hitung selisih suhu: $T_1 - T_2 = 500 - 300 = 200\\text{ K}$.</li><li>Hitung efisiensi: $\\eta = \\frac{200}{500} \\times 100\\% = \\frac{2}{5} \\times 100\\% = 40\\%$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Efisiensi Carnot adalah \"selisih dibagi suhu tinggi\": $\\eta = \\frac{T_{\\text{tinggi}} - T_{\\text{rendah}}}{T_{\\text{tinggi}}}$.</div>"
    }
  },
  {
    "id": "sedang-fis-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Efisiensi Mesin Termal Carnot",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu mesin kalor Carnot bekerja di antara reservoir suhu tinggi $527^\\circ\\text{C}$ dan reservoir suhu rendah $127^\\circ\\text{C}$. Jika dalam setiap siklus mesin tersebut menyerap kalor sebesar $4000\\text{ Joule}$ dari reservoir panas, besar usaha mekanik yang dihasilkan mesin serta kalor yang dibuang ke reservoir dingin berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2000\\text{ J}$ dan $2000\\text{ J}$",
      "$2400\\text{ J}$ dan $1600\\text{ J}$",
      "$1500\\text{ J}$ dan $2500\\text{ J}$",
      "$3000\\text{ J}$ dan $1000\\text{ J}$",
      "$1600\\text{ J}$ dan $2400\\text{ J}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Mesin Kalor Carnot & Suhu Mutlak Kelvin:</strong><br>\n          • Suhu WAJIB dalam skala Kelvin: $T(\\text{K}) = T(^\\circ\\text{C}) + 273$<br>\n          • Efisiensi: $\\eta = 1 - \\frac{T_C}{T_H} = \\frac{W}{Q_H}$<br>\n          • Hukum Kekekalan Energi: $W = Q_H - Q_C \\iff Q_C = Q_H - W$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li><strong>Konversi Suhu ke Kelvin:</strong><br>\n            $T_H = 527 + 273 = 800\\text{ K}$<br>\n            $T_C = 127 + 273 = 400\\text{ K}$\n          </li>\n          <li><strong>Hitung Efisiensi Siklus $(\\eta)$:</strong><br>\n            $$\\eta = 1 - \\frac{400}{800} = 1 - 0{,}5 = 0{,}5 = 50\\%$$\n          </li>\n          <li><strong>Hitung Usaha $(W)$ dan Kalor Terbuang $(Q_C)$:</strong><br>\n            $$W = \\eta \\cdot Q_H = 0{,}5 \\times 4000\\text{ J} = 2000\\text{ Joule}$$\n            $$Q_C = Q_H - W = 4000 - 2000 = 2000\\text{ Joule}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          <strong>⚠️ Jebakan Suhu Celsius:</strong><br>\n          Siswa yang lupa mengonversi ke Kelvin akan menghitung $\\eta = 1 - \\frac{127}{527} \\approx 76\\%$, yang menghasilkan nilai usaha yang keliru. Suhu termodinamika selalu dihitung dalam Kelvin!\n        </div>\n      "
    }
  },
  {
    "id": "sup-fis-ter-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Hukum I Termodinamika",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu sistem gas ideal mengalami proses ekspansi dengan menyerap kalor dari lingkungan sebesar $750\\text{ Joule}$. Pada saat yang bersamaan, gas memuai dan melakukan usaha luar ke lingkungan sebesar $450\\text{ Joule}$. Perubahan energi dalam ($\\Delta U$) yang dialami sistem gas tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+300\\text{ Joule}$",
      "$-300\\text{ Joule}$",
      "$+1200\\text{ Joule}$",
      "$-1200\\text{ Joule}$",
      "$+450\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum I Termodinamika (Kekekalan Energi):</strong><br>$\\Delta U = Q - W$, dengan konvensi tanda:<br>• $Q > 0$ jika sistem menyerap kalor.<br>• $W > 0$ jika sistem melakukan usaha ke lingkungan.</div>",
      "steps": "<ol><li>Kalor yang diserap: $Q = +750\\text{ J}$.</li><li>Usaha yang dilakukan gas: $W = +450\\text{ J}$.</li><li>Perubahan energi dalam: $\\Delta U = Q - W = 750 - 450 = +300\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Tertukar tanda perjanjian usaha $W$ sehingga menjumlahkan $750 + 450 = 1200\\text{ J}$.</div>"
    }
  },
  {
    "id": "drill-ter-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Usaha dan Kalor Dibuang Mesin Kalor",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah mesin kalor memiliki efisiensi termal $30\\%$. Dalam setiap siklusnya, mesin tersebut menyerap kalor sebesar $Q_1 = 2000\\text{ Joule}$ dari reservoir panas. Besar usaha yang dihasilkan ($W$) dan kalor yang dibuang ke reservoir dingin ($Q_2$) dalam satu siklus berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$W = 600\\text{ J}$ dan $Q_2 = 1400\\text{ J}$",
      "$W = 1400\\text{ J}$ dan $Q_2 = 600\\text{ J}$",
      "$W = 600\\text{ J}$ dan $Q_2 = 2000\\text{ J}$",
      "$W = 300\\text{ J}$ dan $Q_2 = 1700\\text{ J}$",
      "$W = 2000\\text{ J}$ dan $Q_2 = 1400\\text{ J}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Usaha dan Kalor Mesin:</strong><br>• $W = \\eta \\cdot Q_1$<br>• Menurut kekekalan energi: $Q_1 = W + Q_2 \\implies Q_2 = Q_1 - W$</div>",
      "steps": "<ol><li>Hitung usaha yang dihasilkan: $W = 30\\% \\times 2000\\text{ J} = 0{,}3 \\times 2000 = 600\\text{ Joule}$.</li><li>Hitung kalor yang dibuang: $Q_2 = 2000 - 600 = 1400\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Kekekalan Energi Mesin:</strong> Kalor yang masuk ($Q_1$) selalu terbagi menjadi dua: yang menjadi kerja bermanfaat ($W$) dan yang terbuang sia-sia ($Q_2$). $Q_1 = W + Q_2$.</div>"
    }
  },
  {
    "id": "drill-ter-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Jebakan Satuan Suhu Mesin Carnot",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu mesin kalor Carnot bekerja di antara reservoir panas bersuhu $327^\\circ\\text{C}$ dan reservoir dingin bersuhu $27^\\circ\\text{C}$. Efisiensi mesin Carnot tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\%$",
      "$91{,}7\\%$",
      "$40\\%$",
      "$60\\%$",
      "$25\\%$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Peringatan Mutlak Suhu Carnot:</strong><br>Suhu pada rumus efisiensi Carnot <strong>HARUS</strong> dalam skala Kelvin mutlak, tidak boleh menggunakan derajat Celsius!<br>$$T\\text{ (K)} = T\\text{ (}^\\circ\\text{C)} + 273$$</div>",
      "steps": "<ol><li>Ubah ke Kelvin:<br>• $T_1 = 327 + 273 = 600\\text{ K}$<br>• $T_2 = 27 + 273 = 300\\text{ K}$</li><li>Hitung efisiensi Carnot:<br>$$\\eta = \\frac{T_1 - T_2}{T_1} \\times 100\\% = \\frac{600 - 300}{600} \\times 100\\% = \\frac{300}{600} \\times 100\\% = 50\\%$$</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Paling Populer di Soal Ujian:</strong> Menghitung dengan Celsius: $\\eta = \\frac{327 - 27}{327} \\approx 91{,}7\\%$ (SALAH BESAR!). Selalu tambahkan 273 terlebih dahulu!</div>"
    }
  },
  {
    "id": "drill-ter-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Koefisien Performansi Mesin Pendingin (Kulkas)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah lemari es (kulkas) bekerja dengan siklus Carnot terbalik antara ruang pendingin bersuhu $-3^\\circ\\text{C}$ dan ruangan dapur bersuhu $27^\\circ\\text{C}$. Koefisien performansi (daya guna $C_P$) lemari es tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$9$",
      "$10$",
      "$8$",
      "$0{,}9$",
      "$5$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Koefisien Performansi Mesin Pendingin Carnot ($C_P$):</strong><br>$$C_P = \\frac{Q_2}{W} = \\frac{T_2}{T_1 - T_2}$$<br>dengan $T_2$ suhu ruang dingin dan $T_1$ suhu lingkungan panas (dalam Kelvin).</div>",
      "steps": "<ol><li>Konversi ke Kelvin:<br>• $T_2 = -3 + 273 = 270\\text{ K}$ (ruang pendingin)<br>• $T_1 = 27 + 273 = 300\\text{ K}$ (lingkungan)</li><li>Selisih suhu: $T_1 - T_2 = 300 - 270 = 30\\text{ K}$.</li><li>Hitung $C_P$: $C_P = \\frac{270}{30} = 9$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Ingat Formula Pendingin:</strong> Pada mesin pendingin yang diinginkan adalah pendinginan ($T_2$), sehingga pembilangnya adalah $T_2$, bukan $T_1$ ($C_P = \\frac{T_2}{T_1 - T_2}$). Nilai $C_P$ biasanya lebih besar dari 1.</div>"
    }
  },
  {
    "id": "drill2-ter-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Penerapan Tanda Hukum I Termodinamika",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu sistem gas melepaskan kalor ke lingkungan sebesar $300\\text{ Joule}$, dan pada saat bersamaan dilakukan usaha luar untuk menekan gas tersebut sebesar $200\\text{ Joule}$. Perubahan energi dalam ($\\Delta U$) sistem gas tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-100\\text{ Joule}$",
      "$+100\\text{ Joule}$",
      "$-500\\text{ Joule}$",
      "$+500\\text{ Joule}$",
      "$-300\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Perjanjian Tanda Baku Hukum I Termodinamika:</strong><br>$$\\Delta U = Q - W$$<br>• Sistem <strong>melepas kalor</strong>: $Q < 0$ ($Q = -300\\text{ J}$)<br>• Sistem <strong>menerima usaha</strong> (ditekan dari luar): $W < 0$ ($W = -200\\text{ J}$)</div>",
      "steps": "<ol><li>Masukkan tanda dengan tepat: $Q = -300\\text{ J}$, $W = -200\\text{ J}$.</li><li>Hitung $\\Delta U$: $\\Delta U = (-300) - (-200) = -300 + 200 = -100\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tabel Tanda:</strong><br>• Menyerap kalor $\\implies Q > 0$<br>• Melepas kalor $\\implies Q < 0$<br>• Melakukan kerja $\\implies W > 0$<br>• Menerima kerja $\\implies W < 0$</div>"
    }
  },
  {
    "id": "drill2-ter-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Usaha Total Siklus Tertutup Diagram P-V",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu siklus termodinamika persegi panjang pada diagram $P-V$ bekerja di antara tekanan $P_1 = 1 \\times 10^5\\text{ Pa}$ dan $P_2 = 4 \\times 10^5\\text{ Pa}$, serta volume $V_1 = 2\\text{ m}^3$ dan $V_2 = 5\\text{ m}^3$. Jika arah siklus berputar searah jarum jam, maka usaha total ($W_{\\text{siklus}}$) yang dihasilkan dalam satu siklus adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$9 \\times 10^5\\text{ Joule}$ ($900\\text{ kJ}$)",
      "$3 \\times 10^5\\text{ Joule}$ ($300\\text{ kJ}$)",
      "$12 \\times 10^5\\text{ Joule}$ ($1200\\text{ kJ}$)",
      "$6 \\times 10^5\\text{ Joule}$ ($600\\text{ kJ}$)",
      "$0\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Usaha Bersih Siklus Tertutup:</strong><br>Usaha total yang dihasilkan mesin dalam satu siklus penuh sama dengan <strong>luas area daerah tertutup</strong> pada diagram $P-V$:<br>$$W_{\\text{siklus}} = \\text{Luas Persegi Panjang} = \\Delta P \\cdot \\Delta V$$</div>",
      "steps": "<ol><li>Perubahan tekanan: $\\Delta P = P_2 - P_1 = 4 \\times 10^5 - 1 \\times 10^5 = 3 \\times 10^5\\text{ Pa}$.</li><li>Perubahan volume: $\\Delta V = V_2 - V_1 = 5 - 2 = 3\\text{ m}^3$.</li><li>Usaha total: $W = \\Delta P \\times \\Delta V = (3 \\times 10^5) \\times 3 = 9 \\times 10^5\\text{ Joule} = 900\\text{ kJ}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Arah Siklus:</strong><br>• Searah jarum jam (CW) $\\implies$ Mesin Kalor ($W > 0$).<br>• Berlawanan jarum jam (CCW) $\\implies$ Mesin Pendingin ($W < 0$).</div>"
    }
  },
  {
    "id": "drill2-ter-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Energi Dalam pada Satu Siklus Lengkap",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dalam satu siklus termodinamika lengkap (di mana gas kembali tepat ke keadaan termal semula), besar perubahan energi dalam gas ($\\Delta U_{\\text{siklus}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Selalu nol ($0\\text{ Joule}$)",
      "Sama dengan usaha luar yang dilakukan",
      "Sama dengan kalor yang diserap dari reservoir panas",
      "Tergantung pada jenis gas monoatomik atau diatomik",
      "Selalu bernilai positif"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Sifat Fungsi Keadaan Energi Dalam ($U$):</strong><br>Energi dalam adalah fungsi keadaan yang hanya bergantung pada suhu saat itu. Dalam satu siklus tertutup, gas kembali ke suhu awal ($T_{\\text{akhir}} = T_{\\text{awal}}$), sehingga:<br>$$\\Delta U_{\\text{siklus}} = 0 \\implies Q_{\\text{total}} = W_{\\text{total}}$$</div>",
      "steps": "<ol><li>Karena keadaan akhir sama dengan keadaan awal: $T_f = T_i$.</li><li>$\\Delta U = \\frac{3}{2} n R (T_f - T_i) = 0$.</li><li>Kalor netto yang diserap seluruhnya diubah menjadi usaha netto: $Q_{\\text{net}} = W_{\\text{net}}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Prinsip Pokok Siklus:</strong> Dalam satu siklus tertutup PENUH, $\\Delta U$ selalu NOL. Usaha dan kalor tidak nol, tapi sama besar ($W_{\\text{net}} = Q_{\\text{net}}$).</div>"
    }
  },
  {
    "id": "drill2-ter-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Menghitung Kalor Masuk Mesin Carnot",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah mesin Carnot bekerja di antara reservoir suhu tinggi $T_1 = 800\\text{ K}$ dan reservoir suhu rendah $T_2 = 400\\text{ K}$. Jika mesin tersebut menghasilkan usaha mekanik sebesar $W = 1000\\text{ Joule}$ setiap siklusnya, kalor yang diserap dari reservoir panas ($Q_1$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2000\\text{ Joule}$",
      "$1500\\text{ Joule}$",
      "$1000\\text{ Joule}$",
      "$500\\text{ Joule}$",
      "$4000\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Efisiensi dan Usaha Carnot:</strong><br>$$\\eta = 1 - \\frac{T_2}{T_1} \\quad \\text{dan} \\quad \\eta = \\frac{W}{Q_1} \\implies Q_1 = \\frac{W}{\\eta}$$</div>",
      "steps": "<ol><li>Hitung efisiensi mesin: $\\eta = 1 - \\frac{400}{800} = 1 - 0{,}5 = 0{,}5 = 50\\%$.</li><li>Hitung kalor yang diserap: $Q_1 = \\frac{W}{\\eta} = \\frac{1000\\text{ J}}{0{,}5} = 2000\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Alur Terbalik:</strong> Jika diketahui usaha dan suhu, hitung efisiensi $\\eta$ terlebih dahulu, lalu cari $Q_1 = W / \\eta$.</div>"
    }
  },
  {
    "id": "drill2-ter-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Optimalisasi Efisiensi Mesin Termal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Berdasarkan formulasi efisiensi mesin Carnot $\\eta = 1 - \\frac{T_2}{T_1}$, tindakan yang paling efektif untuk menaikkan efisiensi termal mesin adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Menaikkan suhu reservoir panas ($T_1$) atau menurunkan suhu reservoir dingin ($T_2$)",
      "Menambah volume gas di dalam silinder mesin sebanyak mungkin",
      "Memperbesar luas penampang piston penghisap mesin",
      "Mengganti gas monoatomik menjadi gas poliatomik",
      "Menjalankan siklus dengan frekuensi putaran yang lebih cepat"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Prinsip Batas Efisiensi Carnot:</strong><br>Efisiensi mesin kalor ideal <strong>hanya bergantung pada rasio suhu mutlak kedua reservoir</strong> ($T_2/T_1$). Efisiensi meningkat jika selisih $(T_1 - T_2)$ diperbesar, yaitu dengan menaikkan $T_1$ setinggi mungkin dan/atau mendinginkan $T_2$ serendah mungkin.</div>",
      "steps": "<ol><li>Bentuk rumus: $\\eta = 1 - \\frac{T_2}{T_1}$.</li><li>Agar $\\eta$ mendekati $100\\%$, suku $\\frac{T_2}{T_1}$ harus sekecil mungkin.</li><li>Hal ini dicapai dengan memperbesar $T_1$ dan memperkecil $T_2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Teorema Carnot:</strong> Tidak ada mesin yang dapat mencapai efisiensi $100\\%$ kecuali jika reservoir dingin bersuhu nol mutlak ($T_2 = 0\\text{ K}$), yang secara termodinamika mustahil dicapai (Hukum III Termodinamika).</div>"
    }
  },
  {
    "id": "drill2-ter-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Usaha Luar pada Ekspansi Isotermal Gas Ideal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebanyak $n = 1\\text{ mol}$ gas ideal berekspansi secara isotermal pada suhu tetap $T = 300\\text{ K}$ sehingga volumenya memuai dari $V_1 = 2\\text{ liter}$ menjadi $V_2 = 2e\\text{ liter}$ (dengan $e \\approx 2{,}718$ adalah bilangan Euler). Jika konstanta gas umum dinyatakan sebagai $R$, maka usaha ($W$) yang dilakukan oleh gas tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$300 R$",
      "$600 R$",
      "$150 R$",
      "$0\\text{ Joule}$",
      "$2{,}718 R$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Usaha pada Proses Isotermal:</strong><br>$$W = n R T \\ln\\left( \\frac{V_2}{V_1} \\right)$$</div>",
      "steps": "<ol><li>Rasio volume: $\\frac{V_2}{V_1} = \\frac{2e}{2} = e$.</li><li>Nilai logaritma natural: $\\ln(e) = 1$.</li><li>Hitung usaha: $W = (1) \\cdot R \\cdot (300) \\cdot \\ln(e) = 300 R \\times 1 = 300 R$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Karakteristik Logaritma Natural $\\ln$:</strong> $\\ln(e) = 1$ dan $\\ln(1) = 0$. Pada proses isotermal usaha dihitung dengan integrasi $\\int P dV = nRT \\ln(V_2/V_1)$.</div>"
    }
  },
  {
    "id": "drill2-ter-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-4",
    "category": "Koefisien Daya Guna Mesin Pendingin AC",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah mesin pengondisi udara (AC) mempertahankan suhu kamar tidur pada $T_2 = 20^\\circ\\text{C}$ ($293\\text{ K}$) dengan membuang panas ke lingkungan luar yang bersuhu $T_1 = 40^\\circ\\text{C}$ ($313\\text{ K}$). Jika mesin AC bekerja berdasarkan siklus pendingin Carnot, maka koefisien performansi ($C_P$) mesin tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$14{,}65$",
      "$7{,}32$",
      "$10{,}50$",
      "$1{,}50$",
      "$29{,}3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Koefisien Performansi Mesin Pendingin:</strong><br>$$C_P = \\frac{T_2}{T_1 - T_2}$$<br>dengan $T_2$ suhu ruang dingin dan $T_1$ suhu ruang panas dalam Kelvin.</div>",
      "steps": "<ol><li>Suhu kamar dingin: $T_2 = 20 + 273 = 293\\text{ K}$.</li><li>Suhu luar panas: $T_1 = 40 + 273 = 313\\text{ K}$.</li><li>Selisih suhu: $T_1 - T_2 = 313 - 293 = 20\\text{ K}$.</li><li>Koefisien performansi: $C_P = \\frac{293}{20} = 14{,}65$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Semakin Kecil Selisih Suhu, Semakin Tinggi $C_P$:</strong> Semakin kecil beda suhu ruangan dan lingkungan luar, AC bekerja jauh lebih efisien dan hemat daya listrik.</div>"
    }
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
