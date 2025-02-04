"use client"

import { useState } from "react";
import Image from "next/image";
import { Star, StarHalf, Minus, Plus } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"

interface ProductColor {
  name: string
  class: string
}

const colors: ProductColor[] = [
  { name: "Olive", class: "bg-olive-800" },
  { name: "Navy", class: "bg-navy-800" },
  { name: "Dark Green", class: "bg-green-900" },
]

const sizes = ["Small", "Medium", "Large", "X-Large"]

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedSize, setSelectedSize] = useState("Large")
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {images.map((src, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "relative h-20 w-20 overflow-hidden rounded-lg border",
                  selectedImage === index ? "border-black" : "border-gray-200"
                )}
              >
                <Image
                  src={src}
                  width={200}
                  height={200}
                  alt={`Product thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="relative flex-1 aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={images[selectedImage]}
              width={200}
              height={200}
              alt="Main product image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => {
                  const filled = i + 1 <= Math.floor(4.5)
                  const half = i + 0.5 === 4.5
                  return (
                    <span key={i}>
                      {half ? (
                        <StarHalf className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ) : (
                        <Star
                          className={cn(
                            "w-5 h-5",
                            filled
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-200"
                          )}
                        />
                      )}
                    </span>
                  )
                })}
              </div>
              <span className="text-sm text-gray-600">4.5/5</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">$260</span>
              <span className="text-lg text-gray-500 line-through">$300</span>
              <span className="rounded bg-red-100 px-2 py-1 text-sm font-medium text-red-600">
                -40%
              </span>
            </div>
            <p className="text-gray-600">
              This graphic t-shirt which is perfect for any occasion. Crafted from
              a soft and breathable fabric, it offers superior comfort and style.
            </p>
          </div>

          {/* Color Selection */}
          <div className="space-y-4">
            <span className="text-sm font-medium">Select Colors</span>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    "h-8 w-8 rounded-full",
                    color.class,
                    selectedColor.name === color.name
                      ? "ring-2 ring-black ring-offset-2"
                      : ""
                  )}
                >
                  <span className="sr-only">{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-4">
            <span className="text-sm font-medium">Choose Size</span>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "px-6 py-2 text-sm border rounded-full",
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-200 hover:border-black"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex h-12 w-12 items-center justify-center rounded-l border border-r-0 border-gray-200 hover:bg-gray-50"
              >
                <Minus className="h-4 w-4" />
              </button>
              <div className="flex h-12 w-12 items-center justify-center border border-gray-200 text-center">
                {quantity}
              </div>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="flex h-12 w-12 items-center justify-center rounded-r border border-l-0 border-gray-200 hover:bg-gray-50"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button className="flex-1 text-lg">Add to Cart</Button>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="details" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="reviews">Rating & Reviews</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4">
              <div className="prose prose-sm">
                <h4 className="text-sm font-medium">Product Information</h4>
                <p className="text-sm text-gray-600">
                  This premium graphic t-shirt is crafted from high-quality cotton,
                  featuring a unique design that makes it perfect for casual wear.
                  The fabric is breathable and comfortable, ideal for all-day wear.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium">All Reviews (45)</h4>
                  <Button variant="outline">Write a Review</Button>
                </div>
                {/* Add review components here */}
              </div>
            </TabsContent>
            <TabsContent value="faqs" className="mt-4">
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Frequently Asked Questions</h4>
                {/* Add FAQ components here */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

