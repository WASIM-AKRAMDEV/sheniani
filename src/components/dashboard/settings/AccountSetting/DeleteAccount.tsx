"use client";

import { AlertCircle } from "lucide-react";

export function DeleteAccount() {
  const handleDeleteAccount = () => {
    console.log("Account deletion requested");
    // Handle account deletion here
  };

  return (
    <div>
      <div className="mb-4">
        <p className="text-light-para text-sm max-w-134 mb-5">
          If you delete your Jobpilot account, you will no longer be able to get
          information about the matched jobs, following employers, and job
          alert, shortlisted jobs and more. You will be abandoned from all the
          services of Jobpilot.com.
        </p>
      </div>
      <button
        onClick={handleDeleteAccount}
        className="px-0 text-error hover:bg-transparent hover:text-error flex items-center gap-2"
      >
        <AlertCircle size={24} />
        <span className="font-medium text-sm">Close Account</span>
      </button>
    </div>
  );
}
