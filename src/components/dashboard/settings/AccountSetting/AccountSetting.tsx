"use client";

import { ContactInfoForm } from "./ContactInfoForm";
import { NotificationForm } from "./NotificationForm";
import { JobAlertsForm } from "./JobAlertsForm";
import { PasswordForm } from "./PasswordForm";
import { DeleteAccount } from "./DeleteAccount";
import { PrivacySettings } from "./PrivacySettings";

export default function AccountSetting() {
  return (
    <div className="w-full space-y-8">
      {/* Contact Info Section */}
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-4.5 text-light-black">
          Contact Info
        </h2>
        <ContactInfoForm />
      </section>

      {/* Notification Section */}
      <section className="border-y border-theme-gray mb-8 py-8">
        <h2 className="text-lg font-medium mb-5 text-light-black">
          Notification
        </h2>
        <NotificationForm />
      </section>

      {/* Job Alerts Section */}
      <section className="border-b border-theme-gray mb-8 pb-8">
        <h2 className="text-lg font-medium mb-4.5 text-light-black">
          Job Alerts
        </h2>
        <JobAlertsForm />
      </section>

      {/* Privacy Section */}
      <section className="border-b border-theme-gray mb-8 pb-8">
        <h2 className="text-lg font-medium mb-4.5 text-light-black">
          Privacy Settings
        </h2>
        <PrivacySettings />
      </section>

      {/* Change Password Section */}
      <section className="border-b border-theme-gray mb-8 pb-8">
        <h2 className="text-lg text-light-black font-medium mb-4.5">
          Change Password
        </h2>
        <PasswordForm />
      </section>

      {/* Delete Account Section */}
      <section className="mb-8">
        <h2 className="text-lg text-light-black font-medium mb-3">
          Delete Your Account
        </h2>
        <DeleteAccount />
      </section>
    </div>
  );
}
