"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { step: "Landing page", label: "Step 1", value: 1600 },
  { step: "Product page", label: "Step 2", value: 1200 },
  { step: "Product details", label: "Step 3", value: 1800 },
  { step: "Add to cart", label: "Step 4", value: 900 },
  { step: "Checkout", label: "Step 5", value: 1300 },
];

export default function UserBarDiagram() {
  return (
    <main className=" flex items-center justify-center bg-white  mt-6 border-2 border-primary-500 rounded-lg ">
      <div className="p-6 w-full max-w-6xl">
        <h1 className="text-2xl font-bold mb-8">User Journey</h1>

        <div className="flex flex-row">
          {/* Y-axis label */}
          <div
            className="flex flex-col justify-between items-center  h-72"
            style={{ minWidth: "40px" }}
          >
            <div className="flex flex-col justify-between h-full w-full">
              <span className="text-xs text-gray-500">2000</span>

              <span className="text-xs text-gray-500">1000</span>
              <span className="text-xs text-gray-500">500</span>
              <span className="text-xs text-gray-500">0</span>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 w-full">
            {data.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Step title above */}
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="text-sm font-medium mb-2">{item.step}</p>

                {/* Chart column */}
                <div className="h-72 w-full flex items-end">
                  <div
                    className="bg-green-600 rounded-t-lg w-full"
                    style={{ height: (item.value / 2000) * 100 + "%" }}
                  />
                </div>

                {/* Abandonment below */}
                <div className="mt-2 text-center">
                  <p className="text-xs text-gray-500">Abandonment rate</p>
                  <p className="text-sm flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-600 inline-block"></span>
                    3 0.167%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
