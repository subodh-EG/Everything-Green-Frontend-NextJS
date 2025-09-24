// BarProgress.tsx
import React from 'react';
import clsx from 'clsx';

interface IBarProgress {
  width: number; // Width in percentage (0 to 100)
}

const BarProgress = ({ width }: IBarProgress) => {
  const getBarColor = (width: number) => {
    if (width <= 25) return 'bg-[#E3696A]'; // Red
    if (width <= 49) return 'bg-[#5db39b]'; // Light gray w/ opacity
    if (width <= 75) return 'bg-[#06b486]'; // Light green
    return 'bg-[#1B9876]'; // Dark green
  };

  return (
    <div className="h-4 bg-[#f2f2f2] rounded-md overflow-hidden">
      <div
        className={clsx(
          'h-full transition-all duration-500',
          getBarColor(width),
        )}
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default BarProgress;
