import React from 'react'
import { useContext } from "react";
import dataContext from "../contexts/dataContext";

const Pager = () => {
  const { page,setpage } = useContext(dataContext);
  return (
    <div className='flex justify-center my-8 md:my-0 md:mb-8'>
        <button id="left-nav" className='px-[5px] mx-1 border-[1px] border-[#424961] rounded-[5px] font-[500]' onClick={()=>{setpage(1)}}>{"<"}</button>
        <p className="page-number font-sans text-[15px] leading-[27.22px] font-[500] text-[#424961] px-1">{page}/2</p>
        <button id="right-nav" className='px-[5px] mx-1 border-[1px] border-[#424961] rounded-[5px] font-[500]' onClick={()=>{setpage(2)}}>{">"}</button>
    </div>
  )
}

export default Pager