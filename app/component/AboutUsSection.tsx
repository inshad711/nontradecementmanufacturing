"use client";
import React from "react";
import { Play, Check } from "lucide-react";
import Link from "next/link";

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* --- Content Column --- */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="max-w-xl">
              {/* Section Title */}
              <div className="mb-6">
                {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 flex items-center gap-2"> */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 flex items-center gap-2 text-pretty leading-tight ">
                  About Us
                </h2>
              </div>

              {/* Description Paragraph */}
              {/* <div className="mb-8 text-gray-600 leading-relaxed text-lg  text-sm md:text-base  text-zinc-600 "> */}
              <div className="mb-8   text-sm md:text-base  text-zinc-600 ">
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
                    className="flex items-center gap-3 font-medium text-sm md:text-base  text-zinc-600"
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
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 leading-tight">
                  Years Of <br /> Experience
                </h3>
              </div>

              {/* Bottom Box: Signature & Read More */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 leading-none">
                      Sundar Pankow
                    </h4>
                    <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                      Founder
                    </span>
                  </div>
                </div>

                <Link href="tel:+919905275236">
                  <button className="px-6 py-2 cursor-pointer rounded text-white transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-orange-500 to-red-600">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* --- Image/Video Column --- */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative group">
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
