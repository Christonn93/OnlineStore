export type Products = Product[];

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: string[];
  reviews: [
    {
      id: string;
      username: string;
      rating: number;
      description: string;
    },
  ];
  quantity?: number;
};
