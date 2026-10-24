/**
 * pipeline/generate_tasks.js
 * Generates tasks.json queue for all 137 curriculum sub-topics in TKA Saintek.
 * Each sub-topic produces exactly 2 tasks:
 * 1. TASK_{subTopicId}_EASY   (count: 5, difficulty: 'mudah', IDs: -001..-005)
 * 2. TASK_{subTopicId}_MEDIUM (count: 5, difficulty: 'sedang', IDs: -006..-010)
 */

const fs = require('fs');
const path = require('path');

// Ensure browser global namespace for syllabusData.js
if (typeof window === 'undefined') {
  global.window = global;
}
require('../data/syllabusData.js');

const syllabus = window.SYLLABUS_DATA;
if (!syllabus || !Array.isArray(syllabus.pillars)) {
  console.error('Error: Failed to load syllabusData.js');
  process.exit(1);
}

const tasks = [];

syllabus.pillars.forEach(pillar => {
  const pilarId = pillar.id;
  const subject = pilarId === 'fisika' ? 'FISIKA' : 'MATEMATIKA';

  (pillar.chapters || []).forEach(chapter => {
    const chapterId = chapter.id;

    (chapter.subChapters || []).forEach(subChapter => {
      const subChapterId = subChapter.id;

      (subChapter.subTopics || []).forEach(subTopic => {
        const subTopicId = subTopic.id;
        const targetDir = `data/bank-soal/${pilarId}/${chapterId}/${subChapterId}`;

        // 1. EASY Task
        tasks.push({
          task_id: `TASK_${subTopicId}_EASY`,
          status: 'pending',
          target_file: `${targetDir}/batch_TASK_${subTopicId}_EASY.js`,
          pilar: pilarId,
          subject: subject,
          chapterId: chapterId,
          subChapterId: subChapterId,
          subTopicId: subTopicId,
          difficulty: 'mudah',
          id_start: 1,
          count: 5
        });

        // 2. MEDIUM Task
        tasks.push({
          task_id: `TASK_${subTopicId}_MEDIUM`,
          status: 'pending',
          target_file: `${targetDir}/batch_TASK_${subTopicId}_MEDIUM.js`,
          pilar: pilarId,
          subject: subject,
          chapterId: chapterId,
          subChapterId: subChapterId,
          subTopicId: subTopicId,
          difficulty: 'sedang',
          id_start: 6,
          count: 5
        });
      });
    });
  });
});

const outputDir = path.resolve(__dirname);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'tasks.json');
fs.writeFileSync(outputPath, JSON.stringify(tasks, null, 2), 'utf8');

console.log(`Successfully generated ${tasks.length} tasks across ${tasks.length / 2} subtopics.`);
console.log(`Saved queue to: ${outputPath}`);
