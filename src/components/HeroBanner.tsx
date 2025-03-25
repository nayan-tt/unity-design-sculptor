
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  image: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative bg-white mb-8">
      <div className="container mx-auto py-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 slide-up">{title}</h1>
          <p className="text-sm md:text-base text-impact-muted mb-4 max-w-lg mx-auto slide-up">{subtitle}</p>
          <Button className="bg-impact-blue hover:bg-impact-blue/90 slide-up">Shop Now</Button>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2 md:gap-4">
          <div className="rounded-md overflow-hidden">
            <img src={image} alt="Gift 1" className="w-full h-32 md:h-48 object-cover fade-in" />
          </div>
          <div className="rounded-md overflow-hidden">
            <img src={image} alt="Gift 2" className="w-full h-32 md:h-48 object-cover fade-in" />
          </div>
          <div className="rounded-md overflow-hidden">
            <img src={image} alt="Gift 3" className="w-full h-32 md:h-48 object-cover fade-in" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
