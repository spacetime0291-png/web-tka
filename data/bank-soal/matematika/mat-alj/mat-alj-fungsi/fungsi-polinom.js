/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Fungsi (mat-alj-fungsi)
 * Sub-Bab: Fungsi Polinom (mat-alj-fungsi-polinom)
 * Slug: fungsi-polinom
 * Indikator: Grafik fungsi linear, kuadrat, kubik, dan titik ekstrem parabola.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-fungsi-polinom";
  const subTopicSlug = "fungsi-polinom";
  const questions = [
  {
    "id": "mat-alj-fungsi-polinom-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-polinom",
    "category": "Titik Balik Ekstrem Parabola",
    "difficulty": "mudah",
    "statement": "Koordinat titik balik (puncak) dari grafik fungsi kuadrat $f(x) = x^2 - 6x + 5$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(3, -4)$",
      "$(3, 4)$",
      "$(-3, -4)$",
      "$(6, 5)$",
      "$(3, -5)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik puncak parabola $f(x) = ax^2 + bx + c$ berada pada koordinat $(x_p, y_p)$ dengan $x_p = -\\frac{b}{2a}$ dan $y_p = f(x_p) = -\\frac{D}{4a}$.",
      "steps": "1. Identifikasi koefisien: $a = 1, b = -6, c = 5$.<br>2. Hitung absis titik puncak:<br>$$x_p = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = 3$$<br>3. Hitung ordinat titik puncak dengan substitusi $x_p = 3$:<br>$$y_p = f(3) = (3)^2 - 6(3) + 5 = 9 - 18 + 5 = -4$$<br>4. Jadi koordinat titik balik parabola adalah $(3, -4)$ (pilihan A).",
      "pitfalls": "Salah tanda pada rumus sumbu simetri sehingga menghitung $x_p = -3$ yang menghasilkan ordinat keliru."
    },
    "subTopicSlug": "fungsi-polinom",
    "bab": "Aljabar",
    "subBab": "Fungsi Polinom",
    "subTopic": "Fungsi Polinom",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-fungsi-polinom-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-polinom",
    "category": "Titik Potong Grafik dengan Sumbu-X",
    "difficulty": "mudah",
    "statement": "Grafik fungsi kuadrat $f(x) = 2x^2 + 5x - 3$ memotong sumbu-$X$ di titik ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\left(\\frac{1}{2}, 0\\right)$ dan $(-3, 0)$",
      "$\\left(-\\frac{1}{2}, 0\\right)$ dan $(3, 0)$",
      "$(1, 0)$ dan $(-3, 0)$",
      "$\\left(\\frac{1}{2}, 0\\right)$ dan $(3, 0)$",
      "$(0, -3)$ dan $(0, 2)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik potong grafik dengan sumbu-$X$ diperoleh saat nilai fungsi sama dengan nol ($f(x) = 0$), yang menghasilkan persamaan kuadrat untuk mencari akar-akarnya.",
      "steps": "1. Tentukan pembuat nol: $2x^2 + 5x - 3 = 0$.<br>2. Faktorkan persamaan kuadrat:<br>$$(2x - 1)(x + 3) = 0$$<br>3. Selesaikan nilai variabel $x$:<br>$$2x - 1 = 0 \\implies x = \\frac{1}{2}$$<br>$$x + 3 = 0 \\implies x = -3$$<br>4. Koordinat titik potong sumbu-$X$ adalah $\\left(\\frac{1}{2}, 0\\right)$ dan $(-3, 0)$.<br>5. Pilihan yang tepat adalah A.",
      "pitfalls": "Tertukar tanda saat menentukan akar pemfaktoran sehingga memilih $-\\frac{1}{2}$ dan $3$."
    },
    "subTopicSlug": "fungsi-polinom",
    "bab": "Aljabar",
    "subBab": "Fungsi Polinom",
    "subTopic": "Fungsi Polinom",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-fungsi-polinom-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-polinom",
    "category": "Analisis Keterbukaan dan Diskriminan Parabola",
    "difficulty": "mudah",
    "statement": "Karakteristik grafik fungsi kuadrat $f(x) = -x^2 + 4x - 5$ pada bidang Cartesius adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Terbuka ke bawah dan tidak memotong sumbu-X",
      "Terbuka ke atas dan memotong sumbu-X di dua titik",
      "Terbuka ke bawah dan menyinggung sumbu-X",
      "Terbuka ke atas dan tidak memotong sumbu-X",
      "Terbuka ke bawah dan memotong sumbu-X di dua titik"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Keterbukaan kurva parabola ditentukan oleh tanda koefisien $a$ ($a > 0$ terbuka ke atas, $a < 0$ terbuka ke bawah). Banyaknya titik potong dengan sumbu-$X$ ditentukan oleh diskriminan $D = b^2 - 4ac$ ($D > 0$ dua titik potong, $D = 0$ menyinggung, $D < 0$ tidak memotong).",
      "steps": "1. Identifikasi nilai $a$: $a = -1 < 0$, maka parabola terbuka ke bawah.<br>2. Hitung nilai diskriminan $D$:<br>$$D = b^2 - 4ac = (4)^2 - 4(-1)(-5) = 16 - 20 = -4$$<br>3. Karena $D = -4 < 0$, grafik berada sepenuhnya di bawah sumbu-$X$ (definit negatif) dan tidak memotong sumbu-$X$.<br>4. Jadi grafik terbuka ke bawah dan tidak memotong sumbu-$X$ (pilihan A).",
      "pitfalls": "Salah menghitung perkalian tanda negatif pada $-4(-1)(-5)$ sehingga mengira $D = 16 + 20 = 36$."
    },
    "subTopicSlug": "fungsi-polinom",
    "bab": "Aljabar",
    "subBab": "Fungsi Polinom",
    "subTopic": "Fungsi Polinom",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-fungsi-polinom-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-polinom",
    "category": "Titik Potong Polinom dengan Sumbu-Y",
    "difficulty": "mudah",
    "statement": "Grafik fungsi polinom kubik $f(x) = 3x^3 - 5x^2 + 2x - 8$ memotong sumbu-$Y$ pada koordinat ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(0, -8)$",
      "$(0, 8)$",
      "$(-8, 0)$",
      "$(0, 3)$",
      "$(0, -5)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik potong grafik fungsi apa pun dengan sumbu-$Y$ diperoleh saat nilai absis sama dengan nol ($x = 0$).",
      "steps": "1. Substitusikan $x = 0$ ke dalam fungsi $f(x)$:<br>$$f(0) = 3(0)^3 - 5(0)^2 + 2(0) - 8 = -8$$<br>2. Koordinat titik potongnya adalah $(0, f(0)) = (0, -8)$.<br>3. Jadi titik potong dengan sumbu-$Y$ adalah $(0, -8)$ (pilihan A).",
      "pitfalls": "Tertukar antara koordinat absis dan ordinat, yaitu memilih $(-8, 0)$ alih-alih $(0, -8)$."
    },
    "subTopicSlug": "fungsi-polinom",
    "bab": "Aljabar",
    "subBab": "Fungsi Polinom",
    "subTopic": "Fungsi Polinom",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-fungsi-polinom-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-polinom",
    "category": "Persamaan Sumbu Simetri Parabola",
    "difficulty": "mudah",
    "statement": "Persamaan garis sumbu simetri dari grafik fungsi kuadrat $f(x) = 3x^2 + 12x - 7$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x = -2$",
      "$x = 2$",
      "$x = -4$",
      "$x = 4$",
      "$y = -2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Garis sumbu simetri parabola adalah garis vertikal yang membagi parabola menjadi dua bagian yang simetris, dengan persamaan $x = -\\frac{b}{2a}$.",
      "steps": "1. Dari fungsi $f(x) = 3x^2 + 12x - 7$, diperoleh $a = 3$ dan $b = 12$.<br>2. Hitung persamaan sumbu simetri:<br>$$x = -\\frac{b}{2a} = -\\frac{12}{2(3)} = -\\frac{12}{6} = -2$$<br>3. Jadi persamaan sumbu simetri adalah garis $x = -2$ (pilihan A).",
      "pitfalls": "Memilih persamaan garis horizontal $y = -2$ atau keliru tanda menjadi $x = 2$."
    },
    "subTopicSlug": "fungsi-polinom",
    "bab": "Aljabar",
    "subBab": "Fungsi Polinom",
    "subTopic": "Fungsi Polinom",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-fungsi-polinom-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-polinom",
    "category": "Titik Stasioner Fungsi Kubik",
    "difficulty": "sedang",
    "statement": "Titik-titik stasioner dari kurva grafik fungsi kubik $f(x) = x^3 - 3x^2 - 9x + 5$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(-1, 10)$ dan $(3, -22)$",
      "$(1, -6)$ dan $(3, -22)$",
      "$(-1, 10)$ dan $(-3, -22)$",
      "$(1, 10)$ dan $(-3, -22)$",
      "$(0, 5)$ dan $(3, -22)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik stasioner suatu fungsi kontinu $f(x)$ terjadi pada saat gradien garis singgungnya bernilai nol, yaitu memenuhi syarat turunan pertama $f'(x) = 0$.",
      "steps": "1. Turunkan fungsi $f(x)$ terhadap $x$:\n$$f'(x) = 3x^2 - 6x - 9$$\n2. Terapkan syarat stasioner $f'(x) = 0$:\n$$3x^2 - 6x - 9 = 0 \\implies x^2 - 2x - 3 = 0$$\n3. Faktorkan persamaan kuadrat:\n$$(x - 3)(x + 1) = 0 \\implies x = 3 \\text{ atau } x = -1$$\n4. Hitung nilai fungsi untuk masing-masing absis stasioner:\n- Untuk $x = -1$:\n$$f(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 5 = -1 - 3 + 9 + 5 = 10$$\n- Untuk $x = 3$:\n$$f(3) = (3)^3 - 3(3)^2 - 9(3) + 5 = 27 - 27 - 27 + 5 = -22$$\n5. Jadi koordinat titik stasionernya adalah $(-1, 10)$ dan $(3, -22)$ (pilihan A).",
      "pitfalls": "Salah tanda saat memfaktorkan $x^2 - 2x - 3 = 0$ sehingga memperoleh $x = 1$ dan $x = -3$."
    },
    "subTopicSlug": "fungsi-polinom",
    "bab": "Aljabar",
    "subBab": "Fungsi Polinom",
    "subTopic": "Fungsi Polinom",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-fungsi-polinom-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-polinom",
    "category": "Kedudukan Parabola Menyinggung Garis Lurus",
    "difficulty": "sedang",
    "statement": "Grafik fungsi kuadrat $f(x) = x^2 - 2x + c$ menyinggung garis lurus $y = 2x - 1$. Nilai konstanta $c$ yang memenuhi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Parabola menyinggung garis lurus jika dan hanya jika persamaan kuadrat sekutu hasil substitusi kedua persamaan memiliki nilai diskriminan sama dengan nol ($D = 0$).",
      "steps": "1. Samakan kedua persamaan kurva:\n$$x^2 - 2x + c = 2x - 1$$\n2. Susun dalam bentuk persamaan kuadrat standar $Ax^2 + Bx + C = 0$:\n$$x^2 - 4x + (c + 1) = 0$$\n3. Terapkan syarat menyinggung ($D = 0$):\n$$D = B^2 - 4AC = (-4)^2 - 4(1)(c + 1) = 0$$\n4. Selesaikan persamaan aljabar:\n$$16 - 4c - 4 = 0 \\implies 12 - 4c = 0 \\implies 4c = 12 \\implies c = 3$$\n5. Jadi nilai konstanta $c$ adalah 3 (pilihan C).",
      "pitfalls": "Lupa mengubah tanda konstanta $-1$ menjadi $+1$ saat memindahkan ke ruas kiri."
    },
    "subTopicSlug": "fungsi-polinom",
    "bab": "Aljabar",
    "subBab": "Fungsi Polinom",
    "subTopic": "Fungsi Polinom",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-fungsi-polinom-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-polinom",
    "category": "Menyusun Rumus Fungsi Kuadrat dari Titik Balik",
    "difficulty": "sedang",
    "statement": "Suatu fungsi kuadrat memiliki titik puncak di $(2, -1)$ dan grafiknya memotong sumbu-$Y$ di titik $(0, 7)$. Rumus fungsi kuadrat tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$f(x) = 2x^2 - 8x + 7$",
      "$f(x) = 2x^2 + 8x + 7$",
      "$f(x) = x^2 - 4x + 7$",
      "$f(x) = 2x^2 - 4x + 7$",
      "$f(x) = 2x^2 - 8x - 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi kuadrat yang diketahui titik baliknya $(x_p, y_p)$ dapat dirumuskan sebagai $f(x) = a(x - x_p)^2 + y_p$. Nilai parameter $a$ dicari melalui substitusi titik lain yang dilalui grafik.",
      "steps": "1. Masukkan titik balik $(2, -1)$ ke bentuk baku:\n$$f(x) = a(x - 2)^2 - 1$$\n2. Substitusikan titik $(0, 7)$ yang dilalui:\n$$7 = a(0 - 2)^2 - 1 \\implies 7 = 4a - 1 \\implies 4a = 8 \\implies a = 2$$\n3. Jabarkan rumus fungsi kuadrat dengan $a = 2$:\n$$f(x) = 2(x^2 - 4x + 4) - 1 = 2x^2 - 8x + 8 - 1 = 2x^2 - 8x + 7$$\n4. Jadi rumus fungsinya adalah $f(x) = 2x^2 - 8x + 7$ (pilihan A).",
      "pitfalls": "Lupa mengalikan konstanta 4 di dalam kurung dengan $a = 2$, sehingga hanya menghitung $4 - 1 = 3$ alih-alih $8 - 1 = 7$."
    },
    "subTopicSlug": "fungsi-polinom",
    "bab": "Aljabar",
    "subBab": "Fungsi Polinom",
    "subTopic": "Fungsi Polinom",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-fungsi-polinom-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-polinom",
    "category": "Syarat Definit Positif Fungsi Kuadrat",
    "difficulty": "sedang",
    "statement": "Fungsi kuadrat $f(x) = (m - 1)x^2 + 4x + (m + 2)$ bernilai definit positif untuk setiap $x \\in \\mathbb{R}$ jika dan hanya jika nilai $m$ memenuhi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$m > 2$",
      "$m > 1$",
      "$m < -3 \\text{ atau } m > 2$",
      "$-3 < m < 2$",
      "$1 < m < 2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi kuadrat definit positif (selalu bernilai positif untuk semua $x \\in \\mathbb{R}$) harus memenuhi dua syarat mutlak: koefisien utama positif ($a > 0$) dan nilai diskriminan negatif ($D < 0$).",
      "steps": "1. Syarat pertama ($a > 0$):\n$$m - 1 > 0 \\implies m > 1$$\n2. Syarat kedua ($D < 0$):\n$$D = b^2 - 4ac = (4)^2 - 4(m - 1)(m + 2) < 0$$\n$$16 - 4(m^2 + m - 2) < 0$$\nBagi kedua ruas dengan 4:\n$$4 - (m^2 + m - 2) < 0 \\implies -m^2 - m + 6 < 0 \\implies m^2 + m - 6 > 0$$\n3. Faktorkan pertidaksamaan kuadrat:\n$$(m + 3)(m - 2) > 0 \\implies m < -3 \\text{ atau } m > 2$$\n4. Tentukan irisan dari syarat pertama ($m > 1$) dan syarat kedua ($m < -3$ atau $m > 2$):\n$$(m > 1) \\cap (m < -3 \\cup m > 2) = m > 2$$\n5. Jadi nilai yang memenuhi adalah $m > 2$ (pilihan A).",
      "pitfalls": "Lupa mengiriskan dengan syarat $a > 0$ sehingga keliru memilih $m < -3$ atau $m > 2$."
    },
    "subTopicSlug": "fungsi-polinom",
    "bab": "Aljabar",
    "subBab": "Fungsi Polinom",
    "subTopic": "Fungsi Polinom",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-fungsi-polinom-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-polinom",
    "category": "Translasi Grafik Parabola",
    "difficulty": "sedang",
    "statement": "Grafik fungsi kuadrat $f(x) = x^2 - 4x + 3$ ditranslasikan sejauh 3 satuan ke arah sumbu-$X$ positif (ke kanan) dan 2 satuan ke arah sumbu-$Y$ positif (ke atas) menghasilkan grafik fungsi $g(x)$. Persamaan fungsi $g(x)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$g(x) = x^2 - 10x + 26$",
      "$g(x) = x^2 - 10x + 24$",
      "$g(x) = x^2 - 2x + 2$",
      "$g(x) = x^2 + 2x + 6$",
      "$g(x) = x^2 - 10x + 22$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Translasi fungsi $y = f(x)$ sejauh $h$ satuan ke kanan dan $k$ satuan ke atas menghasilkan fungsi baru $y = f(x - h) + k$.",
      "steps": "1. Identifikasi pergeseran: $h = 3$ dan $k = 2$, sehingga $g(x) = f(x - 3) + 2$.<br>2. Substitusikan $(x - 3)$ ke dalam fungsi $f(x)$:\n$$f(x - 3) = (x - 3)^2 - 4(x - 3) + 3$$\n3. Jabarkan suku-suku aljabar:\n$$f(x - 3) = (x^2 - 6x + 9) - 4x + 12 + 3 = x^2 - 10x + 24$$\n4. Tambahkan pergeseran vertikal $k = +2$:\n$$g(x) = (x^2 - 10x + 24) + 2 = x^2 - 10x + 26$$\n5. Jadi persamaan fungsi hasil pergeseran adalah $g(x) = x^2 - 10x + 26$ (pilihan A).",
      "pitfalls": "Tertukar tanda pergeseran horizontal, yaitu menggunakan $(x + 3)$ padahal pergeseran ke kanan menggunakan $(x - 3)$."
    },
    "subTopicSlug": "fungsi-polinom",
    "bab": "Aljabar",
    "subBab": "Fungsi Polinom",
    "subTopic": "Fungsi Polinom",
    "chapterTitle": "Aljabar",
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
