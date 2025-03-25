
import React from 'react';
import Navigation from '../components/Navigation';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import StatsSection from '../components/StatsSection';
import Testimonial from '../components/Testimonial';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

// Placeholder images - in a real app these would be imported properly
const placeholderImage = 'https://placehold.co/400x300/e6e6e6/cccccc';
const personImage = 'https://placehold.co/200x200/e6e6e6/cccccc';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-1">
        <HeroBanner 
          title="Every Purchase Makes a Difference" 
          subtitle="Buy artisan products & support ethical craftsmanship worldwide"
          image={placeholderImage}
        />
        
        <section className="py-8 mb-8">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="section-heading">Shop by Impact</h2>
              <Button variant="outline" size="sm" className="text-xs">See all</Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ProductCard 
                image={placeholderImage} 
                title="Handwoven Basket - Natural Fibers" 
                price="$45.00"
                impact="Supports 10+ Artisans"
              />
              <ProductCard 
                image={placeholderImage} 
                title="Recycled Plastic Tote Bag" 
                price="$35.00"
                impact="Ocean Cleanup"
              />
              <ProductCard 
                image={placeholderImage} 
                title="Organic Cotton Scarf" 
                price="$29.00"
                impact="Women Empowerment"
              />
              <ProductCard 
                image={placeholderImage} 
                title="Sustainable Bamboo Utensils" 
                price="$18.00"
                impact="Reforestation"
              />
            </div>
          </div>
        </section>
        
        <section className="py-8 mb-8 bg-impact-light">
          <div className="container mx-auto">
            <h2 className="section-heading text-center mb-6">Bestsellers changing lives</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <ProductCard 
                  image={placeholderImage} 
                  title="Artisan Leather Journal" 
                  price="$32.00"
                  impact="Education Fund"
                  className="h-full"
                />
              </div>
              <div className="md:row-span-2">
                <ProductCard 
                  image={placeholderImage} 
                  title="Hand-painted Ceramic Bowl Set" 
                  price="$75.00"
                  impact="Rural Artisans"
                  className="h-full"
                />
              </div>
              <div className="md:col-span-1">
                <ProductCard 
                  image={placeholderImage} 
                  title="Recycled Glass Vase" 
                  price="$40.00"
                  impact="Waste Reduction"
                  className="h-full"
                />
              </div>
            </div>
            <div className="text-center mt-6">
              <Button className="bg-impact-blue hover:bg-impact-blue/90">Shop All Products</Button>
            </div>
          </div>
        </section>
        
        <StatsSection />
        
        <section className="py-8 mb-8">
          <div className="container mx-auto">
            <h2 className="section-heading text-center mb-6">What People are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Testimonial 
                quote="The quality of these products is amazing. I love knowing my purchase supports artisans around the world."
                author="Sarah J., California"
                image={personImage}
              />
              <Testimonial 
                quote="I bought gifts for my entire family here. Everyone loved the unique items and the stories behind them."
                author="Michael T., New York"
                image={personImage}
              />
              <Testimonial 
                quote="The customer service is exceptional, and I feel good about supporting such a meaningful mission."
                author="Elena R., Texas"
                image={personImage}
              />
            </div>
          </div>
        </section>
        
        <section className="py-8 mb-8">
          <div className="container mx-auto">
            <h2 className="section-heading text-center mb-6">Categories</h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              <CategoryCard image={placeholderImage} title="Bags" />
              <CategoryCard image={placeholderImage} title="Jewelry" />
              <CategoryCard image={placeholderImage} title="Home Decor" />
              <CategoryCard image={placeholderImage} title="Kitchen" />
              <CategoryCard image={placeholderImage} title="Apparel" />
              <CategoryCard image={placeholderImage} title="Gifts" />
            </div>
          </div>
        </section>
        
        <section className="py-8 mb-8">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="section-heading">New arrivals categorized</h2>
              <Button variant="outline" size="sm" className="text-xs">See all</Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ProductCard 
                image={placeholderImage} 
                title="Fair Trade Coffee Beans" 
                price="$14.00"
                impact="Farmer Support"
              />
              <ProductCard 
                image={placeholderImage} 
                title="Handmade Soap Set" 
                price="$22.00"
                impact="Women Artisans"
              />
              <ProductCard 
                image={placeholderImage} 
                title="Recycled Metal Earrings" 
                price="$19.00"
                impact="Waste Reduction"
              />
              <ProductCard 
                image={placeholderImage} 
                title="Embroidered Pillow Cover" 
                price="$28.00"
                impact="Indigenous Crafts"
              />
            </div>
          </div>
        </section>
        
        <section className="py-8 mb-8 bg-impact-light">
          <div className="container mx-auto">
            <h2 className="section-heading text-center mb-6">Empower individuals</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <h3 className="text-lg font-medium mb-3">84,750+ lives improved through our marketplace</h3>
                <p className="text-sm text-impact-muted mb-4">We connect artisans from developing communities with conscious consumers worldwide.</p>
                <Button className="bg-impact-blue hover:bg-impact-blue/90">Shop to Support</Button>
              </div>
            </div>
          </div>
        </section>
        
        <NewsletterSignup />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
