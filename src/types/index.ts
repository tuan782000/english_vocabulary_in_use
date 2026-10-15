export interface VocabularyItem {
  id: string;
  word: string;
  ipa: string;
  pos: 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase' | 'expression' | 'preposition' | 'conjunction';
  meaningVi: string;
  definitionEn: string;
  example: string;
  exampleVi?: string;
  collocation?: string;
  section?: string;
  note?: string;
}

export interface UnitSection {
  title: string;
  titleVi: string;
  description?: string;
  items: VocabularyItem[];
  dialogues?: {
    speaker: string;
    text: string;
    translationVi?: string;
  }[];
  notes?: string[];
}

export interface ExerciseItem {
  id: string;
  type: 'fill_blank' | 'multiple_choice' | 'error_correction' | 'matching' | 'sentence_transform' | 'unscramble';
  instruction: string;
  instructionVi: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  explanationVi: string;
}

export interface UnitData {
  id: number;
  unitNumber: number;
  title: string;
  titleVi: string;
  category: UnitCategory;
  categoryName: string;
  pageNumber: number;
  summary: string;
  errorWarnings: {
    wrong: string;
    right: string;
    explanation: string;
    explanationVi: string;
  }[];
  tips: {
    tip: string;
    tipVi: string;
  }[];
  sections: UnitSection[];
  exercises: ExerciseItem[];
  followUpPrompt?: {
    task: string;
    taskVi: string;
    sampleAnswer?: string;
  };
}

export type UnitCategory =
  | 'people'
  | 'home'
  | 'work'
  | 'leisure'
  | 'world'
  | 'social'
  | 'verbs'
  | 'grammar';

export interface CategoryInfo {
  id: UnitCategory;
  title: string;
  titleVi: string;
  range: string;
  units: number[];
  color: string;
  bgGradient: string;
  iconName: string;
  description: string;
}

export interface IrregularVerb {
  base: string;
  pastSimple: string;
  pastParticiple: string;
  ipa: string;
  meaningVi: string;
  group: 'same' | 'two' | 'three';
  example: string;
}

export interface PhonemicSymbol {
  symbol: string;
  type: 'short_vowel' | 'long_vowel' | 'diphthong' | 'consonant';
  typeNameVi: string;
  examples: string[];
  audioTip: string;
}

export interface UserProgress {
  completedUnitIds: number[];
  scores: Record<number, number>; // unitId -> score (0 - 100)
  bookmarkedWordIds: string[];
  masteredWordIds: string[];
  streakDays: number;
  lastStudyDate: string;
  dailyGoal: number; // units per day
  customNotes: Record<number, string>; // unitId -> note
}
