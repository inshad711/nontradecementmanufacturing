import React from "react";
import { ShoppingCart } from "lucide-react";

// Define the shape of our product data
interface Product {
  id: number;
  name: string;
  image: string;
  link: string;
}

// Extracted data from your HTML
const products: Product[] = [
  {
    id: 1,
    name: "Ambuja Cement",
    image: "/branded/dfs.png",
    link: "/shop/bs-0004296-mplus-block-fix-345",
  },
  {
    id: 2,
    name: "Ultra Tech",
    image: "/branded/dsfdf.jpg",
    link: "/shop/mplus-tile-fix-362",
  },
  {
    id: 3,
    name: "Zuari Cement",
    image: "/branded/jljwe.jpg",
    link: "/shop/mplus-tile-fix-362",
  },
  {
    id: 4,
    name: "JSW Cement",
    image: "/branded/sdfdd.jpg",
    link: "/shop/ultratech-xtralite-blocks-81",
  },
  {
    id: 5,
    name: "Dalmia Cement",
    image: "/branded/sf.jpg",
    link: "/shop/real-rock-blocks-415",
  },
  {
    id: 6,
    name: "Bharat Cement",
    image: "/branded/b.jpg",
    link: "/shop/bs-0004549-mplus-ready-plaster-432",
  },
  {
    id: 7,
    name: "Sagar Cement",
    image: "/branded/wew.jpg",
    link: "/shop/sri-chakra-cement-65",
  },
  {
    id: 8,
    name: "Peena Cement",
    image: "/branded/peena.jpg",
    link: "/shop/dalmia-cement-47",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <a href={product.link} className="group block h-full">
      <div className="h-full bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Image Container */}
        <div className="w-full h-48 mb-4 flex items-center justify-center p-2 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
          {/* Using standard img tag for compatibility with external S3 links without next.config.js setup */}
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain mix-blend-multiply"
            loading="lazy"
          />
        </div>

        {/* Content Container */}
        <div className="w-full flex flex-col items-center gap-3">
          <h3
            className="text-base font-bold text-black text-center line-clamp-2 h-12 flex items-center justify-center group-hover:text-black/60 transition-colors"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* <button className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white text-sm font-extrabold uppercase py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors duration-300 shadow-sm">
            <span>Order Now</span>
          </button> */}
          <a href="tel:+919905275236" className="w-full">
            <button className="w-full cursor-pointer bg-gradient-to-r from-orange-400 to-red-500 text-white text-sm font-extrabold uppercase py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors duration-300 shadow-sm">
              <span>Order Now</span>
            </button>
          </a>
        </div>
      </div>
    </a>
  );
};

export default function ProductNew() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        {/* <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Hot Deals
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Best prices on top construction materials
          </p>
        </div> */}
        <div className="text-center max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3">
              Hot <span>Deal</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Best prices on top construction materials
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
