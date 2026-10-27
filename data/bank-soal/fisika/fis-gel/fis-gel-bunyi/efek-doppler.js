/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Bunyi (fis-gel-bunyi)
 * Sub-Bab: Efek Doppler (fis-gel-bunyi-doppler)
 * Slug: efek-doppler
 * Indikator: Pergeseran frekuensi akibat gerak relatif sumber bunyi dan pendengar.
 * 
 * Total Butir Soal: 14 (Mudah: 5, Sedang: 9, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-bunyi-doppler";
  const subTopicSlug = "efek-doppler";
  const questions = [
  {
    "id": "fis-gel-bunyi-doppler-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-doppler",
    "category": "Efek Doppler",
    "difficulty": "mudah",
    "statement": "Berdasarkan prinsip efek Doppler pada gelombang bunyi di udara, frekuensi gelombang bunyi yang didengar oleh seorang pengamat ($f_p$) akan terukur lebih tinggi daripada frekuensi asli sumber bunyi ($f_s$) apabila ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Jarak antara sumber bunyi dan pengamat semakin berkurang (saling mendekati)",
      "Jarak antara sumber bunyi dan pengamat semakin bertambah (saling menjauhi)",
      "Sumber bunyi bergerak menjauhi pengamat yang diam di tempat",
      "Pengamat bergerak menjauhi sumber bunyi yang diam di tempat",
      "Sumber bunyi dan pengamat bergerak searah dengan kelajuan yang persis sama"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Efek Doppler adalah gejala perubahan frekuensi yang terdeteksi akibat gerak relatif antara sumber bunyi dan pengamat:<br>$$f_p = \\frac{v \\pm v_p}{v \\mp v_s} f_s$$<br>Jika jarak relatif berkurang (saling mendekati), muka gelombang yang diterima per satuan waktu semakin rapat $\\implies f_p > f_s$.",
      "steps": "1. Analisis kondisi fisis: Saat sumber dan pendengar saling mendekati, panjang gelombang efektif memendek atau laju relatif penerimaan muka gelombang meningkat.<br>2. Hal ini menyebabkan frekuensi yang diterima ($f_p$) lebih tinggi daripada frekuensi sumber ($f_s$).<br>3. Jawaban yang tepat adalah pilihan A.",
      "pitfalls": "Jika keduanya bergerak searah dengan kelajuan sama, jarak relatif konstan sehingga tidak terjadi efek Doppler ($f_p = f_s$). Jika saling menjauhi, frekuensi akan terdengar lebih rendah ($f_p < f_s$)."
    },
    "subTopicSlug": "efek-doppler",
    "bab": "Gelombang dan Optik",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Efek Doppler adalah gejala perubahan frekuensi yang terdeteksi akibat gerak relatif antara sumber bunyi dan pengamat: $$f_p = \\frac{v \\pm v_p}{v \\mp v_s} f_s$$ Jika jarak relatif berkurang (saling mendekati), muka gelombang yang diterima per satuan waktu semakin rapat $\\implies f_p > f_s$. **Tips:** Jika keduanya bergerak searah dengan kelajuan sama, jarak relatif konstan sehingga tidak terjadi efek Doppler ($f_p = f_s$)."
  },
  {
    "id": "fis-gel-bunyi-doppler-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-doppler",
    "category": "Efek Doppler",
    "difficulty": "mudah",
    "statement": "Sebuah mobil ambulans melaju dengan kelajuan $20\\text{ m/s}$ sambil membunyikan sirine dengan frekuensi $640\\text{ Hz}$ mendekati seorang pejalan kaki yang berdiri diam di trotoar. Jika cepat rambat bunyi di udara saat itu adalah $340\\text{ m/s}$, frekuensi sirine yang didengar oleh pejalan kaki tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$600\\text{ Hz}$",
      "$640\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$760\\text{ Hz}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Persamaan efek Doppler ketika sumber bunyi bergerak mendekati pendengar yang diam ($v_p = 0$) adalah:<br>$$f_p = \\frac{v}{v - v_s} f_s$$",
      "steps": "1. Identifikasi parameter: $v = 340\\text{ m/s}$, $v_s = 20\\text{ m/s}$ (tanda negatif karena sumber mendekat), $v_p = 0$, dan $f_s = 640\\text{ Hz}$.<br>2. Masukkan ke dalam rumus efek Doppler:<br>$$f_p = \\frac{340}{340 - 20} \\times 640 = \\frac{340}{320} \\times 640$$<br>3. Sederhanakan perhitungan:<br>$$f_p = 340 \\times \\frac{640}{320} = 340 \\times 2 = 680\\text{ Hz}$$<br>4. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Hati-hati dengan tanda pada penyebut: sumber mendekati pendengar menggunakan tanda minus ($v - v_s$), bukan plus. Jika menggunakan tanda plus akan menghasilkan $604\\text{ Hz}$."
    },
    "subTopicSlug": "efek-doppler",
    "bab": "Gelombang dan Optik",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Persamaan efek Doppler ketika sumber bunyi bergerak mendekati pendengar yang diam ($v_p = 0$) adalah: $$f_p = \\frac{v}{v - v_s} f_s$$. **Tips:** Hati-hati dengan tanda pada penyebut: sumber mendekati pendengar menggunakan tanda minus ($v - v_s$), bukan plus."
  },
  {
    "id": "fis-gel-bunyi-doppler-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-doppler",
    "category": "Efek Doppler",
    "difficulty": "mudah",
    "statement": "Sebuah sirine pos penjagaan yang diam memancarkan gelombang bunyi berfrekuensi $680\\text{ Hz}$. Seorang pengendara sepeda motor melaju mendekati pos penjagaan tersebut dengan kelajuan $10\\text{ m/s}$. Jika kelajuan rambat bunyi di udara adalah $340\\text{ m/s}$, frekuensi sirine yang didengar oleh pengendara motor adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$660\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$700\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$750\\text{ Hz}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Persamaan efek Doppler ketika pendengar bergerak mendekati sumber bunyi yang diam ($v_s = 0$) adalah:<br>$$f_p = \\frac{v + v_p}{v} f_s$$",
      "steps": "1. Identifikasi parameter: $v = 340\\text{ m/s}$, $v_p = +10\\text{ m/s}$ (tanda positif karena pendengar mendekat), $v_s = 0$, dan $f_s = 680\\text{ Hz}$.<br>2. Substitusikan nilai ke persamaan:<br>$$f_p = \\frac{340 + 10}{340} \\times 680 = \\frac{350}{340} \\times 680$$<br>3. Sederhanakan perhitungan:<br>$$f_p = 350 \\times \\frac{680}{340} = 350 \\times 2 = 700\\text{ Hz}$$<br>4. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Pendengar mendekati sumber menggunakan tanda tambah ($+$) di pembilang. Jika salah menggunakan tanda minus, akan diperoleh $660\\text{ Hz}$ (opsi A)."
    },
    "subTopicSlug": "efek-doppler",
    "bab": "Gelombang dan Optik",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Persamaan efek Doppler ketika pendengar bergerak mendekati sumber bunyi yang diam ($v_s = 0$) adalah: $$f_p = \\frac{v + v_p}{v} f_s$$. **Tips:** Pendengar mendekati sumber menggunakan tanda tambah ($+$) di pembilang."
  },
  {
    "id": "fis-gel-bunyi-doppler-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-doppler",
    "category": "Efek Doppler",
    "difficulty": "mudah",
    "statement": "Sebuah lokomotif kereta api bergerak menjauhi stasiun dengan kelajuan tetap $20\\text{ m/s}$ sambil membunyikan peluit berfrekuensi $720\\text{ Hz}$. Seorang petugas stasiun yang berdiri diam mendengarkan bunyi peluit tersebut dengan frekuensi sebesar .... (Cepat rambat bunyi di udara $340\\text{ m/s}$).",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$640\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$740\\text{ Hz}$",
      "$760\\text{ Hz}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Ketika sumber bunyi bergerak menjauhi pendengar yang diam ($v_p = 0$), frekuensi yang didengar memenuhi persamaan:<br>$$f_p = \\frac{v}{v + v_s} f_s$$",
      "steps": "1. Identifikasi nilai yang diketahui: $v = 340\\text{ m/s}$, $v_s = 20\\text{ m/s}$ (tanda positif karena sumber menjauh), $v_p = 0$, dan $f_s = 720\\text{ Hz}$.<br>2. Masukkan ke rumus efek Doppler:<br>$$f_p = \\frac{340}{340 + 20} \\times 720 = \\frac{340}{360} \\times 720$$<br>3. Sederhanakan pecahan:<br>$$f_p = 340 \\times \\frac{720}{360} = 340 \\times 2 = 680\\text{ Hz}$$<br>4. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Sumber menjauh $\\implies$ tanda di penyebut adalah plus ($v + v_s$) sehingga nilai penyebut membesar dan frekuensi $f_p$ menjadi lebih kecil dari $f_s$."
    },
    "subTopicSlug": "efek-doppler",
    "bab": "Gelombang dan Optik",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Ketika sumber bunyi bergerak menjauhi pendengar yang diam ($v_p = 0$), frekuensi yang didengar memenuhi persamaan: $$f_p = \\frac{v}{v + v_s} f_s$$."
  },
  {
    "id": "fis-gel-bunyi-doppler-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-doppler",
    "category": "Efek Doppler",
    "difficulty": "mudah",
    "statement": "Seorang pengendara sepeda motor melaju menjauhi sebuah pengeras suara masjid yang diam dengan kecepatan $15\\text{ m/s}$. Pengeras suara memancarkan bunyi azan dengan frekuensi $680\\text{ Hz}$. Jika laju rambat bunyi di udara adalah $340\\text{ m/s}$, frekuensi bunyi yang didengar oleh pengendara motor tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$630\\text{ Hz}$",
      "$650\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$710\\text{ Hz}$",
      "$725\\text{ Hz}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Ketika pendengar bergerak menjauhi sumber bunyi yang diam ($v_s = 0$), frekuensi yang didengar berkurang dan memenuhi persamaan:<br>$$f_p = \\frac{v - v_p}{v} f_s$$",
      "steps": "1. Identifikasi variabel: $v = 340\\text{ m/s}$, $v_p = 15\\text{ m/s}$ (tanda minus karena pendengar menjauh), $v_s = 0$, dan $f_s = 680\\text{ Hz}$.<br>2. Masukkan ke rumus efek Doppler:<br>$$f_p = \\frac{340 - 15}{340} \\times 680 = \\frac{325}{340} \\times 680$$<br>3. Sederhanakan:<br>$$f_p = 325 \\times \\frac{680}{340} = 325 \\times 2 = 650\\text{ Hz}$$<br>4. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Pendengar menjauh menyebabkan pembilang berkurang ($v - v_p$). Pastikan tidak terbalik menempatkan kecepatan pendengar di penyebut."
    },
    "subTopicSlug": "efek-doppler",
    "bab": "Gelombang dan Optik",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Ketika pendengar bergerak menjauhi sumber bunyi yang diam ($v_s = 0$), frekuensi yang didengar berkurang dan memenuhi persamaan: $$f_p = \\frac{v - v_p}{v} f_s$$. **Tips:** Pendengar menjauh menyebabkan pembilang berkurang ($v - v_p$)."
  },
  {
    "id": "fis-gel-bunyi-doppler-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-doppler",
    "category": "Efek Doppler",
    "difficulty": "sedang",
    "statement": "Sebuah mobil patroli polisi bergerak dengan kelajuan $30\\text{ m/s}$ ke arah timur sambil membunyikan sirine dengan frekuensi $930\\text{ Hz}$. Dari arah berlawanan, sebuah mobil sedan melaju ke barat dengan kelajuan $20\\text{ m/s}$ saling mendekati mobil polisi tersebut. Jika cepat rambat bunyi di udara adalah $340\\text{ m/s}$, frekuensi sirine yang didengar oleh pengemudi mobil sedan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$930\\text{ Hz}$",
      "$980\\text{ Hz}$",
      "$1040\\text{ Hz}$",
      "$1080\\text{ Hz}$",
      "$1120\\text{ Hz}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Ketika sumber bunyi dan pendengar saling mendekati di sepanjang garis lurus yang sama, konvensi tanda Efek Doppler adalah pendengar bernilai positif ($+v_p$) dan sumber bernilai negatif ($-v_s$):<br>$$f_p = \\left(\\frac{v + v_p}{v - v_s}\\right) f_s$$",
      "steps": "1. Identifikasi parameter gerak: $v = 340\\text{ m/s}$, $v_p = 20\\text{ m/s}$ (mendekat $\\implies +$), $v_s = 30\\text{ m/s}$ (mendekat $\\implies -$), dan $f_s = 930\\text{ Hz}$.<br>2. Substitusikan ke rumus efek Doppler:<br>$$f_p = \\left(\\frac{340 + 20}{340 - 30}\\right) \\times 930 = \\left(\\frac{360}{310}\\right) \\times 930$$<br>3. Sederhanakan perhitungan:<br>$$f_p = 360 \\times \\frac{930}{310} = 360 \\times 3 = 1080\\text{ Hz}$$<br>4. Jawaban yang benar adalah pilihan D.",
      "pitfalls": "Perhatikan bahwa kedua pihak saling mendekati, sehingga pembilang bertambah besar ($340 + 20 = 360$) dan penyebut berkurang ($340 - 30 = 310$), melipatgandakan efek peningkatan frekuensi."
    },
    "subTopicSlug": "efek-doppler",
    "bab": "Gelombang dan Optik",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Ketika sumber bunyi dan pendengar saling mendekati di sepanjang garis lurus yang sama, konvensi tanda Efek Doppler adalah pendengar bernilai positif ($+v_p$) dan sumber bernilai negatif ($-v_s$): $$f_p = \\left(\\frac{v + v_p}{v - v_s}\\right) f_s$$."
  },
  {
    "id": "fis-gel-bunyi-doppler-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-doppler",
    "category": "Efek Doppler",
    "difficulty": "sedang",
    "statement": "Dua mobil A dan B mula-mula berpapasan di jalan lurus kemudian bergerak saling menjauhi. Mobil A (sumber bunyi) melaju dengan kelajuan $20\\text{ m/s}$ sambil membunyikan klakson $720\\text{ Hz}$, sedangkan mobil B (pendengar) melaju dengan kelajuan $20\\text{ m/s}$. Jika laju rambat bunyi di udara saat itu $340\\text{ m/s}$, frekuensi klakson yang didengar oleh pengendara di mobil B adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$600\\text{ Hz}$",
      "$640\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$760\\text{ Hz}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Ketika sumber bunyi dan pendengar saling menjauhi, tanda kecepatan adalah pendengar negatif ($-v_p$) dan sumber bunyi positif ($+v_s$):<br>$$f_p = \\left(\\frac{v - v_p}{v + v_s}\\right) f_s$$",
      "steps": "1. Identifikasi parameter: $v = 340\\text{ m/s}$, $v_p = 20\\text{ m/s}$ (menjauh $\\implies -$), $v_s = 20\\text{ m/s}$ (menjauh $\\implies +$), dan $f_s = 720\\text{ Hz}$.<br>2. Masukkan ke rumus efek Doppler:<br>$$f_p = \\left(\\frac{340 - 20}{340 + 20}\\right) \\times 720 = \\left(\\frac{320}{360}\\right) \\times 720$$<br>3. Sederhanakan pecahan:<br>$$f_p = 320 \\times \\frac{720}{360} = 320 \\times 2 = 640\\text{ Hz}$$<br>4. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Karena kedua pihak bergerak menjauhi satu sama lain, pembilang mengecil dan penyebut membesar, menghasilkan frekuensi penerimaan yang jauh lebih rendah daripada frekuensi sumber aslinya."
    },
    "subTopicSlug": "efek-doppler",
    "bab": "Gelombang dan Optik",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Ketika sumber bunyi dan pendengar saling menjauhi, tanda kecepatan adalah pendengar negatif ($-v_p$) dan sumber bunyi positif ($+v_s$): $$f_p = \\left(\\frac{v - v_p}{v + v_s}\\right) f_s$$."
  },
  {
    "id": "fis-gel-bunyi-doppler-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-doppler",
    "category": "Efek Doppler",
    "difficulty": "sedang",
    "statement": "Sebuah mobil ambulans bergerak dengan kelajuan $20\\text{ m/s}$ mendekati seorang pengamat yang diam di tepi jalan sambil membunyikan sirine berfrekuensi $640\\text{ Hz}$. Pada saat itu, angin bertiup searah dengan arah gerak ambulans (menuju pengamat) dengan kelajuan $10\\text{ m/s}$. Jika cepat rambat bunyi di udara tenang adalah $330\\text{ m/s}$, frekuensi sirine yang didengar oleh pengamat adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$640\\text{ Hz}$",
      "$660\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$700\\text{ Hz}$",
      "$720\\text{ Hz}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pengaruh angin dengan kecepatan $v_w$ yang bertiup searah dengan perambatan gelombang bunyi menuju pendengar menyebabkan kecepatan efektif bunyi di udara menjadi $(v + v_w)$:<br>$$f_p = \\left(\\frac{(v + v_w) \\pm v_p}{(v + v_w) \\mp v_s}\\right) f_s$$",
      "steps": "1. Kecepatan bunyi efektif terhadap tanah: $v' = v + v_w = 330 + 10 = 340\\text{ m/s}$.<br>2. Pendengar diam: $v_p = 0$.<br>3. Sumber bergerak mendekati pendengar: tanda penyebut bertanda minus ($-v_s = -20\\text{ m/s}$).<br>4. Masukkan ke rumus efek Doppler dengan angin:<br>$$f_p = \\left(\\frac{340}{340 - 20}\\right) \\times 640 = \\frac{340}{320} \\times 640 = 340 \\times 2 = 680\\text{ Hz}$$<br>5. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Jika angin bertiup searah perambatan gelombang bunyi, kecepatan angin ditambahkan ke kecepatan gelombang bunyi ($v + v_w$). Hati-hati jangan mengurangi jika arah angin membantu perambatan bunyi menuju pendengar."
    },
    "subTopicSlug": "efek-doppler",
    "bab": "Gelombang dan Optik",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Pengaruh angin dengan kecepatan $v_w$ yang bertiup searah dengan perambatan gelombang bunyi menuju pendengar menyebabkan kecepatan efektif bunyi di udara menjadi $(v + v_w)$: $$f_p = \\left(\\frac{(v + v_w) \\pm v_p}{(v + v_w) \\mp v_s}\\right) f_s$$. **Tips:** Jika angin bertiup searah perambatan gelombang bunyi, kecepatan angin ditambahkan ke kecepatan gelombang bunyi ($v + v_w$)."
  },
  {
    "id": "fis-gel-bunyi-doppler-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-doppler",
    "category": "Efek Doppler",
    "difficulty": "sedang",
    "statement": "Sebuah mobil melaju dengan kecepatan tetap $10\\text{ m/s}$ lurus mendekati dinding tebing tegak sambil membunyikan klakson dengan frekuensi $660\\text{ Hz}$. Gelombang bunyi tersebut dipantulkan oleh tebing dan didengar kembali oleh pengemudi mobil. Jika cepat rambat bunyi di udara adalah $340\\text{ m/s}$, frekuensi pantulan bunyi yang didengar oleh pengemudi mobil adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$660\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$700\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$740\\text{ Hz}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Peristiwa pantulan pada dinding diam diselesaikan dalam dua tahap:<br>Tahap 1: Dinding bertindak sebagai pendengar diam menerima bunyi dari sumber yang mendekat ($v_p = 0, v_s = 10\\text{ m/s}$):<br>$$f_{\\text{tebing}} = \\left(\\frac{v}{v - v_s}\\right) f_s$$<br>Tahap 2: Dinding memantulkan kembali bunyi ($f_{\\text{pantul}} = f_{\\text{tebing}}$) dan bertindak sebagai sumber diam. Pengemudi bertindak sebagai pendengar yang mendekat ($v_p = 10\\text{ m/s}, v_s = 0$):<br>$$f_p = \\left(\\frac{v + v_p}{v}\\right) f_{\\text{tebing}} = \\left(\\frac{v + v_{\\text{mobil}}}{v - v_{\\text{mobil}}}\\right) f_s$$",
      "steps": "1. Substitusikan nilai $v = 340\\text{ m/s}$, $v_{\\text{mobil}} = 10\\text{ m/s}$, dan $f_s = 660\\text{ Hz}$:<br>$$f_p = \\left(\\frac{340 + 10}{340 - 10}\\right) \\times 660 = \\left(\\frac{350}{330}\\right) \\times 660$$<br>2. Sederhanakan perhitungan:<br>$$f_p = 350 \\times \\frac{660}{330} = 350 \\times 2 = 700\\text{ Hz}$$<br>3. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Banyak siswa hanya menghitung frekuensi yang sampai di dinding tebing ($680\\text{ Hz}$, opsi B) dan lupa bahwa pengemudi bergerak mendekati tebing sehingga mengalami pergeseran Doppler kedua saat menyongsong gelombang pantulan."
    },
    "subTopicSlug": "efek-doppler",
    "bab": "Gelombang dan Optik",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Peristiwa pantulan pada dinding diam diselesaikan dalam dua tahap: Tahap 1: Dinding bertindak sebagai pendengar diam menerima bunyi dari sumber yang mendekat ($v_p = 0, v_s = 10\\text{ m/s}$): $$f_{\\text{tebing}} = \\left(\\frac{v}{v - v_s}\\right) f_s$$ Tahap 2: Dinding memantulkan kembali bunyi ($f_{\\text{pantul}} = f_{\\text{tebing}}$) dan bertindak sebagai sumber diam. Pengemudi bertindak sebagai pendengar yang mendekat ($v_p = 10\\text{ m/s}, v_s = 0$): $$f_p = \\left(\\frac{v + v_p}{v}\\right) f_{\\text{tebing}} = \\left(\\frac{v + v_{\\text{mobil}}}{v - v_{\\text{mobil}}}\\right) f_s$$."
  },
  {
    "id": "fis-gel-bunyi-doppler-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-doppler",
    "category": "Efek Doppler",
    "difficulty": "sedang",
    "statement": "Sebuah kereta api melaju dengan kelajuan konstan $v_s$ melewati stasiun. Seorang pengamat yang berdiri diam di peron stasiun mendengarkan frekuensi peluit kereta sebesar $360\\text{ Hz}$ saat kereta mendekat. Setelah kereta melewati peron dan menjauh dengan kelajuan yang sama, frekuensi peluit yang didengar pengamat turun menjadi $320\\text{ Hz}$. Jika kelajuan rambat bunyi di udara adalah $340\\text{ m/s}$, besar kelajuan kereta api ($v_s$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$20\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$30\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Perbandingan frekuensi saat sumber mendekati pendengar diam ($f_{\\text{dekat}}$) dan saat sumber menjauhi pendengar diam ($f_{\\text{jauh}}$):<br>$$f_{\\text{dekat}} = \\left(\\frac{v}{v - v_s}\\right) f_0, \\quad f_{\\text{jauh}} = \\left(\\frac{v}{v + v_s}\\right) f_0 \\implies \\frac{f_{\\text{dekat}}}{f_{\\text{jauh}}} = \\frac{v + v_s}{v - v_s}$$",
      "steps": "1. Substitusikan frekuensi yang terukur: $\\frac{360}{320} = \\frac{9}{8}$.<br>2. Bentuk persamaan rasio kecepatan:<br>$$\\frac{v + v_s}{v - v_s} = \\frac{9}{8}$$<br>3. Lakukan perkalian silang:<br>$$8(v + v_s) = 9(v - v_s) \\implies 8v + 8v_s = 9v - 9v_s$$<br>$$17v_s = v \\implies v_s = \\frac{v}{17}$$<br>4. Masukkan $v = 340\\text{ m/s}$:<br>$$v_s = \\frac{340}{17} = 20\\text{ m/s}$$<br>5. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Pastikan rasio yang dibentuk adalah $\\frac{v + v_s}{v - v_s}$ (kebalikan dari posisi penyebutnya). Jangan sampai salah dalam aljabar perkalian silang."
    },
    "subTopicSlug": "efek-doppler",
    "bab": "Gelombang dan Optik",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Perbandingan frekuensi saat sumber mendekati pendengar diam ($f_{\\text{dekat}}$) dan saat sumber menjauhi pendengar diam ($f_{\\text{jauh}}$): $$f_{\\text{dekat}} = \\left(\\frac{v}{v - v_s}\\right) f_0, \\quad f_{\\text{jauh}} = \\left(\\frac{v}{v + v_s}\\right) f_0 \\implies \\frac{f_{\\text{dekat}}}{f_{\\text{jauh}}} = \\frac{v + v_s}{v - v_s}$$. **Tips:** Pastikan rasio yang dibentuk adalah $\\frac{v + v_s}{v - v_s}$ (kebalikan dari posisi penyebutnya)."
  },
  {
    "id": "sedang-fis-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-doppler",
    "category": "Efek Doppler Gelombang Bunyi",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah mobil ambulans bergerak dengan kelajuan $20\\text{ m/s}$ sambil membunyikan sirine berfrekuensi $720\\text{ Hz}$ mendekati seorang pengamat yang berdiri diam di tepi jalan. Jika cepat rambat bunyi di udara adalah $340\\text{ m/s}$, frekuensi sirine yang didengar oleh pengamat tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$680\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$765\\text{ Hz}$",
      "$810\\text{ Hz}$",
      "$850\\text{ Hz}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Persamaan Efek Doppler:</strong><br>\n          $$f_p = \\left( \\frac{v \\pm v_p}{v \\mp v_s} \\right) f_s$$\n          • Pengamat diam: $v_p = 0$<br>\n          • Sumber mendekati pengamat: tanda pada penyebut bernilai negatif ($-v_s$), sehingga frekuensi terdengar lebih tinggi ($f_p > f_s$).\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Identifikasi variabel: $v = 340\\text{ m/s}$, $v_s = 20\\text{ m/s}$, $v_p = 0$, $f_s = 720\\text{ Hz}$.</li>\n          <li>Substitusikan ke rumus Efek Doppler:\n            $$f_p = \\left( \\frac{340}{340 - 20} \\right) \\times 720 = \\left( \\frac{340}{320} \\right) \\times 720$$\n          </li>\n          <li>Hitung nilai akhir:\n            $$f_p = \\frac{17}{16} \\times 720 = 17 \\times 45 = 765\\text{ Hz}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan aturan tanda: sumber mendekat selalu memperkecil penyebut ($v - v_s$), bukan memperbesar ($v + v_s$).\n        </div>\n      "
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "efek-doppler",
    "hint": "Persamaan Efek Doppler: $$f_p = \\left( \\frac{v \\pm v_p}{v \\mp v_s} \\right) f_s$$ • Pengamat diam: $v_p = 0$ • Sumber mendekati pengamat: tanda pada penyebut bernilai negatif ($-v_s$), sehingga frekuensi terdengar lebih tinggi ($f_p > f_s$). **Tips:** Perhatikan aturan tanda: sumber mendekat selalu memperkecil penyebut ($v - v_s$), bukan memperbesar ($v + v_s$)."
  },
  {
    "id": "drill-bun-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-doppler",
    "category": "Efek Doppler Sumber & Pendengar Saling Mendekat",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah kereta api bergerak mendekati stasiun dengan kelajuan $v_s = 20\\text{ m/s}$ sambil membunyikan peluit berfrekuensi $640\\text{ Hz}$. Pada saat bersamaan, seorang penumpang di peron bergerak berjalan mendekati kereta api dengan kelajuan $v_p = 10\\text{ m/s}$. Jika kelajuan rambat bunyi di udara adalah $v = 340\\text{ m/s}$, frekuensi peluit yang didengar oleh penumpang tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$700\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$660\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$600\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kaidah Tanda Efek Doppler:</strong><br>$$f_p = \\left( \\frac{v \\pm v_p}{v \\mp v_s} \\right) f_s$$<br>• Pendengar mendekati sumber $\\implies (+v_p)$ pada pembilang.<br>• Sumber mendekati pendengar $\\implies (-v_s)$ pada penyebut.<br>• Efek keduanya saling mendekat membuat frekuensi yang didengar semakin tinggi ($f_p > f_s$).</div>",
      "steps": "<ol><li>Substitusi nilai: $v = 340$, $v_p = 10$, $v_s = 20$, $f_s = 640$.</li><li>Pembilang: $v + v_p = 340 + 10 = 350\\text{ m/s}$.</li><li>Penyebut: $v - v_s = 340 - 20 = 320\\text{ m/s}$.</li><li>Hitung frekuensi: $f_p = \\frac{350}{320} \\times 640 = 350 \\times 2 = 700\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Mnemonic Tanda Doppler:</strong> \"Mendekat = Lebih Tinggi\" (pembilang ditambah, penyebut dikurang). \"Menjauh = Lebih Rendah\" (pembilang dikurang, penyebut ditambah).</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "efek-doppler",
    "hint": "Gunakan perumusan konsep fisis: $$f_p = \\left( \\frac{v \\pm v_p}{v \\mp v_s} \\right) f_s$$ • Pendengar mendekati sumber $\\implies (+v_p)$ pada pembilang. • Sumber mendekati pendengar $\\implies (-v_s)$ pada penyebut. • Efek keduanya saling mendekat membuat frekuensi yang didengar semakin tinggi ($f_p > f_s$). **Tips:** ⚠️ Mnemonic Tanda Doppler: \"Mendekat = Lebih Tinggi\" (pembilang ditambah, penyebut dikurang)."
  },
  {
    "id": "drill2-bun-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-doppler",
    "category": "Efek Doppler Sumber Menjauhi Pendengar Diam",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah mobil pemadam kebakaran membunyikan sirene berfrekuensi $f_s = 600\\text{ Hz}$ sambil bergerak menjauhi seorang pejalan kaki yang berdiri diam di tepi jalan dengan kelajuan $v_s = 20\\text{ m/s}$. Jika kelajuan rambat bunyi di udara saat itu adalah $v = 340\\text{ m/s}$, maka frekuensi bunyi yang didengar oleh pejalan kaki tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$566{,}7\\text{ Hz}$",
      "$637{,}5\\text{ Hz}$",
      "$600\\text{ Hz}$",
      "$540\\text{ Hz}$",
      "$580\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Efek Doppler Sumber Menjauh:</strong><br>Karena sumber menjauh ($+v_s$ pada penyebut), panjang gelombang merenggang sehingga frekuensi yang terdengar lebih rendah ($f_p < f_s$):<br>$$f_p = \\left( \\frac{v}{v + v_s} \\right) f_s$$</div>",
      "steps": "<ol><li>$v = 340\\text{ m/s}$, $v_s = 20\\text{ m/s}$, $v_p = 0$, $f_s = 600\\text{ Hz}$.</li><li>Penyebut: $v + v_s = 340 + 20 = 360\\text{ m/s}$.</li><li>$f_p = \\frac{340}{360} \\times 600 = \\frac{17}{18} \\times 600 = \\frac{17 \\times 100}{3} \\approx 566{,}67\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Logika Akal Sehat:</strong> Sumber menjauh pasti menghasilkan nada yang lebih rendah dari frekuensi asli ($< 600\\text{ Hz}$). Opsi di atas $600\\text{ Hz}$ langsung gugur!</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "efek-doppler",
    "hint": "Efek Doppler Sumber Menjauh: Karena sumber menjauh ($+v_s$ pada penyebut), panjang gelombang merenggang sehingga frekuensi yang terdengar lebih rendah ($f_p < f_s$): $$f_p = \\left( \\frac{v}{v + v_s} \\right) f_s$$. **Tips:** ⚠️ Logika Akal Sehat: Sumber menjauh pasti menghasilkan nada yang lebih rendah dari frekuensi asli ($< 600\\text{ Hz}$)."
  },
  {
    "id": "drill2-bun-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-doppler",
    "category": "Efek Doppler Pendengar Bergerak Menjauhi Sumber Diam",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah peluit stasiun diam membunyikan frekuensi $f_s = 680\\text{ Hz}$. Seorang penumpang menaiki sepeda motor bergerak menjauhi stasiun dengan kelajuan $v_p = 10\\text{ m/s}$. Jika kelajuan rambat bunyi di udara adalah $v = 340\\text{ m/s}$, frekuensi bunyi peluit yang didengar oleh pengendara motor tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$660\\text{ Hz}$",
      "$700\\text{ Hz}$",
      "$640\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$620\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Efek Doppler Pendengar Menjauh:</strong><br>$$f_p = \\left( \\frac{v - v_p}{v} \\right) f_s$$</div>",
      "steps": "<ol><li>$v = 340\\text{ m/s}$, $v_p = 10\\text{ m/s}$, $f_s = 680\\text{ Hz}$.</li><li>Pembilang: $v - v_p = 340 - 10 = 330\\text{ m/s}$.</li><li>Hitung frekuensi: $f_p = \\frac{330}{340} \\times 680 = 330 \\times 2 = 660\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Perhatikan Posisi Variabel:</strong> Kecepatan pendengar ($v_p$) selalu berada di <strong>pembilang</strong>, sedangkan kecepatan sumber ($v_s$) selalu berada di <strong>penyebut</strong>.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "efek-doppler",
    "hint": "Efek Doppler Pendengar Menjauh: $$f_p = \\left( \\frac{v - v_p}{v} \\right) f_s$$."
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
