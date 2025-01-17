/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "call-bg": "url('https://ihci.tuit.uz/fayllar/photo_2022-05-02_18-00-08.jpg')",
      },
    },
  },
  plugins: [],
};
