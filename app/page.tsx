import Hero from "@/components/Hero";
import ComparisonSection from "@/components/ComparisonSection";
import OriginStory from "@/components/OriginStory";
import Founders from "@/components/Founders";
import Philosophy from "@/components/Philosophy";
import Lineage from "@/components/Lineage";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ComparisonSection />
      <OriginStory />
      <Founders />
      <Philosophy />
      <Lineage />
      <FinalCTA />
    </div>
  );
}
