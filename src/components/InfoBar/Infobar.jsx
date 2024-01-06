import React from 'react';

const Infobar = () => {
  return (
    <section className="absolute -bottom-1/2  -translate-y-1/2 -translate-x-1/2 left-1/2 w-4/5 h-36  bg-white border-b-blue-950 flex py-6 rounded-3xl my-0 mx-auto z-10">
      <div className="w-1/4 flex flex-col gap-2 pl-8 pr-4">
        <span className="text-text-clr text-xs font-bold">IP ADDRESS</span>
        <span className="text-2xl font-medium h-full">192.123.256.123</span>
      </div>
      <div className="w-1/4 flex flex-col pl-8 pr-4 border-l-2 gap-2">
        <span className="text-text-clr text-xs font-bold">LOCATION</span>
        <span className="text-2xl font-medium h-full">Brooklyn, NY 10001</span>
      </div>
      <div className="w-1/4 flex flex-col pl-8 pr-4 border-l-2 gap-2 ">
        <span className="text-text-clr text-xs font-bold">TIMEZONE</span>
        <span className="text-2xl font-medium h-full">UTC -05:00</span>
      </div>
      <div className="w-1/4 flex flex-col pl-8 pr-4 border-l-2 gap-2 ">
        <span className="text-text-clr text-xs font-bold">ISP</span>
        <span className="text-2xl font-medium h-full">SpaceX, Starlink</span>
      </div>
    </section>
  );
};

export default Infobar;
