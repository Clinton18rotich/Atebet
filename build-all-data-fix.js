const fs = require('fs');
const path = require('path');

// Read existing data.js
const existingData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'public', 'data.js'), 'utf8')
    .replace('const DATA = ', '')
    .replace(/;$/, '')
);

// Read the discography file
const discoFile = path.join(__dirname, 'src', 'data', 'musicians', 'kipchamba-discography.ts');
const content = fs.readFileSync(discoFile, 'utf8');

// Extract all three arrays
function extractArray(varName) {
  const regex = new RegExp(`export const ${varName}: KipchambaSong\\[\\] = (\\[[\\s\\S]*?\\]);`, 'm');
  const match = content.match(regex);
  if (!match) return [];
  try {
    return eval(match[1].replace(/,\s*]/g, ']').replace(/,\s*}/g, '}'));
  } catch(e) {
    console.log(`Failed to parse ${varName}: ${e.message}`);
    return [];
  }
}

const batch1 = extractArray('KipchambaDiscography');
const batch2 = extractArray('KipchambaDiscographyContinued');
const all = extractArray('FullKipchambaDiscography');

console.log(`Batch 1: ${batch1.length} songs`);
console.log(`Batch 2: ${batch2.length} songs`);
console.log(`Full: ${all.length} songs`);

// Use the largest array
const songs = all.length > 0 ? all : [...batch1, ...batch2];
existingData.kipchambaDiscography = songs;

console.log(`Total songs: ${songs.length}`);

// Also extract stats
const statsMatch = content.match(/export const KipchambaStats = ({[\s\S]*?});/);
if (statsMatch) {
  try {
    existingData.kipchambaStats = eval(statsMatch[1].replace(/'/g, '"').replace(/(\w+):/g, '"$1":'));
    console.log('Stats loaded');
  } catch(e) {}
}

fs.writeFileSync(
  path.join(__dirname, 'public', 'data.js'),
  'const DATA = ' + JSON.stringify(existingData, null, 2) + ';'
);
console.log('Updated public/data.js');
