import React from "react";
import players from "../assets/players.png";
import social from "../assets/social.PNG";
import socialsm from "../assets/socialsm.PNG";
import SimpleSlider from "./SimpleSlider";

const Banner = () => {
  return (
    <div className=" pt-0 banner">
      <div className=" container mx-auto flex lg:flex-row flex-col-reverse">
        <div class="p-5">
          <div class="flex flex-col lg:items-start items-center lg:space-y-10 space-y-5">
            <div class="lg:text-2xl text-lg text-white font-[400] uppercase">
              Sign Up &amp; <span class="text-[#3BC117]">Get</span> Reward
            </div>
            <div class="lg:text-6xl text-3xl uppercase font-[600] text-white">
              <span>Up to</span>
              <b class="text-grad"> ৳ 2,100,000</b>
            </div>
            <div class="flex lg:flex-row flex-col items-center lg:space-x-5 lg:space-y-0 space-y-5">
              <button class="btn-grad text-white font-[500] px-4 py-3">
                Sign Up Now
              </button>
              <div class="text-xl text-slate-300 text-white">or</div>
              <div class="other-group">
                <img src={social} className="lg:block hidden" />
                <img src={socialsm} className="lg:hidden block " />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={players} />
        </div>
      </div>
      <SimpleSlider />
    </div>
  );
};

export default Banner;
