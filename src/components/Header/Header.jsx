import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfoBar from '../InfoBar/InfoBar';
import { setCurrentRegionAC } from '../../redux/actions/currentRegionAC';
import { currentCoordinatesAC } from '../../redux/actions/currentCoordinatesAC';
import arrow from '../../assets/images/icon-arrow.svg';
import { ERRORS } from '../../errors';

const Header = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const ipAddressRef = useRef('');
  const validateIpRegex =
    /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/gm;
  const validateDomain =
    /^(?!-)[A-Za-z0-9-]+([/-/.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6}$/;

  const url =
    'https://geo.ipify.org/api/v2/country,city?apiKey=at_SlFCRhCHOcFT2vJZr2QAUczIXJtOk';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        dispatch(
          currentCoordinatesAC({
            lat: data.location?.lat,
            lng: data.location?.lng,
          })
        )
      );
  }, [dispatch]);

  const searchInfo = async (address) => {
    const res = await fetch(url + `&ipAddress=${address}`);
    const data = await res.json();
    dispatch(setCurrentRegionAC(data));
    dispatch(
      currentCoordinatesAC({
        lat: data.location?.lat,
        lng: data.location?.lng,
      })
    );
  };

  const searchDomain = async (address) => {
    const res = await fetch(url + `&domain=${address}`);
    const data = await res.json();
    dispatch(setCurrentRegionAC(data));
    dispatch(
      currentCoordinatesAC({
        lat: data.location?.lat,
        lng: data.location?.lng,
      })
    );
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    if (!ipAddressRef.current.value) {
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
    }
    if (ipAddressRef.current.value.match(validateIpRegex)) {
      await searchInfo(ipAddressRef.current?.value);
      setIsLoading(true);
      setIsError(false);
    } else if (ipAddressRef.current.value.match(validateDomain)) {
      await searchDomain(ipAddressRef.current?.value);
      setIsLoading(true);
      setIsError(false);
    } else {
      ipAddressRef.current.value = '';
      setIsError(true);
      return;
    }
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
            ref={ipAddressRef}
            id="search-request"
            type="text"
            className={
              isEmpty || isError
                ? 'w-full rounded-l-2xl p-4 px-8 outline-none text-lg font-medium text-text-info placeholder-red-400'
                : 'w-full rounded-l-2xl p-4 px-8 outline-none text-lg font-medium text-text-info'
            }
            placeholder={
              isEmpty
                ? ERRORS.err_empty_field
                : isError
                ? ERRORS.err_ip
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
      <InfoBar isLoading={isLoading} />
    </header>
  );
};

export default Header;
