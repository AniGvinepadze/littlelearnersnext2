"use client";
import { logo } from "@/public/assets/index";
import Image from "next/image";
import { address, links1, links2, links3, links4, soccial } from "..";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="max-w-[1340px] w-full m-auto rounded-xl mt-16 border-t-2 border-l-2 border-b-8 border-r-8 border-text p-16  bg-white max-900:p-12 max-600:p-7">
      <main>
        <div className="flex justify-between max-1100:flex-col ">
          <div className="max-w-[430px] w-full ">
            <div className="flex">
              <Image src={logo} alt="logo" width={50} height={50} />
              <h3 className="font-medium text-2xl px-1 pt-2">
                Little Learners
              </h3>
            </div>
            <p className="font-medium  text-[17px] py-4">
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
          </div>
          <div className="grid grid-cols-4 max-550:grid-cols-2">
            <div className="pl-5 max-1100:pl-0">
              {links1.map((link, index) => (
                <Link href="/" key={link.id}>
                  <div className="max-w-[120px] w-full pl-6 max-700:pl-0 ">
                    <p
                      className={`text-base font-medium' pt-5 ${
                        link.index === 0 ? "font-bold" : ""
                      } max-700:pt-3`}
                    >
                      {link.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="pl-5">
              {links2.map((link, index) => (
                <Link href="/about-us" key={link.id}>
                  <div className="max-w-[120px] w-full ">
                    <p
                      className={`text-base font-medium' pt-5 ${
                        link.index === 0 ? "font-bold" : ""
                      } max-700:pt-3`}
                    >
                      {link.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className=" pl-6 max-500:my-4 max-550:pl-0">
              {links3.map((link, index) => (
                <Link href="/academics" key={link.id}>
                  <div className="max-w-[130px] w-full ">
                    <p
                      className={`text-base font-medium' pt-5  ${
                        link.index === 0 ? "font-bold" : ""
                      } max-700:pt-3`}
                    >
                      {link.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className=" pl-5 max-550:mt-6 ">
              {links4.map((link, index) => (
                <Link href="/contact" key={link.id}>
                  <div key={link.id} className="max-w-[120px] w-full">
                    <p
                      className={`text-base font-medium' pt-5 ${
                        link.index === 0 ? "font-bold" : ""
                      } max-700:pt-3 `}
                    >
                      {link.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[-70px] w-full max-1100:mt-10 ">
          {address.map((soc) => (
            <div key={soc.id} className="flex pt-4">
              <Image src={soc.img} alt="soc" width={40} height={40} />
              <p className="font-medium text-xl px-1 pt-1 max-400:text-lg">
                {soc.title}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full h-[1px] bg-black my-8" />
        <div className="flex justify-between max-700:flex-col max-700:text-center">
          <div className="flex">
            <p>Terms of Service</p>
            <div className="h-[24px] w-[2px] mx-4 bg-black mt-[1px] max-450:mx-1" />
            <p>Privacy Policy</p>
            <div className="h-[24px] w-[2px] mx-4 bg-black max-450:mx-1 mt-[1px]" />
            <p>Cookie Policy</p>
          </div>
          <div>
            <div className="flex max-700:mt-7 max-700:justify-center">
              {soccial.map((soc) => (
                <div key={soc.id} className="flex mx-[4px] mt-[-2px]">
                  <Image src={soc.img} alt="soc" width={40} height={40} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black my-8" />
        <div className="flex justify-center">
          <p className="font-medium">
            Copyright © [2023] Little Learners Academy. All rights reserved.
          </p>
        </div>
      </main>
    </footer>
  );
}
