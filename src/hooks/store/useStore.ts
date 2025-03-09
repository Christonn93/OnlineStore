import { create } from 'zustand';
import { Product, StoreProps } from './useStore.types';

export const useStore = create<StoreProps>((set, get) => ({
  cart: [],
  totalItemsInCart: 0,

  addToCart: (product: Product) => {
    set(state => {
      const existingItem = state.cart.find(item => item.id === product.id);

      let updatedCart;
      if (existingItem) {
        updatedCart = state.cart.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }

      return {
        cart: updatedCart,
        totalItemsInCart: updatedCart.reduce((total, item) => total + item.quantity, 0),
      };
    });
  },

  removeFromCart: (productId: string) => {
    set(state => {
      const updatedCart = state.cart.filter(item => item.id !== productId);
      return {
        cart: updatedCart,
        totalItemsInCart: updatedCart.reduce((total, item) => total + item.quantity, 0),
      };
    });
  },

  updateQuantity: (productId: string, quantity: number) => {
    set(state => {
      const updatedCart = state.cart.map(item => (item.id === productId ? { ...item, quantity } : item));

      return {
        cart: updatedCart,
        totalItemsInCart: updatedCart.reduce((total, item) => total + item.quantity, 0),
      };
    });
  },

  clearCart: () => {
    set({ cart: [], totalItemsInCart: 0 });
  },

  getTotalAmount: () => {
    return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));
