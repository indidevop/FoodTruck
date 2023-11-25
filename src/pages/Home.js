import React from "react";
import truck from "../assets/truck.png";
import pizza from "../assets/pizza.png";
import rightred from "../assets/rightred.svg";

const Home = () => {
  return (
    // border-yellow-600
    <div className="home-container flex flex-col md:flex-row w-full md:pl-12 md:h-[118vh]">
      <div className="right relative h-[50vh] md:w-[50%] md:order-last">
        <button className="absolute z-30 text-white border-white border-[1px] rounded-[21px] py-[5px] px-[10px] md:px-[20px] right-2 md:right-8 top-8">Get In Touch</button>
        <img src={rightred} alt="" className="absolute z-20 w-[100%]  object-cover right-0" />
        <img src={pizza} alt="" className="absolute z-10 w-[100%]  object-cover right-0" />
      </div>
      <div className="left text-center md:text-left my-14 md:m-10 md:w-[50%] md:pr-40">
        <img src={truck} alt="truck" className="hidden md:block w-[120px] h-[83px] mt-7 mb-10" />
        <p className="title md:pl-2 font-sans text-[50px] md:text-[55px] leading-[69px] font-[700] text-[#0E2368]">Discover the <span className="text-[#E23744]">Best</span> Food and Drinks</p>
        <p className="pl-2 font-sans text-[16.44px] leading-[27.41px] font-[400] text-[#444957] mt-5">Naturally made Healthcare Products for the better care & support of your body.</p>
        <button className="bg-[#E23744] text-white font-sans leading-[36px] text-[18px] font-[500] rounded-[21px] px-[26px] py-[5px] mt-8 mb-10 md:mb-0">
         Explore Now!
        </button>
      </div>
      
    </div>
  );
};

export default Home;
