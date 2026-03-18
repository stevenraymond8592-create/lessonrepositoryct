const fs = require('fs');
const content = fs.readFileSync('src/App.tsx', 'utf8');
const families = content.match(/overlapFamily:\s*"([^"]+)"/g);
if (!families) {
  console.log('No families found');
  process.exit(1);
}

const counts = {};
families.forEach(f => {
  const name = f.match(/"([^"]+)"/)[1];
  counts[name] = (counts[name] || 0) + 1;
});

console.log(`Found ${families.length} families`);
Object.entries(counts).forEach(([name, count]) => {
  console.log(`${name}: ${count}`);
});
