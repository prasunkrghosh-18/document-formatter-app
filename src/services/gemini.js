import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export const enhanceWithGemini = async (text, action, templateType) => {
  let prompt = '';
  
  if (action === 'grammar') {
    prompt = `Fix the grammar, spelling, and punctuation of the following text. Do not change the fundamental meaning or add new information. Return only the corrected text:\n\n${text}`;
  } else if (action === 'rewrite') {
    let style = 'professional';
    if (templateType === 'resume') style = 'action-oriented, concise, and professional resume bullet points';
    if (templateType === 'letter') style = 'formal, polite, and clear business letter';
    if (templateType === 'report') style = 'analytical, structured, and formal project report';
    
    prompt = `Rewrite the following text to be more ${style}. Improve the vocabulary, flow, and structure to fit a ${templateType} format. Return only the rewritten text:\n\n${text}`;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
