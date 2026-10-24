/**
 * Batch Task: TASK_fis-kin-ukur-angka_MEDIUM
 * SubTopic: Angka Penting (fis-kin-ukur-angka)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    "id": "fis-kin-ukur-angka-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Angka Penting",
    "difficulty": "sedang",
    "statement": "Sebuah pelat logam tipis berbentuk bujur sangkar (persegi) memiliki luas permukaan terukur sebesar $129{,}96\\text{ cm}^2$. Berdasarkan kaidah angka penting untuk operasi penarikan akar kuadrat, panjang sisi pelat logam tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENARIKAN AKAR KUADRAT PADA OPERASI ANGKA PENTING",
    "options": [
      "$11{,}400\\text{ cm}$",
      "$11{,}4\\text{ cm}$",
      "$11{,}40\\text{ cm}$",
      "$11\\text{ cm}$",
      "$11{,}4000\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Aturan penarikan akar dan pemangkatan pada angka penting: hasil penarikan akar kuadrat memiliki jumlah angka penting yang sama persis dengan jumlah angka penting dari bilangan yang ditarik akarnya.",
      "steps": "1) Menghitung jumlah angka penting bilangan asal:<br>Luas $A = 129{,}96\\text{ cm}^2$ memiliki 5 angka penting (1, 2, 9, 9, 6).<br>2) Menghitung panjang sisi secara matematis:<br>$$s = \\sqrt{A} = \\sqrt{129{,}96\\text{ cm}^2} = 11{,}4\\text{ cm}$$<br>3) Menyesuaikan hasil dengan kaidah 5 angka penting:<br>Agar hasil penarikan akar memiliki tepat 5 angka penting, kita menambahkan angka nol pada desimal:<br>$$s = 11{,}400\\text{ cm}$$.",
      "pitfalls": "Siswa sering mengira hasil cukup ditulis $11{,}4\\text{ cm}$ (opsi B, 3 AP) atau $11{,}40\\text{ cm}$ (opsi C, 4 AP) mengikuti pembulatan desimal, padahal kaidah baku penarikan akar mensyaratkan jumlah angka penting sama dengan bilangan semula (5 AP)."
    }
  },
  {
    "id": "fis-kin-ukur-angka-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Angka Penting",
    "difficulty": "sedang",
    "statement": "Sebuah mobil mainan bergerak menempuh dua lintasan lurus berturut-turut. Lintasan pertama ditempuh sejauh $s_1 = 45{,}2\\text{ m}$ dan lintasan kedua ditempuh sejauh $s_2 = 120{,}85\\text{ m}$. Jika waktu total yang dibutuhkan mobil untuk melintasi kedua jalur tersebut terukur sebesar $t = 12{,}5\\text{ s}$, maka kelajuan rata-rata mobil mainan tersebut menurut kaidah angka penting adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "KOMBINASI OPERASI PENJUMLAHAN DAN PEMBAGIAN ANGKA PENTING",
    "options": [
      "$13{,}3\\text{ m/s}$",
      "$13{,}288\\text{ m/s}$",
      "$13{,}29\\text{ m/s}$",
      "$13\\text{ m/s}$",
      "$13{,}28\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada operasi gabungan, aturan penjumlahan (angka taksiran paling tidak teliti) diterapkan terlebih dahulu pada jarak total, kemudian aturan pembagian (jumlah angka penting tersedikit) diterapkan pada perhitungan kelajuan rata-rata $v = \\frac{s_{\\text{total}}}{t}$.",
      "steps": "1) Menghitung jarak total dengan aturan penjumlahan:<br>$$s_{\\text{total}} = 45{,}2\\text{ m} + 120{,}85\\text{ m} = 166{,}05\\text{ m}$$<br>Karena $45{,}2$ memiliki 1 desimal taksiran, maka jarak total dibulatkan menjadi $166{,}1\\text{ m}$ (memiliki 4 angka penting).<br>2) Menghitung kelajuan rata-rata:<br>Waktu $t = 12{,}5\\text{ s}$ memiliki 3 angka penting.<br>$$v = \\frac{166{,}1\\text{ m}}{12{,}5\\text{ s}} = 13{,}288\\text{ m/s}$$<br>3) Membulatkan hasil ke 3 angka penting:<br>$13{,}288$ dibulatkan ke 3 angka penting menjadi $13{,}3\\text{ m/s}$.",
      "pitfalls": "Menuliskan seluruh angka desimal hasil pembagian $13{,}288\\text{ m/s}$ (opsi B) atau membulatkan ke 4 angka penting $13{,}29\\text{ m/s}$ (opsi C) tanpa menyadari waktu $t = 12{,}5$ membatasi hasil akhir hanya pada 3 angka penting."
    }
  },
  {
    "id": "fis-kin-ukur-angka-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Angka Penting",
    "difficulty": "sedang",
    "statement": "Sebuah pipa silinder tembaga berongga memiliki jari-jari luar $R = 5{,}25\\text{ cm}$ dan jari-jari dalam $r = 4{,}75\\text{ cm}$. Nilai selisih kuadrat jari-jari $(R^2 - r^2)$ yang digunakan untuk menghitung luas penampang cincin pipa menurut kaidah angka penting adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENGURANGAN PADA OPERASI SELISIH KUADRAT ANGKA PENTING",
    "options": [
      "$5{,}00\\text{ cm}^2$",
      "$5\\text{ cm}^2$",
      "$5{,}0\\text{ cm}^2$",
      "$5{,}000\\text{ cm}^2$",
      "$5{,}0000\\text{ cm}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada operasi kuadrat, angka penting awal menentukan presisi hasil pemangkatan. Pada operasi pengurangan, hasil akhir ditentukan oleh posisi desimal taksiran paling tidak teliti.",
      "steps": "1) Menghitung kuadrat masing-masing jari-jari (masing-masing 3 angka penting):<br>$$R^2 = (5{,}25\\text{ cm})^2 = 27{,}5625\\text{ cm}^2 \\to 27{,}6\\text{ cm}^2\\text{ (atau simpan desimal penuh } 27{,}56\\text{)}$$<br>$$r^2 = (4{,}75\\text{ cm})^2 = 22{,}5625\\text{ cm}^2 \\to 22{,}6\\text{ cm}^2\\text{ (atau simpan desimal penuh } 22{,}56\\text{)}$$<br>2) Menghitung selisih kuadrat secara eksak terlebih dahulu:<br>$$R^2 - r^2 = 27{,}5625 - 22{,}5625 = 5{,}0000\\text{ cm}^2$$<br>3) Menentukan angka penting hasil pengurangan:<br>Karena $R$ dan $r$ awal diukur dengan ketelitian 2 tempat desimal ($0{,}01\\text{ cm}$), selisih nilai harus konsisten dengan presisi 2 desimal ($5{,}00\\text{ cm}^2$).",
      "pitfalls": "Memilih $5\\text{ cm}^2$ (opsi B) dengan menghapus angka nol di belakang desimal, padahal angka nol desimal menunjukkan presisi pengukuran yang telah dicapai."
    }
  },
  {
    "id": "fis-kin-ukur-angka-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Angka Penting",
    "difficulty": "sedang",
    "statement": "Dalam uji analisis salinitas, seorang peneliti menimbang kristal garam terlarut sebesar $m_g = 3{,}50\\text{ g}$ dari suatu sampel air laut bermassa total $m_{\\text{sampel}} = 98{,}25\\text{ g}$. Persentase kadar garam $(\\frac{m_g}{m_{\\text{sampel}}} \\times 100\\%)$ yang dilaporkan sesuai kaidah angka penting adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PERHITUNGAN PERSENTASE KADAR MENURUT ATURAN ANGKA PENTING",
    "options": [
      "$3{,}56\\%$",
      "$3{,}562\\%$",
      "$3{,}5623\\%$",
      "$3{,}6\\%$",
      "$4\\%$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perhitungan persentase melibatkan operasi pembagian dan perkalian dengan faktor 100% (bilangan eksak). Jumlah angka penting hasil akhir ditentukan oleh komponen pengukuran dengan angka penting paling sedikit.",
      "steps": "1) Menentukan angka penting:<br>• Massa garam $m_g = 3{,}50\\text{ g}$ (memiliki 3 angka penting)<br>• Massa sampel $m_{\\text{sampel}} = 98{,}25\\text{ g}$ (memiliki 4 angka penting)<br>• Faktor $100\\%$ adalah angka eksak (tidak membatasi angka penting)<br>2) Angka penting paling sedikit adalah 3 angka penting.<br>3) Menghitung nilai matematis:<br>$$P = \\frac{3{,}50\\text{ g}}{98{,}25\\text{ g}} \\times 100\\% = 3{,}56234...\\%$$<br>4) Membulatkan ke 3 angka penting:<br>Hasil dibulatkan menjadi $3{,}56\\%$.",
      "pitfalls": "Menyajikan 4 angka penting $3{,}562\\%$ (opsi B) mengikuti massa sampel, padahal massa garam terlarut hanya memiliki 3 angka penting ($3{,}50$)."
    }
  },
  {
    "id": "fis-kin-ukur-angka-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Angka Penting",
    "difficulty": "sedang",
    "statement": "Kaidah pembulatan angka penting standar internasional (round-to-even rule) menyatakan bahwa jika angka paling kanan yang dibuang tepat bernilai $5$ (atau diikuti angka-angka nol saja), maka angka terakhir yang dipertahankan dibulatkan ke bilangan genap terdekat. Diberikan dua hasil pengukuran suhu: $T_1 = 24{,}350\\text{ }^\\circ\\text{C}$ dan $T_2 = 24{,}650\\text{ }^\\circ\\text{C}$. Hasil pembulatan kedua suhu tersebut hingga satu tempat desimal berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "ATURAN PEMBULATAN KE ANGKA GENAP TERDEKAT (ROUND TO EVEN)",
    "options": [
      "$24{,}4\\text{ }^\\circ\\text{C}$ dan $24{,}6\\text{ }^\\circ\\text{C}$",
      "$24{,}4\\text{ }^\\circ\\text{C}$ dan $24{,}7\\text{ }^\\circ\\text{C}$",
      "$24{,}3\\text{ }^\\circ\\text{C}$ dan $24{,}7\\text{ }^\\circ\\text{C}$",
      "$24{,}3\\text{ }^\\circ\\text{C}$ dan $24{,}6\\text{ }^\\circ\\text{C}$",
      "$24{,}4\\text{ }^\\circ\\text{C}$ dan $24{,}65\\text{ }^\\circ\\text{C}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Aturan pembulatan genap (round-to-even / Gaussian rounding): jika angka yang dibuang tepat sama dengan 5 (atau 5 diikuti nol), maka jika angka sebelumnya ganjil dibulatkan ke atas menjadi genap, dan jika angka sebelumnya genap dibiarkan tetap (tidak berubah).",
      "steps": "1) Meninjau $T_1 = 24{,}350\\text{ }^\\circ\\text{C}$:<br>Angka yang dibuang adalah 5 diikuti nol. Angka terakhir yang dipertahankan adalah 3 (ganjil). Karena ganjil, dibulatkan ke atas menjadi bilangan genap terdekat, yaitu $4$. Maka $T_1$ menjadi $24{,}4\\text{ }^\\circ\\text{C}$.<br>2) Meninjau $T_2 = 24{,}650\\text{ }^\\circ\\text{C}$:<br>Angka yang dibuang adalah 5 diikuti nol. Angka terakhir yang dipertahankan adalah 6 (genap). Karena sudah genap, angka tersebut dibiarkan tetap. Maka $T_2$ menjadi $24{,}6\\text{ }^\\circ\\text{C}$.<br>3) Maka hasil pembulatan adalah $24{,}4\\text{ }^\\circ\\text{C}$ dan $24{,}6\\text{ }^\\circ\\text{C}$.",
      "pitfalls": "Aturan pembulatan sekolah dasar tradisional selalu menaikkan angka 5 ke atas ($24{,}4$ dan $24{,}7$, opsi B). Dalam fisika dan metrologi standar ISO, aturan pembulatan genap diterapkan untuk mencegah penumpukan bias statistika positif."
    }
  }
];
