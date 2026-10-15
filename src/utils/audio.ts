let preferredVoice: SpeechSynthesisVoice | null = null;

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve([]);
      return;
    }
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve(voices);
      return;
    }
    window.speechSynthesis.onvoiceschanged = () => {
      resolve(window.speechSynthesis.getVoices());
    };
  });
}

export async function speakWord(text: string, rate: number = 0.9): Promise<void> {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  window.speechSynthesis.cancel(); // Stop any ongoing speech

  const voices = await loadVoices();
  // Prefer British English voice because the textbook is Cambridge English Vocabulary in Use
  if (!preferredVoice && voices.length > 0) {
    preferredVoice =
      voices.find(v => v.lang.startsWith('en-GB')) ||
      voices.find(v => v.lang.startsWith('en-US')) ||
      voices.find(v => v.lang.startsWith('en')) ||
      voices[0];
  }

  // Clean brackets or phonetics if passed
  const cleanText = text.replace(/\/.*?\//g, '').replace(/\[.*?\]/g, '').trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }
  utterance.rate = rate;
  utterance.pitch = 1.0;
  utterance.lang = preferredVoice?.lang || 'en-GB';

  window.speechSynthesis.speak(utterance);
}
