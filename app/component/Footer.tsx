"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Facebook, Instagram, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white">
      <div className="relative z-10 templateContainer px-6 pt-20 pb-10">
        {/* --- Middle Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-white flex items-center justify-center">
                  <div className="w-4 h-6 border-l-2 border-r-2 border-white"></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-wider">Bulk</h2>
                  <p className="text-xs uppercase tracking-widest text-white/60">
                    Cement
                  </p>
                </div>
              </div>
            </Link>

            <p className="leading-relaxed text-white/70 max-w-xs text-sm md:text-base">
              Bulk Cement is a diversified global manufacturing company that
              brings technology and engineering together.
            </p>
          </div>

          {/* Useful Links */}
          <div className="lg:pl-10">
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Useful Links
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-white/30"></span>
            </h4>

            <ul className="grid grid-cols-2 gap-y-3 gap-x-8 text-sm font-medium uppercase tracking-wide text-white/80">
              {[
                ["Home", "/"],
                ["About us", "/about"],
                ["Invest", "/invest"],
                ["Products", "/products"],
                ["Media", "/media"],
              ].map(([label, link]) => (
                <li key={label}>
                  <Link
                    href={link}
                    className="hover:text-[#ffb459] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-lg font-bold mb-6  relative inline-block">
              Subscribe Now
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-white/30"></span>
            </h4>

            <form className="flex  w-full">
              <input
                type="email"
                placeholder="Enter Your E-mail"
                className="w-full bg-white/10 border rounded border-white/30 px-4 py-3 placeholder-white/50 focus:outline-none focus:border-[#ffb459]"
              />
              <button
                type="submit"
                className="bg-orange-500 cursor-pointer hover:bg-[#ffa030] text-black font-bold px-6 py-3 uppercase text-sm tracking-wider"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="md:mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-white/60">
            <span className="text-white font-medium">Bulk Cement</span> © 2026.
            <Link
              href="/privacy-policy"
              className="ml-2 underline hover:text-[#ffb459]"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm uppercase tracking-wider font-bold">
              Follow Us
            </span>

            <div className="flex gap-2">
              <SocialIcon href="#">
                <X size={14} />
              </SocialIcon>
              <SocialIcon href="#">
                <Facebook size={14} />
              </SocialIcon>
              <SocialIcon href="#">
                <Instagram size={14} />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for Social Icons to reduce repetition
const SocialIcon = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="w-8 h-8 flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300"
  >
    {children}
  </a>
);

export default Footer;
