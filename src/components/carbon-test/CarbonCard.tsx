import React from 'react';

interface ICarbonCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CarbonCard = ({ title, description, icon }: ICarbonCard) => {
  return (
    <div className="border-2 relative rounded-2xl border-primary-500 text-center px-9 pb-3">
      <div className="flex items-center absolute  left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center text-4xl h-16 w-16 bg-primary-500 rounded-full text-white">
        {icon}
      </div>
      <h3 className="text-[#242424] font-bold mt-12">{title}</h3>
      <p className="text-[#828282] mt-3">{description}</p>
    </div>
  );
};

export default CarbonCard;
