export interface Song {
  title: string;
  year?: string;
  featuring?: string[];
  notes?: string;
}

export interface Musician {
  name: string;
  alias?: string;
  role: string;
  years: string;
  band: string;
  clan?: string;
  ageSet?: string;
  totem?: string;
  origin: string;
  songs: Song[];
  biography: string;
  legacy: string;
}

export interface Band {
  name: string;
  era: string;
  founded: string;
  leaders: string[];
  members: string[];
  description: string;
}

export interface MusicalMoment {
  year: string;
  event: string;
  significance: string;
}

export const Musicians: Musician[] = [
  {
    name: 'Wilson Kipkirui Arap Laboso',
    alias: 'Maruchela',
    role: 'First Kalenjin Recording Artist, Broadcaster',
    years: '1920–',
    band: 'Solo (Acoustic Guitar)',
    clan: 'Kibaek Clan (Tegeldo)',
    ageSet: 'Chumiot',
    origin: 'Kapsabul Village, Sigor, Chepalungu, Bomet County',
    songs: [
      { title: 'Ndamoriret' },
      { title: 'Chebokion Kiyai' },
      { title: 'Yorwokyine ak Chito' },
      { title: 'Bikab Kalenjin Ongiyomen Kee' },
      { title: 'Kipsigis ak Nandi ongiyomengei...', notes: 'Unity song across Kalenjin communities' },
      { title: 'Bandap Tai...', notes: 'Cherished by older generation' },
      { title: 'Ongiyamege', notes: 'Signature tune — recording still missing' },
    ],
    biography: 'Born in 1920 at Kapsabul Village. Belonged to Chumiot age-set of the Kibaek Clan. Brother to the father of late MP Lorna Laboso and late Governor Dr. Joyce Laboso. Served as broadcaster at KBC Kisumu (Kalenjin Section). In the mid-1950s, made history as the first Kalenjin to record secular music using an acoustic guitar, teaching himself an intricate finger-picking style.',
    legacy: 'Founding pillar of modern Kalenjin music. Introduced the guitar to Kalenjin music. Paved the way for all subsequent generations.',
  },
  {
    name: 'Raphael Kipchamba Arap Tapotuk',
    alias: 'Kipchamba',
    role: 'Chairman, Lead Vocalist — Father of Kipsigis Rhumba',
    years: '1937–2007',
    band: 'Koilonget Band',
    clan: 'Kapsoenik Clan',
    origin: 'Chepalungu, Bomet County',
    songs: [
      { title: 'Kiloit' },
      { title: 'Vernonika' },
      { title: 'Matinye Aliot Chepkam' },
      { title: 'Korgob Mondoi' },
      { title: 'Chemunada', featuring: ['Chemirei'] },
      { title: 'Sugarik', featuring: ['Chemirei'] },
      { title: 'Milika', featuring: ['Chemirei'] },
      { title: 'Chepwenga', featuring: ['Chemirei'] },
      { title: 'Soweyek', featuring: ['Morris Arap Mainek'] },
      { title: 'Nelel ak Netui', featuring: ['Francis Sonoiya'] },
      { title: 'Cheptirorit', featuring: ['Francis Sonoiya'] },
      { title: "Ng'omintun Raini", featuring: ['Francis Sonoiya'] },
      { title: "Ong'etien Ketch Kenya", featuring: ['Francis Sonoiya'] },
    ],
    biography: 'Widely regarded as the most prolific figure in Kipsigis music. Founded the Koilonget Band in 1957. Recorded over 1,200 songs. His music is the cornerstone of Kalenjin culture.',
    legacy: 'Father of Kipsigis Rhumba. 118 documented songs. Inspired generations of Kalenjin musicians.',
  },
  {
    name: 'Morris Arap Mainek',
    role: 'Accordion, Rhythm Guitar, Composer',
    years: '1937–2024',
    band: 'Koilonget Band',
    origin: 'Chepalungu, Bomet County',
    songs: [
      { title: 'Kapkulumben', notes: 'Signature tune for Kass FM prime-time news' },
      { title: 'Dip' },
      { title: 'Kisome Jehowah Koteswech Betusyek' },
      { title: 'Tule Tule Koroban' },
      { title: 'Sigaret' },
      { title: 'Chepotewerer' },
      { title: "Ang'ang'ok" },
      { title: 'Tabararik' },
    ],
    biography: 'Master of the Accordion and Rhythm Guitar. Created the unique "Kalenjin Rhumba and Twist" sound. Founding Koilonget Band member (1957). Composed "Kapkulumben." Passed away March 21, 2024, at Lungisa Referral Hospital, Bomet.',
    legacy: 'His accordion defined an era. "Kapkulumben" remains the most recognized Kalenjin instrumental.',
  },
  {
    name: 'Francis Sonoiya Arap Langat',
    alias: 'Sonoiya',
    role: 'Lead Guitarist, Singer, Songwriter',
    years: '–1975',
    band: 'Koilonget Band',
    clan: 'Motoborik Clan',
    ageSet: 'Pakuleiwek',
    origin: 'Abosi, Kaplekwa, Gorgor, Sotik Sub-County, Bomet County',
    songs: [
      { title: 'Nelel ak Netui', featuring: ['Kipchamba'] },
      { title: 'Cheptirorit', featuring: ['Kipchamba'] },
      { title: "Ng'omintun Raini", featuring: ['Kipchamba'] },
      { title: "Ong'etien Ketch Kenya", featuring: ['Kipchamba'] },
    ],
    biography: 'Son of Arap Chepmogor. Finest guitarist of his generation—granted rare privilege of using Chandarana Studios resident guitar. Pakuleiwek age-set. Died tragically around 1975 from medical overdose. Kipchamba learned of his death three weeks later when arriving for a scheduled recording.',
    legacy: 'Extraordinary guitar mastery. His partnership with Kipchamba produced timeless hits.',
  },
  {
    name: 'Francis Koech',
    alias: 'Chemirei',
    role: 'Master Vocalist, Theatrical Comedian',
    years: '',
    band: 'Koilonget Band',
    ageSet: 'Korongoro (1967 initiation)',
    origin: 'Bomet County',
    songs: [
      { title: 'Siling Bogol', featuring: ['Kipchamba'] },
      { title: 'Madam', featuring: ['Kipchamba'] },
      { title: 'Obot Jeni', featuring: ['Kipchamba'] },
      { title: 'Mama Momi', featuring: ['Kipchamba'] },
    ],
    biography: 'Entered the industry in 1978. Korongoro age-set. Famous for altering his voice to play female characters (Obot Mini, Sisi). Music on Mdundo Music.',
    legacy: 'Brought humour and character-acting to Kalenjin music.',
  },
  {
    name: 'Segeri Arap Talaam',
    role: 'Composer, Singer',
    years: '',
    band: 'Koilonget Band',
    clan: 'Kapkenyogorek Clan',
    origin: '',
    songs: [
      { title: 'Kapyugoi', featuring: ['Pole Arap Sitonik'] },
      { title: 'Kunuet', featuring: ['Kipchamba'] },
      { title: 'Tukuk Somok', featuring: ['Kipchamba'] },
      { title: 'Matobaren Kee Karik' },
      { title: 'Solyot' },
    ],
    biography: 'Renowned composer. Crucial role in passing Kipsigis culture through Kalenjin Rhumba. Founding Koilonget member.',
    legacy: 'Compositions preserved cultural narratives for future generations.',
  },
  {
    name: 'Joel Kileges',
    role: 'Pioneer, Former GSU Officer',
    years: '',
    band: 'Jamasis Band',
    clan: 'Kipsamaek Clan',
    totem: 'Lion',
    origin: 'Saoset, Bomet East',
    songs: [
      { title: 'Tapeiga', year: '1977' },
      { title: 'Kipmatakur', year: '1977' },
      { title: 'Lewenet (Pt. 2)', year: '1977' },
      { title: 'Bandeik', year: '1977' },
      { title: 'Chebile (No. 2)', year: '1976' },
      { title: 'Isigire', year: '1977' },
    ],
    biography: 'Former GSU officer alongside cousin Alexander Kering. Blended traditional storytelling with Afrosounds, Pop, and Rumba. Recorded on A.I. Records Kenya Limited.',
    legacy: 'Massive TikTok revival bridging generations.',
  },
  {
    name: 'Pole Arap Sitonik',
    alias: 'Bolle / Polo',
    role: 'Bandleader, Lead Vocalist',
    years: '–2018',
    band: 'History Kumbuka Band',
    clan: 'Kapsoenik Clan',
    origin: 'Kiriba Village, Chepalungu, Bomet County',
    songs: [
      { title: 'Kipyou biik tugul Misiri', notes: 'Kalenjin migration stories' },
      { title: 'Kongoi Kapyugoi' },
      { title: 'Taplaige alk Chesanga' },
      { title: 'Chemorta' },
      { title: 'Kwondangung' },
      { title: 'Grace' },
    ],
    biography: 'Same clan as Kipchamba. Former horse rider and jockey for white settlers in Ngong. Nickname "Pole" from Polo races. Recorded at Ramojei Photography Studio, Kericho. Died 2018.',
    legacy: 'Reference point for younger stars like Ronald Sitonik.',
  },
  {
    name: 'Cheptorus Arap Chepkwony',
    role: 'Moral Educator, Living Treasure',
    years: '',
    band: 'Bureti Band',
    clan: 'Kiplegenek Clan',
    origin: '',
    songs: [
      { title: 'Cham Sigikuk', notes: 'Love parents, respect elders, value family' },
      { title: 'Malembech Ngalekab Boisiek', featuring: ['Arap Techoget'] },
      { title: 'Kipsoiywet' },
      { title: 'Kiu Sopet Eng Taa' },
      { title: 'Pilora' },
    ],
    biography: '1970s–1980s. Still alive — "Living Treasure." Music teaches moral values.',
    legacy: 'Moral compass for the community.',
  },
  {
    name: 'Alexander Kering',
    role: 'Co-Founder, Jamasis Band',
    years: '',
    band: 'Jamasis Band',
    origin: '',
    songs: [],
    biography: 'Cousin and lifelong musical partner of Joel Kileges. Co-founded Jamasis Band. Collaborated under A.I. Records Kenya Limited in the late 1970s.',
    legacy: 'Pioneered Kalenjin secular music with Joel Kileges.',
  },
  {
    name: 'Joseph Kiprotich Arap Tariraat',
    role: 'Leader, Lead Vocalist',
    years: '1969–',
    band: 'Olala Boys Band',
    clan: 'Kaparangwek (The Elephant Clan)',
    origin: 'Born Tikombo; raised Olala village, Narok West',
    songs: [
      { title: 'Korenyon Sukubo', year: '1992', notes: 'Also "Nen Ochoun Korenyon Sukubo"' },
    ],
    biography: 'Born 1969. Kaparangwek clan — sons praised as Porogeek. Debuted 1989 under Chepkulo Sounds. Recorded on Kipsuter Sounds. Collaborated with Samwel Arap Cherosei and Joseph Arap Kossiom.',
    legacy: 'Signature 1992 song remains a classic.',
  },
  {
    name: 'Hat Arap Kotut',
    role: 'Composer',
    years: '',
    band: 'Traditional',
    origin: 'Kapkatet, Kericho',
    songs: [
      { title: 'Chebo Moire', year: '1952', notes: 'Fighting song. ILAM Record CR2103. 78 RPM Shellac' },
    ],
    biography: 'Composed "Chebo Moire" recorded 1952 at Kapkatet by ILAM. Among earliest Kipsigis recordings.',
    legacy: 'Composition preserved in ILAM archive.',
  },
  {
    name: 'Cheriyot Arap Kirui',
    role: 'Original Singer',
    years: '',
    band: 'Traditional',
    origin: 'Kapkatet, Kericho',
    songs: [
      { title: 'Chemirocha I', year: '1950', notes: 'Recorded by Hugh Tracey. Repatriated 2015' },
    ],
    biography: 'Original singer of Chemirocha I. Found in 2015 by ILAM and Ketebul Music during repatriation.',
    legacy: 'Voice preserved 65 years, returned home.',
  },
];

export const Bands: Band[] = [
  {
    name: 'Koilonget Band',
    era: 'Pioneer',
    founded: '1957',
    leaders: ['Kipchamba Arap Tapotuk', 'Morris Arap Mainek'],
    members: ['Kipchamba', 'Morris Mainek', 'Francis Sonoiya', 'Segeri Arap Talaam', 'Oriango Arap Chepkwony', 'Francis Chemirei Koech', 'Kipkwoburiot Arap Riro'],
    description: 'Most influential Kalenjin band. 1,200+ songs. Recorded at Chandarana Records, Kericho.',
  },
  {
    name: 'Jamasis Band',
    era: 'Pioneer',
    founded: '1970s',
    leaders: ['Joel Kileges', 'Alexander Kering'],
    members: ['Joel Kileges', 'Alexander Kering'],
    description: 'Pioneered Kalenjin secular music. A.I. Records Kenya Limited.',
  },
  {
    name: 'History Kumbuka Band',
    era: 'Pioneer',
    founded: '1960s',
    leaders: ['Pole Arap Sitonik'],
    members: ['Pole Arap Sitonik'],
    description: 'Blended storytelling with acoustic and electric guitar. Ramojei Photography Studio, Kericho.',
  },
  {
    name: 'Bureti Band',
    era: 'Growth',
    founded: '1970s',
    leaders: ['Cheptorus Arap Chepkwony'],
    members: ['Cheptorus Arap Chepkwony'],
    description: 'Moral education through music.',
  },
  {
    name: 'Olala Boys Band',
    era: 'Growth',
    founded: '1989',
    leaders: ['Joseph Arap Tariraat'],
    members: ['Joseph Arap Tariraat'],
    description: 'Chepkulo Sounds. Kipsuter Sounds label.',
  },
  {
    name: 'Olesoi Band',
    era: 'Growth',
    founded: '',
    leaders: ['Paul Korgoren', 'John Korgoren'],
    members: ['Paul Korgoren', 'John Korgoren'],
    description: 'Enriched the Chepalungu music scene.',
  },
  {
    name: 'Kimaya Jazz Band',
    era: 'Growth',
    founded: '',
    leaders: ['Micah Maritim'],
    members: ['Micah Maritim'],
    description: 'Led by Micah Maritim.',
  },
  {
    name: 'Cheilonget Band',
    era: 'Pioneer',
    founded: '',
    leaders: ['Philip Sigei'],
    members: ['Philip Sigei'],
    description: 'Founded by Philip Sigei.',
  },
];

export const MusicalTimeline: MusicalMoment[] = [
  { year: '1920', event: 'Wilson Arap Laboso (Maruchela) born', significance: 'First Kalenjin recording artist' },
  { year: '1937', event: 'Kipchamba and Morris Mainek born', significance: 'The great generation begins' },
  { year: '1950', event: 'Chemirocha recorded by Hugh Tracey at Kapkatet', significance: 'First known Kipsigis recordings' },
  { year: '1952', event: 'Chebo Moire recorded by ILAM at Kapkatet', significance: 'Fighting song preserved' },
  { year: '1955', event: 'Maruchela records first Kalenjin secular music', significance: 'Guitar introduced' },
  { year: '1957', event: 'Koilonget Band founded', significance: 'The great ensemble begins' },
  { year: '1975', event: 'Francis Sonoiya dies tragically', significance: 'Brilliant guitarist lost' },
  { year: '1977', event: 'Joel Kileges records Tapeiga, Kipmatakur', significance: 'Jamasis Band peaks' },
  { year: '1989', event: 'Joseph Arap Tariraat debuts', significance: 'New generation' },
  { year: '1992', event: 'Korenyon Sukubo recorded', significance: 'Olala Boys signature' },
  { year: '2007', event: 'Kipchamba passes', significance: 'Father of Rhumba dies' },
  { year: '2015', event: 'Chemirocha repatriated to Kapkatet', significance: 'Songs return after 65 years' },
  { year: '2018', event: 'Pole Arap Sitonik passes', significance: 'History Kumbuka leader dies' },
  { year: '2024', event: 'Morris Arap Mainek passes', significance: 'End of an era' },
];

export const RecordLabels = [
  { name: 'Chandarana Records', location: 'Kericho', era: 'Pioneer' },
  { name: 'A.I. Records Kenya Limited', location: '', era: '1970s' },
  { name: 'Ramojei Photography Studio', location: 'Kericho Town', era: 'Pioneer' },
  { name: 'Kipsuter Sounds', location: '', era: 'Growth', notes: 'Run by Joseph Rono and Mwalimu Anthony Koech' },
  { name: 'ILAM', location: '', era: 'Archive', notes: 'Preserved earliest recordings' },
];

export const Genres = [
  { name: 'Kalenjin Rhumba', description: 'Traditional rhythms with East African rhumba basslines' },
  { name: 'Kalenjin Benga', description: 'Variant with Benga influences' },
  { name: 'Kalenjin Secular Music', description: 'Non-church music (post-1970s)' },
];

export default { Musicians, Bands, MusicalTimeline, RecordLabels, Genres };
