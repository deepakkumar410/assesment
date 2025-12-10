"use client";

import { motion } from "framer-motion";

interface ChatBubbleProps {
  type: "prompt" | "response";
  content: string;
  timestamp: Date;
}

export function ChatBubble({ type, content, timestamp }: ChatBubbleProps) {
  const isPrompt = type === "prompt";

  return (
    <motion.div
      initial={{ opacity: 0, x: isPrompt ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`flex ${isPrompt ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isPrompt
            ? "bg-gray-200 dark:bg-gray-700 text-text-primary-light dark:text-text-primary-dark"
            : "bg-primary-500 text-white"
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">{content}</p>
        <p
          className={`text-xs mt-2 ${
            isPrompt
              ? "text-text-secondary-light dark:text-text-secondary-dark"
              : "text-primary-100"
          }`}
        >
          {timestamp.toLocaleTimeString()}
        </p>
      </div>
    </motion.div>
  );
}

