import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ChatMessage from "../components/ChatMessage";
import { getChatReply } from "../services/chatService";
import { quickQuestions } from "../assets/mockData";

const demoReply =
  "For grape disease control, first identify symptoms early, remove infected leaves, maintain canopy airflow, and follow a fungicide schedule as advised by local agriculture experts.";

function ChatPage() {
  const [messages, setMessages] = useState([
    { text: "Hello! I am your AgriRakshak assistant. How can I help your vineyard today?", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const getErrorReply = (error) => {
    if (error?.code === "missing_key") {
      return "Gemini API key is missing. Please set VITE_GEMINI_API_KEY in your .env file.";
    }
    if (error?.response?.status === 429) {
      return "Free API limit reached. Please try again after some time.";
    }
    if (error?.response?.status === 400) {
      return "Invalid API request. Please verify Gemini model and API key configuration.";
    }
    return "Unable to reach AI service right now. Please try again.";
  };

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    setMessages((prev) => [...prev, { text: trimmed, isUser: true }]);
    setInput("");
    setTyping(true);

    try {
      const history = messages.slice(1);
      const data = await getChatReply(trimmed, history);
      setMessages((prev) => [...prev, { text: data.reply || demoReply, isUser: false }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: getErrorReply(error), isUser: false }]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <section className="container-wide py-10 md:py-14">
      <SectionTitle
        title="AI Chatbot Advisor"
        subtitle="Ask practical grape cultivation and disease management questions."
      />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="card-base flex h-[560px] flex-col">
          <div className="mb-4 flex-1 space-y-3 overflow-y-auto rounded-xl bg-soil-50 p-3">
            {messages.map((message, index) => (
              <ChatMessage key={`${message.text}-${index}`} text={message.text} isUser={message.isUser} />
            ))}
            {typing ? (
              <div className="max-w-fit rounded-2xl bg-white px-4 py-3 text-sm text-soil-600">Bot is typing...</div>
            ) : null}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex gap-2"
          >
            <input
              className="flex-1 rounded-xl border border-leaf-200 px-4 py-3 focus:border-leaf-500 focus:outline-none"
              placeholder="Type your farming question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={typing}
            />
            <button type="submit" className="btn-primary px-4" aria-label="Send message">
              <SendHorizontal className="h-5 w-5" />
            </button>
          </form>
        </div>

        <aside className="card-base">
          <h3 className="font-display text-lg font-semibold text-soil-900">Quick Questions</h3>
          <div className="mt-4 space-y-3">
            {quickQuestions.map((question) => (
              <button
                type="button"
                key={question}
                className="w-full rounded-xl border border-leaf-200 bg-white px-3 py-2 text-left text-sm hover:bg-leaf-50"
                onClick={() => sendMessage(question)}
              >
                {question}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default ChatPage;
