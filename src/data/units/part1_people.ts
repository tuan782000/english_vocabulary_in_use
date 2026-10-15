import { UnitData } from '../../types';

export const PART1_PEOPLE_UNITS: UnitData[] = [
  {
    id: 1,
    unitNumber: 1,
    title: 'The family',
    titleVi: 'Gia đình & Họ hàng',
    category: 'people',
    categoryName: 'People',
    pageNumber: 8,
    summary: 'Học các từ vựng về thành viên gia đình, cây gia phả (family tree), họ hàng và các mẫu câu hỏi thăm về gia đình.',
    errorWarnings: [
      {
        wrong: "our/their wifes",
        right: "our/their wives",
        explanation: "The plural of wife is wives (singular: my wife, his wife; plural: their wives).",
        explanationVi: "Danh từ số nhiều của 'wife' là 'wives' (bỏ fe thêm ves), ví dụ: 'their wives'."
      }
    ],
    tips: [
      {
        tip: "Draw your own family tree in your notebook and label each person with their relation to you in English.",
        tipVi: "Hãy vẽ sơ đồ cây gia phả của chính bạn và ghi chú vai vế của từng người bằng tiếng Anh để nhớ lâu hơn."
      }
    ],
    sections: [
      {
        title: 'Family words & Relatives',
        titleVi: 'Từ vựng các thành viên gia đình',
        description: 'Relatives (or relations) are the people in your family.',
        items: [
          {
            id: 'u1-mother',
            word: 'mother',
            ipa: '/ˈmʌðər/',
            pos: 'noun',
            meaningVi: 'mẹ',
            definitionEn: 'a female parent',
            example: "Anne is Karen and Jack's mother.",
            exampleVi: "Anne là mẹ của Karen và Jack."
          },
          {
            id: 'u1-father',
            word: 'father',
            ipa: '/ˈfɑːðər/',
            pos: 'noun',
            meaningVi: 'cha, bố',
            definitionEn: 'a male parent',
            example: "Ivan is Karen and Jack's father.",
            exampleVi: "Ivan là bố của Karen và Jack."
          },
          {
            id: 'u1-parents',
            word: 'parents',
            ipa: '/ˈpeərənts/',
            pos: 'noun',
            meaningVi: 'bố mẹ, cha mẹ',
            definitionEn: 'a father and mother',
            example: 'Anne and Ivan are Karen and Jack’s parents.',
            exampleVi: 'Anne và Ivan là cha mẹ của Karen và Jack.'
          },
          {
            id: 'u1-husband',
            word: 'husband',
            ipa: '/ˈhʌzbənd/',
            pos: 'noun',
            meaningVi: 'người chồng',
            definitionEn: 'the man that you are married to',
            example: "Ivan is Anne's husband.",
            exampleVi: "Ivan là chồng của Anne."
          },
          {
            id: 'u1-wife',
            word: 'wife',
            ipa: '/waɪf/',
            pos: 'noun',
            meaningVi: 'người vợ (số nhiều: wives)',
            definitionEn: 'the woman that you are married to (plural: wives)',
            example: "Anne is Ivan's wife.",
            exampleVi: "Anne là vợ của Ivan."
          },
          {
            id: 'u1-son',
            word: 'son',
            ipa: '/sʌn/',
            pos: 'noun',
            meaningVi: 'con trai',
            definitionEn: 'a person’s male child',
            example: 'Jack is their son.',
            exampleVi: 'Jack là con trai của họ.'
          },
          {
            id: 'u1-daughter',
            word: 'daughter',
            ipa: '/ˈdɔːtər/',
            pos: 'noun',
            meaningVi: 'con gái',
            definitionEn: 'a person’s female child',
            example: 'Karen is Anne and Ivan’s daughter.',
            exampleVi: 'Karen là con gái của Anne và Ivan.'
          },
          {
            id: 'u1-brother',
            word: 'brother',
            ipa: '/ˈbrʌðər/',
            pos: 'noun',
            meaningVi: 'anh/em trai',
            definitionEn: 'a boy or man who has the same parents as you',
            example: "Jack is Karen's brother.",
            exampleVi: "Jack là em/anh trai của Karen."
          },
          {
            id: 'u1-sister',
            word: 'sister',
            ipa: '/ˈsɪstər/',
            pos: 'noun',
            meaningVi: 'chị/em gái',
            definitionEn: 'a girl or woman who has the same parents as you',
            example: "Karen is Jack's sister.",
            exampleVi: "Karen là chị/em gái của Jack."
          },
          {
            id: 'u1-grandfather',
            word: 'grandfather',
            ipa: '/ˈɡrænˌfɑːðər/',
            pos: 'noun',
            meaningVi: 'ông nội / ông ngoại',
            definitionEn: 'the father of your father or mother',
            example: "Henry is Karen and Jack's grandfather.",
            exampleVi: "Henry là ông của Karen và Jack."
          },
          {
            id: 'u1-grandmother',
            word: 'grandmother',
            ipa: '/ˈɡrænˌmʌðər/',
            pos: 'noun',
            meaningVi: 'bà nội / bà ngoại',
            definitionEn: 'the mother of your father or mother',
            example: "Diana is their grandmother.",
            exampleVi: "Diana là bà của họ."
          },
          {
            id: 'u1-grandparents',
            word: 'grandparents',
            ipa: '/ˈɡrænˌpeərənts/',
            pos: 'noun',
            meaningVi: 'ông bà',
            definitionEn: 'the parents of your parents',
            example: 'Henry and Diana are Karen and Jack’s grandparents.',
            exampleVi: 'Henry và Diana là ông bà của Karen và Jack.'
          },
          {
            id: 'u1-uncle',
            word: 'uncle',
            ipa: '/ˈʌŋkl/',
            pos: 'noun',
            meaningVi: 'chú, bác, cậu, dượng',
            definitionEn: 'the brother of your mother or father, or married to your aunt',
            example: "George is Karen and Jack's uncle.",
            exampleVi: "George là chú/bác của Karen và Jack."
          },
          {
            id: 'u1-aunt',
            word: 'aunt',
            ipa: '/ɑːnt/',
            pos: 'noun',
            meaningVi: 'cô, dì, mợ, bác gái',
            definitionEn: 'the sister of your father or mother, or married to your uncle',
            example: 'Amelia and Meena are Karen and Jack’s aunts.',
            exampleVi: 'Amelia và Meena là các cô/bác của Karen và Jack.'
          },
          {
            id: 'u1-nephew',
            word: 'nephew',
            ipa: '/ˈnefjuː/',
            pos: 'noun',
            meaningVi: 'cháu trai (con của anh/chị/em)',
            definitionEn: 'a son of your sister or brother',
            example: 'Jack is their nephew.',
            exampleVi: 'Jack là cháu trai của họ.'
          },
          {
            id: 'u1-niece',
            word: 'niece',
            ipa: '/niːs/',
            pos: 'noun',
            meaningVi: 'cháu gái (con của anh/chị/em)',
            definitionEn: 'a daughter of your brother or sister',
            example: 'Karen is Amelia, George and Meena’s niece.',
            exampleVi: 'Karen là cháu gái của Amelia, George và Meena.'
          },
          {
            id: 'u1-cousin',
            word: 'cousin',
            ipa: '/ˈkʌzn/',
            pos: 'noun',
            meaningVi: 'anh/chị/em họ',
            definitionEn: 'a child of your aunt or uncle',
            example: 'Kavita and Amal are Karen and Jack’s cousins.',
            exampleVi: 'Kavita và Amal là anh chị em họ của Karen và Jack.'
          },
          {
            id: 'u1-only-child',
            word: 'an only child',
            ipa: '/ən ˈəʊnli tʃaɪld/',
            pos: 'phrase',
            meaningVi: 'con một (không có anh chị em ruột)',
            definitionEn: 'someone who has no brothers or sisters',
            example: 'No, I am an only child.',
            exampleVi: 'Không, tôi là con một.'
          }
        ]
      },
      {
        title: 'Expressions & Dialogues',
        titleVi: 'Mẫu câu hỏi về gia đình',
        items: [
          {
            id: 'u1-exp-brothers-sisters',
            word: 'Have you got any brothers and sisters?',
            ipa: '/hæv juː ɡɒt ˈeni ˈbrʌðəz ənd ˈsɪstəz/',
            pos: 'expression',
            meaningVi: 'Bạn có anh chị em nào không?',
            definitionEn: 'question used to ask about siblings',
            example: 'Have you got any brothers and sisters? - No, I am an only child.',
            exampleVi: 'Bạn có anh chị em nào không? - Không, tôi là con một.'
          },
          {
            id: 'u1-exp-big-family',
            word: 'Do you come from a big family?',
            ipa: '/duː juː kʌm frəm ə bɪɡ ˈfæməli/',
            pos: 'expression',
            meaningVi: 'Bạn có xuất thân từ gia đình đông con/lớn không?',
            definitionEn: 'question asking if someone has many family members',
            example: 'Do you come from a big family? - Yes, I have three brothers and two sisters.',
            exampleVi: 'Gia đình bạn có đông người không? - Vâng, tôi có ba anh trai và hai chị gái.'
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1-1',
        type: 'fill_blank',
        instruction: 'Complete the sentences about Kavita and Amal with the correct family words.',
        instructionVi: 'Điền từ chỉ quan hệ gia đình thích hợp vào chỗ trống.',
        question: 'Kavita is Amal’s ______.',
        options: ['sister', 'brother', 'mother', 'cousin'],
        correctAnswer: 'sister',
        explanation: 'Amal and Kavita are brother and sister.',
        explanationVi: 'Amal và Kavita là anh em/chị em, Kavita là con gái nên là sister của Amal.'
      },
      {
        id: 'ex-1-2',
        type: 'fill_blank',
        instruction: 'Look at the family tree and complete the relationship.',
        instructionVi: 'Xem quan hệ gia đình và điền từ thích hợp.',
        question: 'Anne is Kavita’s ______.',
        options: ['aunt', 'mother', 'grandmother', 'niece'],
        correctAnswer: 'aunt',
        explanation: "Anne is the sister of Kavita's father George, so Anne is Kavita's aunt.",
        explanationVi: "Anne là cô/bác gái của Kavita (aunt)."
      },
      {
        id: 'ex-1-3',
        type: 'multiple_choice',
        instruction: 'Choose the correct answer for the question.',
        instructionVi: 'Chọn câu trả lời đúng cho câu hỏi.',
        question: 'Jack is Amelia’s ______.',
        options: ['nephew', 'niece', 'uncle', 'cousin'],
        correctAnswer: 'nephew',
        explanation: "Jack is the son of Amelia's sister/brother, so Jack is Amelia's nephew.",
        explanationVi: "Jack là con trai của anh/chị/em nên là cháu trai (nephew)."
      },
      {
        id: 'ex-1-4',
        type: 'error_correction',
        instruction: 'Find the mistake in this sentence: "They love their wifes very much."',
        instructionVi: 'Sửa lỗi sai trong câu: "They love their wifes very much."',
        question: 'What is the correct plural form of wife?',
        options: ['wives', 'wifes', 'wive', 'wifess'],
        correctAnswer: 'wives',
        explanation: 'The plural of wife is wives, not wifes.',
        explanationVi: 'Số nhiều của wife là wives (đổi -fe thành -ves).'
      }
    ],
    followUpPrompt: {
      task: 'Draw your family tree. Then write 3-5 sentences about your relations (e.g. My father is..., I have got...).',
      taskVi: 'Viết 3-5 câu miêu tả về gia đình bạn bằng tiếng Anh (ví dụ số lượng anh chị em, nghề nghiệp, con một...).'
    }
  },
  {
    id: 2,
    unitNumber: 2,
    title: 'Birth, marriage and death',
    titleVi: 'Sinh ra, Kết hôn và Qua đời',
    category: 'people',
    categoryName: 'People',
    pageNumber: 10,
    summary: 'Từ vựng các mốc quan trọng trong cuộc đời một con người: chào đời, cân nặng, tình trạng hôn nhân, đám cưới, tuần trăng mật và tang lễ.',
    errorWarnings: [
      {
        wrong: "Anna got a baby.",
        right: "Anna had a baby.",
        explanation: "We say 'had a baby', not 'got a baby'.",
        explanationVi: "Dùng 'had a baby' (đã sinh em bé), KHÔNG dùng 'got a baby'."
      },
      {
        wrong: "He born in 1990.",
        right: "He was born in 1990.",
        explanation: "We say 'He was born', not 'He born'.",
        explanationVi: "Phải dùng thể bị động 'was born', không dùng 'born' đơn độc."
      },
      {
        wrong: "Sarah got married with Bill.",
        right: "Sarah got married to Bill.",
        explanation: "We say 'married to somebody', not 'married with'.",
        explanationVi: "Kết hôn với ai dùng giới từ 'to': married to Bill (không dùng with)."
      },
      {
        wrong: "Bill is died.",
        right: "Bill is dead. / Bill died last year.",
        explanation: "Dead is an adjective (is dead). Died is the past tense verb.",
        explanationVi: "'dead' là tính từ (is dead: đã mất), còn 'died' là động từ quá khứ."
      }
    ],
    tips: [
      {
        tip: "Notice the preposition: born in [year/place], married to [person], die of [illness] (e.g. died of a heart attack).",
        tipVi: "Chú ý các giới từ đi kèm: born in (năm/nơi), married to (ai đó), die of (chết vì bệnh gì)."
      }
    ],
    sections: [
      {
        title: 'Birth',
        titleVi: 'Chào đời & Cân nặng',
        items: [
          {
            id: 'u2-have-baby',
            word: 'have a baby',
            ipa: '/hæv ə ˈbeɪbi/',
            pos: 'phrase',
            meaningVi: 'sinh con, có em bé',
            definitionEn: 'to give birth to a baby',
            example: 'Anna had a baby yesterday.',
            exampleVi: 'Hôm qua Anna vừa sinh một em bé.'
          },
          {
            id: 'u2-was-born',
            word: 'was / were born',
            ipa: '/wɒz bɔːn/',
            pos: 'verb',
            meaningVi: 'được sinh ra vào lúc/năm...',
            definitionEn: 'to come out of your mother’s body at the beginning of life',
            example: 'He was born at 1.15 yesterday morning.',
            exampleVi: 'Cậu bé chào đời lúc 1 giờ 15 phút sáng hôm qua.'
          },
          {
            id: 'u2-weigh',
            word: 'weigh',
            ipa: '/weɪ/',
            pos: 'verb',
            meaningVi: 'nặng, có cân nặng là...',
            definitionEn: 'to have a particular weight',
            example: 'He weighed 3 kilograms.',
            exampleVi: 'Bé nặng 3 ki-lô-gam.'
          },
          {
            id: 'u2-call-after',
            word: 'call someone after',
            ipa: '/kɔːl ˈsʌmwʌn ˈɑːftər/',
            pos: 'phrase',
            meaningVi: 'đặt tên ai theo tên người khác',
            definitionEn: 'to give someone the same name as someone else',
            example: 'They are going to call him John - after John, his grandfather.',
            exampleVi: 'Họ dự định đặt tên bé là John - theo tên ông nội John của bé.'
          }
        ]
      },
      {
        title: 'Marriage & Relationship Status',
        titleVi: 'Tình trạng hôn nhân & Đám cưới',
        items: [
          {
            id: 'u2-single',
            word: 'single',
            ipa: '/ˈsɪŋɡl/',
            pos: 'adjective',
            meaningVi: 'độc thân',
            definitionEn: 'not married or having a romantic relationship',
            example: 'If you do not have a partner, you are single.',
            exampleVi: 'Nếu bạn chưa có bạn đời, bạn là người độc thân.'
          },
          {
            id: 'u2-married',
            word: 'married',
            ipa: '/ˈmærid/',
            pos: 'adjective',
            meaningVi: 'đã kết hôn',
            definitionEn: 'having a husband or wife',
            example: 'They were married for 20 years.',
            exampleVi: 'Họ đã kết hôn được 20 năm.'
          },
          {
            id: 'u2-widowed',
            word: 'widowed',
            ipa: '/ˈwɪdəʊd/',
            pos: 'adjective',
            meaningVi: 'góa (chồng hoặc vợ đã mất)',
            definitionEn: 'used to describe a person whose husband or wife has died',
            example: 'If your husband or wife dies, you are widowed.',
            exampleVi: 'Nếu chồng hoặc vợ bạn qua đời, bạn là người góa bụa.'
          },
          {
            id: 'u2-divorced',
            word: 'separated / divorced',
            ipa: '/ˈsepəreɪtɪd/ /dɪˈvɔːst/',
            pos: 'adjective',
            meaningVi: 'ly thân / ly hôn',
            definitionEn: 'marriage has legally ended',
            example: 'If your marriage breaks up, you are separated or divorced.',
            exampleVi: 'Nếu hôn nhân tan vỡ, bạn ly thân hoặc ly hôn.'
          },
          {
            id: 'u2-wedding',
            word: 'wedding',
            ipa: '/ˈwedɪŋ/',
            pos: 'noun',
            meaningVi: 'lễ cưới, đám cưới',
            definitionEn: 'a marriage ceremony',
            example: 'Bill and Sarah got married. The wedding was wonderful.',
            exampleVi: 'Bill và Sarah đã kết hôn. Đám cưới thật tuyệt vời.'
          },
          {
            id: 'u2-bride-groom',
            word: 'bride / (bride)groom',
            ipa: '/braɪd/ /ˈbraɪdɡruːm/',
            pos: 'noun',
            meaningVi: 'cô dâu / chú rể',
            definitionEn: 'woman getting married / man getting married',
            example: 'The bride wore a white dress and the groom looked handsome.',
            exampleVi: 'Cô dâu mặc váy trắng và chú rể trông rất khôi ngô.'
          },
          {
            id: 'u2-honeymoon',
            word: 'honeymoon',
            ipa: '/ˈhʌnimuːn/',
            pos: 'noun',
            meaningVi: 'tuần trăng mật',
            definitionEn: 'a holiday taken by a couple who have just got married',
            example: 'They went on their honeymoon to Italy.',
            exampleVi: 'Họ đã đi nghỉ tuần trăng mật ở nước Ý.'
          }
        ]
      },
      {
        title: 'Death & Funerals',
        titleVi: 'Qua đời & Tang lễ',
        items: [
          {
            id: 'u2-die',
            word: 'die (died)',
            ipa: '/daɪ/ /daɪd/',
            pos: 'verb',
            meaningVi: 'qua đời, chết',
            definitionEn: 'to stop living',
            example: 'He died last year.',
            exampleVi: 'Ông ấy đã qua đời vào năm ngoái.'
          },
          {
            id: 'u2-heart-attack',
            word: 'heart attack',
            ipa: '/ˈhɑːt əˌtæk/',
            pos: 'noun',
            meaningVi: 'cơn đau tim, đột quỵ tim',
            definitionEn: 'a serious sudden medical condition where the heart stops working normally',
            example: 'He died of a heart attack.',
            exampleVi: 'Ông ấy qua đời vì một cơn đau tim.'
          },
          {
            id: 'u2-dead',
            word: 'dead',
            ipa: '/ded/',
            pos: 'adjective',
            meaningVi: 'đã chết, không còn sống',
            definitionEn: 'not now living',
            example: 'Bill is dead.',
            exampleVi: 'Bill đã mất rồi.'
          },
          {
            id: 'u2-funeral',
            word: 'funeral',
            ipa: '/ˈfjuːnərəl/',
            pos: 'noun',
            meaningVi: 'lễ tang, tang lễ',
            definitionEn: 'a ceremony for burying or burning the body of a dead person',
            example: 'Many friends attended the funeral.',
            exampleVi: 'Rất nhiều bạn bè đã đến tham dự tang lễ.'
          }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2-1',
        type: 'multiple_choice',
        instruction: 'Choose the correct preposition to complete the sentence.',
        instructionVi: 'Chọn giới từ chính xác để điền vào câu.',
        question: 'Sarah got married ______ Bill last month.',
        options: ['to', 'with', 'at', 'for'],
        correctAnswer: 'to',
        explanation: 'We always use "married to someone", never "married with".',
        explanationVi: 'Trong tiếng Anh luôn dùng cấu trúc: get married TO somebody.'
      },
      {
        id: 'ex-2-2',
        type: 'fill_blank',
        instruction: 'Find the word which means: a holiday after a wedding.',
        instructionVi: 'Tìm từ có nghĩa: chuyến đi nghỉ sau ngày cưới.',
        question: 'A holiday after a wedding is a ______.',
        options: ['honeymoon', 'funeral', 'vacation', 'wedding'],
        correctAnswer: 'honeymoon',
        explanation: 'A holiday taken by a newly married couple is a honeymoon.',
        explanationVi: 'Kỳ nghỉ sau đám cưới của cặp đôi mới cưới gọi là honeymoon (tuần trăng mật).'
      },
      {
        id: 'ex-2-3',
        type: 'multiple_choice',
        instruction: 'Choose died, dead, or death.',
        instructionVi: 'Chọn từ đúng giữa died, dead hoặc death.',
        question: 'Her grandmother has been ______ for five years now.',
        options: ['dead', 'died', 'death', 'die'],
        correctAnswer: 'dead',
        explanation: '"Has been" requires an adjective: "dead". "Died" is the past verb.',
        explanationVi: 'Sau "has been" ta dùng tính từ "dead" (đã mất).'
      }
    ]
  },
  {
    id: 3,
    unitNumber: 3,
    title: 'Parts of the body',
    titleVi: 'Các bộ phận trên cơ thể',
    category: 'people',
    categoryName: 'People',
    pageNumber: 12,
    summary: 'Từ vựng các bộ phận cơ thể: đầu và mặt, tay và chân, thân mình, các cơ quan bên trong, cách phát âm chuẩn và các danh từ số nhiều bất quy tắc (foot/feet, tooth/teeth).',
    errorWarnings: [
      {
        wrong: "Jane is washing the hair.",
        right: "Jane is washing her hair.",
        explanation: "Usually we use my, your, his, her, etc. with parts of the body.",
        explanationVi: "Thường dùng tính từ sở hữu (my, her, his...) với các bộ phận cơ thể, ví dụ 'wash her hair', KHÔNG dùng 'the hair'."
      },
      {
        wrong: "I have a pain in the leg.",
        right: "I have a pain in my leg.",
        explanation: "Say 'in my leg', 'in my back', using possessive adjectives.",
        explanationVi: "Nói 'in my leg' (ở chân tôi), dùng đại từ sở hữu thay vì mạo từ 'the'."
      }
    ],
    tips: [
      {
        tip: "Notice the irregular plurals: one foot -> two feet, one tooth -> two teeth. Note that 'hair' is usually uncountable/singular (e.g. My hair is long, not my hairs are long).",
        tipVi: "Lưu ý dạng số nhiều bất quy tắc: foot -> feet, tooth -> teeth. 'Hair' (mái tóc) thường là danh từ không đếm được: 'My hair is brown'."
      }
    ],
    sections: [
      {
        title: 'Head and Face',
        titleVi: 'Đầu và Khuôn mặt',
        items: [
          { id: 'u3-hair', word: 'hair', ipa: '/heər/', pos: 'noun', meaningVi: 'tóc (danh từ số ít/không đếm được)', definitionEn: 'the mass of thin threads on your head', example: 'My hair is very long - I must cut it soon.', exampleVi: 'Tóc tôi dài quá - tôi phải đi cắt sớm thôi.' },
          { id: 'u3-eye', word: 'eye', ipa: '/aɪ/', pos: 'noun', meaningVi: 'mắt', definitionEn: 'one of the two organs in your face that you see with', example: 'She has beautiful brown eyes.', exampleVi: 'Cô ấy có đôi mắt nâu tuyệt đẹp.' },
          { id: 'u3-nose', word: 'nose', ipa: '/nəʊz/', pos: 'noun', meaningVi: 'mũi', definitionEn: 'the part of the face you breathe and smell with', example: 'You smell with your nose.', exampleVi: 'Bạn ngửi bằng mũi.' },
          { id: 'u3-tooth', word: 'tooth / teeth', ipa: '/tuːθ/ /tiːθ/', pos: 'noun', meaningVi: 'răng (số ít: tooth, số nhiều: teeth)', definitionEn: 'hard white objects in your mouth used for biting', example: 'An adult has 32 teeth.', exampleVi: 'Một người trưởng thành có 32 chiếc răng.' },
          { id: 'u3-ear', word: 'ear', ipa: '/ɪər/', pos: 'noun', meaningVi: 'tai', definitionEn: 'organ used for hearing', example: 'You hear with your ear.', exampleVi: 'Bạn nghe bằng tai.' },
          { id: 'u3-mouth', word: 'mouth', ipa: '/maʊθ/', pos: 'noun', meaningVi: 'miệng', definitionEn: 'the opening on your face for speaking and eating', example: 'Open your mouth, please.', exampleVi: 'Làm ơn hãy mở miệng ra.' },
          { id: 'u3-lip', word: 'lip', ipa: '/lɪp/', pos: 'noun', meaningVi: 'môi', definitionEn: 'one of the two soft red edges of the mouth', example: 'She put on some lipstick.', exampleVi: 'Cô ấy thoa son môi.' },
          { id: 'u3-neck', word: 'neck', ipa: '/nek/', pos: 'noun', meaningVi: 'cổ', definitionEn: 'the part connecting the head to the body', example: 'She wore a warm scarf around her neck.', exampleVi: 'Cô ấy quàng một chiếc khăn ấm quanh cổ.' }
        ]
      },
      {
        title: 'Arm and Leg',
        titleVi: 'Tay và Chân',
        items: [
          { id: 'u3-shoulder', word: 'shoulder', ipa: '/ˈʃəʊldər/', pos: 'noun', meaningVi: 'vai', definitionEn: 'where the arm joins the body', example: 'My grandfather has a pain in his shoulder.', exampleVi: 'Ông tôi bị đau ở vai.' },
          { id: 'u3-arm', word: 'arm', ipa: '/ɑːm/', pos: 'noun', meaningVi: 'cánh tay', definitionEn: 'upper limb between shoulder and wrist', example: 'He broke his arm playing football.', exampleVi: 'Anh ấy bị gãy cánh tay khi đá bóng.' },
          { id: 'u3-hand', word: 'hand', ipa: '/hænd/', pos: 'noun', meaningVi: 'bàn tay', definitionEn: 'part of body with five fingers', example: 'A hand has five fingers.', exampleVi: 'Một bàn tay có 5 ngón.' },
          { id: 'u3-thumb', word: 'thumb', ipa: '/θʌm/', pos: 'noun', meaningVi: 'ngón tay cái', definitionEn: 'the short thick finger on the side of your hand', example: 'Give a thumbs-up sign.', exampleVi: 'Giơ ngón tay cái lên làm dấu tán thành.' },
          { id: 'u3-finger', word: 'finger', ipa: '/ˈfɪŋɡər/', pos: 'noun', meaningVi: 'ngón tay', definitionEn: 'one of the long thin parts on your hand', example: 'She wears a gold ring on her finger.', exampleVi: 'Cô ấy đeo một chiếc nhẫn vàng trên ngón tay.' },
          { id: 'u3-knee', word: 'knee', ipa: '/niː/', pos: 'noun', meaningVi: 'đầu gối (chữ k câm)', definitionEn: 'the joint in the middle of the leg', example: 'The child sat on her father’s knee.', exampleVi: 'Đứa trẻ ngồi trên đầu gối của bố.' },
          { id: 'u3-leg', word: 'leg', ipa: '/leɡ/', pos: 'noun', meaningVi: 'cẳng chân', definitionEn: 'limb used for standing and walking', example: 'He runs fast on his long legs.', exampleVi: 'Anh ấy chạy nhanh nhờ đôi chân dài.' },
          { id: 'u3-foot', word: 'foot / feet', ipa: '/fʊt/ /fiːt/', pos: 'noun', meaningVi: 'bàn chân (số nhiều: feet)', definitionEn: 'the part of the leg you stand on (plural: feet)', example: 'A foot has five toes.', exampleVi: 'Một bàn chân có 5 ngón chân.' },
          { id: 'u3-toe', word: 'toe', ipa: '/təʊ/', pos: 'noun', meaningVi: 'ngón chân', definitionEn: 'one of the five parts at the end of each foot', example: 'He stubbed his toe against the table.', exampleVi: 'Anh ấy va ngón chân vào bàn.' }
        ]
      },
      {
        title: 'Rest of body & Inside organs',
        titleVi: 'Thân mình & Nội tạng',
        items: [
          { id: 'u3-chest', word: 'chest', ipa: '/tʃest/', pos: 'noun', meaningVi: 'ngực', definitionEn: 'the upper front part of the body', example: 'Take a deep breath into your chest.', exampleVi: 'Hít một hơi thật sâu vào lồng ngực.' },
          { id: 'u3-stomach', word: 'stomach', ipa: '/ˈstʌmək/', pos: 'noun', meaningVi: 'dạ dày, bụng', definitionEn: 'organ where food is digested', example: 'I have a stomach ache.', exampleVi: 'Tôi bị đau bụng.' },
          { id: 'u3-heart', word: 'heart', ipa: '/hɑːt/', pos: 'noun', meaningVi: 'trái tim', definitionEn: 'organ that pumps blood around the body', example: 'The heart is a symbol of love.', exampleVi: 'Trái tim là biểu tượng của tình yêu.' },
          { id: 'u3-brain', word: 'brain', ipa: '/breɪn/', pos: 'noun', meaningVi: 'bộ não', definitionEn: 'organ inside head that controls thoughts', example: 'You think with your brain.', exampleVi: 'Bạn suy nghĩ bằng bộ não.' },
          { id: 'u3-blood', word: 'blood', ipa: '/blʌd/', pos: 'noun', meaningVi: 'máu', definitionEn: 'red liquid that circulates in the body', example: 'Your blood type can be A, B, AB or O.', exampleVi: 'Nhóm máu của bạn có thể là A, B, AB hoặc O.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-3-1',
        type: 'unscramble',
        instruction: 'Unscramble the letters to make a body part: h a m c o s t',
        instructionVi: 'Sắp xếp lại các chữ cái thành từ chỉ bộ phận cơ thể: h a m c o s t',
        question: 'hamcost -> ______',
        options: ['stomach', 'shouder', 'thumb', 'mouth'],
        correctAnswer: 'stomach',
        explanation: 'stomach /ˈstʌmək/ means dạ dày/bụng.',
        explanationVi: 'Từ đúng là stomach (dạ dày, bụng).'
      },
      {
        id: 'ex-3-2',
        type: 'fill_blank',
        instruction: 'Complete the sentence with the correct body part word.',
        instructionVi: 'Điền từ chỉ bộ phận cơ thể thích hợp.',
        question: 'An adult person has 32 ______.',
        options: ['teeth', 'tooths', 'toes', 'fingers'],
        correctAnswer: 'teeth',
        explanation: 'Plural of tooth is teeth.',
        explanationVi: 'Số nhiều của tooth là teeth (răng).'
      },
      {
        id: 'ex-3-3',
        type: 'error_correction',
        instruction: 'Correct the mistake: "My hairs are dirty. I need to wash them."',
        instructionVi: 'Sửa lỗi sai trong câu: "My hairs are dirty. I need to wash them."',
        question: 'What is the correct way to say this?',
        options: ['My hair is dirty. I need to wash it.', 'My hairs is dirty.', 'My hair are dirty.', 'I need to wash them hairs.'],
        correctAnswer: 'My hair is dirty. I need to wash it.',
        explanation: 'Hair is an uncountable singular noun when talking about the hair on your head.',
        explanationVi: 'Tóc trên đầu dùng danh từ số ít không đếm được: My hair is dirty. I need to wash it.'
      }
    ]
  },
  {
    id: 4,
    unitNumber: 4,
    title: 'Clothes',
    titleVi: 'Trang phục & Phụ kiện',
    category: 'people',
    categoryName: 'People',
    pageNumber: 14,
    summary: 'Từ vựng quần áo hàng ngày, các danh từ luôn ở dạng số nhiều (trousers, jeans, shorts, glasses), động từ put on / take off / wear / carry.',
    errorWarnings: [
      {
        wrong: "You put clothes off.",
        right: "You take clothes off.",
        explanation: "The opposite of 'put on' clothes is 'take off' clothes, NOT 'put off'.",
        explanationVi: "Trái nghĩa với 'put on' (mặc vào) là 'take off' (cởi ra), KHÔNG nói 'put clothes off'."
      }
    ],
    tips: [
      {
        tip: "Notice the difference: You WEAR clothes and glasses (on your body), but you CARRY bags and umbrellas (in your hand/arms).",
        tipVi: "Phân biệt WEAR (mặc, đeo trên người) và CARRY (mang, cầm, xách theo trong tay như vali, dù)."
      }
    ],
    sections: [
      {
        title: 'Everyday Clothes & Plural Nouns',
        titleVi: 'Quần áo & Danh từ luôn số nhiều',
        items: [
          { id: 'u4-coat', word: 'coat / jacket', ipa: '/kəʊt/ /ˈdʒækɪt/', pos: 'noun', meaningVi: 'áo khoác dài / áo khoác ngắn', definitionEn: 'outer piece of clothing worn outside', example: "It's cold today. I'll wear my coat.", exampleVi: "Hôm nay trời lạnh. Tôi sẽ mặc áo khoác." },
          { id: 'u4-suit', word: 'suit', ipa: '/suːt/', pos: 'noun', meaningVi: 'bộ vest / âu phục', definitionEn: 'jacket and trousers/skirt made from same material', example: "He's wearing a smart suit for his interview.", exampleVi: "Anh ấy đang mặc bộ vest lịch sự cho buổi phỏng vấn." },
          { id: 'u4-trousers', word: 'trousers', ipa: '/ˈtraʊzəz/', pos: 'noun', meaningVi: 'quần dài (luôn số nhiều)', definitionEn: 'a piece of clothing covering the lower body from waist to feet', example: 'These trousers are too big; I must wear a belt.', exampleVi: 'Chiếc quần dài này rộng quá; tôi phải thắt dây lưng thôi.' },
          { id: 'u4-jeans', word: 'jeans / shorts', ipa: '/dʒiːnz/ /ʃɔːts/', pos: 'noun', meaningVi: 'quần bò (quần jean) / quần soóc', definitionEn: 'casual trousers made of denim / short trousers', example: 'Her jeans are blue.', exampleVi: 'Chiếc quần jean của cô ấy màu xanh.' },
          { id: 'u4-glasses', word: 'glasses / sunglasses', ipa: '/ˈɡlɑːsɪz/', pos: 'noun', meaningVi: 'kính mắt / kính râm (luôn số nhiều)', definitionEn: 'lenses worn to see better or protect from sun', example: 'He is wearing sunglasses in the sunny weather.', exampleVi: 'Anh ấy đang đeo kính râm dưới trời nắng.' },
          { id: 'u4-trainers', word: 'trainers / boots', ipa: '/ˈtreɪnəz/ /buːts/', pos: 'noun', meaningVi: 'giày thể thao / ủng, bốt', definitionEn: 'sports shoes / shoes covering ankle or leg', example: 'She is wearing white trainers for running.', exampleVi: 'Cô ấy đi giày thể thao trắng để chạy bộ.' }
        ]
      },
      {
        title: 'Verbs with Clothes',
        titleVi: 'Động từ chỉ mặc & cởi',
        items: [
          { id: 'u4-wear', word: 'wear', ipa: '/weər/', pos: 'verb', meaningVi: 'mặc (quần áo), đeo (kính/đồng hồ)', definitionEn: 'to have clothing or jewellery on your body', example: 'Julia is wearing a red coat today.', exampleVi: 'Julia hôm nay đang mặc chiếc áo khoác đỏ.' },
          { id: 'u4-carry', word: 'carry', ipa: '/ˈkæri/', pos: 'verb', meaningVi: 'xách, mang, vác (túi, vali, ô)', definitionEn: 'to hold something with your hands or arms', example: 'She is carrying a suitcase and a handbag.', exampleVi: 'Cô ấy đang xách một chiếc vali và một túi xách.' },
          { id: 'u4-get-dressed', word: 'get dressed / put on', ipa: '/ɡet drest/ /pʊt ɒn/', pos: 'phrase', meaningVi: 'mặc quần áo vào', definitionEn: 'to dress yourself in clothes', example: 'In the morning I get dressed and put my shoes on.', exampleVi: 'Buổi sáng tôi mặc đồ và xỏ giày vào.' },
          { id: 'u4-get-undressed', word: 'get undressed / take off', ipa: '/ɡet ʌnˈdrest/ /teɪk ɒf/', pos: 'phrase', meaningVi: 'cởi đồ ra', definitionEn: 'to remove your clothes', example: 'At night you get undressed and take your clothes off.', exampleVi: 'Ban đêm bạn cởi đồ ra trước khi ngủ.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-4-1',
        type: 'multiple_choice',
        instruction: 'Choose wear or carry.',
        instructionVi: 'Chọn động từ wear hay carry.',
        question: 'She is ______ a heavy backpack on her shoulders and ______ glasses.',
        options: ['carrying / wearing', 'wearing / carrying', 'putting / taking', 'wearing / dressing'],
        correctAnswer: 'carrying / wearing',
        explanation: 'You carry a backpack (luggage), and you wear glasses on your face.',
        explanationVi: 'Balo/túi dùng "carry", kính đeo trên mặt dùng "wear".'
      },
      {
        id: 'ex-4-2',
        type: 'fill_blank',
        instruction: 'Complete the sentence with the correct verb form: "Last year Jim’s trousers ______ white."',
        instructionVi: 'Điền dạng đúng của động từ to be: "Last year Jim’s trousers ______ white."',
        question: 'Last year Jim’s trousers ______ white. Now they are grey.',
        options: ['were', 'was', 'is', 'are'],
        correctAnswer: 'were',
        explanation: 'Trousers is always plural, so the past tense is "were".',
        explanationVi: 'Trousers luôn là số nhiều, quá khứ là "were".'
      }
    ]
  },
  {
    id: 5,
    unitNumber: 5,
    title: 'Describing people',
    titleVi: 'Miêu tả ngoại hình con người',
    category: 'people',
    categoryName: 'People',
    pageNumber: 16,
    summary: 'Cách miêu tả chiều cao (tall, short), cân nặng (slim, overweight), màu tóc, khuôn mặt (beard, moustache), nhan sắc và độ tuổi một cách lịch sự.',
    errorWarnings: [
      {
        wrong: "People are high.",
        right: "People are tall.",
        explanation: "We describe people as 'tall' (never 'high'). Trees and mountains can be high or tall.",
        explanationVi: "Miêu tả người cao dùng 'tall', KHÔNG dùng 'high'."
      },
      {
        wrong: "People have blonde hairs.",
        right: "People have blonde hair.",
        explanation: "Hair is uncountable when describing appearance: 'blonde hair', 'dark hair'.",
        explanationVi: "Mái tóc dùng danh từ không đếm được 'hair', không thêm s thành 'hairs'."
      }
    ],
    tips: [
      {
        tip: "'Slim' is more polite than 'thin'. 'Overweight' is much more polite than 'fat'. 'Elderly' is more polite than 'old'.",
        tipVi: "Để nói lịch sự: dùng 'slim' (mảnh mai) thay cho 'thin' (gầy); dùng 'overweight' (thừa cân) thay cho 'fat' (béo mập); dùng 'elderly' (cao niên) thay cho 'old' (già)."
      }
    ],
    sections: [
      {
        title: 'Height and Weight',
        titleVi: 'Chiều cao & Cân nặng',
        items: [
          { id: 'u5-tall', word: 'tall / short', ipa: '/tɔːl/ /ʃɔːt/', pos: 'adjective', meaningVi: 'cao / thấp', definitionEn: 'greater or less than average height', example: 'Bettina is very tall (1.85m), but Tom is quite short (1.48m).', exampleVi: 'Bettina rất cao (1m85), nhưng Tom lại khá thấp (1m48).' },
          { id: 'u5-medium-height', word: 'medium height', ipa: '/ˈmiːdiəm haɪt/', pos: 'phrase', meaningVi: 'chiều cao trung bình', definitionEn: 'neither tall nor short', example: 'If you aren’t tall or short, you are of medium height.', exampleVi: 'Nếu bạn không cao cũng chẳng lùn, bạn có chiều cao trung bình.' },
          { id: 'u5-slim', word: 'slim / thin', ipa: '/slɪm/ /θɪn/', pos: 'adjective', meaningVi: 'thon gọn, mảnh mai / gầy', definitionEn: 'attractively thin (slim is more polite than thin)', example: 'Agata Sanchez is really slim.', exampleVi: 'Agata Sanchez thực sự rất mảnh mai.' },
          { id: 'u5-overweight', word: 'overweight / fat', ipa: '/ˌəʊvəˈweɪt/ /fæt/', pos: 'adjective', meaningVi: 'thừa cân / béo', definitionEn: 'weighing more than is healthy', example: 'The doctor said I am overweight.', exampleVi: 'Bác sĩ nói tôi đang bị thừa cân.' }
        ]
      },
      {
        title: 'Face, Hair & Age',
        titleVi: 'Khuôn mặt, Mái tóc & Độ tuổi',
        items: [
          { id: 'u5-blonde', word: 'blonde (fair) hair', ipa: '/blɒnd heər/', pos: 'phrase', meaningVi: 'tóc vàng hoe', definitionEn: 'pale golden or yellow hair', example: 'Polly has blonde hair and fair skin.', exampleVi: 'Polly có mái tóc vàng và làn da sáng.' },
          { id: 'u5-beard', word: 'beard / moustache', ipa: '/bɪəd/ /məˈstɑːʃ/', pos: 'noun', meaningVi: 'râu cằm / ria mép', definitionEn: 'hair that grows on chin / upper lip', example: 'Beat has a beard and Luca has a moustache.', exampleVi: 'Beat có râu quai nón còn Luca có ria mép.' },
          { id: 'u5-goodlooking', word: 'good-looking / beautiful / pretty', ipa: '/ˌɡʊdˈlʊkɪŋ/ /ˈbjuːtɪfl/ /ˈprɪti/', pos: 'adjective', meaningVi: 'ưa nhìn / đẹp / xinh xắn', definitionEn: 'attractive in appearance', example: "My dad is a very good-looking man and my sister is pretty.", exampleVi: "Bố tôi là người đàn ông rất phong độ, còn chị tôi rất xinh xắn." },
          { id: 'u5-middle-aged', word: 'middle-aged / elderly', ipa: '/ˌmɪdl ˈeɪdʒd/ /ˈeldəli/', pos: 'adjective', meaningVi: 'trung niên / cao tuổi', definitionEn: 'neither young nor old (45-65) / polite word for old', example: 'This hospital is for elderly people.', exampleVi: 'Bệnh viện này dành cho người cao tuổi.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-5-1',
        type: 'fill_blank',
        instruction: 'Complete the sentence with the polite word.',
        instructionVi: 'Điền từ lịch sự hơn thay thế cho từ trong ngoặc.',
        question: 'My grandmother is staying in a hospital for ______ people. (don’t use "old")',
        options: ['elderly', 'young', 'middle-aged', 'tall'],
        correctAnswer: 'elderly',
        explanation: '"Elderly" is the polite word for "old people".',
        explanationVi: '"Elderly" là cách nói lịch sự, trang nhã hơn "old".'
      },
      {
        id: 'ex-5-2',
        type: 'multiple_choice',
        instruction: 'How do you ask about someone’s appearance?',
        instructionVi: 'Mẫu câu nào dùng để hỏi về ngoại hình của một người?',
        question: 'Which question asks about how someone looks?',
        options: ['What does she look like?', 'How does she like?', 'What is she looking?', 'How is she looking?'],
        correctAnswer: 'What does she look like?',
        explanation: 'We say "What does she look like?" to ask about physical appearance.',
        explanationVi: 'Câu hỏi ngoại hình chuẩn: "What does she look like?" (Cô ấy trông như thế nào?).'
      }
    ]
  },
  {
    id: 6,
    unitNumber: 6,
    title: 'Health and illness',
    titleVi: 'Sức khỏe & Bệnh tật',
    category: 'people',
    categoryName: 'People',
    pageNumber: 18,
    summary: 'Cách hỏi thăm sức khỏe, các triệu chứng thông thường (headache, toothache, cold), các bệnh kéo dài hoặc nghiêm trọng, và lời khuyên điều trị.',
    errorWarnings: [
      {
        wrong: "My father got a heart attack.",
        right: "My father had a heart attack.",
        explanation: "We say 'had a heart attack', not 'got a heart attack'.",
        explanationVi: "Dùng 'had a heart attack' (bị đau tim), KHÔNG dùng 'got a heart attack'."
      }
    ],
    tips: [
      {
        tip: "Notice the difference: 'I feel ill' (tôi cảm thấy bị ốm) vs 'I'm going to be sick' (tôi sắp nôn ói/ói mửa ra ngoài).",
        tipVi: "Lưu ý: 'feel ill' là thấy mệt mỏi trong người, còn 'be sick' trong tiếng Anh Anh thường có nghĩa là buồn nôn, ói mửa (vomit)."
      }
    ],
    sections: [
      {
        title: 'Everyday Problems & Illnesses',
        titleVi: 'Vấn đề sức khỏe thường gặp',
        items: [
          { id: 'u6-headache', word: 'headache', ipa: '/ˈhedeɪk/', pos: 'noun', meaningVi: 'đau đầu, nhức đầu', definitionEn: 'pain inside your head', example: "Have you got an aspirin? I've got a headache.", exampleVi: "Bạn có thuốc aspirin không? Tôi đang bị đau đầu." },
          { id: 'u6-toothache', word: 'toothache', ipa: '/ˈtuːθeɪk/', pos: 'noun', meaningVi: 'đau răng', definitionEn: 'pain in one or more teeth', example: "I've got toothache; I need to go to the dentist.", exampleVi: "Tôi bị đau răng; tôi cần phải đi gặp nha sĩ." },
          { id: 'u6-cold', word: 'a cold', ipa: '/ə kəʊld/', pos: 'noun', meaningVi: 'bệnh cảm lạnh', definitionEn: 'common illness affecting nose and throat', example: "I'm going to bed with a hot drink. I've got a cold.", exampleVi: "Tôi chuẩn bị đi ngủ cùng một cốc nước nóng. Tôi bị cảm lạnh rồi." },
          { id: 'u6-feel-ill', word: 'feel ill / feel sick', ipa: '/fiːl ɪl/', pos: 'phrase', meaningVi: 'cảm thấy không khỏe / muốn nôn', definitionEn: 'not feeling well / wanting to vomit', example: "That fish was bad. I think I'm going to be sick!", exampleVi: "Món cá đó ươn rồi. Tôi nghĩ tôi sắp nôn mất!" },
          { id: 'u6-heart-attack', word: 'heart attack', ipa: '/ˈhɑːt əˌtæk/', pos: 'noun', meaningVi: 'cơn đau tim, nhồi máu cơ tim', definitionEn: 'sudden heart failure problem', example: 'He was rushed to hospital after a heart attack.', exampleVi: 'Ông ấy được đưa khẩn cấp vào bệnh viện sau một cơn đau tim.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-6-1',
        type: 'matching',
        instruction: 'Match the illness with the best treatment: headache -> take an aspirin, toothache -> go to the dentist, a cold -> go to bed with a hot drink.',
        instructionVi: 'Nối triệu chứng bệnh với cách chữa trị thích hợp.',
        question: 'If you have toothache, what should you do?',
        options: ['go to the dentist', 'take a cold shower', 'run five miles', 'drink beer'],
        correctAnswer: 'go to the dentist',
        explanation: 'For toothache, you visit the dentist.',
        explanationVi: 'Đau răng cần đến gặp nha sĩ (dentist).'
      }
    ]
  },
  {
    id: 7,
    unitNumber: 7,
    title: 'Feelings',
    titleVi: 'Cảm xúc & Tâm trạng',
    category: 'people',
    categoryName: 'People',
    pageNumber: 20,
    summary: 'Từ vựng diễn tả mức độ yêu ghét (love, like, don’t like, hate), các trạng thái cảm xúc (happy, sad, upset, tired, surprised), và các động từ prefer, hope, want.',
    errorWarnings: [
      {
        wrong: "I very like football.",
        right: "I like football very much. / I really like football.",
        explanation: "Never put 'very' directly before a verb. Use 'really like' or 'like ... very much'.",
        explanationVi: "KHÔNG đặt 'very' trước động từ như 'I very like'. Hãy nói 'I really like...' hoặc 'I like... very much'."
      },
      {
        wrong: "I want that you help me.",
        right: "I want you to help me.",
        explanation: "Pattern: want + someone + TO do something.",
        explanationVi: "Cấu trúc muốn ai làm gì: want + someone + TO do (I want you to help me)."
      }
    ],
    tips: [
      {
        tip: "Remember: 'prefer X to Y' (thích cái gì hơn cái gì): 'I prefer coffee to tea.'",
        tipVi: "Nhớ cấu trúc so sánh hơn với prefer: prefer A to B (ví dụ: I prefer coffee to tea - Tôi thích cà phê hơn trà)."
      }
    ],
    sections: [
      {
        title: 'Love, like and hate',
        titleVi: 'Yêu, Thích và Ghét',
        items: [
          { id: 'u7-love', word: 'love', ipa: '/lʌv/', pos: 'verb', meaningVi: 'rất thích, yêu', definitionEn: 'to like someone or something very much', example: 'I love my family and my best friend.', exampleVi: 'Tôi yêu gia đình và bạn thân của tôi.' },
          { id: 'u7-like', word: 'like', ipa: '/laɪk/', pos: 'verb', meaningVi: 'thích', definitionEn: 'to enjoy or approve of', example: 'I like my job.', exampleVi: 'Tôi thích công việc của mình.' },
          { id: 'u7-hate', word: 'hate', ipa: '/heɪt/', pos: 'verb', meaningVi: 'ghét cay ghét đắng', definitionEn: 'to dislike strongly', example: 'I hate spiders.', exampleVi: 'Tôi ghét cay ghét đắng loài nhện.' },
          { id: 'u7-prefer', word: 'prefer ... to ...', ipa: '/prɪˈfɜːr/', pos: 'verb', meaningVi: 'thích cái gì hơn cái gì', definitionEn: 'to like one thing more than another', example: 'I prefer coffee to tea.', exampleVi: 'Tôi thích cà phê hơn trà.' }
        ]
      },
      {
        title: 'Emotions and states',
        titleVi: 'Trạng thái cảm xúc',
        items: [
          { id: 'u7-happy', word: 'happy / sad', ipa: '/ˈhæpi/ /sæd/', pos: 'adjective', meaningVi: 'vui vẻ, hạnh phúc / buồn bã', definitionEn: 'feeling pleasure / feeling sorrow', example: 'She is a very happy person.', exampleVi: 'Cô ấy là một người rất vui tươi.' },
          { id: 'u7-upset', word: 'upset / angry', ipa: '/ʌpˈset/ /ˈæŋɡri/', pos: 'adjective', meaningVi: 'buồn bã thất vọng / tức giận', definitionEn: 'unhappy or disappointed / feeling strong annoyance', example: 'I felt upset when I heard the bad news.', exampleVi: 'Tôi cảm thấy rất buồn khi nghe tin xấu đó.' },
          { id: 'u7-thirsty', word: 'thirsty / hungry', ipa: '/ˈθɜːsti/ /ˈhʌŋɡri/', pos: 'adjective', meaningVi: 'khát nước / đói bụng', definitionEn: 'needing drink / needing food', example: 'I am so thirsty, can I have some water?', exampleVi: 'Tôi khát quá, cho tôi xin chút nước được không?' },
          { id: 'u7-tired', word: 'tired', ipa: '/ˈtaɪəd/', pos: 'adjective', meaningVi: 'mệt mỏi, buồn ngủ', definitionEn: 'needing rest or sleep', example: "She's a bit tired after work.", exampleVi: "Cô ấy hơi mệt sau giờ làm việc." },
          { id: 'u7-surprised', word: 'surprised', ipa: '/səˈpraɪzd/', pos: 'adjective', meaningVi: 'ngạc nhiên', definitionEn: 'feeling shock or unexpected wonder', example: 'I was surprised when my old friend called me.', exampleVi: 'Tôi rất ngạc nhiên khi bạn cũ gọi cho tôi.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-7-1',
        type: 'error_correction',
        instruction: 'Correct the sentence: "I very like basketball."',
        instructionVi: 'Sửa lại câu sai: "I very like basketball."',
        question: 'Which of the following is correct?',
        options: ['I like basketball very much.', 'I very like basketball.', 'I am like basketball very.', 'I like very basketball.'],
        correctAnswer: 'I like basketball very much.',
        explanation: 'We say "I like basketball very much" or "I really like basketball".',
        explanationVi: 'Không dùng "very" trước động từ, hãy dùng "very much" ở cuối câu hoặc "really like".'
      }
    ]
  },
  {
    id: 8,
    unitNumber: 8,
    title: 'Conversations 1: Greetings and wishes',
    titleVi: 'Hội thoại 1: Lời chào & Lời chúc mừng',
    category: 'people',
    categoryName: 'People',
    pageNumber: 22,
    summary: 'Các câu chào theo thời gian trong ngày (good morning, afternoon, evening, night), chào hỏi bạn bè (Hello, Hi, How are you?), lời chúc các dịp đặc biệt (Happy Birthday, Christmas, Good luck, Congratulations) và các câu giao tiếp lịch sự (Cheers, Excuse me, Bless you).',
    errorWarnings: [
      {
        wrong: "Happy Birthday! - Congratulations!",
        right: "Happy Birthday! (NOT Congratulations)",
        explanation: "When it is someone's birthday, say 'Happy Birthday!'. Use 'Congratulations!' when someone has achieved something difficult (passed an exam, got a promotion, had a baby).",
        explanationVi: "Sinh nhật thì chúc 'Happy Birthday!'. Chỉ dùng 'Congratulations!' khi ai đó đạt được thành tựu (thi đỗ, thăng chức, sinh em bé)."
      }
    ],
    tips: [
      {
        tip: "Say 'Goodnight' ONLY when leaving or going to bed. When you meet someone at 8 PM, say 'Good evening!', never 'Goodnight'.",
        tipVi: "Chỉ nói 'Goodnight' khi tạm biệt ra về hoặc đi ngủ. Khi gặp gỡ vào buổi tối, luôn chào 'Good evening!'."
      }
    ],
    sections: [
      {
        title: 'Greetings through the day',
        titleVi: 'Lời chào theo thời điểm',
        items: [
          { id: 'u8-good-morning', word: 'Good morning', ipa: '/ɡʊd ˈmɔːnɪŋ/', pos: 'expression', meaningVi: 'Chào buổi sáng (trước 12h trưa)', definitionEn: 'greeting used before 12:00 noon', example: 'Good morning, everyone!', exampleVi: 'Chào buổi sáng mọi người!' },
          { id: 'u8-good-afternoon', word: 'Good afternoon', ipa: '/ɡʊd ˌɑːftəˈnuːn/', pos: 'expression', meaningVi: 'Chào buổi chiều (từ 12h trưa đến 6h tối)', definitionEn: 'greeting between 12:00 and 18:00', example: 'Good afternoon, can I help you?', exampleVi: 'Chào buổi chiều, tôi có thể giúp gì cho bạn?' },
          { id: 'u8-good-evening', word: 'Good evening', ipa: '/ɡʊd ˈiːvnɪŋ/', pos: 'expression', meaningVi: 'Chào buổi tối (khi gặp mặt sau 6h)', definitionEn: 'greeting when arriving in the evening', example: 'Good evening, ladies and gentlemen.', exampleVi: 'Kính chào quý vị vào buổi tối nay.' },
          { id: 'u8-goodnight', word: 'Goodnight / Sleep well', ipa: '/ˌɡʊdˈnaɪt/', pos: 'expression', meaningVi: 'Chúc ngủ ngon / Ngủ ngon nhé (khi chia tay đi ngủ)', definitionEn: 'farewell said before going to sleep', example: 'Goodnight! Sleep well and see you tomorrow.', exampleVi: 'Chúc ngủ ngon nhé! Hẹn gặp lại ngày mai.' }
        ]
      },
      {
        title: 'Special Wishes & Polite Words',
        titleVi: 'Lời chúc dịp đặc biệt & Cụm từ lịch sự',
        items: [
          { id: 'u8-happy-birthday', word: 'Happy Birthday!', ipa: '/ˈhæpi ˈbɜːθdeɪ/', pos: 'expression', meaningVi: 'Chúc mừng sinh nhật!', definitionEn: 'greeting for someone on their birthday', example: "It's my birthday today. - Happy Birthday!", exampleVi: "Hôm nay là sinh nhật tôi. - Chúc mừng sinh nhật nhé!" },
          { id: 'u8-congrats', word: 'Congratulations! / Well done!', ipa: '/kənˌɡrætʃuˈleɪʃnz/ /wel dʌn/', pos: 'expression', meaningVi: 'Chúc mừng! / Làm tốt lắm! (khi ai đó đạt thành tích)', definitionEn: 'said when someone succeeds or passes an exam', example: 'I passed my driving test! - Congratulations!', exampleVi: 'Tôi vừa thi đỗ bằng lái xe! - Xin chúc mừng!' },
          { id: 'u8-good-luck', word: 'Good luck!', ipa: '/ɡʊd lʌk/', pos: 'expression', meaningVi: 'Chúc may mắn! (trước kỳ thi, phỏng vấn)', definitionEn: 'wishing someone success in something challenging', example: "I have a job interview today. - Good luck!", exampleVi: "Hôm nay tôi đi phỏng vấn xin việc. - Chúc bạn may mắn!" },
          { id: 'u8-bless-you', word: 'Bless you!', ipa: '/bles juː/', pos: 'expression', meaningVi: 'Chúc sức khỏe! (nói khi ai đó hắt xì hơi)', definitionEn: 'said to someone when they sneeze', example: 'Atishoo! - Bless you!', exampleVi: 'Hắt xì! - Chúc bạn mau khỏe!' },
          { id: 'u8-cheers', word: 'Cheers!', ipa: '/tʃɪəz/', pos: 'expression', meaningVi: 'Cạn ly! / Cảm ơn / Tạm biệt (thân mật)', definitionEn: 'toast when having a drink, or informal thank you', example: 'Here is your tea. - Cheers!', exampleVi: 'Trà của bạn đây. - Cảm ơn nhé!' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-8-1',
        type: 'multiple_choice',
        instruction: 'What do you say when someone sneezes: "Atishoo!"?',
        instructionVi: 'Bạn nói gì khi có người hắt xì hơi?',
        question: 'A: (sneezes) Atishoo! -> B: ______',
        options: ['Bless you!', 'Congratulations!', 'Good luck!', 'Cheers!'],
        correctAnswer: 'Bless you!',
        explanation: 'In English culture, we say "Bless you!" when someone sneezes.',
        explanationVi: 'Khi ai đó hắt xì hơi, ta lịch sự chúc "Bless you!".'
      },
      {
        id: 'ex-8-2',
        type: 'fill_blank',
        instruction: 'Choose the correct wish for someone taking an exam.',
        instructionVi: 'Chọn câu chúc cho người sắp bước vào kỳ thi.',
        question: 'I am taking my driving test today. - ______!',
        options: ['Good luck', 'Congratulations', 'Happy Birthday', 'Bless you'],
        correctAnswer: 'Good luck',
        explanation: 'Before an exam or test, we wish them "Good luck!".',
        explanationVi: 'Trước kỳ thi hay thử thách, ta chúc "Good luck!".'
      }
    ]
  },
  {
    id: 9,
    unitNumber: 9,
    title: 'Conversations 2: Useful words and expressions',
    titleVi: 'Hội thoại 2: Các từ ngữ & Mẫu câu tiện dụng',
    category: 'people',
    categoryName: 'People',
    pageNumber: 24,
    summary: 'Các từ đệm hay dùng trong giao tiếp (actually, really, else, around, anyway) và các mẫu câu đưa ra gợi ý (Why don’t we..., How about...), đồng ý và phản hồi cảm xúc.',
    errorWarnings: [
      {
        wrong: "Actually, I am working now. (meaning 'at the moment')",
        right: "At the moment, I am working. / Actually means 'in reality'.",
        explanation: "Actually does NOT mean 'now / hiện tại'. It means 'in fact / in reality / thực ra thì'.",
        explanationVi: "'Actually' KHÔNG có nghĩa là 'hiện tại'. Nó có nghĩa là 'thực ra là / trên thực tế' (in reality)."
      },
      {
        wrong: "I am agree with you.",
        right: "I agree with you.",
        explanation: "Agree is a verb: 'I agree' or 'I don't agree'. Never say 'I am agree'.",
        explanationVi: "'agree' là động từ, do đó nói 'I agree' hoặc 'I don't agree', TUYỆT ĐỐI KHÔNG nói 'I am agree'."
      }
    ],
    tips: [
      {
        tip: "Notice the grammar of suggestions: 'Why don't we GO...' / 'Let's GO...' (infinitive without to), but 'How about GOING...' / 'What about GOING...' (verb-ing).",
        tipVi: "Chú ý dạng động từ: 'Why don’t we go...' / 'Let’s go...' (động từ nguyên mẫu), nhưng 'How about going...' / 'What about going...' (dùng V-ing)."
      }
    ],
    sections: [
      {
        title: 'Useful Words',
        titleVi: 'Các từ đệm thông dụng',
        items: [
          { id: 'u9-actually', word: 'actually', ipa: '/ˈæktʃuəli/', pos: 'adverb', meaningVi: 'thực ra thì, trên thực tế', definitionEn: 'in reality, in fact', example: 'People say bad things about her, but she’s actually very nice.', exampleVi: 'Mọi người nói xấu cô ấy, nhưng thực ra cô ấy rất tốt bụng.' },
          { id: 'u9-else', word: 'else', ipa: '/els/', pos: 'adverb', meaningVi: 'khác, thêm nữa', definitionEn: 'in addition, or different', example: 'Do you want to buy anything else? Or go somewhere else?', exampleVi: 'Bạn có muốn mua gì khác nữa không? Hay đi chỗ khác chơi?' },
          { id: 'u9-around', word: 'around', ipa: '/əˈraʊnd/', pos: 'preposition', meaningVi: 'khoảng chừng, xấp xỉ', definitionEn: 'about or approximately', example: "I'll meet you at around 6 o'clock.", exampleVi: "Tôi sẽ gặp bạn vào khoảng 6 giờ." },
          { id: 'u9-anyway', word: 'anyway', ipa: '/ˈeniweɪ/', pos: 'adverb', meaningVi: 'dù sao đi nữa / quay lại chủ đề chính', definitionEn: 'to return to an earlier topic or give a final reason', example: 'Anyway, as I said, I woke up very late today.', exampleVi: 'Dù sao thì, như tôi đã nói, hôm nay tôi dậy rất muộn.' }
        ]
      },
      {
        title: 'Everyday Conversational Expressions',
        titleVi: 'Mẫu câu đàm thoại hàng ngày',
        items: [
          { id: 'u9-why-dont-we', word: "Why don't we ...? / Let's ...", ipa: '/waɪ dəʊnt wiː/', pos: 'expression', meaningVi: 'Tại sao chúng ta không...? / Chúng ta hãy...', definitionEn: 'used to make a friendly suggestion', example: "Why don't we go to the cinema this evening? - Good idea. Let's go!", exampleVi: "Tối nay tại sao chúng ta không đi xem phim nhỉ? - Ý kiến hay đó. Đi thôi!" },
          { id: 'u9-up-to-you', word: "It's up to you / I don't mind", ipa: '/ɪts ʌp tə juː/', pos: 'expression', meaningVi: 'Tùy bạn đấy / Tôi thế nào cũng được', definitionEn: 'you decide; I have no preference', example: "Which film do you want to see? - I don't mind. It's up to you.", exampleVi: "Bạn muốn xem phim nào? - Tôi sao cũng được. Tùy bạn chọn nhé." },
          { id: 'u9-what-a-pity', word: 'What a pity! / Oh dear!', ipa: '/wɒt ə ˈpɪti/', pos: 'expression', meaningVi: 'Tiếc thật đấy! / Ôi trời ơi!', definitionEn: 'used when you are disappointed or sympathetic', example: "I'm sorry, but I can't come to your party. - What a pity!", exampleVi: "Tôi xin lỗi nhưng tôi không đến dự tiệc của bạn được. - Tiếc thật đấy!" },
          { id: 'u9-hurry-up', word: 'Hurry up! / Look out!', ipa: '/ˈhʌri ʌp/ /lʊk aʊt/', pos: 'expression', meaningVi: 'Nhanh lên nào! / Cẩn thận đấy!', definitionEn: 'be quick / warning someone to be careful', example: "Hurry up! The taxi is here. Look out! There's a car coming.", exampleVi: "Nhanh lên! Xe taxi đến rồi. Cẩn thận kìa! Có một chiếc xe đang lao tới." }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-9-1',
        type: 'multiple_choice',
        instruction: 'Choose the correct word to complete the sentence.',
        instructionVi: 'Chọn từ đúng điền vào câu.',
        question: 'I don’t have time to go to the cinema and ______ I’ve seen that film already.',
        options: ['anyway', 'actually', 'really', 'around'],
        correctAnswer: 'anyway',
        explanation: '"anyway" is used to give an extra or conclusive reason.',
        explanationVi: '"anyway" (dù sao thì) dùng để bổ sung lý do dứt khoát.'
      },
      {
        id: 'ex-9-2',
        type: 'error_correction',
        instruction: 'Correct the mistake: "I am agree with your proposal."',
        instructionVi: 'Sửa lỗi sai: "I am agree with your proposal."',
        question: 'Which sentence is grammatically correct?',
        options: ['I agree with your proposal.', 'I am agree with your proposal.', 'I am agreeing for your proposal.', 'I agree for your proposal.'],
        correctAnswer: 'I agree with your proposal.',
        explanation: 'We say "I agree", never "I am agree".',
        explanationVi: 'Nói "I agree", không dùng "I am agree".'
      }
    ]
  }
];
