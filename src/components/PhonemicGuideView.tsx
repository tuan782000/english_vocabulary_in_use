import React, { useState } from 'react';
import { Volume2, Mic, Sparkles, BookOpen, Info } from 'lucide-react';
import { PHONEMIC_SYMBOLS } from '../data/phonemicSymbols';
import { PhonemicSymbol } from '../types';
import { speakWord } from '../utils/audio';

export const PhonemicGuideView: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'short_vowel' | 'long_vowel' | 'diphthong' | 'consonant'>('all');
  const [selectedSymbol, setSelectedSymbol] = useState<PhonemicSymbol>(PHONEMIC_SYMBOLS[0]);

  const filtered = PHONEMIC_SYMBOLS.filter(s => filterType === 'all' || s.type === filterType);

  return (
    <div className="space-y-6 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold">
            <Mic className="w-3.5 h-3.5 text-emerald-400" />
            Bảng Ký Hiệu Ngữ Âm Quốc Tế (IPA) - Trang 158 của sách
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Phát Âm Chuẩn Cambridge (Phonemic Symbols)
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Nắm vững 44 âm quốc tế của tiếng Anh: Nguyên âm ngắn, nguyên âm dài, nguyên âm đôi (diphthongs) và phụ âm kèm từ ví dụ minh họa và phát âm audio giọng Anh bản ngữ.
          </p>
        </div>

        {/* Syllable stress note */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 max-w-xs text-xs space-y-1.5 text-slate-200">
          <div className="font-extrabold text-amber-300 flex items-center gap-1">
            <Info className="w-4 h-4 shrink-0" />
            <span>Quy ước Trọng âm (Stress)</span>
          </div>
          <p className="text-[11px] leading-relaxed">
            Dấu phẩy trên <strong className="text-white">'</strong> chỉ âm tiết kế tiếp nhận trọng âm chính (ví dụ: <span className="font-mono text-emerald-300">'record</span>). Dấu phẩy dưới <strong className="text-white">,</strong> chỉ trọng âm phụ.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setFilterType('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
            filterType === 'all' ? 'bg-slate-900 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200'
          }`}
        >
          Tất cả 44 âm
        </button>
        <button
          onClick={() => setFilterType('short_vowel')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
            filterType === 'short_vowel' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200'
          }`}
        >
          Nguyên âm ngắn (7)
        </button>
        <button
          onClick={() => setFilterType('long_vowel')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
            filterType === 'long_vowel' ? 'bg-teal-600 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200'
          }`}
        >
          Nguyên âm dài (5)
        </button>
        <button
          onClick={() => setFilterType('diphthong')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
            filterType === 'diphthong' ? 'bg-indigo-600 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200'
          }`}
        >
          Nguyên âm đôi (8)
        </button>
        <button
          onClick={() => setFilterType('consonant')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
            filterType === 'consonant' ? 'bg-purple-600 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200'
          }`}
        >
          Phụ âm (24)
        </button>
      </div>

      {/* Interactive Grid & Selected Sound Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Phonemic Symbols Cards Grid */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {filtered.map((item) => {
            const isSelected = selectedSymbol.symbol === item.symbol;
            return (
              <div
                key={item.symbol}
                onClick={() => {
                  setSelectedSymbol(item);
                  speakWord(item.examples[0]);
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-50/40 ring-2 ring-emerald-500/20 shadow-md'
                    : 'border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-black text-slate-900">
                    /{item.symbol}/
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakWord(item.examples[0]);
                    }}
                    className="p-1 rounded-md text-slate-400 hover:text-emerald-600"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-2 text-xs text-slate-600 font-semibold truncate">
                  {item.examples.slice(0, 2).join(', ')}
                </div>

                <div className="text-[10px] text-slate-400 mt-1">
                  {item.typeNameVi}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Sound Detail Spotlight */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 border border-emerald-100">
              <span className="text-5xl font-mono font-black text-emerald-800">
                /{selectedSymbol.symbol}/
              </span>
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest mt-2">
                {selectedSymbol.typeNameVi}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Mẹo khẩu hình & cách phát âm:
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-150">
                {selectedSymbol.audioTip}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Từ vựng ví dụ từ giáo trình:
              </h4>
              <div className="space-y-1.5">
                {selectedSymbol.examples.map((word, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-150 transition-colors"
                  >
                    <span className="text-sm font-bold text-slate-800">{word}</span>
                    <button
                      onClick={() => speakWord(word)}
                      className="p-1 rounded-md text-emerald-600 hover:bg-emerald-100"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => speakWord(selectedSymbol.examples.join(', '))}
            className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
          >
            <Volume2 className="w-4 h-4" />
            <span>Phát âm tất cả từ ví dụ</span>
          </button>
        </div>
      </div>
    </div>
  );
};
