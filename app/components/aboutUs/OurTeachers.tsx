"use client";

import { teachers } from "@/app";
import { mail } from "@/public/assets/index";
import Image from "next/image";

export default function OurTeachers() {
  return (
    <main className="mb-32">
      <section className="flex flex-col my-32 justify-center items-center text-center w-full max-900:my-20 ">
        <div className="max-w-[248px] w-full">
          <button className="w-full border-2 border-text flex justify-center items-center rounded-[6px] p-1  hover:bg-primary transition ease-in-out">
            Our Teachers With Experties
          </button>
        </div>
        <h2 className="font-bold text-[48px] py-2 max-400:text-[40px] ">
          Our Team Members
        </h2>
        <p className="font-medium text-base flex flex-col max-w-[1000px] w-full">
          At Little Learners Academy, our teaching team is the heart of our
          educational journey. We take great pride in employing highly qualified
          and passionate educators who possess a deep understanding of early
          childhood development. Our teachers create a warm and engaging
          atmosphere, encouraging curiosity, instilling confidence, and
          fostering a love for learning.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-10 max-850:grid-cols-1">
        {teachers.map((teacher) => (
          <div key={teacher.id} className=" bg-white border-l-2 border-t-2 border-r-4 border-b-4  border-text rounded-lg p-8 max-w-[620px] w-full max-500:p-4  ">
            <div className="flex justify-between">
              <div className="flex">
                <Image src={teacher.img} alt={teacher.name} width={80} height={80}/>
                <h3 className="font-semibold text-2xl px-2 mt-5 max-550:text-[22px]">{teacher.name}</h3>
              </div>
              <Image src={mail} alt="mail" width={48} height={48}/>
            </div>
            <div className="bg-secondary rounded-[10px] border-2 border-text p-4  mt-5">
               <p className="font-semibold text-xl pb-4">{teacher.subject}</p>
               <p className="font-medium text-base">{teacher.info}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
