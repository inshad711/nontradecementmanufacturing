// "use client";

// import React from "react";

// export default function QuoteSection() {
//   return (
//     <section
//       className="relative w-full min-h-[600px] flex flex-col items-center justify-center py-16 px-4 bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage:
//           "url('/image/be11215a-4466-4f09-a5da-c79f00eaa836.jpg')",
//       }}
//     >
//       {/* Optional Overlay to make text pop if image is too bright */}
//       <div className="absolute inset-0 bg-slate-900/20 z-0"></div>

//       {/* Main Content */}
//       <div className="relative z-10 w-full max-w-5xl mx-auto">
//         {/* Header Text */}

//         <div className="text-center max-w-7xl mx-auto">
//           <div className="mb-8 md:mb-12">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3">
//               Get a <span>Free Quote</span>
//             </h2>
//             <p className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
//               Order Bulk Cement Online Order Bulk Cement Online Order Bulk
//               Cement Online
//             </p>
//           </div>
//         </div>
//         {/* Form Card */}
//         <div className="bg-white rounded-lg shadow-2xl p-6 md:p-10">
//           <form className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//               {/* Left Column */}
//               <div className="space-y-4">
//                 {/* Name */}
//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="name"
//                     className="text-sm font-bold text-gray-700 mb-1"
//                   >
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
//                     placeholder=""
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="email"
//                     className="text-sm font-bold text-gray-700 mb-1"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
//                   />
//                 </div>

//                 {/* Cement Type (Select) */}
//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="type"
//                     className="text-sm font-bold text-gray-700 mb-1"
//                   >
//                     Cement Type
//                   </label>
//                   <div className="relative">
//                     <select
//                       id="type"
//                       className="w-full border border-gray-300 rounded px-3 py-2 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow cursor-pointer"
//                       defaultValue=""
//                     >
//                       <option value="" disabled></option>
//                       <option value="opc">
//                         Ordinary Portland Cement (OPC)
//                       </option>
//                       <option value="ppc">
//                         Portland Pozzolana Cement (PPC)
//                       </option>
//                       <option value="white">White Cement</option>
//                     </select>
//                     {/* Custom Arrow Icon */}
//                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
//                       <svg
//                         className="fill-current h-4 w-4"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Column */}
//               <div className="space-y-4">
//                 {/* Phone */}
//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="phone"
//                     className="text-sm font-bold text-gray-700 mb-1"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
//                   />
//                 </div>

//                 {/* Quantity */}
//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="quantity"
//                     className="text-sm font-bold text-gray-700 mb-1"
//                   >
//                     Quantity (in Tons)
//                   </label>
//                   <input
//                     type="number"
//                     id="quantity"
//                     className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
//                   />
//                 </div>

//                 {/* Location */}
//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="location"
//                     className="text-sm font-bold text-gray-700 mb-1"
//                   >
//                     Delivery Location
//                   </label>
//                   <input
//                     type="text"
//                     id="location"
//                     className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Button Area */}
//             <div className="pt-4 flex justify-center">
//               <button
//                 type="submit"
//                 className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-12 rounded shadow-md transform transition hover:-translate-y-0.5"
//               >
//                 Request a Quote
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    phone: "",
    quantity: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
🧱 *New Cement Quote Request*

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
🏗️ Cement Type: ${formData.type}
⚖️ Quantity: ${formData.quantity} Tons
📍 Location: ${formData.location}
    `;

    const whatsappURL = `https://wa.me/8604297055?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="quotes"
      className="relative w-full min-h-[600px] flex items-center justify-center py-16 px-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/image/be11215a-4466-4f09-a5da-c79f00eaa836.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-slate-900/20"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-white mb-3">
            Get a <span className="text-orange-400">Free Quote</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Order Bulk Cement Online
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left */}
              <input
                id="name"
                placeholder="Your Name"
                className="input"
                onChange={handleChange}
                required
              />
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="input"
                onChange={handleChange}
                required
              />
              <select
                id="type"
                className="input"
                onChange={handleChange}
                required
              >
                <option value="">Select Cement Type</option>
                <option value="OPC">OPC</option>
                <option value="PPC">PPC</option>
                <option value="White Cement">White Cement</option>
              </select>

              {/* Right */}
              <input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                className="input"
                onChange={handleChange}
                required
              />
              <input
                id="quantity"
                type="number"
                placeholder="Quantity (Tons)"
                className="input"
                onChange={handleChange}
                required
              />
              <input
                id="location"
                placeholder="Delivery Location"
                className="input"
                onChange={handleChange}
                required
              />
            </div>

            <div className="text-center  pt-4">
              <button
                type="submit"
                className="bg-orange-600 cursor-pointer hover:bg-orange-700 text-white font-bold py-3 px-12 rounded transition"
              >
                Request on WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tailwind shortcut */}
      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #d1d5db;
          padding: 12px;
          border-radius: 6px;
          outline: none;
        }
        .input:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.4);
        }
      `}</style>
    </section>
  );
}
