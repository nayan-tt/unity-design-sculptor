
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  impact?: string;
  className?: string;
  // Future Shopify-specific props
  productId?: string;
  variantId?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  title, 
  price, 
  impact,
  className,
  productId,
  variantId
}) => {
  const handleAddToCart = () => {
    // Placeholder for Shopify cart integration
    console.log('Adding to cart:', { productId, variantId, title });
    
    // Show success toast
    toast({
      title: "Added to cart",
      description: `${title} has been added to your cart.`,
    });
  };

  return (
    <div className={cn("product-card rounded-md overflow-hidden bg-white", className)}>
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
        {impact && (
          <div className="absolute bottom-0 left-0 bg-impact-blue text-white text-xs px-2 py-1">
            {impact}
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium line-clamp-2 h-10">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-semibold">{price}</span>
          <Button 
            size="sm" 
            className="text-xs h-8 bg-impact-blue hover:bg-impact-blue/90"
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
