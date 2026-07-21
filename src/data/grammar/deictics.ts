/**
 * Kipsigis Spatial & Temporal Deictic System
 * Three-tier system: proximal, medial, distal
 */

export interface SpatialDeictic {
  kipsigis: string;
  english: string;
  tier: 'proximal' | 'medial' | 'distal';
}

export const SpatialDeictics: SpatialDeictic[] = [
  { kipsigis: 'yu', english: 'Here (near me)', tier: 'proximal' },
  { kipsigis: 'chichi', english: 'This (near speaker)', tier: 'proximal' },
  { kipsigis: 'yon', english: 'There (near you)', tier: 'medial' },
  { kipsigis: 'chichon', english: 'That (visible, not far)', tier: 'medial' },
  { kipsigis: 'yuun', english: 'Way over there', tier: 'distal' },
  { kipsigis: 'chichiin', english: 'That (distant, far)', tier: 'distal' },
];

export interface TemporalDeictic {
  kipsigis: string;
  english: string;
  tier: 'proximal' | 'medial' | 'distal';
}

export const TemporalDeictics: TemporalDeictic[] = [
  { kipsigis: 'nigan', english: 'Just now / This one', tier: 'proximal' },
  { kipsigis: 'nigonye', english: 'Recently / Today', tier: 'medial' },
  { kipsigis: 'niginye', english: 'Long ago', tier: 'distal' },
];

export default { SpatialDeictics, TemporalDeictics };
