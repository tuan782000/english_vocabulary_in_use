import { PhonemicSymbol } from '../types';

export const PHONEMIC_SYMBOLS: PhonemicSymbol[] = [
  // Short Vowels
  { symbol: 'ɪ', type: 'short_vowel', typeNameVi: 'Nguyên âm ngắn', examples: ['pin', 'dinner', 'busy'], audioTip: 'Phát âm nửa như "i", nửa như "ê", dứt khoát.' },
  { symbol: 'ʊ', type: 'short_vowel', typeNameVi: 'Nguyên âm ngắn', examples: ['foot', 'could', 'pull', 'book'], audioTip: 'Phát âm tròn môi nhẹ, ngắn, giống "u" ngắn.' },
  { symbol: 'e', type: 'short_vowel', typeNameVi: 'Nguyên âm ngắn', examples: ['red', 'head', 'said', 'pen'], audioTip: 'Mở miệng tự nhiên, phát âm "e" ngắn gọn.' },
  { symbol: 'ə', type: 'short_vowel', typeNameVi: 'Nguyên âm ngắn (Schwa)', examples: ['arrive', 'father', 'colour', 'banana'], audioTip: 'Âm ơ ngắn rất phổ biến, thả lỏng môi miệng.' },
  { symbol: 'æ', type: 'short_vowel', typeNameVi: 'Nguyên âm ngắn (a bẹt)', examples: ['cat', 'black', 'hat', 'man'], audioTip: 'Mở rộng miệng sang hai bên và hạ cằm, âm "e/a".' },
  { symbol: 'ʌ', type: 'short_vowel', typeNameVi: 'Nguyên âm ngắn', examples: ['sun', 'enough', 'wonder', 'cup'], audioTip: 'Mở miệng hơi hẹp, phát âm nhanh như "ă/â".' },
  { symbol: 'ɒ', type: 'short_vowel', typeNameVi: 'Nguyên âm ngắn', examples: ['got', 'watch', 'sock', 'hot'], audioTip: 'Tròn môi, hạ cằm, âm "o" ngắn kiểu Anh.' },

  // Long Vowels
  { symbol: 'iː', type: 'long_vowel', typeNameVi: 'Nguyên âm dài', examples: ['sleep', 'me', 'tea', 'piece'], audioTip: 'Mỉm cười kéo dài âm "i", giữ hơi đều.' },
  { symbol: 'uː', type: 'long_vowel', typeNameVi: 'Nguyên âm dài', examples: ['do', 'shoe', 'through', 'blue'], audioTip: 'Chu môi tròn và kéo dài âm "u".' },
  { symbol: 'ɜː', type: 'long_vowel', typeNameVi: 'Nguyên âm dài', examples: ['turn', 'bird', 'work', 'nurse'], audioTip: 'Lưỡi ở giữa, phát âm "ơ" kéo dài sâu trong cổ.' },
  { symbol: 'ɔː', type: 'long_vowel', typeNameVi: 'Nguyên âm dài', examples: ['sort', 'thought', 'walk', 'door'], audioTip: 'Tròn môi và kéo dài âm "o".' },
  { symbol: 'ɑː', type: 'long_vowel', typeNameVi: 'Nguyên âm dài', examples: ['part', 'heart', 'laugh', 'car'], audioTip: 'Hạ cằm tối đa, phát âm "a" kéo dài và vang.' },

  // Diphthongs
  { symbol: 'eɪ', type: 'diphthong', typeNameVi: 'Nguyên âm đôi', examples: ['name', 'late', 'aim', 'day'], audioTip: 'Trượt từ /e/ sang /ɪ/, tạo thành âm "ây".' },
  { symbol: 'aɪ', type: 'diphthong', typeNameVi: 'Nguyên âm đôi', examples: ['my', 'idea', 'time', 'eye'], audioTip: 'Trượt từ /a/ sang /ɪ/, tương tự "ai".' },
  { symbol: 'ɔɪ', type: 'diphthong', typeNameVi: 'Nguyên âm đôi', examples: ['boy', 'noise', 'point'], audioTip: 'Trượt từ /ɔ/ sang /ɪ/, tương tự "oi".' },
  { symbol: 'eə', type: 'diphthong', typeNameVi: 'Nguyên âm đôi', examples: ['pair', 'where', 'bear', 'hair'], audioTip: 'Trượt từ /e/ sang /ə/, nghe như "e-ơ".' },
  { symbol: 'ɪə', type: 'diphthong', typeNameVi: 'Nguyên âm đôi', examples: ['hear', 'beer', 'near', 'ear'], audioTip: 'Trượt từ /ɪ/ sang /ə/, tương tự "ia".' },
  { symbol: 'əʊ', type: 'diphthong', typeNameVi: 'Nguyên âm đôi', examples: ['go', 'home', 'show', 'boat'], audioTip: 'Trượt từ /ə/ sang /ʊ/, tương tự "âu".' },
  { symbol: 'aʊ', type: 'diphthong', typeNameVi: 'Nguyên âm đôi', examples: ['out', 'cow', 'house', 'now'], audioTip: 'Trượt từ /a/ sang /ʊ/, tương tự "ao/au".' },
  { symbol: 'ʊə', type: 'diphthong', typeNameVi: 'Nguyên âm đôi', examples: ['pure', 'fewer', 'tour'], audioTip: 'Trượt từ /ʊ/ sang /ə/, tương tự "ua".' },

  // Consonants
  { symbol: 'p', type: 'consonant', typeNameVi: 'Phụ âm bật hơi', examples: ['put', 'pen', 'passport'], audioTip: 'Hai môi mím chặt rồi bật hơi mạnh, vô thanh.' },
  { symbol: 'b', type: 'consonant', typeNameVi: 'Phụ âm hữu thanh', examples: ['book', 'bus', 'baby'], audioTip: 'Hai môi mím lại, rung thanh quản khi mở môi.' },
  { symbol: 't', type: 'consonant', typeNameVi: 'Phụ âm bật hơi', examples: ['take', 'tea', 'time'], audioTip: 'Đầu lưỡi chạm nướu trên rồi bật hơi dứt khoát.' },
  { symbol: 'd', type: 'consonant', typeNameVi: 'Phụ âm hữu thanh', examples: ['dog', 'door', 'daughter'], audioTip: 'Vị trí như /t/ nhưng rung dây thanh quản.' },
  { symbol: 'k', type: 'consonant', typeNameVi: 'Phụ âm bật hơi', examples: ['car', 'kick', 'coffee'], audioTip: 'Nâng cuống lưỡi chạm vòm miệng rồi bật hơi ra.' },
  { symbol: 'ɡ', type: 'consonant', typeNameVi: 'Phụ âm hữu thanh', examples: ['go', 'guarantee', 'garden'], audioTip: 'Vị trí như /k/ nhưng rung thanh quản.' },
  { symbol: 'tʃ', type: 'consonant', typeNameVi: 'Phụ âm tắc xát', examples: ['catch', 'church', 'chair'], audioTip: 'Chu môi nhẹ, bật hơi "ch" dứt khoát.' },
  { symbol: 'dʒ', type: 'consonant', typeNameVi: 'Phụ âm tắc xát hữu thanh', examples: ['age', 'lounge', 'job', 'juice'], audioTip: 'Vị trí như /tʃ/ nhưng rung dây thanh quản.' },
  { symbol: 'f', type: 'consonant', typeNameVi: 'Phụ âm ma sát', examples: ['for', 'cough', 'photograph'], audioTip: 'Răng trên chạm nhẹ môi dưới, đẩy luồng khí ra.' },
  { symbol: 'v', type: 'consonant', typeNameVi: 'Phụ âm ma sát hữu thanh', examples: ['love', 'vehicle', 'village'], audioTip: 'Răng trên chạm môi dưới, vừa thở vừa rung thanh.' },
  { symbol: 'θ', type: 'consonant', typeNameVi: 'Phụ âm răng vô thanh', examples: ['thick', 'path', 'teeth', 'think'], audioTip: 'Đặt đầu lưỡi giữa hai hàm răng, thổi nhẹ không rung.' },
  { symbol: 'ð', type: 'consonant', typeNameVi: 'Phụ âm răng hữu thanh', examples: ['this', 'mother', 'brother'], audioTip: 'Đặt đầu lưỡi giữa hai răng, phát âm và rung thanh quản.' },
  { symbol: 's', type: 'consonant', typeNameVi: 'Phụ âm xát vô thanh', examples: ['since', 'rice', 'sun', 'sister'], audioTip: 'Khép răng nhẹ, đẩy luồng hơi xì qua khe răng.' },
  { symbol: 'z', type: 'consonant', typeNameVi: 'Phụ âm xát hữu thanh', examples: ['zoo', 'houses', 'music'], audioTip: 'Vị trí như /s/ nhưng rung dây thanh như tiếng ong kêu.' },
  { symbol: 'ʃ', type: 'consonant', typeNameVi: 'Phụ âm vô thanh', examples: ['shop', 'sugar', 'machine', 'shirt'], audioTip: 'Chu môi tròn, đẩy hơi như ra hiệu "suỵt".' },
  { symbol: 'ʒ', type: 'consonant', typeNameVi: 'Phụ âm hữu thanh', examples: ['pleasure', 'usual', 'vision'], audioTip: 'Vị trí như /ʃ/ nhưng rung dây thanh.' },
  { symbol: 'h', type: 'consonant', typeNameVi: 'Phụ âm hơi', examples: ['hear', 'hotel', 'happy'], audioTip: 'Hà hơi nhẹ từ cuống họng, miệng mở tự nhiên.' },
  { symbol: 'm', type: 'consonant', typeNameVi: 'Phụ âm mũi', examples: ['make', 'mother', 'milk'], audioTip: 'Mím hai môi, luồng hơi đi qua mũi.' },
  { symbol: 'n', type: 'consonant', typeNameVi: 'Phụ âm mũi', examples: ['name', 'now', 'know'], audioTip: 'Đầu lưỡi chạm nướu trên, hơi thoát qua mũi.' },
  { symbol: 'ŋ', type: 'consonant', typeNameVi: 'Phụ âm mũi', examples: ['bring', 'sing', 'morning'], audioTip: 'Cuống lưỡi nâng chạm vòm họng mềm, như âm "ng".' },
  { symbol: 'l', type: 'consonant', typeNameVi: 'Phụ âm bên', examples: ['look', 'while', 'light'], audioTip: 'Đầu lưỡi chạm chân răng trên, luồng hơi đi hai bên.' },
  { symbol: 'r', type: 'consonant', typeNameVi: 'Phụ âm cuộn', examples: ['road', 'rain', 'radio'], audioTip: 'Uốn nhẹ đầu lưỡi về sau không chạm vòm họng.' },
  { symbol: 'j', type: 'consonant', typeNameVi: 'Bán nguyên âm', examples: ['young', 'yesterday', 'year'], audioTip: 'Phát âm tương tự âm "d/gi" trong tiếng Việt.' },
  { symbol: 'w', type: 'consonant', typeNameVi: 'Bán nguyên âm', examples: ['wear', 'weather', 'walk'], audioTip: 'Chu tròn môi như huýt sáo rồi mở nhanh.' }
];
