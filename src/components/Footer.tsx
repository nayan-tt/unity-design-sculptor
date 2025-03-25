
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">Gift Cards</a></li>
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">Sale</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">Our Story</a></li>
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">Our Impact</a></li>
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">Artisans</a></li>
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">FAQ</a></li>
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">Size Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">Instagram</a></li>
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">Facebook</a></li>
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">Twitter</a></li>
              <li><a href="#" className="text-xs text-impact-muted hover:text-impact-dark transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-100 text-center">
          <p className="text-xs text-impact-muted">&copy; {new Date().getFullYear()} Impact Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
