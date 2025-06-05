"use client";

import Image from "next/image";

const summaryData = {
  totalActiveAds: 120,
  pendingApproval: 15,
  adRevenue: 4500,
  topPerformingAd: "Renovation Service",
};

export function AdsSummary() {
  return (
    <div className="grid grid-cols-4 gap-4.5 mb-9">
      <div className="bg-somke relative shadow-two min-h-24 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-theme-silver mb-2">
          Total Active Ads
        </h3>
        <p className="font-lato font-bold leading-tight text-black text-1xl">
          {summaryData.totalActiveAds}
        </p>
        <Image
          alt="chart"
          src="/images/bars.png"
          className="absolute end-3 bottom-3"
          width={72}
          height={52}
        />
      </div>

      <div className="bg-somke shadow-two min-h-24 rounded-xl p-5 relative">
        <Image
          alt="graph"
          src="/images/GraphYellow.png"
          className="absolute end-0 bottom-2"
          width={88}
          height={58}
        />
        <div className="flex gap-3">
          <div className="flex items-center justify-center rounded-full size-13.5 shrink-1 bg-theme-orange">
            <Image
              alt="users"
              src="/icons/UserDouble.svg"
              className="text-white"
              width={27}
              height={27}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-theme-silver mb-2">
              Pending Approval
            </h3>
            <p className="font-lato font-bold leading-tight text-black text-1xl">
              {summaryData.pendingApproval}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-somke shadow-two min-h-24 rounded-xl p-5">
        <div className="flex gap-3">
          <div className="flex items-center justify-center rounded-full size-13.5 shrink-1 bg-theme-orange">
            <Image
              alt="bars"
              src="/icons/Bars.svg"
              className="text-white"
              width={27}
              height={27}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-theme-silver mb-2">
              Ad Revenue
            </h3>
            <p className="font-lato font-bold leading-tight text-black text-1xl">
              ${summaryData.adRevenue.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-somke shadow-two min-h-24 rounded-xl p-5 bg-[linear-gradient(317.67deg,_#FB991C_1.54%,_rgba(251,153,28,0.75)_97.55%)] relative">
        <Image
          alt="chart"
          src="/images/ChartWhite.png"
          className="absolute end-0 top-0"
          width={88}
          height={58}
        />
        <h3 className="text-sm font-semibold mb-2 text-white">
          Top Performing Ad
        </h3>
        <p className="font-lato font-bold leading-tight text-1xl text-white">
          {summaryData.topPerformingAd}
        </p>
      </div>
    </div>
  );
}
