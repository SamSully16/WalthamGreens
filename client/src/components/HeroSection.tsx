import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Landscaping_hero_background_image_005a06a8.png";

interface HeroSectionProps {
  onGetEstimate: () => void;
  onLearnMore: () => void;
}

export default function HeroSection({ onGetEstimate, onLearnMore }: HeroSectionProps) {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      
      <div className="relative z-10 text-center px-6 md:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Reliable Landscaping & Construction Services in Waltham, MA
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Transform your outdoor space with professional landscaping and construction services you can trust
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={onGetEstimate}
            size="lg"
            variant="default"
            className="text-lg px-8 py-6 shadow-xl"
            data-testid="button-get-estimate-hero"
          >
            Get a Free Estimate
          </Button>
          <Button
            onClick={onLearnMore}
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>
      </div>

      <button
        onClick={() => {
          const aboutSection = document.getElementById("about");
          aboutSection?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        data-testid="button-scroll-down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
