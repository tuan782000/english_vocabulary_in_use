import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  RotateCw, 
  Volume2, 
  Check, 
  X, 
  Shuffle, 
  Sparkles,
  BookOpen,
  Filter,
  BookmarkCheck
} from 'lucide-react';
import { ALL_UNITS } from '../data/units';
import { CATEGORIES } from '../data/categories';
import { UnitData, UserProgress, VocabularyItem } from '../types';
import { speakWord } from '../utils/audio';

interface FlashcardsModeProps {
  progress: UserProgress;
  onSelectUnit: (unit: UnitData) => void;
  initialUnitId?: number;
}

export const FlashcardsMode: React.FC<FlashcardsModeProps> = ({
  progress,
  onSelectUnit,
  initialUnitId
}) => {
  const [selectedUnitId, setSelectedUnitId] = useState<number | 'all' | 'bookmarks'>(
    initialUnitId || 'all'
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<string[]>([]);

  // Collect deck cards based on filters
  const deckCards = useMemo(() => {
    let items: { item: VocabularyItem; unit: UnitData }[] = [];

    if (selectedUnitId === 'bookmarks') {
      for (const unit of ALL_UNITS) {
        for (const sec of unit.sections) {
          for (const it of sec.items) {
            if (progress.bookmarkedWordIds.includes(it.id)) {
              items.push({ item: it, unit });
            }
          }
        }
      }
    } else if (typeof selectedUnitId === 'number') {
      const u = ALL_UNITS.find(unit => unit.id === selectedUnitId);
      if (u) {
        for (const sec of u.sections) {
          for (const it of sec.items) {
            items.push({ item: it, unit: u });
          }
        }
      }
    } else {
      for (const unit of ALL_UNITS) {
        if (selectedCategory === 'all' || unit.category === selectedCategory) {
          for (const sec of unit.sections) {
            for (const it of sec.items) {
              items.push({ item: it, unit });
            }
          }
        }
      }
    }

    return items;
  }, [selectedUnitId, selectedCategory, progress.bookmarkedWordIds]);

  const currentCard = deckCards[currentIndex] || deckCards[0];

  const handleShuffle = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < deckCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleMarkMastered = () => {
    if (currentCard && !masteredIds.includes(currentCard.item.id)) {
      setMasteredIds([...masteredIds, currentCard.item.id]);
    }
    handleNext();
  };

  return (
    <div className="space-y-6 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white rounded-3xl p-6 sm:p-8 border border-purple-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-purple-300 text-xs font-bold">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            Phương pháp Ghi nhớ Lặp lại Ngắt quãng (Spaced Repetition)
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Luyện Flashcards 60 Chương
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Lật thẻ phản xạ từ vựng, nghe phát âm và ghi nhớ sâu toàn bộ từ vựng theo giáo trình Cambridge.
          </p>
        </div>

        {/* Counter */}
        <div className="bg-white/10 p-4 rounded-2xl border border-white/15 text-center shrink-0">
          <div className="text-2xl font-black text-white">{deckCards.length}</div>
          <div className="text-xs text-purple-300">Tổng số thẻ trong bộ</div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {/* Deck select */}
          <select
            value={selectedUnitId}
            onChange={(e) => {
              const val = e.target.value;
              setSelectedUnitId(val === 'all' || val === 'bookmarks' ? val : Number(val));
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="px-3 py-2 text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20"
          >
            <option value="all">Tất cả từ vựng (Toàn bộ 60 Units)</option>
            <option value="bookmarks">⭐ Từ đã lưu trong Sổ tay ({progress.bookmarkedWordIds.length})</option>
            {ALL_UNITS.map(u => (
              <option key={u.id} value={u.id}>Unit {u.unitNumber}: {u.title} ({u.titleVi})</option>
            ))}
          </select>

          {/* Category filter if 'all' is chosen */}
          {selectedUnitId === 'all' && (
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className="px-3 py-2 text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            >
              <option value="all">Tất cả 8 nhóm chủ đề</option>
              {CATEGORIES.map(c => (
                <option key={c.id} value={c.id}>{c.title} ({c.titleVi})</option>
              ))}
            </select>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
          <span className="text-emerald-600">Đã thuộc: {masteredIds.length}</span>
          <button
            onClick={handleShuffle}
            className="flex items-center gap-1 text-slate-600 hover:text-slate-900 px-2.5 py-1.5 rounded-lg bg-slate-100"
          >
            <Shuffle className="w-3.5 h-3.5" /> Xáo thẻ
          </button>
        </div>
      </div>

      {/* Main Flashcard Box */}
      {deckCards.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
          <BookmarkCheck className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="font-extrabold text-slate-800 text-lg">Chưa có từ vựng nào trong danh sách này</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Hãy chọn một Unit cụ thể hoặc lưu thêm các từ khó vào Sổ tay từ vựng để ôn luyện.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400">
            <span>Thẻ {currentIndex + 1} / {deckCards.length}</span>
            <span>Unit {currentCard.unit.unitNumber}: {currentCard.unit.title}</span>
          </div>

          {/* 3D Card */}
          <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full h-88 cursor-pointer perspective-1000"
          >
            <div className={`relative w-full h-full rounded-3xl transition-transform duration-500 transform-style-3d shadow-xl border ${
              isFlipped 
                ? 'rotate-y-180 border-purple-300 bg-gradient-to-br from-purple-50 via-white to-indigo-50' 
                : 'border-slate-200 bg-gradient-to-br from-white to-slate-50'
            }`}>
              {/* Front of card */}
              <div className="absolute inset-0 backface-hidden p-8 flex flex-col justify-between items-center text-center">
                <div className="w-full flex justify-between items-center text-xs text-slate-400">
                  <span className="uppercase tracking-widest font-bold">Mặt trước: Từ vựng</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded-md font-semibold text-slate-600">{currentCard.item.pos}</span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    {currentCard.item.word}
                  </h2>
                  <p className="text-base font-mono text-purple-700 font-semibold bg-purple-50 inline-block px-3 py-1 rounded-full border border-purple-200">
                    {currentCard.item.ipa}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakWord(currentCard.item.word);
                    }}
                    className="p-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-500/20"
                    title="Nghe phát âm"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                  <span className="text-xs text-slate-400 font-medium">Bấm vào thẻ để lật xem nghĩa</span>
                </div>
              </div>

              {/* Back of card */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 p-8 flex flex-col justify-between items-center text-center">
                <div className="w-full flex justify-between items-center text-xs text-purple-600 font-bold">
                  <span className="uppercase tracking-widest">Mặt sau: Nghĩa & Câu ví dụ</span>
                  <span className="font-semibold">{currentCard.item.word}</span>
                </div>

                <div className="space-y-3 max-w-lg">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {currentCard.item.meaningVi}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {currentCard.item.definitionEn}
                  </p>
                  <div className="bg-white/90 p-3.5 rounded-xl border border-purple-200 text-left space-y-1">
                    <p className="text-xs font-semibold text-slate-800 flex items-center justify-between">
                      <span>{currentCard.item.example}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakWord(currentCard.item.example);
                        }}
                        className="text-purple-600 ml-2"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </p>
                    {currentCard.item.exampleVi && (
                      <p className="text-[11px] text-slate-500 italic">{currentCard.item.exampleVi}</p>
                    )}
                  </div>
                </div>

                <span className="text-xs text-slate-400">Bấm để lật lại mặt trước</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-100 disabled:opacity-40"
            >
              Thẻ trước
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
              >
                Cần ôn lại
              </button>

              <button
                onClick={handleMarkMastered}
                className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-md shadow-purple-600/20"
              >
                Đã thuộc (+1)
              </button>
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex === deckCards.length - 1}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-100 disabled:opacity-40"
            >
              Thẻ sau
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
