"use client";

import { useEffect, useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

export default function ShoppingCart() {
  const [productData,setProductData] = useState<CartItem[]>([])

  // const [items, setItems] = useState<CartItem[]>([
  //   {
  //     id: 1,
  //     name: "Gradient Graphic T-shirt",
  //     size: "Large",
  //     color: "White",
  //     price: 145,
  //     quantity: 1,
  //     image: "/pic21.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Checkered Shirt",
  //     size: "Medium",
  //     color: "Red",
  //     price: 180,
  //     quantity: 1,
  //     image: "/pic22.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Skinny Fit Jeans",
  //     size: "Medium",
  //     color: "Blue",
  //     price: 240,
  //     quantity: 1,
  //     image: "/pic32.png",
  //   },
  // ]);

  const updateQuantity = (id: number, change: number) => {
    // Update state
    const updatedProductData = productData.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) } // Ensure quantity doesn't go below 1
        : item
    );
  
    // Update state
    setProductData(updatedProductData);
  
    // Update local storage
    localStorage.setItem('cart', JSON.stringify(updatedProductData));
  };

  const removeItem = (id: number) => {
    // Filter out the item by id
    const updatedProductData = productData.filter((item) => item.id !== id);
  
    // Update state
    setProductData(updatedProductData);
  
    // Update local storage
    localStorage.setItem('cart', JSON.stringify(updatedProductData));
  };

  const subtotal = productData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

 useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setProductData(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">YOUR CART</h1>

      <div className="grid md:grid-cols-[1fr,380px] gap-8">
        {/* Cart Items */}
        <div className="space-y-6">
          {productData.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 items-center border-b pb-6"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="flex-1 space-y-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{item.name}</h3>
                  <button
                    onClick={() => removeItem(item.id)}
                    title="Remove item"
                  >
                    <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <p className="text-sm text-gray-500">Color: {item.color}</p>
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      title="remove item"
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      title="items"
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="font-semibold">${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border rounded-lg p-6 h-fit space-y-4">
          <h2 className="font-semibold text-lg">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount (20%)</span>
              <span>-${discount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Delivery Fee</span>
              <span>${deliveryFee}</span>
            </div>
            <div className="flex justify-between font-semibold pt-2 border-t">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add promo code"
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Button variant="outline">Apply</Button>
            </div>

            <Button className="w-full bg-black text-white hover:bg-gray-800">
              Go to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}






