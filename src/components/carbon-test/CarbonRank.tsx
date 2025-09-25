import React from 'react';
import { CiGlobe } from 'react-icons/ci';

interface ICarbonRank {
  title: string;
  rank: string;
  icon: React.ReactNode;
}

const CarbonRank = ({ title, rank, icon }: ICarbonRank) => {
  return (
    <div className="relative text-center border-2 border-primary-500 pt-11 pb-10 rounded-2xl">
      <div className="absolute h-14 w-14 bg-white border-2 left-1/2  -translate-x-1/2 -top-8 border-primary-500 rounded-full flex items-center justify-center text-primary-500 text-3xl">
        {icon}
        {/* <CiGlobe className="text-primary-500 text-3xl" /> */}
      </div>
      <p className="text-[#242424] font-medium">{title}</p>
      <p className="text-5xl text-primary-500 font-bold  mt-1.5">{rank}</p>
    </div>
  );
};

export default CarbonRank;
