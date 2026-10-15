import { UserProgress } from '../types';

const STORAGE_KEY = 'cambridge_vocab_progress_v1';

export function getInitialProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return {
      completedUnitIds: [],
      scores: {},
      bookmarkedWordIds: [],
      masteredWordIds: [],
      streakDays: 1,
      lastStudyDate: new Date().toISOString().split('T')[0],
      dailyGoal: 1,
      customNotes: {}
    };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const today = new Date().toISOString().split('T')[0];

      // Update streak
      if (parsed.lastStudyDate) {
        const lastDate = new Date(parsed.lastStudyDate);
        const currDate = new Date(today);
        const diffDays = Math.round((currDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));

        if (diffDays === 1) {
          parsed.streakDays = (parsed.streakDays || 1) + 1;
          parsed.lastStudyDate = today;
        } else if (diffDays > 1) {
          parsed.streakDays = 1;
          parsed.lastStudyDate = today;
        }
      } else {
        parsed.lastStudyDate = today;
        parsed.streakDays = 1;
      }

      return {
        completedUnitIds: parsed.completedUnitIds || [],
        scores: parsed.scores || {},
        bookmarkedWordIds: parsed.bookmarkedWordIds || [],
        masteredWordIds: parsed.masteredWordIds || [],
        streakDays: parsed.streakDays || 1,
        lastStudyDate: parsed.lastStudyDate || today,
        dailyGoal: parsed.dailyGoal || 1,
        customNotes: parsed.customNotes || {}
      };
    }
  } catch (err) {
    console.error('Failed to parse progress from storage:', err);
  }

  return {
    completedUnitIds: [],
    scores: {},
    bookmarkedWordIds: [],
    masteredWordIds: [],
    streakDays: 1,
    lastStudyDate: new Date().toISOString().split('T')[0],
    dailyGoal: 1,
    customNotes: {}
  };
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save progress to storage:', err);
  }
}
