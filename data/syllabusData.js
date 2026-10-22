/**
 * TKA Physics & Advanced Mathematics Syllabus Hierarchy
 * Complete 3-Pillar / Section Structure:
 * I. Fisika (TKA)
 * II. Matematika Lanjut (TKA)
 * III. Bab Fundamental (Materi Prasyarat)
 */

if (typeof window === 'undefined') {
  global.window = global;
}

window.SYLLABUS_DATA = {
  pillars: [
    {
      id: "fisika",
      name: "Fisika (TKA)",
      shortName: "FISIKA",
      order: 1,
      accentColor: "#FF5A26",
      accentBg: "#FFF0EB",
      icon: "fa-bolt-lightning",
      description: "Materi uji Fisika Saintek/TKA: Mekanika, Fluida, Gelombang, Kalor & Termodinamika, dan Kelistrikan.",
      chapters: [
        {
          id: "fis-kin",
          title: "Kinematika",
          order: 1,
          description: "Studi gerak benda tanpa memperhitungkan penyebab gerak, dari pengukuran presisi hingga gerak lengkung dua dimensi.",
          subTopics: [
            {
              id: "fis-kin-1",
              title: "Pengukuran",
              indicators: "Prinsip kerja & pembacaan jangka sorong; mikrometer sekrup; neraca tiga lengan; kaidah pelaporan & perhitungan angka penting."
            },
            {
              id: "fis-kin-2",
              title: "Gerak Lurus",
              indicators: "Jarak & perpindahan (skalar & vektor); kelajuan & kecepatan; karakteristik & grafik GLB; karakteristik, rumus, & grafik GLBB."
            },
            {
              id: "fis-kin-3",
              title: "Gerak Lengkung",
              indicators: "Komponen kecepatan & posisi gerak parabola horizontal; titik tertinggi & jarak tempuh maksimum gerak parabola; besaran sudut, kecepatan linier, & percepatan sentripetal GMB."
            }
          ]
        },
        {
          id: "fis-din",
          title: "Dinamika",
          order: 2,
          description: "Studi gaya penyebab gerak translasi dan rotasi, hukum kekekalan momentum, dan keseimbangan benda tegar.",
          subTopics: [
            {
              id: "fis-din-1",
              title: "Hubungan Gaya dan Gerak",
              indicators: "Hukum I Newton (kelembaman); Hukum II Newton ($\\Sigma F = ma$); Hukum III Newton (aksi-reaksi); diagram gaya (berat, normal, gesek statis/kinetis, tegangan tali)."
            },
            {
              id: "fis-din-2",
              title: "Momentum dan Impuls",
              indicators: "Momentum linier; impuls & teorema impuls-momentum; Hukum Kekekalan Momentum pada tumbukan."
            },
            {
              id: "fis-din-3",
              title: "Dinamika Rotasi",
              indicators: "Momen gaya (torsi); momen inersia benda tegar; Hukum Newton gerak rotasi ($\\Sigma \\tau = I\\alpha$)."
            }
          ]
        },
        {
          id: "fis-flu",
          title: "Fluida",
          order: 3,
          description: "Karakteristik dan hukum mekanika fluida pada kondisi statis (diam) dan dinamis (mengalir).",
          subTopics: [
            {
              id: "fis-flu-1",
              title: "Fluida Statis",
              indicators: "Tekanan hidrostatis & mutlak; Hukum Pascal sistem hidrolik; Hukum Archimedes (terapung, melayang, tenggelam)."
            },
            {
              id: "fis-flu-2",
              title: "Fluida Dinamis",
              indicators: "Persamaan kontinuitas & debit aliran; Persamaan Bernoulli."
            }
          ]
        },
        {
          id: "fis-gel",
          title: "Gelombang",
          order: 4,
          description: "Perambatan energi mekanik bunyi dan gelombang elektromagnetik cahaya serta prinsip alat-alat optik.",
          subTopics: [
            {
              id: "fis-gel-1",
              title: "Gelombang Bunyi",
              indicators: "Karakteristik rambatan gelombang mekanik bunyi; sumber bunyi (dawai & pipa organa); intensitas & taraf intensitas bunyi; efek Doppler."
            },
            {
              id: "fis-gel-2",
              title: "Gelombang Cahaya",
              indicators: "Spektrum gelombang elektromagnetik; pemantulan & pembiasan cahaya; bayangan cermin (datar, cekung, cembung); bayangan lensa (cekung, cembung); alat optik (mata, kacamata, lup, mikroskop, teropong)."
            }
          ]
        },
        {
          id: "fis-ter",
          title: "Kalor dan Termodinamika",
          order: 5,
          description: "Interaksi energi termal, pengaruh kalor pada wujud materi, kinetika gas ideal, hingga siklus mesin termal.",
          subTopics: [
            {
              id: "fis-ter-1",
              title: "Kalor dan Perpindahannya",
              indicators: "Perubahan suhu zat; perubahan wujud zat (kalor laten); pemuaian (panjang, luas, volume); konduksi, konveksi, radiasi; Asas Black."
            },
            {
              id: "fis-ter-2",
              title: "Pemanasan Global",
              indicators: "Mekanisme efek rumah kaca; faktor penyebab; solusi penanggulangan."
            },
            {
              id: "fis-ter-3",
              title: "Gas Ideal",
              indicators: "Hukum Boyle; Hukum Boyle-Gay Lussac; Persamaan umum gas ideal ($PV = nRT$)."
            },
            {
              id: "fis-ter-4",
              title: "Termodinamika",
              indicators: "Proses isobarik, isokhorik, isotermal, adiabatik; usaha luar & energi dalam; Hukum I & II Termodinamika; siklus Carnot & efisiensi mesin kalor."
            }
          ]
        },
        {
          id: "fis-lis",
          title: "Kelistrikan",
          order: 6,
          description: "Interaksi muatan diam (elektrostatis) serta dinamika arus listrik searah dalam jaringan resistor dan baterai.",
          subTopics: [
            {
              id: "fis-lis-1",
              title: "Listrik Statis",
              indicators: "Muatan & interaksi elektrostatik; Hukum Coulomb; kuat medan listrik; potensial & energi potensial listrik."
            },
            {
              id: "fis-lis-2",
              title: "Rangkaian Arus Searah (DC)",
              indicators: "Hukum Ohm; Hukum I Kirchhoff; Hukum II Kirchhoff; hambatan pengganti seri-paralel; energi & daya listrik."
            }
          ]
        }
      ]
    },
    {
      id: "matematika",
      name: "Matematika Lanjut (TKA)",
      shortName: "MATEMATIKA LANJUT",
      order: 2,
      accentColor: "#2563EB",
      accentBg: "#EFF6FF",
      icon: "fa-calculator",
      description: "Materi uji Matematika Lanjut Saintek/TKA: Aljabar, Geometri & Pengukuran, dan Trigonometri & Kalkulus Dasar.",
      chapters: [
        {
          id: "mtk-alj",
          title: "Aljabar",
          order: 1,
          description: "Matriks, aljabar polinomial suku banyak tingkat tinggi, serta fungsi real dan pemetaan analitis.",
          subTopics: [
            {
              id: "mtk-alj-1",
              title: "Matriks",
              indicators: "Penjumlahan & pengurangan; perkalian skalar; perkalian antarmatriks; determinan $2\\times2$ & $3\\times3$; invers $2\\times2$ & $3\\times3$; penyelesaian SPL & program linear dengan matriks."
            },
            {
              id: "mtk-alj-2",
              title: "Polinomial",
              indicators: "Penjumlahan, pengurangan, perkalian (\\text{orde} \\le 4); pembagian bersusun & skema Horner; pemfaktoran suku banyak; Teorema Sisa; Teorema Faktor."
            },
            {
              id: "mtk-alj-3",
              title: "Fungsi",
              indicators: "Domain, kodomain, range, & grafik fungsi (polinom derajat $\\le 4$, rasional, bentuk akar, eksponensial, logaritma, nilai mutlak, trigonometri)."
            }
          ]
        },
        {
          id: "mtk-geo",
          title: "Geometri dan Pengukuran",
          order: 2,
          description: "Vektor ruang dan bidang, geometri analitik lingkaran, serta komposisi transformasi koordinat matriks.",
          subTopics: [
            {
              id: "mtk-geo-1",
              title: "Vektor",
              indicators: "Komponen vektor $\\mathbb{R}^2$ & $\\mathbb{R}^3$; panjang/besar vektor; penjumlahan & pengurangan vektor; perkalian skalar (dot product)."
            },
            {
              id: "mtk-geo-2",
              title: "Lingkaran",
              indicators: "Persamaan lingkaran pusat $(0,0)$, $(a,b)$, & bentuk umum; persamaan garis singgung (titik pada lingkaran, gradien tertentu, titik luar lingkaran); keliling, luas, panjang busur, luas juring, & tembereng."
            },
            {
              id: "mtk-geo-3",
              title: "Transformasi Geometri",
              indicators: "Translasi, refleksi, rotasi, dilatasi (titik, garis, bangun datar); komposisi transformasi; representasi matriks transformasi."
            }
          ]
        },
        {
          id: "mtk-tri",
          title: "Trigonometri & Kalkulus Dasar",
          order: 3,
          description: "Konsep limit fungsi aljabar dan limit trigonometri analitis murni tanpa aturan L'Hôpital.",
          subTopics: [
            {
              id: "mtk-tri-1",
              title: "Limit Fungsi",
              indicators: "Limit fungsi aljabar (substitusi, pemfaktoran, rasionalisasi akar tanpa L'Hôpital); limit fungsi trigonometri (teorema dasar & manipulasi identitas tanpa L'Hôpital)."
            }
          ]
        }
      ]
    },
    {
      id: "fundamental",
      name: "Bab Fundamental (Materi Prasyarat)",
      shortName: "FUNDAMENTAL",
      order: 3,
      accentColor: "#059669",
      accentBg: "#ECFDF5",
      icon: "fa-shapes",
      description: "Fondasi aljabar, trigonometri, dan geometri analitik prasyarat mutlak untuk menyelesaikan seluruh materi TKA tingkat lanjut.",
      chapters: [
        {
          id: "mtk-fun",
          title: "Bab Fundamental",
          order: 1,
          isFoundation: true,
          badge: "FONDASI",
          description: "Fondasi aljabar, trigonometri, dan geometri analitik prasyarat mutlak untuk menyelesaikan seluruh materi TKA tingkat lanjut.",
          subTopics: [
            {
              id: "mtk-fun-1",
              title: "Trigonometri Analitik Dasar",
              indicators: "Perbandingan sisi ($\\sin, \\cos, \\tan$) segitiga siku-siku; sudut istimewa kuadran I; relasi sudut kuadran II, III, IV; identitas Pythagoras ($\\sin^2 x + \\cos^2 x = 1$); sudut rangkap ($\\sin 2x, \\cos 2x$); jumlah & selisih sudut sinus & kosinus."
            },
            {
              id: "mtk-fun-2",
              title: "Aljabar Elementer",
              indicators: "Pengelompokan suku sejenis & pemfaktoran kuadrat; penyederhanaan pecahan aljabar; substitusi & eliminasi SPLDV & SPLTV."
            },
            {
              id: "mtk-fun-3",
              title: "Geometri Analitik Bidang",
              indicators: "Koordinat Kartesius & jarak antartitik; persamaan garis lurus ($y = mx + c$, $ax + by + c = 0$); gradien garis sejajar ($m_1 = m_2$) & tegak lurus ($m_1 \\cdot m_2 = -1$); jarak titik ke garis lurus."
            },
            {
              id: "mtk-fun-4",
              title: "Pertidaksamaan dan Nilai Mutlak",
              indicators: "Syarat pecahan terdefinisi; syarat bentuk akar terdefinisi; sifat persamaan & pertidaksamaan nilai mutlak."
            },
            {
              id: "mtk-fun-5",
              title: "Eksponen dan Logaritma",
              indicators: "Aturan pangkat bulat & rasional; perpangkatan basis bilangan asli; sifat penjumlahan, pengurangan, perpangkatan numerus logaritma; perubahan basis logaritma."
            }
          ]
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.SYLLABUS_DATA;
}
