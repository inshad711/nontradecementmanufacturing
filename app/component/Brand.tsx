"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";

// --- Data Extraction ---
// Extracted directly from the HTML snippet provided.
const BRANDS = [
  {
    id: 1,
    name: "Sri Chakra Cement",
    src: "https://buildsuvidha.s3.ap-south-1.amazonaws.com/brand/brand-sri-chakra-cement-290",
    link: "/shop?search=&attrib=39-290",
  },
  {
    id: 2,
    name: "Dalmia Cement",
    src: "https://buildsuvidha.s3.ap-south-1.amazonaws.com/Home+Page/Top+Cement+Brands/brand-dalmia-cement-68.png",
    link: "/shop?search=&attrib=40-68",
  },
  {
    id: 3,
    name: "Maha Cement",
    src: "https://buildsuvidha.s3.ap-south-1.amazonaws.com/brand/brand-maha-cement-76",
    link: "/shop?search=&attrib=41-76",
  },
  {
    id: 4,
    name: "JSW Cement",
    src: "https://buildsuvidha.s3.ap-south-1.amazonaws.com/Home+Page/Top+Cement+Brands/brand-jsw-cement-73.png",
    link: "/shop?search=&attrib=42-73",
  },
  {
    id: 5,
    name: "UltraTech Cement",
    src: "https://buildsuvidha.s3.ap-south-1.amazonaws.com/Home+Page/Top+Cement+Brands/brand-ultratech-cement-88.png",
    link: "/shop?search=&attrib=43-88",
  },
  {
    id: 6,
    name: "Coromandel King",
    src: "https://buildsuvidha.s3.ap-south-1.amazonaws.com/brand/brand-coromandel-king-cement-67",
    link: "/shop?search=&attrib=44-67",
  },
  {
    id: 7,
    name: "Sagar Cement",
    src: "https://buildsuvidha.s3.ap-south-1.amazonaws.com/Home+Page/Top+Cement+Brands/brand-sagar-cement-84.png",
    link: "/shop?search=&attrib=45-84",
  },
  {
    id: 8,
    name: "Bharathi Cement",
    src: "https://buildsuvidha.s3.ap-south-1.amazonaws.com/Home+Page/Top+Cement+Brands/brand-bharathi-cement-59.png",
    link: "/shop?search=&attrib=46-59",
  },
  {
    id: 9,
    name: "Zuari Cement",
    src: "https://buildsuvidha.s3.ap-south-1.amazonaws.com/Home+Page/Top+Cement+Brands/brand-zuari-cement-89.png",
    link: "/shop?search=&attrib=76-89",
  },
  {
    id: 10,
    name: "Deccan Cement",
    src: "https://buildsuvidha.s3.ap-south-1.amazonaws.com/brand/brand-deccan-cement-69",
    link: "/shop?search=&attrib=77-69",
  },
  {
    id: 11,
    name: "Penna Cement",
    src: "https://buildsuvidha.s3.ap-south-1.amazonaws.com/Home+Page/Top+Cement+Brands/brand-penna-cement-81.png",
    link: "/shop?search=&attrib=79-81",
  },
];

// --- Components ---

const BrandCard = ({ brand }: { brand: (typeof BRANDS)[0] }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex-shrink-0 px-4 py-2 w-[160px] md:w-[180px]">
      <a
        href={brand.link}
        className="group block bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-4 transition-all duration-300 transform hover:-translate-y-1 h-32 flex items-center justify-center relative overflow-hidden"
      >
        {/* Hover Effect Background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Image / Fallback */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {!imgError ? (
            <img
              src={brand.src}
              alt={`Buy ${brand.name} Online`}
              className="max-h-full max-w-full object-contain  group-hover:grayscale-0 transition-all duration-300"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-400 text-center">
              <AlertCircle size={24} className="mb-1" />
              <span className="text-[10px] font-medium leading-tight">
                {brand.name}
              </span>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default function Brand() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicating brands to ensure smooth infinite scrolling even on wide screens
  const extendedBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const speed = 0.8; // Pixels per frame - adjust for speed

    const scroll = () => {
      if (!isHovered && scrollContainer) {
        scrollContainer.scrollLeft += speed;

        // Reset scroll position when we reach the end of the first set (infinite loop effect)
        // We calculate the width of a single set of items roughly
        const singleSetWidth = scrollContainer.scrollWidth / 3;

        if (scrollContainer.scrollLeft >= singleSetWidth * 2) {
          scrollContainer.scrollLeft = singleSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-slate-50 p-8">
      {/* Container matching .top-cement-brands */}

      <section className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10">
        {/* Header Section */}
        <div className="relative mb-10 text-center">
          {/* Decorative Line (HR) */}
          {/* <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200"></div>
          </div> */}

          {/* Heading */}
          {/* <div className="relative flex justify-center">
            <h3 className="bg-white px-6 text-2xl font-semibold md:text-3xl font-bold text-slate-800 uppercase tracking-wide">
              Top Cement Brands
            </h3>
          </div>
          <p className="relative mt-2 text-sm text-slate-500 bg-white inline-block px-4">
            Premium quality cement for your dream construction
          </p> */}
          <div className="text-center max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3">
                Top Cement <span>Brands</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                We supply a full range of high-quality bulk cement tailored to
                meet your specific construction needs.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons (Visible on Hover for desktop) */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-20 bg-white p-2 rounded-full shadow-lg border border-gray-100 text-slate-600 hover:text-blue-600 hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 hidden md:flex"
            aria-label="Previous brands"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-20 bg-white p-2 rounded-full shadow-lg border border-gray-100 text-slate-600 hover:text-blue-600 hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 hidden md:flex"
            aria-label="Next brands"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Track */}
          {/* We hide scrollbar but allow touch scrolling */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden w-full select-none cursor-grab active:cursor-grabbing"
            style={{
              // Hide scrollbar for standard browsers
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Extended list for infinite feel */}
            {extendedBrands.map((brand, index) => (
              <BrandCard key={`${brand.id}-${index}`} brand={brand} />
            ))}
          </div>

          {/* Gradient Edges for Smooth Fade Effect */}
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </section>
    </div>
  );
}
