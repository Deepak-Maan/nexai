import React from 'react'
import UtilityImg from '../assets/images/png/utility-Img.png'
import CommonButton from './CommonButton'
const Utility = () => {
    return (
        <div>
            <div className='max-w-[1300px] pt-[160px] mx-auto px-3'>
                <h2 className='text-[#02CDCF] text-[40px] font-recharge font-bold leading-[50px] text-center'>NexAI Token & utility</h2>
                <div className="grid lg:grid-cols-2 ">
                    <div className='relative max-lg:flex max-lg:justify-center overflow-hidden'>
                        <div className='relative before:absolute before:animate-pulse before:mix-blend-color before:z-20 after:animate-pulse  before:top-0 before:left-[55px]   before:w-[511px] before:h-[511px] before:bg-[#02CDCF] after:absolute after:mix-blend-hue  after:top-0 after:left-[55px] after:z-[1] after:w-[511px] after:h-[511px] after:bg-[#02CDCF] '>
                            <img className='ml-[-100px] overflow-hidden  relative z-[2]' src={UtilityImg} alt="Utility-Img" />
                        </div>
                    </div>
                    <div className='flex gap-[65px] ps-2 my-[63px] h-[512px] overflow-y-scroll my-scroll'>
                        <div className='after:flex after:w-[10px] after:h-[1485px] after:rounded-full after:bg-[#02CDCF]  '></div>
                        <div>
                            <div className='pb-[60px] relative'>
                                <div className='before:flex before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute max-[1180px]:before:left-0 before:left-[-15%] before:top-[33%]'></div>
                                <h3 className=' text-2xl pb-4 font-bold font-recharge leading-6 text-white'>Purchasing Nexai Products</h3>
                                <p className='text-base font-poppins leading-[25px] font-normal text-[#B4B4B4]'>Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of software solutions, hardware devices, including drones and sensors, and other smart home products available on the Nexai marketplace. Users can confidently make purchases using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.</p>
                            </div>
                            <div className='pb-[60px] relative'>
                                <div className='before:flex before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:left-[-15%] before:top-[33%]'></div>
                                <h3 className=' text-2xl pb-4 font-bold font-recharge leading-6 text-white'>Purchasing Nexai Products</h3>
                                <p className='text-base font-poppins leading-[25px] font-normal text-[#B4B4B4]'>Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of software solutions, hardware devices, including drones and sensors, and other smart home products available on the Nexai marketplace. Users can confidently make purchases using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.</p>
                            </div>
                            <div className='pb-[60px] relative'>
                                <div className='before:flex before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:left-[-15%] before:top-[33%]'></div>
                                <h3 className=' text-2xl pb-4 font-bold font-recharge leading-6 text-white'>Purchasing Nexai Products</h3>
                                <p className='text-base font-poppins leading-[25px] font-normal text-[#B4B4B4]'>Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of software solutions, hardware devices, including drones and sensors, and other smart home products available on the Nexai marketplace. Users can confidently make purchases using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.</p>
                            </div>
                            <div className='pb-[60px] relative'>
                                <div className='before:flex before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:left-[-15%] before:top-[33%]'></div>
                                <h3 className=' text-2xl pb-4 font-bold font-recharge leading-6 text-white'>Purchasing Nexai Products</h3>
                                <p className='text-base font-poppins leading-[25px] font-normal text-[#B4B4B4]'>Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of software solutions, hardware devices, including drones and sensors, and other smart home products available on the Nexai marketplace. Users can confidently make purchases using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.</p>
                            </div>
                            <div className='pb-[60px] relative'>
                                <div className='before:flex before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:left-[-15%] before:top-[33%]'></div>
                                <h3 className=' text-2xl pb-4 font-bold font-recharge leading-6 text-white'>Purchasing Nexai Products</h3>
                                <p className='text-base font-poppins leading-[25px] font-normal text-[#B4B4B4]'>Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of software solutions, hardware devices, including drones and sensors, and other smart home products available on the Nexai marketplace. Users can confidently make purchases using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.</p>
                            </div>
                            <div className='relative'>
                                <div className='before:flex before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:left-[-15%] before:top-[33%]'></div>
                                <h3 className=' text-2xl pb-4 font-bold font-recharge leading-6 text-white'>Purchasing Nexai Products</h3>
                                <p className='text-base font-poppins leading-[25px] font-normal text-[#B4B4B4]'>Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of software solutions, hardware devices, including drones and sensors, and other smart home products available on the Nexai marketplace. Users can confidently make purchases using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col justify-between items-center mt-[287px] pb-[65px]">
                    <div className='max-md:pb-5'>
                        <h2 className='text-[40px] font-recharge font-bold leading-[52px] text-white'>Ready to get started</h2>
                        <h2 className=' text-[40px] font-recharge text-[#02CDCF] font-bold leading-[52px]'>Talk to us Today</h2>
                    </div>
                    <div>
                        <CommonButton text='Get Started' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Utility
