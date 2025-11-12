import Image from "next/image";
import Hero from "@/components/section/Hero";
import AppleStyleSlider from "@/components/ui/AppleStyleSlider";
import PartnersSection from "@/components/section/partnership";
import Markets from "@/components/section/marketlist";


export default function Home() {
  return (
    <div>
      <Hero 
      title="In the Business of Better"
      subtitle="We have the broadest portfolio and the information you need – right at your fingertips."
      backgroundImage="/S.D Polymers.png"
      />
      <AppleStyleSlider/>
      <Markets/>
      
    </div>
  );
}
