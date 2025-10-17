import HeroSection from "../HeroSection";

export default function HeroSectionExample() {
  return (
    <HeroSection
      onGetEstimate={() => console.log("Get estimate clicked")}
      onLearnMore={() => console.log("Learn more clicked")}
    />
  );
}
