
import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, image }) => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 max-w-xs mx-auto">
      <div className="w-20 h-20 mb-4 rounded-full overflow-hidden">
        <img 
          src={image} 
          alt={author} 
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-sm italic text-impact-dark mb-2">"{quote}"</p>
      <p className="text-xs font-semibold text-impact-muted">{author}</p>
    </div>
  );
};

export default Testimonial;
