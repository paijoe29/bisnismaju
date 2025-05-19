"use client";

import React from 'react';

const AutomationAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Lane 1 */}
      <div className="absolute top-[20%] left-0 w-full h-4">
        <div
          className="absolute h-4 w-8 bg-yellow-300 rounded animate-flow-right"
          style={{ animationDelay: '0s', animationDuration: '5s' }}
        />
      </div>
      {/* Lane 2 */}
      <div className="absolute top-[45%] left-0 w-full h-4">
        <div
          className="absolute h-4 w-10 bg-yellow-400 rounded animate-flow-right"
          style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}
        />
      </div>
      {/* Lane 3 */}
      <div className="absolute top-[70%] left-0 w-full h-4">
        <div
          className="absolute h-4 w-6 bg-yellow-300 rounded animate-flow-right"
          style={{ animationDelay: '1s', animationDuration: '5.5s' }}
        />
      </div>

      {/* Static decorative elements (optional) */}
      <div className="absolute top-1/2 left-1/4 w-1 h-1/2 bg-white/20 -translate-y-1/2 rounded-full" />
      <div className="absolute top-1/2 left-1/2 w-1 h-1/3 bg-white/20 -translate-y-1/2 rounded-full" />
      <div className="absolute top-1/2 left-3/4 w-1 h-1/2 bg-white/20 -translate-y-1/2 rounded-full" />
    </div>
  );
};

export default AutomationAnimation;