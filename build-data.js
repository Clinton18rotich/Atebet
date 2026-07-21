// Reads all dictionary and grammar data, outputs a single JS file for the browser
const fs = require('fs');
const path = require('path');

// Manually inline all data since we can't use TS imports in plain browser
const data = {};

// Body parts
data.body = [
  { kps: 'metit', eng: 'head', pl: 'metoek' },
  { kps: 'sumeyot', eng: 'hair', pl: 'sumeek' },
  { kps: 'tokoch', eng: 'face', pl: 'tokochiik' },
  { kps: 'konda', eng: 'eye', pl: 'konyeek' },
  { kps: 'itit', eng: 'ear', pl: 'itiik' },
  { kps: 'seruut', eng: 'nose', pl: 'serunek' },
  { kps: 'kutiit', eng: 'mouth', pl: 'kutusweek' },
  { kps: "ng'elyepta", eng: 'tongue' },
  { kps: 'keldet', eng: 'tooth', pl: 'kelek' },
  { kps: 'katit', eng: 'neck', pl: 'katusweek' },
  { kps: 'mokwek', eng: 'throat' },
  { kps: 'tigikyot', eng: 'shoulder', pl: 'tigikoik' },
  { kps: 'tegeet', eng: 'chest', pl: 'tegotik' },
  { kps: 'muguleldo', eng: 'heart' },
  { kps: 'pwonik', eng: 'lungs' },
  { kps: 'kowet', eng: 'liver' },
  { kps: 'saramiet', eng: 'kidney', pl: 'saramok' },
  { kps: 'moet', eng: 'stomach', pl: 'mootinoik' },
  { kps: 'kaweet', eng: 'bone', pl: 'kawek' },
  { kps: 'magatet', eng: 'skin' },
  { kps: 'korotik', eng: 'blood' },
  { kps: 'patai', eng: 'back', pl: 'pataiwek' },
  { kps: 'suet', eng: 'waist', pl: 'suotik' },
  { kps: 'eut', eng: 'hand', pl: 'eunek' },
  { kps: 'siyook', eng: 'fingers' },
  { kps: 'kukyeet', eng: 'elbow' },
  { kps: 'kupesto', eng: 'thigh', pl: 'kupesik' },
  { kps: 'kutundo', eng: 'knee', pl: "kutung'oik" },
  { kps: 'keldo', eng: 'leg', pl: 'kelyek' },
  { kps: 'matanda', eng: 'cheek', pl: "matong'oik" },
  { kps: 'tamnet', eng: 'chin', pl: 'tamnook' },
];

data.pain = [
  { kps: 'Aman metit', eng: 'headache', lit: 'The head eats me' },
  { kps: 'Aman itit', eng: 'earache', lit: 'The ear eats me' },
  { kps: 'Aman keldet', eng: 'toothache', lit: 'The tooth eats me' },
  { kps: 'Aman mokwek', eng: 'sore throat', lit: 'The throat eats me' },
  { kps: 'Aman patai', eng: 'back pain', lit: 'The back eats me' },
  { kps: "Ng'wan moet", eng: 'stomach hurts', lit: 'The stomach is bitter' },
];

data.family = [
  { kps: 'kwanda', eng: 'father' },
  { kps: 'kameet', eng: 'mother' },
  { kps: "ng'etab kam", eng: 'brother' },
  { kps: 'chepkam', eng: 'sister' },
  { kps: 'lakwet', eng: 'child' },
  { kps: 'werit', eng: 'son' },
  { kps: 'chepto', eng: 'daughter' },
  { kps: 'patiem', eng: 'grandmother' },
  { kps: 'pomori', eng: 'grandfather' },
  { kps: 'maning\'otiot', eng: 'husband' },
  { kps: 'osotiot', eng: 'wife' },
  { kps: 'chorwet', eng: 'friend' },
  { kps: 'chiito', eng: 'person' },
  { kps: 'piik', eng: 'people' },
  { kps: 'murenik', eng: 'adult man' },
  { kps: 'kwondo', eng: 'adult woman' },
  { kps: 'poyoot', eng: 'old man' },
  { kps: 'chepyoseet', eng: 'old woman' },
];

data.food = [
  { kps: 'chego', eng: 'milk (common)' },
  { kps: 'chegoo', eng: 'milk (respectful)' },
  { kps: 'mursiik', eng: 'fermented milk' },
  { kps: 'kimyeet', eng: 'ugali (millet)' },
  { kps: 'peek', eng: 'millet' },
  { kps: 'pandeek', eng: 'maize' },
  { kps: 'rabwonik', eng: 'sweet potatoes' },
  { kps: 'piasinik', eng: 'potatoes' },
  { kps: 'nyanyat', eng: 'tomatoes' },
  { kps: 'kitunguuk', eng: 'onions' },
  { kps: 'sukaruk', eng: 'sugar' },
  { kps: 'machaniik', eng: 'tea leaves' },
  { kps: 'kepich', eng: 'cabbage' },
  { kps: 'rupeet', eng: 'hunger' },
  { kps: 'melel', eng: 'thirst' },
];

data.animals = [
  { kps: "ng'etundo", eng: 'lion' },
  { kps: 'pelyot', eng: 'elephant' },
  { kps: 'kimagetiet', eng: 'hyena' },
  { kps: 'cheplanget', eng: 'leopard' },
  { kps: 'soet', eng: 'buffalo' },
  { kps: 'laitigo', eng: 'zebra' },
  { kps: 'tisyeet', eng: 'baboon' },
  { kps: 'moset', eng: 'monkey' },
  { kps: 'ndaret', eng: 'snake' },
  { kps: 'mororochet', eng: 'frog' },
  { kps: 'segemiat', eng: 'bee' },
  { kps: 'ingokiet', eng: 'chicken' },
  { kps: 'kipsoyweet', eng: 'cock' },
  { kps: 'kipsichit', eng: 'eagle' },
  { kps: 'sunguruut', eng: 'owl' },
];

data.livestock = [
  { kps: 'teta', eng: 'cow', pl: 'tuga' },
  { kps: 'moita', eng: 'calf' },
  { kps: 'kirgit', eng: 'bull' },
  { kps: 'artet', eng: 'goat/sheep (general)', pl: 'nego' },
  { kps: "ng'ororiet", eng: 'goat' },
  { kps: "ng'echiriet", eng: 'sheep' },
  { kps: 'kuinet', eng: 'horn', pl: 'kuinoik' },
  { kps: 'saruriet', eng: 'tail', pl: 'sarurik' },
  { kps: 'murungut', eng: 'udder' },
];

data.colors = [
  { kps: 'birir', eng: 'red' },
  { kps: 'nyalil', eng: 'green' },
  { kps: 'babilin', eng: 'blue' },
  { kps: 'tolelyon', eng: 'yellow' },
  { kps: 'lel', eng: 'white' },
  { kps: 'tui', eng: 'black' },
  { kps: 'sitien', eng: 'brown' },
  { kps: 'orian', eng: 'grey' },
  { kps: 'turungiot', eng: 'purple' },
  { kps: 'sitkam', eng: 'pink' },
  { kps: 'muruon', eng: 'maroon' },
];

data.verbs = [
  { kps: 'ke am', eng: 'to eat' },
  { kps: 'ke ye', eng: 'to drink' },
  { kps: 'ke ru', eng: 'to sleep' },
  { kps: 'ke pa', eng: 'to go' },
  { kps: 'nyon', eng: 'to come' },
  { kps: 'ke ker', eng: 'to see' },
  { kps: 'kas', eng: 'to hear' },
  { kps: 'cham', eng: 'to love' },
  { kps: 'lapat', eng: 'to run' },
  { kps: 'wendoten', eng: 'to walk' },
  { kps: 'kei', eng: 'to milk' },
  { kps: 'tech', eng: 'to build' },
  { kps: 'ke sa', eng: 'to pray' },
  { kps: 'gan', eng: 'to marry' },
  { kps: 'sich', eng: 'to give birth (uninitiated)' },
  { kps: 'tum', eng: 'to give birth (initiated)' },
  { kps: 'ii', eng: 'to give birth (animals)' },
  { kps: 'ko mee', eng: 'to die (informal)' },
  { kps: 'mwachin kongoi', eng: 'to thank' },
];

data.weather = [
  { kps: 'ropta', eng: 'rain' },
  { kps: 'us', eng: 'wind' },
  { kps: 'poldet', eng: 'cloud' },
  { kps: 'tule', eng: 'thunder' },
  { kps: 'asis', eng: 'sun / God' },
  { kps: 'arawet', eng: 'moon' },
  { kps: 'kecheyat', eng: 'star' },
  { kps: 'peet', eng: 'daytime' },
  { kps: 'kemoo', eng: 'night' },
  { kps: 'subui', eng: 'morning' },
  { kps: 'kemeut', eng: 'drought' },
];

data.house = [
  { kps: 'kot', eng: 'house' },
  { kps: 'toloita', eng: 'central post' },
  { kps: 'kimonjokut', eng: 'roof peak' },
  { kps: 'koitab maa', eng: 'fireplace' },
  { kps: 'mabwaita', eng: 'household altar' },
  { kps: 'kurgat', eng: 'doorway' },
  { kps: 'musereita', eng: 'door' },
  { kps: 'inat', eng: 'wall' },
  { kps: 'tabot', eng: 'loft / attic' },
  { kps: 'meset', eng: 'table' },
  { kps: 'saburiet', eng: 'cooking pot' },
];

data.spiritual = [
  { kps: 'asis', eng: 'God / Sun' },
  { kps: 'cheptalel', eng: 'God (personal, caring)' },
  { kps: 'oinder', eng: 'human spirit' },
  { kps: 'kurenet', eng: 'reincarnated spirit name' },
  { kps: 'chebsageyot', eng: 'spirit communicator' },
  { kps: 'mabwaita', eng: 'household altar' },
  { kps: 'pitet', eng: 'law, custom, nature (unified)' },
  { kps: 'sogorge', eng: 'unnatural behaviour' },
  { kps: 'chupisiet', eng: 'curse system' },
  { kps: 'mein mat', eng: 'may your fire die (ultimate curse)' },
  { kps: 'kaberuret', eng: 'chanted blessing' },
  { kps: "kong'asis", eng: 'East (sacred direction)' },
  { kps: 'sopondo', eng: 'health, prosperity, well-being' },
];

data.numbers = [
  { kps: 'agenge', eng: '1' },
  { kps: 'aeng\'', eng: '2' },
  { kps: 'somok', eng: '3' },
  { kps: "ang'wan", eng: '4' },
  { kps: 'mut', eng: '5' },
  { kps: 'lo', eng: '6' },
  { kps: 'tisap', eng: '7' },
  { kps: 'sisit', eng: '8' },
  { kps: 'sogol', eng: '9' },
  { kps: 'taman', eng: '10' },
  { kps: 'tiptem', eng: '20' },
  { kps: 'sosom', eng: '30' },
  { kps: 'artam', eng: '40' },
  { kps: 'konom', eng: '50' },
  { kps: 'pokol', eng: '100' },
  { kps: 'eliput', eng: '1000' },
];

data.greetings = [
  { kps: 'Chamgee', eng: 'Hello', res: 'Mising' },
  { kps: 'Iamunee?', eng: 'How are you?', res: 'Achamegee' },
  { kps: 'Amu nee gaa?', eng: 'How is home?', res: 'Chamegee' },
  { kps: 'Une petut?', eng: 'How is your day?', res: 'Kararan' },
  { kps: 'Subai', eng: 'Hello (boys)', res: 'Ebo' },
  { kps: 'Takwenya', eng: 'Hello (girls)', res: 'Igo' },
];

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
    { name: 'Present', marker: '-e / -isyei', example: 'a ame', meaning: 'I am eating' },
    { name: 'Recent Past', marker: 'ko', example: 'Ko am', meaning: 'I ate (recently)' },
    { name: 'Far Past', marker: 'ki', example: 'Ki am', meaning: 'I ate (long ago)' },
    { name: 'Future', marker: 'tuun / kor', example: 'tun aame', meaning: 'I will eat' },
  ],
  negation: [
    { type: 'General "not"', marker: 'ma', example: 'Ma ame kimyeet', meaning: "I don't eat ugali" },
    { type: '"Have not yet"', marker: 'tom', example: 'Tom aamisye', meaning: 'I have not eaten' },
    { type: '"Stop!"', marker: 'matita-', example: 'Matitaiam!', meaning: 'Stop eating!' },
    { type: '"Don\'t!"', marker: 'mat', example: 'Mat opwan yu!', meaning: "Don't come here!" },
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
  { name: 'Nyongi', order: 1, years: '2019–Present' },
  { name: 'Maina', order: 2, years: '2000–2018' },
  { name: 'Kaplelach', order: 3, years: '1982–1999' },
  { name: 'Korongoro', order: 4, years: '1967–1981' },
  { name: 'Sawe', order: 5, years: '1952–1966' },
  { name: 'Chumo', order: 6, years: '1937–1951' },
  { name: 'Kimnyige', order: 7, years: '1921–1936' },
];

fs.writeFileSync(
  path.join(__dirname, 'public', 'data.js'),
  'const DATA = ' + JSON.stringify(data, null, 2) + ';'
);
console.log('Data built to public/data.js');
