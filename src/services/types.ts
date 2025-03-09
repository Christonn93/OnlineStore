export type Products = Product[];

export type Product = {
  id: String;
  title: String;
  description: String;
  price: Number;
  discountedPrice: Number;
  imageUrl: String;
  rating: Number;
  tags: String[];
  reviews: [
    {
      id: String;
      username: String;
      rating: Number;
      description: String;
    },
  ];
};
