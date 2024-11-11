"use client";
import { students } from "@/app";
import Image from "next/image";
export default function Students() {
  return (
    <main className="">
      <section className="flex flex-col my-32 justify-center items-center text-center w-full max-900:my-20">
        <div className="max-w-[248px] w-full">
          <button className="w-full border-2 border-text flex justify-center items-center rounded-[6px] p-1  hover:bg-primary transition ease-in-out">
            Our Features
          </button>
        </div>
        <h2 className="font-bold text-[48px] py-2 max-400:text-[40px]">
          What Students Learn
        </h2>
        <p className="font-medium text-base flex flex-col max-w-[1000px] w-full">
          At Little Learners Academy, we strive to cultivate a love for learning
          and equip children with essential skills for their future success. Our
          academic programs cover a wide range of subjects, allowing students to
          develop a strong foundation and discover their interests. Some key
          areas of learning include
        </p>
      </section>
      <section>
        <div className="grid grid-cols-3 gap-10 max-1000:grid-cols-2 max-700:grid-cols-1">
          {students.map((student) => (
            <div
              className="border-l-2 border-t-2 border-text border-r-8 border-b-8 p-7 rounded-xl bg-white bg-bg bg-no-repeat flex flex-col justify-center bg-top text-center  container "
              key={student.id}
            >
              <div className="  w-full flex justify-center items-center   my-2 rounded-[10px] ">
                <Image
                  src={student.img}
                  alt={student.title}
                  width={320}
                  height={220}
                  className="object-contain"
                />
              </div>
              <div className="pt-9 max-1100:pt-20 max-1000:pt-9 max-800:pt-20 max-700:pt-5 max-450:pt-14 max-400:pt-20 ">
                <h3 className="font-bold text-2xl">{student.title}</h3>
                <p className="font-medium text-base py-3">{student.desc}.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
