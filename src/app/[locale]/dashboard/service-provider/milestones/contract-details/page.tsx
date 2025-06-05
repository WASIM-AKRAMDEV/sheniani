"use client"
import React from 'react'
import { Card } from "@/components/ui/card";
import Image from 'next/image';
import manImg from "../../../../../../public/images/man.png";
import { JobDetails } from '@/components/dashboard/services/job-details';


const freelancerData = {
    title: "Bathroom Renovation in London",
    freelancer: {
        name: "Ronald Richards",
        role: "Handyman",
        avatar: manImg,
    },
};

export default function ContractDetails() {


    return (
        <div>
            {/* sec1 */}
            <Card className="p-8 shadow-none border-smoke border-2 gap-0 mb-9.5">
                <h1 className="text-2xl font-bold mb-4.5">{freelancerData.title}</h1>
                <div className="flex items-center gap-2">
                    <Image
                        src={freelancerData.freelancer.avatar}
                        alt={freelancerData.freelancer.name}
                        width={42}
                        height={42}
                        className="rounded-md"
                    />
                    <div>
                        <p className="font-medium text-base text-light-black">
                            {freelancerData.freelancer.name}
                        </p>
                        <p className="text-base text-light-para">
                            {freelancerData.freelancer.role}
                        </p>
                    </div>
                </div>
            </Card>
            {/* sec2 */}
        </div>
    )
}


