// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { Menu, X, Truck } from "lucide-react";

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // 🔑 Header control states
//   const [showHeader, setShowHeader] = useState(true);
//   const [scrolled, setScrolled] = useState(false);

//   const lastScrollY = useRef(0);

//   const navLinks = [
//     { name: "Home", href: "#" },
//     { name: "About Us", href: "#" },
//     { name: "Products", href: "#" },
//     { name: "Contact", href: "#" },
//   ];

//   /* ---------------------------------------
//      SCROLL HANDLING (DESKTOP + MOBILE)
//   ---------------------------------------- */
//   useEffect(() => {
//     const handleScroll = () => {
//       if (isMobileMenuOpen) return; // ⛔ stop scroll logic when menu open

//       const currentScroll = window.scrollY;

//       setScrolled(currentScroll > 50);

//       // Scroll down → hide
//       if (currentScroll > lastScrollY.current && currentScroll > 80) {
//         setShowHeader(false);
//       }

//       // Scroll up → show
//       if (currentScroll < lastScrollY.current) {
//         setShowHeader(true);
//       }

//       lastScrollY.current = currentScroll;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isMobileMenuOpen]);

//   /* ---------------------------------------
//      FORCE HEADER VISIBLE WHEN MENU OPENS
//   ---------------------------------------- */
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       setShowHeader(true);
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isMobileMenuOpen]);

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out
//         ${
//           showHeader || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
//         }
//         ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
//       `}
//     >
//       <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-14">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div className="flex items-center gap-3 cursor-pointer">
//             <Truck
//               size={40}
//               strokeWidth={1.5}
//               className={`-scale-x-100 transition-colors ${
//                 scrolled ? "text-black" : "text-white"
//               }`}
//             />
//             <div className="flex flex-col leading-none">
//               <span
//                 className={`text-xl md:text-2xl font-bold uppercase transition-colors ${
//                   scrolled ? "text-black" : "text-white"
//                 }`}
//               >
//                 BULK CEMENT
//               </span>
//               <span
//                 className={`text-xs md:text-sm tracking-[0.35em] uppercase mt-0.5 transition-colors ${
//                   scrolled ? "text-gray-600" : "text-gray-200"
//                 }`}
//               >
//                 ORDER
//               </span>
//             </div>
//           </div>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={`transition-colors ${
//                   scrolled
//                     ? "text-gray-800 hover:text-black"
//                     : "text-gray-100 hover:text-white"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* CTA */}
//           <div className="hidden md:flex">
//             <button
//               className={`px-6 py-2.5 rounded text-sm font-medium transition-colors ${
//                 scrolled
//                   ? "bg-black text-white hover:bg-gray-800"
//                   : "bg-orange-600 text-white hover:bg-orange-500"
//               }`}
//             >
//               Get a Quote
//             </button>
//           </div>

//           {/* Mobile Toggle */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className={`transition-colors ${
//                 scrolled ? "text-black" : "text-white"
//               }`}
//             >
//               {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-t shadow-lg">
//           <div className="px-4 pt-4 pb-6 space-y-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="block px-3 py-2 text-gray-800 font-medium rounded hover:bg-gray-100"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <button className="w-full mt-4 bg-black text-white py-3 rounded font-semibold hover:bg-gray-800">
//               Get a Quote
//             </button>
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
import { Menu, X, Truck, TextAlignEnd } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const lastScrollY = useRef(0);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Contact", href: "#" },
  ];

  /* ---------------------------------------
     SCROLL HANDLING
  ---------------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return;

      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);

      if (currentScroll > lastScrollY.current && currentScroll > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  /* ---------------------------------------
     LOCK SCROLL WHEN MENU OPEN
  ---------------------------------------- */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          showHeader || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-14">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Truck
                size={40}
                className={`-scale-x-100 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              />
              <div>
                <p
                  className={`font-bold text-xl ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  BULK CEMENT
                </p>
                <p
                  className={`text-xs tracking-widest ${
                    scrolled ? "text-gray-600" : "text-gray-200"
                  }`}
                >
                  ORDER
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={scrolled ? "text-gray-800" : "text-white"}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              {/* <button
                className={`px-6 py-2 rounded ${
                  scrolled ? "bg-black text-white" : "bg-orange-600 text-white"
                }`}
              >
                Get a Quote
              </button> */}
              <button
                className={`px-6 py-2 cursor-pointer rounded text-white transition-all duration-300
    hover:scale-105 hover:shadow-lg
    ${
      scrolled
        ? "bg-gradient-to-r from-black to-gray-900"
        : "bg-gradient-to-r from-orange-500 to-red-600"
    }`}
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`md:hidden ${scrolled ? "text-black" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <TextAlignEnd size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* ---------------------------------------
         MOBILE MENU (LEFT → RIGHT)
      ---------------------------------------- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop (Outside Area) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.65 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sliding Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="fixed top-0 left-0 w-[80%] max-w-sm h-full bg-white z-50 shadow-2xl"
              onClick={(e) => e.stopPropagation()} // ⛔ prevent closing when clicking inside
            >
              {/* Header */}
              {/* <div className="flex justify-between items-center p-4 border-b">
                <p className="font-bold text-lg">Menu</p>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={26} />
                </button>
              </div> */}
              <div className="flex justify-between items-center p-4 ">
                {/* Logo */}
                <div className="flex items-center gap-3">
                  <Truck size={32} className="-scale-x-100 text-black" />
                  <div>
                    <p className="font-bold text-lg text-black">BULK CEMENT</p>
                    <p className="text-xs tracking-widest text-gray-500">
                      ORDER
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={26} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col p-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-gray-800"
                  >
                    {link.name}
                  </Link>
                ))}

                <button className="mt-6 bg-black text-white py-3 rounded">
                  Get a Quote
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
