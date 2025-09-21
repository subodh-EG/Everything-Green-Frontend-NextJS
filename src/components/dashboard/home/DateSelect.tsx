import React from "react";
import { FaChevronDown } from "react-icons/fa";

const DateSelect = () => {
  return (
    <div className="flex justify-between ">
      <div className="text-xs border border-primary-500 rounded-md px-3 py-4 bg-white ">
        <span className="font-bold">Date Range:</span> 2025-08-01 to 2025-08-25
      </div>

      <div className="relative ">
        <select className="appearance-none w-full outline-primary-500 border border-primary-500 px-3 pr-10 text-xs py-4 rounded-md">
          <option value="">Day</option>
          <option value="">Month</option>
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <FaChevronDown className="text-black" />

        </div>
      </div>
    </div>
  );
};

export default DateSelect;
