"use client";

import { social } from "@/app";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  ParentName: string;
  Email: string;
  PhoneNumber: string;
  StudentName: string;
  StudentAge: string;
  ProgramOfIntrest: string;
};

export default function StudentInformation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <main>
      <section className="flex flex-col my-32 justify-center items-center text-center w-full max-900:my-20">
        <div className="max-w-[248px] w-full">
          <button className="w-full border-2 border-text flex justify-center items-center rounded-[6px] p-1  hover:bg-primary transition ease-in-out">
            Contact
          </button>
        </div>
        <h2 className="font-bold text-[48px] py-2 max-400:text-[40px]">
          Student Information
        </h2>
        <p className="font-medium text-base flex flex-col max-w-[1000px] w-full">
          If you have specific questions or wish to request more information
          about Little Learners Academy, please complete the contact form below.
          Kindly provide the following details to help us better understand your
          needs
        </p>
      </section>
      <section>
        <div className="w-full p-10 bg-white border-l-2  border-t-2  border-b-8 border-r-8 border-text rounded-[10px] mt-16 mb-32 max-450:p-4">
          <div className="flex justify-center relative top-[-70px] max-450:top-[-30px]">
            {social.map((soc) => (
              <div key={soc.id} className="pl-5">
                <Image src={soc.img} alt="img" width={126} height={58} />
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className=" grid grid-cols-2 gap-5  max-750:grid-cols-1  ">
                <div className="">
                  <label
                    htmlFor="name"
                    className="block font-semibold text-xl  mt-7 max-550:mt-3"
                  >
                    Parent Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Parent Name"
                    className="bg-[#FFFCFA] p-5 text-text border-2 border-text rounded-md w-full mt-3"
                    {...register("ParentName", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                  <p>
                    {errors.ParentName && (
                      <span className="text-base italic text-red-500">
                        {errors.ParentName.message}
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-semibold text-xl mt-7 max-550:mt-3"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="bg-[#FFFCFA] p-5 text-text border-2 border-text rounded-md  w-full mt-3 max-550:mt-3 "
                    {...register("Email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      validate: {
                        notAdmin: (value) =>
                          value !== "admin@example.com" || "Reserved Email",
                        blackList: (value) => {
                          const blackList = ["mail.ru", "yandex.ru"];
                          const domain = value.split("@")[1];
                          return blackList.includes(domain)
                            ? "BlackListed Mail"
                            : true;
                        },
                      },
                    })}
                  />
                  <p>
                    {errors.Email && (
                      <span className="text-base italic text-red-500">
                        {errors.Email.message}
                      </span>
                    )}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="number"
                    className="block font-semibold text-xl mt-7 max-550:mt-3"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    className="bg-[#FFFCFA] p-5 text-text border-2 border-text rounded-md  w-full mt-3 "
                    {...register("PhoneNumber", {
                      required: {
                        value: true,
                        message: "Phone Number is required",
                      },
                    })}
                  />
                  <p>
                    {errors.PhoneNumber && (
                      <span className="text-base italic text-red-500">
                        {errors.PhoneNumber.message}
                      </span>
                    )}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block font-semibold text-xl mt-7 max-550:mt-3"
                  >
                    Student Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Student Name"
                    className="bg-[#FFFCFA] p-5 text-text border-2 border-text rounded-md  w-full mt-3 "
                    {...register("StudentName", {
                      required: {
                        value: true,
                        message: "Student Name is required ",
                      },
                    })}
                  />
                  <p>
                    {errors.StudentName && (
                      <span className="text-base italic text-red-500">
                        {errors.StudentName.message}
                      </span>
                    )}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="age"
                    className="block font-semibold text-xl mt-7 max-550:mt-3"
                  >
                    Student Age
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Student Age"
                    className="bg-[#FFFCFA] p-5 text-text border-2 border-text rounded-md  w-full mt-3 "
                    {...register("StudentAge", {
                      required: {
                        value: true,
                        message: "Student Age is required  w-full ",
                      },
                    })}
                  />
                  <p>
                    {errors.StudentAge && (
                      <span className="text-base italic text-red-500">
                        {errors.StudentAge.message}
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block font-semibold text-xl mt-7 max-550:mt-3"
                  >
                    Program of Intrest
                  </label>
                  <input
                    type="text"
                    placeholder="Select Program"
                    className="bg-[#FFFCFA] p-5 text-text border-2 border-text rounded-md  w-full mt-3 "
                    {...register("ProgramOfIntrest", {
                      required: {
                        value: true,
                        message: "Program of Intrest is required",
                      },
                    })}
                  />
                  <p>
                    {errors.ProgramOfIntrest && (
                      <span className="text-base italic text-red-500">
                        {errors.ProgramOfIntrest.message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="my-10">
                <label
                  htmlFor="message"
                  className="block font-semibold text-xl "
                >
                  Message
                </label>
                <input
                  type="text"
                  placeholder="Enter your Message"
                  className="bg-[#FFFCFA] p-4 text-text border-2 border-text rounded-md w-full min-h-[160px] mt-3"
                />
                <button
                  type="submit"
                  className="w-full bg-[#FFAE80] border-2 border-text rounded-[10px] flex justify-center items-center p-5 font-medium text-xl mt-7"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
