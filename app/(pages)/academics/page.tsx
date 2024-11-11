"use client"

import Features from "@/app/components/academics/Features";
import Introduction from "@/app/components/academics/Introduction";
import OurRoomsGallery from "@/app/components/academics/OurRoomsGallery";
import Students from "@/app/components/academics/Students";

export default function Academics() {
  return (
    <div>
      <div className="px-7">
        <Introduction/>
        <Features/>
        <Students />
        <OurRoomsGallery/>
        
      </div>
    </div>
  );
}
