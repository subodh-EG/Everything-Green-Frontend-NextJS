'use client';

import React from 'react';
import logo from '../../../assets/images/eg.webp';
import Select from 'react-select';

import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import { customStyles } from '@/utils/CustomSelect';

const Assessment = () => {
  const cmsOptions = [
    { value: 'Wordpress', label: 'Wordpress' },
    { value: 'Strapi', label: 'Strapi' },
    { value: 'Drupal', label: 'Drupal' },
  ];

  const bandwidthOptions = [
    { value: '0-10GB', label: '0-10GB' },
    { value: '10-50GB', label: '10-50GB' },
    { value: '50-100GB', label: '50-100GB' },
    { value: '100-500GB', label: '100-500GB' },
    { value: '500GB+', label: '500GB+' },
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
        <h2 className="mt-28 text-3xl font-bold">
          Sustainable Website Assessment
        </h2>{' '}
        <div className="bg-secondary-500 py-8 px-6 text-2xl  mt-7 rounded-md flex flex-col max-w-[90%]">
          <p>Your website is hosted at:</p>
          <div className="flex gap-3 mt-3">
            <div>
              City: <span className="font-medium">Singapore </span>
            </div>
            <div>
              Country: <span className="font-medium">Singapore</span>{' '}
            </div>
            <div>
              Coordinates: <span className="font-medium">123.123.123</span>
            </div>
          </div>
        </div>
        <p className="mt-7 text-lg">
          Tell us more about your website so we can help you make it more
          sustainable
        </p>
        <form
          action="
        "
          className="max-w-[45%] flex flex-col gap-6"
        >
          <div className="mt-3">
            <label htmlFor="" className="font-medium">
              CMS*
            </label>
            <Select
              options={cmsOptions}
              className="mt-3 "
              placeholder="Select the CMS you are using"
              styles={customStyles}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="" className="font-medium">
              Bandwidth*
            </label>
            <Select
              options={bandwidthOptions}
              className="mt-3"
              placeholder="Bandwidth your website uses per month"
              styles={customStyles}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="" className="font-medium">
              What is your Market Cap?
            </label>
            <Select
              options={marketCapOptions}
              className="mt-3"
              placeholder="Select your Cap"
              styles={customStyles}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="" className="font-medium">
              What industry do you work in?
            </label>
            <Select
              options={industryOptions}
              className="mt-3"
              placeholder="Select your Industry"
              styles={customStyles}
            />
          </div>

          <div className="flex pb-12 items-center gap-12 justify-end mt-5 ">
            <p className="text-dark-400 font-medium cursor-pointer"> Back</p>
            <button className="font-medium px-10 py-3 bg-primary-500 cursor-pointer text-white rounded-md">
              Continue
            </button>
          </div>
        </form>
      </div>

      {/* part 2 */}
      <div className="basis-1/4  pl-10 ">
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

          <div className="h-12 border-[#828282] border w-[1px] ml-2.5"></div>
          <div className=" ">
            <div className="font-medium flex items-center gap-2">
              <div className="bg-[#828282] text-white rounded-full flex items-center justify-center h-6 w-6 ">
                3
              </div>
              <div className="text-[#828282]">
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

export default Assessment;
