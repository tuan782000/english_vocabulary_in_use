import { UnitData } from '../../types';

export const PART4_LEISURE_UNITS: UnitData[] = [
  {
    id: 17,
    unitNumber: 17,
    title: 'Holidays',
    titleVi: 'Kỳ nghỉ & Du lịch',
    category: 'leisure',
    categoryName: 'Leisure',
    pageNumber: 40,
    summary: 'Các loại hình du lịch (package holiday, camping, walking holiday, coach tour), phương tiện di chuyển và vật dụng hành lý mang theo (passport, visa, phrasebook, currency, luggage).',
    errorWarnings: [
      {
        wrong: "I'm going on holiday with a lot of luggages.",
        right: "I'm going on holiday with a lot of luggage.",
        explanation: "Luggage is an uncountable noun. Do not say 'luggages'. You can say 'pieces of luggage' or 'suitcases'.",
        explanationVi: "Luggage (hành lý) là danh từ không đếm được. Không thêm s thành 'luggages'."
      }
    ],
    tips: [
      {
        tip: "Notice prepositions: ON holiday (I'm on holiday), BY car / plane / train / coach / ferry.",
        tipVi: "Ghi nhớ các giới từ: ON holiday (đi nghỉ mát), BY plane/train/car (đi bằng máy bay/tàu/ô tô)."
      }
    ],
    sections: [
      {
        title: 'Types of Holidays & Transport',
        titleVi: 'Hình thức du lịch & Phương tiện',
        items: [
          { id: 'u17-package-holiday', word: 'package holiday', ipa: '/ˈpækɪdʒ ˈhɒlədeɪ/', pos: 'noun', meaningVi: 'du lịch trọn gói (bao gồm vé bay + khách sạn)', definitionEn: 'a holiday where flights and hotel are included in the price', example: "We're going on a package holiday to Hong Kong.", exampleVi: "Chúng tôi chuẩn bị đi du lịch trọn gói đến Hồng Kông." },
          { id: 'u17-camping', word: 'camping / walking holiday', ipa: '/ˈkæmpɪŋ/', pos: 'noun', meaningVi: 'cắm trại (ngủ trong lều) / kỳ nghỉ đi bộ dã ngoại', definitionEn: 'holiday sleeping in a tent / walking in nature', example: 'I want to go camping this year and sleep in a tent.', exampleVi: 'Năm nay tôi muốn đi cắm trại và ngủ trong lều.' },
          { id: 'u17-coach-tour', word: 'coach tour', ipa: '/kəʊtʃ tʊər/', pos: 'noun', meaningVi: 'tour du lịch bằng xe buýt đường dài tiện nghi', definitionEn: 'travelling to places in a comfortable bus', example: 'A coach tour is an easy way to go on holiday.', exampleVi: 'Tour xe buýt là cách đi du lịch rất thoải mái và tiện lợi.' },
          { id: 'u17-ferry', word: 'by ferry / plane / train / coach', ipa: '/baɪ ˈferi/', pos: 'phrase', meaningVi: 'đi bằng phà / máy bay / tàu hỏa / xe khách', definitionEn: 'modes of transport for holidays', example: 'Are you flying or going by train?', exampleVi: 'Bạn đi máy bay hay đi bằng tàu hỏa?' }
        ]
      },
      {
        title: 'Luggage and Essentials',
        titleVi: 'Hành lý & Vật dụng cần thiết',
        items: [
          { id: 'u17-passport', word: 'passport / visa', ipa: '/ˈpɑːspɔːt/ /ˈviːzə/', pos: 'noun', meaningVi: 'hộ chiếu / thị thực xuất nhập cảnh', definitionEn: 'official travel documents', example: 'You need a passport and a visa to travel to some countries.', exampleVi: 'Bạn cần hộ chiếu và thị thực để đến một số quốc gia.' },
          { id: 'u17-currency', word: 'currency / traveller’s cheques', ipa: '/ˈkʌrənsi/', pos: 'noun', meaningVi: 'tiền tệ của quốc gia / séc du lịch', definitionEn: 'money of the country you are visiting', example: 'Exchange your currency before traveling abroad.', exampleVi: 'Hãy đổi tiền tệ trước khi ra nước ngoài.' },
          { id: 'u17-phrasebook', word: 'phrasebook', ipa: '/ˈfreɪzbʊk/', pos: 'noun', meaningVi: 'sách cẩm nang câu thoại giao tiếp du lịch', definitionEn: 'pocket book with useful foreign phrases', example: 'Take a phrasebook to speak the local language.', exampleVi: 'Mang theo cuốn sổ tay giao tiếp để nói tiếng bản địa.' },
          { id: 'u17-suitcase', word: 'suitcase / rucksack / luggage', ipa: '/ˈsuːtkeɪs/ /ˈrʌksæk/ /ˈlʌɡɪdʒ/', pos: 'noun', meaningVi: 'vali kéo / ba-lô du lịch / hành lý nói chung', definitionEn: 'bags and cases for holding your clothes', example: 'Pack all your warm clothes in a large suitcase.', exampleVi: 'Xếp tất cả quần áo ấm vào chiếc vali lớn.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-17-1',
        type: 'multiple_choice',
        instruction: 'What type of holiday involves sleeping in a tent?',
        instructionVi: 'Kỳ nghỉ nào gắn liền với việc ngủ trong lều?',
        question: 'Sleeping in a tent is part of a ______ holiday.',
        options: ['camping', 'coach tour', 'package holiday', 'cruise'],
        correctAnswer: 'camping',
        explanation: 'Camping means staying in a tent.',
        explanationVi: 'Camping là hoạt động cắm trại ngủ lều.'
      }
    ]
  },
  {
    id: 18,
    unitNumber: 18,
    title: 'Shops and shopping',
    titleVi: 'Cửa hàng & Mua sắm',
    category: 'leisure',
    categoryName: 'Leisure',
    pageNumber: 42,
    summary: 'Các loại cửa hàng chuyên biệt (butcher, baker, chemist, newsagent, department store), các tầng trong trung tâm thương mại, biển báo cửa hàng (Open, Closed, Push, Pull, Cash desk) và hội thoại mua sắm.',
    errorWarnings: [
      {
        wrong: "I'm going to the butcher shop.",
        right: "I'm going to the butcher's.",
        explanation: "In English, we usually add 's to the trade: the butcher's, the baker's, the chemist's, the newsagent's.",
        explanationVi: "Thường thêm 's vào danh từ chỉ người bán để chỉ cửa hàng: the butcher's (tiệm thịt), the chemist's (hiệu thuốc), the baker's (tiệm bánh)."
      }
    ],
    tips: [
      {
        tip: "In British department stores: Basement (tầng hầm), Ground floor (tầng trệt / tầng 1 ở VN), First floor (tầng 2 ở VN).",
        tipVi: "Theo quy ước của Anh: Ground floor là tầng trệt mặt đất, First floor là tầng 1 (tức tầng 2 ở Việt Nam)."
      }
    ],
    sections: [
      {
        title: 'Kinds of Shops',
        titleVi: 'Các loại cửa hiệu',
        items: [
          { id: 'u18-butcher', word: "butcher's", ipa: '/ˈbʊtʃəz/', pos: 'noun', meaningVi: 'cửa hàng bán thịt', definitionEn: 'shop where you buy meat and sausages', example: "Do you want anything from the butcher's?", exampleVi: "Bạn có muốn mua gì ở tiệm bán thịt không?" },
          { id: 'u18-baker', word: "baker's", ipa: '/ˈbeɪkəz/', pos: 'noun', meaningVi: 'tiệm bánh mì, bánh ngọt', definitionEn: 'shop where you buy fresh bread and cakes', example: "I bought fresh warm bread at the baker's.", exampleVi: "Tôi đã mua bánh mì nóng giòn tại tiệm bánh." },
          { id: 'u18-chemist', word: "chemist's", ipa: '/ˈkemɪsts/', pos: 'noun', meaningVi: 'hiệu thuốc tây', definitionEn: 'shop selling medicines and toiletries', example: "Go to the chemist's to get some aspirin.", exampleVi: "Hãy đến hiệu thuốc để mua một ít thuốc giảm đau aspirin." },
          { id: 'u18-newsagent', word: "newsagent's", ipa: '/ˈnjuːzˌeɪdʒənts/', pos: 'noun', meaningVi: 'sạp báo, quầy bán báo và tạp chí', definitionEn: 'shop that sells newspapers, magazines, sweets', example: "I'm going to the newsagent's to get a paper.", exampleVi: "Tôi ra sạp báo để mua tờ báo đây." },
          { id: 'u18-dept-store', word: 'department store', ipa: '/dɪˈpɑːtmənt stɔːr/', pos: 'noun', meaningVi: 'trung tâm bách hóa tổng hợp nhiều tầng', definitionEn: 'large shop selling clothes, beauty products, toys, furniture', example: 'A department store has everything on different floors.', exampleVi: 'Trung tâm bách hóa có bán đủ thứ ở các tầng khác nhau.' }
        ]
      },
      {
        title: 'Signs & Shopping Expressions',
        titleVi: 'Biển báo & Giao tiếp mua hàng',
        items: [
          { id: 'u18-cash-desk', word: 'Cash desk (Please pay here)', ipa: '/kæʃ desk/', pos: 'phrase', meaningVi: 'Quầy thu ngân (Vui lòng thanh toán tại đây)', definitionEn: 'place in shop where you pay money', example: 'Please take your items to the cash desk.', exampleVi: 'Vui lòng mang hàng ra quầy thu ngân.' },
          { id: 'u18-push-pull', word: 'Push / Pull', ipa: '/pʊʃ/ /pʊl/', pos: 'verb', meaningVi: 'Đẩy vào / Kéo ra (trên cửa kính)', definitionEn: 'door signs indicating direction of door opening', example: 'The sign on the door says PUSH.', exampleVi: 'Biển trên cửa kính ghi là ĐẨY VÀO.' },
          { id: 'u18-try-on', word: 'Can I try this on?', ipa: '/traɪ ɒn/', pos: 'phrase', meaningVi: 'Tôi có thể thử món đồ này được không?', definitionEn: 'asking to put on a piece of clothing to check size', example: 'Can I try this shirt on? Have you got a smaller size?', exampleVi: 'Tôi thử chiếc áo này được không? Cửa hàng có cỡ nhỏ hơn không?' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-18-1',
        type: 'multiple_choice',
        instruction: 'Where do you go to buy aspirin and medicines?',
        instructionVi: 'Bạn đến đâu để mua thuốc giảm đau và dược phẩm?',
        question: 'Where do you buy aspirin?',
        options: ["the chemist's", "the butcher's", "the baker's", "the newsagent's"],
        correctAnswer: "the chemist's",
        explanation: "A chemist's (pharmacy) sells medicines.",
        explanationVi: "Tiệm thuốc (chemist's) chuyên bán dược phẩm."
      }
    ]
  },
  {
    id: 19,
    unitNumber: 19,
    title: 'In a hotel',
    titleVi: 'Trong khách sạn',
    category: 'leisure',
    categoryName: 'Leisure',
    pageNumber: 44,
    summary: 'Từ vựng đặt phòng khách sạn (single room, double room, reservation), tiện ích (reception, key, lift, mini-bar, hairdryer), dịch vụ (room service, wake-up call, check out).',
    errorWarnings: [
      {
        wrong: "I want a room with view of sea.",
        right: "I'd like a room with a view of the sea.",
        explanation: "Use 'a view of the sea / a view of the garden'.",
        explanationVi: "Cụm từ chuẩn: a room with a view of the sea (phòng hướng nhìn ra biển)."
      }
    ],
    tips: [
      {
        tip: "Polite hotel requests: 'Could I have the bill, please?', 'Can I have a wake-up call at 6.30, please?'.",
        tipVi: "Mẫu câu yêu cầu lịch sự: 'Could I have the bill, please?' (Cho tôi xin hóa đơn tính tiền)."
      }
    ],
    sections: [
      {
        title: 'Rooms & Hotel Amenities',
        titleVi: 'Phòng ốc & Tiện nghi khách sạn',
        items: [
          { id: 'u19-single-room', word: 'single room / double room', ipa: '/ˈsɪŋɡl ruːm/ /ˈdʌbl ruːm/', pos: 'noun', meaningVi: 'phòng đơn (cho 1 người) / phòng đôi (cho 2 người)', definitionEn: 'hotel room for one person / for two people', example: 'Do you have a single room or a double room available?', exampleVi: 'Khách sạn còn phòng đơn hay phòng đôi không ạ?' },
          { id: 'u19-reception', word: 'reception / key / lift', ipa: '/rɪˈsepʃn/ /kiː/ /lɪft/', pos: 'noun', meaningVi: 'quầy lễ tân / chìa khóa / thang máy', definitionEn: 'front desk / door key / elevator', example: "Here is your key. Your room is on the second floor, take the lift.", exampleVi: "Chìa khóa của quý khách đây. Phòng ở tầng hai, mời quý khách đi thang máy." },
          { id: 'u19-wake-up-call', word: 'wake-up call', ipa: '/ˈweɪk ʌp kɔːl/', pos: 'noun', meaningVi: 'cuộc gọi báo thức của khách sạn', definitionEn: 'telephone call from reception to wake you up', example: 'Can I have a wake-up call at 6.30 tomorrow morning, please?', exampleVi: 'Cho tôi đặt cuộc gọi báo thức lúc 6h30 sáng mai được không?' },
          { id: 'u19-check-out', word: 'check out / bill', ipa: '/tʃek aʊt/ /bɪl/', pos: 'phrase', meaningVi: 'trả phòng / hóa đơn thanh toán', definitionEn: 'leave hotel after paying your bill', example: 'Can I check out, please? And could I have the bill?', exampleVi: 'Tôi muốn làm thủ tục trả phòng, và cho tôi xin hóa đơn thanh toán.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-19-1',
        type: 'multiple_choice',
        instruction: 'What do you ask for if you need reception to wake you up in the morning?',
        instructionVi: 'Bạn gọi dịch vụ gì để khách sạn đánh thức bạn buổi sáng?',
        question: 'Can I have a ______ at 6.30, please?',
        options: ['wake-up call', 'room service', 'mini-bar', 'hairdryer'],
        correctAnswer: 'wake-up call',
        explanation: 'A wake-up call is a morning alarm call from the hotel desk.',
        explanationVi: 'Wake-up call là dịch vụ gọi điện báo thức.'
      }
    ]
  },
  {
    id: 20,
    unitNumber: 20,
    title: 'Eating out',
    titleVi: 'Ăn ngoài nhà hàng & Quán ăn',
    category: 'leisure',
    categoryName: 'Leisure',
    pageNumber: 46,
    summary: 'Địa điểm ăn uống (café, restaurant, bar/pub, fast food, take-away), cấu trúc thực đơn (starters, main courses, desserts), mức độ chín của bít tết (rare, medium, well-done) và hội thoại gọi món.',
    errorWarnings: [
      {
        wrong: "Are you ready for order?",
        right: "Are you ready to order?",
        explanation: "The standard phrase is 'ready TO order'.",
        explanationVi: "Mẫu câu nhân viên hỏi khách: 'Are you ready TO order?' (Quý khách đã sẵn sàng gọi món chưa?)."
      }
    ],
    tips: [
      {
        tip: "Notice the 3-course meal structure: Starters (món khai vị) -> Main courses (món chính) -> Desserts (món tráng miệng).",
        tipVi: "Cấu trúc một bữa ăn hoàn chỉnh trong thực đơn phương Tây: Starters (khai vị) -> Main courses (món chính) -> Desserts (tráng miệng)."
      }
    ],
    sections: [
      {
        title: 'Restaurant Vocabulary & The Menu',
        titleVi: 'Từ vựng Nhà hàng & Thực đơn',
        items: [
          { id: 'u20-starter', word: 'starters / soup of the day / salad', ipa: '/ˈstɑːtəz/', pos: 'noun', meaningVi: 'món khai vị / món súp trong ngày / salad', definitionEn: 'first course served before the main dish', example: 'For starters, I’ll have the soup of the day.', exampleVi: 'Khai vị cho tôi một phần súp trong ngày nhé.' },
          { id: 'u20-main-course', word: 'main course / steak / salmon', ipa: '/meɪn kɔːs/', pos: 'noun', meaningVi: 'món ăn chính / bít tết / cá hồi', definitionEn: 'the largest or most important dish of a meal', example: 'For my main course, I’d like the steak with new potatoes.', exampleVi: 'Món chính, tôi muốn dùng bít tết kèm khoai tây mới.' },
          { id: 'u20-rare-medium', word: 'rare / medium / well-done', ipa: '/reər/ /ˈmiːdiəm/ /ˌwel ˈdʌn/', pos: 'adjective', meaningVi: 'tái / vừa chín tới / chín kỹ', definitionEn: 'degree of meat cooking', example: 'How would you like your steak? - Medium, please.', exampleVi: 'Quý khách muốn món bít tết chín ở mức độ nào? - Chín vừa (medium), làm ơn.' },
          { id: 'u20-dessert', word: 'dessert / apple pie / ice cream', ipa: '/dɪˈzɜːt/', pos: 'noun', meaningVi: 'món tráng miệng / bánh táo nướng / kem', definitionEn: 'sweet dish eaten at the end of a meal', example: 'Would you like some chocolate ice cream for dessert?', exampleVi: 'Quý khách có muốn dùng kem sô-cô-la tráng miệng không?' },
          { id: 'u20-take-away', word: 'take-away', ipa: '/ˈteɪkəweɪ/', pos: 'noun', meaningVi: 'đồ ăn mang về nhà', definitionEn: 'meal cooked in a restaurant that you buy and take home to eat', example: 'Let’s buy a Chinese take-away tonight.', exampleVi: 'Tối nay chúng ta mua đồ ăn Trung Hoa mang về nhà nhé.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-20-1',
        type: 'multiple_choice',
        instruction: 'How do you ask for the bill at the end of a meal?',
        instructionVi: 'Làm thế nào để xin hóa đơn thanh toán sau bữa ăn?',
        question: 'Could I have the ______, please?',
        options: ['bill', 'menu', 'starter', 'recipe'],
        correctAnswer: 'bill',
        explanation: 'In the UK you ask for the "bill" (US: check).',
        explanationVi: 'Ở Anh ta xin tính tiền bằng câu: "Could I have the bill, please?".'
      }
    ]
  },
  {
    id: 21,
    unitNumber: 21,
    title: 'Sports',
    titleVi: 'Thể thao & Hoạt động thể chất',
    category: 'leisure',
    categoryName: 'Leisure',
    pageNumber: 48,
    summary: 'Các môn thể thao bóng (football, tennis, basketball, badminton), thể thao vận động (swimming, running, skiing, snowboarding, judo), địa điểm thi đấu (pitch, court, pool) và quy tắc dùng PLAY, GO, DO.',
    errorWarnings: [
      {
        wrong: "I play swimming / I do skiing.",
        right: "I go swimming / I go skiing. (go + -ing)",
        explanation: "Rule: PLAY for ball games (football, tennis). GO for activities ending in -ing (go swimming, go skiing). DO for martial arts/gymnastics (do judo, do karate).",
        explanationVi: "Quy tắc cốt lõi: Dùng PLAY với môn có bóng/đối kháng đồng đội (play football, play tennis). Dùng GO với môn kết thúc bằng -ing (go swimming, go running). Dùng DO với võ thuật/thể dục (do judo, do karate)."
      }
    ],
    tips: [
      {
        tip: "Notice pitch vs court: a football / rugby PITCH, but a tennis / badminton / basketball COURT, and a swimming POOL.",
        tipVi: "Sân bóng đá/rugby dùng 'PITCH', sân tennis/bóng rổ/cầu lông dùng 'COURT', còn hồ bơi là 'POOL'."
      }
    ],
    sections: [
      {
        title: 'Ball games & Sports places',
        titleVi: 'Các môn bóng & Địa điểm chơi',
        items: [
          { id: 'u21-football', word: 'football / basketball / tennis', ipa: '/ˈfʊtbɔːl/ /ˈbɑːskɪtbɔːl/ /ˈtenɪs/', pos: 'noun', meaningVi: 'bóng đá / bóng rổ / quần vợt', definitionEn: 'games played with balls and teams or pairs', example: 'We play football on a football pitch and tennis on a tennis court.', exampleVi: 'Chúng tôi chơi bóng đá trên sân cỏ và chơi quần vợt trên sân tennis.' },
          { id: 'u21-pitch-court', word: 'pitch / court / swimming pool', ipa: '/pɪtʃ/ /kɔːt/ /ˈswɪmɪŋ puːl/', pos: 'noun', meaningVi: 'sân cỏ bóng đá / sân có kẻ vạch / hồ bơi', definitionEn: 'designated areas for different sports', example: 'They play badminton on a court and swim in a pool.', exampleVi: 'Họ chơi cầu lông trên sân court và bơi lội trong hồ bơi.' }
        ]
      },
      {
        title: 'Verbs: Play, Go, Do with Sports',
        titleVi: 'Phân biệt cách dùng Play, Go, Do',
        items: [
          { id: 'u21-go-sports', word: 'go swimming / running / skiing / sailing', ipa: '/ɡəʊ ˈswɪmɪŋ/', pos: 'phrase', meaningVi: 'đi bơi / chạy bộ / trượt tuyết / chèo thuyền buồm', definitionEn: 'go + -ing sports activities', example: 'I go swimming every Saturday morning.', exampleVi: 'Tôi đi bơi vào mỗi sáng thứ Bảy.' },
          { id: 'u21-do-sports', word: 'do judo / do karate', ipa: '/duː ˈdʒuːdəʊ/', pos: 'phrase', meaningVi: 'tập võ judo / võ karate', definitionEn: 'do martial arts activities', example: 'She does judo twice a week.', exampleVi: 'Cô ấy tập võ judo hai lần mỗi tuần.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-21-1',
        type: 'multiple_choice',
        instruction: 'Choose the correct verb: "Every winter, we ______ skiing in the mountains."',
        instructionVi: 'Chọn động từ đúng: "Every winter, we ______ skiing in the mountains."',
        question: 'Every winter, we ______ skiing in the mountains.',
        options: ['go', 'play', 'do', 'make'],
        correctAnswer: 'go',
        explanation: 'We say "go skiing" because skiing ends in -ing.',
        explanationVi: 'Môn trượt tuyết tận cùng bằng -ing nên đi với "go": go skiing.'
      }
    ]
  },
  {
    id: 22,
    unitNumber: 22,
    title: 'Cinema',
    titleVi: 'Điện ảnh & Thể loại phim',
    category: 'leisure',
    categoryName: 'Leisure',
    pageNumber: 50,
    summary: 'Các thể loại phim (western, horror film, action film, comedy, cartoon, science fiction, musical), diễn viên, đạo diễn và mẫu câu hỏi về phim ảnh.',
    errorWarnings: [
      {
        wrong: "Do you go to cinema often?",
        right: "Do you go to the cinema often?",
        explanation: "Always say 'go to THE cinema' with the definite article 'the'.",
        explanationVi: "Luôn nói 'go to THE cinema' (có mạo từ 'the'), không nói 'go to cinema'."
      },
      {
        wrong: "What's on the cinema this week?",
        right: "What's on at the cinema this week?",
        explanation: "Use preposition 'at': 'What's on AT the cinema?'.",
        explanationVi: "Hỏi rạp đang chiếu phim gì: 'What's on AT the cinema this week?' (dùng at)."
      }
    ],
    tips: [
      {
        tip: "Notice: 'science fiction' is often abbreviated as 'sci-fi'. 'A thriller' is an exciting film with suspense and mystery.",
        tipVi: "'science fiction' hay được viết tắt là 'sci-fi' (khoa học viễn tưởng). 'Thriller' là phim ly kỳ hồi hộp."
      }
    ],
    sections: [
      {
        title: 'Types of Films',
        titleVi: 'Các thể loại phim',
        items: [
          { id: 'u22-western', word: 'western', ipa: '/ˈwestən/', pos: 'noun', meaningVi: 'phim cao bồi miền Tây nước Mỹ', definitionEn: 'film about cowboys in the American West', example: 'Some cowboys rob a train in a western.', exampleVi: 'Những chàng cao bồi cướp tàu hỏa trong một bộ phim viễn Tây.' },
          { id: 'u22-horror', word: 'horror film / thriller', ipa: '/ˈhɒrə fɪlm/ /ˈθrɪlər/', pos: 'noun', meaningVi: 'phim kinh dị / phim giật gân ly kỳ', definitionEn: 'film designed to frighten audience / exciting film', example: "If I see a horror film, I can't sleep.", exampleVi: "Nếu tôi xem phim kinh dị, tôi sẽ không thể nào ngủ được." },
          { id: 'u22-action', word: 'action film / science fiction', ipa: '/ˈækʃn fɪlm/ /ˌsaɪəns ˈfɪkʃn/', pos: 'noun', meaningVi: 'phim hành động / phim khoa học viễn tưởng', definitionEn: 'film with fights and chases / futuristic space film', example: 'A flying saucer lands from Mars in a science fiction film.', exampleVi: 'Đĩa bay từ sao Hỏa đáp xuống trong một bộ phim khoa học viễn tưởng.' },
          { id: 'u22-comedy', word: 'comedy / romantic comedy / cartoon', ipa: '/ˈkɒmədi/ /kɑːˈtuːn/', pos: 'noun', meaningVi: 'phim hài / phim hài lãng mạn / phim hoạt hình', definitionEn: 'funny film / cartoon animated film', example: 'Mickey Mouse is a famous cartoon character.', exampleVi: 'Chuột Mickey là nhân vật hoạt hình nổi tiếng.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-22-1',
        type: 'matching',
        instruction: 'What type of film has flying saucers and aliens from Mars?',
        instructionVi: 'Thể loại phim nào nói về đĩa bay và người ngoài hành tinh?',
        question: 'A flying saucer lands from Mars. What type of film is this?',
        options: ['science fiction', 'western', 'musical', 'romantic comedy'],
        correctAnswer: 'science fiction',
        explanation: 'Science fiction films deal with futuristic concepts, space and aliens.',
        explanationVi: 'Phim có tàu vũ trụ và người sao Hỏa là phim khoa học viễn tưởng (science fiction).'
      }
    ]
  },
  {
    id: 23,
    unitNumber: 23,
    title: 'Free time at home',
    titleVi: 'Thời gian rảnh rỗi tại nhà',
    category: 'leisure',
    categoryName: 'Leisure',
    pageNumber: 52,
    summary: 'Giải trí tại gia: xem TV, nghe radio/nhạc (CD, MP3 player, headphones), lướt Internet tải nhạc, làm vườn (gardening), đọc sách báo và mời bạn bè đến chơi nhà (have friends round).',
    errorWarnings: [
      {
        wrong: "We see TV and listen the radio.",
        right: "We watch TV and listen to the radio.",
        explanation: "We WATCH TV (never 'see TV') and we LISTEN TO music/radio (always with preposition 'to').",
        explanationVi: "Xem TV dùng 'WATCH TV' (không dùng see TV). Nghe nhạc/đài dùng 'LISTEN TO' (luôn có giới từ 'to')."
      }
    ],
    tips: [
      {
        tip: "Notice the phrasal expression: 'have friends round' means inviting friends to come visit your home or flat.",
        tipVi: "'Have friends round' có nghĩa là mời bạn bè tới chơi nhà hoặc dùng bữa thân mật."
      }
    ],
    sections: [
      {
        title: 'Home Entertainment & Reading',
        titleVi: 'Giải trí tại nhà & Đọc sách',
        items: [
          { id: 'u23-watch-tv', word: 'watch TV / listen to music', ipa: '/wɒtʃ ˌtiː ˈviː/', pos: 'phrase', meaningVi: 'xem truyền hình / nghe nhạc', definitionEn: 'relaxing with audiovisual media', example: 'I watch TV every evening and listen to music to relax.', exampleVi: 'Tôi xem TV mỗi buổi tối và nghe nhạc để thư giãn.' },
          { id: 'u23-gardening', word: 'gardening / grow flowers', ipa: '/ˈɡɑːdnɪŋ/', pos: 'noun', meaningVi: 'làm vườn / trồng hoa và rau', definitionEn: 'working in a garden cultivating plants', example: 'Do you like gardening? We grow flowers and vegetables.', exampleVi: 'Bạn có thích làm vườn không? Chúng tôi trồng cả hoa lẫn rau củ.' },
          { id: 'u23-have-friends-round', word: 'have friends round', ipa: '/hæv frendz raʊnd/', pos: 'phrase', meaningVi: 'mời bạn bè đến nhà chơi', definitionEn: 'invite friends to visit your home/flat', example: 'We sometimes have friends round for dinner on Saturdays.', exampleVi: 'Thỉnh thoảng chúng tôi mời bạn bè ghé nhà ăn tối vào thứ Bảy.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-23-1',
        type: 'error_correction',
        instruction: 'Correct the sentence: "I often hear the radio when relaxing."',
        instructionVi: 'Sửa lỗi câu: "I often hear the radio when relaxing."',
        question: 'Which is correct?',
        options: ['I often listen to the radio when relaxing.', 'I often listen the radio.', 'I often hear to radio.', 'I watch the radio.'],
        correctAnswer: 'I often listen to the radio when relaxing.',
        explanation: 'We say "listen to the radio".',
        explanationVi: 'Cụm chuẩn là "listen to the radio".'
      }
    ]
  },
  {
    id: 24,
    unitNumber: 24,
    title: 'Music and musical instruments',
    titleVi: 'Âm nhạc & Nhạc cụ',
    category: 'leisure',
    categoryName: 'Leisure',
    pageNumber: 54,
    summary: 'Từ vựng các loại nhạc cụ (piano, guitar, violin, flute, trumpet, clarinet, drums), các thể loại nhạc (pop, classical, jazz, rock), phân biệt music (danh từ không đếm được) vs musical vs musician.',
    errorWarnings: [
      {
        wrong: "They played fantastic musics for two hours.",
        right: "They played fantastic music for two hours.",
        explanation: "Music is an UNCOUNTABLE noun. It never has a plural 'musics'.",
        explanationVi: "Music (âm nhạc) là danh từ không đếm được, tuyệt đối không thêm s thành 'musics'."
      },
      {
        wrong: "We are going to a music concert.",
        right: "We are going to a concert. / a rock concert.",
        explanation: "A concert by definition means an event with music. Do not say 'a music concert'.",
        explanationVi: "Nói 'a concert' (buổi hòa nhạc) hoặc 'a rock concert', KHÔNG nói 'a music concert'."
      },
      {
        wrong: "They formed a music band.",
        right: "They formed a band / a rock band.",
        explanation: "Say 'a band', not 'a music band'.",
        explanationVi: "Nói 'a band' (ban nhạc), không nói 'a music band'."
      }
    ],
    tips: [
      {
        tip: "Notice the words: music (danh từ), musical (tính từ: a musical instrument), musician (người nhạc sĩ / nhạc công).",
        tipVi: "Phân biệt từ loại: music (danh từ âm nhạc), musical (tính từ: musical instrument - nhạc cụ), musician (nhạc công/nhạc sĩ)."
      }
    ],
    sections: [
      {
        title: 'Musical Instruments & Genres',
        titleVi: 'Nhạc cụ & Dòng nhạc',
        items: [
          { id: 'u24-piano', word: 'piano / guitar / violin', ipa: '/piˈænəʊ/ /ɡɪˈtɑːr/ /ˌvaɪəˈlɪn/', pos: 'noun', meaningVi: 'đàn dương cầm / đàn ghi-ta / đàn vĩ cầm', definitionEn: 'popular acoustic instruments', example: 'Ricardo is an excellent violinist and his sister plays the piano.', exampleVi: 'Ricardo là nghệ sĩ vĩ cầm xuất sắc còn em gái anh chơi piano.' },
          { id: 'u24-flute', word: 'flute / trumpet / drums / clarinet', ipa: '/fluːt/ /ˈtrʌmpɪt/ /drʌmz/', pos: 'noun', meaningVi: 'sáo tây / kèn trumpet / bộ trống / kèn clarinet', definitionEn: 'wind and percussion instruments', example: 'Wilma plays the flute in a city orchestra.', exampleVi: 'Wilma chơi sáo trong dàn nhạc giao hưởng thành phố.' },
          { id: 'u24-classical', word: 'classical / pop / rock / jazz', ipa: '/ˈklæsɪkl/ /pɒp/ /rɒk/ /dʒæz/', pos: 'noun', meaningVi: 'nhạc cổ điển / nhạc pop / nhạc rock / nhạc jazz', definitionEn: 'genres of musical composition', example: 'Kim loves classical music such as Beethoven and Mozart.', exampleVi: 'Kim yêu thích nhạc cổ điển như các tác phẩm của Beethoven và Mozart.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-24-1',
        type: 'multiple_choice',
        instruction: 'Choose the correct word: music, musical, or musician.',
        instructionVi: 'Chọn từ loại chính xác: music, musical hay musician.',
        question: 'My brother plays three instruments; he is a very good ______.',
        options: ['musician', 'music', 'musical', 'musicist'],
        correctAnswer: 'musician',
        explanation: 'A musician is a person who plays musical instruments.',
        explanationVi: 'Musician là danh từ chỉ người nhạc công / nhạc sĩ.'
      }
    ]
  }
];
