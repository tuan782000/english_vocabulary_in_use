import React, { useState } from 'react';
import { X, Calendar, Check, Flame, Sparkles, BookOpen, Clock, Target, Trophy } from 'lucide-react';
import { UserProgress } from '../types';

interface StudyPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onUpdateDailyGoal: (goal: number) => void;
}

export const StudyPlanModal: React.FC<StudyPlanModalProps> = ({
  isOpen,
  onClose,
  progress,
  onUpdateDailyGoal
}) => {
  if (!isOpen) return null;

  const completed = progress.completedUnitIds.length;
  const remaining = Math.max(0, 60 - completed);

  const plans = [
    {
      goal: 1,
      title: 'Kế hoạch 60 ngày (Chuẩn chỉ)',
      subtitle: '1 bài mỗi ngày (15 - 20 phút)',
      daysLeft: remaining,
      color: 'blue',
      desc: 'Phù hợp người đi làm bận rộn. Học chắc chắn từng bài, làm bài tập và nghe audio phát âm kỹ lưỡng.'
    },
    {
      goal: 2,
      title: 'Kế hoạch 30 ngày (Khuyên dùng)',
      subtitle: '2 bài mỗi ngày (30 - 45 phút)',
      daysLeft: Math.ceil(remaining / 2),
      color: 'red',
      isPopular: true,
      desc: 'Tốc độ lý tưởng để xây dựng phản xạ từ vựng tiếng Anh giao tiếp và chuẩn bị nền tảng ngữ pháp vững chắc.'
    },
    {
      goal: 4,
      title: 'Kế hoạch 15 ngày (Cấp tốc)',
      subtitle: '4 bài mỗi ngày (60 - 90 phút)',
      daysLeft: Math.ceil(remaining / 4),
      color: 'purple',
      desc: 'Khóa học cấp tốc dành cho người muốn bứt phá vốn từ vựng trong kỳ nghỉ hoặc trước kỳ thi đánh giá năng lực.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">
                Kế Hoạch & Lộ Trình Học 60 Chương
              </h2>
              <p className="text-xs text-slate-500">
                Thiết lập mục tiêu và theo dõi tiến độ hoàn thành giáo trình
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current status bar */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Đã hoàn thành</div>
              <div className="text-lg font-black text-slate-900">
                {completed} <span className="text-xs text-slate-400 font-normal">/ 60 units ({Math.round((completed / 60) * 100)}%)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-orange-600 font-extrabold text-sm bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-200">
            <Flame className="w-4 h-4 fill-orange-500" />
            <span>Chuỗi: {progress.streakDays} ngày</span>
          </div>
        </div>

        {/* Plan selection options */}
        <div className="space-y-3">
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
            Chọn mục tiêu số bài học mỗi ngày:
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {plans.map((p) => {
              const isSelected = progress.dailyGoal === p.goal;
              return (
                <div
                  key={p.goal}
                  onClick={() => onUpdateDailyGoal(p.goal)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start justify-between gap-4 ${
                    isSelected
                      ? 'border-red-600 bg-red-50/20 shadow-md ring-2 ring-red-600/10'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-slate-900 text-sm sm:text-base">
                        {p.title}
                      </span>
                      {p.isPopular && (
                        <span className="px-2 py-0.5 rounded-full bg-red-600 text-white font-extrabold text-[10px] uppercase">
                          Khuyên dùng
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-red-600">
                      {p.subtitle}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-xs text-slate-400">Còn khoảng</div>
                    <div className="text-lg font-black text-slate-900">
                      {p.daysLeft} <span className="text-xs font-semibold text-slate-500">ngày</span>
                    </div>
                    {isSelected && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 mt-1">
                        <Check className="w-3.5 h-3.5" /> Đang áp dụng
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Author Advice Box (from page 6 & 172) */}
        <div className="bg-slate-900 text-slate-200 rounded-2xl p-5 space-y-2 border border-slate-800 text-xs">
          <div className="flex items-center gap-2 text-amber-300 font-extrabold">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Phương pháp học từ vựng hiệu quả từ Michael McCarthy & Felicity O'Dell:</span>
          </div>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-[11px] leading-relaxed">
            <li><strong>Lặp lại ngắt quãng (Spaced repetition):</strong> Người học thường cần tiếp xúc 5 - 7 lần với một từ mới trước khi nhớ vĩnh viễn. Hãy ôn lại bài sau 1 tuần, 1 tháng và 3 tháng.</li>
            <li><strong>Học theo cụm từ (Collocations):</strong> Thay vì học từ đơn, hãy học cả cụm như <em>make a mistake</em>, <em>have a shower</em>, <em>do homework</em>.</li>
            <li><strong>Ghi chép và luyện viết:</strong> Tự đặt câu về chính cuộc sống của bạn ở phần bài tập Follow-up.</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm cursor-pointer transition-all"
        >
          Xác nhận & Bắt đầu học
        </button>
      </div>
    </div>
  );
};
