export interface TSProduct {
    id: string
    name: string
    price: number
    originalPrice?: number
    rating: number
    reviews: number
    image: string
    images?: string[]
    description?: string
    colors?: string[]
    sizes?: string[]
  }
  
  export interface CartItem extends TSProduct {
    quantity: number
    selectedColor?: string
    selectedSize?: string
  }
  
  