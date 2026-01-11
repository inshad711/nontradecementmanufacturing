// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu, X, Truck } from "lucide-react";

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#" },
//     { name: "About Us", href: "#" },
//     { name: "Products", href: "#" },
//     { name: "Contact", href: "#" },
//   ];

//   return (
//     <header className="w-full absolute top-0 z-50 bg-transparent">
//       <div className=" max-w-[1400px] mx-auto px-4 md:px-12 lg:px-14">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
//             <div className="relative">
//               <Truck
//                 size={40}
//                 strokeWidth={1.5}
//                 className="text-white transform -scale-x-100"
//               />
//             </div>

//             {/* Text Stack */}
//             <div className="flex flex-col leading-none">
//               <span className="text-xl md:text-2xl font-bold tracking-wide text-white uppercase">
//                 BULK CEMENT
//               </span>
//               <span className="text-xs md:text-sm tracking-[0.35em] text-gray-200 font-medium uppercase mt-0.5">
//                 ORDER
//               </span>
//             </div>
//           </div>

//           {/* Center/Right: Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-md font-normal text-gray-100 hover:text-white transition-colors duration-200"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Far Right: CTA Button */}
//           <div className="hidden md:flex items-center ml-4">
//             <button className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium py-2.5 px-6 rounded shadow-sm transition-colors duration-200">
//               Get a Quote
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-gray-200 hover:text-white focus:outline-none"
//             >
//               {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-blue-900 border-t border-blue-700">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <div className="pt-4 pb-2">
//               <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded">
//                 Get a Quote
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Truck } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🔑 Default states (flash-free)
  const [showHeader, setShowHeader] = useState(false);
  const [scrolled, setScrolled] = useState(true);

  const lastScrollY = useRef(0);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Contact", href: "#" },
  ];

  /* ---------------------------------------
     INITIAL LOAD + SCROLL HANDLING
  ---------------------------------------- */
  useEffect(() => {
    const initialScroll = window.scrollY;
    lastScrollY.current = initialScroll;

    // Initial state on refresh
    if (initialScroll <= 10) {
      setShowHeader(true);
      setScrolled(false);
    } else {
      setShowHeader(false);
      setScrolled(true);
    }

    const handleScroll = () => {
      if (isMobileMenuOpen) return; // pause scroll logic when menu open

      const currentScroll = window.scrollY;

      // Background change
      setScrolled(currentScroll > 50);

      // Scroll DOWN → hide
      if (currentScroll > lastScrollY.current && currentScroll > 80) {
        setShowHeader(false);
      }

      // Scroll UP → show
      if (currentScroll < lastScrollY.current) {
        setShowHeader(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  /* ---------------------------------------
     BODY SCROLL LOCK (Mobile Menu)
  ---------------------------------------- */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-14">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <Truck
              size={40}
              strokeWidth={1.5}
              className={`transform -scale-x-100 transition-colors ${
                scrolled ? "text-black" : "text-white"
              }`}
            />
            <div className="flex flex-col leading-none">
              <span
                className={`text-xl md:text-2xl font-bold uppercase transition-colors ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                BULK CEMENT
              </span>
              <span
                className={`text-xs md:text-sm tracking-[0.35em] uppercase mt-0.5 transition-colors ${
                  scrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                ORDER
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors ${
                  scrolled
                    ? "text-gray-800 hover:text-black"
                    : "text-gray-100 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <button
              className={`px-6 py-2.5 rounded text-sm font-medium transition-colors ${
                scrolled
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-orange-600 text-white hover:bg-orange-500"
              }`}
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-800 font-medium rounded hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-4 bg-black text-white py-3 rounded font-semibold hover:bg-gray-800">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
