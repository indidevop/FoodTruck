import React from 'react'
import truck from "../assets/truck.png"
const Footer = () => {
  return (
    <div className='footer flex flex-col md:flex-row  mt-10 md:my-5'>
        <div className="logo md:w-[25%]">

        <img src={truck} alt="" className='mx-auto md:ml-10 mt-14 w-[161px] h-[108px]'/>
        </div>
        <div className="contact md:w-[25%] p-14 md:p-5">
            <p className="nav-title font-sans">Contact Us</p>
            <p className="address nav-subs font-sans">Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
            <p className="email nav-subs font-sans py-3">example2020@gmail.com</p>
            <p className="phone nav-subs font-sans">(904) 443-0343</p>
        </div>
        <div className="more md:w-[25%] px-14 py-5 md:p-5 md:ml-24">
            <p className="nav-title font-sans">
               More
            </p>
            <ul>
                    <li className='nav-subs font-sans cursor-pointer'>About Us</li>
                    <li className='nav-subs font-sans cursor-pointer'>Products</li>
                    <li className='nav-subs font-sans cursor-pointer'>Careers</li>
                    <li className='nav-subs font-sans cursor-pointer'>Contact Us</li>
                </ul>
        </div>
        <div className="social flex flex-col  items-center md:items-start md:w-[25%]  px-14 py-11 md:p-5">
        <p className="copyright md:mt-28 md:order-last">© 2022 Food Truck Example</p>
            <p className="nav-title hidden md:block  font-sans">Social Links</p>
            <ul className='flex mt-5 md:mt-0'>
                <li><i className="fa-brands fa-instagram pr-5 text-xl text-[#0E2368] cursor-pointer"></i></li>
                <li><i className="fa-brands fa-twitter pr-5 text-xl text-[#0E2368] cursor-pointer"></i></li>
                <li><i className="fa-brands fa-facebook-f pr-5 text-xl text-[#0E2368] cursor-pointer"></i></li>
            </ul>
            
        </div>
    </div>
  )
}

export default Footer