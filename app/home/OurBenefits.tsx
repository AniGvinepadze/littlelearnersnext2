"use client";
import Image from "next/image";

import { benefits } from "..";

export default function OurBenefits() {
  return (
    <main className="">
      <section className="flex flex-col my-20 justify-center items-center text-center w-full">
        <div className="max-w-[248px] w-full">
          <button className="w-full border-2 border-text flex justify-center items-center rounded-[6px] p-1  hover:bg-primary transition ease-in-out">
            Children Deserve Bright Future
          </button>
        </div>
        <h2 className="font-bold text-[48px] py-2 max-400:text-[40px]">Our Benefits</h2>
        <p className="font-medium text-base flex flex-col">
          With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay{" "}
          <span>a strong foundation for your child's future.</span>
        </p>
      </section>
      <section>
        <div className="grid grid-cols-3 gap-10 max-1000:grid-cols-2 max-600:grid-cols-1">
          {benefits.map((benefit) => (
            <div
              className="border-l-2 border-t-2 border-text border-r-8 border-b-8 p-6 rounded-xl bg-white"
              key={benefit.id}
            >
              <div className="max-w-[56px] h-[56px] w-full border-[1.5px] border-text flex justify-center items-center bg-secondary rounded-lg relative top-[-50px] my-2">
                <Image
                  src={benefit.img}
                  alt={benefit.title}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-2xl mt-[-10px]">
                  {benefit.title}
                </h3>
                <p className="font-medium text-base py-3">{benefit.desc}.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
