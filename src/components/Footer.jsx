import React from "react";
import { Facebook, Telegram, Twitter } from "./Icons";

const Footer = () => {
    return (
        <div className=" bg-footer bg-no-repeat bg-cover bg-center min-h-[492px] flex flex-col justify-center">
            <div className=" max-w-[1164px] px-3 mx-auto">
                <div className=" grid lg:grid-cols-3 grid-cols-1  pt-[145px]">
                    <div className=" col-span-2">
                        <h2 className=" text-base font-bold leading-[25px] pt-9 font-recharge text-[#B4B4B4] max-w-[356px]">Nullam viverra natoque amet et sed scelerisque viverra fringilla platea. Ullamcorper.</h2>
                        <div className=" flex gap-3 pt-5">
                            <a className="duration-300 hover:-translate-y-2 rounded-full hover:shadow-[0px_0px_20px_1px_rgba(45,255,196,0.9)]" href="">< Facebook /></a>
                            <a className="duration-300 hover:-translate-y-2 rounded-full hover:shadow-[0px_0px_20px_1px_rgba(45,255,196,0.9)]" href=""><Twitter /></a>
                            <a className="duration-300 hover:-translate-y-2 rounded-full hover:shadow-[0px_0px_20px_1px_rgba(45,255,196,0.9)]" href=""><Telegram /></a>
                        </div>
                    </div>
                    <div>
                        <div className=" flex md:gap-[125px] gap-[20px]">
                            <ul className=" flex flex-col gap-5 ">
                                <li className=" font-bold text-[18px] leading-[21px] font-recharge text-[#fff]">Quick links</li>
                                <li><a className=" text-base font-bold leading-[19px] font-recharge text-[#B7B9B9] hover:text-white duration-300" href="">Home</a></li>
                                <li><a className=" text-base font-bold leading-[19px] font-recharge text-[#B7B9B9] hover:text-white duration-300" href="">Features</a></li>
                                <li><a className=" text-base font-bold leading-[19px] font-recharge text-[#B7B9B9] hover:text-white duration-300" href="">Marketplace</a></li>
                                <li><a className=" text-base font-bold leading-[19px] font-recharge text-[#B7B9B9] hover:text-white duration-300" href="">Tokens</a></li>
                                <li><a className=" text-base font-bold leading-[19px] font-recharge text-[#B7B9B9] hover:text-white duration-300" href="">NexChat</a></li>
                                <li><a className=" text-base font-bold leading-[19px] font-recharge text-[#B7B9B9] hover:text-white duration-300" href="">About</a></li>
                            </ul>
                            <ul className=" flex flex-col gap-5">
                                <li className=" font-bold text-[18px] leading-[21px] font-recharge text-[#fff]">Information's</li>
                                <li><a className=" text-base font-bold leading-[19px] font-recharge text-[#B7B9B9] hover:text-white duration-300" href="">Contact</a></li>
                                <li><a className=" text-base font-bold leading-[19px] font-recharge text-[#B7B9B9] hover:text-white duration-300" href="">Phone</a></li>
                                <li><a className=" text-base font-bold leading-[19px] font-recharge text-[#B7B9B9] hover:text-white duration-300" href="">terms</a></li>
                                <li><a className=" text-base font-bold leading-[19px] font-recharge text-[#B7B9B9] hover:text-white duration-300" href="">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="w-full h-[2px] rounded-[16px] bg-[#6B7170] mt-[30px]" />
                <p className=" font-bold text-base leading-[19px] font-recharge text-[#B4B6B6] text-center pt-5"> @Copyright.nexai</p>
            </div>
        </div>
    );
};

export default Footer;
