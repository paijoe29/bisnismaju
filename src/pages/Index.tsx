import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
// SocialProofSection import removed
import ProblemPainPointsSection from "@/components/ProblemPainPointsSection";
import SolutionSection from "@/components/SolutionSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import SecondaryCTASection from "@/components/SecondaryCTASection";
import NewsletterSignupSection from "@/components/NewsletterSignupSection";
import Footer from "@/components/Footer";

const Separator = () => <hr className="my-8 md:my-10 border-slate-300" />;

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      {/* SocialProofSection and its separator removed */}
      <Separator /> {/* This separator was likely for ProblemPainPointsSection, keeping it */}
      <ProblemPainPointsSection />
      <Separator />
      <SolutionSection />
      <Separator />
      <KeyFeaturesSection />
      <Separator />
      <UseCasesSection />
      <Separator />
      <PricingSection />
      <Separator />
      <FAQSection />
      <Separator />
      <SecondaryCTASection />
      <Separator />
      <NewsletterSignupSection />
      <Footer />
    </div>
  );
};

export default Index;