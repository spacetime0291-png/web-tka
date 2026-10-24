/**
 * Batch Task: TASK_fis-gel-optik-mata_EASY
 * SubTopic: Mata dan Kacamata (fis-gel-optik-mata)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-gel-optik-mata-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-mata",
    category: "Mata dan Kacamata",
    difficulty: "mudah",
    statement: "Jarak titik dekat (punctum proximum, $PP$) dan jarak titik jauh (punctum remotum, $PR$) untuk mata normal (emetropi) yang sehat adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$PP = 25\\text{ cm}$ dan $PR = \\infty$ (tak terhingga)",
      "$PP = 10\\text{ cm}$ dan $PR = 100\\text{ cm}$",
      "$PP = 50\\text{ cm}$ dan $PR = \\infty$ (tak terhingga)",
      "$PP = 25\\text{ cm}$ dan $PR = 2\\text{ m}$",
      "$PP = 0\\text{ cm}$ dan $PR = 10\\text{ m}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Mata normal (emetropi) memiliki:<br>1. Titik dekat ($PP$, punctum proximum) standar sebesar $s_n = 25\\text{ cm}$ saat berakomodasi maksimum.<br>2. Titik jauh ($PR$, punctum remotum) berada di jarak tak terhingga ($PR = \\infty$) saat mata tidak berakomodasi (relaks).",
      steps: "1. Tinjau nilai standar fisiologis penglihatan manusia normal.<br>2. Titik terdekat yang dapat dilihat dengan nyaman berakomodasi maksimum adalah $25\\text{ cm}$.<br>3. Titik terjauh tanpa akomodasi adalah tak terhingga ($\\infty$).<br>4. Jawaban yang benar adalah pilihan A.",
      pitfalls: "Jika titik dekat lebih besar dari 25 cm, mata mengalami rabun dekat (hipermetropi). Jika titik jauh berjarak tertentu (terbatas), mata mengalami rabun jauh (miopi)."
    }
  },
  {
    id: "fis-gel-optik-mata-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-mata",
    category: "Mata dan Kacamata",
    difficulty: "mudah",
    statement: "Seseorang menderita rabun jauh (miopi) dengan titik jauh $PR = 200\\text{ cm}$. Kuat lensa kacamata yang harus digunakan agar orang tersebut dapat melihat benda-benda yang sangat jauh secara normal adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-2{,}0\\text{ dioptri}$",
      "$-1{,}0\\text{ dioptri}$",
      "$-0{,}5\\text{ dioptri}$",
      "$+0{,}5\\text{ dioptri}$",
      "$+2{,}0\\text{ dioptri}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Penderita miopi ditolong dengan lensa cekung (negatif) agar benda di tak terhingga ($s = \\infty$) dibentuk bayangannya tepat di titik jauh penderita ($s' = -PR$):<br>$$P = -\\frac{100}{PR\\text{ (cm)}}$$",
      steps: "1. Substitusikan $PR = 200\\text{ cm}$ ke rumus daya kacamata miopi:<br>$$P = -\\frac{100}{200} = -0{,}5\\text{ dioptri}$$<br>2. Tanda minus menandakan lensa cekung berdaya $-0{,}5\\text{ D}$.<br>3. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Jangan menggunakan tanda positif ($+0{,}5\\text{ D}$, opsi D). Lensa cembung (positif) justru akan memperparah pembiasan pada mata miopi."
    }
  },
  {
    id: "fis-gel-optik-mata-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-mata",
    category: "Mata dan Kacamata",
    difficulty: "mudah",
    statement: "Seorang penderita rabun dekat (hipermetropi) memiliki titik dekat $PP = 50\\text{ cm}$. Agar orang tersebut dapat membaca buku secara normal pada jarak $25\\text{ cm}$, daya lensa kacamata yang diperlukannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$+1{,}0\\text{ dioptri}$",
      "$+1{,}5\\text{ dioptri}$",
      "$+2{,}0\\text{ dioptri}$",
      "$+2{,}5\\text{ dioptri}$",
      "$+4{,}0\\text{ dioptri}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Penderita hipermetropi ditolong lensa cembung (positif) agar buku pada jarak baca normal ($s = 25\\text{ cm}$) dibentuk bayangan mayanya di titik dekat penderita ($s' = -PP$):<br>$$P = \\frac{100}{s_n} - \\frac{100}{PP}$$",
      steps: "1. Substitusikan $s_n = 25\\text{ cm}$ dan $PP = 50\\text{ cm}$:<br>$$P = \\frac{100}{25} - \\frac{100}{50}$$<br>2. Lakukan pengurangan aljabar:<br>$$P = 4 - 2 = +2{,}0\\text{ dioptri}$$<br>3. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Hati-hati jangan sampai terbalik mengurangkan $\\frac{100}{50} - \\frac{100}{25} = -2\\text{ D}$. Hipermetropi selalu membutuhkan lensa berkekuatan positif."
    }
  },
  {
    id: "fis-gel-optik-mata-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-mata",
    category: "Mata dan Kacamata",
    difficulty: "mudah",
    statement: "Cacat mata presbiopi (mata tua) yang umumnya mulai dialami oleh orang lanjut usia disebabkan oleh ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Melemahnya daya akomodasi akibat berkurangnya elastisitas otot siliaris lensa mata",
      "Kelengkungan permukaan kornea mata yang tidak rata (tidak sferis)",
      "Lensa mata yang terlalu cembung permanen sehingga bayangan jatuh di depan retina",
      "Bola mata yang terlalu pendek sehingga bayangan jatuh di belakang retina",
      "Tekanan cairan humor aquous di dalam rongga mata yang meningkat drastis"
    ],
    correctIndex: 0,
    solution: {
      concept: "Presbiopi adalah penurunan kemampuan akomodasi mata yang terjadi secara alami seiring bertambahnya usia akibat penuaan fisik. Otot siliaris kehilangan kelenturannya sehingga lensa mata tidak dapat menebal secara maksimal untuk melihat dekat maupun menipis maksimal untuk melihat jauh.",
      steps: "1. Tinjau definisi presbiopi: Berhubungan langsung dengan penurunan daya akomodasi akibat penuaan otot siliaris.<br>2. Akibatnya, titik dekat ($PP$) menjauh dan titik jauh ($PR$) mendekat.<br>3. Pilihan yang tepat adalah opsi A.",
      pitfalls: "Opsi B adalah penyebab astigmatisme, opsi C adalah miopi anatomis, opsi D adalah hipermetropi anatomis, dan opsi E adalah glaukoma."
    }
  },
  {
    id: "fis-gel-optik-mata-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-mata",
    category: "Mata dan Kacamata",
    difficulty: "mudah",
    statement: "Penderita cacat mata astigmatisme tidak dapat melihat garis-garis tegak (vertikal) dan mendatar (horizontal) secara bersamaan dengan ketajaman yang sama. Cacat mata ini dapat dikoreksi dengan menggunakan kacamata berlensa ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Cekung (negatif)",
      "Cembung (positif)",
      "Silindris",
      "Bifokal",
      "Cekung-cembung (meniskus)"
    ],
    correctIndex: 2,
    solution: {
      concept: "Astigmatisme disebabkan oleh lengkungan kornea atau lensa mata yang tidak sferis sempurna (memiliki jari-jari kelengkungan yang berbeda pada meridian horizontal dan vertikal). Untuk mengimbanginya, dibutuhkan lensa silindris (cylindrical lens) yang memiliki kelengkungan hanya pada satu aksis tertentu.",
      steps: "1. Identifikasi cacat mata: Astigmatisme (mata silinder).<br>2. Lensa koreksi yang sesuai secara medis dan optik adalah lensa silindris.<br>3. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Kacamata bifokal (opsi D) digunakan untuk penderita presbiopi yang membutuhkan koreksi melihat jauh sekaligus membaca dekat."
    }
  }
];
