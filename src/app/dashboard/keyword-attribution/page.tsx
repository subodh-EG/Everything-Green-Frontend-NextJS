'use client';
import HeatBar from '@/components/common/HeatBar';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DateSelect from '@/components/dashboard/home/DateSelect';
import React, { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const KeywordAttribution = () => {
  const [attribution, setAttribution] = useState(1);
  const tableRow = ['Keyword ', 'Conversion Rate', 'Emissions'];
  const [keywordAttributionData, setKeywordAttributionData] = useState<any>([]);

  const fetchKeywordAttribution = async () => {
    const response = await fetch(
      'https://api-dev.everythinggreen.org/attribution/calculate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startDate: '90daysAgo',
          endDate: 'today',
          locationCode: '2166',
          limit: 3,
          websiteId: '685d4e66baaac54e789468a1',
        }),
      },
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  useEffect(() => {
    console.log('fetching keyword attribution data');
    fetchKeywordAttribution().then((data) => {
      console.log({ data });
      setKeywordAttributionData(data);
    });
  }, []);

  console.log({ keywordAttributionData });

  return (
    <DashboardLayout>
      <DateSelect />

      {/* header */}

      <div className="flex justify-between mt-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl">Keyword Attribution</h2>
          <p className="text-dark-400 underline">hashpotato.io</p>
        </div>
      </div>

      {/* line */}

      <hr className="border border-[#091E2133] mt-5 mb-6" />

      {/* Meter section */}

      <div className="grid grid-cols-5 gap-7">
        <div className="bg-white border-2 border-primary-500 rounded-md col-span-3 p-6">
          <div className="flex ">
            <div
              className={`px-4 py-3 cursor-pointer border-t-2  ${
                attribution == 1
                  ? ' border-primary-500  bg-gradient-to-b from-[#c2e3da] to-white'
                  : 'border-[#D9D9D9]'
              }`}
              onClick={() => setAttribution(1)}
            >
              Keyword Attribution
            </div>
            <div
              className={`px-4 py-3 cursor-pointer border-t-2  ${
                attribution == 2
                  ? ' border-primary-500  bg-gradient-to-b from-[#c2e3da] to-white'
                  : 'border-[#D9D9D9]'
              }`}
              onClick={() => setAttribution(2)}
            >
              Green Keyword Manager
            </div>
          </div>

          {/* body */}

          {attribution === 1 && <div className="h-[200px]">meter</div>}

          {attribution === 2 && (
            <div>
              <div className="mt-4">
                <HeatBar />
              </div>

              <div className="text-sm mt-20 flex flex-col gap-2">
                <p className="font-bold">Match Value (by traffic type):</p>
                <p>Paid - Match between Ad and the landing page</p>
                <p>Organic - Match between Keyword and landing page</p>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white p-6 rounded-md border-3 border-primary-500 col-span-2">
          <h3 className="text-2xl font-bold">LP Preview (moved):</h3>
          <div className="mt-5 flex flex-col gap-3">
            <p>
              Page load time (seconds):{' '}
              <span className="text-primary-500">2.1</span>
            </p>
            <p>
              Headline mismatch:
              <span className="text-primary-500">Yes</span>
            </p>
          </div>
        </div>
      </div>

      {/* table */}

      <div className="bg-white mt-7 p-7 rounded-md">
        <div className="relative lg:w-[20%] flex gap-3 whitespace-nowrap items-center">
          <div className="text-xs text-slate-400 ">Sort by</div>
          <select className="appearance-none w-full outline-primary-500 border border-primary-500 px-3 pr-10  py-3 rounded-md  font-semibold">
            <option value="">Keyword</option>
            <option value="">Channels</option>
            <option value="">Efficiency</option>
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
              {keywordAttributionData?.historicalKeywordValues?.map(
                (data: any) => (
                  <tr key={data.keyword} className="text-sm">
                    <td className="py-2 px-4 border-t border-gray-200">
                      {data.conversionRate || 0}
                    </td>
                    <td className="py-2 px-4 border-t border-gray-200">
                      {data.emissions || 0}
                    </td>
                    <td className="py-2 px-4 border-t border-gray-200">
                      {data.keyword || ''}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default KeywordAttribution;
