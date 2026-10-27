/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Bab Kecil: Listrik Statis (fis-lis-statis)
 * Sub-Bab: Keping Sejajar (fis-lis-statis-keping)
 * Slug: keping-sejajar
 * Indikator: Medan listrik homogen antara dua keping konduktor sejajar dan kapasitas kapasitor keping.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-statis-keping";
  const subTopicSlug = "keping-sejajar";
  const questions = [
  {
    "id": "fis-lis-statis-keping-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-keping",
    "category": "Faktor Penentu Kapasitansi Keping Sejajar",
    "difficulty": "mudah",
    "statement": "Kapasitas suatu kapasitor keping sejajar dapat ditingkatkan dengan cara ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Memperbesar jarak pemisah antarkeping",
      "Memperluas area permukaan keping dan menyisipkan bahan dielektrik di antara keping",
      "Mengurangi luas permukaan keping",
      "Meningkatkan beda potensial sumber tegangan",
      "Mengurangi muatan listrik pada keping"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Kapasitas kapasitor keping sejajar ditentukan oleh parameter geometri dan medium pengisi celah antarkeping:<br>$$C = \\frac{\\varepsilon_r \\varepsilon_0 A}{d}$$<br>di mana $\\varepsilon_r$ adalah konstanta dielektrik relatif medium, $A$ adalah luas penampang keping, dan $d$ adalah jarak pemisah antarkeping.",
      "steps": "1. Tinjau faktor-faktor pada rumus $C = \\frac{\\varepsilon_r \\varepsilon_0 A}{d}$:<br>- $C$ berbanding lurus dengan luas penampang $A$. Memperbesar $A$ memperbesar $C$.<br>- $C$ berbanding lurus dengan konstanta dielektrik $\\varepsilon_r$. Menyisipkan bahan dielektrik ($\\varepsilon_r > 1$) memperbesar $C$.<br>- $C$ berbanding terbalik dengan jarak pemisah $d$. Memperkecil $d$ memperbesar $C$.<br>2. Nilai kapasitas $C$ merupakan karakteristik murni fisis keping dan tidak dipengaruhi oleh perubahan muatan $Q$ maupun beda potensial $V$.<br>3. Jadi cara yang benar adalah memperluas area permukaan keping dan menyisipkan dielektrik (pilihan B).",
      "pitfalls": "Siswa sering mengira mengubah tegangan sumber $V$ dapat mengubah kapasitas kapasitor karena rumus $C = Q/V$. Padahal jika $V$ dinaikkan, muatan $Q$ akan ikut naik secara linier sehingga nilai kapasitas $C$ tetap konstan."
    },
    "subTopicSlug": "keping-sejajar",
    "bab": "Kelistrikan",
    "subBab": "Keping Sejajar",
    "subTopic": "Keping Sejajar",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Kapasitas kapasitor keping sejajar ditentukan oleh parameter geometri dan medium pengisi celah antarkeping: $$C = \\frac{\\varepsilon_r \\varepsilon_0 A}{d}$$ di mana $\\varepsilon_r$ adalah konstanta dielektrik relatif medium, $A$ adalah luas penampang keping, dan $d$ adalah jarak pemisah antarkeping. **Tips:** Siswa sering mengira mengubah tegangan sumber $V$ dapat mengubah kapasitas kapasitor karena rumus $C = Q/V$."
  },
  {
    "id": "fis-lis-statis-keping-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-keping",
    "category": "Hubungan Kapasitansi, Beda Potensial, dan Muatan",
    "difficulty": "mudah",
    "statement": "Sebuah kapasitor dengan kapasitas $50\\,\\mu\\text{F}$ dihubungkan dengan sumber tegangan arus searah $12\\text{ Volt}$. Muatan listrik yang tersimpan pada salah satu keping kapasitor tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$60\\,\\mu\\text{C}$",
      "$300\\,\\mu\\text{C}$",
      "$600\\,\\mu\\text{C}$",
      "$1.200\\,\\mu\\text{C}$",
      "$6.000\\,\\mu\\text{C}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Hubungan mendasar antara kapasitas kapasitor ($C$), beda potensial listrik ($V$), dan muatan listrik yang tersimpan ($Q$) dirumuskan sebagai:<br>$$Q = C V$$",
      "steps": "1. Identifikasi data: $C = 50\\,\\mu\\text{F}$ dan $V = 12\\text{ Volt}$.<br>2. Hitung muatan kapasitor:<br>$$Q = C \\times V = 50\\,\\mu\\text{F} \\times 12\\text{ V} = 600\\,\\mu\\text{C}$$<br>3. Jadi muatan yang tersimpan pada salah satu keping adalah $600\\,\\mu\\text{C}$ (pilihan C).",
      "pitfalls": "Kesalahan membagi alih-alih mengalikan ($50 / 12$), atau salah mengalikan nilai angka."
    },
    "subTopicSlug": "keping-sejajar",
    "bab": "Kelistrikan",
    "subBab": "Keping Sejajar",
    "subTopic": "Keping Sejajar",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Hubungan mendasar antara kapasitas kapasitor ($C$), beda potensial listrik ($V$), dan muatan listrik yang tersimpan ($Q$) dirumuskan sebagai: $$Q = C V$$. **Tips:** Kesalahan membagi alih-alih mengalikan ($50 / 12$), atau salah mengalikan nilai angka."
  },
  {
    "id": "fis-lis-statis-keping-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-keping",
    "category": "Pengaruh Penyisipan Bahan Dielektrik",
    "difficulty": "mudah",
    "statement": "Suatu kapasitor keping sejajar di udara memiliki kapasitas $C_0 = 8\\,\\mu\\text{F}$. Jika ruang di antara kedua keping diisi penuh dengan zat dielektrik mika yang memiliki konstanta dielektrik relatif $K = 5$, kapasitas kapasitor tersebut menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}6\\,\\mu\\text{F}$",
      "$8\\,\\mu\\text{F}$",
      "$13\\,\\mu\\text{F}$",
      "$40\\,\\mu\\text{F}$",
      "$200\\,\\mu\\text{F}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Penyisipan bahan dielektrik dengan konstanta dielektrik relatif $K$ (atau $\\varepsilon_r$) melipatgandakan nilai kapasitas kapasitor menurut hubungan:<br>$$C = K \\cdot C_0$$",
      "steps": "1. Kapasitas awal kapasitor di udara: $C_0 = 8\\,\\mu\\text{F}$.<br>2. Konstanta dielektrik mika: $K = 5$.<br>3. Hitung kapasitas setelah disisipi dielektrik:<br>$$C = K \\times C_0 = 5 \\times 8\\,\\mu\\text{F} = 40\\,\\mu\\text{F}$$<br>4. Jadi kapasitas kapasitor menjadi $40\\,\\mu\\text{F}$ (pilihan D).",
      "pitfalls": "Membagi kapasitas awal dengan konstanta dielektrik ($8 / 5 = 1{,}6\\,\\mu\\text{F}$). Dielektrik selalu meningkatkan kapasitas kapasitor, bukan menurunkannya."
    },
    "subTopicSlug": "keping-sejajar",
    "bab": "Kelistrikan",
    "subBab": "Keping Sejajar",
    "subTopic": "Keping Sejajar",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Penyisipan bahan dielektrik dengan konstanta dielektrik relatif $K$ (atau $\\varepsilon_r$) melipatgandakan nilai kapasitas kapasitor menurut hubungan: $$C = K \\cdot C_0$$."
  },
  {
    "id": "fis-lis-statis-keping-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-keping",
    "category": "Kapasitas Pengganti Rangkaian Paralel dan Seri Sederhana",
    "difficulty": "mudah",
    "statement": "Dua buah kapasitor masing-masing memiliki kapasitas $C_1 = 3\\,\\mu\\text{F}$ dan $C_2 = 6\\,\\mu\\text{F}$. Kapasitas pengganti jika kedua kapasitor tersebut dirangkai secara paralel ($C_p$) dan secara seri ($C_s$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$9\\,\\mu\\text{F}$ dan $2\\,\\mu\\text{F}$",
      "$2\\,\\mu\\text{F}$ dan $9\\,\\mu\\text{F}$",
      "$9\\,\\mu\\text{F}$ dan $4{,}5\\,\\mu\\text{F}$",
      "$4{,}5\\,\\mu\\text{F}$ dan $2\\,\\mu\\text{F}$",
      "$18\\,\\mu\\text{F}$ dan $3\\,\\mu\\text{F}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Aturan penggabungan kapasitor berkebalikan dengan resistor:<br>- Rangkaian paralel: $C_p = C_1 + C_2$<br>- Rangkaian seri: $\\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2} \\implies C_s = \\frac{C_1 C_2}{C_1 + C_2}$",
      "steps": "1. Hitung kapasitas pengganti paralel ($C_p$):<br>$$C_p = C_1 + C_2 = 3\\,\\mu\\text{F} + 6\\,\\mu\\text{F} = 9\\,\\mu\\text{F}$$<br>2. Hitung kapasitas pengganti seri ($C_s$):<br>$$\\frac{1}{C_s} = \\frac{1}{3} + \\frac{1}{6} = \\frac{2 + 1}{6} = \\frac{3}{6} = \\frac{1}{2} \\implies C_s = 2\\,\\mu\\text{F}$$<br>3. Jadi kapasitas pengganti berturut-turut adalah $9\\,\\mu\\text{F}$ dan $2\\,\\mu\\text{F}$ (pilihan A).",
      "pitfalls": "Tertukar dengan rumus resistor, di mana seri dijumlahkan dan paralel dihitung kebalikannya. Pada kapasitor, paralel langsung dijumlahkan dan seri dihitung kebalikannya."
    },
    "subTopicSlug": "keping-sejajar",
    "bab": "Kelistrikan",
    "subBab": "Keping Sejajar",
    "subTopic": "Keping Sejajar",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Aturan penggabungan kapasitor berkebalikan dengan resistor: - Rangkaian paralel: $C_p = C_1 + C_2$ - Rangkaian seri: $\\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2} \\implies C_s = \\frac{C_1 C_2}{C_1 + C_2}$. **Tips:** Tertukar dengan rumus resistor, di mana seri dijumlahkan dan paralel dihitung kebalikannya."
  },
  {
    "id": "fis-lis-statis-keping-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-keping",
    "category": "Energi Tersimpan pada Kapasitor",
    "difficulty": "mudah",
    "statement": "Sebuah kapasitor berkapasitas $20\\,\\mu\\text{F}$ dimuati oleh baterai sehingga memiliki beda potensial sebesar $100\\text{ Volt}$. Besar energi elektrostatik yang tersimpan di dalam kapasitor tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}01\\text{ Joule}$",
      "$0{,}05\\text{ Joule}$",
      "$0{,}10\\text{ Joule}$",
      "$0{,}20\\text{ Joule}$",
      "$1{,}00\\text{ Joule}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Energi elektrostatik yang tersimpan dalam medan listrik kapasitor dirumuskan sebagai:<br>$$W = \\frac{1}{2} C V^2$$",
      "steps": "1. Konversikan kapasitas ke Farad: $C = 20\\,\\mu\\text{F} = 20 \\times 10^{-6}\\text{ F} = 2 \\times 10^{-5}\\text{ F}$.<br>2. Tegangan listrik: $V = 100\\text{ V} = 10^2\\text{ V}$.<br>3. Hitung energi yang tersimpan:<br>$$W = \\frac{1}{2} C V^2 = \\frac{1}{2} \\times (20 \\times 10^{-6}\\text{ F}) \\times (100\\text{ V})^2 = (10 \\times 10^{-6}) \\times 10.000 = 0{,}10\\text{ Joule}$$<br>4. Jadi energi yang tersimpan adalah $0{,}10\\text{ Joule}$ (pilihan C).",
      "pitfalls": "Lupa menyertakan faktor $\\frac{1}{2}$ sehingga menghitung $C V^2 = 0{,}20\\text{ J}$, atau lupa mengkuadratkan tegangan $V$."
    },
    "subTopicSlug": "keping-sejajar",
    "bab": "Kelistrikan",
    "subBab": "Keping Sejajar",
    "subTopic": "Keping Sejajar",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Energi elektrostatik yang tersimpan dalam medan listrik kapasitor dirumuskan sebagai: $$W = \\frac{1}{2} C V^2$$."
  },
  {
    "id": "fis-lis-statis-keping-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-keping",
    "category": "Pengaruh Penyisipan Dielektrik pada Kondisi Baterai Dilepas",
    "difficulty": "sedang",
    "statement": "Sebuah kapasitor keping sejajar dihubungkan ke sumber tegangan arus searah $V_0$ hingga termuati penuh dengan muatan $Q_0$, kemudian sumber tegangan dilepaskan (diputus). Setelah itu, ke dalam celah di antara kedua keping disisipkan bahan dielektrik dengan konstanta relatif $K = 3$ hingga memenuhi seluruh ruang. Perubahan yang terjadi pada kapasitas ($C$), beda potensial ($V$), dan energi elektrostatik ($W$) yang tersimpan pada kapasitor adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$C$ menjadi $3C_0$, $V$ menjadi $\\frac{1}{3}V_0$, dan $W$ menjadi $\\frac{1}{3}W_0$",
      "$C$ menjadi $3C_0$, $V$ tetap $V_0$, dan $W$ menjadi $3W_0$",
      "$C$ menjadi $3C_0$, $V$ menjadi $3V_0$, dan $W$ menjadi $9W_0$",
      "$C$ menjadi $\\frac{1}{3}C_0$, $V$ menjadi $3V_0$, dan $W$ menjadi $3W_0$",
      "$C$ menjadi $\\frac{1}{3}C_0$, $V$ menjadi $\\frac{1}{3}V_0$, dan $W$ tetap $W_0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Saat kapasitor dilepas dari baterai, muatan listrik pada keping terisolasi sehingga nilainya kekal konstan ($Q = Q_0$). Penyisipan bahan dielektrik dengan konstanta $K$ mengubah kapasitas menjadi $C = K C_0$, beda potensial menjadi $V = \\frac{Q}{C} = \\frac{V_0}{K}$, dan energi menjadi $W = \\frac{Q^2}{2C} = \\frac{W_0}{K}$.",
      "steps": "1. Karena sumber tegangan dilepas, muatan tidak memiliki jalur untuk keluar atau masuk, sehingga $Q = Q_0$ (konstan).<br>2. Kapasitas baru meningkat sebanding konstanta dielektrik:<br>$$C = K C_0 = 3C_0$$<br>3. Beda potensial baru dihitung dari $V = \\frac{Q}{C}$:<br>$$V = \\frac{Q_0}{3C_0} = \\frac{1}{3} V_0$$<br>4. Energi elektrostatik tersimpan dihitung dari $W = \\frac{Q^2}{2C}$:<br>$$W = \\frac{Q_0^2}{2(3C_0)} = \\frac{1}{3} \\left(\\frac{Q_0^2}{2C_0}\\right) = \\frac{1}{3} W_0$$<br>5. Jadi pilihan yang benar adalah A.",
      "pitfalls": "Sering tertukar antara kasus baterai dilepas ($Q$ konstan) dengan kasus baterai tetap terhubung ($V$ konstan). Jika baterai tetap terhubung, $V$ tetap dan $W$ justru naik menjadi $3W_0$."
    },
    "subTopicSlug": "keping-sejajar",
    "bab": "Kelistrikan",
    "subBab": "Keping Sejajar",
    "subTopic": "Keping Sejajar",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Saat kapasitor dilepas dari baterai, muatan listrik pada keping terisolasi sehingga nilainya kekal konstan ($Q = Q_0$). Penyisipan bahan dielektrik dengan konstanta $K$ mengubah kapasitas menjadi $C = K C_0$, beda potensial menjadi $V = \\frac{Q}{C} = \\frac{V_0}{K}$, dan energi menjadi $W = \\frac{Q^2}{2C} = \\frac{W_0}{K}$. **Tips:** Sering tertukar antara kasus baterai dilepas ($Q$ konstan) dengan kasus baterai tetap terhubung ($V$ konstan)."
  },
  {
    "id": "fis-lis-statis-keping-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-keping",
    "category": "Tegangan dan Muatan pada Rangkaian Gabungan Kapasitor",
    "difficulty": "sedang",
    "statement": "Tiga buah kapasitor $C_1 = 3\\,\\mu\\text{F}$, $C_2 = 2\\,\\mu\\text{F}$, dan $C_3 = 4\\,\\mu\\text{F}$ dirangkai sebagai berikut: $C_2$ dan $C_3$ dirangkai secara paralel, kemudian kombinasi paralel tersebut dirangkai secara seri dengan $C_1$. Ujung-ujung rangkaian gabungan tersebut dihubungkan ke sumber tegangan searah $18\\text{ Volt}$. Beda potensial pada kapasitor $C_1$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6\\text{ Volt}$",
      "$9\\text{ Volt}$",
      "$12\\text{ Volt}$",
      "$15\\text{ Volt}$",
      "$18\\text{ Volt}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada rangkaian kombinasi seri-paralel, tentukan terlebih dahulu kapasitas pengganti total untuk memperoleh muatan total yang dialirkan sumber. Muatan pada komponen yang tersusun seri sama dengan muatan total.",
      "steps": "1. Hitung kapasitas pengganti paralel $C_2$ dan $C_3$:<br>$$C_p = C_2 + C_3 = 2\\,\\mu\\text{F} + 4\\,\\mu\\text{F} = 6\\,\\mu\\text{F}$$<br>2. Hitung kapasitas total rangkaian ($C_1 = 3\\,\\mu\\text{F}$ seri dengan $C_p = 6\\,\\mu\\text{F}$):<br>$$C_{\\text{total}} = \\frac{C_1 \\times C_p}{C_1 + C_p} = \\frac{3 \\times 6}{3 + 6} = \\frac{18}{9} = 2\\,\\mu\\text{F}$$<br>3. Hitung muatan total yang ditarik dari sumber tegangan $V = 18\\text{ V}$:<br>$$Q_{\\text{total}} = C_{\\text{total}} \\times V = 2\\,\\mu\\text{F} \\times 18\\text{ V} = 36\\,\\mu\\text{C}$$<br>4. Karena $C_1$ terangkai seri pada cabang utama, muatan pada $C_1$ adalah $Q_1 = Q_{\\text{total}} = 36\\,\\mu\\text{C}$.<br>5. Hitung beda potensial pada kapasitor $C_1$:<br>$$V_1 = \\frac{Q_1}{C_1} = \\frac{36\\,\\mu\\text{C}}{3\\,\\mu\\text{F}} = 12\\text{ Volt}$$<br>6. Jadi beda potensial pada $C_1$ adalah $12\\text{ Volt}$ (pilihan C).",
      "pitfalls": "Membagi tegangan sama rata (misal masing-masing 9 Volt) tanpa memperhitungkan perbandingan invers kapasitas pada hubungan seri ($V_1 : V_p = C_p : C_1 = 6 : 3 = 2 : 1$)."
    },
    "subTopicSlug": "keping-sejajar",
    "bab": "Kelistrikan",
    "subBab": "Keping Sejajar",
    "subTopic": "Keping Sejajar",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Pada rangkaian kombinasi seri-paralel, tentukan terlebih dahulu kapasitas pengganti total untuk memperoleh muatan total yang dialirkan sumber. Muatan pada komponen yang tersusun seri sama dengan muatan total."
  },
  {
    "id": "fis-lis-statis-keping-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-keping",
    "category": "Gaya Tarik Elektrostatik Antarkeping Kapasitor",
    "difficulty": "sedang",
    "statement": "Suatu kapasitor keping sejajar memiliki muatan keping sebesar $+Q$ dan $-Q$. Di dalam ruang antarkeping terdapat medan listrik homogen total sebesar $E$. Besar gaya tarik elektrostatik yang dialami oleh salah satu keping akibat medan listrik yang dihasilkan oleh keping lainnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{2} Q E$",
      "$Q E$",
      "$2 Q E$",
      "$\\frac{1}{4} Q E$",
      "$\\frac{Q}{E}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Medan listrik total $E$ di antara dua keping kapasitor merupakan resultan superposisi dari medan yang dihasilkan oleh keping positif ($E_1$) dan keping negatif ($E_2$), di mana $E = E_1 + E_2 = 2E_1 \\implies E_1 = \\frac{1}{2}E$. Gaya pada salah satu keping diakibatkan oleh medan keping lainnya saja, bukan oleh medan total.",
      "steps": "1. Kuat medan listrik yang dihasilkan oleh satu keping bermuatan saja (pelat tak hingga) adalah:<br>$$E_{\\text{satu keping}} = \\frac{\\sigma}{2\\varepsilon_0} = \\frac{1}{2} E$$<br>2. Muatan pada keping yang ditarik bermagnitudo $Q$.<br>3. Gaya tarik elektrostatik antarkeping adalah:<br>$$F = Q \\times E_{\\text{satu keping}} = Q \\times \\left(\\frac{1}{2} E\\right) = \\frac{1}{2} Q E$$<br>4. Pendekatan alternatif melalui diferensial energi medan:<br>$$F = -\\frac{dW}{dd} = \\frac{d}{dd}\\left(\\frac{Q^2 d}{2 \\varepsilon_0 A}\\right) = \\frac{Q^2}{2 \\varepsilon_0 A} = \\frac{1}{2} Q \\left(\\frac{Q}{\\varepsilon_0 A}\\right) = \\frac{1}{2} Q E$$<br>5. Jadi gaya tarik elektrostatik adalah $\\frac{1}{2} Q E$ (pilihan A).",
      "pitfalls": "Kesalahan paling umum adalah langsung menggunakan rumus gaya partikel $F = Q E$, yang melupakan bahwa suatu keping tidak dapat memberikan gaya elektrostatik pada dirinya sendiri."
    },
    "subTopicSlug": "keping-sejajar",
    "bab": "Kelistrikan",
    "subBab": "Keping Sejajar",
    "subTopic": "Keping Sejajar",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Medan listrik total $E$ di antara dua keping kapasitor merupakan resultan superposisi dari medan yang dihasilkan oleh keping positif ($E_1$) dan keping negatif ($E_2$), di mana $E = E_1 + E_2 = 2E_1 \\implies E_1 = \\frac{1}{2}E$. Gaya pada salah satu keping diakibatkan oleh medan keping lainnya saja, bukan oleh medan total."
  },
  {
    "id": "fis-lis-statis-keping-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-keping",
    "category": "Kapasitor dengan Dielektrik Sebagian Tersusun Seri",
    "difficulty": "sedang",
    "statement": "Sebuah kapasitor keping sejajar memiliki luas keping $A$ dan jarak pemisah $d$. Ke dalam celah kapasitor disisipkan lempeng dielektrik dengan konstanta relatif $K = 4$ dan ketebalan $\\frac{1}{2}d$, sedangkan sisa ruang setebal $\\frac{1}{2}d$ dibiarkan berisi udara ($K = 1$). Jika kapasitas kapasitor mula-mula saat berisi udara penuh adalah $C_0$, kapasitas kapasitor setelah disisipi dielektrik tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}25 C_0$",
      "$1{,}60 C_0$",
      "$2{,}00 C_0$",
      "$2{,}50 C_0$",
      "$4{,}00 C_0$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Kapasitor yang diisi sebagian dielektrik secara paralel terhadap permukaan keping dapat dimodelkan sebagai dua buah kapasitor yang tersusun secara seri dengan ketebalan celah masing-masing:<br>$$\\frac{1}{C_{\\text{eff}}} = \\frac{1}{C_1} + \\frac{1}{C_2}$$",
      "steps": "1. Kapasitas awal udara penuh ($d$): $C_0 = \\frac{\\varepsilon_0 A}{d}$.<br>2. Lapisan pertama (dielektrik $K = 4$, tebal $d_1 = \\frac{1}{2}d$):<br>$$C_1 = \\frac{K \\varepsilon_0 A}{d/2} = \\frac{4 \\varepsilon_0 A}{d/2} = 8 \\left(\\frac{\\varepsilon_0 A}{d}\\right) = 8 C_0$$<br>3. Lapisan kedua (udara $K = 1$, tebal $d_2 = \\frac{1}{2}d$):<br>$$C_2 = \\frac{\\varepsilon_0 A}{d/2} = 2 \\left(\\frac{\\varepsilon_0 A}{d}\\right) = 2 C_0$$<br>4. Hitung kapasitas pengganti seri keduanya:<br>$$\\frac{1}{C_{\\text{eff}}} = \\frac{1}{C_1} + \\frac{1}{C_2} = \\frac{1}{8C_0} + \\frac{1}{2C_0} = \\frac{1 + 4}{8C_0} = \\frac{5}{8C_0}$$<br>$$C_{\\text{eff}} = \\frac{8}{5} C_0 = 1{,}60 C_0$$<br>5. Jadi kapasitas efektifnya menjadi $1{,}60 C_0$ (pilihan B).",
      "pitfalls": "Menjumlahkan kapasitas secara langsung seperti rangkaian paralel ($8C_0 + 2C_0 = 10C_0$), atau merata-ratakan konstanta dielektrik secara linier tanpa mempertimbangkan hubungan kebalikan jarak."
    },
    "subTopicSlug": "keping-sejajar",
    "bab": "Kelistrikan",
    "subBab": "Keping Sejajar",
    "subTopic": "Keping Sejajar",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Kapasitor yang diisi sebagian dielektrik secara paralel terhadap permukaan keping dapat dimodelkan sebagai dua buah kapasitor yang tersusun secara seri dengan ketebalan celah masing-masing: $$\\frac{1}{C_{\\text{eff}}} = \\frac{1}{C_1} + \\frac{1}{C_2}$$."
  },
  {
    "id": "fis-lis-statis-keping-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-keping",
    "category": "Energi yang Hilang pada Penggabungan Dua Kapasitor",
    "difficulty": "sedang",
    "statement": "Kapasitor $C_1 = 4\\,\\mu\\text{F}$ dimuati hingga beda potensialnya mencapai $100\\text{ Volt}$, kemudian dilepas dari sumber tegangan. Kapasitor tersebut kemudian dihubungkan secara paralel dengan kapasitor kedua $C_2 = 6\\,\\mu\\text{F}$ yang mula-mula tidak bermuatan. Energi elektrostatik yang hilang terdisipasi sebagai panas selama proses redistribusi muatan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}004\\text{ Joule}$",
      "$0{,}008\\text{ Joule}$",
      "$0{,}012\\text{ Joule}$",
      "$0{,}016\\text{ Joule}$",
      "$0{,}020\\text{ Joule}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada penggabungan dua kapasitor, muatan total kekal ($Q_{\\text{awal}} = Q_{\\text{akhir}}$), namun sebagian energi elektrostatik selalu terdisipasi menjadi panas pada kawat penghubung dan radiasi elektromagnetik:<br>$$\\Delta W = W_{\\text{awal}} - W_{\\text{akhir}}$$ ",
      "steps": "1. Muatan awal pada $C_1$:<br>$$Q = C_1 V_1 = 4\\,\\mu\\text{F} \\times 100\\text{ V} = 400\\,\\mu\\text{C}$$<br>2. Energi elektrostatik awal sistem:<br>$$W_{\\text{awal}} = \\frac{1}{2} C_1 V_1^2 = \\frac{1}{2} \\times (4 \\times 10^{-6}\\text{ F}) \\times (100\\text{ V})^2 = 0{,}02\\text{ Joule} = 20\\text{ mJ}$$<br>3. Kapasitas gabungan paralel: $C_p = C_1 + C_2 = 4 + 6 = 10\\,\\mu\\text{F}$.<br>Potensial bersama akhir:<br>$$V_f = \\frac{Q}{C_p} = \\frac{400\\,\\mu\\text{C}}{10\\,\\mu\\text{F}} = 40\\text{ Volt}$$<br>4. Energi elektrostatik akhir sistem:<br>$$W_{\\text{akhir}} = \\frac{1}{2} C_p V_f^2 = \\frac{1}{2} \\times (10 \\times 10^{-6}\\text{ F}) \\times (40\\text{ V})^2 = 5 \\times 10^{-6} \\times 1.600 = 0{,}008\\text{ Joule} = 8\\text{ mJ}$$<br>5. Hitung energi yang hilang:<br>$$\\Delta W = W_{\\text{awal}} - W_{\\text{akhir}} = 0{,}020\\text{ J} - 0{,}008\\text{ J} = 0{,}012\\text{ Joule}$$<br>6. Jadi energi yang terdisipasi adalah $0{,}012\\text{ Joule}$ (pilihan C).",
      "pitfalls": "Siswa sering menganggap bahwa karena muatan kekal, energinya juga harus kekal ($Delta W = 0$). Faktanya arus transien selama perpindahan muatan pasti mendisipasikan energi resistif $\\int I^2 R\\, dt$ yang bernilai tepat sama dengan selisih energi elektrostatik."
    },
    "subTopicSlug": "keping-sejajar",
    "bab": "Kelistrikan",
    "subBab": "Keping Sejajar",
    "subTopic": "Keping Sejajar",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Pada penggabungan dua kapasitor, muatan total kekal ($Q_{\\text{awal}} = Q_{\\text{akhir}}$), namun sebagian energi elektrostatik selalu terdisipasi menjadi panas pada kawat penghubung dan radiasi elektromagnetik: $$\\Delta W = W_{\\text{awal}} - W_{\\text{akhir}}$$."
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
