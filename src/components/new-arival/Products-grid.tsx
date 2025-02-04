import Link from "next/link"
import Image from "next/image"
import { StarRating } from "./star-rating"
import { ProductsGridProps } from "@/types/new-arival"

export function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <section className="w-full mx-auto py-12 flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/new-arrival/${product.id}`}
              className="group rounded-lg overflow-hidden border bg-white hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <StarRating rating={product.rating} count={product.ratingCount} />
                <div className="mt-2 flex items-center gap-2">
                  <span className="font-bold text-lg">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                      <span className="text-sm text-red-500">
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        % OFF
                      </span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

