const fs = require('fs');
const path = require('path');

const domainsDir = path.join(__dirname, 'src', 'data', 'dictionary', 'domains');
const files = fs.readdirSync(domainsDir).filter(f => f.endsWith('.ts'));

const data = {};

files.forEach(file => {
  const name = file.replace('.ts', '');
  const content = fs.readFileSync(path.join(domainsDir, file), 'utf8');
  
  try {
    // Extract array and evaluate as JS (TS subset we use is valid JS)
    const match = content.match(/export const \w+ = (\[[\s\S]*?\]);/);
    if (!match) { console.log(`Skip ${file} - no array`); return; }
    
    // Replace export/import syntax, make it evaluable
    const jsCode = match[1]
      .replace(/,\s*]/g, ']')  // trailing commas
      .replace(/,\s*}/g, '}'); // trailing commas in objects
    
    data[name] = eval(jsCode);
    console.log(`${name}: ${data[name].length} entries`);
  } catch(e) {
    console.log(`FAIL ${file}: ${e.message}`);
    data[name] = [];
  }
});

// Grammar
data.grammar = {
  pronouns: [
    { kps: 'ane', eng: 'I', prefix: 'a-' },
    { kps: 'inye', eng: 'You (sg.)', prefix: 'i-' },
    { kps: 'ine', eng: 'He / She', prefix: '' },
    { kps: 'echek', eng: 'We', prefix: 'ki-' },
    { kps: 'okwek', eng: 'You (pl.)', prefix: 'o-' },
    { kps: 'ichek', eng: 'They', prefix: '' },
  ],
  tenses: [
    { name: 'Present Continuous', marker: '-e / -isyei', example: 'a ame', meaning: 'I am eating' },
    { name: 'Recent Past', marker: 'ko', example: 'Ko am', meaning: 'I ate (recently)' },
    { name: 'Far Past', marker: 'ki', example: 'Ki am', meaning: 'I ate (long ago)' },
    { name: 'Future', marker: 'tuun / pesyo / kor', example: 'tun aame', meaning: 'I will eat' },
  ],
  negation: [
    { type: 'General "not"', marker: 'ma', example: 'Ma ame kimyeet', meaning: "I don't eat ugali" },
    { type: '"Have not yet"', marker: 'tom', example: 'Tom aamisye', meaning: 'I have not eaten' },
    { type: '"Stop!"', marker: 'matita-', example: 'Matitaiam!', meaning: 'Stop eating!' },
    { type: '"Don\'t!"', marker: 'mat', example: 'Mat opwan yu!', meaning: "Don't come here!" },
  ],
  connectives: [
    { kps: 'ak', eng: 'And', type: 'conjunction' },
    { kps: 'ngamun', eng: 'Because', type: 'subordinator' },
    { kps: 'yoon / yon', eng: 'When', type: 'subordinator' },
    { kps: 'asi', eng: 'So that', type: 'subordinator' },
    { kps: 'nebo', eng: 'Of the', type: 'genitive' },
  ],
  questions: [
    { kps: "ng'o", eng: 'Who?' },
    { kps: 'nee', eng: 'What?' },
    { kps: 'anoo', eng: 'Where?' },
    { kps: 'au', eng: 'When?' },
    { kps: 'amunee', eng: 'Why?' },
    { kps: 'kou nee', eng: 'How?' },
  ],
};

data.proverbs = [
  { kps: 'Mokeyume sondii, c moen ketil', eng: 'One does not shelter under a leafy canopy and then when it stops raining cut it down', meaning: 'On gratitude' },
  { kps: 'Mokeloot ndara', eng: 'One does not award to the if-one-had', meaning: 'On useless regret' },
  { kps: 'Sisinge sikwasta nerekek', eng: 'Be silent until your anger has abated', meaning: 'On controlling anger' },
];

data.clans = [
  'Boek','Paguserek','Poswetek','Kap parangwek','Kap parsumek','Kap pargesaek',
  'Kap echerek','Kap chemogondek','Kap chepororek','Kap kerichek','Kap chepalungu',
  'Kap cheptalamek','Kap chemisek','Kap chepures','Kap chepumbwek','Kap cheroigek',
  'Kap cheurek','Kap iyorya','Kap kechwoek','Kap kelega','Kap kenyogorek',
  'Kap kesogek','Kap kesundek','Kap moek','Kap mogorek','Kap mago','Kap komosik',
  'Kap kugoek','Kap lachan','Kap mochilek','Kap kolwolek','Kap kaon','Kap kichwenek',
  "Kap mong'esoi",'Kap masoswoek','Kap mwererek','Kap segit','Kap saosan','Kap sengerek',
];

data.agesets = [
  { name: 'Nyongi', years: '2019–Present', order: 1 },
  { name: 'Kimnyige', years: '2000–2018', order: 7 },
  { name: 'Kaplelach', years: '1982–1999', order: 6 },
  { name: 'Korongoro', years: '1967–1981', order: 5 },
  { name: 'Sawe', years: '1952–1966', order: 4 },
  { name: 'Chumo', years: '1937–1951', order: 3 },
  { name: 'Maina', years: '1921–1936', order: 2 },
];

// Count
let total = 0;
Object.keys(data).forEach(k => {
  if (Array.isArray(data[k])) total += data[k].length;
});
console.log(`\nTotal entries: ${total}`);

fs.writeFileSync(
  path.join(__dirname, 'public', 'data.js'),
  'const DATA = ' + JSON.stringify(data, null, 2) + ';'
);
console.log('Done → public/data.js');
