"use client";

import { Card } from "@/components/ui/card";

export function MessageSection() {
  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-none border-smoke border-2">
        <h3 className="text-xl font-bold mb-4">Messages</h3>
      </Card>
    </div>
  );
}
