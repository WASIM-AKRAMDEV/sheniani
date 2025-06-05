"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Message } from "@/types/message";
import { Send } from "lucide-react";

interface ConversationViewProps {
  selectedMessage: Message;
  newMessageText: string;
  onNewMessageChange: (text: string) => void;
  onSendMessage: () => void;
}

export function ConversationView({
  selectedMessage,
  newMessageText,
  onNewMessageChange,
  onSendMessage,
}: ConversationViewProps) {
  return (
    <div className="flex-1 border-2 flex flex-col rounded-xl border-primary-500/10">
      <div className="flex items-center pt-8 px-8 pb-6 border-b border-theme-gray-two">
        <Avatar className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <AvatarImage
            src={selectedMessage.avatar || "/placeholder.svg"}
            alt={selectedMessage.name}
          />
          <AvatarFallback>{selectedMessage.name[0]}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <h2 className="font-bold text-xl text-black mb-1">
            {selectedMessage.name}
          </h2>
          <p className="text-base text-para">{selectedMessage.fullName}</p>
        </div>
      </div>

      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex items-center justify-center my-4">
          <div className="bg-smoke text-para text-xs px-3 py-1 rounded-full">
            Today
          </div>
        </div>

        {selectedMessage.messages?.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "mb-4 max-w-[70%]",
              msg.sender === "user" ? "ml-auto" : "mr-auto",
              msg.sender === "system" ? "mx-auto max-w-[90%]" : ""
            )}
          >
            {msg.sender === "system" ? (
              <div className="bg-gray-100 p-3 rounded-lg text-sm text-para">
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-gray-300 mr-2 flex items-center justify-center">
                    <span className="text-xs">i</span>
                  </div>
                  {msg.text}
                </div>
              </div>
            ) : (
              <div
                className={cn(
                  "p-3 rounded-lg",
                  msg.sender === "user"
                    ? "bg-dark-primary text-white"
                    : "bg-gray-100 text-black"
                )}
              >
                <p className="text-sm">{msg.text}</p>
                <p className="text-xs mt-1 opacity-70 text-right">{msg.time}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-8 border-t border-smoke">
        <div className="flex items-center">
          <Input
            placeholder="Type a message..."
            className="flex-1 rounded-full"
            value={newMessageText}
            onChange={(e) => onNewMessageChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSendMessage();
              }
            }}
          />
          <Button
            size="icon"
            className="ml-2 rounded-full"
            onClick={onSendMessage}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
