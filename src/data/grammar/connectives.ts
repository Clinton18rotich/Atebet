/**
 * Kipsigis Connectives & Question Words
 * Based on Volume One, Book 1, Chapters 5 & 7
 */

export interface Connective {
  english: string;
  kipsigis: string;
  type: 'conjunction' | 'subordinator' | 'relative' | 'genitive';
}

export const Connectives: Connective[] = [
  { english: 'And', kipsigis: 'ak', type: 'conjunction' },
  { english: 'Because', kipsigis: 'ngamun', type: 'subordinator' },
  { english: 'When', kipsigis: 'yoon / yon', type: 'subordinator' },
  { english: 'So that', kipsigis: 'asi', type: 'subordinator' },
  { english: 'That / Which', kipsigis: 'ne / che / ko', type: 'relative' },
  { english: 'Of the', kipsigis: 'nebo', type: 'genitive' },
  { english: 'Of', kipsigis: '-ab', type: 'genitive' },
];

export interface QuestionWord {
  english: string;
  kipsigis: string;
}

export const QuestionWords: QuestionWord[] = [
  { english: 'Who?', kipsigis: "ng'o" },
  { english: 'What?', kipsigis: 'nee' },
  { english: 'Where?', kipsigis: 'anoo' },
  { english: 'When?', kipsigis: 'au' },
  { english: 'Why?', kipsigis: 'amunee' },
  { english: 'How?', kipsigis: 'kou nee' },
  { english: 'Which? (clan)', kipsigis: 'ora' },
  { english: 'Which? (identity)', kipsigis: 'tanya' },
  { english: 'What is happening?', kipsigis: 'ka lian?' },
];

export default { Connectives, QuestionWords };
