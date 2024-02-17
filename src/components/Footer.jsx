import React from 'react'
import { Facebook, Telegram, Twitter } from './Icons'

const Footersection = () => {
    return (
        <div className=' bg-[url(./assets/images/png/footer-bg.png)] bg-cover bg-center  bg-no-repeat '>
            <div className=' max-w-[1140px] px-3 mx-auto w-full'>
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 pt-0 sm:pt-[50px] md:pt-[145px]'>
                    <div className=' lg:col-span-2 pt-12'>
                        <h3 className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[25px] text-[#B4B4B4] max-w-[356px] pb-[20px]'>Nullam viverra natoque amet et sed scelerisque viverra fringilla platea. Ullamcorper.</h3>
                        <div className=' flex items-center gap-3'>
                            <a className=' duration-300 hover:-translate-y-2 rounded-full hover:shadow-[0px_0px_20px_1px_rgba(45,255,196,0.9)]' href="https://www.facebook.com/" target='_blank' rel='noreferrer'><Facebook /></a>
                            <a className=' duration-300 hover:-translate-y-2 rounded-full hover:shadow-[0px_0px_20px_1px_rgba(45,255,196,0.9)]' href="https://twitter.com/i/flow/login" target='_blank' rel='noreferrer'><Twitter /></a>
                            <a className=' duration-300 hover:-translate-y-2 rounded-full hover:shadow-[0px_0px_20px_1px_rgba(45,255,196,0.9)]' href="https://web.telegram.org/" target='_blank' rel='noreferrer'><Telegram /></a>
                        </div>
                    </div>

                    <div className=' pt-6 lg:pt-0 flex justify-between'>
                        <ul>
                            <li className=' pb-[10px] sm:pb-[20px] text-white font-recharge font-bold text-[16px] sm:text-[18px] leading-[21px]'>Quick links</li>
                            <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="#_">Home</a></li>
                            <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="#_">Features</a></li>
                            <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="#_">Marketplace</a></li>
                            <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="#_">Tokens</a></li>
                            <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="#_">NexChat</a></li>
                            <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="#_">About</a></li>
                        </ul>
                        <ul>
                            <li className=' pb-[10px] sm:pb-[20px] text-white font-recharge font-bold text-[16px] sm:text-[18px] leading-[21px]'>Information's</li>
                            <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="#_">Contact</a></li>
                            <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="#_">Phone</a></li>
                            <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="#_">terms</a></li>
                            <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="#_">Privacy</a></li>
                        </ul>
                    </div>

                </div>
                <hr className=' w-full h-[2px] bg-[#676D6D] mt-5 rounded-[16px] mb-[20px]' />
                <p className=' text-center font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] pb-[20px] text-[#B4B7B6]'>@Copyright.nexai</p>
            </div>
        </div>
    )
}

export default Footersection