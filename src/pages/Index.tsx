import HeroSection from "@/components/HeroSection";
import GooeyTransition from "@/components/GooeyTransition";
import IncomingCall from "@/components/IncomingCall";
import ReverseGooeyTransition from "@/components/ReverseGooeyTransition";
import SelectedWorks from "@/components/SelectedWorks";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import StillHereSection from "@/components/StillHereSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div>
        
        {/* Hero Section - static, no parallax */}
        <div className="bg-[#161415]">
          <HeroSection />
        </div>
        
        {/* Gooey Transition - dark to white */}
        <GooeyTransition />
        
        {/* Incoming Call - pure white */}
        <IncomingCall />
        
        {/* Reverse Gooey Transition - white to dark */}
        <ReverseGooeyTransition />
        
        {/* Rest of sections with dark background #141414 */}
        <div className="bg-[#141414]">
          <SelectedWorks />
          <ServicesSection />
          <AboutSection />
          <StillHereSection />
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
