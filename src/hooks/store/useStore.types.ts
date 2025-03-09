export type Product = {
  imageUrl: string;
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
};

export type CartItem = {
  quantity: number;
} & Product;

export type StoreProps = {
  cart: CartItem[];
  totalItemsInCart: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalAmount: () => number;
};
