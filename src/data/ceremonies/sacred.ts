/**
 * Sacred Directions & Worldview Constants
 * 
 * Based on Chapter 27: The Sacred Directions
 * and Chapter 25: The Kipsigis Worldview
 */

/**
 * Sacred Directions
 * East (Kong'asis) is the most sacred — the direction of God and the rising sun.
 * All prayers are offered facing east.
 * The mabwaita (altar) stands east of the house door.
 * A house door must never face east.
 */
export const SacredDirections = {
  east: {
    kipsigis: "Kong'asis",
    english: 'East',
    meaning: 'Direction of God (Asis), health, life, prosperity (Sopondo)',
    rules: [
      'All prayers offered facing east',
      'Mabwaita (altar) placed east of house door',
      'Animal slaughter faces east',
      'Dead bodies NOT carried east',
      'House door must never face east — if it does: "Kataach koris" (built wrongly)',
    ],
  },
  west: {
    kipsigis: 'Pochi',
    english: 'West',
    meaning: 'Direction of the setting sun, associated with completion',
  },
  north: {
    kipsigis: 'Muget',
    english: 'North',
    meaning: 'One of the cardinal directions',
  },
  south: {
    kipsigis: 'Kapen',
    english: 'South',
    meaning: 'One of the cardinal directions',
  },
};

/**
 * Core worldview concepts from Chapter 25
 */
export const Worldview = {
  selfName: {
    kipsigis: 'Piikab Kutit',
    english: 'People of the Mouth',
    meaning: 'How the Kipsigis call themselves',
  },
  culture: {
    kipsigis: 'Piteet',
    english: 'Culture / Custom / Nature / Law',
    meaning: 'The way of life — inseparable from natural law',
  },
  behaviour: {
    kipsigis: 'Atepto / Atebet',
    english: 'Behaviour / Conduct',
    meaning: 'The way one behaves — flows directly from Piteet',
  },
  unnatural: {
    kipsigis: 'Sogorge',
    english: 'Unnatural behaviour',
    meaning: 'Breaking custom — acting against nature itself, brings automatic punishment',
  },
};

/**
 * The House as Microcosm (Chapter 29)
 */
export const HouseMicrocosm = {
  toloita: {
    kipsigis: 'Toloita',
    english: 'Central post',
    meaning: 'Stability, ancestry, the spine of the home',
  },
  kimonjokut: {
    kipsigis: 'Kimonjokut',
    english: 'Roof peak',
    meaning: 'Active household life — cut down when husband dies',
  },
  koitabMaa: {
    kipsigis: 'Koitab maa',
    english: 'Fireplace',
    meaning: 'Family line, life, continuity',
  },
  mabwaita: {
    kipsigis: 'Mabwaita',
    english: 'Altar',
    meaning: 'Place of prayer, east of the door, made of sacred plants',
  },
  door: {
    kipsigis: 'Kurgat',
    english: 'Doorway',
    meaning: 'Boundary between human and divine — never faces east',
  },
};

export default SacredDirections;
