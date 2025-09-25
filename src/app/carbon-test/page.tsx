import CarbonCard from '@/components/carbon-test/CarbonCard';
import CarbonRank from '@/components/carbon-test/CarbonRank';
import Header from '@/components/common/Header';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import React from 'react';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { BiLeaf } from 'react-icons/bi';
import { CiGlobe } from 'react-icons/ci';
import { GiWeight } from 'react-icons/gi';
import { IoMdGlobe } from 'react-icons/io';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { PiTreeBold } from 'react-icons/pi';
import { RiBarChartFill } from 'react-icons/ri';

const carbonData = [
  {
    title: 'Green Score',
    description: 'Greener than 95% of websiteson our database',
    icon: <IoSpeedometerOutline />,
  },
  {
    title: '8 kWh of Energy',
    description: 'That’s enough electricity to drive an electric car 54km',
    icon: <AiOutlineThunderbolt />,
  },
  {
    title: 'Enough C02 to keep',
    description: '100 Trees busy for 14 hours',
    icon: <PiTreeBold />,
  },
  {
    title: '4 Kilograms',
    description: 'of C02 per 10,000 visiters',
    icon: <GiWeight />,
  },
];

const carbonRank = [
  {
    title: 'Sub Domain Rank',
    rank: '1364',
    icon: <CiGlobe />,
  },
  {
    title: 'Domain Rank',
    rank: '200',
    icon: <IoMdGlobe />,
  },
  {
    title: 'Market Capitalization Rank',
    rank: '1439',
    icon: <RiBarChartFill />,
  },
];

const CarbonTest = () => {
  return (
    <DashboardLayout>
      <Header title="Carbon Test" />

      <div className="grid grid-cols-4 gap-6 mt-24">
        {carbonData.map((carbon) => (
          <CarbonCard
            key={carbon.title}
            description={carbon.description}
            icon={carbon.icon}
            title={carbon.title}
          />
        ))}
      </div>

      {/* positive */}

      <div className="bg-[#e3efeb] py-5 px-6 rounded-2xl mt-10 flex justify-between items-center">
        <div className="flex flex-col gap-0.5  text-[#242424]">
          <p className="text-sm ">Total positive impact so far</p>
          <p className="font-bold text-2xl">20kg of CO2</p>
          <p className="text-sm">
            that is same as manufacturing 10,000 bottles
          </p>
        </div>
        <div className="h-11 w-11">
          <BiLeaf
            className=" text-[#828282] h-full w-full
          "
          />
        </div>
      </div>

      {/* Ranks */}

      <div className="bg-white rounded-2xl px-9 py-11 mt-10">
        <p className="text-2xl font-bold">Ranks</p>
        <div className="mt-8 grid grid-cols-3 gap-8">
          {carbonRank.map((rank) => (
            <CarbonRank
              key={rank.title}
              icon={rank.icon}
              rank={rank.rank}
              title={rank.title}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CarbonTest;
