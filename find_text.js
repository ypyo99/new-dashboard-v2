const fs = require('fs');
const content = fs.readFileSync('d:\\Anti Gravity\\new-Dashboard-v2\\temp-index.html', 'utf8');
const lines = content.split('\n');
lines.forEach((line, index) => {
  if (line.includes('성동노인') || line.includes('복지관')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
