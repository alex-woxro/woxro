/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screen/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
        roboto: ['var(--font-roboto)'],
        ibmPlexSans: ['var(--font-ibm-plex-sans)'],
      },
      textColor: {
        'custom-white': 'rgba(255, 255, 255, 0.7)',
      },
      colors: {
        'link-blue': '#0E4FCA',
        'dull-grey': '#626262',
      },
    },
  },
  plugins: [],
};
