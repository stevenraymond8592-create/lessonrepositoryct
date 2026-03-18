const fs = require('fs');
const content = fs.readFileSync('src/App.tsx', 'utf8');
const lessonsMatch = content.match(/const lessons = \[\s*([\s\S]*?)\n\];/);
if (!lessonsMatch) {
  console.log('Could not find lessons array');
  process.exit(1);
}

const lessonsStr = lessonsMatch[1];
const lessonBlocks = lessonsStr.split('},').filter(b => b.trim().length > 0);

console.log(`Found ${lessonBlocks.length} lesson blocks`);

const families = {};
lessonBlocks.forEach(block => {
  const titleMatch = block.match(/title:\s*"([^"]+)"/);
  const familyMatch = block.match(/overlapFamily:\s*"([^"]+)"/);
  if (titleMatch && familyMatch) {
    const title = titleMatch[1];
    const family = familyMatch[1];
    if (!families[family]) families[family] = [];
    families[family].push(title);
  }
});

Object.entries(families).forEach(([family, titles]) => {
  console.log(`${family} (${titles.length}):`);
  titles.forEach(t => console.log(`  - ${t}`));
});
