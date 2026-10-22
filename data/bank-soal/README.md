# Bank Soal TKA: Fisika & Matematika Lanjut (Modular Architecture)

Direktori ini memuat seluruh bank soal yang telah terstruktur secara modular dan komprehensif berdasarkan silabus resmi TKA Saintek (14 Bab: Fisika, Matematika Lanjut, dan Bab Fundamental Prasyarat).

Setiap sub-topik materi memiliki file tersendiri sehingga memudahkan pemeliharaan, penambahan soal baru, maupun penelaahan kurikulum tanpa perlu mengedit file monolitik yang besar.

---

## 📁 Struktur Direktori

```
data/bank-soal/
├── fisika/
│   ├── 01-kinematika/
│   │   ├── 01-pengukuran.js            (fis-kin-1)
│   │   ├── 02-gerak-lurus.js           (fis-kin-2)
│   │   └── 03-gerak-lengkung.js        (fis-kin-3)
│   ├── 02-dinamika/
│   │   ├── 01-gaya-dan-gerak.js        (fis-din-1)
│   │   ├── 02-momentum-dan-impuls.js   (fis-din-2)
│   │   └── 03-dinamika-rotasi.js       (fis-din-3)
│   ├── 03-fluida/
│   │   ├── 01-fluida-statis.js         (fis-flu-1)
│   │   └── 02-fluida-dinamis.js        (fis-flu-2)
│   ├── 04-gelombang/
│   │   ├── 01-karakteristik-bunyi.js   (fis-gel-1)
│   │   ├── 02-dawai-pipa-organa.js     (fis-gel-2)
│   │   ├── 03-intensitas-bunyi.js      (fis-gel-3)
│   │   ├── 04-efek-doppler.js          (fis-gel-4)
│   │   ├── 05-pemantulan-pembiasan.js  (fis-gel-5)
│   │   └── 06-alat-optik.js            (fis-gel-6)
│   ├── 05-kalor-termodinamika/
│   │   ├── 01-kalor-dan-perpindahannya.js (fis-ter-1)
│   │   ├── 02-pemanasan-global.js         (fis-ter-2)
│   │   ├── 03-gas-ideal.js                (fis-ter-3)
│   │   └── 04-termodinamika.js            (fis-ter-4)
│   └── 06-kelistrikan/
│       ├── 01-listrik-statis.js        (fis-lis-1)
│       └── 02-rangkaian-arus-searah.js (fis-lis-2)
├── matematika-lanjut/
│   ├── 01-aljabar/
│   │   ├── 01-matriks.js               (mtk-alj-1)
│   │   ├── 02-polinomial.js            (mtk-alj-2)
│   │   └── 03-fungsi.js                (mtk-alj-3)
│   ├── 02-geometri-pengukuran/
│   │   ├── 01-vektor.js                (mtk-geo-1)
│   │   ├── 02-lingkaran.js             (mtk-geo-2)
│   │   └── 03-transformasi-geometri.js (mtk-geo-3)
│   └── 03-trigonometri/
│       └── 01-limit-fungsi.js          (mtk-tri-1)
├── fundamental/
│   ├── 01-trigonometri-analitik-dasar.js (fun-tri-1)
│   ├── 02-aljabar-elementer.js           (fun-alj-1)
│   ├── 03-geometri-analitik-bidang.js    (fun-geo-1)
│   ├── 04-pertidaksamaan-dan-nilai-mutlak.js (fun-mut-1)
│   └── 05-eksponen-dan-logaritma.js      (fun-eks-1)
├── bank-soal-bundle.js                 (Browser bundle terkompilasi)
├── index.js                            (Node.js master aggregator)
└── README.md                           (Dokumentasi panduan ini)
```

---

## 🛠️ Format Standar Butir Soal

Setiap soal ditulis dalam format objek JSON/JS berikut:

```javascript
{
  id: "kode-unik-soal",              // Contoh: "fis-kin-01", "mudah-fis-01"
  subject: "FISIKA",                 // "FISIKA" atau "MATEMATIKA"
  pillarId: "fisika",                // "fisika" atau "matematika"
  chapterId: "fis-kin",              // Sesuai id pada syllabusData.js
  subTopicId: "fis-kin-1",           // Sesuai id sub-topik pada syllabusData.js
  category: "Nama Indikator Topik",  // Contoh: "Pembacaan Jangka Sorong"
  difficulty: "mudah",               // "mudah", "sedang", atau "hots"
  difficultyLabel: "Mudah",          // "Mudah", "Sedang", atau "HOTS"
  statement: "Teks soal dengan KaTeX Math ($...$)",
  hasDiagram: false,                 // true jika menyertakan diagram SVG
  diagramSvg: "",                    // String kode SVG (jika ada)
  diagramCaption: "",
  options: [                         // Tepat 5 pilihan (A, B, C, D, E)
    "Opsi A",
    "Opsi B",
    "Opsi C",
    "Opsi D",
    "Opsi E"
  ],
  correctIndex: 0,                   // 0 untuk A, 1 untuk B, 2 untuk C, 3 untuk D, 4 untuk E
  solution: {
    concept: "Penjelasan konsep / teori kunci KaTeX",
    steps: "Langkah-langkah sistematis penyelesaian",
    pitfalls: "Jebakan / kesalahan umum yang sering dialami siswa"
  }
}
```

---

## 🚀 Cara Menambahkan Soal Baru

Untuk menambahkan soal baru ke dalam bank soal:
1. Buka file sub-topik yang sesuai di dalam folder `data/bank-soal/` (misalnya untuk menambahkan soal Mikrometer Sekrup, buka `data/bank-soal/fisika/01-kinematika/01-pengukuran.js`).
2. Tambahkan objek soal baru ke dalam array `questions`.
3. Jalankan perintah kompilasi dan validasi:
   ```bash
   node scripts/build_full_modular_system.js
   ```
   Script akan secara otomatis memvalidasi struktur data dan meregenerasi bundle browser.
