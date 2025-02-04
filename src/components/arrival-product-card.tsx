import Image from "next/image"
import Link from "next/link"
import { Star } from 'lucide-react'
import { cn } from "@/lib/utils"

interface ProductCardProps {
  name: string
  price: number
  originalPrice?: number
  discount?: string
  rating: number
  image: string
  href: string
}

export function ProductCard({
  name,
  price,
  originalPrice,
  discount,
  rating,
  image,
  href
}: ProductCardProps) {
  return (
    <Link href={href} className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={image}
          alt={name}
          
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-sm font-medium">{name}</h3>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-200"
              )}
            />
          ))}
          <span className="text-sm text-gray-600">{rating}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">${price}</span>
          {originalPrice && (
            <>
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice}
              </span>
              {discount && (
                <span className="text-xs text-red-600">-{discount}</span>
              )}
            </>
          )}
        </div>
      </div>
    </Link>
  )
}

