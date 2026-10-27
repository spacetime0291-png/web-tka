/**
 * Batch Task: TASK_fun-trig-dasar-perbandingan_MEDIUM
 * SubTopic: Trigonometri Dasar: Perbandingan Trigonometri Siku-Siku (fun-trig-dasar-perbandingan)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-trig-dasar-perbandingan-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-perbandingan",
    category: "Nilai Bentuk Aljabar dari Perbandingan Trigonometri",
    difficulty: "sedang",
    statement: "Diketahui $\\tan \\alpha = \\frac{3}{4}$ dengan $\\alpha$ merupakan sudut lancip. Nilai dari pecahan aljabar $\\frac{2\\sin \\alpha - \\cos \\alpha}{\\sin \\alpha + 3\\cos \\alpha}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{15}$",
      "$\\frac{2}{15}$",
      "$\\frac{1}{5}$",
      "$\\frac{4}{15}$",
      "$\\frac{1}{3}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pecahan homogen derajat 1 yang memuat $\\sin \\alpha$ dan $\\cos \\alpha$ dapat disederhanakan dengan membagi pembilang dan penyebut dengan $\\cos \\alpha$ agar langsung dinyatakan dalam bentuk $\\tan \\alpha$.",
      steps: "1. Bagi pembilang dan penyebut dengan $\\cos \\alpha$:\n$$\\frac{\\frac{2\\sin \\alpha}{\\cos \\alpha} - \\frac{\\cos \\alpha}{\\cos \\alpha}}{\\frac{\\sin \\alpha}{\\cos \\alpha} + 3\\frac{\\cos \\alpha}{\\cos \\alpha}} = \\frac{2\\tan \\alpha - 1}{\\tan \\alpha + 3}$$\n2. Substitusikan nilai $\\tan \\alpha = \\frac{3}{4}$:\n$$\\text{Pembilang} = 2\\left(\\frac{3}{4}\\right) - 1 = \\frac{3}{2} - 1 = \\frac{1}{2}$$\n$$\\text{Penyebut} = \\frac{3}{4} + 3 = \\frac{3 + 12}{4} = \\frac{15}{4}$$\n3. Selesaikan pembagian pecahan:\n$$\\frac{\\frac{1}{2}}{\\frac{15}{4}} = \\frac{1}{2} \\times \\frac{4}{15} = \\frac{2}{15}$$\n4. Jadi, nilai pecahan tersebut adalah $\\frac{2}{15}$ (pilihan B).",
      pitfalls: "Menghitung nilai $\\sin \\alpha = \\frac{3}{5}$ dan $\\cos \\alpha = \\frac{4}{5}$ satu per satu namun keliru saat menjumlahkan pecahan bertingkat."
    }
  },
  {
    id: "fun-trig-dasar-perbandingan-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-perbandingan",
    category: "Dua Segitiga Siku-Siku Bergandengan",
    difficulty: "sedang",
    statement: "Pada segitiga $ABC$, titik $D$ terletak pada sisi $BC$ sedemikian sehingga garis $AD$ tegak lurus dengan $BC$. Jika diketahui $\\angle B = 45^\\circ$, $\\angle C = 30^\\circ$, dan panjang garis tinggi $AD = 6\\text{ cm}$, maka panjang sisi $BC$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6 + 2\\sqrt{3}\\text{ cm}$",
      "$6 + 3\\sqrt{3}\\text{ cm}$",
      "$6 + 6\\sqrt{3}\\text{ cm}$",
      "$12\\sqrt{3}\\text{ cm}$",
      "$18\\text{ cm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Garis tinggi $AD$ membagi segitiga $ABC$ menjadi dua segitiga siku-siku $\\triangle ABD$ dan $\\triangle ACD$ dengan siku-siku di $D$. Panjang sisi $BC$ adalah penjumlahan $BC = BD + DC$.",
      steps: "1. Pada $\\triangle ABD$ siku-siku di $D$ dengan $\\angle B = 45^\\circ$:\n$$\\tan 45^\\circ = \\frac{AD}{BD} \\implies 1 = \\frac{6}{BD} \\implies BD = 6\\text{ cm}$$\n2. Pada $\\triangle ACD$ siku-siku di $D$ dengan $\\angle C = 30^\\circ$:\n$$\\tan 30^\\circ = \\frac{AD}{DC} \\implies \\frac{1}{\\sqrt{3}} = \\frac{6}{DC} \\implies DC = 6\\sqrt{3}\\text{ cm}$$\n3. Jumlahkan kedua ruas garis alas:\n$$BC = BD + DC = 6 + 6\\sqrt{3}\\text{ cm}$$\n4. Jadi, panjang sisi $BC$ adalah $6 + 6\\sqrt{3}\\text{ cm}$ (pilihan C).",
      pitfalls: "Mengabaikan bahwa sudut $45^\\circ$ dan $30^\\circ$ berada pada segitiga yang berbeda dan salah menggunakan aturan sinus sembarang."
    }
  },
  {
    id: "fun-trig-dasar-perbandingan-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-perbandingan",
    category: "Identitas Trigonometri Dasar",
    difficulty: "sedang",
    statement: "Jika diketahui $\\sin x + \\cos x = \\frac{7}{5}$, maka nilai dari hasil kali $\\sin x \\cos x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{6}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{16}{25}$",
      "$\\frac{18}{25}$",
      "$\\frac{24}{25}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kuadratkan kedua ruas persamaan dan gunakan identitas Pythagoras trigonometri dasar: $\\sin^2 x + \\cos^2 x = 1$.",
      steps: "1. Kuadratkan kedua ruas persamaan:\n$$(\\sin x + \\cos x)^2 = \\left(\\frac{7}{5}\\right)^2$$\n$$\\sin^2 x + 2\\sin x \\cos x + \\cos^2 x = \\frac{49}{25}$$\n2. Substitusikan $\\sin^2 x + \\cos^2 x = 1$:\n$$1 + 2\\sin x \\cos x = \\frac{49}{25}$$\n3. Kurangkan kedua ruas dengan 1:\n$$2\\sin x \\cos x = \\frac{49}{25} - 1 = \\frac{24}{25}$$\n4. Bagi kedua ruas dengan 2:\n$$\\sin x \\cos x = \\frac{24}{25} \\times \\frac{1}{2} = \\frac{12}{25}$$\n5. Jadi, nilai $\\sin x \\cos x$ adalah $\\frac{12}{25}$ (pilihan B).",
      pitfalls: "Lupa membagi 2 di langkah akhir sehingga memilih opsi $\\frac{24}{25}$."
    }
  },
  {
    id: "fun-trig-dasar-perbandingan-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-perbandingan",
    category: "Aplikasi Trigonometri Dua Sudut Elevasi",
    difficulty: "sedang",
    statement: "Dari titik pengamatan $A$, puncak sebuah menara terlihat dengan sudut elevasi $30^\\circ$. Pengamat kemudian berjalan sejauh $40\\text{ meter}$ lurus mendekati kaki menara menuju titik $B$, dan sudut elevasi puncak menara menjadi $60^\\circ$. Tinggi menara tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$15\\sqrt{3}\\text{ meter}$",
      "$20\\sqrt{3}\\text{ meter}$",
      "$30\\sqrt{3}\\text{ meter}$",
      "$40\\sqrt{3}\\text{ meter}$",
      "$60\\text{ meter}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gunakan model dua segitiga siku-siku dengan tinggi yang sama $h$ dan jarak horizontal $x$ dari titik $B$ ke dasar menara, serta $(x + 40)$ dari titik $A$ ke dasar menara.",
      steps: "1. Dari titik $B$ dengan sudut elevasi $60^\\circ$:\n$$\\tan 60^\\circ = \\frac{h}{x} \\implies \\sqrt{3} = \\frac{h}{x} \\implies x = \\frac{h}{\\sqrt{3}}$$\n2. Dari titik $A$ dengan sudut elevasi $30^\\circ$:\n$$\\tan 30^\\circ = \\frac{h}{x + 40} \\implies \\frac{1}{\\sqrt{3}} = \\frac{h}{x + 40} \\implies x + 40 = h\\sqrt{3}$$\n3. Substitusikan nilai $x = \\frac{h}{\\sqrt{3}}$ ke dalam persamaan:\n$$\\frac{h}{\\sqrt{3}} + 40 = h\\sqrt{3}$$\n$$40 = h\\sqrt{3} - \\frac{h}{\\sqrt{3}} = h\\left(\\frac{3 - 1}{\\sqrt{3}}\\right) = \\frac{2h}{\\sqrt{3}}$$\n4. Selesaikan untuk $h$:\n$$2h = 40\\sqrt{3} \\implies h = 20\\sqrt{3}\\text{ meter}$$\n5. Jadi, tinggi menara adalah $20\\sqrt{3}\\text{ meter}$ (pilihan B).",
      pitfalls: "Salah membedakan jarak antara $x$ dan $x + 40$ atau keliru rasionalisasi bentuk akar."
    }
  },
  {
    id: "fun-trig-dasar-perbandingan-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-perbandingan",
    category: "Relasi Tangen dan Secan pada Segitiga Siku-Siku",
    difficulty: "sedang",
    statement: "Diketahui $\\beta$ merupakan salah satu sudut lancip pada segitiga siku-siku. Jika berlaku hubungan $\\sec \\beta - \\tan \\beta = \\frac{1}{3}$, maka nilai dari $\\sec \\beta + \\tan \\beta$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{9}$",
      "$\\frac{1}{3}$",
      "$1$",
      "$3$",
      "$9$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Identitas trigonometri turunan Pythagoras menyatakan $\\sec^2 \\beta - \\tan^2 \\beta = 1$. Bentuk ini dapat difaktorkan sebagai selisih kuadrat: $(\\sec \\beta - \\tan \\beta)(\\sec \\beta + \\tan \\beta) = 1$.",
      steps: "1. Faktorkan identitas trigonometri $\\sec^2 \\beta - \\tan^2 \\beta = 1$:\n$$(\\sec \\beta - \\tan \\beta)(\\sec \\beta + \\tan \\beta) = 1$$\n2. Substitusikan nilai $\\sec \\beta - \\tan \\beta = \\frac{1}{3}$:\n$$\\frac{1}{3} \\times (\\sec \\beta + \\tan \\beta) = 1$$\n3. Kalikan kedua ruas dengan 3:\n$$\\sec \\beta + \\tan \\beta = 3$$\n4. Jadi, nilai dari $\\sec \\beta + \\tan \\beta$ adalah $3$ (pilihan D).",
      pitfalls: "Mencari nilai sisi-sisi segitiga secara manual yang memakan waktu lama, padahal kedua bentuk saling berkebalikan."
    }
  }
];
