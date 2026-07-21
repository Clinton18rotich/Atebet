/**
 * Kipsigis Proverbs (Kalewenaik)
 * 
 * Based on Chapter 36: Proverbs
 * 
 * Proverbs are the distilled wisdom of the culture.
 * They are called kalewenet (singular) and kalewenaik (plural).
 * 
 * Used for the daily Mabwaita screen and as learning content.
 */

export interface Proverb {
  kipsigis: string;
  english: string;
  meaning: string;
  theme: 'gratitude' | 'patience' | 'anger' | 'regret' | 'community' | 'wisdom' | 'character';
}

export const Proverbs: Proverb[] = [
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
];

/**
 * Get the daily proverb
 * Cycles through proverbs based on the day of the year
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
