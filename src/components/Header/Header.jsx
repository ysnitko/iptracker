import React from 'react';
import Infobar from '../InfoBar/Infobar';
import arrow from '../../assets/images/icon-arrow.svg';

const Header = () => {
  return (
    <header className="relative h-[280px] bg-header-pattern bg-no-repeat flex flex-col">
      <span className="m-6 text-white text-center text-3xl font-bold">
        IP Address Tracker
      </span>
      <form action="" className="m-auto my-0 w-2/5">
        <label htmlFor="search-request" className="w-full block flex">
          <input
            id="search-request"
            type="text"
            className="w-full rounded-l-2xl p-4"
            placeholder="Search for any IP Address or domain"
          />
          <button
            type="button"
            className="w-14 p-4 flex justify-center items-center border-none bg-btn-bg flex-row rounded-r-2xl"
          >
            <img src={arrow} alt="arrow-right" className="border-none" />
          </button>
        </label>
      </form>
      <Infobar />
    </header>
  );
};

export default Header;
