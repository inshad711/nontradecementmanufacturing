// "use client";

// import { MessageCircle } from "lucide-react";

// const WhatsappFloat = () => {
//   const phoneNumber = "977XXXXXXXXX"; // ✅ Replace with your WhatsApp number (country code required)
//   const message = "Hello! I’d like to know more.";

//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//     message
//   )}`;

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Chat on WhatsApp"
//       className="
//         fixed left-6 bottom-6 z-50
//         h-14 w-14
//         flex items-center justify-center
//         rounded-full
//         bg-[#25D366]
//         text-white
//         shadow-xl
//         transition-all duration-300
//         hover:scale-110 hover:shadow-2xl
//         active:scale-95
//       "
//     >
//       {/* Pulse ring */}
//       <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-70 animate-ping" />

//       {/* Icon */}
//       <MessageCircle className="relative z-10 h-6 w-6" />
//     </a>
//   );
// };

// export default WhatsappFloat;

// "use client";

// import { MessageCircle } from "lucide-react";

// const WhatsappFloat = () => {
//   const phoneNumber = "977XXXXXXXXX"; // replace with your number
//   const message = "Hello! I’d like to know more.";

//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//     message
//   )}`;

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Chat on WhatsApp"
//       className="
//         fixed left-6 bottom-6 z-50
//         h-14 w-14
//         flex items-center justify-center
//         rounded-full
//         bg-[#25D366]
//         text-white
//         shadow-lg
//         transition-all duration-300 ease-out
//         hover:scale-110 hover:shadow-xl
//         active:scale-95
//       "
//     >
//       <MessageCircle className="h-6 w-6" />
//     </a>
//   );
// };

// export default WhatsappFloat;

import React from "react";
import Link from "next/link";

interface FloatingWhatsAppProps {
  phoneNumber: string; // e.g., "1234567890"
  message?: string; // Optional default message
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber,
  message = "Hello! I would like to place an order.",
}) => {
  // Format the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-4 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-white shadow-lg "
      aria-label="Order on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="h-6 w-6"
      >
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
      </svg>

      <span className="font-semibold text-lg">Order on WhatsApp</span>
    </Link>
  );
};

export default FloatingWhatsApp;
