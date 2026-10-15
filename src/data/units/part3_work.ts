import { UnitData } from '../../types';

export const PART3_WORK_UNITS: UnitData[] = [
  {
    id: 14,
    unitNumber: 14,
    title: 'Jobs',
    titleVi: 'Nghề nghiệp & Nơi làm việc',
    category: 'work',
    categoryName: 'School and workplace',
    pageNumber: 34,
    summary: 'Từ vựng các ngành nghề phổ biến (doctor, nurse, engineer, teacher, secretary, waiter), nơi làm việc (hospital, school, restaurant, factory, office, at home), và mẫu câu hỏi What do you do? / What is your job?.',
    errorWarnings: [
      {
        wrong: "I am teacher.",
        right: "I am a teacher.",
        explanation: "Always use 'a' or 'an' before singular professions: 'a doctor', 'an engineer', 'a waiter'.",
        explanationVi: "Luôn dùng mạo từ 'a' hoặc 'an' trước danh từ chỉ nghề nghiệp số ít: 'a teacher', 'an engineer'."
      }
    ],
    tips: [
      {
        tip: "When asking someone about their occupation, you can say: 'What's your job?' or 'What do you do?'.",
        tipVi: "Có hai cách thông dụng để hỏi nghề nghiệp: 'What's your job?' hoặc 'What do you do?'."
      }
    ],
    sections: [
      {
        title: 'Common Professions',
        titleVi: 'Các nghề nghiệp thường gặp',
        items: [
          { id: 'u14-doctor', word: 'doctor / nurse', ipa: '/ˈdɒktər/ /nɜːs/', pos: 'noun', meaningVi: 'bác sĩ / y tá, điều dưỡng', definitionEn: 'medical professionals working in a hospital or clinic', example: 'A doctor and nurse work in a hospital treating sick people.', exampleVi: 'Bác sĩ và y tá làm việc tại bệnh viện chăm sóc bệnh nhân.' },
          { id: 'u14-teacher', word: 'teacher', ipa: '/ˈtiːtʃər/', pos: 'noun', meaningVi: 'giáo viên, thầy cô giáo', definitionEn: 'person who helps students learn in a school or college', example: 'A teacher works in a school, college or university.', exampleVi: 'Giáo viên làm việc tại trường học, cao đẳng hoặc đại học.' },
          { id: 'u14-engineer', word: 'engineer', ipa: '/ˌendʒɪˈnɪər/', pos: 'noun', meaningVi: 'kỹ sư', definitionEn: 'person who designs or builds machines, roads, or bridges', example: "She's an engineer. She builds roads and bridges.", exampleVi: "Cô ấy là một kỹ sư. Cô ấy xây dựng đường sá và cầu cống." },
          { id: 'u14-mechanic', word: 'mechanic', ipa: '/məˈkænɪk/', pos: 'noun', meaningVi: 'thợ sửa xe, thợ cơ khí', definitionEn: 'person whose job is repairing machines and cars', example: 'The mechanic is repairing my broken car.', exampleVi: 'Người thợ máy đang sửa chiếc xe hỏng của tôi.' },
          { id: 'u14-waiter', word: 'waiter / waitress', ipa: '/ˈweɪtər/', pos: 'noun', meaningVi: 'nam/nữ nhân viên phục vụ bàn', definitionEn: 'person who serves food and drinks in a restaurant', example: "Ben is a waiter. He works in an Italian restaurant.", exampleVi: "Ben là phục vụ bàn. Anh ấy làm việc trong một nhà hàng Ý." },
          { id: 'u14-secretary', word: 'secretary', ipa: '/ˈsekrətri/', pos: 'noun', meaningVi: 'thư ký', definitionEn: 'person in an office who types letters and keeps records', example: 'A secretary works in an office answering calls and emails.', exampleVi: 'Thư ký làm việc trong văn phòng, trả lời điện thoại và email.' },
          { id: 'u14-farmer', word: 'farmer', ipa: '/ˈfɑːmər/', pos: 'noun', meaningVi: 'nông dân', definitionEn: 'someone who owns or manages a farm', example: 'A farmer works on a farm raising animals and crops.', exampleVi: 'Người nông dân làm việc tại nông trại, chăn nuôi và trồng trọt.' },
          { id: 'u14-hairdresser', word: 'hairdresser', ipa: '/ˈheəˌdresər/', pos: 'noun', meaningVi: 'thợ làm tóc', definitionEn: 'person who cuts and styles people’s hair', example: 'I want to work in a beauty salon as a hairdresser.', exampleVi: 'Tôi muốn làm việc tại một thẩm mỹ viện với tư cách là thợ làm tóc.' }
        ]
      },
      {
        title: 'Workplace Expressions',
        titleVi: 'Mẫu câu về công việc',
        items: [
          { id: 'u14-what-do-you-do', word: 'What do you do?', ipa: '/wɒt də juː duː/', pos: 'expression', meaningVi: 'Bạn làm nghề gì?', definitionEn: 'friendly question asking for profession', example: "What do you do? - I'm an architect.", exampleVi: "Bạn làm nghề gì? - Tôi là kiến trúc sư." },
          { id: 'u14-work-from-home', word: 'work at / from home', ipa: '/wɜːk frəm həʊm/', pos: 'phrase', meaningVi: 'làm việc tại nhà', definitionEn: 'doing your job remotely from house', example: "I'm a writer. I work from home.", exampleVi: "Tôi là nhà văn. Tôi làm việc tại nhà." }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-14-1',
        type: 'matching',
        instruction: 'Where do they work? Match the person with their workplace.',
        instructionVi: 'Nối nghề nghiệp với nơi làm việc tương ứng.',
        question: 'Where does a doctor work?',
        options: ['in a hospital', 'in a restaurant', 'on a bus', 'in a beauty salon'],
        correctAnswer: 'in a hospital',
        explanation: 'A doctor works in a hospital or clinic.',
        explanationVi: 'Bác sĩ làm việc tại bệnh viện (hospital).'
      },
      {
        id: 'ex-14-2',
        type: 'fill_blank',
        instruction: 'Complete the sentence: "She’s an ______; she builds roads and bridges."',
        instructionVi: 'Điền tên nghề nghiệp: Xây dựng đường sá và cầu cống.',
        question: 'She’s an ______; she builds roads and bridges.',
        options: ['engineer', 'mechanic', 'teacher', 'nurse'],
        correctAnswer: 'engineer',
        explanation: 'An engineer designs and builds infrastructure like bridges.',
        explanationVi: 'Kỹ sư (engineer) thiết kế và xây dựng cầu đường.'
      }
    ]
  },
  {
    id: 15,
    unitNumber: 15,
    title: 'At school and university',
    titleVi: 'Tại trường học & Đại học',
    category: 'work',
    categoryName: 'School and workplace',
    pageNumber: 36,
    summary: 'Các môn học (maths, physics, biology, history, geography, ICT), đồ dùng học tập (textbook, ruler, pencil sharpener, rubber) và thi cử (take / pass / fail an exam, do homework).',
    errorWarnings: [
      {
        wrong: "I make my homeworks every day.",
        right: "I do my homework every day.",
        explanation: "Collocation: 'do homework' (NOT make homework). Homework is uncountable, so never say 'homeworks'.",
        explanationVi: "Làm bài tập về nhà dùng 'do homework', KHÔNG dùng 'make'. Từ 'homework' là danh từ không đếm được, KHÔNG thêm s."
      }
    ],
    tips: [
      {
        tip: "Notice exam collocations: take / do an exam (dự thi), pass an exam (thi đỗ), fail an exam (thi trượt), get a degree (nhận bằng đại học).",
        tipVi: "Các cụm từ về thi cử: do/take an exam (đi thi), pass an exam (đỗ kỳ thi), fail an exam (trượt kỳ thi), get a degree (nhận bằng tốt nghiệp)."
      }
    ],
    sections: [
      {
        title: 'School & University Subjects',
        titleVi: 'Các môn học',
        items: [
          { id: 'u15-maths', word: 'maths / physics / chemistry', ipa: '/mæθs/ /ˈfɪzɪks/ /ˈkemɪstri/', pos: 'noun', meaningVi: 'toán học / vật lý / hóa học', definitionEn: 'natural science and numeracy subjects', example: 'A maths teacher teaches maths, calculations, and formulas.', exampleVi: 'Giáo viên toán dạy các công thức và phép tính.' },
          { id: 'u15-history', word: 'history / geography / biology', ipa: '/ˈhɪstri/ /dʒiˈɒɡrəfi/ /baɪˈɒlədʒi/', pos: 'noun', meaningVi: 'lịch sử / địa lý / sinh học', definitionEn: 'study of the past / countries / living things', example: 'In biology, you study animals and plants.', exampleVi: 'Trong môn sinh học, bạn tìm hiểu về động thực vật.' },
          { id: 'u15-ict', word: 'ICT (Information and Communication Technology)', ipa: '/ˌaɪ siː ˈtiː/', pos: 'noun', meaningVi: 'tin học / công nghệ thông tin', definitionEn: 'study of computers and digital systems', example: 'In ICT class we learn how to use computers.', exampleVi: 'Trong giờ tin học chúng tôi học cách sử dụng máy tính.' },
          { id: 'u15-pe', word: 'PE (Physical Education)', ipa: '/ˌpiː ˈiː/', pos: 'noun', meaningVi: 'môn thể dục', definitionEn: 'sport and physical exercise at school', example: 'We play sports in PE lessons.', exampleVi: 'Chúng tôi chơi thể thao trong tiết thể dục.' }
        ]
      },
      {
        title: 'Classroom Objects & Exams',
        titleVi: 'Đồ dùng học tập & Thi cử',
        items: [
          { id: 'u15-textbook', word: 'textbook / notebook', ipa: '/ˈtekstbʊk/ /ˈnəʊtbʊk/', pos: 'noun', meaningVi: 'sách giáo khoa / quyển vở ghi chép', definitionEn: 'book used for study / book of blank paper for notes', example: 'Open your textbook to page 36.', exampleVi: 'Hãy mở sách giáo khoa trang 36.' },
          { id: 'u15-ruler', word: 'ruler / rubber (eraser)', ipa: '/ˈruːlər/ /ˈrʌbər/', pos: 'noun', meaningVi: 'cây thước kẻ / cục tẩy', definitionEn: 'tool for measuring straight lines / erasing pencil marks', example: 'Use a ruler to draw straight lines.', exampleVi: 'Dùng thước kẻ để vẽ các đường thẳng.' },
          { id: 'u15-pass-exam', word: 'pass / fail an exam', ipa: '/pɑːs ən ɪɡˈzæm/', pos: 'phrase', meaningVi: 'thi đỗ / thi trượt kỳ thi', definitionEn: 'succeed / not succeed in a test', example: 'You hope to pass your exams. You don’t want to fail.', exampleVi: 'Bạn hy vọng sẽ đỗ kỳ thi. Chắc chắn bạn không muốn thi trượt.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-15-1',
        type: 'error_correction',
        instruction: 'Correct the error: "After dinner, I always make my homework."',
        instructionVi: 'Sửa lỗi sai: "After dinner, I always make my homework."',
        question: 'Which verb goes with homework?',
        options: ['do', 'make', 'create', 'write'],
        correctAnswer: 'do',
        explanation: 'We always "do homework", never "make homework".',
        explanationVi: 'Luôn dùng cụm từ "do homework".'
      }
    ]
  },
  {
    id: 16,
    unitNumber: 16,
    title: 'Communications',
    titleVi: 'Liên lạc & Công nghệ viễn thông',
    category: 'work',
    categoryName: 'School and workplace',
    pageNumber: 38,
    summary: 'Từ vựng thư tín (letter, stamp, envelope, address), thiết bị máy tính - Internet (laptop, screen, keyboard, mouse, memory stick) và điện thoại (phone call, voicemail, text message).',
    errorWarnings: [
      {
        wrong: "What is your email? - moll at cup dot com (written moll@cup.com)",
        right: "Spoken: moll at cup dot com",
        explanation: "Remember: '@' is pronounced 'at' and '.' in an email or web address is pronounced 'dot'.",
        explanationVi: "Trong địa chỉ email: ký tự '@' đọc là 'at', còn dấu chấm '.' đọc là 'dot'."
      }
    ],
    tips: [
      {
        tip: "When reading phone numbers in English, '0' is usually pronounced 'oh' or 'zero'. Double digits are read as 'double five', 'double three'.",
        tipVi: "Khi đọc số điện thoại bằng tiếng Anh, số 0 đọc là 'oh', hai số giống nhau đọc là 'double' (ví dụ 55 đọc là double five)."
      }
    ],
    sections: [
      {
        title: 'Letters & Postal system',
        titleVi: 'Thư từ & Bưu điện',
        items: [
          { id: 'u16-letter', word: 'letter / envelope / stamp', ipa: '/ˈletər/ /ˈenvələʊp/ /stæmp/', pos: 'noun', meaningVi: 'lá thư / phong bì thư / con tem', definitionEn: 'written message sent in a paper cover with postage', example: "Don't forget to put a stamp on the envelope before posting the letter.", exampleVi: "Đừng quên dán tem lên phong bì trước khi gửi thư nhé." },
          { id: 'u16-letter-box', word: 'letter box / address', ipa: '/ˈletə bɒks/ /əˈdres/', pos: 'noun', meaningVi: 'hòm thư bưu điện / địa chỉ gửi đến', definitionEn: 'box in the street for posting letters / details of where someone lives', example: 'Post the letter in the red letter box.', exampleVi: 'Hãy bỏ lá thư vào thùng thư màu đỏ ngoài phố.' }
        ]
      },
      {
        title: 'Computer, Internet & Phones',
        titleVi: 'Máy tính, Mạng Internet & Điện thoại',
        items: [
          { id: 'u16-laptop', word: 'computer / laptop / keyboard / mouse', ipa: '/kəmˈpjuːtər/ /ˈlæptɒp/', pos: 'noun', meaningVi: 'máy vi tính / máy tính xách tay / bàn phím / chuột máy tính', definitionEn: 'electronic devices for working and browsing', example: 'I type my reports using a keyboard and mouse on my laptop.', exampleVi: 'Tôi gõ báo cáo bằng bàn phím và chuột trên máy tính xách tay.' },
          { id: 'u16-memory-stick', word: 'memory stick / screen', ipa: '/ˈmeməri stɪk/ /skriːn/', pos: 'noun', meaningVi: 'ổ nhớ USB / màn hình', definitionEn: 'small USB storage device / display surface', example: 'Save your files onto the memory stick.', exampleVi: 'Lưu các tệp của bạn vào chiếc USB này.' },
          { id: 'u16-text-message', word: 'send a text / phone call', ipa: '/send ə tekst/', pos: 'phrase', meaningVi: 'nhắn tin điện thoại / gọi điện thoại', definitionEn: 'send SMS message / make a telephone call', example: "He's not answering; I'll leave a voicemail and send him a text.", exampleVi: "Anh ấy không nhấc máy; tôi sẽ để lại lời nhắn thoại và gửi tin nhắn cho anh ấy." }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-16-1',
        type: 'multiple_choice',
        instruction: 'How do you say "user@cup.com" in English?',
        instructionVi: 'Đọc địa chỉ "user@cup.com" như thế nào?',
        question: 'How is "user@cup.com" read aloud?',
        options: ['user at cup dot com', 'user address cup point com', 'user email cup dot com', 'user circle cup period com'],
        correctAnswer: 'user at cup dot com',
        explanation: '@ is pronounced "at" and . is pronounced "dot".',
        explanationVi: '@ đọc là "at" và dấu chấm đọc là "dot".'
      }
    ]
  }
];
