const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(/overlapFamily:\s*"([^"]+)",\n\s*},/g, 'overlapFamily: "$1",\n    coverImage: "Link_here",\n  },');
fs.writeFileSync('src/App.tsx', content);
console.log('Updated lessons array');
