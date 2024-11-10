import Image from "next/image";
import Header from "./global/Header";
import Hero from "./home/Hero";
import OurBenefits from "./home/OurBenefits";
import OurTestumonials from "./home/OurTestumonials";
import FrequentlyAskedQuestions from "./home/FrequentlyAskedQuestions"

export default function Home() {
  return (
    <div className="max-w-[1440px] w-full bg-background text-text ">
    
        <div className="px-3 py-10">
          <Hero />
          <OurBenefits />
          <OurTestumonials />
          <FrequentlyAskedQuestions/>
        </div>

    </div>
  );
}
