import { UnitData } from '../../types';

export const PART8_GRAMMAR_UNITS: UnitData[] = [
  {
    id: 48,
    unitNumber: 48,
    title: 'Talking about language',
    titleVi: 'Thuật ngữ về Ngôn ngữ & Từ loại',
    category: 'grammar',
    categoryName: 'Words and grammar',
    pageNumber: 102,
    summary: 'Các từ chỉ ngữ pháp tiếng Anh: noun (danh từ), verb (động từ), adjective (tính từ), adverb (trạng từ), preposition (giới từ), conjunction (liên từ), phrase (cụm từ), sentence (câu).',
    errorWarnings: [
      {
        wrong: "Identifying 'in' as an adjective.",
        right: "'in' is a preposition; 'happy' is an adjective.",
        explanation: "Keep a note of the part of speech (word type) in your notebook for every new word.",
        explanationVi: "Ghi chú từ loại bên cạnh mỗi từ mới trong sổ tay: n (danh từ), v (động từ), adj (tính từ), prep (giới từ)."
      }
    ],
    tips: [
      {
        tip: "A phrase is a group of words without a complete thought (e.g. 'in the park'). A sentence begins with a capital letter and ends with a full stop (e.g. 'The man closed the door.').",
        tipVi: "Cụm từ (phrase) là một nhóm từ ngắn (in a house). Câu (sentence) là một ý hoàn chỉnh có chủ vị, bắt đầu bằng chữ hoa và kết thúc bằng dấu chấm."
      }
    ],
    sections: [
      {
        title: 'Grammar Vocabulary',
        titleVi: 'Từ vựng thuật ngữ ngữ pháp',
        items: [
          { id: 'u48-noun', word: 'noun / pronoun', ipa: '/naʊn/ /ˈprəʊnaʊn/', pos: 'noun', meaningVi: 'danh từ / đại từ', definitionEn: 'person or thing (book, girl) / used instead of noun (I, you, he, it)', example: "'Book' is a noun; 'she' is a pronoun.", exampleVi: "'Book' là danh từ; 'she' là đại từ." },
          { id: 'u48-adj-adv', word: 'adjective / adverb', ipa: '/ˈædʒɪktɪv/ /ˈædvɜːb/', pos: 'noun', meaningVi: 'tính từ / trạng từ', definitionEn: 'describes a thing (good, happy) / describes a verb (slowly, well)', example: "'Happy' is an adjective; 'happily' is an adverb.", exampleVi: "'Happy' là tính từ; 'happily' là trạng từ." },
          { id: 'u48-prep-conj', word: 'preposition / conjunction', ipa: '/ˌprepəˈzɪʃn/ /kənˈdʒʌŋkʃn/', pos: 'noun', meaningVi: 'giới từ / liên từ nối', definitionEn: 'little word before noun (in, on, at) / connects parts (and, but, because)', example: "'Because' is a conjunction and 'at' is a preposition.", exampleVi: "'Because' là liên từ và 'at' là giới từ." }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-48-1',
        type: 'multiple_choice',
        instruction: 'What type of grammar word is "because"?',
        instructionVi: 'Từ "because" thuộc loại từ ngữ pháp nào?',
        question: 'What type of word is "because"?',
        options: ['conjunction', 'preposition', 'adverb', 'pronoun'],
        correctAnswer: 'conjunction',
        explanation: '"because" connects two clauses together, so it is a conjunction.',
        explanationVi: '"because" nối hai vế câu nên là một liên từ (conjunction).'
      }
    ]
  },
  {
    id: 49,
    unitNumber: 49,
    title: 'Conjunctions and connecting words',
    titleVi: 'Liên từ & Từ nối câu',
    category: 'grammar',
    categoryName: 'Words and grammar',
    pageNumber: 104,
    summary: 'Các liên từ cơ bản (and, but, or, because, so, when, before, after, if) và các từ nối bổ sung (only, like, than, also, too, as well).',
    errorWarnings: [
      {
        wrong: "Because I was tired, so I went to bed.",
        right: "Because I was tired, I went to bed. / I was tired, so I went to bed.",
        explanation: "Do not use 'because' and 'so' together in the same sentence.",
        explanationVi: "Trong tiếng Anh KHÔNG dùng đồng thời 'Because... so...' trong cùng một câu."
      }
    ],
    tips: [
      {
        tip: "Notice 'too' and 'as well' come at the end of a clause: 'She likes coffee, and she likes tea as well / too.'",
        tipVi: "'too' và 'as well' (cũng vậy) thường đứng ở vị trí cuối mệnh đề."
      }
    ],
    sections: [
      {
        title: 'Basic Conjunctions & Connectors',
        titleVi: 'Liên từ cơ bản & Từ kết nối',
        items: [
          { id: 'u49-because-so', word: 'because vs so', ipa: '/bɪˈkɒz/ /səʊ/', pos: 'conjunction', meaningVi: 'bởi vì (chỉ nguyên nhân) vs vì vậy (chỉ kết quả)', definitionEn: 'explains reason / gives result', example: 'I felt ill, so I didn’t go to work. We went home early because we were tired.', exampleVi: 'Tôi thấy mệt nên tôi không đi làm. Chúng tôi về sớm vì quá mệt.' },
          { id: 'u49-when-if', word: 'when, before, after, if', ipa: '/wen/ /ɪf/', pos: 'conjunction', meaningVi: 'khi / trước khi / sau khi / nếu', definitionEn: 'time and condition connectors', example: 'We had dinner after we watched the film.', exampleVi: 'Chúng tôi ăn tối sau khi xem xong phim.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-49-1',
        type: 'multiple_choice',
        instruction: 'Choose the correct conjunction: "Sam liked school ______ he had many friends there."',
        instructionVi: 'Chọn liên từ đúng: Sam thích đi học ... cậu có nhiều bạn ở đó.',
        question: 'Sam liked school ______ he had many friends there.',
        options: ['because', 'so', 'before', 'if'],
        correctAnswer: 'because',
        explanation: 'It gives the reason why Sam liked school.',
        explanationVi: 'Đưa ra lý do nên dùng "because" (vì).'
      }
    ]
  },
  {
    id: 50,
    unitNumber: 50,
    title: 'Days, months, seasons',
    titleVi: 'Ngày trong tuần, Tháng & Mùa',
    category: 'grammar',
    categoryName: 'Words and grammar',
    pageNumber: 106,
    summary: 'Đơn vị thời gian (fortnight = 2 tuần, leap year = năm nhuận 366 ngày, century = thế kỷ), 7 ngày trong tuần, 12 tháng, 4 mùa và các giới từ ON, IN, AT đi kèm.',
    errorWarnings: [
      {
        wrong: "I went to the cinema in the weekend.",
        right: "I went to the cinema at the weekend. (British English)",
        explanation: "In British English, say 'at the weekend'. In US English, 'on the weekend' is also used. Never 'in the weekend'.",
        explanationVi: "Trong tiếng Anh Anh chuẩn của Cambridge: nói 'at the weekend' (vào cuối tuần), KHÔNG nói 'in the weekend'."
      },
      {
        wrong: "My birthday is on July.",
        right: "My birthday is in July. / on July 15th.",
        explanation: "Use IN with months and seasons (in July, in winter). Use ON with specific dates (on July 15th, on Monday).",
        explanationVi: "Tháng và mùa dùng 'IN' (in July, in winter). Ngày trong tuần và ngày tháng cụ thể dùng 'ON' (on Monday, on 15th July)."
      }
    ],
    tips: [
      {
        tip: "Remember the days of the week and months always start with a CAPITAL letter: Monday, July.",
        tipVi: "Các thứ trong tuần và các tháng luôn luôn phải VIẾT HOA chữ cái đầu: Monday, Friday, August."
      }
    ],
    sections: [
      {
        title: 'Calendar & Prepositions of Time',
        titleVi: 'Lịch & Giới từ chỉ thời gian',
        items: [
          { id: 'u50-days', word: 'Monday to Sunday', ipa: '/ˈmʌndeɪ/ /ˈsʌndeɪ/', pos: 'noun', meaningVi: 'các ngày trong tuần (thứ Hai đến Chủ nhật)', definitionEn: '7 days of the week', example: 'We say on Monday, on Saturday, at the weekend.', exampleVi: 'Ta nói on Monday (vào thứ Hai), at the weekend (vào cuối tuần).' },
          { id: 'u50-months-seasons', word: 'months & seasons (spring, summer, autumn, winter)', ipa: '/sprɪŋ/ /ˈsʌmər/ /ˈɔːtəm/ /ˈwɪntər/', pos: 'noun', meaningVi: '12 tháng & 4 mùa (xuân, hạ, thu, đông)', definitionEn: 'four divisions of the year', example: 'It often snows in winter and is hot in summer.', exampleVi: 'Vào mùa đông trời thường có tuyết và mùa hè thì nóng bức.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-50-1',
        type: 'multiple_choice',
        instruction: 'Choose the correct preposition: "I’m going to a party ______ Saturday."',
        instructionVi: 'Chọn giới từ đúng: "I’m going to a party ______ Saturday."',
        question: 'I’m going to a party ______ Saturday.',
        options: ['on', 'in', 'at', 'by'],
        correctAnswer: 'on',
        explanation: 'Days of the week take the preposition "on".',
        explanationVi: 'Các ngày trong tuần đi với giới từ "on".'
      }
    ]
  },
  {
    id: 51,
    unitNumber: 51,
    title: 'Time words',
    titleVi: 'Từ chỉ thời gian & Tần suất',
    category: 'grammar',
    categoryName: 'Words and grammar',
    pageNumber: 108,
    summary: 'Từ chỉ mốc thời gian (now, then, ago, last year, next month), trạng từ tần suất từ 100% đến 0% (always, usually, often, sometimes, occasionally, rarely, never) và các cụm chỉ chu kỳ (once a week, twice a day).',
    errorWarnings: [
      {
        wrong: "I go swimming two times a week.",
        right: "I go swimming twice a week. (once, twice, three times).",
        explanation: "Use 'once' (one time) and 'twice' (two times). From 3 onwards, use 'three times', 'four times'.",
        explanationVi: "Một lần là 'once', hai lần là 'twice'. Từ 3 lần trở lên dùng 'three times', 'four times'."
      }
    ],
    tips: [
      {
        tip: "Notice position of frequency adverbs: between the subject and the main verb (I ALWAYS drink water), but AFTER the verb to be (He is ALWAYS late).",
        tipVi: "Vị trí trạng từ tần suất: đứng trước động từ thường (I usually walk) nhưng đứng sau động từ to be (She is always happy)."
      }
    ],
    sections: [
      {
        title: 'Time Markers & Frequency',
        titleVi: 'Mốc thời gian & Mức độ thường xuyên',
        items: [
          { id: 'u51-ago', word: 'ago (two hours ago / a year ago)', ipa: '/əˈɡəʊ/', pos: 'adverb', meaningVi: 'cách đây (2 tiếng trước / 1 năm trước)', definitionEn: 'in the past from now', example: 'I got up four hours ago, at 6 o’clock.', exampleVi: 'Tôi đã thức dậy cách đây 4 tiếng, lúc 6 giờ sáng.' },
          { id: 'u51-frequency', word: 'always, usually, often, sometimes, rarely, never', ipa: '/ˈɔːlweɪz/ /ˈjuːʒuəli/ /ˈɒfn/', pos: 'adverb', meaningVi: 'luôn luôn, thường xuyên, thỉnh thoảng, hiếm khi, không bao giờ', definitionEn: 'adverbs showing how frequently something happens', example: 'It always snows in Russia in winter; it rarely snows in Florida.', exampleVi: 'Ở Nga mùa đông luôn có tuyết; ở Florida thì hiếm khi có tuyết.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-51-1',
        type: 'multiple_choice',
        instruction: 'How do you say "2 lần một tuần" in natural English?',
        instructionVi: 'Diễn đạt "2 lần một tuần" như thế nào?',
        question: 'John plays tennis ______ a week.',
        options: ['twice', 'two times', 'second', 'twiced'],
        correctAnswer: 'twice',
        explanation: 'We say "twice a week", not "two times a week".',
        explanationVi: 'Tiếng Anh chuẩn dùng "twice a week".'
      }
    ]
  },
  {
    id: 52,
    unitNumber: 52,
    title: 'Places',
    titleVi: 'Từ chỉ Vị trí & Phương hướng',
    category: 'grammar',
    categoryName: 'Words and grammar',
    pageNumber: 110,
    summary: 'Từ chỉ nơi chốn tổng quát (here, there, everywhere), giới từ in / at / on, vị trí chính xác (the top, middle, bottom, front, side, back, left, right), và trạng thái ở nhà / đi xa (at home, out, away, abroad).',
    errorWarnings: [
      {
        wrong: "She is in abroad.",
        right: "She is abroad. (no preposition)",
        explanation: "'Abroad' already means 'in or to a foreign country'. Do not add 'in'.",
        explanationVi: "'abroad' đã mang nghĩa là ở/ra nước ngoài rồi, KHÔNG thêm giới từ 'in'."
      }
    ],
    tips: [
      {
        tip: "Notice the difference: She's OUT (ra ngoài một lúc, ví dụ đi chợ), She's AWAY (đi vắng vài ngày, nghỉ mát), She's ABROAD (ở nước ngoài).",
        tipVi: "Phân biệt: OUT (ra ngoài chốc lát), AWAY (đi xa vài ngày/kỳ nghỉ), ABROAD (đang ở nước ngoài)."
      }
    ],
    sections: [
      {
        title: 'Positions & Location Words',
        titleVi: 'Vị trí & Nơi chốn',
        items: [
          { id: 'u52-positions', word: 'top / middle / bottom / front / back', ipa: '/tɒp/ /ˈmɪdl/ /ˈbɒtəm/', pos: 'noun', meaningVi: 'đỉnh / ở giữa / đáy / phía trước / phía sau', definitionEn: 'parts or locations of an object', example: 'The car is in the middle of the road.', exampleVi: 'Chiếc ô tô đang ở giữa đường.' },
          { id: 'u52-away-abroad', word: 'at home / out / away / abroad', ipa: '/əˈbrɔːd/', pos: 'phrase', meaningVi: 'ở nhà / ra ngoài / đi vắng / ở nước ngoài', definitionEn: 'states of physical location', example: "Is Mary at home? - No, she's abroad on business in Spain.", exampleVi: "Mary có ở nhà không? - Không, cô ấy đang công tác ở nước ngoài tại Tây Ban Nha." }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-52-1',
        type: 'multiple_choice',
        instruction: 'Is Lily here? No, she’s ______ but she’ll be back in five minutes.',
        instructionVi: 'Lily có ở đây không? Không, cô ấy ... nhưng 5 phút nữa sẽ quay lại.',
        question: "Is Lily here? - No, she's ______ but she’ll be back in five minutes.",
        options: ['out', 'abroad', 'away', 'there'],
        correctAnswer: 'out',
        explanation: '"out" is used when someone has left for a short time.',
        explanationVi: '"out" chỉ việc ra ngoài trong khoảng thời gian ngắn.'
      }
    ]
  },
  {
    id: 53,
    unitNumber: 53,
    title: 'Manner',
    titleVi: 'Cách thức: Tính từ & Trạng từ',
    category: 'grammar',
    categoryName: 'Words and grammar',
    pageNumber: 112,
    summary: 'Cách tạo và dùng trạng từ chỉ cách thức: fast (xe chạy fast, KHÔNG có fastly), slow -> slowly, loud -> loudly, quiet -> quietly, good -> well (bất quy tắc!), bad -> badly, và các cụm từ in a friendly way, the right/wrong way.',
    errorWarnings: [
      {
        wrong: "He drives very fastly.",
        right: "He drives very fast.",
        explanation: "'Fast' is both an adjective and an adverb. The word 'fastly' DOES NOT EXIST.",
        explanationVi: "'fast' vừa là tính từ vừa là trạng từ. Từ 'fastly' HOÀN TOÀN KHÔNG TỒN TẠI trong tiếng Anh."
      },
      {
        wrong: "She speaks English good.",
        right: "She speaks English well.",
        explanation: "'Good' is an adjective (good speaker). 'Well' is the adverb modifying the verb (speaks well).",
        explanationVi: "Bổ nghĩa cho động từ 'speaks' phải dùng trạng từ 'well', KHÔNG dùng tính từ 'good'."
      }
    ],
    tips: [
      {
        tip: "Remember: friendly is an adjective ending in -ly. To make it an adverb, say: 'He spoke in a friendly way.'",
        tipVi: "'friendly' (thân thiện) vốn là tính từ. Muốn biến thành trạng từ, ta dùng cụm: 'in a friendly way'."
      }
    ],
    sections: [
      {
        title: 'Adjectives vs Adverbs of Manner',
        titleVi: 'Tính từ đối chiếu Trạng từ',
        items: [
          { id: 'u53-fast-slow', word: 'fast / slowly', ipa: '/fɑːst/ /ˈsləʊli/', pos: 'adverb', meaningVi: 'nhanh / chậm chạp', definitionEn: 'high speed / low speed', example: 'This car goes very fast, but that old train travels slowly.', exampleVi: 'Chiếc xe hơi này chạy rất nhanh, nhưng đoàn tàu cũ kia lại chạy chầm chậm.' },
          { id: 'u53-good-well', word: 'good driver -> drives well', ipa: '/ɡʊd/ /wel/', pos: 'adverb', meaningVi: 'tài xế giỏi -> lái xe rất khéo/tốt', definitionEn: 'satisfactory or skilled execution', example: 'She is a good driver; she drives really well.', exampleVi: 'Cô ấy là một tay lái giỏi; cô ấy lái xe rất cẩn thận và an toàn.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-53-1',
        type: 'multiple_choice',
        instruction: 'Choose the correct adverb: "He is a good singer. He sings very ______."',
        instructionVi: 'Chọn trạng từ thích hợp: Anh ấy là ca sĩ giỏi. Anh ấy hát rất...',
        question: 'He is a good singer. He sings very ______.',
        options: ['well', 'good', 'goodly', 'better'],
        correctAnswer: 'well',
        explanation: 'The adverb of "good" is "well".',
        explanationVi: 'Trạng từ của "good" là "well".'
      }
    ]
  },
  {
    id: 54,
    unitNumber: 54,
    title: 'Common uncountable nouns',
    titleVi: 'Các danh từ không đếm được phổ biến',
    category: 'grammar',
    categoryName: 'Words and grammar',
    pageNumber: 114,
    summary: 'Quy tắc phân biệt danh từ đếm được (countable: apple, shoe, plate) vs không đếm được (uncountable: money, luggage, furniture, traffic, advice, information, news, accommodation, bread) và các đơn vị đo lường (a loaf of bread, a kilo of rice).',
    errorWarnings: [
      {
        wrong: "I need some advices and informations.",
        right: "I need some advice and information.",
        explanation: "Advice, information, furniture, luggage are ALWAYS uncountable and NEVER have an 's' at the end.",
        explanationVi: "Advice (lời khuyên), information (thông tin), furniture (đồ nội thất), luggage (hành lý) luôn là danh từ không đếm được, TUYỆT ĐỐI KHÔNG thêm đuôi 's'."
      },
      {
        wrong: "We need to buy some new furnitures.",
        right: "We need to buy some new furniture.",
        explanation: "Furniture never takes 's' and uses singular verbs: 'The furniture is modern'.",
        explanationVi: "'Furniture' không bao giờ có 's' và luôn đi với động từ số ít 'is'."
      }
    ],
    tips: [
      {
        tip: "To count uncountable food, use quantifying units: a loaf of bread, two litres of milk, a kilo of rice, a cup of coffee.",
        tipVi: "Để đếm danh từ không đếm được, dùng lượng từ: a loaf of bread (ổ bánh mì), a litre of milk (lít sữa), a piece of advice (một lời khuyên)."
      }
    ],
    sections: [
      {
        title: 'Uncountable Nouns in Everyday Life',
        titleVi: 'Các danh từ không đếm được thông dụng',
        items: [
          { id: 'u54-advice-info', word: 'advice / information / news', ipa: '/ədˈvaɪs/ /ˌɪnfəˈmeɪʃn/ /njuːz/', pos: 'noun', meaningVi: 'lời khuyên / thông tin / tin tức (không đếm được)', definitionEn: 'facts and guidance (never plural)', example: 'He gave me some useful advice and information about London.', exampleVi: 'Anh ấy cho tôi vài lời khuyên và thông tin hữu ích về thành phố London.' },
          { id: 'u54-traffic-luggage', word: 'traffic / luggage / furniture / accommodation', ipa: '/ˈtræfɪk/ /ˈlʌɡɪdʒ/ /ˈfɜːnɪtʃər/', pos: 'noun', meaningVi: 'giao thông / hành lý / đồ nội thất / chỗ ăn ở', definitionEn: 'collective uncountable concepts', example: 'Accommodation in the city centre is very expensive.', exampleVi: 'Chỗ ở tại trung tâm thành phố rất đắt đỏ.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-54-1',
        type: 'error_correction',
        instruction: 'Correct the sentence: "Can you give me an advice?"',
        instructionVi: 'Sửa lỗi sai: "Can you give me an advice?"',
        question: 'Which of the following is correct?',
        options: ['Can you give me some advice? / a piece of advice', 'Can you give me an advice?', 'Can you give me some advices?', 'Can you give an advices?'],
        correctAnswer: 'Can you give me some advice? / a piece of advice',
        explanation: 'Advice is uncountable: say "some advice" or "a piece of advice".',
        explanationVi: 'Advice là danh từ không đếm được, nói "some advice" hoặc "a piece of advice".'
      }
    ]
  },
  {
    id: 55,
    unitNumber: 55,
    title: 'Common adjectives 1: Good and bad things',
    titleVi: 'Tính từ thông dụng 1: Khen ngợi & Chê bai',
    category: 'grammar',
    categoryName: 'Words and grammar',
    pageNumber: 116,
    summary: 'Mức độ tính từ chỉ đồ vật: Tốt (good -> nice -> lovely -> great -> wonderful -> excellent) vs Xấu/Tệ hại (bad -> awful -> horrible -> dreadful -> terrible) và câu cảm thán How nice! / How awful! (không nói How bad!).',
    errorWarnings: [
      {
        wrong: "How bad! / How good!",
        right: "How awful! / How horrible! / How lovely! / How wonderful!",
        explanation: "In exclamations with 'How...', we use 'How awful!' or 'How horrible!', NEVER 'How bad!'.",
        explanationVi: "Trong câu cảm thán với 'How...', người bản xứ nói 'How awful!' (Kinh khủng thật!), 'How lovely!' (Đẹp quá!), KHÔNG nói 'How bad!'."
      }
    ],
    tips: [
      {
        tip: "Notice casual British response: 'That's not bad!' means 'That's good!'.",
        tipVi: "Trong giao tiếp thân mật của người Anh: 'That's not bad!' thực chất có nghĩa là 'Rất tốt đấy!'."
      }
    ],
    sections: [
      {
        title: 'Good and Bad Spectrum',
        titleVi: 'Thang đo khen ngợi và chê',
        items: [
          { id: 'u55-good', word: 'nice -> lovely -> wonderful -> excellent', ipa: '/naɪs/ /ˈlʌvli/ /ˈwʌndəfl/ /ˈeksələnt/', pos: 'adjective', meaningVi: 'đẹp, dễ thương -> tuyệt vời -> xuất sắc', definitionEn: 'increasing degrees of goodness', example: 'We had a wonderful view of the sea from an excellent hotel.', exampleVi: 'Chúng tôi có một góc nhìn tuyệt đẹp ra biển từ một khách sạn xuất sắc.' },
          { id: 'u55-bad', word: 'bad -> awful -> horrible -> dreadful -> terrible', ipa: '/bæd/ /ˈɔːfl/ /ˈhɒrəbl/ /ˈdredfl/', pos: 'adjective', meaningVi: 'tệ -> tồi tệ -> khủng khiếp -> kinh hoàng', definitionEn: 'very bad things and situations', example: 'The weather was awful and the traffic was terrible.', exampleVi: 'Thời tiết thật tồi tệ và giao thông thì kinh khủng.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-55-1',
        type: 'multiple_choice',
        instruction: 'What exclamation expresses sympathy when someone says they have 3 exams on the same day?',
        instructionVi: 'Dùng câu cảm thán nào khi nghe tin bạn mình phải thi 3 môn trong một ngày?',
        question: 'I have three exams on the same day! - Oh, ______!',
        options: ['how awful', 'how bad', 'how nice', 'how good'],
        correctAnswer: 'how awful',
        explanation: 'We say "How awful!" or "How horrible!" to express sympathy.',
        explanationVi: 'Bày tỏ sự chia sẻ với hoàn cảnh tệ hại ta thốt lên: "How awful!" (Tệ thật đấy!).'
      }
    ]
  },
  {
    id: 56,
    unitNumber: 56,
    title: 'Common adjectives 2: People',
    titleVi: 'Tính từ thông dụng 2: Miêu tả tính cách con người',
    category: 'grammar',
    categoryName: 'Words and grammar',
    pageNumber: 118,
    summary: 'Tính cách tích cực (nice, wonderful, kind, lovely, easy-going, intelligent), tiêu cực (horrible, difficult, stupid, selfish), tính nết trẻ em (good / well-behaved vs naughty) và giới từ (kind TO me, nice OF you).',
    errorWarnings: [
      {
        wrong: "Mary is very wonderful.",
        right: "Mary is wonderful. / Mary is very nice.",
        explanation: "'Wonderful' is already an extreme/absolute adjective, so we do not usually modify it with 'very'.",
        explanationVi: "'Wonderful' là tính từ tuyệt đối mạnh mẽ (tuyệt vời), do đó không dùng kèm 'very'. Hãy nói 'She is wonderful' hoặc 'She is very nice'."
      }
    ],
    tips: [
      {
        tip: "Notice prepositions: Someone is kind/nice/horrible TO me. BUT: It was nice/kind OF you to help me.",
        tipVi: "Phân biệt giới từ: Ai đó tốt bụng/tồi tệ VỚI tôi -> kind/horrible TO me. Nhưng: Thật tốt bụng KHI BẠN làm gì -> It is kind OF you."
      }
    ],
    sections: [
      {
        title: 'Personality Adjectives & Prepositions',
        titleVi: 'Tính từ nhân cách & Giới từ đi kèm',
        items: [
          { id: 'u56-kind', word: 'kind / easy-going / intelligent', ipa: '/kaɪnd/ /ˌiːziˈɡəʊɪŋ/ /ɪnˈtelɪdʒənt/', pos: 'adjective', meaningVi: 'tốt bụng / dễ tính, hòa đồng / thông minh, sáng dạ', definitionEn: 'caring / relaxed / clever with high intellect', example: 'My friend Neil is very easy-going and generous.', exampleVi: 'Bạn Neil của tôi là người rất dễ tính và hào phóng.' },
          { id: 'u56-selfish', word: 'selfish / horrible / difficult', ipa: '/ˈselfɪʃ/ /ˈhɒrəbl/', pos: 'adjective', meaningVi: 'ích kỷ (chỉ nghĩ đến mình) / đáng sợ, cay nghiệt / khó tính', definitionEn: 'caring only about oneself / very unkind', example: 'I don’t like selfish people who think only of themselves.', exampleVi: 'Tôi không thích những kẻ ích kỷ chỉ biết nghĩ cho bản thân mình.' },
          { id: 'u56-naughty', word: 'well-behaved vs naughty', ipa: '/ˌwel bɪˈheɪvd/ /ˈnɔːti/', pos: 'adjective', meaningVi: 'ngoan ngoãn, cư xử đúng mực vs nghịch ngợm, hư đốn', definitionEn: 'behaving well / behaving badly (of children)', example: 'Tim is well-behaved, but his little brother is naughty.', exampleVi: 'Tim rất ngoan, nhưng em trai cậu lại rất nghịch ngợm.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-56-1',
        type: 'multiple_choice',
        instruction: 'What adjective describes a person who only thinks of themselves?',
        instructionVi: 'Tính từ nào miêu tả người chỉ nghĩ đến bản thân mình?',
        question: 'Someone who thinks only of themselves is ______.',
        options: ['selfish', 'easy-going', 'well-behaved', 'kind'],
        correctAnswer: 'selfish',
        explanation: 'Selfish means caring only about oneself.',
        explanationVi: 'Selfish có nghĩa là ích kỷ.'
      }
    ]
  },
  {
    id: 57,
    unitNumber: 57,
    title: 'Words and prepositions',
    titleVi: 'Từ đi kèm giới từ cố định',
    category: 'grammar',
    categoryName: 'Words and grammar',
    pageNumber: 120,
    summary: 'Các động từ bắt buộc đi với giới từ: listen TO, wait FOR, ask FOR, pay FOR, belong TO, think ABOUT, thank FOR, apologise FOR. Tính từ: good/bad AT, interested IN, afraid OF, proud OF, used TO.',
    errorWarnings: [
      {
        wrong: "She is happy for her success.",
        right: "She is happy about her success. / I am proud of you.",
        explanation: "Notice the difference: happy ABOUT a result/event; proud OF a person; good AT a subject.",
        explanationVi: "Hạnh phúc về việc gì: happy about something. Tự hào về ai: proud of someone. Giỏi môn gì: good at maths."
      }
    ],
    tips: [
      {
        tip: "Rule: Prepositions are always followed by a noun OR the -ing form of a verb: 'Joe is good at tennis' / 'Joe is good at playing tennis'.",
        tipVi: "Quy tắc vàng: Sau giới từ luôn là danh từ HOẶC động từ đuôi -ING (ví dụ: good at playing piano, interested in reading)."
      }
    ],
    sections: [
      {
        title: 'Verb + Preposition & Adjective + Preposition',
        titleVi: 'Động từ & Tính từ đi liền giới từ',
        items: [
          { id: 'u57-verb-prep', word: 'listen to / wait for / belong to', ipa: '/ˈlɪsn tuː/', pos: 'phrase', meaningVi: 'lắng nghe / chờ đợi / thuộc về ai', definitionEn: 'fixed verb and preposition combinations', example: 'This book belongs to Sarah Smith. She is waiting for the bus.', exampleVi: 'Cuốn sách này thuộc về Sarah Smith. Cô ấy đang đợi xe buýt.' },
          { id: 'u57-adj-prep', word: 'good at / interested in / proud of / afraid of', ipa: '/ɡʊd æt/', pos: 'phrase', meaningVi: 'giỏi về / quan tâm, thích thú / tự hào về / sợ hãi', definitionEn: 'adjectives followed by specific prepositions', example: "I'm good at geography, interested in history, and afraid of mice.", exampleVi: "Tôi giỏi môn địa lý, thích thú với lịch sử, và sợ chuột." }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-57-1',
        type: 'multiple_choice',
        instruction: 'Choose the correct preposition: "Lucy is very proud ______ winning a gold medal."',
        instructionVi: 'Chọn giới từ đi với proud: Lucy rất tự hào về tấm huy chương vàng.',
        question: 'Lucy is proud ______ winning a gold medal.',
        options: ['of', 'about', 'at', 'in'],
        correctAnswer: 'of',
        explanation: 'We say "proud of" something/someone.',
        explanationVi: 'Đi với proud luôn là giới từ "of": proud of.'
      }
    ]
  },
  {
    id: 58,
    unitNumber: 58,
    title: 'Prefixes',
    titleVi: 'Tiền tố trong tiếng Anh',
    category: 'grammar',
    categoryName: 'Words and grammar',
    pageNumber: 122,
    summary: 'Các tiền tố phổ biến tạo từ mới: ex- (nguyên, cựu: ex-wife, ex-president), half- (nửa: half-price, half-hour), in-/im- (phủ định: informal, impossible, impolite), non- (không: non-smoking), pre- (trước: pre-school, pre-heat), re- (lại: redo, rewrite), un- (trái ngược: unhappy, unsafe).',
    errorWarnings: [
      {
        wrong: "unpossible / inhappy",
        right: "impossible / unhappy",
        explanation: "Words starting with 'p' or 'm' often take 'im-' (impossible, impolite). 'Happy' takes 'un-' (unhappy).",
        explanationVi: "Các từ bắt đầu bằng âm 'p' hoặc 'm' thường dùng tiền tố 'im-' (impossible, impolite). 'happy' dùng 'unhappy'."
      }
    ],
    tips: [
      {
        tip: "Sometimes words with prefixes have a hyphen (-), e.g., a half-hour journey, ex-president; and sometimes they don't, e.g., impossible, unsafe.",
        tipVi: "Một số tiền tố có dấu gạch nối (ex-wife, half-price), một số khác viết liền khối (rewrite, impossible, unhappy)."
      }
    ],
    sections: [
      {
        title: 'Common Prefixes & Meaning',
        titleVi: 'Bảng các tiền tố và ý nghĩa',
        items: [
          { id: 'u58-ex', word: 'ex- (ex-wife, ex-president)', ipa: '/eks/', pos: 'phrase', meaningVi: 'cựu, trước đây (nay không còn nữa)', definitionEn: 'was but now isn’t', example: 'An ex-wife is a wife who is now divorced.', exampleVi: 'Vợ cũ là người vợ mà nay đã ly hôn.' },
          { id: 'u58-un-im', word: 'un- / im- (impossible, unsafe, unhappy)', ipa: '/ʌn/ /ɪm/', pos: 'phrase', meaningVi: 'phủ định, không, trái ngược', definitionEn: 'meaning NOT or opposite', example: 'If something is impossible, you cannot do it.', exampleVi: 'Nếu việc gì là bất khả thi (impossible), bạn không thể làm được.' },
          { id: 'u58-re', word: 're- (redo, rewrite, repaint)', ipa: '/riː/', pos: 'phrase', meaningVi: 'làm lại lần nữa', definitionEn: 'do again', example: 'To rewrite something is to write it a second time.', exampleVi: 'Rewrite một bài viết nghĩa là viết lại nó lần thứ hai.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-58-1',
        type: 'multiple_choice',
        instruction: 'What is the opposite of "possible"?',
        instructionVi: 'Từ trái nghĩa của "possible" gắn tiền tố nào?',
        question: 'Opposite of possible is ______.',
        options: ['impossible', 'unpossible', 'inpossible', 'dispossible'],
        correctAnswer: 'impossible',
        explanation: 'We add "im-" before possible to make impossible.',
        explanationVi: 'Possible đi với tiền tố "im-" tạo thành "impossible".'
      }
    ]
  },
  {
    id: 59,
    unitNumber: 59,
    title: 'Suffixes',
    titleVi: 'Hậu tố cấu tạo từ',
    category: 'grammar',
    categoryName: 'Words and grammar',
    pageNumber: 124,
    summary: 'Các hậu tố biến đổi từ loại: -er/-or (người/máy móc: worker, swimmer, instructor, cooker, calculator), -ful (đầy, có tính: useful, beautiful), -less (không có, vô: useless, endless), -ly (trạng từ: quickly, happily), -ness (danh từ trừu tượng: happiness, sadness), -y (tính từ: sandy, sunny, rainy).',
    errorWarnings: [
      {
        wrong: "A cooker is a person who cooks.",
        right: "A cook is a person who cooks. A cooker is the kitchen machine/stove.",
        explanation: "CRITICAL: A 'cook' is the person (He is a wonderful cook). A 'cooker' is the machine in the kitchen (This cooker costs £500).",
        explanationVi: "LƯU Ý CỰC KỲ QUAN TRỌNG: 'cook' là đầu bếp (người nấu ăn). Còn 'cooker' là chiếc bếp gas/bếp điện trong nhà bếp!"
      }
    ],
    tips: [
      {
        tip: "Suffixes show the word class: -ness makes abstract nouns from adjectives (happy -> happiness); -ful makes adjectives (use -> useful).",
        tipVi: "Hậu tố giúp nhận diện từ loại: -ness tạo danh từ trừu tượng (sadness, happiness), -ful tạo tính từ hữu ích (useful, beautiful)."
      }
    ],
    sections: [
      {
        title: 'Suffixes for Nouns, Adjectives & Adverbs',
        titleVi: 'Hậu tố tạo Danh từ, Tính từ & Trạng từ',
        items: [
          { id: 'u59-er-or', word: '-er / -or (worker, instructor, calculator)', ipa: '/ər/', pos: 'noun', meaningVi: 'chỉ người làm nghề hoặc đồ vật/máy móc', definitionEn: 'person who does an action or machine that does a task', example: 'She is a very good swimmer; he is an English instructor.', exampleVi: 'Cô ấy là một tay bơi giỏi; anh ấy là giảng viên tiếng Anh.' },
          { id: 'u59-ful-less', word: '-ful vs -less (useful vs useless, endless)', ipa: '/fl/ /ləs/', pos: 'adjective', meaningVi: 'đầy tính hữu ích vs vô dụng / bất tận', definitionEn: 'full of / without', example: 'This dictionary is very useful, but that broken pen is useless.', exampleVi: 'Cuốn từ điển này rất hữu ích, còn chiếc bút hỏng này thì vô dụng.' },
          { id: 'u59-ness', word: '-ness (happiness, sadness)', ipa: '/nəs/', pos: 'noun', meaningVi: 'hậu tố tạo danh từ trừu tượng (sự hạnh phúc/nỗi buồn)', definitionEn: 'makes an abstract noun from an adjective', example: 'The mother was smiling with happiness.', exampleVi: 'Người mẹ đang mỉm cười với niềm hạnh phúc ngập tràn.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-59-1',
        type: 'multiple_choice',
        instruction: 'What is a person who swims in a swimming competition?',
        instructionVi: 'Người bơi trong cuộc thi bơi lội gọi là gì?',
        question: 'A person who swims is a ______.',
        options: ['swimmer', 'swimor', 'swimmist', 'swimming person'],
        correctAnswer: 'swimmer',
        explanation: 'Add -er to swim (doubling m): swimmer.',
        explanationVi: 'Thêm đuôi -er tạo thành danh từ swimmer (vận động viên bơi lội).'
      }
    ]
  },
  {
    id: 60,
    unitNumber: 60,
    title: 'Words you may confuse',
    titleVi: 'Các từ dễ gây nhầm lẫn',
    category: 'grammar',
    categoryName: 'Words and grammar',
    pageNumber: 126,
    summary: 'Các cặp từ dễ gây nhầm lẫn kinh điển: Phát âm giống nhau (quite vs quiet, lose vs loose, fell vs felt, cook vs cooker); Ý nghĩa tương tự (lend = cho mượn vs borrow = đi mượn, check vs control); Mốc thời gian (afternoon vs evening vs night).',
    errorWarnings: [
      {
        wrong: "Can I lend your dictionary? / Rita, please borrow me £10.",
        right: "Can I borrow your dictionary? / Rita, please lend me £10.",
        explanation: "LEND = give something for a time (give to someone). BORROW = receive something for a time (get from someone).",
        explanationVi: "LEND là cho người khác mượn (lend someone money). BORROW là mình đi mượn của ai về (borrow something from someone)."
      },
      {
        wrong: "Quiet is quite / Cook is cooker",
        right: "quite /kwaɪt/ = khá, tương đối; quiet /ˈkwaɪət/ = yên tĩnh, im lặng.",
        explanation: "Check the spelling and pronunciation: quite /kwaɪt/ vs quiet /ˈkwaɪət/.",
        explanationVi: "'quite' /kwaɪt/ là khá/tương đối (quite good). 'quiet' /ˈkwaɪət/ là yên ắng (be quiet!)."
      }
    ],
    tips: [
      {
        tip: "Notice evening vs night: In English, afternoon is 12-6pm; evening is 6-9 or 10pm; night is after 9 or 10pm when people sleep.",
        tipVi: "Quy ước thời gian: afternoon là 12h-18h; evening là 18h-21h/22h; night là sau 21h/22h lúc mọi người đi ngủ."
      }
    ],
    sections: [
      {
        title: 'Similar Sounds & Confused Pairs',
        titleVi: 'Âm thanh tương tự & Cặp từ nhầm lẫn',
        items: [
          { id: 'u60-quite-quiet', word: 'quite vs quiet', ipa: '/kwaɪt/ vs /ˈkwaɪət/', pos: 'phrase', meaningVi: 'khá là (quite good) vs yên tĩnh, im lặng (be quiet)', definitionEn: 'quite = moderately; quiet = silent without noise', example: 'This book is quite good. My bedroom is very quiet.', exampleVi: 'Cuốn sách này khá hay. Phòng ngủ của tôi rất yên tĩnh.' },
          { id: 'u60-lose-loose', word: 'lose vs loose', ipa: '/luːz/ vs /luːs/', pos: 'phrase', meaningVi: 'đánh mất (động từ) vs lỏng lẻo, rộng thùng thình (tính từ)', definitionEn: 'lose = not find; loose = not tight fitting', example: "Why do I always lose my keys? These trousers are very loose.", exampleVi: "Sao tôi cứ đánh mất chìa khóa thế nhỉ? Chiếc quần này rộng quá." },
          { id: 'u60-lend-borrow', word: 'lend vs borrow', ipa: '/lend/ vs /ˈbɒrəʊ/', pos: 'verb', meaningVi: 'cho mượn (đưa đi) vs mượn (nhận về)', definitionEn: 'lend = give temporarily; borrow = get temporarily', example: 'Will you lend me your bicycle? Yes, you can borrow it.', exampleVi: 'Bạn cho tôi mượn xe đạp nhé? Được chứ, bạn cứ mượn đi.' },
          { id: 'u60-cook-cooker', word: 'cook vs cooker', ipa: '/kʊk/ vs /ˈkʊkər/', pos: 'noun', meaningVi: 'người nấu ăn, đầu bếp vs bếp đun, bếp lò', definitionEn: 'cook = person who prepares food; cooker = appliance', example: 'He is a very good cook. This electric cooker costs £500.', exampleVi: 'Anh ấy là người nấu ăn rất ngon. Chiếc bếp điện này có giá £500.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-60-1',
        type: 'multiple_choice',
        instruction: 'Choose lend or borrow: "Can you ______ me £5 until tomorrow?"',
        instructionVi: 'Chọn lend hay borrow: Bạn có thể cho tôi mượn 5 bảng đến ngày mai không?',
        question: 'Can you ______ me £5 until tomorrow?',
        options: ['lend', 'borrow', 'check', 'lose'],
        correctAnswer: 'lend',
        explanation: 'You ask the person to give/lend to you: "lend me".',
        explanationVi: 'Nhờ người khác cho mình mượn dùng "lend me".'
      },
      {
        id: 'ex-60-2',
        type: 'multiple_choice',
        instruction: 'Which word means "silent, without noise"?',
        instructionVi: 'Từ nào có nghĩa là yên tĩnh, không ồn ào?',
        question: 'Please be ______; the baby is sleeping.',
        options: ['quiet', 'quite', 'quit', 'quitting'],
        correctAnswer: 'quiet',
        explanation: 'Quiet /ˈkwaɪət/ means silent.',
        explanationVi: 'Quiet là yên tĩnh, không ồn ào.'
      }
    ]
  }
];
