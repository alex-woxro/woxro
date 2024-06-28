'use client';
import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full  object-cover">
        <source src="/assets/video/wox-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {/* <h1 className="text-white text-3xl font-bold">Crafting Digital Transformation Services & Solutions</h1> */}
      </div>
    </div>
  );
}

export default Banner;