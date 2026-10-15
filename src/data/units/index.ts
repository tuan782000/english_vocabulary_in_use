import { UnitData } from '../../types';
import { PART1_PEOPLE_UNITS } from './part1_people';
import { PART2_HOME_UNITS } from './part2_home';
import { PART3_WORK_UNITS } from './part3_work';
import { PART4_LEISURE_UNITS } from './part4_leisure';
import { PART5_WORLD_UNITS } from './part5_world';
import { PART6_SOCIAL_UNITS } from './part6_social';
import { PART7_VERBS_UNITS } from './part7_verbs';
import { PART8_GRAMMAR_UNITS } from './part8_grammar';

export const ALL_UNITS: UnitData[] = [
  ...PART1_PEOPLE_UNITS,
  ...PART2_HOME_UNITS,
  ...PART3_WORK_UNITS,
  ...PART4_LEISURE_UNITS,
  ...PART5_WORLD_UNITS,
  ...PART6_SOCIAL_UNITS,
  ...PART7_VERBS_UNITS,
  ...PART8_GRAMMAR_UNITS
];

export function getUnitById(id: number): UnitData | undefined {
  return ALL_UNITS.find(u => u.id === id);
}

export function getUnitsByCategory(category: string): UnitData[] {
  return ALL_UNITS.filter(u => u.category === category);
}

export function searchAllVocabulary(query: string) {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  const results: {
    unit: UnitData;
    word: string;
    ipa: string;
    meaningVi: string;
    example: string;
  }[] = [];

  for (const unit of ALL_UNITS) {
    for (const section of unit.sections) {
      for (const item of section.items) {
        if (
          item.word.toLowerCase().includes(q) ||
          item.meaningVi.toLowerCase().includes(q) ||
          item.definitionEn.toLowerCase().includes(q)
        ) {
          results.push({
            unit,
            word: item.word,
            ipa: item.ipa,
            meaningVi: item.meaningVi,
            example: item.example
          });
        }
      }
    }
  }

  return results;
}
