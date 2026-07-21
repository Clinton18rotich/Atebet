export interface ClanDetail {
  name: string;
  totem?: string;
  totemKipsigis?: string;
  region?: string;
  chantName?: string;
  notes?: string;
}

export const ClanDetails: ClanDetail[] = [
  // Clans with known totems/details
  { name: 'Kap kerichek', totem: 'Medicines', totemKipsigis: 'Kerichek', notes: '"People of the medicines" — possibly associated with healing knowledge' },
  { name: 'Kap kolwolek', notes: 'Mentioned in self-introduction examples' },
  { name: 'Kap sengerek', notes: 'Mentioned in marriage clan examples' },
  { name: 'Kap mochaek', notes: 'Mentioned as maternal clan in self-introduction' },
  { name: 'Kap parangwek', totem: 'Elephant', totemKipsigis: 'Peliot', notes: 'The Elephant Clan. Sons praised as Porogeek. Clan of Joseph Arap Tariraat.' },
  { name: 'Kap soenik', totem: 'Buffalo', totemKipsigis: 'Soet', notes: 'Kapsamaek clan of Joel Kileges.' },
  { name: 'Kipsamaek', totem: 'Lion', region: 'Saoset, Bomet East', notes: 'Clan of Joel Kileges.' },
  { name: 'Kapsoenik', notes: 'Clan of Kipchamba Arap Tapotuk and Pole Arap Sitonik.' },
  { name: 'Motoborik', notes: 'Clan of Francis Sonoiya Arap Langat.' },
  { name: 'Kapkenyogorek', notes: 'Clan of Segeri Arap Talaam.' },
  { name: 'Kiplegenek', notes: 'Clan of Cheptorus Arap Chepkwony.' },
  { name: 'Kibaek', totemKipsigis: 'Tegeldo', notes: 'Clan of Wilson Arap Laboso (Maruchela).' },
  { name: 'Kipomuek', notes: 'Clan of Maruchela mother family (Joel Kimeto family).' },
  { name: 'Kipcheromeek', notes: 'Believed to have Oromo origins from present-day Eritrea. "Kip-chi-bo-Oromo" = "People of Oromo".' },
  { name: 'Kapsigilaek', notes: 'Mentioned in clan documentation.' },

  // Remaining clans from the 39
  { name: 'Boek' },
  { name: 'Paguserek' },
  { name: 'Poswetek' },
  { name: 'Kap parsumek' },
  { name: 'Kap pargesaek' },
  { name: 'Kap echerek' },
  { name: 'Kap chemogondek' },
  { name: 'Kap chepororek' },
  { name: 'Kap chepalungu' },
  { name: 'Kap cheptalamek' },
  { name: 'Kap chemisek' },
  { name: 'Kap chepures' },
  { name: 'Kap chepumbwek' },
  { name: 'Kap cheroigek' },
  { name: 'Kap cheurek' },
  { name: 'Kap iyorya' },
  { name: 'Kap kechwoek' },
  { name: 'Kap kelega' },
  { name: 'Kap kenyogorek' },
  { name: 'Kap kesogek' },
  { name: 'Kap kesundek' },
  { name: 'Kap moek' },
  { name: 'Kap mogorek' },
  { name: 'Kap mago' },
  { name: 'Kap komosik' },
  { name: 'Kap kugoek' },
  { name: 'Kap lachan' },
  { name: 'Kap mochilek' },
  { name: 'Kap kaon' },
  { name: 'Kap kichwenek' },
  { name: "Kap mong'esoi" },
  { name: 'Kap masoswoek' },
  { name: 'Kap mwererek' },
  { name: 'Kap segit' },
  { name: 'Kap saosan' },

  // Clans from Orchardson
  { name: 'Kapchamagondek', totem: 'Crested Crane', totemKipsigis: 'Konganyot', chantName: 'Kabarut', notes: 'Clan chant: "A po kobar tit..." — crane crest similar to slit cattle ears.' },
  { name: 'Kapsutayek', totem: 'Crested Crane', totemKipsigis: 'Konganyot', chantName: 'Kabarut' },
  { name: 'Kabarangwek', totem: 'Elephant', totemKipsigis: 'Peliot', chantName: 'Ongen/Kapongen', notes: 'Clan chant: "Kipo kapongen..." — water scooped from elephant footprints.' },
  { name: 'Kapkitolil', totem: 'Elephant', totemKipsigis: 'Peliot' },
  { name: 'Kapkoytim', totem: 'Elephant', totemKipsigis: 'Peliot' },
  { name: 'Kapasiso', notes: 'Clan that amalgamated with the Nata to form the Sotik section.' },
];

export const Totems = [
  { animal: 'Crested Crane', kipsigis: 'Konganyot', clans: ['Kapchamagondek', 'Kapsutayek'] },
  { animal: 'Elephant', kipsigis: 'Peliot / Ongenyot', clans: ['Kabarangwek', 'Kapkitolil', 'Kapkoytim', 'Kap parangwek'] },
  { animal: 'Lion', kipsigis: '', clans: ['Kipsamaek'] },
  { animal: 'Buffalo', kipsigis: 'Soet', clans: ['Kap soenik'] },
  { animal: 'Medicines', kipsigis: 'Kerichek', clans: ['Kap kerichek'] },
];

export default ClanDetails;
