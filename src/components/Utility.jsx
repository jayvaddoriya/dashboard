export const TitlePrimary = ({ children }) => {
  return (
    <h2 className="text-[#1C1B18] text-2xl xl:text-[28px] font-Bungee font-bold uppercase mb-5">
      {children}
    </h2>
  );
};

export const TitleSecondary = ({ children }) => {
  return (
    <h3 className="bg-gradient-gold text-secondary bg-clip-text text-transparent uppercase font-Bungee text-xl lg:text-2xl m-0">
      {children}
    </h3>
  );
};
export const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export const CardBlack = ({ children }) => {
  return (
    <div className="bg-black border-[3px] border-secondary rounded-2xl_next shadow-one">
      {children}
    </div>
  );
};

export const CardGold = ({ children }) => {
  return (
    <div className="bg-gradient-gold border-[3px] border-[#2E2E2D] rounded-2xl_next shadow-one">
      {children}
    </div>
  );
};

export const Overlay = ({ overlay }) => {
  return (
    <div
      className={`${
        overlay ? "opacity-100 visible" : "opacity-0 invisible"
      } fixed w-screen h-screen top-0 left-0 right-0 bg-black/60 transition duration-300 z-40 `}
    ></div>
  );
};
