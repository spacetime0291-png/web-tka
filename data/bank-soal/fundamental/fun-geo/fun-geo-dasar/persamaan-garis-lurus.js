/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Geometri Analitik Bidang
 * Bab Kecil: Garis dan Koordinat (fun-geo-dasar)
 * Sub-Bab: Persamaan Garis Lurus (fun-geo-dasar-garis)
 * Slug: persamaan-garis-lurus
 * Indikator: Persamaan garis lurus bentuk eksplisit y = mx + c dan implisit Ax + By + C = 0.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-geo-dasar-garis";
  const subTopicSlug = "persamaan-garis-lurus";
  const questions = [
  {
    "id": "fun-geo-dasar-garis-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-garis",
    "category": "Persamaan Garis dari Gradien dan Titik Potong Sumbu-Y",
    "difficulty": "mudah",
    "statement": "Persamaan garis lurus yang memiliki gradien $m = 3$ dan memotong sumbu-$Y$ di titik $(0, 4)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$y = 3x - 4$",
      "$y = 3x + 4$",
      "$y = 4x + 3$",
      "$y = -3x + 4$",
      "$y = \\frac{1}{3}x + 4$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Bentuk persamaan eksplisit garis lurus dengan gradien $m$ dan titik potong sumbu-$Y$ di $(0, c)$ adalah $y = mx + c$.",
      "steps": "1. Diketahui nilai gradien garis $m = 3$.\n2. Titik potong terhadap sumbu-$Y$ di $(0, 4)$ menunjukkan nilai konstanta $c = 4$.\n3. Substitusikan nilai $m$ dan $c$ ke dalam bentuk $y = mx + c$:\n$$y = 3x + 4$$\n4. Jadi, persamaan garis lurus tersebut adalah $y = 3x + 4$ (pilihan B).",
      "pitfalls": "Tertukar antara nilai gradien $m$ dan konstanta titik potong sumbu $c$ sehingga memilih $y = 4x + 3$."
    },
    "subTopicSlug": "persamaan-garis-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Persamaan Garis Lurus",
    "subTopic": "Persamaan Garis Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Mudah",
    "hint": "Bentuk persamaan eksplisit garis lurus dengan gradien $m$ dan titik potong sumbu-$Y$ di $(0, c)$ adalah $y = mx + c$."
  },
  {
    "id": "fun-geo-dasar-garis-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-garis",
    "category": "Mengubah Bentuk Implisit ke Eksplisit",
    "difficulty": "mudah",
    "statement": "Bentuk eksplisit $y = mx + c$ dari persamaan garis $2x - y + 5 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$y = 2x - 5$",
      "$y = 2x + 5$",
      "$y = -2x + 5$",
      "$y = -2x - 5$",
      "$y = \\frac{1}{2}x + 5$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Bentuk implisit garis $Ax + By + C = 0$ diubah ke bentuk eksplisit dengan mengisolasi variabel $y$ pada salah satu ruas persamaan.",
      "steps": "1. Tuliskan persamaan implisit yang diberikan:\n$$2x - y + 5 = 0$$\n2. Pindahkan suku $-y$ ke ruas kanan agar bertanda positif:\n$$2x + 5 = y$$\n3. Tuliskan dalam bentuk standar $y = mx + c$:\n$$y = 2x + 5$$\n4. Jadi, bentuk eksplisit persamaan garis tersebut adalah $y = 2x + 5$ (pilihan B).",
      "pitfalls": "Kesalahan tanda saat memindahkan suku konstanta 5 sehingga menghasilkan $y = 2x - 5$."
    },
    "subTopicSlug": "persamaan-garis-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Persamaan Garis Lurus",
    "subTopic": "Persamaan Garis Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Mudah",
    "hint": "Bentuk implisit garis $Ax + By + C = 0$ diubah ke bentuk eksplisit dengan mengisolasi variabel $y$ pada salah satu ruas persamaan."
  },
  {
    "id": "fun-geo-dasar-garis-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-garis",
    "category": "Persamaan Garis Melalui Satu Titik Bergradien Tertentu",
    "difficulty": "mudah",
    "statement": "Persamaan garis lurus yang melalui titik $A(1, 3)$ dengan gradien $m = 2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$y = 2x + 1$",
      "$y = 2x - 1$",
      "$y = 2x + 5$",
      "$y = 2x - 5$",
      "$y = x + 2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Persamaan garis lurus yang melalui titik $(x_1, y_1)$ dengan gradien $m$ dirumuskan sebagai $y - y_1 = m(x - x_1)$.",
      "steps": "1. Substitusikan $x_1 = 1$, $y_1 = 3$, dan $m = 2$ ke dalam rumus titik-gradien:\n$$y - 3 = 2(x - 1)$$\n2. Jabarkan perkalian pada ruas kanan:\n$$y - 3 = 2x - 2$$\n3. Tambahkan kedua ruas dengan 3:\n$$y = 2x - 2 + 3$$\n$$y = 2x + 1$$\n4. Jadi, persamaan garis lurus tersebut adalah $y = 2x + 1$ (pilihan A).",
      "pitfalls": "Lupa mendistribusikan gradien 2 ke $-1$ sehingga menulis $y - 3 = 2x - 1$."
    },
    "subTopicSlug": "persamaan-garis-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Persamaan Garis Lurus",
    "subTopic": "Persamaan Garis Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Mudah",
    "hint": "Persamaan garis lurus yang melalui titik $(x_1, y_1)$ dengan gradien $m$ dirumuskan sebagai $y - y_1 = m(x - x_1)$."
  },
  {
    "id": "fun-geo-dasar-garis-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-garis",
    "category": "Menentukan Titik Potong dengan Sumbu Koordinat",
    "difficulty": "mudah",
    "statement": "Titik potong garis $3x + 4y = 12$ dengan sumbu-$X$ dan sumbu-$Y$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(4, 0)$ dan $(0, 3)$",
      "$(3, 0)$ dan $(0, 4)$",
      "$(4, 0)$ dan $(3, 0)$",
      "$(0, 4)$ dan $(3, 0)$",
      "$(0, 3)$ dan $(4, 0)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik potong sumbu-$X$ terjadi saat $y = 0$, dan titik potong sumbu-$Y$ terjadi saat $x = 0$.",
      "steps": "1. Titik potong sumbu-$X$ ($y = 0$):\n$$3x + 4(0) = 12 \\implies 3x = 12 \\implies x = 4$$\nKoordinat titik potong sumbu-$X$ adalah $(4, 0)$.\n2. Titik potong sumbu-$Y$ ($x = 0$):\n$$3(0) + 4y = 12 \\implies 4y = 12 \\implies y = 3$$\nKoordinat titik potong sumbu-$Y$ adalah $(0, 3)$.\n3. Urutan berturut-turut adalah $(4, 0)$ dan $(0, 3)$.\n4. Jadi, jawabannya adalah pilihan A.",
      "pitfalls": "Tertukar antara koordinat titik potong sumbu-$X$ dan sumbu-$Y$ sehingga memilih $(3, 0)$ dan $(0, 4)$."
    },
    "subTopicSlug": "persamaan-garis-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Persamaan Garis Lurus",
    "subTopic": "Persamaan Garis Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Mudah",
    "hint": "Titik potong sumbu-$X$ terjadi saat $y = 0$, dan titik potong sumbu-$Y$ terjadi saat $x = 0$. **Tips:** Tertukar antara koordinat titik potong sumbu-$X$ dan sumbu-$Y$ sehingga memilih $(3, 0)$ dan $(0, 4)$."
  },
  {
    "id": "fun-geo-dasar-garis-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-garis",
    "category": "Persamaan Garis Melalui Titik Asal dan Titik Sembarang",
    "difficulty": "mudah",
    "statement": "Persamaan garis lurus yang melalui titik pusat $O(0, 0)$ dan titik $B(3, 6)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$y = \\frac{1}{2}x$",
      "$y = 2x$",
      "$y = 3x$",
      "$y = 6x$",
      "$y = 2x + 3$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Garis yang melalui titik asal $(0, 0)$ memiliki persamaan bentuk $y = mx$, di mana $m = \\frac{y}{x}$.",
      "steps": "1. Hitung gradien garis dari titik $(0, 0)$ ke titik $(3, 6)$:\n$$m = \\frac{6 - 0}{3 - 0} = \\frac{6}{3} = 2$$\n2. Karena garis melalui titik asal $(0, 0)$, maka konstanta $c = 0$.\n3. Bentuk persamaan garisnya adalah:\n$$y = 2x$$\n4. Jadi, persamaan garis lurus tersebut adalah $y = 2x$ (pilihan B).",
      "pitfalls": "Terbalik dalam pembagian gradien $\\frac{\\Delta x}{\\Delta y} = \\frac{3}{6} = \\frac{1}{2}$ sehingga memilih $y = \\frac{1}{2}x$."
    },
    "subTopicSlug": "persamaan-garis-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Persamaan Garis Lurus",
    "subTopic": "Persamaan Garis Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Mudah",
    "hint": "Garis yang melalui titik asal $(0, 0)$ memiliki persamaan bentuk $y = mx$, di mana $m = \\frac{y}{x}$. **Tips:** Terbalik dalam pembagian gradien $\\frac{\\Delta x}{\\Delta y} = \\frac{3}{6} = \\frac{1}{2}$ sehingga memilih $y = \\frac{1}{2}x$."
  },
  {
    "id": "fun-geo-dasar-garis-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-garis",
    "category": "Persamaan Garis Melalui Dua Titik Koordinat",
    "difficulty": "sedang",
    "statement": "Persamaan garis lurus yang melalui titik $A(2, 3)$ dan titik $B(4, 7)$ dapat dinyatakan dalam bentuk implisit sebagai ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2x - y - 1 = 0$",
      "$2x - y + 1 = 0$",
      "$x - 2y + 4 = 0$",
      "$2x + y - 7 = 0$",
      "$x + 2y - 8 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gunakan rumus gradien dua titik $m = \\frac{y_2 - y_1}{x_2 - x_1}$, lalu susun persamaan garis $y - y_1 = m(x - x_1)$ dan ubah ke bentuk implisit $Ax + By + C = 0$.",
      "steps": "1. Hitung gradien garis melalui $A(2, 3)$ dan $B(4, 7)$:\n$$m = \\frac{7 - 3}{4 - 2} = \\frac{4}{2} = 2$$\n2. Susun persamaan garis menggunakan titik $A(2, 3)$:\n$$y - 3 = 2(x - 2)$$\n$$y - 3 = 2x - 4$$\n3. Pindahkan seluruh suku ke ruas kanan sehingga koefisien $x$ positif:\n$$2x - y - 4 + 3 = 0$$\n$$2x - y - 1 = 0$$\n4. Jadi, persamaan garis dalam bentuk implisit adalah $2x - y - 1 = 0$ (pilihan A).",
      "pitfalls": "Kesalahan tanda saat memindahkan suku konstanta $-4 + 3$ sehingga memilih $2x - y + 1 = 0$."
    },
    "subTopicSlug": "persamaan-garis-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Persamaan Garis Lurus",
    "subTopic": "Persamaan Garis Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan rumus gradien dua titik $m = \\frac{y_2 - y_1}{x_2 - x_1}$, lalu susun persamaan garis $y - y_1 = m(x - x_1)$ dan ubah ke bentuk implisit $Ax + By + C = 0$."
  },
  {
    "id": "fun-geo-dasar-garis-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-garis",
    "category": "Persamaan Garis dari Titik dan Titik Potong Sumbu",
    "difficulty": "sedang",
    "statement": "Garis $g$ melalui titik $P(1, 4)$ dan memotong sumbu-$X$ di titik $(3, 0)$. Persamaan garis $g$ dalam bentuk umum $Ax + By + C = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2x + y - 6 = 0$",
      "$2x - y + 2 = 0$",
      "$x + 2y - 9 = 0$",
      "$2x + y - 8 = 0$",
      "$x - 2y + 7 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Dua titik yang diketahui pada garis adalah $P(1, 4)$ dan titik potong sumbu-$X$, yaitu $Q(3, 0)$.",
      "steps": "1. Tentukan gradien garis melalui $(1, 4)$ dan $(3, 0)$:\n$$m = \\frac{0 - 4}{3 - 1} = \\frac{-4}{2} = -2$$\n2. Gunakan rumus persamaan garis dengan titik $(3, 0)$:\n$$y - 0 = -2(x - 3)$$\n$$y = -2x + 6$$\n3. Pindahkan semua suku ke ruas kiri agar koefisien $x$ positif:\n$$2x + y - 6 = 0$$\n4. Jadi, persamaan garis $g$ adalah $2x + y - 6 = 0$ (pilihan A).",
      "pitfalls": "Keliru mengartikan memotong sumbu-$X$ di $(3, 0)$ sebagai titik $(0, 3)$."
    },
    "subTopicSlug": "persamaan-garis-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Persamaan Garis Lurus",
    "subTopic": "Persamaan Garis Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Sedang",
    "hint": "Dua titik yang diketahui pada garis adalah $P(1, 4)$ dan titik potong sumbu-$X$, yaitu $Q(3, 0)$. **Tips:** Keliru mengartikan memotong sumbu-$X$ di $(3, 0)$ sebagai titik $(0, 3)$."
  },
  {
    "id": "fun-geo-dasar-garis-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-garis",
    "category": "Menentukan Koefisien Garis Melalui Titik Tertentu",
    "difficulty": "sedang",
    "statement": "Jika garis dengan persamaan $ax + 3y - 12 = 0$ melalui titik $(3, 2)$, maka nilai dari koefisien $a$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$6$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Titik $(x_0, y_0)$ terletak pada suatu garis jika dan hanya jika koordinatnya memenuhi persamaan garis tersebut.",
      "steps": "1. Substitusikan $x = 3$ dan $y = 2$ ke dalam persamaan garis:\n$$a(3) + 3(2) - 12 = 0$$\n2. Hitung suku-suku konstan:\n$$3a + 6 - 12 = 0$$\n$$3a - 6 = 0$$\n3. Pindahkan $-6$ ke ruas kanan:\n$$3a = 6$$\n4. Bagi kedua ruas dengan 3:\n$$a = 2$$\n5. Jadi, nilai $a$ adalah $2$ (pilihan B).",
      "pitfalls": "Tertukar memasukkan absis dan ordinat (memasukkan $x = 2$ dan $y = 3$) sehingga menghasilkan nilai $a = 1{,}5$."
    },
    "subTopicSlug": "persamaan-garis-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Persamaan Garis Lurus",
    "subTopic": "Persamaan Garis Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Sedang",
    "hint": "Titik $(x_0, y_0)$ terletak pada suatu garis jika dan hanya jika koordinatnya memenuhi persamaan garis tersebut."
  },
  {
    "id": "fun-geo-dasar-garis-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-garis",
    "category": "Titik Potong Dua Garis Lurus",
    "difficulty": "sedang",
    "statement": "Titik potong antara garis $2x - y = 4$ dan garis $x + 3y = 9$ pada bidang koordinat adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(2, 0)$",
      "$(3, 2)$",
      "$(3, 1)$",
      "$(4, 4)$",
      "$(1, -2)$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Titik potong dua garis lurus merupakan solusi persekutuan (himpunan penyelesaian) dari sistem persamaan linear kedua garis tersebut.",
      "steps": "1. Nyatakan $y$ dari persamaan pertama:\n$$y = 2x - 4$$\n2. Substitusikan ekspresi $y$ ke persamaan kedua:\n$$x + 3(2x - 4) = 9$$\n$$x + 6x - 12 = 9$$\n$$7x = 21 \\implies x = 3$$\n3. Tentukan nilai $y$ dengan mensubstitusi $x = 3$:\n$$y = 2(3) - 4 = 6 - 4 = 2$$\n4. Gabungkan koordinat titik potong:\n$$(x, y) = (3, 2)$$\n5. Jadi, titik potong kedua garis adalah $(3, 2)$ (pilihan B).",
      "pitfalls": "Salah menjabarkan tanda distributif $3(-4)$ menjadi $-7$ atau $+12$."
    },
    "subTopicSlug": "persamaan-garis-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Persamaan Garis Lurus",
    "subTopic": "Persamaan Garis Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Sedang",
    "hint": "Titik potong dua garis lurus merupakan solusi persekutuan (himpunan penyelesaian) dari sistem persamaan linear kedua garis tersebut. **Tips:** Salah menjabarkan tanda distributif $3(-4)$ menjadi $-7$ atau $+12$."
  },
  {
    "id": "fun-geo-dasar-garis-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-garis",
    "category": "Persamaan Garis Bentuk Intersep Sumbu",
    "difficulty": "sedang",
    "statement": "Suatu garis memotong sumbu-$X$ di titik $(4, 0)$ dan memotong sumbu-$Y$ di titik $(0, -2)$. Persamaan garis tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x - 2y - 4 = 0$",
      "$x + 2y - 4 = 0$",
      "$2x - y - 4 = 0$",
      "$x - 2y + 4 = 0$",
      "$2x + y + 4 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Persamaan garis dengan titik potong sumbu $(a, 0)$ dan $(0, b)$ dapat ditentukan menggunakan bentuk intersep: $\\frac{x}{a} + \\frac{y}{b} = 1$.",
      "steps": "1. Terapkan bentuk intersep dengan $a = 4$ dan $b = -2$:\n$$\\frac{x}{4} + \\frac{y}{-2} = 1$$\n$$\\frac{x}{4} - \\frac{y}{2} = 1$$\n2. Kalikan seluruh persamaan dengan 4 untuk menghilangkan pecahan:\n$$x - 2y = 4$$\n3. Ubah ke bentuk umum implisit:\n$$x - 2y - 4 = 0$$\n4. Jadi, persamaan garis tersebut adalah $x - 2y - 4 = 0$ (pilihan A).",
      "pitfalls": "Lupa menyertakan tanda negatif pada pembagi $b = -2$ sehingga menghasilkan $x + 2y - 4 = 0$."
    },
    "subTopicSlug": "persamaan-garis-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Persamaan Garis Lurus",
    "subTopic": "Persamaan Garis Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Sedang",
    "hint": "Persamaan garis dengan titik potong sumbu $(a, 0)$ dan $(0, b)$ dapat ditentukan menggunakan bentuk intersep: $\\frac{x}{a} + \\frac{y}{b} = 1$."
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
