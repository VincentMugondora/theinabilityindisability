import HeroSection from '@/components/sections/HeroSection';
import TrustIndicators from '@/components/sections/TrustIndicators';
import MissionPreview from '@/components/sections/MissionPreview';
import ProgramsSummary from '@/components/sections/ProgramsSummary';
import ImpactStoriesSection from '@/components/sections/ImpactStoriesSection';
import CallToAction from '@/components/sections/CallToAction';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustIndicators />
      <MissionPreview />
      <ProgramsSummary />
      <ImpactStoriesSection />
      <CallToAction />
    </div>
  );
}
