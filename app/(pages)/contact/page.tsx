"use client"

import Introduction from "@/app/components/contact/Indroduction"
import StudentInformation from "@/app/components/contact/StudentInformation"

export default function Contact() {
  return (
    <div>
      <div className="px-7">
        <Introduction/>
        <StudentInformation/>
      </div>
    </div>
  )
}
