import { CategoryInfo } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'people',
    title: 'People',
    titleVi: 'Con người & Mối quan hệ',
    range: 'Units 1 - 9',
    units: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    color: 'emerald',
    bgGradient: 'from-emerald-500 to-teal-700',
    iconName: 'Users',
    description: 'Gia đình, vòng đời, cơ thể, trang phục, miêu tả con người, sức khỏe, cảm xúc và giao tiếp hàng ngày.'
  },
  {
    id: 'home',
    title: 'At home',
    titleVi: 'Trong gia đình & Nhà cửa',
    range: 'Units 10 - 13',
    units: [10, 11, 12, 13],
    color: 'amber',
    bgGradient: 'from-amber-500 to-orange-600',
    iconName: 'Home',
    description: 'Đồ ăn uống, nhà bếp, phòng ngủ, phòng tắm và phòng khách.'
  },
  {
    id: 'work',
    title: 'School and workplace',
    titleVi: 'Trường học & Nơi làm việc',
    range: 'Units 14 - 16',
    units: [14, 15, 16],
    color: 'blue',
    bgGradient: 'from-blue-500 to-indigo-700',
    iconName: 'Briefcase',
    description: 'Nghề nghiệp, môn học, đồ dùng học tập và các phương thức liên lạc viễn thông.'
  },
  {
    id: 'leisure',
    title: 'Leisure',
    titleVi: 'Giải trí & Đời sống',
    range: 'Units 17 - 24',
    units: [17, 18, 19, 20, 21, 22, 23, 24],
    color: 'purple',
    bgGradient: 'from-purple-500 to-violet-700',
    iconName: 'Gamepad2',
    description: 'Kỳ nghỉ du lịch, mua sắm, khách sạn, ăn ngoài nhà hàng, thể thao, điện ảnh, sở thích và âm nhạc.'
  },
  {
    id: 'world',
    title: 'The world',
    titleVi: 'Thế giới quanh ta',
    range: 'Units 25 - 31',
    units: [25, 26, 27, 28, 29, 30, 31],
    color: 'cyan',
    bgGradient: 'from-cyan-500 to-blue-600',
    iconName: 'Globe',
    description: 'Quốc gia & quốc tịch, thời tiết, phố phường, nông thôn, muông thú, du lịch di chuyển và văn hóa Anh.'
  },
  {
    id: 'social',
    title: 'Social issues',
    titleVi: 'Các vấn đề xã hội',
    range: 'Units 32 - 35',
    units: [32, 33, 34, 35],
    color: 'rose',
    bgGradient: 'from-rose-500 to-red-600',
    iconName: 'AlertTriangle',
    description: 'Tội phạm & pháp luật, truyền thông, rắc rối tại nhà và công sở, các vấn nạn toàn cầu.'
  },
  {
    id: 'verbs',
    title: 'Everyday verbs',
    titleVi: 'Động từ thông dụng',
    range: 'Units 36 - 47',
    units: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    color: 'indigo',
    bgGradient: 'from-indigo-500 to-blue-700',
    iconName: 'Zap',
    description: 'Các động từ cốt lõi cực kỳ phổ biến: Have, Go, Do, Make, Come, Take, Bring, Get, Cụm động từ (Phrasal Verbs), Hoạt động mỗi ngày, Nói và Di chuyển.'
  },
  {
    id: 'grammar',
    title: 'Words and grammar',
    titleVi: 'Cấu tạo từ & Ngữ pháp',
    range: 'Units 48 - 60',
    units: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    color: 'emerald',
    bgGradient: 'from-teal-600 to-emerald-800',
    iconName: 'BookOpen',
    description: 'Thuật ngữ ngôn ngữ, từ nối, thời gian, vị trí, danh từ không đếm được, tính từ, giới từ, tiền tố, hậu tố và các từ dễ gây nhầm lẫn.'
  }
];
