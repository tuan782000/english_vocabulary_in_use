import { UnitData } from '../../types';

export const PART6_SOCIAL_UNITS: UnitData[] = [
  {
    id: 32,
    unitNumber: 32,
    title: 'Crime',
    titleVi: 'Tội phạm & Pháp luật',
    category: 'social',
    categoryName: 'Social issues',
    pageNumber: 70,
    summary: 'Phân biệt các loại tội phạm (robbery, murder, burglary, mugging, shoplifting, car theft), người phạm tội, hành vi (steal vs rob) và pháp luật (court, arrest, guilty, innocent, prison).',
    errorWarnings: [
      {
        wrong: "Somebody robbed my bicycle.",
        right: "Somebody stole my bicycle.",
        explanation: "A thief STEALS things (steal/stole/stolen). A robber ROBS a person or a bank/place (rob/robbed).",
        explanationVi: "Trộm cắp đồ vật dùng 'STEAL' (Somebody stole my bicycle). Cướp người hoặc nhà băng dùng 'ROB' (The bank was robbed, I was robbed)."
      },
      {
        wrong: "I was stolen last night.",
        right: "I was robbed last night.",
        explanation: "Persons are robbed, objects are stolen.",
        explanationVi: "Người bị cướp nói 'I was robbed', KHÔNG nói 'I was stolen'."
      }
    ],
    tips: [
      {
        tip: "Notice the law words: arrested -> go to court -> guilty (có tội) or innocent (vô tội) -> pay a fine (nộp phạt) or go to prison (vào tù).",
        tipVi: "Quy trình tố tụng: arrested (bị bắt) -> go to court (hầu tòa) -> guilty (có tội) / innocent (vô tội) -> pay a fine (phạt tiền) hoặc go to prison (đi tù)."
      }
    ],
    sections: [
      {
        title: 'Crimes, Criminals & Verbs',
        titleVi: 'Tội ác, Tội phạm & Hành vi',
        items: [
          { id: 'u32-burglary', word: 'burglary -> burglar -> break into', ipa: '/ˈbɜːɡləri/ /ˈbɜːɡlər/', pos: 'noun', meaningVi: 'đột nhập trộm nhà -> kẻ trộm bẻ khóa -> đột nhập', definitionEn: 'crime of breaking into a house to steal', example: 'A burglar broke into their house and stole a laptop.', exampleVi: 'Kẻ trộm đã đột nhập vào nhà họ và lấy cắp một chiếc laptop.' },
          { id: 'u32-robbery', word: 'robbery -> robber -> rob', ipa: '/ˈrɒbəri/ /ˈrɒbər/', pos: 'noun', meaningVi: 'vụ cướp (ngân hàng) -> tên cướp -> cướp bóc', definitionEn: 'stealing from a person or bank using violence', example: 'The bank was robbed yesterday morning.', exampleVi: 'Ngân hàng đã bị cướp vào sáng hôm qua.' },
          { id: 'u32-shoplifting', word: 'shoplifting -> shoplifter', ipa: '/ˈʃɒpˌlɪftɪŋ/', pos: 'noun', meaningVi: 'hành vi ăn cắp vặt trong cửa hàng', definitionEn: 'stealing goods from a shop while pretending to shop', example: 'A student was arrested for shoplifting this morning.', exampleVi: 'Một sinh viên đã bị bắt giữ vì hành vi ăn cắp vặt trong cửa hàng sáng nay.' },
          { id: 'u32-murder', word: 'murder -> murderer', ipa: '/ˈmɜːdər/', pos: 'noun', meaningVi: 'vụ giết người -> kẻ sát nhân', definitionEn: 'crime of intentionally killing someone', example: 'The murderer was sent to prison for thirty years.', exampleVi: 'Kẻ giết người đã bị tống giam vào tù suốt ba mươi năm.' }
        ]
      },
      {
        title: 'The Law & Other Problems',
        titleVi: 'Pháp luật & Trật tự',
        items: [
          { id: 'u32-guilty-innocent', word: 'guilty / innocent', ipa: '/ˈɡɪlti/ /ˈɪnəsnt/', pos: 'adjective', meaningVi: 'có tội / vô tội', definitionEn: 'responsible for a crime / not responsible', example: 'If he is guilty he will pay a fine; if innocent he can go home.', exampleVi: 'Nếu có tội anh ta sẽ phải nộp phạt; nếu vô tội anh ta được về nhà.' },
          { id: 'u32-vandalism', word: 'vandalism / vandal', ipa: '/ˈvændəlɪzəm/', pos: 'noun', meaningVi: 'hành vi cố ý đập phá tài sản công cộng', definitionEn: 'deliberately damaging public property', example: 'Some vandals broke the windows in the telephone box.', exampleVi: 'Vài kẻ phá hoại đã đập vỡ kính bốt điện thoại.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-32-1',
        type: 'multiple_choice',
        instruction: 'Choose the correct verb: "Someone ______ my bicycle last night."',
        instructionVi: 'Chọn động từ chính xác: "Someone ______ my bicycle last night."',
        question: 'Someone ______ my bicycle last night.',
        options: ['stole', 'robbed', 'burgled', 'murdered'],
        correctAnswer: 'stole',
        explanation: 'We steal objects (bicycle), but rob people or banks.',
        explanationVi: 'Trộm đồ vật (xe đạp) dùng "stole".'
      }
    ]
  },
  {
    id: 33,
    unitNumber: 33,
    title: 'The media',
    titleVi: 'Truyền thông & Báo chí',
    category: 'social',
    categoryName: 'Social issues',
    pageNumber: 72,
    summary: 'Chương trình truyền hình (the news, soap operas, documentary, talk show, cartoons, reality TV), báo chí (newspapers, magazines, adverts) và nghề nghiệp truyền thông (journalist, reporter).',
    errorWarnings: [
      {
        wrong: "The news are on now.",
        right: "The news is on now.",
        explanation: "NEWS in English is always a singular uncountable noun with a singular verb: 'The news is at 6 o'clock'.",
        explanationVi: "'News' (tin tức) trong tiếng Anh luôn là danh từ không đếm được số ít, đi với 'is' chứ KHÔNG dùng 'are'."
      }
    ],
    tips: [
      {
        tip: "Soap operas (or soaps) are ongoing TV drama series about people's everyday lives and relationships.",
        tipVi: "'Soap opera' (phim truyền hình dài tập tâm lý xã hội) phát sóng định kỳ hàng tuần về cuộc sống thường nhật."
      }
    ],
    sections: [
      {
        title: 'TV, Radio & Press',
        titleVi: 'Truyền hình, Đài phát thanh & Báo chí',
        items: [
          { id: 'u33-news', word: 'the news', ipa: '/ðə njuːz/', pos: 'noun', meaningVi: 'bản tin thời sự (luôn số ít)', definitionEn: 'broadcast reporting current events', example: 'The news is on TV at 6 o’clock every evening.', exampleVi: 'Bản tin thời sự được phát trên TV lúc 6 giờ mỗi tối.' },
          { id: 'u33-documentary', word: 'documentary / talk show / soap opera', ipa: '/ˌdɒkjuˈmentri/ /ˈtɔːk ʃəʊ/', pos: 'noun', meaningVi: 'phim tài liệu / chương trình trò chuyện / phim bộ tâm lý', definitionEn: 'informative film about factual topics / talk programme', example: 'I watched a fascinating nature documentary about birds.', exampleVi: 'Tôi đã xem một bộ phim tài liệu thiên nhiên hấp dẫn về các loài chim.' },
          { id: 'u33-advert', word: 'adverts (advertisements)', ipa: '/ˈædvɜːts/', pos: 'noun', meaningVi: 'quảng cáo thương mại', definitionEn: 'short notices or clips trying to persuade people to buy things', example: 'In most magazines there are lots of adverts.', exampleVi: 'Trong hầu hết các tạp chí đều có rất nhiều mục quảng cáo.' },
          { id: 'u33-journalist', word: 'journalist / reporter', ipa: '/ˈdʒɜːnəlɪst/ /rɪˈpɔːtər/', pos: 'noun', meaningVi: 'nhà báo / phóng viên hiện trường', definitionEn: 'person who writes articles / gathers news stories', example: 'My sister is a journalist; she writes for a newspaper.', exampleVi: 'Chị tôi là một nhà báo; chị viết bài cho một tờ nhật báo.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-33-1',
        type: 'multiple_choice',
        instruction: 'Choose the correct form of the verb to be: "The news ______ on channel 3 at 9 o’clock."',
        instructionVi: 'Chọn động từ to be: "The news ______ on channel 3 at 9 o’clock."',
        question: 'The news ______ on channel 3 at 9 o’clock.',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 'is',
        explanation: 'News is grammatically singular and takes "is".',
        explanationVi: 'News luôn đi với động từ số ít "is".'
      }
    ]
  },
  {
    id: 34,
    unitNumber: 34,
    title: 'Problems at home and work',
    titleVi: 'Rắc rối tại nhà & Nơi làm việc',
    category: 'social',
    categoryName: 'Social issues',
    pageNumber: 74,
    summary: 'Các trục trặc ở nhà (not working, broken, untidy, cut finger, have a row with someone, apologise) và sự cố công sở (late for work, too much work, bad mood, computer crash, out of order).',
    errorWarnings: [
      {
        wrong: "The computer crashed. We must to repair.",
        right: "The computer crashed. We must repair it.",
        explanation: "Modal verb 'must' is followed directly by bare infinitive without 'to'.",
        explanationVi: "Sau modal verb 'must' dùng động từ nguyên mẫu không 'to': must repair it."
      }
    ],
    tips: [
      {
        tip: "Collocation: 'have a row' /raʊ/ means have an argument with someone. 'Put on a plaster' means stick an adhesive bandage on a cut.",
        tipVi: "'Have a row' /raʊ/ là cãi vã, to tiếng với ai. 'Put on a plaster' là dán băng cá nhân vào vết thương đứt tay."
      }
    ],
    sections: [
      {
        title: 'Home & Office Mishaps',
        titleVi: 'Sự cố gia đình & Công sở',
        items: [
          { id: 'u34-broken', word: 'broken / mend / repair', ipa: '/ˈbrəʊkən/ /mend/ /rɪˈpeər/', pos: 'adjective', meaningVi: 'bị hỏng, vỡ / vá, sửa lại', definitionEn: 'damaged or not functioning / fix something', example: 'The washing machine is broken. We need to mend it.', exampleVi: 'Máy giặt bị hỏng rồi. Chúng ta cần sửa nó.' },
          { id: 'u34-out-of-order', word: 'out of order / not working', ipa: '/aʊt əv ˈɔːdər/', pos: 'phrase', meaningVi: 'ngừng hoạt động, bị hỏng (máy móc)', definitionEn: 'machine that is not operating', example: "The coffee machine isn't working today.", exampleVi: "Hôm nay máy pha cà phê không hoạt động." },
          { id: 'u34-crash', word: 'computer crashed', ipa: '/kræʃt/', pos: 'verb', meaningVi: 'máy tính bị treo, bị sập nguồn đột ngột', definitionEn: 'computer operating system suddenly failed', example: 'Her computer crashed and she lost her document.', exampleVi: 'Máy tính của cô ấy bị sập nguồn và cô ấy mất tài liệu.' },
          { id: 'u34-have-a-row', word: 'have a row / apologise', ipa: '/hæv ə raʊ/ /əˈpɒlədʒaɪz/', pos: 'phrase', meaningVi: 'cãi vã / xin lỗi', definitionEn: 'have an angry disagreement / say sorry', example: "You've had a row with a friend. Will you apologise?", exampleVi: "Bạn vừa cãi cọ với bạn mình. Bạn sẽ xin lỗi chứ?" }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-34-1',
        type: 'multiple_choice',
        instruction: 'What should you put on if you cut your finger?',
        instructionVi: 'Bạn nên dán gì khi bị đứt tay?',
        question: "You've cut your finger. You should put on a ______.",
        options: ['plaster', 'remote control', 'saucepan', 'wardrobe'],
        correctAnswer: 'plaster',
        explanation: 'A plaster is an adhesive bandage for cuts.',
        explanationVi: 'Plaster là miếng băng dán cá nhân bảo vệ vết đứt tay.'
      }
    ]
  },
  {
    id: 35,
    unitNumber: 35,
    title: 'Global problems',
    titleVi: 'Các vấn nạn toàn cầu & Thiên tai',
    category: 'social',
    categoryName: 'Social issues',
    pageNumber: 76,
    summary: 'Thiên tai (hurricane, snowstorm, forest fire, earthquake, flood) và hiểm họa do con người (pollution, poor, hungry, homeless, unemployed, war, strike, traffic jams).',
    errorWarnings: [
      {
        wrong: "The traffic jams is terrible.",
        right: "The traffic jams are terrible. / The traffic is terrible.",
        explanation: "'Traffic' is uncountable singular (traffic is), while 'traffic jams' is plural (jams are).",
        explanationVi: "'Traffic' (giao thông) là danh từ số ít (The traffic is bad), còn 'traffic jams' (các vụ tắc đường) là số nhiều (traffic jams are terrible)."
      }
    ],
    tips: [
      {
        tip: "Notice the difference: 'poor' (không có tiền), 'hungry' (không có cái ăn), 'homeless' (không có chỗ ở), 'unemployed' (không có việc làm).",
        tipVi: "Bốn tính từ chỉ hoàn cảnh xã hội: poor (nghèo), hungry (đói khát), homeless (vô gia cư), unemployed (thất nghiệp)."
      }
    ],
    sections: [
      {
        title: 'Natural Disasters & Social Challenges',
        titleVi: 'Thiên tai & Vấn nạn nhân loại',
        items: [
          { id: 'u35-earthquake', word: 'earthquake / flood / hurricane', ipa: '/ˈɜːθkweɪk/ /flʌd/ /ˈhʌrɪkən/', pos: 'noun', meaningVi: 'trận động đất / lũ lụt / cuồng phong, bão lớn', definitionEn: 'severe natural disaster phenomena', example: 'San Francisco has had a lot of earthquakes when the earth moves.', exampleVi: 'San Francisco từng trải qua nhiều trận động đất làm rung chuyển mặt đất.' },
          { id: 'u35-pollution', word: 'pollution / polluted', ipa: '/pəˈluːʃn/ /pəˈluːtɪd/', pos: 'noun', meaningVi: 'sự ô nhiễm / bị ô nhiễm', definitionEn: 'damage caused to air, water or soil by waste', example: 'The river is polluted and air pollution is very bad today.', exampleVi: 'Dòng sông bị ô nhiễm và mức độ ô nhiễm không khí hôm nay rất cao.' },
          { id: 'u35-homeless', word: 'homeless / unemployed / strike', ipa: '/ˈhəʊmləs/ /ˌʌnɪmˈplɔɪd/ /straɪk/', pos: 'adjective', meaningVi: 'vô gia cư / thất nghiệp / cuộc đình công', definitionEn: 'having no home / no job / workers stopping work', example: 'The teachers are on strike today because they want better pay.', exampleVi: 'Hôm nay các giáo viên đình công vì họ muốn được tăng lương.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-35-1',
        type: 'multiple_choice',
        instruction: 'What is a disaster when the ground shakes violently?',
        instructionVi: 'Hiện tượng thiên tai khi mặt đất rung chuyển dữ dội là gì?',
        question: 'When the earth moves violently, it is an ______.',
        options: ['earthquake', 'hurricane', 'snowstorm', 'flood'],
        correctAnswer: 'earthquake',
        explanation: 'An earthquake is the shaking of the earth’s surface.',
        explanationVi: 'Động đất (earthquake) là hiện tượng mặt đất rung chuyển.'
      }
    ]
  }
];
