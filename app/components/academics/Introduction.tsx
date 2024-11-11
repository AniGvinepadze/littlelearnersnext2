
"use client";
import { abstract2 } from "@/public/assets/index";
import Image from "next/image";

export default function Introduction() {
  return (
    <main className="border-l-2 border-t-2 border-r-8 border-b-8 rounded-[10px] border-text bg-white my-10">
      <div>
        <Image src={abstract2} alt="absract" width={137} height={137} />
        <div className="flex justify-between px-24 pb-16  max-900:flex-col max-900:text-center max-750:px-14 max-550:px-10">
          <div className="flex-[1] mt-[-40px]">
            <button className="border-2 border-text py-[6px] px-3 rounded-lg font-medium text-xl ">
            Academics
            </button>
            <h2 className="font-bold text-[36px] py-2 max-600:text-[30px]">
            Nurturing Young Minds for Success
            </h2>
          </div>
          <div className="flex-[1] mt-[-30px] pl-7 max-900:pl-0 max-900:pt-10">
            <p>
            Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
