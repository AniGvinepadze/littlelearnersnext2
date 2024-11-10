"use client";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { rankings } from "../..";
import Image from "next/image";
import { nextBtn, prevBtn, star } from "@/public/assets/index";
import { useRef } from "react";

export default function OurTestumonials() {
  //   const swiperRef = useRef(null);

  //   const handlePrevClick = () => {
  //     if (swiperRef.current) {
  //       swiperRef.current.slidePrev();
  //     }
  //   };

  //   const handleNextClick = () => {
  //     if (swiperRef.current) {
  //       swiperRef.current.slideNext();
  //     }
  //   };
  return (
    <main>
      <section className="flex flex-col my-32 justify-center items-center text-center w-full max-900:my-20">
        <div className="max-w-[248px] w-full">
          <button className="w-full border-2 border-text flex justify-center items-center rounded-[6px] p-1  hover:bg-primary transition ease-in-out">
            Their Happy Words 🤗
          </button>
        </div>
        <h2 className="font-bold text-[48px] py-2 max-500:text-[35px]">
          Our Testimonials
        </h2>
        <p className="font-medium text-base flex flex-col">
          Our testimonials are heartfelt reflections of the nurturing
          environment we provide, where children flourish both
          <span>academically and emotionally.</span>
        </p>
      </section>

      <section>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          className="my-swiper-container"
          //   onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <div>
            <button>
              <Image src={prevBtn} alt="prevBtn" width={58} height={58} />
            </button>
            {rankings.map((ranking) => (
              <SwiperSlide key={ranking.id}>
                <div className="border-l-2 border-t-2 border-text border-r-8   border-b-8 p-6 rounded-xl bg-white flex flex-col justify-center items-center text-center ">
                  <Image
                    src={ranking.img}
                    alt={ranking.name}
                    width={80}
                    height={80}
                  />
                  <p className="font-bold text-2xl my-2">{ranking.name}</p>
                  <div className="flex  my-2">
                    {Array(5)
                      .fill()
                      .map((_, index) => (
                        <Image
                          key={index}
                          src={star}
                          alt="star"
                          width={24}
                          height={24}
                        />
                      ))}
                  </div>
                  <p className="font-medium text-xl my-2">{ranking.desc}</p>
                </div>
              </SwiperSlide>
            ))}
            <button>
              <Image src={nextBtn} alt="nextBtn" width={58} height={58} />
            </button>
          </div>
        </Swiper>
      </section>
    </main>
  );
}
