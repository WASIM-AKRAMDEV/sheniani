"use client";

import { ProposalTabs } from "@/components/dashboard/tabs/proposal-tabs";
import { useState } from "react";

type TabType = "Active" | "Referrals" | "Archived";

interface ProposalCardProps {
  title: string;
  profile: string;
  receivedDate: string;
  receivedAgo: string;
  jobTitle: string;
}

const ProposalCard = ({
  title,
  profile,
  receivedDate,
  receivedAgo,
  jobTitle,
}: ProposalCardProps) => (
  <div className="border-2 border-primary-500/10 rounded-2xl p-8">
    <h3 className="text-xl font-bold">{title}</h3>
    <div className="mt-6 mb-8 border-b border-theme-gray-two pb-8">
      <h5 className="text-lg font-bold">Profile</h5>
      <p className="text-base text-para font-lato">{profile}</p>
    </div>
    <div className="flex gap-18 mt-6">
      <div>
        <h5 className="text-lg font-bold">Received {receivedDate}</h5>
        <p className="text-base text-para font-lato">{receivedAgo}</p>
      </div>
      <h5 className="text-lg font-bold">{jobTitle}</h5>
    </div>
  </div>
);

export default function SPManageProposal() {
  const [activeTab, setActiveTab] = useState<TabType>("Active");

  // Define the profile separately
  const userProfile = "Handyman";

  // Active tab data with arrays
  const activeTabData = {
    offers: [
      {
        receivedDate: "March 18, 2025",
        receivedAgo: "3 days ago",
        jobTitle: "Kitchen Renovation in Manchester",
      },
      {
        receivedDate: "March 20, 2025",
        receivedAgo: "1 day ago",
        jobTitle: "Rewiring Home Office",
      },
    ],
    invitations: [
      {
        receivedDate: "March 17, 2025",
        receivedAgo: "4 days ago",
        jobTitle: "Bathroom Plumbing Repair",
      },
      {
        receivedDate: "March 19, 2025",
        receivedAgo: "2 days ago",
        jobTitle: "Fence Installation",
      },
      {
        receivedDate: "March 21, 2025",
        receivedAgo: "Today",
        jobTitle: "Custom Shelving Installation",
      },
    ],
    active: [
      {
        receivedDate: "March 15, 2025",
        receivedAgo: "6 days ago",
        jobTitle: "Bathroom Renovation in London",
      },
    ],
    submitted: [
      {
        receivedDate: "March 10, 2025",
        receivedAgo: "11 days ago",
        jobTitle: "Deck Repair and Staining",
      },
      {
        receivedDate: "March 8, 2025",
        receivedAgo: "13 days ago",
        jobTitle: "Water Heater Installation",
      },
      {
        receivedDate: "March 5, 2025",
        receivedAgo: "16 days ago",
        jobTitle: "Custom Kitchen Cabinets",
      },
    ],
  };

  // Referrals tab data
  const referralsData = [
    {
      receivedDate: "March 19, 2025",
      receivedAgo: "2 days ago",
      jobTitle: "Bathroom Remodel",
      referredBy: "James Wilson",
    },
    {
      receivedDate: "March 17, 2025",
      receivedAgo: "4 days ago",
      jobTitle: "Fence Installation",
      referredBy: "Sophia Garcia",
    },
    {
      receivedDate: "March 15, 2025",
      receivedAgo: "6 days ago",
      jobTitle: "Kitchen Renovation",
      referredBy: "William Johnson",
    },
  ];

  // Archived tab data
  const archivedData = [
    {
      receivedDate: "February 15, 2025",
      receivedAgo: "1 month ago",
      jobTitle: "Patio Construction",
    },
    {
      receivedDate: "February 20, 2025",
      receivedAgo: "1 month ago",
      jobTitle: "Smart Home Installation",
    },
  ];

  // Generate proposal cards for active tab
  const getActiveProposalCards = () => {
    return [
      {
        title: `Offers (${activeTabData.offers.length})`,
        profile: userProfile,
        receivedDate:
          activeTabData.offers.length > 0
            ? activeTabData.offers[0].receivedDate
            : "",
        receivedAgo:
          activeTabData.offers.length > 0
            ? activeTabData.offers[0].receivedAgo
            : "",
        jobTitle:
          activeTabData.offers.length > 0
            ? activeTabData.offers[0].jobTitle
            : "",
      },
      {
        title: `Invitation to Interviews (${activeTabData.invitations.length})`,
        profile: userProfile,
        receivedDate:
          activeTabData.invitations.length > 0
            ? activeTabData.invitations[0].receivedDate
            : "",
        receivedAgo:
          activeTabData.invitations.length > 0
            ? activeTabData.invitations[0].receivedAgo
            : "",
        jobTitle:
          activeTabData.invitations.length > 0
            ? activeTabData.invitations[0].jobTitle
            : "",
      },
      {
        title: `Active Proposal (${activeTabData.active.length})`,
        profile: userProfile,
        receivedDate:
          activeTabData.active.length > 0
            ? activeTabData.active[0].receivedDate
            : "",
        receivedAgo:
          activeTabData.active.length > 0
            ? activeTabData.active[0].receivedAgo
            : "",
        jobTitle:
          activeTabData.active.length > 0
            ? activeTabData.active[0].jobTitle
            : "",
      },
      {
        title: `Submitted Proposal (${activeTabData.submitted.length})`,
        profile: userProfile,
        receivedDate:
          activeTabData.submitted.length > 0
            ? activeTabData.submitted[0].receivedDate
            : "",
        receivedAgo:
          activeTabData.submitted.length > 0
            ? activeTabData.submitted[0].receivedAgo
            : "",
        jobTitle:
          activeTabData.submitted.length > 0
            ? activeTabData.submitted[0].jobTitle
            : "",
      },
    ];
  };

  // Generate proposal cards for referrals tab
  const getReferralCards = () => {
    return [
      {
        title: `Referrals (${referralsData.length})`,
        profile: userProfile,
        receivedDate:
          referralsData.length > 0 ? referralsData[0].receivedDate : "",
        receivedAgo:
          referralsData.length > 0 ? referralsData[0].receivedAgo : "",
        jobTitle: referralsData.length > 0 ? referralsData[0].jobTitle : "",
      },
    ];
  };

  // Generate proposal cards for archived tab
  const getArchivedProposalCards = () => {
    return [
      {
        title: `Archived Proposals (${archivedData.length})`,
        profile: userProfile,
        receivedDate:
          archivedData.length > 0 ? archivedData[0].receivedDate : "",
        receivedAgo: archivedData.length > 0 ? archivedData[0].receivedAgo : "",
        jobTitle: archivedData.length > 0 ? archivedData[0].jobTitle : "",
      },
    ];
  };

  // Get the appropriate cards based on the active tab
  const getTabCards = () => {
    switch (activeTab) {
      case "Active":
        return getActiveProposalCards();
      case "Referrals":
        return getReferralCards();
      case "Archived":
        return getArchivedProposalCards();
      default:
        return [];
    }
  };

  return (
    <div>
      <ProposalTabs
        defaultTab="Active"
        onTabChange={(tab) => setActiveTab(tab as TabType)}
        className="mb-8"
      />

      <div>
        {activeTab === "Active" && (
          <div className="space-y-9">
            {getTabCards().map((proposal, index) => (
              <ProposalCard key={index} {...proposal} />
            ))}
          </div>
        )}

        {activeTab === "Referrals" && (
          <div className="space-y-9">
            {referralsData.length > 0 ? (
              getTabCards().map((proposal, index) => (
                <ProposalCard key={index} {...proposal} />
              ))
            ) : (
              <div>
                <h3 className="text-lg font-semibold mb-4">Referrals</h3>
                <p className="text-para">
                  View and manage your referrals here. These are jobs that have
                  been referred to you by other users.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "Archived" && (
          <div className="space-y-9">
            {archivedData.length > 0 ? (
              getTabCards().map((proposal, index) => (
                <ProposalCard key={index} {...proposal} />
              ))
            ) : (
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Archived Proposals
                </h3>
                <p className="text-para">
                  View your archived proposals here. These are proposals that
                  have been completed, rejected, or withdrawn.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
