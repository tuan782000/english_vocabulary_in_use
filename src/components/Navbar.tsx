import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Flame, 
  Calendar, 
  Bookmark, 
  Volume2, 
  Sparkles,
  Layers,
  Award,
  Mic
} from 'lucide-react';
import { UserProgress } from '../types';

interface NavbarProps {
  activeTab: 'curriculum' | 'flashcards' | 'irregular' | 'phonemic' | 'notebook';
  setActiveTab: (tab: 'curriculum' | 'flashcards' | 'irregular' | 'phonemic' | 'notebook') => void;
  progress: UserProgress;
  onOpenSearch: () => void;
  onOpenPlan: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  progress,
  onOpenSearch,
  onOpenPlan
}) => {
  const completedCount = progress.completedUnitIds.length;
  const percentComplete = Math.round((completedCount / 60) * 100);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div 
            onClick={() => setActiveTab('curriculum')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 via-rose-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-lg tracking-tight">
                  English Vocabulary <span className="text-red-600">in Use</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 rounded-md">
                  Elementary
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Cambridge University Press • 60 Units
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'curriculum'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              60 Chương học
            </button>
            <button
              onClick={() => setActiveTab('flashcards')}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'flashcards'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Layers className="w-4 h-4 text-purple-600" />
              Flashcards
            </button>
            <button
              onClick={() => setActiveTab('irregular')}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'irregular'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              Động từ bất quy tắc
            </button>
            <button
              onClick={() => setActiveTab('phonemic')}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'phonemic'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Mic className="w-4 h-4 text-emerald-600" />
              Phát âm IPA
            </button>
            <button
              onClick={() => setActiveTab('notebook')}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'notebook'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Bookmark className="w-4 h-4 text-amber-500" />
              Sổ từ vựng
              {progress.bookmarkedWordIds.length > 0 && (
                <span className="ml-1 px-1.5 py-0.2 text-[11px] bg-amber-100 text-amber-800 rounded-full font-bold">
                  {progress.bookmarkedWordIds.length}
                </span>
              )}
            </button>
          </nav>

          {/* Right Action Tools: Search, Streak, Plan */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 rounded-xl text-sm font-medium transition-colors"
              title="Tìm kiếm từ vựng (Ctrl+K)"
            >
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline text-xs text-slate-400">Tìm 1,250+ từ...</span>
            </button>

            {/* Streak Badge */}
            <div 
              className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 border border-orange-200 text-orange-700 rounded-xl text-xs font-bold"
              title={`Bạn đã chăm chỉ học tập ${progress.streakDays} ngày liên tiếp!`}
            >
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
              <span>{progress.streakDays} ngày</span>
            </div>

            {/* Study Plan & Progress */}
            <button
              onClick={onOpenPlan}
              className="flex items-center gap-2 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Kế hoạch</span>
              <span className="bg-red-700/80 px-1.5 py-0.5 rounded-md text-[11px]">
                {completedCount}/60 ({percentComplete}%)
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Submenu Bar */}
        <div className="flex md:hidden items-center justify-between py-2 border-t border-slate-100 overflow-x-auto gap-2">
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg shrink-0 ${
              activeTab === 'curriculum' ? 'bg-red-600 text-white' : 'text-slate-600 bg-slate-100'
            }`}
          >
            60 Chương
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg shrink-0 ${
              activeTab === 'flashcards' ? 'bg-purple-600 text-white' : 'text-slate-600 bg-slate-100'
            }`}
          >
            Flashcards
          </button>
          <button
            onClick={() => setActiveTab('irregular')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg shrink-0 ${
              activeTab === 'irregular' ? 'bg-indigo-600 text-white' : 'text-slate-600 bg-slate-100'
            }`}
          >
            Động từ BQT
          </button>
          <button
            onClick={() => setActiveTab('phonemic')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg shrink-0 ${
              activeTab === 'phonemic' ? 'bg-emerald-600 text-white' : 'text-slate-600 bg-slate-100'
            }`}
          >
            Ngữ âm IPA
          </button>
          <button
            onClick={() => setActiveTab('notebook')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg shrink-0 ${
              activeTab === 'notebook' ? 'bg-amber-600 text-white' : 'text-slate-600 bg-slate-100'
            }`}
          >
            Sổ tay ({progress.bookmarkedWordIds.length})
          </button>
        </div>
      </div>
    </header>
  );
};
