/**
 * Batch Task: TASK_fis-gel-optik-mata_MEDIUM
 * SubTopic: Mata dan Kacamata (fis-gel-optik-mata)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-gel-optik-mata-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-mata",
    category: "Mata dan Kacamata",
    difficulty: "sedang",
    statement: "Seseorang menggunakan kacamata berukuran $+1{,}5\\text{ dioptri}$ untuk dapat membaca dengan jelas pada jarak baca normal $25\\text{ cm}$. Jika orang tersebut melepas kacamatanya, jarak paling dekat suatu teks agar masih dapat dibaca dengan jelas adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30\\text{ cm}$",
      "$35\\text{ cm}$",
      "$40\\text{ cm}$",
      "$50\\text{ cm}$",
      "$60\\text{ cm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Jarak terdekat yang masih dapat dibaca tanpa kacamata adalah titik dekat asli ($PP$, punctum proximum) mata penderita. Rumus kacamata hipermetropi:<br>$$P = \\frac{100}{s_n} - \\frac{100}{PP}$$",
      steps: "1. Substitusikan $P = +1{,}5\\text{ D}$ dan jarak baca normal $s_n = 25\\text{ cm}$:<br>$$1{,}5 = \\frac{100}{25} - \\frac{100}{PP} \\implies 1{,}5 = 4 - \\frac{100}{PP}$$<br>2. Pindahkan suku ke ruas kiri:<br>$$\\frac{100}{PP} = 4 - 1{,}5 = 2{,}5$$<br>3. Hitung nilai $PP$:<br>$$PP = \\frac{100}{2{,}5} = 40\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Siswa sering mengira jarak paling dekat tanpa kacamata adalah jarak fokus lensa ($100/1{,}5 = 66{,}7\\text{ cm}$). Titik dekat mata diperoleh melalui pengurangan daya baca normal dengan daya lensa."
    }
  },
  {
    id: "fis-gel-optik-mata-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-mata",
    category: "Mata dan Kacamata",
    difficulty: "sedang",
    statement: "Seorang siswa hanya dapat melihat benda dengan jelas paling jauh pada jarak $100\\text{ cm}$ di depan matanya ($PR = 100\\text{ cm}$). Jika siswa tersebut ingin melihat layar proyektor di kelas yang berada pada jarak $5\\text{ m}$ ($500\\text{ cm}$), daya lensa kacamata yang harus digunakan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-0{,}8\\text{ dioptri}$",
      "$-1{,}0\\text{ dioptri}$",
      "$-1{,}2\\text{ dioptri}$",
      "$-1{,}5\\text{ dioptri}$",
      "$-2{,}0\\text{ dioptri}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jika benda yang ingin dilihat tidak berada di jarak tak terhingga melainkan pada jarak berhingga $s$, maka rumus lensa berlaku:<br>$$P = \\frac{100}{s\\text{ (cm)}} + \\frac{100}{s'\\text{ (cm)}}$$<br>dengan $s' = -PR$ karena bayangan maya harus jatuh di titik jauh siswa.",
      steps: "1. Diketahui jarak benda $s = 500\\text{ cm}$ dan bayangan $s' = -100\\text{ cm}$.<br>2. Masukkan ke rumus kuat lensa:<br>$$P = \\frac{100}{500} - \\frac{100}{100} = 0{,}2 - 1 = -0{,}8\\text{ dioptri}$$<br>3. Jawaban yang benar adalah pilihan A.",
      pitfalls: "Jangan langsung menggunakan rumus standar tak terhingga $P = -100/PR = -1{,}0\\text{ D}$ (opsi B) karena benda secara spesifik berada pada jarak $5\\text{ m}$, bukan di tak terhingga."
    }
  },
  {
    id: "fis-gel-optik-mata-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-mata",
    category: "Mata dan Kacamata",
    difficulty: "sedang",
    statement: "Seorang kakek memiliki titik dekat $PP = 50\\text{ cm}$ dan titik jauh $PR = 200\\text{ cm}$. Agar kakek tersebut dapat melihat objek jauh di tak terhingga dan dapat membaca surat kabar pada jarak normal $25\\text{ cm}$, ukuran kacamata rangkap (bifokal) untuk lensa bagian atas (melihat jauh) dan lensa bagian bawah (membaca dekat) berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-0{,}5\\text{ dioptri}$ dan $+2{,}0\\text{ dioptri}$",
      "$+2{,}0\\text{ dioptri}$ dan $-0{,}5\\text{ dioptri}$",
      "$-2{,}0\\text{ dioptri}$ dan $+0{,}5\\text{ dioptri}$",
      "$-1{,}0\\text{ dioptri}$ dan $+1{,}5\\text{ dioptri}$",
      "$+0{,}5\\text{ dioptri}$ dan $-2{,}0\\text{ dioptri}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kacamata bifokal memiliki dua segmen lensa:<br>1. Bagian atas untuk melihat jauh (miopi): $P_{\\text{jauh}} = -\\frac{100}{PR}$.<br>2. Bagian bawah untuk membaca dekat (hipermetropi/presbiopi): $P_{\\text{dekat}} = \\frac{100}{s_n} - \\frac{100}{PP}$.",
      steps: "1. Hitung bagian atas untuk melihat jauh ($PR = 200\\text{ cm}$):<br>$$P_{\\text{atas}} = -\\frac{100}{200} = -0{,}5\\text{ dioptri}$$<br>2. Hitung bagian bawah untuk membaca ($PP = 50\\text{ cm}, s_n = 25\\text{ cm}$):<br>$$P_{\\text{bawah}} = \\frac{100}{25} - \\frac{100}{50} = 4 - 2 = +2{,}0\\text{ dioptri}$$<br>3. Jawaban yang benar adalah pilihan A.",
      pitfalls: "Perhatikan urutan pertanyaan: lensa bagian atas adalah lensa negatif untuk melihat jauh, sedangkan bagian bawah adalah lensa positif untuk membaca dekat."
    }
  },
  {
    id: "fis-gel-optik-mata-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-mata",
    category: "Mata dan Kacamata",
    difficulty: "sedang",
    statement: "Seseorang menderita rabun jauh dengan titik jauh $PR = 102\\text{ cm}$ dari mata. Ia memakai kacamata pada posisi berjarak $d = 2\\text{ cm}$ di depan matanya. Kuat lensa kacamata yang tepat agar orang tersebut dapat melihat benda di tak terhingga adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-0{,}5\\text{ dioptri}$",
      "$-0{,}98\\text{ dioptri}$",
      "$-1{,}0\\text{ dioptri}$",
      "$-1{,}02\\text{ dioptri}$",
      "$-1{,}5\\text{ dioptri}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Jika jarak antara kacamata dan mata diperhitungkan sebesar $d$, maka jarak bayangan terhadap lensa kacamata ($s'$) adalah:<br>$$s' = -(PR - d)$$<br>Untuk melihat benda di tak terhingga ($s = \\infty$):<br>$$P = -\\frac{100}{PR - d}$$",
      steps: "1. Hitung jarak bayangan efektif dari posisi lensa kacamata:<br>$$s' = -(102\\text{ cm} - 2\\text{ cm}) = -100\\text{ cm}$$<br>2. Hitung kekuatan lensa kacamata:<br>$$P = -\\frac{100}{100} = -1{,}0\\text{ dioptri}$$<br>3. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Jika mengabaikan jarak kacamata ke mata ($d = 2\\text{ cm}$), akan diperoleh $P = -100/102 = -0{,}98\\text{ D}$ (opsi B). Jangan lupa mengurangkan jarak bingkai kacamata ke kornea mata."
    }
  },
  {
    id: "fis-gel-optik-mata-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-mata",
    category: "Mata dan Kacamata",
    difficulty: "sedang",
    statement: "Jarak antara lensa mata dan retina pada bola mata seseorang adalah tetap sebesar $2\\text{ cm}$. Saat mata mengamati benda di tak terhingga tanpa berakomodasi dibandingkan saat membaca buku pada jarak $25\\text{ cm}$ dengan berakomodasi maksimum, perubahan daya bias lensa mata (daya akomodasi) orang tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$+1\\text{ dioptri}$",
      "$+2\\text{ dioptri}$",
      "$+3\\text{ dioptri}$",
      "$+4\\text{ dioptri}$",
      "$+5\\text{ dioptri}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Daya bias lensa mata dihitung dengan persamaan lensa tipis di mana jarak bayangan ke retina bernilai konstan ($s' = 2\\text{ cm} = 0{,}02\\text{ m}$):<br>$$P = \\frac{1}{s} + \\frac{1}{s'}$$<br>Daya akomodasi adalah selisih kekuatan lensa mata maksimum terhadap minimum:<br>$$\\Delta P = P_{\\max} - P_{\\min}$$",
      steps: "1. Tanpa akomodasi ($s_1 = \\infty, s' = 0{,}02\\text{ m}$):<br>$$P_{\\min} = \\frac{1}{\\infty} + \\frac{1}{0{,}02} = 0 + 50 = 50\\text{ dioptri}$$<br>2. Akomodasi maksimum ($s_2 = 25\\text{ cm} = 0{,}25\\text{ m}, s' = 0{,}02\\text{ m}$):<br>$$P_{\\max} = \\frac{1}{0{,}25} + \\frac{1}{0{,}02} = 4 + 50 = 54\\text{ dioptri}$$<br>3. Hitung perubahan daya lensa mata:<br>$$\\Delta P = 54 - 50 = +4\\text{ dioptri}$$<br>4. Jawaban yang benar adalah pilihan D.",
      pitfalls: "Perhatikan bahwa daya lensa mata bertambah besar ($+4\\text{ D}$) saat berakomodasi karena lensa mata mencembung (jarak fokus memendek) agar berkas sinar dari jarak dekat tetap terfokus tepat di retina."
    }
  }
];
