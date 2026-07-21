// Cultural Stories & Immersive Experiences for Atebet

const STORIES = {
  initiation: {
    title: 'Tumdo — The Initiation Journey',
    subtitle: 'The most important event in a Kipsigis life',
    stages: [
      {
        name: 'Stage 1: Circumcision',
        kipsigis: 'Tumdo',
        description: 'Children become adult tribal members. The Chepketilet war song is sung. Crowds gather. This is rebirth.',
        duration: 'First day',
        song: 'Chepketilet — "Present the chest like a shield / Twirl the spear to pierce the enemy"',
      },
      {
        name: 'Stage 2: Labetap Eun',
        kipsigis: 'Ceremonial Hand Washing',
        description: '3-4 weeks after circumcision. A ceremonial cleansing that marks the beginning of the instruction period.',
        duration: 'Week 3-4',
      },
      {
        name: 'Stage 3: Ketienchin',
        kipsigis: 'The Instruction',
        description: 'Initiates are taught proper behaviour (Atebet). They learn the warrior code, respect for elders, the sacred directions, and how to conduct themselves as adults.',
        duration: 'Months 2-6',
      },
      {
        name: 'Stage 4: Kayaet',
        kipsigis: 'River Immersion',
        description: 'Full immersion in the river. A symbolic cleansing and rebirth. The initiates may now go about freely.',
        duration: 'Month 6-7',
      },
      {
        name: 'Stage 5: Yatetap Oret',
        kipsigis: 'Opening of the Way',
        description: 'The final ceremony. Initiates pass through the Ormarechet archway, symbolically entering adulthood. They are now fully Piikab Kutit.',
        duration: 'Final ceremony',
      },
    ],
    rules: [
      'Great secrecy between sexes — men and women initiated separately',
      'Cannot begin in Karatet year or August (Robtoe)',
      'Three main batches per age set cycle (21 years)',
      'Initiation parents (Pamongo/Koruchon) feed the initiates',
      'Motiriot — the instructor who guides them through',
    ],
  },

  warriorCode: {
    title: 'The Warrior Code',
    subtitle: 'Kipsigis warfare — governed by strict rules',
    armyStructure: [
      { role: 'Ngaymet', english: 'Advance guard', description: 'First into battle, scouts the enemy' },
      { role: 'Pirtic', english: 'Cattle drivers', description: 'Protected the captured cattle' },
      { role: 'Oldimdo', english: 'Main body', description: 'The core fighting force' },
      { role: 'Lumwet', english: 'Flankers', description: 'Outflanked the enemy, cut off retreat' },
    ],
    sanctuary: [
      'Stick a spear with ostrich feathers in the ground — admission of defeat',
      'Offer a handful of plucked grass',
      'Climb a tree with a handful of earth',
      'Stand in the middle of a river',
    ],
    prisoners: [
      'Captor throws his cloak over the prisoner — they are now protected',
      'Prisoner ransomed for 5-9 cows',
      'Woman taken with left hand = wife; with right hand = daughter',
    ],
    warTypes: [
      { against: 'Masai', nature: 'True war — sporting, strict rules observed' },
      { against: 'Kisii', nature: 'Territorial war — more bitter' },
      { against: 'Luo', nature: 'Cattle raiding only — after dark' },
    ],
    warCall: 'Kakobok! Awem\'po ngotwa — "Hunt with spears!" shouted hill to hill',
  },

  spiritWorld: {
    title: 'The Spirit World',
    subtitle: 'Oinder — the spirit that reincarnates continually',
    beliefs: [
      'Every human has a spirit (oinder) that existed far back in the past',
      'The spirit is far more important than the body — the body is a temporary dwelling',
      'Spirits reincarnate continually in descendants',
      'At death, the spirit remains near for days, then is reborn into a new child',
      'The identity is discovered when a newborn sneezes at a name',
      'Women laugh three times for a girl, four times for a boy',
      'No evil spirits or devils exist in Kipsigis belief',
    ],
    chebsageyot: {
      role: 'Spirit Communicator / Healer',
      description: 'Usually women. Spirits appear to them in visions (Norset). They treat sickness caused by moral faults using wimbi grain and cowrie shell divination.',
    },
    tale: {
      title: 'The Hyena and the Dead Warrior',
      summary: 'A hyena raised a dead warrior from the spirit world. The warrior lived again among the hyenas. But when he boasted of his power, death reclaimed him. The spirit world mirrors this one, but pride has no place in either.',
      lesson: 'Boasting leads to death. The spirit world and this world follow the same pitet.',
    },
  },

  curseSystem: {
    title: 'Chupisiet — The Curse',
    subtitle: 'The ultimate sanction of Kipsigis law',
    types: [
      {
        name: 'Natural Curse (Kechupge)',
        description: 'Automatic, infallible. Operates when any law or custom is broken. One curses oneself. There is no specific word for it — it simply happens, like nature.',
      },
      {
        name: 'Verbal Curse',
        description: 'Spoken by individuals or the kokwet council. Reserved for serious violations.',
      },
    ],
    rules: [
      'Children may never curse adults',
      'Adult men may use light curses in fun among equals',
      'Never used toward women or relations by marriage',
      '"Mein mat" — "May your fire die" — never spoken in jest, never to an adult',
    ],
    meinMat: {
      phrase: 'Mein mat',
      meaning: 'May your fire die',
      weight: 'The ultimate curse. Means the complete extinction of a family line. The kimonjokut (roof peak) is cut down. The firestones are removed. The line ends forever.',
    },
  },

  proverbsInteractive: [
    {
      situation: 'A man boasts about his unripe wheat. A hailstorm destroys it.',
      proverb: 'Machei ng\'oktaab kipsomaninet ne iyumi eng\' oinet',
      meaning: 'You do not boast about unborn luck',
      theme: 'Humility',
    },
    {
      situation: 'A traveler sheltered under a great tree during a storm. When the rain stopped, he began cutting its branches for firewood.',
      proverb: 'Mokeyume sondii, c moen ketil',
      meaning: 'One does not shelter under a leafy canopy and then cut it down when it stops raining',
      theme: 'Gratitude',
    },
    {
      situation: 'A young warrior burned with rage after an insult. His elder held him back.',
      proverb: 'Sisinge sikwasta nerekek',
      meaning: 'Be silent until your anger has abated',
      theme: 'Patience',
    },
  ],

  sacredPlants: [
    { name: 'Segechuwet', description: 'Sweet smelling — sacred to all clans' },
    { name: 'Seretiot', description: 'Kikuyu grass — sacred to all clans, used in ceremonies' },
    { name: 'Senendet', description: 'A creeper — used in ceremonies' },
  ],

  beerCulture: {
    title: 'The Beer Culture',
    subtitle: 'Musarek — central to Kipsigis social life',
    brewing: [
      { day: 'Day 1: Keriech', description: 'Brewing begins — the preparation' },
      { day: 'Day 2: Kutu', description: 'Second day — the process continues' },
      { day: 'Day 3: Murto', description: 'Third day — anticipation builds' },
      { day: 'Day 4: Karurio', description: 'Ready to drink — the gathering begins' },
    ],
    etiquette: [
      'Drunk through long tubes (rogorosiek) 5-12 ft long',
      'Communal pot (loenik/terenik) — converts drinking into social gathering',
      'Cannot step over beer tubes',
      'One man speaks at a time — the saruriet (fly-whisk) grants the floor',
      'Women rarely drink publicly — drunkenness is a serious offence for women',
      'Host sits in Koima (west side of house)',
    ],
    closing: 'At the end, an elder chants the Kaberuret — a blessing on the country, elders, warriors, cattle, and all present. The company responds in chorus.',
  },
};
