import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Infobar from '../InfoBar/Infobar';
import { setCurrenRegiontAC } from '../../redux/actions/currentRegionAC';
import { currentCoordinatesAC } from '../../redux/actions/currentCoordinatesAC';
import arrow from '../../assets/images/icon-arrow.svg';
import ip_local from '../../getLocalIp';

const Header = () => {
  const [empty, setEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const info = useSelector((store) => store.currentRegionReducer.info);
  const ipAdressRef = useRef('');

  const localIp = ip_local();
  console.log(localIp);

  const searchInfo = async (address) => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_0jU0rVtiKviW1hSgpjjuwVMfF660F&ipAddress=${address}`
    );
    const data = await res.json();
    dispatch(setCurrenRegiontAC(data));
    dispatch(
      currentCoordinatesAC({
        lat: data.location?.lat,
        lng: data.location?.lng,
      })
    );
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    if (!ipAdressRef.current.value) {
      setEmpty(true);
      return;
    } else {
      setEmpty(false);
    }
    await searchInfo(ipAdressRef.current?.value);
    setIsLoading(true);
    console.log(info);
  };

  return (
    <header className="relative min-h-[280px] w-full max-[640px]:bg-header-mob bg-header-pattern bg-no-repeat bg-cover flex flex-col">
      <span className="m-6 text-white text-center text-3xl max-[640px]:text-2xl font-semibold">
        IP Address Tracker
      </span>
      <form
        action=""
        className="m-auto my-0 w-2/5 max-[640px]:w-3/4"
        onSubmit={onSubmitForm}
      >
        <label htmlFor="search-request" className="w-full block flex">
          <input
            ref={ipAdressRef}
            id="search-request"
            type="text"
            className={
              empty
                ? 'w-full rounded-l-2xl p-4 px-8 outline-none text-lg font-bold text-text-info placeholder-red-400'
                : 'w-full rounded-l-2xl p-4 px-8 outline-none text-lg font-bold text-text-info'
            }
            placeholder={
              empty
                ? 'Please enter IP Address'
                : 'Search for any IP Address or domain'
            }
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
      <Infobar isLoading={isLoading} />
    </header>
  );
};

export default Header;
