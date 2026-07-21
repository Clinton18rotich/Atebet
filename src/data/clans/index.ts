/**
 * Kipsigis Clan System (Ortinwek)
 * 
 * Based on Appendix B: The 39 Clans (preliminary list)
 * Full clan enumeration from:
 * "Kipsigis Heritage and the Origin of Clans" by Bill Ruto & Kipngetich
 * 
 * The Kipsigis have over 100 patrilineal clans (ortinwek).
 * Each clan has a totem (tiondo), usually an animal.
 * Marriage within the same clan is strictly forbidden (exogamy).
 * 
 * A woman carries three clan identities:
 * 1. Kisikwon — her father's clan (where she was born)
 * 2. Anue — her mother's clan
 * 3. Komutan — her husband's clan (after marriage)
 * 
 * @TODO: Integrate complete clan list from Ruto & Kipngetich
 */

export interface Clan {
  name: string;
  totem?: string;         // Tiondo — clan animal/symbol
  totemKipsigis?: string; // Totem name in Kipsigis
  region?: string;        // Geographic association
  subClans?: string[];    // Sub-clan divisions
  history?: string;       // Oral history
  chantName?: string;     // Konganyot — ceremonial chant name
}

/**
 * Initial 39 clans from the Language & Culture Archive
 * This list will be expanded with the complete enumeration
 */
export const ArchiveClans: Clan[] = [
  { name: 'Boek' },
  { name: 'Paguserek' },
  { name: 'Poswetek' },
  { name: 'Kap parangwek' },
  { name: 'Kap parsumek' },
  { name: 'Kap pargesaek' },
  { name: 'Kap echerek' },
  { name: 'Kap chemogondek' },
  { name: 'Kap chepororek' },
  { name: 'Kap kerichek' },
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
  { name: 'Kap kolwolek' },
  { name: 'Kap kaon' },
  { name: 'Kap kichwenek' },
  { name: "Kap mong'esoi" },
  { name: 'Kap masoswoek' },
  { name: 'Kap mwererek' },
  { name: 'Kap segit' },
  { name: 'Kap saosan' },
  { name: 'Kap sengerek' },
];

/**
 * Extended clan data source
 * 
 * Full list to be integrated from:
 * Ruto, B. & Kipngetich. "Kipsigis Heritage and the Origin of Clans"
 * 
 * Additional data fields for each clan:
 * - Full totem details (tiondo) with Kipsigis names
 * - Sub-clan divisions and their names
 * - Geographic origin regions
 * - Associated chants (konganyot)
 * - Ceremonial roles where applicable
 */
export const ClansSourceReference = {
  title: 'Kipsigis Heritage and the Origin of Clans',
  authors: ['Bill Ruto', 'Kipngetich'],
  status: 'pending_integration' as const,
  estimatedClanCount: '100+',
  fields: [
    'totem',
    'totemKipsigis',
    'region',
    'subClans',
    'history',
    'chantName',
  ],
};

/**
 * Main clans export — currently using archive list
 * Will be replaced with complete enumeration upon integration
 */
export const Clans: Clan[] = ArchiveClans;

export default Clans;
