import React from "react";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";
import item5 from "../assets/item5.png";
import item6 from "../assets/item6.png";
import { useContext } from "react";
import dataContext from "../contexts/dataContext";

const Articles = () => {
  const { page } = useContext(dataContext);

  return (
    <div className="md:p-6 mt-24 md:mt-5 text-center md:text-left">
      <p className="title md:pl-8 font-sans text-[40px] md:text-[56px] leading-[42px] font-[600] text-[#0E2368]">
        Latest Articles
      </p>
      <div className="cards flex flex-col md:flex-row   md:mt-10 px-6">
        
        {page === 1 ? (
          <>
            <div className="card border-[1.37px] border-[rgba(55, 55, 55, 1)] md:border-[rgba(147, 162, 211, 0.38)] rounded-[21px] p-8 md:p-6 flex flex-col mx-3 py-12 mt-14 md:mt-0">
              <img src={item1} alt="" className="rounded-[21px]" />
              <p className="title-small poppins text-[21px] leading-[27px] text-[#0E2368] py-4  text-center md:text-left">
                Grilled Tomatoes at Home
              </p>
              <p className="text font-sans text-[12px] md:text-[15px] leading-[27px] font-[400] text-[#444957] pb-6 px-2 md:px-0 text-left">
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </p>
              <button className="border-[2px] border-[#424961] rounded-[21px]  text-[#424961] font-sans text-[16.44px] leading-[35.59px] font-[600] px-[26px] md:px-[11px] md:w-[110px] py-[2px] mt-2  mx-auto md:mx-0">
                Read More
              </button>
            </div>

            
            <div className="card border-[1.37px] border-[rgba(55, 55, 55, 1)] md:border-[rgba(147, 162, 211, 0.38)] rounded-[21px] p-8 md:p-6 flex flex-col mx-3 py-12 mt-14 md:mt-0">
              <img src={item2} alt="" className="rounded-[21px]" />
              <p className="title-small poppins text-[21px] leading-[27px] text-[#0E2368] py-4  text-center md:text-left">
                Snacks for Travel
              </p>
              <p className="text font-sans text-[12px] md:text-[15px] leading-[27px] font-[400] text-[#444957] pb-6 px-2 md:px-0 text-left">
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </p>
              <button className="border-[2px] border-[#424961] rounded-[21px]  text-[#424961] font-sans text-[16.44px] leading-[35.59px] font-[600] px-[26px] md:px-[11px] md:w-[110px] py-[2px] mt-2  mx-auto md:mx-0">
                Read More
              </button>
            </div>
            <div className="card border-[1.37px] border-[rgba(55, 55, 55, 1)] md:border-[rgba(147, 162, 211, 0.38)] rounded-[21px] p-8 md:p-6 flex flex-col mx-3 py-12 mt-14 md:mt-0">
              <img src={item3} alt="" className="rounded-[21px]" />
              <p className="title-small poppins text-[21px] leading-[27px] text-[#0E2368] py-4  text-center md:text-left">
                Post-workout Recipes
              </p>
              <p className="text font-sans text-[12px] md:text-[15px] leading-[27px] font-[400] text-[#444957] pb-6 px-2 md:px-0 text-left">
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </p>
              <button className="border-[2px] border-[#424961] rounded-[21px]  text-[#424961] font-sans text-[16.44px] leading-[35.59px] font-[600] px-[26px] md:px-[11px] md:w-[110px] py-[2px] mt-2  mx-auto md:mx-0">
                Read More
              </button>
            </div>
          </>
        ) : page === 2 ? (
          <>
            <div className="card border-[1.37px] border-[rgba(55, 55, 55, 1)] md:border-[rgba(147, 162, 211, 0.38)] rounded-[21px] p-8 md:p-6 flex flex-col mx-3 py-12 mt-14 md:mt-0">
              <img src={item4} alt="" className="rounded-[21px]" />
              <p className="title-small poppins text-[21px] leading-[27px] text-[#0E2368] py-4  text-center md:text-left">
                How To Grill Corn
              </p>
              <p className="text font-sans text-[12px] md:text-[15px] leading-[27px] font-[400] text-[#444957] pb-6 px-2 md:px-0 text-left">
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </p>
              <button className="border-[2px] border-[#424961] rounded-[21px]  text-[#424961] font-sans text-[16.44px] leading-[35.59px] font-[600] px-[26px] md:px-[11px] md:w-[110px] py-[2px] mt-2  mx-auto md:mx-0">
                Read More
              </button>
            </div>
            <div className="card border-[1.37px] border-[rgba(55, 55, 55, 1)] md:border-[rgba(147, 162, 211, 0.38)] rounded-[21px] p-8 md:p-6 flex flex-col mx-3 py-12 mt-14 md:mt-0">
              <img src={item5} alt="" className="rounded-[21px]" />
              <p className="title-small poppins text-[21px] leading-[27px] text-[#0E2368] py-4  text-center md:text-left">
                Crunchwrap Supreme
              </p>
              <p className="text font-sans text-[12px] md:text-[15px] leading-[27px] font-[400] text-[#444957] pb-6 px-2 md:px-0 text-left">
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </p>
              <button className="border-[2px] border-[#424961] rounded-[21px]  text-[#424961] font-sans text-[16.44px] leading-[35.59px] font-[600] px-[26px] md:px-[11px] md:w-[110px] py-[2px] mt-2  mx-auto md:mx-0">
                Read More
              </button>
            </div>
            <div className="card border-[1.37px] border-[rgba(55, 55, 55, 1)] md:border-[rgba(147, 162, 211, 0.38)] rounded-[21px] p-8 md:p-6 flex flex-col mx-3 py-12 mt-14 md:mt-0">
              <img src={item6} alt="" className="rounded-[21px]" />
              <p className="title-small poppins text-[21px] leading-[27px] text-[#0E2368] py-4  text-center md:text-left">
                Broccoli Cheese Soup
              </p>
              <p className="text font-sans text-[12px] md:text-[15px] leading-[27px] font-[400] text-[#444957] pb-6 px-2 md:px-0 text-left">
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </p>
              <button className="border-[2px] border-[#424961] rounded-[21px]  text-[#424961] font-sans text-[16.44px] leading-[35.59px] font-[600] px-[26px] md:px-[11px] md:w-[110px] py-[2px] mt-2  mx-auto md:mx-0">
                Read More
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Articles;
