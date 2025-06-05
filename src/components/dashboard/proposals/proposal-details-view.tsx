"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ProposalData {
  id: number;
  jobTitle: string;
  jobDescription: string;
  responsibilities: string[];
  skills: string[];
  profile: string;
  hourlyRate: number;
  clientBudget: {
    min: number;
    max: number;
  };
  coverLetter: string[];
  client: {
    phoneVerified: boolean;
    paymentVerified: boolean;
    rating: number;
    reviewCount: number;
    location: string;
    locationDetails: string;
    jobsPosted: number;
    hireRate: string;
    openJobs: number;
    totalSpent: string;
    hires: number;
    activeHires: number;
    companySize: string;
  };
}

interface ProposalDetailsViewProps {
  proposal: ProposalData;
}

export default function ProposalDetailsView({
  proposal,
}: ProposalDetailsViewProps) {
  const router = useRouter();

  const handleEditProposal = () => {
    router.push(`/dashboard/service-provider/submit-proposal/${proposal.id}`);
  };

  return (
    <div className="flex justify-between gap-8">
      <div className="flex flex-1 flex-col items-start justify-start gap-8">
        <JobDetailsSection proposal={proposal} />
        <TermsSection proposal={proposal} />
        <CoverLetterSection coverLetter={proposal.coverLetter} />
      </div>
      <ClientSidebar
        client={proposal.client}
        onEditProposal={handleEditProposal}
      />
    </div>
  );
}

function JobDetailsSection({ proposal }: { proposal: ProposalData }) {
  const [expanded, setExpanded] = useState(false);

  const itemsToShow = expanded ? proposal.responsibilities.length : 3;

  const toggleExpanded = () => setExpanded((prev) => !prev);
  return (
    <div className="border-2 border-theme-gray-two rounded-lg p-8 w-full">
      <h3 className="text-xl font-bold mb-6">Job details</h3>
      <div className="mb-8">
        <h4 className="text-lg font-bold mb-4">{proposal.jobTitle}</h4>
        <p className="text-para font-lato font-base">
          {proposal.jobDescription}
        </p>
      </div>

      <div className="mb-6">
        <p className=" text-lg font-bold mb-4">Responsibilities</p>
        <ul className="list-disc list-inside text-para font-lato flex flex-col gap-3 mb-8">
          {proposal.responsibilities
            .slice(0, itemsToShow)
            .map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          {proposal.responsibilities.length > 3 && (
            <Link
              href="#"
              onClick={toggleExpanded}
              className="text-theme-orange font-bold"
            >
              {expanded ? "View Less" : "View More"}
            </Link>
          )}
        </ul>
        <Link href={"#"} className="text-theme-orange text-base font-medium  mb-6">
          View Job Posting
        </Link>
      </div>

      <h2 className="text-xl font-bold mb-4">Skills and expertise</h2>
      <div className="flex items-center gap-2">
        {proposal.skills.map((skill) => (
          <Button
            key={skill}
            variant="secondary"
            className="text-para font-medium rounded-full bg-smoke"
          >
            {skill}
          </Button>
        ))}
      </div>
    </div>
  );
}

function TermsSection({ proposal }: { proposal: ProposalData }) {
  return (
    <div className="border-2 border-theme-gray-two rounded-lg p-8 w-full">
      <h2 className="text-xl font-bold mb-6">Your Proposed Terms</h2>
      <div className="mb-8">
        <h3 className="font-bold font-lg">Profile</h3>
        <p className="font-lato text-para font-base">{proposal.profile}</p>
      </div>

      <div>
        <p className="text-lg font-bold mb-4">
          What is the rate you&apos;d like to bid for this job?
        </p>
        <div className="flex items-center justify-between ">
          <p className="text-para font-lato font-base">
            Your profile rate: ${proposal.hourlyRate.toFixed(2)}/hr
          </p>
          <p className="text-para font-lato font-base">
            Client&apos;s budget: ${proposal.clientBudget.min.toFixed(2)} - $
            {proposal.clientBudget.max.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="border-t border-theme-gray-two my-8">
        <div className="py-8 border-b border-theme-gray-two ">
          <div>
            <h3 className="font-bold mb-0.5 text-lg">Hourly rate</h3>
            <p className="font-lato text-para font-base mb-2">
              Total amount the client will see on your proposal
            </p>
            <p className="font-lato font-bold">
              ${proposal.hourlyRate.toFixed(2)} /hr
            </p>
          </div>
        </div>

        <div className="py-8 border-b border-theme-gray-two ">
          <div>
            <h3 className="font-bold mb-0.5 text-lg">You&apos;ll receive</h3>
            <p className="font-lato text-para font-base mb-2">
              The estimated amount you&apos;ll receive after service fees
            </p>
            <p className="font-lato font-bold">
              ${proposal.hourlyRate.toFixed(2)} /hr
            </p>
          </div>
        </div>
        <div className="py-8 border-b border-theme-gray-two ">
          <div className="flex items-center justify-between">
            <div>
              <h3 className=" text-lg font-bold leading-6">
                You&apos;ll receive
              </h3>
              <p className="text-para font-lato font-base">
                The estimated amount you&apos;ll receive after service fees
              </p>
            </div>
            <div className="flex items-end gap-3">
              <Input
                placeholder={`$${proposal.hourlyRate.toFixed(2)}`}
                className="border-1 border-theme-gray px-5 py-5 text-right shadow-none placeholder:text-right placeholder:text-para placeholder:font-lato"
              />
              <p className="font-bold font-lato">/hr</p>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <div>
            <h3 className=" font-bold mb-0.5 text-lg">Rate increase</h3>
            <p className="font-lato text-para font-base mb-2">
              Rate increase the client will see on your proposal
            </p>
            <p className="font-lato font-bold">None</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoverLetterSection({ coverLetter }: { coverLetter: string[] }) {
  return (
    <div className="border-2 border-theme-gray-two rounded-lg p-8 w-full">
      <h2 className="text-xl font-bold mb-4">Cover Letter</h2>
      {coverLetter.map((paragraph, index) => (
        <p key={index} className="font-lato text-para font-base mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function ClientSidebar({
  client,
  onEditProposal,
}: {
  client: ProposalData["client"];
  onEditProposal: () => void;
}) {
  return (
    <div className="w-[330px] border-2 border-theme-gray-two rounded-lg p-8 h-fit">
      <div className="flex flex-col gap-3 mb-6">
        <Button className="w-full" onClick={onEditProposal}>
          Edit proposal
        </Button>
        <Button variant="secondary" className="w-full">
          Withdraw Proposal
        </Button>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-4">About The Client</h2>
        <div className="flex items-center gap-2 mb-3">
          <CircleCheck className="text-green-500" size={18} />
          <p className="text-para font-lato font-base">Phone Number Verified</p>
        </div>
        <div className="flex items-center gap-2">
          <CircleCheck className="text-green-500" size={18} />
          <p className="text-para font-lato font-base">
            Payment Method Verified
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="ratingStar flex items-center gap-0.5 mb-1">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src="/icons/star.svg"
              alt="star"
              width={19}
              height={18}
              className="make-yellow"
            />
          ))}
          <h4 className="text-para text-xs font-lato ms-1">
            {client.rating.toFixed(1)}
          </h4>
        </div>
        <p className="text-black font-lato font-sm font-bold mb-1">
          {client.rating.toFixed(1)} out of {client.reviewCount} reviews
        </p>
      </div>

      <ClientDetailItem
        title={client.location}
        description={client.locationDetails}
      />

      <ClientDetailItem
        title={`${client.jobsPosted} jobs posted`}
        description={`${client.hireRate} hire rate, ${client.openJobs} open jobs`}
      />

      <ClientDetailItem
        title={`${client.totalSpent} total spent`}
        description={`${client.hires} hires, ${client.activeHires} active`}
      />

      <div>
        <p className="text-para font-lato font-semibold font-xs mb-4">
          {client.companySize}
        </p>
      </div>
    </div>
  );
}

function ClientDetailItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-4">
      <p className="text-black font-lato font-sm font-bold mb-1">{title}</p>
      <p className="text-para font-lato font-semibold text-xs">{description}</p>
    </div>
  );
}
