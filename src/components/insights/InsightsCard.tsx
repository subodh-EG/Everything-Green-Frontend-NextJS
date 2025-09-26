import React from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';

interface IinsightsCard {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const InsightsCard = ({ title, icon, description }: IinsightsCard) => {
  return (
    <div className="text-dark-500 py-4 px-6 bg-white rounded-2xl">
      <div className=" bg-primary-500 h-20 w-20 text-white p-5 rounded-full flex items-center justify-center text-4xl">
        {icon}
      </div>
      <p className="font-medium text-xl mt-6">{title}</p>

      <p className="text-sm mt-6">{description}</p>
    </div>
  );
};

export default InsightsCard;
