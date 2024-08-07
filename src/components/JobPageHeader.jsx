import React, { useContext } from "react";
import topBg from "../assets/mobile/bg-pattern-header.svg";
import logo from "../assets/desktop/logo.svg";
import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";
import { ThemeContext } from "../../context/ThemeProvider";
import { useNavigate } from "react-router-dom";

const JobPageHeader = () => {
  const navigate = useNavigate();

  const { handleThemeSwitchToDark, handleThemeSwitchToLight } =
    useContext(ThemeContext);
  return (
    <div className="font-kubmh">
      <div className="relative">
        <figure className="w-full">
          <img src={topBg} alt="top-background" className="w-full" />
        </figure>

        <div className="z-50 absolute w-full top-0 mt-[32px] px-[24px] flex flex-col justify-center">
          <div className="flex items-center justify-between">
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="logo"
              className="z-50 cursor-pointer"
            />
            <div className="flex items-center gap-[16px]">
              <img onClick={handleThemeSwitchToLight} src={sun} alt="sun" />
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#5964E0] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
              <img onClick={handleThemeSwitchToDark} src={moon} alt="moon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPageHeader;
