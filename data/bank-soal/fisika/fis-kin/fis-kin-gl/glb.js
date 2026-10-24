/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lurus (fis-kin-gl)
 * Sub-Bab: Gerak Lurus Beraturan (GLB) (fis-kin-gl-glb)
 * Slug: glb
 * Indikator: Karakteristik GLB (v = konstan, a = 0), hubungan s = v * t.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-gl-glb";
  const subTopicSlug = "glb";
  const questions = [
  {
    "id": "fis-kin-gl-glb-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-glb",
    "category": "Gerak Lurus Beraturan (GLB)",
    "difficulty": "mudah",
    "statement": "Suatu benda dikatakan melakukan Gerak Lurus Beraturan (GLB) jika memenuhi karakteristik fisis ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Lintasannya lurus dengan kecepatan konstan dan percepatan nol",
      "Lintasannya lurus dengan percepatan konstan tidak nol",
      "Kecepatannya berubah secara teratur setiap satuan waktu",
      "Resultan gaya total yang bekerja pada benda bernilai konstan tidak nol",
      "Jarak tempuh sebanding dengan kuadrat waktu tempuhnya"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Ciri esensial GLB adalah lintasan berupa garis lurus, vektor kecepatan bernilai tetap baik besar maupun arahnya ($v = \\text{konstan}$), sehingga percepatan $a = \\frac{dv}{dt} = 0$, dan resultan gaya $\\Sigma F = 0$ (Hukum I Newton).",
      "steps": "Analisis pilihan jawaban:<br>• Opsi A: Tepat, kecepatan konstan dan percepatan nol.<br>• Opsi B: Karakteristik GLBB.<br>• Opsi C: Ciri kecepatan GLBB.<br>• Opsi D: Menghasilkan GLBB berdasarkan Hukum II Newton.<br>• Opsi E: Hubungan $s \\propto t^2$ adalah milik GLBB ($s \\propto t$ pada GLB).",
      "pitfalls": "Jangan menyamakan antara percepatan bernilai tetap ($a = \\text{konstan} \\ne 0$, GLBB) dengan percepatan nol ($a = 0$, GLB)."
    },
    "subTopicSlug": "glb",
    "bab": "Kinematika",
    "subBab": "Gerak Lurus Beraturan (GLB)",
    "subTopic": "Gerak Lurus Beraturan (GLB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-gl-glb-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-glb",
    "category": "Gerak Lurus Beraturan (GLB)",
    "difficulty": "mudah",
    "statement": "Sebuah mobil bergerak dengan kecepatan tetap $72\\text{ km/jam}$ pada lintasan jalan tol yang lurus. Jarak yang ditempuh mobil tersebut dalam selang waktu $15\\text{ sekon}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$300\\text{ meter}$",
      "$1080\\text{ meter}$",
      "$150\\text{ meter}$",
      "$360\\text{ meter}$",
      "$450\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada GLB, hubungan antara jarak tempuh ($s$), kecepatan konstan ($v$), dan waktu tempuh ($t$) dirumuskan dengan:<br>$$s = v \\cdot t$$",
      "steps": "1. Konversikan kecepatan dari $\\text{km/jam}$ ke satuan SI ($\\text{m/s}$):<br>$$v = 72 \\times \\frac{5}{18}\\text{ m/s} = 20\\text{ m/s}$$<br>2. Hitung jarak tempuh dalam waktu $15\\text{ s}$:<br>$$s = v \\cdot t = 20\\text{ m/s} \\times 15\\text{ s} = 300\\text{ meter}$$",
      "pitfalls": "Lupa mengonversi satuan jam ke sekon dan langsung mengalikan $72 \\times 15 = 1080$."
    },
    "subTopicSlug": "glb",
    "bab": "Kinematika",
    "subBab": "Gerak Lurus Beraturan (GLB)",
    "subTopic": "Gerak Lurus Beraturan (GLB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-gl-glb-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-glb",
    "category": "Gerak Lurus Beraturan (GLB)",
    "difficulty": "mudah",
    "statement": "Sebuah stasiun radar memancarkan pulsa gelombang mikro ke arah sebuah pesawat terbang. Pulsa pantulan terdeteksi kembali di stasiun radar setelah selang waktu $\\Delta t = 4 \\times 10^{-4}\\text{ s}$. Jika cepat rambat gelombang elektromagnetik di udara adalah $c = 3 \\times 10^8\\text{ m/s}$, jarak pesawat tersebut dari stasiun radar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$60\\text{ km}$",
      "$120\\text{ km}$",
      "$30\\text{ km}$",
      "$240\\text{ km}$",
      "$6\\text{ km}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gelombang merambat dengan kelajuan tetap GLB ($c = \\text{konstan}$). Karena gelombang menempuh perjalanan bolak-balik (pergi dan pulang), jarak satu arah ke objek dihitung dengan:<br>$$s = \\frac{c \\cdot \\Delta t}{2}$$",
      "steps": "1. Substitusikan nilai $c$ dan $\\Delta t$:<br>$$s = \\frac{(3 \\times 10^8\\text{ m/s}) \\times (4 \\times 10^{-4}\\text{ s})}{2}$$<br>$$s = \\frac{12 \\times 10^4\\text{ m}}{2} = 6 \\times 10^4\\text{ m}$$<br>2. Konversi ke satuan kilometer:<br>$$s = 60\\text{ km}$$",
      "pitfalls": "Lupa membagi dua waktu tempuh bolak-balik sehingga mendapatkan jawaban $120\\text{ km}$."
    },
    "subTopicSlug": "glb",
    "bab": "Kinematika",
    "subBab": "Gerak Lurus Beraturan (GLB)",
    "subTopic": "Gerak Lurus Beraturan (GLB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-gl-glb-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-glb",
    "category": "Gerak Lurus Beraturan (GLB)",
    "difficulty": "mudah",
    "statement": "Persamaan kedudukan sebuah benda yang melakukan gerak lurus beraturan dinyatakan oleh $x(t) = 50 - 4t$, dengan $x$ dalam meter dan $t$ dalam sekon. Pernyataan berikut yang benar mengenai karakteristik gerak benda tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Benda mulai bergerak dari posisi awal $50\\text{ m}$ dengan kecepatan $-4\\text{ m/s}$",
      "Benda bergerak dipercepat dengan percepatan $-4\\text{ m/s}^2$",
      "Benda akan berhenti dan berbalik arah saat $t = 12{,}5\\text{ s}$",
      "Kecepatan benda bertambah seiring berjalannya waktu",
      "Posisi awal benda berada di titik pusat koordinat $x = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bentuk umum persamaan posisi GLB adalah $x(t) = x_0 + v t$, di mana $x_0$ adalah posisi awal dan $v = \\frac{dx}{dt}$ adalah kecepatan tetap.",
      "steps": "1. Bandingkan persamaan $x(t) = 50 - 4t$ dengan bentuk baku $x(t) = x_0 + v t$:<br>$$x_0 = 50\\text{ m}$$<br>$$v = -4\\text{ m/s}$$<br>2. Karena nilai $v = -4\\text{ m/s}$ konstan, benda bergerak dengan laju tetap $4\\text{ m/s}$ ke arah sumbu-$x$ negatif tanpa percepatan ($a = 0$).",
      "pitfalls": "Pada $t = 12{,}5\\text{ s}$, benda hanya melintasi titik asal $x = 0$, bukan berhenti atau berbalik arah."
    },
    "subTopicSlug": "glb",
    "bab": "Kinematika",
    "subBab": "Gerak Lurus Beraturan (GLB)",
    "subTopic": "Gerak Lurus Beraturan (GLB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-gl-glb-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-glb",
    "category": "Gerak Lurus Beraturan (GLB)",
    "difficulty": "mudah",
    "statement": "Dua mobil $A$ dan $B$ berangkat secara bersamaan dari dua kota yang terpisah sejauh $120\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus. Mobil $A$ melaju dengan kelajuan tetap $40\\text{ km/jam}$ dan mobil $B$ dengan kelajuan tetap $60\\text{ km/jam}$. Kedua mobil tersebut akan berpapasan setelah menempuh waktu perjalanan selama ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$72\\text{ menit}$",
      "$60\\text{ menit}$",
      "$80\\text{ menit}$",
      "$90\\text{ menit}$",
      "$50\\text{ menit}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Dua benda GLB yang bergerak saling mendekat menempuh jarak total bersama sebesar jarak pemisah kedua kota ($d$):<br>$$t = \\frac{d}{v_A + v_B}$$",
      "steps": "1. Hitung waktu tempuh dalam satuan jam:<br>$$t = \\frac{120\\text{ km}}{40\\text{ km/jam} + 60\\text{ km/jam}} = \\frac{120}{100} = 1{,}2\\text{ jam}$$<br>2. Konversi ke menit:<br>$$t = 1{,}2 \\times 60\\text{ menit} = 72\\text{ menit}$$",
      "pitfalls": "Menghitung $1{,}2\\text{ jam}$ sebagai $1\\text{ jam } 20\\text{ menit}$ ($80\\text{ menit}$). Pengali desimal waktu adalah 60 ($0{,}2 \\times 60 = 12\\text{ menit}$). Kesalahan konversi desimal sering menjadi jebakan."
    },
    "subTopicSlug": "glb",
    "bab": "Kinematika",
    "subBab": "Gerak Lurus Beraturan (GLB)",
    "subTopic": "Gerak Lurus Beraturan (GLB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-gl-glb-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-glb",
    "category": "Gerak Lurus Beraturan (GLB)",
    "difficulty": "sedang",
    "statement": "Sebuah rangkaian kereta api penumpang dengan panjang $200\\text{ m}$ melaju dengan kecepatan konstan $72\\text{ km/jam}$. Kereta tersebut melintasi sebuah terowongan rel yang memiliki panjang $600\\text{ m}$. Waktu yang diperlukan kereta sejak ujung kepala lokomotif tepat memasuki pintu terowongan hingga gerbong paling belakang tepat keluar meninggalkan ujung akhir terowongan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$40\\text{ sekon}$",
      "$30\\text{ sekon}$",
      "$10\\text{ sekon}$",
      "$50\\text{ sekon}$",
      "$20\\text{ sekon}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Agar seluruh badan kereta melintasi terowongan secara utuh, jarak yang harus ditempuh oleh kereta adalah jumlahan panjang terowongan ($L_T$) dan panjang rangkaian kereta ($L_K$):<br>$$s = L_T + L_K$$",
      "steps": "1. Konversikan kecepatan kereta ke satuan SI ($\\text{m/s}$):<br>$$v = 72 \\times \\frac{5}{18} = 20\\text{ m/s}$$<br>2. Hitung jarak tempuh total hingga gerbong terakhir keluar terowongan:<br>$$s = 600\\text{ m} + 200\\text{ m} = 800\\text{ m}$$<br>3. Hitung waktu tempuh yang dibutuhkan:<br>$$t = \\frac{s}{v} = \\frac{800\\text{ m}}{20\\text{ m/s}} = 40\\text{ sekon}$$",
      "pitfalls": "Hanya memperhitungkan panjang terowongan saja ($600/20 = 30\\text{ s}$), yang baru merupakan waktu saat lokomotif depan keluar, bukan seluruh gerbong keluar."
    },
    "subTopicSlug": "glb",
    "bab": "Kinematika",
    "subBab": "Gerak Lurus Beraturan (GLB)",
    "subTopic": "Gerak Lurus Beraturan (GLB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-gl-glb-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-glb",
    "category": "Gerak Lurus Beraturan (GLB)",
    "difficulty": "sedang",
    "statement": "Dua mobil $A$ dan $B$ bergerak pada lintasan lurus searah dari titik tolak yang sama. Mobil $A$ berangkat terlebih dahulu pada $t = 0$ dengan kelajuan tetap $15\\text{ m/s}$. Tepat $10\\text{ sekon}$ kemudian, mobil $B$ berangkat menyusul dari titik tolak yang sama dengan kelajuan tetap $20\\text{ m/s}$. Jarak yang telah ditempuh oleh mobil $B$ ketika tepat menyusul mobil $A$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$600\\text{ meter}$",
      "$450\\text{ meter}$",
      "$300\\text{ meter}$",
      "$750\\text{ meter}$",
      "$200\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kondisi menyusul tercapai ketika jarak tempuh kedua kendaraan dari titik tolak awal bernilai sama ($s_A = s_B$). Perhatikan perbedaan selang waktu tempuh antara mobil $A$ dan $B$.",
      "steps": "1. Misal waktu tempuh mobil $B$ adalah $t_B$. Karena mobil $A$ berangkat $10\\text{ s}$ lebih awal, waktu tempuh mobil $A$ adalah $t_A = t_B + 10$.<br>2. Samakan jarak tempuh kedua mobil:<br>$$s_A = s_B \\implies v_A (t_B + 10) = v_B \\cdot t_B$$<br>$$15(t_B + 10) = 20 t_B \\implies 15 t_B + 150 = 20 t_B$$<br>$$5 t_B = 150 \\implies t_B = 30\\text{ sekon}$$<br>3. Hitung jarak yang ditempuh mobil $B$:<br>$$s_B = v_B \\cdot t_B = 20\\text{ m/s} \\times 30\\text{ s} = 600\\text{ meter}$$",
      "pitfalls": "Menghitung jarak tempuh mobil $A$ hanya selama 10 sekon pertama ($150\\text{ m}$) atau lupa mengalikan dengan kecepatan mobil $B$."
    },
    "subTopicSlug": "glb",
    "bab": "Kinematika",
    "subBab": "Gerak Lurus Beraturan (GLB)",
    "subTopic": "Gerak Lurus Beraturan (GLB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-gl-glb-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-glb",
    "category": "Gerak Lurus Beraturan (GLB)",
    "difficulty": "sedang",
    "statement": "Sebuah ledakan terjadi pada suatu titik di jalur rel kereta api. Gelombang bunyi merambat melalui batang rel baja dengan kelajuan $v_{\\text{baja}} = 5100\\text{ m/s}$ dan melalui udara dengan kelajuan $v_{\\text{udara}} = 340\\text{ m/s}$. Seorang teknisi rel di kejauhan mencatat bahwa bunyi yang merambat melalui rel baja terdengar $2{,}8\\text{ sekon}$ lebih cepat daripada bunyi yang merambat melalui udara. Jarak antara teknisi tersebut dengan lokasi ledakan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1020\\text{ meter}$",
      "$952\\text{ meter}$",
      "$1360\\text{ meter}$",
      "$2040\\text{ meter}$",
      "$680\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bunyi merambat secara GLB pada masing-masing medium. Selisih waktu kedatangan bunyi pada jarak yang sama ($d$) adalah:<br>$$\\Delta t = t_{\\text{udara}} - t_{\\text{baja}} = \\frac{d}{v_{\\text{udara}}} - \\frac{d}{v_{\\text{baja}}}$$",
      "steps": "1. Faktorkan persamaan selisih waktu:<br>$$\\Delta t = d \\left( \\frac{1}{v_{\\text{udara}}} - \\frac{1}{v_{\\text{baja}}} \\right)$$<br>$$2{,}8 = d \\left( \\frac{1}{340} - \\frac{1}{5100} \\right)$$<br>2. Samakan penyebut pecahan:<br>$$\\frac{1}{340} - \\frac{1}{5100} = \\frac{15 - 1}{5100} = \\frac{14}{5100}$$<br>3. Hitung jarak $d$:<br>$$d = \\frac{2{,}8 \\times 5100}{14} = 0{,}2 \\times 5100 = 1020\\text{ meter}$$",
      "pitfalls": "Lupa menyamakan penyebut atau mengalikan $2{,}8$ hanya dengan kecepatan bunyi di udara ($340 \\times 2{,}8 = 952\\text{ m}$)."
    },
    "subTopicSlug": "glb",
    "bab": "Kinematika",
    "subBab": "Gerak Lurus Beraturan (GLB)",
    "subTopic": "Gerak Lurus Beraturan (GLB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-gl-glb-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-glb",
    "category": "Gerak Lurus Beraturan (GLB)",
    "difficulty": "sedang",
    "statement": "Dua partikel $A$ dan $B$ bergerak pada sumbu-$x$ dengan posisi dinyatakan oleh $x_A(t) = 4t + 10$ dan $x_B(t) = 10t - 20$ (dengan $x$ dalam meter dan $t$ dalam sekon). Jarak pisah antara kedua partikel saat $t = 2\\text{ s}$ serta waktu saat kedua partikel bertemu berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$18\\text{ m}$ dan $5\\text{ s}$",
      "$18\\text{ m}$ dan $3\\text{ s}$",
      "$28\\text{ m}$ dan $5\\text{ s}$",
      "$10\\text{ m}$ dan $6\\text{ s}$",
      "$12\\text{ m}$ dan $4\\text{ s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jarak pisah dua partikel adalah harga mutlak selisih kedudukan $|x_A(t) - x_B(t)|$. Kedua partikel bertemu ketika kedudukan keduanya sama persis ($x_A(t) = x_B(t)$).",
      "steps": "1. Hitung posisi masing-masing pada $t = 2\\text{ s}$:<br>$$x_A(2) = 4(2) + 10 = 18\\text{ m}$$<br>$$x_B(2) = 10(2) - 20 = 0\\text{ m}$$<br>Jarak pisah pada $t = 2\\text{ s}$ adalah $|18 - 0| = 18\\text{ meter}$.<br>2. Tentukan waktu pertemuan:<br>$$x_A(t) = x_B(t) \\implies 4t + 10 = 10t - 20$$<br>$$10 + 20 = 10t - 4t \\implies 30 = 6t \\implies t = 5\\text{ sekon}$$",
      "pitfalls": "Perhatikan tanda minus pada $-20$ saat memindahkan ruas aljabar agar tidak keliru menghitung waktu pertemuan."
    },
    "subTopicSlug": "glb",
    "bab": "Kinematika",
    "subBab": "Gerak Lurus Beraturan (GLB)",
    "subTopic": "Gerak Lurus Beraturan (GLB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-gl-glb-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-glb",
    "category": "Gerak Lurus Beraturan (GLB)",
    "difficulty": "sedang",
    "statement": "Sebuah jalan konveyor datar di bandara memiliki panjang $60\\text{ meter}$ dan bergerak otomatis dengan kelajuan konstan $1\\text{ m/s}$. Seorang calon penumpang yang terburu-buru berjalan di atas konveyor searah dengan arah gerak konveyor dan berhasil mencapai ujung seberang dalam waktu $20\\text{ sekon}$. Jika calon penumpang tersebut berjalan dengan kecepatan jalan yang sama tetapi berlawanan arah dengan arah gerak konveyor, waktu yang ia perlukan untuk mencapai ujung seberang adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$60\\text{ sekon}$",
      "$40\\text{ sekon}$",
      "$30\\text{ sekon}$",
      "$80\\text{ sekon}$",
      "$50\\text{ sekon}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kecepatan efektif orang terhadap lantai diam adalah $v_{\\text{searah}} = v_{\\text{orang}} + v_{\\text{konveyor}}$ saat bergerak searah, dan $v_{\\text{lawan}} = v_{\\text{orang}} - v_{\\text{konveyor}}$ saat bergerak berlawanan arah.",
      "steps": "1. Kecepatan relatif saat searah gerak konveyor:<br>$$v_{\\text{searah}} = \\frac{L}{t_1} = \\frac{60\\text{ m}}{20\\text{ s}} = 3\\text{ m/s}$$<br>2. Hitung laju jalan kaki orang:<br>$$v_{\\text{orang}} + v_{\\text{konveyor}} = 3 \\implies v_{\\text{orang}} + 1 = 3 \\implies v_{\\text{orang}} = 2\\text{ m/s}$$<br>3. Hitung kecepatan efektif saat berjalan berlawanan arah:<br>$$v_{\\text{lawan}} = v_{\\text{orang}} - v_{\\text{konveyor}} = 2\\text{ m/s} - 1\\text{ m/s} = 1\\text{ m/s}$$<br>4. Waktu yang dibutuhkan saat melawan arah:<br>$$t_2 = \\frac{L}{v_{\\text{lawan}}} = \\frac{60\\text{ m}}{1\\text{ m/s}} = 60\\text{ sekon}$$",
      "pitfalls": "Mengabaikan fakta bahwa kecepatan konveyor mengurangi laju gerak orang saat berjalan berlawanan arah."
    },
    "subTopicSlug": "glb",
    "bab": "Kinematika",
    "subBab": "Gerak Lurus Beraturan (GLB)",
    "subTopic": "Gerak Lurus Beraturan (GLB)",
    "chapterTitle": "Kinematika",
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
