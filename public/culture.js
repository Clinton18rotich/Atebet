// Complete Kipsigis Cultural Encyclopedia
// Based on the full Language & Culture Archive

const CULTURE = {

  // ===== BOOK 3: THE WAY OF LIFE =====

  chapter25_worldview: {
    title: "The Kipsigis Worldview",
    number: 25,
    concepts: [
      { kps: "Piikab Kutit", eng: "People of the Mouth", meaning: "How the Kipsigis call themselves — speech defines identity" },
      { kps: "Piteet", eng: "Culture / Custom / Nature / Law", meaning: "The central concept governing all life. No separation between natural law and human law. The sun rising is piteet. A flower blossoming is piteet. Following customs is piteet." },
      { kps: "Atepto / Atebet", eng: "Behaviour / Conduct", meaning: "The way one behaves flows directly from piteet. Not separate from culture." },
      { kps: "Sogorge", eng: "Unnatural behaviour", meaning: "Breaking custom is acting against nature itself. Brings automatic punishment — no enforcer needed." },
    ]
  },

  chapter26_god: {
    title: "God and the Spirit World",
    number: 26,
    godNames: [
      { name: "Asis / Asista", meaning: "God and the Sun. The sun is the visible symbol of God, but is not God itself." },
      { name: "Cheptalel", meaning: "God — the personal, caring deity. Accessible by prayer." },
      { name: "Asista chepkelyen sogol", meaning: "God of the nine legs" },
      { name: "Asis Chepo Namuni", meaning: "God of Namuni" },
      { name: "Asiswe!", meaning: "O God! (calling out in prayer)" },
      { name: "Asistanyon", meaning: "Our God" },
    ],
    godAttributes: [
      "Benign protector — no devil or evil spirit in Kipsigis belief",
      "Cares for all living things",
      "Accessible by prayer — Kongoe (thank you) used for God",
      "Major calamities (droughts, famines) may be ascribed to God's anger",
      "Personal troubles come from human behaviour or ancestral spirits, not God",
    ],
    spirit: {
      name: "Oinder",
      description: "Every human has a spirit that existed far back in the past and continually reincarnates in descendants. The spirit is far more important than the body, which is merely a temporary dwelling.",
      rules: [
        "Spirits retain the same nature as when embodied — a kind spirit remains kind, an angry one remains angry",
        "At death, the spirit remains near the place of death for a few days",
        "Then reborn into a new child in the family",
        "Identity discovered when newborn sneezes at a name",
        "Marriage and children are supremely important — without children, the family line ends and spirits have nowhere to return",
      ],
    },
    chebsageyot: {
      role: "Spirit Communicator / Healer",
      description: "Usually women. Spirits communicate through them. They appear in visions (Norset). Treat sickness caused by moral faults using wimbi grain and cowrie shell divination. Receive instructions from family spirits.",
    },
    immortality: "Legend says old women once sacrificed themselves at a place called Pore to achieve immortality for the people.",
  },

  chapter27_directions: {
    title: "The Sacred Directions",
    number: 27,
    east: {
      name: "Kong'asis",
      meaning: "The most sacred direction. Direction of God and the rising sun. Health, life, prosperity (Sopondo).",
      rules: [
        "All prayers offered facing east",
        "Mabwaita (household altar) stands east of the house door",
        "When a husband dies, body buried with head facing east so spirit rises toward God at sunrise",
        "Animal slaughter faces east",
        "Dead bodies NOT carried east",
        "A house door must never face east — if it does: 'Kataach koris' (It has been built wrongly)",
        "The east is for God, not for everyday entry",
      ],
    },
    west: { name: "Pochi", meaning: "Direction of the setting sun, associated with completion and ending" },
    north: { name: "Muget", meaning: "One of the cardinal directions" },
    south: { name: "Kapen", meaning: "One of the cardinal directions" },
  },

  chapter28_mountain: {
    title: "The Sacred Mountain",
    number: 28,
    mountain: {
      name: "Tulwab Kipsigis",
      modernName: "Mount Blackett",
      significance: [
        "God (Asis) appeared to the ancestors here",
        "The Kipsigis became a distinct people at this mountain",
        "A mysterious voice warned them not to drink the poisoned springs — saving the people",
        "The first initiation in the new homeland took place here",
      ],
    },
    migration: [
      { from: "Misiri", eng: "Egypt", note: "Original homeland" },
      { from: "Burgei", eng: "Southern Sudan", note: "Migration route" },
      { from: "Mount Elgon", eng: "Eastern Uganda/Kenya border", note: "Passed by this mountain" },
      { from: "Lake Baringo", eng: "Kenya Rift Valley", note: "Settlement point" },
      { from: "Tulwab Kipsigis", eng: "Mount Blackett (c. 1650)", note: "Final entry into present homeland" },
    ],
  },

  chapter29_house: {
    title: "The House as a Microcosm",
    number: 29,
    elements: [
      { element: "Toloita", eng: "Central post", meaning: "Stability, ancestry, the spine of the home. The first thing erected." },
      { element: "Kimonjokut", eng: "Roof peak", meaning: "Active household life. When the husband dies, it is cut down — the household's active life is over." },
      { element: "Koitab maa", eng: "Fireplace", meaning: "Family line, life, continuity. The fire must never die." },
      { element: "Mabwaita", eng: "Altar", meaning: "Place of prayer, east of the door. Made of sacred plants (korosek). Built at every married man's house." },
      { element: "Kurgat", eng: "Doorway", meaning: "Boundary between human and divine. Must never face east." },
      { element: "Njor", eng: "East side of house", meaning: "The sitting area — associated with daily life" },
      { element: "Koima", eng: "West side of house", meaning: "Where the host sits during gatherings" },
      { element: "Tabot", eng: "Loft / Attic", meaning: "Grain storage. First harvest grain smeared on beams." },
      { element: "Sigironiet", eng: "Unmarried children's hut", meaning: "Separate sleeping quarters for unmarried youth" },
    ],
    rules: [
      "No house may be burnt — it is sacred",
      "4-day fire ritual before inhabiting a new house",
      "Sacred plants burned during the first 4 days",
      "Kurgapsan — hidden ceremonial door in the east wall",
      "Ngeromberu pole — beyond which visitors may not pass",
      "House is round, 20-30 ft diameter",
      "Every wife has her own separate house",
    ],
    movingReasons: [
      "Want to be near relatives or friends",
      "Better grazing nearby",
      "Sickness or death in the house",
      "Mushrooms appearing in the house (bad omen)",
      "Dog climbing on the roof (bad omen)",
    ],
  },

  chapter30_lifecycle: {
    title: "The Life Cycle",
    number: 30,
    birth: {
      motherTerm: { kps: "Tamunet", eng: "Pregnant woman" },
      midwife: { kps: "Chebiosetap Sigisyo", eng: "Midwife" },
      process: [
        "Birth attended by the midwife — women only",
        "Father cannot see child for 1-2 months",
        "Ngorayikap Kotuswa (garment of mouths) ceremony during pregnancy",
      ],
      naming: {
        spiritDetermination: "Women call out names of deceased relatives. When the baby sneezes at a name, the spirit is identified. Women laugh three times for a girl, four times for a boy.",
        names: [
          { type: "Kurenet", meaning: "Spirit name — from the reincarnated spirit that entered the child" },
          { type: "Kainetap Musarek", meaning: "Common name — commemorates birth circumstances (time, weather, events)" },
          { type: "Salamik / Salanyat", meaning: "Praise name — from warriors' exploits, always with Tap/Tab/Tam prefix" },
          { type: "Nickname", meaning: "From personal peculiarities or traits" },
        ],
        prefixes: "Birth names begin with Kip- for boys and Chep- for girls, followed by the time or event of birth. E.g., Kipkemoi (born at night), Chebet (born at daytime), Kiplagat (born at sunset).",
      },
    },
    initiation: {
      name: "Tumdo",
      duration: "4.5 to 8 months",
      significance: "Most important event in a Kipsigis life. Before initiation, children are not true Kipsigis — only 'children of Kipsigis.' Initiation is rebirth.",
      stages: [
        { stage: 1, name: "Circumcision", kps: "Tumdo", desc: "First stage. Crowds gather. The Chepketilet war song is sung. Great secrecy between sexes." },
        { stage: 2, name: "Labetap Eun", kps: "Ceremonial Hand Washing", desc: "3-4 weeks after circumcision. Marks the beginning of formal instruction period." },
        { stage: 3, name: "Ketienchin", kps: "The Instruction", desc: "Singing ceremony. Emphasizes good behaviour (Atebet). Initiates learn how to conduct themselves as adults." },
        { stage: 4, name: "Kayaet", kps: "River Immersion", desc: "Full immersion in the river. Initiates may now go about freely. Symbolic cleansing." },
        { stage: 5, name: "Ngetumot", kps: "Coming Forth / Opening of the Way", desc: "Initiates pass through the Ormarechet archway into adulthood. The final and most important ceremony." },
        { stage: 6, name: "Tiletap Kirokwek", kps: "Cutting of Walking Sticks", desc: "Fertility ceremony marking the transition." },
        { stage: 7, name: "Hair Cutting", desc: "4 days after coming out. Hair left uncut for 5-7 months is ceremonially cut at the mabwaita." },
      ],
      rules: [
        "Cannot begin in Karatet year (tender year)",
        "Cannot begin in August (Robtoe)",
        "Three main batches per age set cycle (21 years)",
        "Great secrecy between sexes — men and women initiated separately",
      ],
      roles: [
        { role: "Pamongo / Koruchon / Iyoo", desc: "Initiation parents — they feed the initiates" },
        { role: "Motiriot", desc: "Instructor and guide who teaches proper behaviour" },
        { role: "Chemngobait", desc: "She-goat payment to the woman who feeds the initiates" },
        { role: "Tegerisiek", desc: "Children whose elder sibling died before their birth — special ceremony (Kaburburet)" },
      ],
      afterInitiation: [
        "A man drops his birth prefix and becomes Arap + his father's birth root name",
        "A woman is ready for marriage",
        "The birth verb changes: before initiation a woman 'sich' (gives birth); after initiation she 'tum' (gives birth)",
      ],
    },
    marriage: {
      ceremonies: [
        { name: "Ratet", eng: "The Tying", desc: "First marriage ceremony. Unbreakable betrothal. Couple's wrists bound with seguitet grass under an arch of beer tubes. Elders chant blessings." },
        { name: "Kabwatereret", eng: "Child betrothal", desc: "Betrothal arranged during childhood." },
        { name: "Suetap Tuga", eng: "Viewing the Cattle", desc: "Cattle presented by groom's family — not as purchase but as a gift and guarantee of proper treatment." },
        { name: "Katunisiet", eng: "Main marriage ceremony", desc: "Optional, expensive. The full ceremonial wedding." },
        { name: "Katumet", eng: "Secret men's ceremony", desc: "Two secret ceremonies for men involving practical jokes. Not discussed openly." },
      ],
      rules: [
        "Clan exogamy — same totem cannot marry",
        "Age set restrictions on marriage",
        "No marriage with own age set's children",
        "Polygamy practiced — a man may have multiple wives",
        "Each wife has her own house",
        "Seniority comes from age alone, not from being first wife",
        "All wives help one another in work",
        "Widow cannot marry again — lives with Kipkondit",
      ],
    },
    death: {
      process: [
        "Death met with silent grief",
        "Nearest relative wails aloud to announce it",
        "All work in the neighbourhood stops for 2-4 days (Kiret)",
        "Body disposed of in the bush — any direction except east",
        "Children who haven't cut teeth buried in dung heap",
        "Corpse carrier (Rumindet) unclean for 4 days",
        "Deceased's name not spoken for months",
      ],
      widowhood: [
        "Husband's roof peak (Kimonjokut) cut down",
        "Firestones removed from the house",
        "Widow's ornaments removed for approximately 1 year (Ngisirisyet ceremony)",
        "Head shaved in mourning (Kibuchege)",
      ],
      ultimateCurse: "Mein mat — 'May your fire die.' The complete extinction of a family line. Never spoken in jest, never to an adult.",
    },
  },

  chapter31_social: {
    title: "The Social Structure",
    number: 31,
    clans: {
      kps: "Oret (pl. Ortinwek)",
      description: "Patrilineal clans. Approximately 39 main clans (over 100 total). Each has a totem (tiondo), usually an animal. Marriage within same clan strictly forbidden.",
      womensClans: "A woman carries three clan identities: kisikwon (father's clan), anue (mother's clan), komutan (husband's clan after marriage).",
      collectiveResponsibility: "Clan shares collective responsibility for homicide — compensation paid by whole clan.",
    },
    ageSets: {
      kps: "Ipinda (sing. Ipinda)",
      description: "Seven rotating age-sets. Each set lasts approximately 15-21 years. All Kipsigis belong to one. Determines marriage eligibility, who one may sleep near, and social seniority.",
      cycle: [
        { order: 1, name: "Maina" },
        { order: 2, name: "Chumo" },
        { order: 3, name: "Sawe" },
        { order: 4, name: "Kerongoro", subsets: ["Kiptoymen", "Kiptormesendet", "Kipelgot", "Kimarere"] },
        { order: 5, name: "Kaplelach", subsets: ["Kipalayeng", "Kimutaywet", "Masiba", "Kebebuja"] },
        { order: 6, name: "Kimnyige", subsets: ["Kipsilchoget", "Tabariit", "Kiptilosiek", "Kiptilgarit"] },
        { order: 7, name: "Nyongi" },
      ],
    },
    kokwet: {
      description: "The local social unit — a group of neighbours who help one another in farming, ceremonies, and daily life. Not a geographical district but a community of people. Council settles disputes under the kapkiruog tree.",
    },
    leadership: [
      { role: "Kiptayat (pl. Kiptainik)", function: "War leader — popularly elected, authority during war only" },
      { role: "Kiruogindet (pl. Kiruogik)", function: "Judge and counsellor — authority by reputation, not appointment" },
      { role: "Chebsageyot", function: "Healer and spirit communicator — treats illness caused by moral faults" },
      { role: "Boyotap Tumdo", function: "Elder who officiates at initiation ceremonies" },
    ],
    noChiefs: "There were no chiefs in traditional Kipsigis society. Leaders emerged through character, seniority, and public approval. Authority came from reputation, not appointment.",
    family: [
      "Duty to parents is paramount",
      "Children maintain parents in old age",
      "Women help women; men help men — gendered mutual aid",
      "Relatives build houses for widows",
      "No public affection shown between spouses",
    ],
  },

  chapter32_warrior: {
    title: "The Warrior Code",
    number: 32,
    armyStructure: [
      { unit: "Ngaymet", role: "Advance guard", desc: "First into battle. Scouts the enemy position." },
      { unit: "Pirtic", role: "Cattle drivers", desc: "Protected captured cattle during raids." },
      { unit: "Oldimdo", role: "Main body", desc: "The core fighting force." },
      { unit: "Lumwet", role: "Flankers / Outflankers", desc: "Circled around to cut off enemy retreat." },
    ],
    sanctuaryRules: [
      "Stick a spear with ostrich feathers in the ground — admission of defeat (Saiset)",
      "Offer a handful of plucked grass",
      "Climb a tree with a handful of earth thrown down",
      "Stand in the middle of a river",
    ],
    prisoners: [
      "Captor throws his cloak over the prisoner — they are now under protection",
      "Prisoner ransomed for 5-9 cows",
      "Woman taken with left hand = becomes a wife; with right hand = becomes a daughter",
    ],
    warTypes: [
      { against: "Masai", nature: "True war — sporting, governed by strict rules, almost chivalric" },
      { against: "Kisii", nature: "Territorial war — more bitter, over land" },
      { against: "Luo", nature: "Cattle raiding only — conducted after dark" },
    ],
    leaders: {
      title: "Kiptayat (pl. Kiptainik)",
      description: "Popularly elected war leaders. Authority only during wartime. The junior war leader comes from the preceding age set.",
    },
    warCall: 'Kakobok! Awem\'po ngotwa — "Hunt with spears!" — Shouted from hill to hill to mobilize warriors.',
    armySize: "A file or company (Kwanet) consisted of 100-200 men.",
    purification: "Killing a fellow Kipsigis with blood (Rumisiet) made one permanently unclean. The only purification: kill 4 enemy warriors plus 1 woman in battle.",
  },

  chapter33_rituals: {
    title: "The Ritual Calendar",
    number: 33,
    greatCeremonies: [
      { name: "Kapkorosit", purpose: "Annual public worship of God (Cheptalel). Held any month except August. White he-goat, cowrie shells, sacred plants. No blood sacrifice. Not held this century." },
      { name: "Tumdo", purpose: "Initiation — the great life-cycle ceremony. 4.5-8 months. Cannot begin in Karatet year or August." },
      { name: "Rate", purpose: "Marriage tying ceremony. Couple bound with seguitet grass." },
      { name: "Katumet", purpose: "Secret men's marriage ceremony. Involves practical jokes." },
      { name: "Kaburburet", purpose: "Ceremony for Tegerisiek — children whose elder siblings died before their birth." },
      { name: "Rotet", purpose: "Blessings on warlike enterprises before departure." },
      { name: "Saget ap Eito", purpose: '"Cutting the age set" — determining generation exogamy rules.' },
    ],
    deathCeremonies: [
      { name: "Iseetab Koot", purpose: "Cleansing the house after a husband's death" },
      { name: "Kibuchege", purpose: "Ritual head shaving in mourning" },
      { name: "Ngisirisyet", purpose: "Removal of widow's ornaments" },
      { name: "Kiil Karik", purpose: "Cleansing the weapons of the deceased" },
    ],
    cleansing: [
      { name: "Kole / Kayanyinyet", purpose: "Purifying from past wrongdoings" },
      { name: "Iseetab Tuga", purpose: "Protecting cattle from disease" },
      { name: "Tisetet Emet", purpose: "Cleansing land after poor harvest" },
      { name: "Katumetab Lakwet", purpose: "Ceremony for a frequently ill child" },
    ],
  },

  chapter34_praiseNames: {
    title: "The Praise Names of Women",
    number: 34,
    description: "Kipsigis women receive praise names (Salanik) based on their character. These beautiful honorifics encode the values of the culture. Always use the Tap-/Tab-/Tam- prefix.",
    names: [
      { name: "Tap-Bel Gaa", meaning: "She who burns the homestead", virtue: "Jovial spirit — a woman whose energy warms the home" },
      { name: "Tap-Sa Bei", meaning: "She who worships water", virtue: "Patience — like water, she wears down obstacles" },
      { name: "Tap-Nyol Ei", meaning: "She who deserves an ox", virtue: "Blameless character — worthy of the highest honor" },
      { name: "Tabutany", meaning: "She who shares a cow", virtue: "Generosity — shares her wealth freely" },
      { name: "Tap-Lelei", meaning: "She of the white ox", virtue: "Fairness and purity" },
      { name: "Tap-Kutuny", meaning: "She who always kneels", virtue: "Humility — shows proper respect" },
      { name: "Tap-Rop Kok", meaning: "She who skirts the men's meeting place", virtue: "Courage — unafraid to approach spaces of power" },
      { name: "Chep-Maluk", meaning: "She with ever-flowing breast milk", virtue: "Creativity and wisdom that nourishes others" },
    ],
  },

  chapter35_curses: {
    title: "Curses and Their Power",
    number: 35,
    description: "The curse (Chupisiet) is the ultimate sanction of Kipsigis law. There is no police, no prisons — the curse is the enforcement mechanism, and it is believed to be infallible.",
    types: [
      { type: "Natural Curse (Kechupge)", desc: "Automatic. Infallible. Operates when any law or custom is broken. One curses oneself — there is no specific word for it. Like nature, it simply happens." },
      { type: "Verbal Curse", desc: "Spoken by individuals or the kokwet council. The public curse is pronounced at the kokwet tree. Examples: 'May water make you ill,' 'May food make you ill.'" },
    ],
    socialRules: [
      "Children may never curse adults",
      "Adult men may use light curses in fun among equals only",
      "Curses are never used toward women or relations by marriage",
      "Mein mat ('May your fire die') is the ultimate curse — never spoken in jest, never to an adult",
    ],
    meinMat: {
      phrase: "Mein mat",
      meaning: "May your fire die",
      consequence: "The complete extinction of a family line. The kimonjokut (roof peak) is cut down. The firestones are removed. The line ends forever. This is the worst thing that can be spoken.",
    },
    mumek: {
      title: "The Mumek Oath",
      description: "The most strict, irrevocable oath. A false Mumek oath brings a terrible curse on the whole family. Forms include: Mumeh ap Ngotwek (spear oath), Mumeh ap Liteito (whetstone oath), dog killing oath (with Masai/Kisii), human skull oath (witchcraft cases).",
    },
  },

  chapter36_proverbs: {
    title: "Proverbs (Kalewenaik)",
    number: 36,
    description: "Proverbs are the distilled wisdom of the culture. Called kalewenet (singular) and kalewenaik (plural). They encode moral lessons, social expectations, and accumulated ancestral wisdom.",
    proverbs: [
      { kps: "Mokeyume sondii, c moen ketil", eng: "One does not shelter under a leafy canopy and then when it stops raining cut it down", theme: "Gratitude — do not forget those who helped you" },
      { kps: "Mokeloot ndara", eng: "One does not award to the if-one-had", theme: "Regret — useless to dwell on what might have been" },
      { kps: "Sisinge sikwasta nerekek", eng: "Be silent until your anger has abated", theme: "Anger — do not speak or act in the heat of emotion" },
    ],
  },

  chapter37_beer: {
    title: "The Beer Culture",
    number: 37,
    description: "Beer (musarek when non-alcoholic, brewed for ceremonies) is central to Kipsigis social life. It converts drinking into a social gathering through communal pots and long tubes.",
    brewing: [
      { day: "Keriech", meaning: "Brewing begins — Day 1", desc: "Women begin the process. Entirely women's work." },
      { day: "Kutu", meaning: "Second day — Day 2", desc: "Mayuwek (roasted gelatinous granules) and Mermeruk (malt from germinated wimbi) prepared." },
      { day: "Murto", meaning: "Third day — Day 3", desc: "Fermentation continues. Anticipation builds." },
      { day: "Karurio", meaning: "Fourth day — ready to drink — Day 4", desc: "The beer is ready. The gathering begins." },
    ],
    drinking: [
      "Drunk through long tubes (rogorosiek) 5-12 feet long from a communal pot (loenik/terenik)",
      "Sipped slowly — it's about the gathering, not intoxication",
      "Kokwet = beer party as payment for communal work",
      "Keregut = private beer party (secret)",
    ],
    etiquette: [
      "Cannot step over beer tubes — serious disrespect",
      "Host sits in Koima (west side of house)",
      "One man speaks at a time — the saruriet (fly-whisk) grants the floor",
      "Women rarely drink publicly — drunkenness is a serious offence for women",
      "Honey-beer known but not culturally approved",
    ],
    closing: "At the end of a beer party, an elder may chant the Kaberuret — a blessing on the country, the elders, the warriors, the cattle, and all present. The company responds in chorus.",
  },

  // ===== ADDITIONAL SECTIONS =====

  superstitions: {
    title: "Superstitions and Omens",
    birds: [
      { bird: "Chepkosoiot (Eagle)", omen: "Kadit (left front) = fortunate; Taylel (right front) = unfortunate" },
      { bird: "Kiptillitiet (Woodpecker)", omen: "Yega (left back) = fortunate; Utumo (right back) = unfortunate" },
      { general: "Turio (straight ahead) = unfortunate; Siori (straight behind) = fortunate" },
    ],
    sneezing: [
      "Determines spirit identity at birth",
      "Good sneezer = born dawn to 4pm",
      "Bad sneezer (Kerumion) = born evening/night",
      "Sneeze during day = 'someone is speaking of me'",
    ],
    evilEye: {
      name: "Suliste",
      description: "Only affects new/tender/immature things — young babies, udders, fresh wounds. Only has power in the morning. Potters prevent strangers from looking at unbaked wares.",
    },
    unlucky: [
      "August (Robtoe) — no new enterprises, no initiation",
      "Karatet year — 'tender' year, no initiation permitted",
    ],
  },

  uncleanness: {
    title: "Uncleanness (Ngwanindo)",
    causes: [
      { cause: "Rumisiet", desc: "Killing a fellow Kipsigis with blood. Permanent, severe. Rumindet cannot enter any house, lives alone in bush, cannot tread on grass, speaks only to other rumindet." },
      { cause: "Removing a corpse", desc: "4 days of uncleanness. Corpse carrier's hair slashed repulsively, cannot visit anyone, speaks only in whispers, food on potsherd eaten with stick." },
      { cause: "Twins birth", desc: "Less severe, removable. Ram sacrifice and anointing. Mother cannot walk in stock enclosures or gardens." },
      { cause: "Birth before initiation", desc: "Severe, sometimes irremovable." },
    ],
  },

  foodRules: {
    title: "Food and Eating Rules",
    staples: [
      { food: "Kimiet", desc: "Wimbi flour boiled to pudding consistency. Eaten with milk (mursik), vegetables, meat, or blood." },
      { food: "Musarek", desc: "Malt food — sweet non-alcoholic gruel." },
    ],
    rules: [
      "Milk and meat cannot be eaten on the same day",
      "Kimiet cannot be cut with a steel knife",
      "Children eat first; women eat last",
      "Cannot eat while standing",
      "Pot cannot be removed while visiting relatives are present",
      "No food may be wasted",
    ],
    prohibited: [
      "Do not kill: cranes, secretary birds, eagles, hornbills, crows, wagtails, thrushes, frogs, chameleons, lizards, mantis, bats, shrews",
      "Do not eat: hare, zebra (except secretly), duck",
      "Women do not eat: game birds, chickens, eggs (traditionally)",
    ],
    blood: "Animals bled for blood as relish using a special arrow (loinet) from a tiny bow. Improves the animal's condition as well. Women may not kill animals.",
  },

  dress: {
    title: "Dress and Ornaments",
    men: [
      "Calf-skin cloak or cotton cloth/blanket",
      "Oil and red clay colouring on body",
      "Ox-stomach cap for rain protection",
      "Ear pendants of copper or lead",
      "Bead and iron armlets above biceps",
      "Bead and brass bracelets",
      "Blue bead string worn above hips",
      "Colobus monkey fur anklets for special occasions",
      "Hair worn in a pigtail — untied for dances",
    ],
    women: [
      "Double skirt of 6-7 softened skins",
      "Koliget cloak — single calf skin or sewn skins",
      "Leather ear straps with beads, joined by iron chains",
      "5-7 necklets of fine wire",
      "Two large brass disc spirals worn over the breast",
      "Heavy iron and brass wire arm spirals",
      "Seed bead ankle strings",
    ],
    hairRules: [
      "Head shaved when hair reaches about 1 inch",
      "Initiation: hair left uncut for 5-7 months, then ceremonially cut at mabwaita",
      "Tegeriot child: left tuft (sungunyet) over the fontanelle",
    ],
  },

  tools: {
    title: "Tools and Musical Instruments",
    instruments: [
      { name: "Ikondet", desc: "War horn — made from waterbuck or buffalo horn" },
      { name: "Kibugandet", desc: "4-stringed instrument, no sounding box" },
      { name: "Ketuba", desc: "8-stringed instrument with skin sounding box" },
      { name: "Nduruet", desc: "Simple flute" },
      { note: "No drums — despised as noisy by the Kipsigis" },
    ],
    household: [
      { name: "Rogorosiek", desc: "Beer tubes made from rogoret creeper, 5-12 ft long" },
      { name: "Sosiot", desc: "Palm sieves for filtering beer through tubes" },
      { name: "Segetiet", desc: "Curved wooden knife for cutting kimiet (ugali)" },
      { name: "Piumet", desc: "Firesticks for kindling fire" },
    ],
    weapons: ["Spears and shields", "Bow and arrows", "Bleeding arrow (loinet) for drawing animal blood", "Clubs"],
    games: [
      { name: "Chebsonginimwet", desc: "Swing made from lianas" },
      { name: "Chebkochutwet", desc: "Slide on wet earth or cow dung" },
      { name: "Kiptanging", desc: "Spinning tops made from fruits pierced with grass" },
      { name: "Tanguchik", desc: "Riddles — hundreds in archaic language, children only, told at night" },
    ],
  },

  agriculture: {
    title: "Agriculture",
    mainCrop: "Wimbi (millet) — stores 5 years, resistant to weevils. Maize introduced around 1912.",
    division: [
      "Men: clearing, burning, sowing, fencing",
      "Women: burning turves, spreading ash, weeding, harvesting, threshing, grinding",
      "Helpers (Morik) provide voluntary assistance",
    ],
    practices: [
      "Fields left 3-5 years between crops (fallow rotation)",
      "Turves stacked and burned for potash fertilizer",
      "Sowing determined by visibility of the Pleiades (Kormerik)",
      "Kapkorosit replica erected in each field for protection",
      "Every field must be fenced",
    ],
    harvest: [
      "All hands work during harvest",
      "Grain fermented in heaps for 4-6 days",
      "Beer party (kokwet) thrown for helpers",
      "First grain smeared on attic (tabot) beams as blessing",
    ],
  },

  naming: {
    title: "The Naming System",
    rules: [
      "Married women addressed as Kobo (mother of child) or Neb (wife of)",
      "Men drop childhood names after initiation — become Arap + father's birth root",
      "Deceased names not spoken for months after death",
      "Cannot use wife's given name",
      "Woman cannot use husband's or father-in-law's name",
      "Mother-in-law: no name used at all — addressed indirectly",
    ],
  },

  punishment: {
    title: "Laws and Punishment",
    sogornotet: {
      description: "Animals behaving unnaturally are put to death — biting young, drinking blood, licking bones. Applied to humans: incest, habitual theft. Punishment is death.",
    },
    homicide: {
      description: "Rumisiet — killing with blood makes one permanently unclean. Compensation: 9-10 cattle (Tugap Muget). A cow (Iringoit) stops immediate reprisals. Killing a foreigner = slight uncleanness, no compensation.",
    },
    theft: {
      description: "Only 2nd offence punishable by death. Death by sharpened sticks (mosigisik). Thief cast out of clan (kewir en sogot). Famine theft forgiven with formal apology (Nyoetap Gat).",
    },
    witchcraft: {
      description: "Panisiet — death penalty. Torture used to obtain confession. Old women usually accused. Kwombisiot = mild form that only makes husbands mild.",
    },
  },
};
