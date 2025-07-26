import { BenefitsSection } from "@/modules/home/components/benefits-section";
import { CTASection } from "@/modules/home/components/cta-section";
import { FeaturesSection } from "@/modules/home/components/features-section";
import { HeroSection } from "@/modules/home/components/hero-section";
import { PricingSection } from "@/modules/home/components/pricing-section";
import { VerificationWorkflowSection } from "@/modules/home/components/verification-workflow-section";

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <VerificationWorkflowSection />
      <BenefitsSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
