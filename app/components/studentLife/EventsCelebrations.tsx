"use client"

import { events } from "@/app"
import Image from "next/image"

export default function EventsCelebrations() {
  return (
    <main className="">
    <section className="flex flex-col my-32 justify-center items-center text-center w-full max-900:my-20">
      <div className="max-w-[248px] w-full">
        <button className="w-full border-2 border-text flex justify-center items-center rounded-[6px] p-1  hover:bg-primary transition ease-in-out">
          Our Features
        </button>
      </div>
      <h2 className="font-bold text-[48px] py-2 max-400:text-[40px]">
      Events & Celebrations
      </h2>
      <p className="font-medium text-base flex flex-col max-w-[1000px] w-full">
      At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include
      </p>
    </section>
    <section>
      <div className="grid grid-cols-3 gap-10 max-1000:grid-cols-2 max-700:grid-cols-1">
        {events.map((event) => (
          <div
            className="border-l-2 border-t-2 border-text border-r-8 border-b-8 p-7 rounded-xl bg-white bg-bg2 bg-no-repeat bg-container bg-center   flex flex-col justify-center  text-center  relative "
            key={event.id}
          >
        
            <div className="  w-full flex justify-center items-center   my-2 rounded-[10px] ">
              <Image
                src={event.img}
                alt={event.title}
                width={320}
                height={220}
                className="object-contain"
              />
        </div>
            <div className="pt-9 max-1100:pt-20 max-1000:pt-9 max-800:pt-20 max-700:pt-5 max-450:pt-14 max-400:pt-20 ">
              <h3 className="font-bold text-2xl">{event.title}</h3>
              <p className="font-medium text-base py-3">{event.desc}.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
  )
}
