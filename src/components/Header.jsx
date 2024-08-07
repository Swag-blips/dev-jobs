import React, { useContext, useState } from "react";
import topBg from "../assets/mobile/bg-pattern-header.svg";
import topBgMd from "../assets/tablet/bg-pattern-header.svg";
import topBgLg from "../assets/desktop/bg-pattern-header.svg";
import logo from "../assets/desktop/logo.svg";
import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";
import filter from "../assets/mobile/icon-filter.svg";
import search from "../assets/desktop/icon-search.svg";
import iconFilterDark from "../assets/mobile/icon-filter-dark.svg";
import Modal from "./Modal";
import { JobContext } from "../../context/JobsProvider";
import { ThemeContext } from "../../context/ThemeProvider";
import MdInput from "./MdInput";

const Header = () => {

  const [active, setActive] = useState(false);
  const [title, setTitle] = useState("");

  const { filterJobsByTitle } = useContext(JobContext);
  const {
    handleThemeSwitchToDark,
    theme,
    handleToggleSwitch,
    handleThemeSwitchToLight,
  } = useContext(ThemeContext);

  return (
    <div className="font-kubmh">
      <div className="relative">
        <figure className="w-full">
          <img src={topBg} alt="top-background" className="w-full md:hidden " />
        </figure>
        <figure className="w-full">
          <img
            src={topBgMd}
            alt="top-background"
            className="w-full hidden md:block xl:hidden"
          />
        </figure>
        <figure className="w-full">
          <img
            src={topBgLg}
            alt="top-background"
            className="w-full hidden xl:block"
          />
        </figure>

        <div className="z-50 absolute w-full top-0 mt-[32px] px-[24px] flex flex-col justify-center">
          <div className="flex items-center justify-between">
            <img src={logo} alt="logo" className="z-50 cursor-pointer" />
            <div className="flex items-center gap-[16px]">
              <img onClick={handleThemeSwitchToLight} src={sun} alt="sun" />
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  onChange={handleToggleSwitch}
                  checked={theme === "dark"}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-white  rounded-full peer dark:bg peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#5964E0] after:rounded-full after:h-5 after:w-5 after:transition-all  " />
              </label>
              <img onClick={handleThemeSwitchToDark} src={moon} alt="moon" />
            </div>
          </div>

          <div className="relative md:hidden">
            <input
              type="text"
              name="filter"
              id="filter"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Filter by title..."
              className="mt-[32px] text-[#19202D] dark:text-[#8C9096] dark:bg-[#19202D] w-full h-[80px] outline-none rounded-[6px] px-[16px]"
            />

            <div className="absolute right-0 bg-white  dark:bg-[#19202D]  top-5 mr-[16px] mt-[24px] flex items-center gap-[24px]">
              <img
                onClick={() => setActive(!active)}
                src={filter}
                alt="filter"
                className="dark:hidden"
              />
              <img
                onClick={() => setActive(!active)}
                src={iconFilterDark}
                alt="filter"
                className="dark:block hidden"
              />
              <button
                onClick={() => filterJobsByTitle(title)}
                className="bg-[#5964E0] flex items-center justify-center rounded-[5px] w-[48px] h-[48px] "
              >
                <img src={search} alt="search" />
              </button>
            </div>
          </div>

          <MdInput />
        </div>
      </div>
      {active ? <Modal active={active} setActive={setActive} /> : ""}
    </div>
  );
};

export default Header;
