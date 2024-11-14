"use client";
import { buttons, rooms } from "@/app";
import Image from "next/image";
export default function OurRoomsGallery() {
  return (
    <main>
      <section className="flex flex-col my-32 justify-center items-center text-center w-full max-900:my-20">
        <div className="max-w-[248px] w-full">
          <button className="w-full border-2 border-text flex justify-center items-center rounded-[6px] p-1  hover:bg-primary transition ease-in-out">
            Our Gallery
          </button>
        </div>
        <h2 className="font-bold text-[48px] py-2 max-400:text-[40px]">
          Our Rooms Gallery
        </h2>
        <p className="font-medium text-base flex flex-col max-w-[1000px] w-full">
          Step into our Gallery and immerse yourself in a visual journey of
          cherished moments and unforgettable experiences at our kindergarten
          school.
        </p>

        <div className="flex ">
          {buttons.map((btn) => (
            <div key={btn.id}>
              <button className="px-3 py-1 rounded-lg bg-white border-2 border-text mx-1 mt-7 hover:bg-secondary ">
                {btn.title}
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20">
        <div className="">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white border-l-2 border-t-2 border-b-8 rounded-xl border-r-8 border-text p-8 my-32 ">
              <div className="flex w-full justify-between relative top-[-100px]">
                <Image src={room.img1} alt="room" width={270} height={234} />
                <Image src={room.img2} alt="room" width={270} height={234} />
                <Image src={room.img3} alt="room" width={270} height={234} />
                <Image src={room.img4} alt="room" width={270} height={234} />
              </div>
              <div className="mt-[-50px]">
                <h2 className="font-boold text-[34px] pb-5">{room.title}</h2>
                <p className="font-medium text-xl py-2">{room.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
