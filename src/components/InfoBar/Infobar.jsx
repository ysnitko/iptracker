import React from "react";
import { useSelector } from "react-redux";

const Infobar = () => {
  const info = useSelector((store) => store.currentRegionReducer.info);
  return (
    <section className="lg: absolute -bottom-1/2  -translate-y-1/2 -translate-x-1/2 left-1/2 w-11/12 h-36  bg-white border-b-blue-950 flex py-6 rounded-3xl my-0 mx-auto z-10 sm: flex-col sm: min-h-72 sm: -bottom-80">
      <div className="w-1/4 flex flex-col gap-2 pl-8 pr-4 sm: w-full sm: justify-center sm: items-center">
        <span className="text-text-clr text-xs font-[900] tracking-widest">
          IP ADDRESS
        </span>
        <span className="inline-block text-2xl text-text-info font-medium h-full whitespace-wrap text-ellipsis overflow-auto overscroll-auto sm: text-xl ">
          {info.ip}
        </span>
      </div>
      <div className="w-1/4 flex flex-col pl-8 pr-4 border-l-2 gap-2 sm: w-full sm: items-center sm: justify-center">
        <span className="text-text-clr text-xs font-[900] tracking-widest">
          LOCATION
        </span>
        <span className="inline-block text-2xl text-text-info font-medium h-full whitespace-wrap text-ellipsis overflow-auto overscroll-auto sm: text-xl">
          {info.location?.timezone === undefined &&
          info.location?.region === undefined
            ? ""
            : `${info.location?.country}, ${info.location?.region}`}
        </span>
      </div>
      <div className="w-1/4 flex flex-col pl-8 pr-4 border-l-2 gap-2 sm: w-full sm: items-center sm: justify-center">
        <span className="text-text-clr text-xs font-[900] tracking-widest ">
          TIMEZONE
        </span>
        <span className="inline-block text-2xl text-text-info font-medium h-full whitespace-wrap text-ellipsis overflow-auto overscroll-auto sm: text-xl ">
          {info.location?.timezone === undefined
            ? ""
            : `UTC ${info.location?.timezone}`}
        </span>
      </div>
      <div className="w-1/4 flex flex-col pl-8 pr-4 border-l-2 gap-2 sm: w-full sm: items-center sm: justify-center">
        <span className="text-text-clr text-xs font-extrabold tracking-widest">
          ISP
        </span>
        <span className="inline-block text-2xl text-text-info font-medium h-full whitespace-wrap text-ellipsis overflow-auto overscroll-auto sm: text-xl">
          {info.isp}
        </span>
      </div>
    </section>
  );
};

export default Infobar;
