"use client";

import { plus, minus } from "@/public/assets/index";
import { questions } from "../..";
import Image from "next/image";
import { useState } from "react";

export default function FrequentlyAskedQuestions() {
  const [toggle, setToggle] = useState(false);

  const handleOnClick = (id) => {
    setToggle((prevId) => (prevId === id ? null : id));
  };

  return (
    <main>
      <section className="flex flex-col my-32 justify-center items-center text-center w-full max-900:my-20">
        <div className="max-w-[248px] w-full">
          <button className="w-full border-2 border-text flex justify-center items-center rounded-[6px] p-1  hover:bg-primary transition ease-in-out">
            Solutions For The Doubts
          </button>
        </div>
        <h2 className="font-bold text-[48px] py-2 max-700:text-[41px] max-500:text-[35px] max-400:text-[30px]">
          Frequently Asked Questions
        </h2>
        <p className="font-medium text-base flex flex-col">
          Find all the essential information you need in our FAQ section,
          designed to address the most frequently asked questions and
          <span>
            help you make informed decisions for your child&apos;s education.
          </span>
        </p>
      </section>
      <section className="grid grid-cols-2 gap-4 max-700:grid-cols-1">
        {questions.map((question) => (
          <div
            key={question.id}
            className={`max-w-[620px] w-full rounded-[10px] border-2 border-text p-5  bg-primary  ${
              toggle === question.id ? "bg-white" : ""
            } `}
          >
            <div className="flex justify-between items-center ">
              <p className="font-bold text-lg">
                What are the school hours at Little Learners Academy?
              </p>
              <button onClick={() => handleOnClick(question.id)}>
                <Image
                  src={toggle === question.id ? minus : plus}
                  alt={toggle === question.id ? "minus" : "plus"}
                  width={32}
                  height={32}
                />
              </button>
            </div>
            {toggle === question.id ? (
              <div className="max-w-[500px] w-full">
                <div className="w-full h-[2px] bg-black my-4" />

                <p className="font-medium text-base">
                  Our school hours are from 8:00 AM to 3:00 PM, Monday to
                  Friday. We also offer extended care options for parents who
                  need early drop-off or late pick-up.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
