"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { MessageItem } from "./message-item";
import { Message } from "@/types/message";

interface MessageListProps {
  messages: Message[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectMessage: (message: Message) => void;
  selectedMessage: Message | null;
}

export function MessageList({
  messages,
  searchQuery,
  onSearchChange,
  onSelectMessage,
  selectedMessage,
}: MessageListProps) {
  return (
    <div className="w-full">
      <div className="relative flex-1 mb-7">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-para h-5 w-5" />
        <Input
          placeholder="Search messages"
          className="pl-10 h-12 rounded-none border-theme-gray-two"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div>
        {messages.map((msg) => (
          <MessageItem
            key={msg.id}
            {...msg}
            isSelected={
              selectedMessage !== null && selectedMessage?.id === msg.id
            }
            onClick={() => onSelectMessage(msg)}
          />
        ))}
      </div>
    </div>
  );
}
