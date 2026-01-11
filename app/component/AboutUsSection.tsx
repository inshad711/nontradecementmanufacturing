"use client";
import React from "react";
import { Play, Check } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* --- Content Column --- */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="max-w-xl">
              {/* Section Title */}
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 flex items-center gap-2">
                  About Us
                </h2>
              </div>

              {/* Description Paragraph */}
              <div className="mb-8 text-gray-600 leading-relaxed text-lg">
                <p>
                  Our commitment is to deliver{" "}
                  <a
                    href="#"
                    className="text-orange-500 font-medium hover:underline"
                  >
                    high-quality
                  </a>
                  cement products that build strength, durability, and trust in
                  every structure. With advanced manufacturing processes and
                  strict quality control, we ensure consistent performance that
                  meets the demands of modern construction.
                </p>
              </div>

              {/* List Style One */}
              <ul className="space-y-4 mb-10">
                {[
                  "High strength and consistent quality",
                  "Trusted for residential & large-scale projects",
                  "Committed to innovation and sustainability",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-800 font-medium"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-6">
                <div className="flex items-baseline">
                  <span className="text-6xl md:text-7xl font-bold text-orange-500">
                    35
                  </span>
                </div>
                <div className="h-12 w-[2px] bg-gray-200 hidden sm:block"></div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                  Years Of <br /> Experience
                </h3>
              </div>

              {/* Bottom Box: Signature & Read More */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 leading-none">
                      Sundar Pankow
                    </h4>
                    <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                      Founder
                    </span>
                  </div>
                </div>

                {/* Theme Button Styled precisely like the HTML snippet */}
                <div className="flex-grow sm:flex-grow-0">
                  <a
                    href="#"
                    className="relative inline-block px-10 py-4 bg-orange-600 text-white font-bold uppercase tracking-widest text-sm rounded-sm group overflow-hidden transition-all duration-300"
                  >
                    <span className="relative z-10">Read More</span>
                    {/* These represent the spans in your original HTML for the hover animation effects */}
                    <span className="absolute top-0 left-0 w-0 h-full bg-black/10 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* --- Image/Video Column --- */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
                  alt="Repair Service"
                  className="w-full h-[450px] md:h-[550px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
