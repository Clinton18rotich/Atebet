/**
 * Kipsigis Tense System
 * Based on Volume One, Book 1, Chapter 3
 */

export interface Tense {
  name: string;
  kipsigis: string;
  marker: string;
  example: string;
  meaning: string;
}

export const Tenses: Tense[] = [
  {
    name: 'Present Continuous',
    kipsigis: 'Present (happening now)',
    marker: '-e / -isyei',
    example: 'a ame',
    meaning: 'I am eating',
  },
  {
    name: 'Near Past',
    kipsigis: 'Recent past (still relevant)',
    marker: 'ko',
    example: 'Ko am',
    meaning: 'I ate (recently)',
  },
  {
    name: 'Far Past',
    kipsigis: 'Long ago (historical)',
    marker: 'ki',
    example: 'Ki am',
    meaning: 'I ate (long ago)',
  },
  {
    name: 'Future',
    kipsigis: 'Will happen',
    marker: 'tuun / pesyo / kor',
    example: 'tun aame',
    meaning: 'I will eat',
  },
];

export interface NegationRule {
  type: string;
  marker: string;
  example: string;
  meaning: string;
}

export const Negation: NegationRule[] = [
  { type: 'General "not"', marker: 'ma', example: 'Ma ame kimyeet', meaning: 'I don\'t eat ugali' },
  { type: '"Have not yet"', marker: 'tom', example: 'Tom aamisye', meaning: 'I have not eaten' },
  { type: '"Stop!"', marker: 'matita-', example: 'Matitaiam!', meaning: 'Stop eating!' },
  { type: '"Don\'t!"', marker: 'mat', example: 'Mat opwan yu!', meaning: 'Don\'t come here!' },
];

export default { Tenses, Negation };
