import Hero from "@/components/Hero";
import OriginStory from "@/components/OriginStory";
import Founders from "@/components/Founders";
import Philosophy from "@/components/Philosophy";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <OriginStory />
      <Founders />
      <Philosophy />
      <FinalCTA />
    </div>
  );
}
