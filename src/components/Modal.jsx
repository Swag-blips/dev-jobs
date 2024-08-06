import React from "react";
import location from "../assets/desktop/icon-location.svg";

const Modal = ({ active, setActive }) => {
  return (
    <>
      <div
        className="fixed inset-0 z-[99] bg-black bg-opacity-50 flex h-[100vh] items-center justify-center"
        onClick={() => setActive(false)}
      ></div>

      <div
        id="popup-modal"
        tabIndex="-1"
        className={`overflow-y-auto overflow-x-hidden fixed z-[100] right-0 left-0 w-full md:inset-0 flex items-center justify-center h-[50vh] max-h-full ${
          active ? "block" : "hidden"
        }`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className=" flex flex-col justify-center">
              <div className="mt-[24px] border-b-2 pb-[24px] ">
                <div className="ml-[24px] items-center gap-[16px]  flex ">
                  <img src={location} alt="filter-button" />
                  <input
                    placeholder="Filter by location..."
                    className="border-none text-left outline-none text-[#19202D] font-normal"
                  />
                </div>
              </div>

              <div className="flex items-center gap-[16px] mt-[24px] ml-[24px]">
                <input type="checkbox" className="custom-checked w-6 h-6" />
                <h2 className="font-bold text-[#19202D]">Full time only</h2>
              </div>

              <div className="mx-[24px] my-[24px]">
                <button className="bg-[#5964E0] h-12 w-full rounded-[5px]  text-center text-white text-base font-bold">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
