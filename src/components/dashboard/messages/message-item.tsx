"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { MessageItemProps } from "@/types/message"

export function MessageItem({ name, location, message, time, avatar, unread, isSelected, onClick }: MessageItemProps) {
  return (
    <div
      className={cn(
        "flex items-center p-4 cursor-pointer hover:bg-smoke transition border-b border-theme-gray-two",
        unread && "bg-primary-500/10 border-transparent",
        isSelected && "bg-smoke",
      )}
      onClick={onClick}
    >
      <Avatar className="w-12 h-12 rounded-full overflow-hidden mr-3 flex justify-center items-center">
        <AvatarImage className="w-full h-full object-cover" src={avatar || "/placeholder.svg"} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>

      <div className="flex-1 p-0">
        <div className="flex justify-between items-center mb-1">
          <h3 className={cn("font-semibold text-base", unread && "font-bold")}>{name}</h3>
          <span className="text-base font-medium text-para">{time}</span>
        </div>

        <div className="flex items-center text-para mb-1">
          <MapPin className="size-5 mr-1" />
          <span className="mr-2 text-sm font-lato">{location}</span>
        </div>

        <span className="truncate font-lato text-base text-para max-w-[209px]">{message}</span>
      </div>
    </div>
  )
}
