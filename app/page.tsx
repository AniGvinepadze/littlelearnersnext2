import Image from "next/image";
import Header from "./global/Header";
import Hero from "./home/Hero";
import OurBenefits from "./home/OurBenefits";
import OurTestumonials from "./home/OurTestumonials";
import FrequentlyAskedQuestions from "./home/FrequentlyAskedQuestions"
import Navigate from "./home/Navigate"

export default function Home() {
  return (
    <div className="max-w-[1440px] w-full bg-background text-text ">
    
        <div className="px-8 py-10">
          <Hero />
          <OurBenefits />
          <OurTestumonials />
          <FrequentlyAskedQuestions/>
          <Navigate />
        </div>

    </div>
  );
}
