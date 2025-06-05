"use client";

import Link from "next/link";
import { useState } from "react";

interface ProposalData {
  jobTitle: string;
  jobDescription: string;
  responsibilities: string[];
}

export function ContractDetails() {
  const proposal: ProposalData = {
    jobTitle: "Bathroom Renovation in London",
    jobDescription:
      "Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellen tesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus it amet ligula ullamcorper, pulvinar ante id, tristique erat. ",
    responsibilities: [
      "Develop new user-facing features using React.js",
      "Build reusable components and front-end libraries",
      "Translate designs and wireframes into high-quality code",
      "Optimize components for maximum performance",
      "Collaborate with back-end developers and designers",
    ],
  };

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
          <p className="text-lg font-bold mb-4">Responsibilities</p>
          <ul className="list-disc list-inside text-para font-lato flex flex-col gap-3 mb-4">
            {proposal.responsibilities
              .slice(0, itemsToShow)
              .map((responsibility, index, arr) => {
                const isLastVisibleItem = index === arr.length - 1;
                return (
                  <li key={index}>
                    {responsibility}{" "}
                    {isLastVisibleItem &&
                      proposal.responsibilities.length > 3 && (
                        <Link
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleExpanded();
                          }}
                          className="text-theme-orange font-bold"
                        >
                          {expanded ? "View Less" : "View More"}
                        </Link>
                      )}
                  </li>
                );
              })}
          </ul>

          <Link
            href="#"
            className="text-theme-orange text-base font-medium  mb-6"
          >
            View Job Posting
          </Link>
        </div>
      </div>
    );
  }

  return <JobDetailsSection proposal={proposal} />;
}
