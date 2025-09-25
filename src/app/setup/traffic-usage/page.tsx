'use client';

import React from 'react';
import logo from '../../../assets/images/eg.webp';
import Image from 'next/image';
import { customStyles } from '@/utils/CustomSelect';
import Select from 'react-select';

const TraficUsage = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const marketCapOptions = [
    { value: 'Mega-Cap ($200B+)', label: 'Mega-Cap ($200B+)' },
    { value: 'Large-Cap ($10B - $200B)', label: 'Large-Cap ($10B - $200B)' },
    { value: 'Mid-Cap ($2B - $10B)', label: 'Mid-Cap ($2B - $10B)' },
    { value: 'Small-Cap ($250M - $2B)', label: 'Small-Cap ($250M - $2B)' },
    { value: 'Micro-Cap (< $250M)', label: 'Micro-Cap (< $250M)' },
  ];

  const industryOptions = [
    { value: 'Finance', label: 'Finance' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Education', label: 'Education' },
    { value: 'Construction', label: 'Construction ' },

    { value: 'E-commerce', label: 'E-commerce' },
  ];
  return (
    <section className="flex container">
      <div
        style={{ boxShadow: '4px 0 8px rgba(0, 0, 0, 0.1)' }}
        className="basis-3/4 min-h-[100vh]  "
      >
        <h2 className="mt-28 text-3xl font-bold">Website Traffic and Usage</h2>{' '}
        <p className="mt-3 text-lg">
          Tell us more about your website so we can help you make it more
          sustainable
        </p>
        <form
          action="
        "
          className="max-w-[45%] mt-11 flex flex-col gap-6"
        >
          <div className="mt-3">
            <label htmlFor="" className="font-medium">
              Traffic*
            </label>
            <Select
              options={options}
              className="mt-3 "
              placeholder="Select where your website is hosted"
              styles={customStyles}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="" className="font-medium">
              Website Views*
            </label>
            <Select
              options={options}
              className="mt-3"
              placeholder="Select the content management system you are using?"
              styles={customStyles}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="" className="font-medium">
              Energy Consumption*
            </label>
            <Select
              options={marketCapOptions}
              className="mt-3"
              placeholder="Select the theme you are using"
              styles={customStyles}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="" className="font-medium">
              Goals*{' '}
            </label>
            <Select
              options={industryOptions}
              className="mt-3"
              placeholder="Select the plugins you are using"
              styles={customStyles}
            />
          </div>

          <div className="flex items-center gap-12 justify-end mt-5 ">
            <p className="text-dark-400 font-medium cursor-pointer"> Back</p>
            <button className="font-medium px-10 py-3 bg-primary-500 cursor-pointer text-white rounded-md">
              Generate Report
            </button>
          </div>
        </form>
      </div>
      {/* part 2 */}
      <div className="basis-1/4  pl-3 ">
        <div className="flex justify-end mt-18">
          <Image src={logo} alt="everything green"></Image>
        </div>

        <div className="flex flex-col gap-4">
          <div className=" mt-28">
            <div className="font-medium flex items-center gap-2">
              <div className="bg-primary-500 text-white rounded-full flex items-center justify-center h-6 w-6 ">
                1
              </div>
              <div>
                <p className="text-sm">Select Server</p>
                <p className="text-xs">What is the server of your website</p>
              </div>
            </div>
          </div>

          <div className="h-12 border-primary-500 border w-[1px] ml-2.5"></div>
          <div className=" ">
            <div className="font-medium flex items-center gap-2">
              <div className="bg-primary-500 text-white rounded-full flex items-center justify-center h-6 w-6 ">
                2{' '}
              </div>
              <div className="">
                <p className="text-sm">Website Assessment</p>
                <p className="text-xs">help it make it more sustainable</p>
              </div>
            </div>
          </div>

          <div className="h-12 border-primary-500 border w-[1px] ml-2.5"></div>
          <div className=" ">
            <div className="font-medium flex items-center gap-2">
              <div className="bg-primary-500 text-white rounded-full flex items-center justify-center h-6 w-6 ">
                3
              </div>
              <div className="">
                <p className="text-sm">Step title</p>
                <p className="text-xs">Optional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraficUsage;
