"use client";

import React from "react";

export default function QuoteSection() {
  return (
    <section
      className="relative w-full min-h-[600px] flex flex-col items-center justify-center py-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/image/be11215a-4466-4f09-a5da-c79f00eaa836.jpg')",
      }}
    >
      {/* Optional Overlay to make text pop if image is too bright */}
      <div className="absolute inset-0 bg-slate-900/20 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Header Text */}
        {/* <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">
            Get a Free Quote
          </h2>
          <p className="text-white text-lg font-medium drop-shadow-md">
            Order Bulk Cement Online
          </p>
        </div> */}

        <div className="text-center max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3">
              Get a <span>Free Quote</span>
            </h2>
            <p className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Order Bulk Cement Online Order Bulk Cement Online Order Bulk
              Cement Online
            </p>
          </div>
        </div>
        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                {/* Name */}
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                    placeholder=""
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                  />
                </div>

                {/* Cement Type (Select) */}
                <div className="flex flex-col">
                  <label
                    htmlFor="type"
                    className="text-sm font-bold text-gray-700 mb-1"
                  >
                    Cement Type
                  </label>
                  <div className="relative">
                    <select
                      id="type"
                      className="w-full border border-gray-300 rounded px-3 py-2 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled></option>
                      <option value="opc">
                        Ordinary Portland Cement (OPC)
                      </option>
                      <option value="ppc">
                        Portland Pozzolana Cement (PPC)
                      </option>
                      <option value="white">White Cement</option>
                    </select>
                    {/* Custom Arrow Icon */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-sm font-bold text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                  />
                </div>

                {/* Quantity */}
                <div className="flex flex-col">
                  <label
                    htmlFor="quantity"
                    className="text-sm font-bold text-gray-700 mb-1"
                  >
                    Quantity (in Tons)
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                  />
                </div>

                {/* Location */}
                <div className="flex flex-col">
                  <label
                    htmlFor="location"
                    className="text-sm font-bold text-gray-700 mb-1"
                  >
                    Delivery Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                  />
                </div>
              </div>
            </div>

            {/* Button Area */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-12 rounded shadow-md transform transition hover:-translate-y-0.5"
              >
                Request a Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
