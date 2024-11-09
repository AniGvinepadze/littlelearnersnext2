import Image from "next/image";
import Header from "./global/Header";
import Hero from "./home/Hero";

export default function Home() {
  return (
    <div className="max-w-[1440px] w-full bg-background text-text ">
      <div className="max-w-[1340px] m-auto pt-7 px-3">
        <Header />
        <div className="px-3 py-10">
        <Hero />
        </div>
      </div>
    </div>
  );
}
