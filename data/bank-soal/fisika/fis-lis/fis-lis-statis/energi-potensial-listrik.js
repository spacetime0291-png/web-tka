/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Bab Kecil: Listrik Statis (fis-lis-statis)
 * Sub-Bab: Energi Potensial & Potensial Listrik (fis-lis-statis-potensial)
 * Slug: energi-potensial-listrik
 * Indikator: Skalar potensial listrik (V = k * q / r), energi potensial (Ep = q * V), dan usaha gerak muatan.
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-statis-potensial";
  const subTopicSlug = "energi-potensial-listrik";
  const questions = [
  {
    "id": "fis-lis-statis-potensial-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-potensial",
    "category": "Karakteristik Skalar Potensial Listrik",
    "difficulty": "mudah",
    "statement": "Pernyataan berikut yang tepat mengenai besaran potensial listrik adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Merupakan besaran vektor yang arahnya selalu menjauhi muatan positif",
      "Merupakan besaran skalar dan tanda aljabar muatan (+ atau -) wajib disertakan dalam perhitungannya",
      "Memiliki satuan Newton per Coulomb (N/C) dalam sistem satuan internasional",
      "Nilainya selalu bernilai positif untuk semua jenis muatan sumber listrik",
      "Berbanding terbalik dengan kuadrat jarak dari muatan sumber"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Potensial listrik ($V$) didefinisikan sebagai energi potensial listrik per satuan muatan ($V = \\frac{E_p}{q}$). Potensial listrik merupakan besaran skalar (tidak memiliki arah) dengan satuan Volt (Joule per Coulomb). Rumusnya adalah $V = k \\frac{q}{r}$, di mana tanda positif atau negatif muatan wajib disertakan dalam perhitungan aljabar.",
      "steps": "1. Tinjau definisi potensial listrik: $V = k \\frac{q}{r}$.<br>2. Karena energi potensial adalah besaran skalar, potensial listrik juga merupakan besaran skalar murni.<br>3. Muatan positif menghasilkan potensial positif ($V > 0$) dan muatan negatif menghasilkan potensial negatif ($V < 0$).<br>4. Satuan SI potensial listrik adalah Volt (V), bukan N/C (satuan medan listrik).<br>5. Jadi pernyataan yang paling tepat adalah pilihan B.",
      "pitfalls": "Siswa sering menganggap potensial listrik sebagai besaran vektor seperti halnya medan listrik, atau mengabaikan tanda minus pada muatan negatif."
    },
    "subTopicSlug": "energi-potensial-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi Potensial & Potensial Listrik",
    "subTopic": "Energi Potensial & Potensial Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Potensial listrik ($V$) didefinisikan sebagai energi potensial listrik per satuan muatan ($V = \\frac{E_p}{q}$). Potensial listrik merupakan besaran skalar (tidak memiliki arah) dengan satuan Volt (Joule per Coulomb). Rumusnya adalah $V = k \\frac{q}{r}$, di mana tanda positif atau negatif muatan wajib disertakan dalam perhitungan aljabar."
  },
  {
    "id": "fis-lis-statis-potensial-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-potensial",
    "category": "Perhitungan Potensial Listrik Muatan Negatif",
    "difficulty": "mudah",
    "statement": "Potensial listrik di suatu titik yang berjarak $20\\text{ cm}$ dari sebuah muatan titik $-4\\,\\mu\\text{C}$ di ruang hampa ($k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-180\\text{ kV}$",
      "$+180\\text{ kV}$",
      "$-90\\text{ kV}$",
      "$+90\\text{ kV}$",
      "$-360\\text{ kV}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Potensial listrik pada jarak $r$ dari muatan titik $q$ dirumuskan sebagai:<br>$$V = k \\frac{q}{r}$$<br>dengan $q$ dihitung beserta tanda aljabarnya.",
      "steps": "1. Konversikan satuan ke SI standar:<br>$$q = -4\\,\\mu\\text{C} = -4 \\times 10^{-6}\\text{ C}$$<br>$$r = 20\\text{ cm} = 0{,}2\\text{ m} = 2 \\times 10^{-1}\\text{ m}$$<br>2. Hitung potensial listrik:<br>$$V = (9 \\times 10^9) \\times \\frac{-4 \\times 10^{-6}\\text{ C}}{2 \\times 10^{-1}\\text{ m}} = 9 \\times 10^9 \\times (-2 \\times 10^{-5}) = -18 \\times 10^4\\text{ V} = -180\\text{ kV}$$<br>3. Jadi potensial listrik di titik tersebut adalah $-180\\text{ kV}$ (pilihan A).",
      "pitfalls": "Lupa menyertakan tanda minus muatan sehingga salah memilih $+180\\text{ kV}$, atau lupa mengonversi jarak $20\\text{ cm}$ ke satuan meter ($0{,}2\\text{ m}$)."
    },
    "subTopicSlug": "energi-potensial-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi Potensial & Potensial Listrik",
    "subTopic": "Energi Potensial & Potensial Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Potensial listrik pada jarak $r$ dari muatan titik $q$ dirumuskan sebagai: $$V = k \\frac{q}{r}$$ dengan $q$ dihitung beserta tanda aljabarnya."
  },
  {
    "id": "fis-lis-statis-potensial-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-potensial",
    "category": "Usaha Memindahkan Muatan Antara Dua Titik",
    "difficulty": "mudah",
    "statement": "Untuk memindahkan muatan uji positif sebesar $q = +5\\,\\mu\\text{C}$ dari titik $A$ yang berpotensial $20\\text{ V}$ ke titik $B$ yang berpotensial $80\\text{ V}$, usaha luar yang harus dilakukan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 \\times 10^{-4}\\text{ Joule}$",
      "$3 \\times 10^{-4}\\text{ Joule}$",
      "$4 \\times 10^{-4}\\text{ Joule}$",
      "$5 \\times 10^{-4}\\text{ Joule}$",
      "$6 \\times 10^{-4}\\text{ Joule}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Usaha luar ($W$) yang diperlukan untuk memindahkan muatan uji $q$ dari titik $A$ ke titik $B$ sama dengan perubahan energi potensial listriknya:<br>$$W_{A \\to B} = q \\Delta V = q (V_B - V_A)$$",
      "steps": "1. Beda potensial antara titik $B$ dan titik $A$ adalah:<br>$$\\Delta V = V_B - V_A = 80\\text{ V} - 20\\text{ V} = 60\\text{ Volt}$$<br>2. Muatan yang dipindahkan adalah $q = +5\\,\\mu\\text{C} = 5 \\times 10^{-6}\\text{ C}$.<br>3. Hitung usaha luar:<br>$$W = q (V_B - V_A) = (5 \\times 10^{-6}\\text{ C}) \\times 60\\text{ V} = 300 \\times 10^{-6}\\text{ J} = 3 \\times 10^{-4}\\text{ Joule}$$<br>4. Jadi usaha yang dibutuhkan adalah $3 \\times 10^{-4}\\text{ Joule}$ (pilihan B).",
      "pitfalls": "Menjumlahkan kedua potensial ($80 + 20 = 100\\text{ V}$) atau mengurangkan secara terbalik ($20 - 80 = -60\\text{ V}$). Usaha memindahkan dari $A$ ke $B$ dihitung dari potensial akhir dikurangi potensial awal ($V_B - V_A$)."
    },
    "subTopicSlug": "energi-potensial-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi Potensial & Potensial Listrik",
    "subTopic": "Energi Potensial & Potensial Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Usaha luar ($W$) yang diperlukan untuk memindahkan muatan uji $q$ dari titik $A$ ke titik $B$ sama dengan perubahan energi potensial listriknya: $$W_{A \\to B} = q \\Delta V = q (V_B - V_A)$$."
  },
  {
    "id": "fis-lis-statis-potensial-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-potensial",
    "category": "Energi Potensial Listrik Dua Muatan",
    "difficulty": "mudah",
    "statement": "Dua buah muatan titik $q_1 = +2\\,\\mu\\text{C}$ dan $q_2 = +3\\,\\mu\\text{C}$ terpisah pada jarak $30\\text{ cm}$ di udara. Jika konstanta Coulomb $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$, energi potensial listrik dari pasangan kedua muatan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}06\\text{ Joule}$",
      "$0{,}18\\text{ Joule}$",
      "$0{,}54\\text{ Joule}$",
      "$1{,}8\\text{ Joule}$",
      "$5{,}4\\text{ Joule}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Energi potensial elektrostatik ($E_p$) dari sistem dua muatan titik $q_1$ dan $q_2$ yang berjarak $r$ dirumuskan sebagai:<br>$$E_p = k \\frac{q_1 q_2}{r}$$",
      "steps": "1. Konversikan ke satuan SI:<br>$$q_1 = 2 \\times 10^{-6}\\text{ C}$$<br>$$q_2 = 3 \\times 10^{-6}\\text{ C}$$<br>$$r = 30\\text{ cm} = 0{,}3\\text{ m} = 3 \\times 10^{-1}\\text{ m}$$<br>2. Hitung energi potensial listrik:<br>$$E_p = (9 \\times 10^9) \\times \\frac{(2 \\times 10^{-6}) \\times (3 \\times 10^{-6})}{3 \\times 10^{-1}} = 9 \\times 10^9 \\times \\frac{6 \\times 10^{-12}}{3 \\times 10^{-1}}$$<br>$$E_p = 9 \\times 10^9 \\times 2 \\times 10^{-11} = 18 \\times 10^{-2} = 0{,}18\\text{ Joule}$$<br>3. Jadi energi potensial listrik sistem adalah $0{,}18\\text{ Joule}$ (pilihan B).",
      "pitfalls": "Tertukar dengan rumus gaya Coulomb $k \\frac{q_1 q_2}{r^2}$ yang membagi dengan kuadrat jarak $r^2$. Pada energi potensial listrik, penyebutnya hanya berjarak $r$ (pangkat satu)."
    },
    "subTopicSlug": "energi-potensial-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi Potensial & Potensial Listrik",
    "subTopic": "Energi Potensial & Potensial Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Energi potensial elektrostatik ($E_p$) dari sistem dua muatan titik $q_1$ dan $q_2$ yang berjarak $r$ dirumuskan sebagai: $$E_p = k \\frac{q_1 q_2}{r}$$. **Tips:** Tertukar dengan rumus gaya Coulomb $k \\frac{q_1 q_2}{r^2}$ yang membagi dengan kuadrat jarak $r^2$."
  },
  {
    "id": "fis-lis-statis-potensial-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-potensial",
    "category": "Potensial Listrik Bola Konduktor Bermuatan",
    "difficulty": "mudah",
    "statement": "Sebuah bola konduktor memiliki jari-jari $R = 15\\text{ cm}$ dan diberi muatan listrik $+6\\,\\mu\\text{C}$. Jika potensial listrik tepat di permukaan bola tersebut adalah $V_0$, maka potensial listrik pada suatu titik di dalam rongga bola yang berjarak $5\\text{ cm}$ dari pusat bola adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$\\frac{1}{3}V_0$",
      "$\\frac{1}{9}V_0$",
      "$V_0$",
      "$3V_0$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Di seluruh bagian dalam bola konduktor elektrostatik, kuat medan listrik bernilai nol ($E = 0$). Karena $E = -\\frac{dV}{dr} = 0$, maka potensial listrik $V$ bernilai konstan di seluruh bagian dalam dan sama persis dengan potensial di permukaan kulit bola:<br>$$V_{\\text{dalam}} = V_{\\text{permukaan}} = V_0 = k\\frac{Q}{R}$$",
      "steps": "1. Titik pengamatan berada pada jarak $r = 5\\text{ cm} < R = 15\\text{ cm}$ (di dalam konduktor).<br>2. Karena kuat medan listrik di dalam konduktor adalah nol, tidak ada usaha yang diperlukan untuk memindahkan muatan dari permukaan ke titik mana pun di dalam bola.<br>3. Akibatnya, seluruh volume dalam konduktor merupakan wilayah ekuipotensial dengan nilai potensial sama dengan potensial permukaannya, yaitu $V_0$.<br>4. Jadi potensial di titik tersebut adalah $V_0$ (pilihan D).",
      "pitfalls": "Siswa sering mengacaukan potensial listrik dengan kuat medan listrik. Kuat medan listrik di dalam bola konduktor memang bernilai nol ($E = 0$), namun potensial listriknya tidak nol melainkan sama dengan potensial di kulit ($V = V_0$)."
    },
    "subTopicSlug": "energi-potensial-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi Potensial & Potensial Listrik",
    "subTopic": "Energi Potensial & Potensial Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Di seluruh bagian dalam bola konduktor elektrostatik, kuat medan listrik bernilai nol ($E = 0$). Karena $E = -\\frac{dV}{dr} = 0$, maka potensial listrik $V$ bernilai konstan di seluruh bagian dalam dan sama persis dengan potensial di permukaan kulit bola: $$V_{\\text{dalam}} = V_{\\text{permukaan}} = V_0 = k\\frac{Q}{R}$$. **Tips:** Siswa sering mengacaukan potensial listrik dengan kuat medan listrik."
  },
  {
    "id": "fis-lis-statis-potensial-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-potensial",
    "category": "Letak Titik dengan Potensial Listrik Nol",
    "difficulty": "sedang",
    "statement": "Dua buah muatan titik $q_A = +6\\,\\mu\\text{C}$ dan $q_B = -2\\,\\mu\\text{C}$ terpisah sejauh $16\\text{ cm}$ di udara. Titik $P$ terletak pada segmen garis hubung di antara kedua muatan tersebut. Jika potensial listrik total di titik $P$ bernilai nol ($V_P = 0$), jarak titik $P$ dari muatan $q_A$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ cm}$",
      "$8\\text{ cm}$",
      "$10\\text{ cm}$",
      "$12\\text{ cm}$",
      "$14\\text{ cm}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Potensial listrik adalah besaran skalar, sehingga potensial total di titik $P$ merupakan penjumlahan aljabar biasa dari potensial yang dihasilkan oleh masing-masing muatan:<br>$$V_P = V_A + V_B = k \\frac{q_A}{r_A} + k \\frac{q_B}{r_B} = 0$$",
      "steps": "1. Misalkan jarak titik $P$ dari $q_A$ adalah $x$, maka jarak $P$ dari $q_B$ adalah $16 - x$.<br>2. Masukkan ke dalam persamaan potensial total bernilai nol:<br>$$k \\frac{+6}{x} + k \\frac{-2}{16 - x} = 0 \\implies \\frac{6}{x} = \\frac{2}{16 - x}$$<br>3. Sederhanakan dengan membagi kedua pembilang dengan 2:<br>$$\\frac{3}{x} = \\frac{1}{16 - x}$$<br>4. Lakukan perkalian silang:<br>$$3(16 - x) = x \\implies 48 - 3x = x \\implies 4x = 48 \\implies x = 12\\text{ cm}$$<br>5. Jadi jarak titik $P$ dari muatan $q_A$ adalah $12\\text{ cm}$ (pilihan D).",
      "pitfalls": "Siswa sering mengkuadratkan jaraknya seperti pada perhitungan medan listrik ($E=0$). Ingat bahwa potensial berbanding lurus dengan $r$ pangkat satu, bukan $r^2$."
    },
    "subTopicSlug": "energi-potensial-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi Potensial & Potensial Listrik",
    "subTopic": "Energi Potensial & Potensial Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Potensial listrik adalah besaran skalar, sehingga potensial total di titik $P$ merupakan penjumlahan aljabar biasa dari potensial yang dihasilkan oleh masing-masing muatan: $$V_P = V_A + V_B = k \\frac{q_A}{r_A} + k \\frac{q_B}{r_B} = 0$$."
  },
  {
    "id": "fis-lis-statis-potensial-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-potensial",
    "category": "Kekekalan Energi Mekanik Partikel Bermuatan",
    "difficulty": "sedang",
    "statement": "Sebuah proton bermassa $m = 1{,}6 \\times 10^{-27}\\text{ kg}$ dan bermuatan $+e = 1{,}6 \\times 10^{-19}\\text{ C}$ mula-mula diam, kemudian dipercepat melewati beda potensial listrik sebesar $\\Delta V = 800\\text{ Volt}$. Kelajuan akhir proton setelah melewati beda potensial tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2 \\times 10^5\\text{ m/s}$",
      "$4 \\times 10^5\\text{ m/s}$",
      "$8 \\times 10^5\\text{ m/s}$",
      "$1{,}6 \\times 10^6\\text{ m/s}$",
      "$4 \\times 10^6\\text{ m/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Berdasarkan hukum kekekalan energi mekanik, energi potensial listrik yang hilang diubah seluruhnya menjadi energi kinetik partikel:<br>$$q \\Delta V = \\Delta E_k = \\frac{1}{2} m v^2 \\implies v = \\sqrt{\\frac{2 q \\Delta V}{m}}$$",
      "steps": "1. Identifikasi besaran partikel dan potensial:<br>$$q = 1{,}6 \\times 10^{-19}\\text{ C}$$<br>$$m = 1{,}6 \\times 10^{-27}\\text{ kg}$$<br>$$\\Delta V = 800\\text{ V}$$<br>2. Hitung energi kinetik yang diperoleh:<br>$$E_k = q \\Delta V = (1{,}6 \\times 10^{-19}\\text{ C}) \\times 800\\text{ V} = 1{,}28 \\times 10^{-16}\\text{ Joule}$$<br>3. Hitung kelajuan akhir proton:<br>$$v = \\sqrt{\\frac{2 \\times 1{,}28 \\times 10^{-16}\\text{ J}}{1{,}6 \\times 10^{-27}\\text{ kg}}} = \\sqrt{\\frac{2{,}56 \\times 10^{-16}}{1{,}6 \\times 10^{-27}}} = \\sqrt{1{,}6 \\times 10^{11}} = \\sqrt{16 \\times 10^{10}} = 4 \\times 10^5\\text{ m/s}$$<br>4. Jadi kelajuan akhir proton adalah $4 \\times 10^5\\text{ m/s}$ (pilihan B).",
      "pitfalls": "Lupa menarik akar kuadrat setelah menghitung $v^2 = 16 \\times 10^{10}$, atau lupa mengalikan angka dua dari faktor $\\frac{1}{2}mv^2$ saat mencari $v$."
    },
    "subTopicSlug": "energi-potensial-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi Potensial & Potensial Listrik",
    "subTopic": "Energi Potensial & Potensial Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Berdasarkan hukum kekekalan energi mekanik, energi potensial listrik yang hilang diubah seluruhnya menjadi energi kinetik partikel: $$q \\Delta V = \\Delta E_k = \\frac{1}{2} m v^2 \\implies v = \\sqrt{\\frac{2 q \\Delta V}{m}}$$."
  },
  {
    "id": "fis-lis-statis-potensial-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-potensial",
    "category": "Hubungan Kuat Medan Listrik dan Beda Potensial Homogen",
    "difficulty": "sedang",
    "statement": "Dua keping logam sejajar yang terpisah pada jarak $d = 4\\text{ cm}$ diberi beda potensial listrik sebesar $120\\text{ Volt}$. Jika medan listrik di antara kedua keping dianggap homogen, besar kuat medan listrik di antara keping dan usaha yang dilakukan medan listrik untuk memindahkan elektron ($q = -1{,}6 \\times 10^{-19}\\text{ C}$) sejauh $1\\text{ cm}$ searah medan listrik adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3.000\\text{ V/m}$ dan $-4{,}8 \\times 10^{-18}\\text{ J}$",
      "$3.000\\text{ V/m}$ dan $+4{,}8 \\times 10^{-18}\\text{ J}$",
      "$4.800\\text{ V/m}$ dan $-1{,}6 \\times 10^{-18}\\text{ J}$",
      "$4.800\\text{ V/m}$ dan $+1{,}6 \\times 10^{-18}\\text{ J}$",
      "$30\\text{ V/m}$ dan $-4{,}8 \\times 10^{-19}\\text{ J}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hubungan antara kuat medan listrik homogen $E$ dan beda potensial antar pelat $\\Delta V$ adalah $E = \\frac{\\Delta V}{d}$. Usaha oleh gaya medan listrik adalah $W = \\vec{F} \\cdot \\Delta \\vec{s} = q \\vec{E} \\cdot \\Delta \\vec{s}$.",
      "steps": "1. Konversikan jarak pelat: $d = 4\\text{ cm} = 0{,}04\\text{ m}$.<br>2. Hitung kuat medan listrik homogen:<br>$$E = \\frac{\\Delta V}{d} = \\frac{120\\text{ V}}{0{,}04\\text{ m}} = 3.000\\text{ V/m}$$<br>3. Hitung gaya elektrostatik pada elektron ($q = -1{,}6 \\times 10^{-19}\\text{ C}$):<br>$$F = q E = (-1{,}6 \\times 10^{-19}\\text{ C}) \\times 3.000\\text{ N/C} = -4{,}8 \\times 10^{-16}\\text{ N}$$<br>(Tanda minus menunjukkan gaya elektrostatik berlawanan arah dengan arah medan listrik).<br>4. Elektron digerakkan sejauh $\\Delta s = 1\\text{ cm} = 0{,}01\\text{ m}$ searah medan listrik. Hitung usaha medan listrik:<br>$$W = F \\times \\Delta s = (-4{,}8 \\times 10^{-16}\\text{ N}) \\times 0{,}01\\text{ m} = -4{,}8 \\times 10^{-18}\\text{ Joule}$$<br>5. Jadi kuat medan adalah $3.000\\text{ V/m}$ dan usaha medan listrik bernilai $-4{,}8 \\times 10^{-18}\\text{ J}$ (pilihan A).",
      "pitfalls": "Lupa memperhatikan tanda aljabar muatan elektron. Karena muatan elektron negatif, saat elektron dipaksa bergerak searah medan listrik, medan listrik melakukan usaha negatif ($W < 0$)."
    },
    "subTopicSlug": "energi-potensial-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi Potensial & Potensial Listrik",
    "subTopic": "Energi Potensial & Potensial Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Hubungan antara kuat medan listrik homogen $E$ dan beda potensial antar pelat $\\Delta V$ adalah $E = \\frac{\\Delta V}{d}$. Usaha oleh gaya medan listrik adalah $W = \\vec{F} \\cdot \\Delta \\vec{s} = q \\vec{E} \\cdot \\Delta \\vec{s}$. **Tips:** Lupa memperhatikan tanda aljabar muatan elektron."
  },
  {
    "id": "fis-lis-statis-potensial-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-potensial",
    "category": "Energi Potensial Konfigurasi Tiga Muatan Segitiga",
    "difficulty": "sedang",
    "statement": "Tiga muatan titik $q_1 = +2\\,\\mu\\text{C}$, $q_2 = +2\\,\\mu\\text{C}$, dan $q_3 = -4\\,\\mu\\text{C}$ diletakkan pada titik-titik sudut sebuah segitiga sama sisi yang memiliki panjang sisi $a = 20\\text{ cm}$ di udara ($k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$). Energi potensial elektrostatik total dari sistem konfigurasi ketiga muatan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+0{,}54\\text{ Joule}$",
      "$-0{,}54\\text{ Joule}$",
      "$-0{,}36\\text{ Joule}$",
      "$+0{,}18\\text{ Joule}$",
      "$-1{,}08\\text{ Joule}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Energi potensial elektrostatik total dari sistem多-muatan dihitung dari jumlahan energi potensial setiap pasangan muatan yang unik:<br>$$E_{p,\\text{total}} = k \\left(\\frac{q_1 q_2}{r_{12}} + \\frac{q_1 q_3}{r_{13}} + \\frac{q_2 q_3}{r_{23}}\\right)$$",
      "steps": "1. Panjang sisi segitiga sama sisi adalah $r_{12} = r_{13} = r_{23} = a = 20\\text{ cm} = 0{,}2\\text{ m}$.<br>2. Hitung perkalian pasangan muatan:<br>$$q_1 q_2 = (+2) \\times (+2) \\times 10^{-12} = +4 \\times 10^{-12}\\text{ C}^2$$<br>$$q_1 q_3 = (+2) \\times (-4) \\times 10^{-12} = -8 \\times 10^{-12}\\text{ C}^2$$<br>$$q_2 q_3 = (+2) \\times (-4) \\times 10^{-12} = -8 \\times 10^{-12}\\text{ C}^2$$<br>3. Jumlah aljabar pasangan muatan:<br>$$\\Sigma(q_i q_j) = (+4 - 8 - 8) \\times 10^{-12} = -12 \\times 10^{-12}\\text{ C}^2$$<br>4. Hitung energi potensial total:<br>$$E_{p,\\text{total}} = \\frac{k}{a} \\Sigma(q_i q_j) = \\frac{9 \\times 10^9}{0{,}2} \\times (-12 \\times 10^{-12}) = 45 \\times 10^9 \\times (-12 \\times 10^{-12}) = -0{,}54\\text{ Joule}$$<br>5. Jadi energi potensial sistem bernilai $-0{,}54\\text{ Joule}$ (pilihan B).",
      "pitfalls": "Hanya menghitung dua pasang interaksi dan melupakan pasangan ketiga, atau mengabaikan tanda minus pada muatan $q_3$."
    },
    "subTopicSlug": "energi-potensial-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi Potensial & Potensial Listrik",
    "subTopic": "Energi Potensial & Potensial Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Energi potensial elektrostatik total dari sistem多-muatan dihitung dari jumlahan energi potensial setiap pasangan muatan yang unik: $$E_{p,\\text{total}} = k \\left(\\frac{q_1 q_2}{r_{12}} + \\frac{q_1 q_3}{r_{13}} + \\frac{q_2 q_3}{r_{23}}\\right)$$. **Tips:** Hanya menghitung dua pasang interaksi dan melupakan pasangan ketiga, atau mengabaikan tanda minus pada muatan $q_3$."
  },
  {
    "id": "fis-lis-statis-potensial-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-potensial",
    "category": "Beda Potensial Dua Kulit Bola Konduktor Konsentris",
    "difficulty": "sedang",
    "statement": "Dua kulit bola konduktor sepusat (konsentris) masing-masing memiliki jari-jari $R_1$ (kulit dalam) dan $R_2$ (kulit luar) dengan $R_1 < R_2$. Kulit dalam diberi muatan $+Q$ dan kulit luar diberi muatan $-Q$. Beda potensial listrik antara kulit dalam dan kulit luar ($V_1 - V_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$k Q \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$",
      "$k Q \\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right)$",
      "$k \\frac{Q}{R_1 - R_2}$",
      "$k \\frac{Q}{R_1}$",
      "$0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Potensial di setiap titik merupakan superposisi dari kontribusi kedua kulit bola bermuatan. Untuk kulit bermuatan $q$ dan jari-jari $R$, potensial di titik berjarak $r \\le R$ adalah $k\\frac{q}{R}$, sedangkan untuk $r \\ge R$ adalah $k\\frac{q}{r}$.",
      "steps": "1. Potensial pada kulit dalam ($r = R_1$):<br>- Dari muatan $+Q$ sendiri: $V_{1,1} = k\\frac{+Q}{R_1}$<br>- Dari kulit luar $-Q$ (karena $R_1 < R_2$, berada di dalam): $V_{1,2} = k\\frac{-Q}{R_2}$<br>Maka: $V_1 = k Q \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$<br>2. Potensial pada kulit luar ($r = R_2$):<br>- Dari kulit dalam $+Q$ (karena $R_2 > R_1$, berada di luar): $V_{2,1} = k\\frac{+Q}{R_2}$<br>- Dari kulit luar sendiri: $V_{2,2} = k\\frac{-Q}{R_2}$<br>Maka: $V_2 = k\\frac{+Q}{R_2} + k\\frac{-Q}{R_2} = 0$<br>3. Hitung beda potensial ($V_1 - V_2$):<br>$$V_1 - V_2 = k Q \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right) - 0 = k Q \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$$<br>4. Jadi jawabannya adalah pilihan A.",
      "pitfalls": "Sering mengabaikan pengaruh potensial dari kulit luar terhadap kulit dalam, atau mengira kedua kulit saling menetralkan secara total sehingga beda potensialnya nol."
    },
    "subTopicSlug": "energi-potensial-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi Potensial & Potensial Listrik",
    "subTopic": "Energi Potensial & Potensial Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Potensial di setiap titik merupakan superposisi dari kontribusi kedua kulit bola bermuatan. Untuk kulit bermuatan $q$ dan jari-jari $R$, potensial di titik berjarak $r \\le R$ adalah $k\\frac{q}{R}$, sedangkan untuk $r \\ge R$ adalah $k\\frac{q}{r}$."
  },
  {
    "id": "sup-fis-lis-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-statis-potensial",
    "category": "Potensial Listrik & Usaha Muatan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Usaha luar yang diperlukan untuk memindahkan sebuah muatan uji positif $q = 5\\,\\mu\\text{C}$ dari titik $A$ yang berpotensial listrik $20\\text{ V}$ ke titik $B$ yang berpotensial listrik $80\\text{ V}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3 \\times 10^{-4}\\text{ Joule}$",
      "$1 \\times 10^{-4}\\text{ Joule}$",
      "$4 \\times 10^{-4}\\text{ Joule}$",
      "$5 \\times 10^{-4}\\text{ Joule}$",
      "$6 \\times 10^{-4}\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Usaha dan Beda Potensial Listrik:</strong><br>Usaha untuk memindahkan muatan $q$ dari potensial $V_A$ ke $V_B$ adalah $W = q \\Delta V = q (V_B - V_A)$.</div>",
      "steps": "<ol><li>Muatan: $q = 5 \\times 10^{-6}\\text{ C}$.</li><li>Beda potensial: $\\Delta V = 80 - 20 = 60\\text{ V}$.</li><li>Usaha: $W = (5 \\times 10^{-6}) \\times 60 = 300 \\times 10^{-6} = 3 \\times 10^{-4}\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengalikan muatan dengan nilai potensial akhir saja ($5\\,\\mu\\text{C} \\times 80\\text{ V}$).</div>"
    },
    "bab": "Kelistrikan",
    "subBab": "Energi Potensial & Potensial Listrik",
    "subTopic": "Energi Potensial & Potensial Listrik",
    "chapterTitle": "Kelistrikan",
    "subChapterId": "fis-lis-statis",
    "subTopicSlug": "energi-potensial-listrik",
    "hint": "Hubungan Usaha dan Beda Potensial Listrik: Usaha untuk memindahkan muatan $q$ dari potensial $V_A$ ke $V_B$ adalah $W = q \\Delta V = q (V_B - V_A)$. **Tips:** Mengalikan muatan dengan nilai potensial akhir saja ($5\\,\\mu\\text{C} \\times 80\\text{ V}$)."
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
