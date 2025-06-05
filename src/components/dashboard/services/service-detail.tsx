"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Bookmark,
  Calendar,
  Mail,
  MapPin,
  Phone,
  Timer,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { JobDetails } from "./job-details";
import { SiteImages } from "./site-images";

interface JobDetail {
  label: string;
  value: string;
}

interface SiteImage {
  src: string;
  large?: boolean;
  overlay?: string;
}

interface JobData {
  id: number;
  title: string;
  phone: string;
  email: string;
  featured: boolean;
  expireDate: string;
  description: string[];
  responsibilities: string[];
  jobDetails: JobDetail[];
  images: SiteImage[];
  profileImage: string;
}

interface ServiceDetailProps {
  job: JobData;
}

export default function ServiceDetail({ job }: ServiceDetailProps) {
  const router = useRouter();
  const jobDetailsWithIcons = job.jobDetails.map((detail) => {
    let icon;
    switch (detail.label) {
      case "Job Posted":
        icon = Calendar;
        break;
      case "Start Date":
        icon = Timer;
        break;
      case "Budget":
        icon = Wallet;
        break;
      case "Location":
        icon = MapPin;
        break;
      default:
        icon = Calendar;
    }
    return { ...detail, icon };
  });

  const handleApplyNow = () => {
    router.push(`/dashboard/service-provider/submit-proposal/${job.id}`);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between w-full gap-6">
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <div className="rounded-full w-24 h-24 overflow-hidden flex-shrink-0">
            <Image
              src={job.profileImage || "/placeholder.svg"}
              width={0}
              height={0}
              sizes="100vw"
              alt="Service Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex flex-wrap justify-between items-center gap-2">
              <h2 className="text-2xl text-black font-bold">{job.title}</h2>
              {job.featured && (
                <div className="text-theme-orange bg-theme-orange/15 font-lato rounded-2xl text-sm px-4 h-8 flex justify-center items-center font-semibold">
                  Featured
                </div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex gap-2 items-center">
                <Phone className="text-black h-5 w-5" />
                <p className="text-base font-medium font-lato text-para">
                  {job.phone}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="text-black h-5 w-5" />
                <p className="text-base font-medium font-lato text-para">
                  {job.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end mt-4 lg:mt-0">
          <div className="flex gap-3">
            <Button variant="secondary" size="2xl" className="w-14 p-0">
              <Bookmark className="size-6" />
              <span className="sr-only">Save job</span>
            </Button>
            <Button size="2xl" className="w-[248px]" onClick={handleApplyNow}>
              Apply now <ArrowRight className="ml-2 size-6" />
            </Button>
          </div>
          <p className="text-sm text-para font-semibold text-right mt-3">
            Job expire in:{" "}
            <span className="text-error font-lato">{job.expireDate}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-9 gap-8">
        <div className="bg-white rounded-xl flex-1">
          <h2 className="text-xl font-bold text-black">Job Description</h2>

          {job.description.map((description, index) => (
            <p className="text-base text-para font-lato mt-4" key={index}>
              {description}
            </p>
          ))}

          <h2 className="text-xl font-bold text-black mt-8">
            Responsibilities
          </h2>
          <ul className="list-disc list-inside text-para space-y-3 pl-1">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className="mt-3 font-lato font-base">
                {responsibility}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 items-center mt-8">
            <h4 className="font-base font-semibold">Share this job:</h4>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                className="  border-primary-500/20 text-primary-500 "
              >
                <Image
                  src="/icons/facebook-simple.svg"
                  width={20}
                  height={20}
                  alt="Facebook icon"
                  className="mr-2"
                />
                Facebook
              </Button>
              <Button variant="outline" className="text-sm  text-black">
                <Image
                  src="/icons/x.svg"
                  width={20}
                  height={20}
                  alt="X icon"
                  className="mr-2"
                />
                X
              </Button>
              <Button variant="outline" className="border-error/20 text-error">
                <Image
                  src="/icons/pinterest-1 1.svg"
                  width={20}
                  height={20}
                  alt="Pinterest icon"
                  className="mr-2"
                />
                Pinterest
              </Button>
            </div>
          </div>
        </div>

        <div className="w-[448px] space-y-12">
          <Card className="rounded-xl border-2 border-theme-gray-two p-8">
            <h2 className="text-xl font-semibold text-black mb-6">
              Job Overview
            </h2>
            <JobDetails details={jobDetailsWithIcons} />
          </Card>

          <div>
            <h2 className="text-xl font-semibold text-black mb-6">
              Site Images
            </h2>
            <SiteImages images={job.images} />
          </div>
        </div>
      </div>
    </div>
  );
}
