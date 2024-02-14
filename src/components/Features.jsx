import React from 'react'
import { Clock, Messages } from './Icons'
const Features = () => {
    return (
        <div className='px-3 pt-[120px]'>
            <div className='max-w-[1340px] mx-auto px-[100px] pt-20 border border-[#FCFCFC] bg-[url("./assets/images/webp/bgservices.webp")] bg-no-repeat bg-Bgsize100 rounded-[32px] h-[810px] overflow-hidden '>
                <div className="sticky top-0">
                    <h2 className='font-normal font-recharge leading-[50px] text-white text-[40px] text-center'>Unique features</h2>
                    <p className=' text-center text-base font-normal font-poppins leading-[25px] max-w-[397px] mx-auto pt-4 text-[#B7B7B7]'>ability to engage in natural, fluent conversations in over 15 languages,</p>
                </div>
                <div className="grid grid-cols-2 pt-20 max-h-[576px] my-scroll  overflow-y-scroll">
                    <div className='flex flex-col'>
                        <div className='max-w-[364px] bg-white px-6 pt-[30px] pb-11 rounded-2xl mb-[175px]'>
                            <Clock />
                            <p className=' font-recharge font-bold text-xl leading-[32px] text-[#0B1010] pt-[30px]'>Remote Access and File Management</p>
                            <p className='font-normal text-base font-poppins leading-[25px] pt-[10px]'> Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. </p>
                        </div>
                        <div className='max-w-[364px] bg-white px-6 pt-[30px] pb-11 rounded-2xl'>
                            <Messages />
                            <p className=' font-recharge font-bold text-xl leading-[32px] text-[#0B1010] pt-[30px]'>Autonomous and Natural Language Communication</p>
                            <p className='font-normal text-base font-poppins leading-[25px] pt-[10px]'> Nexai goes beyond standard home assistants by taking proactive initiatives and engaging in natural language conversations. It communicates with you as if you're talking to a friend, </p>
                        </div>
                    </div>
                    <div className='flex flex-col pt-[300px] items-end'>
                        <div className='max-w-[364px] bg-white px-6 pt-[30px] pb-11 rounded-2xl mb-[175px]'>
                            <Clock />
                            <p className=' font-recharge font-bold text-xl leading-[32px] text-[#0B1010] pt-[30px]'>Remote Access and File Management</p>
                            <p className='font-normal text-base font-poppins leading-[25px] pt-[10px]'> Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. </p>
                        </div>
                        <div className='max-w-[364px] bg-white px-6 pt-[30px] pb-11 rounded-2xl'>
                            <Messages />
                            <p className=' font-recharge font-bold text-xl leading-[32px] text-[#0B1010] pt-[30px]'>Autonomous and Natural Language Communication</p>
                            <p className='font-normal text-base font-poppins leading-[25px] pt-[10px]'> Nexai goes beyond standard home assistants by taking proactive initiatives and engaging in natural language conversations. It communicates with you as if you're talking to a friend, </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
