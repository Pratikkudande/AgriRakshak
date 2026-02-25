import axios from "axios";

const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || "gemini-2.5-flash";
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const SYSTEM_PROMPT = `
You are AgriRakshak, an AI farming assistant focused on grapes.
Give practical, farmer-friendly advice for grape disease detection, treatment, prevention, and cultivation.
Keep responses concise and actionable.
If user asks outside agriculture, politely redirect to grape farming support.
Reply in normal plain text only.
Do not use markdown symbols like **, #, bullet points, or numbered lists.
Do not reveal thinking process, reasoning steps, or internal analysis.
Give final answer only in short paragraphs or simple sentences.
`.trim();

function normalizeReplyText(text) {
  return text
    .replace(/\*\*/g, "")
    .replace(/^\s*#{1,6}\s*/gm, "")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function toGeminiContents(history = [], message) {
  const mappedHistory = history.map((item) => ({
    role: item.isUser ? "user" : "model",
    parts: [{ text: item.text }],
  }));

  return [
    ...mappedHistory,
    {
      role: "user",
      parts: [{ text: message }],
    },
  ];
}

export async function getChatReply(message, history = []) {
  if (!GEMINI_API_KEY) {
    const error = new Error("Gemini API key is missing");
    error.code = "missing_key";
    throw error;
  }

  const response = await axios.post(
    `${GEMINI_URL}?key=${GEMINI_API_KEY}`,
    {
      contents: toGeminiContents(history, message),
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }],
      },
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 400,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    }
  );

  const reply =
    response?.data?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text)
      .filter(Boolean)
      .join("\n")
      .trim() || "";

  return { reply: normalizeReplyText(reply) };
}
