/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FAE676",
        secondary: "#F9F293",
      },
      fontSize: {
        xl_prev: "0.688rem",
        xs_next: "0.8125rem",
        base_next: "1.0625rem",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Bungee: ["Bungee", "sans-serif"],
      },
      backgroundImage: {
        "gradient-gold":
          "linear-gradient(116deg, #F9F293 16.5%, #CA9C52 24.34%, #F9F293 48.24%, #BB8F4D 76.5%, #F9F293 83.9%)",
        "btn-gradient-gold":
          "linear-gradient(0deg, rgba(252, 181, 0, 0.20) 0%, rgba(252, 181, 0, 0.20) 100%), linear-gradient(116deg, #F9F293 16.5%, #CA9C52 24.34%, #F9F293 48.24%, #BB8F4D 76.5%, #F9F293 83.9%)",

        "btn-gradient-black":
          "linear-gradient(0deg, rgba(60, 47, 15, 0.20) 0%, rgba(60, 47, 15, 0.20) 100%), linear-gradient(116deg, #333229 16.5%, #1C1B19 24.34%, #7C7C7C 48.24%, #000 76.5%, #090909 83.9%)",

        "gradient-black":
          "linear-gradient(116deg, #3A3933 16.5%, #E9E3D7 24.34%, #FFFCDA 48.24%, #DCBA86 76.5%, #F9F293 83.9%)",
      },
      borderRadius: {
        "2xl_next": "20px",
      },
      dropShadow: {
        btn: "10px 10px 30px rgba(0, 0, 0, 0.30)",
      },
      boxShadow: {
        one: "0px 10px 10px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
