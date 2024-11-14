"use client";
import { abstract2 } from "@/public/assets/index";
import Image from "next/image";
export default function Welcome() {
  return (
    <main className="border-l-2 border-t-2 border-r-8 border-b-8 rounded-[10px] border-text bg-white my-10">
      <div>
        <Image src={abstract2} alt="absract" width={137} height={137} />
        <div className="flex justify-between px-24 pb-16  max-900:flex-col max-900:text-center max-750:px-14 max-550:px-10">
          <div className="flex-[1] mt-[-40px]">
            <button className="border-2 border-text py-[6px] px-3 rounded-lg font-medium text-xl ">
              Overview
            </button>
            <h2 className="font-bold text-[36px] py-2 max-600:text-[30px]">
              Welcome to Little Learners Academy
            </h2>
          </div>
          <div className="flex-[1] mt-[-30px] pl-7 max-900:pl-0 max-900:pt-10">
            <p>
              A leading kinder garden school dedicated to providing a nurturing
              and stimulating environment for young learners. With a commitment
              to excellence in early education, we believe in shaping curious
              minds and building a strong foundation for a lifelong love of
              learning. Our holistic approach fosters intellectual, social,
              emotional, and physical development, ensuring that each child
              reaches their full potential.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
