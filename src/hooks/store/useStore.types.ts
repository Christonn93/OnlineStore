export interface Product {
  id: string;
  title: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface StoreProps {
  cart: CartItem[];
  totalItemsInCart: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalAmount: () => number;
}
