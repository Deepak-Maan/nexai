import React from 'react'
import { Clock, ClockPlus, Messages, ThreeLines } from './Icons'
const Features = () => {
    return (
        <div id='features' className='px-3 pt-12 md:pt-16 lg:pt-[120px] overflow-hidden'>
            <div className='max-w-[1340px] mx-auto  px-3 sm:px-6 md:px-12 lg:px-[100px] pt-7 sm:pt-20 border border-[#FCFCFC] bg-[url("./assets/images/png/features-bg.png")] bg-no-repeat max-lg:bg-cover max-lg:bg-center lg:bg-Bgsize100 rounded-[32px] h-[810px] overflow-hidden relative '>
                <div className='bg-[#02CDCF] h-[231px] w-[231px] blur-[180px] absolute z-[-1] right-[5%] top-[10%] animate-pulse '></div>
                <div className='bg-[#02CDCF] h-[231px] w-[231px] blur-[180px] absolute z-[-1] left-[3%] bottom-[10%] animate-pulse '></div>
                <div className="sticky top-0">
                    <h2 className='font-normal font-recharge leading-8 sm:leading-[50px] text-white text-[25px] sm:text-[40px] text-center'>Unique features</h2>
                    <p className=' text-center text-sm sm:text-base font-normal font-poppins leading-[25px] max-w-[397px] mx-auto pt-4 max-md:pb-4 text-[#B7B7B7]'>ability to engage in natural, fluent conversations in over 15 languages,</p>
                </div>
                <div className="grid lg:grid-cols-2 pt-10 sm:pt-20 max-h-[650px] sm:max-h-[576px] my-scroll  overflow-y-scroll">
                    <div className='flex flex-col max-lg:items-center'>
                        <div className='max-w-[364px] hover:scale-90 duration-300 bg-white px-6 pt-[30px] pb-11 rounded-2xl mb-5 sm:mb-10 md:mb-20 lg:mb-[175px]'>
                            <Clock />
                            <p className=' font-recharge font-bold text-xl leading-[32px] text-[#0B1010] pt-[30px]'>Remote Access and File Management</p>
                            <p className=' font-normal text-base font-poppins leading-[25px] pt-[10px]'> Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. </p>
                        </div>
                        <div className='max-w-[364px] hover:scale-90 duration-300 bg-white px-6 pt-[30px] pb-11 rounded-2xl'>
                            <Messages />
                            <p className=' font-recharge font-bold text-xl leading-[32px] text-[#0B1010] pt-[30px]'>Autonomous and Natural Language Communication</p>
                            <p className=' font-normal text-base font-poppins leading-[25px] pt-[10px]'> Nexai goes beyond standard home assistants by taking proactive initiatives and engaging in natural language conversations. It communicates with you as if you're talking to a friend, </p>
                        </div>
                    </div>
                    <div className='flex flex-col max-sm:mt-5 max-md:mt-20 max-lg:mt-[175px] lg:pt-[300px] items-center lg:items-end'>
                        <div className='max-w-[364px] hover:scale-90 duration-300 bg-white px-6 pt-[30px] pb-11 rounded-2xl mb-5 sm:mb-10 md:mb-20 lg:mb-[175px]'>
                            <ClockPlus />
                            <p className=' font-recharge font-bold text-xl leading-[32px] text-[#0B1010] pt-[30px]'>Real-time Home Monitoring</p>
                            <p className='font-normal text-base font-poppins leading-[25px] pt-[10px]'> While you're out with your family, you may wonder if you remembered to turn off the stove. Thanks to Nexai, this is no longer a concern. Using the Nexai app, you can initiate a video call with Nexai and activate the mini drone stationed in your home. </p>
                        </div>
                        <div className='max-w-[364px] hover:scale-90 duration-300 bg-white px-6 pt-[30px] pb-11 rounded-2xl'>
                            <ThreeLines />
                            <p className=' font-recharge font-bold text-xl leading-[32px] text-[#0B1010] pt-[30px]'>Intelligent Contextual Awareness</p>
                            <p className='font-normal text-base font-poppins leading-[25px] pt-[10px]'>Nexai utilizes the hardware sensors placed throughout your home to understand your location and deliver relevant information or actions. For instance, if you're in the bedroom and there's a smart TV present, Nexai will automatically display on the TV screen.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
