import React from 'react'
import AssistantImg from '../assets/images/png/Assistant-Img.png'
import CommonButton from './CommonButton'
const Assistant = () => {
    return (
        <div className='relative overflow-x-clip mt-8 md:mt-[86px]'>
            <div className='bg-[#02CDCF] max-sm:hidden h-[231px] w-[231px] blur-[180px] absolute -right-[10%] top-[10%] animate-pulse '></div>
            <div className="mx-auto max-w-[1140px] px-3">
                <div className="grid lg:grid-cols-2 gap-5 sm:gap-12 lg:gap-24">
                    <div data-aos="zoom-in" className='relative'>
                        <div className='bg-[#02CDCF] max-sm:hidden h-[231px] w-[231px] blur-[180px] absolute left-[28%] top-[10%] animate-pulse '></div>
                        <img className='w-full' src={AssistantImg} alt="Assistant-Img" />
                    </div>
                    <div data-aos="zoom-out" className='pt-[30px]'>
                        <h2 className='font-recharge font-bold text-[25px] sm:text-[40px] text-[#02CDCF] max-w-[517px] leading-8 sm:leading-[50px] pb-4'>Ai-Powered Home Assistant</h2>
                        <p className='font-normal font-poppins text-sm sm:text-base text-[#B4B4B4] leading-[25px]'>Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
                        <p className='font-normal font-poppins text-sm sm:text-base text-[#B4B4B4] leading-[25px]'>Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
                        <p className='font-normal font-poppins text-sm sm:text-base text-[#B4B4B4] leading-[25px] pb-4 sm:pb-10'>assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
                        <CommonButton text='Learn More' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assistant
