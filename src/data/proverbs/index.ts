/**
 * Complete Kipsigis Proverbs (Kalewenaik)
 * All 15 proverbs documented in the Language & Culture Archive
 */

export interface Proverb {
  kipsigis: string;
  english?: string;
  meaning?: string;
  theme: 'gratitude' | 'patience' | 'anger' | 'regret' | 'community' | 'wisdom' | 'character' | 'unknown';
}

export const Proverbs: Proverb[] = [
  // === TRANSLATED PROVERBS ===
  {
    kipsigis: 'Mokeyume sondii, c moen ketil',
    english: 'One does not shelter under a leafy canopy and then when it stops raining cut it down',
    meaning: 'On gratitude — do not forget those who helped you in times of trouble',
    theme: 'gratitude',
  },
  {
    kipsigis: 'Mokeloot ndara',
    english: 'One does not award to the if-one-had',
    meaning: 'On useless regret — do not dwell on what might have been',
    theme: 'regret',
  },
  {
    kipsigis: 'Sisinge sikwasta nerekek',
    english: 'Be silent until your anger has abated',
    meaning: 'On controlling anger — do not speak or act in the heat of emotion',
    theme: 'anger',
  },
  {
    kipsigis: 'Mokechot toogap pik',
    english: 'One does not steal cattle from people (Kipsigis)',
    meaning: 'On honesty within the tribe — theft from fellow Kipsigis is unnatural',
    theme: 'character',
  },
  {
    kipsigis: 'Kebaru toogap punik',
    english: 'One raids cattle from enemies',
    meaning: 'On legitimate warfare — taking from enemies is not theft but rightful action',
    theme: 'character',
  },
  {
    kipsigis: 'Yon rorye chito ko tagu kelek chepo kipkelmet',
    english: 'When a person laughs, the premolars and molars show',
    meaning: 'On laughter — true emotion reveals itself in the body',
    theme: 'wisdom',
  },
  {
    kipsigis: 'Yon nyime chito ko tagu kelek che po taa',
    english: 'When a person is smiling, the front teeth are visible',
    meaning: 'On smiling — restraint and control show only what is intended',
    theme: 'wisdom',
  },

  // === PROVERBS PENDING TRANSLATION ===
  {
    kipsigis: 'Makiabae tany ne tupcher',
    english: '',
    meaning: 'Translation pending',
    theme: 'unknown',
  },
  {
    kipsigis: 'Maichibe chi popaan nebo chi',
    english: '',
    meaning: 'Translation pending',
    theme: 'unknown',
  },
  {
    kipsigis: 'Kibendi mutyo machei kel.',
    english: '',
    meaning: 'Translation pending',
    theme: 'unknown',
  },
  {
    kipsigis: 'Makiamen ki lupchan chebo kenera',
    english: '',
    meaning: 'Translation pending',
    theme: 'unknown',
  },
  {
    kipsigis: 'Kiame met bo talamwa kegonyen tagatetab eii',
    english: '',
    meaning: 'Translation pending',
    theme: 'unknown',
  },
  {
    kipsigis: "Ing'ete kimereng' mindo",
    english: '',
    meaning: 'Translation pending',
    theme: 'unknown',
  },
  {
    kipsigis: 'Wekse urwon bo keet',
    english: '',
    meaning: 'Translation pending',
    theme: 'unknown',
  },
  {
    kipsigis: 'Tyeche chatit ele katyech kusto',
    english: '',
    meaning: 'Translation pending',
    theme: 'unknown',
  },
  {
    kipsigis: 'Mogombe euu chepyoso',
    english: '',
    meaning: 'Translation pending',
    theme: 'unknown',
  },
  {
    kipsigis: "Magichorchin ng'elyep koroti",
    english: '',
    meaning: 'Translation pending',
    theme: 'unknown',
  },
  {
    kipsigis: 'Inomdo kipkosiet keet mondoiywo',
    english: '',
    meaning: 'Translation pending',
    theme: 'unknown',
  },
  {
    kipsigis: 'Maburyoonu munyas cheragan',
    english: '',
    meaning: 'Translation pending',
    theme: 'unknown',
  },
  {
    kipsigis: 'Kergee kipset ak kiptep',
    english: '',
    meaning: 'Translation pending',
    theme: 'unknown',
  },
  {
    kipsigis: 'Kiteechin mogonchoi ngandan magose',
    english: '',
    meaning: 'Translation pending',
    theme: 'unknown',
  },
  {
    kipsigis: 'Makisosunen karna ma',
    english: '',
    meaning: 'Translation pending',
    theme: 'unknown',
  },
];

/**
 * Get the daily proverb — cycles through proverbs based on day of year
 */
export const getDailyProverb = (): Proverb => {
  const now = new Date();
  const dayOfYear = Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  return Proverbs[dayOfYear % Proverbs.length];
};

export default Proverbs;
