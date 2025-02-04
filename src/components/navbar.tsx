"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RiCloseLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { IoPersonCircleOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <main className="">
      {/* Top Announcement Bar */}
      <div className="flex justify-center w-full h-auto min-h-[38px] p-2 bg-black text-white text-center text-nowrap md:gap-44 md:pl-16 lg:pl-24">
        <p className="flex items-center gap-3 text-sm sm:text-base px-4 ">
          Sign up and get 20% off your first order
          <span className="border-white border-b cursor-pointer  mt-1 sm:mt-0">
            Sign Up Now
          </span>
        </p>
        <RiCloseLine className="hidden md:block ml-4 text-white" />
      </div>

      {/* Navbar */}
      <nav className="flex justify-between md:justify-center items-center h-20 px-5 sm:px-8 lg:px-10 py-4 md:gap-3 lg:gap-10">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold select-none">
          SHOP.CO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center text-base gap-3 lg:gap-6 mx-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Link href="/shop" className="flex items-center text-nowrap	">
                Shop <IoIosArrowDown className="ml-1" />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="backdrop-blur-xl">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/new-arrival">Men`s</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/new-arrival">Women`s</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/casual-product">Casual</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/brands">Brands</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* <Link href="/shop" className="flex items-center text-nowrap	">
            Shop <IoIosArrowDown className="ml-1" />
          </Link> */}
          <Link className="text-nowrap	" href="/new-arrival">
            ON Sale
          </Link>
          <Link className="text-nowrap	" href="/new-arrival">
            New Arrivals
          </Link>
          <Link className="text-nowrap	" href="/brands">
            Brands
          </Link>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-slate-300 rounded-full px-3 py-2 w-[300px] lg:w-[477px]">
            <FiSearch className="font-bold text-xl" />
            <input
              className="bg-slate-300 outline-none flex-grow px-2"
              type="text"
              placeholder="Search for products..."
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-2xl">
            <Link href="/add-card">
              <LuShoppingCart />
            </Link>
            <Link href="/signup">
              <IoPersonCircleOutline />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HiMenu />
          </div>
        </div>
      </nav>

      {/* Mobile Search Bar */}
      <div className="flex md:hidden items-center bg-slate-300 rounded-full px-3 py-2 mx-4 mb-4">
        <FiSearch className="font-bold text-xl" />
        <input
          className="bg-slate-300 outline-none flex-grow px-2"
          type="text"
          placeholder="Search for products..."
        />
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-start bg-white shadow-lg px-4 py-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Link href="/shop" className="flex items-center text-nowrap	">
                Shop <IoIosArrowDown className="ml-1" />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="backdrop-blur-xl">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/new-arrivals">Men`s</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/product-list">Women`s</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/casual">Casual</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/product-list">Brands</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/product-list" className="py-2">
            ON Sale
          </Link>
          <Link href="/new-arrivals" className="py-2">
            New Arrivals
          </Link>
          <Link href="/brands" className="py-2">
            Brands
          </Link>
        </div>
      )}
    </main>
  );
};

export default Navbar;
