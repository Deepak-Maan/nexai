import React from 'react'
import AI from '../assets/images/png/AI-img.png'
import CommonButton from './CommonButton'
const What = () => {
    return (
        <div id='chat' className='px-3 pt-12 md:pt-20 lg:pt-[160px]'>
            <div className="mx-auto overflow-hidden max-w-[1350px] pb-4 sm:pb-11 md:pb-24 lg:pb-[174px] pt-4 sm:pt-10 md:pt-20 lg:pt-[163px] ps-3 sm:ps-6 md:ps-12 lg:ps-[100px] border border-white rounded-3xl bg-[url('./assets/images/gif/What-bg.gif')] ">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-11">
                    <div className=' order-2 lg:order-1'>
                        <h2 className=' text-[25px] sm:text-[40px] font-recharge font-bold leading-8 sm:leading-[50px] text-[#02CDCF]'>What is NexAi?</h2>
                        <p className=' text-sm sm:text-base font-poppins font-normal leading-[25px] text-[#B7B8BB] max-w-[564px] pt-4 pb-2'>Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                        <p className=' text-sm sm:text-base font-poppins font-normal leading-[25px] text-[#B7B8BB] max-w-[564px] pb-4 sm:pb-10'>Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
                        <CommonButton text='Learn More' />
                    </div>
                    <div className='relative order-1 lg:order-2 justify-center flex'>
                        <div className='bg-[#02CDCF] h-[463px] w-[463px] blur-[180px] absolute right-0 top-0 animate-pulse '></div>
                        <img className='lg:max-w-[463px] mix-blend-lighten max-h-[463px]' src={AI} alt="AI-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default What
