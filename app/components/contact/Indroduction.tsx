"use client";

import Image from "next/image";
import { abstract2 } from "../../../public/assets/index";
import { address2 } from "@/app";

export default function Introduction() {
  return (
    <main className="border-l-2 border-t-2 border-r-8 border-b-8 rounded-[10px] border-text bg-white my-10">
      <div>
        <Image src={abstract2} alt="absract" width={137} height={137} />
        <div className="flex justify-between px-16 pb-16  max-900:flex-col max-900:text-center max-750:px-14 max-550:px-10">
          <div className="flex-[1] ">
            <button className="border-2 border-text py-[6px] px-3 rounded-lg font-medium text-xl ">
              Contact Us
            </button>
            <h2 className="font-bold text-[36px] py-2 max-600:text-[30px]">
              Feel Free To Connect With Us
            </h2>
          </div>
          <div className="flex-[1] mt-[-30px] pl-7 max-900:pl-0 max-900:pt-10">
            <p>
              We value open communication and are eager to assist you with any
              inquiries. Feel free to reach out to us through any of the
              following contact methods
            </p>
            <div className="grid grid-cols-2 gap-5 max-1100:grid-cols-1 mt-8 max-900:grid-cols-2 max-650:grid-cols-1 max-650:p-14 max-550:p-7 max-500:p-3 max-450:p-0 ">
              {address2.map((address) => (
                <div
                  key={address.id}
                  className="bg-primary max-w-[257px] min-h-[64px] rounded-[10px] border-2 border-text flex justify-center items-center px-2 cursor-pointer hover:bg-secondary transition ease-in-out max-400:flex-col max-400:p-3 "
                >
                  <Image
                    src={address.img}
                    alt="img"
                    width={50}
                    height={50}
                    className="object-contain pr-2 "
                  />
                  <p className="text-base font-medium">{address.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
