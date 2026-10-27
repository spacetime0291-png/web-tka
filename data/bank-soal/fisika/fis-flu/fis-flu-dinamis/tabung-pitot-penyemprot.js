/**
 * Bank Soal TKA: Fisika (TKA) - Fluida
 * Bab Kecil: Fluida Dinamis (fis-flu-dinamis)
 * Sub-Bab: Tabung Pitot & Penyemprot (fis-flu-dinamis-pitot)
 * Slug: tabung-pitot-penyemprot
 * Indikator: Penerapan Bernoulli pada venturimeter, tabung pitot pengukur kecepatan aliran, dan penyemprot.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-flu-dinamis-pitot";
  const subTopicSlug = "tabung-pitot-penyemprot";
  const questions = [
  {
    "id": "fis-flu-dinamis-pitot-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-pitot",
    "category": "Tabung Pitot & Penyemprot",
    "difficulty": "mudah",
    "statement": "Tabung Pitot adalah instrumen fluida yang umumnya dipasang pada bodi pesawat terbang atau pipa transmisi gas. Fungsi utama dan prinsip kerja instrumen ini adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Mengukur kelajuan aliran fluida gas berdasarkan selisih tekanan statis dan tekanan stagnasi",
      "Mengukur kekentalan (viskositas) fluida cair berdasarkan laju gesekan internal",
      "Mengukur tekanan mutlak atmosfer bumi berdasarkan penyusutan volume gas terperangkap",
      "Mengukur percepatan gravitasi bumi berdasarkan getaran kolom cairan manometer",
      "Mengatur debit aliran fluida agar bernilai tetap secara otomatis tanpa pompa"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Tabung Pitot bekerja dengan membandingkan dua jenis tekanan pada aliran fluida:<br>1) Tekanan statis ($P_{\\text{statis}}$) pada dinding saluran fluida.<br>2) Tekanan stagnasi/total ($P_{\\text{stagnasi}}$) di ujung depan tabung tempat fluida membentur dan berhenti ($v = 0$).<br>Berdasarkan Persamaan Bernoulli:<br>$$P_{\\text{stagnasi}} - P_{\\text{statis}} = \\frac{1}{2}\\rho v^2$$Selisih tekanan ini dibaca melalui perbedaan tinggi cairan manometer.",
      "steps": "1. Tinjau fungsi alat: Tabung Pitot dirancang khusus untuk mengukur kelajuan fluida (seperti udara relatif terhadap pesawat atau laju gas di pipa).<br>2. Prinsip kerjanya bersandar pada konversi energi kinetik fluida menjadi tekanan stagnasi.<br>3. Jawaban yang paling tepat adalah opsi A.",
      "pitfalls": "Siswa terkadang menyamakan tabung Pitot dengan barometer (pengukur tekanan atmosfer) atau viskometer (pengukur viskositas)."
    },
    "subTopicSlug": "tabung-pitot-penyemprot",
    "bab": "Fluida",
    "subBab": "Tabung Pitot & Penyemprot",
    "subTopic": "Tabung Pitot & Penyemprot",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Tabung Pitot bekerja dengan membandingkan dua jenis tekanan pada aliran fluida: 1) Tekanan statis ($P_{\\text{statis}}$) pada dinding saluran fluida. 2) Tekanan stagnasi/total ($P_{\\text{stagnasi}}$) di ujung depan tabung tempat fluida membentur dan berhenti ($v = 0$). Berdasarkan Persamaan Bernoulli: $$P_{\\text{stagnasi}} - P_{\\text{statis}} = \\frac{1}{2}\\rho v^2$$Selisih tekanan ini dibaca melalui perbedaan tinggi cairan manometer. **Tips:** Siswa terkadang menyamakan tabung Pitot dengan barometer (pengukur tekanan atmosfer) atau viskometer (pengukur viskositas)."
  },
  {
    "id": "fis-flu-dinamis-pitot-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-pitot",
    "category": "Tabung Pitot & Penyemprot",
    "difficulty": "mudah",
    "statement": "Sebuah tabung Pitot digunakan untuk mengukur laju aliran gas yang memiliki massa jenis $\\rho = 1{,}20\\text{ kg/m}^3$. Tabung manometer pada alat tersebut berisi cairan pengukur dengan massa jenis $\\rho' = 960\\text{ kg/m}^3$. Saat pengukuran berlangsung, teramati selisih ketinggian cairan pada manometer sebesar $h = 2{,}5\\text{ cm}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan aliran gas tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$40\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Kelajuan aliran fluida gas pada tabung Pitot yang dihubungkan dengan manometer zat cair dirumuskan dengan:<br>$$v = \\sqrt{\\frac{2 \\cdot \\rho' \\cdot g \\cdot h}{\\rho}}$$<br>Di mana $\\rho'$ adalah massa jenis cairan manometer dan $\\rho$ adalah massa jenis gas yang mengalir.",
      "steps": "1. Konversikan selisih ketinggian ke meter:<br>$$h = 2{,}5\\text{ cm} = 0{,}025\\text{ m}$$<br>2. Substitusikan besaran yang diketahui:<br>• $\\rho' = 960\\text{ kg/m}^3$<br>• $\\rho = 1{,}20\\text{ kg/m}^3$<br>• $g = 10\\text{ m/s}^2$<br>3. Hitung kelajuan gas ($v$):<br>$$v = \\sqrt{\\frac{2 \\times 960 \\times 10 \\times 0{,}025}{1{,}20}} = \\sqrt{\\frac{480}{1{,}20}} = \\sqrt{400} = 20\\text{ m/s}$$",
      "pitfalls": "Terkecoh membalik massa jenis gas ($\\rho$) dan cairan manometer ($\\rho'$), atau lupa mengonversi centimeter ke meter."
    },
    "subTopicSlug": "tabung-pitot-penyemprot",
    "bab": "Fluida",
    "subBab": "Tabung Pitot & Penyemprot",
    "subTopic": "Tabung Pitot & Penyemprot",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Kelajuan aliran fluida gas pada tabung Pitot yang dihubungkan dengan manometer zat cair dirumuskan dengan: $$v = \\sqrt{\\frac{2 \\cdot \\rho' \\cdot g \\cdot h}{\\rho}}$$ Di mana $\\rho'$ adalah massa jenis cairan manometer dan $\\rho$ adalah massa jenis gas yang mengalir. **Tips:** Terkecoh membalik massa jenis gas ($\\rho$) dan cairan manometer ($\\rho'$), atau lupa mengonversi centimeter ke meter."
  },
  {
    "id": "fis-flu-dinamis-pitot-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-pitot",
    "category": "Tabung Pitot & Penyemprot",
    "difficulty": "mudah",
    "statement": "Pada alat penyemprot obat nyamuk atau botol parfum konvensional, cairan di dalam tabung bawah dapat terhisap naik ke atas dan menyembur keluar sebagai partikel kabut halus. Alasan fisis yang mendasari terhisapnya cairan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Kelajuan udara tinggi di atas ujung pipa vertikal menurunkan tekanan udara setempat sehingga tekanan atmosfer di wadah mendesak cairan naik",
      "Udara yang ditiupkan menaikkan massa jenis cairan di dasar wadah sehingga cairan memuai ke atas",
      "Pipa vertikal mengalami gaya kapilaritas ekstrem akibat kenaikan suhu udara pompa",
      "Gaya gravitasi di dalam wadah cairan dinetralkan oleh tekanan fluida dinamis",
      "Volume cairan di dalam wadah mengecil secara mendadak akibat tekanan hidrostatis"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Prinsip kerja alat penyemprot berlandaskan Efek Bernoulli:<br>1) Saat pompa ditekan, udara dipaksa mengalir dengan kelajuan sangat tinggi ($v$ besar) melewati ujung atas pipa sedot sempit vertikal.<br>2) Berdasarkan Persamaan Bernoulli, kelajuan yang tinggi menyebabkan tekanan statis udara di ujung atas pipa menurun ($P_{\\text{atas}} < P_{\\text{atm}}$).<br>3) Tekanan atmosfer yang menekan permukaan cairan di wadah bawah ($P_{\\text{atm}}$) mendorong cairan naik melewati pipa hingga disemburkan dan dipecah oleh tiupan udara kencang menjadi kabut halus.",
      "steps": "1. Identifikasi penerapan: Botol semprot/parfum adalah aplikasi klasik dari Persamaan Bernoulli.<br>2. Udara laju tinggi $\\implies$ tekanan lokal turun $\\implies$ cairan terhisap ke atas karena beda tekanan.<br>3. Opsi A secara tepat menjelaskan fenomena fisis tersebut.",
      "pitfalls": "Siswa sering menduga cairan terhisap karena hisapan vakum atau pemanasan udara, padahal semata-mata karena perbedaan tekanan statis menurut Bernoulli."
    },
    "subTopicSlug": "tabung-pitot-penyemprot",
    "bab": "Fluida",
    "subBab": "Tabung Pitot & Penyemprot",
    "subTopic": "Tabung Pitot & Penyemprot",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Prinsip kerja alat penyemprot berlandaskan Efek Bernoulli: 1) Saat pompa ditekan, udara dipaksa mengalir dengan kelajuan sangat tinggi ($v$ besar) melewati ujung atas pipa sedot sempit vertikal. 2) Berdasarkan Persamaan Bernoulli, kelajuan yang tinggi menyebabkan tekanan statis udara di ujung atas pipa menurun ($P_{\\text{atas}} < P_{\\text{atm}}$). 3) Tekanan atmosfer yang menekan permukaan cairan di wadah bawah ($P_{\\text{atm}}$) mendorong cairan naik melewati pipa hingga disemburkan dan dipecah oleh tiupan udara kencang menjadi kabut halus."
  },
  {
    "id": "fis-flu-dinamis-pitot-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-pitot",
    "category": "Tabung Pitot & Penyemprot",
    "difficulty": "mudah",
    "statement": "Sebuah venturimeter dilengkapi manometer air raksa (massa jenis $\\rho_r = 13.600\\text{ kg/m}^3$) untuk mengukur aliran air (massa jenis $\\rho_a = 1000\\text{ kg/m}^3$). Persamaan yang menghubungkan beda tinggi raksa pada manometer ($h$) dengan kelajuan air pada pipa utama ($v_1$) dan pipa leher ($v_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(\\rho_r - \\rho_a) \\cdot g \\cdot h = \\frac{1}{2} \\rho_a (v_2^2 - v_1^2)$",
      "$\\rho_r \\cdot g \\cdot h = \\frac{1}{2} \\rho_a (v_1^2 + v_2^2)$",
      "$(\\rho_r + \\rho_a) \\cdot g \\cdot h = \\rho_a (v_2^2 - v_1^2)$",
      "$\\rho_a \\cdot g \\cdot h = \\frac{1}{2} \\rho_r (v_2^2 - v_1^2)$",
      "$(\\rho_r - \\rho_a) \\cdot g \\cdot h = \\frac{1}{2} \\rho_r (v_1^2 - v_2^2)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada venturimeter dengan manometer zat cair pengukur:<br>1) Dari kesetimbangan manometer hidrostatika: $\\Delta P = P_1 - P_2 = (\\rho' - \\rho) g h$<br>2) Dari persamaan Bernoulli horisontal: $P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2)$<br>Menyamakan kedua ruas menghasilkan:<br>$$(\\rho_r - \\rho_a) \\cdot g \\cdot h = \\frac{1}{2}\\rho_a (v_2^2 - v_1^2)$$",
      "steps": "1. Turunkan selisih tekanan manometer: $\\Delta P = (\\rho_r - \\rho_a) g h$.<br>2. Turunkan selisih tekanan Bernoulli: $\\Delta P = \\frac{1}{2}\\rho_a (v_2^2 - v_1^2)$.<br>3. Samakan kedua hubungan tersebut sehingga menghasilkan kesetaraan pada opsi A.",
      "pitfalls": "Siswa sering lupa mengurangkan massa jenis cairan pengalir $\\rho_a$ dari cairan manometer $\\rho_r$, atau keliru menempatkan massa jenis pada suku energi kinetik."
    },
    "subTopicSlug": "tabung-pitot-penyemprot",
    "bab": "Fluida",
    "subBab": "Tabung Pitot & Penyemprot",
    "subTopic": "Tabung Pitot & Penyemprot",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Pada venturimeter dengan manometer zat cair pengukur: 1) Dari kesetimbangan manometer hidrostatika: $\\Delta P = P_1 - P_2 = (\\rho' - \\rho) g h$ 2) Dari persamaan Bernoulli horisontal: $P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2)$ Menyamakan kedua ruas menghasilkan: $$(\\rho_r - \\rho_a) \\cdot g \\cdot h = \\frac{1}{2}\\rho_a (v_2^2 - v_1^2)$$."
  },
  {
    "id": "fis-flu-dinamis-pitot-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-pitot",
    "category": "Tabung Pitot & Penyemprot",
    "difficulty": "mudah",
    "statement": "Pada leher venturi sebuah karburator mesin, udara mengalir cepat sehingga menghasilkan penurunan tekanan statis sebesar $\\Delta P = 250\\text{ Pa}$ untuk menghisap bahan bakar cair. Jika massa jenis udara luar adalah $\\rho_{\\text{udara}} = 1{,}25\\text{ kg/m}^3$ dan kelajuan udara sebelum masuk venturi dianggap mendekati nol, kelajuan aliran udara di leher venturi karburator tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$40\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Berdasarkan prinsip Bernoulli pada karburator, penurunan tekanan statis sebanding dengan penambahan tekanan dinamis aliran udara:<br>$$\\Delta P = \\frac{1}{2}\\rho_{\\text{udara}} \\cdot v^2 \\implies v = \\sqrt{\\frac{2 \\cdot \\Delta P}{\\rho_{\\text{udara}}}}$$",
      "steps": "1. Masukkan data yang diketahui:<br>• $\\Delta P = 250\\text{ Pa}$<br>• $\\rho_{\\text{udara}} = 1{,}25\\text{ kg/m}^3$<br>2. Hitung kelajuan udara di leher venturi:<br>$$v = \\sqrt{\\frac{2 \\times 250\\text{ Pa}}{1{,}25\\text{ kg/m}^3}} = \\sqrt{\\frac{500}{1{,}25}} = \\sqrt{400} = 20\\text{ m/s}$$",
      "pitfalls": "Lupa mengalikan faktor 2 dari $\\frac{1}{2}\\rho v^2$ sebelum menarik akar sehingga memperoleh kelajuan yang keliru $\\sqrt{200} \\approx 14{,}1\\text{ m/s}$."
    },
    "subTopicSlug": "tabung-pitot-penyemprot",
    "bab": "Fluida",
    "subBab": "Tabung Pitot & Penyemprot",
    "subTopic": "Tabung Pitot & Penyemprot",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Berdasarkan prinsip Bernoulli pada karburator, penurunan tekanan statis sebanding dengan penambahan tekanan dinamis aliran udara: $$\\Delta P = \\frac{1}{2}\\rho_{\\text{udara}} \\cdot v^2 \\implies v = \\sqrt{\\frac{2 \\cdot \\Delta P}{\\rho_{\\text{udara}}}}$$."
  },
  {
    "id": "fis-flu-dinamis-pitot-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-pitot",
    "category": "Tabung Pitot & Penyemprot",
    "difficulty": "sedang",
    "statement": "Sebuah pesawat terbang bergerak mendatar pada ketinggian jelajah tertentu di mana massa jenis udara di sekitarnya adalah $\\rho_{\\text{udara}} = 0{,}80\\text{ kg/m}^3$. Tabung Pitot yang terpasang pada bagian moncong pesawat mendeteksi selisih antara tekanan stagnasi dan tekanan statis udara sebesar $\\Delta P = 4000\\text{ Pa}$. Kelajuan pesawat terbang tersebut relatif terhadap massa udara di sekitarnya (true airspeed) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\text{ m/s}$ ($180\\text{ km/jam}$)",
      "$75\\text{ m/s}$ ($270\\text{ km/jam}$)",
      "$100\\text{ m/s}$ ($360\\text{ km/jam}$)",
      "$125\\text{ m/s}$ ($450\\text{ km/jam}$)",
      "$150\\text{ m/s}$ ($540\\text{ km/jam}$)"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada tabung Pitot pesawat terbang, selisih tekanan antara lubang stagnasi (titik henti aliran udara di ujung moncong) dan lubang statis (pada sisi tabung) setara dengan tekanan dinamis aliran udara:<br>$$\\Delta P = P_{\\text{stagnasi}} - P_{\\text{statis}} = \\frac{1}{2}\\rho_{\\text{udara}} \\cdot v^2 \\implies v = \\sqrt{\\frac{2 \\cdot \\Delta P}{\\rho_{\\text{udara}}}}$$",
      "steps": "1. Identifikasi besaran:<br>• $\\Delta P = 4000\\text{ Pa}$<br>• $\\rho_{\\text{udara}} = 0{,}80\\text{ kg/m}^3$<br>2. Hitung kelajuan pesawat:<br>$$v = \\sqrt{\\frac{2 \\times 4000\\text{ Pa}}{0{,}80\\text{ kg/m}^3}} = \\sqrt{\\frac{8000}{0{,}80}} = \\sqrt{10.000} = 100\\text{ m/s}$$<br>3. Konversikan ke km/jam:<br>$$v = 100 \\times 3{,}6 = 360\\text{ km/jam}$$",
      "pitfalls": "Siswa sering lupa mengalikan dengan faktor 2 sehingga menghitung $\\sqrt{4000 / 0{,}8} = \\sqrt{5000} \\approx 70{,}7\\text{ m/s}$, atau salah mengalikan konversi satuan kecepatan."
    },
    "subTopicSlug": "tabung-pitot-penyemprot",
    "bab": "Fluida",
    "subBab": "Tabung Pitot & Penyemprot",
    "subTopic": "Tabung Pitot & Penyemprot",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Pada tabung Pitot pesawat terbang, selisih tekanan antara lubang stagnasi (titik henti aliran udara di ujung moncong) dan lubang statis (pada sisi tabung) setara dengan tekanan dinamis aliran udara: $$\\Delta P = P_{\\text{stagnasi}} - P_{\\text{statis}} = \\frac{1}{2}\\rho_{\\text{udara}} \\cdot v^2 \\implies v = \\sqrt{\\frac{2 \\cdot \\Delta P}{\\rho_{\\text{udara}}}}$$."
  },
  {
    "id": "fis-flu-dinamis-pitot-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-pitot",
    "category": "Tabung Pitot & Penyemprot",
    "difficulty": "sedang",
    "statement": "Sebuah venturimeter horizontal digunakan untuk mengukur aliran air (massa jenis $\\rho = 1000\\text{ kg/m}^3$). Luas penampang pipa masuk adalah $A_1 = 20\\text{ cm}^2$ dan luas penampang pipa leher adalah $A_2 = 10\\text{ cm}^2$. Manometer pipa U yang terpasang pada venturimeter berisi zat cair pengukur dengan massa jenis $\\rho' = 4000\\text{ kg/m}^3$. Jika selisih ketinggian cairan pada manometer terukur $h = 20\\text{ cm}$ dan percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan air pada pipa masuk ($v_1$) dan debit aliran airnya ($Q$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}0\\text{ m/s}$ dan $2{,}0\\text{ liter/s}$",
      "$2{,}0\\text{ m/s}$ dan $4{,}0\\text{ liter/s}$",
      "$2{,}0\\text{ m/s}$ dan $8{,}0\\text{ liter/s}$",
      "$4{,}0\\text{ m/s}$ dan $4{,}0\\text{ liter/s}$",
      "$4{,}0\\text{ m/s}$ dan $8{,}0\\text{ liter/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada venturimeter dengan manometer zat cair terpisah:<br>1) Kesetimbangan manometer: $\\Delta P = (\\rho' - \\rho) g h$<br>2) Persamaan Bernoulli dan Kontinuitas menghasilkan:<br>$$v_1 = \\sqrt{\\frac{2(\\rho' - \\rho)gh}{\\rho \\left[\\left(\\frac{A_1}{A_2}\\right)^2 - 1\\right]}}$$<br>3) Debit aliran: $Q = A_1 \\cdot v_1$.",
      "steps": "1. Konversikan selisih tinggi: $h = 20\\text{ cm} = 0{,}2\\text{ m}$<br>2. Hitung selisih tekanan hidrostatika:<br>$$\\Delta P = (4000 - 1000) \\times 10 \\times 0{,}2 = 3000 \\times 2 = 6000\\text{ Pa}$$<br>3. Tentukan rasio penampang: $\\left(\\frac{A_1}{A_2}\\right)^2 - 1 = 2^2 - 1 = 3$<br>4. Hitung kelajuan $v_1$:<br>$$v_1 = \\sqrt{\\frac{2 \\times 6000}{1000 \\times 3}} = \\sqrt{\\frac{12.000}{3.000}} = \\sqrt{4} = 2{,}0\\text{ m/s}$$<br>5. Hitung debit alirannya:<br>$$Q = A_1 \\cdot v_1 = (20 \\times 10^{-4}\\text{ m}^2) \\times 2{,}0\\text{ m/s} = 4 \\times 10^{-3}\\text{ m}^3\\text{/s} = 4{,}0\\text{ liter/s}$$",
      "pitfalls": "Lupa mengurangkan massa jenis air dari cairan manometer ($(\\rho' - \\rho)$), atau tertukar menggunakan luas leher saat mencari debit aliran total pipa."
    },
    "subTopicSlug": "tabung-pitot-penyemprot",
    "bab": "Fluida",
    "subBab": "Tabung Pitot & Penyemprot",
    "subTopic": "Tabung Pitot & Penyemprot",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Pada venturimeter dengan manometer zat cair terpisah: 1) Kesetimbangan manometer: $\\Delta P = (\\rho' - \\rho) g h$ 2) Persamaan Bernoulli dan Kontinuitas menghasilkan: $$v_1 = \\sqrt{\\frac{2(\\rho' - \\rho)gh}{\\rho \\left[\\left(\\frac{A_1}{A_2}\\right)^2 - 1\\right]}}$$ 3) Debit aliran: $Q = A_1 \\cdot v_1$."
  },
  {
    "id": "fis-flu-dinamis-pitot-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-pitot",
    "category": "Tabung Pitot & Penyemprot",
    "difficulty": "sedang",
    "statement": "Sebuah tabung semprotan aerosol memiliki pipa hisap vertikal dengan ketinggian $H = 10\\text{ cm}$ yang tercelup ke dalam cairan obat cair (massa jenis cairan $\\rho_c = 1000\\text{ kg/m}^3$). Di atas ujung pipa kapiler tersebut ditiupkan udara dengan massa jenis $\\rho_{\\text{udara}} = 1{,}25\\text{ kg/m}^3$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan tiupan udara minimal yang harus dihasilkan pompa semprot agar cairan tepat dapat naik mencapai bibir atas pipa adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20\\text{ m/s}$",
      "$30\\text{ m/s}$",
      "$40\\text{ m/s}$",
      "$50\\text{ m/s}$",
      "$60\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Agar cairan terangkat naik setinggi $H$, penurunan tekanan statis akibat tiupan udara menurut Efek Bernoulli harus minimal mengimbangi tekanan hidrostatis kolom cairan setinggi $H$:<br>$$\\Delta P_{\\text{Bernoulli}} = P_{\\text{hidrostatis}} \\iff \\frac{1}{2}\\rho_{\\text{udara}} \\cdot v^2 = \\rho_c \\cdot g \\cdot H$$Sehingga kelajuan minimal udara dirumuskan:<br>$$v = \\sqrt{\\frac{2 \\cdot \\rho_c \\cdot g \\cdot H}{\\rho_{\\text{udara}}}}$$",
      "steps": "1. Konversikan tinggi kolom cairan: $H = 10\\text{ cm} = 0{,}1\\text{ m}$<br>2. Hitung tekanan hidrostatis kolom cairan:<br>$$P_h = \\rho_c \\cdot g \\cdot H = 1000\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 0{,}1\\text{ m} = 1000\\text{ Pa}$$<br>3. Samakan dengan penurunan tekanan Bernoulli dan hitung $v$:<br>$$\\frac{1}{2} \\times 1{,}25 \\times v^2 = 1000 \\implies v^2 = \\frac{2000}{1{,}25} = 1600$$<br>$$v = \\sqrt{1600} = 40\\text{ m/s}$$",
      "pitfalls": "Terkecoh menggunakan massa jenis cairan pada penyebut rumus laju udara, padahal fluida yang ditiupkan di atas mulut pipa adalah udara ($\\rho_{\\text{udara}}$)."
    },
    "subTopicSlug": "tabung-pitot-penyemprot",
    "bab": "Fluida",
    "subBab": "Tabung Pitot & Penyemprot",
    "subTopic": "Tabung Pitot & Penyemprot",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Agar cairan terangkat naik setinggi $H$, penurunan tekanan statis akibat tiupan udara menurut Efek Bernoulli harus minimal mengimbangi tekanan hidrostatis kolom cairan setinggi $H$: $$\\Delta P_{\\text{Bernoulli}} = P_{\\text{hidrostatis}} \\iff \\frac{1}{2}\\rho_{\\text{udara}} \\cdot v^2 = \\rho_c \\cdot g \\cdot H$$Sehingga kelajuan minimal udara dirumuskan: $$v = \\sqrt{\\frac{2 \\cdot \\rho_c \\cdot g \\cdot H}{\\rho_{\\text{udara}}}}$$."
  },
  {
    "id": "fis-flu-dinamis-pitot-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-pitot",
    "category": "Tabung Pitot & Penyemprot",
    "difficulty": "sedang",
    "statement": "Sebuah tabung Pitot dipasang pada saluran cerobong pembuangan gas pabrik untuk memantau laju emisi gas buang (massa jenis gas $\\rho_{\\text{gas}} = 1{,}50\\text{ kg/m}^3$). Manometer yang terhubung ke tabung Pitot berisi air tawar (massa jenis $\\rho_{\\text{air}} = 1000\\text{ kg/m}^3$) dan menunjukkan selisih ketinggian kolom air sebesar $h = 3{,}0\\text{ cm}$. Jika luas penampang cerobong asap tersebut adalah $A = 0{,}40\\text{ m}^2$ dan $g = 10\\text{ m/s}^2$, debit volume emisi gas buang yang dilepaskan cerobong adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4{,}0\\text{ m}^3\\text{/s}$",
      "$6{,}0\\text{ m}^3\\text{/s}$",
      "$8{,}0\\text{ m}^3\\text{/s}$",
      "$10{,}0\\text{ m}^3\\text{/s}$",
      "$12{,}0\\text{ m}^3\\text{/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "1) Kelajuan gas buang di dalam cerobong dihitung dari tabung Pitot:<br>$$v = \\sqrt{\\frac{2 \\cdot \\rho_{\\text{air}} \\cdot g \\cdot h}{\\rho_{\\text{gas}}}}$$<br>2) Debit volume aliran emisi gas cerobong:<br>$$Q = A \\cdot v$$",
      "steps": "1. Konversikan selisih tinggi kolom air: $h = 3{,}0\\text{ cm} = 0{,}03\\text{ m}$<br>2. Hitung kelajuan aliran gas cerobong:<br>$$v = \\sqrt{\\frac{2 \\times 1000 \\times 10 \\times 0{,}03}{1{,}50}} = \\sqrt{\\frac{600}{1{,}50}} = \\sqrt{400} = 20\\text{ m/s}$$<br>3. Hitung debit volume aliran emisi gas:<br>$$Q = A \\cdot v = 0{,}40\\text{ m}^2 \\times 20\\text{ m/s} = 8{,}0\\text{ m}^3\\text{/s}$$",
      "pitfalls": "Siswa sering berhenti setelah menghitung kelajuan gas ($20\\text{ m/s}$) dan lupa mengalikan dengan luas penampang cerobong untuk mendapatkan debit volume emisi."
    },
    "subTopicSlug": "tabung-pitot-penyemprot",
    "bab": "Fluida",
    "subBab": "Tabung Pitot & Penyemprot",
    "subTopic": "Tabung Pitot & Penyemprot",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "1) Kelajuan gas buang di dalam cerobong dihitung dari tabung Pitot: $$v = \\sqrt{\\frac{2 \\cdot \\rho_{\\text{air}} \\cdot g \\cdot h}{\\rho_{\\text{gas}}}}$$ 2) Debit volume aliran emisi gas cerobong: $$Q = A \\cdot v$$."
  },
  {
    "id": "fis-flu-dinamis-pitot-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-pitot",
    "category": "Tabung Pitot & Penyemprot",
    "difficulty": "sedang",
    "statement": "Sebuah alat penyemprot cat (paint spray gun) beroperasi dengan meniupkan udara bertekanan melalui sebuah nosel sempit berpenampang $A_n = 5 \\times 10^{-5}\\text{ m}^2$ dengan debit udara $Q_u = 3 \\times 10^{-3}\\text{ m}^3\\text{/s}$. Massa jenis udara adalah $\\rho_u = 1{,}20\\text{ kg/m}^3$. Tepat di dekat nosel terdapat lubang pipa hisap vertikal setinggi $h = 10\\text{ cm}$ yang terhubung ke tangki cat (massa jenis cat $\\rho_{\\text{cat}} = 1200\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$). Besar selisih tekanan netto efektif yang mendorong semburan cat keluar dari ujung pipa hisap adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$480\\text{ Pa}$",
      "$960\\text{ Pa}$",
      "$1.200\\text{ Pa}$",
      "$2.160\\text{ Pa}$",
      "$3.360\\text{ Pa}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "1) Kelajuan udara pada nosel semprot: $v_u = \\frac{Q_u}{A_n}$.<br>2) Penurunan tekanan hisap menurut Bernoulli: $\\Delta P_{\\text{hisap}} = \\frac{1}{2}\\rho_u v_u^2$.<br>3) Tekanan yang dibutuhkan untuk mengatasi beban hidrostatis kolom cat: $P_h = \\rho_{\\text{cat}} \\cdot g \\cdot h$.<br>4) Selisih tekanan netto efektif yang mendorong semburan cat keluar adalah:<br>$$\\Delta P_{\\text{netto}} = \\Delta P_{\\text{hisap}} - P_h$$",
      "steps": "1. Hitung kelajuan udara di nosel:<br>$$v_u = \\frac{3 \\times 10^{-3}\\text{ m}^3\\text{/s}}{5 \\times 10^{-5}\\text{ m}^2} = 60\\text{ m/s}$$<br>2. Hitung daya hisap tekanan Bernoulli udara:<br>$$\\Delta P_{\\text{hisap}} = \\frac{1}{2} \\times 1{,}20\\text{ kg/m}^3 \\times (60\\text{ m/s})^2 = 0{,}60 \\times 3600 = 2.160\\text{ Pa}$$<br>3. Hitung hambatan tekanan hidrostatis kolom cat ($h = 10\\text{ cm} = 0{,}1\\text{ m}$):<br>$$P_h = 1200\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 0{,}1\\text{ m} = 1.200\\text{ Pa}$$<br>4. Hitung tekanan netto efektif pendorong semburan cat:<br>$$\\Delta P_{\\text{netto}} = 2.160\\text{ Pa} - 1.200\\text{ Pa} = 960\\text{ Pa}$$",
      "pitfalls": "Terkecoh hanya menghitung penurunan tekanan Bernoulli ($2.160\\text{ Pa}$, opsi D) tanpa mengurangkan beban hidrostatis kolom cat yang harus diangkat."
    },
    "subTopicSlug": "tabung-pitot-penyemprot",
    "bab": "Fluida",
    "subBab": "Tabung Pitot & Penyemprot",
    "subTopic": "Tabung Pitot & Penyemprot",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "1) Kelajuan udara pada nosel semprot: $v_u = \\frac{Q_u}{A_n}$. 2) Penurunan tekanan hisap menurut Bernoulli: $\\Delta P_{\\text{hisap}} = \\frac{1}{2}\\rho_u v_u^2$. 3) Tekanan yang dibutuhkan untuk mengatasi beban hidrostatis kolom cat: $P_h = \\rho_{\\text{cat}} \\cdot g \\cdot h$. 4) Selisih tekanan netto efektif yang mendorong semburan cat keluar adalah: $$\\Delta P_{\\text{netto}} = \\Delta P_{\\text{hisap}} - P_h$$."
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
