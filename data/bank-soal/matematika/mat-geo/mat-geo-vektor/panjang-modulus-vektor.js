/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Vektor (mat-geo-vektor)
 * Sub-Bab: Panjang (Modulus) Vektor (mat-geo-vektor-panjang)
 * Slug: panjang-modulus-vektor
 * Indikator: Besar modulus vektor |u| = sqrt(x^2 + y^2 + z^2) dan vektor satuan.
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-vektor-panjang";
  const subTopicSlug = "panjang-modulus-vektor";
  const questions = [
  {
    "id": "mat-geo-vektor-panjang-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-panjang",
    "category": "Panjang Vektor Dua Dimensi",
    "difficulty": "mudah",
    "statement": "Panjang (norma) dari vektor $\\vec{u} = 6\\hat{i} - 8\\hat{j}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "10",
      "14",
      "12",
      "$\\sqrt{28}$",
      "2"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Panjang atau besar suatu vektor dua dimensi $\\vec{u} = x\\hat{i} + y\\hat{j}$ dihitung berdasarkan teorema Pythagoras: $|\\vec{u}| = \\sqrt{x^2 + y^2}$.",
      "steps": "1. Identifikasi komponen skalar vektor: $x = 6$ dan $y = -8$.\n2. Masukkan ke rumus panjang vektor:\n$$|\\vec{u}| = \\sqrt{6^2 + (-8)^2}$$\n3. Kuadratkan masing-masing komponen:\n$$|\\vec{u}| = \\sqrt{36 + 64} = \\sqrt{100}$$\n4. Akarkan nilai tersebut:\n$$|\\vec{u}| = 10$$\n5. Jadi, panjang vektor $\\vec{u}$ adalah 10 satuan (pilihan A).",
      "pitfalls": "Menjumlahkan komponen secara langsung $6 + (-8) = -2$ tanpa menguadratkan terlebih dahulu di dalam akar kuadrat."
    },
    "subTopicSlug": "panjang-modulus-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang (Modulus) Vektor",
    "subTopic": "Panjang (Modulus) Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Panjang atau besar suatu vektor dua dimensi $\\vec{u} = x\\hat{i} + y\\hat{j}$ dihitung berdasarkan teorema Pythagoras: $|\\vec{u}| = \\sqrt{x^2 + y^2}$. **Tips:** Menjumlahkan komponen secara langsung $6 + (-8) = -2$ tanpa menguadratkan terlebih dahulu di dalam akar kuadrat."
  },
  {
    "id": "mat-geo-vektor-panjang-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-panjang",
    "category": "Jarak Antartitik Menggunakan Vektor",
    "difficulty": "mudah",
    "statement": "Diketahui titik $A(1, 2)$ dan titik $B(4, 6)$ pada bidang Cartesius. Panjang vektor perpindahan $\\vec{AB}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "5",
      "7",
      "$\\sqrt{13}$",
      "25",
      "6"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Panjang vektor $\\vec{AB}$ dari titik $A(x_1, y_1)$ ke titik $B(x_2, y_2)$ adalah jarak Euclidean antara kedua titik tersebut: $|\\vec{AB}| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.",
      "steps": "1. Tentukan komponen vektor $\\vec{AB}$:\n$$\\vec{AB} = (4 - 1)\\hat{i} + (6 - 2)\\hat{j} = 3\\hat{i} + 4\\hat{j}$$\n2. Hitung panjang vektor:\n$$|\\vec{AB}| = \\sqrt{3^2 + 4^2}$$\n$$|\\vec{AB}| = \\sqrt{9 + 16} = \\sqrt{25} = 5$$\n3. Jadi, panjang vektor perpindahan $\\vec{AB}$ adalah 5 satuan (pilihan A).",
      "pitfalls": "Lupa menarik akar kuadrat setelah menjumlahkan kuadrat komponen ($9 + 16 = 25$ langsung dipilih)."
    },
    "subTopicSlug": "panjang-modulus-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang (Modulus) Vektor",
    "subTopic": "Panjang (Modulus) Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Panjang vektor $\\vec{AB}$ dari titik $A(x_1, y_1)$ ke titik $B(x_2, y_2)$ adalah jarak Euclidean antara kedua titik tersebut: $|\\vec{AB}| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$."
  },
  {
    "id": "mat-geo-vektor-panjang-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-panjang",
    "category": "Panjang Vektor Tiga Dimensi",
    "difficulty": "mudah",
    "statement": "Panjang dari vektor kolom pada ruang tiga dimensi $\\vec{v} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 6 \\end{pmatrix}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "7",
      "$\\sqrt{11}$",
      "11",
      "5",
      "49"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Panjang vektor di ruang $\\mathbb{R}^3$ dengan komponen $\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}$ dirumuskan sebagai norma Euclidean: $|\\vec{v}| = \\sqrt{x^2 + y^2 + z^2}$.",
      "steps": "1. Ambil nilai masing-masing komponen: $x = 2$, $y = -3$, $z = 6$.\n2. Masukkan ke rumus panjang vektor $\\mathbb{R}^3$:\n$$|\\vec{v}| = \\sqrt{2^2 + (-3)^2 + 6^2}$$\n3. Hitung hasil kuadrat dan jumlahkan:\n$$|\\vec{v}| = \\sqrt{4 + 9 + 36} = \\sqrt{49}$$\n4. Sederhanakan bentuk akar:\n$$|\\vec{v}| = 7$$\n5. Jadi, panjang vektor $\\vec{v}$ adalah 7 satuan (pilihan A).",
      "pitfalls": "Kesalahan saat menguadratkan bilangan negatif $(-3)^2$ yang sering keliru dihitung sebagai $-9$."
    },
    "subTopicSlug": "panjang-modulus-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang (Modulus) Vektor",
    "subTopic": "Panjang (Modulus) Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Panjang vektor di ruang $\\mathbb{R}^3$ dengan komponen $\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}$ dirumuskan sebagai norma Euclidean: $|\\vec{v}| = \\sqrt{x^2 + y^2 + z^2}$. **Tips:** Kesalahan saat menguadratkan bilangan negatif $(-3)^2$ yang sering keliru dihitung sebagai $-9$."
  },
  {
    "id": "mat-geo-vektor-panjang-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-panjang",
    "category": "Panjang Vektor Hasil Perkalian Skalar",
    "difficulty": "mudah",
    "statement": "Diketahui vektor $\\vec{a} = 3\\hat{i} - 4\\hat{j}$. Panjang dari vektor hasil perkalian skalar $2\\vec{a}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "10",
      "5",
      "20",
      "14",
      "7"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Panjang dari perkalian skalar suatu vektor memenuhi sifat homogenitas norma: $|k\\vec{a}| = |k| \\cdot |\\vec{a}|$.",
      "steps": "1. Hitung panjang vektor dasar $\\vec{a}$:\n$$|\\vec{a}| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$\n2. Gunakan sifat perkalian skalar dengan $k = 2$:\n$$|2\\vec{a}| = |2| \\cdot |\\vec{a}| = 2 \\times 5 = 10$$\n3. (Atau secara langsung mencari $2\\vec{a} = 6\\hat{i} - 8\\hat{j}$, sehingga $\\sqrt{6^2 + (-8)^2} = \\sqrt{100} = 10$).\n4. Jadi, panjang vektor $2\\vec{a}$ adalah 10 satuan (pilihan A).",
      "pitfalls": "Hanya menghitung panjang vektor awal $\\vec{a}$ bernilai 5 tanpa mengalikannya dengan faktor skala 2."
    },
    "subTopicSlug": "panjang-modulus-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang (Modulus) Vektor",
    "subTopic": "Panjang (Modulus) Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Panjang dari perkalian skalar suatu vektor memenuhi sifat homogenitas norma: $|k\\vec{a}| = |k| \\cdot |\\vec{a}|$. **Tips:** Hanya menghitung panjang vektor awal $\\vec{a}$ bernilai 5 tanpa mengalikannya dengan faktor skala 2."
  },
  {
    "id": "mat-geo-vektor-panjang-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-panjang",
    "category": "Komponen dari Panjang Vektor yang Diketahui",
    "difficulty": "mudah",
    "statement": "Diketahui vektor $\\vec{w} = k\\hat{i} + 12\\hat{j}$. Jika panjang vektor $|\\vec{w}| = 13$ dan konstanta $k > 0$, maka nilai $k$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "5",
      "4",
      "1",
      "25",
      "7"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jika panjang vektor diketahui, komponen yang belum diketahui dapat dicari dengan menyusun persamaan kuadrat dari rumus panjang vektor: $|\\vec{w}|^2 = x^2 + y^2$.",
      "steps": "1. Terapkan rumus kuadrat panjang vektor:\n$$|\\vec{w}|^2 = k^2 + 12^2$$\n2. Substitusikan $|\\vec{w}| = 13$:\n$$13^2 = k^2 + 144$$\n$$169 = k^2 + 144$$\n3. Kurangkan kedua ruas dengan 144:\n$$k^2 = 169 - 144 = 25$$\n4. Karena disyaratkan $k > 0$, maka:\n$$k = \\sqrt{25} = 5$$\n5. Jadi, nilai $k$ adalah 5 (pilihan A).",
      "pitfalls": "Mengurangkan langsung $13 - 12 = 1$ alih-alih mengurangkan bentuk kuadrat Pythagoras."
    },
    "subTopicSlug": "panjang-modulus-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang (Modulus) Vektor",
    "subTopic": "Panjang (Modulus) Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Jika panjang vektor diketahui, komponen yang belum diketahui dapat dicari dengan menyusun persamaan kuadrat dari rumus panjang vektor: $|\\vec{w}|^2 = x^2 + y^2$."
  },
  {
    "id": "mat-geo-vektor-panjang-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-panjang",
    "category": "Panjang Vektor Resultan Dua Vektor Berpenjuru",
    "difficulty": "sedang",
    "statement": "Dua buah vektor $\\vec{a}$ dan $\\vec{b}$ masing-masing memiliki panjang $|\\vec{a}| = 4$ dan $|\\vec{b}| = 6$. Jika sudut yang dibentuk oleh kedua vektor tersebut adalah $60^\\circ$, maka panjang vektor resultan $|\\vec{a} + \\vec{b}|$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\sqrt{19}$",
      "$2\\sqrt{7}$",
      "10",
      "$\\sqrt{52}$",
      "$4\\sqrt{5}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Panjang vektor penjumlahan $|\\vec{a} + \\vec{b}|$ dihitung menggunakan aturan kosinus pada vektor: $|\\vec{a} + \\vec{b}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 + 2|\\vec{a}||\\vec{b}|\\cos(\\theta)$.",
      "steps": "1. Masukkan nilai besar vektor dan sudut ke rumus resultan:\n$$|\\vec{a} + \\vec{b}|^2 = 4^2 + 6^2 + 2(4)(6)\\cos(60^\\circ)$$\n2. Gunakan nilai $\\cos(60^\\circ) = \\frac{1}{2}$:\n$$|\\vec{a} + \\vec{b}|^2 = 16 + 36 + 48\\left(\\frac{1}{2}\\right)$$\n$$|\\vec{a} + \\vec{b}|^2 = 52 + 24 = 76$$\n3. Tarik akar kuadrat:\n$$|\\vec{a} + \\vec{b}| = \\sqrt{76} = \\sqrt{4 \\times 19} = 2\\sqrt{19}$$\n4. Jadi, panjang vektor resultan adalah $2\\sqrt{19}$ (pilihan A).",
      "pitfalls": "Menjumlahkan panjang secara skalar biasa $4 + 6 = 10$, yang hanya berlaku jika kedua vektor berimpit dan searah (sudut $0^\\circ$)."
    },
    "subTopicSlug": "panjang-modulus-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang (Modulus) Vektor",
    "subTopic": "Panjang (Modulus) Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Panjang vektor penjumlahan $|\\vec{a} + \\vec{b}|$ dihitung menggunakan aturan kosinus pada vektor: $|\\vec{a} + \\vec{b}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 + 2|\\vec{a}||\\vec{b}|\\cos(\\theta)$."
  },
  {
    "id": "mat-geo-vektor-panjang-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-panjang",
    "category": "Panjang Vektor Selisih dengan Teorema Jajar Genjang",
    "difficulty": "sedang",
    "statement": "Diketahui vektor $\\vec{u}$ dan $\\vec{v}$ memenuhi $|\\vec{u}| = 5$, $|\\vec{v}| = 3$, dan panjang vektor resultannya $|\\vec{u} + \\vec{v}| = 7$. Panjang dari vektor selisih $|\\vec{u} - \\vec{v}|$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\sqrt{19}$",
      "$\\sqrt{17}$",
      "$\\sqrt{21}$",
      "4",
      "5"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Identitas jajar genjang pada vektor menyatakan hubungan antara jumlah dan selisih dua vektor: $|\\vec{u} + \\vec{v}|^2 + |\\vec{u} - \\vec{v}|^2 = 2(|\\vec{u}|^2 + |\\vec{v}|^2)$.",
      "steps": "1. Tuliskan rumus identitas jajar genjang:\n$$|\\vec{u} + \\vec{v}|^2 + |\\vec{u} - \\vec{v}|^2 = 2(|\\vec{u}|^2 + |\\vec{v}|^2)$$\n2. Substitusikan nilai-nilai yang diketahui:\n$$7^2 + |\\vec{u} - \\vec{v}|^2 = 2(5^2 + 3^2)$$\n$$49 + |\\vec{u} - \\vec{v}|^2 = 2(25 + 9) = 2(34) = 68$$\n3. Selesaikan untuk mencari kuadrat panjang selisih:\n$$|\\vec{u} - \\vec{v}|^2 = 68 - 49 = 19$$\n4. Tarik akar kuadrat:\n$$|\\vec{u} - \\vec{v}| = \\sqrt{19}$$\n5. Jadi, panjang vektor selisih $|\\vec{u} - \\vec{v}|$ adalah $\\sqrt{19}$ (pilihan A).",
      "pitfalls": "Salah mengurangkan secara aljabar skalar $|5 - 3| = 2$ atau keliru memasukkan tanda pada hukum identitas jajar genjang."
    },
    "subTopicSlug": "panjang-modulus-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang (Modulus) Vektor",
    "subTopic": "Panjang (Modulus) Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Identitas jajar genjang pada vektor menyatakan hubungan antara jumlah dan selisih dua vektor: $|\\vec{u} + \\vec{v}|^2 + |\\vec{u} - \\vec{v}|^2 = 2(|\\vec{u}|^2 + |\\vec{v}|^2)$."
  },
  {
    "id": "mat-geo-vektor-panjang-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-panjang",
    "category": "Nilai Minimum Panjang Kombinasi Vektor Berparameter",
    "difficulty": "sedang",
    "statement": "Diketahui vektor $\\vec{a} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$ dan $\\vec{b} = \\hat{i} + 2\\hat{j} - \\hat{k}$. Jika vektor $\\vec{c} = \\vec{a} + t\\vec{b}$ dengan parameter bilangan real $t \\in \\mathbb{R}$, maka nilai minimum dari panjang vektor $|\\vec{c}|$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{5}{3}\\sqrt{3}$",
      "$\\frac{5}{2}\\sqrt{2}$",
      "3",
      "$\\sqrt{7}$",
      "$\\frac{4}{3}\\sqrt{6}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Panjang minimum kombinasi linier $|\\vec{a} + t\\vec{b}|$ dapat ditentukan dengan mencari nilai ekstrim minimum fungsi kuadrat dari kuadrat panjang vektor $f(t) = |\\vec{c}|^2$.",
      "steps": "1. Nyatakan vektor $\\vec{c}$ dalam parameter $t$:\n$$\\vec{c} = (2 + t)\\hat{i} + (-1 + 2t)\\hat{j} + (2 - t)\\hat{k}$$\n2. Hitung kuadrat norma $|\\vec{c}|^2$:\n$$|\\vec{c}|^2 = (2 + t)^2 + (-1 + 2t)^2 + (2 - t)^2$$\n$$|\\vec{c}|^2 = (t^2 + 4t + 4) + (4t^2 - 4t + 1) + (t^2 - 4t + 4) = 6t^2 - 4t + 9$$\n3. Cari nilai $t$ pembuat minimum fungsi kuadrat $f(t) = 6t^2 - 4t + 9$:\n$$t_{\\text{min}} = -\\frac{b}{2a} = -\\frac{-4}{2(6)} = \\frac{4}{12} = \\frac{1}{3}$$\n4. Substitusikan $t = \\frac{1}{3}$ untuk mendapatkan kuadrat panjang minimum:\n$$|\\vec{c}|_{\\text{min}}^2 = 6\\left(\\frac{1}{9}\\right) - 4\\left(\\frac{1}{3}\\right) + 9 = \\frac{2}{3} - \\frac{4}{3} + \\frac{27}{3} = \\frac{25}{3}$$\n5. Akarkan hasil tersebut dan rasionalkan penyebutnya:\n$$|\\vec{c}|_{\\text{min}} = \\sqrt{\\frac{25}{3}} = \\frac{5}{\\sqrt{3}} = \\frac{5}{3}\\sqrt{3}$$\n6. Jadi, nilai minimum panjang vektor $|\\vec{c}|$ adalah $\\frac{5}{3}\\sqrt{3}$ (pilihan A).",
      "pitfalls": "Lupa menarik akar kuadrat di langkah akhir sehingga memilih nilai kuadrat panjang $\\frac{25}{3}$."
    },
    "subTopicSlug": "panjang-modulus-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang (Modulus) Vektor",
    "subTopic": "Panjang (Modulus) Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Panjang minimum kombinasi linier $|\\vec{a} + t\\vec{b}|$ dapat ditentukan dengan mencari nilai ekstrim minimum fungsi kuadrat dari kuadrat panjang vektor $f(t) = |\\vec{c}|^2$. **Tips:** Lupa menarik akar kuadrat di langkah akhir sehingga memilih nilai kuadrat panjang $\\frac{25}{3}$."
  },
  {
    "id": "mat-geo-vektor-panjang-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-panjang",
    "category": "Keliling Segitiga Menggunakan Norma Vektor Sisi",
    "difficulty": "sedang",
    "statement": "Titik-titik sudut sebuah segitiga $PQR$ pada ruang dimensi tiga memiliki koordinat $P(1, 1, 2)$, $Q(4, 1, 6)$, dan $R(1, 5, 2)$. Keliling dari segitiga $PQR$ tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$9 + \\sqrt{41}$",
      "$9 + \\sqrt{37}$",
      "$10 + \\sqrt{41}$",
      "15",
      "$8 + 2\\sqrt{10}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Keliling suatu segitiga dihitung dengan menjumlahkan panjang ketiga vektor sisi pembentuknya: $K = |\\vec{PQ}| + |\\vec{PR}| + |\\vec{QR}|$.",
      "steps": "1. Hitung panjang sisi $PQ$:\n$$\\vec{PQ} = (4 - 1)\\hat{i} + (1 - 1)\\hat{j} + (6 - 2)\\hat{k} = 3\\hat{i} + 4\\hat{k}$$\n$$|\\vec{PQ}| = \\sqrt{3^2 + 0^2 + 4^2} = \\sqrt{25} = 5$$\n2. Hitung panjang sisi $PR$:\n$$\\vec{PR} = (1 - 1)\\hat{i} + (5 - 1)\\hat{j} + (2 - 2)\\hat{k} = 4\\hat{j}$$\n$$|\\vec{PR}| = \\sqrt{0^2 + 4^2 + 0^2} = 4$$\n3. Hitung panjang sisi $QR$:\n$$\\vec{QR} = (1 - 4)\\hat{i} + (5 - 1)\\hat{j} + (2 - 6)\\hat{k} = -3\\hat{i} + 4\\hat{j} - 4\\hat{k}$$\n$$|\\vec{QR}| = \\sqrt{(-3)^2 + 4^2 + (-4)^2} = \\sqrt{9 + 16 + 16} = \\sqrt{41}$$\n4. Jumlahkan panjang ketiga sisi:\n$$K = 5 + 4 + \\sqrt{41} = 9 + \\sqrt{41}$$\n5. Jadi, keliling segitiga $PQR$ adalah $9 + \\sqrt{41}$ (pilihan A).",
      "pitfalls": "Kesalahan saat menghitung komponen selisih titik untuk sisi ketiga $\\vec{QR}$ atau salah menguadratkan tanda negatif $(-3)^2$ dan $(-4)^2$."
    },
    "subTopicSlug": "panjang-modulus-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang (Modulus) Vektor",
    "subTopic": "Panjang (Modulus) Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Keliling suatu segitiga dihitung dengan menjumlahkan panjang ketiga vektor sisi pembentuknya: $K = |\\vec{PQ}| + |\\vec{PR}| + |\\vec{QR}|$."
  },
  {
    "id": "mat-geo-vektor-panjang-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-panjang",
    "category": "Panjang Vektor pada Kondisi Ortogonalitas",
    "difficulty": "sedang",
    "statement": "Diketahui vektor $\\vec{u}$ dan $\\vec{v}$ merupakan dua vektor yang saling tegak lurus (ortogonal). Jika panjang vektor $|\\vec{u}| = 8$ dan panjang resultannya $|\\vec{u} + \\vec{v}| = 17$, maka panjang vektor $\\vec{v}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "15",
      "12",
      "13",
      "9",
      "25"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bila dua vektor saling tegak lurus (ortogonal), sudut apitnya $\\theta = 90^\\circ$ sehingga perkalian titiknya bernilai nol ($\\vec{u} \\cdot \\vec{v} = 0$). Teorema Pythagoras berlaku: $|\\vec{u} + \\vec{v}|^2 = |\\vec{u}|^2 + |\\vec{v}|^2$.",
      "steps": "1. Gunakan rumus resultan dua vektor tegak lurus:\n$$|\\vec{u} + \\vec{v}|^2 = |\\vec{u}|^2 + |\\vec{v}|^2$$\n2. Masukkan nilai yang diketahui:\n$$17^2 = 8^2 + |\\vec{v}|^2$$\n$$289 = 64 + |\\vec{v}|^2$$\n3. Kurangkan kedua ruas dengan 64:\n$$|\\vec{v}|^2 = 289 - 64 = 225$$\n4. Tarik akar kuadrat:\n$$|\\vec{v}| = \\sqrt{225} = 15$$\n5. Jadi, panjang vektor $\\vec{v}$ adalah 15 satuan (pilihan A).",
      "pitfalls": "Terkecoh langsung mengurangkan nilai skalar tanpa menguadratkan terlebih dahulu: $17 - 8 = 9$."
    },
    "subTopicSlug": "panjang-modulus-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang (Modulus) Vektor",
    "subTopic": "Panjang (Modulus) Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Bila dua vektor saling tegak lurus (ortogonal), sudut apitnya $\\theta = 90^\\circ$ sehingga perkalian titiknya bernilai nol ($\\vec{u} \\cdot \\vec{v} = 0$). Teorema Pythagoras berlaku: $|\\vec{u} + \\vec{v}|^2 = |\\vec{u}|^2 + |\\vec{v}|^2$."
  },
  {
    "id": "sup-mtk-geo-01",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-vektor-panjang",
    "category": "Panjang dan Vektor Satuan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Diketahui sebuah vektor pada ruang tiga dimensi $\\mathbb{R}^3$ adalah $\\vec{v} = 3\\hat{i} - 4\\hat{j} + 12\\hat{k}$. Panjang (besar) dari vektor $\\vec{v}$ tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$13$",
      "$11$",
      "$15$",
      "$\\sqrt{17}$",
      "$19$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Panjang (Norm) Vektor Dimensi Tiga:</strong><br>Untuk $\\vec{v} = v_x \\hat{i} + v_y \\hat{j} + v_z \\hat{k}$, panjang vektor didefinisikan sebagai $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2 + v_z^2}$.</div>",
      "steps": "<ol><li>Komponen vektor: $v_x = 3$, $v_y = -4$, $v_z = 12$.</li><li>$|\\vec{v}| = \\sqrt{3^2 + (-4)^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Lupa mengkuadratkan tanda negatif sehingga keliru menghitung $9 - 16 + 144$.</div>"
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang (Modulus) Vektor",
    "subTopic": "Panjang (Modulus) Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-vektor",
    "subTopicSlug": "panjang-modulus-vektor",
    "hint": "Panjang (Norm) Vektor Dimensi Tiga: Untuk $\\vec{v} = v_x \\hat{i} + v_y \\hat{j} + v_z \\hat{k}$, panjang vektor didefinisikan sebagai $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2 + v_z^2}$. **Tips:** Lupa mengkuadratkan tanda negatif sehingga keliru menghitung $9 - 16 + 144$."
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
