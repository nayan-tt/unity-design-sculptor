
import React from 'react';
import { Button } from '@/components/ui/button';

const NewsletterSignup: React.FC = () => {
  return (
    <section className="py-8 bg-impact-light">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto text-center">
          <h2 className="section-heading">Join the Community</h2>
          <p className="text-sm text-impact-muted mb-4">Subscribe to receive updates about new products and our impact initiatives.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-3 py-2 border border-gray-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-impact-blue"
            />
            <Button className="rounded-l-none bg-impact-blue hover:bg-impact-blue/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
