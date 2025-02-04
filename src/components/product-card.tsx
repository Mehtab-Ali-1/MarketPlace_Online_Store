import Link from "next/link"
import Image from "next/image"
import { Star, StarHalf } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Product } from "@/types/casualProduct"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="aspect-square relative mb-4 bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => {
              const filled = i + 1 <= Math.floor(product.rating)
              const half = i + 0.5 === product.rating
              return (
                <span key={i}>
                  {half ? (
                    <StarHalf className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ) : (
                    <Star
                      className={cn(
                        "w-4 h-4",
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
          <span className="text-sm text-gray-600">
            {product.rating.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">${product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-gray-500 line-through">
                ${product.originalPrice}
              </span>
              <span className="text-red-500 text-sm">
                -{product.discount}%
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}

