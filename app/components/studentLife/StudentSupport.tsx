"use client";
import { supports } from "@/app";
import Image from "next/image";
export default function StudentSupport() {
  return (
    <main className=" mb-32">
      <section className="flex flex-col my-32 justify-center items-center text-center w-full max-900:my-20">
        <div className="max-w-[248px] w-full">
          <button className="w-full border-2 border-text flex justify-center items-center rounded-[6px] p-1  hover:bg-primary transition ease-in-out">
            Our Achievements
          </button>
        </div>
        <h2 className="font-bold text-[48px] py-2 max-400:text-[40px]">
          Student Support
        </h2>
        <p className="font-medium text-base flex flex-col max-w-[1000px] w-full">
          At Little Learners Academy, we are committed to providing a supportive
          and nurturing environment that meets the unique needs of each student.
          Our student support services include
        </p>
      </section>
      <section>
        <div className="grid grid-cols-3 gap-10 max-1000:grid-cols-2 max-600:grid-cols-1">
          {supports.map((support, index) => (
            <div
              className="border-l-2 border-t-2 border-text border-r-8 border-b-8 p-6 rounded-xl bg-white "
              key={support.id}
            >
              <div
                className={`max-w-[56px] h-[56px] w-full flex justify-center items-center bg-secondary rounded-lg relative top-[-50px] my-2 ${
                  index == 2 ? "border-2 border-text" : ""
                }`}
              >
                <Image
                  src={support.img}
                  alt={support.title}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-2xl mt-[-20px]">
                  {support.title}
                </h3>
                <p className="font-medium text-base py-3">{support.desc}.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
