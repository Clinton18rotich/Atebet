import BodyParts from './domains/body';
import PainExpressions from './domains/pain';
import FamilyTerms from './domains/family';
import HouseTerms from './domains/house';
import FurnitureTerms from './domains/furniture';
import FoodTerms from './domains/food';
import FireTerms from './domains/fire';
import LivestockTerms from './domains/livestock';
import AnimalTerms from './domains/animals';
import PlantTerms from './domains/plants';
import WeatherTerms from './domains/weather';
import ColorTerms from './domains/colors';
import VerbTerms from './domains/verbs';
import GreetingTerms from './domains/greetings';
import IllnessTerms from './domains/illness';
import CeremonyTerms from './domains/ceremonies';
import SpiritualTerms from './domains/spiritual';
import NumberTerms from './domains/numbers';
import CalendarTerms from './domains/calendar';
import GeographyTerms from './domains/geography';
import InsectTerms from './domains/insects';
import MusicTerms from './domains/music';
import AdjectiveTerms from './domains/adjectives';

export interface DictionaryEntry {
  kps: string;
  eng: string;
  pl?: string;
  lit?: string;
  res?: string;
}

export interface DictionaryDomain {
  name: string;
  entries: DictionaryEntry[];
}

export const Dictionary: DictionaryDomain[] = [
  { name: 'body', entries: BodyParts },
  { name: 'pain', entries: PainExpressions },
  { name: 'family', entries: FamilyTerms },
  { name: 'house', entries: HouseTerms },
  { name: 'furniture', entries: FurnitureTerms },
  { name: 'food', entries: FoodTerms },
  { name: 'fire', entries: FireTerms },
  { name: 'livestock', entries: LivestockTerms },
  { name: 'animals', entries: AnimalTerms },
  { name: 'plants', entries: PlantTerms },
  { name: 'weather', entries: WeatherTerms },
  { name: 'colors', entries: ColorTerms },
  { name: 'verbs', entries: VerbTerms },
  { name: 'greetings', entries: GreetingTerms },
  { name: 'illness', entries: IllnessTerms },
  { name: 'ceremonies', entries: CeremonyTerms },
  { name: 'spiritual', entries: SpiritualTerms },
  { name: 'numbers', entries: NumberTerms },
  { name: 'calendar', entries: [...CalendarTerms.MonthTerms, ...CalendarTerms.DayTerms] },
  { name: 'geography', entries: GeographyTerms },
  { name: 'insects', entries: InsectTerms },
  { name: 'music', entries: MusicTerms },
  { name: 'adjectives', entries: AdjectiveTerms },
];

export const getDomain = (name: string): DictionaryDomain | undefined =>
  Dictionary.find((d) => d.name === name);

export const searchDictionary = (query: string): DictionaryEntry[] => {
  const q = query.toLowerCase();
  return Dictionary.flatMap((d) =>
    d.entries.filter(
      (e) =>
        e.kps.toLowerCase().includes(q) ||
        e.eng.toLowerCase().includes(q)
    )
  );
};

export const totalEntries = Dictionary.reduce(
  (sum, d) => sum + d.entries.length,
  0
);

export default Dictionary;
