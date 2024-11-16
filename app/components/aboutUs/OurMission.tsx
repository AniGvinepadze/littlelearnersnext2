"use client";

import { missions } from "@/app";
import Image from "next/image";

export default function OurMission() {
  return (
    <main className="">
      <section className="flex flex-col my-32 justify-center items-center text-center w-full max-900:my-20">
        <div className="max-w-[248px] w-full">
          <button className="w-full border-2 border-text flex justify-center items-center rounded-[6px] p-1  hover:bg-primary transition ease-in-out">
            Mission & Visions
          </button>
        </div>
        <h2 className="font-bold text-[48px] py-2 max-600:text-[4px] max-400:text-[36px] ">
          Our Mission & Visions
        </h2>
        <p className="font-medium text-base flex flex-col">
          We are here to provide a nurturing and inclusive environment where
          young minds can thrive, fostering a love
          <span>for learning and personal growth.</span>
        </p>
      </section>
      <section>
        <div className="flex justify-center items-center gap-8 max-850:flex-col ">
          {missions.map((mission) => (
            <div
              className="border-l-2 border-t-2 border-text border-r-8 border-b-8 p-14 rounded-xl bg-white max-700:p-10 max-450:p-6  "
              key={mission.id}
            >
              <div className="flex justify-between">
                <h3 className="font-bold text-[48px] max-400:text-[36px]">
                  {mission.title}
                </h3>
                <div className="max-w-[56px] h-[56px] w-full ">
                  <Image
                    src={mission.img}
                    alt={mission.title}
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="font-medium text-base py-3">{mission.desc}.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
