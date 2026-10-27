/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Polinomial (mat-alj-polinom)
 * Sub-Bab: Teorema Faktor & Akar Polinomial (mat-alj-polinom-faktor)
 * Slug: teorema-faktor-akar
 * Indikator: Faktor linear suku banyak (P(k) = 0) dan hubungan akar-akar Vieta.
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-polinom-faktor";
  const subTopicSlug = "teorema-faktor-akar";
  const questions = [
  {
    "id": "mat-alj-polinom-faktor-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-faktor",
    "category": "Pernyataan Dasar Teorema Faktor",
    "difficulty": "mudah",
    "statement": "Berdasarkan Teorema Faktor, bentuk linear $(x - k)$ merupakan faktor dari suku banyak $P(x)$ jika dan hanya jika memenuhi syarat ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$P(k) = 0$",
      "$P(-k) = 0$",
      "$P(k) > 0$",
      "$P(0) = k$",
      "$P(k) = 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Teorema Faktor menyatakan bahwa $(x - k)$ adalah faktor dari polinomial $P(x)$ jika dan hanya jika sisa pembagiannya bernilai nol, yang berarti $P(k) = 0$, dan $x = k$ merupakan akar dari persamaan $P(x) = 0$.",
      "steps": "1. Tinjau algoritma pembagian: $P(x) = (x - k) H(x) + S$.<br>2. Definisi suatu bentuk aljabar menjadi faktor adalah pembagian tersebut tidak menyisakan sisa ($S = 0$).<br>3. Menurut Teorema Sisa, $S = P(k)$.<br>4. Maka syarat mutlak $(x - k)$ sebagai faktor adalah $P(k) = 0$.<br>5. Jadi pilihan yang benar adalah A.",
      "pitfalls": "Terkecoh dengan tanda negatif sehingga memilih $P(-k) = 0$."
    },
    "subTopicSlug": "teorema-faktor-akar",
    "bab": "Aljabar",
    "subBab": "Teorema Faktor & Akar Polinomial",
    "subTopic": "Teorema Faktor & Akar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Teorema Faktor menyatakan bahwa $(x - k)$ adalah faktor dari polinomial $P(x)$ jika dan hanya jika sisa pembagiannya bernilai nol, yang berarti $P(k) = 0$, dan $x = k$ merupakan akar dari persamaan $P(x) = 0$."
  },
  {
    "id": "mat-alj-polinom-faktor-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-faktor",
    "category": "Identifikasi Faktor Linear Suku Banyak",
    "difficulty": "mudah",
    "statement": "Di antara pilihan bentuk linear berikut, yang merupakan faktor dari suku banyak $P(x) = x^3 - 4x^2 + x + 6$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(x - 2)$",
      "$(x + 2)$",
      "$(x - 1)$",
      "$(x + 3)$",
      "$(x - 4)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk menguji apakah $(x - c)$ merupakan faktor dari $P(x)$, substitusikan pembuat nol $x = c$. Jika $P(c) = 0$, maka $(x - c)$ adalah faktor.",
      "steps": "1. Uji pilihan A yaitu $(x - 2)$ dengan mensubstitusikan $x = 2$:<br>$$P(2) = (2)^3 - 4(2)^2 + (2) + 6 = 8 - 4(4) + 2 + 6 = 8 - 16 + 2 + 6 = 0$$<br>2. Karena $P(2) = 0$, maka $(x - 2)$ merupakan faktor dari $P(x)$.<br>3. (Sebagai pembanding, uji $x = -2$: $P(-2) = -8 - 16 - 2 + 6 = -20 \\neq 0$).<br>4. Jadi faktor yang benar adalah $(x - 2)$ (pilihan A).",
      "pitfalls": "Salah tanda saat mengevaluasi nilai fungsi, seperti menghitung $-4(2)^2 = (-8)^2 = 64$ alih-alih $-4(4) = -16$."
    },
    "subTopicSlug": "teorema-faktor-akar",
    "bab": "Aljabar",
    "subBab": "Teorema Faktor & Akar Polinomial",
    "subTopic": "Teorema Faktor & Akar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Untuk menguji apakah $(x - c)$ merupakan faktor dari $P(x)$, substitusikan pembuat nol $x = c$. Jika $P(c) = 0$, maka $(x - c)$ adalah faktor."
  },
  {
    "id": "mat-alj-polinom-faktor-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-faktor",
    "category": "Penentuan Parameter Berdasarkan Faktor Linear",
    "difficulty": "mudah",
    "statement": "Agar bentuk linear $(x - 2)$ merupakan faktor dari suku banyak $P(x) = 2x^3 - 3x^2 + ax - 6$, maka nilai konstanta $a$ harus sama dengan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-2",
      "-1",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Syarat agar $(x - 2)$ menjadi faktor dari $P(x)$ adalah nilai $P(2) = 0$.",
      "steps": "1. Terapkan Teorema Faktor: $P(2) = 0$.<br>2. Substitusikan $x = 2$ ke dalam rumus fungsi $P(x)$:<br>$$P(2) = 2(2)^3 - 3(2)^2 + a(2) - 6 = 0$$<br>3. Hitung nilai bilangan:<br>$$2(8) - 3(4) + 2a - 6 = 0 \\implies 16 - 12 + 2a - 6 = 0$$<br>4. Sederhanakan persamaan aljabar:<br>$$2a - 2 = 0 \\implies 2a = 2 \\implies a = 1$$<br>5. Jadi nilai konstanta $a$ adalah 1 (pilihan C).",
      "pitfalls": "Lupa menyertakan perkalian dengan konstanta $-6$ di akhir persamaan aljabar."
    },
    "subTopicSlug": "teorema-faktor-akar",
    "bab": "Aljabar",
    "subBab": "Teorema Faktor & Akar Polinomial",
    "subTopic": "Teorema Faktor & Akar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Syarat agar $(x - 2)$ menjadi faktor dari $P(x)$ adalah nilai $P(2) = 0$. **Tips:** Lupa menyertakan perkalian dengan konstanta $-6$ di akhir persamaan aljabar."
  },
  {
    "id": "mat-alj-polinom-faktor-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-faktor",
    "category": "Teorema Vieta Jumlah Akar-Akar Polinomial",
    "difficulty": "mudah",
    "statement": "Akar-akar dari persamaan suku banyak $2x^3 - 6x^2 + 4x - 8 = 0$ adalah $x_1, x_2,$ dan $x_3$. Nilai dari $x_1 + x_2 + x_3$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-3",
      "-2",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Berdasarkan Teorema Vieta untuk persamaan polinomial kubik $ax^3 + bx^2 + cx + d = 0$, jumlah seluruh akar-akarnya dirumuskan sebagai:<br>$$x_1 + x_2 + x_3 = -\\frac{b}{a}$$",
      "steps": "1. Identifikasi koefisien-koefisien persamaan:\n- $a = 2$\n- $b = -6$\n- $c = 4$\n- $d = -8$<br>2. Terapkan rumus Vieta untuk penjumlahan akar:<br>$$x_1 + x_2 + x_3 = -\\frac{b}{a} = -\\frac{-6}{2} = \\frac{6}{2} = 3$$<br>3. Jadi jumlah akar-akarnya adalah 3 (pilihan D).",
      "pitfalls": "Lupa membagi dengan koefisien utama $a = 2$, atau salah tanda minus $-\\frac{b}{a}$ sehingga menjawab $-3$."
    },
    "subTopicSlug": "teorema-faktor-akar",
    "bab": "Aljabar",
    "subBab": "Teorema Faktor & Akar Polinomial",
    "subTopic": "Teorema Faktor & Akar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Berdasarkan Teorema Vieta untuk persamaan polinomial kubik $ax^3 + bx^2 + cx + d = 0$, jumlah seluruh akar-akarnya dirumuskan sebagai: $$x_1 + x_2 + x_3 = -\\frac{b}{a}$$."
  },
  {
    "id": "mat-alj-polinom-faktor-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-faktor",
    "category": "Teorema Vieta Hasil Kali Akar-Akar Polinomial",
    "difficulty": "mudah",
    "statement": "Persamaan polinomial $x^3 - 2x^2 - 5x + 10 = 0$ memiliki akar-akar $x_1, x_2,$ dan $x_3$. Hasil kali ketiga akar-akarnya ($x_1 \\cdot x_2 \\cdot x_3$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-10",
      "-5",
      "2",
      "5",
      "10"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Berdasarkan Teorema Vieta untuk persamaan polinomial berderajat 3 ($ax^3 + bx^2 + cx + d = 0$), perkalian ketiga akarnya adalah:<br>$$x_1 \\cdot x_2 \\cdot x_3 = -\\frac{d}{a}$$",
      "steps": "1. Identifikasi koefisien persamaan:\n- $a = 1$\n- $d = 10$<br>2. Masukkan ke rumus perkalian akar Vieta:<br>$$x_1 \\cdot x_2 \\cdot x_3 = -\\frac{d}{a} = -\\frac{10}{1} = -10$$<br>3. Jadi hasil kali akar-akarnya adalah $-10$ (pilihan A).",
      "pitfalls": "Lupa tanda minus pada rumus hasil kali persamaan kubik ($-\\frac{d}{a}$) sehingga menjawab $+10$."
    },
    "subTopicSlug": "teorema-faktor-akar",
    "bab": "Aljabar",
    "subBab": "Teorema Faktor & Akar Polinomial",
    "subTopic": "Teorema Faktor & Akar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Berdasarkan Teorema Vieta untuk persamaan polinomial berderajat 3 ($ax^3 + bx^2 + cx + d = 0$), perkalian ketiga akarnya adalah: $$x_1 \\cdot x_2 \\cdot x_3 = -\\frac{d}{a}$$. **Tips:** Lupa tanda minus pada rumus hasil kali persamaan kubik ($-\\frac{d}{a}$) sehingga menjawab $+10$."
  },
  {
    "id": "mat-alj-polinom-faktor-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-faktor",
    "category": "Polinomial dengan Dua Faktor Linear",
    "difficulty": "sedang",
    "statement": "Suku banyak $P(x) = 2x^3 - 5x^2 - px + q$ memiliki faktor linear $(x - 1)$ dan $(x - 2)$. Nilai dari $p + q$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-1",
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Berdasarkan Teorema Faktor, jika $(x - c_1)$ dan $(x - c_2)$ adalah faktor-faktor dari $P(x)$, maka berlaku $P(c_1) = 0$ dan $P(c_2) = 0$.",
      "steps": "1. Substitusikan $x = 1$:\n$$P(1) = 2(1)^3 - 5(1)^2 - p(1) + q = 0 \\implies 2 - 5 - p + q = 0 \\implies -p + q = 3$$<br>2. Substitusikan $x = 2$:\n$$P(2) = 2(2)^3 - 5(2)^2 - p(2) + q = 0 \\implies 16 - 20 - 2p + q = 0 \\implies -2p + q = 4$$<br>3. Kurangkan kedua persamaan:\n$$(-p + q) - (-2p + q) = 3 - 4 \\implies p = -1$$<br>4. Substitusikan $p = -1$ ke $-p + q = 3$:\n$$-(-1) + q = 3 \\implies 1 + q = 3 \\implies q = 2$$<br>5. Hitung nilai $p + q$:\n$$p + q = -1 + 2 = 1$$<br>6. Jadi nilai $p + q$ adalah 1 (pilihan C).",
      "pitfalls": "Kesalahan tanda saat mengurangkan $-(-2p) = +2p$ atau keliru memindahkan ruas."
    },
    "subTopicSlug": "teorema-faktor-akar",
    "bab": "Aljabar",
    "subBab": "Teorema Faktor & Akar Polinomial",
    "subTopic": "Teorema Faktor & Akar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Berdasarkan Teorema Faktor, jika $(x - c_1)$ dan $(x - c_2)$ adalah faktor-faktor dari $P(x)$, maka berlaku $P(c_1) = 0$ dan $P(c_2) = 0$. **Tips:** Kesalahan tanda saat mengurangkan $-(-2p) = +2p$ atau keliru memindahkan ruas."
  },
  {
    "id": "mat-alj-polinom-faktor-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-faktor",
    "category": "Hubungan Teorema Vieta dan Akar Diketahui",
    "difficulty": "sedang",
    "statement": "Persamaan suku banyak $x^3 - 4x^2 + kx - 12 = 0$ memiliki akar-akar $x_1, x_2,$ dan $x_3$. Jika diketahui salah satu akarnya adalah $x_1 = 3$, maka nilai dari $(x_1 x_2 + x_2 x_3 + x_1 x_3)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Akar persamaan suku banyak memenuhi $P(x_1) = 0$. Berdasarkan Teorema Vieta untuk kubik $ax^3 + bx^2 + cx + d = 0$, jumlah hasil kali sepasang akar adalah $\\frac{c}{a}$.",
      "steps": "1. Karena $x = 3$ adalah akar persamaan, substitusikan ke dalam persamaan:\n$$(3)^3 - 4(3)^2 + k(3) - 12 = 0 \\implies 27 - 36 + 3k - 12 = 0$$\n$$3k - 21 = 0 \\implies 3k = 21 \\implies k = 7$$<br>2. Tinjau Teorema Vieta untuk jumlah hasil kali sepasang akar:\n$$x_1 x_2 + x_2 x_3 + x_1 x_3 = \\frac{c}{a}$$\nDi sini $c = k = 7$ dan $a = 1$.<br>3. Maka nilainya adalah $\\frac{7}{1} = 7$.<br>4. Jadi nilai yang dicari adalah 7 (pilihan C).",
      "pitfalls": "Mencoba mencari akar-akar $x_2$ dan $x_3$ secara terpisah padahal dapat langsung dijawab melalui rumus Vieta $\\frac{c}{a}$."
    },
    "subTopicSlug": "teorema-faktor-akar",
    "bab": "Aljabar",
    "subBab": "Teorema Faktor & Akar Polinomial",
    "subTopic": "Teorema Faktor & Akar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Akar persamaan suku banyak memenuhi $P(x_1) = 0$. Berdasarkan Teorema Vieta untuk kubik $ax^3 + bx^2 + cx + d = 0$, jumlah hasil kali sepasang akar adalah $\\frac{c}{a}$. **Tips:** Mencoba mencari akar-akar $x_2$ dan $x_3$ secara terpisah padahal dapat langsung dijawab melalui rumus Vieta $\\frac{c}{a}$."
  },
  {
    "id": "mat-alj-polinom-faktor-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-faktor",
    "category": "Jumlah Kuadrat Akar-Akar Polinomial",
    "difficulty": "sedang",
    "statement": "Akar-akar dari persamaan kubik $x^3 - 5x^2 + 7x - 2 = 0$ adalah $\\alpha, \\beta,$ dan $\\gamma$. Nilai dari $\\alpha^2 + \\beta^2 + \\gamma^2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "9",
      "11",
      "13",
      "15",
      "18"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gunakan identitas aljabar tiga variabel:\n$$\\alpha^2 + \\beta^2 + \\gamma^2 = (\\alpha + \\beta + \\gamma)^2 - 2(\\alpha\\beta + \\beta\\gamma + \\alpha\\gamma)$$",
      "steps": "1. Dari persamaan $x^3 - 5x^2 + 7x - 2 = 0$, tentukan nilai Vieta:\n- $\\alpha + \\beta + \\gamma = -\\frac{-5}{1} = 5$\n- $\\alpha\\beta + \\beta\\gamma + \\alpha\\gamma = \\frac{7}{1} = 7$<br>2. Masukkan ke identitas jumlah kuadrat:\n$$\\alpha^2 + \\beta^2 + \\gamma^2 = (5)^2 - 2(7)$$<br>3. Selesaikan perhitungan:\n$$\\alpha^2 + \\beta^2 + \\gamma^2 = 25 - 14 = 11$$<br>4. Jadi nilai jumlah kuadrat akar-akar adalah 11 (pilihan B).",
      "pitfalls": "Lupa mengurangkan dengan suku silang $2(\\alpha\\beta + \\beta\\gamma + \\alpha\\gamma)$, atau salah mengira $(\\alpha+\\beta+\\gamma)^2 = \\alpha^2+\\beta^2+\\gamma^2$."
    },
    "subTopicSlug": "teorema-faktor-akar",
    "bab": "Aljabar",
    "subBab": "Teorema Faktor & Akar Polinomial",
    "subTopic": "Teorema Faktor & Akar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan identitas aljabar tiga variabel: $$\\alpha^2 + \\beta^2 + \\gamma^2 = (\\alpha + \\beta + \\gamma)^2 - 2(\\alpha\\beta + \\beta\\gamma + \\alpha\\gamma)$$."
  },
  {
    "id": "mat-alj-polinom-faktor-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-faktor",
    "category": "Akar-Akar Membentuk Barisan Aritmetika",
    "difficulty": "sedang",
    "statement": "Akar-akar dari persamaan kubik $x^3 - 6x^2 + px - 6 = 0$ membentuk suatu barisan aritmetika. Nilai dari konstanta $p$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Tiga bilangan yang membentuk barisan aritmetika dapat dimisalkan sebagai $(a - b), a, (a + b)$. Jumlah ketiga akar sama dengan $3a = -\\frac{\\text{koef } x^2}{\\text{koef } x^3}$.",
      "steps": "1. Misalkan ketiga akar adalah $(a - b), a, (a + b)$.<br>2. Terapkan Teorema Vieta untuk penjumlahan akar:\n$$(a - b) + a + (a + b) = 3a = -\\frac{-6}{1} = 6 \\implies a = 2$$<br>3. Karena $a = 2$ adalah salah satu akar persamaan, substitusikan $x = 2$ ke dalam persamaan polinomial:\n$$(2)^3 - 6(2)^2 + p(2) - 6 = 0$$<br>4. Hitung nilai aljabar:\n$$8 - 24 + 2p - 6 = 0 \\implies 2p - 22 = 0 \\implies 2p = 22 \\implies p = 11$$<br>5. Jadi nilai konstanta $p$ adalah 11 (pilihan C).",
      "pitfalls": "Salah memisalkan suku tengah barisan aritmetika sehingga penyelesaian menjadi sangat rumit."
    },
    "subTopicSlug": "teorema-faktor-akar",
    "bab": "Aljabar",
    "subBab": "Teorema Faktor & Akar Polinomial",
    "subTopic": "Teorema Faktor & Akar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Tiga bilangan yang membentuk barisan aritmetika dapat dimisalkan sebagai $(a - b), a, (a + b)$. Jumlah ketiga akar sama dengan $3a = -\\frac{\\text{koef } x^2}{\\text{koef } x^3}$. **Tips:** Salah memisalkan suku tengah barisan aritmetika sehingga penyelesaian menjadi sangat rumit."
  },
  {
    "id": "mat-alj-polinom-faktor-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-faktor",
    "category": "Penjumlahan Kebalikan Akar-Akar Polinomial",
    "difficulty": "sedang",
    "statement": "Persamaan suku banyak $2x^3 - 4x^2 + 5x - 3 = 0$ memiliki akar-akar $x_1, x_2,$ dan $x_3$. Nilai dari $\\frac{1}{x_1} + \\frac{1}{x_2} + \\frac{1}{x_3}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\frac{5}{3}$",
      "$-\\frac{4}{3}$",
      "$\\frac{4}{3}$",
      "$\\frac{5}{3}$",
      "$\\frac{5}{2}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Penjumlahan kebalikan akar-akar polinomial dapat disamakan penyebutnya:\n$$\\frac{1}{x_1} + \\frac{1}{x_2} + \\frac{1}{x_3} = \\frac{x_1 x_2 + x_2 x_3 + x_1 x_3}{x_1 x_2 x_3} = \\frac{c / a}{-d / a} = -\\frac{c}{d}$$",
      "steps": "1. Identifikasi koefisien persamaan: $a = 2, b = -4, c = 5, d = -3$.<br>2. Hitung jumlah hasil kali sepasang akar:\n$$x_1 x_2 + x_2 x_3 + x_1 x_3 = \\frac{c}{a} = \\frac{5}{2}$$<br>3. Hitung hasil kali ketiga akar:\n$$x_1 x_2 x_3 = -\\frac{d}{a} = -\\frac{-3}{2} = \\frac{3}{2}$$<br>4. Bentuk perbandingannya:\n$$\\frac{1}{x_1} + \\frac{1}{x_2} + \\frac{1}{x_3} = \\frac{\\frac{5}{2}}{\\frac{3}{2}} = \\frac{5}{3}$$<br>5. Jadi nilai penjumlahan kebalikan akar-akarnya adalah $\\frac{5}{3}$ (pilihan D).",
      "pitfalls": "Lupa tanda minus pada $-\\frac{d}{a}$ yang membatalkan tanda negatif dari $d = -3$."
    },
    "subTopicSlug": "teorema-faktor-akar",
    "bab": "Aljabar",
    "subBab": "Teorema Faktor & Akar Polinomial",
    "subTopic": "Teorema Faktor & Akar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Penjumlahan kebalikan akar-akar polinomial dapat disamakan penyebutnya: $$\\frac{1}{x_1} + \\frac{1}{x_2} + \\frac{1}{x_3} = \\frac{x_1 x_2 + x_2 x_3 + x_1 x_3}{x_1 x_2 x_3} = \\frac{c / a}{-d / a} = -\\frac{c}{d}$$. **Tips:** Lupa tanda minus pada $-\\frac{d}{a}$ yang membatalkan tanda negatif dari $d = -3$."
  },
  {
    "id": "sup-mtk-alj-03",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-polinom-faktor",
    "category": "Teorema Faktor Polinomial",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Jika suku banyak $P(x) = x^3 - 3x^2 + ax - 4$ habis dibagi oleh $(x - 2)$, maka nilai dari konstanta $a$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$2$",
      "$-2$",
      "$-4$",
      "$6$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Teorema Faktor:</strong><br>Bentuk $(x - k)$ merupakan faktor dari suku banyak $P(x)$ jika dan hanya jika $P(k) = 0$.</div>",
      "steps": "<ol><li>Karena habis dibagi $(x - 2)$, maka $P(2) = 0$.</li><li>Substitusi $x = 2$: $(2)^3 - 3(2)^2 + a(2) - 4 = 0$.</li><li>$8 - 12 + 2a - 4 = 0 \\implies 2a - 8 = 0 \\implies 2a = 8 \\implies a = 4$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Keliru mensubstitusikan nilai $x = -2$ bukannya pembuat nol pembagi $x = 2$.</div>"
    },
    "bab": "Aljabar",
    "subBab": "Teorema Faktor & Akar Polinomial",
    "subTopic": "Teorema Faktor & Akar Polinomial",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-polinom",
    "subTopicSlug": "teorema-faktor-akar",
    "hint": "Teorema Faktor: Bentuk $(x - k)$ merupakan faktor dari suku banyak $P(x)$ jika dan hanya jika $P(k) = 0$."
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
