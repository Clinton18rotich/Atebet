/**
 * Atebet Color System
 * 
 * Colors are drawn from the Kipsigis language color terms (Chapter 22)
 * and cultural symbolism documented in the Archive.
 * 
 * Primary palette reflects the sacred directions and natural world:
 * - East (Kong'asis) = health, life, prosperity (Sopondo)
 * - Fire (Mat) = family continuity, the hearth
 * - Earth = the land (Emoni)
 */

export const Colors = {
  // Primary Cultural Palette
  primary: '#D4A574',        // Warm earth — the soil of the homeland
  primaryDark: '#8B6914',    // Deep earth
  primaryLight: '#F5DEB3',   // Wheat/grain — wimbi (millet)

  // Sacred & Symbolic
  east: '#FF6B35',           // Kong'asis — the sacred east, sunrise
  fire: '#E25822',           // Mat — the hearth fire, life continuity
  ash: '#8B8682',            // Oriat — ash, the fire gone cold
  grass: '#4A7C59',          // Chepkepit — grass, life, grazing
  milk: '#FFFDD0',           // Chego — milk, purity, sustenance
  
  // Kipsigis Named Colors (from Chapter 22)
  birir: '#C41E3A',          // Red
  nyalil: '#2D5A27',         // Green
  babilin: '#4169E1',        // Blue
  tolelyon: '#FFD700',       // Yellow
  lel: '#FFFFFF',            // White
  tui: '#1A1A1A',            // Black
  sitien: '#8B4513',         // Brown
  orian: '#808080',          // Grey
  turungiot: '#800080',      // Purple
  sitkam: '#FFC0CB',         // Pink
  muruon: '#800000',         // Maroon

  // UI Functional
  background: '#FFF8F0',     // Warm cream — like the interior of a house
  surface: '#FFFFFF',
  text: '#1A1A1A',
  textSecondary: '#5C5C5C',
  textMuted: '#8B8682',
  border: '#E0D5C7',
  error: '#C41E3A',
  success: '#2D5A27',
  warning: '#FFD700',

  // Streak Fire States
  fireBlazing: '#FF4500',    // Strong streak
  fireWarm: '#FF8C00',       // Moderate streak
  fireEmber: '#B22222',      // Fading streak
  fireCold: '#8B8682',       // Ash — no streak
};

/**
 * Noun Class Color Coding
 * 
 * Used throughout the app to visually indicate noun class agreement.
 * Mirrors the prefix system documented in Chapter 2 and Book 2.
 */
export const NounClassColors = {
  kiI: '#4A90D9',            // Ki-/I- class (e.g., Kiptenden/Tendenik)
  chaChe: '#7B68EE',         // Cha-/Che- class
  kaTa: '#50C878',           // Ka-/Ta- class
  ko: '#FF8C00',             // Ko- connective
  default: '#5C5C5C',
};

export default Colors;
