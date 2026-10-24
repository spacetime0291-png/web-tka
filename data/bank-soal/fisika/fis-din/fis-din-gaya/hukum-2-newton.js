/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Gaya dan Gerak (fis-din-gaya)
 * Sub-Bab: Hukum II Newton (fis-din-gaya-newton2)
 * Slug: hukum-2-newton
 * Indikator: Hubungan resultan gaya luar, massa, dan percepatan (Sigma F = m * a).
 * 
 * Total Butir Soal: 7 (Mudah: 3, Sedang: 4, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-gaya-newton2";
  const subTopicSlug = "hukum-2-newton";
  const questions = [
  {
    "id": "fis-din-17",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Gravitasi Universal Newton",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Percepatan gravitasi pada permukaan bumi yang berjari-jari $R$ adalah $g = 10\\text{ m/s}^2$. Sebuah satelit pengamat cuaca mengorbit bumi pada lintasan lingkaran pada ketinggian $h = R$ di atas permukaan bumi. Besar percepatan gravitasi yang dirasakan oleh satelit tersebut pada orbitnya adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1,25 m/s²",
      "2,5 m/s²",
      "5,0 m/s²",
      "7,5 m/s²",
      "10,0 m/s²"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum kuadrat terbalik kuat medan gravitasi: $g(r) = G \\frac{M}{r^2}$ dengan jarak diukur dari pusat massa bumi ($r = R + h$).</div>",
      "steps": "<ol><li>1) Jarak satelit dari pusat bumi: $r = R + h = R + R = 2R$.<br>2) Kuat medan gravitasi pada ketinggian tersebut:<br>$$g' = g \\left(\\frac{R}{r}\\right)^2 = 10 \\left(\\frac{R}{2R}\\right)^2 = 10 \\times \\frac{1}{4} = 2{,}5\\text{ m/s}^2$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering lupa mengkuadratkan perbandingan jarak ($10 / 2 = 5{,}0\\text{ m/s}^2$) atau lupa bahwa jarak harus dihitung dari pusat bumi.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "hukum-2-newton"
  },
  {
    "id": "fis-din-18",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Gravitasi Universal Newton",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah eksoplanet baru yang ditemukan oleh teleskop antariksa memiliki massa dua kali massa bumi ($M_P = 2 M_B$) dan jari-jari setengah dari jari-jari bumi ($R_P = 0{,}5 R_B$). Jika kuat medan gravitasi di permukaan bumi bernilai $g$, maka kuat medan gravitasi di permukaan eksoplanet tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "g",
      "2g",
      "4g",
      "8g",
      "16g"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Perbandingan kuat medan gravitasi permukaan planet: $g = G \\frac{M}{R^2}$.</div>",
      "steps": "<ol><li>$$\\frac{g_P}{g_B} = \\left(\\frac{M_P}{M_B}\\right) \\left(\\frac{R_B}{R_P}\\right)^2 = (2) \\left(\\frac{1}{0{,}5}\\right)^2 = 2 \\times 4 = 8 \\Rightarrow g_P = 8g$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa mengkuadratkan jari-jari sehingga menghitung $\\frac{2}{0{,}5} = 4g$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "hukum-2-newton"
  },
  {
    "id": "fis-din-41",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Gravitasi Universal Newton",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah bola baja raksasa bermassa $m_1 = 4000\\text{ kg}$ dan $m_2 = 9000\\text{ kg}$ terpisah sejauh $r = 6\\text{ meter}$ antar-pusat massanya. Jika $G$ adalah konstanta gravitasi universal Newton, besar gaya gravitasi tarik-menarik antara kedua bola tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "10⁴ G N",
      "10⁵ G N",
      "10⁶ G N",
      "6 × 10⁶ G N",
      "36 × 10⁶ G N"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum Gravitasi Universal Newton: $F = G \\frac{m_1 m_2}{r^2}$.</div>",
      "steps": "<ol><li>$$F = G \\frac{(4000)(9000)}{6^2} = G \\frac{36 \\times 10^6}{36} = 10^6 G\\text{ N}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa mengkuadratkan jarak pemisah di penyebut ($r^2 = 36$ bukan $6$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "hukum-2-newton"
  },
  {
    "id": "fis-din-19",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Gravitasi Universal Newton",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua buah benda angkasa $M_1$ dan $M_2$ berada pada posisi tetap dan terpisah sejauh $d$. Diketahui massa benda pertama adalah sembilan kali massa benda kedua ($M_1 = 9 M_2$). Sebuah wahana antariksa tak berawak melintas di sepanjang garis hubung kedua benda. Jarak wahana dari benda pertama $M_1$ agar resultan medan gravitasi total yang dialami wahana bernilai nol adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "0,25 d",
      "0,33 d",
      "0,50 d",
      "0,60 d",
      "0,75 d"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Titik netral gravitasi: kesetimbangan kuat medan gravitasi dua sumber massa segaris ($g_1 = g_2$).</div>",
      "steps": "<ol><li>Misalkan jarak dari $M_1$ adalah $x$, maka jarak dari $M_2$ adalah $d - x$.<br>$$G \\frac{M_1}{x^2} = G \\frac{M_2}{(d - x)^2} \\Rightarrow \\frac{9 M_2}{x^2} = \\frac{M_2}{(d - x)^2}$$<br>Tarik akar kedua ruas: $\\frac{3}{x} = \\frac{1}{d - x} \\Rightarrow 3(d - x) = x \\Rightarrow 3d = 4x \\Rightarrow x = \\frac{3}{4}d = 0{,}75 d$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering memilih opsi $0{,}25 d$ yang merupakan jarak titik netral dari benda kedua ($M_2$), bukan dari benda pertama ($M_1$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "hukum-2-newton"
  },
  {
    "id": "fis-din-20",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Gravitasi Universal Newton",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah satelit komunikasi bermassa $m$ bergerak dalam lintasan orbit lingkaran stabil mengelilingi bumi pada ketinggian $h = 3R$ di atas permukaan bumi, dengan $R$ adalah jari-jari bumi. Jika percepatan gravitasi di permukaan bumi adalah $g$, kelajuan orbit satelit tersebut dinyatakan dalam variabel $g$ dan $R$ adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1/4 √(gR)",
      "1/3 √(gR)",
      "1/2 √(gR)",
      "√(gR)",
      "2 √(gR)"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kelajuan orbit satelit lingkaran: gaya gravitasi bumi bertindak sebagai gaya sentripetal ($\\frac{G M m}{r^2} = \\frac{m v^2}{r}$).</div>",
      "steps": "<ol><li>1) Jarak orbit dari pusat bumi: $r = R + h = R + 3R = 4R$.<br>2) Kelajuan orbit: $v = \\sqrt{\\frac{GM}{r}}$.<br>3) Hubungan konstanta permukaan: $g = \\frac{GM}{R^2} \\Rightarrow GM = g R^2$.<br>4) Substitusi: $v = \\sqrt{\\frac{g R^2}{4R}} = \\sqrt{\\frac{g R}{4}} = \\frac{1}{2}\\sqrt{g R}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengabaikan penambahan jari-jari bumi ($r = 3R$ bukan $4R$), atau lupa menarik akar kuadrat dari angka 4 di penyebut.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "hukum-2-newton"
  },
  {
    "id": "fis-din-43",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Gravitasi Universal Newton",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua buah satelit riset $A$ dan $B$ mengorbit bumi dalam lintasan lingkaran. Satelit $A$ mengorbit dengan jari-jari orbit $r_A = R$ dan memiliki periode revolusi $T_A = 8\\text{ hari}$. Jika satelit $B$ mengorbit dengan jari-jari orbit $r_B = 4R$, periode revolusi satelit $B$ mengelilingi bumi adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "32 hari",
      "64 hari",
      "96 hari",
      "128 hari",
      "256 hari"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum III Kepler: perbandingan kuadrat periode revolusi sama dengan perbandingan pangkat tiga jari-jari orbit ($\\frac{T_B^2}{T_A^2} = \\frac{r_B^3}{r_A^3}$).</div>",
      "steps": "<ol><li>$$\\left(\\frac{T_B}{T_A}\\right)^2 = \\left(\\frac{r_B}{r_A}\\right)^3 = \\left(\\frac{4R}{R}\\right)^3 = 64 \\Rightarrow \\frac{T_B}{T_A} = \\sqrt{64} = 8 \\Rightarrow T_B = 8 \\times T_A = 8 \\times 8 = 64\\text{ hari}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Hanya menggunakan perbandingan linear ($4 \\times 8 = 32\\text{ hari}$) tanpa menerapkan aturan pangkat $T^2 \\propto r^3$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "hukum-2-newton"
  },
  {
    "id": "fis-din-44",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Gravitasi Universal Newton",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Kelajuan lepas (*escape velocity*) sebuah pesawat antariksa dari permukaan bumi adalah $v_{\\text{lepas}} = \\sqrt{\\frac{2GM}{R}}$. Pada sebuah planet super yang memiliki massa $8$ kali massa bumi ($M_P = 8 M_B$) dan jari-jari $2$ kali jari-jari bumi ($R_P = 2 R_B$), kelajuan lepas roket dari permukaan planet tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2 v_lepas",
      "4 v_lepas",
      "√2 v_lepas",
      "2√2 v_lepas",
      "8 v_lepas"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kelajuan lepas medan gravitasi: $v_{\\text{lepas}} = \\sqrt{\\frac{2GM}{R}}$.</div>",
      "steps": "<ol><li>$$\\frac{v_{\\text{lepas}, P}}{v_{\\text{lepas}, B}} = \\sqrt{\\left(\\frac{M_P}{M_B}\\right) \\left(\\frac{R_B}{R_P}\\right)} = \\sqrt{\\frac{8}{2}} = \\sqrt{4} = 2 \\Rightarrow v_{\\text{lepas}, P} = 2 v_{\\text{lepas}, B}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa menarik tanda akar kuadrat dari rasio $\\frac{8}{2} = 4$, sehingga menjawab $4 v_{\\text{lepas}}$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "hukum-2-newton"
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
