/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { CurriculumView } from './components/CurriculumView';
import { UnitDetailView } from './components/UnitDetailView';
import { FlashcardsMode } from './components/FlashcardsMode';
import { IrregularVerbsView } from './components/IrregularVerbsView';
import { PhonemicGuideView } from './components/PhonemicGuideView';
import { VocabularyNotebookView } from './components/VocabularyNotebookView';
import { StudyPlanModal } from './components/StudyPlanModal';
import { WordSearchModal } from './components/WordSearchModal';
import { getInitialProgress, saveProgress } from './utils/storage';
import { ALL_UNITS, getUnitById } from './data/units';
import { UnitData, UserProgress } from './types';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(getInitialProgress);
  const [activeTab, setActiveTab] = useState<'curriculum' | 'flashcards' | 'irregular' | 'phonemic' | 'notebook'>('curriculum');
  const [selectedUnit, setSelectedUnit] = useState<UnitData | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [flashcardUnitId, setFlashcardUnitId] = useState<number | undefined>(undefined);

  // Sync progress to localStorage on change
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  // Global keyboard shortcut: Ctrl+K / Cmd+K to open Search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handlers
  const handleToggleComplete = (unitId: number) => {
    setProgress((prev) => {
      const exists = prev.completedUnitIds.includes(unitId);
      const newCompleted = exists
        ? prev.completedUnitIds.filter(id => id !== unitId)
        : [...prev.completedUnitIds, unitId];
      return {
        ...prev,
        completedUnitIds: newCompleted,
      };
    });
  };

  const handleToggleBookmarkWord = (wordId: string) => {
    setProgress((prev) => {
      const exists = prev.bookmarkedWordIds.includes(wordId);
      const newBookmarks = exists
        ? prev.bookmarkedWordIds.filter(id => id !== wordId)
        : [...prev.bookmarkedWordIds, wordId];
      return {
        ...prev,
        bookmarkedWordIds: newBookmarks,
      };
    });
  };

  const handleUpdateScore = (unitId: number, score: number) => {
    setProgress((prev) => {
      const newScores = { ...prev.scores, [unitId]: score };
      const newCompleted = prev.completedUnitIds.includes(unitId)
        ? prev.completedUnitIds
        : score >= 70
        ? [...prev.completedUnitIds, unitId]
        : prev.completedUnitIds;

      return {
        ...prev,
        scores: newScores,
        completedUnitIds: newCompleted,
      };
    });
  };

  const handleUpdateDailyGoal = (goal: number) => {
    setProgress((prev) => ({
      ...prev,
      dailyGoal: goal,
    }));
  };

  const handleNavigateUnit = (delta: number) => {
    if (!selectedUnit) return;
    const nextNum = selectedUnit.unitNumber + delta;
    if (nextNum >= 1 && nextNum <= 60) {
      const nextUnit = ALL_UNITS.find(u => u.unitNumber === nextNum);
      if (nextUnit) {
        setSelectedUnit(nextUnit);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleStartFlashcards = (unit?: UnitData) => {
    if (unit) {
      setFlashcardUnitId(unit.id);
    } else {
      setFlashcardUnitId(undefined);
    }
    setSelectedUnit(null);
    setActiveTab('flashcards');
  };

  return (
    <div className="min-h-screen bg-slate-100/60 text-slate-800 flex flex-col font-sans">
      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setSelectedUnit(null);
          setActiveTab(tab);
        }}
        progress={progress}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPlan={() => setIsPlanOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {selectedUnit ? (
          <UnitDetailView
            unit={selectedUnit}
            progress={progress}
            onBack={() => setSelectedUnit(null)}
            onToggleComplete={handleToggleComplete}
            onToggleBookmarkWord={handleToggleBookmarkWord}
            onUpdateScore={handleUpdateScore}
            onNavigateUnit={handleNavigateUnit}
          />
        ) : (
          <>
            {activeTab === 'curriculum' && (
              <CurriculumView
                progress={progress}
                onSelectUnit={(unit) => setSelectedUnit(unit)}
                onStartFlashcards={handleStartFlashcards}
                onOpenPlan={() => setIsPlanOpen(true)}
              />
            )}

            {activeTab === 'flashcards' && (
              <FlashcardsMode
                progress={progress}
                onSelectUnit={(unit) => setSelectedUnit(unit)}
                initialUnitId={flashcardUnitId}
              />
            )}

            {activeTab === 'irregular' && <IrregularVerbsView />}

            {activeTab === 'phonemic' && <PhonemicGuideView />}

            {activeTab === 'notebook' && (
              <VocabularyNotebookView
                progress={progress}
                onSelectUnit={(unit) => setSelectedUnit(unit)}
                onToggleBookmarkWord={handleToggleBookmarkWord}
                onStartFlashcards={() => handleStartFlashcards()}
              />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <strong className="text-slate-800">English Vocabulary in Use - Elementary</strong> (Cambridge University Press). Biên soạn theo phương pháp tự học chuẩn Michael McCarthy & Felicity O'Dell.
          </div>
          <div className="flex items-center gap-4 font-semibold text-slate-600">
            <span>60 Units</span>
            <span>•</span>
            <span>1,250+ Words</span>
            <span>•</span>
            <span>Interactive Practice & AI Tutor</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <StudyPlanModal
        isOpen={isPlanOpen}
        onClose={() => setIsPlanOpen(false)}
        progress={progress}
        onUpdateDailyGoal={handleUpdateDailyGoal}
      />

      <WordSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectUnit={(unit) => setSelectedUnit(unit)}
      />
    </div>
  );
}
