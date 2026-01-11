// "use client";

// import React from "react";
// import Image from "next/image";
// import { Truck, Menu } from "lucide-react";

// const Hero = () => {
//   return (
//     <div className="relative w-full h-screen min-h-[600px] overflow-hidden bg-slate-900">
//       {/* 1. Background Image */}
//       {/* Note: In a real app, replace the src with your local asset */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="https://images.unsplash.com/photo-1590082725848-d30e38a2026d?q=80&w=2600&auto=format&fit=crop"
//           alt="Cement Plant Construction Site"
//           fill
//           className="object-cover object-center"
//           priority
//         />
//         {/* Dark Overlay - Improves text readability against the complex background */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
//       </div>

//       {/* 3. Hero Content */}
//       <div className="relative z-10 flex items-center h-[calc(100vh-100px)] max-w-7xl mx-auto px-6">
//         <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-start gap-6">
//           {/* Main Heading */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] drop-shadow-md">
//             Bulk Cement Supplies <br />
//             for <span className="text-orange-500">Your Project</span>
//           </h1>

//           {/* Subheading */}
//           <p className="text-lg md:text-xl text-gray-200 font-medium max-w-lg drop-shadow-sm">
//             Order Non-Trade Cement at Best Rates
//           </p>

//           {/* Divider Line */}
//           <div className="h-1 w-20 bg-white/20 my-2"></div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
//             <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-3 px-8 rounded shadow-lg shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1">
//               Order Now
//             </button>
//             <button className="bg-white hover:bg-gray-100 text-slate-900 font-bold text-lg py-3 px-8 rounded shadow-lg transition-all duration-300 transform hover:-translate-y-1">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React from "react";
// // No extra icons needed since the menu is gone
// // import { Truck } from 'lucide-react';

// const Hero = () => {
//   return (
//     <div className="relative w-full h-screen min-h-[600px] flex flex-col font-sans">
//       {/* BACKGROUND IMAGE & OVERLAY */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/image/37122bff-89cb-4568-b1df-a69d696d4b51.webp"
//           alt="Cement Plant Background"
//           className="w-full h-full object-cover"
//         />
//         {/* Dark Gradient Overlay for text readability */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
//       </div>

//       {/* HERO CONTENT */}
//       {/* Added 'justify-center' to vertically center the content since the nav is gone */}
//       <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-12">
//         <div className="max-w-3xl space-y-6">
//           {/* Main Headline */}
//           <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
//             Bulk Cement Supplies <br />
//             for <span className="text-orange-500">Your Project</span>
//           </h1>

//           {/* Subheadline */}
//           <p className="text-lg md:text-2xl text-gray-200 font-medium border-t border-gray-500/50 pt-4 inline-block">
//             Order Non-Trade Cement at Best Rates
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <button className="bg-orange-600 hover:bg-orange-500 text-white text-lg font-bold px-8 py-4 rounded shadow-lg transition-transform transform hover:-translate-y-1">
//               Order Now
//             </button>
//             <button className="bg-white hover:bg-gray-100 text-gray-900 text-lg font-bold px-8 py-4 rounded shadow-lg transition-transform transform hover:-translate-y-1">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import Link from "next/link";
import React from "react";
import FlowButton from "./FlowButton";

const Hero: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full bg-[#1a1a1a] bg-cover object-cover bg-center  sm:bg-[url('/image/37122bff-89cb-4568-b1df-a69d696d4b51.webp')]  bg-[url('/image/37122bff-89cb-4568-b1df-a69d696d4b51.webp')]">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      <div className="relative z-10 flex items-center w-full templateContainer">
        <div className="lg:w-1/2 flex items-center justify-start">
          <div className="max-w-xl text-white relative">
            <div className="relative z-10 space-y-5 pt-0 lg:pt-16">
              <h3 className="text-sm font-semibold uppercase tracking-widest border-l-2 border-[#8B7C6E] pl-4 text-[#fce9f6]">
                BULK CEMENT
              </h3>

              <h2 className="text-2xl semibold md:text-4xl lg:text-5xl font-light leading-tight">
                Bulk Cement Supplies
                <br />{" "}
                <span className="font-medium">
                  {" "}
                  For{" "}
                  <span className="text-[#fe6035] font-semibold">
                    Your Project
                  </span>
                </span>
              </h2>

              <p className="text-xl text-gray-200 font-light max-w-md">
                Your trusted Cement Partner — Nationwide And Non Trade Cement
                Bulk Order Online
              </p>

              {/* <div className="flex flex-row gap-1 md:gap-4">
                <Link href="#contact">
                  <button className="mt-4 bg-[#fe6035] cursor-pointer rounded-xs lg:mt-8 px-8 py-3 text-sm font-semibold uppercase tracking-widest  hover:text-black transition duration-300">
                    ORDER NOW
                  </button>
                </Link>

                <Link href="#contact">
                  <button className="mt-4 bg-[#fe6035]  cursor-pointer rounded-xs lg:mt-8 px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:text-black transition duration-300">
                    LEARN MORE
                  </button>
                </Link>
              </div> */}
              <div className="flex gap-4 pt-4">
                <FlowButton text="Order Now" href="#contact" />
                <FlowButton text="Learn More" href="#contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
