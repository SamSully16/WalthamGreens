import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

import image1 from "@assets/qhruqheore_1760672202189.jpg";
import image2 from "@assets/qirhoehrfoeq_1760672202189.jpg";
import image3 from "@assets/qhuqerhoqer_1760672202189.jpg";
import image4 from "@assets/ihrfiuauadsnfnsd_1760672202190.jpg";
import image5 from "@assets/jsadbiasdbiua_1760672202190.jpg";

const galleryImages = [
  {
    src: image1,
    caption: "Front Yard Landscaping",
    alt: "Beautiful front yard with lush green lawn and stone driveway",
  },
  {
    src: image2,
    caption: "Patio Installation",
    alt: "Custom paver patio with decorative border pattern",
  },
  {
    src: image3,
    caption: "Outdoor Kitchen & Patio",
    alt: "Stone outdoor kitchen with built-in grills and paver patio",
  },
  {
    src: image4,
    caption: "Retaining Wall & Landscaping",
    alt: "Multi-level stone retaining walls with flowering plants",
  },
  {
    src: image5,
    caption: "Stone Stairway",
    alt: "Custom stone stairway with decorative retaining wall",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our recent landscaping and construction projects in Waltham and surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(index)}
              data-testid={`gallery-image-${index}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-foreground text-center">
                  {image.caption}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl p-0 bg-transparent border-0">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            data-testid="button-close-lightbox"
          >
            <X size={24} />
          </button>
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <div className="bg-black/70 text-white p-4 text-center rounded-b-lg">
                <p className="text-lg font-medium">
                  {galleryImages[selectedImage].caption}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
