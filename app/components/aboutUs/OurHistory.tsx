"use client";

import { history } from "@/app";
import { abstract3 } from "@/public/assets/index";
import Image from "next/image";

export default function OurHistory() {
  return (
    <main>
      <section className="flex flex-col my-32 justify-center items-center text-center w-full max-900:my-20 ">
        <div className="max-w-[248px] w-full">
          <button className="w-full border-2 border-text flex justify-center items-center rounded-[6px] p-1  hover:bg-primary transition ease-in-out">
            Our Achievements
          </button>
        </div>
        <h2 className="font-bold text-[48px] py-2 max-400:text-[40px] ">
          Our Awards and Recognitions
        </h2>
        <p className="font-medium text-base flex flex-col max-w-[1000px] w-full">
          Little Learners Academy takes pride in our commitment to delivering
          high-quality education and outstanding student experiences. We are
          honored to have received various awards and recognitions for our
          dedication to early childhood education. These accolades reflect our
          team's relentless efforts in creating an exceptional learning
          environment for our students.
        </p>
      </section>

      <section className="bg-white border-l-2 border-t-2 border-r-8 border-b-8  border-text rounded-xl p-24 max-1100:p-16  max-700:p-10" >
        {history.map((data) => (
          <div key={data.id} className="flex justify-between my-14 max-950:flex-col">
            <div className="flex justify-center items-center p-6  border-l-2 border-t-2 border-r-8 border-b-8  max-h-[110px] w-full border-text rounded-xl max-w-[330px] ">
              <Image src={abstract3} alt="img" width={60} height={60} className="object-contain max-400:w-[50px]" />
              <h3 className="font-bold text-[48px] px-3 max-400:text-[35px]">{data.year}</h3>
            </div>
            <div className="pl-10 max-950:pl-0 max-950:pt-10">
                <h3 className="font-semibold text-2xl">{data.name}</h3>
                <p className="font-medium text-base py-3">{data.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
