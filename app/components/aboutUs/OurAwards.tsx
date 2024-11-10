"use client"
import { nextBtn, prevBtn, star } from "@/public/assets/index";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { awards } from "@/app"
import Image from "next/image"


export default function OurAwards() {
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
    <main className="">
    <section className="flex flex-col my-32 justify-center items-center text-center w-full max-900:my-20">
      <div className="max-w-[248px] w-full">
        <button className="w-full border-2 border-text flex justify-center items-center rounded-[6px] p-1  hover:bg-primary transition ease-in-out">
        Our Achievements
        </button>
      </div>
      <h2 className="font-bold text-[48px] py-2 max-400:text-[40px]">
      Our Awards and Recognitions
      </h2>
      <p className="font-medium text-base flex flex-col max-w-[1000px] w-full">
      Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students.
      </p>
    </section>
    <section>

      <div className="grid grid-cols-3 gap-10 max-1000:grid-cols-2 max-600:grid-cols-1">
        {awards.map((award) => (

          <div
            className="border-l-2 border-t-2 border-text border-r-8 border-b-8 p-6 rounded-xl bg-white"
            key={award.id}
          >
            <div className="max-w-[56px] h-[56px] w-full flex justify-center items-center bg-secondary rounded-lg relative top-[-50px] my-2">
              <Image
                src={award.img}
                alt={award.title}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-2xl mt-[-10px]">
                {award.title}
              </h3>
              <p className="font-medium text-base py-3">{award.desc}.</p>
            </div>
          </div>
        ))}
      </div>
   
    </section>
  </main>
  )
}
