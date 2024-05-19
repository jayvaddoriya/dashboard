import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Utility";
import bgLoginPge from "../assets/bg-login-pge.webp";
import logo from "../assets/logo.png";
import brandText from "../assets/brand-text.png";
import lock from "../assets/lock.png";
import transLock from "../assets/trans-lock.png";
const Login = () => {
  return (
    <div className='min-h-screen bg-[#0B002B] relative font-inria-sans'>
      <div
        className='w-full h-full absolute top-0 start-0 bottom-0 end-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${bgLoginPge})` }}
      ></div>
      <div className='min-h-screen flex flex-col justify-center z-10 relative py-8'>
        <main>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-4 lg:gap-8 xl:gap-16 max-w-[1080px] mx-auto px-4 lg:px-8'>
            <div className='w-full rounded-2xl_next bg-[rgba(251,255,203,0.50)] drop-shadow-[0px_10px_9px_rgba(0,0,0,0.10)] border-[3px] border-[#F9F293] px-4 py-8 lg:px-12 space-y-7 md:space-y-[30px]'>
              <div className='text-center'>
                <img
                  src={logo}
                  className='w-[90px] md:w-[115px] lg:w-[120px] mx-auto'
                  alt=''
                />
              </div>
              <h1 className='w-[280px] mx-auto'>
                <span className='block font-Bungee text-black text-[18px] uppercase mb-3'>
                  Welcome to{" "}
                </span>
                <img src={brandText} alt='MyInfinity' />
              </h1>

              <div className='text-center md:!mt-[50px]'>
                <p className='font-semibold text-black text-base mb-[10px]'>
                  New here?{" "}
                </p>
                <Link className='bg-btn-gradient-gold font-Bungee font-normal text-black uppercase text-base_next leading-tight px-4 py-4 inline-block drop-shadow-btn border border-black rounded-lg w-[280px]'>
                  Create an account first
                </Link>
              </div>
            </div>

            <div className='w-full rounded-2xl_next bg-gradient-gold box-shadow-[0px_11px_15px_0px_rgba(0,0,0,0.20)] border-[3px] border-[#F9F293] px-4 py-8 lg:px-12  relative'>
              <img
                className='absolute right-0 top-0 z-0 w-[50%] max-w-[270px]'
                src={transLock}
                alt='transparent-img'
              />
              <div className='relative z-10 space-y-7'>
                <div className='w-[90px] md:w-[120px] mx-auto'>
                  <img className='w-full' src={lock} alt='Lock' />
                </div>
                <div className='text-center space-y-3'>
                  <p className='text-base text-black font-semibold'>
                    1. Connect BSC Wallet
                  </p>
                  <Button className='text-shadow-one text-primary bg-btn-gradient-black rounded-lg font-Bungee font-normal tracking-[1.4px] uppercase text-base_next leading-tight px-6 py-4 inline-block drop-shadow-btn border border-black w-[280px]'>
                    Connect Wallet
                  </Button>
                </div>

                <div className='text-center space-y-3'>
                  <p className='text-base text-black font-semibold'>
                    2. Authenticate Wallet
                  </p>
                  <Button className='text-shadow-one text-primary bg-btn-gradient-black rounded-lg font-Bungee font-normal tracking-[1.4px] uppercase text-base_next leading-tight px-6 py-4 inline-block drop-shadow-btn border border-black w-[280px]'>
                    Login Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
