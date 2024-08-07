import React from "react";
import search from "../assets/desktop/searchAlt.svg";
import location from "../assets/desktop/icon-location.svg";

const MdInput = () => {
  return (
    <div className="relative hidden md:block bg-white w-full h-20 mt-[46px] rounded-[6px]">
      <div className="flex items-center w-full">
        <div className="relative w-full">
          <input
            placeholder="Filter by title..."
            className="text-[#19202D] dark:text-[#8C9096] dark:bg-[#19202D] w-full h-[80px] outline-none rounded-[6px] pl-[50px]"
          />
          <figure className="absolute top-[29px] left-0 ml-4">
            <img src={search} alt="search-img" />
          </figure>
        </div>

        <div className="bg-[#E2E6EA] z-50 h-20 w-[1px]" />

        <div className="relative w-full">
          <input
            placeholder="Filter by location..."
            className="text-[#19202D] dark:text-[#8C9096] dark:bg-[#19202D] w-full h-[80px] outline-none rounded-[6px] pl-[50px]"
          />
          <figure className="absolute top-[29px] left-0 ml-4">
            <img src={location} alt="search-img" />
          </figure>
        </div>

        <div className="bg-[#E2E6EA] h-20 w-[1px]" />

        <div className="flex items-center gap-[16px] w-full  ml-[24px]">
          <input type="checkbox" className="custom-checked w-6 h-6 " />
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
