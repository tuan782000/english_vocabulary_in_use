import { UnitData } from '../../types';

export const PART7_VERBS_UNITS: UnitData[] = [
  {
    id: 36,
    unitNumber: 36,
    title: 'Have / had / had',
    titleVi: 'Động từ HAVE: Cụm từ & Cách dùng',
    category: 'verbs',
    categoryName: 'Everyday verbs',
    pageNumber: 78,
    summary: 'Động từ cốt lõi Have: bữa ăn (have breakfast/lunch/dinner), hành động (have a shower, have a swim, have a look), giao tiếp (have a good time, have a word with), phân biệt have got và have to.',
    errorWarnings: [
      {
        wrong: "When I was a student, I had got to write an essay.",
        right: "When I was a student, I had to write an essay.",
        explanation: "In the past tense, use 'had to' without 'got'. (Present: I have got to / I have to; Past: I had to).",
        explanationVi: "Ở thì quá khứ chỉ dùng 'had to' (phải làm gì), KHÔNG dùng 'had got to'."
      }
    ],
    tips: [
      {
        tip: "Collocations with have: have meals (breakfast/dinner), have drinks (a cup of tea/coffee), have personal care (a shower/a bath), have fun (a good time).",
        tipVi: "Nhóm cụm từ đi với HAVE: ăn uống (have breakfast, have coffee), sinh hoạt (have a shower, have a swim), trải nghiệm (have a great time)."
      }
    ],
    sections: [
      {
        title: 'Common Expressions with HAVE',
        titleVi: 'Cụm từ thông dụng với HAVE',
        items: [
          { id: 'u36-have-meals', word: 'have breakfast / lunch / dinner', ipa: '/hæv ˈbrekfəst/', pos: 'phrase', meaningVi: 'ăn sáng / ăn trưa / ăn tối', definitionEn: 'eat morning / midday / evening meal', example: 'I always have coffee and toast for breakfast in the morning.', exampleVi: 'Tôi luôn uống cà phê và ăn bánh mì nướng vào bữa sáng.' },
          { id: 'u36-have-shower', word: 'have a shower / bath / swim', ipa: '/hæv ə ˈʃaʊər/', pos: 'phrase', meaningVi: 'tắm vòi sen / tắm bồn / đi bơi', definitionEn: 'wash yourself or swim', example: 'The hotel has a swimming pool, so we can have a swim.', exampleVi: 'Khách sạn có hồ bơi, vì vậy chúng tôi có thể đi bơi một vòng.' },
          { id: 'u36-have-word', word: 'have a word with / have a look', ipa: '/hæv ə wɜːd wɪð/', pos: 'phrase', meaningVi: 'nói chuyện riêng với ai / ngó qua, xem qua', definitionEn: 'speak briefly with someone / look at something', example: 'Do you have a moment? Can I have a word with you?', exampleVi: 'Bạn có rảnh một lát không? Tôi có thể nói chuyện riêng với bạn chút được không?' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-36-1',
        type: 'multiple_choice',
        instruction: 'Complete the sentence: "Can I have a ______ at your new camera?"',
        instructionVi: 'Điền từ thích hợp: Cho tôi xem chiếc máy ảnh mới của bạn được không?',
        question: 'Can I have a ______ at your new camera?',
        options: ['look', 'go', 'view', 'watch'],
        correctAnswer: 'look',
        explanation: 'We say "have a look at something" (xem qua cái gì).',
        explanationVi: 'Cụm từ chuẩn là "have a look at something" (xem qua).'
      }
    ]
  },
  {
    id: 37,
    unitNumber: 37,
    title: 'Go / went / gone',
    titleVi: 'Động từ GO: Di chuyển & Hoạt động',
    category: 'verbs',
    categoryName: 'Everyday verbs',
    pageNumber: 80,
    summary: 'Động từ Go: di chuyển từ điểm này sang điểm khác, giới từ (go in/into, go out/out of, go up, go down), thì tương lai (be going to) và Go + -ing cho các hoạt động giải trí (go shopping, go swimming, go sightseeing).',
    errorWarnings: [
      {
        wrong: "Let's go for swimming and then go to home.",
        right: "Let's go swimming and then go home.",
        explanation: "Never use 'to' or 'for' with go + -ing (say 'go swimming'). Never use 'to' with home (say 'go home', NOT 'go to home').",
        explanationVi: "Nói 'go swimming', 'go shopping' (không thêm to hay for). Nói 'go home' (về nhà), KHÔNG nói 'go to home'."
      },
      {
        wrong: "I don't want to go to anywhere.",
        right: "I don't want to go anywhere.",
        explanation: "Do not use 'to' before anywhere/somewhere.",
        explanationVi: "Không dùng 'to' trước anywhere/somewhere: 'go anywhere'."
      }
    ],
    tips: [
      {
        tip: "Go + -ing for hobbies: go shopping, go swimming, go skiing, go fishing, go dancing, go sightseeing.",
        tipVi: "Cấu trúc Go + V-ing chỉ sở thích vận động: go shopping (đi mua sắm), go swimming (đi bơi), go sightseeing (đi ngắm cảnh)."
      }
    ],
    sections: [
      {
        title: 'Movement, Directions & Go + -ing',
        titleVi: 'Hướng di chuyển & Cấu trúc Go + V-ing',
        items: [
          { id: 'u37-go-home', word: 'go home', ipa: '/ɡəʊ həʊm/', pos: 'phrase', meaningVi: 'về nhà (không dùng to)', definitionEn: 'return to your house', example: "It's late; I must go home now.", exampleVi: "Muộn rồi; tôi phải về nhà ngay bây giờ." },
          { id: 'u37-go-ing', word: 'go shopping / swimming / dancing', ipa: '/ɡəʊ ˈʃɒpɪŋ/', pos: 'phrase', meaningVi: 'đi mua sắm / đi bơi / đi khiêu vũ', definitionEn: 'participate in leisure activities', example: 'I usually go swimming in the morning and go shopping on Saturday.', exampleVi: 'Tôi thường đi bơi vào buổi sáng và đi mua sắm vào thứ Bảy.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-37-1',
        type: 'error_correction',
        instruction: 'Correct the mistake: "It is time to go to home now."',
        instructionVi: 'Sửa lỗi sai: "It is time to go to home now."',
        question: 'Which sentence is correct?',
        options: ['It is time to go home now.', 'It is time to go at home now.', 'It is time to go into home now.', 'It is time to going home now.'],
        correctAnswer: 'It is time to go home now.',
        explanation: 'We say "go home" without the preposition "to".',
        explanationVi: 'Cụm chuẩn là "go home" (không có "to").'
      }
    ]
  },
  {
    id: 38,
    unitNumber: 38,
    title: 'Do / did / done',
    titleVi: 'Động từ DO: Trợ động từ & Hoạt động',
    category: 'verbs',
    categoryName: 'Everyday verbs',
    pageNumber: 82,
    summary: 'Động từ Do: làm trợ động từ trong câu hỏi/phủ định (Do you like...? He doesn’t play), động từ chung chỉ hành động (What are you doing?), hỏi nghề nghiệp (What do you do?), và các cụm Do + activity (do homework, do housework, do the washing-up, do your best).',
    errorWarnings: [
      {
        wrong: "Did you did your homework?",
        right: "Did you do your homework?",
        explanation: "After auxiliary 'did', the main verb must be in base form 'do'.",
        explanationVi: "Sau trợ động từ quá khứ 'did', động từ chính phải trở về dạng nguyên mẫu: 'Did you do...'."
      }
    ],
    tips: [
      {
        tip: "Collocations with DO: do homework, do housework, do the washing, do the washing-up, do gardening, do business with, do your best.",
        tipVi: "Nhớ các cụm đi với DO: do homework (làm bài tập), do housework (làm việc nhà), do the washing (giặt đồ), do the washing-up (rửa bát), do your best (cố gắng hết sức)."
      }
    ],
    sections: [
      {
        title: 'Do as Auxiliary & Common Collocations',
        titleVi: 'Do trợ động từ & Cụm từ công việc',
        items: [
          { id: 'u38-do-homework', word: 'do homework / do exercises', ipa: '/duː ˈhəʊmwɜːk/', pos: 'phrase', meaningVi: 'làm bài tập về nhà / làm bài tập thể dục', definitionEn: 'complete school assignments or workouts', example: 'The homework is very difficult - just do your best.', exampleVi: 'Bài tập về nhà khó lắm - bạn chỉ cần cố gắng hết sức là được.' },
          { id: 'u38-do-housework', word: 'do the housework / washing-up', ipa: '/duː ðə ˈhaʊswɜːk/', pos: 'phrase', meaningVi: 'làm việc nhà / rửa bát đĩa', definitionEn: 'clean house or wash dishes after dinner', example: 'Did you do the washing-up after dinner?', exampleVi: 'Bạn đã rửa bát sau bữa tối chưa?' },
          { id: 'u38-do-business', word: 'do business with', ipa: '/duː ˈbɪznəs wɪð/', pos: 'phrase', meaningVi: 'kinh doanh, làm ăn buôn bán với...', definitionEn: 'engage in commercial activities with a partner', example: 'Our company does a lot of business with the US.', exampleVi: 'Công ty chúng tôi hợp tác kinh doanh rất nhiều với phía Mỹ.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-38-1',
        type: 'multiple_choice',
        instruction: 'Complete the sentence: "Just ______ your best and don’t worry."',
        instructionVi: 'Điền động từ: Cứ cố gắng hết sức mình đi và đừng lo.',
        question: 'The exam is tough, just ______ your best.',
        options: ['do', 'make', 'take', 'have'],
        correctAnswer: 'do',
        explanation: 'The idiom is "do your best" (cố gắng hết sức).',
        explanationVi: 'Thành ngữ chuẩn là "do your best".'
      }
    ]
  },
  {
    id: 39,
    unitNumber: 39,
    title: 'Make / made / made',
    titleVi: 'Động từ MAKE: Chế tạo, Gây ra & Cụm từ',
    category: 'verbs',
    categoryName: 'Everyday verbs',
    pageNumber: 84,
    summary: 'Động từ Make: nấu nướng pha chế (make coffee, make dinner), tác động cảm xúc (it makes me feel tired/sad), và phân biệt dứt khoát MAKE vs DO (make a mistake, make an appointment, make a noise, make the bed).',
    errorWarnings: [
      {
        wrong: "I made a mistake in the exam, so I have to make homework.",
        right: "I made a mistake in the exam, so I have to do homework.",
        explanation: "Always: MAKE a mistake, but DO homework. TAKE an exam (never make an exam). TAKE a photo (never make a photo).",
        explanationVi: "QUAN TRỌNG: MAKE a mistake (phạm lỗi), nhưng DO homework (làm bài tập). TAKE an exam (đi thi), TAKE a photo (chụp ảnh)."
      }
    ],
    tips: [
      {
        tip: "Rule of thumb: MAKE is used for creating, producing, or cooking something (make coffee, make dinner). DO is for tasks, duties, and actions (do washing, do homework).",
        tipVi: "Mẹo phân biệt: MAKE dùng khi tạo ra sản phẩm mới hoặc nấu nướng (make tea, make cake). DO dùng cho nhiệm vụ, nghĩa vụ và công việc thường ngày (do homework, do the dishes)."
      }
    ],
    sections: [
      {
        title: 'Make for Food & Feelings',
        titleVi: 'Make trong nấu nướng & Cảm xúc',
        items: [
          { id: 'u39-make-coffee', word: 'make coffee / tea / dinner', ipa: '/meɪk ˈkɒfi/', pos: 'phrase', meaningVi: 'pha cà phê / pha trà / nấu bữa tối', definitionEn: 'prepare hot drink or meal', example: 'Dad is in the kitchen making some coffee.', exampleVi: 'Bố đang ở trong bếp pha một chút cà phê.' },
          { id: 'u39-make-feel', word: 'make someone feel (tired/sad)', ipa: '/meɪk ˈsʌmwʌn fiːl/', pos: 'phrase', meaningVi: 'làm cho ai cảm thấy (mệt mỏi/buồn bã)', definitionEn: 'cause an emotion or bodily sensation', example: 'Going by train always makes me feel tired.', exampleVi: 'Đi tàu hỏa luôn khiến tôi cảm thấy mệt mỏi.' }
        ]
      },
      {
        title: 'Expressions with MAKE (NOT DO)',
        titleVi: 'Các cụm từ cố định đi với MAKE',
        items: [
          { id: 'u39-make-mistake', word: 'make a mistake', ipa: '/meɪk ə mɪˈsteɪk/', pos: 'phrase', meaningVi: 'mắc lỗi, phạm sai lầm', definitionEn: 'do something incorrect', example: 'I always make a mistake when I speak quickly.', exampleVi: 'Tôi luôn mắc lỗi khi nói quá nhanh.' },
          { id: 'u39-make-appointment', word: 'make an appointment', ipa: '/meɪk ən əˈpɔɪntmənt/', pos: 'phrase', meaningVi: 'đặt lịch hẹn (bác sĩ, nha sĩ)', definitionEn: 'arrange a time to see someone', example: 'I want to make an appointment with the doctor.', exampleVi: 'Tôi muốn đặt một lịch hẹn khám với bác sĩ.' },
          { id: 'u39-make-bed', word: 'make my bed', ipa: '/meɪk maɪ bed/', pos: 'phrase', meaningVi: 'dọn dẹp gấp chăn gối giường ngủ', definitionEn: 'tidy the covers on your bed', example: 'When I get up, I make my bed.', exampleVi: 'Khi ngủ dậy, tôi gấp chăn gối dọn giường ngay.' },
          { id: 'u39-make-noise', word: 'make a noise / make a mess', ipa: '/meɪk ə nɔɪz/', pos: 'phrase', meaningVi: 'làm ồn ào / bày bừa luộm thuộm', definitionEn: 'create loud sounds / cause disorder', example: 'The children are making a noise and making a mess.', exampleVi: 'Lũ trẻ đang làm ồn và bày bừa khắp phòng.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-39-1',
        type: 'error_correction',
        instruction: 'Correct the error: "Can I make a photo of you?"',
        instructionVi: 'Sửa lỗi sai: "Can I make a photo of you?"',
        question: 'Which verb is used with taking photos?',
        options: ['take', 'make', 'do', 'have'],
        correctAnswer: 'take',
        explanation: 'We always "take a photo", never "make a photo".',
        explanationVi: 'Chụp ảnh luôn dùng "take a photo".'
      }
    ]
  },
  {
    id: 40,
    unitNumber: 40,
    title: 'Come / came / come',
    titleVi: 'Động từ COME: Hướng về phía người nói',
    category: 'verbs',
    categoryName: 'Everyday verbs',
    pageNumber: 86,
    summary: 'Phân biệt Come (hướng về phía người nói) vs Go (rời xa người nói), các cụm Come in / Come out, Come back / Come home, Come from (xuất xứ) và Come along.',
    errorWarnings: [
      {
        wrong: "I'm coming from Poland.",
        right: "I come from Poland. / I'm from Poland.",
        explanation: "State of origin uses simple present: 'I come from Vietnam' (NOT continuous 'I am coming').",
        explanationVi: "Nói về quê quán xuất xứ dùng thì hiện tại đơn: 'I come from Vietnam' hoặc 'I'm from Vietnam', KHÔNG dùng thì tiếp diễn 'I am coming'."
      }
    ],
    tips: [
      {
        tip: "Remember the difference: GO means moving away from here; COME means moving towards here.",
        tipVi: "Quy tắc không gian: GO là đi khỏi đây (hướng ra xa), COME là đến đây (hướng về phía người nói)."
      }
    ],
    sections: [
      {
        title: 'Come vs Go & Directions',
        titleVi: 'Come và các hướng chuyển động',
        items: [
          { id: 'u40-come-in', word: 'Come in! / Come out', ipa: '/kʌm ɪn/', pos: 'phrase', meaningVi: 'Mời vào! / Đi ra ngoài', definitionEn: 'enter a room when invited / exit', example: "When someone knocks at the door, we say 'Come in!'.", exampleVi: "Khi có ai gõ cửa, chúng ta nói 'Mời vào!'." },
          { id: 'u40-come-back', word: 'come back / come home', ipa: '/kʌm bæk/', pos: 'phrase', meaningVi: 'trở về đây / về đến nhà', definitionEn: 'return to this place / arrive home', example: 'What time did you come home last night?', exampleVi: 'Tối qua mấy giờ bạn về đến nhà?' },
          { id: 'u40-come-along', word: 'come along / come from', ipa: '/kʌm əˈlɒŋ/', pos: 'phrase', meaningVi: 'đi cùng với chúng tôi / đến từ (quốc gia)', definitionEn: 'join someone / originate from', example: "We're going clubbing tonight. Do you want to come along?", exampleVi: "Tối nay chúng tôi đi câu lạc bộ. Bạn có muốn đi cùng không?" }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-40-1',
        type: 'multiple_choice',
        instruction: 'What do you say when someone knocks on your office door?',
        instructionVi: 'Bạn nói gì khi có người gõ cửa phòng làm việc?',
        question: 'Someone knocks on the door. You say: ______!',
        options: ['Come in', 'Go away', 'Come out', 'Come back'],
        correctAnswer: 'Come in',
        explanation: 'We say "Come in!" to invite someone into a room.',
        explanationVi: 'Mời ai vào phòng ta nói "Come in!".'
      }
    ]
  },
  {
    id: 41,
    unitNumber: 41,
    title: 'Take / took / taken',
    titleVi: 'Động từ TAKE: Thời gian, Đồ đạc & Phương tiện',
    category: 'verbs',
    categoryName: 'Everyday verbs',
    pageNumber: 88,
    summary: 'Động từ Take diễn tả thời gian (It takes Alan 20 minutes to get to work), mang theo vật dụng (take an umbrella), thi cử/học hành (take an exam, take a course), và phương tiện (take a bus/train/taxi).',
    errorWarnings: [
      {
        wrong: "It spends me 30 minutes to go to school.",
        right: "It takes me 30 minutes to get to school.",
        explanation: "Structure: It takes + person + time + to do something. Never say 'It spends me'.",
        explanationVi: "Cấu trúc mất bao nhiêu thời gian: It takes + người + thời gian + to do (It takes me 30 minutes to get to school)."
      }
    ],
    tips: [
      {
        tip: "Notice the time question: 'How long does it take you to get to work?' -> 'It takes me about 25 minutes.'",
        tipVi: "Câu hỏi mất bao lâu: 'How long does it take...?' -> 'It takes 15 minutes in a taxi'."
      }
    ],
    sections: [
      {
        title: 'Take with Time, Objects & Transport',
        titleVi: 'Take chỉ thời gian, vật dụng & xe cộ',
        items: [
          { id: 'u41-take-time', word: 'it takes + person + time', ipa: '/ɪt teɪks/', pos: 'phrase', meaningVi: 'ai đó mất bao nhiêu thời gian để làm gì', definitionEn: 'amount of time needed for an activity', example: 'It takes Miriam 45 minutes to get to work.', exampleVi: 'Miriam mất 45 phút để đi đến chỗ làm việc.' },
          { id: 'u41-take-with', word: 'take something with you', ipa: '/teɪk ˈsʌmwʌn wɪð juː/', pos: 'phrase', meaningVi: 'mang theo cái gì bên mình', definitionEn: 'carry something along when leaving', example: "Are you going out? Take an umbrella; it's raining.", exampleVi: "Bạn đi ra ngoài à? Nhớ mang theo ô nhé; trời đang mưa đấy." },
          { id: 'u41-take-transport', word: 'take the bus / train / taxi / underground', ipa: '/teɪk ðə bʌs/', pos: 'phrase', meaningVi: 'bắt xe buýt / tàu hỏa / taxi / tàu điện ngầm', definitionEn: 'travel using public transport', example: 'We took a taxi from the airport to our hotel.', exampleVi: 'Chúng tôi đã bắt taxi từ sân bay về khách sạn.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-41-1',
        type: 'multiple_choice',
        instruction: 'How do you ask about duration of a journey?',
        instructionVi: 'Hỏi mất bao nhiêu thời gian để đi đến ga như thế nào?',
        question: '______ does it take to get to the station?',
        options: ['How long', 'How much', 'How far', 'How many'],
        correctAnswer: 'How long',
        explanation: 'We ask "How long does it take...?" to ask about duration.',
        explanationVi: 'Hỏi khoảng thời gian mất bao lâu dùng "How long does it take...?".'
      }
    ]
  },
  {
    id: 42,
    unitNumber: 42,
    title: 'Bring / brought / brought',
    titleVi: 'Động từ BRING: Mang lại & Phân biệt TAKE',
    category: 'verbs',
    categoryName: 'Everyday verbs',
    pageNumber: 90,
    summary: 'Phân biệt Bring (từ nơi xa mang ĐẾN ĐÂY) vs Take (từ đây mang ĐI NƠI KHÁC), cấu trúc Bring somebody something và Bring something back.',
    errorWarnings: [
      {
        wrong: "Are you going to school? Bring your books.",
        right: "Are you going to school? Take your books.",
        explanation: "Take = from here to there (to school). Bring = from there to here (to my house).",
        explanationVi: "Đi đến trường (xa nơi nói) dùng 'TAKE your books'. Khi bảo ai mang đến đây mới dùng 'BRING me a glass of water'."
      }
    ],
    tips: [
      {
        tip: "Rule: TAKE (like GO) = from here to there. BRING (like COME) = from there to here.",
        tipVi: "Quy tắc: TAKE đi liền với GO (mang đi). BRING đi liền với COME (mang tới, đem lại)."
      }
    ],
    sections: [
      {
        title: 'Bring vs Take & Bring Back',
        titleVi: 'Bring đối chiếu Take & Trả lại đồ',
        items: [
          { id: 'u42-bring-take', word: 'bring vs take', ipa: '/brɪŋ/ /teɪk/', pos: 'verb', meaningVi: 'mang lại đây vs mang đi đằng kia', definitionEn: 'bring = towards speaker; take = away from speaker', example: 'Can you bring me a glass of water from the kitchen?', exampleVi: 'Bạn mang cho tôi một cốc nước từ trong bếp ra đây được không?' },
          { id: 'u42-bring-back', word: 'bring something back', ipa: '/brɪŋ bæk/', pos: 'phrase', meaningVi: 'mang trả lại cho người cho mượn', definitionEn: 'return something you borrowed', example: "Take my umbrella and bring it back tomorrow.", exampleVi: "Cầm lấy dù của tôi mà che rồi ngày mai mang trả lại nhé." }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-42-1',
        type: 'multiple_choice',
        instruction: 'Choose bring or take: "Are you going to the shops? ______ an umbrella, it’s raining."',
        instructionVi: 'Chọn bring hay take: "Are you going to the shops? ______ an umbrella, it’s raining."',
        question: 'Are you going to the shops? ______ an umbrella.',
        options: ['Take', 'Bring', 'Carry', 'Make'],
        correctAnswer: 'Take',
        explanation: 'Going away from home requires "Take".',
        explanationVi: 'Rời nhà đi ra ngoài tiệm dùng "Take an umbrella".'
      }
    ]
  },
  {
    id: 43,
    unitNumber: 43,
    title: 'Get / got / got',
    titleVi: 'Động từ GET: Thay đổi, Mua & Đến nơi',
    category: 'verbs',
    categoryName: 'Everyday verbs',
    pageNumber: 92,
    summary: 'Động từ đa năng Get: thay đổi trạng thái với tính từ (get dark, get better, get tired, get wet), nhận/mua đồ với danh từ (get a stamp, get a taxi), và mang nghĩa ĐẾN NƠI (get home, get to New York).',
    errorWarnings: [
      {
        wrong: "When I get to home, I will call you.",
        right: "When I get home, I will call you.",
        explanation: "Never use 'to' with home: 'get home', 'go home'.",
        explanationVi: "Không bao giờ dùng giới từ 'to' với home: 'get home' (về đến nhà), KHÔNG nói 'get to home'."
      },
      {
        wrong: "I get to there at 6 o'clock.",
        right: "I get there at 6 o'clock.",
        explanation: "No preposition 'to' before 'there' or 'here': 'get there'.",
        explanationVi: "Không dùng 'to' trước 'there/here': 'get there'."
      }
    ],
    tips: [
      {
        tip: "Three main meanings of GET: 1. become (get dark/tired), 2. buy/obtain (get a coffee/stamp), 3. arrive (get home/get to London).",
        tipVi: "Ba nghĩa cốt lõi của GET: 1. Trở nên (get tired, get dark), 2. Mua/có được (get a ticket, get a job), 3. Đến nơi (get to the airport, get home)."
      }
    ],
    sections: [
      {
        title: 'Get with Adjectives, Nouns & Arrival',
        titleVi: 'Get với Tính từ, Danh từ & Địa điểm',
        items: [
          { id: 'u43-get-adj', word: 'get dark / tired / wet / better', ipa: '/ɡet dɑːk/', pos: 'phrase', meaningVi: 'trời tối dần / mệt dần / bị ướt / bình phục tốt hơn', definitionEn: 'become a state', example: "It's raining! We are getting wet.", exampleVi: "Trời mưa rồi! Chúng ta đang bị ướt sũng." },
          { id: 'u43-get-noun', word: 'get a taxi / stamp / job', ipa: '/ɡet ə ˈtæksi/', pos: 'phrase', meaningVi: 'bắt taxi / mua con tem / xin được việc làm', definitionEn: 'buy, find, or obtain something', example: "Where can I get a taxi around here?", exampleVi: "Quanh đây tôi có thể bắt xe taxi ở đâu?" },
          { id: 'u43-get-arrive', word: 'get to [place] / get home', ipa: '/ɡet tuː/', pos: 'phrase', meaningVi: 'đến được nơi nào / về đến nhà', definitionEn: 'arrive at destination', example: 'This plane gets to Paris at 12.30.', exampleVi: 'Chuyến bay này hạ cánh đến Paris lúc 12h30.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-43-1',
        type: 'multiple_choice',
        instruction: 'The sun is going down. It is getting ______.',
        instructionVi: 'Mặt trời đang lặn dần. Trời đang trở nên...',
        question: 'The sun is going down. It is getting ______.',
        options: ['dark', 'light', 'warm', 'sunny'],
        correctAnswer: 'dark',
        explanation: 'When the sun sets, it gets dark.',
        explanationVi: 'Mặt trời lặn thì trời tối dần (getting dark).'
      }
    ]
  },
  {
    id: 44,
    unitNumber: 44,
    title: 'Phrasal verbs',
    titleVi: 'Cụm động từ (Phrasal Verbs)',
    category: 'verbs',
    categoryName: 'Everyday verbs',
    pageNumber: 94,
    summary: 'Cấu tạo cụm động từ (verb + particle: on, off, up, down), các cụm phổ biến (get on/off the bus, turn on/off/up/down the TV, put on/take off clothes, go on), và hiện tượng một cụm mang nhiều nghĩa (turn down, take off).',
    errorWarnings: [
      {
        wrong: "Turn down the light. (when you mean turn off)",
        right: "Turn off the light. / Turn down the TV volume.",
        explanation: "'Turn down' means make quieter (lower volume) or refuse. 'Turn off' means switch off completely.",
        explanationVi: "'Turn down' là vặn nhỏ âm lượng lại hoặc từ chối lời mời. Còn tắt hẳn đèn/TV là 'Turn off'."
      }
    ],
    tips: [
      {
        tip: "Notice two meanings of TAKE OFF: 1. Plane leaves the ground. 2. Remove clothes/shoes (She took off her shoes).",
        tipVi: "Hai nghĩa của TAKE OFF: 1. Máy bay cất cánh bay lên. 2. Cởi bỏ giày/quần áo."
      }
    ],
    sections: [
      {
        title: 'Essential Everyday Phrasal Verbs',
        titleVi: 'Các cụm động từ thiết yếu',
        items: [
          { id: 'u44-get-on-off', word: 'get on / get off', ipa: '/ɡet ɒn/ /ɡet ɒf/', pos: 'phrase', meaningVi: 'lên xe (buýt, tàu) / xuống xe', definitionEn: 'enter / leave public transport', example: 'We got off the bus at the City Museum.', exampleVi: 'Chúng tôi xuống xe buýt tại trạm Bảo tàng thành phố.' },
          { id: 'u44-turn-on-off', word: 'turn on / off / up / down', ipa: '/tɜːn ɒn/', pos: 'phrase', meaningVi: 'bật / tắt / vặn to lên / vặn nhỏ lại', definitionEn: 'operate electronics or change volume', example: 'Turn the TV down; it’s too loud!', exampleVi: 'Vặn nhỏ TV lại đi; ồn quá rồi!' },
          { id: 'u44-go-on', word: 'go on', ipa: '/ɡəʊ ɒn/', pos: 'phrase', meaningVi: 'tiếp tục nói/làm', definitionEn: 'continue doing something', example: "Don't stop. Go on talking; it's very interesting.", exampleVi: "Đừng dừng lại. Hãy tiếp tục nói đi; câu chuyện thú vị lắm." }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-44-1',
        type: 'multiple_choice',
        instruction: 'What phrasal verb means the plane leaves the ground?',
        instructionVi: 'Cụm động từ nào có nghĩa máy bay rời mặt đất bay lên?',
        question: 'Our plane ______ at 12.30.',
        options: ['takes off', 'gets off', 'turns on', 'puts on'],
        correctAnswer: 'takes off',
        explanation: 'A plane takes off when it leaves the ground.',
        explanationVi: 'Máy bay cất cánh là "takes off".'
      }
    ]
  },
  {
    id: 45,
    unitNumber: 45,
    title: 'Everyday things',
    titleVi: 'Hoạt động & Thói quen thường nhật',
    category: 'verbs',
    categoryName: 'Everyday verbs',
    pageNumber: 96,
    summary: 'Chuỗi thói quen cả ngày: wake up, get up, go to bathroom, have a shower, have breakfast, listen to radio, go to work, come home, make dinner, watch TV, go to bed, và hỏi về tần suất.',
    errorWarnings: [
      {
        wrong: "I am used to get up at 8 o'clock.",
        right: "I usually get up at 8 o'clock.",
        explanation: "To talk about present routine habits, use 'usually' with simple present (NOT 'I used to' or 'I am used to').",
        explanationVi: "Nói về thói quen sinh hoạt hiện tại: dùng 'I usually get up at 8 o'clock' (thì hiện tại đơn với usually), KHÔNG dùng 'used to'."
      }
    ],
    tips: [
      {
        tip: "Notice the difference: 'wake up' = stop sleeping and open eyes. 'Get up' = get out of bed physically.",
        tipVi: "Phân biệt: 'wake up' là tỉnh giấc mở mắt; 'get up' là bước chân rời khỏi giường."
      }
    ],
    sections: [
      {
        title: 'Morning to Night Routines',
        titleVi: 'Chu trình từ sáng đến tối',
        items: [
          { id: 'u45-wake-up', word: 'wake up -> get up', ipa: '/weɪk ʌp/ /ɡet ʌp/', pos: 'phrase', meaningVi: 'thức giấc -> rời khỏi giường', definitionEn: 'stop sleeping and stand up from bed', example: 'I usually wake up at 7.00 and get up at 7.15.', exampleVi: 'Tôi thường thức giấc lúc 7h và rời giường lúc 7h15.' },
          { id: 'u45-wash-clothes', word: 'wash clothes / clean the house', ipa: '/wɒʃ kləʊðz/', pos: 'phrase', meaningVi: 'giặt quần áo / dọn dẹp nhà cửa', definitionEn: 'clean garments and living spaces', example: 'She washes her clothes every Saturday morning.', exampleVi: 'Cô ấy giặt giũ quần áo vào mỗi sáng thứ Bảy.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-45-1',
        type: 'multiple_choice',
        instruction: 'What question asks about transportation to work?',
        instructionVi: 'Câu nào hỏi về phương tiện đi làm?',
        question: '______ do you go to work? - Usually by bus.',
        options: ['How', 'When', 'What time', 'Why'],
        correctAnswer: 'How',
        explanation: '"How do you go to work?" asks for the mode of travel.',
        explanationVi: 'Hỏi đi làm bằng phương tiện gì dùng từ để hỏi "How": How do you go to work?'
      }
    ]
  },
  {
    id: 46,
    unitNumber: 46,
    title: 'Talking',
    titleVi: 'Giao tiếp: Say, Tell, Ask, Speak',
    category: 'verbs',
    categoryName: 'Everyday verbs',
    pageNumber: 98,
    summary: 'Quy tắc ngữ pháp quan trọng nhất: SAY (tường thuật lời nói, say hello, say goodbye) vs TELL (kể cho AI ĐÓ: tell me, tell a story, tell the time) vs ASK (hỏi, xin) vs SPEAK/TALK (nói chuyện, nói ngôn ngữ).',
    errorWarnings: [
      {
        wrong: "He said me his name.",
        right: "He told me his name. / He said his name to me.",
        explanation: "TELL is followed immediately by a person object (told me, told him). SAY is NOT followed directly by a person without 'to'.",
        explanationVi: "TELL luôn đi liền với tân ngữ chỉ người (tell me, told her). Tuyệt đối KHÔNG nói 'He said me'."
      },
      {
        wrong: "Can you say me where the station is?",
        right: "Can you tell me where the station is?",
        explanation: "Use TELL: 'tell me where...', 'tell me the time'.",
        explanationVi: "Hỏi thông tin phải dùng 'tell me' (nói cho tôi biết): 'Can you tell me where the station is?'."
      },
      {
        wrong: "Do you talk Japanese?",
        right: "Do you speak Japanese?",
        explanation: "Always use SPEAK for languages: speak English, speak Japanese.",
        explanationVi: "Nói một ngôn ngữ luôn dùng động từ 'SPEAK' (speak English, speak French), KHÔNG dùng talk."
      }
    ],
    tips: [
      {
        tip: "Notice the phone collocations: 'answer the phone' (nhấc máy nghe điện thoại), 'reply to an email' (hồi âm thư điện tử).",
        tipVi: "Nghe điện thoại là 'answer the phone/door'. Phản hồi email là 'reply to an email'."
      }
    ],
    sections: [
      {
        title: 'Say vs Tell vs Ask vs Speak',
        titleVi: 'Phân biệt Say, Tell, Ask và Speak',
        items: [
          { id: 'u46-say', word: 'say (said, said)', ipa: '/seɪ/ /sed/', pos: 'verb', meaningVi: 'nói rằng, thốt lên', definitionEn: 'report words without direct person object', example: "She said, 'This food is wonderful!'", exampleVi: "Cô ấy nói: 'Món ăn này ngon tuyệt!'" },
          { id: 'u46-tell', word: 'tell (told, told)', ipa: '/tel/ /təʊld/', pos: 'verb', meaningVi: 'bảo, kể cho ai (tell someone something)', definitionEn: 'give information to a person', example: 'Can you tell me the time, please?', exampleVi: 'Bạn có thể xem giờ giúp tôi được không?' },
          { id: 'u46-ask', word: 'ask for / ask someone', ipa: '/ɑːsk/', pos: 'verb', meaningVi: 'hỏi ai / xin cái gì (ask for the bill)', definitionEn: 'request information or an item', example: 'She asked for the bill in the restaurant.', exampleVi: 'Cô ấy yêu cầu xin hóa đơn tính tiền trong nhà hàng.' },
          { id: 'u46-speak', word: 'speak languages', ipa: '/spiːk/', pos: 'verb', meaningVi: 'nói (ngôn ngữ)', definitionEn: 'communicate in a language', example: 'Do you speak English and Vietnamese?', exampleVi: 'Bạn có nói được tiếng Anh và tiếng Việt không?' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-46-1',
        type: 'fill_blank',
        instruction: 'Fill in with the correct form of say or tell: "Can you ______ me where the hotel is?"',
        instructionVi: 'Điền dạng đúng của say hoặc tell: "Can you ______ me where the hotel is?"',
        question: 'Can you ______ me where the hotel is, please?',
        options: ['tell', 'say', 'speak', 'talk'],
        correctAnswer: 'tell',
        explanation: 'Followed by "me", so use "tell".',
        explanationVi: 'Theo sau là tân ngữ "me" nên bắt buộc dùng "tell me".'
      }
    ]
  },
  {
    id: 47,
    unitNumber: 47,
    title: 'Moving',
    titleVi: 'Di chuyển & Vận động',
    category: 'verbs',
    categoryName: 'Everyday verbs',
    pageNumber: 100,
    summary: 'Các động tác tự thân (walk, run, jump, dance, swim, climb, fall) và thì quá khứ (walked, ran, jumped, danced, swam, climbed, fell), động từ đi lại (go by, take, ride, drive, fly) và giới từ với ARRIVE.',
    errorWarnings: [
      {
        wrong: "The train arrived to Tokyo on time.",
        right: "The train arrived in Tokyo on time.",
        explanation: "We ARRIVE IN a city/country, or ARRIVE AT a station/airport. NEVER 'arrive to'.",
        explanationVi: "QUAN TRỌNG: Đến một thành phố/quốc gia dùng 'arrive in'. Đến địa điểm nhỏ (sân bay, nhà ga, trường) dùng 'arrive at'. TUYỆT ĐỐI KHÔNG dùng 'arrive to'."
      }
    ],
    tips: [
      {
        tip: "Notice transport verbs: RIDE a bike / motorbike / horse. DRIVE a car / bus. FLY a plane. GO BY car/train/bus.",
        tipVi: "Xe đạp/xe máy/ngựa dùng RIDE. Ô tô/xe buýt dùng DRIVE. Đi bằng phương tiện gì dùng GO BY (không có mạo từ: go by car, go by train)."
      }
    ],
    sections: [
      {
        title: 'Verbs of Movement & Transport',
        titleVi: 'Động từ di chuyển & Phương tiện',
        items: [
          { id: 'u47-movements', word: 'walk, run, jump, swim, climb, fall', ipa: '/wɔːk/ /rʌn/ /klaɪm/ /fɔːl/', pos: 'verb', meaningVi: 'đi bộ, chạy, nhảy, bơi, leo trèo, ngã té', definitionEn: 'physical movements without vehicles', example: 'Yesterday I fell and broke my arm while climbing.', exampleVi: 'Hôm qua tôi bị ngã và gãy tay khi đang leo trèo.' },
          { id: 'u47-arrive-in-at', word: 'arrive in / arrive at', ipa: '/əˈraɪv ɪn/', pos: 'phrase', meaningVi: 'đến nơi (thành phố / sân ga)', definitionEn: 'reach destination (in a country/city, at a building)', example: 'The plane arrived in London and landed at Heathrow.', exampleVi: 'Máy bay đã đến London và hạ cánh xuống sân bay Heathrow.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-47-1',
        type: 'error_correction',
        instruction: 'Correct the error: "We arrived to Paris late at night."',
        instructionVi: 'Sửa lỗi sai: "We arrived to Paris late at night."',
        question: 'Which preposition is correct with Paris?',
        options: ['in', 'at', 'to', 'for'],
        correctAnswer: 'in',
        explanation: 'We arrive IN a large city or country: arrived in Paris.',
        explanationVi: 'Đến thành phố lớn dùng "arrive in Paris" (không dùng to).'
      }
    ]
  }
];
