"use client";
import {
  abstract,
  abstract1,
  bg,
  bg1,
  logo,
  menu,
  next,
} from "@/public/assets/index";
import Image from "next/image";
import { navLinks } from "..";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <div>
      <div className="w-full">
        <div className="w-full rounded-md border-[2px] border-text bg-secondary">
          <div className="flex justify-between">
            <div className="max-900:w-[180px] max-750:hidden">
              <Image
                src={bg1}
                alt="bg"
                width={224}
                height={48}
                className="object-contain w-full "
              />
            </div>

            <div className="flex justify-center ">
              <div>
                <Image
                  src={abstract}
                  alt="abstract"
                  width={50}
                  height={38}
                  className="relative right-14 max-950:mr-2  max-800:hidden"
                />
              </div>

              <div className="flex items-center  max-750:p-4 text-center">
                <p className="font-bold text-base px-2 max-400:text-sm">
                  Admission is Open, Grab your seat now
                </p>
                <Image
                  src={next}
                  alt="next"
                  width={22}
                  height={22}
                  className="object-contain max-400:hidden "
                />
              </div>

              <div className="">
                <Image
                  src={abstract1}
                  alt="abstarct1"
                  width={32}
                  height={25}
                  className="relative top-9 left-10 object-contain max-900:top-6 max-800:hidden"
                />
              </div>
            </div>

            <div className="max-900:w-[180px] max-750:hidden">
              <Image
                src={bg}
                alt="bg"
                width={224}
                height={48}
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="border-2 border-text w-full bg-white my-3 flex justify-between rounded-md ">
          <div className="flex max-w-[195px] w-full  items-center p-3 bg-orange  border-text border-r-2">
            <Image src={logo} alt="logo" width={34} height={34} />
            <p className="font-semibold text-base px-[6px]">Little Learners</p>
          </div>

          <div className="flex max-1050:hidden">
            {navLinks.map((link, index) => (
              <Link key={link.id} href={link.href}>
                <ul
                  className={` w-[140px] border-text border-x flex justify-center py-4  cursor-pointer ${
                    index === 5 ? "bg-[#FFAE80]" : ""
                  } hover:bg-secondary `}
                >
                  <li className="font-semibold text-base ">{link.name}</li>
                </ul>
              </Link>
            ))}
          </div>
          <div className="hidden w-[88px] max-1050:flex">
            <button
              className=" w-full border-text border-l-2 flex justify-center items-center bg-secondary cursor-pointer hover:bg-[#FFAE80]"
              onClick={handleActive}
            >
              <Image src={menu} alt="menuBtn" width={28} height={28} />
            </button>
          </div>
        </div>

        <div className="justify-end hidden max-1050:flex ">
          {active && (
            <div className=" grid grid-cols-3 gap-4 items-center bg-white border-2 border-text w-full rounded-xl p-8 max-700:p-5 max-500:grid-cols-2">
              {navLinks.map((link, index) => (
                <Link key={link.id} href={link.href}>
                  <ul
                    className={`my-3 rounded p-3 flex justify-center items center border-2 border-text  ${
                      index === 5 ? "bg-[#FFAE80]" : ""
                    } hover:bg-secondary transition ease-in-out `}
                  >
                    <li className="font-semibold text-lg ">{link.name}</li>
                  </ul>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
