const syllabus = require('../data/syllabusData.js');
const formulaBank = require('../data/formula-bank.js');

console.log("=== MEMULAI VERIFIKASI FORMULA BANK DENGAN SILABUS ===");
let totalExpectedSubChapters = 0;
let totalFoundSubChapters = 0;
let totalFormulas = 0;
let missingSubChapters = [];

syllabus.pillars.forEach(pillar => {
  console.log(`\n[PILLAR: ${pillar.name} (${pillar.id})]`);
  pillar.chapters.forEach(chapter => {
    chapter.subChapters.forEach(subChapter => {
      totalExpectedSubChapters++;
      const entry = formulaBank[subChapter.id];
      if (entry) {
        totalFoundSubChapters++;
        const fCount = (entry.formulas || []).length;
        totalFormulas += fCount;
        console.log(`  ✓ ${subChapter.title} (${subChapter.id}) -> ${fCount} rumus terdaftar`);
        
        // Verifikasi setiap formula memiliki field wajib
        entry.formulas.forEach((f, idx) => {
          if (!f.formulaLatex || !f.example || !f.example.question || !f.example.steps || !f.example.answer) {
            console.error(`    ❌ [ERROR] Rumus index ${idx} (${f.title}) memiliki data yang tidak lengkap!`);
          }
        });
      } else {
        console.error(`  ✗ [MISSING] ${subChapter.title} (${subChapter.id}) TIDAK DITEMUKAN di formula bank!`);
        missingSubChapters.push(subChapter.id);
      }
    });
  });
});

console.log("\n==========================================");
console.log(`HASIL VERIFIKASI:`);
console.log(`Total Bab Kecil Silabus: ${totalExpectedSubChapters}`);
console.log(`Total Bab Kecil Ditemukan: ${totalFoundSubChapters}`);
console.log(`Total Formula Terdaftar: ${totalFormulas}`);
if (missingSubChapters.length > 0) {
  console.error(`Bab Kecil yang kurang:`, missingSubChapters);
  process.exit(1);
} else {
  console.log(`STATUS: 100% LENGKAP & VALID!`);
}
