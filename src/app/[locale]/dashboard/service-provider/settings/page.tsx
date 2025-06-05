"use client";

import AccountSetting from "@/components/dashboard/settings/AccountSetting/AccountSetting";
import Personal from "@/components/dashboard/settings/Personal/Personal";
import ProfileForm from "@/components/dashboard/settings/Profile/Profile";
import SocialLinks from "@/components/dashboard/settings/SocialLinks/SocialLinks";
import { SettingsTabs } from "@/components/dashboard/tabs/settings-tabs";
import { useState } from "react";

type SettingsTabType =
  | "Personal"
  | "Profile"
  | "Social Links"
  | "Account Setting";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTabType>("Personal");

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6">Setting</h2>

      {/* Tab Navigation using the reusable component */}
      <SettingsTabs defaultTab="Personal" onTabChange={setActiveTab} />

      {/* Tab Content */}
      <div className="py-6">
        {activeTab === "Personal" && <Personal />}

        {activeTab === "Profile" && <ProfileForm />}

        {activeTab === "Social Links" && <SocialLinks />}

        {activeTab === "Account Setting" && <AccountSetting />}
      </div>
    </div>
  );
}
