import React from "react";

const BuyMeCoffee = () => {
  const upiLink =
    "upi://pay?pa=8340478491@pthdfc&pn=UDAY%20PRATAP%20SINGH%20S%20O%20BIRENDRA%20NARA";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 -mt-9 md:mt-auto lg:mt-auto">
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold mb-2">Buy Me a Coffee ☕</h1>X
        <p className="text-gray-600 text-sm mb-6">
          If you like my work, consider supporting me. Every coffee helps me
          build more cool stuff
        </p>
        {/* Button */}
        <a
          href={upiLink}
          className="block w-full bg-black text-white py-3 rounded-lg hover:scale-105 transition-all duration-300"
        >
          Support via UPI 🤍
        </a>
        {/* Divider */}
        <div className="my-6 text-gray-400 text-sm">or</div>
        {/* UPI ID */}
        <p className="text-sm text-gray-700">
          UPI ID: <span className="font-medium">8340478491@pthdfc</span>
        </p>
        {/* Optional QR */}
        <div className="mt-4 flex justify-center">
          <img
            src="/myportfolio/MyQRCode.png"
            alt="QR Code"
            className="w-40 h-40 object-contain scale-125 origin-center hover:scale-135 transition-transform duration-300"
          />
        </div>
        <p className="text-xs text-gray-400 mt-4">
          Thank you for your support ❣️
        </p>
      </div>
    </div>
  );
};

export default BuyMeCoffee;
