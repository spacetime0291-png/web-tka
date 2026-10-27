/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Vektor (mat-geo-vektor)
 * Sub-Bab: Perbandingan Ruas Garis Vektor (mat-geo-vektor-perbandingan)
 * Slug: perbandingan-ruas-garis-vektor
 * Indikator: Vektor pembagi ruas garis di dalam dan di luar dengan rasio m : n.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-vektor-perbandingan";
  const subTopicSlug = "perbandingan-ruas-garis-vektor";
  const questions = [
  {
    "id": "mat-geo-vektor-perbandingan-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-perbandingan",
    "category": "Titik Tengah Ruas Garis",
    "difficulty": "mudah",
    "statement": "Titik $M$ merupakan titik tengah dari ruas garis yang menghubungkan titik $A(2, 6)$ dan titik $B(8, -2)$. Koordinat titik $M$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(5, 2)$",
      "$(6, 4)$",
      "$(5, 4)$",
      "$(3, 2)$",
      "$(10, 4)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik tengah suatu ruas garis merupakan titik pembagi dengan rasio $1 : 1$, sehingga vektor posisinya merupakan rata-rata dari kedua koordinat ujungnya: $\\vec{m} = \\frac{\\vec{a} + \\vec{b}}{2}$.",
      "steps": "1. Tentukan komponen absis $x_M$:\n$$x_M = \\frac{x_A + x_B}{2} = \\frac{2 + 8}{2} = \\frac{10}{2} = 5$$\n2. Tentukan komponen ordinat $y_M$:\n$$y_M = \\frac{y_A + y_B}{2} = \\frac{6 + (-2)}{2} = \\frac{4}{2} = 2$$\n3. Susun koordinat titik tengah $M$:\n$$M(x_M, y_M) = (5, 2)$$\n4. Jadi, koordinat titik tengah adalah $(5, 2)$ (pilihan A).",
      "pitfalls": "Kesalahan hitung saat menjumlahkan bilangan negatif $6 + (-2) = 4$, yang sering keliru dihitung menjadi 8."
    },
    "subTopicSlug": "perbandingan-ruas-garis-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perbandingan Ruas Garis Vektor",
    "subTopic": "Perbandingan Ruas Garis Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Titik tengah suatu ruas garis merupakan titik pembagi dengan rasio $1 : 1$, sehingga vektor posisinya merupakan rata-rata dari kedua koordinat ujungnya: $\\vec{m} = \\frac{\\vec{a} + \\vec{b}}{2}$."
  },
  {
    "id": "mat-geo-vektor-perbandingan-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-perbandingan",
    "category": "Pembagian Dalam Ruas Garis Dua Dimensi",
    "difficulty": "mudah",
    "statement": "Titik $P$ membagi ruas garis $AB$ di dalam dengan perbandingan panjang $AP : PB = 1 : 2$. Jika koordinat titik $A(1, 2)$ dan $B(7, 8)$, maka koordinat titik $P$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(3, 4)$",
      "$(4, 5)$",
      "$(2, 3)$",
      "$(5, 6)$",
      "$(3, 5)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Vektor posisi titik $P$ yang membagi ruas garis $AB$ dengan perbandingan $AP : PB = m : n$ dirumuskan sebagai $\\vec{p} = \\frac{m\\vec{b} + n\\vec{a}}{m + n}$.",
      "steps": "1. Tentukan nilai rasio: $m = 1$ dan $n = 2$, sehingga $m + n = 3$.\n2. Hitung nilai absis $x_P$:\n$$x_P = \\frac{1(7) + 2(1)}{3} = \\frac{7 + 2}{3} = \\frac{9}{3} = 3$$\n3. Hitung nilai ordinat $y_P$:\n$$y_P = \\frac{1(8) + 2(2)}{3} = \\frac{8 + 4}{3} = \\frac{12}{3} = 4$$\n4. Koordinat titik $P$ adalah $(3, 4)$.\n5. Jadi, koordinat titik $P$ adalah $(3, 4)$ (pilihan A).",
      "pitfalls": "Tertukar memasangkan rasio pembagi, misalnya mengalikan $m=1$ ke titik $A$ dan $n=2$ ke titik $B$."
    },
    "subTopicSlug": "perbandingan-ruas-garis-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perbandingan Ruas Garis Vektor",
    "subTopic": "Perbandingan Ruas Garis Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Vektor posisi titik $P$ yang membagi ruas garis $AB$ dengan perbandingan $AP : PB = m : n$ dirumuskan sebagai $\\vec{p} = \\frac{m\\vec{b} + n\\vec{a}}{m + n}$."
  },
  {
    "id": "mat-geo-vektor-perbandingan-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-perbandingan",
    "category": "Pembagian Ruas Garis Tiga Dimensi",
    "difficulty": "mudah",
    "statement": "Titik $R$ terletak pada ruas garis penghubung titik $P(2, -1, 3)$ dan $Q(7, 4, -2)$ sedemikian rupa sehingga $PR : RQ = 3 : 2$. Koordinat titik $R$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(5, 2, 0)$",
      "$(4, 1, 1)$",
      "$(5, 3, 0)$",
      "$(6, 2, -1)$",
      "$(5, 1, 0)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada ruang dimensi tiga, koordinat titik bagi ruas garis dihitung terpisah untuk masing-masing sumbu menggunakan rumus pembagian vektor berbobot: $\\vec{r} = \\frac{m\\vec{q} + n\\vec{p}}{m + n}$.",
      "steps": "1. Rasio perbandingan adalah $m = 3$ dan $n = 2$, dengan total bobot $m + n = 5$.\n2. Hitung masing-masing komponen koordinat:\n- Sumbu-$X$: $x_R = \\frac{3(7) + 2(2)}{5} = \\frac{21 + 4}{5} = \\frac{25}{5} = 5$\n- Sumbu-$Y$: $y_R = \\frac{3(4) + 2(-1)}{5} = \\frac{12 - 2}{5} = \\frac{10}{5} = 2$\n- Sumbu-$Z$: $z_R = \\frac{3(-2) + 2(3)}{5} = \\frac{-6 + 6}{5} = \\frac{0}{5} = 0$\n3. Koordinat titik $R$ adalah $(5, 2, 0)$.\n4. Jadi, koordinat yang tepat adalah $(5, 2, 0)$ (pilihan A).",
      "pitfalls": "Keliru saat mengoperasikan tanda bilangan negatif pada sumbu-$Z$ sehingga tidak menghasilkan nilai nol."
    },
    "subTopicSlug": "perbandingan-ruas-garis-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perbandingan Ruas Garis Vektor",
    "subTopic": "Perbandingan Ruas Garis Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Pada ruang dimensi tiga, koordinat titik bagi ruas garis dihitung terpisah untuk masing-masing sumbu menggunakan rumus pembagian vektor berbobot: $\\vec{r} = \\frac{m\\vec{q} + n\\vec{p}}{m + n}$. **Tips:** Keliru saat mengoperasikan tanda bilangan negatif pada sumbu-$Z$ sehingga tidak menghasilkan nilai nol."
  },
  {
    "id": "mat-geo-vektor-perbandingan-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-perbandingan",
    "category": "Rumus Pembagian Luar Ruas Garis",
    "difficulty": "mudah",
    "statement": "Titik $K$ membagi ruas garis $AB$ di luar dengan perbandingan $AK : KB = 3 : -1$. Jika vektor posisi titik $A$ adalah $\\vec{a}$ dan titik $B$ adalah $\\vec{b}$, maka vektor posisi $\\vec{k}$ dinyatakan sebagai ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{3\\vec{b} - \\vec{a}}{2}$",
      "$\\frac{3\\vec{b} + \\vec{a}}{2}$",
      "$\\frac{3\\vec{a} - \\vec{b}}{2}$",
      "$3\\vec{b} - \\vec{a}$",
      "$\\frac{-\\vec{b} + 3\\vec{a}}{4}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pembagian di luar ruas garis ditandai dengan nilai perbandingan bertanda negatif pada salah satu ruasnya. Rumus perbandingan vektor tetap berlaku: $\\vec{k} = \\frac{m\\vec{b} + n\\vec{a}}{m + n}$.",
      "steps": "1. Identifikasi nilai rasio berarah: $m = 3$ dan $n = -1$.\n2. Masukkan ke rumus vektor posisi titik bagi:\n$$\\vec{k} = \\frac{3\\vec{b} + (-1)\\vec{a}}{3 + (-1)}$$\n3. Sederhanakan bentuk pembilang dan penyebut:\n$$\\vec{k} = \\frac{3\\vec{b} - \\vec{a}}{2}$$\n4. Jadi, vektor posisi $\\vec{k}$ adalah $\\frac{3\\vec{b} - \\vec{a}}{2}$ (pilihan A).",
      "pitfalls": "Lupa menjumlahkan aljabar pada bagian penyebut $3 + (-1) = 2$ dan menganggap penyebutnya bernilai $3 + 1 = 4$."
    },
    "subTopicSlug": "perbandingan-ruas-garis-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perbandingan Ruas Garis Vektor",
    "subTopic": "Perbandingan Ruas Garis Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Pembagian di luar ruas garis ditandai dengan nilai perbandingan bertanda negatif pada salah satu ruasnya. Rumus perbandingan vektor tetap berlaku: $\\vec{k} = \\frac{m\\vec{b} + n\\vec{a}}{m + n}$."
  },
  {
    "id": "mat-geo-vektor-perbandingan-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-perbandingan",
    "category": "Menentukan Rasio Titik Kolinier",
    "difficulty": "mudah",
    "statement": "Diketahui titik $A(1, 3)$, $B(4, 9)$, dan titik $C(2, 5)$ terletak pada satu garis lurus. Perbandingan panjang ruas garis $AC : CB$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 2$",
      "$1 : 3$",
      "$2 : 3$",
      "$2 : 1$",
      "$1 : 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perbandingan segmen garis $AC : CB$ ditentukan dengan membandingkan komponen vektor perpindahan $\\vec{AC}$ terhadap vektor perpindahan $\\vec{CB}$.",
      "steps": "1. Tentukan vektor perpindahan $\\vec{AC}$:\n$$\\vec{AC} = (2 - 1)\\hat{i} + (5 - 3)\\hat{j} = \\hat{i} + 2\\hat{j}$$\n2. Tentukan vektor perpindahan $\\vec{CB}$:\n$$\\vec{CB} = (4 - 2)\\hat{i} + (9 - 5)\\hat{j} = 2\\hat{i} + 4\\hat{j}$$\n3. Nyatakan hubungan kelipatan skalar kedua vektor:\n$$\\vec{CB} = 2(\\hat{i} + 2\\hat{j}) = 2\\vec{AC}$$\n4. Bandingkan panjangnya:\n$$\\frac{|\\vec{AC}|}{|\\vec{CB}|} = \\frac{1}{2} \\implies AC : CB = 1 : 2$$\n5. Jadi, perbandingannya adalah $1 : 2$ (pilihan A).",
      "pitfalls": "Tertukar urutan titik saat mencari segmen $\\vec{CB}$ dengan $\\vec{BC}$ yang berlawanan tanda, atau membandingkan $AC : AB$ alih-alih $AC : CB$."
    },
    "subTopicSlug": "perbandingan-ruas-garis-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perbandingan Ruas Garis Vektor",
    "subTopic": "Perbandingan Ruas Garis Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Perbandingan segmen garis $AC : CB$ ditentukan dengan membandingkan komponen vektor perpindahan $\\vec{AC}$ terhadap vektor perpindahan $\\vec{CB}$."
  },
  {
    "id": "mat-geo-vektor-perbandingan-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-perbandingan",
    "category": "Pembagian Luar Ruas Garis Dimensi Tiga",
    "difficulty": "sedang",
    "statement": "Titik $T$ terletak pada perpanjangan ruas garis $AB$ sedemikian rupa sehingga memenuhi perbandingan vektor $\\vec{AT} : \\vec{BT} = 3 : 1$. Jika koordinat titik $A(2, -1, 5)$ dan titik $B(4, 3, 1)$, maka koordinat titik $T$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(5, 5, -1)$",
      "$(5, 4, 0)$",
      "$(6, 5, -1)$",
      "$(5, 5, 1)$",
      "$(7, 5, -2)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jika titik $T$ membagi perpanjangan ruas garis $AB$ dengan perbandingan $AT : TB = 3 : -1$, maka vektor posisi titik $T$ dirumuskan sebagai $\\vec{t} = \\frac{3\\vec{b} - \\vec{a}}{3 - 1} = \\frac{3\\vec{b} - \\vec{a}}{2}$.",
      "steps": "1. Uraikan persamaan perbandingan vektor $\\vec{AT} = 3\\vec{BT}$:\n$$\\vec{t} - \\vec{a} = 3(\\vec{t} - \\vec{b}) \\implies \\vec{t} - \\vec{a} = 3\\vec{t} - 3\\vec{b}$$\n$$2\\vec{t} = 3\\vec{b} - \\vec{a} \\implies \\vec{t} = \\frac{3\\vec{b} - \\vec{a}}{2}$$\n2. Hitung masing-masing komponen koordinat titik $T$:\n- Sumbu-$X$: $x_T = \\frac{3(4) - 2}{2} = \\frac{12 - 2}{2} = \\frac{10}{2} = 5$\n- Sumbu-$Y$: $y_T = \\frac{3(3) - (-1)}{2} = \\frac{9 + 1}{2} = \\frac{10}{2} = 5$\n- Sumbu-$Z$: $z_T = \\frac{3(1) - 5}{2} = \\frac{3 - 5}{2} = \\frac{-2}{2} = -1$\n3. Gabungkan menjadi koordinat lengkap:\n$$T(5, 5, -1)$$\n4. Jadi, koordinat titik $T$ adalah $(5, 5, -1)$ (pilihan A).",
      "pitfalls": "Salah membagi dengan $3 + 1 = 4$ padahal untuk pembagian luar penyebutnya adalah selisih $3 - 1 = 2$."
    },
    "subTopicSlug": "perbandingan-ruas-garis-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perbandingan Ruas Garis Vektor",
    "subTopic": "Perbandingan Ruas Garis Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Jika titik $T$ membagi perpanjangan ruas garis $AB$ dengan perbandingan $AT : TB = 3 : -1$, maka vektor posisi titik $T$ dirumuskan sebagai $\\vec{t} = \\frac{3\\vec{b} - \\vec{a}}{3 - 1} = \\frac{3\\vec{b} - \\vec{a}}{2}$."
  },
  {
    "id": "mat-geo-vektor-perbandingan-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-perbandingan",
    "category": "Vektor Titik Berat terhadap Garis Berat",
    "difficulty": "sedang",
    "statement": "Pada segitiga $ABC$, titik $D$ adalah titik tengah sisi $BC$ dan titik $G$ adalah titik berat segitiga. Jika titik $G$ membagi garis berat $AD$ dengan perbandingan $AG : GD = 2 : 1$, maka vektor posisi $\\vec{g}$ dinyatakan dalam vektor $\\vec{a}$ dan $\\vec{d}$ sebagai ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{\\vec{a} + 2\\vec{d}}{3}$",
      "$\\frac{2\\vec{a} + \\vec{d}}{3}$",
      "$\\frac{\\vec{a} + \\vec{d}}{2}$",
      "$\\frac{\\vec{a} + 3\\vec{d}}{4}$",
      "$\\frac{2\\vec{a} + 3\\vec{d}}{5}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik berat segitiga membagi garis berat dari titik sudut ke titik tengah sisi di hadapannya dengan rasio tetap $2 : 1$. Berdasarkan rumus perbandingan ruas garis berbobot, $\\vec{g} = \\frac{m\\vec{d} + n\\vec{a}}{m + n}$.",
      "steps": "1. Identifikasi rasio pembagian ruas garis $AD$ oleh titik $G$: $m = 2$ (ke arah $D$) dan $n = 1$ (ke arah $A$).\n2. Terapkan rumus perbandingan vektor:\n$$\\vec{g} = \\frac{2\\vec{d} + 1\\vec{a}}{2 + 1}$$\n3. Susun kembali bentuk penjumlahan:\n$$\\vec{g} = \\frac{\\vec{a} + 2\\vec{d}}{3}$$\n4. Jadi, vektor posisi $\\vec{g}$ adalah $\\frac{\\vec{a} + 2\\vec{d}}{3}$ (pilihan A).",
      "pitfalls": "Tertukar bobot pengali perbandingan menjadi $\\frac{2\\vec{a} + \\vec{d}}{3}$ akibat salah meletakkan posisi segmen $AG$ dan $GD$."
    },
    "subTopicSlug": "perbandingan-ruas-garis-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perbandingan Ruas Garis Vektor",
    "subTopic": "Perbandingan Ruas Garis Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Titik berat segitiga membagi garis berat dari titik sudut ke titik tengah sisi di hadapannya dengan rasio tetap $2 : 1$. Berdasarkan rumus perbandingan ruas garis berbobot, $\\vec{g} = \\frac{m\\vec{d} + n\\vec{a}}{m + n}$. **Tips:** Tertukar bobot pengali perbandingan menjadi $\\frac{2\\vec{a} + \\vec{d}}{3}$ akibat salah meletakkan posisi segmen $AG$ dan $GD$."
  },
  {
    "id": "mat-geo-vektor-perbandingan-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-perbandingan",
    "category": "Menentukan Koordinat Kolinier dari Komponen Tunggal",
    "difficulty": "sedang",
    "statement": "Titik $P(a, 3, b)$ terletak pada ruas garis yang menghubungkan titik $K(1, -1, 4)$ dan titik $L(7, 5, -2)$. Nilai dari $a + b$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "5",
      "6",
      "4",
      "7",
      "3"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Karena titik $P$ terletak pada ruas garis $KL$, rasio pembagian $KP : PL = m : n$ dapat dicari terlebih dahulu melalui komponen ordinat $y$ yang nilainya telah diketahui lengkap.",
      "steps": "1. Gunakan komponen $y$ untuk mencari rasio $m : n$:\n$$y_P = \\frac{m \\cdot y_L + n \\cdot y_K}{m + n} \\implies 3 = \\frac{5m - n}{m + n}$$\n$$3(m + n) = 5m - n \\implies 3m + 3n = 5m - n$$\n$$2m = 4n \\implies \\frac{m}{n} = \\frac{2}{1}$$\nSehingga rasio pembagiannya adalah $KP : PL = 2 : 1$.\n2. Hitung nilai absis $a = x_P$ dengan rasio $2 : 1$:\n$$a = \\frac{2(7) + 1(1)}{2 + 1} = \\frac{14 + 1}{3} = \\frac{15}{3} = 5$$\n3. Hitung nilai aplikat $b = z_P$ dengan rasio $2 : 1$:\n$$b = \\frac{2(-2) + 1(4)}{2 + 1} = \\frac{-4 + 4}{3} = \\frac{0}{3} = 0$$\n4. Hitung hasil penjumlahan $a + b$:\n$$a + b = 5 + 0 = 5$$\n5. Jadi, nilai $a + b$ adalah 5 (pilihan A).",
      "pitfalls": "Salah memindahkan ruas aljabar $3m + 3n = 5m - n$ sehingga mendapatkan rasio yang terbalik atau bernilai negatif."
    },
    "subTopicSlug": "perbandingan-ruas-garis-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perbandingan Ruas Garis Vektor",
    "subTopic": "Perbandingan Ruas Garis Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Karena titik $P$ terletak pada ruas garis $KL$, rasio pembagian $KP : PL = m : n$ dapat dicari terlebih dahulu melalui komponen ordinat $y$ yang nilainya telah diketahui lengkap."
  },
  {
    "id": "mat-geo-vektor-perbandingan-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-perbandingan",
    "category": "Titik Potong Diagonal Jajar Genjang",
    "difficulty": "sedang",
    "statement": "Pada bangun jajar genjang $ABCD$, koordinat titik-titik sudutnya adalah $A(1, 2, -1)$, $B(4, 1, 3)$, dan $C(7, 6, 3)$. Titik potong kedua diagonal jajar genjang tersebut berada pada koordinat ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(4, 4, 1)$",
      "$(4, 3, 2)$",
      "$(5, 4, 1)$",
      "$(4, 5, 1)$",
      "$(3, 4, 2)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Sifat geometris jajar genjang menyatakan bahwa kedua garis diagonalnya saling berpotongan dan membagi dua sama panjang di titik tengah masing-masing diagonal.",
      "steps": "1. Garis diagonal jajar genjang menghubungkan titik $A$ dengan $C$, serta titik $B$ dengan $D$.\n2. Titik potong diagonal $T$ adalah titik tengah ruas garis diagonal $AC$:\n$$\\vec{t} = \\frac{\\vec{a} + \\vec{c}}{2}$$\n3. Hitung masing-masing komponen titik tengah $AC$:\n- $x_T = \\frac{1 + 7}{2} = \\frac{8}{2} = 4$\n- $y_T = \\frac{2 + 6}{2} = \\frac{8}{2} = 4$\n- $z_T = \\frac{-1 + 3}{2} = \\frac{2}{2} = 1$\n4. Koordinat titik potong diagonal adalah $(4, 4, 1)$.\n5. Jadi, titik potong diagonalnya berada di $(4, 4, 1)$ (pilihan A).",
      "pitfalls": "Mencari titik tengah ruas garis $AB$ alih-alih diagonal $AC$, yang keliru menganggap sisi jajar genjang sebagai diagonalnya."
    },
    "subTopicSlug": "perbandingan-ruas-garis-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perbandingan Ruas Garis Vektor",
    "subTopic": "Perbandingan Ruas Garis Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Sifat geometris jajar genjang menyatakan bahwa kedua garis diagonalnya saling berpotongan dan membagi dua sama panjang di titik tengah masing-masing diagonal. **Tips:** Mencari titik tengah ruas garis $AB$ alih-alih diagonal $AC$, yang keliru menganggap sisi jajar genjang sebagai diagonalnya."
  },
  {
    "id": "mat-geo-vektor-perbandingan-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-vektor",
    "subTopicId": "mat-geo-vektor-perbandingan",
    "category": "Rasio Luas Segitiga Berdasarkan Vektor Sisi",
    "difficulty": "sedang",
    "statement": "Pada sebuah segitiga $OAB$, titik $P$ terletak pada sisi $OA$ sedemikian rupa sehingga $OP : PA = 2 : 1$, dan titik $Q$ terletak pada sisi $OB$ sehingga $OQ : QB = 1 : 3$. Rasio luas segitiga $OPQ$ terhadap luas segitiga $OAB$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 6$",
      "$2 : 9$",
      "$1 : 4$",
      "$2 : 7$",
      "$1 : 8$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perbandingan luas dua segitiga yang memiliki satu sudut persekutuan yang sama ($angle O$) sama dengan perbandingan hasil kali sisi-sisi pengapit sudut tersebut: $\\frac{\\text{Luas } \\triangle OPQ}{\\text{Luas } \\triangle OAB} = \\frac{OP}{OA} \\times \\frac{OQ}{OB}$.",
      "steps": "1. Tentukan perbandingan panjang sisi terhadap panjang sisi total:\n- Karena $OP : PA = 2 : 1$, maka panjang $OA = OP + PA = 2 + 1 = 3$, sehingga $\\frac{OP}{OA} = \\frac{2}{3}$.\n- Karena $OQ : QB = 1 : 3$, maka panjang $OB = OQ + QB = 1 + 3 = 4$, sehingga $\\frac{OQ}{OB} = \\frac{1}{4}$.\n2. Hitung perbandingan luas kedua segitiga:\n$$\\frac{\\text{Luas } \\triangle OPQ}{\\text{Luas } \\triangle OAB} = \\frac{OP}{OA} \\times \\frac{OQ}{OB} = \\frac{2}{3} \\times \\frac{1}{4} = \\frac{2}{12} = \\frac{1}{6}$$\n3. Jadi, rasio luas segitiga $OPQ$ terhadap segitiga $OAB$ adalah $1 : 6$ (pilihan A).",
      "pitfalls": "Langsung mengalikan perbandingan bagian $\\frac{2}{1} \\times \\frac{1}{3} = \\frac{2}{3}$ tanpa memperhatikan panjang total sisi segitiga utuh."
    },
    "subTopicSlug": "perbandingan-ruas-garis-vektor",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Perbandingan Ruas Garis Vektor",
    "subTopic": "Perbandingan Ruas Garis Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Perbandingan luas dua segitiga yang memiliki satu sudut persekutuan yang sama ($angle O$) sama dengan perbandingan hasil kali sisi-sisi pengapit sudut tersebut: $\\frac{\\text{Luas } \\triangle OPQ}{\\text{Luas } \\triangle OAB} = \\frac{OP}{OA} \\times \\frac{OQ}{OB}$."
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
