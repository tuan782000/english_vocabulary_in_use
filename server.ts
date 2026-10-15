import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini SDK with telemetry header
const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// AI English Tutor Endpoint
app.post('/api/tutor', async (req, res) => {
  try {
    const { message, contextUnit, type } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!ai) {
      // Graceful offline fallback response when no GEMINI_API_KEY is configured
      return res.json({
        reply: `[Chế độ Offline] Trợ lý gợi ý cho Unit ${contextUnit || 'này'}: Hãy nắm chắc các Error Warning trong bài và luyện đọc phát âm to rõ 3 lần mỗi ngày theo các mẫu câu đã cho. Bạn có thể thêm khóa GEMINI_API_KEY trong Settings > Secrets để nhận phản hồi AI thời gian thực chi tiết!`,
      });
    }

    const systemInstruction = `You are an expert, encouraging English teacher specializing in the Cambridge "English Vocabulary in Use Elementary" curriculum.
Your student is Vietnamese and is learning all 60 units of the textbook to reach solid A2/Elementary fluency.
When the student asks questions, wants sentences checked, needs explanations, or practice:
1. Provide clear, concise, and friendly explanations.
2. When explaining differences (like "say vs tell", "make vs do", "borrow vs lend"), use side-by-side examples with Vietnamese translations.
3. If they submit a sentence to check (e.g. from the Follow-up exercises), praise what's right, gently correct errors, and explain why.
4. Keep the vocabulary level accessible (Elementary A1-A2), but explain nuances warmly in Vietnamese and English.
Context unit: ${contextUnit ? `Unit ${contextUnit}` : 'General Vocabulary'}.
Task type: ${type || 'general_qa'}.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || 'Xin lỗi, hiện tại tôi chưa tạo được câu trả lời. Vui lòng thử lại sau ít phút.';
    return res.json({ reply });
  } catch (error: any) {
    console.error('Error calling Gemini API:', error);
    return res.status(500).json({
      error: 'Failed to process AI response',
      message: error?.message || 'Internal error',
    });
  }
});

// Configure Vite middleware in development or serve static in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
