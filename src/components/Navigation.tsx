
import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
      <div className="container mx-auto flex justify-between items-center">
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
        
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent flex-col md:flex-row gap-4 p-4 md:p-0 shadow-md md:shadow-none z-20`}>
          <a href="#" className="text-sm hover:text-impact-blue transition-colors">Home</a>
          <a href="#" className="text-sm hover:text-impact-blue transition-colors">Shop</a>
          <a href="#" className="text-sm hover:text-impact-blue transition-colors">About</a>
          <a href="#" className="text-sm hover:text-impact-blue transition-colors">Impact</a>
          <a href="#" className="text-sm hover:text-impact-blue transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
