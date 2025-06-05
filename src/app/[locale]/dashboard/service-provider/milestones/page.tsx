"use client";

import { useState } from "react";
import { TabContent, TabPanel } from "@/components/ui/tabs";
import { MilestoneTabs } from "@/components/dashboard/tabs/milestone-tabs";
import { ProjectStats } from "@/components/dashboard/milestone/project-stats";
import type { MilestoneTabType } from "@/types/milestone";
import { mockProjectData } from "@/data/milestone-data";
import { ProjectHeader } from "@/components/dashboard/milestone/project-header";
import { MilestoneTimeline } from "@/components/dashboard/milestone/milestone-timeline";
import { MessageSection } from "@/components/dashboard/milestone/message-section";
import { ContractDetails } from "@/components/dashboard/milestone/contract-details";

export default function Milestone() {
  const [activeTab, setActiveTab] = useState<MilestoneTabType>("Overview");
  const project = mockProjectData;

  return (
    <div>
      <ProjectHeader project={project} />

      <MilestoneTabs
        defaultTab="Overview"
        onTabChange={setActiveTab}
        className="mb-8"
      />

      <TabContent activeTab={activeTab}>
        <TabPanel tabId="Overview" activeTab={activeTab}>
          <ProjectStats project={project} />
          <MilestoneTimeline milestones={project.milestones} />
        </TabPanel>

        <TabPanel tabId="Message" activeTab={activeTab}>
          <MessageSection />
        </TabPanel>

        <TabPanel tabId="Contract Details" activeTab={activeTab}>
          <ContractDetails />
        </TabPanel>
      </TabContent>
    </div>
  );
}
