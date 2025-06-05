import React from "react";
import QnA from "@/components/handyman/Qna";
import CallToAction from "@/components/home/CallToAction";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center bg-white">
      {children}
      <QnA />
      <CallToAction />
    </main>
  );
}

export default Layout;
