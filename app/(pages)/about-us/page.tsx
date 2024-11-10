import OurAwards from "@/app/components/aboutUs/OurAwards";
import OurMission from "@/app/components/aboutUs/OurMission";
import Welcome from "@/app/components/aboutUs/Welcome";

export default function AboutUs() {
  return (
    <div>
     <div className="px-7">
        <Welcome/>
        <OurMission/>
        <OurAwards />
     </div>
    </div>
  )
}
