/**
 * Batch Task: TASK_fun-geo-dasar-garis_MEDIUM
 * SubTopic: Geometri Dasar: Persamaan Garis Lurus (fun-geo-dasar-garis)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-geo-dasar-garis-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-garis",
    category: "Persamaan Garis Melalui Dua Titik Koordinat",
    difficulty: "sedang",
    statement: "Persamaan garis lurus yang melalui titik $A(2, 3)$ dan titik $B(4, 7)$ dapat dinyatakan dalam bentuk implisit sebagai ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2x - y - 1 = 0$",
      "$2x - y + 1 = 0$",
      "$x - 2y + 4 = 0$",
      "$2x + y - 7 = 0$",
      "$x + 2y - 8 = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gunakan rumus gradien dua titik $m = \\frac{y_2 - y_1}{x_2 - x_1}$, lalu susun persamaan garis $y - y_1 = m(x - x_1)$ dan ubah ke bentuk implisit $Ax + By + C = 0$.",
      steps: "1. Hitung gradien garis melalui $A(2, 3)$ dan $B(4, 7)$:\n$$m = \\frac{7 - 3}{4 - 2} = \\frac{4}{2} = 2$$\n2. Susun persamaan garis menggunakan titik $A(2, 3)$:\n$$y - 3 = 2(x - 2)$$\n$$y - 3 = 2x - 4$$\n3. Pindahkan seluruh suku ke ruas kanan sehingga koefisien $x$ positif:\n$$2x - y - 4 + 3 = 0$$\n$$2x - y - 1 = 0$$\n4. Jadi, persamaan garis dalam bentuk implisit adalah $2x - y - 1 = 0$ (pilihan A).",
      pitfalls: "Kesalahan tanda saat memindahkan suku konstanta $-4 + 3$ sehingga memilih $2x - y + 1 = 0$."
    }
  },
  {
    id: "fun-geo-dasar-garis-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-garis",
    category: "Persamaan Garis dari Titik dan Titik Potong Sumbu",
    difficulty: "sedang",
    statement: "Garis $g$ melalui titik $P(1, 4)$ dan memotong sumbu-$X$ di titik $(3, 0)$. Persamaan garis $g$ dalam bentuk umum $Ax + By + C = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2x + y - 6 = 0$",
      "$2x - y + 2 = 0$",
      "$x + 2y - 9 = 0$",
      "$2x + y - 8 = 0$",
      "$x - 2y + 7 = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Dua titik yang diketahui pada garis adalah $P(1, 4)$ dan titik potong sumbu-$X$, yaitu $Q(3, 0)$.",
      steps: "1. Tentukan gradien garis melalui $(1, 4)$ dan $(3, 0)$:\n$$m = \\frac{0 - 4}{3 - 1} = \\frac{-4}{2} = -2$$\n2. Gunakan rumus persamaan garis dengan titik $(3, 0)$:\n$$y - 0 = -2(x - 3)$$\n$$y = -2x + 6$$\n3. Pindahkan semua suku ke ruas kiri agar koefisien $x$ positif:\n$$2x + y - 6 = 0$$\n4. Jadi, persamaan garis $g$ adalah $2x + y - 6 = 0$ (pilihan A).",
      pitfalls: "Keliru mengartikan memotong sumbu-$X$ di $(3, 0)$ sebagai titik $(0, 3)$."
    }
  },
  {
    id: "fun-geo-dasar-garis-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-garis",
    category: "Menentukan Koefisien Garis Melalui Titik Tertentu",
    difficulty: "sedang",
    statement: "Jika garis dengan persamaan $ax + 3y - 12 = 0$ melalui titik $(3, 2)$, maka nilai dari koefisien $a$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$6$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Titik $(x_0, y_0)$ terletak pada suatu garis jika dan hanya jika koordinatnya memenuhi persamaan garis tersebut.",
      steps: "1. Substitusikan $x = 3$ dan $y = 2$ ke dalam persamaan garis:\n$$a(3) + 3(2) - 12 = 0$$\n2. Hitung suku-suku konstan:\n$$3a + 6 - 12 = 0$$\n$$3a - 6 = 0$$\n3. Pindahkan $-6$ ke ruas kanan:\n$$3a = 6$$\n4. Bagi kedua ruas dengan 3:\n$$a = 2$$\n5. Jadi, nilai $a$ adalah $2$ (pilihan B).",
      pitfalls: "Tertukar memasukkan absis dan ordinat (memasukkan $x = 2$ dan $y = 3$) sehingga menghasilkan nilai $a = 1{,}5$."
    }
  },
  {
    id: "fun-geo-dasar-garis-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-garis",
    category: "Titik Potong Dua Garis Lurus",
    difficulty: "sedang",
    statement: "Titik potong antara garis $2x - y = 4$ dan garis $x + 3y = 9$ pada bidang koordinat adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(2, 0)$",
      "$(3, 2)$",
      "$(3, 1)$",
      "$(4, 4)$",
      "$(1, -2)$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Titik potong dua garis lurus merupakan solusi persekutuan (himpunan penyelesaian) dari sistem persamaan linear kedua garis tersebut.",
      steps: "1. Nyatakan $y$ dari persamaan pertama:\n$$y = 2x - 4$$\n2. Substitusikan ekspresi $y$ ke persamaan kedua:\n$$x + 3(2x - 4) = 9$$\n$$x + 6x - 12 = 9$$\n$$7x = 21 \\implies x = 3$$\n3. Tentukan nilai $y$ dengan mensubstitusi $x = 3$:\n$$y = 2(3) - 4 = 6 - 4 = 2$$\n4. Gabungkan koordinat titik potong:\n$$(x, y) = (3, 2)$$\n5. Jadi, titik potong kedua garis adalah $(3, 2)$ (pilihan B).",
      pitfalls: "Salah menjabarkan tanda distributif $3(-4)$ menjadi $-7$ atau $+12$."
    }
  },
  {
    id: "fun-geo-dasar-garis-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-garis",
    category: "Persamaan Garis Bentuk Intersep Sumbu",
    difficulty: "sedang",
    statement: "Suatu garis memotong sumbu-$X$ di titik $(4, 0)$ dan memotong sumbu-$Y$ di titik $(0, -2)$. Persamaan garis tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x - 2y - 4 = 0$",
      "$x + 2y - 4 = 0$",
      "$2x - y - 4 = 0$",
      "$x - 2y + 4 = 0$",
      "$2x + y + 4 = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Persamaan garis dengan titik potong sumbu $(a, 0)$ dan $(0, b)$ dapat ditentukan menggunakan bentuk intersep: $\\frac{x}{a} + \\frac{y}{b} = 1$.",
      steps: "1. Terapkan bentuk intersep dengan $a = 4$ dan $b = -2$:\n$$\\frac{x}{4} + \\frac{y}{-2} = 1$$\n$$\\frac{x}{4} - \\frac{y}{2} = 1$$\n2. Kalikan seluruh persamaan dengan 4 untuk menghilangkan pecahan:\n$$x - 2y = 4$$\n3. Ubah ke bentuk umum implisit:\n$$x - 2y - 4 = 0$$\n4. Jadi, persamaan garis tersebut adalah $x - 2y - 4 = 0$ (pilihan A).",
      pitfalls: "Lupa menyertakan tanda negatif pada pembagi $b = -2$ sehingga menghasilkan $x + 2y - 4 = 0$."
    }
  }
];
