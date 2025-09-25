// app/dashboard/user/page.tsx

import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DateSelect from '@/components/dashboard/home/DateSelect';
import Image from 'next/image';
import { FaChevronDown, FaRegFileAlt } from 'react-icons/fa';
import { GoDownload } from 'react-icons/go';
import meter from '@/assets/images/dashboard/meter.webp';
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6';
import EmissionCard from '@/components/dashboard/home/EmissionCard';
import { LuMoveUpRight } from 'react-icons/lu';
import UserBarDiagram from '@/components/dashboard/home/UserBarDigram';
import HeatBar from '@/components/common/HeatBar';

const tableRow = ['Channel', 'Cost', 'Conversions', 'Emissions'];

const tableData = [
  {
    channel: 'Paid campaign 123',
    cost: '8000 USD',
    conversions: '200',
    emissions: '50kgCO2e',
  },
  {
    channel: 'Paid campaign 123',
    cost: '8000 USD',
    conversions: '200',
    emissions: '50kgCO2e',
  },
  {
    channel: 'Paid campaign 123',
    cost: '8000 USD',
    conversions: '200',
    emissions: '50kgCO2e',
  },
  {
    channel: 'Paid campaign 123',
    cost: '8000 USD',
    conversions: '200',
    emissions: '50kgCO2e',
  },
  {
    channel: 'Paid campaign 123',
    cost: '8000 USD',
    conversions: '200',
    emissions: '50kgCO2e',
  },
  {
    channel: 'Paid campaign 123',
    cost: '8000 USD',
    conversions: '200',
    emissions: '50kgCO2e',
  },
  {
    channel: 'Paid campaign 123',
    cost: '8000 USD',
    conversions: '200',
    emissions: '50kgCO2e',
  },
];

const UserPage = () => {
  return (
    <DashboardLayout>
      <section className="">
        <DateSelect />

        {/* header */}

        <div className="flex justify-between mt-5">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">Dashboard</h2>
            <p className="text-dark-400 underline">hashpotato.io</p>
          </div>
          <div className="flex gap-6">
            <button className="flex bg-white items-center gap-2 text-lg text-primary-500 cursor-pointer px-5 py-3 border border-primary-500 rounded-md">
              <FaRegFileAlt />
              Regenerate Report
            </button>
            <button className="flex items-center gap-2 text-lg text-white cursor-pointer bg-primary-500 px-5 py-3 border border-primary-500 rounded-md">
              <GoDownload />
              Download Report
            </button>
          </div>
        </div>

        {/* line */}

        <hr className="border border-[#091E2133] mt-5 mb-6" />

        {/* meter card section */}

        <div className="grid grid-cols-4 gap-5">
          <EmissionCard />

          <div className="border-2 border-[#FFA347] px-4 py-8 rounded-md flex gap-5 bg-white">
            <div>
              <Image src={meter} alt="meter"></Image>
            </div>
            <div>
              <p className="text-sm">Emissions Visitor</p>
              <p className="text-xl font-bold">0.05 g CO2e</p>
              <div className="text-sm flex gap-2">
                trend
                <div className="text-red-600 flex items-center gap-1  ">
                  <FaArrowTrendDown /> -1%
                </div>
              </div>
            </div>
          </div>
          <EmissionCard />
          <EmissionCard />
        </div>

        {/* Attribution match */}

        <div className="grid grid-cols-4 mt-7 gap-5 ">
          <div className="col-span-3 border-2 border-[#FFA347] bg-[#fffaf2] p-5 rounded-md">
            <p className="text-2xl font-medium ">Attribution Match</p>

            <HeatBar />

            {/* Stats Section */}
            <div className="mt-12 text-sm space-y-2 font-bold">
              <div>
                <span className="text-gray-700 ">Coverage:</span>
                <span className="text-gray-900 ml-2">75%</span>
              </div>
              <div>
                <span className="text-gray-700 ">Tagging completeness:</span>
                <span className="text-gray-900 ml-2">62%</span>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="col-span-1 border border-primary-500 rounded-md p-5">
            <p className="text-lg font-medium">Quick Actions</p>

            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center  text-sm gap-2">
                <div className="bg-primary-500 rounded-fullx text-white flex items-center justify-center rounded-full w-3 h-3">
                  <LuMoveUpRight className="text-xl " />
                </div>
                <div className="hover:text-primary-500 hover:underline">
                  Auto generate tagging snippet
                </div>
              </div>

              <div className="flex items-center  text-sm gap-2">
                <div className="bg-primary-500 rounded-fullx text-white flex items-center justify-center rounded-full w-3 h-3">
                  <LuMoveUpRight className="text-xl " />
                </div>
                <div className="hover:text-primary-500 hover:underline">
                  Sync GA4 funnel
                </div>
              </div>
              <div className="flex items-center  text-sm gap-2">
                <div className="bg-primary-500 rounded-fullx text-white flex items-center justify-center rounded-full w-3 h-3">
                  <LuMoveUpRight className="text-xl " />
                </div>
                <div className="hover:text-primary-500 hover:underline">
                  Create Keyword Audit
                </div>
              </div>
              <div className="flex items-center  text-sm gap-2">
                <div className="bg-primary-500 rounded-fullx text-white flex items-center justify-center rounded-full w-3 h-3">
                  <LuMoveUpRight className="text-xl " />
                </div>
                <div className="hover:text-primary-500 hover:underline">
                  Alerts
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* table */}

        <div className="bg-white mt-7 p-7 rounded-md">
          <div className="relative lg:w-[30%]">
            <select className="appearance-none w-full outline-primary-500 border border-primary-500 px-3 pr-10 text-xs py-4 rounded-md">
              <option value="">Top 5 Low-Efficiency Channels</option>
              <option value="">Top 3 Low-Efficiency Channels</option>
              <option value="">Top 1 Low-Efficiency Channels</option>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaChevronDown className="text-black" />
            </div>
          </div>
          <div className="mt-7 overflow-hidden rounded-md border border-gray-200">
            <table className="w-full text-center">
              <thead>
                <tr>
                  {tableRow.map((head) => (
                    <th
                      key={head}
                      className="text-center py-3 px-10 text-white bg-primary-500 text-sm font-medium"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((data) => (
                  <tr key={data.channel} className="text-sm">
                    <td className="py-2 px-4 border-t border-gray-200">
                      {data.channel}
                    </td>
                    <td className="py-2 px-4 border-t border-gray-200">
                      {data.conversions}
                    </td>
                    <td className="py-2 px-4 border-t border-gray-200">
                      {data.cost}
                    </td>
                    <td className="py-2 px-4 border-t border-gray-200">
                      {data.emissions}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default UserPage;
