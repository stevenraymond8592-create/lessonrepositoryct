const fs = require('fs');
const content = fs.readFileSync('src/App.tsx', 'utf8');

// Extract the lessons array content
const lessonsMatch = content.match(/const lessons = \[\s*([\s\S]*?)\s*\];/);
if (!lessonsMatch) {
  console.log('Could not find lessons array');
  process.exit(1);
}

const lessonsText = lessonsMatch[1];
const families = [];
const familyRegex = /overlapFamily:\s*"([^"]+)"/g;
let match;
while ((match = familyRegex.exec(lessonsText)) !== null) {
  families.push(match[1]);
}

const counts = {};
families.forEach(f => {
  counts[f] = (counts[f] || 0) + 1;
});

console.log('Total lessons:', families.length);
console.log('Family counts:');
Object.entries(counts).forEach(([family, count]) => {
  console.log(`- ${family}: ${count}`);
});

const inGroups = Object.values(counts).filter(c => c > 1).reduce((a, b) => a + b, 0);
console.log('Lessons in groups (>1):', inGroups);
const unique = Object.values(counts).filter(c => c === 1).length;
console.log('Unique families (1 lesson):', unique);
