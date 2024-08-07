import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JobContext } from "../../context/JobsProvider";

const Jobs = () => {
  const { jobs, visible } = useContext(JobContext);

  return (
    <>
      <div
        className={`grid grid-cols-1  ${
          visible ? "pb-[20px]" : ""
        } 2xl:mx-[165px]  md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 3xl:mx-auto mt-[60px]`}
      >
        {jobs.map((job) => (
          <div key={job.id} className={`px-[24px] mt-[48px]  `}>
            <Link to={`/jobs/${job.id}`}>
              <div className="2xl:w-[350px]">
                <div className="w-full relative  pl-[32px] bg-white  dark:bg-[#19202D] rounded-[6px] ">
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
                      <p className="text-[#6E8098] font-normal">
                        {job.postedAt}
                      </p>
                      <div className="flex items-center gap-[12px]">
                        <div className="rounded-full h-[4px] w-[4px] bg-[#6E8098]" />
                        <p className="text-[#6E8098] font-normal">
                          {job.contract}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-[12px] mt-[16px]">
                      <h2 className="font-bold dark:text-white text-[20px] text-left text-[#19202D]">
                        {job.position}
                      </h2>
                      <p className="text-[#6E8098] text-left">{job.company}</p>
                    </div>

                    <p className="mt-[40px] text-[#5964E0] font-bold mb-[36px]">
                      {job.location}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div
        className={`mx-[24px] my-[24px] md:mt-[56px] xl:mt-[72px]  flex items-center justify-center ${
          visible ? "flex" : "hidden"
        }`}
      >
        <button className="bg-[#5964E0] h-12 rounded-[5px] px-[16px]  text-center text-white text-base font-bold">
          load More
        </button>
      </div>
    </>
  );
};

export default Jobs;
