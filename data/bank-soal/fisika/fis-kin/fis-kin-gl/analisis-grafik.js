/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lurus (fis-kin-gl)
 * Sub-Bab: Analisis Grafik Gerak Lurus (fis-kin-gl-grafik)
 * Slug: analisis-grafik
 * Indikator: Interpretasi grafik s-t, v-t, dan a-t, gradien kecepatan/percepatan, serta luas area grafik.
 * 
 * Total Butir Soal: 11 (Mudah: 5, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-gl-grafik";
  const subTopicSlug = "analisis-grafik";
  const questions = [
  {
    "id": "sup-fis-kin-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-grafik",
    "category": "Analisis Grafik Kecepatan-Waktu (v-t)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah partikel bergerak lurus dengan grafik kecepatan ($v$) terhadap waktu ($t$) berbentuk trapesium: bergerak dari keadaan diam hingga mencapai $v = 20\\text{ m/s}$ dalam waktu $4\\text{ s}$, kemudian melaju dengan kecepatan konstan selama $6\\text{ s}$, lalu direm beraturan hingga berhenti dalam selang waktu $2\\text{ s}$. Jarak total yang ditempuh partikel selama $12\\text{ detik}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$180\\text{ meter}$",
      "$200\\text{ meter}$",
      "$220\\text{ meter}$",
      "$240\\text{ meter}$",
      "$160\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Geometri Luas Kurva Grafik $v-t$:</strong><br>Jarak tempuh total partikel pada gerak satu dimensi sama dengan luas daerah di bawah kurva grafik kecepatan terhadap waktu ($s = \\int v\\,dt = \\text{Luas Bidang}$).</div>",
      "steps": "<ol><li>Bangun di bawah kurva berbentuk trapesium dengan alas bawah $a = 12\\text{ s}$ (dari $t = 0$ hingga $t = 12\\text{ s}$).</li><li>Sisi sejajar atas: selang saat kecepatan konstan $b = 6\\text{ s}$ (dari $t = 4$ hingga $t = 10\\text{ s}$).</li><li>Tinggi trapesium: $h = v_{\\max} = 20\\text{ m/s}$.</li><li>Luas trapesium: $s = \\frac{a + b}{2} \\times h = \\frac{12 + 6}{2} \\times 20 = 9 \\times 20 = 180\\text{ meter}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menghitung sisi sejajar atas $10\\text{ s}$ bukannya durasi kecepatan konstan ($10 - 4 = 6\\text{ s}$).</div>"
    },
    "bab": "Kinematika",
    "subBab": "Analisis Grafik Gerak Lurus",
    "subTopic": "Analisis Grafik Gerak Lurus",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "analisis-grafik",
    "hint": "Geometri Luas Kurva Grafik $v-t$: Jarak tempuh total partikel pada gerak satu dimensi sama dengan luas daerah di bawah kurva grafik kecepatan terhadap waktu ($s = \\int v\\,dt = \\text{Luas Bidang}$)."
  },
  {
    "id": "fis-kin-gl-grafik-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-grafik",
    "category": "Analisis Grafik Gerak Lurus",
    "difficulty": "mudah",
    "statement": "Dalam analisis kinematika gerak lurus, kemiringan (gradien) dari kurva grafik posisi terhadap waktu ($s-t$) dan luas area di bawah kurva grafik kecepatan terhadap waktu ($v-t$) berturut-turut merepresentasikan besaran ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Kecepatan dan perpindahan",
      "Percepatan dan kecepatan",
      "Perpindahan dan percepatan",
      "Kecepatan dan percepatan",
      "Gaya dan usaha"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Operasi kalkulus grafik gerak:<br>• Gradien grafik posisi-waktu ($s-t$) adalah laju perubahan posisi terhadap waktu: $m = \\frac{\\Delta s}{\\Delta t} = v$ (kecepatan).<br>• Luas daerah di bawah grafik kecepatan-waktu ($v-t$) adalah integral kecepatan terhadap waktu: $L = \\int v\\,dt = \\Delta s$ (perpindahan).",
      "steps": "1. Tinjau grafik $s-t$: Turunan pertama $\\frac{ds}{dt} = v$, sehingga gradien kurva adalah kecepatan.<br>2. Tinjau grafik $v-t$: Integral $\\int v\\,dt = \\Delta s$, sehingga luas area di bawah kurva adalah perpindahan.",
      "pitfalls": "Terkecoh antara gradien grafik $v-t$ (yang menyatakan percepatan) dengan gradien grafik $s-t$ (yang menyatakan kecepatan)."
    },
    "subTopicSlug": "analisis-grafik",
    "bab": "Kinematika",
    "subBab": "Analisis Grafik Gerak Lurus",
    "subTopic": "Analisis Grafik Gerak Lurus",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Operasi kalkulus grafik gerak: • Gradien grafik posisi-waktu ($s-t$) adalah laju perubahan posisi terhadap waktu: $m = \\frac{\\Delta s}{\\Delta t} = v$ (kecepatan). • Luas daerah di bawah grafik kecepatan-waktu ($v-t$) adalah integral kecepatan terhadap waktu: $L = \\int v\\,dt = \\Delta s$ (perpindahan). **Tips:** Terkecoh antara gradien grafik $v-t$ (yang menyatakan percepatan) dengan gradien grafik $s-t$ (yang menyatakan kecepatan)."
  },
  {
    "id": "fis-kin-gl-grafik-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-grafik",
    "category": "Analisis Grafik Gerak Lurus",
    "difficulty": "mudah",
    "statement": "Sebuah partikel bergerak lurus dengan grafik kecepatan terhadap waktu ($v-t$) berbentuk garis lurus naik dari titik asal $(0, 0)$ hingga titik $(5, 20)$ (di mana $t$ dalam sekon dan $v$ dalam $\\text{m/s}$). Jarak yang ditempuh partikel tersebut selama $5\\text{ sekon}$ pertama adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\text{ meter}$",
      "$100\\text{ meter}$",
      "$25\\text{ meter}$",
      "$20\\text{ meter}$",
      "$40\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jarak tempuh pada grafik $v-t$ dihitung secara langsung dari luas bangun geometri di bawah kurva terhadap sumbu waktu ($t$). Kurva dari $(0,0)$ ke $(5,20)$ membentuk bangun segitiga siku-siku.",
      "steps": "1. Identifikasi dimensi bangun segitiga:<br>$$\\text{Alas} = 5\\text{ s}$$<br>$$\\text{Tinggi} = 20\\text{ m/s}$$<br>2. Hitung luas segitiga:<br>$$s = \\text{Luas} = \\frac{1}{2} \\times \\text{alas} \\times \\text{tinggi} = \\frac{1}{2} \\times 5 \\times 20 = 50\\text{ meter}$$",
      "pitfalls": "Lupa mengalikan faktor $\\frac{1}{2}$ sehingga langsung mengalikan $5 \\times 20 = 100\\text{ m}$ (luas persegi panjang alih-alih segitiga)."
    },
    "subTopicSlug": "analisis-grafik",
    "bab": "Kinematika",
    "subBab": "Analisis Grafik Gerak Lurus",
    "subTopic": "Analisis Grafik Gerak Lurus",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Jarak tempuh pada grafik $v-t$ dihitung secara langsung dari luas bangun geometri di bawah kurva terhadap sumbu waktu ($t$). Kurva dari $(0,0)$ ke $(5,20)$ membentuk bangun segitiga siku-siku."
  },
  {
    "id": "fis-kin-gl-grafik-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-grafik",
    "category": "Analisis Grafik Gerak Lurus",
    "difficulty": "mudah",
    "statement": "Jika kurva grafik kecepatan terhadap waktu ($v-t$) dari suatu benda berupa garis lurus mendatar horizontal sejajar sumbu-$t$ dengan nilai $v > 0$, maka kondisi gerak benda tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Gerak lurus beraturan (GLB) dengan percepatan bernilai nol",
      "Gerak lurus berubah beraturan (GLBB) dipercepat",
      "Benda dalam kondisi berhenti dan tidak berpindah posisi",
      "Benda bergerak dengan percepatan tetap yang bernilai positif",
      "Jarak tempuh benda tidak bertambah seiring berjalannya waktu"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Garis mendatar pada grafik $v-t$ menunjukkan bahwa nilai kecepatan konstan ($v(t) = C$). Karena kecepatannya tidak mengalami perubahan, maka percepatannya $a = \\frac{dv}{dt} = 0$, yang merupakan definisi dari GLB.",
      "steps": "1. Garis horizontal pada kurva $v-t$ berarti gradien $\\frac{\\Delta v}{\\Delta t} = 0$.<br>2. Karena gradien grafik $v-t$ adalah percepatan, maka percepatan $a = 0$.<br>3. Gerak dengan $v = \\text{konstan}$ dan $a = 0$ disebut Gerak Lurus Beraturan (GLB).",
      "pitfalls": "Jangan tertukar dengan garis horizontal pada grafik $s-t$ (posisi-waktu). Garis horizontal pada grafik $s-t$ berarti benda diam ($v = 0$), sedangkan pada grafik $v-t$ benda sedang melaju dengan kelajuan konstan."
    },
    "subTopicSlug": "analisis-grafik",
    "bab": "Kinematika",
    "subBab": "Analisis Grafik Gerak Lurus",
    "subTopic": "Analisis Grafik Gerak Lurus",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Garis mendatar pada grafik $v-t$ menunjukkan bahwa nilai kecepatan konstan ($v(t) = C$). Karena kecepatannya tidak mengalami perubahan, maka percepatannya $a = \\frac{dv}{dt} = 0$, yang merupakan definisi dari GLB. **Tips:** Jangan tertukar dengan garis horizontal pada grafik $s-t$ (posisi-waktu)."
  },
  {
    "id": "fis-kin-gl-grafik-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-grafik",
    "category": "Analisis Grafik Gerak Lurus",
    "difficulty": "mudah",
    "statement": "Pada grafik percepatan terhadap waktu ($a-t$), luas daerah yang dibatasi oleh kurva grafik dengan sumbu waktu dalam selang waktu $\\Delta t$ menyatakan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Perubahan kecepatan benda ($\\Delta v$)",
      "Kecepatan sesaat benda ($v$)",
      "Perpindahan total benda ($\\Delta s$)",
      "Posisi akhir benda ($s$)",
      "Gaya total yang bekerja"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Definisi percepatan adalah $a = \\frac{dv}{dt}$. Berdasarkan teorema dasar kalkulus:<br>$$\\Delta v = v_t - v_0 = \\int_{t_0}^t a(t)\\,dt$$<br>Integral tentu ini secara geometris diwakili oleh luas area di bawah kurva grafik $a-t$.",
      "steps": "1. Luas area grafik $a-t$ berdimensi $[\\text{percepatan}] \\times [\\text{waktu}] = (\\text{m/s}^2) \\times \\text{s} = \\text{m/s}$.<br>2. Satuan $\\text{m/s}$ menyatakan satuan kecepatan.<br>3. Nilai luas ini secara tepat menyatakan perubahan kecepatan benda ($\\Delta v$), bukan kecepatan absolut jika kecepatan awalnya tidak nol.",
      "pitfalls": "Menyebutkan sebagai perpindahan (perpindahan adalah luas grafik $v-t$, bukan $a-t$)."
    },
    "subTopicSlug": "analisis-grafik",
    "bab": "Kinematika",
    "subBab": "Analisis Grafik Gerak Lurus",
    "subTopic": "Analisis Grafik Gerak Lurus",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan perumusan konsep fisis: $$\\Delta v = v_t - v_0 = \\int_{t_0}^t a(t)\\,dt$$ Integral tentu ini secara geometris diwakili oleh luas area di bawah kurva grafik $a-t$. **Tips:** Menyebutkan sebagai perpindahan (perpindahan adalah luas grafik $v-t$, bukan $a-t$)."
  },
  {
    "id": "fis-kin-gl-grafik-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-grafik",
    "category": "Analisis Grafik Gerak Lurus",
    "difficulty": "mudah",
    "statement": "Sebuah mobil mainan bergerak lurus dengan profil grafik kecepatan-waktu ($v-t$) sebagai berikut: mobil dipercepat secara beraturan dari keadaan diam hingga mencapai kelajuan $15\\text{ m/s}$ selama $4\\text{ s}$, kemudian melaju dengan kelajuan konstan $15\\text{ m/s}$ selama $6\\text{ s}$ berikutnya. Jarak total yang ditempuh mobil mainan tersebut selama $10\\text{ sekon}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$120\\text{ meter}$",
      "$150\\text{ meter}$",
      "$90\\text{ meter}$",
      "$105\\text{ meter}$",
      "$135\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jarak total dari grafik $v-t$ gabungan dihitung dari luas total bangun trapesium atau jumlahan luas segitiga (fase percepatan) dan persegi panjang (fase konstan).",
      "steps": "1. Fase 1 ($0 - 4\\text{ s}$, segitiga):<br>$$L_1 = \\frac{1}{2} \\times 4\\text{ s} \\times 15\\text{ m/s} = 30\\text{ meter}$$<br>2. Fase 2 ($4 - 10\\text{ s}$, selang waktu $6\\text{ s}$, persegi panjang):<br>$$L_2 = 6\\text{ s} \\times 15\\text{ m/s} = 90\\text{ meter}$$<br>3. Jarak total:<br>$$s = L_1 + L_2 = 30\\text{ m} + 90\\text{ m} = 120\\text{ meter}$$",
      "pitfalls": "Menghitung luas fase 2 dengan mengalikan $10 \\times 15 = 150\\text{ m}$, padahal durasi fase kedua hanyalah $10 - 4 = 6\\text{ sekon}$."
    },
    "subTopicSlug": "analisis-grafik",
    "bab": "Kinematika",
    "subBab": "Analisis Grafik Gerak Lurus",
    "subTopic": "Analisis Grafik Gerak Lurus",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Jarak total dari grafik $v-t$ gabungan dihitung dari luas total bangun trapesium atau jumlahan luas segitiga (fase percepatan) dan persegi panjang (fase konstan)."
  },
  {
    "id": "fis-kin-gl-grafik-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-grafik",
    "category": "Analisis Grafik Gerak Lurus",
    "difficulty": "sedang",
    "statement": "Sebuah partikel bergerak lurus sepanjang sumbu-$x$ dengan profil grafik kecepatan-waktu ($v-t$): dari $t = 0$ hingga $t = 4\\text{ s}$ kecepatan naik linier dari $0$ ke $+10\\text{ m/s}$; dari $t = 4\\text{ s}$ ke $t = 6\\text{ s}$ kecepatan turun linier dari $+10\\text{ m/s}$ hingga $0$; lalu dari $t = 6\\text{ s}$ ke $t = 8\\text{ s}$ kecepatan turun linier ke nilai negatif dari $0$ hingga $-6\\text{ m/s}$. Besar perpindahan total dan jarak total yang ditempuh partikel selama $8\\text{ sekon}$ tersebut berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$24\\text{ m}$ dan $36\\text{ m}$",
      "$30\\text{ m}$ dan $36\\text{ m}$",
      "$24\\text{ m}$ dan $30\\text{ m}$",
      "$36\\text{ m}$ dan $24\\text{ m}$",
      "$18\\text{ m}$ dan $36\\text{ m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada grafik $v-t$:<br>• Perpindahan ($\\Delta x$) dihitung dari selisih luas area di atas sumbu-$t$ (positif) dikurangi luas area di bawah sumbu-$t$ (negatif): $\\Delta x = L_{\\text{atas}} - L_{\\text{bawah}}$.<br>• Jarak total ($s$) dihitung dari jumlahan mutlak seluruh luas area: $s = L_{\\text{atas}} + L_{\\text{bawah}}$.",
      "steps": "1. Hitung luas area di atas sumbu-$t$ ($t = 0$ s.d. $6\\text{ s}$, segitiga):<br>$$L_{\\text{atas}} = \\frac{1}{2} \\times 6\\text{ s} \\times 10\\text{ m/s} = 30\\text{ meter}$$<br>2. Hitung luas area di bawah sumbu-$t$ ($t = 6$ s.d. $8\\text{ s}$, segitiga):<br>$$L_{\\text{bawah}} = \\frac{1}{2} \\times (8 - 6)\\text{ s} \\times 6\\text{ m/s} = \\frac{1}{2} \\times 2 \\times 6 = 6\\text{ meter}$$<br>3. Hitung perpindahan total dan jarak total:<br>$$\\Delta x = 30\\text{ m} - 6\\text{ m} = 24\\text{ meter}$$<br>$$s = 30\\text{ m} + 6\\text{ m} = 36\\text{ meter}$$",
      "pitfalls": "Menyamakan nilai jarak dengan perpindahan atau tidak mengurangkan area di bawah sumbu waktu saat menghitung perpindahan."
    },
    "subTopicSlug": "analisis-grafik",
    "bab": "Kinematika",
    "subBab": "Analisis Grafik Gerak Lurus",
    "subTopic": "Analisis Grafik Gerak Lurus",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Pada grafik $v-t$: • Perpindahan ($\\Delta x$) dihitung dari selisih luas area di atas sumbu-$t$ (positif) dikurangi luas area di bawah sumbu-$t$ (negatif): $\\Delta x = L_{\\text{atas}} - L_{\\text{bawah}}$. • Jarak total ($s$) dihitung dari jumlahan mutlak seluruh luas area: $s = L_{\\text{atas}} + L_{\\text{bawah}}$. **Tips:** Menyamakan nilai jarak dengan perpindahan atau tidak mengurangkan area di bawah sumbu waktu saat menghitung perpindahan."
  },
  {
    "id": "fis-kin-gl-grafik-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-grafik",
    "category": "Analisis Grafik Gerak Lurus",
    "difficulty": "sedang",
    "statement": "Dua mobil $A$ dan $B$ berangkat dari garis start yang sama pada saat $t = 0$. Mobil $A$ bergerak dengan kelajuan tetap $v_A = 16\\text{ m/s}$, sedangkan mobil $B$ bergerak dari keadaan diam dengan percepatan tetap $a_B = 2\\text{ m/s}^2$. Dari grafik kecepatan terhadap waktu ($v-t$), waktu saat kelajuan kedua mobil sama besar ($t_1$) dan waktu saat mobil $B$ tepat menyusul posisi mobil $A$ ($t_2$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$8\\text{ sekon}$ dan $16\\text{ sekon}$",
      "$16\\text{ sekon}$ dan $8\\text{ sekon}$",
      "$8\\text{ sekon}$ dan $8\\text{ sekon}$",
      "$4\\text{ sekon}$ dan $8\\text{ sekon}$",
      "$8\\text{ sekon}$ dan $32\\text{ sekon}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada grafik $v-t$:<br>• Kelajuan sama terjadi pada titik potong kurva ($v_A(t) = v_B(t)$).<br>• Posisi menyusul terjadi saat luas di bawah kurva kedua grafik bernilai sama ($s_A(t) = s_B(t)$).",
      "steps": "1. Kecepatan mobil $B$ memenuhi $v_B(t) = a_B t = 2t$.<br>Kelajuan sama:<br>$$v_A = v_B \\implies 16 = 2t_1 \\implies t_1 = 8\\text{ sekon}$$<br>2. Posisi menyusul (luas sama):<br>$$s_A = s_B \\implies v_A t_2 = \\frac{1}{2} a_B t_2^2$$<br>$$16 t_2 = \\frac{1}{2}(2) t_2^2 \\implies 16 t_2 = t_2^2 \\implies t_2 = 16\\text{ sekon}$$",
      "pitfalls": "Terkecoh mengira kedua mobil bertemu/menyusul saat kelajuannya sama ($t = 8\\text{ s}$). Pada $t = 8\\text{ s}$, jarak pisah kedua mobil justru sedang mencapai titik maksimum, baru menyusul pada $t = 16\\text{ s}$."
    },
    "subTopicSlug": "analisis-grafik",
    "bab": "Kinematika",
    "subBab": "Analisis Grafik Gerak Lurus",
    "subTopic": "Analisis Grafik Gerak Lurus",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Pada grafik $v-t$: • Kelajuan sama terjadi pada titik potong kurva ($v_A(t) = v_B(t)$). • Posisi menyusul terjadi saat luas di bawah kurva kedua grafik bernilai sama ($s_A(t) = s_B(t)$)."
  },
  {
    "id": "fis-kin-gl-grafik-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-grafik",
    "category": "Analisis Grafik Gerak Lurus",
    "difficulty": "sedang",
    "statement": "Sebuah partikel bergerak lurus dengan grafik percepatan terhadap waktu ($a-t$): percepatan konstan sebesar $4\\text{ m/s}^2$ dari $t = 0$ hingga $t = 2\\text{ s}$, kemudian percepatan menurun secara linier hingga mencapai nilai $0$ pada $t = 5\\text{ s}$. Jika pada saat $t = 0$ partikel sudah memiliki kecepatan awal $v_0 = 5\\text{ m/s}$, besar kecepatan partikel pada saat $t = 5\\text{ sekon}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$19\\text{ m/s}$",
      "$14\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$17\\text{ m/s}$",
      "$21\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kecepatan akhir partikel adalah jumlahan kecepatan awal dengan integral luas kurva grafik $a-t$:<br>$$v_t = v_0 + \\Delta v = v_0 + \\text{Luas daerah bawah kurva } a-t$$",
      "steps": "1. Hitung luas persegi panjang dari $t = 0$ s.d. $2\\text{ s}$:<br>$$L_1 = 2\\text{ s} \\times 4\\text{ m/s}^2 = 8\\text{ m/s}$$<br>2. Hitung luas segitiga dari $t = 2$ s.d. $5\\text{ s}$:<br>$$L_2 = \\frac{1}{2} \\times (5 - 2)\\text{ s} \\times 4\\text{ m/s}^2 = \\frac{1}{2} \\times 3 \\times 4 = 6\\text{ m/s}$$<br>3. Hitung perubahan kecepatan total:<br>$$\\Delta v = L_1 + L_2 = 8 + 6 = 14\\text{ m/s}$$<br>4. Kecepatan akhir pada $t = 5\\text{ s}$:<br>$$v(5) = v_0 + \\Delta v = 5 + 14 = 19\\text{ m/s}$$",
      "pitfalls": "Hanya menghitung luas daerah $\\Delta v = 14\\text{ m/s}$ dan lupa menambahkan kecepatan awal $v_0 = 5\\text{ m/s}$."
    },
    "subTopicSlug": "analisis-grafik",
    "bab": "Kinematika",
    "subBab": "Analisis Grafik Gerak Lurus",
    "subTopic": "Analisis Grafik Gerak Lurus",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Kecepatan akhir partikel adalah jumlahan kecepatan awal dengan integral luas kurva grafik $a-t$: $$v_t = v_0 + \\Delta v = v_0 + \\text{Luas daerah bawah kurva } a-t$$."
  },
  {
    "id": "fis-kin-gl-grafik-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-grafik",
    "category": "Analisis Grafik Gerak Lurus",
    "difficulty": "sedang",
    "statement": "Suatu kurva grafik posisi terhadap waktu ($s-t$) menunjukkan bahwa pada selang $0 \\le t \\le 3\\text{ s}$ kurva berbentuk lengkungan parabola yang membuka ke atas dengan kemiringan yang terus membesar, sedangkan pada selang $3 < t \\le 7\\text{ s}$ kurva berubah menjadi garis lurus miring ke atas dengan kemiringan tetap. Interpretasi fisis yang paling akurat mengenai gerak benda tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Pada selang $0 - 3\\text{ s}$ benda melakukan GLBB dipercepat, lalu pada $3 - 7\\text{ s}$ melakukan GLB dengan kecepatan konstan",
      "Pada selang $0 - 3\\text{ s}$ benda melakukan GLB, lalu pada $3 - 7\\text{ s}$ melakukan GLBB dipercepat",
      "Pada selang $0 - 3\\text{ s}$ benda melakukan GLBB diperlambat, lalu pada $3 - 7\\text{ s}$ benda berhenti diam",
      "Pada seluruh rentang waktu $0 - 7\\text{ s}$ benda selalu mengalami percepatan konstan yang sama besar",
      "Pada selang $3 - 7\\text{ s}$ kecepatan benda terus bertambah secara linier"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kemiringan garis singgung grafik posisi-waktu ($s-t$) menunjukkan kecepatan sesaat ($v = \\frac{ds}{dt}$):<br>• Parabola membuka ke atas: kemiringan terus bertambah besar $\\implies$ kecepatan bertambah $\\implies$ GLBB dipercepat ($a > 0$).<br>• Garis lurus miring dengan kemiringan tetap: kemiringan konstan $\\implies$ kecepatan tetap $\\implies$ GLB ($a = 0$).",
      "steps": "1. Analisis kurva $0 \\le t \\le 3$: Fungsi kuadrat $s(t) \\propto t^2$ memiliki gradien $\\frac{ds}{dt}$ yang naik linier, menandakan GLBB dipercepat.<br>2. Analisis kurva $3 < t \\le 7$: Fungsi linier $s(t) \\propto t$ memiliki gradien tetap, menandakan GLB dengan kecepatan konstan.",
      "pitfalls": "Terkecoh dengan grafik $v-t$. Pada grafik $v-t$, garis lurus miring adalah GLBB, sedangkan pada grafik $s-t$, garis lurus miring adalah GLB."
    },
    "subTopicSlug": "analisis-grafik",
    "bab": "Kinematika",
    "subBab": "Analisis Grafik Gerak Lurus",
    "subTopic": "Analisis Grafik Gerak Lurus",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Kemiringan garis singgung grafik posisi-waktu ($s-t$) menunjukkan kecepatan sesaat ($v = \\frac{ds}{dt}$): • Parabola membuka ke atas: kemiringan terus bertambah besar $\\implies$ kecepatan bertambah $\\implies$ GLBB dipercepat ($a > 0$). • Garis lurus miring dengan kemiringan tetap: kemiringan konstan $\\implies$ kecepatan tetap $\\implies$ GLB ($a = 0$). **Tips:** Terkecoh dengan grafik $v-t$."
  },
  {
    "id": "fis-kin-gl-grafik-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-grafik",
    "category": "Analisis Grafik Gerak Lurus",
    "difficulty": "sedang",
    "statement": "Sebuah lift pengangkut barang di gedung bertingkat bergerak naik dari lantai dasar dengan pola grafik kecepatan-waktu ($v-t$): lift dipercepat dari diam dengan percepatan tetap $2\\text{ m/s}^2$ selama $3\\text{ sekon}$ hingga mencapai kelajuan maksimum $v_{\\max}$; melaju dengan kelajuan konstan $v_{\\max}$ selama $8\\text{ sekon}$; kemudian diperlambat secara beraturan dengan perlambatan tetap $3\\text{ m/s}^2$ hingga berhenti di lantai tujuan. Ketinggian total yang dicapai lift tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$63\\text{ meter}$",
      "$57\\text{ meter}$",
      "$72\\text{ meter}$",
      "$48\\text{ meter}$",
      "$69\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Ketinggian total dihitung dari luas total grafik trapesium $v-t$. Waktu fase perlambatan dihitung dari perbandingan kecepatan puncak terhadap besar perlambatannya.",
      "steps": "1. Kecepatan maksimum pada akhir fase 1:<br>$$v_{\\max} = a_1 \\cdot t_1 = 2\\text{ m/s}^2 \\times 3\\text{ s} = 6\\text{ m/s}$$<br>2. Waktu fase 3 (perlambatan hingga berhenti):<br>$$t_3 = \\frac{v_{\\max}}{a_3} = \\frac{6\\text{ m/s}}{3\\text{ m/s}^2} = 2\\text{ sekon}$$<br>3. Hitung luas tiap segmen pergerakan:<br>• Segmen 1 (percepatan): $L_1 = \\frac{1}{2} \\times 3 \\times 6 = 9\\text{ meter}$<br>• Segmen 2 (konstan): $L_2 = 8 \\times 6 = 48\\text{ meter}$<br>• Segmen 3 (perlambatan): $L_3 = \\frac{1}{2} \\times 2 \\times 6 = 6\\text{ meter}$<br>4. Ketinggian total:<br>$$h = L_1 + L_2 + L_3 = 9 + 48 + 6 = 63\\text{ meter}$$",
      "pitfalls": "Lupa menghitung durasi waktu pengereman ($t_3 = 2\\text{ s}$) atau menyamakan durasi pengereman dengan waktu percepatan ($3\\text{ s}$)."
    },
    "subTopicSlug": "analisis-grafik",
    "bab": "Kinematika",
    "subBab": "Analisis Grafik Gerak Lurus",
    "subTopic": "Analisis Grafik Gerak Lurus",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Ketinggian total dihitung dari luas total grafik trapesium $v-t$. Waktu fase perlambatan dihitung dari perbandingan kecepatan puncak terhadap besar perlambatannya."
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
