import React from "react";
import coin from "../../assets/coin.png";
const Statistics = ({ bg }) => {
  let cardBg = "",
    textColor = "",
    hr = "",
    border = "";
  if (bg && bg === "gold") {
    cardBg = "bg-gradient-gold";
    textColor = "text-black";
    hr = "bg-[rgba(46,46,45,0.9)]";
    border = "border-[rgba(46,46,45,0.9)]";
  } else {
    cardBg = "bg-black";
    textColor = "text-white";
    hr = "bg-gradient-gold";
    border = "border-secondary";
  }
  return (
    <div
      className={`${cardBg} border-[3px] ${border} shadow-one rounded-2xl_next`}
    >
      <div className="grid grid-cols-[auto_90px] gap-4 items-center px-5 py-4">
        <div className={`${textColor}`}>
          <strong className="block text-[28px] font-bold mb-[2px">
            123456
          </strong>
          <span className="block text-[15px] font-normal tracking-[.48px] opacity-60">
            Total Packs
          </span>
        </div>
        <img className="max-w-full" src={coin} alt="Coin" />
      </div>
      <div className={`${hr} w-full h-[3px]`}></div>
      <div className="px-5 py-3">
        <p className={`${textColor} text-base tracking-[.48px] m-0`}>
          50 New today
        </p>
      </div>
    </div>
  );
};

export default Statistics;
