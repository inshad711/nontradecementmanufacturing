// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Phone, Briefcase, ArrowRight } from "lucide-react";

// // --- Types & Interfaces ---
// interface AnimatedButtonProps {
//   href: string;
//   children: React.ReactNode;
//   variant?: "primary" | "secondary";
//   delay?: number;
//   icon?: React.ReactNode;
// }

// // --- Reusable Animated Button Component ---
// const AnimatedButton: React.FC<AnimatedButtonProps> = ({
//   href,
//   children,
//   variant = "primary",
//   delay = 0,
//   icon,
// }) => {
//   // Styles based on the variant (mimicking btn-default and btn-highlighted)
//   const isPrimary = variant === "primary";

//   return (
//     <motion.a
//       href={href}
//       // Initial Entrance Animation (simulating wow fadeInUp)
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.6,
//         delay: delay,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       // Hover Animation Properties
//       whileHover="hover"
//       whileTap="tap"
//       className={`
//         relative overflow-hidden group
//         inline-flex items-center justify-center gap-3
//         px-8 py-4 rounded-full
//         font-bold text-base tracking-wide uppercase
//         transition-colors duration-300 ease-out
//         border-2
//         ${
//           isPrimary
//             ? "bg-white text-orange-600 border-white hover:border-black"
//             : "bg-transparent text-white border-white hover:border-orange-500"
//         }
//         cursor-pointer shadow-lg hover:shadow-xl
//       `}
//     >
//       {/* Background Fill Animation Layer */}
//       <motion.div
//         variants={{
//           hover: {
//             scale: 10, // Expands to fill the button
//             transition: { duration: 0.4, ease: "easeInOut" },
//           },
//           initial: { scale: 0 },
//         }}
//         initial="initial"
//         className={`
//           absolute w-10 h-10 rounded-full -z-10
//           top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2
//           ${isPrimary ? "bg-black" : "bg-orange-600"}
//         `}
//       />

//       {/* Content Layer (Ensures text stays on top of background fill) */}
//       <span
//         className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${
//           isPrimary ? "group-hover:text-white" : "group-hover:text-white"
//         }`}
//       >
//         {icon && <span className="text-xl">{icon}</span>}
//         {children}
//       </span>

//       {/* Optional: Arrow that slides in on hover */}
//       <motion.span
//         variants={{
//           hover: { x: 5, opacity: 1 },
//           initial: { x: -5, opacity: 0 },
//         }}
//         className="relative z-10 hidden sm:inline-block"
//       >
//         <ArrowRight size={18} />
//       </motion.span>
//     </motion.a>
//   );
// };

// // --- Main Hero Section Component ---
// export default function Button() {
//   return (
//     <div className="min-h-screen bg-neutral-900 flex items-center justify-center relative overflow-hidden">
//       {/* Background Image / Overlay (Simulating a Hero Section) */}
//       <div
//         className="absolute inset-0 z-0 opacity-40"
//         style={{
//           backgroundImage:
//             'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* Dark Overlay Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent z-0" />

//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto px-4 text-center">
//         {/* Title (Just for context) */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-extrabold text-white mb-6"
//         >
//           Elevate Your Business
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
//         >
//           Premium dealership opportunities available now. Join our network of
//           successful partners across the globe.
//         </motion.p>

//         {/* The Requested Buttons Block */}
//         <div className="hero-content-body flex flex-col sm:flex-row items-center justify-center gap-6">
//           {/* Button 1: Call Now (btn-default behavior) */}
//           <AnimatedButton
//             href="tel:+917484065270"
//             variant="primary"
//             delay={0.5} // data-wow-delay="0.5s"
//             icon={<Phone size={20} />}
//           >
//             Call Now Bulk Order
//           </AnimatedButton>

//           {/* Button 2: Dealership (btn-highlighted behavior) */}
//           <AnimatedButton
//             href="tel:+917484065270"
//             variant="secondary"
//             delay={0.7} // Staggered slightly
//             icon={<Briefcase size={20} />}
//           >
//             Contact For Dealership
//           </AnimatedButton>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-200 flex items-center justify-center p-4 font-sans">
      <FlowButton />
    </div>
  );
}

const FlowButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/contact" className="inline-block">
      <button
        type="button"
        className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-white px-2 py-1 pl-6 shadow-md transition-all duration-300 hover:shadow-lg active:scale-95"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Black Fill Animation */}
        <div
          className={`absolute left-0 top-0 bottom-0 z-0 bg-black transition-all duration-500 ease-in-out ${
            isHovered ? "w-full" : "w-0"
          }`}
        />

        {/* Text */}
        <span className="z-10 text-lg font-medium text-orange-500">
          Contact Us
        </span>

        {/* Icon */}
        <div className="relative z-10 flex p-2 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-300 group-hover:scale-105">
          <ArrowRight
            className={`h-5 w-5 transition-transform duration-300 ease-in-out ${
              isHovered ? "rotate-0" : "-rotate-45"
            }`}
          />
        </div>
      </button>
    </Link>
  );
};
