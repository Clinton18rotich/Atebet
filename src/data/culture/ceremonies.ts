export interface Ceremony {
  kipsigis: string;
  english: string;
  category: 'death' | 'marriage' | 'initiation' | 'warfare' | 'justice' | 'protection' | 'celebration' | 'birth';
  description: string;
}

export const Ceremonies: Ceremony[] = [
  // Death & Mourning
  { kipsigis: 'Iseetab Koot', english: 'Cleansing after husband death', category: 'death', description: 'Purifies the house the day after a husband dies so family members can live in it again.' },
  { kipsigis: 'Kibuchege', english: 'Ritual head shaving', category: 'death', description: 'Shaving of the head following a family death, symbolizing mourning and transition.' },
  { kipsigis: 'Ngisirisyet', english: 'Widow cleansing ceremony', category: 'death', description: 'Removal of certain items from the widow and household as part of mourning and cleansing.' },
  { kipsigis: 'Kiil Karik', english: 'Cleansing weapons of deceased', category: 'death', description: 'Purification of weapons belonging to a deceased man.' },

  // Marriage & Divorce
  { kipsigis: 'Kepeel Lol / Kil Kwondo', english: 'Traditional divorce ceremony', category: 'marriage', description: 'Formally dissolves a marriage. Both parties use child names and anoint each other with butter.' },
  { kipsigis: 'Chuteetab Njor', english: 'Suitor visit to in-laws', category: 'marriage', description: 'Ceremonial visit by suitor to future in-laws. Permitted to enter the eastern half of the house.' },
  { kipsigis: 'Eitaap Muget', english: 'Bride home ceremony / Elder elevation', category: 'marriage', description: 'Ceremony at bride-to-be home during marriage rites. Also used to elevate respected elderly men to sainthood status.' },
  { kipsigis: 'Ewor Ga', english: 'Wedding ceremonial rite', category: 'marriage', description: 'Rite associated with weddings and marriage celebrations.' },
  { kipsigis: 'Katunisyetab Tororyet', english: 'Long-married couple honor', category: 'marriage', description: 'Ceremony honoring a couple married many years. Reaffirms marriage and family values.' },
  { kipsigis: 'Keturum Sondet', english: 'Reconciliation ceremony', category: 'marriage', description: 'Husband formally receives back an adulterous wife.' },
  { kipsigis: 'Suetab Tuga', english: 'Bridewealth livestock inspection', category: 'marriage', description: 'Bride family inspects livestock intended for bridewealth (dowry).' },
  { kipsigis: 'Chepkururge', english: 'Gift to married daughters', category: 'marriage', description: 'Gift presented to married daughters by brothers after death of both parents. Protection since sons inherit most family property.' },
  { kipsigis: 'Rate', english: 'The Tying (marriage ceremony)', category: 'marriage', description: 'The binding marriage ceremony. Couple wrists bound with seguitet grass under an arch of beer tubes.' },

  // Initiation
  { kipsigis: 'Chepngabait', english: 'Payment for initiation care', category: 'initiation', description: 'Animal given as token payment to those who cared for and fed a child during initiation.' },
  { kipsigis: 'Kareetoetab Lagok', english: 'Initiation purification', category: 'initiation', description: 'Purification ceremony in the initiation series. Observed by certain clans.' },
  { kipsigis: 'Kayaet', english: 'River washing ceremony', category: 'initiation', description: 'Ritual washing of initiates at a river. Full immersion. Symbolizes purification and abandonment of past impurities.' },
  { kipsigis: 'Kayaetab Tarusyek', english: 'Seclusion instruction', category: 'initiation', description: 'Instructional and cleansing ceremony during initiates period of seclusion. Often performed at a river.' },
  { kipsigis: 'Kailet', english: 'Anointing at emergence', category: 'initiation', description: 'Anointing ceremony conducted as initiates emerge from the initiation camp.' },
  { kipsigis: 'Keetyenji', english: 'Tutorial ceremony', category: 'initiation', description: 'Tutorial for initiates held approximately one month after Labetab Eun.' },
  { kipsigis: 'Yatetab Oret', english: 'Opening of the Way', category: 'initiation', description: 'Final initiation rite. Anointing the forehead with fat and washing feet with sacred solution. The passage through the archway into adulthood.' },

  // Warfare
  { kipsigis: 'Iseetab Murenik', english: 'Warrior blessing', category: 'warfare', description: 'Special blessing ceremony for warriors before departing for planned battle.' },
  { kipsigis: 'Kambaget', english: 'Mock battle rehearsal', category: 'warfare', description: 'Mock battle conducted before an actual raid or military expedition.' },

  // Justice & Conflict
  { kipsigis: 'Iringotit', english: 'Murder compensation', category: 'justice', description: 'Compensation presented by murderer to victim family as gesture of remorse before full compensation.' },
  { kipsigis: 'Injogeet', english: 'Communal justice', category: 'justice', description: 'Form of communal justice where a crowd carries out punishment of a serious offender.' },
  { kipsigis: 'Keewiren Sogot', english: 'Symbolic condemnation', category: 'justice', description: 'Family members throw a leaf or twig at offender, declaring others may punish without retaliation.' },

  // Protection & Cleansing
  { kipsigis: 'Iseetab Tuga', english: 'Livestock protection', category: 'protection', description: 'Sprinkling of cattle, sheep, and goats to protect from diseases such as anthrax and rinderpest.' },
  { kipsigis: 'Kaanyinyet Yon Kabaris Ilet', english: 'Lightning cleansing', category: 'protection', description: 'Cleansing and protection for people, livestock, homes, or property struck by lightning.' },
  { kipsigis: 'Katumetab Lakwet', english: 'Ceremony for sick child', category: 'protection', description: 'Ceremony for a child who frequently suffered illness or was accident-prone.' },
  { kipsigis: 'Tisetet Emet', english: 'Land cleansing', category: 'protection', description: 'Land-cleansing ceremony after a poor millet harvest.' },
  { kipsigis: 'Kole / Kayanyinyet', english: 'Personal purification', category: 'protection', description: 'Cleansing ceremony to purify an individual from past wrongdoings and restore social harmony.' },

  // Celebration & Honor
  { kipsigis: 'Kuletab Eitab Muget', english: 'Sainthood elevation', category: 'celebration', description: 'Sacrifice of sheep or goat honoring a highly respected community member. Marks elevation to saintly status.' },
  { kipsigis: 'Kuletab Muget', english: 'Men celebration', category: 'celebration', description: 'Celebratory ceremony attended exclusively by men.' },
  { kipsigis: 'Tyegetab Segut', english: 'Treading on grass', category: 'celebration', description: 'Ceremony after birth of first child. The "treading on grass" ritual.' },

  // Birth
  { kipsigis: 'Ngorayikap Kotuswa', english: 'Garment of the mouths', category: 'birth', description: 'Pregnancy ceremony. Goat sacrificed at 4th and 8th months. The skin garment worn until confinement.' },
  { kipsigis: 'Tumdo', english: 'Initiation (ceremony and process)', category: 'initiation', description: 'The great initiation ceremony including circumcision. Rebirth into adulthood. Children become Kipsigis.' },
];

export const CeremonyCategories = [
  { name: 'death', count: 4, kipsigis: 'Meet' },
  { name: 'marriage', count: 9, kipsigis: 'Gan' },
  { name: 'initiation', count: 8, kipsigis: 'Tumdo' },
  { name: 'warfare', count: 2, kipsigis: 'Luger' },
  { name: 'justice', count: 3, kipsigis: 'Kirwoget' },
  { name: 'protection', count: 5, kipsigis: 'Kole' },
  { name: 'celebration', count: 3, kipsigis: 'Tiendo' },
  { name: 'birth', count: 1, kipsigis: 'Sigisiet' },
];

export default Ceremonies;
