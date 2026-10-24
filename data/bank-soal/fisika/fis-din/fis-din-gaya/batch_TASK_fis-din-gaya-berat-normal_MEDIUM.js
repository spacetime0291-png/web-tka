module.exports = [
  {
    "id": "fis-din-gaya-berat-normal-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Seseorang dengan massa $m = 60\\text{ kg}$ berdiri di atas timbangan badan di dalam sebuah lift. Lift sedang bergerak ke bawah namun kecepatannya berkurang secara konstan (mengalami perlambatan) sebesar $a = 3\\text{ m/s}^2$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya normal (skala timbangan) yang dialami orang tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$420\\text{ N}$",
      "$600\\text{ N}$",
      "$780\\text{ N}$",
      "$800\\text{ N}$",
      "$980\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Hukum II Newton pada kerangka inersial: $\\sum F_y = m a_y$. Ketika lift bergerak ke bawah dan mengalami perlambatan, vektor percepatan lift justru berarah ke atas ($a_y = +a$). Gaya normal yang dikerjakan timbangan merupakan gaya berat semu yang terbaca oleh alat ukur.",
      "steps": "1. Identifikasi arah percepatan: Gerak ke arah bawah dengan laju berkurang (perlambatan) berarti arah vektor percepatan adalah ke atas.\\n2. Terapkan Hukum II Newton pada arah vertikal (sumbu positif ke atas):\\n$$\\sum F_y = N - W = m a$$\\n$$N = W + m a = m(g + a)$$\\n3. Masukkan nilai yang diketahui:\\n$$N = 60(10 + 3) = 60 \\times 13 = 780\\text{ N}$$\\nJadi, gaya normal yang terbaca pada timbangan adalah $780\\text{ N}$.",
      "pitfalls": "Kekeliruan umum adalah mengasumsikan gerak ke bawah selalu menghasilkan bobot semu berkurang ($N = m(g - a) = 420\\text{ N}$). Ingat bahwa tanda percepatan ditentukan oleh perubahan vektor kecepatan, bukan semata-mata arah lintasan lift."
    }
  },
  {
    "id": "fis-din-gaya-berat-normal-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah balok bermassa $m = 4\\text{ kg}$ berada di atas bidang miring licin dengan sudut kemiringan $\\theta = 30^\\circ$ terhadap bidang horizontal. Balok ditekan oleh gaya luar horizontal $F = 20\\text{ N}$ yang mengarah tegak lurus ke dinding vertikal (menekan ke arah bidang miring). Jika $g = 10\\text{ m/s}^2$, besar gaya normal yang dikerjakan bidang miring pada balok adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(20\\sqrt{3} + 10)\\text{ N}$",
      "$(20\\sqrt{3} - 10)\\text{ N}$",
      "$(20 + 10\\sqrt{3})\\text{ N}$",
      "$20\\sqrt{3}\\text{ N}$",
      "$(40 + 10\\sqrt{3})\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gaya normal bekerja tegak lurus permukaan bidang miring. Pada sumbu tegak lurus bidang miring (sumbu-$y'$), berlaku kesetimbangan translasi $\\sum F_\\perp = 0$. Komponen gaya yang tegak lurus bidang miring berasal dari proyeksi gaya berat ($W_\\perp = m g \\cos\\theta$) dan proyeksi gaya luar horizontal ($F_\\perp = F \\sin\\theta$).",
      "steps": "1. Uraikan gaya-gaya pada sumbu tegak lurus bidang miring:\\n- Gaya normal $N$ berarah ke luar permukaan bidang.\\n- Komponen berat: $W_\\perp = m g \\cos 30^\\circ = 4 \\times 10 \\times \\frac{1}{2}\\sqrt{3} = 20\\sqrt{3}\\text{ N}$.\\n- Komponen gaya tekan horizontal $F$: sudut antara vektor horizontal $F$ dan bidang miring adalah $\\theta = 30^\\circ$, sehingga komponen yang tegak lurus ke dalam bidang adalah $F_\\perp = F \\sin 30^\\circ = 20 \\times \\frac{1}{2} = 10\\text{ N}$.\\n2. Terapkan syarat keseimbangan tegak lurus bidang:\\n$$\\sum F_\\perp = 0 \\implies N - W_\\perp - F_\\perp = 0$$\\n$$N = W_\\perp + F_\\perp = 20\\sqrt{3} + 10\\text{ N}$$\\nSehingga besar gaya normal adalah $(20\\sqrt{3} + 10)\\text{ N}$.",
      "pitfalls": "Sering salah menguraikan gaya luar horizontal $F$; siswa kerap menggunakan $F \\cos\\theta$ untuk komponen tegak lurus bidang, padahal proyeksi gaya horizontal pada sumbu tegak lurus bidang miring adalah $F \\sin\\theta$."
    }
  },
  {
    "id": "fis-din-gaya-berat-normal-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah buku bermassa $m = 2\\text{ kg}$ ditekan secara horizontal ke dinding vertikal dengan gaya tekan $F = 50\\text{ N}$ sehingga buku tetap diam di dinding. Jika $g = 10\\text{ m/s}^2$, pernyataan berikut yang paling tepat mengenai gaya normal yang bekerja pada buku adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Besar gaya normal adalah $20\\text{ N}$ dan berarah vertikal ke atas mengimbangi berat buku.",
      "Besar gaya normal adalah $50\\text{ N}$ dan berarah horizontal menjauhi dinding tegak lurus permukaan.",
      "Besar gaya normal adalah $70\\text{ N}$ karena merupakan penjumlahan gaya tekan dan gaya berat.",
      "Besar gaya normal bernilai nol karena gaya normal hanya muncul pada bidang horizontal atau miring.",
      "Besar gaya normal adalah $30\\text{ N}$ yang berasal dari selisih gaya dorong dan gaya berat."
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gaya normal adalah gaya kontak yang arahnya selalu tegak lurus terhadap bidang sentuh. Pada dinding vertikal, bidang sentuh berada pada posisi vertikal sehingga gaya normal berarah horizontal tegak lurus dinding. Pada sumbu horizontal buku diam, sehingga $\\sum F_x = 0 \\implies N = F$.",
      "steps": "1. Analisis sumbu horizontal ($x$):\\nDinding vertikal menahan dorongan buku dengan gaya reaksi kontak tegak lurus bidang vertikal (horizontal).\\n$$\\sum F_x = 0 \\implies F - N = 0 \\implies N = F = 50\\text{ N}$$\\n2. Analisis sumbu vertikal ($y$):\\nGaya berat $W = m g = 2 \\times 10 = 20\\text{ N}$ berarah ke bawah, diimbangi oleh gaya gesek statis dinding ke atas ($f_s = 20\\text{ N}$).\\n3. Kesimpulan: Gaya normal besarnya $50\\text{ N}$ dan berarah horizontal tegak lurus permukaan dinding.",
      "pitfalls": "Salah satu miskonsepsi paling umum adalah menganggap gaya normal selalu sama dengan gaya berat $m g$. Gaya normal bergantung pada interaksi kontak tegak lurus permukaan."
    }
  },
  {
    "id": "fis-din-gaya-berat-normal-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Dua balok $A$ ($m_A = 3\\text{ kg}$) dan $B$ ($m_B = 2\\text{ kg}$) disusun bertumpuk di lantai horizontal, dengan balok $B$ diletakkan tepat di atas balok $A$. Sebuah gaya vertikal ke atas $F = 15\\text{ N}$ ditarikkan pada balok $B$ tetapi belum cukup untuk mengangkat balok $B$ terlepas dari balok $A$. Jika $g = 10\\text{ m/s}^2$, perbandingan besar gaya kontak antara balok $A$ dan $B$ ($N_{AB}$) terhadap gaya normal lantai pada balok $A$ ($N_{\\text{lantai}}$) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 7$",
      "$1 : 5$",
      "$2 : 5$",
      "$3 : 7$",
      "$2 : 7$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Diagram benda bebas (Free Body Diagram) dipisahkan untuk balok $B$ dan sistem gabungan balok $(A+B)$. Gaya normal timbul pada setiap antarmuka kontak berdasarkan kondisi kesetimbangan vertikal $\\sum F_y = 0$.",
      "steps": "1. Tinjau balok $B$ (di atas):\\nGaya ke atas: $F = 15\\text{ N}$ dan gaya kontak dari balok $A$ ($N_{AB}$).\\nGaya ke bawah: gaya berat $W_B = m_B g = 2 \\times 10 = 20\\text{ N}$.\\n$$\\sum F_{y,B} = 0 \\implies N_{AB} + F - W_B = 0$$\\n$$N_{AB} = 20 - 15 = 5\\text{ N}$$\\n2. Tinjau sistem keseluruhan $(A + B)$ di atas lantai:\\nGaya ke atas: gaya normal lantai $N_{\\text{lantai}}$ dan gaya tarik $F = 15\\text{ N}$.\\nGaya ke bawah: total gaya berat $(m_A + m_B)g = (3 + 2) \\times 10 = 50\\text{ N}$.\\n$$\\sum F_{y,\\text{total}} = 0 \\implies N_{\\text{lantai}} + F - (W_A + W_B) = 0$$\\n$$N_{\\text{lantai}} = 50 - 15 = 35\\text{ N}$$\\n3. Hitung perbandingannya:\\n$$\\frac{N_{AB}}{N_{\\text{lantai}}} = \\frac{5}{35} = \\frac{1}{7}$$\\nJadi, perbandingannya adalah $1 : 7$.",
      "pitfalls": "Kekeliruan terjadi jika lupa bahwa gaya tarik $F$ bekerja pada balok $B$ sehingga mengurangi gaya tekan kontak antara $B$ dan $A$, sekaligus mengurangi total gaya tekan sistem ke lantai."
    }
  },
  {
    "id": "fis-din-gaya-berat-normal-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah mobil bermassa $M = 1.000\\text{ kg}$ melintasi puncak jembatan cembung yang memiliki jari-jari kelengkungan $R = 40\\text{ m}$. Jika mobil melaju dengan kelajuan tetap $v = 10\\text{ m/s}$ dan percepatan gravitasi $g = 10\\text{ m/s}^2$, besar gaya normal yang dikerjakan permukaan jalan pada ban mobil tepat di puncak jembatan adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2.500\\text{ N}$",
      "$5.000\\text{ N}$",
      "$7.500\\text{ N}$",
      "$10.000\\text{ N}$",
      "$12.500\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada puncak lintasan cembung melingkar vertikal, resultan gaya berarah menuju pusat kelengkungan (ke arah bawah) sebagai gaya sentripetal: $\\sum F_r = m \\frac{v^2}{R}$. Gaya yang bekerja adalah gaya berat ke bawah ($W$) dan gaya normal ke atas ($N$).",
      "steps": "1. Rumuskan persamaan dinamika gerak melingkar di puncak bukit:\\n$$\\sum F_r = W - N = M \\frac{v^2}{R}$$\\n2. Nyatakan gaya normal $N$:\\n$$N = W - M \\frac{v^2}{R} = M\\left(g - \\frac{v^2}{R}\\right)$$\\n3. Substitusi nilai-nilai ke dalam rumus:\\n$$N = 1000\\left(10 - \\frac{10^2}{40}\\right) = 1000\\left(10 - \\frac{100}{40}\\right) = 1000(10 - 2,5)$$\\n$$N = 1000 \\times 7,5 = 7.500\\text{ N}$$\\nJadi, gaya normal pada puncak jembatan cembung adalah $7.500\\text{ N}$.",
      "pitfalls": "Kerap tertukar tanda antara puncak cembung ($N = m(g - v^2/R)$) dan lembah cekung ($N = m(g + v^2/R)$). Di puncak cembung, mobil terasa lebih ringan sehingga gaya normal berkurang."
    }
  }
];
