import React, { useContext, useEffect, useState } from "react";
import JobPageHeader from "./JobPageHeader";
import { JobContext } from "../../context/JobsProvider";
import { useParams } from "react-router-dom";

const JobContent = () => {
  const { id } = useParams();
  const { jobs } = useContext(JobContext);
  const [data, setData] = useState(null);
  const getJob = () => {
    let jobData = jobs.find((job) => job.id === parseInt(id));
    setData(jobData);
  };

  useEffect(() => {
    getJob();
  }, [id, jobs]);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full">
      <JobPageHeader />
      <div className="relative px-6">
        <div className="bg-white md:hidden dark:bg-[#19202D] rounded-md -mt-8 flex flex-col items-center p-6">
          <figure
            style={{ backgroundColor: `${data.logoBackground}` }}
            className="w-12 h-12 absolute top-0  rounded-2xl flex items-center justify-center -mt-6"
          >
            <img src={data.logo} alt="company-logo" className="" />
          </figure>
          <div className="mt-6 text-center">
            <h2 className="text-xl text-[#19202D]  dark:text-white font-bold">
              {data.company}
            </h2>
            <p className="text-base text-[#6E8098] mt-2">{data.website}</p>
            <a href={data.website}>
              <button className="mt-6 mb-8 bg-[rgba(89,100,224,0.1)] w-36 h-12 rounded text-center">
                <p className="text-[#5964E0] text-base font-bold">
                  Company Site
                </p>
              </button>
            </a>
          </div>
        </div>
        {/* <!------------------- > */}

        <div className="bg-white -mt-8 md:flex 2xl:mx-[165px] hidden dark:bg-[#19202D] rounded-md ">
          <div className="flex items-center">
            <figure
              style={{ backgroundColor: `${data.logoBackground}` }}
              className="w-[140px] h-full flex items-center justify-center "
            >
              <img
                src={data.logo}
                alt="company-logo"
                className=""
              />
            </figure>
            <div className="flex flex-col ml-[40px] justify-center">
              <h2 className="text-xl text-[#19202D] dark:text-white font-bold">
                {data.company}
              </h2>
              <p className="text-base text-[#6E8098] mt-2">{data.website}</p>
            </div>
          </div>

          <div className="mt-6 text-center ml-auto mr-10">
            <a href={data.website}>
              <button className="mt-6 mb-8 bg-[rgba(89,100,224,0.1)] w-36 h-12 rounded text-center">
                <p className="text-[#5964E0] text-base font-bold">
                  Company Site
                </p>
              </button>
            </a>
          </div>
        </div>

        {/* <!------------------- > */}
      </div>
      <main className="px-6 mt-8">
        <div className="bg-white 2xl:mx-[165px] dark:bg-[#19202D] flex flex-col justify-center rounded-[6px]  px-6 pt-10">
          <div className="flex flex-col ">
            <div className="flex flex-col  md:flex-row md:items-center ">
              <div className="flex flex-col">
                <div className="flex items-center text-left gap-3">
                  <p className="text-[#6E8098] dark:text-[#6E8098] ">
                    {data.postedAt}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full h-1 w-1 bg-[#6E8098]" />
                    <p className="text-[#6E8098] dark:text-[#6E8098] ">
                      {data.contract}
                    </p>
                  </div>
                </div>

                <h2 className="font-bold mt-2 text-left dark:text-white text-[#19202D] text-[20px]">
                  {data.position}
                </h2>
                <p className="text-[#5964E0] mt-3  font-bold text-left text-[14px]">
                  {data.location}
                </p>
              </div>
              <div className="md:ml-auto">
                <a href={data.apply}>
                  <button className="bg-[#5964E0] h-12 w-full md:py-4 md:flex md:items-center md:px-8 rounded-[5px] mt-[50px] md:mt-0 text-center text-white text-base font-bold">
                    Apply now
                  </button>
                </a>
              </div>
            </div>

            <p className="text-left dark:text-[#9DAEC2] text-[#6E8098] mt-[32px] text-base">
              {data.description}
            </p>
            <div className="flex flex-col justify-center gap-6 mt-16">
              <h2 className="text-[#19202D] dark:text-white text-[20px] font-bold text-left">
                Requirements
              </h2>
              <p className="text-left dark:text-[#9DAEC2] text-[#6E8098]  text-base">
                {data.requirements.content}
              </p>
              <ul className="list-disc marker:text-[#5964E0] text-left dark:text-[#9DAEC2] text-[#6E8098]  text-base list-inside  flex flex-col justify-center gap-[8px]">
                {data.requirements.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-[32px] flex flex-col justify-center gap-6">
              <h2 className="text-[#19202D] dark:text-white text-[20px] font-bold text-left">
                What will you do
              </h2>
              <p className="text-left text-[#6E8098] dark:text-[#9DAEC2]  text-base">
                {data.role.content}
              </p>
            </div>

            <ol className="list-decimal mb-10 dark:text-[#9DAEC2] marker:text-[#5964E0] marker:font-bold text-left text-[#6E8098]  text-base list-inside mt-8 flex flex-col justify-center gap-[8px]">
              {data.role.items.map((item, i) => (
                <li key={i}>{item} </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
      <div className="w-full md:hidden  dark:bg-[#19202D] bg-white flex items-center justify-center py-6 px-6 mt-16">
        <a href={data.apply} className="w-full">
          <button className="bg-[#5964E0] h-12 w-full rounded-[5px]  text-center text-white text-base font-bold">
            Apply now
          </button>
        </a>
      </div>
      <div className="bg-white hidden md:block  dark:bg-[#19202D] mt-[53px] px-[40px] 2xl:px-0 ">
        <div className="flex items-center 2xl:px-[190px] justify-between">
          <div className="flex flex-col my-6">
            <h2 className="text-[20px] font-bold dark:text-white">
              {data.position}
            </h2>
            <p className="text-[#6E8098] dark:text-[#9DAEC2] ">
              {data.company}
            </p>
          </div>
          <button className="bg-[#5964E0] h-12 w-[141px] rounded-[5px]  text-center text-white text-base font-bold">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobContent;
