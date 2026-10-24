/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Cahaya & Optik (fis-gel-optik)
 * Sub-Bab: Mata dan Kacamata (fis-gel-optik-mata)
 * Slug: mata-dan-kacamata
 * Indikator: Cacat mata miopi, hipermetropi, dan penentuan kuat lensa kacamata bantu.
 * 
 * Total Butir Soal: 14 (Mudah: 6, Sedang: 8, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-optik-mata";
  const subTopicSlug = "mata-dan-kacamata";
  const questions = [
  {
    "id": "fis-gel-optik-mata-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-mata",
    "category": "Mata dan Kacamata",
    "difficulty": "mudah",
    "statement": "Jarak titik dekat (punctum proximum, $PP$) dan jarak titik jauh (punctum remotum, $PR$) untuk mata normal (emetropi) yang sehat adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$PP = 25\\text{ cm}$ dan $PR = \\infty$ (tak terhingga)",
      "$PP = 10\\text{ cm}$ dan $PR = 100\\text{ cm}$",
      "$PP = 50\\text{ cm}$ dan $PR = \\infty$ (tak terhingga)",
      "$PP = 25\\text{ cm}$ dan $PR = 2\\text{ m}$",
      "$PP = 0\\text{ cm}$ dan $PR = 10\\text{ m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Mata normal (emetropi) memiliki:<br>1. Titik dekat ($PP$, punctum proximum) standar sebesar $s_n = 25\\text{ cm}$ saat berakomodasi maksimum.<br>2. Titik jauh ($PR$, punctum remotum) berada di jarak tak terhingga ($PR = \\infty$) saat mata tidak berakomodasi (relaks).",
      "steps": "1. Tinjau nilai standar fisiologis penglihatan manusia normal.<br>2. Titik terdekat yang dapat dilihat dengan nyaman berakomodasi maksimum adalah $25\\text{ cm}$.<br>3. Titik terjauh tanpa akomodasi adalah tak terhingga ($\\infty$).<br>4. Jawaban yang benar adalah pilihan A.",
      "pitfalls": "Jika titik dekat lebih besar dari 25 cm, mata mengalami rabun dekat (hipermetropi). Jika titik jauh berjarak tertentu (terbatas), mata mengalami rabun jauh (miopi)."
    },
    "subTopicSlug": "mata-dan-kacamata",
    "bab": "Gelombang dan Optik",
    "subBab": "Mata dan Kacamata",
    "subTopic": "Mata dan Kacamata",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-mata-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-mata",
    "category": "Mata dan Kacamata",
    "difficulty": "mudah",
    "statement": "Seseorang menderita rabun jauh (miopi) dengan titik jauh $PR = 200\\text{ cm}$. Kuat lensa kacamata yang harus digunakan agar orang tersebut dapat melihat benda-benda yang sangat jauh secara normal adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-2{,}0\\text{ dioptri}$",
      "$-1{,}0\\text{ dioptri}$",
      "$-0{,}5\\text{ dioptri}$",
      "$+0{,}5\\text{ dioptri}$",
      "$+2{,}0\\text{ dioptri}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Penderita miopi ditolong dengan lensa cekung (negatif) agar benda di tak terhingga ($s = \\infty$) dibentuk bayangannya tepat di titik jauh penderita ($s' = -PR$):<br>$$P = -\\frac{100}{PR\\text{ (cm)}}$$",
      "steps": "1. Substitusikan $PR = 200\\text{ cm}$ ke rumus daya kacamata miopi:<br>$$P = -\\frac{100}{200} = -0{,}5\\text{ dioptri}$$<br>2. Tanda minus menandakan lensa cekung berdaya $-0{,}5\\text{ D}$.<br>3. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Jangan menggunakan tanda positif ($+0{,}5\\text{ D}$, opsi D). Lensa cembung (positif) justru akan memperparah pembiasan pada mata miopi."
    },
    "subTopicSlug": "mata-dan-kacamata",
    "bab": "Gelombang dan Optik",
    "subBab": "Mata dan Kacamata",
    "subTopic": "Mata dan Kacamata",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-mata-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-mata",
    "category": "Mata dan Kacamata",
    "difficulty": "mudah",
    "statement": "Seorang penderita rabun dekat (hipermetropi) memiliki titik dekat $PP = 50\\text{ cm}$. Agar orang tersebut dapat membaca buku secara normal pada jarak $25\\text{ cm}$, daya lensa kacamata yang diperlukannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+1{,}0\\text{ dioptri}$",
      "$+1{,}5\\text{ dioptri}$",
      "$+2{,}0\\text{ dioptri}$",
      "$+2{,}5\\text{ dioptri}$",
      "$+4{,}0\\text{ dioptri}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Penderita hipermetropi ditolong lensa cembung (positif) agar buku pada jarak baca normal ($s = 25\\text{ cm}$) dibentuk bayangan mayanya di titik dekat penderita ($s' = -PP$):<br>$$P = \\frac{100}{s_n} - \\frac{100}{PP}$$",
      "steps": "1. Substitusikan $s_n = 25\\text{ cm}$ dan $PP = 50\\text{ cm}$:<br>$$P = \\frac{100}{25} - \\frac{100}{50}$$<br>2. Lakukan pengurangan aljabar:<br>$$P = 4 - 2 = +2{,}0\\text{ dioptri}$$<br>3. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Hati-hati jangan sampai terbalik mengurangkan $\\frac{100}{50} - \\frac{100}{25} = -2\\text{ D}$. Hipermetropi selalu membutuhkan lensa berkekuatan positif."
    },
    "subTopicSlug": "mata-dan-kacamata",
    "bab": "Gelombang dan Optik",
    "subBab": "Mata dan Kacamata",
    "subTopic": "Mata dan Kacamata",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-mata-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-mata",
    "category": "Mata dan Kacamata",
    "difficulty": "mudah",
    "statement": "Cacat mata presbiopi (mata tua) yang umumnya mulai dialami oleh orang lanjut usia disebabkan oleh ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Melemahnya daya akomodasi akibat berkurangnya elastisitas otot siliaris lensa mata",
      "Kelengkungan permukaan kornea mata yang tidak rata (tidak sferis)",
      "Lensa mata yang terlalu cembung permanen sehingga bayangan jatuh di depan retina",
      "Bola mata yang terlalu pendek sehingga bayangan jatuh di belakang retina",
      "Tekanan cairan humor aquous di dalam rongga mata yang meningkat drastis"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Presbiopi adalah penurunan kemampuan akomodasi mata yang terjadi secara alami seiring bertambahnya usia akibat penuaan fisik. Otot siliaris kehilangan kelenturannya sehingga lensa mata tidak dapat menebal secara maksimal untuk melihat dekat maupun menipis maksimal untuk melihat jauh.",
      "steps": "1. Tinjau definisi presbiopi: Berhubungan langsung dengan penurunan daya akomodasi akibat penuaan otot siliaris.<br>2. Akibatnya, titik dekat ($PP$) menjauh dan titik jauh ($PR$) mendekat.<br>3. Pilihan yang tepat adalah opsi A.",
      "pitfalls": "Opsi B adalah penyebab astigmatisme, opsi C adalah miopi anatomis, opsi D adalah hipermetropi anatomis, dan opsi E adalah glaukoma."
    },
    "subTopicSlug": "mata-dan-kacamata",
    "bab": "Gelombang dan Optik",
    "subBab": "Mata dan Kacamata",
    "subTopic": "Mata dan Kacamata",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-mata-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-mata",
    "category": "Mata dan Kacamata",
    "difficulty": "mudah",
    "statement": "Penderita cacat mata astigmatisme tidak dapat melihat garis-garis tegak (vertikal) dan mendatar (horizontal) secara bersamaan dengan ketajaman yang sama. Cacat mata ini dapat dikoreksi dengan menggunakan kacamata berlensa ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Cekung (negatif)",
      "Cembung (positif)",
      "Silindris",
      "Bifokal",
      "Cekung-cembung (meniskus)"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Astigmatisme disebabkan oleh lengkungan kornea atau lensa mata yang tidak sferis sempurna (memiliki jari-jari kelengkungan yang berbeda pada meridian horizontal dan vertikal). Untuk mengimbanginya, dibutuhkan lensa silindris (cylindrical lens) yang memiliki kelengkungan hanya pada satu aksis tertentu.",
      "steps": "1. Identifikasi cacat mata: Astigmatisme (mata silinder).<br>2. Lensa koreksi yang sesuai secara medis dan optik adalah lensa silindris.<br>3. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Kacamata bifokal (opsi D) digunakan untuk penderita presbiopi yang membutuhkan koreksi melihat jauh sekaligus membaca dekat."
    },
    "subTopicSlug": "mata-dan-kacamata",
    "bab": "Gelombang dan Optik",
    "subBab": "Mata dan Kacamata",
    "subTopic": "Mata dan Kacamata",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-optik-mata-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-mata",
    "category": "Mata dan Kacamata",
    "difficulty": "sedang",
    "statement": "Seseorang menggunakan kacamata berukuran $+1{,}5\\text{ dioptri}$ untuk dapat membaca dengan jelas pada jarak baca normal $25\\text{ cm}$. Jika orang tersebut melepas kacamatanya, jarak paling dekat suatu teks agar masih dapat dibaca dengan jelas adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ cm}$",
      "$35\\text{ cm}$",
      "$40\\text{ cm}$",
      "$50\\text{ cm}$",
      "$60\\text{ cm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Jarak terdekat yang masih dapat dibaca tanpa kacamata adalah titik dekat asli ($PP$, punctum proximum) mata penderita. Rumus kacamata hipermetropi:<br>$$P = \\frac{100}{s_n} - \\frac{100}{PP}$$",
      "steps": "1. Substitusikan $P = +1{,}5\\text{ D}$ dan jarak baca normal $s_n = 25\\text{ cm}$:<br>$$1{,}5 = \\frac{100}{25} - \\frac{100}{PP} \\implies 1{,}5 = 4 - \\frac{100}{PP}$$<br>2. Pindahkan suku ke ruas kiri:<br>$$\\frac{100}{PP} = 4 - 1{,}5 = 2{,}5$$<br>3. Hitung nilai $PP$:<br>$$PP = \\frac{100}{2{,}5} = 40\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Siswa sering mengira jarak paling dekat tanpa kacamata adalah jarak fokus lensa ($100/1{,}5 = 66{,}7\\text{ cm}$). Titik dekat mata diperoleh melalui pengurangan daya baca normal dengan daya lensa."
    },
    "subTopicSlug": "mata-dan-kacamata",
    "bab": "Gelombang dan Optik",
    "subBab": "Mata dan Kacamata",
    "subTopic": "Mata dan Kacamata",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-mata-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-mata",
    "category": "Mata dan Kacamata",
    "difficulty": "sedang",
    "statement": "Seorang siswa hanya dapat melihat benda dengan jelas paling jauh pada jarak $100\\text{ cm}$ di depan matanya ($PR = 100\\text{ cm}$). Jika siswa tersebut ingin melihat layar proyektor di kelas yang berada pada jarak $5\\text{ m}$ ($500\\text{ cm}$), daya lensa kacamata yang harus digunakan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-0{,}8\\text{ dioptri}$",
      "$-1{,}0\\text{ dioptri}$",
      "$-1{,}2\\text{ dioptri}$",
      "$-1{,}5\\text{ dioptri}$",
      "$-2{,}0\\text{ dioptri}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jika benda yang ingin dilihat tidak berada di jarak tak terhingga melainkan pada jarak berhingga $s$, maka rumus lensa berlaku:<br>$$P = \\frac{100}{s\\text{ (cm)}} + \\frac{100}{s'\\text{ (cm)}}$$<br>dengan $s' = -PR$ karena bayangan maya harus jatuh di titik jauh siswa.",
      "steps": "1. Diketahui jarak benda $s = 500\\text{ cm}$ dan bayangan $s' = -100\\text{ cm}$.<br>2. Masukkan ke rumus kuat lensa:<br>$$P = \\frac{100}{500} - \\frac{100}{100} = 0{,}2 - 1 = -0{,}8\\text{ dioptri}$$<br>3. Jawaban yang benar adalah pilihan A.",
      "pitfalls": "Jangan langsung menggunakan rumus standar tak terhingga $P = -100/PR = -1{,}0\\text{ D}$ (opsi B) karena benda secara spesifik berada pada jarak $5\\text{ m}$, bukan di tak terhingga."
    },
    "subTopicSlug": "mata-dan-kacamata",
    "bab": "Gelombang dan Optik",
    "subBab": "Mata dan Kacamata",
    "subTopic": "Mata dan Kacamata",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-mata-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-mata",
    "category": "Mata dan Kacamata",
    "difficulty": "sedang",
    "statement": "Seorang kakek memiliki titik dekat $PP = 50\\text{ cm}$ dan titik jauh $PR = 200\\text{ cm}$. Agar kakek tersebut dapat melihat objek jauh di tak terhingga dan dapat membaca surat kabar pada jarak normal $25\\text{ cm}$, ukuran kacamata rangkap (bifokal) untuk lensa bagian atas (melihat jauh) dan lensa bagian bawah (membaca dekat) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-0{,}5\\text{ dioptri}$ dan $+2{,}0\\text{ dioptri}$",
      "$+2{,}0\\text{ dioptri}$ dan $-0{,}5\\text{ dioptri}$",
      "$-2{,}0\\text{ dioptri}$ dan $+0{,}5\\text{ dioptri}$",
      "$-1{,}0\\text{ dioptri}$ dan $+1{,}5\\text{ dioptri}$",
      "$+0{,}5\\text{ dioptri}$ dan $-2{,}0\\text{ dioptri}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kacamata bifokal memiliki dua segmen lensa:<br>1. Bagian atas untuk melihat jauh (miopi): $P_{\\text{jauh}} = -\\frac{100}{PR}$.<br>2. Bagian bawah untuk membaca dekat (hipermetropi/presbiopi): $P_{\\text{dekat}} = \\frac{100}{s_n} - \\frac{100}{PP}$.",
      "steps": "1. Hitung bagian atas untuk melihat jauh ($PR = 200\\text{ cm}$):<br>$$P_{\\text{atas}} = -\\frac{100}{200} = -0{,}5\\text{ dioptri}$$<br>2. Hitung bagian bawah untuk membaca ($PP = 50\\text{ cm}, s_n = 25\\text{ cm}$):<br>$$P_{\\text{bawah}} = \\frac{100}{25} - \\frac{100}{50} = 4 - 2 = +2{,}0\\text{ dioptri}$$<br>3. Jawaban yang benar adalah pilihan A.",
      "pitfalls": "Perhatikan urutan pertanyaan: lensa bagian atas adalah lensa negatif untuk melihat jauh, sedangkan bagian bawah adalah lensa positif untuk membaca dekat."
    },
    "subTopicSlug": "mata-dan-kacamata",
    "bab": "Gelombang dan Optik",
    "subBab": "Mata dan Kacamata",
    "subTopic": "Mata dan Kacamata",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-mata-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-mata",
    "category": "Mata dan Kacamata",
    "difficulty": "sedang",
    "statement": "Seseorang menderita rabun jauh dengan titik jauh $PR = 102\\text{ cm}$ dari mata. Ia memakai kacamata pada posisi berjarak $d = 2\\text{ cm}$ di depan matanya. Kuat lensa kacamata yang tepat agar orang tersebut dapat melihat benda di tak terhingga adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-0{,}5\\text{ dioptri}$",
      "$-0{,}98\\text{ dioptri}$",
      "$-1{,}0\\text{ dioptri}$",
      "$-1{,}02\\text{ dioptri}$",
      "$-1{,}5\\text{ dioptri}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Jika jarak antara kacamata dan mata diperhitungkan sebesar $d$, maka jarak bayangan terhadap lensa kacamata ($s'$) adalah:<br>$$s' = -(PR - d)$$<br>Untuk melihat benda di tak terhingga ($s = \\infty$):<br>$$P = -\\frac{100}{PR - d}$$",
      "steps": "1. Hitung jarak bayangan efektif dari posisi lensa kacamata:<br>$$s' = -(102\\text{ cm} - 2\\text{ cm}) = -100\\text{ cm}$$<br>2. Hitung kekuatan lensa kacamata:<br>$$P = -\\frac{100}{100} = -1{,}0\\text{ dioptri}$$<br>3. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Jika mengabaikan jarak kacamata ke mata ($d = 2\\text{ cm}$), akan diperoleh $P = -100/102 = -0{,}98\\text{ D}$ (opsi B). Jangan lupa mengurangkan jarak bingkai kacamata ke kornea mata."
    },
    "subTopicSlug": "mata-dan-kacamata",
    "bab": "Gelombang dan Optik",
    "subBab": "Mata dan Kacamata",
    "subTopic": "Mata dan Kacamata",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-optik-mata-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-mata",
    "category": "Mata dan Kacamata",
    "difficulty": "sedang",
    "statement": "Jarak antara lensa mata dan retina pada bola mata seseorang adalah tetap sebesar $2\\text{ cm}$. Saat mata mengamati benda di tak terhingga tanpa berakomodasi dibandingkan saat membaca buku pada jarak $25\\text{ cm}$ dengan berakomodasi maksimum, perubahan daya bias lensa mata (daya akomodasi) orang tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+1\\text{ dioptri}$",
      "$+2\\text{ dioptri}$",
      "$+3\\text{ dioptri}$",
      "$+4\\text{ dioptri}$",
      "$+5\\text{ dioptri}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Daya bias lensa mata dihitung dengan persamaan lensa tipis di mana jarak bayangan ke retina bernilai konstan ($s' = 2\\text{ cm} = 0{,}02\\text{ m}$):<br>$$P = \\frac{1}{s} + \\frac{1}{s'}$$<br>Daya akomodasi adalah selisih kekuatan lensa mata maksimum terhadap minimum:<br>$$\\Delta P = P_{\\max} - P_{\\min}$$",
      "steps": "1. Tanpa akomodasi ($s_1 = \\infty, s' = 0{,}02\\text{ m}$):<br>$$P_{\\min} = \\frac{1}{\\infty} + \\frac{1}{0{,}02} = 0 + 50 = 50\\text{ dioptri}$$<br>2. Akomodasi maksimum ($s_2 = 25\\text{ cm} = 0{,}25\\text{ m}, s' = 0{,}02\\text{ m}$):<br>$$P_{\\max} = \\frac{1}{0{,}25} + \\frac{1}{0{,}02} = 4 + 50 = 54\\text{ dioptri}$$<br>3. Hitung perubahan daya lensa mata:<br>$$\\Delta P = 54 - 50 = +4\\text{ dioptri}$$<br>4. Jawaban yang benar adalah pilihan D.",
      "pitfalls": "Perhatikan bahwa daya lensa mata bertambah besar ($+4\\text{ D}$) saat berakomodasi karena lensa mata mencembung (jarak fokus memendek) agar berkas sinar dari jarak dekat tetap terfokus tepat di retina."
    },
    "subTopicSlug": "mata-dan-kacamata",
    "bab": "Gelombang dan Optik",
    "subBab": "Mata dan Kacamata",
    "subTopic": "Mata dan Kacamata",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "drill-cah-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-mata",
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
    "bab": "Gelombang dan Optik",
    "subBab": "Mata dan Kacamata",
    "subTopic": "Mata dan Kacamata",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "mata-dan-kacamata"
  },
  {
    "id": "drill-cah-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-mata",
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
    "bab": "Gelombang dan Optik",
    "subBab": "Mata dan Kacamata",
    "subTopic": "Mata dan Kacamata",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "mata-dan-kacamata"
  },
  {
    "id": "drill2-cah-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-mata",
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
    "bab": "Gelombang dan Optik",
    "subBab": "Mata dan Kacamata",
    "subTopic": "Mata dan Kacamata",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "mata-dan-kacamata"
  },
  {
    "id": "drill2-cah-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-mata",
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
    "bab": "Gelombang dan Optik",
    "subBab": "Mata dan Kacamata",
    "subTopic": "Mata dan Kacamata",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "mata-dan-kacamata"
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
