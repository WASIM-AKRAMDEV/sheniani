"use client";

import { ClientSidebar } from "@/components/dashboard/messages/client-sidebar";
import { ConversationView } from "@/components/dashboard/messages/conversation-view";
import { MessageList } from "@/components/dashboard/messages/message-list";
import { Button } from "@/components/ui/button";
import { messages as messageData } from "@/data/messages";
import type { Message } from "@/types/message";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function Messages() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [newMessageText, setNewMessageText] = useState("");

  const filteredMessages = messageData.filter(
    (msg) =>
      msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectMessage = (message: Message) => {
    setSelectedMessage(message);
  };

  const handleBackClick = () => {
    setSelectedMessage(null);
  };

  const handleSendMessage = () => {
    if (!newMessageText.trim() || !selectedMessage) return;

    // In a real app, you would send this to an API
    // For now, we'll just update the local state
    const updatedMessages = messageData.map((msg) => {
      if (msg.id === selectedMessage.id) {
        const newMsg = {
          id: (msg.messages?.length || 0) + 1,
          text: newMessageText,
          time: "Just now",
          sender: "user" as const,
          timestamp: new Date(),
        };
        return {
          ...msg,
          messages: [...(msg.messages || []), newMsg],
          message: newMessageText,
          time: "Just now",
        };
      }
      return msg;
    });

    const updatedSelectedMessage = updatedMessages.find(
      (msg) => msg.id === selectedMessage.id
    );
    if (updatedSelectedMessage) {
      setSelectedMessage(updatedSelectedMessage);
    }

    setNewMessageText("");
  };

  return (
    <div className="flex h-full overflow-y-auto pr-3">
      {!selectedMessage ? (
        <MessageList
          messages={filteredMessages}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectMessage={handleSelectMessage}
          selectedMessage={selectedMessage}
        />
      ) : (
        <div className="flex-1 flex flex-col h-full w-full">
          <Button
            variant="outline"
            size="icon"
            className="mr-2"
            onClick={handleBackClick}
          >
            <ChevronLeft className="!size-5 text-black" />
          </Button>
          <div className="flex flex-1 overflow-y-auto gap-7 mt-7">
            <ConversationView
              selectedMessage={selectedMessage}
              newMessageText={newMessageText}
              onNewMessageChange={setNewMessageText}
              onSendMessage={handleSendMessage}
            />

            <ClientSidebar selectedMessage={selectedMessage} />
          </div>
        </div>
      )}
    </div>
  );
}
