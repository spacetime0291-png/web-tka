/**
 * Batch Task: TASK_fis-gel-optik-alat_EASY
 * SubTopic: Lup, Mikroskop, dan Teropong (fis-gel-optik-alat)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-gel-optik-alat-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-alat",
    category: "Alat Optik (Lup, Mikroskop, Teropong)",
    difficulty: "mudah",
    statement: "Sebuah lup (kaca pembesar) memiliki jarak fokus $f = 5\\text{ cm}$. Jika titik dekat mata normal adalah $s_n = 25\\text{ cm}$, perbesaran sudut (anguler) lup saat digunakan oleh mata yang berakomodasi maksimum adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ kali}$",
      "$5\\text{ kali}$",
      "$6\\text{ kali}$",
      "$7\\text{ kali}$",
      "$8\\text{ kali}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Perbesaran sudut lup untuk mata yang berakomodasi maksimum dirumuskan:<br>$$M = \\frac{s_n}{f} + 1$$<br>dengan $s_n$ adalah jarak titik dekat mata normal ($25\\text{ cm}$) dan $f$ adalah jarak fokus lup.",
      steps: "1. Diketahui $s_n = 25\\text{ cm}$ dan $f = 5\\text{ cm}$.<br>2. Masukkan ke rumus akomodasi maksimum:<br>$$M = \\frac{25}{5} + 1 = 5 + 1 = 6\\text{ kali}$$<br>3. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Lupa menambahkan angka 1 adalah kesalahan yang sangat sering terjadi, yang menghasilkan $25/5 = 5\\text{ kali}$ (opsi B). Penambahan angka 1 hanya dihilangkan jika mata <strong>tidak berakomodasi</strong>."
    }
  },
  {
    id: "fis-gel-optik-alat-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-alat",
    category: "Alat Optik (Lup, Mikroskop, Teropong)",
    difficulty: "mudah",
    statement: "Sebuah lup dengan jarak fokus $10\\text{ cm}$ digunakan untuk mengamati sebuah komponen elektronik renik oleh seseorang bermata normal ($s_n = 25\\text{ cm}$) tanpa berakomodasi. Perbesaran sudut yang dihasilkan lup tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}5\\text{ kali}$",
      "$2{,}0\\text{ kali}$",
      "$2{,}5\\text{ kali}$",
      "$3{,}5\\text{ kali}$",
      "$4\\text{ kali}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Untuk pengamatan tanpa berakomodasi (mata relaks), bayangan lup harus terbentuk di tak terhingga ($s' = \\infty$) sehingga benda diletakkan tepat di titik fokus ($s = f$). Perbesaran sudutnya adalah:<br>$$M = \\frac{s_n}{f}$$",
      steps: "1. Diketahui $s_n = 25\\text{ cm}$ dan $f = 10\\text{ cm}$.<br>2. Masukkan ke rumus perbesaran tanpa akomodasi:<br>$$M = \\frac{25}{10} = 2{,}5\\text{ kali}$$<br>3. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Jangan menambahkan angka 1 jika kondisi pengamatan adalah tanpa akomodasi. Penambahan angka 1 hanya berlaku untuk akomodasi maksimum."
    }
  },
  {
    id: "fis-gel-optik-alat-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-alat",
    category: "Alat Optik (Lup, Mikroskop, Teropong)",
    difficulty: "mudah",
    statement: "Sebuah mikroskop tersusun atas dua lensa cembung, yaitu lensa objektif dan lensa okuler. Sifat bayangan antara yang dibentuk oleh lensa objektif mikroskop sebelum diamati kembali melalui lensa okuler adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Nyata, terbalik, dan diperbesar",
      "Maya, tegak, dan diperbesar",
      "Nyata, tegak, dan diperkecil",
      "Maya, terbalik, dan diperkecil",
      "Nyata, terbalik, dan sama besar"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pembentukan bayangan pada mikroskop:<br>1. Lensa objektif: Benda diletakkan di ruang II ($f_{\\text{ob}} < s_{\\text{ob}} < 2f_{\\text{ob}}$) sehingga menghasilkan bayangan di ruang III yang bersifat <strong>nyata, terbalik, dan diperbesar</strong>.<br>2. Lensa okuler (bertindak sebagai lup): Bayangan nyata objektif berada di ruang I okuler ($s_{\\text{ok}} \\le f_{\\text{ok}}$) sehingga menghasilkan bayangan akhir yang <strong>maya, terbalik terhadap benda asli, dan sangat diperbesar</strong>.",
      steps: "1. Tinjau peran lensa objektif: Membentuk bayangan nyata yang dapat ditangkap lensa okuler.<br>2. Karena benda diletakkan di antara $F$ dan $2F$, sifat bayangan pertamanya adalah nyata, terbalik, diperbesar.<br>3. Jawaban yang benar adalah pilihan A.",
      pitfalls: "Jangan tertukar dengan sifat bayangan akhir yang dilihat mata pengamat (maya, terbalik, diperbesar). Soal menanyakan secara spesifik sifat bayangan yang dihasilkan oleh lensa objektif."
    }
  },
  {
    id: "fis-gel-optik-alat-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-alat",
    category: "Alat Optik (Lup, Mikroskop, Teropong)",
    difficulty: "mudah",
    statement: "Sebuah teropong bintang memiliki lensa objektif dengan jarak fokus $100\\text{ cm}$ dan lensa okuler dengan jarak fokus $5\\text{ cm}$. Jika teropong tersebut digunakan untuk mengamati benda langit oleh pengamat dengan mata tidak berakomodasi, panjang tabung teropong tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$20\\text{ cm}$",
      "$95\\text{ cm}$",
      "$100\\text{ cm}$",
      "$105\\text{ cm}$",
      "$500\\text{ cm}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Panjang tabung teropong bintang ($d$, jarak antara lensa objektif dan lensa okuler) saat mata tidak berakomodasi memenuhi persamaan:<br>$$d = f_{\\text{ob}} + f_{\\text{ok}}$$kanan",
      steps: "1. Diketahui $f_{\\text{ob}} = 100\\text{ cm}$ dan $f_{\\text{ok}} = 5\\text{ cm}$.<br>2. Hitung panjang tabung teropong:<br>$$d = 100 + 5 = 105\\text{ cm}$$<br>3. Jawaban yang benar adalah pilihan D.",
      pitfalls: "Jika keliru membagi fokus ($100/5 = 20\\text{ cm}$, opsi A), itu adalah perbesaran sudut teropong ($M$), bukan panjang tabung teropong ($d$)."
    }
  },
  {
    id: "fis-gel-optik-alat-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-alat",
    category: "Alat Optik (Lup, Mikroskop, Teropong)",
    difficulty: "mudah",
    statement: "Sebuah teropong astronomi (teropong bintang) memiliki jarak fokus lensa objektif sebesar $120\\text{ cm}$ dan lensa okuler sebesar $6\\text{ cm}$. Besar perbesaran sudut teropong saat digunakan dengan mata tidak berakomodasi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ kali}$",
      "$15\\text{ kali}$",
      "$20\\text{ kali}$",
      "$24\\text{ kali}$",
      "$30\\text{ kali}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Perbesaran sudut teropong bintang untuk pengamatan mata tanpa berakomodasi dirumuskan:<br>$$M = \\frac{f_{\\text{ob}}}{f_{\\text{ok}}}$$",
      steps: "1. Substitusikan nilai $f_{\\text{ob}} = 120\\text{ cm}$ dan $f_{\\text{ok}} = 6\\text{ cm}$:<br>$$M = \\frac{120}{6} = 20\\text{ kali}$$<br>2. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Jangan sampai terbalik membagi $f_{\\text{ok}} / f_{\\text{ob}} = 6/120 = 0{,}05$. Lensa objektif teropong bintang selalu memiliki jarak fokus yang jauh lebih panjang daripada lensa okulernya agar perbesaran sudut bernilai besar."
    }
  }
];
