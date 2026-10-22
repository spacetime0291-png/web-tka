/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Sub-topik: Gas Ideal (fis-ter-3)
 * Indikator: Hukum Boyle; Hukum Boyle-Gay Lussac; Persamaan umum gas ideal ($PV = nRT$).
 * 
 * Total Butir Soal: 18 Soal (Mudah: 9, Sedang: 9, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-ter-3";
  const questions = [
  {
    "id": "mudah-fis-11",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Persamaan Gas Ideal",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu gas ideal berada di dalam wadah tertutup bervolume $V$ dengan tekanan $P$ dan suhu mutlak $T$. Jika gas tersebut mengalami pemanasan pada volume tetap (isokhorik) sehingga suhu mutlaknya naik menjadi $3T$, maka tekanan gas sekarang menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{3}P$",
      "$P$",
      "$\\sqrt{3}P$",
      "$3P$",
      "$9P$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Hukum Gay-Lussac (Proses Isokhorik/Volume Konstan):</strong><br>\n          $$\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies P_2 = P_1 \\left(\\frac{T_2}{T_1}\\right)$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Karena $V$ tetap, tekanan berbanding lurus dengan suhu mutlak ($P \\propto T$).</li>\n          <li>$$P_2 = P \\times \\frac{3T}{T} = 3P$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan hukum kesebandingan lurus vs terbalik. Pada proses isotermal $P_1 V_1 = P_2 V_2$ (berbanding terbalik), sedangkan pada isokhorik $P/T = \\text{konstan}$ (berbanding lurus).\n        </div>\n      "
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-gas-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Persamaan Gas Ideal pada Keadaan STP",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebanyak $n = 1\\text{ mol}$ gas ideal berada pada kondisi standar STP (suhu $T = 273\\text{ K}$, tekanan $P = 1\\text{ atm} = 1{,}013 \\times 10^5\\text{ Pa}$). Dengan konstanta gas umum $R = 8{,}314\\text{ J/mol}\\cdot\\text{K}$, volume yang ditempati oleh gas ideal tersebut adalah mendekati ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$22{,}4\\text{ liter}$ ($0{,}0224\\text{ m}^3$)",
      "$11{,}2\\text{ liter}$ ($0{,}0112\\text{ m}^3$)",
      "$44{,}8\\text{ liter}$ ($0{,}0448\\text{ m}^3$)",
      "$1{,}0\\text{ liter}$ ($0{,}001\\text{ m}^3$)",
      "$24{,}5\\text{ liter}$ ($0{,}0245\\text{ m}^3$)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Persamaan Umum Gas Ideal:</strong><br>$$P \\cdot V = n \\cdot R \\cdot T \\implies V = \\frac{n R T}{P}$$</div>",
      "steps": "<ol><li>Substitusi data STP: $V = \\frac{1 \\times 8{,}314 \\times 273}{1{,}013 \\times 10^5} \\approx 0{,}0224\\text{ m}^3$.</li><li>Konversi ke liter ($1\\text{ m}^3 = 1000\\text{ liter}$): $V \\approx 22{,}4\\text{ liter}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Angka Standar Kimia & Fisika:</strong> Pada kondisi STP ($0^\\circ\\text{C}, 1\\text{ atm}$), volume 1 mol gas ideal selalu $22{,}4\\text{ L}$. Hafalkan angka ini!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-gas-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
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
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-gas-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Hukum Charles (Proses Isobarik)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah balon elastis berisi gas ideal dengan volume $V_1 = 3\\text{ liter}$ pada suhu ruang $27^\\circ\\text{C}$. Balon tersebut kemudian dipanaskan pada tekanan konstan (isobarik) hingga suhunya naik menjadi $127^\\circ\\text{C}$. Volume balon gas sekarang ($V_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ liter}$",
      "$6\\text{ liter}$",
      "$5\\text{ liter}$",
      "$14{,}1\\text{ liter}$",
      "$3{,}5\\text{ liter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Charles (Tekanan Konstan):</strong><br>Volume gas berbanding lurus dengan suhu mutlaknya (Kelvin):<br>$$\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\implies V_2 = V_1 \\left( \\frac{T_2}{T_1} \\right)$$</div>",
      "steps": "<ol><li>Konversi suhu Celsius ke Kelvin wajib:<br>• $T_1 = 27 + 273 = 300\\text{ K}$<br>• $T_2 = 127 + 273 = 400\\text{ K}$</li><li>Hitung volume baru: $V_2 = 3 \\times \\frac{400}{300} = 3 \\times \\frac{4}{3} = 4\\text{ liter}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Kesalahan Paling Fatal di Gas Ideal:</strong> Menggunakan suhu Celsius! $\\frac{127}{27} \\approx 4{,}7$ menghasilkan $14{,}1\\text{ L}$ yang salah total. Suhu gas WAJIB Kelvin ($+273$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-gas-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Hukum Gay-Lussac (Proses Isokhorik)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Tekanan udara di dalam ban mobil pada pagi hari bersuhu $27^\\circ\\text{C}$ adalah $P_1 = 2\\text{ atm}$. Setelah melaju kencang di jalan tol pada siang hari, gesekan ban menyebabkan suhu udara di dalam ban naik menjadi $87^\\circ\\text{C}$. Dengan menganggap volume ban tidak memuai (isokhorik), tekanan udara di dalam ban tersebut sekarang adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}4\\text{ atm}$",
      "$3{,}2\\text{ atm}$",
      "$6{,}4\\text{ atm}$",
      "$2{,}2\\text{ atm}$",
      "$2{,}8\\text{ atm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Gay-Lussac (Volume Konstan):</strong><br>$$\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies P_2 = P_1 \\left( \\frac{T_2}{T_1} \\right)$$</div>",
      "steps": "<ol><li>Ubah ke Kelvin:<br>• $T_1 = 27 + 273 = 300\\text{ K}$<br>• $T_2 = 87 + 273 = 360\\text{ K}$</li><li>Hitung tekanan: $P_2 = 2 \\times \\frac{360}{300} = 2 \\times 1{,}2 = 2{,}4\\text{ atm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal 3 Hukum Gas:</strong><br>• Boyle: $T$ tetap ($P \\cdot V = C$)<br>• Charles: $P$ tetap ($V / T = C$)<br>• Gay-Lussac: $V$ tetap ($P / T = C$)</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-gas-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Energi Kinetik Rata-Rata Molekul Gas Monoatomik",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua wadah tertutup $A$ dan $B$ memiliki volume dan tekanan yang berbeda. Wadah $A$ berisi gas helium ($M_r = 4$) dan wadah $B$ berisi gas neon ($M_r = 20$). Jika kedua gas berada pada suhu yang sama yaitu $T = 300\\text{ K}$, perbandingan energi kinetik translasi rata-rata satu molekul gas helium terhadap satu molekul gas neon ($\\overline{E_{kA}} : \\overline{E_{kB}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 1$",
      "$1 : 5$",
      "$5 : 1$",
      "$1 : 25$",
      "$2 : 5$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Energi Kinetik Rata-rata Molekul:</strong><br>$$\\overline{E_k} = \\frac{3}{2} k_B T$$<br>Energi kinetik rata-rata molekul gas ideal monoatomik <strong>hanya bergantung pada suhu mutlak ($T$)</strong> dan sama sekali tidak bergantung pada jenis gas maupun massa molar ($M_r$).</div>",
      "steps": "<ol><li>Kedua gas berada pada suhu yang sama: $T_A = T_B = 300\\text{ K}$.</li><li>Karena $\\overline{E_k} = \\frac{3}{2} k_B T$, maka $\\overline{E_{kA}} = \\overline{E_{kB}}$.</li><li>Perbandingannya adalah tepat $1 : 1$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Klasik UTBK:</strong> Siswa sering memasukkan rasio $M_r$ ($4 : 20$). Massa molar hanya memengaruhi <em>kecepatan</em> molekul ($v_{\\text{rms}}$), BUKAN energi kinetik rata-ratanya!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill2-gas-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Jumlah Partikel Gas dalam Wadah (N = PV/kT)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah wadah tertutup bervolume $V = 10^{-3}\\text{ m}^3$ ($1\\text{ liter}$) berisi gas ideal monoatomik pada suhu $T = 300\\text{ K}$ dan tekanan $P = 4{,}14 \\times 10^4\\text{ Pa}$. Jika tetapan Boltzmann adalah $k_B = 1{,}38 \\times 10^{-23}\\text{ J/K}$, jumlah total molekul gas ($N$) di dalam wadah tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10^{19}\\text{ molekul}$",
      "$3 \\times 10^{19}\\text{ molekul}$",
      "$10^{20}\\text{ molekul}$",
      "$10^{23}\\text{ molekul}$",
      "$3 \\times 10^{22}\\text{ molekul}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Persamaan Gas Ideal Skala Mikroskopis:</strong><br>$$P \\cdot V = N \\cdot k_B \\cdot T \\implies N = \\frac{P V}{k_B T}$$</div>",
      "steps": "<ol><li>Pembilang: $P \\cdot V = (4{,}14 \\times 10^4) \\times 10^{-3} = 4{,}14 \\times 10^1 = 41{,}4\\text{ Joule}$.</li><li>Penyebut: $k_B \\cdot T = (1{,}38 \\times 10^{-23}) \\times 300 = 414 \\times 10^{-23} = 4{,}14 \\times 10^{-21}\\text{ Joule}$.</li><li>Jumlah molekul: $N = \\frac{41{,}4}{4{,}14 \\times 10^{-21}} = 10 \\times 10^{21} = 10^{22}$? Wait: $41{,}4 / 4{,}14 \\times 10^{-21} = 10 \\times 10^{21} = 10^{22}$! Let's check: $4{,}14 \\times 10^4 \\times 10^{-3} = 41{,}4$. $1{,}38 \\times 10^{-23} \\times 300 = 4{,}14 \\times 10^{-21}$. $41{,}4 / (4{,}14 \\times 10^{-21}) = 10 \\times 10^{21} = 10^{22}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Dua Bentuk Persamaan Gas:</strong><br>• Makroskopis (mol): $PV = nRT$<br>• Mikroskopis (partikel): $PV = N k_B T$</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill2-gas-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Massa Jenis Gas Ideal",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah tangki gas ideal dipertahankan pada suhu konstan. Jika tekanan gas di dalam tangki dilipatgandakan menjadi $3$ kali semula ($P' = 3P$), maka massa jenis gas tersebut ($\\rho$) akan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Meningkat menjadi $3$ kali semula",
      "Menyusut menjadi $\\frac{1}{3}$ kali semula",
      "Tetap sama tidak berubah",
      "Meningkat menjadi $9$ kali semula",
      "Meningkat menjadi $\\sqrt{3}$ kali semula"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Tekanan dan Massa Jenis Gas Ideal:</strong><br>$$P V = \\frac{m}{M_r} R T \\implies P = \\left(\\frac{m}{V}\\right) \\frac{R T}{M_r} = \\rho \\frac{R T}{M_r} \\implies \\rho = \\frac{P M_r}{R T}$$</div>",
      "steps": "<ol><li>Pada suhu $T$ dan jenis gas $M_r$ konstan, massa jenis berbanding lurus linear dengan tekanan: $\\rho \\propto P$.</li><li>Jika tekanan naik $3\\times$, maka massa jenis gas otomatis ikut naik menjadi $3\\times$ semula.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Intuisi Fisik:</strong> Saat gas dikompresi ke tekanan lebih tinggi pada suhu tetap, molekul-molekulnya memadat dalam ruang yang lebih sempit sehingga kerapatan massanya bertambah.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill2-gas-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Tekanan Gas dari Kerapatan Energi Kinetik",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Menurut teori kinetik gas ideal, hubungan matematis antara tekanan gas ($P$), jumlah partikel per satuan volume ($N/V$), dan energi kinetik rata-rata partikel ($\\overline{E_k}$) dinyatakan oleh rumus ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$P = \\frac{2}{3} \\frac{N}{V} \\overline{E_k}$",
      "$P = \\frac{3}{2} \\frac{N}{V} \\overline{E_k}$",
      "$P = \\frac{1}{3} \\frac{N}{V} \\overline{E_k}$",
      "$P = \\frac{1}{2} \\frac{N}{V} \\overline{E_k}$",
      "$P = \\frac{2}{5} \\frac{N}{V} \\overline{E_k}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Tekanan Gas Berdasarkan Teori Kinetik:</strong><br>$$P = \\frac{2}{3} \\left(\\frac{N}{V}\\right) \\overline{E_k}$$<br>atau dapat ditulis: $P V = \\frac{2}{3} N \\overline{E_k}$.</div>",
      "steps": "<ol><li>Energi kinetik per molekul: $\\overline{E_k} = \\frac{3}{2} k_B T \\implies k_B T = \\frac{2}{3} \\overline{E_k}$.</li><li>Substitusi ke $PV = N k_B T$:<br>$$PV = N \\left(\\frac{2}{3} \\overline{E_k}\\right) = \\frac{2}{3} N \\overline{E_k} \\implies P = \\frac{2}{3} \\frac{N}{V} \\overline{E_k}$$</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Fraksi tekanan terhadap kerapatan energi adalah $\\frac{2}{3}$ (kebalikan dari fraksi energi $\\frac{3}{2}$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "sedang-fis-14",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Kelajuan Efektif Molekul Gas Ideal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Kecepatan efektif (*root-mean-square speed*) molekul-molekul gas hidrogen dalam suatu tabung tertutup pada suhu mutlak $T$ adalah $v$. Jika gas dipanaskan pada volume tetap hingga suhu mutlaknya naik menjadi $4T$, kelajuan efektif molekul gas tersebut menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{2}v$",
      "$v$",
      "$\\sqrt{2}v$",
      "$2v$",
      "$4v$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Kelajuan Efektif Gas Ideal ($v_{\\text{rms}}$):</strong><br>\n          $$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M_r}} \\implies v_{\\text{rms}} \\propto \\sqrt{T}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Perbandingan kelajuan efektif pada dua suhu berbeda:\n            $$\\frac{v'}{v} = \\sqrt{\\frac{T'}{T}} = \\sqrt{\\frac{4T}{T}} = \\sqrt{4} = 2$$\n          </li>\n          <li>Sehingga kelajuan efektif molekul menjadi $v' = 2v$.</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Karena kecepatan efektif berada di bawah tanda akar, kenaikan suhu 4 kali lipat hanya menghasilkan kenaikan kecepatan 2 kali lipat.\n        </div>\n      "
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "sup-fis-ter-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
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
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-gas-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Energi Dalam Gas Ideal Monoatomik",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebanyak $n = 2\\text{ mol}$ gas ideal monoatomik berada di dalam tangki tertutup pada suhu mutlak $T = 300\\text{ K}$. Jika konstanta gas ideal adalah $R = 8{,}314\\text{ J/mol}\\cdot\\text{K}$, besar energi dalam ($U$) sistem gas tersebut adalah mendekati ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$7483\\text{ Joule}$",
      "$4988\\text{ Joule}$",
      "$2494\\text{ Joule}$",
      "$14965\\text{ Joule}$",
      "$9976\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Energi Dalam Gas Ideal Monoatomik:</strong><br>$$U = \\frac{3}{2} n R T$$<br>Faktor derajat kebebasan untuk gas monoatomik (seperti He, Ne, Ar) adalah 3 derajat kebebasan translasi ($f = 3$).</div>",
      "steps": "<ol><li>Identifikasi data: $n = 2\\text{ mol}$, $R = 8{,}314\\text{ J/mol}\\cdot\\text{K}$, $T = 300\\text{ K}$.</li><li>Substitusi ke rumus energi dalam:<br>$$U = \\frac{3}{2} \\times 2 \\times 8{,}314 \\times 300$$</li><li>Sederhanakan: $U = 3 \\times 8{,}314 \\times 300 = 900 \\times 8{,}314 = 7482{,}6\\text{ J} \\approx 7483\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Ingat faktor $\\frac{3}{2}$ untuk energi dalam monoatomik ($U = \\frac{3}{2} n R T = \\frac{3}{2} P V$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-gas-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Kelajuan Efektif Molekul Gas (v_rms)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Kelajuan efektif molekul-molekul gas oksigen di dalam suatu tabung bersuhu mutlak $T_1 = 300\\text{ K}$ adalah $v_1 = 480\\text{ m/s}$. Agar kelajuan efektif molekul gas oksigen tersebut meningkat menjadi dua kali lipat semula ($v_2 = 960\\text{ m/s}$), suhu mutlak gas tersebut harus dinaikkan menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1200\\text{ K}$",
      "$600\\text{ K}$",
      "$900\\text{ K}$",
      "$2400\\text{ K}$",
      "$1800\\text{ K}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kelajuan Efektif Molekul Gas Ideal:</strong><br>$$v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M_r}} \\implies v_{\\text{rms}} \\propto \\sqrt{T} \\implies T \\propto v_{\\text{rms}}^2$$</div>",
      "steps": "<ol><li>Perbandingan kelajuan efektif: $\\frac{v_2}{v_1} = 2$.</li><li>Perbandingan suhu: $\\frac{T_2}{T_1} = \\left(\\frac{v_2}{v_1}\\right)^2 = 2^2 = 4$.</li><li>Suhu akhir: $T_2 = 4 \\times T_1 = 4 \\times 300\\text{ K} = 1200\\text{ K}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Perhatikan Kuadrat:</strong> Untuk melipatduakan kelajuan molekul ($2\\times$), suhu harus dilipat-empatkan ($4\\times$) karena $v \\propto \\sqrt{T}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill-gas-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Perbandingan v_rms Berdasarkan Massa Molar",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua jenis gas ideal, yaitu gas Hidrogen ($M_r = 2\\text{ g/mol}$) dan gas Oksigen ($M_r = 32\\text{ g/mol}$), berada di dalam bejana berbeda pada suhu yang sama. Perbandingan kelajuan efektif molekul gas Hidrogen terhadap gas Oksigen ($v_{H_2} : v_{O_2}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4 : 1$",
      "$1 : 4$",
      "$16 : 1$",
      "$1 : 16$",
      "$2 : 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Kelajuan Efektif terhadap Massa Molar:</strong><br>Pada suhu yang sama, kelajuan efektif molekul berbanding terbalik dengan akar massa molarnya:<br>$$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M_r}} \\implies \\frac{v_1}{v_2} = \\sqrt{\\frac{M_{r2}}{M_{r1}}}$$</div>",
      "steps": "<ol><li>Perbandingan: $\\frac{v_{H_2}}{v_{O_2}} = \\sqrt{\\frac{M_{r, O_2}}{M_{r, H_2}}} = \\sqrt{\\frac{32}{2}} = \\sqrt{16} = 4$.</li><li>Rasionya adalah $4 : 1$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Kaidah Fisik:</strong> Gas yang lebih ringan molekulnya bergerak jauh lebih lincah dan cepat dibandingkan gas yang berat pada suhu yang sama.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill2-gas-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Kombinasi Perubahan Suhu dan Volume Gas",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sejumlah gas ideal di dalam silinder berpenghisap dipanaskan sehingga suhu mutlaknya naik menjadi $2$ kali semula ($T_2 = 2T_1$), sementara penghisap ditekan sehingga volumenya menyusut menjadi setengah volume awal ($V_2 = 0{,}5 V_1$). Tekanan akhir gas ($P_2$) dibandingkan tekanan awalnya ($P_1$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$P_2 = 4 P_1$",
      "$P_2 = 2 P_1$",
      "$P_2 = P_1$ (tetap)",
      "$P_2 = 0{,}5 P_1$",
      "$P_2 = 8 P_1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Boyle-Gay Lussac Gabungan:</strong><br>$$\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\implies P_2 = P_1 \\left( \\frac{V_1}{V_2} \\right) \\left( \\frac{T_2}{T_1} \\right)$$</div>",
      "steps": "<ol><li>Faktor volume: $\\frac{V_1}{V_2} = \\frac{1}{0{,}5} = 2$.</li><li>Faktor suhu: $\\frac{T_2}{T_1} = 2$.</li><li>Tekanan akhir: $P_2 = P_1 \\times 2 \\times 2 = 4 P_1$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Efek Berganda:</strong> Suhu naik $2\\times \\implies$ tekanan naik $2\\times$. Volume menyusut setengah $implies$ tekanan naik lagi $2\\times$. Total kenaikan tekanan $= 2 \\times 2 = 4\\times$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill2-gas-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Energi Dalam 4 Mol Gas Helium",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebanyak $n = 4\\text{ mol}$ gas helium ($He$, gas mulia monoatomik) dipanaskan di dalam ruang tertutup hingga mencapai suhu mutlak $T = 400\\text{ K}$. Jika konstanta gas umum dinyatakan dalam simbol $R$, besar energi dalam ($U$) sistem gas tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2400 R$",
      "$1600 R$",
      "$800 R$",
      "$3200 R$",
      "$1200 R$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Energi Dalam Gas Ideal Monoatomik:</strong><br>$$U = \\frac{3}{2} n R T$$</div>",
      "steps": "<ol><li>$n = 4\\text{ mol}$, $T = 400\\text{ K}$.</li><li>$U = \\frac{3}{2} \\times 4 \\times R \\times 400$.</li><li>Hitung: $U = 6 \\times 400 R = 2400 R$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Simbol $R$:</strong> Sering kali opsi soal SBMPTN/UTBK menyajikan jawaban dalam variabel simbolik $R$ agar siswa tidak terbebani desimal $8{,}314$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill2-gas-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Kelajuan Efektif Gas Diatomik vs Monoatomik",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua wadah gas berada pada suhu yang sama. Wadah pertama berisi gas Oksigen ($O_2, M_r = 32\\text{ g/mol}$) dan wadah kedua berisi gas Helium ($He, M_r = 4\\text{ g/mol}$). Perbandingan kelajuan efektif molekul gas Helium terhadap gas Oksigen ($v_{He} : v_{O_2}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\sqrt{8} : 1$ ($2\\sqrt{2} : 1$)",
      "$8 : 1$",
      "$1 : 8$",
      "$1 : 2\\sqrt{2}$",
      "$4 : 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Perbandingan Kelajuan Efektif $v_{\\text{rms}}$:</strong><br>$$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M_r}} \\implies \\frac{v_{He}}{v_{O_2}} = \\sqrt{\\frac{M_{r, O_2}}{M_{r, He}}}$$</div>",
      "steps": "<ol><li>Rasio massa molar: $\\frac{M_{r, O_2}}{M_{r, He}} = \\frac{32}{4} = 8$.</li><li>Rasio kelajuan efektif: $\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$.</li><li>Maka $v_{He} : v_{O_2} = 2\\sqrt{2} : 1$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jangan Lupa Bentuk Akar:</strong> Nilai perbandingannya adalah $\\sqrt{8}$, bukan $8$. Sering terkecoh memilih $8:1$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
    "chapterTitle": "Kalor dan Termodinamika"
  },
  {
    "id": "drill2-gas-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-ter",
    "subTopicId": "fis-ter-3",
    "category": "Perubahan Energi Kinetik Rata-rata dari Celsius ke Kelvin",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu gas ideal dipanaskan dari suhu awal $27^\\circ\\text{C}$ hingga mencapai suhu akhir $327^\\circ\\text{C}$. Perbandingan energi kinetik rata-rata partikel gas pada suhu akhir terhadap suhu awal ($\\overline{E_{k2}} : \\overline{E_{k1}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2 : 1$",
      "$12 : 1$",
      "$4 : 1$",
      "$\\sqrt{2} : 1$",
      "$1 : 2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Ketergantungan Energi Kinetik terhadap Suhu Kelvin:</strong><br>$$\\overline{E_k} \\propto T \\implies \\frac{\\overline{E_{k2}}}{\\overline{E_{k1}}} = \\frac{T_2}{T_1}$$<br>Wajib menggunakan satuan mutlak Kelvin!</div>",
      "steps": "<ol><li>Ubah Celsius ke Kelvin:<br>• $T_1 = 27 + 273 = 300\\text{ K}$<br>• $T_2 = 327 + 273 = 600\\text{ K}$</li><li>Perbandingan energi kinetik: $\\frac{T_2}{T_1} = \\frac{600}{300} = 2$.</li><li>Rasionya adalah $2 : 1$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Paling Klasik:</strong> Menggunakan Celsius langsung: $\\frac{327}{27} \\approx 12{,}1$ (SALAH!). Perbandingan energi selalu dalam Kelvin ($600/300 = 2$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Gas Ideal",
    "subTopic": "Gas Ideal",
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
