"use client";

import { img, next } from "../../../public/assets/index/index";
import { navigates } from "../../index";
import Image from "next/image";

export default function Navigate() {
  return (
    <main>
      <section className="flex flex-col my-32 justify-center items-center text-center w-full max-900:my-20">
        <div className="max-w-[248px] w-full">
          <button className="w-full border-2 border-text flex justify-center items-center rounded-[6px] p-1  hover:bg-primary transition ease-in-out">
            Explore More
          </button>
        </div>
        <h2 className="font-bold text-[48px] py-2 max-700:text-[41px] max-500:text-[35px] max-400:text-[30px]">
          Navigate through our Pages
        </h2>
        <p className="font-medium text-base flex flex-col">
          Your gateway to discovering a wealth of valuable information about our
          kindergarten school, Feel free to explore and learn
          <span>
            more about the enriching experiences that await your child at our
            kindergarten school
          </span>
        </p>
      </section>
      <section className="grid grid-cols-2 gap-4 max-700:grid-cols-1">
        {navigates.map((navigate) => (
          <div
            key={navigate.id}
            className="border-t-2 border-l-2 border-b-8 border-r-8 border-text bg-white p-8 rounded-[10px] max-w-[620px] w-full mt-3"
          >
            <h3 className="font-bold text-[34px] ">{navigate.title}</h3>
            <Image
              src={img}
              alt="img"
              width={400}
              height={20}
              className="w-full my-3"
            />
            <p className="font-medium text-base my-7 ">{navigate.desc}</p>
            <button className="bg-secondary rounded-lg max-w-[500px] w-full border-t-2 border-l-2 border-b-4 border-r-4 border-text hover:bg-[#fbd5c0] my-6 transtition ease-in-out">
              <div className="flex justify-center items-center p-3">
                <p className="font-medium text-lg px-3">Learn More</p>{" "}
                <Image src={next} alt="next" width={20} height={20} />
              </div>
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
