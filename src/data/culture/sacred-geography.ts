export interface SacredPlace {
  kipsigis: string;
  english: string;
  location: string;
  significance: string;
}

export const SacredPlaces: SacredPlace[] = [
  {
    kipsigis: 'Tulwab Kipsigis',
    english: 'Sacred Mountain of the Kipsigis',
    location: 'Chebewor, Kedowa Location, Kericho County (Mount Blackett, 8,578 ft)',
    significance: 'Where Asis appeared to the ancestors. Where Kipsigis became a distinct people. Site of the mysterious voice and poisoned springs. First initiation in the homeland. Settlement around 1650.',
  },
  {
    kipsigis: "Kong'asis",
    english: 'East (Sacred Direction)',
    location: 'The direction of sunrise',
    significance: 'Direction of God (Asis). All prayers offered facing east. Mabwaita placed east of house door. Animal slaughter faces east. House door must never face east.',
  },
  {
    kipsigis: 'Chepkalal',
    english: 'Sacred Hill of Gathering',
    location: 'Possibly a volcano (from lal = burn)',
    significance: 'Pre-migration gathering place. No one could climb without sacred plants in hand and fat in mouth.',
  },
  {
    kipsigis: 'Tuluap Sigis',
    english: 'Hill of the Birth',
    location: '8-9 miles southwest of Lumbwa station',
    significance: 'First entry point into present territory. Old woman making a basket told settlers harvest was near.',
  },
  {
    kipsigis: 'Kapkorosit',
    english: 'Sacred Festival Structure',
    location: 'Open uncultivated ground away from habitations',
    significance: 'Annual public worship of Cheptalel. Poles tied with sacred creepers. White he-goat led around. Prayers and blessings on everything.',
  },
  {
    kipsigis: 'Mabwaita',
    english: 'Household Altar',
    location: 'East of every married man house door',
    significance: 'Replica of Kapkorosit. Made of sacred plants. Place of prayer, sacrifice, and blessing. Fire always on eastern side.',
  },
  {
    kipsigis: 'Kapkatet',
    english: 'Recording Site',
    location: 'Kericho County',
    significance: 'Site of earliest Kipsigis recordings: Chemirocha (1950) and Chebo Moire (1952) by ILAM.',
  },
];

export const SacredDirections = {
  east: {
    kipsigis: "Kong'asis",
    english: 'East',
    rules: [
      'All prayers offered facing east',
      'Mabwaita placed east of house door',
      'Animal slaughter faces east',
      'Dead bodies NOT carried east',
      'House door must never face east — "Kataach koris" (built wrongly)',
      'Burial: head faces east so spirit rises toward Cheptalel at sunrise',
    ],
  },
  west: { kipsigis: 'Pochi', english: 'West' },
  north: { kipsigis: 'Muget', english: 'North' },
  south: { kipsigis: 'Kapen', english: 'South' },
};

export const TraditionalDirections = {
  waldai: { english: 'West (lower ground)', meaning: 'From wal (exchange) — highland people exchanged goods for lowland grain' },
  masop: { english: 'East (higher ground)', meaning: 'From sop (live, be well) + ma (nothing but) — "nothing but health and prosperity"' },
  embwen: { english: 'Lateral (bushland)', meaning: 'From en (in) + kwenet (between) — between high and low country' },
  suin: { english: 'Open grassland', meaning: 'Used instead of Embwen for open veldt country' },
};

export const MigrationRoute = [
  { stop: 'Misiri', english: 'Egypt', notes: 'Ancestral origin' },
  { stop: 'Burgei', english: 'Southern Sudan', notes: 'Migration stop' },
  { stop: 'Too', english: 'To (Ancestral Homeland)', notes: 'North of present Tugen and Keyo, near Lake Baringo' },
  { stop: 'Koi Tui', english: 'Northern Uganda?', notes: 'Migration stop' },
  { stop: 'Mt. Kony', english: 'Mount Elgon', notes: 'Migration stop' },
  { stop: 'Lake Camos', english: 'Lake Baringo?', notes: 'Migration stop' },
  { stop: 'Kilombe', english: 'Kipsigis-Nandi Separation Point', notes: 'Where the two peoples divided' },
  { stop: 'Tulwab Kipsigis', english: 'Mount Blackett', notes: 'Entry to present homeland, c. 1650' },
];

export default SacredPlaces;
