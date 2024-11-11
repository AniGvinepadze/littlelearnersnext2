"use client"

import Features from "@/app/components/academics/Features";
import Introduction from "@/app/components/academics/Introduction";

export default function Academics() {
  return (
    <div>
      <div className="px-7">
        <Introduction/>
        <Features/>
      </div>
    </div>
  );
}
