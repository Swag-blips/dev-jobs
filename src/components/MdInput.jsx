import React, { useContext, useState } from "react";
import search from "../assets/desktop/searchAlt.svg";
import locationIcon from "../assets/desktop/icon-location.svg";
import { JobContext } from "../../context/JobsProvider";

const MdInput = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");

  const {
    filterJobsByTitle,
    filterJobsByLocation,
    filterJobsByContract,
    filterjobsByContractAndLocation,
  } = useContext(JobContext);

  const filterWrapper = (location, isChecked) => {
    if (location && isChecked) {
      filterjobsByContractAndLocation(location, isChecked);
    } else if (location) {
      filterJobsByLocation(location);
    } else if (isChecked) {
      filterJobsByContract(isChecked);
    } else if (title) {
      filterJobsByTitle(title);
    } else {
      return;
    }
  };

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="relative 2xl:mr-[140px] 3xl:mr-0 3xl:ml-0 dark:bg-[#19202D] 2xl:ml-[165px] 2xl:w-auto hidden md:block bg-white w-full h-20 mt-[46px] rounded-[6px]">
      <div className="flex items-center w-full">
        <div className="relative w-full">
          <input
            placeholder="Filter by title..."
            onChange={(e) => setTitle(e.target.value)}
            className="text-[#19202D] dark:text-[#8C9096] dark:bg-[#19202D] w-full h-[80px] outline-none rounded-[6px] pl-[50px]"
          />
          <figure className="absolute top-[29px] left-0 ml-4">
            <img src={search} alt="search-img" />
          </figure>
        </div>

        <div className="bg-[#E2E6EA] dark:bg-[#2A3442] z-50 h-20 w-[1px]" />

        <div className="relative w-full">
          <input
            placeholder="Filter by location..."
            onChange={(e) => setLocation(e.target.value)}
            className="text-[#19202D] dark:text-[#8C9096] dark:bg-[#19202D] w-full h-[80px] outline-none rounded-[6px] pl-[50px]"
          />
          <figure className="absolute top-[29px] left-0 ml-4">
            <img src={locationIcon} alt="location-icon" />
          </figure>
        </div>

        <div className="bg-[#E2E6EA] dark:bg-[#2A3442] h-20 w-[1px]" />

        <div className="flex items-center gap-[16px] w-full  ml-[24px]">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={checkHandler}
            className="custom-checked w-6 h-6 "
          />
          <h2 className="font-bold text-[#19202D] dark:text-white">
            Full time
          </h2>

          <div className="">
            <button
              onClick={() => filterWrapper(location, isChecked)}
              className="bg-[#5964E0] h-12 w-full rounded-[5px] px-[16px] text-center text-white text-base font-bold"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MdInput;
