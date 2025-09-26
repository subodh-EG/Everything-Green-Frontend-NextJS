'use client';

import React from 'react';

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = () => {
  return (
    <div className="h-40 w-40">
      <CircularProgressbar
        value={67}
        text={`${67}%`}
        styles={buildStyles({
          pathColor: '#1b9876', // Blue-500 (Tailwind's primary-500)
          textColor: '#000',
          trailColor: '#E5E7EB', // Optional: Gray-200 background
          backgroundColor: '#F3F4F6', // Optional
        })}
        strokeWidth={10}
      />
    </div>
  );
};

export default CircularProgress;
