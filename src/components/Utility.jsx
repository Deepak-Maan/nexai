import React from 'react'
import UtilityImg from '../assets/images/png/utility-Img.png'
import CommonButton from './CommonButton'
import ellipse from '../assets/images/png/ellipse-img.png'
const Utility = () => {
    return (
        <div id='token' className='relative overflow-x-clip'>
            <img className='absolute w-[209px] top-[3%] max-lg:hidden right-[-10%] min-[1440px]:right-[-6%] animate-spin [animation-duration:4s]' src={ellipse} alt="ellipse" />
            <img className='absolute w-[209px] bottom-[8%] max-lg:hidden right-[-10%] min-[1440px]:right-[-6%] animate-spin [animation-duration:4s]' src={ellipse} alt="ellipse" />
            <div className='bg-[#02CDCF] h-[231px] max-lg:hidden w-[231px] blur-[180px] absolute right-[2%] top-[25%] animate-pulse '></div>
            <div className='bg-[#02CDCF] h-[231px] max-lg:hidden w-[231px] blur-[180px] absolute left-[1%] top-[10%] animate-pulse '></div>
            <div className='bg-[#02CDCF] h-[231px] max-lg:hidden w-[231px] blur-[180px] absolute right-[1%] bottom-[10%] animate-pulse '></div>
            <div className='bg-[#02CDCF] h-[231px] w-[231px] blur-[180px] absolute left-[1%] bottom-[10%] animate-pulse '></div>
            <div className='max-w-[1300px] pt-14 md:pt-20 lg:pt-[160px] mx-auto px-3'>
                <h2 className='text-[#02CDCF] text-[25px] sm:text-[40px] font-recharge font-bold leading-8 sm:leading-[50px] text-center'>NexAI Token & utility</h2>
                <div className="grid lg:grid-cols-2 ">
                    <div className='relative  overflow-hidden'>
                        <div className='relative before:absolute max-lg:flex max-lg:justify-center before:animate-pulse before:mix-blend-color before:z-20 after:animate-pulse  before:top-0 before:left-[55px]   before:w-[511px] before:h-[511px] before:bg-[#02CDCF] after:absolute after:mix-blend-hue  after:top-0 after:left-[55px] after:z-[1] after:w-[511px] after:h-[511px] after:bg-[#02CDCF] '>
                            <img className='ml-[-100px] overflow-hidden  relative z-[2]' src={UtilityImg} alt="Utility-Img" />
                        </div>
                    </div>
                    <div className='ps-2 my-[63px] h-[512px] overflow-y-scroll my-scroll'>
                        <div className='after:flex after:w-[10px] relative after:absolute after:top-0 after:h-full after:rounded-full after:bg-[#02CDCF] flex flex-col after:z-0'>
                            <div className="min-[567px]:mb-[60px] mb-[20px] relative before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:-left-[6px] before:top-1/2 before:-translate-y-1/2 pl-[42px] sm:pl-20 before:z-10">
                                <h3 className=' min-[567px]:text-2xl text-[18px] min-[567px]:pb-4 font-bold font-recharge leading-6 text-white'>Purchasing Nexai Products</h3>
                                <p className='min-[567px]:text-base text-[12px] font-poppins min-[567px]:leading-[25px] font-normal text-[#B4B4B4]'>Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of software solutions, hardware devices, including drones and sensors, and other smart home products available on the Nexai marketplace. Users can confidently make purchases using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.</p>
                            </div>
                            <div className="min-[567px]:mb-[60px] mb-[20px] relative before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:-left-[6px] before:top-1/2 before:-translate-y-1/2 pl-[42px] sm:pl-20 before:z-10">
                                <h3 className=' min-[567px]:text-2xl text-[18px] min-[567px]:pb-4 font-bold font-recharge leading-6 text-white'>Accessing Exclusive Content</h3>
                                <p className='min-[567px]:text-base text-[12px] font-poppins min-[567px]:leading-[25px] font-normal text-[#B4B4B4]'>By holding Nex AI tokens, users will gain privileged access to exclusive content within the Nexai platform. These tokens will unlock premium features, advanced functionalities, and specialized services, enabling users to fully explore and enjoy the enhanced capabilities of Nexai's ecosystem.</p>
                            </div>
                            <div className="min-[567px]:mb-[60px] mb-[20px] relative before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:-left-[6px] before:top-1/2 before:-translate-y-1/2 pl-[42px] sm:pl-20 before:z-10">
                                <h3 className=' min-[567px]:text-2xl text-[18px] min-[567px]:pb-4 font-bold font-recharge leading-6 text-white'>Loyalty and Rewards</h3>
                                <p className='min-[567px]:text-base text-[12px] font-poppins min-[567px]:leading-[25px] font-normal text-[#B4B4B4]'>The Nexai ecosystem will feature a robust loyalty program, rewarding users with Nex AI tokens for their active engagement, ongoing participation, and dedicated usage of Nexai's products and services. Token holders will have the opportunity to redeem their accumulated rewards for discounts, incentives, or exclusive offers, fostering a strong sense of loyalty and encouraging continued involvement.</p>
                            </div>
                            <div className="min-[567px]:mb-[60px] mb-[20px] relative before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:-left-[6px] before:top-1/2 before:-translate-y-1/2 pl-[42px] sm:pl-20 before:z-10">
                                <h3 className=' min-[567px]:text-2xl text-[18px] min-[567px]:pb-4 font-bold font-recharge leading-6 text-white'>Participating in Governance</h3>
                                <p className='min-[567px]:text-base text-[12px] font-poppins min-[567px]:leading-[25px] font-normal text-[#B4B4B4]'>Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of software solutions, hardware devices, including drones and sensors, and other smart home products available on the Nexai marketplace. Users can confidently make purchases using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.</p>
                            </div>
                            <div className="min-[567px]:mb-[60px] mb-[20px] relative before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:-left-[6px] before:top-1/2 before:-translate-y-1/2 pl-[42px] sm:pl-20 before:z-10">
                                <h3 className=' min-[567px]:text-2xl text-[18px] min-[567px]:pb-4 font-bold font-recharge leading-6 text-white'>Peer-to-Peer Transactions</h3>
                                <p className='min-[567px]:text-base text-[12px] font-poppins min-[567px]:leading-[25px] font-normal text-[#B4B4B4]'>Nex AI tokens will enable seamless peer-to-peer transactions within the Nexai community. Users will have the ability to exchange tokens with others for various purposes, such as purchasing pre-owned Nexai devices, engaging in token trading activities, or conducting value exchanges directly within the ecosystem, all with the utmost security and convenience.</p>
                            </div>
                            <div className="min-[567px]:mb-[60px] mb-[20px] relative before:w-6 before:h-6 before:rounded-full before:bg-white before:absolute before:-left-[6px] before:top-1/2 before:-translate-y-1/2 pl-[42px] sm:pl-20 before:z-10">
                                <h3 className=' min-[567px]:text-2xl text-[18px] min-[567px]:pb-4 font-bold font-recharge leading-6 text-white'>Token Staking and Rewards</h3>
                                <p className='min-[567px]:text-base text-[12px] font-poppins min-[567px]:leading-[25px] font-normal text-[#B4B4B4]'>Nex AI tokens will support staking mechanisms, allowing users to lock up their tokens for a specified period. By staking their tokens, users will earn additional rewards, such as interest, dividends, or other incentives, further incentivizing token holding and fostering long-term engagement and loyalty.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1140px] mx-auto flex md:flex-row flex-col justify-between md:items-center pt-5 sm:mt-15 md:mt-32 lg:mt-[287px] sm:pb-5 lg:pb-[65px]">
                    <div className='max-md:pb-5'>
                        <h2 className='text-[25px] relative z-[2] sm:text-[40px] font-recharge font-bold leading-8 sm:leading-[52px] text-white'>Ready to get started</h2>
                        <h2 className='text-[25px] relative z-[2] lg:text-[40px] font-recharge text-[#02CDCF] font-bold leading-8 sm:leading-[52px]'>Talk to us Today</h2>
                    </div>
                    <div className=' relative z-[2]'>
                        <CommonButton text='Get Started' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Utility
