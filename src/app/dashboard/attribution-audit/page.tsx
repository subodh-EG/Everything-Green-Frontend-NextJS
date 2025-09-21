import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DateSelect from "@/components/dashboard/home/DateSelect";
import UserBarDiagram from "@/components/dashboard/home/UserBarDigram";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { IoMdRefresh } from "react-icons/io";
import { LuMoveRight } from "react-icons/lu";

const AttributionAudit = () => {
  return (
    <DashboardLayout>
      <DateSelect />

      {/* header */}

      <div className="flex  justify-between mt-5 ">
        <div>
          <h2 className="text-2xl font-bold ">Attribution Audit</h2>
          <p className="text-dark-400 underline mt-2">hashpotato.io</p>
        </div>
        <div className="bg-primary-500 text-white text-lg  px-6 max-h-12 rounded-md flex items-center gap-3">
          <IoMdRefresh />
          Run New Scan
        </div>
      </div>
      {/* line */}

      <hr className="border border-[#091E2133] mt-5 mb-6" />

      {/* Attribution match  */}

      <div className="col-span-3 border-2 border-[#FFA347] bg-[#fffaf2] p-5 rounded-md">
        <p className="text-2xl font-medium ">Attribution Match</p>

        <div className="relative w-full h-8 rounded-full mb-8 bg-gradient-to-r from-orange-300 via-yellow-300 to-green-300">
          {/* Moving Bubble */}
          <div className="absolute top-1/2 left-[64%] w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center font-bold text-lg -translate-x-1/2 -translate-y-1/2">
            64
          </div>

          {/* Vertical Dashed Line */}
          {/* <div className="absolute h-full w-px border-l-2 border-dashed border-blue-400 left-[68%]"></div> */}

          {/* Labels Under the Bar */}
          <div className="absolute inset-x-0 -bottom-9 flex justify-between  ">
            {[...Array(11)].map((_, i) => (
              <div
                key={i}
                className="text-gray-500 text-sm flex flex-col items-center"
              >
                <p>|</p>
                <p>{i * 10}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-sm space-y-2 ">
          <div className="font-bold">
            Match Value (by traffic type)
            <span className="text-gray-900 ml-2">75%</span>
          </div>
          <div>Paid - Match between Ad and the landing page</div>
          <div>Organic - Match between Keyword and landing page</div>
        </div>
      </div>

      {/* Summary */}

      <div className="grid grid-cols-4 gap-6 mt-6">
        <div className="bg-white p-7 border-2 border-primary-500 rounded-md col-span-1">
          <h4 className="text-2xl font-bold">Audit Summary</h4>
          <div className="mt-6 flex flex-col gap-3">
            <p>
              Event tags found: <span className="text-primary-500">6/10</span>
            </p>
            <p>
              Conversion Pixels: <span className="text-primary-500">OK</span>
            </p>
            <p>
              Attribution model: <span className="font-bold">Data-driven</span>
            </p>
            <p>
              Bot filter: <span className="text-primary-500">Enabled</span>
            </p>
          </div>
        </div>
        <div className="bg-white p-8 border-2 border-primary-500 rounded-md col-span-3">
          <h4 className="text-2xl  font-bold">Micro conversion tagging</h4>

          <div className="flex flex-col gap-5 mt-5">
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2">
                /home <LuMoveRight />
                newsletter
              </p>

              <div className="bg-[#daf2e6] text-primary-500 flex items-center py-1 px-3 rounded-3xl gap-2">
                <FiCheckCircle />
                Found
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p>/signup </p>

              <div className="bg-[#daf2e6] text-primary-500 flex items-center py-1 px-3 rounded-3xl gap-2">
                <FiCheckCircle />
                Found
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2">
                /product
                <LuMoveRight />
                add-to-cart
              </p>

              <div className="bg-[#f2dada] text-red-600 flex items-center py-1 px-3 rounded-3xl gap-2">
                <FiCheckCircle />
                Missing (add tag)
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p>/signup </p>

              <div className="bg-[#f2dada] text-red-600 flex items-center py-1 px-3 rounded-3xl gap-2">
                <FiCheckCircle />
                Missing (add tag)
              </div>
            </div>
          </div>

          {/* explain */}
          <h5 className="text-2xl font-bold mt-14">Explanation</h5>
          <p className="text-sm mt-2">
            Event Tags score: 6 of 10 expected tags present; missing tags listed
            above and recommended snippet available
          </p>
        </div>
      </div>

      {/* bar diagram */}

      <UserBarDiagram />

    </DashboardLayout>
  );
};

export default AttributionAudit;
