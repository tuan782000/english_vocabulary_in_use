import React, { useState, useMemo } from 'react';
import { 
  Bookmark, 
  Trash2, 
  Volume2, 
  Layers, 
  Search, 
  Sparkles, 
  BookOpen, 
  ExternalLink 
} from 'lucide-react';
import { ALL_UNITS } from '../data/units';
import { UnitData, UserProgress, VocabularyItem } from '../types';
import { speakWord } from '../utils/audio';

interface VocabularyNotebookViewProps {
  progress: UserProgress;
  onSelectUnit: (unit: UnitData) => void;
  onToggleBookmarkWord: (wordId: string) => void;
  onStartFlashcards: () => void;
}

export const VocabularyNotebookView: React.FC<VocabularyNotebookViewProps> = ({
  progress,
  onSelectUnit,
  onToggleBookmarkWord,
  onStartFlashcards
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Collect all bookmarked items
  const bookmarkedItems = useMemo(() => {
    const list: { item: VocabularyItem; unit: UnitData }[] = [];
    for (const unit of ALL_UNITS) {
      for (const sec of unit.sections) {
        for (const it of sec.items) {
          if (progress.bookmarkedWordIds.includes(it.id)) {
            list.push({ item: it, unit });
          }
        }
      }
    }
    if (!searchQuery.trim()) return list;

    const q = searchQuery.toLowerCase();
    return list.filter(
      x =>
        x.item.word.toLowerCase().includes(q) ||
        x.item.meaningVi.toLowerCase().includes(q) ||
        x.unit.title.toLowerCase().includes(q)
    );
  }, [progress.bookmarkedWordIds, searchQuery]);

  return (
    <div className="space-y-6 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-orange-900 text-white rounded-3xl p-6 sm:p-8 border border-amber-600 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-bold">
            <Bookmark className="w-3.5 h-3.5 text-amber-300" />
            Lời khuyên từ tác giả (Trang 172): "Keep a vocabulary notebook!"
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Sổ Tay Từ Vựng Cá Nhân (Vocabulary Notebook)
          </h1>
          <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
            Nghiên cứu của Đại học Cambridge chỉ ra rằng những học viên thường xuyên ghi chép và lưu trữ từ vựng vào sổ tay riêng đạt kết quả thi cử vượt trội hơn nhiều so với việc chỉ đọc lướt qua.
          </p>
        </div>

        {bookmarkedItems.length > 0 && (
          <button
            onClick={onStartFlashcards}
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-amber-50 text-amber-900 text-xs sm:text-sm font-extrabold shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Layers className="w-4 h-4 text-purple-600" />
            <span>Ôn {bookmarkedItems.length} từ bằng Flashcards</span>
          </button>
        )}
      </div>

      {/* Search and Counts */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
        <div className="text-xs font-bold text-slate-600 pl-2">
          Đã lưu <span className="text-amber-600 font-extrabold">{bookmarkedItems.length}</span> từ vựng cần ghi nhớ
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm trong sổ tay..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
          />
        </div>
      </div>

      {/* Bookmarked list */}
      {bookmarkedItems.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
          <Bookmark className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="font-extrabold text-slate-800 text-lg">Sổ tay của bạn hiện đang trống</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Khi học bất kỳ Unit nào trong 60 chương, bấm vào biểu tượng chiếc bookmark nhỏ cạnh từ vựng để lưu vào đây nhé!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookmarkedItems.map(({ item, unit }) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-black text-slate-900 text-base">{item.word}</span>
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                      {item.ipa}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase border border-slate-200 px-1 rounded">
                      {item.pos}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => speakWord(item.word)}
                      className="p-1.5 text-slate-400 hover:text-amber-600 rounded-lg hover:bg-amber-50"
                      title="Phát âm"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onToggleBookmarkWord(item.id)}
                      className="p-1.5 text-rose-500 hover:text-rose-700 rounded-lg hover:bg-rose-50"
                      title="Xóa khỏi sổ tay"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-sm font-bold text-slate-800">{item.meaningVi}</div>
                <div className="text-xs text-slate-500">{item.definitionEn}</div>

                <div className="pt-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-0.5">
                  <p className="font-medium text-slate-800">{item.example}</p>
                  {item.exampleVi && <p className="text-[11px] text-slate-500 italic">{item.exampleVi}</p>}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">
                  Từ Unit {unit.unitNumber}: {unit.title}
                </span>
                <button
                  onClick={() => onSelectUnit(unit)}
                  className="font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Mở chương này</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
