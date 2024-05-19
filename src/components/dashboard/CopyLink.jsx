import React from "react";

const CopyLink = ({ title, link }) => {
  return (
    <div className="relative pr-14">
      <h4 className="text-primary text-[18px] font-bold">{title}</h4>
      <input
        className="bg-transparent border-0 outline-none text-white text-[15px] font-thin w-full h-7"
        type="text"
        value={link}
        readOnly
      />

      <button className="bg-gradient-gold rounded-[10px] text-black text-base font-bold tracking-[.6px] px-3 md:px-4 py-2 inline-flex items-center md:space-x-3 absolute right-0 bottom-0">
        <span className="hidden md:inline-block">Copy</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.4516 28.125H11.4418C10.3327 28.125 9.26904 27.6805 8.48481 26.8894C7.70059 26.0982 7.26001 25.0251 7.26001 23.9062V10.7812C7.26001 9.66237 7.70059 8.58931 8.48481 7.79814C9.26904 7.00697 10.3327 6.5625 11.4418 6.5625H24.4516C25.5607 6.5625 26.6243 7.00697 27.4086 7.79814C28.1928 8.58931 28.6334 9.66237 28.6334 10.7812V23.9062C28.6334 25.0251 28.1928 26.0982 27.4086 26.8894C26.6243 27.6805 25.5607 28.125 24.4516 28.125Z"
            fill="black"
          />
          <path
            d="M10.048 4.6875H23.7478C23.4587 3.86557 22.9246 3.15403 22.2187 2.65048C21.5129 2.14693 20.6699 1.87605 19.8054 1.875H6.79551C5.68645 1.875 4.6228 2.31947 3.83857 3.11064C3.05434 3.90181 2.61377 4.97487 2.61377 6.09375V19.2188C2.61481 20.0909 2.88332 20.9414 3.38245 21.6535C3.88158 22.3656 4.58688 22.9044 5.4016 23.1961V9.375C5.4016 8.1318 5.89113 6.93951 6.76249 6.06044C7.63386 5.18136 8.81568 4.6875 10.048 4.6875Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

export default CopyLink;
