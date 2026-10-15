import { UnitData } from '../../types';

export const PART2_HOME_UNITS: UnitData[] = [
  {
    id: 10,
    unitNumber: 10,
    title: 'Food and drink',
    titleVi: 'Đồ ăn & Thức uống',
    category: 'home',
    categoryName: 'At home',
    pageNumber: 26,
    summary: 'Từ vựng các loại đồ ăn hàng ngày, đồ ăn nhanh, rau củ quả, thức uống và danh từ không đếm được (bread, fruit, pasta, rice).',
    errorWarnings: [
      {
        wrong: "Can I have a bread?",
        right: "Can I have some bread? / a piece of bread",
        explanation: "Bread is an uncountable noun. Do not use 'a bread'.",
        explanationVi: "Bread (bánh mì) là danh từ không đếm được. Hãy nói 'some bread' hoặc 'a piece/loaf of bread', KHÔNG nói 'a bread'."
      },
      {
        wrong: "I love fruits.",
        right: "I love fruit.",
        explanation: "Fruit is usually uncountable when speaking generally.",
        explanationVi: "'Fruit' (hoa quả) thường là danh từ không đếm được số ít: 'I love fruit'."
      }
    ],
    tips: [
      {
        tip: "Go to a supermarket: check the English labels on international food items, cereal, dairy, and fruits.",
        tipVi: "Khi đi siêu thị, hãy chú ý đọc nhãn tiếng Anh trên các mặt hàng để học từ vựng thực tế."
      }
    ],
    sections: [
      {
        title: 'Everyday & Fast food',
        titleVi: 'Món ăn hàng ngày & Thức ăn nhanh',
        items: [
          { id: 'u10-bread', word: 'bread', ipa: '/bred/', pos: 'noun', meaningVi: 'bánh mì (không đếm được)', definitionEn: 'food made from flour and water, baked in oven', example: 'Would you like some bread with butter?', exampleVi: 'Bạn có muốn dùng một ít bánh mì kèm bơ không?' },
          { id: 'u10-rice', word: 'rice', ipa: '/raɪs/', pos: 'noun', meaningVi: 'cơm, gạo', definitionEn: 'white or brown grains boiled for food', example: 'I love sushi because I love rice.', exampleVi: 'Tôi mê sushi vì tôi rất thích cơm.' },
          { id: 'u10-pasta', word: 'pasta', ipa: '/ˈpæstə/', pos: 'noun', meaningVi: 'mì Ý, mì ống (pasta)', definitionEn: 'Italian food made of flour and eggs/water', example: "Pasta is good for you, but don't eat too much!", exampleVi: "Mì Ý tốt cho bạn, nhưng đừng ăn quá nhiều nhé!" },
          { id: 'u10-vegetarian', word: 'vegetarian', ipa: '/ˌvedʒəˈteəriən/', pos: 'noun', meaningVi: 'người ăn chay', definitionEn: 'a person who does not eat meat or fish', example: 'My sister never eats meat or fish. She’s vegetarian.', exampleVi: 'Chị tôi không bao giờ ăn thịt hay cá. Chị ấy là người ăn chay.' },
          { id: 'u10-chips', word: 'chips / salt and pepper', ipa: '/tʃɪps/', pos: 'noun', meaningVi: 'khoai tây chiên / muối tiêu', definitionEn: 'long thin pieces of fried potato', example: 'I always put salt on my chips, but not pepper.', exampleVi: 'Tôi luôn rắc muối lên khoai tây chiên, nhưng không rắc tiêu.' },
          { id: 'u10-fish-and-chips', word: 'fish and chips', ipa: '/fɪʃ ənd tʃɪps/', pos: 'noun', meaningVi: 'cá tẩm bột chiên kèm khoai tây chiên', definitionEn: 'traditional British hot dish', example: 'Fish and chips is popular in Britain and Australia.', exampleVi: 'Fish and chips rất phổ biến ở Anh và Úc.' }
        ]
      },
      {
        title: 'Fruit and vegetables',
        titleVi: 'Rau củ & Hoa quả',
        items: [
          { id: 'u10-carrot', word: 'carrot / beans / peas', ipa: '/ˈkærət/ /biːnz/ /piːz/', pos: 'noun', meaningVi: 'cà rốt / quả đỗ, đậu cô ve / hạt đậu Hà Lan', definitionEn: 'common vegetables', example: 'Vegetables are healthy for you.', exampleVi: 'Rau xanh rất tốt cho sức khỏe của bạn.' },
          { id: 'u10-potato', word: 'potato / tomato / onion', ipa: '/pəˈteɪtəʊ/ /təˈmɑːtəʊ/ /ˈʌnjən/', pos: 'noun', meaningVi: 'khoai tây / cà chua / hành tây', definitionEn: 'essential cooking vegetables', example: 'Chips are made from potatoes.', exampleVi: 'Khoai tây chiên được làm từ củ khoai tây.' },
          { id: 'u10-garlic', word: 'garlic / mushrooms', ipa: '/ˈɡɑːlɪk/ /ˈmʌʃruːmz/', pos: 'noun', meaningVi: 'tỏi / nấm rơm', definitionEn: 'strong-tasting vegetable bulb / fungus eaten as food', example: 'Garlic gives great flavour to pasta sauce.', exampleVi: 'Tỏi mang lại hương vị tuyệt vời cho nước sốt mì.' },
          { id: 'u10-fruit', word: 'apple / banana / pear / grapes / strawberries / pineapple', ipa: '/ˈæpl/ /bəˈnɑːnə/ /peər/', pos: 'noun', meaningVi: 'táo / chuối / lê / nho / dâu tây / dứa', definitionEn: 'sweet edible fruits', example: 'She eats an apple and a banana every day.', exampleVi: 'Mỗi ngày cô ấy đều ăn một quả táo và một quả chuối.' }
        ]
      },
      {
        title: 'Drinks',
        titleVi: 'Đồ uống giải khát',
        items: [
          { id: 'u10-tea', word: 'tea / coffee', ipa: '/tiː/ /ˈkɒfi/', pos: 'noun', meaningVi: 'trà / cà phê', definitionEn: 'hot popular beverages', example: 'Do you take sugar in your tea or coffee?', exampleVi: 'Bạn có uống đường trong trà hay cà phê không?' },
          { id: 'u10-milk', word: 'milk / fruit juice / mineral water', ipa: '/mɪlk/ /fruːt dʒuːs/ /ˈmɪnərəl ˈwɔːtər/', pos: 'noun', meaningVi: 'sữa tươi / nước hoa quả / nước khoáng', definitionEn: 'healthy cold drinks', example: 'I drink a bottle of mineral water every morning.', exampleVi: 'Tôi uống một chai nước khoáng mỗi buổi sáng.' },
          { id: 'u10-beer', word: 'beer / wine', ipa: '/bɪər/ /waɪn/', pos: 'noun', meaningVi: 'bia / rượu vang', definitionEn: 'alcoholic drinks', example: 'They had a glass of wine with their meal.', exampleVi: 'Họ đã uống một ly rượu vang trong bữa ăn.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-10-1',
        type: 'multiple_choice',
        instruction: 'Vegetarians do not eat ______.',
        instructionVi: 'Người ăn chay không ăn gì?',
        question: 'Vegetarians do not eat ______.',
        options: ['meat', 'vegetables', 'fruit', 'rice'],
        correctAnswer: 'meat',
        explanation: 'Vegetarians do not eat meat or fish.',
        explanationVi: 'Người ăn chay không ăn thịt (meat) và cá.'
      },
      {
        id: 'ex-10-2',
        type: 'fill_blank',
        instruction: 'What are chips made from?',
        instructionVi: 'Khoai tây chiên (chips) làm từ gì?',
        question: 'Chips are made from ______.',
        options: ['potatoes', 'apples', 'rice', 'onions'],
        correctAnswer: 'potatoes',
        explanation: 'Chips are made from potatoes.',
        explanationVi: 'Chips làm từ khoai tây (potatoes).'
      }
    ]
  },
  {
    id: 11,
    unitNumber: 11,
    title: 'In the kitchen',
    titleVi: 'Trong phòng bếp',
    category: 'home',
    categoryName: 'At home',
    pageNumber: 28,
    summary: 'Từ vựng các thiết bị gia dụng nhà bếp (fridge, freezer, cooker, microwave, dishwasher), đồ dùng nấu ăn (saucepan, frying pan, teapot) và dụng cụ ăn uống (knife, fork, spoon, chopsticks).',
    errorWarnings: [
      {
        wrong: "Where does this bowls go?",
        right: "Where do these bowls go?",
        explanation: "Plural agreement: 'these bowls go', singular: 'this bowl goes'.",
        explanationVi: "Hòa hợp số ít số nhiều: 'these bowls' đi với trợ động từ 'do'."
      }
    ],
    tips: [
      {
        tip: "Stick sticky labels on objects in your kitchen with their English names on them (FRIDGE, MICROWAVE, CUPBOARD) to memorize effortlessly.",
        tipVi: "Dán giấy note tiếng Anh lên các đồ vật trong bếp nhà bạn để nhìn thấy và nhớ từ vựng tự nhiên mỗi ngày."
      }
    ],
    sections: [
      {
        title: "What's in the kitchen",
        titleVi: 'Thiết bị & Đồ dùng trong bếp',
        items: [
          { id: 'u11-fridge', word: 'fridge / freezer', ipa: '/frɪdʒ/ /ˈfriːzər/', pos: 'noun', meaningVi: 'tủ lạnh / ngăn đá, tủ đông', definitionEn: 'appliance for keeping food cool / frozen', example: 'The milk is in the fridge on the bottom shelf.', exampleVi: 'Sữa ở trong tủ lạnh tại ngăn dưới cùng.' },
          { id: 'u11-cooker', word: 'cooker / microwave', ipa: '/ˈkʊkər/ /ˈmaɪkrəweɪv/', pos: 'noun', meaningVi: 'bếp nấu (thiết bị) / lò vi sóng', definitionEn: 'piece of kitchen equipment for cooking', example: 'The saucepan is on the cooker.', exampleVi: 'Chiếc xoong đang ở trên bếp nấu.' },
          { id: 'u11-sink', word: 'sink / tap', ipa: '/sɪŋk/ /tæp/', pos: 'noun', meaningVi: 'bồn rửa bát / vòi nước', definitionEn: 'basin in kitchen for washing dishes / device controlling water flow', example: 'I turn on the tap to get fresh water.', exampleVi: 'Tôi vặn vòi nước để lấy nước sạch.' },
          { id: 'u11-dishwasher', word: 'dishwasher / washing machine', ipa: '/ˈdɪʃˌwɒʃər/ /ˈwɒʃɪŋ məˈʃiːn/', pos: 'noun', meaningVi: 'máy rửa bát / máy giặt quần áo', definitionEn: 'machines for cleaning plates / clothes', example: 'Put the dirty plates into the dishwasher.', exampleVi: 'Hãy xếp bát đĩa bẩn vào máy rửa bát nhé.' },
          { id: 'u11-cupboard', word: 'cupboard / shelf', ipa: '/ˈkʌbəd/ /ʃelf/', pos: 'noun', meaningVi: 'tủ chạn bát / kệ, giá để đồ', definitionEn: 'piece of furniture with doors / flat board for storage', example: 'The coffee cups are in the cupboard.', exampleVi: 'Những chiếc cốc uống cà phê ở trong chạn tủ.' },
          { id: 'u11-worktop', word: 'worktop / bin', ipa: '/ˈwɜːktɒp/ /bɪn/', pos: 'noun', meaningVi: 'mặt bàn bếp chế biến / thùng rác', definitionEn: 'flat surface for preparing food / container for rubbish', example: 'Please put the chopping board on the worktop.', exampleVi: 'Làm ơn đặt thớt lên mặt bàn bếp.' }
        ]
      },
      {
        title: 'Cooking & Eating utensils',
        titleVi: 'Dụng cụ nấu & Ăn uống',
        items: [
          { id: 'u11-saucepan', word: 'saucepan / frying pan', ipa: '/ˈsɔːspən/ /ˈfraɪɪŋ pæn/', pos: 'noun', meaningVi: 'nồi có cán / chảo rán chiên', definitionEn: 'deep pot for boiling / flat pan for frying', example: 'I need a frying pan to fry eggs.', exampleVi: 'Tôi cần một chiếc chảo rán để ốp la trứng.' },
          { id: 'u11-plate', word: 'plate / bowl / cup / mug', ipa: '/pleɪt/ /bəʊl/ /kʌp/ /mʌɡ/', pos: 'noun', meaningVi: 'đĩa / bát, tô / tách / cốc vại có quai', definitionEn: 'dishes used for serving food and drink', example: 'Can you dry the plates with a tea towel?', exampleVi: 'Bạn lau khô những chiếc đĩa bằng khăn lau chén được không?' },
          { id: 'u11-knife-fork', word: 'knife, fork and spoon', ipa: '/naɪf/ /fɔːk/ /spuːn/', pos: 'noun', meaningVi: 'dao, dĩa (nĩa) và thìa (muỗng)', definitionEn: 'cutlery used for eating food', example: 'To eat my food I need a knife and a fork.', exampleVi: 'Để ăn phần cơm này tôi cần một con dao và một cái dĩa.' },
          { id: 'u11-chopsticks', word: 'chopsticks', ipa: '/ˈtʃɒpstɪks/', pos: 'noun', meaningVi: 'đôi đũa (luôn dùng số nhiều)', definitionEn: 'pair of thin sticks used for eating in Asian countries', example: 'In Vietnam and Japan, people eat with chopsticks.', exampleVi: 'Ở Việt Nam và Nhật Bản, người dân ăn cơm bằng đũa.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-11-1',
        type: 'multiple_choice',
        instruction: 'Which item do you use to fry an egg?',
        instructionVi: 'Vật dụng nào dùng để chiên/rán trứng?',
        question: 'To fry something I need a ______.',
        options: ['frying pan', 'saucepan', 'teapot', 'washing machine'],
        correctAnswer: 'frying pan',
        explanation: 'You use a frying pan to fry food.',
        explanationVi: 'Dùng chảo rán (frying pan) để chiên rán thức ăn.'
      },
      {
        id: 'ex-11-2',
        type: 'multiple_choice',
        instruction: 'Is the fridge colder than the freezer?',
        instructionVi: 'Ngăn mát tủ lạnh có lạnh hơn ngăn đá không?',
        question: 'The fridge is colder than the freezer. True or No?',
        options: ['No, the freezer is colder than the fridge', 'Yes, true', 'They are the same', 'Neither is cold'],
        correctAnswer: 'No, the freezer is colder than the fridge',
        explanation: 'Freezer freezes food to ice, so it is colder than the fridge.',
        explanationVi: 'Ngăn đá (freezer) làm đông đá nên lạnh hơn ngăn mát (fridge).'
      }
    ]
  },
  {
    id: 12,
    unitNumber: 12,
    title: 'In the bedroom and bathroom',
    titleVi: 'Trong phòng ngủ & Phòng tắm',
    category: 'home',
    categoryName: 'At home',
    pageNumber: 30,
    summary: 'Đồ đạc trong phòng ngủ (bed, wardrobe, alarm clock, chest of drawers), phòng tắm (shower, soap, shampoo, towel), và chuỗi thói quen sinh hoạt buổi tối - sáng (Joanna’s routine).',
    errorWarnings: [
      {
        wrong: "I go at bed at 11.",
        right: "I go to bed at 11.",
        explanation: "The expression is 'go to bed', not 'go at bed'.",
        explanationVi: "Cụm từ chuẩn là 'go to bed' (đi ngủ), dùng giới từ 'to'."
      }
    ],
    tips: [
      {
        tip: "Notice the daily routine sequence: wake up -> get up -> have a shower -> clean teeth -> get dressed -> go downstairs for breakfast.",
        tipVi: "Ghi nhớ chuỗi hoạt động mỗi sáng: thức giấc (wake up) -> ngồi dậy/rời giường (get up) -> tắm vòi sen (have a shower) -> đánh răng (clean teeth) -> mặc đồ (get dressed) -> xuống nhà ăn sáng."
      }
    ],
    sections: [
      {
        title: 'Bedroom Furniture',
        titleVi: 'Nội thất phòng ngủ',
        items: [
          { id: 'u12-wardrobe', word: 'wardrobe', ipa: '/ˈwɔːdrəʊb/', pos: 'noun', meaningVi: 'tủ quần áo', definitionEn: 'tall cupboard in which you hang clothes', example: 'Hang your coats in the wardrobe.', exampleVi: 'Hãy treo áo khoác của bạn vào tủ quần áo.' },
          { id: 'u12-alarm-clock', word: 'alarm clock', ipa: '/əˈlɑːm klɒk/', pos: 'noun', meaningVi: 'đồng hồ báo thức', definitionEn: 'clock that wakes you up at a set time', example: 'She wakes up when her alarm clock rings.', exampleVi: 'Cô ấy thức giấc khi chuông đồng hồ báo thức reo.' },
          { id: 'u12-bedside-table', word: 'bedside table & lamp', ipa: '/ˈbedsaɪd ˈteɪbl/', pos: 'noun', meaningVi: 'bàn đầu giường & đèn ngủ', definitionEn: 'small table next to bed with a reading light', example: "I've got a lamp and a book on my bedside table.", exampleVi: "Tôi để một chiếc đèn ngủ và cuốn sách trên bàn đầu giường." },
          { id: 'u12-pyjamas', word: 'pyjamas', ipa: '/pəˈdʒɑːməz/', pos: 'noun', meaningVi: 'bộ đồ ngủ (luôn số nhiều)', definitionEn: 'soft trousers and top worn in bed', example: 'He wears comfortable pyjamas to sleep.', exampleVi: 'Anh ấy mặc đồ ngủ êm ái khi ngủ.' }
        ]
      },
      {
        title: 'Bathroom Items & Routine',
        titleVi: 'Đồ dùng phòng tắm & Thói quen vệ sinh',
        items: [
          { id: 'u12-shower', word: 'shower / bath', ipa: '/ˈʃaʊər/ /bɑːθ/', pos: 'noun', meaningVi: 'vòi sen tắm / bồn tắm', definitionEn: 'place where you wash standing under spray / lie in water', example: 'She has a warm shower every morning.', exampleVi: 'Cô ấy tắm vòi sen nước ấm vào mỗi sáng.' },
          { id: 'u12-soap', word: 'soap / shower gel / shampoo', ipa: '/səʊp/ /ˈʃæmpuː/', pos: 'noun', meaningVi: 'xà phòng bánh / sữa tắm / dầu gội đầu', definitionEn: 'substances used for washing body and hair', example: 'Wash your hands with soap and water.', exampleVi: 'Hãy rửa tay với xà phòng và nước.' },
          { id: 'u12-clean-teeth', word: 'toothbrush & toothpaste', ipa: '/ˈtuːθbrʌʃ/ /ˈtuːθpeɪst/', pos: 'noun', meaningVi: 'bàn chải đánh răng & kem đánh răng', definitionEn: 'tools for cleaning your teeth', example: 'Anne cleans her teeth with a toothbrush and toothpaste.', exampleVi: 'Anne đánh răng bằng bàn chải và kem đánh răng.' },
          { id: 'u12-towel', word: 'towel', ipa: '/ˈtaʊəl/', pos: 'noun', meaningVi: 'khăn tắm, khăn lau', definitionEn: 'cloth used for drying body after washing', example: 'Dry yourself with a clean towel.', exampleVi: 'Lau khô người bằng khăn tắm sạch nhé.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-12-1',
        type: 'fill_blank',
        instruction: 'Complete the daily routine: She turns off the light and ______ asleep.',
        instructionVi: 'Điền động từ thích hợp: Tắt đèn và chìm vào giấc ngủ.',
        question: 'She turns off the light and ______ asleep.',
        options: ['falls', 'gets', 'goes', 'makes'],
        correctAnswer: 'falls',
        explanation: 'The collocation is "fall asleep" (chìm vào giấc ngủ).',
        explanationVi: 'Cụm từ cố định là "fall asleep" (ngủ thiếp đi).'
      }
    ]
  },
  {
    id: 13,
    unitNumber: 13,
    title: 'In the living room',
    titleVi: 'Trong phòng khách',
    category: 'home',
    categoryName: 'At home',
    pageNumber: 32,
    summary: 'Nội thất phòng khách (sofa, armchair, carpet, curtains, bookshelf), các thiết bị giải trí (TV, remote control, hi-fi) và quy tắc ngữ pháp quan trọng với từ "furniture".',
    errorWarnings: [
      {
        wrong: "The furniture in my room are white.",
        right: "The furniture in my room is white.",
        explanation: "Furniture is an uncountable singular noun in English. Never use 'furnitures' or plural verb 'are'.",
        explanationVi: "'Furniture' (đồ nội thất) là danh từ không đếm được số ít trong tiếng Anh. Không bao giờ viết 'furnitures' hay đi với động từ số nhiều 'are'."
      }
    ],
    tips: [
      {
        tip: "Notice the verbs: switch on / turn off the light, close the curtains, relax on the sofa, pass the remote control.",
        tipVi: "Ghi nhớ các cụm động từ: switch on/turn off the TV/light (bật/tắt), close the curtains (kéo rèm), relax (thư giãn)."
      }
    ],
    sections: [
      {
        title: 'Furniture & Electronics in Living Room',
        titleVi: 'Đồ đạc & Thiết bị điện tử',
        items: [
          { id: 'u13-sofa', word: 'sofa / armchair', ipa: '/ˈsəʊfə/ /ˈɑːmtʃeər/', pos: 'noun', meaningVi: 'ghế đi-văng, ghế sô-pha / ghế bành', definitionEn: 'comfortable long seat for 2-3 people / seat for one with arm rests', example: 'Two or three people can sit on a sofa.', exampleVi: 'Hai hoặc ba người có thể ngồi thoải mái trên ghế sô-pha.' },
          { id: 'u13-bookshelf', word: 'bookshelf (pl. bookshelves)', ipa: '/ˈbʊkʃelf/', pos: 'noun', meaningVi: 'giá để sách, kệ sách', definitionEn: 'shelf for holding books', example: 'We put books on the bookshelf.', exampleVi: 'Chúng tôi xếp sách lên giá sách.' },
          { id: 'u13-remote-control', word: 'remote control', ipa: '/rɪˈməʊt kənˈtrəʊl/', pos: 'noun', meaningVi: 'điều khiển từ xa (remote TV)', definitionEn: 'device for changing TV channels from a distance', example: 'Pass me the remote control, please. I want to turn on the TV.', exampleVi: 'Làm ơn đưa tôi chiếc điều khiển từ xa. Tôi muốn bật TV lên.' },
          { id: 'u13-curtains', word: 'curtains', ipa: '/ˈkɜːtnz/', pos: 'noun', meaningVi: 'rèm cửa sổ', definitionEn: 'pieces of cloth hung to cover a window', example: "It's getting dark. Can you close the curtains?", exampleVi: "Trời đang tối dần rồi. Bạn kéo rèm cửa lại giúp tôi được không?" },
          { id: 'u13-carpet', word: 'carpet / rug', ipa: '/ˈkɑːpɪt/ /rʌɡ/', pos: 'noun', meaningVi: 'thảm trải sàn lớn / tấm thảm nhỏ', definitionEn: 'thick woven floor covering', example: 'There is a soft carpet under your feet.', exampleVi: 'Có một tấm thảm êm ái dưới chân bạn.' },
          { id: 'u13-furniture', word: 'furniture', ipa: '/ˈfɜːnɪtʃər/', pos: 'noun', meaningVi: 'đồ nội thất (luôn là số ít không đếm được)', definitionEn: 'movable articles like tables, chairs, beds', example: 'The furniture in this living room is very modern.', exampleVi: 'Đồ nội thất trong phòng khách này rất hiện đại.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-13-1',
        type: 'error_correction',
        instruction: 'Correct the error: "Jim has some very nice furnitures in his house."',
        instructionVi: 'Sửa lỗi sai: "Jim has some very nice furnitures in his house."',
        question: 'What is the correct form?',
        options: ['Jim has some very nice furniture in his house.', 'Jim has many furnitures.', 'Jim have very nice furnitures.', 'Jim has some furniture are nice.'],
        correctAnswer: 'Jim has some very nice furniture in his house.',
        explanation: 'Furniture is uncountable and never takes an -s ending.',
        explanationVi: 'Furniture là danh từ không đếm được, không bao giờ thêm s.'
      }
    ]
  }
];
