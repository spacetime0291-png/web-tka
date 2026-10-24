/**
 * Batch Task: TASK_fis-gel-optik-alat_MEDIUM
 * SubTopic: Lup, Mikroskop, dan Teropong (fis-gel-optik-alat)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-gel-optik-alat-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-alat",
    category: "Alat Optik (Lup, Mikroskop, Teropong)",
    difficulty: "sedang",
    statement: "Sebuah mikroskop memiliki lensa objektif dengan jarak fokus $1\\text{ cm}$ dan lensa okuler dengan jarak fokus $5\\text{ cm}$. Sebuah preparat biologi diletakkan pada jarak $1{,}2\\text{ cm}$ di depan lensa objektif. Jika mikroskop digunakan oleh pengamat bermata normal ($s_n = 25\\text{ cm}$) tanpa berakomodasi, perbesaran total mikroskop tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ kali}$",
      "$20\\text{ kali}$",
      "$25\\text{ kali}$",
      "$30\\text{ kali}$",
      "$50\\text{ kali}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Perbesaran total mikroskop ($M_{\\text{tot}}$) merupakan perkalian perbesaran linier lensa objektif ($M_{\\text{ob}}$) dan perbesaran sudut lensa okuler ($M_{\\text{ok}}$):<br>$$M_{\\text{tot}} = M_{\\text{ob}} \\times M_{\\text{ok}} = \\left|\\frac{s_{\\text{ob}}'}{s_{\\text{ob}}}\\right| \\times \\left(\\frac{s_n}{f_{\\text{ok}}}\\right)$$",
      steps: "1. Hitung jarak bayangan objektif ($s_{\\text{ob}}'$):<br>$$\\frac{1}{s_{\\text{ob}}'} = \\frac{1}{f_{\\text{ob}}} - \\frac{1}{s_{\\text{ob}}} = \\frac{1}{1} - \\frac{1}{1{,}2} = 1 - \\frac{5}{6} = \\frac{1}{6} \\implies s_{\\text{ob}}' = 6\\text{ cm}$$<br>2. Hitung perbesaran objektif:<br>$$M_{\\text{ob}} = \\frac{6}{1{,}2} = 5\\text{ kali}$$<br>3. Hitung perbesaran okuler tanpa akomodasi:<br>$$M_{\\text{ok}} = \\frac{s_n}{f_{\\text{ok}}} = \\frac{25}{5} = 5\\text{ kali}$$<br>4. Hitung perbesaran total:<br>$$M_{\\text{tot}} = 5 \\times 5 = 25\\text{ kali}$$<br>5. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Perhatikan bahwa perbesaran total adalah hasil <strong>kali</strong> ($M_{\\text{ob}} \\times M_{\\text{ok}}$), bukan penjumlahan aljabar ($5 + 5 = 10\\text{ kali}$, opsi A)."
    }
  },
  {
    id: "fis-gel-optik-alat-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-alat",
    category: "Alat Optik (Lup, Mikroskop, Teropong)",
    difficulty: "sedang",
    statement: "Sebuah mikroskop digunakan untuk mengamati preparat dengan kondisi pengamatan tanpa berakomodasi. Diketahui bayangan nyata oleh lensa objektif terbentuk pada jarak $s_{\\text{ob}}' = 6\\text{ cm}$ di belakang lensa objektif, dan jarak fokus lensa okuler adalah $f_{\\text{ok}} = 5\\text{ cm}$. Jarak antara lensa objektif dan lensa okuler (panjang tubus mikroskop, $d$) pada kondisi tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6\\text{ cm}$",
      "$7{,}2\\text{ cm}$",
      "$10\\text{ cm}$",
      "$11\\text{ cm}$",
      "$15\\text{ cm}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Pada mikroskop untuk mata yang tidak berakomodasi, bayangan dari lensa objektif harus jatuh tepat di titik fokus lensa okuler ($s_{\\text{ok}} = f_{\\text{ok}}$). Panjang tubus mikroskop dirumuskan:<br>$$d = s_{\\text{ob}}' + f_{\\text{ok}}$$kanan",
      steps: "1. Substitusikan nilai $s_{\\text{ob}}' = 6\\text{ cm}$ dan $f_{\\text{ok}} = 5\\text{ cm}$:<br>$$d = 6 + 5 = 11\\text{ cm}$$<br>2. Jarak antara kedua lensa adalah $11\\text{ cm}$.<br>3. Jawaban yang benar adalah pilihan D.",
      pitfalls: "Jangan menggunakan rumus teropong $d = f_{\\text{ob}} + f_{\\text{ok}}$ karena pada mikroskop objek diletakkan dekat dengan lensa objektif sehingga jarak bayangan objektif $s_{\\text{ob}}'$ tidak sama dengan $f_{\\text{ob}}$."
    }
  },
  {
    id: "fis-gel-optik-alat-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-alat",
    category: "Alat Optik (Lup, Mikroskop, Teropong)",
    difficulty: "sedang",
    statement: "Sebuah mikroskop memiliki jarak fokus lensa objektif $0{,}9\\text{ cm}$ dan lensa okuler $5\\text{ cm}$. Sebuah objek mikro diletakkan pada jarak $1\\text{ cm}$ di depan lensa objektif. Jika mikroskop digunakan dengan mata berakomodasi maksimum pada jarak baca normal $25\\text{ cm}$, perbesaran total mikroskop tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$36\\text{ kali}$",
      "$45\\text{ kali}$",
      "$50\\text{ kali}$",
      "$54\\text{ kali}$",
      "$60\\text{ kali}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Perbesaran total mikroskop untuk mata berakomodasi maksimum dihitung dengan mengalikan perbesaran objektif dan perbesaran okuler berakomodasi maksimum ($M_{\\text{ok}} = \\frac{s_n}{f_{\\text{ok}}} + 1$):<br>$$M_{\\text{tot}} = \\left|\\frac{s_{\\text{ob}}'}{s_{\\text{ob}}}\\right| \\times \\left(\\frac{s_n}{f_{\\text{ok}}} + 1\\right)$$",
      steps: "1. Cari jarak bayangan lensa objektif ($s_{\\text{ob}}'$):<br>$$\\frac{1}{s_{\\text{ob}}'} = \\frac{1}{f_{\\text{ob}}} - \\frac{1}{s_{\\text{ob}}} = \\frac{1}{0{,}9} - \\frac{1}{1} = \\frac{10}{9} - 1 = \\frac{1}{9} \\implies s_{\\text{ob}}' = 9\\text{ cm}$$<br>2. Perbesaran objektif:<br>$$M_{\\text{ob}} = \\frac{9}{1} = 9\\text{ kali}$$<br>3. Perbesaran okuler berakomodasi maksimum ($s_n = 25\\text{ cm}$):<br>$$M_{\\text{ok}} = \\frac{25}{5} + 1 = 5 + 1 = 6\\text{ kali}$$<br>4. Perbesaran total:<br>$$M_{\\text{tot}} = 9 \\times 6 = 54\\text{ kali}$$<br>5. Jawaban yang benar adalah pilihan D.",
      pitfalls: "Jika lupa menambahkan angka 1 pada perbesaran okuler, maka diperoleh $M_{\\text{ok}} = 5 \\implies M_{\\text{tot}} = 9 \\times 5 = 45\\text{ kali}$ (opsi B). Perhatikan kondisi mata berakomodasi maksimum."
    }
  },
  {
    id: "fis-gel-optik-alat-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-alat",
    category: "Alat Optik (Lup, Mikroskop, Teropong)",
    difficulty: "sedang",
    statement: "Sebuah teropong bumi (teropong medan) tersusun atas tiga lensa cembung, yaitu lensa objektif dengan jarak fokus $f_{\\text{ob}} = 80\\text{ cm}$, lensa pembalik dengan jarak fokus $f_p = 5\\text{ cm}$, dan lensa okuler dengan jarak fokus $f_{\\text{ok}} = 10\\text{ cm}$. Panjang tabung teropong bumi tersebut saat digunakan untuk mengamati objek oleh mata tanpa berakomodasi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$95\\text{ cm}$",
      "$100\\text{ cm}$",
      "$110\\text{ cm}$",
      "$115\\text{ cm}$",
      "$130\\text{ cm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Teropong bumi dilengkapi dengan lensa pembalik agar bayangan akhir yang dilihat tegak. Panjang tubus teropong bumi saat mata tidak berakomodasi dirumuskan:<br>$$d = f_{\\text{ob}} + 4f_p + f_{\\text{ok}}$$kanan",
      steps: "1. Identifikasi fokus lensa: $f_{\\text{ob}} = 80\\text{ cm}$, $f_p = 5\\text{ cm}$, dan $f_{\\text{ok}} = 10\\text{ cm}$.<br>2. Lensa pembalik diletakkan sedemikian rupa sehingga bayangan objektif jatuh pada jarak $2f_p$ di depan lensa pembalik dan bayangan tegak dibentuk pada jarak $2f_p$ di belakangnya (total jarak kontribusi $4f_p$).<br>3. Hitung panjang tabung teropong:<br>$$d = 80 + 4(5) + 10 = 80 + 20 + 10 = 110\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Kesalahan umum adalah hanya menjumlahkan $f_{\\text{ob}} + f_p + f_{\\text{ok}} = 95\\text{ cm}$ (opsi A) atau $f_{\\text{ob}} + 2f_p + f_{\\text{ok}} = 100\\text{ cm}$ (opsi B). Lensa pembalik selalu menyumbang panjang tepat $4f_p$ pada tabung."
    }
  },
  {
    id: "fis-gel-optik-alat-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-alat",
    category: "Alat Optik (Lup, Mikroskop, Teropong)",
    difficulty: "sedang",
    statement: "Seorang ahli perhiasan menggunakan lup dengan jarak fokus $6\\text{ cm}$ untuk memeriksa keaslian sebuah batu permata. Jika ia ingin mengamati bayangan permata tersebut dengan berakomodasi pada jarak $30\\text{ cm}$ di depan matanya, jarak batu permata tersebut dari lensa lup harus diatur pada posisi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ cm}$",
      "$5\\text{ cm}$",
      "$6\\text{ cm}$",
      "$7{,}5\\text{ cm}$",
      "$8\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pengamatan dengan lup yang berakomodasi pada jarak tertentu ($x$) mengharuskan bayangan maya terbentuk pada jarak tersebut ($s' = -x$). Jarak benda ($s$) dicari dengan persamaan lensa tipis:<br>$$\\frac{1}{s} = \\frac{1}{f} - \\frac{1}{s'}$$",
      steps: "1. Substitusikan $f = +6\\text{ cm}$ dan bayangan maya $s' = -30\\text{ cm}$:<br>$$\\frac{1}{s} = \\frac{1}{6} - \\left(-\\frac{1}{30}\\right) = \\frac{1}{6} + \\frac{1}{30}$$<br>2. Samakan penyebut KPK 30:<br>$$\\frac{1}{s} = \\frac{5 + 1}{30} = \\frac{6}{30} = \\frac{1}{5}$$<br>3. Diperoleh jarak benda:<br>$$s = 5\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Jangan lupa tanda minus pada jarak bayangan lup ($s' = -30\\text{ cm}$) karena lup selalu menghasilkan bayangan maya di depan lensa."
    }
  }
];
