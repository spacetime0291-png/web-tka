/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Transformasi Geometri (mat-geo-trans)
 * Sub-Bab: Luas Bangun Hasil Transformasi (mat-geo-trans-luas)
 * Slug: luas-bangun-hasil-transformasi
 * Indikator: Perubahan luas bangun geometri setelah transformasi (L' = |det(M)| * L).
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-trans-luas";
  const subTopicSlug = "luas-bangun-hasil-transformasi";
  const questions = [
  {
    "id": "mat-geo-trans-luas-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-luas",
    "category": "Luas Bayangan oleh Matriks Diagonal",
    "difficulty": "mudah",
    "statement": "Suatu segitiga memiliki luas $15\\text{ cm}^2$. Segitiga tersebut ditransformasikan oleh matriks $M = \\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$. Luas daerah segitiga bayangannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$45\\text{ cm}^2$",
      "$75\\text{ cm}^2$",
      "$90\\text{ cm}^2$",
      "$120\\text{ cm}^2$",
      "$180\\text{ cm}^2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Luas bayangan suatu bangun datar oleh matriks transformasi $M$ berukuran $2 \\times 2$ berbanding lurus dengan nilai mutlak determinan matriks tersebut: $L' = |\\det(M)| \\times L$.",
      "steps": "1. Hitung determinan matriks $M = \\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$:\n$$\\det(M) = (3)(2) - (0)(0) = 6$$\n2. Hitung luas bangun bayangan:\n$$L' = |\\det(M)| \\times L = 6 \\times 15 = 90\\text{ cm}^2$$\n3. Jadi, luas segitiga bayangannya adalah $90\\text{ cm}^2$ (pilihan C).",
      "pitfalls": "Hanya mengalikan luas dengan jumlah elemen diagonal $3 + 2 = 5$ yang menghasilkan $75\\text{ cm}^2$."
    },
    "subTopicSlug": "luas-bangun-hasil-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Luas Bangun Hasil Transformasi",
    "subTopic": "Luas Bangun Hasil Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-trans-luas-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-luas",
    "category": "Luas Bangun Datar oleh Transformasi Isometri",
    "difficulty": "mudah",
    "statement": "Persegi panjang dengan panjang $8\\text{ cm}$ dan lebar $5\\text{ cm}$ diputar sebesar $90^\\circ$ terhadap pusat $O(0, 0)$ kemudian dicerminkan terhadap garis $y = x$. Luas bangun bayangan akhir tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20\\text{ cm}^2$",
      "$40\\text{ cm}^2$",
      "$80\\text{ cm}^2$",
      "$160\\text{ cm}^2$",
      "$200\\text{ cm}^2$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Rotasi dan refleksi merupakan transformasi isometri (mempertahankan jarak dan sudut). Nilai mutlak determinan matriks transformasi isometri selalu bernilai 1 ($|\\det(M)| = 1$), sehingga luas bangun bayangan tidak berubah ($L' = L$).",
      "steps": "1. Hitung luas persegi panjang mula-mula:\n$$L = p \\times l = 8 \\times 5 = 40\\text{ cm}^2$$\n2. Karena rotasi dan refleksi bersifat isometri:\n$$|\\det(R_{90^\\circ})| = 1$$\n$$|\\det(M_{y=x})| = |-1| = 1$$\n3. Luas bayangan akhir adalah:\n$$L' = 1 \\times 1 \\times 40 = 40\\text{ cm}^2$$\n4. Jadi, jawabannya adalah $40\\text{ cm}^2$ (pilihan B).",
      "pitfalls": "Mengira bahwa perputaran atau pembalikan koordinat mengubah besaran ukuran luas bangun."
    },
    "subTopicSlug": "luas-bangun-hasil-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Luas Bangun Hasil Transformasi",
    "subTopic": "Luas Bangun Hasil Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-trans-luas-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-luas",
    "category": "Luas Segitiga oleh Dilatasi",
    "difficulty": "mudah",
    "statement": "Segitiga $ABC$ mempunyai luas awal $12\\text{ cm}^2$. Jika segitiga tersebut didilatasikan dengan faktor skala $k = 3$, maka luas segitiga bayangannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$36\\text{ cm}^2$",
      "$48\\text{ cm}^2$",
      "$72\\text{ cm}^2$",
      "$108\\text{ cm}^2$",
      "$144\\text{ cm}^2$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Pada dilatasi dengan faktor skala $k$, luas bangun bayangan bertambah sebanding dengan kuadrat faktor skalanya: $L' = k^2 \\times L$.",
      "steps": "1. Identifikasi luas awal $L = 12\\text{ cm}^2$ dan faktor skala $k = 3$.\n2. Hitung luas bayangan:\n$$L' = k^2 \\times L = 3^2 \\times 12 = 9 \\times 12 = 108\\text{ cm}^2$$\n3. Jadi, luas segitiga bayangannya adalah $108\\text{ cm}^2$ (pilihan D).",
      "pitfalls": "Hanya mengalikan luas dengan $k$ secara linear ($3 \\times 12 = 36\\text{ cm}^2$) tanpa mengkuadratkannya."
    },
    "subTopicSlug": "luas-bangun-hasil-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Luas Bangun Hasil Transformasi",
    "subTopic": "Luas Bangun Hasil Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-trans-luas-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-luas",
    "category": "Luas Jajaran Genjang oleh Matriks Transformasi",
    "difficulty": "mudah",
    "statement": "Jajaran genjang dengan luas $20\\text{ cm}^2$ ditransformasikan oleh matriks $M = \\begin{pmatrix} 2 & 1 \\\\ 4 & 5 \\end{pmatrix}$. Luas jajaran genjang bayangannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$60\\text{ cm}^2$",
      "$80\\text{ cm}^2$",
      "$100\\text{ cm}^2$",
      "$120\\text{ cm}^2$",
      "$200\\text{ cm}^2$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Faktor pengali luas bangun datar oleh transformasi matriks ditentukan oleh determinan matriksnya: $L' = |ad - bc| \\times L$.",
      "steps": "1. Hitung determinan matriks $M$:\n$$\\det(M) = ad - bc = (2)(5) - (1)(4) = 10 - 4 = 6$$\n2. Hitung luas bayangan bangun:\n$$L' = |\\det(M)| \\times L = 6 \\times 20 = 120\\text{ cm}^2$$\n3. Jadi, luas jajaran genjang bayangannya adalah $120\\text{ cm}^2$ (pilihan D).",
      "pitfalls": "Salah menghitung determinan matriks, misalnya menjumlahkan $10 + 4 = 14$ alih-alih mengurangkannya."
    },
    "subTopicSlug": "luas-bangun-hasil-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Luas Bangun Hasil Transformasi",
    "subTopic": "Luas Bangun Hasil Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-trans-luas-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-luas",
    "category": "Luas Lingkaran Akibat Dilatasi",
    "difficulty": "mudah",
    "statement": "Suatu lingkaran memiliki luas awal $16\\pi\\text{ cm}^2$. Lingkaran tersebut didilatasikan dengan pusat $O(0, 0)$ dan faktor skala $k = \\frac{1}{2}$. Luas lingkaran bayangannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\pi\\text{ cm}^2$",
      "$4\\pi\\text{ cm}^2$",
      "$8\\pi\\text{ cm}^2$",
      "$16\\pi\\text{ cm}^2$",
      "$32\\pi\\text{ cm}^2$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada lingkaran yang mengalami dilatasi dengan faktor skala $k$, luas bayangannya memenuhi rumus $L' = k^2 \\times L$.",
      "steps": "1. Luas awal lingkaran adalah $L = 16\\pi\\text{ cm}^2$.\n2. Faktor skala adalah $k = \\frac{1}{2}$.\n3. Hitung luas lingkaran bayangan:\n$$L' = \\left(\\frac{1}{2}\\right)^2 \\times 16\\pi = \\frac{1}{4} \\times 16\\pi = 4\\pi\\text{ cm}^2$$\n4. Jadi, luas bayangan lingkaran tersebut adalah $4\\pi\\text{ cm}^2$ (pilihan B).",
      "pitfalls": "Membagi luas hanya dengan 2 sehingga memperoleh $8\\pi\\text{ cm}^2$ bukannya membagi dengan kuadrat faktor skala ($4$)."
    },
    "subTopicSlug": "luas-bangun-hasil-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Luas Bangun Hasil Transformasi",
    "subTopic": "Luas Bangun Hasil Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-trans-luas-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-luas",
    "category": "Luas Segitiga Berkoordinat Ditransformasikan oleh Matriks",
    "difficulty": "sedang",
    "statement": "Diketahui segitiga $ABC$ memiliki titik-titik sudut $A(0, 0)$, $B(4, 1)$, dan $C(2, 5)$. Segitiga tersebut ditransformasikan oleh matriks $M = \\begin{pmatrix} 3 & 1 \\\\ -2 & 4 \\end{pmatrix}$. Luas daerah segitiga bayangannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$98\\text{ satuan luas}$",
      "$112\\text{ satuan luas}$",
      "$126\\text{ satuan luas}$",
      "$144\\text{ satuan luas}$",
      "$252\\text{ satuan luas}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Luas segitiga dengan salah satu titik sudut di titik asal $(0, 0)$ dan dua titik lainnya $(x_1, y_1)$ serta $(x_2, y_2)$ adalah $L = \\frac{1}{2}|x_1 y_2 - x_2 y_1|$. Luas bayangannya setelah transformasi matriks $M$ adalah $L' = |\\det(M)| \\times L$.",
      "steps": "1. Hitung luas segitiga $ABC$ awal dengan $B(4, 1)$ dan $C(2, 5)$:\n$$L = \\frac{1}{2}|4(5) - 2(1)| = \\frac{1}{2}|20 - 2| = \\frac{1}{2}(18) = 9\\text{ satuan luas}$$\n2. Hitung determinan matriks $M$:\n$$\\det(M) = 3(4) - 1(-2) = 12 + 2 = 14$$\n3. Hitung luas segitiga bayangan:\n$$L' = |\\det(M)| \\times L = 14 \\times 9 = 126\\text{ satuan luas}$$\n4. Jadi, luas segitiga bayangannya adalah $126\\text{ satuan luas}$ (pilihan C).",
      "pitfalls": "Lupa membagi 2 pada luas segitiga awal sehingga memperoleh hasil dua kali lipat yaitu $252\\text{ satuan luas}$."
    },
    "subTopicSlug": "luas-bangun-hasil-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Luas Bangun Hasil Transformasi",
    "subTopic": "Luas Bangun Hasil Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-trans-luas-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-luas",
    "category": "Luas Bayangan Komposisi Dua Matriks Transformasi",
    "difficulty": "sedang",
    "statement": "Sebuah bangun datar dengan luas $8\\text{ satuan luas}$ ditransformasikan berturut-turut oleh matriks $M_1 = \\begin{pmatrix} 2 & -1 \\\\ 3 & 1 \\end{pmatrix}$ dan $M_2 = \\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}$. Luas daerah bayangan akhir bangun tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$120\\text{ satuan luas}$",
      "$200\\text{ satuan luas}$",
      "$320\\text{ satuan luas}$",
      "$400\\text{ satuan luas}$",
      "$480\\text{ satuan luas}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Pada komposisi dua transformasi matriks berurutan $M_1$ dan $M_2$, determinan matriks total adalah perkalian determinan masing-masing: $\\det(M_2 M_1) = \\det(M_2) \\times \\det(M_1)$. Luas bayangan akhir adalah $L' = |\\det(M_2)| \\times |\\det(M_1)| \\times L$.",
      "steps": "1. Hitung determinan matriks pertama $M_1$:\n$$\\det(M_1) = 2(1) - (-1)(3) = 2 + 3 = 5$$\n2. Hitung determinan matriks kedua $M_2$:\n$$\\det(M_2) = 4(3) - 2(1) = 12 - 2 = 10$$\n3. Hitung luas bayangan akhir:\n$$L' = |\\det(M_2)| \\times |\\det(M_1)| \\times L = 10 \\times 5 \\times 8 = 400\\text{ satuan luas}$$\n4. Jadi, luas bayangan akhirnya adalah $400\\text{ satuan luas}$ (pilihan D).",
      "pitfalls": "Menjumlahkan nilai determinan matriks $(10 + 5) \\times 8 = 120$ alih-alih mengalikannya."
    },
    "subTopicSlug": "luas-bangun-hasil-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Luas Bangun Hasil Transformasi",
    "subTopic": "Luas Bangun Hasil Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-trans-luas-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-luas",
    "category": "Luas Bayangan Elips oleh Matriks Transformasi",
    "difficulty": "sedang",
    "statement": "Daerah yang dibatasi oleh elips $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ ditransformasikan oleh matriks $M = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$. Luas daerah kurva bayangannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$12\\pi\\text{ satuan luas}$",
      "$18\\pi\\text{ satuan luas}$",
      "$24\\pi\\text{ satuan luas}$",
      "$36\\pi\\text{ satuan luas}$",
      "$72\\pi\\text{ satuan luas}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Luas daerah elips $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ adalah $L = \\pi a b$. Luas daerah setelah transformasi matriks $M$ menjadi $L' = |\\det(M)| \\times L$.",
      "steps": "1. Tentukan semi-sumbu panjang dan pendek dari elips awal:\n$$a^2 = 9 \\implies a = 3$$\n$$b^2 = 4 \\implies b = 2$$\n2. Hitung luas elips awal:\n$$L = \\pi \\times a \\times b = \\pi \\times 3 \\times 2 = 6\\pi\\text{ satuan luas}$$\n3. Hitung determinan matriks $M$:\n$$\\det(M) = 2(3) - 1(0) = 6$$\n4. Hitung luas daerah elips bayangan:\n$$L' = |\\det(M)| \\times L = 6 \\times 6\\pi = 36\\pi\\text{ satuan luas}$$\n5. Jadi, luas daerah elips bayangan adalah $36\\pi\\text{ satuan luas}$ (pilihan D).",
      "pitfalls": "Menggunakan $a^2$ dan $b^2$ langsung dalam rumus luas elips sehingga menghitung $\\pi \\times 9 \\times 4 = 36\\pi$ sebagai luas awal."
    },
    "subTopicSlug": "luas-bangun-hasil-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Luas Bangun Hasil Transformasi",
    "subTopic": "Luas Bangun Hasil Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-trans-luas-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-luas",
    "category": "Menentukan Nilai Parameter dari Perubahan Luas Daerah",
    "difficulty": "sedang",
    "statement": "Suatu bangun datar dengan luas $10\\text{ satuan luas}$ ditransformasikan oleh matriks $M = \\begin{pmatrix} x & 3 \\\\ 2 & x \\end{pmatrix}$ dengan $x > 0$. Jika luas daerah bayangannya adalah $30\\text{ satuan luas}$, maka nilai $x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Hubungan perubahan luas dinyatakan oleh $|\\det(M)| = \\frac{L'}{L}$. Selesaikan nilai mutlak determinan matriks untuk memperoleh nilai parameter $x$.",
      "steps": "1. Gunakan rasio luas:\n$$|\\det(M)| = \\frac{L'}{L} = \\frac{30}{10} = 3$$\n2. Hitung ekspresi determinan matriks $M$:\n$$\\det(M) = (x)(x) - (3)(2) = x^2 - 6$$\n3. Selesaikan persamaan nilai mutlak $|x^2 - 6| = 3$:\n$$x^2 - 6 = 3 \\implies x^2 = 9 \\implies x = 3 \\text{ (karena } x > 0)$$\n(Untuk kasus $x^2 - 6 = -3 \\implies x^2 = 3 \\implies x = \\sqrt{3}$)\n4. Dari pilihan jawaban yang tersedia, nilai $x$ yang memenuhi adalah $3$ (pilihan C).",
      "pitfalls": "Lupa bahwa determinan matriks dapat bernilai negatif di dalam tanda mutlak atau salah mengurangkan suku determinan."
    },
    "subTopicSlug": "luas-bangun-hasil-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Luas Bangun Hasil Transformasi",
    "subTopic": "Luas Bangun Hasil Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-trans-luas-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-luas",
    "category": "Luas Segitiga oleh Komposisi Refleksi dan Dilatasi",
    "difficulty": "sedang",
    "statement": "Segitiga $PQR$ dengan koordinat $P(1, 2)$, $Q(5, 2)$, dan $R(3, 8)$ dicerminkan terhadap garis $y = -x$ kemudian didilatasikan dengan pusat $O(0, 0)$ dan faktor skala $k = -2$. Luas daerah segitiga bayangan akhirnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$24\\text{ satuan luas}$",
      "$36\\text{ satuan luas}$",
      "$48\\text{ satuan luas}$",
      "$72\\text{ satuan luas}$",
      "$96\\text{ satuan luas}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Refleksi merupakan transformasi isometri yang mempertahankan luas awal bangun datar (pengali luas = 1). Dilatasi dengan faktor skala $k$ melipatgandakan luas sebesar kuadrat faktor skalanya ($k^2$).",
      "steps": "1. Hitung luas segitiga mula-mula $PQR$:\nAlas $PQ$ horizontal pada garis $y = 2$, dengan panjang $a = 5 - 1 = 4$.\nTinggi segitiga diukur dari garis $y = 2$ ke puncak $R(3, 8)$ adalah $t = 8 - 2 = 6$.\n$$L = \\frac{1}{2} \\times a \\times t = \\frac{1}{2} \\times 4 \\times 6 = 12\\text{ satuan luas}$$\n2. Pengaruh transformasi terhadap luas:\n- Refleksi terhadap garis $y = -x$: pengali luas $= 1$.\n- Dilatasi $k = -2$: pengali luas $= k^2 = (-2)^2 = 4$.\n3. Hitung luas bayangan akhir:\n$$L' = 1 \\times 4 \\times 12 = 48\\text{ satuan luas}$$\n4. Jadi, luas segitiga bayangan akhir adalah $48\\text{ satuan luas}$ (pilihan C).",
      "pitfalls": "Memasukkan nilai faktor skala secara linear ($|-2| \\times 12 = 24$) bukannya mengkuadratkan faktor skala dilatasi."
    },
    "subTopicSlug": "luas-bangun-hasil-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Luas Bangun Hasil Transformasi",
    "subTopic": "Luas Bangun Hasil Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
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
