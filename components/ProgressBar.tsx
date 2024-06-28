
'use client'
import React, { useEffect, useState, useRef } from 'react';

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface ProgressBarProps {
  value: number;
  max: number;
}

function ProgressBar({ value, max }: ProgressBarProps) {
  const [offset, setOffset] = useState(CIRCUMFERENCE);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStartedLoading, setHasStartedLoading] = useState(false);
  const progressBarRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedLoading) {
            setHasStartedLoading(true);
            const progressOffset = ((max - value) / max) * CIRCUMFERENCE;
            setOffset(progressOffset);

            const transitionDuration = 3; // duration in seconds for percentage to reach value

            const interval = setInterval(() => {
              if (displayValue < value && displayValue < 100) {
                setDisplayValue((prevValue) => Math.min(prevValue + 1, value));
              } else {
                clearInterval(interval);
              }
            }, (transitionDuration * 1000) / value);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the progress bar is visible
      }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, max, displayValue, hasStartedLoading]);

  return (
    <div ref={progressBarRef} className='relative flex items-center justify-center dark:bg-black'>
      <svg className="progress-ring" width="120" height="120">
        <circle
          stroke="orange"
          strokeWidth="8"
          fill="transparent"
          r={RADIUS}
          cx="60"
          cy="60"
        />
        <circle
          className="progress-ring__circle"
          stroke="lightgreen"
          strokeWidth="8"
          fill="transparent"
          r={RADIUS}
          cx="60"
          cy="60"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 3s linear' }}
        />
      </svg>
      <div className="absolute text-gray-900 dark:text-white font-semibold text-3xl">{displayValue}%</div>
      <div className="absolute text-gray-900 dark:text-white font-semibold text-sm bottom-6">Delicious</div>
    </div>
  );
}

export default ProgressBar;