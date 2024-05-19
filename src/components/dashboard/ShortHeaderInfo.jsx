import React from "react";

const ShortHeaderInfo = ({ icon, title, value }) => {
  return (
    <div className="grid grid-cols-[32px_auto] gap-2 align-items-center border-2 border-secondary rounded-[10px] px-3 h-12 items-center min-w-[180px]">
      <img className="max-w-full" src={icon} alt="icon" />
      <div>
        <span className="text-white text-xs tracking-[.22px] font-normal block leading-tight mb-[1px]">
          {title}
        </span>
        <strong className="text-primary font-bold text-sm tracking-[.45px] block">
          {value}
        </strong>
      </div>
    </div>
  );
};

export default ShortHeaderInfo;
