/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Cahaya & Optik (fis-gel-optik)
 * Sub-Bab: Lup, Mikroskop, dan Teropong (fis-gel-optik-alat)
 * Slug: lup-mikroskop-teropong
 * Indikator: Perbesaran lup, mikroskop (objektif + okuler), dan teropong bintang berakomodasi / tanpa akomodasi.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-optik-alat";
  const subTopicSlug = "lup-mikroskop-teropong";
  const questions = [
  {
    "id": "fis-gel-optik-alat-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-alat",
    "category": "Alat Optik (Lup, Mikroskop, Teropong)",
    "difficulty": "mudah",
    "statement": "Sebuah lup (kaca pembesar) memiliki jarak fokus $f = 5\\text{ cm}$. Jika titik dekat mata normal adalah $s_n = 25\\text{ cm}$, perbesaran sudut (anguler) lup saat digunakan oleh mata yang berakomodasi maksimum adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ kali}$",
      "$5\\text{ kali}$",
      "$6\\text{ kali}$",
      "$7\\text{ kali}$",
      "$8\\text{ kali}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Perbesaran sudut lup untuk mata yang berakomodasi maksimum dirumuskan:<br>$$M = \\frac{s_n}{f} + 1$$<br>dengan $s_n$ adalah jarak titik dekat mata normal ($25\\text{ cm}$) dan $f$ adalah jarak fokus lup.",
      "steps": "1. Diketahui $s_n = 25\\text{ cm}$ dan $f = 5\\text{ cm}$.<br>2. Masukkan ke rumus akomodasi maksimum:<br>$$M = \\frac{25}{5} + 1 = 5 + 1 = 6\\text{ kali}$$<br>3. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Lupa menambahkan angka 1 adalah kesalahan yang sangat sering terjadi, yang menghasilkan $25/5 = 5\\text{ kali}$ (opsi B). Penambahan angka 1 hanya dihilangkan jika mata <strong>tidak berakomodasi</strong>."
    },
    "subTopicSlug": "lup-mikroskop-teropong",
    "bab": "Gelombang dan Optik",
    "subBab": "Lup, Mikroskop, dan Teropong",
    "subTopic": "Lup, Mikroskop, dan Teropong",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-alat-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-alat",
    "category": "Alat Optik (Lup, Mikroskop, Teropong)",
    "difficulty": "mudah",
    "statement": "Sebuah lup dengan jarak fokus $10\\text{ cm}$ digunakan untuk mengamati sebuah komponen elektronik renik oleh seseorang bermata normal ($s_n = 25\\text{ cm}$) tanpa berakomodasi. Perbesaran sudut yang dihasilkan lup tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}5\\text{ kali}$",
      "$2{,}0\\text{ kali}$",
      "$2{,}5\\text{ kali}$",
      "$3{,}5\\text{ kali}$",
      "$4\\text{ kali}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Untuk pengamatan tanpa berakomodasi (mata relaks), bayangan lup harus terbentuk di tak terhingga ($s' = \\infty$) sehingga benda diletakkan tepat di titik fokus ($s = f$). Perbesaran sudutnya adalah:<br>$$M = \\frac{s_n}{f}$$",
      "steps": "1. Diketahui $s_n = 25\\text{ cm}$ dan $f = 10\\text{ cm}$.<br>2. Masukkan ke rumus perbesaran tanpa akomodasi:<br>$$M = \\frac{25}{10} = 2{,}5\\text{ kali}$$<br>3. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Jangan menambahkan angka 1 jika kondisi pengamatan adalah tanpa akomodasi. Penambahan angka 1 hanya berlaku untuk akomodasi maksimum."
    },
    "subTopicSlug": "lup-mikroskop-teropong",
    "bab": "Gelombang dan Optik",
    "subBab": "Lup, Mikroskop, dan Teropong",
    "subTopic": "Lup, Mikroskop, dan Teropong",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-alat-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-alat",
    "category": "Alat Optik (Lup, Mikroskop, Teropong)",
    "difficulty": "mudah",
    "statement": "Sebuah mikroskop tersusun atas dua lensa cembung, yaitu lensa objektif dan lensa okuler. Sifat bayangan antara yang dibentuk oleh lensa objektif mikroskop sebelum diamati kembali melalui lensa okuler adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Nyata, terbalik, dan diperbesar",
      "Maya, tegak, dan diperbesar",
      "Nyata, tegak, dan diperkecil",
      "Maya, terbalik, dan diperkecil",
      "Nyata, terbalik, dan sama besar"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pembentukan bayangan pada mikroskop:<br>1. Lensa objektif: Benda diletakkan di ruang II ($f_{\\text{ob}} < s_{\\text{ob}} < 2f_{\\text{ob}}$) sehingga menghasilkan bayangan di ruang III yang bersifat <strong>nyata, terbalik, dan diperbesar</strong>.<br>2. Lensa okuler (bertindak sebagai lup): Bayangan nyata objektif berada di ruang I okuler ($s_{\\text{ok}} \\le f_{\\text{ok}}$) sehingga menghasilkan bayangan akhir yang <strong>maya, terbalik terhadap benda asli, dan sangat diperbesar</strong>.",
      "steps": "1. Tinjau peran lensa objektif: Membentuk bayangan nyata yang dapat ditangkap lensa okuler.<br>2. Karena benda diletakkan di antara $F$ dan $2F$, sifat bayangan pertamanya adalah nyata, terbalik, diperbesar.<br>3. Jawaban yang benar adalah pilihan A.",
      "pitfalls": "Jangan tertukar dengan sifat bayangan akhir yang dilihat mata pengamat (maya, terbalik, diperbesar). Soal menanyakan secara spesifik sifat bayangan yang dihasilkan oleh lensa objektif."
    },
    "subTopicSlug": "lup-mikroskop-teropong",
    "bab": "Gelombang dan Optik",
    "subBab": "Lup, Mikroskop, dan Teropong",
    "subTopic": "Lup, Mikroskop, dan Teropong",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-alat-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-alat",
    "category": "Alat Optik (Lup, Mikroskop, Teropong)",
    "difficulty": "mudah",
    "statement": "Sebuah teropong bintang memiliki lensa objektif dengan jarak fokus $100\\text{ cm}$ dan lensa okuler dengan jarak fokus $5\\text{ cm}$. Jika teropong tersebut digunakan untuk mengamati benda langit oleh pengamat dengan mata tidak berakomodasi, panjang tabung teropong tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20\\text{ cm}$",
      "$95\\text{ cm}$",
      "$100\\text{ cm}$",
      "$105\\text{ cm}$",
      "$500\\text{ cm}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Panjang tabung teropong bintang ($d$, jarak antara lensa objektif dan lensa okuler) saat mata tidak berakomodasi memenuhi persamaan:<br>$$d = f_{\\text{ob}} + f_{\\text{ok}}$$kanan",
      "steps": "1. Diketahui $f_{\\text{ob}} = 100\\text{ cm}$ dan $f_{\\text{ok}} = 5\\text{ cm}$.<br>2. Hitung panjang tabung teropong:<br>$$d = 100 + 5 = 105\\text{ cm}$$<br>3. Jawaban yang benar adalah pilihan D.",
      "pitfalls": "Jika keliru membagi fokus ($100/5 = 20\\text{ cm}$, opsi A), itu adalah perbesaran sudut teropong ($M$), bukan panjang tabung teropong ($d$)."
    },
    "subTopicSlug": "lup-mikroskop-teropong",
    "bab": "Gelombang dan Optik",
    "subBab": "Lup, Mikroskop, dan Teropong",
    "subTopic": "Lup, Mikroskop, dan Teropong",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-alat-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-alat",
    "category": "Alat Optik (Lup, Mikroskop, Teropong)",
    "difficulty": "mudah",
    "statement": "Sebuah teropong astronomi (teropong bintang) memiliki jarak fokus lensa objektif sebesar $120\\text{ cm}$ dan lensa okuler sebesar $6\\text{ cm}$. Besar perbesaran sudut teropong saat digunakan dengan mata tidak berakomodasi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ kali}$",
      "$15\\text{ kali}$",
      "$20\\text{ kali}$",
      "$24\\text{ kali}$",
      "$30\\text{ kali}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Perbesaran sudut teropong bintang untuk pengamatan mata tanpa berakomodasi dirumuskan:<br>$$M = \\frac{f_{\\text{ob}}}{f_{\\text{ok}}}$$",
      "steps": "1. Substitusikan nilai $f_{\\text{ob}} = 120\\text{ cm}$ dan $f_{\\text{ok}} = 6\\text{ cm}$:<br>$$M = \\frac{120}{6} = 20\\text{ kali}$$<br>2. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Jangan sampai terbalik membagi $f_{\\text{ok}} / f_{\\text{ob}} = 6/120 = 0{,}05$. Lensa objektif teropong bintang selalu memiliki jarak fokus yang jauh lebih panjang daripada lensa okulernya agar perbesaran sudut bernilai besar."
    },
    "subTopicSlug": "lup-mikroskop-teropong",
    "bab": "Gelombang dan Optik",
    "subBab": "Lup, Mikroskop, dan Teropong",
    "subTopic": "Lup, Mikroskop, dan Teropong",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-alat-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-alat",
    "category": "Alat Optik (Lup, Mikroskop, Teropong)",
    "difficulty": "sedang",
    "statement": "Sebuah mikroskop memiliki lensa objektif dengan jarak fokus $1\\text{ cm}$ dan lensa okuler dengan jarak fokus $5\\text{ cm}$. Sebuah preparat biologi diletakkan pada jarak $1{,}2\\text{ cm}$ di depan lensa objektif. Jika mikroskop digunakan oleh pengamat bermata normal ($s_n = 25\\text{ cm}$) tanpa berakomodasi, perbesaran total mikroskop tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ kali}$",
      "$20\\text{ kali}$",
      "$25\\text{ kali}$",
      "$30\\text{ kali}$",
      "$50\\text{ kali}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Perbesaran total mikroskop ($M_{\\text{tot}}$) merupakan perkalian perbesaran linier lensa objektif ($M_{\\text{ob}}$) dan perbesaran sudut lensa okuler ($M_{\\text{ok}}$):<br>$$M_{\\text{tot}} = M_{\\text{ob}} \\times M_{\\text{ok}} = \\left|\\frac{s_{\\text{ob}}'}{s_{\\text{ob}}}\\right| \\times \\left(\\frac{s_n}{f_{\\text{ok}}}\\right)$$",
      "steps": "1. Hitung jarak bayangan objektif ($s_{\\text{ob}}'$):<br>$$\\frac{1}{s_{\\text{ob}}'} = \\frac{1}{f_{\\text{ob}}} - \\frac{1}{s_{\\text{ob}}} = \\frac{1}{1} - \\frac{1}{1{,}2} = 1 - \\frac{5}{6} = \\frac{1}{6} \\implies s_{\\text{ob}}' = 6\\text{ cm}$$<br>2. Hitung perbesaran objektif:<br>$$M_{\\text{ob}} = \\frac{6}{1{,}2} = 5\\text{ kali}$$<br>3. Hitung perbesaran okuler tanpa akomodasi:<br>$$M_{\\text{ok}} = \\frac{s_n}{f_{\\text{ok}}} = \\frac{25}{5} = 5\\text{ kali}$$<br>4. Hitung perbesaran total:<br>$$M_{\\text{tot}} = 5 \\times 5 = 25\\text{ kali}$$<br>5. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Perhatikan bahwa perbesaran total adalah hasil <strong>kali</strong> ($M_{\\text{ob}} \\times M_{\\text{ok}}$), bukan penjumlahan aljabar ($5 + 5 = 10\\text{ kali}$, opsi A)."
    },
    "subTopicSlug": "lup-mikroskop-teropong",
    "bab": "Gelombang dan Optik",
    "subBab": "Lup, Mikroskop, dan Teropong",
    "subTopic": "Lup, Mikroskop, dan Teropong",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-alat-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-alat",
    "category": "Alat Optik (Lup, Mikroskop, Teropong)",
    "difficulty": "sedang",
    "statement": "Sebuah mikroskop digunakan untuk mengamati preparat dengan kondisi pengamatan tanpa berakomodasi. Diketahui bayangan nyata oleh lensa objektif terbentuk pada jarak $s_{\\text{ob}}' = 6\\text{ cm}$ di belakang lensa objektif, dan jarak fokus lensa okuler adalah $f_{\\text{ok}} = 5\\text{ cm}$. Jarak antara lensa objektif dan lensa okuler (panjang tubus mikroskop, $d$) pada kondisi tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6\\text{ cm}$",
      "$7{,}2\\text{ cm}$",
      "$10\\text{ cm}$",
      "$11\\text{ cm}$",
      "$15\\text{ cm}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Pada mikroskop untuk mata yang tidak berakomodasi, bayangan dari lensa objektif harus jatuh tepat di titik fokus lensa okuler ($s_{\\text{ok}} = f_{\\text{ok}}$). Panjang tubus mikroskop dirumuskan:<br>$$d = s_{\\text{ob}}' + f_{\\text{ok}}$$kanan",
      "steps": "1. Substitusikan nilai $s_{\\text{ob}}' = 6\\text{ cm}$ dan $f_{\\text{ok}} = 5\\text{ cm}$:<br>$$d = 6 + 5 = 11\\text{ cm}$$<br>2. Jarak antara kedua lensa adalah $11\\text{ cm}$.<br>3. Jawaban yang benar adalah pilihan D.",
      "pitfalls": "Jangan menggunakan rumus teropong $d = f_{\\text{ob}} + f_{\\text{ok}}$ karena pada mikroskop objek diletakkan dekat dengan lensa objektif sehingga jarak bayangan objektif $s_{\\text{ob}}'$ tidak sama dengan $f_{\\text{ob}}$."
    },
    "subTopicSlug": "lup-mikroskop-teropong",
    "bab": "Gelombang dan Optik",
    "subBab": "Lup, Mikroskop, dan Teropong",
    "subTopic": "Lup, Mikroskop, dan Teropong",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-alat-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-alat",
    "category": "Alat Optik (Lup, Mikroskop, Teropong)",
    "difficulty": "sedang",
    "statement": "Sebuah mikroskop memiliki jarak fokus lensa objektif $0{,}9\\text{ cm}$ dan lensa okuler $5\\text{ cm}$. Sebuah objek mikro diletakkan pada jarak $1\\text{ cm}$ di depan lensa objektif. Jika mikroskop digunakan dengan mata berakomodasi maksimum pada jarak baca normal $25\\text{ cm}$, perbesaran total mikroskop tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$36\\text{ kali}$",
      "$45\\text{ kali}$",
      "$50\\text{ kali}$",
      "$54\\text{ kali}$",
      "$60\\text{ kali}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Perbesaran total mikroskop untuk mata berakomodasi maksimum dihitung dengan mengalikan perbesaran objektif dan perbesaran okuler berakomodasi maksimum ($M_{\\text{ok}} = \\frac{s_n}{f_{\\text{ok}}} + 1$):<br>$$M_{\\text{tot}} = \\left|\\frac{s_{\\text{ob}}'}{s_{\\text{ob}}}\\right| \\times \\left(\\frac{s_n}{f_{\\text{ok}}} + 1\\right)$$",
      "steps": "1. Cari jarak bayangan lensa objektif ($s_{\\text{ob}}'$):<br>$$\\frac{1}{s_{\\text{ob}}'} = \\frac{1}{f_{\\text{ob}}} - \\frac{1}{s_{\\text{ob}}} = \\frac{1}{0{,}9} - \\frac{1}{1} = \\frac{10}{9} - 1 = \\frac{1}{9} \\implies s_{\\text{ob}}' = 9\\text{ cm}$$<br>2. Perbesaran objektif:<br>$$M_{\\text{ob}} = \\frac{9}{1} = 9\\text{ kali}$$<br>3. Perbesaran okuler berakomodasi maksimum ($s_n = 25\\text{ cm}$):<br>$$M_{\\text{ok}} = \\frac{25}{5} + 1 = 5 + 1 = 6\\text{ kali}$$<br>4. Perbesaran total:<br>$$M_{\\text{tot}} = 9 \\times 6 = 54\\text{ kali}$$<br>5. Jawaban yang benar adalah pilihan D.",
      "pitfalls": "Jika lupa menambahkan angka 1 pada perbesaran okuler, maka diperoleh $M_{\\text{ok}} = 5 \\implies M_{\\text{tot}} = 9 \\times 5 = 45\\text{ kali}$ (opsi B). Perhatikan kondisi mata berakomodasi maksimum."
    },
    "subTopicSlug": "lup-mikroskop-teropong",
    "bab": "Gelombang dan Optik",
    "subBab": "Lup, Mikroskop, dan Teropong",
    "subTopic": "Lup, Mikroskop, dan Teropong",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-alat-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-alat",
    "category": "Alat Optik (Lup, Mikroskop, Teropong)",
    "difficulty": "sedang",
    "statement": "Sebuah teropong bumi (teropong medan) tersusun atas tiga lensa cembung, yaitu lensa objektif dengan jarak fokus $f_{\\text{ob}} = 80\\text{ cm}$, lensa pembalik dengan jarak fokus $f_p = 5\\text{ cm}$, dan lensa okuler dengan jarak fokus $f_{\\text{ok}} = 10\\text{ cm}$. Panjang tabung teropong bumi tersebut saat digunakan untuk mengamati objek oleh mata tanpa berakomodasi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$95\\text{ cm}$",
      "$100\\text{ cm}$",
      "$110\\text{ cm}$",
      "$115\\text{ cm}$",
      "$130\\text{ cm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Teropong bumi dilengkapi dengan lensa pembalik agar bayangan akhir yang dilihat tegak. Panjang tubus teropong bumi saat mata tidak berakomodasi dirumuskan:<br>$$d = f_{\\text{ob}} + 4f_p + f_{\\text{ok}}$$kanan",
      "steps": "1. Identifikasi fokus lensa: $f_{\\text{ob}} = 80\\text{ cm}$, $f_p = 5\\text{ cm}$, dan $f_{\\text{ok}} = 10\\text{ cm}$.<br>2. Lensa pembalik diletakkan sedemikian rupa sehingga bayangan objektif jatuh pada jarak $2f_p$ di depan lensa pembalik dan bayangan tegak dibentuk pada jarak $2f_p$ di belakangnya (total jarak kontribusi $4f_p$).<br>3. Hitung panjang tabung teropong:<br>$$d = 80 + 4(5) + 10 = 80 + 20 + 10 = 110\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Kesalahan umum adalah hanya menjumlahkan $f_{\\text{ob}} + f_p + f_{\\text{ok}} = 95\\text{ cm}$ (opsi A) atau $f_{\\text{ob}} + 2f_p + f_{\\text{ok}} = 100\\text{ cm}$ (opsi B). Lensa pembalik selalu menyumbang panjang tepat $4f_p$ pada tabung."
    },
    "subTopicSlug": "lup-mikroskop-teropong",
    "bab": "Gelombang dan Optik",
    "subBab": "Lup, Mikroskop, dan Teropong",
    "subTopic": "Lup, Mikroskop, dan Teropong",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-alat-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-alat",
    "category": "Alat Optik (Lup, Mikroskop, Teropong)",
    "difficulty": "sedang",
    "statement": "Seorang ahli perhiasan menggunakan lup dengan jarak fokus $6\\text{ cm}$ untuk memeriksa keaslian sebuah batu permata. Jika ia ingin mengamati bayangan permata tersebut dengan berakomodasi pada jarak $30\\text{ cm}$ di depan matanya, jarak batu permata tersebut dari lensa lup harus diatur pada posisi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ cm}$",
      "$5\\text{ cm}$",
      "$6\\text{ cm}$",
      "$7{,}5\\text{ cm}$",
      "$8\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pengamatan dengan lup yang berakomodasi pada jarak tertentu ($x$) mengharuskan bayangan maya terbentuk pada jarak tersebut ($s' = -x$). Jarak benda ($s$) dicari dengan persamaan lensa tipis:<br>$$\\frac{1}{s} = \\frac{1}{f} - \\frac{1}{s'}$$",
      "steps": "1. Substitusikan $f = +6\\text{ cm}$ dan bayangan maya $s' = -30\\text{ cm}$:<br>$$\\frac{1}{s} = \\frac{1}{6} - \\left(-\\frac{1}{30}\\right) = \\frac{1}{6} + \\frac{1}{30}$$<br>2. Samakan penyebut KPK 30:<br>$$\\frac{1}{s} = \\frac{5 + 1}{30} = \\frac{6}{30} = \\frac{1}{5}$$<br>3. Diperoleh jarak benda:<br>$$s = 5\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Jangan lupa tanda minus pada jarak bayangan lup ($s' = -30\\text{ cm}$) karena lup selalu menghasilkan bayangan maya di depan lensa."
    },
    "subTopicSlug": "lup-mikroskop-teropong",
    "bab": "Gelombang dan Optik",
    "subBab": "Lup, Mikroskop, dan Teropong",
    "subTopic": "Lup, Mikroskop, dan Teropong",
    "chapterTitle": "Gelombang dan Optik",
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
