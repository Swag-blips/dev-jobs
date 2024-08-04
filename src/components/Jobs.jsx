import React from "react";
import scoot from "../assets/logos/scoot.svg";
import crowdfund from "../assets/logos/crowdfund.svg";

const Jobs = () => {
  return (
    <div className="px-[24px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[96px]">
      <div className="w-full relative pl-[32px] bg-white  rounded-[6px] ">
        <figure className="w-[50px] rounded-[15px] h-[50px] absolute top-[-24px]  bg-[hsl(36,87%,49%)] flex items-center justify-center  z-50">
          <img src={scoot} alt="company-logo" className="" />
        </figure>

        <div className="flex flex-col justify-center pt-[48px]">
          <div className="flex items-center gap-[12px]">
            <p className="text-[#6E8098] font-normal">5h</p>
            <div className="flex items-center gap-[12px]">
              <div className="rounded-full h-[4px] w-[4px] bg-[#6E8098]" />
              <p className="text-[#6E8098] font-normal">Full time</p>
            </div>
          </div>

          <div className="flex flex-col gap-[12px] mt-[16px]">
            <h2 className="font-bold text-[20px] text-left text-[#19202D]">
              Senior sofware engineer
            </h2>
            <p className="text-[#6E8098] text-left">Scoot</p>
          </div>

          <p className="mt-[40px] text-[#5964E0] mb-[36px]">United kingdom</p>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
