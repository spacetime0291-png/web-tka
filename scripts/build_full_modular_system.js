/**
 * scripts/build_full_modular_system.js
 * Generates and bundles the complete 4-level modular bank soal architecture.
 * Hierarchy:
 * data/bank-soal/<pillarId>/<chapterId>/<subChapterId>/<subTopicId>.js
 */

const fs = require('fs');
const path = require('path');

// Ensure browser global namespace
global.window = global;
require('../data/syllabusData.js');

const baseDir = path.resolve(__dirname, '../data/bank-soal');

// 1. Ingest existing questions from previous sources
let inputQuestions = [];
try {
  // If index.js exists and exports questions
  if (fs.existsSync(path.join(baseDir, 'index.js'))) {
    const prev = require('../data/bank-soal/index.js');
    if (Array.isArray(prev.allQuestions) && prev.allQuestions.length > 0) {
      inputQuestions = prev.allQuestions.slice();
    }
  }
} catch (e) {
  // Fallback to raw files
}

if (inputQuestions.length === 0) {
  require('../data/questions-mudah.js');
  require('../data/questions-sedang.js');
  require('../data/questions-hots.js');
  inputQuestions = [
    ...(window.QUESTIONS_MUDAH || []),
    ...(window.QUESTIONS_SEDANG || []),
    ...(window.QUESTIONS_HOTS || [])
  ];
}

console.log(`Starting 4-level modular build. Ingested ${inputQuestions.length} questions from current bank.`);

// Build subtopic lookup from syllabusData.js
const syllabus = window.SYLLABUS_DATA;
const allSubTopicsList = [];
const subTopicBySlugOrId = new Map();

syllabus.pillars.forEach(p => {
  p.chapters.forEach(ch => {
    (ch.subChapters || []).forEach(sc => {
      (sc.subTopics || []).forEach(sub => {
        const item = {
          pillarId: p.id,
          pillarName: p.name,
          chapterId: ch.id,
          chapterName: ch.title,
          subChapterId: sc.id,
          subChapterName: sc.title,
          subTopicId: sub.id,
          slug: sub.slug,
          title: sub.title,
          indicators: sub.indicators,
          relPath: `${p.id}/${ch.id}/${sc.id}/${sub.slug}.js`
        };
        allSubTopicsList.push(item);
        subTopicBySlugOrId.set(sub.id, item);
        subTopicBySlugOrId.set(sub.slug, item);
      });
    });
  });
});

console.log(`Loaded ${allSubTopicsList.length} subtopics from 4-level syllabus.`);

// Helper function to map question to specific subtopic slug
function mapQuestionToSubTopic(q) {
  const text = ((q.category || '') + ' ' + (q.statement || '') + ' ' + (q.subBab || '')).toLowerCase();
  const ch = q.chapterId;
  const oldSub = q.subTopicId || '';

  // 1. KINEMATIKA (fis-kin)
  if (ch === 'fis-kin' || oldSub.startsWith('fis-kin')) {
    if (oldSub === 'fis-kin-1' || text.includes('ukur') || text.includes('sorong') || text.includes('mikrometer') || text.includes('neraca') || text.includes('penting') || text.includes('ketidakpastian')) {
      if (text.includes('sorong')) return 'jangka-sorong';
      if (text.includes('mikrometer')) return 'mikrometer-sekrup';
      if (text.includes('neraca')) return 'neraca-tiga-lengan';
      if (text.includes('angka penting') || text.includes('angka-penting')) return 'angka-penting';
      if (text.includes('ketidakpastian') || text.includes('evaluasi')) return 'ketidakpastian-evaluasi-data';
      return 'jangka-sorong';
    }
    if (oldSub === 'fis-kin-2' || text.includes('glb') || text.includes('glbb') || text.includes('vertikal') || text.includes('jatuh bebas') || text.includes('grafik') || text.includes('jarak') || text.includes('kelajuan')) {
      if (text.includes('jatuh bebas') || text.includes('vertikal')) return 'gerak-vertikal-jatuh-bebas';
      if (text.includes('grafik')) return 'analisis-grafik';
      if (text.includes('glbb')) return 'glbb';
      if (text.includes('glb')) return 'glb';
      if (text.includes('relatif')) return 'kecepatan-relatif';
      if (text.includes('kelajuan')) return 'kelajuan-kecepatan';
      return 'jarak-perpindahan';
    }
    if (oldSub === 'fis-kin-3' || text.includes('parabola') || text.includes('melingkar') || text.includes('sentripetal') || text.includes('gmb')) {
      if (text.includes('sentripetal')) return 'percepatan-sentripetal';
      if (text.includes('melingkar') || text.includes('gmb')) return 'gmb';
      if (text.includes('ekstrem') || text.includes('maksimum') || text.includes('tertinggi') || text.includes('terjauh')) return 'titik-ekstrem-parabola';
      return 'vektor-gerak-parabola';
    }
    return 'jangka-sorong';
  }

  // 2. DINAMIKA (fis-din)
  if (ch === 'fis-din' || oldSub.startsWith('fis-din')) {
    if (oldSub === 'fis-din-2' || text.includes('momentum') || text.includes('impuls') || text.includes('tumbukan') || text.includes('restitusi')) {
      if (text.includes('restitusi') || text.includes('tumbukan')) return 'tumbukan-restitusi';
      if (text.includes('impuls')) return 'impuls-teorema';
      if (text.includes('kekekalan')) return 'kekekalan-momentum';
      return 'momentum-linier';
    }
    if (oldSub === 'fis-din-3' || text.includes('rotasi') || text.includes('torsi') || text.includes('inersia') || text.includes('kesetimbangan') || text.includes('titik berat') || text.includes('menggelinding')) {
      if (text.includes('titik berat') || text.includes('koordinat titik')) return 'titik-berat';
      if (text.includes('torsi') || text.includes('momen gaya')) return 'momen-gaya-torsi';
      if (text.includes('inersia')) return 'momen-inersia';
      if (text.includes('kesetimbangan') || text.includes('tegar')) return 'kesetimbangan-benda-tegar';
      return 'hukum-2-newton-rotasi';
    }
    // fis-din-1
    if (text.includes('sentripetal')) return 'gaya-sentripetal';
    if (text.includes('tali') || text.includes('tegangan')) return 'gaya-tegangan-tali';
    if (text.includes('gesek')) return 'gaya-gesek';
    if (text.includes('berat') || text.includes('normal')) return 'gaya-berat-normal';
    if (text.includes('hukum iii') || text.includes('aksi-reaksi') || text.includes('reaksi')) return 'hukum-3-newton';
    if (text.includes('hukum i ') || text.includes('kelembaman') || text.includes('inersia')) return 'hukum-1-newton';
    return 'hukum-2-newton';
  }

  // 3. FLUIDA (fis-flu)
  if (ch === 'fis-flu' || oldSub.startsWith('fis-flu')) {
    if (oldSub === 'fis-flu-1' || text.includes('hidrostatis') || text.includes('pascal') || text.includes('archimedes') || text.includes('pipa u')) {
      if (text.includes('archimedes') || text.includes('apung') || text.includes('terapung') || text.includes('tenggelam')) return 'hukum-archimedes';
      if (text.includes('pascal') || text.includes('hidrolik')) return 'hukum-pascal';
      if (text.includes('pipa u')) return 'hukum-utama-hidrostatis-pipa-u';
      return 'tekanan-hidrostatis-mutlak';
    }
    if (text.includes('sayap') || text.includes('pesawat')) return 'gaya-angkat-pesawat';
    if (text.includes('pitot') || text.includes('venturi') || text.includes('semprot')) return 'tabung-pitot-penyemprot';
    if (text.includes('bernoulli')) return 'persamaan-bernoulli';
    return 'debit-persamaan-kontinuitas';
  }

  // 4. GELOMBANG DAN OPTIK (fis-gel)
  if (ch === 'fis-gel' || oldSub.startsWith('fis-gel')) {
    if (oldSub === 'fis-gel-1' || text.includes('bunyi') || text.includes('dawai') || text.includes('organa') || text.includes('doppler') || text.includes('taraf') || text.includes('intensitas') || text.includes('desah') || text.includes('pelayangan')) {
      if (text.includes('doppler')) return 'efek-doppler';
      if (text.includes('intensitas') || text.includes('taraf')) return 'intensitas-taraf-intensitas';
      if (text.includes('organa')) return 'pipa-organa';
      if (text.includes('dawai') || text.includes('senar') || text.includes('melde')) return 'dawai-senar';
      if (text.includes('cepat rambat')) return 'cepat-rambat-bunyi';
      return 'karakteristik-gelombang-bunyi';
    }
    // fis-gel-2 (Cahaya & Optik)
    if (text.includes('mata') || text.includes('kacamata') || text.includes('miopi') || text.includes('hipermetropi')) return 'mata-dan-kacamata';
    if (text.includes('mikroskop') || text.includes('teropong') || text.includes('lup')) return 'lup-mikroskop-teropong';
    if (text.includes('lensa')) return 'lensa-cekung-cembung';
    if (text.includes('cermin')) return 'cermin-datar-cekung-cembung';
    if (text.includes('bias') || text.includes('snellius') || text.includes('indeks bias')) return 'pembiasan-cahaya-snellius';
    if (text.includes('pantul')) return 'pemantulan-cahaya';
    return 'spektrum-elektromagnetik';
  }

  // 5. KALOR DAN TERMODINAMIKA (fis-ter / fis-termo)
  if (ch === 'fis-ter' || ch === 'fis-termo' || oldSub.startsWith('fis-ter')) {
    if (oldSub === 'fis-ter-2' || text.includes('global') || text.includes('rumah kaca') || text.includes('mitigasi')) {
      if (text.includes('mitigasi')) return 'mitigasi-pemanasan-global';
      if (text.includes('efek rumah kaca') || text.includes('rumah kaca')) return 'efek-rumah-kaca';
      return 'penyebab-dampak-global';
    }
    if (oldSub === 'fis-ter-3' || text.includes('gas ideal') || text.includes('boyle') || text.includes('gay-lussac') || text.includes('v_rms') || text.includes('pv = nrt')) {
      if (text.includes('gabungan')) return 'hukum-boyle-gay-lussac-gabungan';
      if (text.includes('boyle')) return 'hukum-boyle-gay-lussac';
      return 'persamaan-umum-gas-ideal';
    }
    if (oldSub === 'fis-ter-4' || text.includes('termodinamika') || text.includes('carnot') || text.includes('siklus') || text.includes('usaha luar') || text.includes('entropi') || text.includes('isobarik') || text.includes('isotermal') || text.includes('isokhorik') || text.includes('adiabatik')) {
      if (text.includes('carnot') || text.includes('mesin kalor') || text.includes('efisiensi')) return 'mesin-kalor-carnot';
      if (text.includes('hukum ii') || text.includes('entropi')) return 'hukum-2-termodinamika';
      if (text.includes('hukum i')) return 'hukum-1-termodinamika';
      if (text.includes('usaha') || text.includes('energi dalam')) return 'usaha-energi-dalam';
      return 'proses-termodinamika';
    }
    // fis-ter-1
    if (text.includes('asas black') || text.includes('black')) return 'asas-black';
    if (text.includes('muai') || text.includes('pemuaian')) return 'pemuaian-zat';
    if (text.includes('konduksi') || text.includes('konveksi') || text.includes('radiasi')) return 'konduksi-konveksi-radiasi';
    return 'kalor-sensibel-laten';
  }

  // 6. KELISTRIKAN (fis-lis)
  if (ch === 'fis-lis' || oldSub.startsWith('fis-lis')) {
    if (oldSub === 'fis-lis-1' || text.includes('statis') || text.includes('coulomb') || text.includes('medan listrik') || text.includes('potensial listrik') || text.includes('keping sejajar')) {
      if (text.includes('keping')) return 'keping-sejajar';
      if (text.includes('potensial') || text.includes('energi potensial')) return 'energi-potensial-listrik';
      if (text.includes('medan')) return 'kuat-medan-listrik';
      return 'muatan-listrik-coulomb';
    }
    if (text.includes('daya') || text.includes('energi listrik')) return 'energi-dan-daya-listrik';
    if (text.includes('kirchhoff') || text.includes('loop')) return 'hukum-1-dan-2-kirchhoff';
    if (text.includes('seri') || text.includes('paralel')) return 'rangkaian-seri-paralel';
    return 'hukum-ohm-hambatan';
  }

  // 7. ALJABAR (mtk-alj / mat-alj)
  if (ch === 'mtk-alj' || ch === 'mat-alj' || oldSub.startsWith('mtk-alj')) {
    if (oldSub === 'mtk-alj-1' || text.includes('matriks')) {
      if (text.includes('spl') || text.includes('cramer') || text.includes('linear')) return 'matriks-spl-program-linear';
      if (text.includes('persamaan matriks') || text.includes('ax = b')) return 'persamaan-matriks';
      if (text.includes('invers')) return 'invers-matriks';
      if (text.includes('determinan')) return 'determinan-matriks';
      if (text.includes('perkalian') || text.includes('kali')) return 'perkalian-skalar-dua-matriks';
      if (text.includes('tambah') || text.includes('jumlah') || text.includes('kurang')) return 'penjumlahan-pengurangan-matriks';
      return 'ordo-kesamaan-transpose';
    }
    if (oldSub === 'mtk-alj-2' || text.includes('polinom') || text.includes('suku banyak') || text.includes('horner') || text.includes('sisa') || text.includes('faktor')) {
      if (text.includes('faktor') || text.includes('akar')) return 'teorema-faktor-akar';
      if (text.includes('sisa')) return 'teorema-sisa';
      if (text.includes('horner')) return 'skema-horner';
      if (text.includes('susun') || text.includes('bagi')) return 'pembagian-bersusun';
      return 'operasi-aljabar-polinomial';
    }
    // Fungsi
    if (text.includes('trigonometri')) return 'grafik-periode-trigonometri';
    if (text.includes('mutlak') || text.includes('piecewise')) return 'fungsi-nilai-mutlak-piecewise';
    if (text.includes('logaritma')) return 'fungsi-logaritma';
    if (text.includes('eksponen')) return 'fungsi-eksponensial';
    if (text.includes('akar') || text.includes('irasional')) return 'fungsi-irasional-akar';
    if (text.includes('rasional') || text.includes('pecahan')) return 'fungsi-rasional';
    if (text.includes('polinom') || text.includes('kuadrat') || text.includes('linear')) return 'fungsi-polinom';
    return 'domain-kodomain-range';
  }

  // 8. GEOMETRI & PENGUKURAN (mtk-geo / mat-geo)
  if (ch === 'mtk-geo' || ch === 'mat-geo' || oldSub.startsWith('mtk-geo')) {
    if (oldSub === 'mtk-geo-1' || text.includes('vektor')) {
      if (text.includes('dot') || text.includes('skalar') || text.includes('sudut')) return 'perkalian-titik-dot-product';
      if (text.includes('perbandingan') || text.includes('ruas')) return 'perbandingan-ruas-garis-vektor';
      if (text.includes('panjang') || text.includes('modulus')) return 'panjang-modulus-vektor';
      if (text.includes('jumlah') || text.includes('kurang') || text.includes('operasi')) return 'penjumlahan-pengurangan-vektor';
      return 'vektor-bidang-ruang';
    }
    if (oldSub === 'mtk-geo-2' || text.includes('lingkaran')) {
      if (text.includes('busur') || text.includes('juring') || text.includes('tembereng')) return 'panjang-busur-juring-tembereng';
      if (text.includes('luas') || text.includes('keliling')) return 'keliling-dan-luas-lingkaran';
      if (text.includes('singgung')) return 'garis-singgung-lingkaran';
      if (text.includes('kedudukan') || text.includes('posisi')) return 'kedudukan-titik-dan-garis';
      return 'persamaan-lingkaran';
    }
    // Transformasi
    if (text.includes('luas')) return 'luas-bangun-hasil-transformasi';
    if (text.includes('komposisi')) return 'komposisi-transformasi';
    if (text.includes('matriks')) return 'matriks-transformasi';
    if (text.includes('dilatasi')) return 'dilatasi';
    if (text.includes('rotasi')) return 'rotasi';
    if (text.includes('refleksi')) return 'refleksi';
    return 'translasi';
  }

  // 9. KALKULUS LIMIT (mtk-tri / mat-lim)
  if (ch === 'mtk-tri' || ch === 'mat-lim' || oldSub.startsWith('mtk-tri')) {
    if (text.includes('trigonometri')) return 'limit-fungsi-trigonometri';
    if (text.includes('tak hingga') || text.includes('tak-hingga') || text.includes('infty')) return 'limit-menuju-tak-hingga';
    if (text.includes('piecewise') || text.includes('sepotong')) return 'limit-fungsi-piecewise';
    return 'limit-fungsi-aljabar';
  }

  // 10. BAB FUNDAMENTAL (mtk-fun / fun-*)
  if (ch === 'mtk-fun' || ch.startsWith('fun-') || oldSub.startsWith('mtk-fun') || oldSub.startsWith('fun-')) {
    if (oldSub === 'mtk-fun-1' || ch === 'fun-trig' || text.includes('trigonometri')) {
      if (text.includes('rangkap')) return 'rumus-sudut-rangkap';
      if (text.includes('jumlah') || text.includes('selisih')) return 'rumus-jumlah-selisih-sudut';
      if (text.includes('pythagoras') || text.includes('identitas')) return 'identitas-pythagoras';
      if (text.includes('kuadran') || text.includes('istimewa')) return 'sudut-istimewa-relasi-kuadran';
      return 'perbandingan-trigonometri-siku-siku';
    }
    if (oldSub === 'mtk-fun-2' || ch === 'fun-alj' || text.includes('aljabar') || text.includes('spldv')) {
      if (text.includes('spldv') || text.includes('spltv')) return 'spldv-dan-spltv';
      if (text.includes('pecahan')) return 'pecahan-bentuk-aljabar';
      return 'operasi-aljabar-pemfaktoran';
    }
    if (oldSub === 'mtk-fun-3' || ch === 'fun-geo' || text.includes('garis') || text.includes('jarak') || text.includes('gradien')) {
      if (text.includes('jarak titik ke garis')) return 'jarak-titik-ke-garis';
      if (text.includes('gradien') || text.includes('sejajar') || text.includes('tegak lurus')) return 'gradien-garis-sejajar-tegak-lurus';
      if (text.includes('persamaan garis')) return 'persamaan-garis-lurus';
      return 'koordinat-jarak-dua-titik';
    }
    if (oldSub === 'mtk-fun-4' || ch === 'fun-mutlak' || text.includes('mutlak') || text.includes('syarat')) {
      if (text.includes('pertidaksamaan nilai mutlak') || text.includes('pertidaksamaan mutlak')) return 'pertidaksamaan-nilai-mutlak';
      if (text.includes('persamaan nilai mutlak')) return 'persamaan-nilai-mutlak';
      if (text.includes('akar')) return 'syarat-fungsi-bentuk-akar';
      return 'syarat-fungsi-rasional';
    }
    if (oldSub === 'mtk-fun-5' || ch === 'fun-eks' || text.includes('eksponen') || text.includes('logaritma')) {
      if (text.includes('basis')) return 'perubahan-basis-logaritma';
      if (text.includes('logaritma')) return 'sifat-operasi-logaritma';
      if (text.includes('akar') || text.includes('rasionalisasi')) return 'bentuk-akar-rasionalisasi';
      return 'sifat-eksponen';
    }
  }

  return 'jangka-sorong';
}

// Clean up old directory structure inside data/bank-soal
const obsoletePaths = [
  'fisika/01-kinematika',
  'fisika/02-dinamika',
  'fisika/03-fluida',
  'fisika/04-gelombang',
  'fisika/05-kalor-termodinamika',
  'fisika/06-kelistrikan',
  'matematika-lanjut'
];

obsoletePaths.forEach(p => {
  const full = path.join(baseDir, p);
  if (fs.existsSync(full)) {
    fs.rmSync(full, { recursive: true, force: true });
    console.log(`Cleaned legacy folder: ${p}`);
  }
});

const legacyFundDir = path.join(baseDir, 'fundamental');
if (fs.existsSync(legacyFundDir)) {
  fs.readdirSync(legacyFundDir).forEach(f => {
    if (f.endsWith('.js')) {
      fs.unlinkSync(path.join(legacyFundDir, f));
      console.log(`Cleaned legacy fundamental file: ${f}`);
    }
  });
}

// Map questions into buckets by slug
const subtopicBuckets = {};
allSubTopicsList.forEach(st => {
  subtopicBuckets[st.slug] = [];
});

const seenIds = new Set();
inputQuestions.forEach(q => {
  if (!q.id || seenIds.has(q.id)) return;
  seenIds.add(q.id);

  const matchedSlug = mapQuestionToSubTopic(q);
  const stInfo = subTopicBySlugOrId.get(matchedSlug) || allSubTopicsList[0];

  // Standardize question metadata
  q.pillarId = stInfo.pillarId;
  q.chapterId = stInfo.chapterId;
  q.subChapterId = stInfo.subChapterId;
  q.subTopicId = stInfo.subTopicId;
  q.subTopicSlug = stInfo.slug;
  q.bab = stInfo.chapterName;
  q.subBab = stInfo.title;
  q.subTopic = stInfo.title;
  q.chapterTitle = stInfo.chapterName;
  q.subject = stInfo.pillarId === 'fisika' ? 'FISIKA' : 'MATEMATIKA';

  subtopicBuckets[stInfo.slug].push(q);
});

console.log(`Mapped ${seenIds.size} questions into subtopic buckets.`);

// Write all modular files
allSubTopicsList.forEach(st => {
  const fullPath = path.join(baseDir, st.relPath);
  const targetDir = path.dirname(fullPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const questions = subtopicBuckets[st.slug] || [];
  const countMudah = questions.filter(q => q.difficulty === 'mudah').length;
  const countSedang = questions.filter(q => q.difficulty === 'sedang').length;
  const countHots = questions.filter(q => q.difficulty === 'hots').length;

  const fileContent = `/**
 * Bank Soal TKA: ${st.pillarName} - ${st.chapterName}
 * Bab Kecil: ${st.subChapterName} (${st.subChapterId})
 * Sub-Bab: ${st.title} (${st.subTopicId})
 * Slug: ${st.slug}
 * Indikator: ${st.indicators}
 * 
 * Total Butir Soal: ${questions.length} (Mudah: ${countMudah}, Sedang: ${countSedang}, HOTS: ${countHots})
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "${st.subTopicId}";
  const subTopicSlug = "${st.slug}";
  const questions = ${JSON.stringify(questions, null, 2)};

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
`;

  fs.writeFileSync(fullPath, fileContent, 'utf8');
});

console.log(`Generated ${allSubTopicsList.length} modular subtopic files.`);

// 2. RECURSIVE SCANNER: Ingest all questions from data/bank-soal/
console.log('Running recursive scan across data/bank-soal/ ...');

function scanRecursive(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(scanRecursive(full));
    } else if (entry.isFile() && entry.name.endsWith('.js') && entry.name !== 'index.js' && entry.name !== 'bank-soal-bundle.js') {
      results.push(full);
    }
  }
  return results;
}

const scannedFiles = scanRecursive(baseDir);
console.log(`Discovered ${scannedFiles.length} modular question files on disk.`);

const grandCompiledQuestions = [];
const bundleMudah = [];
const bundleSedang = [];
const bundleHots = [];
const tkaBankMap = {};

scannedFiles.forEach(file => {
  const rel = path.relative(baseDir, file).replace(/\\\\/g, '/');
  const parts = rel.split('/');
  // Expected parts: [pillarId, chapterId, subChapterId, subTopicSlug.js]
  let pId = parts[0];
  let chId = parts[1];
  let scId = parts[2];
  let fileSlug = path.basename(parts[3] || '', '.js');

  // Support 3-level folder legacy paths if any
  if (parts.length === 3) {
    pId = parts[0];
    chId = parts[1];
    scId = parts[1];
    fileSlug = path.basename(parts[2], '.js');
  }

  const stInfo = subTopicBySlugOrId.get(fileSlug);

  let exported = require(file);
  let qList = [];
  if (Array.isArray(exported)) {
    qList = exported;
  } else if (exported && typeof exported === 'object') {
    if (Array.isArray(exported.questions)) {
      qList = exported.questions;
    } else {
      qList = [
        ...(exported.mudah || []),
        ...(exported.sedang || []),
        ...(exported.hots || [])
      ];
    }
  }

  qList.forEach(q => {
    // Inherit from folder structure if not written manually
    q.pillarId = q.pillarId || pId;
    q.chapterId = q.chapterId || chId;
    q.subChapterId = q.subChapterId || scId;
    q.subTopicId = q.subTopicId || (stInfo ? stInfo.subTopicId : fileSlug);
    q.subTopicSlug = q.subTopicSlug || fileSlug;
    if (stInfo) {
      q.bab = q.bab || stInfo.chapterName;
      q.subBab = q.subBab || stInfo.title;
      q.subTopic = q.subTopic || stInfo.title;
      q.chapterTitle = q.chapterTitle || stInfo.chapterName;
    }
    q.subject = q.subject || (q.pillarId === 'fisika' ? 'FISIKA' : 'MATEMATIKA');

    grandCompiledQuestions.push(q);
    if (q.difficulty === 'mudah') bundleMudah.push(q);
    else if (q.difficulty === 'sedang') bundleSedang.push(q);
    else if (q.difficulty === 'hots') bundleHots.push(q);

    // Add to bank map
    const sid = q.subTopicId;
    if (!tkaBankMap[sid]) tkaBankMap[sid] = [];
    tkaBankMap[sid].push(q);

    if (q.subTopicSlug && q.subTopicSlug !== sid) {
      if (!tkaBankMap[q.subTopicSlug]) tkaBankMap[q.subTopicSlug] = [];
      tkaBankMap[q.subTopicSlug].push(q);
    }
  });
});

console.log(`Compiled grand total questions: ${grandCompiledQuestions.length} (Mudah: ${bundleMudah.length}, Sedang: ${bundleSedang.length}, HOTS: ${bundleHots.length})`);

// 3. Generate data/bank-soal/bank-soal-bundle.js
const bundleContent = `/**
 * TKA Platform Question Bank: Unified Modular Bundle
 * Auto-generated by scripts/build_full_modular_system.js
 * Total Questions: ${grandCompiledQuestions.length} (Mudah: ${bundleMudah.length}, Sedang: ${bundleSedang.length}, HOTS: ${bundleHots.length})
 */

(function() {
  const ALL_QUESTIONS = ${JSON.stringify(grandCompiledQuestions, null, 2)};
  const QUESTIONS_MUDAH = ${JSON.stringify(bundleMudah, null, 2)};
  const QUESTIONS_SEDANG = ${JSON.stringify(bundleSedang, null, 2)};
  const QUESTIONS_HOTS = ${JSON.stringify(bundleHots, null, 2)};

  if (typeof window !== "undefined") {
    window.BANK_SOAL_ALL = ALL_QUESTIONS;
    window.QUESTIONS_MUDAH = QUESTIONS_MUDAH;
    window.QUESTIONS_SEDANG = QUESTIONS_SEDANG;
    window.QUESTIONS_HOTS = QUESTIONS_HOTS;

    // Dictionary by subTopicId and slug
    window.TKA_BANK_SOAL = {};
    ALL_QUESTIONS.forEach(q => {
      if (q.subTopicId) {
        if (!window.TKA_BANK_SOAL[q.subTopicId]) window.TKA_BANK_SOAL[q.subTopicId] = [];
        window.TKA_BANK_SOAL[q.subTopicId].push(q);
      }
      if (q.subTopicSlug && q.subTopicSlug !== q.subTopicId) {
        if (!window.TKA_BANK_SOAL[q.subTopicSlug]) window.TKA_BANK_SOAL[q.subTopicSlug] = [];
        window.TKA_BANK_SOAL[q.subTopicSlug].push(q);
      }
      if (q.subChapterId) {
        if (!window.TKA_BANK_SOAL[q.subChapterId]) window.TKA_BANK_SOAL[q.subChapterId] = [];
        window.TKA_BANK_SOAL[q.subChapterId].push(q);
      }
      if (q.chapterId) {
        if (!window.TKA_BANK_SOAL[q.chapterId]) window.TKA_BANK_SOAL[q.chapterId] = [];
        window.TKA_BANK_SOAL[q.chapterId].push(q);
      }
    });

    console.info(\`[TKA Bank Soal] 4-Level modular bundle loaded: \${ALL_QUESTIONS.length} questions across \${Object.keys(window.TKA_BANK_SOAL).length} topic indices.\`);
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

// 4. Generate data/bank-soal/index.js
const indexFileContent = `/**
 * Master Index Aggregator for TKA 4-Level Modular Bank Soal
 */

const fs = require('fs');
const path = require('path');

const subtopics = {
${allSubTopicsList.map(st => `  "${st.subTopicId}": require('./${st.relPath}'),\n  "${st.slug}": require('./${st.relPath}')`).join(',\n')}
};

const allQuestions = ${JSON.stringify(grandCompiledQuestions, null, 2)};
const questionsMudah = ${JSON.stringify(bundleMudah, null, 2)};
const questionsSedang = ${JSON.stringify(bundleSedang, null, 2)};
const questionsHots = ${JSON.stringify(bundleHots, null, 2)};

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

// 5. Update data/questions-mudah.js, data/questions-sedang.js, data/questions-hots.js
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

// 6. Generate README in data/bank-soal/
const readmeContent = `# Bank Soal TKA: 4-Level Modular Architecture

Direktori ini memuat seluruh bank soal yang telah terstruktur secara 4-level hierarki:
\`\`\`
data/bank-soal/<pillarId>/<chapterId>/<subChapterId>/<subTopicId>.js
\`\`\`

Contoh:
- \`data/bank-soal/fisika/fis-gel/fis-gel-bunyi/efek-doppler.js\`
- \`data/bank-soal/fisika/fis-gel/fis-gel-bunyi/pipa-organa.js\`
- \`data/bank-soal/matematika/mat-alj/mat-alj-matriks/invers-matriks.js\`

Total Sub-Bab Tersedia: ${allSubTopicsList.length} Sub-Bab.
Total Soal Terkompilasi: ${grandCompiledQuestions.length} Soal.
`;

fs.writeFileSync(path.join(baseDir, 'README.md'), readmeContent, 'utf8');
console.log('Written data/bank-soal/README.md');

console.log('\n--- 4-LEVEL MODULAR BUILD COMPLETED SUCCESSFULLY ---');
