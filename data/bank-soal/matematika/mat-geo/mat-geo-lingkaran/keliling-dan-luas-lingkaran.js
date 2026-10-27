/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Lingkaran (mat-geo-lingkaran)
 * Sub-Bab: Keliling dan Luas Lingkaran (mat-geo-lingkaran-luas)
 * Slug: keliling-dan-luas-lingkaran
 * Indikator: Perhitungan analitis keliling dan luas lingkaran serta daerah arsiran.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-lingkaran-luas";
  const subTopicSlug = "keliling-dan-luas-lingkaran";
  const questions = [
  {
    "id": "mat-geo-lingkaran-luas-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-luas",
    "category": "Luas Juring Sudut Siku-Siku",
    "difficulty": "mudah",
    "statement": "Sebuah lingkaran memiliki panjang jari-jari $r = 14\\text{ cm}$. Jika sudut pusat suatu juring adalah $90^\\circ$, maka luas juring lingkaran tersebut adalah .... (gunakan $\\pi = \\frac{22}{7}$)",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$154\\text{ cm}^2$",
      "$308\\text{ cm}^2$",
      "$77\\text{ cm}^2$",
      "$616\\text{ cm}^2$",
      "$44\\text{ cm}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Luas juring lingkaran dengan sudut pusat $\\alpha$ dan jari-jari $r$ dirumuskan sebagai perbandingan sudut pusat terhadap satu putaran penuh ($360^\\circ$) dikalikan dengan luas lingkaran utuh: $L_{\\text{juring}} = \\frac{\\alpha}{360^\\circ} \\times \\pi r^2$.",
      "steps": "1. Hitung pecahan sudut juring terhadap lingkaran penuh:\n$$\\frac{\\alpha}{360^\\circ} = \\frac{90^\\circ}{360^\\circ} = \\frac{1}{4}$$\n2. Hitung luas lingkaran utuh:\n$$L = \\pi r^2 = \\frac{22}{7} \\times 14 \\times 14 = 22 \\times 2 \\times 14 = 616\\text{ cm}^2$$\n3. Hitung luas juring:\n$$L_{\\text{juring}} = \\frac{1}{4} \\times 616 = 154\\text{ cm}^2$$\n4. Jadi, luas juring lingkaran tersebut adalah $154\\text{ cm}^2$ (pilihan A).",
      "pitfalls": "Lupa membagi dengan 4 sehingga memilih luas lingkaran utuh ($616\\text{ cm}^2$)."
    },
    "subTopicSlug": "keliling-dan-luas-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Keliling dan Luas Lingkaran",
    "subTopic": "Keliling dan Luas Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Luas juring lingkaran dengan sudut pusat $\\alpha$ dan jari-jari $r$ dirumuskan sebagai perbandingan sudut pusat terhadap satu putaran penuh ($360^\\circ$) dikalikan dengan luas lingkaran utuh: $L_{\\text{juring}} = \\frac{\\alpha}{360^\\circ} \\times \\pi r^2$. **Tips:** Lupa membagi dengan 4 sehingga memilih luas lingkaran utuh ($616\\text{ cm}^2$)."
  },
  {
    "id": "mat-geo-lingkaran-luas-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-luas",
    "category": "Luas Juring Sudut 60 Derajat",
    "difficulty": "mudah",
    "statement": "Suatu juring lingkaran memiliki sudut pusat sebesar $60^\\circ$ dan panjang jari-jari $6\\text{ cm}$. Luas juring tersebut dinyatakan dalam konstanta $\\pi$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6\\pi\\text{ cm}^2$",
      "$12\\pi\\text{ cm}^2$",
      "$3\\pi\\text{ cm}^2$",
      "$36\\pi\\text{ cm}^2$",
      "$2\\pi\\text{ cm}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Luas juring lingkaran sebanding dengan besar sudut pusatnya terhadap sudut satu putaran penuh: $L_{\\text{juring}} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2$.",
      "steps": "1. Tentukan faktor perbandingan sudut:\n$$\\frac{60^\\circ}{360^\\circ} = \\frac{1}{6}$$\n2. Masukkan jari-jari $r = 6\\text{ cm}$ ke rumus luas juring:\n$$L_{\\text{juring}} = \\frac{1}{6} \\times \\pi (6^2)$$\n$$L_{\\text{juring}} = \\frac{1}{6} \\times 36\\pi = 6\\pi\\text{ cm}^2$$\n3. Jadi, luas juring lingkaran tersebut adalah $6\\pi\\text{ cm}^2$ (pilihan A).",
      "pitfalls": "Lupa menguadratkan panjang jari-jari $6$ sehingga hanya menghitung $\\frac{1}{6} \\times 6\\pi = \\pi\\text{ cm}^2$."
    },
    "subTopicSlug": "keliling-dan-luas-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Keliling dan Luas Lingkaran",
    "subTopic": "Keliling dan Luas Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Luas juring lingkaran sebanding dengan besar sudut pusatnya terhadap sudut satu putaran penuh: $L_{\\text{juring}} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2$. **Tips:** Lupa menguadratkan panjang jari-jari $6$ sehingga hanya menghitung $\\frac{1}{6} \\times 6\\pi = \\pi\\text{ cm}^2$."
  },
  {
    "id": "mat-geo-lingkaran-luas-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-luas",
    "category": "Luas Tembereng Sudut Siku-Siku",
    "difficulty": "mudah",
    "statement": "Pada sebuah lingkaran berjari-jari $10\\text{ cm}$, terdapat juring dengan sudut pusat siku-siku ($90^\\circ$). Luas tembereng yang dibatasi oleh busur juring dan tali busurnya adalah .... (gunakan $\\pi = 3{,}14$)",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$28{,}5\\text{ cm}^2$",
      "$78{,}5\\text{ cm}^2$",
      "$50\\text{ cm}^2$",
      "$25\\text{ cm}^2$",
      "$39{,}25\\text{ cm}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Luas tembereng lingkaran sama dengan luas juring lingkaran dikurangi luas segitiga pembatas yang terbentuk dari dua jari-jari dan tali busurnya: $L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\triangle}$.",
      "steps": "1. Hitung luas juring lingkaran dengan sudut $90^\\circ$:\n$$L_{\\text{juring}} = \\frac{90^\\circ}{360^\\circ} \\times \\pi r^2 = \\frac{1}{4} \\times 3{,}14 \\times 10^2 = \\frac{314}{4} = 78{,}5\\text{ cm}^2$$\n2. Hitung luas segitiga siku-siku pengapit jari-jari:\n$$L_{\\triangle} = \\frac{1}{2} \\times r \\times r = \\frac{1}{2} \\times 10 \\times 10 = 50\\text{ cm}^2$$\n3. Kurangkan luas segitiga dari luas juring:\n$$L_{\\text{tembereng}} = 78{,}5 - 50 = 28{,}5\\text{ cm}^2$$\n4. Jadi, luas temberengnya adalah $28{,}5\\text{ cm}^2$ (pilihan A).",
      "pitfalls": "Hanya menghitung luas juring ($78{,}5\\text{ cm}^2$) tanpa mengurangkan luas segitiga pembatasnya."
    },
    "subTopicSlug": "keliling-dan-luas-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Keliling dan Luas Lingkaran",
    "subTopic": "Keliling dan Luas Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Luas tembereng lingkaran sama dengan luas juring lingkaran dikurangi luas segitiga pembatas yang terbentuk dari dua jari-jari dan tali busurnya: $L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\triangle}$. **Tips:** Hanya menghitung luas juring ($78{,}5\\text{ cm}^2$) tanpa mengurangkan luas segitiga pembatasnya."
  },
  {
    "id": "mat-geo-lingkaran-luas-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-luas",
    "category": "Perbandingan Luas Dua Juring Sejenis",
    "difficulty": "mudah",
    "statement": "Pada sebuah lingkaran, juring $AOB$ memiliki sudut pusat $40^\\circ$ dan luas $20\\text{ cm}^2$. Jika juring $COD$ pada lingkaran yang sama memiliki sudut pusat $100^\\circ$, maka luas juring $COD$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\text{ cm}^2$",
      "$40\\text{ cm}^2$",
      "$60\\text{ cm}^2$",
      "$80\\text{ cm}^2$",
      "$25\\text{ cm}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada lingkaran yang sama, rasio luas dua juring berbanding lurus secara linier dengan rasio besar sudut pusat masing-masing juring: $\\frac{L_1}{L_2} = \\frac{\\alpha_1}{\\alpha_2}$.",
      "steps": "1. Susun persamaan perbandingan senilai:\n$$\\frac{L_{COD}}{L_{AOB}} = \\frac{\\angle COD}{\\angle AOB}$$\n2. Masukkan nilai yang diketahui:\n$$\\frac{L_{COD}}{20} = \\frac{100^\\circ}{40^\\circ}$$\n3. Sederhanakan perbandingan pecahan sudut:\n$$\\frac{100}{40} = \\frac{5}{2}$$\n4. Kalikan silang untuk mencari luas $COD$:\n$$L_{COD} = 20 \\times \\frac{5}{2} = 10 \\times 5 = 50\\text{ cm}^2$$\n5. Jadi, luas juring $COD$ adalah $50\\text{ cm}^2$ (pilihan A).",
      "pitfalls": "Salah membalik rasio perbandingan menjadi $\\frac{2}{5} \\times 20 = 8\\text{ cm}^2$."
    },
    "subTopicSlug": "keliling-dan-luas-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Keliling dan Luas Lingkaran",
    "subTopic": "Keliling dan Luas Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Pada lingkaran yang sama, rasio luas dua juring berbanding lurus secara linier dengan rasio besar sudut pusat masing-masing juring: $\\frac{L_1}{L_2} = \\frac{\\alpha_1}{\\alpha_2}$."
  },
  {
    "id": "mat-geo-lingkaran-luas-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-luas",
    "category": "Luas Cincin Lingkaran (Anulus)",
    "difficulty": "mudah",
    "statement": "Dua buah lingkaran konsentris (sepusat) masing-masing memiliki panjang jari-jari $r_1 = 3\\text{ cm}$ dan $r_2 = 5\\text{ cm}$. Luas daerah cincin (daerah di antara kedua lingkaran tersebut) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$16\\pi\\text{ cm}^2$",
      "$8\\pi\\text{ cm}^2$",
      "$4\\pi\\text{ cm}^2$",
      "$25\\pi\\text{ cm}^2$",
      "$34\\pi\\text{ cm}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Luas daerah cincin lingkaran (anulus) dihitung dari selisih luas lingkaran luar dengan luas lingkaran dalam: $L_{\\text{cincin}} = \\pi(r_2^2 - r_1^2)$.",
      "steps": "1. Kuadratkan masing-masing jari-jari lingkaran:\n$$r_2^2 = 5^2 = 25$$\n$$r_1^2 = 3^2 = 9$$\n2. Hitung selisih kuadrat jari-jari:\n$$r_2^2 - r_1^2 = 25 - 9 = 16$$\n3. Kalikan dengan konstanta $\\pi$:\n$$L_{\\text{cincin}} = 16\\pi\\text{ cm}^2$$\n4. Jadi, luas daerah cincin tersebut adalah $16\\pi\\text{ cm}^2$ (pilihan A).",
      "pitfalls": "Mengurangkan jari-jari terlebih dahulu $(5 - 3 = 2)$ lalu menguadratkannya menjadi $2^2 = 4\\pi\\text{ cm}^2$, yang merupakan kesalahan aljabar."
    },
    "subTopicSlug": "keliling-dan-luas-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Keliling dan Luas Lingkaran",
    "subTopic": "Keliling dan Luas Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Luas daerah cincin lingkaran (anulus) dihitung dari selisih luas lingkaran luar dengan luas lingkaran dalam: $L_{\\text{cincin}} = \\pi(r_2^2 - r_1^2)$."
  },
  {
    "id": "mat-geo-lingkaran-luas-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-luas",
    "category": "Luas Tembereng Sudut 60 Derajat",
    "difficulty": "sedang",
    "statement": "Pada sebuah lingkaran dengan jari-jari $12\\text{ cm}$, terdapat juring dengan sudut pusat $60^\\circ$. Luas tembereng lingkaran tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(24\\pi - 36\\sqrt{3})\\text{ cm}^2$",
      "$(24\\pi - 72\\sqrt{3})\\text{ cm}^2$",
      "$(12\\pi - 36\\sqrt{3})\\text{ cm}^2$",
      "$(24\\pi - 18\\sqrt{3})\\text{ cm}^2$",
      "$(36\\pi - 24\\sqrt{3})\\text{ cm}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Luas tembereng diperoleh dari selisih antara luas juring lingkaran dan luas segitiga sama sisi yang dibentuk oleh kedua jari-jari dan tali busur: $L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\triangle}$.",
      "steps": "1. Hitung luas juring lingkaran dengan sudut pusat $60^\\circ$:\n$$L_{\\text{juring}} = \\frac{60^\\circ}{360^\\circ} \\times \\pi (12^2) = \\frac{1}{6} \\times 144\\pi = 24\\pi\\text{ cm}^2$$\n2. Hitung luas segitiga dengan rumus trigonometri dua sisi pengapit sudut $60^\\circ$:\n$$L_{\\triangle} = \\frac{1}{2} \\times r \\times r \\times \\sin(60^\\circ)$$\n$$L_{\\triangle} = \\frac{1}{2} \\times 12 \\times 12 \\times \\frac{\\sqrt{3}}{2} = 72 \\times \\frac{\\sqrt{3}}{2} = 36\\sqrt{3}\\text{ cm}^2$$\n3. Hitung luas tembereng:\n$$L_{\\text{tembereng}} = 24\\pi - 36\\sqrt{3}\\text{ cm}^2$$\n4. Jadi, luas temberengnya adalah $(24\\pi - 36\\sqrt{3})\\text{ cm}^2$ (pilihan A).",
      "pitfalls": "Salah menghitung nilai $\\sin(60^\\circ) = \\frac{1}{2}\\sqrt{3}$ atau keliru mengurangkan luas segitiga dari luas juring."
    },
    "subTopicSlug": "keliling-dan-luas-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Keliling dan Luas Lingkaran",
    "subTopic": "Keliling dan Luas Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Luas tembereng diperoleh dari selisih antara luas juring lingkaran dan luas segitiga sama sisi yang dibentuk oleh kedua jari-jari dan tali busur: $L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\triangle}$. **Tips:** Salah menghitung nilai $\\sin(60^\\circ) = \\frac{1}{2}\\sqrt{3}$ atau keliru mengurangkan luas segitiga dari luas juring."
  },
  {
    "id": "mat-geo-lingkaran-luas-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-luas",
    "category": "Optimasi Keliling Juring terhadap Luas Maksimum",
    "difficulty": "sedang",
    "statement": "Seutas kawat dengan panjang $40\\text{ cm}$ dibentuk menjadi sebuah kerangka juring lingkaran (terdiri dari dua jari-jari dan satu busur lingkaran). Agar luas juring yang terbentuk mencapai nilai maksimum, panjang jari-jari lingkaran harus dibuat sebesar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ cm}$",
      "$8\\text{ cm}$",
      "$12\\text{ cm}$",
      "$5\\text{ cm}$",
      "$15\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Keliling juring adalah $K = 2r + s$, dan luas juring adalah $L = \\frac{1}{2}rs$. Nilai maksimum luas dicapai pada titik puncak fungsi kuadrat $L(r)$.",
      "steps": "1. Nyatakan panjang busur $s$ dalam jari-jari $r$ dari keliling kawat:\n$$2r + s = 40 \\implies s = 40 - 2r$$\n2. Tuliskan rumus luas juring dalam fungsi $r$:\n$$L(r) = \\frac{1}{2} r s = \\frac{1}{2} r (40 - 2r) = 20r - r^2$$\n3. Tentukan titik puncak fungsi kuadrat $L(r) = -r^2 + 20r$:\n$$r_{\\text{maks}} = -\\frac{b}{2a} = -\\frac{20}{2(-1)} = 10\\text{ cm}$$\n4. Jadi, jari-jari lingkaran agar luas juring maksimum adalah $10\\text{ cm}$ (pilihan A).",
      "pitfalls": "Lupa bahwa keliling juring mencakup dua jari-jari ($2r$) sehingga salah merumuskan keliling sebagai $r + s = 40$."
    },
    "subTopicSlug": "keliling-dan-luas-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Keliling dan Luas Lingkaran",
    "subTopic": "Keliling dan Luas Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Keliling juring adalah $K = 2r + s$, dan luas juring adalah $L = \\frac{1}{2}rs$. Nilai maksimum luas dicapai pada titik puncak fungsi kuadrat $L(r)$."
  },
  {
    "id": "mat-geo-lingkaran-luas-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-luas",
    "category": "Luas Tembereng Sudut Tumpul 120 Derajat",
    "difficulty": "sedang",
    "statement": "Sebuah lingkaran memiliki panjang jari-jari $6\\text{ cm}$. Luas tembereng lingkaran yang dihadapi oleh sudut pusat tumpul $120^\\circ$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(12\\pi - 9\\sqrt{3})\\text{ cm}^2$",
      "$(12\\pi - 18\\sqrt{3})\\text{ cm}^2$",
      "$(6\\pi - 9\\sqrt{3})\\text{ cm}^2$",
      "$(12\\pi - 9)\\text{ cm}^2$",
      "$(18\\pi - 9\\sqrt{3})\\text{ cm}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Luas tembereng untuk sembarang sudut pusat $\\theta$ dihitung dari $L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\triangle}$, dengan $L_{\\triangle} = \\frac{1}{2}r^2\\sin(\\theta)$.",
      "steps": "1. Hitung luas juring lingkaran dengan sudut pusat $120^\\circ$:\n$$L_{\\text{juring}} = \\frac{120^\\circ}{360^\\circ} \\times \\pi (6^2) = \\frac{1}{3} \\times 36\\pi = 12\\pi\\text{ cm}^2$$\n2. Hitung luas segitiga sama kaki pembatas menggunakan sinus sudut tumpul $\\sin(120^\\circ) = \\frac{\\sqrt{3}}{2}$:\n$$L_{\\triangle} = \\frac{1}{2} \\times 6 \\times 6 \\times \\sin(120^\\circ) = 18 \\times \\frac{\\sqrt{3}}{2} = 9\\sqrt{3}\\text{ cm}^2$$\n3. Hitung luas tembereng:\n$$L_{\\text{tembereng}} = 12\\pi - 9\\sqrt{3}\\text{ cm}^2$$\n4. Jadi, luas tembereng lingkaran tersebut adalah $(12\\pi - 9\\sqrt{3})\\text{ cm}^2$ (pilihan A).",
      "pitfalls": "Salah memasukkan tanda negatif pada nilai $\\sin(120^\\circ)$, padahal fungsi sinus tetap bertanda positif di kuadran II."
    },
    "subTopicSlug": "keliling-dan-luas-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Keliling dan Luas Lingkaran",
    "subTopic": "Keliling dan Luas Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Luas tembereng untuk sembarang sudut pusat $\\theta$ dihitung dari $L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\triangle}$, dengan $L_{\\triangle} = \\frac{1}{2}r^2\\sin(\\theta)$. **Tips:** Salah memasukkan tanda negatif pada nilai $\\sin(120^\\circ)$, padahal fungsi sinus tetap bertanda positif di kuadran II."
  },
  {
    "id": "mat-geo-lingkaran-luas-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-luas",
    "category": "Rasio Perbandingan Luas Tembereng terhadap Juring",
    "difficulty": "sedang",
    "statement": "Pada suatu juring lingkaran yang memiliki sudut pusat siku-siku ($90^\\circ$) dan panjang jari-jari $r$, rasio perbandingan luas tembereng terhadap luas juring tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{\\pi - 2}{\\pi}$",
      "$\\frac{\\pi - 1}{\\pi}$",
      "$\\frac{2}{\\pi}$",
      "$\\frac{\\pi - 2}{4}$",
      "$\\frac{4 - \\pi}{\\pi}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Rasio luas tembereng terhadap juring dihitung dengan membagi formula aljabar luas tembereng terhadap luas juring pada sudut pusat yang sama.",
      "steps": "1. Tuliskan luas juring dengan sudut pusat $90^\\circ$:\n$$L_{\\text{juring}} = \\frac{1}{4}\\pi r^2$$\n2. Tuliskan luas segitiga siku-siku pembatas:\n$$L_{\\triangle} = \\frac{1}{2} r^2 = \\frac{2}{4} r^2$$\n3. Hitung luas tembereng:\n$$L_{\\text{tembereng}} = \\frac{1}{4}\\pi r^2 - \\frac{2}{4}r^2 = \\frac{1}{4}r^2(\\pi - 2)$$\n4. Tentukan rasio perbandingannya:\n$$\\frac{L_{\\text{tembereng}}}{L_{\\text{juring}}} = \\frac{\\frac{1}{4}r^2(\\pi - 2)}{\\frac{1}{4}\\pi r^2} = \\frac{\\pi - 2}{\\pi}$$\n5. Jadi, rasio perbandingannya adalah $\\frac{\\pi - 2}{\\pi}$ (pilihan A).",
      "pitfalls": "Lupa menyamakan penyebut saat mengurangkan luas segitiga dari luas juring sehingga menghasilkan bentuk pecahan yang tidak ekuivalen."
    },
    "subTopicSlug": "keliling-dan-luas-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Keliling dan Luas Lingkaran",
    "subTopic": "Keliling dan Luas Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Rasio luas tembereng terhadap juring dihitung dengan membagi formula aljabar luas tembereng terhadap luas juring pada sudut pusat yang sama."
  },
  {
    "id": "mat-geo-lingkaran-luas-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-luas",
    "category": "Luas Irisan Persekutuan Dua Lingkaran Identik",
    "difficulty": "sedang",
    "statement": "Dua buah lingkaran identik masing-masing berjari-jari $r$ diletakkan sedemikian rupa sehingga titik pusat lingkaran pertama terletak pada keliling lingkaran kedua, dan sebaliknya. Luas daerah irisan (daerah persekutuan) kedua lingkaran tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\left(\\frac{2}{3}\\pi - \\frac{\\sqrt{3}}{2}\\right)r^2$",
      "$\\left(\\frac{1}{3}\\pi - \\frac{\\sqrt{3}}{4}\\right)r^2$",
      "$\\left(\\frac{2}{3}\\pi - \\sqrt{3}\\right)r^2$",
      "$\\left(\\pi - \\frac{\\sqrt{3}}{2}\\right)r^2$",
      "$\\left(\\frac{1}{2}\\pi - \\frac{\\sqrt{3}}{3}\\right)r^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jika jarak antarpusat sama dengan jari-jari lingkaran ($d = r$), daerah irisan dibentuk oleh dua juring lingkaran bersudut pusat $120^\\circ$ yang saling bertumpukan pada layang-layang (dua segitiga sama sisi). Luas irisan = $2 \\times L_{\\text{juring}(120^\\circ)} - L_{\\text{belah ketupat}}$.",
      "steps": "1. Jarak kedua pusat adalah $d = r$, sehingga titik-titik potong kedua lingkaran membentuk dua segitiga sama sisi bersisi $r$ dengan sudut pusat masing-masing $120^\\circ$.\n2. Hitung jumlah luas dua juring bersudut $120^\\circ$:\n$$2 \\times L_{\\text{juring}} = 2 \\times \\left(\\frac{120^\\circ}{360^\\circ} \\pi r^2\\right) = 2 \\times \\frac{1}{3}\\pi r^2 = \\frac{2}{3}\\pi r^2$$\n3. Hitung luas dua segitiga sama sisi pembatas:\n$$2 \\times L_{\\triangle} = 2 \\times \\left(\\frac{1}{4}\\sqrt{3}r^2\\right) = \\frac{\\sqrt{3}}{2}r^2$$\n4. Hitung luas daerah irisan:\n$$L_{\\text{irisan}} = 2 L_{\\text{juring}} - 2 L_{\\triangle} = \\left(\\frac{2}{3}\\pi - \\frac{\\sqrt{3}}{2}\\right)r^2$$\n5. Jadi, luas daerah irisannya adalah $\\left(\\frac{2}{3}\\pi - \\frac{\\sqrt{3}}{2}\\right)r^2$ (pilihan A).",
      "pitfalls": "Hanya menghitung satu tembereng lingkaran dan lupa bahwa daerah irisan terdiri dari dua tembereng yang simetris dari kedua lingkaran."
    },
    "subTopicSlug": "keliling-dan-luas-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Keliling dan Luas Lingkaran",
    "subTopic": "Keliling dan Luas Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Jika jarak antarpusat sama dengan jari-jari lingkaran ($d = r$), daerah irisan dibentuk oleh dua juring lingkaran bersudut pusat $120^\\circ$ yang saling bertumpukan pada layang-layang (dua segitiga sama sisi). Luas irisan = $2 \\times L_{\\text{juring}(120^\\circ)} - L_{\\text{belah ketupat}}$."
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
