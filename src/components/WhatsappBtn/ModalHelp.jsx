import { useState, useRef, useEffect } from "react";
import { getBotResponse } from "../../utils/whatsappBot";

const ModalHelp = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      text: "👋 ¡Hola! Soy el asistente virtual de ADA Pets. ¿En qué puedo ayudarte?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botReply = getBotResponse(userMessage.text);
      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-vet-bg w-full md:w-[400px] h-[85vh] md:h-[600px] flex flex-col rounded-t-2xl md:rounded-2xl shadow-2xl animate-fade-in-up overflow-hidden">
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 bg-vet-primary text-white shadow-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl backdrop-blur-sm">
              🐶
            </div>
            <div>
              <h2 className="font-semibold text-lg leading-tight">
                Asistente Virtual
              </h2>
              <p className="text-xs text-white/90 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse box-content border border-white/20"></span>
                En línea
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Cerrar chat"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* CHAT AREA */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#e5ddd5] dark:bg-gray-800 relative">
          {/* Background Pattern Overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat" />

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex relative z-10 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl text-[15px] shadow-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-[#d9fdd3] text-gray-800 rounded-tr-none"
                    : "bg-white text-gray-800 rounded-tl-none"
                }`}
              >
                {msg.text}
                <div className="text-[10px] text-gray-500 text-right mt-1 opacity-70">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT AREA */}
        <form
          onSubmit={handleSendMessage}
          className="p-3 bg-vet-bg border-t border-gray-200 dark:border-gray-700 flex gap-2 z-20"
        >
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            className="flex-1 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-vet-primary/50 transition-all placeholder-gray-400"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="
              w-12 h-12
              bg-vet-primary hover:bg-vet-primary/90
              text-white
              rounded-full
              transition-all
              flex items-center justify-center
              shadow-lg hover:shadow-xl
              disabled:opacity-50 disabled:cursor-not-allowed
              active:scale-95
            "
            disabled={!inputValue.trim()}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={` transition-transform duration-300 ${
                inputValue.trim() ? "translate-x-0.5" : ""
              }`}
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalHelp;
