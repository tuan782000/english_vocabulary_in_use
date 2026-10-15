import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Volume2, ArrowRight, BookOpen } from 'lucide-react';
import { searchAllVocabulary } from '../data/units';
import { UnitData } from '../types';
import { speakWord } from '../utils/audio';

interface WordSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectUnit: (unit: UnitData) => void;
}

export const WordSearchModal: React.FC<WordSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectUnit
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = searchAllVocabulary(query);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-20 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-slate-200 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tra cứu từ vựng tiếng Anh hoặc tiếng Việt (1,250+ từ)..."
            className="w-full text-sm font-semibold bg-transparent focus:outline-none text-slate-900 placeholder:text-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-bold text-slate-400 hover:text-slate-600 px-1"
            >
              Xóa
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {!query.trim() ? (
            <div className="p-8 text-center text-xs text-slate-400 space-y-2">
              <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
              <p>Nhập từ vựng cần tìm (ví dụ: <em>weather</em>, <em>trousers</em>, <em>make</em>, <em>ăn trưa</em>...)</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500">
              Không tìm thấy từ vựng nào khớp với "<strong>{query}</strong>". Thử tìm từ đồng nghĩa khác nhé!
            </div>
          ) : (
            results.slice(0, 30).map((res, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectUnit(res.unit);
                  onClose();
                }}
                className="group p-3.5 rounded-2xl border border-slate-150 hover:border-red-300 bg-white hover:bg-red-50/20 hover:shadow-xs transition-all cursor-pointer flex items-center justify-between gap-3"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-slate-900 text-sm group-hover:text-red-600 transition-colors">
                      {res.word}
                    </span>
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded">
                      {res.ipa}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-700">
                    {res.meaningVi}
                  </div>
                  <div className="text-[11px] text-slate-400 italic">
                    {res.example}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakWord(res.word);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50"
                    title="Nghe phát âm"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>

                  <span className="text-[11px] font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md group-hover:bg-red-100 group-hover:text-red-700 transition-colors">
                    Unit {res.unit.unitNumber}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-red-600 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>

        {results.length > 30 && (
          <div className="p-2.5 text-center text-[11px] text-slate-400 border-t border-slate-100 bg-slate-50 font-medium">
            Hiển thị 30 kết quả đầu tiên trong số {results.length} từ tìm thấy.
          </div>
        )}
      </div>
    </div>
  );
};
