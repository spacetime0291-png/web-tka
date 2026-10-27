/**
 * Bank Soal TKA: Fisika (TKA) - Fluida
 * Bab Kecil: Fluida Statis (fis-flu-statis)
 * Sub-Bab: Hukum Archimedes (fis-flu-statis-archimedes)
 * Slug: hukum-archimedes
 * Indikator: Gaya apung ke atas (F_a = rho_f * V_bf * g) dan syarat terapung, melayang, serta tenggelam.
 * 
 * Total Butir Soal: 11 (Mudah: 5, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-flu-statis-archimedes";
  const subTopicSlug = "hukum-archimedes";
  const questions = [
  {
    "id": "fis-flu-statis-archimedes-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-archimedes",
    "category": "Hukum Archimedes",
    "difficulty": "mudah",
    "statement": "Hukum Archimedes menyatakan bahwa sebuah benda yang dicelupkan sebagian atau seluruhnya ke dalam zat cair akan mengalami gaya ke atas (gaya apung) yang besarnya ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Sama dengan berat fluida yang dipindahkan oleh benda tersebut",
      "Sama dengan berat total benda di udara",
      "Berbanding terbalik dengan volume benda yang tercelup",
      "Sama dengan selisih antara volume benda dan massa jenis fluida",
      "Berbanding lurus dengan kedalaman posisi benda dari dasar wadah"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bunyi Hukum Archimedes menyatakan bahwa gaya apung ke atas ($F_a$) yang dialami suatu benda tepat sama dengan berat fluida yang dipindahkan (didesak) oleh bagian benda yang tercelup:<br>$$F_a = W_{\\text{fluida}} = m_f \\cdot g = \\rho_f \\cdot V_{bf} \\cdot g$$Di mana $\\rho_f$ adalah massa jenis fluida dan $V_{bf}$ adalah volume benda yang tercelup.",
      "steps": "1. Evaluasi konsep dasar Hukum Archimedes:<br>Gaya angkat ke atas muncul karena selisih tekanan hidrostatis antara permukaan bawah dan permukaan atas benda.<br>2. Nilai gaya ini secara eksak setara dengan berat fluida yang terusir ($F_a = \\rho_f \\cdot g \\cdot V_{bf}$).<br>3. Jawaban yang tepat dan baku adalah opsi A.",
      "pitfalls": "Siswa sering mengira gaya apung Archimedes sebanding dengan massa jenis benda itu sendiri atau bertambah besar jika benda tenggelam semakin dalam, padahal saat seluruh volume benda sudah tercelup, $V_{bf}$ konstan sehingga gaya apung tidak berubah terhadap kedalaman."
    },
    "subTopicSlug": "hukum-archimedes",
    "bab": "Fluida",
    "subBab": "Hukum Archimedes",
    "subTopic": "Hukum Archimedes",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Bunyi Hukum Archimedes menyatakan bahwa gaya apung ke atas ($F_a$) yang dialami suatu benda tepat sama dengan berat fluida yang dipindahkan (didesak) oleh bagian benda yang tercelup: $$F_a = W_{\\text{fluida}} = m_f \\cdot g = \\rho_f \\cdot V_{bf} \\cdot g$$Di mana $\\rho_f$ adalah massa jenis fluida dan $V_{bf}$ adalah volume benda yang tercelup."
  },
  {
    "id": "fis-flu-statis-archimedes-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-archimedes",
    "category": "Hukum Archimedes",
    "difficulty": "mudah",
    "statement": "Sebuah balok padat bervolume $V = 4 \\times 10^{-3}\\text{ m}^3$ dan bermassa jenis $\\rho_b = 2500\\text{ kg/m}^3$ dicelupkan seluruhnya ke dalam bejana berisi air (massa jenis air $\\rho_a = 1000\\text{ kg/m}^3$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar berat semu balok tersebut di dalam air adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$40\\text{ N}$",
      "$60\\text{ N}$",
      "$100\\text{ N}$",
      "$140\\text{ N}$",
      "$160\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Berat semu benda di dalam fluida ($W'$) adalah berat benda di udara ($W$) dikurangi gaya apung Archimedes ($F_a$):<br>$$W' = W - F_a$$Di mana $W = \\rho_b \\cdot V \\cdot g$ dan $F_a = \\rho_a \\cdot V \\cdot g$.",
      "steps": "1. Hitung berat balok di udara:<br>$$W = \\rho_b \\cdot V \\cdot g = 2500\\text{ kg/m}^3 \\times (4 \\times 10^{-3}\\text{ m}^3) \\times 10\\text{ m/s}^2 = 100\\text{ N}$$<br>2. Hitung gaya apung Archimedes:<br>$$F_a = \\rho_a \\cdot V \\cdot g = 1000\\text{ kg/m}^3 \\times (4 \\times 10^{-3}\\text{ m}^3) \\times 10\\text{ m/s}^2 = 40\\text{ N}$$<br>3. Hitung berat semu di dalam air:<br>$$W' = W - F_a = 100\\text{ N} - 40\\text{ N} = 60\\text{ N}$$",
      "pitfalls": "Terkecoh memilih $40\\text{ N}$ (opsi A) yang merupakan nilai gaya apung Archimedes ($F_a$), padahal soal secara spesifik menanyakan berat semu balok di dalam air ($W'$)."
    },
    "subTopicSlug": "hukum-archimedes",
    "bab": "Fluida",
    "subBab": "Hukum Archimedes",
    "subTopic": "Hukum Archimedes",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Berat semu benda di dalam fluida ($W'$) adalah berat benda di udara ($W$) dikurangi gaya apung Archimedes ($F_a$): $$W' = W - F_a$$Di mana $W = \\rho_b \\cdot V \\cdot g$ dan $F_a = \\rho_a \\cdot V \\cdot g$."
  },
  {
    "id": "fis-flu-statis-archimedes-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-archimedes",
    "category": "Hukum Archimedes",
    "difficulty": "mudah",
    "statement": "Sebuah balok kayu terapung di atas permukaan air danau (massa jenis air $\\rho_a = 1000\\text{ kg/m}^3$). Jika $\\frac{3}{4}$ bagian dari volume total balok kayu tersebut berada terbenam di bawah permukaan air, maka massa jenis balok kayu tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$250\\text{ kg/m}^3$",
      "$500\\text{ kg/m}^3$",
      "$600\\text{ kg/m}^3$",
      "$750\\text{ kg/m}^3$",
      "$850\\text{ kg/m}^3$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Pada kondisi benda terapung seimbang, berat total benda sama dengan gaya apung Archimedes:<br>$$W = F_a \\iff \\rho_b \\cdot V_b \\cdot g = \\rho_a \\cdot V_{bf} \\cdot g$$Sehingga massa jenis benda terapung sebanding dengan fraksi volume yang tercelup:<br>$$\\rho_b = \\rho_a \\cdot \\frac{V_{bf}}{V_b}$$",
      "steps": "1. Masukkan nilai fraksi volume tercelup $\\frac{V_{bf}}{V_b} = \\frac{3}{4}$:<br>$$\\rho_b = 1000\\text{ kg/m}^3 \\times \\frac{3}{4} = 750\\text{ kg/m}^3$$",
      "pitfalls": "Siswa sering menggunakan fraksi bagian yang terapung di udara ($1 - \\frac{3}{4} = \\frac{1}{4}$) sehingga keliru menghitung $\\rho_b = 250\\text{ kg/m}^3$ (opsi A)."
    },
    "subTopicSlug": "hukum-archimedes",
    "bab": "Fluida",
    "subBab": "Hukum Archimedes",
    "subTopic": "Hukum Archimedes",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Pada kondisi benda terapung seimbang, berat total benda sama dengan gaya apung Archimedes: $$W = F_a \\iff \\rho_b \\cdot V_b \\cdot g = \\rho_a \\cdot V_{bf} \\cdot g$$Sehingga massa jenis benda terapung sebanding dengan fraksi volume yang tercelup: $$\\rho_b = \\rho_a \\cdot \\frac{V_{bf}}{V_b}$$."
  },
  {
    "id": "fis-flu-statis-archimedes-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-archimedes",
    "category": "Hukum Archimedes",
    "difficulty": "mudah",
    "statement": "Sebongkah es batu dengan massa jenis $\\rho_{\\text{es}} = 900\\text{ kg/m}^3$ terapung di dalam gelas berisi air murni (massa jenis $\\rho_{\\text{air}} = 1000\\text{ kg/m}^3$). Persentase volume es batu yang menyembul (muncul) di atas permukaan air adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\%$",
      "$10\\%$",
      "$15\\%$",
      "$80\\%$",
      "$90\\%$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Fraksi volume benda terapung yang tercelup di dalam cairan adalah:<br>$$\\frac{V_{\\text{celup}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{es}}}{\\rho_{\\text{air}}}$$Sedangkan fraksi volume yang muncul di atas permukaan zat cair adalah:<br>$$\\frac{V_{\\text{muncul}}}{V_{\\text{total}}} = 1 - \\frac{V_{\\text{celup}}}{V_{\\text{total}}} = 1 - \\frac{\\rho_{\\text{es}}}{\\rho_{\\text{air}}}$$",
      "steps": "1. Hitung fraksi volume es yang terbenam di dalam air:<br>$$\\frac{V_{\\text{celup}}}{V_{\\text{total}}} = \\frac{900\\text{ kg/m}^3}{1000\\text{ kg/m}^3} = 0{,}9 = 90\\%$$<br>2. Hitung persentase volume es yang muncul di atas permukaan:<br>$$\\text{Persentase muncul} = 100\\% - 90\\% = 10\\%$$",
      "pitfalls": "Terkecoh langsung memilih $90\\%$ (opsi E), padahal $90\\%$ adalah volume es yang berada di bawah permukaan air, sedangkan yang ditanyakan adalah bagian yang muncul di atas permukaan air."
    },
    "subTopicSlug": "hukum-archimedes",
    "bab": "Fluida",
    "subBab": "Hukum Archimedes",
    "subTopic": "Hukum Archimedes",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Fraksi volume benda terapung yang tercelup di dalam cairan adalah: $$\\frac{V_{\\text{celup}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{es}}}{\\rho_{\\text{air}}}$$Sedangkan fraksi volume yang muncul di atas permukaan zat cair adalah: $$\\frac{V_{\\text{muncul}}}{V_{\\text{total}}} = 1 - \\frac{V_{\\text{celup}}}{V_{\\text{total}}} = 1 - \\frac{\\rho_{\\text{es}}}{\\rho_{\\text{air}}}$$."
  },
  {
    "id": "fis-flu-statis-archimedes-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-archimedes",
    "category": "Hukum Archimedes",
    "difficulty": "mudah",
    "statement": "Tiga buah benda padat P, Q, dan R dimasukkan ke dalam bejana besar berisi air ($\rho_a = 1000\\text{ kg/m}^3$). Benda P mengapung dengan sebagian volumenya berada di atas air, benda Q melayang diam tepat di tengah air, dan benda R tenggelam hingga menyentuh dasar bejana. Perbandingan massa jenis ketiga benda ($\\rho_P, \\rho_Q, \\rho_R$) terhadap massa jenis air yang benar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\rho_P < \\rho_a$, $\\rho_Q = \\rho_a$, dan $\\rho_R > \\rho_a$",
      "$\\rho_P > \\rho_a$, $\\rho_Q = \\rho_a$, dan $\\rho_R < \\rho_a$",
      "$\\rho_P = \\rho_a$, $\\rho_Q < \\rho_a$, dan $\\rho_R > \\rho_a$",
      "$\\rho_P < \\rho_a$, $\\rho_Q > \\rho_a$, dan $\\rho_R = \\rho_a$",
      "$\\rho_P = \\rho_Q = \\rho_R = \\rho_a$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Syarat fisis kesetimbangan benda di dalam fluida statis ditentukan oleh perbandingan massa jenis rata-rata benda ($\\rho_b$) terhadap massa jenis fluida ($\\rho_f$):<br>1) Terapung: $\\rho_b < \\rho_f$ (gaya apung saat tercelup total melebihi berat benda).<br>2) Melayang: $\\rho_b = \\rho_f$ (gaya apung tepat sama dengan berat benda pada volume total).<br>3) Tenggelam: $\\rho_b > \\rho_f$ (gaya apung maksimum lebih kecil daripada berat benda).",
      "steps": "1. Benda P mengapung $\\implies \\rho_P < \\rho_a$.<br>2. Benda Q melayang $\\implies \\rho_Q = \\rho_a$.<br>3. Benda R tenggelam $\\implies \\rho_R > \\rho_a$.<br>Pernyataan yang tepat ada pada opsi A.",
      "pitfalls": "Siswa terkadang salah membedakan antara kondisi melayang ($\rho_b = \rho_f$) dengan terapung, atau menganggap benda melayang memiliki gaya apung lebih besar daripada beratnya."
    },
    "subTopicSlug": "hukum-archimedes",
    "bab": "Fluida",
    "subBab": "Hukum Archimedes",
    "subTopic": "Hukum Archimedes",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Syarat fisis kesetimbangan benda di dalam fluida statis ditentukan oleh perbandingan massa jenis rata-rata benda ($\\rho_b$) terhadap massa jenis fluida ($\\rho_f$): 1) Terapung: $\\rho_b < \\rho_f$ (gaya apung saat tercelup total melebihi berat benda). 2) Melayang: $\\rho_b = \\rho_f$ (gaya apung tepat sama dengan berat benda pada volume total). 3) Tenggelam: $\\rho_b > \\rho_f$ (gaya apung maksimum lebih kecil daripada berat benda)."
  },
  {
    "id": "fis-flu-statis-archimedes-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-archimedes",
    "category": "Hukum Archimedes",
    "difficulty": "sedang",
    "statement": "Sebuah balok kubus kayu dengan tinggi rusuk $10\\text{ cm}$ terapung di perbatasan antara dua cairan yang tidak saling bercampur, yaitu minyak (massa jenis $\\rho_m = 800\\text{ kg/m}^3$) di lapisan atas dan air (massa jenis $\\rho_a = 1000\\text{ kg/m}^3$) di lapisan bawah. Jika bagian balok yang berada di dalam air memiliki ketinggian $4\\text{ cm}$ dan sisanya berada di dalam lapisan minyak, maka massa jenis balok kubus tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$840\\text{ kg/m}^3$",
      "$880\\text{ kg/m}^3$",
      "$900\\text{ kg/m}^3$",
      "$920\\text{ kg/m}^3$",
      "$960\\text{ kg/m}^3$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Ketika benda terapung di antara dua cairan yang tak bercampur, gaya apung total adalah jumlah gaya apung yang diberikan oleh masing-masing cairan:<br>$$F_{a,\\text{total}} = F_{a,\\text{air}} + F_{a,\\text{minyak}} = \\rho_a \\cdot g \\cdot V_{\\text{air}} + \\rho_m \\cdot g \\cdot V_{\\text{minyak}}$$Pada kesetimbangan statis, gaya apung total sama dengan berat benda:<br>$$\\rho_b \\cdot g \\cdot V_{\\text{total}} = \\rho_a \\cdot g \\cdot V_{\\text{air}} + \\rho_m \\cdot g \\cdot V_{\\text{minyak}}$$Karena penampang balok seragam, rasio volume setara dengan rasio ketinggian.",
      "steps": "1. Tentukan ketinggian di masing-masing cairan:<br>• Tinggi balok di air: $h_{\\text{air}} = 4\\text{ cm}$<br>• Tinggi balok di minyak: $h_{\\text{minyak}} = 10\\text{ cm} - 4\\text{ cm} = 6\\text{ cm}$<br>2. Hitung massa jenis balok:<br>$$\\rho_b = \\rho_a \\cdot \\frac{h_{\\text{air}}}{h_{\\text{total}}} + \\rho_m \\cdot \\frac{h_{\\text{minyak}}}{h_{\\text{total}}}$$<br>$$\\rho_b = 1000 \\times \\frac{4}{10} + 800 \\times \\frac{6}{10} = 400 + 480 = 880\\text{ kg/m}^3$$",
      "pitfalls": "Siswa sering merata-ratakan langsung $\\frac{1000 + 800}{2} = 900\\text{ kg/m}^3$ (opsi C) tanpa memperhitungkan proporsi volume yang terbenam pada masing-masing lapisan fluida."
    },
    "subTopicSlug": "hukum-archimedes",
    "bab": "Fluida",
    "subBab": "Hukum Archimedes",
    "subTopic": "Hukum Archimedes",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Ketika benda terapung di antara dua cairan yang tak bercampur, gaya apung total adalah jumlah gaya apung yang diberikan oleh masing-masing cairan: $$F_{a,\\text{total}} = F_{a,\\text{air}} + F_{a,\\text{minyak}} = \\rho_a \\cdot g \\cdot V_{\\text{air}} + \\rho_m \\cdot g \\cdot V_{\\text{minyak}}$$Pada kesetimbangan statis, gaya apung total sama dengan berat benda: $$\\rho_b \\cdot g \\cdot V_{\\text{total}} = \\rho_a \\cdot g \\cdot V_{\\text{air}} + \\rho_m \\cdot g \\cdot V_{\\text{minyak}}$$Karena penampang balok seragam, rasio volume setara dengan rasio ketinggian."
  },
  {
    "id": "fis-flu-statis-archimedes-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-archimedes",
    "category": "Hukum Archimedes",
    "difficulty": "sedang",
    "statement": "Sebuah mahkota logam emas yang dicurigai berongga di bagian dalamnya memiliki massa terukur di udara sebesar $m = 386\\text{ gram}$. Ketika mahkota tersebut dicelupkan dan ditimbang seluruhnya di dalam air murni (massa jenis $\\rho_a = 1{,}0\\text{ g/cm}^3$), massa semunya terukur sebesar $m' = 360\\text{ gram}$. Jika massa jenis emas murni diketahui $\\rho_{\\text{emas}} = 19{,}3\\text{ g/cm}^3$, besar volume rongga udara di dalam mahkota tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ cm}^3$",
      "$6\\text{ cm}^3$",
      "$8\\text{ cm}^3$",
      "$10\\text{ cm}^3$",
      "$20\\text{ cm}^3$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "1) Volume total luar mahkota diperoleh dari gaya apung (selisih massa semu dalam air):<br>$$V_{\\text{total}} = \\frac{m - m'}{\\rho_a}$$<br>2) Volume bahan emas murni diperoleh dari massa nyata dibagi massa jenis emas:<br>$$V_{\\text{emas}} = \\frac{m}{\\rho_{\\text{emas}}}$$<br>3) Volume rongga dihitung dari selisihnya:<br>$$V_{\\text{rongga}} = V_{\\text{total}} - V_{\\text{emas}}$$",
      "steps": "1. Hitung volume luar total mahkota:<br>$$V_{\\text{total}} = \\frac{386\\text{ g} - 360\\text{ g}}{1{,}0\\text{ g/cm}^3} = \\frac{26\\text{ g}}{1{,}0\\text{ g/cm}^3} = 26\\text{ cm}^3$$<br>2. Hitung volume sesungguhnya dari material emas murni:<br>$$V_{\\text{emas}} = \\frac{386\\text{ g}}{19{,}3\\text{ g/cm}^3} = 20\\text{ cm}^3$$<br>3. Hitung volume rongga:<br>$$V_{\\text{rongga}} = 26\\text{ cm}^3 - 20\\text{ cm}^3 = 6\\text{ cm}^3$$",
      "pitfalls": "Terkecoh menganggap volume emas murni adalah jawaban akhir ($20\\text{ cm}^3$, opsi E), atau salah mengurangkan massa semu sehingga salah menentukan volume luar."
    },
    "subTopicSlug": "hukum-archimedes",
    "bab": "Fluida",
    "subBab": "Hukum Archimedes",
    "subTopic": "Hukum Archimedes",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "1) Volume total luar mahkota diperoleh dari gaya apung (selisih massa semu dalam air): $$V_{\\text{total}} = \\frac{m - m'}{\\rho_a}$$ 2) Volume bahan emas murni diperoleh dari massa nyata dibagi massa jenis emas: $$V_{\\text{emas}} = \\frac{m}{\\rho_{\\text{emas}}}$$ 3) Volume rongga dihitung dari selisihnya: $$V_{\\text{rongga}} = V_{\\text{total}} - V_{\\text{emas}}$$."
  },
  {
    "id": "fis-flu-statis-archimedes-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-archimedes",
    "category": "Hukum Archimedes",
    "difficulty": "sedang",
    "statement": "Sebuah balon udara memiliki volume gas $V = 100\\text{ m}^3$ dan diisi dengan gas helium (massa jenis $\\rho_{\\text{He}} = 0{,}18\\text{ kg/m}^3$). Massa total struktur balon (kulit balon, tali, dan keranjang kosong) adalah $m_0 = 32\\text{ kg}$. Jika massa jenis udara di sekitar lokasi peluncuran adalah $\\rho_{\\text{udara}} = 1{,}20\\text{ kg/m}^3$ dan percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, massa beban muatan maksimum ($m_{\\text{beban}}$) yang masih dapat diangkat oleh balon tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\text{ kg}$",
      "$70\\text{ kg}$",
      "$88\\text{ kg}$",
      "$102\\text{ kg}$",
      "$120\\text{ kg}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Kondisi batas balon dapat terangkat terjadi ketika gaya apung udara ($F_a$) setimbang dengan berat total sistem:<br>$$F_a = W_{\\text{He}} + W_0 + W_{\\text{beban}}$$Di mana:<br>• $F_a = \\rho_{\\text{udara}} \\cdot V \\cdot g$<br>• $W_{\\text{He}} = \\rho_{\\text{He}} \\cdot V \\cdot g$<br>• $W_0 = m_0 \\cdot g$",
      "steps": "1. Hitung gaya apung udara ke atas:<br>$$F_a = 1{,}20\\text{ kg/m}^3 \\times 100\\text{ m}^3 \\times 10\\text{ m/s}^2 = 1.200\\text{ N}$$<br>2. Hitung berat gas helium di dalam balon:<br>$$W_{\\text{He}} = 0{,}18\\text{ kg/m}^3 \\times 100\\text{ m}^3 \\times 10\\text{ m/s}^2 = 180\\text{ N}$$<br>3. Hitung berat struktur balon:<br>$$W_0 = 32\\text{ kg} \\times 10\\text{ m/s}^2 = 320\\text{ N}$$<br>4. Hitung berat beban maksimum dan massanya:<br>$$W_{\\text{beban}} = 1.200\\text{ N} - (180\\text{ N} + 320\\text{ N}) = 1.200 - 500 = 700\\text{ N}$$<br>$$m_{\\text{beban}} = \\frac{700\\text{ N}}{10\\text{ m/s}^2} = 70\\text{ kg}$$",
      "pitfalls": "Siswa sering mengabaikan berat dari gas helium di dalam balon dan hanya mengurangkan gaya apung dengan massa struktur ($120 - 32 = 88\\text{ kg}$, opsi C)."
    },
    "subTopicSlug": "hukum-archimedes",
    "bab": "Fluida",
    "subBab": "Hukum Archimedes",
    "subTopic": "Hukum Archimedes",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Kondisi batas balon dapat terangkat terjadi ketika gaya apung udara ($F_a$) setimbang dengan berat total sistem: $$F_a = W_{\\text{He}} + W_0 + W_{\\text{beban}}$$Di mana: • $F_a = \\rho_{\\text{udara}} \\cdot V \\cdot g$ • $W_{\\text{He}} = \\rho_{\\text{He}} \\cdot V \\cdot g$ • $W_0 = m_0 \\cdot g$."
  },
  {
    "id": "fis-flu-statis-archimedes-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-archimedes",
    "category": "Hukum Archimedes",
    "difficulty": "sedang",
    "statement": "Sebuah balok kayu dengan volume $V = 2 \\times 10^{-3}\\text{ m}^3$ dan massa jenis $\\rho_b = 600\\text{ kg/m}^3$ diikat menggunakan seutas tali ringan ke dasar sebuah tangki berisi air (massa jenis air $\\rho_a = 1000\\text{ kg/m}^3$). Akibat ikatan tali tersebut, seluruh bagian balok kayu terbenam sepenuhnya di dalam air. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar tegangan tali penahan balok tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ N}$",
      "$8\\text{ N}$",
      "$12\\text{ N}$",
      "$16\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada balok yang terbenam dan ditahan oleh tali di dasar wadah, bekerja tiga gaya vertikal:<br>• Gaya apung ke atas: $F_a = \\rho_a \\cdot V \\cdot g$<br>• Gaya berat balok ke bawah: $W = \\rho_b \\cdot V \\cdot g$<br>• Gaya tegangan tali ke bawah: $T$<br>Persamaan kesetimbangan gaya vertikal ($\\Sigma F_y = 0$):<br>$$F_a - W - T = 0 \\implies T = F_a - W = (\\rho_a - \\rho_b) \\cdot V \\cdot g$$",
      "steps": "1. Hitung selisih massa jenis:<br>$$\\Delta \\rho = \\rho_a - \\rho_b = 1000\\text{ kg/m}^3 - 600\\text{ kg/m}^3 = 400\\text{ kg/m}^3$$<br>2. Hitung tegangan tali:<br>$$T = 400\\text{ kg/m}^3 \\times (2 \\times 10^{-3}\\text{ m}^3) \\times 10\\text{ m/s}^2 = 8\\text{ N}$$",
      "pitfalls": "Terkecoh menganggap tegangan tali sama dengan gaya apung murni ($20\\text{ N}$, opsi E) atau berat balok murni ($12\\text{ N}$, opsi C). Tegangan tali adalah selisih antara gaya apung dan gaya berat."
    },
    "subTopicSlug": "hukum-archimedes",
    "bab": "Fluida",
    "subBab": "Hukum Archimedes",
    "subTopic": "Hukum Archimedes",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Pada balok yang terbenam dan ditahan oleh tali di dasar wadah, bekerja tiga gaya vertikal: • Gaya apung ke atas: $F_a = \\rho_a \\cdot V \\cdot g$ • Gaya berat balok ke bawah: $W = \\rho_b \\cdot V \\cdot g$ • Gaya tegangan tali ke bawah: $T$ Persamaan kesetimbangan gaya vertikal ($\\Sigma F_y = 0$): $$F_a - W - T = 0 \\implies T = F_a - W = (\\rho_a - \\rho_b) \\cdot V \\cdot g$$. **Tips:** Terkecoh menganggap tegangan tali sama dengan gaya apung murni ($20\\text{ N}$, ) atau berat balok murni ($12\\text{ N}$, )."
  },
  {
    "id": "fis-flu-statis-archimedes-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-archimedes",
    "category": "Hukum Archimedes",
    "difficulty": "sedang",
    "statement": "Sebuah balok kayu kubus dengan volume $V = 8 \\times 10^{-3}\\text{ m}^3$ dan massa jenis $\\rho_b = 700\\text{ kg/m}^3$ terapung di atas permukaan air (massa jenis air $\\rho_a = 1000\\text{ kg/m}^3$). Agar seluruh kubus kayu tersebut tepat terbenam sepenuhnya di dalam air tanpa ada beban yang menyentuh air, diletakkan sebuah pelat timbal di atas permukaan atas balok kayu tersebut. Besar massa minimal pelat timbal tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}6\\text{ kg}$",
      "$2{,}4\\text{ kg}$",
      "$3{,}2\\text{ kg}$",
      "$4{,}8\\text{ kg}$",
      "$5{,}6\\text{ kg}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Saat balok tepat terbenam seluruhnya di dalam air, volume air yang dipindahkan sama dengan volume total balok ($V_{bf} = V$). Kesetimbangan gaya vertikal mensyaratkan:<br>$$F_a = W_{\\text{kayu}} + W_{\\text{timbal}}$$Di mana $W_{\\text{timbal}} = m_{\\text{timbal}} \\cdot g$, sehingga:<br>$$m_{\\text{timbal}} = (\\rho_a - \\rho_b) \\cdot V$$",
      "steps": "1. Tentukan gaya apung saat balok tercelup penuh:<br>$$F_a = 1000\\text{ kg/m}^3 \\times (8 \\times 10^{-3}\\text{ m}^3) \\times 10\\text{ m/s}^2 = 80\\text{ N}$$<br>2. Tentukan berat balok kayu:<br>$$W_{\\text{kayu}} = 700\\text{ kg/m}^3 \\times (8 \\times 10^{-3}\\text{ m}^3) \\times 10\\text{ m/s}^2 = 56\\text{ N}$$<br>3. Hitung berat dan massa timbal yang dibutuhkan:<br>$$W_{\\text{timbal}} = 80\\text{ N} - 56\\text{ N} = 24\\text{ N}$$<br>$$m_{\\text{timbal}} = \\frac{24\\text{ N}}{10\\text{ m/s}^2} = 2{,}4\\text{ kg}$$",
      "pitfalls": "Siswa sering mengira massa timbal sama dengan massa balok kayu ($5{,}6\\text{ kg}$, opsi E) atau salah mengalikan selisih massa jenis dengan volume."
    },
    "subTopicSlug": "hukum-archimedes",
    "bab": "Fluida",
    "subBab": "Hukum Archimedes",
    "subTopic": "Hukum Archimedes",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Saat balok tepat terbenam seluruhnya di dalam air, volume air yang dipindahkan sama dengan volume total balok ($V_{bf} = V$). Kesetimbangan gaya vertikal mensyaratkan: $$F_a = W_{\\text{kayu}} + W_{\\text{timbal}}$$Di mana $W_{\\text{timbal}} = m_{\\text{timbal}} \\cdot g$, sehingga: $$m_{\\text{timbal}} = (\\rho_a - \\rho_b) \\cdot V$$."
  },
  {
    "id": "sedang-fis-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-statis-archimedes",
    "category": "Hukum Archimedes & Kerapatan",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebongkah balok kayu terapung di perbatasan dua lapisan zat cair yang tidak bercampur. Bagian bawah balok tercelup dalam lapisan zat cair A (massa jenis $\\rho_A = 1200\\text{ kg/m}^3$) sebanyak $40\\%$ dari volume totalnya, dan $35\\%$ volume balok tercelup dalam lapisan zat cair B (massa jenis $\\rho_B = 800\\text{ kg/m}^3$), sedangkan sisanya muncul di udara. Massa jenis balok kayu tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$760\\text{ kg/m}^3$",
      "$780\\text{ kg/m}^3$",
      "$850\\text{ kg/m}^3$",
      "$920\\text{ kg/m}^3$",
      "$1000\\text{ kg/m}^3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Keseimbangan Benda Terapung Multilapis:</strong><br>\n          Gaya berat total benda sama dengan jumlah seluruh gaya apung Archimedes dari fluida-fluida yang terdesak:<br>\n          $$W = F_{A1} + F_{A2} \\implies \\rho_b V_b g = \\rho_A V_{A} g + \\rho_B V_{B} g$$\n          $$\\rho_b = \\rho_A \\left(\\frac{V_A}{V_b}\\right) + \\rho_B \\left(\\frac{V_B}{V_b}\\right)$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Diketahui rasio volume tercelup:<br>\n            $\\frac{V_A}{V_b} = 40\\% = 0{,}40$ dan $\\frac{V_B}{V_b} = 35\\% = 0{,}35$.\n          </li>\n          <li>Substitusi ke persamaan keseimbangan apung:<br>\n            $$\\rho_b = (1200 \\times 0{,}40) + (800 \\times 0{,}35)$$\n          </li>\n          <li>Hitung masing-masing kontribusi:<br>\n            $$1200 \\times 0{,}40 = 480$$\n            $$800 \\times 0{,}35 = 280$$\n            $$\\rho_b = 480 + 280 = 760\\text{ kg/m}^3$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan bahwa volume balok di udara ($25\\%$) tidak memberikan gaya apung yang signifikan karena massa jenis udara sangat kecil dibanding cairan dan diabaikan.\n        </div>\n      "
    },
    "bab": "Fluida",
    "subBab": "Hukum Archimedes",
    "subTopic": "Hukum Archimedes",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-statis",
    "subTopicSlug": "hukum-archimedes",
    "hint": "Keseimbangan Benda Terapung Multilapis: Gaya berat total benda sama dengan jumlah seluruh gaya apung Archimedes dari fluida-fluida yang terdesak: $$W = F_{A1} + F_{A2} \\implies \\rho_b V_b g = \\rho_A V_{A} g + \\rho_B V_{B} g$$ $$\\rho_b = \\rho_A \\left(\\frac{V_A}{V_b}\\right) + \\rho_B \\left(\\frac{V_B}{V_b}\\right)$$."
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
