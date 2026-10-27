/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Gaya dan Gerak (fis-din-gaya)
 * Sub-Bab: Hukum III Newton (fis-din-gaya-newton3)
 * Slug: hukum-3-newton
 * Indikator: Pasangan gaya aksi-reaksi: besar sama, berlawanan arah, bekerja pada dua benda berbeda.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-gaya-newton3";
  const subTopicSlug = "hukum-3-newton";
  const questions = [
  {
    "id": "fis-din-gaya-newton3-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton3",
    "category": "Hukum III Newton",
    "difficulty": "mudah",
    "statement": "Berdasarkan Hukum III Newton, karakteristik yang mutlak dipenuhi oleh sepasang gaya aksi-reaksi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Memiliki besar yang sama, berlawanan arah, dan bekerja pada dua benda yang berbeda",
      "Memiliki besar yang sama, searah, dan bekerja pada benda yang sama",
      "Memiliki besar yang berbeda dan bekerja pada satu benda yang sama",
      "Bekerja pada benda yang sama sehingga resultan gaya totalnya selalu nol",
      "Gaya reaksi muncul setelah jeda waktu tertentu setelah gaya aksi bekerja"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hukum III Newton (Aksi-Reaksi): $\\vec{F}_{\\text{aksi}} = -\\vec{F}_{\\text{reaksi}}$. Ciri utama pasangan aksi-reaksi:<br>1. Besarnya sama persis ($|F_{\\text{aksi}}| = |F_{\\text{reaksi}}|$)<br>2. Arahnya berlawanan<br>3. Bekerja secara simultan tanpa jeda waktu<br>4. Bekerja pada DUA benda yang berbeda (benda $A$ pada benda $B$, dan benda $B$ pada benda $A$).",
      "steps": "Evaluasi pilihan:<br>• Opsi A: Tepat, memenuhi seluruh syarat aksi-reaksi.<br>• Opsi B: Salah, arahnya harus berlawanan.<br>• Opsi C & D: Salah, bekerja pada dua benda berbeda sehingga tidak saling meniadakan.<br>• Opsi E: Salah, terjadi seketika/simultan.",
      "pitfalls": "Mengira aksi-reaksi bekerja pada benda yang sama sehingga saling membatalkan."
    },
    "subTopicSlug": "hukum-3-newton",
    "bab": "Dinamika",
    "subBab": "Hukum III Newton",
    "subTopic": "Hukum III Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan perumusan konsep fisis: $\\vec{F}_{\\text{aksi}} = -\\vec{F}_{\\text{reaksi}}$. Ciri utama pasangan aksi-reaksi: 1. Besarnya sama persis ($|F_{\\text{aksi}}| = |F_{\\text{reaksi}}|$) 2. Arahnya berlawanan 3. Bekerja secara simultan tanpa jeda waktu 4. Bekerja pada DUA benda yang berbeda (benda $A$ pada benda $B$, dan benda $B$ pada benda $A$). **Tips:** Mengira aksi-reaksi bekerja pada benda yang sama sehingga saling membatalkan."
  },
  {
    "id": "fis-din-gaya-newton3-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton3",
    "category": "Hukum III Newton",
    "difficulty": "mudah",
    "statement": "Sebuah buku diletakkan diam di atas meja datar. Bumi menarik buku tersebut dengan gaya gravitasi (gaya berat $w$) ke bawah. Pasangan gaya reaksi yang tepat terhadap gaya berat buku tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Gaya gravitasi tarik dari buku terhadap pusat bumi yang berarah ke atas",
      "Gaya normal dari permukaan meja yang menopang buku ke atas",
      "Gaya tekan buku pada permukaan meja ke arah bawah",
      "Gaya gesekan antara buku dan meja",
      "Gaya berat meja yang menekan lantai ke bawah"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pasangan aksi-reaksi harus melibatkan dua objek yang sama secara timbal balik dan sejenis gaya. Gaya berat ($w$) adalah gaya gravitasi bumi pada buku ($F_{\\text{Bumi}\\to\\text{buku}}$). Pasangan reaksinya adalah gaya gravitasi buku pada bumi ($F_{\\text{buku}\\to\\text{Bumi}}$).",
      "steps": "1. Identifikasi pelaku dan penerima gaya aksi: Bumi menarik Buku ($F_{B\\to K}$ ke bawah).<br>2. Pasangan reaksinya adalah kebalikannya: Buku menarik Bumi ($F_{K\\to B}$ ke atas).<br>3. Gaya normal meja ($N$) adalah gaya kontak antara meja dan buku, bukan reaksi dari gaya gravitasi bumi.",
      "pitfalls": "Miskonsepsi paling terkenal di fisika SMA: menganggap gaya normal ($N$) adalah reaksi dari gaya berat ($w$). Padahal $N$ dan $w$ bekerja pada benda yang sama (buku) dan jenis interaksinya berbeda (kontak elektromagnetik vs gravitasi)."
    },
    "subTopicSlug": "hukum-3-newton",
    "bab": "Dinamika",
    "subBab": "Hukum III Newton",
    "subTopic": "Hukum III Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Pasangan aksi-reaksi harus melibatkan dua objek yang sama secara timbal balik dan sejenis gaya. Gaya berat ($w$) adalah gaya gravitasi bumi pada buku ($F_{\\text{Bumi}\\to\\text{buku}}$). Pasangan reaksinya adalah gaya gravitasi buku pada bumi ($F_{\\text{buku}\\to\\text{Bumi}}$). **Tips:** Miskonsepsi paling terkenal di fisika SMA: menganggap gaya normal ($N$) adalah reaksi dari gaya berat ($w$)."
  },
  {
    "id": "fis-din-gaya-newton3-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton3",
    "category": "Hukum III Newton",
    "difficulty": "mudah",
    "statement": "Alasan utama mengapa sepasang gaya aksi dan reaksi tidak pernah saling meniadakan (tidak menghasilkan resultan nol) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Kedua gaya bekerja pada dua objek benda yang berbeda",
      "Besar gaya aksi selalu lebih besar daripada gaya reaksi",
      "Kedua gaya memiliki garis kerja yang tidak pernah sejajar",
      "Gaya aksi bekerja lebih dulu sebelum gaya reaksi muncul",
      "Gaya reaksi diredam oleh gaya gesekan lingkungan"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Resultan gaya hanya dapat dihitung jika dua atau lebih gaya bekerja pada SATU benda yang sama. Karena gaya aksi bekerja pada benda $B$ dan gaya reaksi bekerja pada benda $A$, keduanya mempengaruhi percepatan dua benda yang berbeda secara terpisah.",
      "steps": "1. Benda $A$ memberi gaya aksi pada benda $B$ $\\implies$ mempengaruhi gerak benda $B$.<br>2. Benda $B$ memberi gaya reaksi pada benda $A$ $\\implies$ mempengaruhi gerak benda $A$.<br>3. Karena titik tangkapnya berada pada benda yang berlainan, kedua gaya tidak pernah saling menghilangkan dalam diagram benda bebas masing-masing.",
      "pitfalls": "Menyimpulkan benda tidak akan pernah bisa bergerak jika ada gaya aksi-reaksi."
    },
    "subTopicSlug": "hukum-3-newton",
    "bab": "Dinamika",
    "subBab": "Hukum III Newton",
    "subTopic": "Hukum III Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Resultan gaya hanya dapat dihitung jika dua atau lebih gaya bekerja pada SATU benda yang sama. Karena gaya aksi bekerja pada benda $B$ dan gaya reaksi bekerja pada benda $A$, keduanya mempengaruhi percepatan dua benda yang berbeda secara terpisah. **Tips:** Menyimpulkan benda tidak akan pernah bisa bergerak jika ada gaya aksi-reaksi."
  },
  {
    "id": "fis-din-gaya-newton3-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton3",
    "category": "Hukum III Newton",
    "difficulty": "mudah",
    "statement": "Seorang anak berdiri di atas papan seluncur (skateboard) yang mula-mula diam di atas lantai licin. Ketika anak melompat ke arah depan (utara), papan seluncur seketika terdorong bergerak ke arah belakang (selatan). Peristiwa ini terjadi karena ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Kaki anak memberikan gaya aksi ke belakang pada papan seluncur, sehingga papan memberikan gaya reaksi ke depan pada anak",
      "Gaya gravitasi menarik skateboard ke belakang",
      "Skateboard kehilangan massa kelembaman saat anak melompat",
      "Lantai memberikan gaya dorong ke belakang pada skateboard",
      "Udara di depan anak mendorong skateboard ke belakang"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Berdasarkan Hukum III Newton, saat anak melompat ke depan, telapak kaki anak mendorong papan seluncur ke arah belakang (gaya aksi). Papan seluncur memberikan gaya reaksi yang sama besar ke arah depan pada tubuh anak sehingga anak terlontar ke depan sementara papan terpental ke belakang.",
      "steps": "1. Gaya kaki pada papan = arah ke belakang (selatan).<br>2. Gaya papan pada kaki = arah ke depan (utara).<br>3. Keduanya merupakan pasangan aksi-reaksi Hukum III Newton.",
      "pitfalls": "Mengira papan terdorong karena tarikan gravitasi atau hembusan udara."
    },
    "subTopicSlug": "hukum-3-newton",
    "bab": "Dinamika",
    "subBab": "Hukum III Newton",
    "subTopic": "Hukum III Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Berdasarkan Hukum III Newton, saat anak melompat ke depan, telapak kaki anak mendorong papan seluncur ke arah belakang (gaya aksi). Papan seluncur memberikan gaya reaksi yang sama besar ke arah depan pada tubuh anak sehingga anak terlontar ke depan sementara papan terpental ke belakang. **Tips:** Mengira papan terdorong karena tarikan gravitasi atau hembusan udara."
  },
  {
    "id": "fis-din-gaya-newton3-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton3",
    "category": "Hukum III Newton",
    "difficulty": "mudah",
    "statement": "Seekor kuda menarik sebuah gerobak beban dengan gaya tarik sebesar $400\\text{ N}$ ke arah timur. Berdasarkan Hukum III Newton, besar dan arah gaya yang dikerjakan oleh gerobak pada kuda adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$400\\text{ N}$ ke arah barat",
      "$400\\text{ N}$ ke arah timur",
      "Kurang dari $400\\text{ N}$ ke arah barat agar gerobak bisa bergerak",
      "Lebih dari $400\\text{ N}$ ke arah barat",
      "$0\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hukum III Newton menetapkan bahwa gaya aksi dan reaksi selalu sama besar di setiap keadaan, baik sistem dalam keadaan diam maupun sedang bergerak dipercepat:<br>$$|F_{\\text{gerobak pada kuda}}| = |F_{\\text{kuda pada gerobak}}| = 400\\text{ N}$$",
      "steps": "1. Gaya kuda pada gerobak: $400\\text{ N}$ ke timur.<br>2. Gaya gerobak pada kuda: $400\\text{ N}$ ke arah sebaliknya (barat).<br>3. Gerobak tetap dapat melaju ke timur karena kuda juga mendorong tanah ke belakang dan tanah memberikan gaya dorong ke depan pada kuku kuda yang lebih besar dari gaya hambat gerobak.",
      "pitfalls": "Paradoks kuda-gerobak: Mengira gaya gerobak harus lebih kecil dari $400\\text{ N}$ agar gerobak bisa bergerak."
    },
    "subTopicSlug": "hukum-3-newton",
    "bab": "Dinamika",
    "subBab": "Hukum III Newton",
    "subTopic": "Hukum III Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan perumusan konsep fisis: $$|F_{\\text{gerobak pada kuda}}| = |F_{\\text{kuda pada gerobak}}| = 400\\text{ N}$$. **Tips:** Paradoks kuda-gerobak: Mengira gaya gerobak harus lebih kecil dari $400\\text{ N}$ agar gerobak bisa bergerak."
  },
  {
    "id": "fis-din-gaya-newton3-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton3",
    "category": "Hukum III Newton",
    "difficulty": "sedang",
    "statement": "Sebuah wahana roket luar angkasa bermassa $M = 1000\\text{ kg}$ menyemburkan gas hasil pembakaran bahan bakar ke arah belakang dengan laju semburan massa konstan $\\frac{\\Delta m}{\\Delta t} = 20\\text{ kg/s}$ pada kelajuan semburan relatif terhadap roket sebesar $v_{\\text{gas}} = 1500\\text{ m/s}$. Berdasarkan prinsip aksi-reaksi Hukum III Newton, besar gaya dorong maju (thrust) yang dialami roket tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ kN}$",
      "$15\\text{ kN}$",
      "$75\\text{ kN}$",
      "$300\\text{ kN}$",
      "$3\\text{ kN}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Roket memberikan gaya aksi ke belakang untuk mendorong molekul gas buang keluar, dan sebagai reaksinya gas buang memberikan gaya dorong ke depan yang sama besar pada badan roket:<br>$$F_{\\text{thrust}} = v_{\\text{gas}} \\cdot \\frac{\\Delta m}{\\Delta t}$$",
      "steps": "1. Substitusikan parameter laju semburan gas:<br>$$F_{\\text{thrust}} = 1500\\text{ m/s} \\times 20\\text{ kg/s} = 30000\\text{ N}$$<br>2. Konversi ke satuan kiloNewton:<br>$$F_{\\text{thrust}} = 30\\text{ kN}$$",
      "pitfalls": "Mengalikan dengan massa total roket alih-alih laju alir massa semburan gas pembakaran."
    },
    "subTopicSlug": "hukum-3-newton",
    "bab": "Dinamika",
    "subBab": "Hukum III Newton",
    "subTopic": "Hukum III Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Roket memberikan gaya aksi ke belakang untuk mendorong molekul gas buang keluar, dan sebagai reaksinya gas buang memberikan gaya dorong ke depan yang sama besar pada badan roket: $$F_{\\text{thrust}} = v_{\\text{gas}} \\cdot \\frac{\\Delta m}{\\Delta t}$$. **Tips:** Mengalikan dengan massa total roket alih-alih laju alir massa semburan gas pembakaran."
  },
  {
    "id": "fis-din-gaya-newton3-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton3",
    "category": "Hukum III Newton",
    "difficulty": "sedang",
    "statement": "Sebuah meriam artileri bermassa $M = 500\\text{ kg}$ menembakkan peluru bermassa $m = 5\\text{ kg}$ secara mendatar dengan kelajuan moncong $v = 200\\text{ m/s}$. Gas pendorong bekerja di dalam laras selama selang waktu $\\Delta t = 0{,}02\\text{ sekon}$. Besar gaya reaksi rata-rata yang dialami badan meriam dan besar percepatan sentakan balik (recoil) meriam berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\text{ kN}$ dan $100\\text{ m/s}^2$",
      "$50\\text{ kN}$ dan $10\\text{ m/s}^2$",
      "$5\\text{ kN}$ dan $100\\text{ m/s}^2$",
      "$50\\text{ kN}$ dan $20\\text{ m/s}^2$",
      "$25\\text{ kN}$ dan $50\\text{ m/s}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gaya rata-rata pada peluru dihitung dari impuls perubahan momentum: $F = \\frac{m \\Delta v}{\\Delta t}$. Berdasarkan Hukum III Newton, gaya reaksi yang dialami meriam sama besar dengan gaya pada peluru namun berlawanan arah. Percepatan sentakan meriam dihitung dengan $a = \\frac{F}{M}$.",
      "steps": "1. Hitung gaya pendorong pada peluru:<br>$$F = \\frac{5\\text{ kg} \\times 200\\text{ m/s}}{0{,}02\\text{ s}} = \\frac{1000}{0{,}02} = 50000\\text{ N} = 50\\text{ kN}$$<br>2. Gaya reaksi pada meriam:<br>$$|F_{\\text{reaksi}}| = 50000\\text{ N} = 50\\text{ kN}$$<br>3. Hitung percepatan sentakan balik meriam:<br>$$a_{\\text{recoil}} = \\frac{F_{\\text{reaksi}}}{M} = \\frac{50000\\text{ N}}{500\\text{ kg}} = 100\\text{ m/s}^2$$",
      "pitfalls": "Membagi gaya dengan massa peluru alih-alih massa meriam saat menghitung percepatan gerak sentak meriam."
    },
    "subTopicSlug": "hukum-3-newton",
    "bab": "Dinamika",
    "subBab": "Hukum III Newton",
    "subTopic": "Hukum III Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Gaya rata-rata pada peluru dihitung dari impuls perubahan momentum: $F = \\frac{m \\Delta v}{\\Delta t}$. Berdasarkan Hukum III Newton, gaya reaksi yang dialami meriam sama besar dengan gaya pada peluru namun berlawanan arah. Percepatan sentakan meriam dihitung dengan $a = \\frac{F}{M}$. **Tips:** Membagi gaya dengan massa peluru alih-alih massa meriam saat menghitung percepatan gerak sentak meriam."
  },
  {
    "id": "fis-din-gaya-newton3-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton3",
    "category": "Hukum III Newton",
    "difficulty": "sedang",
    "statement": "Sebuah balok $A$ ditumpuk tepat di atas balok $B$, dan keduanya diam di atas permukaan meja mendatar. Diberikan beberapa pernyataan gaya:<br>(1) Gaya kontak tekan balok $A$ pada balok $B$<br>(2) Gaya normal meja pada balok $B$<br>(3) Gaya kontak normal balok $B$ pada balok $A$<br>(4) Gaya gravitasi bumi pada balok $A$<br>(5) Gaya gravitasi tarik balok $A$ pada bumi<br>Pasangan gaya yang memenuhi kriteria aksi-reaksi Hukum III Newton secara tepat adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "(1) dengan (3), serta (4) dengan (5)",
      "(1) dengan (2), serta (3) dengan (4)",
      "(2) dengan (4), serta (1) dengan (5)",
      "(3) dengan (4) saja",
      "(1) dengan (4), serta (2) dengan (5)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pasangan aksi-reaksi harus memenuhi interaksi timbal balik antara dua objek yang sama persis: gaya benda $X$ pada benda $Y$ berpasangan dengan gaya benda $Y$ pada benda $X$, dan jenis gayanya harus sejenis (kontak-kontak, atau gravitasi-gravitasi).",
      "steps": "1. Pasangan (1) dan (3): Gaya kontak $A$ pada $B$ dan gaya kontak $B$ pada $A$ $\\implies$ PASANGAN AKSI-REAKSI.<br>2. Pasangan (4) dan (5): Gaya gravitasi Bumi pada $A$ dan gaya gravitasi $A$ pada Bumi $\\implies$ PASANGAN AKSI-REAKSI.<br>3. Gaya (2) adalah kontak meja-$B$, bukan reaksi dari berat $A$ maupun kontak $A-B$.",
      "pitfalls": "Menganggap gaya gravitasi bumi pada balok $A$ berpasangan dengan gaya normal balok $B$ pada $A$."
    },
    "subTopicSlug": "hukum-3-newton",
    "bab": "Dinamika",
    "subBab": "Hukum III Newton",
    "subTopic": "Hukum III Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Pasangan aksi-reaksi harus memenuhi interaksi timbal balik antara dua objek yang sama persis: gaya benda $X$ pada benda $Y$ berpasangan dengan gaya benda $Y$ pada benda $X$, dan jenis gayanya harus sejenis (kontak-kontak, atau gravitasi-gravitasi). **Tips:** Menganggap gaya gravitasi bumi pada balok $A$ berpasangan dengan gaya normal balok $B$ pada $A$."
  },
  {
    "id": "fis-din-gaya-newton3-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton3",
    "category": "Hukum III Newton",
    "difficulty": "sedang",
    "statement": "Massa bumi diketahui sekitar 81 kali massa bulan ($M_B \\approx 81 M_L$). Jika besar gaya tarik gravitasi yang dikerjakan oleh bumi pada bulan adalah $F$, maka besar gaya tarik gravitasi yang dikerjakan oleh bulan pada bumi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Tepat sama dengan $F$",
      "$\\frac{1}{81} F$",
      "$81 F$",
      "$\\frac{1}{9} F$",
      "$9 F$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gaya gravitasi antara dua benda langit memenuhi Hukum Gravitasi Universal Newton:<br>$$F = G \\frac{M_B M_L}{R^2}$$<br>Berdasarkan Hukum III Newton, gaya tarik bumi pada bulan dan gaya tarik bulan pada bumi merupakan pasangan aksi-reaksi mutlak sehingga besarnya selalu tepat sama besar.",
      "steps": "1. Gaya tarik bumi pada bulan: $F_{B\\to L} = G \\frac{M_B M_L}{R^2} = F$.<br>2. Gaya tarik bulan pada bumi: $F_{L\\to B} = G \\frac{M_L M_B}{R^2} = F$.<br>3. Besar kedua gaya adalah sama ($|F_{B\\to L}| = |F_{L\\to B}| = F$). Perbedaan massa hanya menyebabkan percepatan gerak bulan jauh lebih besar dari percepatan bumi ($a_L = 81 a_B$).",
      "pitfalls": "Terkecoh mengira karena massa bulan 81 kali lebih kecil maka gaya gravitasi yang dikerjakannya juga 81 kali lebih kecil."
    },
    "subTopicSlug": "hukum-3-newton",
    "bab": "Dinamika",
    "subBab": "Hukum III Newton",
    "subTopic": "Hukum III Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Gaya gravitasi antara dua benda langit memenuhi Hukum Gravitasi Universal Newton: $$F = G \\frac{M_B M_L}{R^2}$$ Berdasarkan Hukum III Newton, gaya tarik bumi pada bulan dan gaya tarik bulan pada bumi merupakan pasangan aksi-reaksi mutlak sehingga besarnya selalu tepat sama besar. **Tips:** Terkecoh mengira karena massa bulan 81 kali lebih kecil maka gaya gravitasi yang dikerjakannya juga 81 kali lebih kecil."
  },
  {
    "id": "fis-din-gaya-newton3-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton3",
    "category": "Hukum III Newton",
    "difficulty": "sedang",
    "statement": "Dua atlet seluncur es, Rama ($m_R = 60\\text{ kg}$) dan Shinta ($m_S = 40\\text{ kg}$), berdiri diam saling berhadapan di atas permukaan es licin sempurna tanpa gesekan. Rama kemudian mendorong telapak tangan Shinta dengan gaya horizontal sebesar $120\\text{ N}$ selama selang waktu $0{,}5\\text{ sekon}$. Perbandingan percepatan yang dialami Rama terhadap percepatan Shinta ($a_R : a_S$) dan kelajuan Rama saat dorongan berakhir berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2 : 3$ dan $1\\text{ m/s}$",
      "$3 : 2$ dan $1\\text{ m/s}$",
      "$2 : 3$ dan $1{,}5\\text{ m/s}$",
      "$1 : 1$ dan $1\\text{ m/s}$",
      "$3 : 2$ dan $1{,}5\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Berdasarkan Hukum III Newton, ketika Rama mendorong Shinta dengan gaya $F = 120\\text{ N}$, Shinta secara otomatis memberikan gaya reaksi yang sama besar $120\\text{ N}$ pada Rama dengan arah berlawanan. Percepatan masing-masing berbanding terbalik dengan massanya ($a = \\frac{F}{m}$).",
      "steps": "1. Percepatan yang dialami Rama:<br>$$a_R = \\frac{120\\text{ N}}{60\\text{ kg}} = 2\\text{ m/s}^2$$<br>2. Percepatan yang dialami Shinta:<br>$$a_S = \\frac{120\\text{ N}}{40\\text{ kg}} = 3\\text{ m/s}^2$$<br>Rasio percepatan: $a_R : a_S = 2 : 3$.<br>3. Kelajuan akhir Rama:<br>$$v_R = a_R \\cdot \\Delta t = 2\\text{ m/s}^2 \\times 0{,}5\\text{ s} = 1\\text{ m/s}$$",
      "pitfalls": "Mengira Rama yang aktif mendorong tidak mengalami gaya reaksi dan tetap diam."
    },
    "subTopicSlug": "hukum-3-newton",
    "bab": "Dinamika",
    "subBab": "Hukum III Newton",
    "subTopic": "Hukum III Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Berdasarkan Hukum III Newton, ketika Rama mendorong Shinta dengan gaya $F = 120\\text{ N}$, Shinta secara otomatis memberikan gaya reaksi yang sama besar $120\\text{ N}$ pada Rama dengan arah berlawanan. Percepatan masing-masing berbanding terbalik dengan massanya ($a = \\frac{F}{m}$). **Tips:** Mengira Rama yang aktif mendorong tidak mengalami gaya reaksi dan tetap diam."
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
