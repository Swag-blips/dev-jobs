import React from "react";
import scoot from "../assets/logos/scoot.svg";
import JobPageHeader from "./JobPageHeader";

const JobContent = () => {
  return (
    <div className="w-full">
      <JobPageHeader />
      <div className="relative px-6">
        <div className="bg-white rounded-md -mt-8 flex flex-col items-center p-6">
          <figure className="w-12 h-12 absolute top-0 bg-[#E99210] rounded-2xl flex items-center justify-center -mt-6">
            <img src={scoot} alt="company-logo" className="" />
          </figure>
          <div className="mt-6 text-center">
            <h2 className="text-xl text-[#19202D] font-bold">Scoot</h2>
            <p className="text-base text-[#6E8098] mt-2">Scoot.com</p>
            <button className="mt-6 mb-8 bg-[rgba(89,100,224,0.1)] w-36 h-12 rounded text-center">
              <p className="text-[#5964E0] text-base font-bold">Company Site</p>
            </button>
          </div>
        </div>
      </div>
      <main className="px-6 mt-8">
        <div className="bg-white w-full flex flex-col justify-center rounded-[6px]  px-6 pt-10">
          <div className="flex flex-col ">
            <div className="flex items-center text-left gap-3">
              <p className="text-[#6E8098]">1w ago</p>
              <div className="flex items-center gap-3">
                <div className="rounded-full h-1 w-1 bg-[#6E8098]" />
                <p className="text-[#6E8098]">Part Time</p>
              </div>
            </div>
            <h2 className="font-bold mt-2 text-left text-[#19202D] text-[20px]">
              Software engineer
            </h2>
            <p className="text-[#5964E0] mt-3  font-bold text-left text-[14px]">
              United kingdom
            </p>

            <button className="bg-[#5964E0] h-12 rounded-[5px] mt-[50px] text-center text-white text-base font-bold">
              Apply now
            </button>
            <p className="text-left text-[#6E8098] mt-[32px] text-base">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>

            <ul className="list-disc marker:text-[#5964E0] text-left text-[#6E8098]  text-base list-inside mt-8 flex flex-col justify-center gap-[8px]">
              <li>Morbi interdum mollis sapien. Sed</li>
              <li>
                Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                pulvinar risus
              </li>
              <li>
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
                lectus.
              </li>
              <li>Morbi interdum mollis sapien. Sed</li>
            </ul>

            <div className="mt-[32px] flex flex-col justify-center gap-6">
              <h2 className="text-[#19202D] text-[20px] font-bold text-left">
                What will you do
              </h2>
              <p className="text-left text-[#6E8098]  text-base">
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus libero, faucibus
                adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
                elementum hendrerit tortor. Sed semper lorem at felis.
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
                dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                dapibus eu, fermentum et, dapibus sed, urna.
              </p>
            </div>

            <ol className="list-decimal mb-10 marker:text-[#5964E0] marker:font-bold text-left text-[#6E8098]  text-base list-inside mt-8 flex flex-col justify-center gap-[8px]">
              <li>Morbi interdum mollis sapien. Sed</li>
              <li>
                Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                pulvinar risus
              </li>
              <li>
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
                lectus.
              </li>
              <li> Morbi interdum mollis sapien. Sed</li>
            </ol>
          </div>
        </div>
      </main>
      <div className="w-full bg-white flex items-center justify-center py-6 px-6 mt-16">
        <button className="bg-[#5964E0] h-12 w-full rounded-[5px]  text-center text-white text-base font-bold">
          Apply now
        </button>
      </div>
    </div>
  );
};

export default JobContent;
