"use client";

import Image from "next/image";

const summaryData = {
  totalReferrals: 28,
  activeReferrals: 28,
  pendingReferrals: 5,
  totalEarnings: 620.0,
};

export function EarningsSummary() {
  return (
    <div className="grid grid-cols-4 gap-4.5 mb-9">
      <div className="bg-somke relative shadow-two min-h-24 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-theme-silver mb-2">
          Total Referrals
        </h3>
        <p className="font-lato font-bold leading-tight text-black text-1xl">
          {summaryData.totalReferrals}
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
              Active Referrals
            </h3>
            <p className="font-lato font-bold leading-tight text-black text-1xl">
              {summaryData.activeReferrals}
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
              Pending Referrals
            </h3>
            <p className="font-lato font-bold leading-tight text-black text-1xl">
              {summaryData.pendingReferrals.toLocaleString()}
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
          Total Earnings
        </h3>
        <p className="font-lato font-bold leading-tight text-1xl text-white">
          ${summaryData.totalEarnings.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
