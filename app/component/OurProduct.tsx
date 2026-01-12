"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const productData: Product[] = [
  {
    id: 1,
    title: "OPC Cement",
    description:
      "High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement",
    image: "/image/16cfcbcb-ed70-4f2f-9267-a1cc2e4a6cd8.png",
    imageAlt: "OPC Cement Bag",
  },
  {
    id: 2,
    title: "PPC Cement",
    description:
      "High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement",
    image: "/image/16cfcbcb-ed70-4f2f-9267-a1cc2e4a6cd8.png",
    imageAlt: "PPC Cement Bag",
  },
  {
    id: 3,
    title: "PSC Cement",
    description:
      "High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement",
    image: "/image/16cfcbcb-ed70-4f2f-9267-a1cc2e4a6cd8.png",
    imageAlt: "PSC Cement Bag",
  },
  {
    id: 4,
    title: "White Cement",
    description:
      "High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement",
    image: "/image/16cfcbcb-ed70-4f2f-9267-a1cc2e4a6cd8.png",
    imageAlt: "White Cement Bag",
  },
];

const OurProduct: React.FC = () => {
  return (
    <section>
      <div
        className="relative w-full py-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('/image/be11215a-4466-4f09-a5da-c79f00eaa836.jpg')",
        }}
      >
        {/* Background Layer
        Note: Replace the gradient below with your actual background image using 'bg-[url(/your-image.jpg)]'
      */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          {/* <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
              Our Products
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-blue-200/50 hidden sm:block"></div>
              <p className="text-lg text-blue-100 font-medium">
                Types of Cement We Offer
              </p>
              <div className="h-[1px] w-12 bg-blue-200/50 hidden sm:block"></div>
            </div>
          </div> */}
          <div className="text-center max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3">
                Our <span>Products</span>
              </h2>
              <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                We supply a full range of high-quality bulk cement tailored to
                meet your specific construction needs.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {productData.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col transform transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Product Image */}
                <div className="relative h-52 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    priority={product.id === 1}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow ">
                  <h3 className="text-lg font-semibold text-[#1e4079] mb-3">
                    {product.title}
                  </h3>

                  <p className="font-medium mb-6 flex-grow  text-sm md:text-base  text-zinc-600">
                    {product.description}
                  </p>

                  {/* Button */}
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:bg-[#d56015] text-white font-semibold py-2 px-4 rounded shadow-md transition-colors duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  {/* <button className="px-6 py-2 rounded text-white transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-orange-500 to-red-600">
                    Read More
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;

// "use client";
// import React from "react";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   imageAlt: string;
// }

// const productData: Product[] = [
//   {
//     id: 1,
//     title: "OPC Cement",
//     description:
//       "High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement",
//     image: "/image/16cfcbcb-ed70-4f2f-9267-a1cc2e4a6cd8.png",
//     imageAlt: "OPC Cement Bag",
//   },
//   {
//     id: 2,
//     title: "PPC Cement",
//     description:
//       "High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement",
//     image: "/image/16cfcbcb-ed70-4f2f-9267-a1cc2e4a6cd8.png",
//     imageAlt: "PPC Cement Bag",
//   },
//   {
//     id: 3,
//     title: "PSC Cement",
//     description:
//       "High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement",
//     image: "/image/16cfcbcb-ed70-4f2f-9267-a1cc2e4a6cd8.png",
//     imageAlt: "PSC Cement Bag",
//   },
//   {
//     id: 4,
//     title: "White Cement",
//     description:
//       "High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement High Strength Ordinary Portland Cement",
//     image: "/image/16cfcbcb-ed70-4f2f-9267-a1cc2e4a6cd8.png",
//     imageAlt: "White Cement Bag",
//   },
// ];

// const OurProduct: React.FC = () => {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-medium text-black mb-2">Our Products</h2>

//           <div className="flex items-center justify-center gap-4">
//             <div className="h-[1px] w-12 bg-gray-300 hidden sm:block"></div>
//             <p className="text-lg text-gray-700 font-medium">
//               Types of Cement We Offer
//             </p>
//             <div className="h-[1px] w-12 bg-gray-300 hidden sm:block"></div>
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5">
//           {productData.map((product) => (
//             <div
//               key={product.id}
//               className="group bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2"
//             >
//               {/* Product Image */}
//               <div className="relative h-52 w-full">
//                 <Image
//                   src={product.image}
//                   alt={product.imageAlt}
//                   fill
//                   className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
//                   sizes="(max-width: 768px) 100vw, 25vw"
//                   priority={product.id === 1}
//                 />
//               </div>

//               {/* Card Content */}
//               <div className="px-6 pb-4 flex flex-col flex-grow">
//                 <h3 className="text-lg text-center font-normal text-black mb-3">
//                   {product.title}
//                 </h3>

//                 <p className="text-sm text-gray-700 mb-6 flex-grow">
//                   {product.description}
//                 </p>

//                 {/* Button */}
//                 <button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition flex items-center justify-center gap-2">
//                   Learn More
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurProduct;
