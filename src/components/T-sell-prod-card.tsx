// import Link from "next/link";
// import Image from "next/image";
// import { Star } from 'lucide-react';
// import { Product } from "@/types/casualProduct";

// interface ProductCardProps {
//   product: Product
// }

// export function TSProductCard({ product }: ProductCardProps) {
//   return (
//     <Link href={`/product/${product.id}`} className="group">
//       <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
//         <Image
//           src={product.image}
//           alt={product.name}
//           className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
//         />
//       </div>
//       <div className="mt-4 space-y-1">
//         <h3 className="text-sm font-medium">{product.name}</h3>
//         <div className="flex items-center gap-1">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <Star
//               key={i}
//               className={`h-4 w-4 ${
//                 i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
//               }`}
//             />
//           ))}
//           <span className="text-sm text-muted-foreground">({product.reviews})</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="text-lg font-bold">${product.price}</span>
//           {product.originalPrice && (
//             <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
//           )}
//         </div>
//       </div>
//     </Link>
//   )
// }

