'use client';
import React, { useState } from 'react';
import logo from '../../../assets/images/eg.webp';
import Image from 'next/image';

import cloud from '../../../assets/images/setup/cloud.webp';
import google from '../../../assets/images/setup/google.webp';
import analytics from '../../../assets/images/setup/analytics.webp';

const services = [
  { name: ' Google Analytics', image: analytics },
  { name: ' Google Search Console', image: google },
  { name: ' Google Cloud', image: cloud },
];

const Server = () => {
  const [selectedServer, setSelectedServer] = useState('');

  return (
    <section className="flex text-dark-500 container">
      <div
        style={{ boxShadow: '4px 0 8px rgba(0, 0, 0, 0.1)' }}
        className="basis-3/4 min-h-[100vh]  "
      >
        <h2 className="mt-32 font-bold text-3xl">Tell us about your Website</h2>

        <form action="" className="mt-14">
          <div className="flex flex-col mt-6">
            <label htmlFor="" className="text-lg">
              Enter URL of your website
            </label>
            <input
              type="text"
              placeholder="https://www.hashpotato.io/"
              className="border border-primary-500 outline-none h-16 rounded-md mt-3.5 px-7 py-5 lg:w-[50%]"
            />
          </div>
          <div className="mt-10">
            <label className="text-lg block mb-3">
              Select the server you are using
            </label>

            <div className="flex flex-col gap-3">
              {/* Third Party Server */}
              <div className="flex items-center gap-3.5">
                <input
                  type="radio"
                  id="third-party"
                  name="server"
                  value="third-party"
                  className="accent-primary-500 w-4 h-4"
                  checked={selectedServer === 'third-party'}
                  onChange={(e) => setSelectedServer(e.target.value)}
                />
                <label
                  htmlFor="third-party"
                  className="font-medium cursor-pointer"
                >
                  Third Party Server
                </label>
              </div>

              {/* In-House Server */}
              <div className="flex items-center gap-3.5">
                <input
                  type="radio"
                  id="in-house"
                  name="server"
                  value="in-house"
                  className="accent-primary-500 w-4 h-4"
                  checked={selectedServer === 'in-house'}
                  onChange={(e) => setSelectedServer(e.target.value)}
                />
                <label
                  htmlFor="in-house"
                  className="font-medium cursor-pointer"
                >
                  In-House Server
                </label>
              </div>
            </div>
          </div>
          {/* server */}
          <div>
            <input
              type="text"
              placeholder="Write your Server Name"
              className="border-b border-primary-500 mt-3 text-sm w-full outline-none py-2 pl-6 pr-3  lg:w-[50%]"
            />
          </div>

          {/* services */}

          <div className="mt-20">
            <label htmlFor="" className="text-lg">
              Select the services you are using
            </label>

            <div className="flex gap-6 mt-8">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className="h-[132px] w-[216px] bg-[#f7f7f7] rounded-xl flex items-center flex-col justify-center gap-4 cursor-pointer shadow"
                >
                  <div className="max-h-[50px]">
                    <Image
                      src={service.image}
                      className={`h-full ${index == 2 ? 'w-full' : ''} `}
                      alt={service.name}
                    ></Image>
                  </div>
                  <p className="font-medium text-xs">{service.name}</p>
                </div>
              ))}
            </div>
            <div className="my-12 flex justify-end lg:w-[80%]">
              <div></div>
              <div className="flex gap-14 items-center">
                <p className="text-primary-500 font-medium text-lg cursor-pointer">
                  Back
                </p>
                <button
                  type="button"
                  className="py-3 px-11 bg-primary-500 text-white font-medium rounded-md cursor-pointer"
                >
                  {' '}
                  Continue
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* part2 */}
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

          <div className="h-12 border-dark-400 border w-[1px] ml-2.5"></div>
          <div className=" ">
            <div className="font-medium flex items-center gap-2">
              <div className="bg-primary-500 text-white rounded-full flex items-center justify-center h-6 w-6 ">
                2{' '}
              </div>
              <div>
                <p className="text-sm">Website Assessment</p>
                <p className="text-xs">help it make it more sustainable</p>
              </div>
            </div>
          </div>

          <div className="h-12 border-dark-400 border w-[1px] ml-2.5"></div>
          <div className=" ">
            <div className="font-medium flex items-center gap-2">
              <div className="bg-primary-500 text-white rounded-full flex items-center justify-center h-6 w-6 ">
                3
              </div>
              <div>
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

export default Server;
