// "use client";

// import { useEffect, useState } from "react";
// import { ArrowUp } from "lucide-react";

// const BackTop = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       setVisible(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <button
//       onClick={scrollToTop}
//       aria-label="Back to top"
//       className={`
//         fixed bottom-6 right-6 z-50
//         h-14 w-14 rounded-full
//         flex items-center justify-center
//         bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500
//         text-white shadow-xl
//         transition-all duration-300
//         hover:scale-110 hover:shadow-2xl
//         active:scale-95
//         ${
//           visible
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 translate-y-6 pointer-events-none"
//         }
//       `}
//     >
//       {/* Pulse Ring */}
//       <span className="absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75 animate-ping" />

//       {/* Icon */}
//       <ArrowUp className="relative z-10 h-6 w-6" />
//     </button>
//   );
// };

// export default BackTop;

"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed right-4 bottom-6 z-50
        h-12 w-12 rounded-full
        flex items-center justify-center
       bg-gradient-to-r from-orange-500 to-red-600 text-white
        shadow-lg
        transition-all duration-300 ease-out
        hover:scale-110 hover:shadow-xl
        active:scale-95
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default BackTop;
