/**
 * Kipsigis Pronoun System
 * Based on Volume One, Book 1, Chapter 2
 */

export interface Pronoun {
  english: string;
  standalone: string;
  subjectPrefix: string;
  objectSuffix?: string;
}

export const PersonalPronouns: Pronoun[] = [
  { english: 'I', standalone: 'ane', subjectPrefix: 'a-', objectSuffix: '-an / -on' },
  { english: 'You (sg.)', standalone: 'inye', subjectPrefix: 'i-', objectSuffix: '-un' },
  { english: 'He / She', standalone: 'ine', subjectPrefix: '', objectSuffix: '-in' },
  { english: 'We', standalone: 'echek / ki', subjectPrefix: 'ki-' },
  { english: 'You (pl.)', standalone: 'okwek', subjectPrefix: 'o-', objectSuffix: '-wok / -ok' },
  { english: 'They', standalone: 'ichek', subjectPrefix: '' },
];

export interface Possessive {
  english: string;
  kipsigis: string;
}

export const Possessives: Possessive[] = [
  { english: 'My', kipsigis: '-nyun / nenyun' },
  { english: 'Your (sg.)', kipsigis: '-det / neng\'ung\'' },
  { english: 'His / Her', kipsigis: 'nenyiin' },
  { english: 'Our', kipsigis: '-nyon / nenyoon' },
  { english: 'Your (pl.)', kipsigis: '-uk' },
  { english: 'Their', kipsigis: 'nenywaan' },
];

export default { PersonalPronouns, Possessives };
