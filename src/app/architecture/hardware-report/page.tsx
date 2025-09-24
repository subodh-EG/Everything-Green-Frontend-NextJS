import BarProgress from '@/components/common/BarProgress';
import CircularProgess from '@/components/common/CircularProgress';
import Header from '@/components/common/Header';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import React from 'react';

const HardwareReport = () => {
  return (
    <DashboardLayout>
      <Header title="Hardware and Software Report" />

      <div className="flex gap-8 ">
        <div
          className="w-72 bg-white px-6 py-8 flex justify-between flex-col rounded-md 
        "
        >
          <p className="text-2xl font-bold text-center ">Hardware report</p>

          <div className="my-5  flex justify-center">
            <CircularProgess />
          </div>
          <p className="text-center">Your Score</p>
        </div>
        <div className="p-8 bg-white gap-7 rounded-md w-full">
          <p className="font-bold text-2xl">Network & Server</p>

          <div className="flex flex-col gap-6 mt-4">
            {/* Bandwidth */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium w-32 shrink-0">Bandwidth</p>
              <div className="flex-1">
                <BarProgress width={85} />
              </div>
              <p className="text-[#828282] font-bold text-xl w-14 text-right shrink-0">
                85%
              </p>
            </div>

            {/* Traffic */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium w-32 shrink-0">Traffic</p>
              <div className="flex-1">
                <BarProgress width={15} />
              </div>
              <p className="text-[#828282] font-bold text-xl w-14 text-right shrink-0">
                15%
              </p>
            </div>

            {/* Response */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium w-32 shrink-0">Response</p>
              <div className="flex-1">
                <BarProgress width={85} />
              </div>
              <p className="text-[#828282] font-bold text-xl w-14 text-right shrink-0">
                85%
              </p>
            </div>

            {/* Type */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium w-32 shrink-0">Type</p>
              <div className="flex-1">
                <BarProgress width={40} />
              </div>
              <p className="text-[#828282] font-bold text-xl w-14 text-right shrink-0">
                40%
              </p>
            </div>

            {/* Via CDN */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium w-32 shrink-0">Via CDN</p>
              <p className="font-bold">Yes</p>
            </div>
          </div>
        </div>
      </div>

      {/* buttom hardware */}

      <div className="flex gap-8 mt-7">
        <div
          className="w-72 bg-white px-6 py-8 flex justify-between flex-col rounded-md 
        "
        >
          <p className="text-2xl font-bold text-center ">Software report</p>

          <div className="my-5  flex justify-center">
            <CircularProgess />
          </div>
          <p className="text-center">Your Score</p>
        </div>
        <div className="p-8 bg-white gap-7 rounded-md w-full">
          <p className="font-bold text-2xl">Network & Server</p>

          <div className="flex flex-col gap-6 mt-4">
            {/* Bandwidth */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium w-32 shrink-0">Bandwidth</p>
              <div className="flex-1">
                <BarProgress width={85} />
              </div>
              <p className="text-[#828282] font-bold text-xl w-14 text-right shrink-0">
                85%
              </p>
            </div>

            {/* Traffic */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium w-32 shrink-0">Traffic</p>
              <div className="flex-1">
                <BarProgress width={15} />
              </div>
              <p className="text-[#828282] font-bold text-xl w-14 text-right shrink-0">
                15%
              </p>
            </div>

            {/* Response */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium w-32 shrink-0">Response</p>
              <div className="flex-1">
                <BarProgress width={85} />
              </div>
              <p className="text-[#828282] font-bold text-xl w-14 text-right shrink-0">
                85%
              </p>
            </div>

            {/* Type */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium w-32 shrink-0">Type</p>
              <div className="flex-1">
                <BarProgress width={40} />
              </div>
              <p className="text-[#828282] font-bold text-xl w-14 text-right shrink-0">
                40%
              </p>
            </div>

            {/* Via CDN */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium w-32 shrink-0">Via CDN</p>
              <p className="font-bold">Yes</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HardwareReport;
