import Image from "next/image";
import Header from "./global/Header";

export default function Home() {
  return (
<div className="max-w-[1440px] h-screen w-full bg-background text-text">
      <div className="max-w-[1340px] m-auto">
        <Header />
      </div>
    </div>
  );
}
