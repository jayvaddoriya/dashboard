import React from "react";
import { Button, CardBlack, TitleSecondary } from "../Utility";
import mike from "../../assets/mike.png";
import CopyLink from "./CopyLink";
const Announcement = () => {
  return (
    <CardBlack>
      <div className="p-6 md:p-8 grid lg:grid-cols-[250px_auto] gap-8 items-center">
        <div className="text-center">
          <img className="max-w-[200px] mx-auto" src={mike} alt="Mike" />
        </div>

        <div>
          <div className="md:flex justify-between items-start mb-6 space-y-3 md:space-y-0">
            <TitleSecondary>
              Your Unique <br /> Referral Link
            </TitleSecondary>

            <Button className="bg-gradient-gold rounded-[10px] text-black text-base font-bold tracking-[.6px] px-4 py-2">
              Change Username
            </Button>
          </div>
          <div className="space-y-3">
            <CopyLink
              title="Link to registration"
              link="https://app.myinfinity.io/register/username"
            />

            <CopyLink
              title="Link to registration"
              link="https://app.myinfinity.io/register/username"
            />
          </div>
        </div>
      </div>
    </CardBlack>
  );
};

export default Announcement;
