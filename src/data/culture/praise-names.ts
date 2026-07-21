export interface PraiseName {
  kipsigis: string;
  literal: string;
  trait: string;
  description: string;
}

export const WomensPraiseNames: PraiseName[] = [
  { kipsigis: 'Tap-Bel Gaa', literal: 'She who burns the homestead', trait: 'Jovial, spirited', description: 'A woman whose warmth and energy fill the home with life and laughter.' },
  { kipsigis: 'Tap-Sa Bei', literal: 'She who worships water', trait: 'Patient', description: 'A woman of great patience who endures like water that slowly shapes stone.' },
  { kipsigis: 'Tap-Nyol Ei', literal: 'The one who deserves an ox', trait: 'Blameless character', description: 'A woman of such impeccable conduct that she is worthy of the highest honour.' },
  { kipsigis: 'Tap-Nyo Bi', literal: 'She who comes into the cattle enclosure', trait: 'Acts swiftly and wisely', description: 'A woman who enters spaces of importance with confidence and sound judgment.' },
  { kipsigis: 'Tap-Syar Goi', literal: 'She who intrudes', trait: 'Determined go-getter', description: 'A woman who breaks through barriers and takes what she needs by determination.' },
  { kipsigis: 'Chenwach', literal: 'The one with short stature', trait: 'Minds her own business', description: 'A woman who keeps her head down and does not meddle in others affairs.' },
  { kipsigis: 'Tap-Tulmat', literal: 'She of the thundering fire', trait: 'Actions have great impact', description: 'A woman whose deeds resonate like thunder through the community.' },
  { kipsigis: 'Tap-Lelei', literal: 'She of the white ox', trait: 'Treats others fairly', description: 'A woman of justice and fairness who treats all with equity.' },
  { kipsigis: 'Tabutany', literal: 'She who shares a cow', trait: 'Generous', description: 'A woman of boundless generosity who shares her wealth freely with all.' },
  { kipsigis: 'Chep-But Or', literal: 'The one who breaks the entrance', trait: 'Courageous leader', description: 'A woman who smashes through barriers and leads others through.' },
  { kipsigis: 'Tap-Rany Tich', literal: 'She who musters cattle', trait: 'Prevents disasters', description: 'A woman who gathers resources and protects the community from harm.' },
  { kipsigis: 'Tap-Ngwan Ter', literal: 'The one of a bitter pot', trait: 'Hopeful despite hardships', description: 'A woman who endures bitterness with grace and maintains hope.' },
  { kipsigis: 'Tap-Wo-Go', literal: 'The one who goes indoors', trait: 'Goes the extra mile', description: 'A woman who does more than expected, always giving beyond what is asked.' },
  { kipsigis: 'Tap-Til Tich', literal: 'She who sequesters cattle', trait: 'Takes initiative', description: 'A woman who sees what needs to be done and acts without waiting.' },
  { kipsigis: 'Chep-Maluk', literal: 'The one with ever-flowing breast milk', trait: 'Creative and wise', description: 'A woman whose creativity and wisdom nourish the community endlessly.' },
  { kipsigis: 'Tap-Rop Kok', literal: 'She who skirts the men meeting place', trait: 'Challenges taboos', description: 'A brave woman who dares to go where women traditionally do not.' },
  { kipsigis: 'Che-Ru Kwem', literal: 'The one who sleeps in the middle', trait: 'Never takes sides', description: 'A woman of neutrality who maintains peace by refusing to take sides.' },
  { kipsigis: 'Tap-Kutuny', literal: 'She who always kneels', trait: 'Humble', description: 'A woman of profound humility who serves others without seeking recognition.' },
  { kipsigis: 'Tap-Korgen Ei', literal: 'She of the complacent ox', trait: 'Endures heartbreak silently', description: 'A woman who bears emotional pain with quiet dignity.' },
  { kipsigis: 'Tap-Tab Ter', literal: 'She of the firewood', trait: 'Gives without complaining', description: 'A woman who provides for others tirelessly without expectation of thanks.' },
];

export const PraiseNamePrefixes = [
  { prefix: 'Tap-', meaning: 'Female honorific (agentive "she who")', count: 14 },
  { prefix: 'Chep-', meaning: 'Female prefix (also used in birth names)', count: 3 },
  { prefix: 'Che-', meaning: 'Shortened female prefix', count: 2 },
  { prefix: 'Tab-', meaning: 'Variant of Tap-', count: 1 },
];

export default WomensPraiseNames;
