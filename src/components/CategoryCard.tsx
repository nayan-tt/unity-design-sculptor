
import React from 'react';

interface CategoryCardProps {
  image: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title }) => {
  return (
    <a href="#" className="block relative group">
      <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-2">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="text-xs text-center font-medium">{title}</p>
    </a>
  );
};

export default CategoryCard;
