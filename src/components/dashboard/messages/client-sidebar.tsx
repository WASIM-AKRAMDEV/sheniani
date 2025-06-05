import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Message } from "@/types/message";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ClientSidebarProps {
  selectedMessage: Message;
}

export function ClientSidebar({ selectedMessage }: ClientSidebarProps) {
  return (
    <div className="flex flex-col h-full w-[374px] border-2 rounded-xl p-8 border-primary-500/10">
      <div className="flex flex-col items-center mb-5">
        <Avatar className="w-10 h-10 rounded-full overflow-hidden mb-2">
          <AvatarImage
            src={selectedMessage.avatar || "/placeholder.svg"}
            alt={selectedMessage.fullName}
          />
          <AvatarFallback>{selectedMessage.fullName?.[0]}</AvatarFallback>
        </Avatar>

        <h3 className="font-semibold text-base mb-2">
          {selectedMessage.fullName}
        </h3>
        <p className="text-base font-medium text-black">
          {selectedMessage.email}
        </p>

        <Link
          href={"#"}
          className="mt-6 text-theme-orange hover:underline text-base font-medium flex items-center gap-2"
        >
          <Eye className="h-5 w-5" />
          <span>View Proposal</span>
        </Link>
      </div>

      <Accordion type="single" defaultValue={"activity"} className="flex-1 overflow-y-auto">
        <AccordionItem
          value="activity"
          className="border-2 border-primary-500/10 rounded-xl mb-5"
        >
          <AccordionTrigger className="font-bold text-lg text-black p-5">
            <div className="flex items-center gap-2">
              <Image
                src={"/icons/Activity.svg"}
                alt="Activity Timeline"
                width={24}
                height={24}
              />
              <span>Activity Timeline</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 space-y-6">
            <div className="flex items-start gap-2">
              <Image
                src={"/icons/circle-check.svg"}
                alt="Proposal Submitted"
                width={24}
                height={24}
              />
              <div>
                <h5 className="font-bold text-sm text-black leading-none mb-1">
                  Proposal Submitted
                </h5>
                <p className="text-xs text-para font-lato">March 18, 2025</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Image
                src={"/icons/time.svg"}
                alt="Contract Offer"
                width={24}
                height={24}
              />
              <div>
                <h5 className="font-bold leading-none text-sm text-black mb-1">
                  Contract Offer
                </h5>
                <p className="text-xs text-para font-lato">
                  Awaiting offer from client
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/icons/file.svg"}
                alt="Accept Offer"
                width={16}
                height={16}
              />
              <h5 className="font-bold leading-none text-sm text-para">
                Accept Offer
              </h5>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/icons/rocket.svg"}
                alt="Contract Starts"
                width={16}
                height={16}
              />
              <h5 className="font-bold leading-none text-sm text-para">
                Contract Starts
              </h5>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="search"
          className="border-2 border-primary-500/10 rounded-xl mb-5"
        >
          <AccordionTrigger className="font-bold text-lg text-black p-5">
            <div className="flex items-center gap-2">
              <Image
                src={"/icons/search.svg"}
                alt="Search Message"
                width={24}
                height={24}
              />
              <span>Search Message</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <Input
              placeholder="Search in conversation"
              className="w-full h-10"
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="profile"
          className="border-2 border-primary-500/10 rounded-xl mb-5"
        >
          <AccordionTrigger className="font-bold text-lg text-black p-5">
            <div className="flex items-center gap-2">
              <Image
                src={"/icons/profile2user.svg"}
                alt="Client Profile"
                width={24}
                height={24}
              />
              <span>Client Profile</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="space-y-2">
              <div>
                <p className="text-sm font-bold text-black">Location</p>
                <p className="text-sm text-para">{selectedMessage.location}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-black">Phone</p>
                <p className="text-sm text-para">{selectedMessage.phone}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-black">Email</p>
                <p className="text-sm text-para">{selectedMessage.email}</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="people"
          className="border-2 border-primary-500/10 rounded-xl"
        >
          <AccordionTrigger className="font-bold text-lg text-black p-5">
            <div className="flex items-center gap-2">
              <Image
                src={"/icons/message.svg"}
                className="make-black"
                alt="People"
                width={24}
                height={24}
              />
              <span>People</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div className="flex items-center">
              <Avatar className="w-8 h-8 rounded-full overflow-hidden mr-2">
                <AvatarImage
                  src={selectedMessage.avatar || "/placeholder.svg"}
                  alt={selectedMessage.fullName}
                />
                <AvatarFallback>{selectedMessage.fullName?.[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-para">
                  {selectedMessage.fullName}
                </p>
                <p className="text-sm font-bold text-black">Client</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
