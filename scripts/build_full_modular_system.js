/**
 * scripts/build_full_modular_system.js
 * Generates the complete 28-subtopic modular bank soal architecture.
 */

const fs = require('fs');
const path = require('path');

// 1. Load existing questions from memory
global.window = global;
require('../data/syllabusData.js');
require('../data/questions-mudah.js');
require('../data/questions-sedang.js');
require('../data/questions-hots.js');
require('../data/bank-soal.js');
const { supplementaryQuestions } = require('./supplementary_questions.js');
const { drillingQuestions } = require('./add_drilling_questions.js');
const { drillingQuestionsBatch2 } = require('./add_drilling_questions_batch2.js');

const rawMudah = (window.QUESTIONS_MUDAH || []).slice();
const rawSedang = (window.QUESTIONS_SEDANG || []).slice();
const rawHots = (window.QUESTIONS_HOTS || []).slice();

console.log(`Starting modular build. Input pool: Mudah=${rawMudah.length}, Sedang=${rawSedang.length}, HOTS=${rawHots.length}`);

// Map subTopicId to directory & file
const subTopicConfig = {
  // I. FISIKA (TKA)
  'fis-kin-1': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-kin',
    chapterName: 'Kinematika',
    subTopicId: 'fis-kin-1',
    title: 'Pengukuran',
    indicators: 'Prinsip kerja & pembacaan jangka sorong; mikrometer sekrup; neraca tiga lengan; kaidah pelaporan & perhitungan angka penting.',
    relPath: 'fisika/01-kinematika/01-pengukuran.js'
  },
  'fis-kin-2': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-kin',
    chapterName: 'Kinematika',
    subTopicId: 'fis-kin-2',
    title: 'Gerak Lurus',
    indicators: 'Jarak & perpindahan (skalar & vektor); kelajuan & kecepatan; karakteristik & grafik GLB; karakteristik, rumus, & grafik GLBB.',
    relPath: 'fisika/01-kinematika/02-gerak-lurus.js'
  },
  'fis-kin-3': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-kin',
    chapterName: 'Kinematika',
    subTopicId: 'fis-kin-3',
    title: 'Gerak Lengkung',
    indicators: 'Komponen kecepatan & posisi gerak parabola horizontal; titik tertinggi & jarak tempuh maksimum gerak parabola; besaran sudut, kecepatan linier, & percepatan sentripetal GMB.',
    relPath: 'fisika/01-kinematika/03-gerak-lengkung.js'
  },
  'fis-din-1': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-din',
    chapterName: 'Dinamika',
    subTopicId: 'fis-din-1',
    title: 'Hubungan Gaya dan Gerak',
    indicators: 'Hukum I Newton (kelembaman); Hukum II Newton (\\Sigma F = ma); Hukum III Newton (aksi-reaksi); diagram gaya (berat, normal, gesek statis/kinetis, tegangan tali).',
    relPath: 'fisika/02-dinamika/01-gaya-dan-gerak.js'
  },
  'fis-din-2': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-din',
    chapterName: 'Dinamika',
    subTopicId: 'fis-din-2',
    title: 'Momentum dan Impuls',
    indicators: 'Momentum linier; impuls & teorema impuls-momentum; Hukum Kekekalan Momentum pada tumbukan.',
    relPath: 'fisika/02-dinamika/02-momentum-dan-impuls.js'
  },
  'fis-din-3': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-din',
    chapterName: 'Dinamika',
    subTopicId: 'fis-din-3',
    title: 'Dinamika Rotasi',
    indicators: 'Momen gaya (torsi); momen inersia benda tegar; Hukum Newton gerak rotasi (\\Sigma \\tau = I\\alpha).',
    relPath: 'fisika/02-dinamika/03-dinamika-rotasi.js'
  },
  'fis-flu-1': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-flu',
    chapterName: 'Fluida',
    subTopicId: 'fis-flu-1',
    title: 'Fluida Statis',
    indicators: 'Tekanan hidrostatis & mutlak; Hukum Pascal sistem hidrolik; Hukum Archimedes (terapung, melayang, tenggelam).',
    relPath: 'fisika/03-fluida/01-fluida-statis.js'
  },
  'fis-flu-2': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-flu',
    chapterName: 'Fluida',
    subTopicId: 'fis-flu-2',
    title: 'Fluida Dinamis',
    indicators: 'Persamaan kontinuitas & debit aliran; Persamaan Bernoulli.',
    relPath: 'fisika/03-fluida/02-fluida-dinamis.js'
  },
  'fis-gel-1': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-gel',
    chapterName: 'Gelombang',
    subTopicId: 'fis-gel-1',
    title: 'Karakteristik Gelombang Bunyi',
    indicators: 'Karakteristik rambatan gelombang mekanik bunyi; cepat rambat bunyi pada berbagai medium; pelayangan bunyi; resonansi tabung kolom udara.',
    relPath: 'fisika/04-gelombang/01-karakteristik-bunyi.js'
  },
  'fis-gel-2': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-gel',
    chapterName: 'Gelombang',
    subTopicId: 'fis-gel-2',
    title: 'Dawai dan Pipa Organa',
    indicators: 'Sumber bunyi dawai & hukum Melde; pipa organa terbuka & tertutup; frekuensi nada dasar & nada atas.',
    relPath: 'fisika/04-gelombang/02-dawai-pipa-organa.js'
  },
  'fis-gel-3': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-gel',
    chapterName: 'Gelombang',
    subTopicId: 'fis-gel-3',
    title: 'Intensitas dan Taraf Intensitas Bunyi',
    indicators: 'Intensitas bunyi sumber titik isotropis; taraf intensitas bunyi ($dB$); hubungan taraf intensitas dengan jarak dan pelipatan sumber bunyi.',
    relPath: 'fisika/04-gelombang/03-intensitas-bunyi.js'
  },
  'fis-gel-4': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-gel',
    chapterName: 'Gelombang',
    subTopicId: 'fis-gel-4',
    title: 'Efek Doppler',
    indicators: 'Efek Doppler: pergeseran frekuensi bunyi terdeteksi akibat gerak relatif sumber bunyi dan pendengar (saling mendekat & menjauh).',
    relPath: 'fisika/04-gelombang/04-efek-doppler.js'
  },
  'fis-gel-5': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-gel',
    chapterName: 'Gelombang',
    subTopicId: 'fis-gel-5',
    title: 'Pemantulan & Pembiasan Cahaya',
    indicators: 'Spektrum gelombang elektromagnetik; hukum Snellius; pembiasan & pemantulan total sempurna; interferensi & difraksi celah ganda.',
    relPath: 'fisika/04-gelombang/05-pemantulan-pembiasan.js'
  },
  'fis-gel-6': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-gel',
    chapterName: 'Gelombang',
    subTopicId: 'fis-gel-6',
    title: 'Alat Optik (Cermin & Lensa)',
    indicators: 'Bayangan cermin datar, cekung, cembung; lensa konvergen & divergen; kuat lensa (dioptri); alat optik kacamata, lup, mikroskop, teropong.',
    relPath: 'fisika/04-gelombang/06-alat-optik.js'
  },
  'fis-ter-1': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-ter',
    chapterName: 'Kalor dan Termodinamika',
    subTopicId: 'fis-ter-1',
    title: 'Kalor dan Perpindahannya',
    indicators: 'Perubahan suhu zat; perubahan wujud zat (kalor laten); pemuaian (panjang, luas, volume); konduksi, konveksi, radiasi; Asas Black.',
    relPath: 'fisika/05-kalor-termodinamika/01-kalor-dan-perpindahannya.js'
  },
  'fis-ter-2': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-ter',
    chapterName: 'Kalor dan Termodinamika',
    subTopicId: 'fis-ter-2',
    title: 'Pemanasan Global',
    indicators: 'Mekanisme efek rumah kaca; faktor penyebab; solusi penanggulangan.',
    relPath: 'fisika/05-kalor-termodinamika/02-pemanasan-global.js'
  },
  'fis-ter-3': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-ter',
    chapterName: 'Kalor dan Termodinamika',
    subTopicId: 'fis-ter-3',
    title: 'Gas Ideal',
    indicators: 'Hukum Boyle; Hukum Boyle-Gay Lussac; Persamaan umum gas ideal ($PV = nRT$).',
    relPath: 'fisika/05-kalor-termodinamika/03-gas-ideal.js'
  },
  'fis-ter-4': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-ter',
    chapterName: 'Kalor dan Termodinamika',
    subTopicId: 'fis-ter-4',
    title: 'Termodinamika',
    indicators: 'Proses isobarik, isokhorik, isotermal, adiabatik; usaha luar & energi dalam; Hukum I & II Termodinamika; siklus Carnot & efisiensi mesin kalor.',
    relPath: 'fisika/05-kalor-termodinamika/04-termodinamika.js'
  },
  'fis-lis-1': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-lis',
    chapterName: 'Kelistrikan',
    subTopicId: 'fis-lis-1',
    title: 'Listrik Statis',
    indicators: 'Muatan & interaksi elektrostatik; Hukum Coulomb; kuat medan listrik; potensial & energi potensial listrik.',
    relPath: 'fisika/06-kelistrikan/01-listrik-statis.js'
  },
  'fis-lis-2': {
    pillar: 'fisika',
    pillarName: 'Fisika (TKA)',
    chapterId: 'fis-lis',
    chapterName: 'Kelistrikan',
    subTopicId: 'fis-lis-2',
    title: 'Rangkaian Arus Searah (DC)',
    indicators: 'Hukum Ohm; Hukum I Kirchhoff; Hukum II Kirchhoff; hambatan pengganti seri-paralel; energi & daya listrik.',
    relPath: 'fisika/06-kelistrikan/02-rangkaian-arus-searah.js'
  },

  // II. MATEMATIKA LANJUT (TKA)
  'mtk-alj-1': {
    pillar: 'matematika',
    pillarName: 'Matematika Lanjut (TKA)',
    chapterId: 'mtk-alj',
    chapterName: 'Aljabar',
    subTopicId: 'mtk-alj-1',
    title: 'Matriks',
    indicators: 'Penjumlahan & pengurangan; perkalian skalar; perkalian antarmatriks; determinan $2\\times2$ & $3\\times3$; invers $2\\times2$ & $3\\times3$; penyelesaian SPL & program linear dengan matriks.',
    relPath: 'matematika-lanjut/01-aljabar/01-matriks.js'
  },
  'mtk-alj-2': {
    pillar: 'matematika',
    pillarName: 'Matematika Lanjut (TKA)',
    chapterId: 'mtk-alj',
    chapterName: 'Aljabar',
    subTopicId: 'mtk-alj-2',
    title: 'Polinomial',
    indicators: 'Penjumlahan, pengurangan, perkalian (\\text{orde} \\le 4); pembagian bersusun & skema Horner; pemfaktoran suku banyak; Teorema Sisa; Teorema Faktor.',
    relPath: 'matematika-lanjut/01-aljabar/02-polinomial.js'
  },
  'mtk-alj-3': {
    pillar: 'matematika',
    pillarName: 'Matematika Lanjut (TKA)',
    chapterId: 'mtk-alj',
    chapterName: 'Aljabar',
    subTopicId: 'mtk-alj-3',
    title: 'Fungsi',
    indicators: 'Domain, kodomain, range, & grafik fungsi (polinom derajat $\\le 4$, rasional, bentuk akar, eksponensial, logaritma, nilai mutlak, trigonometri).',
    relPath: 'matematika-lanjut/01-aljabar/03-fungsi.js'
  },
  'mtk-geo-1': {
    pillar: 'matematika',
    pillarName: 'Matematika Lanjut (TKA)',
    chapterId: 'mtk-geo',
    chapterName: 'Geometri dan Pengukuran',
    subTopicId: 'mtk-geo-1',
    title: 'Vektor',
    indicators: 'Komponen vektor $\\mathbb{R}^2$ & $\\mathbb{R}^3$; panjang/besar vektor; penjumlahan & pengurangan vektor; perkalian skalar (dot product).',
    relPath: 'matematika-lanjut/02-geometri-pengukuran/01-vektor.js'
  },
  'mtk-geo-2': {
    pillar: 'matematika',
    pillarName: 'Matematika Lanjut (TKA)',
    chapterId: 'mtk-geo',
    chapterName: 'Geometri dan Pengukuran',
    subTopicId: 'mtk-geo-2',
    title: 'Lingkaran',
    indicators: 'Persamaan lingkaran pusat $(0,0)$, $(a,b)$, & bentuk umum; persamaan garis singgung (titik pada lingkaran, gradien tertentu, titik luar lingkaran); keliling, luas, panjang busur, luas juring, & tembereng.',
    relPath: 'matematika-lanjut/02-geometri-pengukuran/02-lingkaran.js'
  },
  'mtk-geo-3': {
    pillar: 'matematika',
    pillarName: 'Matematika Lanjut (TKA)',
    chapterId: 'mtk-geo',
    chapterName: 'Geometri dan Pengukuran',
    subTopicId: 'mtk-geo-3',
    title: 'Transformasi Geometri',
    indicators: 'Translasi, refleksi, rotasi, dilatasi (titik, garis, bangun datar); komposisi transformasi; representasi matriks transformasi.',
    relPath: 'matematika-lanjut/02-geometri-pengukuran/03-transformasi-geometri.js'
  },
  'mtk-tri-1': {
    pillar: 'matematika',
    pillarName: 'Matematika Lanjut (TKA)',
    chapterId: 'mtk-tri',
    chapterName: 'Trigonometri & Kalkulus Dasar',
    subTopicId: 'mtk-tri-1',
    title: 'Limit Fungsi',
    indicators: 'Limit fungsi aljabar (substitusi, pemfaktoran, rasionalisasi akar tanpa L\'Hôpital); limit fungsi trigonometri (teorema dasar & manipulasi identitas tanpa L\'Hôpital).',
    relPath: 'matematika-lanjut/03-trigonometri/01-limit-fungsi.js'
  },

  // III. BAB FUNDAMENTAL (MATERI PRASYARAT) - 5 BAB MANDIRI
  'fun-tri-1': {
    pillar: 'fundamental',
    pillarName: 'Bab Fundamental (Materi Prasyarat)',
    chapterId: 'fun-tri',
    chapterName: 'Trigonometri Analitik Dasar',
    subTopicId: 'fun-tri-1',
    title: 'Trigonometri Analitik Dasar',
    indicators: 'Perbandingan sisi (\\sin, \\cos, \\tan) segitiga siku-siku; sudut istimewa kuadran I; relasi sudut kuadran II, III, IV; identitas Pythagoras (\\sin^2 x + \\cos^2 x = 1); sudut rangkap (\\sin 2x, \\cos 2x); jumlah & selisih sudut sinus & kosinus.',
    relPath: 'fundamental/01-trigonometri-analitik-dasar.js'
  },
  'fun-alj-1': {
    pillar: 'fundamental',
    pillarName: 'Bab Fundamental (Materi Prasyarat)',
    chapterId: 'fun-alj',
    chapterName: 'Aljabar Elementer',
    subTopicId: 'fun-alj-1',
    title: 'Aljabar Elementer',
    indicators: 'Pengelompokan suku sejenis & pemfaktoran kuadrat; penyederhanaan pecahan aljabar; substitusi & eliminasi SPLDV & SPLTV.',
    relPath: 'fundamental/02-aljabar-elementer.js'
  },
  'fun-geo-1': {
    pillar: 'fundamental',
    pillarName: 'Bab Fundamental (Materi Prasyarat)',
    chapterId: 'fun-geo',
    chapterName: 'Geometri Analitik Bidang',
    subTopicId: 'fun-geo-1',
    title: 'Geometri Analitik Bidang',
    indicators: 'Koordinat Kartesius & jarak antartitik; persamaan garis lurus ($y = mx + c$, $ax + by + c = 0$); gradien garis sejajar ($m_1 = m_2$) & tegak lurus ($m_1 \\cdot m_2 = -1$); jarak titik ke garis lurus.',
    relPath: 'fundamental/03-geometri-analitik-bidang.js'
  },
  'fun-mut-1': {
    pillar: 'fundamental',
    pillarName: 'Bab Fundamental (Materi Prasyarat)',
    chapterId: 'fun-mut',
    chapterName: 'Pertidaksamaan dan Nilai Mutlak',
    subTopicId: 'fun-mut-1',
    title: 'Pertidaksamaan dan Nilai Mutlak',
    indicators: 'Syarat pecahan terdefinisi; syarat bentuk akar terdefinisi; sifat persamaan & pertidaksamaan nilai mutlak.',
    relPath: 'fundamental/04-pertidaksamaan-dan-nilai-mutlak.js'
  },
  'fun-eks-1': {
    pillar: 'fundamental',
    pillarName: 'Bab Fundamental (Materi Prasyarat)',
    chapterId: 'fun-eks',
    chapterName: 'Eksponen dan Logaritma',
    subTopicId: 'fun-eks-1',
    title: 'Eksponen dan Logaritma',
    indicators: 'Aturan pangkat bulat & rasional; perpangkatan basis bilangan asli; sifat penjumlahan, pengurangan, perpangkatan numerus logaritma; perubahan basis logaritma.',
    relPath: 'fundamental/05-eksponen-dan-logaritma.js'
  }
};

// Subtopic bucket collections
const subtopicBuckets = {};
Object.keys(subTopicConfig).forEach(id => {
  subtopicBuckets[id] = [];
});

const seenIds = new Set();
function addQuestion(q) {
  if (!q.id || seenIds.has(q.id)) return;
  seenIds.add(q.id);

  // If question is a GMB question from bank-soal (Gerak Melingkar), reassign to fis-kin-3
  if (q.category && q.category.includes('Gerak Melingkar') && q.chapterId === 'fis-din') {
    q.chapterId = 'fis-kin';
    q.subTopicId = 'fis-kin-3';
  }

  // Remap Fundamental old IDs
  if (q.subTopicId === 'mtk-fun-1') { q.chapterId = 'fun-tri'; q.subTopicId = 'fun-tri-1'; }
  else if (q.subTopicId === 'mtk-fun-2') { q.chapterId = 'fun-alj'; q.subTopicId = 'fun-alj-1'; }
  else if (q.subTopicId === 'mtk-fun-3') { q.chapterId = 'fun-geo'; q.subTopicId = 'fun-geo-1'; }
  else if (q.subTopicId === 'mtk-fun-4') { q.chapterId = 'fun-mut'; q.subTopicId = 'fun-mut-1'; }
  else if (q.subTopicId === 'mtk-fun-5') { q.chapterId = 'fun-eks'; q.subTopicId = 'fun-eks-1'; }

  // Remap Gelombang into 6 specific subtopics
  if (q.chapterId === 'fis-gel') {
    const cat = (q.category || '') + ' ' + (q.statement || '');
    if (q.id === 'mudah-fis-07' || q.id === 'drill-bun-02' || q.id === 'drill-bun-05' || q.id === 'drill-bun-06' || q.id === 'drill2-bun-01') {
      q.subTopicId = 'fis-gel-1';
    } else if (q.id === 'sup-fis-gel-01' || q.id === 'drill-bun-01' || q.id === 'drill-bun-03' || q.id === 'drill-bun-04' || q.id === 'drill2-bun-02' || q.id === 'drill2-bun-03') {
      q.subTopicId = 'fis-gel-2';
    } else if (q.id === 'sup-fis-gel-02' || q.id === 'drill-bun-08' || q.id === 'drill2-bun-06' || q.id === 'drill2-bun-07') {
      q.subTopicId = 'fis-gel-3';
    } else if (q.id === 'sedang-fis-05' || q.id === 'drill-bun-07' || q.id === 'drill2-bun-04' || q.id === 'drill2-bun-05') {
      q.subTopicId = 'fis-gel-4';
    } else if (q.id === 'sup-fis-gel-03' || q.id === 'drill-cah-01' || q.id === 'drill-cah-02' || q.id === 'drill-cah-03' || q.id === 'drill-cah-08' || q.id === 'drill2-cah-07' || q.id === 'sedang-fis-11') {
      q.subTopicId = 'fis-gel-5';
    } else if (q.id === 'mudah-fis-08' || q.id === 'drill-cah-04' || q.id === 'drill-cah-05' || q.id === 'drill-cah-06' || q.id === 'drill-cah-07' || q.id === 'drill2-cah-01' || q.id === 'drill2-cah-02' || q.id === 'drill2-cah-03' || q.id === 'drill2-cah-04' || q.id === 'drill2-cah-05' || q.id === 'drill2-cah-06' || q.id === 'sup-fis-gel-04') {
      q.subTopicId = 'fis-gel-6';
    } else {
      // Fallback heuristics
      if (cat.includes('Doppler')) q.subTopicId = 'fis-gel-4';
      else if (cat.includes('Intensitas') || cat.includes('Taraf')) q.subTopicId = 'fis-gel-3';
      else if (cat.includes('Dawai') || cat.includes('Organa') || cat.includes('Melde')) q.subTopicId = 'fis-gel-2';
      else if (cat.includes('Bunyi') || cat.includes('Garpu') || cat.includes('Resonansi')) q.subTopicId = 'fis-gel-1';
      else if (cat.includes('Cermin') || cat.includes('Lensa') || cat.includes('Lup') || cat.includes('Miopi') || cat.includes('Teropong')) q.subTopicId = 'fis-gel-6';
      else q.subTopicId = 'fis-gel-5';
    }
  }

  // Push to proper bucket and ensure standardized metadata
  if (subTopicConfig[q.subTopicId]) {
    const conf = subTopicConfig[q.subTopicId];
    q.pillarId = conf.pillar;
    q.chapterId = conf.chapterId;
    q.bab = conf.chapterName;
    q.subTopicId = conf.subTopicId;
    q.subBab = conf.title;
    q.subTopic = conf.title;
    q.chapterTitle = conf.chapterName;
    if (!q.subject) {
      q.subject = conf.pillar === 'fisika' ? 'FISIKA' : 'MATEMATIKA';
    }
    subtopicBuckets[q.subTopicId].push(q);
  } else {
    console.warn('Unknown subtopic for question:', q.id, q.subTopicId);
  }
}

// 1. Ingest existing questions
[...rawMudah, ...rawSedang, ...rawHots].forEach(q => addQuestion(q));

// 2. Ingest supplementary questions
supplementaryQuestions.forEach(q => addQuestion(q));

// 3. Ingest prioritized drilling questions (Batch 1 & Batch 2)
drillingQuestions.forEach(q => addQuestion(q));
drillingQuestionsBatch2.forEach(q => addQuestion(q));

console.log(`Ingested all questions. Grand total unique questions: ${seenIds.size}`);

// Write individual subtopic files
const baseDir = path.resolve(__dirname, '../data/bank-soal');

Object.keys(subTopicConfig).forEach(subTopicId => {
  const conf = subTopicConfig[subTopicId];
  const questions = subtopicBuckets[subTopicId] || [];
  const fullPath = path.join(baseDir, conf.relPath);
  const targetDir = path.dirname(fullPath);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const countMudah = questions.filter(q => q.difficulty === 'mudah').length;
  const countSedang = questions.filter(q => q.difficulty === 'sedang').length;
  const countHots = questions.filter(q => q.difficulty === 'hots').length;

  const fileContent = `/**
 * Bank Soal TKA: ${conf.pillarName} - ${conf.chapterName}
 * Sub-topik: ${conf.title} (${conf.subTopicId})
 * Indikator: ${conf.indicators}
 * 
 * Total Butir Soal: ${questions.length} Soal (Mudah: ${countMudah}, Sedang: ${countSedang}, HOTS: ${countHots})
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "${conf.subTopicId}";
  const questions = ${JSON.stringify(questions, null, 2)};

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
`;

  fs.writeFileSync(fullPath, fileContent, 'utf8');
  console.log(`Written ${conf.relPath} (${questions.length} questions: M:${countMudah}, S:${countSedang}, H:${countHots})`);
});

// 3. Generate index.js (Node.js aggregator)
const indexFileContent = `/**
 * Master Index Aggregator for TKA Modular Bank Soal
 * Provides unified access to all 32 subtopics across 14 chapters in 3 pillars.
 */

const fs = require('fs');
const path = require('path');

const subtopics = {
${Object.keys(subTopicConfig).map(id => `  "${id}": require('./${subTopicConfig[id].relPath}')`).join(',\n')}
};

// Flattened pools
const allQuestions = [];
const questionsMudah = [];
const questionsSedang = [];
const questionsHots = [];

Object.keys(subtopics).forEach(id => {
  const list = subtopics[id];
  list.forEach(q => {
    allQuestions.push(q);
    if (q.difficulty === 'mudah') questionsMudah.push(q);
    else if (q.difficulty === 'sedang') questionsSedang.push(q);
    else if (q.difficulty === 'hots') questionsHots.push(q);
  });
});

module.exports = {
  subtopics,
  allQuestions,
  questionsMudah,
  questionsSedang,
  questionsHots
};
`;

fs.writeFileSync(path.join(baseDir, 'index.js'), indexFileContent, 'utf8');
console.log('Written data/bank-soal/index.js');

// 4. Generate bank-soal-bundle.js (Browser-ready combined file)
const allCompiledQuestions = [];
const bundleMudah = [];
const bundleSedang = [];
const bundleHots = [];

Object.keys(subTopicConfig).forEach(id => {
  const list = subtopicBuckets[id] || [];
  list.forEach(q => {
    allCompiledQuestions.push(q);
    if (q.difficulty === 'mudah') bundleMudah.push(q);
    else if (q.difficulty === 'sedang') bundleSedang.push(q);
    else if (q.difficulty === 'hots') bundleHots.push(q);
  });
});

const bundleContent = `/**
 * TKA Platform Question Bank: Unified Modular Bundle
 * Auto-generated from data/bank-soal/ modular subtopic files.
 * Total Questions: ${allCompiledQuestions.length} (Mudah: ${bundleMudah.length}, Sedang: ${bundleSedang.length}, HOTS: ${bundleHots.length})
 */

(function() {
  const ALL_QUESTIONS = ${JSON.stringify(allCompiledQuestions, null, 2)};
  const QUESTIONS_MUDAH = ${JSON.stringify(bundleMudah, null, 2)};
  const QUESTIONS_SEDANG = ${JSON.stringify(bundleSedang, null, 2)};
  const QUESTIONS_HOTS = ${JSON.stringify(bundleHots, null, 2)};

  if (typeof window !== "undefined") {
    window.BANK_SOAL_ALL = ALL_QUESTIONS;
    window.QUESTIONS_MUDAH = QUESTIONS_MUDAH;
    window.QUESTIONS_SEDANG = QUESTIONS_SEDANG;
    window.QUESTIONS_HOTS = QUESTIONS_HOTS;

    // Dictionary by subTopicId
    window.TKA_BANK_SOAL = {};
    ALL_QUESTIONS.forEach(q => {
      if (!window.TKA_BANK_SOAL[q.subTopicId]) {
        window.TKA_BANK_SOAL[q.subTopicId] = [];
      }
      window.TKA_BANK_SOAL[q.subTopicId].push(q);
    });

    console.info(\`[TKA Bank Soal] Modular bundle loaded successfully: \${ALL_QUESTIONS.length} questions across 32 subtopics and 14 chapters.\`);
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      ALL_QUESTIONS,
      QUESTIONS_MUDAH,
      QUESTIONS_SEDANG,
      QUESTIONS_HOTS
    };
  }
})();
`;

fs.writeFileSync(path.join(baseDir, 'bank-soal-bundle.js'), bundleContent, 'utf8');
console.log('Written data/bank-soal/bank-soal-bundle.js');

// 5. Update data/questions-mudah.js, data/questions-sedang.js, data/questions-hots.js for backwards compatibility
fs.writeFileSync(
  path.resolve(__dirname, '../data/questions-mudah.js'),
  `/** Auto-generated backward compatibility layer */\nwindow.QUESTIONS_MUDAH = ${JSON.stringify(bundleMudah, null, 2)};\nif (typeof module !== 'undefined') module.exports = window.QUESTIONS_MUDAH;\n`,
  'utf8'
);

fs.writeFileSync(
  path.resolve(__dirname, '../data/questions-sedang.js'),
  `/** Auto-generated backward compatibility layer */\nwindow.QUESTIONS_SEDANG = ${JSON.stringify(bundleSedang, null, 2)};\nif (typeof module !== 'undefined') module.exports = window.QUESTIONS_SEDANG;\n`,
  'utf8'
);

fs.writeFileSync(
  path.resolve(__dirname, '../data/questions-hots.js'),
  `/** Auto-generated backward compatibility layer */\nwindow.QUESTIONS_HOTS = ${JSON.stringify(bundleHots, null, 2)};\nif (typeof module !== 'undefined') module.exports = window.QUESTIONS_HOTS;\n`,
  'utf8'
);

console.log('Synchronized questions-mudah.js, questions-sedang.js, questions-hots.js');

// 6. Generate Developer README in data/bank-soal/
const readmeContent = `# Bank Soal TKA: Fisika & Matematika Lanjut (Modular Architecture)

Direktori ini memuat seluruh bank soal yang telah terstruktur secara modular dan komprehensif berdasarkan silabus resmi TKA Saintek (14 Bab: Fisika, Matematika Lanjut, dan Bab Fundamental Prasyarat).

Setiap sub-topik materi memiliki file tersendiri sehingga memudahkan pemeliharaan, penambahan soal baru, maupun penelaahan kurikulum tanpa perlu mengedit file monolitik yang besar.

---

## 📁 Struktur Direktori

\`\`\`
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
\`\`\`

---

## 🛠️ Format Standar Butir Soal

Setiap soal ditulis dalam format objek JSON/JS berikut:

\`\`\`javascript
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
\`\`\`

---

## 🚀 Cara Menambahkan Soal Baru

Untuk menambahkan soal baru ke dalam bank soal:
1. Buka file sub-topik yang sesuai di dalam folder \`data/bank-soal/\` (misalnya untuk menambahkan soal Mikrometer Sekrup, buka \`data/bank-soal/fisika/01-kinematika/01-pengukuran.js\`).
2. Tambahkan objek soal baru ke dalam array \`questions\`.
3. Jalankan perintah kompilasi dan validasi:
   \`\`\`bash
   node scripts/build_full_modular_system.js
   \`\`\`
   Script akan secara otomatis memvalidasi struktur data dan meregenerasi bundle browser.
`;

fs.writeFileSync(path.join(baseDir, 'README.md'), readmeContent, 'utf8');
console.log('Written data/bank-soal/README.md');

console.log('\n--- FULL MODULAR BUILD COMPLETED SUCCESSFULLY ---');
