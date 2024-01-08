import React, { useRef, useState } from 'react';
import Infobar from '../InfoBar/Infobar';
import arrow from '../../assets/images/icon-arrow.svg';

const Header = ({ setPosition, position }) => {
  const [info, setInfo] = useState({});

  const ipAdressRef = useRef('');

  const searchInfo = async () => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_0jU0rVtiKviW1hSgpjjuwVMfF660F&ipAddress=${ipAdressRef.current.value}`
    );
    const data = await res.json();
    return data;
  };

  const searchCoordinates = async (region) => {
    const res = await fetch(
      `http://api.positionstack.com/v1/forward?access_key=4fef2a2546a691d417d1b443c7a4d405&query=${region}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const getData = await searchInfo();
    setInfo(getData);
    console.log(info);
    const getCoordinates = await searchCoordinates(info.location?.region);
    console.log(getCoordinates);
    // setPosition({ lat: getCoordinates.lat, lng: getCoordinates.lng });
    // console.log(position);
  };

  return (
    <header className="relative h-[280px] w-full bg-header-pattern bg-no-repeat bg-cover flex flex-col">
      <span className="m-6 text-white text-center text-3xl font-bold">
        IP Address Tracker
      </span>
      <form action="" className="m-auto my-0 w-2/5" onSubmit={onSubmitForm}>
        <label htmlFor="search-request" className="w-full block flex">
          <input
            ref={ipAdressRef}
            id="search-request"
            type="text"
            className="w-full rounded-l-2xl p-4 outline-none"
            placeholder="Search for any IP Address or domain"
            required
          />
          <button
            type="button"
            className="w-14 p-4 flex justify-center items-center border-none bg-btn-bg flex-row rounded-r-2xl"
            onClick={onSubmitForm}
          >
            <img src={arrow} alt="arrow-right" className="border-none" />
          </button>
        </label>
      </form>
      <Infobar info={info} />
    </header>
  );
};

export default Header;
