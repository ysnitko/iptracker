import React from 'react';
import { useSelector } from 'react-redux';

const InfoBar = ({ isLoading }) => {
  const info = useSelector((store) => store.currentRegionReducer.info);
  return (
    <div className="max-[640px]:min-h-[400px] absolute -bottom-1/2 max-[640px]:-translate-y-[-40%] -translate-y-1/3 -translate-x-1/2 left-1/2 max-[640px]:-bottom-[110px] max-[640px]:top-0 max-[640px]:right-0 z-10 w-11/12 max-[640px]:w-3/4 h-36">
      <section className="flex max-[640px]:flex-col max-[640px]:gap-2 flex-row    bg-white border-b-blue-950 py-6 rounded-3xl max-[640px]:min-h-[0px] max-[640px]:p-7 max-[640px]:h-fit">
        <div className="w-1/4 flex flex-col gap-2 pl-8 pr-4 max-[640px]:w-full max-[640px]:justify-center max-[640px]:items-center max-[640px]:p-0">
          <span className="text-text-clr text-xs font-[900] tracking-widest max-[640px]:text-[10px]">
            IP ADDRESS
          </span>
          <span className="inline-block text-xl text-text-info font-medium h-full whitespace-wrap text-ellipsis overflow-auto overscroll-auto max-[640px]:text-xl">
            {isLoading ? info.ip : '-'}
          </span>
        </div>
        <div className="w-1/4 flex flex-col pl-8 pr-4 border-l-2 max-[640px]:border-none gap-2 max-[640px]:w-full max-[640px]:items-center max-[640px]:justify-center max-[640px]:p-0">
          <span className="text-text-clr text-xs font-[900] tracking-widest max-[640px]:text-[10px]">
            LOCATION
          </span>
          <span className="inline-block text-xl text-text-info font-medium h-full whitespace-wrap text-ellipsis overflow-auto overscroll-auto max-[640px]:text-xl">
            {info.location?.timezone === undefined &&
            info.location?.region === undefined
              ? '-'
              : `${info.location?.country}, ${info.location?.region}`}
          </span>
        </div>
        <div className="w-1/4 flex flex-col pl-8 pr-4 border-l-2 max-[640px]:border-none gap-2 max-[640px]:w-full max-[640px]:items-center max-[640px]:justify-center max-[640px]:p-0">
          <span className="text-text-clr text-xs font-[900] tracking-widest max-[640px]:text-[10px]">
            TIMEZONE
          </span>
          <span className="inline-block  text-text-info font-medium h-full whitespace-wrap text-ellipsis overflow-auto overscroll-auto text-xl ">
            {info.location?.timezone === undefined
              ? '-'
              : `UTC ${info.location?.timezone}`}
          </span>
        </div>
        <div className="w-1/4 flex flex-col pl-8 pr-4 border-l-2 max-[640px]:border-none gap-2 max-[640px]:w-full max-[640px]:items-center max-[640px]:justify-center max-[640px]:pl-0 max-[640px]:pr-0">
          <span className="text-text-clr text-xs font-extrabold tracking-widest max-[640px]:text-[10px]">
            ISP
          </span>
          <span className="inline-block text-xl text-text-info font-medium whitespace-wrap text-ellipsis overflow-auto overscroll-auto max-[640px]:text-xl max-[640px]:text-center max-[640px]:leading-6">
            {isLoading ? info.isp : '-'}
          </span>
        </div>
      </section>
    </div>
  );
};

export default InfoBar;
