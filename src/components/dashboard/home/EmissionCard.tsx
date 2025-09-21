import Image from 'next/image';
import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'
import meter from "@/assets/images/dashboard/meter.webp"
const EmissionCard = () => {
  return (
    <div className="border-2 border-primary-500 px-4 py-8 rounded-md flex gap-5 bg-white">
      <div>
        <Image src={meter} alt="meter"></Image>
      </div>
      <div>
        <p className="text-sm">CO2 emmisions per month is</p>
        <p className="text-xl font-bold">120 kg COCe</p>
        <div className="text-sm flex gap-2">
          trend
          <div className="text-primary-500 flex items-center gap-1  ">
            <FaArrowTrendUp /> +3%
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmissionCard