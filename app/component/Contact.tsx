"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="w-full bg-[#000] text-white py-10 px-4 relative overflow-hidden">
      {/* Background Texture/Gradient Overlay (Optional subtle gradient to match depth) */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#164e9e] to-[#0d2650] opacity-90 pointer-events-none" /> */}

      <div className="relative max-w-7xl mx-auto z-10">
        {/* --- TOP HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row items-center justify-between relative">
          {/* Centered Title with Horizontal Lines */}
          <div className="flex items-center w-full md:w-2/3 mx-auto justify-center mb-6 md:mb-0">
            <div className="h-[1px] bg-blue-300/40 flex-1 rounded-full hidden md:block"></div>

            {/* <div className="px-6 text-center">
              <h2 className="text-3xl font-bold tracking-wide">Contact Us</h2>
              <p className="text-sm text-blue-100 font-medium mt-1">
                Get in Touch with Us
              </p>
            </div> */}
            <div className=" px-6 text-center max-w-7xl mx-auto">
              <div className="">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3">
                  Contact Us
                </h2>
                {/* <p className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  Get in Touch with Us
                </p> */}
              </div>
            </div>

            <div className="h-[1px] bg-blue-300/40 flex-1 rounded-full hidden md:block"></div>
          </div>
        </div>

        {/* --- BOTTOM INFO SECTION --- */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-4 text-sm md:px-8">
          {/* Item 1: Call Us */}
          <div className="flex items-center gap-4 min-w-[200px]">
            <div className="p-2 border border-white/20 rounded-full">
              <Phone className="w-5 h-5" />
            </div>
            <div className="border-r border-blue-400/30 pr-8 h-10 flex flex-col justify-center w-full md:w-auto md:border-r">
              <p className="text-xs text-orange-500 uppercase tracking-wider font-semibold">
                Call Us
              </p>
              <p className="font-bold text-base whitespace-nowrap">
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Item 2: Email Us */}
          <div className="flex items-center gap-4 min-w-[250px]">
            <div className="p-2 border border-white/20 rounded-full">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="border-r border-blue-400/30 pr-8 h-10 flex flex-col justify-center w-full md:w-auto md:border-r">
              <p className="text-xs  text-orange-500  uppercase tracking-wider font-semibold">
                Email Us
              </p>
              <p className="font-bold text-base whitespace-nowrap">
                info@bulccementorder.com
              </p>
            </div>
          </div>

          {/* Item 3: Location */}
          <div className="flex items-center gap-4 min-w-[200px]">
            <div className="p-2 border border-white/20 rounded-full">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs text-orange-500  uppercase tracking-wider font-semibold">
                Our Location
              </p>
              <p className="font-bold text-base">Mumbai, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
