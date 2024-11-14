"use client";

import { fee, feeInfo, services } from "@/app";

export default function Feestructure() {
  return (
    <main>
      <section className="flex flex-col my-32 justify-center items-center text-center w-full max-900:my-20">
        <div className="max-w-[248px] w-full">
          <button className="w-full border-2 border-text flex justify-center items-center rounded-[6px] p-1  hover:bg-primary transition ease-in-out">
            Our Features
          </button>
        </div>
        <h2 className="font-bold text-[48px] py-2 max-400:text-[40px]">
          Fee Structure
        </h2>
        <p className="font-medium text-base flex flex-col max-w-[1000px] w-full">
          Our fee structure is transparent, and we strive to keep our fees
          competitive within the education sector. The fees vary based on the
          program, age group, and any additional services chosen.
        </p>
      </section>

      <section>
        <div className="w-full p-10 bg-white border-l-2  border-t-2  border-b-8 border-r-8 border-text rounded-[10px]">
          <div className="bg-secondary border-2 border-text rounded-[10px] flex justify-between ">
            {fee.map((fee) => (
              <div
                key={fee.id}
                className="py-4 px-6 border-r-2 border-text max-w-[230px] w-full"
              >
                <div className="flex items-center ">
                  <p className="font-medium text-lg">{fee.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#fbf6f4] border-2 border-text rounded-[10px]  mt-6 ">
            {feeInfo.map((fee) => (
              <div key={fee.id} className="px-6 border border-text w-full ">
                <div className=" grid grid-cols-5">
                  <p className="font-medium text-lg  border-r-2 border-text min-h-[58px] py-3">
                    {fee.title}
                  </p>
                  <p className="font-medium text-lg  border-r-2 border-text p-4">
                    {fee.years}
                  </p>
                  <p className="font-medium text-lg  border-r-2 border-text p-4 ">
                    {" "}
                    {fee.annual}
                  </p>
                  <p className="font-medium text-lg  border-r-2 border-text p-4 ">
                    {fee.registration}
                  </p>
                  <p className="font-medium text-lg p-4"> {fee.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="w-full p-10 bg-white border-l-2  border-t-2  border-b-8 border-r-8 border-text rounded-[10px] mt-16 mb-32">
          <div className="bg-secondary border-2 border-text rounded-[10px] flex justify-between px-7 py-3">
            <h2 className="font-semibold text-[30px]">Additional Services</h2>
          </div>

          <div className=" bg-[#fbf6f4] border-2 border-text rounded-[10px] mt-6   ">
            {services.map((service) => (
              <div
                key={service.id}
                className="grid grid-cols-2   border border-text"
              >
                <p className="font-medium text-xl p-5">{service.title}</p>
                <p className="font-medium text-xl border-text border-l-2 min-h-[58px] p-5">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
