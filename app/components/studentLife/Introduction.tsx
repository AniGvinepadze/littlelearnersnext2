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
            Enriching Student Life
            </button>
            <h2 className="font-bold text-[36px] py-2 max-600:text-[30px]">
            Embracing Learning with Discovery and Joy
            </h2>
          </div>
          <div className="flex-[1] mt-[-20px] pl-7 max-900:pl-0 max-900:pt-10">
            <p>
            Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child&apos;s development.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
