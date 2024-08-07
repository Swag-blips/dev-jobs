import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JobContext } from "../../context/JobsContext";

const Jobs = () => {
  const { jobs, visible } = useContext(JobContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[60px]">
      {jobs.map((job) => (
        <div key={job.id} className={`px-[24px] mt-[48px]  `}>
          <Link to={`/jobs/${job.id}`}>
            <div className="w-full relative  pl-[32px] bg-white  rounded-[6px] ">
              <figure
                style={{ backgroundColor: `${job.logoBackground}` }}
                className="w-[50px] rounded-[15px] h-[50px] absolute top-[-24px] flex items-center justify-center  z-50"
              >
                <img
                  src={`./src/assets/${job.logo}`}
                  alt="company-logo"
                  className=""
                />
              </figure>

              <div className="flex flex-col justify-center pt-[48px]">
                <div className="flex items-center gap-[12px]">
                  <p className="text-[#6E8098] font-normal">{job.postedAt}</p>
                  <div className="flex items-center gap-[12px]">
                    <div className="rounded-full h-[4px] w-[4px] bg-[#6E8098]" />
                    <p className="text-[#6E8098] font-normal">{job.contract}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-[12px] mt-[16px]">
                  <h2 className="font-bold text-[20px] text-left text-[#19202D]">
                    {job.position}
                  </h2>
                  <p className="text-[#6E8098] text-left">{job.company}</p>
                </div>

                <p className="mt-[40px] text-[#5964E0] mb-[36px]">
                  {job.location}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <div className={`mx-[24px] my-[24px] ${visible ? "block" : "hidden"}`}>
        <button className="bg-[#5964E0] h-12 w-full rounded-[5px]  text-center text-white text-base font-bold">
          load More
        </button>
      </div>
    </div>
  );
};

export default Jobs;
