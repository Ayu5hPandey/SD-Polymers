import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero 
      title="In the Business of Better"
      subtitle="We have the broadest portfolio and the information you need – right at your fingertips."
      backgroundImage="https://newpaceproductions.com/wp-content/uploads/video_production_heroimage.jpg"
      />
    </div>
  );
}
