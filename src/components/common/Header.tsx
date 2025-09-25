import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';

interface IHeader {
  title: string;
}

const Header = ({ title }: IHeader) => {
  return (
    <>
      <div className="flex justify-between  ">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Carbon Test</h2>
          <p className="text-[#828282] underline">hashpotato.io</p>
        </div>

        <div className="flex  gap-6  items-center">
          <button
            className="flex px-5 py-4 items-center gap-1 max-h-12
         cursor-pointer text-primary-500 border border-primary-500 rounded-md text-lg font-medium bg-white"
          >
            <FaRegFileAlt />
            Regenerate Report
          </button>
          <button
            className="flex px-5 py-4 items-center gap-1 max-h-12
         cursor-pointer text-white bg-primary-500 border border-primary-500 rounded-md text-lg font-medium"
          >
            {' '}
            <LuDownload />
            Download Report
          </button>
        </div>
      </div>
      <hr className="border-[#091E2133] my-8" />
    </>
  );
};

export default Header;
