"use client";
import Image from "next/image";
import { process } from "../../index";

export default function Procces() {
  return (
    <main>
      <section className="flex flex-col my-32 justify-center items-center text-center w-full max-900:my-20">
        <div className="max-w-[248px] w-full">
          <button className="w-full border-2 border-text flex justify-center items-center rounded-[6px] p-1  hover:bg-primary transition ease-in-out">
            Process
          </button>
        </div>
        <h2 className="font-bold text-[48px] py-2 max-400:text-[40px]">
          Admission Process
        </h2>
        <p className="font-medium text-base flex flex-col max-w-[1000px] w-full">
          Embark on a remarkable educational journey with us! Our Admission and
          Enrollment process is the gateway to providing your child with an
          exceptional learning experience at our kindergarten school
        </p>
      </section>
      <section>
        <div className="grid grid-cols-3 gap-5 max-1100:grid-cols-2 max-750:grid-cols-1 max-750:flex flex-col max-750:justify-center items-center">
          {process.map((proc) => (
            <div key={proc.id} className="my-10 max-550:my-5">
              <div className="">
                <div className="max-w-[98px] min-h-[77px] flex justify-center items-center border-l-2  border-t-2  border-b-8 border-r-8 border-text rounded-[10px] bg-white  ">
                  <p className="font-extrabold text-[40px] max-400:text-[30px] ">{proc.number}</p>
                </div>
                <div className="w-full relative top-[-17px]">
                  <Image
                    src={proc.img}
                    alt={proc.title}
                    width={90}
                    height={43}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="max-w-[400px] min-h-[255px] border-l-2  border-t-2  border-b-8 border-r-8 border-text rounded-[10px] flex flex-col justify-center px-10 bg-white mt-[-16px] max-400:p-7 ">
                <h2 className="font-bold text-[30px] py-3 max-400:text-[24px]">{proc.title}</h2>
                <p className="font-medium text-base">{proc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
