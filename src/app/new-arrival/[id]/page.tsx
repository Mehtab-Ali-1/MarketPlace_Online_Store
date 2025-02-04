"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Minus, Plus } from "lucide-react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { StarRating } from "@/components/new-arival/star-rating";
import { useCart } from "@/context/cart-context";
import { products } from "@/data/new-arival";
import { CartItem } from "@/types/Cartitems";

export default function ProductPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<any>([]);
  const [selectedColor, setSelectedColor] = useState<any>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [productData,setProductData] = useState<any>([])

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }



console.log(product);
  const handleAddToCart = () => {
    const storedCart = localStorage.getItem("cart");
    const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

    const newItem: CartItem = {
      ...product
    };

    cart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    setProductData(cart);
    router.push("/add-card");
  };

  // useEffect(() => {
  //   const storedCart = localStorage.getItem("cart");
  //   if (storedCart) {
  //     setProductData(JSON.parse(storedCart));
  //   }
  // }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs mb-8">
        <ul className="flex gap-2 text-muted-foreground">
          <li>
            <a href="/">Home</a>
          </li>
          <li>/</li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>/</li>
          <li>
            <a href="/new-arrival">Men</a>
          </li>
          <li>/</li>
          <li>{product.name}</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex gap-4">
          {/* Thumbnail Gallery */}
          <div className="flex flex-col gap-4">
            {[product.image, product.image, product.image].map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border rounded-lg overflow-hidden w-20 h-20 ${
                  selectedImage === index ? "border-black" : "border-gray-200"
                }`}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-[#F5F5F5] rounded-lg overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-2">
            <StarRating rating={product.rating} count={product.ratingCount} />
            <span className="text-sm text-muted-foreground">
              {product.rating}/5
            </span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
                <span className="text-sm text-red-500">
                  -
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  %
                </span>
              </>
            )}
          </div>

          {product.description && (
            <p className="text-muted-foreground text-sm">
              {product.description}
            </p>
          )}

          {product.colors && (
            <div className="space-y-2">
              <Label className="text-sm">Select Color</Label>
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
            <div className="space-y-2">
              <Label className="text-sm">Choose Size</Label>
              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="flex flex-wrap gap-2"
              >
                {product.sizes.map((size) => (
                  <div key={size} className="flex-1">
                    <RadioGroupItem
                      value={size}
                      id={size}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={size}
                      className="flex justify-center px-4 py-2 border rounded-md peer-aria-checked:bg-black peer-aria-checked:text-white cursor-pointer hover:bg-muted"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button
              className="flex-1 bg-black text-white hover:bg-black/90"
              size="lg"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
