
import React, { useState } from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // This would be updated from your Shopify cart state

  return (
    <nav className="py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button 
            className="md:hidden mr-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
          
          <Link to="/" className="font-bold text-xl">Impact</Link>
        </div>
        
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent flex-col md:flex-row gap-4 p-4 md:p-0 shadow-md md:shadow-none z-20`}>
          <Link to="/" className="text-sm hover:text-impact-blue transition-colors">Home</Link>
          <Link to="/shop" className="text-sm hover:text-impact-blue transition-colors">Shop</Link>
          <Link to="/about" className="text-sm hover:text-impact-blue transition-colors">About</Link>
          <Link to="/impact" className="text-sm hover:text-impact-blue transition-colors">Impact</Link>
          <Link to="/contact" className="text-sm hover:text-impact-blue transition-colors">Contact</Link>
        </div>
        
        <div className="relative">
          <Link to="/cart" className="p-2">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-impact-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
