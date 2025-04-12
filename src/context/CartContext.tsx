
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  specs: { [key: string]: string };
  images: string[];
  color: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  // Update totals whenever cart changes
  useEffect(() => {
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const total = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    
    setTotalItems(itemCount);
    setSubtotal(total);
  }, [items]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        toast.success(`Updated quantity for ${product.name}`);
        return updatedItems;
      } else {
        // Item doesn't exist, add new item
        toast.success(`Added ${product.name} to cart`);
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.product.id === productId);
      if (itemToRemove) {
        toast.info(`Removed ${itemToRemove.product.name} from cart`);
      }
      return prevItems.filter(item => item.product.id !== productId);
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.info("Cart cleared");
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
