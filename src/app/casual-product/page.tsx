"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { ColorFilter } from "@/components/filters/color-filter"
import { PriceFilter } from "@/components/filters/price-filter"
import { SizeFilter } from "@/components/filters/size-filter"
import { CategoryFilter } from "@/components/filters/category-filter"
import { StyleFilter } from "@/components/filters/style-filter"
import { cn } from "@/lib/utils"
import { FilterState, Product } from "@/types/casualProduct"


const products: Product[] = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    rating: 3.5,
    reviews: 156,
    price: 145,
    image: "/shirt1.png",
    category: "T-shirts",
    colors: ["Blue", "Pink"],
    sizes: ["Small", "Medium", "Large"],
    style: "Casual",
    description: undefined
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    rating: 4.5,
    reviews: 456,
    price: 180,
    image: "/shirt1.png",
    category: "Polos",
    colors: ["White", "Black"],
    sizes: ["Medium", "Large", "XL"],
    style: "Casual",
    description: undefined
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    rating: 5.0,
    reviews: 500,
    price: 120,
    originalPrice: 160,
    discount: 30,
    image: "/shirt1.png",
    category: "T-shirts",
    colors: ["Black"],
    sizes: ["Small", "Medium", "Large", "XL"],
    style: "Casual",
    description: undefined

  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    rating: 3.5,
    reviews: 350,
    price: 240,
    originalPrice: 260,
    discount: 20,
    image: "/shirt1.png",
    category: "Jeans",
    colors: ["Blue"],
    sizes: ["Small", "Medium", "Large"],
    style: "Casual",
    description: undefined

  },
  {
    id: 5,
    name: "Checkered Shirt",
    rating: 4.5,
    reviews: 450,
    price: 180,
    image: "/shirt1.png",
    category: "Shirts",
    colors: ["Red", "Blue"],
    sizes: ["Medium", "Large", "XL"],
    style: "Casual",
    description: undefined

  },
  {
    id: 6,
    name: "Sleeve Striped T-shirt",
    rating: 4.5,
    reviews: 450,
    price: 130,
    originalPrice: 160,
    discount: 35,
    image: "/shirt1.png",
    category: "T-shirts",
    colors: ["Gray"],
    sizes: ["Small", "Medium", "Large"],
    style: "Casual",
    description: undefined

  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    rating: 5.0,
    reviews: 500,
    price: 212,
    originalPrice: 232,
    discount: 20,
    image: "/shirt1.png",
    category: "Shirts",
    colors: ["White", "Blue"],
    sizes: ["Medium", "Large", "XL"],
    style: "Casual",
    description: undefined

  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    rating: 4.0,
    reviews: 400,
    price: 145,
    image: "/shirt1.png",
    category: "T-shirts",
    colors: ["Black", "White"],
    sizes: ["Small", "Medium", "Large"],
    style: "Casual",
    description: undefined


  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    rating: 3.0,
    reviews: 300,
    price: 80,
    image: "/shirt1.png",
    category: "Shorts",
    colors: ["Khaki"],
    sizes: ["Small", "Medium", "Large", "XL"],
    style: "Casual",  
    description: undefined
  }
]

export default function CasualPage() {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [50, 200],
    colors: [],
    sizes: [],
    styles: [],
  })
  const [sortBy, setSortBy] = useState("Most Popular")
  const [currentPage, setCurrentPage] = useState(1)
  const totalProducts = 100
  const productsPerPage = 9

  const filteredProducts = products.filter((product) => {
    if (
      filters.categories.length &&
      !filters.categories.includes(product.category)
    )
      return false
    if (
      product.price < filters.priceRange[0] ||
      product.price > filters.priceRange[1]
    )
      return false
    if (
      filters.colors.length &&
      !product.colors.some((color) => filters.colors.includes(color))
    )
      return false
    if (
      filters.sizes.length &&
      !product.sizes.some((size) => filters.sizes.includes(size))
    )
      return false
    if (filters.styles.length && !filters.styles.includes(product.style))
      return false
    return true
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <div className="space-y-6 py-6">
              <CategoryFilter
                selectedCategories={filters.categories}
                onChange={(categories) =>
                  setFilters((prev) => ({ ...prev, categories }))
                }
              />
              <PriceFilter
                range={filters.priceRange}
                onChange={(priceRange) =>
                  setFilters((prev) => ({ ...prev, priceRange }))
                }
              />
              <ColorFilter
                selectedColors={filters.colors}
                onChange={(colors) => setFilters((prev) => ({ ...prev, colors }))}
              />
              <SizeFilter
                selectedSizes={filters.sizes}
                onChange={(sizes) => setFilters((prev) => ({ ...prev, sizes }))}
              />
              <StyleFilter
                selectedStyles={filters.styles}
                onChange={(styles) => setFilters((prev) => ({ ...prev, styles }))}
              />
              <Button className="w-full" onClick={() => setFilters({
                categories: [],
                priceRange: [50, 200],
                colors: [],
                sizes: [],
                styles: [],
              })}>
                Clear Filters
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <div>
          <h1 className="text-2xl font-bold">Casual</h1>
          <p className="text-sm text-gray-600">
            Showing {(currentPage - 1) * productsPerPage + 1}-
            {Math.min(currentPage * productsPerPage, totalProducts)} of{" "}
            {totalProducts} Products
          </p>
        </div>
        <div className="ml-auto">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md px-2 py-1 text-sm"
          >
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters - Desktop */}
        <div className="hidden lg:block w-[240px] space-y-6">
          <CategoryFilter
            selectedCategories={filters.categories}
            onChange={(categories) =>
              setFilters((prev) => ({ ...prev, categories }))
            }
          />
          <PriceFilter
            range={filters.priceRange}
            onChange={(priceRange) =>
              setFilters((prev) => ({ ...prev, priceRange }))
            }
          />
          <ColorFilter
            selectedColors={filters.colors}
            onChange={(colors) => setFilters((prev) => ({ ...prev, colors }))}
          />
          <SizeFilter
            selectedSizes={filters.sizes}
            onChange={(sizes) => setFilters((prev) => ({ ...prev, sizes }))}
          />
          <StyleFilter
            selectedStyles={filters.styles}
            onChange={(styles) => setFilters((prev) => ({ ...prev, styles }))}
          />
          <Button className="w-full" onClick={() => setFilters({
            categories: [],
            priceRange: [50, 200],
            colors: [],
            sizes: [],
            styles: [],
          })}>
            Clear Filters
          </Button>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              className="p-2 border rounded-md hover:bg-gray-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
              <button
                key={index}
                className={cn(
                  "px-3 py-1 rounded-md",
                  currentPage === page
                    ? "bg-black text-white"
                    : "hover:bg-gray-50"
                )}
                onClick={() =>
                  typeof page === "number" && setCurrentPage(page)
                }
              >
                {page}
              </button>
            ))}
            <button
              className="p-2 border rounded-md hover:bg-gray-50"
              disabled={currentPage === 10}
              onClick={() => setCurrentPage((prev) => Math.min(10, prev + 1))}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

