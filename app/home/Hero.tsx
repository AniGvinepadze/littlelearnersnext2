"use client";

import { hero } from "@/public/assets/index";
import Image from "next/image";
import { info } from "..";

export default function Hero() {
  return (
    <main className="flex max-900:flex-col ">
      <section className="flex-[1] flex justify-center ">
        <Image
          src={hero}
          alt="hero"
          width={600}
          height={500}
          className="object-contain "
        />
      </section>
      <section className="flex-[1] flex p-5 flex-col justify-center max-w-[650px] w-full max-900:text-center max-500:p-0" >
        <div>
          <p className="font-medium text-lg py-[6px] max-500:pt-6 ">
            Welcome to Little Learners Academy
          </p>
          <div className="max-w-[294px] w-full h-[2px] bg-black max-900:hidden" />
        </div>
        <h2 className="font-extrabold text-[30px] py-4 max-500:text-[26px] max-500:py-1">
          Where Young Minds Blossom and{" "}
          <span className="text-orange">Dreams Take Flight.</span>{" "}
        </h2>
        <p className="font-medium text-base pb-5 max-500:pt-2">
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>

        <div className="flex bg-primary border-2 border-text  shadow-orange shadow-xl py-3 px-4 rounded-xl  max-500:flex-col">
          {info.map((info) => (
            <div key={info.id} className="px-[10px] max-500:py-1">
              <p className="font-extrabold text-[30px] py-2">{info.info}</p>
              <p className="font-bold text-base">{info.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
