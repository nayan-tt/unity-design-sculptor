
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  // This would be integrated with Shopify's cart functionality
  const cartIsEmpty = true;

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      
      {cartIsEmpty ? (
        <div className="text-center py-10">
          <p className="text-gray-500 mb-4">Your cart is empty</p>
          <Link to="/shop">
            <Button className="bg-impact-blue hover:bg-impact-blue/90">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {/* Cart items would be displayed here */}
          <div className="flex justify-between mt-6 pt-6 border-t">
            <h2 className="text-lg font-semibold">Total</h2>
            <p className="text-lg font-bold">$0.00</p>
          </div>
          
          <div className="flex justify-end">
            <Button className="bg-impact-blue hover:bg-impact-blue/90">
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
