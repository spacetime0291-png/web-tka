/**
 * Batch Task: TASK_fis-gel-optik-pantul_MEDIUM
 * SubTopic: Pemantulan Cahaya (fis-gel-optik-pantul)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-gel-optik-pantul-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-pantul",
    category: "Pemantulan Cahaya",
    difficulty: "sedang",
    statement: "Sebuah cermin cekung memiliki jarak fokus $12\\text{ cm}$. Agar terbentuk bayangan tegak dengan perbesaran linier $3$ kali dari ukuran bendanya, benda harus diletakkan di depan cermin pada jarak ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6\\text{ cm}$",
      "$8\\text{ cm}$",
      "$10\\text{ cm}$",
      "$16\\text{ cm}$",
      "$24\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Bayangan yang bersifat tegak pada cermin cekung selalu merupakan bayangan maya (terletak di ruang I, yaitu $s < f$). Pada bayangan maya tegak, jarak bayangan bernilai negatif:<br>$$M = -\\frac{s'}{s} = +3 \\implies s' = -3s$$",
      steps: "1. Substitusikan $s' = -3s$ dan $f = +12\\text{ cm}$ ke persamaan cermin:<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{12} = \\frac{1}{s} - \\frac{1}{3s}$$<br>2. Samakan penyebut di ruas kanan:<br>$$\\frac{1}{12} = \\frac{3 - 1}{3s} = \\frac{2}{3s}$$<br>3. Lakukan perkalian silang:<br>$$3s = 2 \\times 12 = 24 \\implies s = \\frac{24}{3} = 8\\text{ cm}$$<br>4. Benda berada di $s = 8\\text{ cm}$ (di antara titik asal dan titik fokus $f = 12\\text{ cm}$).<br>5. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Jika keliru menganggap bayangannya nyata ($s' = +3s$), maka persamaannya menjadi $\\frac{1}{12} = \\frac{4}{3s} \\implies s = 16\\text{ cm}$ (opsi D). Ingat bahwa bayangan nyata pada cermin cekung selalu terbalik, sedangkan soal meminta bayangan tegak."
    }
  },
  {
    id: "fis-gel-optik-pantul-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-pantul",
    category: "Pemantulan Cahaya",
    difficulty: "sedang",
    statement: "Sebuah benda diletakkan di depan sebuah cermin cekung yang berfokus $20\\text{ cm}$ sehingga terbentuk bayangan nyata dengan ukuran $2$ kali ukuran aslinya. Jarak mula-mula benda tersebut dari permukaan cermin adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$15\\text{ cm}$",
      "$20\\text{ cm}$",
      "$25\\text{ cm}$",
      "$30\\text{ cm}$",
      "$40\\text{ cm}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Bayangan nyata pada cermin cekung selalu berjarak positif ($s' > 0$) dan berada di depan cermin. Hubungan perbesaran linier untuk bayangan nyata adalah:<br>$$M = \\frac{s'}{s} = 2 \\implies s' = 2s$$",
      steps: "1. Masukkan $s' = 2s$ dan $f = 20\\text{ cm}$ ke persamaan cermin:<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{20} = \\frac{1}{s} + \\frac{1}{2s}$$<br>2. Samakan penyebut:<br>$$\\frac{1}{20} = \\frac{2 + 1}{2s} = \\frac{3}{2s}$$<br>3. Kalikan silang:<br>$$2s = 3 \\times 20 = 60 \\implies s = 30\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan D.",
      pitfalls: "Periksa kembali posisi benda: $s = 30\\text{ cm}$ terletak di antara titik fokus ($f = 20\\text{ cm}$) dan pusat kelengkungan ($R = 40\\text{ cm}$) (ruang II), sehingga bayangan memang nyata, terbalik, diperbesar di ruang III ($s' = 60\\text{ cm}$)."
    }
  },
  {
    id: "fis-gel-optik-pantul-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-pantul",
    category: "Pemantulan Cahaya",
    difficulty: "sedang",
    statement: "Sebuah benda diletakkan tegak lurus sumbu utama di depan sebuah cermin cembung yang memiliki jari-jari kelengkungan $60\\text{ cm}$. Jika bayangan yang dihasilkan memiliki tinggi $\\frac{1}{3}$ kali tinggi bendanya, jarak benda tersebut ke permukaan cermin cembung adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$20\\text{ cm}$",
      "$30\\text{ cm}$",
      "$45\\text{ cm}$",
      "$60\\text{ cm}$",
      "$90\\text{ cm}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Pada cermin cembung, fokus bernilai negatif ($f = -R/2$) dan bayangan selalu maya ($s' = -M \\cdot s = -\\frac{1}{3}s$):<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}$$",
      steps: "1. Hitung jarak fokus cermin cembung: $f = -\\frac{60}{2} = -30\\text{ cm}$.<br>2. Karena bayangan maya diperkecil, $s' = -\\frac{1}{3}s$.<br>3. Substitusikan ke persamaan cermin:<br>$$-\\frac{1}{30} = \\frac{1}{s} - \\frac{3}{s} = -\\frac{2}{s}$$<br>4. Kalikan silang persamaan:<br>$$\\frac{1}{30} = \\frac{2}{s} \\implies s = 2 \\times 30 = 60\\text{ cm}$$<br>5. Jawaban yang benar adalah pilihan D.",
      pitfalls: "Lupa memberi tanda negatif pada fokus cermin cembung atau pada jarak bayangan maya akan menyebabkan kesalahan tanda dan nilai perhitungan."
    }
  },
  {
    id: "fis-gel-optik-pantul-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-pantul",
    category: "Pemantulan Cahaya",
    difficulty: "sedang",
    statement: "Seseorang yang memiliki tinggi badan $170\\text{ cm}$ berdiri tegak di depan sebuah cermin datar vertikal. Jarak dari lantai ke matanya adalah $160\\text{ cm}$. Panjang cermin minimum ($L_{\\min}$) dan tinggi tepi bawah cermin dari lantai ($H_{\\text{bawah}}$) agar orang tersebut dapat melihat bayangan seluruh tubuhnya secara utuh berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$85\\text{ cm}$ dan $80\\text{ cm}$",
      "$85\\text{ cm}$ dan $85\\text{ cm}$",
      "$170\\text{ cm}$ dan $80\\text{ cm}$",
      "$80\\text{ cm}$ dan $85\\text{ cm}$",
      "$160\\text{ cm}$ dan $80\\text{ cm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Berdasarkan hukum pemantulan sudut datang sama dengan sudut pantul:<br>1. Panjang cermin datar minimum agar seseorang dapat melihat seluruh tubuhnya adalah setengah dari tinggi tubuh orang tersebut:<br>$$L_{\\min} = \\frac{1}{2} h_{\\text{badan}}$$<br>2. Ketinggian tepi bawah cermin dari lantai agar kaki terlihat adalah setengah dari ketinggian matanya dari lantai:<br>$$H_{\\text{bawah}} = \\frac{1}{2} h_{\\text{mata}}$$",
      steps: "1. Hitung panjang cermin minimum: $L_{\\min} = \\frac{1}{2} \\times 170\\text{ cm} = 85\\text{ cm}$.<br>2. Hitung tinggi tepi bawah cermin dari lantai: $H_{\\text{bawah}} = \\frac{1}{2} \\times 160\\text{ cm} = 80\\text{ cm}$.<br>3. Jawaban yang benar adalah pilihan A.",
      pitfalls: "Siswa sering mengira panjang cermin harus sama dengan tinggi tubuh orang ($170\\text{ cm}$, opsi C), atau salah membagi dua tinggi badan untuk menentukan tepi bawah cermin."
    }
  },
  {
    id: "fis-gel-optik-pantul-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-pantul",
    category: "Pemantulan Cahaya",
    difficulty: "sedang",
    statement: "Sebuah benda mula-mula diletakkan pada jarak $30\\text{ cm}$ di depan sebuah cermin cekung dengan jarak fokus $20\\text{ cm}$. Jika benda tersebut kemudian digeser sejauh $10\\text{ cm}$ menjauhi cermin, pergeseran posisi bayangan yang terjadi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Bergeser $10\\text{ cm}$ menjauhi cermin",
      "Bergeser $20\\text{ cm}$ mendekati cermin",
      "Bergeser $20\\text{ cm}$ menjauhi cermin",
      "Bergeser $30\\text{ cm}$ mendekati cermin",
      "Bergeser $10\\text{ cm}$ mendekati cermin"
    ],
    correctIndex: 1,
    solution: {
      concept: "Posisi bayangan dihitung pada dua keadaan berbeda dengan rumus cermin cekung:<br>$$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$$<br>Pergeseran bayangan adalah selisih posisi bayangan akhir terhadap posisi bayangan awal: $\\Delta s' = |s_2' - s_1'|$.",
      steps: "1. Posisi bayangan awal ($s_1 = 30\\text{ cm}$, $f = 20\\text{ cm}$):<br>$$\\frac{1}{s_1'} = \\frac{1}{20} - \\frac{1}{30} = \\frac{3 - 2}{60} = \\frac{1}{60} \\implies s_1' = +60\\text{ cm}$$<br>2. Posisi benda setelah digeser $10\\text{ cm}$ menjauhi cermin: $s_2 = 30 + 10 = 40\\text{ cm}$.<br>3. Posisi bayangan akhir ($s_2 = 40\\text{ cm}$):<br>$$\\frac{1}{s_2'} = \\frac{1}{20} - \\frac{1}{40} = \\frac{2 - 1}{40} = \\frac{1}{40} \\implies s_2' = +40\\text{ cm}$$<br>4. Hitung pergeseran: Dari jarak $60\\text{ cm}$ menjadi $40\\text{ cm}$ dari cermin, artinya bayangan bergeser sejauh $60 - 40 = 20\\text{ cm}$ mendekati cermin.<br>5. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Perhatikan arah pergeseran bayangan: ketika benda bergerak menjauhi cermin cekung dari ruang II ke pusat kelengkungan, bayangannya bergerak berlawanan arah yaitu mendekati cermin."
    }
  }
];
