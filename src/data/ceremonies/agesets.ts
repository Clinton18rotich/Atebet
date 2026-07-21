/**
 * Kipsigis Age-Set System (Ipinda)
 * 
 * Based on Appendix A: The Complete Age-Set Chronology (1783–Present)
 * 
 * All Kipsigis belong to one of seven rotating age-sets.
 * An age-set is a group initiated together who move through life as a cohort.
 * The cycle rotates approximately every 15-21 years.
 */

export interface AgeSet {
  name: string;
  order: number;
  startYear?: number;
  endYear?: number;
  durationYears?: number;
  subSets?: string[];
}

export const AgeSetCycle: AgeSet[] = [
  {
    name: 'Nyongi',
    order: 1,
  },
  {
    name: 'Maina',
    order: 2,
  },
  {
    name: 'Chumo',
    order: 3,
  },
  {
    name: 'Sawe',
    order: 4,
  },
  {
    name: 'Korongoro',
    order: 5,
    subSets: ['Kiptoymen', 'Kiptormesendet', 'Kipelgot', 'Kimarere'],
  },
  {
    name: 'Kaplelach',
    order: 6,
    subSets: ['Kipalayeng', 'Kimutaywet', 'Masiba', 'Kebebuja'],
  },
  {
    name: 'Kimnyige',
    order: 7,
    subSets: ['Kipsilchoget', 'Tabariit', 'Kiptilosiek', 'Kiptilgarit'],
  },
];

/**
 * Historical chronology from 1783 to present
 */
export const AgeSetChronology: AgeSet[] = [
  { name: 'Nyongi', order: 1, startYear: 1783, endYear: 1801, durationYears: 19 },
  { name: 'Maina', order: 2, startYear: 1802, endYear: 1819, durationYears: 18 },
  { name: 'Chumo', order: 3, startYear: 1820, endYear: 1836, durationYears: 17 },
  { name: 'Sawe', order: 4, startYear: 1837, endYear: 1853, durationYears: 17 },
  { name: 'Korongoro', order: 5, startYear: 1854, endYear: 1870, durationYears: 17 },
  { name: 'Kaplelach', order: 6, startYear: 1871, endYear: 1887, durationYears: 17 },
  { name: 'Kimnyige', order: 7, startYear: 1888, endYear: 1904, durationYears: 17 },
  { name: 'Nyongi', order: 1, startYear: 1905, endYear: 1920, durationYears: 16 },
  { name: 'Maina', order: 2, startYear: 1921, endYear: 1936, durationYears: 16 },
  { name: 'Chumo', order: 3, startYear: 1937, endYear: 1951, durationYears: 15 },
  { name: 'Sawe', order: 4, startYear: 1952, endYear: 1966, durationYears: 15 },
  { name: 'Korongoro', order: 5, startYear: 1967, endYear: 1981, durationYears: 15 },
  { name: 'Kaplelach', order: 6, startYear: 1982, endYear: 1999, durationYears: 18 },
  { name: 'Kimnyige', order: 7, startYear: 2000, endYear: 2018, durationYears: 19 },
  { name: 'Nyongi', order: 1, startYear: 2019, durationYears: undefined },
];

export default AgeSetChronology;
