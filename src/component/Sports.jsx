import React from "react";
import casino from "../assets/casino.webp";
import sportsi from "../assets/sports.webp";
import casinoico from "../assets/casinoico.webp";
import sportsico from "../assets/sportsico.webp";

const Banner = ({ title, color, img, desc, btnTxt, btnBG, icon }) => (
  <div className={`${color}`}>
    <img src={img} alt="img" />
    <div className="p-5 glass flex flex-col space-y-5">
      <div className="flex items-center space-x-2">
        <img src={icon} alt="icon" className="w-6"/>
        <p className="text-2xl text-white  font-[600] uppercase">{title}</p>
      </div>
      <p className="text-[#98A7B5] text-xl font-[400]">{desc}</p>
      <button className={`${btnBG} w-full p-3 text-2xl font-[500]`}>
        {btnTxt}
      </button>
    </div>
  </div>
);

const Sports = () => {
  return (
    <div className="grid grid-cols-2 gap-2 container mx-auto py-10">
      <Banner
        btnTxt="Go to Casino"
        img={casino}
        color="casino"
        title="casino"
        desc="Dive into our wide range of in-house games, live casino and slots to experience a thrilling casino adventure."
        btnBG="ui-button-casino"
        icon={casinoico}
      />
      <Banner
        btnTxt="Go to Casino"
        img={sportsi}
        color="sports"
        title="sports"
        desc="Dive into our wide range of in-house games, live casino and slots to experience a thrilling casino adventure."
        btnBG="ui-button-sports"
        icon={sportsico}
      />
    </div>
  );
};

export default Sports;
