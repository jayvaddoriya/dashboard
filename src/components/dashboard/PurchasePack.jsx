import React from "react";
import { Button, CardGold, TitleSecondary } from "../Utility";
import coin2 from "../../assets/coin2.png";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";

const PurchasePack = () => {
  return (
    <CardGold>
      <div className="p-6 relative">
        <img
          className="absolute right-0 sm:right-14 -top-8 w-[80px] sm:w-[110px]"
          src={coin2}
          alt="coin"
        />
        <div className="black mb-8 sm:mb-14">
          <TitleSecondary>Purchase Packs</TitleSecondary>
        </div>
        <div className="flex items-center justify-between mb-8">
          <p className="text-black font-medium text-2xl m-0">$30 Per Pack</p>
          <div className="grid grid-cols-[50px_auto_50px] max-w-[160px]">
            <button className="bg-[#222020] rounded-[5px] inline-flex items-center justify-center w-[45px] h-[45px]">
              <img src={minus} alt="-" className="img-fluid" />
            </button>
            <input
              type="text"
              value="1"
              readOnly
              className="border-0 h-[45px] w-full text-black text-3xl font-extrabold bg-transparent outline-none text-center"
            />
            <button className="bg-[#222020] rounded-[5px] inline-flex items-center justify-center w-[45px] h-[45px]">
              <img src={plus} alt="+" className="img-fluid" />
            </button>
          </div>
        </div>

        <Button className="text-shadow-one text-primary bg-btn-gradient-black rounded-lg font-Bungee font-normal tracking-[1.4px] uppercase text-base_next leading-tight px-6 py-5 drop-shadow-btn border border-black inline-flex justify-between w-full mb-5">
          <span>Purchase Now</span> <span>$30</span>
        </Button>
        <p className="text-center text-black text-lg font-medium tracking-[.6px]">
          You will spend 1.4 bnb for this purchase
        </p>
      </div>
    </CardGold>
  );
};

export default PurchasePack;
