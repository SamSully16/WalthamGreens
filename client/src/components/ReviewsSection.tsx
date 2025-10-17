import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Anderson Christopher",
    rating: 5,
    review: "US LANDSCAPING & CONSTRUCTION has completely elevated our home's curb appeal. We opted for a custom paver patio and walkway, and the results are stunning. The precision in the stonework is impeccable – every cut is perfect, and the pattern is flawless. It's clear that they take immense pride in their craftsmanship and pay attention to even the smallest details. They used high-quality materials and the construction feels solid and built to last. This wasn't just a job for them; it was an art project. Highly, highly recommend!",
  },
  {
    name: "Glauce Dutra",
    rating: 5,
    review: "In a industry where delays and cost overruns are common, US LANDSCAPING & CONSTRUCTION was a refreshing exception. They provided a clear and detailed quote upfront with no hidden fees. Throughout our patio and garden project, they stuck to the timeline and the budget meticulously. Any minor changes were communicated clearly with updated costs before proceeding. This transparency and integrity mean the world to a homeowner. We ended up with a beautiful outdoor space without any stressful surprises. Thank you for your honesty and reliability!",
  },
  {
    name: "Kristen Kimmons",
    rating: 5,
    review: "We had a tight timeline to get our landscaping done before a family event, and this company delivered right on time without sacrificing quality. They were communicative, courteous, and delivered a finished product that got compliments all evening.",
  },
  {
    name: "Nadav Azrayev",
    rating: 5,
    review: "I recently hired US Landscaping & Construction for a complete overhaul of my yard, and I couldn't be more pleased with the results! From the initial consultation to the final touches, the team was professional, knowledgeable, and truly dedicated to bringing my vision to life.",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from satisfied homeowners in Waltham and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300"
              data-testid={`review-card-${index}`}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                      data-testid={`star-${index}-${i}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{review.review}"
                </p>
                <p className="font-semibold text-foreground">
                  {review.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
