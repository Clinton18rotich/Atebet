const fs = require('fs');
const path = require('path');

const data = {};

// === DICTIONARY ===
const domainsDir = path.join(__dirname, 'src', 'data', 'dictionary', 'domains');
if (fs.existsSync(domainsDir)) {
  const files = fs.readdirSync(domainsDir).filter(f => f.endsWith('.ts'));
  files.forEach(file => {
    const name = file.replace('.ts', '');
    const content = fs.readFileSync(path.join(domainsDir, file), 'utf8');
    try {
      const match = content.match(/export const \w+ = (\[[\s\S]*?\]);/);
      if (!match) { console.log(`Skip ${file} - no array`); return; }
      const jsCode = match[1].replace(/,\s*]/g, ']').replace(/,\s*}/g, '}');
      data[name] = eval(jsCode);
      console.log(`Dictionary: ${name} (${data[name].length})`);
    } catch(e) { console.log(`FAIL ${file}: ${e.message}`); data[name] = []; }
  });
}

// === GRAMMAR ===
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

// === PROVERBS (updated — 22 proverbs) ===
const proverbsFile = path.join(__dirname, 'src', 'data', 'proverbs', 'index.ts');
if (fs.existsSync(proverbsFile)) {
  const content = fs.readFileSync(proverbsFile, 'utf8');
  const match = content.match(/export const Proverbs: Proverb\[\] = (\[[\s\S]*?\]);/);
  if (match) {
    try {
      data.proverbs = eval(match[1].replace(/,\s*]/g, ']').replace(/,\s*}/g, '}'));
      console.log(`Proverbs: ${data.proverbs.length}`);
    } catch(e) { console.log('Proverbs parse fail, using defaults'); }
  }
}
if (!data.proverbs || data.proverbs.length === 0) {
  data.proverbs = [
    { kps: 'Mokeyume sondii, c moen ketil', eng: 'One does not shelter under a leafy canopy and then when it stops raining cut it down', theme: 'gratitude' },
    { kps: 'Mokeloot ndara', eng: 'One does not award to the if-one-had', theme: 'regret' },
    { kps: 'Sisinge sikwasta nerekek', eng: 'Be silent until your anger has abated', theme: 'anger' },
  ];
}

// === CEREMONIES ===
const ceremoniesFile = path.join(__dirname, 'src', 'data', 'culture', 'ceremonies.ts');
if (fs.existsSync(ceremoniesFile)) {
  const content = fs.readFileSync(ceremoniesFile, 'utf8');
  const match = content.match(/export const Ceremonies: Ceremony\[\] = (\[[\s\S]*?\]);/);
  if (match) {
    try {
      data.ceremonies = eval(match[1].replace(/,\s*]/g, ']').replace(/,\s*}/g, '}'));
      console.log(`Ceremonies: ${data.ceremonies.length}`);
    } catch(e) { console.log('Ceremonies parse fail'); }
  }
}

// === CLAN DETAILS ===
const clanDetailsFile = path.join(__dirname, 'src', 'data', 'culture', 'clan-details.ts');
if (fs.existsSync(clanDetailsFile)) {
  const content = fs.readFileSync(clanDetailsFile, 'utf8');
  const match = content.match(/export const ClanDetails: ClanDetail\[\] = (\[[\s\S]*?\]);/);
  if (match) {
    try {
      data.clanDetails = eval(match[1].replace(/,\s*]/g, ']').replace(/,\s*}/g, '}'));
      console.log(`ClanDetails: ${data.clanDetails.length}`);
    } catch(e) { console.log('ClanDetails parse fail'); }
  }
}

// === PRAISE NAMES ===
const praiseFile = path.join(__dirname, 'src', 'data', 'culture', 'praise-names.ts');
if (fs.existsSync(praiseFile)) {
  const content = fs.readFileSync(praiseFile, 'utf8');
  const match = content.match(/export const \w+ = (\[[\s\S]*?\]);/);
  if (match) {
    try {
      data.praiseNames = eval(match[1].replace(/,\s*]/g, ']').replace(/,\s*}/g, '}'));
      console.log(`PraiseNames: ${data.praiseNames.length}`);
    } catch(e) { console.log('PraiseNames parse fail'); }
  }
}

// === SACRED GEOGRAPHY ===
const sacredFile = path.join(__dirname, 'src', 'data', 'culture', 'sacred-geography.ts');
if (fs.existsSync(sacredFile)) {
  const content = fs.readFileSync(sacredFile, 'utf8');
  const match = content.match(/export const \w+ = (\[[\s\S]*?\]);/);
  if (match) {
    try {
      data.sacredGeography = eval(match[1].replace(/,\s*]/g, ']').replace(/,\s*}/g, '}'));
      console.log(`SacredGeography: ${data.sacredGeography.length}`);
    } catch(e) { console.log('SacredGeography parse fail'); }
  }
}

// === MUSICIANS ===
const musiciansFile = path.join(__dirname, 'src', 'data', 'musicians', 'index.ts');
if (fs.existsSync(musiciansFile)) {
  const content = fs.readFileSync(musiciansFile, 'utf8');
  const match = content.match(/export const \w+ = (\[[\s\S]*?\]);/);
  if (match) {
    try {
      data.musicians = eval(match[1].replace(/,\s*]/g, ']').replace(/,\s*}/g, '}'));
      console.log(`Musicians: ${data.musicians.length}`);
    } catch(e) { console.log('Musicians parse fail'); }
  }
}

// === KIPCHAMBA DISCOGRAPHY ===
const discoFile = path.join(__dirname, 'src', 'data', 'musicians', 'kipchamba-discography.ts');
if (fs.existsSync(discoFile)) {
  const content = fs.readFileSync(discoFile, 'utf8');
  const match = content.match(/export const KipchambaDiscography: KipchambaSong\[\] = (\[[\s\S]*?\]);/);
  if (match) {
    try {
      data.kipchambaDiscography = eval(match[1].replace(/,\s*]/g, ']').replace(/,\s*}/g, '}'));
      console.log(`KipchambaDiscography: ${data.kipchambaDiscography.length} songs`);
    } catch(e) { console.log('Discography parse fail'); }
  }
}

// === CLANS ===
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

// Count total
let total = 0;
Object.keys(data).forEach(k => {
  if (Array.isArray(data[k])) total += data[k].length;
});
console.log(`\nTotal entries: ${total}`);

fs.writeFileSync(
  path.join(__dirname, 'public', 'data.js'),
  'const DATA = ' + JSON.stringify(data, null, 2) + ';'
);
console.log('Done -> public/data.js');
