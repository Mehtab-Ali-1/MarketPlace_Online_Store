export interface Product {
    id: string
    name: string
    price: number
    originalPrice?: number
    rating: number
    ratingCount: number
    image: string
    colors?: string[]
    sizes?: string[]
    description?: string
  }
  
  export interface ProductsGridProps {
    products: Product[]
  }