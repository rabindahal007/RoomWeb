import { Search, Globe, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 md:px-6 py-4 shadow-sm sticky top-0 bg-white z-50">
        
        {/* Logo */}
        <h1 className="text-lg md:text-xl font-bold text-rose-500 cursor-pointer" onClick={() => window.location.href = '/'}>
          StayFinder
        </h1>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center border rounded-full px-4 py-2 shadow-sm hover:shadow-md transition cursor-pointer">
          <span className="text-sm text-gray-600">Anywhere</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-sm text-gray-600">Any week</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-sm text-gray-400">Add guests</span>

          <div className="ml-3 bg-rose-500 p-2 rounded-full text-white">
            <Search size={16} />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* Hide on mobile */}
          <button className="hidden md:block text-sm hover:bg-gray-100 px-3 py-2 rounded-full">
            Become a host
          </button>

          <Globe className="hidden md:block cursor-pointer" size={20} />

          {/* Menu Button */}
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 border rounded-full px-3 py-2 shadow-sm cursor-pointer"
          >
            <Menu size={18} />
            <div className="w-7 h-7 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 py-2">
        <div className="flex items-center border rounded-full px-4 py-2 shadow-sm">
          <Search size={16} className="mr-2 text-gray-500" />
          <span className="text-sm text-gray-500">Where to?</span>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
          
          <div className="absolute right-0 top-0 w-64 h-full bg-white shadow-lg p-5">
            
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <X
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-4 text-sm">
              <button className="text-left">Become a host</button>
              <button className="text-left">Login</button>
              <button className="text-left">Sign up</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}