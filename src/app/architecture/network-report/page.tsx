import Header from '@/components/common/Header';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import React from 'react';

const NetworkReport = () => {
  return (
    <DashboardLayout>
      <Header title={'Network Report'}></Header>
      <div className="mt-6 text-dark-500 grid grid-cols-3 gap-7">
        <div className="bg-white rounded-2xl px-5 py-6 col-span-2">
          <h4 className="font-bold text-2xl">
            Hosted IP Address: 35.213.174.59
          </h4>
          <div className="mt-7 flex ">
            <div className="text-xl font-medium flex flex-col gap-5 basis-1/2">
              <p>Hosted By:</p>
              <p>ISP AS NO:</p>

              <p>Hosted Country:</p>

              <p>Data Center City:</p>

              <p>Max Hop Count:</p>
            </div>
            <div className="flex flex-col gap-6">
              <p>Google LLC</p>
              <p>AS15169 Google LLC</p>

              <p>Singapore</p>

              <p>Singapore</p>
              <p>09</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-white rounded-2xl py-6 px-8">
          <p className="font-bold text-2xl">In Traffic signals</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NetworkReport;
