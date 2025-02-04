// context/cart-context.tsx
"use client";

import { ProductCard } from "@/components/product-card";
import Image from "next/image"
import { Product } from "@/types/casualProduct";
import { describe, it } from "node:test";
import React, { createContext, useContext, useReducer, useEffect } from "react";

interface CartItem {
  id: string;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  cart: CartItem[];
}

interface CartContextProps extends CartState {
  addItem: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const initialState: CartState = {
  cart: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("cart") || "[]") : [],
};

type Action =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_CART" };

const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (itemIndex > -1) {
        // Update quantity if item exists
        return {
          ...state,
          cart: state.cart.map((item, index) =>
            index === itemIndex ? { ...item, quantity: item.quantity + action.payload.quantity } : item
          ),
        };
      }
      // Add new item
      return { ...state, cart: [...state.cart, action.payload] };
    }
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    }
    case "REMOVE_ITEM":
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addItem = (item: CartItem) => dispatch({ type: "ADD_ITEM", payload: item });
  const updateQuantity = (id: string, quantity: number) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  const removeItem = (id: string) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider value={{ ...state, addItem, updateQuantity, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};




