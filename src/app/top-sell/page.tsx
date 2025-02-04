import { ProductsGrid } from "@/components/new-arival/Products-grid"
import { products } from "@/data/new-arival"
import Link from "next/link"

export default function Top_sell() {
  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">TOP SELLING</h1>
        <ProductsGrid products={products} />
        <Link className="w-28 h-10 flex justify-center items-center border border-black hover:bg-black hover:text-white " href="/casual-product">View All</Link>
    </div>
  )
  
}
