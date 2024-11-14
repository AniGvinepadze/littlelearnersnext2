"use client";

import Image from "next/image";
import { abstract2 } from "../../../public/assets/index";

export default function Introduction() {
  return (
    <main className="border-l-2 border-t-2 border-r-8 border-b-8 rounded-[10px] border-text bg-white my-10">
      <div>
        <Image src={abstract2} alt="absract" width={137} height={137} />
        <div className="flex justify-between px-24 pb-16  max-900:flex-col max-900:text-center max-750:px-14 max-550:px-10">
          <div className="flex-[1] mt-[-40px]">
            <button className="border-2 border-text py-[6px] px-3 rounded-lg font-medium text-xl ">
              Admission
            </button>
            <h2 className="font-bold text-[36px] py-2 max-600:text-[30px]">
              Join Our Family of Young Learners
            </h2>
          </div>
          <div className="flex-[1] mt-[-10px] pl-7 max-900:pl-0 max-900:pt-10">
            <p>
              At Little Learners Academy, we welcome you to embark on an
              exciting educational journey for your child. Our admission process
              is designed to be transparent, straightforward, and inclusive.
              Here's a step-by-step guide to joining our school
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
