import React from "react";
import ShortHeaderInfo from "./ShortHeaderInfo";
import currency from "../../assets/currency.png";
import wallet from "../../assets/wallet.png";
import user from "../../assets/user.png";

const Drawer = ({ onCloseDrawer }) => {
  return (
    <div>
      <button onClick={onCloseDrawer} className="text-white mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </button>
      <div className="space-y-3 mb-4">
        <ShortHeaderInfo icon={currency} title="Balance" value="12312BNB" />
        <ShortHeaderInfo icon={wallet} title="Wallet" value="0x123456789" />
        <ShortHeaderInfo icon={user} title="User ID" value="@123456" />
      </div>
      <ul className="main-menu space-y-3 [&>li>a]:text-black [&>li>a]:text-white">
        <li className="active">
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">My Packs</a>
        </li>
        <li>
          <a href="#">My Referrals</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Activity</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
