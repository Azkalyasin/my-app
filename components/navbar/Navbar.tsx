"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/gramedia-logo.webp" width={170} height={100} alt="logo"></Image>
            </Link>
          </div>

          {/* Search and Categories (Desktop Only) */}
          <div className="hidden md:flex flex-grow items-center justify-center space-x-4 gap-4">
            {/* Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 bg-white rounded-md hover:bg-gray-300 focus:outline-none"
              >
                Kategori
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <Link href="/categories/fiction">
                  </Link>
                  <Link href="/categories/non-fiction">

                  </Link>
                  <Link href="/categories/children">

                  </Link>
                </div>
              )}
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Cari buku..."
              className="px-4 py-2 rounded-md text-black w-64 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="hover:bg-gray-200 rounded-xl p-2">
              <Link href="/Card" className="">
                <FiShoppingCart />
              </Link>
            </div>
          </div>

          {/* Login and Register (Desktop Only) */}
          <div className="hidden md:flex space-x-4">
            <Button>
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="outline">
              <Link href="/register">Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <IoMenuOutline onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} size={27} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="px-4 py-2">
            <input type="text" placeholder="Cari buku..." className="px-4 py-2 rounded-md text-black w-full mb-2" />
          </div>
          <Link href="/categories"></Link>
          <Link href="/login"></Link>
          <Link href="/register"></Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
