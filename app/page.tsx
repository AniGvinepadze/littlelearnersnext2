
import Hero from "./components/home/Hero";
import OurBenefits from "./components/home/OurBenefits";
import OurTestumonials from "./components/home/OurTestumonials";
import FrequentlyAskedQuestions from "./components/home/FrequentlyAskedQuestions";
import Navigate from "./components/home/Navigate";

export default function Home() {
  return (
    <div className="max-w-[1440px] w-full bg-background text-text ">
      <div className="px-8 py-10">
        <Hero />
        <OurBenefits />
        <OurTestumonials />
        <FrequentlyAskedQuestions />
        <Navigate />
      </div>
    </div>
  );
}
