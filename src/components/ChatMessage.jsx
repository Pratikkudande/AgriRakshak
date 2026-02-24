function ChatMessage({ text, isUser }) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
          isUser ? "bg-leaf-600 text-white" : "bg-white text-soil-800"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export default ChatMessage;
