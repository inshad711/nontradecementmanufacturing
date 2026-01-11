"use client";

import Image from "next/image";
import FlowButton from "./FlowButton";

export default function CardsDesing() {
  return (
    <div className="bg-gray-100 py-8 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-medium text-slate-900">Our Products</h1>
        <p className="text-slate-500 mt-2">
          We supply a full range of high-quality bulk cement
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl w-full">
        <div className="group bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100/50">
          {/* Image Wrapper */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50">
            {/* Image */}
            <Image
              height={300}
              width={300}
              src="/image/b2.jpg"
              alt="Product"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Button – Bottom Right */}

            <div
              className="
    absolute bottom-4 right-4
    opacity-0 translate-y-2
    transition-all duration-300
    group-hover:opacity-100 group-hover:translate-y-0
  "
            >
              <FlowButton text="Order Now" href="/products/opc-53" />
            </div>
          </div>

          {/* Content */}
          <div className="mt-5 px-2">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-500 transition-colors">
              OPC 33 Grade Cement
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              Tailored for non-structural applications, OPC 33 Grade Cement is
              an excellent choice for plastering, flooring, and minor repairs.
            </p>
          </div>
        </div>
        <div className="group bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100/50">
          {/* Image Wrapper */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50">
            {/* Image */}
            <Image
              height={300}
              width={300}
              src="/image/b3.jpg"
              alt="Product"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Button – Bottom Right */}

            <div
              className="
    absolute bottom-4 right-4
    opacity-0 translate-y-2
    transition-all duration-300
    group-hover:opacity-100 group-hover:translate-y-0
  "
            >
              <FlowButton text="Order Now" href="/products/opc-53" />
            </div>
          </div>

          {/* Content */}
          <div className="mt-5 px-2">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-500 transition-colors">
              OPC 43 Grade Cement
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              Perfect for general construction needs, OPC 43 Grade Cement
              strikes the right balance between strength and cost-effectiveness.
            </p>
          </div>
        </div>
        <div className="group bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100/50">
          {/* Image Wrapper */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50">
            {/* Image */}
            <Image
              height={300}
              width={300}
              src="/image/4.jpg"
              alt="Product"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Button – Bottom Right */}

            <div
              className="
    absolute bottom-4 right-4
    opacity-0 translate-y-2
    transition-all duration-300
    group-hover:opacity-100 group-hover:translate-y-0
  "
            >
              <FlowButton text="Order Now" href="/products/opc-53" />
            </div>
          </div>

          {/* Content */}
          <div className="mt-5 px-2">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-500 transition-colors">
              OPC 53 Grade Cement
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              Ideal for projects that demand high strength and durability and
              deliver exceptional performance in critical applications.
            </p>
          </div>
        </div>
        <div className="group bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100/50">
          {/* Image Wrapper */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50">
            {/* Image */}
            <Image
              height={300}
              width={300}
              src="/image/b4.jpg"
              alt="Product"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Button – Bottom Right */}

            <div
              className="
    absolute bottom-4 right-4
    opacity-0 translate-y-2
    transition-all duration-300
    group-hover:opacity-100 group-hover:translate-y-0
  "
            >
              <FlowButton text="Order Now" href="/products/opc-53" />
            </div>
          </div>

          {/* Content */}
          <div className="mt-5 px-2">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-500 transition-colors">
              PSC Cement
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              Portland Slag Cement (PSC) is indeed a type of blended cement that
              combines Portland cement with granulated blast furnace slag.
            </p>
          </div>
        </div>
        <div className="group bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100/50">
          {/* Image Wrapper */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50">
            {/* Image */}
            <Image
              height={300}
              width={300}
              src="/image/b5.jpg"
              alt="Product"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Button – Bottom Right */}

            <div
              className="
    absolute bottom-4 right-4
    opacity-0 translate-y-2
    transition-all duration-300
    group-hover:opacity-100 group-hover:translate-y-0
  "
            >
              <FlowButton text="Order Now" href="/products/opc-53" />
            </div>
          </div>

          {/* Content */}
          <div className="mt-5 px-2">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-500 transition-colors">
              PPC Cement
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              PPC typically consists of approximately 15–35% pozzolanic
              material, such as fly ash, volcanic ash, or silica fume.
            </p>
          </div>
        </div>
        <div className="group bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100/50">
          {/* Image Wrapper */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50">
            {/* Image */}
            <Image
              height={300}
              width={300}
              src="/image/b6.jpg"
              alt="Product"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Button – Bottom Right */}

            <div
              className="
    absolute bottom-4 right-4
    opacity-0 translate-y-2
    transition-all duration-300
    group-hover:opacity-100 group-hover:translate-y-0
  "
            >
              <FlowButton text="Order Now" href="/products/opc-53" />
            </div>
          </div>

          {/* Content */}
          <div className="mt-5 px-2">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-500 transition-colors">
              Rapid Hardening Cement
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              The improved early performance of RHPC is achieved principally
              through increased product fineness it is best cement in my firm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
