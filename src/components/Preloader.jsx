import React from 'react'

const Preloader = () => {
    return (
        <div className='flex space-x-2 justify-center items-center  h-screen '>
            <h1 className='font-recharge font-bold text-[#02CDCF] text-4xl md:text-5xl lg:text-[60px] pr-6 '>NEXAI</h1>
            <div className='flex gap-5'>
                <div className='lg:h-8 h-4 w-4 lg:w-8 bg-[#02CDCF] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                <div className='lg:h-8 h-4 w-4 lg:w-8 bg-[#02CDCF] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div className='lg:h-8 h-4 w-4 lg:w-8 bg-[#02CDCF] rounded-full animate-bounce'></div>
            </div>
        </div>
    )
}
export default Preloader