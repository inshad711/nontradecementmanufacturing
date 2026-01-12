// "use client";
// import React from "react";
// import Image from "next/image";

// const AboutSection: React.FC = () => {
//   return (
//     <section className="w-full">
//       <div className="templateContainer">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left Column: Text Content */}
//           <div className="flex flex-col justify-center">
//             <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
//               About Us
//             </h2>
//             <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-6">
//               Your Trusted Cement Supplier
//             </h3>

//             {/* Divider Line */}
//             <div className="w-full h-px bg-gray-200 mb-6"></div>

//             <div className="text-gray-600 text-lg leading-relaxed space-y-4">
//               <p>
//                 We specialize in supplying bulk non-trade cement directly from
//                 top manufacturers to your construction site.
//               </p>
//               <p>
//                 Reliable service, competitive pricing, and timely delivery for
//                 all your project needs.
//               </p>
//             </div>
//           </div>

//           {/* Right Column: Image */}

//           <div className="relative w-full h-[300px] md:h-[400px]">
//             <Image
//               src="/image/48d7bfb2-19ef-4c1d-9677-27c0b67add6a.jpg"
//               alt="Cement bags and silos construction site"
//               fill
//               className="object-cover rounded-lg shadow-lg"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

// import React from "react";
// import { Truck, ShieldCheck, Clock } from "lucide-react";

// const AboutSection = () => {
//   return (
//     <section className="relative w-full py-16 md:py-20 ">
//       {/* Background Image Area */}
//       <div className="absolute top-20 inset-0 w-full  h-[300px] z-0">
//         <img
//           src="/image/48d7bfb2-19ef-4c1d-9677-27c0b67add6a.jpg"
//           alt="Cement bags and silos construction site"
//           className="w-full h-full object-contain object-right"
//         />
//       </div>

//       <div className="relative z-10  max-w-[1400px] mx-auto px-4  md:px-12 lg:px-14">
//         <div className="flex flex-col justify-center max-w-2xl">
//           <h2 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-2">
//             About Us
//           </h2>
//           <h3 className="text-xl md:text-2xl font-normal text-gray-700 mb-6">
//             Your Trusted Cement Supplier
//           </h3>

//           {/* Divider Line */}
//           <div className="w-24 h-1 bg-blue-900 mb-6 rounded-full"></div>

//           <div className="text-gray-800 text-lg leading-relaxed space-y-4 font-medium">
//             <p>
//               We specialize in supplying bulk non-trade cement directly from top
//               manufacturers to your construction site. By eliminating
//               intermediaries, we ensure you get the best market rates without
//               compromising on quality.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default AboutSection;

import React from "react";
import { Truck, ShieldCheck, Clock } from "lucide-react";
import Button from "./FlowButton";

const AboutSection = () => {
  return (
    <section className="relative w-full bg-[#fdfdfd] pt-12 md:py-20 md:mb-6">
      {/* Wrapper */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-14">
        {/* Responsive Layout */}
        <div className="flex flex-col lg:relative">
          {/* CONTENT → Order 1 on all screens */}
          <div className="relative z-10 max-w-2xl lg:py-0">
            {/* <h2 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-2">
              About Us
            </h2> */}

            <h3 className="text-xl md:text-3xl font-normal  text-orange-500 mb-6">
              Your Trusted Cement Supplier
            </h3>

            {/* Divider */}
            {/* <div className="w-24 h-1 bg-black mb-6 rounded-full"></div> */}

            <div className=" leading-relaxed space-y-4 md:max-w-xl font-medium text-sm md:text-base  text-zinc-600">
              <p>
                We specialize in supplying bulk non-trade cement directly from
                top manufacturers to your construction site. By eliminating
                intermediaries, we ensure you get the best market rates without
                compromising on quality.
              </p>
            </div>
          </div>

          <div
            className="
              mt-10 lg:-mt-6
              lg:absolute lg:inset-0
              h-full md:h-[300px]
              z-0
            "
          >
            <img
              src="/image/48d7bfb2-19ef-4c1d-9677-27c0b67add6a.jpg"
              alt="Cement bags and silos construction site"
              className="w-full h-full object-contain object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
