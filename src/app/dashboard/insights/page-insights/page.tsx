import Header from '@/components/common/Header';
import CircularProgress from '@/components/common/CircularProgress';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import InsightsCard from '@/components/insights/InsightsCard';

import React from 'react';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { BiLeaf } from 'react-icons/bi';
import { FaCode, FaImage, FaServer } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GrServerCluster } from 'react-icons/gr';
import { MdOutlineEnergySavingsLeaf } from 'react-icons/md';

const insightData = [
  {
    icon: <FaArrowTrendUp />,
    title: 'Check Your PSI Score',
    description:
      'Track performance of your PSI Score to improve user experience and engagement.',
  },
  {
    icon: <FaImage />,
    title: 'Optimize you images',
    description:
      'Full width hero images look amazing but uploading multiple large images can effect the speed your page loads and result in a poor user experience. Ideally, image sizes hould vary between 300KB to 1MB. COmpress your images if they are too big.',
  },
  {
    icon: <FaCode />,
    title: 'Minify your code',
    description:
      'Review your code to remove unnecessary comments, whitespaces or line breaks used to organize the logic and flow of the code. Removing redundant code can help the script to run faster and more efficiently',
  },
];

const PageInsight = () => {
  return (
    <DashboardLayout>
      <Header title="Insights" />

      <div className="bg-[#e3efeb] rounded-2xl">
        <div className="px-10 py-9 flex  gap-12 items-center relative">
          <CircularProgress />

          <div className="text-dark-500">
            <p className="font-bold text-2xl">
              Your Page Speed Insight Score is 81%
            </p>
            <p className="mt-8 md:max-w-[46%]">
              Page Speed Insights help you understand the performance of your
              site and to reduce bounce rates and increase conversion rates. The
              higher the PSI score the more efficient and eco-friendly your site
              is.
            </p>
          </div>

          <div className="absolute  -right-4 -bottom-3">
            <BiLeaf className="text-[9rem]  [transform:scaleX(-1)] text-[#8c9b9a] -z-10" />
          </div>
        </div>
      </div>

      {/* buttom section */}

      <h3 className="font-bold text-2xl mt-16 text-dark-500">
        Recommendations for improving your PSI Score
      </h3>
      <div className="grid grid-cols-3 gap-7 mt-6">
        {insightData.map(({ title, description, icon }) => (
          <InsightsCard
            key={title}
            description={description}
            title={title}
            icon={icon}
          />
        ))}
      </div>

      {/* 3  white card */}

      <div className="bg-white rounded-2xl mt-7 pt-16  px-7 pb-12 grid grid-cols-3 gap-16">
        <div>
          <div className=" bg-primary-500 h-20 w-20 text-white p-5 rounded-full flex items-center justify-center text-4xl">
            <GrServerCluster />
          </div>
          <p className="text-dark-500 text-sm mt-6">
            Optimise server loading by using load balancing techniques and
            server virtualisation to distribute workloads across multiple
            servers.
          </p>
        </div>
        <div>
          <div className=" bg-primary-500 h-20 w-20 text-white p-5 rounded-full flex items-center justify-center text-6xl">
            <AiOutlineCloudServer />
          </div>
          <p className="text-dark-500 text-sm mt-6">
            Consider the user of cloud computing services or colocation
            facilities to reduce energy consumption associated with in-house
            server infrastructure.
          </p>
        </div>
        <div>
          <div className=" bg-primary-500 h-20 w-20 text-white p-5 rounded-full flex items-center justify-center text-6xl">
            <MdOutlineEnergySavingsLeaf />
          </div>
          <p className="text-dark-500 text-sm mt-6">
            Consider the user of cloud computing services or colocation
            facilities to reduce energy consumption associated with in-house
            server infrastructure.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PageInsight;
