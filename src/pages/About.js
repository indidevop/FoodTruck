import React from "react";
import about from "../assets/about.png";
const About = () => {
  return (
    // border-blue-600
    <div className="flex justify-center items-center">
      <div className="hidden md:flex left-about grad pl-40 h-[100vh] items-center ">
        <img
          src={about}
          alt=""
          className="border-4 rounded-sm border-[#E23744] w-[1000px]"
        />
      </div>
      <div className="flex flex-col right-about p-8 md:pr-40   text-center md:text-left md:pl-20 h-[100vh] md:h-[80vh] items-center justify-center md:items-start grad ">
        <p className="title font-sans text-[45px] md:text-[55px] leading-[69px] font-[700] text-[#0E2368] mb-5 md:mb-2">About Us</p>
        <p className="font-sans text-[16.44px] leading-[27.41px] font-[400] text-[#444957]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button className="bg-[#E23744] text-white font-sans leading-[36px] text-[18px] font-[400] rounded-[21px] px-[15px] py-[3px] w-[50%] md:w-[120px] mx-auto md:mx-0 mt-8">
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
