"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-[64px] flex items-center justify-between px-12">
      {/* Left: Circular icon/avatar */}
      <div className="flex items-center">
        <div className="w-11 h-11 rounded-[12px] border border-gray-300 flex items-center justify-center" />
      </div>

      {/* Right: Grouped links and separate button */}
      <div className="flex items-center space-x-4">
        {/* Grouped links container without separation lines */}
        <div className="flex rounded-[20px] border border-gray-300 overflow-hidden">
          <Link href="#" className="px-6 py-2 text-white font-regular text-lg opacity-50 hover:opacity-100 transition-all">
            Features
          </Link>
          <Link href="#" className="px-6 py-2 text-white font-regular text-lg opacity-50 hover:opacity-100 transition-all">
            How It Works
          </Link>
          <Link
            href="#"
            className="px-6 py-2 text-white font-regular text-lg opacity-50 hover:opacity-100 transition-all"
          >
            Team
          </Link>
        </div>

        {/* Separate Get Started button */}
        <Link
          href="#"
          className="px-6 py-2 rounded-[20px]  border border-white text-white font-semibold text-lg bg-transparent hover:bg-white hover:text-black transition-colors duration-300"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
