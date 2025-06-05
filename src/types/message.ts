// Message data structure
export interface Message {
  id: number;
  name: string;
  location: string;
  message: string;
  time: string;
  avatar: string;
  unread?: boolean;
  sender?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  messages?: ConversationMessage[];
}

// Individual message in a conversation
export interface ConversationMessage {
  id: number;
  text: string;
  time: string;
  sender: "user" | "client" | "system";
  timestamp: Date;
}

export interface MessageItemProps {
  name: string;
  location: string;
  message: string;
  time: string;
  avatar: string;
  unread?: boolean;
  isSelected?: boolean;
  onClick: () => void;
}
