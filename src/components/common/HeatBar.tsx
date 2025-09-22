import React from "react";

const HeatBar = () => {
  return (
    <div className="relative w-full h-8 rounded-full mb-8 bg-gradient-to-r from-[#ff0600] via-[#fbe001] to-[#15ffac]">
      {/* Moving Bubble */}
      <div className="absolute top-1/2 left-[64%] w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center font-bold text-lg -translate-x-1/2 -translate-y-1/2">
        64
      </div>

      {/* Vertical Dashed Line */}
      {/* <div className="absolute h-full w-px border-l-2 border-dashed border-blue-400 left-[68%]"></div> */}

      {/* Labels Under the Bar */}
      <div className="absolute inset-x-0 -bottom-9 flex justify-between  ">
        {[...Array(11)].map((_, i) => (
          <div
            key={i}
            className="text-gray-500 text-sm flex flex-col items-center"
          >
            <p>|</p>
            <p>{i * 10}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeatBar;
