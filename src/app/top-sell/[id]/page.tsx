'use client'

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Minus, Plus } from 'lucide-react'
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { StarRating } from "@/components/new-arival/star-rating"
import { useCart } from "@/context/cart-context"
import { products } from "@/data/new-arival"

export default function ProductPage() {
  const { id } = useParams()
  const router = useRouter()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")
  
  const product = products.find(p => p.id === id)
  
  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes) {
      toast.error("Please select a size")
      return
    }

    if (!selectedColor && product.colors) {
      toast.error("Please select a color")
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      size: selectedSize || "One Size",
      color: selectedColor || "Default",
      price: product.price,
      quantity,
      image: product.image
    })

    router.push('/add-cart')
  }

  return (
    <div className="container px-4 py-10 md:py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden border">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <StarRating rating={product.rating} count={product.ratingCount} />
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
                <span className="text-red-500 font-semibold">
                  {Math.round(
                    ((product.originalPrice - product.price) / product.originalPrice) * 100
                  )}% OFF
                </span>
              </>
            )}
          </div>

          {product.description && (
            <p className="text-muted-foreground">{product.description}</p>
          )}

          {product.colors && (
            <div className="space-y-4">
              <Label>Color</Label>
              <RadioGroup
                value={selectedColor}
                onValueChange={setSelectedColor}
                className="flex gap-2"
              >
                {product.colors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={color}
                      id={color}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={color}
                      className="h-8 w-8 rounded-full border-2 peer-aria-checked:border-primary cursor-pointer"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {product.sizes && (
            <div className="space-y-4">
              <Label>Size</Label>
              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="flex flex-wrap gap-2"
              >
                {product.sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <RadioGroupItem value={size} id={size} className="peer sr-only" />
                    <Label
                      htmlFor={size}
                      className="px-4 py-2 border rounded-md peer-aria-checked:bg-primary peer-aria-checked:text-primary-foreground cursor-pointer"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          <div className="space-y-4">
            <Label>Quantity</Label>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button className="w-full bg-black text-white hover:bg-black" size="lg" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

