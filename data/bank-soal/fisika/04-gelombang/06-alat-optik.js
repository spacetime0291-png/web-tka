/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang
 * Sub-topik: Alat Optik (Cermin & Lensa) (fis-gel-6)
 * Indikator: Bayangan cermin datar, cekung, cembung; lensa konvergen & divergen; kuat lensa (dioptri); alat optik kacamata, lup, mikroskop, teropong.
 * 
 * Total Butir Soal: 12 Soal (Mudah: 8, Sedang: 4, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-6";
  const questions = [
  {
    "id": "mudah-fis-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-6",
    "category": "Cermin Cekung",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah benda diletakkan pada jarak $15\\text{ cm}$ di depan cermin cekung yang memiliki jarak fokus $10\\text{ cm}$. Jarak bayangan yang terbentuk dari cermin adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$15\\text{ cm}$",
      "$25\\text{ cm}$",
      "$30\\text{ cm}$",
      "$45\\text{ cm}$",
      "$60\\text{ cm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Persamaan Cermin Cekung (Fokus Positif):</strong><br>\n          $$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$\\frac{1}{s'} = \\frac{1}{10} - \\frac{1}{15} = \\frac{3 - 2}{30} = \\frac{1}{30}$$</li>\n          <li>$$s' = 30\\text{ cm}$$ (bayangan nyata di depan cermin).</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Ingat cermin cekung memiliki fokus positif ($+10\\text{ cm}$), sedangkan cermin cembung memiliki fokus negatif.\n        </div>\n      "
    },
    "bab": "Gelombang",
    "subBab": "Alat Optik (Cermin & Lensa)",
    "subTopic": "Alat Optik (Cermin & Lensa)",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-cah-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-6",
    "category": "Cermin Cembung Pembentukan Bayangan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah spion mobil berupa cermin cembung memiliki jarak fokus $|f| = 20\\text{ cm}$. Jika sebuah sepeda motor berada pada jarak $s = 20\\text{ cm}$ di depan cermin tersebut, maka letak bayangan sepeda motor ($s'$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-10\\text{ cm}$ (maya di belakang cermin)",
      "$+10\\text{ cm}$ (nyata di depan cermin)",
      "$-20\\text{ cm}$ (maya di belakang cermin)",
      "$-40\\text{ cm}$ (maya di belakang cermin)",
      "$+20\\text{ cm}$ (nyata di depan cermin)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Aturan Tanda Cermin Cembung:</strong><br>• Jarak fokus cermin cembung <strong>selalu bernilai negatif</strong> ($f = -20\\text{ cm}$).<br>• Persamaan cermin: $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$.<br>• Bayangan cermin cembung selalu maya ($s' < 0$), tegak, dan diperkecil.</div>",
      "steps": "<ol><li>$f = -20\\text{ cm}$, $s = +20\\text{ cm}$.</li><li>$\\frac{1}{s'} = -\\frac{1}{20} - \\frac{1}{20} = -\\frac{2}{20} = -\\frac{1}{10}$.</li><li>$s' = -10\\text{ cm}$ (tanda minus menandakan bayangan maya di belakang cermin).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Wajib Diingat:</strong> Selalu beri tanda minus pada fokus cermin cembung dan lensa cekung ($f < 0$).</div>"
    },
    "bab": "Gelombang",
    "subBab": "Alat Optik (Cermin & Lensa)",
    "subTopic": "Alat Optik (Cermin & Lensa)",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-cah-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-6",
    "category": "Kuat Lensa (Daya Dioptri)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah lensa cembung memiliki jarak fokus $f = +25\\text{ cm}$. Kuat lensa (daya lensa) tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+4\\text{ Dioptri}$",
      "$+2{,}5\\text{ Dioptri}$",
      "$+0{,}04\\text{ Dioptri}$",
      "$-4\\text{ Dioptri}$",
      "$+10\\text{ Dioptri}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Rumus Kuat Lensa (Dioptri):</strong><br>$$P = \\frac{1}{f\\text{ (meter)}} = \\frac{100}{f\\text{ (cm)}}$$</div>",
      "steps": "<ol><li>Jarak fokus dalam cm: $f = 25\\text{ cm}$.</li><li>Hitung kuat lensa: $P = \\frac{100}{25} = +4\\text{ Dioptri}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Jika fokus dalam cm, langsung bagi dengan 100 ($P = 100/f$). Jika fokus dalam meter, $P = 1/f$.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Alat Optik (Cermin & Lensa)",
    "subTopic": "Alat Optik (Cermin & Lensa)",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-cah-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-6",
    "category": "Perbesaran Lup Mata Tanpa Akomodasi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang tukang arloji memeriksa komponen jam tangan kecil menggunakan sebuah lup yang berjarak fokus $f = 5\\text{ cm}$. Jika titik dekat normal mata tukang arloji adalah $s_n = 25\\text{ cm}$ dan ia mengamati dengan mata rileks tanpa akomodasi, maka perbesaran anguler lup tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ kali}$",
      "$6\\text{ kali}$",
      "$4\\text{ kali}$",
      "$2{,}5\\text{ kali}$",
      "$10\\text{ kali}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Perbesaran Sudut Lup (Kaca Pembesar):</strong><br>• Mata <strong>tanpa akomodasi</strong> (rileks): $M = \\frac{s_n}{f}$<br>• Mata <strong>berakomodasi maksimum</strong>: $M = \\frac{s_n}{f} + 1$</div>",
      "steps": "<ol><li>Kondisi mata: tanpa akomodasi.</li><li>Gunakan rumus tanpa akomodasi: $M = \\frac{s_n}{f} = \\frac{25\\text{ cm}}{5\\text{ cm}} = 5\\text{ kali}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menambahkan $+1$ saat mata rileks. Penambahan $+1$ hanya dilakukan jika ada keterangan \"akomodasi maksimum\".</div>"
    },
    "bab": "Gelombang",
    "subBab": "Alat Optik (Cermin & Lensa)",
    "subTopic": "Alat Optik (Cermin & Lensa)",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-cah-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-6",
    "category": "Jumlah Bayangan Dua Cermin Datar Bersudut",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah cermin datar disusun saling berhadapan membentuk sudut $\\alpha = 60^\\circ$. Sebuah lilin diletakkan di antara kedua cermin tersebut. Jumlah bayangan lilin yang terbentuk adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ bayangan}$",
      "$6\\text{ bayangan}$",
      "$4\\text{ bayangan}$",
      "$7\\text{ bayangan}$",
      "$3\\text{ bayangan}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Rumus Jumlah Bayangan Cermin Datar:</strong><br>$$n = \\frac{360^\\circ}{\\alpha} - 1$$</div>",
      "steps": "<ol><li>Sudut apit: $\\alpha = 60^\\circ$.</li><li>Bagi lingkaran penuh: $\\frac{360^\\circ}{60^\\circ} = 6$.</li><li>Kurangkan satu untuk benda asli: $n = 6 - 1 = 5\\text{ bayangan}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jangan Lupa $-1$:</strong> Nilai $360^\\circ / \\alpha$ harus selalu dikurangi 1 karena salah satu posisi ditempati oleh benda asli.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Alat Optik (Cermin & Lensa)",
    "subTopic": "Alat Optik (Cermin & Lensa)",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-cah-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-6",
    "category": "Pembentukan Bayangan Cermin Cekung",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah cermin cekung memiliki jari-jari kelengkungan $R = 40\\text{ cm}$. Sebuah benda diletakkan pada jarak $s = 30\\text{ cm}$ di depan cermin cekung tersebut. Jarak bayangan ($s'$) dan perbesaran bayangan ($M$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$s' = +60\\text{ cm}$ (nyata) dan $M = 2\\text{ kali}$",
      "$s' = -60\\text{ cm}$ (maya) dan $M = 2\\text{ kali}$",
      "$s' = +20\\text{ cm}$ (nyata) dan $M = 0{,}67\\text{ kali}$",
      "$s' = +12\\text{ cm}$ (nyata) dan $M = 0{,}4\\text{ kali}$",
      "$s' = +30\\text{ cm}$ (nyata) dan $M = 1\\text{ kali}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Fokus dan Jari-Jari Cermin Cekung:</strong><br>• $f = \\frac{1}{2}R$ (cermin cekung bertanda positif $f > 0$)<br>• $s' = \\frac{s \\cdot f}{s - f}$<br>• Perbesaran: $M = \\left| \\frac{s'}{s} \\right|$</div>",
      "steps": "<ol><li>Jarak fokus: $f = \\frac{1}{2} \\times 40 = +20\\text{ cm}$.</li><li>Jarak bayangan: $s' = \\frac{30 \\times 20}{30 - 20} = \\frac{600}{10} = +60\\text{ cm}$ (nyata di depan cermin).</li><li>Perbesaran: $M = \\frac{60}{30} = 2\\text{ kali}$ diperbesar.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal Jari-Jari:</strong> Jari-jari $R$ selalu dua kali jarak fokus ($R = 2f$). Jangan gunakan nilai $R$ langsung sebagai $f$.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Alat Optik (Cermin & Lensa)",
    "subTopic": "Alat Optik (Cermin & Lensa)",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-cah-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-6",
    "category": "Lensa Cekung (Divergen)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah benda diletakkan pada jarak $s = 30\\text{ cm}$ di depan sebuah lensa cekung yang memiliki jarak fokus $|f| = 15\\text{ cm}$. Jarak bayangan yang terbentuk ($s'$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-10\\text{ cm}$ (maya dan tegak)",
      "$+10\\text{ cm}$ (nyata dan terbalik)",
      "$-30\\text{ cm}$ (maya dan tegak)",
      "$+30\\text{ cm}$ (nyata dan terbalik)",
      "$-5\\text{ cm}$ (maya dan tegak)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Sifat Mutlak Lensa Cekung:</strong><br>Lensa cekung bersifat menyebarkan cahaya (divergen) dengan fokus <strong>negatif</strong> ($f = -15\\text{ cm}$). Bayangannya selalu bersifat <strong>maya, tegak, dan diperkecil</strong> ($s' < 0$).</div>",
      "steps": "<ol><li>$f = -15\\text{ cm}$, $s = +30\\text{ cm}$.</li><li>$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s} = -\\frac{1}{15} - \\frac{1}{30} = -\\frac{2}{30} - \\frac{1}{30} = -\\frac{3}{30} = -\\frac{1}{10}$.</li><li>$s' = -10\\text{ cm}$ (maya di depan lensa).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Karakteristik Tetap Lensa Cekung:</strong> Lensa cekung tidak pernah bisa menghasilkan bayangan nyata pada posisi benda real apa pun. Nilai $s'$ selalu negatif.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Alat Optik (Cermin & Lensa)",
    "subTopic": "Alat Optik (Cermin & Lensa)",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-cah-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-6",
    "category": "Kuat Lensa Gabungan Bersentuhan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah lensa tipis ditempelkan berimpit (bersentuhan sumbu utama). Lensa pertama adalah lensa cembung dengan kuat lensa $P_1 = +5\\text{ Dioptri}$, dan lensa kedua adalah lensa cekung dengan kuat lensa $P_2 = -2\\text{ Dioptri}$. Kuat lensa total sistem gabungan tersebut ($P_{\\text{gab}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+3\\text{ Dioptri}$",
      "$+7\\text{ Dioptri}$",
      "$-10\\text{ Dioptri}$",
      "$+2{,}5\\text{ Dioptri}$",
      "$+1{,}5\\text{ Dioptri}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kuat Lensa Sistem Gabungan Berimpit:</strong><br>Kuat lensa gabungan merupakan penjumlahan aljabar langsung dari kuat masing-masing lensa:<br>$$P_{\\text{gab}} = P_1 + P_2$$</div>",
      "steps": "<ol><li>$P_1 = +5\\text{ D}$ (cembung).</li><li>$P_2 = -2\\text{ D}$ (cekung).</li><li>$P_{\\text{gab}} = (+5) + (-2) = +3\\text{ Dioptri}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Sifat Akhir Gabungan:</strong> Karena $P_{\\text{gab}} > 0$ ($+3\\text{ D}$), sistem gabungan kedua lensa tersebut berperilaku seperti sebuah lensa cembung dengan jarak fokus $f = 100/3 \\approx 33{,}3\\text{ cm}$.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Alat Optik (Cermin & Lensa)",
    "subTopic": "Alat Optik (Cermin & Lensa)",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "sup-fis-gel-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-6",
    "category": "Pembentukan Bayangan Lensa Cembung",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah benda diletakkan pada jarak $12\\text{ cm}$ di depan sebuah lensa cembung yang memiliki panjang fokus $8\\text{ cm}$. Jarak bayangan dan sifat bayangan yang terbentuk berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$24\\text{ cm}$, nyata dan terbalik",
      "$24\\text{ cm}$, maya dan tegak",
      "$16\\text{ cm}$, nyata dan terbalik",
      "$18\\text{ cm}$, nyata dan tegak",
      "$4{,}8\\text{ cm}$, maya dan tegak"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Persamaan Lensa Tipis Gauss:</strong><br>$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}$. Tanda $s' > 0$ menandakan bayangan nyata di belakang lensa (selalu terbalik).</div>",
      "steps": "<ol><li>$f = +8\\text{ cm}$, $s = +12\\text{ cm}$.</li><li>$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s} = \\frac{1}{8} - \\frac{1}{12} = \\frac{3 - 2}{24} = \\frac{1}{24}$.</li><li>$s' = +24\\text{ cm}$. Karena bertanda positif, bayangannya bersifat <strong>nyata dan terbalik</strong>.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menganggap bayangan pada cermin dan lensa memiliki aturan tanda sama untuk letak maya/nyata.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Alat Optik (Cermin & Lensa)",
    "subTopic": "Alat Optik (Cermin & Lensa)",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-cah-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-6",
    "category": "Kacamata Penderita Rabun Jauh (Miopi)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seorang siswa penderita rabun jauh (miopi) tidak dapat melihat benda dengan jelas yang berada lebih jauh dari $PR = 200\\text{ cm}$ (titik jauhnya $2\\text{ meter}$). Agar siswa tersebut dapat melihat benda-benda yang sangat jauh ($s = \\infty$) secara normal, ia harus memakai kacamata dengan kuat lensa ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-0{,}5\\text{ Dioptri}$",
      "$-2{,}0\\text{ Dioptri}$",
      "$+0{,}5\\text{ Dioptri}$",
      "$-1{,}0\\text{ Dioptri}$",
      "$-5{,}0\\text{ Dioptri}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kacamata Rabun Jauh (Miopi):</strong><br>Lensa cekung negatif digunakan untuk membentuk bayangan maya benda jauh tak hingga ($s = \\infty$) tepat pada titik jauhnya ($s' = -PR$):<br>$$P = -\\frac{100}{PR\\text{ (cm)}} = -\\frac{1}{PR\\text{ (meter)}}$$</div>",
      "steps": "<ol><li>Titik jauh: $PR = 200\\text{ cm} = 2\\text{ m}$.</li><li>Hitung kuat lensa kacamata: $P = -\\frac{100}{200} = -0{,}5\\text{ Dioptri}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Miopi selalu butuh lensa minus (cekung). Ingat rumus kilat: $P = -100/PR$.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Alat Optik (Cermin & Lensa)",
    "subTopic": "Alat Optik (Cermin & Lensa)",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-cah-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-6",
    "category": "Kacamata Penderita Rabun Dekat (Hipermetropi)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seorang penderita rabun dekat (hipermetropi) memiliki titik dekat mata $PP = 50\\text{ cm}$. Agar ia dapat membaca buku dengan nyaman pada jarak baca normal $s_n = 25\\text{ cm}$, maka kuat lensa kacamata yang harus digunakannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+2\\text{ Dioptri}$",
      "$+1\\text{ Dioptri}$",
      "$-2\\text{ Dioptri}$",
      "$+4\\text{ Dioptri}$",
      "$+0{,}5\\text{ Dioptri}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Rumus Kacamata Hipermetropi (Lensa Cembung):</strong><br>$$P = \\frac{100}{s_n\\text{ (cm)}} - \\frac{100}{PP\\text{ (cm)}} = 4 - \\frac{100}{PP\\text{ (cm)}}$$<br>(dengan jarak baca normal standar $s_n = 25\\text{ cm}$).</div>",
      "steps": "<ol><li>Jarak baca yang diinginkan: $s = 25\\text{ cm} \\implies \\frac{100}{25} = 4\\text{ D}$.</li><li>Titik dekat penderita: $PP = 50\\text{ cm} \\implies \\frac{100}{50} = 2\\text{ D}$.</li><li>Kuat lensa: $P = 4 - 2 = +2\\text{ Dioptri}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal Hipermetropi:</strong> Kacamata baca selalu berlensa plus (+). Rumus cepatnya: $P = 4 - \\frac{100}{PP}$.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Alat Optik (Cermin & Lensa)",
    "subTopic": "Alat Optik (Cermin & Lensa)",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-cah-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-6",
    "category": "Teropong Bintang Mata Tanpa Akomodasi",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah teropong bintang memiliki lensa objektif dengan jarak fokus $f_{\\text{ob}} = 100\\text{ cm}$ dan lensa okuler dengan jarak fokus $f_{\\text{ok}} = 5\\text{ cm}$. Jika pengamatan bintang dilakukan dengan mata tanpa akomodasi, maka perbesaran total ($M$) dan panjang tabung teropong ($d$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$M = 20\\text{ kali}$ dan $d = 105\\text{ cm}$",
      "$M = 20\\text{ kali}$ dan $d = 95\\text{ cm}$",
      "$M = 5\\text{ kali}$ dan $d = 105\\text{ cm}$",
      "$M = 500\\text{ kali}$ dan $d = 105\\text{ cm}$",
      "$M = 25\\text{ kali}$ dan $d = 120\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Rumus Baku Teropong Bintang (Mata Rileks):</strong><br>• Perbesaran bayangan: $M = \\frac{f_{\\text{ob}}}{f_{\\text{ok}}}$<br>• Panjang teropong: $d = f_{\\text{ob}} + f_{\\text{ok}}$</div>",
      "steps": "<ol><li>Perbesaran: $M = \\frac{100\\text{ cm}}{5\\text{ cm}} = 20\\text{ kali}$.</li><li>Panjang tabung: $d = 100 + 5 = 105\\text{ cm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Konstruksi Teropong:</strong> Pada teropong bintang, fokus lensa objektif selalu jauh lebih panjang daripada fokus lensa okuler ($f_{\\text{ob}} > f_{\\text{ok}}$).</div>"
    },
    "bab": "Gelombang",
    "subBab": "Alat Optik (Cermin & Lensa)",
    "subTopic": "Alat Optik (Cermin & Lensa)",
    "chapterTitle": "Gelombang"
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
