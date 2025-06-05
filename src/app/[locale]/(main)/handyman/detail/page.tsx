import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Share } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function Handyman() {
  return (
    <section className="w-full pt-16 pb-11 max-sm:pt-13 max-sm:pb-17.5">
      <div className="container flex gap-8 max-lg:flex-col">
        <div className="flex flex-col flex-1 gap-12 max-sm:gap-7.5">
          <div>
            <Button variant="link">
              <ChevronLeft /> See More Props
            </Button>
            <Breadcrumb
              links={[
                { href: "/", title: "Thumbtack" },
                { href: "/", title: "central air conditioning" },
                { href: "", title: "Heating And Air Experts" },
              ]}
            />
          </div>
          <div className="flex gap-5 items-center max-md:flex-col max-md:items-start">
            <Image
              src="/images/heating-logo.png"
              width={256}
              height={256}
              alt="heating logo"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-[36px] font-semibold max-sm:text-2xl">
                Heating And Air Experts
              </h3>
              <div className="flex gap-1 items-center">
                <Image
                  src="/icons/verified.svg"
                  alt="verified"
                  width={22}
                  height={22}
                />
                <p className="font-medium text-zinc-500">Top Pro</p>
                <p className="text-lg text-[#2DB783] font-bold rating">
                  Great 4.8
                </p>
                {Array.from({ length: 5 }, (_, i) => (
                  <Image
                    key={i}
                    src="/icons/star.svg"
                    alt="star"
                    width={17}
                    height={17}
                  />
                ))}
                <p className="text-sm text-zinc-500">(317)</p>
              </div>
              <Button size="xl" className="max-w-[182px] mt-7 max-sm:mt-2">
                Share <Share />
              </Button>
            </div>
          </div>
          <div className="into">
            <h4 className="text-xl font-bold max-sm:mt-6">Introduction</h4>
            <p className="text-zinc-500 font-medium">
              As a Diamond Certified award winner, We provide expert HVAC
              Services For Your Home And Business, Step into a world of
              year-round comfort with our comprehensive HVAC services designed
              to meet your needs in every season. Whether you’re battling the
              winter chill or seeking refuge from the summer heat, our seasoned
              professionals are dedicated....
            </p>
          </div>
          <div className="overview flex gap-6 max-md:flex-col">
            <div className="w-[244px]">
              <h4 className="text-xl font-bold">Overview</h4>
              <OverviewList
                listItems={[
                  "Current Top Pro",
                  "Hired 830 times",
                  "Serves Mountain View, CA",
                  "Background checked",
                  "License verified",
                  "4 employees",
                  "4 years in business",
                ]}
              />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <OverviewCard
                heading="Payment methods"
                description="This pro accepts payments via Apple Pay, Cash, Check, Credit card, Google Pay, Samsung Pay, and Zelle."
              />
              <OverviewCard
                heading="Payment methods"
                description="This pro accepts payments via Apple Pay, Cash, Check, Credit card, Google Pay, Samsung Pay, and Zelle."
                icon={
                  <div className="ml-4 mr-2">
                    <Image
                      src="/icons/verified.svg"
                      alt="star"
                      width={40}
                      height={40}
                    />
                    <p className="text-zinc-500 mt-1">2024</p>
                  </div>
                }
              />
              <OverviewCard
                heading="Business hours"
                description="This pro hasn't listed their business hours."
              />
            </div>
          </div>
          <div className="flex gap-5">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="xl">Message</Button>
              </DialogTrigger>
              <DialogContent className="p-13 pt-19 w-[938px] border-none rounded-none">
                <div className="flex flex-col items-center gap-22">
                  <div className="max-w-[564px] text-center">
                    <h1 className="text-4xl font-bold">
                      Send a message to the pro
                    </h1>
                    <p className="text-lg text-zinc-500 font-medium mt-4">
                      Ask questions or describe what you need. You don’t need to
                      include contact info yet.
                    </p>
                  </div>
                  <Textarea
                    className="h-62"
                    placeholder="Can you help with my job ?"
                  />
                  <Button size="xl" className="w-[212px]">
                    Send
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button size="xl" variant="secondary">
              Request a Call
            </Button>
          </div>
        </div>
        <div className="w-full max-w-[390px]">
          <div className="bg-background border-t-4 border-primary custom-shadow-10 px-5 py-6 max-sm:mt-9">
            <h1 className="text-2xl font-bold">$70/service call</h1>
            <p className="font-semibold mt-1 text-zinc-500">
              (waived if hired)
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-8 px-6 py-8 custom-shadow-10">
            <div className="w-full">
              <h6 className="font-semibold">Zip Code</h6>
              <Input
                className="mt-1 w-full h-14 rounded-none bg-secondary"
                placeholder="12344"
              />
            </div>
            <div className="w-full">
              <h6 className="font-semibold">Schedule</h6>
              <Input
                className="mt-1 w-full h-14 rounded-none bg-secondary"
                placeholder="12344"
              />
            </div>
            <div className="w-full">
              <h6 className="font-semibold">Air handler location</h6>
              <Input
                className="mt-1 w-full h-14 rounded-none bg-secondary"
                placeholder="12344"
              />
            </div>
            <div className="w-full">
              <h6 className="font-semibold">A/C services needed</h6>
              <Input
                className="mt-1 w-full h-14 rounded-none bg-secondary"
                placeholder="12344"
              />
            </div>
            <Button className="font-bold mt-6" size="xl">
              Check Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const OverviewCard = ({
  heading,
  description,
  icon,
}: {
  heading: string;
  description: string;
  icon?: React.JSX.Element;
}) => {
  return (
    <div className="flex bg-background border-l-1 border-primary px-4 py-3 custom-shadow-10 items-center">
      <div className="flex-1">
        <p className="font-bold">{heading}</p>
        <p className="mt-1 text-zinc-500 font-medium text-sm">{description}</p>
      </div>
      {icon}
    </div>
  );
};

const OverviewList = ({ listItems }: { listItems: string[] }) => {
  return (
    <div className="border-l-1 border-primary pl-3">
      {listItems.map((item, index) => (
        <p
          key={index}
          className="flex items-center gap-3 font-medium text-subheading-200 mt-3"
        >
          <span className="w-2 h-2 bg-primary inline-block"></span>
          {item}
        </p>
      ))}
    </div>
  );
};
