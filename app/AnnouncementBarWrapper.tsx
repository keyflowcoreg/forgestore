"use client";

import { AnnouncementBar } from "@/components/AnnouncementBar";

export function AnnouncementBarWrapper() {
  return (
    <AnnouncementBar
      items={[
        "8 Developer Tools",
        "One Ecosystem",
        "All Live on Vercel",
        "$0 Platform Fees",
        "Lifetime Access",
      ]}
      duration={25}
      className="bg-purple-950/50 text-purple-300 border-b border-purple-900/30"
    />
  );
}
