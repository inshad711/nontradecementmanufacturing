import Image from "next/image";

const images = [
  {
    src: "/project/3d-rendering-house-model.webp",
    col: "col-span-3",
    row: "row-span-3",
  },
  {
    src: "/project/beautiful-scenery-bridge-sea-clear-sky.webp",
    col: "col-span-3",
    row: "row-span-2",
  },
  {
    src: "/project/low-angle-view-buildings-against-clear-sky.webp",
    col: "col-span-3",
    row: "row-span-3",
  },
  {
    src: "/project/reinforced-concrete-transport-bridge-across-river-bottom-view.webp",
    col: "col-span-3",
    row: "row-span-2",
  },

  {
    src: "/project/viaduct-city.webp",
    col: "col-span-3",
    row: "row-span-3",
  },
  {
    src: "/project/viaduct-city.webp",
    col: "col-span-3",
    row: "row-span-3",
  },
  {
    src: "/project/beautiful-scenery-bridge-sea-clear-sky.webp",
    col: "col-span-3",
    row: "row-span-2",
  },
  {
    src: "/image/sgag.jpg",
    col: "col-span-3",
    row: "row-span-2",
  },
];

export default function Editorial() {
  return (
    <section id="project" className="w-full">
      <div className="templateContainer">
        {/* Heading */}

        {/* <div className="text-center mb-7">
          <p className="text-xl md:text-4xl   text-neutral-700">
            Objects in motion. Lives in form.
          </p>
        </div> */}
        <div className="text-center max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3">
              Our <span>Project</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We supply a full range of high-quality bulk cement tailored to
              meet your specific construction needs.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div
          className="
            grid 
            grid-cols-6
            md:grid-cols-12

            auto-rows-[120px]
            gap-4
          "
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.col} ${img.row} relative overflow-hidden bg-gray-200`}
            >
              <Image src={img.src} alt="" fill className="object-cover " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
