import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  BookOpen, 
  PlayCircle, 
  Award, 
  Sparkles, 
  Filter,
  Search,
  ArrowRight,
  Flame,
  Check,
  ChevronRight,
  HelpCircle,
  Clock
} from 'lucide-react';
import { ALL_UNITS } from '../data/units';
import { CATEGORIES } from '../data/categories';
import { UnitCategory, UnitData, UserProgress } from '../types';

interface CurriculumViewProps {
  progress: UserProgress;
  onSelectUnit: (unit: UnitData) => void;
  onStartFlashcards: (unit?: UnitData) => void;
  onOpenPlan: () => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({
  progress,
  onSelectUnit,
  onStartFlashcards,
  onOpenPlan,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'uncompleted'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const completedCount = progress.completedUnitIds.length;
  const percentComplete = Math.round((completedCount / 60) * 100);

  // Filter units
  const filteredUnits = useMemo(() => {
    return ALL_UNITS.filter((unit) => {
      // Category filter
      if (selectedCategory !== 'all' && unit.category !== selectedCategory) {
        return false;
      }

      // Status filter
      const isDone = progress.completedUnitIds.includes(unit.id);
      if (statusFilter === 'completed' && !isDone) return false;
      if (statusFilter === 'uncompleted' && isDone) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = unit.title.toLowerCase().includes(q) || unit.titleVi.toLowerCase().includes(q);
        const matchNum = unit.unitNumber.toString() === q;
        const matchSummary = unit.summary.toLowerCase().includes(q);
        const matchWords = unit.sections.some(s => 
          s.items.some(i => i.word.toLowerCase().includes(q) || i.meaningVi.toLowerCase().includes(q))
        );
        if (!matchTitle && !matchNum && !matchSummary && !matchWords) return false;
      }

      return true;
    });
  }, [selectedCategory, statusFilter, searchQuery, progress.completedUnitIds]);

  // Find next unit to study
  const nextUnitToStudy = useMemo(() => {
    return ALL_UNITS.find(u => !progress.completedUnitIds.includes(u.id)) || ALL_UNITS[0];
  }, [progress.completedUnitIds]);

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Learning Progress Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-800">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Giáo trình Cambridge Vocabulary Elementary chính thức
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Chinh phục trọn vẹn <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400">60 Chương Từ Vựng</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Phương pháp Cambridge chuẩn quốc tế: Mỗi bài học gồm từ vựng trọng tâm, phát âm chuẩn IPA, cảnh báo bẫy ngữ pháp (Error Warnings), mẹo học (Tips) và bài tập tương tác có giải thích chi tiết.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onSelectUnit(nextUnitToStudy)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <PlayCircle className="w-5 h-5" />
                <span>Tiếp tục học: Unit {nextUnitToStudy.unitNumber} - {nextUnitToStudy.title}</span>
              </button>

              <button
                onClick={onOpenPlan}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 transition-all"
              >
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Xem lộ trình 60 ngày</span>
              </button>
            </div>
          </div>

          {/* Progress Card */}
          <div className="w-full lg:w-72 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Tiến độ khóa học</span>
              <span className="text-lg font-black text-emerald-400">{percentComplete}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-white/10">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(percentComplete, 2)}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-2 text-center pt-1 border-t border-white/10">
              <div className="p-2 rounded-lg bg-black/20">
                <div className="text-xl font-black text-white">{completedCount} <span className="text-xs text-slate-400 font-normal">/ 60</span></div>
                <div className="text-[11px] text-slate-400">Chương hoàn thành</div>
              </div>
              <div className="p-2 rounded-lg bg-black/20">
                <div className="text-xl font-black text-amber-400">{progress.streakDays} <span className="text-xs text-slate-400 font-normal">ngày</span></div>
                <div className="text-[11px] text-slate-400">Chuỗi ngày học liên tục</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Horizontal Tabs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <span>8 Nhóm chủ đề chính</span>
            <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">
              60 Units
            </span>
          </h2>
          <div className="text-xs text-slate-500">
            Hiển thị <span className="font-bold text-slate-900">{filteredUnits.length}</span> chương
          </div>
        </div>

        {/* Category Pill Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Tất cả (60)
          </button>
          {CATEGORIES.map((cat) => {
            const count = ALL_UNITS.filter(u => u.category === cat.id).length;
            const isCatActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  isCatActive
                    ? 'bg-red-600 text-white shadow-md shadow-red-500/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{cat.title}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                  isCatActive ? 'bg-red-700/80 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Status Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs">
          {/* Quick Search */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên chương, số chương hoặc từ vựng..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 hover:bg-slate-100/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 rounded-xl transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                Xóa
              </button>
            )}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                statusFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setStatusFilter('uncompleted')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                statusFilter === 'uncompleted' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Chưa học
            </button>
            <button
              onClick={() => setStatusFilter('completed')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                statusFilter === 'completed' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Đã xong ({completedCount})
            </button>
          </div>
        </div>
      </div>

      {/* Units Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredUnits.map((unit) => {
          const isCompleted = progress.completedUnitIds.includes(unit.id);
          const score = progress.scores[unit.id];
          const totalWords = unit.sections.reduce((acc, s) => acc + s.items.length, 0);

          return (
            <div
              key={unit.id}
              className={`group relative flex flex-col justify-between bg-white rounded-2xl p-5 border transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer ${
                isCompleted 
                  ? 'border-emerald-200 bg-emerald-50/10 hover:border-emerald-300' 
                  : 'border-slate-200 hover:border-red-300'
              }`}
              onClick={() => onSelectUnit(unit)}
            >
              <div>
                {/* Top Badge: Unit Number + Category + Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm shadow-xs group-hover:bg-red-600 transition-colors">
                      {unit.unitNumber}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 uppercase tracking-wide">
                      {unit.categoryName}
                    </span>
                  </div>

                  {isCompleted ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Đã hoàn thành {score !== undefined && `(${score}%)`}
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                      <Circle className="w-3.5 h-3.5" />
                      Chưa học
                    </span>
                  )}
                </div>

                {/* Titles */}
                <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-red-600 transition-colors">
                  {unit.title}
                </h3>
                <p className="text-sm font-semibold text-slate-600 mt-0.5">
                  {unit.titleVi}
                </p>

                {/* Summary */}
                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                  {unit.summary}
                </p>

                {/* Key words pill preview */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {unit.sections.flatMap(s => s.items).slice(0, 4).map((item) => (
                    <span
                      key={item.id}
                      className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-medium rounded-md"
                    >
                      {item.word}
                    </span>
                  ))}
                  {totalWords > 4 && (
                    <span className="px-1.5 py-0.5 bg-slate-50 text-slate-400 text-[11px] rounded-md font-medium">
                      +{totalWords - 4} từ
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Meta & Action */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                <div className="flex items-center gap-3">
                  <span>Trang {unit.pageNumber}</span>
                  <span>•</span>
                  <span>{unit.exercises.length} bài tập</span>
                </div>

                <span className="flex items-center gap-1 font-bold text-red-600 group-hover:translate-x-1 transition-transform">
                  Học ngay <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
