import { Card, CardContent } from "@/components/ui/card";
import { Flower2, Mountain, Scissors, HardHat } from "lucide-react";

const services = [
  {
    icon: Flower2,
    title: "Landscaping",
    description: "Beautiful garden design, plant selection, and landscape installation to create stunning outdoor spaces.",
  },
  {
    icon: Mountain,
    title: "Hardscaping",
    description: "Expert installation of patios, walkways, retaining walls, and stone features for lasting durability.",
  },
  {
    icon: Scissors,
    title: "Lawn Maintenance",
    description: "Regular mowing, trimming, fertilization, and seasonal care to keep your lawn healthy and vibrant.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Quality outdoor construction including decks, fences, pergolas, and other structures.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive landscaping and construction solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
