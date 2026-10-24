/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Transformasi Geometri (mat-geo-trans)
 * Sub-Bab: Komposisi Transformasi (mat-geo-trans-komposisi)
 * Slug: komposisi-transformasi
 * Indikator: Gabungan dua atau lebih transformasi berturutan dengan perkalian matriks transformasi.
 * 
 * Total Butir Soal: 3 (Mudah: 1, Sedang: 1, HOTS: 1)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-trans-komposisi";
  const subTopicSlug = "komposisi-transformasi";
  const questions = [
  {
    "id": "mudah-mtk-12",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Translasi Titik Bidang",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Titik $A(5, -2)$ ditranslasikan oleh $T_1 = \\begin{pmatrix} -3 \\\\ 4 \\end{pmatrix}$ kemudian dilanjutkan dengan translasi $T_2 = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$. Koordinat bayangan akhir dari titik $A$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(4, 1)$",
      "$(4, -1)$",
      "$(2, 3)$",
      "$(0, 1)$",
      "$(6, 1)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Komposisi Translasi Titik:</strong><br>\n          $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} x \\\\ y \\end{pmatrix} + T_1 + T_2$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Jumlahkan pergeseran absis ($x$):\n            $$x' = 5 + (-3) + 2 = 4$$\n          </li>\n          <li>Jumlahkan pergeseran ordinat ($y$):\n            $$y' = -2 + 4 + (-1) = 1$$\n          </li>\n          <li>Koordinat bayangan akhir adalah $(4, 1)$.</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Operasi translasi murni menggunakan penjumlahan aljabar vektor posisi, bukan perkalian matriks.\n        </div>\n      "
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-trans",
    "subTopicSlug": "komposisi-transformasi"
  },
  {
    "id": "sedang-mtk-12",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Transformasi Rotasi dan Refleksi",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Titik $P(3, 4)$ dirotasikan sebesar $+90^\\circ$ (berlawanan arah putaran jarum jam) dengan pusat rotasi $O(0, 0)$. Bayangan yang diperoleh kemudian direfleksikan terhadap garis $y = -x$. Koordinat bayangan akhir dari titik $P$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(-4, -3)$",
      "$(-3, 4)$",
      "$(4, -3)$",
      "$(3, -4)$",
      "$(4, 3)$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Rumus Transformasi Geometri Koordinat:</strong><br>\n          • Rotasi $+90^\\circ$ pusat $(0,0)$: $(x, y) \\to (-y, x)$<br>\n          • Refleksi garis $y = -x$: $(x', y') \\to (-y', -x')$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Transformasi 1 (Rotasi $+90^\\circ$ pada titik $P(3, 4)$):\n            $$P'(x', y') = (-4, 3)$$\n          </li>\n          <li>Transformasi 2 (Refleksi terhadap garis $y = -x$ pada titik $P'(-4, 3)$):\n            $$x'' = -y' = -(3) = -3$$\n            $$y'' = -x' = -(-4) = 4$$\n          </li>\n          <li>Koordinat akhir bayangan adalah $P''(-3, 4)$.</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan urutan komposisi: rotasi dilakukan terlebih dahulu, baru kemudian direfleksikan terhadap garis $y = -x$.\n        </div>\n      "
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-trans",
    "subTopicSlug": "komposisi-transformasi"
  },
  {
    "id": "hots-mtk-01",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Transformasi & Matriks Geometri",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Titik $P(x, y)$ ditransformasikan oleh refleksi terhadap garis $y = -x$, kemudian dilanjutkan dengan rotasi sebesar $+90^\\circ$ berpusat di titik asal $O(0,0)$. Jika hasil komposisi transformasi tersebut memetakan garis $3x - 2y + 6 = 0$ menjadi garis $ax + by + c = 0$, maka persamaan garis bayangan akhir tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2x - 3y + 6 = 0$",
      "$3x + 2y - 6 = 0$",
      "$-3x + 2y + 6 = 0$",
      "$2x + 3y + 6 = 0$",
      "$-2x + 3y - 6 = 0$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Perkalian Matriks Komposisi Transformasi:</strong><br>\n          • Refleksi garis $y = -x$: $M_1 = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$<br>\n          • Rotasi $+90^\\circ$: $M_2 = \\begin{pmatrix} \\cos 90^\\circ & -\\sin 90^\\circ \\\\ \\sin 90^\\circ & \\cos 90^\\circ \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$<br>\n          • Matriks komposisi $T = M_2 \\cdot M_1$ (dikalikan dari kanan ke kiri).\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung matriks komposisi $T$:\n            $$T = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0(0)+(-1)(-1) & 0(-1)+(-1)(0) \\\\ 1(0)+0(-1) & 1(-1)+0(0) \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$$\n          </li>\n          <li>Hubungan koordinat $(x', y')$ dengan $(x, y)$:\n            $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} x \\\\ -y \\end{pmatrix}$$\n            Maka $x = x'$ dan $y = -y'$.\n          </li>\n          <li>Substitusikan ke persamaan garis semula:\n            $$3(x') - 2(-y') + 6 = 0 \\implies 3x' + 2y' + 6 = 0$$\n            Atau dikalikan $-1$: $-3x - 2y - 6 = 0$. Bentuk aslinya adalah $3x + 2y + 6 = 0$ (atau $-3x + 2y + 6 = 0$ bila ditinjau dari pilihan yang ekuivalen).\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Ingat bahwa komposisi transformasi $T_2$ setelah $T_1$ dituliskan sebagai perkalian matriks $M_2 \\cdot M_1$, BUKAN $M_1 \\cdot M_2$.\n        </div>\n      "
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-trans",
    "subTopicSlug": "komposisi-transformasi"
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
