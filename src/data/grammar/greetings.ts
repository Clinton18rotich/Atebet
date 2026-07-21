/**
 * Kipsigis Greeting System
 * 
 * Based on Chapter 11: The Greeting System
 * 
 * Kipsigis greetings are temporally and socially calibrated.
 * The appropriate greeting depends on:
 * 1. Time of day
 * 2. Social status of the person being greeted
 * 3. Context (first meeting, returning, checking on family)
 */

export interface Greeting {
  kipsigis: string;
  english: string;
  context: 'general' | 'morning' | 'afternoon' | 'evening' | 'elder' | 'peer';
}

export interface GreetingExchange {
  greeting: Greeting;
  response: Greeting;
  notes?: string;
}

export const Greetings: GreetingExchange[] = [
  {
    greeting: {
      kipsigis: 'Chamgee',
      english: 'Hello (general greeting)',
      context: 'general',
    },
    response: {
      kipsigis: 'Mising',
      english: 'Hello (response)',
      context: 'general',
    },
  },
  {
    greeting: {
      kipsigis: 'Chamgee',
      english: 'Hello (to a group)',
      context: 'general',
    },
    response: {
      kipsigis: 'Mising ot okwek',
      english: 'Hello to you all',
      context: 'general',
    },
  },
  {
    greeting: {
      kipsigis: 'Iamunee?',
      english: 'How are you?',
      context: 'general',
    },
    response: {
      kipsigis: 'Achamegee',
      english: 'I am well / I like ourselves',
      context: 'general',
    },
  },
  {
    greeting: {
      kipsigis: 'Amu nee gaa?',
      english: 'How is home?',
      context: 'general',
    },
    response: {
      kipsigis: 'Chamegee',
      english: 'Home is well',
      context: 'general',
    },
  },
  {
    greeting: {
      kipsigis: 'Une petut?',
      english: 'How is your day?',
      context: 'general',
    },
    response: {
      kipsigis: 'Kararan',
      english: 'It is good',
      context: 'general',
    },
    notes: 'Alternative responses: "Maya" (fine) or "Ya" (yes/good)',
  },
  {
    greeting: {
      kipsigis: 'Subai',
      english: 'Hello (among boys/young men)',
      context: 'peer',
    },
    response: {
      kipsigis: 'Ebo',
      english: 'Hello (response among boys)',
      context: 'peer',
    },
  },
  {
    greeting: {
      kipsigis: 'Takwenya',
      english: 'Hello (among girls/women)',
      context: 'peer',
    },
    response: {
      kipsigis: 'Igo',
      english: 'Hello (response among women)',
      context: 'peer',
    },
  },
];

/**
 * Time-based greeting logic
 * 
 * In Kipsigis culture, greetings acknowledge the time of day.
 * This function returns the contextually appropriate greeting
 * based on the user's local time.
 */
export const getTimeBasedContext = (): 'morning' | 'afternoon' | 'evening' => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  return 'evening';
};

export default Greetings;
