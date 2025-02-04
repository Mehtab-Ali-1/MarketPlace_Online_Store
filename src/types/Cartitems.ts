export interface CartItem {
  id?: string; // Unique identifier for the product
  name?: string; // Name of the product
  price?: number; // Price of the product
  rating?: number; // Average rating
  ratingCount?: number; // Number of ratings
  image?: string; // URL or path to the product image
  colors?: string[]; // List of colors in hex code
  sizes?: string[]; // Available sizes
  description?: string; // Product description
  }
  