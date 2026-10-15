import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Volume2, 
  Bookmark, 
  BookmarkCheck, 
  AlertTriangle, 
  Lightbulb, 
  CheckCircle2, 
  RotateCw, 
  Send, 
  Sparkles, 
  Layers, 
  BookOpen, 
  HelpCircle, 
  ChevronLeft, 
  ChevronRight,
  Check,
  X,
  Smile,
  Edit3,
  Award
} from 'lucide-react';
import { UnitData, UserProgress, VocabularyItem } from '../types';
import { speakWord } from '../utils/audio';

interface UnitDetailViewProps {
  unit: UnitData;
  progress: UserProgress;
  onBack: () => void;
  onToggleComplete: (unitId: number) => void;
  onToggleBookmarkWord: (wordId: string) => void;
  onUpdateScore: (unitId: number, score: number) => void;
  onNavigateUnit: (delta: number) => void;
}

export const UnitDetailView: React.FC<UnitDetailViewProps> = ({
  unit,
  progress,
  onBack,
  onToggleComplete,
  onToggleBookmarkWord,
  onUpdateScore,
  onNavigateUnit
}) => {
  const [activeTab, setActiveTab] = useState<'theory' | 'flashcards' | 'exercises' | 'ai'>('theory');
  const [speechRate, setSpeechRate] = useState<number>(0.9);

  // Flashcards state
  const allVocabItems = unit.sections.flatMap(s => s.items);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<string[]>([]);

  // Exercises state
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submittedExercises, setSubmittedExercises] = useState(false);

  // AI Tutor state
  const [aiInput, setAiInput] = useState('');
  const [aiWritingInput, setAiWritingInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiChat, setAiChat] = useState<{ sender: 'user' | 'ai'; text: string }[]>([
    {
      sender: 'ai',
      text: `Chào bạn! Tôi là Trợ lý AI đồng hành của bạn cho **Unit ${unit.unitNumber}: ${unit.title}** (${unit.titleVi}). Bạn có thể hỏi tôi bất kỳ thắc mắc nào về từ vựng, cách dùng câu, hoặc nhập đoạn văn viết bài tập Follow-up để tôi sửa giúp bạn nhé!`
    }
  ]);

  const isCompleted = progress.completedUnitIds.includes(unit.id);
  const currentVocab = allVocabItems[currentCardIndex] || allVocabItems[0];

  // Play audio
  const handlePlayAudio = (text: string) => {
    speakWord(text, speechRate);
  };

  // Submit exercises & calculate score
  const handleCheckExercises = () => {
    setSubmittedExercises(true);
    let correctCount = 0;
    unit.exercises.forEach(ex => {
      if (userAnswers[ex.id]?.trim().toLowerCase() === ex.correctAnswer.trim().toLowerCase()) {
        correctCount++;
      }
    });
    const calculatedScore = unit.exercises.length > 0 
      ? Math.round((correctCount / unit.exercises.length) * 100) 
      : 100;
    onUpdateScore(unit.id, calculatedScore);
  };

  // Send question to AI
  const handleSendAi = async (promptText?: string) => {
    const textToSend = promptText || aiInput;
    if (!textToSend.trim() || aiLoading) return;

    const newMessages = [...aiChat, { sender: 'user' as const, text: textToSend }];
    setAiChat(newMessages);
    if (!promptText) setAiInput('');
    setAiLoading(true);

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          contextUnit: `${unit.unitNumber} - ${unit.title} (${unit.titleVi})`,
          type: 'unit_help'
        })
      });

      const data = await res.json();
      setAiChat([
        ...newMessages,
        {
          sender: 'ai',
          text: data.reply || data.error || 'Đã có lỗi xảy ra khi kết nối. Vui lòng thử lại sau.'
        }
      ]);
    } catch (err: any) {
      setAiChat([
        ...newMessages,
        {
          sender: 'ai',
          text: 'Không thể kết nối đến máy chủ AI. Bạn hãy thử kiểm tra lại kết nối mạng.'
        }
      ]);
    } finally {
      setAiLoading(false);
    }
  };

  // Check writing task
  const handleCheckWriting = () => {
    if (!aiWritingInput.trim()) return;
    const prompt = `Đây là câu/đoạn văn của học viên viết cho bài tập Follow-up của Unit ${unit.unitNumber} (${unit.title}):\n"${aiWritingInput}"\n\nHãy nhận xét điểm tốt, sửa lỗi ngữ pháp/từ vựng (nếu có), và viết lại câu chuẩn tự nhiên kèm lời dịch tiếng Việt.`;
    handleSendAi(prompt);
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Top Navigation & Unit Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại danh sách 60 chương</span>
          </button>

          {/* Prev / Next Unit Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigateUnit(-1)}
              disabled={unit.unitNumber <= 1}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none text-slate-700"
              title="Chương trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-bold text-slate-500 px-1">
              Unit {unit.unitNumber} / 60
            </span>

            <button
              onClick={() => onNavigateUnit(1)}
              disabled={unit.unitNumber >= 60}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none text-slate-700"
              title="Chương sau"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Complete Toggle */}
            <button
              onClick={() => onToggleComplete(unit.id)}
              className={`ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'Đã hoàn thành' : 'Đánh dấu hoàn thành'}</span>
            </button>
          </div>
        </div>

        {/* Unit Title Banner */}
        <div className="pt-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-md bg-red-600 text-white font-extrabold text-xs">
              UNIT {unit.unitNumber}
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {unit.categoryName} • Trang {unit.pageNumber}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {unit.title}
          </h1>
          <p className="text-base font-semibold text-red-600 mt-0.5">
            {unit.titleVi}
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
            {unit.summary}
          </p>
        </div>

        {/* Tabs Bar */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 overflow-x-auto">
          <button
            onClick={() => setActiveTab('theory')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'theory'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Lý thuyết & Từ vựng ({allVocabItems.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'flashcards'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Flashcards ({allVocabItems.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('exercises')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'exercises'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Bài tập tương tác ({unit.exercises.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'ai'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Trợ lý AI & Luyện viết</span>
          </button>
        </div>
      </div>

      {/* TAB 1: THEORY & VOCABULARY */}
      {activeTab === 'theory' && (
        <div className="space-y-6">
          {/* Error Warnings Callout */}
          {unit.errorWarnings && unit.errorWarnings.length > 0 && (
            <div className="bg-rose-50/80 border-2 border-rose-300 rounded-3xl p-5 sm:p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-rose-800 font-extrabold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Error Warning (Cảnh báo bẫy ngữ pháp thường gặp)</span>
              </div>
              <div className="space-y-3">
                {unit.errorWarnings.map((err, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4 border border-rose-200/80 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 text-rose-700 font-semibold line-through bg-rose-50 px-2 py-1 rounded-md">
                        <X className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>Sai: {err.wrong}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-800 font-bold bg-emerald-50 px-2 py-1 rounded-md">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Đúng: {err.right}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed pt-1">
                      <span className="font-bold text-slate-900">Giải thích: </span>
                      {err.explanationVi} ({err.explanation})
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Study Tip Callout */}
          {unit.tips && unit.tips.length > 0 && (
            <div className="bg-amber-50/80 border-2 border-amber-300 rounded-3xl p-5 sm:p-6 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm sm:text-base">
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Tip: Lời khuyên học từ vựng hiệu quả từ tác giả</span>
              </div>
              {unit.tips.map((t, idx) => (
                <div key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-amber-200">
                  <p className="font-semibold text-amber-900 mb-1">{t.tipVi}</p>
                  <p className="text-slate-500 italic text-xs">{t.tip}</p>
                </div>
              ))}
            </div>
          )}

          {/* Sections & Vocabulary Cards */}
          <div className="space-y-6">
            {unit.sections.map((sec, secIdx) => (
              <div key={secIdx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      Phần {String.fromCharCode(65 + secIdx)}: {sec.title}
                    </h3>
                    <p className="text-xs font-semibold text-red-600">
                      {sec.titleVi}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-slate-400">
                    {sec.items.length} mục từ
                  </span>
                </div>

                {sec.description && (
                  <p className="text-xs text-slate-600 italic bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    {sec.description}
                  </p>
                )}

                {/* Vocabulary items list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {sec.items.map((item) => {
                    const isBookmarked = progress.bookmarkedWordIds.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        className="group flex flex-col justify-between p-4 rounded-2xl border border-slate-150 hover:border-red-300 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all"
                      >
                        <div className="space-y-1.5">
                          {/* Word + IPA + Audio + Bookmark */}
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-extrabold text-slate-900 text-base group-hover:text-red-600 transition-colors">
                                {item.word}
                              </span>
                              <span className="text-xs font-mono font-medium text-slate-500 bg-slate-200/60 px-1.5 py-0.5 rounded">
                                {item.ipa}
                              </span>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-200 px-1 py-0.2 rounded">
                                {item.pos}
                              </span>
                            </div>

                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                onClick={() => handlePlayAudio(item.word)}
                                className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
                                title="Nghe phát âm chuẩn Cambridge"
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => onToggleBookmarkWord(item.id)}
                                className={`p-1.5 rounded-lg transition-colors ${
                                  isBookmarked
                                    ? 'bg-amber-100 text-amber-700'
                                    : 'text-slate-400 hover:text-amber-600 hover:bg-amber-50'
                                }`}
                                title={isBookmarked ? 'Bỏ lưu' : 'Lưu vào sổ tay từ vựng'}
                              >
                                {isBookmarked ? (
                                  <BookmarkCheck className="w-4 h-4 fill-amber-500 text-amber-600" />
                                ) : (
                                  <Bookmark className="w-4 h-4" />
                                )}
                              </button>
                            </div>
                          </div>

                          {/* Meaning VI & Definition EN */}
                          <div className="text-sm font-bold text-slate-800">
                            {item.meaningVi}
                          </div>
                          <div className="text-xs text-slate-500">
                            {item.definitionEn}
                          </div>

                          {/* Example Sentence */}
                          <div className="mt-2 pt-2 border-t border-slate-100 space-y-0.5">
                            <div className="flex items-start gap-1.5 text-xs text-slate-700 font-medium">
                              <span className="text-red-500 font-bold shrink-0">Ví dụ:</span>
                              <span>{item.example}</span>
                              <button
                                onClick={() => handlePlayAudio(item.example)}
                                className="text-slate-400 hover:text-slate-700 shrink-0 ml-1"
                                title="Nghe cả câu ví dụ"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            {item.exampleVi && (
                              <p className="text-[11px] text-slate-500 italic pl-6">
                                {item.exampleVi}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: FLASHCARDS */}
      {activeTab === 'flashcards' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Thẻ {currentCardIndex + 1} / {allVocabItems.length}</span>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600">Đã thuộc: {masteredCards.length}</span>
              <button
                onClick={() => {
                  setCurrentCardIndex(0);
                  setIsFlipped(false);
                  setMasteredCards([]);
                }}
                className="text-slate-400 hover:text-slate-700 flex items-center gap-1"
              >
                <RotateCw className="w-3.5 h-3.5" /> Làm lại
              </button>
            </div>
          </div>

          {/* Flashcard 3D Card */}
          <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full h-80 cursor-pointer perspective-1000"
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
                  <span className="bg-slate-100 px-2 py-0.5 rounded-md font-semibold text-slate-600">{currentVocab.pos}</span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    {currentVocab.word}
                  </h2>
                  <p className="text-base font-mono text-purple-700 font-semibold bg-purple-50 inline-block px-3 py-1 rounded-full border border-purple-200">
                    {currentVocab.ipa}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayAudio(currentVocab.word);
                    }}
                    className="p-3 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-500/20"
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
                  <span className="uppercase tracking-widest">Mặt sau: Nghĩa & Ví dụ</span>
                  <span className="font-semibold">{currentVocab.word}</span>
                </div>

                <div className="space-y-3 max-w-md">
                  <h3 className="text-2xl font-black text-slate-900">
                    {currentVocab.meaningVi}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {currentVocab.definitionEn}
                  </p>
                  <div className="bg-white/80 p-3 rounded-xl border border-purple-200 text-left space-y-1">
                    <p className="text-xs font-semibold text-slate-800">{currentVocab.example}</p>
                    {currentVocab.exampleVi && (
                      <p className="text-[11px] text-slate-500 italic">{currentVocab.exampleVi}</p>
                    )}
                  </div>
                </div>

                <span className="text-xs text-slate-400">Bấm để lật lại</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={() => {
                setIsFlipped(false);
                setCurrentCardIndex(prev => Math.max(0, prev - 1));
              }}
              disabled={currentCardIndex === 0}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-100 disabled:opacity-40"
            >
              Thẻ trước
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setIsFlipped(false);
                  if (currentCardIndex < allVocabItems.length - 1) {
                    setCurrentCardIndex(prev => prev + 1);
                  }
                }}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
              >
                Cần ôn lại
              </button>

              <button
                onClick={() => {
                  if (!masteredCards.includes(currentVocab.id)) {
                    setMasteredCards([...masteredCards, currentVocab.id]);
                  }
                  setIsFlipped(false);
                  if (currentCardIndex < allVocabItems.length - 1) {
                    setCurrentCardIndex(prev => prev + 1);
                  }
                }}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20"
              >
                Đã thuộc (+1)
              </button>
            </div>

            <button
              onClick={() => {
                setIsFlipped(false);
                setCurrentCardIndex(prev => Math.min(allVocabItems.length - 1, prev + 1));
              }}
              disabled={currentCardIndex === allVocabItems.length - 1}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-100 disabled:opacity-40"
            >
              Thẻ sau
            </button>
          </div>
        </div>
      )}

      {/* TAB 3: EXERCISES */}
      {activeTab === 'exercises' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl font-black text-slate-900">
                Bài tập thực hành chính thức (Cambridge Practice)
              </h2>
              <p className="text-xs text-slate-500">
                Làm bài tập bám sát trang bài tập (Right-hand page) của giáo trình. Bấm "Nộp bài & Chấm điểm" để xem đáp án chi tiết.
              </p>
            </div>

            {submittedExercises && (
              <div className="px-3.5 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs font-extrabold flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Điểm: {progress.scores[unit.id] ?? 100}%</span>
              </div>
            )}
          </div>

          {/* Exercise items list */}
          <div className="space-y-6">
            {unit.exercises.map((ex, idx) => {
              const selectedAnswer = userAnswers[ex.id] || '';
              const isCorrect = selectedAnswer.trim().toLowerCase() === ex.correctAnswer.trim().toLowerCase();

              return (
                <div 
                  key={ex.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    submittedExercises
                      ? isCorrect 
                        ? 'border-emerald-300 bg-emerald-50/20'
                        : 'border-rose-300 bg-rose-50/20'
                      : 'border-slate-200 bg-slate-50/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-xs font-bold text-slate-500 uppercase">
                      Câu hỏi {idx + 1} ({ex.type})
                    </span>
                    {submittedExercises && (
                      <span className={`inline-flex items-center gap-1 text-xs font-extrabold px-2 py-0.5 rounded-md ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {isCorrect ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                        {isCorrect ? 'Chính xác' : 'Chưa đúng'}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-slate-600 mb-1">
                    {ex.instructionVi} ({ex.instruction})
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-4">
                    {ex.question}
                  </p>

                  {/* Options */}
                  {ex.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {ex.options.map((opt, optIdx) => {
                        const isChosen = selectedAnswer === opt;
                        const isRightOpt = opt.trim().toLowerCase() === ex.correctAnswer.trim().toLowerCase();

                        let optClass = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';
                        if (isChosen) {
                          optClass = 'bg-red-50 border-red-500 text-red-900 font-bold';
                        }
                        if (submittedExercises) {
                          if (isRightOpt) {
                            optClass = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';
                          } else if (isChosen && !isRightOpt) {
                            optClass = 'bg-rose-100 border-rose-500 text-rose-900 line-through';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => {
                              if (!submittedExercises) {
                                setUserAnswers({ ...userAnswers, [ex.id]: opt });
                              }
                            }}
                            className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer ${optClass}`}
                          >
                            <span className="font-bold mr-2">{String.fromCharCode(65 + optIdx)}.</span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Explanation after submit */}
                  {submittedExercises && (
                    <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs space-y-1">
                      <p className="font-bold text-slate-800">
                        Đáp án đúng: <span className="text-emerald-700">{ex.correctAnswer}</span>
                      </p>
                      <p className="text-slate-600">
                        {ex.explanationVi} ({ex.explanation})
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit / Reset Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setSubmittedExercises(false);
                setUserAnswers({});
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100"
            >
              Làm lại từ đầu
            </button>

            <button
              onClick={handleCheckExercises}
              className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-600/20 transition-all cursor-pointer"
            >
              Nộp bài & Chấm điểm
            </button>
          </div>
        </div>
      )}

      {/* TAB 4: AI TUTOR & WRITING PRACTICE */}
      {activeTab === 'ai' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Follow-up Writing Task */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-extrabold text-xs">
                <Edit3 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Follow-up Writing Task (Thực hành viết thực tế)</span>
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">
                Luyện viết câu về bản thân
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {unit.followUpPrompt?.taskVi || 'Viết 2-4 câu bằng tiếng Anh vận dụng các từ vựng và cấu trúc đã học trong chương này về cuộc sống của bạn.'}
              </p>

              <textarea
                value={aiWritingInput}
                onChange={(e) => setAiWritingInput(e.target.value)}
                placeholder="Ví dụ: I have one brother and two sisters. My father is an engineer..."
                rows={6}
                className="w-full p-3.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>

            <button
              onClick={handleCheckWriting}
              disabled={!aiWritingInput.trim() || aiLoading}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Gửi cho AI chấm & nhận xét bài viết</span>
            </button>
          </div>

          {/* Right: AI Interactive Dialogue & QA */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col h-[520px]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900">Trợ lý Giáo viên AI</h4>
                  <p className="text-[10px] text-slate-500">Giải đáp chuyên sâu giáo trình Cambridge</p>
                </div>
              </div>

              {/* Quick Prompts */}
              <div className="hidden sm:flex items-center gap-1.5">
                <button
                  onClick={() => handleSendAi(`Giải thích điểm ngữ pháp quan trọng nhất trong Unit ${unit.unitNumber}`)}
                  className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-[10px] font-bold"
                >
                  Điểm ngữ pháp
                </button>
                <button
                  onClick={() => handleSendAi(`Cho tôi 3 câu hội thoại mẫu thực tế dùng từ vựng Unit ${unit.unitNumber}`)}
                  className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-[10px] font-bold"
                >
                  3 Hội thoại mẫu
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs">
              {aiChat.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-red-600 text-white rounded-br-none'
                      : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200/60'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {aiLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 p-3 rounded-2xl rounded-bl-none text-slate-500 flex items-center gap-2 text-xs">
                    <Sparkles className="w-3.5 h-3.5 animate-spin text-emerald-600" />
                    <span>Giáo viên AI đang phân tích và chuẩn bị câu trả lời...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
              <input
                type="text"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendAi()}
                placeholder="Đặt câu hỏi về từ vựng, ngữ pháp, phát âm..."
                className="flex-1 px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
              <button
                onClick={() => handleSendAi()}
                disabled={!aiInput.trim() || aiLoading}
                className="p-2.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
