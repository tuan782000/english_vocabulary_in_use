import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Volume2, 
  HelpCircle, 
  CheckCircle2, 
  RotateCw, 
  Sparkles,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { IRREGULAR_VERBS } from '../data/irregularVerbs';
import { IrregularVerb } from '../types';
import { speakWord } from '../utils/audio';

export const IrregularVerbsView: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<'all' | 'same' | 'two' | 'three'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [testMode, setTestMode] = useState(false);

  // Test Mode state
  const [quizQuestions, setQuizQuestions] = useState<{
    verb: IrregularVerb;
    missingForm: 'pastSimple' | 'pastParticiple';
    userAnswer: string;
    isCorrect?: boolean;
  }[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const filteredVerbs = useMemo(() => {
    return IRREGULAR_VERBS.filter(v => {
      if (activeGroup !== 'all' && v.group !== activeGroup) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          v.base.toLowerCase().includes(q) ||
          v.pastSimple.toLowerCase().includes(q) ||
          v.pastParticiple.toLowerCase().includes(q) ||
          v.meaningVi.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [activeGroup, searchQuery]);

  // Start 10-Question Irregular Verbs Test
  const handleStartTest = () => {
    const shuffled = [...IRREGULAR_VERBS].sort(() => 0.5 - Math.random()).slice(0, 10);
    const questions = shuffled.map(v => ({
      verb: v,
      missingForm: Math.random() > 0.5 ? ('pastSimple' as const) : ('pastParticiple' as const),
      userAnswer: ''
    }));
    setQuizQuestions(questions);
    setQuizSubmitted(false);
    setTestMode(true);
  };

  const handleCheckQuiz = () => {
    const updated = quizQuestions.map(q => {
      const correctVal = q.verb[q.missingForm];
      const isCorrect = q.userAnswer.trim().toLowerCase() === correctVal.trim().toLowerCase();
      return { ...q, isCorrect };
    });
    setQuizQuestions(updated);
    setQuizSubmitted(true);
  };

  const quizScore = quizQuestions.filter(q => q.isCorrect).length;

  return (
    <div className="space-y-6 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 border border-indigo-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Tra cứu & Luyện tập trang 170-171 của giáo trình Cambridge
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Bảng Động Từ Bất Quy Tắc (Irregular Verbs)
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Học động từ bất quy tắc chia theo 3 nhóm cấu trúc logic: Nhóm A (Cả 3 cột giống hệt nhau), Nhóm B (2 cột giống nhau), Nhóm C (Cả 3 cột khác biệt).
          </p>
        </div>

        <button
          onClick={handleStartTest}
          className="px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <HelpCircle className="w-4 h-4" />
          <span>Làm bài kiểm tra 10 câu</span>
        </button>
      </div>

      {/* QUIZ MODAL / VIEW */}
      {testMode && (
        <div className="bg-white rounded-3xl p-6 border-2 border-indigo-300 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                Q
              </span>
              <div>
                <h3 className="font-black text-slate-900 text-base">
                  Kiểm tra Động từ Bất quy tắc
                </h3>
                <p className="text-xs text-slate-500">
                  Điền dạng quá khứ (V2) hoặc quá khứ phân từ (V3) còn thiếu
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {quizSubmitted && (
                <span className="text-xs font-black px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  Điểm: {quizScore} / 10
                </span>
              )}
              <button
                onClick={() => setTestMode(false)}
                className="text-xs font-bold text-slate-400 hover:text-slate-700"
              >
                Đóng bài test
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quizQuestions.map((q, idx) => {
              const labelMissing = q.missingForm === 'pastSimple' ? 'Past Simple (V2)' : 'Past Participle (V3)';
              const correctAnswer = q.verb[q.missingForm];

              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border ${
                    quizSubmitted
                      ? q.isCorrect
                        ? 'border-emerald-300 bg-emerald-50/20'
                        : 'border-rose-300 bg-rose-50/20'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-500">Câu {idx + 1}: {q.verb.meaningVi}</span>
                    <button
                      onClick={() => speakWord(q.verb.base)}
                      className="text-slate-400 hover:text-indigo-600"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-sm font-black text-slate-900 mb-2">
                    Nguyên mẫu: <span className="text-indigo-600">{q.verb.base}</span> ({q.verb.ipa})
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Điền {labelMissing}:
                    </label>
                    <input
                      type="text"
                      disabled={quizSubmitted}
                      value={q.userAnswer}
                      onChange={(e) => {
                        const copy = [...quizQuestions];
                        copy[idx].userAnswer = e.target.value;
                        setQuizQuestions(copy);
                      }}
                      placeholder={`Ví dụ: ${q.missingForm === 'pastSimple' ? 'bought' : 'eaten'}`}
                      className="w-full px-3 py-2 text-xs font-semibold bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    />
                  </div>

                  {quizSubmitted && (
                    <div className="mt-2 text-xs font-semibold">
                      {q.isCorrect ? (
                        <p className="text-emerald-700">✓ Chính xác: {correctAnswer}</p>
                      ) : (
                        <p className="text-rose-700">✗ Sai. Đáp án đúng là: <strong>{correctAnswer}</strong></p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <button
              onClick={handleStartTest}
              className="text-xs font-bold text-slate-500 hover:text-slate-800"
            >
              Tạo đề ngẫu nhiên khác
            </button>
            <button
              onClick={handleCheckQuiz}
              disabled={quizSubmitted}
              className="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs"
            >
              Chấm điểm bài test
            </button>
          </div>
        </div>
      )}

      {/* Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
        {/* Groups */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setActiveGroup('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeGroup === 'all' ? 'bg-slate-900 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Tất cả ({IRREGULAR_VERBS.length})
          </button>
          <button
            onClick={() => setActiveGroup('same')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeGroup === 'same' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Nhóm A: 3 dạng y hệt nhau (cost, cut...)
          </button>
          <button
            onClick={() => setActiveGroup('two')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeGroup === 'two' ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Nhóm B: 2 dạng giống nhau (buy, make...)
          </button>
          <button
            onClick={() => setActiveGroup('three')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeGroup === 'three' ? 'bg-purple-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Nhóm C: 3 dạng khác biệt (eat, write...)
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm động từ (Anh / Việt)..."
            className="pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Irregular Verbs Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-extrabold uppercase text-[11px] border-b border-slate-200 tracking-wider">
                <th className="py-3.5 px-4">Nguyên mẫu (Base)</th>
                <th className="py-3.5 px-4">Quá khứ (Past Simple)</th>
                <th className="py-3.5 px-4">Phân từ (Past Participle)</th>
                <th className="py-3.5 px-4">Nghĩa tiếng Việt</th>
                <th className="py-3.5 px-4">Ví dụ trong sách</th>
                <th className="py-3.5 px-3 text-center">Phát âm</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredVerbs.map((v, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-black text-slate-900">
                    <div className="flex items-center gap-1.5">
                      <span>{v.base}</span>
                      <span className="text-[11px] font-mono text-slate-400 font-normal">
                        {v.ipa}
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-indigo-700">
                    {v.pastSimple}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-purple-700">
                    {v.pastParticiple}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-700">
                    {v.meaningVi}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500 italic max-w-xs">
                    {v.example}
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <button
                      onClick={() => speakWord(`${v.base}, ${v.pastSimple}, ${v.pastParticiple}`)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                      title="Nghe phát âm cả 3 cột"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
