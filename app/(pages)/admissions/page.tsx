"use client"

import Feestructure from "@/app/components/adminissions/Feestructure"
import Introduction from "@/app/components/adminissions/Introduction"
import Procces from "@/app/components/adminissions/Procces"


export default function Admission() {
  return (
    <div>
      <div className="px-7">
        <Introduction/>
        <Procces/>
        <Feestructure/>
      </div>
    </div>
  )
}
