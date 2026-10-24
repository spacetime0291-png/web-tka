/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Cahaya & Optik (fis-gel-optik)
 * Sub-Bab: Mata dan Kacamata (fis-gel-optik-mata)
 * Slug: mata-dan-kacamata
 * Indikator: Cacat mata miopi, hipermetropi, dan penentuan kuat lensa kacamata bantu.
 * 
 * Total Butir Soal: 4 (Mudah: 1, Sedang: 3, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-optik-mata";
  const subTopicSlug = "mata-dan-kacamata";
  const questions = [
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
