import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Card: React.FC = () => {
    return (
        <div className="flex justify-betweem gap-4 bg-background custom-shadow-25 px-6 py-3.5 max-lg:flex-col">
            <div className="flex-1">
                <h2 className="text-xl font-bold">1. Heating And Air Experts</h2>
                <div className="flex gap-1 items-center mt-2">
                    <Image src="/icons/verified.svg" alt="verified" width={22} height={22} />
                    <p className="font-medium text-subheading-200 font-family-base! max-sm:text-sm!">Top Pro</p>
                    <p className="text-lg text-[#2DB783] font-bold rating max-sm:text-sm!">Great 4.8</p>
                    {Array.from({ length: 5 }, (_, i) => (
                        <Image key={i} src="/icons/star.svg" alt="star" width={17} height={17} className="max-sm:p-0.5" />
                    ))}
                    <p className="text-sm text-subheading-200 font-family-base!">(317)</p>
                </div>
                <div className="flex font-semibold gap-3 my-2.5">
                    <Badge variant="outline" className="text-sm rounded-full">
                        <Image src="/icons/high-demand.svg" alt="In high demand" width={16} height={16} />
                        In high demand
                    </Badge>
                    <Badge variant="outline" className="text-sm rounded-full">
                        <Image src="/icons/licensed-pro.svg" alt="Licensed Pro" width={16} height={16} />
                        Licensed Pro
                    </Badge>
                </div>
                <div className="flex gap-1 max-sm:mb-1.5">
                    <Image src="/icons/online.svg" alt="online" width={12} height={12} className="inlilne" />
                    <p className="text-xs text-subheading-200 font-family-base!">Online Now</p>
                </div>
                <p className="text-xs text-subheading-200 font-family-base!">David V. says , “I contacted the Heating and  Air Experts Via Thumbtack  and I .... <span className="text-primary font-bold">See More</span></p>
            </div>
            <div className="flex flex-col justify-between text-sm gap-2 max-sm:gap-6 max-sm:items-start">
                <div className="text-right">
                    <h6 className="font-bold">$70/services call</h6>
                    <p className="text-subheading-200 font-family-base!">(Waived if hired)</p>
                </div>
                <Button size="xl" className="bg-theme-orange max-sm:h-10.5">View Profile</Button>
            </div>
        </div>
    );
};

export default Card;