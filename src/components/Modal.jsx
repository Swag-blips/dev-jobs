import React from "react";
import filter from "../assets/mobile/icon-filter.svg";

const Modal = ({ active, setActive }) => {
  return (
    <>
      {active && (
        <div
          className="fixed inset-0 z-[99] bg-black bg-opacity-50 flex h-[100vh] items-center justify-center"
          onClick={() => setActive(false)}
        ></div>
      )}
      <div
        id="popup-modal"
        tabIndex="-1"
        className={`overflow-y-auto overflow-x-hidden fixed z-[100] right-0 left-0 w-full md:inset-0 flex items-center justify-center h-[100vh] max-h-full ${
          active ? "block" : "hidden"
        }`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
