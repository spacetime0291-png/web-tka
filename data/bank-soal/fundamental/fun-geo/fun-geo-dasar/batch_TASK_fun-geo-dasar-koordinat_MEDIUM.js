/**
 * Batch Task: TASK_fun-geo-dasar-koordinat_MEDIUM
 * SubTopic: Geometri Dasar: Koordinat & Jarak Dua Titik (fun-geo-dasar-koordinat)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-geo-dasar-koordinat-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-koordinat",
    category: "Menentukan Nilai Parameter dari Jarak Dua Titik",
    difficulty: "sedang",
    statement: "Diketahui jarak antara titik $A(2, p)$ dan titik $B(6, 1)$ adalah $5$ satuan panjang. Jika $p$ bernilai positif ($p > 0$), maka nilai dari $p$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2$",
      "$3$",
      "$4$",
      "$5$",
      "$6$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan rumus kuadrat jarak dua titik $d^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$ untuk membentuk persamaan kuadrat variabel $p$.",
      steps: "1. Substitusikan data titik dan jarak ke rumus kuadrat jarak:\n$$d^2 = (6 - 2)^2 + (1 - p)^2$$\n$$5^2 = 4^2 + (1 - p)^2$$\n$$25 = 16 + (1 - p)^2$$\n2. Kurangkan kedua ruas dengan 16:\n$$(1 - p)^2 = 25 - 16 = 9$$\n3. Tarik akar kuadrat pada kedua ruas:\n$$1 - p = 3 \\implies p = -2$$\n$$1 - p = -3 \\implies p = 4$$\n4. Karena disyaratkan $p > 0$, maka nilai yang memenuhi adalah $p = 4$.\n5. Jadi, nilai $p$ adalah $4$ (pilihan C).",
      pitfalls: "Memilih nilai negatif $p = -2$ tanpa memperhatikan batasan $p > 0$ yang diberikan pada soal."
    }
  },
  {
    id: "fun-geo-dasar-koordinat-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-koordinat",
    category: "Tempat Kedudukan Titik Berjarak Sama",
    difficulty: "sedang",
    statement: "Titik $P(x, y)$ memiliki jarak yang sama terhadap titik $A(1, 2)$ dan titik $B(3, 4)$. Persamaan garis tempat kedudukan titik $P$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x + y - 5 = 0$",
      "$x - y + 1 = 0$",
      "$x + y - 6 = 0$",
      "$2x + y - 7 = 0$",
      "$x + 2y - 5 = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kondisi jarak sama $PA = PB \\iff PA^2 = PB^2$ menghasilkan persamaan garis bagi tegak lurus (garis sumbu) dari ruas garis $AB$.",
      steps: "1. Tuliskan kesamaan kuadrat jarak $PA^2 = PB^2$:\n$$(x - 1)^2 + (y - 2)^2 = (x - 3)^2 + (y - 4)^2$$\n2. Jabarkan kedua bentuk kuadrat:\n$$x^2 - 2x + 1 + y^2 - 4y + 4 = x^2 - 6x + 9 + y^2 - 8y + 16$$\n$$x^2 + y^2 - 2x - 4y + 5 = x^2 + y^2 - 6x - 8y + 25$$\n3. Hilangkan suku $x^2 + y^2$ dan pindahkan seluruh suku ke ruas kiri:\n$$(-2x + 6x) + (-4y + 8y) + (5 - 25) = 0$$\n$$4x + 4y - 20 = 0$$\n4. Bagi seluruh persamaan dengan 4:\n$$x + y - 5 = 0$$\n5. Jadi, persamaan garisnya adalah $x + y - 5 = 0$ (pilihan A).",
      pitfalls: "Lupa menjabarkan suku tengah bentuk kuadrat binomial sehingga suku berderajat satu hilang."
    }
  },
  {
    id: "fun-geo-dasar-koordinat-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-koordinat",
    category: "Pembagian Ruas Garis dengan Perbandingan Tertentu",
    difficulty: "sedang",
    statement: "Titik $C$ terletak pada ruas garis $AB$ sedemikian sehingga $AC : CB = 2 : 1$. Jika koordinat titik $A(1, 2)$ dan $B(7, 8)$, maka koordinat titik $C$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(3, 4)$",
      "$(4, 5)$",
      "$(5, 6)$",
      "$(6, 7)$",
      "$(5, 7)$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Koordinat titik pembagi berbobot $m : n$ dirumuskan sebagai $x_C = \\frac{m \\cdot x_B + n \\cdot x_A}{m + n}$ dan $y_C = \\frac{m \\cdot y_B + n \\cdot y_A}{m + n}$.",
      steps: "1. Terapkan rumus pembagian ruas garis dengan $m = 2$ dan $n = 1$:\n$$x_C = \\frac{2(x_B) + 1(x_A)}{2 + 1} = \\frac{2(7) + 1(1)}{3} = \\frac{14 + 1}{3} = \\frac{15}{3} = 5$$\n2. Hitung ordinat titik $C$:\n$$y_C = \\frac{2(y_B) + 1(y_A)}{2 + 1} = \\frac{2(8) + 1(2)}{3} = \\frac{16 + 2}{3} = \\frac{18}{3} = 6$$\n3. Gabungkan koordinat titik $C$:\n$$C = (5, 6)$$\n4. Jadi, koordinat titik $C$ adalah $(5, 6)$ (pilihan C).",
      pitfalls: "Tertukar bobot perbandingan dengan mengalikan $m$ ke titik $A$ dan $n$ ke titik $B$ sehingga menghasilkan $(3, 4)$."
    }
  },
  {
    id: "fun-geo-dasar-koordinat-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-koordinat",
    category: "Keliling Bangun Datar dari Titik Sudut Koordinat",
    difficulty: "sedang",
    statement: "Sebuah segitiga memiliki titik-titik sudut di $A(0, 0)$, $B(6, 0)$, dan $C(3, 4)$. Keliling segitiga $ABC$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$12\\text{ satuan}$",
      "$14\\text{ satuan}$",
      "$16\\text{ satuan}$",
      "$18\\text{ satuan}$",
      "$20\\text{ satuan}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Keliling segitiga adalah jumlahan panjang ketiga sisinya: $K = AB + BC + CA$.",
      steps: "1. Panjang sisi $AB$ (sepanjang sumbu-$X$):\n$$AB = |6 - 0| = 6$$\n2. Panjang sisi $AC$:\n$$AC = \\sqrt{(3 - 0)^2 + (4 - 0)^2} = \\sqrt{3^2 + 4^2} = 5$$\n3. Panjang sisi $BC$:\n$$BC = \\sqrt{(3 - 6)^2 + (4 - 0)^2} = \\sqrt{(-3)^2 + 4^2} = \\sqrt{9 + 16} = 5$$\n4. Hitung keliling segitiga:\n$$K = AB + BC + AC = 6 + 5 + 5 = 16$$\n5. Jadi, keliling segitiga $ABC$ adalah $16\\text{ satuan}$ (pilihan C).",
      pitfalls: "Menghitung luas $(\\frac{1}{2} \\times 6 \\times 4 = 12)$ alih-alih keliling segitiga."
    }
  },
  {
    id: "fun-geo-dasar-koordinat-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-koordinat",
    category: "Menentukan Titik Berat Segitiga Koordinat",
    difficulty: "sedang",
    statement: "Koordinat titik berat segitiga dengan titik-titik sudut $P(2, 4)$, $Q(6, -2)$, dan $R(4, 7)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(3, 3)$",
      "$(4, 3)$",
      "$(4, 4)$",
      "$(5, 3)$",
      "$(6, 4)$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Titik berat (centroid) segitiga dengan titik-titik sudut $(x_1, y_1)$, $(x_2, y_2)$, dan $(x_3, y_3)$ dirumuskan sebagai $G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right)$.",
      steps: "1. Hitung rata-rata absis ketiga titik sudut:\n$$x_G = \\frac{2 + 6 + 4}{3} = \\frac{12}{3} = 4$$\n2. Hitung rata-rata ordinat ketiga titik sudut:\n$$y_G = \\frac{4 + (-2) + 7}{3} = \\frac{9}{3} = 3$$\n3. Gabungkan koordinat titik berat:\n$$G = (4, 3)$$\n4. Jadi, koordinat titik berat segitiga tersebut adalah $(4, 3)$ (pilihan B).",
      pitfalls: "Membagi jumlah koordinat dengan 2 (seperti rumus titik tengah) bukannya membagi dengan 3."
    }
  }
];
