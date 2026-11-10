"use client";

import { HiPrinter } from "react-icons/hi";

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition cursor-pointer"
    >
      <HiPrinter className="text-base" /> Print / Save as PDF
    </button>
  );
};

export default PrintButton;
