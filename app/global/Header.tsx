"use client";
import { abstract, abstract1, bg, bg1, next } from "@/public/assets/index";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="w-full">
        <div className="w-full rounded-md border-[2px] border-text bg-secondary">
          <div className="flex justify-between">
            <div className="">
              <Image src={bg1} alt="bg" width={224} height={48} />
            </div>

            <div className="flex justify-center ">
              <div>
                <Image
                  src={abstract}
                  alt="abstract"
                  width={50}
                  height={38}
                  className="mr-14"
                />
              </div>

              <div className="flex justify-between items-center">
                <p className="font-bold text-base px-2">
                  Admission is Open, Grab your seat now
                </p>
                <Image src={next} alt="next" width={22} height={22} />
              </div>

              <div className="">
                <Image
                  src={abstract1}
                  alt="abstarct1"
                  width={32}
                  height={25}
                  className="relative top-10 left-10 object-contain"
                />
              </div>
            </div>

            <div>
              <Image src={bg} alt="bg" width={224} height={48} />
            </div>
          </div>
        </div>


        
      </div>
    </div>
  );
}
