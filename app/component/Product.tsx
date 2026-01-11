"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

interface CementProduct {
  id: number;
  name: string;
  subTitle: string;
  image: string;
  link: string;
  tagline: string;
  actionText: string;
}

const products: CementProduct[] = [
  {
    id: 1,
    name: "OPC Cement",
    subTitle: "High Strength",
    image: "/image/imagessd (1).jpg",
    link: "/products/opc-cement",
    tagline:
      "Reliable strength for all construction need  Reliable strength for all construction need  ",
    actionText: "View Details",
  },
  {
    id: 2,
    name: "PPC Cement",
    subTitle: "Eco Friendly",
    image: "/image/imagessd (1).jpg",
    link: "/products/ppc-cement",
    tagline:
      "Durable & sustainable building solution Durable & sustainable building solution",
    actionText: "View Details",
  },
  {
    id: 3,
    name: "PSC Cement",
    subTitle: "Marine Grade",
    image: "/image/imagessd (1).jpg",
    link: "/products/psc-cement",
    tagline:
      "Superior resistance in harsh conditions Superior resistance in harsh conditions",
    actionText: "View Details",
  },
  {
    id: 4,
    name: "White Cement",
    subTitle: "Premium Finish",
    image: "/image/imagessd (1).jpg",
    link: "/products/white-cement",
    tagline:
      "Perfect choice for architectural designs Perfect choice for architectural designs",
    actionText: "View Details",
  },
];

const Product = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-gray-900 uppercase tracking-widest mb-4">
            Our Cement Products
          </h2>

          <p className="text-gray-500 text-md font-medium tracking-wide">
            Strong foundations for a better tomorrow
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4 rounded-sm cursor-pointer">
                {/* <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500 z-10" /> */}

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src =
                      "https://placehold.co/400x300?text=Cement+Product")
                  }
                />

                {/* CTA Circle */}
                {/* <a
                  href={product.link}
                  className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-white text-gray-900 shadow-xl
                             flex flex-col items-center justify-center
                             opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0
                             transition duration-500 z-20"
                >
                  <span className="text-sm font-bold uppercase">View</span>
                  <span className="text-sm font-bold uppercase">Product</span>
                </a> */}
              </div>

              {/* Text */}
              <div className="relative h-20 overflow-hidden text-left pl-1">
                <div className="absolute w-full transition duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                  <h3 className="text-xl font-medium uppercase">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-xs uppercase">
                    {product.subTitle}
                  </p>
                </div>

                <div className="absolute w-full translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  <h3 className="text-md font-medium text-gray-800 mb-1">
                    {product.tagline}
                  </h3>
                  <a
                    href={product.link}
                    className="inline-flex items-center text-orange-600 font-bold text-sm uppercase"
                  >
                    {product.actionText}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
