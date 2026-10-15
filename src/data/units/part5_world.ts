import { UnitData } from '../../types';

export const PART5_WORLD_UNITS: UnitData[] = [
  {
    id: 25,
    unitNumber: 25,
    title: 'Countries and nationalities',
    titleVi: 'Quốc gia & Quốc tịch',
    category: 'world',
    categoryName: 'The world',
    pageNumber: 56,
    summary: 'Tên các châu lục, quốc gia, quốc tịch, ngôn ngữ và quy tắc viết hoa bắt buộc trong tiếng Anh.',
    errorWarnings: [
      {
        wrong: "I come from vietnam and I speak english.",
        right: "I come from Vietnam and I speak English.",
        explanation: "All country names, nationalities, and languages must always begin with a CAPITAL letter.",
        explanationVi: "Tất cả tên quốc gia, châu lục, quốc tịch và ngôn ngữ trong tiếng Anh BẮT BUỘC phải viết hoa chữ cái đầu (ví dụ: Vietnam, English, American)."
      }
    ],
    tips: [
      {
        tip: "Notice nationality endings: -(i)an (American, Australian, Italian, German), -ish (British, English, Spanish, Polish), -ese (Chinese, Japanese, Vietnamese).",
        tipVi: "Các đuôi chỉ quốc tịch thông dụng: -(i)an (American, Canadian), -ish (British, Spanish), -ese (Vietnamese, Chinese, Japanese)."
      }
    ],
    sections: [
      {
        title: 'Continents, Countries & Nationalities',
        titleVi: 'Châu lục, Quốc gia & Quốc tịch',
        items: [
          { id: 'u25-asia', word: 'Asia / Asian', ipa: '/ˈeɪʒə/', pos: 'noun', meaningVi: 'Châu Á / người Châu Á', definitionEn: 'the largest continent', example: 'China, India, Japan and Vietnam are in Asia.', exampleVi: 'Trung Quốc, Ấn Độ, Nhật Bản và Việt Nam nằm ở Châu Á.' },
          { id: 'u25-europe', word: 'Europe / European', ipa: '/ˈjʊərəp/', pos: 'noun', meaningVi: 'Châu Âu / người Châu Âu', definitionEn: 'continent comprising UK, France, Germany, Spain, Italy', example: 'Spain, Germany and Poland are in Europe.', exampleVi: 'Tây Ban Nha, Đức và Ba Lan thuộc Châu Âu.' },
          { id: 'u25-uk-british', word: 'the UK / British', ipa: '/ðə ˌjuː ˈkeɪ/ /ˈbrɪtɪʃ/', pos: 'noun', meaningVi: 'Vương quốc Anh / người/quốc tịch Anh', definitionEn: 'United Kingdom (England, Scotland, Wales, N. Ireland)', example: 'London is the capital of the UK.', exampleVi: 'London là thủ đô của Vương quốc Anh.' },
          { id: 'u25-capital-cities', word: 'capital city', ipa: '/ˈkæpɪtl ˈsɪti/', pos: 'noun', meaningVi: 'thủ đô', definitionEn: 'the most important city of a country where government operates', example: 'Tokyo is the capital of Japan; Hanoi is the capital of Vietnam.', exampleVi: 'Tokyo là thủ đô của Nhật Bản; Hà Nội là thủ đô của Việt Nam.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-25-1',
        type: 'multiple_choice',
        instruction: 'What is the adjective/nationality for someone from Spain?',
        instructionVi: 'Tính từ/quốc tịch của người đến từ Spain là gì?',
        question: 'Someone from Spain is ______.',
        options: ['Spanish', 'Spainian', 'Spaniardian', 'Spains'],
        correctAnswer: 'Spanish',
        explanation: 'The adjective for Spain is Spanish.',
        explanationVi: 'Quốc tịch/tiếng Tây Ban Nha là Spanish.'
      }
    ]
  },
  {
    id: 26,
    unitNumber: 26,
    title: 'Weather',
    titleVi: 'Thời tiết & Khí hậu',
    category: 'world',
    categoryName: 'The world',
    pageNumber: 58,
    summary: 'Hiện tượng thời tiết (sun, rain, cloud, snow, wind, fog, thunder, lightning), tính từ miêu tả (sunny, rainy, windy, cloudy, snowy, foggy) và mẫu câu hỏi thời tiết What’s the weather like?.',
    errorWarnings: [
      {
        wrong: "It is winding and raining today.",
        right: "It is windy and rainy today. / It is raining.",
        explanation: "Use adjectives: windy, sunny, foggy, cloudy. (Never say 'winding' or 'sunning').",
        explanationVi: "Dùng tính từ thời tiết: windy, sunny, cloudy, foggy, KHÔNG nói 'winding' hay 'sunning'."
      }
    ],
    tips: [
      {
        tip: "Ask about the weather: 'What's the weather like today?' -> 'It's warm and sunny.' or 'It's freezing cold.'",
        tipVi: "Mẫu câu hỏi thời tiết kinh điển: 'What's the weather like?' (Thời tiết thế nào?)."
      }
    ],
    sections: [
      {
        title: 'Weather Elements & Adjectives',
        titleVi: 'Hiện tượng & Tính từ thời tiết',
        items: [
          { id: 'u26-sun', word: 'sun -> sunny', ipa: '/sʌn/ /ˈsʌni/', pos: 'adjective', meaningVi: 'ánh nắng -> trời nắng', definitionEn: 'bright warm sunshine', example: "It's a sunny day in Tokyo today.", exampleVi: "Hôm nay ở Tokyo là một ngày nắng đẹp." },
          { id: 'u26-rain', word: 'rain -> rainy', ipa: '/reɪn/ /ˈreɪni/', pos: 'adjective', meaningVi: 'cơn mưa -> trời mưa', definitionEn: 'water falling in drops from clouds', example: "When it rains, I take my umbrella.", exampleVi: "Khi trời mưa, tôi mang theo dù." },
          { id: 'u26-wind', word: 'wind -> windy', ipa: '/wɪnd/ /ˈwɪndi/', pos: 'adjective', meaningVi: 'gió -> trời nhiều gió', definitionEn: 'moving air stream', example: 'A hurricane is a very strong wind.', exampleVi: 'Bão lốc xoáy là cơn gió cực mạnh.' },
          { id: 'u26-fog', word: 'fog -> foggy', ipa: '/fɒɡ/ /ˈfɒɡi/', pos: 'adjective', meaningVi: 'sương mù -> trời mù sương', definitionEn: 'thick cloud close to the ground that makes it hard to see', example: "It's foggy, so drivers must drive slowly.", exampleVi: "Trời đầy sương mù nên các tài xế phải lái xe thật chậm." },
          { id: 'u26-lightning', word: 'thunder and lightning', ipa: '/ˈθʌndər ənd ˈlaɪtnɪŋ/', pos: 'noun', meaningVi: 'sấm và chớp, sét', definitionEn: 'loud noise and electric flash in a storm', example: 'You see lightning before you hear thunder.', exampleVi: 'Bạn nhìn thấy tia chớp lóe lên trước khi nghe thấy tiếng sấm.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-26-1',
        type: 'multiple_choice',
        instruction: 'Complete the sentence: "You see ______ before you hear thunder."',
        instructionVi: 'Hoàn thành câu: Bạn nhìn thấy ... trước khi nghe thấy tiếng sấm.',
        question: 'You see ______ before you hear thunder.',
        options: ['lightning', 'fog', 'snow', 'cloud'],
        correctAnswer: 'lightning',
        explanation: 'Lightning is the flash of light seen during thunderstorms.',
        explanationVi: 'Tia chớp (lightning) di chuyển với tốc độ ánh sáng nên ta thấy trước tiếng sấm (thunder).'
      }
    ]
  },
  {
    id: 27,
    unitNumber: 27,
    title: 'In the town',
    titleVi: 'Trong thành phố & Chỉ đường',
    category: 'world',
    categoryName: 'The world',
    pageNumber: 60,
    summary: 'Các địa điểm trong đô thị (railway station, bus station, library, museum, town hall, pedestrian area), biển báo công cộng (OUT OF ORDER, NO SMOKING, WALK ON THE GRASS) và hỏi/chỉ đường.',
    errorWarnings: [
      {
        wrong: "Where is car park? (without a/the)",
        right: "Where is a car park? / Where is the nearest bank?",
        explanation: "Always use articles (a, the) with singular town buildings.",
        explanationVi: "Luôn dùng mạo từ (a, the) trước các địa điểm công cộng: 'the museum', 'a car park'."
      }
    ],
    tips: [
      {
        tip: "Notice direction phrases: Turn left / right, take the first right, at the end of the road, on the other side of the road.",
        tipVi: "Cụm từ chỉ đường: Turn left/right (rẽ trái/phải), at the end of the road (ở cuối con đường), on the other side of the road (ở phía bên kia đường)."
      }
    ],
    sections: [
      {
        title: 'Places in the Town & Public Signs',
        titleVi: 'Địa điểm công cộng & Biển báo',
        items: [
          { id: 'u27-station', word: 'railway station / bus station', ipa: '/ˈreɪlweɪ ˈsteɪʃn/', pos: 'noun', meaningVi: 'nhà ga xe lửa / bến xe buýt', definitionEn: 'places where trains and buses stop for passengers', example: 'You can get a train at the railway station.', exampleVi: 'Bạn có thể đón tàu tại nhà ga xe lửa.' },
          { id: 'u27-pedestrian', word: 'pedestrian area', ipa: '/pəˈdestriən ˈeəriə/', pos: 'noun', meaningVi: 'phố đi bộ (cấm xe cơ giới)', definitionEn: 'area in a town where cars are not allowed', example: 'You can only walk here; cars cannot enter the pedestrian area.', exampleVi: 'Bạn chỉ được đi bộ ở đây; ô tô không được phép vào khu phố đi bộ.' },
          { id: 'u27-out-of-order', word: 'OUT OF ORDER', ipa: '/aʊt əv ˈɔːdər/', pos: 'phrase', meaningVi: 'Hỏng hóc, ngưng hoạt động (biển báo máy móc)', definitionEn: 'machine is not working', example: "The cash machine doesn't give you money because it is OUT OF ORDER.", exampleVi: "Cây ATM không rút được tiền vì bị hỏng (out of order)." }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-27-1',
        type: 'multiple_choice',
        instruction: 'What sign tells you that a cash machine is broken?',
        instructionVi: 'Biển báo nào cho biết máy rút tiền đang bị hỏng?',
        question: 'The cash machine isn’t giving money. The sign says: ______.',
        options: ['OUT OF ORDER', 'ENTRANCE', 'PLEASE DO NOT WALK ON THE GRASS', 'NO SMOKING'],
        correctAnswer: 'OUT OF ORDER',
        explanation: '"Out of order" means broken or not working.',
        explanationVi: '"Out of order" nghĩa là máy móc thiết bị đang hỏng hóc, ngừng hoạt động.'
      }
    ]
  },
  {
    id: 28,
    unitNumber: 28,
    title: 'In the countryside',
    titleVi: 'Ở vùng nông thôn & Thiên nhiên',
    category: 'world',
    categoryName: 'The world',
    pageNumber: 62,
    summary: 'Cảnh quan nông thôn (mountains, hills, forest, wood, lake, river, farm, cottage), giới tự nhiên & động vật hoang dã (wildlife, conservation area, national park) và quy tắc dùng từ "nature".',
    errorWarnings: [
      {
        wrong: "I love the nature. / I like walking in the nature.",
        right: "I love nature. / I like walking in the countryside.",
        explanation: "'Nature' means all living things (animals, plants), NOT a place. Do not say 'the nature'. To speak of going outdoors, say 'the countryside'.",
        explanationVi: "'Nature' (thiên nhiên) không phải là một địa điểm để đi dạo, và không dùng mạo từ 'the' ('I love nature'). Khi nói đi dã ngoại về vùng thôn quê ngoài trời, hãy dùng 'the countryside'."
      }
    ],
    tips: [
      {
        tip: "Difference between 'country' and 'countryside': 'country' can mean nation (e.g. Vietnam, France); 'countryside' means rural areas outside cities.",
        tipVi: "Phân biệt: 'country' có thể là quốc gia; 'countryside' là vùng quê nông thôn (trái ngược với thành phố)."
      }
    ],
    sections: [
      {
        title: 'Countryside Features & Wildlife',
        titleVi: 'Cảnh quan miền quê & Động vật hoang dã',
        items: [
          { id: 'u28-mountains', word: 'mountains / hills / forest / wood', ipa: '/ˈmaʊntɪnz/ /hɪlz/ /ˈfɒrɪst/', pos: 'noun', meaningVi: 'núi cao / đồi núi thấp / rừng rậm lớn / rừng nhỏ', definitionEn: 'natural elevated lands and areas of trees', example: 'We went skiing in the mountains.', exampleVi: 'Chúng tôi đã đi trượt tuyết trên những ngọn núi.' },
          { id: 'u28-farm', word: 'farm / cottage', ipa: '/fɑːm/ /ˈkɒtɪdʒ/', pos: 'noun', meaningVi: 'nông trại / ngôi nhà nhỏ ở thôn quê', definitionEn: 'land for crops and livestock / small house in village', example: 'My brother is a farmer; he lives on a farm.', exampleVi: 'Anh tôi là nông dân; anh ấy sống trong một trang trại.' },
          { id: 'u28-wildlife', word: 'wildlife / national park', ipa: '/ˈwaɪldlaɪf/ /ˌnæʃnəl ˈpɑːk/', pos: 'noun', meaningVi: 'động thực vật hoang dã / vườn quốc gia', definitionEn: 'animals and birds living freely / protected natural area', example: 'There is wonderful wildlife in the national park.', exampleVi: 'Có hệ động thực vật hoang dã tuyệt đẹp trong vườn quốc gia.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-28-1',
        type: 'error_correction',
        instruction: 'Correct the sentence: "He loves the nature and enjoys walking in the nature."',
        instructionVi: 'Sửa lỗi sai: "He loves the nature and enjoys walking in the nature."',
        question: 'Which sentence is natural and correct?',
        options: ['He loves nature and enjoys walking in the countryside.', 'He loves the nature and walking.', 'He loves nature and walking in nature.', 'He loves a nature.'],
        correctAnswer: 'He loves nature and enjoys walking in the countryside.',
        explanation: 'We say "love nature" (no article) and "walk in the countryside" (countryside is the place).',
        explanationVi: 'Nói "love nature" (không có the) và "walk in the countryside".'
      }
    ]
  },
  {
    id: 29,
    unitNumber: 29,
    title: 'Animals',
    titleVi: 'Muông thú & Vật nuôi',
    category: 'world',
    categoryName: 'The world',
    pageNumber: 64,
    summary: 'Động vật nông trại (cow, sheep, horse, pig, goat, hen), con non (calf, lamb, foal, piglet, chick, kid), thịt/sản phẩm (beef, pork, wool, leather), thú hoang dã và thú nuôi (pets).',
    errorWarnings: [
      {
        wrong: "The meat of cow is cow.",
        right: "The meat of a cow is beef. (pig -> pork/bacon; sheep -> lamb).",
        explanation: "Notice the difference between animal names and the meat they produce.",
        explanationVi: "Phân biệt tên con vật và tên thịt: cow (bò) -> beef (thịt bò); pig (lợn) -> pork (thịt lợn); sheep (cừu) -> lamb (thịt cừu)."
      }
    ],
    tips: [
      {
        tip: "Notice baby animal names: cow -> calf; horse -> foal; sheep -> lamb; pig -> piglet; chicken -> chick; goat -> kid.",
        tipVi: "Tên con non: bê (calf), ngựa con (foal), cừu con (lamb), lợn con (piglet), gà con (chick), dê con (kid)."
      }
    ],
    sections: [
      {
        title: 'Farm Animals, Produce & Babies',
        titleVi: 'Gia súc, Gia cầm & Sản phẩm',
        items: [
          { id: 'u29-cow', word: 'cow -> calf -> beef / milk', ipa: '/kaʊ/ /kɑːf/ /biːf/', pos: 'noun', meaningVi: 'bò cái -> con bê -> thịt bò / sữa', definitionEn: 'large farm animal producing milk and beef', example: 'Cows give us milk, leather and beef.', exampleVi: 'Bò cái cho chúng ta sữa, da và thịt bò.' },
          { id: 'u29-sheep', word: 'sheep -> lamb -> wool / meat', ipa: '/ʃiːp/ /læm/ /wʊl/', pos: 'noun', meaningVi: 'con cừu -> cừu non -> len lông cừu / thịt cừu', definitionEn: 'animal kept for wool and lamb meat', example: 'Sheep produce wool for warm sweaters.', exampleVi: 'Cừu cung cấp len để dệt áo ấm.' },
          { id: 'u29-pig', word: 'pig -> piglet -> pork / bacon', ipa: '/pɪɡ/ /ˈpɪɡlət/ /pɔːk/', pos: 'noun', meaningVi: 'con lợn -> lợn con -> thịt lợn / thịt xông khói', definitionEn: 'farm animal giving pork and bacon', example: 'Pigs produce pork, bacon and ham.', exampleVi: 'Lợn cho thịt lợn, thịt ba rọi xông khói và giăm bông.' },
          { id: 'u29-wild', word: 'elephant / lion / tiger / giraffe / monkey', ipa: '/ˈelɪfənt/ /ˈlaɪən/ /ˈtaɪɡər/', pos: 'noun', meaningVi: 'voi / sư tử / hổ / hươu cao cổ / khỉ', definitionEn: 'wild animals found in zoos and safari parks', example: 'A giraffe has a very long neck.', exampleVi: 'Hươu cao cổ có chiếc cổ rất dài.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-29-1',
        type: 'matching',
        instruction: 'Match the animal with its meat: pig -> pork, cow -> beef, sheep -> lamb.',
        instructionVi: 'Nối con vật với tên loại thịt tương ứng.',
        question: 'What do we call meat from a pig?',
        options: ['pork', 'beef', 'lamb', 'chicken'],
        correctAnswer: 'pork',
        explanation: 'Meat from a pig is pork.',
        explanationVi: 'Thịt lợn gọi là pork.'
      }
    ]
  },
  {
    id: 30,
    unitNumber: 30,
    title: 'Travelling',
    titleVi: 'Du lịch & Di chuyển đường dài',
    category: 'world',
    categoryName: 'The world',
    pageNumber: 66,
    summary: 'Phương tiện giao thông (plane, train, car, underground, ferry, bus), thủ tục tàu hỏa & hàng không (timetable, platform, check in, boarding card, take off, customs) và các lỗi dùng từ journey vs travel.',
    errorWarnings: [
      {
        wrong: "Was the travel long?",
        right: "Was the journey long?",
        explanation: "'Travel' is an uncountable general noun or verb. The specific trip from A to B is a 'journey' or 'trip'.",
        explanationVi: "Chuyến đi cụ thể từ A đến B gọi là 'journey' hoặc 'trip', KHÔNG nói 'Was the travel long?'."
      },
      {
        wrong: "Nobody controlled my passport.",
        right: "Nobody checked my passport.",
        explanation: "In English, officials CHECK your passport or tickets, NOT 'control'.",
        explanationVi: "Kiểm tra hộ chiếu hay vé dùng động từ 'CHECK' (nobody checked my passport), không dùng 'controlled'."
      }
    ],
    tips: [
      {
        tip: "Notice train & flight terms: Single ticket (vé một chiều) vs Return ticket (vé khứ hồi). The plane TAKES OFF (cất cánh) vs LANDS (hạ cánh).",
        tipVi: "Vé một chiều là Single ticket, vé khứ hồi là Return ticket. Máy bay cất cánh là take off, hạ cánh là land."
      }
    ],
    sections: [
      {
        title: 'Air, Rail & Road Travel',
        titleVi: 'Hàng không, Tàu hỏa & Đường bộ',
        items: [
          { id: 'u30-take-off', word: 'take off / land', ipa: '/teɪk ɒf/ /lænd/', pos: 'verb', meaningVi: 'cất cánh / hạ cánh (máy bay)', definitionEn: 'leave the ground / arrive on ground', example: 'The plane takes off at 10.00 and lands in Paris at 12.30.', exampleVi: 'Máy bay cất cánh lúc 10h và hạ cánh tại Paris lúc 12h30.' },
          { id: 'u30-boarding-card', word: 'boarding card / check in', ipa: '/ˈbɔːdɪŋ kɑːd/ /tʃek ɪn/', pos: 'noun', meaningVi: 'thẻ lên máy bay / làm thủ tục check-in', definitionEn: 'pass given at airport to board an aircraft', example: 'Give your boarding card to the flight attendant when boarding.', exampleVi: 'Xuất trình thẻ lên máy bay cho tiếp viên khi bước vào máy bay.' },
          { id: 'u30-platform', word: 'platform / direct train', ipa: '/ˈplætfɔːm/ /dəˈrekt treɪn/', pos: 'noun', meaningVi: 'sân ga / chuyến tàu thẳng không phải đổi ga', definitionEn: 'place where you wait for train / train without changing', example: 'The train to Manchester departs from platform 3.', exampleVi: 'Chuyến tàu đi Manchester sẽ khởi hành từ sân ga số 3.' },
          { id: 'u30-give-lift', word: 'give someone a lift', ipa: '/ɡɪv ˈsʌmwʌn ə lɪft/', pos: 'phrase', meaningVi: 'cho ai đi nhờ xe', definitionEn: 'take someone somewhere in your car for free', example: "Can I give you a lift? I'm driving into town.", exampleVi: "Tôi cho bạn đi nhờ xe nhé? Tôi đang lái xe vào thị trấn." }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-30-1',
        type: 'multiple_choice',
        instruction: 'What is a ticket that takes you to a place and back again?',
        instructionVi: 'Vé đưa bạn đi rồi quay trở về gọi là gì?',
        question: 'A ticket that takes you to a place and back again is a ______ ticket.',
        options: ['return', 'single', 'platform', 'boarding'],
        correctAnswer: 'return',
        explanation: 'A return ticket takes you there and back (round-trip). A single ticket is one-way.',
        explanationVi: 'Vé khứ hồi là return ticket.'
      }
    ]
  },
  {
    id: 31,
    unitNumber: 31,
    title: 'UK culture',
    titleVi: 'Văn hóa & Đời sống Vương quốc Anh',
    category: 'world',
    categoryName: 'The world',
    pageNumber: 68,
    summary: 'Các ngày lễ lớn tại Anh (Christmas, New Year’s Eve, Hogmanay, Bonfire Night), ẩm thực truyền thống (fish and chips, roast beef, Yorkshire pudding), hệ thống giáo dục và chính trị hoàng gia Anh.',
    errorWarnings: [
      {
        wrong: "Christmas is in 25th December.",
        right: "Christmas is on 25th December.",
        explanation: "Always use ON with specific calendar dates (on 25th December).",
        explanationVi: "Với ngày tháng cụ thể, luôn dùng giới từ 'ON' (on 25th December)."
      }
    ],
    tips: [
      {
        tip: "Bonfire Night (5th November) commemorates the Gunpowder Plot with bonfires and fireworks throughout Britain.",
        tipVi: "Đêm lửa trại Bonfire Night (ngày 5 tháng 11) được tổ chức trên khắp nước Anh với lửa trại và pháo hoa rực rỡ."
      }
    ],
    sections: [
      {
        title: 'British Holidays, Food & Institutions',
        titleVi: 'Lễ hội, Ẩm thực & Thể chế Anh',
        items: [
          { id: 'u31-bank-holiday', word: 'bank holiday', ipa: '/ˈbæŋk ˌhɒlədeɪ/', pos: 'noun', meaningVi: 'ngày nghỉ lễ toàn quốc (ngân hàng & công sở đóng cửa)', definitionEn: 'public holiday in the UK when businesses close', example: "New Year's Day is an official bank holiday in the UK.", exampleVi: "Tết Dương lịch là ngày nghỉ lễ toàn quốc chính thức tại Anh." },
          { id: 'u31-bonfire-night', word: 'Bonfire Night', ipa: '/ˈbɒnfaɪə naɪt/', pos: 'noun', meaningVi: 'Lễ hội đêm lửa trại (5 tháng 11 tại Anh)', definitionEn: 'celebration with fireworks and bonfires on 5th Nov', example: 'Children have a bonfire and watch fireworks on Bonfire Night.', exampleVi: 'Trẻ em đốt lửa trại và ngắm pháo hoa vào đêm Bonfire Night.' },
          { id: 'u31-roast-beef', word: 'roast beef and roast potatoes', ipa: '/rəʊst biːf/', pos: 'noun', meaningVi: 'thịt bò đút lò nướng kèm khoai tây và bánh Yorkshire', definitionEn: 'traditional British Sunday roast dish', example: 'Traditional UK food includes roast beef with Yorkshire pudding.', exampleVi: 'Món ăn truyền thống của Anh gồm thịt bò nướng ăn kèm bánh Yorkshire.' }
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-31-1',
        type: 'multiple_choice',
        instruction: 'What festival is celebrated on 5th November in the UK with fireworks?',
        instructionVi: 'Lễ hội nào được kỷ niệm vào ngày 5 tháng 11 ở Anh với pháo hoa?',
        question: 'What festival is celebrated on 5th November with a bonfire?',
        options: ['Bonfire Night', 'Halloween', 'Valentine’s Day', 'Easter'],
        correctAnswer: 'Bonfire Night',
        explanation: 'Bonfire Night is on 5th November.',
        explanationVi: 'Bonfire Night diễn ra vào ngày 5 tháng 11 hàng năm.'
      }
    ]
  }
];
