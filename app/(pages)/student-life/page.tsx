"use client";

import Activities from "@/app/components/studentLife/Activities";
import EventsCelebrations from "@/app/components/studentLife/EventsCelebrations";
import Introduction from "@/app/components/studentLife/Introduction";

export default function StudentLife() {
  return (
    <div>
      <div className="px-7">
        <Introduction />
        <Activities />
        <EventsCelebrations/>
      </div>
    </div>
  );
}
