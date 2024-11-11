"use client"

import Features from "@/app/components/academics/Features";
import Introduction from "@/app/components/academics/Introduction";
import Students from "@/app/components/academics/Students";

export default function Academics() {
  return (
    <div>
      <div className="px-7">
        <Introduction/>
        <Features/>
        <Students />
      </div>
    </div>
  );
}
