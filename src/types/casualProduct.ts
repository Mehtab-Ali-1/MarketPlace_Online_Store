export interface Product {
    description: any
    id: number
    name: string
    rating: number
    reviews: number
    price: number
    originalPrice?: number
    discount?: number
    image: string
    category: string
    colors: string[]
    sizes: string[]
    style: string
  }
  
  export interface FilterState {
    categories: string[]
    priceRange: [number, number]
    colors: string[]
    sizes: string[]
    styles: string[]
  }
  
  